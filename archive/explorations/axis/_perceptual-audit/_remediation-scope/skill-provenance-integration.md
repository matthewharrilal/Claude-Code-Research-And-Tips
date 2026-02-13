# Skill-Provenance Integration Analysis

**Date:** 2026-02-11
**Analyst:** Skill Integration Analyst (Task #6)
**Scope:** How should the skill evolution (failure analysis, OD benchmark, redesign rationale, team structure, GATES/PROTOCOL/TEAM skill files) integrate with the provenance chain?
**Sources:** 5 analysis files (~3,735 lines), 3 skill files (~2,093 lines), provenance chain documents (STAGE-HEADER, HANDOFF-AD-TO-CD, PIPELINE-MANIFEST, provenance/CLAUDE.md)

---

## Executive Summary

The skill evolution represents two fundamentally different types of knowledge: (1) **architectural learning about how to run agent teams** (tooling/infrastructure), and (2) **audit methodology that produces provenance-relevant output** (methodology documentation). The provenance chain should reference the skill evolution as a methodology citation, not embed it. CD needs to know the audit methodology exists and where to find it, but does not need the failure analysis details or the team structure internals.

---

## Question 1: How Much Should the Provenance Chain Capture?

### The Skill Evolution Contains Two Distinct Knowledge Types

**Type A -- Process Infrastructure (belongs outside provenance):**
- 7 failure interventions and their root causes (failure-analysis.md)
- Agent team topology recommendations (team-structure.md, TEAM.md)
- Playwright contention management strategies (TEAM.md Section 2)
- Gate validation mechanics (GATES.md -- the HOW of checking)
- Agent prompt templates (TEAM.md Sections 3-9)
- Timing estimates and rework cost projections

**Type B -- Audit Methodology Principles (some provenance relevance):**
- 3-layer architecture (Binary Gates -> Structured Judgment -> Free Perception)
- 7 binary gates as quality assurance definition (GATES.md -- the WHAT that gets checked)
- 28 PA questions as the perceptual audit taxonomy (PROTOCOL.md Section 5)
- 23 anti-patterns as the failure mode catalog (PROTOCOL.md Section 8)
- The Sovereignty Principle and Temporal Firewall (PROTOCOL.md Sections 7, 3)
- Cold Look protocol as the "react before you know" methodology
- OD benchmark's 10 transferable patterns (od-benchmark.md Section E)

### Recommendation: Citation, Not Embedding

The provenance chain should capture Type B at the **citation level** -- enough for CD to understand:
1. The audit methodology that validated AD explorations
2. The quality assurance gates that AD fixes passed
3. The perceptual audit taxonomy (28 questions) that generated the findings

**What to add to provenance:**
- A 1-paragraph note in `AD-AUDIT-SYNTHESIS.md` or `HANDOFF-AD-TO-CD.md` acknowledging the skill evolution and pointing to the analysis files
- The 7 gate names (not their full definitions) as a quality assurance summary
- The 3-layer architecture name as the methodology label

**What NOT to add to provenance:**
- The full failure analysis (7 interventions, root causes, time costs)
- The OD benchmark comparison details
- Agent prompt templates
- Playwright management protocols
- Team topology recommendations

### Rationale

The provenance chain tracks WHAT was discovered and WHY decisions were made. The skill evolution tracks HOW agents were organized to do the discovering. These are different concerns:

- **Provenance question:** "What did the AD audit find?" -> AD-AUDIT-SYNTHESIS.md answers this with 47 actionable items
- **Skill evolution question:** "How should we run the next audit better?" -> The skill files answer this

The provenance chain already correctly captures the audit OUTPUTS (findings, fixes, verdicts). The skill evolution adds process learning that improves future audit INPUTS (better prompts, better gates, better team structure). Process learning lives in tooling, not in provenance.

**Analogy:** A scientific paper cites its methodology ("We used PCR with the following parameters...") but does not embed the lab manual for PCR. The lab manual is infrastructure. The results are provenance.

---

## Question 2: Should CD Know About the Skill Evolution?

### Yes, But Minimally

CD needs to know three things from the skill evolution:

**1. The audit methodology exists and has been validated.**
CD should know that the perceptual audit skill has been redesigned (v3) based on AD execution experience. This gives CD confidence that future audits will be more reliable than the AD audit was initially.

**2. The 7 binary gates define what "audited" means.**
When CD's HANDOFF-AD-TO-CD says "audited by 24+ agents," CD should understand what quality gates those audits passed. The gate names (not definitions) provide this:
- Gate 1: Playwright alive
- Gate 2: Screenshots exist
- Gate 3: Cold Look locked
- Gate 4: Perceptual language clean
- Gate 5: Systemic synthesis complete
- Gate 6: Fix trigger activated
- Gate 7: Independent verification

**3. The 3-layer architecture defines what "perceptual audit" means.**
CD inherits the methodology label: Layer 1 (Binary Gates) -> Layer 2 (Structured Judgment) -> Layer 3 (Free Perception). This tells CD that the audit was not just rule-checking but a structured perceptual evaluation.

### What CD Does NOT Need

- The 7 failure interventions (these are past mistakes, not forward constraints)
- The OD vs AD benchmark details (historical comparison, not CD-relevant)
- Agent prompt templates (tooling, not methodology)
- Team topology recommendations (infrastructure for the audit lead, not for CD builders)
- Playwright contention strategies (operational detail)
- Timing estimates and rework projections

### How to Communicate to CD

Add a brief section to the existing `HANDOFF-AD-TO-CD.md` or create a note in the AD-AUDIT-SYNTHESIS that says:

```
AUDIT METHODOLOGY NOTE:
AD explorations were audited using the v3 Perceptual Audit Skill
(~/.claude/skills/perceptual-auditing/). The audit methodology uses a
3-layer architecture (Binary Gates -> Structured Judgment -> Free Perception)
with 7 mandatory binary gates, 28 perceptual questions, and independent
verification. The skill was redesigned after AD execution based on failure
analysis of 7 human interventions. Full analysis:
explorations/axis/_perceptual-audit/_skill-evolution/SYNTHESIS.md
```

This is sufficient. CD agents running future audits will read the skill files directly (they live in `~/.claude/skills/`). CD agents doing exploration builds do not need audit methodology details.

---

## Question 3: Is the Skill Evolution a Provenance Artifact or Tooling?

### Primarily Tooling, With One Provenance-Adjacent Component

**The skill evolution analysis files are TOOLING.**

They document how to improve the audit process. They do not document design findings, research discoveries, or pipeline decisions. They belong in the `_skill-evolution/` directory (which is already correctly placed under `explorations/axis/_perceptual-audit/`, not under `provenance/`).

The analysis files are analogous to:
- MEMORY.md (process learning, not provenance)
- WORKFLOW-METACOGNITION-ANALYSIS.md (meta-analysis, not provenance)
- The 1,314-line execution plan (operational, not provenance)

**The skill files themselves (GATES.md, PROTOCOL.md, TEAM.md) are TOOLING.**

They are operational instructions for Claude instances. They live in `~/.claude/skills/` which is infrastructure, not the knowledge product.

**One provenance-adjacent component: The 10 OD-transferable patterns.**

The od-benchmark.md Section E.1 identifies 10 patterns transferred from OD to the skill. These patterns are methodology decisions that COULD be considered part of the audit provenance -- they explain WHY AD's audit methodology evolved. However, they are more precisely "methodology provenance" (how the tool evolved) rather than "design provenance" (what was discovered about the design system).

### Classification

| Artifact | Classification | Location | Provenance Chain? |
|----------|---------------|----------|-------------------|
| failure-analysis.md | Tooling (process post-mortem) | _skill-evolution/ | NO -- reference only |
| od-benchmark.md | Tooling (methodology comparison) | _skill-evolution/ | NO -- reference only |
| skill-redesign.md | Tooling (architecture rationale) | _skill-evolution/ | NO -- reference only |
| team-structure.md | Tooling (operational blueprint) | _skill-evolution/ | NO -- reference only |
| SYNTHESIS.md | Tooling (synthesis of above) | _skill-evolution/ | NO -- cite as methodology source |
| GATES.md | Tooling (skill file) | ~/.claude/skills/ | NO -- operational |
| PROTOCOL.md | Tooling (skill file) | ~/.claude/skills/ | NO -- operational |
| TEAM.md | Tooling (skill file) | ~/.claude/skills/ | NO -- operational |
| AD audit reports (6) | Provenance | _perceptual-audit/AD-*/ | YES -- already captured in AD-AUDIT-SYNTHESIS |
| AD fix reports (6) | Provenance | _perceptual-audit/AD-*/ | YES -- already captured in AD-AUDIT-SYNTHESIS |

---

## Question 4: Should the Provenance Chain Reference Skill Files in ~/.claude/?

### Reference Yes, Link Cautiously, Summarize Minimally

**The problem with linking to ~/.claude/skills/:**
1. The path is user-specific (`~/.claude/` expands to `/Users/spacewizardmoneygang/.claude/`)
2. Skill files are OUTSIDE the git repository -- they won't be version-controlled alongside provenance
3. Skill files can be updated independently of the provenance chain (skill v3 today, v4 tomorrow)
4. The provenance chain assumes all referenced files are within the repository

**The problem with NOT referencing them:**
1. CD won't know the audit methodology exists as a formal skill
2. Future audit leads won't know the skill files exist
3. The connection between "AD was audited" and "here's how to audit CD" is lost

### Recommendation: Reference by Name, Not by Path

Add to provenance documents (AD-AUDIT-SYNTHESIS or HANDOFF-AD-TO-CD) a methodology reference:

```
AUDIT METHODOLOGY:
Skill: Perceptual Auditing v3
Files: GATES.md, PROTOCOL.md, TEAM.md
Location: Claude skill directory (perceptual-auditing/)
Architecture: 3-layer (Binary Gates -> Structured Judgment -> Free Perception)
Gates: 7 mandatory (Playwright Alive, Screenshot Exists, Cold Look Locked,
       Perceptual Language, Systemic Synthesis, Fix Trigger, Independent Verify)
Questions: 28 (PA-01 through PA-28, organized in 3 tiers)
Anti-patterns: 23 (AP-01 through AP-23)

For skill evolution analysis:
  explorations/axis/_perceptual-audit/_skill-evolution/SYNTHESIS.md
```

This references the skill by NAME and STRUCTURE (stable identifiers) rather than by file path (unstable, user-specific). Future agents can locate the skill by name through Claude's skill discovery mechanism.

### Do NOT Copy Skill Content Into Provenance

Summarizing GATES.md inside the provenance chain would create a synchronization problem: if the skill is updated for CD, the provenance summary would become stale. The provenance chain should cite, not duplicate.

---

## Question 5: Where Is the Boundary Between Skill Infrastructure and Audit Methodology Documentation?

### The Boundary Is Clear: Operational vs. Declarative

**Skill Infrastructure (belongs in ~/.claude/skills/):**
- HOW to run an audit (agent prompts, team topology, Playwright management)
- HOW to validate gates (file existence checks, grep patterns, screenshot counts)
- HOW to manage state (FIX-STATE.md tracking, agent shutdown protocols)
- HOW to handle failures (respawn logic, failure prefixes, maximum retries)
- HOW to manage Playwright (sequential access, animation disabling, font loading)

**Audit Methodology Documentation (COULD belong in provenance chain):**
- WHAT constitutes a perceptual audit (28 questions, 23 anti-patterns)
- WHAT gates define quality (7 gate definitions as requirements, not procedures)
- WHAT principles govern the audit (Sovereignty Principle, Temporal Firewall, Dual Severity Track)
- WHAT the audit produces (verdict taxonomy: SHIP/SHIP WITH CONCERNS/DO NOT SHIP)
- WHAT contamination means (CSS terms in perceptual findings)

### The Current Architecture Is Correct

The skill evolution analysis correctly lives in `explorations/axis/_perceptual-audit/_skill-evolution/` -- it is an exploration artifact, not a provenance artifact. The skill files correctly live in `~/.claude/skills/` -- they are operational tooling.

The provenance chain correctly captures the audit RESULTS:
- `AD-AUDIT-SYNTHESIS.md` contains the synthesized audit findings
- `AD-outbound-findings.md` contains the formal AD-F findings
- `HANDOFF-AD-TO-CD.md` references the audit completion

### What's Missing (Minor)

The provenance chain does NOT currently document the audit METHODOLOGY. This is a small gap:

1. `AD-AUDIT-SYNTHESIS.md` says WHAT was found but not HOW the audit was structured
2. `HANDOFF-AD-TO-CD.md` says "audited by 24+ agents" but not what methodology those agents used
3. No provenance document explicitly names the perceptual audit skill or its version

**Recommended fix:** Add a "Methodology" section (5-10 lines) to `AD-AUDIT-SYNTHESIS.md`:

```
## AUDIT METHODOLOGY

AD explorations were audited using the Perceptual Audit Skill (v2, later
redesigned to v3 based on AD execution lessons). The methodology uses:
- 28 perceptual questions (PA-01 to PA-28) across 3 tiers
- 23 anti-patterns (AP-01 to AP-23) as failure mode detection
- Dual severity track (Rule + Perception)
- Sovereignty classification (ALWAYS-LOCKED / LOCKED / CHALLENGEABLE)
- Cold Look protocol (temporal firewall: perception before analysis)

The skill was redesigned after AD execution into a 3-layer architecture
(Binary Gates -> Structured Judgment -> Free Perception) with 7 mandatory
gates. Analysis: explorations/axis/_perceptual-audit/_skill-evolution/SYNTHESIS.md
```

This is the minimum viable provenance entry. It tells CD:
1. The methodology has a name and version
2. The methodology has structure (28 questions, 23 anti-patterns, etc.)
3. The methodology was improved based on AD's experience
4. Where to find the full analysis if needed

---

## Summary of Recommendations

| Question | Answer | Action Required |
|----------|--------|-----------------|
| 1. How much in provenance? | Citation only, not embedding | Add 5-10 line methodology section to AD-AUDIT-SYNTHESIS |
| 2. Should CD know? | Yes, minimally (3 things) | Add audit methodology note to HANDOFF or AUDIT-SYNTHESIS |
| 3. Provenance artifact or tooling? | Primarily tooling | No reclassification needed; current locations are correct |
| 4. Reference skill files? | By name, not by path | Use "Perceptual Auditing v3 (GATES.md, PROTOCOL.md, TEAM.md)" |
| 5. Infrastructure vs methodology boundary? | Clear: operational vs declarative | Add methodology documentation to provenance (5-10 lines) |

### The Fundamental Principle

The provenance chain tracks WHAT was discovered and WHY.
The skill evolution tracks HOW to discover better next time.
These are complementary but distinct concerns.

The skill evolution is valuable INFRASTRUCTURE that improves future audit quality. It is not PROVENANCE that documents design system knowledge. The provenance chain should cite the skill as its methodology source, the same way a research paper cites its instruments without embedding the instrument manual.

### What This Means for AD Remediation Scoping

The skill evolution analysis files (5 files, ~3,735 lines) and skill files (3 files, ~2,093 lines) represent ~5,828 lines of content that does NOT need to enter the provenance chain. This is significant for remediation scoping: the skill evolution is ALREADY complete and correctly located. The only remediation action is adding a 5-10 line methodology citation to the existing provenance documents.

This is a LOW-effort, LOW-risk remediation item. Compare to the provenance gaps that require new formal documents (convention specs, finding registries, synthesis documents) -- those are HIGH-effort items. The skill-provenance boundary is clean.

---

## Appendix: Cross-Reference to Other Remediation Analyses

This analysis intersects with:
- **Gap analysis (Task #1):** The missing methodology citation is a provenance gap, but MINOR compared to the 23 structural gaps
- **Convention extraction (Task #2):** The skill's 28 PA questions and 23 anti-patterns are NOT conventions -- they are audit tooling. Conventions come from the audit RESULTS, not the audit methodology.
- **Dark matter cataloging (Task #3):** The skill files in ~/.claude/ are dark matter from CD's perspective (outside the repo). The methodology citation brings them into the light without requiring relocation.
- **CD surface mapping (Task #4):** CD agents will read HANDOFF-AD-TO-CD which currently does NOT mention the skill. The methodology citation fixes this.
- **OD benchmark (Task #5):** The OD provenance chain ALSO does not document its audit methodology (17-agent granular audit). This is a systemic gap across stages, not AD-specific.

---

*Analysis complete. 8 files read (~8,560 lines). 5 questions answered. Primary finding: the skill evolution is tooling, not provenance. The provenance chain needs only a 5-10 line methodology citation. Current file locations are correct.*
