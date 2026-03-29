---
title: "5.5 Knowing When to Start Over"
---


> *"Sometimes the bravest thing a builder can do is say 'let's tear this down and try again.' Also the most efficient."*

---

There's a moment in every debugging journey where you need to ask yourself a hard question: "Am I fixing this, or am I making it worse?"

It usually happens around the fifth or sixth "fix this" message, when each fix creates a new problem, and Claude starts every response with "I apologize for the confusion..." You're not debugging anymore. You're playing Whac-A-Mole with code. And you're losing.

This is the moment most people push through, spending another hour trying to salvage the mess. But seasoned builders know something that sounds counterintuitive:

**Starting over is often faster than fixing forward.**

---

## The Rule of Five

Here's a simple heuristic:

> **If you've tried five fixes and the problem is getting more complex instead of simpler, the direction is wrong.**

Not your fault. Not Claude's fault. The conversation has accumulated so much context, so many patches on patches, that the code has become a Frankenstein's monster -- technically alive, but not something you'd want to bring home to meet your parents.

**Signs it's time to start over:**
- Each fix introduces a new, different problem
- The error messages keep changing
- Claude is apologizing more than it's solving
- You've lost track of what's working and what isn't
- You feel like you're going backward
- The code looks way more complicated than the feature warrants

---

## How to Start Over (The Right Way)

Starting over doesn't mean giving up. It means starting **smarter**. You now know things you didn't know at the beginning: what the feature should look like, what mistakes to avoid, and what your actual requirements are.

### Step 1: Open a New Conversation

Don't try to start fresh in the same conversation. The old conversation is polluted with conflicting instructions and failed attempts. Claude will carry that confusion forward.

Start a **brand new chat**. Clean slate. Fresh start.

### Step 2: Redescribe, More Clearly

Take everything you've learned from the failed attempt and channel it into a better, more specific description. Your second attempt will always be better than your first because you now know what you actually want.

**First attempt prompt (vague):**
```
Build me a dashboard that shows my sales data.
```

**Second attempt prompt (informed by failure):**
```
Build me a sales dashboard with these specific features:

Layout: Full-width header with company name, then a two-column layout.
Left column (30%): A sidebar with a list of months (Jan through Dec).
Clicking a month filters the data.
Right column (70%): Three stat cards at the top showing Total Revenue,
Number of Deals, and Average Deal Size. Below the cards, a bar chart
showing revenue by product category.

Data: Use sample data with 4 product categories (Software, Hardware,
Services, Support) and 12 months of data.

Style: Clean, professional, white background with blue accent colors.

Important: The chart must update when I click a different month in the
sidebar. This is the core interaction.
```

See how much more specific the second prompt is? That's not because you magically got better at prompting. It's because the first attempt taught you what matters.

---

## Breaking Big Problems into Small Ones

The number one reason for "start over" situations: **you asked for too much at once.**

Claude is brilliant at single, well-defined tasks. Claude struggles when you throw five complex features at it simultaneously and expect them all to work together perfectly on the first try. It's like asking someone to juggle while riding a unicycle while reciting Shakespeare. Each skill is individually possible; all three at once is a circus act.

### Wrong: Everything at Once

```
Build me a project management tool with:
- User login and authentication
- A kanban board with drag-and-drop
- Team member assignment
- Due dates with calendar integration
- Email notifications
- File attachments
- Analytics dashboard
- Dark mode
```

This prompt will produce something that looks impressive but works poorly. Too many moving parts, too many chances for things to interact badly.

### Right: One Feature Per Round

**Round 1:**
```
Build a simple kanban board with three columns: To Do, In Progress,
and Done. I should be able to type a task title and add it to the
"To Do" column. That's the only feature for now.
```

**Round 2 (after Round 1 works):**
```
Great, this works! Now add the ability to move tasks between columns
by clicking arrow buttons on each task card. Keep everything else
exactly as it is.
```

**Round 3 (after Round 2 works):**
```
Perfect. Now add a due date field when creating tasks. Display the
date on the card, and make overdue tasks turn red. Don't change
anything else.
```

Each round is small. Each round is testable. Each round builds on something that already works. If Round 3 breaks something, you only need to fix Round 3 -- not the entire application.

---

## The Core Principle

If you remember one thing from this entire chapter, make it this:

> **A working ugly thing is infinitely better than a broken beautiful design.**

Functionality first. Always. You can make it pretty later. You can add features later. You can refine and polish later. But you can't do any of that if the foundation doesn't work.

It's like building a house. A small, plain house that keeps rain out is livable. A gorgeous mansion with no roof is a ruin. Build the smallest thing that works, then improve it.

---

## Hands-On: Weekly Report Generator v0.5

Time to put your debugging skills to the test. You're going to intentionally build something that will probably need fixing -- and that's the point.

### The Challenge: Add a Markdown Export Modal

Your Weekly Report Generator from previous chapters can create nice reports. Now let's add a feature that's complex enough to likely require some debugging: a **Markdown export modal**.

**What it should do:**
- A new "Export as Markdown" button on the report preview
- Clicking it opens a popup/modal overlay
- The modal displays the report content formatted as Markdown text
- A "Copy to Clipboard" button inside the modal that copies the Markdown
- A visual confirmation (like "Copied!") after clicking Copy
- A close button (X) to dismiss the modal

### How to approach it (using everything you learned):

**Step 1: Use Chain of Thought**
```
I want to add a Markdown export feature to my Weekly Report Generator.
Before coding, please tell me your plan for:
1. How the modal will be triggered
2. How the report content will be converted to Markdown format
3. How the copy-to-clipboard function will work
4. How the modal will be dismissed

Wait for my confirmation.
```

**Step 2: Build incrementally**
Ask Claude to build just the modal UI first (no export logic). Test it. Then add the Markdown formatting. Test again. Then add the copy function.

**Step 3: When things break (and they likely will with the clipboard API or modal overlay), use the fix template:**
```
I'm getting this error: [describe/paste]
Expected: [what should happen]
Actual: [what happens instead]
Fix this while keeping all existing features working.
```

### Learning goals for this exercise:

- Practice the three-step fix process in a real scenario
- Experience the difference between fixing small problems vs. cascading failures
- Build confidence that errors are solvable, not showstoppers

---

## Chapter 5 Summary

| Concept | Key Takeaway |
|---------|-------------|
| Three error types | Silent Treatment, Explosion, Confident Wrong Answer |
| Universal fix | Capture error -> Describe expected vs. actual -> Fix or restart |
| Chain of Thought | Ask for the plan before the code |
| Starting over | Not failure -- it's experienced wisdom |
| Build incrementally | One feature per round beats everything-at-once |
| Core principle | **A working ugly thing > A broken beautiful design** |

You came into this chapter worried about errors. You're leaving with a toolkit for handling them with grace. Errors will keep happening -- they happen to everyone, forever. The difference is, now you won't panic. You'll diagnose, communicate, and fix. Or start fresh. Both are valid. Both are professional.

Welcome to the debug club. The meetings are constant, and the coffee is always cold.

---

*Next up: What if Claude could remember who you are, what you're working on, and what you like -- across multiple conversations? Enter Projects.*
