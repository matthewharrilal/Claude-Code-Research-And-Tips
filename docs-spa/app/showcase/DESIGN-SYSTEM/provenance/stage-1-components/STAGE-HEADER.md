---
pipeline_stage: 1
stage_name: Component Foundation
file_type: stage-header
predecessor: null
successor: provenance/stage-2-density-dd/STAGE-HEADER.md
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
last_updated: 2026-02-05
---

# STAGE 1: COMPONENT FOUNDATION
## Where the Soul Was Discovered

═══════════════════════════════════════════════════════════════════════════════
## THE STORY
═══════════════════════════════════════════════════════════════════════════════

Before there were density explorations, before there were patterns, before there
was a design system — there was a gap. The components existed, but they didn't
speak with one voice. The audit revealed 54% soul compliance. Not broken, but
not whole.

The Foundation Remediation wasn't just fixing CSS. It was listening. As each
component was examined, perceptual truths emerged:

**The First Discovery (COMP-F-001):** When a rounded corner was changed to sharp,
the same content suddenly felt *authoritative*. The words hadn't changed, but
their weight had. This became Soul Piece #1: Sharp Edges Command Authority.

**The Typography Epiphany (COMP-F-002):** The EssenceBox was meant to sound like
marginalia in a first-edition book, but it was speaking in sans-serif — the voice
of NOW, not the voice of accumulated wisdom. When Instrument Serif italic was
applied, centuries of gravitas arrived. This became Soul Piece #2: The Archivist
Speaks in Serif.

**The Family Reunion (COMP-F-003):** GotchaBox had 6 zones while its siblings
had 2. It was trying to be "more helpful" but it was being "more different."
When simplified to 2-zone structure, all callouts suddenly felt like family.
This became Soul Piece #3: Callouts Share Family DNA.

**The Honesty Test (COMP-F-004):** DesignDecision had a shadow-sm — subtle,
tasteful, professional. But next to flat siblings, it was lying. It claimed
elevation it didn't earn. When the shadow was removed, honesty arrived. This
became Soul Piece #4: Shadows Lie About Depth.

**The Shape Shift (COMP-F-005):** Step numbers were circles — friendly,
approachable, like a children's tutorial. When they became squares, the stakes
changed. These weren't suggestions; these were procedures. This became Soul
Piece #5: Squares Signal System.

From 54% to ~92%. From scattered components to unified family. From implicit
patterns to documented soul. This stage didn't build anything new — it discovered
what was always trying to be there.

═══════════════════════════════════════════════════════════════════════════════
## WHAT THIS STAGE CONSUMED
═══════════════════════════════════════════════════════════════════════════════

| Input | File Location | What Was Extracted |
|-------|---------------|-------------------|
| Component TSX files | `docs-spa/components/*.tsx` | Actual implementations to audit |
| globals.css | `docs-spa/app/globals.css` | Violations requiring remediation |
| KortAI Reference | Mental model | Target aesthetic for comparison |
| Prior component audit | `checkpoints/COMPONENT-AUDIT-COMP-001-011.md` | Starting compliance scores |

═══════════════════════════════════════════════════════════════════════════════
## WHAT THIS STAGE PRODUCED
═══════════════════════════════════════════════════════════════════════════════

| Output | File Location | WHY It Matters |
|--------|---------------|----------------|
| 5 Soul Pieces | `checkpoints/SOUL-DISCOVERIES.md` | DNA for all future work |
| Component findings | `provenance/stage-1-components/component-findings.md` | COMP-F-### IDs for chain |
| Remediation synthesis | `checkpoints/FOUNDATION-REMEDIATION-SYNTHESIS.md` | Complete audit trail |
| 11 compliant components | `docs-spa/components/*.tsx` | Foundation DD could build on |
| 3 globals.css fixes | `docs-spa/app/globals.css` | Hidden violations removed |
| 14 audit screenshots | `audit-screenshots/cycle-1/` | Visual verification evidence |

═══════════════════════════════════════════════════════════════════════════════
## QUALITY ACHIEVED
═══════════════════════════════════════════════════════════════════════════════

| Metric | Before | After | Evidence |
|--------|--------|-------|----------|
| Component compliance | 54% avg | ~92% | FOUNDATION-REMEDIATION-SYNTHESIS.md |
| Components passing | 0/11 | 11/11 | All components verified |
| Soul pieces documented | 0 | 5 | SOUL-DISCOVERIES.md |
| globals.css violations | 3 | 0 | Lines 175, 178, 206 fixed |
| Locked tokens enforced | Partial | Complete | border-radius: 0, box-shadow: none |

═══════════════════════════════════════════════════════════════════════════════
## KEY DECISIONS (With Provenance)
═══════════════════════════════════════════════════════════════════════════════

### Decision 1: Sharp Edges Everywhere (COMP-F-001)
**What:** border-radius: 0 on ALL containers, no exceptions
**Why:** Rounded corners say "approachable" but also "negotiable." Documentation
about code patterns should feel as precise as the code itself.
**Discovered:** Audit of globals.css line 175 (section-number had 50%)
**Impact:** Every DD exploration inherits this. Every OD exploration inherits this.

### Decision 2: Serif Italic for Wisdom Voice (COMP-F-002)
**What:** EssenceBox and CoreAbstraction philosophy zones use Instrument Serif italic
**Why:** The Archivist of Axioms doesn't give tips; they share truths that transcend
the current moment. The typography must match the voice.
**Discovered:** COMP-005 audit — sans-serif felt like a blog post, not timeless wisdom
**Impact:** Any future "wisdom" components must use this voice.

### Decision 3: 2-Zone Callout Structure (COMP-F-003)
**What:** All callouts share identical structure (label + body + 4px left accent)
**Why:** Components in a family must share structural DNA. Differentiation through
COLOR, not structure.
**Discovered:** GotchaBox had 6 zones; simplifying to 2 restored family cohesion
**Impact:** All DD callouts verified against this. OD callouts must maintain this.

### Decision 4: No Shadows Anywhere (COMP-F-004)
**What:** box-shadow: none on everything, including hover states
**Why:** Shadows create FALSE DEPTH. In documentation, nothing should float. Hierarchy
comes from SIZE, COLOR, POSITION — not fake 3D effects.
**Discovered:** DesignDecision had shadow-sm creating false elevation
**Impact:** DD explorations verified flat. OD must not introduce shadows.

### Decision 5: Square Step Indicators (COMP-F-005)
**What:** PathOfTask uses square step numbers (border-radius: 0)
**Why:** SQUARES suggest precision, exactness — like checkboxes in compliance form.
CIRCLES suggest flexibility, approximation — like casual bullet points.
**Discovered:** Round step numbers made procedures feel like suggestions
**Impact:** Any sequential/step component must use squares.

═══════════════════════════════════════════════════════════════════════════════
## CAUSAL RELATIONSHIPS
═══════════════════════════════════════════════════════════════════════════════

### What ENABLED This Stage
- KortAI reference aesthetic existed as mental model
- Components were implemented (even if non-compliant)
- Perceptual deepening skill available for systematic audit

### What This Stage ENABLES

**Stage 2 (DD):**
- DD could ONLY be soul-compliant BECAUSE components were remediated first
- DD inherited 5 soul pieces as non-negotiable constraints
- DD-006 achieved 36/40 because foundation was solid

**Stage 3 (OD):**
- OD inherits same 5 soul pieces
- OD builds on compliant components, not broken ones
- OD can discover COGNITIVE soul pieces to add to visual ones

**All Future Stages:**
- Every pattern traces back to these 5 soul pieces
- Every audit verifies against component-findings COMP-F-###
- Breaking a soul piece = breaking the body

### What BREAKS If This Stage Didn't Exist
- DD would have built on 54% foundation (compromised from start)
- No documented soul pieces = each exploration reinvents constraints
- No COMP-F-### IDs = findings can't be traced or cited
- Migration would apply patterns without understanding their DNA

═══════════════════════════════════════════════════════════════════════════════
## ACCUMULATED RESEARCH WEIGHT
═══════════════════════════════════════════════════════════════════════════════

| Layer | Source | Weight Carried Forward |
|-------|--------|------------------------|
| Soul Pieces | This stage | 5 pieces, 100% of visual soul |
| Component DNA | This stage | 11 verified components |
| Locked Tokens | This stage | geometry.md locked values |
| Original Research | R-1 to R-5 | 337 findings (pending application) |

**Total weight Stage 2 inherited:** 5 soul pieces + 11 components + locked tokens

═══════════════════════════════════════════════════════════════════════════════
## FILES IN THIS FOLDER
═══════════════════════════════════════════════════════════════════════════════

| File | Chain Role | When to Read |
|------|------------|--------------|
| `STAGE-HEADER.md` | Stage narrative + metadata | First — understand the story |
| `component-findings.md` | COMP-F-### IDs | When citing component decisions |
| `FOUNDATION-REMEDIATION-SYNTHESIS.md` | Complete audit record | When you need full detail |
| `CLAUDE.md` | Navigation for this folder | When entering this folder fresh |

═══════════════════════════════════════════════════════════════════════════════
