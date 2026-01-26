import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { LazyMotion, domAnimation } from 'framer-motion'
import './globals.css'

// Inter - Industry standard for technical documentation
// Excellent readability, substantial weight, used by GitHub/Vercel/Linear
// Variable font with optical sizing for crisp rendering at all sizes
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

// JetBrains Mono - Designed specifically for developers
// Excellent ligatures and character distinction
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
      </body>
    </html>
  )
}
