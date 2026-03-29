---
title: "Appendix C: FAQ"
---


> *The questions you were too embarrassed to ask. Good news: everyone has them.*

---

## Q1: Can I Use Claude's Output Commercially?

**Short answer:** Yes, with some common sense caveats.

**The details:**

Anthropic's terms of service (as of early 2025) generally grant you ownership of the output Claude generates in response to your prompts. You can use it for:
- Commercial products and services
- Client work
- Internal business tools
- Content you publish under your name
- Products you sell

**Caveats to keep in mind:**

| Situation | Guidance |
|-----------|----------|
| Using output as-is without review | Always review and edit -- you're responsible for accuracy |
| Generating content about real people or brands | Check for factual accuracy and potential defamation issues |
| Creating content for regulated industries (medical, legal, financial) | Have a qualified professional review before publishing |
| Reselling Claude access itself | Not allowed -- you can sell what you build, not access to Claude |

**The golden rule:** You own the output, but you're responsible for it. It's like hiring a ghostwriter -- the words are yours, the liability is yours, the credit is yours, and the obligation to fact-check is yours.

*Always check the current [Terms of Service](https://www.anthropic.com/terms) for the latest policies.*

---

## Q2: Is My Uploaded Data Safe?

**Short answer:** Generally yes, but the details depend on your plan.

| Concern | Free Plan | Pro Plan | Team Plan |
|---------|-----------|----------|-----------|
| **Data used for training?** | May be (opt-out available in settings) | Not by default | Not used |
| **Data stored?** | Temporarily, for conversation purposes | Temporarily | With additional protections |
| **Can Anthropic employees see my data?** | Only in limited safety/abuse review cases | Same | Stricter access controls |
| **Is data encrypted?** | Yes, in transit and at rest | Yes | Yes |

**Practical advice:**

| Sensitivity Level | Recommendation |
|-------------------|---------------|
| Public information (research, general questions) | Any plan is fine |
| Internal work documents | Pro plan + check privacy settings |
| Confidential business data | Team plan or check with your IT department |
| Extremely sensitive (PII, financial records, health data) | Consult your company's data governance policy first |

**The opt-out setting:** On the Free plan, go to Settings > Privacy and toggle off the option that allows your conversations to be used for model improvement. This gives you more control over your data.

---

## Q3: Why Does Claude Refuse Some Requests?

**Short answer:** Safety guardrails. Claude is designed to be helpful, harmless, and honest -- sometimes the "harmless" part means saying no.

**Common refusal categories:**

| Request Type | Why Claude Refuses | What to Do Instead |
|-------------|-------------------|-------------------|
| Generating harmful content | Safety by design | Rephrase with legitimate context |
| Impersonating real people | Legal and ethical concerns | Use fictional characters or ask for general advice |
| Medical/legal/financial advice as definitive | Liability and accuracy concerns | Ask Claude to explain concepts, then consult a professional |
| Creating login/authentication systems | Security risk if done poorly | Use established auth services (Auth0, Firebase Auth) |
| Highly specific personal information about real people | Privacy protection | Use publicly available information instead |

**If Claude refuses something legitimate:**

Sometimes Claude is overly cautious. If your request is genuinely harmless but Claude refuses:
1. Explain the context -- "This is for a fiction writing project" or "This is for educational purposes"
2. Be more specific about your intent
3. Rephrase to make the legitimate purpose clearer

Claude isn't judging you. It's erring on the side of caution. A little context usually resolves the issue.

---

## Q4: Can Artifacts Be Deployed as a Real Website?

**Short answer:** Yes, with a few extra steps.

**The process:**

| Step | Action | Difficulty |
|------|--------|------------|
| 1 | Build your Artifact in Claude | Easy (you've done this!) |
| 2 | Ask Claude: "Give me the complete HTML file with all CSS and JS inline" | Easy |
| 3 | Save the code as `index.html` | Easy |
| 4 | Test by opening the file in your browser | Easy |
| 5 | Deploy to Netlify Drop (drag and drop) | Easy |
| 6 | Done -- you have a live URL | You're a web developer now |

**Limitations to know about:**

| Works | Doesn't Work |
|-------|-------------|
| Static HTML/CSS/JS pages | Server-side functionality |
| Client-side interactions (buttons, forms, animations) | Database connections |
| Single-page applications | User authentication |
| Anything that runs in the browser | Sending emails, processing payments |

**For more complex deployments** (multi-page sites, databases, etc.), you'd need tools like Vercel, Render, or a more traditional hosting service. But for the kind of tools you've built in this book, Netlify Drop is perfect.

See Section 7.7 for the full step-by-step deployment guide.

---

## Q5: Claude vs. ChatGPT -- What's the Difference?

**Short answer:** They're both excellent but have different strengths.

| Feature | Claude | ChatGPT |
|---------|--------|---------|
| **Made by** | Anthropic | OpenAI |
| **Best at** | Long documents, nuanced writing, careful reasoning, Artifacts | Broad knowledge, plugins/GPTs, image generation |
| **Artifacts (live preview)** | Yes -- built-in, excellent | Code Interpreter (different approach) |
| **Writing quality** | Tends to be more natural and less "AI-sounding" | Good but sometimes more formulaic |
| **Following complex instructions** | Excellent -- handles long, detailed prompts well | Good, occasionally drifts on very long prompts |
| **Image generation** | No (as of early 2025) | Yes (DALL-E integration) |
| **Plugin/extension ecosystem** | Projects with Custom Instructions | Large GPT Store with third-party plugins |
| **Safety approach** | "Constitutional AI" -- tends to be careful and thoughtful | RLHF-based -- similar safety, different style |
| **Context window** | Very large -- handles long documents well | Large, varies by model version |
| **Pricing** | Free / $20 Pro / $25 Team | Free / $20 Plus / $25 Team |

**Bottom line:** This book uses Claude because its Artifacts feature, writing quality, and ability to handle complex instructions make it ideal for non-developers building tools. ChatGPT is also excellent -- if you already use it, the prompt techniques in this book transfer directly.

---

## Q6: Why Does Quality Drop in Long Conversations?

**Short answer:** Context window limitations.

**What's happening:** Claude has a "context window" -- a maximum amount of text it can consider at once. Think of it as Claude's short-term memory. As your conversation gets longer, the earliest parts start getting pushed out of this memory window.

**Symptoms:**
- Claude "forgets" instructions you gave earlier
- It starts contradicting things it said 20 messages ago
- Code quality drops or it loses track of the project structure
- It asks about things you already told it

**How to mitigate:**

| Strategy | How to Do It |
|----------|-------------|
| **Keep conversations focused** | One topic/project per conversation |
| **Summarize periodically** | "Let me summarize what we've done so far: [summary]. Now let's continue with..." |
| **Start fresh for new tasks** | Don't try to reuse a conversation for unrelated work |
| **Use Projects** | Put persistent context in Custom Instructions instead of repeating it |
| **Front-load key instructions** | Put the most important requirements at the start of your message |

**Rule of thumb:** If a conversation has gone past 30-40 messages, consider starting a new one with a summary of where you are. Think of it as closing a browser tab that has 47 sub-tabs open -- sometimes a fresh start is faster.

---

## Q7: Does Claude Remember Previous Conversations?

**Short answer:** No. Each conversation starts from scratch.

**The exception:** **Projects** (Pro plan and above). When you use Claude Projects, you can set Custom Instructions that persist across conversations within that project. But even then, Claude doesn't remember the *conversations* -- it remembers the *instructions* you set.

| Feature | Remembers Across Conversations? |
|---------|-------------------------------|
| Your messages and Claude's responses | No |
| Custom Instructions in a Project | Yes (they're loaded each time) |
| Files uploaded to a Project | Yes (they stay in the Project) |
| Preferences and writing style | Only if you put them in Custom Instructions |
| Previous Artifacts you built | No (but you can share the code back with Claude) |

**Practical implication:** If you built something great in a conversation and want to modify it later:
1. Save the code (copy the HTML or download it)
2. Start a new conversation
3. Paste the code and say "Here's what I built previously. I want to add [feature]."

It's a minor inconvenience, but it keeps your conversations fresh and prevents the quality degradation from Q6.

---

## Q8: Can I Use Claude for Homework/School Assignments?

**Short answer:** You can, but you shouldn't -- at least not in the way you're thinking.

**The nuance:**

| Usage | Verdict | Why |
|-------|---------|-----|
| "Write my essay for me" | Bad idea | You learn nothing, it's likely against school policy, and professors can often tell |
| "Explain this concept I don't understand" | Great idea | Claude is a patient tutor -- ask it to explain things in different ways until it clicks |
| "Quiz me on this chapter" | Great idea | Use Prompt #18 from Appendix A to generate practice questions |
| "Check my reasoning on this problem" | Good idea | Show your work, ask Claude where your logic breaks down |
| "Help me outline my essay" | Okay with caution | Use Claude to brainstorm structure, then write the content yourself |
| "Proofread my essay" | Totally fine | Like using spell-check -- it's a tool, not a crutch |

**The tutor approach works best:**

> "I'm studying `[topic]` and I don't understand `[specific concept]`. Can you explain it to me step by step? After your explanation, give me a practice problem to make sure I actually get it. If I get it wrong, walk me through where my thinking went off track."

This is genuinely one of the most powerful uses of Claude. It's a tutor that never gets impatient, never judges you for asking "dumb" questions, and is available at 2 AM when you're panic-studying.

**The ethical bottom line:** Use Claude to *learn more*, not to *do less*. The goal of education is to develop your own thinking -- Claude should amplify that process, not replace it.

---

*Still have questions? Start a conversation with Claude and ask. It's surprisingly good at explaining itself.*
