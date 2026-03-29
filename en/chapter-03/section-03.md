# 3.3 Project 1: Mood Selector

> *"My first interactive app, and it literally asks me how I'm feeling. How meta."*

---

This is your first real Artifacts project. We're going to build something small, fun, and satisfying -- a **Mood Selector** that lets you click emoji buttons, changes colors based on your mood, and gives you a little comfort message. It's like a tiny emotional support app, which, given the name of this book, feels appropriate.

More importantly, this project teaches you the **iterative building pattern** -- the single most important skill for working with AI:

1. Get a working base
2. Add one feature at a time
3. Refine until you're happy

Let's go.

## Round 1: The Base -- Emoji Mood Buttons

Copy this entire prompt and paste it into Claude:

```
Create an interactive Mood Selector as an Artifact:

- Display 4 large emoji buttons in a row: 😊 (Happy), 😢 (Sad), 😤 (Angry), 😴 (Tired)
- When I click an emoji, the background color of the page changes:
  - Happy: warm yellow (#FFF9C4)
  - Sad: soft blue (#BBDEFB)
  - Angry: light red (#FFCDD2)
  - Tired: lavender (#E1BEE7)
- Below the emojis, show a comfort message that changes based on the selected mood:
  - Happy: "Glad to hear it! Keep riding that wave 🌊"
  - Sad: "It's okay to feel this way. Tomorrow is a new page 💙"
  - Angry: "Take a deep breath. You've got this 💪"
  - Tired: "Rest is productive too. Be kind to yourself 🌙"
- Start with no mood selected -- neutral white background and a message that says "How are you feeling today?"
- Make it visually centered on the page with a clean, rounded design
- The emoji buttons should be large (at least 48px) and have a subtle hover effect
```

**What you should see:** A clean page with four big emoji buttons. Click one, and the whole vibe of the page changes -- the background color shifts smoothly, and a personalized message appears below. You just built an interactive app. Cry happy tears.

### Why This Prompt Works

Let's break down *why* this prompt is effective:

| Element | Why It Matters |
|---------|---------------|
| "Create an interactive... as an Artifact" | Clearly signals you want a visual, interactive output |
| Specific emojis and labels | No ambiguity about what the buttons should be |
| Hex color codes (#FFF9C4) | Precise colors instead of "some kind of yellow" |
| Exact messages for each mood | Claude doesn't have to guess the tone |
| Default state described | Tells Claude what happens before any interaction |
| Size and style hints | "large (at least 48px)", "centered", "clean, rounded" |

## Round 2: Adding Smooth Transitions

Now let's make it prettier. In the **same conversation**, send this follow-up:

```
Nice! Now add these improvements:

1. When the background color changes, add a smooth fade transition
   (about 0.5 seconds) so it doesn't jump instantly
2. When an emoji is selected, make it slightly larger (scale up to 1.2x)
   with a gentle bounce effect
3. Add a subtle drop shadow behind the selected emoji to make it
   "pop" from the others
4. The comfort message should also fade in when it changes
```

**What this teaches you:** How to describe **animations and transitions** to Claude. Notice we didn't say "add a CSS transition" or "use transform: scale(1.2)." We said things like:

- *"smooth fade transition (about 0.5 seconds)"* -- describes the effect and timing
- *"slightly larger (scale up to 1.2x)"* -- gives a specific amount
- *"gentle bounce effect"* -- describes the feeling
- *"subtle drop shadow"* -- visual effect in plain English

This is the art of describing visual behavior without technical jargon. You're painting with words, and Claude is your brush.

### Timing Descriptions Cheat Sheet

When describing animations to Claude, here's a handy translation guide:

| What You Say | What Claude Understands |
|-------------|----------------------|
| "Instant" | No transition (0ms) |
| "Snappy" / "Quick" | ~150-200ms |
| "Smooth" / "Gentle" | ~300-500ms |
| "Slow" / "Relaxed" | ~700-1000ms |
| "Dramatic" / "Cinematic" | ~1000-2000ms |
| "Bounce" | An overshoot-then-settle effect |
| "Fade" | Opacity change from 0 to 1 or vice versa |
| "Slide" | Movement from one position to another |
| "Pop" / "Spring" | Quick scale-up, sometimes with overshoot |

## Round 3: Adding Mood History

One more round. Send this:

```
Love it! One more feature:

Add a "Mood History" section below the comfort message:
- Every time I click a mood, it logs the emoji and a timestamp
  (like "😊 2:34 PM") to a scrollable list
- Show the most recent mood at the top
- Limit the visible list to the last 10 entries (scrollable if more)
- Add a small "Clear History" button at the bottom of the list
- Style the history section with a slightly different background
  (like a soft gray card) so it feels separate from the mood selector
```

**What this teaches you:** How to describe **incremental features** that build on existing work. Notice we:

- Referenced the existing layout ("below the comfort message")
- Described data behavior ("logs the emoji and a timestamp")
- Set limits ("last 10 entries")
- Added controls ("Clear History button")
- Gave styling direction ("soft gray card")

### The Iterative Pattern

Zoom out for a second. Look at what just happened:

```
Round 1: "Make the basic thing work"          → Core functionality
Round 2: "Make it feel nicer"                  → Polish and animation
Round 3: "Add a new feature that builds on it" → Incremental expansion
```

This is the pattern you'll use for everything. Not just mood selectors -- everything. Dashboards. Tools. Prototypes. Even full apps in later chapters. Master this loop and you'll never feel overwhelmed by complexity again.

**The cry baby mantra:** *Don't try to build the whole house at once. Build one room, make it cozy, then add the next one.*

---

## What If Something Looks Wrong?

Here are common issues and what to say:

| Problem | What to Tell Claude |
|---------|-------------------|
| Emojis are tiny | "Make the emoji buttons at least 64px in size" |
| Colors look harsh | "Use softer, more pastel versions of the colors" |
| Layout is off-center | "Center everything vertically and horizontally on the page" |
| Transitions are jerky | "Make all transitions use ease-in-out timing" |
| History doesn't scroll | "Make the history section a fixed height (200px) with vertical scrolling" |

Remember: you're the creative director. Claude is the production team. Don't be shy about giving notes.

---

*You just built your first interactive app in three rounds of conversation. No code written. No Stack Overflow visited. No tears shed (okay, maybe happy ones). On to the next project.*
