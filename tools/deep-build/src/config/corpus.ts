/**
 * Corpus subset definitions.
 * 7 subsets with rotating files + infrastructure files.
 *
 * IMPORTANT: All paths are FILESYSTEM-VERIFIED against actual directory structure.
 * Paths are relative to project root.
 * The assembler resolves them to absolute paths at runtime.
 *
 * Content sources:
 * - design-system/research/ (6 research files: R1-R5 + RESEARCH-SYNTHESIS)
 * - design-system/compositional-core/case-studies/ (13 case study files: CD, DD, OD + visuals)
 * - design-system/compositional-core/identity/ (prohibitions, soul-constraints)
 * - design-system/compositional-core/guidelines/ (semantic-rules)
 * - ephemeral/va-extraction/ (pipeline artifacts + PA protocol)
 */

import type { CorpusSubset, CorpusFile } from '../types/pipeline.js';

/**
 * Infrastructure files loaded EVERY pass (not rotated).
 * These are the compositional core reference materials.
 */
export const INFRASTRUCTURE_FILES: CorpusFile[] = [
  {
    path: 'design-system/compositional-core/grammar/mechanism-catalog.md',
    name: 'Mechanism Catalog',
    approximateLines: 751,
  },
  {
    path: 'design-system/compositional-core/components/components.css',
    name: 'Components CSS',
    approximateLines: 944,
  },
  {
    path: 'design-system/compositional-core/vocabulary/tokens.css',
    name: 'Design Tokens',
    approximateLines: 183,
  },
];

/**
 * 7 corpus subsets. All file paths VERIFIED against actual filesystem.
 *
 * Subset design rationale:
 * - S1-S2: Research documents (theory + foundations)
 * - S3-S4: Case studies (compositional examples + deep dives)
 * - S5: Identity + guidelines (soul constraints + rules)
 * - S6: Pipeline artifacts (builder recipe, routing, orchestrator)
 * - S7: PA protocol (questions, deployment, weaver, guardrails)
 *
 * Carousel rotation ensures every file gets primacy/valley/recency positions
 * across the 8 passes per subset.
 */
export const CORPUS_SUBSETS: CorpusSubset[] = [
  {
    id: 1,
    name: 'Research Foundation',
    files: [
      { path: 'design-system/research/R3-DENSITY-DIMENSIONS.md', name: 'R3 Density Dimensions', approximateLines: 553 },
      { path: 'design-system/research/R4-AXIS-INNOVATIONS.md', name: 'R4 Axis Innovations', approximateLines: 990 },
      { path: 'design-system/research/R5-COMBINATION-THEORY.md', name: 'R5 Combination Theory', approximateLines: 784 },
      { path: 'design-system/research/RESEARCH-SYNTHESIS.md', name: 'Research Synthesis', approximateLines: 383 },
      { path: 'design-system/compositional-core/case-studies/DD-006-fractal.md', name: 'DD-006 Fractal', approximateLines: 377 },
    ],
    infrastructureFiles: INFRASTRUCTURE_FILES,
  },
  {
    id: 2,
    name: 'Identity & Perception',
    files: [
      { path: 'design-system/research/R1-DOCUMENTATION-PATTERNS.md', name: 'R1 Documentation Patterns', approximateLines: 584 },
      { path: 'design-system/research/R2-CREATIVE-LAYOUTS.md', name: 'R2 Creative Layouts', approximateLines: 810 },
      { path: 'design-system/compositional-core/case-studies/OD-001-conversational.md', name: 'OD-001 Conversational', approximateLines: 297 },
      { path: 'design-system/compositional-core/case-studies/OD-004-confidence.md', name: 'OD-004 Confidence', approximateLines: 309 },
      { path: 'design-system/compositional-core/case-studies/OD-006-creative.md', name: 'OD-006 Creative', approximateLines: 333 },
    ],
    infrastructureFiles: INFRASTRUCTURE_FILES,
  },
  {
    id: 3,
    name: 'Deep Dives & Structure',
    files: [
      { path: 'design-system/compositional-core/case-studies/DD-003-islands.md', name: 'DD-003 Islands', approximateLines: 405 },
      { path: 'design-system/compositional-core/case-studies/DD-004-layers.md', name: 'DD-004 Layers', approximateLines: 428 },
      { path: 'design-system/compositional-core/case-studies/dd-003-islands-visual.md', name: 'DD-003 Islands Visual', approximateLines: 462 },
      { path: 'design-system/compositional-core/case-studies/dd-004-layers-visual.md', name: 'DD-004 Layers Visual', approximateLines: 144 },
      { path: 'design-system/compositional-core/case-studies/dd-006-fractal-visual.md', name: 'DD-006 Fractal Visual', approximateLines: 165 },
    ],
    infrastructureFiles: INFRASTRUCTURE_FILES,
  },
  {
    id: 4,
    name: 'Composition Case Studies',
    files: [
      { path: 'design-system/compositional-core/case-studies/CD-001-reasoning-inside-code.md', name: 'CD-001 Reasoning', approximateLines: 415 },
      { path: 'design-system/compositional-core/case-studies/CD-005-multi-axis-transition.md', name: 'CD-005 Multi-Axis', approximateLines: 386 },
      { path: 'design-system/compositional-core/case-studies/CD-006-pilot-migration.md', name: 'CD-006 Pilot Migration', approximateLines: 387 },
      { path: 'design-system/compositional-core/case-studies/ANTI-PRESCRIPTION-TEMPLATE.md', name: 'Anti-Prescription Template', approximateLines: 471 },
    ],
    infrastructureFiles: INFRASTRUCTURE_FILES,
  },
  {
    id: 5,
    name: 'Identity & Guidelines',
    files: [
      { path: 'design-system/compositional-core/guidelines/semantic-rules.md', name: 'Semantic Rules', approximateLines: 529 },
      { path: 'design-system/compositional-core/identity/prohibitions.md', name: 'Prohibitions', approximateLines: 419 },
      { path: 'design-system/compositional-core/identity/soul-constraints.md', name: 'Soul Constraints', approximateLines: 342 },
      { path: 'design-system/compositional-core/case-studies/README.md', name: 'Case Studies Overview', approximateLines: 541 },
    ],
    infrastructureFiles: INFRASTRUCTURE_FILES,
  },
  {
    id: 6,
    name: 'Pipeline Knowledge',
    files: [
      { path: 'ephemeral/va-extraction/artifact-identity-perception.md', name: 'Identity Perception', approximateLines: 500 },
      { path: 'ephemeral/va-extraction/artifact-builder-recipe.md', name: 'Builder Recipe', approximateLines: 400 },
      { path: 'ephemeral/va-extraction/artifact-routing.md', name: 'Routing', approximateLines: 300 },
      { path: 'ephemeral/va-extraction/artifact-orchestrator.md', name: 'Orchestrator', approximateLines: 400 },
      { path: 'ephemeral/va-extraction/artifact-value-tables.md', name: 'Value Tables', approximateLines: 300 },
      { path: 'ephemeral/va-extraction/artifact-tc-brief-template.md', name: 'TC Brief Template', approximateLines: 223 },
    ],
    infrastructureFiles: INFRASTRUCTURE_FILES,
  },
  {
    id: 7,
    name: 'PA & Evaluation',
    files: [
      { path: 'ephemeral/va-extraction/pa-questions.md', name: 'PA Questions', approximateLines: 431 },
      { path: 'ephemeral/va-extraction/pa-deployment.md', name: 'PA Deployment', approximateLines: 355 },
      { path: 'ephemeral/va-extraction/pa-weaver.md', name: 'PA Weaver', approximateLines: 449 },
      { path: 'ephemeral/va-extraction/pa-guardrails.md', name: 'PA Guardrails', approximateLines: 113 },
      { path: 'ephemeral/va-extraction/pa-guardrails-weaver.md', name: 'PA Guardrails Weaver', approximateLines: 59 },
    ],
    infrastructureFiles: INFRASTRUCTURE_FILES,
  },
];

/**
 * Get all unique corpus file paths for validation.
 */
export function getAllCorpusFilePaths(): string[] {
  const paths = new Set<string>();
  for (const subset of CORPUS_SUBSETS) {
    for (const file of subset.files) {
      paths.add(file.path);
    }
    for (const file of subset.infrastructureFiles) {
      paths.add(file.path);
    }
  }
  return Array.from(paths);
}
