# 7.3 MVP Project A: Interview Prep Assistant

> *"Nothing says 'I'm prepared' like telling the interviewer you built your own prep tool. With AI. Over the weekend."*

---

## What We're Building

An interactive interview preparation tool where you:
1. Enter the job position you're interviewing for
2. Get 5 tailored practice questions
3. Expand each question to see a sample answer
4. Practice writing your own answers in text boxes
5. Click a button to generate more questions

All in one clean, self-contained Artifact. No signup. No app store. Just instant interview prep.

---

## Step 1: The Build Prompt

Copy this prompt and paste it into Claude:

> **Create an interactive interview preparation assistant as an Artifact with these features:**
>
> 1. **Input section at the top:**
>    - A text field where the user types a job position (e.g., "Marketing Manager", "Data Analyst", "UX Designer")
>    - A "Generate Questions" button
>
> 2. **Questions section:**
>    - Generate 5 common interview questions tailored to the entered position
>    - Each question should be in a card format
>    - Each card has a "Show Sample Answer" button that expands to reveal a helpful sample answer
>    - Below each sample answer, include a text area where the user can practice writing their own answer
>
> 3. **Bottom section:**
>    - A "Generate 5 More Questions" button that adds additional questions without removing the existing ones
>    - A counter showing total questions generated
>
> 4. **Design:**
>    - Clean, professional look with a calming color scheme (think soft blues and whites)
>    - Cards should have subtle shadows and rounded corners
>    - Smooth expand/collapse animations for the sample answers
>    - Mobile-friendly layout
>
> Make it feel like a polished study tool, not a homework assignment.

Hit enter and watch the magic happen. Claude will generate a fully interactive interview prep tool right in the Artifact panel.

---

## Step 2: Verify Your Result

Before getting excited (okay, get a *little* excited), run through this checklist:

| Check | What to Test | Expected Result |
|-------|-------------|-----------------|
| **Input works** | Type "Product Manager" and click Generate | 5 relevant questions appear |
| **Questions are relevant** | Read the questions | They should be specific to the role, not generic |
| **Expand/collapse works** | Click "Show Sample Answer" on each card | Sample answer smoothly appears/disappears |
| **Practice boxes work** | Type in one of the practice text areas | Text appears and stays |
| **More questions button** | Click "Generate 5 More Questions" | New questions appear below existing ones |
| **Counter updates** | Check the question counter | Should show correct total |
| **Try a different role** | Clear the input, type "Nurse" and regenerate | Questions should change to nursing-specific ones |

**Didn't pass all checks?** No worries. Just tell Claude what's not working:

> "The 'Generate 5 More Questions' button isn't adding new questions -- it's replacing the existing ones. Can you fix it so new questions are added below the current ones?"

Remember Chapter 5: errors are just conversations.

---

## Step 3: Iterate and Improve

Your MVP works. Now let's make it *better*. Try these iteration prompts one at a time:

### Iteration 1: Add a Difficulty Selector

> "Add a difficulty selector with three options: Beginner, Intermediate, and Senior. Beginner questions should be about basic concepts and motivation. Intermediate should include behavioral and situational questions. Senior should include leadership, strategy, and 'tell me about a time you failed' type questions."

### Iteration 2: Customize Question Count

> "Add a dropdown to let the user choose how many questions to generate at once: 3, 5, or 10."

### Iteration 3: Polish the Design

> "Improve the styling: add a subtle gradient background, make the cards feel more modern with hover effects, and add a small icon next to each question number. Make it look like something from a premium study app."

### Iteration 4: Add a Timer (Bonus)

> "Add an optional 2-minute countdown timer that starts when the user clicks 'Start Timer' on any question card. This simulates real interview pressure. Show a progress bar that goes from green to yellow to red."

---

## What You Just Learned

Notice what happened here:

1. **One prompt** got you a working tool
2. **A checklist** helped you verify it works
3. **Iteration prompts** upgraded it step by step
4. At no point did you write a single line of code

This is the build pattern for everything in this chapter:

```
Describe --> Verify --> Iterate --> Ship
```

Memorize that. It's your new superpower.

---

*Feeling good? Let's build something a little more fun next. Your team is going to love this one.*
