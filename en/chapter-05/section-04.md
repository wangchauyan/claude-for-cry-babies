# 5.4 Chain of Thought Guidance

> *"You wouldn't let a contractor start swinging a sledgehammer before seeing the blueprint. Same energy."*

---

So far, we've talked about fixing errors after they happen. But what if you could prevent most errors from happening in the first place?

Enter **Chain of Thought** -- a fancy term for a very simple idea: **make Claude tell you its plan before it starts building.**

---

## The Home Renovation Analogy

Imagine you're renovating your kitchen. You have two types of contractors:

**Contractor A (No Plan):**
You say "I want a modern kitchen." They immediately grab a sledgehammer, knock down a wall, rip out the cabinets, and start installing things. Three hours later, they proudly show you a kitchen with the sink where the stove should be and no counter space. "But you said modern!"

**Contractor B (Shows Blueprint First):**
You say "I want a modern kitchen." They pull out a notepad and say: "Great. Let me make sure I understand. I'm thinking: keep the current layout but replace the countertops with quartz, add an island with bar seating in the center, move the fridge to the left wall for better flow, and install pendant lights above the island. Does that match your vision, or would you adjust anything?"

You say "Actually, skip the island -- the kitchen is too small." They nod and adjust the plan BEFORE picking up a single tool.

Contractor B is Claude with Chain of Thought. Same AI, same skills -- you just asked it to show you the blueprint first.

---

## How to Use It

The magic sentence:

```
Before writing any code, tell me your plan first. Explain what
you're going to build, how you'll structure it, and what each
part does. Wait for my confirmation before you start coding.
```

That's it. One sentence transforms Claude from "eager sledgehammer contractor" to "thoughtful architect."

---

## Full Example: Building a Currency Converter

### Without Chain of Thought:

**You:** "Build me a currency converter."

**Claude:** *immediately produces 200 lines of code with a dropdown for 3 currencies, a hardcoded exchange rate, no error handling, and a design that looks like it's from 2004.*

You stare at it. This isn't what you wanted. But Claude already built the whole thing, so now you're in fix mode, patching one problem after another.

### With Chain of Thought:

**You:**
```
I want to build a currency converter. Before writing any code,
tell me your plan first. What features will it have? How will
it be structured? Wait for my OK before coding.
```

**Claude's plan:**
> Here's my plan for the currency converter:
>
> **Features:**
> 1. Two dropdown menus (From currency, To currency)
> 2. An input field for the amount
> 3. A "Convert" button
> 4. Display area for the result
> 5. Support for USD, EUR, GBP, JPY, and TWD
> 6. Swap button to quickly reverse the conversion direction
>
> **Technical approach:**
> - Use hardcoded exchange rates (since we can't call a live API in an Artifact)
> - Rates will be relative to USD as base currency
> - Input validation to handle non-numeric entries
> - Responsive design that works on mobile
>
> **Layout:**
> - Clean card-style design, centered on page
> - From/To selectors side by side
> - Big, clear result display below
>
> Shall I proceed with this plan, or would you like to adjust anything?

**You:**
```
Good plan, but a few changes:
- Add CAD and AUD to the currency list
- I don't need the swap button, keep it simple
- Make the conversion happen in real-time as I type,
  no need for a "Convert" button
- Use a dark theme
```

**Claude:** *Now builds exactly what you want, on the first try.*

See the difference? You caught three mismatches (missing currencies, unnecessary button, wrong interaction model) BEFORE any code was written. No errors to debug. No "fix this" loops. Just a clean build.

---

## When to Use Chain of Thought

Not every task needs this approach. Here's a guide:

| Situation | Use Chain of Thought? | Why |
|-----------|----------------------|-----|
| Complex feature with multiple parts | **Yes** | Too many things can go wrong |
| Feature you have a specific vision for | **Yes** | Claude's default assumptions may differ from yours |
| Modifying existing working code | **Yes** | You want to protect what works |
| Simple text change or color tweak | No | Overkill for tiny changes |
| Adding a single well-defined element | No | "Add a blue button labeled Submit" is clear enough |
| You're exploring and don't care about specifics | No | Let Claude surprise you |

**Rule of thumb:** If your request is more than two sentences, ask for a plan first.

---

## Advanced: The Checkpoint Pattern

For bigger projects, you can extend Chain of Thought into checkpoints -- stopping points where you review progress before moving on:

```
Let's build this in phases. After each phase, show me what you've
built and wait for my approval before moving to the next phase.

Phase 1: Just the layout and visual design (no functionality)
Phase 2: Add the form inputs and validation
Phase 3: Add the calculation logic
Phase 4: Add the export/save feature

Start with Phase 1 only.
```

This is like building a house: foundation first, then walls, then roof, then interior. You check each stage before moving on, so problems get caught early when they're cheap to fix -- not after the roof is already on.

---

## The Prevention Mindset

Let's compare the two approaches side by side:

| | Fix-After Approach | Prevent-First Approach |
|-|-------------------|----------------------|
| **Time to first output** | Fast (Claude starts immediately) | Slightly slower (plan review first) |
| **Time to correct output** | Slow (multiple fix rounds) | Fast (usually first build is close) |
| **Frustration level** | High (things keep breaking) | Low (expectations are aligned early) |
| **Best for** | Simple, low-stakes tasks | Complex, specific features |
| **Feels like** | Trial and error | Collaboration |

The irony? The approach that feels slower (asking for a plan first) is almost always faster in total time. Those 2 minutes reviewing a plan save you 20 minutes of debugging.

---

## Copy-Paste Chain of Thought Prompt

Here's your ready-to-use prompt. Modify the bracketed sections:

```
I want to build [describe the feature/tool].

Before writing any code, please:
1. List the features you plan to include
2. Describe the layout/design approach
3. Mention any technical decisions you're making
4. Note any assumptions you're making about my requirements

Wait for my feedback before starting to code.
```

---

*Prevention beats cure. But sometimes, despite your best planning, things still go sideways. When that happens repeatedly, there's one more skill to learn: knowing when to start over.*
