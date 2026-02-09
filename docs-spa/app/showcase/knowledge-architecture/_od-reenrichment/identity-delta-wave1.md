<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/identity-delta-wave1.md
BUILT ON: research-package-od-001.md (discoveries), research-package-od-002.md (discoveries), verification-wave1.md
CONSUMED BY: researcher-2a, researcher-2b, builder-2a, builder-2b, identity-delta-wave2, ACCUMULATED-IDENTITY v1.1
END INLINE THREADING HEADER
-->

# Identity Delta — Wave 1 (OD-001 + OD-002)

## What Surprised

1. **Semi-transparent offsets are more pervasive than documented.** Builder-1a found a THIRD instance (essence-pullquote::after at opacity 0.3) not flagged in the research package or known issues. Any opacity < 1.0 on offset pseudo-elements creates the same visual effect as box-shadow. **Rule refinement:** All solid offset pseudo-elements MUST be fully opaque (opacity: 1) — no exceptions. Wave 2/3 builders must audit for this.

2. **Convention spec type scale preserves OD-001 values, not the other way around.** The research package incorrectly listed 26px→24px as a needed fix. In reality, the convention spec was built FROM OD-001's type scale. Only --type-meta (10px→12px) actually needed changing. The type scale is OD-001's legacy, formalized.

3. **Zone token naming IS OD-F-005 in action.** Renaming `--color-question-bg` to `--color-zone-sparse` is not cosmetic — it proves organization IS density at the token level. Questions ARE sparse zones. The naming reveals the identity.

4. **Progressive disclosure labels transform passive readers into active participants.** Builder-1b's discovery that "Disclosure Level" labels make the hermeneutic code VISIBLE resolves the tension between editorial authority and strategic withholding. The editor is not being cagey — they're being pedagogically transparent.

## Identity Refinements

- **Solid offsets:** The spirit rule now has a QUANTITATIVE gate: opacity === 1 on all offset pseudo-elements. Float illusion vs flat graphic is no longer a judgment call — it's a binary opacity check.
- **Token naming as identity proof:** Convention tokens should use density function names (sparse/dense/breathing), not organizational container names (question/answer/chapter). This is a second-order effect of OD-F-005.
- **Freytag falling action as cognitive decompression:** OD-002's expansion from 3 acts to 5 beats validated that CRESCENDO needs a formal exhale. Without falling action, dense climaxes exit abruptly. Wave 2/3 ODs with CRESCENDO elements should check for this.

## SOUL FAIL Summary (from researchers)
- Researcher-1a: 3 SOUL FAILs. Pattern: depth illusions (overlapping elements, card animations) and off-scale typography. The soul consistently rejects visual techniques that create perceived depth or movement.
- Researcher-1b: 3 SOUL FAILs. Pattern: visual decoration (rounded progress bars, gradient transitions, blur animations). Same theme — the soul rejects ornamentation that suggests physicality.
- **Combined pattern:** 6/6 SOUL FAILs are depth/motion/ornamentation techniques. The identity is ANTI-PHYSICAL — it rejects anything that makes flat screens pretend to be three-dimensional spaces.

## New Questions for Wave 2 (OD-003 + OD-005)

1. **OD-003 has 471 thin borders (vs OD-001's 20).** The 3-category border system eliminated OD-001's thin borders easily because OD-001 only had 20. Can the same system handle OD-003's 471 without destroying the task island visual structure? Specifically: do task island borders serve Cat 1 (structural) or Cat 2 (separator) functions?

2. **OD-005's territory-tile hover transform is a spirit violation (fake lift).** But OD-001's 5% question margin (EXT-CONV-010) creates a surprisingly strong TIDAL signal through simple CSS offset. Can OD-005 replace the hover-lift with a similar static offset technique that signals spatial hierarchy WITHOUT animation?

3. **The ANTI-PHYSICAL identity pattern (from SOUL FAIL analysis) — does it extend to OD-003/005?** OD-003's task islands and OD-005's spatial hub-spoke both use metaphors suggesting physical space. Do they achieve spatial organization through layout alone (soul-compatible) or through depth/shadow/animation cues (soul-incompatible)?
