# Peripheral File Triage for /deep-build Orchestrator

**Agent:** File Triage (Opus 4.6)
**Date:** 2026-02-28
**Scope:** 26 files across 3 peripheral directories (11,800 lines total)
**Build target:** TypeScript deterministic orchestrator wrapping `claude -p` CLI calls

---

## Method

Read each file (100+ lines), evaluated against what the build plan actually needs:
- TypeScript interfaces, state schemas, prompt templates, pipeline sequencing
- `claude -p` invocation patterns, flag combinations, response parsing
- File loading manifests, corpus rotation, token budgets
- PA cycle architecture, gate runner integration, routing logic

Everything else -- creative philosophy, handoff tissue theory, extraction epistemology, relay chain math -- is **conceptual exploration that preceded the deterministic orchestration design** and has been SUPERSEDED by the 9 source docs in `_deterministic-orchestration/`.

---

## 1. _window-design/ (5 files, 3,343 lines)

| File | Lines | Verdict | What's extractable | What's superseded |
|------|-------|---------|-------------------|-------------------|
| `12-window-1-design.md` | 477 | **PARTIAL** | W1 file manifest (lines 14-21): exact files + paths + token estimates for TC derivation window. Token budget breakdown (lines 46-57). Phase descriptions (lines 63-128). | The 4-window architecture is superseded by the orchestrator's pipeline (56 corpus integration passes + PA cycles). W1's "creative journey" narrative is conceptual, not implementable. |
| `12a-window-1-corpus-strategy.md` | 361 | **NOISE** | Nothing. | Entire document argues why Window 1 should NOT load creative corpus. This philosophical question is RESOLVED in the build plan -- the orchestrator controls exactly what each `claude -p` call receives. The corpus strategy is hardcoded in `corpus.ts`, not decided at runtime. |
| `13-window-2-design.md` | 988 | **PARTIAL** | W2 file manifest (lines 94-107): builder receives conviction brief + content + world desc + mechanism catalog + components CSS + tokens + case study + mechanism combinations. Token budget (lines 111-129). | The "reconciliation" philosophy (Priority 1/2/3), calibration theory, and framing prose are superseded. The build plan's prompt templates (doc 07) already specify what each builder pass receives. The file manifest is PARTIALLY useful for cross-checking doc 07's template variables. |
| `14-window-3-4-design.md` | 860 | **PARTIAL** | Screenshot protocol (lines 29-65): force-visible override, viewport sizes, scroll-through increments, file size validation. Gate classification (lines 73-89): 14 REQUIRED + 1 RECOMMENDED + 14 ADVISORY. PA auditor input spec (lines 99-133): what each auditor receives and does NOT receive. Weaver input spec (lines 142-150+). Question assignment table (lines 128-133). W4 REFINE builder input spec. | The 5-auditor count is superseded -- build plan uses 9 (8 parallel + 1 integrative). Creative philosophy about cognitive modes is noise. The screenshot protocol details are USEFUL and more specific than doc 05's treatment. |
| `15-handoff-protocol.md` | 657 | **PARTIAL** | The 4-window architecture diagram (lines 26-42) is a clean summary. Transition 1 spec (W1->W2): conviction brief format, 120-line max, framing text. Transition 2 spec (W2->W3): PA isolation rules. Transition 3 spec (W3->W4): Weaver synthesis format. | The "reconciliation" preamble, "what dies" / "what's born" sections, and handoff tissue philosophy are noise. The transition specs are PARTIALLY useful for cross-checking prompt template variables in doc 07. |

### _window-design/ Summary

**2 files NOISE, 3 files PARTIAL.** The useful content is:
1. File manifests with exact paths and token estimates (for cross-checking `corpus.ts` and `assembler.ts`)
2. Screenshot protocol details (force-visible, viewport sizes, validation)
3. PA auditor isolation rules (what they MUST NOT receive)
4. Question assignment table

**Recommended action for implementers:** Do NOT read these files end-to-end. The philosophical content (which is 70%+ of each file) describes the THINKING that led to the orchestrator design, not the design itself. The orchestrator spec docs (00-08) are canonical. Cross-reference these files ONLY if you need to verify a specific detail about file loading or PA isolation that the spec docs don't cover.

---

## 2. _relay-chain/ (9 files, 5,103 lines)

| File | Lines | Verdict | What's extractable | What's superseded |
|------|-------|---------|-------------------|-------------------|
| `01-relay-math.md` | 798 | **NOISE** | Nothing for the build. | The relay chain (20 sequential windows processing 172K lines of creative corpus) is an ABANDONED architecture. The build plan uses 7 corpus subsets x 8 passes with carousel rotation -- a completely different approach. Token budget math per relay window is irrelevant. |
| `02-handoff-accumulation.md` | 676 | **NOISE** | Nothing for the build. | The "sedimentary model" (conviction layer + discovery log, append-only) is conceptual infrastructure for the relay chain. The build plan's conviction layer (doc 02, state schema) is simpler: capped at 10 entries, FIFO merge, ~1,300 tokens max. The accumulation philosophy is superseded. |
| `03-adversarial-review.md` | 454 | **NOISE** | Nothing directly. The adversarial critique of the relay chain (telephone game, cost-benefit, serial bottleneck) is well-reasoned but is a critique of an architecture the build does not use. | The relay chain was abandoned, likely BECAUSE of findings in this review. The cost estimates ($73/build for relay vs $25-35 current) are superseded by the build plan's own estimates ($190-228). |
| `04-conviction-audit.md` | 182 | **NOISE** | Nothing for the build. | Scores 28 files on 7 "conviction lenses." This is a quality audit of the research corpus, not a specification for the orchestrator. The scoring matrix is irrelevant to TypeScript implementation. |
| `05-philosophy-transfer.md` | 413 | **NOISE** | Nothing for the build. Contains interesting analysis of "specification collapse" (how values become rules across handoffs) and the "conviction triple" format (PRINCIPLE/INSTANCE/FLEX). | This is creative handoff theory. The build plan's prompt templates (doc 07) already define what format handoff tissue takes. The philosophical analysis of WHY that format works is background reading, not implementation input. |
| `06-handoff-templates.md` | 1,022 | **PARTIAL** | The 7 linguistic techniques for conviction-carrying reflections (lines 24-39) are extractable IF the implementer is writing prompt templates for the builder's reflection output format. Template A (narrative reflection, lines 64-120) and Template B patterns could inform the `CONVICTION_ADDITION_START/END` marker extraction. | 80%+ is creative writing philosophy. The template structures are partially superseded by doc 07's prompt templates, which are more specific and already include the marker extraction mechanism. |
| `07-accumulation-decay.md` | 461 | **NOISE** | Nothing for the build. | Models how 3 types of information (specific insights, philosophical principles, creative tensions) decay across 20 relay windows. The relay chain is abandoned. The decay analysis does not apply to the build plan's conviction layer (capped at 10 entries, no sequential relay). |
| `08-worldview-reconstruction.md` | 418 | **NOISE** | Nothing for the build. | Analyzes how a fresh context window reconstructs creative understanding from 3 transfer methods (Rule, Justified Rule, Worldview). Interesting research on creative transfer but not implementable as TypeScript code. |
| `09-anti-extraction-prompts.md` | 679 | **PARTIAL** | The "10 Forms of the Extraction Reflex" taxonomy (lines 57-105) is a useful reference for anyone WRITING prompt templates. If the implementer is authoring the 5 prompt templates that doc 07 defines, this file identifies 10 failure modes to avoid. Specific prompt techniques (lines 109+): role assignment, constraint-based framing, concrete reference anchoring. | 60%+ is forensic analysis of the deprecated `research-digest.md` -- an anti-pattern study that is interesting but not build-relevant. The prompt techniques are partially useful but NOT for the TypeScript code -- only for the natural-language prompt content. |

### _relay-chain/ Summary

**7 files NOISE, 2 files PARTIAL.** This entire directory documents an ABANDONED architecture (the relay chain) and its associated philosophical infrastructure. The relay chain was superseded by the corpus integration pipeline (7 subsets x 8 passes) which is specified in the `_deterministic-orchestration/` docs.

**The 2 PARTIAL files** (`06-handoff-templates.md` and `09-anti-extraction-prompts.md`) contain prompt-writing guidance that MIGHT help someone authoring the natural-language content of prompt templates. But the build plan's doc 07 already contains 5 complete templates, so even this value is marginal.

**Recommended action for implementers:** Skip this directory entirely. If you are writing NEW prompt templates beyond what doc 07 provides, skim `09-anti-extraction-prompts.md` lines 57-105 for the extraction reflex taxonomy. Otherwise, nothing here feeds the build.

---

## 3. _corpus-ingestion-ARCHIVED/ (12 files, 3,354 lines)

### Digest Files (6 files, 2,096 lines)

| File | Lines | Verdict | What's extractable | What's superseded |
|------|-------|---------|-------------------|-------------------|
| `research-digest.md` | 271 | **NOISE** | Nothing. | **Self-deprecating:** Opens with a 33-line DEPRECATED header explaining why this file is the anti-pattern. The content (8,400 lines compressed to 235 lines of research findings) is a cautionary example of extraction. Not implementation input. |
| `dd-digest.md` | 304 | **NOISE** | Nothing. | Same pattern. Deprecated. Compressed 6 DD explorations to 262 lines. Preserved as cautionary example. |
| `od-digest.md` | 444 | **NOISE** | Nothing. | Same pattern. Deprecated. 51:1 compression of OD explorations. |
| `ad-digest.md` | 397 | **NOISE** | Nothing. | Same pattern. Deprecated. |
| `cd-digest.md` | 333 | **NOISE** | Nothing. | Same pattern. Deprecated. 60:1 compression. |
| `casestudy-digest.md` | 347 | **NOISE** | Nothing. | Same pattern. Deprecated. 19:1 compression. |

### Distribution Map Files (6 files, 1,258 lines)

| File | Lines | Verdict | What's extractable | What's superseded |
|------|-------|---------|-------------------|-------------------|
| `research-distribution-map.md` | 232 | **PARTIAL** | File-by-file breakdown of 7 research files with per-window assignments (W1, W2, W4) and creative-processing-state descriptions. Could cross-reference against `corpus.ts` subset definitions. | The distribution logic (which file goes to which window) is superseded by the build plan's 7-subset mapping (doc 03). The "processing state" philosophy is noise. |
| `dd-distribution-map.md` | 193 | **PARTIAL** | File-by-file breakdown of 7 DD files with window assignments and per-file rationale. | Same: subset mapping superseded by doc 03. Per-file descriptions marginally useful for understanding WHY files are grouped the way they are. |
| `od-distribution-map.md` | 203 | **PARTIAL** | Same structure for 13 OD files. | Same caveat. |
| `ad-distribution-map.md` | 176 | **PARTIAL** | Same structure for 9 AD files. Key finding: "only 2 of 9 AD files matter" (AD-SYNTHESIS.md and AD-PA-CONVENTIONS.md). | The curation insight (most AD files are pipeline infrastructure, not creative material) could be useful if the corpus subset definitions in doc 03 include AD infrastructure files that should be excluded. |
| `cd-distribution-map.md` | 227 | **PARTIAL** | Same structure for 19 CD files. Identifies 6 HTML artifacts as "core creative intelligence." | Same caveat. |
| `casestudy-distribution-map.md` | 227 | **PARTIAL** | Same structure for 9 case studies. Content-type matching logic (which case study matches which content type). | The content-type matching could be useful for the orchestrator's content analysis pass, which must select case study calibration files. |

### _corpus-ingestion-ARCHIVED/ Summary

**6 digest files = NOISE.** All 6 are explicitly marked DEPRECATED with detailed explanations of why they fail.

**6 distribution maps = PARTIAL.** These contain file-by-file breakdowns that could cross-reference against the build plan's corpus subset definitions (doc 03). The main value: if doc 03's 38 rotating files include any files that the distribution maps identified as "pipeline infrastructure" (not creative material), that's a quality signal worth checking.

**Recommended action for implementers:** Skip the digest files. The distribution maps are worth a QUICK skim (10 min total) to cross-reference doc 03's subset compositions -- specifically to check whether any subset includes files that the distribution maps flagged as low-value infrastructure. This is a validation exercise, not an implementation input.

---

## Cross-Cutting Findings

### Finding 1: The Peripheral Directories Are Pre-History

All three directories document the THINKING that led to the deterministic orchestrator design. The relay chain was an abandoned architecture. The window designs describe a 4-window model that was superseded by the 7-subset x 8-pass pipeline. The corpus digests were deprecated. The deterministic orchestration docs (00-08) are the canonical specs.

**Analogy:** These directories are the architect's sketches. The blueprints are in `_deterministic-orchestration/`. You build from blueprints, not sketches.

### Finding 2: Useful Fragments Are Scattered

The PARTIAL files each contain 10-30% useful content buried in 70-90% philosophy. An implementer who reads them end-to-end will spend hours absorbing creative theory that does not produce TypeScript code. The useful fragments are:

1. **Screenshot protocol** (14-window-3-4-design.md, lines 29-65): Force-visible override, viewport sizes, scroll-through increments, file size validation. More specific than doc 05.
2. **PA isolation rules** (14-window-3-4-design.md, lines 99-133): What auditors MUST NOT receive. Cross-check against doc 05 Section 2.
3. **File manifests with token estimates** (12-window-1-design.md lines 14-21, 13-window-2-design.md lines 94-107): Useful for validating `assembler.ts` token budgets.
4. **Extraction reflex taxonomy** (09-anti-extraction-prompts.md, lines 57-105): 10 failure modes for prompt writing.
5. **Distribution map curation signals** (ad-distribution-map.md, cd-distribution-map.md): Which corpus files are "infrastructure noise" vs "creative material."

### Finding 3: Deletion Recommendation

**Should these directories be deleted or moved before the build starts?**

| Directory | Recommendation | Reason |
|-----------|---------------|--------|
| `_window-design/` | **KEEP but mark SUPERSEDED** | Contains the only detailed screenshot protocol and PA isolation spec. An implementer might need to cross-reference these when building `phase-b.ts`. Add a README: "SUPERSEDED by _deterministic-orchestration/. Cross-reference only for screenshot protocol and PA isolation details." |
| `_relay-chain/` | **MOVE to `_ARCHIVED/` or DELETE** | Contains zero implementation-relevant content. 5,103 lines of abandoned architecture. Any implementer who reads this will be confused about whether the relay chain or the orchestrator is the current design. This is actively misleading. |
| `_corpus-ingestion-ARCHIVED/` | **KEEP as-is** | Already labeled ARCHIVED. Digest files are self-deprecating. Distribution maps have marginal cross-reference value. The ARCHIVED label is sufficient warning. |

---

## Aggregate Statistics

| Directory | Files | Lines | USEFUL | PARTIAL | NOISE |
|-----------|-------|-------|--------|---------|-------|
| `_window-design/` | 5 | 3,343 | 0 | 3 | 2 |
| `_relay-chain/` | 9 | 5,103 | 0 | 2 | 7 |
| `_corpus-ingestion-ARCHIVED/` | 12 | 3,354 | 0 | 6 | 6 |
| **TOTAL** | **26** | **11,800** | **0** | **11** | **15** |

**Zero files are fully USEFUL.** 11 are PARTIAL (10-30% useful). 15 are NOISE.

Estimated useful content across all 26 files: ~800-1,200 lines out of 11,800 (~7-10%).

The build plan's 9 source docs in `_deterministic-orchestration/` (11,253 lines) contain everything needed. These peripheral directories are research archaeology.
