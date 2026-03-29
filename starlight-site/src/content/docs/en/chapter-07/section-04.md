---
title: "7.4 MVP Project B: Team Lunch Decider"
---


> *"The daily 'where should we eat?' debate has destroyed more team productivity than any software bug in history."*

---

## What We're Building

A fun, animated lunch decision tool that:
- Lets you add restaurants to a list
- Tags each restaurant by cuisine type
- Lets you filter out cuisines (someone's tired of pizza -- we get it)
- Spins through options with a slot-machine animation
- Lands on a winner with a funny, over-the-top recommendation message

This isn't just a random picker. It's a random picker with *personality*.

---

## The Build Prompt

> **Create a fun "Team Lunch Decider" tool as an Artifact with these features:**
>
> 1. **Restaurant Management:**
>    - A form to add restaurants with two fields: restaurant name and cuisine tag (dropdown with options: Chinese, Japanese, Mexican, Italian, American, Thai, Indian, Korean, Healthy, Fast Food, Other)
>    - An "Add" button that adds the restaurant to a visual list
>    - Each restaurant in the list shows as a card with the name and a cuisine emoji tag
>    - Each card has a small "X" to remove it
>    - Pre-populate with 8 example restaurants across different cuisines
>
> 2. **Exclusion Filters:**
>    - A row of cuisine type toggle buttons at the top
>    - Clicking a cuisine type crosses it out and excludes those restaurants from the spin
>    - Visual feedback: excluded cuisines appear grayed out with a strikethrough
>
> 3. **The Spin:**
>    - A big, satisfying "DECIDE FOR US!" button
>    - When clicked, a slot-machine style animation cycles through eligible restaurants rapidly, then slows down and lands on one
>    - The animation should last about 3 seconds and feel exciting
>
> 4. **The Result:**
>    - The winning restaurant appears in a big, celebratory display
>    - Include a randomly selected funny recommendation message like:
>      - "The lunch gods have spoken. Do not question their wisdom."
>      - "Destiny says [Restaurant]. Who are you to argue with destiny?"
>      - "After careful analysis of 47 variables including Mercury's position... go to [Restaurant]."
>      - "Your stomach has been heard. The answer is [Restaurant]. You're welcome."
>      - "Plot twist: it was [Restaurant] all along."
>    - A "Spin Again" button for the indecisive
>
> 5. **Design:**
>    - Bright, fun colors -- this is lunch, not a board meeting
>    - Playful font choices and generous emoji usage
>    - The spin animation should feel like a mini celebration
>    - Mobile-friendly so people can use it on their phones in the office kitchen

---

## Why This Is Better Than a Simple Spinner

"Couldn't I just use a random number generator?" Sure. You could also eat plain oatmeal every day. But here's why this tool is actually *better*:

| Feature | Simple Spinner | Your Lunch Decider |
|---------|---------------|-------------------|
| **Adding restaurants** | Manually type a list every time | Saves your list in the session |
| **Cuisine filtering** | Nope | "No Mexican today" -- done |
| **Visual fun** | Watch a circle spin. Thrilling. | Slot-machine animation with suspense |
| **Team buy-in** | "The wheel says Pizza" / "Meh" | "The lunch gods have spoken" / "Haha okay fine" |
| **Personality** | Zero | Through the roof |

The secret ingredient in any tool isn't functionality -- it's **delight**. When something makes people smile, they use it. When they use it, you've built something that matters.

---

## Iteration Direction: 7-Day History

Once your basic version works, try this upgrade:

> "Add a '7-Day History' section at the bottom that shows what was picked each time the spinner was used (in this session). Display it as a simple timeline with the day label and restaurant name. If someone tries to spin and the result matches something from the last 3 picks, automatically re-spin and show a message like 'We had that recently! Let me pick again...' This prevents the dreaded same-restaurant-three-days-in-a-row situation."

### Other Fun Iterations to Try

> "Add a 'Veto' button that appears after a result. If someone vetoes, the restaurant is excluded and it spins again with a dramatic 'VETOED!' animation. Track veto count -- if a restaurant gets vetoed 3 times in a session, add a sad face emoji next to it."

> "Add a 'Budget Mode' toggle. When enabled, only show restaurants tagged as '$' (add a budget field to the restaurant form: $, $$, $$$). Perfect for end-of-month lunches."

---

## The Real Lesson Here

The Interview Prep tool was *useful*. The Lunch Decider is *fun*. Both are valid MVPs. The difference is that fun tools spread faster.

Think about the tools that go viral in offices. They're rarely the most practical ones. They're the ones that make people laugh, that become part of daily rituals, that give teams an excuse to gather around someone's screen for 30 seconds.

When you're picking what to build, don't underestimate the power of joy.

---

*Okay, time for the grand finale. The tool you've been building all book long is about to reach its final form.*
