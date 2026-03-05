# Phase B: PA, Weaver, and Screenshot Integration via Deterministic Orchestration

## What This Document Is

The complete specification for Phase B of the deterministic orchestrator -- the PA hardening phase that transforms a corpus-integrated artifact into a ship-ready page. Every `claude -p` invocation is mapped: system prompt, user prompt, tools, flags, expected output. Every mechanical step (screenshot capture, gate running, routing) is specified as deterministic code.

Phase B follows Phase A (56 corpus integration passes). By the time Phase B begins, the artifact has absorbed the full design corpus and needs perceptual validation and refinement.

---

## 1. Phase B Architecture

### 1.1 The PA Cycle

One PA cycle is the atomic unit of Phase B. Each cycle follows a fixed sequence:

```
PA CYCLE N:
  Step 1: SCREENSHOT CAPTURE     ─ Playwright (deterministic, no LLM)
  Step 2: GATE RUNNER             ─ Playwright JS (deterministic, no LLM)
  Step 3: GATE VERDICT            ─ Code logic (deterministic, no LLM)
  Step 4: 9 PA AUDITORS           ─ 9 parallel `claude -p` calls
  Step 5: 1 INTEGRATIVE AUDITOR   ─ 1 `claude -p` call (after Step 4 complete)
  Step 6: 1 WEAVER                ─ 1 `claude -p` call (after Steps 4+5 complete)
  Step 7: ROUTING DECISION        ─ Code logic (deterministic, no LLM)
  Step 8: REFINEMENT PASSES       ─ 1-6 `claude -p` calls (if IMPROVE/RETHINK)
```

### 1.2 How Many Cycles

```typescript
interface PAHardeningConfig {
  /** Minimum PA cycles before RELEASE is allowed */
  minCycles: 2;
  /** Maximum PA cycles before forced RELEASE or ABORT */
  maxCycles: 6;
  /** PA-05 score threshold for RELEASE eligibility */
  releaseThreshold: 3.5;
  /** PA-05 score threshold below which RETHINK is triggered */
  rethinkThreshold: 2.5;
  /** Maximum consecutive IMPROVE cycles showing no PA-05 improvement */
  maxStalledCycles: 2;
}
```

Termination conditions (evaluated after each cycle):
1. **RELEASE:** PA-05 >= 3.5 AND zero soul violations AND cycle >= minCycles AND (builder_ideas == 0 OR cycle >= 2)
2. **STALLED:** PA-05 did not improve for maxStalledCycles consecutive cycles -- force RELEASE or ABORT
3. **MAX REACHED:** cycle == maxCycles -- force RELEASE with current artifact
4. **ABORT:** PA-05 < 2.5 after cycle >= 3 -- fundamental composition failure

### 1.3 Data Structures

```typescript
/**
 * State for the PA hardening phase.
 * Persisted after every step within a cycle.
 */
interface PAHardeningState {
  /** Current cycle number (1-based) */
  currentCycle: number;
  /** Current step within the cycle (1-8) */
  currentStep: number;
  /** History of all completed cycles */
  cycleRecords: PACycleRecord[];
  /** Current artifact path */
  currentArtifactPath: string;
  /** Screenshot directory for current cycle */
  screenshotDir: string;
  /** Gate results for current cycle */
  gateResults: GateResult[] | null;
  /** Auditor reports for current cycle */
  auditorReports: AuditorReport[] | null;
  /** Integrative report for current cycle */
  integrativeReport: string | null;
  /** Weaver verdict for current cycle */
  weaverVerdict: WeaverVerdict | null;
}

interface PACycleRecord {
  cycleNumber: number;
  startedAt: string;
  completedAt: string;
  pa05Score: number;
  tier5Score: number;
  verdict: 'RELEASE' | 'POLISH' | 'IMPROVE' | 'RETHINK';
  decision: 'SHIP' | 'REFINE' | 'REBUILD' | 'ABORT';
  gateResultPath: string;
  screenshotDir: string;
  auditorReportPaths: string[];
  integrativeReportPath: string;
  weaverReportPath: string;
  refinementPassCount: number;
  cost: { inputTokens: number; outputTokens: number; estimatedCostUsd: number };
}

interface AuditorReport {
  auditorLetter: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I';
  outputPath: string;
  completionManifest: { questionId: string; answered: boolean; evidence: string }[];
}

interface WeaverVerdict {
  pa05Score: number;
  pa05SubCriteria: {
    designed: { primary: string; crossValidator: string; resolved: string };
    coherent: { primary: string; crossValidator: string; resolved: string };
    proportionate: { primary: string; crossValidator: string; resolved: string };
    polished: { primary: string; crossValidator: string; resolved: string };
  };
  tier5Score: number;
  tier5Results: { questionId: string; result: 'YES' | 'NO' | 'N/A' }[];
  combinedVerdict: string;
  top5Fixes: { rank: number; description: string; type: 'MECHANICAL' | 'STRUCTURAL' | 'COMPOSITIONAL' }[];
  fixTypeSummary: string;
  emotionalArc: {
    surprise: number;
    delight: number;
    authority: number;
    earnedClosure: number;
    arcShape: string;
  };
  shipDecision: 'RELEASE' | 'POLISH' | 'IMPROVE' | 'RETHINK';
  improvementVector: string;
}
```

---

## 2. Step 1: Screenshot Capture (Deterministic Playwright)

### 2.1 Overview

No LLM involved. The orchestrator drives Playwright to capture a deterministic set of screenshots. This step produces the visual evidence that all PA auditors will evaluate.

### 2.2 Implementation

```typescript
/**
 * Capture screenshots for a PA cycle.
 *
 * This function:
 * 1. Launches a DPR-1 browser context for each viewport
 * 2. Disables all animations
 * 3. Waits for fonts to load
 * 4. Captures cold-look + scroll-through at each viewport
 * 5. Validates screenshot quality (GR-62)
 *
 * @param htmlPath - Absolute path to the HTML artifact
 * @param outputDir - Directory to save screenshots
 * @param viewports - Viewport configurations
 * @returns Screenshot manifest with file paths and validation results
 */
async function captureScreenshots(
  htmlPath: string,
  outputDir: string,
  viewports: ViewportConfig[]
): Promise<ScreenshotManifest> {

  const manifest: ScreenshotManifest = { viewports: [], validated: false };

  for (const vp of viewports) {
    const vpDir = path.join(outputDir, `${vp.width}`);
    await fs.mkdir(vpDir, { recursive: true });

    // Launch DPR-1 context (prevents black screenshot issue on Retina Macs)
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,  // Force DPR 1 -- non-negotiable
    });
    const page = await context.newPage();

    // Serve HTML via local HTTP (Playwright blocks file://)
    const url = await serveHtml(htmlPath);
    await page.goto(url, { waitUntil: 'networkidle' });

    // Wait for fonts
    await page.evaluate(() => document.fonts.ready);

    // Disable animations
    await page.addStyleTag({ content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
      }
    `});

    // Small delay for style recalculation
    await page.waitForTimeout(200);

    // Cold look (viewport top, no scroll)
    const coldLookPath = path.join(vpDir, 'cold-look.png');
    await page.screenshot({ path: coldLookPath, fullPage: false });

    // Scroll-through at 80% viewport-height steps
    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const stepHeight = Math.floor(vp.height * 0.8);
    const scrollCount = Math.ceil(scrollHeight / stepHeight);
    const scrollPaths: string[] = [];

    for (let i = 0; i < scrollCount; i++) {
      const scrollY = i * stepHeight;
      await page.evaluate((y) => window.scrollTo(0, y), scrollY);
      await page.waitForTimeout(100); // settle
      const scrollPath = path.join(vpDir, `scroll-${String(i + 1).padStart(2, '0')}.png`);
      await page.screenshot({ path: scrollPath, fullPage: false });
      scrollPaths.push(scrollPath);
    }

    manifest.viewports.push({
      width: vp.width,
      height: vp.height,
      coldLookPath,
      scrollPaths,
      totalScreenshots: 1 + scrollPaths.length,
    });

    await context.close();
  }

  // Validate (GR-62 logic)
  manifest.validated = validateScreenshots(manifest);
  return manifest;
}
```

### 2.3 Viewport Configuration

```typescript
const PA_VIEWPORTS: ViewportConfig[] = [
  { width: 1440, height: 900 },   // Desktop (primary)
  { width: 1024, height: 768 },   // Tablet landscape
  { width: 768, height: 1024 },   // Tablet portrait
];

// Mini-PA uses only 1440px
const MINI_PA_VIEWPORTS: ViewportConfig[] = [
  { width: 1440, height: 900 },
];
```

### 2.4 Screenshot Validation (GR-62)

```typescript
function validateScreenshots(manifest: ScreenshotManifest): boolean {
  for (const vp of manifest.viewports) {
    // Check 1: No more than 2 consecutive blank screenshots
    let consecutiveBlanks = 0;
    let totalBlanks = 0;
    for (const scrollPath of vp.scrollPaths) {
      const stats = fs.statSync(scrollPath);
      const isBlank = stats.size < 5000; // <5KB = likely blank
      if (isBlank) {
        consecutiveBlanks++;
        totalBlanks++;
        if (consecutiveBlanks > 2) return false;
      } else {
        consecutiveBlanks = 0;
      }
    }

    // Check 2: Blank screenshots do not exceed 20% of total
    if (totalBlanks / vp.scrollPaths.length > 0.2) return false;
  }
  return true;
}
```

### 2.5 DPR Check (GR-61)

Run before any screenshot capture:

```typescript
async function checkDPR(page: Page): Promise<{ pass: boolean; dpr: number }> {
  const dpr = await page.evaluate(() => window.devicePixelRatio);
  return { pass: dpr === 1, dpr };
}
```

If the browser context was created with `deviceScaleFactor: 1`, this always passes. The check exists as a safety net.

---

## 3. Step 2: Gate Runner (Deterministic Playwright JS)

### 3.1 Overview

The gate runner is pure JavaScript executed against a Playwright page. No LLM. It runs 57 gates as defined in `gate-manifest.json` and produces a structured JSON result.

### 3.2 Execution

```typescript
/**
 * Run all gates against the current artifact.
 *
 * Execution order follows gate-manifest.json executionOrder:
 *   Step 1.8: BV-08 (brief-output diff, text-only)
 *   Step 1.9: GR-83 (INTENT comment count, text-only)
 *   Step 1.95: GR-84 (IMPROVEMENTS comment, text-only)
 *   Step 2: Core gates at 1440px (GR-01 through GR-63)
 *   Step 2.5: GR-61 (DPR check)
 *   Step 2.7: GR-62 (screenshot quality)
 *   Step 2.8: A-03 (visible content check)
 *   Step 3: Anti-pattern gates (GR-17 through GR-22)
 *   Step 4: Wave 2 gates (GR-45 through GR-67)
 *   Step 5: Responsive gates at 768px
 *   Step 6: Meta-verification (GR-48, GR-49)
 *
 * @returns Structured gate results with per-gate status, measured values, thresholds
 */
async function runGateRunner(
  page: Page,
  htmlPath: string,
  briefText: string | null,
  screenshotDir: string
): Promise<GateRunnerResult> {
  // Text-only gates (no Playwright needed)
  const htmlText = await fs.readFile(htmlPath, 'utf-8');
  const textGates = [
    ...(briefText ? [runBriefOutputDiff(briefText, htmlText)] : []),
    verifyIntentComments(htmlText),
    checkImprovementsComment(htmlText),
  ];

  // Playwright gates at 1440px (page should already be at this viewport)
  const coreGates = await runCoreGates(page);
  const antiPatternGates = await runAntiPatternGates(page);
  const wave2Gates = await runWave2Gates(page);

  // Screenshot quality gate
  const screenshotGate = checkScreenshotQuality(screenshotDir);

  // Responsive gates at 768px
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(300);
  const responsiveGates = await runCoreGates(page);
  // Reset to 1440
  await page.setViewportSize({ width: 1440, height: 900 });

  // Aggregate all results
  const allResults = [...textGates, ...coreGates, ...antiPatternGates,
                      ...wave2Gates, screenshotGate, ...responsiveGates];

  // Meta-verification (GR-48 coverage check)
  const metaResults = runMetaGates(allResults);
  allResults.push(...metaResults);

  return {
    results: allResults,
    timestamp: new Date().toISOString(),
    gateCount: allResults.length,
    passed: allResults.filter(r => r.status === 'PASS').length,
    failed: allResults.filter(r => r.status === 'FAIL').length,
    warnings: allResults.filter(r => r.status === 'WARNING').length,
  };
}
```

### 3.3 Gate Verdict (Step 3)

```typescript
/**
 * Compute the gate verdict from gate results.
 * This is pure code logic -- no LLM.
 *
 * Returns one of:
 *   BLOCK_SCREENSHOTS - GR-61 failed, cannot capture screenshots
 *   BLOCK_PA - GR-62 failed, cannot deploy auditors
 *   RETHINK - Identity gate failed or 3+ recommended failed
 *   IMPROVE - Perception gate failed
 *   PROCEED_TO_PA - All required pass, <3 recommended fail
 */
function computeGateVerdict(results: GateResult[]): GateVerdict {
  // Check blockers first
  const gr61 = results.find(r => r.gateId === 'GR-61');
  if (gr61 && gr61.status === 'FAIL') return 'BLOCK_SCREENSHOTS';

  const gr62 = results.find(r => r.gateId === 'GR-62');
  if (gr62 && gr62.status === 'FAIL') return 'BLOCK_PA';

  // Identity gates (RETHINK triggers)
  const identityGates = ['GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-08','GR-09','GR-10'];
  const identityFail = results.some(r => identityGates.includes(r.gateId) && r.status === 'FAIL');
  if (identityFail) return 'RETHINK';

  // Recommended gate accumulation
  const recommendedGates = results.filter(r =>
    ['GR-07','GR-17','GR-20','GR-43','GR-45','GR-49','GR-51','GR-52',
     'GR-55','GR-67','GR-78','GR-80','GR-82','GR-83','GR-84'].includes(r.gateId)
  );
  const recommendedFails = recommendedGates.filter(r => r.status === 'FAIL').length;
  if (recommendedFails >= 3) return 'RETHINK';

  // Perception gates (IMPROVE triggers)
  const perceptionGates = ['GR-11','GR-13','GR-14','GR-15','GR-18','GR-44','GR-60','GR-63','GR-64'];
  const perceptionFail = results.some(r => perceptionGates.includes(r.gateId) && r.status === 'FAIL');
  if (perceptionFail) return 'IMPROVE';

  // GR-48 (meta-verification)
  const gr48 = results.find(r => r.gateId === 'GR-48');
  if (gr48 && gr48.status === 'FAIL') return 'INCOMPLETE';

  return 'PROCEED_TO_PA';
}
```

**Gate verdict does NOT stop the PA from running.** Even if the gate verdict is IMPROVE, the PA still runs to provide full perceptual context for the refinement builder. Gate verdict only informs the final routing decision.

---

## 4. Step 4: 9 PA Auditors (Parallel `claude -p`)

### 4.1 Overview

9 parallel `claude -p` invocations. Each auditor is a fresh, context-starved LLM that receives ONLY:
1. A system prompt with their assigned questions
2. Screenshot file paths (referenced, not embedded -- the model reads them via the Read tool)
3. The PA guardrails file
4. The HTML artifact (for code inspection ONLY if screenshots are insufficient)

**Zero build context. Zero design system knowledge. Zero gate results.**

### 4.2 Auditor Prompt Template

Each auditor receives a prompt constructed from this template. The template is parameterized by auditor letter, assigned questions, and cross-validation assignment.

```typescript
/**
 * Construct the prompt for a PA auditor.
 *
 * @param auditor - Auditor configuration (letter, questions, cross-validation)
 * @param screenshotManifest - Paths to all screenshots
 * @param htmlPath - Path to the HTML artifact (for code inspection only)
 * @param guardrailsPath - Path to pa-guardrails.md
 * @param questionsPath - Path to pa-questions.md (Sections 1-3 + Appendices A-B ONLY)
 * @returns Complete prompt string for `claude -p`
 */
function constructAuditorPrompt(
  auditor: AuditorConfig,
  screenshotManifest: ScreenshotManifest,
  htmlPath: string,
  guardrailsPath: string,
  questionsPath: string,
): string {
  return `${AUDITOR_SYSTEM_PROMPT(auditor)}

---

${AUDITOR_SCREENSHOT_MANIFEST(screenshotManifest)}

---

${AUDITOR_QUESTIONS(auditor, questionsPath)}

---

${AUDITOR_GUARDRAILS(guardrailsPath)}

---

## FILES YOU CAN READ

- HTML artifact: ${htmlPath}
- Screenshots directory: ${screenshotManifest.viewports[0].coldLookPath.replace(/\/[^/]+$/, '')} (and sibling viewport directories)

Read the screenshot files using the Read tool. Start with the 1440px cold-look, then scroll-through in order. Then repeat for other viewports as needed by your assigned questions.

## YOUR OUTPUT

Write your complete audit report to: ${auditor.outputPath}

The report MUST follow this structure:
1. ## 0. Experiential Pass (BEFORE reading assigned questions)
2. ## Assigned Questions (one subsection per question)
3. ## PA-05 Cross-Validation (if you are a cross-validator)
4. ## Completion Manifest (final section, table format)
`;
}
```

### 4.3 Auditor System Prompt

```typescript
function AUDITOR_SYSTEM_PROMPT(auditor: AuditorConfig): string {
  return `# PA Auditor ${auditor.letter} — ${auditor.role}

You are Perceptual Auditor ${auditor.letter}, responsible for ${auditor.role}.

## YOUR MANDATE

You are a FRESH-EYES reviewer. You have NEVER seen this page before. You know NOTHING about:
- How it was built
- What design system it uses
- What gates it passed or failed
- What score anyone expects

You receive only screenshots and the page's HTML. Your job is to REACT to what you SEE.

## EXPERIENTIAL PASS (EXECUTE FIRST)

BEFORE reading your assigned questions, perform the experiential pass:

1. READ EVERY WORD from the screenshots as rendered pixels. Do NOT infer text from context.
   For each failure: CANNOT READ: [location] — [what you see in pixels] — [why it fails]

2. EXTRACT INFORMATION from every chart/diagram. Where your explanation becomes vague, that vagueness IS the finding.

3. FOLLOW THE STRUCTURE. Where does your eye get confused about what comes next?

4. RANK YOUR FINDINGS:
   - CANNOT READ / CANNOT EXTRACT = comprehension failure (highest priority)
   - Uncomfortable but legible = discomfort (middle)
   - Structure unclear = confusion (lower)

Report this in a section titled "## 0. Experiential Pass" BEFORE any assigned question answers.

## EVIDENCE FORMAT

Every answer MUST include:
- YES / NO / CONDITIONAL
- Screenshot reference (e.g., 1440/scroll-03.png)
- 1-sentence description of what you see

Answers without screenshot references are INCOMPLETE.

## ASSESSMENT LANGUAGE

Describe what you SEE using perceptual language:
- YES: "The background shifts from warm cream to cooler gray"
- NO: "background-color changes from #FEF9F5 to #F0EBE3"

Do NOT use CSS property names. Do NOT use judgment language. Describe evidence.

## VISUAL VERIFICATION, NOT CODE INTERPRETATION

If you cannot read text FROM THE SCREENSHOT ALONE — without inferring from structure, context, or what "makes sense" — then the text is illegible. Report it.
Say what you SEE, not what you KNOW it says.
${auditor.crossValidation ? `
## PA-05 CROSS-VALIDATION

You are the cross-validator for PA-05 sub-criterion: ${auditor.crossValidation.subCriterion}.
At the END of your report, add a section:

## PA-05 Cross-Validation — ${auditor.crossValidation.subCriterion}
Assessment: PASS / CONDITIONAL PASS / FAIL
Evidence: [1-2 sentences citing specific screenshots]

You do NOT see Auditor A's scores. This is a blind cross-validation.` : ''}`;
}
```

### 4.4 Auditor Configurations

```typescript
const AUDITOR_CONFIGS: AuditorConfig[] = [
  {
    letter: 'A',
    role: 'Impression + Emotion',
    questions: ['PA-01','PA-03','PA-04','PA-05','PA-45','PA-65','PA-67','PA-72','PA-76'],
    crossValidation: null, // A is the PRIMARY PA-05 evaluator
  },
  {
    letter: 'B',
    role: 'Readability + Typography',
    questions: ['PA-02','PA-08','PA-29','PA-55','PA-56','PA-70','PA-81','PA-77'],
    crossValidation: { subCriterion: 'POLISHED', description: 'Is execution quality high?' },
  },
  {
    letter: 'C',
    role: 'Spatial + Proportion',
    questions: ['PA-11','PA-30','PA-31','PA-32','PA-33','PA-50','PA-51','PA-53','PA-64','PA-66'],
    crossValidation: { subCriterion: 'PROPORTIONATE', description: 'Does the spatial balance feel considered?' },
  },
  {
    letter: 'D',
    role: 'Flow + Pacing',
    questions: ['PA-12','PA-13','PA-34','PA-35','PA-36','PA-52','PA-69','PA-71','PA-62','PA-74','PA-75'],
    crossValidation: null,
  },
  {
    letter: 'E',
    role: 'Grid + Layout',
    questions: ['PA-14','PA-15','PA-37','PA-38','PA-39','PA-80','PA-63'],
    crossValidation: null,
  },
  {
    letter: 'F',
    role: 'Consistency + Rhythm',
    questions: ['PA-16','PA-17','PA-41','PA-60','PA-61'],
    crossValidation: { subCriterion: 'DESIGNED', description: 'Does this feel like intentional composition?' },
  },
  {
    letter: 'G',
    role: 'Metaphor + Ideology',
    questions: ['PA-18','PA-19','PA-20','PA-42','PA-43','PA-44','PA-54','PA-68'],
    crossValidation: { subCriterion: 'COHERENT', description: 'Does this feel like one designer made it?' },
  },
  {
    letter: 'H',
    role: 'Responsiveness',
    questions: ['PA-22','PA-23','PA-46','PA-47','PA-73'],
    crossValidation: null,
  },
  {
    letter: 'I',
    role: 'Cross-Page + Adversarial',
    questions: ['PA-24','PA-25','PA-26','PA-27','PA-28','PA-48'],
    crossValidation: null,
  },
];
```

### 4.5 Auditor `claude -p` Invocation

```typescript
/**
 * Run a single PA auditor as a `claude -p` process.
 *
 * Key flags:
 *   --model claude-opus-4-6     (Opus required for all PA auditors)
 *   --output-format text        (auditor writes report to file via Write tool)
 *   --max-turns 30              (auditor needs multiple tool calls for screenshots)
 *   --allowedTools Read,Write,Glob  (read screenshots, write report, find files)
 *
 * The prompt is piped via stdin. No --system-prompt flag -- system context
 * is embedded in the prompt itself.
 */
async function runPAAuditor(
  auditor: AuditorConfig,
  screenshotManifest: ScreenshotManifest,
  htmlPath: string,
  outputDir: string,
  config: PipelineConfig
): Promise<AuditorReport> {
  const outputPath = path.join(outputDir, `pa-auditor-${auditor.letter}.md`);
  const auditorConfig = { ...auditor, outputPath };

  const prompt = constructAuditorPrompt(
    auditorConfig,
    screenshotManifest,
    htmlPath,
    config.paGuardrailsPath,
    config.paQuestionsPath,
  );

  const { exitCode, stdout, stderr } = await execClaude({
    prompt,
    model: 'claude-opus-4-6',
    maxTurns: 30,
    allowedTools: ['Read', 'Write', 'Glob'],
    timeout: config.passTimeoutMs,
  });

  // Validate output
  if (exitCode !== 0) {
    throw new AuditorError(`Auditor ${auditor.letter} failed with exit code ${exitCode}`, stderr);
  }

  // Verify the report file was written
  if (!await fileExists(outputPath)) {
    throw new AuditorError(`Auditor ${auditor.letter} did not write report to ${outputPath}`);
  }

  // Parse completion manifest from report
  const reportText = await fs.readFile(outputPath, 'utf-8');
  const completionManifest = parseCompletionManifest(reportText, auditor.questions);

  return {
    auditorLetter: auditor.letter,
    outputPath,
    completionManifest,
  };
}
```

### 4.6 Parallel Execution of All 9 Auditors

```typescript
/**
 * Run all 9 PA auditors in parallel.
 *
 * All 9 are independent -- no dependencies between them.
 * They read the same screenshots but produce independent reports.
 *
 * Failure handling:
 *   - If 1 auditor fails, retry once. If still fails, proceed with 8/9.
 *   - If 2+ auditors fail, halt and report.
 *   - Log each auditor's start/completion for timing analysis.
 */
async function runAllAuditors(
  screenshotManifest: ScreenshotManifest,
  htmlPath: string,
  outputDir: string,
  config: PipelineConfig
): Promise<AuditorReport[]> {
  log.info('Deploying 9 PA auditors in parallel...');

  const promises = AUDITOR_CONFIGS.map(auditor =>
    runPAAuditor(auditor, screenshotManifest, htmlPath, outputDir, config)
      .catch(async (err) => {
        log.warn(`Auditor ${auditor.letter} failed: ${err.message}. Retrying...`);
        return runPAAuditor(auditor, screenshotManifest, htmlPath, outputDir, config);
      })
  );

  const results = await Promise.allSettled(promises);
  const reports: AuditorReport[] = [];
  const failures: string[] = [];

  for (const result of results) {
    if (result.status === 'fulfilled') {
      reports.push(result.value);
    } else {
      failures.push(result.reason.message);
    }
  }

  if (failures.length >= 2) {
    throw new PipelineError(`${failures.length} auditors failed: ${failures.join('; ')}`);
  }

  if (failures.length === 1) {
    log.warn(`1 auditor failed. Proceeding with ${reports.length}/9 reports.`);
  }

  log.info(`${reports.length}/9 auditor reports collected.`);
  return reports;
}
```

### 4.7 Question Extraction for Auditor Prompts

The auditor prompt includes ONLY their assigned questions from `pa-questions.md`. Section 4 (Quality Framework) is NEVER included -- it is Weaver-only content that would contaminate fresh-eyes assessment.

```typescript
/**
 * Extract only the assigned questions from pa-questions.md.
 * Includes: Sections 1-3 + Appendices A-B (perception thresholds, quantitative guardrails)
 * Excludes: Section 4 (Quality Framework -- Weaver-only, would anchor PA-05 scoring)
 *
 * For each auditor, only their assigned question IDs are included.
 * Other auditors' questions are stripped to prevent cross-contamination.
 */
function extractAuditorQuestions(
  fullQuestionsText: string,
  assignedQuestionIds: string[]
): string {
  // Include full Section 1 (PA-05 definition) ONLY for Auditor A
  // Include only relevant question rows from Sections 2-3 for each auditor
  // Always include Appendices A-B (perception thresholds apply to all)
  // NEVER include Section 4 (Quality Framework)

  // Implementation: parse the markdown, filter tables by question ID,
  // reconstruct with only assigned questions visible.
  // ... (parsing logic omitted for brevity -- straightforward markdown filtering)
}
```

---

## 5. Step 5: Integrative Auditor (Sequential `claude -p`)

### 5.1 Overview

The Integrative Auditor runs AFTER all 9 PA auditors complete. It has NO assigned questions. Its job is gestalt impression -- what does the page FEEL like as a whole? It reads ALL screenshots but does NOT read the 9 auditor reports (those go only to the Weaver).

### 5.2 Spawn Dependency

```typescript
/**
 * Verify all 9 PA auditor reports exist before spawning the Integrative.
 * This is a STRUCTURAL dependency -- the Integrative does not read them,
 * but their existence proves the PA phase is complete.
 */
async function verifyAuditorsComplete(outputDir: string): Promise<boolean> {
  const expectedFiles = 'ABCDEFGHI'.split('').map(
    letter => path.join(outputDir, `pa-auditor-${letter}.md`)
  );
  for (const file of expectedFiles) {
    if (!await fileExists(file)) return false;
  }
  return true;
}
```

### 5.3 Integrative Auditor Prompt

```typescript
function constructIntegrativePrompt(
  screenshotManifest: ScreenshotManifest,
  htmlPath: string
): string {
  return `# INTEGRATIVE AUDITOR — Gestalt Impression

You are the Integrative Auditor. You have NO assigned questions. Your job is pure perception.

## YOUR MANDATE

Look at this page's screenshots and write a FREE-FORM gestalt impression. Do not structure your response around any question framework. Just describe:

1. What FEELS right about this page
2. What FEELS wrong about this page
3. Cross-cutting patterns -- things that no focused reviewer would catch because they are about the WHOLE, not individual parts
4. The EMOTIONAL ARC -- as you scroll from top to bottom, how does the emotional register change?
   Use these 4 registers (score each 1-10):
   - SURPRISE: Does the page do something unexpected?
   - DELIGHT: Are there small refinements that reward attention?
   - AUTHORITY: Does the page know what it is? Does every element express certainty?
   - EARNED CLOSURE: Does the ending feel earned by the journey?
5. Your single strongest impression in one sentence

## VISUAL VERIFICATION

Read screenshots as rendered pixels. Report what you SEE, not what you KNOW.

## FILES

- Screenshots: Read the screenshot files starting with 1440px cold-look, then scroll-through
- HTML artifact: ${htmlPath} (for code inspection only if needed)

## OUTPUT

Write your gestalt impression to the output file. No completion manifest required.
Free-form is the format. Length: as long as needed, no padding.

## WHAT YOU DO NOT SCORE

You do NOT score PA-05. You do NOT score Tier 5. Those are the Weaver's responsibility.
Your gestalt impression INFORMS the Weaver but does not constitute a score.
`;
}
```

### 5.4 Integrative `claude -p` Invocation

```typescript
async function runIntegrativeAuditor(
  screenshotManifest: ScreenshotManifest,
  htmlPath: string,
  outputDir: string,
  config: PipelineConfig
): Promise<string> {
  const outputPath = path.join(outputDir, 'pa-integrative.md');
  const prompt = constructIntegrativePrompt(screenshotManifest, htmlPath);

  const { exitCode } = await execClaude({
    prompt: prompt + `\n\nWrite your report to: ${outputPath}`,
    model: 'claude-opus-4-6',
    maxTurns: 20,
    allowedTools: ['Read', 'Write', 'Glob'],
    timeout: config.passTimeoutMs,
  });

  if (exitCode !== 0 || !await fileExists(outputPath)) {
    throw new AuditorError('Integrative auditor failed or did not write output');
  }

  return outputPath;
}
```

---

## 6. Step 6: Weaver (Sequential `claude -p`)

### 6.1 Overview

The Weaver reads ALL 10 reports (9 auditors + 1 integrative) and produces the verdict. It is the single most important `claude -p` call in Phase B -- it determines whether the artifact ships, improves, or is rebuilt.

### 6.2 Weaver Inputs

The Weaver receives:
1. All 9 PA auditor reports (full text)
2. The integrative auditor report (full text)
3. The pa-weaver.md file (verdict protocol, calibration scales, diagnostic vocabulary)
4. The pa-questions.md file (full file including Section 4 -- Weaver-only content)
5. Gate results JSON from Step 2
6. Screenshot file paths (for its own experiential anchor)
7. Previous cycle's weaver report (if cycle >= 2, for Finding Status Map)
8. The artifact mode (APPLIED or COMPOSED) from gate results

### 6.3 Weaver Prompt

```typescript
function constructWeaverPrompt(
  auditorReports: AuditorReport[],
  integrativeReportPath: string,
  screenshotManifest: ScreenshotManifest,
  htmlPath: string,
  gateResults: GateRunnerResult,
  weaverProtocolPath: string,
  questionsPath: string,
  cycleNumber: number,
  previousWeaverReport: string | null,
  mode: 'APPLIED' | 'COMPOSED'
): string {
  return `# WEAVER — PA Synthesis and Verdict

You are the Weaver. You read all PA auditor reports and produce the VERDICT.

## YOUR PROTOCOL

Read the weaver protocol file first: ${weaverProtocolPath}
Read the full PA questions file: ${questionsPath}

Follow the protocol EXACTLY. The order matters:
1. EXPERIENTIAL ANCHOR (Section 0) -- view screenshots yourself BEFORE reading any reports
2. MANIFEST VERIFICATION -- verify all 9 auditors answered all assigned questions
3. PA-05 SCORING -- primary (Auditor A) + cross-validation resolution
4. TIER 5 SCORING -- all 9 Tier 5 questions
5. COMBINED VERDICT -- from the PA-05 x Tier 5 matrix
6. TOP-5 FIXES -- classified as MECHANICAL / STRUCTURAL / COMPOSITIONAL
7. FIX-TYPE CLASSIFICATION SUMMARY -- aggregate counts with remediation paths
8. EMOTIONAL ARC SYNTHESIS -- 4-register framework, 1-10 per register
9. SHIP DECISION -- RELEASE / POLISH / IMPROVE / RETHINK
10. IMPROVEMENT VECTOR -- single most elevating creative change

## ARTIFACT MODE

This page is in **${mode}** mode.
${mode === 'APPLIED' ? `
APPLIED mode adjustments:
- PA-05a (DESIGNED) has practical ceiling of CONDITIONAL PASS
- Tier 5 questions PA-65, PA-66, PA-67, PA-68 scored N/A
- Tier 5 denominator = 5 (not 9)
- "No metaphor" and "uniform rhythm" are CORRECT outcomes, not defects
` : ''}

## PA AUDITOR REPORTS

Read these files to access the 9 PA auditor reports:
${auditorReports.map(r => `- Auditor ${r.auditorLetter}: ${r.outputPath}`).join('\n')}

## INTEGRATIVE AUDITOR REPORT

Read this file: ${integrativeReportPath}

## GATE RESULTS

\`\`\`json
${JSON.stringify(gateResults, null, 2)}
\`\`\`

## SCREENSHOTS

View these for your own experiential anchor (Section 0 of protocol):
- 1440px: ${screenshotManifest.viewports.find(v => v.width === 1440)?.coldLookPath}
  Scroll-through: ${screenshotManifest.viewports.find(v => v.width === 1440)?.scrollPaths.join(', ')}

## HTML ARTIFACT

${htmlPath}
${cycleNumber >= 2 && previousWeaverReport ? `
## PREVIOUS CYCLE WEAVER REPORT

Read this file for Finding Status Map context: ${previousWeaverReport}
Include a Finding Status Map in your output comparing this cycle's findings to the previous.
` : ''}

## YOUR OUTPUT

Write your complete verdict to the output file. The verdict is INCOMPLETE if any of these sections is missing:
1. Experiential Anchor
2. Manifest Verification
3. PA-05 Score (with sub-criteria and cross-validation)
4. Tier 5 Score
5. Combined Verdict
6. Top-5 Fixes (with type classification)
7. Fix-Type Classification Summary
8. Emotional Arc Synthesis
9. Ship Decision
10. Improvement Vector
${cycleNumber >= 2 ? '11. Finding Status Map' : ''}
`;
}
```

### 6.4 Weaver `claude -p` Invocation

```typescript
async function runWeaver(
  auditorReports: AuditorReport[],
  integrativeReportPath: string,
  screenshotManifest: ScreenshotManifest,
  htmlPath: string,
  gateResults: GateRunnerResult,
  outputDir: string,
  config: PipelineConfig,
  cycleNumber: number,
  previousWeaverReport: string | null,
  mode: 'APPLIED' | 'COMPOSED'
): Promise<WeaverVerdict> {
  const outputPath = path.join(outputDir, `weaver-verdict-cycle-${cycleNumber}.md`);

  const prompt = constructWeaverPrompt(
    auditorReports,
    integrativeReportPath,
    screenshotManifest,
    htmlPath,
    gateResults,
    config.paWeaverProtocolPath,
    config.paQuestionsPath,
    cycleNumber,
    previousWeaverReport,
    mode,
  ) + `\n\nWrite your verdict to: ${outputPath}`;

  const { exitCode } = await execClaude({
    prompt,
    model: 'claude-opus-4-6',
    maxTurns: 40,   // Weaver needs many tool calls to read all 10 reports + screenshots
    allowedTools: ['Read', 'Write', 'Glob'],
    timeout: config.passTimeoutMs * 2,  // Double timeout for weaver (reads 10 reports)
  });

  if (exitCode !== 0 || !await fileExists(outputPath)) {
    throw new WeaverError('Weaver failed or did not write verdict');
  }

  // Parse verdict from report
  const verdictText = await fs.readFile(outputPath, 'utf-8');
  const verdict = parseWeaverVerdict(verdictText);

  // Run post-weaver gates (GR-64, GR-81)
  const postWeaverGates = runPostWeaverGates(
    auditorReports.map(r => r.outputPath),
    outputPath
  );
  // GR-64 can downgrade RELEASE to IMPROVE
  if (postWeaverGates.gr64?.status === 'FAIL' && verdict.shipDecision === 'RELEASE') {
    verdict.shipDecision = 'IMPROVE';
    log.warn('GR-64 downgraded RELEASE to IMPROVE (usability priority override)');
  }

  return verdict;
}
```

### 6.5 Verdict Parsing

```typescript
/**
 * Parse structured data from the weaver's markdown verdict.
 * Uses regex patterns to extract PA-05 score, Tier 5 score,
 * ship decision, and fix classifications.
 *
 * If parsing fails, returns a partial verdict with what could be extracted
 * and flags the missing fields.
 */
function parseWeaverVerdict(verdictText: string): WeaverVerdict {
  // Extract PA-05 score (look for "PA-05:" or "PA-05 Score:" patterns)
  const pa05Match = verdictText.match(/PA-05[:\s]+(\d+(?:\.\d+)?)\s*\/\s*4/i);
  const pa05Score = pa05Match ? parseFloat(pa05Match[1]) : -1;

  // Extract Tier 5 score
  const tier5Match = verdictText.match(/Tier\s*5[:\s]+(\d+)\s*\/\s*(\d+)/i);
  const tier5Score = tier5Match ? parseInt(tier5Match[1]) : -1;

  // Extract ship decision
  const decisionMatch = verdictText.match(/Ship\s*Decision[:\s]+(RELEASE|POLISH|IMPROVE|RETHINK)/i);
  const shipDecision = decisionMatch
    ? decisionMatch[1].toUpperCase() as 'RELEASE' | 'POLISH' | 'IMPROVE' | 'RETHINK'
    : 'IMPROVE'; // Default to IMPROVE if unparseable

  // Extract fix type summary
  const fixTypes = {
    mechanical: (verdictText.match(/(\d+)\s*MECHANICAL/i) || [, '0'])[1],
    structural: (verdictText.match(/(\d+)\s*STRUCTURAL/i) || [, '0'])[1],
    compositional: (verdictText.match(/(\d+)\s*COMPOSITIONAL/i) || [, '0'])[1],
  };

  return {
    pa05Score,
    tier5Score,
    shipDecision,
    // ... additional fields parsed similarly
  } as WeaverVerdict;
}
```

---

## 7. Step 7: Routing Decision (Deterministic Code)

### 7.1 Overview

The routing decision combines the gate verdict (Step 3) and the weaver verdict (Step 6) into a single deterministic action. No LLM.

### 7.2 Routing Logic

```typescript
/**
 * Compute the routing decision from gate verdict + weaver verdict.
 *
 * Precedence (highest to lowest):
 *   1. BLOCK_SCREENSHOTS / BLOCK_PA -- from gate verdict (shouldn't reach here)
 *   2. RETHINK -- from either gate verdict or weaver verdict
 *   3. RELEASE -- from weaver, if cycle constraints are met
 *   4. POLISH -- from weaver, specific conditions
 *   5. IMPROVE -- default path
 *
 * @returns The action to take: SHIP, REFINE, REBUILD, or ABORT
 */
function computeRoutingDecision(
  gateVerdict: GateVerdict,
  weaverVerdict: WeaverVerdict,
  cycleNumber: number,
  cycleHistory: PACycleRecord[],
  config: PAHardeningConfig
): RoutingDecision {

  // Gate-level blocks (should not reach routing, but safety check)
  if (gateVerdict === 'BLOCK_SCREENSHOTS' || gateVerdict === 'BLOCK_PA') {
    return { action: 'ABORT', reason: `Gate blocker: ${gateVerdict}` };
  }

  // RETHINK from either source
  if (gateVerdict === 'RETHINK' || weaverVerdict.shipDecision === 'RETHINK') {
    if (cycleNumber >= config.maxCycles) {
      return { action: 'ABORT', reason: 'RETHINK at max cycle -- composition failure' };
    }
    return { action: 'REBUILD', reason: 'RETHINK triggered' };
  }

  // Check for stalled progress
  if (cycleHistory.length >= config.maxStalledCycles) {
    const recentScores = cycleHistory.slice(-config.maxStalledCycles).map(c => c.pa05Score);
    const improving = recentScores[recentScores.length - 1] > recentScores[0];
    if (!improving) {
      return {
        action: 'SHIP',
        reason: `PA-05 stalled at ${weaverVerdict.pa05Score} for ${config.maxStalledCycles} cycles -- shipping current artifact`
      };
    }
  }

  // RELEASE conditions
  if (weaverVerdict.shipDecision === 'RELEASE') {
    if (cycleNumber < config.minCycles) {
      // Force at least minCycles -- IMPROVE even if RELEASE criteria met
      return { action: 'REFINE', reason: `RELEASE criteria met but cycle ${cycleNumber} < min ${config.minCycles}` };
    }
    return { action: 'SHIP', reason: 'RELEASE -- all criteria met' };
  }

  // POLISH conditions
  if (weaverVerdict.shipDecision === 'POLISH') {
    return { action: 'REFINE', reason: 'POLISH -- mechanical fixes only', polishMode: true };
  }

  // Max cycles reached
  if (cycleNumber >= config.maxCycles) {
    return {
      action: 'SHIP',
      reason: `Max cycles (${config.maxCycles}) reached at PA-05 ${weaverVerdict.pa05Score} -- shipping`
    };
  }

  // Default: IMPROVE
  return { action: 'REFINE', reason: 'IMPROVE -- standard refinement path' };
}

interface RoutingDecision {
  action: 'SHIP' | 'REFINE' | 'REBUILD' | 'ABORT';
  reason: string;
  polishMode?: boolean;
}
```

---

## 8. Step 8: Refinement Passes (`claude -p`)

### 8.1 Overview

When routing decides REFINE or REBUILD, refinement passes run. The key principle: **the refinement builder gets the Weaver's conviction report, NOT a fix checklist.** Generative language, not diagnostic.

### 8.2 IMPROVE Builder

```typescript
/**
 * The IMPROVE builder is a DIFFERENT Opus agent from the original builder.
 * This defeats continuation bias -- the original builder would defend its choices.
 *
 * The IMPROVE builder receives:
 * 1. The Weaver's conviction report (artistic impressions, not gate scores)
 * 2. The HTML artifact
 * 3. The conviction brief from TC derivation
 * 4. Reference files (mechanism catalog, components, tokens)
 *
 * The IMPROVE builder does NOT receive:
 * - Gate results or scores
 * - Threshold numbers
 * - PA question IDs
 * - Fix checklists
 */
function constructImproveBuilderPrompt(
  htmlPath: string,
  weaverReportPath: string,
  convictionBriefPath: string,
  config: PipelineConfig,
  cycleNumber: number
): string {
  return `# REFINEMENT BUILDER — Compositional Deepening

You are a fresh Opus builder. You have never seen this page before.
You are here to DEEPEN the composition, not to repair defects.

## YOUR SOURCES

1. **The Weaver's Report** — Read this FIRST. It describes what the page feels like,
   where energy sags, what could be stronger. It speaks in artistic language.
   File: ${weaverReportPath}

2. **The Conviction Brief** — The original creative direction. This is the page's soul.
   File: ${convictionBriefPath}

3. **The Artifact** — The current HTML page.
   File: ${htmlPath}

4. **Reference Files** — Design vocabulary (not rules, vocabulary).
   - Mechanism Catalog: ${config.referenceFiles.mechanismCatalog}
   - Components CSS: ${config.referenceFiles.componentsCss}
   - Design Tokens: ${config.referenceFiles.tokensCss}

## YOUR MANDATE

Read the Weaver's artistic observations. Then read the conviction brief.
Then read the artifact. Let the Weaver's observations and the conviction
direct your eye to what can be deepened.

IMPROVE is compositional discovery, not defect repair.
- Deepen existing relationships
- Make the governing metaphor more perceptible
- Turn surface-level mechanisms into structural ones
- Each change should make the page more itself, not more different

## WHAT YOU DO NOT SEE

You do not see gate results, PA scores, thresholds, or fix checklists.
These are mechanical. Your work is artistic.

## CONSTRAINTS

- Container width MUST remain 940-960px (the non-negotiable)
- Do not add decorative elements
- Do not remove content
- Do not change the metaphor -- deepen it
- Output the COMPLETE updated HTML

## YOUR OUTPUT

Output the COMPLETE updated HTML artifact. Start with <!DOCTYPE html>,
end with </html>. Include ALL content. Do not truncate.

Include an HTML comment at the top:
<!-- RESIDUAL: Cycle ${cycleNumber} IMPROVE
  Changes: [list what you changed and why, in artistic language]
  Conviction alignment: [how your changes serve the conviction]
-->

Include an HTML comment at the bottom:
<!-- IMPROVEMENTS: Ideas for further deepening
  [HIGH] ...
  [MEDIUM] ...
  ...
-->
`;
}
```

### 8.3 RETHINK Builder

```typescript
/**
 * RETHINK is more aggressive than IMPROVE. A fresh builder in COMPOSING mode
 * reads the conviction artifact and the previous artifact as context,
 * but builds from a compositional stance, not a repair stance.
 */
function constructRethinkBuilderPrompt(
  htmlPath: string,
  weaverReportPath: string,
  convictionBriefPath: string,
  config: PipelineConfig
): string {
  return `# RETHINK BUILDER — Fresh Compositional Approach

You are a fresh Opus builder in COMPOSING mode. The previous attempt at this
page did not achieve its compositional potential. You are here to try a
different approach while honoring the same conviction.

## YOUR SOURCES

1. **The Weaver's Report** — Read this to understand what went wrong.
   File: ${weaverReportPath}

2. **The Conviction Brief** — The creative direction. This has not changed.
   File: ${convictionBriefPath}

3. **The Previous Artifact** — Read this to understand what was attempted.
   File: ${htmlPath}
   You may keep what works. You must reimagine what does not.

4. **Reference Files**
   - Mechanism Catalog: ${config.referenceFiles.mechanismCatalog}
   - Components CSS: ${config.referenceFiles.componentsCss}
   - Design Tokens: ${config.referenceFiles.tokensCss}

## YOUR MANDATE

You are in COMPOSING mode. This means:
- You choose the governing metaphor (or refine the existing one)
- You design the density arc
- You select mechanisms for fit, not coverage
- You compose, you do not assemble

## CONSTRAINTS

- Container width MUST remain 940-960px
- Soul constraints must be honored
- The content must be fully represented
- Output the COMPLETE HTML artifact

## YOUR OUTPUT

Output the COMPLETE updated HTML artifact. Start with <!DOCTYPE html>,
end with </html>. Include ALL content. Do not truncate.
`;
}
```

### 8.4 POLISH Builder

```typescript
/**
 * POLISH is the lightest refinement. Same builder (no fresh agent needed),
 * receives a short list of <= 3 MECHANICAL fixes from the Weaver.
 *
 * POLISH is distinct from IMPROVE:
 * - IMPROVE = compositional deepening (different agent, artistic language)
 * - POLISH = value changes (same agent, specific instructions)
 */
function constructPolishBuilderPrompt(
  htmlPath: string,
  weaverReportPath: string,
  fixes: string[]
): string {
  return `# POLISH — Mechanical Fixes Only

Apply these specific fixes to the HTML artifact. Do not change anything else.

## FIXES TO APPLY

${fixes.map((fix, i) => `${i + 1}. ${fix}`).join('\n')}

## ARTIFACT

File: ${htmlPath}

## YOUR OUTPUT

Output the COMPLETE updated HTML artifact with ONLY these fixes applied.
No other changes. Start with <!DOCTYPE html>, end with </html>.
`;
}
```

### 8.5 Refinement Execution

```typescript
/**
 * Execute refinement passes based on the routing decision.
 *
 * REFINE (IMPROVE): 1-6 passes. Each pass: build -> validate output.
 *   - Pass 1: IMPROVE builder reads Weaver report + conviction
 *   - Pass 2: Quick validation (HTML structure, container width)
 *   - Passes 3-6: Additional IMPROVE passes if needed (diminishing returns expected)
 *
 * REFINE (POLISH): 1 pass.
 *   - Apply <= 3 mechanical fixes
 *   - Validate fixes applied
 *
 * REBUILD (RETHINK): 1 pass.
 *   - Fresh builder in COMPOSING mode
 *   - Produces new artifact
 *   - Triggers new full PA cycle
 */
async function executeRefinement(
  decision: RoutingDecision,
  weaverVerdict: WeaverVerdict,
  htmlPath: string,
  config: PipelineConfig,
  state: PAHardeningState
): Promise<string> {
  const outputDir = path.join(config.outputDir, `cycle-${state.currentCycle}`, 'refinement');
  await fs.mkdir(outputDir, { recursive: true });

  if (decision.action === 'REBUILD') {
    return runRethinkBuilder(htmlPath, weaverVerdict, outputDir, config);
  }

  if (decision.polishMode) {
    return runPolishBuilder(htmlPath, weaverVerdict, outputDir, config);
  }

  // IMPROVE: run 1-4 refinement passes
  let currentArtifact = htmlPath;
  const maxRefinementPasses = 4;

  for (let pass = 1; pass <= maxRefinementPasses; pass++) {
    const weaverReportPath = path.join(
      config.outputDir,
      `cycle-${state.currentCycle}`,
      `weaver-verdict-cycle-${state.currentCycle}.md`
    );

    const prompt = constructImproveBuilderPrompt(
      currentArtifact,
      weaverReportPath,
      config.referenceFiles.convictionBrief,
      config,
      state.currentCycle
    );

    const refinedPath = path.join(outputDir, `improved-pass-${pass}.html`);

    const { exitCode, stdout } = await execClaude({
      prompt: prompt + `\n\nWrite the complete HTML to: ${refinedPath}`,
      model: 'claude-opus-4-6',
      maxTurns: 15,
      allowedTools: ['Read', 'Write'],
      timeout: config.passTimeoutMs,
    });

    if (exitCode !== 0 || !await fileExists(refinedPath)) {
      log.warn(`IMPROVE pass ${pass} failed. Stopping refinement.`);
      break;
    }

    // Quick validation: is the output valid HTML? Container width OK?
    const valid = await quickValidateArtifact(refinedPath);
    if (!valid.passed) {
      log.warn(`IMPROVE pass ${pass} produced invalid artifact: ${valid.reason}. Reverting.`);
      break;
    }

    // Backup and update
    await backupArtifact(currentArtifact, path.join(outputDir, `backup-pass-${pass}.html`));
    currentArtifact = refinedPath;

    // Check if builder reported no further improvements
    const htmlText = await fs.readFile(refinedPath, 'utf-8');
    const improvementsComment = htmlText.match(/<!-- IMPROVEMENTS:[\s\S]*?-->/);
    if (!improvementsComment || !improvementsComment[0].includes('[HIGH]')) {
      log.info(`IMPROVE pass ${pass}: No HIGH improvements remaining. Stopping refinement.`);
      break;
    }
  }

  return currentArtifact;
}
```

---

## 9. Mini-PA (Mode 2.5) for IMPROVE Validation

### 9.1 When to Use

Mini-PA runs between IMPROVE passes when PA-05 >= 3.0 to quickly validate that improvements are not causing regressions. It uses 3 auditors instead of 9 and 1 viewport instead of 3.

### 9.2 Mini-PA Sequence

```
MINI-PA:
  Step 1: Screenshots at 1440px only
  Step 2: 3 PA Auditors (A, C, G) in parallel
  Step 3: Mini-Weaver (reads 3 reports, no integrative)
  Step 4: Quick routing (CONTINUE / ESCALATE)
```

### 9.3 Mini-PA Auditor Selection

```typescript
const MINI_PA_AUDITORS: AuditorConfig[] = [
  AUDITOR_CONFIGS.find(a => a.letter === 'A')!, // PA-05 owner
  AUDITOR_CONFIGS.find(a => a.letter === 'C')!, // Spatial + Proportion
  AUDITOR_CONFIGS.find(a => a.letter === 'G')!, // Metaphor + Ideology
];
```

Mini-PA question sets are reduced per `pa-deployment.md` Section 6.2:
- A: PA-01, PA-02, PA-03, PA-05, PA-45, PA-65 (6 questions, or 5 in APPLIED)
- C: PA-11, PA-30, PA-31, PA-50, PA-66 (5 questions, or 4 in APPLIED)
- G: PA-18, PA-19, PA-42, PA-54, PA-68 (5 questions, or 4 in APPLIED)

### 9.4 Escalation Triggers

If ANY of these fire, abort Mini-PA and run full Mode 4:
1. PA-05 decreased vs previous cycle
2. Any auditor flags a NEW BLOCKING issue
3. Target is FLAGSHIP (PA-05 >= 3.5 required)
4. Mini-PA PA-05 >= 3.5 (FLAGSHIP must be Mode 4 confirmed)

---

## 10. Complete PA Cycle Execution

### 10.1 Main Loop

```typescript
/**
 * The main PA hardening loop.
 * Runs PA cycles until a termination condition is met.
 */
async function runPAHardening(
  config: PipelineConfig,
  state: PipelineState
): Promise<PipelineState> {
  const paConfig: PAHardeningConfig = {
    minCycles: 2,
    maxCycles: 6,
    releaseThreshold: 3.5,
    rethinkThreshold: 2.5,
    maxStalledCycles: 2,
  };

  const paState: PAHardeningState = {
    currentCycle: 0,
    currentStep: 0,
    cycleRecords: [],
    currentArtifactPath: state.currentArtifactPath,
    screenshotDir: '',
    gateResults: null,
    auditorReports: null,
    integrativeReport: null,
    weaverVerdict: null,
  };

  while (paState.currentCycle < paConfig.maxCycles) {
    paState.currentCycle++;
    const cycleDir = path.join(config.outputDir, `cycle-${paState.currentCycle}`);
    await fs.mkdir(cycleDir, { recursive: true });

    log.info(`\n${'='.repeat(60)}`);
    log.info(`PA CYCLE ${paState.currentCycle} / ${paConfig.maxCycles}`);
    log.info(`${'='.repeat(60)}\n`);

    // ─── Step 1: Screenshot Capture ───
    log.info('Step 1: Capturing screenshots...');
    paState.screenshotDir = path.join(cycleDir, 'screenshots');
    const screenshotManifest = await captureScreenshots(
      paState.currentArtifactPath,
      paState.screenshotDir,
      PA_VIEWPORTS
    );

    if (!screenshotManifest.validated) {
      log.error('Screenshot validation failed (GR-62). Re-capturing...');
      // One retry with extended wait
      const retryManifest = await captureScreenshots(
        paState.currentArtifactPath,
        paState.screenshotDir + '-retry',
        PA_VIEWPORTS
      );
      if (!retryManifest.validated) {
        throw new PipelineError('Screenshot capture failed after retry');
      }
      paState.screenshotDir += '-retry';
    }

    // ─── Step 2: Gate Runner ───
    log.info('Step 2: Running gates...');
    const page = await launchPage(paState.currentArtifactPath, { width: 1440, height: 900 });
    paState.gateResults = await runGateRunner(
      page,
      paState.currentArtifactPath,
      null, // brief text not needed for PA cycles
      paState.screenshotDir
    );
    await page.close();

    // Save gate results
    const gateResultPath = path.join(cycleDir, 'gate-results.json');
    await fs.writeFile(gateResultPath, JSON.stringify(paState.gateResults, null, 2));

    // ─── Step 3: Gate Verdict ───
    log.info('Step 3: Computing gate verdict...');
    const gateVerdict = computeGateVerdict(paState.gateResults.results);
    log.info(`Gate verdict: ${gateVerdict}`);

    if (gateVerdict === 'BLOCK_SCREENSHOTS' || gateVerdict === 'BLOCK_PA') {
      throw new PipelineError(`Gate blocker in cycle ${paState.currentCycle}: ${gateVerdict}`);
    }

    // ─── Step 4: 9 PA Auditors ───
    log.info('Step 4: Deploying 9 PA auditors in parallel...');
    const auditorDir = path.join(cycleDir, 'auditors');
    await fs.mkdir(auditorDir, { recursive: true });
    paState.auditorReports = await runAllAuditors(
      screenshotManifest,
      paState.currentArtifactPath,
      auditorDir,
      config
    );

    // ─── Step 5: Integrative Auditor ───
    log.info('Step 5: Running integrative auditor...');
    const integrativeComplete = await verifyAuditorsComplete(auditorDir);
    if (!integrativeComplete) {
      throw new PipelineError('Not all 9 auditor reports exist -- cannot spawn integrative');
    }
    paState.integrativeReport = await runIntegrativeAuditor(
      screenshotManifest,
      paState.currentArtifactPath,
      auditorDir,
      config
    );

    // ─── Step 6: Weaver ───
    log.info('Step 6: Running weaver...');
    const previousWeaver = paState.currentCycle >= 2
      ? path.join(config.outputDir, `cycle-${paState.currentCycle - 1}`, `weaver-verdict-cycle-${paState.currentCycle - 1}.md`)
      : null;

    // Detect mode from gate results
    const modeGate = paState.gateResults.results.find(r => r.gateId === 'GR-33' || r.gateId === 'GR-34');
    const mode: 'APPLIED' | 'COMPOSED' = modeGate?.details?.mode || 'COMPOSED';

    paState.weaverVerdict = await runWeaver(
      paState.auditorReports,
      paState.integrativeReport,
      screenshotManifest,
      paState.currentArtifactPath,
      paState.gateResults,
      cycleDir,
      config,
      paState.currentCycle,
      previousWeaver,
      mode
    );

    log.info(`Weaver verdict: PA-05 ${paState.weaverVerdict.pa05Score}/4, Tier 5 ${paState.weaverVerdict.tier5Score}/9`);
    log.info(`Ship decision: ${paState.weaverVerdict.shipDecision}`);

    // ─── Step 7: Routing Decision ───
    log.info('Step 7: Computing routing decision...');
    const decision = computeRoutingDecision(
      gateVerdict,
      paState.weaverVerdict,
      paState.currentCycle,
      paState.cycleRecords,
      paConfig
    );

    log.info(`Routing decision: ${decision.action} — ${decision.reason}`);

    // Record this cycle
    paState.cycleRecords.push({
      cycleNumber: paState.currentCycle,
      startedAt: new Date().toISOString(), // approximate
      completedAt: new Date().toISOString(),
      pa05Score: paState.weaverVerdict.pa05Score,
      tier5Score: paState.weaverVerdict.tier5Score,
      verdict: paState.weaverVerdict.shipDecision,
      decision: decision.action,
      gateResultPath,
      screenshotDir: paState.screenshotDir,
      auditorReportPaths: paState.auditorReports.map(r => r.outputPath),
      integrativeReportPath: paState.integrativeReport,
      weaverReportPath: path.join(cycleDir, `weaver-verdict-cycle-${paState.currentCycle}.md`),
      refinementPassCount: 0,
      cost: { inputTokens: 0, outputTokens: 0, estimatedCostUsd: 0 }, // populated by cost tracking
    });

    // ─── Step 8: Act on Decision ───
    if (decision.action === 'SHIP') {
      log.info(`SHIPPING artifact at PA-05 ${paState.weaverVerdict.pa05Score}/4`);
      break;
    }

    if (decision.action === 'ABORT') {
      log.error(`ABORTING: ${decision.reason}`);
      break;
    }

    // REFINE or REBUILD
    log.info('Step 8: Executing refinement...');
    const refinedArtifact = await executeRefinement(
      decision,
      paState.weaverVerdict,
      paState.currentArtifactPath,
      config,
      paState
    );

    // Update artifact path for next cycle
    paState.currentArtifactPath = refinedArtifact;
    state.currentArtifactPath = refinedArtifact;

    // Persist state
    await saveState(config.outputDir, state);
  }

  // Final state update
  state.currentPhase = 'complete';
  return state;
}
```

---

## 11. `claude -p` Invocation Details

### 11.1 The `execClaude` Wrapper

```typescript
/**
 * Execute a claude -p invocation with full error handling.
 *
 * @param options - Invocation configuration
 * @returns Process result with exit code, stdout, stderr
 */
async function execClaude(options: {
  prompt: string;
  model: string;
  maxTurns: number;
  allowedTools: string[];
  timeout: number;
}): Promise<{ exitCode: number; stdout: string; stderr: string }> {
  // Write prompt to temp file (prompts can exceed shell arg limits)
  const promptFile = path.join(os.tmpdir(), `claude-prompt-${Date.now()}.md`);
  await fs.writeFile(promptFile, options.prompt);

  const args = [
    '-p',                               // Print/pipe mode
    '--model', options.model,           // Model selection
    '--max-turns', String(options.maxTurns),  // Turn limit
    '--output-format', 'text',          // Text output
    '--allowedTools', options.allowedTools.join(','),
  ];

  // Execute
  const child = spawn('claude', args, {
    stdio: ['pipe', 'pipe', 'pipe'],
    timeout: options.timeout,
  });

  // Pipe prompt to stdin
  const promptContent = await fs.readFile(promptFile, 'utf-8');
  child.stdin.write(promptContent);
  child.stdin.end();

  // Collect output
  let stdout = '';
  let stderr = '';
  child.stdout.on('data', (data) => { stdout += data.toString(); });
  child.stderr.on('data', (data) => { stderr += data.toString(); });

  const exitCode = await new Promise<number>((resolve) => {
    child.on('exit', (code) => resolve(code ?? 1));
  });

  // Cleanup
  await fs.unlink(promptFile).catch(() => {});

  return { exitCode, stdout, stderr };
}
```

### 11.2 Per-Agent `claude -p` Specifications

| Agent | Model | Max Turns | Tools | Timeout | Expected Output |
|-------|-------|-----------|-------|---------|-----------------|
| PA Auditor A-I | claude-opus-4-6 | 30 | Read, Write, Glob | 10 min | `.md` report file |
| Integrative Auditor | claude-opus-4-6 | 20 | Read, Write, Glob | 10 min | `.md` report file |
| Weaver | claude-opus-4-6 | 40 | Read, Write, Glob | 20 min | `.md` verdict file |
| IMPROVE Builder | claude-opus-4-6 | 15 | Read, Write | 10 min | `.html` artifact |
| RETHINK Builder | claude-opus-4-6 | 15 | Read, Write | 10 min | `.html` artifact |
| POLISH Builder | claude-opus-4-6 | 10 | Read, Write | 5 min | `.html` artifact |

### 11.3 Cost Estimation

Per PA cycle (worst case):
- 9 Auditors: ~9 x 50K input + 5K output = 450K input, 45K output
- 1 Integrative: ~50K input + 3K output
- 1 Weaver: ~200K input (reads all reports) + 10K output
- 1 IMPROVE Builder: ~80K input + 30K output
- **Total per cycle: ~780K input, ~88K output**
- **At Opus pricing ($15/M input, $75/M output): ~$18.40 per cycle**
- **6 cycles max: ~$110 for full PA hardening phase**

---

## 12. File Output Structure

```
{outputDir}/
  cycle-1/
    screenshots/
      1440/
        cold-look.png
        scroll-01.png ... scroll-NN.png
      1024/
        cold-look.png
        scroll-01.png ... scroll-NN.png
      768/
        cold-look.png
        scroll-01.png ... scroll-NN.png
    gate-results.json
    auditors/
      pa-auditor-A.md
      pa-auditor-B.md
      ... (9 files)
      pa-integrative.md
    weaver-verdict-cycle-1.md
    refinement/
      backup-pass-1.html
      improved-pass-1.html
      ... (if multiple passes)
  cycle-2/
    ... (same structure)
  cycle-N/
    ... (final cycle)
  _orchestrator/
    state.json          (resume state)
    cost-tracking.json  (cumulative cost)
    timing-log.jsonl    (per-step timing)
```

---

## 13. Error Handling and Recovery

### 13.1 Per-Step Recovery

| Step | Failure Mode | Recovery |
|------|-------------|----------|
| Screenshot Capture | Playwright crash | Retry once. If still fails, abort cycle. |
| Screenshot Capture | Blank screenshots (GR-62) | Re-capture with extended waits. If still fails, abort. |
| Gate Runner | Playwright timeout | Retry once. If still fails, log partial results, proceed to PA. |
| PA Auditor | 1 auditor fails | Retry once. If still fails, proceed with 8/9 reports. |
| PA Auditor | 2+ auditors fail | Abort cycle. Retry entire cycle. |
| Integrative | Fails to write report | Proceed without integrative (Weaver adjusts). |
| Weaver | Fails or unparseable | Retry once. If still fails, use gate verdict as fallback. |
| IMPROVE Builder | Produces invalid HTML | Revert to pre-refinement artifact. Proceed to next cycle with unchanged artifact. |
| RETHINK Builder | Produces invalid HTML | Retry once. If still fails, abort pipeline. |

### 13.2 Resume Protocol

The orchestrator persists state after every step. If the process crashes:

1. Read `state.json`
2. Verify config hash matches
3. Resume from `lastCompletedPass` / `currentStep` within the cycle
4. Re-run the failed step (do not skip)

### 13.3 Cycle-Level Safeguards

- **Monotonicity check:** If PA-05 decreases for 2 consecutive cycles, force SHIP with best artifact
- **Cost ceiling:** If cumulative cost exceeds $200, force SHIP regardless of PA-05
- **Time ceiling:** If total PA hardening time exceeds 4 hours, force SHIP

---

## 14. Information Isolation Matrix

This matrix ensures the correct information reaches each agent type. Violations of this matrix are protocol failures.

| Information | PA Auditors A-I | Integrative | Weaver | IMPROVE Builder | RETHINK Builder |
|-------------|:-:|:-:|:-:|:-:|:-:|
| Screenshots | Y | Y | Y | N | N |
| HTML artifact | Y (code inspection) | Y | Y | Y | Y |
| PA questions (Sec 1-3) | Y | N | Y | N | N |
| PA questions (Sec 4) | **N** | N | Y | N | N |
| PA guardrails | Y | N | N | N | N |
| Weaver protocol | N | N | Y | N | N |
| Gate results | **N** | N | Y | **N** | **N** |
| PA-05 scores | **N** | **N** | Y (computes) | **N** | **N** |
| Tier definitions | **N** | N | Y | N | N |
| Build context | **N** | **N** | N | N | N |
| Mechanism catalog | N | N | N | Y | Y |
| Conviction brief | N | N | N | Y | Y |
| Previous weaver report | N | N | Y (cycle >= 2) | Y | Y |
| Other auditor reports | **N** | **N** | Y (all 10) | N | N |
| Fix checklist | N | N | N | **N** | **N** |

**Bold N** = actively prohibited (not just absent). Including this information would degrade the agent's output quality through anchoring, contamination, or continuation bias.

---

## 15. Integration with Phase A

### 15.1 Handoff from Phase A to Phase B

When Phase A (corpus integration) completes pass 56, the orchestrator:

1. Saves the final Phase A artifact as `artifact-phase-a-final.html`
2. Sets `state.currentPhase = 'pa-hardening'`
3. Sets `paState.currentArtifactPath = artifact-phase-a-final.html`
4. Begins PA Cycle 1

### 15.2 Shared Infrastructure

Phase A and Phase B share:
- The `execClaude` wrapper
- The state persistence layer
- The cost tracking system
- The logging infrastructure
- The Playwright browser instance management

Phase B adds:
- Screenshot capture
- Gate runner
- PA auditor prompt templates
- Weaver prompt template
- Refinement builder prompt templates
- Routing logic
- Mini-PA mode

### 15.3 The Conviction Bridge

The conviction brief from TC derivation (created before Phase A starts) is used by:
- Phase A builders (as creative direction)
- Phase B IMPROVE builders (to understand the page's soul)
- Phase B RETHINK builders (to start fresh with the same soul)

The conviction brief is the one document that threads through the entire pipeline.

---

*End of Phase B PA Integration Specification. 12 `claude -p` agent types defined (9 auditors + 1 integrative + 1 weaver + 1 refinement builder). All prompts, tools, flags, timeouts, and expected outputs mapped. Information isolation matrix enforced. Gate runner as deterministic Playwright JS. Routing as binary code logic.*
