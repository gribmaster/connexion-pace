import { HtmlContent } from '@/components/HtmlContent'
import { getGameGuidanceContent } from '@/lib/gameGuidanceContent'
import type { AppLocale } from '@/lib/i18n/locales'

export function SurpriseInstruction({ locale }: { locale: AppLocale }) {
  const { dynamicsOfGameHtml } = getGameGuidanceContent(locale)
  return (
    <div className="text-sm leading-relaxed text-[#D2AF9C]">
      <HtmlContent html={dynamicsOfGameHtml} />
    </div>
  )
}
