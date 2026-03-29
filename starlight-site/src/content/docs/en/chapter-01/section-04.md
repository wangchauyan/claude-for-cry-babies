---
title: "1.4 Hands-On: Your First Conversation"
---


> *"The best time to start was yesterday. The second best time is right now, while you still have this book open."*

---

## Step 1: Open Claude

1. Go to [claude.ai](https://claude.ai) in your browser
2. Click **"Sign up"** (or "Log in" if you already have an account)
3. You can sign up with your Google account or email -- either works
4. You'll land on a clean chat interface. Big text box at the bottom. That's where the magic happens.

That's it. No installation. No Terminal. No `npm install`. Just a browser and a text box.

If you made it this far without crying, you're already ahead of the game.

---

## Step 2: Say Hello (Prompt #1 -- The Icebreaker)

Let's start simple. Type this into the chat box and hit Enter:

```
Hi Claude! I'm completely new to AI tools. I work as a [your job title]
and I'm reading a book about how to use you to build things.
Can you introduce yourself in 3 sentences?
```

**Why this works**: You're giving Claude context about who you are and what you need. Even for a simple greeting, context matters.

Claude will respond with something warm and helpful. Notice how it doesn't sound like a robot reading from a manual? That's the Claude tone we talked about in Section 1.2.

**Go ahead. Actually do it.** We'll wait.

...

Welcome back. See? Not scary at all.

---

## Your First Real Conversation (What It Actually Looks Like)

Let's walk through a real interaction so you know exactly what to expect. No surprises.

### Step 1: Open Claude

Go to [claude.ai](https://claude.ai) and sign up (or log in). You'll see a clean chat interface with a text box at the bottom. That's it. No complicated setup.

### Step 2: Type Your First Prompt

Type this into the chat box and hit Enter:

> "I'm a marketing manager who spends too much time writing weekly reports. Can you help me create a template that I can reuse every Friday? Keep it professional but not boring."

### Step 3: What Claude Responds (Simulated)

Here's roughly what you'll get back:

> **Claude:** I'd be happy to help you create a reusable weekly report template! Here's a structure designed to be quick to fill out while still looking polished:
>
> **Weekly Report — [Your Name]**
> **Week of: [Date]**
>
> **Key Wins This Week**
> - [Biggest accomplishment — lead with impact]
> - [Second accomplishment]
>
> **In Progress**
> - [Project A] — [status + next step]
> - [Project B] — [status + next step]
>
> **Blockers (if any)**
> - [What's stuck and what you need]
>
> **Next Week's Focus**
> - [Top 3 priorities]
>
> Want me to adjust the tone, add or remove sections, or turn this into an interactive tool where you just fill in the blanks?

### Step 4: Keep the Conversation Going

Now here's the key — **you don't stop here**. You respond:

> "This is good but my boss hates emojis. Can you remove those? Also add a 'Shoutouts' section where I can thank team members."

And Claude instantly revises it. No attitude. No "but I already gave you a template." Just a clean update.

**That's the whole loop:** Describe → Review → Refine. You just did it. You're already building.

### What Just Happened

You didn't write any code. You didn't install anything. You didn't read a manual. You had a conversation, and you got a useful output that you can paste into an email right now.

That's the whole premise of this book. Everything else is just doing this same loop with increasingly powerful requests.

---

## Step 3: Ask for Something Useful (Prompt #2 -- The Leave Request Email)

Now let's do something practical. Copy this prompt (or modify it to match your situation):

```
I need to write a leave request email to my manager. Here are the details:

- I want to take 3 days off: April 14-16
- Reason: family event (my sister's wedding)
- I've already arranged for my colleague Sarah to cover my ongoing tasks
- My manager's name is David
- Tone: professional but friendly (we have a good relationship)

Please write the email with a subject line.
```

**What you should notice:**
- You gave Claude *specific details* (dates, names, reason, tone)
- The result is probably better than what you'd have drafted yourself
- If something's off, you can just say "make the tone more casual" or "add a line about being available by phone for emergencies"

This is the core loop: **Describe --> Review --> Refine.** You'll use it a thousand times.

---

## Step 4: Build Something (Prompt #3 -- The Countdown Timer)

Ready for the fun part? Let's create an actual interactive thing. Type this:

```
Create an Artifact: a countdown timer for a product launch.

Details:
- Launch date: June 1, 2025
- Show days, hours, minutes, and seconds counting down
- Clean, modern design with dark background and white text
- Title at the top: "Something Amazing is Coming"
- When the countdown reaches zero, show "WE'RE LIVE!" in big text
```

**What should happen:**

A panel will appear on the right side of the chat (or below, on mobile) showing a **live, working countdown timer**. Real-time. Ticking seconds. The whole deal.

You just built an interactive web application by describing what you wanted. No code written. No Stack Overflow consulted. No tears shed.

**Try tweaking it:**
- "Change the background to a gradient from dark blue to purple"
- "Add a subtle pulse animation to the title"
- "Make the numbers bigger"

Each time, the Artifact updates in real time. You're *iterating on a product* through conversation. This is the workflow for the rest of the book.

---

## Step 5: The Running Project Begins

### The Cry Baby Weekly Report Generator -- v0.1

Every chapter in this book adds a new layer to our running project. By the end, you'll have a fully interactive weekly report generator. But Rome wasn't built in a day, and neither are side projects.

**Your first version is humble.** Let's just get a template.

Type this prompt:

```
I need a weekly report template in Markdown format. Here's what I want:

Sections:
1. Key Accomplishments (3-5 bullet points)
2. Challenges & Blockers (what got in the way)
3. Next Week's Priorities (top 3 items)
4. Metrics (a simple table with columns: Metric, This Week, Last Week, Change)
5. Shoutouts (recognize team members who helped)

Requirements:
- Include placeholder text so I know what to write in each section
- Keep it concise -- the whole report should be fillable in 15 minutes
- Add a header with fields for: Name, Team, Week Ending Date
- Make the tone professional but human (not corporate-speak)

Please create this as an Artifact so I can see the formatted version.
```

**What you'll get:**

A nicely formatted Markdown template that you can use starting *this week*. Copy it, paste it into your notes app, fill it in every Friday. Your manager will think you got a promotion.

**Save this.** We'll come back to it in Chapter 2 (v0.2), Chapter 3 (v0.3 -- interactive), and beyond.

---

## What Just Happened

In about 10 minutes, you:

1. Signed up for Claude (no credit card needed)
2. Had a natural conversation with an AI
3. Generated a professional email ready to send
4. Built a working countdown timer
5. Created a weekly report template for your actual job

No coding. No tutorials. No error messages. No crying.

(Okay, maybe a little cry. But a happy one.)

---

## Three Things to Remember

Before we move on, tattoo these on your brain:

1. **Context is everything.** The more detail you give Claude, the better the result. "Write me an email" vs. the detailed prompt above -- night and day.

2. **Iteration is normal.** Your first result won't be perfect. That's fine. Refine it. "Make the tone warmer." "Add a section about risks." "Actually, remove the table." This back-and-forth IS the process.

3. **You're in control.** Claude suggests, you decide. If it gives you something weird, you don't have to use it. You're the boss.

---

## What's Next

You've proven that you can talk to Claude and get useful results. But you've also probably noticed that *how* you phrase your request matters a lot.

In Chapter 2, we're going to turn that instinct into a skill. You'll learn the CRISPE formula (a framework for writing prompts that actually work), see five real-world prompt makeovers, discover the power of showing examples, and learn how to "argue" with Claude when it doesn't get it right.

By the end of Chapter 2, your prompts will go from "pretty good" to "consistently excellent."

---

*Wipe those tears of joy. We're just getting started.*
