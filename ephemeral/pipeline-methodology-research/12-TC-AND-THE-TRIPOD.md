# TC and the Tripod: How Tension-Composition Interacts with the Three Instruments

**Document:** 12-TC-AND-THE-TRIPOD.md
**Date:** 2026-03-01
**Scope:** Analysis of how Tension-Composition (TC) fits into the tripod architecture (master execution prompt + research package + curation process) identified by the methodology investigation.

---

## 1. Executive Summary

TC is the tripod's ANCHOR POINT -- the place where content meets the design system for the first time. But TC currently operates in a vacuum. It derives metaphors from content tension against system personality without consulting accumulated knowledge. The tripod changes this: TC's output SHAPES what the researcher curates (Instrument 2) and how the curation traverses knowledge (Instrument 3), while the master execution prompt (Instrument 1) provides TC's output as the builder's generative framework. TC does not become a single instrument -- it becomes the COUPLING MECHANISM between all three.

The investigation revealed a critical structural gap: TC asks "what does the reader FEEL?" while explorations asked "can CRESCENDO density work for code-heavy content?" These are different CATEGORIES of question. TC produces experiential metaphors; explorations produced structural propositions. The tripod needs both. The question is where structural propositions come from -- TC augmentation, the researcher agent, or their interaction.

---

## 2. Where TC Fits: Neither Instrument Nor Input

### The Naive Placement (Wrong)

The simplest model places TC as a preprocessing step:

```
Content → TC → Metaphor → Builder
```

This is the CURRENT pipeline architecture, and it is what the investigation identified as insufficient. TC runs blind to accumulated knowledge. The builder gets the metaphor plus 7 static vocabulary files. No curation. No research package. No implementation-mapped findings.

### The Second-Naive Placement (Also Wrong)

A slightly more sophisticated model makes TC one of the three instruments:

```
Instrument 1: Master execution prompt (static template)
Instrument 2: Research package (curated by researcher)
Instrument 3: Curation process (researcher's traversal method)
TC: Generates the metaphor that feeds Instrument 1
```

This is better but still wrong, because it treats TC as a self-contained module whose output is consumed downstream. It misses that TC's output should SHAPE the curation, and the curation's output should be SHAPED BY TC.

### The Correct Placement: TC as Coupling Mechanism

TC sits at the CENTER of the tripod, not before it or inside one leg:

```
                    TC DERIVATION
                   /      |       \
                  /       |        \
    SHAPES       /   ANCHORS   \      SHAPES
   question     /    builder's  \    traversal
   for I-1     /     framework   \   lens for I-3
              /        |          \
   Instrument 1    Instrument 2    Instrument 3
   (Exec Prompt)  (Research Pkg)  (Curation Process)
```

TC's metaphor and tension analysis become the ORGANIZING PRINCIPLE that coordinates all three instruments:

1. **TC → Instrument 1:** The conviction brief becomes the "driving question" section of the master execution prompt. It tells the builder what world they inhabit, what metaphor governs, what tensions to resolve.

2. **TC → Instrument 2:** The researcher reads TC's metaphor and uses it to SELECT which accumulated findings, mechanisms, case studies, and implementation examples are relevant to THIS build. "Given archaeological excavation, which explorations demonstrated layered descent? Which mechanisms encode depth progression?"

3. **TC → Instrument 3:** TC's tension analysis provides the LENS through which the researcher traverses the knowledge graph. The researcher doesn't scan everything -- they follow TC's metaphor as a search query through the accumulated knowledge.

---

## 3. TC as the Driving Question Generator

### Exploration Era: Structural Hypotheses

In the exploration era, the driving question was a STRUCTURAL HYPOTHESIS posed before building:

- DD: "Can CRESCENDO density work for code-heavy content?"
- OD: "What if documentation was organized as a conversation?"
- AD: "Does Z-Pattern axis geometry serve or contradict PULSE density?"
- CD: "Can 3 heavy component types honor the velocity rule while CRESCENDO builds through F-Pattern to Bento Grid?"

These questions are TOP-DOWN. They start from a structural proposition and ask whether it can be instantiated. The metaphor is PROPOSED first, then TESTED through building.

### Current Pipeline: Experiential Metaphors

TC asks BOTTOM-UP questions:

- FEEL: "What does the reader need to feel?"
- UNDERSTAND: "What relationships must be visible?"
- RECONCILE: "What prior beliefs does this challenge?"

These produce an experiential metaphor: "this content's world is archaeological excavation." The metaphor EMERGES from content tension, not from structural hypothesis.

### The Gap: Structural Propositions

The exploration era produced structural propositions that TC does not:

- "Density correlates inversely with confidence" (a rule connecting content properties to visual properties)
- "One Z-cycle equals one PULSE beat" (an equivalence principle)
- "Organization IS density" (a theoretical unification)

These are not experiential descriptions. They are ARCHITECTURAL LAWS about how the design system's vocabulary behaves. TC never generates these because TC's question framework is oriented toward the READER'S experience, not the SYSTEM'S structural behavior.

### TC as Driving Question Generator: How It Works

TC does NOT need to generate structural propositions directly. Instead, TC generates the FRAME within which structural propositions become relevant:

**Step 1:** TC derives "archaeological excavation" as the metaphor for Yegge's gas town content.

**Step 2:** TC's conviction brief contains:
- World-Description: "Knowledge compresses under sedimentary pressure. The deeper you go, the denser and darker."
- Calibration: Background arc from warm surface (#FEF9F5) to deep stratum (#2a2420). Spatial arc from 64-80px surface breathing to 32-40px bedrock compression.
- Opposition Map: Chaos-vs-architecture tension. The content's irreverent voice fights the system's editorial austerity.
- Compositional Arc: 7 strata from surface orientation through conversion operations to dispatch resolution.

**Step 3:** The master execution prompt (Instrument 1) transforms TC's output into the builder's driving question:

> "Your driving question: How does archaeological excavation manifest in the CSS architecture of a page about gas station economics? The excavation metaphor implies layered descent, sedimentary compression, and the discovery of buried value. Your CSS must make the reader FEEL they are descending through strata -- not because labels say 'stratum' but because backgrounds darken, spacing compresses, borders thicken, and typography densifies as you scroll."

This is structurally different from TC's conviction brief. The conviction brief carries CREATIVE DIRECTION. The driving question carries STRUCTURAL CHALLENGE. The master execution prompt TRANSLATES the former into the latter.

### The Translation Layer

The key insight: TC doesn't need augmentation to generate structural propositions. The master execution prompt IS the translation layer. It takes TC's experiential metaphor and converts it into the structural challenge that explorations used as their driving question.

TC produces: "The reader should feel progressive descent into compressed knowledge."
The prompt translates: "Your structural challenge: implement descent through simultaneous channel compression (backgrounds darken AND spacing decreases AND borders thicken AND typography shifts from serif to mono)."

This translation is what Agent-0C (the researcher) did in the exploration era -- they took the abstract hypothesis and produced implementation-mapped plans. In the tripod, this translation happens at the INTERFACE between TC and Instrument 1.

---

## 4. TC's Metaphor as Curation Lens (Instrument 2 + 3)

### How the Researcher Uses TC's Output

The researcher agent's job is to traverse accumulated knowledge and compile a bespoke package for THIS build. TC's metaphor provides the researcher's PRIMARY SEARCH CRITERIA.

**Without TC's metaphor,** the researcher has no organizing principle. They would need to include everything potentially relevant -- which is the current pipeline's problem (7 static files, same for every build).

**With TC's metaphor,** the researcher has a FILTER:

Given "archaeological excavation" for gas town content:

1. **Mechanism Selection:** The researcher scans all 20 mechanisms and identifies which ones serve excavation:
   - Border-weight gradient → encodes stratum depth (4px bedrock, 1px surface)
   - Spacing compression → encodes sedimentary pressure
   - Zone background progression → encodes depth through color
   - Dense/sparse alternation → encodes sedimentary layers
   - 2-zone component DNA → maps to discovery zones (artifact header + context body)

2. **Case Study Relevance:** The researcher identifies which case studies explored SIMILAR tensions:
   - OD-004 (confidence/geological) → highest structural resonance (layered descent, confidence strata)
   - DD-002 (CRESCENDO) → relevant density pattern (progressive compression)
   - DD-006 (fractal) → relevant for multi-scale consistency

3. **Finding Selection:** From 337 findings, the researcher selects those relevant to excavation:
   - R3-010 (Geological Model) → direct relevance
   - R3-036 (Fractal Self-Similarity) → structural requirement for multi-scale excavation
   - AD-F-023 (Attention Topology) → how depth manifests in reader's attention
   - DD-F-006 (Fractal Constraint) → mandatory for all builds

4. **Implementation Mapping:** The researcher converts each finding into a plan:
   ```
   R3-010 → "Geological Model"
     → Expected evidence: Background progression from #FEF9F5 to #2a2420 across 5+ zones
     → CSS mechanism: Progressive darkening + spacing compression
     → Must honor: Border-weight encodes stratum depth (4px deep, 1px surface)
     → Implementation: Set all 6 channels simultaneously at each zone boundary
   ```

### The Curation Process (Instrument 3)

TC's output doesn't just determine WHAT gets curated (Instrument 2) -- it determines HOW the researcher TRAVERSES the knowledge (Instrument 3).

The researcher reads TC's conviction brief and develops a traversal strategy:

1. **Primary axis:** Follow the metaphor's structural properties through the knowledge graph. "Archaeological excavation" → search for layered/descent/compression patterns across all stages.

2. **Opposition axis:** Follow TC's tension analysis. "Chaos-vs-architecture" → search for explorations that resolved similar tensions (irreverent content within formal system).

3. **Mechanism axis:** Follow TC's Phase 4 mechanism extraction. Which mechanisms did TC identify? Find implementation examples of those specific mechanisms.

4. **Anti-pattern axis:** What does the metaphor risk? "Excavation" risks dead zones between strata (empty transitions), monotonous descent (no variation), and label-heavy communication ("STRATUM 3 -- OPERATIONS"). Search for explorations that solved these specific problems.

The curation process is TC-SHAPED. Without TC, the researcher would traverse blindly. With TC, every traversal decision has a PURPOSE.

---

## 5. The 14 TC Axes and the Tripod

### Which Axes Map to Which Instruments?

Not all 14 TC axes contribute equally to all three instruments. The mapping is asymmetric:

**Axes that primarily shape Instrument 1 (Master Execution Prompt):**

| Axis | Contribution to I-1 |
|------|---------------------|
| FEEL | The emotional foundation of the driving question. "The builder should create a page where the reader FEELS descent." |
| BECOME | The transformational arc. "By the end, the reader should BECOME someone who sees gas stations differently." |
| RECONCILE | The opposition energy. "The reader must reconcile the irreverent voice with the serious economics." |

These axes produce the CREATIVE DIRECTION that the master execution prompt carries. They tell the builder WHAT the page should achieve experientially.

**Axes that primarily shape Instrument 2 (Research Package):**

| Axis | Contribution to I-2 |
|------|---------------------|
| UNDERSTAND | What structural relationships need to be visible → determines which mechanisms get included |
| NAVIGATE | How the reader moves through content → determines which density patterns are relevant |
| COMPARE | Whether side-by-side structures are needed → determines grid/layout mechanism inclusion |
| SEE | Whether spatial relationships need visual encoding → determines diagram/layout examples |

These axes produce STRUCTURAL REQUIREMENTS that determine what the researcher includes in the package. They tell the researcher which mechanisms, patterns, and implementation examples are relevant.

**Axes that primarily shape Instrument 3 (Curation Process):**

| Axis | Contribution to I-3 |
|------|---------------------|
| EVALUATE | What quality criteria matter → shapes which findings the researcher prioritizes |
| TRUST | What authority signals are needed → shapes which case studies demonstrate authority |
| ORIENT | What context is required → shapes how much prerequisite knowledge the package includes |
| DISCOVER | Whether progressive revelation is needed → shapes the researcher's temporal ordering |

These axes produce TRAVERSAL CRITERIA that determine how the researcher navigates the knowledge graph. They tell the researcher where to LOOK and in what ORDER.

**Axes that span all three instruments:**

| Axis | Spans Because |
|------|---------------|
| IDENTIFY | Shapes the persona the builder targets (I-1), determines reader-mirroring examples (I-2), and frames the researcher's perspective (I-3) |
| REMEMBER | Shapes what the builder reinforces (I-1), determines mnemonic mechanism inclusion (I-2), and prioritizes retention-focused findings (I-3) |

### The Core Four vs Extended Nine

TC's core four axes (FEEL/UNDERSTAND/DO/BECOME) map cleanly to Instrument 1 -- they generate the builder's driving question. The extended nine (NAVIGATE through REMEMBER) primarily serve Instruments 2 and 3 -- they generate the researcher's search criteria and traversal strategy.

This suggests a natural division of labor:
- **TC Phase 1-3** (core questioning + tension + metaphor) → primarily feeds **Instrument 1**
- **TC Phase 4** (mechanism extraction + structural properties) → primarily feeds **Instrument 2**
- **TC Phase 1 extended axes** (NAVIGATE, TRUST, EVALUATE, etc.) → primarily feeds **Instrument 3**

---

## 6. Concrete Walkthrough: Gas Town with the Tripod

### Content: Yegge Blog Post About Gas Towns

Steve Yegge's blog post about gas station economics -- irreverent voice, serious subject matter, narrative digressions, technical depth mixed with personal anecdote.

### Step 1: TC Runs (Current System -- No Change)

TC reads the content and runs Phases 0-4.5:

**Phase 1 (Multi-Axis Questioning):**
- FEEL: Reader needs to feel progressive discovery, alternating between amusement and insight
- UNDERSTAND: Reader needs to see the economic model (inputs → processing → outputs)
- DO: Reader needs to evaluate their own assumptions about mundane infrastructure
- BECOME: Reader needs to become someone who sees hidden complexity in ordinary things
- RECONCILE: Reader must reconcile Yegge's irreverent tone with the serious economic analysis
- NAVIGATE: Long-form, multi-section, with digressions that loop back
- COMPARE: Gas town model vs traditional business model
- DISCOVER: Progressive revelation of the gas town's actual economics

**Phase 2 (Tension Derivation):**
- Primary tension: Chaos (irreverent voice, digressions, humor) vs Architecture (the economic model has precise structure)
- Secondary tension: Mundane surface (gas stations seem boring) vs Hidden depth (the economics are fascinating)
- The system's editorial austerity FIGHTS the content's irreverence
- The system's flat surfaces MATCH the content's industrial subject

**Phase 3 (Metaphor Collapse):**
- Metaphor: "Archaeological excavation" -- digging through layers of mundane surface to find the valuable structure beneath
- Alternative considered: "Refinery cross-section" (rejected -- too aligned with content's own vocabulary, violates R1 interpretive distance)
- Alternative considered: "Geological core sample" (rejected -- too similar to OD-004, convergence risk)

**Phase 4 (Compositional Architecture):**
- 5 zones: Surface Survey → Topsoil Analysis → Sedimentary Core → Bedrock Economics → Artifact Dispatch
- Background arc: warm cream → warm tan → ochre → deep brown → near-black
- Spatial arc: 80px → 64px → 48px → 32px → 24px
- Mechanisms: border-weight gradient, spacing compression, zone progression, 2-zone DNA, dense/sparse alternation

**Phase 4.5 (Conviction Brief):**
- World-Description: "In this world, surfaces deceive. What looks like a gas station is actually an archaeological site..."
- Calibration: Container 960px, background hex progression, padding compression table
- Opposition Map: Irreverence vs austerity, mundane vs profound, personal vs systematic
- Compositional Arc: "The page opens as a casual observation. By the third zone, the reader realizes they've been descending..."
- Creative Conditions: "Consider asymmetric margins for digressions -- marginalia within the excavation"
- Content Map: 12 sections, NARRATIVE/REFERENCE/PROVOCATIVE annotations, emotional arc peaks

### Step 2: Researcher Agent Receives TC Brief (NEW)

The researcher agent reads the TC conviction brief. Now the researcher has:
- A metaphor: "archaeological excavation"
- A tension: chaos-vs-architecture
- A structural principle: layered descent with compression
- Mechanism candidates: border-weight, spacing compression, zone progression
- Creative conditions: asymmetric margins, editorial asides

### Step 3: Researcher Traverses Knowledge (Instrument 3)

The researcher uses TC's output as search criteria:

**Primary search:** "Which explorations demonstrated layered descent?"
- OD-004 (confidence/geological): layered strata, inverse density-confidence correlation
- DD-004 (layers): geological strata model, drilling by choice
- DD-002 (gradient): CRESCENDO progressive density

**Opposition search:** "Which explorations resolved irreverent-vs-formal tension?"
- OD-001 (conversational): Q&A format bridging informal voice with formal structure
- CD-006 (pilot): self-referential content navigating meta-formal tension

**Mechanism search:** "What implementation examples exist for border-weight gradient + spacing compression in descent patterns?"
- OD-004's implementation: 4px bedrock → 1px surface with specific padding values
- DD-004's implementation: atmosphere (80px) → bedrock (24px) padding gradient
- Components.css: .stratum, .zone, .breathing patterns

**Anti-pattern search:** "What fails in excavation-style layouts?"
- AD failure (no re-enrichment): dark matter findings lost → warns about under-documented transitions
- Flagship failure: dead zones at section boundaries → warns about empty transitions between strata
- CD-005 criticism: transitions between axis patterns risk discontinuity

### Step 4: Researcher Compiles Package (Instrument 2)

The researcher compiles a BESPOKE package (~150-200 lines) for this specific build:

```
RESEARCH PACKAGE: Gas Town Archaeological Excavation Build

SOUL CHECKLIST (from identity.md):
- border-radius: 0, box-shadow: none, no gradients
- Warm palette: #FEF9F5 → #1A1A1A progression
- Typography trinity: Instrument Serif / Inter / JetBrains Mono

METAPHOR-RELEVANT MECHANISMS (with implementation maps):
1. Border-Weight Gradient for Stratum Depth
   - Technique: 4px/3px/1px progression encodes excavation depth
   - Evidence from OD-004: .stratum--bedrock at 4px, .stratum--surface at 1px
   - Expected evidence: Borders thicken as reader descends through zones
   - CSS pattern: border-left-width increases with depth

2. Spacing Compression for Sedimentary Pressure
   - Technique: Padding decreases with depth (surface loose, bedrock compressed)
   - Evidence from DD-004: atmosphere 80px → bedrock 24px
   - Expected evidence: Content density increases visibly with scroll depth
   - CSS pattern: padding decreases + line-height tightens

3. Zone Background Progression for Depth
   - Technique: Background color darkens with depth
   - Evidence from OD-004: warm cream → ochre → deep brown
   - CRITICAL: Each adjacent zone must differ by >= 15 RGB max-channel
   - CSS pattern: Progressive hex values for each stratum

4. 2-Zone Component DNA for Discovery Artifacts
   - Technique: Each discovery element has sparse label + dense body
   - Evidence from CD-003: file-tree components use this pattern
   - Expected evidence: Code blocks and key insights use sparse header + dense content

ANTI-PATTERNS (from failure analysis):
- DEAD ZONES: Do not use empty space between strata. Transitions must be
  CHANGING STATE (background shift + border change), not empty padding.
  Evidence: Flagship failure had 210-276px voids at section boundaries.
- LABEL DEPENDENCE: The excavation metaphor must be STRUCTURAL, not ANNOUNCED.
  Do not label zones as "STRATUM 3 -- OPERATIONS." Let CSS communicate depth.
  Evidence: Mode 4 PA downgraded metaphor from "structural" to "announced."
- UNIFORM DESCENT: Not every zone should be deeper than the last. Include
  one INTRUSION zone (lighter amid darkness) for pacing variation.
  Evidence: DD-005 (rivers) used divergence points to break monotony.

RELEVANT DENSITY PATTERN: CRESCENDO
- From DD-002: sparse → progressive density increase → resolution
- Modified for excavation: surface sparse → core dense → dispatch resolves

CONTENT-SPECIFIC ADAPTATIONS:
- Yegge's digressions map to LATERAL TUNNELS in the excavation metaphor
  → Use asymmetric margins (indented left, full right) per TC brief
- Code examples map to ARTIFACT SPECIMENS → Use mono font in boxed containers
- Economic model maps to BEDROCK LAYER → Maximum density, darkest zone
```

### Step 5: Master Execution Prompt (Instrument 1)

The master execution prompt receives both TC's conviction brief and the researcher's package. It assembles the builder's complete creative context:

```
BUILDER PROMPT:

[Section 1: World-Description — from TC brief]
In this world, surfaces deceive...

[Section 2: Your Structural Challenge — TRANSLATED from TC]
You are building a page that descends. Not metaphorically labeled as
descending, but perceptually descending: backgrounds darken, spacing
compresses, borders thicken, typography shifts from editorial serif to
precise mono as the reader scrolls. The question is not "does it look like
an excavation?" but "does the reader FEEL descent?"

[Section 3: Implementation Plans — from researcher package]
At each zone boundary, set ALL 6 channels simultaneously:
  Zone 1→2: bg #FEF9F5→#F5EDE5, border 1px→3px, padding 80px→64px...
  Zone 2→3: bg #F5EDE5→#E8D8C8, border 3px→3px, padding 64px→48px...

[Section 4: Creative Conditions — from TC brief]
Consider asymmetric margins for digressions...
Try giving one section the author's voice in Instrument Serif italic...

[Section 5: Anti-Patterns — from researcher package]
The three ways this build fails: dead zones, label dependence, uniform descent.
```

The builder receives a COMPLETE creative framework: creative direction (TC), structural challenge (translated by prompt), implementation plans (researcher), creative invitations (TC), and failure modes (researcher).

---

## 7. The Missing Category: Structural Propositions

### What TC Produces vs What Explorations Produced

TC produces: "The content has chaos-vs-architecture tension. The metaphor is archaeological excavation."

Explorations produced: "Density correlates inversely with confidence." "One Z-cycle equals one PULSE beat." "Organization IS density."

These structural propositions are RULES about how the design system's vocabulary behaves. They are neither experiential descriptions (TC's domain) nor implementation plans (the researcher's domain). They live in a third category: ARCHITECTURAL LAWS.

### Should TC Generate Structural Propositions?

**Argument FOR augmenting TC:**

TC already extracts structural properties in Phase 4 (spatial, temporal, material, behavioral, relational). It already produces isomorphism tables mapping metaphor properties to CSS mechanisms. Extending TC to also generate structural propositions like "in this page, compression direction must be consistent across ALL channels" would be a natural extension of Phase 4.

**Argument AGAINST augmenting TC:**

Structural propositions in the exploration era were DISCOVERED through building, not through analysis. DD-F-006 (fractal self-similarity) was discovered by BUILDING DD-006, not by analyzing content. OD-F-005 ("Organization IS Density") was discovered by building OD-006. These propositions emerged from the ACT of composition, not from the ACT of derivation.

TC operates BEFORE building. It cannot discover propositions that only emerge DURING building.

**The Resolution: Different Agents, Different Propositions**

TC generates METAPHOR-SPECIFIC structural propositions:
- "In this excavation, descent must be consistent across all 6 channels"
- "Each stratum should be perceptibly distinct from adjacent strata"
- "Transitions between strata are state changes, not empty space"

These are structural rules DERIVED from the specific metaphor. They are not universal architectural laws like "Organization IS Density" -- they are PARTICULAR to this build's metaphor.

Universal structural propositions belong in the ACCUMULATED KNOWLEDGE -- the repository the researcher traverses. They were discovered through building and should be consumed through curation, not re-derived for each build.

The tripod handles this naturally:
- **TC** generates metaphor-specific structural propositions (Phase 4 output)
- **Researcher** retrieves universal structural propositions from accumulated knowledge
- **Builder** receives both, mapped to implementation plans

---

## 8. TC's Relationship to Each Tripod Instrument

### TC → Instrument 1 (Master Execution Prompt)

**Relationship type:** TC's conviction brief IS the core of Instrument 1.

The master execution prompt has a template structure (soul constraints, building protocol, verification checklist) that is relatively STATIC. What varies per build is the CREATIVE DIRECTION section, and that section is TC's conviction brief.

But the prompt adds something TC does not: the TRANSLATION from experiential direction to structural challenge. TC says "the reader should feel descent." The prompt says "implement descent through simultaneous channel compression." This translation is the prompt's unique contribution.

**TC does NOT become Instrument 1.** TC feeds Instrument 1. The prompt adds structural translation, verification criteria, and building protocol.

### TC → Instrument 2 (Research Package)

**Relationship type:** TC's output SHAPES what gets included.

The researcher reads TC's conviction brief and uses it as a FILTER for selecting findings, mechanisms, case studies, and implementation examples. Without TC's metaphor, the researcher has no organizing principle for curation.

**TC does NOT produce Instrument 2.** TC produces the CRITERIA by which the researcher selects and organizes the package.

### TC → Instrument 3 (Curation Process)

**Relationship type:** TC's tension analysis provides the TRAVERSAL LENS.

The curation process is HOW the researcher navigates the knowledge graph. TC's tensions, axes, and metaphor properties determine:
- Which paths through the graph to follow (follow layered/descent/compression patterns)
- Which nodes to visit (findings about zone progression, case studies about geological metaphor)
- Which connections to make (link spacing compression to border-weight to background progression)
- What anti-patterns to flag (dead zones, label dependence, uniform descent)

**TC does NOT define Instrument 3.** TC provides the INPUT that makes the curation process content-specific rather than generic.

---

## 9. What Changes About TC in the Tripod

### What Stays the Same

TC's core pipeline (Phases 0-4.5) does NOT need to change. The skill already produces:
- Multi-axis content analysis (14 axes)
- Genuine tension derivation
- Metaphor collapse with structural isomorphisms
- Mechanism extraction across 5 categories
- Rich conviction brief (6 sections, no line limit)

This is all the tripod needs from TC. TC is already the right tool for its role.

### What Changes

**1. TC becomes AWARE of the researcher's existence.**

Currently, TC's conviction brief is written for the BUILDER. In the tripod, the conviction brief is consumed by TWO agents: the builder (via Instrument 1) AND the researcher (who uses it to curate Instrument 2). TC doesn't need to write differently -- the brief is already rich enough to serve both audiences. But TC should know that its output feeds curation, not just construction.

**2. TC's Phase 4 output gains a secondary audience.**

TC Phase 4 extracts metaphor properties across 5 categories (spatial, temporal, material, behavioral, relational). Currently, these feed the conviction brief. In the tripod, they ALSO serve as the researcher's mechanism search criteria. The researcher reads TC's property extraction and uses it to select relevant mechanisms from the catalog.

**3. TC's extended axes gain operational weight.**

Currently, TC's extended axes (NAVIGATE, TRUST, EVALUATE, etc.) are secondary to the core four. In the tripod, they become primary inputs for Instrument 3 (curation process). The researcher's traversal strategy is SHAPED by which axes TC activated and what needs those axes identified.

**4. TC gains access to accumulated knowledge (OPTIONAL and LATE).**

The most significant potential change: should TC consult accumulated knowledge during its derivation? Currently, TC runs BLIND -- it reads only the content and the identity files. The anti-gravity principle says library access before metaphor commitment = pattern-matching.

In the tripod, there's a nuanced question: could TC consult accumulated knowledge AFTER metaphor commitment (Phase 3.5) to enrich its Phase 4 mechanism extraction? This would let TC say "my metaphor is archaeological excavation; the knowledge base contains implementations of layered descent in OD-004 and DD-004; I can reference these patterns (not copy them) when extracting mechanism properties."

This is a RISK. The anti-gravity principle exists because pre-commitment exposure causes pattern-matching. Post-commitment exposure is less risky but still introduces the possibility that TC's mechanism extraction becomes derivative rather than generative.

**Recommendation:** Keep TC blind through Phase 3.5. Allow optional knowledge consultation in Phase 4, but ONLY if the researcher agent has not yet been spawned. If the researcher exists, let the researcher handle knowledge consultation -- TC stays in its creative derivation role.

---

## 10. The Feedback Loop: How TC Improves Over Time

### Current State: No Feedback

TC runs, produces a brief, builder builds, PA audits, fixes happen. Nothing feeds back to TC. TC never learns that its metaphors produce dead zones, or that its calibration ranges are too tight, or that its tension analysis missed a key axis.

### Tripod-Enabled Feedback

In the tripod, two feedback paths become possible:

**1. PA → Researcher → TC Knowledge Base:**

PA identifies "dead zones between strata" as a failure pattern. The researcher notes this in the accumulated knowledge: "archaeological excavation metaphors risk dead zones at stratum boundaries; transitions must be state changes, not empty space." The next time TC derives an excavation-like metaphor, the researcher's package will include this anti-pattern automatically.

TC doesn't change. The KNOWLEDGE that TC's output feeds into changes.

**2. Builder Reflection → Researcher → TC Knowledge Base:**

The builder's 6-dimension reflection (conviction, alternatives, surprises, impulses, experience, unresolved) contains insights about what TC's metaphor produced vs what TC's metaphor intended. "The excavation metaphor produced monotonous descent -- I wished for lateral variation." The researcher captures this as a finding: "linear metaphors need intentional discontinuity mechanisms."

Again, TC doesn't change. The knowledge base grows.

### The Accumulation Principle Applied to TC

This is exactly the accumulation mechanism the investigation identified as missing from the pipeline (Section 3, Master Findings). In the exploration era, each build produced NEW FINDINGS that fed forward. In the tripod, each build produces PA results and builder reflections that feed into accumulated knowledge, which the researcher consults for future builds.

TC stays stable. The ecosystem around TC grows richer.

---

## 11. Summary: TC's Role in the Tripod

| Dimension | TC's Role | How It Connects |
|-----------|-----------|-----------------|
| Creative derivation | TC derives metaphor from content tension | Output feeds ALL three instruments |
| Driving question | TC's conviction brief anchors the builder's creative challenge | Instrument 1 translates TC's experiential direction into structural challenge |
| Curation criteria | TC's metaphor + tension + axes provide the researcher's search criteria | Instruments 2 and 3 are TC-shaped |
| Structural propositions | TC generates metaphor-SPECIFIC propositions; universal propositions come from accumulated knowledge | Researcher bridges the gap |
| Knowledge awareness | TC runs BLIND through Phase 3.5; optional late-stage knowledge access for mechanism enrichment | Anti-gravity principle preserved |
| Feedback loop | TC doesn't change; the knowledge base it feeds into changes | Accumulation principle applied |
| 14 axes distribution | Core four → Instrument 1 (creative direction); Extended nine → Instruments 2+3 (curation criteria) | Natural division of labor |

TC is not one leg of the tripod. TC is the JOINT where all three legs connect. It provides the organizing principle that makes each instrument content-specific. Without TC, the tripod has no metaphor to organize around. Without the tripod, TC's metaphor arrives at the builder without accumulated knowledge, implementation maps, or failure-mode awareness.

The tripod needs TC. TC needs the tripod. Neither is complete alone.

---

*Companion documents:*
- `01-MASTER-FINDINGS.md` -- Core insight and million dollar question
- `04-GENERATIVE-QUESTIONS.md` -- All 24 questions + TC comparison
- `10-DIMENSIONAL-REDEFINITION.md` -- Pipeline redefinition through the tripod lens
- `11-DIMENSIONAL-CURATION.md` -- What the curation process looks like
