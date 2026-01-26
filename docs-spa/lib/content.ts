import fs from 'fs'
import path from 'path'

export interface ActivityItemData {
  id: string
  type: string
  linkedSection: string
  title: string
  content: string
  chain?: string[]
}

// Get activity items from extracted HTML pages (content/pages/slug/activity.json)
// Falls back to old location (content/synthesis/slug/activity.json)
export function getActivityItems(slug: string): ActivityItemData[] {
  // Try new location first (extracted HTML)
  const newPath = path.join(process.cwd(), 'content/pages', slug, 'activity.json')
  if (fs.existsSync(newPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(newPath, 'utf-8'))
      return data.items || []
    } catch {
      // Fall through to old location
    }
  }

  // Fall back to old location (MDX-based)
  const oldPath = path.join(process.cwd(), 'content/synthesis', slug, 'activity.json')
  if (fs.existsSync(oldPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(oldPath, 'utf-8'))
      return data.items || []
    } catch {
      return []
    }
  }
  return []
}

// Get HTML content from extracted pages
export function getHtmlContent(slug: string): string | null {
  const htmlPath = path.join(process.cwd(), 'content/pages', slug, 'content.html')
  if (fs.existsSync(htmlPath)) {
    try {
      return fs.readFileSync(htmlPath, 'utf-8')
    } catch {
      return null
    }
  }
  return null
}

// Check if HTML content exists for a slug
export function hasHtmlContent(slug: string): boolean {
  const htmlPath = path.join(process.cwd(), 'content/pages', slug, 'content.html')
  return fs.existsSync(htmlPath)
}

// Re-export synthesis from velite with type safety
export async function getSynthesisPost(slug: string) {
  try {
    const { synthesis } = await import('@/.velite')
    return synthesis.find((post) => post.slug === `synthesis/${slug}`)
  } catch {
    return null
  }
}

export async function getAllSynthesisSlugs() {
  try {
    const { synthesis } = await import('@/.velite')
    return synthesis.map((post) => ({
      slug: post.slug.replace('synthesis/', '')
    }))
  } catch {
    return []
  }
}
