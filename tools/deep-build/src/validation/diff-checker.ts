/**
 * Artifact diff analysis between passes.
 * Detects structural changes and generates human-readable summaries.
 */

export interface DiffResult {
  lineDelta: number;
  sizeDelta: number;
  sizePercent: number;
  sectionsAdded: string[];
  sectionsRemoved: string[];
  summary: string;
}

/**
 * Extract section names from HTML comments like <!-- SECTION: Name -->
 */
function extractSections(html: string): Set<string> {
  const sections = new Set<string>();
  const re = /<!--\s*SECTION:\s*(.+?)\s*-->/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html)) !== null) {
    sections.add(match[1].trim());
  }
  return sections;
}

/**
 * Compare two artifact versions and produce a structured diff result.
 */
export function diffArtifact(before: string, after: string): DiffResult {
  const beforeLines = before.split('\n').length;
  const afterLines = after.split('\n').length;
  const lineDelta = afterLines - beforeLines;

  const sizeDelta = after.length - before.length;
  const sizePercent = before.length > 0
    ? ((sizeDelta / before.length) * 100)
    : (after.length > 0 ? 100 : 0);

  const beforeSections = extractSections(before);
  const afterSections = extractSections(after);

  const sectionsAdded = [...afterSections].filter(s => !beforeSections.has(s));
  const sectionsRemoved = [...beforeSections].filter(s => !afterSections.has(s));

  // Build human-readable summary
  const parts: string[] = [];

  if (lineDelta > 0) {
    parts.push(`+${lineDelta} lines`);
  } else if (lineDelta < 0) {
    parts.push(`${lineDelta} lines`);
  } else {
    parts.push('same line count');
  }

  const sign = sizeDelta >= 0 ? '+' : '';
  parts.push(`${sign}${sizeDelta} bytes (${sizePercent >= 0 ? '+' : ''}${sizePercent.toFixed(1)}%)`);

  if (sectionsAdded.length > 0) {
    parts.push(`added sections: ${sectionsAdded.join(', ')}`);
  }
  if (sectionsRemoved.length > 0) {
    parts.push(`removed sections: ${sectionsRemoved.join(', ')}`);
  }

  return {
    lineDelta,
    sizeDelta,
    sizePercent,
    sectionsAdded,
    sectionsRemoved,
    summary: parts.join('; '),
  };
}
