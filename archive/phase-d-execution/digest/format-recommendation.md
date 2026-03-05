# Format Recommendation — Phase D Plain-English Digest

**Designer:** format-designer
**Date:** 2026-02-14
**Audience:** Non-technical user reading terminal/chat conversation

---

## THE PROBLEM

The existing Phase D reports are full of technical jargon that makes them hard to follow:

**Jargon examples:**
- "CPL violations" (characters per line)
- "PA-10 failures" (perceptual audit question #10)
- "PD-05 mechanism count" (Phase D criterion #5)
- "R6 divergence mandate" (Research finding #6)
- "Anti-gravity mechanisms"
- "Library utilization percentages"
- "Divergence dimension scoring"

**User feedback:** "Too technical, hard to understand what actually happened"

---

## THE SOLUTION: STORY-FIRST FORMAT

Present the results as a **plain-English story** that answers these questions in order:

### 1. WHAT DID WE DO? (1-2 paragraphs)
- Explain the experiment in everyday terms
- No acronyms, no code names
- Use metaphors: "We gave 5 AI designers the same essay and asked each one to design a webpage for it"

### 2. WHY DID WE DO IT? (1 paragraph)
- What question were we trying to answer?
- Plain language: "We wanted to know: do creative AI agents work better with strict rules or loose guidelines?"

### 3. WHAT DID EACH DESIGNER BUILD? (5 mini-profiles)
For each of the 5 variants, describe in plain English:
- **What it looks like** (visual description, not code)
- **What metaphor/theme it used** (e.g., "looks like geological rock layers")
- **What instructions the builder got** (e.g., "was told to copy from a library of examples")
- **How long it took to build**

Use storytelling language:
- ✅ "Builder #3 made a page that looks like layers of rock in a cliff face"
- ❌ "Variant C implemented a metamorphic transition zones metaphor"

### 4. WHAT DID THE JUDGES SAY? (Clear rankings + reasons)
Present results as a **ranked list from best to worst**, with plain-English reasons:

**Best performer:**
- What made it good (visual descriptions, not metrics)
- What judges liked
- Any minor flaws

**Middle performers:**
- What was interesting about them
- What held them back
- Comparison to best

**Failures:**
- What went wrong (in simple terms)
- Why it failed
- What we learned

### 5. THE BIG TWIST (Evaluation mistake)
Tell the story of what went wrong:
- "One judge made a critical mistake..."
- Explain what they missed (in simple terms)
- What this means for the results

### 6. WHAT DID WE LEARN? (Key takeaways)
3-5 bullet points in plain English:
- ✅ "Strict rules work better than loose suggestions"
- ❌ "H1 hypothesis confirmed (library constrains novelty)"

---

## WRITING RULES FOR THE DIGEST

### DO:
1. **Use concrete visual descriptions**
   - ✅ "The header was stark white instead of warm cream"
   - ❌ "S4 soul violation on .page-header background"

2. **Explain technical terms when first used**
   - ✅ "The text was too wide (more than 80 characters per line, which makes reading hard)"
   - ❌ "CPL exceeded at 96-132"

3. **Use everyday metaphors**
   - ✅ "The page was too narrow, like reading a newspaper column on a widescreen TV"
   - ❌ "Container width <940px at 1440px viewport"

4. **Tell stories about what agents did**
   - ✅ "Builder #1 forgot to read the style rules first, so they used the wrong colors"
   - ❌ "Track 1 builder didn't follow always-load protocol"

5. **Use comparisons and rankings**
   - ✅ "Builder #5 was fastest (40 minutes) but Builder #2 was best quality"
   - ❌ "Variant D: 37 min, Variant B: 86 min, optimal time-quality tradeoff unclear"

### DON'T:
1. **No unexplained acronyms** (CPL, PA, PD, R1-R6)
2. **No code references** (.page-header, rgba(), tokens.css)
3. **No technical scoring systems** (18/19 programmatic checks, 4.5/5 divergence)
4. **No jargon** (anti-gravity, library utilization, mechanism count)
5. **No assumption of technical knowledge** (what a "container width" is)

---

## STRUCTURE TEMPLATE

```markdown
# What We Built and What We Learned

## The Experiment

[2 paragraphs explaining what we did and why, in everyday terms]

## The Five Designers

### Designer #1: [Name/Description]
- **Visual style:** [What it looks like]
- **Theme:** [The metaphor they used]
- **Instructions:** [What they were told to do]
- **Build time:** [How long it took]
- **Result:** [Success/failure preview]

[Repeat for all 5]

## The Results

### 🥇 Best: [Name]
[Why it won, what made it good, minor flaws]

### 🥈 Interesting but Flawed: [Names]
[What was cool, what held them back]

### ❌ Failures: [Names]
[What went wrong, what we learned]

## The Plot Twist

[Story of the evaluation mistake and what it means]

## What We Learned

[3-5 key takeaways in plain English]

## What This Means Going Forward

[Practical implications, next steps]
```

---

## KEY PRINCIPLES

1. **Story over statistics**: Lead with narrative, support with specifics
2. **Visual over technical**: Describe what you'd see, not what the code says
3. **Why over what**: Explain significance, not just facts
4. **Compare over absolute**: "Better than X" is clearer than "scored 18/19"
5. **Concrete over abstract**: Examples beat definitions

---

## EXAMPLE TRANSFORMATIONS

### Before (Technical):
> "Variant B achieved 18/19 programmatic checks PASS with borderline CPL. PA-01 through PA-48 yielded 19/20 with 1 YES WITH RESERVATIONS. Integration criteria PD-01 through PD-12 showed 6/12 PASS with PD-05 mechanism count at 6/8 due to prose-only content limitations."

### After (Plain English):
> "Designer #5's page passed almost all our quality checks. The text width was at the edge of acceptable—readable, but barely. Two independent judges both said 'yes, this is good,' though one had minor reservations. The page only used 6 out of 8 possible design techniques, but that's because the content was all text—you can't demonstrate fancy data table designs when there are no tables in your essay."

---

## SUCCESS CRITERIA

The digest will succeed if:
- ✅ A non-technical reader can understand what happened
- ✅ No unexplained jargon or acronyms
- ✅ Results are clear (best, worst, why)
- ✅ The reader learns something concrete
- ✅ The story is engaging, not just a data dump

---

## FORMAT RECOMMENDATION: MARKDOWN FOR TERMINAL

Use standard markdown formatting that renders well in terminal chat:

- **Bold** for emphasis and labels
- *Italics* for subtle emphasis
- `Inline code` ONLY for actual code snippets user might see
- > Blockquotes for important insights
- Emoji sparingly (🥇🥈❌✅) for visual markers
- Bullet lists for readability
- Tables ONLY if absolutely necessary (max 3 columns)
- Short paragraphs (2-4 sentences max)

---

## FINAL NOTE

The goal is to make someone say "Oh, I get it!" not "This is comprehensive."

**Clarity beats completeness.**
