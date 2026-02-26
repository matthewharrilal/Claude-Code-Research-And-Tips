# Fresh-Eyes Usability Audit — Pipeline v3 (Iteration Support)

**Auditor:** Fresh-eyes Opus agent (zero pipeline history context)
**Date:** 2026-02-25
**Files read:** SKILL.md (99 lines), MANIFEST.md (1,300 lines), artifact-orchestrator.md (1,193 lines), EXECUTION-TRACKER-TEMPLATE.md (162 lines), gate-manifest.json (326 lines)
**Reading order:** SKILL.md -> MANIFEST quickstart -> orchestrator Section 7 -> tracker -> gate-manifest.json -> MANIFEST Appendix E

---

## First Impressions

**What worked:**

1. **SKILL.md is an excellent entry point.** 99 lines. It tells me exactly what files exist, where they live, and what each one contains. The table layout with file-to-purpose mappings is immediately scannable. I knew within 30 seconds which files I needed and where they were.

2. **MANIFEST quickstart (steps 0-11) is genuinely usable.** The numbered procedure with parenthetical cross-references ("Section 4, Phase 0") gives me a linear path to follow while pointing to detail if I need it. I could execute steps 0-8 from the quickstart alone without reading anything else.

3. **The BEFORE / DURING / AFTER checklist in Section 7 is the single best UX in the entire pipeline.** Each item is a yes/no question with a STOP action if the answer is wrong. This is exactly what a busy orchestrator needs when entering a high-stakes decision path under time pressure.

4. **The tracker template is well-designed.** Phase-by-phase structure, (auto) vs (manual) annotations, the Iteration Log table, the "Derived Phase Completion" section at the bottom. I would know what to fill in for most fields.

5. **The "STOP HERE FOR EXECUTION" comment at line 785 of the orchestrator** is a lifesaver. Without it, I would have kept reading into 400+ lines of experimental, historical, and diagnostic content that has zero relevance to execution.

**What confused me:**

1. **MANIFEST is 1,300 lines.** Even though the quickstart is at the top, the sheer file size creates anxiety. When I opened it, my first reaction was "this is going to take a long time" — before I found the quickstart at line 10. A fresh orchestrator who starts skimming instead of reading sequentially will drown in the agent roster tables, routing tables, and appendices.

2. **The orchestrator is 1,193 lines.** Even with the STOP marker, Sections 0-9 are still ~785 lines. That is a LOT to internalize. Most of it is ITEM citations (historical provenance references like `**ITEM 95** (extract-d01-d03.md L242)`) that are completely irrelevant to execution. These citations add ~30-40% to the line count without adding any execution information.

3. **"Section 7" is named "Phase 4" in the orchestrator** (line 533: `## SECTION 7 (Phase 4): VERDICT AND DECISION TREE`). SKILL.md says "artifact-orchestrator.md Section 7" but the actual heading combines both numbering systems. This is fine once you know the convention, but on first encounter the Phase/Section mismatch adds cognitive load.

4. **Gate count discrepancy between SKILL.md and gate-manifest.json.** SKILL.md says "47 gates" (line 46/50/76). gate-manifest.json says "54 gates" (line 2: `Total: 54 gates (21 REQ + 13 REC + 10 ADV + 2 DIAG + 7 BV + 1 UTIL)`). The SKILL.md number appears stale — it references "18 REQ + 8 REC + 7 ADV + 4 BV" (line 50) while the manifest says 21 REQ + 13 REC + 10 ADV + 7 BV. **This is a concrete integrity failure.** A fresh orchestrator would not know which number to trust.

5. **The MANIFEST says "Pipeline v3"** throughout, but gate-manifest.json header says "Pipeline v4" (line 5: `description: "Gate Runner manifest — table of contents for the split gate architecture (Pipeline v4)"`). This naming collision is confusing — am I running Pipeline v3 or v4?

---

## Navigation Path

Here is the exact trace of how I moved through files, with timestamps of confusion:

1. **SKILL.md (0:00-2:00)** — Read top to bottom. Clear. Found MANIFEST path, orchestrator path, list of all 9 artifacts + split files. Good orientation.

2. **MANIFEST.md quickstart (2:00-6:00)** — Read lines 1-44 (quickstart). Steps 0-11 are clear. Noted BV-01 through BV-04 in step 4a. Step 11 has the REFINE/REBUILD branching — it says "execute REFINE protocol (artifact-orchestrator.md Section 7)". I know where to go next.

3. **MANIFEST.md agent roster (6:00-10:00)** — Skimmed lines 46-178 (Sections 1-2). The agent roster tables are well-structured. I noted the 9 PA auditor question assignments. The "GATEWAY" note for the Integrative Auditor (line 169) is important — spawn only after 9 reports exist.

4. **Orchestrator Section 7 (10:00-18:00)** — This is where friction begins. I jumped to line 533. The GR-48 precondition (lines 535-544) is essential but dense. The REFINE protocol (lines 561-592) is EXCELLENT — BEFORE/DURING/AFTER is the right structure. But I had to read 60 lines to absorb it, and the ITEM citations mixed in break my reading flow. The REBUILD protocol (lines 601-606) is comparatively simple — 5 steps, clear.

   **STUCK POINT #1 (14:00):** The Iteration Decision Function (lines 615-629) references "GR-70" and "GR-75" as "[embedded here, NOT a programmatic gate]". What does that mean? Are these gates I need to run or not? I eventually inferred that they are logical checks I perform mentally (not code), but the inline bracketed note format is confusing.

5. **Orchestrator Decision Rules, formerly GR-23-28 (18:00-22:00)** — Lines 658-698. These are pre-build checks. Clear enough, but the heading says "Reclassified Wave 3 (FIX-094, FIX-098)" which is meaningless to me. I don't know what FIX-094 is. The checks themselves (GR-23 through GR-28) are straightforward.

6. **EXECUTION-TRACKER-TEMPLATE.md (22:00-26:00)** — 162 lines. Well-structured. The REFINE Phase section (lines 84-107) has the iteration-specific fields. The "Iteration State" field (line 97) with its enum `_INITIAL / REFINE-1 / REFINE-2 / BUDGET-EXHAUSTED_` is self-explanatory. The Iteration Log table (lines 101-105) is clean.

   **STUCK POINT #2 (24:00):** The tracker has fields `REFINE isolation verified` (line 87) and `Post-REFINE mechanical sweep` (line 88). These reference concepts from the orchestrator Section 7. If I hadn't already read Section 7, these field names would be opaque. No inline help text beyond the `(manual)` / `(auto)` tags.

7. **gate-manifest.json (26:00-30:00)** — The `iteration` tier (lines 81-87) clearly lists GR-78, GR-79, GR-80 as code-enforced and GR-70, GR-75 as procedural. The note explains the distinction. This is actually CLEARER than the orchestrator's inline explanation.

   **STUCK POINT #3 (28:00):** The gate counts in the manifest don't match SKILL.md (see above). I spent time trying to reconcile the numbers. This is a trust-damaging inconsistency.

8. **MANIFEST Appendix E, REFINE Builder Template (30:00-34:00)** — Lines 1246-1278. The template is 32 lines and CLEAR. It tells the REFINE builder exactly what to read, in what order, what mode to enter, what verbs to use, and what to output. I could spawn a REFINE builder from this template with high confidence.

   **One concern:** The template says "Read these inputs IN ORDER: 1. The conviction artifact... 2. The artistic impression... 3. The RESIDUAL artifact... 4. The original Execution Brief... 5. The Pass 1 HTML output." These 5 inputs must be assembled by the orchestrator. The orchestrator Section 7 BEFORE checklist (line 565) lists them, but with slightly different names ("conviction artifact" vs "RESIDUAL artifact" vs "original brief"). The correspondence is clear enough but not explicitly mapped.

---

## Clarity Rating (1-5 per section)

| Section | Findability | Clarity | Notes |
|---------|-------------|---------|-------|
| SKILL.md (entry point) | 5 | 5 | Perfect. Concise, complete, well-structured tables. |
| MANIFEST quickstart (steps 0-11) | 5 | 4 | Findable (top of file). Step 11 crams REFINE + REBUILD into one paragraph — could be split. |
| MANIFEST agent roster | 4 | 4 | Tables are clear. Question assignments require cross-referencing pa-deployment.md for full text. |
| MANIFEST Appendix E templates | 3 | 5 | Finding it requires scrolling past ~950 lines of routing tables. But the templates themselves are excellent. |
| MANIFEST Appendix E REFINE template | 3 | 5 | Same findability issue. Content is crystal clear — 32 lines, 5 inputs, mode + verb guidance. |
| Orchestrator Section 7 (REFINE path) | 4 | 3 | BEFORE/DURING/AFTER is great. But ITEM citations, inline gate notes, and the decision function's pseudo-code obscure the core protocol. |
| Orchestrator Section 7 (REBUILD path) | 4 | 5 | 5 steps, completely clear. |
| Orchestrator Decision Function | 4 | 3 | The pseudo-code is clean but the inline "[NOT a programmatic gate]" notes interrupt flow. |
| Orchestrator GR-23-28 (pre-build checks) | 3 | 4 | Content is clear but the heading references FIX-094/FIX-098 which is opaque provenance noise. |
| EXECUTION-TRACKER-TEMPLATE.md | 5 | 4 | Well-structured. The iteration fields need brief inline descriptions (e.g., "REFINE isolation = builder received only artistic impression + conviction, not gates"). |
| gate-manifest.json iteration tier | 4 | 4 | The iteration section is clear. The procedural vs code-enforced distinction is explained well. |

**Overall findability average: 4.0 / 5**
**Overall clarity average: 4.0 / 5**

---

## Recommendations

### HIGH PRIORITY (would cause execution errors)

1. **Fix gate count discrepancy between SKILL.md and gate-manifest.json.** SKILL.md says 47 gates (18 REQ + 8 REC + 7 ADV + 4 BV). gate-manifest.json says 54 gates (21 REQ + 13 REC + 10 ADV + 7 BV + 2 DIAG + 1 UTIL). Update SKILL.md to match the canonical source. This is a concrete integrity failure — a fresh orchestrator would not know which count to trust.

2. **Resolve the "Pipeline v3" vs "Pipeline v4" naming collision.** SKILL.md and MANIFEST.md say "Pipeline v3". gate-manifest.json says "Pipeline v4" in its header. Pick one name and make all files consistent.

3. **Clarify GR-70 and GR-75 as "orchestrator mental checks."** In the orchestrator Section 7 decision function (line 623-624), the inline `[GR-70: PA-05 non-regression — embedded here, NOT a programmatic gate]` notation is confusing. Replace with a clearer formulation like: `# NOTE: GR-70 is a logical check YOU perform here (not code). If PA-05 dropped while Tier 5 rose, HALT.`

### MEDIUM PRIORITY (friction, not failure)

4. **Strip ITEM citations from execution-path content.** Lines like `**ITEM 78** (extract-d01-d03.md L206-210) REFINE: PA-05 2.5-3.5...` add ~30-40% to the orchestrator's line count without adding execution value. Move them to a provenance appendix. The execution-path sections (0-9) should contain only instructions, not archaeological provenance.

5. **Add a 3-line summary to the top of MANIFEST.md.** Something like: "1,300 lines total. **Read only the quickstart (lines 10-44) to execute.** Sections 1-4 are agent routing detail. Appendix E has agent prompt templates. Everything else is reference." This prevents the "oh no, 1,300 lines" reaction.

6. **Add inline help text to tracker iteration fields.** The tracker fields `REFINE isolation verified` and `Post-REFINE mechanical sweep` are opaque without orchestrator Section 7 context. Add a brief parenthetical: `REFINE isolation verified: ___ (manual: YES/NO — builder received ONLY artistic impression + conviction + original brief + Pass 1 HTML, NOT gate results or fix lists)`.

7. **Split MANIFEST quickstart step 11 into sub-steps.** Currently step 11 says "If SHIP WITH FIXES: ... If REFINE: execute REFINE protocol... If REBUILD: execute REBUILD protocol..." This is three paths in one step. Make them 11a, 11b, 11c.

### LOW PRIORITY (polish)

8. **Remove FIX-XXX references from execution-path headings.** `### Orchestrator Decision Rules (formerly GR-23 through GR-28) — Reclassified Wave 3 (FIX-094, FIX-098)` — the "FIX-094, FIX-098" parenthetical is meaningless to a fresh orchestrator. Move to provenance notes.

9. **Add a cross-reference from gate-manifest.json iteration tier back to orchestrator Section 7.** The manifest says "GR-70/GR-75 are orchestrator-procedural checks in the iteration decision function (artifact-orchestrator.md Section 7)" — good. The orchestrator should reciprocate: "For code-enforced iteration gates GR-78/79/80, see gate-manifest.json `iteration` tier."

10. **Consider a one-page REFINE cheat sheet.** The REFINE path is scattered across 3 files: orchestrator Section 7 (protocol), MANIFEST Appendix E (builder template), tracker (iteration fields). A single page that consolidates "here's everything you need for REFINE" would reduce cross-referencing.

---

## Specific Assessment Questions

### 1. Can you follow the REFINE path?

**YES, with moderate effort.** The path is:
- Weaver says REFINE -> Orchestrator reads Section 7 -> BEFORE checklist -> assemble inputs -> spawn REFINE builder (using MANIFEST Appendix E template) -> DURING checklist -> builder produces revised HTML -> AFTER checklist -> return to Phase 3 -> full re-audit.

The BEFORE/DURING/AFTER structure is excellent. The decision function is findable. What slows me down is the cross-file assembly: I need to read orchestrator Section 7 for the protocol, then jump to MANIFEST Appendix E for the builder template, then reference the tracker for iteration fields. This is three files for one action path. It works, but each jump costs ~30 seconds of re-orientation.

**The REFINE builder isolation rules (lines 580-584) are critical and well-stated:** what the builder receives, what it does NOT receive, what verbs to use. These are the highest-value lines in the entire REFINE section.

### 2. Are the iteration fields in the tracker self-explanatory?

**Mostly yes.** `Iteration State` with its enum is self-explanatory. The `Iteration Log` table columns (Cycle, PA-05, Tier5, Gate Pass %, Fix Count, Verdict, Decision) are clear. The `Derived completion check` at line 107 is a smart safeguard.

**Two fields are NOT self-explanatory without Section 7 context:**
- `REFINE isolation verified` — what does "isolation" mean here?
- `Post-REFINE mechanical sweep` — which gates constitute the "mechanical sweep"?

Both could be fixed with a 10-word parenthetical.

### 3. Gate execution for iteration

**The gate-manifest.json is the clearest source.** The `iteration` tier (lines 81-87) explicitly lists GR-78, GR-79, GR-80 as code-enforced iteration gates and GR-70, GR-75 as procedural. The distinction between "run after cycle >= 2" (code gates) and "embedded in orchestrator decision function" (procedural) is stated.

**The orchestrator Section 7 is less clear on this.** GR-70 and GR-75 appear only as inline bracketed notes within the pseudo-code decision function. If I read only the orchestrator, I would not confidently know whether to run them as code or apply them as mental checks. The gate-manifest.json resolves this ambiguity.

**Recommendation:** When an orchestrator hits the decision function, they should be directed to gate-manifest.json's `iteration` tier for the authoritative gate list.

### 4. Information overload

**The breaking point is orchestrator lines 200-530 (Sections 2-6).** These sections describe the pre-REFINE pipeline phases in detail. If I'm reading them for a REFINE pass (where I've already completed the initial build), most of this is review. The STOP marker at line 785 helps but comes AFTER the execution content.

**Total orchestrator execution content: ~785 lines.** Of these, I estimate:
- ~250 lines are ITEM citations (pure provenance, zero execution value)
- ~100 lines are historical/META context mixed into execution sections
- ~435 lines are genuine execution instructions

A fresh orchestrator needs to absorb ~435 lines of real content, embedded in 785 lines of file. That's a 55% signal-to-noise ratio. Usable, but with effort.

### 5. Missing breadcrumbs

**Two gaps found:**

1. **No explicit "when to re-run gates during REFINE."** Orchestrator Section 7 says "Post-REFINE Mechanical Sweep" and lists 5 specific gate IDs (GR-10, GR-18, GR-22, GR-51, GR-52). It then says "re-run ALL gates that FAILED in the initial pass." But there is no single list saying "here are ALL the gates you run during a REFINE cycle, in order." The gate-manifest.json `execution_order` array does not have a separate REFINE ordering. A fresh orchestrator would need to mentally compose the gate list from Section 7 text.

2. **No pointer from tracker to orchestrator Section 7 for REFINE context.** The tracker's REFINE section (lines 84-107) has fields but no "See artifact-orchestrator.md Section 7 for the complete REFINE protocol" breadcrumb. A fresh orchestrator who opens ONLY the tracker would not know where to find the protocol.

### 6. REFINE builder template clarity

**Excellent.** The template at MANIFEST Appendix E lines 1246-1278 is 32 lines. It specifies:
- Role framing ("You are RECOMPOSING within the original builder's metaphor")
- 5 inputs in reading order
- Mode (COMPOSITIONAL, not CORRECTIVE)
- Verb vocabulary (generative vs diagnostic)
- Goal statement
- Output format
- Required RESIDUAL artifact

I could spawn a REFINE builder from this template with high confidence. The only enhancement I would suggest is adding the 5 input variable names to match the orchestrator Section 7 BEFORE checklist, so the orchestrator can mechanically fill in each `{VARIABLE}` without cross-referencing.

---

## Verdict

**NAVIGABLE WITH FRICTION**

The pipeline is executable by a fresh orchestrator. The entry point (SKILL.md) is excellent, the quickstart is usable, the REFINE protocol is well-structured (BEFORE/DURING/AFTER), the tracker captures the right fields, and the REFINE builder template is clear.

The friction comes from three sources:
1. **Volume** — 1,300 + 1,193 = 2,493 lines across the two primary files, of which ~40% is provenance/historical content mixed into execution paths
2. **Cross-file assembly** — the REFINE path requires reading 3 files (orchestrator, MANIFEST Appendix E, tracker) and mentally composing the combined procedure
3. **Stale references** — gate count discrepancy (47 vs 54) and naming collision (v3 vs v4) damage trust and create uncertainty

None of these are blocking. An experienced orchestrator would execute correctly. But the friction budget is high enough that under time pressure or context limits, an orchestrator might skip the BEFORE checklist or forget the Post-REFINE mechanical sweep — and those are the precise moments where the pipeline's quality safeguards live.

**The single highest-ROI fix:** Strip ITEM citations from execution sections of the orchestrator. This alone would reduce it from ~785 to ~530 execution lines and dramatically improve signal-to-noise ratio.
