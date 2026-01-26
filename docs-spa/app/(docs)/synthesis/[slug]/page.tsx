import { notFound } from 'next/navigation'
import { getActivityItems, getHtmlContent, hasHtmlContent } from '@/lib/content'
import { ActivityItemsHydrator } from '@/components/activity-zone'
import { MDXContent } from '@/components/mdx/MDXContent'
import fs from 'fs'
import path from 'path'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static paths for all synthesis pages
export async function generateStaticParams() {
  const staticPaths: { slug: string }[] = []

  // Get paths from extracted HTML pages
  const pagesDir = path.join(process.cwd(), 'content/pages')
  if (fs.existsSync(pagesDir)) {
    const htmlSlugs = fs.readdirSync(pagesDir)
      .filter(f => fs.statSync(path.join(pagesDir, f)).isDirectory())
    staticPaths.push(...htmlSlugs.map(slug => ({ slug })))
  }

  // Also get paths from velite (MDX) if available
  try {
    const { synthesis } = await import('@/.velite')
    for (const post of synthesis) {
      const slug = post.slug.replace('synthesis/', '')
      if (!staticPaths.some(p => p.slug === slug)) {
        staticPaths.push({ slug })
      }
    }
  } catch {
    // Velite not built yet
  }

  return staticPaths
}

export default async function SynthesisPage({ params }: PageProps) {
  const { slug } = await params

  // Load activity items (works for both HTML and MDX)
  const activityItems = getActivityItems(slug)

  // Try HTML content first (extracted from html-site)
  const htmlContent = getHtmlContent(slug)
  if (htmlContent) {
    return (
      <>
        <ActivityItemsHydrator items={activityItems} />
        <article
          className="html-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </>
    )
  }

  // Fall back to MDX content from velite
  let post
  try {
    const { synthesis } = await import('@/.velite')
    post = synthesis.find((p) => p.slug === `synthesis/${slug}`)
  } catch {
    // Velite not built yet
    return (
      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-text-primary mb-4">
          {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
        </h1>
        <p className="text-text-muted">
          No content found. Run extraction script or build velite content.
        </p>
      </article>
    )
  }

  if (!post) {
    notFound()
  }

  return (
    <>
      <ActivityItemsHydrator items={activityItems} />
      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-text-primary mb-6">{post.title}</h1>
        <MDXContent code={post.content} />
      </article>
    </>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params

  // Check if we have HTML content
  if (hasHtmlContent(slug)) {
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    return {
      title: `${title} | Claude Code Knowledge Base`,
    }
  }

  // Fall back to velite metadata
  try {
    const { synthesis } = await import('@/.velite')
    const post = synthesis.find((p) => p.slug === `synthesis/${slug}`)

    if (post) {
      return {
        title: `${post.title} | Claude Code Knowledge Base`,
        description: post.description || post.essence,
      }
    }
  } catch {
    // Velite not built yet
  }

  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  return {
    title: `${title} | Claude Code Knowledge Base`,
  }
}
