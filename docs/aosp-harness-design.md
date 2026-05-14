# AOSP Agent Harness — 設計筆記

> Status: design note / 思考紀錄，非實作規格。
> Branch: `claude/aosp-agent-harness-9WLOI`
> 用途：作為後續 AOSP agent harness 實作的 reference。

---

## 核心立場

AI agent / AI tool 的 harness engineering 真正有價值的地方，不是讓 LLM「會寫 AOSP code」，而是把它放進一個可控、可重播、可驗證的 Android 平台工程環境裡。

AOSP 太大、build/test 太貴、跨 repo 依賴太多，所以不能用「聊天機器人直接下 shell」的方式做。要做的是：把 AI 當 junior engineer，把 harness 當資深 build/test/review 系統。

---

## 1. 先定義：harness engineering 是什麼

在 AI agent 系統裡，harness 不是 prompt。它是包在 agent 外面的工程控制層：

- **Agent**：決定下一步要做什麼。
- **Tool**：單一能力，例如讀檔、搜尋 code、套 patch、build module、跑測試、查 Gerrit。
- **Harness**：負責限制、記錄、驗證、回滾、授權、資源控管。

換句話說：

- Prompt 讓 AI「想得比較像工程師」；
- Harness 讓 AI「只能像一個受控工程師那樣工作」。

對 AOSP 來說，這尤其重要，因為 AOSP 本來就是一個高度工具化的開發環境：Repo/Git、Soong/Android.bp、envsetup.sh、lunch、m、Cuttlefish、adb、Tradefed、CTS/VTS、Gerrit。

---

## 2. AOSP 場景裡，harness 的核心目標

AOSP 開發不是「產生一段 code」就結束。真正的閉環是：

```
理解任務
→ 找到相關 repo / module / Android.bp / owners / tests
→ 建立乾淨 branch
→ 修改 code
→ 格式化 / static check
→ incremental build
→ boot / adb / logcat
→ targeted tests
→ full or presubmit tests
→ 產生 Gerrit CL
→ 人類 review
```

所以 AOSP agent harness 要解的是五件事：

1. **上下文收斂**：AOSP 太大，不能把整個 tree 丟給模型。harness 要能根據錯誤 log、module name、symbol、Android.bp、Gerrit CL、test failure 找出最小相關上下文。
2. **安全修改**：agent 不能直接亂改整個 source tree。它應該只能在 task branch、allowlisted path、特定 project 內產生 patch。
3. **增量驗證**：AOSP full build 成本高（現代 AOSP checkout/build 需要 ≥400 GB disk、64 GB RAM，full build 可能數十分鐘到數小時），所以 harness 要優先跑 `m nothing`、module build、局部 tests，再升級到 device/CTS 層級。
4. **可重播**：每次 agent 動作都要能變成 script：manifest branch、repo SHA、lunch target、build command、test command、patch diff、logs 都要保存。
5. **人類審核閘門**：AOSP 進 Gerrit 是 review 流程，不該讓 agent 自動 submit/merge。

---

## 3. AOSP harness 的系統架構

```
User / CI / Gerrit comment / bug report
        ↓
Task Router
        ↓
Context Builder
  - repo manifest
  - affected project
  - Android.bp / OWNERS / tests
  - build logs / test logs / logcat
        ↓
Agent Planner
        ↓
Tool Broker / Policy Engine
  - read-only tools
  - patch tools
  - build tools
  - test/device tools
  - Gerrit tools
        ↓
Workspace Manager
  - clean checkout
  - task branch
  - cached out/
  - isolated credentials
        ↓
Verifier
  - m nothing
  - m <module>
  - bpfmt
  - unit/integration tests
  - Tradefed / CTS / VTS
  - Cuttlefish boot
        ↓
Review Package
  - diff
  - commands run
  - logs
  - risks
  - suggested reviewers
        ↓
Human approval → repo upload / Gerrit
```

重點：agent 不直接碰真實系統，agent 只向 Tool Broker 提出 action request。
Tool Broker 決定能不能做、怎麼做、在哪個 workspace 做、輸出怎麼被截斷、失敗怎麼回報。

---

## 4. AOSP 很適合做 harness，因為它有天然的工具邊界

### Repo / Git：多 repo workspace 邊界

AOSP 不是單一 Git repo。Repo 用 manifest 把多個 Git project 聚合成 Android superproject；Repo 不取代 Git，而是讓 Android 這種多 repo 工作流程更簡單。

Harness 裡應該有這些工具，不要讓 agent 自己亂下 shell：

```
repo_status()
repo_sync(projects?, branch?, current_branch_only=true)
repo_start(branch_name, project)
git_diff(project)
git_apply_patch(project, unified_diff)
repo_upload(project, reviewers?)  # 需要人工 approval
```

2026 起還要注意 branch 策略：AOSP 為了配合 trunk stable development model，建議 build/contribute 使用 `android-latest-release` 而不是 `aosp-main`；這會影響 agent 的預設 checkout、rebase、patch target。

### Soong / Android.bp：build graph 邊界

AOSP 用 Soong build system，blueprint files 叫 `Android.bp`。
這對 harness 很重要，因為很多修復不是改 C++/Java，而是改 module metadata、deps、visibility、namespace、test config。

```
parse_android_bp(path)
find_module(module_name)
find_reverse_deps(module_name)
run_bpfmt(paths)
build_module(module_name, target)
validate_build_graph()  # e.g. m nothing
```

Android.bp 還有一些特性必須讓 agent 知道：Soong 不支援在 Android.bp 裡寫一般條件式，複雜條件通常要透過 map property 或 Go 邏輯處理；`bpfmt -w .` 是 canonical formatting。

### envsetup.sh / lunch / m：build execution 邊界

AOSP build 不是隨便 make。流程是：

```
source build/envsetup.sh
lunch <product>-<release_config>-<variant>
m <goal>
```

`m nothing` 是驗證 build structure 的 pseudo target。

Harness 應該把它封裝成：

```
select_target(product, release_config, variant)
build(goal, jobs, timeout, clean_policy)
```

不要讓 agent 自己組超長 shell command。AOSP build command 一旦組錯，浪費的不是幾秒，是大量機器時間。

### Cuttlefish / adb：device validation 邊界

AOSP agent 如果只會編譯、不會 boot，就只能修很淺的問題。Cuttlefish 是可本地或遠端執行的 configurable virtual Android device，適合用來驗證 platform/framework code，且可與 adb 像實體 device 一樣互動。

```
launch_cuttlefish(image, instance_config)
adb_devices()
adb_shell(read_only_cmd)
collect_logcat(duration, filters)
stop_cuttlefish(instance_id)
```

真正的限制要很硬：adb shell 預設 read-only；涉及 remount、flash、wipe、root、fastboot 的動作需要更高權限。

### Tradefed / CTS / VTS：test harness 接 test harness

AOSP 已經有一個成熟測試 harness：Trade Federation。Tradefed 是 modular/flexible/scalable，支援 instrumentation、uiautomator、native/gtest、host-based JUnit 等多種 Android tests，並支援多 device parallel scheduling/execution。

AI harness 不應重造測試系統，而是把 Tradefed 包起來：

```
run_tradefed(config, device_selector, retry_policy)
run_cts_subset(module_or_plan)
run_vts_subset(module_or_plan)
summarize_test_failures(invocation_result)
```

這是「harness engineering 套 harness」：AI harness 管 agent 的行為；Tradefed 管 Android 測試執行。

---

## 5. 權限模型：不要一開始就給 agent 完整 shell

| Tier | 能力 | 用途 |
|------|------|------|
| L0 read-only | 讀檔、搜尋 code、讀 build/test logs | 問答、triage、review |
| L1 local patch | 在 task branch 套 patch | 小修、小型 refactor |
| L2 build | 跑 allowlisted build command | `m nothing`、`m <module>`、target build |
| L3 virtual device | 啟動 Cuttlefish、adb、logcat | boot test、framework validation |
| L4 test lab | Tradefed、CTS/VTS subset、device pool | presubmit 級驗證 |
| L5 Gerrit upload | `repo upload` | 只可送 review，不可 submit |
| L6 merge/release | submit、merge、release branch 操作 | 不給 agent 自動執行 |

最危險的是 L2/L3/L5。build 會吃大量資源；device 操作可能破壞 lab 狀態；Gerrit 操作會污染 review queue。都要有 policy gate。

---

## 6. 真實 AOSP workflow 範例

### 範例 A：修 build failure

輸入：

```
CI failed:
error: module "libfoo" depends on undefined module "libbar"
target: aosp_cf_x86_64_only_phone-aosp_current-userdebug
branch: android-latest-release
```

Harness 流程：

1. 建立 isolated workspace
2. `repo sync -c -jN`，branch = `android-latest-release`
3. 找 libfoo / libbar 的 Android.bp
4. 查 namespace / visibility / deps
5. agent 產生 patch
6. `bpfmt -w` affected Android.bp
7. `m nothing`
8. `m libfoo`
9. 產生 diff + build log + explanation
10. 人類確認後 `repo upload`

Agent 不需要知道整個 AOSP，只需要拿到 module 定義、附近 Android.bp、錯誤 log、Soong namespace 規則。

### 範例 B：修 framework 行為 regression

輸入：

```
SettingsProvider change caused boot failure on Cuttlefish.
logcat shows SecurityException during system_server init.
```

Harness 流程：

1. Checkout / sync target branch
2. 建立 task branch
3. 收集相關 Java/Kotlin/C++ 檔案
4. 收集 logcat around crash
5. 查 recent CL / blame
6. agent 提出 minimal fix
7. `m` affected module
8. build cf target image
9. launch Cuttlefish
10. `adb wait-for-device`
11. collect boot status / logcat
12. run targeted Tradefed or CTS subset
13. 產生 CL summary + risk analysis

Cuttlefish 是關鍵，因為它能讓平台/framework 修改在 virtual device 上被驗證，而不必一開始依賴實體硬體。

### 範例 C：Gerrit review assistant

輸入是一個 Gerrit CL。Agent 不直接改 code，而是：

1. 讀 CL diff
2. 找 affected modules / owners / tests
3. 跑 lightweight static checks
4. 建議 reviewer 該看什麼
5. 找出 risky pattern：
   - disabled test
   - broad sepolicy allow
   - public API change without API update
   - product-specific hack leaking into common framework
   - Android.bp visibility/deps 不合理
6. 產生 review comment draft

很適合先落地的場景，因為 read-only 或低權限就能產生很高價值。

---

## 7. Tool contract 要設計得像 API，不要像「讓模型打字」

不好的設計：

```
tool: shell(command: string)
```

等於讓 agent 開車上高速公路但沒有煞車。

比較好的設計：

```json
{
  "tool": "build_module",
  "args": {
    "target": "aosp_cf_x86_64_only_phone-aosp_current-userdebug",
    "module": "libfoo",
    "jobs": "auto",
    "timeout_minutes": 45,
    "clean": false
  }
}
```

或：

```json
{
  "tool": "apply_patch",
  "args": {
    "project": "platform/frameworks/base",
    "allowed_paths": [
      "services/core/java/com/android/server/..."
    ],
    "diff": "..."
  }
}
```

每個 tool 都應該回傳結構化結果：

```json
{
  "status": "failed",
  "exit_code": 1,
  "summary": "Soong failed resolving module libbar",
  "important_logs": [
    "... undefined module ..."
  ],
  "artifacts": {
    "full_log": "...",
    "diff": "..."
  },
  "next_allowed_actions": [
    "read_file",
    "search_code",
    "edit_patch",
    "build_module"
  ]
}
```

這樣 agent 才能做迭代，而不是靠猜。

---

## 8. AOSP-specific context pack 應該包含什麼

每次丟給 agent 的 context 不該是「整個 repo」，而是一個精準包：

```
Task:
- 使用者/CI/Gerrit 要求
Branch:
- manifest branch
- repo sync revision
- project list
Build target:
- lunch target
- release_config
- build_variant
- OUT_DIR
Failure:
- failed command
- top-level error
- first real compiler/Soong/test failure
- full log artifact path
Code context:
- affected files
- Android.bp modules
- dependencies
- tests
- OWNERS
- recent blame / related CLs
Rules:
- 不可 disable tests 來修 test
- 不可 broad sepolicy allow 除非 task 明確要求
- 不可改 public API 除非 task 是 API change
- 不可 touch unrelated modules
- 必須附上 verification command
```

這些規則比「請小心」有用多了。

---

## 9. AOSP agent 最適合先做的場景

優先順序（ROI 高、風險可控）：

### 9.1 Build failure triage agent

輸入 CI log，輸出：

- 真正的 first failure
- affected module
- likely owner/project
- probable cause
- suggested local reproduction command
- possible patch

AOSP build log 常常很長，找 first meaningful failure 本身就浪費工程師時間。

### 9.2 Android.bp / Soong 修復 agent

常見問題：

- missing dep
- wrong visibility
- namespace import
- duplicate module
- prebuilt/source conflict
- bad defaults usage
- Android.mk → Android.bp migration

這類問題可以被 `m nothing`、`m <module>` 快速驗證，很適合作為第一個可寫入 agent。

### 9.3 Gerrit review assistant

先不改 code，只做 review risk scan：

- 這個 CL 可能破壞哪些 targets?
- 應該跑哪些 tests?
- 是否有不合理 workaround?
- 是否缺 Android.bp / TEST_MAPPING / OWNERS 更新?

### 9.4 Test failure summarizer

對 Tradefed / CTS / VTS 結果做聚類：

- infrastructure failure
- device offline
- flaky
- real regression
- same root cause across multiple tests

AI harness 應該接 Tradefed 的結果，而不是替代它。

### 9.5 Cuttlefish boot validation agent

對 framework/system server/native service 類修改尤其有價值：

```
build image
→ launch Cuttlefish
→ adb wait-for-device
→ check boot_completed
→ collect logcat
→ detect crash loop
→ summarize suspect stack
```

---

## 10. 不該一開始交給 agent 的事

這些可以輔助，但不該自動化到無人審核：

- 大型 framework architecture change
- public API / SDK 行為決策
- sepolicy 大範圍放寬
- permission / privacy / security-sensitive change
- bootloader / kernel / firmware / vendor blob related change
- 自動 submit Gerrit CL
- 自動處理 release branch merge

AOSP 的安全與相容性風險很高。Agent 可以提出 patch，但不能變成 policy owner。

---

## 11. 真正落地時的 MVP

### Phase 1：Read-only AOSP Copilot

能力：

- 讀 build log
- 找 first failure
- 找 module / Android.bp / source file
- 建議 reproduction command
- 建議可能修法

不寫檔、不 build、不上傳。先證明 context builder 有效。

### Phase 2：Local Patch + Incremental Build

能力：

- `repo start`
- apply patch
- `bpfmt`
- `m nothing`
- `m <module>`
- 產生 diff + logs

這時要加 workspace isolation、resource quota、timeout、artifact capture。

### Phase 3：Cuttlefish + adb 驗證

能力：

- build cf target
- launch Cuttlefish
- adb/logcat
- boot validation
- crash summary

讓 agent 從「會修 compile error」進化到「能驗證平台行為」。

### Phase 4：Tradefed / CTS / VTS subset

能力：

- 根據 change type 選 test subset
- run Tradefed
- summarize failures
- retry suspected flakes

### Phase 5：Gerrit integration

能力：

- 產生 commit message
- `repo upload` draft / WIP CL
- 附上 test evidence
- 回覆 reviewer comment draft

但 `repo upload` 前應該有人工 approval；submit/merge 不給 agent。

---

## 12. 成功標準

不要用「agent 寫了多少 code」衡量。AOSP harness 應該用這些指標：

- first failure 定位準確率
- suggested reproduction command 成功率
- patch build pass rate
- patch 被 reviewer 接受率
- 平均節省工程師 triage 時間
- **false fix rate**：例如 disable test、mask error、亂加 dep
- build/test resource cost
- rollback / reproducibility 成功率

最重要的是 **false fix rate**。AOSP agent 最大的危險不是「不會修」，而是「看似修了，但其實把測試關掉、把 dependency 加爛、把 sepolicy 放寬、或把 product-specific hack 塞進 common framework」。

---

## 13. 一句話總結

AOSP 裡的 AI harness engineering，不是做一個「會聊天的 Android 專家」，而是做一個**受控的自動化平台工程師工作台**：

- **LLM** 負責推理與產生候選修改；
- **Harness** 負責限制、執行、驗證、記錄、回滾、審核；
- **AOSP 既有工具鏈** 負責 build、boot、test、review。

最實際的落地路線：

```
build failure triage
  → Android.bp / Soong 小修
  → Cuttlefish boot 驗證
  → Tradefed / CTS subset
  → Gerrit review assistant
```

這條路徑風險低、回報快，而且符合 AOSP 本身的工程現實。

---

## Appendix A：實作角度的 sharpening notes

從工程實作角度補充幾個被原文低估、但會直接決定落地成敗的點：

### A.1 Context builder 才是真正的 IP，不是 agent

Phase 1 的 read-only Copilot 看起來最輕量，但「從 ninja / Soong / clang / Tradefed 交錯的 log 裡擷取 first meaningful failure」本身就是一個獨立子問題。Soong error、ninja missing-rule、downstream compile error 三者混雜時，純 regex 會誤導 agent，要做 layered parser：

1. Soong / blueprint parse stage errors（最先發生、最致命）
2. ninja graph resolution errors（缺 rule、缺 input）
3. compiler / linker errors（通常是真正的 root cause）
4. test framework errors（最後階段）

通常要從上往下找第一個 non-cascade failure，而不是 log 最上面那行。

### A.2 `out/` cache 與 workspace 隔離的張力

原文的 workspace manager 寫得乾淨，但 AOSP 經濟學是「incremental build 才划算」。如果每個 agent task 都 fresh checkout + clean build，cost model 直接爆炸。實務上要做：

- ccache（compiler cache）
- per-branch `out/` snapshot
- content-addressed artifact store
- copy-on-write workspace（btrfs / overlayfs / `cp --reflink`）

要算進 Phase 2 的設計，否則 Phase 2 跑起來會發現 throughput 不可接受。

### A.3 `TEST_MAPPING` 值得在 Tool layer 顯式建模

AOSP 已經透過 `TEST_MAPPING` 告訴你「碰這個目錄該跑哪些 presubmit test」，agent 不該自己猜 test selection。應該有個一級 tool：

```
select_tests_from_change(paths) -> {presubmit: [...], postsubmit: [...]}
```

讓 agent 拿到 deterministic 的 test 清單，而不是請 LLM「想想該跑哪些測試」。

### A.4 userdebug / user / eng variant drift

Agent 在 userdebug 上驗證 pass、user build 失敗是經典坑：

- `Log.d` 在 user build 被優化掉
- `assert` 行為差異
- `ro.debuggable` gating
- `eng`-only services / properties
- StrictMode 在 user build 較鬆

Verifier 至少要有個 variant matrix 的 lightweight check：對於 framework / system 改動，至少在 user variant 上跑一次 `m nothing` + 關鍵 module build，不能只信 userdebug。

### A.5 False-fix taxonomy 應該變成 deterministic lint

原文列的 false-fix patterns — disable test / broad sepolicy / public API 偷改 / product hack 滲入 common framework — 不應該等到 reviewer 才發現，也不該靠 LLM 自律。應該在 patch apply 階段就用 deterministic rule 攔下來：

```
patch_lint(diff) -> [
  {severity: "block", rule: "test_disabled", evidence: "..."},
  {severity: "warn",  rule: "sepolicy_broadened", evidence: "..."},
  {severity: "block", rule: "public_api_changed_without_api_txt_update"},
  {severity: "block", rule: "common_framework_touched_by_product_task"},
]
```

`block` 級的規則應該讓 Tool Broker 直接拒絕 `apply_patch`，agent 必須重新提案。這比 prompt 裡寫「不可以 disable test」可靠十倍。

---

## Appendix B：開放問題

幾個還沒收斂、需要後續討論的問題：

1. **跨 CL agent 記憶**：同一個 task 跨多輪 Cuttlefish boot 應不應該保留 `out/`？如果保留，failure reproduction 會變難；如果不保留，cost 爆炸。
2. **Vendor / partner 程式碼邊界**：harness 看得到 vendor blob 嗎？OEM partner branch 怎麼處理？
3. **Gerrit review assistant 的人格**：是嚴格 gatekeeper 還是 friendly suggester？態度會直接影響 reviewer 採用率。
4. **Flaky test 與 real regression 的分界**：retry policy 該由 Tradefed 決定還是 AI harness 決定？兩邊都做容易互相打架。
5. **Cost attribution**：build / device time 怎麼歸給哪個 task / agent / user？沒有這個就沒辦法做容量規劃。
