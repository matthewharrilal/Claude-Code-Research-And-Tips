/**
 * Shared utilities for the deep-build orchestrator.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { CHARS_PER_TOKEN } from './config/constants.js';
import { FileNotFoundError } from './types/errors.js';

/**
 * Atomic file write: write to .tmp then rename.
 * Ensures the file is either old or new, never corrupted.
 */
export function atomicWriteFile(filePath: string, data: string): void {
  const tmpPath = filePath + '.tmp';
  fs.writeFileSync(tmpPath, data, 'utf-8');
  fs.renameSync(tmpPath, filePath);
}

/**
 * Ensure a directory exists, creating it recursively if needed.
 */
export function ensureDir(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true });
}

/**
 * Compute SHA-256 hash of content.
 */
export function sha256(content: string): string {
  return crypto.createHash('sha256').update(content, 'utf-8').digest('hex');
}

/**
 * Estimate token count from text (~4 chars per token).
 */
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / CHARS_PER_TOKEN);
}

/**
 * Retry a function with exponential backoff.
 */
export async function retry<T>(
  fn: () => Promise<T>,
  maxRetries: number,
  backoff: number[],
  onRetry?: (attempt: number, error: Error) => void,
): Promise<T> {
  let lastError: Error | undefined;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      if (attempt < maxRetries) {
        const delay = backoff[Math.min(attempt, backoff.length - 1)];
        onRetry?.(attempt + 1, lastError);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  throw lastError;
}

/**
 * Generate a URL-safe slug from a filename or string.
 */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\.md$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

/**
 * Generate a UUID v4.
 */
export function uuid(): string {
  return crypto.randomUUID();
}

/**
 * Format milliseconds to human-readable duration.
 */
export function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hours > 0) return `${hours}h ${minutes}m ${secs}s`;
  if (minutes > 0) return `${minutes}m ${secs}s`;
  return `${secs}s`;
}

/**
 * Read a file, returning its content or throwing FileNotFoundError.
 */
export function readFileChecked(filePath: string): string {
  if (!fs.existsSync(filePath)) {
    throw new FileNotFoundError(filePath);
  }
  return fs.readFileSync(filePath, 'utf-8');
}

/**
 * Safely parse JSON with error context.
 * If JSON is truncated (common with large claude -p responses),
 * attempts to recover the result field before giving up.
 */
export function safeJsonParse<T>(text: string, context: string): T {
  // First try: normal parse
  try {
    return JSON.parse(text) as T;
  } catch (firstError) {
    // Second try: claude -p sometimes outputs trailing newlines or extra data
    // after the JSON object. Try to find the last '}' and parse up to it.
    const lastBrace = text.lastIndexOf('}');
    if (lastBrace > 0) {
      try {
        return JSON.parse(text.slice(0, lastBrace + 1)) as T;
      } catch {
        // Fall through to truncation recovery
      }
    }

    // Third try: recover truncated claude -p JSON response.
    // The response format is {"type":"result","result":"...long text...","usage":{...}}
    // If truncated mid-string, we can extract the result field manually.
    const recovered = recoverTruncatedClaudeResponse(text);
    if (recovered) {
      console.error(`[safeJsonParse] Recovered truncated JSON for ${context} (${text.length} bytes, result: ${String(recovered.result).length} chars)`);
      return recovered as T;
    }

    const preview = text.slice(0, 200);
    throw new Error(`JSON parse failed (${context}): ${firstError}. Preview: ${preview}`);
  }
}

/**
 * Strip a trailing incomplete escape sequence from a JSON string value.
 * Handles: trailing `\`, trailing `\u`, `\uX`, `\uXX`, `\uXXX` (incomplete unicode).
 */
function stripTrailingPartialEscape(raw: string): string {
  if (raw.length === 0) return raw;

  // Check for trailing backslash (start of an escape that was truncated)
  if (raw[raw.length - 1] === '\\') {
    // Count consecutive trailing backslashes to determine if the last one is unmatched
    let count = 0;
    for (let j = raw.length - 1; j >= 0 && raw[j] === '\\'; j--) {
      count++;
    }
    // Odd number = last backslash is the start of an incomplete escape
    if (count % 2 === 1) {
      return raw.slice(0, raw.length - 1);
    }
  }

  // Check for incomplete unicode escape: \uXXXX where less than 4 hex digits present
  const lastBackslash = raw.lastIndexOf('\\');
  if (lastBackslash >= 0) {
    const tail = raw.slice(lastBackslash);
    // Match \u followed by 0-3 hex digits at the end of string
    if (/^\\u[0-9a-fA-F]{0,3}$/.test(tail)) {
      return raw.slice(0, lastBackslash);
    }
  }

  return raw;
}

/**
 * Attempt to recover a truncated claude -p JSON response.
 * Extracts fields that were fully written before truncation occurred.
 */
function recoverTruncatedClaudeResponse(text: string): Record<string, unknown> | null {
  // Must look like a claude response
  if (!text.startsWith('{"type":"result"')) return null;

  // Extract the result field — it's the big one that causes truncation
  const resultStart = text.indexOf('"result":"');
  if (resultStart === -1) return null;

  // Walk forward from the opening quote of the result value,
  // tracking escape sequences to find the actual end of the string
  const valueStart = resultStart + '"result":"'.length;
  let i = valueStart;
  let resultEnd = -1;

  while (i < text.length) {
    if (text[i] === '\\') {
      // If backslash is the very last char, truncation happened mid-escape
      if (i + 1 >= text.length) break;
      i += 2; // Skip escaped character
      continue;
    }
    if (text[i] === '"') {
      resultEnd = i;
      break;
    }
    i++;
  }

  // Extract other simple fields that might have completed before truncation
  const typeMatch = text.match(/"subtype":"([^"]+)"/);
  const errorMatch = text.match(/"is_error":(true|false)/);
  const costMatch = text.match(/"total_cost_usd":(\d+(?:\.\d+)?)/);
  const durationMatch = text.match(/"duration_ms":(\d+)/);
  const sessionMatch = text.match(/"session_id":"([^"]+)"/);
  const inputTokensMatch = text.match(/"input_tokens":(\d+)/);
  const outputTokensMatch = text.match(/"output_tokens":(\d+)/);

  let resultText: string;
  if (resultEnd !== -1) {
    // Result field was fully written — unescape JSON string
    const rawResult = text.slice(valueStart, resultEnd);
    try {
      resultText = JSON.parse('"' + rawResult + '"');
    } catch {
      resultText = rawResult.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }
  } else {
    // Result was truncated mid-string — take what we have, clean up partial escapes
    let rawResult = text.slice(valueStart);
    rawResult = stripTrailingPartialEscape(rawResult);
    resultText = rawResult.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    console.error(`[recoverTruncatedClaudeResponse] Result truncated at ${rawResult.length} chars (full response: ${text.length} bytes)`);
  }

  return {
    type: 'result',
    subtype: typeMatch?.[1] ?? 'success',
    is_error: errorMatch?.[1] === 'true',
    result: resultText,
    session_id: sessionMatch?.[1] ?? '',
    duration_ms: durationMatch ? parseInt(durationMatch[1], 10) : 0,
    total_cost_usd: costMatch ? parseFloat(costMatch[1]) : 0,
    usage: {
      input_tokens: inputTokensMatch ? parseInt(inputTokensMatch[1], 10) : 0,
      output_tokens: outputTokensMatch ? parseInt(outputTokensMatch[1], 10) : 0,
    },
  };
}

/**
 * Compute config hash for state validation.
 */
export function computeConfigHash(config: Record<string, unknown>): string {
  const serialized = JSON.stringify(config, Object.keys(config).sort());
  return sha256(serialized);
}

/**
 * Append a line to a JSONL file.
 * Guards against JSON.stringify failures (e.g., circular references).
 */
export function appendJsonl(filePath: string, record: Record<string, unknown>): void {
  let line: string;
  try {
    line = JSON.stringify(record) + '\n';
  } catch (err) {
    // Circular reference or other stringify failure — write a fallback record
    const fallback = {
      _serializationError: err instanceof Error ? err.message : String(err),
      _keys: Object.keys(record),
      _timestamp: new Date().toISOString(),
    };
    line = JSON.stringify(fallback) + '\n';
    console.error(`[appendJsonl] JSON.stringify failed for ${filePath}: ${fallback._serializationError}`);
  }
  fs.appendFileSync(filePath, line, 'utf-8');
}
