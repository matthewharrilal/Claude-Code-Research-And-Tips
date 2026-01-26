import { defineConfig, defineCollection, s } from 'velite'

const activityItemSchema = s.object({
  id: s.string(),
  type: s.enum([
    'invariant', 'effect', 'composition', 'frontier', 'warstory', 'alternative',
    'inversion', 'constraint', 'gradient', 'horizon', 'violation', 'tradeoff',
    'analogy', 'expertise', 'minimal', 'inflection'
  ]),
  linkedSection: s.string(),
  title: s.string(),
  content: s.string(),
  chain: s.array(s.string()).optional(),
})

const synthesis = defineCollection({
  name: 'Synthesis',
  pattern: 'synthesis/**/index.mdx',
  schema: s.object({
    slug: s.path(),
    title: s.string().max(100),
    description: s.string().max(200).optional(),
    essence: s.string().max(150),
    category: s.enum([
      'core', 'architecture', 'mastery', 'compare', 'transform',
      'taxonomy', 'principles', 'combinations', 'frontier', 'grammar', 'technical', 'reference'
    ]),
    order: s.number().default(999),
    activityItems: s.array(activityItemSchema).optional(),
    content: s.mdx(),
  }),
})

const spotlight = defineCollection({
  name: 'Spotlight',
  pattern: 'spotlight/**/index.mdx',
  schema: s.object({
    slug: s.path(),
    title: s.string().max(100),
    practitioner: s.string().optional(),
    description: s.string().max(200).optional(),
    essence: s.string().max(150),
    order: s.number().default(999),
    activityItems: s.array(activityItemSchema).optional(),
    content: s.mdx(),
  }),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    clean: true,
  },
  collections: { synthesis, spotlight },
})
