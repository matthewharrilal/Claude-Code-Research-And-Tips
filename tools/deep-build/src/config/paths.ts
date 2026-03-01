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

/** Templates directory (tools/deep-build/templates/) */
export const TEMPLATES_DIR = path.resolve(PACKAGE_ROOT, 'templates');
