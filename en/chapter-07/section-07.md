# 7.7 How to Share Your Work

> *"A tree falling in a forest makes no sound. A tool sitting on your laptop makes no impact. Share the thing."*

---

## The Sharing Problem

You built something awesome. It works. It looks good. You're proud.

Now what? It's sitting in a Claude Artifact on your screen, and nobody else can see it. That's like painting a masterpiece and keeping it facing the wall.

Here are four ways to share your work, ranked by effort and impressiveness:

---

## Method 1: Screenshot / Screen Recording

**Effort Level:** Minimal | **Impressiveness:** Low-Medium

The fastest way to show someone what you built.

**For screenshots:**
- Take a screenshot of the full Artifact (Cmd+Shift+4 on Mac, Windows+Shift+S on Windows)
- Annotate it if needed (add arrows, highlights)
- Share via Slack, email, group chat, wherever

**For screen recordings:**
- Use your OS's built-in screen recorder (Cmd+Shift+5 on Mac, Xbox Game Bar on Windows)
- Record yourself *using* the tool -- clicking buttons, entering data, showing the output
- Keep it under 60 seconds
- Share as a video file or upload to a platform

**When to use this:** Quick show-and-tell, Slack flex, LinkedIn post, texting your mom proof that you're doing something cool.

---

## Method 2: Share the Claude Conversation Link

**Effort Level:** Minimal | **Impressiveness:** Medium

Claude lets you share entire conversations, including the Artifact.

**How to do it:**
1. In your Claude conversation, click the **Share** button (usually in the top-right area)
2. Choose "Share conversation" or "Create share link"
3. Copy the generated URL
4. Send it to anyone -- they can see your conversation AND interact with the Artifact

**Bonus:** The recipient can see your entire thought process -- your prompts, the iterations, the refinements. It's like a behind-the-scenes documentary of your build process.

**When to use this:** Sharing with friends, colleagues who are curious about your process, or anyone who might want to build something similar.

---

## Method 3: Deploy to Netlify Drop

**Effort Level:** Moderate | **Impressiveness:** High

This is the one that makes people go "wait, you have a WEBSITE?"

**Netlify Drop** lets you drag-and-drop an HTML file onto their platform and get a live URL in seconds. No account required for a temporary site (or create a free account for a permanent one).

**Step-by-step:**

### Step 1: Get the HTML

In Claude, after your Artifact is working:

> "Please give me the complete HTML file for this Artifact. Include all CSS and JavaScript inline in a single HTML file so I can save and open it directly in a browser."

Claude will output a complete HTML file. Copy the entire thing.

### Step 2: Save the File

1. Open a text editor (TextEdit on Mac, Notepad on Windows)
   - **Important on Mac:** In TextEdit, go to Format > Make Plain Text first
2. Paste the HTML code
3. Save as `index.html` (make sure the extension is `.html`, not `.txt`)
4. Create a folder on your desktop called `my-project`
5. Put `index.html` inside that folder

### Step 3: Deploy to Netlify

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your `my-project` folder onto the page
3. Wait 10-30 seconds
4. You'll get a URL like `https://magical-unicorn-abc123.netlify.app`
5. That's it. That's a real website. On the real internet. That you made.

### Step 4: (Optional) Make It Permanent

1. Create a free Netlify account
2. "Claim" the site you just deployed
3. Optionally change the URL to something nicer (like `https://my-weekly-report.netlify.app`)
4. Your site will stay live until you delete it

**When to use this:** Portfolio pieces, sharing with anyone outside your Claude ecosystem, impressive LinkedIn posts, showing your boss.

---

## Method 4: Ask Claude to Make a Demo Presentation

**Effort Level:** Low-Medium | **Impressiveness:** Medium-High

Sometimes you need to *present* your tool rather than just share it. Ask Claude to build you a presentation:

> "Create a 5-slide presentation Artifact about the [tool name] I just built. Include:
> - Slide 1: Title slide with the tool name and a one-sentence description
> - Slide 2: The problem it solves (with a relatable scenario)
> - Slide 3: How it works (3-step process with icons)
> - Slide 4: A screenshot-style mockup of the tool in action
> - Slide 5: What's next / future improvements
> Make it look clean and modern. Include navigation arrows."

You now have a presentation *about* your tool, built by the same AI that built the tool itself. It's tools all the way down.

**When to use this:** Team meetings, show-and-tell sessions, "here's what I built" presentations to management.

---

## Final Product Checklist: Weekly Report Generator v1.0

Before you share your Weekly Report Generator with the world, make sure it passes the final quality check:

| # | Item | Status |
|---|------|--------|
| 1 | All four input fields accept text and update the live preview | |
| 2 | Date range auto-fills with the current week | |
| 3 | Author field is editable and shows in preview | |
| 4 | "Copy as Text" button works and shows confirmation | |
| 5 | "Copy as Markdown" button works and shows confirmation | |
| 6 | "Download as HTML" produces a good-looking HTML file | |
| 7 | Formal/Casual style toggle changes both design and language | |
| 8 | Layout works when browser window is narrow (mobile-ish) | |
| 9 | Empty state looks clean, not broken | |
| 10 | You've tested it with real work notes, not just "test test test" | |
| 11 | You've saved the HTML file as a backup | |
| 12 | You've shared it with at least one person | |

Number 12 isn't optional. The whole point of building something is for it to be used. Share it with a coworker. A friend. Your LinkedIn network. Your cat. Someone.

---

## The Sharing Mindset

Here's an uncomfortable truth: **most people who build things never share them.**

They think it's "not ready." They think it's "not good enough." They think people will judge them. And so their creation sits in a browser tab until the tab gets closed, and the world is slightly less interesting as a result.

Don't be that person. Your MVP is not a masterpiece -- it's a conversation starter. Every piece of feedback you get makes the next version better. Every person who sees it might have an idea you never considered.

Share early. Share often. Share imperfectly.

---

*You've built MVPs. You've learned to share them. Now let's zoom out and talk about what all of this means for your future. Chapter 8 is where we get philosophical -- in the best way.*
