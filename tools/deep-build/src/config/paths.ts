/**
 * Path resolution for the deep-build orchestrator.
 * Uses import.meta.url for portability.
 */

import { fileURLToPath } from 'node:url';
import path from 'node:path';

/** Directory containing this source file (src/config/) */
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** deep-build package root (tools/deep-build/) */
export const PACKAGE_ROOT = path.resolve(__dirname, '..', '..');

/** Source root (tools/deep-build/src/) */
export const SRC_ROOT = path.resolve(__dirname, '..');

/** Templates directory (tools/deep-build/templates/) */
export const TEMPLATES_DIR = path.resolve(PACKAGE_ROOT, 'templates');

/** Tests directory */
export const TESTS_DIR = path.resolve(PACKAGE_ROOT, 'tests');

/**
 * Resolve the project root (Claude-Research-And-Tips/).
 * Walks up from package root until we find the .git directory.
 */
export function resolveProjectRoot(): string {
  let dir = PACKAGE_ROOT;
  for (let i = 0; i < 10; i++) {
    const gitDir = path.join(dir, '.git');
    try {
      const fs = require('node:fs');
      if (fs.existsSync(gitDir)) return dir;
    } catch {
      // fs not available, fall through
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  // Fallback: assume tools/deep-build/ is two levels below project root
  return path.resolve(PACKAGE_ROOT, '..', '..');
}

/**
 * Resolve common project paths relative to the project root.
 */
export function resolveProjectPaths(projectRoot: string) {
  return {
    projectRoot,
    designSystem: path.join(projectRoot, 'design-system'),
    designSystemCore: path.join(projectRoot, 'design-system', 'compositional-core'),
    ephemeral: path.join(projectRoot, 'ephemeral'),
    builds: path.join(projectRoot, 'ephemeral', 'builds'),
    research: path.join(projectRoot, 'design-system', 'research'),
    vaExtraction: path.join(projectRoot, 'ephemeral', 'va-extraction'),
    mechanismCatalog: path.join(projectRoot, 'design-system', 'compositional-core', 'grammar', 'mechanism-catalog.md'),
    componentsCss: path.join(projectRoot, 'design-system', 'compositional-core', 'components', 'components.css'),
    tokensCss: path.join(projectRoot, 'design-system', 'compositional-core', 'vocabulary', 'tokens.css'),
    caseStudy: path.join(projectRoot, 'design-system', 'validated-explorations', 'combination', 'CD-006-pilot-migration.html'),
    researchSynthesis: path.join(projectRoot, 'design-system', 'research', 'RESEARCH-SYNTHESIS.md'),
    r5: path.join(projectRoot, 'design-system', 'research', 'R5-COMBINATION-THEORY.md'),
  };
}

/**
 * Build the output directory path for a pipeline run.
 */
export function buildOutputDir(buildsDir: string, slug: string): string {
  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  return path.join(buildsDir, `${slug}-${date}`);
}
