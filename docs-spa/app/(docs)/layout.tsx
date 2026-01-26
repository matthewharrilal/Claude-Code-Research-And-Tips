import { ThreePanelLayout } from '@/components/layout'
import { CopyButtonHandler } from '@/components/content'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThreePanelLayout>
      <CopyButtonHandler />
      {children}
    </ThreePanelLayout>
  )
}
