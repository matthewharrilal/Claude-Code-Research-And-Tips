---
pipeline_stage: 1
stage_name: Component Foundation
file_type: outbound-findings
predecessor: null
successor: provenance/stage-2-density-dd/DD-outbound-findings.md
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
last_updated: 2026-02-05
---

# COMPONENT FINDINGS (COMP-F-###)
## Outbound Research from Stage 1

═══════════════════════════════════════════════════════════════════════════════
## HOW TO USE THIS FILE
═══════════════════════════════════════════════════════════════════════════════

Every finding has an ID: `COMP-F-###`

When you apply a finding, cite it:
- "Applying COMP-F-001: All edges sharp per soul piece #1"
- "COMP-F-003 requires 2-zone structure for this callout"

When you create something new that COULD violate a finding, check here first.

═══════════════════════════════════════════════════════════════════════════════
## SOUL PIECE FINDINGS
═══════════════════════════════════════════════════════════════════════════════

| ID | Finding | How Discovered | Consumed By | Chain Impact |
|----|---------|----------------|-------------|--------------|
| COMP-F-001 | **Soul #1: Sharp edges = authority = precision.** border-radius: 0 on ALL containers. | Edge audit across 11 components; globals.css line 175 had 50% on section-number | DD, OD, AD, CD, Migration | Every exploration must have border-radius: 0. No exceptions. Violating this breaks the chain. |
| COMP-F-002 | **Soul #2: Serif italic = wisdom voice.** EssenceBox and CoreAbstraction philosophy zones use Instrument Serif italic. | Typography audit of COMP-005 EssenceBox; sans-serif felt like blog post, not wisdom | DD, OD, AD, CD, Migration | Wisdom components speak in serif. Any "philosophical" content zone must use this voice. |
| COMP-F-003 | **Soul #3: 2-zone callout = family DNA.** All callouts share label + body + 4px left accent. Differentiation through COLOR only. | Structural audit; GotchaBox had 6 zones breaking family cohesion | DD, OD, AD, CD, Migration | Breaking 2-zone structure breaks family identity. All future callouts must maintain this. |
| COMP-F-004 | **Soul #4: No shadows = honesty about depth.** box-shadow: none everywhere. Hierarchy through size/color/position, not fake 3D. | Depth audit; DesignDecision had shadow-sm creating false elevation | DD, OD, AD, CD, Migration | Flatness is honesty. No component may introduce shadows. |
| COMP-F-005 | **Soul #5: Squares signal system exactness.** Step indicators, checkboxes = square shapes. Circles suggest flexibility. | Shape audit of COMP-010 PathOfTask; round steps felt like suggestions | DD, OD, AD, CD, Migration | Sequential/procedural components use squares. This is non-negotiable. |

═══════════════════════════════════════════════════════════════════════════════
## REMEDIATION FINDINGS
═══════════════════════════════════════════════════════════════════════════════

| ID | Finding | How Discovered | Consumed By | Chain Impact |
|----|---------|----------------|-------------|--------------|
| COMP-F-006 | **globals.css had unauthorized border-radius values.** Line 175: section-number had border-radius: 50%. Fixed to 0. | Remediation audit discovered inline overrides bypassing token system | DD (foundation was fixed before DD explorations) | DD could only be soul-compliant because this was fixed first. Shows hidden violations can exist in CSS. |
| COMP-F-007 | **globals.css had unauthorized box-shadow values.** Lines 178, 206 had shadows on section-number and essence-box. DELETED. | Remediation audit discovered shadows sneaking through globals | DD (foundation was fixed before DD explorations) | Shadows must be actively hunted. They hide in unexpected places. |
| COMP-F-008 | **54% compliance = foundation too broken to build on.** Original audit showed 54% average. This was unacceptable for DD work. | Foundation audit revealed scope of gap before DD could start | DD methodology decision | DD couldn't have achieved high scores on broken foundation. Remediation was prerequisite. |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT-SPECIFIC FINDINGS
═══════════════════════════════════════════════════════════════════════════════

| ID | Finding | Component | Evidence | Chain Impact |
|----|---------|-----------|----------|--------------|
| COMP-F-009 | **CodeBlock needs 2-zone structure.** Header (#27272A) + code body (#1A1A1A). No window chrome, no traffic light dots. | COMP-001 CodeBlock | Sharp edges, JetBrains Mono, two-zone structure verified | All code displays in DD/OD/AD/CD must follow this pattern. |
| COMP-F-010 | **Callout accent borders must be 4px.** Not 2px, not 3px, not 6px. 4px standardized. | All callout family | Border audit showed inconsistencies; standardized to 4px | DD-001 initially had some 2px borders — violated. Fixed in DD-002+. |
| COMP-F-011 | **Warm cream background (#FEF9F5) is the page ground.** Not white (#FFFFFF), not cool gray. | All components | Color palette verification | Every exploration uses warm cream as canvas. |
| COMP-F-012 | **Red accent (#E83025) marks important attention.** Used for gotcha callouts, step indicators, key labels. | GotchaBox, PathOfTask, labels | Color semantic analysis | Red = attention/warning/action. Don't dilute with overuse. |
| COMP-F-013 | **Component characters are defined and documented.** Each component has a "character" (Precise Transcriptionist, Archivist of Axioms, etc.). | All 11 components | COMPONENTS-REGISTRY.md, OVERVIEW.md | Characters guide appropriate usage. Wrong character = wrong component. |

═══════════════════════════════════════════════════════════════════════════════
## FAMILY STRUCTURE FINDINGS
═══════════════════════════════════════════════════════════════════════════════

| ID | Finding | Family | Members | Chain Impact |
|----|---------|--------|---------|--------------|
| COMP-F-014 | **Callout Family shares DNA.** 5 members (Info, Tip, Gotcha, Essence, Challenge). All: 2-zone + 4px left accent. Differentiated by color only. | Callouts | Info (blue), Tip (green), Gotcha (red), Essence (amber), Challenge (purple) | New callout types must follow DNA. |
| COMP-F-015 | **Technical Family shares monospace DNA.** CodeBlock and FileTree both use monospace fonts for technical content. | Technical | CodeBlock, FileTree | Technical content = monospace. Always. |
| COMP-F-016 | **Structural Family has complex zones.** DecisionMatrix, CoreAbstraction, PathOfTask, Reasoning all have 3+ zones. | Structural | 4 members with bounded frames | Complex components need more structure, but within flat constraints. |

═══════════════════════════════════════════════════════════════════════════════
## ANTI-PATTERN FINDINGS
═══════════════════════════════════════════════════════════════════════════════

| ID | Anti-Pattern | Why It Fails | Discovered In | Prevention |
|----|--------------|--------------|---------------|------------|
| COMP-F-017 | **Rounded corners on technical content.** Makes precision content feel casual. | Undermines authority | globals.css section-number | Always verify border-radius: 0 |
| COMP-F-018 | **Sans-serif for wisdom content.** Makes timeless content feel temporal. | Wrong voice | EssenceBox initial state | Wisdom = serif italic |
| COMP-F-019 | **Divergent callout structures.** Breaks family cohesion, forces user to re-learn. | Cognitive load | GotchaBox 6-zone | Maintain 2-zone DNA |
| COMP-F-020 | **Shadow elevation for emphasis.** Creates false depth hierarchy. | Dishonest | DesignDecision shadow-sm | Use color/size instead |
| COMP-F-021 | **Circle shapes for procedures.** Signals flexibility when exactness required. | Wrong stakes | PathOfTask circles | Procedures = squares |

═══════════════════════════════════════════════════════════════════════════════
## FINDING CONSUMPTION MATRIX
═══════════════════════════════════════════════════════════════════════════════

| Finding ID | DD-001 | DD-002 | DD-003 | DD-004 | DD-005 | DD-006 | OD | AD | CD | Migration |
|------------|--------|--------|--------|--------|--------|--------|----|----|----|-----------|
| COMP-F-001 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⏳ | ⏳ | ⏳ | ⏳ |
| COMP-F-002 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⏳ | ⏳ | ⏳ | ⏳ |
| COMP-F-003 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⏳ | ⏳ | ⏳ | ⏳ |
| COMP-F-004 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⏳ | ⏳ | ⏳ | ⏳ |
| COMP-F-005 | N/A | ✅ | N/A | N/A | N/A | N/A | ⏳ | ⏳ | ⏳ | ⏳ |
| COMP-F-010 | ⚠️ | ✅ | ✅ | ✅ | ✅ | ✅ | ⏳ | ⏳ | ⏳ | ⏳ |

**Legend:** ✅ = Verified applied | ⚠️ = Initially violated, fixed | ⏳ = Pending | N/A = Not applicable

═══════════════════════════════════════════════════════════════════════════════
## HOW DD CONSUMED THESE FINDINGS
═══════════════════════════════════════════════════════════════════════════════

Stage 2 (DD) verified ALL explorations against COMP-F-001 through COMP-F-005:

| DD | Soul Compliance | COMP-F Verified |
|----|-----------------|-----------------|
| DD-001 | 100% | #1 ✅, #2 ✅, #3 ✅, #4 ✅, #5 N/A |
| DD-002 | 100% | #1 ✅, #2 ✅, #3 ✅, #4 ✅, #5 ✅ |
| DD-003 | 100% | #1 ✅, #2 ✅, #3 ✅, #4 ✅, #5 N/A |
| DD-004 | 100% | #1 ✅, #2 ✅, #3 ✅, #4 ✅, #5 N/A |
| DD-005 | 100% | #1 ✅, #2 ✅, #3 ✅, #4 ✅, #5 N/A |
| DD-006 | 100% | #1 ✅, #2 ✅, #3 ✅, #4 ✅, #5 N/A |

DD-001 initially had 2px borders (violating COMP-F-010). This was discovered in
retroactive audit and informed DD-002+ to use 4px consistently.

═══════════════════════════════════════════════════════════════════════════════
## FORWARD DEPENDENCIES
═══════════════════════════════════════════════════════════════════════════════

### OD Must Verify:
- [ ] All callouts maintain 2-zone structure (COMP-F-003)
- [ ] Wisdom content uses serif italic (COMP-F-002)
- [ ] All edges sharp (COMP-F-001)
- [ ] No shadows introduced (COMP-F-004)
- [ ] Procedural elements use squares (COMP-F-005)

### AD Must Verify:
- [ ] Axis layouts don't break soul pieces
- [ ] Geometry tokens enforced

### CD Must Verify:
- [ ] Component combinations don't violate individual soul pieces
- [ ] Family DNA maintained when combining

### Migration Must Verify:
- [ ] Every migrated page cites applicable COMP-F-### findings
- [ ] Soul pieces verified on every page

═══════════════════════════════════════════════════════════════════════════════
