/**
 * Structured logging for the deep-build pipeline.
 * 6 log destinations: console, run.log, passes.jsonl, errors.jsonl, decisions.jsonl, quality.jsonl
 */

import fs from 'node:fs';
import path from 'node:path';
import { ensureDir, appendJsonl } from '../utils.js';
import type { PassRecord } from '../types/state.js';
import type { ErrorRecord } from '../types/errors.js';

export class Logger {
  private readonly outputDir: string;
  private readonly logPath: string;
  private readonly passesPath: string;
  private readonly errorsPath: string;
  private readonly decisionsPath: string;
  private readonly qualityPath: string;

  constructor(outputDir: string) {
    this.outputDir = outputDir;
    ensureDir(outputDir);

    this.logPath = path.join(outputDir, 'run.log');
    this.passesPath = path.join(outputDir, 'passes.jsonl');
    this.errorsPath = path.join(outputDir, 'errors.jsonl');
    this.decisionsPath = path.join(outputDir, 'decisions.jsonl');
    this.qualityPath = path.join(outputDir, 'quality.jsonl');
  }

  private timestamp(): string {
    return new Date().toISOString();
  }

  private appendLog(level: string, message: string): void {
    const line = `[${this.timestamp()}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logPath, line, 'utf-8');
  }

  info(message: string): void {
    this.appendLog('INFO', message);
  }

  warn(message: string): void {
    this.appendLog('WARN', message);
    process.stderr.write(`⚠ ${message}\n`);
  }

  error(message: string, error?: Error): void {
    const detail = error ? `${message}: ${error.message}` : message;
    this.appendLog('ERROR', detail);
    if (error?.stack) {
      this.appendLog('ERROR', error.stack);
    }
    process.stderr.write(`✗ ${detail}\n`);
  }

  /**
   * Log a completed pass record to passes.jsonl
   */
  pass(record: PassRecord): void {
    appendJsonl(this.passesPath, record as unknown as Record<string, unknown>);
    this.appendLog('PASS', `P${record.passNumber} [S${record.subsetId}/${record.passWithinSubset}] ${record.role} — $${record.cost.toFixed(4)}`);
  }

  /**
   * Log an error record to errors.jsonl
   */
  logError(record: ErrorRecord): void {
    appendJsonl(this.errorsPath, record as unknown as Record<string, unknown>);
    this.appendLog('ERROR', `[${record.category}] ${record.message} (recovered: ${record.recovered})`);
  }

  /**
   * Log a routing/rotation/trim decision to decisions.jsonl
   */
  decision(record: object): void {
    const stamped = { timestamp: this.timestamp(), ...record };
    appendJsonl(this.decisionsPath, stamped as Record<string, unknown>);
  }

  /**
   * Log a quality signal (PA scores, verifier sentiment) to quality.jsonl
   */
  quality(record: object): void {
    const stamped = { timestamp: this.timestamp(), ...record };
    appendJsonl(this.qualityPath, stamped as Record<string, unknown>);
  }

  /**
   * Print a concise status line to stdout (overwriting previous line).
   */
  status(message: string): void {
    // Clear line and write status
    if (process.stdout.isTTY) {
      process.stdout.write(`\r\x1b[K${message}`);
    } else {
      process.stdout.write(`${message}\n`);
    }
    this.appendLog('STATUS', message);
  }

  /**
   * Get the output directory path (for other modules to write into).
   */
  getOutputDir(): string {
    return this.outputDir;
  }
}
