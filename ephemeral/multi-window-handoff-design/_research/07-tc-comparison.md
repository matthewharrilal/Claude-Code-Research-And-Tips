# Where Conviction Lives: The TC Skill in Practice

The TC skill (841 lines) and the pipeline's TC invocation (inside /build-page SKILL.md) are not competing approaches -- they are the SAME approach at different integration levels. The pipeline embeds the TC skill VERBATIM into Window 1's prompt. The real comparison is between what the TC skill prescribes and what a builder actually produces when working inside that prescription. The gap between intent and practice reveals where conviction flourishes and where it collapses into specification.

---

## Part 1: How TC Enters the Builder's World

The `/build-page` SKILL.md (v2) does not invoke TC as a separate agent. TC is combined with BUILD in Window 1.

**Step 1.1** reads 7 reference files:
```
[A] world-description.md              -> WORLD_DESCRIPTION
[B] TC SKILL.md (full 841 lines)      -> TC_SKILL
[C] Content markdown                  -> RAW_CONTENT
[D] prohibitions.md                   -> PROHIBITIONS
[E] tokens.css                        -> TOKENS
[F] mechanism-catalog.md              -> MECHANISM_CATALOG
[G] components.css                    -> COMPONENTS_CSS
```

**Step 1.2** concatenates into a single prompt:
```
1. 8-line receiving principle
2. 3-file output requirement (output.html, _tc-brief.md, _reflection.md)
3. WORLD_DESCRIPTION (~18 lines)
4. TC_SKILL (full 841 lines)           <- THE ENTIRE TC SKILL
5. RAW_CONTENT (variable, 500-8000 lines)
6. "STOP. Write your conviction brief before reading vocabulary files."
7. PROHIBITIONS + TOKENS
8. MECHANISM_CATALOG
9. COMPONENTS_CSS
10. CONVENTIONS (14-line mechanical constraint list)
11. BUILD instructions (15 lines)
```

**Step 1.3** spawns a single Opus agent with this combined prompt.

The TC skill is already inline. The agent derives tension, writes a conviction brief, AND builds the HTML -- all in one context window. There is no separation between creative derivation and creative construction. The builder who discovers the metaphor is the same builder who implements it.

---

## Part 2: What the TC Skill Envisions

The TC skill (Phase 4.5) prescribes a Conviction Brief with 6 sections:

| Section | What it carries | Approximate length |
|---------|----------------|-------------------|
| WORLD-DESCRIPTION | Metaphor as natural law, content gravity, BECAUSE statement, risk profile | ~12 lines |
| CALIBRATION | Hex progressions, spatial arcs, type arcs, creative ranges | ~10 lines |
| OPPOSITION MAP | 3-5 tensions as creative invitations, dominant + unresolved opposition | ~15 lines |
| COMPOSITIONAL ARC | Experiential journey, transition feelings, climax, resolution, waypoints | ~20 lines |
| CREATIVE CONDITIONS | 3-5 experimental invitations, exploratory questions | ~10 lines |
| CONTENT MAP | Section outline, register annotations, emotional arc, word counts | ~15 lines |

Total target: 80-120 lines. The design intention: make the builder "want to create THIS page, not verify they haven't violated a checklist."

The prescribed format carries conviction, direction, opposition, invitation. It deliberately excludes mechanisms, thresholds, and compliance checks. The CALIBRATION section specifies hex values that inherently satisfy perceptual thresholds without naming those thresholds -- constraint embedded as aesthetic choice rather than stated as rule.

---

## Part 3: What a Builder Actually Wrote

The Gas Town brief (`_tc-brief.md`, 75 lines) deviates from the prescription in ways that illuminate where conviction naturally lives and where it naturally collapses.

| Section | TC Skill's Vision | What the Builder Actually Wrote |
|---------|------------------|-------------------------------|
| WORLD-DESCRIPTION | Metaphor as natural law, BECAUSE statement, risk profile | **Conviction-dense.** 10 lines of vivid world-building: "This page is a frontier garrison." Rooms described, progression stated as experience. No explicit BECAUSE statement but reasoning is embedded. No explicit risk profile. |
| CALIBRATION | Hex progressions, spatial arcs, type arcs, creative ranges | **Replaced with mechanism list.** 14 numbered mechanisms with metaphor-grounded justifications. Hex values embedded per-mechanism. This is a mechanism deployment plan, not calibration ranges. Also includes 4 rejected mechanisms with reasons. |
| OPPOSITION | 3-5 tensions as creative invitations | **Three paragraphs of creative stance.** "What the content resists: Beauty." "What I refuse to do." Reads as personal commitment, not tension analysis. |
| ARC | Experiential journey with transition feelings, climax, resolution | **5-phase scroll journey** (Opening/Rising/Peak/Descent/Resolution) with percentage depths. Both experiential AND structural. Close to the vision. |
| CONTENT MAP | Register annotations, word counts, emotional arc | **12-row transition table** with Zone, Background hex, Density, Transition type, Mechanisms. Closer to build specification than content map. No word counts, no register annotations. |
| CREATIVE CONDITIONS | 3-5 experimental invitations | **Missing entirely.** |

### The Bifurcation

The brief naturally split into two territories:

**Conviction territory** (WORLD-DESCRIPTION, OPPOSITION): These sections read like a creative manifesto. "I refuse to make this feel like a software documentation page." This is precisely what the TC skill was designed to produce -- creative conviction that makes a builder want to BUILD rather than COMPLY.

**Specification territory** (CALIBRATION as mechanism list, CONTENT MAP as transition table): These sections read like a build plan. 14 mechanisms with hex values, zone-by-zone background assignments, transition types. This is what the TC skill was designed to PREVENT the brief from becoming.

The builder naturally gravitates toward conviction when the creative territory is clear (world-building, opposition) and toward specification when it is uncertain (mechanism selection requires concrete decisions). The brief has a conviction gradient: it starts with soul and ends with logistics.

---

## Part 4: Six Lenses on the Gap

### Lens A: Depth of Creative Exploration

The TC Skill prescribes deep questioning: 14 possible axes (4 core + 5 extended + 5 conditional), each with specific deployment criteria. The Opposition Principle predicts which axes will be richest. Three tests gate tension quality: Addition Test (genuine vs cosmetic), BECAUSE test (content-specific vs manufactured), SUBSTITUTION test (content-coupled vs generic).

The actual brief shows no evidence of this systematic process. No axis table, no tension spectrum, no explicit test results. The OPPOSITION section contains genuine creative tension ("Beauty vs pragmatic tone") but as a single intuition, not a systematic derivation across 14 axes.

What this reveals: the TC skill prescribes breadth of exploration. The builder achieved depth on a narrow front. Systematic questioning prevents blind spots; intuitive questioning finds the richest vein faster. The protocol guarantees coverage; the instinct finds gold. Both have value; they serve different purposes.

Evidence from the brief: the Opposition section identifies one tension. The TC skill prescribes 3-5. The brief's single tension is strong but narrow. The question is whether broader questioning would have found additional tensions that enriched the composition, or whether the builder's instinct correctly identified the ONE tension that mattered.

### Lens B: Conviction vs Extraction

The TC Skill designed the conviction brief explicitly for creative energy, not compliance: "The brief makes the builder want to create THIS page, not verify they haven't violated a checklist."

The actual output oscillates. WORLD-DESCRIPTION and OPPOSITION carry pure conviction -- passionate, vivid, personal. CALIBRATION (renamed to mechanism list) carries extracted specifications -- 14 numbered mechanisms with specific hex values and deployment locations. CONTENT MAP is a specification table.

The builder's relationship to the TC skill's format is telling:
- TC skill prescribes: "The surface zone breathes at 64-80px padding" (a RANGE that invites creative choice)
- Actual brief writes: "#1E1E1E" and "#FEF9F5" and "#FAF5ED" (SPECIFIC VALUES that close down creative space)
- TC skill prescribes: "Background arc: the specific hex progression" (stated as gradient)
- Actual brief writes: 14 numbered mechanisms with "[N]", "[H]", "[D]", "[S]", "[C]" category tags (a deployment plan)

Ranges invite creation. Specific values invite compliance. The builder converted creative ranges into concrete decisions -- possibly because concrete decisions feel safer, or because the combined TC+BUILD architecture pressures the builder to plan implementation while still writing conviction.

### Lens C: Content Understanding

The TC Skill's multi-axis questioning forces engagement with content across 9+ dimensions (FEEL, UNDERSTAND, DO, BECOME, NAVIGATE, TRUST, EVALUATE, ORIENT, RECONCILE).

The actual brief demonstrates deep content understanding through direct engagement rather than systematic questioning: "Yegge explicitly says 'Stop trying to make your agent system beautiful. Make it PRODUCTIVE.' The content has a deliberately anti-aesthetic stance -- Gas Town is named after ugliness. But the 8-role architecture IS elegant."

The builder sees the tension between the content's self-deprecation and its actual sophistication. This is genuine insight, arrived at through reading and reaction rather than structured methodology. The confirmation comes from the reflection: "The garrison metaphor adds a DIMENSION the content does not have on its own: command hierarchy, institutional discipline, operational urgency."

Systematic questioning produces broader understanding (9+ axes guarantee coverage). Intuitive engagement produces deeper understanding on the richest vein. The systematic approach prevents blind spots; the intuitive approach finds the heart faster. The ideal is both -- breadth that surfaces the territory, depth that inhabits the richest part of it.

### Lens D: Feeling vs Specification

The TC Skill prescribes feeling: "what the reader EXPERIENCES" with transition FEELINGS, "creative invitations, not problems to solve," "things the builder COULD try, not things the builder MUST verify."

The WORLD-DESCRIPTION succeeds at creating feeling:

> "This page is a frontier garrison. Not a castle -- castles are defensive and inward-looking. Not a factory -- factories are repetitive and mechanical. A garrison is a small, deliberate outpost planted in hostile territory with a specific mission: turn a solo operator into a coordinated force."

Reading this, you can see the world. You want to build in it.

The CALIBRATION section collapses feeling into specification:

> "1. **Dark Header + 3px Primary Border** [N] -- The command post. Dark background, red accent."

The "[N]" category tag reveals the mechanism-catalog taxonomy leaking through as LABELING rather than FEELING. The metaphor vocabulary ("command post") dresses a specification in creative language but does not achieve the same thing as genuine creative conviction.

The builder gravitates toward feeling when the creative territory is vivid and toward specification when concrete decisions demand attention. This is not a failure of the TC skill but a revelation about the nature of creative work: conviction lives most naturally in world-building and opposition. It struggles to survive in mechanism selection and spatial planning, where the pressure to decide specific values overwhelms the invitation to explore ranges.

### Lens E: Recency and Granularity

The TC Skill at 841 lines is the most thoroughly iterated creative methodology in the system. It contains the full 5-phase pipeline, 14 axes, tension derivation methodology, metaphor evaluation framework, compositional architecture guidance, fractal consistency, conviction brief format.

The pipeline adds integration around the TC skill without modifying it:
- The "STOP" barrier (write brief before reading vocabulary)
- The receiving principle (5-point creative orientation)
- The conventions block (14 mechanical constraints)
- The build instruction (15 lines of boundary-by-boundary building guidance)

Nothing is removed. The full 841 lines are embedded verbatim. The TC skill is more granular in METHODOLOGY (how to derive tension). The pipeline is more granular in INTEGRATION (how derivation connects to building, evaluation, and refinement).

### Lens F: Creation vs Compliance

The TC Skill designed its output explicitly for creation: "The Conviction Brief makes the builder want to create THIS page, not verify they haven't violated a checklist." The CREATIVE CONDITIONS section prescribes "experimental invitations -- things the builder COULD try."

The actual brief creates in its best sections. WORLD-DESCRIPTION is a creative manifesto that invites building. OPPOSITION is a creative stance that demands resolution through making. ARC provides a narrative structure the builder can inhabit.

But the CALIBRATION section shifts from creation to compliance. When the brief lists "14 mechanisms I will deploy," it becomes a checklist. The builder is executing a pre-specified plan rather than exploring. The category tags ([N], [H], [D], [S], [C]) are mechanism-catalog labels, not creative vocabulary.

**The source of this tension lives in the TC skill itself.** Phase 4 says "For EACH mechanism you deploy: one sentence on WHY it serves THIS content at THIS location." Phase 4.5 says the conviction brief carries conviction, not "mechanisms, thresholds, and compliance checks." The builder resolved this contradiction by putting the mechanism list IN the brief under CALIBRATION, merging Phase 4 output with Phase 4.5 format. This is the pragmatic choice, but it introduces specification into the conviction document.

---

## Part 5: What the Comparison Reveals

### The TC Skill Contains a Structural Tension

Phase 4 asks for explicit mechanism documentation. Phase 4.5 says the conviction brief should not carry mechanisms. These point in opposite directions. The builder resolved it pragmatically (mechanisms go in the brief), but the resolution undermines the conviction-vs-specification design intent.

For a combined TC+BUILD window, this tension produces a question: WHERE does mechanism selection belong? Either the brief carries mechanisms (accepting partial specification) or mechanism selection happens after the brief (keeping the brief as pure conviction). The current architecture leaves this ambiguous, and the builder fills the ambiguity with specification -- the path of least creative resistance.

### The Systematic Methodology Was Not Visibly Followed

No axis tables, no tension spectrum, no explicit test results in the actual brief. The builder appears to have used creative intuition rather than the systematic 14-axis protocol. This suggests either:
- The builder's instincts were strong enough to find the right metaphor without the protocol
- The protocol was mentally processed but not documented
- The 841-line skill was too dense to actively follow while simultaneously building

The TC methodology's value lies in forcing systematic exploration -- ensuring the builder examines terrain they might otherwise skip. When the builder jumps directly to "I see a garrison metaphor," metaphor quality depends entirely on creative instinct rather than structured discovery. The Gas Town builder's instincts were strong. The question is whether the protocol would help a builder whose instincts are not.

### Conviction Lives Where the TC Skill Designed It To

| Quality | Sections | TC Skill's Design |
|---------|----------|-------------------|
| Pure conviction (the brief's best writing) | WORLD-DESCRIPTION, OPPOSITION | Exactly what TC prescribes |
| Narrative structure (close to vision) | ARC | Near the prescription |
| Build specification (deviates from vision) | CALIBRATION, CONTENT MAP | Not what TC prescribes |
| Missing | CREATIVE CONDITIONS | TC prescribes but builder skipped |

The TC skill's conviction-focused sections WORK. The builder produces vivid, personal, architecturally rich prose in sections where the TC skill provides vivid guidance. The builder defaults to specification in sections where the TC skill's guidance is more abstract (CALIBRATION as "ranges" is conceptually unclear; mechanism lists are concrete and safe).

The insight: conviction emerges from vivid creative prompting. Specification emerges from abstract structural prompting. When the TC skill says "describe the world your page inhabits," the builder creates. When it says "specify calibration ranges," the builder specifies. The format of the invitation shapes the nature of the response.

### The "STOP" Barrier Appears to Have Worked

The WORLD-DESCRIPTION and OPPOSITION sections show no vocabulary contamination -- no mechanism-catalog terminology, no component names, no CSS values. The metaphor derivation happened before vocabulary access. The "[N]", "[H]", "[D]", "[S]", "[C]" tags in CALIBRATION suggest the builder consulted the mechanism catalog AFTER deriving the metaphor, as intended. The barrier between creative derivation and vocabulary deployment held.

### The Brief's Real Audience

In the combined TC+BUILD window, the builder who writes the brief does not need to read it -- they just wrote it. The brief exists as handoff tissue to Window 3 (REFINE). For that audience, the brief is powerful in world-description and opposition (the REFINE builder will understand the creative intent) but the mechanism list is redundant -- the REFINE builder will see the actual HTML, which is more informative than a mechanism deployment plan.

### The TC Skill is Two Documents in One

The 841-line skill contains:
- **Creative atmosphere** (~500 lines): WHY each phase matters, examples, failure modes, diagnostic heuristics
- **Execution protocol** (~340 lines): Steps to follow, tables to fill, tests to apply, output format

For standalone invocation, both are essential. For embedding alongside 2000+ lines of other material, the atmospheric content creates selective attention risk -- the builder may absorb the creative philosophy and lose the execution steps, or follow the steps and miss the philosophy. The solution is not compression (the atmospheric content shapes how the builder thinks, even when specific phases are skipped) but clarity about which sections serve which purpose.

### Quality Correlates with Caring, Not Methodology

The WORLD-DESCRIPTION is the brief's best section -- vivid, personal, architecturally rich. The builder wrote it with genuine creative excitement. The CONTENT MAP is the weakest -- a mechanical table. The builder wrote it as an obligation.

This supports a core insight about creative work: the quality of the output depends on whether the builder CARES about what they are creating, not on whether they followed a systematic protocol to arrive at it. The TC skill's questioning methodology might FIND the garrison metaphor, or the builder's intuition might find it faster. Either way, the writing comes alive when the builder has conviction and goes flat when they are filling in required fields.

---

## Part 6: Where This Points

**TC + BUILD belong together.** The actual brief demonstrates that creative continuity (WORLD-DESCRIPTION flowing directly into OPPOSITION flowing directly into construction) produces the brief's best sections. Separating derivation from building would sever this creative flow.

**The Phase 4 / Phase 4.5 tension deserves resolution.** The cleanest path: the brief carries CONVICTION ONLY (world, opposition, arc, creative conditions). Mechanism selection becomes a separate `_build-plan.md` output. This keeps the brief's audience (REFINE builder) served with conviction, and the builder's audience (themselves) served with a build plan. The two documents serve different purposes; merging them dilutes both.

**The TC skill at 841 lines is at its correct form.** The brief's best sections draw from the skill's conviction-focused design, and the atmospheric depth (teaching content) contributes to the builder's creative orientation even when specific phases are skipped. Compressing it to 120 lines would lose the atmospheric effect that shapes creative thinking.

**CREATIVE CONDITIONS deserves enforcement or honest optionality.** This section was entirely missing from the actual brief -- the 5th of 6 prescribed sections. Either it matters (make the template enforce it) or it does not (acknowledge it as optional). The current ambiguity allows the builder to skip the most invitation-oriented section of the brief.

**Vivid prompting produces conviction; abstract prompting produces specification.** The TC skill's own format could learn from this: wherever CALIBRATION says "specify ranges," it could instead say "describe the palette's emotional arc." The same information (hex progressions) arrives, but framed as creative expression rather than technical specification.
