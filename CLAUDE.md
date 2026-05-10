# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A bilingual (Traditional Chinese + English) book — *Claude for Cry Babies: A Non-Developer's Guide to AI-Powered Building* — by CW. There is no application code; the repo is markdown content plus an Astro + Starlight static site that publishes it to GitHub Pages.

The book runs a single project — the "Cry Baby 週報產生器" (Weekly Report Generator) — across Chapters 1–8, evolving with each chapter into a working MVP. Keep that thread intact when editing.

## Three parallel content trees (this is the main gotcha)

The same chapters live in three places. They are **not** auto-synced — edits must be propagated by hand.

1. **Root** (`chapter-01/` … `chapter-08/`, `appendix/`, `README.md`, `SUMMARY.md`, `book.json`)
   - Original Traditional Chinese, GitBook layout.
   - Chapter index file is `README.md`; sections are `section-01.md` … `section-NN.md`.
   - No frontmatter.

2. **`en/`** — mirror of the root tree, translated to English. Same GitBook layout (`README.md` + `section-NN.md`), no frontmatter.

3. **`starlight-site/src/content/docs/`** — what actually gets deployed.
   - ZH content at `chapter-XX/` (root locale), English at `en/chapter-XX/`.
   - Chapter index file is `index.md` (not `README.md`) and **must have YAML frontmatter** with a `title:` field — see existing files for the exact shape.

When changing any chapter content, update all three trees and rename `README.md` → `index.md` plus add frontmatter for the Starlight copy. The deployed site reads only from `starlight-site/`.

## Sidebar / navigation

`starlight-site/astro.config.mjs` hard-codes the full sidebar. Adding a new section file is invisible until you also add a `{ slug: 'chapter-XX/section-YY' }` entry there. Each item carries a `translations: { en: '…' }` for the English locale label.

`SUMMARY.md` (root) and `en/SUMMARY.md` are the GitBook tables of contents and should be kept aligned with the Starlight sidebar.

## Site config worth remembering

- `site: 'https://wangchauyan.github.io'`, `base: '/claude-for-cry-babies'` in `astro.config.mjs`. Any absolute internal link must respect that base.
- `defaultLocale: 'root'` = `zh-TW`; English lives under `/en/`.

## Commands

All site commands run from `starlight-site/`:

```bash
cd starlight-site
npm install        # first-time setup
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build → starlight-site/dist/
npm run preview    # preview the built site
```

There are no tests, linters, or formatters configured — content is the deliverable.

## Deployment

`.github/workflows/deploy.yml` builds `starlight-site/` and publishes `dist/` to GitHub Pages on every push to `main`. PRs do not deploy.

## Voice and editorial conventions (from README.md)

- Tone: smart-friend-over-drinks — humorous, not greasy. Self-deprecating "cry baby" persona is seasoning, not the meal.
- Every concept needs a plain-language translation **and** a real scenario. No floating abstractions.
- Audience is non-developers (PMs, marketers, designers, managers); a secondary audience is light technical users wanting 10x leverage with AI.
- Keep ZH and EN versions feature-parity in depth (recent commits explicitly enriched ZH to match EN).
