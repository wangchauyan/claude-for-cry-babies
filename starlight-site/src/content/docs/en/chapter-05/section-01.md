---
title: "5.1 Three Types of Errors (Non-Engineer Edition)"
---


> *"I don't know what went wrong, but something is definitely wrong. Do I need to learn to read the Matrix now?"*

---

No. You don't. You just need to learn to recognize three patterns. That's it. Three. If you can tell the difference between "the stove won't turn on," "the stove is on fire," and "the stove made soup instead of pasta," you already have the skills.

Let's meet our three troublemakers.

---

## Type 1: The Silent Treatment

**What it looks like:** Everything *appears* fine. The page loads. The colors are right. The layout looks great. But when you click a button... nothing happens. The form submits into the void. The dropdown just sits there, decoratively.

**Plain English translation:** Claude built you a beautiful car with no engine. The body is gorgeous. The paint is flawless. You just can't drive it anywhere.

**Why it happens:** Claude generated the visual structure (HTML/CSS) but forgot to wire up the logic (JavaScript). It's like writing a restaurant menu without hiring a chef -- everything looks delicious, but nobody's cooking.

**How to spot it:**
- Buttons don't respond when clicked
- Forms don't submit or validate
- Dropdowns open but selecting something has no effect
- "Calculate" buttons calculate absolutely nothing
- The page is basically a very convincing screenshot of an app

**Real example:**
You asked Claude to build a tip calculator. It made a beautiful form with fields for "Bill Amount" and "Tip Percentage" and a big green "Calculate" button. You type in $50 and 20%, hit Calculate, and... the Total field stays empty. The button does its best impression of a decorative element.

---

## Type 2: The Explosion

**What it looks like:** The screen is full of red text, angry warnings, or the entire page is blank/white with cryptic messages. Something clearly broke, and it's not being subtle about it.

**Plain English translation:** This is a syntax error -- Claude made a typo. Not a human typo like "teh" instead of "the," but a code typo. Maybe a missing parenthesis, an extra comma, or a misspelled function name. One tiny character out of place, and the whole thing refuses to work. Like how one wrong digit in a phone number connects you to a stranger in Ohio.

**How to spot it:**
- Red error text on screen (sometimes in a scary-looking box)
- A completely blank/white page where your app should be
- The word "Error," "undefined," "null," or "unexpected token" appears
- Browser console shows red warnings (don't worry, you don't need to check this)
- Claude's preview panel says "Something went wrong"

**Real example:**
You asked Claude to add a dark mode toggle. The preview suddenly shows nothing but a white screen and a tiny red message: `SyntaxError: Unexpected token '<'`. It looks terrifying, but it's literally just a misplaced character. Like Claude sneezed while typing.

---

## Type 3: The Confident Wrong Answer

**What it looks like:** No errors. No blank screens. Everything works. The buttons click. The forms submit. There's just one small problem: **it's doing the wrong thing.**

**Plain English translation:** Claude understood your words but not your intent. You asked for a "sales dashboard" and got a dashboard that shows weather data. It works perfectly -- it's just perfectly wrong.

**Why it happens:** Your instructions were ambiguous, or Claude made assumptions that happened to be wrong. This is the trickiest type because there's nothing technically broken -- the disconnect is between what you wanted and what Claude thought you wanted.

**How to spot it:**
- The calculation gives wrong results
- The layout is different from what you described
- Features are missing or extra features were added that you didn't ask for
- The tone or style is completely off
- It does something when you click, just... not what you expected

**Real example:**
You asked for a "list sorted by priority" and Claude sorted it alphabetically. Technically sorted! Just not by priority. Claude assumed "priority" meant alphabetical order because you didn't define what priority means in your context.

---

## The Decision Tree: What Kind of Error Do I Have?

When something goes wrong, follow this flowchart:

```
START: Something isn't right
  |
  v
Does the page load without red errors?
  |
  |-- NO --> Type 2: The Explosion
  |          Action: Screenshot the red text.
  |          Send it to Claude with "Fix this error."
  |
  |-- YES
      |
      v
  Do buttons/forms/interactions work when you click them?
      |
      |-- NO --> Type 1: The Silent Treatment
      |          Action: Tell Claude which specific button/feature
      |          isn't responding. Say "The [X] button doesn't do
      |          anything when I click it. Please add the logic."
      |
      |-- YES
          |
          v
      Is the output/behavior what you actually wanted?
          |
          |-- NO --> Type 3: The Confident Wrong Answer
          |          Action: Describe what it DOES do vs what it
          |          SHOULD do. "When I click X, it does Y.
          |          I need it to do Z instead."
          |
          |-- YES --> It works! Go celebrate!
```

---

## Quick Reference Card

| Type | Symptom | Analogy | Fix Approach |
|------|---------|---------|--------------|
| **Silent Treatment** | Looks fine, nothing responds | Beautiful car, no engine | "Add the missing logic for [feature]" |
| **Explosion** | Red errors, blank screen | Typo that breaks everything | Screenshot + "Fix this error" |
| **Confident Wrong** | Works, but wrong output | GPS taking you to the wrong city | "It does X, but I need Y instead" |

The good news? All three types are fixable. And the fix process is almost always the same three steps, which we'll cover next.

---

*Now that you can diagnose the problem, let's learn the universal cure. It's simpler than you think.*
