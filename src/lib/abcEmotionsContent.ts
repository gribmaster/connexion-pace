import type { AppLocale } from './i18n/locales'

type AbcEmotionsEntry = {
  title: string
  html: string
}

export const abcEmotionsContent: Record<AppLocale, AbcEmotionsEntry> = {
  et: {
    title: 'Emotsioonide ABC',
    html: `<h6>„Emotsioonide ABC“ annab nõuandeid, kuidas emotsioone märgata ja nendega tegeleda.</h6>
<p>Emotsioonid on meie elu osa. Nad ei ole ohtlikud. Kaarte mängides võib üles tulla emotsioone nii varasemast elust kui ka praegusest. Võivad esile kerkida ka mälestused mineviku olukordadest.</p>
<p>Oluline on meeles pidada, et iga inimene ja suhe on ainulaadne ning võib vajada erinevat lähenemist.</p>
<p>Kui emotsioon üles kerkib, on kaaslase tugi soovituslik. Kui aga mõlemat tabab emotsioon, tegeleb kumbki enda emotsiooniga ise.</p>
<p>Esmased emotsioonid: viha, kurbus, vastikus, hirm, üllatus, rõõm.</p>
<p>Teisesed emotsioonid: kaastunne, häbi, piinlikkus, süü, uhkus, kadedus, armukadedus, tänulikkus, imetlus, nördimus, põlgus.</p>

<h4>Mida tugevat emotsiooni kogedes teha</h4>
<ul>
  <li>Võta endale aega emotsiooni tunda.</li>
  <li>Tütle kaaslasele, kas soovid olla koos või üksil.</li>
  <li>Keskendu sügavale ja aeglasele hingamisele, et keha saaks rahuneda.</li>
  <li>Lase lahti lahenduste otsimisest. Luba sel tundel tulla, olla ja minna.</li>
  <li>Ütle endale: „See tunne on praegu siin ja see on okei. Mul on turvaline seda praegu tunda.“</li>
  <li>Vali emotsioonide tabeli soovitustest sobiv tehnika.</li>
  <li>Mõnele sobib emotsiooni teadvustada ja aru saada, millega tegu, mis on selle sõnum, ning öelda ausalt: „Ma tunnen praegu [emotsiooni]“. Teisele meeldib tunne kehast läbi lasta defineerimata, millega tegu on.</li>
  <li>Kui tunned emotsiooni seoses kaaslasega, siis ära suuna seda tema vastu. Mõnikord on mõistlik ajutiselt eemalduda, andes sellest kaaslasele teada.</li>
  <li>Kui soovid karjuda, eemaldu ja karju patja.</li>
  <li>Kui soovid tunnet väljendada, tee seda siis, kui oled maha rahunenud. Kasuta mina-sõnumeid, selgitamaks, mida sina kogesid ning tundsid.</li>
  <li>Kui soovid nutta, võid eemale minna, või kui tunned end turvaliselt, siis paluda kaaslasel end hoida.</li>
</ul>

<h4>Kuidas kaaslast toetada tugeva emotsiooni korral</h4>
<ul>
  <li>Jää rahulikuks.</li>
  <li>Kuula ilma katkestamata.</li>
  <li>Ütle: „Ma olen siin sinu jaoks.“</li>
  <li>Küsi: „Mida sa praegu minult vajad?“</li>
  <li>Paku tuge: „Kas soovid, et hoiaksin sind?“</li>
  <li>Väldi nõuandeid või probleemi lahendamist, kui kaaslane seda ei palu.</li>
  <li>Millistest lausetest hoiduda: „Rahune maha“, „Ära tee draamat“, „See pole ju nii hull, teistel on hullem“, „Kõik on korras“, „Ära mõtle sellele“, „Pole hullu, läheb üle“, „Sa reageerid üle, see on su enda süü“.</li>
  <li>Milliseid lauseid kasutada: „Ma näen, et see on Sulle raske“, „Olen siin. Kas soovid, et oleksin vaikides Su kõrval?“, „Ma ei pruugi seda päriselt mõista, aga ma tahan kuulata“, „Sinu tunded on tähtsad“, „Ma näen, et see puudutab Sind tugevalt. Ma olen valmis Sind kuulama“.</li>
</ul>

<h4>Koos samm-sammult emotsioonist läbi minek</h4>

<h5>1. Turvaline ruum</h5>
<ul>
  <li>Leidke mugav koht.</li>
  <li>Leppige kokku aeg (nt 20 min).</li>
  <li>Võtke mugav asend.</li>
  <li>Kaaslane, kes toetab, jääb rahulikuks ja hoiab fookust kuulamisel.</li>
</ul>

<h5>2. Emotsiooni kogemine</h5>
<ul>
  <li>Lase emotsioonil olla.</li>
  <li>Kirjelda, mida oma kehas tunned.</li>
  <li>Hinga rahulikult.</li>
  <li>Kaaslane võib õrnalt hoida kätt või lihtsalt kõrval olla.</li>
</ul>

<h5>3. Emotsioonist läbi liikumine</h5>
<ul>
  <li>Lase pisaratel/värinal/naerul vallanduda, kui need peale tulevad.</li>
  <li>Jätka hingamist.</li>
  <li>Ole teadlik, et see möödub.</li>
  <li>Kaaslane võib korrata lauseid, mis on eespool soovitustena toodud.</li>
</ul>

<h5>4. Rahunemine</h5>
<ul>
  <li>Tunne, kuidas emotsioon tasapisi vaibub.</li>
  <li>Võta aega.</li>
  <li>Märka, mis kehas muutub.</li>
  <li>Joo vett.</li>
</ul>

<h5>5. Käitumine pärast emotsiooni kogemist</h5>
<ul>
  <li>Võtke hetk, et tänada teineteist.</li>
  <li>Jagage, mida kogesite.</li>
  <li>Küsige endalt: „Mida ma praegu vajan?“</li>
  <li>Tehke midagi rahustavat (nt jalutage, jooge teed).</li>
</ul>

<h4>Emotsioonide tabel</h4>

<div class="tab-item">
  <div class="tab-head">Rõõm</div>
  <div class="tab-body">
    <strong>Kehalised tunnused</strong>
    <p>Naeratus, lõdvestunud kehahoiak, sära silmis, kõrgem energiatase, soojus rindkeres</p>
    <strong>Mõtetes toimuv</strong>
    <p>Positiivsed mõtted, keskendumine meeldivale, tänutunne</p>
    <strong>Käitumuslikud tunnused</strong>
    <p>Naer, suhtlusvalmidus, hüplemine, tantsimine, soov jagada, kallistamine</p>
    <strong>Soovituslikud tehnikad</strong>
    <p>Keskendu kehalisele tundele, hinga ja luba endal rõõmu tunda, ilma et hakkaksid kohe midagi tegema.<br>
Kui rõõm muutub ülevoolavaks, loo rahustav kehakontakt kaaslasega ja hingake sügavalt.</p>
  </div>
</div>

<div class="tab-item">
  <div class="tab-head">Kurbus</div>
  <div class="tab-body">
    <strong>Kehalised tunnused</strong>
    <p>Aeglustumine, kokkutõmbumine, raskustunne rinnus, nutt, tuhmid silmad, klomp kurgus</p>
    <strong>Mõtetes toimuv</strong>
    <p>Tähelepanu kaotusel või pettumusel, lootusetus, raskus otsustamisel</p>
    <strong>Käitumuslikud tunnused</strong>
    <p>Nutt, endassetõmbumine, vähene suhtlus, passiivsus</p>
    <strong>Soovituslikud tehnikad</strong>
    <p>Luba endal nutta, et keha saaks vabaneda pingest. Tõenäoliselt hakkab pärast kergem.<br>
Võta iseennast kaissu või palu seda kaaslasel teha.</p>
  </div>
</div>

<div class="tab-item">
  <div class="tab-head">Viha</div>
  <div class="tab-body">
    <strong>Kehalised tunnused</strong>
    <p>Pinge kehas, punetav nägu, kiire hingamine, rusikas käed, vaenulik pilk</p>
    <strong>Mõtetes toimuv</strong>
    <p>Ebaõigluse tajumine, keskendumine ärritavale olukorrale, kättemaksumõtted</p>
    <strong>Käitumuslikud tunnused</strong>
    <p>Hääle tõstmine, karjumine, järsud liigutused, konfliktsus, agressiivne keelekasutus</p>
    <strong>Soovituslikud tehnikad</strong>
    <p>Üksil olles karju, urise, röögi emotsioon välja, võimalusel patja sisse.<br>
Peksa patja või vääna tekki.<br>
Sulge silmad, kujuta ette ärritavat olukorda ning korruta valjult sulghäälikuid: „K-p-t, k-p-t, k-p-t …“</p>
  </div>
</div>

<div class="tab-item">
  <div class="tab-head">Hirm</div>
  <div class="tab-body">
    <strong>Kehalised tunnused</strong>
    <p>Südamelöökide kiirenemine, higistamine, jäikus, värin, kahvatus, pinge kõhus</p>
    <strong>Mõtetes toimuv</strong>
    <p>Ohutunne, kohutavad stsenaariumid, ohu võimendamine</p>
    <strong>Käitumuslikud tunnused</strong>
    <p>Põgenemine, tardumine, võitlus, vältiv käitumine, abi otsimine, klammerdumine</p>
    <strong>Soovituslikud tehnikad</strong>
    <p>Hinga sisse 4 sekundit, hoia 7 sekundit ja hinga 8 sekundit välja. Korda protsessi.<br>
Luba kehal väriseda ja vappuda, nagu loomal, kes raputab hirmu maha.</p>
  </div>
</div>

<div class="tab-item">
  <div class="tab-head">Üllatus</div>
  <div class="tab-body">
    <strong>Kehalised tunnused</strong>
    <p>Suured silmad, tõstetud kulmud, avatud suu, tardumine, kiire hingamine</p>
    <strong>Mõtetes toimuv</strong>
    <p>Hetkeline segadus, uudishimu, kiire ümberlülitumine uuele infole</p>
    <strong>Käitumuslikud tunnused</strong>
    <p>Peatumine, ringivaatamine, selgituse otsimine, tardumine</p>
    <strong>Soovituslikud tehnikad</strong>
    <p>Kui üllatus on rõõmus, siis naera, hõiska ja hüppa.<br>
Kui üllatus on ebameeldiv, siis patsuta keha läbi, vaata, mis kell ja päev on ning ütle endale: „Mul on turvaline.“</p>
  </div>
</div>

<div class="tab-item">
  <div class="tab-head">Vastikus</div>
  <div class="tab-body">
    <strong>Kehalised tunnused</strong>
    <p>Kortsus kulm, kirtsus nina, suunurgad allapoole, iiveldus, eemaletõmbumine</p>
    <strong>Mõtetes toimuv</strong>
    <p>Soov eemale tõugata, kontakti vältimine, vajadus puhastada</p>
    <strong>Käitumuslikud tunnused</strong>
    <p>Eemaldumine, eemalelükkamine, selja pööramine, oksendamine, pesemine</p>
    <strong>Soovituslikud tehnikad</strong>
    <p>Raputa ja venita keha, suru jalad vastu maad ning istu kindlal pinnal.<br>
Kui võimalik, pese emotsioon maha. Kui mitte, siis kujutle, nagu peseksid emotsiooni maha.</p>
  </div>
</div>

<h4>Pea meeles!</h4>
<ul>
  <li>Pole „õiget“ või „valget“ emotsiooni.</li>
  <li>Iga emotsioon vajab erinevat aega, kuni ta vaibub.</li>
  <li>Okei on öelda: „Vajan pausi.“</li>
  <li>Okei on öelda: „Vajan kallistust.“</li>
</ul>

<h4>Millal otsida abi:</h4>
<ul>
  <li>Kui emotsioonid tunduvad kontrollimatult tugevad.</li>
  <li>Kui sama muster kordub pidevalt.</li>
  <li>Kui tunnete, et ei saa teineteist piisavalt toetada.</li>
  <li>Kui emotsioonidega kaasneb soov endale või teisele haiget teha.</li>
</ul>

<p>Kui soovituslikest tehnikatest ei leia sobivat või ei tule üksik i meelde emotsiooni kogemise ajal, siis vali sobiv asend, hinga sügavalt, hoia fookus südamepiirkonnas ning lõdvestu.</p>`,
  },
  en: {
    title: 'The ABCs of Emotions',
    html: `<h6>This section provides a few tips for becoming more aware of emotions and processing them.</h6>
<p>Above all, remember: emotions are part of life. They aren’t dangerous by themselves. Playing this card game can certainly bring up emotions from your past and present, including memories of situations you’ve been in.</p>
<p>Always remember that everyone and every relationship is unique and can require a different approach.</p>
<p>If an emotion does surface, your partner’s support is recommended. If both partners are overcome by emotions, each person should deal with theirs themselves.</p>
<p>Primary emotions: anger, sadness, disgust, fear, surprise, joy/happiness.</p>
<p>Secondary emotions: compassion, shame, embarrassment, guilt, pride, jealousy, envy, gratitude, wonder, indignation, scorn.</p>

<h4>What to Do When You Experience a Strong Emotion</h4>
<ul>
  <li>Take time for yourself to feel the emotion.</li>
  <li>Tell your partner whether you want to be together or alone.</li>
  <li>Focus on slow, deep breathing to calm your body.</li>
  <li>Let go of seeking solutions. Let the feeling come, be and go.</li>
  <li>Tell yourself: "This feeling is here now and that is OK. It is safe for me to feel this way right now."</li>
  <li>Choose a suitable technique from the recommendations in the emotions table.</li>
  <li>Some may feel it is right to be cognizant of the emotion and understand what it means, what its message is, and say honestly: "I feel [the emotion] now", while another might want to let the emotion pass through the body without analyzing what it is.</li>
  <li>If you feel an emotion in relation to your partner, don't turn it against them. Sometimes it is a good idea to step away, letting your partner know that you're doing so.</li>
  <li>If you feel like you want to scream, withdraw and scream into a pillow.</li>
  <li>If you want to express the emotion, do so once you've calmed down. Use I-messages to clarify what you experienced and felt.</li>
  <li>If you want to cry, you can go off by yourself, or if you feel safe, ask your partner to hold you.</li>
</ul>

<h4>How to Support Your Partner When They're Experiencing Powerful Emotions</h4>
<ul>
  <li>Stay calm.</li>
  <li>Listen without interrupting.</li>
  <li>Tell them: "I am here for you."</li>
  <li>Ask: "What would you like from me right now?"</li>
  <li>Offer support: "Do you want me to hold you?"</li>
  <li>Avoid advice or solutions, if your partner didn't ask you for them.</li>
  <li>What sentences to avoid: "Calm down", "Don't be dramatic", "It's not that bad, others have it worse", "Everything's fine", "Try not to think about it", "No problem, it will pass", "You're overreacting, it's your own doing."</li>
  <li>What sentences to use: "I see this is hard for you," "I'm here, do you want me to be by your side without saying anything?" "I may not be able to actually understand it, but I want to listen", "Your feelings are important," "I see this touches you deeply. I am ready to listen."</li>
</ul>

<h4>Passing Through the Emotion Step by Step</h4>

<h5>1. Safe Space</h5>
<ul>
  <li>Find a comfortable place.</li>
  <li>Agree on a time (e.g. 20 min).</li>
  <li>Get in a comfortable position.</li>
  <li>The partner who is supporting should stay calm and keep the focus on listening.</li>
</ul>

<h5>2. Experiencing Emotion</h5>
<ul>
  <li>Let the emotion be what it is.</li>
  <li>Describe what you feel in your body.</li>
  <li>Breathe in and out calmly.</li>
  <li>Your partner can gently hold your hand or just be by your side.</li>
</ul>

<h5>3. Moving Through the Emotion</h5>
<ul>
  <li>Let the tears flow, don't try to keep from shivering, or suppress laughter if you feel these urges.</li>
  <li>Continue breathing in and out.</li>
  <li>Know that it will pass.</li>
  <li>Your partner can repeat the sentences provided above.</li>
</ul>

<h5>4. Calming</h5>
<ul>
  <li>Focus on feeling how the emotion is gradually subsiding.</li>
  <li>Take time.</li>
  <li>Notice what is changing in your body.</li>
  <li>Drink water.</li>
</ul>

<h5>5. After Experiencing a Powerful Emotion</h5>
<ul>
  <li>Take time to thank one another.</li>
  <li>Share what you experienced.</li>
  <li>Ask yourself: "What do I need now?"</li>
  <li>Do something calming (go for a walk, drink tea).</li>
</ul>

<h4>Emotions Table</h4>

<div class="tab-item">
  <div class="tab-head">Happiness / Joy</div>
  <div class="tab-body">
    <strong>Physical indicators</strong>
    <p>Smile, relaxed body posture, sparkle in eyes, higher energy level, warmth in chest</p>
    <strong>What’s going on in your head</strong>
    <p>Positive thoughts, focus on pleasant things; feeling of gratitude</p>
    <strong>Behavioral indications</strong>
    <p>Laughter, open to socializing, jumping, dancing, desire to share, hugging</p>
    <strong>Suggested technique</strong>
    <p>Focus on what your body is feeling, breathe and let yourself be joyful, without doing anything right away.<br>If the feeling of joy seems to brim over, initiate calming body contact with your partner and take deep breaths.</p>
  </div>
</div>

<div class="tab-item">
  <div class="tab-head">Sadness</div>
  <div class="tab-body">
    <strong>Physical indicators</strong>
    <p>Slowing, contraction, heavy feeling in chest, crying, dull eyes, lump in throat.</p>
    <strong>What’s going on in your head</strong>
    <p>Preoccupation with loss or disappointment, hopelessness, difficulty making decisions</p>
    <strong>Behavioral indications</strong>
    <p>Crying, introspection, little communication, passivity</p>
    <strong>Suggested technique</strong>
    <p>Let yourself cry to rid your body of the tension. You’ll probably feel better after that.<br>Hug yourself or ask your partner to hug you.</p>
  </div>
</div>

<div class="tab-item">
  <div class="tab-head">Anger</div>
  <div class="tab-body">
    <strong>Physical indicators</strong>
    <p>Tension in body, flushed face, rapid breathing, clenched fists, hostile gaze</p>
    <strong>What’s going on in your head</strong>
    <p>Sense of injustice, focus on the irritant situation, thoughts of revenge</p>
    <strong>Behavioral indications</strong>
    <p>Raising voice, shouting, sudden movements, conflicted state, aggressive use of language.</p>
    <strong>Suggested technique</strong>
    <p>If you’re alone, yell, growl, shout the emotion out of your system, if possible into a muffling pillow.<br>Punch a pillow or wring a blanket.<br>Close your eyes, imagine an irritating situation, and loudly repeat consonants: “K-p-t, k-p-t, k-p-t.”</p>
  </div>
</div>

<div class="tab-item">
  <div class="tab-head">Fear</div>
  <div class="tab-body">
    <strong>Physical indicators</strong>
    <p>Rapid heartbeat, sweating, rigidity, tremor, pale face, tightness in abdomen.</p>
    <strong>What’s going on in your head</strong>
    <p>Feeling of danger, running through worst case scenarios in your head, amplifying the danger.</p>
    <strong>Behavioral indications</strong>
    <p>Fleeing, freezing, fighting, avoidance, seeking help, latching on to something/someone.</p>
    <strong>Suggested technique</strong>
    <p>Breathe in four seconds, hold for seven seconds and breathe out for 8 seconds. Repeat.<br>Let your body shake and shiver, like an animal shaking off fear.</p>
  </div>
</div>

<div class="tab-item">
  <div class="tab-head">Surprise</div>
  <div class="tab-body">
    <strong>Physical indicators</strong>
    <p>Wide eyes, raised eyebrows, mouth agape, freezing, rapid breathing.</p>
    <strong>What’s going on in your head</strong>
    <p>Momentary confusion, curiosity, quickly changing gears to accommodate new info.</p>
    <strong>Behavioral indications</strong>
    <p>Halting, looking around, seeking clarity, freezing.</p>
    <strong>Suggested technique</strong>
    <p>If the surprise is pleasant, laugh, rejoice and jump around.<br>If the surprise is unpleasant, pat the body all over, check what time and day it is, and tell yourself: “I am safe, I feel safe.”</p>
  </div>
</div>

<div class="tab-item">
  <div class="tab-head">Disgust</div>
  <div class="tab-body">
    <strong>Physical indicators</strong>
    <p>Furrowed brow, wrinkled nose, corners of mouth downward, nausea, recoiling.</p>
    <strong>What’s going on in your head</strong>
    <p>Desire to push it away, avoid contact, need to clean.</p>
    <strong>Behavioral indications</strong>
    <p>Withdrawal, repelling, turning back, vomiting, washing.</p>
    <strong>Suggested technique</strong>
    <p>Shake out and stretch your body, press your feet against the ground and sit on a firm stable surface.<br>If possible, wash away the emotion. If not, imagine that you are doing so.</p>
  </div>
</div>

<h4>Remember:</h4>
<ul>
  <li>There's no such thing as a right or wrong emotion.</li>
  <li>Every emotion needs its own time to subside.</li>
  <li>It's OK to say: "I need a break."</li>
  <li>It's OK to say: "I need a hug."</li>
</ul>

<h4>When to Seek Help:</h4>
<ul>
  <li>If the emotions seem uncontrollably strong.</li>
  <li>If the same pattern recurs all the time.</li>
  <li>If you feel you can't support each other enough.</li>
  <li>If the emotions are accompanied by a desire to harm others or yourself.</li>
</ul>

<p>If you can't find a suitable technique in the suggestions, or can't remember them while you're experiencing the emotion, choose a suitable position, breathe deeply, keep your focus on your heart area and relax.</p>`},
}

export function getAbcEmotionsContent(locale: AppLocale): AbcEmotionsEntry {
  return abcEmotionsContent[locale] ?? abcEmotionsContent.et
}
