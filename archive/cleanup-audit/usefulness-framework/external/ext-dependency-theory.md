# External Research: Dependency Graph Theory Applied to Codebases

**Researcher:** usefulness-framework-researcher (external)
**Date:** 2026-02-13
**Task:** Map graph theory centrality metrics to file dependency analysis

---

## EXECUTIVE SUMMARY

Graph theory provides formal mathematical frameworks for identifying critical vs. expendable files in codebases through **centrality metrics**. The key insight: files with high **betweenness centrality** (bridging nodes) and **eigenvector centrality** (connected to important nodes) are load-bearing, while **degree-zero nodes** (no inbound/outbound edges) are candidates for removal.

**Application to this project:**
- **12 hub documents** with 8+ inbound refs = high PageRank/eigenvector centrality
- **DD-006** with 20+ refs = highest betweenness (critical bridge)
- **734 threaded files** = known dependency graph edges (BUILT ON/CONSUMED BY)
- **Root folders** with 0 threading headers = isolated subgraph (orphan risk)
- **Underscore directories** = absorbed archives (low betweenness, high historical value)

**Key Finding:** Traditional dead code detection (static analysis) focuses on CODE EXECUTION, but this project needs **KNOWLEDGE GRAPH** metrics — files are valuable not just for what they do, but for what they PROVE (audit trails, synthesis evidence, provenance chains).

---

## 1. CENTRALITY METRICS OVERVIEW

### 1.1 Degree Centrality

**Definition:** The number of direct connections (edges) a node has.

**Formula:**
```
C_D(v) = deg(v) / (n - 1)
```
where `deg(v)` = number of edges, `n` = total nodes

**Application to Files:**
- **High in-degree** = many files reference this one (hub document)
- **High out-degree** = this file references many others (aggregator/synthesis)
- **Zero degree** = isolated file (orphan candidate)

**Source:** [Social network analysis 101: centrality measures explained](https://cambridge-intelligence.com/keylines-faqs-social-network-analysis/)

### 1.2 Betweenness Centrality

**Definition:** The number of times a node lies on the **shortest path** between other nodes. Identifies "bridge" nodes whose removal would disconnect parts of the graph.

**Key Property:** High betweenness = **critical bottleneck**. Removing this node increases average path length or fragments the graph.

**Application to Files:**
- Files with high betweenness are **load-bearing** — they connect different subsystems
- Example: `RESEARCH-SYNTHESIS.md` connects R1-R5 to all exploration phases
- Example: `PIPELINE-MANIFEST.md` connects research → T1 → DD → OD → AD → CD

**Why It Matters:** A file can have low degree but HIGH betweenness if it's the ONLY path between two clusters. These are the most dangerous to delete.

**Source:** [Betweenness Centrality and Other Essential Centrality Measures in Network Analysis](https://memgraph.com/blog/betweenness-centrality-and-other-centrality-measures-network-analysis)

### 1.3 Eigenvector Centrality

**Definition:** A node's influence based on the **quality of its connections**, not just quantity. Being connected to important nodes increases your centrality.

**Key Property:** Recursive — a node is important if it's connected to OTHER important nodes.

**Application to Files:**
- Hub documents have high eigenvector centrality (connected to many other hubs)
- Example: `SOURCE-OF-TRUTH-REGISTRY.md` is referenced by multiple hub documents
- Example: Research files (R1-R5) are referenced by ALL exploration phases

**Why It Matters:** A file with 3 inbound refs from hub documents is MORE critical than a file with 10 refs from low-value files.

**Source:** [Social network analysis 101: centrality measures explained](https://cambridge-intelligence.com/keylines-faqs-social-network-analysis/)

### 1.4 PageRank

**Definition:** A variant of eigenvector centrality with a **damping factor** (models a "random surfer" who sometimes jumps to random pages instead of following links).

**Formula:**
```
PR(A) = (1-d) + d * Σ(PR(T_i) / C(T_i))
```
where `d` = damping factor (typically 0.85), `T_i` = pages linking to A, `C(T_i)` = outbound links from T_i

**Key Property:** Nodes receiving links from high-PageRank nodes get higher scores.

**Application to Files:**
- Research files (R1-R5) have high PageRank — they're referenced by many synthesis docs
- `DD-F-006` (fractal) has very high PageRank — referenced across 20+ files
- Files referenced only by low-PageRank files have low value

**Why It Matters:** PageRank distinguishes between "popular" (many refs) and "authoritative" (refs from important files).

**Source:** [Social network analysis 101: centrality measures explained](https://cambridge-intelligence.com/keylines-faqs-social-network-analysis/)

---

## 2. DEAD CODE DETECTION TECHNIQUES

### 2.1 Static Analysis

**Method:** Parse source code to build a **call graph** or **import graph**, then identify unreachable nodes.

**Process:**
1. Identify entry points (main.ts, index.ts, etc.)
2. Follow all imports/calls recursively
3. Mark reachable nodes
4. Flag unreachable nodes as dead code

**Tools:**
- **Knip** (JavaScript/TypeScript) — traces from entry points, reports unused files + dependencies
- **Meta's SCARF** — builds augmented dependency graph, detects unreachable subgraphs
- **IntelliJ dependency analyzer** (JVM) — visualizes dependencies, finds orphans

**Strengths:**
- Automated, fast, scales to large codebases
- Detects truly unreachable code (never imported, never executed)

**Weaknesses:**
- Only detects EXECUTION reachability, not SEMANTIC value
- Can't distinguish between "dead" and "archived but valuable"
- Generates false positives for dynamic imports, reflection, config files

**Sources:**
- [npx knip: The Smart Way to Detect Dead Code](https://javascript.plainenglish.io/npx-knip-the-smart-way-to-detect-dead-code-in-your-javascript-typescript-projects-6992a007760c)
- [Automating dead code cleanup - Engineering at Meta](https://engineering.fb.com/2023/10/24/data-infrastructure/automating-dead-code-cleanup/)

### 2.2 Dynamic Analysis

**Method:** Run the application with **code coverage** instrumentation, then flag code that's never executed.

**Process:**
1. Instrument code with coverage tracking
2. Run comprehensive test suite or production traffic
3. Identify lines/functions with 0% coverage
4. Flag as potential dead code

**Strengths:**
- Detects code that's DEFINED but never CALLED (even if reachable)
- Catches dead branches, unused parameters, unreachable error handlers

**Weaknesses:**
- Requires representative test coverage or production traffic
- Can miss code that's only executed in rare edge cases
- Not applicable to documentation/knowledge files (no "execution")

**Source:** [How to identify and remove dead code?](https://medium.com/beyond-the-code-by-typo/how-to-identify-and-remove-dead-code-8283b0bf05a3)

### 2.3 Dependency Graph Pruning

**Method:** Build a **full dependency graph**, then apply graph algorithms to identify:
- **Orphaned nodes** (degree = 0)
- **Unreachable subgraphs** (no path from entry points)
- **Cycles** (mutual dependencies that can be deleted together)

**Meta's SCARF Approach:**
1. Build augmented dependency graph (code + business logic)
2. Identify unreachable nodes/subgraphs
3. Detect and delete **cycles** (A depends on B, B depends on A — both can go)
4. Use **transitive reduction** to simplify graph while preserving reachability

**Key Insight:** Analyzing the **complete graph** allows detection of multi-file dead code (entire subsystems that are no longer used).

**Source:** [Automating dead code cleanup - Engineering at Meta](https://engineering.fb.com/2023/10/24/data-infrastructure/automating-dead-code-cleanup/)

### 2.4 Transitive Dependency Analysis

**Definition:** A **transitive dependency** is a package your direct dependencies rely on. If package A depends on B, and B depends on C, then C is a transitive dependency of A.

**Problem:** The average application has 1,200+ open source components, and **64% are transitive**. Vulnerabilities or bloat in transitive deps affect your codebase even if you never import them directly.

**Application to Files:**
- If File A imports File B, and File B imports File C, then C is transitively reachable from A
- Removing B breaks A's access to C unless A also imports C directly
- **Cascade effect:** Deleting a high-betweenness file can orphan entire subgraphs

**Source:** [Direct vs. Transitive Dependencies: Navigating Package Management](https://www.arnica.io/blog/direct-vs-transitive-dependencies-navigating-package-management-in-software-composition-analysis-sca)

---

## 3. CRITICAL FILE IDENTIFICATION VIA GRAPH METRICS

### 3.1 Network Measures vs. Complexity Metrics

**Study Finding:** Network measures (betweenness, eigenvector, PageRank) identify **60% of critical binaries** that developers considered important — **TWICE as many** as complexity metrics alone.

**Key Insight:** Complexity (lines of code, cyclomatic complexity) measures INTERNAL properties. Network measures capture RELATIONAL properties — how the file fits into the larger system.

**Implication:** A small, simple file can be CRITICAL if it has high betweenness (e.g., a constants file imported by 50 modules).

**Source:** [Software Defect Prediction Using Transitive Dependencies on Software Dependency Graph](https://www.researchgate.net/publication/290733928_Software_Defect_Prediction_Using_Transitive_Dependencies_on_Software_Dependency_Graph)

### 3.2 Fan-In (Hub Files)

**Definition:** **Fan-in** = number of files that import/reference this file.

**Key Property:** High fan-in files sit at the **center of the dependency graph**. They are relied upon by many upstream components.

**Critical vs. Expendable:**
- **High fan-in** = critical (many files depend on this one)
- **Zero fan-in** = expendable (no one uses it)

**Example from this project:**
- `DD-F-006` (fractal) has **20+ inbound refs** (very high fan-in)
- `RESEARCH-SYNTHESIS.md` has **30+ inbound refs** (highest fan-in in showcase/)
- Files in underscore directories may have 0-2 refs (low fan-in, absorbed by synthesis)

**Source:** [Software Dependency Graphs: Definition, Use Cases, and Implementation](https://www.puppygraph.com/blog/software-dependency-graph)

### 3.3 Fan-Out (Aggregator Files)

**Definition:** **Fan-out** = number of files this file imports/references.

**Key Property:** High fan-out files are **aggregators** or **synthesis documents** that pull together many sources.

**Critical vs. Expendable:**
- **High fan-out** = likely critical (synthesizes multiple sources)
- **Zero fan-out** = leaf node (may be expendable if also zero fan-in)

**Example from this project:**
- Synthesis documents (MASTER-AUDIT-REPORT, OD-GRANULAR-AUDIT-RESULTS) have high fan-out (reference 10-20 source files)
- Individual agent output files have low fan-out (reference only their inputs)

**Source:** [Software Dependency Graphs: Definition, Use Cases, and Implementation](https://www.puppygraph.com/blog/software-dependency-graph)

### 3.4 Shortest Path Analysis

**Method:** For any two files A and Z, compute the **shortest path** through the dependency graph. Files that appear on MANY shortest paths have high betweenness.

**Application:**
- If A → B → C → Z, and there's no alternative path, then B and C are **critical bridges**
- If A → B → Z AND A → D → Z (two paths), then B and D are less critical (redundant)

**Example from this project:**
- `PIPELINE-MANIFEST.md` is on the path from research (R1-R5) to explorations (DD/OD/AD/CD) to synthesis (ACCUMULATED-IDENTITY)
- Removing PIPELINE-MANIFEST breaks the chain — high betweenness

**Source:** [Centrality Measures in Complex Networks: A Survey](https://arxiv.org/pdf/2011.07190)

---

## 4. MAPPING TO THIS PROJECT

### 4.1 Known Graph Structure (from graph-showcase.md)

**Nodes:**
- **~1,170 total files** in showcase/
- **~734 threaded files** (490 inline headers + 244 light sections)
- **12 hub documents** with 8+ inbound refs
- **19 underscore directories** (absorbed archives)

**Edges:**
- **BUILT ON** (inbound refs) — who this file depends on
- **CONSUMED BY** (outbound refs) — who depends on this file
- **Provenance chains** — formal parent → child relationships

**Entry Points:**
- **T1 synthesis files** (6 files in perceptual-audit-v2/synthesis/)
- **Research files** (R1-R5)
- **PIPELINE-MANIFEST.md** (master narrative)

### 4.2 Centrality Analysis

#### High Betweenness (Critical Bridges)

| File | Role | Why High Betweenness |
|------|------|---------------------|
| `RESEARCH-SYNTHESIS.md` | Cross-research synthesis | Connects R1-R5 to all exploration phases |
| `PIPELINE-MANIFEST.md` | Master narrative | Only path from research → T1 → explorations |
| `SOURCE-OF-TRUTH-REGISTRY.md` | Authority declarations | Tiebreaker for conflicts across all phases |
| `FINDINGS-INDEX.md` | Master index | Only catalog of all R-X, DD-F, OD-F, AD-F, CD-F findings |
| `ACCUMULATED-IDENTITY-v2.md` | Complete inherited mind | Synthesizes ALL prior phases for CD input |

**Pattern:** These files are **load-bearing** — removing any would break the knowledge chain.

#### High Eigenvector Centrality (Connected to Important Nodes)

| File | Inbound Refs (Estimate) | Why High Eigenvector |
|------|------------------------|----------------------|
| `R1-DOCUMENTATION-PATTERNS.md` | 20+ | Referenced by OD explorations, synthesis docs, provenance files |
| `R3-DENSITY-DIMENSIONS.md` | 25+ | Referenced by DD explorations, synthesis docs, 51 findings |
| `DD-F-006` (fractal) | 20+ | Referenced across DD, CD, POST-CD, most-referenced artifact |
| `OD-GRANULAR-AUDIT-RESULTS.md` | 18+ | Referenced by fix docs, synthesis, retrospective |

**Pattern:** These are **hub documents** — they're not just referenced often, but referenced by OTHER important files.

#### High PageRank (Authoritative)

Using the formula `PR(A) = (1-d) + d * Σ(PR(T_i) / C(T_i))`:

1. **T1 synthesis files** — entry points, high initial PageRank
2. **Research files (R1-R5)** — referenced by T1, explorations, synthesis
3. **PIPELINE-MANIFEST** — referenced by all stage provenance docs
4. **Hub documents** — referenced by synthesis docs (which have high PageRank themselves)

**Pattern:** PageRank flows from entry points → research → explorations → synthesis. Files in this chain accumulate authority.

#### Zero Degree (Orphan Candidates)

From graph-showcase.md Section 10:

| File/Directory | In-Degree | Out-Degree | Status |
|----------------|-----------|------------|--------|
| Root folders (no threading headers) | 0 | Unknown | VERIFY |
| `checkpoints/OD-CHECKPOINT.md` | Unknown | Unknown | Only file without threading header |
| Some underscore directories | 0-2 | 0-2 | Absorbed archives (historical value) |

**Pattern:** Low degree ≠ low value. Underscore directories are **absorbed archives** — they have 0 refs because synthesis docs CONSUMED their content. Historical value, not execution value.

### 4.3 Transitive Dependency Cascade

**Scenario:** If we delete `RESEARCH-SYNTHESIS.md` (high betweenness):

1. **Direct impact:** 30+ files lose their link to R1-R5 summary
2. **Transitive impact:** Explorations (DD/OD/AD/CD) lose access to cross-research findings
3. **Cascade effect:** Synthesis docs can't reference cross-research patterns
4. **Graph fragmentation:** R1-R5 become isolated (no path from entry points to research)

**Lesson:** High betweenness files have **amplified deletion cost** due to cascade effects.

### 4.4 Isolated Subgraphs (Root Folders)

From graph-showcase.md:

> Root folders have 0 threading headers (isolated subgraph)

**Graph Theory Interpretation:**
- If root folders have NO BUILT ON or CONSUMED BY edges, they're a **disconnected component**
- They may still be valuable (navigation, entry points) but they're NOT part of the knowledge chain
- **Removal risk:** LOW (won't break dependencies) but value unclear (need manual audit)

**Tools Recommendation:** Use **connected components** algorithm to find all isolated subgraphs.

---

## 5. KNOWLEDGE GRAPH vs. CODE EXECUTION GRAPH

### 5.1 Key Difference

**Code Execution Graph:**
- Nodes = functions, classes, modules
- Edges = imports, function calls
- Value = "Is this code EXECUTED?"
- Metric = Reachability from entry points

**Knowledge Graph (This Project):**
- Nodes = documents, explorations, synthesis files
- Edges = BUILT ON, CONSUMED BY, references
- Value = "Does this document PROVE something or PRESERVE context?"
- Metric = Centrality + Historical value + Audit trail completeness

### 5.2 Why Traditional Dead Code Tools Fail Here

**Problem 1: Execution Reachability ≠ Knowledge Value**

Example: Agent output files in `_od-audit-scratchpad/` are NOT imported by any code, so Knip would flag them as dead. But they're **audit trail evidence** — they prove the synthesis doc's findings are grounded in adversarial multi-agent review.

**Problem 2: Zero Fan-In ≠ Expendable**

Example: `checkpoints/OD-CHECKPOINT.md` has no threading header (zero fan-in). But it may be a **navigation file** or **human checkpoint** — valuable for workflow, not for code execution.

**Problem 3: Cycles Are Valuable Here**

In code, cycles (A imports B, B imports A) are bad. In knowledge graphs, cycles are **cross-references** — they indicate multi-directional thinking, adversarial review, synthesis loops.

### 5.3 Hybrid Approach for This Project

**Combine:**
1. **Graph metrics** (betweenness, PageRank) — identify critical files
2. **Degree analysis** (fan-in/fan-out) — find orphans
3. **Semantic classification** — distinguish between:
   - **Absorbed archives** (0 refs but synthesis consumed them) → KEEP
   - **True orphans** (0 refs, no synthesis) → VERIFY
   - **Navigation files** (0 refs but human-facing) → KEEP
   - **Stale artifacts** (0 refs, superseded) → DELETE

**Example Classification:**

| File | Degree | Betweenness | Semantic Role | Verdict |
|------|--------|-------------|---------------|---------|
| `RESEARCH-SYNTHESIS.md` | High | High | Hub document | KEEP (critical) |
| `_od-audit-scratchpad/agent-007.md` | Zero | Zero | Absorbed archive | KEEP (evidence) |
| `OD-CHECKPOINT.md` | Zero | Zero | Navigation/checkpoint | VERIFY (human value?) |
| `old-draft.md` (hypothetical) | Zero | Zero | Stale artifact | DELETE (no value) |

---

## 6. ACTIONABLE METRICS FOR THIS PROJECT

### 6.1 Critical File Identification

**Rule 1: High Betweenness = Load-Bearing**

Compute betweenness for all files. Threshold: **betweenness > 0.1** (appears on >10% of shortest paths) = critical.

**Expected critical files:**
- RESEARCH-SYNTHESIS.md
- PIPELINE-MANIFEST.md
- SOURCE-OF-TRUTH-REGISTRY.md
- FINDINGS-INDEX.md
- ACCUMULATED-IDENTITY-v2.md

**Rule 2: High PageRank = Authoritative**

Compute PageRank with damping factor 0.85. Threshold: **PageRank > 0.01** = authoritative.

**Expected authoritative files:**
- R1-R5 research files
- T1 synthesis files
- Hub documents (12 files with 8+ refs)

**Rule 3: Degree > 0 = Reachable**

Any file with in-degree > 0 OR out-degree > 0 is part of the graph. Degree = 0 files need manual review.

### 6.2 Orphan Detection

**Rule 4: Degree = 0 + No Synthesis = Orphan Candidate**

Files with:
- In-degree = 0 (no one references them)
- Out-degree = 0 (they reference no one)
- NOT mentioned in any synthesis document
- NOT in absorbed archive directory

**Expected orphans:**
- Root folders without threading headers
- OD-CHECKPOINT.md (needs verification)
- Stale drafts, duplicates, superseded versions

**Rule 5: Absorbed Archive Exception**

Files in underscore directories are PRESUMED VALUABLE (absorbed by synthesis) even if degree = 0.

Verify synthesis doc references the archive before keeping.

### 6.3 Cascade Impact Analysis

**Rule 6: High Betweenness Files Have Amplified Deletion Cost**

Before deleting ANY file with betweenness > 0.05:

1. Identify all files that transitively depend on it
2. Compute new average path length if deleted
3. Check for graph fragmentation (disconnected components)

**Expected high-impact files:**
- PIPELINE-MANIFEST (connects all stages)
- RESEARCH-SYNTHESIS (connects research to explorations)
- Hub documents (connect multiple subsystems)

### 6.4 Subgraph Isolation

**Rule 7: Disconnected Components Need Manual Review**

Use connected components algorithm to find isolated subgraphs. These are:
- Either **entry points** (navigation files, CLAUDE.md) — valuable
- Or **orphaned subsystems** — need verification

**Expected isolated subgraphs:**
- Root folders (no threading headers)
- Some underscore directories (if synthesis missing)

---

## 7. TOOLS RECOMMENDATION

### 7.1 Graph Construction

**Input:** 734 threaded files with BUILT ON and CONSUMED BY relationships

**Tool:** NetworkX (Python) or igraph (R/Python/C)

**Process:**
```python
import networkx as nx

# Build directed graph
G = nx.DiGraph()

# Add edges from threading headers
# BUILT ON = incoming edge (dependency)
# CONSUMED BY = outgoing edge (dependent)

for file in threaded_files:
    for built_on in file.built_on_list:
        G.add_edge(built_on, file.name)  # built_on → file
    for consumed_by in file.consumed_by_list:
        G.add_edge(file.name, consumed_by)  # file → consumed_by
```

### 7.2 Metrics Computation

```python
# Betweenness centrality
betweenness = nx.betweenness_centrality(G)

# Eigenvector centrality
eigenvector = nx.eigenvector_centrality(G, max_iter=1000)

# PageRank
pagerank = nx.pagerank(G, alpha=0.85)

# Degree centrality
in_degree = dict(G.in_degree())
out_degree = dict(G.out_degree())

# Connected components
components = list(nx.weakly_connected_components(G))

# Shortest paths
for node in G.nodes():
    try:
        paths = nx.single_source_shortest_path_length(G, node)
    except:
        print(f"{node} is isolated")
```

### 7.3 Orphan Detection

```python
# Find zero-degree nodes
orphans = [node for node in G.nodes() if G.degree(node) == 0]

# Find isolated components (size = 1)
isolated = [c for c in components if len(c) == 1]

# Find nodes with no path to entry points
entry_points = ["RESEARCH-SYNTHESIS.md", "PIPELINE-MANIFEST.md"]
unreachable = []
for node in G.nodes():
    reachable = False
    for entry in entry_points:
        if nx.has_path(G, entry, node):
            reachable = True
            break
    if not reachable:
        unreachable.append(node)
```

### 7.4 Visualization

**Tools:**
- **Graphviz** — static graph visualization
- **Gephi** — interactive graph exploration
- **D3.js** — web-based interactive visualization

**Recommendation:** Use Gephi with ForceAtlas2 layout. Color nodes by:
- **Red** = high betweenness (critical bridges)
- **Blue** = high PageRank (authoritative)
- **Green** = absorbed archives
- **Gray** = orphan candidates

---

## 8. LIMITATIONS AND CAVEATS

### 8.1 Graph Metrics Don't Capture Semantic Value

**Problem:** A file can have zero degree (no references) but still be valuable:
- **Navigation files** (CLAUDE.md) — human-facing, not machine-facing
- **Checkpoints** (tracking files for humans) — workflow value, not execution value
- **Entry points** (README.md) — starting points, not dependencies

**Solution:** Combine graph metrics with **semantic classification** (see Section 5.3).

### 8.2 Provenance Threading May Be Incomplete

**Problem:** Only 734/1,170 files have threading headers. The remaining 436 files are NOT in the graph.

**Solution:**
1. Assume unthreaded files are low-value (navigation, config, temporary)
2. Manually audit unthreaded files for hidden dependencies
3. Extend threading to cover all reachable files

### 8.3 Historical Value vs. Current Reachability

**Problem:** Absorbed archives have 0 current refs (synthesis consumed them) but HIGH historical value (audit trail evidence).

**Solution:** Add **archive flag** to nodes. Orphan detection should skip archived nodes.

### 8.4 Human Judgment Still Required

**Problem:** Graph metrics can't distinguish between:
- "Zero refs because superseded" → DELETE
- "Zero refs because absorbed by synthesis" → KEEP
- "Zero refs because navigation file" → KEEP

**Solution:** Use graph metrics to **prioritize review**, not automate deletion. High betweenness files = never delete without manual review.

---

## 9. CROSS-REFERENCE WITH PROJECT GRAPH

### 9.1 Hub Documents (from graph-showcase.md Section 1)

| File | Inbound Refs | Betweenness (Predicted) | PageRank (Predicted) | Verdict |
|------|--------------|------------------------|---------------------|---------|
| `RESEARCH-SYNTHESIS.md` | 30+ | Very High | Very High | CRITICAL |
| `R3-DENSITY-DIMENSIONS.md` | 25+ | High | High | CRITICAL |
| `R1-DOCUMENTATION-PATTERNS.md` | 20+ | High | High | CRITICAL |
| `R4-AXIS-INNOVATIONS.md` | 15+ | Medium-High | High | CRITICAL |
| `PIPELINE-MANIFEST.md` | 15+ | Very High | High | CRITICAL |
| `SOURCE-OF-TRUTH-REGISTRY.md` | 15+ | Medium-High | Medium-High | CRITICAL |
| `R5-COMBINATION-THEORY.md` | 12+ | Medium | Medium-High | CRITICAL |
| `ACCUMULATED-IDENTITY-v2.md` | 12+ | High | Medium-High | CRITICAL |
| `OD-GRANULAR-AUDIT-RESULTS.md` | 18+ | Medium | Medium | KEEP |
| `WORKFLOW-METACOGNITION-ANALYSIS.md` | 10+ | Medium | Medium | KEEP |
| `FINDINGS-INDEX.md` | 10+ | Medium-High | Medium | KEEP |
| `POST-CD-PIPELINE/README.md` | 8+ | Medium | Medium | KEEP |

**Pattern:** All 12 hub documents have **high betweenness** (connect subsystems) and **high PageRank** (authoritative sources).

### 9.2 Underscore Directories (from graph-showcase.md Section 3)

| Directory | Files | In-Degree | Absorbed By | Verdict |
|-----------|-------|-----------|-------------|---------|
| `_od-audit-scratchpad/` | 29 | 0 | OD-GRANULAR-AUDIT-RESULTS.md | KEEP (archive) |
| `_comprehensive-audit/` | ~40 | 0 | MASTER-AUDIT-REPORT.md + WEAVER-SYNTHESIS.md | KEEP (archive) |
| `_workflow-metacognition/` | 9 | 0 | WORKFLOW-METACOGNITION-ANALYSIS.md | KEEP (archive) |
| `_cd-research/` | 9 | 0 | POST-CD-PIPELINE/README.md | KEEP (archive) |
| `_migration-research/` | 10 | 0 | POST-CD-PIPELINE/README.md | KEEP (archive) |
| `_ad-execution/` | ~15 | 0 | Unknown | VERIFY |
| `_execution-journal/` | Unknown | 0 | Unknown | VERIFY |
| `_od-reenrichment/` | Unknown | 0 | Unknown | VERIFY |
| `_remediation/` | Unknown | 0 | Unknown | VERIFY |

**Pattern:** Most underscore directories are **absorbed archives** (degree = 0 but synthesis exists). Need to verify 4 directories flagged "Unknown."

### 9.3 Orphan Candidates (from graph-showcase.md Section 10)

| File/Directory | In-Degree | Out-Degree | Semantic Role | Verdict |
|----------------|-----------|------------|---------------|---------|
| Root folders (no threading) | 0 | Unknown | Navigation? | VERIFY |
| `OD-CHECKPOINT.md` | 0? | 0? | Checkpoint | VERIFY |
| `_ad-execution/` | 0 | 0 | Archive? | VERIFY |
| `_execution-journal/` | 0 | 0 | Archive? | VERIFY |
| `_od-reenrichment/` | 0 | 0 | Superseded? | VERIFY |
| `_remediation/` | 0 | 0 | Archive? | VERIFY |

**Pattern:** These need **manual audit** — graph metrics alone can't determine value.

---

## 10. KEY RECOMMENDATIONS

### 10.1 Build the Full Dependency Graph

**Action:** Parse all 734 threading headers to extract BUILT ON and CONSUMED BY edges.

**Output:** NetworkX DiGraph with 734 nodes, ~2,000-3,000 edges (estimated).

**Tools:** Python script to parse threading headers, construct graph, export to GraphML.

### 10.2 Compute Centrality Metrics

**Action:** Run betweenness, PageRank, eigenvector, and degree centrality on the graph.

**Output:** CSV file with metrics for each node.

**Thresholds:**
- Betweenness > 0.1 = critical (load-bearing)
- PageRank > 0.01 = authoritative
- Degree = 0 = orphan candidate

### 10.3 Classify Orphans by Semantic Role

**Action:** For all degree-0 nodes, manually classify as:
- **Absorbed archive** (synthesis consumed them) → KEEP
- **Navigation file** (human-facing) → KEEP
- **Checkpoint/tracking** (workflow value) → KEEP
- **Stale artifact** (superseded, no value) → DELETE

**Output:** Classified orphan list with recommended actions.

### 10.4 Identify High-Impact Files

**Action:** Flag all files with betweenness > 0.1 as "DO NOT DELETE without manual review."

**Rationale:** High betweenness = critical bridge. Deleting breaks the knowledge chain.

**Output:** Critical files list (estimated 10-15 files).

### 10.5 Find Isolated Subgraphs

**Action:** Run connected components algorithm, identify subgraphs with size < 10.

**Output:** List of isolated subgraphs with recommendation to verify or integrate.

**Expected:** Root folders, some underscore directories.

---

## 11. CONCLUSION

Graph theory provides **formal mathematical frameworks** for identifying critical vs. expendable files:

1. **Betweenness centrality** identifies load-bearing bridges (high deletion cost)
2. **PageRank** identifies authoritative hubs (high reference value)
3. **Degree centrality** identifies orphans (zero refs = verification needed)
4. **Transitive dependency analysis** reveals cascade effects (deleting one file breaks many)

**Key Insight for This Project:**

Traditional dead code detection (static analysis, reachability) assumes **code execution value**. But this project has **knowledge graph value** — files are valuable for what they PROVE (audit trails), PRESERVE (historical context), and CONNECT (provenance chains).

**Hybrid Approach:**

1. **Graph metrics** → prioritize review (high betweenness = critical)
2. **Semantic classification** → distinguish absorbed archives from true orphans
3. **Manual audit** → human judgment for edge cases (navigation, checkpoints)

**Next Steps:**

1. Build full dependency graph from 734 threading headers
2. Compute centrality metrics (betweenness, PageRank, degree)
3. Classify degree-0 nodes by semantic role
4. Flag high-betweenness files as "DO NOT DELETE"
5. Verify 7 underscore directories flagged "Unknown" in graph-showcase.md

---

## SOURCES

- [Social network analysis 101: centrality measures explained](https://cambridge-intelligence.com/keylines-faqs-social-network-analysis/)
- [Centrality Measures in Complex Networks: A Survey](https://arxiv.org/pdf/2011.07190)
- [Betweenness Centrality and Other Essential Centrality Measures in Network Analysis](https://memgraph.com/blog/betweenness-centrality-and-other-centrality-measures-network-analysis)
- [npx knip: The Smart Way to Detect Dead Code](https://javascript.plainenglish.io/npx-knip-the-smart-way-to-detect-dead-code-in-your-javascript-typescript-projects-6992a007760c)
- [Automating dead code cleanup - Engineering at Meta](https://engineering.fb.com/2023/10/24/data-infrastructure/automating-dead-code-cleanup/)
- [How to identify and remove dead code?](https://medium.com/beyond-the-code-by-typo/how-to-identify-and-remove-dead-code-8283b0bf05a3)
- [Software Dependency Graphs: Definition, Use Cases, and Implementation](https://www.puppygraph.com/blog/software-dependency-graph)
- [Direct vs. Transitive Dependencies: Navigating Package Management](https://www.arnica.io/blog/direct-vs-transitive-dependencies-navigating-package-management-in-software-composition-analysis-sca)
- [Software Defect Prediction Using Transitive Dependencies on Software Dependency Graph](https://www.researchgate.net/publication/290733928_Software_Defect_Prediction_Using_Transitive_Dependencies_on_Software_Dependency_Graph)
