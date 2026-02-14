# Identity Layer — Soul Constraints & Prohibitions

**What this directory contains:** The immutable constraints that define KortAI visual identity.

**Layer:** 1 (foundation — all other layers derive from or support these)

---

## Contents

**1. `prohibitions.md` (18 prohibitions)**
- 8 absolute prohibitions (NEVER violate)
- 10 conditional prohibitions (context-dependent exceptions)
- Binary rules: "DO NOT [action]. Rationale: [why this violates soul]"

**2. `soul-constraints.md` (3 core constraints)**
- `border-radius: 0` — ALWAYS sharp edges, never rounded
- `box-shadow: none` — ALWAYS flat surfaces, never shadows
- `--color-primary: #E83025` — Sanrok red, editorial confidence

---

## What They Protect

**Soul constraints protect RECOGNITION:**
- Sharp corners + flat surfaces + primary red = instant KortAI recognition
- These constraints are NON-NEGOTIABLE (even if 99% of files violate, 1% compliance = FAIL)

**Prohibitions protect PREVENTION:**
- Agents default to rounded corners + shadows (training distribution bias)
- Explicit prohibition prevents soul violations
- "Prevention over cure" — easier to prohibit than to fix violations

---

## How to Use This Directory

### Before Building ANY Layout

**Step 1: Read `prohibitions.md` FIRST**
- Scan the 8 absolute prohibitions
- Check if your planned design violates any
- If violation found: redesign BEFORE building

**Step 2: Verify `soul-constraints.md` compliance**
- All containers: `border-radius: 0`
- All containers: `box-shadow: none`
- Primary accents: `#E83025`

**Step 3: Build with constraints locked in mind**
- Don't fight the constraints
- Design WITHIN sharp edges + flat surfaces
- Use border-weight (4px/3px/1px) for depth, NOT shadows

### During Code Review

**Soul compliance checklist:**
```bash
# Scan for violations
grep "border-radius" *.css  # Should return ONLY "border-radius: 0"
grep "box-shadow" *.css     # Should return ONLY "box-shadow: none"
grep "drop-shadow" *.css    # Should return ZERO results
grep "linear-gradient" *.css # Should return ZERO results (no gradient backgrounds)
```

**If violations found:**
1. Remove violation immediately
2. Redesign using allowed techniques (border-weight, zone differentiation, spacing compression)
3. Add prohibition to `prohibitions.md` if new violation type

---

## What NOT to Do

❌ **DO NOT treat constraints as suggestions**
- "Just this once" → soul drift
- "But it looks better" → subjective, violates identity
- "Nobody will notice" → recognition is cumulative

❌ **DO NOT add exceptions without documentation**
- If context requires exception (e.g., 2px for geological confidence), document in `prohibitions.md`
- Mark as CONDITIONAL prohibition with rationale

❌ **DO NOT rationalize violations**
- "Rounded corners are more friendly" → violates soul (sharp = authority)
- "Shadows add depth" → violates soul (flat = editorial clarity)
- "Primary red is too harsh" → violates soul (red = confidence signal)

---

## Relationship to Other Layers

**Layer 2 (Vocabulary):**
- Tokens implement soul constraints: `--border-radius: 0;` (IMMUTABLE)
- Color palette includes primary red: `--color-primary: #E83025;` (IMMUTABLE — identity)

**Layer 3 (Grammar):**
- Border system uses 4px/3px/1px (NOT 2px — epidemic prohibition)
- Mechanisms assume sharp edges (no rounded-corner mechanisms)

**Layer 4 (Components):**
- All 34 components inherit soul constraints
- Component inventory: 100% soul compliance (0 violations)

**Layer 5 (Case Studies):**
- Metaphors work WITHIN constraints (not against them)
- Geological strata uses sharp boundaries (flat layers, not rounded hills)

---

## Why This Layer Exists

**Identity is defined by REFUSALS as much as AFFORDANCES.**

KortAI is recognizable because it REFUSES:
- Rounded corners (while others embrace them)
- Drop shadows (while others rely on depth)
- Decorative complexity (while others add flourishes)

**Without this layer:** Soul drift. Gradual erosion. "Just this once" accumulates into unrecognizable output.

**With this layer:** Soul lock. Every build reinforces identity. Recognition at first glance.

---

## File Metadata

**Identity layer files:** 2
**Total prohibitions:** 18 (8 absolute + 10 conditional)
**Soul constraints:** 3
**Extraction lens:** Identity (100% weight)
**Validation:** 100% soul compliance across 34 components
**Next review:** After Phase D-V builds (check for new violation types)

---

**READ THIS FIRST. BUILD WITH CONSTRAINTS LOCKED IN.**
