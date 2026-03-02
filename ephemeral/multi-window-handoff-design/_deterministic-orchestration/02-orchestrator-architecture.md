# Deterministic Orchestrator: Complete Architecture

## What This Document Is

The production-ready blueprint for a Node.js orchestrator that drives the Multi-Pass Corpus Integration Pipeline using `claude -p` (Claude Code's print/pipe mode). Every creative decision is made by the LLM. Every mechanical decision -- file loading, ordering, rotation, pass counting, backup, validation -- is made by code. The orchestrator is the transmission; the LLM is the engine.

This document contains complete data structures, function signatures with full documentation, the main execution loop, error handling at every level, resume capability, logging, and cost tracking. A developer reading this document should be able to implement the orchestrator without ambiguity.

---

## 1. Core Architecture Principles

### 1.1 The Separation of Concerns

```
CODE HANDLES (deterministic):          LLM HANDLES (creative):
  Which files load in each subset        Creative building (HTML/CSS)
  File ordering in the prompt            Holistic verification
  Rotation schedule                      Gap identification
  Pass count                             Artistic judgment
  Agent type per pass                    Conviction/direction
  Model selection                        Perceptual evaluation
  Session isolation (fresh invocations)
  Artifact backup
  Verifier input assembly
  Pass sequencing (build->verify->gap)
  Screenshot capture
  Output validation between passes
```

### 1.2 Why `claude -p`

Each pass is a fresh `claude -p` invocation. This guarantees:
- **Session isolation:** No state bleeds between passes. Each LLM sees exactly what the orchestrator provides.
- **Deterministic input:** The orchestrator constructs the full prompt, including all file contents. The LLM has no access to the filesystem beyond what is embedded in the prompt.
- **Reproducibility:** Given the same inputs, the same prompt is constructed every time.
- **Cost visibility:** Each invocation's token usage is measurable.

### 1.3 The Pipeline Shape

```
7 CORPUS SUBSETS  x  8 PASSES EACH  =  56 CORPUS INTEGRATION PASSES
                                      + 12-24 PA HARDENING PASSES
                                      ────────────────────────────
                                        68-80 TOTAL PASSES

Per subset (8 passes):
  Rotation A (passes 1-3):  [F1, F2, F3, F4, F5]
    Pass 1: Builder integrates raw material
    Pass 2: Verifier holistic check
    Pass 3: Builder addresses verifier observations
  Rotation B (passes 4-6):  [F3, F4, F5, F1, F2]  (mid files to primacy)
    Pass 4: Builder re-engages with new ordering
    Pass 5: Verifier re-checks
    Pass 6: Builder addresses new observations
  Rotation C (passes 7-8):  [F5, F1, F2, F3, F4]  (last files to primacy)
    Pass 7: Builder final engagement
    Pass 8: Final verifier pass
```

---

## 2. Data Structures

### 2.1 Corpus Subset Definition

```typescript
/**
 * A single file within a corpus subset.
 * Contains the absolute path and metadata for ordering and rotation.
 */
interface CorpusFile {
  /** Absolute path to the file on disk */
  path: string;
  /** Human-readable label (e.g., "R1-DOCUMENTATION-PATTERNS") */
  label: string;
  /** Estimated token count (pre-computed, used for budget validation) */
  estimatedTokens: number;
  /** Category tag for logging and analysis */
  category: 'research' | 'case-study' | 'exploration-html' | 'provenance' | 'grammar' | 'pipeline' | 'skill' | 'identity';
}

/**
 * A corpus subset is a thematic grouping of files that are integrated
 * together across 8 passes with 3 rotations.
 *
 * The 7 subsets are defined statically. Their composition does not change
 * at runtime. The orchestrator reads these definitions and constructs
 * prompts from them.
 */
interface CorpusSubset {
  /** Unique identifier: "S1" through "S7" */
  id: string;
  /** Human-readable theme (e.g., "Research + Density Direction") */
  theme: string;
  /** Short description of what this subset teaches the builder */
  description: string;
  /**
   * The files in this subset, in their BASE ordering (Rotation A).
   * Rotations B and C are computed from this array by the orchestrator.
   * Order matters: files earlier in the array receive primacy position
   * (they appear first in the prompt, receiving higher attention weight).
   */
  files: CorpusFile[];
  /**
   * Total estimated tokens for all files in this subset.
   * Pre-computed as sum of individual file estimatedTokens.
   * Used for budget validation before any passes run.
   */
  totalEstimatedTokens: number;
}
```

### 2.2 Rotation Schedule

```typescript
/**
 * A rotation defines how files are reordered within a subset
 * to give different files primacy position.
 *
 * The rotation index is the number of positions to shift the base
 * array. For 5 files [F1, F2, F3, F4, F5]:
 *   Rotation A (shift 0): [F1, F2, F3, F4, F5]
 *   Rotation B (shift 2): [F3, F4, F5, F1, F2]
 *   Rotation C (shift 4): [F5, F1, F2, F3, F4]
 *
 * The shift values are computed as: Math.floor(files.length * rotationIndex / 3)
 * This distributes primacy evenly regardless of file count.
 */
interface RotationSchedule {
  /** Which rotation this is: 'A' | 'B' | 'C' */
  rotation: 'A' | 'B' | 'C';
  /** The number of positions to shift the base file array */
  shift: number;
  /** Which passes use this rotation */
  passes: number[];
}

/**
 * The rotation rhythm for a subset of N files.
 * Computed once per subset, used for all 8 passes.
 */
const ROTATION_RHYTHM: RotationSchedule[] = [
  { rotation: 'A', shift: 0, passes: [1, 2, 3] },
  { rotation: 'B', shift: 2, passes: [4, 5, 6] },   // mid files to primacy
  { rotation: 'C', shift: 4, passes: [7, 8] },        // last files to primacy
];

/**
 * Compute the rotated file order for a given rotation.
 *
 * @param files - The base-ordered file array
 * @param shift - Number of positions to rotate
 * @returns Files in their rotated order
 *
 * @example
 * rotateFiles(['F1','F2','F3','F4','F5'], 2)
 * // => ['F3','F4','F5','F1','F2']
 */
function rotateFiles<T>(files: T[], shift: number): T[] {
  const effectiveShift = shift % files.length;
  return [...files.slice(effectiveShift), ...files.slice(0, effectiveShift)];
}
```

### 2.3 Pass Definition

```typescript
/**
 * The role of the LLM in a given pass.
 * BUILDER: Integrates raw material into the artifact or addresses verifier observations.
 * VERIFIER: Performs holistic check of the artifact against the raw material.
 */
type AgentRole = 'builder' | 'verifier';

/**
 * A single pass in the pipeline. Fully deterministic --
 * everything about this pass is known before it executes.
 */
interface PassDefinition {
  /** Global pass number (1-80). Unique across all subsets. */
  globalPassNumber: number;
  /** Pass number within this subset (1-8). */
  subsetPassNumber: number;
  /** Which corpus subset this pass belongs to. */
  subsetId: string;
  /** Which rotation is active for this pass. */
  rotation: 'A' | 'B' | 'C';
  /** The role of the LLM in this pass. */
  agentRole: AgentRole;
  /** The files in their rotated order for this pass. */
  rotatedFiles: CorpusFile[];
  /**
   * Human-readable description of what this pass does.
   * Used in logging and the prompt itself.
   * Examples:
   *   "Rotation A, Pass 1: Builder integrates Research + DD material"
   *   "Rotation B, Pass 5: Verifier re-checks after mid-file primacy shift"
   */
  description: string;
}
```

### 2.4 Pipeline State (Resume Capability)

```typescript
/**
 * The complete state of the pipeline. Persisted to disk after every pass.
 * If the orchestrator crashes, it reads this file and resumes from
 * the last completed pass.
 *
 * Serialized as JSON to: {outputDir}/_orchestrator/state.json
 */
interface PipelineState {
  /** Schema version for forward compatibility */
  version: 2;
  /** When this pipeline run started */
  startedAt: string;   // ISO 8601
  /** When this state was last persisted */
  lastSavedAt: string; // ISO 8601

  // ─── Progress ───

  /** Total number of passes in this pipeline run */
  totalPasses: number;
  /** The global pass number of the last COMPLETED pass (0 = none completed) */
  lastCompletedPass: number;
  /** Current phase: 'corpus-integration' | 'pa-hardening' | 'complete' */
  currentPhase: 'corpus-integration' | 'pa-hardening' | 'complete';

  // ─── Per-Pass Records ───

  /**
   * Record of every completed pass. Keyed by global pass number.
   * Each record includes timing, cost, validation results, and
   * the paths to all artifacts produced.
   */
  passRecords: Record<number, PassRecord>;

  // ─── Artifact Tracking ───

  /**
   * Path to the current artifact (the HTML file being iteratively refined).
   * Updated after every builder pass.
   */
  currentArtifactPath: string;
  /**
   * Ordered list of all artifact backup paths.
   * A backup is created before every builder pass.
   */
  artifactBackups: string[];

  // ─── Accumulated State ───

  /**
   * The conviction layer: accumulated creative beliefs from relay windows.
   * Grows by appending after each relay window's creative processing.
   * Loaded into subsequent passes as atmospheric context.
   */
  convictionLayerPath: string;
  /**
   * The discovery log: accumulated surprises and specific insights.
   * Append-only. Each relay window adds its discoveries.
   */
  discoveryLogPath: string;

  // ─── Cost Tracking ───

  /**
   * Cumulative cost tracking across all passes.
   */
  cost: CostTracker;

  // ─── Configuration Snapshot ───

  /**
   * The full pipeline configuration that produced this state.
   * Captured at start time so the resume logic can verify
   * the configuration has not changed.
   */
  configHash: string;
}

/**
 * Record of a single completed pass.
 */
interface PassRecord {
  /** Global pass number */
  passNumber: number;
  /** Pass definition (subset, rotation, role, files) */
  definition: PassDefinition;
  /** When this pass started */
  startedAt: string;
  /** When this pass completed */
  completedAt: string;
  /** Duration in milliseconds */
  durationMs: number;
  /** Exit code from `claude -p` */
  exitCode: number;

  // ─── Artifacts ───

  /** Path to the prompt file sent to claude -p */
  promptPath: string;
  /** Path to the raw output from claude -p */
  rawOutputPath: string;
  /** Path to the artifact backup taken before this pass */
  backupPath: string | null; // null for verifier passes (no artifact mutation)
  /** Path to the extracted/updated artifact after this pass */
  artifactPath: string | null; // null for verifier passes

  // ─── Validation ───

  /** Whether the output passed structural validation */
  validationPassed: boolean;
  /** Validation details (what was checked, what passed/failed) */
  validationDetails: ValidationResult;

  // ─── Cost ───

  /** Token usage for this pass */
  tokens: {
    inputTokens: number;
    outputTokens: number;
    estimatedCostUsd: number;
  };
}

/**
 * Cumulative cost tracking.
 */
interface CostTracker {
  totalInputTokens: number;
  totalOutputTokens: number;
  totalEstimatedCostUsd: number;
  /** Cost broken down by agent role */
  byRole: {
    builder: { inputTokens: number; outputTokens: number; costUsd: number };
    verifier: { inputTokens: number; outputTokens: number; costUsd: number };
    pa: { inputTokens: number; outputTokens: number; costUsd: number };
  };
  /** Cost broken down by subset */
  bySubset: Record<string, { inputTokens: number; outputTokens: number; costUsd: number }>;
}
```

### 2.5 Validation Result

```typescript
/**
 * Result of validating a pass's output.
 * Validation is structural (did the output follow the expected format?)
 * not creative (is it good?). Creative judgment is the LLM's job.
 */
interface ValidationResult {
  /** Overall pass/fail */
  passed: boolean;
  /** Individual checks performed */
  checks: ValidationCheck[];
  /** Any warnings (non-fatal) */
  warnings: string[];
}

interface ValidationCheck {
  /** What was checked */
  name: string;
  /** Did it pass? */
  passed: boolean;
  /** Details if failed */
  detail?: string;
}

/**
 * Validation checks applied after each pass, by agent role.
 *
 * BUILDER passes:
 *   - Output contains valid HTML (opening <html> or <!DOCTYPE>)
 *   - Output is not empty
 *   - Output differs from the previous artifact (the builder changed something)
 *   - Output length is within expected bounds (not truncated, not exploded)
 *   - Container width in CSS is 940-960px (the non-negotiable constraint)
 *
 * VERIFIER passes:
 *   - Output is non-empty
 *   - Output contains observation sections (the verifier wrote something substantive)
 *   - Output does not contain HTML artifact (verifiers observe, they don't build)
 */
```

### 2.6 Pipeline Configuration

```typescript
/**
 * The complete configuration for a pipeline run.
 * Defined once, validated before execution begins,
 * hashed for resume-state verification.
 */
interface PipelineConfig {
  // ─── Content ───

  /** Path to the content markdown file */
  contentPath: string;
  /** Path to the initial HTML artifact (the seed page) */
  initialArtifactPath: string;
  /** Output directory for all orchestrator artifacts */
  outputDir: string;

  // ─── Corpus ───

  /** The 7 corpus subset definitions */
  subsets: CorpusSubset[];

  // ─── Execution ───

  /** Model to use for all passes */
  model: string; // 'claude-opus-4-6'
  /** Maximum time per pass in milliseconds */
  passTimeoutMs: number; // Default: 600_000 (10 minutes)
  /** Maximum retries per pass on transient failure */
  maxRetries: number; // Default: 2
  /** Delay between retries in milliseconds */
  retryDelayMs: number; // Default: 5_000

  // ─── PA Hardening ───

  /** Number of PA hardening passes per cycle */
  paPassesPerCycle: number; // Default: 4 (3 auditors + 1 weaver)
  /** Number of PA hardening cycles */
  paHardeningCycles: number; // Default: 3-6 (adaptive)
  /** PA score threshold to stop hardening */
  paScoreThreshold: number; // Default: 3.5 (PA-05 score)

  // ─── Screenshot ───

  /** Viewport widths for screenshot capture */
  screenshotViewports: { width: number; height: number }[];
  // Default: [{ width: 1440, height: 900 }, { width: 768, height: 1024 }]

  // ─── Paths to Prompt Templates ───

  /** Path to the builder prompt template */
  builderPromptTemplate: string;
  /** Path to the verifier prompt template */
  verifierPromptTemplate: string;
  /** Path to the PA auditor prompt template */
  paAuditorPromptTemplate: string;
  /** Path to the PA weaver prompt template */
  paWeaverPromptTemplate: string;

  // ─── Reference Files (loaded in every pass) ───

  /** Files that are ALWAYS loaded alongside the corpus subset files */
  referenceFiles: {
    worldDescription: string;
    mechanismCatalog: string;
    componentsCss: string;
    tokensCss: string;
    convictionBrief: string; // from TC derivation (pre-orchestrator)
  };
}
```

---

## 3. The 7 Corpus Subsets

These are derived from the relay chain mathematics (01-relay-math.md, Section 5F) and rebalanced for the 8-pass rotation structure. Each subset is designed for semantic coherence: related files are grouped together so the builder and verifier can perceive cross-file patterns within each rotation.

```typescript
const CORPUS_SUBSETS: CorpusSubset[] = [
  {
    id: 'S1',
    theme: 'Research + Density Direction',
    description: 'How information unfolds, what density means, how rhythm works. The foundational research findings and the density explorations that prove them.',
    files: [
      { path: 'research/R1-DOCUMENTATION-PATTERNS.md',        label: 'R1', estimatedTokens: 7300,  category: 'research' },
      { path: 'research/R2-CREATIVE-LAYOUTS.md',               label: 'R2', estimatedTokens: 9258,  category: 'research' },
      { path: 'research/R3-DENSITY-DIMENSIONS.md',             label: 'R3', estimatedTokens: 6913,  category: 'research' },
      { path: 'research/R4-AXIS-INNOVATIONS.md',               label: 'R4', estimatedTokens: 10914, category: 'research' },
      { path: 'research/R5-COMBINATION-THEORY.md',             label: 'R5', estimatedTokens: 7651,  category: 'research' },
    ],
    totalEstimatedTokens: 42036,
  },
  {
    id: 'S2',
    theme: 'Research Synthesis + DD Case Studies',
    description: 'Cross-research wisdom and the density domain case studies showing compositional process in anti-prescription format.',
    files: [
      { path: 'research/RESEARCH-SYNTHESIS.md',                        label: 'Synthesis',  estimatedTokens: 5244,  category: 'research' },
      { path: 'compositional-core/case-studies/DD-003-islands.md',     label: 'DD-003',     estimatedTokens: 5063,  category: 'case-study' },
      { path: 'compositional-core/case-studies/DD-004-layers.md',      label: 'DD-004',     estimatedTokens: 5363,  category: 'case-study' },
      { path: 'compositional-core/case-studies/DD-006-fractal.md',     label: 'DD-006',     estimatedTokens: 4713,  category: 'case-study' },
      { path: 'specification/dd/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md',   label: 'DD-Synth',   estimatedTokens: 8088,  category: 'provenance' },
    ],
    totalEstimatedTokens: 28471,
  },
  {
    id: 'S3',
    theme: 'Organization Domain',
    description: 'How content organizes, the 3-way unification (axis=org=density), and the OD case studies and provenance.',
    files: [
      { path: 'compositional-core/case-studies/OD-001-conversational.md', label: 'OD-001', estimatedTokens: 3725,  category: 'case-study' },
      { path: 'compositional-core/case-studies/OD-004-confidence.md',     label: 'OD-004', estimatedTokens: 3750,  category: 'case-study' },
      { path: 'compositional-core/case-studies/OD-006-creative.md',       label: 'OD-006', estimatedTokens: 4175,  category: 'case-study' },
      { path: 'specification/od/OD-CONVENTION-SPEC.md',                   label: 'OD-Spec', estimatedTokens: 5850, category: 'provenance' },
      { path: 'specification/od/OD-SYNTHESIS.md',                         label: 'OD-Synth', estimatedTokens: 8400, category: 'provenance' },
    ],
    totalEstimatedTokens: 25900,
  },
  {
    id: 'S4',
    theme: 'Axis Domain + CD Context',
    description: 'How axis geometry serves density, aesthetic conventions as evidence-based locks, and the CD combination context.',
    files: [
      { path: 'specification/ad/AD-CONVENTION-SPEC.md',                   label: 'AD-Spec',     estimatedTokens: 13663, category: 'provenance' },
      { path: 'specification/ad/AD-SYNTHESIS.md',                         label: 'AD-Synth',    estimatedTokens: 3825,  category: 'provenance' },
      { path: 'compositional-core/case-studies/CD-001-reasoning.md',      label: 'CD-001',      estimatedTokens: 5188,  category: 'case-study' },
      { path: 'compositional-core/case-studies/CD-006-pilot-migration.md',label: 'CD-006',      estimatedTokens: 4850,  category: 'case-study' },
      { path: 'pipeline/01-CD-EVOLVED-VISION.md',                         label: 'CD-Vision',   estimatedTokens: 12500, category: 'pipeline' },
    ],
    totalEstimatedTokens: 40026,
  },
  {
    id: 'S5',
    theme: 'Grammar + Compositional Rules',
    description: 'How mechanisms combine, compositional rules connecting vocabulary to composition, the border system, and mechanism combinations.',
    files: [
      { path: 'compositional-core/grammar/mechanism-catalog.md',        label: 'Mechanisms',     estimatedTokens: 7171,  category: 'grammar' },
      { path: 'compositional-core/grammar/compositional-rules.md',      label: 'Rules',          estimatedTokens: 6588,  category: 'grammar' },
      { path: 'compositional-core/grammar/mechanism-combinations.md',   label: 'Combinations',   estimatedTokens: 5588,  category: 'grammar' },
      { path: 'compositional-core/grammar/border-system.md',            label: 'Borders',        estimatedTokens: 8225,  category: 'grammar' },
      { path: 'compositional-core/guidelines/semantic-rules.md',        label: 'SemanticRules',  estimatedTokens: 6613,  category: 'grammar' },
    ],
    totalEstimatedTokens: 34185,
  },
  {
    id: 'S6',
    theme: 'Pipeline Philosophy + Skills',
    description: 'The tension protocol (philosophical foundation), compositional strategy library, and the TC skill as creative methodology.',
    files: [
      { path: 'pipeline/TENSION-PROTOCOL.md',                             label: 'TensionProto',  estimatedTokens: 24250, category: 'pipeline' },
      { path: 'pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md',            label: 'StrategyLib',   estimatedTokens: 21838, category: 'pipeline' },
      { path: 'skills/tension-composition/SKILL.md',                      label: 'TC-Skill',      estimatedTokens: 12603, category: 'skill' },
      { path: 'compositional-core/identity/soul-constraints.md',          label: 'Soul',          estimatedTokens: 4275,  category: 'identity' },
      { path: 'ephemeral/build-page-v2/world-description.md',             label: 'World',         estimatedTokens: 461,   category: 'identity' },
    ],
    totalEstimatedTokens: 63427,
  },
  {
    id: 'S7',
    theme: 'Calibration + Crown Jewels',
    description: 'Case studies proving quality, the design system README philosophy, skill enrichments -- what good looks like.',
    files: [
      { path: 'compositional-core/case-studies/CD-005-multi-axis.md',        label: 'CD-005',        estimatedTokens: 4825,  category: 'case-study' },
      { path: 'skill-enrichments/tension-composition-additions.md',          label: 'TC-Additions',  estimatedTokens: 5913,  category: 'skill' },
      { path: 'skill-enrichments/perceptual-auditing-additions.md',          label: 'PA-Additions',  estimatedTokens: 3350,  category: 'skill' },
      { path: 'design-system/README.md',                                     label: 'DS-README',     estimatedTokens: 8387,  category: 'identity' },
      { path: 'compositional-core/guidelines/responsive-strategy.md',        label: 'Responsive',    estimatedTokens: 3388,  category: 'grammar' },
    ],
    totalEstimatedTokens: 25863,
  },
];
```

---

## 4. Function Architecture

### 4.1 Top-Level Functions

```typescript
// ═══════════════════════════════════════════════════════════════
// ORCHESTRATOR ENTRY POINT
// ═══════════════════════════════════════════════════════════════

/**
 * Main entry point. Validates configuration, checks for resume state,
 * and runs the full pipeline.
 *
 * @param config - Complete pipeline configuration
 * @returns Final pipeline state with all pass records
 *
 * Exit behavior:
 *   - Returns normally on successful completion
 *   - Throws OrchestratorError on unrecoverable failure
 *   - State is always persisted before any exit (normal or error)
 */
async function runPipeline(config: PipelineConfig): Promise<PipelineState> {
  // 1. Validate configuration
  validateConfig(config);

  // 2. Check for existing state (resume capability)
  const existingState = await loadState(config.outputDir);
  let state: PipelineState;

  if (existingState && existingState.configHash === hashConfig(config)) {
    // Resume from last completed pass
    log.info(`Resuming from pass ${existingState.lastCompletedPass + 1} / ${existingState.totalPasses}`);
    state = existingState;
  } else {
    if (existingState) {
      log.warn('Config has changed since last run. Starting fresh. Previous state archived.');
      await archiveState(config.outputDir, existingState);
    }
    // Fresh start
    state = initializeState(config);
  }

  // 3. Compute all pass definitions (deterministic, idempotent)
  const allPasses = computeAllPasses(config);

  // 4. Run corpus integration phase
  if (state.currentPhase === 'corpus-integration') {
    state = await runCorpusIntegration(config, state, allPasses);
  }

  // 5. Run PA hardening phase
  if (state.currentPhase === 'pa-hardening') {
    state = await runPAHardening(config, state);
  }

  // 6. Final state persistence
  state.currentPhase = 'complete';
  await saveState(config.outputDir, state);
  await writeFinalReport(config.outputDir, state);

  return state;
}
```

### 4.2 Pass Computation (Deterministic)

```typescript
// ═══════════════════════════════════════════════════════════════
// PASS COMPUTATION — Pure functions, no side effects
// ═══════════════════════════════════════════════════════════════

/**
 * Compute all pass definitions for the entire pipeline.
 * This is a pure function: given the same config, it always produces
 * the same passes in the same order.
 *
 * @param config - Pipeline configuration
 * @returns Array of PassDefinition, ordered by globalPassNumber
 */
function computeAllPasses(config: PipelineConfig): PassDefinition[] {
  const passes: PassDefinition[] = [];
  let globalPass = 0;

  for (const subset of config.subsets) {
    for (let subsetPass = 1; subsetPass <= 8; subsetPass++) {
      globalPass++;

      // Determine rotation for this pass
      const rotation = getRotationForPass(subsetPass);

      // Determine agent role for this pass
      const agentRole = getAgentRoleForPass(subsetPass);

      // Compute rotated file order
      const shift = getShiftForRotation(rotation, subset.files.length);
      const rotatedFiles = rotateFiles(subset.files, shift);

      passes.push({
        globalPassNumber: globalPass,
        subsetPassNumber: subsetPass,
        subsetId: subset.id,
        rotation,
        agentRole,
        rotatedFiles,
        description: formatPassDescription(subset, subsetPass, rotation, agentRole),
      });
    }
  }

  return passes;
}

/**
 * Determine which rotation is active for a given subset pass number.
 *
 * Passes 1-3: Rotation A (base ordering)
 * Passes 4-6: Rotation B (mid files to primacy)
 * Passes 7-8: Rotation C (last files to primacy)
 */
function getRotationForPass(subsetPass: number): 'A' | 'B' | 'C' {
  if (subsetPass <= 3) return 'A';
  if (subsetPass <= 6) return 'B';
  return 'C';
}

/**
 * Determine the agent role for a given subset pass number.
 *
 * The rhythm is: Build, Verify, Build, Build, Verify, Build, Build, Verify
 * Passes 1, 3, 4, 6, 7: Builder
 * Passes 2, 5, 8: Verifier
 */
function getAgentRoleForPass(subsetPass: number): AgentRole {
  const verifierPasses = [2, 5, 8];
  return verifierPasses.includes(subsetPass) ? 'verifier' : 'builder';
}

/**
 * Compute the file array shift for a rotation.
 *
 * For N files:
 *   Rotation A: shift = 0
 *   Rotation B: shift = floor(N * 2/5) -- approximates "mid files to primacy"
 *   Rotation C: shift = floor(N * 4/5) -- approximates "last files to primacy"
 *
 * For the standard 5-file subset:
 *   A: shift 0 -> [0,1,2,3,4]
 *   B: shift 2 -> [2,3,4,0,1]
 *   C: shift 4 -> [4,0,1,2,3]
 */
function getShiftForRotation(rotation: 'A' | 'B' | 'C', fileCount: number): number {
  switch (rotation) {
    case 'A': return 0;
    case 'B': return Math.floor(fileCount * 2 / 5);
    case 'C': return Math.floor(fileCount * 4 / 5);
  }
}

/**
 * Format a human-readable pass description for logging and prompt embedding.
 */
function formatPassDescription(
  subset: CorpusSubset,
  subsetPass: number,
  rotation: 'A' | 'B' | 'C',
  role: AgentRole
): string {
  const roleLabel = role === 'builder' ? 'Builder' : 'Verifier';
  const rotationLabel = { A: 'Base ordering', B: 'Mid files promoted', C: 'Last files promoted' }[rotation];
  return `[${subset.id}] Pass ${subsetPass}/8 — Rotation ${rotation} (${rotationLabel}) — ${roleLabel} — ${subset.theme}`;
}
```

### 4.3 Prompt Construction

```typescript
// ═══════════════════════════════════════════════════════════════
// PROMPT CONSTRUCTION — Assembles the full prompt for claude -p
// ═══════════════════════════════════════════════════════════════

/**
 * Construct the complete prompt for a single pass.
 * This is the core of the orchestrator: it reads files from disk,
 * assembles them in the correct order, wraps them in the appropriate
 * prompt template, and returns the full string to send to claude -p.
 *
 * @param pass - The pass definition
 * @param config - Pipeline configuration
 * @param state - Current pipeline state
 * @returns The complete prompt string
 */
async function constructPrompt(
  pass: PassDefinition,
  config: PipelineConfig,
  state: PipelineState
): Promise<string> {
  const sections: string[] = [];

  // ── Section 1: System context ──
  sections.push(buildSystemContext(pass, config));

  // ── Section 2: Reference files (always loaded) ──
  sections.push(await buildReferenceSection(config));

  // ── Section 3: Accumulated state (conviction layer + discovery log) ──
  if (state.lastCompletedPass > 0) {
    sections.push(await buildAccumulatedState(state));
  }

  // ── Section 4: Previous verifier observations (for builder passes 3, 6) ──
  if (pass.agentRole === 'builder' && [3, 6].includes(pass.subsetPassNumber)) {
    const prevVerifierPass = pass.globalPassNumber - 1;
    const prevRecord = state.passRecords[prevVerifierPass];
    if (prevRecord) {
      sections.push(await buildVerifierObservations(prevRecord));
    }
  }

  // ── Section 5: The artifact (current state of the HTML) ──
  sections.push(await buildArtifactSection(state.currentArtifactPath, pass.agentRole));

  // ── Section 6: Corpus files in rotated order ──
  sections.push(await buildCorpusSection(pass.rotatedFiles));

  // ── Section 7: The content markdown ──
  sections.push(await buildContentSection(config.contentPath));

  // ── Section 8: Task instructions (role-specific) ──
  sections.push(buildTaskInstructions(pass, config));

  return sections.join('\n\n---\n\n');
}

/**
 * Build the system context section.
 * This tells the LLM what it is, what pass this is, and what
 * the orchestrator expects.
 */
function buildSystemContext(pass: PassDefinition, config: PipelineConfig): string {
  return `
# DETERMINISTIC ORCHESTRATOR — ${pass.description}

You are ${pass.agentRole === 'builder' ? 'a BUILDER' : 'a VERIFIER'} in pass ${pass.globalPassNumber} of a multi-pass corpus integration pipeline.

## What You Know
- This is pass ${pass.subsetPassNumber} of 8 for corpus subset "${pass.subsetId}" (${pass.description}).
- Rotation ${pass.rotation} is active. The corpus files below appear in ${pass.rotation === 'A' ? 'base' : pass.rotation === 'B' ? 'mid-promoted' : 'last-promoted'} ordering.
- ${pass.agentRole === 'builder' ? 'Your job is to integrate the raw material into the artifact. Read the corpus files deeply and let them shape how the artifact expresses this content.' : 'Your job is to holistically evaluate whether the artifact fully integrates the raw material. What is present? What is missing? What is surface-level vs deeply woven?'}

## What You Must Produce
${pass.agentRole === 'builder'
  ? `Output the COMPLETE updated HTML artifact. Start with <!DOCTYPE html> and end with </html>. Include ALL content — do not truncate or abbreviate. The artifact must be a self-contained single-file HTML page with embedded CSS.`
  : `Output your observations in markdown format. Structure:
  1. WHAT IS DEEPLY INTEGRATED — material from the corpus that has genuinely shaped the artifact
  2. WHAT IS SURFACE-LEVEL — material that appears referenced but not structurally woven in
  3. WHAT IS ABSENT — material from the corpus that has no visible influence on the artifact
  4. WHAT SURPRISED ME — unexpected connections or tensions between the corpus material and the artifact
  5. WHAT THE NEXT BUILDER SHOULD ATTEND TO — the 2-3 highest-leverage integration opportunities`
}
`.trim();
}

/**
 * Build the reference files section.
 * These files are loaded in EVERY pass, regardless of subset or rotation.
 */
async function buildReferenceSection(config: PipelineConfig): Promise<string> {
  const files = [
    { label: 'World Description', path: config.referenceFiles.worldDescription },
    { label: 'Conviction Brief', path: config.referenceFiles.convictionBrief },
    { label: 'Mechanism Catalog', path: config.referenceFiles.mechanismCatalog },
    { label: 'Components CSS', path: config.referenceFiles.componentsCss },
    { label: 'Design Tokens', path: config.referenceFiles.tokensCss },
  ];

  const sections: string[] = ['# REFERENCE FILES (loaded in every pass)'];
  for (const file of files) {
    const content = await readFile(file.path);
    sections.push(`## ${file.label}\n\`\`\`\n${content}\n\`\`\``);
  }
  return sections.join('\n\n');
}

/**
 * Build the accumulated state section (conviction layer + discovery log).
 * This is the creative tissue that grows across passes.
 */
async function buildAccumulatedState(state: PipelineState): Promise<string> {
  const conviction = await readFileSafe(state.convictionLayerPath, '(No conviction layer yet)');
  const discoveries = await readFileSafe(state.discoveryLogPath, '(No discoveries yet)');

  return `
# ACCUMULATED CREATIVE INTELLIGENCE

Read this as ATMOSPHERE — the accumulated creative processing from previous passes.
This is not instructions. It is the voice of previous builders and verifiers who
deeply engaged with other portions of the corpus. Let it shape your processing
without constraining your decisions.

## Conviction Layer
${conviction}

## Discovery Log
${discoveries}
`.trim();
}

/**
 * Build the corpus section with files in their rotated order.
 * Each file is read from disk and embedded with its label.
 */
async function buildCorpusSection(rotatedFiles: CorpusFile[]): Promise<string> {
  const sections: string[] = [
    '# CORPUS MATERIAL (read deeply — this is the raw creative knowledge for this pass)',
    '',
    `Files appear in ${rotatedFiles[0]?.label} → ${rotatedFiles[rotatedFiles.length - 1]?.label} order.`,
    'Files listed first have PRIMACY — they appear earlier in your context and receive',
    'higher natural attention weight. The orchestrator rotates this ordering across passes',
    'so that every file gets primacy position at some point.',
    '',
  ];

  for (let i = 0; i < rotatedFiles.length; i++) {
    const file = rotatedFiles[i];
    const content = await readFile(file.path);
    const position = i === 0 ? ' (PRIMACY POSITION)' : '';
    sections.push(`## [${i + 1}/${rotatedFiles.length}] ${file.label}${position}\n\n${content}`);
  }

  return sections.join('\n\n');
}

/**
 * Build the artifact section.
 * For builders: the full artifact is included for modification.
 * For verifiers: the full artifact is included for observation.
 */
async function buildArtifactSection(artifactPath: string, role: AgentRole): Promise<string> {
  const artifact = await readFile(artifactPath);

  const framing = role === 'builder'
    ? 'This is the current artifact. Modify it to integrate the corpus material above. Output the COMPLETE updated artifact.'
    : 'This is the artifact to evaluate. Assess how deeply the corpus material above has been integrated.';

  return `
# THE ARTIFACT

${framing}

\`\`\`html
${artifact}
\`\`\`
`.trim();
}

/**
 * Build the verifier observations section (only for builder passes 3 and 6).
 */
async function buildVerifierObservations(prevRecord: PassRecord): Promise<string> {
  const observations = await readFile(prevRecord.rawOutputPath);

  return `
# VERIFIER OBSERVATIONS FROM PREVIOUS PASS

The verifier assessed how well the corpus material was integrated.
Address their observations — especially items listed under
"WHAT IS ABSENT" and "WHAT THE NEXT BUILDER SHOULD ATTEND TO."

${observations}
`.trim();
}

/**
 * Build task-specific instructions based on the agent role.
 */
function buildTaskInstructions(pass: PassDefinition, config: PipelineConfig): string {
  if (pass.agentRole === 'builder') {
    return buildBuilderInstructions(pass);
  } else {
    return buildVerifierInstructions(pass);
  }
}

/**
 * Builder-specific instructions.
 */
function buildBuilderInstructions(pass: PassDefinition): string {
  const isFirstPass = pass.subsetPassNumber === 1;
  const isAddressingVerifier = [3, 6].includes(pass.subsetPassNumber);
  const isNewRotation = [4, 7].includes(pass.subsetPassNumber);

  let focus: string;
  if (isFirstPass) {
    focus = 'This is the first pass for this subset. Read the corpus files deeply and integrate their creative intelligence into the artifact. Let the material shape how you build — not as rules to follow, but as atmosphere to inhabit.';
  } else if (isAddressingVerifier) {
    focus = 'The verifier found gaps in the previous pass. Read their observations above and address them. Focus on items marked ABSENT and SURFACE-LEVEL — deepen the integration of this corpus material into the artifact.';
  } else if (isNewRotation) {
    focus = `New rotation: files that were last in previous passes are now first. Re-read the corpus material with fresh attention — the files now in primacy position may reveal integration opportunities you missed when they appeared later in the ordering.`;
  } else {
    focus = 'Continue integrating the corpus material. Focus on depth over breadth — it is better to deeply integrate 2 files than to superficially reference all 5.';
  }

  return `
# YOUR TASK: BUILD

${focus}

## Output Requirements
1. Output the COMPLETE HTML artifact. Start with \`<!DOCTYPE html>\` and end with \`</html>\`.
2. Do NOT truncate, abbreviate, or use placeholder comments like "rest of content here."
3. Every line of the artifact must be present in your output.
4. Container width must be 940-960px. This is non-negotiable.

## After writing the artifact, append a CONVICTION ADDITION:

Write 2-5 sentences about what this corpus material taught you — what you now BELIEVE about this design system that you did not believe before reading these files. This will be appended to the conviction layer for future passes.

Format:
\`\`\`
<!-- CONVICTION_ADDITION_START -->
[Your 2-5 sentences here]
<!-- CONVICTION_ADDITION_END -->
\`\`\`

## Also append a DISCOVERY LOG entry:

Write 3-5 specific discoveries — moments where the corpus material surprised you or contradicted your expectations. Name the file, name the moment, name the surprise.

Format:
\`\`\`
<!-- DISCOVERY_LOG_START -->
[Your discoveries here]
<!-- DISCOVERY_LOG_END -->
\`\`\`
`.trim();
}

/**
 * Verifier-specific instructions.
 */
function buildVerifierInstructions(pass: PassDefinition): string {
  return `
# YOUR TASK: VERIFY

Holistically evaluate how deeply the corpus material has been integrated into the artifact.

You are not checking compliance. You are perceiving DEPTH OF INTEGRATION.
A deeply integrated corpus insight shapes the artifact's structure, rhythm,
or aesthetic decisions. A surface-level reference merely names a concept
without letting it influence the design.

## Output Structure (mandatory):

### 1. WHAT IS DEEPLY INTEGRATED
List specific corpus insights that have genuinely shaped the artifact. Quote the
relevant CSS or HTML. Name the corpus file and the specific insight. Explain HOW
the insight shaped the artifact, not just that it is present.

### 2. WHAT IS SURFACE-LEVEL
List corpus insights that appear referenced but not structurally woven in.
Explain the difference between how they appear and how deep integration would look.

### 3. WHAT IS ABSENT
List corpus insights that have NO visible influence on the artifact. For each,
suggest how it COULD be integrated without breaking existing integration.

### 4. WHAT SURPRISED ME
Any unexpected connections or tensions between corpus material and the artifact.

### 5. WHAT THE NEXT BUILDER SHOULD ATTEND TO
The 2-3 highest-leverage integration opportunities. Be specific: name the corpus
file, name the insight, describe what the builder should do.

## Also append conviction and discovery sections (same format as builder):

\`\`\`
<!-- CONVICTION_ADDITION_START -->
[Your 2-5 sentences]
<!-- CONVICTION_ADDITION_END -->

<!-- DISCOVERY_LOG_START -->
[Your 3-5 discoveries]
<!-- DISCOVERY_LOG_END -->
\`\`\`
`.trim();
}
```

### 4.4 Pass Execution

```typescript
// ═══════════════════════════════════════════════════════════════
// PASS EXECUTION — Runs a single claude -p invocation
// ═══════════════════════════════════════════════════════════════

/**
 * Execute a single pass. This is the atomic unit of the orchestrator.
 *
 * Steps:
 * 1. Back up the current artifact (builder passes only)
 * 2. Construct the prompt
 * 3. Write the prompt to disk (for debugging and resume)
 * 4. Invoke claude -p with the prompt
 * 5. Parse the output
 * 6. Validate the output
 * 7. Extract and apply conviction/discovery additions
 * 8. Update the artifact (builder passes only)
 * 9. Record the pass
 * 10. Persist state
 *
 * @param pass - The pass definition
 * @param config - Pipeline configuration
 * @param state - Current pipeline state (mutated in place)
 * @returns Updated state
 *
 * @throws PassExecutionError if the pass fails after all retries
 */
async function executePass(
  pass: PassDefinition,
  config: PipelineConfig,
  state: PipelineState
): Promise<PipelineState> {
  const passDir = path.join(config.outputDir, '_orchestrator', 'passes', `pass-${String(pass.globalPassNumber).padStart(3, '0')}`);
  await fs.mkdir(passDir, { recursive: true });

  const startedAt = new Date();
  log.info(`\n${'═'.repeat(70)}`);
  log.info(`PASS ${pass.globalPassNumber}/${state.totalPasses}: ${pass.description}`);
  log.info(`${'═'.repeat(70)}`);

  // Step 1: Backup artifact (builder passes only)
  let backupPath: string | null = null;
  if (pass.agentRole === 'builder') {
    backupPath = path.join(passDir, 'artifact-backup.html');
    await fs.copyFile(state.currentArtifactPath, backupPath);
    state.artifactBackups.push(backupPath);
    log.info(`  Artifact backed up to ${backupPath}`);
  }

  // Step 2: Construct prompt
  const prompt = await constructPrompt(pass, config, state);
  const promptPath = path.join(passDir, 'prompt.md');
  await fs.writeFile(promptPath, prompt, 'utf-8');
  log.info(`  Prompt written (${prompt.length} chars, ~${Math.round(prompt.length / 4)} tokens)`);

  // Step 3: Execute with retries
  let rawOutput: string = '';
  let exitCode: number = 1;
  let inputTokens = 0;
  let outputTokens = 0;
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= config.maxRetries + 1; attempt++) {
    try {
      log.info(`  Invoking claude -p (attempt ${attempt}/${config.maxRetries + 1})...`);
      const result = await invokeClaudeP(prompt, config);
      rawOutput = result.output;
      exitCode = result.exitCode;
      inputTokens = result.inputTokens;
      outputTokens = result.outputTokens;

      if (exitCode === 0) break;

      log.warn(`  claude -p exited with code ${exitCode}. ${attempt <= config.maxRetries ? 'Retrying...' : 'All retries exhausted.'}`);
      lastError = new Error(`claude -p exit code ${exitCode}`);

      if (attempt <= config.maxRetries) {
        await sleep(config.retryDelayMs);
      }
    } catch (err) {
      lastError = err as Error;
      log.error(`  Invocation error: ${lastError.message}`);
      if (attempt <= config.maxRetries) {
        await sleep(config.retryDelayMs);
      }
    }
  }

  if (exitCode !== 0) {
    // Save what we have and throw
    await fs.writeFile(path.join(passDir, 'raw-output-FAILED.txt'), rawOutput || '(empty)', 'utf-8');
    await saveState(config.outputDir, state);
    throw new PassExecutionError(pass, lastError?.message || 'Unknown error');
  }

  // Step 4: Save raw output
  const rawOutputPath = path.join(passDir, 'raw-output.txt');
  await fs.writeFile(rawOutputPath, rawOutput, 'utf-8');
  log.info(`  Output received (${rawOutput.length} chars, ~${outputTokens} tokens)`);

  // Step 5: Validate
  const validation = validatePassOutput(rawOutput, pass);
  if (!validation.passed) {
    log.warn(`  Validation FAILED: ${validation.checks.filter(c => !c.passed).map(c => c.name).join(', ')}`);
    for (const check of validation.checks.filter(c => !c.passed)) {
      log.warn(`    - ${check.name}: ${check.detail}`);
    }
  }
  for (const warning of validation.warnings) {
    log.warn(`  WARNING: ${warning}`);
  }

  // Step 6: Extract conviction and discovery additions
  const { convictionAddition, discoveryAddition } = extractAccumulation(rawOutput);
  if (convictionAddition) {
    await appendToFile(state.convictionLayerPath, formatConvictionEntry(pass, convictionAddition));
    log.info(`  Conviction addition appended (${convictionAddition.length} chars)`);
  }
  if (discoveryAddition) {
    await appendToFile(state.discoveryLogPath, formatDiscoveryEntry(pass, discoveryAddition));
    log.info(`  Discovery log updated (${discoveryAddition.length} chars)`);
  }

  // Step 7: Update artifact (builder passes only)
  let artifactPath: string | null = null;
  if (pass.agentRole === 'builder') {
    const extractedArtifact = extractHTMLArtifact(rawOutput);
    if (extractedArtifact) {
      artifactPath = state.currentArtifactPath;
      await fs.writeFile(artifactPath, extractedArtifact, 'utf-8');
      log.info(`  Artifact updated (${extractedArtifact.length} chars)`);
    } else {
      log.error(`  FAILED to extract HTML artifact from builder output`);
      validation.passed = false;
      validation.checks.push({ name: 'artifact-extraction', passed: false, detail: 'Could not extract HTML from builder output' });
    }
  }

  // Step 8: Record the pass
  const completedAt = new Date();
  const estimatedCost = estimateCost(inputTokens, outputTokens, config.model);
  const record: PassRecord = {
    passNumber: pass.globalPassNumber,
    definition: pass,
    startedAt: startedAt.toISOString(),
    completedAt: completedAt.toISOString(),
    durationMs: completedAt.getTime() - startedAt.getTime(),
    exitCode,
    promptPath,
    rawOutputPath,
    backupPath,
    artifactPath,
    validationPassed: validation.passed,
    validationDetails: validation,
    tokens: { inputTokens, outputTokens, estimatedCostUsd: estimatedCost },
  };

  state.passRecords[pass.globalPassNumber] = record;
  state.lastCompletedPass = pass.globalPassNumber;

  // Step 9: Update cost tracking
  updateCostTracker(state.cost, record, pass);

  // Step 10: Persist state
  await saveState(config.outputDir, state);

  // Log summary
  const durationSec = (record.durationMs / 1000).toFixed(1);
  log.info(`  PASS ${pass.globalPassNumber} COMPLETE in ${durationSec}s | ${inputTokens} in / ${outputTokens} out | $${estimatedCost.toFixed(2)} | validation: ${validation.passed ? 'PASS' : 'FAIL'}`);

  return state;
}
```

### 4.5 `claude -p` Invocation

```typescript
// ═══════════════════════════════════════════════════════════════
// CLAUDE -P INVOCATION — The interface to Claude Code's pipe mode
// ═══════════════════════════════════════════════════════════════

interface ClaudePResult {
  output: string;
  exitCode: number;
  inputTokens: number;
  outputTokens: number;
}

/**
 * Invoke claude -p with a prompt string.
 *
 * Flags used:
 *   --print (-p)       : Print mode — reads prompt from stdin, outputs to stdout
 *   --model            : Model selection
 *   --output-format    : 'text' for raw text output
 *   --max-turns 1      : Single turn, no tool use, no conversation
 *   --verbose          : Includes token usage in stderr (parsed for cost tracking)
 *
 * The prompt is piped via stdin. Output comes from stdout.
 * Token usage is parsed from stderr (when --verbose is used).
 *
 * @param prompt - The complete prompt string
 * @param config - Pipeline configuration (for model, timeout)
 * @returns The result including output and token counts
 */
async function invokeClaudeP(prompt: string, config: PipelineConfig): Promise<ClaudePResult> {
  return new Promise((resolve, reject) => {
    const args = [
      '--print',
      '--model', config.model,
      '--output-format', 'text',
      '--max-turns', '1',
      '--verbose',
    ];

    const proc = spawn('claude', args, {
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: config.passTimeoutMs,
    });

    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (chunk: Buffer) => { stdout += chunk.toString(); });
    proc.stderr.on('data', (chunk: Buffer) => { stderr += chunk.toString(); });

    // Write prompt to stdin
    proc.stdin.write(prompt);
    proc.stdin.end();

    proc.on('close', (code) => {
      const tokenUsage = parseTokenUsage(stderr);
      resolve({
        output: stdout,
        exitCode: code ?? 1,
        inputTokens: tokenUsage.input,
        outputTokens: tokenUsage.output,
      });
    });

    proc.on('error', (err) => {
      reject(new Error(`Failed to spawn claude: ${err.message}`));
    });
  });
}

/**
 * Parse token usage from claude -p verbose stderr output.
 *
 * The verbose output includes lines like:
 *   "Input tokens: 45231"
 *   "Output tokens: 12843"
 *
 * If parsing fails, returns estimates based on character counts.
 */
function parseTokenUsage(stderr: string): { input: number; output: number } {
  const inputMatch = stderr.match(/input.?tokens?:?\s*(\d[\d,]*)/i);
  const outputMatch = stderr.match(/output.?tokens?:?\s*(\d[\d,]*)/i);

  return {
    input: inputMatch ? parseInt(inputMatch[1].replace(/,/g, ''), 10) : 0,
    output: outputMatch ? parseInt(outputMatch[1].replace(/,/g, ''), 10) : 0,
  };
}
```

### 4.6 Output Parsing and Validation

```typescript
// ═══════════════════════════════════════════════════════════════
// OUTPUT PARSING — Extract artifacts and accumulation from LLM output
// ═══════════════════════════════════════════════════════════════

/**
 * Extract the HTML artifact from a builder's output.
 *
 * The builder is instructed to output the complete HTML starting with
 * <!DOCTYPE html>. This function finds the HTML content and strips
 * any surrounding markdown code fences or preamble text.
 *
 * Strategy:
 * 1. Look for ```html ... ``` fenced block
 * 2. If not found, look for <!DOCTYPE html> ... </html>
 * 3. If not found, look for <html> ... </html>
 * 4. If nothing found, return null (validation will catch this)
 */
function extractHTMLArtifact(output: string): string | null {
  // Strategy 1: Fenced code block
  const fencedMatch = output.match(/```html\s*\n([\s\S]*?)```/);
  if (fencedMatch) {
    const html = fencedMatch[1].trim();
    if (html.includes('</html>')) return html;
  }

  // Strategy 2: DOCTYPE to /html
  const doctypeMatch = output.match(/(<!DOCTYPE html[\s\S]*?<\/html>)/i);
  if (doctypeMatch) return doctypeMatch[1].trim();

  // Strategy 3: html to /html
  const htmlMatch = output.match(/(<html[\s\S]*?<\/html>)/i);
  if (htmlMatch) return htmlMatch[1].trim();

  return null;
}

/**
 * Extract conviction addition and discovery log from output.
 *
 * Uses the structured markers:
 *   <!-- CONVICTION_ADDITION_START --> ... <!-- CONVICTION_ADDITION_END -->
 *   <!-- DISCOVERY_LOG_START --> ... <!-- DISCOVERY_LOG_END -->
 */
function extractAccumulation(output: string): {
  convictionAddition: string | null;
  discoveryAddition: string | null;
} {
  const convictionMatch = output.match(
    /<!--\s*CONVICTION_ADDITION_START\s*-->([\s\S]*?)<!--\s*CONVICTION_ADDITION_END\s*-->/
  );
  const discoveryMatch = output.match(
    /<!--\s*DISCOVERY_LOG_START\s*-->([\s\S]*?)<!--\s*DISCOVERY_LOG_END\s*-->/
  );

  return {
    convictionAddition: convictionMatch ? convictionMatch[1].trim() : null,
    discoveryAddition: discoveryMatch ? discoveryMatch[1].trim() : null,
  };
}

/**
 * Validate a pass's output based on agent role.
 */
function validatePassOutput(output: string, pass: PassDefinition): ValidationResult {
  const checks: ValidationCheck[] = [];
  const warnings: string[] = [];

  // Universal checks
  checks.push({
    name: 'non-empty',
    passed: output.length > 0,
    detail: output.length === 0 ? 'Output is empty' : undefined,
  });

  checks.push({
    name: 'minimum-length',
    passed: output.length > 500,
    detail: output.length <= 500 ? `Output is only ${output.length} chars — suspiciously short` : undefined,
  });

  if (pass.agentRole === 'builder') {
    // Builder-specific checks
    const artifact = extractHTMLArtifact(output);

    checks.push({
      name: 'html-present',
      passed: artifact !== null,
      detail: artifact === null ? 'No HTML artifact found in output' : undefined,
    });

    if (artifact) {
      checks.push({
        name: 'html-complete',
        passed: artifact.includes('</html>') && artifact.includes('</body>'),
        detail: 'HTML artifact may be truncated (missing </html> or </body>)',
      });

      // Container width check (the non-negotiable constraint)
      const containerWidthMatch = artifact.match(/max-width\s*:\s*(\d+)px/g);
      if (containerWidthMatch) {
        const widths = containerWidthMatch.map(m => parseInt(m.match(/(\d+)/)?.[1] || '0', 10));
        const mainWidth = Math.max(...widths);
        checks.push({
          name: 'container-width',
          passed: mainWidth >= 940 && mainWidth <= 960,
          detail: mainWidth < 940 || mainWidth > 960
            ? `Container width is ${mainWidth}px (must be 940-960px)`
            : undefined,
        });
      }

      // Length sanity check
      if (artifact.length < 2000) {
        warnings.push(`Artifact is short (${artifact.length} chars) — may be missing content`);
      }
    }

    // Conviction addition check (warning, not failure)
    const { convictionAddition } = extractAccumulation(output);
    if (!convictionAddition) {
      warnings.push('No conviction addition found in builder output');
    }

  } else {
    // Verifier-specific checks
    checks.push({
      name: 'has-observations',
      passed: output.includes('DEEPLY INTEGRATED') || output.includes('SURFACE-LEVEL') || output.includes('ABSENT'),
      detail: 'Verifier output does not contain expected observation sections',
    });

    checks.push({
      name: 'no-html-artifact',
      passed: !output.includes('<!DOCTYPE html>') && !output.includes('<html'),
      detail: 'Verifier output contains HTML artifact — verifiers should observe, not build',
    });
  }

  return {
    passed: checks.every(c => c.passed),
    checks,
    warnings,
  };
}
```

### 4.7 State Management and Resume

```typescript
// ═══════════════════════════════════════════════════════════════
// STATE MANAGEMENT — Persistence, resume, and recovery
// ═══════════════════════════════════════════════════════════════

const STATE_FILE = '_orchestrator/state.json';

/**
 * Initialize fresh pipeline state.
 */
function initializeState(config: PipelineConfig): PipelineState {
  const outputDir = config.outputDir;
  const orchestratorDir = path.join(outputDir, '_orchestrator');

  return {
    version: 2,
    startedAt: new Date().toISOString(),
    lastSavedAt: new Date().toISOString(),
    totalPasses: config.subsets.length * 8, // 7 subsets * 8 passes = 56
    lastCompletedPass: 0,
    currentPhase: 'corpus-integration',
    passRecords: {},
    currentArtifactPath: config.initialArtifactPath,
    artifactBackups: [],
    convictionLayerPath: path.join(orchestratorDir, 'conviction-layer.md'),
    discoveryLogPath: path.join(orchestratorDir, 'discovery-log.md'),
    cost: {
      totalInputTokens: 0,
      totalOutputTokens: 0,
      totalEstimatedCostUsd: 0,
      byRole: {
        builder: { inputTokens: 0, outputTokens: 0, costUsd: 0 },
        verifier: { inputTokens: 0, outputTokens: 0, costUsd: 0 },
        pa: { inputTokens: 0, outputTokens: 0, costUsd: 0 },
      },
      bySubset: {},
    },
    configHash: hashConfig(config),
  };
}

/**
 * Save state to disk. Called after every pass.
 * Uses atomic write (write to temp file, then rename) to prevent
 * corruption if the process crashes mid-write.
 */
async function saveState(outputDir: string, state: PipelineState): Promise<void> {
  const statePath = path.join(outputDir, STATE_FILE);
  const tempPath = statePath + '.tmp';
  state.lastSavedAt = new Date().toISOString();

  await fs.mkdir(path.dirname(statePath), { recursive: true });
  await fs.writeFile(tempPath, JSON.stringify(state, null, 2), 'utf-8');
  await fs.rename(tempPath, statePath);
}

/**
 * Load state from disk. Returns null if no state file exists.
 * Validates the state version before returning.
 */
async function loadState(outputDir: string): Promise<PipelineState | null> {
  const statePath = path.join(outputDir, STATE_FILE);
  try {
    const raw = await fs.readFile(statePath, 'utf-8');
    const state = JSON.parse(raw) as PipelineState;

    if (state.version !== 2) {
      log.warn(`State file version ${state.version} does not match expected version 2. Cannot resume.`);
      return null;
    }

    return state;
  } catch {
    return null;
  }
}

/**
 * Archive an existing state file before starting fresh.
 */
async function archiveState(outputDir: string, state: PipelineState): Promise<void> {
  const statePath = path.join(outputDir, STATE_FILE);
  const archivePath = path.join(
    outputDir,
    '_orchestrator',
    'archives',
    `state-${state.startedAt.replace(/[:.]/g, '-')}.json`
  );
  await fs.mkdir(path.dirname(archivePath), { recursive: true });
  await fs.copyFile(statePath, archivePath);
}

/**
 * Hash the pipeline configuration for resume verification.
 * If the config changes between runs, we cannot safely resume
 * because pass definitions may have shifted.
 */
function hashConfig(config: PipelineConfig): string {
  const crypto = require('crypto');
  const significant = {
    subsets: config.subsets.map(s => ({
      id: s.id,
      files: s.files.map(f => f.path),
    })),
    model: config.model,
    contentPath: config.contentPath,
  };
  return crypto.createHash('sha256').update(JSON.stringify(significant)).digest('hex').slice(0, 16);
}
```

### 4.8 Main Execution Loop

```typescript
// ═══════════════════════════════════════════════════════════════
// MAIN EXECUTION LOOP — Drives the entire pipeline
// ═══════════════════════════════════════════════════════════════

/**
 * Run the corpus integration phase: 7 subsets x 8 passes = 56 passes.
 *
 * The loop is simple because all complexity lives in the pass definitions
 * and prompt construction. The orchestrator's job is to march through
 * passes in order, handling errors and persisting state.
 */
async function runCorpusIntegration(
  config: PipelineConfig,
  state: PipelineState,
  allPasses: PassDefinition[]
): Promise<PipelineState> {

  log.info('\n' + '='.repeat(70));
  log.info('CORPUS INTEGRATION PHASE');
  log.info(`Passes: ${state.lastCompletedPass + 1} to ${allPasses.length}`);
  log.info('='.repeat(70));

  for (const pass of allPasses) {
    // Skip already-completed passes (resume support)
    if (pass.globalPassNumber <= state.lastCompletedPass) {
      log.info(`  Skipping pass ${pass.globalPassNumber} (already completed)`);
      continue;
    }

    // Log subset transition
    if (pass.subsetPassNumber === 1) {
      const subset = config.subsets.find(s => s.id === pass.subsetId)!;
      log.info('\n' + '-'.repeat(70));
      log.info(`SUBSET ${subset.id}: ${subset.theme}`);
      log.info(`Files: ${subset.files.map(f => f.label).join(' → ')}`);
      log.info(`Estimated tokens: ${subset.totalEstimatedTokens.toLocaleString()}`);
      log.info('-'.repeat(70));
    }

    // Log rotation transition
    if ([1, 4, 7].includes(pass.subsetPassNumber)) {
      log.info(`  ─── Rotation ${pass.rotation} ───`);
      log.info(`  File order: ${pass.rotatedFiles.map(f => f.label).join(' → ')}`);
    }

    // Execute the pass
    try {
      state = await executePass(pass, config, state);
    } catch (err) {
      if (err instanceof PassExecutionError) {
        log.error(`\nFATAL: Pass ${pass.globalPassNumber} failed after all retries.`);
        log.error(`Error: ${err.message}`);
        log.error(`State saved. Resume with the same configuration to retry from pass ${pass.globalPassNumber}.`);
        throw err;
      }
      throw err;
    }

    // Log running totals
    if (pass.subsetPassNumber === 8) {
      logSubsetSummary(state, pass.subsetId);
    }
  }

  // Transition to PA hardening phase
  state.currentPhase = 'pa-hardening';
  await saveState(config.outputDir, state);

  log.info('\n' + '='.repeat(70));
  log.info('CORPUS INTEGRATION PHASE COMPLETE');
  logCostSummary(state.cost);
  log.info('='.repeat(70));

  return state;
}
```

---

## 5. PA Hardening Phase

```typescript
// ═══════════════════════════════════════════════════════════════
// PA HARDENING — Screenshot → Auditors → Weaver → Refine cycles
// ═══════════════════════════════════════════════════════════════

/**
 * Run the PA hardening phase. This is adaptive: it runs cycles until
 * the PA score meets the threshold or the maximum cycle count is reached.
 *
 * Each cycle:
 * 1. Take screenshots at all viewports
 * 2. Run 3 PA auditors in parallel (each gets different questions)
 * 3. Run 1 PA weaver to synthesize auditor reports
 * 4. Run 1 REFINE builder with weaver synthesis
 * 5. Evaluate PA score; if >= threshold, stop
 *
 * @param config - Pipeline configuration
 * @param state - Current pipeline state
 * @returns Updated state
 */
async function runPAHardening(
  config: PipelineConfig,
  state: PipelineState
): Promise<PipelineState> {

  log.info('\n' + '='.repeat(70));
  log.info('PA HARDENING PHASE');
  log.info('='.repeat(70));

  for (let cycle = 1; cycle <= config.paHardeningCycles; cycle++) {
    log.info(`\n--- PA Hardening Cycle ${cycle}/${config.paHardeningCycles} ---`);

    // Step 1: Take screenshots
    const screenshotDir = path.join(config.outputDir, '_orchestrator', 'screenshots', `cycle-${cycle}`);
    const screenshotPaths = await captureScreenshots(
      state.currentArtifactPath,
      screenshotDir,
      config.screenshotViewports
    );
    log.info(`  Screenshots captured: ${screenshotPaths.length} images`);

    // Step 2: Run PA auditors (parallel)
    const auditorPrompts = buildPAAuditorPrompts(screenshotPaths, config, cycle);
    const auditorResults = await Promise.all(
      auditorPrompts.map((prompt, i) =>
        invokeClaudeP(prompt, config).then(result => ({
          auditorId: `auditor-${String.fromCharCode(65 + i)}`, // A, B, C
          result,
        }))
      )
    );

    // Save auditor reports
    for (const { auditorId, result } of auditorResults) {
      const reportPath = path.join(screenshotDir, `${auditorId}-report.md`);
      await fs.writeFile(reportPath, result.output, 'utf-8');
      log.info(`  ${auditorId} report saved (${result.output.length} chars)`);
    }

    // Step 3: Run PA weaver
    const weaverPrompt = buildPAWeaverPrompt(
      auditorResults.map(r => r.result.output),
      state,
      config
    );
    const weaverResult = await invokeClaudeP(weaverPrompt, config);
    const weaverReportPath = path.join(screenshotDir, 'weaver-synthesis.md');
    await fs.writeFile(weaverReportPath, weaverResult.output, 'utf-8');
    log.info(`  Weaver synthesis saved (${weaverResult.output.length} chars)`);

    // Step 4: Extract PA score from weaver report
    const paScore = extractPAScore(weaverResult.output);
    log.info(`  PA-05 Score: ${paScore !== null ? paScore.toFixed(1) : 'COULD NOT EXTRACT'}/4`);

    // Step 5: Check threshold
    if (paScore !== null && paScore >= config.paScoreThreshold) {
      log.info(`  PA score ${paScore.toFixed(1)} >= threshold ${config.paScoreThreshold}. Hardening complete.`);
      break;
    }

    // Step 6: Run REFINE builder
    const refinePrompt = buildRefinePrompt(weaverResult.output, state, config);
    const refineResult = await invokeClaudeP(refinePrompt, config);

    const refinedArtifact = extractHTMLArtifact(refineResult.output);
    if (refinedArtifact) {
      // Backup before overwrite
      const backupPath = path.join(screenshotDir, 'artifact-before-refine.html');
      await fs.copyFile(state.currentArtifactPath, backupPath);
      await fs.writeFile(state.currentArtifactPath, refinedArtifact, 'utf-8');
      log.info(`  Artifact refined (${refinedArtifact.length} chars)`);
    } else {
      log.warn(`  REFINE builder did not produce a valid artifact. Skipping.`);
    }

    // Update cost tracking for PA cycle
    const cycleCost =
      auditorResults.reduce((sum, r) => sum + estimateCost(r.result.inputTokens, r.result.outputTokens, config.model), 0) +
      estimateCost(weaverResult.inputTokens, weaverResult.outputTokens, config.model) +
      estimateCost(refineResult.inputTokens, refineResult.outputTokens, config.model);

    state.cost.byRole.pa.costUsd += cycleCost;
    log.info(`  Cycle ${cycle} cost: $${cycleCost.toFixed(2)}`);
  }

  return state;
}

/**
 * Capture screenshots using a deterministic Playwright script.
 *
 * Steps:
 * 1. Start a local HTTP server serving the artifact
 * 2. Launch headless Chromium
 * 3. For each viewport: resize, disable animations, take full-page + viewport screenshots
 * 4. Close browser and server
 *
 * @returns Array of screenshot file paths
 */
async function captureScreenshots(
  artifactPath: string,
  outputDir: string,
  viewports: { width: number; height: number }[]
): Promise<string[]> {
  await fs.mkdir(outputDir, { recursive: true });

  // Start local server
  const server = await startLocalServer(path.dirname(artifactPath));
  const baseUrl = `http://localhost:${server.port}/${path.basename(artifactPath)}`;

  const screenshots: string[] = [];

  try {
    const { chromium } = require('playwright');
    const browser = await chromium.launch({ headless: true });

    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport });

      await page.goto(baseUrl, { waitUntil: 'networkidle' });

      // Disable animations for consistent screenshots
      await page.evaluate(() => {
        const style = document.createElement('style');
        style.textContent = '*, *::before, *::after { animation: none !important; transition: none !important; opacity: 1 !important; }';
        document.head.appendChild(style);
      });

      // Wait for fonts
      await page.evaluate(() => document.fonts.ready);

      // Full page screenshot
      const fullPagePath = path.join(outputDir, `full-${viewport.width}x${viewport.height}.png`);
      await page.screenshot({ path: fullPagePath, fullPage: true });
      screenshots.push(fullPagePath);

      // Viewport screenshot (above-the-fold)
      const viewportPath = path.join(outputDir, `viewport-${viewport.width}x${viewport.height}.png`);
      await page.screenshot({ path: viewportPath });
      screenshots.push(viewportPath);

      // Scroll-through screenshots (every viewport height)
      const pageHeight = await page.evaluate(() => document.body.scrollHeight);
      const scrollSteps = Math.ceil(pageHeight / viewport.height);
      for (let step = 1; step < scrollSteps; step++) {
        await page.evaluate((y: number) => window.scrollTo(0, y), step * viewport.height);
        await page.waitForTimeout(100); // Brief settle
        const scrollPath = path.join(outputDir, `scroll-${viewport.width}x${viewport.height}-step${step}.png`);
        await page.screenshot({ path: scrollPath });
        screenshots.push(scrollPath);
      }

      await page.close();
    }

    await browser.close();
  } finally {
    server.close();
  }

  return screenshots;
}

/**
 * Extract PA-05 score from weaver synthesis.
 * Looks for patterns like "PA-05: 3.5/4" or "PA-05 score: 3.5"
 */
function extractPAScore(weaverReport: string): number | null {
  const patterns = [
    /PA-05\s*:?\s*(\d+\.?\d*)\s*\/\s*4/i,
    /PA-05\s+score\s*:?\s*(\d+\.?\d*)/i,
    /overall\s+score\s*:?\s*(\d+\.?\d*)\s*\/\s*4/i,
  ];

  for (const pattern of patterns) {
    const match = weaverReport.match(pattern);
    if (match) {
      const score = parseFloat(match[1]);
      if (score >= 0 && score <= 4) return score;
    }
  }

  return null;
}
```

---

## 6. Logging and Cost Tracking

```typescript
// ═══════════════════════════════════════════════════════════════
// LOGGING — Structured logging to both console and file
// ═══════════════════════════════════════════════════════════════

/**
 * Logger that writes to both console and a log file.
 * Each line is timestamped. Log levels: INFO, WARN, ERROR.
 * The log file is append-only and survives crashes.
 */
class Logger {
  private logPath: string;
  private stream: fs.WriteStream | null = null;

  constructor(outputDir: string) {
    this.logPath = path.join(outputDir, '_orchestrator', 'orchestrator.log');
  }

  async init(): Promise<void> {
    await fs.mkdir(path.dirname(this.logPath), { recursive: true });
    this.stream = createWriteStream(this.logPath, { flags: 'a' });
  }

  private write(level: string, msg: string): void {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] [${level}] ${msg}`;
    console.log(line);
    this.stream?.write(line + '\n');
  }

  info(msg: string): void { this.write('INFO', msg); }
  warn(msg: string): void { this.write('WARN', msg); }
  error(msg: string): void { this.write('ERROR', msg); }
}

// ═══════════════════════════════════════════════════════════════
// COST TRACKING
// ═══════════════════════════════════════════════════════════════

/**
 * Estimate USD cost for a claude -p invocation.
 *
 * Opus 4.6 pricing (as of 2026-02):
 *   Input:  $15 per million tokens
 *   Output: $75 per million tokens
 *
 * These are stored as constants for easy updating.
 */
const PRICING: Record<string, { inputPerMTok: number; outputPerMTok: number }> = {
  'claude-opus-4-6': { inputPerMTok: 15, outputPerMTok: 75 },
  'claude-sonnet-4-6': { inputPerMTok: 3, outputPerMTok: 15 },
};

function estimateCost(inputTokens: number, outputTokens: number, model: string): number {
  const pricing = PRICING[model] || PRICING['claude-opus-4-6'];
  return (inputTokens * pricing.inputPerMTok + outputTokens * pricing.outputPerMTok) / 1_000_000;
}

/**
 * Update the cumulative cost tracker after a pass completes.
 */
function updateCostTracker(cost: CostTracker, record: PassRecord, pass: PassDefinition): void {
  cost.totalInputTokens += record.tokens.inputTokens;
  cost.totalOutputTokens += record.tokens.outputTokens;
  cost.totalEstimatedCostUsd += record.tokens.estimatedCostUsd;

  const roleKey = pass.agentRole as 'builder' | 'verifier';
  cost.byRole[roleKey].inputTokens += record.tokens.inputTokens;
  cost.byRole[roleKey].outputTokens += record.tokens.outputTokens;
  cost.byRole[roleKey].costUsd += record.tokens.estimatedCostUsd;

  if (!cost.bySubset[pass.subsetId]) {
    cost.bySubset[pass.subsetId] = { inputTokens: 0, outputTokens: 0, costUsd: 0 };
  }
  cost.bySubset[pass.subsetId].inputTokens += record.tokens.inputTokens;
  cost.bySubset[pass.subsetId].outputTokens += record.tokens.outputTokens;
  cost.bySubset[pass.subsetId].costUsd += record.tokens.estimatedCostUsd;
}

/**
 * Log a cost summary.
 */
function logCostSummary(cost: CostTracker): void {
  log.info(`  Total tokens: ${cost.totalInputTokens.toLocaleString()} in / ${cost.totalOutputTokens.toLocaleString()} out`);
  log.info(`  Total estimated cost: $${cost.totalEstimatedCostUsd.toFixed(2)}`);
  log.info(`  By role:`);
  log.info(`    Builder:  $${cost.byRole.builder.costUsd.toFixed(2)} (${cost.byRole.builder.inputTokens.toLocaleString()} in / ${cost.byRole.builder.outputTokens.toLocaleString()} out)`);
  log.info(`    Verifier: $${cost.byRole.verifier.costUsd.toFixed(2)} (${cost.byRole.verifier.inputTokens.toLocaleString()} in / ${cost.byRole.verifier.outputTokens.toLocaleString()} out)`);
  log.info(`    PA:       $${cost.byRole.pa.costUsd.toFixed(2)}`);
  log.info(`  By subset:`);
  for (const [id, sub] of Object.entries(cost.bySubset)) {
    log.info(`    ${id}: $${sub.costUsd.toFixed(2)}`);
  }
}
```

---

## 7. Error Handling

```typescript
// ═══════════════════════════════════════════════════════════════
// ERROR HANDLING — Custom errors and recovery strategies
// ═══════════════════════════════════════════════════════════════

/**
 * Error thrown when a pass fails after all retries.
 * The orchestrator saves state before throwing, so the pipeline
 * can be resumed from this pass.
 */
class PassExecutionError extends Error {
  constructor(public pass: PassDefinition, message: string) {
    super(`Pass ${pass.globalPassNumber} (${pass.description}) failed: ${message}`);
    this.name = 'PassExecutionError';
  }
}

/**
 * Error thrown when configuration validation fails.
 * This is a pre-execution error — no passes have run.
 */
class ConfigValidationError extends Error {
  constructor(public issues: string[]) {
    super(`Configuration validation failed:\n${issues.map(i => `  - ${i}`).join('\n')}`);
    this.name = 'ConfigValidationError';
  }
}

/**
 * Validate the pipeline configuration before execution.
 * Checks that all referenced files exist, token budgets are within
 * limits, and configuration values are sensible.
 *
 * @throws ConfigValidationError if any issues are found
 */
async function validateConfig(config: PipelineConfig): Promise<void> {
  const issues: string[] = [];

  // Check content file exists
  if (!await fileExists(config.contentPath)) {
    issues.push(`Content file not found: ${config.contentPath}`);
  }

  // Check initial artifact exists
  if (!await fileExists(config.initialArtifactPath)) {
    issues.push(`Initial artifact not found: ${config.initialArtifactPath}`);
  }

  // Check all corpus files exist and validate token budgets
  for (const subset of config.subsets) {
    for (const file of subset.files) {
      if (!await fileExists(file.path)) {
        issues.push(`Corpus file not found: ${file.path} (${subset.id}/${file.label})`);
      }
    }

    // Token budget check: subset + reference files + overhead should fit in context
    const CONTEXT_LIMIT = 200_000;
    const OVERHEAD = 40_000; // system prompt + tools + working memory
    const referenceTokens = 25_000; // approximate total for reference files
    const available = CONTEXT_LIMIT - OVERHEAD - referenceTokens;

    if (subset.totalEstimatedTokens > available) {
      issues.push(
        `Subset ${subset.id} (${subset.totalEstimatedTokens.toLocaleString()} tokens) exceeds ` +
        `available budget (${available.toLocaleString()} tokens after ${OVERHEAD.toLocaleString()} overhead + ` +
        `${referenceTokens.toLocaleString()} reference)`
      );
    }
  }

  // Check reference files exist
  for (const [key, refPath] of Object.entries(config.referenceFiles)) {
    if (!await fileExists(refPath)) {
      issues.push(`Reference file not found: ${refPath} (${key})`);
    }
  }

  // Check prompt templates exist
  for (const templatePath of [config.builderPromptTemplate, config.verifierPromptTemplate]) {
    if (templatePath && !await fileExists(templatePath)) {
      issues.push(`Prompt template not found: ${templatePath}`);
    }
  }

  // Check model is recognized
  if (!PRICING[config.model]) {
    issues.push(`Unrecognized model: ${config.model}. Known models: ${Object.keys(PRICING).join(', ')}`);
  }

  if (issues.length > 0) {
    throw new ConfigValidationError(issues);
  }
}
```

---

## 8. File System Layout

When the orchestrator runs, it creates this directory structure:

```
{outputDir}/
├── _orchestrator/
│   ├── state.json                          # Pipeline state (resume capability)
│   ├── orchestrator.log                    # Full execution log
│   ├── conviction-layer.md                 # Accumulated creative beliefs
│   ├── discovery-log.md                    # Accumulated surprises
│   ├── archives/                           # Archived state files (if config changed)
│   │   └── state-2026-02-28T14-30-00-000Z.json
│   ├── passes/
│   │   ├── pass-001/
│   │   │   ├── prompt.md                   # The full prompt sent to claude -p
│   │   │   ├── raw-output.txt              # Raw LLM response
│   │   │   └── artifact-backup.html        # Artifact state before this pass
│   │   ├── pass-002/
│   │   │   ├── prompt.md
│   │   │   └── raw-output.txt              # Verifier output (no backup needed)
│   │   ├── ...
│   │   └── pass-056/
│   └── screenshots/
│       ├── cycle-1/
│       │   ├── full-1440x900.png
│       │   ├── viewport-1440x900.png
│       │   ├── scroll-1440x900-step1.png
│       │   ├── ...
│       │   ├── full-768x1024.png
│       │   ├── auditor-A-report.md
│       │   ├── auditor-B-report.md
│       │   ├── auditor-C-report.md
│       │   ├── weaver-synthesis.md
│       │   └── artifact-before-refine.html
│       ├── cycle-2/
│       └── ...
├── output.html                             # The artifact (iteratively refined)
├── _content.md                             # The content markdown
├── _tc-brief.md                            # Conviction brief (from pre-orchestrator TC derivation)
└── _reflection.md                          # TC agent reflection
```

---

## 9. Utility Functions

```typescript
// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Read a file, throwing a clear error if not found.
 */
async function readFile(filePath: string): Promise<string> {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch (err) {
    throw new Error(`Failed to read file: ${filePath} — ${(err as Error).message}`);
  }
}

/**
 * Read a file, returning a default value if not found.
 */
async function readFileSafe(filePath: string, defaultValue: string): Promise<string> {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return defaultValue;
  }
}

/**
 * Append content to a file (creating it if it does not exist).
 */
async function appendToFile(filePath: string, content: string): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.appendFile(filePath, content + '\n', 'utf-8');
}

/**
 * Check if a file exists.
 */
async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Sleep for a given number of milliseconds.
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Format a conviction layer entry with metadata.
 */
function formatConvictionEntry(pass: PassDefinition, content: string): string {
  return `
## Pass ${pass.globalPassNumber} (${pass.subsetId}, Rotation ${pass.rotation}, ${pass.agentRole})
${content}
`.trim() + '\n';
}

/**
 * Format a discovery log entry with metadata.
 */
function formatDiscoveryEntry(pass: PassDefinition, content: string): string {
  return `
## Pass ${pass.globalPassNumber} (${pass.subsetId}, Rotation ${pass.rotation}, ${pass.agentRole})
${content}
`.trim() + '\n';
}

/**
 * Start a local HTTP server for screenshot capture.
 * Returns a server object with a port and close() method.
 */
async function startLocalServer(dir: string): Promise<{ port: number; close: () => void }> {
  const http = require('http');
  const handler = require('serve-handler');

  return new Promise((resolve) => {
    const server = http.createServer((req: any, res: any) => {
      return handler(req, res, { public: dir });
    });

    server.listen(0, () => {
      const port = server.address().port;
      resolve({
        port,
        close: () => server.close(),
      });
    });
  });
}

/**
 * Log a per-subset summary after all 8 passes complete.
 */
function logSubsetSummary(state: PipelineState, subsetId: string): void {
  const subsetCost = state.cost.bySubset[subsetId];
  const subsetPasses = Object.values(state.passRecords).filter(
    r => r.definition.subsetId === subsetId
  );
  const totalDuration = subsetPasses.reduce((sum, r) => sum + r.durationMs, 0);
  const validationFailures = subsetPasses.filter(r => !r.validationPassed).length;

  log.info(`\n  SUBSET ${subsetId} COMPLETE`);
  log.info(`    Duration: ${(totalDuration / 1000 / 60).toFixed(1)} min`);
  log.info(`    Cost: $${subsetCost?.costUsd.toFixed(2) || '0.00'}`);
  log.info(`    Validation failures: ${validationFailures}/${subsetPasses.length}`);
}
```

---

## 10. Configuration Example

```typescript
// ═══════════════════════════════════════════════════════════════
// EXAMPLE CONFIGURATION — How to launch the orchestrator
// ═══════════════════════════════════════════════════════════════

const DS_ROOT = '/path/to/design-system';
const OUTPUT_DIR = '/path/to/output';

const config: PipelineConfig = {
  contentPath: `${OUTPUT_DIR}/_content.md`,
  initialArtifactPath: `${OUTPUT_DIR}/output.html`,
  outputDir: OUTPUT_DIR,

  subsets: CORPUS_SUBSETS.map(s => ({
    ...s,
    files: s.files.map(f => ({
      ...f,
      path: path.join(DS_ROOT, f.path),
    })),
  })),

  model: 'claude-opus-4-6',
  passTimeoutMs: 600_000,      // 10 minutes per pass
  maxRetries: 2,                // 3 total attempts per pass
  retryDelayMs: 5_000,          // 5 second delay between retries

  paPassesPerCycle: 4,          // 3 auditors + 1 weaver
  paHardeningCycles: 4,         // Up to 4 PA cycles
  paScoreThreshold: 3.5,        // Stop when PA-05 >= 3.5/4

  screenshotViewports: [
    { width: 1440, height: 900 },
    { width: 768, height: 1024 },
  ],

  builderPromptTemplate: `${DS_ROOT}/prompts/builder.md`,
  verifierPromptTemplate: `${DS_ROOT}/prompts/verifier.md`,
  paAuditorPromptTemplate: `${DS_ROOT}/prompts/pa-auditor.md`,
  paWeaverPromptTemplate: `${DS_ROOT}/prompts/pa-weaver.md`,

  referenceFiles: {
    worldDescription: `${DS_ROOT}/ephemeral/build-page-v2/world-description.md`,
    mechanismCatalog: `${DS_ROOT}/compositional-core/grammar/mechanism-catalog.md`,
    componentsCss: `${DS_ROOT}/compositional-core/components/components.css`,
    tokensCss: `${DS_ROOT}/compositional-core/vocabulary/tokens.css`,
    convictionBrief: `${OUTPUT_DIR}/_tc-brief.md`,
  },
};

// Launch
runPipeline(config)
  .then(state => {
    console.log(`\nPipeline complete. ${state.lastCompletedPass} passes executed.`);
    console.log(`Total cost: $${state.cost.totalEstimatedCostUsd.toFixed(2)}`);
  })
  .catch(err => {
    console.error(`\nPipeline failed: ${err.message}`);
    console.error('State has been saved. Resume by running again with the same configuration.');
    process.exit(1);
  });
```

---

## 11. Cost Projections

### Per-Subset Cost Estimate

| Component | Input Tokens | Output Tokens | Cost |
|-----------|-------------|---------------|------|
| Builder pass (5 per subset) | ~80,000 each | ~35,000 each | ~$3.83 each |
| Verifier pass (3 per subset) | ~80,000 each | ~5,000 each | ~$1.58 each |
| **Per subset total** | ~560,000 | ~190,000 | ~$23.89 |

### Full Pipeline Cost Estimate

| Phase | Passes | Estimated Cost |
|-------|--------|---------------|
| Corpus integration (7 subsets x 8 passes) | 56 | ~$167 |
| PA hardening (4 cycles x 5 passes) | 20 | ~$80 |
| **TOTAL** | **76** | **~$247** |

### Time Estimate

| Phase | Passes | Avg Time Per Pass | Total |
|-------|--------|-------------------|-------|
| Corpus integration | 56 | ~4 min | ~224 min (~3.7 hr) |
| PA hardening | 20 | ~3 min | ~60 min (~1 hr) |
| **TOTAL** | **76** | | **~284 min (~4.7 hr)** |

These are serial estimates. PA auditors run in parallel, reducing PA hardening time to ~15-20 min per cycle.

---

## 12. Resume Scenarios

### Scenario A: Crash at Pass 34

```
State on disk:
  lastCompletedPass: 33
  currentPhase: 'corpus-integration'
  passRecords: { 1: {...}, 2: {...}, ..., 33: {...} }
  currentArtifactPath: points to artifact after pass 33

On restart:
  1. Load state.json
  2. Verify configHash matches
  3. Recompute all pass definitions (deterministic, same as before)
  4. Skip passes 1-33
  5. Resume from pass 34 with the artifact state from pass 33
```

### Scenario B: Config Changed Between Runs

```
State on disk:
  configHash: 'abc123...'

New config hash: 'def456...'

On restart:
  1. Load state.json
  2. configHash mismatch detected
  3. Archive existing state to archives/
  4. Start fresh with new configuration
```

### Scenario C: Validation Failure at Pass 22

```
Pass 22 (builder) produces truncated HTML.
Validation check 'html-complete' fails.

Behavior:
  1. Pass record saved with validationPassed: false
  2. State persisted (lastCompletedPass: 22)
  3. Pipeline CONTINUES to pass 23 (the verifier)
  4. The verifier will observe the truncation
  5. Pass 24 (builder addressing verifier) will fix it

Rationale: Validation failures are NOT fatal because the
verifier step catches quality issues. The build-verify-fix
rhythm is self-correcting.
```

### Scenario D: `claude -p` Returns Non-Zero Exit Code

```
Pass 15 fails with exit code 1 after 3 attempts.

Behavior:
  1. All 3 attempts logged with outputs
  2. PassExecutionError thrown
  3. State persisted at lastCompletedPass: 14
  4. Process exits with error
  5. User investigates, potentially adjusts config
  6. Re-run resumes from pass 15
```

---

## 13. What the Orchestrator Does NOT Do

The orchestrator is deliberately limited to mechanical concerns. It does NOT:

1. **Evaluate creative quality.** The orchestrator validates structural properties (HTML present, container width correct). It never judges whether the artifact is good. That is the LLM's job (verifier, PA auditors, weaver).

2. **Select which corpus files to load.** The 7 subsets and their files are defined statically in the configuration. The orchestrator does not dynamically choose files based on content analysis.

3. **Modify the LLM's output.** The orchestrator extracts artifacts and accumulation markers from the output. It never edits, truncates, or enhances the LLM's work.

4. **Make creative decisions.** File ordering within a rotation, the rotation schedule, pass sequencing -- these are ALL mechanical. The orchestrator's only "decisions" are retry logic and validation thresholds, both of which are configurable.

5. **Manage conversation context.** Each `claude -p` invocation is a fresh session. There is no conversation history, no memory, no context carryover except what the orchestrator explicitly embeds in the prompt.

6. **Run the TC derivation.** TC derivation (Window 1) is a prerequisite. The orchestrator assumes a conviction brief already exists at `config.referenceFiles.convictionBrief`. TC derivation can be run as a separate `claude -p` invocation or through the existing TC skill.

---

## 14. Dependencies

```json
{
  "dependencies": {
    "playwright": "^1.48.0"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "@types/node": "^22.0.0"
  }
}
```

The orchestrator requires:
- **Node.js >= 20** (for `fs/promises`, `crypto`, native fetch)
- **claude CLI** installed and authenticated (provides `claude -p`)
- **Playwright** with Chromium for screenshots
- A local HTTP server capability (Node's built-in `http` module + `serve-handler` or equivalent)

No other external dependencies. The orchestrator is a single script that shells out to `claude` and `playwright`.
