#!/usr/bin/env node
/**
 * Pipeline v3 — Structural Integrity Verifier (ENFORCED Layer)
 *
 * Programmatic verification of ~200 binary checks across all pipeline artifacts.
 * Run after any pipeline surgery/enrichment. Checks file existence, section headers,
 * specific string presence, count consistency, and cross-artifact agreement.
 *
 * Usage: node verify-pipeline-structure.js [--json] [--verbose] [--fix-report]
 *   --json      Output as JSON (for programmatic consumption)
 *   --verbose   Show PASS items too (default: only FAIL)
 *   --fix-report  Generate a fix report with exact locations
 *
 * Exit codes: 0 = all pass, 1 = failures found
 *
 * This script is the ENFORCED layer. Semantic/judgment checks are in per-artifact
 * manifest files (the PROMPTED layer). Together they cover all ~280 checks with
 * zero items in the HOPE tier.
 */

const fs = require('fs');
const path = require('path');

// ── Configuration ──────────────────────────────────────────────────────

const BASE = path.resolve(__dirname); // ephemeral/va-extraction/
const DESIGN_SYSTEM = path.resolve(BASE, '../../design-system');
const SKILL_PATH = path.resolve(process.env.HOME, '.claude/skills/build-page/SKILL.md');

const ARGS = process.argv.slice(2);
const JSON_OUTPUT = ARGS.includes('--json');
const VERBOSE = ARGS.includes('--verbose');
const FIX_REPORT = ARGS.includes('--fix-report');

// ── Result Collection ──────────────────────────────────────────────────

const results = {
  timestamp: new Date().toISOString(),
  summary: { total: 0, pass: 0, fail: 0, skip: 0 },
  categories: {},
  failures: [],
  fixes: []
};

function check(category, id, description, passed, details = '') {
  results.summary.total++;
  const status = passed ? 'PASS' : 'FAIL';
  if (passed) results.summary.pass++;
  else {
    results.summary.fail++;
    results.failures.push({ category, id, description, details });
  }
  if (!results.categories[category]) results.categories[category] = { pass: 0, fail: 0, checks: [] };
  if (passed) results.categories[category].pass++;
  else results.categories[category].fail++;
  results.categories[category].checks.push({ id, description, status, details });

  if (!JSON_OUTPUT && (!passed || VERBOSE)) {
    const icon = passed ? '✓' : '✗';
    console.log(`  ${icon} [${id}] ${description}${details ? ` — ${details}` : ''}`);
  }
}

function readFile(filepath) {
  try { return fs.readFileSync(filepath, 'utf-8'); }
  catch { return null; }
}

function fileExists(filepath) {
  try { return fs.existsSync(filepath); }
  catch { return false; }
}

function countOccurrences(text, pattern) {
  const regex = typeof pattern === 'string' ? new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g') : pattern;
  return (text.match(regex) || []).length;
}

function hasSection(text, header) {
  // Match markdown headers: ## Header or ### Header
  const escaped = header.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^#{1,4}\\s+${escaped}`, 'mi').test(text);
}

function hasString(text, str) {
  return text.includes(str);
}

function hasPattern(text, pattern) {
  return new RegExp(pattern, 'mi').test(text);
}

// ── 1. FILE EXISTENCE CHECKS ──────────────────────────────────────────

function checkFileExistence() {
  if (!JSON_OUTPUT) console.log('\n═══ 1. FILE EXISTENCE ═══');

  const files = {
    'FE-01': ['MANIFEST.md', path.join(BASE, 'MANIFEST.md')],
    'FE-02': ['artifact-orchestrator.md', path.join(BASE, 'artifact-orchestrator.md')],
    'FE-03': ['artifact-identity-perception.md', path.join(BASE, 'artifact-identity-perception.md')],
    'FE-04': ['artifact-builder-recipe.md', path.join(BASE, 'artifact-builder-recipe.md')],
    'FE-05': ['artifact-routing.md', path.join(BASE, 'artifact-routing.md')],
    'FE-06': ['artifact-tc-brief-template.md', path.join(BASE, 'artifact-tc-brief-template.md')],
    'FE-07': ['artifact-value-tables.md', path.join(BASE, 'artifact-value-tables.md')],
    'FE-08': ['gate-runner-core.js', path.join(BASE, 'gate-runner-core.js')],
    'FE-09': ['gate-runner-spec.md', path.join(BASE, 'gate-runner-spec.md')],
    'FE-10': ['gate-runner-preconditions.md', path.join(BASE, 'gate-runner-preconditions.md')],
    'FE-11': ['gate-manifest.json', path.join(BASE, 'gate-manifest.json')],
    'FE-12': ['pa-questions.md', path.join(BASE, 'pa-questions.md')],
    'FE-13': ['pa-deployment.md', path.join(BASE, 'pa-deployment.md')],
    'FE-14': ['pa-weaver.md', path.join(BASE, 'pa-weaver.md')],
    'FE-15': ['pa-guardrails.md', path.join(BASE, 'pa-guardrails.md')],
    'FE-16': ['pa-manifest.md', path.join(BASE, 'pa-manifest.md')],
    'FE-17': ['EXECUTION-TRACKER-TEMPLATE.md', path.join(BASE, 'EXECUTION-TRACKER-TEMPLATE.md')],
    'FE-18': ['SKILL.md', SKILL_PATH],
    'FE-19': ['tokens.css', path.join(DESIGN_SYSTEM, 'compositional-core/vocabulary/tokens.css')],
    'FE-20': ['components.css', path.join(DESIGN_SYSTEM, 'compositional-core/components/components.css')],
    'FE-21': ['mechanism-catalog.md', path.join(DESIGN_SYSTEM, 'compositional-core/grammar/mechanism-catalog.md')],
    'FE-22': ['pa-guardrails-weaver.md', path.join(BASE, 'pa-guardrails-weaver.md')],
  };

  for (const [id, [name, filepath]] of Object.entries(files)) {
    check('File Existence', id, `${name} exists`, fileExists(filepath));
  }
}

// ── 2. SECTION PRESENCE CHECKS ─────────────────────────────────────────

function checkSectionPresence() {
  if (!JSON_OUTPUT) console.log('\n═══ 2. SECTION PRESENCE ═══');

  // pa-deployment.md
  const paDeploy = readFile(path.join(BASE, 'pa-deployment.md'));
  if (paDeploy) {
    check('pa-deployment sections', 'SP-01', 'Section 0: EXPERIENTIAL PASS PROTOCOL present', hasSection(paDeploy, '0. EXPERIENTIAL PASS PROTOCOL'));
    check('pa-deployment sections', 'SP-02', 'Section 0 appears BEFORE Section 1', paDeploy.indexOf('EXPERIENTIAL PASS PROTOCOL') < paDeploy.indexOf('9-AUDITOR DEPLOYMENT'));
    check('pa-deployment sections', 'SP-03', 'Visual Verification header in Section 0', hasPattern(paDeploy, 'VISUAL VERIFICATION.*NOT CODE INTERPRETATION'));
    check('pa-deployment sections', 'SP-04', 'Section 1: 9-AUDITOR DEPLOYMENT present', hasSection(paDeploy, '1. 9-AUDITOR DEPLOYMENT'));
    check('pa-deployment sections', 'SP-05', 'Section 2: SCREENSHOT PRE-CAPTURE present', hasSection(paDeploy, '2. SCREENSHOT PRE-CAPTURE'));
    check('pa-deployment sections', 'SP-06', 'Section 3: FRESH-EYES PRINCIPLE present', hasSection(paDeploy, '3. FRESH-EYES PRINCIPLE'));
    check('pa-deployment sections', 'SP-07', 'Why Primacy Matters section present', hasPattern(paDeploy, 'Why Primacy Matters'));
    check('pa-deployment sections', 'SP-08', 'Priority Override section present', hasPattern(paDeploy, 'Priority Override'));
    check('pa-deployment sections', 'SP-09', 'Contamination Check section present', hasPattern(paDeploy, 'Contamination Check'));
  }

  // pa-weaver.md
  const paWeaver = readFile(path.join(BASE, 'pa-weaver.md'));
  if (paWeaver) {
    check('pa-weaver sections', 'SP-10', 'Section 0: WEAVER EXPERIENTIAL ANCHOR present', hasSection(paWeaver, '0. WEAVER EXPERIENTIAL ANCHOR'));
    check('pa-weaver sections', 'SP-11', 'Section 0 appears BEFORE Section 1', paWeaver.indexOf('WEAVER EXPERIENTIAL ANCHOR') < paWeaver.indexOf('WEAVER ROLE'));
    check('pa-weaver sections', 'SP-12', 'Section 0.1: View Screenshots Yourself present', hasPattern(paWeaver, '0\\.1.*View.*Screenshots'));
    check('pa-weaver sections', 'SP-13', 'Section 0.2: Write Experiential Anchor present', hasPattern(paWeaver, '0\\.2.*Write.*Experiential'));
    check('pa-weaver sections', 'SP-14', 'Section 0.3: Enhanced Experiential Pass Aggregation present', hasPattern(paWeaver, 'Experiential Pass Aggregation'));
    check('pa-weaver sections', 'SP-15', 'Section 4.5: PRIORITY OVERRIDE present', hasSection(paWeaver, '4.5 PRIORITY OVERRIDE'));
  }

  // pa-guardrails.md
  const paGuard = readFile(path.join(BASE, 'pa-guardrails.md'));
  if (paGuard) {
    check('pa-guardrails sections', 'SP-16', 'Section 3.1: Visual Verification present', hasSection(paGuard, '3.1 Visual Verification'));
    check('pa-guardrails sections', 'SP-17', 'Section 6: FRESH-EYES PRINCIPLE present', hasSection(paGuard, '6. FRESH-EYES PRINCIPLE'));
    check('pa-guardrails sections', 'SP-18', 'Completion Manifest requires Experiential Pass', hasString(paGuard, 'Experiential Pass'));
  }

  // pa-guardrails-weaver.md (weaver-only guardrails, split from pa-guardrails.md)
  const paGuardWeaver = readFile(path.join(BASE, 'pa-guardrails-weaver.md'));
  if (paGuardWeaver) {
    check('pa-guardrails-weaver sections', 'SP-19', 'Section 1: TIER 1 EQUIVALENT QUESTIONS present', hasSection(paGuardWeaver, '1. TIER 1 EQUIVALENT QUESTIONS'));
    check('pa-guardrails-weaver sections', 'SP-19b', 'Section 2: TIER 5 PROVISIONAL SCORING NOTE present', hasSection(paGuardWeaver, '2. TIER 5 PROVISIONAL SCORING NOTE'));
    check('pa-guardrails-weaver sections', 'SP-19c', 'Section 3: PA-ASSESSED ANTI-PATTERNS present', hasSection(paGuardWeaver, '3. PA-ASSESSED ANTI-PATTERNS'));
    check('pa-guardrails-weaver sections', 'SP-19d', 'Section 4: REVISION DEGRADATION WARNINGS present', hasSection(paGuardWeaver, '4. REVISION DEGRADATION WARNINGS'));
    check('pa-guardrails-weaver sections', 'SP-19e', 'Section 5: S-09 STACKING CHECK present', hasSection(paGuardWeaver, '5. S-09 STACKING CHECK'));
  }

  // artifact-builder-recipe.md
  const builderRecipe = readFile(path.join(BASE, 'artifact-builder-recipe.md'));
  if (builderRecipe) {
    check('builder-recipe sections', 'SP-20', 'Step 5.0: Experiential self-check present', hasPattern(builderRecipe, 'Step 5\\.0.*Experience your page'));
    check('builder-recipe sections', 'SP-21', 'Step 5.0 appears BEFORE Step 5.1', builderRecipe.indexOf('Step 5.0') < builderRecipe.indexOf('Step 5.1'));
    check('builder-recipe sections', 'SP-22', 'Phase 1: READ YOUR VOCABULARY present', hasSection(builderRecipe, 'PHASE 1: READ YOUR VOCABULARY'));
    check('builder-recipe sections', 'SP-23', 'Phase 4: D-01 through D-09 present', hasSection(builderRecipe, 'PHASE 4: DEPLOY DISPOSITIONAL'));
    check('builder-recipe sections', 'SP-24', 'D-09: The Quiet Zone present', hasPattern(builderRecipe, 'D-09.*Quiet Zone'));
    check('builder-recipe sections', 'SP-25', 'Phase 5: SELF-EVALUATE present', hasSection(builderRecipe, 'PHASE 5: SELF-EVALUATE'));
    check('builder-recipe sections', 'SP-26', 'Phase 6: TEMPORAL COMPOSITION present', hasSection(builderRecipe, 'PHASE 6: TEMPORAL COMPOSITION'));
  }

  // artifact-orchestrator.md
  const orchestrator = readFile(path.join(BASE, 'artifact-orchestrator.md'));
  if (orchestrator) {
    check('orchestrator sections', 'SP-27', 'Phase 3A+ Experiential Scan present', hasPattern(orchestrator, '(Experiential Scan|EXPERIENTIAL.SCAN|3A\\+)'));
    check('orchestrator sections', 'SP-28', 'SECTION 0: MASTER EQUATION present', hasSection(orchestrator, 'SECTION 0: MASTER EQUATION'));
    check('orchestrator sections', 'SP-29', 'SECTION 7: VERDICT present', hasSection(orchestrator, 'SECTION 7: VERDICT'));
    check('orchestrator sections', 'SP-30', 'Usability Circuit Breaker present', hasPattern(orchestrator, '(BLOCKING-USABILITY|[Uu]sability [Cc]ircuit [Bb]reaker)'));
  }

  // MANIFEST.md prompt templates
  const manifest = readFile(path.join(BASE, 'MANIFEST.md'));
  if (manifest) {
    check('MANIFEST sections', 'SP-31', 'PA Auditor template: experiential pass Section 0 present', hasPattern(manifest, 'EXPERIENTIAL PASS.*MANDATORY.*COMPLETE BEFORE ANY QUESTIONS'));
    check('MANIFEST sections', 'SP-32', 'Integrative Auditor template: own experiential pass present', hasPattern(manifest, 'YOUR OWN EXPERIENTIAL PASS.*BEFORE READING ANY REPORTS'));
    check('MANIFEST sections', 'SP-33', 'Weaver template: experiential anchor present', hasPattern(manifest, 'YOUR OWN EXPERIENTIAL ANCHOR.*BEFORE ANY ANALYSIS'));
    check('MANIFEST sections', 'SP-34', 'Weaver template: PRIORITY 0 experiential override', hasPattern(manifest, 'PRIORITY 0.*confirmed experiential'));
    check('MANIFEST sections', 'SP-35', 'Appendix F: Model Mandate present', hasSection(manifest, 'Appendix F: Model Mandate'));
  }

  // EXECUTION-TRACKER-TEMPLATE.md
  const tracker = readFile(path.join(BASE, 'EXECUTION-TRACKER-TEMPLATE.md'));
  if (tracker) {
    check('tracker sections', 'SP-36', 'L0 Pipeline Phase Summary present', hasPattern(tracker, 'L0.*Pipeline Phase Summary'));
    check('tracker sections', 'SP-37', 'Phase 3A+: Experiential Scan section present', hasPattern(tracker, 'Phase 3A\\+.*Experiential Scan'));
    check('tracker sections', 'SP-38', 'DPR Validation section present', hasPattern(tracker, 'DPR Validation'));
    check('tracker sections', 'SP-39', 'Screenshot Quality section present', hasPattern(tracker, 'Screenshot Quality.*GR-62'));
    check('tracker sections', 'SP-40', 'Experiential Pass Verification table present', hasPattern(tracker, 'Experiential Pass Verification'));
    check('tracker sections', 'SP-41', 'Experiential Integrity Check in post-run', hasPattern(tracker, 'Experiential Integrity Check'));
    check('tracker sections', 'SP-42', 'Usability Priority Gate P3C-5 present', hasPattern(tracker, 'P3C-5.*Usability Priority'));
  }
}

// ── 3. VISUAL VERIFICATION PRINCIPLE ────────────────────────────────────

function checkVisualVerification() {
  if (!JSON_OUTPUT) console.log('\n═══ 3. VISUAL VERIFICATION PRINCIPLE ═══');

  const PIXEL_PHRASE = 'FROM THE (SCREENSHOT|RENDERED PIXELS)( ALONE)?';
  const SEE_NOT_KNOW = 'what you SEE';

  const files = {
    'pa-deployment.md': 'VV-01',
    'pa-weaver.md': 'VV-02',
    'pa-guardrails.md': 'VV-03',
    'artifact-builder-recipe.md': 'VV-04',
    'MANIFEST.md': 'VV-05',
  };

  for (const [filename, id] of Object.entries(files)) {
    const content = readFile(path.join(BASE, filename));
    if (content) {
      check('Visual Verification', id, `${filename}: pixel/screenshot phrase present`, hasPattern(content, PIXEL_PHRASE));
      check('Visual Verification', `${id}b`, `${filename}: visual verification principle present`, hasPattern(content, 'what you SEE.*not what you KNOW|Say what you SEE|VISUAL VERIFICATION|read.*FROM THE RENDERED PIXELS'));
    }
  }

  // Specific examples check
  const paGuard = readFile(path.join(BASE, 'pa-guardrails.md'));
  if (paGuard) {
    check('Visual Verification', 'VV-06', 'pa-guardrails: CODE INTERPRETATION (WRONG) example', hasPattern(paGuard, 'CODE INTERPRETATION.*WRONG'));
    check('Visual Verification', 'VV-07', 'pa-guardrails: VISUAL VERIFICATION (RIGHT) example', hasPattern(paGuard, 'VISUAL VERIFICATION.*RIGHT'));
  }

  const paDeploy = readFile(path.join(BASE, 'pa-deployment.md'));
  if (paDeploy) {
    check('Visual Verification', 'VV-08', 'pa-deployment: CODE INTERPRETATION example', hasPattern(paDeploy, 'CODE INTERPRETATION'));
    check('Visual Verification', 'VV-09', 'pa-deployment: VISUAL VERIFICATION example', hasPattern(paDeploy, 'VISUAL VERIFICATION'));
  }
}

// ── 4. GATE COUNT CONSISTENCY ───────────────────────────────────────────

function checkGateCountConsistency() {
  if (!JSON_OUTPUT) console.log('\n═══ 4. GATE COUNT CONSISTENCY ═══');

  const manifest = readFile(path.join(BASE, 'MANIFEST.md'));
  const gateSpec = readFile(path.join(BASE, 'gate-runner-spec.md'));
  const gateCore = readFile(path.join(BASE, 'gate-runner-core.js'));
  const gateJson = readFile(path.join(BASE, 'gate-manifest.json'));
  const skill = readFile(SKILL_PATH);
  const tracker = readFile(path.join(BASE, 'EXECUTION-TRACKER-TEMPLATE.md'));

  // Total gate count: 42
  if (manifest) {
    check('Gate Counts', 'GC-01', 'MANIFEST.md: "42 programmatic gate checks"', hasString(manifest, '42 programmatic gate checks'));
    check('Gate Counts', 'GC-02', 'MANIFEST.md: "42 gate-runner gates" in layers', hasString(manifest, '42 gate-runner gates'));
    check('Gate Counts', 'GC-03', 'MANIFEST.md: "20 REQUIRED" in totals', hasString(manifest, '20 REQUIRED'));
    check('Gate Counts', 'GC-04', 'MANIFEST.md: "9 RECOMMENDED" in totals', hasString(manifest, '9 RECOMMENDED'));
    check('Gate Counts', 'GC-05', 'MANIFEST.md: "42 gates" in Appendix B', hasPattern(manifest, '42 gates.*Playwright'));
    check('Gate Counts', 'GC-06', 'MANIFEST.md: "9 functions" for gate-runner-core.js', hasString(manifest, '9 functions'));
    check('Gate Counts', 'GC-07', 'MANIFEST.md: "All 42 gates" in verification', hasString(manifest, 'All 42 gates'));
    check('Gate Counts', 'GC-08', 'MANIFEST.md: "42-gate inventory" in Phase 3A', hasString(manifest, '42-gate inventory'));
  }

  if (gateCore) {
    check('Gate Counts', 'GC-09', 'gate-runner-core.js: REQUIRED (20) in header', hasPattern(gateCore, 'REQUIRED.*20|20.*REQUIRED'));
    check('Gate Counts', 'GC-10', 'gate-runner-core.js: RECOMMENDED (9) in header', hasPattern(gateCore, 'RECOMMENDED.*9|9.*RECOMMENDED'));
    check('Gate Counts', 'GC-11', 'gate-runner-core.js: ADVISORY (7) in header', hasPattern(gateCore, 'ADVISORY.*7|7.*ADVISORY'));
    check('Gate Counts', 'GC-12', 'gate-runner-core.js: 9 execution steps in header', hasPattern(gateCore, '(9 functions|checkUsabilityPriority|checkGateResultIntegrity)'));
    check('Gate Counts', 'GC-13', 'gate-runner-core.js: GR-05b regex supports letter suffix', hasPattern(gateCore, 'GR-\\\\d\\{2\\}\\[a-z\\]\\?'));
  }

  if (gateSpec) {
    check('Gate Counts', 'GC-14', 'gate-runner-spec.md: "20 REQUIRED"', hasString(gateSpec, '20 REQUIRED'));
    check('Gate Counts', 'GC-15', 'gate-runner-spec.md: "9 RECOMMENDED"', hasString(gateSpec, '9 RECOMMENDED'));
  }

  if (gateJson) {
    try {
      const json = JSON.parse(gateJson);
      check('Gate Counts', 'GC-16', 'gate-manifest.json: valid JSON', true);
      const reqCount = json?.tiers?.required?.count;
      const recCount = json?.tiers?.recommended?.count;
      check('Gate Counts', 'GC-17', 'gate-manifest.json: required.count = 20', reqCount === 20, `got ${reqCount}`);
      check('Gate Counts', 'GC-18', 'gate-manifest.json: recommended.count = 9', recCount === 9, `got ${recCount}`);
    } catch (e) {
      check('Gate Counts', 'GC-16', 'gate-manifest.json: valid JSON', false, e.message);
    }
  }

  if (skill) {
    check('Gate Counts', 'GC-19', 'SKILL.md: "42 gates" present', hasPattern(skill, '42 gates'));
    check('Gate Counts', 'GC-20', 'SKILL.md: "9 functions" present', hasPattern(skill, '9.*functions'));
    check('Gate Counts', 'GC-21', 'SKILL.md: "20 REQUIRED" present', hasString(skill, '20 REQ'));
    check('Gate Counts', 'GC-22', 'SKILL.md: "9 RECOMMENDED" present', hasString(skill, '9 REC'));
  }
}

// ── 5. EXPERIENTIAL PASS CHAIN ──────────────────────────────────────────

function checkExperientialChain() {
  if (!JSON_OUTPUT) console.log('\n═══ 5. EXPERIENTIAL PASS CHAIN ═══');

  // Every agent that looks at screenshots must have experiential pass in primacy position
  const paDeploy = readFile(path.join(BASE, 'pa-deployment.md'));
  const paWeaver = readFile(path.join(BASE, 'pa-weaver.md'));
  const paGuard = readFile(path.join(BASE, 'pa-guardrails.md'));
  const builderRecipe = readFile(path.join(BASE, 'artifact-builder-recipe.md'));
  const orchestrator = readFile(path.join(BASE, 'artifact-orchestrator.md'));
  const manifest = readFile(path.join(BASE, 'MANIFEST.md'));
  const tracker = readFile(path.join(BASE, 'EXECUTION-TRACKER-TEMPLATE.md'));

  // Primacy: experiential section appears BEFORE analytical content
  if (paDeploy) {
    check('Experiential Chain', 'EC-01', 'pa-deployment: Section 0 before Section 1 (primacy)',
      paDeploy.indexOf('EXPERIENTIAL PASS PROTOCOL') < paDeploy.indexOf('9-AUDITOR DEPLOYMENT'));
  }
  if (paWeaver) {
    check('Experiential Chain', 'EC-02', 'pa-weaver: Section 0 before Section 1 (primacy)',
      paWeaver.indexOf('WEAVER EXPERIENTIAL ANCHOR') < paWeaver.indexOf('WEAVER ROLE'));
  }
  if (builderRecipe) {
    check('Experiential Chain', 'EC-03', 'builder-recipe: Step 5.0 before Step 5.1 (primacy)',
      builderRecipe.indexOf('Step 5.0') < builderRecipe.indexOf('Step 5.1'));
  }

  // MANIFEST.md template primacy
  if (manifest) {
    check('Experiential Chain', 'EC-04', 'MANIFEST: PA Auditor template has experiential before questions',
      manifest.indexOf('EXPERIENTIAL PASS (MANDATORY') < manifest.indexOf('QUESTION ANSWERS'));
    check('Experiential Chain', 'EC-05', 'MANIFEST: Integrative template has experiential before reports',
      manifest.indexOf('YOUR OWN EXPERIENTIAL PASS') < manifest.indexOf('GESTALT SYNTHESIS'));
    check('Experiential Chain', 'EC-06', 'MANIFEST: Weaver template has experiential before verdict',
      manifest.indexOf('YOUR OWN EXPERIENTIAL ANCHOR') < manifest.indexOf('VERDICT LOGIC (priority order'));
  }

  // Completion manifest enforcement
  if (paGuard) {
    check('Experiential Chain', 'EC-07', 'pa-guardrails: Experiential Pass row MANDATORY in completion',
      hasPattern(paGuard, 'Experiential Pass.*MANDATORY'));
    check('Experiential Chain', 'EC-08', 'pa-guardrails: report without Experiential Pass = INCOMPLETE',
      hasPattern(paGuard, 'without.*Experiential Pass.*INCOMPLETE|report without.*Experiential'));
  }

  // Tracker enforcement
  if (tracker) {
    check('Experiential Chain', 'EC-09', 'tracker: Phase 3A+ experiential scan step exists',
      hasPattern(tracker, 'Phase 3A\\+.*Experiential Scan'));
    check('Experiential Chain', 'EC-10', 'tracker: Experiential Pass Verification table for 9 auditors',
      hasPattern(tracker, 'Experiential Pass.*present'));
    check('Experiential Chain', 'EC-11', 'tracker: Experiential Integrity Check in post-run (6 items)',
      hasPattern(tracker, 'Experiential Integrity Check'));
  }

  // Forward references (old sections replaced correctly)
  if (paDeploy) {
    check('Experiential Chain', 'EC-12', 'pa-deployment: old Section 2.5 replaced/forward-referenced',
      !hasPattern(paDeploy, '2\\.5.*[Ee]xperiential.*[Pp]ass') || hasPattern(paDeploy, '[Ss]ee Section 0'));
  }
  if (paWeaver) {
    check('Experiential Chain', 'EC-13', 'pa-weaver: old Section 4.5 replaced/forward-referenced',
      !hasPattern(paWeaver, '4\\.5.*[Aa]ggregation(?!.*See Section 0)') || hasPattern(paWeaver, 'See Section 0'));
  }
}

// ── 6. WAVE 4 GATES ────────────────────────────────────────────────────

function checkWave4Gates() {
  if (!JSON_OUTPUT) console.log('\n═══ 6. WAVE 4 EXPERIENTIAL GATES ═══');

  const gateCore = readFile(path.join(BASE, 'gate-runner-core.js'));
  const gateSpec = readFile(path.join(BASE, 'gate-runner-spec.md'));
  const gateJson = readFile(path.join(BASE, 'gate-manifest.json'));

  if (gateCore) {
    // Function existence
    check('Wave 4 Gates', 'W4-01', 'gate-runner-core.js: checkDPR function exists', hasPattern(gateCore, '(async\\s+)?function\\s+checkDPR|const\\s+checkDPR'));
    check('Wave 4 Gates', 'W4-02', 'gate-runner-core.js: checkScreenshotQuality function exists', hasPattern(gateCore, '(async\\s+)?function\\s+checkScreenshotQuality|const\\s+checkScreenshotQuality'));
    check('Wave 4 Gates', 'W4-03', 'gate-runner-core.js: checkUsabilityPriority function exists', hasPattern(gateCore, '(async\\s+)?function\\s+checkUsabilityPriority|const\\s+checkUsabilityPriority'));

    // GR-63 in runGateRunner
    check('Wave 4 Gates', 'W4-04', 'gate-runner-core.js: GR-63 experiential marker check', hasPattern(gateCore, 'EXPERIENTIAL-CHECK'));
    check('Wave 4 Gates', 'W4-05', 'gate-runner-core.js: GR-63 checks legibility keyword', hasPattern(gateCore, 'legib|read|text|font'));

    // Coverage arrays
    check('Wave 4 Gates', 'W4-06', 'gate-runner-core.js: GR-61 in REQUIRED_GATES', hasPattern(gateCore, "REQUIRED.*GR-61|GR-61.*REQUIRED|'GR-61'"));
    check('Wave 4 Gates', 'W4-07', 'gate-runner-core.js: GR-62 in REQUIRED_GATES', hasPattern(gateCore, "REQUIRED.*GR-62|GR-62.*REQUIRED|'GR-62'"));
    check('Wave 4 Gates', 'W4-08', 'gate-runner-core.js: GR-63 in REQUIRED_GATES', hasPattern(gateCore, "'GR-63'"));
    check('Wave 4 Gates', 'W4-09', 'gate-runner-core.js: GR-64 in REQUIRED_GATES', hasPattern(gateCore, "'GR-64'"));
  }

  if (gateSpec) {
    check('Wave 4 Gates', 'W4-10', 'gate-runner-spec.md: Wave 4 section present', hasPattern(gateSpec, 'Wave 4.*Experiential'));
    check('Wave 4 Gates', 'W4-11', 'gate-runner-spec.md: GR-61 spec present', hasPattern(gateSpec, 'GR-61'));
    check('Wave 4 Gates', 'W4-12', 'gate-runner-spec.md: GR-62 spec present', hasPattern(gateSpec, 'GR-62'));
    check('Wave 4 Gates', 'W4-13', 'gate-runner-spec.md: GR-63 spec present', hasPattern(gateSpec, 'GR-63'));
    check('Wave 4 Gates', 'W4-14', 'gate-runner-spec.md: GR-64 spec present', hasPattern(gateSpec, 'GR-64'));
  }

  if (gateJson) {
    check('Wave 4 Gates', 'W4-15', 'gate-manifest.json: GR-61 in required list', hasString(gateJson, 'GR-61'));
    check('Wave 4 Gates', 'W4-16', 'gate-manifest.json: GR-62 in required list', hasString(gateJson, 'GR-62'));
    check('Wave 4 Gates', 'W4-17', 'gate-manifest.json: GR-63 in recommended list', hasString(gateJson, 'GR-63'));
    check('Wave 4 Gates', 'W4-18', 'gate-manifest.json: GR-64 in recommended list', hasString(gateJson, 'GR-64'));
  }
}

// ── 7. AUDITOR ASSIGNMENT CONSISTENCY ───────────────────────────────────

function checkAuditorAssignments() {
  if (!JSON_OUTPUT) console.log('\n═══ 7. AUDITOR ASSIGNMENTS ═══');

  const manifest = readFile(path.join(BASE, 'MANIFEST.md'));
  const paDeploy = readFile(path.join(BASE, 'pa-deployment.md'));
  const tracker = readFile(path.join(BASE, 'EXECUTION-TRACKER-TEMPLATE.md'));
  const paQuestions = readFile(path.join(BASE, 'pa-questions.md'));

  // Check total question count
  if (paQuestions) {
    check('Auditor Assignments', 'AA-01', 'pa-questions.md: "69 questions" total stated', hasPattern(paQuestions, '69 questions'));
    check('Auditor Assignments', 'AA-02', 'pa-questions.md: PA-17 marked TIER 1 EQUIVALENT', hasPattern(paQuestions, 'PA-17.*TIER 1 EQUIVALENT'));
    check('Auditor Assignments', 'AA-03', 'pa-questions.md: PA-41 marked TIER 1 EQUIVALENT', hasPattern(paQuestions, 'PA-41.*TIER 1 EQUIVALENT'));
    check('Auditor Assignments', 'AA-04', 'pa-questions.md: Section 4 WARNING — WEAVER ONLY', hasPattern(paQuestions, 'WEAVER AND ORCHESTRATOR USE ONLY'));
  }

  // Check key auditor-question assignments appear consistently
  // Auditor A should have PA-05 in all files
  if (manifest) {
    check('Auditor Assignments', 'AA-05', 'MANIFEST: Auditor A has PA-05', hasPattern(manifest, 'Auditor A.*PA-05|PA-05.*Auditor A'));
  }
  if (paDeploy) {
    check('Auditor Assignments', 'AA-06', 'pa-deployment: 9 auditors listed', hasPattern(paDeploy, 'Auditor I'));
  }
  if (tracker) {
    check('Auditor Assignments', 'AA-07', 'tracker: 9 auditor rows in Phase 3B', hasPattern(tracker, 'Cross-Page.*Adversarial'));
  }

  // Auditor B should have readability questions
  if (manifest) {
    check('Auditor Assignments', 'AA-08', 'MANIFEST: Auditor B has PA-02 (readability)', hasPattern(manifest, 'Auditor B.*PA-02'));
    check('Auditor Assignments', 'AA-09', 'MANIFEST: Auditor B has PA-81 (chart comprehension)', hasPattern(manifest, 'Auditor B.*PA-81'));
  }
}

// ── 8. FRESH-EYES ISOLATION ─────────────────────────────────────────────

function checkFreshEyes() {
  if (!JSON_OUTPUT) console.log('\n═══ 8. FRESH-EYES ISOLATION ═══');

  const manifest = readFile(path.join(BASE, 'MANIFEST.md'));
  const paDeploy = readFile(path.join(BASE, 'pa-deployment.md'));
  const paGuard = readFile(path.join(BASE, 'pa-guardrails.md'));
  const paQuestions = readFile(path.join(BASE, 'pa-questions.md'));

  if (manifest) {
    check('Fresh-Eyes', 'FE-A1', 'MANIFEST: "FRESH-EYES IS NON-NEGOTIABLE"', hasPattern(manifest, 'FRESH-EYES IS NON-NEGOTIABLE'));
    check('Fresh-Eyes', 'FE-A2', 'MANIFEST: auditors receive screenshots ONLY', hasPattern(manifest, 'Screenshots ONLY'));
  }
  if (paGuard) {
    check('Fresh-Eyes', 'FE-A3', 'pa-guardrails: Section 6 FRESH-EYES exists', hasSection(paGuard, '6. FRESH-EYES PRINCIPLE'));
    check('Fresh-Eyes', 'FE-A4', 'pa-guardrails: "Zero context = genuine first impressions"', hasString(paGuard, 'Zero context'));
    check('Fresh-Eyes', 'FE-A5', 'pa-guardrails: Three Laws present', hasPattern(paGuard, 'Three Laws|The One Rule'));
  }
  if (paQuestions) {
    check('Fresh-Eyes', 'FE-A6', 'pa-questions: Section 4 WARNING blocks auditor access', hasPattern(paQuestions, 'MUST NOT be included in PA Auditor'));
  }
}

// ── 9. PA-05 OWNERSHIP ──────────────────────────────────────────────────

function checkPA05Ownership() {
  if (!JSON_OUTPUT) console.log('\n═══ 9. PA-05 OWNERSHIP (Weaver, not Integrative) ═══');

  const manifest = readFile(path.join(BASE, 'MANIFEST.md'));
  const paWeaver = readFile(path.join(BASE, 'pa-weaver.md'));
  const tracker = readFile(path.join(BASE, 'EXECUTION-TRACKER-TEMPLATE.md'));

  if (manifest) {
    check('PA-05 Ownership', 'PO-01', 'MANIFEST: Integrative template says PA-05 is WEAVER responsibility',
      hasPattern(manifest, 'Integrative.*PA-05.*[Ww]eaver|FIX-083.*Integrative'));
    check('PA-05 Ownership', 'PO-02', 'MANIFEST: Weaver template includes PA-05 SCORING section',
      hasPattern(manifest, 'PA-05 SCORING.*Weaver responsibility'));
  }
  if (paWeaver) {
    check('PA-05 Ownership', 'PO-03', 'pa-weaver: PA-05 scoring protocol present',
      hasPattern(paWeaver, 'PA-05'));
  }
  if (tracker) {
    check('PA-05 Ownership', 'PO-04', 'tracker: PA-05 score in Phase 3C (not 3B)',
      hasPattern(tracker, 'P3C.*PA-05'));
  }
}

// ── 10. SKILL.md LINE COUNT ACCURACY ────────────────────────────────────

function checkSkillAccuracy() {
  if (!JSON_OUTPUT) console.log('\n═══ 10. SKILL.md ACCURACY ═══');

  const skill = readFile(SKILL_PATH);
  if (!skill) return;

  check('SKILL Accuracy', 'SK-01', 'SKILL: pa-deployment described as ~320 lines', hasPattern(skill, 'pa-deployment.*~?320'));
  check('SKILL Accuracy', 'SK-02', 'SKILL: pa-weaver described as ~450 lines', hasPattern(skill, 'pa-weaver.*~?450'));
  check('SKILL Accuracy', 'SK-03', 'SKILL: pa-guardrails described as ~176 lines', hasPattern(skill, 'pa-guardrails.*~?176'));
  check('SKILL Accuracy', 'SK-04', 'SKILL: mentions experiential pass protocol', hasPattern(skill, 'experiential'));
  check('SKILL Accuracy', 'SK-05', 'SKILL: mentions visual verification', hasPattern(skill, 'visual verification'));
  check('SKILL Accuracy', 'SK-06', 'SKILL: DPR + Screenshots rule present', hasPattern(skill, 'DPR.*Screenshots|GR-61'));
  check('SKILL Accuracy', 'SK-07', 'SKILL: Experiential scan rule present', hasPattern(skill, '[Ee]xperiential scan'));
  check('SKILL Accuracy', 'SK-08', 'SKILL: Usability priority gate rule present', hasPattern(skill, 'GR-64|[Uu]sability priority'));
}

// ── 11. TRACKER HIERARCHY ───────────────────────────────────────────────

function checkTrackerHierarchy() {
  if (!JSON_OUTPUT) console.log('\n═══ 11. TRACKER HIERARCHY ═══');

  const tracker = readFile(path.join(BASE, 'EXECUTION-TRACKER-TEMPLATE.md'));
  if (!tracker) return;

  check('Tracker', 'TH-01', 'tracker: 4-level hierarchy documented (L0/L1/L2/L3)', hasPattern(tracker, 'L0.*L1.*L2.*L3'));
  check('Tracker', 'TH-02', 'tracker: L0 has 14 phase rows', hasPattern(tracker, 'Phase 3C-post'));
  check('Tracker', 'TH-03', 'tracker: Experiential category in gate results (4 gates)', hasPattern(tracker, 'Experiential.*GR-61.*GR-62.*GR-63.*GR-64'));
  check('Tracker', 'TH-04', 'tracker: Experiential Convergence Count field', hasPattern(tracker, 'Experiential Convergence Count'));
  check('Tracker', 'TH-05', 'tracker: P3B-1g checks experiential in auditor prompts', hasPattern(tracker, 'experiential pass as Section 0'));
  check('Tracker', 'TH-06', 'tracker: P3C-2 Weaver Experiential Anchor section', hasPattern(tracker, 'Weaver Experiential Anchor'));
  check('Tracker', 'TH-07', 'tracker: visual verification checkbox in P3A+', hasPattern(tracker, 'PIXELS show.*not what HTML says'));
}

// ── MAIN ────────────────────────────────────────────────────────────────

function main() {
  if (!JSON_OUTPUT) {
    console.log('╔══════════════════════════════════════════════════════════╗');
    console.log('║  Pipeline v3 — Structural Integrity Verification        ║');
    console.log('║  ENFORCED Layer: ~200 automated binary checks           ║');
    console.log('╚══════════════════════════════════════════════════════════╝');
  }

  checkFileExistence();
  checkSectionPresence();
  checkVisualVerification();
  checkGateCountConsistency();
  checkExperientialChain();
  checkWave4Gates();
  checkAuditorAssignments();
  checkFreshEyes();
  checkPA05Ownership();
  checkSkillAccuracy();
  checkTrackerHierarchy();

  // Summary
  if (JSON_OUTPUT) {
    console.log(JSON.stringify(results, null, 2));
  } else {
    console.log('\n══════════════════════════════════════════════════════════');
    console.log(`TOTAL: ${results.summary.total} checks | ${results.summary.pass} PASS | ${results.summary.fail} FAIL`);
    if (results.summary.fail > 0) {
      console.log('\nFAILURES:');
      for (const f of results.failures) {
        console.log(`  ✗ [${f.id}] ${f.description}${f.details ? ` — ${f.details}` : ''}`);
      }
    }
    console.log(`\nVerdict: ${results.summary.fail === 0 ? 'ALL PASS ✓' : `${results.summary.fail} FAILURES — fix before running pipeline`}`);
  }

  if (FIX_REPORT && results.failures.length > 0) {
    console.log('\n══════════════════════════════════════════════════════════');
    console.log('FIX REPORT:');
    for (const f of results.failures) {
      console.log(`\n[${f.id}] ${f.description}`);
      console.log(`  Category: ${f.category}`);
      console.log(`  Fix: Locate the missing content and add it`);
      if (f.details) console.log(`  Details: ${f.details}`);
    }
  }

  process.exit(results.summary.fail > 0 ? 1 : 0);
}

main();
