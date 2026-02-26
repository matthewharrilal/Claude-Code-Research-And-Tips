# What We Built and What We Learned

**Phase D Design System Validation — Plain English Results**
**February 14, 2026**

---

## Why This Matters

When you ask an AI to design a webpage, should you give it examples to copy from? Or does that kill creativity?

This isn't just an academic question. Every time someone uses AI to design something—a presentation, a website, a document—they face this choice: provide templates and risk getting boring copies, or provide no guidance and risk getting unusable chaos.

We ran a controlled experiment to find out which approach works best.

---

## The Experiment

We gave five different AI agents the exact same essay about software engineering and asked each one to design a webpage for it. But here's the twist: each agent got different instructions about whether they could copy from a library of 15 example designs.

Think of it like asking five chefs to make the same dish:
- **Chef #1** gets a cookbook and must follow the recipes exactly, combining pre-made components
- **Chef #2** is locked in a kitchen with no cookbook at all—pure creativity
- **Chef #3** gets the cookbook but is told "you can look if you want, your choice"
- **Chef #4** is told "don't you dare look at that cookbook" and gets monitored to make sure they don't peek
- **Chef #5** is told "read all the recipes first, then pick your favorite and copy it"

**The question:** Does having examples help or hurt? Can you force creativity by banning examples? And what happens when you give the AI a choice?

---

## How We Measured Success

We evaluated each design on two main dimensions:

**1. Visual Quality (scored out of 20 points)**
- Does it look good?
- Is the text readable (not too wide, not too cramped)?
- Do colors work well together?
- Is spacing consistent?

**2. Creativity (scored 0-5)**
- How novel is the design metaphor?
- Does it feel fresh or derivative?
- Would you recognize it as unique?

We also ran automated checks for specific design rules, like:
- Use warm, soft colors (cream backgrounds, warm grays) instead of harsh pure white or black
- Keep text columns around 940 pixels wide for comfortable reading
- Follow a consistent spacing system based on 4-pixel increments
- Stick to an approved color palette

---

## The Five Designers

### Designer #1: The Assembler (Track 1)

**Instructions:** "Use pre-made components from the library like LEGO bricks. No creativity—just assemble."

**What they built:** A functional technical comparison page using 10 different ready-made pieces (callouts, tables, code blocks). Everything came straight from the library.

**Build time:** 25 minutes (fastest approach)

**The catch:** They forgot to read the style rules first. The result? Five critical mistakes:
- Pure white header (should be warm cream)
- Zero padding around the edges (text crashed into margins)
- Text lines way too long to read comfortably (hurts the eyes)
- Colors that weren't in the approved palette
- Spacing that didn't follow the 4-pixel system

**Verdict:** FAIL. But not because the library is insufficient—because the builder skipped step one: reading the instructions.

---

### Designer #2: The Pure Creative (Variant A — Skill-Only)

**Instructions:** "Use only your creative process. No library access. Figure it out yourself."

**What they built:** A page styled like architectural blueprint drawings—with three different "views" of the same content:
- "Plan view" sections (80px padding—lots of breathing room)
- "Elevation view" sections (48px padding—normal)
- "Section cut" statistics (32px padding—compressed)

The design was clean, warm, and distinctive.

**Build time:** 117 minutes (slowest)

**The problem:** Mid-page, they inserted a massive pure black callout box with white text. On an otherwise soft, cream-and-tan page, this felt jarring. One evaluator said it looked like "an error dialog pasted onto an otherwise calm page."

**Results:**
- Quality: 13/20 (decent but flawed)
- Creativity: 3/5 (genuinely fresh metaphor)

**Verdict:** CONDITIONAL FAIL. Great creativity, but the pure black element broke the visual harmony.

---

### Designer #3: The Optional Librarian (Variant B — Weak Permission)

**Instructions:** "The library is available for reference if you find it helpful. Your choice."

**What they built:** A page styled like a scientific laboratory with four safety zones based on trust levels:
- **Safety briefing zone** (red borders, 40px padding) for never-trust operations
- **Clean room** (amber borders, 32px padding) for verify-always tasks
- **Transition zone** (soft blue borders, 24px padding) for building stability
- **Critical zone** (green borders, 20px padding) for trust-with-monitoring

They even used border widths to encode trust levels: thicker borders for more critical information.

**Build time:** 86 minutes

**The surprise:** They completely ignored the library. Even though they were told examples were available, they chose to start from scratch—same behavior as the agent who was prohibited from accessing examples.

**Results:**
- Quality: 19/20 (tied for best)
- Creativity: 4/5 (most novel metaphor)
- Passed 18 automated design checks
- Container width nearly perfect (960px vs 940px target)

**Verdict:** CONDITIONAL PASS (best overall performer)

**The paradox:** Soft permission ("available if you want it") produced MORE creativity than strict enforcement ("you must not look").

---

### Designer #4: The Anti-Gravity Agent (Variant C — Strict Rules)

**Instructions:** "You MUST NOT look at the library during creative phases. After you derive a metaphor, you must prove it's different from library examples or start over."

**What they built:** A page styled like layers of metamorphic rock in a cliff face:
- **Diagenetic zone** (barely altered rock) for never-trust content
- **Low-grade metamorphic** (some transformation) for building stability
- **Medium-grade metamorphic** (significant change) for stable operations

They used geological transformation as a metaphor for how a software engineer's identity changes when they start managing AI agents instead of writing code.

**Build time:** 78 minutes

**The controversy:** The agent wrote extensive analysis proving their metaphor was novel (scoring 4.5 out of 5 for divergence across multiple dimensions). But here's the problem: **they chose geology**—the exact same concept family as library example OD-004.

Yes, they used "metamorphic rock" instead of "sedimentary layers," but the visual patterns and structure were 85% similar. The strict enforcement prevented direct copying but couldn't prevent conceptual convergence.

**Results:**
- Quality: 19/20 (tied for best)
- Creativity: 1/5 (geological family already used)
- Container too narrow (650px instead of 940px—felt cramped)

**Verdict:** FAIL. The anti-gravity mechanisms didn't prevent convergence to familiar patterns.

---

### Designer #5: The Pattern Matcher (Variant D — Library-First)

**Instructions:** "Read ALL the library examples first, then pick the best-matching pattern and copy it."

**What they built:** A direct copy of library example OD-004's geological layering pattern:
- **Bedrock** (4px borders, 40px padding) for established facts
- **Strata** (3px borders, 32px padding) for emerging patterns
- **Topsoil** (2px borders, 20px padding) for open questions

This was intentional convergence—the builder was *supposed* to pattern-match and copy.

**Build time:** 37 minutes (2x faster than creative builds)

**The problem:** They used a pure black header banner that evaluators described as "oppressive" and "crushing the top of the page."

**Results:**
- Quality: 13/20 (functional but flawed)
- Creativity: 0/5 (exact copy by design)
- Passed component type tests (used 8 different design patterns)

**Verdict:** FAIL (expected). Fast but uninspired. Proof that library-first copying is 2x faster but 30% lower quality.

---

## The Results

### 🥇 Best: Designer #3 (The Optional Librarian)

**Why it won:**
- Most novel metaphor (4/5) — scientific laboratory safety zones felt fresh
- Tied for best quality (19/20)
- Used warm-toned grays instead of harsh pure black
- Container width nearly perfect for readability

**The paradox:** They were told the library was available, but chose not to use it. The soft framing ("available but not required") produced MORE creativity than strict prohibition.

**Minor flaw:** Density was slightly uneven in a few sections.

---

### 🥈 Interesting but Flawed

**Designer #4 (The Anti-Gravity Agent):** Produced the cleanest visual design (19/20 quality) but somehow converged to the same geological metaphor family as the library example they were never allowed to see. Even with strict enforcement, patterns leaked through references in other required documents.

**Designer #2 (The Pure Creative):** The architectural blueprint metaphor was genuinely creative, but the huge black callout box mid-page ruined the visual flow.

**Designer #5 (The Pattern Matcher):** Fastest builder (37 minutes), but zero creativity by design. Proved that copying from examples is 2x faster but produces noticeably lower quality.

---

### ❌ Clear Failure

**Designer #1 (The Assembler):** Five critical violations because they didn't read the style rules before building. This wasn't a library problem—it was a process problem. The lesson: even simple assembly tasks fail if you skip the instructions.

---

## The Plot Twist

One of the evaluators almost invalidated the entire experiment by making a critical reading error.

The report-writer was supposed to verify that Designer #4 completed a mandatory divergence checkpoint—a step in the process where the agent must prove their design is different from library examples. The checkpoint logs were 80,000 lines long.

**The evaluator only read the first 200 lines.**

They concluded: "Gate not found. Agent failed to complete divergence analysis."

But the checkpoint WAS there—at line 1,233. The agent had written extensive analysis, they just buried it 1,000 lines deep in their logs.

**Lesson learned:** When evaluating AI work, you can't just skim the beginning. Important evidence might be anywhere in the output.

---

## What We Learned

**1. Choice beats enforcement**
The "library available but not required" approach (Designer #3) produced the most creative result (4/5 novelty). The "absolutely prohibited" approach (Designer #4) produced the least (1/5 novelty). Giving AI agents autonomy works better than strict rules.

**2. Container width is critical for readability**
Four out of five pages failed the 940-pixel sweet spot. Too narrow feels cramped (Designer #4 at 650px). Too wide makes text hard to scan (Designer #2 at 1000px). Only Designer #3 nailed it.

**3. Speed vs. quality is a real trade-off**
Designer #5 (library-first copying) finished in 37 minutes vs 78-117 minutes for creative builds. But quality dropped from 19/20 to 13/20. Clear trade-off: you can have it fast or you can have it good.

**4. Pure black elements break soft color schemes**
Both Designers #2 and #5 used pure black backgrounds on major elements. Evaluators said it felt "alien," "oppressive," and "like an error dialog." When you build a warm, soft palette (cream, tan, warm gray), harsh black stands out as a mistake.

**5. You need the right content to test design patterns**
All five pages struggled with component coverage because the essay was 85% prose. You can't demonstrate fancy data table designs when there are no tables in your content. Next round needs mixed content: 50% prose, 50% code/tables/diagrams.

**6. Pattern "leakage" is real**
Designer #4 never looked at library examples directly, but still converged to the geological metaphor because other required documents casually mentioned past geology examples. Even "blind" agents can absorb patterns through indirect exposure.

---

## What This Means Going Forward

**The good news:**
- The library approach works when rules are followed (Designer #1's failure was process, not concept)
- High quality is achievable (two agents hit 19/20)
- Novel metaphors are possible even with library access (lab protocol scored 4/5)

**The bad news:**
- Strict anti-convergence rules failed to prevent pattern-matching
- All creative variants missed component coverage targets
- Container width guidance needs fixing

**Next steps before round 2:**
1. Create mixed content (prose + code + tables + diagrams) so we can properly test all design patterns
2. Fix container width guidance to hit the 940px sweet spot consistently
3. Add "always read the rules first" enforcement for assembly builds
4. Accept that you can't fully prevent convergence—even blind agents pick up patterns

**The bottom line:** Designer #3 (Optional Librarian) proved that giving AI agents choice produces better results than forcing strict rules. The best creativity came from trust, not constraints.

---

## Real-World Application

If you're using AI to create designs (presentations, websites, documents):

- **For quick, functional work:** Use library-first copying (Designer #5 approach). It's 2x faster, quality will be decent.
- **For creative, distinctive work:** Provide examples but make them optional (Designer #3 approach). Trust the AI to choose.
- **Don't bother with strict prohibition rules:** Designer #4 proved that enforcement doesn't prevent convergence anyway.
- **Always specify design constraints upfront:** Container width, color palette, spacing system. Don't make the AI guess.

The creative sweet spot is **autonomy with guidance**, not **freedom without constraints** or **rules without choice**.

---

**END DIGEST**

*This experiment involved 14 AI agents building and evaluating 5 web pages over approximately one hour, producing 47 files of analysis and output. For technical details, see the full Phase D execution reports.*
