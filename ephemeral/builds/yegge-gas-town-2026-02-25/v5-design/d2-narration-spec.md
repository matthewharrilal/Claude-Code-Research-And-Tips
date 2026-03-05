# D2 Builder Self-Narration Protocol
Date: 2026-02-26
Status: DESIGN SPECIFICATION
Crack dimension: D2 (Compression Loss at Junctions)
Instrument: INTENT comments in builder HTML output

---

## 1. Problem Statement

The pipeline currently captures builder OUTPUT (HTML/CSS) and builder VISION (CONVICTION comment, SELF-EVALUATION comment, EXPERIENTIAL-CHECK comment) but NOT builder per-decision INTENT. When the brief specifies X and the output omits X, we cannot distinguish:

1. **Deliberate omission** — builder chose not to implement X (creative authority)
2. **Accidental omission** — builder forgot about X (attention decay, D5)
3. **Attempted alternate implementation** — builder tried X differently and it didn't survive CSS interaction
4. **Comprehension failure** — builder misunderstood what X meant

The existing comment inventory in the Gas Town build:
- `<!-- CONVICTION STATEMENT: ... -->` (1 per page, ~15 lines) — overall artistic vision
- `<!-- SELF-EVALUATION: ... -->` (1 per page, ~50 lines) — 7-question post-build assessment
- `<!-- EXPERIENTIAL-CHECK: ... -->` (1 per page, ~5 lines) — readability self-test
- `<!-- Zone N — ... -->` (5 per page, ~3 lines each) — zone purpose headers
- `<!-- SCROLL-REVEALS: true -->` (0-1 per page) — signal declaration for screenshots

Total: ~90 lines of existing comments. All are either global (whole-page) or structural (zone markers). None capture per-decision rationale.

---

## 2. Protocol Specification

### 2.1 Comment Format

```html
<!-- INTENT [D-XX] location | decision | brief-ref | trade-off -->
```

Fields:
- **D-XX**: Disposition instruction that motivated the decision (D-01 through D-09), or `SCAFFOLD` for Phase 3 decisions, or `METAPHOR` for governing metaphor decisions
- **location**: CSS selector or zone identifier (e.g., `.zone-3 h2`, `Z2→Z3 boundary`, `footer`)
- **decision**: What was decided and why, in 1 sentence
- **brief-ref**: Which brief item motivated this (e.g., `brief T2.3 "dense infrastructure"`) or `CREATIVE` if this was 80%-authority creative choice
- **trade-off**: What was considered and rejected, OR `—` if no trade-off

### 2.2 Concrete Examples

From the Gas Town build, the builder COULD have written:

```html
<!-- INTENT [D-02] Z2→Z3 boundary | 7-channel transition (bg+type+spacing+border+color+component+weight) because this is the dramatic center | brief T3.2 "factory floor = industrial processing" | traded uniform 4-channel boundaries for asymmetric 7/6/3 weighting -->

<!-- INTENT [D-04] .zone-5 .pullquote | 28px pull-quote as scale break after dense comparison tables | brief S11 pull-quote content "Build a colony..." | traded larger 36px for 28px to avoid competing with Z3 section headers -->

<!-- INTENT [D-09] .zone-4 | quiet zone — fewer mechanisms, lighter borders, wider spacing | brief T2.5 "hands-on practice" register = REFERENCE | traded dark-continuation for warm-tan recovery to support Z3→Z4 contrast -->

<!-- INTENT [SCAFFOLD] .zone-3 body text | full opacity #FEF9F5 instead of rgba 0.9 | CREATIVE — readability over atmospheric darkness | traded atmospheric immersion for legibility after REFINE auditor flagged dark-zone fatigue -->

<!-- INTENT [METAPHOR] CSS custom properties | named by factory zones (loading-dock, dispatch-floor, factory-floor, assembly-line, shipping-bay) | brief T1.1 "Gas Town = refinery/factory" | traded generic zone-1/zone-2 naming for content-derived naming that embeds metaphor in code structure -->
```

### 2.3 Triggers (What Requires Narration)

The narration protocol uses a **per-category trigger model** — not every line of CSS, and not just per-zone. The triggers are:

| Trigger | Expected Count | Rationale |
|---------|---------------|-----------|
| **Governing metaphor selection** | 1 | How the metaphor was derived from content |
| **Each zone boundary transition** | 4 (for 5 zones) | Which channels shift and why this weight |
| **Each disposition instruction (D-01 through D-09)** | 9 | How each disposition was embodied in CSS |
| **Each major creative divergence from brief** | 2-5 | Where 80% authority overrode brief suggestion |
| **Each deliberate omission** | 1-3 | What was in the brief but consciously NOT implemented |

**Expected total: 17-22 INTENT comments per build.**

This count is calibrated:
- **Too few (<10):** Cannot distinguish deliberate from accidental. The brief-diff gate (D2 companion instrument) would flag items as "lost" when they were actually "chosen against."
- **Too many (>30):** Builder spends attention on narration instead of composition. Narration becomes a compliance burden — exactly the checklist trap we already identified.
- **Sweet spot (17-22):** ~1 INTENT comment per 50-60 CSS lines (for an 800-1200 line page). Captures the decision tree without consuming creative attention.

### 2.4 Placement Rules

INTENT comments are placed in the HTML **adjacent to the CSS or HTML element they describe**, not clustered at the top or bottom:

1. **Metaphor INTENT** → inside the `<style>` tag, before the custom property declarations
2. **Zone boundary INTENT** → immediately before the boundary HTML element (threshold div, border element)
3. **Disposition INTENT** → inside the `<style>` tag, adjacent to the CSS rule that implements it; OR in the HTML adjacent to the structural element if the disposition is embodied in HTML structure
4. **Creative divergence INTENT** → adjacent to the divergent element
5. **Deliberate omission INTENT** → at the END of the `<style>` tag, in a "NOT IMPLEMENTED" cluster

The "NOT IMPLEMENTED" cluster is the most valuable section for the brief-diff gate:

```html
<!-- INTENT [NOT-IMPL] hover states for .bento-cell | brief Step 2.7 specifies 4 hover categories | CHOSE not to implement — Z3 dark zone makes hover color shifts imperceptible against near-black; would add 40 CSS lines for zero perceptual return | would reconsider if Z3 bg lightens above #333 -->

<!-- INTENT [NOT-IMPL] tabular-nums for comparison tables | brief D-07 specifies tabular-nums | CHOSE not to implement — comparison tables use text comparisons not numeric data; font-variant-numeric adds no value here -->
```

### 2.5 Audience

| Consumer | Sees INTENT Comments? | Purpose |
|----------|----------------------|---------|
| **Brief-diff gate** | YES — primary consumer | Distinguishes deliberate omission from accidental loss. Items in NOT-IMPL cluster are scored "deliberate" not "lost" |
| **REFINE builder** | YES — reads entire HTML | REFINE builder sees the initial builder's rationale and can build on it or challenge it |
| **PA auditors** | NO — screenshots only | Fresh-eyes principle is NON-NEGOTIABLE. PA auditors see rendered pixels, never source. INTENT comments are invisible in screenshots |
| **Weaver** | NO — reads PA reports only | Weaver synthesizes auditor reports, not source code |
| **Observer agent** (D10) | YES — if implemented | Observer reads source to understand builder behavior patterns |
| **Human reviewer** | YES — reads source | Post-hoc analysis of builder decision quality |

**Critical: INTENT comments MUST NOT appear in rendered page content.** HTML comments are invisible to rendered output. This is structurally guaranteed — no CSS or JS can make `<!-- ... -->` visible to a screenshot.

---

## 3. Exact Recipe Text Addition

### 3.1 Placement

Add as **Step 3.4d** in Phase 3 (DEPLOY SCAFFOLDING), immediately after Step 3.4c (builder signal declarations). This placement:
- Comes AFTER the builder has committed structural decisions (zones, backgrounds, components)
- Comes BEFORE Phase 4 (dispositions) — so the builder knows to narrate disposition decisions as they make them
- Is adjacent to the existing signal declaration step (3.4c), grouping all "builder output metadata" together

### 3.2 Exact Text (32 lines)

```markdown
### Step 3.4d: Narrate your design decisions (INTENT comments)

As you build, embed `<!-- INTENT ... -->` HTML comments that explain WHY you made key CSS decisions. These comments are invisible in the rendered page but are read by the brief-diff gate to distinguish deliberate creative choices from accidental omissions.

**Format:**
```html
<!-- INTENT [D-XX] selector-or-location | what you decided and why | which brief item motivated it OR "CREATIVE" | what you traded off OR "—" -->
```

**Required INTENT comments (17-22 total):**
1. **Governing metaphor** (1): How you derived the metaphor from content
2. **Zone boundaries** (1 per boundary): Which channels shift and why this weight
3. **Each D-01 through D-09** (1 per disposition): How you embodied each disposition in CSS
4. **Creative divergences** (2-5): Where you used 80% authority to override or reinterpret the brief
5. **Deliberate omissions** (1-3): Brief items you consciously chose NOT to implement

**Place each INTENT comment adjacent to the CSS or HTML it describes.** Do not cluster them at the top of the file.

**For deliberate omissions, cluster at the END of `<style>`:**
```html
<!-- INTENT [NOT-IMPL] what | brief reference | why you chose against it | under what conditions you would reconsider -->
```

**Self-test:** Before finishing, count your INTENT comments. If you have fewer than 15, you have under-narrated (major decisions are unrecorded). If you have more than 25, you have over-narrated (narration is consuming creative attention).
```

### 3.3 Additional: REFINE Builder Instruction (4 lines)

Add to any REFINE-specific instructions (currently in Phase 5, or in the future two-pass architecture):

```markdown
**REFINE narration:** Read the existing INTENT comments before making changes. When you modify a decision, UPDATE the INTENT comment (do not delete the original — append your reasoning):
```html
<!-- INTENT [D-02] Z3 body text | [PASS-1] rgba(254,249,245,0.9) for atmospheric depth | [REFINE] changed to #FEF9F5 full opacity — PA auditor flagged dark-zone fatigue, legibility > atmosphere -->
```
```

---

## 4. Gate Code (Brief-Diff Gate Integration)

The brief-diff gate (D2 companion instrument, designed separately) consumes INTENT comments as follows:

### 4.1 INTENT Comment Parser

```javascript
// Extract INTENT comments from HTML output
function parseIntentComments(html) {
  const intentPattern = /<!--\s*INTENT\s+\[([^\]]+)\]\s+([^|]+)\|([^|]+)\|([^|]+)\|([^>]+)-->/g;
  const notImplPattern = /<!--\s*INTENT\s+\[NOT-IMPL\]\s+([^|]+)\|([^|]+)\|([^|]+)\|([^>]+)-->/g;

  const intents = [];
  let match;

  while ((match = intentPattern.exec(html)) !== null) {
    intents.push({
      disposition: match[1].trim(),
      location: match[2].trim(),
      decision: match[3].trim(),
      briefRef: match[4].trim(),
      tradeOff: match[5].trim(),
      type: 'implemented'
    });
  }

  while ((match = notImplPattern.exec(html)) !== null) {
    intents.push({
      disposition: 'NOT-IMPL',
      what: match[1].trim(),
      briefRef: match[2].trim(),
      reason: match[3].trim(),
      reconsiderCondition: match[4].trim(),
      type: 'deliberate-omission'
    });
  }

  return intents;
}
```

### 4.2 INTENT Count Verification Gate

```javascript
// GR-NEW: INTENT comment count verification
// Category: REQ (required)
// Rationale: Without narration, brief-diff gate cannot distinguish
//            deliberate omission from accidental loss

function verifyIntentComments(html) {
  const intents = parseIntentComments(html);
  const count = intents.length;

  const result = {
    gate: 'GR-XX-INTENT-COUNT',
    category: 'REQ',
    pass: count >= 15,
    count: count,
    message: null
  };

  if (count < 10) {
    result.message = `FAIL: Only ${count} INTENT comments (minimum 15). Major decisions are unrecorded — brief-diff gate cannot function.`;
  } else if (count < 15) {
    result.message = `WARN: ${count} INTENT comments (target 17-22). Some decisions may be unrecorded.`;
  } else if (count > 30) {
    result.message = `WARN: ${count} INTENT comments (target 17-22). Over-narration may have consumed creative attention.`;
  } else {
    result.message = `PASS: ${count} INTENT comments (target 17-22).`;
  }

  // Check for required categories
  const hasMetaphor = intents.some(i => i.disposition === 'METAPHOR');
  const hasNotImpl = intents.some(i => i.type === 'deliberate-omission');
  const dispositions = new Set(intents.filter(i => i.disposition.match(/^D-0[1-9]$/)).map(i => i.disposition));

  result.details = {
    hasMetaphor,
    hasNotImpl,
    dispositionsCovered: [...dispositions].sort(),
    dispositionsMissing: ['D-01','D-02','D-03','D-04','D-05','D-06','D-07','D-08','D-09']
      .filter(d => !dispositions.has(d)),
    deliberateOmissions: intents.filter(i => i.type === 'deliberate-omission').length
  };

  // Fail if zero D-XX dispositions narrated (builder skipped the protocol entirely)
  if (dispositions.size === 0) {
    result.pass = false;
    result.message = `FAIL: Zero disposition INTENT comments. Builder did not narrate any D-01 through D-09 decisions.`;
  }

  return result;
}
```

### 4.3 Brief-Diff Gate Interaction

When the brief-diff gate compares brief items against output:

1. **Brief specifies X, output contains X** → IMPLEMENTED (no INTENT needed, but nice to have)
2. **Brief specifies X, output omits X, INTENT [NOT-IMPL] covers X** → DELIBERATE OMISSION (scored separately, not counted as "lost")
3. **Brief specifies X, output omits X, no INTENT covers X** → ACCIDENTAL LOSS (the crack, D2 proper)
4. **Output contains Y, brief does not specify Y, INTENT [CREATIVE] covers Y** → CREATIVE ADDITION (80% authority exercised)
5. **Output contains Y, brief does not specify Y, no INTENT** → UNKNOWN ADDITION (may be creative, may be hallucinated)

Category 3 is the PRIMARY target of the D2 instrument. Without narration, categories 2 and 3 are indistinguishable.

---

## 5. PA Interaction Specification

### 5.1 PA Auditors Do NOT See INTENT Comments

This is structurally guaranteed:
- PA auditors receive **screenshots** (rendered pixels), not source code
- HTML comments (`<!-- ... -->`) are invisible in rendered output
- The fresh-eyes principle (pa-deployment.md Section 3) is preserved

### 5.2 No Protocol Changes to PA Deployment

Zero changes needed in `pa-deployment.md`. The narration protocol operates entirely within the builder's output and the brief-diff gate's analysis. It never touches the PA pipeline.

### 5.3 Weaver Interaction (Optional, Future)

In a future iteration, the Weaver's diagnostic report (p3c-weaver-diagnostic.md) could include a section comparing PA findings against INTENT comments to identify where the builder's stated intent diverged from perceptual reality. For example:

- Builder INTENT: "28px pull-quote for scale break and surprise"
- PA finding (Auditor D): "No scroll surprise detected in Z5"
- Diagnostic: Intent-perception gap at Z5 pull-quote — builder intended surprise but auditor did not perceive it

This is DEFERRED — it would require giving the Weaver access to source code, which currently does not happen.

---

## 6. REFINE Interaction

### 6.1 REFINE Builder Reads Existing INTENT Comments

The REFINE builder receives the full HTML output from Pass 1. INTENT comments are part of that HTML. The REFINE builder:

1. **Reads** all INTENT comments to understand Pass 1 rationale
2. **Updates** INTENT comments when modifying a decision (appending, not replacing)
3. **Adds new** INTENT comments for REFINE-specific decisions (e.g., `[REFINE] raised Z3 opacity for legibility`)

### 6.2 REFINE INTENT Format

```html
<!-- INTENT [D-02] Z3 body text | [PASS-1] rgba(0.9) for atmospheric depth | [REFINE] #FEF9F5 full opacity — PA flagged dark-zone fatigue | legibility > atmosphere -->
```

The `[PASS-1]` / `[REFINE]` tags create an audit trail. The brief-diff gate can trace decision evolution across passes.

### 6.3 REFINE Count Expectation

REFINE typically modifies 5-15 decisions. Expected REFINE INTENT additions: 5-15 updates/additions on top of the original 17-22, for a total of 22-37 in the final HTML. The upper bound (30) from the verification gate is relaxed for post-REFINE pages.

---

## 7. Risk Analysis

### 7.1 Risk: Shallow Narration (D3 — Voluntary Non-Execution)

**Threat:** Builder produces pro-forma INTENT comments: `<!-- INTENT [D-03] typography | implemented authority | brief T2 | — -->`. This passes the count gate but provides zero diagnostic value.

**Mitigation:** The INTENT count gate is NECESSARY but NOT SUFFICIENT. The brief-diff gate is the quality check — it compares INTENT claims against actual CSS. If INTENT says "7-channel boundary" but CSS shows 2 channels, the brief-diff gate flags the inconsistency. Shallow narration is better detected by its CONTENT (does the stated decision match the code?) than by its presence.

**Residual risk: MEDIUM.** Shallow narration still helps — even "CREATIVE" as a brief-ref tells us the omission was deliberate. The floor of usefulness is high.

### 7.2 Risk: Narration Consuming Creative Attention (D5 — Position/Attention Decay)

**Threat:** Builder spends 10-15 minutes on narration that could have been spent on composition. The 800-1200 CSS line target suffers.

**Mitigation:**
1. The recipe instruction says "As you build" — narration happens DURING building, not as a separate phase
2. The 17-22 count target is ~1 comment per 50 CSS lines — 30 seconds per comment, ~10 minutes total
3. The self-test ("fewer than 15 = under-narrated, more than 25 = over-narrated") provides calibration feedback
4. Narration may actually IMPROVE composition quality by forcing the builder to articulate WHY — the act of explanation recruits reflective processing

**Residual risk: LOW.** The Gas Town builder already spends ~15 minutes on CONVICTION + SELF-EVALUATION + EXPERIENTIAL-CHECK (~90 lines of comments). Adding ~20 distributed comments is marginal.

### 7.3 Risk: PA Contamination

**Threat:** Someone accidentally gives PA auditors the HTML source instead of screenshots.

**Mitigation:** This is an existing risk independent of INTENT comments. The screenshot pre-capture pattern (pa-deployment.md Section 2) structurally prevents it — auditors receive file paths to PNG images, not HTML files.

**Residual risk: NONE** (already defended).

### 7.4 Risk: INTENT Comments Become Normative

**Threat:** Future recipe versions start prescribing WHAT the builder should decide (not just that they should narrate). "Your D-02 INTENT must show >= 4 channels" — turning narration into a backdoor checklist.

**Mitigation:** The recipe text explicitly frames INTENT as a RECORD of decisions, not a REQUIREMENT for specific decisions. The self-test is about COUNT, not CONTENT. Adding content requirements would need a council-verdict-level review.

**Residual risk: LOW** but requires vigilance during recipe maintenance.

### 7.5 Risk: Format Drift

**Threat:** Builder uses inconsistent format (missing fields, wrong delimiters, prose instead of structured comment). The parser fails silently.

**Mitigation:** The gate parser uses a regex with fallback — if the structured format is not matched, the gate reports "WARN: X INTENT comments detected but Y could not be parsed." The format is simple enough (4 pipe-delimited fields) that LLM builders will follow it with high compliance. Binary format rules achieve ~100% compliance (per MEMORY.md core finding).

**Residual risk: LOW.**

---

## 8. Cost-Benefit Summary

| Metric | Without Narration | With Narration |
|--------|------------------|----------------|
| Brief-diff false positives | HIGH — every omission scores as "lost" | LOW — deliberate omissions identified |
| Builder time overhead | 0 min | ~10 min (distributed) |
| REFINE context quality | Conviction only (global) | Conviction + per-decision rationale |
| D2 crack visibility | Can detect WHAT was lost | Can detect WHY it was lost |
| PA contamination risk | None | None (HTML comments invisible in screenshots) |
| Post-hoc analysis | Must infer intent from CSS | Intent explicitly recorded |
| Gate complexity | N/A | +1 gate (count verification, ~40 lines) |
| Recipe line addition | 0 | 32 lines (Step 3.4d) + 4 lines (REFINE instruction) |

**Verdict:** 36 recipe lines and ~10 minutes builder time buys the brief-diff gate its most important signal: the difference between "the builder forgot" and "the builder chose."

---

## 9. Implementation Checklist

- [ ] Add Step 3.4d to `artifact-builder-recipe.md` (32 lines, after Step 3.4c)
- [ ] Add REFINE narration instruction to REFINE-specific recipe section (4 lines)
- [ ] Add GR-XX-INTENT-COUNT gate to gate-runner (REQ category)
- [ ] Add `parseIntentComments()` function to gate-runner utilities
- [ ] Update brief-diff gate to consume INTENT comments (categories 2-5 in Section 4.3)
- [ ] Update MANIFEST.md gate count (currently 47 → 48)
- [ ] NO changes to pa-deployment.md
- [ ] NO changes to pa-questions.md
- [ ] NO changes to pa-guardrails.md
- [ ] Smoke test: manually write 17-22 INTENT comments for the existing Gas Town build to validate format and parser

---

*End of D2 narration protocol specification.*
