/**
 * HTML validation for build artifacts.
 * Checks structural requirements and safety constraints.
 */

export interface HtmlValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateHtml(html: string): HtmlValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Size check
  if (html.length === 0) {
    errors.push('HTML is empty (0 bytes)');
    return { valid: false, errors, warnings };
  }

  // UTF-8 validity (Node strings are UTF-16, but check for replacement chars)
  if (html.includes('\uFFFD')) {
    errors.push('HTML contains invalid UTF-8 replacement characters');
  }

  // Doctype
  if (!/<!DOCTYPE\s+html>/i.test(html)) {
    errors.push('Missing <!DOCTYPE html> declaration');
  }

  // Required structural elements
  if (!/<head[\s>]/i.test(html)) {
    errors.push('Missing <head> element');
  }
  if (!/<body[\s>]/i.test(html)) {
    errors.push('Missing <body> element');
  }

  // Security: no script tags (injection prevention)
  if (/<script[\s>]/i.test(html)) {
    errors.push('Contains <script> tag — scripts are not allowed in build artifacts');
  }

  // Security: no inline event handlers (gate-runner bypass prevention)
  if (/\s+on\w+\s*=/i.test(html)) {
    errors.push('Contains inline event handler attributes (e.g., onerror, onload) — not allowed in build artifacts');
  }

  // Warnings
  if (html.length < 500) {
    warnings.push(`Very small artifact (${html.length} bytes) — may be incomplete`);
  }
  if (html.length > 500_000) {
    warnings.push(`Very large artifact (${(html.length / 1024).toFixed(0)}KB) — may cause performance issues`);
  }
  if (!/<style[\s>]/i.test(html)) {
    warnings.push('No <style> tag found — artifact may lack styling');
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
