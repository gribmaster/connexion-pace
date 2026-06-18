'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { HtmlContent } from '@/components/HtmlContent'
import { useLocale } from '@/lib/i18n/useLocale'
import { legalContent } from '@/lib/legalContent'

type Props = {
  type: 'terms' | 'privacy'
}

export function LegalPageContent({ type }: Props) {
  const { locale, dict } = useLocale()
  const content = legalContent[locale]
  const title = type === 'terms' ? content.termsTitle : content.privacyTitle
  const html = type === 'terms' ? content.termsHtml : content.privacyHtml

  return (
    <main className="flex min-h-screen justify-center bg-[#000000] py-8">
      <Container>
        <Link
          href="/login"
          className="inline-block mb-6 text-sm text-[#D2AF9C]/80 underline underline-offset-2 hover:text-[#D2AF9C]"
        >
          ← {dict.common.back}
        </Link>
        <h1 className="font-semibold text-[20px] leading-[120%] text-[#D2AF9C] mb-5">
          {title}
        </h1>
        <HtmlContent
          html={html}
          className="text-sm text-[#D2AF9C] leading-relaxed legal-content [&_h2]:text-base [&_h2]:font-semibold [&_h2]:mt-6 [&_h2]:mb-2 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1 [&_a]:underline"
        />
      </Container>
    </main>
  )
}
