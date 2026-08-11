import type { AppLocale } from './i18n/locales'

type CategoryInfoEntry = {
  title: string
  html: string
}

type CategoryInfo = {
  et: CategoryInfoEntry
  en: CategoryInfoEntry
}

export const categoryInfoContent: Record<string, CategoryInfo> = {
  CONNECTION: {
    et: {
      title: 'Ühendus',
      html: `<p>Ühenduse kaartide eesmärk on häälestuda teineteisele. Ühtlasi aitavad need luua emotsionaalset ühendust, mis loob eelduse sügavama füüsilise sideme tekkele. Need tegevused pakuvad võimalust paremini tunnetada iseenda ja kaaslase keha ning liikuda mõtlemiselt keha tunnetusele. See on kui vundament, mille peale intiimsus ja armatsemine toetuvad. Sellised tegevused aitavad paarisuhtes hoida värskust ning omavahelist lähedust. Ühenduse kaarte sobib suurepäraselt ka igapäevaste toimetuste vahele põimida.</p>`,
    },
    en: {
      title: 'Connection Cards',
      html: `<p>The aim of the connection cards is to make you more attuned to each other. A strong emotional connection is a prerequisite for a deeper physical connection. </p>
<p>The activities on the cards allow you to get a better feel for both of your bodies, and get you out of your headspace, so you’re not wrapped up in your own mind, but sensing and being present in your bodies. </p>
<p>Connection is the foundation for intimacy and making love. The activities described in the cards in this pack keep a couple’s relationship fresh and support mutual closeness. Ideally, connection cards can be interwoven with your everyday activities.</p>`,
    },
  },
  INTIMACY: {
    et: {
      title: 'Intiimsus',
      html: `<p>Intiimsuse kaartide eesmärk on äratada kehalised naudingud ning kasvatada ja kogeda erutust. Need tegevused aitavad paaridel laiendada intiimsuse repertuaari. Naise keha soojeneb üles tavaliselt 20–30 minuti jooksul. Selle ajaga mehe suurem erutus väheneb, võimaldades tal naise kasvavat erutust paremini vastu võtta. Seeläbi ühtlustub mõlema erutuse tase ja mees võib püsida naudingus pikemalt, vältides enneaegset ejakulatsiooni. Intiimsuse kaartide tegevused võimaldavad aeglustuse teel tuua tähelepanu hetkesse ning nautida teekonda. Eelmäng ongi juba põhimäng.</p>`,
    },
    en: {
      title: 'Intimacy cards',
      html: `<p>The aim of the intimacy cards is to awaken the body’s pleasure channels and let it experience arousal. The activities in this pack help couples expand their repertoire of intimacy.</p>
<p>It usually takes 20–30 minutes for a woman’s body to warm up. During that time, the male partner’s initially higher arousal tapers off, allowing him to be a better recipient for the female’s own growing arousal. Arousal levels should equalize, allowing the pleasure to last longer without undue concern over premature ejaculation.</p>
<p>The activities linked to the intimacy cards slow down the process, putting the focus on the moment and on enjoying the journey, not the destination. Foreplay is the primary form of gameplay.</p>`,
    },
  },
  LOVEMAKING: {
    et: {
      title: 'Armatsemine',
      html: `<p>Armatsemise kaartide eesmärk on luua paaride vahel armastav seksuaalne ühendus, rikastada paaride erootilist maailma ning kogeda selle kaudu õnnetunnet, lõdvestust ja elurõõmu. Võite avastada uusi viise, kuidas muuta suguelunditesse kogunenud erutus kogu keha hõlmavaks naudinguks. Armatsemine võib viia ajatusse ruumi ning tekitada muutunud teadvuse seisundi, mis avaldub mõlemas kaaslases üksolemise ja õndsuse tundena. Usalduse, õrnuse ja aeglase teineteise uurimise toel võite luua midagi nii kaunist ja võimsat, et see toob värskust teie paarisuhtesse. Armatsemise kaartide tegevused aitavad mõista, et seksuaalsus on pidev avastamise teekond, arenedes ja laienedes aja jooksul.</p>`,
    },
    en: {
      title: 'Lovemaking cards',
      html: `<p>The aim of the lovemaking cards is to foster loving sexual contact between the partners, enrich their erotic world and allow them to experience bliss, relaxation and savor the exhilaration of being alive.</p>
<p>You may discover new ways of expanding the arousal building up in the genitals into a feeling of pleasure encompassing the entire body. Lovemaking can transport couples into a timeless space and bring on an enhanced state of consciousness that manifests as a blissful feeling of oneness in both partners.</p>
<p>Through trust, tenderness and slow exploration, something beautiful and powerful can be born – which could completely revitalize your relationship as a couple. The activities on the lovemaking cards instill the understanding that sexuality is a continuous journey of discovery, with growth and unfolding over time.</p>`,
    },
  },
}

export function getCategoryInfo(category: string, locale: AppLocale): CategoryInfoEntry {
  const entry = categoryInfoContent[category.toUpperCase()]
  if (!entry) return { title: category, html: '' }
  return entry[locale] ?? entry.et
}
