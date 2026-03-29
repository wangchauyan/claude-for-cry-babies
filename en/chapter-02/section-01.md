# 2.1 Why Does Your AI Always Miss the Point?

> *"I said 'make it professional.' It added a stock photo of a handshake. That's... not what I meant."*

---

## The Restaurant Analogy

Imagine you walk into a restaurant and tell the waiter:

**"I want food."**

The waiter would stare at you. Then, being a professional, they'd bring you... something. Maybe a salad. Maybe a steak. Maybe a bowl of soup. It would technically be food. It would not be what you wanted.

Now imagine you say:

**"I'd like the grilled salmon, medium, with the lemon butter sauce on the side. Substitute the fries for roasted vegetables. And could I get sparkling water with lime?"**

Same restaurant. Same kitchen. Wildly different experience.

**This is exactly what happens with AI.**

When you type "write me an email," Claude is the waiter who just heard "I want food." It will bring you *an* email. Whether it's the email you needed is anyone's guess.

---

## Before/After: The Difference Is Dramatic

Let's look at a real example.

### The Rookie Prompt

```
Write a proposal for my boss about remote work.
```

**What Claude produces**: A generic, Wikipedia-style essay about the benefits of remote work. Three paragraphs. No personality. Could have been written by anyone for anyone.

### The Upgraded Prompt

```
Write a one-page proposal for my direct manager (VP of Operations,
data-driven, skeptical of remote work).

Goal: Get approval for a 2-day-per-week remote work pilot program
for our 12-person customer success team.

Include:
- 3 data points showing remote work improves customer satisfaction scores
- Address his likely objection: "How do I know people are actually working?"
- Propose a 90-day trial with clear success metrics
- Tone: respectful but confident. Don't be salesy.
- Length: one page, with bullet points (he hates long paragraphs)
```

**What Claude produces**: A sharp, persuasive proposal that reads like you hired a consultant. It addresses the specific manager's concerns, includes relevant data, and has a clear ask.

Same AI. Same free tier. The difference is entirely in how you asked.

---

## The CRISPE Formula

Okay, so "be more specific" is nice advice, but it's vague. (Ironic, right?) Let's give you an actual framework.

**CRISPE** is a prompt formula that works for almost any task. It stands for:

| Letter | Element | What It Means | Example |
|--------|---------|---------------|---------|
| **C** | Capacity | What role should Claude play? | "You are a senior HR consultant" |
| **R** | Request | What's the specific task? | "Write a job description for a marketing manager" |
| **I** | Insight | What context or background should Claude know? | "We're a 50-person B2B SaaS startup. The role reports to the CMO." |
| **S** | Style | What format or structure should the output have? | "Use bullet points. Keep it under 400 words." |
| **P** | Personality | What tone should it use? | "Professional but approachable. We're not a stuffy corporation." |
| **E** | Experiment | Any constraints or things to avoid? | "Don't list 'ninja' or 'rockstar' in the title. No jargon." |

You don't need to use all six elements every time. But the more of them you include, the better your results.

---

## CRISPE in Action: Full Example

Let's put it all together. Say you need to write a customer apology email.

### Without CRISPE

```
Write an apology email to a customer.
```

*Result: Generic, could apply to literally any company or situation.*

### With CRISPE

```
**Capacity**: You are a customer success manager at a mid-size
e-commerce company that sells premium kitchenware.

**Request**: Write an apology email to a customer whose order
arrived 5 days late and with a damaged item (a ceramic serving bowl).

**Insight**: The customer is a repeat buyer (4th order) and left
an angry review on our website. We want to retain them. We can
offer a full replacement + 20% off next order.

**Style**: Short email (under 200 words). Use a clear structure:
acknowledge the problem, explain what happened (warehouse
backlog, not an excuse), state the remedy, close warmly.

**Personality**: Genuine and human. Not corporate-speak.
Don't over-apologize (it sounds insincere after the 3rd "sorry").

**Experiment**: Don't use the phrase "we value your business"
(it's a cliche). Don't blame the shipping carrier.
```

*Result: A perfectly calibrated apology email that you could send right now.*

---

## You Don't Have to Memorize the Letters

Seriously, don't stress about remembering C-R-I-S-P-E in order. The framework exists to remind you of the *types* of information that make prompts better. In practice, just ask yourself these questions before typing:

1. **Who** should Claude pretend to be?
2. **What** specifically do I want?
3. **What** background does Claude need?
4. **How** should the output look and sound?
5. **What** should it NOT do?

If you answer those five questions in your prompt, you're already in the top 10% of AI users. No exaggeration.

---

## The "Would a Stranger Understand?" Test

Here's a quick gut check for your prompts: **read them as if you're a stranger with no context about your life, job, or situation.**

Would that stranger know:
- Who the output is for?
- What the goal is?
- What "good" looks like?
- What constraints exist?

If not, add more detail. Claude is that stranger. A brilliant, eager-to-help stranger -- but a stranger nonetheless.

---

## Common Prompt Mistakes (And Easy Fixes)

| Mistake | Why It's a Problem | Fix |
|---------|-------------------|-----|
| Too vague | "Help me with my presentation" | Specify: topic, audience, length, format, goal |
| Too many tasks at once | "Write my bio, also analyze this data, also make a website" | One task per conversation (or clearly separate them) |
| No audience specified | "Write a blog post" | "Write a blog post for small business owners who are new to social media marketing" |
| No tone guidance | "Write an announcement" | "Write an announcement, tone: excited but not over-the-top" |
| Assuming context | "Update the thing from last time" | Claude doesn't remember last time. Restate the context. |

---

## Try It Right Now

Take something you've recently asked an AI to do (or wanted to). Rewrite it using CRISPE. You'll immediately see the difference.

Can't think of anything? Try this exercise:

**Original prompt**: "Write a LinkedIn post about my promotion."

**Your CRISPE rewrite**: *(Fill in each element with your actual details. Hint: What's your industry? What role were you promoted to? Are you humble-bragging or genuinely grateful? Do you want engagement bait or something authentic?)*

---

*Now that you have the framework, let's see it applied to five real-world scenarios. Some of these will feel eerily similar to tasks on your own to-do list.*
