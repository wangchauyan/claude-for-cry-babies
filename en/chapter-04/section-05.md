# 4.5 Full Workflow: From Raw Data to Polished Deck

> *"My VP asked for a quarterly report by tomorrow morning. I had it done by lunch. She thinks I hired an intern. I kind of did."*

---

This section ties everything together. We're going to walk through a real-world scenario from start to finish: a Marketing PM who needs to prepare a quarterly report by tomorrow, using multiple file types and all the techniques from this chapter.

This is where Claude stops being a tool and starts being a workflow.

## The Scenario

**You:** Marketing PM at a mid-size company.
**The ask:** Your VP wants a quarterly marketing performance presentation by tomorrow's 10 AM leadership meeting.
**What you have:**
- An Excel file with marketing spend by channel
- A CSV export from Google Analytics with website traffic data
- A screenshot of the Google Ads dashboard showing campaign performance
- A half-finished outline you started last week and abandoned

**What you need:**
- Key insights and trends
- Supporting charts
- An executive summary / opening statement
- Talking points for Q&A

**Time:** It's 3 PM. Let's go.

## Step 1: Analyze the Excel (Marketing Spend)

Upload the Excel file:

```
I'm preparing a quarterly marketing report for tomorrow's
leadership meeting. This Excel file contains our marketing
spend by channel for Q3 2025 (July, August, September).

Please analyze:
1. Total spend per channel and per month
2. Which channel got the most investment?
3. Month-over-month changes: are we spending more or less
   on any channel?
4. Calculate cost efficiency if there's any conversion
   or lead data in here
5. Flag anything that looks unusual or worth calling out

Keep your analysis crisp -- I'll be turning this into
presentation slides.
```

**What you get:** A structured breakdown of spend patterns, trends, and notable data points. Save the key findings mentally (or copy them to a note).

## Step 2: Analyze the CSV (Website Traffic)

Upload the Google Analytics CSV:

```
Same quarterly report. This CSV is our website traffic data
for Q3 2025 from Google Analytics.

Please analyze:
1. Monthly unique visitors and page views trend
2. Top traffic sources (organic, paid, social, direct, referral)
3. Which source grew the most vs. Q2 (if you can infer
   from the trend)?
4. Bounce rate trends -- are visitors engaging or leaving?
5. Any correlation between traffic spikes and specific dates
   (possible campaign effects)?

Also, please use code execution to create two charts:
- A stacked bar chart showing traffic sources by month
- A line chart showing bounce rate trend over the quarter

Make both charts presentation-quality: large, clear labels,
professional color scheme.
```

**What you get:** Traffic analysis plus two downloadable charts you can drop directly into slides.

## Step 3: Interpret the Screenshot (Google Ads Dashboard)

Upload the Google Ads dashboard screenshot:

```
Same report. This is a screenshot of our Google Ads dashboard
for Q3 2025.

Please:
1. Read all visible metrics and summarize them
2. How is our ad spend efficiency (CPC, CPA, ROAS if visible)?
3. Which campaigns are performing best and worst?
4. Compare what you see here with the overall marketing spend
   data from Step 1 -- does ad performance justify the spend?
5. Any red flags I should address proactively before
   someone asks about them in the meeting?
```

**What you get:** Cross-referenced insights. Claude remembers the spend data from Step 1 (because it's the same conversation) and connects the dots. This kind of cross-file analysis is incredibly powerful and would take you hours manually.

## Step 4: Combine Into a Presentation Package

Now for the grand finale:

```
Perfect. You now have data from all three sources. Let's
build the presentation:

1. PRESENTATION OUTLINE
   Create a slide-by-slide outline (8-10 slides) for a
   15-minute quarterly marketing review. Include what goes
   on each slide.

2. OPENING STATEMENT
   Write a 2-minute opening statement I can deliver to set
   the tone. Hit the highlights, be confident but honest
   about challenges. Sound like a senior marketing leader,
   not a report-reader.

3. KEY VISUALS NEEDED
   List the 4-5 most important charts/visuals I should include,
   and generate any you can as Artifacts or code execution charts.

4. EXECUTIVE SUMMARY
   One paragraph (max 5 sentences) that captures the quarter.
   This goes on Slide 2 and in the email when I send the deck.

5. Q&A PREP
   Predict the 5 most likely questions from leadership and
   draft concise, data-backed answers for each. Specifically
   anticipate:
   - "Why did costs go up?"
   - "What's the ROI?"
   - "What should we cut?"
```

**What you get:** A complete presentation package. Outline, opening remarks, visuals, summary, and Q&A prep. You went from "three raw files and panic" to "ready to present" in about an hour.

## The Magic of Same-Conversation Context

Notice something crucial about this workflow: **everything happened in one conversation.** When you asked Claude to combine insights in Step 4, it remembered:

- The marketing spend breakdown from Step 1
- The traffic analysis and charts from Step 2
- The Google Ads interpretation from Step 3

This is why single-conversation workflows are so powerful. Claude builds context as you go. Each step enriches the next. By Step 4, Claude understands your entire data landscape and can make connections you might have missed.

**Pro tip:** Don't start a new conversation between steps. Keep everything in one thread.

## The Running Project: Weekly Report Generator v0.4

Time for another upgrade. Your Weekly Report Generator can now leverage file analysis:

```
I want to add a new feature to my Weekly Report Generator
concept. Here's the idea:

Instead of manually typing what I accomplished this week,
I want to:
1. Upload a screenshot of my Google Calendar's weekly view
2. Upload a screenshot of my task manager (Todoist/Asana/etc.)
   showing completed items

Claude should then:
1. Read both screenshots
2. Extract completed meetings, events, and tasks
3. Auto-generate the "Key Accomplishments" and "In Progress"
   sections of my weekly report
4. Let me edit/refine before finalizing

Please help me write the prompts I'd use each week for this
workflow. Make them copy-paste ready.
```

**What you get:** A reusable set of prompts that turn your screenshots into weekly report content. Every Friday, instead of staring at a blank text box trying to remember what you did, you screenshot your calendar, upload it to Claude, and get a draft in seconds.

### v0.4 Workflow Summary

```
Friday 4:30 PM:
1. Screenshot Google Calendar (weekly view)
2. Screenshot task manager (completed tasks)
3. Upload both to Claude with the standard prompt
4. Claude extracts accomplishments + in-progress items
5. Review, adjust, and finalize
6. Paste into the v0.3 Artifact for formatting

Total time: 10 minutes instead of 45
Time saved: used for leaving work on time
```

---

## Chapter 4 Recap

| Skill | Where You Learned It | Superpower |
|-------|---------------------|------------|
| Analyzing spreadsheet data | Section 4.1 | Instant insights from any CSV or Excel file |
| Summarizing long documents | Section 4.2 | Read 50 pages in 30 seconds |
| Interpreting images | Section 4.3 | Screenshots become data, sketches become prototypes |
| Running code for analysis | Section 4.4 | Professional charts and file outputs |
| Chaining it all together | Section 4.5 | End-to-end workflows that save hours |

**The big takeaway:** Claude isn't a chatbot that happens to read files. It's a file analyst that happens to chat. When you start uploading your actual work files -- your data, your documents, your screenshots -- that's when Claude goes from "interesting" to "indispensable."

The files you were drowning in? They're now your greatest asset. Because now you have someone who reads them in seconds and tells you what matters.

---

*Chapter 5 is coming, and it's about the moment every cry baby dreads: when things go wrong. But here's a spoiler -- errors aren't the end of the world. They're actually the beginning of getting better.*
