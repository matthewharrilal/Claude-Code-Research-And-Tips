# Builder Constraint Audit: Exhaustive Catalog

**Scope:** Every constraint, prohibition, cap, and procedural limitation across the 5 builder-facing files that could prevent structural invention.

**Files audited:**
1. `builder-pass-1-prompt.md` (432 lines) -- hereafter **BP1**
2. `builder-pass-2-prompt.md` (411 lines) -- hereafter **BP2**
3. `builder-pass-3-prompt.md` (391 lines) -- hereafter **BP3**
4. `refine-builder-prompt.md` (176 lines) -- hereafter **RB**
5. `SKILL.md` (919 lines) -- hereafter **SKILL**

---

## A. CAPS (Numerical Limits)

### A-01: Maximum 2 structural sections per build (Pass 1)
- **Quote:** "Maximum 2 structural sections per build." (BP1 line 409)
- **Context:** The structural invention permission block. Even when all 4 conditions for structural invention are met, the builder is capped at 2 per build.
- **Quality or Safety:** SAFETY. Prevents structural excess.
- **Prevents AD-006/OD-005 invention?** YES. Those explorations used 3+ non-standard spatial forms. A page with 8 content sections could legitimately warrant 3-4 structural forms, but this cap forbids it.

### A-02: Select 2-3 compositional questions to explore (Pass 1)
- **Quote:** "Select 2-3 questions to explore during your build. Do not attempt all -- depth on 2-3 beats breadth on 5-7." (BP1 line 55)
- **Quality or Safety:** QUALITY. Encourages depth.
- **Prevents invention?** INDIRECTLY. Limits the number of generative threads the builder can pursue. A builder who discovers a question's answer implies a structural form is blocked from pursuing it if they have already hit 3.

### A-03: Maximum 1 structural evolution per Pass 2
- **Quote:** "maximum 1 structural evolution per Pass 2" (BP2 line 129)
- **Also:** "Apply the 3-category framework: maximum 1 structural evolution per Pass 2" (BP2 line 231)
- **Quality or Safety:** SAFETY. Prevents scope creep during enrichment.
- **Prevents invention?** YES. If Pass 1 produced 0 structural sections and Pass 2 discovers 2 opportunities, only 1 can be acted on.

### A-04: Total structural sections capped at 2 across all passes
- **Quote:** "Maximum 2 structural sections total across Pass 1 + Pass 2 (max 2 from P1 + max 1 from P2 = theoretical 3, but practical limit is 2 visible at any time)" (BP3 line 273)
- **Quality or Safety:** SAFETY. Hard cap.
- **Prevents invention?** YES. Same as A-01 but enforced as a final gate in Pass 3.

### A-05: 20-30 line decisions file (Pass 1)
- **Quote:** "A 20-30 line summary of what you built and why." (BP1 line 355)
- **Quality or Safety:** QUALITY. Conciseness aid.
- **Prevents invention?** INDIRECTLY. If a builder makes 5 structural decisions, 20-30 lines is too few to document them thoroughly. This signals "you shouldn't be making that many decisions."

### A-06: 20-30 line decisions file (Pass 2)
- **Quote:** "A 20-30 line summary of what you enriched and why." (BP2 line 312)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** Same as A-05.

### A-07: 40-60 line reflection (Pass 3)
- **Quote:** "A 40-60 line reflection across 7 dimensions" (BP3 line 303)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** No -- this is reflection, not building.

### A-08: 15-25 line feedback (Refine)
- **Quote:** "A 15-25 line summary of what was changed and why" (RB line 121)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** No -- fixes, not creation.

### A-09: 10+ findings deployment target (Pass 2)
- **Quote:** "If fewer than 10 findings were deployed, re-read Section 3 -- you may have been too conservative." (BP2 line 170)
- **Quality or Safety:** QUALITY. Prevents under-deployment.
- **Prevents invention?** INDIRECTLY. Directs builder attention toward deploying pre-curated findings rather than discovering structural opportunities.

### A-10: At least 2 case study techniques (Pass 2)
- **Quote:** "Section 5 case study techniques integrated (at least 2 techniques)" (BP2 line 289)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** INDIRECTLY. Time/attention spent on case study integration is time not spent on structural discovery.

### A-11: 3+ zone boundary channel shifts
- **Quote:** "Zone boundaries must shift 3+ of 6 channels (background, font-family, font-size, spacing, border, color)" (BP1 line 429)
- **Also:** "Zone boundaries should shift 3+ channels" (BP2 line 407, BP3 line 258)
- **Quality or Safety:** QUALITY. Ensures perceptible transitions.
- **Prevents invention?** No -- this is about execution quality, not structure.

### A-12: 8+ component library class instances (Pass 3)
- **Quote:** "8+ component library class instances" (BP3 line 261)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** INDIRECTLY. Requires use of pre-existing component library classes, which pulls toward standard implementations.

### A-13: Maximum 2 fix cycles (SKILL)
- **Quote:** "Maximum 2 fix cycles." (SKILL line 699)
- **Quality or Safety:** SAFETY (cost control).
- **Prevents invention?** No -- fixes, not creation.

### A-14: Quality floor line counts for specialists
- **Quote:** "S1: >= 200 lines ... S2: >= 80 lines ... S3: >= 100 lines ... S4: >= 60 lines ... S5: >= 80 lines" (SKILL lines 292-296)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** No -- these are MINIMUMS, not caps.

### A-15: Package pass target line counts
- **Quote:** "_package-pass-1.md -- Foundations (~280-360 lines)" (SKILL line 333)
- **Also:** "_package-pass-2.md -- Enrichment (~180-230 lines)" (SKILL line 347)
- **Also:** "_package-pass-3.md -- Hardening (~140-180 lines)" (SKILL line 352)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** INDIRECTLY. If the synthesizer produces 400+ lines because structural propositions are rich, the target signals "that's too much."

### A-16: $50 hard spending gate
- **Quote:** "If cumulative upper bound exceeds $50, this is a HARD GATE: PAUSE and report to user" (SKILL line 93)
- **Quality or Safety:** SAFETY (cost control).
- **Prevents invention?** No -- but creates a time pressure that could cause the orchestrator to rush.

---

## B. PROHIBITIONS (Do NOT / Must NOT / Never)

### B-01: Do NOT invent TEXTURE mechanisms (Pass 1)
- **Quote:** "Do NOT invent TEXTURE mechanisms that aren't in the package -- the package was curated by specialists who read the full knowledge base. Trust its selections." (BP1 line 401)
- **Quality or Safety:** QUALITY. Prevents uncalibrated mechanism deployment.
- **Prevents invention?** YES, for texture. No, for structure (explicitly carved out). But the line between "texture mechanism" and "structural form" is ambiguous. A builder who discovers that a particular content section would benefit from a CSS technique not in the package (e.g., a novel border treatment that creates spatial rhythm) is BLOCKED by this rule.

### B-02: Invention NOT acceptable for mechanism deployment (Pass 1)
- **Quote:** "Invention is NOT acceptable for mechanism deployment -- the package specifies which mechanisms to deploy." (BP1 line 250)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES. Even if the builder sees an opportunity to deploy a mechanism not in the package, they are forbidden.

### B-03: Do NOT selectively omit texture instructions (Pass 1)
- **Quote:** "You do NOT selectively omit texture instructions." (BP1 line 431)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** INDIRECTLY. Forces deployment of every mechanism the package specifies, consuming builder attention and CSS budget.

### B-04: Do NOT force structural invention on linear content (Pass 1)
- **Quote:** "Do NOT force structural invention on linear content." (BP1 line 81)
- **Quality or Safety:** QUALITY. Prevents gratuitous structure.
- **Prevents invention?** POTENTIALLY. "Linear content" is a judgment call. A builder who sees narrative content as having a hub-spoke structure might be discouraged by this rule.

### B-05: CRITICAL RULE -- DO NOT rebuild from scratch (Pass 2)
- **Quote:** "CRITICAL RULE: DO NOT rebuild from scratch. Refine what exists." (BP2 line 5)
- **Quality or Safety:** QUALITY. Prevents pass 2 from throwing away pass 1.
- **Prevents invention?** YES. If pass 1 produced a flat standard vertical layout, pass 2 is locked into refining that flat layout rather than reimagining it.

### B-06: Do not create new zones unless Section 4 specifically calls for it (Pass 2)
- **Quote:** "Do not create new zones unless Section 4 specifically calls for it." (BP2 line 50)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES. If the builder realizes during enrichment that the zone architecture needs a new zone (e.g., a breathing zone between two dense zones), they are blocked unless Section 4 happens to specify it.

### B-07: Delete zones that Pass 1 created (Pass 2)
- **Quote:** "DO NOT: Delete zones that Pass 1 created" (BP2 lines 73-74)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** INDIRECTLY. Zones that don't work can't be removed.

### B-08: Rename custom properties (Pass 2)
- **Quote:** "DO NOT: Rename custom properties (this breaks the metaphor vocabulary)" (BP2 line 75)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** INDIRECTLY. If the metaphor vocabulary from Pass 1 is limiting, Pass 2 can't evolve it.

### B-09: Replace the HTML document structure (Pass 2)
- **Quote:** "DO NOT: Replace the HTML document structure (same <!DOCTYPE>, same <head>, same Google Fonts links)" (BP2 line 76)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** No.

### B-10: Remove content that was already placed (Pass 2)
- **Quote:** "DO NOT: Remove content that was already placed" (BP2 line 77)
- **Quality or Safety:** QUALITY. Non-negotiable.
- **Prevents invention?** No -- content preservation is universal.

### B-11: Start with an empty file and rebuild (Pass 2)
- **Quote:** "DO NOT: Start with an empty file and rebuild" (BP2 line 78)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES. Same as B-05.

### B-12: CRITICAL RULE -- Hardening pass, not creative pass (Pass 3)
- **Quote:** "CRITICAL RULE: This is a HARDENING pass, not a creative pass. Do not add new features. Fix, polish, and verify." (BP3 line 5)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES. Pass 3 is explicitly creativity-forbidden. Any structural opportunity the builder sees during hardening CANNOT be acted on.

### B-13: Do NOT add new creative features (Pass 3)
- **Quote:** "DO NOT: Add new creative features (no new zones, no new metaphor expressions)" (BP3 lines 66-67)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES. Absolute prohibition.

### B-14: Do NOT restructure zone architecture (Pass 3)
- **Quote:** "DO NOT: Restructure the zone architecture" (BP3 line 68)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES.

### B-15: Do NOT add new structural inventions in Pass 3 (Pass 3)
- **Quote:** "Do NOT add new structural inventions in Pass 3. If you see a structural opportunity, document it in the reflection as 'Would benefit from structural layout' -- but do NOT implement it. Pass 3 is DEFENSIVE, not creative." (BP3 line 71)
- **Quality or Safety:** SAFETY. Prevents pass 3 scope creep.
- **Prevents invention?** YES. The builder may SEE the opportunity but is forbidden from acting. They can only write a note for... no one. The reflection is not routed back to a creative pass.

### B-16: Do not re-add question-driven CSS (Pass 3)
- **Quote:** "If question-driven CSS was removed or diluted during enrichment, note it but do NOT re-add it (that would be creative, not defensive)." (BP3 line 98)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES. Creative loss is documented but not repaired.

### B-17: Do NOT fix metronomic transitions in Pass 3 (Pass 3)
- **Quote:** "Do NOT fix in Pass 3 (that would be creative) -- document for the PA auditors to evaluate." (BP3 line 149)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES. Rhythmic monotony detected in Pass 3 is left unfixed.

### B-18: CRITICAL RULE -- Targeted fix, not redesign (Refine)
- **Quote:** "CRITICAL RULE: This is a TARGETED FIX, not a redesign. Change only what the creative direction specifies." (RB line 5)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES. Even if the refine builder sees fundamental structural opportunities, they can only touch what the Weaver specified.

### B-19: Do NOT add new creative features (Refine)
- **Quote:** "DO NOT: Add new creative features (this is a fix, not an enhancement)" (RB line 108)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES.

### B-20: Do NOT remove structural inventions unless fundamentally broken (Refine)
- **Quote:** "DO NOT remove structural inventions unless they are fundamentally broken." (RB line 45)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** No -- this PROTECTS structural invention. Rare positive constraint.

### B-21: Soul constraints -- absolute everywhere
- **Quote:** "border-radius: 0" / "box-shadow: none" / "No gradients" / "No semi-transparent backgrounds" / "No cool grays" / "No hover lift effects" (BP1 lines 89-105, BP2 lines 256-259, BP3 lines 229-238, RB lines 85-90)
- **Quality or Safety:** QUALITY. Identity constraints.
- **Prevents invention?** NO. These are visual vocabulary constraints, not structural ones.

### B-22: 2px border ban (Pass 3)
- **Quote:** "Any 2px border is BANNED (use 1px or 3px only)" (BP3 line 144)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** No.

### B-23: Container width 940-960px (all passes)
- **Quote:** "max-width: 940px; /* 940-960px range */" (BP1 line 111)
- **Quality or Safety:** QUALITY. Non-negotiable design system constraint.
- **Prevents invention?** POTENTIALLY. Prevents full-bleed or asymmetric page-level layouts.

---

## C. PROCEDURAL CONSTRAINTS (Step-by-step procedures that prevent freeform building)

### C-01: Reading order -- FOLLOW EXACTLY (Pass 1)
- **Quote:** "Reading Order (FOLLOW EXACTLY)" (BP1 line 7)
- **Detail:** Research Package FIRST, then TC Brief, then Content, then Tokens, then Components.
- **Quality or Safety:** QUALITY. Ensures conviction-first building.
- **Prevents invention?** INDIRECTLY. The reading order shapes how the builder internalizes the creative direction. Package-first means the builder's structural imagination is framed by curated selections before encountering raw content.

### C-02: Reading order -- FOLLOW EXACTLY (Pass 2)
- **Quote:** "Reading Order (FOLLOW EXACTLY)" (BP2 line 9)
- **Detail:** Research Package FIRST, then Pass 1 Decisions, then Pass 1 HTML.
- **Quality or Safety:** QUALITY.
- **Prevents invention?** INDIRECTLY. Package framing before seeing the HTML means the builder approaches existing structure with "what was I told to do" rather than "what does this need."

### C-03: Reading order -- FOLLOW EXACTLY (Pass 3)
- **Quote:** "Reading Order (FOLLOW EXACTLY)" (BP3 line 9)
- **Detail:** Research Package FIRST (anti-patterns), then Pass 1 Decisions, then Pass 2 Decisions, then HTML.
- **Quality or Safety:** QUALITY. Anti-patterns first = defensive lens.
- **Prevents invention?** YES. Reading anti-patterns first puts the builder in a DEFENSIVE posture before they see the page. They approach the HTML looking for problems, not opportunities.

### C-04: Reading order -- FOLLOW EXACTLY (Refine)
- **Quote:** "Reading Order (FOLLOW EXACTLY)" (RB line 9)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** No -- refine is inherently constrained.

### C-05: Write transition table BEFORE any CSS (Pass 1)
- **Quote:** "Before writing any CSS, create a transition table as an HTML comment" (BP1 line 184)
- **Quality or Safety:** QUALITY. Planning aid.
- **Prevents invention?** INDIRECTLY. Pre-committing to a transition plan before writing CSS reduces the chance of discovering structure through the act of building. It's a plan-then-execute model, not an exploratory model.

### C-06: Build standard skeleton FIRST, structural modules SECOND (Pass 1)
- **Quote:** "Build the standard vertical skeleton FIRST -- all zones, all content, working at all breakpoints. THEN build the structural section as a SELF-CONTAINED MODULE within its zone." (BP1 lines 209-210)
- **Quality or Safety:** SAFETY. Fallback strategy.
- **Prevents invention?** YES. This is the single most consequential procedural constraint. By building vertical first, the builder commits to a spatial framework. Structural modules are then INSERTED into slots -- they don't define the page's fundamental spatial logic. AD-006's hub-spoke wouldn't emerge from "build vertical first, then add a module."

### C-07: Build zone-by-zone, NOT channel-by-channel (Pass 1)
- **Quote:** "Build zone-by-zone, NOT channel-by-channel." (BP1 line 167)
- **Quality or Safety:** QUALITY. Produces better multi-channel coordination.
- **Prevents invention?** No -- this is about HOW to build, not WHAT to build.

### C-08: Continuity Protocol -- PRESERVE zone skeleton (Pass 2)
- **Quote:** "PRESERVE: The zone skeleton (add to zones, don't restructure them)" (BP2 line 56)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES. Pass 2 is locked into Pass 1's spatial decisions. If Pass 1 chose vertical for everything, Pass 2 inherits a fully vertical page.

### C-09: Map findings to EXISTING zones (Pass 2)
- **Quote:** "Map findings from Section 3 to EXISTING zones. Do not create new zones unless Section 4 specifically calls for it." (BP2 line 50)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES. Findings that imply new spatial structures must be force-fit into existing zones.

### C-10: Respect Pass 1's structural rejections (Pass 2)
- **Quote:** "Check _pass-1-decisions.md -- did Pass 1 already consider and reject this? If so, RESPECT the rejection unless you have new evidence" (BP2 line 228)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES. If Pass 1 rejected a structural proposition (possibly for bad reasons, or because they were building vertical-first), Pass 2 must uphold that rejection by default.

### C-11: Continuity Protocol -- PRESERVE zone skeleton (Pass 3)
- **Quote:** "PRESERVE: The zone skeleton (do not add or remove zones)" (BP3 line 48)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** YES. Pass 3 is structurally frozen.

### C-12: Anti-pattern sweep BEFORE creative assessment (Pass 3)
- **Quote:** "Section 6: Anti-Pattern Sweep" comes before Section 7 and Section 8 integration (BP3 lines 116-149)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** INDIRECTLY. By doing defensive work first, creative opportunity assessment is pushed to the end of the builder's attention budget.

### C-13: Fix priority order (Refine)
- **Quote:** "Soul violations first ... RELEASE items second ... DEEPEN items third ... AMPLIFY items last" (RB lines 71-74)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** No -- this is about fix ordering, not creation.

### C-14: Structural invention requires ALL FOUR conditions (Pass 1)
- **Quote:** "STRUCTURAL INVENTION is PERMITTED when ALL four conditions are met: 1. The structural form is derived from the content's organizational logic (not decorative) 2. The structural form is proposed in Section 11 (Structural Propositions) 3. The decision (ADOPTED / MODIFIED / REJECTED) is documented in _pass-1-decisions.md 4. The structural section works at all 3 breakpoints" (BP1 lines 403-407)
- **Quality or Safety:** SAFETY.
- **Prevents invention?** YES -- CRITICALLY. Condition 2 requires the structural form to be PROPOSED IN SECTION 11. The builder CANNOT invent a structural form that wasn't pre-proposed by the synthesizer. If the synthesizer didn't propose a hub-spoke layout, the builder cannot create one even if the content screams for it. Structural invention is limited to a menu of pre-approved options.

### C-15: Pass 1 agent does NOT receive Pass 2 or Pass 3 packages (SKILL)
- **Quote:** "Agent does NOT receive: _package-pass-2.md or _package-pass-3.md" (SKILL lines 413-414)
- **Quality or Safety:** QUALITY (rotation design).
- **Prevents invention?** INDIRECTLY. The builder creating the structure doesn't see findings, case studies, or anti-patterns that might inform structural decisions.

### C-16: Pass 2 agent does NOT receive TC brief (SKILL)
- **Quote:** "Agent does NOT receive: The TC brief (decisions.md carries what's needed)" (SKILL lines 448-449)
- **Quality or Safety:** QUALITY (context management).
- **Prevents invention?** INDIRECTLY. The enrichment builder doesn't have direct access to the conviction brief's spatial direction and creative conditions. They get a 20-30 line summary of it.

### C-17: Pass 2 agent does NOT receive content.md (SKILL)
- **Quote:** "Agent does NOT receive: content.md (the HTML already contains the content)" (SKILL lines 450-451)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** INDIRECTLY. The enrichment builder can't re-analyze content structure from the raw markdown -- they only see it as already-placed HTML.

### C-18: Pass 3 agent does NOT receive TC brief (SKILL)
- **Quote:** "Agent does NOT receive: The TC brief" (SKILL line 479)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** Yes -- the hardening builder has no access to the original creative vision.

### C-19: Pass 3 agent does NOT receive content.md (SKILL)
- **Quote:** "Agent does NOT receive: content.md" (SKILL line 480)
- **Quality or Safety:** QUALITY.
- **Prevents invention?** Same as C-17.

---

## D. CULTURAL SIGNALS (Language that discourages creative risk)

### D-01: "Trust its selections" (Pass 1)
- **Quote:** "the package was curated by specialists who read the full knowledge base. Trust its selections." (BP1 line 401)
- **Quality or Safety:** CULTURAL.
- **Effect:** Signals deference to upstream agents. Discourages the builder from exercising independent creative judgment about mechanisms. The subtext is: "you don't know better than the specialists."

### D-02: "Defensive" posture (Pass 3)
- **Quote:** "Your job is DEFENSIVE: catch problems, integrate proven CSS, verify structural propositions." (BP3 line 3)
- **Also:** "Pass 3 is DEFENSIVE, not creative." (BP3 line 71)
- **Also:** "Think of yourself as a final inspector, not a designer" (BP3 line 381)
- **Effect:** Pass 3 builder is culturally reframed from designer to inspector. Even if they have Opus-level creative capability, the framing suppresses it.

### D-03: "The best Pass 3 outcome is a page that looks identical to Pass 2" (Pass 3)
- **Quote:** "The best Pass 3 outcome is a page that looks identical to Pass 2 but has zero audit-catchable issues. The worst Pass 3 outcome is a page that looks different from Pass 2 because you got creative instead of defensive." (BP3 lines 389-390)
- **Effect:** Explicitly frames creative impulses in Pass 3 as the WORST outcome. Visual change = failure.

### D-04: "Fix, polish, and verify" (Pass 3)
- **Quote:** "Do not add new features. Fix, polish, and verify." (BP3 line 5)
- **Effect:** Reduces the builder to a quality inspector.

### D-05: "Safety" of standard path (Pass 1)
- **Quote:** "Why standard skeleton first: If the structural module fails at responsive, you have a working vertical fallback. If you build structure first, failure means starting over." (BP1 line 215)
- **Effect:** Frames structural invention as RISKY (might fail) and standard vertical as SAFE (always works). Creates a fear-of-failure framing that discourages structural experimentation.

### D-06: "Do not use this as an excuse to rebuild from scratch" (Pass 2)
- **Quote:** "Do not use this as an excuse to rebuild from scratch -- fix the specific issues, then enrich" (BP2 line 371)
- **Effect:** Frames rebuilding as an "excuse" -- something the builder would do out of laziness rather than creative judgment.

### D-07: "Do not use this as an opportunity to redesign" (Pass 3)
- **Quote:** "Do not use this as an opportunity to redesign -- fix the problem, nothing more" (BP3 line 363)
- **Effect:** Frames redesign as an illegitimate impulse.

### D-08: "Proven CSS" (Pass 3)
- **Quote:** "These are PROVEN to produce rich output." (BP3 line 153)
- **Effect:** Privileges proven/safe CSS over novel CSS. Signals that the builder should use what worked before, not invent.

### D-09: "The Hardening Mindset" (Pass 3)
- **Quote:** "Think of yourself as a final inspector, not a designer: Does every CSS rule serve a purpose? Are there any violations the PA auditors will catch?" (BP3 lines 381-385)
- **Effect:** Reframes the builder's identity from CREATOR to INSPECTOR. The builder starts thinking about what auditors will catch rather than what the page needs.

### D-10: "AMPLIFY wins over DEEPEN" (Refine)
- **Quote:** "AMPLIFY wins over DEEPEN -- protect what works before enhancing what doesn't" (RB line 146)
- **Effect:** Conservation bias. Protecting existing features is prioritized over deepening weak areas. This is reasonable for fixes but culturally signals risk-aversion.

### D-11: "Do your best but document what a full TC re-derivation would need" (Refine)
- **Quote:** "if you receive TYPE C fixes, do your best but document what a full TC re-derivation would need to address" (RB line 37)
- **Effect:** Signals that compositional-level fixes are beyond the builder's authority. The builder is expected to partially fail and document why.

### D-12: "If the page already looks good after Pass 2, your job is to VERIFY that it's as good as it looks" (Pass 3)
- **Quote:** (BP3 line 387)
- **Effect:** Frames Pass 3 as verification, not improvement.

### D-13: "This is the EXPECTED outcome for most builds" (Pass 2)
- **Quote:** "If no structural opportunity exists: This is the EXPECTED outcome for most builds. Note 'No structural evolution needed -- vertical layout serves the content' in decisions." (BP2 lines 233-234)
- **Effect:** Normalizes zero structural evolution as the default. Signals that structural evolution is the EXCEPTION, not the norm. A builder who finds opportunities is implicitly doing something unusual.

### D-14: "Minimum structural change" (Pass 3, Refine)
- **Quote:** "Make the minimum structural change needed to fix the anti-pattern" (BP3 line 360)
- **Also:** "Make the minimum structural change needed" (RB line 155)
- **Effect:** "Minimum" signals do-as-little-as-possible. Even when a structural change is needed, the builder should do the bare minimum.

---

## E. INFORMATION ACCESS LIMITS

### E-01: Pass 1 builder receives ONLY package-pass-1, content, TC brief, tokens, components
- **Quote:** "Agent receives: 1. _package-pass-1.md 2. CONTENT_PATH 3. _tc-brief.md 4. tokens.css 5. components.css" (SKILL lines 406-411)
- **What's excluded:** _package-pass-2.md, _package-pass-3.md, PA questions, audit criteria, gate thresholds, prior build artifacts, fix lists, case studies (except through the package), mechanism catalog, grammar files, anti-patterns registry.
- **Prevents invention?** YES. The Pass 1 builder -- the one making ALL structural decisions -- has the NARROWEST information access. They don't see case studies (which might inspire structural forms), anti-patterns (which might inform defensive structure), or the zone architecture recipe (which lives in Pass 2's package).

### E-02: Pass 2 builder does NOT receive TC brief directly
- **Quote:** "Agent does NOT receive: The TC brief (decisions.md carries what's needed)" (SKILL lines 448-449)
- **Prevents invention?** INDIRECTLY. The creative vision is transmitted through a 20-30 line summary, not the full conviction brief. Spatial direction, creative conditions, and compositional questions (which may imply structural forms) are compressed or lost.

### E-03: Pass 2 builder does NOT receive content.md
- **Quote:** "Agent does NOT receive: content.md (the HTML already contains the content)" (SKILL line 450)
- **Prevents invention?** INDIRECTLY. The enrichment builder can't re-analyze raw content structure. They see content-as-placed-in-HTML, which is already committed to Pass 1's zone architecture.

### E-04: Pass 3 builder does NOT receive TC brief or content.md
- **Quote:** "Agent does NOT receive: The TC brief / content.md" (SKILL lines 479-480)
- **Prevents invention?** YES (but Pass 3 is not meant to invent).

### E-05: No builder sees the full mechanism catalog or grammar files
- **Quote:** Not explicitly stated, but the file list for each builder (SKILL lines 403-411, 442-451, 470-481) includes only package files, decisions files, and the HTML. The mechanism catalog (`design-system/compositional-core/grammar/mechanism-catalog.md`) is never sent to any builder.
- **Prevents invention?** YES. Builders see only the curated subset selected by specialists. If the mechanism catalog contains techniques that would enable structural invention but weren't selected by the specialist, the builder never knows they exist.

### E-06: No builder sees research files directly
- **Quote:** Implied by file routing in SKILL. Research files (R1-R5, ~3,721 lines total) are only sent to Specialist 1. Builders never see raw research.
- **Prevents invention?** YES. Research findings about creative layouts (R2), axis innovations (R4), and combination theory (R5) -- which contain the intellectual DNA of structural invention -- are filtered through specialists and synthesizers before reaching the builder. 50:1 compression.

### E-07: Structural propositions must come from Section 11 (synthesizer)
- **Quote:** "The structural form is proposed in Section 11 (Structural Propositions)" (BP1 line 405)
- **Cross-ref SKILL:** "Section 11: Structural Propositions from Synthesizer (~20-50 lines)" (SKILL line 343)
- **Prevents invention?** YES -- CRITICALLY. The builder's entire structural vocabulary comes from 20-50 lines written by the synthesizer. If the synthesizer is conservative (which is the default -- "Section 11 may be a single line ('No structural propositions') for linear content -- this is valid"), the builder has ZERO structural options.

### E-08: Synthesizer's structural proposition sources are limited
- **Quote:** "Section 11: Structural Propositions from Synthesizer" (SKILL line 343). The synthesizer receives specialist outputs but does NOT receive the raw validated explorations (DD-003, OD-005, AD-006, CD-006 HTML files).
- **Prevents invention?** YES. The synthesizer proposes structural forms from filtered specialist data, not from studying actual structural explorations. The case study analyst (Specialist 3) extracts "processes and CSS examples" from case studies, but structural SPATIAL FORMS from explorations are compressed into text descriptions.

### E-09: PA auditors receive ONLY screenshots
- **Quote:** "Each auditor receives ONLY: The sanitized screenshots" (SKILL line 567)
- **Prevents invention?** No (PA is evaluation, not creation).

### E-10: Weaver does NOT receive TC brief
- **Quote:** "The conviction brief (_tc-brief.md) -- you must NOT know the metaphor name" (SKILL line 624)
- **Prevents invention?** INDIRECTLY. The weaver can't assess whether the page's structure serves the conviction. They evaluate structure only from screenshots and CSS.

### E-11: Section 1 zone architecture summary is condensed
- **Quote:** "NOTE: Section 1 MUST include a condensed zone overview (zone names, density progression direction, ASCII density diagram) because the Pass 1 builder creates zones but does NOT see Section 4." (SKILL line 336)
- **Prevents invention?** INDIRECTLY. The Pass 1 builder (who creates the zone skeleton) sees a CONDENSED zone overview, not the full zone architecture recipe from Section 4. They are building zones from a summary while the detailed recipe is locked in Pass 2's package.

---

## F. COMPOUND CONSTRAINT ANALYSIS

### F-01: The Structural Invention Chokepoint

The combination of C-14 (all 4 conditions required), E-07 (must come from Section 11), E-08 (synthesizer has limited sources), and A-01 (max 2 structural sections) creates a CHOKEPOINT:

1. **Synthesizer** writes Section 11 from specialist digests (not raw explorations)
2. **Section 11** proposes 0-3 structural ideas in 20-50 lines
3. **Builder** can ONLY adopt from this menu (condition 2 of C-14)
4. **Maximum 2** can be adopted (A-01)

The builder -- the agent with Opus-level creative capability who is actually writing the CSS -- has NO authority to invent structural forms. They are a SELECTOR from a pre-approved menu. This is the fundamental bottleneck.

### F-02: The Pass Progression Lock-In

C-06 (standard vertical first) + C-08 (preserve zone skeleton in Pass 2) + C-11 (preserve zone skeleton in Pass 3) + B-12 (no creativity in Pass 3) means:

1. **Pass 1** builds vertical. Any structural modules are INSERTED into slots.
2. **Pass 2** is locked into Pass 1's skeleton. Maximum 1 structural evolution.
3. **Pass 3** is structurally frozen. Cannot change anything.

Structural decisions are IRREVERSIBLE after Pass 1. There is no mechanism to revisit a structural decision that turned out wrong.

### F-03: The Attention Budget Competition

A-09 (10+ findings), A-10 (2+ case studies), A-12 (8+ component instances) + the citation requirements + the validation checklists consume the builder's attention budget. By the time they fulfill all mandatory deployment requirements, there is limited cognitive bandwidth for structural discovery. The builder is an IMPLEMENTER of pre-curated instructions, not an EXPLORER of spatial possibilities.

### F-04: The Defensive Cascade

D-02, D-03, D-04, D-09 create a cultural environment in Pass 3 where the builder is AFRAID to be creative. D-05 frames structural invention as risky. D-13 normalizes structural absence. The combined effect is that even when structural opportunity exists, the cultural signals say "don't."

### F-05: The Information Funnel

The 26,528 lines of knowledge base are compressed through:
- 5 specialists (each seeing ~4,000-5,000 lines of their domain)
- 1 synthesizer (merging 5 specialist outputs into 3 package files totaling ~600-770 lines)
- Package sections reaching the builder (each builder sees ~130-360 lines of their package)

Compression ratio from knowledge base to builder visibility: **~35:1 to ~200:1** depending on the pass. For structural invention specifically:
- Raw structural knowledge: ~2,600 lines (R2 creative layouts + case studies with spatial forms)
- After Specialist 3 filtering: ~100-200 lines
- After synthesizer Section 11: **20-50 lines**
- Builder structural vocabulary: **20-50 lines**

That is a **50:1 to 130:1** compression of structural knowledge.

---

## G. SUMMARY: CONSTRAINTS BY INVENTION IMPACT

### BLOCKS structural invention entirely (would prevent AD-006/OD-005 type pages):
| ID | Constraint | File |
|----|-----------|------|
| C-14 | Must be proposed in Section 11 | BP1 line 403-407 |
| A-01 | Max 2 structural sections | BP1 line 409 |
| A-04 | Max 2 structural sections across all passes | BP3 line 273 |
| C-06 | Standard vertical skeleton FIRST | BP1 lines 209-210 |
| B-12 | No creativity in Pass 3 | BP3 line 5 |
| B-13 | No new creative features (Pass 3) | BP3 line 66-67 |
| B-15 | No new structural inventions in Pass 3 | BP3 line 71 |
| E-07 | Structural propositions gated by synthesizer | BP1 line 405 |
| F-01 | Structural invention chokepoint (compound) | Multiple |
| F-02 | Pass progression lock-in (compound) | Multiple |

### CONSTRAINS structural invention (makes it harder but doesn't outright block):
| ID | Constraint | File |
|----|-----------|------|
| B-01 | No texture mechanism invention | BP1 line 401 |
| B-02 | No mechanism deployment invention | BP1 line 250 |
| B-05 | No rebuilding from scratch (Pass 2) | BP2 line 5 |
| B-06 | No new zones unless Section 4 says so | BP2 line 50 |
| C-08 | Preserve zone skeleton (Pass 2) | BP2 line 56 |
| C-10 | Respect Pass 1 structural rejections | BP2 line 228 |
| A-03 | Max 1 structural evolution in Pass 2 | BP2 line 129 |
| E-01 | Pass 1 builder has narrowest info access | SKILL lines 406-416 |
| E-05 | No builder sees mechanism catalog | Implied |
| E-06 | No builder sees raw research | Implied |
| D-05 | Structure framed as risky | BP1 line 215 |
| D-13 | No structural evolution = "expected" | BP2 line 233 |

### CULTURAL suppressors (don't block but discourage):
| ID | Signal | File |
|----|--------|------|
| D-01 | "Trust its selections" | BP1 line 401 |
| D-02 | "Defensive" framing | BP3 line 3, 71 |
| D-03 | Best Pass 3 = identical to Pass 2 | BP3 line 389 |
| D-04 | "Fix, polish, and verify" | BP3 line 5 |
| D-06 | Rebuilding = "excuse" | BP2 line 371 |
| D-07 | Redesign = "opportunity" (pejorative) | BP3 line 363 |
| D-08 | "Proven CSS" privileged | BP3 line 153 |
| D-09 | Builder = inspector, not designer | BP3 line 381 |
| D-14 | "Minimum structural change" | BP3 line 360, RB line 155 |

---

## H. THE CRITICAL PATH: Where structural invention dies

The kill chain for structural invention:

1. **Knowledge base** (26,528 lines) contains rich structural examples (AD-006 hub-spoke, OD-005 confidence architecture, DD-006 fractal). These are spatial INVENTIONS.

2. **Specialist 3** reads case studies and extracts "processes and CSS examples." Spatial forms are described in TEXT, stripped of their visual context. (**~50:1 compression**)

3. **Synthesizer** reads Specialist 3's output and decides whether to write Section 11 structural propositions. The default posture is "Section 11 may be a single line ('No structural propositions') for linear content -- this is valid." (**Pass/fail gate: synthesizer's judgment**)

4. **Section 11** reaches the builder as 20-50 lines of structural proposals. (**20-50 lines is the builder's entire structural vocabulary.**)

5. **Builder** can ONLY adopt, modify, or reject from this menu (C-14 condition 2). Independent structural invention is PROHIBITED. (**Menu selection, not creation**)

6. **Builder** must build standard vertical FIRST, then insert structural modules (C-06). This means structure is always ADDITIVE to vertical, never FOUNDATIONAL. (**Vertical is the substrate, not a choice**)

7. **Maximum 2 structural sections** across the entire build (A-01, A-04). (**Hard cap**)

8. **Pass 2** can add maximum 1 more structural evolution (A-03). (**+1 at most**)

9. **Pass 3** is structurally frozen (B-15). (**No recovery**)

10. **Refine** is a targeted fix (B-18, B-19). (**No recovery**)

**Net result:** The builder -- the only agent with the creative capability AND the CSS skill to create structural invention -- is reduced to selecting 0-2 items from a 20-50 line menu that was written by an agent who never saw the validated explorations that invented those forms in the first place.
