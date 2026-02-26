# Fresh-Eyes Review: What Would Confuse a New Builder Agent?

**Date:** 2026-02-15
**Reviewer:** fresh-eyes-reviewer (zero project context)
**Task:** Follow the documented reading path as a builder encountering this system for the first time. Document EVERY confusion point.

---

## CRITICAL CONTEXT

I am simulating a builder agent with ZERO knowledge of this project. I've been told: "You need to build a Middle-tier page." I'm following the reading path exactly as documented.

---

## READING PATH FOLLOWED

1. ephemeral/START-HERE.md ✓
2. ephemeral/doc-enrichment/03-ENTRY-POINT.md ✓
3. design-system/compositional-core/CLAUDE.md ✓
4. design-system/compositional-core/identity/prohibitions.md ✓
5. design-system/compositional-core/vocabulary/tokens.css ✓
6. design-system/compositional-core/grammar/mechanism-catalog.md ✓
7. ~/.claude/skills/tension-composition/SKILL.md (first 200 lines) ✓
8. ~/.claude/skills/perceptual-auditing/SKILL.md (first 100 lines) ✓
9. ephemeral/session-insights/00-LIVING-DOCUMENT.md ✓

---

## CONFUSION CATALOG (Chronological)

### C-01: Immediate Acronym Bombardment (START-HERE.md)

**Line 1:** "Read these in order:"

**Problem:** The file names contain unexplained acronyms: "03-ENTRY-POINT.md", "HANDOFF.md", "02-tier-methodology.md"

**Confusion:** What is "HANDOFF"? Why is the entry point numbered "03"? What happened to 01 and 02?

**Resolution status:** NEVER EXPLAINED. I kept reading hoping for clarification.

---

### C-02: "Phase D validation is COMPLETE" -- What is Phase D? (ENTRY-POINT.md line 9)

**Problem:** Opens with "Phase D validation is COMPLETE (CONDITIONAL PASS)."

**Confusion:** What is Phase D? What was it validating? What does CONDITIONAL PASS mean? What were the conditions?

**Resolution status:** NEVER EXPLAINED in the entry point. I have to trust this is important context but don't understand it.

---

### C-03: "Variant B's foundation" -- What is Variant B? (ENTRY-POINT line 13)

**Problem:** "Building richness tiers on Variant B's foundation"

**Confusion:** What is Variant B? Was there a Variant A? What were the variants OF?

**Resolution status:** NEVER EXPLAINED. Referenced like I should already know.

---

### C-04: "The content adversary's key finding" -- Who? (ENTRY-POINT line 15)

**Problem:** "The content adversary's key finding: experiment-first resolves more questions"

**Confusion:** Who is "the content adversary"? Was this a person? An agent? A phase?

**Resolution status:** NEVER EXPLAINED. Assumed to be shared context.

---

### C-05: "The Name Test and Transfer Test" -- Where are these defined? (ENTRY-POINT line 21)

**Problem:** "The Name Test and Transfer Test prove mechanisms are transferable"

**Confusion:** What ARE these tests? How do I run them? Where are they documented?

**Resolution status:** PARTIALLY RESOLVED in mechanism-catalog.md lines 20-29, but only AFTER the entry point referenced them. Reading order problem.

---

### C-06: Tier Model Table Without Build Instructions (ENTRY-POINT line 31-41)

**Problem:** Table shows mechanism counts (5, 8-10, 12-15, 16-18) but no guidance on HOW to choose which mechanisms.

**Confusion:** I know I need 8-10 mechanisms for Middle-tier. But WHICH 8-10? Do I pick my favorites? Is there a selection criteria?

**Resolution status:** PARTIALLY RESOLVED in mechanism-catalog.md lines 681-703 (selection flow), but this is buried DEEP in the file. Not prominently signaled.

---

### C-07: "NO metaphor" for Middle-tier -- But How Do I Design Without One? (ENTRY-POINT line 39)

**Problem:** Middle-tier row says "Metaphor? No"

**Confusion:** If I can't use a metaphor, what DRIVES my design decisions? How do I decide layout structure? The tension-composition skill is all about metaphor derivation -- do I skip the entire skill?

**Resolution status:** NEVER EXPLICITLY ANSWERED. I infer from context that Middle uses mechanisms directly, but HOW to apply them without metaphor is unclear.

---

### C-08: "Addition Test" -- Never Defined (ENTRY-POINT line 25)

**Problem:** "The Addition Test classifies content"

**Confusion:** What IS the Addition Test? How do I run it?

**Resolution status:** PARTIALLY RESOLVED in CLAUDE.md line 56 (Track classification), but only as a one-liner. No concrete examples.

---

### C-09: Acronym Storm Without Legend (ENTRY-POINT line 78-79)

**Problem:** "DD/OD/AD/CD. Zero deletions."

**Confusion:** What are DD, OD, AD, CD? Are these phases? Dimensions? File types?

**Resolution status:** PARTIALLY RESOLVED in design-system/CLAUDE.md (validated-explorations section), but requires jumping to a different file. No inline definition.

---

### C-10: "Track 1 vs Track 2" -- Explained AFTER Referenced (ENTRY-POINT line 104)

**Problem:** Track 1 and Track 2 are referenced in line 25, 39 (tier table), but not explained until CLAUDE.md lines 56-86.

**Confusion:** Reading the entry point, I don't know what Track 1 vs Track 2 means when I first encounter it.

**Resolution status:** RESOLVED but OUT OF ORDER. Should be defined BEFORE first use.

---

### C-11: "Always-Load Protocol" -- Sounds Critical But What Is It? (ENTRY-POINT line 106)

**Problem:** "Do NOT skip the always-load protocol. EVERY agent MUST read prohibitions.md + tokens.css"

**Confusion:** Is this just "read these two files" or is there a specific SEQUENCE or METHOD to the "protocol"?

**Resolution status:** RESOLVED in CLAUDE.md lines 28-50, but this is THE most critical instruction and should be in ENTRY-POINT explicitly.

---

### C-12: "Sample 2-4 mechanisms" is Bad -- But I Haven't Seen This Rule Yet (ENTRY-POINT line 108)

**Problem:** "Do NOT use 'sample 2-4 mechanisms.' Identified by ALL 11 research agents as the single most limiting specification."

**Confusion:** Where IS this rule? I haven't encountered it yet in my reading. How do I avoid using a rule I haven't seen?

**Resolution status:** NEVER ENCOUNTERED in my reading path. This appears to be a HISTORICAL rule that was removed, but the warning assumes I know about it.

---

### C-13: Phase-Gated Protocol in CLAUDE.md -- Dense Wall of Rules

**Problem:** CLAUDE.md lines 110-280 present 7 phases with binary rules, absolute prohibitions, and multiple decision gates.

**Confusion:** This is 170 lines of dense protocol. As a first-time reader, I don't know:
- Which parts apply to Middle-tier building (no metaphor)?
- Can I skip Phases 1-3 since Middle has no metaphor?
- Do I start at Phase 4?

**Resolution status:** NEVER EXPLICITLY STATED. I have to infer that Track 1 (Middle-tier) doesn't use the phase-gated protocol, but this is NEVER SAID CLEARLY.

---

### C-14: "Anti-Gravity Rules" Section -- Are These For Me? (CLAUDE.md line 223)

**Problem:** Section titled "ANTI-GRAVITY RULES" with R1-R6.

**Confusion:** As a Middle-tier builder (no metaphor), do these rules apply to me? R1 is about library access during metaphor derivation. If I'm not deriving a metaphor, does R1 apply?

**Resolution status:** UNCLEAR. Rules SEEM to be for Track 2 only, but this is never stated.

---

### C-15: Prohibitions.md -- 353 Lines, Which Are Critical? (prohibitions.md)

**Problem:** Prohibitions.md is mandatory reading (527 lines total with tokens.css). It has 8 ABSOLUTE, 12 CONDITIONAL, 2 META prohibitions.

**Confusion:** Reading this as first contact:
- Which violations instantly fail my build?
- Can I just memorize the 8 ABSOLUTE and skim the rest?
- The CONDITIONAL ones have "documented exceptions" -- where are those exceptions documented?

**Resolution status:** PARTIALLY RESOLVED. The 8 absolute are clearly marked. But the conditional exceptions are INLINE in each prohibition -- I have to read all 353 lines to find them.

---

### C-16: "2px Border Epidemic" -- Historical Context Assumed (prohibitions.md line 137)

**Problem:** Prohibition #9: "NEVER Use 2px Borders (EXCEPT for Confidence Encoding in OD-004 Pattern)"

**Confusion:** What is "OD-004"? Why is 2px an "epidemic"? This reads like I should already know about a past problem.

**Resolution status:** NEVER EXPLAINED. I have to accept this rule without understanding WHY it exists.

---

### C-17: Tokens.css -- 174 Lines, What's IMMUTABLE vs Available?

**Problem:** tokens.css has 65 tokens. Comments say "IMMUTABLE — soul" for some, "MUTABLE — accent" for others, "AVAILABLE — zone differentiation" for others.

**Confusion:** What does IMMUTABLE mean? Can I NEVER change it? Or can I choose between immutable values? What's the difference between MUTABLE and AVAILABLE?

**Resolution status:** NEVER DEFINED in tokens.css. I have to infer from context.

---

### C-18: Mechanism Catalog -- 869 Lines, Where Do I Start?

**Problem:** mechanism-catalog.md is THE vocabulary file. It's 869 lines with 18 mechanisms.

**Confusion:** As a Middle-tier builder needing 8-10 mechanisms:
- Do I read all 18 and pick 8-10?
- Is there a recommended starter set?
- Lines 681-703 have a "selection flow" -- should I read this FIRST?

**Resolution status:** SELECTION FLOW EXISTS but is buried at line 681. Should be at the TOP.

---

### C-19: "Metaphor Independence" Column in Table -- What Does This Mean? (mechanism-catalog.md line 648)

**Problem:** Table shows mechanisms with "VERY HIGH / HIGH / MEDIUM" metaphor independence.

**Confusion:** Does "VERY HIGH" mean I SHOULD use it? Or just that it CAN be used in many contexts? Is this a quality score or a flexibility score?

**Resolution status:** UNCLEAR. I infer it's flexibility, but not stated.

---

### C-20: Tension-Composition Skill -- Is This For Middle-Tier? (SKILL.md line 1-200)

**Problem:** The skill is titled "tension-composition" and the entire first 200 lines are about deriving metaphors through tension.

**Confusion:** The tier table said Middle has NO METAPHOR. So do I skip this entire skill? Or are parts of it relevant?

**Resolution status:** NEVER STATED. I assume I skip it, but maybe I'm wrong?

---

### C-21: "Library Access Prohibition" -- But I'm Not Using Library? (SKILL.md line 69)

**Problem:** "YOU MUST NOT read the following during Phases 0-3: case-studies/"

**Confusion:** If Middle-tier has no metaphor, do I even HAVE phases 0-3? This prohibition assumes I'm running the pipeline.

**Resolution status:** INAPPLICABLE to Middle-tier, but this is NEVER SAID.

---

### C-22: Perceptual Auditing -- 48 Questions, Do I Answer All? (perceptual-auditing SKILL.md)

**Problem:** The skill defines "48 PA questions + quantitative guardrails."

**Confusion:** Do I answer all 48? Lines 72-81 show "Tier 1: The Mandatory Five" -- does this mean I ONLY answer 5 for Middle-tier?

**Resolution status:** PARTIALLY RESOLVED. "Tier 1" seems to mean "always required" not "Floor tier only." But the naming is confusing.

---

### C-23: Session Insights -- 10 Insights, Are These Instructions? (00-LIVING-DOCUMENT.md)

**Problem:** Document shows 10 insights (I-01 through I-10), each marked "NOT YET APPLIED."

**Confusion:** These are insights FROM a conversation, not instructions TO me. But they're in my reading path. Do I apply them? Ignore them? Learn from them?

**Resolution status:** UNCLEAR PURPOSE. Reads like research notes, not operational guidance.

---

### C-24: Session Insights Reference Modifications Not Yet Made

**Problem:** I-04 says "This framing emerged from conversation and is NOT currently documented as a tier distinction."

**Confusion:** So the document I'm reading contains FUTURE WORK, not CURRENT STATE? How do I know what's real vs aspirational?

**Resolution status:** DOCUMENTATION CONTAMINATION. Research artifacts mixed with operational guidance.

---

## CONFUSION SEVERITY TIERS

### CRITICAL (Blocks Work)

1. **C-07:** No guidance on how to build Middle-tier without metaphor
2. **C-11:** Always-load protocol not explicitly stated in entry point
3. **C-13:** Phase-gated protocol applicability to Middle-tier unclear
4. **C-18:** Mechanism selection guidance buried deep in 869-line file

### HIGH (Creates Wrong Mental Model)

5. **C-06:** No mechanism selection criteria in tier table
6. **C-10:** Track 1 vs Track 2 explained after first use
7. **C-14:** Anti-gravity rules applicability unclear
8. **C-20:** Tension-composition skill relevance to Middle-tier unstated

### MEDIUM (Slows Comprehension)

9. **C-02, C-03, C-04:** Historical context assumed (Phase D, Variant B, content adversary)
10. **C-05:** Name Test / Transfer Test referenced before defined
11. **C-09:** Acronym storm (DD/OD/AD/CD) without legend
12. **C-15:** Prohibitions.md severity hierarchy unclear
13. **C-17:** Token mutability classification undefined

### LOW (Annoying But Solvable)

14. **C-01:** File numbering unexplained
15. **C-08:** Addition Test one-liner without examples
16. **C-12:** Warning against rule never encountered
17. **C-16:** Historical context (2px epidemic) assumed
18. **C-19:** Metaphor independence meaning unclear
19. **C-23, C-24:** Research notes in operational reading path

---

## SESSION INSIGHTS RESOLUTION STATUS

**Did 00-LIVING-DOCUMENT.md resolve my confusions?**

### What It HELPED With:

- **I-04:** Explained tier distinction (individual → combination → multi-pattern) -- RESOLVES C-07 partially
- **I-03:** Semantic value test -- gives me a framework I didn't have before
- **I-09:** Validation framework -- tells me how my work will be evaluated

### What It DIDN'T Help With:

- All the acronyms (C-02, C-03, C-04, C-09) -- still unexplained
- Track 1 vs Track 2 distinction (C-10) -- mentioned but not defined
- Which files apply to Middle-tier (C-13, C-14, C-20, C-21) -- still unclear
- Mechanism selection criteria (C-06, C-18) -- still buried

### What It MADE WORSE:

- **C-24:** Now I know the documentation contains ASPIRATIONAL content (insights not yet applied), making me doubt what's real vs planned

---

## WHAT WOULD HAVE HELPED

### 1. Middle-Tier Quick-Start Guide (NEW DOCUMENT NEEDED)

A single file: `ephemeral/doc-enrichment/middle-tier-quickstart.md`

Contents:
```
# Building a Middle-Tier Page -- Quick Start

## What You're Building
- 8-10 mechanisms from the catalog
- NO metaphor derivation
- NO tension-composition skill
- Track 1 approach (assembly, not composition)

## Reading Path (30 min)
1. prohibitions.md (8 ABSOLUTE prohibitions only)
2. tokens.css (skim, use as reference)
3. mechanism-catalog.md (selection flow at line 681 FIRST, then mechanisms)

## Selection Criteria
Pick 8-10 mechanisms where:
- Mechanism serves a content need (hierarchy? code? comparisons?)
- Mechanisms don't conflict (check compatibility table line 707)
- At least 1 mechanism per category: Spatial / Temporal / Material / Behavioral / Relational

## Build Process
1. Identify content structure (sections, callouts, code blocks, data)
2. Map content needs to mechanisms (selection flow line 681)
3. Deploy mechanisms using token values (no custom values)
4. Audit with perceptual-auditing skill (Tier 1 mandatory five)

## What NOT to Do
- Do NOT run tension-composition skill (that's Track 2)
- Do NOT read case-studies/ (that's for verification, not building)
- Do NOT skip prohibitions.md (ALWAYS-LOAD protocol)
```

### 2. Acronym / Term Glossary (ADD to ENTRY-POINT)

At the TOP of 03-ENTRY-POINT.md, before "WHERE WE ARE":

```
## TERM GLOSSARY (First-Time Readers Start Here)

- **Phase D:** Validation phase testing the extraction protocol (COMPLETE as of 2026-02-15)
- **Variant B:** Best-performing test configuration (weak permission framing)
- **DD/OD/AD/CD:** Validated exploration categories (Density/Organizational/Axis/Combination Dimensions)
- **Track 1:** Assembly approach (no metaphor, 45-90 min)
- **Track 2:** Composition approach (metaphor-driven, 3-5 hrs)
- **Middle-tier:** 8-10 mechanisms, no metaphor, 70-100 min build time
- **Always-load protocol:** MUST read prohibitions.md + tokens.css before ANY work
```

### 3. Clear Applicability Labels (ADD to all major sections)

Every major section should have an applicability label:

```
## ANTI-GRAVITY RULES
**Applies to:** Track 2 (metaphor-driven composition) ONLY
**Skip if:** Building Track 1 (Middle-tier, Floor-tier)
```

### 4. Mechanism Selection Flow FIRST (REORDER mechanism-catalog.md)

Current order: Definition → 18 mechanisms → Selection flow (line 681)

Better order: Selection flow → Mechanism summary table → 18 mechanisms

### 5. Track 1 vs Track 2 BEFORE First Use (REORDER ENTRY-POINT)

Move the Track 1/Track 2 distinction to line 17 (RIGHT AFTER the tier model table), not buried in line 104.

---

## CRITICAL ARCHITECTURE GAP

**The documentation assumes builders will read EVERYTHING and infer what applies to them.**

**Reality:** Builders scan for "what do I do next?" and skip irrelevant sections.

**Fix:** Every document needs:
1. "This applies to: [Track 1 / Track 2 / Both]"
2. "Skip this if: [building Middle-tier / no metaphor / etc]"
3. "Required reading" vs "Optional context"

---

## QUANTIFIED CONFUSION BURDEN

| Reading Phase | Lines Read | Confusions Encountered | Confusions Resolved | Net Confusion |
|---------------|-----------|----------------------|-------------------|---------------|
| START-HERE (12 lines) | 12 | 1 (C-01) | 0 | +1 |
| ENTRY-POINT (125 lines) | 125 | 12 (C-02 through C-12, C-23, C-24) | 0 | +12 |
| CLAUDE.md (510 lines) | 510 | 4 (C-13, C-14, plus partial C-10) | 2 (C-08, C-10) | +2 |
| prohibitions.md (353 lines) | 353 | 3 (C-15, C-16, C-17) | 0 | +3 |
| tokens.css (174 lines) | 174 | 1 (C-17 reinforced) | 0 | +1 |
| mechanism-catalog.md (869 lines) | 869 | 2 (C-18, C-19) | 1 (C-05) | +1 |
| tension-composition (200 lines) | 200 | 2 (C-20, C-21) | 0 | +2 |
| perceptual-auditing (100 lines) | 100 | 1 (C-22) | 0 | +1 |
| session-insights (262 lines) | 262 | 2 (reinforced C-23, C-24) | 3 (C-07 partial, I-03, I-09) | -1 |

**Total:** 2,605 lines read, 24 confusions encountered, 6 resolved, **net +18 unresolved confusions**

**Confusion density:** 1 confusion per 109 lines

**Worst offender:** ENTRY-POINT.md (12 confusions in 125 lines = 1 per 10 lines)

---

## RECOMMENDATIONS (Priority Order)

### P0 (CRITICAL -- Blocking New Builders)

1. **Create Middle-tier quick-start guide** (eliminates C-07, C-13, C-18, C-20)
2. **Add term glossary to ENTRY-POINT** (eliminates C-02, C-03, C-04, C-09)
3. **Add always-load protocol to ENTRY-POINT explicitly** (eliminates C-11)

### P1 (HIGH -- Improves Mental Model)

4. **Add applicability labels to all major sections** (eliminates C-14, C-21)
5. **Define Track 1/Track 2 BEFORE first use** (eliminates C-10)
6. **Reorder mechanism-catalog.md** (selection flow first) (eliminates C-18)
7. **Add mechanism selection criteria to tier table** (eliminates C-06)

### P2 (MEDIUM -- Reduces Friction)

8. **Define Name Test / Transfer Test inline** (eliminates C-05)
9. **Add token mutability legend** (eliminates C-17)
10. **Clarify prohibitions.md severity** (eliminates C-15)
11. **Separate research notes from operational docs** (eliminates C-23, C-24)

### P3 (LOW -- Polish)

12. **Explain file numbering** (eliminates C-01)
13. **Add Addition Test examples** (eliminates C-08)
14. **Add historical context notes** (eliminates C-12, C-16)
15. **Define metaphor independence** (eliminates C-19)

---

## FINAL VERDICT

**As a first-time builder, I would be CONFUSED and BLOCKED.**

**What I know after reading 2,605 lines:**
- I need to build a Middle-tier page
- I need 8-10 mechanisms
- I must read prohibitions.md and tokens.css first
- I must NOT use border-radius > 0 or box-shadow

**What I DON'T know:**
- HOW to select which 8-10 mechanisms
- HOW to structure a page without a metaphor
- WHETHER I skip the tension-composition skill entirely
- WHICH parts of the 2,605 lines apply to Middle-tier

**The gap:** Documentation is comprehensive but NOT NAVIGABLE for task-specific work.

**The fix:** Task-specific entry points (quick-start guides) that CURATE the comprehensive docs.

---

## BUILDER AGENT SIMULATION COMPLETE

This review represents EVERY confusion point I encountered following the documented reading path as a zero-context builder. The confusions are REAL impediments to starting work confidently.

**Confidence to start building after reading path:** 3/10
**Confidence I understand what Middle-tier means:** 4/10
**Confidence I can select mechanisms correctly:** 2/10
**Confidence I'll pass the audit:** 5/10

**OVERALL:** I would need to ASK THE USER before proceeding, which defeats the purpose of comprehensive documentation.

---

**END FRESH-EYES REVIEW**
