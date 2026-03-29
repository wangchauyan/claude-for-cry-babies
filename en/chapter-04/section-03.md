# 4.3 Upload Images: Screenshot Recognition + Chart Interpretation

> *"I took a photo of a hand-drawn sketch on a napkin and Claude turned it into a working web interface. I literally cried into the same napkin."*

---

Claude has eyes. And they're surprisingly good ones.

You can upload images -- screenshots, photos, charts, diagrams, even hand-drawn sketches -- and Claude will analyze, interpret, and act on them. This opens up workflows that feel almost magical, especially for non-developers who think in visuals rather than text.

## Scenario 1: Dashboard Screenshot Interpretation

Your analytics team sent you a dashboard screenshot from Google Analytics (or Mixpanel, or whatever). It's full of numbers, graphs, and trend lines. You need to know what it all means for your upcoming presentation.

Upload the screenshot and say:

```
I've uploaded a screenshot of our analytics dashboard.
Please analyze it:

1. What are the key metrics shown, and what do they tell us?
2. Are there any trends I should highlight in my
   presentation (positive or concerning)?
3. Which metric looks most unusual or noteworthy?
4. If I had to pick ONE number from this dashboard to
   open my presentation with, which would it be and why?
5. What questions might my audience ask about this data,
   and how should I answer?
```

**What Claude will do:** Read all the numbers, labels, and charts in the screenshot. It'll identify trends, call out anomalies, and give you presentation-ready talking points. It's like having a data analyst look over your shoulder and whisper "lead with the conversion rate -- it's up 40%."

## Scenario 2: Foreign Menu or Sign Translation

You're traveling (or your team sent a photo from an international office) and you need to read something in a language you don't speak.

Upload the photo and say:

```
I've uploaded a photo of a restaurant menu in Japanese.
Please:

1. Translate every item into English
2. Add a brief description of each dish (what it is,
   key ingredients)
3. Flag any items that typically contain common allergens
   (nuts, shellfish, gluten, dairy)
4. Recommend 3 dishes for someone who's never had
   Japanese food before
```

**What Claude will do:** Read the text from the image, translate it, add context, and even give recommendations. This works with menus, street signs, product labels, instructions -- anything with visible text.

**This also works for:** Product labels in foreign languages, handwritten notes from international colleagues, screenshots of foreign-language software, etc.

## Scenario 3: Hand-Drawn Sketch to Working Interface

This is the one that makes people's jaws drop.

Draw a rough UI sketch on paper (or a whiteboard, or a napkin after two drinks). Take a photo. Upload it.

```
I've uploaded a photo of my hand-drawn sketch for an app
interface. Please:

1. Describe what you see in the sketch (so I can confirm
   you understood my intentions)
2. Turn this sketch into a working interactive Artifact
   that matches the layout as closely as possible
3. Use a clean, modern design style
4. Make all buttons and interactive elements actually work
   (even if they just show an alert or change state)
5. Add reasonable placeholder text for any text areas I
   drew but didn't label clearly
```

**What Claude will do:** Interpret your hand-drawn wireframe, confirm its understanding, and then generate a live, interactive version of your sketch as an Artifact. Your napkin doodle becomes a clickable prototype.

**Tips for better sketch recognition:**
- Use a dark pen on white paper (contrast matters)
- Label things when possible ("Search bar", "Menu", "Profile pic")
- Draw boxes and lines clearly -- messy is fine, but recognizable shapes help
- Take the photo in good lighting, straight-on (not at an angle)

### The Sketch-to-Prototype Workflow

This is actually a legitimate product design technique. Here's the full workflow:

```
1. Sketch on paper (2 minutes)
2. Photo + upload to Claude (30 seconds)
3. Claude generates interactive prototype (30 seconds)
4. Refine with follow-up prompts (5-10 minutes)
5. Show the prototype to your team for feedback (priceless)
```

Total time: ~15 minutes from napkin to clickable prototype. Compare that to opening Figma and spending an afternoon. For early-stage idea validation, this is unbeatable.

## Scenario 4: Error Screenshot Troubleshooting

Got an error message on your screen that you don't understand? Screenshot it and upload:

```
I'm seeing this error on my screen. I'm not technical --
please explain:

1. What this error means in plain English
2. What probably caused it
3. Step-by-step what I should do to fix it
4. Should I be worried about data loss or security?
```

This works for: software errors, installation failures, browser error pages, system notifications, and that cryptic message your printer keeps showing.

## Pro Tips for Image Uploads

| Tip | Why |
|-----|-----|
| **Use clear, high-resolution images** | Blurry images = blurry analysis. Claude needs to read text and see details |
| **Crop to the area of interest** | Don't upload your entire desktop -- crop to the chart, the error, or the section that matters |
| **One thing at a time** | Upload one screenshot per question. Multiple images in one message can dilute focus |
| **Tell Claude what it's looking at** | "This is a screenshot of our Salesforce dashboard" gives important context |
| **Highlight areas of interest** | Use your phone/computer to draw a red circle around the part you're asking about |
| **Mention what you've already tried** | "I already restarted the app" helps Claude skip basic suggestions |

## What Claude Can and Can't See

| Can See Well | Struggles With |
|-------------|---------------|
| Printed text | Very small or low-contrast text |
| Charts and graphs | 3D charts with overlapping elements |
| UI layouts and wireframes | Extremely detailed technical diagrams |
| Handwriting (if reasonably clear) | Doctor-level handwriting (sorry, docs) |
| Photos of objects and scenes | Very dark or heavily filtered photos |
| Tables and structured data | Heavily compressed JPEG artifacts |
| Color and design elements | Exact color matching (hex codes from screenshots) |

---

*Your eyes just got an AI-powered upgrade. Screenshots aren't just for tech support anymore -- they're the start of analysis, translation, and even prototyping. Next up: letting Claude run actual code for you.*
