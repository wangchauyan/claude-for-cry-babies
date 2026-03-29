# 7.6 The Art of "Fake Automation": Wizard of Oz MVP

> *"Behind the curtain of every great product is someone frantically doing things by hand. At least at the beginning."*

---

## The Concept

Imagine this: you build a beautiful landing page for an "AI-Powered Weekly Report Service." Users fill out a form with their work notes. They click submit. 30 minutes later, a polished weekly report appears in their inbox.

They think: "Wow, what amazing automation!"

The reality: their form submission went to *your* email inbox. You copied their notes into Claude. You generated the report. You emailed it back manually.

This is the **Wizard of Oz MVP** -- named after the scene where the "great and powerful" wizard turns out to be a regular person pulling levers behind a curtain.

The front-end looks high-tech. The back-end is you, in your pajamas, running the show by hand.

---

## This Is NOT Cheating

Let's get this out of the way immediately: **this is a legitimate, respected product development strategy.**

It's straight out of the Lean Startup playbook. Some of the biggest companies in the world started this way:

| Company | What Users Thought | What Actually Happened |
|---------|--------------------|----------------------|
| Zappos (early days) | "This online shoe store has amazing inventory!" | Founder went to local shoe stores, bought shoes at retail, and shipped them |
| Concierge (food delivery, pre-DoorDash) | "This app connects me with local restaurants!" | Founders personally called restaurants and drove deliveries |
| Many "AI" startups | "This AI is so smart!" | A team of humans labeled data and answered queries manually |

The point isn't to deceive forever. The point is to **validate demand before investing in automation.** If nobody wants your report when you're generating it by hand, nobody will want it when a computer does it either.

---

## Example: "AI Weekly Report Service"

Let's walk through building a Wizard of Oz MVP for a weekly report service:

### Step 1: Build the Front End

Ask Claude to build a landing page:

> "Create a professional landing page for a service called 'ReportBot' -- an AI-powered weekly report generator. Include:
> - A hero section with a headline: 'Turn Your Messy Notes into a Polished Weekly Report in Minutes'
> - Three benefit icons: 'Save 30 Minutes', 'Professional Quality', 'One-Click Simple'
> - A form with fields: Name, Email, and a large text area for 'Paste Your Work Notes Here'
> - A submit button that says 'Generate My Report'
> - When submitted, show a success message: 'Your report is being generated! Check your email in 30 minutes.'
> - Make it look like a real SaaS product -- professional, trustworthy, modern"

### Step 2: Set Up the "Back End" (It's Just Email)

When someone fills out the form, you need to receive their input. The simplest approach:

> "Modify the form so that when submitted, it sends the form data to a Formspree endpoint (or shows the data in a modal that I can copy). For now, just make the submit button display all the entered information in a popup that I can manually copy."

### Step 3: Your Manual Process

When you get a submission:

1. Open Claude
2. Paste the person's work notes
3. Use your well-crafted weekly report prompt (you have one by now!)
4. Generate the report
5. Email it back to them

Total time per report: 5 minutes of your time. Value to the user: 30 minutes saved.

### Step 4: Validate

After doing this manually for 10-20 people, you'll know:

| Signal | What It Tells You |
|--------|-------------------|
| Nobody submits the form | The problem isn't painful enough (pivot or kill it) |
| People submit but don't open the email | The solution isn't compelling (improve quality) |
| People love it and tell others | Build the automation -- the demand is real |
| People ask for features you didn't expect | Your v2 roadmap writes itself |

---

## When to Use This Strategy

The Wizard of Oz MVP is perfect when:

| Situation | Why WoZ Works |
|-----------|--------------|
| **You're not sure anyone wants this** | Test demand with zero engineering investment |
| **The automation would take weeks to build** | Get feedback in days, not months |
| **You want to understand the workflow** | Doing it manually teaches you the edge cases |
| **You're thinking about charging for it** | Will people actually pay? Find out before you build |

---

## When NOT to Use This Strategy

| Situation | Why It Doesn't Fit |
|-----------|-------------------|
| The thing needs to be instant (sub-second response) | Manual processing is too slow |
| You need to handle 100+ requests per day | You'll burn out |
| The value IS the automation (like a speed test) | The "magic" is the speed; you can't fake that |
| You already know there's demand | Skip validation, go build |

---

## The Beautiful Thing About This Approach

Here's what's quietly brilliant: while you're manually processing requests, you're also **perfecting your Claude prompts**. Every manual report you generate teaches you what works, what people like, and what the ideal output looks like.

By the time you're ready to automate (using tools from Chapter 8 like Zapier, Make, or custom APIs), you'll have a battle-tested process. You won't be automating a guess. You'll be automating a proven workflow.

That's not cheating. That's being smart.

---

*You've built three MVPs and learned a sneaky product strategy. Now there's one thing left: getting your creations in front of actual humans. Let's talk about sharing your work.*
