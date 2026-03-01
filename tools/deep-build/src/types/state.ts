/**
 * Pipeline state schema v3 (doc 08 — CANONICAL).
 * All field names from this file are authoritative.
 * Doc 02 v2 field names are SUPERSEDED.
 */

import type { ErrorCategory, ErrorRecord } from './errors.js';

export interface PipelineState {
  schemaVersion: 3;
  runId: string;
  configHash: string;
  contentPath: string;
  slug: string;
  startedAt: string;
  completedAt?: string;
  currentPhase: 'corpus-integration' | 'pa-hardening' | 'paused' | 'completed' | 'failed';
  phaseReason?: string;
  currentSubsetId: number;
  currentPass: number;
  totalCorpusPasses: number;
  lastCompletedCorpusPass: number;
  completedPACycles: number;
  maxPACycles: number;
  lastPAScore?: number;
  paScoreThreshold: number;
  artifactPath: string;
  currentArtifactHash: string;
  artifactSizeHistory: number[];
  passes: PassRecord[];
  convictionLayer: ConvictionEntry[];
  convictionEntryCount: number;
  discoveryLog: string[];
  discoveryEntryCount: number;
  verifierObservations: string[];
  cost: CostTracker;
  checkpoints: string[];
  paCycleRecords: PACycleRecord[];
  inFlightPass?: InFlightPass;
  errorHistory: ErrorRecord[];
  status: 'running' | 'paused' | 'completed' | 'failed';
}

export interface InFlightPass {
  passNumber: number;
  startedAt: string;
  role: string;
}

export interface PassRecord {
  passNumber: number;
  subsetId: number;
  passWithinSubset: number;
  role: AgentRole;
  rotationIndex: number;
  startedAt: string;
  completedAt: string;
  inputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
  cost: number;
  artifactSizeBefore: number;
  artifactSizeAfter: number;
  artifactHash: string;
  retryCount: number;
  hasConvictionAddition: boolean;
  hasDiscoveryAddition: boolean;
  corpusFilesLoaded: string[];
  referenceFilesLoaded: string[];
  success: boolean;
  error?: string;
}

export type AgentRole =
  | 'builder'
  | 'verifier'
  | 'retrospective'
  | 'cross-subset-verifier'
  | 'tc-derivation'
  | 'content-analysis'
  | 'pa-auditor'
  | 'integrative-auditor'
  | 'weaver'
  | 'refine-builder';

export interface CostTracker {
  totalInputTokens: number;
  totalOutputTokens: number;
  totalCacheReadTokens: number;
  totalCacheWriteTokens: number;
  totalCostUsd: number;
  perSubset: Record<number, number>;
  perRole: Record<string, number>;
  budgetWarningThresholdUsd: number;
  budgetHardCapUsd: number;
  warningThresholdHit: boolean;
  hardCapHit: boolean;
}

export interface ConvictionEntry {
  passNumber: number;
  subsetId: number;
  dimension: 'built' | 'trying' | 'rejected' | 'surprised' | 'wanted' | 'unresolved';
  content: string;
  addedAt: string;
}

export interface WeaverVerdict {
  pa05Score: number;
  tier5: number;
  top5Fixes: Array<{
    rank: number;
    category: 'MECHANICAL' | 'STRUCTURAL' | 'COMPOSITIONAL';
    description: string;
    auditorSources: string[];
    convergenceCount: number;
  }>;
  emotionalArc: {
    authority: number;
    closure: number;
    surprise: number;
    delight: number;
  };
  soulViolations: string[];
  verdict: 'SHIP' | 'REFINE' | 'RETHINK';
  mode: 'FLOOR' | 'COMPOSED' | 'DESIGNED' | 'CEILING' | 'FLAGSHIP';
  narrativeSummary: string;
}

export interface PACycleRecord {
  cycleNumber: number;
  startedAt: string;
  completedAt: string;
  screenshotPaths: string[];
  gateResults: Record<string, boolean>;
  auditorReportPaths: string[];
  weaverVerdict: WeaverVerdict;
  routingDecision: 'SHIP' | 'REFINE' | 'RETHINK';
  cost: number;
}

export function createInitialState(config: {
  runId: string;
  configHash: string;
  contentPath: string;
  slug: string;
  artifactPath: string;
  maxPACycles?: number;
  paScoreThreshold?: number;
  budgetWarning?: number;
  budgetCap?: number;
}): PipelineState {
  return {
    schemaVersion: 3,
    runId: config.runId,
    configHash: config.configHash,
    contentPath: config.contentPath,
    slug: config.slug,
    startedAt: new Date().toISOString(),
    currentPhase: 'corpus-integration',
    currentSubsetId: 1,
    currentPass: 1,
    totalCorpusPasses: 0,
    lastCompletedCorpusPass: 0,
    completedPACycles: 0,
    maxPACycles: config.maxPACycles ?? 3,
    paScoreThreshold: config.paScoreThreshold ?? 3.5,
    artifactPath: config.artifactPath,
    currentArtifactHash: '',
    artifactSizeHistory: [],
    passes: [],
    convictionLayer: [],
    convictionEntryCount: 0,
    discoveryLog: [],
    discoveryEntryCount: 0,
    verifierObservations: [],
    cost: {
      totalInputTokens: 0,
      totalOutputTokens: 0,
      totalCacheReadTokens: 0,
      totalCacheWriteTokens: 0,
      totalCostUsd: 0,
      perSubset: {},
      perRole: {},
      budgetWarningThresholdUsd: config.budgetWarning ?? 150,
      budgetHardCapUsd: config.budgetCap ?? 250,
      warningThresholdHit: false,
      hardCapHit: false,
    },
    checkpoints: [],
    paCycleRecords: [],
    errorHistory: [],
    status: 'running',
  };
}
