import 'dotenv/config'
import { Category, Locale, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const cards = [
  // =========================
  // CONNECTION — 8 cards
  // =========================
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Three things I appreciate about you',
        description: `<h5>Giver</h5>
          <ol>
            <li>Look at your partner and name three things you genuinely appreciate about them.</li>
            <li>Try to be specific: mention a quality, an action, and something small you often notice.</li>
            <li>Speak slowly and let each sentence land.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Listen without interrupting.</li>
            <li>Maintain soft eye contact if it feels comfortable.</li>
            <li>Afterwards, simply say “thank you”.</li>
          </ol>
          <p>Note: The goal is not to impress, but to make your partner feel seen.</p>`,
        additional: `<p>Appreciation creates safety. When people feel noticed and valued, they often become more open, relaxed and emotionally available.</p>
          <p>This exercise may feel simple, but small sincere words can have a surprisingly strong effect when they are spoken slowly and directly.</p>`,
      },
      ET: {
        title: 'Kolm asja, mida ma sinus hindan',
        description: `<h5>Andja</h5>
          <ol>
            <li>Vaata oma partnerile otsa ja nimeta kolm asja, mida sa temas siiralt hindad.</li>
            <li>Ole võimalikult konkreetne: maini üht omadust, üht tegu ja midagi väikest, mida sa sageli märkad.</li>
            <li>Räägi aeglaselt ja lase igal lausel kohale jõuda.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Kuula ilma vahele segamata.</li>
            <li>Hoia pehmet silmsidet, kui see tundub mugav.</li>
            <li>Lõpus ütle lihtsalt “aitäh”.</li>
          </ol>
          <p>Märkus: Eesmärk ei ole muljet avaldada, vaid panna partner tundma, et teda nähakse.</p>`,
        additional: `<p>Tänulikkus ja tunnustamine loovad turvatunnet. Kui inimene tunneb, et teda märgatakse ja väärtustatakse, on tal sageli lihtsam avaneda, lõdvestuda ja emotsionaalselt kohal olla.</p>
          <p>See harjutus võib tunduda lihtne, kuid aeglaselt ja siiralt öeldud väikesed sõnad võivad mõjuda üllatavalt tugevalt.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'A memory I keep returning to',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Take turns sharing one warm memory you have together.</li>
            <li>Describe where you were, what you felt, and what made that moment special.</li>
            <li>Try to include small details: sounds, smells, gestures or words.</li>
          </ol>
          <p>Note: Choose a memory that brings you closer, not one that starts a debate.</p>`,
        additional: `<p>Shared memories remind a couple that their relationship has a history, texture and emotional meaning.</p>
          <p>Returning to positive moments can help partners reconnect with the feeling of being on the same team.</p>`,
      },
      ET: {
        title: 'Mälestus, mille juurde ma ikka tagasi tulen',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Jagage kordamööda üht sooja ühist mälestust.</li>
            <li>Kirjeldage, kus te olite, mida tundsite ja miks see hetk oli eriline.</li>
            <li>Proovige lisada väikseid detaile: helisid, lõhnu, žeste või sõnu.</li>
          </ol>
          <p>Märkus: Valige mälestus, mis toob teid lähemale, mitte selline, mis tekitab vaidluse.</p>`,
        additional: `<p>Ühised mälestused tuletavad paarile meelde, et nende suhtel on ajalugu, sügavus ja emotsionaalne tähendus.</p>
          <p>Positiivsete hetkede meenutamine võib aidata taas tunda, et olete samas meeskonnas.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'One thing I want to understand better',
        description: `<h5>Speaker</h5>
          <ol>
            <li>Tell your partner one thing about them that you would like to understand better.</li>
            <li>Ask it gently, without pressure or criticism.</li>
          </ol>
          <h5>Listener</h5>
          <ol>
            <li>Answer only as much as you want.</li>
            <li>You can say “I need time to think about that” if needed.</li>
          </ol>
          <p>Note: Curiosity is different from interrogation.</p>`,
        additional: `<p>Healthy closeness grows when partners remain curious about each other instead of assuming they already know everything.</p>
          <p>A gentle question can open a door that everyday conversation usually passes by.</p>`,
      },
      ET: {
        title: 'Üks asi, mida ma tahaksin paremini mõista',
        description: `<h5>Rääkija</h5>
          <ol>
            <li>Ütle partnerile üks asi tema kohta, mida sa tahaksid paremini mõista.</li>
            <li>Küsi seda õrnalt, ilma surve või kriitikata.</li>
          </ol>
          <h5>Kuulaja</h5>
          <ol>
            <li>Vasta ainult nii palju, kui soovid.</li>
            <li>Vajadusel võid öelda: “Ma vajan aega, et sellele mõelda.”</li>
          </ol>
          <p>Märkus: Uudishimu ei ole sama mis ülekuulamine.</p>`,
        additional: `<p>Terve lähedus kasvab siis, kui partnerid jäävad teineteise suhtes uudishimulikuks ega eelda, et nad juba teavad kõike.</p>
          <p>Õrn küsimus võib avada ukse, millest igapäevane vestlus tavaliselt mööda läheb.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Silent eye contact',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Sit comfortably facing each other.</li>
            <li>Look into each other’s eyes for one minute.</li>
            <li>Do not speak. Just breathe and notice what you feel.</li>
            <li>Afterwards, share one sentence about the experience.</li>
          </ol>
          <p>Note: If it feels intense, soften your gaze or hold hands.</p>`,
        additional: `<p>Eye contact can feel vulnerable because it removes many distractions. It invites presence without needing words.</p>
          <p>Even a short moment of quiet attention can create a stronger sense of connection.</p>`,
      },
      ET: {
        title: 'Vaikne silmside',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Istuge mugavalt teineteise vastas.</li>
            <li>Vaadake ühe minuti jooksul teineteisele silma.</li>
            <li>Ärge rääkige. Lihtsalt hingake ja märgake, mida tunnete.</li>
            <li>Pärast jagage ühe lausega, milline see kogemus oli.</li>
          </ol>
          <p>Märkus: Kui see tundub liiga intensiivne, pehmenda pilku või hoia partneri käest kinni.</p>`,
        additional: `<p>Silmside võib tunduda haavatav, sest see eemaldab paljud segajad. See kutsub kohalolule ilma sõnadeta.</p>
          <p>Isegi lühike vaikne tähelepanuhetk võib luua tugevama ühenduse tunde.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'What helps me feel safe',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Take turns finishing the sentence: “I feel safe with you when...”</li>
            <li>Name actions, words or situations that help you relax.</li>
            <li>Listen carefully and do not defend or explain.</li>
          </ol>
          <p>Note: Safety can mean emotional, physical or practical comfort.</p>`,
        additional: `<p>Many conflicts become softer when partners understand what helps each other feel secure.</p>
          <p>This card turns safety into something practical: words and actions that can be repeated in daily life.</p>`,
      },
      ET: {
        title: 'Mis aitab mul end turvaliselt tunda',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Lõpetage kordamööda lause: “Ma tunnen end sinuga turvaliselt, kui...”</li>
            <li>Nimetage tegusid, sõnu või olukordi, mis aitavad teil lõdvestuda.</li>
            <li>Kuulake tähelepanelikult, ilma kaitsmata või selgitamata.</li>
          </ol>
          <p>Märkus: Turvatunne võib tähendada emotsionaalset, füüsilist või praktilist mugavust.</p>`,
        additional: `<p>Paljud konfliktid muutuvad pehmemaks, kui partnerid mõistavad, mis aitab teisel end kindlalt tunda.</p>
          <p>See kaart muudab turvatunde praktiliseks: sõnadeks ja tegudeks, mida saab igapäevaelus korrata.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'The small thing I noticed',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Tell your partner one small thing they did recently that you noticed.</li>
            <li>Explain why it mattered to you.</li>
            <li>Keep it simple and sincere.</li>
          </ol>
          <p>Note: Small things often carry big emotional meaning.</p>`,
        additional: `<p>Relationships are built not only on big gestures, but also on daily moments of care.</p>
          <p>When those moments are named, they become more visible and easier to repeat.</p>`,
      },
      ET: {
        title: 'Väike asi, mida ma märkasin',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Ütle partnerile üks väike asi, mida ta hiljuti tegi ja mida sa märkasid.</li>
            <li>Selgita, miks see sinu jaoks oluline oli.</li>
            <li>Hoia see lihtne ja siiras.</li>
          </ol>
          <p>Märkus: Väikesed asjad kannavad sageli suurt emotsionaalset tähendust.</p>`,
        additional: `<p>Suhted ei põhine ainult suurtel žestidel, vaid ka igapäevastel hoolimise hetkedel.</p>
          <p>Kui neid hetki nimetada, muutuvad need nähtavamaks ja neid on lihtsam korrata.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'A dream I rarely talk about',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Share one dream, wish or idea you do not often talk about.</li>
            <li>It can be realistic, silly, emotional or ambitious.</li>
            <li>The listener should ask one gentle follow-up question.</li>
          </ol>
          <p>Note: Do not evaluate the dream. Just explore it.</p>`,
        additional: `<p>Dreams reveal parts of us that everyday routines may hide.</p>
          <p>Listening to a partner’s hopes without judging them can create a feeling of support and emotional partnership.</p>`,
      },
      ET: {
        title: 'Unistus, millest ma harva räägin',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Jaga üht unistust, soovi või ideed, millest sa sageli ei räägi.</li>
            <li>See võib olla realistlik, naljakas, emotsionaalne või ambitsioonikas.</li>
            <li>Kuulaja esitab ühe õrna täpsustava küsimuse.</li>
          </ol>
          <p>Märkus: Ära hinda unistust. Lihtsalt uuri seda.</p>`,
        additional: `<p>Unistused näitavad osi meist, mida igapäevane rutiin võib varjata.</p>
          <p>Kui kuulata partneri lootusi ilma hinnanguta, võib see luua toetuse ja emotsionaalse partnerluse tunde.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'One honest sentence',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Take a breath and complete this sentence: “Right now, I feel...”</li>
            <li>Use simple words. Do not explain too much.</li>
            <li>Your partner only listens and reflects back what they heard.</li>
          </ol>
          <p>Note: Honesty does not have to be dramatic. It only has to be real.</p>`,
        additional: `<p>Many couples talk a lot, but rarely name what is happening inside them in the present moment.</p>
          <p>This exercise makes emotional presence simple: one sentence, one feeling, one listener.</p>`,
      },
      ET: {
        title: 'Üks aus lause',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Hinga sisse ja lõpeta lause: “Praegu ma tunnen...”</li>
            <li>Kasuta lihtsaid sõnu. Ära selgita liiga palju.</li>
            <li>Partner ainult kuulab ja peegeldab tagasi, mida ta kuulis.</li>
          </ol>
          <p>Märkus: Ausus ei pea olema dramaatiline. See peab lihtsalt olema päris.</p>`,
        additional: `<p>Paljud paarid räägivad palju, kuid harva nimetavad seda, mis nende sees just praegu toimub.</p>
          <p>See harjutus muudab emotsionaalse kohalolu lihtsaks: üks lause, üks tunne, üks kuulaja.</p>`,
      },
    },
  },

  // =========================
  // INTIMACY — 8 cards
  // =========================
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Stroking the head',
        description: `<h5>Giver</h5>
          <ol>
            <li>Rub your hands together to warm them up, and place them on your partner’s shoulders. Hold them there for 10 seconds.</li>
            <li>Gently and slowly run your fingertips along the sides and back of their neck.</li>
            <li>Continue along the ears and the backs of the ears.</li>
            <li>Caress the face, cheeks, chin, forehead and eyebrows.</li>
            <li>You can blow gently on the hairline, ears and neck.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Relax, close your eyes and enjoy.</li>
          </ol>
          <p>Note: Some people prefer gentle and slow caresses while others like more pressure.</p>`,
        additional: `<p>Couples who validate each other verbally tend to feel more content and sense that they have a stronger connection. A sincere “shout-out” to your partner makes them feel appreciated, seen and valued.</p>
          <p>It can feel awkward saying appreciative things if you’re not used to doing so. But making it a daily habit can make closeness feel more natural and easy.</p>`,
      },
      ET: {
        title: 'Pea silitamine',
        description: `<h5>Andja</h5>
          <ol>
            <li>Hõõru käsi kokku, et need soojaks läheksid, ja aseta need partneri õlgadele. Hoia neid seal 10 sekundit.</li>
            <li>Liiguta sõrmeotsi õrnalt ja aeglaselt mööda kaela külgi ja tagumist osa.</li>
            <li>Jätka kõrvade ja kõrvataguste piirkonnaga.</li>
            <li>Silita nägu, põski, lõuga, laupa ja kulme.</li>
            <li>Võid õrnalt puhuda juuksepiirile, kõrvadele ja kaelale.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Lõdvestu, sulge silmad ja naudi.</li>
          </ol>
          <p>Märkus: Mõned inimesed eelistavad õrnu ja aeglaseid paitusi, teised aga veidi tugevamat puudutust.</p>`,
        additional: `<p>Paarid, kes teineteist sõnadega kinnitavad ja tunnustavad, tunnevad sageli suuremat rahulolu ja tugevamat ühendust. Siiras tunnustus paneb partneri tundma, et teda hinnatakse, nähakse ja väärtustatakse.</p>
          <p>Kui sa pole harjunud tunnustavaid sõnu ütlema, võib see alguses tunduda veider. Kuid igapäevaseks harjumuseks muutudes hakkab lähedus tunduma loomulikum ja lihtsam.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Hand map',
        description: `<h5>Giver</h5>
          <ol>
            <li>Take your partner’s hand in yours.</li>
            <li>Slowly trace the lines of their palm with your fingertip.</li>
            <li>Move along each finger, the knuckles and the wrist.</li>
            <li>Notice warmth, texture and small reactions.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Let your hand be relaxed and heavy.</li>
            <li>If something feels especially pleasant, say “there”.</li>
          </ol>`,
        additional: `<p>Hands are expressive and sensitive. A slow, attentive touch can feel intimate without needing to be intense.</p>
          <p>This exercise helps partners practice noticing small signals and responding gently.</p>`,
      },
      ET: {
        title: 'Käe kaart',
        description: `<h5>Andja</h5>
          <ol>
            <li>Võta partneri käsi enda kätte.</li>
            <li>Liiguta sõrmeotsa aeglaselt mööda tema peopesa jooni.</li>
            <li>Liigu mööda igat sõrme, sõrmenukke ja rannet.</li>
            <li>Märka soojust, tekstuuri ja väikseid reaktsioone.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Lase käel olla lõdvestunud ja raske.</li>
            <li>Kui miski tundub eriti meeldiv, ütle “seal”.</li>
          </ol>`,
        additional: `<p>Käed on väljendusrikkad ja tundlikud. Aeglane, tähelepanelik puudutus võib tunduda intiimne ilma liigse intensiivsuseta.</p>
          <p>See harjutus aitab partneritel märgata väikseid signaale ja vastata neile õrnalt.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Breathing together',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Sit or lie close to each other.</li>
            <li>Place one hand on your own chest and one hand on your partner’s hand or shoulder.</li>
            <li>Breathe slowly together for one minute.</li>
            <li>Do not force the rhythm. Let it naturally become calmer.</li>
          </ol>`,
        additional: `<p>Shared breathing can calm the nervous system and create a sense of quiet closeness.</p>
          <p>It is a simple way to shift from thinking and talking into feeling and being present.</p>`,
      },
      ET: {
        title: 'Koos hingamine',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Istuge või lamage teineteise lähedal.</li>
            <li>Aseta üks käsi enda rinnale ja teine partneri käele või õlale.</li>
            <li>Hingake aeglaselt koos ühe minuti jooksul.</li>
            <li>Ärge sundige rütmi. Las see muutub loomulikult rahulikumaks.</li>
          </ol>`,
        additional: `<p>Koos hingamine võib rahustada närvisüsteemi ja luua vaikse läheduse tunde.</p>
          <p>See on lihtne viis liikuda mõtlemisest ja rääkimisest tundmise ja kohalolu juurde.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Shoulder release',
        description: `<h5>Giver</h5>
          <ol>
            <li>Stand or sit behind your partner.</li>
            <li>Place your hands on their shoulders and hold still for a few breaths.</li>
            <li>Slowly squeeze and release the shoulders.</li>
            <li>Use your thumbs to make small circles near the upper back.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Tell your partner if you want softer or stronger pressure.</li>
          </ol>`,
        additional: `<p>Tension often gathers in the shoulders. When a partner helps release it, the body can receive the message: “I can relax here.”</p>
          <p>Clear feedback makes touch feel safer and more enjoyable for both partners.</p>`,
      },
      ET: {
        title: 'Õlgade lõdvestamine',
        description: `<h5>Andja</h5>
          <ol>
            <li>Seisa või istu partneri taga.</li>
            <li>Aseta käed tema õlgadele ja hoia neid seal paar hingetõmmet.</li>
            <li>Vajuta õlgu aeglaselt ja lase lahti.</li>
            <li>Tee pöialdega väikseid ringe ülaselja piirkonnas.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Ütle partnerile, kas soovid pehmemat või tugevamat survet.</li>
          </ol>`,
        additional: `<p>Pinge koguneb sageli õlgadesse. Kui partner aitab seda vabastada, võib keha saada sõnumi: “Siin ma võin lõdvestuda.”</p>
          <p>Selge tagasiside muudab puudutuse mõlema jaoks turvalisemaks ja meeldivamaks.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'The slow hug',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Stand close and hug each other.</li>
            <li>Stay in the hug for at least 30 seconds.</li>
            <li>Let your breathing slow down.</li>
            <li>Before letting go, gently squeeze once.</li>
          </ol>
          <p>Note: Do not rush. Let the hug become comfortable.</p>`,
        additional: `<p>A longer hug can feel very different from a quick one. It gives the body enough time to soften.</p>
          <p>This card is about simple physical presence, warmth and calm contact.</p>`,
      },
      ET: {
        title: 'Aeglane kallistus',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Seiske teineteise lähedal ja kallistage.</li>
            <li>Jääge kallistusse vähemalt 30 sekundiks.</li>
            <li>Laske hingamisel aeglustuda.</li>
            <li>Enne lahti laskmist pigistage teineteist õrnalt korra.</li>
          </ol>
          <p>Märkus: Ärge kiirustage. Las kallistus muutub mugavaks.</p>`,
        additional: `<p>Pikem kallistus võib tunduda väga erinev kiirest kallistusest. See annab kehale piisavalt aega pehmenemiseks.</p>
          <p>See kaart räägib lihtsast füüsilisest kohalolust, soojusest ja rahulikust kontaktist.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Face tracing',
        description: `<h5>Giver</h5>
          <ol>
            <li>Ask your partner to close their eyes.</li>
            <li>With one fingertip, slowly trace the outline of their face.</li>
            <li>Move around the forehead, cheeks, jawline and chin.</li>
            <li>Keep your touch light and attentive.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Relax your face and notice the sensation.</li>
          </ol>`,
        additional: `<p>The face carries a lot of emotion. Gentle attention to the face can feel tender, personal and deeply calming.</p>
          <p>This exercise works best when the giver moves slowly and watches for comfort.</p>`,
      },
      ET: {
        title: 'Näo kontuuride puudutamine',
        description: `<h5>Andja</h5>
          <ol>
            <li>Palu partneril silmad sulgeda.</li>
            <li>Liiguta ühe sõrmeotsaga aeglaselt mööda tema näo kontuuri.</li>
            <li>Liigu üle lauba, põskede, lõuajoone ja lõua.</li>
            <li>Hoia puudutus kerge ja tähelepanelik.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Lõdvesta nägu ja märka tunnet.</li>
          </ol>`,
        additional: `<p>Nägu kannab palju emotsioone. Õrn tähelepanu näole võib tunduda hell, isiklik ja sügavalt rahustav.</p>
          <p>See harjutus toimib kõige paremini siis, kui andja liigub aeglaselt ja jälgib partneri mugavust.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Warm hands',
        description: `<h5>Giver</h5>
          <ol>
            <li>Warm your hands by rubbing them together.</li>
            <li>Place both hands gently on one area your partner chooses: shoulders, back, arms or stomach.</li>
            <li>Do not move for 20 seconds. Just let the warmth be felt.</li>
            <li>Then make slow circles with your palms.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Choose the area and guide the pressure.</li>
          </ol>`,
        additional: `<p>Still touch can be as powerful as movement. It gives the receiver time to feel warmth and safety.</p>
          <p>Asking the receiver to choose the area helps create trust and comfort.</p>`,
      },
      ET: {
        title: 'Soojad käed',
        description: `<h5>Andja</h5>
          <ol>
            <li>Soojenda käsi neid kokku hõõrudes.</li>
            <li>Aseta mõlemad käed õrnalt piirkonnale, mille partner valib: õlgadele, seljale, kätele või kõhule.</li>
            <li>Ära liigu 20 sekundit. Lase lihtsalt soojusel tuntavaks saada.</li>
            <li>Seejärel tee peopesadega aeglaseid ringe.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Vali piirkond ja juhenda survet.</li>
          </ol>`,
        additional: `<p>Paigal olev puudutus võib olla sama mõjus kui liikumine. See annab vastuvõtjale aega tunda soojust ja turvalisust.</p>
          <p>Kui vastuvõtja saab piirkonna ise valida, tekib rohkem usaldust ja mugavust.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Whispered compliment',
        description: `<h5>Giver</h5>
          <ol>
            <li>Come close to your partner.</li>
            <li>Whisper one sincere compliment into their ear.</li>
            <li>Pause for a few seconds.</li>
            <li>Whisper one more thing you like about being close to them.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Close your eyes and receive the words without answering immediately.</li>
          </ol>`,
        additional: `<p>A whisper can make simple words feel more intimate and personal.</p>
          <p>This card combines emotional appreciation with closeness, softness and attention.</p>`,
      },
      ET: {
        title: 'Sosistatud kompliment',
        description: `<h5>Andja</h5>
          <ol>
            <li>Tule partnerile lähemale.</li>
            <li>Sosista talle kõrva üks siiras kompliment.</li>
            <li>Peatu mõneks sekundiks.</li>
            <li>Sosista veel üks asi, mis sulle tema läheduses meeldib.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Sulge silmad ja võta sõnad vastu ilma kohe vastamata.</li>
          </ol>`,
        additional: `<p>Sosistus võib muuta lihtsad sõnad intiimsemaks ja isiklikumaks.</p>
          <p>See kaart ühendab emotsionaalse tunnustuse läheduse, pehmuse ja tähelepanuga.</p>`,
      },
    },
  },

  // =========================
  // LOVEMAKING — 8 cards
  // =========================
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Slow invitation',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Take turns saying one thing that helps you feel desired.</li>
            <li>Use clear but gentle words.</li>
            <li>Then each partner names one boundary or preference for tonight.</li>
          </ol>
          <p>Note: Desire grows better when both people feel free to say yes, no or not yet.</p>`,
        additional: `<p>Talking about desire does not have to break the mood. It can create anticipation, trust and clarity.</p>
          <p>This card helps partners begin from consent, curiosity and emotional safety.</p>`,
      },
      ET: {
        title: 'Aeglane kutse',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Öelge kordamööda üks asi, mis aitab teil end ihaldatuna tunda.</li>
            <li>Kasutage selgeid, kuid õrnu sõnu.</li>
            <li>Seejärel nimetab kumbki partner ühe piiri või eelistuse tänaseks õhtuks.</li>
          </ol>
          <p>Märkus: Iha kasvab paremini siis, kui mõlemal on vabadus öelda jah, ei või veel mitte.</p>`,
        additional: `<p>Ihast rääkimine ei pea meeleolu rikkuma. See võib luua ootust, usaldust ja selgust.</p>
          <p>See kaart aitab alustada nõusolekust, uudishimust ja emotsionaalsest turvatundest.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Kiss without rushing',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Set a timer for one minute.</li>
            <li>Kiss slowly without trying to move to the next step.</li>
            <li>Focus on softness, rhythm and breathing.</li>
            <li>After the timer ends, pause and look at each other.</li>
          </ol>
          <p>Note: Staying with one simple action can make it feel more intense.</p>`,
        additional: `<p>Rushing often pulls attention away from sensation. Slowness gives both partners time to feel what is actually happening.</p>
          <p>This card turns kissing into a shared practice of presence rather than a transition.</p>`,
      },
      ET: {
        title: 'Suudlus ilma kiirustamata',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Seadke taimer üheks minutiks.</li>
            <li>Suudelge aeglaselt, püüdmata kohe järgmise sammu juurde liikuda.</li>
            <li>Keskenduge pehmusele, rütmile ja hingamisele.</li>
            <li>Kui taimer lõpeb, peatuge ja vaadake teineteisele otsa.</li>
          </ol>
          <p>Märkus: Ühe lihtsa tegevuse juures püsimine võib muuta selle intensiivsemaks.</p>`,
        additional: `<p>Kiirustamine viib sageli tähelepanu tunnetelt ära. Aeglus annab mõlemale partnerile aega märgata, mis tegelikult toimub.</p>
          <p>See kaart muudab suudlemise kohalolu harjutuseks, mitte lihtsalt üleminekuks järgmisele sammule.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Yes, more, softer',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Choose a simple touch: hand, arm, back, neck or face.</li>
            <li>The receiver guides only with three words: “yes”, “more” or “softer”.</li>
            <li>The giver listens and adjusts without asking many questions.</li>
            <li>Switch roles after a few minutes.</li>
          </ol>`,
        additional: `<p>Clear feedback can be playful and intimate. It removes guessing and helps both partners feel more confident.</p>
          <p>This exercise trains communication through simple words and attentive response.</p>`,
      },
      ET: {
        title: 'Jah, rohkem, pehmemalt',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Valige lihtne puudutus: käsi, käsivars, selg, kael või nägu.</li>
            <li>Vastuvõtja juhendab ainult kolme sõnaga: “jah”, “rohkem” või “pehmemalt”.</li>
            <li>Andja kuulab ja kohandub ilma paljude küsimusteta.</li>
            <li>Mõne minuti pärast vahetage rolle.</li>
          </ol>`,
        additional: `<p>Selge tagasiside võib olla mänguline ja intiimne. See vähendab äraarvamist ja aitab mõlemal partneril end kindlamalt tunda.</p>
          <p>See harjutus treenib suhtlemist lihtsate sõnade ja tähelepaneliku reageerimise kaudu.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'The pause',
        description: `<h5>Both partners</h5>
          <ol>
            <li>During closeness, pause for 20 seconds.</li>
            <li>Keep contact, but stop moving.</li>
            <li>Breathe together and notice what changes.</li>
            <li>After the pause, ask: “Do you want to continue?”</li>
          </ol>
          <p>Note: A pause can increase awareness and make consent feel natural.</p>`,
        additional: `<p>Pausing helps partners stay connected instead of running on autopilot.</p>
          <p>It creates a moment to check in with the body, emotions and desire before continuing.</p>`,
      },
      ET: {
        title: 'Paus',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Läheduse ajal tehke 20-sekundiline paus.</li>
            <li>Hoidke kontakti, kuid lõpetage liikumine.</li>
            <li>Hingake koos ja märgake, mis muutub.</li>
            <li>Pärast pausi küsige: “Kas sa soovid jätkata?”</li>
          </ol>
          <p>Märkus: Paus võib suurendada teadlikkust ja muuta nõusoleku loomulikuks.</p>`,
        additional: `<p>Paus aitab partneritel püsida ühenduses, mitte tegutseda automaatselt.</p>
          <p>See loob hetke, et enne jätkamist märgata keha, emotsioone ja soovi.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Guided touch',
        description: `<h5>Receiver</h5>
          <ol>
            <li>Place your hand over your partner’s hand.</li>
            <li>Guide their hand to show the speed, pressure and rhythm you enjoy.</li>
            <li>Use words only if needed.</li>
          </ol>
          <h5>Giver</h5>
          <ol>
            <li>Let yourself be guided.</li>
            <li>Do not take over too quickly.</li>
          </ol>`,
        additional: `<p>Guided touch can feel intimate because it combines trust, communication and physical closeness.</p>
          <p>It also teaches the giver to listen with their hands, not only with their ears.</p>`,
      },
      ET: {
        title: 'Juhendatud puudutus',
        description: `<h5>Vastuvõtja</h5>
          <ol>
            <li>Aseta oma käsi partneri käe peale.</li>
            <li>Juhenda tema kätt, et näidata kiirust, survet ja rütmi, mis sulle meeldib.</li>
            <li>Kasuta sõnu ainult siis, kui vaja.</li>
          </ol>
          <h5>Andja</h5>
          <ol>
            <li>Lase end juhendada.</li>
            <li>Ära võta liiga kiiresti juhtimist üle.</li>
          </ol>`,
        additional: `<p>Juhendatud puudutus võib tunduda intiimne, sest see ühendab usalduse, suhtlemise ja füüsilise läheduse.</p>
          <p>See õpetab andjat kuulama mitte ainult kõrvade, vaid ka kätega.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Choose the rhythm',
        description: `<h5>Both partners</h5>
          <ol>
            <li>One partner chooses a rhythm: slow, playful, still or intense.</li>
            <li>Stay with that rhythm for one minute through kissing, touch or movement.</li>
            <li>Then switch: the other partner chooses the rhythm.</li>
            <li>After both turns, choose one rhythm together.</li>
          </ol>`,
        additional: `<p>Different people connect to desire through different rhythms. Some need slowness, others need playfulness or intensity.</p>
          <p>This card helps partners explore rhythm as a shared language.</p>`,
      },
      ET: {
        title: 'Vali rütm',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Üks partner valib rütmi: aeglane, mänguline, paigal või intensiivne.</li>
            <li>Püsige selles rütmis ühe minuti jooksul suudluse, puudutuse või liikumise kaudu.</li>
            <li>Seejärel vahetage: teine partner valib rütmi.</li>
            <li>Pärast mõlemat korda valige koos üks rütm.</li>
          </ol>`,
        additional: `<p>Erinevad inimesed jõuavad ihani erinevate rütmide kaudu. Mõni vajab aeglust, teine mängulisust või intensiivsust.</p>
          <p>See kaart aitab partneritel uurida rütmi kui ühist keelt.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Tell me where to kiss you',
        description: `<h5>Receiver</h5>
          <ol>
            <li>Name three places where you would like to receive gentle kisses.</li>
            <li>Choose only places that feel comfortable right now.</li>
          </ol>
          <h5>Giver</h5>
          <ol>
            <li>Kiss each chosen place slowly.</li>
            <li>Pause between each kiss and notice your partner’s reaction.</li>
          </ol>
          <p>Note: Keep it tender and respectful.</p>`,
        additional: `<p>Asking directly can feel vulnerable, but it also removes guessing.</p>
          <p>This card turns desire into a simple invitation: clear, gentle and easy to follow.</p>`,
      },
      ET: {
        title: 'Ütle, kuhu ma sind suudleksin',
        description: `<h5>Vastuvõtja</h5>
          <ol>
            <li>Nimeta kolm kohta, kuhu sooviksid saada õrnu suudlusi.</li>
            <li>Vali ainult kohad, mis tunduvad praegu mugavad.</li>
          </ol>
          <h5>Andja</h5>
          <ol>
            <li>Suudle iga valitud kohta aeglaselt.</li>
            <li>Tee iga suudluse vahel paus ja märka partneri reaktsiooni.</li>
          </ol>
          <p>Märkus: Hoia see hell ja lugupidav.</p>`,
        additional: `<p>Otse küsimine võib tunduda haavatav, kuid see vähendab äraarvamist.</p>
          <p>See kaart muudab iha lihtsaks kutseks: selgeks, õrnaks ja kergesti järgitavaks.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Aftercare sentence',
        description: `<h5>Both partners</h5>
          <ol>
            <li>After a moment of closeness, stay near each other.</li>
            <li>Each partner completes the sentence: “Right now I need...”</li>
            <li>It can be water, silence, a hug, words, space or more closeness.</li>
            <li>Respect the answer without taking it personally.</li>
          </ol>`,
        additional: `<p>Aftercare is not only for intense moments. It is a way to stay emotionally connected after physical closeness.</p>
          <p>Asking what is needed helps both partners feel cared for and respected.</p>`,
      },
      ET: {
        title: 'Järelhoolitsuse lause',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Pärast läheduse hetke jääge teineteise lähedale.</li>
            <li>Kumbki partner lõpetab lause: “Praegu ma vajan...”</li>
            <li>See võib olla vesi, vaikus, kallistus, sõnad, ruum või rohkem lähedust.</li>
            <li>Austa vastust ega võta seda isiklikult.</li>
          </ol>`,
        additional: `<p>Järelhoolitsus ei ole ainult intensiivsete hetkede jaoks. See on viis jääda emotsionaalselt ühendatuks pärast füüsilist lähedust.</p>
          <p>Küsimine, mida partner vajab, aitab mõlemal tunda end hoituna ja austatuna.</p>`,
      },
    },
  },
]

async function main() {
  for (const card of cards) {
    await prisma.card.create({
      data: {
        // fallback/default fields — Estonian
        title: card.translations.ET.title,
        description: card.translations.ET.description,
        additional: card.translations.ET.additional,
        imageUrl: card.imageUrl,
        category: card.category,

        translations: {
          create: [
            {
              locale: Locale.ET,
              title: card.translations.ET.title,
              description: card.translations.ET.description,
              additional: card.translations.ET.additional,
            },
            {
              locale: Locale.EN,
              title: card.translations.EN.title,
              description: card.translations.EN.description,
              additional: card.translations.EN.additional,
            },
          ],
        },
      },
    })
  }
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })