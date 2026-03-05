# End-to-End Information Flow Trace — Pipeline v5

**Date:** 2026-02-26
**Analyst:** Information Flow Tracer (Opus)
**Scope:** Trace exact information path through all pipeline junctions, documenting what enters, exits, is LOST, TRANSFORMED, or ADDED at each stage.
**Focus:** D2 (Compression Loss) and D12 (Downstream Propagation) crack dimensions.

---

## 0. Source File Inventory (Total Pipeline Spec)

| File | Lines | Role |
|------|-------|------|
| MANIFEST.md | 1,447 | Routing authority — what goes where |
| artifact-orchestrator.md | 744 | Execution authority — step-by-step protocol |
| artifact-routing.md | 1,056 | Content routing + TC brief assembly |
| artifact-builder-recipe-compose.md | 833 | Pass A recipe (D-01–D-06, D-09) |
| artifact-builder-recipe-polish.md | 300 | Pass B recipe (D-07, D-08) |
| artifact-tc-brief-template.md | 235 | Brief template structure |
| artifact-identity-perception.md | 556 | Soul constraints + perception thresholds |
| artifact-value-tables.md | 262 | CSS vocabulary (pre-computed color pairs, spacing scale) |
| gate-runner-spec.md | 299 | Human-readable gate specifications |
| gate-runner-core.js | 2,808 | Executable Playwright gate code |
| pa-deployment.md | 442 | Auditor assignments + screenshot protocol |
| pa-weaver.md | 468 | Weaver protocol + verdict logic |
| pa-questions.md | 431 | 69 PA question definitions |
| pa-guardrails.md | 113 | Auditor constraints |
| pa-guardrails-weaver.md | 59 | Weaver-only guardrails |
| **TOTAL** | **10,053** | — |

**Pipeline spec: 10,053 lines governing the creation of a single HTML page.**

---

## 1. JUNCTION 1: Raw Content → Content Map

### What Enters
| Input | Source | Lines | Provider |
|-------|--------|-------|----------|
| Raw content markdown | User-provided | Varies (500-5,000+) | External |
| Content analysis protocol | artifact-routing.md "Phase 0" | ~80 lines | Spec file |
| 5-axis reader model | artifact-routing.md "Reader Model" | ~30 lines | Spec file |

**Total input to Content Analyst:** Raw content + ~110 lines of protocol.

### What Exits
| Output | Destination | Lines | Format |
|--------|-------------|-------|--------|
| Content Map | Brief Assembler (Phase 1) | ~30-50 | Structured analysis |

**Content Map contains:**
- Content type classification (PROSE/MIXED/VISUAL)
- Per-section character map (NARRATIVE/REFERENCE/CODE)
- Structural heterogeneity assessment
- Metaphor viability assessment (candidate metaphors)
- Density arc estimate
- Reader model classification (5 axes)

### What Is LOST (D2: Compression)
- **Raw content detail:** The full source text (potentially thousands of lines) is compressed to ~35 lines of structural description. This is REGENERATION (new analysis), not compression — the Content Analyst reads the full content and produces a fresh map. The map captures STRUCTURE, not content.
- **Nuance of individual sections:** Per-section character classification reduces each section to a single label (NARRATIVE/REFERENCE/CODE). Sections with mixed character (e.g., narrative with embedded code) lose their hybrid nature.
- **Reader context:** The actual target audience and reading context is inferred, not known. The 5-axis reader model is the Content Analyst's best guess.

### What Is TRANSFORMED
- **Content → Structure:** Prose/data/code is transformed into structural labels and density estimates. The content itself does not propagate; only its structural fingerprint does.
- **Implicit metaphors → Explicit candidates:** Metaphors latent in the content are surfaced as named candidates with viability assessments.

### What Is ADDED
- **Metaphor seeds:** Content Analyst identifies potential governing metaphors not explicitly stated in the source material.
- **Density arc shape:** A temporal structure (how density flows across sections) is INVENTED by the analyst, not extracted from the content.
- **Zone architecture recommendation:** Content Analyst proposes how to divide the content into visual zones.

### D2 Assessment
**Compression ratio: ~100:1 to ~150:1** (content to map). This is the pipeline's FIRST and LARGEST compression event. However, the spec explicitly states this is REGENERATION not compression — the Content Analyst produces an original analysis. The risk is not information loss but ANALYSIS QUALITY: if the analyst misreads the content's character, everything downstream inherits that error.

### D12 Assessment
The Content Map is the SOLE carrier of content intelligence downstream. If the Content Analyst fails to identify structural heterogeneity, the orchestrator will select APPLIED mode (lower ambition). If the analyst misidentifies metaphor viability, the brief will lack compositional DNA. **The Content Map is a single point of failure for content understanding.**

---

## 2. JUNCTION 2: Content Map → Execution Brief

### What Enters
| Input | Source | Lines | Provider |
|-------|--------|-------|----------|
| Content Map | Phase 0 Content Analyst | ~35 | Generated |
| TC Brief Template | artifact-tc-brief-template.md | 235 | Spec file |
| Soul constraints (world-description ONLY) | artifact-identity-perception.md "1.2" | ~15 | Spec file |
| Perception thresholds (natural law format) | artifact-identity-perception.md "2.2" | ~8 | Spec file |
| Recipe phases summary | artifact-builder-recipe-compose.md | ~40 (extracted) | Spec file |
| Disposition instructions D-01–D-09 | artifact-builder-recipe-compose.md | ~40 | Spec file |
| Mode selection | Orchestrator decision (Phase 0.5) | 1 decision | Orchestrator |

**Total input to Brief Assembler:** ~370 lines of structured input.

### What Exits
| Output | Destination | Lines | Format |
|--------|-------------|-------|--------|
| Execution Brief | Pass A Builder, Pass B Builder | ~100-165 | 4-tier recipe |

**Brief structure:**
| Tier | Name | Lines | Content |
|------|------|-------|---------|
| 1 | IDENTITY | ~15 | 10 soul constraints as world-description |
| 2 | PERCEPTION PHYSICS | ~8 | 4 thresholds as NATURAL LAWS + calibration |
| 3 | COMPOSITIONAL | ~50 | Multi-coherence, metaphor, density arc, content-form, creative authority, CSS values |
| 4 | DISPOSITION | ~40 | D-01–D-09 in recipe format |
| — | Content Map | ~35 (compressed to ~15) | Appended zone table + metaphor + arc |

### What Is LOST (D2: Compression)
- **Template richness:** The 235-line template is compressed to ~100-165 lines of actual brief. Template INSTRUCTIONS (how to assemble) are consumed but not forwarded.
- **Content Map detail:** The ~35-line Content Map is compressed to ~15 lines in the brief appendix. Content tensions and alternate metaphor seeds are dropped.
- **Recipe detail:** The 833-line Pass A recipe is represented by ~40 lines of disposition instructions + ~50 lines of compositional framework. **Compression ratio: 833 → ~90 = 9.2:1.** The bulk of the recipe (detailed CSS examples, worked examples, deployment steps) does NOT enter the brief.
- **Soul constraint gate-check format:** Identity is delivered as world-description ONLY. The "Gate check" and "CSS rule" fields from artifact-identity-perception.md are deliberately excluded. **This is INTENTIONAL loss** — exposing gate format to the builder triggers suppressor S-02.
- **Perception threshold gate format:** Thresholds are delivered as "natural laws" + calibration, not as pass/fail. The builder sees "Adjacent backgrounds differ by at least 15 RGB points" but NOT "FAIL if delta < 15 RGB."

### What Is TRANSFORMED
- **Prohibitions → World-description:** "Do NOT use border-radius" becomes "Every surface is sharp. Corners are cut, not curved." This is the pipeline's most critical transformation — it converts constraint into creative context.
- **Thresholds → Natural laws:** Pass/fail numbers become physical laws of the design world. "GR-11: bg delta >= 15 RGB" becomes "Adjacent backgrounds differ by at least 15 RGB points. Below that, the human eye cannot distinguish them."
- **Mode → Brief format:** APPLIED/COMPOSED mode is not a label in the brief. It is implicit in the recipe structure and compositional guidance. The builder never sees "Mode: COMPOSED."
- **Content Map → Zone background assignments:** The Content Map's density arc is transformed into specific hex value assignments from artifact-value-tables.md, with pre-computed RGB deltas.

### What Is ADDED
- **Zone background hex values:** Specific color assignments from the value table, not present in the Content Map.
- **Multi-coherence boundary specifications:** Explicit channel assignments per boundary (e.g., "Z1→Z2 = light (3 channels: background, typography, spacing)").
- **Content-type conditional guidance:** Prose vs Mixed vs Visual specific advice not in the Content Map.
- **Hover behavior vocabulary (MANDATORY):** Explicit CSS snippets for hover states — added because prior builds had 100% loss rate on hover interactions.

### CRITICAL: What the Brief Assembler Does NOT Forward
The Brief Assembler applies a survival function S(x) = 1/(1+C(x)) to filter content. Items with zero compositional complexity survive; items with violations are removed. This means **the brief is curated, not comprehensive.**

### BV Verification Layer (NEW in v5)
Before the brief reaches the builder, the orchestrator runs 5 verification gates:
- BV-01: Tier line budget (T1>=12, T2>=6, T3>=40, T4>=32, ContentMap>=24)
- BV-02: Background delta verification (every adjacent pair >= 15 RGB)
- BV-03: Recipe format verification (recipe:checklist verb ratio >= 3:1)
- BV-04: Suppressor scan (zero quality suppressor patterns)
- BV-05: Recipe keyword scan (recipe-format language present)

**Maximum 2 revision cycles.** If BV fails after 2 cycles: ABORT.

### D2 Assessment
**Net compression: ~370 lines input → ~100-165 lines output = 2.2-3.7:1.** This is moderate compression. The real D2 risk is not the brief itself but the RECIPE compression (833 → ~90 lines, 9.2:1). The detailed deployment steps, CSS examples, and worked examples from the recipe do NOT reach the builder via the brief. However, the builder receives reference files DIRECTLY (see Junction 3), which partially compensates.

### D12 Assessment
The brief is the ONLY curated document the builder receives. Everything else is raw reference files. If the brief under-specifies Tier 3 (compositional frameworks), the builder has no other source for multi-coherence guidance, boundary specifications, or density arc intent. **Tier 3 is the highest-leverage compression point in the entire pipeline.**

---

## 3. JUNCTION 3: Brief + Reference Files → Pass A HTML

### What Enters
| Input | Source | Lines | Provider |
|-------|--------|-------|----------|
| Execution Brief | Phase 1 Brief Assembler | ~100-165 | Generated |
| tokens.css | design-system/compositional-core/vocabulary/ | 183 | Design system |
| components.css | design-system/compositional-core/components/ | ~944-1,195 | Design system |
| mechanism-catalog.md | design-system/compositional-core/grammar/ | Varies | Design system |
| Value tables | artifact-value-tables.md | ~262 | Spec file |
| Pass A Recipe | artifact-builder-recipe-compose.md | 833 | Spec file |
| CD-006 reference (optional, COMPOSED only) | design-system/pipeline/archived-runs/ | ~1,200 | Historical artifact |

**Total builder input: ~2,500-3,600 lines** (BV-07 enforces <= 2,500 ceiling, so orchestrator must compress if over).

### What Exits
| Output | Destination | Lines | Format |
|--------|-------------|-------|--------|
| Pass A HTML | Pass B Builder (Phase 2B) + Structural Check | ~400-700 CSS | HTML + inline CSS |
| Conviction statement | Orchestrator (archived) | 3 sentences | HTML comment |
| Self-evaluation | Orchestrator | 7 answers | HTML comment |
| IMPROVEMENTS list | Orchestrator | 5-10 items | HTML comment |

### What Is LOST (D2: Compression)
- **Recipe instructions:** The 833-line recipe is READ by the builder but produces only ~400-700 lines of CSS output. The recipe contains WHY and HOW guidance that manifests as CSS choices but is not preserved in the output. **The recipe is consumed, not forwarded.**
- **tokens.css vocabulary:** Of 183 lines of design tokens, only a subset is actually used. Unused tokens represent available-but-unrealized vocabulary.
- **components.css library:** Of ~944-1,195 lines of components, historical builds use 3-8 out of 26 available. Target is 8+, but most vocabulary goes unused. **This is vocabulary utilization loss, not information loss.**
- **mechanism-catalog.md techniques:** The catalog offers dozens of mechanisms; the builder selects ~14+ per quality floor. Unselected mechanisms are vocabulary that could have been deployed.
- **Value table options:** Of ~262 lines of pre-computed CSS values, only a fraction appears in the final CSS. The value table is a menu, not a mandate.

### What Is TRANSFORMED
- **Spec + vocabulary → HTML/CSS:** This is the pipeline's primary GENERATIVE junction. The builder doesn't compress inputs — it creates a new artifact that INTERPRETS the inputs. The brief's Tier 3 multi-coherence specs become actual zone boundaries with multiple CSS channels shifting. The disposition instructions become spatial decisions.
- **World-description → CSS rules:** "Every surface is sharp" becomes `border-radius: 0`. "Borders speak" becomes `border-width: 4px` / `3px` / `1px` on specific elements.
- **Metaphor seed → Governing logic:** A metaphor candidate from the Content Map becomes CSS custom property names, zone relationships, and compositional structure.

### What Is ADDED
- **Creative decisions:** The builder makes hundreds of decisions not specified anywhere: which grid layout, which spacing values, which element gets which border weight, how the metaphor maps to specific zones.
- **Conviction statement:** A 3-sentence articulation of design intent — entirely new information.
- **HTML structure:** Semantic HTML with sections, ARIA landmarks, heading hierarchy — structural decisions based on content understanding.
- **IMPROVEMENTS list:** Builder's self-assessment of 5-10 potential improvements with confidence ratings. This is FORWARD-LOOKING information that feeds the convergence model.

### D2 Assessment
This junction is GENERATIVE, not compressive. Input (~2,500 lines) produces output (~400-700 CSS lines) but the output is a CREATIVE ARTIFACT, not a compression of the input. The D2 risk here is not compression loss but **INTERPRETATION FIDELITY**: does the builder correctly interpret the brief's Tier 3 compositional framework?

### D12 Assessment
**Pass A HTML is the pipeline's most critical downstream propagator.** Every subsequent phase (Pass B, gates, PA, verdict) operates on this artifact. If Pass A misinterprets the brief, Pass B deepens the misinterpretation, gates verify the wrong thing, and PA audits a fundamentally flawed page. The conviction statement partially mitigates this by making the builder's intent explicit and auditable.

---

## 4. JUNCTION 4: Pass A HTML → Structural Check (Phase 2A-gate)

### What Enters
| Input | Source | Lines | Provider |
|-------|--------|-------|----------|
| Pass A HTML | Phase 2A Pass A Builder | ~400-700 CSS | Generated |

### What Exits
| Output | Destination | Lines | Format |
|--------|-------------|-------|--------|
| Structural check results | Orchestrator (Phase 2B decision) | ~20 | PROCEED / RE-SPAWN / REBUILD |

### Check Coverage
The structural check runs a LIGHTWEIGHT gate subset:
- Identity gates GR-01–GR-10 (10 gates — soul compliance)
- GR-51 (heading hierarchy)
- Zone count >= 3
- CSS lines >= 400
- Conviction comment present
- Self-eval comment present

**What this check DOES verify:** Soul constraint compliance, basic structural soundness.
**What this check DOES NOT verify:** Compositional quality, multi-coherence, metaphor expression, perception thresholds, density arc, mechanism deployment.

### D12 Assessment
This is a FILTER junction, not a transformation junction. It gates whether the build proceeds to Pass B. **The gap:** this check cannot detect a build that is soul-compliant but compositionally flat. A builder that produces valid HTML with correct border-radius and container width but zero compositional intelligence will pass this gate. Compositional quality is only assessed in Phase 3B (PA audit), after both build passes and significant resource investment.

---

## 5. JUNCTION 5: Pass A HTML → Pass B HTML

### What Enters
| Input | Source | Lines | Provider |
|-------|--------|-------|----------|
| Pass A HTML | Phase 2A | ~400-700 CSS | Generated |
| Conviction statement | Extracted from Pass A | 3 sentences | HTML comment |
| Self-evaluation | Extracted from Pass A | 7 answers | HTML comment |
| Execution Brief | Phase 1 (same brief) | ~100-165 | Generated |
| tokens.css | Design system | 183 | Reference |
| components.css | Design system | ~944-1,195 | Reference |
| mechanism-catalog.md | Design system | Varies | Reference |
| Value tables | Spec file | ~262 | Reference |
| Pass B Recipe | artifact-builder-recipe-polish.md | 300 | Spec file |
| Structural check results | Phase 2A-gate | ~20 | JSON |

**Total Pass B input: ~2,000-2,800 lines** (Pass A HTML + brief + reference files + Pass B recipe).

### What Exits
| Output | Destination | Lines | Format |
|--------|-------------|-------|--------|
| Pass B HTML (final artifact) | Phase 3 (screenshots, gates, PA) | ~800-1,200 CSS | HTML + inline CSS |
| RESIDUAL comment | Orchestrator | ~10 | HTML comment |
| IMPROVEMENTS list | Orchestrator | 5-10 items | HTML comment |
| EXPERIENTIAL-CHECK | Orchestrator | ~10 | HTML comment |
| SELF-EVALUATION | Orchestrator | ~20 | HTML comment |

### What Is LOST (D2: Compression)
- **Pass B Recipe instructions:** The 300-line recipe is consumed, producing CSS additions but not preserved verbatim.
- **Pass A self-evaluation:** The Pass A builder's 7-answer self-evaluation informs Pass B but is subsumed by Pass B's own self-evaluation.

### What Is TRANSFORMED
- **Pass A structure → Pass B refinement:** Pass B adds 300-600 CSS lines of transitions, hover states, micro-typography, responsive polish, accessibility. The structural skeleton is preserved; the refinement layer is new.
- **Pass A IMPROVEMENTS → Pass B attempts:** Some of Pass A's identified improvements may be addressed by Pass B. The IMPROVEMENTS list serves as creative input.

### What Is ADDED
- **D-07 behavioral CSS:** Hover states, ::selection colors, print styles, reduced-motion — entirely new CSS.
- **D-08 Skeleton Test assessment:** Pass B builder assesses compositional quality.
- **Accessibility layer:** Skip link, ARIA landmarks, focus-visible, contrast checks.
- **EXPERIENTIAL-CHECK:** Builder's own readability assessment from scrolling through the page.
- **RESIDUAL artifact:** Documentation of what was preserved, changed, and deferred.

### ADD-ONLY Constraint (Critical)
Pass B operates under strict ADD-ONLY rules:
- NO changing zone backgrounds (BV-02 locked)
- NO changing layout structure
- NO removing mechanisms
- NO changing the metaphor
- MAY add CSS for hover/focus/selection/print/reduced-motion
- MAY add ARIA attributes

**This constraint prevents Pass B from degrading Pass A's compositional decisions** while allowing refinement. It is the pipeline's primary defense against revision degradation.

### D12 Assessment
Pass B HTML is the FINAL artifact that enters verification. **Everything after this point is READ-ONLY assessment.** The quality ceiling for the entire pipeline is set at the end of Phase 2B. If Pass A produced a compositionally flat page and Pass B only adds hover states to it, no amount of PA auditing or gate running can improve it — only REFINE/REBUILD can.

---

## 6. JUNCTION 6: Pass B HTML → Screenshots + Gate Runner

### What Enters
| Input | Source | Lines | Provider |
|-------|--------|-------|----------|
| Pass B HTML | Phase 2B | ~800-1,200 CSS | Generated |

### What Exits (two parallel streams)

**Stream A: Screenshots**
| Output | Destination | Lines | Format |
|--------|-------------|-------|--------|
| Screenshot set | 9 PA Auditors + Integrative + Weaver | ~24-40 images | PNG files |

At 3 viewports (1440px, 1024px, 768px): cold look + scroll-through at 80% viewport-height steps.

**Stream B: Gate Runner**
| Output | Destination | Lines | Format |
|--------|-------------|-------|--------|
| Gate results | Weaver (Phase 3C) | 56 entries | Structured JSON |

56 gates across 5 categories: 21 REQUIRED + 14 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 8 BV + 1 UTILITY.

### What Is LOST (D2: Compression)
- **HTML → Screenshots: MASSIVE lossy transformation.** The full HTML/CSS (potentially 1,200+ lines of CSS, 500+ lines of HTML) is reduced to ~30 rasterized images. PA auditors can see visual output but CANNOT inspect CSS values, HTML structure, ARIA attributes, or hover states from screenshots alone.
- **Specifics lost in screenshots:** CSS custom property names (mode indicator), mechanism catalog references, accessibility attributes, print styles, reduced-motion styles, hover states (static screenshots), conviction/self-eval comments.
- **Gate runner selectivity:** Of the 1,200+ CSS properties that could be measured, gates check ~56 specific conditions. **Gate coverage is SELECTIVE, not comprehensive.** Gates verify what has historically failed, not everything that could fail.

### What Is TRANSFORMED
- **HTML → Pixels:** The most dramatic transformation in the pipeline. Semantic structure becomes visual arrangement. CSS rules become rendered appearance. This transformation is ONE-WAY and LOSSY — you cannot reconstruct the HTML from screenshots.
- **CSS properties → Binary gate results:** Continuous CSS values become PASS/FAIL binary outcomes. A 14 RGB background delta and a 100 RGB delta both produce the same PASS result.

### What Is ADDED
- **Visual rendering context:** Screenshots capture how the browser ACTUALLY renders the page, including font rendering, computed styles, layout reflow, and visual interactions that CSS source alone cannot predict.
- **Gate measurement precision:** Gates measure COMPUTED styles, not declared styles. This catches CSS shorthand overrides, inheritance issues, and specificity conflicts that source inspection would miss.

### D2 Assessment
This is the pipeline's SECOND-LARGEST compression event (after Content → Content Map). The HTML→Screenshot transformation is inherently lossy, but this is BY DESIGN — PA auditors are supposed to judge PERCEPTION, not implementation. The risk is that PA auditors may miss issues only visible in code (accessibility, hover states, print styles) and focus on issues only visible in pixels (visual balance, rhythm, metaphor expression).

### D12 Assessment
**Bifurcation point.** After this junction, information flows through TWO independent channels (screenshots → PA, HTML → gates) that do not interact until the Weaver. The gate runner catches implementation issues (wrong border-radius, container too wide). PA auditors catch perceptual issues (monotonous rhythm, no metaphor visible). **Neither channel catches INTERACTION issues** — problems that exist at the intersection of implementation and perception (e.g., a technically correct CSS value that produces an unintended visual effect).

---

## 7. JUNCTION 7: Screenshots → Experiential Scan (Phase 3A+)

### What Enters
| Input | Source | Lines | Provider |
|-------|--------|-------|----------|
| Screenshot set (1440px) | Phase 3A | ~8-12 images | PNG files |

### What Exits
| Output | Destination | Lines | Format |
|--------|-------------|-------|--------|
| EXPERIENTIAL_SCAN result | Execution tracker + PA auditor context (if BLOCKING) | ~5 | Text classification |

### Process
The orchestrator performs a 30-second read test, information extraction test, and navigation test on the 1440px screenshots. This is a USABILITY CIRCUIT BREAKER — it catches fundamental readability failures BEFORE the expensive 9-auditor PA deployment.

### What Is ADDED
- **Usability pre-screening:** If the orchestrator finds BLOCKING-USABILITY issues, these are injected into ALL PA auditor prompts as "verify or contradict" pre-seeded findings. This is the ONLY permitted exception to the fresh-eyes principle.

### D12 Assessment
This junction is a CRITICAL gatekeeping function. Without it, the pipeline spends ~15 minutes and 10 agent spawns auditing a page that might have illegible text — a 2-second human observation. **Added in v5 based on Gas Town incident** where illegible chart text was ranked Fix #5 behind 4 imperceptible CSS issues.

---

## 8. JUNCTION 8: Screenshots → 9 PA Auditors (Phase 3B)

### What Enters (per auditor)
| Input | Source | Lines/Files | Provider |
|-------|--------|-------------|----------|
| Screenshot set | Phase 3A | ~24-40 images | PNG files |
| Assigned questions ONLY | pa-questions.md (subset) | 5-11 questions | Spec file |
| PA guardrails | pa-guardrails.md | 113 lines | Spec file |
| Pre-seeded usability finding (IF BLOCKING) | Phase 3A+ | ~2 sentences | Orchestrator |

**CRITICALLY ABSENT from auditor input:**
- Execution brief (no build intent)
- Content Map (no content understanding)
- Gate results (no implementation data)
- Conviction statement (no metaphor knowledge)
- Pipeline vocabulary (no tier/mode/mechanism language)
- Prior experiment results (no historical anchoring)

**This is the fresh-eyes principle in action.** Auditors judge WHAT IS, not what was INTENDED.

### What Exits (per auditor)
| Output | Destination | Lines | Format |
|--------|-------------|-------|--------|
| Audit report | Integrative Auditor + Weaver | ~50-150 | Structured findings |
| Experiential pass | Top of report | ~20 | Free-form perception |
| Completion manifest | Weaver verification | ~15 | Table |
| PA-05 cross-validation score (4 auditors only) | Weaver | 1 score | PASS/CONDITIONAL/FAIL |

**9 reports total: ~450-1,350 lines of perceptual assessment.**

### What Is LOST (D2: Compression)
- **Screenshot detail:** Each auditor processes ~24-40 screenshots but produces ~50-150 lines of findings. Most visual detail is observed but not reported.
- **Inter-auditor overlap:** Multiple auditors may observe the same issue but report it differently. Overlap is not consolidated until the Integrative Auditor.
- **Quantitative precision:** Auditors describe perceptions qualitatively ("the gap feels too large") without CSS measurement. Precision is deliberately sacrificed for authenticity.

### What Is TRANSFORMED
- **Pixels → Perceptual judgments:** Screenshots become PASS/FAIL/CONDITIONAL answers to specific questions. Visual phenomena become verbal descriptions.
- **Holistic impression → Structured answers:** The auditor's overall experience is channeled into specific question answers, fragmenting a gestalt into components.

### What Is ADDED
- **Experiential pass:** Each auditor's unstructured first impression, recorded BEFORE analytical questions. This captures reactions that don't fit neatly into any question.
- **Cross-validation scores:** 4 auditors provide secondary PA-05 sub-criterion scores, creating a BLIND cross-validation layer.
- **Screenshot-referenced evidence:** Every finding ties to a specific screenshot, creating an evidence chain.

### D12 Assessment
The 9-auditor parallel architecture is the pipeline's primary defense against single-evaluator risk. Each auditor sees the SAME screenshots but through a DIFFERENT lens (impression, typography, spatial, flow, grid, rhythm, metaphor, responsive, adversarial). **Coverage is DISTRIBUTED by design.** The risk is that issues falling BETWEEN lenses (e.g., a spatial problem that affects flow) may be under-reported because no single auditor owns it.

---

## 9. JUNCTION 9: 9 PA Reports → Integrative Auditor

### What Enters
| Input | Source | Lines | Provider |
|-------|--------|-------|----------|
| 9 PA audit reports | Auditors A-I | ~450-1,350 | Generated |
| Screenshot set | Phase 3A | ~24-40 images | PNG files |

### What Exits
| Output | Destination | Lines | Format |
|--------|-------------|-------|--------|
| Gestalt synthesis report | Weaver | ~100-200 | Free-form |

### What Is LOST (D2: Compression)
- **Individual auditor detail:** The Integrative Auditor reads ~450-1,350 lines and produces ~100-200 lines of synthesis. Individual findings are compressed into PATTERNS.
- **Minority observations:** If only 1 of 9 auditors flagged an issue, it may not surface in the synthesis. The Integrative Auditor focuses on convergent findings.

### What Is ADDED
- **Cross-cutting patterns:** Issues that span multiple auditors' domains but were not identified by any single auditor.
- **Gestalt impression:** An overall FEEL assessment that structured questions cannot capture.
- **Emotional arc assessment:** Using the 4-register framework (SURPRISE, DELIGHT, AUTHORITY, EARNED CLOSURE).
- **Contradiction identification:** Where auditors disagree, the Integrative Auditor surfaces the disagreement.

### D12 Assessment
The Integrative Auditor is a SYNTHESIZER, not a FILTER. However, the Weaver also receives ALL 9 individual reports directly, so nothing is structurally lost — the synthesis is ADDITIVE context, not a replacement.

---

## 10. JUNCTION 10: All Reports + Gates → Weaver → Verdict

### What Enters
| Input | Source | Lines | Provider |
|-------|--------|-------|----------|
| Integrative report | Phase 3B Integrative | ~100-200 | Generated |
| 9 PA audit reports | Auditors A-I | ~450-1,350 | Generated |
| Gate runner results | Phase 3A | 56 entries | JSON |
| Screenshot set (1440px) | Phase 3A | ~8-12 images | PNG files |
| Calibration references | pa-weaver.md | 468 lines | Spec file |
| Weaver guardrails | pa-guardrails-weaver.md | 59 lines | Spec file |

**Total Weaver input: ~1,100-2,100 lines of assessment data + 468 lines of protocol + screenshots.**

### What Exits
| Output | Destination | Lines | Format |
|--------|-------------|-------|--------|
| PA-05 score (with sub-criteria) | Orchestrator verdict logic | 4 scores | PASS/FAIL per sub-criterion |
| Tier 5 score | Orchestrator | 0-9 count | YES count |
| Verdict | Orchestrator | 1 decision | SHIP/SHIP WITH FIXES/REFINE/REBUILD |
| Top-5 fixes (classified) | Orchestrator + REFINE builder | ~30 | MECHANICAL/STRUCTURAL/COMPOSITIONAL |
| Fix-type summary | Orchestrator | ~5 | Aggregate counts |
| Emotional arc synthesis | Orchestrator + REFINE builder | ~20 | 4-register scores |
| Improvement vector | REFINE builder (if applicable) | ~5 | Aspirational description |
| Diagnostic output | Orchestrator | ~50-100 | Technical + gate references |
| Artistic impression | REFINE/REBUILD builder (if applicable) | ~50-100 | Generative language |

**TWO output streams:** Diagnostic (for orchestrator) uses technical vocabulary. Artistic (for potential REFINE builder) uses generative vocabulary. **This bifurcation prevents diagnostic language from contaminating the REFINE builder's creative mode.**

### What Is LOST (D2: Compression)
- **Individual auditor nuance:** ~450-1,350 lines of individual findings are compressed to a PA-05 score (4 sub-scores), Tier 5 score (1 number), and Top-5 fixes (~30 lines). **Compression ratio: ~30:1 to ~45:1.**
- **Minority findings:** Issues flagged by only 1-2 auditors that don't make the Top-5 fix list are effectively lost unless the REFINE builder reads the artistic impression.
- **Gate result detail:** 56 gate results are compressed to a single verdict input. Individual ADVISORY gate results (informational only) may not propagate into the verdict.

### What Is TRANSFORMED
- **Perceptual findings → Fix classifications:** Auditor descriptions ("the gap between S3 and S4 is too large") become classified fixes (MECHANICAL: reduce S3-S4 margin to 80px).
- **Multiple impressions → Single verdict:** 10 independent assessments become a single SHIP/REFINE/REBUILD decision.
- **Technical observations → Generative language:** For the artistic impression, the Weaver transforms diagnostic vocabulary into creative seeds: "SC-09 FAILED: stacked gap 210px exceeds 120px" becomes "The middle sags — energy dissipates by S5."

### What Is ADDED
- **Cross-validation resolution:** Where Auditor A's PA-05 scores disagree with cross-validators, the Weaver resolves with evidence.
- **Priority ordering:** The Weaver establishes fix priority based on the Priority Override Rule (readability > perception > identity).
- **Forward trajectory assessment:** "The composition has strong bones — the unrealized potential is in [area]." This is new forward-looking information not present in any auditor report.
- **Experiential anchor:** The Weaver's own 3-sentence first impression, with special override authority.

### D12 Assessment
The Weaver is the pipeline's **CONVERGENCE POINT** — the only agent that sees BOTH implementation data (gates) and perceptual data (PA). This is where the two parallel streams from Junction 6 reunite. **The Weaver's verdict is the single most consequential decision in the pipeline.** If the Weaver under-classifies a STRUCTURAL issue as MECHANICAL, the SHIP WITH FIXES path produces a page with an unresolved structural problem.

---

## 11. JUNCTION 11: Verdict → REFINE Loop (Conditional)

### What Enters (REFINE builder)
| Input | Source | Lines | Provider |
|-------|--------|-------|----------|
| Conviction statement | Pass A HTML (extracted) | 3 sentences | Archived |
| Artistic impression | Weaver output | ~50-100 | Generated |
| IMPROVEMENTS (generatively transformed) | Orchestrator transformation | ~20 | Transformed |
| RESIDUAL artifact | Pass B HTML (extracted) | ~10 | HTML comment |
| Original execution brief | Phase 1 | ~100-165 | Preserved |
| Previous pass HTML | Phase 2B | ~800-1,200 CSS | Generated |
| tokens.css + components.css + mechanism-catalog.md + value tables | Design system | ~1,600 | Reference |

**CRITICALLY ABSENT from REFINE builder input:**
- Gate results (no threshold numbers)
- PA scores (no numeric targets)
- Failure analysis (no diagnostic language)
- Fix lists (no corrective instructions)
- Auditor reports (no perceptual findings in raw form)

### IMPROVEMENTS Transformation (Orchestrator Responsibility)
The orchestrator REWRITES builder IMPROVEMENTS from diagnostic to generative:
- "Fix: increase 8 RGB delta" → "Whispers where it could speak"
- "Fix: add 16px padding" → "Feels compressed where it could breathe"
- Zone references are PRESERVED so REFINE builder knows WHERE to look

### What Is LOST (D2: Compression)
- **PA audit detail:** ~450-1,350 lines of individual auditor findings are compressed to ~50-100 lines of artistic impression. The REFINE builder never sees the full audit.
- **Fix specificity:** Diagnostic vocabulary (exact CSS values, specific element references) is replaced with generative vocabulary. The REFINE builder must INTERPRET "the middle sags" rather than being told "reduce margin between S3 and S4 from 210px to 80px."
- **Gate results entirely:** The REFINE builder has ZERO knowledge of which gates passed or failed.

### D12 Assessment
**This is the pipeline's most INTENTIONAL information loss.** The REFINE builder receives generative context instead of diagnostic context to prevent it from entering CORRECTIVE mode (which triggers suppressor reactivation). The trade-off: REFINE builders may not address specific issues because they don't know about them. Historical data shows this works: Gas Town REFINE achieved +1.5 PA-05 improvement with generative-only input.

---

## 12. CROSS-CUTTING ANALYSIS

### D2 (Compression Loss) Summary

| Junction | Input | Output | Ratio | Risk Level |
|----------|-------|--------|-------|------------|
| J1: Content → Map | Varies (500-5K+) | ~35 lines | 14-140:1 | **HIGH** — single analyst, regeneration quality |
| J2: Map+Template → Brief | ~370 lines | ~100-165 lines | 2.2-3.7:1 | MODERATE — BV gates verify quality |
| J3: Brief+Refs → Pass A | ~2,500 lines | ~400-700 CSS | Generative | LOW — creative, not compressive |
| J5: Pass A → Pass B | ~2,000-2,800 | ~800-1,200 CSS | Generative | LOW — add-only, no removal |
| J6: HTML → Screenshots | ~1,200+ CSS | ~30 images | **LOSSY** | **HIGH** — one-way, irreversible |
| J6: HTML → Gates | ~1,200+ CSS | 56 results | **HIGH** — selective verification |
| J8: Screenshots → PA | ~30 images | ~450-1,350 lines | Generative | MODERATE — perception, not measurement |
| J10: All reports → Verdict | ~1,100-2,100 | ~200 lines | 5-10:1 | **HIGH** — single Weaver, convergence point |
| J11: Verdict → REFINE | ~1,100-2,100 | ~200 lines | 5-10:1 | **INTENTIONAL** — generative loss by design |

### D12 (Downstream Propagation) Summary

**Three single points of failure:**
1. **Content Map (J1):** If the Content Analyst misreads the content, ALL downstream phases inherit the error. No cross-validation.
2. **Execution Brief (J2):** If Tier 3 compositional framework is weak, the builder has no alternative source for multi-coherence guidance. BV gates verify FORMAT but not QUALITY.
3. **Weaver Verdict (J10):** If the Weaver under-classifies fix severity, the pipeline takes the wrong path (e.g., SHIP WITH FIXES when REFINE was needed).

**Information isolation boundaries (by design):**
- Builder CANNOT see gates (prevents threshold gaming)
- PA auditors CANNOT see brief (prevents confirmation bias)
- REFINE builder CANNOT see diagnostics (prevents corrective mode)
- These are INTENTIONAL information barriers that serve quality, but they create propagation risks when the isolated agent needs information it cannot access.

### The Compression Funnel

```
Raw Content (5,000 lines)
    │ J1: 100:1 regeneration
    ▼
Content Map (35 lines)
    │ J2: merged with 235-line template + 110 lines references
    ▼
Execution Brief (100-165 lines)
    │ J3: combined with ~2,500 lines reference files
    ▼
Pass A HTML (400-700 CSS lines)
    │ J5: refined by Pass B (300-line recipe)
    ▼
Pass B HTML (800-1,200 CSS lines) ← THE ARTIFACT
    │ J6: bifurcated
    ├── Screenshots (30 images) ← LOSSY
    └── Gate results (56 entries) ← SELECTIVE
    │ J8-J10: assessed by 11 agents
    ▼
Verdict (1 decision + 200 lines context)
```

### Highest-Risk Compression Points (Ranked)

1. **J6: HTML → Screenshots (INHERENT, IRREVERSIBLE).** PA auditors judge a lossy rasterization of the source. Hover states, accessibility, print styles, ARIA attributes are invisible in screenshots. This is by design (perceptual judgment), but it means 30-40% of the builder's work (behavioral CSS, accessibility layer, meta-comments) is UNVERIFIABLE by PA.

2. **J1: Content → Content Map (FIRST COMPRESSION, NO CROSS-VALIDATION).** A single Content Analyst produces the structural description that shapes the entire pipeline. If the analyst misidentifies content type, misses heterogeneity, or picks the wrong metaphor candidate, no downstream agent can catch the error until PA audit — by which point the build is complete.

3. **J10: All Reports → Verdict (CONVERGENCE, SINGLE AGENT).** The Weaver is the only agent that sees both streams (gates + PA). Its fix-type classification directly determines the pipeline path. Cross-validation of PA-05 (4 secondary scorers) mitigates single-evaluator risk for the score, but verdict classification has no cross-validation.

4. **J2: Recipe → Brief (9.2:1 COMPRESSION).** The 833-line recipe compresses to ~90 lines in the brief. Detailed CSS examples, worked examples, and deployment steps are lost. The builder partially compensates by receiving reference files directly, but the recipe's sequenced guidance (the FORMAT that produces DESIGNED output) is the hardest to compress without losing its recipe character.

---

## 13. RECOMMENDATIONS

### For D2 Crack Defense

1. **J1 Cross-Validation:** Consider a second Content Analyst (or the same analyst with a different prompt) to cross-validate the Content Map. Current cost: ~15 min + 1 Opus agent. Value: catches content misreads before they propagate.

2. **J2 Recipe Compression Audit:** Verify that the brief's Tier 3 preserves the RECIPE FORMAT (sequenced steps), not just recipe CONTENT. The 9.2:1 compression from recipe → brief Tier 3 is the highest-risk format transformation.

3. **J6 Non-Visual Verification Gap:** Gates verify CSS properties. PA verifies visual output. NEITHER verifies hover states, accessibility attributes, or print styles as PERCEIVED BY A USER. Consider adding a focused "behavioral audit" using Playwright interaction (hover, tab, print preview) alongside visual screenshots.

### For D12 Crack Defense

4. **Brief Tier 3 Quality Gate:** BV gates verify brief FORMAT (line counts, verb ratios, suppressor absence). Consider adding a BV gate that verifies SPECIFICITY: does Tier 3 specify actual hex values, boundary channel counts, and transition types? Generic Tier 3 content ("vary transitions between zones") produces generic output.

5. **Weaver Verdict Cross-Validation:** The Weaver's fix-type classification has no cross-validation. Consider having the Integrative Auditor also classify fix types independently, creating a blind check on the Weaver's most consequential decision.

6. **Content Map → Brief Traceability:** Add a traceability requirement: every zone in the brief MUST reference the Content Map section it derives from. This creates an audit trail from content through to the builder.

---

*End of information flow trace. 10,053 lines of pipeline spec govern 11 junctions, 3 compression events, 2 generative events, 1 bifurcation, and 1 convergence to produce a single HTML page and its verdict.*
