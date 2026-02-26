#!/usr/bin/env node
// check-consistency.js — Cross-file reference consistency checker
// Pipeline v5 Crack Dimension D6 defense
// Runnable: node check-consistency.js (from ephemeral/va-extraction/)
// Dependencies: NONE (Node.js built-in fs, path only)
// Exit code: 0 = all pass, 1 = any fail

const fs = require('fs');
const path = require('path');

// ============================================================================
// CONFIGURATION
// ============================================================================

const VA_DIR = __dirname; // ephemeral/va-extraction/
const REPO_ROOT = path.resolve(VA_DIR, '..', '..');
const DESIGN_SYSTEM = path.join(REPO_ROOT, 'design-system');
const SKILLS_DIR = path.join(
  process.env.HOME || '/Users/spacewizardmoneygang',
  '.claude', 'skills'
);

// ============================================================================
// HELPERS
// ============================================================================

let totalChecks = 0;
let totalPass = 0;
let totalFail = 0;
const failures = [];

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (e) {
    return null;
  }
}

function lineCount(filePath) {
  const content = readFile(filePath);
  if (content === null) return -1;
  return content.split('\n').length;
}

function check(category, name, expected, actual, tolerance) {
  totalChecks++;
  const tol = tolerance || 0;
  let pass;
  if (typeof expected === 'number' && typeof actual === 'number') {
    if (tol > 0) {
      // Percentage tolerance
      const diff = Math.abs(expected - actual);
      const maxDiff = expected * tol;
      pass = diff <= maxDiff;
    } else {
      pass = expected === actual;
    }
  } else {
    pass = expected === actual;
  }

  if (pass) {
    totalPass++;
    console.log(`  PASS  ${name}`);
  } else {
    totalFail++;
    const msg = `  FAIL  ${name}: expected ${expected}, got ${actual}`;
    console.log(msg);
    failures.push({ category, name, expected, actual });
  }
  return pass;
}

function checkIncludes(category, name, text, substring) {
  totalChecks++;
  if (text && text.includes(substring)) {
    totalPass++;
    console.log(`  PASS  ${name}`);
    return true;
  } else {
    totalFail++;
    const msg = `  FAIL  ${name}: text does not contain "${substring}"`;
    console.log(msg);
    failures.push({ category, name, expected: `contains "${substring}"`, actual: 'not found' });
    return false;
  }
}

function section(title) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`CHECK: ${title}`);
  console.log('='.repeat(70));
}

// ============================================================================
// CHECK 1: GATE COUNT CONSISTENCY
// ============================================================================

function checkGateCounts() {
  section('Gate Count Consistency');

  // 1a. Parse canonical counts from gate-manifest.json
  const manifestPath = path.join(VA_DIR, 'gate-manifest.json');
  const manifestJSON = readFile(manifestPath);
  if (!manifestJSON) {
    console.log('  FAIL  Cannot read gate-manifest.json');
    totalChecks++; totalFail++;
    failures.push({ category: 'Gate Counts', name: 'gate-manifest.json readable', expected: 'file exists', actual: 'not found' });
    return;
  }
  const manifest = JSON.parse(manifestJSON);

  const canonicalReq = manifest.tiers.required.count;
  const canonicalRec = manifest.tiers.recommended.count;
  const canonicalAdv = manifest.tiers.advisory.count;
  const canonicalBV = manifest.tiers.briefVerification.count;
  const canonicalDiag = manifest.tiers.diagnosticOnly.count;
  const canonicalTotal = manifest.totalGateCount.grandTotal;

  // Verify the listed gates match their counts
  check('Gate Counts', 'manifest required array length matches count',
    canonicalReq, manifest.tiers.required.gates.length);
  check('Gate Counts', 'manifest recommended array length matches count',
    canonicalRec, manifest.tiers.recommended.gates.length);
  check('Gate Counts', 'manifest advisory array length matches count',
    canonicalAdv, manifest.tiers.advisory.gates.length);
  check('Gate Counts', 'manifest BV array length matches count',
    canonicalBV, manifest.tiers.briefVerification.gates.length);
  check('Gate Counts', 'manifest diagnostic array length matches count',
    canonicalDiag, manifest.tiers.diagnosticOnly.gates.length);

  // Verify grand total = sum of tiers
  const computedTotal = canonicalReq + canonicalRec + canonicalAdv + canonicalBV + canonicalDiag +
    (manifest.totalGateCount.utility || 0);
  check('Gate Counts', 'manifest grandTotal = sum of all tiers',
    canonicalTotal, computedTotal);

  // 1b. Count unique gate IDs in gate-runner-core.js
  const coreJS = readFile(path.join(VA_DIR, 'gate-runner-core.js'));
  if (!coreJS) {
    console.log('  FAIL  Cannot read gate-runner-core.js');
    totalChecks++; totalFail++;
    return;
  }

  // Extract unique gate IDs from gate: 'XX-NN' patterns
  const gateIdRegex = /gate:\s*'((?:GR|BV|A)-\d+\w*)'/g;
  const gateIds = new Set();
  let match;
  while ((match = gateIdRegex.exec(coreJS)) !== null) {
    gateIds.add(match[1]);
  }

  // Count by type
  const grIds = [...gateIds].filter(id => id.startsWith('GR-'));
  const bvIds = [...gateIds].filter(id => id.startsWith('BV-'));
  const aIds = [...gateIds].filter(id => id.startsWith('A-'));

  const inGateRunnerClaimed = manifest.totalGateCount.inGateRunner;
  check('Gate Counts', 'core.js unique GR gate IDs matches manifest.inGateRunner',
    inGateRunnerClaimed, grIds.length);
  check('Gate Counts', 'core.js unique BV gate IDs matches manifest.briefVerification',
    canonicalBV, bvIds.length);

  // 1c. Check gate-runner-spec.md tier counts
  const specMD = readFile(path.join(VA_DIR, 'gate-runner-spec.md'));
  if (specMD) {
    // Parse table rows like: | **REQUIRED** | ... | 21 |
    const reqMatch = specMD.match(/\*\*REQUIRED\*\*.*?\|\s*(\d+)\s*\|/);
    const recMatch = specMD.match(/\*\*RECOMMENDED\*\*.*?\|\s*(\d+)\s*\|/);
    const advMatch = specMD.match(/\*\*ADVISORY\*\*.*?\|\s*(\d+)\s*\|/);
    const bvMatch = specMD.match(/\*\*BRIEF VERIFICATION\*\*.*?\|\s*(\d+)\s*\|/);

    if (reqMatch) check('Gate Counts', 'spec.md REQUIRED count matches manifest',
      canonicalReq, parseInt(reqMatch[1]));
    if (recMatch) check('Gate Counts', 'spec.md RECOMMENDED count matches manifest',
      canonicalRec, parseInt(recMatch[1]));
    if (advMatch) check('Gate Counts', 'spec.md ADVISORY count matches manifest',
      canonicalAdv, parseInt(advMatch[1]));
    if (bvMatch) check('Gate Counts', 'spec.md BRIEF count matches manifest',
      canonicalBV, parseInt(bvMatch[1]));

    // Check "Total executable gates: 54" claim
    const totalExecMatch = specMD.match(/Total executable gates:\s*(\d+)/);
    if (totalExecMatch) {
      check('Gate Counts', 'spec.md total executable gates matches manifest',
        canonicalTotal, parseInt(totalExecMatch[1]));
    }
  }

  // 1d. Check MANIFEST.md gate count references
  const manifestMD = readFile(path.join(VA_DIR, 'MANIFEST.md'));
  if (manifestMD) {
    // "Run 54 programmatic gate checks"
    const runGateMatch = manifestMD.match(/Run\s+(\d+)\s+programmatic gate checks/);
    if (runGateMatch) {
      check('Gate Counts', 'MANIFEST.md "Run N programmatic gate checks" matches manifest',
        canonicalTotal, parseInt(runGateMatch[1]));
    }
  }

  // 1e. Check core.js header comment total
  const headerTotalMatch = coreJS.match(/^\/\/\s*Total:\s*(\d+)\s*gates/m);
  if (headerTotalMatch) {
    check('Gate Counts', 'core.js header comment total matches manifest',
      canonicalTotal, parseInt(headerTotalMatch[1]));
  }

  // 1f. Check core.js header REQUIRED count
  const headerReqMatch = coreJS.match(/REQUIRED\s*\((\d+)\)/);
  if (headerReqMatch) {
    check('Gate Counts', 'core.js header REQUIRED count matches manifest',
      canonicalReq, parseInt(headerReqMatch[1]));
  }

  // 1g. Check core.js header RECOMMENDED count
  const headerRecMatch = coreJS.match(/RECOMMENDED\s*\((\d+)\)/);
  if (headerRecMatch) {
    check('Gate Counts', 'core.js header RECOMMENDED count matches manifest',
      canonicalRec, parseInt(headerRecMatch[1]));
  }

  // 1h. Check core.js header ADVISORY count
  const headerAdvMatch = coreJS.match(/ADVISORY\s*\((\d+)\)/);
  if (headerAdvMatch) {
    check('Gate Counts', 'core.js header ADVISORY count matches manifest',
      canonicalAdv, parseInt(headerAdvMatch[1]));
  }

  // 1i. Check SKILL.md (build-page) gate count references
  const buildSkillPath = path.join(SKILLS_DIR, 'build-page', 'SKILL.md');
  const buildSkill = readFile(buildSkillPath);
  if (buildSkill) {
    // "54 gates" references
    const skillGateCountMatches = buildSkill.match(/(\d+)\s*gates/g) || [];
    for (const m of skillGateCountMatches) {
      const num = parseInt(m);
      if (num > 40 && num < 100) { // Only check plausible gate count references
        check('Gate Counts', `SKILL.md (build-page) "${m}" matches manifest`,
          canonicalTotal, num);
      }
    }

    // Tier breakdown "21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 7 BRIEF + 1 UTILITY = 54"
    const tierBreakdown = buildSkill.match(/(\d+)\s*REQUIRED\s*\+\s*(\d+)\s*RECOMMENDED\s*\+\s*(\d+)\s*ADVISORY\s*\+\s*(\d+)\s*DIAGNOSTIC\s*\+\s*(\d+)\s*BRIEF\s*\+\s*(\d+)\s*UTILITY\s*=\s*(\d+)/);
    if (tierBreakdown) {
      check('Gate Counts', 'SKILL.md tier breakdown REQUIRED', canonicalReq, parseInt(tierBreakdown[1]));
      check('Gate Counts', 'SKILL.md tier breakdown RECOMMENDED', canonicalRec, parseInt(tierBreakdown[2]));
      check('Gate Counts', 'SKILL.md tier breakdown ADVISORY', canonicalAdv, parseInt(tierBreakdown[3]));
      check('Gate Counts', 'SKILL.md tier breakdown DIAGNOSTIC', canonicalDiag, parseInt(tierBreakdown[4]));
      check('Gate Counts', 'SKILL.md tier breakdown BRIEF', canonicalBV, parseInt(tierBreakdown[5]));
      check('Gate Counts', 'SKILL.md tier breakdown total', canonicalTotal, parseInt(tierBreakdown[7]));
    }
  } else {
    console.log('  SKIP  SKILL.md (build-page) not found at ' + buildSkillPath);
  }
}

// ============================================================================
// CHECK 2: GATE ID CROSS-VALIDATION
// ============================================================================

function checkGateIds() {
  section('Gate ID Cross-Validation');

  const manifestPath = path.join(VA_DIR, 'gate-manifest.json');
  const manifest = JSON.parse(readFile(manifestPath));

  // Collect all gate IDs from manifest
  const manifestGateIds = new Set();
  for (const tier of ['required', 'recommended', 'advisory', 'briefVerification', 'diagnosticOnly']) {
    if (manifest.tiers[tier] && manifest.tiers[tier].gates) {
      manifest.tiers[tier].gates.forEach(id => manifestGateIds.add(id));
    }
  }

  // Collect gate IDs from core.js
  const coreJS = readFile(path.join(VA_DIR, 'gate-runner-core.js'));
  const coreGateIds = new Set();
  const gateIdRegex = /gate:\s*'((?:GR|BV|A)-\d+\w*)'/g;
  let match;
  while ((match = gateIdRegex.exec(coreJS)) !== null) {
    coreGateIds.add(match[1]);
  }

  // Gates in manifest but NOT in core.js (expected: GR-33, GR-34 = diagnostic only)
  const manifestOnly = [...manifestGateIds].filter(id => !coreGateIds.has(id));
  const expectedManifestOnly = new Set(manifest.tiers.diagnosticOnly.gates);
  for (const id of manifestOnly) {
    if (expectedManifestOnly.has(id)) {
      check('Gate IDs', `${id} in manifest but not core.js (expected: diagnostic-only)`, true, true);
    } else {
      check('Gate IDs', `${id} in manifest but MISSING from core.js`, 'present in core.js', 'missing');
    }
  }

  // Gates in core.js but NOT in manifest (should be A-03 utility only)
  const coreOnly = [...coreGateIds].filter(id => !manifestGateIds.has(id));
  for (const id of coreOnly) {
    if (id === 'A-03') {
      check('Gate IDs', `${id} in core.js but not in manifest tiers (expected: utility)`, true, true);
    } else {
      check('Gate IDs', `${id} in core.js but MISSING from manifest`, 'present in manifest', 'missing');
    }
  }
}

// ============================================================================
// CHECK 3: FUNCTION COUNT IN CORE.JS
// ============================================================================

function checkFunctionCount() {
  section('Function Count in gate-runner-core.js');

  const coreJS = readFile(path.join(VA_DIR, 'gate-runner-core.js'));
  if (!coreJS) return;

  // Count top-level function declarations (all patterns)
  // Matches: function name, async function name, const name = function, const name = async function, const name = async (, const name = (
  const funcPatterns = [
    /^(?:async\s+)?function\s+(\w+)/gm,                    // function name() or async function name()
    /^(?:const|let|var)\s+(\w+)\s*=\s*(?:async\s+)?function/gm,  // const name = function or const name = async function
    /^(?:const|let|var)\s+(\w+)\s*=\s*(?:async\s+)?\(/gm,  // const name = ( or const name = async (
  ];
  const functionSet = new Set();
  for (const regex of funcPatterns) {
    let match;
    while ((match = regex.exec(coreJS)) !== null) {
      functionSet.add(match[1]);
    }
  }
  const functions = [...functionSet].sort();

  // The manifest and SKILL.md claim "26 executable Playwright JS functions"
  // (25 original + captureScreenshots from Section 8 DPR-safe capture)
  // We verify what's actually there
  console.log(`  INFO  Found ${functions.length} functions: ${functions.join(', ')}`);

  // Check SKILL.md claim
  const buildSkill = readFile(path.join(SKILLS_DIR, 'build-page', 'SKILL.md'));
  if (buildSkill) {
    const funcCountMatch = buildSkill.match(/(\d+)\s*executable Playwright JS functions/);
    if (funcCountMatch) {
      check('Function Count', 'SKILL.md function count claim matches actual',
        functions.length, parseInt(funcCountMatch[1]));
    }
  }

  // Check MANIFEST.md claim
  const manifestMD = readFile(path.join(VA_DIR, 'MANIFEST.md'));
  if (manifestMD) {
    const funcCountMatch = manifestMD.match(/All executable Playwright JavaScript\s*\((\d+)\s*functions\)/);
    if (funcCountMatch) {
      check('Function Count', 'MANIFEST.md function count claim matches actual',
        functions.length, parseInt(funcCountMatch[1]));
    }
  }
}

// ============================================================================
// CHECK 4: PA QUESTION COUNT CONSISTENCY
// ============================================================================

function checkPAQuestions() {
  section('PA Question Count Consistency');

  // 4a. Count unique PA questions defined in pa-questions.md (table rows starting with | PA-NN)
  const paQuestionsText = readFile(path.join(VA_DIR, 'pa-questions.md'));
  if (!paQuestionsText) {
    console.log('  FAIL  Cannot read pa-questions.md');
    totalChecks++; totalFail++;
    return;
  }

  const questionDefRegex = /^\|\s*(PA-\d+)\s*\|/gm;
  const definedQuestions = new Set();
  let match;
  while ((match = questionDefRegex.exec(paQuestionsText)) !== null) {
    definedQuestions.add(match[1]);
  }

  // Also count Tier 5 questions defined in section 2 (PA-60 through PA-68 as bold headers)
  const tier5Regex = /\*\*(PA-\d+):/g;
  while ((match = tier5Regex.exec(paQuestionsText)) !== null) {
    definedQuestions.add(match[1]);
  }

  console.log(`  INFO  Found ${definedQuestions.size} unique PA questions defined in pa-questions.md`);

  // 4b. Check pa-deployment.md total claim
  const deploymentText = readFile(path.join(VA_DIR, 'pa-deployment.md'));
  if (deploymentText) {
    const totalClaimMatch = deploymentText.match(/Total:\s*(\d+)\s*questions/);
    if (totalClaimMatch) {
      check('PA Questions', 'pa-deployment.md total claim matches defined questions',
        definedQuestions.size, parseInt(totalClaimMatch[1]));
    }
  }

  // 4c. Check MANIFEST.md "69 questions" references
  const manifestMD = readFile(path.join(VA_DIR, 'MANIFEST.md'));
  if (manifestMD) {
    const manifestQMatch = manifestMD.match(/Total:\s*(\d+)\s*questions across 9 auditors/);
    if (manifestQMatch) {
      check('PA Questions', 'MANIFEST.md total question claim matches defined',
        definedQuestions.size, parseInt(manifestQMatch[1]));
    }
  }

  // 4d. Check SKILL.md (build-page)
  const buildSkill = readFile(path.join(SKILLS_DIR, 'build-page', 'SKILL.md'));
  if (buildSkill) {
    const skillQMatch = buildSkill.match(/(\d+)\s*PA question definitions/);
    if (skillQMatch) {
      check('PA Questions', 'SKILL.md (build-page) PA question count matches defined',
        definedQuestions.size, parseInt(skillQMatch[1]));
    }
  }

  // 4e. Check perceptual-auditing SKILL.md
  const paSkill = readFile(path.join(SKILLS_DIR, 'perceptual-auditing', 'SKILL.md'));
  if (paSkill) {
    const paSkillQMatch = paSkill.match(/(\d+)\s*PA questions/);
    if (paSkillQMatch) {
      check('PA Questions', 'SKILL.md (perceptual-auditing) PA question count matches defined',
        definedQuestions.size, parseInt(paSkillQMatch[1]));
    }
  }

  // 4f. Check pa-questions.md header claim ("PA-01 through PA-77")
  const headerMatch = paQuestionsText.match(/PA-01 through PA-(\d+)/);
  if (headerMatch) {
    const highestClaimed = parseInt(headerMatch[1]);
    const highestActual = Math.max(...[...definedQuestions].map(q => parseInt(q.replace('PA-', ''))));
    check('PA Questions', 'pa-questions.md header range matches highest defined question',
      highestClaimed, highestActual);
  }
}

// ============================================================================
// CHECK 5: AUDITOR QUESTION ASSIGNMENT SUMS
// ============================================================================

function checkAuditorAssignments() {
  section('Auditor Question Assignment Sums');

  const deploymentText = readFile(path.join(VA_DIR, 'pa-deployment.md'));
  if (!deploymentText) {
    console.log('  FAIL  Cannot read pa-deployment.md');
    totalChecks++; totalFail++;
    return;
  }

  // Parse the auditor assignment table
  // Format: | **A** | ... | PA-01, PA-03, ... | PA-65, PA-67 | PA-72, PA-76 | 9 |
  const auditorRegex = /\|\s*\*\*([A-I])\*\*\s*\|[^|]*\|([^|]*)\|([^|]*)\|([^|]*)\|\s*(\d+)\s*\|/g;
  let match;
  let totalAssigned = 0;
  const allAssignedQuestions = new Set();

  while ((match = auditorRegex.exec(deploymentText)) !== null) {
    const auditor = match[1];
    const claimedTotal = parseInt(match[5]);

    // Count PA-NN references across all columns
    const allCols = match[2] + match[3] + match[4];
    const questionRefs = allCols.match(/PA-\d+/g) || [];
    const uniqueQuestions = new Set(questionRefs);
    const actualCount = uniqueQuestions.size;

    check('Auditor Assignments', `Auditor ${auditor}: claimed ${claimedTotal} matches actual ${actualCount}`,
      claimedTotal, actualCount);

    totalAssigned += claimedTotal;
    uniqueQuestions.forEach(q => allAssignedQuestions.add(q));
  }

  // Check total across all auditors
  const deployTotalMatch = deploymentText.match(/Total:\s*(\d+)\s*questions/);
  if (deployTotalMatch) {
    check('Auditor Assignments', 'sum of per-auditor totals matches deployment total claim',
      parseInt(deployTotalMatch[1]), totalAssigned);
  }

  // Check MANIFEST.md auditor table matches
  const manifestMD = readFile(path.join(VA_DIR, 'MANIFEST.md'));
  if (manifestMD) {
    // MANIFEST format: | **PA Auditor A** | Opus | Role | Screenshots + PA-01, PA-03, ... (9 questions) | Audit findings |
    const manifestAuditorRegex = /\*\*PA Auditor ([A-I])\*\*[^(]*\((\d+)\s*questions?\)/g;
    let mMatch;
    while ((mMatch = manifestAuditorRegex.exec(manifestMD)) !== null) {
      const auditor = mMatch[1];
      const manifestCount = parseInt(mMatch[2]);

      // Find matching deployment count from the deployment table parsed above
      const deployRegex = new RegExp(`\\*\\*${auditor}\\*\\*[^|]*\\|[^|]*\\|[^|]*\\|[^|]*\\|[^|]*\\|\\s*(\\d+)\\s*\\|`);
      const deployMatch = deploymentText.match(deployRegex);
      if (deployMatch) {
        check('Auditor Assignments',
          `Auditor ${auditor}: MANIFEST.md (${manifestCount}) matches pa-deployment.md (${deployMatch[1]})`,
          parseInt(deployMatch[1]), manifestCount);
      }
    }
  }
}

// ============================================================================
// CHECK 6: LINE COUNT CLAIMS (Appendix D)
// ============================================================================

function checkLineCounts() {
  section('Line Count Claims (Appendix D vs Actual)');

  // Map of file -> { path, claimedLines, tolerance }
  // Tolerance: 0.10 = 10% for "~NNN" claims, 0 for exact claims
  const fileChecks = [
    { name: 'gate-runner-core.js', path: path.join(VA_DIR, 'gate-runner-core.js'), claimed: 2929, tolerance: 0.10 },
    { name: 'gate-runner-spec.md', path: path.join(VA_DIR, 'gate-runner-spec.md'), claimed: 300, tolerance: 0.10 },
    { name: 'gate-runner-preconditions.md', path: path.join(VA_DIR, 'gate-runner-preconditions.md'), claimed: 83, tolerance: 0.02 },
    { name: 'gate-runner-provenance.md', path: path.join(VA_DIR, 'gate-runner-provenance.md'), claimed: 151, tolerance: 0.02 },
    { name: 'gate-manifest.json', path: path.join(VA_DIR, 'gate-manifest.json'), claimed: 362, tolerance: 0.10 },
    { name: 'pa-questions.md', path: path.join(VA_DIR, 'pa-questions.md'), claimed: 431, tolerance: 0.10 },
    { name: 'pa-deployment.md', path: path.join(VA_DIR, 'pa-deployment.md'), claimed: 442, tolerance: 0.10 },
    { name: 'pa-weaver.md', path: path.join(VA_DIR, 'pa-weaver.md'), claimed: 466, tolerance: 0.10 },
    { name: 'pa-guardrails.md', path: path.join(VA_DIR, 'pa-guardrails.md'), claimed: 113, tolerance: 0.10 },
    { name: 'pa-guardrails-weaver.md', path: path.join(VA_DIR, 'pa-guardrails-weaver.md'), claimed: 59, tolerance: 0.10 },
    { name: 'artifact-orchestrator.md', path: path.join(VA_DIR, 'artifact-orchestrator.md'), claimed: 744, tolerance: 0.10 },
    { name: 'artifact-tc-brief-template.md', path: path.join(VA_DIR, 'artifact-tc-brief-template.md'), claimed: 235, tolerance: 0.10 },
    { name: 'tokens.css', path: path.join(DESIGN_SYSTEM, 'compositional-core', 'vocabulary', 'tokens.css'), claimed: 183, tolerance: 0.02 },
    { name: 'components.css', path: path.join(DESIGN_SYSTEM, 'compositional-core', 'components', 'components.css'), claimed: 944, tolerance: 0.10 },
    { name: 'EXECUTION-TRACKER-TEMPLATE.md', path: path.join(VA_DIR, 'EXECUTION-TRACKER-TEMPLATE.md'), claimed: 200, tolerance: 0.10 },
    { name: 'artifact-identity-perception.md', path: path.join(VA_DIR, 'artifact-identity-perception.md'), claimed: 556, tolerance: 0.02 },
    { name: 'artifact-builder-recipe.md', path: path.join(VA_DIR, 'artifact-builder-recipe.md'), claimed: 828, tolerance: 0.10 },
    { name: 'artifact-routing.md', path: path.join(VA_DIR, 'artifact-routing.md'), claimed: 1056, tolerance: 0.10 },
    { name: 'artifact-worked-examples.md', path: path.join(VA_DIR, 'artifact-worked-examples.md'), claimed: 182, tolerance: 0.10 },
    { name: 'artifact-value-tables.md', path: path.join(VA_DIR, 'artifact-value-tables.md'), claimed: 262, tolerance: 0.10 },
    { name: 'council-verdict.md', path: path.join(VA_DIR, 'council-verdict.md'), claimed: 575, tolerance: 0.02 },
    { name: 'experiment-protocol.md', path: path.join(VA_DIR, 'experiment-protocol.md'), claimed: 51, tolerance: 0.10 },
    { name: 'pa-manifest.md', path: path.join(VA_DIR, 'pa-manifest.md'), claimed: 89, tolerance: 0.02 },
  ];

  for (const fc of fileChecks) {
    const actual = lineCount(fc.path);
    if (actual === -1) {
      console.log(`  SKIP  ${fc.name} — file not found`);
      continue;
    }
    const tolLabel = fc.tolerance > 0 ? ` (${fc.tolerance * 100}% tolerance)` : ' (exact)';
    check('Line Counts', `${fc.name}: claimed ~${fc.claimed}, actual ${actual}${tolLabel}`,
      fc.claimed, actual, fc.tolerance);
  }

  // Also check SKILL.md line count claims
  const buildSkill = readFile(path.join(SKILLS_DIR, 'build-page', 'SKILL.md'));
  if (buildSkill) {
    // Check specific claims like "~2,273 lines"
    const claimRegex = /`([^`]+)`\s*\|\s*~?([\d,]+)\s*lines/g;
    let match;
    while ((match = claimRegex.exec(buildSkill)) !== null) {
      const fileName = match[1].split('/').pop();
      const claimed = parseInt(match[2].replace(/,/g, ''));
      // Find actual file
      const actualFile = fileChecks.find(fc => fc.name === fileName);
      if (actualFile) {
        const actual = lineCount(actualFile.path);
        if (actual !== -1) {
          check('Line Counts', `SKILL.md claim for ${fileName}: ~${claimed} vs actual ${actual}`,
            claimed, actual, 0.10);
        }
      }
    }
  }
}

// ============================================================================
// CHECK 7: BV GATE RANGE CONSISTENCY
// ============================================================================

function checkBVGateRange() {
  section('BV Gate Range Consistency');

  const manifestJSON = readFile(path.join(VA_DIR, 'gate-manifest.json'));
  const manifest = JSON.parse(manifestJSON);
  const bvGates = manifest.tiers.briefVerification.gates;
  const bvCount = manifest.tiers.briefVerification.count;

  // Expected: BV-01 through BV-07
  check('BV Range', 'BV gates start at BV-01', 'BV-01', bvGates[0]);
  check('BV Range', `BV gates end at BV-0${bvCount}`, `BV-0${bvCount}`, bvGates[bvCount - 1]);

  // Check MANIFEST.md references
  const manifestMD = readFile(path.join(VA_DIR, 'MANIFEST.md'));
  if (manifestMD) {
    // "BV-01 through BV-05" in quickstart
    const bvRangeMatch = manifestMD.match(/BV-01\s*through\s*BV-0(\d)/);
    if (bvRangeMatch) {
      // This should match 5 (the pre-build gates), not all 7
      console.log(`  INFO  MANIFEST.md quickstart references BV-01 through BV-0${bvRangeMatch[1]} (Phase 1 pre-build subset)`);
    }

    // Check "BV gates: ___/7 PASS" in tracker template
    const trackerText = readFile(path.join(VA_DIR, 'EXECUTION-TRACKER-TEMPLATE.md'));
    if (trackerText) {
      const bvSlashMatch = trackerText.match(/BV gates:\s*___\/(\d+)/);
      if (bvSlashMatch) {
        check('BV Range', 'Tracker template BV total matches manifest',
          bvCount, parseInt(bvSlashMatch[1]));
      }
    }
  }

  // Check spec.md "BV-01 through BV-07" reference
  const specMD = readFile(path.join(VA_DIR, 'gate-runner-spec.md'));
  if (specMD) {
    const specBVMatch = specMD.match(/BV-01\s*through\s*BV-0(\d)/);
    if (specBVMatch) {
      check('BV Range', 'spec.md BV range endpoint matches manifest',
        bvCount, parseInt(specBVMatch[1]));
    }
  }
}

// ============================================================================
// CHECK 8: TIER BREAKDOWN CONSISTENCY ACROSS FILES
// ============================================================================

function checkTierBreakdownConsistency() {
  section('Tier Breakdown Consistency Across Files');

  const manifestJSON = readFile(path.join(VA_DIR, 'gate-manifest.json'));
  const manifest = JSON.parse(manifestJSON);

  const canonical = {
    REQUIRED: manifest.tiers.required.count,
    RECOMMENDED: manifest.tiers.recommended.count,
    ADVISORY: manifest.tiers.advisory.count,
    DIAGNOSTIC: manifest.tiers.diagnosticOnly.count,
    BRIEF: manifest.tiers.briefVerification.count,
    TOTAL: manifest.totalGateCount.grandTotal,
  };

  // Files to check for tier breakdown references
  const filesToCheck = [
    { name: 'gate-runner-core.js', path: path.join(VA_DIR, 'gate-runner-core.js') },
    { name: 'gate-runner-spec.md', path: path.join(VA_DIR, 'gate-runner-spec.md') },
    { name: 'MANIFEST.md', path: path.join(VA_DIR, 'MANIFEST.md') },
    { name: 'SKILL.md (build-page)', path: path.join(SKILLS_DIR, 'build-page', 'SKILL.md') },
  ];

  for (const file of filesToCheck) {
    const text = readFile(file.path);
    if (!text) {
      console.log(`  SKIP  ${file.name} not found`);
      continue;
    }

    // Look for tier summary patterns like "21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY"
    // This pattern specifically targets tier breakdown summaries, not incidental references
    // like "19 REQUIRED gates have results" (GR-48 coverage) or "5/9 RECOMMENDED"
    const breakdownPattern = /(\d+)\s*REQUIRED\s*\+\s*(\d+)\s*RECOMMENDED\s*\+\s*(\d+)\s*ADVISORY/g;
    let bdMatch;
    while ((bdMatch = breakdownPattern.exec(text)) !== null) {
      check('Tier Breakdown', `${file.name}: REQUIRED in breakdown matches canonical`,
        canonical.REQUIRED, parseInt(bdMatch[1]));
      check('Tier Breakdown', `${file.name}: RECOMMENDED in breakdown matches canonical`,
        canonical.RECOMMENDED, parseInt(bdMatch[2]));
      check('Tier Breakdown', `${file.name}: ADVISORY in breakdown matches canonical`,
        canonical.ADVISORY, parseInt(bdMatch[3]));
    }
  }
}

// ============================================================================
// CHECK 9: AGENT COUNT CONSISTENCY
// ============================================================================

function checkAgentCounts() {
  section('Agent Count Consistency');

  // MANIFEST.md claims "Total: 15 agents"
  const manifestMD = readFile(path.join(VA_DIR, 'MANIFEST.md'));
  if (manifestMD) {
    const agentCountMatch = manifestMD.match(/Total:\s*(\d+)\s*agents/);
    if (agentCountMatch) {
      const claimed = parseInt(agentCountMatch[1]);
      // Count: 1 orchestrator + 1 observer + 1 content analyst + 1 brief assembler +
      //        1 Pass A builder + 1 Pass B builder + 9 PA auditors + 1 integrative auditor + 1 weaver = 17
      check('Agent Counts', 'MANIFEST.md total agent count is 17', 17, claimed);
    }

    // Check "9 PA Auditors" or "9 auditors" references
    const paAuditorCountMatch = manifestMD.match(/(\d+)\s*PA Auditors/);
    if (paAuditorCountMatch) {
      check('Agent Counts', 'MANIFEST.md PA auditor count is 9', 9, parseInt(paAuditorCountMatch[1]));
    }
  }

  // Check deployment
  const deploymentText = readFile(path.join(VA_DIR, 'pa-deployment.md'));
  if (deploymentText) {
    const modeMatch = deploymentText.match(/Mode 4 deploys (\d+) agents total/);
    if (modeMatch) {
      // 9 PA + 1 Integrative + 1 Weaver = 11
      check('Agent Counts', 'pa-deployment.md Mode 4 agent count is 11', 11, parseInt(modeMatch[1]));
    }
  }
}

// ============================================================================
// CHECK 10: CROSS-FILE REFERENCE INTEGRITY
// ============================================================================

function checkCrossFileReferences() {
  section('Cross-File Reference Integrity');

  // Check that all files referenced in Appendix D actually exist
  const filePaths = [
    path.join(VA_DIR, 'gate-runner-core.js'),
    path.join(VA_DIR, 'gate-runner-spec.md'),
    path.join(VA_DIR, 'gate-runner-preconditions.md'),
    path.join(VA_DIR, 'gate-runner-provenance.md'),
    path.join(VA_DIR, 'gate-manifest.json'),
    path.join(VA_DIR, 'MANIFEST.md'),
    path.join(VA_DIR, 'artifact-orchestrator.md'),
    path.join(VA_DIR, 'artifact-identity-perception.md'),
    path.join(VA_DIR, 'artifact-builder-recipe.md'),
    path.join(VA_DIR, 'artifact-routing.md'),
    path.join(VA_DIR, 'artifact-tc-brief-template.md'),
    path.join(VA_DIR, 'artifact-worked-examples.md'),
    path.join(VA_DIR, 'artifact-value-tables.md'),
    path.join(VA_DIR, 'pa-questions.md'),
    path.join(VA_DIR, 'pa-deployment.md'),
    path.join(VA_DIR, 'pa-weaver.md'),
    path.join(VA_DIR, 'pa-guardrails.md'),
    path.join(VA_DIR, 'pa-guardrails-weaver.md'),
    path.join(VA_DIR, 'pa-manifest.md'),
    path.join(VA_DIR, 'council-verdict.md'),
    path.join(VA_DIR, 'EXECUTION-TRACKER-TEMPLATE.md'),
    path.join(VA_DIR, 'experiment-protocol.md'),
    path.join(VA_DIR, 'artifact-gate-runner.md'),
    path.join(VA_DIR, 'artifact-pa-protocol.md'),
    path.join(VA_DIR, 'artifact-builder-recipe-compose.md'),
    path.join(VA_DIR, 'artifact-builder-recipe-enrich.md'),
    path.join(VA_DIR, 'd10-observer-protocol.md'),
    path.join(DESIGN_SYSTEM, 'compositional-core', 'vocabulary', 'tokens.css'),
    path.join(DESIGN_SYSTEM, 'compositional-core', 'components', 'components.css'),
    path.join(DESIGN_SYSTEM, 'compositional-core', 'grammar', 'mechanism-catalog.md'),
  ];

  for (const fp of filePaths) {
    totalChecks++;
    const exists = fs.existsSync(fp);
    const name = path.relative(REPO_ROOT, fp);
    if (exists) {
      totalPass++;
      console.log(`  PASS  ${name} exists`);
    } else {
      totalFail++;
      console.log(`  FAIL  ${name} MISSING`);
      failures.push({ category: 'File Existence', name, expected: 'exists', actual: 'missing' });
    }
  }
}

// ============================================================================
// CHECK 11: REQUIRED_GATES ARRAY IN GR-48
// ============================================================================

function checkGR48Coverage() {
  section('GR-48 REQUIRED_GATES Coverage Array');

  const coreJS = readFile(path.join(VA_DIR, 'gate-runner-core.js'));
  if (!coreJS) return;

  // Find the REQUIRED_GATES array in the GR-48 function
  const reqGatesMatch = coreJS.match(/REQUIRED_GATES\s*=\s*\[([^\]]+)\]/);
  if (!reqGatesMatch) {
    console.log('  SKIP  REQUIRED_GATES array not found in core.js');
    return;
  }

  const reqGatesStr = reqGatesMatch[1];
  const reqGates = reqGatesStr.match(/'(GR-\d+\w*)'/g).map(s => s.replace(/'/g, ''));

  const manifestJSON = readFile(path.join(VA_DIR, 'gate-manifest.json'));
  const manifest = JSON.parse(manifestJSON);
  const manifestRequired = manifest.tiers.required.gates;

  // GR-48 itself is excluded from the coverage array (self-referential)
  const manifestRequiredMinusSelf = manifestRequired.filter(g => g !== 'GR-48');

  check('GR-48 Coverage', 'REQUIRED_GATES array length matches manifest required minus GR-48',
    manifestRequiredMinusSelf.length, reqGates.length);

  // Check every manifest required gate (except GR-48) is in the array
  for (const gate of manifestRequiredMinusSelf) {
    totalChecks++;
    if (reqGates.includes(gate)) {
      totalPass++;
      console.log(`  PASS  ${gate} in REQUIRED_GATES array`);
    } else {
      totalFail++;
      console.log(`  FAIL  ${gate} MISSING from REQUIRED_GATES array`);
      failures.push({ category: 'GR-48 Coverage', name: gate, expected: 'in array', actual: 'missing' });
    }
  }
}

// ============================================================================
// CHECK 12: VERDICT TERMINOLOGY CONSISTENCY
// ============================================================================

function checkVerdictTerminology() {
  section('Verdict Terminology Consistency (v5 migration)');

  // These are the operational files that should use NEW verdict terms only
  const operationalFiles = [
    { name: 'MANIFEST.md', path: path.join(VA_DIR, 'MANIFEST.md') },
    { name: 'artifact-orchestrator.md', path: path.join(VA_DIR, 'artifact-orchestrator.md') },
    { name: 'gate-manifest.json', path: path.join(VA_DIR, 'gate-manifest.json') },
    { name: 'gate-runner-spec.md', path: path.join(VA_DIR, 'gate-runner-spec.md') },
    { name: 'gate-runner-core.js', path: path.join(VA_DIR, 'gate-runner-core.js') },
    { name: 'pa-weaver.md', path: path.join(VA_DIR, 'pa-weaver.md') },
    { name: 'pa-manifest.md', path: path.join(VA_DIR, 'pa-manifest.md') },
    { name: 'pa-deployment.md', path: path.join(VA_DIR, 'pa-deployment.md') },
    { name: 'd10-observer-protocol.md', path: path.join(VA_DIR, 'd10-observer-protocol.md') },
    { name: 'EXECUTION-TRACKER-TEMPLATE.md', path: path.join(VA_DIR, 'EXECUTION-TRACKER-TEMPLATE.md') },
    { name: 'experiment-protocol.md', path: path.join(VA_DIR, 'experiment-protocol.md') },
    { name: 'artifact-builder-recipe-compose.md', path: path.join(VA_DIR, 'artifact-builder-recipe-compose.md') },
    { name: 'artifact-builder-recipe-enrich.md', path: path.join(VA_DIR, 'artifact-builder-recipe-enrich.md') },
  ];

  // Old terms that should NOT appear (as verdict labels)
  // We check for the exact verdict pattern, not English usage of "ship"
  const oldTermPatterns = [
    { pattern: /SHIP WITH FIXES/g, old: 'SHIP WITH FIXES', new: 'POLISH' },
    { pattern: /\bREBUILD\b/g, old: 'REBUILD', new: 'RETHINK' },
    { pattern: /\bREFINE\b/g, old: 'REFINE', new: 'IMPROVE' },
  ];

  // Known false positives to exclude
  const falsePositives = [
    'CRESCENDO + RELEASE', // Musical arc term in compose recipe
  ];

  for (const file of operationalFiles) {
    const text = readFile(file.path);
    if (!text) continue;

    for (const term of oldTermPatterns) {
      const matches = text.match(term.pattern);
      const count = matches ? matches.length : 0;

      // For REFINE, allow in provenance/historical sections (gate-runner-provenance.md is excluded from list)
      check('Verdict Terms', `${file.name}: zero instances of "${term.old}" (should be "${term.new}")`,
        0, count);
    }
  }

  // Also check the old file name doesn't exist
  totalChecks++;
  const oldFileName = path.join(VA_DIR, 'artifact-builder-recipe-polish.md');
  if (fs.existsSync(oldFileName)) {
    totalFail++;
    console.log('  FAIL  artifact-builder-recipe-polish.md still exists (should be renamed to -enrich.md)');
    failures.push({ category: 'Verdict Terms', name: 'old polish file removed', expected: 'not exists', actual: 'still exists' });
  } else {
    totalPass++;
    console.log('  PASS  artifact-builder-recipe-polish.md correctly renamed');
  }

  // Check no references to old filename
  for (const file of operationalFiles) {
    const text = readFile(file.path);
    if (!text) continue;

    if (text.includes('artifact-builder-recipe-polish.md')) {
      totalChecks++;
      totalFail++;
      console.log(`  FAIL  ${file.name}: still references "artifact-builder-recipe-polish.md"`);
      failures.push({ category: 'Verdict Terms', name: `${file.name} old filename ref`, expected: 'no references', actual: 'found' });
    }
  }

  // Verify new terms ARE present in key files
  const keyFiles = ['MANIFEST.md', 'artifact-orchestrator.md', 'pa-weaver.md'];
  const newTerms = ['RELEASE', 'POLISH', 'IMPROVE', 'RETHINK'];
  for (const fileName of keyFiles) {
    const text = readFile(path.join(VA_DIR, fileName));
    if (!text) continue;
    for (const term of newTerms) {
      totalChecks++;
      if (text.includes(term)) {
        totalPass++;
        console.log(`  PASS  ${fileName}: contains new term "${term}"`);
      } else {
        totalFail++;
        console.log(`  FAIL  ${fileName}: MISSING new term "${term}"`);
        failures.push({ category: 'Verdict Terms', name: `${fileName} has ${term}`, expected: 'present', actual: 'missing' });
      }
    }
  }
}

// ============================================================================
// MAIN
// ============================================================================

console.log('Pipeline v5 Reference Consistency Checker');
console.log(`Date: ${new Date().toISOString()}`);
console.log(`VA Dir: ${VA_DIR}`);
console.log(`Repo Root: ${REPO_ROOT}`);

checkGateCounts();
checkGateIds();
checkFunctionCount();
checkPAQuestions();
checkAuditorAssignments();
checkLineCounts();
checkBVGateRange();
checkTierBreakdownConsistency();
checkAgentCounts();
checkCrossFileReferences();
checkGR48Coverage();
checkVerdictTerminology();

// ============================================================================
// SUMMARY
// ============================================================================

console.log('\n' + '='.repeat(70));
console.log('SUMMARY');
console.log('='.repeat(70));
console.log(`Total checks: ${totalChecks}`);
console.log(`  PASS: ${totalPass}`);
console.log(`  FAIL: ${totalFail}`);
console.log(`  Rate: ${totalChecks > 0 ? ((totalPass / totalChecks) * 100).toFixed(1) : 0}%`);

if (failures.length > 0) {
  console.log('\nFAILURES:');
  for (const f of failures) {
    console.log(`  [${f.category}] ${f.name}: expected ${f.expected}, got ${f.actual}`);
  }
}

console.log(`\nExit code: ${totalFail > 0 ? 1 : 0}`);
process.exit(totalFail > 0 ? 1 : 0);
