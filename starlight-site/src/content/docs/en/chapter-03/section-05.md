---
title: "3.5 Project 3: Data Visualization"
---


> *"My boss wanted a chart. I asked Claude. I had a chart in 30 seconds. My boss thinks I'm a wizard now. I'm not correcting him."*

---

Let's get practical. Charts and data visualization are the #1 thing non-developers need at work but can't easily make without Excel's frustrating chart wizard or begging the data team. Claude + Artifacts changes that completely.

In this section, you'll learn to turn raw numbers into beautiful, interactive charts -- and more importantly, you'll learn the **prompt templates** for different chart types so you can reuse them forever.

## The Main Project: Dual-Axis Marketing Chart

Here's a realistic scenario: you're a marketing PM, and you need to show 12 months of marketing spend alongside conversion rates. Two different metrics, one chart. This is the kind of thing that makes people wrestle with Excel for an hour.

Copy this prompt:

```
Create an interactive dual-axis line chart as an Artifact with this data:

Monthly Marketing Performance (2025):

| Month | Marketing Spend ($) | Conversion Rate (%) |
|-------|-------------------|-------------------|
| Jan   | 12,000            | 2.1               |
| Feb   | 15,000            | 2.4               |
| Mar   | 18,000            | 2.8               |
| Apr   | 22,000            | 3.1               |
| May   | 20,000            | 3.5               |
| Jun   | 25,000            | 3.2               |
| Jul   | 28,000            | 3.8               |
| Aug   | 30,000            | 4.1               |
| Sep   | 27,000            | 3.9               |
| Oct   | 32,000            | 4.5               |
| Nov   | 35,000            | 4.2               |
| Dec   | 40,000            | 4.8               |

Requirements:
- Left Y-axis: Marketing Spend (in dollars), colored blue
- Right Y-axis: Conversion Rate (in %), colored green
- X-axis: Months (Jan-Dec)
- Both lines should have data point markers
- On hover, show a tooltip with the exact values for that month
- Add a title: "2025 Marketing Spend vs. Conversion Rate"
- Include a legend
- Use a clean, professional style suitable for a presentation
- Make it responsive to different screen widths
```

**What you should see:** A polished dual-axis chart with two distinct lines, interactive tooltips that show exact values when you hover, a legend, and a professional look that's presentation-ready.

You just did in 30 seconds what used to take an hour in Excel. Let that sink in.

## Chart Type Prompt Templates

Here are ready-to-use templates for the most common chart types. Just swap in your data:

### Bar Chart

```
Create an interactive bar chart as an Artifact:

Title: "[Your Title]"
Data:
- Category A: [value]
- Category B: [value]
- Category C: [value]
- Category D: [value]

Requirements:
- Vertical bars with different colors for each category
- Show exact values on top of each bar
- Add hover effect (highlight bar and show tooltip)
- Sort bars from highest to lowest value
- Clean, professional styling
```

### Pie / Donut Chart

```
Create an interactive donut chart as an Artifact:

Title: "[Your Title]"
Data:
- Segment A: [value or percentage]
- Segment B: [value or percentage]
- Segment C: [value or percentage]
- Segment D: [value or percentage]

Requirements:
- Use distinct, harmonious colors for each segment
- Show percentage labels on each segment
- On hover, the segment should slightly separate (explode) and
  show the exact value in a tooltip
- Add a legend below the chart
- Show the total value in the center of the donut
```

### Line Chart (Single Axis)

```
Create an interactive line chart as an Artifact:

Title: "[Your Title]"
Data:
| X Label | Series 1 | Series 2 |
|---------|----------|----------|
| Point 1 | [value]  | [value]  |
| Point 2 | [value]  | [value]  |
| ...     | ...      | ...      |

Requirements:
- Smooth lines with data point markers
- Different colors for each series
- Hoverable tooltips showing exact values
- Legend to distinguish series
- Grid lines for easier reading
```

### Scatter Plot

```
Create an interactive scatter plot as an Artifact:

Title: "[Your Title]"
X-axis: "[Label]" (unit: [unit])
Y-axis: "[Label]" (unit: [unit])
Data points:
- (x1, y1) - Label A
- (x2, y2) - Label B
- (x3, y3) - Label C
- ...

Requirements:
- Each point should be hoverable with a tooltip showing its label
  and exact coordinates
- Add a trend line (linear regression) with the R-squared value
- Color-code points by category if applicable
- Include axis labels and units
```

## Common Pitfalls (and How to Avoid Them)

### Pitfall 1: Too Much Data

**Problem:** You paste in 500 rows of data and Claude either truncates it, gets confused, or generates a chart that looks like a hairball.

**Solution:** Summarize first, visualize second.

```
Instead of: [pasting 500 rows of raw data]

Try: "Here's a summary of my data. Full data has 500 rows.
Key stats by quarter:
- Q1: avg $12K, total $36K
- Q2: avg $15K, total $45K
- Q3: avg $20K, total $60K
- Q4: avg $25K, total $75K
Please create a quarterly bar chart."
```

If you really need to visualize all 500 rows, that's a job for Code Execution (Chapter 4.4), not Artifacts.

### Pitfall 2: Too Many Dimensions

**Problem:** You want one chart to show revenue, costs, profit, growth rate, customer count, churn rate, and NPS score all at once.

**Solution:** One chart should tell one story. Make multiple charts.

```
Bad: "Show all 7 metrics in one chart"

Good: "Create three charts:
1. Revenue vs. Costs (bar chart)
2. Profit Margin trend (line chart)
3. Customer metrics: count, churn, and NPS (dashboard with 3 small charts)"
```

### Pitfall 3: Unclear Axes and Labels

**Problem:** The chart renders but you can't tell what you're looking at because nothing is labeled.

**Solution:** Always specify:

```
- X-axis label and units: "Months (Jan 2025 - Dec 2025)"
- Y-axis label and units: "Revenue (USD, in thousands)"
- Title: "Monthly Revenue Growth"
- Legend: "Blue = Online Sales, Orange = In-Store Sales"
```

### Pitfall 4: The "Make It Better" Trap

**Problem:** You say "make it better" and Claude changes things you liked while fixing things you didn't.

**Solution:** Be specific about what to change and what to keep:

```
Bad: "Make this chart better"

Good: "Keep the colors and layout, but:
1. Make the font size larger (14px for labels, 18px for title)
2. Add more space between the bars
3. Round the tops of the bars"
```

---

*Data visualization is one of those skills that's disproportionately impressive. A great chart in a meeting makes you look like a data genius, even if Claude did all the work. We won't tell if you won't.*
