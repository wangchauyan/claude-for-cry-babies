# 6.1 Why Does Every Conversation Feel Like Amnesia?

> *"Claude is brilliant, empathetic, and incredibly helpful. Claude also has the long-term memory of a goldfish on a caffeine crash."*

---

Before we fix the problem, let's understand why it exists. Because once you understand *why* Claude forgets everything, you'll intuitively understand how to work around it.

---

## The Desk Analogy

Imagine Claude's brain is a desk. A physical desk, with a fixed surface area. Every time you send a message, you're placing a piece of paper on that desk. Claude's response? Another piece of paper. Your follow-up? More paper. Claude's reply? Even more paper.

At the start of a conversation, the desk is clean. Plenty of room. Claude can see everything -- your initial question, the context, the examples you provided, the code you shared. All of it is right there on the desk, easy to reference.

But as the conversation goes on, paper piles up. The desk gets crowded. And here's the critical part: **the desk doesn't get bigger.** It has a fixed size.

So what happens when the desk is full and you add more paper? The oldest papers -- the ones from the beginning of your conversation -- start **falling off the edge.** Gone. Claude can't see them anymore. That brilliant context you provided at the start? That critical requirement you mentioned in message #3? Vanished. Swept off the desk by newer messages.

This is why Claude sometimes "forgets" instructions from early in a long conversation. It's not ignoring you. It's not being careless. Those instructions literally aren't on the desk anymore.

---

## The Technical Terms (That You Don't Need to Remember)

If you encounter these terms in the wild, here's what they mean:

**Context Window:** The desk. The fixed amount of information Claude can "see" at any given moment. Currently, Claude's desk is pretty big (roughly equivalent to a 200-page book), but it's still finite.

**Tokens:** The individual pieces of paper. But not one token per message -- more like one token per word (roughly). So a 500-word message uses about 500 tokens. Your messages, Claude's responses, system instructions -- they all take up space on the desk.

| Term | Plain English | Analogy |
|------|--------------|---------|
| Context Window | How much Claude can see right now | The desk surface area |
| Token | A unit of text (roughly one word) | One piece of paper |
| Token Limit | Max desk capacity | The desk is only so big |
| Context Overflow | Too many tokens, old ones lost | Papers falling off the desk |

**Do you need to remember these terms?** No. Honestly, no. They're useful for Googling or reading blog posts, but for daily use, just remember: **desk has a fixed size, old papers fall off.**

---

## Why New Conversations Are Blank Slates

Here's the other thing about the desk: **when you start a new conversation, you get a completely empty desk.**

Not a desk with a few leftover papers from yesterday. Not a desk with sticky notes from your previous chat. A completely bare, clean, nothing-on-it desk.

This means:
- Claude doesn't know your name (unless you tell it again)
- Claude doesn't know your job, company, or industry
- Claude doesn't remember the brilliant report format you developed together last week
- Claude doesn't know your preferences, pet peeves, or writing style
- Claude doesn't remember that you hate pie charts and love bar graphs

Every. Single. Conversation. Starts. From. Zero.

It's like having a brilliant coworker who shows up every morning having been hit with a Men in Black memory-erasing flash.

---

## The Real Problem: You Keep Retyping the Same Context

This amnesia creates a very practical problem: **wasted effort.**

If you use Claude regularly, you've probably noticed yourself typing the same background information over and over:

- "I'm a marketing manager at a B2B SaaS company..."
- "Our company tone is professional but friendly..."
- "The report should follow this format: ..."
- "Remember, we use metric units, not imperial..."
- "My audience is C-level executives who are not technical..."

Every conversation. Every time. You're spending the first 5-10 minutes of every chat just rebuilding context. It's like calling the same doctor every week and having to re-explain your entire medical history from birth. "Well, it all started when I was a baby..."

---

## The Insight: You Need Smarter Organization, Not Longer Conversations

At this point, you might think: "Just make the desk bigger!" And to be fair, context windows are getting bigger over time. But here's the thing -- a bigger desk still gets messy. A bigger desk still loses things. Having a 500-page context window doesn't help if your critical instructions are on page 3 and Claude is paying most attention to page 499.

The real solution isn't a bigger desk. It's **a desk that comes pre-loaded with the right papers every time you sit down.**

Imagine walking into your office and finding your desk already set up with:
- Your company brief (always visible, top of desk)
- Your style preferences (pinned to the corner)
- Examples of your best work (in a folder right there)
- Your current project requirements (front and center)

Every morning. Automatically. No setup required.

That's what **Projects** does. And that's what we're setting up next.

---

## The Fix Is Surprisingly Simple

The solution to Claude's amnesia isn't some complex technical hack. It's three things:

1. **Projects** -- A named workspace that persists across conversations
2. **Uploaded files** -- Reference documents that Claude can always see
3. **Custom Instructions** -- A persistent note that Claude reads at the start of every conversation

Together, they solve the goldfish problem. Claude goes from "Hi, who are you?" to "Hey, welcome back. Are we continuing with the Q2 marketing plan, or starting something new?"

It's the difference between calling a stranger and calling a colleague. Both are helpful, but one already has context.

---

*Let's stop complaining about the amnesia and start fixing it. Next up: setting up your first Project, step by step.*
