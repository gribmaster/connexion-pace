import type { AppLocale } from './i18n/locales'

type GameGuidanceContent = {
  tuneIntoPlayHtml: string
  moreSuggestionsHtml: string
  dynamicsOfGameHtml: string
}

export const gameGuidanceContent: Record<AppLocale, GameGuidanceContent> = {
  et: {
    tuneIntoPlayHtml: `<p>Mängu alustades kuvatakse enne mängimist juhised:</p>
      <h5>Nõusolek</h5>
      <p>Veenduge, et te mõlemad soovite mängida. Austage teineteise piire ja soove.</p>
      <h5>Häälestuge</h5>
      <p>Tehke ruum korda, valige romantiline valgus ja sobiv muusika, veenduge, et teid ei segata, pange telefonid hääletuks või lülitage välja.</p>
      <h5>Õli kasutamine</h5>
      <p>Mõned kaardid eeldavad õli kasutamist. Veenduge, et teil on kvaliteetne intiimõli.</p>
      <h5>Puhtus</h5>
      <p>Peske kogu keha puhtaks, kaasa arvatud hambad, et mõlema kogemus oleks meeldiv.</p>
      <h5>Häälestumine</h5>
      <p>Enne mängu alustamist öelge endale:</p>
      <ul>
        <li>&bdquo;Võtan maha ootused iseendalt ja oma kaaslaselt ning sellelt, mis hakkab juhtuma.&ldquo;</li>
        <li>&bdquo;Praegu pühendun nautimisele, tulen hiljem argimõtete juurde tagasi.&ldquo;</li>
        <li>&bdquo;Olen valmis avastama ja kogema midagi uut.&ldquo;</li>
        <li>&bdquo;Luban enda kehal lõdvestuda, erutuda ja kogeda naudinguid.&ldquo;</li>
      </ul>`,
    moreSuggestionsHtml: `<h5>Spontaansus</h5>
      <p>Oluline on luua ühine naudingute ruum, kõikidest reeglitest ja juhenditest ei pea kinni pidama. Kui ajataju kaob, siis usaldage oma vaistu ja jätkake spontaanselt.</p>
      <h5>Täiuslikkus</h5>
      <p>Ei maksa muretseda, kui midagi kohe täiuslikult välja ei tule. Seksuaalsuse viimine sügavamatele tasanditele on teekond. Olge enda vastu leebed ja heatahtlikud.</p>
      <h5>Tagasiside</h5>
      <p>Pärast kaartide mängimist rääkige minasõnumina, mis meeldis, mida võiks teisiti teha ja mida korrata.</p>
      <p>Paus mehele: Kui erutus kasvab üle 70%, siis katseta järgnevaid tehnikaid:</p>
      <ul>
        <li>lõpeta tegevus täpselt seal, kus see pooleli jäi, ja oota, kuni erutus väheneb;</li>
        <li>pinguta kõiki keha lihaseid korraga, hoia hinge kinni 30 sekundit ja seejärel lase pingest lahti. Korda; too tähelepanu suguelunditelt südamesse või kulmude keskele;</li>
        <li>tugeva erutusega vahekorda astumine soodustab varajast ejakulatsiooni. Mine tagasi intiimsuse kaartide juurde, et erutus saaks väheneda.</li>
      </ul>
      <h5>Vastutus</h5>
      <p>Kumbki paarilistest vastutab iseenda füüsilise, vaimse ja emotsionaalse heaolu eest. Tugevate emotsioonide korral tutvuge &bdquo;Emotsioonide ABC-ga&ldquo;.</p>`,
    dynamicsOfGameHtml: `<p class="mb-2 font-medium"><strong>Kaartide kategooriad</strong></p>
      <ul class="space-y-1 mb-2">
        <li>ühendus – roheline</li>
        <li>intiimsus – lilla</li>
        <li>armatsemine – punane</li>
      </ul>
      <p class="mb-2 font-medium"><strong>Rolli valik</strong></p>
      <p class="mb-2">Kaardi tõmbaja otsustab, kes sooritab tegevust. Osal kaartidel on rollid paigas.</p>
      <p class="mb-2 font-medium"><strong>Kestus</strong></p>
      <p class="mb-2">Kaarte, millel on liivakella kujutis, on soovituslik teha vähemalt 5 minutit. Liivakella jälgib andja või pakkuja. Kui mõlemad on tegevuses, siis jälgib mees. Sobib kasutada ka leebe heliga taimerit.</p>
      <p class="mb-2 font-medium"><strong>Märguanded</strong></p>
      <p class="mb-2">
        Leppige omavahel kokku sõnatu suhtluse märgid: soovituslik aeg on läbi – võta kaaslase käed oma pihkudesse,
        soovid pausi – koputa kaaslase kehal 2 korda,
        soovid tugevamalt – pigista õrnalt kaaslase keha,
        soovid õrnemalt – tee sõrmeotstega vihmasabinat,
        soovid aeglasemalt – joonista kaaslase kehal ringe,
        soovid kiiremalt – silita sõrmega sirgjooneliselt.
        Kui tegevuse käigus märguanded ununevad, siis anna sõnadega märku.
      </p>`,
  },
  en: {
    tuneIntoPlayHtml: `<p>When starting the game, guidelines are presented before start of play:</p>
      <h5>Consent</h5>
      <p>Make sure that you both want to play. Respect each other&apos;s boundaries and desires.</p>
      <h5>Get in the mood</h5>
      <p>Arrange the room the way you want it, choose romantic lighting and mood music, make sure that you won&apos;t be disturbed, put your phones on silent or switch them off.</p>
      <h5>Use oil</h5>
      <p>Some cards require use of oil. Make sure you have a high-quality intimacy oil on hand.</p>
      <h5>Cleanliness</h5>
      <p>Wash your whole body, including brushing teeth, so ensure that there aren&apos;t any little turnoffs.</p>
      <h5>Get attuned</h5>
      <p>Before beginning play, tell yourselves:</p>
      <ul>
        <li>&ldquo;Neither of us have any expectations or preconceived notions about what might happen.&rdquo;</li>
        <li>&ldquo;I now devote myself to enjoying the moment. I&apos;ll come back to everyday thoughts later.&rdquo;</li>
        <li>&ldquo;I&apos;m ready to discover and experience something new.&rdquo;</li>
        <li>&ldquo;I&apos;m going to let my body relax, become aroused and experience pleasure.&rdquo;</li>
      </ul>`,
    moreSuggestionsHtml: `<h5>Spontaneity</h5>
      <p>Creating a shared pleasure space is what is important, not necessarily following all rules and guidelines for their own sake. If you lose track of time, trust your instincts and continue in a spontaneous manner.</p>
      <h5>Perfectionism</h5>
      <p>Don&apos;t sweat it if it doesn&apos;t come out exactly the way you intended. Taking sexuality to deeper levels is a journey. Don&apos;t be hard or too demanding on yourselves.</p>
      <h5>Feedback</h5>
      <p>After playing cards, talk to each other in the first person about what you liked, what could be different, and what could be repeated.</p>
      <p>Time out for the male partner: if arousal exceeds 70%, try the following techniques:</p>
      <ul>
        <li>pause the activity and wait until the arousal level subsides, then resume from exactly where you left off</li>
        <li>clench all the muscles in your body at once, hold your breath for 30 seconds and then release the tension. Repeat; bring your attention from the sex organs to your heart or your third eye</li>
        <li>if you begin intercourse while extremely aroused, that can make premature ejaculation more likely. Go back to the intimacy cards to let the arousal level subside a little</li>
      </ul>
      <h5>Responsibility</h5>
      <p>Each partner is responsible for their own physical, mental and emotional well-being. If you experience strong feelings, see &ldquo;ABCs of Emotions&rdquo;.</p>`,
    dynamicsOfGameHtml: `<p class="mb-2 font-medium"><strong>Card categories</strong></p>
      <ul class="space-y-1 mb-2">
        <li>Connection – Green</li>
        <li>Intimacy – purple</li>
        <li>Lovemaking – red</li>
      </ul>
      <p class="mb-2 font-medium"><strong>Choose a role</strong></p>
      <p class="mb-2">The partner who draws the card decides which partner is in the giving role. For some of the cards, the roles are spelled out.</p>
      <p class="mb-2 font-medium"><strong>Duration</strong></p>
      <p class="mb-2">Activities on cards with an hourglass symbol should be performed for at least 5 minutes. The giver or receiver keeps track of the timer. If both are performing the activity, the male partner keeps an eye on the hourglass. It’s also OK to use a timer with a low-key ringtone.</p>
      <p class="mb-2 font-medium"><strong>Signals:</strong></p>
      <p class="mb-2">
        Agree on non-verbal communication signals: “time is up” – take your partner’s hands into yours,
        “I need a break” – two gentle taps on your partner’s body,
        “harder” – squeeze your partner’s body gently,
        “gentler” – imitate falling raindrops with your fingertips,
        “slower” – trace circles on your partner’s body,
        “faster” – gently run your finger in a straight line.
        If you happen to forget one of the signals during play, use words instead.
      </p>`,
  },
}

export function getGameGuidanceContent(locale: AppLocale): GameGuidanceContent {
  return gameGuidanceContent[locale] ?? gameGuidanceContent.en
}
