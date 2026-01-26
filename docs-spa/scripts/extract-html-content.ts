import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface ActivityItem {
  id: string
  type: string
  linkedSection: string
  title: string
  content: string
}

interface ExtractionResult {
  title: string
  contentHtml: string
  activityItems: ActivityItem[]
}

function generateId(type: string, index: number): string {
  const prefixes: Record<string, string> = {
    invariant: 'inv',
    effect: 'eff',
    composition: 'comp',
    frontier: 'fron',
    warstory: 'war',
    alternative: 'alt',
    inversion: 'inv',
    constraint: 'con',
    gradient: 'grad',
    horizon: 'hor',
    violation: 'vio',
    tradeoff: 'trade',
    analogy: 'ana',
    expertise: 'exp',
    minimal: 'min',
    inflection: 'inf'
  }
  return `${prefixes[type] || type}-${index}`
}

function extractPage(htmlPath: string): ExtractionResult {
  const html = fs.readFileSync(htmlPath, 'utf-8')
  const dom = new JSDOM(html)
  const doc = dom.window.document

  // 1. Extract title from <title> tag
  const titleEl = doc.querySelector('title')
  const fullTitle = titleEl?.textContent || 'Untitled'
  const title = fullTitle.replace(' | Claude Code Documentation', '').trim()

  // 2. Extract main content
  const mainContent = doc.querySelector('main.main-content')
  const contentHtml = mainContent?.innerHTML || ''

  // 3. Extract activity items
  const activityItems: ActivityItem[] = []
  const itemEls = doc.querySelectorAll('.activity-item')

  itemEls.forEach((el, index) => {
    // Get the type from the second class (e.g., "activity-item invariant")
    const classList = Array.from(el.classList)
    const type = classList.find(c => c !== 'activity-item' && c !== 'active') || 'unknown'

    // Get linked section from data attribute
    const linkedSection = el.getAttribute('data-section') || ''

    // Get title from .font-medium element
    const titleEl = el.querySelector('.font-medium')
    const itemTitle = titleEl?.textContent?.trim() || ''

    // Get content from .text-text-secondary or .text-sm element
    const contentEl = el.querySelector('.text-text-secondary, .text-sm:not(.activity-label)')
    const content = contentEl?.innerHTML?.trim() || ''

    activityItems.push({
      id: generateId(type, index + 1),
      type,
      linkedSection,
      title: itemTitle,
      content
    })
  })

  return { title, contentHtml, activityItems }
}

function saveExtraction(slug: string, result: ExtractionResult, outputDir: string) {
  const pageDir = path.join(outputDir, slug)

  // Create directory
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true })
  }

  // Save content HTML
  fs.writeFileSync(path.join(pageDir, 'content.html'), result.contentHtml)

  // Save activity items JSON
  fs.writeFileSync(
    path.join(pageDir, 'activity.json'),
    JSON.stringify({ items: result.activityItems }, null, 2)
  )

  console.log(`✓ Extracted ${slug}:`)
  console.log(`  - content.html: ${result.contentHtml.length} chars`)
  console.log(`  - activity.json: ${result.activityItems.length} items`)
}

function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.log('Usage: npx tsx extract-html-content.ts <html-file-or-pattern>')
    console.log('')
    console.log('Examples:')
    console.log('  npx tsx extract-html-content.ts master-playbook')
    console.log('  npx tsx extract-html-content.ts all')
    process.exit(1)
  }

  const htmlSiteDir = path.resolve(__dirname, '../../html-site/synthesis')
  const outputDir = path.resolve(__dirname, '../content/pages')

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  if (args[0] === 'all') {
    // Extract all HTML files
    const htmlFiles = fs.readdirSync(htmlSiteDir)
      .filter(f => f.endsWith('.html'))

    console.log(`Found ${htmlFiles.length} HTML files to extract...\n`)

    for (const file of htmlFiles) {
      const slug = path.basename(file, '.html')
      const htmlPath = path.join(htmlSiteDir, file)

      try {
        const result = extractPage(htmlPath)
        saveExtraction(slug, result, outputDir)
      } catch (error) {
        console.error(`✗ Error extracting ${slug}:`, error)
      }
    }
  } else {
    // Extract specific files
    for (const arg of args) {
      const slug = arg.replace('.html', '')
      const htmlPath = path.join(htmlSiteDir, `${slug}.html`)

      if (!fs.existsSync(htmlPath)) {
        console.error(`✗ File not found: ${htmlPath}`)
        continue
      }

      try {
        const result = extractPage(htmlPath)
        saveExtraction(slug, result, outputDir)
      } catch (error) {
        console.error(`✗ Error extracting ${slug}:`, error)
      }
    }
  }

  console.log('\nDone!')
}

main()
