# Next.js SPA Rebuild: Master Plan

> **Goal**: Convert 144 static HTML documentation pages into a Next.js SPA with Framer Motion animations, grouped collapsible navigation, and no-reload panel updates.

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Architecture Overview](#architecture-overview)
3. [Phase 1: Project Setup](#phase-1-project-setup)
4. [Phase 2: Component Library](#phase-2-component-library)
5. [Phase 3: Layout System](#phase-3-layout-system)
6. [Phase 4: Navigation System](#phase-4-navigation-system)
7. [Phase 5: Content Migration](#phase-5-content-migration)
8. [Phase 6: Activity Zone System](#phase-6-activity-zone-system)
9. [Phase 7: Animations & Transitions](#phase-7-animations--transitions)
10. [Phase 8: Integration & Polish](#phase-8-integration--polish)
11. [Appendix: File Inventory](#appendix-file-inventory)

---

## Executive Summary

### What We're Building

| Aspect | Current State | Target State |
|--------|---------------|--------------|
| **Framework** | Static HTML files | Next.js 15 + React 19 SPA |
| **Navigation** | Page reloads | SPA routing, no reloads |
| **Animations** | None/GSAP | Framer Motion throughout |
| **Content** | 144 HTML files (2000+ lines each) | 144 MDX files + JSON data |
| **Layout** | Three-panel (per-file CSS) | Shared layout component |
| **State** | None | Zustand + URL state |

### Tech Stack

```
Framework:     Next.js 15 (App Router)
UI:            React 19 + TypeScript
Styling:       Tailwind CSS + CSS Modules
Animations:    Framer Motion 11
Content:       MDX + Velite (content layer)
State:         Zustand 5 + URL params
Icons:         Lucide React
```

### Timeline Estimate

| Phase | Duration | Parallelizable |
|-------|----------|----------------|
| Phase 1: Project Setup | 1 day | No |
| Phase 2: Component Library | 3-4 days | Yes (components) |
| Phase 3: Layout System | 2 days | No |
| Phase 4: Navigation System | 2-3 days | Partially |
| Phase 5: Content Migration | 5-7 days | Yes (files) |
| Phase 6: Activity Zone System | 2-3 days | Partially |
| Phase 7: Animations & Transitions | 2-3 days | Yes (features) |
| Phase 8: Integration & Polish | 2-3 days | Partially |
| **Total** | **10-12 days** | |

---

## Architecture Overview

### Folder Structure

```
docs-spa/
├── app/
│   ├── layout.tsx                 # Root layout (providers, fonts)
│   ├── page.tsx                   # Landing page
│   ├── globals.css                # Global styles
│   │
│   ├── (docs)/                    # Route group for documentation
│   │   ├── layout.tsx             # Three-panel layout shell
│   │   ├── template.tsx           # Page transition wrapper
│   │   │
│   │   ├── synthesis/
│   │   │   └── [slug]/
│   │   │       └── page.tsx       # Dynamic synthesis pages
│   │   │
│   │   └── spotlight/
│   │       └── [slug]/
│   │           └── page.tsx       # Dynamic spotlight pages
│   │
│   └── api/
│       └── search/
│           └── route.ts           # Search API (future)
│
├── components/
│   ├── layout/
│   │   ├── ThreePanelLayout.tsx
│   │   ├── Header.tsx
│   │   ├── LeftNav.tsx
│   │   ├── MainPanel.tsx
│   │   ├── ActivityZone.tsx
│   │   └── Resizer.tsx
│   │
│   ├── navigation/
│   │   ├── GrandNav.tsx
│   │   ├── NavCategory.tsx
│   │   ├── NavItem.tsx
│   │   ├── PageSections.tsx
│   │   └── SearchFilter.tsx
│   │
│   ├── activity-zone/
│   │   ├── ActivityItem.tsx
│   │   ├── InvariantConnection.tsx
│   │   ├── WarStory.tsx
│   │   ├── InversionLens.tsx
│   │   ├── ConstraintChain.tsx
│   │   ├── FailureGradient.tsx
│   │   ├── ... (16 types total)
│   │   └── index.ts
│   │
│   ├── content/
│   │   ├── EssenceBox.tsx
│   │   ├── CoreAbstraction.tsx
│   │   ├── DesignDecision.tsx
│   │   ├── FileStructure.tsx
│   │   ├── PathOfTask.tsx
│   │   ├── GotchaBox.tsx
│   │   ├── WhatsHard.tsx
│   │   ├── WhenToUse.tsx
│   │   ├── CodeBlock.tsx
│   │   └── index.ts
│   │
│   ├── transitions/
│   │   ├── FrozenRouter.tsx
│   │   ├── PageTransition.tsx
│   │   └── variants.ts
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── ScrollArea.tsx
│       └── ... (shadcn/ui)
│
├── content/
│   ├── synthesis/                 # 75 MDX files
│   │   ├── master-playbook/
│   │   │   ├── index.mdx
│   │   │   └── activity.json
│   │   └── .../
│   │
│   ├── spotlight/                 # 69 MDX files
│   │   ├── boris-cherny/
│   │   │   ├── index.mdx
│   │   │   └── activity.json
│   │   └── .../
│   │
│   └── navigation.json            # Navigation structure
│
├── lib/
│   ├── content/
│   │   ├── get-content.ts
│   │   ├── get-navigation.ts
│   │   └── types.ts
│   │
│   ├── store/
│   │   ├── navigation-store.ts
│   │   ├── activity-store.ts
│   │   └── providers.tsx
│   │
│   └── hooks/
│       ├── use-scroll-sync.ts
│       ├── use-active-section.ts
│       └── use-resizer.ts
│
├── velite.config.ts               # Content schema
├── mdx-components.tsx             # MDX component registry
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Phase 1: Project Setup

### 1.1 Initialize Next.js Project

**Tasks:**
- [ ] Create new Next.js 15 project with TypeScript
- [ ] Configure App Router
- [ ] Set up path aliases (`@/*`, `@/.velite`)

**Commands:**
```bash
npx create-next-app@latest docs-spa --typescript --tailwind --eslint --app --src-dir=false
cd docs-spa
```

---

### 1.2 Install Dependencies

**Core Dependencies:**
```bash
npm install framer-motion@^11.15.0 zustand@^5.0.2 lucide-react@^0.469.0
```

**MDX & Content:**
```bash
npm install @next/mdx@^15.1.0 @mdx-js/loader@^3.1.0 @mdx-js/react@^3.1.0
npm install velite@^0.2.2 zod@^3.24.1
```

**Dev Dependencies:**
```bash
npm install -D @types/mdx@^2.0.13 @tailwindcss/typography@^0.5.15 prettier prettier-plugin-tailwindcss eslint-config-prettier
```

---

### 1.3 Configure TypeScript with Path Aliases

**File: `tsconfig.json`**
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/.velite": ["./.velite"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/content/*": ["./content/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".velite/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

---

### 1.4 Configure ESLint

**File: `.eslintrc.json`**
```json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/no-explicit-any": "warn",
    "react/no-unescaped-entities": "off",
    "react-hooks/exhaustive-deps": "warn",
    "import/order": [
      "warn",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc" }
      }
    ]
  }
}
```

---

### 1.5 Configure Prettier

**File: `.prettierrc`**
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**File: `.prettierignore`**
```
node_modules
.next
.velite
public
pnpm-lock.yaml
package-lock.json
```

---

### 1.6 Configure Tailwind

**Tasks:**
- [ ] Add typography plugin
- [ ] Configure design tokens (colors, fonts)
- [ ] Set up content paths for MDX

**File: `tailwind.config.ts`**
```ts
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#ffffff',
        'bg-subtle': '#fafafa',
        'bg-muted': '#f4f4f5',
        'text-primary': '#18181b',
        'text-muted': '#71717a',
        'accent': '#0D9373',
        'accent-light': '#10b981',
        // Activity Zone colors
        'az-invariant': '#3b82f6',
        'az-effect': '#f59e0b',
        'az-composition': '#8b5cf6',
        'az-frontier': '#ef4444',
        'az-warstory': '#10b981',
        'az-alternative': '#6b7280',
        'az-inversion': '#4f46e5',
        'az-constraint': '#8b5cf6',
        'az-gradient': '#f43f5e',
        'az-horizon': '#06b6d4',
        'az-violation': '#f97316',
        'az-tradeoff': '#f59e0b',
        'az-analogy': '#d946ef',
        'az-expertise': '#10b981',
        'az-minimal': '#84cc16',
        'az-inflection': '#eab308',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [typography],
}

export default config
```

---

### 1.7 Configure Velite (Content Layer)

**Tasks:**
- [ ] Define content schemas for synthesis and spotlight
- [ ] Define Activity Zone item schema
- [ ] Configure MDX processing

**File: `velite.config.ts`**
```ts
import { defineConfig, defineCollection, s } from 'velite'

// Activity Zone item schema (16 types)
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
  // Type-specific optional fields
  chain: s.array(s.string()).optional(),
  gradient: s.array(s.object({
    range: s.string(),
    quality: s.string(),
    symptom: s.string(),
  })).optional(),
})

// Synthesis collection (75 files)
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
    content: s.mdx(),
  }),
})

// Spotlight collection (69 files)
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
```

---

### 1.8 Configure Next.js for MDX

**File: `next.config.ts`**
```ts
import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
}

export default withMDX(nextConfig)
```

---

### 1.9 Set Up Global Styles

**File: `app/globals.css`**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

:root {
  --header-height: 56px;
  --left-nav-width: 260px;
  --activity-zone-width: 480px;
  --activity-zone-min: 280px;
  --activity-zone-max: 900px;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--header-height) + 20px);
}

body {
  font-family: 'Inter', system-ui, sans-serif;
}

/* Disable text selection and change cursor during resize */
body.resizing {
  user-select: none;
  cursor: ew-resize;
}

body.resizing * {
  cursor: ew-resize !important;
}

/* Smooth scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #d4d4d8;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a1a1aa;
}

/* ================================
   Responsive Breakpoints
   ================================ */

/* Large screens (1280px+): Full 3-panel layout */
@media (min-width: 1280px) {
  :root {
    --left-nav-width: 260px;
    --activity-zone-width: 480px;
  }
}

/* Medium-large screens (1024px - 1279px): Narrower panels */
@media (min-width: 1024px) and (max-width: 1279px) {
  :root {
    --left-nav-width: 240px;
    --activity-zone-width: 360px;
  }
}

/* Tablet (1024px - 1279px): Collapse Activity Zone */
@media (min-width: 1024px) and (max-width: 1279px) {
  .activity-zone {
    /* Activity zone uses narrower width from CSS variables above */
  }
}
```

---

### 1.10 Phase 1 Verification Checkpoint

Run these commands to verify Phase 1 is complete:

```bash
# 1. Verify project structure exists
ls -la docs-spa/

# Expected output should include:
# - app/
# - tsconfig.json
# - tailwind.config.ts
# - velite.config.ts
# - next.config.ts
# - .eslintrc.json
# - .prettierrc
# - .prettierignore

# 2. Create required directories if missing
mkdir -p docs-spa/components docs-spa/lib docs-spa/content

# 3. Verify dependencies installed
cd docs-spa && npm ls framer-motion zustand lucide-react velite

# 4. Verify TypeScript compiles without errors
npx tsc --noEmit

# 5. Verify ESLint runs without config errors
npm run lint

# 6. Verify Prettier is configured
npx prettier --check "app/**/*.tsx"

# 7. Verify dev server starts
npm run dev
# Should see: "Ready in Xs"
# Visit http://localhost:3000 - should see default Next.js page
```

**Phase 1 Checklist:**
- [ ] `npm run dev` starts without errors
- [ ] `npm run lint` completes (warnings OK, errors not OK)
- [ ] `npx tsc --noEmit` passes with no errors
- [ ] Path aliases resolve: `@/*` and `@/.velite`
- [ ] Tailwind classes apply correctly in browser
- [ ] Google Fonts load (Inter, Fira Code)
- [ ] `.prettierrc` and `.eslintrc.json` exist
- [ ] `velite.config.ts` exists (content processing comes later)

**Troubleshooting:**

If TypeScript path aliases fail:
```bash
# Verify tsconfig.json has correct paths
cat tsconfig.json | grep -A 10 '"paths"'
```

If ESLint fails:
```bash
# Check for config conflicts
npm ls eslint eslint-config-next eslint-config-prettier
```

If Prettier plugin fails:
```bash
# Reinstall the plugin
npm install -D prettier-plugin-tailwindcss
```

---

## Phase 2: Component Library

### 2.1 Content Components (8 Main Panel Section Types)

Each component maps to one of the 8 required Main Panel sections.

#### 2.1.1 EssenceBox Component

**File: `components/content/EssenceBox.tsx`**
```tsx
interface EssenceBoxProps {
  children: React.ReactNode
}

export function EssenceBox({ children }: EssenceBoxProps) {
  return (
    <div className="bg-accent-light/10 border-l-4 border-accent rounded-r-lg p-6 mb-8">
      <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">
        ESSENCE (15 WORDS)
      </span>
      <p className="text-lg font-medium text-text-primary leading-relaxed">
        {children}
      </p>
    </div>
  )
}
```

#### 2.1.2 CoreAbstraction Component

**File: `components/content/CoreAbstraction.tsx`**
```tsx
interface CoreAbstractionProps {
  philosophy: string
  code: string
  anchor: string
  children?: React.ReactNode
}

export function CoreAbstraction({ philosophy, code, anchor, children }: CoreAbstractionProps) {
  return (
    <section id="core-abstraction" className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">2</span>
        The Core Abstraction
      </h2>

      <blockquote className="text-lg italic text-text-muted border-l-4 border-gray-200 pl-4 mb-6">
        "{philosophy}"
      </blockquote>

      <div className="bg-bg-muted rounded-lg p-4 mb-6 font-mono text-sm">
        <code>{code}</code>
      </div>

      <p className="text-text-muted text-center italic">{anchor}</p>

      {children}
    </section>
  )
}
```

#### 2.1.3 DesignDecision Component

**File: `components/content/DesignDecision.tsx`**
```tsx
interface DesignDecisionProps {
  why: string
  reasoning: string
  implication: string
}

export function DesignDecision({ why, reasoning, implication }: DesignDecisionProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden mb-6">
      <div className="bg-bg-subtle px-4 py-3 border-b border-border">
        <h4 className="font-semibold text-accent">{why}</h4>
      </div>
      <div className="p-4">
        <p className="text-text-primary mb-4">{reasoning}</p>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r">
          <span className="text-xs font-semibold uppercase text-amber-700">What This Means For You</span>
          <p className="text-amber-900 mt-1">{implication}</p>
        </div>
      </div>
    </div>
  )
}
```

#### 2.1.4 FileStructure Component

**File: `components/content/FileStructure.tsx`**
```tsx
interface FileStructureProps {
  tree: string
  files?: Array<{
    path: string
    content: string
    language?: string
  }>
}

export function FileStructure({ tree, files }: FileStructureProps) {
  return (
    <section id="file-structure" className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">4</span>
        File Structure
      </h2>

      <div className="bg-bg-muted rounded-lg p-4 mb-6 font-mono text-sm whitespace-pre">
        {tree}
      </div>

      {files?.map((file, i) => (
        <div key={i} className="mb-6">
          <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-t-lg text-sm font-mono">
            {file.path}
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto">
            <code>{file.content}</code>
          </pre>
        </div>
      ))}
    </section>
  )
}
```

#### 2.1.5 PathOfTask Component

**File: `components/content/PathOfTask.tsx`**
```tsx
interface Step {
  number: number
  title: string
  description: string
  decision?: {
    question: string
    yes: string
    no: string
  }
}

interface PathOfTaskProps {
  steps: Step[]
}

export function PathOfTask({ steps }: PathOfTaskProps) {
  return (
    <section id="path-of-task" className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">5</span>
        Path of a Task
      </h2>

      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold">
              {step.number}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">{step.title}</h4>
              <p className="text-text-muted">{step.description}</p>

              {step.decision && (
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <span className="text-xs font-semibold text-green-700">YES →</span>
                    <p className="text-green-800 text-sm">{step.decision.yes}</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded p-3">
                    <span className="text-xs font-semibold text-red-700">NO →</span>
                    <p className="text-red-800 text-sm">{step.decision.no}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

#### 2.1.6 GotchaBox Component

**File: `components/content/GotchaBox.tsx`**
```tsx
interface GotchaBoxProps {
  symptom: string
  why: string
  stats?: string
  fix: string
}

export function GotchaBox({ symptom, why, stats, fix }: GotchaBoxProps) {
  return (
    <div className="border-l-4 border-amber-500 bg-amber-50 rounded-r-lg p-4 mb-4">
      <div className="font-semibold text-amber-800 mb-2">⚠️ {symptom}</div>
      <p className="text-amber-900 text-sm mb-2"><strong>Why:</strong> {why}</p>
      {stats && <p className="text-amber-900 text-sm mb-2"><strong>Numbers:</strong> {stats}</p>}
      <p className="text-amber-900 text-sm"><strong>Fix:</strong> {fix}</p>
    </div>
  )
}
```

#### 2.1.7 WhatsHard Component

**File: `components/content/WhatsHard.tsx`**
```tsx
interface WhatsHardProps {
  tension: string
  symptoms: string[]
  mitigation: string
}

export function WhatsHard({ tension, symptoms, mitigation }: WhatsHardProps) {
  return (
    <div className="border border-red-200 bg-red-50 rounded-lg p-4 mb-4">
      <h4 className="font-semibold text-red-800 mb-2">{tension}</h4>
      <ul className="list-disc list-inside text-red-700 text-sm mb-3">
        {symptoms.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
      <p className="text-red-900 text-sm"><strong>Mitigation:</strong> {mitigation}</p>
    </div>
  )
}
```

#### 2.1.8 WhenToUse Component

**File: `components/content/WhenToUse.tsx`**
```tsx
interface Criteria {
  use: string[]
  dontUse: string[]
  alternatives?: Array<{ condition: string; pattern: string }>
}

export function WhenToUse({ use, dontUse, alternatives }: Criteria) {
  return (
    <section id="when-to-use" className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">8</span>
        When to Use / When Not
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-3">✓ Use When</h4>
          <ul className="space-y-2">
            {use.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-green-700">
                <span>•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-3">✗ Don't Use When</h4>
          <ul className="space-y-2">
            {dontUse.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-red-700">
                <span>•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {alternatives && alternatives.length > 0 && (
        <div className="mt-6 bg-bg-subtle rounded-lg p-4">
          <h4 className="font-semibold mb-3">→ Consider Instead</h4>
          {alternatives.map((alt, i) => (
            <p key={i} className="text-text-muted">
              <strong>{alt.condition}:</strong> → {alt.pattern}
            </p>
          ))}
        </div>
      )}
    </section>
  )
}
```

---

### 2.2 Polymorphic Activity Zone Component (All 16 Types)

Instead of 16 separate components, we use ONE polymorphic `ActivityItem` component with a configuration object.

#### 2.2.1 Activity Type Configuration

**File: `components/activity-zone/activity-config.ts`**
```ts
import {
  Link,
  Zap,
  Layers,
  Telescope,
  Flame,
  GitFork,
  RefreshCw,
  Link2,
  AlertTriangle,
  Clock,
  AlertOctagon,
  Scale,
  Merge,
  TrendingUp,
  Minimize2,
  ArrowUpRight,
  LucideIcon,
} from 'lucide-react'

export type ActivityType =
  | 'invariant'
  | 'effect'
  | 'composition'
  | 'frontier'
  | 'warstory'
  | 'alternative'
  | 'inversion'
  | 'constraint'
  | 'gradient'
  | 'horizon'
  | 'violation'
  | 'tradeoff'
  | 'analogy'
  | 'expertise'
  | 'minimal'
  | 'inflection'

export interface ActivityTypeConfig {
  icon: LucideIcon
  color: string
  label: string
}

export const ACTIVITY_CONFIG: Record<ActivityType, ActivityTypeConfig> = {
  invariant: {
    icon: Link,
    color: '#3b82f6',
    label: 'Invariant Connection',
  },
  effect: {
    icon: Zap,
    color: '#f59e0b',
    label: 'Second-Order Effect',
  },
  composition: {
    icon: Layers,
    color: '#8b5cf6',
    label: 'Composition Case',
  },
  frontier: {
    icon: Telescope,
    color: '#ef4444',
    label: 'Research Frontier',
  },
  warstory: {
    icon: Flame,
    color: '#10b981',
    label: 'War Story',
  },
  alternative: {
    icon: GitFork,
    color: '#6b7280',
    label: 'Alternative Path',
  },
  inversion: {
    icon: RefreshCw,
    color: '#4f46e5',
    label: 'Inversion Lens',
  },
  constraint: {
    icon: Link2,
    color: '#8b5cf6',
    label: 'Constraint Chain',
  },
  gradient: {
    icon: AlertTriangle,
    color: '#f43f5e',
    label: 'Failure Gradient',
  },
  horizon: {
    icon: Clock,
    color: '#06b6d4',
    label: 'Time Horizon Shift',
  },
  violation: {
    icon: AlertOctagon,
    color: '#f97316',
    label: 'Violation Chain',
  },
  tradeoff: {
    icon: Scale,
    color: '#f59e0b',
    label: 'Trade-Off Tension',
  },
  analogy: {
    icon: Merge,
    color: '#d946ef',
    label: 'Analogical Bridge',
  },
  expertise: {
    icon: TrendingUp,
    color: '#10b981',
    label: 'Expertise Gradient',
  },
  minimal: {
    icon: Minimize2,
    color: '#84cc16',
    label: 'Minimal Pattern',
  },
  inflection: {
    icon: ArrowUpRight,
    color: '#eab308',
    label: 'Inflection Point',
  },
}
```

#### 2.2.2 Polymorphic ActivityItem Component

**File: `components/activity-zone/ActivityItem.tsx`**
```tsx
'use client'

import { motion } from 'framer-motion'
import { ACTIVITY_CONFIG, ActivityType } from './activity-config'

interface ActivityItemProps {
  type: ActivityType
  title: string
  linkedSection: string
  isActive?: boolean
  children: React.ReactNode
}

export function ActivityItem({
  type,
  title,
  linkedSection,
  isActive = false,
  children,
}: ActivityItemProps) {
  const config = ACTIVITY_CONFIG[type]
  const Icon = config.icon

  return (
    <motion.div
      data-section={linkedSection}
      className={`
        border-l-4 rounded-r-lg p-4 mb-3
        transition-all duration-200
        ${isActive ? 'bg-white shadow-md' : 'bg-white/50'}
      `}
      style={{ borderLeftColor: config.color }}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: isActive ? 1 : 0.7 }}
      whileHover={{ opacity: 1, x: 2 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4" style={{ color: config.color }} />
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: config.color }}
        >
          {config.label}
        </span>
      </div>
      <h4 className="font-medium text-sm mb-1">{title}</h4>
      <div className="text-xs text-text-muted">{children}</div>
    </motion.div>
  )
}
```

#### 2.2.3 Barrel Export

**File: `components/activity-zone/index.ts`**
```ts
export { ActivityItem } from './ActivityItem'
export { ACTIVITY_CONFIG } from './activity-config'
export type { ActivityType, ActivityTypeConfig } from './activity-config'
```

**Usage Example:**
```tsx
import { ActivityItem } from '@/components/activity-zone'

// All 16 types use the same component
<ActivityItem type="invariant" title="Context is constraint" linkedSection="core-abstraction">
  If you can't fit context into a single prompt, the pattern breaks.
</ActivityItem>

<ActivityItem type="warstory" title="The 47-minute disaster" linkedSection="gotchas">
  When we ignored the constraint chain and paid the price.
</ActivityItem>

<ActivityItem type="gradient" title="Context degradation" linkedSection="whats-hard">
  Watch for these symptoms as context fills up.
</ActivityItem>
```

---

### 2.3 CodeBlock with Copy Button

**File: `components/content/CodeBlock.tsx`**
```tsx
'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  children: string
  language?: string
  filename?: string
}

export function CodeBlock({ children, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-lg overflow-hidden mb-4">
      {filename && (
        <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm font-mono">
          {filename}
        </div>
      )}
      <pre className={`bg-gray-900 text-gray-100 p-4 overflow-x-auto ${filename ? '' : 'rounded-lg'}`}>
        <code className={language ? `language-${language}` : ''}>
          {children}
        </code>
      </pre>
      <button
        onClick={copy}
        className="absolute top-2 right-2 p-2 rounded bg-gray-700 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  )
}
```

---

### 2.4 Content Components Barrel Export

**File: `components/content/index.ts`**
```ts
export { EssenceBox } from './EssenceBox'
export { CoreAbstraction } from './CoreAbstraction'
export { DesignDecision } from './DesignDecision'
export { FileStructure } from './FileStructure'
export { PathOfTask } from './PathOfTask'
export { GotchaBox } from './GotchaBox'
export { WhatsHard } from './WhatsHard'
export { WhenToUse } from './WhenToUse'
export { CodeBlock } from './CodeBlock'
```

---

### 2.5 Register MDX Components

**File: `mdx-components.tsx`**
```tsx
import type { MDXComponents } from 'mdx/types'
import {
  EssenceBox,
  CoreAbstraction,
  DesignDecision,
  FileStructure,
  PathOfTask,
  GotchaBox,
  WhatsHard,
  WhenToUse,
  CodeBlock,
} from '@/components/content'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Custom components
    EssenceBox,
    CoreAbstraction,
    DesignDecision,
    FileStructure,
    PathOfTask,
    GotchaBox,
    WhatsHard,
    WhenToUse,
    // Override default code blocks
    pre: ({ children, ...props }) => {
      const code = (children as any)?.props?.children
      const language = (children as any)?.props?.className?.replace('language-', '')
      return <CodeBlock language={language}>{code}</CodeBlock>
    },
  }
}
```

---

## Phase 3: Layout System

### 3.1 Three-Panel Layout Component

**File: `components/layout/ThreePanelLayout.tsx`**
```tsx
'use client'

import { ReactNode } from 'react'
import { Header } from './Header'
import { LeftNav } from './LeftNav'
import { ActivityZone } from './ActivityZone'
import { Resizer } from './Resizer'
import { useNavigationStore } from '@/lib/store/providers'

interface ThreePanelLayoutProps {
  children: ReactNode
  activityItems?: any[]
}

export function ThreePanelLayout({ children, activityItems = [] }: ThreePanelLayoutProps) {
  const activityZoneWidth = useNavigationStore((s) => s.activityZoneWidth)

  return (
    <div className="min-h-screen bg-bg-base">
      <Header />

      <div className="flex pt-[var(--header-height)]">
        {/* Left Navigation - Fixed */}
        <aside
          className="fixed top-[var(--header-height)] left-0 h-[calc(100vh-var(--header-height))] overflow-y-auto border-r border-border bg-white z-40"
          style={{ width: 'var(--left-nav-width)' }}
        >
          <LeftNav />
        </aside>

        {/* Main Content - Flexible */}
        <main
          className="flex-1 min-h-[calc(100vh-var(--header-height))]"
          style={{
            marginLeft: 'var(--left-nav-width)',
            marginRight: `${activityZoneWidth}px`
          }}
        >
          <div className="max-w-4xl mx-auto px-8 py-12">
            {children}
          </div>
        </main>

        {/* Resizer */}
        <Resizer />

        {/* Activity Zone - Fixed, Resizable */}
        <aside
          className="fixed top-[var(--header-height)] right-0 h-[calc(100vh-var(--header-height))] overflow-y-auto border-l border-border bg-bg-subtle z-40"
          style={{ width: `${activityZoneWidth}px` }}
        >
          <ActivityZone items={activityItems} />
        </aside>
      </div>
    </div>
  )
}
```

---

### 3.2 Header Component

**File: `components/layout/Header.tsx`**
```tsx
import Link from 'next/link'
import { BookOpen, Search, Moon, Sun } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[var(--header-height)] bg-white border-b border-border z-50 flex items-center justify-between px-6">
      <Link href="/" className="flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-accent" />
        <span className="font-semibold">Claude Code</span>
      </Link>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-64 pl-10 pr-4 py-2 rounded-lg border border-border bg-bg-subtle text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-muted bg-bg-muted px-1.5 py-0.5 rounded">
            ⌘K
          </kbd>
        </div>
      </div>
    </header>
  )
}
```

---

### 3.3 LeftNav Component

**File: `components/layout/LeftNav.tsx`**
```tsx
'use client'

import { GrandNav } from '@/components/navigation/GrandNav'

export function LeftNav() {
  return (
    <div className="left-nav h-full">
      <GrandNav />
    </div>
  )
}
```

---

### 3.4 Resizer Component

**File: `components/layout/Resizer.tsx`**
```tsx
'use client'

import { useState, useCallback, useEffect } from 'react'
import { useNavigationStore } from '@/lib/store/providers'

export function Resizer() {
  const [isResizing, setIsResizing] = useState(false)
  const setActivityZoneWidth = useNavigationStore((s) => s.setActivityZoneWidth)
  const activityZoneWidth = useNavigationStore((s) => s.activityZoneWidth)

  const startResizing = useCallback(() => {
    setIsResizing(true)
    document.body.classList.add('resizing')
  }, [])

  const stopResizing = useCallback(() => {
    setIsResizing(false)
    document.body.classList.remove('resizing')
  }, [])

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = window.innerWidth - e.clientX
        const clampedWidth = Math.min(Math.max(newWidth, 280), 900)
        setActivityZoneWidth(clampedWidth)
      }
    },
    [isResizing, setActivityZoneWidth]
  )

  useEffect(() => {
    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResizing)
    return () => {
      window.removeEventListener('mousemove', resize)
      window.removeEventListener('mouseup', stopResizing)
    }
  }, [resize, stopResizing])

  return (
    <div
      className={`
        resizer fixed top-[var(--header-height)] h-[calc(100vh-var(--header-height))]
        w-1 cursor-ew-resize z-50 group
        ${isResizing ? 'bg-accent' : 'bg-transparent hover:bg-accent/50'}
      `}
      style={{ right: `${activityZoneWidth - 2}px` }}
      onMouseDown={startResizing}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-border rounded-full group-hover:bg-accent transition-colors" />
    </div>
  )
}
```

---

### 3.5 Layout Components Barrel Export

**File: `components/layout/index.ts`**
```ts
export { ThreePanelLayout } from './ThreePanelLayout'
export { Header } from './Header'
export { LeftNav } from './LeftNav'
export { ActivityZone } from './ActivityZone'
export { Resizer } from './Resizer'
```

---

## Phase 4: Navigation System

### 4.1 Navigation Data Structure (Complete - All 12 Categories, 44 Items)

**File: `content/navigation.json`**
```json
{
  "categories": [
    {
      "id": "core",
      "title": "Core Guides",
      "icon": "Star",
      "items": [
        { "slug": "master-playbook", "title": "The Complete Playbook" },
        { "slug": "judgment-guide", "title": "Decision Framework" },
        { "slug": "staff-engineer-mental-model", "title": "Staff Engineer Mindset" }
      ]
    },
    {
      "id": "architecture",
      "title": "Architecture",
      "icon": "Layers",
      "items": [
        { "slug": "architecture-complexity-ladder", "title": "Complexity Ladder" },
        { "slug": "architecture-composition-rules", "title": "Composition Rules" },
        { "slug": "architecture-domain-isolation", "title": "Domain Isolation" },
        { "slug": "architecture-primitives", "title": "Primitives" },
        { "slug": "architecture-swarm-topologies", "title": "Swarm Topologies" }
      ]
    },
    {
      "id": "mastery",
      "title": "Pattern Mastery",
      "icon": "Award",
      "items": [
        { "slug": "mastery-ralph-complete", "title": "Ralph Pattern" },
        { "slug": "mastery-gastown-complete", "title": "Gas Town Architecture" },
        { "slug": "mastery-ccmirror-complete", "title": "CC Mirror Orchestration" },
        { "slug": "mastery-context-management", "title": "Context Management" },
        { "slug": "mastery-multi-agent", "title": "Multi-Agent Systems" }
      ]
    },
    {
      "id": "compare",
      "title": "Comparisons",
      "icon": "GitCompare",
      "items": [
        { "slug": "compare-architecture", "title": "Architecture Patterns" },
        { "slug": "compare-cost", "title": "Cost Analysis" },
        { "slug": "compare-enterprise-orchestration", "title": "Enterprise Orchestration" },
        { "slug": "compare-memory", "title": "Memory Systems" },
        { "slug": "compare-observability", "title": "Observability" },
        { "slug": "compare-opencode-alternatives", "title": "OpenCode Alternatives" },
        { "slug": "compare-orchestration", "title": "Orchestration Patterns" },
        { "slug": "compare-ralph-variants-complete", "title": "Ralph Variants" }
      ]
    },
    {
      "id": "transform",
      "title": "Transformations",
      "icon": "ArrowRightLeft",
      "items": [
        { "slug": "transform-generalist-to-swarm", "title": "Generalist to Swarm" },
        { "slug": "transform-manual-to-filesystem", "title": "Manual to Filesystem" },
        { "slug": "transform-prompt-to-agent", "title": "Prompt to Agent" },
        { "slug": "transform-single-to-autonomous", "title": "Single to Autonomous" }
      ]
    },
    {
      "id": "taxonomy",
      "title": "Taxonomies",
      "icon": "Network",
      "items": [
        { "slug": "taxonomy-architectures", "title": "Architecture Types" },
        { "slug": "taxonomy-context-memory", "title": "Context & Memory" },
        { "slug": "taxonomy-cross-reference", "title": "Cross Reference" },
        { "slug": "taxonomy-deployment", "title": "Deployment Models" },
        { "slug": "taxonomy-enterprise-agents", "title": "Enterprise Agents" },
        { "slug": "taxonomy-orchestration", "title": "Orchestration Patterns" },
        { "slug": "taxonomy-skills-expanded", "title": "Skills Expanded" },
        { "slug": "taxonomy-tools", "title": "Tools & Utilities" },
        { "slug": "taxonomy-workflows", "title": "Workflow Types" }
      ]
    },
    {
      "id": "principles",
      "title": "Principles",
      "icon": "Compass",
      "items": [
        { "slug": "principles-core", "title": "Core Principles" },
        { "slug": "principles-anti-patterns", "title": "Anti-Patterns" },
        { "slug": "principles-derivation-guide", "title": "Derivation Guide" },
        { "slug": "principles-learning-loops", "title": "Learning Loops" }
      ]
    },
    {
      "id": "combinations",
      "title": "Combinations",
      "icon": "Puzzle",
      "items": [
        { "slug": "combinations-extensions", "title": "Extensions" },
        { "slug": "combinations-matrix", "title": "Pattern Matrix" },
        { "slug": "combinations-pairwise", "title": "Pairwise Combos" },
        { "slug": "combinations-triple-plus", "title": "Triple+ Combos" },
        { "slug": "combinations-unexplored", "title": "Unexplored Space" }
      ]
    },
    {
      "id": "frontier",
      "title": "Frontier",
      "icon": "Rocket",
      "items": [
        { "slug": "frontier-innovations", "title": "Innovations" },
        { "slug": "frontier-international", "title": "International" },
        { "slug": "frontier-mobile", "title": "Mobile Workflows" }
      ]
    },
    {
      "id": "grammar",
      "title": "Grammar",
      "icon": "BookOpen",
      "items": [
        { "slug": "grammar-plugins", "title": "Plugins" },
        { "slug": "grammar-syntax", "title": "Syntax Patterns" },
        { "slug": "grammar-vocabulary", "title": "Vocabulary" }
      ]
    },
    {
      "id": "technical",
      "title": "Technical Deep Dives",
      "icon": "Code",
      "items": [
        { "slug": "technical-context-management-advanced", "title": "Advanced Context Management" },
        { "slug": "technical-subagent-spawning-best-practices", "title": "Subagent Spawning" }
      ]
    },
    {
      "id": "reference",
      "title": "Reference",
      "icon": "FileText",
      "items": [
        { "slug": "reference-cost-economics", "title": "Cost Economics" }
      ]
    }
  ]
}
```

**Inventory: 12 categories, 44 synthesis items** (remaining ~100 items are in spotlight collection)

---

### 4.2 Grand Navigation Component

**File: `components/navigation/GrandNav.tsx`**
```tsx
'use client'

import { usePathname } from 'next/navigation'
import { NavCategory } from './NavCategory'
import { SearchFilter } from './SearchFilter'
import navigation from '@/content/navigation.json'

export function GrandNav() {
  const pathname = usePathname()
  const currentSlug = pathname.split('/').pop()

  return (
    <nav className="h-full flex flex-col">
      <SearchFilter />

      <div className="flex-1 overflow-y-auto py-4">
        {navigation.categories.map((category) => (
          <NavCategory
            key={category.id}
            {...category}
            currentSlug={currentSlug}
          />
        ))}
      </div>
    </nav>
  )
}
```

---

### 4.3 SearchFilter Component (Complete Implementation)

**File: `components/navigation/SearchFilter.tsx`**
```tsx
'use client'

import { useState, useMemo, useCallback } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import navigation from '@/content/navigation.json'

interface SearchResult {
  slug: string
  title: string
  category: string
  categoryTitle: string
}

export function SearchFilter() {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  // Flatten all items for searching
  const allItems = useMemo(() => {
    const items: SearchResult[] = []
    navigation.categories.forEach((category) => {
      category.items.forEach((item) => {
        items.push({
          slug: item.slug,
          title: item.title,
          category: category.id,
          categoryTitle: category.title,
        })
      })
    })
    return items
  }, [])

  // Filter items based on query
  const filteredItems = useMemo(() => {
    if (!query.trim()) return []

    const lowerQuery = query.toLowerCase()
    return allItems
      .filter((item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.slug.toLowerCase().includes(lowerQuery) ||
        item.categoryTitle.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 8) // Limit to 8 results
  }, [query, allItems])

  const clearSearch = useCallback(() => {
    setQuery('')
  }, [])

  const handleItemClick = useCallback(() => {
    setQuery('')
    setIsFocused(false)
  }, [])

  const showResults = isFocused && query.trim().length > 0

  return (
    <div className="relative px-4 py-3 border-b border-border">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        <input
          type="text"
          placeholder="Filter navigation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="w-full pl-9 pr-8 py-2 rounded-lg border border-border bg-bg-subtle text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-4 right-4 top-full mt-1 bg-white rounded-lg border border-border shadow-lg z-50 overflow-hidden"
          >
            {filteredItems.length > 0 ? (
              <ul className="py-1">
                {filteredItems.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/synthesis/${item.slug}`}
                      onClick={handleItemClick}
                      className="block px-3 py-2 hover:bg-bg-muted transition-colors"
                    >
                      <div className="text-sm font-medium text-text-primary">
                        {item.title}
                      </div>
                      <div className="text-xs text-text-muted">
                        {item.categoryTitle}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-3 py-4 text-sm text-text-muted text-center">
                No results for "{query}"
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

---

### 4.4 Collapsible NavCategory with Framer Motion

**File: `components/navigation/NavCategory.tsx`**
```tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useNavigationStore } from '@/lib/store/providers'
import { NavItem } from './NavItem'
import { PageSections } from './PageSections'
import * as Icons from 'lucide-react'

interface NavCategoryProps {
  id: string
  title: string
  icon: string
  items: Array<{ slug: string; title: string }>
  currentSlug?: string
}
// Note: defaultOpen removed - all categories pre-expanded via store initialization

const contentVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.2 }
    }
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.3, delay: 0.1 }
    }
  }
}

export function NavCategory({ id, title, icon, items, currentSlug }: NavCategoryProps) {
  const expandedSections = useNavigationStore((s) => s.expandedSections)
  const toggleSection = useNavigationStore((s) => s.toggleSection)

  // Auto-expand if contains current page (all pre-expanded via store)
  const containsCurrent = items.some(item => item.slug === currentSlug)
  const isExpanded = expandedSections.has(id) || containsCurrent

  // Icon lookup - use exact Lucide export names (PascalCase in JSON)
  const IconComponent = (Icons as Record<string, any>)[icon] || Icons.Folder

  return (
    <div className="mb-1">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-bg-muted rounded-lg transition-colors"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-4 h-4 text-text-muted" />
        </motion.div>
        <IconComponent className="w-4 h-4 text-text-muted" />
        <span className="font-medium text-text-secondary">{title}</span>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <div className="ml-4 pl-4 border-l border-border">
              {items.map((item) => (
                <div key={item.slug}>
                  <NavItem
                    slug={item.slug}
                    title={item.title}
                    isActive={item.slug === currentSlug}
                  />
                  {item.slug === currentSlug && (
                    <PageSections slug={item.slug} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

---

### 4.4 NavItem Component

**File: `components/navigation/NavItem.tsx`**
```tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface NavItemProps {
  slug: string
  title: string
  isActive?: boolean
}

export function NavItem({ slug, title, isActive }: NavItemProps) {
  return (
    <Link
      href={`/synthesis/${slug}`}
      scroll={false}
      className={`
        block px-3 py-1.5 text-sm rounded-md transition-colors
        ${isActive
          ? 'text-accent font-medium bg-accent/10'
          : 'text-text-muted hover:text-text-primary hover:bg-bg-muted'}
      `}
    >
      <motion.span
        animate={{ x: isActive ? 4 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.span>
    </Link>
  )
}
```

---

### 4.5 Page Sections (DYNAMIC - Extracts from DOM)

**File: `components/navigation/PageSections.tsx`**
```tsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useNavigationStore } from '@/lib/store/providers'

interface Section {
  id: string
  title: string
}

interface PageSectionsProps {
  slug: string
}

const listVariants = {
  collapsed: { opacity: 0 },
  expanded: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
}

const itemVariants = {
  collapsed: { opacity: 0, x: -10 },
  expanded: { opacity: 1, x: 0 }
}

export function PageSections({ slug }: PageSectionsProps) {
  const [sections, setSections] = useState<Section[]>([])
  const activeSection = useNavigationStore((s) => s.activeSection)

  // Extract sections from the DOM when the page loads
  useEffect(() => {
    const extractSections = () => {
      const headings = document.querySelectorAll('main section[id], main h2[id], main h3[id]')
      const extracted: Section[] = []

      headings.forEach((el) => {
        const id = el.id
        let title = ''
        if (el.tagName === 'SECTION') {
          const heading = el.querySelector('h2, h3')
          title = heading?.textContent?.trim() || id
        } else {
          title = el.textContent?.trim() || id
        }

        // Clean up title
        title = title
          .replace(/^\d+\.\s*/, '')
          .replace(/^[^\w\s]+\s*/, '')
          .trim()

        if (id && title && title.length < 60) {
          extracted.push({ id, title })
        }
      })

      setSections(extracted)
    }

    const timer = setTimeout(extractSections, 100)
    return () => clearTimeout(timer)
  }, [slug])

  if (sections.length === 0) return null

  return (
    <motion.div
      variants={listVariants}
      initial="collapsed"
      animate="expanded"
      className="ml-3 mt-1 mb-2 pl-3 border-l border-border/50"
    >
      {sections.map((section) => (
        <motion.div key={section.id} variants={itemVariants}>
          <Link
            href={`#${section.id}`}
            scroll={false}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(section.id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }}
            className={`
              block py-1 text-xs transition-colors truncate
              ${activeSection === section.id
                ? 'text-accent font-medium'
                : 'text-text-muted hover:text-text-primary'}
            `}
          >
            {section.title}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
```

---

### 4.6 Navigation Store (Pre-expand ALL Categories)

The store in Phase 8.1 initializes with ALL 12 categories pre-expanded:

```tsx
const ALL_CATEGORY_IDS = [
  'core', 'architecture', 'mastery', 'compare', 'transform',
  'taxonomy', 'principles', 'combinations', 'frontier', 'grammar',
  'technical', 'reference'
]

// In store initialization:
expandedSections: new Set(ALL_CATEGORY_IDS),
```

---

## Phase 5: Content Migration

### 5.1 Install Dependencies

**Required packages for migration scripts:**
```bash
npm install cheerio turndown @types/cheerio @types/turndown
```

---

### 5.2 HTML to MDX Converter (Complete with ALL Turndown Rules)

**File: `scripts/convert-html-to-mdx.ts`**
```typescript
import * as fs from 'fs'
import * as path from 'path'
import * as cheerio from 'cheerio'
import TurndownService from 'turndown'

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
})

// ========================================
// TURNDOWN RULES FOR ALL 8 CONTENT COMPONENT TYPES
// ========================================

// Rule 1: EssenceBox
turndown.addRule('essenceBox', {
  filter: (node) => node.classList?.contains('essence-box'),
  replacement: (content, node) => {
    const text = (node as HTMLElement).querySelector('.essence-text')?.textContent?.trim()
    return `<EssenceBox>\n${text}\n</EssenceBox>\n\n`
  }
})

// Rule 2: CoreAbstraction
turndown.addRule('coreAbstraction', {
  filter: (node) => node.classList?.contains('core-abstraction'),
  replacement: (content, node) => {
    const el = node as HTMLElement
    const philosophy = el.querySelector('blockquote')?.textContent?.trim() || ''
    const code = el.querySelector('code, pre')?.textContent?.trim() || ''
    const anchor = el.querySelector('.anchor-text')?.textContent?.trim() || ''
    return `<CoreAbstraction
  philosophy="${philosophy}"
  code={\`${code}\`}
  anchor="${anchor}"
/>\n\n`
  }
})

// Rule 3: DesignDecision
turndown.addRule('designDecision', {
  filter: (node) => node.classList?.contains('design-decision'),
  replacement: (content, node) => {
    const el = node as HTMLElement
    const why = el.querySelector('.decision-why, h4')?.textContent?.trim() || ''
    const reasoning = el.querySelector('.decision-reasoning, p')?.textContent?.trim() || ''
    const implication = el.querySelector('.decision-implication')?.textContent?.trim() || ''
    return `<DesignDecision
  why="${why}"
  reasoning="${reasoning}"
  implication="${implication}"
/>\n\n`
  }
})

// Rule 4: FileStructure
turndown.addRule('fileStructure', {
  filter: (node) => node.classList?.contains('file-structure'),
  replacement: (content, node) => {
    const el = node as HTMLElement
    const tree = el.querySelector('pre')?.textContent?.trim() || ''
    return `<FileStructure tree={\`${tree}\`} />\n\n`
  }
})

// Rule 5: PathOfTask
turndown.addRule('pathOfTask', {
  filter: (node) => node.classList?.contains('path-of-task'),
  replacement: (content, node) => {
    const el = node as HTMLElement
    const steps: string[] = []
    el.querySelectorAll('.step').forEach((step, i) => {
      const title = step.querySelector('.step-title')?.textContent?.trim() || ''
      const desc = step.querySelector('.step-description')?.textContent?.trim() || ''
      steps.push(`{ number: ${i + 1}, title: "${title}", description: "${desc}" }`)
    })
    return `<PathOfTask steps={[${steps.join(', ')}]} />\n\n`
  }
})

// Rule 6: GotchaBox
turndown.addRule('gotchaBox', {
  filter: (node) => node.classList?.contains('gotcha-box') || node.classList?.contains('warning-box'),
  replacement: (content, node) => {
    const el = node as HTMLElement
    const symptom = el.querySelector('.gotcha-symptom, h4')?.textContent?.trim() || ''
    const why = el.querySelector('.gotcha-why')?.textContent?.trim() || ''
    const fix = el.querySelector('.gotcha-fix')?.textContent?.trim() || ''
    return `<GotchaBox symptom="${symptom}" why="${why}" fix="${fix}" />\n\n`
  }
})

// Rule 7: WhatsHard
turndown.addRule('whatsHard', {
  filter: (node) => node.classList?.contains('whats-hard'),
  replacement: (content, node) => {
    const el = node as HTMLElement
    const tension = el.querySelector('.tension-title, h4')?.textContent?.trim() || ''
    const symptoms: string[] = []
    el.querySelectorAll('li').forEach(li => symptoms.push(`"${li.textContent?.trim()}"`))
    const mitigation = el.querySelector('.mitigation')?.textContent?.trim() || ''
    return `<WhatsHard
  tension="${tension}"
  symptoms={[${symptoms.join(', ')}]}
  mitigation="${mitigation}"
/>\n\n`
  }
})

// Rule 8: WhenToUse
turndown.addRule('whenToUse', {
  filter: (node) => node.classList?.contains('when-to-use'),
  replacement: (content, node) => {
    const el = node as HTMLElement
    const useItems: string[] = []
    const dontUseItems: string[] = []
    el.querySelectorAll('.use-when li').forEach(li => useItems.push(`"${li.textContent?.trim()}"`))
    el.querySelectorAll('.dont-use li').forEach(li => dontUseItems.push(`"${li.textContent?.trim()}"`))
    return `<WhenToUse
  use={[${useItems.join(', ')}]}
  dontUse={[${dontUseItems.join(', ')}]}
/>\n\n`
  }
})

// ========================================
// CONVERSION FUNCTION
// ========================================

async function convertFile(htmlPath: string, outputDir: string) {
  const html = fs.readFileSync(htmlPath, 'utf-8')
  const $ = cheerio.load(html)

  const title = $('title').text().split('|')[0].trim()
  const essence = $('.essence-box .essence-text').text().trim()
  const category = determineCategoryFromSlug(htmlPath)

  const mainContent = $('.main-content, .content-panel, main').html() || ''
  const mdxContent = turndown.turndown(mainContent)
  const activityItems = extractActivityItems($)

  const mdx = `---
title: "${title}"
essence: "${essence}"
category: "${category}"
order: 999
---

${mdxContent}
`

  const slug = path.basename(htmlPath, '.html')
  const outDir = path.join(outputDir, slug)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.mdx'), mdx)
  fs.writeFileSync(path.join(outDir, 'activity.json'), JSON.stringify({ items: activityItems }, null, 2))
  console.log(`Converted: ${slug}`)
}

function determineCategoryFromSlug(filePath: string): string {
  const slug = path.basename(filePath, '.html')
  if (slug.startsWith('architecture-')) return 'architecture'
  if (slug.startsWith('mastery-')) return 'mastery'
  if (slug.startsWith('compare-')) return 'compare'
  if (slug.startsWith('transform-')) return 'transform'
  if (slug.startsWith('taxonomy-')) return 'taxonomy'
  if (slug.startsWith('principles-')) return 'principles'
  if (slug.startsWith('combinations-')) return 'combinations'
  if (slug.startsWith('frontier-')) return 'frontier'
  if (slug.startsWith('grammar-')) return 'grammar'
  if (slug.startsWith('technical-')) return 'technical'
  if (slug.startsWith('reference-')) return 'reference'
  return 'core'
}

function extractActivityItems($: cheerio.CheerioAPI) {
  const items: any[] = []
  $('.activity-item').each((i, el) => {
    const $el = $(el)
    items.push({
      id: `${$el.data('type') || 'invariant'}-${i}`,
      type: $el.data('type') || 'invariant',
      linkedSection: $el.data('activity') || $el.data('section') || '',
      title: $el.find('.activity-label, .activity-title').text().trim(),
      content: $el.find('p, .activity-content').text().trim()
    })
  })
  return items
}

// ========================================
// RUN CONVERSION (Synthesis + Spotlight)
// ========================================

// Convert synthesis files
const synthesisDir = './html-site/synthesis'
if (fs.existsSync(synthesisDir)) {
  fs.readdirSync(synthesisDir)
    .filter(f => f.endsWith('.html'))
    .forEach(f => convertFile(path.join(synthesisDir, f), './content/synthesis'))
}

// Convert spotlight files (extractions deep-dives)
const spotlightDir = './html-site/extractions/spotlight'
if (fs.existsSync(spotlightDir)) {
  fs.readdirSync(spotlightDir)
    .filter(f => f.endsWith('.html'))
    .forEach(f => convertFile(path.join(spotlightDir, f), './content/spotlight'))
}
```

---

### 5.3 Example MDX Output

**Expected format: `content/synthesis/architecture-complexity-ladder/index.mdx`**
```mdx
---
title: "Architecture Complexity Ladder"
essence: "Match complexity to need: single session < file-persistent < multi-agent < factory-scale"
category: "architecture"
order: 1
---

<EssenceBox>
Match complexity to need: single session < file-persistent < multi-agent < factory-scale
</EssenceBox>

## The Core Abstraction

<CoreAbstraction
  philosophy="Every level of complexity adds coordination overhead. Only climb when lower levels fail."
  code={`Level 0: Single Session
Level 1: File-Persistent
Level 2: Multi-Session
Level 3: Multi-Agent
Level 4: Orchestrated
Level 5: Factory-Scale`}
  anchor="The question isn't 'what's most powerful?' but 'what's sufficient?'"
/>

## The Gotchas

<GotchaBox
  symptom="Agent keeps losing context mid-task"
  why="You're at Level 0 when you need Level 1"
  fix="Add CLAUDE.md for persistent instructions"
/>

## When To Use

<WhenToUse
  use={["Task requires multiple related queries", "You need state across sessions"]}
  dontUse={["Single question/answer interactions", "Tasks completable in one window"]}
/>
```

---

### 5.4 Manual Cleanup Checklist

For each converted file, verify:

- [ ] Frontmatter complete (title, essence, category, order)
- [ ] All 8 sections use correct MDX components
- [ ] Code blocks render with syntax highlighting
- [ ] Internal links point to correct slugs (`/synthesis/[slug]`)
- [ ] Activity Zone JSON has all items with correct types
- [ ] No broken HTML or escaped character issues
- [ ] Images moved to `public/static/`
- [ ] Quotes in JSX props properly escaped

---

## Phase 6: Activity Zone System

### 6.1 Activity Zone Container (Complete with Click-to-Scroll)

**File: `components/layout/ActivityZone.tsx`**
```tsx
'use client'

import { useCallback } from 'react'
import { useNavigationStore } from '@/lib/store/providers'
import {
  InvariantConnection,
  SecondOrderEffect,
  CompositionCase,
  ResearchFrontier,
  WarStory,
  AlternativePath,
  InversionLens,
  ConstraintChain,
  FailureGradient,
  TimeHorizonShift,
  ViolationChain,
  TradeOffTension,
  AnalogicalBridge,
  ExpertiseGradient,
  MinimalPattern,
  InflectionPoint,
} from '@/components/activity-zone'

interface ActivityItem {
  id: string
  type: string
  linkedSection: string
  title: string
  content: string
}

interface ActivityZoneProps {
  items: ActivityItem[]
}

// Complete component map for ALL 16 Activity Zone types
const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  invariant: InvariantConnection,
  effect: SecondOrderEffect,
  composition: CompositionCase,
  frontier: ResearchFrontier,
  warstory: WarStory,
  alternative: AlternativePath,
  inversion: InversionLens,
  constraint: ConstraintChain,
  gradient: FailureGradient,
  horizon: TimeHorizonShift,
  violation: ViolationChain,
  tradeoff: TradeOffTension,
  analogy: AnalogicalBridge,
  expertise: ExpertiseGradient,
  minimal: MinimalPattern,
  inflection: InflectionPoint,
}

export function ActivityZone({ items }: ActivityZoneProps) {
  const activeSection = useNavigationStore((s) => s.activeSection)
  const setActiveSection = useNavigationStore((s) => s.setActiveSection)

  // BIDIRECTIONAL: Click Activity Zone item -> scroll Main Panel to section
  const handleItemClick = useCallback((linkedSection: string) => {
    const element = document.getElementById(linkedSection)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(linkedSection)
    }
  }, [setActiveSection])

  return (
    <div className="p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
        Operational Intelligence
      </div>

      <div className="space-y-2">
        {items.map((item) => {
          const Component = COMPONENT_MAP[item.type]
          if (!Component) return null

          return (
            <Component
              key={item.id}
              title={item.title}
              linkedSection={item.linkedSection}
              isActive={activeSection === item.linkedSection}
              onClick={() => handleItemClick(item.linkedSection)}
            >
              {item.content}
            </Component>
          )
        })}
      </div>
    </div>
  )
}
```

---

### 6.2 Base ActivityItem Component (Polymorphic with Click Handler)

**File: `components/activity-zone/ActivityItem.tsx`**
```tsx
'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ActivityItemProps {
  type: string
  icon: LucideIcon
  color: string
  title: string
  linkedSection: string
  isActive?: boolean
  isHovered?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export function ActivityItem({
  type,
  icon: Icon,
  color,
  title,
  linkedSection,
  isActive,
  isHovered,
  onClick,
  children
}: ActivityItemProps) {
  return (
    <motion.div
      data-section={linkedSection}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      className={`
        border-l-4 rounded-r-lg p-4 mb-3 cursor-pointer
        transition-all duration-200
        ${isActive ? 'bg-white shadow-md scale-[1.02]' : 'bg-white/50'}
        ${isHovered ? 'bg-white/80' : ''}
        hover:bg-white hover:shadow-sm
        focus:outline-none focus:ring-2 focus:ring-accent/50
      `}
      style={{ borderLeftColor: color }}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: isActive ? 1 : 0.7, x: isActive ? 4 : 0 }}
      whileHover={{ opacity: 1, x: 2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4" style={{ color }} />
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color }}>
          {type.replace('-', ' ')}
        </span>
      </div>
      <h4 className="font-medium text-sm mb-1">{title}</h4>
      <div className="text-xs text-text-muted">{children}</div>
    </motion.div>
  )
}
```

---

### 6.3 Bidirectional Scroll Sync Hook

**File: `lib/hooks/use-scroll-sync.ts`**
```tsx
'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useNavigationStore } from '@/lib/store/providers'

export function useScrollSync() {
  const setActiveSection = useNavigationStore((s) => s.setActiveSection)
  const activeSection = useNavigationStore((s) => s.activeSection)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Direction 1: Main panel scroll -> Activity Zone highlight
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    )

    document.querySelectorAll('main section[id], main h2[id], main h3[id]').forEach((section) => {
      observerRef.current?.observe(section)
    })

    return () => observerRef.current?.disconnect()
  }, [setActiveSection])

  // Direction 2: Active section change -> scroll Activity Zone item into view
  useEffect(() => {
    if (!activeSection) return
    const activityItem = document.querySelector(`[data-section="${activeSection}"]`) as HTMLElement
    if (activityItem) {
      activityItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [activeSection])

  // Utility: Scroll to section (for click handlers)
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }, [setActiveSection])

  return { activeSection, scrollToSection, setActiveSection }
}
```

---

### 6.4 Hover Brushing Interaction (Optional Enhancement)

**File: `lib/hooks/use-hover-brush.ts`**
```tsx
'use client'

import { useState, useCallback } from 'react'

/**
 * Optional "brushing" interaction: hovering over an Activity Zone item
 * highlights the corresponding section in the main panel (preview before click).
 */
export function useHoverBrush() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  const handleMouseEnter = useCallback((section: string) => {
    setHoveredSection(section)
    document.getElementById(section)?.classList.add('hover-highlight')
  }, [])

  const handleMouseLeave = useCallback(() => {
    document.querySelectorAll('.hover-highlight').forEach(el => {
      el.classList.remove('hover-highlight')
    })
    setHoveredSection(null)
  }, [])

  return { hoveredSection, setHoveredSection, handleMouseEnter, handleMouseLeave }
}
```

**Add to `globals.css`:**
```css
/* Hover brushing highlight */
.hover-highlight {
  background-color: rgba(13, 147, 115, 0.05);
  outline: 2px dashed rgba(13, 147, 115, 0.3);
  outline-offset: 4px;
  transition: all 0.2s ease;
}
```

---

### 6.5 Activity Zone Index (Export All 16 Types)

**File: `components/activity-zone/index.ts`**
```tsx
export { ActivityItem } from './ActivityItem'
export { InvariantConnection } from './InvariantConnection'
export { SecondOrderEffect } from './SecondOrderEffect'
export { CompositionCase } from './CompositionCase'
export { ResearchFrontier } from './ResearchFrontier'
export { WarStory } from './WarStory'
export { AlternativePath } from './AlternativePath'
export { InversionLens } from './InversionLens'
export { ConstraintChain } from './ConstraintChain'
export { FailureGradient } from './FailureGradient'
export { TimeHorizonShift } from './TimeHorizonShift'
export { ViolationChain } from './ViolationChain'
export { TradeOffTension } from './TradeOffTension'
export { AnalogicalBridge } from './AnalogicalBridge'
export { ExpertiseGradient } from './ExpertiseGradient'
export { MinimalPattern } from './MinimalPattern'
export { InflectionPoint } from './InflectionPoint'
```

---

## Phase 7: Animations & Transitions

### 7.1 Page Transition System

**File: `components/transitions/FrozenRouter.tsx`**
```tsx
'use client'

/**
 * WARNING: This component uses unstable Next.js internals (LayoutRouterContext).
 * The import path 'next/dist/shared/lib/app-router-context.shared-runtime' may
 * change or break in future Next.js versions without notice.
 *
 * ALTERNATIVE: Consider using the `next-view-transitions` package for a more
 * stable approach to page transitions. Install via:
 *   npm install next-view-transitions
 *
 * Usage with next-view-transitions:
 *   import { ViewTransitions } from 'next-view-transitions'
 *   // Wrap your layout with <ViewTransitions>
 */

import { useRef, useContext, ReactNode } from 'react'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export function FrozenRouter({ children }: { children: ReactNode }) {
  const context = useContext(LayoutRouterContext)
  const frozen = useRef(context).current

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  )
}
```

**File: `components/transitions/PageTransition.tsx`**
```tsx
'use client'

import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelectedLayoutSegment } from 'next/navigation'
import { FrozenRouter } from './FrozenRouter'

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const segment = useSelectedLayoutSegment()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={segment}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
          duration: 0.2,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <FrozenRouter>
          {children}
        </FrozenRouter>
      </motion.div>
    </AnimatePresence>
  )
}
```

**File: `app/(docs)/template.tsx`**
```tsx
import { PageTransition } from '@/components/transitions/PageTransition'

export default function DocsTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageTransition>{children}</PageTransition>
}
```

---

### 7.2 Animation Variants Library

**File: `components/transitions/variants.ts`**
```tsx
export const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const slideUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const slideRightVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
}

export const expandVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.2 }
    }
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.3, delay: 0.1 }
    }
  }
}

export const staggerContainerVariants = {
  collapsed: { opacity: 0 },
  expanded: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

export const staggerItemVariants = {
  collapsed: { opacity: 0, x: -10 },
  expanded: { opacity: 1, x: 0 }
}

/**
 * Reduced motion variants - use these when prefers-reduced-motion is enabled.
 * Removes movement animations, keeps opacity transitions.
 */
export const reducedMotionVariants = {
  fadeOnly: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.15 } },
    exit: { opacity: 0, transition: { duration: 0.1 } }
  },
  expandCollapse: {
    collapsed: { height: 0, opacity: 0, transition: { duration: 0.15 } },
    expanded: { height: 'auto', opacity: 1, transition: { duration: 0.15 } }
  }
}
```

---

### 7.3 Reduced Motion Support

Add to `app/globals.css`:
```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**File: `lib/hooks/use-reduced-motion.ts`**
```tsx
'use client'

import { useState, useEffect } from 'react'

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}
```

Usage in components:
```tsx
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion'
import { slideUpVariants, reducedMotionVariants } from '@/components/transitions/variants'

function MyComponent() {
  const reducedMotion = useReducedMotion()
  const variants = reducedMotion ? reducedMotionVariants.fadeOnly : slideUpVariants

  return (
    <motion.div variants={variants} initial="initial" animate="animate">
      {/* content */}
    </motion.div>
  )
}
```

---

## Phase 8: Integration & Polish

### 8.1 State Management Setup

**File: `lib/store/navigation-store.ts`**
```tsx
import { create } from 'zustand'

// All category IDs that should be expanded by default
const ALL_CATEGORY_IDS = [
  'core',
  'architecture',
  'mastery',
  'compare',
  'transform',
  'taxonomy',
  'principles',
  'combinations',
  'frontier',
  'grammar',
  'technical',
  'reference',
]

interface NavigationState {
  // Panel width
  activityZoneWidth: number
  setActivityZoneWidth: (width: number) => void

  // Expanded nav sections
  expandedSections: Set<string>
  toggleSection: (id: string) => void

  // Active section (scroll sync)
  activeSection: string | null
  setActiveSection: (section: string | null) => void
}

export const useNavigationStore = create<NavigationState>()((set) => ({
  activityZoneWidth: 480,
  setActivityZoneWidth: (width) => set({ activityZoneWidth: width }),

  // Initialize with ALL categories expanded for better discoverability
  expandedSections: new Set(ALL_CATEGORY_IDS),
  toggleSection: (id) => set((state) => {
    const next = new Set(state.expandedSections)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    return { expandedSections: next }
  }),

  activeSection: null,
  setActiveSection: (section) => set({ activeSection: section }),
}))
```

---

### 8.2 Providers Component

**File: `lib/store/providers.tsx`**
```tsx
'use client'

import { ReactNode } from 'react'

// Re-export the store for convenience
export { useNavigationStore } from './navigation-store'

interface ProvidersProps {
  children: ReactNode
}

/**
 * Client-side providers wrapper.
 * Simple pass-through since we're using in-memory Zustand store.
 */
export function Providers({ children }: ProvidersProps) {
  return <>{children}</>
}
```

---

### 8.3 Error Handling Files

**File: `app/error.tsx`** (Root error boundary)
```tsx
'use client'

import { useEffect } from 'react'

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to error reporting service
    console.error('Root error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-base">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Something went wrong
        </h1>
        <p className="text-text-muted mb-6">
          An unexpected error occurred. We've been notified and are working on a fix.
        </p>
        {error.digest && (
          <p className="text-xs text-text-muted mb-6">
            Error ID: {error.digest}
          </p>
        )}
        <button
          onClick={reset}
          className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
```

**File: `app/(docs)/error.tsx`** (Docs-specific error boundary)
```tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function DocsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Docs error:', error)
  }, [error])

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">📄</div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Failed to load documentation
        </h2>
        <p className="text-text-muted mb-6">
          There was a problem loading this page. The content may have moved or there could be a temporary issue.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/synthesis/master-playbook"
            className="px-4 py-2 border border-border rounded-lg hover:bg-bg-muted transition-colors"
          >
            Go to Playbook
          </Link>
        </div>
      </div>
    </div>
  )
}
```

---

### 8.4 Not Found Page

**File: `app/not-found.tsx`**
```tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-base">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Page not found
        </h1>
        <p className="text-text-muted mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/synthesis/master-playbook"
            className="px-6 py-3 border border-border rounded-lg hover:bg-bg-muted transition-colors"
          >
            Browse documentation
          </Link>
        </div>
      </div>
    </div>
  )
}
```

---

### 8.5 Loading States

**File: `app/loading.tsx`** (Root loading)
```tsx
export default function RootLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-base">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="text-text-muted text-sm">Loading...</p>
      </div>
    </div>
  )
}
```

**File: `app/(docs)/loading.tsx`** (Docs skeleton)
```tsx
export default function DocsLoading() {
  return (
    <div className="animate-pulse">
      {/* Essence box skeleton */}
      <div className="bg-bg-muted rounded-r-lg p-6 mb-8 border-l-4 border-bg-muted">
        <div className="h-3 w-24 bg-bg-subtle rounded mb-3" />
        <div className="h-5 w-full bg-bg-subtle rounded" />
      </div>

      {/* Section skeleton */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-bg-muted" />
          <div className="h-6 w-48 bg-bg-muted rounded" />
        </div>
        <div className="space-y-3">
          <div className="h-4 w-full bg-bg-muted rounded" />
          <div className="h-4 w-5/6 bg-bg-muted rounded" />
          <div className="h-4 w-4/6 bg-bg-muted rounded" />
        </div>
      </div>

      {/* Code block skeleton */}
      <div className="mb-12">
        <div className="h-32 w-full bg-bg-muted rounded-lg" />
      </div>

      {/* Another section skeleton */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-bg-muted" />
          <div className="h-6 w-36 bg-bg-muted rounded" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="h-24 bg-bg-muted rounded-lg" />
          <div className="h-24 bg-bg-muted rounded-lg" />
        </div>
      </div>
    </div>
  )
}
```

**File: `app/(docs)/synthesis/[slug]/loading.tsx`** (Same as docs loading)
```tsx
export { default } from '../../loading'
```

---

### 8.6 Root Layout with Providers

**File: `app/layout.tsx`**
```tsx
import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata: Metadata = {
  title: 'Claude Code Knowledge Base',
  description: '144 pages of AI-assisted development patterns and workflows',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
```

---

### 8.3 Docs Layout

**File: `app/(docs)/layout.tsx`**
```tsx
import { ThreePanelLayout } from '@/components/layout/ThreePanelLayout'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThreePanelLayout>
      {children}
    </ThreePanelLayout>
  )
}
```

---

### 8.4 Dynamic Page Component

**File: `app/(docs)/synthesis/[slug]/page.tsx`**
```tsx
import { notFound } from 'next/navigation'
import { synthesis } from '@/.velite'
import { MDXContent } from '@/components/mdx/MDXContent'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return synthesis.map((doc) => ({
    slug: doc.slug.split('/').pop(),
  }))
}

export default async function SynthesisPage({ params }: PageProps) {
  const { slug } = await params
  const doc = synthesis.find((d) => d.slug.endsWith(slug))

  if (!doc) notFound()

  return (
    <article>
      <MDXContent code={doc.content} />
    </article>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const doc = synthesis.find((d) => d.slug.endsWith(slug))

  return {
    title: doc?.title || 'Documentation',
    description: doc?.description,
  }
}
```

---

## Optimized Execution Timeline

### Compressed 10-12 Day Parallel Execution Plan

The plan is optimized to 10-12 days by running three parallel workstreams after initial setup.

```
Day 1-2: Foundation (Sequential)
├── Phase 1: Project Setup
│   ├── Next.js project initialization
│   ├── All dependencies installed
│   ├── Tailwind + Velite configured
│   └── Global styles in place

Days 3-8: Parallel Execution (3 Streams)
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  STREAM A: Components          STREAM B: Content        STREAM C: Nav   │
│  (Days 3-5)                    (Days 3-8)              (Days 3-5)       │
│                                                                         │
│  Day 3:                        Day 3:                  Day 3:           │
│  ├── EssenceBox               ├── Migration script    ├── nav.json     │
│  ├── CoreAbstraction          ├── 20 files converted  ├── GrandNav     │
│  ├── DesignDecision           │                       │                │
│  └── FileStructure            │                       │                │
│                               │                       │                │
│  Day 4:                        Day 4:                  Day 4:           │
│  ├── PathOfTask               ├── 25 files converted  ├── NavCategory  │
│  ├── GotchaBox                │                       ├── NavItem      │
│  ├── WhatsHard                │                       │                │
│  └── WhenToUse                │                       │                │
│                               │                       │                │
│  Day 5:                        Day 5:                  Day 5:           │
│  ├── CodeBlock                ├── 25 files converted  ├── PageSections │
│  ├── ActivityItem (base)      │                       ├── SearchFilter │
│  └── 8 Activity Zone types    │                       └── Integration  │
│                               │                       │                │
│  (Components complete)        Day 6:                  (Nav complete)   │
│                               ├── 25 files converted                   │
│                               │                                        │
│                               Day 7:                                   │
│                               ├── 24 files converted                   │
│                               │                                        │
│                               Day 8:                                   │
│                               ├── 25 files + cleanup                   │
│                               └── Manual QA pass                       │
│                                                                        │
└─────────────────────────────────────────────────────────────────────────┘

Days 9-10: Layout & Activity Zone (Parallel)
├── Stream A: Layout System
│   ├── ThreePanelLayout
│   ├── Header
│   ├── Resizer
│   └── ActivityZone container
│
└── Stream B: Remaining Activity Types
    ├── 8 remaining Activity Zone components
    └── Scroll sync hook

Days 11-12: Integration & Polish
├── FrozenRouter + PageTransition
├── Animation variants library
├── Reduced motion support
├── Zustand store (in-memory)
├── Error boundaries
├── Loading states
├── Connect all components
├── Cross-browser verification
└── Bug fixes

TOTAL: 10-12 days
```

### Stream Dependencies

```
Stream A (Components) ──────────────────────┐
                                            ├──▶ Layout Integration (Day 9)
Stream C (Navigation) ──────────────────────┘

Stream B (Content) ────────────────────────────▶ Content Integration (Day 10)

All Streams ───────────────────────────────────▶ Animation Layer (Day 11)
                                                        │
                                                        ▼
                                               Integration & Polish (Day 12)
```

### Staffing Options

| Team Size | Duration | Notes |
|-----------|----------|-------|
| 1 developer | 12 days | Full sequential with some parallelization |
| 2 developers | 10 days | One on components/layout, one on content |
| 3 developers | 8 days | Each stream gets a dedicated developer |

### Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Content conversion issues | Day 8 buffer for cleanup; start with P0 files |
| Component API changes | Lock component interfaces on Day 5 |
| Animation performance | Test on slow devices early (Day 6) |
| Integration conflicts | Daily sync meetings during Days 9-12 |

---

## Appendix: File Inventory

### Synthesis Files (75)
| File | Category | Priority |
|------|----------|----------|
| master-playbook.html | core | P0 |
| judgment-guide.html | core | P0 |
| staff-engineer-mental-model.html | core | P0 |
| architecture-complexity-ladder.html | architecture | P0 |
| mastery-ralph-complete.html | mastery | P0 |
| ... | ... | ... |

### Spotlight Files (69)
| File | Practitioner | Priority |
|------|--------------|----------|
| boris-cherny-extraction.html | Boris Cherny | P0 |
| yegge-gas-town-extraction.html | Steve Yegge | P0 |
| molly-panopticon-extraction.html | Molly Cantillon | P1 |
| ... | ... | ... |

---

## Next Steps

1. **Create the Next.js project** (Phase 1)
2. **Build core components** (Phase 2-3)
3. **Implement navigation** (Phase 4)
4. **Migrate content** (Phase 5)
5. **Add animations** (Phase 7)
6. **Integrate and polish** (Phase 8)

---

*Plan created: 2026-01-26*
*Last updated: 2026-01-26*
