import { PageTransition } from '@/components/transitions'

export default function DocsTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageTransition>{children}</PageTransition>
}
