---
title: "2.3 The Power of Examples: Few-Shot Prompting (Plain English)"
---


> *"Telling someone your design taste is hard. Showing them your Pinterest board? Instant understanding."*

---

## The Interior Design Analogy

Imagine you're hiring an interior designer for your living room. You could say:

**Option A**: "I want something modern, warm, and cozy."

The designer nods, goes away, and comes back with a mood board. It's modern and warm, sure. But it's mid-century modern with burnt orange and teak wood. You were thinking Scandinavian modern with soft whites and light wood. Both are "modern, warm, and cozy." Neither of you is wrong. You just had different pictures in your heads.

**Option B**: You pull out your phone and show 3 photos from Pinterest. "Like this. And this. And especially this one -- I love how they used the throw pillows."

The designer lights up. *Now* they see exactly what you mean. The mood board they come back with is spot-on.

This is **few-shot prompting** in plain English: instead of describing what you want, you **show Claude examples** of what good looks like. Claude picks up on the patterns, style, and structure -- and mirrors them.

---

## A Practical Example: Teaching Claude Your Email Tone

Let's say you write client emails every day, and you have a very specific tone: friendly but efficient. No fluff. Light humor. Always ends with a specific next step.

You could try describing that tone to Claude... or you could just show it.

### The Prompt

```
I want you to learn my email writing style from these 3 examples.
Then write a new email using the same tone, structure, and approach.

**Example 1:**
Subject: Quick update on the Henderson project

Hey Lisa,

Quick one -- the Henderson deck is in final review.
Barring any last-minute plot twists, I'll have it in
your inbox by Thursday EOD.

One thing I need from you: can you confirm the Q2 budget
numbers? I want to make sure I'm not using the draft figures
from last month.

Holler if Thursday doesn't work.

Cheers,
[Me]

---

**Example 2:**
Subject: Re: Vendor shortlist

Hey Marcus,

Thanks for the shortlist. I went through all four and here's
where I landed:

- Vendor A: Strong on price, weak on support. Risky.
- Vendor B: Our best bet. Good balance of cost and capability.
- Vendor C: Too expensive for what we'd get.
- Vendor D: Interesting but too new. Maybe revisit next quarter.

My vote is Vendor B. Want to set up a 15-min call Thursday
to align before we present to leadership?

Best,
[Me]

---

**Example 3:**
Subject: Team dinner -- are we doing this or what?

Hey team,

It's been brought to my attention (by me) that we haven't
done a team dinner in ages. Proposing next Friday, 7 PM.
Somewhere with good food and no dress code.

Drop your votes:
🍝 Italian
🍣 Japanese
🌮 Mexican

If nobody responds by Wednesday I'm picking,
and I'm in a taco mood.

[Me]

---

Now write a new email with my style. The situation:
I need to follow up with a client (Jamie) who was supposed
to send us their brand guidelines 2 weeks ago.
We need them to stay on schedule, but I don't want to
sound annoyed or passive-aggressive. The project deadline
is April 30.
```

### What Claude Produces

Something like:

```
Subject: Brand guidelines -- still on your radar?

Hey Jamie,

Hope you're not drowning over there. Just floating this back
to the top of your inbox -- we're still waiting on the brand
guidelines to keep the project humming along.

The April 30 deadline is holding firm on our end, and the
guidelines are the last puzzle piece before we move into
the design phase. If you can get them to us by Friday,
we're golden.

If there's a holdup on your side, let me know --
happy to work with whatever you have, even if it's not
the final version.

Cheers,
[Me]
```

**Notice what happened**: Claude picked up your short paragraphs, your casual-but-professional tone, your tendency to end with a clear action item, your "Cheers" sign-off, and even your habit of using dashes for asides. It sounds like *you*, not like an AI.

---

## The Golden Rules of Few-Shot Prompting

### Rule 1: 2-3 Examples Is the Sweet Spot

One example might be a fluke. Four or more starts to overwhelm. Two to three examples give Claude enough pattern to work with without flooding the conversation.

### Rule 2: Choose Representative Examples

Your examples should showcase the style you *want*, not random samples. If you want Claude to match your professional emails, don't include that one email you wrote at midnight after a bad day. (We've all written those. None of them should be templates.)

Pick examples that represent your **best version** of the style you're going for.

### Rule 3: Tell Claude What You Like About Them

This is the pro move. Don't just dump examples -- tell Claude which specific elements to pay attention to:

```
Notice these things about my style:
- I always start with a casual greeting, not "Dear"
- I use short paragraphs (2-3 sentences max)
- I include light humor but never sarcasm
- I end with a specific next step or question
- I use "Cheers" as my sign-off, never "Best regards"
```

This is like pointing at the Pinterest photo and saying "I love the throw pillows specifically." It directs Claude's attention to the features that matter most to you.

---

## Beyond Email: Where Else This Works

Few-shot prompting isn't just for emails. You can use it for almost anything where "style" matters:

| Use Case | What to Show as Examples |
|----------|------------------------|
| **Social media posts** | 3 of your best-performing posts |
| **Product descriptions** | 3 existing descriptions from your catalog |
| **Meeting summaries** | 3 past summaries you liked |
| **Customer responses** | 3 replies that match your support team's voice |
| **Blog posts** | 3 paragraphs from your blog that nail the tone |
| **Code comments** | 3 examples of your commenting style |
| **Report formatting** | 3 sections from previous reports you were happy with |

The pattern is always the same:
1. Show Claude 2-3 examples of what "good" looks like
2. Point out the specific elements you want it to replicate
3. Give it the new task to apply that style to

---

## When NOT to Use Few-Shot Prompting

A few situations where showing examples isn't necessary:

- **You don't have a specific style in mind** -- you're happy with whatever Claude naturally produces
- **You're doing analysis or factual work** -- "summarize this PDF" doesn't need tone examples
- **The task is simple and one-off** -- no need to show examples for a grocery list
- **You're exploring** -- you *want* to see what Claude comes up with on its own

Few-shot prompting is a tool for consistency and style matching. If consistency isn't your goal, skip it and save yourself the setup time.

---

## Try It Yourself

Pick one type of writing you do regularly (emails, Slack messages, social posts, whatever). Grab 2-3 examples of your own that you like. Feed them to Claude with the prompt format above.

Then ask it to write a new one.

The moment it sounds like *you* and not like a robot -- that's the moment you realize why this technique is so powerful.

---

*So now you know how to ask clearly (CRISPE) and how to show Claude your style (few-shot). But what happens when Claude STILL gets it wrong? Don't worry -- it happens to everyone. The next section is about how to fix it without starting over.*
