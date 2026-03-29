---
title: "3.6 Limitations of Artifacts (Being Honest)"
---


> *"It's important to know what your magic wand can't do. Otherwise you'll spend two hours trying to make it summon a dragon."*

---

Artifacts is incredible, but it's not infinite. Before you go trying to build the next Instagram inside an Artifact panel, let's talk honestly about what it can and can't do. Setting expectations now saves you frustration later.

## What Artifacts Can't Do

| Limitation | What This Means | Example |
|-----------|----------------|---------|
| **No external API access** | Artifacts can't fetch live data from the internet | Can't pull real-time stock prices, weather, or social media feeds |
| **Limited storage** | Artifacts can use a built-in storage API to persist small amounts of data across sessions. However, this is basic key-value storage — not a database. For most practical purposes, treat Artifacts as temporary: if your tool needs to remember complex data reliably, you'll want to export it (copy to clipboard, download as a file) rather than relying on built-in storage. | That to-do list you built? Simple items might persist, but don't count on it for anything important |
| **No backend / database** | There's no server running behind the scenes | Can't save user accounts, store form submissions, or process payments |
| **No cross-conversation persistence** | Each conversation starts fresh | Your mood selector from Tuesday doesn't exist in Wednesday's chat |
| **Complexity ceiling** | Very large or complex apps can break, lag, or render incorrectly | A full-featured project management tool probably won't work reliably |
| **No file system access** | Can't read or write files on your computer | Can't automatically save downloads or access local files |
| **Limited third-party libraries** | Can use some common libraries but not everything | Some specialized charting or animation libraries might not work |

## What Artifacts Is Best For

| Use Case | Why It Works Well | Example |
|----------|------------------|---------|
| **Prototyping** | Test ideas visually before investing real development time | "Would this dashboard layout work for our team?" |
| **Data visualization** | Turn numbers into charts instantly | Monthly sales trends, survey result breakdowns |
| **Small interactive tools** | Build single-purpose utilities | Tip calculator, unit converter, color palette generator |
| **Teaching & explanation** | Make concepts interactive and tangible | Interactive timeline, clickable anatomy diagram |
| **Creative validation** | See if a design concept works before committing | "Does this card layout look good in dark mode?" |
| **Presentation assets** | Create visuals for meetings and decks | Org charts, process flows, comparison tables |
| **Form mockups** | Design forms and test the user flow | Registration form, feedback survey, order form |

## The Decision Framework

When you're wondering "should I use Artifacts for this?", ask yourself:

```
Is it...
  ├── A single-page thing? → Probably yes
  ├── Does it need to save data permanently? → Probably no
  ├── Does it need live internet data? → Probably no
  ├── Is it for testing/previewing an idea? → Definitely yes
  ├── Does it need multiple pages/routes? → Might struggle
  └── Is it something you'd show in a meeting? → Perfect use case
```

## The Running Project: Weekly Report Generator v0.3

Time to level up our running project. In previous chapters, you built a prompt template and refined it. Now let's turn it into an actual **interactive tool** using Artifacts.

Copy this prompt:

```
Create an interactive Weekly Report Generator as an Artifact with these features:

Layout:
- Split into two panels side by side (or top/bottom on mobile)
- Left panel: "Input" section
- Right panel: "Preview" section (live preview of the generated report)

Input Panel - Fields:
1. "Your Name" - text input
2. "Week of" - date input (defaults to current week)
3. "Key Accomplishments" - large text area (placeholder:
   "List what you completed this week, one item per line")
4. "In Progress" - large text area (placeholder:
   "What are you currently working on?")
5. "Blockers" - text area (placeholder:
   "Any obstacles or things you need help with? Leave blank if none")
6. "Next Week's Plan" - text area (placeholder:
   "What do you plan to tackle next week?")
7. "Wins & Shoutouts" - text area (placeholder:
   "Any team wins or people to thank? Optional")

Preview Panel:
- Shows a formatted, professional-looking report that updates
  in real-time as the user types
- Report format:
  - Header with name and week date
  - Sections with clean headings for each category
  - Accomplishments and In Progress items auto-formatted as bullet points
  - Blockers highlighted with a yellow/orange accent if not empty
  - A professional "Generated with Weekly Report Generator" footer
- The preview should look like something you'd actually send to your boss

Extra Features:
- A "Copy as Markdown" button that copies the formatted report
  to clipboard
- A "Clear All" button to reset the form
- A "Fill Example" button that populates the form with sample data
  so users can see how it looks
- Clean, professional styling (think: a SaaS product, not a homework assignment)
```

**What you should see:** A real, usable tool. Type your weekly notes on the left, watch a polished report appear on the right. Hit "Copy as Markdown" and paste it into Slack, email, or wherever you submit weekly reports.

This is genuinely useful. This isn't a toy -- this is a tool you might actually use every Friday afternoon. And you built it by describing what you wanted in plain English.

### What v0.3 Teaches You

| Lesson | Applied Technique |
|--------|------------------|
| Two-panel layouts | "Split into two panels side by side" |
| Real-time updates | "Preview that updates in real-time as the user types" |
| Default values | "Defaults to current week" |
| Placeholder text | Specific placeholder instructions for each field |
| Multiple buttons with different functions | Copy, Clear, Fill Example |
| Professional formatting | "Looks like something you'd actually send to your boss" |

### v0.3 Stretch Goals

If you're feeling ambitious, try these follow-up prompts:

```
"Add a word count at the bottom of each text area"
```

```
"Add a toggle to switch between 'Detailed' and 'Executive Summary'
preview modes. Executive Summary should be more concise -- just
the key bullet points, no fluff."
```

```
"Add a 'tone' selector (dropdown: Professional, Casual, Enthusiastic)
that adjusts the formatting and language of the preview"
```

---

## Chapter 3 Recap

You've gone from "what is an Artifact?" to building three interactive projects. Let's review what you learned:

| Skill | Where You Learned It |
|-------|---------------------|
| Understanding what Artifacts are (and aren't) | Section 3.1 |
| Triggering Artifacts with the right language | Section 3.2 |
| The iterative building pattern (base > polish > expand) | Section 3.3 - Mood Selector |
| Describing visual design in plain English | Section 3.4 - Personal Card |
| Creating charts from data with templates | Section 3.5 - Data Visualization |
| Knowing Artifacts' limits and working within them | Section 3.6 - This section |

**The big takeaway:** Artifacts is your prototyping superpower. It's not where things live permanently, but it's where ideas become real for the first time. And for a non-developer, that first moment -- seeing your words turn into something interactive -- is genuinely magical.

Even if it makes you cry a little.

---

*Next up: Chapter 4, where you'll discover that Claude can read your files, analyze your data, and interpret your screenshots. It's like having a personal analyst who never sleeps and never asks for a raise.*
