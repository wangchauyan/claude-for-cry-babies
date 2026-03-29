# 3.4 Project 2: Personal Card Website

> *"I told an AI what I wanted my website to look like. Thirty seconds later, I had one. The web developers in my life are going to be so annoyed with me."*

---

This project is a crowd-pleaser. You're going to build a **personal card website** -- think of it as a digital business card that looks like it was designed by someone who charges $150/hour. Dark theme, hover effects, the works.

But this project isn't just about looking cool (though you will). It's about learning a crucial skill: **how to describe visual design in words**.

## The Full Prompt

Copy this into Claude:

```
Create a personal card website as an Artifact with the following design:

Layout & Theme:
- Dark theme with a near-black background (#1a1a2e) and white/light text
- A single centered card (max-width 400px) with rounded corners and a
  subtle glow effect (soft purple or blue shadow)
- The card should float in the center of the page

Card Content (top to bottom):
1. A circular avatar placeholder (120px diameter) with a gradient border
   (purple to blue). Use a generic user silhouette icon as placeholder
2. Name: "Your Name Here" in large, bold text
3. Title/tagline: "Product Manager | Coffee Enthusiast | Cat Person"
   in smaller, muted text
4. A thin horizontal divider line
5. A row of 4 contact icon buttons (horizontally centered):
   - Email (envelope icon)
   - LinkedIn (LinkedIn logo)
   - Twitter/X (X logo)
   - GitHub (GitHub logo)
   Use simple SVG icons or Unicode characters for the icons

Interactivity & Effects:
- Each contact button should have a hover effect:
  scale up slightly (1.15x) and change to a brand-appropriate color
  (LinkedIn blue, Twitter/X black-to-white, etc.)
- The entire card should have a very subtle floating animation
  (gentle up-and-down movement, like it's breathing)
- Add a smooth entrance animation when the page loads:
  the card should fade in and slide up slightly

Responsive:
- On mobile (screens under 480px), the card should take up more
  width (90% of screen) and the text sizes should adjust
```

**What you should see:** A gorgeous dark-themed card floating in the center of the page. It gently bobs up and down. The icons light up when you hover over them. It faded in when the page loaded. Professional. Polished. Yours.

## Why This Example Matters

This project is a masterclass in **describing visual effects**. Let's look at the techniques used:

### Technique 1: Describing Colors Without Being a Designer

You don't need to know color theory. Just use this pattern:

| What You Want | How to Describe It |
|--------------|-------------------|
| A specific color | Hex code: "#1a1a2e" |
| A vague mood | "Dark and moody", "Warm and inviting", "Clean and clinical" |
| A gradient | "Gradient from purple to blue" |
| A glow | "Soft purple shadow around the edges" |
| Muted text | "Smaller, muted text" or "gray text, not full white" |

### Technique 2: Describing Animations Without Being a Developer

Notice how we described three different animations:

| Animation | Description Used | What We Didn't Say |
|----------|-----------------|-------------------|
| Hover effect | "Scale up slightly (1.15x) and change color" | `transform: scale(1.15)` |
| Floating card | "Gentle up-and-down movement, like it's breathing" | `@keyframes float { ... }` |
| Entrance | "Fade in and slide up slightly" | `opacity: 0 → 1; translateY(20px → 0)` |

The key? **Describe the feeling or physical metaphor**, not the technical implementation. "Like it's breathing" tells Claude everything it needs to know.

### Technique 3: Describing Layout Without Knowing CSS

| What You Want | How to Say It |
|--------------|--------------|
| Centered on page | "Float in the center of the page" |
| Max width | "Max-width 400px" |
| Items in a row | "A row of 4 buttons, horizontally centered" |
| Items in a column | "Top to bottom" or "stacked vertically" |
| Spacing | "Some breathing room between sections" |
| Card look | "Rounded corners and a subtle shadow" |

## How to Save Your Work

Your gorgeous card exists inside Claude's Artifact panel. But what if you want to keep it? Here are your options:

### Option 1: Screenshot It

The simplest way. Just take a screenshot.
- **Mac**: Cmd + Shift + 4, then drag to select
- **Windows**: Win + Shift + S
- **Chrome extension**: GoFullPage for full-page screenshots

Best for: Showing someone what it looks like. Portfolio. Social media bragging.

### Option 2: Copy the Code

In the Artifact panel, you'll see a **copy button** (usually in the top-right corner of the artifact). Click it to copy all the code.

Then you can:
- Paste it into a `.html` file on your computer
- Open that file in any web browser
- It works! Locally, at least

Best for: Keeping a working copy. Tweaking later. Sending to a developer friend.

### Option 3: Use Claude's Share Feature

Claude lets you share entire conversations (including Artifacts):
1. Click the **Share** button in your conversation
2. Copy the generated link
3. Anyone with the link can see your conversation and the Artifact

Best for: Sharing with colleagues. Getting feedback. Showing off (no shame).

### Option 4: Deploy It (Preview for Later Chapters)

If you want your card to actually live on the internet with a real URL, that requires a hosting step. We'll cover free deployment options in **Chapter 7**. For now, just know it's possible and not that hard.

## Customization Challenges

Try these follow-up prompts to make the card truly yours:

| Challenge | Follow-Up Prompt |
|-----------|-----------------|
| Add a dark/light mode toggle | "Add a toggle switch in the top-right corner that switches between dark and light themes with a smooth transition" |
| Add a QR code | "Add a small QR code at the bottom of the card that links to 'https://example.com'" |
| Add a typing effect | "Make the tagline appear with a typewriter effect when the page loads" |
| Change the vibe | "Redesign this card with a warm, earthy tone -- cream backgrounds, brown accents, serif fonts" |
| Add music (why not?) | "Add a small play/pause button that toggles a looping ambient background sound" |

---

*You now have a personal card that looks like it cost money to make. Feel free to replace "Your Name Here" with your actual name. You've earned it.*
