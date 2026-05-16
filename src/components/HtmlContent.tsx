type Props = {
  html: string | null | undefined
  className?: string
}

export function HtmlContent({ html, className }: Props) {
  if (!html) return null
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
