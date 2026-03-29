---
title: "3.1 What Are Artifacts?"
---


> *"So you're telling me... I just describe things... and they appear? Like a genie but with better UX?"*

---

## The Plain English Version

Here's the deal: when you chat with Claude normally, everything happens in the conversation -- just text going back and forth, like texting a really smart friend. Artifacts changes the game by adding a **second panel** on the right side of your screen.

When Claude generates something visual or interactive -- a webpage, a chart, a diagram, a mini app -- it pops up in that right-side panel as a **live, clickable, interactive thing**. Not a screenshot. Not a code snippet you have to figure out. An actual working thing you can click on, type into, and play with.

Think of it this way:

- **Without Artifacts**: Claude describes a cake recipe in text
- **With Artifacts**: Claude bakes the cake and slides it across the table

## What Types of Content Can Artifacts Create?

| Type | What It Is | Example Use Case |
|------|-----------|-----------------|
| **HTML/CSS/JS** | A complete mini-webpage | Landing pages, interactive tools, calculators, forms |
| **React Components** | Interactive UI components (don't worry about the name) | Dashboards, multi-step wizards, dynamic apps |
| **SVG** | Scalable vector graphics | Logos, icons, diagrams, illustrations |
| **Mermaid Diagrams** | Flowcharts and diagrams from text | Process flows, org charts, decision trees |
| **Markdown** | Formatted documents | Reports, documentation, structured content |
| **Code** | Syntax-highlighted code blocks | Scripts, configurations, templates |

If those technical names make you nervous, relax. You'll never need to say "please generate a React component." You just say "make me an interactive quiz" and Claude figures out the right technology to use. That's Claude's job, not yours.

## The Critical Clarification: Preview, Not Deployment

This is important, so let's be crystal clear:

**Artifacts is a preview environment, not a hosting service.**

What does that mean? It means:

| Artifacts IS... | Artifacts IS NOT... |
|----------------|---------------------|
| A live preview you can interact with | A website anyone can visit via URL |
| A way to test ideas instantly | A permanent place to store your work |
| A sandbox to prototype and iterate | A production deployment platform |
| Shareable via Claude's share feature | Independently hosted on the internet |

Think of Artifacts like a whiteboard in a meeting room. You can draw amazing things on it, show it to people in the room, even take a photo of it. But when the meeting ends and someone erases the board, your masterpiece is gone -- unless you saved it somewhere else.

(Don't panic. We'll cover how to save your work in Section 3.4.)

## With vs. Without Artifacts: A Side-by-Side

Let's say you ask Claude: *"Create a calculator that converts Celsius to Fahrenheit."*

| Aspect | Without Artifacts | With Artifacts |
|--------|------------------|----------------|
| **What you see** | A block of HTML/JavaScript code | A working calculator you can type into |
| **Can you use it immediately?** | No -- you'd need to save it as a file and open it in a browser | Yes -- just type a number and hit convert |
| **Can you test it?** | Not without technical steps | Right there, right now |
| **Can you say "make the button bigger"?** | Sure, but you get more code | Sure, and you *see* the bigger button instantly |
| **Frustration level** | "What do I do with this code?!" | "Wait... it works?!" |

## How to Make Sure Artifacts Is Enabled

Artifacts should be on by default for all Claude users, but just in case:

1. Go to **claude.ai** (not the mobile app -- Artifacts works best on desktop)
2. Click your profile icon in the bottom-left corner
3. Go to **Settings** > **Feature Preview** (or just **Settings**)
4. Make sure **Artifacts** is toggled on

If you don't see the toggle, you probably already have it enabled. Try asking Claude to "create an interactive button that counts clicks" and see if a panel appears on the right side.

---

**Bottom line:** Artifacts turns Claude from a texting buddy into a visual workshop. You're about to stop *imagining* what things look like and start *seeing* them. And honestly? That's when the real fun begins.
