# 2.4 How to "Argue" with AI the Right Way

> *"Claude gave me a motivational speech when I asked for a resignation letter. We need to have a talk."*

---

## You Will Need to Correct Claude. That's Normal.

Let's set expectations: even with a perfect CRISPE prompt and beautiful few-shot examples, Claude will sometimes deliver something that's... not quite right. Maybe the tone is off. Maybe it included something you didn't want. Maybe it interpreted your request in a way that makes logical sense but isn't what you meant.

This is not failure. This is the process.

The skill isn't getting a perfect result on the first try. The skill is knowing how to **steer Claude toward what you want** in 2-3 follow-up messages.

Think of it as a collaborative revision process, not an argument. (Though we're keeping the word "argue" in the title because it's more fun.)

---

## Four Universal Correction Sentence Patterns

Memorize these. Write them on a sticky note. Tattoo them on your forearm. These four patterns handle 90% of all "Claude got it wrong" situations:

### Pattern 1: "Keep X, change Y"

```
I love the structure and the opening paragraph.
But the tone in the second half feels too formal --
can you rewrite just that part to match the casual
tone of the opening?
```

**When to use**: Part of the output is great, part isn't. Don't throw the baby out with the bathwater.

### Pattern 2: "More like A, less like B"

```
This reads more like a corporate press release.
I need it to sound more like a friendly team update --
like something you'd post in a Slack channel,
not publish on a website.
```

**When to use**: The vibe is wrong. You can feel it but it's hard to specify exactly. Comparisons help Claude recalibrate.

### Pattern 3: "Here's specifically what's wrong"

```
Two problems:
1. The third bullet point is factually wrong --
   our Q2 revenue was $2.3M, not $3.2M
2. You included a section about "future roadmap"
   that I didn't ask for. Please remove it.
```

**When to use**: You can pinpoint the exact issues. Be surgical. Claude handles specific feedback far better than vague feedback.

### Pattern 4: "Show me a different approach"

```
This is well-written but it's not the angle I was going for.
Instead of listing features, can you restructure it around
the customer's problem? Start with the pain point,
then show how we solve it.
```

**When to use**: The execution is fine but the strategy is wrong. You need a fundamentally different approach, not a tweak.

---

## A Real Four-Round Correction Dialogue

Let's walk through a real scenario to see how iteration works in practice.

### The Task
You want Claude to write a short LinkedIn bio for you.

### Round 1: Initial Prompt

```
Write a LinkedIn bio for me. I'm a product manager at a fintech
startup. 6 years of experience. I specialize in payment products.
Keep it under 100 words.
```

**Claude's output:**
> Experienced Product Manager with 6 years of expertise in fintech and payment solutions. Proven track record of driving product strategy, leading cross-functional teams, and delivering innovative payment products that scale. Passionate about leveraging technology to transform financial services and create seamless user experiences. Strong background in agile methodologies, data-driven decision-making, and stakeholder management.

### Round 2: First Correction

```
This sounds like every other LinkedIn bio on the platform.
It's full of buzzwords ("proven track record," "leveraging technology,"
"cross-functional teams").

Can you rewrite it to sound like an actual human? Someone who's
good at their job but doesn't take themselves too seriously.
No buzzwords. No "passionate about."
```

**Claude's output:**
> I help fintech companies figure out how people should pay for things. For the past 6 years, I've been building payment products -- the kind that work so smoothly you forget they're there. Currently at [Startup], where I spend my days talking to users, arguing about button placement, and occasionally convincing engineers that yes, we really do need that feature. Formerly at [Company]. I think the best products are the ones nobody has to think about.

### Round 3: Getting Warmer

```
Much better! I love the "arguing about button placement" line.
Two tweaks:

1. The last sentence ("best products are the ones nobody has to
   think about") feels like a generic quote. Can you replace it
   with something more specific to payments?
2. Add a short personal touch at the end -- I'm a marathon runner
   and a new dad. Make it one sentence, not cringey.
```

**Claude's output:**
> I help fintech companies figure out how people should pay for things. For the past 6 years, I've been building payment products -- the kind that work so smoothly you forget they're there. Currently at [Startup], where I spend my days talking to users, arguing about button placement, and occasionally convincing engineers that yes, we really do need that feature. My north star: if a user has to think about the payment step, I haven't done my job. When I'm not obsessing over checkout flows, I'm running marathons and learning that babies have zero respect for your sprint schedule.

### Round 4: Final Polish

```
Perfect. One last thing: remove "My north star:" --
it's a little too self-important. Just state it directly.
```

**Claude's final output:**
> I help fintech companies figure out how people should pay for things. For the past 6 years, I've been building payment products -- the kind that work so smoothly you forget they're there. Currently at [Startup], where I spend my days talking to users, arguing about button placement, and occasionally convincing engineers that yes, we really do need that feature. If a user has to think about the payment step, I haven't done my job. When I'm not obsessing over checkout flows, I'm running marathons and learning that babies have zero respect for your sprint schedule.

**Four rounds.** From a generic buzzword soup to a bio that actually sounds like a real, interesting person. Each round took 30 seconds. Total time: 2 minutes.

---

## When to Start Fresh Instead of Keep Fixing

Sometimes, iterating isn't working. You're on round 7 and it's still not right. The output keeps getting worse as Claude tries to accommodate contradictory feedback. You feel like you're rearranging deck chairs on the Titanic.

**Signs you should start a new conversation:**

| Signal | What It Means |
|--------|--------------|
| You've corrected the same issue 3+ times | Claude has "anchored" to its original approach and can't fully escape it |
| The output is getting worse, not better | Your corrections might be contradicting each other |
| You've realized your original prompt was fundamentally wrong | No amount of fixing will overcome a bad foundation |
| The conversation is 20+ messages long | Context decay is kicking in -- Claude is forgetting earlier instructions |
| You've changed your mind about what you want | That's okay! Just start over with a clearer vision |

**How to start fresh effectively:**

1. Open a new conversation
2. Write a better prompt (using what you learned from the failed attempt)
3. Include the best parts from the previous attempt as examples: "Here's a paragraph I liked from a previous draft: [paste it]. Write the rest to match this level."

Starting over is not defeat. It's efficiency. A clean prompt informed by a failed attempt almost always produces better results faster than round 15 of corrections.

---

## The Running Project: Weekly Report Generator v0.2

Remember the weekly report template from Chapter 1? Let's upgrade it using everything we learned in this chapter.

### v0.1 Prompt (from Chapter 1):
*"I need a weekly report template in Markdown format..."*

### v0.2 Prompt (with CRISPE):

```
**Capacity**: You are an executive communications specialist
who helps busy professionals write clear, impactful status reports.

**Request**: Create an improved weekly report template as an
Artifact in clean Markdown format.

**Insight**: The report is for a product manager at a tech company.
It will be read by their direct manager (a VP) who reviews
12 of these every Monday morning. The VP cares about:
(1) are we on track, (2) what risks should I know about,
(3) do you need anything from me. Everything else is secondary.

**Style**:
- Clean Markdown with clear section headers
- Include a "TL;DR" section at the very top (3 bullet points max)
- Sections: TL;DR, Key Accomplishments, Risks & Blockers,
  Next Week's Priorities, Metrics (simple table), Shoutouts
- Each section should have placeholder text showing
  both WHAT to write and HOW to write it (give an example,
  not just "[insert here]")
- Total length: fillable in 10 minutes

**Personality**: The template should guide the writer toward
specificity. For example, instead of a placeholder like
"[accomplishment]", use an example like
"Shipped the checkout redesign, reducing cart abandonment
by 12% (goal was 10%)" -- show them what a GREAT entry looks like.

**Experiment**:
- Don't include a "lessons learned" section (nobody fills those out)
- Don't use corporate jargon in the examples
- Include a subtle note at the bottom:
  "Tip: Write the TL;DR last -- it forces you to prioritize."
```

**Try both prompts** -- the v0.1 and the v0.2. Compare the results. Notice how the CRISPE version produces a template that isn't just formatted nicely, but actually *teaches you how to write a good report* through its examples.

That's the difference between a prompt and a *good* prompt.

---

## Chapter 2 Wrap-Up

Here's what you now know that most AI users don't:

1. **CRISPE** gives you a repeatable framework for great prompts (Section 2.1)
2. **Specific context** about audience, relationship, and goals transforms generic outputs into targeted ones (Section 2.2)
3. **Showing examples** (few-shot) teaches Claude your style faster than describing it (Section 2.3)
4. **Iterating with clear feedback** turns a decent first draft into an excellent final version (Section 2.4)

You are no longer a prompt novice. You're a prompt practitioner.

---

## What's Next: Chapter 3

You've been chatting with Claude and getting text-based results. In Chapter 3, we're going visual. We'll dive deep into **Artifacts** -- Claude's ability to create interactive web pages, tools, and visualizations right in the chat.

You'll build:
- A mood selector (interactive widget)
- A personal card website (shareable link)
- A data visualization dashboard (from your own data)

And the Weekly Report Generator will get its v0.3 upgrade: from a static template to an **interactive, fillable web form**.

The training wheels come off in Chapter 3. But you'll be ready.

---

*Dry those tears, cry baby. You just leveled up.*
