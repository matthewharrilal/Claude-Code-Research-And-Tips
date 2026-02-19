# LINE-BY-LINE CROSS-REFERENCE: Remediation Spec vs Master Prompt

**Agent:** line-crossref-spec
**Date:** 2026-02-18
**Method:** Every substantive line/instruction in the Remediation Spec (1,025 lines) mapped to its counterpart in the Master Prompt (963 lines), and every rule family in the Master Prompt reverse-mapped to the Remediation Spec.

**Source files:**
- MASTER: `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (963 lines)
- REMEDIATION: `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` (1,025 lines)

---

## PART 1: REMEDIATION SPEC -> MASTER PROMPT (Forward Map)

Every substantive instruction in the Remediation Spec, line by line.

### Section 1: Executive Summary (Lines 1-56)

| Rem Lines | Instruction Summary | Master Counterpart | Relationship |
|-----------|--------------------|--------------------|-------------|
| 15 | Approach B: CSS + targeted HTML restructuring | No counterpart -- Master describes a fresh-build pipeline, not a remediation approach | **NEW** |
| 15 | 89.5% of HTML body is correct and should be preserved | No counterpart -- Master has no preservation mandate; builds from scratch | **REVERSED** |
| 15 | 960px container | S-01 (line 118): Container 940-1100px | **REFINED** (Remediation fixes at 960px; Master allows 940-1100 range) |
| 15 | Soul compliance confirmed | B2 U-01 through U-10 (lines 153-166) | **PRESERVED** |
| 15 | 7 distinct table treatments | No specific Master rule about table treatment count | **NEW** |
| 21-31 | Scope expanded: CSS + HTML, 9 phases, accessibility, void mitigation, multi-coherence, component library, layout variety | Master addresses all these domains but through fresh-build pipeline (Passes 0-4), not remediation phases | **NEW** (remediation-specific operationalization) |
| 34-42 | Expected outcome table (PA-05, channels, scales, accessibility, component families, layout patterns, max whitespace) | Master has thresholds for PA-05 (>=3/4 at C5/line 559), channels (SC-02 >=5/7), scales (SC-01 max 5), void (S-10), but NOT component family counts or layout pattern counts | **EXTENDED** (Remediation adds component family and layout pattern metrics absent from Master) |
| 44-51 | Time estimates (120 min total, 1 Opus agent) | Master has staged downgrade at 240 min (C4 line 602-604), implies multi-agent | **REVERSED** (Master = multi-agent 240+ min; Remediation = single-agent 120 min) |
| 53-55 | Priority ordering: Structural > Typography > Chromatic > Spatial > Accessibility | No Master counterpart for priority ordering of enrichment dimensions | **NEW** |

### Section 2: Phase 0 -- Deallocation (Lines 59-134)

| Rem Lines | Instruction Summary | Master Counterpart | Relationship |
|-----------|--------------------|--------------------|-------------|
| 59-61 | Phase 0: Remove 233 lines of sub-perceptual CSS before adding new | No Master counterpart -- Master builds from scratch, no deallocation concept | **NEW** |
| 63-76 | Step 0.1: Delete typographic convergence gradient (0.064-0.16px values) | No Master counterpart -- Master has no sub-perceptual deletion phase | **NEW** |
| 76-77 | Perception threshold: 0.5px | Not in Master; Master has no explicit perception threshold | **NEW** |
| 79-89 | Step 0.2: Delete spatial compression micro-modulations | No Master counterpart | **NEW** |
| 92-99 | Step 0.3: Delete per-zone border/heading color shifts (2-7 RGB delta = invisible) | No Master counterpart | **NEW** |
| 101-103 | Step 0.4: Delete rhythmic micro-modulations | No Master counterpart | **NEW** |
| 105-107 | Step 0.5: Zone background tokens will be replaced in Phase 3 | No Master counterpart | **NEW** |
| 109-115 | Step 0.6: Delete extra paragraph breathing rule | No Master counterpart | **NEW** |
| 117-129 | Deallocation summary: ~216 lines removed, 22% of CSS budget freed | No Master counterpart | **NEW** |
| 131-133 | Checkpoint: Page must look IDENTICAL after deallocation | Master has gate checkpoints (C3 lines 529-560) but none for deallocation | **NEW** |

### Section 3: Phase 1 -- HTML Restructuring (Lines 137-280)

| Rem Lines | Instruction Summary | Master Counterpart | Relationship |
|-----------|--------------------|--------------------|-------------|
| 139 | Work section by section, do NOT change text content | CT-01 (line 388-390): prohibits direct copying but demands rewriting -- OPPOSITE of preservation | **REVERSED** (Master demands content rewriting; Remediation demands content preservation) |
| 141-156 | Step 1.1: Add skip link and `<main>` wrapper | No specific Master rule about skip links or `<main>` -- Master has semantic rules but not at this specificity | **NEW** |
| 158-179 | Step 1.2: Add ARIA labels and roles to all sections | A7 (line 95): "Every `<section>` has `aria-label`" -- Master mentions this in CD-006 exemplar | **EXTENDED** (Master mentions as CD-006 quality marker; Remediation provides exact implementation for 12 sections) |
| 180-186 | Step 1.3: Add `role="note"` to component blocks | A7 (line 95): "Every callout has `role="note"`" -- Master mentions in CD-006 exemplar | **EXTENDED** |
| 188-194 | Step 1.4: Add `role="separator"` to dividers | A7 (line 95): "Every transition has `role="separator"`" -- Master mentions in CD-006 exemplar | **EXTENDED** |
| 196-224 | Step 1.5: Convert `.component-block` to `.callout` family (9 instances) | C-10 (line 190): ">= 2 purpose-built components invented for THIS content" -- related but different | **NEW** (Master wants purpose-built components; Remediation converts to standard library classes) |
| 225-227 | Step 1.6: Convert `.section-meta` to `.section-indicator` | No Master counterpart for this specific class conversion | **NEW** |
| 229-247 | Step 1.7: Add grid wrapper for S7 tension/resolution pairs | No Master rule mandating grid layouts; layout variety is implicit in composition rules | **NEW** |
| 249-260 | Step 1.8: Add grid wrapper for S8 sequence blocks | No Master counterpart | **NEW** |
| 262-276 | Step 1.9: Add grid wrapper for S11 hypothesis tables | No Master counterpart | **NEW** |
| 277-279 | Checkpoint: Verify skip link, aria-labels, callout classes, grid wrappers | Master has gates (C3) but not for these specific HTML restructuring items | **NEW** |

### Section 4: Phases 2-7 CSS Recipe (Lines 283-803)

#### Phase 2: Zone Backgrounds (Lines 287-313)

| Rem Lines | Instruction Summary | Master Counterpart | Relationship |
|-----------|--------------------|--------------------|-------------|
| 287 | Phase 2: Amplify zone backgrounds (Ch1) | SC-02 (line 251): ">= 5 of 7 channels actively used" including chromatic | **EXTENDED** (Master requires channel usage; Remediation provides exact RGB values for 12 zones) |
| 289-308 | 12 specific zone color values organized in 3 groups | U-06 (line 162): "No #000000 or #FFFFFF" -- constrains but doesn't specify zone colors | **NEW** (specific values) |
| 310-311 | S8 changed to #F0F0F0 for T7 transition strength | SC-09 (line 264-267): ">= 3 channels shift at every section transition" -- related principle | **EXTENDED** |
| 313 | Perception check: Must distinguish 3 transitions without color picker | No Master perception check at this specificity | **NEW** |

#### Phase 3: Structural Borders (Lines 315-520)

| Rem Lines | Instruction Summary | Master Counterpart | Relationship |
|-----------|--------------------|--------------------|-------------|
| 317-355 | Step 3.1: Section-level left borders on 6 of 12 sections | No Master rule mandating section-level borders; SC-02 channel coverage related | **EXTENDED** |
| 357-381 | Step 3.2: Reduce divider margins to prevent void stacking (cap 120px) | S-09 (line 132-133): "Max spacing between any two content elements: 96px per-property. Total visual gap <= 96px." Master cap is 96px, Remediation uses 120px | **REFINED** (different threshold: Master = 96px, Remediation = 120px) |
| 365 | SMOOTH divider margin: 16px 0 | C-05 (line 180): "SMOOTH: 48px+1px" -- Master specifies 48px spacing | **REVERSED** (Master = 48px; Remediation = 16px) |
| 371 | BRIDGE divider margin: 24px 0 | C-05 (line 180): "BRIDGE: 64px+bg+prose" -- Master specifies 64px spacing | **REVERSED** (Master = 64px; Remediation = 24px) |
| 377 | BREATHING divider margin: 24px 0 | C-05 (line 180): "BREATHING: 80px+3px" -- Master specifies 80px spacing | **REVERSED** (Master = 80px; Remediation = 24px) |
| 383-394 | Step 3.3: Reduce bridge-prose margin to 16px | No specific Master counterpart for bridge-prose margin | **NEW** |
| 396-463 | Step 3.4: Callout family CSS (.callout base + 4 variants) | C-10 (line 190): purpose-built components. Master expects invention; Remediation provides standard library | **NEW** |
| 465-495 | Step 3.5: Grid layouts (tension-pair, sequence-grid, hypothesis-grid) | No Master rule for grid layout specifics | **NEW** |
| 497-512 | Step 3.6: Table header backgrounds | No Master rule for table header backgrounds | **NEW** |
| 514-520 | Perception check: borders, dividers, grids, callouts, no blank viewports | S-12 (line 139-140): viewport content coverage check. Related | **EXTENDED** |

#### Phase 4: Typography (Lines 522-614)

| Rem Lines | Instruction Summary | Master Counterpart | Relationship |
|-----------|--------------------|--------------------|-------------|
| 528-569 | Step 4.1: Paragraph font-size/line-height variation by zone (17px/15px/16px) | S-07 (line 130): "CPL: 45-80". Master constrains CPL but doesn't specify per-zone font sizes | **EXTENDED** |
| 543 | Zone 1 text color: #2A2520 | U-06 (line 162): no #000000. Compatible but specific value is new | **NEW** |
| 576-602 | Step 4.2: Heading weight/size/color variation by zone (30px/26px/28px) | U-07 (line 163): Instrument Serif for display headings only. Related constraint | **EXTENDED** |
| 604-612 | Step 4.3: T9 transition fix (S10 heading weight 500) | SC-09 (line 264-267): channel shift per transition >= 3 | **EXTENDED** |
| 614 | Perception check: S1 vs S5 comparison | No Master equivalent for side-by-side zone comparison | **NEW** |

#### Phase 5: Spatial Rhythm (Lines 616-652)

| Rem Lines | Instruction Summary | Master Counterpart | Relationship |
|-----------|--------------------|--------------------|-------------|
| 620-629 | Step 5.1: Paragraph margin variation by zone (20px/12px/16px/18px) | C-11 (line 191): "Section spacing MUST vary: at least 3 distinct spacing values." Master requires variety; Remediation provides exact values | **EXTENDED** |
| 631-639 | Step 5.2: Override excessive inline padding with !important | S-11 (line 138): "No single CSS margin or padding > 96px". Related void prevention | **EXTENDED** |
| 641-649 | Step 5.3: Section padding by zone | MC-08 (line 237): "Anti-metronome: >= 3 distinct padding/margin values." Remediation provides exact values | **EXTENDED** |
| 651-652 | Perception check: paragraphs in S1-S3 more spaced than S5-S8, no blank screenfuls | S-12 (line 139): viewport coverage check | **EXTENDED** |

#### Phase 6: Element-Level Richness (Lines 654-707)

| Rem Lines | Instruction Summary | Master Counterpart | Relationship |
|-----------|--------------------|--------------------|-------------|
| 662-668 | Inline code styling | No Master rule for inline code styling | **NEW** |
| 670-678 | Link hover transitions | No Master rule for link interactions | **NEW** |
| 680-686 | Table row hover | No Master rule for table row hover | **NEW** |
| 688-690 | Component hover (border thickening) | No Master rule for component hover | **NEW** |
| 694 | Smooth scrolling | No Master rule for smooth scrolling | **NEW** |
| 696-706 | Section indicator styling | No Master rule for section indicator | **NEW** |

#### Phase 7: Accessibility and Responsive (Lines 709-803)

| Rem Lines | Instruction Summary | Master Counterpart | Relationship |
|-----------|--------------------|--------------------|-------------|
| 718-722 | ::selection styling | No Master rule | **NEW** |
| 724-728 | Focus states (WCAG 2.4.7) | No Master rule for focus states | **NEW** |
| 730-743 | Skip link styling | No Master rule for skip links | **NEW** |
| 745-752 | Reduced motion preference | C4 (line 567): "Disable animations: animation: none !important" -- related but different context (audit vs production) | **NEW** |
| 754-767 | Print styles | No Master rule for print styles | **NEW** |
| 769-785 | Responsive 768px | No Master rule for responsive breakpoints (Master audits at 768px per C4 line 566, but doesn't mandate responsive CSS) | **NEW** |
| 787-799 | Responsive 480px | No Master rule | **NEW** |
| 802 | Perception check: selection, focus, skip link, responsive, print | No Master equivalent | **NEW** |

### Section 5: Phase 8 -- Verification (Lines 806-908)

| Rem Lines | Instruction Summary | Master Counterpart | Relationship |
|-----------|--------------------|--------------------|-------------|
| 808-840 | 8A: Multi-coherence cascade table (5+ channels per zone transition) | SC-09 (line 264-267): >= 3 channels shift per transition. Master requires 3; Remediation verifies 5+ at zone boundaries, 3+ at section boundaries | **EXTENDED** (Remediation exceeds Master's 3-channel minimum for zone transitions) |
| 842-855 | 8B: Total gap verification (max 120px) | S-09 (line 132-133): total visual gap <= 96px. Master is stricter (96px) | **REFINED** (Master = 96px; Remediation = 120px -- Remediation is LOOSER) |
| 857-865 | 8C: Scale 5 level verification | SC-01 (line 243-250): scale definitions. Master defines 5 scales similarly | **PRESERVED** |
| 867-876 | 8D: Soul constraint check (7 items) | B2 U-01 through U-10 (lines 153-166): Master has 10 soul rules | **REFINED** (Remediation checks 7 of 10 soul rules, omits U-03, U-08, U-10) |
| 877-888 | 8E: Binary richness checklist (10 items) | B10 (lines 347-383): Builder self-check (22 items). Overlapping but different items | **REFINED** (Remediation has 10 perception-focused checks; Master has 22 rule-compliance checks) |
| 890-897 | 8F: Accessibility verification (6 items) | No Master accessibility verification | **NEW** |
| 899-908 | 8G: Overall perception self-check (4 questions) | B10 atmosphere test (lines 376-379): similar gut check | **EXTENDED** (Remediation has 4 perception questions; Master has 1-word atmosphere check) |

### Section 6: Root Cause Resolution Matrix (Lines 912-933)

| Rem Lines | Instruction Summary | Master Counterpart | Relationship |
|-----------|--------------------|--------------------|-------------|
| 914-931 | 15 root causes with resolution status | No Master root-cause matrix; Master addresses causes implicitly through rules | **NEW** |
| 916 | RC-1: No CSS-generative arrow -- RESOLVED by this spec | Master addresses via mechanism catalog + build plan pipeline | **REFINED** (different resolution path) |
| 917 | RC-2: 7.9:1 guardrail-to-playbook ratio | A6 (line 79): "Every rule has an attention cost" -- Master aware of rule bloat | **EXTENDED** |
| 918 | RC-3: Builder saw 13.4% of rules | C1 (line 474): "Builder visibility cap <= 75 lines" -- Master addresses with visibility cap | **REFINED** (Master caps visibility; Remediation gives builder everything) |
| 919 | RC-4: Sub-perceptual variation | No Master equivalent -- Master doesn't address sub-perceptual cleanup | **NEW** |
| 920 | RC-5: Zero agent communication | C2 (lines 498-527): Communication protocol. Master mandates messaging | **PRESERVED** (Master addresses; Remediation marks N/A for single-agent) |
| 921 | RC-6: Coverage not causation | Phase 8 perceptual checks | **EXTENDED** |
| 922 | RC-7: Absence coherence | D conviction closing (line 732): Master addresses explicitly | **PRESERVED** |
| 923 | RC-8: 2,400:1 compression | Master addresses via multi-coherence rules (B4) and channel rules (B5) | **REFINED** |
| 924 | RC-9: Component library invisible | C-10 (line 190): purpose-built components | **REVERSED** (Master wants NEW components; Remediation adopts EXISTING library) |
| 925 | RC-10: Tokens not perceptible values | Master provides tokens via Section E reference | **EXTENDED** |
| 926 | RC-11: Ch4 absent at section level | SC-02 (line 251): channel coverage >= 5/7. Master requires channels generically | **EXTENDED** |
| 927 | RC-12: Single-column monotony | No specific Master rule against single-column monotony | **NEW** |
| 928 | RC-13: Uniform prose register -- NOT ADDRESSED | CT-01 through CT-08 (lines 385-418): Master mandates content rewriting | **REVERSED** (Master requires prose transformation; Remediation explicitly excludes it) |
| 929 | RC-14: Transition divider stacking | S-09 (line 132-133): 96px gap cap | **EXTENDED** |
| 930 | RC-15: No plan-fidelity gate | Gate 3 (line 537-547): Master has plan-fidelity at Gate 3 | **PRESERVED** (Master addresses; Remediation marks N/A) |

### Section 7: Risk Assessment (Lines 936-966)

| Rem Lines | Instruction Summary | Master Counterpart | Relationship |
|-----------|--------------------|--------------------|-------------|
| 940-941 | CSS-only caps at PA-05 2-3/4; HTML restructuring needed | Master requires PA-05 >= 3/4 (line 559) but achieves through fresh build | **NEW** |
| 942-943 | Sonnet vs Opus agent recommendation (Opus for creative surplus) | C1 (lines 455-496): Master assigns Opus to creative passes, Sonnet to builders | **PRESERVED** (same principle) |
| 944-946 | 3 grid layouts break spatial monotony | No Master counterpart for grid-as-monotony-break | **NEW** |
| 947-948 | DNA argument: CSS cannot change HTML DNA | Master builds DNA from scratch, no remediation paradigm | **NEW** |
| 950-955 | PA-05 prediction table (Sonnet 3/4, Opus 3-4/4, fresh 4/4) | Master targets PA-05 >= 3/4 with aspiration to 4/4 | **EXTENDED** |
| 957-965 | What would be needed for guaranteed 4/4 | Master doesn't acknowledge remediation limitations | **NEW** |

### Appendices (Lines 970-1025)

| Rem Lines | Instruction Summary | Master Counterpart | Relationship |
|-----------|--------------------|--------------------|-------------|
| 970-985 | Perception thresholds reference (8 CSS properties with minimum deltas) | No Master perception threshold table | **NEW** |
| 989-1007 | Constraints: Do NOT change/add/remove lists | B2 U-01 through U-10 (soul rules): overlapping constraints | **REFINED** (Remediation constraints are preservation-focused; Master constraints are identity-focused) |
| 992 | Do NOT change container width (960px) | S-01 (line 118): 940-1100px range | **REFINED** (Remediation fixes 960px; Master allows range) |
| 993 | Do NOT change font families (Instrument Serif, Inter, JetBrains Mono) | U-09 (line 164): same fonts | **PRESERVED** |
| 994 | Do NOT change text content | CT-01 (line 388-390): Master DEMANDS content rewriting | **REVERSED** |
| 999-1003 | Do NOT add: border-radius, box-shadow, gradients, opacity < 1, pure B&W | U-01 through U-06 (lines 156-162): same prohibitions | **PRESERVED** |
| 1006 | Do NOT remove mechanism CSS comments | No Master rule about preserving comments | **NEW** |
| 1007 | Do NOT remove visible CSS effects | No Master rule about preserving existing CSS | **NEW** |
| 1013 | Execute with Opus agent | C1 (lines 455-496): Opus for creative passes | **PRESERVED** (same principle) |
| 1015 | Single pass execution, do NOT spawn analytical agents | C1 (lines 444-496): Master mandates multi-agent with analytical passes | **REVERSED** |
| 1017 | Mid-process checkpoints after Phase 3 and 4 | C3 gates (lines 529-560): similar concept but different checkpoint structure | **REFINED** |
| 1019 | Time-short priority order | C4 (lines 602-604): staged downgrade at 240 min | **REFINED** (different priority scheme) |

---

## PART 2: MASTER PROMPT -> REMEDIATION SPEC (Reverse Map)

Every major rule family in the Master Prompt, mapped to where it appears or is absent in the Remediation Spec.

### S-Rules (Spatial, 17 rules: S-01 through S-17)

| Master Rule | Master Line | Remediation Presence | Relationship |
|-------------|-------------|---------------------|-------------|
| S-01 | 118-119 | Line 992: "Do NOT change container width (960px)" + Phase 8D soul check | **PRESERVED** (narrowed to 960px from 940-1100) |
| S-02 | 120-121 | Not explicitly checked in Remediation Phase 8; implicit via void prevention | **DROPPED** (no explicit content-to-void ratio check) |
| S-03 | 123 | Not referenced in Remediation (header exists, height not checked) | **DROPPED** |
| S-04 | 124 | Not referenced in Remediation (footer preservation assumed) | **DROPPED** |
| S-05 | 125 | Not referenced in Remediation | **DROPPED** |
| S-06 | 126 | Not referenced in Remediation | **DROPPED** |
| S-07 | 130 | Not explicitly checked; Phase 4 font-size and max-width values imply CPL compliance | **DROPPED** (implicit only) |
| S-08 | 131 | Not referenced in Remediation | **DROPPED** |
| S-09 | 132-133 | Phase 3.2 (lines 357-381): divider margins reduced. Phase 8B (lines 842-855): gap verification. BUT remediation uses 120px threshold vs Master's 96px | **REFINED** (present but with different threshold) |
| S-10 | 134-135 | Phase 8B (lines 842-855): no gap > 120px. Addresses same concern but different threshold | **REFINED** |
| S-11 | 138 | Phase 5.2 (line 639): overrides excessive padding. Same principle | **PRESERVED** |
| S-12 | 139-140 | Phase 8B (lines 842-855): gap verification ensures no blank viewport | **PRESERVED** |
| S-13 | 141 | Not explicitly checked in Remediation | **DROPPED** |
| S-14 | 142 | Not referenced in Remediation (graduated content-to-void not in scope) | **DROPPED** |
| S-15 | 143 | Not referenced in Remediation | **DROPPED** |
| S-16 | 144-146 | Not referenced in Remediation (SCI formula absent) | **DROPPED** |
| S-17 | 147-149 | Not referenced in Remediation (visual texture gate absent) | **DROPPED** |

**S-rule summary:** 5 of 17 PRESERVED/REFINED, 12 DROPPED

### U-Rules (Soul, 10 rules: U-01 through U-10)

| Master Rule | Master Line | Remediation Presence | Relationship |
|-------------|-------------|---------------------|-------------|
| U-01 | 156 | Phase 8D line 869: "border-radius: 0 everywhere" | **PRESERVED** |
| U-02 | 157 | Phase 8D line 870: "box-shadow: none everywhere" | **PRESERVED** |
| U-03 | 158 | Line 999-1000: "Do NOT add border-radius, box-shadow" -- drop-shadow not explicitly named in Phase 8D but covered by "do NOT add" | **PRESERVED** (implicitly) |
| U-04 | 159 | Lines 1002: "opacity < 1 on containers" | **PRESERVED** |
| U-05 | 160 | Lines 1001: "gradients" | **PRESERVED** |
| U-06 | 161-162 | Phase 8D line 874: "No pure #000000 or #FFFFFF backgrounds" | **PRESERVED** |
| U-07 | 163 | Phase 8D line 871: "Fonts from trinity only (Instrument Serif, Inter, JetBrains Mono)" | **PRESERVED** (implicitly -- Instrument Serif for headings enforced by Phase 4 which only sets headings with Instrument Serif) |
| U-08 | 163 | Not explicitly checked in Phase 8D (warm-shifted neutrals not verified) | **DROPPED** |
| U-09 | 164 | Phase 8D line 871 + line 993 | **PRESERVED** |
| U-10 | 165 | Phase 8D line 869: "border-radius: 0 !important present" = same enforcement | **PRESERVED** |

**U-rule summary:** 9 of 10 PRESERVED, 1 DROPPED (U-08 warm neutrals)

### C-Rules (Compositional, 21 rules: C-01 through C-21)

| Master Rule | Master Line | Remediation Presence | Relationship |
|-------------|-------------|---------------------|-------------|
| C-01 | 172-174 | Not referenced -- Remediation doesn't count mechanisms by catalog family | **DROPPED** |
| C-02 | 175 | Not referenced -- Remediation doesn't count total deployed mechanisms | **DROPPED** |
| C-03 | 176 | Not referenced -- mechanism density per viewport not checked | **DROPPED** |
| C-04 | 177 | Not referenced | **DROPPED** |
| C-05 | 180-183 | Phase 3.2 (lines 357-381): 3 divider types exist (smooth/bridge/breathing). BUT: margin values differ dramatically (Master: 48/64/80; Remediation: 16/24/24) | **REFINED** (types preserved, dimensions reversed) |
| C-06 | 184 | Not explicitly checked in Remediation; HTML structure preserves existing transition ordering | **DROPPED** (implicit only) |
| C-07 | 185 | Phase 3.3 (lines 383-394): bridge-prose styling preserved | **PRESERVED** (implicitly) |
| C-08 | 186 | Phase 8A (lines 808-840): verifies channel co-variation at transitions | **REFINED** (tested as multi-channel shift, not as reinforcing pairs) |
| C-09 | 189 | Not referenced -- designed moments per quartile not checked | **DROPPED** |
| C-10 | 190 | Phase 1.5 (lines 196-224): converts to callout family -- OPPOSITE of "purpose-built" | **REVERSED** (Master: invent new; Remediation: adopt standard) |
| C-11 | 191 | Phase 5 (lines 616-652): spacing variation by zone | **PRESERVED** |
| C-12 | 194 | Not referenced -- no rejection log in Remediation | **DROPPED** |
| C-13 | 195 | Not referenced -- no designed silence zones in Remediation | **DROPPED** |
| C-14 | 196 | Not referenced -- signal-to-silence ratio not checked | **DROPPED** |
| C-15 | 199 | Not referenced -- intentionality dimensions not checked | **DROPPED** |
| C-16 | 200 | Not referenced | **DROPPED** |
| C-17 | 201 | Not referenced | **DROPPED** |
| C-18 | 202 | Phase 8G question 2 (line 904): "Does the page feel like it COMPRESSES in the middle?" -- related concept | **REFINED** (implicit density arc check, not binary rule) |
| C-19 | 203-205 | Not referenced | **DROPPED** |
| C-20 | 208-212 | Not referenced -- fractal coherence not checked | **DROPPED** |
| C-21 | 213-215 | Not referenced -- compositional clusters not produced | **DROPPED** |

**C-rule summary:** 3 PRESERVED/REFINED, 1 REVERSED, 17 DROPPED

### MC-Rules (Multi-Coherence, 8 rules: MC-01 through MC-08)

| Master Rule | Master Line | Remediation Presence | Relationship |
|-------------|-------------|---------------------|-------------|
| MC-01 | 221-224 | Not referenced -- CCS score not calculated in Remediation | **DROPPED** |
| MC-02 | 225-226 | Phase 8A (lines 808-840): verifies channels co-vary at transitions. Related but measured differently (channel shift count vs reinforcing pair count) | **REFINED** |
| MC-03 | 227 | Not referenced | **DROPPED** |
| MC-04 | 228 | Not referenced | **DROPPED** |
| MC-05 | 229 | Not referenced | **DROPPED** |
| MC-06 | 230-233 | Not referenced -- cascading chains not checked | **DROPPED** |
| MC-07 | 234-236 | Phase 8A (lines 808-840): verifies multiple channels shift together. Different framing (transition shifts vs dimension pairs) | **REFINED** |
| MC-08 | 237 | Phase 5 (lines 620-629): paragraph margin variation by zone = 4 distinct values. Satisfies anti-metronome | **PRESERVED** |

**MC-rule summary:** 1 PRESERVED, 2 REFINED, 5 DROPPED

### SC-Rules (Scale-Channel, 10 rules: SC-01 through SC-10)

| Master Rule | Master Line | Remediation Presence | Relationship |
|-------------|-------------|---------------------|-------------|
| SC-01 | 243-250 | Phase 8C (lines 857-865): Scale 5 level verification with same 5 levels | **PRESERVED** |
| SC-02 | 251-257 | Phase 8A channel verification; expected outcome table targets 7/7 channels | **PRESERVED** |
| SC-03 | 258 | Not referenced -- richness matrix coverage not checked | **DROPPED** |
| SC-04 | 259 | Not referenced -- channel load distribution not checked | **DROPPED** |
| SC-05 | 260 | Not referenced | **DROPPED** |
| SC-06 | 261 | Not referenced -- restraint ratio per channel not calculated | **DROPPED** |
| SC-07 | 262 | Not referenced | **DROPPED** |
| SC-08 | 263 | Not referenced | **DROPPED** |
| SC-09 | 264-267 | Phase 8A (lines 808-840): verifies >= 5 channel shifts at zone transitions. Master requires 3; Remediation checks 5 at zone level, 3+ at section level | **EXTENDED** |
| SC-10 | 269-270 | Phase 2 (lines 289-308): zone backgrounds organized warm->cool->warm. Chromatic-density alignment implicit in zone grouping | **PRESERVED** (implicitly) |

**SC-rule summary:** 3 PRESERVED, 1 EXTENDED, 6 DROPPED

### MG-Rules (Metaphor Gates, 5 rules: MG-01 through MG-05)

| Master Rule | Master Line | Remediation Presence | Relationship |
|-------------|-------------|---------------------|-------------|
| MG-01 | 276-277 | Not referenced -- metaphor quality rubric not evaluated | **DROPPED** |
| MG-02 | 278 | Not referenced | **DROPPED** |
| MG-03 | 279-287 | Not referenced | **DROPPED** |
| MG-04 | 288-289 | Not referenced -- metaphor structural test not performed | **DROPPED** |
| MG-05 | 290-293 | Not referenced | **DROPPED** |

**MG-rule summary:** 0 PRESERVED, 5 DROPPED (entire family absent from Remediation)

### P-Rules (Process, 8 rules: P-01 through P-08)

| Master Rule | Master Line | Remediation Presence | Relationship |
|-------------|-------------|---------------------|-------------|
| P-01 | 299-305 | Not referenced -- content inventory already exists (remediation context) | **DROPPED** (N/A for remediation) |
| P-02 | 306 | Not referenced | **DROPPED** |
| P-03 | 307 | Not referenced -- single agent, no two-instance pattern | **DROPPED** |
| P-04 | 308 | Remediation checkpoints (after each phase) serve similar function | **REFINED** |
| P-05 | 309-310 | Not referenced -- zone boundaries already established | **DROPPED** |
| P-06 | 311-312 | Not referenced | **DROPPED** |
| P-07 | 313-314 | Remediation produces deliverable artifacts at each phase (HTML file is the artifact) | **PRESERVED** (implicitly) |
| P-08 | 315-319 | Phase 8B (lines 842-855): spatial re-check after all phases | **REFINED** (single re-check at end vs after each pass) |

**P-rule summary:** 1 PRESERVED, 2 REFINED, 5 DROPPED

### CT-Rules (Content Transformation, 8 rules: CT-01 through CT-08)

| Master Rule | Master Line | Remediation Presence | Relationship |
|-------------|-------------|---------------------|-------------|
| CT-01 | 388-390 | Line 994: "Do NOT change text content." DIRECT CONTRADICTION | **REVERSED** |
| CT-02 | 392-395 | Not addressed -- prose tone left as-is | **DROPPED** |
| CT-03 | 397-400 | Not addressed | **DROPPED** |
| CT-04 | 402-403 | Not addressed (content selection already made) | **DROPPED** |
| CT-05 | 405-407 | Not addressed | **DROPPED** |
| CT-06 | 409-410 | Not addressed | **DROPPED** |
| CT-07 | 412-413 | Not addressed | **DROPPED** |
| CT-08 | 415-417 | Not addressed | **DROPPED** |

**CT-rule summary:** 0 PRESERVED, 1 REVERSED, 7 DROPPED (entire family absent except as explicit contradiction)

### RP-Rules (Recovery Protocols, 4 rules: RP-01 through RP-04)

| Master Rule | Master Line | Remediation Presence | Relationship |
|-------------|-------------|---------------------|-------------|
| RP-01 | 423-424 | Not referenced -- no metaphor re-derivation in remediation | **DROPPED** |
| RP-02 | 426-428 | Not referenced -- single agent, no team diagnostic | **DROPPED** |
| RP-03 | 430-431 | Not referenced | **DROPPED** |
| RP-04 | 433-434 | Not referenced -- no gate checkpoints with committed artifacts | **DROPPED** |

**RP-rule summary:** 0 PRESERVED, 4 DROPPED (entire family absent)

### CP-Rules (Communication Protocol, 6 rules: CP-A through CP-F)

| Master Rule | Master Line | Remediation Presence | Relationship |
|-------------|-------------|---------------------|-------------|
| CP-A | 506-507 | Not referenced -- single agent, no inter-agent messaging | **DROPPED** |
| CP-B | 508-509 | Not referenced | **DROPPED** |
| CP-C | 510 | Not referenced | **DROPPED** |
| CP-D | 511-512 | Not referenced | **DROPPED** |
| CP-E | 513 | Not referenced | **DROPPED** |
| CP-F | 518-521 | Not referenced | **DROPPED** |

**CP-rule summary:** 0 PRESERVED, 6 DROPPED (entire family absent -- N/A for single-agent)

### Gate Sequence (C3, lines 529-560)

| Master Gate | Master Line | Remediation Presence | Relationship |
|-------------|-------------|---------------------|-------------|
| Gate 0 | 532 | Not referenced -- content already exists | **DROPPED** (N/A) |
| Gate 0.5 | 470 | Not referenced -- content quality already determined | **DROPPED** (N/A) |
| Gate 1 | 533-536 | Remediation Phase checkpoints serve similar function but check different items | **REFINED** |
| Gate 2 | 537 | Not referenced -- landmarks already exist | **DROPPED** (N/A) |
| Gate 3 | 537-547 | Phase 8A (lines 808-840): multi-coherence verification -- partial overlap | **REFINED** |
| Gate 4 | 548-551 | Not referenced -- no metaphor coherence gate | **DROPPED** |
| Gate 5 | 552 | Phase 8E-8G (lines 877-908): richness checklist + perception check. Much lighter than full Mode 4 PA | **REFINED** |
| Kill Criteria | 554-559 | Some overlap: PA-05 >= 3/4 (line 36), container width (line 992) | **REFINED** |

### PA Deployment (C4, lines 562-605)

| Master Element | Master Line | Remediation Presence | Relationship |
|----------------|-------------|---------------------|-------------|
| Screenshot pre-capture | 565-569 | Not referenced -- single agent does visual inspection | **DROPPED** |
| 9 auditor assignments | 571-581 | Not referenced -- no PA auditors in remediation | **DROPPED** |
| Tier A questions | 584-588 | Not referenced | **DROPPED** |
| Cold look protocol | 590-591 | Phase 8G (lines 899-908): self-scroll perception check = lighter equivalent | **REFINED** |
| Auditor isolation rules | 595-600 | Not applicable -- single agent | **DROPPED** |
| Staged downgrade | 602-604 | Line 1019: time-short priority order (different mechanism) | **REFINED** |

### PA Skill Invocation (C7, lines 657-720)

Entirely absent from Remediation. **ALL DROPPED.**

### Conviction Layer (Section A, lines 15-107)

| Master Element | Master Line | Remediation Presence | Relationship |
|----------------|-------------|---------------------|-------------|
| A1 Thesis | 17-24 | No conviction layer in Remediation | **DROPPED** |
| A2 Tensions | 28-33 | Not referenced | **DROPPED** |
| A3 Anti-scale model | 36-45 | Phase 8C (lines 857-865): 5-scale verification | **REFINED** (scales checked but anti-scale model not invoked) |
| A4 Dual richness sources | 48-54 | Line 940: "CSS-only caps at PA-05 2-3/4" acknowledges limitation | **REFINED** |
| A5 Compositional fluency | 57-69 | Phase 8A (lines 808-840): multi-channel verification | **REFINED** (verification without the theory) |
| A6 Experiential laws | 72-79 | Not referenced | **DROPPED** |
| A7 CD-006 exemplar | 82-95 | Phase 1 steps 1.2-1.4: aria-label, role="note", role="separator" derive from CD-006 | **EXTENDED** (CD-006 patterns operationalized) |
| A8 Reader journey | 99-106 | Phase 8G question 2 (line 904): compression/release check | **REFINED** (journey tested but not as 5-act framework) |

### Conviction Closing (Section D, lines 722-734)

| Master Element | Master Line | Remediation Presence | Relationship |
|----------------|-------------|---------------------|-------------|
| "The mission is beauty, not compliance" | 726 | Not referenced -- Remediation is compliance-focused | **REVERSED** |
| Absence coherence | 732 | RC-7 (line 922): "RESOLVED -- Mandatory recipes eliminate the choice to omit channels" | **REVERSED** (Master: consistent absence = restraint; Remediation: eliminate absence entirely) |
| "STOP ANALYZING. START BUILDING" | 734 | Remediation is pure execution spec -- same spirit | **PRESERVED** (implicitly) |

### Reference Library (Section E, lines 737-782)

| Master Element | Master Line | Remediation Presence | Relationship |
|----------------|-------------|---------------------|-------------|
| Per-agent file routing | 741-782 | Not referenced -- single agent reads all | **DROPPED** |
| Builder reads tokens.css | 745 | Phase 8D (line 872): "Colors from tokens.css palette" | **PRESERVED** |
| Builder reads prohibitions.md | 746 | Phase 8D soul check (line 867-876) | **PRESERVED** |
| Planner reads mechanism-catalog | 753 | Not referenced | **DROPPED** |
| Metaphor agent reads TC SKILL | 760 | Not referenced | **DROPPED** |
| PA auditors read PA SKILL | 774-775 | Not referenced | **DROPPED** |

### Authoritative Parameter Table (lines 788-827)

| Master Parameter | Master Line | Remediation Presence | Relationship |
|-----------------|-------------|---------------------|-------------|
| Container width 940-1100px | 792 | Line 992: 960px (narrowed) | **REFINED** |
| Mechanism target 12-14 | 793 | Not referenced | **DROPPED** |
| Mechanism hard cap 16 | 794 | Not referenced | **DROPPED** |
| Mechanism density <= 4/viewport | 795 | Not referenced | **DROPPED** |
| Void threshold (skeleton) 1620px | 796 | Not referenced | **DROPPED** |
| Void threshold (final) 2160px | 797 | Not referenced | **DROPPED** |
| Content-to-void ratio graduated | 798 | Not explicitly checked | **DROPPED** |
| Header 20%/25% | 799 | Not referenced | **DROPPED** |
| Builder prompt <= 75 lines | 800 | N/A -- single agent | **DROPPED** |
| Master prompt <= 250 lines | 801 | N/A | **DROPPED** |
| Total review passes = 5 | 802 | N/A -- 9 phases | **DROPPED** |
| Communication min 8 messages | 803 | N/A -- single agent | **DROPPED** |
| CPL 45-80 | 804 | Not explicitly checked | **DROPPED** |
| Transition types >= 3 | 805 | Phase 3.2: 3 types maintained | **PRESERVED** |
| Designed moments >= 1/quartile | 806 | Not referenced | **DROPPED** |
| Soul compliance 10/10 | 807 | Phase 8D: 7-item check | **REFINED** |
| Metaphor >= 12/18 | 808 | Not referenced | **DROPPED** |
| Scale ceiling 5 | 809 | Phase 8C: 5 levels | **PRESERVED** |
| Max spacing 96px | 810 | Phase 3.2+8B: 120px (different threshold) | **REFINED** |
| Token compliance >= 80% | 811 | Not referenced | **DROPPED** |
| Restraint ratio >= 1.5:1 | 812 | Not referenced | **DROPPED** |
| Signal-to-silence 0.6-0.8:1 | 813 | Not referenced | **DROPPED** |
| Silence zones >= 2 | 814 | Not referenced | **DROPPED** |
| Reinforcing pairs >= 2 | 815 | Not referenced as pairs | **DROPPED** |
| CCS >= 0.30 | 816 | Not referenced | **DROPPED** |
| Channel coverage >= 5/7 | 817 | Phase 8A: targets 7/7 | **EXTENDED** |
| Richness matrix >= 30/35 | 818 | Not referenced | **DROPPED** |
| Intentionality >= 3/6 | 819 | Not referenced | **DROPPED** |
| Channel shift >= 3/transition | 820 | Phase 8A: checks >= 5 at zone transitions | **EXTENDED** |
| Chromatic-density alignment | 821 | Phase 2: warm-cool-warm arc | **PRESERVED** |
| SCI >= 0.60 | 822 | Not referenced | **DROPPED** |
| First 1.5 viewport textures >= 3 | 823 | Not referenced | **DROPPED** |
| Builder visibility <= 75 lines | 824 | N/A | **DROPPED** |
| Min messages >= 8 | 825 | N/A | **DROPPED** |
| Crown jewel gate >= 6/8 | 826 | Not referenced | **DROPPED** |

**Parameter table summary:** 5 PRESERVED, 3 REFINED, 2 EXTENDED, 20 DROPPED

---

## PART 3: AGGREGATE STATISTICS

### By Relationship Type

| Relationship | Count (Forward) | Count (Reverse) | Total |
|-------------|----------------|-----------------|-------|
| **PRESERVED** | 12 | 25 | 37 |
| **REVERSED** | 10 | 6 | 16 |
| **EXTENDED** | 18 | 5 | 23 |
| **NEW** | 52 | 0 | 52 |
| **REFINED** | 8 | 22 | 30 |
| **DROPPED** | 0 | 103 | 103 |

### Master Rule Families: Coverage in Remediation

| Rule Family | Total Rules | Preserved/Refined/Extended | Dropped | Drop Rate |
|------------|-------------|--------------------------|---------|-----------|
| S-rules (Spatial) | 17 | 5 | 12 | **71%** |
| U-rules (Soul) | 10 | 9 | 1 | **10%** |
| C-rules (Compositional) | 21 | 4 | 17 | **81%** |
| MC-rules (Multi-Coherence) | 8 | 3 | 5 | **63%** |
| SC-rules (Scale-Channel) | 10 | 4 | 6 | **60%** |
| MG-rules (Metaphor Gates) | 5 | 0 | 5 | **100%** |
| P-rules (Process) | 8 | 3 | 5 | **63%** |
| CT-rules (Content Transform) | 8 | 0 | 8 | **100%** (1 reversed) |
| RP-rules (Recovery) | 4 | 0 | 4 | **100%** |
| CP-rules (Communication) | 6 | 0 | 6 | **100%** |
| **TOTAL** | **97** | **28** | **69** | **71%** |

### Remediation-Only Content (No Master Counterpart)

The following major instruction blocks in the Remediation Spec are entirely **NEW** with no Master Prompt counterpart:

1. **Deallocation framework** (Phase 0, ~75 lines): concept of removing sub-perceptual CSS before adding new
2. **Perception thresholds** (Appendix, ~15 lines): minimum delta table for 8 CSS properties
3. **Grid layout specifications** (Phase 1.7-1.9, ~50 lines): specific grid patterns for 3 sections
4. **Callout family CSS** (Phase 3.4, ~60 lines): standard component library adoption
5. **Accessibility features** (Phase 7, ~90 lines): skip link, focus states, reduced motion, print, responsive breakpoints
6. **Element-level richness** (Phase 6, ~50 lines): inline code, hover states, smooth scrolling, section indicators
7. **Root cause resolution matrix** (Section 6, ~20 lines): 15 root causes with resolution status
8. **Risk assessment with PA-05 predictions** (Section 7, ~30 lines): honest capability assessment

### Key Contradictions (REVERSED items)

| # | Topic | Master Says | Remediation Says | Impact |
|---|-------|------------|------------------|--------|
| 1 | Content transformation | CT-01: rewrite every sentence | Do NOT change text content | **CRITICAL** -- fundamentally different paradigm |
| 2 | Agent count | Multi-agent (7+ agents across 5 passes) | Single Opus agent | **CRITICAL** -- different execution model |
| 3 | Component philosophy | C-10: invent 2+ purpose-built components | Convert to standard library classes | **HIGH** -- opposite component strategy |
| 4 | Divider spacing | C-05: SMOOTH=48px, BRIDGE=64px, BREATHING=80px | SMOOTH=16px, BRIDGE=24px, BREATHING=24px | **HIGH** -- 50-70% reduction in transition spacing |
| 5 | Build approach | Fresh build from content through passes | Preserve 89.5% of existing HTML | **CRITICAL** -- build vs remediate |
| 6 | Absence coherence | Consistent absence = restraint | Eliminate absence through mandatory recipes | **MEDIUM** -- philosophical reversal |
| 7 | Builder visibility | <= 75 lines, shielded from full spec | Builder reads entire spec | **MEDIUM** -- information exposure reversed |
| 8 | Mission framing | "Beauty, not compliance" | Compliance-focused execution with perception checks | **HIGH** -- framing reversal |
| 9 | Time budget | 240-400 min with staged downgrade | 120 min single pass | **HIGH** -- 50-70% time reduction |
| 10 | Max gap threshold | S-09: 96px | Phase 8B: 120px | **MEDIUM** -- 25% looser threshold |

---

## PART 4: STRUCTURAL ANALYSIS

### What the Remediation Spec ADDS to the Master Prompt

1. **Perception science layer:** Every CSS value in the Remediation has a minimum perception threshold. The Master Prompt has no perception thresholds -- it assumes all CSS changes are visible. This is the Remediation's single most important innovation.

2. **Deallocation before allocation:** The concept of REMOVING ineffective CSS before adding new CSS has no Master Prompt equivalent. The Master builds from zero; the Remediation must manage existing CSS inventory.

3. **Accessibility as a first-class concern:** 7 accessibility features across ~90 CSS lines. The Master mentions `aria-label` and `role` in CD-006's exemplar but has zero accessibility rules.

4. **Component library adoption:** Converting custom components to standard library families. The Master exclusively emphasizes invention (`>= 2 purpose-built components`). This represents a fundamentally different design philosophy (standardization vs bespoke).

5. **Layout variety through grids:** 3 specific grid layouts breaking single-column monotony. The Master has no explicit grid mandates; layout variety is expected to emerge from compositional planning.

6. **Responsive design:** Full responsive implementation (768px, 480px breakpoints) with print styles. The Master audits at these breakpoints but never mandates responsive CSS.

### What the Remediation Spec DROPS from the Master Prompt

1. **ALL metaphor gates (MG-01 through MG-05):** The Remediation assumes the existing metaphor is acceptable and doesn't re-evaluate it. This means the Remediation cannot fix a fundamentally broken metaphor.

2. **ALL communication protocols (CP-A through CP-F):** Single-agent execution eliminates inter-agent messaging. This is acknowledged as N/A, not a gap.

3. **ALL recovery protocols (RP-01 through RP-04):** No fallback if remediation phases fail. The Remediation's implicit recovery is "undo and try again."

4. **ALL content transformation rules (CT-01 through CT-08):** Content is explicitly preserved. This is the most consequential DROP -- the Master mandates prose rewriting; the Remediation forbids it.

5. **Most compositional rules (17/21 C-rules):** Mechanism counting, rejection logs, silence zones, intentionality dimensions, fractal coherence, compositional clusters -- all absent. The Remediation focuses on visible channels, not compositional architecture.

6. **Gate sequence (7 gates -> phase checkpoints):** The Master's rigorous gate structure with kill criteria is replaced by lighter per-phase perception checks.

7. **PA deployment (Mode 4, 9 auditors):** Replaced by single-agent self-check (Phase 8). This is the single biggest quality assurance downgrade.

### Fundamental Paradigm Differences

| Dimension | Master Prompt | Remediation Spec |
|-----------|--------------|-----------------|
| Build philosophy | Fresh construction | Surgical modification |
| Content model | Rewrite everything | Change nothing |
| Agent model | Multi-agent (7+) | Single agent |
| Quality model | Multi-gate + Mode 4 PA | Self-check per phase |
| Composition model | Mechanism architecture (CCS, clusters) | Channel activation (visibility) |
| Component model | Invent bespoke | Adopt standard library |
| Time model | 240-400 min | 120 min |
| Failure model | Abort + re-derive | Undo + re-apply |
| Success metric | PA-05 4/4 (DESIGNED) | PA-05 3/4 (COMPETENT) |
| Richness strategy | Emergence from composition | Prescription through recipes |

---

## PART 5: CRITICAL OBSERVATIONS

### 1. The Remediation is NOT a subset of the Master -- it is a parallel document

Only 28 of 97 Master rules are preserved/refined/extended in the Remediation. The Remediation adds 52 entirely new instructions with no Master counterpart. The relationship is closer to "sibling documents addressing the same page from different paradigms" than "remediation implements master."

### 2. The 10 REVERSED items are architecturally intentional, not errors

Every contradiction is justified by the remediation context:
- Content preservation (vs CT-01) because the page has correct content
- Single agent (vs multi-agent) because remediation is narrower scope
- Standard library (vs C-10 bespoke) because existing HTML uses custom classes that need standardization
- Reduced spacing (vs C-05) because existing gaps are already too large

### 3. The Master's compositional depth is almost entirely absent

The Master Prompt's distinctive contribution -- compositional coupling (CCS), mechanism interaction types, fractal coherence, compositional clusters -- is reduced to "do channels co-vary at transitions?" in the Remediation. The Remediation achieves breadth (7 channels) at the expense of depth (coupling, cascading, responding).

### 4. Perception thresholds are the Remediation's unique contribution

The Master Prompt never asks "can a human see this?" The Remediation's perception threshold table and Phase 0 deallocation of invisible CSS represent a layer of rigor absent from the Master. If the Master incorporated perception thresholds (minimum delta table for each CSS property), it would prevent the sub-perceptual waste that made the Remediation necessary.

### 5. Accessibility is a genuine gap in the Master

The Remediation's 7 accessibility features (skip link, focus states, WCAG compliance, print styles, responsive breakpoints, reduced motion, semantic landmarks) expose a real gap in the Master Prompt. The Master has zero accessibility rules. Even for fresh builds, these should be present.

---

**END OF LINE-BY-LINE CROSS-REFERENCE**

**Statistics:**
- Remediation lines analyzed: ~600 substantive (of 1,025 total)
- Master rules analyzed: 97 (all rule families) + gates, parameters, conviction, reference library
- Forward map entries: 100+
- Reverse map entries: 130+
- Total cross-reference entries: 230+
