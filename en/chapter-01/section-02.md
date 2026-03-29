# 1.2 Why Claude?

> *"Choosing an AI assistant is like choosing a coworker. You want someone smart, reliable, and who doesn't randomly make stuff up. Well... mostly doesn't."*

---

## The Honest Landscape

Let's address the elephant in the room: there are a *lot* of AI chatbots out there. ChatGPT, Gemini, Copilot, Claude, and a dozen others launching every month. Why are we building this whole book around Claude?

Short answer: **Claude is the best fit for non-developers who want to build things.**

Long answer: keep reading.

---

## The Big Three, Honestly Compared

Here's a comparison that won't get us invited to any company's holiday party, because we're going to be honest about all of them.

| Feature | Claude (Anthropic) | ChatGPT (OpenAI) | Gemini (Google) |
|---------|-------------------|-------------------|-----------------|
| **Conversation quality** | Nuanced, follows complex instructions well | Strong, sometimes verbose | Good, but can feel robotic |
| **Instant preview (Artifacts)** | Yes -- live HTML/code/docs in chat | No built-in equivalent (needs plugins or Canvas) | No equivalent |
| **Workspace (Projects)** | Yes -- persistent instructions + knowledge base | Custom GPTs (different approach) | Gems (limited) |
| **File handling** | Excellent (Excel, CSV, PDF, images) | Excellent | Good |
| **Writing tone** | Natural, less "AI-sounding" | Can feel formulaic without careful prompting | Often stiff |
| **Code generation** | Excellent, especially with Artifacts | Excellent | Good |
| **Free tier** | Generous daily limits | Limited GPT-4o access | Generous |
| **Ecosystem** | Growing | Massive (plugins, GPT Store) | Google integration |

> **Disclaimer**: This comparison reflects the state of things as of early 2025. AI tools evolve fast. By the time you read this, some details may have changed. The core reasons we chose Claude, though, are structural -- not just feature-by-feature.

---

## Claude's Killer Features (For Non-Developers)

### 1. Artifacts: See It While You Build It

This is the big one. When you ask Claude to create something -- a webpage, a chart, a document, an interactive tool -- it doesn't just dump code at you and say "good luck." It creates an **Artifact**: a live, interactive preview right in the chat window.

Imagine asking "build me a countdown timer for my product launch" and immediately seeing a working countdown timer next to the conversation. You can click it. It works. No setup required.

For non-developers, this is a game-changer. You can see what you're building *as you build it*, just by talking.

### 2. Projects: Your AI Workspace

Claude's Projects feature lets you create dedicated workspaces with:
- **Custom instructions** that persist across conversations ("always write in my brand voice")
- **A knowledge base** where you upload documents that Claude can reference
- **Multiple conversations** all sharing the same context

This means you don't have to re-explain your entire life story every time you start a new chat. Set it up once, and Claude remembers your preferences, your brand guidelines, your data -- across every conversation in that project.

### 3. File Handling That Actually Works

Upload an Excel spreadsheet? Claude will analyze it, find patterns, and create charts. Upload a 40-page PDF? Claude will summarize it and answer questions about it. Upload a screenshot of an error message? Claude will tell you what went wrong.

This isn't unique to Claude (ChatGPT does this well too), but Claude's analysis tends to be thorough without being overwhelming.

### 4. It Sounds Like a Person, Not a Robot

This one's subjective, but important. Claude's default writing tone is noticeably more natural than most AI tools. Less "As an AI language model, I'd be happy to help you with that!" and more "Here's what I'd suggest."

When you're having long conversations to iteratively build something, this matters more than you'd think. It's the difference between collaborating with a colleague and filling out a form.

---

## The Honest Limitations

No tool is perfect, and we'd be doing you a disservice to pretend otherwise. Here's what Claude *can't* do or struggles with:

### Knowledge Cutoff
Claude's training data has a cutoff date. It doesn't know about events, products, or updates that happened after that date. If you ask about yesterday's news, it'll tell you it doesn't know -- or worse, it might guess (see next point).

> **Update**: Claude now has a web search feature that can look up current information when needed. But its base knowledge still has a cutoff, so always verify time-sensitive information.

### Hallucinations (a.k.a. Confident Nonsense)
Sometimes Claude will state something as fact that is completely made up. It won't hesitate. It won't caveat. It will look you dead in the eye (metaphorically) and tell you a fake statistic with the confidence of a CEO at an earnings call.

This happens with all AI models. The fix? **Always verify important facts.** We'll cover strategies for this throughout the book.

### Long Conversation Memory Decay
Start a conversation, and Claude remembers everything perfectly. Keep talking for 50+ messages, and it starts... forgetting. Earlier instructions get fuzzy. Context gets lost. It's like a friend who's had one too many drinks -- still smart, but increasingly unreliable about what you said 30 minutes ago.

**Fix:** Break long tasks into shorter conversations, or use Projects to maintain persistent context.

### Can't Operate Your Computer
Claude lives in a browser window. It can't click buttons on your screen, send emails on your behalf, open apps, or interact with your phone. It can *write* an email for you, but you have to copy-paste it yourself.

> **Note**: Anthropic has released "Computer Use" capabilities for developers, but that's a different product aimed at technical users. For our purposes, Claude stays in its browser lane.

---

## So Why Not Just Use ChatGPT?

Fair question. ChatGPT is great. If you're already using it and happy, you don't *need* to switch.

But if you're starting from scratch and your goal is to **build interactive things without coding knowledge**, Claude's Artifacts feature gives it a significant edge. The ability to see a live preview of what you're creating -- and iterate on it through conversation -- is exactly the workflow this book teaches.

Think of it this way:
- **ChatGPT** is like having a brilliant consultant who writes detailed memos
- **Claude** is like having a brilliant consultant who writes memos *and* builds working prototypes while you watch

Both are valuable. For this book's purposes, Claude is the better fit.

---

## The Bottom Line

| If you want... | Claude is... |
|----------------|--------------|
| To build interactive tools through conversation | Excellent (Artifacts) |
| A persistent AI workspace | Excellent (Projects) |
| Natural-sounding writing | Very good |
| To analyze spreadsheets and documents | Very good |
| Real-time information | Good (with web search) |
| A massive plugin ecosystem | Not the best (ChatGPT wins here) |
| To control your computer with AI | Not the right tool |

We chose Claude not because it's perfect, but because it's the best match for what we're doing: **helping non-developers build real things through conversation.**

Now let's get specific about what "real things" actually means.

---

*Next up: What can Claude actually do? And more importantly, what can't it do? Let's set some realistic expectations before we get our hands dirty.*
