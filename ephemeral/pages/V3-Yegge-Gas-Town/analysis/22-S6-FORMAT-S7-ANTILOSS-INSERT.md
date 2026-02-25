## SECTION 6: GLOBAL FORMATTING RULES

---

### 6.1 Recipe vs Checklist Verbs

#### Allowed Verbs (Recipe)

These are the ONLY verbs permitted in builder-facing content (artifact-builder-recipe.md, TC brief, builder prompt):

```
Build | Create | Derive | Map | Read | Select | Deploy | Assess
```

#### Prohibited Verbs (Checklist)

These verbs MUST NOT appear in builder-facing content. BV-03 (gate-runner-core.js L93-102) programmatically scans for them:

```
Verify | Fail if | Must be | Ensure | Check that
```

#### BV-03 Enforcement (ISG-RCP-09)

- **Mechanism:** BV-03 counts recipe verbs vs checklist verbs in the Brief Assembler output
- **Threshold:** >= 3:1 recipe-to-checklist verb ratio (Infinity handling when checklist count = 0)
- **Location:** gate-runner-core.js L93-102
- **Recipe verb regex:** `Build|Create|Derive|Map|Read|Select|Deploy|Assess` (L94)
- **Checklist verb regex:** `Verify|Fail if|Must be|Ensure|Check that` (L95)

#### ISG-RCP Rules (Complete List)

| Rule | Description | Tier |
|------|-------------|------|
| ISG-RCP-01 | Sequenced steps with Read/Select/Deploy/Assess verbs | MUST |
| ISG-RCP-02 | Each instruction has a concrete CSS example or value reference | MUST |
| ISG-RCP-03 | No checklist verbs: Verify, Fail if, Must be, Ensure, Check that | MUST |
| ISG-RCP-04 | Step format: `### Step N.M: [Action Verb] [What]` then Read/Select/Deploy/Assess blocks | SHOULD |
| ISG-RCP-05 | Anti-pattern: Prose paragraphs without action verbs ("The builder should consider...") | MUST |
| ISG-RCP-06 | Anti-pattern: Gate-format language ("Verify that all backgrounds differ by >= 15 RGB") | MUST |
| ISG-RCP-07 | Anti-pattern: Prohibition framing ("Do NOT use cold colors") -- use world-description instead ("Your palette is warm: R >= G >= B") | MUST |
| ISG-RCP-08 | Anti-pattern: Naked thresholds without calibration ranges ("delta >= 15" without "15 = floor, 25 = confident, 50 = dramatic") | MUST |
| ISG-RCP-09 | BV-03 enforcement: Brief Assembler output checked for 3:1 recipe-to-checklist verb ratio | MUST |

#### Anti-Pattern Examples

| BAD (Checklist) | GOOD (Recipe) |
|------------------|---------------|
| "Verify that text is readable at arm's length" | "Assess whether text is readable at arm's length" |
| "Ensure the font stack matches exactly" | "Deploy the font stack as shown" |
| "Must be at least 16px font size" | "Select body font-size starting at 16px" |
| "Fail if backgrounds differ by < 15 RGB" | "Read the value tables and select backgrounds with deltas of 15+ RGB (15 = floor, 25 = confident, 50 = dramatic)" |
| "Check that no cold colors are used" | "Build your palette from warm tones: R >= G >= B" |
| "Do NOT use pure black" | "Your text color is soft dark: deploy #1A1A1A" |

---

### 6.2 Anti-Skimming Formatting

#### BV-04 Suppressor Scan (M-06)

BV-04 programmatically scans brief-facing content for 4 suppressor regex patterns (gate-runner-core.js L104-117):

| Pattern | Regex | Catches |
|---------|-------|---------|
| S-01 | `sample\s+\d+-\d+` | "sample 2-4 mechanisms" language that limits vocabulary |
| S-02 | `must\s+not\|shall\s+not\|never\s+use` | Prohibition framing that makes builder cautious |
| S-03 | `verify\s+that\|fail\s+if\|must\s+be` | Gate-format language in builder content |
| S-04 | `>=?\s*\d+\s+channels?` | Channel count thresholds in builder content |

**Rule:** If BV-04 triggers, fix the CONTENT, never weaken the gate.

#### BV-01 Tier Budget Enforcement (M-05)

BV-01 (gate-runner-core.js L29-67) enforces minimum line counts per brief tier:

| Tier | Regex | Minimum Lines (80% threshold) |
|------|-------|-------------------------------|
| Tier 1 | `/^#+\s*Tier\s*1/im` | >= 12 |
| Tier 2 | `/^#+\s*Tier\s*2/im` | >= 6 |
| Tier 3 | `/^#+\s*Tier\s*3/im` | >= 40 |
| Tier 4 | `/^#+\s*Tier\s*4/im` | >= 32 |
| Content Map | `/^#+\s*Content\s*Map/im` | >= 24 |

**Risk:** If tier header format changes, regexes fail silently = false PASS on under-specified briefs.

#### Visual Break Patterns

- Never more than 3-4 paragraphs without a visual break in prose content
- Section headers in builder-facing content should be action-oriented (`### Step N.M: [Verb] [What]`)
- Every Tier 4 disposition in TC brief MUST have at least 1 concrete CSS property:value pair (ISG-TCB-04)

#### Adversarial Addition: Content Format Type Distribution

Every new block of content added to ANY artifact must be classifiable as one of the 4 format types (see 6.7). Blocks that cannot be classified are ambiguous and should be rewritten. Common violation: "builder should consider" prose masquerading as recipe steps.

---

### 6.3 Information Isolation

#### M-04: Context Isolation Rules

M-04 is the MOST at-risk mechanism during implementation. Fragility: **CRITICAL**.

**Locations:** MANIFEST.md L859-868 (exclusion table), L301-304 (PA isolation), pa-deployment.md L92, L201-221 (fresh-eyes), pa-guardrails.md L119-137, pa-questions.md L312-316 (Section 4 WEAVER USE ONLY), artifact-orchestrator.md L131-143 (builder isolation)

#### What CANNOT Leak Between Roles

| FROM | TO Builder | TO PA Auditors | TO Weaver |
|------|-----------|----------------|-----------|
| Gate thresholds (PASS/FAIL format) | BLOCKED | N/A | Allowed |
| Calibration ranges (15=floor, 50=dramatic) | Allowed | BLOCKED | Allowed |
| PA-05 expected scores | BLOCKED | BLOCKED | Allowed (Section 4) |
| Mechanism counts / tier definitions | BLOCKED | BLOCKED | Allowed (Section 4) |
| Build plan details | N/A | BLOCKED | N/A |
| Pipeline failure history | BLOCKED | BLOCKED | BLOCKED |
| Prior experiment results | BLOCKED | BLOCKED | BLOCKED |
| Verdict logic | BLOCKED | BLOCKED | Allowed |
| Screenshot validation results | N/A | BLOCKED | Allowed |
| AP anti-pattern mappings | BLOCKED | BLOCKED | Allowed |

#### Dual-Channel Boundaries (M-02)

- **Channel 1 (Lossless Universal):** Identity constraints, soul constraints -- delivered verbatim through MANIFEST routing
- **Channel 2 (Regenerated Content):** TC brief -- compressed through Brief Assembler with BV verification
- Builder sees calibration (15=floor, 25=confident, 50=dramatic), NOT thresholds (>=15 PASS, <15 FAIL)
- Gate runner sees thresholds, NOT calibration

#### Fresh-Eyes Protection (M-20)

**Location:** pa-deployment.md L201-221

- Auditor receives ONLY: screenshots + PA questions + nothing else
- pa-questions.md Sections 1-3 are auditor-facing: ZERO calibration data, ZERO mechanism counts, ZERO tier definitions
- pa-questions.md Section 4 is WEAVER USE ONLY -- contains calibration, scoring criteria, anti-pattern mappings
- Adding calibration data to Sections 1-3 is **Red Line 6** (ISG-RL-06)

#### Per-Change Isolation Checks

| Change | Isolation Risk | What to Verify |
|--------|---------------|----------------|
| ME-001 | HIGH -- adds content to pa-deployment.md that auditors read | Experiential pass instructions contain NO tier definitions, NO PA-05 scores, NO mechanism counts |
| ME-004 + ME-039 | HIGH -- adds content to builder-facing recipe | No gate thresholds in PASS/FAIL format; world-description framing only |
| ME-006 | MEDIUM -- screenshot validation results | Validation stays in orchestrator files, NOT auditor files |
| ME-037+ME-051 | HIGH -- modifies auditor-facing pa-questions.md | New questions contain ZERO calibration data; use perceptual language |

#### Adversarial Addition: Isolation Violation Quick-Scan

After ANY edit to a builder-facing or auditor-facing file, perform this 30-second scan:
1. Search new text for these forbidden terms in builder content: `PASS`, `FAIL`, `threshold`, `gate`, `GR-`, `tier definition`, `PA-05`
2. Search new text for these forbidden terms in auditor content: `calibration`, `mechanism count`, `tier`, `floor/confident/dramatic`, `build plan`, `M-0`, `M-1`, `M-2`
3. If ANY match found: rewrite the content before proceeding.

---

### 6.4 Conviction Language

#### World-Description Framing (M-12)

**Principle:** Tell the builder what the WORLD IS, not what they MUST NOT DO.

**Location:** MANIFEST.md L188-190, L198, L863-864, L879; artifact-builder-recipe.md L13; artifact-orchestrator.md L131-143; gate-runner-core.js L107 (BV-04 S-02 pattern)

| BAD (Prohibition) | GOOD (World-Description) |
|--------------------|--------------------------|
| "Do NOT use cold colors" | "Your palette IS warm: R >= G >= B" |
| "Never use pure black" | "Your text color is soft dark: #1A1A1A" |
| "Must not exceed 960px container" | "Your container lives at 960px" |
| "Fail if backgrounds differ by < 15 RGB" | "Backgrounds speak in deltas of 15+ RGB points (15 = floor, 25 = confident, 50 = dramatic)" |
| "Must be at least 12 mechanisms" | "Your composition uses 12+ mechanisms from the catalog" |

#### Binary Rule Format (M-13)

- All rules output PASS or FAIL -- no partial scores, no "PASS*", no "PARTIAL"
- ISG-GR-05: Anti-pattern -- returning anything other than 'PASS' or 'FAIL' for status
- Gate result schema: `{ gate: 'GR-XX', name: '...', status: 'PASS'|'FAIL', measured: {...}, threshold: {...} }`
- Binary rules achieve 100% agent compliance; judgment rules achieve ~0%

#### Auditor Question Language

- Perceptual verbs: "Does...?" "Is there...?" "Can you...?"
- NOT measurement verbs: "Verify that..." "Is count >= N?"
- Evidence format: YES/NO/CONDITIONAL + screenshot reference + description
- No judgment scales ("Rate 1-5") -- binary only (ISG-PA-04)

#### Weaver Verdict Language

- Weaver CAN use judgment verbs (weaver IS the judgment agent)
- But binary overrides should be binary: "If text illegibility reported -> REFINE regardless of other scores"
- Verdict logic uses prioritized decision tree format, not subjective language

#### Adversarial Addition: Conviction Language Self-Test

For every new sentence in builder-facing or auditor-facing content, apply this test:
- **Builder content:** "Could this sentence be rewritten as a world-description?" If yes and it isn't already, rewrite it.
- **Auditor content:** "Does this sentence ask what the auditor SEES, or does it ask them to MEASURE something?" If measure, rewrite to see.

---

### 6.5 File Splitting Thresholds

#### When to Split (ISG-SPL-01 through ISG-SPL-03)

A file needs splitting when ANY of these conditions are met:

| Condition | Threshold | Rule ID |
|-----------|-----------|---------|
| Compliance drops below | 65% | ISG-SPL-01 |
| Single agent must process entire file AND file exceeds | 1,000 lines | ISG-SPL-02 |
| File serves multiple agent roles | N/A | ISG-SPL-03 |

#### When NOT to Split (ISG-SPL-04 through ISG-SPL-06)

| Condition | Rule ID |
|-----------|---------|
| Reference document read selectively (e.g., value tables) | ISG-SPL-04 |
| Serves single agent role regardless of length | ISG-SPL-05 |
| Content is structurally independent per section | ISG-SPL-06 |

#### Current File Compliance

| File | Lines | Compliance | Safe +Lines | Headroom | Fragility |
|------|-------|-----------|-------------|----------|-----------|
| gate-runner-core.js | ~1,437 | 68% | **0 net** | OVER CAPACITY | CRITICAL |
| artifact-builder-recipe.md | ~934 | 82% | +50 | MODERATE | ROBUST |
| MANIFEST.md | ~1,193 | 70.6% | +20 | LIMITED | FRAGILE (routing) |
| artifact-orchestrator.md | ~1,058 | 87% | +50 | GOOD | ROBUST |
| artifact-routing.md | ~900 | 71.4% | +40 | MODERATE | N/A |
| artifact-identity-perception.md | ~556 | 78.8% | +20 | LIMITED | N/A |
| pa-questions.md | ~418 (~1,004 with splits) | 94% | +30 | GOOD | ROBUST (S1-3) / FRAGILE (S4) |
| artifact-tc-brief-template.md | ~224 | 83.7% | +30 | MODERATE | ROBUST (content) / CRITICAL (headers) |
| artifact-value-tables.md | ~263 | N/A (reference) | +50 | GOOD | ROBUST |
| EXECUTION-TRACKER-TEMPLATE.md | ~328 | N/A | Unlimited | GOOD | ROBUST |
| pa-deployment.md | ~237 | N/A | +30 | PA family | FRAGILE (assignments) |
| gate-manifest.json | ~159 | N/A | +10 | LIMITED | FRAGILE |
| gate-runner-spec.md | ~188 | N/A | +15 | MODERATE | N/A |
| pa-manifest.md | ~89 | N/A | +10 | MODERATE | N/A |

**Alert:** gate-runner-core.js at 68% is 3 points above the 65% split threshold. Adding ME-003+ME-014+ME-040 (+180 lines) without subtraction would push to ~62-64% (below split threshold). The subtraction-before-addition constraint (ISG-HC-04) prevents this.

---

### 6.6 Per-File Formatting Templates

#### Template: gate-runner-core.js Changes

```javascript
// GR-XX: [Gate Name]
// [One-line description]
try {
  const result = await page.evaluate(() => {
    // Use window.isRenderedElement() for filtering
    // DOM access logic here
    return { measured: {...}, threshold: {...} };
  });
  results.push({
    gate: 'GR-XX',
    name: '[Gate Name]',
    status: result.measured >= result.threshold ? 'PASS' : 'FAIL',
    measured: result.measured,
    threshold: result.threshold
  });
} catch (err) {
  results.push({
    gate: 'GR-XX',
    name: '[Gate Name]',
    status: 'FAIL',
    measured: 'Error: ' + err.message,
    threshold: '[threshold description]'
  });
}
```

**Coordinated updates required (ISG-GR-09 through ISG-GR-15):**

1. Gate code in correct function (`runGateRunner` / `runAntiPatternGates` / `runWave2Gates`)
2. GR-48 REQUIRED or RECOMMENDED array (L1331-1340)
3. gate-manifest.json L18-52 tier classification
4. gate-manifest.json L62-111 execution order (if new step)
5. gate-runner-spec.md human-readable specification row
6. MANIFEST.md L244-267 Section 3 routing table
7. MANIFEST.md L275-285 verdict logic (if new category)

#### Template: MANIFEST.md Changes

**Routing entry (Appendix B):**
```
| [Agent Role] | [File 1] + [File 2] + ... (~[N] lines) |
```

**Exclusion rule (Appendix B negative table):**
```
| [Agent Role] | "[What must NOT be included]" | [Reason] |
```

**Anti-patterns:**
- Adding content to MANIFEST prose sections when it belongs in an artifact file (ISG-MAN-03)
- Modifying Appendix E prompt templates without verifying `{VARIABLE}` placeholders still work (ISG-MAN-04)
- Changing verdict logic in MANIFEST without updating gate-manifest.json (ISG-MAN-05)

#### Template: pa-deployment.md Changes

Follow ORCHESTRATOR DECISION TREE format:
```markdown
### Phase [N].[M]: [Step Name]
**Input:** [What this step receives]
**Action:** [What the orchestrator does]
**Output:** [What this step produces]
**Verification:** [How to confirm success]
**If FAIL:** [Recovery path]
```

#### Template: artifact-builder-recipe.md Changes

Follow RECIPE FORMAT:
```markdown
### Step N.M: [Action Verb] [What]

**Read:** [What reference to consult]
**Select:** [What to choose from reference]
**Deploy:** [Exact CSS or HTML to write]
**Assess:** [Self-check in world-description framing]
```

**Anti-patterns (ISG-RCP-05 through ISG-RCP-08):**
- Prose paragraphs without action verbs
- Gate-format language
- Prohibition framing
- Naked thresholds without calibration ranges

#### Template: pa-questions.md Changes

```markdown
**PA-[NN]: [Question text ending in ?]**
- Evidence: YES / NO / CONDITIONAL
- Viewport: [1440px / 768px / both]
- Assigned to: Auditor [Letter]
```

**Anti-patterns (ISG-PA-03, ISG-PA-04):**
- Adding calibration data or quality tiers to Sections 1-3 (violates fresh-eyes M-20)
- Adding judgment-scale questions ("Rate 1-5") instead of binary YES/NO

**Propagation required (ISG-PA-05 through ISG-PA-08):**
1. pa-deployment.md assignment table
2. MANIFEST.md agent roster
3. pa-manifest.md checklist
4. Question totals (appear in 3+ locations)

#### Template: pa-weaver.md Changes

Follow VERDICT PROTOCOL format. Weaver instructions can use judgment verbs. Binary overrides use decision-tree format:
```markdown
**Override [N]: [Condition]**
IF [binary condition] THEN [verdict] regardless of [other criteria].
```

---

### 6.7 Format Multiplier Model

#### Multiplier Table (ISG-FMM-01 through ISG-FMM-04)

| Format Type | Multiplier | Impact per Line | Example |
|-------------|-----------|-----------------|---------|
| Binary + CSS value | **0.5x** | Half normal degradation | `background: #FEF9F5; /* delta: 28 RGB */` |
| Recipe-format steps | **1.0x** | Neutral (baseline) | `### Step 2.1: Deploy warm background pair` |
| Prose instructions | **2.0x** | Double degradation | "The builder should consider the relationship between..." |
| Judgment-requiring | **3.0x** | Triple degradation | "If the page feels insufficiently rich, add more mechanisms" |

#### Budget Calculation Process (ISG-FMM-05)

Before adding ANY enrichment:

1. **Count** net lines (added minus removed)
2. **Classify** by format type (binary+CSS / recipe / prose / judgment)
3. **Multiply:** `effective_lines = net_lines x format_multiplier`
4. **Compare** against file's safe budget
5. **If over:** subtract first OR route content to a file with more headroom

#### Example Calculations

| Enrichment | Net Lines | Format | Multiplier | Effective Lines |
|------------|----------|--------|-----------|-----------------|
| ME-004 (Q0 self-check) | +12 | Recipe | 1.0x | 12 |
| ME-039 (boilerplate CSS) | +8 | Binary+CSS | 0.5x | 4 |
| ME-001 (experiential pass) | +22 | Recipe | 1.0x | 22 |
| ME-017 (Phase 4 prose) | +15 | Prose | 2.0x | 30 |
| ME-045 (context budget) | +15 | Prose | 2.0x | 30 |

**Implication:** Route all enrichments toward binary+CSS format wherever possible. A 10-line CSS snippet costs 5 effective lines; a 10-line prose paragraph costs 20. This is a 4:1 efficiency difference.

#### Content Routing Decision Tree (ISG-RTG-01 through ISG-RTG-06)

| Content Type | Route To | Format |
|-------------|----------|--------|
| Specifies CSS property:value pair | artifact-builder-recipe.md (recipe step) | Binary+CSS (0.5x) |
| Perception threshold | artifact-identity-perception.md (calibration) + gate-runner-core.js (binary check) | Binary+CSS (0.5x) |
| Brief structure change | artifact-tc-brief-template.md (template) | Recipe (1.0x) |
| Process/decision change | artifact-orchestrator.md (phase step) | Recipe (1.0x) |
| Reference value | artifact-value-tables.md (value pair) | Binary+CSS (0.5x) |
| None of the above | Reconsider whether the enrichment is needed | N/A |

---

### 6.8 Red Lines (9 Absolute Constraints)

These changes require a separate architectural validation cycle. They CANNOT be implemented as standard enrichments.

| Red Line | Description | Rule ID |
|----------|-------------|---------|
| 1 | NEVER change the number of pipeline phases | ISG-RL-01 |
| 2 | NEVER change the brief line budget totals | ISG-RL-02 |
| 3 | NEVER change BV gate thresholds downward | ISG-RL-03 |
| 4 | NEVER remove any mechanism rated HIGHLY EFFECTIVE | ISG-RL-04 |
| 5 | NEVER change the builder's creative authority band (80%) | ISG-RL-05 |
| 6 | NEVER add calibration data to auditor-visible files | ISG-RL-06 |
| 7 | NEVER modify `isCold()` formula without full palette validation | ISG-RL-07 |
| 8 | NEVER change GR-48 REQUIRED_GATES to a smaller list | ISG-RL-08 |
| 9 | NEVER remove the dual-route pattern for any soul constraint | ISG-RL-09 |

#### Adversarial Addition: 2 Implicit Red Lines from Audit

| Red Line | Description | Source |
|----------|-------------|--------|
| 10 (implicit) | NEVER weaken a BV gate to "fix" a content violation -- always fix the content | audit-05-08 §3, adversarial DANGER 1 |
| 11 (implicit) | NEVER commit PA question retirements without simultaneous additions (atomic swap only) | audit-mechanisms DANGER 3 |

---

### 6.9 Pre-Flight Checklist (Every Enrichment)

Before implementing ANY enrichment, complete ALL 7 preconditions (ISG-PFC-01 through ISG-PFC-07):

- [ ] **PFC-01:** Identify target file(s) and check the capacity table (Section 6.5)
- [ ] **PFC-02:** Identify anti-loss mechanisms in blast radius using the 5 interdependency clusters (Section 7)
- [ ] **PFC-03:** Classify enrichment format (binary+CSS / recipe / prose / judgment) and compute effective lines (Section 6.7)
- [ ] **PFC-04:** Check if net addition exceeds safe budget -- if yes, identify lines to subtract first
- [ ] **PFC-05:** If targeting gate-runner-core.js: identify equal or greater subtraction. Net-zero is MANDATORY.
- [ ] **PFC-06:** If targeting brief-facing content: verify NO checklist verbs, NO suppressor patterns, NO prohibition framing
- [ ] **PFC-07:** If targeting auditor-facing content: verify NO calibration data, NO tier definitions, NO build intent

#### Adversarial Addition: 2 Additional Pre-Flight Items

- [ ] **PFC-08:** Verify this enrichment does NOT violate any of the 9+2 Red Lines (Section 6.8)
- [ ] **PFC-09:** Verify the enrichment is not duplicating content that already exists in another file (prevents complexity ratchet)

---

### 6.10 Post-Implementation Verification (Every Enrichment)

After implementing ANY enrichment, complete ALL 7 checks (ISG-PIV-01 through ISG-PIV-07):

- [ ] **PIV-01:** Format check -- does the modified section still use recipe verbs (not checklist verbs)?
- [ ] **PIV-02:** Capacity check -- count net lines added, update running total against 240-line budget
- [ ] **PIV-03:** Cross-reference check -- if changed a threshold, update ALL locations (gate-runner-core.js + gate-runner-spec.md + gate-runner-preconditions.md + MANIFEST quickstart)
- [ ] **PIV-04:** Isolation check -- does any new content leak to an agent that should not see it? (Check MANIFEST Appendix B exclusion table)
- [ ] **PIV-05:** Regex check -- if changed any header format, do BV-01 tier regexes (gate-runner-core.js L35-39) still match?
- [ ] **PIV-06:** GR-48 check -- if added a gate, is it in REQUIRED_GATES or RECOMMENDED_GATES?
- [ ] **PIV-07:** Question count check -- if added PA questions, are totals updated in pa-deployment.md, pa-manifest.md, and MANIFEST?

#### Adversarial Addition: 3 Additional Post-Verification Items

- [ ] **PIV-08:** Isolation quick-scan -- run the forbidden-term search from Section 6.3 on all new content
- [ ] **PIV-09:** Suppressor scan -- run BV-04 regex patterns (Section 6.2) against all new builder-facing text
- [ ] **PIV-10:** Red line scan -- verify none of the 11 red lines were violated by this change

---
---

## SECTION 7: ANTI-LOSS VERIFICATION CHECKLIST

---

### 7.0 Mechanisms by Risk Level

| Risk Level | Mechanisms | Reason |
|------------|-----------|--------|
| **HIGH RISK** (directly modified by 8-change plan) | M-04, M-06, M-11, M-12, M-13, M-19, M-20, M-22 | Multiple changes touch these mechanisms' enforcement files |
| **MEDIUM RISK** (indirectly affected) | M-02, M-07, M-08, M-09, M-21, M-23, M-25 | Adjacent to changes; cascade effects possible |
| **LOW RISK** (not affected) | M-01, M-03, M-05, M-10, M-14, M-15, M-16, M-17, M-18, M-24 | No changes interact with these |

---

### 7.1 All 25 Mechanisms

#### STRUCTURAL MECHANISMS (M-01 through M-06)

---

**M-01: Artifact Decomposition**
- **Location:** MANIFEST.md L91-102 (layer table), L179-342 (routing), L912-958 (file registry); gate-manifest.json L7-15 (files); pa-deployment.md L4-5 (split declaration)
- **Fragility:** ROBUST | **Risk:** LOW
- **Verification:**
  - [ ] Count artifact files in `ephemeral/va-extraction/` -- verify each appears in MANIFEST Section 3 + Appendix D
  - [ ] Verify no changes add/remove/rename artifact files
- **Isolation dependency:** Enables M-04 by keeping files separable
- **Cluster:** 5 (Routing Accuracy)

---

**M-02: Dual-Channel Architecture**
- **Location:** MANIFEST.md L196-198 (dual-route description), L764, L795-797; artifact-orchestrator.md L233-242 (Channel 1/2 definitions); artifact-builder-recipe.md L62-63 (direct file routes)
- **Fragility:** ROBUST | **Risk:** MEDIUM
- **Verification:**
  - [ ] After ME-005: verify MANIFEST L196-198 dual-route pattern text is unchanged
  - [ ] Verify builder prompt template still contains calibration context, not gate thresholds
  - [ ] Verify Channel 1 (lossless universal) and Channel 2 (regenerated content) boundaries intact
- **Isolation dependency:** Dual-route IS how isolation works for thresholds. Builder sees calibration; gate sees binary.
- **Cluster:** 2 (Builder Information Barrier)

---

**M-03: Direct File Injection**
- **Location:** MANIFEST.md L853 (builder receives tokens.css + components.css + mechanism-catalog.md + value tables), L1044-1045, L1083-1089; artifact-builder-recipe.md L23-25, L55-57, L62-63 ("direct file routes"); EXECUTION-TRACKER-TEMPLATE.md L36-38, L118-123
- **Fragility:** ROBUST | **Risk:** LOW
- **Verification:**
  - [ ] Verify artifact-builder-recipe.md L62-63 still says "direct file routes bypassing the brief" after ME-004 and ME-039 edits
  - [ ] Verify no new ME-004/ME-039 content accidentally routes through the brief instead of direct injection
- **Isolation dependency:** Direct injection BYPASSES brief compression -- intentional design
- **Cluster:** 5 (Routing Accuracy)

---

**M-04: Per-Agent Context Isolation** [HIGH RISK]
- **Location:** MANIFEST.md L859-868 (exclusion table), L301-304 (PA isolation); pa-deployment.md L92, L201-221 (fresh-eyes); pa-guardrails.md L119-137; pa-questions.md L312-316 (Section 4 WEAVER USE ONLY); artifact-orchestrator.md L131-143 (builder isolation)
- **Fragility:** **CRITICAL** | **Risk:** **HIGH**
- **Verification:**
  - [ ] After ME-001: experiential pass instructions contain NO tier definitions, NO PA-05 expected scores, NO mechanism counts
  - [ ] After ME-037+ME-051: retired questions removed cleanly from Sections 1-3; new questions contain NO calibration data
  - [ ] After ME-006: screenshot validation info stays in orchestrator files (pa-deployment.md), NOT auditor files (pa-questions.md)
  - [ ] MANIFEST L859-868 exclusion table is unchanged
  - [ ] No content leaks across role boundaries (builder/auditor/weaver)
- **Isolation dependency:** THIS IS the information isolation mechanism -- most at-risk during this implementation wave
- **Cluster:** 2 (Builder Information Barrier)

---

**M-05: Tiered Brief Structure**
- **Location:** gate-runner-core.js L29-67 (BV-01 code), L34-40 (tier header patterns: T1>=12, T2>=6, T3>=40, T4>=32, CM>=24 at 80%); MANIFEST.md L28-33, L404-408; gate-runner-preconditions.md L14-19
- **Fragility:** **CRITICAL** (gate-runner-core.js) / ROBUST (markdown) | **Risk:** LOW
- **Verification:**
  - [ ] gate-runner-core.js L35-39 tier regexes unchanged (`/^#+\s*Tier\s*1/im` etc.)
  - [ ] BV-01 min values unchanged (12, 6, 40, 32, 24)
  - [ ] No tier header format changes in any file
- **Anti-skimming:** BV-01 IS the anti-skimming mechanism for under-budgeted brief tiers
- **Cluster:** 1 (Brief Quality Enforcement)

---

**M-06: Suppressor Management** [HIGH RISK]
- **Location:** gate-runner-core.js L104-117 (BV-04 code), L105-109 (4 suppressor regex patterns); artifact-orchestrator.md L42; MANIFEST.md L32; gate-runner-preconditions.md L37-46
- **Fragility:** **CRITICAL** (regex patterns) | **Risk:** **HIGH**
- **Verification:**
  - [ ] After ME-004 and ME-039: scan ALL new text in artifact-builder-recipe.md for BV-04 trigger patterns
  - [ ] No `sample N-N` phrases in new content
  - [ ] No `must not`/`shall not`/`never use` in new content
  - [ ] No `verify that`/`fail if`/`must be` in new content
  - [ ] No `>= N channels` in new content
  - [ ] New content uses recipe verbs: Build/Create/Derive/Map/Read/Select/Deploy/Assess
- **Anti-skimming:** BV-04 IS the anti-skimming enforcement for suppressor language
- **Conviction language:** **CRITICAL.** ME-004 Q0 self-check MUST use "Assess" not "Verify." ME-039 boilerplate MUST use "Deploy" not "Ensure."
- **Cluster:** 1 (Brief Quality Enforcement)

---

#### ROUTING MECHANISMS (M-07 through M-10)

---

**M-07: MANIFEST-Driven Routing**
- **Location:** MANIFEST.md L849-857 (positive routing), L859-868 (negative routing), L179-342 (Section 3 routing table); EXECUTION-TRACKER-TEMPLATE.md L54-58, L83-91, L117-127, L190-195
- **Fragility:** ROBUST | **Risk:** MEDIUM
- **Verification:**
  - [ ] After ME-005: MANIFEST Section 3 routing table (L179-342) is completely unchanged
  - [ ] After ME-037+ME-051: auditor question lists in MANIFEST L149-157 updated correctly
  - [ ] After ALL changes: verify MANIFEST Section 3 routing table unchanged
- **Isolation dependency:** M-07 enforces isolation by defining who receives what
- **Cluster:** 5 (Routing Accuracy)

---

**M-08: Dual-Route Pattern**
- **Location:** gate-runner-core.js L234-277 (GR-05 warm palette code), L246-248 (`isCold()` function); MANIFEST.md L196-198, L795-796; artifact-builder-recipe.md L108-120 (builder calibration)
- **Fragility:** FRAGILE (isCold heuristic) | **Risk:** MEDIUM
- **Verification:**
  - [ ] `isCold()` at gate-runner-core.js L246-248 is unchanged
  - [ ] artifact-builder-recipe.md L108-120 calibration section is unchanged
  - [ ] Builder still sees CALIBRATION (15=floor, 25=confident, 50=dramatic) not THRESHOLDS (>=15 PASS, <15 FAIL)
- **Isolation dependency:** Dual-route ensures builder sees calibration not thresholds
- **Cluster:** 2 (Builder Information Barrier)

---

**M-09: Agent Prompt Templates**
- **Location:** MANIFEST.md L975-1170 (Appendix E: all templates), L1037-1090 (builder template), L1098-1119 (PA auditor template), L1138-1170 (weaver template); pa-deployment.md L42-52, L100-104, L106-119
- **Fragility:** FRAGILE (templates) / ROBUST (tables) | **Risk:** MEDIUM
- **Verification:**
  - [ ] After ME-037+ME-051: all `{VARIABLE}` placeholders in MANIFEST Appendix E are intact
  - [ ] Question counts in PA auditor templates match pa-deployment.md assignments
  - [ ] After ME-001: experiential pass instructions don't break existing PA auditor template structure
  - [ ] Builder file read order in builder template unchanged
- **Isolation dependency:** Templates enforce isolation by defining WHAT each agent receives
- **Cluster:** 5 (Routing Accuracy)

---

**M-10: Content Map Regeneration**
- **Location:** gate-runner-core.js L39 (BV-01 ContentMap tier), MANIFEST.md L377-378, L986-1003; artifact-orchestrator.md L192-194
- **Fragility:** FRAGILE (BV-01 ContentMap regex) | **Risk:** LOW
- **Verification:**
  - [ ] gate-runner-core.js L39 ContentMap regex and min: 24 unchanged
  - [ ] MANIFEST Content Analyst prompt template unchanged
- **Anti-skimming:** BV-01 ContentMap tier IS the anti-skimming mechanism for content maps
- **Cluster:** 1 (Brief Quality Enforcement)

---

#### FORMAT MECHANISMS (M-11 through M-18)

---

**M-11: Recipe Format** [HIGH RISK]
- **Location:** gate-runner-core.js L93-102 (BV-03 code), L94 (recipe verbs), L95 (checklist verbs), L96 (3:1 ratio); artifact-builder-recipe.md L5, L13; MANIFEST.md L31, L234; gate-runner-preconditions.md L30-35
- **Fragility:** **CRITICAL** (verb lists in JS) | **Risk:** **HIGH**
- **Verification:**
  - [ ] After ME-004 and ME-039: count recipe verbs vs checklist verbs in ALL new text
  - [ ] Verify ratio remains >= 3:1 when combined with existing content
  - [ ] Count instances of Build/Create/Derive/Map/Read/Select/Deploy/Assess
  - [ ] Count instances of Verify/Fail if/Must be/Ensure/Check that
  - [ ] BV-03 verb regex at L94-95 unchanged
- **Anti-skimming:** BV-03 IS the anti-skimming enforcement for recipe format
- **Conviction language:** **CRITICAL.** ME-004 Q0 self-check MUST use "Assess" not "Verify." ME-039 boilerplate MUST use "Deploy" not "Ensure."
- **Cluster:** 1 (Brief Quality Enforcement)

---

**M-12: World-Description Framing** [HIGH RISK]
- **Location:** MANIFEST.md L188-190, L198, L863-864, L879; artifact-builder-recipe.md L13; artifact-orchestrator.md L131-143; gate-runner-core.js L107 (BV-04 S-02 pattern)
- **Fragility:** FRAGILE (requires discipline) | **Risk:** **HIGH**
- **Verification:**
  - [ ] After ME-004 and ME-039: read every new sentence -- "Does this tell the builder what the WORLD IS, or what they MUST NOT DO?"
  - [ ] Prohibition language -> rewrite as world-description
  - [ ] ME-004 Q0 says "Assess whether text is readable at arm's length" (good) NOT "Verify that no text is illegible" (bad)
  - [ ] ME-039 boilerplate says "Deploy this HTML scaffold" (good) NOT "Ensure your HTML starts with" (bad)
- **Anti-skimming:** N/A (this is about VOICE, not FORMAT)
- **Conviction language:** **CRITICAL.** All new builder-facing content must use world-description verbs, not prohibition verbs.
- **Cluster:** 2 (Builder Information Barrier)

---

**M-13: Binary Rules** [HIGH RISK]
- **Location:** gate-runner-core.js L1-20 (execution order), L752-778 (verdict summary), L1330-1374 (GR-48 coverage), L1331-1340 (REQUIRED_GATES + RECOMMENDED_GATES arrays); gate-manifest.json L55-59, L18-52, L62-111; gate-runner-spec.md L51-57; MANIFEST.md L275-285
- **Fragility:** **CRITICAL** (gate-runner-core.js) / FRAGILE (gate-manifest.json) | **Risk:** **HIGH**
- **Verification:**
  - [ ] After ME-005: verdict logic consistent across ALL 8 locations:
    1. MANIFEST.md L276
    2. MANIFEST.md L505 (Phase 3C)
    3. MANIFEST.md L646 (failure mode table)
    4. MANIFEST.md L714 (critical path table)
    5. MANIFEST.md L1144 (execution sequence)
    6. gate-manifest.json L56
    7. gate-runner-spec.md L53
    8. artifact-orchestrator.md verdict tree
  - [ ] After ME-007: GR-44 still returns `{ gate: 'GR-44', status: 'PASS'|'FAIL' }` schema
  - [ ] GR-44 still in REQUIRED_GATES array at L1331
- **Cluster:** 3 (Gate Verification System)

---

**M-14: Perception Calibration Table**
- **Location:** gate-runner-core.js L1170-1223 (GR-51), L1193-1214, L69-91 (BV-02); gate-runner-spec.md L132; pa-questions.md L362-377 (Appendix A); artifact-builder-recipe.md L108-124 (builder calibration)
- **Fragility:** **CRITICAL** (GR-51 code) | **Risk:** LOW
- **Verification:**
  - [ ] GR-51 thresholds unchanged (above25Ratio >= 0.50, stddev >= 8, middleHasHighDelta)
  - [ ] BV-02 minimum delta 15 unchanged at L82
  - [ ] Builder calibration ranges intact (15=floor, 25=confident, 50=dramatic)
- **Anti-skimming:** GR-51 IS the anti-skimming mechanism for background deltas -- catches "technically compliant" clustering
- **Isolation dependency:** Builder sees CALIBRATION; gate sees BINARY. Dual-route.
- **Cluster:** 3 (Gate Verification System)

---

**M-15: Value Tables**
- **Location:** MANIFEST.md L853, L1044-1045, L1089; artifact-builder-recipe.md L122
- **Fragility:** FRAGILE ("optional" flag is dangerous) | **Risk:** LOW
- **Verification:**
  - [ ] MANIFEST L1089 still references value-tables.md
  - [ ] artifact-builder-recipe.md L122 still points to value tables
- **Isolation dependency:** Value tables bypass the brief via M-03 direct injection
- **Cluster:** 5 (Routing Accuracy)

---

**M-16: Conviction Statement**
- **Location:** gate-runner-core.js L1136-1168 (GR-50 regex + keywords); MANIFEST.md L423, L1053-1057, L1064-1073; artifact-orchestrator.md L377-379
- **Fragility:** FRAGILE (GR-50 regex + keywords) | **Risk:** LOW
- **Verification:**
  - [ ] GR-50 regex at L1139 unchanged
  - [ ] Conviction format in builder prompt template unchanged
- **Cluster:** 3 (Gate Verification System)

---

**M-17: TC Brief Template**
- **Location:** MANIFEST.md L20, L209-217, L1006-1032; gate-runner-core.js L29-67 (BV-01), L93-102 (BV-03)
- **Fragility:** ROBUST (template content) / **CRITICAL** (tier header format must match BV-01 regexes) | **Risk:** LOW
- **Verification:**
  - [ ] TC Brief Template tier headers match `^#+\s*Tier\s*[1234]` and `^#+\s*Content\s*Map`
  - [ ] No tier header format changes anywhere
- **Anti-skimming:** TC Brief Template defines the STRUCTURE that BV-01 enforces
- **Cluster:** 1 (Brief Quality Enforcement)

---

**M-18: Worked Examples**
- **Location:** MANIFEST.md L905 (glossary), L948 (Appendix D: file path)
- **Fragility:** ROBUST | **Risk:** LOW
- **Verification:**
  - [ ] No changes interact -- minimal verification needed
- **Cluster:** N/A (standalone)

---

#### VERIFICATION MECHANISMS (M-19 through M-25)

---

**M-19: Programmatic Gate Verification** [HIGH RISK]
- **Location:** gate-runner-core.js L1-20 (execution order), L29-120 (BV gates), L128-779 (core gates), L786-1038 (anti-pattern gates), L1045-1323 (Wave 2 gates), L1330-1374 (GR-48), L1377-1416 (GR-49), L1418-1437 (usage); gate-manifest.json (159 lines); gate-runner-spec.md (188 lines)
- **Fragility:** **CRITICAL** (entire gate-runner-core.js) | **Risk:** **HIGH**
- **Verification:**
  - [ ] After ME-007: GR-44 returns correct result schema `{ gate, name, status, measured, threshold }`
  - [ ] GR-44 still in `REQUIRED_GATES` array at L1334
  - [ ] No other gate functions accidentally modified (check function boundary comments)
  - [ ] After ME-005: if verdict summary at L752-778 is modified, verify it matches all 7 cross-file locations
  - [ ] `runGateRunner()` still returns `{ results, summary }` object
  - [ ] All 6 function signatures unchanged
- **Anti-skimming:** The entire gate system IS programmatic anti-skimming
- **Cluster:** 3 (Gate Verification System)

---

**M-20: Fresh-Eyes PA Principle** [HIGH RISK]
- **Location:** pa-deployment.md L201-221 (full spec), L217-221; pa-guardrails.md L119-148 (Three Laws); pa-questions.md L312-316 (Section 4 WEAVER USE ONLY); MANIFEST.md L322-323, L866-868
- **Fragility:** ROBUST (structural enforcement via file split) | **Risk:** **HIGH**
- **Verification:**
  - [ ] After ME-001: experiential pass instructions are in pa-deployment.md ONLY, not in pa-questions.md or pa-guardrails.md
  - [ ] After ME-037+ME-051: new replacement questions contain ZERO mechanism counts, pattern names, build plan details, prior experiment results, tier definitions, compositional stack theory
  - [ ] pa-deployment.md L201-221 fresh-eyes spec unchanged
  - [ ] pa-questions.md Sections 1-3 remain calibration-free
- **Conviction language:** Auditor instructions use observation language ("Describe what you see") not measurement language ("Verify that...")
- **Cluster:** 4 (PA Audit Integrity)

---

**M-21: Screenshot Pre-Capture**
- **Location:** MANIFEST.md L35, L324; pa-deployment.md L139-196 (Section 2: complete protocol); EXECUTION-TRACKER-TEMPLATE.md L142-152
- **Fragility:** ROBUST | **Risk:** MEDIUM
- **Verification:**
  - [ ] After ME-006: new screenshot validation does NOT modify the capture sequence itself
  - [ ] Validation is ADDED AFTER capture, not DURING
  - [ ] Validation stays in orchestrator-facing files, not auditor-facing files
  - [ ] Screenshot validation results do NOT reach auditors
- **Isolation dependency:** Screenshot validation results should NOT reach auditors (would anchor assessment)
- **Cluster:** 4 (PA Audit Integrity)

---

**M-22: 9-Auditor Deployment** [HIGH RISK]
- **Location:** pa-deployment.md L28-31 (architecture), L42-52 (AUTHORITATIVE assignment table: 69 questions across 9 auditors A-I), L72-92 (PA-05 cross-validation), L106-119 (evidence format); pa-guardrails.md L44-54; pa-manifest.md L22-34, L40-47; MANIFEST.md L149-157 (agent roster)
- **Fragility:** FRAGILE (assignment table is source of truth) | **Risk:** **HIGH**
- **Verification:**
  - [ ] After ME-037+ME-051 (MUST be atomic):
    - [ ] Retired questions (PA-06, PA-09, PA-40, PA-07 if exists) REMOVED from all 5 locations: pa-questions.md, pa-deployment.md L42-52, MANIFEST.md L149-157, pa-manifest.md L22-34, EXECUTION-TRACKER-TEMPLATE.md
    - [ ] New experiential questions ADDED to all 5 locations
    - [ ] Total counts match across ALL 11 locations: pa-questions.md L306, pa-deployment.md L54, pa-manifest.md L36, pa-weaver.md L18, pa-guardrails.md L15, MANIFEST.md L159+L784
    - [ ] No auditor exceeds 11 questions; Auditor C (currently 11) should not receive new questions without retirement offsetting
    - [ ] PA-05 cross-validation table at L72-92 unchanged
    - [ ] Load balance verified (retiring from B/C/F frees capacity; new questions to lightest auditors E/F/H)
- **Isolation dependency:** Assignment table defines what each auditor sees -- incorrect assignments = wrong domain questions
- **Cluster:** 4 (PA Audit Integrity)

---

**M-23: REBUILD Not FIX**
- **Location:** MANIFEST.md L40-42, L275-285 (verdict logic), L519-521 (max iterations), L605 (circuit breaker); gate-manifest.json L55-59; artifact-orchestrator.md L107-115
- **Fragility:** ROBUST (conceptual, not code) | **Risk:** MEDIUM
- **Verification:**
  - [ ] After ME-005: MECHANICAL exception defined consistently across all 7 verdict logic locations
  - [ ] Definition is BINARY: "ALL identity failures are MECHANICAL (<=5 CSS lines, no HTML change, no design decision) -> REFINE; ANY non-MECHANICAL identity failure -> REBUILD"
  - [ ] Circuit breaker at L605 updated if ME-005 adds a new iteration type
  - [ ] Early termination at MANIFEST L474 updated for MECHANICAL exception
- **Cluster:** 3 (Gate Verification System)

---

**M-24: Mode Selection by Orchestrator**
- **Location:** MANIFEST.md L26, L344, L383-389, L886-887; artifact-orchestrator.md L297-347 (mode selection logic), L301, L313-323; EXECUTION-TRACKER-TEMPLATE.md L67-69
- **Fragility:** ROBUST | **Risk:** LOW
- **Verification:**
  - [ ] artifact-orchestrator.md Section 4 mode selection logic unchanged
  - [ ] Builder sees ONE mode, implicit in recipe format
- **Isolation dependency:** Builder sees ONE mode, implicit in recipe format
- **Cluster:** N/A (standalone)

---

**M-25: Honest Complexity Accounting**
- **Location:** MANIFEST.md L346-356 (accounting table: ~3,600 lines), L750 (CF-01); artifact-orchestrator.md L147-157; artifact-builder-recipe.md L14-15
- **Fragility:** ROBUST (documentation, not code) | **Risk:** MEDIUM
- **Verification:**
  - [ ] Optional: update MANIFEST.md L346-356 line counts to reflect new artifact-builder-recipe.md size after ME-004 and ME-039
  - [ ] Not strictly necessary for pipeline function (documentation-only)
- **Cluster:** N/A (standalone)

---

### 7.2 Interdependency Clusters

Changes within a cluster require coordinated updates across all cluster members.

#### Cluster 1: Brief Quality Enforcement
- **Members:** M-05 (tiered brief), M-06 (suppressor management), M-11 (recipe format), M-17 (TC brief template)
- **Shared code:** gate-runner-core.js L29-120 (BV-01 through BV-04)
- **Rule:** Any brief format change must be coordinated across all four mechanisms
- **Rule ID:** ISG-CL1-01
- **Adversarial note:** M-10 (Content Map) also shares BV-01 enforcement; consider as extended cluster member

#### Cluster 2: Builder Information Barrier
- **Members:** M-04 (context isolation), M-08 (dual-route), M-12 (world-description framing)
- **Shared enforcement:** MANIFEST Appendix B exclusion table, BV-04 suppressor scan
- **Rule:** Content reaching the builder must avoid prohibition framing AND gate-format thresholds
- **Rule ID:** ISG-CL2-01
- **Adversarial note:** M-03 (direct injection) bypasses this barrier intentionally -- ensure no enrichment accidentally routes through direct injection what should go through the brief

#### Cluster 3: Gate Verification System
- **Members:** M-13 (binary rules), M-14 (perception calibration), M-19 (programmatic verification)
- **Shared code:** gate-runner-core.js (entire file), gate-manifest.json (tiers + verdict logic)
- **Rule:** Adding/removing gates requires coordinated updates in 5-7 locations
- **Rule ID:** ISG-CL3-01
- **Adversarial note:** M-16 (conviction statement) and M-23 (REBUILD not FIX) also depend on gate-runner-core.js verdict logic; consider as extended members for ME-005

#### Cluster 4: PA Audit Integrity
- **Members:** M-20 (fresh-eyes), M-21 (screenshots), M-22 (9-auditor deployment)
- **Shared enforcement:** pa-deployment.md (assignment table), pa-guardrails.md (constraints)
- **Rule:** Adding PA questions requires updates in 5+ locations
- **Rule ID:** ISG-CL4-01
- **Adversarial note:** pa-weaver.md is NOT a cluster member but receives cluster output; verify weaver total counts match cluster source-of-truth

#### Cluster 5: Routing Accuracy
- **Members:** M-01 (decomposition), M-03 (direct injection), M-07 (MANIFEST routing), M-09 (prompt templates)
- **Shared spec:** MANIFEST.md (Section 3 + Appendix B + Appendix D + Appendix E)
- **Rule:** Adding new files or changing routing requires updates in all four MANIFEST sections
- **Rule ID:** ISG-CL5-01

---

### 7.3 Most Dangerous Interactions

#### DANGER 1: ME-004/ME-039 x M-06/M-11/M-12 -- Wrong Verbs Break BV Gates

**What happens:** New builder recipe content (ME-004 legibility self-check, ME-039 font/color boilerplate) that uses wrong verbs or prohibition framing will be caught by BV-03/BV-04, causing brief FAIL.

**The real danger:** If someone "fixes" the BV gate instead of fixing the content, suppressors enter the pipeline. This leads to: builder receives prohibition framing -> becomes cautious -> suppressor S-02 -> fewer mechanisms -> FLAT output.

**Validation protocol:**
- [ ] Scan ALL new text in artifact-builder-recipe.md for BV-04 trigger patterns (4 regex patterns listed in Section 6.2)
- [ ] Count recipe verbs vs checklist verbs in ALL new text
- [ ] Verify ratio remains >= 3:1
- [ ] Read every new sentence: "Does this tell the builder what the WORLD IS, or what they MUST NOT DO?"
- [ ] If BV-03 or BV-04 triggers: **FIX THE CONTENT, NEVER WEAKEN THE GATE**

**Specific checks:**
- ME-004 Q0 MUST use "Assess whether..." NOT "Verify that..."
- ME-039 boilerplate MUST use "Deploy this HTML scaffold" NOT "Ensure your HTML starts with"
- No `sample N-N`, `must not`, `shall not`, `never use`, `verify that`, `fail if`, `must be`, `>= N channels` anywhere in new content

---

#### DANGER 2: ME-005 x M-13 -- 7-Location Verdict Logic Consistency

**What happens:** The MECHANICAL exception modifies when REBUILD vs REFINE triggers. This verdict logic appears in 7+ locations across the codebase. Missing even ONE location creates a contradiction.

**The real danger:** If MANIFEST says "MECHANICAL -> REFINE" but gate-manifest.json still says "ANY identity FAIL -> REBUILD", the pipeline's behavior depends on which file the orchestrator reads first. This creates unpredictable, non-reproducible verdict outcomes.

**All 8 locations that MUST be updated simultaneously:**

| # | Location | Line Range | What |
|---|----------|-----------|------|
| 1 | MANIFEST.md | L276 | Primary verdict logic |
| 2 | MANIFEST.md | L505 | Phase 3C description |
| 3 | MANIFEST.md | L646 | Failure mode table |
| 4 | MANIFEST.md | L714 | Critical path table |
| 5 | MANIFEST.md | L1144 | Execution sequence |
| 6 | gate-manifest.json | L56 | Verdict registry |
| 7 | gate-runner-spec.md | L53 | Specification docs |
| 8 | artifact-orchestrator.md | Verdict tree | Decision tree |

**Additional locations to check:**
- MANIFEST.md L474 early termination (must add MECHANICAL exception)
- MANIFEST.md L605 circuit breaker (must update if new iteration type)
- pa-weaver.md verdict thresholds (if override references MECHANICAL)

**Rule:** All 8 locations or none. Never commit a partial update.

**Validation protocol:**
- [ ] Read ALL verdict logic locations BEFORE editing (verify current consistency)
- [ ] After editing: read ALL locations and verify word-for-word consistency of MECHANICAL exception
- [ ] Verify MECHANICAL definition is BINARY: "ALL identity failures are MECHANICAL (<=5 CSS lines, no HTML change, no design decision) -> REFINE"
- [ ] Verify early termination at L474 updated
- [ ] Verify circuit breaker at L605 updated
- [ ] If gate-runner-core.js verdict summary (L752-778) modified: verify it matches all other locations

---

#### DANGER 3: ME-037+ME-051 x M-22 -- 11-Location Question Total Consistency

**What happens:** Retiring 4 PA questions and adding 4 experiential replacements requires updating question totals and assignments across 11 locations. If pa-deployment.md says 70 but pa-weaver.md says 69, the weaver may flag incomplete data.

**The real danger:** The weaver uses question totals to detect incomplete audit data. A mismatch between ANY two locations causes the weaver to either (a) flag false incomplete data or (b) silently accept actually incomplete data. Both outcomes corrupt the PA verdict.

**All 11 locations that MUST match:**

| # | File | Specific Location | What |
|---|------|-------------------|------|
| 1 | pa-questions.md | Question entries | Individual question definitions |
| 2 | pa-deployment.md | L42-52 | Auditor assignment table |
| 3 | MANIFEST.md | L149-157 | Agent roster with question lists |
| 4 | pa-manifest.md | L22-34 | Report checklist |
| 5 | EXECUTION-TRACKER | Phase 3B | PA deployment checklist |
| 6 | pa-questions.md | L306 | Total count |
| 7 | pa-deployment.md | L54 | Total count |
| 8 | pa-manifest.md | L36 | Total count |
| 9 | pa-weaver.md | L18 | Total count |
| 10 | pa-guardrails.md | L15 | Total count |
| 11 | MANIFEST.md | L159+L784 | Total count(s) |

**Additional concerns:**
- PA-40 retirement breaks AP-05 mapping in pa-guardrails.md Section 7 and pa-weaver.md Section 6.1 (AP-05 maps to PA-40 + PA-66; without PA-40, AP-05 detection weakens)
- PA-07 may not exist (verify before attempting retirement)
- ME-033 references PA-09; if PA-09 is retired, ME-033's reference becomes orphan

**Rule:** Compute final total ONCE, then search-and-replace across all 11 locations. Retirement and addition MUST be ONE atomic operation -- never commit retirements without additions or vice versa.

**Validation protocol:**
- [ ] Before starting: read pa-questions.md and verify PA-06, PA-09, PA-40 exist; verify PA-07 does/does not exist
- [ ] Before starting: read pa-guardrails.md and identify AP-05 PA-40 reference
- [ ] Before starting: verify all 11 "69 questions" locations currently match
- [ ] Plan load balance: retiring from B(-1), C(-1), F(-1) frees capacity; assign new questions to lightest auditors (E:6, F:5-after-retirement, H:5)
- [ ] After implementation: count total questions in pa-questions.md
- [ ] After implementation: count total per-auditor in pa-deployment.md; verify no auditor exceeds 11
- [ ] After implementation: verify totals match across ALL 11 locations
- [ ] After implementation: verify AP-05 mapping in pa-guardrails.md and pa-weaver.md updated
- [ ] After implementation: verify PA-05 cross-validation table at pa-deployment.md L72-92 unchanged
- [ ] After implementation: verify new questions have YES/NO format, screenshot reference, viewport assignment, auditor assignment
- [ ] After implementation: verify new questions contain ZERO calibration data or mechanism counts
- [ ] **ATOMIC CHECK:** retirement and addition are ONE operation -- never commit retirements without additions

---

### 7.4 Critical Validation Steps (Post-All-Changes)

After ALL 8 changes are complete, perform these 10 global verification checks:

1. [ ] **BV-03 Verb Ratio:** Run BV-03 regex against all new text in artifact-builder-recipe.md. Verify >= 3:1 recipe-to-checklist ratio.
2. [ ] **BV-04 Suppressor Scan:** Run BV-04 regex against all new text. Verify zero suppressor matches.
3. [ ] **Verdict Consistency:** Read ALL 8 verdict logic locations. Verify exact textual consistency of MECHANICAL exception.
4. [ ] **Gate Runner Integrity:** Verify gate-runner-core.js total line count <= 1,437. Verify GR-44 in REQUIRED_GATES. Verify result schema.
5. [ ] **Question Totals:** Count questions across ALL 11 total-count locations. Verify all match.
6. [ ] **AP-05 Mapping:** Verify AP-05 anti-pattern mapping updated in pa-guardrails.md + pa-weaver.md.
7. [ ] **Routing Table:** Verify MANIFEST.md Section 3 routing table (L179-342) unchanged.
8. [ ] **Exclusion Table:** Verify MANIFEST.md Appendix B exclusion table (L859-868) unchanged.
9. [ ] **GR-48 Consistency:** Verify gate-runner-core.js GR-48 REQUIRED_GATES and RECOMMENDED_GATES arrays at L1331-1340 match gate-manifest.json tier arrays.
10. [ ] **Fresh-Eyes Principle:** Verify pa-deployment.md fresh-eyes principle (L201-221) unchanged.

#### Adversarial Additions to Global Verification

11. [ ] **Red Line Scan:** Verify none of the 11 red lines (Section 6.8) were violated by any change.
12. [ ] **Isolation Quick-Scan:** Run forbidden-term search (Section 6.3 adversarial addition) against ALL new content across ALL modified files.
13. [ ] **Budget Accounting:** Sum all net lines added across all files. Verify total <= 240 (or document explicit budget expansion with justification).
14. [ ] **Format Multiplier Accounting:** Compute effective lines using Section 6.7 multipliers. Verify effective total within capacity.
15. [ ] **Orphan Reference Check:** Verify no ME reference points to a retired PA question (specifically ME-033 -> PA-09).
16. [ ] **Cross-File Discrepancy Resolution:** Verify all 4 contradictions (CTR-01 through CTR-04 from adversarial audit) were resolved before implementation, not left ambiguous.

---

*Section 6 (Global Formatting Rules, 10 subsections) and Section 7 (Anti-Loss Verification, 4 subsections) complete. 25 mechanisms documented with location, fragility, risk level, verification checkboxes, isolation dependencies, conviction language requirements, and cluster membership. 3 most dangerous interactions with full validation protocols. 11 red lines (9 original + 2 implicit from adversarial audit). 9 pre-flight items. 10 post-verification items. 16 global validation steps. Adversarial additions integrated from 23-ADVERSARIAL-CHECKLIST-AUDIT.md (isolation quick-scan, conviction self-test, implicit red lines, cluster extended members, format type distribution, budget accounting, orphan reference check, cross-file discrepancy resolution).*
