# Appendix A: Prompt Cheat Sheet

> *20 copy-paste prompts for when your brain is too tired to be creative. We don't judge.*

---

## How to Use This Cheat Sheet

Each prompt below is a template. Replace the parts in `[brackets]` with your specific content. The rest you can copy verbatim -- these are battle-tested and optimized for great results.

---

## Writing Prompts

### 1. Professional Email

> Write a professional email to `[recipient/role]` about `[topic]`.
>
> Context: `[Why are you writing? What happened? What do you need?]`
>
> Tone: `[Professional but warm / Formal / Friendly but direct]`
>
> The email should be concise (under 200 words), include a clear ask or next step, and not sound like it was written by AI.

### 2. Social Media Post

> Write a `[LinkedIn / Twitter / Instagram]` post about `[topic]`.
>
> Key message: `[The one thing you want people to take away]`
>
> Tone: `[Professional / Casual / Inspirational / Humorous]`
>
> Include a hook in the first line that makes people stop scrolling. End with a call-to-action: `[ask a question / invite comments / share a link]`. Keep it under `[word count]` words.

### 3. Document Summary

> Summarize the following `[document/article/report]` in three levels of detail:
>
> 1. **One-sentence summary** (for someone who has 5 seconds)
> 2. **One-paragraph summary** (for someone who has 1 minute)
> 3. **Bullet-point breakdown** (for someone who has 5 minutes -- include key data points, main arguments, and action items)
>
> Here's the content:
> `[paste content]`

### 4. Translation with Tone Preservation

> Translate the following text from `[source language]` to `[target language]`.
>
> Important: Preserve the original tone and nuance. This is `[formal business / casual conversation / technical documentation / marketing copy]`. Don't translate literally -- adapt cultural references and idioms to feel natural in the target language.
>
> Text:
> `[paste text]`

---

## Analysis Prompts

### 5. Excel/CSV Data Analysis

> I'm uploading a `[CSV/Excel]` file containing `[brief description of data]`.
>
> Please:
> 1. Summarize the dataset (rows, columns, data types, any obvious issues)
> 2. Identify the top 3 most interesting patterns or insights
> 3. Flag any data quality issues (missing values, outliers, inconsistencies)
> 4. Create a simple visualization of the most important finding
> 5. Suggest 3 questions I should investigate further
>
> Present everything in plain language -- I'm not a data scientist.

### 6. Competitor Analysis

> Analyze `[competitor name/product]` from the perspective of `[my role/company type]`.
>
> Cover:
> - **What they do well** (3-5 strengths)
> - **Where they fall short** (3-5 weaknesses)
> - **Their likely target customer** (demographics, pain points)
> - **What I can learn from them** (actionable takeaways)
> - **How to differentiate** (what could I do that they don't?)
>
> Base this on publicly available information. Be honest, not flattering.

### 7. PDF Document Summary

> I'm uploading a PDF document. It's a `[type: research paper / contract / report / manual]` about `[topic]`.
>
> Please:
> 1. Provide a one-paragraph executive summary
> 2. List the key findings or important sections as bullet points
> 3. Identify any action items or decisions required
> 4. Highlight anything surprising, risky, or that I should pay extra attention to
> 5. Create a quick-reference cheat sheet of the most important information
>
> Write for someone who needs to discuss this document in a meeting tomorrow.

### 8. Meeting Notes to Action Items

> Convert these messy meeting notes into structured output:
>
> `[paste messy notes]`
>
> Format as:
> 1. **Meeting Summary** (3-4 sentences of what was discussed)
> 2. **Key Decisions Made** (bulleted list)
> 3. **Action Items** (table with: Task | Owner | Deadline)
> 4. **Open Questions** (things that still need answers)
> 5. **Next Meeting Agenda** (suggested topics based on what was discussed)

---

## Design / Artifacts Prompts

### 9. Interactive Tool

> Create an interactive `[tool type: calculator / converter / generator / quiz]` as an Artifact.
>
> **What it does:** `[Describe the core function in one sentence]`
>
> **Inputs:** `[What does the user enter or select?]`
>
> **Output:** `[What does the user see as a result?]`
>
> **Design:** Clean, modern, professional. Use `[color scheme preference or "your best judgment"]`. Make it mobile-friendly with clear labels and a satisfying user experience.

### 10. Data Visualization

> Create a `[chart type: bar chart / pie chart / line graph / dashboard]` as an Artifact using this data:
>
> `[paste data or describe it]`
>
> Requirements:
> - Title: `[chart title]`
> - Clear axis labels and legend
> - Color scheme: `[professional / colorful / brand colors: #xxx]`
> - Include the actual values on the chart (not just the bars/lines)
> - Add a one-sentence insight below the chart summarizing the main takeaway

### 11. Landing Page

> Create a landing page as an Artifact for `[product/service/event name]`.
>
> **Headline:** `[Main value proposition in one sentence]`
>
> **Sections to include:**
> - Hero section with headline and subheadline
> - 3 key benefits with icons
> - How it works (3-step process)
> - Testimonial or social proof section
> - Call-to-action button: `[button text]`
>
> **Design:** Modern, professional, trustworthy. Color scheme: `[preference]`. Should look like a real product page, not a student project.

### 12. Flowchart / Process Diagram

> Create a `[flowchart / process diagram / decision tree]` as an Artifact showing:
>
> `[Describe the process step by step, including decision points]`
>
> Use clear labels, consistent colors for different types of steps (start, action, decision, end), and include arrows showing the flow. Make it readable without zooming in.

---

## Debug / Fix Prompts

### 13. Fix an Artifacts Error

> The Artifact you just created has an issue:
>
> **What I expected:** `[What should have happened]`
>
> **What actually happened:** `[What went wrong -- be specific]`
>
> **Error message (if any):** `[Copy the exact error]`
>
> Please fix this issue. Show me what you changed and why.

### 14. Start Fresh (Strategic Reset)

> The current approach isn't working. Let's start over with a fresh design.
>
> **What I'm trying to build:** `[Describe the goal clearly]`
>
> **What went wrong with the previous attempt:** `[Key issues]`
>
> **Requirements that must be preserved:**
> - `[Non-negotiable requirement 1]`
> - `[Non-negotiable requirement 2]`
>
> Please rebuild this from scratch with a simpler approach. Prioritize getting the core functionality working before adding any styling or extra features.

### 15. Complete a Missing Feature

> The Artifact is mostly working, but it's missing a feature:
>
> **Current state:** The `[tool/page]` currently does `[what it does now]`.
>
> **Missing feature:** I need it to also `[describe what's missing]`.
>
> **Important:** Don't rebuild the whole thing. Add this feature to the existing code while keeping everything else working exactly as it is now.

### 16. Plan Before Building

> Before writing any code, I want to plan this out. I'm building a `[description of tool]`.
>
> Please create a plan that includes:
> 1. **Core features** (must-have for v1)
> 2. **Nice-to-have features** (for v2 later)
> 3. **Technical approach** (in plain English -- what components, what layout)
> 4. **Potential challenges** (what might go wrong)
> 5. **Step-by-step build order** (what to create first, second, third)
>
> Don't write any code yet -- just the plan. I'll confirm before we start building.

---

## Learning Prompts

### 17. Concept Explanation

> Explain `[concept]` to me like I'm a smart person who just doesn't know this particular topic.
>
> Include:
> - A one-sentence definition
> - A real-world analogy that makes it click
> - Why it matters (practical relevance)
> - A simple example
> - Common misconceptions
>
> Don't dumb it down -- just remove the jargon and assumed knowledge.

### 18. Practice Questions

> Generate `[number]` practice questions about `[topic]` at a `[beginner/intermediate/advanced]` level.
>
> Format each question with:
> - The question itself
> - 4 multiple-choice options (A, B, C, D)
> - The correct answer with a brief explanation of WHY it's correct
> - A "common mistake" note explaining why people usually pick the wrong answer
>
> Make the questions test understanding, not just memorization.

### 19. Mock Interview

> Conduct a mock `[job title]` interview with me.
>
> Rules:
> - Ask me one question at a time
> - Wait for my response before asking the next question
> - After each response, give me brief feedback: what I did well and one thing to improve
> - Mix behavioral questions ("Tell me about a time...") with role-specific technical questions
> - Start easier and gradually increase difficulty
> - After 5 questions, give me an overall score out of 10 with specific improvement tips

### 20. Study Plan

> Create a `[timeframe: 2-week / 1-month / 3-month]` study plan for learning `[topic/skill]`.
>
> About me: I'm a `[your background]` with `[current knowledge level]` knowledge of this topic.
>
> Include:
> - Weekly goals and milestones
> - Specific free resources for each phase (YouTube channels, articles, courses)
> - Practice exercises for each week
> - A way to measure progress
> - How much time per day/week I should dedicate
>
> Be realistic -- I have `[available hours per week]` hours per week for this.

---

## Pro Tips for All Prompts

| Tip | Why It Works |
|-----|-------------|
| Always include context about yourself | Claude calibrates its response to your level |
| Specify what you DON'T want | Prevents common default behaviors you'd have to undo |
| Ask for a specific format | Tables, bullets, numbered lists -- whatever's easiest for you to use |
| Include an example of good output | Claude matches the style and quality of your example |
| Say "don't sound like AI" | Removes the corporate-speak that AI tends to default to |

---

*Bookmark this page. Come back often. Customize these prompts until they feel like yours. That's how a cheat sheet becomes a superpower.*
