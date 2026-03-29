---
title: "5.3 Three Common Errors + Fix Walkthroughs"
---


> *"I used to see error messages and think 'I should have studied computer science.' Now I see them and think 'Ah, I know this one.'"*

---

Let's walk through three errors you're very likely to encounter when building with Claude. For each one, I'll show you the error, explain it in plain English, and give you the exact prompt to fix it. No coding knowledge required. Just copy, paste, and conquer.

---

## Case 1: "default export is not a React Component"

### What you see:

The preview pane shows a red error message:

```
Error: The default export is not a React Component
  in page "/page"
```

Or sometimes:

```
Element type is invalid: expected a string or a class/function
but got: undefined
```

### What it means in plain English:

Imagine you wrote a recipe book. On the cover, you wrote "Chapter 1: Chocolate Cake." But when someone opens to Chapter 1, the page is blank -- or worse, it contains a recipe for fish tacos. The book's table of contents promised one thing, but the content delivered something else (or nothing at all).

That's what this error is. Claude created a file and told the system "here's a component called MyApp," but when the system looked inside, it either couldn't find MyApp or found something that doesn't look like a valid component. Usually, Claude forgot to properly "export" the component -- like writing a great essay but forgetting to put your name on it before turning it in.

### How to fix it:

```
I'm getting this error:
"The default export is not a React Component"

This usually means the component isn't being exported correctly.
Please check the main component file and make sure:
1. There is a proper "export default" statement
2. The component function returns valid JSX
3. The function name matches what's being exported

Please fix the export and keep all existing functionality intact.
```

### Why this works:

You're giving Claude three specific things to check, in plain English. You don't need to know what "JSX" or "export default" means -- Claude does. You're basically saying "Hey, your table of contents and your chapters don't match up. Fix the connection."

---

## Case 2: CSS Layout Gone Wrong

### What you see:

No error message at all. The app "works." But the layout looks like a tornado hit it:

- Elements are stacked vertically when they should be side by side
- Text is overflowing outside its container
- Everything is crammed into the left corner
- On mobile, things overlap and become unreadable
- A button is hiding behind another element

### What it means in plain English:

This is a furniture arrangement problem. Claude put all the right furniture in the room, but the couch is blocking the door, the TV is facing the wall, and somehow the dining table is on the ceiling. The pieces are all there -- they're just in the wrong places.

### How to fix it:

The key to fixing layout issues is being **spatially specific**. Vague descriptions like "it looks wrong" won't help. Describe the layout like you're giving directions:

**Bad prompt:**
```
The layout looks wrong. Fix it.
```

**Good prompt:**
```
The layout needs fixing. Here's what I need:

HEADER: Full width across the top, fixed (stays visible when scrolling)

MAIN CONTENT AREA: Two columns, side by side
- Left column (30% width): Navigation menu, list of items
- Right column (70% width): Detail view / content area

FOOTER: Full width at the bottom

Current problem: Everything is stacked vertically in a single column.
The navigation menu and content area should be NEXT TO EACH OTHER,
not on top of each other.

On mobile (small screens), it's okay for the columns to stack
vertically, but on desktop they must be side by side.

Please fix the layout while keeping all existing functionality.
```

### Layout vocabulary cheat sheet:

You don't need to know CSS, but these plain English terms help Claude understand your spatial intentions:

| What You Want | How to Describe It |
|--------------|-------------------|
| Things side by side | "Two columns, side by side" or "horizontal layout" |
| Things stacked | "Stacked vertically" or "one on top of the other" |
| Centered on page | "Centered horizontally and vertically on the page" |
| Stuck to the top | "Fixed to the top, stays visible when scrolling" |
| A gap between items | "Add spacing/gap between each item" |
| Equal-sized items | "Each item takes up equal width" |
| Responsive | "On mobile, stack vertically. On desktop, side by side" |
| Something overlapping | "[Element A] is hiding behind [Element B], bring A to front" |

---

## Case 3: Feature Only Half-Implemented

### What you see:

You asked for a feature with three parts, and Claude only built two of them. Or it built the UI (the form, the buttons) but not the logic behind it. The app does *some* of what you asked, but quietly ignores the rest.

### What it means in plain English:

You asked a contractor to build you a bathroom with a sink, toilet, and shower. They installed a beautiful sink and toilet, said "all done!", and left. The shower? What shower? They either forgot about it, ran out of context, or decided it was too complex and hoped you wouldn't notice.

(You noticed.)

### How to fix it:

The key here is being specific about what's missing WITHOUT risking the parts that already work. This is like telling the contractor "come back and install the shower, but for the love of all that is holy, do not touch the toilet."

**The Completion Prompt:**

```
The current version is partially working. Here's what's done
and what's missing:

WORKING (do not modify these):
- The input form with all fields (name, date, items) -- works great
- The styling and layout -- looks perfect
- The save button -- correctly saves to the list

MISSING (please add these):
- Delete button: Each item in the list should have a small "X" button
  that removes it when clicked
- Edit functionality: Clicking on an item should make it editable inline.
  After editing, pressing Enter should save the changes.

Please add ONLY the missing features. Do not change the styling,
layout, or behavior of the existing working features.
```

**Why "do not modify these" is critical:**

Without explicit protection of working features, Claude might:
- Refactor the entire codebase while adding your feature (breaking things)
- Change the styling to accommodate new features
- Replace your carefully crafted component with a "better" version that loses your customizations

Being explicit about what to keep is like putting "WET PAINT - DO NOT TOUCH" signs on everything that's already good. Claude respects boundaries -- you just have to state them clearly.

---

## Quick Fix Prompt Templates

Bookmark these. Use them. Love them.

### Template 1: Error Message Fix
```
I'm getting this error: [paste error]
Expected behavior: [what should happen]
Actual behavior: [what happens instead]
Fix this while keeping all existing features working.
```

### Template 2: Layout Fix
```
The layout needs fixing:
- [Element A] should be [position/size]
- [Element B] should be [position/size]
Current problem: [describe what's wrong spatially]
Fix the layout while keeping all functionality intact.
```

### Template 3: Missing Feature
```
Working features (don't touch): [list them]
Missing features (please add): [list them with details]
Add only the missing features without modifying working ones.
```

---

*Three errors down, zero tears shed. You're getting dangerously competent at this. Next up: how to prevent errors before they happen, with a technique called Chain of Thought.*
