---
title: "5.2 The Universal Fix: Three Steps"
---


> *"I used to panic when things broke. Now I have a process. I still panic a little, but productively."*

---

Here's the beautiful secret that software engineers don't want you to know (just kidding, they'd love it if more people knew this): **you don't need to understand the error to fix it.** You just need to show it to someone who does.

That someone is Claude.

Think of it like going to a doctor. You don't need to diagnose yourself. You just need to describe your symptoms clearly: "It hurts here when I do this." The doctor (Claude) takes it from there.

Here are the three steps that fix the vast majority of problems:

---

## Step 1: Capture the Evidence

**What to do:** Take a screenshot of the error, or copy the error message text.

**That's it.** You don't need to understand what `TypeError: Cannot read properties of undefined (reading 'map')` means. You don't need to Google it. You don't need to feel bad about not understanding it. Just capture it.

**How to capture:**

| Situation | What to Capture |
|-----------|----------------|
| Red error text on screen | Screenshot the entire error |
| Page is blank/white | Screenshot the blank page + note what should be there |
| Something doesn't work when clicked | Note which specific button/feature is broken |
| Wrong output | Screenshot what you see + describe what you expected |
| Error in Claude's preview panel | Copy the error text from the panel |

**Pro tip:** If you can see an error message, copying the text is better than a screenshot. Claude can read text more reliably than images. But either works.

---

## Step 2: Paste It Back + Describe Expected Behavior

This is the critical step, and it's where most people under-communicate. Don't just say "it's broken." Tell Claude what's happening AND what should be happening instead.

**The Fix Prompt Template:**

```
I'm getting this error:

[Paste error message or describe what's wrong]

What I expected to happen:
[Describe the correct behavior]

What actually happens:
[Describe the incorrect behavior]

Please fix this while keeping all other existing features working.
```

**Real example using the template:**

```
I'm getting this error:

When I click the "Generate Report" button, nothing happens.
No error message appears, the button just doesn't respond.

What I expected to happen:
Clicking "Generate Report" should take my input from the form fields
and display a formatted weekly report in the preview area below.

What actually happens:
The button appears to be clickable (cursor changes on hover) but
clicking it produces no visible result. The preview area stays empty.

Please fix this while keeping all other existing features working.
```

**Why the last line matters:** Without it, Claude might fix the button but accidentally break the form styling, or remove a feature you already had working. That one sentence acts like a safety net: "Fix this, but don't touch anything else."

---

## Step 3: If Three Fixes Fail, Tell Claude to Start Fresh

Sometimes Claude gets stuck in a loop. It fixes one thing, breaks another, fixes that, breaks the first thing again. You'll recognize this when you're on your third or fourth "fix this" message and things are getting worse instead of better.

This isn't your fault. It happens to professional developers too. The code has gotten into a tangled state, and patching it is like trying to untangle headphones -- sometimes it's faster to just get new headphones.

**The Nuclear Option Prompt:**

```
We've been going back and forth trying to fix this, and it's
getting more tangled. Let's take a different approach.

Please rebuild this component from scratch. Don't try to modify
the existing code -- start fresh.

Here's what it should do:
[Redescribe the feature clearly]

Here's what's currently working that must be preserved:
[List features that are fine]
```

**When to use this:**
- You've tried 3+ fix attempts and things are getting worse
- Each fix introduces a new problem
- Claude starts apologizing a lot (a telltale sign it's confused)
- The error messages keep changing with each attempt

**When NOT to use this:**
- The first time something goes wrong (try fixing first!)
- When the issue is simple and clearly identified
- When most of the app works and only one small thing is off

---

## The Three Steps, Visualized

```
Something broke
     |
     v
STEP 1: Capture it
(screenshot / copy error / describe symptom)
     |
     v
STEP 2: Tell Claude
(paste error + expected behavior + "keep other features working")
     |
     v
Did it work?
     |
     |-- YES --> Celebrate! Move on.
     |
     |-- NO --> Try Step 2 again (up to 3 times)
                  |
                  v
              Still broken after 3 tries?
                  |
                  v
              STEP 3: Start fresh
              ("Rebuild from scratch, here's the spec")
```

---

## Common Mistakes When Reporting Errors

| Mistake | Why It's Bad | Better Approach |
|---------|-------------|-----------------|
| "It's broken" | Claude doesn't know what "it" is | "The submit button on the contact form doesn't work" |
| "Fix it" (no context) | Claude might fix the wrong thing | Include the error message + expected behavior |
| "This is wrong" | Vague -- wrong how? | "The chart shows January data but I need March data" |
| Sending only a screenshot | Sometimes not enough context | Screenshot + description of what should happen |
| Fixing 5 things at once | Overwhelms, causes new bugs | Fix one thing at a time |

---

## The Mindset Shift

The biggest hurdle isn't technical. It's emotional. When something breaks, our instinct is to feel like we did something wrong. Like we're the problem.

Flip that script. When something breaks, you're not failing. You're **iterating**. Every professional product you've ever used -- every app on your phone, every website you visit -- went through hundreds or thousands of these fix cycles. You're just doing the same thing, faster.

The fix loop (break -> describe -> fix -> repeat) isn't a sign of failure. It's literally how software gets made. You're not a cry baby anymore. You're a debugger.

Well, you're a cry baby who debugs. And that's beautiful.

---

## A Real Debug Conversation (Step by Step)

Let's walk through an actual scenario so you can see the three-step fix in action.

### The Situation

You asked Claude to build a tip calculator Artifact. It looks great — there's an input field for the bill amount, a slider for tip percentage, and it shows the total. But when you type "50" into the bill field and move the slider to 20%, the total shows "$NaN" instead of "$60.00."

### Step 1: Describe what happened

> **You:** "The tip calculator looks great, but when I enter a bill amount and adjust the tip slider, the total shows 'NaN' instead of the actual number. For example, I typed 50 for the bill and set tip to 20%, and it should show $60 but instead shows $NaN."

### Step 2: Claude responds

> **Claude:** I see the issue — I was treating the input value as a string instead of converting it to a number before doing the math. When JavaScript tries to multiply a string by a number, it produces NaN (Not a Number). Let me fix that.

The Artifact updates. You test it again — type 50, set 20%, and it now correctly shows $60.00.

### Step 3: Verify everything works

> **You:** "The basic calculation works now. But can you test edge cases too? What happens if I leave the bill empty, or type letters instead of numbers?"

> **Claude:** Good catch — I've added input validation. Now if the field is empty, it shows $0.00 instead of NaN. And it only accepts numeric input, so typing letters won't break it.

### What just happened in plain English

You didn't need to understand what "NaN" means. You didn't need to know JavaScript. You just:

1. **Described the problem** in your own words ("it shows NaN instead of $60")
2. **Showed the expected behavior** ("it should show $60")
3. **Asked Claude to think about edge cases** ("what if I type letters?")

That's it. That's debugging. You're basically a QA engineer now. (Don't put that on your LinkedIn just yet, but still.)

### The Debug Phrases That Always Work

Keep these in your back pocket:

| When this happens... | Say this to Claude |
|---|---|
| Something shows wrong data | "When I do [action], it shows [wrong thing]. It should show [right thing]." |
| A button does nothing | "The [button name] button doesn't respond when I click it." |
| The layout looks broken | "The [element] is overlapping with [other element]. Can you fix the spacing?" |
| It worked before but broke after a change | "After you added [feature], the [other feature] stopped working. Can you fix [other feature] without removing [new feature]?" |
| You have no idea what went wrong | "Something is wrong but I'm not sure what. Can you review the code and check for common issues?" |

That last one is your nuclear option. It works surprisingly often.

---

*Now that you have the universal fix, let's walk through three specific real-world errors step by step. Bring your copy-paste fingers.*
