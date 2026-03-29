# 6.2 Projects 101: Your AI Workspace

> *"Setting up a Project takes 5 minutes. It saves you 5 minutes every single conversation after that. Math has never been this kind."*

---

## What Is a Project?

A Project is a **named workspace** in Claude that bundles three things together:

1. **A name and description** -- so you can find it later
2. **Uploaded files** -- reference documents that Claude can always access
3. **Custom Instructions** -- a persistent note that Claude reads at the start of every new conversation in that Project

Think of it as giving Claude a briefcase. Every time you start a new conversation within that Project, Claude opens the briefcase first, reads everything inside, and *then* says hello. No amnesia. No re-explaining. Claude already knows the deal.

**Without a Project:** "Hi! I'm Claude. What do you do? Where do you work? What's your writing style? Tell me everything from scratch."

**With a Project:** "Hi! I see you're the marketing lead at Acme Corp. Your reports use the Q-metrics framework. You prefer bullet points over paragraphs and you hate the word 'synergy.' What are we working on today?"

Night and day.

---

## Step-by-Step Setup

### Step 1: Create a New Project

1. Open Claude (claude.ai)
2. Look at the left sidebar
3. Find and click **"Projects"** (it's in the navigation)
4. Click **"Create Project"** or the **"+"** button
5. Give your Project a name and an optional description

**Naming tips:**
| Good Names | Why They Work |
|-----------|---------------|
| "Q2 Marketing Reports" | Specific time period + specific task |
| "Acme Corp Work" | Broad enough to cover daily work tasks |
| "Side Project - Recipe App" | Clearly separate from work |
| "English Study" | Simple, findable |

| Bad Names | Why They Don't Work |
|-----------|-------------------|
| "Stuff" | Too vague, you'll forget what it's for |
| "Project 1" | You will have a Project 2 and forget what 1 was |
| "asdfghjkl" | You know who you are |

### Step 2: Upload Reference Documents

This is where the magic lives. Upload files that Claude should always have access to when working in this Project.

**What to upload:**

| Document Type | Example | Why It Helps |
|--------------|---------|-------------|
| Company overview | One-pager about your company | Claude understands your business context |
| Job description | Your actual JD | Claude knows your responsibilities and goals |
| Writing samples | 2-3 past reports or emails you wrote | Claude learns your voice and style |
| Templates | Your company's report template | Claude follows the right format |
| Style guides | Brand guidelines, tone docs | Claude matches your brand voice |
| Data files | Spreadsheets, CSV exports | Claude can reference real data |

**How to upload:**
1. In your Project, find the **"Add content"** or **"Upload"** area
2. Drag and drop files, or click to browse
3. Supported formats: PDF, TXT, CSV, MD, and more
4. Each file is available to every conversation in this Project

**Pro tip:** You don't need to upload everything about your life. Start with 2-3 essential documents. You can always add more later.

### Step 3: Write Custom Instructions

This is the text that Claude reads at the beginning of *every* conversation in this Project. Think of it as your standing order -- the context that never changes.

1. In your Project settings, find **"Custom Instructions"** (sometimes labeled "Project Instructions")
2. Write your persistent context (see Section 6.3 for detailed templates)
3. Save it

We'll cover Custom Instructions in depth in the next section. For now, here's a quick starter:

```
I'm [your name], a [your role] at [your company].
My main responsibilities include [brief list].
When I ask for reports, use a professional but conversational tone.
Use bullet points for key takeaways.
Always include a "Next Steps" section at the end.
```

### Step 4: Start Chatting (In Your Project)

1. Open your Project
2. Start a new conversation within it
3. Notice: Claude already has context! You don't need to re-explain who you are

Try typing something like: "Can you summarize what you know about my role?" Claude should be able to answer based on your uploaded docs and Custom Instructions. If it can, you're all set.

---

## Practical Example: "My Work" Project

Let's walk through a realistic setup for someone named Alex, a Product Manager at a tech startup.

### What Alex uploads:
1. **company-overview.pdf** -- A 2-page company description, product, and market
2. **alex-jd.txt** -- Alex's job description, listing key responsibilities
3. **sample-weekly-report.md** -- A past weekly report that Alex liked the format of
4. **team-roster.csv** -- Team members' names and roles (so Claude can reference them)

### Alex's Custom Instructions:
```
I'm Alex, a Product Manager at CloudSync (Series B SaaS startup,
45 employees). I report to VP of Product, Sarah Chen.

My team: 2 designers, 4 engineers, 1 QA. We run 2-week sprints.

When I ask for help with:
- Weekly reports: Follow the format in sample-weekly-report.md
- Emails to leadership: Professional tone, data-driven, concise
- Sprint planning: Use story points (Fibonacci), prioritize by
  customer impact
- PRDs: Follow our template (uploaded) with user stories format

Things to remember:
- Our fiscal year starts in April
- We use JIRA for project tracking
- Key metrics: DAU, retention rate, NPS
- I hate jargon. Write in plain English.
```

### What Alex's conversations look like now:

**Before Projects:**
```
Alex: Write a weekly report. I'm a PM at a SaaS startup.
      My team has 7 people. We use sprints. This week we
      finished the authentication module, fixed 12 bugs,
      and started the dashboard redesign. Also, our DAU
      hit 15K which is a new record. Format it like a
      professional report with bullet points and next steps.
```

**After Projects:**
```
Alex: Weekly report: finished auth module, fixed 12 bugs,
      started dashboard redesign. DAU hit 15K (new record!).
```

Same quality output. One-third the typing. Because Claude already knows who Alex is, what format to use, what tone to write in, and what metrics matter.

That's the promise of Projects. Less repeating yourself, more getting things done.

---

## Regular Chat vs. Projects: A Comparison

| Feature | Regular Chat | Projects |
|---------|-------------|----------|
| Claude knows your role | Only if you tell it every time | Always (from Custom Instructions) |
| Reference documents | Must re-upload each chat | Always available |
| Consistent output style | Must re-describe each time | Set once, applies every time |
| Finding old conversations | Scrolling through a long list | Organized by Project |
| Setup time per conversation | 5-10 minutes of context | 0 minutes (already loaded) |
| Best for | One-off questions | Recurring work in a specific area |

---

## Frequently Asked Questions

**Q: How many Projects can I have?**
A: Multiple! Most people have 3-5. We'll cover organizing them in Section 6.4.

**Q: Can I change the Custom Instructions later?**
A: Yes, anytime. Updates apply to new conversations. Existing conversations keep the instructions they started with.

**Q: Does every conversation in a Project see the same files?**
A: Yes. Every new conversation in that Project starts with access to all uploaded files and your Custom Instructions.

**Q: What if I upload too many files?**
A: More files use more of Claude's "desk space" (context window). Keep it focused: 3-6 essential documents is the sweet spot.

**Q: Is this a paid feature?**
A: Projects is available on Claude Pro and Team plans. Check Appendix B for the latest plan comparison.

---

*You've got a Project set up. But the real power comes from what you put in those Custom Instructions. Let's write some that will make Claude feel like it's known you for years.*
