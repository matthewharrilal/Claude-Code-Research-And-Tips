# REGRESSION IMPACT ANALYSIS — DELETION SCENARIOS

**Researcher:** disc-regression
**Task:** #13
**Date:** 2026-02-13
**Method:** Chain tracing from MASTER-VERDICT.md + zone reports

---

## EXECUTIVE SUMMARY

**Purpose:** Model what breaks when deleting each recommended category. Trace regression chains from immediate breakage → cascading failures → knowledge loss → soul risk.

**Key Discovery:** DELETE all KA scratchpads (312 files) has ZERO RISK to pipeline but CATASTROPHIC knowledge loss. DELETE card-system (66 files) has MINOR immediate breakage but ZERO knowledge loss. **Risk type matters more than file count.**

**Critical Finding:** The ONLY ZERO-RISK deletions are junk (node_modules, screenshots, root axis). Everything else trades immediate safety for long-term capability loss.

---

## METHODOLOGY

### Regression Chain Model

For each deletion scenario, I traced 4 impact layers:

1. **IMMEDIATE BREAKAGE** — What fails on day 1?
   - Dead links in markdown files
   - Missing imports in code
   - Broken git references
   - Hub document orphans

2. **CASCADING BREAKAGE** — What fails transitive dependencies?
   - Stage-to-stage provenance chain collapse
   - Synthesis documents lose source references
   - Multi-stage inheritance chains break

3. **KNOWLEDGE LOSS** — What understanding can't be recovered?
   - Per-agent attribution (who found what)
   - Adversarial debate records (how consensus formed)
   - Process evolution (iteration history)
   - Dark matter indexes (pre-remediation census)

4. **SOUL RISK** — Could deletion cause future soul violations?
   - Loss of anti-pattern definitions
   - Loss of audit trail proving 0 violations
   - Loss of soul piece derivation chain

### Severity Scale

- **CATASTROPHIC** — Pipeline breaks entirely, migration impossible
- **SEVERE** — Major capability loss, >100 broken refs, stage invalidation
- **MODERATE** — Localized breakage, <100 broken refs, workarounds exist
- **MINOR** — Navigation updates needed, <10 broken refs
- **ZERO** — No breakage, no knowledge loss

---

## SCENARIO 1: DELETE ALL KA SCRATCHPADS (312 FILES, 10 DIRS)

### Scope

Delete: `_comprehensive-audit/`, `_od-reenrichment/`, `_ad-execution/`, `_ad-skeleton-analysis/`, `_od-audit-scratchpad/`, `_provenance-gap-analysis/`, `_remediation/`, `_provenance-deep-dive/`, `_workflow-metacognition/`, `_execution-journal/`

Keep: `_cd-research/` (4 files), `_migration-research/` (10 files), `_pipeline-evolution-research/` (5 files), `_component-taxonomy-research/` (2 files)

### 1.1 Immediate Breakage

**ZERO** — No code imports scratchpads. Synthesis documents reference them but don't import.

**Broken References:**
- ~12 synthesis docs lose "Source Data: X scratchpad files" lines
- Graph scan references become historical mentions
- MEMORY.md references become outdated

**All references are BIBLIOGRAPHIC, not FUNCTIONAL.**

### 1.2 Cascading Breakage

**ZERO** — Synthesis documents absorbed findings. Scratchpads are evidence layer, not data layer.

**No transitive dependencies:**
- OD-GRANULAR-AUDIT-RESULTS.md absorbed 89 findings → findings still exist
- ACCUMULATED-IDENTITY-v2.md absorbed 28 AD-F findings → findings still exist
- MASTER-AUDIT-REPORT.md absorbed 4 captain reports → findings still exist

**Compression ratio analysis (from zone-ka-scratchpads.md):**
- _od-audit-scratchpad/: 7,867 lines → 688 lines (11.4:1, 91% noise)
- _workflow-metacognition/: 4,240 lines → 882 lines (4.8:1, 79% noise)
- Average: 8.4:1 compression, 88% noise

**Synthesis captured signal. Scratchpads are mostly noise.**

### 1.3 Knowledge Loss

**CATASTROPHIC** — This is where the damage occurs.

**Per-Agent Attribution:**
- Who found which of the 89 OD audit findings? → LOST
- Which agent wrote which AD-F-XXX findings? → LOST
- 43-agent OD re-enrichment team: who contributed what? → LOST

**Adversarial Debate Records:**
- 10+ confirmed multi-agent cross-references in OD audit → LOST
- ~40 adversarial debates → LOST
- How did agents challenge each other's findings? → LOST

**Process Evolution:**
- How did thinking evolve from draft to synthesis? → LOST
- What was tried and rejected? → LOST
- Why did certain findings get priority? → LOST

**Screenshot Evidence:**
- ~50+ screenshots proving soul compliance → LOST
- Visual evidence for 0/~13,000 soul violations → LOST
- Playwright verification logs → LOST

**Dark Matter Indexes:**
- Pre-remediation file census → LOST
- What scattered files existed before cleanup? → LOST

**Execution Tracking:**
- Real-time state logs from 43-agent team → LOST
- Weaver cross-reference synthesis → LOST
- Fresh-eyes unique findings attribution → LOST

**Metacognition Research:**
- Binary rule principle discovery process → LOST
- 9-thread metacognition analysis → LOST
- Workflow pattern emergence tracking → LOST

### 1.4 Soul Risk

**MODERATE** — Audit trail loss creates verification gap.

**0/~13,000 soul violations claim:**
- Currently proven by 3 independent processes in scratchpads
- After deletion: only synthesis documents say "0 violations"
- Can't verify HOW the 0 was proven
- Can't reproduce audit to re-verify

**If future soul violation occurs:**
- Can't trace: "When did we start allowing border-radius > 0?"
- Can't audit: "Did past audits miss this or is it new?"
- Can't blame: "Which agent/process let this through?"

**Anti-pattern definitions:**
- ANTI-PATTERNS-REGISTRY.md exists (T1 synthesis)
- But working-data ANTI-PATTERNS.md that fed it → LOST
- How did we arrive at these anti-patterns? → LOST

### 1.5 Regression Impact Matrix

| Impact Layer | Severity | Details |
|--------------|----------|---------|
| Immediate Breakage | **ZERO** | Bibliographic refs only, no code imports |
| Cascading Breakage | **ZERO** | Synthesis absorbed findings, no transitive deps |
| Knowledge Loss | **CATASTROPHIC** | Attribution, debate, process, evidence all lost |
| Soul Risk | **MODERATE** | Audit trail gap, can't verify 0-violation claim |

### 1.6 Verdict

**SAFE for pipeline.** CATASTROPHIC for organizational memory.

**User Goal:** "Maximum aggression without breaking post-CD pipeline."

**Scratchpads don't break pipeline. But they're the ONLY record of HOW 250+ agents produced the work.**

**Recommendation:** DELETE IF user values disk space > process history. KEEP IF user values reproducibility.

---

## SCENARIO 2: DELETE CARD-SYSTEM (66 FILES, 14MB)

### Scope

Delete entire `design-extraction/card-system/` folder:
- 17 markdown files (SOUL-DEFINITION, 3A-card-anatomy, etc.)
- 41 HTML/CSS files (card implementations, tests)
- 8 assets (SVG patterns, test images)

### 2.1 Immediate Breakage

**MINOR** — 84 doc references, all navigational.

**Reference Analysis (from zone-de-component.md):**
- 81 total references found
- All references are either:
  - Navigation warnings ("SUPERSEDED by component-system")
  - Historical context ("evolved from card-system")
  - Provenance chain mentions ("10 principles → 6 rules → T1")
- **Zero production code consumption**
- **Zero docs-spa imports**

**What breaks:**
- design-extraction/CLAUDE.md: Remove card-system from directory structure
- Graph files: Update to mark card-system DELETED
- 84 doc references: Update to explain supersession chain

**Fix effort:** ~30 min to update navigation docs.

### 2.2 Cascading Breakage

**ZERO** — T1 synthesis doesn't depend on card-system files.

**Supersession Chain (from zone-de-component.md):**
```
card-system/SOUL-DEFINITION.md (10 principles, SUPERSEDED)
    ↓
component-system/SOUL-DEFINITION.md (6 universal rules, ACTIVE)
    ↓
perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md (T1, LOCKED)
```

**Chain terminated at T1.** card-system is no longer in provenance path.

**T1 synthesis references card-system:**
- 2 references in MASTER-SOUL-SYNTHESIS.md
- Both are HISTORICAL CONTEXT ("we evolved from 10 card principles")
- NOT dependencies

### 2.3 Knowledge Loss

**ZERO** — All knowledge absorbed into component-system.

**card-system research:**
- 10 soul principles → distilled into 6 universal rules (component-system/SOUL-DEFINITION.md)
- Card anatomy research → absorbed into component-system tracking sheets
- Card CSS patterns → superseded by component-system/css/
- Card experiments → not used in final implementation

**Unique content check (from zone-de-component.md):**
- 3A-card-anatomy.md: HISTORICAL research
- Card patterns (halftone, stipple, etc.): Experimental, NOT used in final
- Card test images: Demo only, NOT referenced

**Everything load-bearing was extracted. Remainder is exploratory artifacts.**

### 2.4 Soul Risk

**ZERO** — card-system has SUPERSEDED soul definition.

**10 card principles are obsolete:**
- Evolved into 6 universal rules (cleaner, tighter)
- 6 rules evolved into 5 soul pieces (T1 synthesis)
- Current soul authority: MASTER-SOUL-SYNTHESIS.md (16KB T1)

**If card-system SOUL-DEFINITION deleted:**
- T1 synthesis still defines soul (no dependency)
- Component-system SOUL-DEFINITION still defines 6 rules (intermediate layer)
- No anti-pattern definitions lost

### 2.5 Regression Impact Matrix

| Impact Layer | Severity | Details |
|--------------|----------|---------|
| Immediate Breakage | **MINOR** | 84 nav refs, ~30 min fix |
| Cascading Breakage | **ZERO** | T1 synthesis terminal, no transitive deps |
| Knowledge Loss | **ZERO** | All research absorbed into component-system |
| Soul Risk | **ZERO** | SUPERSEDED soul def, T1 is authority |

### 2.6 Verdict

**SAFE for deletion.** Lowest risk of all scenarios.

**This is the model for clean supersession:**
- Research extracted and synthesized
- Findings absorbed into T1
- Intermediate work no longer load-bearing
- References are historical mentions only

**Recommendation:** DELETE. Update 84 nav references. Save 14MB.

---

## SCENARIO 3: DELETE DD/OD EXPLORATIONS (15 FILES)

### Scope

Delete:
- 6 DD HTML files (DD-001 through DD-006)
- 6 OD HTML files (OD-001 through OD-006)
- 1 OD research file (OD-006-CREATIVE-RESEARCH-FEED.md)
- 2 CLAUDE.md navigation files

### 3.1 Immediate Breakage

**CATASTROPHIC** — 589 broken references, 2 hub documents orphaned.

**Reference Counts (from zone-dd-od.md):**
- DD patterns: 212 file references (grep DD-00[1-6])
- OD patterns: 377 file references (grep OD-00[1-6])
- DD-006-fractal.html: 20+ inbound refs (MOST-REFERENCED ARTIFACT in entire showcase)
- OD-006-creative.html: 15+ inbound refs

**Hub Documents:**
- checkpoints/RETROACTIVE-AUDIT-DD-001-006.md: 8+ inbound refs → SOURCE DELETED
- knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md: 18+ inbound refs → SOURCE DELETED

**Pattern Definitions:**
- DESIGN-SYSTEM/patterns/density-patterns.md → Loses all 6 DD pattern definitions
- DESIGN-SYSTEM/patterns/organizational-patterns.md → Loses all 6 OD pattern definitions

### 3.2 Cascading Breakage

**CATASTROPHIC** — 4 pipeline stages invalidated.

**Stage 3 (OD) Collapse:**
- All 6 OD explorations cite DD-F-006 as mandatory constraint → SOURCE DELETED
- OD-SYNTHESIS.md references DD patterns as inherited vocabulary → CHAIN BROKEN
- OD explorations lose density pairing justification → INVALIDATED

**Stage 4 (AD) Collapse:**
- AD-F-027 verifies DD-F-006 at 5 scales → SOURCE DELETED
- AD-F-028 bounds fractal model → SOURCE DELETED
- AD-F-004 (3-way unification) loses OD as one of 3 equivalents → CHAIN BROKEN
- AD-F-023 (ATTENTION TOPOLOGY) descends from OD-F-005 → SOURCE DELETED

**Stage 5 (CD) Collapse:**
- CD-001 header: `BUILT ON: OD-002-narrative.html` → REFERENCE BROKEN
- CD explorations test DD+OD pattern combinations → VOCABULARY MISSING
- All 6 CD explorations inherit DD/OD patterns via accumulated identity → CHAIN BROKEN

**Migration Collapse:**
- Track 1 assembly loses 12 of 12 core patterns → IMPOSSIBLE
- Track 2 skill loses DD+OD pattern vocabulary → BROKEN
- POST-CD-PIPELINE/08-COMPOSITIONAL-STRATEGY-LIBRARY.md Tier 2.5 catalog → INCOMPLETE
- ~145 lines extractable CSS → LOST
- ~440 lines prose guidance → LOST

### 3.3 Knowledge Loss

**CATASTROPHIC** — Foundational pattern library destroyed.

**DD-006-fractal.html (from zone-dd-od.md):**
- Single most-referenced artifact (20+ refs)
- DD-F-006 fractal meta-pattern definition → LOST
- 5-scale model (page, section, component, character, navigation) → LOST
- Mandatory connective tissue for OD, AD, CD → LOST

**OD-006-creative.html:**
- Crown jewel (37/40 score)
- OD-F-005 meta-discovery: "Organization IS Density" → LOST
- 8 Tier 1-3 creative techniques (EXT-CREATIVE-001–008) → LOST
- 94 EXT-* findings from 43-agent re-enrichment → ALL INVALIDATED

**17-Agent OD Audit:**
- 89 findings across 6 OD explorations → ORPHANED
- 0/3,479 soul violations proof → LOST
- Adversarial debate records → LOST

**Re-Enrichment Investment:**
- 43-agent team, 7 waves, Mode C provenance → WASTED
- 15,000 insertions across 92 files (commit 826ce3a) → INVALIDATED
- ~60+ agent-hours → DESTROYED

### 3.4 Soul Risk

**SEVERE** — Pattern definitions = soul piece applications.

**DD patterns demonstrate soul pieces visually:**
- PULSE (DD-001): Breathing rhythm = Soul Piece 1 (editorial calm)
- CRESCENDO (DD-002): Progressive density = Soul Piece 5 (unhurried pacing)
- FRACTAL (DD-006): Self-similarity at 5 scales = Soul Piece 6 (consistency)

**If DD/OD deleted:**
- Can't verify: "How does CRESCENDO avoid overwhelming reader?"
- Can't reference: "Show me an example of fractal self-similarity done right"
- Can't teach: "This is what density breathing looks like in practice"

**Soul pieces become ABSTRACT without DD/OD concrete examples.**

**100% soul compliance proof:**
- 0 violations across 3,479+ elements (from OD audit)
- Delete OD → lose visual proof of soul compliance
- Future audits can't compare: "Does this match OD-006 quality?"

### 3.5 Regression Impact Matrix

| Impact Layer | Severity | Details |
|--------------|----------|---------|
| Immediate Breakage | **CATASTROPHIC** | 589 broken refs, 2 hub docs orphaned |
| Cascading Breakage | **CATASTROPHIC** | 4 stages invalidated (OD→AD→CD→Migration) |
| Knowledge Loss | **CATASTROPHIC** | 12 patterns lost, 60+ agent-hours wasted |
| Soul Risk | **SEVERE** | Soul pieces become abstract, audit baseline lost |

### 3.6 Verdict

**NEVER DELETE.** Highest-risk scenario analyzed.

**DD+OD are the ALPHABET of the design system.**
- CD = sentences (combinations)
- DD+OD = letters (individual patterns)
- Delete alphabet → sentences become gibberish

**From zone-dd-od.md quote:**
> "Even under aggressive scrutiny, ZERO files qualify for deletion. These are the definition of 'load-bearing foundational work.'"

**Recommendation:** PRESERVE AS-IS. Touch nothing.

---

## SCENARIO 4: DELETE RESEARCH R1-R5 (7 FILES)

### Scope

Delete:
- R1-DOCUMENTATION-PATTERNS.md (28 findings)
- R2-CREATIVE-LAYOUTS.md (27 findings)
- R3-DENSITY-DIMENSIONS.md (51 findings)
- R4-AXIS-INNOVATIONS.md (192 findings)
- R5-COMBINATION-THEORY.md (39 findings)
- RESEARCH-SYNTHESIS.md (337 total)
- research/CLAUDE.md

### 4.1 Immediate Breakage

**SEVERE** — 100+ references, 3 hub documents orphaned.

**Hub Documents (from zone-support.md):**
- RESEARCH-SYNTHESIS.md: 30+ inbound refs (THE synthesis, Tier A) → DELETED
- R3-DENSITY-DIMENSIONS.md: 25+ inbound refs (DD source) → DELETED
- R1-DOCUMENTATION-PATTERNS.md: 20+ inbound refs (OD source) → DELETED
- R4-AXIS-INNOVATIONS.md: 15+ inbound refs (AD source, 192 findings) → DELETED
- R5-COMBINATION-THEORY.md: 12+ inbound refs (CD source) → DELETED

**Provenance Chain:**
- PIPELINE-MANIFEST.md references R1-R5 as canonical sources → CHAIN BROKEN
- RESEARCH-ACTIVE.md tracks application of R1-R5 findings → TRACKING INVALIDATED
- showcase/CLAUDE.md mandates RESEARCH-ACTIVE pre-read → DEAD LINK

### 4.2 Cascading Breakage

**CATASTROPHIC** — Entire pipeline loses grounding.

**Stage 2 (DD) Collapse:**
- DD explorations built on R3-DENSITY-DIMENSIONS → SOURCE DELETED
- DD-F findings derived from R3 findings → GROUNDING LOST
- ~76% of R3 findings applied in DD → DERIVATION CHAIN BROKEN

**Stage 3 (OD) Collapse:**
- OD explorations built on R1-DOCUMENTATION-PATTERNS → SOURCE DELETED
- OD-F findings derived from R1 findings → GROUNDING LOST
- "THE BIG ONE FOR OD" (per research/CLAUDE.md) → DELETED

**Stage 4 (AD) Collapse:**
- AD explorations built on R4-AXIS-INNOVATIONS → SOURCE DELETED
- 192 R4 findings = largest research file → GROUNDING LOST
- AD-F findings trace back to R4 → DERIVATION CHAIN BROKEN

**Stage 5 (CD) Collapse:**
- CD explorations built on R5-COMBINATION-THEORY → SOURCE DELETED
- R5 findings inform CD combinatorial testing → GROUNDING LOST
- Accumulated identity references R1-R5 → CHAIN BROKEN

### 4.3 Knowledge Loss

**CATASTROPHIC** — 337 original findings, irreplaceable.

**R1-R5 = ORIGINAL RESEARCH:**
- DD/OD/AD/CD findings are DERIVED from R1-R5
- DD-F-006 fractal ← R3-023 fractal self-similarity
- OD-F-005 Organization IS Density ← R1 documentation patterns
- AD-F-023 ATTENTION TOPOLOGY ← R4 axis innovations

**If R1-R5 deleted:**
- Findings still exist (in DD-F, OD-F, AD-F, CD-F)
- But GROUNDING is lost: "Why did we derive DD-F-006?"
- Can't trace: "What R3 finding led to fractal discovery?"
- Can't verify: "Is this finding original research or derived?"

**337 findings = 18-month research investment:**
- R1: 28 findings (documentation patterns)
- R2: 27 findings (creative layouts)
- R3: 51 findings (density dimensions) — most-referenced
- R4: 192 findings (axis innovations) — largest file
- R5: 39 findings (combination theory)

**From zone-support.md:**
> "R1-R5 = RESEARCH SOURCE — The 337 original findings that feed the pipeline.
> Skills = PROCESS OPERATIONALIZATION — How to apply the research.
> Skills EXTEND research, not replace it."

### 4.4 Soul Risk

**MODERATE** — Research contains soul piece derivation.

**Soul pieces discovered through research:**
- Editorial calm (Soul Piece 1) ← R1 documentation patterns
- No borders/shadows (Soul Piece 2) ← R3 density perceptual research
- Instrument Serif (Soul Piece 3) ← Font research (separate, but informed by R1)
- Muted earth tones (Soul Piece 4) ← R2 creative layouts color analysis
- Unhurried pacing (Soul Piece 5) ← R3 density rhythm patterns
- Fractal consistency (Soul Piece 6) ← R3-023 explicit finding

**If R1-R5 deleted:**
- Soul pieces still defined in MASTER-SOUL-SYNTHESIS.md
- But can't trace: "How did we discover Soul Piece 2?"
- Can't justify: "Why 'no borders' instead of 'subtle borders'?"
- Can't defend: "What research led to this soul piece?"

### 4.5 Regression Impact Matrix

| Impact Layer | Severity | Details |
|--------------|----------|---------|
| Immediate Breakage | **SEVERE** | 100+ refs, 5 hub docs orphaned |
| Cascading Breakage | **CATASTROPHIC** | All 4 stages lose grounding (DD→OD→AD→CD) |
| Knowledge Loss | **CATASTROPHIC** | 337 original findings, 18-month research lost |
| Soul Risk | **MODERATE** | Soul piece derivation chain broken |

### 4.6 Verdict

**NEVER DELETE.** Second-highest risk scenario (after DD/OD).

**R1-R5 are the FOUNDATION of the entire knowledge architecture.**
- Stages DD→OD→AD→CD are APPLICATIONS of R1-R5
- Delete foundation → superstructure becomes floating abstractions

**Skills vs Research (from zone-support.md):**
- Skills (tension-composition, perceptual-auditing) operationalize R1-R5
- Skills answer "HOW to execute"
- Research answers "WHAT was discovered"
- Both are necessary, neither supersedes the other

**Recommendation:** PRESERVE. These are canonical research sources.

---

## SCENARIO 5: PROMOTE T1 SYNTHESIS TO ROOT (6 FILES)

### Scope

Move from:
```
design-extraction/component-system/perceptual-audit-v2/synthesis/
├── MASTER-SOUL-SYNTHESIS.md
├── DESIGN-TOKEN-SUMMARY.md
├── CHARACTER-FAMILY-COMPLETE.md
├── ANTI-PATTERNS-REGISTRY.md
├── PRODUCTION-RULES.md
└── CONSISTENCY-VERIFICATION.md
```

To:
```
design-extraction/DESIGN-SYSTEM/
├── soul.md (renamed from MASTER-SOUL-SYNTHESIS)
├── tokens.md (renamed from DESIGN-TOKEN-SUMMARY)
├── characters.md (renamed from CHARACTER-FAMILY-COMPLETE)
├── anti-patterns.md (renamed from ANTI-PATTERNS-REGISTRY)
├── production-rules.md (no rename)
└── consistency-verification.md (no rename)
```

### 5.1 Immediate Breakage

**SEVERE** — 52+ external references, 7 React components.

**Reference Counts (from MASTER-VERDICT.md):**
- CHARACTER-FAMILY-COMPLETE.md: 27 files / 52 occurrences
- DESIGN-TOKEN-SUMMARY.md: 18+ refs
- MASTER-SOUL-SYNTHESIS.md: 15+ refs
- Total T1 synthesis: 52+ references

**React Component Imports (from zone-de-component.md):**
- 7 React components in `docs-spa/components/content/` import character names
- Character names defined ONLY in CHARACTER-FAMILY-COMPLETE.md
- Imports would break: "The Precise Transcriptionist", "The Senior Concierge", etc.

**Showcase References:**
- 4+ files in `docs-spa/app/showcase/knowledge-architecture/`
- 6+ references in `docs-spa/app/showcase/dependency-trace/`
- All downstream DD/OD/AD/CD work

### 5.2 Cascading Breakage

**MODERATE** — Transitive deps exist but are fixable.

**Provenance Chain:**
- PIPELINE-MANIFEST.md references T1 synthesis at old location
- Stage-1/2/3/4/5 handoff docs reference T1 at old location
- All CONSUMED BY sections in T1 files would need updating

**Import Paths:**
- React components: `import { characters } from '@/design-extraction/component-system/perceptual-audit-v2/synthesis/CHARACTER-FAMILY-COMPLETE'`
- Update to: `import { characters } from '@/design-extraction/DESIGN-SYSTEM/characters'`

**Symlink Option (from MASTER-VERDICT.md):**
- Create symlink at old location pointing to new location
- Maintains provenance continuity
- Zero immediate breakage
- Update refs gradually

### 5.3 Knowledge Loss

**ZERO** — This is a MOVE, not a DELETE.

**Files remain intact:**
- Same content, new location
- Provenance headers preserved
- Inline threading headers preserved
- CONSUMED BY sections preserved

**Only change: FINDABILITY.**
- Old: Buried 4 levels deep (component-system/perceptual-audit-v2/synthesis/)
- New: Root-level prominence (DESIGN-SYSTEM/)

**From MASTER-VERDICT.md:**
> "Adversary's T1 synthesis promotion challenge is THE SINGLE HIGHEST-LEVERAGE structural change in entire cleanup. Crown jewels buried 4 levels deep deserve root-level prominence."

### 5.4 Soul Risk

**ZERO** — Soul definitions moving to more prominent location.

**Soul authority:**
- MASTER-SOUL-SYNTHESIS.md (16KB) defines "The Unhurried Editor" + 6 universal rules
- Promotion makes soul MORE discoverable
- Reduces risk of future soul violations (easier to find soul definition)

**If promoted:**
- New developers find soul.md at root (not buried 4 levels deep)
- DESIGN-SYSTEM/ becomes one-stop shop for all authority docs
- Consistency with existing DESIGN-SYSTEM/tokens/ structure

### 5.5 Regression Impact Matrix

| Impact Layer | Severity | Details |
|--------------|----------|---------|
| Immediate Breakage | **SEVERE** | 52+ refs, 7 React imports (fixable in 1 commit) |
| Cascading Breakage | **MODERATE** | Provenance chain updates, import paths (fixable) |
| Knowledge Loss | **ZERO** | MOVE not DELETE, content preserved |
| Soul Risk | **ZERO** | IMPROVES discoverability, reduces violation risk |

### 5.6 Verdict

**HIGH-RISK EXECUTION, HIGH-VALUE OUTCOME.**

**This is a REFACTOR, not a deletion.**
- Immediate breakage is HIGH but FIXABLE (single commit)
- Knowledge loss is ZERO (files move, don't delete)
- Long-term benefit is HIGH (findability, consistency)

**From MASTER-VERDICT.md execution order:**
- Phase 5: Strategic Restructuring (highest complexity)
- Test import paths before committing
- Update 52+ references in single commit
- Use symlinks for gradual migration

**Recommendation:** EXECUTE with care. One-time migration cost justified by organizational clarity.

---

## SCENARIO 6: DELETE ARCHIVE/TOKENS/ (7 FILES)

### Scope

Delete:
- design-extraction/archive/tokens/colors.css
- design-extraction/archive/tokens/geometry.css
- design-extraction/archive/tokens/spacing.css
- design-extraction/archive/tokens/typography.css
- design-extraction/archive/tokens/index.css
- design-extraction/archive/CLAUDE.md
- (Additional archive components/specs/, extraction/, variations/ — 53 total files per MASTER-VERDICT)

### 6.1 Immediate Breakage

**ZERO** — Archive is intentionally isolated.

**From MASTER-VERDICT.md Zone 2:**
> "archive/ — SUPERSEDED, intentionally isolated"
> "If we delete dangerous tokens, the warning becomes obsolete."

**References:**
- archive/CLAUDE.md warns about dangerous values
- No code imports from archive/
- Adversarial check confirmed: SUPERSEDED

### 6.2 Cascading Breakage

**ZERO** — No transitive dependencies.

**Current token authority (from zone-support.md):**
- DESIGN-SYSTEM/tokens/ (Feb 11 update) = CURRENT
- archive/tokens/ = OBSOLETE

**Dangerous values in archive/ (from MASTER-VERDICT.md):**
- border-radius > 0 (violates Soul Piece 2)
- Bebas Neue font (violates Soul Piece 3)
- Wrong shadows (violates Soul Piece 4)

**If archive/ deleted:**
- No code references break
- Current tokens unaffected (DESIGN-SYSTEM/tokens/)
- Dangerous values can't accidentally be copied

### 6.3 Knowledge Loss

**MINOR** — Historical token evolution lost.

**What's in archive/:**
- PRE-AUDIT tokens (before perceptual audit v2)
- Token explorations that were rejected
- Evolution from wrong values → correct values

**What would be lost:**
- "Why did we initially choose Bebas Neue?"
- "What border-radius values were considered before we locked to 0?"
- "How did spacing scale evolve?"

**But this is NEGATIVE KNOWLEDGE:**
- These are examples of WHAT NOT TO DO
- Current tokens are the POSITIVE KNOWLEDGE

**From MASTER-VERDICT.md:**
> "Adversary correctly challenged the 'warning file with no content to warn about' paradox. If we delete dangerous tokens, the warning becomes obsolete."

### 6.4 Soul Risk

**NEGATIVE** — Deletion REDUCES soul risk.

**Dangerous values are soul violations:**
- border-radius > 0 → violates Soul Piece 2 (no rounded corners)
- Bebas Neue → violates Soul Piece 3 (Instrument Serif only)
- Wrong shadow values → violates Soul Piece 4 (muted earth tones)

**If archive/ exists:**
- Risk: Developer copies from archive/ instead of DESIGN-SYSTEM/
- Risk: "Archive must be old but okay to use"
- Risk: Confusion about which tokens are authoritative

**If archive/ deleted:**
- Only DESIGN-SYSTEM/tokens/ exists → SINGLE SOURCE OF TRUTH
- No confusion about which tokens to use
- No risk of accidental soul violation from copying wrong values

**Deletion IMPROVES soul safety.**

### 6.5 Regression Impact Matrix

| Impact Layer | Severity | Details |
|--------------|----------|---------|
| Immediate Breakage | **ZERO** | Intentionally isolated, no code refs |
| Cascading Breakage | **ZERO** | No transitive deps, current tokens separate |
| Knowledge Loss | **MINOR** | Historical evolution lost (negative knowledge) |
| Soul Risk | **NEGATIVE** | REDUCES risk of copying wrong values |

### 6.6 Verdict

**SAFE TO DELETE.** Deletion improves safety.

**archive/ is a TRAP:**
- Contains wrong values that violate soul
- Creates confusion about which tokens to use
- Warning file about dangers is paradoxical if dangers exist

**Better approach:**
- DELETE dangerous tokens
- UPDATE design-extraction/CLAUDE.md with deletion note
- Make DESIGN-SYSTEM/tokens/ the ONLY token location

**From MASTER-VERDICT.md recommended action:**
```markdown
## Archive Cleanup (2026-02-13)

**archive/** was deleted — contained pre-audit tokens with wrong values:
- border-radius > 0 (violates Soul Piece 2)
- Bebas Neue font (violates Soul Piece 3)
- Wrong shadows (violates Soul Piece 4)

**Current token authority:** DESIGN-SYSTEM/tokens/ (last updated Feb 11)
```

**Recommendation:** DELETE. Save 8MB, reduce soul risk.

---

## SCENARIO 7: DELETE ALL SCREENSHOTS (~363 FILES, ~20MB)

### Scope

Delete:
- audit-screenshots/cycle-1/ (~10 files)
- audit-screenshots/dd-reaudit/ (~10 files)
- audit-screenshots/od-explorations/ (varies)
- All screenshots in KA scratchpads (if not already deleted in Scenario 1)
- _tension-test/ screenshots (~73 files, per MASTER-VERDICT)
- explorations/axis/ screenshots (167 files, per MASTER-VERDICT)
- Various other screenshot collections

Total: ~363 screenshots freed (per MASTER-VERDICT Zone 1)

### 7.1 Immediate Breakage

**MINOR** — Screenshots referenced in audit reports.

**Broken Image Links:**
- Audit report markdown files: `![Description](../screenshots/file.png)` → DEAD LINK
- Visual audit reports reference screenshots as evidence
- Screenshot count mentions become outdated

**No code breakage:**
- Screenshots are evidence files, not imported by code
- Markdown image links fail gracefully (show broken image icon)

### 7.2 Cascading Breakage

**ZERO** — Screenshots are leaf nodes.

**No transitive dependencies:**
- Reports describe findings → findings still valid even if screenshot missing
- Visual verification logs reference screenshots → logs still readable
- Audit conclusions don't depend on screenshot existence

### 7.3 Knowledge Loss

**MODERATE** — Visual evidence lost, but findings preserved.

**What screenshots prove:**
- "This is what OD-006 looked like on Feb 6 at 1440px"
- "This is the exact border-radius value we audited"
- "This is the computed font-family in Playwright"

**What survives screenshot deletion:**
- Audit findings: "border-radius: 0 confirmed across 3,479 elements"
- Programmatic audits: DOM queries remain reproducible
- Text descriptions of visual issues

**Critical distinction:**
- FINDINGS = knowledge (preserved in audit reports)
- SCREENSHOTS = evidence (visual proof of findings)

**Reproducibility impact:**
- Future audits can regenerate screenshots via Playwright
- But can't reproduce EXACT historical state (HTML may change)
- Screenshots are point-in-time snapshots

**From zone-support.md:**
> "Audit screenshots are POINT-IN-TIME EVIDENCE, not operational files."

### 7.4 Soul Risk

**MINOR** — 0-violation proof becomes less verifiable.

**Soul compliance claim:**
- "0/~13,000 violations across 3 independent processes"
- Currently proven by: programmatic audits + visual audits + screenshots

**If screenshots deleted:**
- Programmatic audits still prove 0 violations (DOM queries)
- Visual audit reports still describe findings
- But can't visually verify: "Show me proof that border-radius was actually 0"

**Future soul violations:**
- If new violation introduced: "When did this start?"
- Can't compare: "Does current page match Feb 6 screenshot?"
- Historical baseline lost

**However:**
- Playwright can regenerate screenshots anytime
- Programmatic audits are more reliable than visual evidence
- Screenshots are NICE TO HAVE, not REQUIRED

### 7.5 Regression Impact Matrix

| Impact Layer | Severity | Details |
|--------------|----------|---------|
| Immediate Breakage | **MINOR** | Broken markdown image links (graceful failure) |
| Cascading Breakage | **ZERO** | Leaf nodes, no transitive deps |
| Knowledge Loss | **MODERATE** | Historical visual evidence lost, findings preserved |
| Soul Risk | **MINOR** | 0-violation proof less verifiable, but programmatic audits remain |

### 7.6 Verdict

**LOW-RISK DELETION.** Evidence vs knowledge trade-off.

**Screenshots are REGENERABLE:**
- Playwright can take new screenshots anytime
- But can't reproduce EXACT historical state
- Trade-off: disk space vs historical fidelity

**From MASTER-VERDICT.md Zone 1:**
- _tension-test/ screenshots: 73 files → ARCHIVE 2 (top layouts), DELETE 71
- explorations/axis/ screenshots: 167 files → DELETE all (showcase canonical)

**Recommendation:**
- DELETE low-value screenshots (exploratory work, completed audits)
- KEEP high-value screenshots (crown jewel examples, systemic findings)
- ARCHIVE representative samples (2-3 per audit phase)

**Example from MASTER-VERDICT:**
- Keep: playbook-elevation-map.png, boris-geological-core.png (top 2 quality)
- Delete: 71 other _tension-test/ screenshots
- Rationale: Existence proofs without bulk

---

## CROSS-SCENARIO COMPARISON

### Severity Summary

| Scenario | Immediate | Cascading | Knowledge | Soul | Overall |
|----------|-----------|-----------|-----------|------|---------|
| 1. KA Scratchpads (312 files) | ZERO | ZERO | CATASTROPHIC | MODERATE | **CATASTROPHIC** |
| 2. card-system (66 files) | MINOR | ZERO | ZERO | ZERO | **MINOR** |
| 3. DD/OD (15 files) | CATASTROPHIC | CATASTROPHIC | CATASTROPHIC | SEVERE | **CATASTROPHIC** |
| 4. R1-R5 Research (7 files) | SEVERE | CATASTROPHIC | CATASTROPHIC | MODERATE | **CATASTROPHIC** |
| 5. T1 Promotion (6 files) | SEVERE | MODERATE | ZERO | ZERO | **MODERATE** |
| 6. archive/tokens/ (53 files) | ZERO | ZERO | MINOR | NEGATIVE | **ZERO** |
| 7. Screenshots (363 files) | MINOR | ZERO | MODERATE | MINOR | **MODERATE** |

### File Count vs Risk (Paradox Analysis)

**HIGHEST FILE COUNT ≠ HIGHEST RISK:**

- Scenario 1 (312 files): CATASTROPHIC knowledge loss, ZERO pipeline breakage
- Scenario 3 (15 files): CATASTROPHIC pipeline breakage, CATASTROPHIC knowledge loss
- Scenario 6 (53 files): ZERO risk, deletion IMPROVES safety

**SMALLEST FILE COUNT ≠ LOWEST RISK:**

- Scenario 4 (7 files): CATASTROPHIC (R1-R5 are foundation)
- Scenario 5 (6 files): MODERATE (refactor complexity)

**Risk type matters more than file count.**

### Pipeline Safety vs Organizational Memory

**Pipeline-Safe but Memory-Catastrophic:**
- Scenario 1: KA scratchpads (312 files)
- Scenario 7: Screenshots (363 files, subset)

**Pipeline-Critical but Memory-Minimal:**
- Scenario 3: DD/OD (15 files)
- Scenario 4: R1-R5 (7 files)

**Safe Deletions (Both Metrics):**
- Scenario 2: card-system (66 files)
- Scenario 6: archive/tokens/ (53 files)

---

## RISK MITIGATION STRATEGIES

### For CATASTROPHIC Scenarios (Never Delete)

**Scenarios 3 & 4: DD/OD + R1-R5**

**Mitigation:** PRESERVE indefinitely. These are load-bearing.

**Safeguards:**
- Lock files (mark read-only)
- Add CLAUDE.md warnings: "NEVER DELETE — PIPELINE FOUNDATION"
- Document in MASTER-STATE.md: "DD/OD/R1-R5 are permanent artifacts"

### For MODERATE Scenarios (Careful Execution)

**Scenario 5: T1 Promotion**

**Mitigation:** Test thoroughly before committing.

**Safeguards:**
- Create symlinks at old location (provenance continuity)
- Update all 52+ refs in single atomic commit
- Test React component imports before deploying
- Keep git history (easy rollback if issues)

**Scenario 7: Screenshots**

**Mitigation:** Archive representative samples, delete bulk.

**Safeguards:**
- Keep 2-3 screenshots per audit phase (existence proofs)
- Document which screenshots were kept and why
- Add note: "Playwright can regenerate if needed"

### For MINOR/ZERO Scenarios (Safe to Execute)

**Scenario 2: card-system**

**Mitigation:** Update navigation docs, commit.

**Safeguards:**
- Verify T1 synthesis has no dependencies
- Update 84 references to explain supersession
- Document evolution chain in CLAUDE.md

**Scenario 6: archive/tokens/**

**Mitigation:** Just delete. Improves safety.

**Safeguards:**
- Update design-extraction/CLAUDE.md with deletion note
- Confirm DESIGN-SYSTEM/tokens/ is current (Feb 11 ✓)
- Document why deletion improves soul safety

### For KNOWLEDGE-LOSS Scenarios (User Decision)

**Scenario 1: KA Scratchpads**

**User choice:**
- Priority = disk space → DELETE (save ~68MB, ZERO pipeline impact)
- Priority = process history → KEEP (preserve 250+ agent outputs)

**Mitigation if DELETE:**
- Archive to external storage (git bundle, S3, separate repo)
- Keep synthesis documents (findings preserved)
- Document compression ratios (88% noise, 12% signal)

**Mitigation if KEEP:**
- Add README explaining archival pattern
- Lock files to prevent accidental modification
- Accept 68MB storage cost for organizational memory

---

## MASTER REGRESSION MATRIX

### Deletion Impact Scorecard

| Scenario | Files | MB | Immediate | Cascade | Knowledge | Soul | Pipeline | Recommendation |
|----------|-------|----|-----------|---------|-----------|----- |----------|----------------|
| **KA Scratchpads** | 312 | 68 | ZERO | ZERO | CATASTROPHIC | MODERATE | SAFE | USER CHOICE: disk vs memory |
| **card-system** | 66 | 14 | MINOR | ZERO | ZERO | ZERO | SAFE | DELETE (clean supersession) |
| **DD/OD** | 15 | ~5 | CATASTROPHIC | CATASTROPHIC | CATASTROPHIC | SEVERE | BREAKS | NEVER DELETE |
| **R1-R5 Research** | 7 | ~2 | SEVERE | CATASTROPHIC | CATASTROPHIC | MODERATE | BREAKS | NEVER DELETE |
| **T1 Promotion** | 6 | 0 | SEVERE | MODERATE | ZERO | ZERO | SAFE | EXECUTE w/ care (refactor) |
| **archive/tokens/** | 53 | 8 | ZERO | ZERO | MINOR | NEGATIVE | SAFE | DELETE (improves safety) |
| **Screenshots** | 363 | 20 | MINOR | ZERO | MODERATE | MINOR | SAFE | ARCHIVE samples, DELETE bulk |

### Decision Tree

```
Is pipeline affected?
├─ YES → NEVER DELETE (DD/OD, R1-R5)
└─ NO → Check knowledge loss
    ├─ CATASTROPHIC → USER CHOICE (KA scratchpads)
    ├─ ZERO → DELETE (card-system, archive/tokens/)
    └─ MODERATE → ARCHIVE samples (screenshots)

Is it a refactor (not delete)?
└─ YES → Execute with care (T1 promotion)
```

### Safe Deletions (Immediate Execution)

1. **archive/tokens/** (53 files, 8MB) — IMPROVES soul safety
2. **card-system** (66 files, 14MB) — Clean supersession
3. **Screenshot bulk** (300+ files, ~15MB) — Keep samples, delete bulk

**Total safe deletion: ~419 files, ~37MB**

### Never Delete (Lock Permanently)

1. **DD/OD explorations** (15 files) — Pipeline foundation
2. **R1-R5 research** (7 files) — Original findings

**Total protected: 22 files**

### User Decision Required

1. **KA scratchpads** (312 files, 68MB) — Disk vs memory trade-off
2. **T1 promotion** (6 files, MOVE) — Refactor complexity vs findability

---

## CONCLUSIONS

### Key Discoveries

1. **File count is inversely correlated with risk.**
   - 312 scratchpad files: ZERO pipeline impact
   - 15 DD/OD files: CATASTROPHIC pipeline impact
   - 7 R1-R5 files: CATASTROPHIC pipeline impact

2. **Risk type > risk severity.**
   - "ZERO immediate breakage" hides "CATASTROPHIC knowledge loss"
   - Pipeline safety ≠ organizational memory safety

3. **Deletion is not the only aggression.**
   - REFACTOR (T1 promotion) improves structure
   - ARCHIVE (screenshots) balances evidence vs bulk
   - NEGATIVE RISK (archive/tokens/) means deletion IMPROVES safety

4. **Supersession requires complete extraction.**
   - card-system: CLEAN supersession (all knowledge extracted)
   - KA scratchpads: LOSSY supersession (findings extracted, process lost)

### Recommendations by User Priority

**If user wants: "Zero pipeline risk"**
→ DELETE: card-system, archive/tokens/, screenshot bulk, KA scratchpads
→ NEVER DELETE: DD/OD, R1-R5
→ REFACTOR: T1 promotion (improves structure)

**If user wants: "Maximum organizational memory"**
→ DELETE: card-system, archive/tokens/ (safe)
→ KEEP: KA scratchpads (process history)
→ ARCHIVE: Screenshots (evidence samples)
→ NEVER DELETE: DD/OD, R1-R5

**If user wants: "Maximum disk space freed"**
→ DELETE: KA scratchpads (68MB), screenshot bulk (15MB), card-system (14MB), archive/ (8MB)
→ Total freed: ~105MB
→ Risk accepted: Knowledge loss (but pipeline safe)

### Final Answer to User Goal

**User Goal:** "Maximum aggression without breaking post-CD pipeline."

**Safest aggressive deletions:**
1. card-system (66 files, 14MB) — ZERO RISK
2. archive/tokens/ (53 files, 8MB) — NEGATIVE RISK (improves safety)
3. Screenshot bulk (300 files, ~15MB) — LOW RISK (regenerable)
4. KA scratchpads (312 files, 68MB) — PIPELINE SAFE (knowledge loss accepted)

**Total: 731 files, ~105MB freed, ZERO pipeline breakage.**

**Protected (never delete):**
- DD/OD explorations (15 files)
- R1-R5 research (7 files)

**Refactor (improves structure):**
- T1 promotion (6 files MOVE, not delete)

---

**END REGRESSION ANALYSIS**
