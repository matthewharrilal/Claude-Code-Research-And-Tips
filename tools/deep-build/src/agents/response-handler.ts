/**
 * Response handler for claude -p JSON output.
 * Extracts HTML artifacts and discovery logs from the result text.
 *
 * Note: parseClaudeResponse() was removed — claude-cli.ts handles JSON parsing
 * via safeJsonParse directly. extractConvictionAddition() was removed — conviction
 * extraction is handled by conviction-manager.ts:extractConvictionFromResponse().
 * extractVerifierObservations() was removed — pass-executor.ts assigns
 * verifierObservations directly from resultText.
 */

import { HtmlExtractionError } from '../types/errors.js';

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
