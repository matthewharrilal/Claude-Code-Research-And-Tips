# Architecture Design Analysis -- Reports 13, 15, 16, 17

## Date: 2026-02-08
## Agent: architecture-reader

---

## Report 13: Target Topology

### What Shifted in My Mental Model

Before reading this, I expected the remediation to be primarily about creating a few missing documents -- filling obvious gaps. What shifted is the recognition that this is an **information distillation problem**, not a migration problem. The report quantifies it precisely: ~3,200-4,500 new lines from ~32,800 lines of dark matter -- roughly 10-14% extraction yield. This means 86-90% of the dark matter is correctly placed and serves its own purpose; the problem was never that it existed, but that the formal chain didn't acknowledge its existence or extract the essential findings from it. The second major shift: the report reveals that the dark matter isn't random scatter -- it has a taxonomy. 35 files are operational history (build logs, execution journals), 15 files are raw evidence (per-OD audit data, threading graphs), and 8 files are process research (workflow metacognition, retrospectives). Each category has a different relationship to the formal chain: operational history stays in place, evidence gets referenced, and process research is entirely outside the design provenance scope. The chain needs to reference the first two; it can safely ignore the third. This categorical distinction is more useful than any file-by-file assessment.

### Key Architectural Decisions

1. **Distillation over migration:** The formal chain extracts findings and registers them; it does not absorb entire dark matter files. Only 13 of 51 files require ABSORB treatment; 35 stay in place.

2. **6 new files, 10 updates:** The target state requires OD-outbound-findings.md, OD-SYNTHESIS.md, OD-AUDIT-SYNTHESIS.md, HANDOFF-OD-TO-AD.md, EXT-RESEARCH-REGISTRY.md, and organizational-patterns.md as new documents, plus updates to 10 infrastructure files across PIPELINE-MANIFEST, BACKBONE, PATTERN-INDEX, SOUL-DISCOVERIES, anti-pattern registry, RESEARCH-ACTIVE, OD-RESEARCH-GATE, STAGE-HEADER, and two CLAUDE.md navigation files.

3. **Dependency ordering within Stage 3:** The report identifies a strict creation order -- OD-outbound-findings.md first (everything depends on it), then OD-SYNTHESIS and OD-AUDIT-SYNTHESIS in parallel, then HANDOFF-OD-TO-AD last (depends on all three), then STAGE-HEADER and CLAUDE.md last (depend on all files existing).

4. **New OD-F findings (009-012):** The report proposes formalizing insights from OD-002 through OD-005 that were never elevated to finding status. This transforms the finding count from 8 (only from OD-001 and OD-006) to 12 (from all 6 explorations), which corrects an asymmetry where 4 explorations contributed zero formal findings despite containing real insights.

5. **Finding registry architecture:** ~89 dark matter finding IDs organized into 8 families (EXT-CONV, EXT-DENSITY, EXT-TASK, EXT-CONF, EXT-SPAT, EXT-CREATIVE, OD-F, F-E, CA, DEC), each with a specified formal home and registration target. The EXT-RESEARCH-REGISTRY.md is a new structural element that didn't exist in the DD provenance model -- it's an OD-specific innovation.

### Critical Observations

The most striking aspect is Section 6's information flow diagram. It shows the complete chain from 337 research findings through 5 stages to migration, with every CONSTRAINED/GENERATED/ENABLED edge made explicit. The current state has a massive hole at Stage 3 -- the formal chain goes silent between DD and AD. The target state fills this with 7 files and ~90 finding registrations. What surprised me most is the **finding flow quantification**: after remediation, the formal chain goes from covering ~24% of research knowledge to ~75% accessible from the chain. That's a 3x improvement in chain coverage, and the remaining 25% is explicitly categorized as operational/historical rather than "unaccounted for."

The dark matter disposition map (Section 4) reveals that zero files warrant ARCHIVE or DELETE treatment. Every single dark matter file serves a current purpose -- they are either operational records, raw evidence, or process research. This contradicts Report 14's apparent lean toward physical relocation and suggests the handoff document's characterization of a "philosophical disagreement" between Reports 13 and 14 may overstate the tension. Report 13's disposition is actually quite conservative: keep things where they are, but make the chain aware of them through references and finding extraction.

---

## Report 15: Phase Architecture

### What Shifted in My Mental Model

Before reading this, I saw the execution as a straightforward document-creation exercise -- write the missing files, update the stale ones. What shifted is the realization that the execution architecture has a deep **diagnostic-then-build** structure. Phases 1 and 2 (35 minutes, 6 agents) exist solely to build a complete picture of the current state before any construction begins. The finding registry, reference graph, and traversal baseline from Phase 1 feed the dark matter triage in Phase 2, which in turn produces an extraction manifest that feeds the actual construction in Phases 3-4. This means nearly 40% of the wall time is spent understanding the problem before touching it. This is a deliberate design choice: the prior teams (OD builders, OD audit) could proceed with incomplete knowledge because they were creating new artifacts. The remediation team cannot afford that luxury because they are stitching together existing artifacts where every connection must be exact.

The second shift is recognizing the **critical path analysis** as a genuine constraint. The longest path is Phase 0 (5 min) -> Phase 1 (15 min) -> Phase 2 (20 min) -> Phase 3 (25 min) -> Phase 5 (15 min) -> Phase 6 (10 min) = ~90 minutes. Phase 4 (15 min) runs entirely in parallel with Phase 3 and adds zero time to the critical path. This means the 11-agent execution has been optimized to be 31% faster than a serial approach (130 min serial vs 90 min parallel).

### Key Architectural Decisions

1. **Diagnostic-first:** Phases 1-2 build a complete finding registry, reference graph, traversal baseline, and extraction manifest before any construction begins. This prevents the "building blind" failure mode.

2. **No Playwright, no HTTP server:** This is explicitly called out as a design decision. The remediation is pure documentation work -- no visual rendering, no DOM inspection. This simplifies the infrastructure requirements dramatically compared to the audit and fix phases.

3. **Phase 3 and Phase 4 run in parallel:** OD chain construction (new files) and prior-stage corrections (updates to existing infrastructure) share zero files, enabling full parallelism. Agent-3A and Agent-3B can also start in parallel within Phase 3, with Agent-3B's last file (STAGE-HEADER) being the only one that needs to wait for Agent-3A's output.

4. **Single verification agent, strictly sequential:** Phase 5 uses a single agent that must see the complete state. This is a deliberate anti-parallelism decision -- verification cannot be split because it tests cross-file consistency.

5. **Agent prompt templates with binary rules only:** Every agent instruction is binary (YES/NO, DO/DO NOT, EXISTS/DOES NOT EXIST). Zero judgment-based requirements. This directly applies the MEMORY.md principle that "binary rules achieve 100% compliance; judgment rules achieve ~0%."

### Tensions with Other Reports

The primary tension with Report 13 is the **level of detail in the diagnostic phase.** Report 13's Appendix A provides a straightforward execution order (Phases A through E) that assumes the builder already knows what to extract. Report 15 interposes two entire phases (Complete Diagnostic + Dark Matter Triage) that Report 13 treats as already solved by the gap analysis reports themselves. Report 15 effectively says: "The gap analysis reports tell us what SHOULD be done, but agents cannot navigate 15 reports totaling 676KB in real time -- they need pre-processed, machine-readable inputs." This is a sound engineering decision, but it adds 35 minutes and 6 agents to the execution. Whether this overhead is justified depends on whether the census agents produce genuinely new information beyond what the gap analysis reports already contain, or whether they're mostly reformatting existing knowledge.

A subtler tension: Report 13 treats the extraction manifest as implicit in the gap analysis. Report 15 treats it as a formal Phase 2 output that doesn't exist until agents create it. This is a philosophical difference about whether research reports are executable specifications or whether they need an intermediate compilation step.

Report 15 also introduces Phase 4's Agent-4A (Stage 1 + DD fixes) which addresses gaps not in Report 13's scope. Report 13 marks Stage 1 and Stage 2 as "COMPLETE -- No changes needed" in its file manifest, while Report 15 (drawing from Report 12) identifies specific prior-stage corrections needed. This isn't a contradiction but a scope expansion.

### Critical Observations

The risk registry is remarkably well-calibrated. The highest-risk item is correctly identified as Agent-3A (creates the two most structurally important documents, closes the most CRITICAL gaps, has the most complex output format). The mitigation is practical: give it the longest time allocation, check for partial output at the 10-minute mark, and have a recovery protocol that can spawn a replacement for just the HANDOFF if the outbound-findings file was completed before a crash.

The Appendix C (What Cannot Be Automated) reveals 5 judgment decisions that must be made by humans or evaluated by agents against binary proxy criteria. The most consequential is whether OD-F-005 should become Soul Piece #6. The report doesn't dodge this -- it explicitly flags it and proposes that Agent-3A make a recommendation while the human retains final authority.

What concerns me: the Phase 2 extraction agents are expected to fully extract all finding IDs, score data, and decision records from files totaling thousands of lines each. Agent-2B alone processes 15 files including the 1,725-line OD-005-EXTERNAL-RESEARCH.md. The 20-minute time estimate for this phase feels optimistic -- these agents need to not just read but extract structured data from large, heterogeneous documents.

---

## Report 16: Agent Team Topology

### What Shifted in My Mental Model

Before reading this, I expected a team structure similar to the prior audit and fix teams -- a few builders, a verifier, a weaver. What shifted is the recognition that this topology introduces an entirely new architectural layer: **census agents**. The five census-extractors (census-a through census-e) are a novel agent type not seen in any prior team. They don't build, don't verify, don't synthesize -- they only extract structured data from source files and write it to a standard format. This creates a clean separation between data collection (Wave 1) and data consumption (Waves 3-4), mediated by the graph builder (Wave 2) that constructs the adjacency matrix. The census layer means that no chain builder or updater ever reads a raw operational file -- they read only pre-processed extractions. This is a profound architectural choice: it insulates the construction agents from the complexity of the dark matter corpus and gives them a stable, pre-digested input surface.

The second shift is the **wave structure**. Five waves replace the prior teams' simpler parallel-launch model. Wave 1 (5 census agents), Wave 2 (1 graph builder), Wave 3 (3 chain builders), Wave 4 (4 updaters), Wave 5 (traversal tester then verifier). The dependency edges between waves are the real architecture -- Wave 2 cannot start until all 5 census files exist, Wave 3 cannot start until the adjacency matrix exists, Wave 4 cannot start until all 5 chain documents exist. This is a waterfall-within-parallel structure: within each wave, agents run in parallel, but waves are strictly sequential.

The third shift: the file ownership matrix achieves **mathematically proven zero contention**. Every file has exactly one writer agent. The report doesn't just assert this -- it proves it with an explicit ownership table (Section 3) showing which agent writes which file. The only shared file (REMEDIATION-STATE.md) is partitioned into sections with HTML comment markers delimiting Weaver's section from Lead's section.

### Key Architectural Decisions

1. **Census-extraction layer:** 5 specialized extractors partition the dark matter corpus by directory (checkpoints, audit scratchpad, knowledge-architecture, OD inline headers, formal chain). Each produces a standardized extraction file. This is a data pipeline architecture applied to documentation remediation.

2. **Single graph builder as serialization point:** Wave 2 uses only 1 agent because the adjacency matrix requires cross-referencing all 5 census files simultaneously. Splitting this would require a merge step. The report acknowledges this as the single point of failure in the entire topology.

3. **Proven zero-contention file ownership:** Section 3 provides a complete file-to-agent ownership matrix. Chain-a creates 2 files, chain-b creates 2 files, chain-c creates 1 file, and all are in different logical spaces (though some share the same directory). No two agents ever write to the same file.

4. **Crash recovery protocol:** Every agent follows the "file-first" pattern (create skeleton immediately, populate progressively). This means a crash at any point leaves partial output that a replacement agent can continue from. The protocol is differentiated by agent type: census agents have low crash impact (stateless extraction), chain builders have high crash impact (complex document creation), and read-only agents (traversal, verifier) have trivial crash recovery.

5. **Fresh-eyes constraint on traversal tester:** The traversal tester is explicitly forbidden from reading census extractions, checkpoints, or operational files. It reads ONLY the formal provenance chain. This is the reproducibility test: if a fresh agent can reconstruct OD's story from provenance alone, the chain is sufficient.

### Critical Observations

The agent count (17) exactly matches the OD audit team size, which took ~45 minutes. This topology estimates ~77 minutes, which is 70% longer for a comparable agent count. The difference is explained by the additional waves -- the census and graph-building phases add ~24 minutes of serial time that the audit team didn't need (audit agents could proceed with incomplete information; remediation agents cannot).

The prompt templates (Section 7) are exceptionally well-designed. Each template follows the binary-rule principle strictly. The census template says "You do NOT interpret, synthesize, judge, or create. You EXTRACT." The chain builder template says "NO invented findings -- if census data does not support a finding, do NOT include it." The updater template provides exact staleness markers to search-and-replace ("TBD" -> actual data, "PENDING" -> actual status, "IN PROGRESS" -> "COMPLETE"). These are the kind of instructions that achieve 100% compliance because they are entirely mechanical.

One tension I notice: the report gives census-b 29 files to read, explicitly noting this "exceeds ideal 10" and justifying it as "acceptable for extraction-only reads." This feels like a compromise -- the principle says >12 risks context exhaustion, and 29 is more than double that threshold. The justification (it's reading, not writing) is reasonable but untested against the prior team experience.

The handling of the PIPELINE-MANIFEST contention risk between updater-b and updater-d is elegant: updater-d writes its dark-matter-registry content to a SEPARATE staging file, and the Lead appends it to PIPELINE-MANIFEST after updater-b is done. This preserves single-file ownership while acknowledging that both agents need to contribute to the same document.

---

## Report 17: Verification Framework

### What Shifted in My Mental Model

Before reading this, I expected verification to be a checklist of "does file X exist?" checks. What shifted is the recognition that verification here is a **multi-dimensional proof system** with 18 dimensions, 11 categories, and 104 binary items. The framework doesn't just test existence -- it tests traversability (can you follow the chain?), accumulation (do constraints grow monotonically?), reproducibility (can a fresh agent reconstruct knowledge from provenance alone?), information ratio (does the formal chain dominate the dark matter?), and cross-stage consistency (do all files agree on the same facts?). This is not a checklist; it is a formal verification specification.

The second shift is the **100% pass rate requirement**. The report explicitly rejects partial credit: "The chain is either structurally sound or it is not. '95% pass' means there are structural gaps." This is an extremely high bar. With 104 items, even a single failure means the chain has a proven structural deficiency. The rationale is sound -- a formal system with "acceptable gaps" is an informal system pretending to be formal -- but it also means that verification becomes the hardest gate in the entire execution.

The third shift: the framework reveals that 50% of items are fully automatable (file existence, string matching, line counting), 41% require agent reading comprehension, and only 6% require genuine judgment. This means 94% of verification can be executed by agents following clear criteria. The 6 judgment-based items (quality of dialect documentation, adequacy of formalization protocol, etc.) are the only items where verification quality depends on the verifier's skill rather than their diligence.

### Key Architectural Decisions

1. **18 verification dimensions:** The original 13 from Report 07 (forward/backward/cross traversability, accumulation, finding lifecycle, score justification, decision documentation, negative space, emergence tracking, soul evolution, anti-pattern evolution, audit integration, reproducibility) plus 5 new dimensions (dark matter elimination, finding registry completeness, information ratio, auxiliary file assessment, cross-stage consistency). The new dimensions specifically address the dark matter problem that the original 13 didn't cover.

2. **Execution phasing:** The 104 items are ordered into 5 verification phases with explicit dependencies. Phase 1 (Census/Inventory, Categories A+B) must complete before Phase 2 (Stage Completeness, Category C), which must complete before Phase 3 (Traversal Testing, Categories D+E+F). This mirrors the remediation's own diagnostic-first philosophy -- you cannot test traversal without first confirming the files exist, and you cannot confirm files exist without first inventorying the universe.

3. **Total verification time: 3.5-4.5 hours.** This is longer than the entire remediation execution (~90 minutes). The verification is designed to be more thorough than the build, which makes sense: verification must check everything the build produced plus everything it was supposed to produce but might have missed.

4. **Failure protocol with severity-based fix sequencing:** If resources are limited, fix Category C failures first (missing files), then B (finding ID integrity), then H (infrastructure consistency), then D (forward traversability), then A (document universe), then everything else. This ordering reflects the dependency structure: missing files block everything, corrupted IDs corrupt everything that references them, stale registries propagate wrong information.

5. **Appendix B (GAP Report Cross-Reference):** Every one of the 33 gaps from Report 07, every finding from Reports 05 and 10-12, maps to specific checklist items. This achieves complete traceability between the diagnostic reports and the verification specification.

### Critical Observations

The most striking items are in Category J (Reproducibility). J-03 asks: "Read ONLY provenance/stage-3-organization-od/ -- can you answer: how many explorations? what scores? what findings? what was audited? what does AD need?" This is the ultimate test of the remediation's success. Currently, reading only the OD provenance directory yields almost nothing (3 stale files that say OD hasn't begun). After remediation, it should yield the complete OD story. The gap between current state and target state for this single item captures the entire problem.

I notice the verification framework itself has a tension: it estimates 3.5-4.5 hours for execution with 9 agents, but the remediation architecture (Report 15) allocates only 15 minutes for verification with 1 agent. Report 15's Phase 5 is NOT the full 104-item verification -- it's a streamlined traversal + gap closure check. The full 104-item verification framework described here appears to be a separate, post-remediation validation that would run after the remediation is committed. This distinction is important but not explicitly stated in either report. Report 15's Phase 5 verifier tests structural completeness; Report 17's framework proves structural soundness. These are different levels of assurance.

The 6 judgment-based items (C-05, F-03, F-04, F-05, K-01, K-06) are interesting because they're the only items that could have PASS/FAIL disagreement between different verifiers. Item K-06 ("Whether protocol truly prevents retroactive-only formalization") is the most genuinely subjective -- it asks whether a document adequately addresses a behavioral problem that has no purely structural solution. This is the one item where I'd expect the most debate.

The information ratio dimension (Dimension 16) has a fascinating quantitative test: "Formal chain must contain > 50% of (A + B) combined." Currently the ratio is ~19% formal / ~60% dark matter. The remediation creates ~3,200-4,500 new lines, which would push formal content to ~14,000-15,100 lines vs ~32,800 dark matter. That's still less than 50% by raw line count. The PASS condition is met only because the test says "formal chain lines vs UNREFERENCED dark matter lines" -- after referencing, much of the dark matter is no longer "unreferenced." This is a nuanced interpretation that depends on what "referenced" means.

---

## Cross-Report Synthesis

### How These Four Reports Form a Coherent Architecture

These four reports form a layered system: Report 13 (Target Topology) defines **what done looks like** -- the exact file manifest, finding flows, and dark matter dispositions. Report 15 (Phase Architecture) defines **how to get there** -- the 6-phase execution plan with dependency graph, timing, and agent allocation. Report 16 (Agent Team Topology) defines **who does what** -- 17 agents across 5 waves with proven-zero-contention file ownership. Report 17 (Verification Framework) defines **how to prove it worked** -- 104 binary items across 18 dimensions with 100% pass required.

The alignment is remarkably tight. Report 13's 6 new files map exactly to Report 15's Phase 3 agents (chain-a creates 2, chain-b creates 2, chain-c creates 1, plus organizational-patterns.md). Report 13's 10 infrastructure updates map to Report 15's Phase 4 agents (updater-a through updater-d). Report 13's 33 gap resolution matrix maps to Report 16's gap coverage table with identical gap-to-agent assignments. Report 17's 104 items cover every gap with explicit cross-references in Appendix B.

The architecture has a clear philosophy: **front-load understanding, parallelize execution, serialize verification.** Phases 0-2 build complete knowledge. Phase 3-4 execute in parallel. Phase 5 verifies sequentially. This is the opposite of the "build fast, fix later" approach -- it's "understand completely, build correctly, prove it."

### Key Tensions Between Reports

1. **Report 13 vs Report 15 on diagnostic necessity:** Report 13 assumes the gap analysis reports (01-17) provide sufficient input for builders. Report 15 argues that agents cannot navigate 676KB of analysis in real-time and need pre-processed census extractions. This adds 35 minutes and 6 agents. The tension is unresolved -- it depends on whether the census agents produce genuinely novel data or mostly reformat existing reports.

2. **Report 15 vs Report 17 on verification scope:** Report 15 allocates 15 minutes for a 1-agent verification phase. Report 17 designs a 3.5-4.5 hour, 9-agent verification framework. These are implicitly two different things (quick structural check vs comprehensive proof), but the relationship between them is never made explicit. Does the remediation end with Report 15's Phase 5, and then Report 17's framework runs separately? Or does Phase 5 attempt to cover the 104 items in abbreviated form?

3. **Report 16 census-b file count vs the "5-10 sweet spot" principle:** Census-b reads 29 files, nearly 3x the upper bound of the proven sweet spot. The justification (extraction-only, uniform format) is reasonable but untested. If census-b hits context exhaustion at file 20, the entire Wave 1 output is incomplete, which blocks everything downstream.

4. **Report 13 vs Report 16 on EXT-RESEARCH-REGISTRY.md:** Report 13 specifies this as a new file in the formal provenance chain. Report 16 doesn't assign it to any agent as a creation target -- it treats EXT-* finding registration as a subsection within chain-a's OD-outbound-findings.md. This is either a simplification decision by Report 16 or a gap in its coverage. If the intent is for EXT-RESEARCH-REGISTRY.md to be a separate document, no agent is assigned to create it.

### The Biggest Risk I See in This Architecture

The single biggest risk is **chain-a failure**. Chain-a (OD-outbound-findings + HANDOFF-OD-TO-AD) is on the critical path, creates the two most structurally important documents, closes the most CRITICAL gaps, and is a dependency for updater-b and updater-d. If chain-a runs out of context before completing both documents (a real risk given the complexity: OD-outbound-findings needs 12 sections including a meta-pattern analysis, consumption matrix, and anti-pattern findings, followed by HANDOFF-OD-TO-AD needing 11 sections matching the DD template), the entire remediation pipeline stalls. Report 15 and Report 16 both identify this risk and both propose the same mitigation (split recovery: if outbound-findings completes but HANDOFF doesn't, spawn a recovery agent for just the HANDOFF). But the mitigation itself introduces a new risk -- the recovery agent must produce a HANDOFF that is structurally consistent with the outbound-findings it didn't write. The data consistency between two documents written by two different agents is harder to guarantee than two documents written by one agent.

### Questions This Raises

1. **Is the census layer justified?** The 5 census agents add 12 minutes of wall time and consume significant API resources. They reformat data that already exists in the gap analysis reports. Is the pre-processed extraction genuinely easier for chain builders to consume than the source reports? Would it be faster to give chain builders direct access to the source files with specific line-number references from the gap analysis?

2. **Where does EXT-RESEARCH-REGISTRY.md get created?** Report 13 specifies it as a new file. Report 15 Phase 3 doesn't list it as a Phase 3 output. Report 16 doesn't assign it to any agent. Either it's been absorbed into OD-outbound-findings.md's external research section, or it's a gap in the execution plan.

3. **How does the 104-item verification relate to the 15-minute Phase 5?** Is Phase 5 a subset? A preview? An entirely different check? The gap between 15 minutes (1 agent) and 3.5 hours (9 agents) is so large that these cannot be the same activity. The architecture needs explicit guidance on which verification runs when.

4. **What happens to the census extraction files after remediation?** Reports 15 and 16 specify that these files (extract-checkpoints.md, etc.) are committed as part of Wave 1. But Report 13's target topology doesn't include them in the clean chain. Are they dark matter from the moment they're created? Should they be in `_provenance-gap-analysis/remediation/` and considered part of the analysis record?

5. **Is the OD-F-005 soul piece decision genuinely a human decision, or can it be made structurally?** Report 16 proposes binary proxy criteria: "Does it transcend a single exploration? Does it describe a perceptual truth? Is it falsifiable? If all 3 = YES, register as soul piece." This converts a judgment call into a binary rule. But the criteria themselves were chosen by the report author, not by the human. The human might have different criteria. This feels like a case where the binary-rule principle is being applied at the wrong level of abstraction -- the decision of what criteria to use is itself a judgment call.
