# RF-02 Audit: Structural Flatness Source vs Pipeline Files

**Source:** `ephemeral/invention-gap-analysis/02-pipeline-structural-flatness.md` (488 lines)
**Question:** Does the modified pipeline enable multiple skeletons, and do E-21/22/23 detect DOM structure vs CSS variety?

## Gaps Found

### GAP 1: E-21/22/23 detect perceptual layout variety but cannot distinguish DOM skeleton reuse from CSS variation — CRITICAL
The PA auditor prompt (pa-auditor-prompt.md, lines 51-61) defines E-21/22/23 in purely perceptual terms: "wider, split into columns, arranged as a grid." Auditors are explicitly forbidden from viewing code ("You may only describe what is VISIBLE in the screenshots"). The source file proves that CSS texture (9 zone backgrounds, varying font sizes, border weights) creates the APPEARANCE of structural variety while the DOM is 1 skeleton worn N ways (Section Block = 77-86% of both builds). Perceptual-only auditors will report "sections feel different" when the underlying HTML is identical. No auditor instruction asks "does this section use a fundamentally different spatial arrangement than the previous one, or just different colors/sizes?" The current questions detect CSS variety, not DOM variety.

### GAP 2: Weaver Structural Variety Metrics examine HTML but lack a skeleton-reuse diagnostic — MAJOR
The weaver prompt (weaver-prompt.md, lines 129-143) includes "Distinct layout types used," "Sections with non-standard layout," and "Content-form coupling instances." These are good metrics but they count TYPES, not DOMINANCE. The source file's core finding is that both builds had 2 distinct skeleton types but one dominated at 77-86%. A build scoring "2 distinct layout types" sounds varied; the reality is 1 grid moment in 13+ sections. The weaver needs a dominance ratio: if >70% of sections use the same skeleton, flag STRUCTURALLY UNIFORM regardless of type count.

### GAP 3: Builder Pass 1 Structural Path caps structural invention at 2 sections per build — MAJOR
Builder-pass-1-prompt.md (lines 207, 409) explicitly limits structural sections: "maximum 2 structural sections per build." The source file shows both builds achieved exactly 1 structural invention each — well under the cap — suggesting the cap is not the bottleneck. The real constraint is the DEFAULT path instruction (line 204-205): "Standard Path (DEFAULT) — vertical stacking with density variation." Builders default to vertical unless a Section 11 proposition exists AND they choose to adopt it. The pipeline does not require ANY structural invention; it permits at most 2. Multi-skeleton builds need a minimum, not just a maximum.

### GAP 4: No pipeline mechanism distinguishes metaphor-as-decoration from metaphor-as-architecture — MAJOR
The source file's deepest finding (lines 445-470): metaphor generates CSS texture (zone backgrounds, font registers) but never generates HTML structure (hub-spoke, nested layouts, radial). The builder prompt instructs "concept-based naming" for CSS properties (lines 143-161) and "zone skeleton mapped from the brief's compositional arc" (line 38), but both instructions operate on a pre-assumed vertical skeleton. No prompt asks the builder: "Does your metaphor imply a non-vertical spatial organization? If so, what DOM structure would embody it?" Section 11 propositions are the closest mechanism, but they come from the research package, not from the builder's metaphor internalization.

## Impact Summary
| Gap | Severity | Effect |
|-----|----------|--------|
| 1 | CRITICAL | PA cycle cannot detect the core structural flatness problem — auditors see CSS variety and report variety |
| 2 | MAJOR | Weaver may score "2 layout types" as diverse when skeleton reuse is 86% |
| 3 | MAJOR | Builder defaults guarantee single-skeleton output unless Section 11 propositions exist |
| 4 | MAJOR | Metaphor-to-structure translation has no pipeline mechanism — metaphor stays in CSS texture |
