/**
 * Response handler for claude -p JSON output.
 * Extracts HTML artifacts, conviction additions, discovery logs,
 * and verifier observations from the result text.
 */

import type { ClaudeResponse, ConvictionAdditionRaw } from '../types/pass.js';
import { ClaudeInvocationError, HtmlExtractionError } from '../types/errors.js';
import { safeJsonParse } from '../utils.js';

/**
 * Parse raw JSON string from claude -p stdout into a ClaudeResponse.
 * Handles is_error checking, rate-limit detection, and truncated JSON.
 */
export function parseClaudeResponse(rawJson: string): ClaudeResponse {
  // Let safeJsonParse handle ALL truncation recovery — it has three-stage
  // fallback (normal parse → lastIndexOf('}') → truncated response recovery).
  // Doing lastIndexOf('}') here BEFORE safeJsonParse can silently discard data
  // that safeJsonParse's recovery logic needs to see.
  const response = safeJsonParse<ClaudeResponse>(rawJson.trim(), 'claude -p response');

  // Check is_error FIRST
  if (response.is_error) {
    const resultText = response.result || '';

    // Detect rate-limit patterns
    if (isRateLimitPattern(resultText)) {
      throw new ClaudeInvocationError(
        `Claude returned rate-limit error: ${resultText.slice(0, 300)}`,
        'rate-limit',
      );
    }

    // Detect model overload
    if (isOverloadPattern(resultText)) {
      throw new ClaudeInvocationError(
        `Claude returned overload error: ${resultText.slice(0, 300)}`,
        'model-overload',
      );
    }

    throw new ClaudeInvocationError(
      `Claude returned error (subtype: ${response.subtype}): ${resultText.slice(0, 500)}`,
      'invalid-response',
    );
  }

  return response;
}

/**
 * Extract HTML artifact from builder result text.
 * Three fallback strategies:
 * 1. Between <!-- HTML_START --> and <!-- HTML_END --> markers
 * 2. First <!DOCTYPE html> to last </html>
 * 3. Entire result text (with warning)
 */
export function extractHtml(resultText: string): { html: string; method: 'markers' | 'doctype' | 'full-result' } {
  // Strategy 1: Marker-based extraction
  const markerMatch = resultText.match(
    /<!--\s*HTML_START\s*-->\s*([\s\S]*?)\s*<!--\s*HTML_END\s*-->/
  );
  if (markerMatch && markerMatch[1].trim()) {
    return { html: markerMatch[1].trim(), method: 'markers' };
  }

  // Strategy 2: DOCTYPE to </html>
  const doctypeIndex = resultText.indexOf('<!DOCTYPE html');
  if (doctypeIndex === -1) {
    // Also try lowercase
    const doctypeLowerIndex = resultText.indexOf('<!doctype html');
    if (doctypeLowerIndex !== -1) {
      const lastHtml = resultText.lastIndexOf('</html>');
      if (lastHtml > doctypeLowerIndex) {
        const html = resultText.slice(doctypeLowerIndex, lastHtml + '</html>'.length);
        console.warn('[response-handler] HTML extracted via lowercase doctype fallback');
        return { html, method: 'doctype' };
      }
    }
  } else {
    const lastHtml = resultText.lastIndexOf('</html>');
    if (lastHtml > doctypeIndex) {
      const html = resultText.slice(doctypeIndex, lastHtml + '</html>'.length);
      console.warn('[response-handler] HTML extracted via DOCTYPE fallback (no markers found)');
      return { html, method: 'doctype' };
    }
  }

  // Strategy 3: Full result (last resort)
  if (resultText.includes('<html') && resultText.includes('</html>')) {
    console.warn('[response-handler] HTML extracted as full result text (no markers, no DOCTYPE)');
    return { html: resultText, method: 'full-result' };
  }

  throw new HtmlExtractionError(
    'No HTML found in builder response. Expected <!-- HTML_START --> markers, ' +
    '<!DOCTYPE html>, or <html> tags. Result preview: ' +
    resultText.slice(0, 200),
  );
}

/**
 * Extract conviction addition from builder result text.
 * Returns null if markers are missing (not an error condition).
 *
 * Expected format between markers:
 *   BUILT: ...
 *   TRYING: ...
 *   REJECTED: ...
 *   SURPRISED: ...
 *   WANTED: ...
 *   UNRESOLVED: ...
 */
export function extractConvictionAddition(resultText: string): ConvictionAdditionRaw | null {
  const match = resultText.match(
    /<!--\s*CONVICTION_ADDITION_START\s*-->\s*([\s\S]*?)\s*<!--\s*CONVICTION_ADDITION_END\s*-->/
  );

  if (!match || !match[1].trim()) {
    console.warn('[response-handler] No conviction addition markers found in response');
    return null;
  }

  const block = match[1].trim();
  const conviction: ConvictionAdditionRaw = {};

  const dimensions: Array<{ key: keyof ConvictionAdditionRaw; pattern: RegExp }> = [
    { key: 'built', pattern: /BUILT:\s*(.*?)(?=\n(?:TRYING|REJECTED|SURPRISED|WANTED|UNRESOLVED):|$)/s },
    { key: 'trying', pattern: /TRYING:\s*(.*?)(?=\n(?:REJECTED|SURPRISED|WANTED|UNRESOLVED):|$)/s },
    { key: 'rejected', pattern: /REJECTED:\s*(.*?)(?=\n(?:SURPRISED|WANTED|UNRESOLVED):|$)/s },
    { key: 'surprised', pattern: /SURPRISED:\s*(.*?)(?=\n(?:WANTED|UNRESOLVED):|$)/s },
    { key: 'wanted', pattern: /WANTED:\s*(.*?)(?=\n(?:UNRESOLVED):|$)/s },
    { key: 'unresolved', pattern: /UNRESOLVED:\s*(.*?)$/s },
  ];

  for (const { key, pattern } of dimensions) {
    const dimMatch = block.match(pattern);
    if (dimMatch && dimMatch[1].trim()) {
      conviction[key] = dimMatch[1].trim();
    }
  }

  // If we found markers but no dimensions, still return the raw block
  if (Object.keys(conviction).length === 0) {
    console.warn('[response-handler] Conviction markers found but no dimensions parsed');
    return null;
  }

  return conviction;
}

/**
 * Extract discovery log entries from builder result text.
 * Returns empty array if markers are missing (not an error condition).
 *
 * Expected format between markers:
 *   - discovery 1
 *   - discovery 2
 */
export function extractDiscoveryLog(resultText: string): string[] {
  const match = resultText.match(
    /<!--\s*DISCOVERY_LOG_START\s*-->\s*([\s\S]*?)\s*<!--\s*DISCOVERY_LOG_END\s*-->/
  );

  if (!match || !match[1].trim()) {
    console.warn('[response-handler] No discovery log markers found in response');
    return [];
  }

  const block = match[1].trim();
  return block
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => line.replace(/^[-*•]\s*/, '').trim())
    .filter(line => line.length > 0);
}

/**
 * Extract verifier observations from result text.
 * Verifiers return holistic observation text — the full result is the observation.
 * Returns null if result is empty.
 */
export function extractVerifierObservations(resultText: string): string | null {
  const trimmed = resultText.trim();
  if (!trimmed) {
    console.warn('[response-handler] Verifier returned empty result text');
    return null;
  }
  return trimmed;
}

/**
 * Check if text contains rate-limit patterns.
 */
function isRateLimitPattern(text: string): boolean {
  const lower = text.toLowerCase();
  return lower.includes('rate limit') ||
    lower.includes('rate_limit') ||
    lower.includes('429') ||
    lower.includes('too many requests');
}

/**
 * Check if text contains overload patterns.
 */
function isOverloadPattern(text: string): boolean {
  const lower = text.toLowerCase();
  return lower.includes('overloaded') ||
    lower.includes('503') ||
    lower.includes('capacity');
}
