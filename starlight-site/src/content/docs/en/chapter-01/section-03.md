---
title: "1.3 What Can Claude Actually Do? (Concrete List)"
---


> *"Under-promise, over-deliver. That's what my manager always says. So let's start with the honest list."*

---

## The Two Lists

Every new tool comes with two lists: what it can do, and what it can't. Most marketing materials only show you the first one. We're going to show you both, because managing expectations now saves you a lot of frustrated tears later.

(This *is* a book for cry babies, after all. But we prefer tears of joy.)

---

## What Claude CAN Do

### 1. Writing (Your New Ghost Writer)

Claude is scary good at writing. Not "pretty good for a robot" -- genuinely good.

| Writing Task | Example |
|-------------|---------|
| Emails | "Write a polite follow-up email to a client who hasn't responded in 2 weeks" |
| Reports | "Turn these bullet points into a quarterly business review" |
| Social media | "Write 5 LinkedIn posts about our new product launch" |
| Creative writing | "Write a short story about a cat who becomes a CEO" |
| Editing | "Make this paragraph more concise without losing the key message" |
| Translation | "Translate this marketing copy to Japanese, keeping the playful tone" |
| Summarizing | "Summarize this 3,000-word article in 5 bullet points" |

**Pro tip**: Claude's writing gets dramatically better when you give it context, tone guidance, and examples. (That's Chapter 2's entire purpose.)

### 2. Analysis (Your Data Analyst on Speed Dial)

Upload a file, and Claude becomes an analyst. No formulas required.

- **Excel/CSV files**: "What are the top 5 products by revenue?" / "Find all entries where the date is missing" / "Create a pivot-table-style summary"
- **PDF documents**: "Summarize this 45-page contract" / "What are the key obligations for Party A?" / "Are there any unusual clauses?"
- **Images**: "What does this screenshot show?" / "Read the text in this photo" / "What's wrong with this UI design?"

Claude doesn't just read files -- it *understands* them. Ask follow-up questions, request different angles, have it cross-reference multiple uploads. It's like having a research assistant who reads at 10,000 words per minute.

### 3. Creating (The Artifacts Magic)

This is where it gets fun. Claude can create **interactive, visual things** right in the conversation:

- **Web pages**: Landing pages, portfolios, event invitations
- **Interactive tools**: Calculators, quizzes, timers, to-do lists
- **Charts and visualizations**: Bar charts, pie charts, dashboards from your data
- **Documents**: Formatted reports, slide outlines, structured documents
- **Diagrams**: Flowcharts, org charts, process maps (using Mermaid or SVG)

These appear as **Artifacts** -- live, clickable previews right next to your conversation. You can iterate on them ("make the background blue," "add a reset button," "make it mobile-friendly") and see changes in real time.

### 4. Learning (Your Patient Tutor)

Claude never sighs when you ask a "stupid question." It never rolls its eyes. It will explain quantum physics to a five-year-old or walk you through a tax form step by step with equal patience.

- "Explain blockchain like I'm 10"
- "I don't understand this error message, what does it mean?"
- "Walk me through how to read a balance sheet"
- "What's the difference between a LLC and an S-Corp?"

And if the explanation doesn't click? Just say "I still don't get it, try a different analogy." Claude will try again. And again. Forever. Without judgment.

### 5. Code (Even Though You Don't Need to Understand It)

Yes, Claude writes code. Excellent code, actually. But here's the twist for this book: **you don't need to understand the code.** You just need to describe what you want the code to *do*.

When Claude creates an Artifact, there's code running behind it. You can peek at it if you're curious. But you never have to. The preview is what matters.

That said, knowing that Claude *can* code opens up possibilities:
- "Create a Python script that renames all files in a folder by date"
- "Write a formula for this Excel calculation"
- "Generate a Google Sheets script that sends me a reminder email every Monday"

You describe the outcome. Claude handles the how.

---

## What Claude CANNOT Do

Here's where we save you from frustration. Bookmark this page. Come back to it whenever you're wondering "why isn't this working?"

### 1. Auto-Send Emails, Messages, or Notifications

Claude can *write* an email. It cannot *send* it. It can *draft* a Slack message. It cannot *post* it. It lives in a browser window and cannot reach out to touch other apps on your behalf.

**What to do instead**: Copy-paste. It's one extra step, but it's the reality for now.

### 2. Operate Your Phone or Computer

Claude cannot click buttons, open apps, navigate websites, or fill out forms. If you say "go to Amazon and order me a phone case," it will politely explain that it can't do that, and then probably write you a shopping comparison guide as a consolation prize.

### 3. Guarantee 100% Accuracy

This deserves a giant neon sign:

> **CLAUDE WILL SOMETIMES BE WRONG.**

It will make up statistics. It will cite papers that don't exist. It will confidently tell you a deadline is April 15th when it's actually April 18th. It will generate code with subtle bugs.

This isn't a flaw -- it's a fundamental characteristic of how these AI models work. They predict what text *should* come next based on patterns. Sometimes those predictions are wrong.

**Your job**: Always verify anything important. Facts, figures, dates, legal info, medical info -- double-check with primary sources. Claude is a first draft machine, not a fact oracle.

### 4. Access Your Private Data (Without You Uploading It)

Claude cannot see your email inbox, your Google Drive, your company's internal wiki, or your bank statements. It only knows what you tell it or upload to it.

This is actually a feature, not a bug -- it means your private data stays private unless you explicitly choose to share it. But it also means you need to provide context manually.

### 5. Remember Previous Conversations (With Limits)

Each new conversation starts from scratch. Claude doesn't remember that you told it your company name three chats ago. Within a single conversation, it remembers everything -- but across conversations? Clean slate.

**The fix**: Projects (Chapter 6). You can set up persistent instructions and a knowledge base that Claude references every time.

### 6. Replace Professional Judgment

Claude can help you draft a contract, but it's not a lawyer. It can analyze your symptoms, but it's not a doctor. It can suggest investment strategies, but it's not a financial advisor.

Use Claude as a **starting point and thinking partner**, not as a replacement for professional expertise in high-stakes situations.

---

## The Mental Model: Claude as a Tool, You as the Decision-Maker

Here's how to think about your relationship with Claude:

```
You (the human)           Claude (the AI)
─────────────────         ─────────────────
Define the goal     →     Suggest approaches
Provide context     →     Generate drafts
Make decisions      →     Offer options
Verify accuracy     →     Flag uncertainty
Take responsibility →     Execute instructions
```

You're the architect. Claude is the (incredibly fast) construction crew. The architect doesn't need to know how to pour concrete, but they absolutely need to know what the building should look like.

**The better you get at being the architect, the better the buildings get.** That's what the rest of this book teaches.

---

## Quick Reference Card

Save this for later:

| "Can Claude...?" | Answer |
|------------------|--------|
| Write my emails? | Yes -- write them. You send them. |
| Analyze my spreadsheet? | Yes -- upload it and ask questions. |
| Build me a website? | Yes -- a simple one, via Artifacts. |
| Send a text to my mom? | No. Copy-paste the message yourself. |
| Remember my preferences? | Within a conversation: yes. Across conversations: use Projects. |
| Replace my accountant? | No. But it can help you prepare for the meeting. |
| Work offline? | No. It needs internet. |
| Understand images? | Yes. Upload screenshots, photos, diagrams. |
| Make me coffee? | No. But it can find a recipe for a great latte. |

---

*Now that we know what we're working with, let's stop talking about Claude and start talking TO it. Time to get your hands dirty.*
