# 6.4 Advanced: Managing Different Areas of Life

> *"You don't use the same tone in a board meeting and at a bar with friends. Claude shouldn't either."*

---

## The Context Contamination Problem

Here's a scenario that happens more often than you'd think:

You've been using your "Work" Project all morning. Claude is in professional PM mode, writing concise stakeholder updates with RICE prioritization frameworks. Then, in the same conversation, you ask Claude to help you write a birthday message for your friend.

The result? "Dear Marcus, I hope this birthday finds you well. Per our annual celebration cadence, I'd like to highlight three key accomplishments from your personal Q4..."

Claude isn't being weird. It's being *consistent* -- with your work context. It's like wearing your corporate badge to a house party. Technically, you're still you. But the vibe is way off.

The solution? **Separate Projects for separate contexts.** Give Claude the right "outfit" for each occasion.

---

## Example Project Portfolio

Here's what a well-organized set of Projects might look like:

| Project Name | What It's For | Custom Instructions Focus |
|-------------|---------------|--------------------------|
| **Daily Work** | Reports, emails, stakeholder comms | Professional tone, company context, team structure |
| **Side Project: Recipe App** | Building your MVP | Technical context, user persona, feature roadmap |
| **English Study** | Language learning, writing practice | Tutor mode, corrections welcome, vocabulary level |
| **Finance & Investments** | Portfolio analysis, budgeting | Risk-aware, data-driven, no speculation |
| **Job Search** | Resume, cover letters, interview prep | Target roles, key strengths, career narrative |

### Why Five Projects, Not One Mega-Project?

You might think: "Why not just upload everything into one giant Project and let Claude figure out what's relevant?"

Three reasons:

**1. Context window economy.** Every uploaded file and every Custom Instruction takes up space on Claude's desk. A mega-Project with 20 documents and 1,000 words of instructions leaves Claude less room for your actual work. Separate Projects keep each workspace lean and focused.

**2. Mental model clarity.** When you click into "Side Project: Recipe App," your brain immediately shifts to that context. So does Claude's. If everything lived in one Project, you'd constantly be saying things like "Ignore the work stuff, I'm working on my app now." That's wasted effort.

**3. Preventing cross-contamination.** Your investment analysis should be data-driven and cautious. Your recipe app brainstorming should be creative and experimental. These are fundamentally different modes. Mixing them risks Claude applying the wrong judgment to the wrong context.

---

## Setting Up Each Project

### Project: Daily Work

**Upload:**
- Company overview (1-2 pages)
- Your job description
- 2-3 sample outputs you were happy with (reports, emails)
- Team roster or org chart

**Custom Instructions (key points):**
```
Role: [Your role] at [Company]
Main tasks: weekly reports, stakeholder emails, data analysis
Tone: Professional, concise, data-driven
Always end reports with "Next Steps" section
Use bullet points over paragraphs
Our fiscal year starts [month]
```

### Project: Side Project (MVP Development)

**Upload:**
- Feature wish list or product brief
- User persona document (even a rough one)
- Any wireframes or sketches
- Reference apps/sites you like the look of (as screenshots)

**Custom Instructions (key points):**
```
Project: [Name] - a [type of app] for [target user]
Stage: Early MVP, functionality over polish
Tech approach: Building with Claude Artifacts (HTML/CSS/JS)
Priority: Working features > beautiful design
Build incrementally, one feature at a time
Always use Chain of Thought -- show plan before coding
```

### Project: Learning (English, Certifications, etc.)

**Upload:**
- Current skill level assessment
- Study materials or course outlines
- Target exam or goal description

**Custom Instructions (key points):**
```
Mode: Tutor / Study buddy
My level: [beginner/intermediate/advanced]
Goal: [e.g., "Pass TOEFL with 100+", "Get AWS certification"]
When I make mistakes, correct them and explain why
Give me practice exercises after explanations
Quiz me periodically to test retention
Speak at my level -- don't oversimplify, but define technical terms
```

### Project: Finance & Investments

**Upload:**
- Portfolio summary (anonymized if preferred)
- Investment goals and risk tolerance
- Any financial data you want analyzed

**Custom Instructions (key points):**
```
Role: Act as a financial analysis assistant
My context: [brief financial situation]
Analysis style: Data-driven, show calculations
IMPORTANT: You are not a financial advisor. Present analysis
and options, never tell me what to do. Always note that I
should consult a professional for financial decisions.
Risk tolerance: [conservative/moderate/aggressive]
Preferred format: Tables with numbers, not paragraphs
```

---

## Switching Between Projects

One of the underrated benefits of multiple Projects is the mental shift. When you click from "Daily Work" to "Side Project: Recipe App," it's like changing rooms in your house. You leave work mode and enter creative mode. Claude switches modes too.

**Workflow example for a typical day:**

```
9:00 AM  -- Open "Daily Work" Project
           Write weekly report, draft 3 emails

12:00 PM -- Lunch break + open "English Study" Project
           Practice writing a short essay, get feedback

1:00 PM  -- Back to "Daily Work" Project
           Analyze Q2 metrics, prepare presentation notes

6:00 PM  -- Open "Side Project: Recipe App" Project
           Add search functionality to the app

9:00 PM  -- Open "Finance" Project
           Review monthly portfolio performance
```

Each session starts with the right context already loaded. No "So, as I mentioned before..." No re-explaining. Just pick up where the context leaves off.

---

## When to Merge vs. Split Projects

| Signal | Action |
|--------|--------|
| Two Projects always use the same reference docs | Consider merging them |
| One Project has 15+ uploaded files | Consider splitting into sub-projects |
| You find yourself overriding Custom Instructions often | Split into more specific Projects |
| A Project hasn't been used in 2+ months | Archive or delete it |
| You keep context-switching within one Project | Definitely split it |

---

## The Organizing Principle

Here's the simple rule: **one Project = one mode of thinking.**

If the tone is different, if the audience is different, if the reference materials are different, if the goal is different -- it's a different Project.

You wouldn't store your tax documents in your recipe binder. Don't make Claude store them together either.

---

*Your Projects are organized. Claude knows who you are in every context. But what about information that changes daily -- current events, live prices, breaking news? That's where Web Search comes in.*
