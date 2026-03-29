---
title: "2.2 Five Real-World Prompt Makeovers"
---


> *"Learning prompts from theory is like learning to cook from a textbook. You need to see real meals being made."*

---

Here are five tasks that real humans do every week. For each one, we'll show you the rookie version (what most people type) and the upgraded version (what gets actually great results). Study the differences. Steal the patterns.

---

## Makeover #1: Writing a Leave Request Email

### The Rookie Version

```
Write a leave request email.
```

**What you get**: A template so generic it could have come from a 2005 HR training manual. "Dear Manager, I am writing to formally request..."

### The Upgraded Version

```
Write a leave request email with these details:

- To: My manager Rachel (we're friendly, been working together 2 years)
- Dates: May 5-9 (full week)
- Reason: I'm moving apartments. I know it's not the most glamorous reason,
  so no need to over-explain it
- Coverage: I've asked Tom to handle client calls, and
  I'll finish the Q2 report before I leave
- Tone: Warm and professional. Not overly formal.
- Length: Short -- Rachel reads 200 emails a day,
  she'll appreciate brevity

Include a subject line.
```

**What you get**: A natural-sounding email that Rachel will approve in 30 seconds because it answers all her questions upfront.

**Pattern to steal**: Tell Claude the *relationship dynamic* and the *reader's constraints* (Rachel is busy).

---

## Makeover #2: Analyzing a Sales Report

### The Rookie Version

```
Analyze this sales data.
```
*(uploads a CSV file)*

**What you get**: A laundry list of obvious observations. "Revenue in March was higher than February." Thanks, Claude. Really groundbreaking stuff.

### The Upgraded Version

```
I'm uploading our Q1 sales data (CSV). I need to present findings
to my sales director tomorrow. Please analyze it with these goals:

1. Identify the top 3 performing products by revenue AND by growth rate
   (these might be different products -- that's the interesting part)
2. Flag any products where sales dropped >15% month-over-month
   -- I need to explain why in the meeting
3. Compare regional performance: West Coast vs East Coast vs Midwest
4. Create a summary table I can paste into my slides

Context: We launched a new pricing tier in February.
My director will want to know if it's working.

Format: Start with a 3-sentence executive summary,
then the detailed analysis with tables.
```

**What you get**: An analysis that makes you look like you spent 3 hours in Excel (you spent 3 minutes in Claude).

**Pattern to steal**: Tell Claude the *business context* (new pricing tier) and the *audience's likely questions* (is it working?).

---

## Makeover #3: Making a Birthday Invitation Webpage

### The Rookie Version

```
Make a birthday invitation webpage.
```

**What you get**: A technically functional but deeply ugly webpage that looks like it was made in 1997. Comic Sans may or may not be involved.

### The Upgraded Version

```
Create an Artifact: a birthday party invitation as a beautiful
single-page website.

Details:
- It's for my friend Mei's 30th birthday
- Date: Saturday, June 14, 7 PM
- Location: The Rooftop Bar, 456 Market Street, San Francisco
- Theme: "Dirty Thirty" -- playful but classy
- Color scheme: Black and gold
- Include: An animated confetti effect on page load
- Include: A countdown timer to the party
- Include: The text "Dress code: Look like a million bucks"
- Include: An RSVP section with a note "DM Mei on Instagram to RSVP"
- Vibe: If a luxury brand threw a house party

Do NOT use Comic Sans. This is a classy affair.
```

**What you get**: A genuinely impressive webpage that you'd be proud to share. The animated confetti and countdown timer are chef's-kiss details that took zero coding knowledge.

**Pattern to steal**: Give *visual and emotional direction* (color scheme, vibe). The "if a luxury brand threw a house party" line gives Claude more to work with than any technical specification.

---

## Makeover #4: Organizing Meeting Notes

### The Rookie Version

```
Organize these meeting notes.
```
*(pastes a wall of messy notes)*

**What you get**: The same content, slightly reformatted. Maybe some bullet points. Basically a fancy copy-paste.

### The Upgraded Version

```
Here are my raw notes from today's product team meeting
(I was typing fast, they're messy). Please organize them into:

1. **Decisions Made** -- clear, actionable statements
   (who decided what, and any deadlines mentioned)
2. **Action Items** -- formatted as a table with columns:
   Task | Owner | Deadline | Priority
3. **Open Questions** -- things that were discussed but
   not resolved (these need follow-up)
4. **Key Discussion Points** -- brief summary of major
   topics for people who missed the meeting

If anything in my notes is ambiguous, flag it with [UNCLEAR]
so I know to verify it.

Here are the notes:
---
talked about Q3 roadmap, jen wants to prioritize the mobile app
redesign, mike pushed back said we need to fix the onboarding flow
first. data shows 40% drop-off at step 3. agreed to do a spike on
onboarding this sprint. sarah will lead it. also need to hire 2 more
engineers but budget approval still pending -- alex checking with
finance by friday. launch date for redesign still TBD, probably
august. oh and the API issue from last week is fixed, tom deployed
it yesterday...
```

**What you get**: Beautifully structured notes that make you look like the most organized person in every meeting. The [UNCLEAR] flags are genuinely helpful -- Claude will catch things you missed.

**Pattern to steal**: Define the *output structure* in detail. Claude is brilliant at reformatting messy input into clean output -- but only if you tell it *what structure you want*.

---

## Makeover #5: Building a Multiplication Practice Tool for Kids

### The Rookie Version

```
Make a multiplication quiz for kids.
```

**What you get**: A static list of multiplication problems. "What is 3 x 4?" Printed on screen. No interaction. Your kid gets bored in 12 seconds.

### The Upgraded Version

```
Create an Artifact: an interactive multiplication practice game
for my 8-year-old daughter.

Features:
- Random multiplication problems (numbers 1-12)
- She types her answer and clicks "Check"
- If correct: show a fun animation (confetti or stars)
  and say something encouraging (vary the messages --
  "You're on fire!", "Math genius!", "Nailed it!" etc.)
- If wrong: gently show the correct answer and say
  "Almost! Let's try another one" (never say "Wrong!" --
  we're building confidence here)
- Score tracker: show "5 out of 7 correct" at the top
- A "difficulty" selector: Easy (1-5), Medium (1-9), Hard (1-12)
- Design: colorful, playful, big buttons (she's using an iPad)
- Include a "Reset" button to start over

The overall vibe should be "supportive math tutor" not "scary test."
```

**What you get**: A genuinely fun, interactive math game that your daughter will actually enjoy. The encouraging messages, the difficulty selector, and the "never say Wrong" instruction make it *feel* like a product -- because it is. You just built one.

**Pattern to steal**: Think about the *end user's experience and emotions*. Claude can build to a vibe, not just a specification. "Supportive math tutor, not scary test" tells Claude more than a 50-line feature list.

---

## The Pattern Behind All Five Makeovers

Notice what the upgraded versions all have in common:

| Element | What It Does |
|---------|-------------|
| **Specific details** | Names, dates, numbers -- not vague placeholders |
| **Audience awareness** | Who will see this? What do they care about? |
| **Desired format** | Tables, bullet points, sections -- define the shape |
| **Tone/vibe** | How should it *feel*? Not just what should it say? |
| **Anti-constraints** | What should it NOT do? (No Comic Sans. Never say "Wrong!") |
| **Context** | Business situation, relationship dynamics, underlying goals |

You don't need to include all of these every time. But the more of them you weave in, the closer Claude's first attempt gets to your final vision.

---

*The upgraded prompts above told Claude WHAT we wanted. But what about teaching Claude HOW we think? That's where examples come in. Next up: the surprisingly powerful technique of "show, don't tell."*
