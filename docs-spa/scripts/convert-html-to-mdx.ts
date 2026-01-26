/**
 * HTML to MDX Conversion Script
 *
 * This script converts the POC HTML files to MDX format for use with Velite.
 *
 * Usage: npx tsx scripts/convert-html-to-mdx.ts
 *
 * Prerequisites:
 *   npm install cheerio turndown @types/cheerio @types/turndown
 */

import * as fs from 'fs'
import * as path from 'path'

const HTML_SYNTHESIS_DIR = '../html-site/synthesis'
const HTML_SPOTLIGHT_DIR = '../html-site/extractions/spotlight'
const OUTPUT_SYNTHESIS_DIR = './content/synthesis'
const OUTPUT_SPOTLIGHT_DIR = './content/spotlight'

interface ConversionResult {
  slug: string
  success: boolean
  error?: string
}

/**
 * Convert a single HTML file to MDX
 */
async function convertFile(htmlPath: string, outputDir: string): Promise<ConversionResult> {
  const slug = path.basename(htmlPath, '.html')

  try {
    // Read HTML file
    const html = fs.readFileSync(htmlPath, 'utf-8')

    // TODO: Implement actual conversion using cheerio and turndown
    // For now, create a placeholder
    const mdxContent = `---
title: "${slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}"
essence: "TODO: Extract essence from HTML"
category: "core"
order: 999
---

{/* TODO: Convert HTML content to MDX components */}

<EssenceBox>
  TODO: Extract essence content
</EssenceBox>
`

    // Create output directory
    const outDir = path.join(outputDir, slug)
    fs.mkdirSync(outDir, { recursive: true })

    // Write MDX file
    fs.writeFileSync(path.join(outDir, 'index.mdx'), mdxContent)

    // Create empty activity.json
    fs.writeFileSync(
      path.join(outDir, 'activity.json'),
      JSON.stringify({ items: [] }, null, 2)
    )

    return { slug, success: true }
  } catch (error) {
    return {
      slug,
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

/**
 * Main conversion function
 */
async function main() {
  console.log('HTML to MDX Conversion Script')
  console.log('==============================')
  console.log('')
  console.log('This is a stub script. Full implementation requires:')
  console.log('1. npm install cheerio turndown @types/cheerio @types/turndown')
  console.log('2. Implement cheerio parsing for each component type')
  console.log('3. Implement turndown rules for MDX conversion')
  console.log('')
  console.log('For now, use this script as a template.')
}

main().catch(console.error)
