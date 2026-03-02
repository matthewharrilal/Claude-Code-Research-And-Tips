#!/usr/bin/env node

/**
 * Side B Validation Experiment Runner
 *
 * Runs 10 isolated claude -p agents across 5 conditions:
 *   - Static (2): baked-in summary, no files
 *   - Dynamic-3file (2): 3 raw design system files
 *   - Hybrid-3file (2): 3 files + reading protocol
 *   - Dynamic-6file (2): 6 raw design system files
 *   - Hybrid-6file (2): 6 files + reading protocol
 *
 * Then runs 2 blind evaluators on randomized outputs.
 * All agents are Opus, fully isolated via --disallowedTools.
 */

const { execFile } = require('child_process');
const fs = require('fs');
const path = require('path');

// ─── Configuration ───────────────────────────────────────────────────────────

const PROJECT_ROOT = '/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips';
const EXPERIMENT_DIR = path.join(PROJECT_ROOT, 'ephemeral/sideb-experiment');
const OUTPUTS_DIR = path.join(EXPERIMENT_DIR, 'outputs');
const PROMPTS_DIR = path.join(EXPERIMENT_DIR, 'prompts');

const DESIGN_SYSTEM_ROOT = path.join(PROJECT_ROOT, 'design-system/compositional-core');

const MAX_PARALLEL = 5; // Run 5 agents at a time

// ─── File Paths ──────────────────────────────────────────────────────────────

const FILES = {
  prohibitions: path.join(DESIGN_SYSTEM_ROOT, 'identity/prohibitions.md'),
  soulConstraints: path.join(DESIGN_SYSTEM_ROOT, 'identity/soul-constraints.md'),
  tokens: path.join(DESIGN_SYSTEM_ROOT, 'vocabulary/tokens.css'),
  mechanismCatalog: path.join(DESIGN_SYSTEM_ROOT, 'grammar/mechanism-catalog.md'),
  components: path.join(DESIGN_SYSTEM_ROOT, 'components/components.css'),
  compositionalRules: path.join(DESIGN_SYSTEM_ROOT, 'grammar/compositional-rules.md'),
};

// ─── Template Paths ──────────────────────────────────────────────────────────

const TEMPLATES = {
  static: path.join(PROMPTS_DIR, 'STATIC-TEMPLATE.md'),
  dynamic: path.join(PROMPTS_DIR, 'DYNAMIC-TEMPLATE.md'),
  hybrid: path.join(PROMPTS_DIR, 'HYBRID-TEMPLATE.md'),
  evaluator: path.join(PROMPTS_DIR, 'EVALUATOR-TEMPLATE.md'),
};

// ─── Agent Definitions ───────────────────────────────────────────────────────

const AGENTS = [
  { id: 'static-1',    condition: 'static',     fileSet: 0 },
  { id: 'static-2',    condition: 'static',     fileSet: 0 },
  { id: 'dynamic-3f-1', condition: 'dynamic',   fileSet: 3 },
  { id: 'dynamic-3f-2', condition: 'dynamic',   fileSet: 3 },
  { id: 'hybrid-3f-1',  condition: 'hybrid',    fileSet: 3 },
  { id: 'hybrid-3f-2',  condition: 'hybrid',    fileSet: 3 },
  { id: 'dynamic-6f-1', condition: 'dynamic',   fileSet: 6 },
  { id: 'dynamic-6f-2', condition: 'dynamic',   fileSet: 6 },
  { id: 'hybrid-6f-1',  condition: 'hybrid',    fileSet: 6 },
  { id: 'hybrid-6f-2',  condition: 'hybrid',    fileSet: 6 },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function buildAdditionalFilesBlock(fileSet) {
  if (fileSet <= 3) return '';

  const mechContent = readFile(FILES.mechanismCatalog);
  const compContent = readFile(FILES.components);
  const rulesContent = readFile(FILES.compositionalRules);

  return `### FILE 4: mechanism-catalog.md
\`\`\`
${mechContent}
\`\`\`

### FILE 5: components.css
\`\`\`css
${compContent}
\`\`\`

### FILE 6: compositional-rules.md
\`\`\`
${rulesContent}
\`\`\``;
}

function buildPrompt(agent) {
  if (agent.condition === 'static') {
    return readFile(TEMPLATES.static);
  }

  const templatePath = agent.condition === 'dynamic' ? TEMPLATES.dynamic : TEMPLATES.hybrid;
  let template = readFile(templatePath);

  const prohibitions = readFile(FILES.prohibitions);
  const soul = readFile(FILES.soulConstraints);
  const tokens = readFile(FILES.tokens);
  const additionalBlock = buildAdditionalFilesBlock(agent.fileSet);

  template = template.replace('{{PROHIBITIONS_CONTENT}}', prohibitions);
  template = template.replace('{{SOUL_CONSTRAINTS_CONTENT}}', soul);
  template = template.replace('{{TOKENS_CONTENT}}', tokens);
  template = template.replace('{{ADDITIONAL_FILES_BLOCK}}', additionalBlock);

  return template;
}

function runClaudeAgent(prompt, outputPath) {
  return new Promise((resolve, reject) => {
    const child = execFile(
      '/usr/bin/env',
      [
        '-u', 'CLAUDECODE',
        'claude', '-p',
        '--model', 'claude-opus-4-6',
        '--no-session-persistence',
        '--disallowedTools', 'Read,Glob,Grep,Bash,Edit,Write,Agent,WebSearch,WebFetch,NotebookEdit,EnterPlanMode,ExitPlanMode,EnterWorktree,TaskCreate,TaskUpdate,TaskGet,TaskList,TeamCreate,TeamDelete,SendMessage,AskUserQuestion,Skill',
      ],
      {
        maxBuffer: 1024 * 1024 * 10, // 10MB
        timeout: 600000, // 10 min per agent
        env: { ...process.env, CLAUDECODE: undefined },
      },
      (error, stdout, stderr) => {
        if (error && !stdout) {
          console.error(`  ERROR for ${outputPath}: ${error.message}`);
          fs.writeFileSync(outputPath, `ERROR: ${error.message}\n\nSTDERR:\n${stderr}`);
          resolve({ success: false, error: error.message });
          return;
        }
        fs.writeFileSync(outputPath, stdout);
        console.log(`  ✓ Saved: ${path.basename(outputPath)} (${stdout.length} chars)`);
        resolve({ success: true, length: stdout.length });
      }
    );

    // Send prompt via stdin
    child.stdin.write(prompt);
    child.stdin.end();
  });
}

async function runBatch(agents, batchLabel) {
  console.log(`\n── ${batchLabel} (${agents.length} agents) ──`);
  const startTime = Date.now();

  const promises = agents.map(agent => {
    const prompt = buildPrompt(agent);
    const outputPath = path.join(OUTPUTS_DIR, `${agent.id}.md`);

    // Also save the prompt for auditability
    const promptPath = path.join(OUTPUTS_DIR, `_prompt-${agent.id}.md`);
    fs.writeFileSync(promptPath, prompt);

    console.log(`  Starting ${agent.id} (${agent.condition}, ${agent.fileSet}f, prompt: ${prompt.length} chars)`);
    return runClaudeAgent(prompt, outputPath);
  });

  const results = await Promise.all(promises);
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  const successes = results.filter(r => r.success).length;
  console.log(`  Batch complete: ${successes}/${agents.length} succeeded in ${elapsed}s`);
  return results;
}

function buildEvaluatorPrompt(labelMap, evaluatorId) {
  let template = readFile(TEMPLATES.evaluator);

  // Update template to say 10 analyses, R1-R10
  template = template.replace(
    'You are evaluating 7 design system analyses produced by different agents. The analyses are labeled R1 through R7 in RANDOMIZED order',
    'You are evaluating 10 design system analyses produced by different agents. The analyses are labeled R1 through R10 in RANDOMIZED order'
  );
  template = template.replace('## THE 7 ANALYSES', '## THE 10 ANALYSES');
  template = template.replace(/R1-R7/g, 'R1-R10');
  template = template.replace(/the 7 analyses/g, 'the 10 analyses');

  // Build the analyses block
  const analysesBlock = labelMap.map(({ label, agentId }) => {
    const outputPath = path.join(OUTPUTS_DIR, `${agentId}.md`);
    const content = readFile(outputPath);
    return `### ${label}\n\n${content}`;
  }).join('\n\n---\n\n');

  template = template.replace('{{ALL_ANALYSES_RANDOMIZED}}', analysesBlock);

  return template;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('═══════════════════════════════════════════════════════');
  console.log('  SIDE B VALIDATION EXPERIMENT');
  console.log('  10 Opus agents × 5 conditions + 2 blind evaluators');
  console.log('═══════════════════════════════════════════════════════');

  // Create output directory
  fs.mkdirSync(OUTPUTS_DIR, { recursive: true });

  const experimentStart = Date.now();

  // ── Phase 1: Run analysis agents in 2 batches of 5 ──

  const batch1 = AGENTS.slice(0, 5);
  const batch2 = AGENTS.slice(5, 10);

  await runBatch(batch1, 'Batch 1');
  await runBatch(batch2, 'Batch 2');

  // Verify all outputs exist
  const failedAgents = AGENTS.filter(a => {
    const outputPath = path.join(OUTPUTS_DIR, `${a.id}.md`);
    if (!fs.existsSync(outputPath)) return true;
    const content = readFile(outputPath);
    return content.startsWith('ERROR:');
  });

  if (failedAgents.length > 0) {
    console.log(`\n⚠ ${failedAgents.length} agents failed: ${failedAgents.map(a => a.id).join(', ')}`);
    console.log('Proceeding with available outputs...');
  }

  // ── Phase 2: Randomize labels ──

  console.log('\n── Randomizing labels ──');

  // Create two different random orderings for the two evaluators
  const agentIds = AGENTS.map(a => a.id);
  const shuffle1 = shuffleArray(agentIds);
  const shuffle2 = shuffleArray(agentIds);

  const labelMap1 = shuffle1.map((id, i) => ({ label: `R${i + 1}`, agentId: id }));
  const labelMap2 = shuffle2.map((id, i) => ({ label: `R${i + 1}`, agentId: id }));

  // Save the label mappings (the "key" — only revealed after blind review)
  const keyContent = `# Label Mapping Key
# DO NOT READ UNTIL AFTER BLIND REVIEW

## Evaluator A Mapping
${labelMap1.map(m => `${m.label} = ${m.agentId}`).join('\n')}

## Evaluator B Mapping
${labelMap2.map(m => `${m.label} = ${m.agentId}`).join('\n')}

## Agent Conditions
${AGENTS.map(a => `${a.id}: condition=${a.condition}, files=${a.fileSet}`).join('\n')}
`;
  fs.writeFileSync(path.join(OUTPUTS_DIR, '_LABEL-KEY.md'), keyContent);
  console.log('  Label key saved (hidden until after blind review)');

  // ── Phase 3: Build blind review file for user ──

  // Use shuffle1 ordering for the user's blind review
  const blindReviewContent = `# Blind Review: 10 Design System Analyses

Read each analysis below. Form your own impressions BEFORE looking at evaluator scores.
The analyses are in randomized order — you do not know which method produced which.

---

${labelMap1.map(({ label, agentId }) => {
    const outputPath = path.join(OUTPUTS_DIR, `${agentId}.md`);
    const content = fs.existsSync(outputPath) ? readFile(outputPath) : '[OUTPUT MISSING]';
    return `## ${label}\n\n${content}\n\n---`;
  }).join('\n\n')}
`;
  fs.writeFileSync(path.join(OUTPUTS_DIR, 'BLIND-REVIEW.md'), blindReviewContent);
  console.log('  Blind review file saved');

  // ── Phase 4: Run evaluators ──

  console.log('\n── Running evaluators ──');

  const evalPrompt1 = buildEvaluatorPrompt(labelMap1, 'eval-A');
  const evalPrompt2 = buildEvaluatorPrompt(labelMap2, 'eval-B');

  // Save evaluator prompts for auditability
  fs.writeFileSync(path.join(OUTPUTS_DIR, '_prompt-eval-A.md'), evalPrompt1);
  fs.writeFileSync(path.join(OUTPUTS_DIR, '_prompt-eval-B.md'), evalPrompt2);

  console.log(`  Evaluator A prompt: ${evalPrompt1.length} chars`);
  console.log(`  Evaluator B prompt: ${evalPrompt2.length} chars`);

  const evalResults = await Promise.all([
    runClaudeAgent(evalPrompt1, path.join(OUTPUTS_DIR, 'eval-A.md')),
    runClaudeAgent(evalPrompt2, path.join(OUTPUTS_DIR, 'eval-B.md')),
  ]);

  // ── Phase 5: Generate summary ──

  const totalElapsed = ((Date.now() - experimentStart) / 1000 / 60).toFixed(1);

  const summaryContent = `# Experiment Execution Summary

**Date:** ${new Date().toISOString()}
**Duration:** ${totalElapsed} minutes
**Model:** claude-opus-4-6 (all agents)
**Isolation:** --disallowedTools (full tool block)

## Agent Results

| Agent ID | Condition | Files | Output Size | Status |
|----------|-----------|-------|-------------|--------|
${AGENTS.map(a => {
    const outputPath = path.join(OUTPUTS_DIR, `${a.id}.md`);
    let size = 'N/A';
    let status = 'MISSING';
    if (fs.existsSync(outputPath)) {
      const content = readFile(outputPath);
      size = `${content.length} chars`;
      status = content.startsWith('ERROR:') ? 'FAILED' : 'OK';
    }
    return `| ${a.id} | ${a.condition} | ${a.fileSet} | ${size} | ${status} |`;
  }).join('\n')}

## Evaluator Results

| Evaluator | Output Size | Status |
|-----------|-------------|--------|
| eval-A | ${evalResults[0].success ? evalResults[0].length + ' chars' : 'FAILED'} | ${evalResults[0].success ? 'OK' : 'FAILED'} |
| eval-B | ${evalResults[1].success ? evalResults[1].length + ' chars' : 'FAILED'} | ${evalResults[1].success ? 'OK' : 'FAILED'} |

## Files Generated

- \`outputs/BLIND-REVIEW.md\` — All 10 analyses with randomized labels (read this FIRST)
- \`outputs/_LABEL-KEY.md\` — Which label = which condition (read AFTER blind review)
- \`outputs/eval-A.md\` — First evaluator's blind scores
- \`outputs/eval-B.md\` — Second evaluator's blind scores (different random order)
- \`outputs/<agent-id>.md\` — Individual agent outputs
- \`outputs/_prompt-<agent-id>.md\` — Exact prompts sent to each agent

## Recommended Review Order

1. Read \`BLIND-REVIEW.md\` — form your own impressions
2. Read \`eval-A.md\` and \`eval-B.md\` — see evaluator scores
3. Read \`_LABEL-KEY.md\` — reveal which condition produced which output
4. Compare your impressions vs evaluator scores vs actual conditions
`;

  fs.writeFileSync(path.join(EXPERIMENT_DIR, 'EXPERIMENT-SUMMARY.md'), summaryContent);

  console.log('\n═══════════════════════════════════════════════════════');
  console.log(`  EXPERIMENT COMPLETE — ${totalElapsed} minutes`);
  console.log('  Results in: ephemeral/sideb-experiment/outputs/');
  console.log('  Start with: BLIND-REVIEW.md');
  console.log('═══════════════════════════════════════════════════════');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
