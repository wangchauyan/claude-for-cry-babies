---
title: "7.2 Idea Selection Guide"
---


> *"Not every idea deserves to be an MVP. Some ideas deserve to be a napkin sketch you admire and then recycle."*

---

## The Harsh Truth About Ideas

You have ideas. Great ones, probably. The problem isn't your imagination -- it's knowing which ideas are **buildable with Claude + Artifacts in a weekend** versus which ones will send you spiraling into a three-month rabbit hole of frustration.

This section saves you from yourself.

---

## Good Fit: Build These

These types of projects are *perfect* for a non-developer building with Claude Artifacts:

| Project Type | Example | Why It Works |
|-------------|---------|-------------|
| **Calculators & Converters** | Tip calculator, unit converter, mortgage estimator | Simple input-output logic, no backend needed |
| **Content Generators** | Email drafter, social post writer, weekly report tool | Text in, formatted text out -- Claude's bread and butter |
| **Dashboards & Trackers** | Habit tracker, expense overview, project status board | Visual display of data, great for Artifacts |
| **Educational Tools** | Flashcard maker, quiz generator, study guide creator | Interactive learning fits perfectly in one page |
| **Mini-Games & Fun Tools** | Trivia quiz, decision spinner, personality quiz | Self-contained, no server needed, instant gratification |
| **Forms & Surveys** | Feedback collector, event RSVP, intake questionnaire | Input fields + display = Artifacts sweet spot |
| **Reference Tools** | Cheat sheets, comparison tables, quick-lookup guides | Organize information beautifully |

The common thread? **Everything happens in one page.** No login. No database. No server. Just a self-contained tool that does one thing well.

---

## Bad Fit: Don't Build These (Yet)

These ideas are tempting but will make you cry -- and not the proud-of-yourself kind of crying:

| Project Type | Why It's Trouble | What You'd Actually Need |
|-------------|-----------------|------------------------|
| **User login systems** | Authentication requires servers, databases, security | Backend infrastructure, password hashing, sessions |
| **Database-driven apps** | Artifacts can't save data after you close the tab | A real database (PostgreSQL, Firebase, etc.) |
| **Real-time chat** | Needs WebSockets, servers, multi-user connections | Backend server with real-time capabilities |
| **Payment processing** | Stripe, security compliance, money handling | PCI compliance, payment APIs, a lawyer probably |
| **Mobile app control** | Can't interact with phone hardware from a webpage | Native app development (Swift, Kotlin) |
| **Multi-user collaboration** | Real-time sync between users is genuinely hard | Backend, WebSockets, conflict resolution logic |
| **Anything with "AI inside"** | You can't run AI models inside an Artifact | API keys, servers, AI service integration |

**The rule of thumb:** If your idea requires *remembering things between sessions* or *talking to other services*, it's not an Artifacts MVP. It might be a great idea, but it needs different tools (which we'll mention in Chapter 8).

---

## The Three-Question Selection Exercise

Before you commit to building something, run your idea through these three questions:

### Question 1: "Is this painful enough to solve?"

| Answer | Verdict |
|--------|---------|
| "It would be nice to have" | Probably not worth building -- you'll lose motivation |
| "I deal with this annoyance every week" | Now we're talking |
| "I literally complained about this yesterday" | Build it. Build it now. |

The best MVPs solve problems you personally feel. If you don't care about the problem, you won't care about the solution.

### Question 2: "Can I describe what it does in one sentence?"

| Description | Verdict |
|-------------|---------|
| "It's like Notion meets Slack meets Trello but with AI and also it tracks your mood and..." | Too much. Way too much. Pare it down. |
| "You type in your job title and it generates practice interview questions" | Perfect. Clear, simple, buildable. |
| "It helps teams make better decisions about lunch" | Great. Specific problem, clear solution. |

If you can't fit it in one sentence, your scope is too big. Cut features until it fits. Then cut one more.

### Question 3: "Can this be a single-page Artifact?"

| Answer | Verdict |
|--------|---------|
| "It needs multiple pages with navigation" | Maybe simplify to one page first |
| "It needs to save data permanently" | Not an Artifacts MVP -- consider alternatives |
| "Everything happens on one screen" | Perfect for Artifacts |

---

## Your Turn: Pick Your Project

Based on the three questions above, think of something you'd want to build. Or just pick one of the three projects we're about to walk through:

| Project | Problem It Solves | Difficulty |
|---------|------------------|------------|
| **Interview Prep Assistant** (Section 7.3) | "I have an interview and I'm freaking out" | Beginner |
| **Team Lunch Decider** (Section 7.4) | "We waste 20 minutes every day arguing about lunch" | Beginner-Intermediate |
| **Weekly Report Generator v1.0** (Section 7.5) | "I hate writing status reports" | Intermediate |

All three pass the three-question test. All three can be built in a single Claude conversation. All three solve problems that real people actually have.

---

*Got your idea? Good. Let's build the first one together.*
