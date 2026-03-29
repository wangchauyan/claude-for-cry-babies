---
title: "3.2 How to Trigger Artifacts Correctly"
---


> *"I asked Claude to make me something cool and it just... wrote a paragraph about something cool. I feel betrayed."*

---

## Why Doesn't It Always Work?

You asked Claude a question. You got text. But you *wanted* a visual thing. What happened?

Here's the secret: Claude is smart, but it's not psychic. If your prompt sounds like you want a *discussion*, you'll get a discussion. If your prompt sounds like you want a *thing*, you'll get a thing. The key is using language that signals "I want to SEE something, not READ about something."

## Magic Words That Trigger Artifacts

These keywords and phrases are like casting spells. Include them in your prompt and Claude is much more likely to produce an interactive Artifact:

| Trigger Phrase | Example |
|---------------|---------|
| **"Create an interactive..."** | "Create an interactive quiz about world capitals" |
| **"Build me a..."** | "Build me a tip calculator" |
| **"Generate an HTML page..."** | "Generate an HTML page with a countdown timer" |
| **"Make a React component..."** | "Make a React component for a to-do list" |
| **"Visualize this data..."** | "Visualize this data as a bar chart" |
| **"Design a UI for..."** | "Design a UI for a recipe organizer" |
| **"Show me a..."** + visual noun | "Show me a flowchart of the hiring process" |
| **"Create a Mermaid diagram..."** | "Create a Mermaid diagram of our team structure" |

The common thread? **Action verbs** (create, build, generate, make, design, visualize) + **visual nouns** (page, chart, diagram, calculator, tool, interface, dashboard).

## What Doesn't Trigger Artifacts

These kinds of prompts usually get you text responses instead:

| Prompt | Why It Doesn't Trigger | Better Version |
|--------|----------------------|----------------|
| "Explain how a calculator works" | Sounds like you want an explanation | "Build me a working calculator" |
| "What's a good layout for a portfolio?" | Sounds like you want advice | "Create an interactive portfolio page with a dark theme" |
| "Help me with data visualization" | Too vague, sounds like discussion | "Visualize this data as a pie chart: Rent 40%, Food 25%, Transport 15%, Fun 20%" |
| "I need a chart" | No data, no specifics | "Create a bar chart with this data: Q1 $10K, Q2 $15K, Q3 $12K, Q4 $20K" |

## The Fallback Prompt

Sometimes Claude just... doesn't generate an Artifact when you expect it to. Maybe your prompt was ambiguous, or Claude decided a text response was more helpful. No big deal. Just add this to your next message:

> **"Please create this as an interactive Artifact that I can see and interact with in the preview panel."**

That's basically the "I really mean it" follow-up. Works every time.

You can also try:

> **"Please render this as an Artifact."**
> **"Can you show this as a live preview instead of code?"**

## Pro Tips for Better Artifacts

### Tip 1: One Thing at a Time

Bad:
> "Create a dashboard with a calendar, a to-do list, a weather widget, a calculator, and a news feed"

Good:
> "Create an interactive to-do list where I can add items, check them off, and delete them"

Start with one thing. Get it working. Then add features in follow-up messages. Think of it like ordering food -- don't order the entire menu in one go. Your stomach (and Claude) will thank you.

### Tip 2: Function Before Fashion

Bad:
> "Create a beautiful, modern, sleek, minimalist, glassmorphism-inspired landing page"

Good:
> "Create a landing page with a headline, a subtitle, three feature cards, and a sign-up button. Use a clean, modern style."

Tell Claude what the thing should **do** first, and how it should **look** second. You can always refine the aesthetics in round 2. Get the skeleton right before you pick out the outfit.

### Tip 3: Give Size and Layout Hints

Claude can't read your mind about how big or how laid out things should be. Help it out:

> "Make it **full-width** and mobile-friendly"
> "The chart should be about **600 pixels wide and 400 pixels tall**"
> "Use a **two-column layout** on desktop, single column on mobile"
> "Keep it **compact** -- this is a small widget, not a full page"

### Tip 4: Specify Interactivity

If you want buttons that do things, say so:

> "When I click the button, it should change the background color"
> "Add a text input where I can type my name and it appears in the greeting"
> "Make the items sortable by dragging"

Don't assume Claude knows you want interactivity. Be explicit. Claude would rather over-deliver than under-deliver, but it needs to know what "deliver" looks like.

---

**In short:** Be specific. Use action verbs. Describe what you want to *see and interact with*. And if all else fails, just tell Claude "make it an Artifact." You're the boss here.
