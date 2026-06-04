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
      html: `<p>Ühenduskaartide eesmärk on muuta teid üksteise suhtes tähelepanelikumaks. Tugev emotsionaalne side on sügavama füüsilise sideme eelduseks.</p>
<p>Kaartidel olevad tegevused võimaldavad teil mõlema keha paremini tundma õppida ja viivad teid peast välja, nii et te ei ole oma mõtetesse mässitud, vaid tunnete ja olete oma kehas kohal.</p>
<p>Side on intiimsuse ja armastuse alus. Selles pakis kirjeldatud tegevused hoiavad paarisuhet värskena ja toetavad vastastikust lähedust. Ideaalis saab ühenduskaarte põimida igapäevaste tegevustega.</p>`,
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
      html: `<p>Intiimsuskaartide eesmärk on äratada keha naudingukanaleid ja lasta sellel kogeda erutust. Selle paki tegevused aitavad paaridel laiendada oma intiimsuse repertuaari.</p>
<p>Naise kehal kulub soojenemiseks tavaliselt 20–30 minutit. Selle aja jooksul mehe esialgu kõrgem erutus väheneb, võimaldades tal olla vastuvõtlikum naise kasvavale erutusele. Erutuse tase peaks ühtlustuma, võimaldades naudingul kauem kesta, ilma et peaks muretsema enneaegse seemnepurske pärast.</p>
<p>Intiimsuskaartidega seotud tegevused aeglustavad protsessi, keskendudes hetkele ja nautides teekonda, mitte sihtkohta. Eelmäng on peamine mänguvorm.</p>`,
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
      title: 'Armumine',
      html: `<p>Armatsemiskaartide eesmärk on edendada partnerite vahelist armastavat seksuaalset kontakti, rikastada nende erootilist maailma ning võimaldada neil kogeda õndsust, lõõgastust ja elus olemise joovastust.</p>
<p>Võite avastada uusi viise, kuidas laiendada suguelundites kogunevat erutust kogu keha hõlmavaks naudingutundeks. Armatsemine võib viia paarid ajatuse ruumi ja esile kutsuda kõrgendatud teadvusseisundi, mis väljendub mõlemas partneris õndsa ühtsustundena.</p>
<p>Usalduse, helluse ja aeglase uurimise kaudu võib sündida midagi ilusat ja võimsat – mis võib teie paarisuhte täielikult taaselustada. Armatsemiskaartidel olevad tegevused sisendavad arusaama, et seksuaalsus on pidev avastamisretk, mis aja jooksul kasvab ja areneda saab.</p>`,
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
