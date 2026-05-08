# 8.5 The Next Level: When You Start Using Claude Code

> *This section is for readers who want to take things further. If you're happy with what the web version of Claude can do for you, feel free to skip ahead to the graduation challenge. But if someday you want to go from "building small tools" to "building real software projects" -- come back here. This is your roadmap.*

---

## From Claude.ai to Claude Code

For the past seven chapters, we've been working inside Claude's web interface. That's great -- it's more than enough for most use cases.

But when your project outgrows a single Artifact -- when you need dozens of files, installed packages, and a running application -- you'll want a more powerful tool: **Claude Code**.

Claude Code is the command-line version of Claude. It can:
- Read and modify files directly on your computer
- Run commands (install packages, run tests, start servers)
- Build complete software projects from scratch

> Think of Claude.ai as "discussing ideas on a whiteboard." Claude Code is "having an AI sit next to you and actually operate your computer."

Sounds intimidating? The way you interact with it is the same -- you type in plain English. The only difference is that now Claude's "hands" can touch your files.

---

## Git: Not Just a Programmer Thing

When you start using Claude Code (or tools like Cursor or Replit), one tool becomes critically important: **Git**.

You've probably heard that Git is a "version control system" used by developers to track code changes. Sounds very technical. But the essence is simple:

> **Git is a time machine + an automatic journal.**

Every time you (or an AI) modify files and "save" (in Git's world, this is called a *commit*), it:
1. Records what you changed
2. Records why you changed it (the commit message)
3. Records when you changed it
4. Preserves a complete snapshot of the previous version

Broke something? One command takes you back to five minutes ago, an hour ago, or even a month ago.

---

## Why AI Needs Git Even More Than Humans Do

Remember Chapter 6, where we discussed how Claude "loses its memory" with every new conversation?

Claude Code has the same problem. Its memory (the Context Window) works like your brain's working memory -- there's a limit to how much it can hold at once. When your project has dozens of files and weeks of development history, it simply can't keep everything in its head.

**That's where Git becomes AI's external hard drive.**

Picture this: yesterday you worked with Claude Code and modified ten files. Today you start a new conversation. The new Claude remembers nothing. But with Git, it can run:

```
git log --oneline -10
```

And instantly see:
```
abc1234 Add dark mode toggle feature
def5678 Fix mobile layout issues
ghi9012 Create user login page
...
```

No need for you to spend ten minutes re-explaining "what we did yesterday." **The Git log is the recap.**

---

## Memory Isn't Just Two Layers

You might think AI memory comes in two flavors: short-term memory while working, and a handwritten sticky note.

In reality, Claude Code has several layers of memory, each with its own job:

| Memory Type | Plain English | How It Works | What to Store |
|-------------|--------------|--------------|---------------|
| **CLAUDE.md** | Project rule card | Fully loaded every session | Stable rules, conventions, build commands |
| **Auto Memory** | AI's own notebook | Claude records and reviews automatically | Past mistakes, lessons learned |
| **Session Memory** | Last time's recap | Auto-generated, auto-loaded, hands-off | What happened last session |
| **Git History** | Complete journal | Looked up when needed | What happened, why, and when |

The key to deciding which layer something belongs in isn't the type of information -- it's **how often you need it**:

- Need it every time → CLAUDE.md
- Brought in automatically (you don't manage it) → Session Memory / Auto Memory
- Look it up when needed → Git

A common mistake is cramming all history into CLAUDE.md -- like taping every page of your journal onto a sticky note. Keep the sticky note concise. Let the journal accumulate naturally.

---

## Four Things Git Does for AI

### 1. Rebuild Context: "Previously on..."

When a new AI session starts, a quick look at recent commits gets it up to speed instantly.

It's like inheriting a colleague's project -- reading their work log is faster and more accurate than having them explain everything verbally for an hour.

### 2. Precise Tracing: "Why was it written this way?"

Every line of code carries its history -- who wrote it, when, and with what explanation.

When the AI encounters confusing code, it can look up the note its "past self" left three months ago: "This has to be written this way because of the XX constraint."

### 3. Safe Exploration: "Break things without fear"

This is the most important one. With Git, you can let AI experiment boldly:
- Want to restructure the entire page? Commit the current version first, then go wild
- Broke something? One command to return to the safe point
- Want to try two approaches simultaneously? Create two branches, experiment in parallel

Without Git, if AI breaks a file, you have to manually restore it. With Git, even if the AI deletes your entire project folder, you can resurrect everything with one command.

### 4. Handoff: "The next person who picks this up"

Whether it's the next AI session, a different AI tool, or an actual human developer -- Git history lets anyone quickly understand the full story of a project.

---

## A Simple Mental Model

```
CLAUDE.md      = Map (where I am, where I'm going, what the rules are)
Auto Memory    = AI's own sticky notes (past mistakes, lessons learned)
Session Memory = Yesterday's recap (auto-generated, hands-off)
Git            = Footprints (which paths I've walked, why I turned at each junction)
```

Keep the map concise -- too much information and you can't find anything.
Let footprints accumulate naturally -- leave a marker each time you move forward, and check back only when you need to.
The two middle layers? Claude manages those itself -- you don't need to worry about them.

---

## You Don't Need to Learn Git Right Now -- But Remember It Exists

If you're this book's primary reader (PM, marketer, designer), you don't need to learn Git **today**.

But please file these three sentences away:

1. **Git is a time machine** -- any change can be undone
2. **Git is AI's journal** -- it helps a forgetful AI quickly recall what happened
3. **Git is the ultimate safety net** -- a million times more reliable than "remember to hit Ctrl+Z"

When you find yourself:
- Using Cursor to build more complex projects
- Using Claude Code to directly manipulate files
- Working on something too big to recover from manually when things go wrong

That's when you come back to this section and learn Git. The learning curve is about two afternoons, and the return on investment will make you wish you'd learned it sooner.

---

> *"The power of a tool isn't in how complex it is. It's in knowing it exists and knowing when to reach for it. Today you learned about a time machine called Git. When the day comes that you need it, you won't be caught off guard."*

---

*Alright. One last thing before you graduate. Next up: your final challenge. You might want tissues.*
