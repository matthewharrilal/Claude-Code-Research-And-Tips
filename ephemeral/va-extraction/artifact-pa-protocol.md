# PA Protocol — Split Architecture (Wave 3)

**This file has been split into 5 operational files per FIX-091 (2026-02-24).**

The monolithic PA protocol has been decomposed for information isolation and clarity:

| File | Contents | Lines | Audience |
|------|----------|-------|----------|
| `pa-questions.md` | 69 PA question definitions (PA-01–PA-77) | ~412 | PA Auditors (assigned subset only) |
| `pa-deployment.md` | 9-auditor assignments, screenshot protocol, fresh-eyes rules | ~237 | Orchestrator |
| `pa-weaver.md` | Weaver protocol, verdicts, calibration (INFORMATION ISOLATION) | ~376 | Weaver ONLY |
| `pa-guardrails.md` | Auditor constraints, scoring anchors | ~151 | PA Auditors |
| `pa-manifest.md` | Per-run PA tracking template | ~89 | Orchestrator |

**Preserved original:** `artifact-pa-protocol-MONOLITHIC.md` (full 1,141-line document)

**Key changes in Wave 3:**
- PA-05 scoring responsibility moved to Weaver (FIX-083), not Integrative Auditor
- Information isolation enforced: Weaver protocol separated from auditor instructions
- Fresh-eyes principle codified in pa-guardrails.md
- 9-auditor deployment with thematic question groupings (A through I)
- Screenshot pre-capture pattern for zero Playwright contention
