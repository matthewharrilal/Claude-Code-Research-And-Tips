# Gate Runner — Split Architecture (Wave 3)

**This file has been split into 5 operational files per FIX-090 (2026-02-24).**

The monolithic gate runner has been decomposed for maintainability and clarity:

| File | Contents | Lines |
|------|----------|-------|
| `gate-runner-core.js` | All executable Playwright JavaScript code | ~2,929 |
| `gate-runner-preconditions.md` | Text-based pre-build checks (BV-01-04, GR-23-28) | ~83 |
| `gate-runner-spec.md` | Human-readable gate specifications (no code) | ~299 |
| `gate-runner-provenance.md` | History, traceability, wave change logs | ~151 |
| `gate-manifest.json` | JSON table of contents, tier breakdown, execution order | ~343 |

**Preserved original:** `artifact-gate-runner-MONOLITHIC.md` (full 2,411-line document)

**Key changes in Wave 3:**
- GR-23 through GR-28 reclassified as orchestrator decision rules (FIX-094)
- These now live in `artifact-orchestrator.md` Section 7 subsection
- Gate execution manifest template added (FIX-100) in `gate-manifest.json`
- 45 GR gates + 8 BV + 1 utility in gate-runner scope (Playwright + text-executable)
- 6 gates moved to orchestrator scope (text-based pre-build checks)
