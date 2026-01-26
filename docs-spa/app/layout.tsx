import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { LazyMotion, domAnimation } from 'framer-motion'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Claude Code Knowledge Base',
  description: '144 pages of AI-assisted development patterns and workflows',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
      </body>
    </html>
  )
}
