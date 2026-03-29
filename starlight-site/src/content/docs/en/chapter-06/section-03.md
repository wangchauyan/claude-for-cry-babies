---
title: "6.3 The Power of Custom Instructions"
---


> *"Custom Instructions are like whispering in Claude's ear before every conversation: 'Hey, remember -- I'm the one who hates pie charts.'"*

---

## What Custom Instructions Really Are

Think of Custom Instructions as an **invisible first message** that gets automatically inserted at the beginning of every conversation in your Project. You write it once. Claude reads it every time. You never see it in the chat, but Claude always does.

It's like writing a note and taping it to your assistant's monitor: "Before you do anything, read this." Except this assistant actually reads it. Every. Single. Time.

Without Custom Instructions:
```
[Your message appears]
Claude thinks: "Who is this person? What do they want? I'll make my best guess..."
```

With Custom Instructions:
```
[Custom Instructions loaded silently]
[Your message appears]
Claude thinks: "Ah, this is the marketing lead who writes for B2B audiences
and wants everything concise. Got it."
```

---

## Three Full Template Examples

Below are three ready-to-use Custom Instructions for different roles. Copy whichever fits you best, modify the details, and paste it into your Project's Custom Instructions field.

### Template 1: For Marketers

```
ROLE: I'm a Content Marketing Manager at [Company Name],
a B2B SaaS company in the [industry] space. Our product
helps [brief description].

AUDIENCE: Our customers are [describe target audience,
e.g., "mid-market HR directors, 100-500 employees, mostly
in North America"].

MY RESPONSIBILITIES:
- Social media content (LinkedIn, Twitter/X)
- Blog posts and thought leadership articles
- Email marketing campaigns
- Content calendar management
- Performance reporting (traffic, engagement, conversion)

TONE & STYLE:
- Professional but approachable -- like a knowledgeable friend,
  not a corporate robot
- Avoid buzzwords: don't use "synergy," "leverage," "circle back,"
  "move the needle"
- Use specific data points over vague claims
- Active voice over passive voice
- Short paragraphs (2-3 sentences max)

CONTENT GUIDELINES:
- Blog posts: 800-1200 words, include 1-2 relevant stats,
  end with a CTA
- LinkedIn posts: Under 200 words, hook in the first line,
  use line breaks for readability
- Email subject lines: Under 50 characters, curiosity-driven
- Always suggest 3 headline/subject line options so I can pick

TOOLS WE USE: HubSpot (CRM), Buffer (social), Google Analytics,
SEMrush (SEO)

WHEN IN DOUBT: Ask me to clarify rather than guessing. I'd
rather answer a question than rewrite something.
```

### Template 2: For Product Managers

```
ROLE: I'm a Product Manager at [Company Name], a B2B SaaS
platform for [brief description]. I report to [VP/Director
of Product].

TEAM: [X] engineers, [Y] designers, [Z] QA. We run
[2-week/3-week] sprints using [JIRA/Linear/Notion].

KEY METRICS:
- Primary: [e.g., DAU, MRR, Retention Rate]
- Secondary: [e.g., Feature adoption, NPS, Time-to-value]

FRAMEWORKS I USE:
- Prioritization: RICE (Reach, Impact, Confidence, Effort)
- User stories: "As a [user], I want [action] so that [benefit]"
- Sprint planning: Story points (Fibonacci sequence)
- Decision docs: One-pager format with Problem, Options,
  Recommendation

MY COMMON TASKS (and how to handle each):
- Weekly reports: Bullet-point format, include: what shipped,
  what's in progress, blockers, next week's priorities
- PRDs: Use uploaded template, include user stories, acceptance
  criteria, and success metrics
- Stakeholder updates: Executive-friendly, lead with outcomes
  not activities, include data
- Sprint retros: Categorize into Start/Stop/Continue format

COMMUNICATION STYLE:
- Concise over comprehensive (I can always ask for more detail)
- Lead with the "so what" -- why should the reader care?
- Use tables when comparing options
- Always include a clear recommendation, not just options

OUR FISCAL YEAR STARTS: [Month]
OUR RELEASE CYCLE: [describe, e.g., "monthly releases, last
Tuesday of each month"]
```

### Template 3: For Solo Entrepreneurs

```
ROLE: I'm a solo entrepreneur running [Business Name],
a [type of business, e.g., "freelance design studio" /
"e-commerce shop" / "consulting practice"] focused on
[target market].

CONTEXT:
- It's just me (one-person operation)
- Budget is limited -- prioritize free/low-cost solutions
- I wear all hats: sales, marketing, delivery, accounting,
  customer support
- Time is my scarcest resource

MY BUSINESS:
- Revenue model: [how you make money]
- Typical customer: [describe]
- Average deal size: [range]
- Sales cycle: [timeframe]

MY PRIORITIES (in order):
1. Revenue-generating activities
2. Customer retention
3. Marketing/growth
4. Operations/admin
5. Long-term planning

HOW TO HELP ME:
- Lean startup mindset: MVP first, polish later
- Give me the 80/20 version (80% of the result with 20% of the effort)
- When suggesting tools or services, prioritize: free > freemium > cheap
- Don't suggest hiring someone unless I ask -- I know I should,
  I can't yet
- Actionable over theoretical: give me steps, not strategies

TONE:
- Talk to me like a smart friend, not a consultant
- Be direct: if my idea is bad, tell me (kindly)
- Keep responses short unless I ask for depth

TOOLS I USE: [list your actual tools, e.g., "Notion, Stripe,
Mailchimp, Canva, Google Workspace"]

FORMAT PREFERENCES:
- Checklists over paragraphs
- Templates I can fill in over blank-page suggestions
- "Do this today" over "consider your options"
```

---

## Pro Tips for Writing Great Custom Instructions

### Keep It Under 500 Words

Custom Instructions eat into your context window (the desk). If your instructions are a 2,000-word essay, that's a lot of desk space occupied before you even say hello. Think of it as your elevator pitch to Claude, not your autobiography.

| Length | Effect |
|--------|--------|
| Under 200 words | Minimal context, Claude has lots of room for your actual work |
| 200-500 words | Sweet spot: enough context to be useful, room to work |
| 500-1000 words | Heavy: useful for very specific work, but limits conversation depth |
| 1000+ words | Too much: consider splitting into multiple Projects |

### Update Regularly

Your Custom Instructions aren't carved in stone. Update them as:
- Your role evolves
- You discover things Claude keeps getting wrong (add corrections)
- Your preferences change
- You start a new quarter/project with different priorities

A good habit: revisit your Custom Instructions once a month. Takes 5 minutes, saves hours.

### Specific Beats Abstract

| Abstract (Less Useful) | Specific (More Useful) |
|----------------------|----------------------|
| "Write in a professional tone" | "Write like Harvard Business Review, not like a legal brief" |
| "Keep it concise" | "Max 200 words per email, 3-5 bullet points per section" |
| "Use our brand voice" | "Warm, confident, no jargon, use contractions" |
| "I work in tech" | "I'm a PM at a Series B fintech startup with 50 employees" |

The more specific you are, the less Claude has to guess. And the less Claude guesses, the less you have to fix.

### Include Anti-Instructions

Sometimes the most useful instruction is telling Claude what *not* to do:

```
DO NOT:
- Use the word "utilize" (say "use")
- Start emails with "I hope this email finds you well"
- Create pie charts (use bar charts or tables instead)
- Suggest solutions that require a developer (I don't have one)
- Add disclaimers like "I'm an AI" at the end of content
```

These "anti-instructions" are surprisingly powerful. They prevent Claude's default habits from overriding your preferences.

---

## Testing Your Custom Instructions

After setting up your Custom Instructions, test them with a simple prompt:

```
Based on your understanding of my role and preferences, give me
a brief summary of who I am and how you'll approach helping me.
```

Claude should be able to reflect back your role, preferences, and working style. If it misses something important, update your instructions.

---

*You've got the basics down. But what if you need different contexts for different areas of your life? What if "Work Claude" and "Side Project Claude" are very different people? That's next.*
