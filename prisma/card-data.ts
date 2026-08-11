import { Category } from '@prisma/client'

export const cards = [
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Appreciative words',
        description: `<h5>Giver</h5>
          <p>Express sincere appreciation for your partner. Come up with at least three real-life examples:</p>
          <p>• something important that they did for you: "It was really key for me that you…, this made me feel …."</p>
          <p>• personality trait: "I really like your … When you … , that makes me feel …"</p>
          <p>• a challenge at hand: "I see how much you have done in regard to .… I believe you can do it!."</p>
          <h5>Receiver</h5>
          <p>Listen and accept the compliments without feeling you have to respond.</p>
          <p>Important: Take turns being the giver and receiver. The woman goes first.</p>`,
        additional: `<p>Couples who validate each other verbally tend to feel more content and sense that they have a stronger connection. A sincere “shout-out” to your partner makes them feel that they are appreciated, that their contribution is seen and valued. They’ll want to reciprocate and share closeness with you.</p>
          <p>It can feel awkward saying appreciative things if you’re not used to doing so. But making it a daily habit will dispel discomfort and it will start to seem natural and easy.</p>
          <p>Since the person in the receiving role is just listening and doesn’t have to reciprocate right then and there, the words can potentially sink in better and be more impactful. If your “ode” to your partner is more glowing than what the recipient’s self-concept was prepared to accept, they may feel a bit sheepish. The receiver should try to maintain eye contact, relax their body, breathe in deeply and just let the feelings beneath the discomfort out.</p>
          <p>When we feel that we are valued, we’re able to be more present in our bodies, not just in our heads, because we no longer have to chase the feeling of being appreciated or worry: does my partner really notice and appreciate me?</p>`,
      },
      ET: {
        title: 'Tunnustavad sõnad',
        description: `<h5>Tunnustaja</h5>
          <p>Tunnusta kaaslast siiralt. Leia vähemalt kolm elulist näidet:</p>
          <ol>
            <li>oluline tegevus: „Mulle oli väga oluline, et Sa ..., see pani mind ... tundma."</li>
            <li>isikuomadus: „Mulle väga meeldib Sinu ... . Kui Sa ..., siis see paneb mind ... tundma."</li>
            <li>käsil väljakutse: „Ma näen, kui palju oled ... tegelenud. Ma usun, et saad sellega hakkama."</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <p>Kuula ning võta komplimendid vastu, ilma et peaksid vastama.</p>
          <p>Oluline: Tunnustage teineteist, alustab naine!</p>`,
        additional: `<p>Paarid, kes jagavad tunnustavaid sõnu, tunnevad suhtes suuremat rahulolu ja tugevamat sidet. Siiras tunnustus paneb kaaslase end väärtuslikuna tundma, sest teda ning tema panust nähakse ja hinnatakse. See naine või mees, kes tunneb, et tema kaaslane märkab ja väärtustab teda, soovib veelgi rohkem oma kaaslase jaoks olemas olla ja temaga lähedust jagada.</p>
          <p>Tunnustavaid sõnu võib olla alguses raske öelda, kui pole sellist harjumust. Kui seda aga iga päev harjutada, kaob ebamugavustunne ning tunnustuse jagamine tuleb loomulikult ja lihtsalt.</p>
          <p>Kuna vastuvõtja lihtsalt kuulab ega pea kohe vastama samaga, saab ta sügavamalt kogeda kaaslase tunnustust ja selle mõju endale. Kui kaaslase tunnustus on kõrgem kui vastuvõtja enesehinnang, võib vastuvõtja tunda piinlikkust ja ebamugavust. Sellisel juhul tuleks hoida silmsidet, lõdvestada keha, hingata sügavalt ning lubada ebamugavustunde all olevatel tunnetel lihtsalt avalduda.</p>
          <p>Tugevate tunnete puhul vaata "Emotsioonide ABC-d".</p>
          <p>Tundes end väärtuslikuna, suudame rohkem mõistusest kehasse tulla, sest ei pea enam taga ajama väärtustatuse tunnet: ei pea mõtlema ega tundma hirmu, kas kaaslane ikka märkab ja hindab mind.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Head massage',
        description: `<h5>Giver</h5>
          <ol>
            <li>Rub your hands together to warm them up and hold them near your partner's head for 10 seconds.</li>
            <li>Slowly move your hands closer and make contact with your partner's head.</li>
            <li>Caress your partner's head and neck.</li>
            <li>Continue massaging at a slow speed.</li>
            <li>Gently massage ears and earlobes with thumb and index finger.</li>
            <li>Apply firmer pressure on the neck and scalp.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Decide whether you want to receive the massage in position a) or b) or however you prefer.</li>
            <li>Relax, close your eyes and enjoy.</li>
          </ol>`,
        additional: `<p>A massage is a way of showing your partner that you care for them through touching. A head massage helps in relaxation, creates a connection and a sense of security. It brings you back into a body-aware mode and out of the fast-paced world pulsing with thoughts.</p>
          <p>A head massage can be sensual, but it doesn’t put pressure on the body to somehow respond to the touch, either. A head massage creates moments where you both can focus only on each other and enjoy being together.</p>
          <p>Relaxation comes from teamwork – from one partner giving and the other enjoying. It’s a great way to take a respite from everyday life. Your bodies can gradually adjust from one state to another and experience a deeper connection.</p>`,
      },
      ET: {
        title: 'Peamassaaž',
        description: `<h5>Masseerija</h5>
          <ol>
            <li>Hõõru käed soojaks ja hoia kaaslase pea lähedal 10 sekundit.</li>
            <li>Liiguta käsi aeglaselt lähemale ning puuduta pead.</li>
            <li>Paita õrnalt kaaslase pead, kukalt ja kaela.</li>
            <li>Jätka masseerivate liigutustega, kuid hoia tempo aeglane.</li>
            <li>Masseeri õrnalt kõrvu ja kõrvanibusid pöidla ja nimetissõrmega.</li>
            <li>Kukla tagant ja peanahka masseeri tugevamini kui mujalt.</li>
          </ol>
          <h5>Masseeritav</h5>
          <ol>
            <li>Vali, kas soovid massaaži vastu võtta asendis a, b või endale sobivalt.</li>
            <li>Lõdvestu, sulge silmad ja naudi.</li>
          </ol>`,
        additional: `<p>Massaaž on viis näidata oma kaaslasele puudutuse teel, et hoolid temast. Peamassaaž aitab lõõgastuda, loob ühendust ja tekitab turvatunde. Nii saate tulla kiirest mõtetest pulbitsevast maailmast kehalisse tunnetusse.</p>
          <p>Peamassaaž võib mõjuda sensuaalselt, kuid samal ajal ei avalda kehale survet, et peab puudutusele kuidagi reageerima. Peamassaaž loob hetki, kus te mõlemad saate keskenduda ainult teineteisele ja nautida koosolemist. Lõdvestus tuleb teie koostööst – sellest, et üks naudib ja teine pakub. See on suurepärane viis igapäevaelust puhkust võtta. Kehad saavad aeglases tempos ühelt seisundilt teisele häälestuda ja sügavamat ühendust kogeda.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Relaxing together',
        description: `<h5>Both partners</h5>
          <ol>
            <li>The woman sits as close as possible to the man, between his legs. Find a pose that is right for both of you. If needed, use pillows.</li>
            <li>Choose one of the following positions: • embracing, chest to chest, • foreheads together.</li>
            <li>Close your eyes, breathe through your open mouth, feeling as if you are drawing air deep into the lower abdomen.</li>
            <li>If desired, move your body at a slow pace.</li>
          </ol>
          <p>Important: Maintain a wordless space.</p>
          <p>Use a timer with a soft ringtone instead of the hourglass.</p>`,
        additional: `<p>Relaxing together creates physical closeness that can calm the nervous system: emotions subside and the flood of thoughts slows. This position helps you both become calmer.</p>
          <p>It’s essential to create a connection with your body first and then with your partner’s body. Being in a wordless space helps the body be better aware of its deeper desires.</p>
          <p>Relaxing together helps you become attuned to the moment and helps get your bodies on the same wavelength, like two waves in the sea meeting and merging.</p>
          <p>Sitting with your chests touching moves the attention to the heart. Sitting with your foreheads touching calms the mind; you’ll experience a sense of being connected.</p>`,
      },
      ET: {
        title: 'Koos lõdvestumine',
        description: `<h5>Mõlemad</h5>
          <ol>
            <li>Naine istub mehe jalge vahel talle võimalikult lähedal. Leidke mõlemale sobiv poos. Vajadusel kasutage patju.</li>
            <li>Valige järgnevate seast üks asend: kallistades, rinnad koos; või otsaesised koos.</li>
            <li>Sulgege silmad, hingake avatud suu kaudu sügavalt alakõhtu.</li>
            <li>Soovi korral liigutage keha aeglases tempos.</li>
          </ol>
          <p>Oluline: Hoidke sõnatut ruumi. Kasutage liivakella asemel leebe heliga taimerit.</p>`,
        additional: `<p>Koos lõdvestumine loob füüsilise läheduse, mis võib närvisüsteemi rahustada: emotsioonid vaibuvad ja mõttetulv aeglustub. See asend aitab teil mõlemal lõõgastuda ja rahuneda.</p>
          <p>Oluline on alguses luua ühendus enda kehaga ja pärast seda kaaslase omaga. Sõnatus ruumis olemine aitab keha paremini tunnetada ja teadvustada paremini oma sügavamaid soove.</p>
          <p>Koos lõdvestumine aitab häälestuda muult tegevuselt hetkele, aitab tuua kehad samale lainesagedusele: nagu kaks erinevalt laksuvat merelainet saavad kohtudes üheks.</p>
          <p>Istudes, rinnad koos, liigub tähelepanu südamele. Istudes, otsaesised koos, mõttetöö rahuneb ja kogete ühenduses olemist.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Cuddling',
        description: `<h5>Giver</h5>
          <ol>
            <li>Hold your partner with a benevolent mindset of just wanting the best for them.</li>
            <li>Imagine your partner is someone you love unconditionally, platonically - someone you want to hold in your arms, such as a beloved sleeping child, puppy dog or kitten.</li>
            <li>Try to maintain that same loving feeling the whole time. If your focus drifts, bring your attention back.</li>
            <li>If your partner becomes emotional, allow them to yield to the experience, and continue cuddling, lovingly and non-judgmentally.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Choose whether you would like to be cuddled in position a) or b).</li>
            <li>Relax, close your eyes and allow yourself to experience all emotions.</li>
          </ol>`,
        additional: `<p>Everyone needs a cuddle from time to time – closeness with no sexual strings attached. As adults, we often aren’t aware that we need cuddling and perhaps don’t know how to ask for it. This exercise is a chance to relax and be safely in someone’s embrace without having to control or direct anything. If this is a novel experience, it could be emotionally intense. If needed, consult the “ABCs of Emotions”.</p>
          <p>This card task may manifest a parent-child kind of dynamic. But allow it to manifest, relax and be aware that it has healing and connecting potential.</p>
          <p>The more you engage in this exercise without denying yourself emotions, the more your body will start trusting your partner, which in turn can lead to deeper pleasure and well-being.</p>`,
      },
      ET: {
        title: 'Kaisutamine',
        description: `<h5>Hoidja</h5>
          <ol>
            <li>Hoia kaaslast selliselt, et soovid talle lihtsalt head.</li>
            <li>Kujutle, et Su kaaslane on keegi, kelle vastu tunned tingimusteta armastust ja hoidmise soovi, näiteks armas magav laps, kutsikas või kassipoeg.</li>
            <li>Proovi seda armastavat tunnet terve aja hoida. Kui fookus kaob, siis too tähelepanu tagasi.</li>
            <li>Kui kaaslasel kerkib üles emotsioon, siis luba tal seda kogeda ning hoia teda edasi armastavalt ja hinnanguid andmata.</li>
          </ol>
          <h5>Hoitav</h5>
          <ol>
            <li>Vali, kas soovid olla hoitud asendis a või b.</li>
            <li>Lõdvestu, sulge silmad ning luba kogeda kõiki emotsioone.</li>
          </ol>`,
        additional: `<p>Kõik vajavad vahepeal kaisutamist ja ilma igasuguse tagamõtteta lähedust. Täiskasvanutena me ei teadvusta tihti, et vajame kaisutamist, ega oska seda isegi küsida. Selle harjutuse ajal saad lubada endal lõdvestuda ja olla turvaliselt kellegi embuses nii, et ei pea ise midagi kontrollima. Kui see on uudne kogemus, siis see võib olla emotsionaalselt intensiivne. Vajadusel lugege „Emotsioonide ABC-d".</p>
          <p>Selle kaardi ülesande puhul võib ilmneda lapsevanema ja lapse dünaamika. Lubage sellel avalduda, lõdvestuge ning teadke, et see tervendab ning ühendab teid.</p>
          <p>Mida rohkem seda harjutust teha, keelamata endal emotsioone tunda, seda rohkem hakkab keha kaaslast usaldama, mis omakorda võib kaasa tuua sügavamaid naudinguid ja heaolutunnet.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Caressing the hands',
        description: `<h5>Giver</h5>
          <ol>
            <li>Choose a suitable position for caressing your partner's forearms in slow motion, both on the tops and insides.</li>
            <li>Then slow to half speed and proceed even more delicately than usual.</li>
            <li>Hold each of your partner's fingers in your palm separately and let it glide through your hand.</li>
            <li>Place your own fingertips, fully relaxed, in your partner's palms. Then trace circles from the outside inward. Go slower the further in you go.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Relax, close your eyes and enjoy.</li>
            <li>Pay attention to where your hands feel the most sensitive.</li>
          </ol>`,
        additional: `<p>Caressing your partner’s hands is a gentle and intimate way of giving tender loving care. The insides and outsides of forearms, palms, all parts of your fingers and fingertips are extremely sensitive and in everyday life, they often don’t get very much slow, tender and pleasurable touching.</p>
          <p>If you direct your focus and touch to these areas, it opens up an opportunity to discover new sensitive areas. The more you’re able to give this exercise full attention and be conscious of physical stimuli, the greater chance of experiencing new pleasurable sensations.</p>
          <p>To increase your body’s potential for pleasure, the movements should be slow and fluid. Moving at a slower pace than usual will allow your partner to experience many activities and sensations in a new way.</p>`,
      },
      ET: {
        title: 'Käte silitamine',
        description: `<h5>Silitaja</h5>
          <ol>
            <li>Vali endale sobiv asend, et silitada aegluubis ja väga õrnalt kaaslase käsivarsi pealt ja siseküljelt (pilt a).</li>
            <li>Silita veel poole aeglasemalt ja õrnemalt kui tavaliselt.</li>
            <li>Võta kaaslase iga sõrm eraldi oma peopessa ja luba sel libiseda läbi peopesa.</li>
            <li>Hoia enda lõdvestunud sõrmeotsi mõnda aega liikumatult kaaslase peopesades. Seejärel tee ringe väljast-poolt sissepoole (pilt b).</li>
          </ol>
          <p>Mida sissepoole liigud, seda aeglasemaks vii tempo.</p>
          <h5>Silitatav</h5>
          <ol>
            <li>Lõdvestu, sulge silmad ning naudi.</li>
            <li>Märka, kus asuvad kõige tundlikumad kohad sinu kätel.</li>
          </ol>`,
        additional: `<p>Kaaslase käte silitamine on õrn ja intiimne viis näidata armastust ja hoolivust. Käsivarte sise- ja väliskülg, peopesad, sõrmed, sõrmeotsad ja -vahed on ülimalt tundlikud kohad ning tihti saavad igapäevaelus liiga vähe õrna, aeglast ja naudingut pakkuvat puudutust.</p>
          <p>Kui suunad fookuse koos puudutusega nendesse piirkondadesse, avaneb võimalus avastada uusi tundlikke alasid. Mida rohkem suudad tähelepanu sellele harjutusele ja füüsilisele aistingule pöörata, seda suurem võimalus on kogeda uusi naudinguid.</p>
          <p>Selleks, et keha naudingupotentsiaal saaks suureneda, on vaja aeglast ja sujuvat liikumist. Tavapärasega võrreldes aeglasem liikumine võimaldab kogeda paljusid tegevusi ja aistinguid uuel moel.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Touching through clothing',
        description: `<h5>Giver</h5>
          <ol>
            <li>Rub your hands together to warm them up. Then, ever so gently, lay your hands on your partner's body.</li>
            <li>Touch your partner through their clothing at a slow pace, starting with 2 minutes of caressing the hands and feet.</li>
            <li>Then continue touching with the fingertips, even more slowly and tenderly.</li>
            <li>The closer to intimate areas you get, slow down and use a more delicate touch. Don't touch the genitals in this activity.</li>
            <li>Keep your attention focused on where your hand meets your partner's body. Try out different areas of the body and various directions of movement.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Decide whether you want to be on your back or stomach.</li>
            <li>Relax, close your eyes and enjoy.</li>
          </ol>`,
        additional: `<p>Touching is one way of expressing love. It’s both pleasurable and provides a sense of safety since the body is still enveloped in clothing. We don’t feel that we have to open sexually before we’re ready. Slow and smooth movements will increase the body’s potential for pleasure.</p>
          <p>Light touching allows the body to open up and experience pleasure at its own pace. Pleasure can materialize in places and ways you never previously experienced or recognized. As a passive receiver in a state of relaxation, you’ll have a good chance of expanding your body’s finer capability for pleasure. This technique is a way to discover parts of your bodies with varying sensitivity. Caresses through the clothing can make a hesitant partner feel desired.</p>
          <p>As a receiver, you can focus your attention on ways of receiving pleasure and areas of your body that aren’t used to feeling such sensations. You can travel the familiar landscape of desire, but also expand the range and repertoire of pleasure.</p>
          <p>The partner in the giving role has an opportunity to experiment with touching in different, unconventional ways, expanding their “skillset”.</p>`,
      },
      ET: {
        title: 'Puudutus läbi riiete',
        description: `<h5>Puudutaja</h5>
          <ol>
            <li>Hõõru käed soojaks, liiguta aeglaselt kaaslasele lähemale ning aseta õrnalt kehale.</li>
            <li>Puuduta kaaslast läbi riiete aeglases tempos, alustades käte ja jalgade silitamisest 2 minutit.</li>
            <li>Seejärel jätka sõrmeotstega puudutamist veelgi aeglasemalt ja õrnemalt.</li>
            <li>Mida lähemale intiimpiirkondadele jõuad, seda aeglasemaks vii tempo ning õrnemaks puudutus, kuid ära puuduta suguelundeid.</li>
            <li>Hoia tähelepanu käe ja kaaslase keha kokkupuutepunktis. Katseta erinevaid alasid kehal ja proovi eri liikumissuundi.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Vali, kas soovid olla selili või kõhuli.</li>
            <li>Lõdvestu, sulge silmad ning naudi.</li>
          </ol>`,
        additional: `<p>Puudutus on üks armastuse väljendamise viise. See pakub mõnusaid tundeid, samal ajal turvalisust, kuna keha on riietega kaetud. Me ei pea seksuaalselt liialt avanema. Et keha naudingupotentsiaal suureneks, on vaja aeglast ja sujuvat liikumist. Õrnad puudutused lubavad kehal omas tempos avaneda ning kogeda naudinguid. Naudingud võivad avalduda uutes kohtades ja viisidel, mida varem ei ole kogetud ega teadvustatud. Passiivse ja lõdvestunud vastuvõtjana avaneb suur võimalus avardada oma keha peenekoelisemat naudingulist tunnetust. Sellise puudutuse kaudu võid avastada nii enda kui ka partneri kehal rohkem ja vähem tundlikke kohti. Läbi riiete silitamine võib aidata ebakindlal partneril tunda end ihaldusväärsena.</p>
          <p>Vastuvõtjana saad teadvustada endale harjumuspäraseid naudingu vastuvõtmise viise ja oma keha piirkondi, kus sa oled harjunud naudingut saama. Teadvusta oma harjumuspäraseid soove, kuid laienda naudinguküllaseid viise ja piirkondi.</p>
          <p>Puudutaja saab katsetada harjumuspärasest erinevaid puudutusi, laiendades niimoodi oma oskuste pagasit.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Weighted embrace',
        description: `<h5>Both partners</h5>
          <ol>
            <li>One partner lies on top of the other. The one on the bottom should be on a soft surface if at all possible.</li>
            <li>Find a position that is comfortable for both partners and conducive to relaxation.</li>
            <li>The partner on the bottom decides whether to lie on their stomach or back.</li>
            <li>Close your eyes, relax and breathe naturally.</li>
            <li>If you get aroused, let it be and focus on relaxing.</li>
          </ol>
          <p>Note: The lighter partner should lie on top. If desired, try it the other way.</p>
          <p>Use a timer with a soft ringtone instead of the hourglass.</p>`,
        additional: `<p>Lying on top of one another is a trigger for production of oxytocin, which helps reduce stress and promotes relaxation. When your bodies are in sync, a deeper level of connection is possible. Gentle pressure and warmth have a calming effect and create a feeling of closeness and safety.</p>
          <p>If you find it comfortable to lie on top of one another, this position can strengthen intimacy and closeness. But if one partner feels uncomfortable, it becomes counter-productive. It’s important to find a comfortable position and, if need be, fine-tune so that both partners can feel the same sense of relaxation.</p>
          <p>Use this card when you want to bury the hatchet and pause disagreements. It will bring you closer together and later you can come back to settling the issue, if you feel you still need to.</p>`,
      },
      ET: {
        title: 'Peal lamamine',
        description: `<h5>Mõlemad</h5>
          <ol>
            <li>Üks lamab teise peal võimalikult pehmel pinnal.</li>
            <li>Leidke asend, mis oleks mõlemale mugav ja milles saaksite lõdvestuda.</li>
            <li>Alumine valib, kas lamab selili või kõhuli.</li>
            <li>Sulgege silmad, lõdvestuge ja hingake rahulikult.</li>
            <li>Kui tekib erutus, siis luba sel olla ja lõdvestu edasi.</li>
          </ol>
          <p>Oluline: Kergem lamab peal. Soovi korral proovige teistpidi. Kasutage liivakella asemel leebe heliga taimerit.</p>`,
        additional: `<p>Kogu keha kontakt teineteise peal lamades vabastab oksütotsiini, aitab vähendada stressi ja soodustab lõõgastumist. Kuna kehad liibuvad ning lõdvestuvad koos samal ajal, võivad kaks keha ühenduda sügavamal tasandil. Õrn surve ja soojus, mis tekivad teineteise peal lamamisest, rahustavad, tekitades mõlemas turvalisus- ja lähedustunde. Kui teineteise peal lamada on mugav, võib see tugevdada intiimsust ja lähedust. Kui aga üks pool tunneb ebamugavust, on mõju vastupidine. Seepärast on oluline leida mugav asend ning vajadusel seda kohendada, nii et mõlemad saaksid sügavat lõdvestust nautida.</p>
          <p>Seda kaarti võib kasutada erimeelsustest pausi võtmiseks. See aitab teid lähendada ja hiljem võite erimeelsuste juurde tagasi tulla, kui see veel vajalik on.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Stroking the hair',
        description: `<h5>Man</h5>
          <ol>
            <li>Start with very gentle stroking of the hair. The slower you start the more pleasure receptors it awakens.</li>
            <li>Stroke only the hair and the ends of the hair without touching the scalp.</li>
            <li>Tug on the ends of the hair, and slide fingers through the hair.</li>
            <li>Twist strands of hair around your fingers.</li>
            <li>Be creative, alternating between a gentler and firmer stroke.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax, close your eyes and enjoy.</li>
          </ol>
          <p>Note: We recommend combing your hair beforehand.</p>`,
        additional: `<p>Stroking the hair stimulates the nerve endings of the scalp, which can help the female partner relax. Many women find touching their hair to be a special, meaningful sensation. If the male partner takes time to stroke the woman’s hair, the woman can feel wanted and important.</p>
          <p>A woman’s scalp is very sensitive – in fact it is an erogenous zone. Playing with the hair helps the woman come out of her thoughts and into the body, putting her mind on hold and just experiencing what is taking place in her body, inviting deeper pleasure.</p>
          <p>This activity helps slow the flood of thoughts and focus on what is happening in the body and how it feels. To experience even more pleasure, it is important to be connected to what is happening in your body.</p>
          <p>Stroking hair can also provide satisfaction for the male partner, as seeing the female partner relax and be content itself yields a feeling of well-being.</p>`,
      },
      ET: {
        title: 'Juuste silitamine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Alusta väga õrnalt juuste silitamisega. Mida aeglasemalt alustad, seda rohkem naudinguretseptoreid üles ärkab.</li>
            <li>Silita ainult juukseid ja juukseotsi peanahka puudutamata.</li>
            <li>Tõsta juukseid otstest üles ja libista sõrmed juustest läbi.</li>
            <li>Keeruta juukseotsi ümber oma sõrme.</li>
            <li>Ole loominguline, proovides vaheldumisi hellemat ja tugevamat juustega mängimist.</li>
          </ol>
          <h5>Naine</h5>
          <p>Lõdvestu, sulge silmad ning naudi.</p>
          <p>Oluline: Soovituslik on juuksed enne ära kammida.</p>`,
        additional: `<p>Juuste silitamine ergutab peanaha närvilõpmeid, mis võib aidata naisel lõõgastuda. Paljudele naistele on juuste puudutamine eriline ja tähendusrikas. Kui mees võtab aega, et tema juukseid silitada, võib naine tunda, et on talle oluline ja väärtuslik.</p>
          <p>Naise peanahk on väga tundlik ja erogeenne piirkond. Juuste silitamine ja nendega mängimine aitab naisel mõistusest kehasse tulla ning panna mõtted pausile ja lihtsalt kogeda seda, mis toimub, saades sügavamaid naudinguid.</p>
          <p>See tegevus aitab mõttevoogu aeglustada ja tunda seda, mis kehas parasjagu on aktuaalne. Selleks, et kogeda rohkem naudinguid, on oluline olla ühenduses oma kehas toimuvaga.</p>
          <p>Juuste silitamine võib ka mehele rahuldust pakkuda, kuna naise lõõgastumise ja rahulolu nägemine tekitab heaolutunde. Mehel on võimalik tulla peenema tunnetuse ja kogemise tasemele, pakkudes hoolitsevat puudutust.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Rubbing',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Start by pressing your noses together.</li>
            <li>Rubbing the ends of your noses together, move on across your partner's face, neck and the rest of their body in a downward direction.</li>
            <li>Rub your entire face gently and slowly against your partner's whole body in a way that's pleasurable for both of you. Be spontaneous.</li>
            <li>Draw inspiration from some animal like a cat or a dog but be yourself.</li>
            <li>Start the activity in silence and add vocalization if you so desire.</li>
          </ol>
          <p>Important: Don't use your hands for this exercise!</p>`,
        additional: `<p>Rubbing, especially if gentle and slow, can help lower the stress level and create a sense of safety. The skin is full of nerve endings so rubbing can produce either pleasant or unpleasant sensations depending on the type of contact and intensity.</p>
          <p>Listen to your body. This activity helps you bring you out of your mind and into your body and manifests the body’s desire for physical closeness. When you allow your body to move like it wants to, you develop a better rapport with your body’s primal and animal nature. That is a pathway to experiencing how your bodies communicate with each other.</p>
          <p>This activity encompasses bodily contact and movement between the partners in a way that might not adhere to conscious rules or standards but is based purely on instinct, emotion and physical connection.</p>`,
      },
      ET: {
        title: 'Hõõrumine',
        description: `<h5>Mõlemad</h5>
          <ol>
            <li>Alustage nii, et hoiate ninad õrnalt teineteise vastas.</li>
            <li>Ninaga pehmelt hõõrudes liikuge aeglaselt mööda kaaslase nägu, kaela ja ülejäänud keha allapoole.</li>
            <li>Hõõruge õrnalt ja aeglaselt tervet nägu kaaslase kogu keha vastu nii, nagu teile mõlemale meeldib. Olge spontaansed.</li>
            <li>Ammutage inspiratsiooni mõnest loomast, näiteks kass või koer, aga jääge iseendaks.</li>
            <li>Alustage vaikuses ning lisage häälimist, kui soovite.</li>
          </ol>
          <p>Oluline: Ärge kasutage käsi!</p>`,
        additional: `<p>Hõõrumine, eriti õrn ja rahulik, võib aidata alandada stressitaset ja tekitada turvatunde. Nahk on rikas närvilõpmete poolest, seega võib hõõrumine ergutada nii meeldivat kui ka ebameeldivat taju sõltuvalt kontaktist ja intensiivsusest.</p>
          <p>Kuulake oma keha. See tegevus aitab tulla mõistusest kehasse ning keha füüsilise läheduse soovil avalduda. Lubades kehal liikuda nii, nagu tema soovib, saab parema kontakti oma keha ürgse ja loomaliku olemusega. Selle kaudu on võimalik kogeda, kuidas teie kehad omavahel suhtlevad.</p>
          <p>Selline tegevus hõlmab kaaslaste kehalist kokkupuudet ja liikumist viisil, mis ei pruugi järgida teadlikke norme või reegleid, vaid põhineb puhtalt vaistul, emotsioonil ja kehalisel ühendusel.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Hugging',
        description: `<h5>Man</h5>
          <ol>
            <li>While standing, place one hand on the back of the woman's head for two minutes, and the other hand on her back at heart level.</li>
            <li>Slide the lower hand in slow motion so that it is just below the waist.</li>
            <li>Keep your hands steady and firm. Breathe in naturally but deeply into the lower abdomen for two minutes.</li>
            <li>You can remain in that position or slide your hand back to the heart area for a minute.</li>
            <li>Embrace, focusing on experiencing a loving and caring feeling. If you get aroused, allow it to happen and continue embracing.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax and breathe naturally but deeply into the lower abdomen.</li>
          </ol>`,
        additional: `<p>Hugging releases oxytocin, which is the hormone of love and happiness, and increases a sense of trust, closeness and well-being. Through everyday hugging, you can keep a relationship lively and intimate. Even a short hug can express affection, which can improve the quality of a relationship.</p>
          <p>Pleasure can be experienced through a sense of care vested in the heart. Placing a hand on the back of the head can give the female partner a sense of safety and trust. Placing the other hand at the level of the woman’s heart brings about emotional closeness and a loving feeling. Holding a hand on the woman’s waist gives a protective and supportive feeling. It’s the sense that the male partner is holding her securely and it creates a baseline sense of safety that allows the woman to relax and let natural pleasure arise on its own. In this kind of embracing, the male partner takes the lead role.</p>
          <p>Physically holding a partner can have a calming and conciliatory effect in a conflict situation.</p>
          <p>If you would like to continue with the intimacy cards, the male partner can conclude the exercise with his hand on the woman’s waist. But if you want, you can keep on playing connection cards or end the game for this session. End the exercise with your hand over the woman’s heart.</p>`,
      },
      ET: {
        title: 'Kallistamine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Püsti seistes aseta üks käsi 2 minutiks naise kuklale, teine seljale südame kõrgusele (pilt a).</li>
            <li>Libista alumine käsi aegluubis vöökohast veidi allapoole (pilt b).</li>
            <li>Hoia oma käsi tugevalt. Hinga rahulikult ja sügavalt alakõhtu 2 minutit.</li>
            <li>Võid jääda nii või libista käsi minutiks tagasi südame juurde.</li>
            <li>Kallista selliselt, et tunned armastust ja hoolivust. Kui tekib erutus, siis luba sel olla ja kallista edasi.</li>
          </ol>
          <h5>Naine</h5>
          <p>Lõdvestu ning hinga rahulikult ja sügavalt alakõhtu.</p>`,
        additional: `<p>Kallistamine vabastab oksütotsiini ehk armu- ja õnnehormooni, mis suurendab usaldust, lähedust ja heaolutunnet. Igapäevaste kallistuste abil saab suhet hoida elava ja intiimsena. Isegi lühike kallistus võib väljendada kiindumust ja armastust, mis aitab suhte kvaliteeti parandada.</p>
          <p>Naudingulisust võib kogeda hoidmise ja südamest tuleva hoolivuse teel. Käe kuklal hoidmine mõjub õrnalt toetavalt, võib tekitada naises turvatunnet ja usaldust. Hoides teist kätt naise südame kõrgusel, tekib emotsionaalne lähedus ja armastustunne. Naise vöökohal hoides aga annab kaitsva ja toetava tunde. Tunne, et mees hoiab teda kindlalt, loob naisele baasturvatunde, tänu millele saab naine lõdvestuda ja lubada loomulikul naudingul esile kerkida. Selline kallistus näitab, et mees võtab juhirolli.</p>
          <p>Füüsiline hoidmine võib aidata konfliktiolukorras rahustada ja leppimist soodustada.</p>
          <p>Kui soovite jätkata intiimsuse kaartidega, lõpetab mees, käsi naise vöökohal. Kui aga soovite mängida veel ühenduse kaarte või hoopis mängu lõpetada, siis käsi naise südame kohal.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Eye gazing',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Find a suitable position for eye contact and make sure you're at a distance where you're not in physical contact with each other but no farther away than one meter.</li>
            <li>Decide who will look into whose eyes and start the exercise with a soft, loving gaze, without saying anything.</li>
            <li>Breathe deeply at a calm pace and relax your lips and lower jaw.</li>
            <li>If either of you experience a strong emotion, don't suppress it and continue looking into your partner's eyes.</li>
            <li>End the exercise with a hug once five minutes are up.</li>
          </ol>
          <p>Suggestion: Use a timer with a soft ringtone instead of the hourglass.</p>`,
        additional: `<p>The activity on this card gives an opportunity to look into your partner’s eyes for an extended period of time. This sort of eye contact can spark a deep physical experience that brings the partners closer.</p>
          <p>When we look into someone else’s eyes, we become vulnerable. When we’re emotionally open, we can foster an emotional connection with another person. Being vulnerable can be terrifying because we’re afraid of getting hurt, but it is in this state that the potential for the deepest connection and intimacy lies.</p>
          <p>Looking into the eyes directly can dredge up emotions that may not have felt safe or even conceivable in the past. When the emotions are unleashed, a deeper relaxation follows along with a possibility of experiencing even more of a connection and enjoyment. In letting go, we make room for new feelings. See the “ABCs of Emotions”.</p>
          <p>An extended period of time looking into each other’s eyes can make it seem like your partner’s face is changing shape and taking on new overtones. This phenomenon is quite common and is called the Troxler effect, which is an optical illusion: if you focus on one fixed point, the point’s surroundings can start seeming distorted.</p>
          <p>Regularly looking into your partner’s eyes can help couples maintain the quality of their relationship and prevent emotional distance from creeping in.</p>`,
      },
      ET: {
        title: 'Silma vaatamine',
        description: `<h5>Mõlemad</h5>
          <ol>
            <li>Leidke sobiv vaatamise asend ja kaugus selliselt, et puudub teineteisega füüsiline kontakt, kuid ärge olge teineteisest kaugemal kui meeter.</li>
            <li>Valige, kumba silma vaatate, ning tehke seda vaikuses pehme ja armastava pilguga.</li>
            <li>Hingake sügavalt rahulikus tempos ning lõdvestage huuled ja alalõug.</li>
            <li>Kui kummalgi teist kerkib üles emotsioon, siis ärge suruge seda alla ja vaadake kaaslasele silma edasi.</li>
            <li>Lõpetage kallistades, kui 5 minutit on läbi.</li>
          </ol>
          <p>Oluline: Kasutage liivakella asemel leebe heliga taimerit.</p>`,
        additional: `<p>See kaart annab võimaluse vaadata tavapärasest pikemalt oma kaaslasele silma. Silma vaatamisest võib alguse saada sügav ja lähendav füüsiline kogemus.</p>
          <p>Silma vaadates muudame end haavatavaks. Teineteisega saame emotsionaalse ühenduse luua siis, kui oleme emotsionaalselt avatud. Haavatav olla on hirmus, sest kardame haiget saada, aga just selles peitub võimalus kõige sügavamaks ühenduseks ja intiimsuseks.</p>
          <p>Silma vaatamine võib tuua üles emotsioone, mida varem pole olnud turvaline või võimalik tunda. Kui emotsioonid vabanevad, tekib sügavam lõdvestus ning võimalus veelgi enam ühendust ja naudinguid kogeda. Vabanedes tekib ruumi uutele tunnetele. Lugege „Emotsioonide ABC-d".</p>
          <p>Pikemaajalisel silma vaatamisel võib tunduda, et kaaslase nägu hakkab muutuma ning omandama teist kuju ja varjundeid. See nähtus on üsna levinud ja seda nimetatakse Troxleri efektiks, mis on optiline illusioon: kui keskendud ühele kindlale punktile, siis muu selle ümber võib hakata moonduma.</p>
          <p>Regulaarne silma vaatamine võib aidata paaridel hoida suhte kvaliteeti ja vältida emotsionaalset kaugenemist.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Whispers of the lips',
        description: `<h5>Giver</h5>
          <ol>
            <li>Kiss your partner's head, face, neck, ears and hands.</li>
            <li>The contact with the lip should be slow, gentle and loving.</li>
            <li>Use your lips, not your hands.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Get in a suitable seated or reclining position.</li>
            <li>Relax, close your eyes and enjoy.</li>
            <li>Accept the kisses without doing anything in return.</li>
          </ol>
          <p>Tip: If the receiving partner has long hair, tie it back to make the ears and neck more accessible.</p>`,
        additional: `<p>A multitude of light kisses on your partner’s face, neck and ears and hands signals that they are accepted and loved. Their body becomes less inhibited, allowing them to experience more pleasure.</p>
          <p>As a passive receiver, the partner being kissed feels that they’re in an expectation-free space where they can be themselves – not who their partner wants to be or what he wants them to do. Deep emotions can surface at this point. If needed, read through the “ABCs of Emotions” for tactics for validating and processing feelings.</p>
          <p>Both the giver and the receiver can channel a love vibe, and start seeing perfection in their partner’s imperfect body. When someone else lavishes loving attention on us, it becomes easier to love our own body. The less inhibited and more confident we feel in our bodies, the more pleasure we are able to experience.</p>`,
      },
      ET: {
        title: 'Musitamine',
        description: `<h5>Musitaja</h5>
          <ol>
            <li>Musita oma kaaslase pead, nägu, kaela, kõrvu ning käsi.</li>
            <li>Puuduta huultega aeglaselt, õrnalt ja armastavalt.</li>
            <li>Kasuta ainult huuli, mitte käsi.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Vali sobiv istuli- või pikaliasend.</li>
            <li>Lõdvestu, sulge silmad ning naudi.</li>
            <li>Võta musid midagi tegemata vastu.</li>
          </ol>
          <p>Oluline: Kui vastuvõtjal on pikad juuksed, võiks need kinni panna, et kaaslasel oleks kergem kõrvade ja kaelani jõuda.</p>`,
        additional: `<p>Kaaslase pea, näo, kaela, kõrvade ning käte musitamine annab talle signaali, et teda aktsepteeritakse ja armastatakse. Tema keha muutub vabamaks, tänu millele saab kogeda suuremat naudingut.</p>
          <p>Passiivse vastuvõtjana võib musisaajal tekkida ootustevaba ruum, kus ta saab olla tema ise, ilma et peaks kaaslase jaoks keegi olema või midagi tegema. Selles kohas võivad üles kerkida emotsioonid. Lubage neil tunnetel lihtsalt olla ja lõdvestuge. Vajadusel lugege "Emotsioonide ABC-d".</p>
          <p>Nii musitaja kui musitatav võivad saavutada kontakti armastustundega ning märgata teise ebatäiuslikus kehas perfektsust just täpselt sellisena, nagu see parasjagu on. Kui keegi teine pakub meie kehale armastavat tähelepanu, on ka endal kergem oma keha armastada. Mida vabamalt ja kindlamalt end oma kehas tunneme, seda rohkem naudinguid suudame kogeda.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Holding',
        description: `<h5>Giver</h5>
          <ol>
            <li>Sit behind your partner's back.</li>
            <li>Put your arms around your partner and hold them supportively and securely.</li>
            <li>Offer a safe and loving presence without doing anything.</li>
            <li>If your partner starts experiencing strong emotions, they should be allowed to go with the flow. Continue to hold them lovingly and unjudgementally.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Sit still and allow your partner to take a position behind your back.</li>
            <li>Close your eyes and relax your body, breathe deeply and calmly.</li>
          </ol>`,
        additional: `<p>Holding your partner signals to them that you support them physically and emotionally. The physical presence of a partner helps mitigate worry and anxiety, offers a sense of security and someone to lean on. Experiencing a sense of safety allows each partner to unfold more deeply at an emotional level. The deeper the emotional opening, the greater potential for physical pleasure.</p>
          <p>If the person being held feels their body resist, don’t fight the emotion. Just try to relax. For some, being held from behind their back may be uncomfortable or seem strange, and many will find themselves distracted by everyday thoughts. If this happens, it’s a good idea to focus on your breathing.</p>
          <p>Being held like this signals to the body that it doesn’t have to be strong anymore. If the two partners have a trusting relationship, the person being held can allow themselves to be vulnerable, imperfect, visibly emotional – exactly who they are. And that’s good. When we drop our defensive armor, we have a more clearer sense of being in the moment and we can access the deeper pleasures that go along with the territory.</p>`,
      },
      ET: {
        title: 'Hoidmine',
        description: `<h5>Hoidja</h5>
          <ol>
            <li>Istu kaaslase selja taha.</li>
            <li>Aseta käed kaaslase ümber ning hoia teda toetavalt ja kindlalt.</li>
            <li>Paku turvalist ja armastavat kohalolu ilma midagi tegemata.</li>
            <li>Kui kaaslasel kerkib üles emotsioon, siis luba tal seda kogeda ning hoia teda armastavalt ja hinnanguid andmata.</li>
          </ol>
          <h5>Hoitav</h5>
          <ol>
            <li>Istu ning luba kaaslane enda selja taha.</li>
            <li>Sulge silmad ning lõdvesta keha, hingates sügavalt ja rahulikult.</li>
          </ol>`,
        additional: `<p>Hoidmine tekitab tunde, et kaaslane toetab meid nii füüsiliselt kui ka emotsionaalselt. Kaaslase füüsiline kohalolek aitab vähendada muret ja ärevust, pakkudes turvatunnet ning kindlat seljatagust. Turvatunde kogemine on alus selleks, et kumbki saaks avada ennast emotsionaalsel tasemel sügavamalt. Mida sügavam emotsionaalne avanemine toimub, seda suurem on ka füüsilise naudingu potentsiaal.</p>
          <p>Kui hoitav tajub oma kehas vastupanu, tuleb sel tundel lubada olla ja püüda lõdvestuda. Mõnele võib selja tagant hoidmine olla ebamugav ja harjumatu, paljudel võivad peas hakata tiirlema argimõtted. Sellisel juhul tasub tuua tähelepanu hingamisele.</p>
          <p>Selline hoidmine saadab kehale justkui sõnumi, et enam ei pea tugev olema. Kui kaaslaste vahel valitseb usalduslik suhe, saab hoitav olla haavatav, ebatäiuslik, emotsioone välja näidata ja olla just selline, nagu ta on, ning see on okei. Kui langetame kaitserüü, siis seda enam saame kogeda hetkes olemist ja sellega kaasnevaid sügavamaid naudinguid.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Trust',
        description: `<h5>Dominant</h5>
          <ol>
            <li>Blindfold your partner, stand behind their back and place your hands on their shoulders.</li>
            <li>Stand in place for 30 seconds just being aware of each other.</li>
            <li>Start guiding your partner slowly, observing how they respond to it.</li>
            <li>Be attentive and guide your partner so that they come to trust your guidance.</li>
            <li>You are responsible for your partner's safety: if there are steps or other obstacles in the room, you have to tell them where and how to walk.</li>
            <li>If your partner signals that they need a break, take time out and allow them to experience their emotions.</li>
          </ol>
          <h5>Submissive</h5>
          <ol>
            <li>Relax and trust your partner.</li>
            <li>Take note of the feelings that you experience and if desired, express them to your partner.</li>
            <li>If your trust level isn't where you're comfortable moving blindfolded, indicate that you need a break and take note of what you feel.</li>
          </ol>`,
        additional: `<p>The activity on this card allows a couple to experiment with different roles: leading and being led. When one partner trusts the other to guide them, it can foster deeper trust.</p>
          <p>Blindfold your partner makes them vulnerable and dependent on you, and gives one person the possibility to take responsibility for the other’s safety and well-being. Not being able to see forces the guided partner to listen to the guiding partner better and pay attention to their instructions. The person in charge has to be attentive, aware of potential dangers and prevent them.</p>
          <p>Guiding your partner safely deepens trust. But a mistake on the part of the dominant partner can incite negative emotions and trust can be damaged in the short term. For more on dealing with strong feelings, read the ABCs of Emotions.</p>
          <p>If safe and friendly communication is lacking in a relationship, it’s possible to learn these skills in the course of this exercise. A successfully completed exercise cements the bond between the partners in a positive way, fostering a sense of safety.</p>`,
      },
      ET: {
        title: 'Usaldus',
        description: `<h5>Juhtija</h5>
          <ol>
            <li>Seo kaaslasel silmad kinni, seisa tema selja taha ja aseta käed tema õlgadele.</li>
            <li>Seiske 30 sekundit kohapeal teineteist tunnetades.</li>
            <li>Alusta kaaslase juhtimist aeglaselt, jälgides, kuidas ta sellele reageerib.</li>
            <li>Ole tähelepanelik ja juhi kaaslast selliselt, et ta sinu juhtimist usaldaks.</li>
            <li>Sina vastutad kaaslase turvalisuse eest: kui ruumis on astmed või mõni takistus, siis ütle talle, kuhu ja kuidas peab astuma.</li>
            <li>Kui kaaslane annab märku, et vajab pausi, siis peatu ja luba tal oma tundeid kogeda.</li>
          </ol>
          <h5>Juhitav</h5>
          <ol>
            <li>Lõdvestu ja usalda kaaslast.</li>
            <li>Märka enda sees üles kerkivaid tundeid ja soovi korral väljenda neid kaaslasele.</li>
            <li>Kui liikumine ületab su usalduse piire, siis anna märku, et vajad pausi, ning koge tekkivaid tundeid.</li>
          </ol>`,
        additional: `<p>See kaart võimaldab paaril katsetada eri rolle: juhtija ja juhitav. Kui üks usaldab teist end juhtima, siis tekib sügavam usaldustunne.</p>
          <p>Silmade kinnisidumine teeb haavatavaks ja muudab kaaslasest sõltuvaks, mis omakorda annab ühele võimaluse võtta vastutust teise turvalisuse ja heaolu eest. Nägemise puudumine sunnib juhitavat oma kaaslast rohkem kuulama ja tema juhistele tähelepanu pöörama. Juhtija peab olema tähelepanelik, märkama võimalikke ohte ja neid ennetama.</p>
          <p>Turvaline juhtimine süvendab usaldust. Teisalt võib juhtija eksimus tuua esile hoopis negatiivseid emotsioone ja usaldus võib saada ajutiselt kahjustatud. Tugevate tunnete korral lugege „Emotsioonide ABC-d".</p>
          <p>Kui turvaline ja sõbralik kommunikatsioon suhtes pole selge, siis harjutuse käigus on võimalik seda õppida. Edukalt sooritatud ülesanne ühendab ning tekitab positiivset seotust ja turvatunnet.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Stroking the head',
        description: `<h5>Giver</h5>
          <ol>
            <li>Rub your hands together to warm them up, and place them on your partner's shoulders. Hold them there for 10 seconds.</li>
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
        additional: `<p>The face, neck and ears are very sensitive areas of our body, responding especially to slow and gentle caresses. The slower the touch, the more time the body has to experience everything.</p>
          <p>Light touching of the face and head is something that both women and men enjoy. It can have a calming effect, helping your partner to relax and feel cared for. After all, we usually allow these places to be touched only by those we trust. Through caressing, we can practice the art of tenderness, and experience how it affects us and our partners.</p>
          <p>Touching your partner can release happiness hormones like oxytocin and endorphin. These chemicals will make both of you feel calmer and happier, strengthening your relationship.</p>`,
      },
      ET: {
        title: 'Pea silitamine',
        description: `<h5>Puudutaja</h5>
          <ol>
            <li>Hõõru peopesad soojaks ja aseta kaaslase õlgadele. Hoia 10 sekundit.</li>
            <li>Silita sõrmeotstega õrnalt ja väga aeglaselt kaela külgi ja tagaosa.</li>
            <li>Liigu edasi mööda kõrvu ning kõrvataguseid.</li>
            <li>Silita nägu, põski, lõuga, otsaesist ja kulme.</li>
            <li>Võid õrnalt puhuda juuksepiirile, kõrvadele ja kaelale.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <p>Lõdvestu, sulge silmad ja naudi.</p>
          <p>Oluline: Mõni eelistab pigem õrna ja aeglast silitust, teine tugevamat puudutust.</p>`,
        additional: `<p>Nägu, kael ja kõrvad on väga tundlikud piirkonnad meie kehal, eriti aeglase ja õrna silituse suhtes. Mida aeglasemalt puudutada, seda rohkem aega on kehal kõike kogeda.</p>
          <p>Õrnu puudutusi nendes piirkondades naudivad nii naised kui ka mehed. Sellised puudutused võivad mõjuda rahustavalt, aidates kaaslasel lõõgastuda ja tunda end hoituna. Me lubame nende kohtade puudutamist tavaliselt ainult neile, keda usaldame. Silitades saame harjutada õrnuse kunsti ja kogeda selle mõju endale ja paarilisele.</p>
          <p>Kaaslase puudutamine vabastab kehas õnnehormoone, nagu oksütotsiin ja endorfiin. Need kemikaalid aitavad teil mõlemal tunda end rahulikumalt ja õnnelikumalt, tugevdades suhet.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Back and shoulder massage',
        description: `<h5>Giver</h5>
          <ol>
            <li>With your partner lying face down, straddle your partner's back with your knees planted, in a way that's comfortable for both of you</li>
            <li>Place both your hands gently above your partner's heart.</li>
            <li>Lightly run your fingertips across their entire back and slowly increase pressure.</li>
            <li>Move your hands to the shoulders and start kneading.</li>
            <li>Increase the intensity of the shoulder massage moderately. But keep the movements smooth and consistent.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Find a comfortable position and close your eyes.</li>
            <li>Breathe in deep and keep your focus on relaxing your body.</li>
            <li>Give the giver feedback if you want a lighter or stronger massage.</li>
          </ol>`,
        additional: `<p>The shoulders are a sink for a lot of stress, especially due to work at computers and hunching over smart devices. A massage focused on these areas is a good way to release that stress. The more relaxed the shoulders and back are, the more pleasure the body can feel.</p>
          <p>A massage helps both partners restore their connection with their body and slow down the flood of thoughts.</p>
          <p>The activity on this card can potentially foster a non-sexual physical connection. Regularly administering back and shoulder massages can be an antidote to the fast pace of life and remind us how important physical contact is in maintaining and strengthening emotional ties.</p>`,
      },
      ET: {
        title: 'Selja- ja õlamassaaž',
        description: `<h5>Masseerija</h5>
          <ol>
            <li>Istu kaaslase tagumikule, põlved maas, nii et mõlemal oleks mugav.</li>
            <li>Aseta mõlemad käed pehmelt südamepiirkonda.</li>
            <li>Jaga sõrmeotstega õrnu puudutusi üle terve selja ning suurenda aeglaselt puudutuste tugevust.</li>
            <li>Liigu kätega õlgadele ning alusta mudimist.</li>
            <li>Suurenda mõõdukalt õlgade masseerimise tugevust. Hoia liikumine sujuv ja ühtlane.</li>
          </ol>
          <h5>Masseeritav</h5>
          <ol>
            <li>Leia meeldiv asend ja sulge silmad.</li>
            <li>Hinga sügavalt ning hoia fookus keha lõdvestamisel.</li>
            <li>Anna tagasisidet, juhul kui soovid õrnemat või tugevamat massaaži.</li>
          </ol>`,
        additional: `<p>Õlgadesse koguneb palju pingeid, eriti arvutitöö ja nutiseadmete pärast. Õla- ja seljamassaažiga saab pingeid vabastada. Mida lõdvestunumad on õlad ja selg, seda enam on keha võimeline naudinguid tundma.</p>
          <p>Massaaž aitab mõlemal poolel taastada ühendust oma kehaga ning aeglustada mõttetulva.</p>
          <p>Selle kaardi abil on võimalik luua mitteseksuaalne füüsiline ühendus. Regulaarne õla- ja seljamassaaž aitab tasakaalustada kiire elutempo mõjusid ning tuletab meelde, kui oluline on kehakontakt emotsionaalsete sidemete säilitamisel ja tugevdamisel.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Foot massage',
        description: `<h5>Giver</h5>
          <ol>
            <li>Rub your hands to warm them up.</li>
            <li>Placing one hand underneath your partner's leg, slide the other hand over the calf muscle until you reach the big toe and pull on the toe, letting it run through your fingers.</li>
            <li>Repeat step #2 with each toe.</li>
            <li>Massage the lower leg and sole of the foot gently.</li>
            <li>Repeat the same with the other leg.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Lie on your stomach, relax, close your eyes and enjoy.</li>
          </ol>`,
        additional: `<p>The legs and feet take an everyday beating, but often don’t get enough care. A foot massage alleviates the pent-up strain. It can be especially valuable if both partners are looking for calm and caring contact. A foot massage is a simple way to strengthen a relationship.</p>
          <p>The sole of the foot, toes, skin between the toes, shins and calves all have many places that respond pleasurably to massage.</p>
          <p>A foot massage can even be satisfying for the person administering the massage, because it’s a vicarious experience to see your partner relax and be content. If your partner falls asleep during the massage, that’s fine, because it shows that they were simply tired, but were able to relax and feel like they were in a safe place.</p>`,
      },
      ET: {
        title: 'Jalamassaaž',
        description: `<h5>Masseerija</h5>
          <ol>
            <li>Hõõru käed soojaks.</li>
            <li>Toeta jalga ühe käega, teise käega libista kerge survega aeglases tempos üle sääremarja kuni suure varbani (pilt a) ja tõmba varvas näppude vahelt läbi (pilt b).</li>
            <li>Korda 2. punkti iga varbaga.</li>
            <li>Masseeri õrnalt säärt ja talda.</li>
            <li>Korda sama teisel jalal.</li>
          </ol>
          <h5>Masseeritav</h5>
          <p>Leba kõhuli, lõdvestu, sulge silmad ja naudi.</p>`,
        additional: `<p>Jalad kannavad igapäevast pinget, aga jäävad tihti tähelepanuta. Jalamassaaž võib aidata lõõgastuda ja leevendada füüsilist pinget. See võib olla eriti väärtuslik, kui mõlemad paarilised soovivad rahulikku ja hoolivat kontakti. Jalamassaaž on lihtne viis tugevdada paarisuhet.</p>
          <p>Jalatalla all, varvastel, varvaste vahel, säärtel võib olla palju tundlikke kohti, mille mudimine toob naudingut.</p>
          <p>Jalamassaaž võib masseerijalegi rahuldust pakkuda, kuna kaaslase lõõgastumise ja rahulolu nägemine tekitab heaolutunde. Kui kaaslane jääb massaaži käigus magama, siis on hästi, sest see näitab, et ta lihtsalt oli väsinud, lõdvestus ja tundis end turvaliselt.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.CONNECTION,
    translations: {
      EN: {
        title: 'Connected breathing',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Fill your lungs halfway and put your lips together.</li>
            <li>The male partner breathes out through his mouth and the female partner draws the same air into her lungs.</li>
            <li>The female partner breathes out through her mouth and the male partner draws the air into his lungs.</li>
            <li>While one is breathing in, the other is breathing out.</li>
            <li>Breathe in this manner calmly and slowly, keeping your lips together the whole time so no new air is introduced and the air in the lungs does not leak out.</li>
            <li>When one partner withdraws, keep your eyes closed for some time in silence</li>
            <li>Repeat the whole process at least twice.</li>
          </ol>
          <p>Note: Breathing in this matter can cause dizziness and a lethargic feeling.</p>`,
        additional: `<p>This type of kissing can create a deep bond between two people. Breathing – the whole underpinning of life – becomes a shared experience. Sharing air in this way creates a special kind of physical and energetic connection.</p>
          <p>Slowing and synchronizing your breathing with your partner’s breaths calms the nervous system, increases body awareness and can even put you in a trance. It can be a near mystical experience, as if two souls are melting into one. If you focus on breathing and presence, it can help to create a spiritual experience with the boundary between I and thou disappears.</p>
          <p>If after uttering “Stop”, you feel the impulse to talk about it, ignore the urge and opt for silence instead. This can get you into a state of transformed consciousness where the mind is still with a deeper presence and inner peace.</p>`,
      },
      ET: {
        title: 'Ühendatud hingamine',
        description: `<h5>Mõlemad</h5>
          <ol>
            <li>Hingake pool kopsu täis ja pange huuled kokku.</li>
            <li>Mees hingab suu kaudu välja ja naine tõmbab sama õhu enda kopsudesse.</li>
            <li>Naine hingab suu kaudu välja ning mees tõmbab sama õhu enda kopsudesse.</li>
            <li>Kui üks hingab sisse, siis teine samal ajal välja.</li>
            <li>Hingake selliselt rahulikult ja aeglaselt, hoides huuli kogu aeg koos nii, et uut õhku peale ei satuks ning kopsudes olev õhk ei lekiks.</li>
            <li>Kui üks teist eemaldub ja ütleb: "Stopp!", siis hoidke silmad mõnda aega vaikides suletud.</li>
            <li>Tee kogu protsess läbi vähemalt 2 korda.</li>
          </ol>
          <p>Oluline: Sellisel viisil hingamine võib tekitada pearinglust ja uimasust.</p>`,
        additional: `<p>Seda tüüpi suudlus võib luua sügava ühenduse kahe inimese vahel, kus hingamine – kogu elu alus – muutub jagatavaks kogemuseks. Õhu jagamine tekitab erilise füüsilise ja energeetilise sideme, kus mõlemad sõna otseses mõttes jagavad hingeõhku.</p>
          <p>Oma hingamise aeglustamine ja sünkroonimine kaaslase omaga võib rahustada närvisüsteemi, suurendada kehalist teadlikkust ja tekitada omamoodi transi või joovastuse. Selline suudlus võib olla ka sümboolne – justkui kahe hinge ühtesulamine. Kui keskenduda hingamisele ja kohalolekule, võib see aidata luua vaimse kogemuse, kus kaob piiritunne "mina" ja "sina" vahel.</p>
          <p>Kui peale „Stopp!" ütlemist tuleb impulss midagi rääkida, siis tuleks seda eirata ja vaikida. Seeläbi võib tekkida muutunud teadvuse seisund, kus mõistus vaikib ja tekib sügavam kohalolu ning sisemine rahu.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    isFree: true,
    translations: {
      EN: {
        title: 'Compliments',
        description: `<h5>Giver</h5>
          <ol>
            <li>Behold your partner's body as if they were the most beautiful and sexy creature on Earth.</li>
            <li>Think of at least three things about their body that you really like. Tell them what they are.</li>
            <li>You can gently and lovingly touch and stroke the part of their body that you really like.</li>
            <li>Use sentences like the following examples:</li>
          </ol>
          <p>a) "I think your … is beautiful",</p>
          <p>b) "Your … gets me excited",</p>
          <p>c) "I find your … sexy".</p>
          <h5>Receiver</h5>
          <ol>
            <li>Look your partner in the eye and accept the compliment gratefully.</li>
          </ol>`,
        additional: `<p>Sincere compliments are like a caress for our body on the emotional level. They make us feel good and open up to the person giving us compliments. When we feel desired and sexy, that’s a good place to build on for even more pleasure!</p>
          <p>Many people don’t get enough acknowledgement in their lives. Compliments from a partner can increase the desire to be together with someone. We recommend partial disrobing to come out of the comfort zone, and sincere compliments are a good “cure” for discomfort.</p>
          <p>Be sincere when you are complimenting each other. Think about what you genuinely like about each other. If your loved one doesn’t feel that a compliment is sincere, it can actually backfire and hurt trust. If your partner feels the compliment is sincere but doubts that it is true, it can still have a positive effect. The more you reinforce the same compliment, the more your partner will open up and start believing in themselves.</p>
          <p>Regularly complimenting your partner can become a habit that can improve the mood and general attitude for both partners. It’s important for a relationship to contain more positive interactions than negative ones. Compliments help support a positive and healthy relationship and keep romance alive. Acknowledging your partner’s great qualities may only take a second but can have a long-lasting effect.</p>`,
      },
      ET: {
        title: 'Komplimendid',
        description: `<h5>Tegija</h5>
          <ol>
            <li>Vaata oma kaaslase keha sellise pilguga, nagu ta oleks kõige kaunim ja seksikam olevus.</li>
            <li>Leia vähemalt kolm asja tema kehal, mis Sulle eriti meeldivad, ja nimeta need.</li>
            <li>Võid õrnalt ja armastavalt puudutada ning silitada kehaosa, mis sulle eriti meeldib.</li>
            <li>Kasuta järgnevaid näitelauseid: a) „Minu meelest on sinu ... kaunis", b) „Mind erutab sinu ...", c) „Minu silmis on sinu ... seksikas".</li>
          </ol>
          <h5>Saaja</h5>
          <p>Vaata kaaslasele silma ning võta komplimendid tänulikult vastu.</p>`,
        additional: `<p>Siirad komplimendid on justkui pai meie kehale emotsionaalsel tasandil. Need panevad meid end hästi tundma ning avanema just sellele inimesele, kes meile neid teeb. Kui tunneme end ihaldatu ja seksikana, loob see hea pinnase edasisteks naudinguteks.</p>
          <p>Paljud kannatavad tunnustuse puudujäägi all ning oma kaaslase komplimendid suurendavad soovi temaga koos olla. Soovitame rohkem riideid ära võtta, et murda mugavustsoonist välja ja siirad komplimendid saaksid ebamugavust ravida.</p>
          <p>Tehke teineteisele siiraid komplimente. Tunnetage, mis teile päriselt teineteises meeldib. Kui kallim ei tunne, et kompliment on siiras, lõhub see usaldust. Kui kaaslane tunneb, et kompliment on siiras, aga ise kahtleb selles, on komplimendil ikkagi positiivne mõju. Mida rohkem sama komplimenti teha, seda rohkem kaaslane avaneb ja hakkab seda ise ka uskuma.</p>
          <p>Kui komplimente tehakse regulaarselt, muutub see harjumuseks, mis parandab mõlema tuju ja üldist suhtlust. Suhetes on oluline, et positiivne suhtlus ületaks negatiivse. Komplimendid aitavad hoida suhet positiivse ja tervena, samuti hoida elus romantikat. Tunnustamine võtab vaid hetke, kuid selle mõju võib kesta kaua.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'How deep is a kiss?',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Relax the lips and lower jaw.</li>
            <li>Before your lips touch, keep them very close to one another for about 30 seconds and let excitement and anticipation grow.</li>
            <li>Try a minute of foreplay: • touch your partner's lips for just a brief instant and then pull back • press your lips gently to your partner's lips and then pull back</li>
            <li>Continue with delicate and slow kissing.</li>
            <li>Finally introduce the tongue, if that is what both of you feel like.</li>
          </ol>
          <p>Suggestion: Use a timer with a soft ringtone instead of the hourglass.</p>`,
        additional: `<p>Prolonged kissing is much more than a physical activity – it’s a way to strengthen love, keep passion alive and improve emotional and physical well-being in a relationship.</p>
          <p>Kissing triggers production of substances like oxytocin and endorphins, which can relax the body and uplift the spirits. Kissing releases dopamine and serotonin in the brain which create a sense of happiness and also act as mood lifters.</p>
          <p>Kissing can be erotic – a turn-on that kindles a spark and physical attraction. It creates a sincere intimacy and allows you to meet in love.</p>
          <p>Extended kissing gives you a chance to reflect more deeply on what is going on in your body. It awakens many pleasure receptors. If up to this point in your life, you’ve only experienced heated, passionate kisses, give slower ones a chance.</p>
          <p>Many women experience pleasure in their labia during kissing. A slower approach can unlock deeper pleasures during lovemaking.</p>`,
      },
      ET: {
        title: 'Suudlemine',
        description: `<h5>Mõlemad</h5>
          <ol>
            <li>Lõdvestage huuled ja alalõug.</li>
            <li>Enne kui teie huuled kokku puutuvad, hoidke neid teineteise lähedal umbes pool minutit ning lubage ootuselevusel kasvada.</li>
            <li>Proovige minut aega eelmängu: puudutage hetkeks õrnalt kaaslase huuli ja eemalduge; hoidke õrnalt huuli kaaslase omade vastas ja eemalduge.</li>
            <li>Jätkake õrnade ja aeglaste suudlustega.</li>
            <li>Lõpuks võtke kasutusele keel, kui mõlemal selline tunne tekib.</li>
          </ol>
          <p>Oluline: Kasutage liivakella asemel leebe heliga taimerit.</p>`,
        additional: `<p>Suudlemine on palju enamat kui füüsiline tegevus – see on viis tugevdada armastust, hoida suhtes kirge ja parandada nii emotsionaalset kui ka füüsilist heaolu. Suudlemine vabastab stressi vähendavaid aineid, nagu oksütotsiin ja endorfiinid, mis aitavad lõõgastuda ja parandada meeleolu. Suudlemine vabastab ajus dopamiini ja serotoniini, mis tekitavad õnnetunnet ja parandavad samuti meeleolu.</p>
          <p>Suudlemine võib olla erootiline ja sütitav, aidates hoida suhtes sädet ja füüsilist külgetõmmet. See loob südamlikku intiimsust ja lubab armastuses kohtuda.</p>
          <p>Aeglane lähenemine ja suudlemine annab võimaluse kontakti saada sellega, mis meie kehas toimub. See äratab paljud naudinguretseptorid. Kui olete seni kogenud kiireid suudlusi, siis anna võimalus aeglastele.</p>
          <p>Paljud naised kogevad suudlemise ajal naudingut häbememokkades. Aeglane lähenemine võib tuua kaasa sügavamaid naudinguid armatsedes.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Ghost of a touch',
        description: `<h5>Giver</h5>
          <ol>
            <li>Touch your partner as delicately and slowly as possible with your fingertips, the fringe of a scarf or feather.</li>
            <li>Move along the body in an inside-out direction and then upward along the sides of the body.</li>
            <li>Stroke the insides of the arms and thighs in the same manner. The neck, too.</li>
            <li>Brushing against the genitals in passing is also great.</li>
          </ol>
          <p>Suggestion: Slow down your movements to half speed, then to a quarter speed.</p>
          <h5>Receiver</h5>
          <ol>
            <li>Relax, close your eyes and enjoy.</li>
          </ol>`,
        additional: `<p>The lightest of touches awakens pleasure receptors that may go overlooked in everyday life.</p>
          <p>Light touching helps restore intimacy that can decline over time due to routine and everyday duties, and bring back a sense of discovery and magic. Often, this kind of touching occurs early on in a relationship, but over time can be relegated to the background.</p>
          <p>If your partner falls asleep during this exercise, that’s normal. Maybe they were just tired, and since they felt like they were in a safe place, they dropped off. Next time, try the exercise when you’re both well-rested.</p>
          <p>In our fast-paced world, there’s a shortage of slow pleasure and presence – this “ghost of a touch” exercise offers both.</p>`,
      },
      ET: {
        title: 'Õhkõrn puudutus',
        description: `<h5>Puudutaja</h5>
          <ol>
            <li>Puuduta kaaslast väga õrnalt ja nii aeglaselt kui võimalik sõrmeotste, salli narmaste või sulega.</li>
            <li>Liigu mööda keha keskelt ülalt alla ning külgi pidi alt üles.</li>
            <li>Silita samal moel käte ja reite sisekülgi ning kaela.</li>
            <li>Suguelundeid võid õrnalt riivata.</li>
          </ol>
          <h5>Saaja</h5>
          <p>Lõdvestu, sulge silmad ning naudi.</p>
          <p>Oluline: Proovi kaaslast puudutada poole aeglasemalt ja siis sellest omakorda veel poole aeglasemalt.</p>`,
        additional: `<p>Õhkõrn puudutus äratab keha naudingulisuse ning aitab mõlemal keskenduda väikestele aistingutele, mis igapäevaelus võivad tähelepanuta jääda.</p>
          <p>Õrnad puudutused aitavad taasluua intiimsust, mis kipub rutiini ja igapäevakohustuste tõttu ajapikku vähenema, ning toob tagasi avastamise ja tundlikkuse elemendid. Sageli on sellised puudutused tugevalt esindatud suhte alguses, kuid võivad ajaga tagaplaanile jääda.</p>
          <p>Kui kaaslane jääb puudutuste käigus magama, siis see on normaalne. See näitab, et ta oli lihtsalt väsinud, lõdvestus ja tundis end turvaliselt. Proovige harjutust järgmine kord puhanuna.</p>
          <p>Meie kiires maailmas jääb puudu aeglastest hetkedest ja kohalolust – õhkõrn puudutus pakub mõlemat.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Kissing the neck',
        description: `<h5>Giver</h5>
          <ol>
            <li>Inhale the essence of your partner's body and as you exhale, blow gently on their neck.</li>
            <li>Continue running your lips and nose slowly along your partner's body.</li>
            <li>Introduce some kisses. You can also try gentle nibbling.</li>
            <li>Move on to the ears, using the same techniques.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Relax, close your eyes and enjoy.</li>
            <li>Indicate with your voice or breathing what movements and areas are the most pleasurable for you, so that your partner can focus on those.</li>
          </ol>`,
        additional: `<p>In both women and men, the neck and ears are very sensitive and in fact erogenous zones. Nuzzling, breathing, kissing and nibbling all awaken sexual sensations. Unlike direct stimulation of the genitals, kissing the neck and ears slowly allows arousal levels to swell, for a longer and more intense foreplay.</p>
          <p>By finding the most pleasurable spots on your partner’s neck and ears, you will develop a better understanding of your partner’s body. Paying attention to areas that are not ordinarily stimulated helps break sexual routine and rediscover each other’s bodies.</p>
          <p>Voices and sounds are important since they free the body from tension, they let sexual pleasure flow throughout the body better and one partner will have an easier time understanding what the other is currently feeling. Observing your partner’s responses develops non-verbal communication (such as vocalizing and body language), which are extremely important for intimacy.</p>`,
      },
      ET: {
        title: 'Kaela suudlemine',
        description: `<h5>Andja</h5>
          <ol>
            <li>Sisse hingates nuusuta kaaslase kaela ja välja hingates puhu õrnalt kaelale.</li>
            <li>Jätka huulte ja ninaga libistamist mööda kaela aeglases tempos.</li>
            <li>Lisa juurde suudlused. Võid proovida õrnalt näksida.</li>
            <li>Liigu kõrvade juurde, kasutades eelnimetatud võtteid.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Lõdvestu, sulge silmad ning naudi.</li>
            <li>Anna hääle või hingamisega märku, mis ja kus on kõige nauditavam, et kaaslane saaks sellele keskenduda.</li>
          </ol>`,
        additional: `<p>Kael ja kõrvad on väga tundlikud ja erogeensed piirkonnad nii meestel kui ka naistel. Nuusutamine, hingamine, suudlemine, näksimine ja muu selline äratab sensuaalseid aistinguid. Erinevalt otsesest suguelundite stimuleerimisest võimaldab kaela ja kõrvade suudlemine aeglaselt erutust kasvatada, luues pikema ja intensiivsema eelmängu.</p>
          <p>Leides oma kaaslase kõige naudingulisemad kohad kaelal ja kõrvadel, õpite teineteise keha paremini tundma. Kui pöörate harjutuse käigus tähelepanu tavapäraselt vähem stimuleeritud piirkondadele, aitab see murda seksuaalset rutiini ja taasavastada teineteise keha.</p>
          <p>Hääled on olulised, kuna vabastavad keha pingetest, lubavad seksuaalsel naudingul paremini mööda keha voolata ning nende järgi on ühel kaaslasel kergem teise praegust olekut tundma õppida. Kaaslase reaktsioonide jälgimine arendab mittesõnalise suhtluse (näiteks häälitsused, kehakeel) oskusi, mis on intiimsuse puhul üliolulised.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Sex while clothed',
        description: `<h5>Both partners</h5>
          <ol>
            <li>While clothed, rub and imitate sex positions with your bodies touching.</li>
            <li>Take turns choosing positions. The man goes first.</li>
            <li>Start very slowly and speed up gradually.</li>
            <li>Try to access new levels in playful, fun positions, while riding those waves of pleasure.</li>
          </ol>`,
        additional: `<p>The activity on this card creates a playful, uninhibited atmosphere and defuses performance anxiety. Sex without taking off your clothes takes away the pressure to reach orgasm or ejaculation. It’s also a chance to experiment with positions and let out the primal animal within you.</p>
          <p>An unconventional approach helps bypass sexual routines. When you’re still partially clothed, it can change things up just enough to relieve pressure for a perfect performance. By going through the motions of sex without penetration, you may discover that pleasure is more than just nakedness and intercourse.</p>
          <p>It’s also a good exercise to foster intimacy if you and your partner are tired or short on time – perfect for moments when totally disrobing isn’t an option.</p>`,
      },
      ET: {
        title: 'Riietes seks',
        description: `<h5>Mõlemad</h5>
          <ol>
            <li>Riietes hõõruge ja jäljendage seksipoose teineteise vastas.</li>
            <li>Valige poose kordamööda. Alustab mees.</li>
            <li>Alustage väga aeglaselt ning kiirendage järk-järgult.</li>
            <li>Proovige avaneda mängulistes ja lõbusates poosides, kuid püsige naudingulainel.</li>
          </ol>`,
        additional: `<p>See kaart loob mängulise, vaba õhkkonna ning võtab soorituspinge maha. Riietes seks vabastab orgasmi või ejakulatsioonini jõudmise ootusest. Samuti pakub võimaluse katsetada poose ning lasta ürgne loom välja. Tavapärasest erinev lähenemine aitab vältida seksuaalset rutiini. Osaliselt riietatuna võib väheneda täiusliku soorituse surve. Seksi jäljendades võite avastada, et nauding pole ainult alastuse ja seksiga seotud.</p>
          <p>See kaart annab võimaluse luua intiimsust ka väsimuse või ajanappuse korral. Seetõttu sobib spontaanseteks hetkedeks, kui täielik lahtiriietumine pole võimalik.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Hip play',
        description: `<h5>Man</h5>
          <ol>
            <li>While lying down, hold the woman from behind in an embrace, your hand on her breast.</li>
            <li>Breathe deeply, relax and keep your hips in place.</li>
            <li>Direct your attention to your own heart area.</li>
            <li>If you become aroused, let it happen and continue keeping your focus on your heart area.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Choose which side you will lie on as your partner embraces you from behind.</li>
            <li>Play with your hips, making various circular movements with the hip that is on top. Try different speeds ranging from motionless to very fast and then the other way around.</li>
          </ol>`,
        additional: `<p>Moving the hips makes it possible to fuse sexual energy with the knowledge that we can control our pleasure ourselves through movement. Pleasure isn’t something that comes from an external source but is always present in our bodies, and we can decide when we switch it on.</p>
          <p>This exercise creates a safe space for the woman to get in better touch with her sexuality, since the male partner is simply present, allowing the woman’s sexuality to manifest without intervening.</p>
          <p>It can be a turn-on for the male partner to see that his partner feels at ease and desires to share an intimate moment. If the man focuses on his heart area, that will move sexual energy upward in the body and transform it into a deeper loving feeling.</p>
          <p>This activity requires teamwork. The man offers the woman a space in which he does not intervene, and lets the woman discover the sexual energy in her hips at her own pace. The man is present and observes her rhythms, while the woman just flows and allows her hips to move naturally.</p>`,
      },
      ET: {
        title: 'Puusade mäng',
        description: `<h5>Mees</h5>
          <ol>
            <li>Hoia naist selja tagant pikali olles kaisus, käsi tema rinnal.</li>
            <li>Hinga sügavalt, lõdvestu ning hoia puusad paigal.</li>
            <li>Suuna tähelepanu enda südamepiirkonda.</li>
            <li>Kui tekib erutus, siis luba sellel olla ja hoia tähelepanu jätkuvalt südamepiirkonnas.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Vali, kummal küljel lamades lubad mehel ennast kaissu võtta.</li>
            <li>Mängi puusadega, tehes pealmise puusaga erineval viisil ringjaid liigutusi. Katseta erinevat tempot alates paigal olemisest kuni väga kiireni ja vastupidi.</li>
          </ol>`,
        additional: `<p>Puusi liigutades on võimalus kontakt luua seksuaalenergia ja teadmisega, et saame oma naudingut ise juhtida. Nauding ei ole miski, mis tuleb väljastpoolt, vaid on meie kehas alati olemas ning me ise saame valida, millal selle sisse lülitame. Naine saab turvalises ruumis seksuaalsusega kontakti luua, kuna mees on kohal, lubades naise seksuaalsusel avalduda ise sekkumata.</p>
          <p>Meest võib see tegevus erutada ja talle näidata, et naine tunneb end tema läheduses mugavalt ja soovib jagada intiimset hetke. Kui mees keskendub oma südamepiirkonnale, siis liigub seksuaalenergia kehas üles ning muundub sügavamaks armastustundeks.</p>
          <p>See tegevus eeldab koostööd. Mees pakub naisele sekkumata ruumi, kus naine saab omas tempos puusades asuvat seksuaalenergiat avastada. Mees on kohal ja jälgib naise tempot, naine aga voolamises ja lubab puusadel loomulikult liikuda.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Fondling the butt cheeks',
        description: `<h5>Man</h5>
          <ol>
            <li>Hold your hand on the buttocks for 30 seconds.</li>
            <li>Make circular, sensual and massaging movements.</li>
            <li>Spread the butt cheeks slowly in the lower part, near the labia, so that the labia open slightly, and then abruptly let go.</li>
            <li>Try varying degrees of firm grip.</li>
            <li>Find an area of the buttocks that will cause the labia to vibrate slightly when let go.</li>
            <li>Start again with step #1.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax your butt cheeks.</li>
            <li>Feel the sensations in your body, keeping the focus on your rear end and labia.</li>
          </ol>`,
        additional: `<p>The butt cheeks have many nerve endings that can produce intense pleasure when stimulated. For a woman, it may be pleasant since there is no direct contact with the labia – the stimulation is indirect, leaving her with the option of becoming aroused or not. The woman should try to let the pleasure in her lower body swell and swell and flow freely into the rest of her body.</p>
          <p>Playing with the butt cheeks can be primally exciting for the man. As the man can arouse the woman through teasing, this exercise introduces a mild dominant-submissive element that can be pleasurable for both partners.</p>
          <p>Fondling the buttocks can be sensual and playful, bringing a change of pace and introducing some levity into a couple’s intimacy.</p>`,
      },
      ET: {
        title: 'Mängukannid',
        description: `<h5>Mees</h5>
          <ol>
            <li>Hoia käsi kannikate peal 30 sekundit.</li>
            <li>Tee ringjaid, sensuaalseid ja masseerivaid liigutusi.</li>
            <li>Tõmba kannikaid aegluubis veidi laiali alumisest osast häbememokkade lähedalt selliselt, et häbememokad kergelt avaneksid, ning siis lase kannikad järsult lahti.</li>
            <li>Proovi eri tugevusega haaret.</li>
            <li>Leia see koht kannikatel, mille vabastamise tagajärjel tekib kerge vibratsioon häbememokkadel.</li>
            <li>Alusta uuesti 1. punktist.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvesta kannikad.</li>
            <li>Tunneta aistinguid kehas, hoides fookust tagumikul ja häbememokkadel.</li>
          </ol>`,
        additional: `<p>Tuharates on palju närvilõpmeid, mille ergutamine võib tekitada intensiivset naudingut. Naisele võib see olla meeldiv, kuna otseselt ei puudutata häbememokki, vaid stimuleeritakse neid kaudselt, jättes talle vabaduse kas erutuda või mitte. Naine võiks lasta alakehas tekkival naudingul võimenduda ning vabalt üle keha laiali valguda.</p>
          <p>Tuharatega mängimine võib meest ürgselt erutada – see viitab tema huvile naist seksuaalselt tundma õppida. Mees saab naist erutada õrritamise teel. See harjutus loob kerge domineerimise elemendi, mis omakorda võib mõlemale naudinguid pakkuda.</p>
          <p>Tuharate rebimine võib olla nii sensuaalne kui ka mänguline, tuues intiimsusesse vaheldust ja kergust.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Undressing',
        description: `<h5>Both partners</h5>
          <ol>
            <li>With your clothes still on, look at each other with an admiring gaze.</li>
            <li>The male partner starts and removes the first piece of the woman's clothing.</li>
            <li>Remove one piece of clothing at a time in alternating fashion.</li>
            <li>Move slowly and sensually so that the movements are long and lingering; touch your partner's body in a flowing manner.</li>
            <li>Close your eyes and enjoy embracing naked.</li>
          </ol>
          <p>Suggestion: Make sure that you are wearing at least six pieces of clothing in which you feel sexy.</p>`,
        additional: `<p>Undressing presents an opportunity to touch each other’s body gently as you go. Taking off clothing may make you feel you’re unwrapping a gift. If you do it at a slow pace, it only increases anticipation and desire. Excitement is in the air: which piece of clothing will your partner remove next?</p>
          <p>The more you caress your partner’s body – slowly and gently – as the clothing is removed, the more pleasurable the experience. As more of the body is exposed, sexual excitement grows, striking the ideal balance between sexual arousal and pleasure.</p>
          <p>This activity teaches partners to value the journey as much as the end result: an important part of conscious sexuality.</p>`,
      },
      ET: {
        title: 'Lahti riietamine',
        description: `<h5>Mõlemad</h5>
          <ol>
            <li>Riided seljas, vaadake teineteist imetleva pilguga.</li>
            <li>Mees alustab lahtiriietamist ning võtab naiselt esimese riideeseme.</li>
            <li>Võtke üks riideese korraga ja kordamööda.</li>
            <li>Liikuge aeglaselt ja sensuaalselt nii, et liigutused on pikad ja puudutavad kaaslase keha voolavalt.</li>
            <li>Sulgege silmad ning nautige kallistusi paljana.</li>
          </ol>
          <p>Oluline: Pange selga vähemalt 6 riideeset, milles tunnete ennast seksikalt.</p>`,
        additional: `<p>Lahtiriietamine annab võimaluse õrnalt teineteise keha puudutada. Riiete äravõtmine võib tekitada kingituse lahtipakkimise tunde. Kui teha seda aeglases tempos, kasvavad ootuselevus ja iha. Õhus on põnevust: mis riideeseme kaaslane järgmisena ära võtab?</p>
          <p>Mida rohkem aegluubis riideid ära võttes kaaslase keha õrnalt ja aeglaselt käte ja sõrmedega silitada, seda nauditavam on kogemus. Järjest paljastuv keha on erutav ning tekitab seksuaalset ootuselevust. Nii on võimalus leida tasakaal seksuaalse erutuse ja naudingu vahel.</p>
          <p>See tegevus õpetab partnereid väärtustama teekonda sama palju kui lõpptulemust, mis on oluline osa teadlikus seksuaalsuses.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Bathtime',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Use soft lighting to give the bathroom a romantic ambience.</li>
            <li>Wash your partner with long, slow and caressing movements under running water, using a foaming shower gel.</li>
            <li>Start behind them: the back, arms, buttocks and legs.</li>
            <li>Then the front of the body: neck, chest, arms, stomach and legs.</li>
            <li>Move closer and closer to the genitals, brushing them gently.</li>
            <li>Wash the genitals even more slowly with gentle movements.</li>
            <li>If you feel that you could also wash your partner's genitals with mouth and tongue, do so sensually.</li>
            <li>When both of you are clean, dry each other, also in a playful and indulgent way.</li>
          </ol>`,
        additional: `<p>This everyday activity can be transformed into a playful and intimate experience if you take time to do it together. The one being bathed can relax and bask in the attention, while the one doing the bathing can revel in soft and flowing touches and giving pleasure. Soft and ambient lighting creates a safe space for exploring your sexual and sensual sides.</p>
          <p>Water makes it possible to give each other long, caressing movements. Using shower gel makes the experience even silkier and more indulgent, awakening various receptors in the body. Touching intimate areas in this manner is better than using lube. The hot water makes us feel safe, perhaps evoking the universal experience of floating in the womb.</p>
          <p>This practice can help keep both a passionate spark and nurturing element alive in a relationship, combining the needs for a deep emotional and physical connection.</p>`,
      },
      ET: {
        title: 'Pesemine',
        description: `<h5>Mõlemad</h5>
          <ol>
            <li>Muutke pesemisruum hämara valguse abil romantiliseks.</li>
            <li>Pese kaaslast aeglaste, pikkade ja silitavate liigutustega jooksva vee all, kasutades vahutavat dušigeeli.</li>
            <li>Alusta pesemist keha tagumisest poolest: selg, käed, kannikad ja jalad.</li>
            <li>Seejärel pese keha eesmine pool: kael, rind, käed, kõht ja jalad.</li>
            <li>Liigu pesemisega suguelunditele järjest lähemale, riivates neid õrnalt.</li>
            <li>Suguelundeid pese veelgi aeglasemalt ja õrnemate liigutustega.</li>
            <li>Kui tekib tunne, et võiks partneri keha suu ja keelega üle pesta, siis tee seda sensuaalselt ning naudinguliselt.</li>
            <li>Kui mõlemad on puhtaks pestud, siis kuivatage teineteist mänguliselt ja hellitavalt.</li>
          </ol>`,
        additional: `<p>Argitegevuse saab muuta mänguliseks ja intiimseks kogemuseks, kui võtta teineteisele aega ja teha seda koos. See, keda pestakse, saab lõdvestuda ja nautida, et tema eest hoolitsetakse. Pesija saab mõnuleda pehme ja voolava puudutusega naudingut pakkudes. Hämar ruum loob turvalise keskkonna, kus teineteise seksuaalset ja sensuaalset poolt avastada.</p>
          <p>Vesi annab võimaluse teha pikki silitavaid liigutusi. Kui lisada dušigeeli, on puudutus pehmem, sujuvam ja siidisem ning äratab kehas teistsugused tundlikkuse retseptorid. Selline intiimpiirkonna puudutus on palju pehmem ja siidisem kui ilma igasuguse libestita. Soe vesi pakub turvatunnet, kuna oleme kõik kunagi elanud lootevees.</p>
          <p>See praktika aitab hoida särtsu ja hoolivust suhtes, kombineerides vajadust sügava emotsionaalse ja füüsilise ühenduse järele.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Pulling on panties',
        description: `<h5>Man</h5>
          <ol>
            <li>Stand behind the woman and grab the edge of her panties from behind.</li>
            <li>Slowly tug the panties upward. If you feel that the pressure on the woman's labia is pleasant, gently move the panties back and forth.</li>
            <li>Position the woman on her back. Gently pull the underwear up from both sides at a slow pace so that part of her labia is exposed.</li>
            <li>Hold the underwear taut with one hand and gently and slowly stroke her labia with the other, especially the part that is exposed between the panties.</li>
            <li>If you feel that the woman would like it, gently tongue and kiss the parts of her labia that are exposed between the panties.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Allow the man to position you standing up, then lying down.</li>
            <li>Relax, close your eyes, and enjoy.</li>
            <li>Let him know in a soft, sensual voice if it feels good or is too intense.</li>
          </ol>`,
        additional: `<p>Pulling on a woman’s panties can bring new sensations to a woman’s labia. A tug on her panties and touching her exposed labia, you can create tension and anticipation, which can increase her sexual arousal.</p>
          <p>This activity can introduce light domination and submission into the dynamic. It gives the man an opportunity to tease the woman sexually and teaches him to pay attention to her body language and reactions. If the woman allows her partner to take control, it’s possible to experience an erotic handing over of the reins.</p>
          <p>Such playful and light erotic activities can help bring excitement back into the relationship, especially if everyday life has reduced sexual spontaneity. In this case, an ordinary piece of clothing becomes a source of arousal, which can later create pleasant associations.</p>`,
      },
      ET: {
        title: 'Aluspesu sikutamine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Võta seisval naisel selja tagant aluspükste äärest kinni (pilt a).</li>
            <li>Tõmba aeglases tempos pükse ülespoole. Kui tajud, et surve naise häbememokkadele on mõnus, siis sikuta õrnalt edasi-tagasi.</li>
            <li>Suuna naine selili. Tõmba õrnalt aeglases tempos aluspesu külgedelt ülespoole selliselt, et paljastub osa häbememokkadest.</li>
            <li>Hoia ühe käega aluspesu pingul (pilt b) ja teisega silita õrnalt ning aeglaselt häbememokki, eriti seda osa, mis pükste vahelt väljas.</li>
            <li>Kui tunned, et naine soovib, siis puuduta keelega ning suudle õrnalt pükste vahelt välja paistvaid häbememokki.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Luba mehel end juhtida alguses püsti, seejärel selili.</li>
            <li>Lõdvestu, sulge silmad ning naudi.</li>
            <li>Anna pehme sensuaalse häälega märku, kas on mõnus või liiga intensiivne.</li>
          </ol>`,
        additional: `<p>Aluspesu sikutamine toob uutmoodi tunde naise häbememokkadesse. Aluspesu sikutamine ja välja paistvate häbememokkade puudutamine loob pinget ja ootuselevust, mis võib suurendada seksuaalset erutust.</p>
          <p>Selline tegevus võib tuua mängu kerge domineerimise ja alistumise dünaamika. Mehele annab see võimaluse naist seksuaalselt õrritada ning õpetab tähelepanelikult jälgima tema kehakeelt ja reaktsioone. Kui naine lubab kaaslasel juhtida tegevust, on võimalik kogeda ohjade erootilist üleandmist.</p>
          <p>Mängulised ja kerged erootilised tegevused aitavad tuua suhtesse tagasi põnevust, eriti kui igapäevaelu on vähendanud seksuaalset spontaansust. Tavaline riideese muutub erutuse allikaks, mis võib hiljem tekitada meeldivaid seoseid.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Pleasure point massage',
        description: `<h5>Man</h5>
          <ol>
            <li>Lay your partner down so that the pillow is under her lower abdomen and her legs are spread apart on your thighs. Rub your hands together to get them warm.</li>
            <li>Place the palm of one hand on her tailbone and hold her hip with your other hand. For 20 seconds, feel how the warmth from your hands is absorbed by your partner's body.</li>
            <li>Begin massaging her lower back and buttocks very slowly, gradually increasing the pressure.</li>
            <li>Place the thumb of one hand on her perineum, located halfway between the vagina and anus, and hold her hip with the other hand. Remain like this for 20 seconds.</li>
            <li>Use your thumb to make different movements: slow circular, gentle pumping, and vibrating.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax, breathe in deeply, close your eyes, and enjoy.</li>
          </ol>`,
        additional: `<p>Between the anus and the vagina there exists a point that can offer immense pleasures when massaged. Called the perineum, both the anus and vaginal opening will receive indirect stimulation when it is pleasured, activating a woman’s primal desire to surrender.</p>
          <p>While in this position, the woman may feel vulnerable. Therefore, it is important for the man to be caring and gentle with her. In this way, it’s easier for the woman to relax and experience pleasure as it comes. If the woman is unable to relax on the first attempt, try it again some other time.</p>
          <p>This exercise also provides the man an opportunity to break free from his usual pattern of sexual behavior. Acquiring new skills increases sexual confidence.</p>
          <p>This card allows the couple to overcome sexual taboos that can limit pleasure in certain areas of the body.</p>`,
      },
      ET: {
        title: 'Mõnupunktimassaaž',
        description: `<h5>Mees</h5>
          <ol>
            <li>Aseta kaaslane lebama nii, et padi on alakõhu all ja jalad harkis Sinu reite peal. Hõõru käed soojaks.</li>
            <li>Aseta ühe käe peopesa sabakondile ja teise käega hoia puusakondist ning tunneta 20 sekundit, kuidas soe õhk sinu kätest kaaslase kehasse voogab (pilt a).</li>
            <li>Alusta väga aeglaselt alaselja ja kannikate massaaži ning lisa sujuvalt tugevust (pilt b).</li>
            <li>Aseta ühe käe pöial tagumiku alaossa lahkliha piirkonda, vagiina ja aanuse vahele ning hoia teise käega puusakondist. Hoia 20 sekundit (pilt c).</li>
            <li>Tee kannikate vahel oleva pöidlaga erinevaid liigutusi: aeglaseid ringjaid, õrnalt pumpavaid ning väristavaid.</li>
          </ol>
          <h5>Naine</h5>
          <p>Lõdvestu, hinga sügavalt, sulge silmad ning naudi.</p>`,
        additional: `<p>Aanuse ja vagiina vahel asub punkt, mille masseerimine võib sageli pakkuda naudinguid. Kaudset stimulatsiooni saavad nii aanus kui ka vagiina ava, mis võib naises aktiveerida ürgset tungi anduda.</p>
          <p>Selles asendis võib naine tunda end haavatavalt. Seetõttu on oluline mehel olla hooliv ning läheneda õrnalt. Nii on naisel kergem lõdvestuda ning kogeda sellest tulenevaid naudinguid. Kui naisel esimesel korral ei õnnestu lõdvestuda, siis proovige mõni teine kord uuesti.</p>
          <p>See harjutus annab mehele võimaluse murda tavapärast seksuaalkäitumise mustrit. Uute oskuste omandamine suurendab seksuaalset enesekindlust.</p>
          <p>See kaart aitab ületada seksuaalseid tabusid, mis võivad piirata naudinguid teatud kehaosades.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'A juicy game',
        description: `<h5>Giver</h5>
          <ol>
            <li>Use a piece of melon, or other succulent fruit to gently and slowly tantalize your partner's body: belly, chest area, hands and arms, neck, thighs.</li>
            <li>As you slide the piece of fruit along the body, squeeze juice out of it, and follow with your lips and tongue to "cover your tracks".</li>
            <li>For the first three minutes, avoid the main erogenous zones.</li>
            <li>Move on in a sensual manner to the genitals and chest area.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Relax and bring your attention to where the fruit, lips or tongue are touching your skin.</li>
            <li>Experience the sensation of being touched with your eyes both open and closed.</li>
          </ol>
          <p>Note: Fruit juice can stain the sheets.</p>
          <p>If the person with the fruit has long hair, it's advisable to tie them back.</p>`,
        additional: `<p>Bringing in fruit into the game can stimulate four of the senses at once – the sense of touch, smell, taste and sight – making for a richer experience. It adds fun and playfulness to intimacy, helping get out of the sexual routine. It encourages you to perceive the whole body as a source of sexual pleasure, not just focus on erogenous zones.</p>
          <p>Dribbling fruit juice can create physical excitement and arousal. Lapping up the juice with your tongue amplifies the experience of pleasure. The longer that play around erogenous zones lasts without actually touching them, the more arousal can grow, which can later pay dividends in the form of more powerful pleasure and more passionate intercourse.</p>`,
      },
      ET: {
        title: 'Mahlane mäng',
        description: `<h5>Puudutaja</h5>
          <ol>
            <li>Silita õrnalt ja aeglaselt meloni, arbuusi või mõne muu mahlase vilja tükiga kaaslase keha: kõht, rinna ümbrus, käed, kael, reied.</li>
            <li>Pigista libistades viljast mahla välja ning liigu limpsides või suudeldes sama rada pidi.</li>
            <li>Esimesel kolmel minutil hoidu erogeensetest piirkondadest.</li>
            <li>Liigu sensuaalselt suguelundite ja rinnapiirkonda.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Lõdvestu ja vii tähelepanu sinna, kus vili, huuled või keel puudutavad nahka.</li>
            <li>Koge puudutusi nii suletud kui ka avatud silmadega.</li>
          </ol>
          <p>Oluline: Puuviljamahl võib linu määrida. Kui puudutajal on pikad juuksed, on soovituslik need enne kinni panna.</p>`,
        additional: `<p>Puuvilja kasutamine erutab mitut meelt korraga – kompimis-, maitse-, lõhna- ja nägemismeelt –, luues rikkalikuma kogemuse. See lisab intiimsusele lõbusust ja mängulisust, mis aitab väljuda seksuaalrutiinist. Julgustab kogu keha tajuma sensuaalse naudingu allikana, mitte keskenduma ainult erogeensetele piirkondadele.</p>
          <p>Puuviljamahla tilgutades ja niimoodi mängides saab tekitada kehalist erutust ja elevust. Limpsimine võimendab naudingute kogemist. Mida kauem erogeense piirkonna ümber mängida ilma neid puudutamata, seda rohkem erutus kasvab, mis hiljem omakorda kingib võimsama naudingu ja kirglikuma vahekorra.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Slap the naughty butt',
        description: `<h5>Man</h5>
          <ol>
            <li>Tell the woman how sexy her derriere is and how naughty she is, while softly caressing her.</li>
            <li>Hold your other hand on the woman's belly.</li>
            <li>With your hand half-limp, gently slap the lower part of the buttocks so the vibration reaches her labia.</li>
            <li>As your hand comes down onto her skin, let the middle fingers just barely graze the labia. The more gentle the touch, the more irresistible.</li>
            <li>Vary the frequency and intensity to surprise yourself and your partner. You can also try holding your hand between her legs for a few seconds.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Close your eyes and relax.</li>
            <li>Let your body flinch in response to the slap and don't hold back on making a sound.</li>
          </ol>`,
        additional: `<p>There’s electricity in the air when a couple engages in play where gentle and firm stimulation alternate and feel different types of contact between their bodies. This brings attention to the body and banishes everyday thoughts from the minds of both partners.</p>
          <p>A slap on the butt can amplify a sense of primal masculinity and femininity. The man has to sensitively intuit whether to administer a softer or more stronger slap. Spanking with the right intensity and frequency can make the woman’s labia quiver with pleasure, enhancing both partners’ sexual arousal.</p>`,
      },
      ET: {
        title: 'Ulaka pepu laks',
        description: `<h5>Mees</h5>
          <ol>
            <li>Räägi naisele, kui seksikas tagumik tal on ja kui ulakas ta on, samal ajal ühe käega õrnalt ja pehmelt silitades.</li>
            <li>Teise käega hoia kätt naise kõhu peal.</li>
            <li>Löö poollõdva käega õrnalt kannikate alaossa nii, et löögi vibratsioon jõuab naise häbememokkadeni.</li>
            <li>Keskmistel sõrmedel luba laksu hetkel pehmelt naise häbememokkadeni jõuda. Mida õrnem on näppude puudutus, seda erutavam.</li>
            <li>Mängi laksu intervallide ja tugevusega, et iseennast ja naist üllatada. Võid proovida hoida kätt jalge vahel paar sekundit.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Sulge silmad ja lõdvestu.</li>
            <li>Luba kehal võpatada ning spontaansel häälitsusel valla pääseda.</li>
          </ol>`,
        additional: `<p>Õhus on särinat, kui paarilised mängivad õrna ja tugeva stimulatsiooni vaheldumisega ning tunnetavad eri tüüpi kehalise kontakti mõju. Selline tegevus toob tähelepanu tugevalt kehale ja hetkele, peletades mõlemal argimõtteid.</p>
          <p>Pepulaksuga saab võimendada ürgset mehelikkust ja naiselikkust. Mees peab tunnetama, kas anda pehmemat või tugevamat laksu. Naisele sobiva tugevuse ja intervalliga laksu mõjul hakkavad häbememokad naudinguliselt värisema. See võib suurendada mõlema seksuaalset erutust.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Caressing the breasts',
        description: `<h5>Man</h5>
          <ol>
            <li>Caress the breasts in a spiral. Start from the cleavage and move slowly closer to the nipple with each circle but don't touch the nipples. Repeat the process.</li>
            <li>With fingers spread apart, cup the breasts. Bring your fingers closer together until you almost reach the nipple, and let go. Repeat.</li>
            <li>Make circles on the areola, moving from the outside toward the nipple. When you reach the nipple, glide your finger gently over it. Be slow and gentle. Repeat.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax and close your eyes.</li>
            <li>Let your thoughts and emotions come and go and focus on the sensations in your body.</li>
            <li>Breathe.</li>
          </ol>`,
        additional: `<p>The breasts are very sensitive and erogenous. Caressing and gentle stimulation can be pleasurable and release oxytocin, which produces a sense of wellbeing and increases emotional closeness.</p>
          <p>The breasts may need time and a gentle touch in an expectation-free space for the pleasure potential to be realized. When the man lavishes positive attention on her breasts, it can help improve the woman’s body image and self-confidence.</p>
          <p>The activity on this card teaches the man more varied ways of caressing the breasts. He will awaken her heart area, and see love, tenderness and softness budding in the woman. Be aware that gentle stroking of the breasts can bring up emotions. The man should allow the woman to experience these feelings as he continues slow and gentle caressing.</p>
          <p>Stimulation of the breasts activates the same nerve endings that are related to genital arousal. The more receptive the breasts become, the greater the chance of an upward arc of pleasure culminating in orgasm.</p>`,
      },
      ET: {
        title: 'Rindade silitamine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Hellita rindu spiraalis. Alusta rindade vahelt. Liigu aeglaselt iga ringiga nibule lähemale, kuid ära nibusid puuduta (pilt a). Korda protsessi.</li>
            <li>Võta harali sõrmedega rinnad pihku (pilt b). Tõmba sõrmi koomale, kuni jõuad peaaegu nibuni ning lase lahti. Korda protsessi.</li>
            <li>Tee sõrmedega ringe nibuväljal, suundudes väljastpoolt nibu suunal (pilt c). Kui jõuad nibuni, libista õrnalt sõrm sellest üle. Puuduta aeglaselt ja õrnalt. Korda protsessi.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu ja sulge silmad.</li>
            <li>Luba mõtetel ja emotsioonidel tulla ja minna ning keskendu kehalistele aistingutele.</li>
            <li>Hinga.</li>
          </ol>`,
        additional: `<p>Rinnad on väga tundlikud ja erogeensed. Nende silitamine ja õrn stimuleerimine võib pakkuda naudinguid ning vabastada oksütotsiini, mis loob heaolutunde ja suurendab emotsionaalset lähedust.</p>
          <p>Rinnad võivad vajada aega, õrnust ja ootusteta puudutusi, et naudingupotentsiaal avalduks. Mehe positiivne tähelepanu rindadele võib aidata parandada naise kehapilti ja enesekindlust.</p>
          <p>See kaart õpetab mehele mitmekülgsemat rindade hellitamist. Mees äratab rindade silitamisega naise südamepiirkonna ning naises tärkavad armastus, hellus ja pehmus. Rindade õrn silitamine võib tuua üles emotsioone. Mees lubab naisel neid tundeid kogeda ning jätkab õrna ja aeglase silitamisega.</p>
          <p>Rindade stimuleerimine aktiveerib samu närviühendusi, mis on seotud suguelundite erutusega. Mida vastuvõtlikumaks rinnad muutuvad, seda suuremaks naudingulisus kasvab ning võib isegi kogeda orgasmi.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Belly delight for the man',
        description: `<h5>Woman</h5>
          <ol>
            <li>Sit beside the man, apply oil to your hands and rub them to warm them up.</li>
            <li>Place one hand gently on the penis and the other on the abdomen above the navel. Feel how the warmth flows from your hand into the man's body.</li>
            <li>Start abdominal massage with circular movements.</li>
            <li>Hold the penis with one hand, and with the other, massage the lower abdomen below the navel.</li>
            <li>Continue the belly massage and increase pressure little by little.</li>
            <li>You can make the belly quiver gently.</li>
          </ol>
          <h5>Man</h5>
          <ol>
            <li>Relax, close your eyes and enjoy.</li>
            <li>Focus on lower abdominal breathing.</li>
          </ol>`,
        additional: `<p>Massage stimulates blood flow in the groin, which can heighten arousal and sensitivity. Massaging the lower abdomen activates sexual energy. Usually men get erection through active performance, but in this exercise, they can do so through relaxation.</p>
          <p>The activity on this card enables exploration of areas of the man’s body that often get less attention than they deserve. It also suggests a way to prolong the sexual experience and increase the intensity of pleasure.</p>
          <p>Abdominal massage helps improve general body awareness, lets us understand how sexual energy moves in the body and creates space for a slower, more conscious intimacy. All of this extends the pleasure and deepens the emotional bond.</p>`,
      },
      ET: {
        title: 'Kõhunauding mehele',
        description: `<h5>Naine</h5>
          <ol>
            <li>Istu mehe kõrval ja hõõru käed õliga soojaks.</li>
            <li>Aseta üks käsi pehmelt peenise peale ning teine alakõhule naba kohale (pilt b). Tunneta, kuidas soojus sinu käest mehe kehasse voogab.</li>
            <li>Alusta ringjate liigutustega kõhumassaaži (pilt a).</li>
            <li>Hoia ühe käega peenist ning teisega masseeri alakõhtu nabast altpoolt (pilt b).</li>
            <li>Jätka kõhumassaaži ning tõsta tasapisi survet.</li>
            <li>Võid kõhtu õrnalt võdistada.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Lõdvestu, sulge silmad ning naudi.</li>
            <li>Keskendu alakõhuhingamisele.</li>
          </ol>`,
        additional: `<p>Massaaž ergutab vereringet kubemes, mis võib suurendada erutust ja tundlikkust. Alakõhu masseerimine aktiveerib seksuaalenergia. Kui enamasti kogeb mees erektsiooni soorituse kaudu, siis selle tegevuse käigus võib mees kogeda erektsiooni lõdvestuse teel.</p>
          <p>See kaart annab võimaluse avastada mehe kehal piirkondi, mis tavaliselt vähem tähelepanu pälvivad. Ühtlasi loob viisi, kuidas pikendada seksuaalset kogemust ja suurendada naudingu võimsust.</p>
          <p>Kõhumassaaž aitab parandada üldist kehateadlikkust, õpetab tajuma seksuaalenergia liikumist kehas ja loob ruumi aeglasemaks, teadlikumaks intiimsuseks, mis pikendab naudingut ja süvendab emotsionaalset sidet.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Loving domination',
        description: `<h5>Man</h5>
          <ol>
            <li>Choose either pose a or b.</li>
            <li>Hold on to the woman safely and securely with one arm. With the other, hold her firmly, tease, tickle or caress.</li>
          </ol>
          <p>Loving domination can include the following elements:</p>
          <p>• stroking the woman's neck and breasts,</p>
          <p>• holding on to the woman's head or hair and kissing her neck,</p>
          <p>• grasping the hips and simulating penetration,</p>
          <p>• solely holding on to the woman.</p>
          <ol>
            <li>It is important to find a secure grip and apply enough pressure, without squeezing, and while remaining in a caring and loving mode.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Entrust control to the man.</li>
            <li>Relax, yield and breathe calmly.</li>
            <li>If you feel uncomfortable or something is painful and/or don't want to continue, immediately signal that you need a break.</li>
          </ol>`,
        additional: `<p>This is a deeper expression of the polarity between the woman and the man. The man can dominate and the woman submits. Domination in this sense means that you know that you are in charge of the situation; you’re powerful but also loving. Submission is associated with relaxation, trust and surrendering control.</p>
          <p>Loving domination is very different from degrading forms of control that make a person feel oppressed and small. Loving and benevolent domination allows the woman to relax and yield. Most women readily recognize the distinction. For many women, one of the greatest sexual desires is to yield completely to loving, empathetic domination.</p>
          <p>If a woman finds it hard to yield or it is hard for the man to dominate, switch roles. Then go back to the original roles, so that the man is dominant and the woman is the yielding one.</p>
          <p>It is important for this dynamic to be based on mutual consent, trust and clear communication. The card emphasizes your partner’s wellbeing and safety – essential for this practice.</p>`,
      },
      ET: {
        title: 'Armastav domineerimine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Vali kas poos a või b.</li>
            <li>Hoia ühe käega naist turvaliselt ja jõuliselt kinni. Teise käega hoia kinni, õrrita või hellita.</li>
          </ol>
          <p>Armastava domineerija „menüüsse" kuuluvad muu hulgas:</p>
          <ol>
            <li>naise kaela ja rindade silitamine,</li>
            <li>naise peast või juustest kinni hoidmine ja kaela suudlemine,</li>
            <li>puusade haaramine ja penetreerimise jäljendamine,</li>
            <li>üksnes naise kinnihoidmine.</li>
          </ol>
          <p>Oluline on leida kindel haare ja piisav surve, seejuures pigistamata, olles samal ajal hooliv ja armastav.</p>
          <h5>Naine</h5>
          <ol>
            <li>Usalda juhtimine mehele.</li>
            <li>Lõdvestu, andu ning hinga rahulikult.</li>
            <li>Kui on ebamugav, valus või ei soovi, siis anna kohe märku, et vajad pausi.</li>
          </ol>`,
        additional: `<p>See on sügavam naise ja mehe polaarsuse väljendus, kus mees saab domineerida ja naine anduda. Domineerimine on teadmine, et Sina juhid seda olukorda, olles jõuline, ent armastav. Andumine viitab lõdvestusele, usaldusele ja võimu käestandmisele.</p>
          <p>Alandaval ja armastaval domineerimisel on suur vahe. Alandava puhul tunneb naine ennast allasurutu ja pisendatuna. Armastava ja heatahtliku domineerimise puhul saab naine lõdvestuda ja anduda. Enamik naisi tunneb selle vahe ära. Paljude naiste üks suuremaid seksuaalseid soove on armastavale empaatilisele domineerimisele täielikult anduda.</p>
          <p>Kui naisel on raske anduda või mehel keeruline domineerida, siis proovige rollid vahetada. Seejärel proovige tegevust korrata selliselt, et mees domineerib ning naine andub.</p>
          <p>Oluline on, et selline dünaamika põhineb vastastikusel nõusolekul, usaldusel ja selgel suhtlusel. Kaardil rõhutatakse turvalisust ja kaaslase heaolu, mis on sellise praktika puhul vajalik.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Holding the penis',
        description: `<h5>Woman</h5>
          <ol>
            <li>Rub your hands together to warm them up.</li>
            <li>Hold the penis gently in one hand and place the other hand on the chest, feeling how the warmth moves from hands into the body. Remain in that position for about 2 minutes.</li>
            <li>Then slide the hand to the head of the penis. Keep the hand relaxed.</li>
          </ol>
          <h5>Man</h5>
          <ol>
            <li>Lie there peacefully and forget any expectations.</li>
            <li>Breathe easily through your open mouth and relax your tongue.</li>
            <li>If you want to use your voice, by all means do so.</li>
          </ol>`,
        additional: `<p>Holding the penis without any expectations gives the man a chance to feel what is taking place in his sex organ. What does it feel like when the woman is holding the man’s most intimate body part without desiring anything in return?</p>
          <p>While the woman is holding her hand in the middle of the man’s chest, the man can get in touch with his emotions. This exercise teaches the art of surrendering control and experiencing just-being, which may be novel for some men.</p>
          <p>The woman has a chance to become more familiar with her partner’s reactions and notice intricate changes in their body-language.</p>
          <p>This activity may reveal that sexuality is much broader than just a penetrative act and many different forms of physical closeness are valuable and offer pleasure. It also helps expand traditional views of male sexuality, emphasizing receptiveness and sensitivity.</p>`,
      },
      ET: {
        title: 'Peenise hoidmine',
        description: `<h5>Naine</h5>
          <ol>
            <li>Hõõru käed soojaks.</li>
            <li>Hoia ühe käega pehmelt peenist peos ning aseta teine käsi rinnale, tunnetades, kuidas soojus liigub kätest kehasse (pilt a). Ole nii umbes 2 minutit.</li>
            <li>Seejärel liiguta käsi peenise pea juurde (pilt b). Hoia kätt lõdvestunult.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Lama ja unusta ootused.</li>
            <li>Hinga lõdvestunult avatud suu kaudu ja lõdvesta keel.</li>
            <li>Kui soovid teha häält, siis see on teretulnud.</li>
          </ol>`,
        additional: `<p>Peenise hoidmine ilma igasuguse ootuseta annab mehele võimaluse tunnetada, mis ta suguelundis toimub. Mis tunne on, kui naine hoiab peenist ehk mehe kõige intiimsemat kehaosa, soovimata midagi vastu? Samal ajal kui naine kätt mehe rinna keskel hoiab, on mehel võimalus saada ühendus oma tunnetega. See harjutus õpetab ohje käest andma ja lihtsalt kogema, mis võib olla mehe jaoks uudne.</p>
          <p>Naisel on võimalus paremini tundma õppida kaaslase reaktsioone ning märgata peeneid muutusi tema kehakeeles.</p>
          <p>Selle tegevuse kaudu võib avastada, et seksuaalsus on palju laiem kui vaid penetratiivne akt ja et füüsilise läheduse paljud eri vormid on väärtuslikud ning pakuvad naudingut. Samuti aitab see laiendada traditsioonilist arusaama mehisest seksuaalsusest, rõhutades vastuvõtlikkust ja tundlikkust.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Jiggling buttocks',
        description: `<h5>Man</h5>
          <ol>
            <li>Rub your hands together to warm them up. Place both hands on your partner's tailbone between the buttocks and for about 20 seconds, feel the warmth flow into her body.</li>
            <li>Place your hands on the sides of her hips slightly below the hipbone and shake the hips from side to side for about 30 seconds.</li>
            <li>Place the palm of your hand on the tailbone and rapidly and intensely shake this area for about 30 seconds.</li>
            <li>With the lightest of touches, use one hand to caress your partner's back from tailbone to shoulders.</li>
            <li>Repeat starting from step #1 2–3 times.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Lie on your stomach in a comfortable position. You can place a pillow under your stomach.</li>
            <li>Let your body relax.</li>
            <li>If your body wants to move, tremble or shudder, let it.</li>
            <li>Breathe deeply and if you feel you want to unleash your voice, then let it come out.</li>
          </ol>`,
        additional: `<p>The hips are the repository of a key sexual pleasure center. Through making your tailbone vibrate, dormant sexual energy can be awakened. This exercise can give you the capability to more easily experience deeper pleasures across the entire body. It’s an opportunity to experience both genital pleasure and a deeper energetic pleasure.</p>
          <p>Stroking from the tailbone to the shoulders helps disperse sexual energy through the entire body so it doesn’t remain concentrated around the sexual organs. This is a key element in experiencing an energetic full-body orgasm. As a gateway to such orgasms, the practice teaches broader body-awareness, conscious direction of energy, slow buildup of pleasure and expanding the focus from the genitals to the entire body.</p>`,
      },
      ET: {
        title: 'Kannikate väristamine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Hõõru käed soojaks. Aseta kaks kätt kaaslase sabakondile kannikate vahele ning umbes 20 sekundi jooksul tunneta, kuidas soojus kandub üle kaaslase kehasse.</li>
            <li>Aseta käed kaaslase puusade külgedele puusakondist veidi allapoole ja loksuta umbes 30 sekundi vältel puusi küljelt küljele (pilt a).</li>
            <li>Aseta peopesa sabakondile ning värista kiires tempos ja intensiivselt umbes 30 sekundit (pilt b).</li>
            <li>Silita ühe käega õhkõrna puudutusega aeglases tempos kaaslase selga sabakondist õlgadeni.</li>
            <li>Tee see algusest peale läbi 2–3 korda.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lama mugavalt kõhuli. Võid panna padja kõhu alla.</li>
            <li>Luba kehal lõdvestuda.</li>
            <li>Kui keha soovib liikuda, väriseda, vappuda, siis luba sel juhtuda.</li>
            <li>Hinga sügavalt ning kui tunned, et hääl tahab valla pääseda, siis lase sel juhtuda.</li>
          </ol>`,
        additional: `<p>Puusades asub oluline seksuaalnaudingu keskus. Sabakonti väristades on võimalik äratada ootel seksuaalenergia. See tegevus võib anda kehale võimekuse kogeda kergemini ja sügavamaid naudinguid üle keha. Tekib võimalus kogeda nii genitaalset kui ka energeetilist naudingut.</p>
          <p>Sabakondist õlgadeni silitamine aitab seksuaalenergiat hajutada kogu kehale ega jäta seda ainult suguelundite ümbrusse. See on võtmeelement üle kogu keha energeetilise orgasmi kogemiseks. See praktika avab justkui värava sügavamate energeetiliste orgasmideni, õpetades laiemat kehateadlikkust, energia teadlikku suunamist, naudingu aeglast ülesehitamist ja genitaalse fookuse laiendamist kogu kehale.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Between the legs',
        description: `<h5>Man</h5>
          <ol>
            <li>Gently and slowly caress the woman's knees and knee caps.</li>
            <li>Caress her inner thighs, beginning with the knee and moving up between the legs. Do this gently with your fingertips and keep your tempo slow.</li>
            <li>Touch the edge of her panties, starting from the upper edge of her belly. Finally, tease the woman by stroking the edge of her panties where her legs and body meet.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax, close your eyes, and enjoy.</li>
          </ol>`,
        additional: `<p>The knees, kneecaps, inner thighs, lower abdomen, and pelvis are all highly erogenous zones. They are often ignored and overlooked. But a little gentle and slow touching is just the thing to tap into these areas’ pleasure potential. Such touching and experimentation offers up an opportunity to discover your partner’s body while awakening much deeper pleasures.</p>
          <p>For women, some touching between the legs allows them to experience a slow increase in arousal without the direct stimulation of their genitals. It also teaches them to accept pleasure without feeling the need to reciprocate immediately. Men who enjoy prolonged foreplay and this more gradual approach learn to be patient and observe their own sexual desires.</p>
          <p>Touching between the legs can show couples that the journey is just as important as the destination. It also helps them to value foreplay and slower approaches, which are often the key to deeper sexual satisfaction and intimate connection.</p>`,
      },
      ET: {
        title: 'Jalgevahe puudutus',
        description: `<h5>Mees</h5>
          <ol>
            <li>Silita õrnalt ja aeglaselt naise põlvi ja põlveõndlaid.</li>
            <li>Silita reite sisekülgi, alustades põlve juurest liikudes jalgevahe poole. Tee seda õrnalt sõrmeotstega ning hoia tempo aeglane (pilt a).</li>
            <li>Silita aluspükste servi, alustades kõhu juurest ülemisest servast. Viimaks õrrita naist, silitades aluspükste servi jalgade ja keha ühenduskohast (pilt b).</li>
          </ol>
          <h5>Naine</h5>
          <p>Lõdvestu, sulge silmad ning naudi.</p>`,
        additional: `<p>Põlved ja põlveõndlad, reite sisekülg, alakõht ning vaagen on väga erogeensed piirkonnad. Sageli on need uinuvas olekus ja jäänud tähelepanuta. Õrn ja aeglane puudutus lubab esile tulla nende piirkondade naudingupotentsiaalil. Selline puudutus ja katsetamine annab võimaluse avastada oma kaaslase keha ning äratada sügavamaid naudinguid.</p>
          <p>Naisel võimaldavad sellised puudutused kogeda erutuse aeglast kasvu otsese suguelundite stimulatsioonita. Samuti õpetavad lihtsalt vastu võtma naudingut ilma kohese vastutasumise vajaduseta. Mees õpib pikendatud eelmängu, järkjärguline lähenemine õpetab talle kannatlikkust ning seksuaalset kirge iseendas vaatlema.</p>
          <p>Jalgevahe puudutused õpetavad, et kogu teekond on sama oluline kui sihtpunkt, aidates paaril väärtustada eelmängu ja aeglast lähenemist, mis sageli on võti sügavama seksuaalse rahulolu ja intiimse ühenduseni.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Touch and learn',
        description: `<h5>Teacher</h5>
          <ol>
            <li>Take a minute to touch and sense your own body. Discover what kind of touch you want to experience right now.</li>
            <li>If you don't know what kind of touch you want, start spontaneously.</li>
            <li>When you're ready, let your partner know with a touch.</li>
            <li>Show your partner on your body how and where they can touch you.</li>
            <li>Accept your partner's touch as it comes.</li>
            <li>Repeat steps 4 and 5. Each demonstration should last about 15 seconds.</li>
          </ol>
          <h5>Learner</h5>
          <ol>
            <li>Keep your eyes shut until your partner signals with a touch that they are ready.</li>
            <li>Try to replicate the demonstrated touch as accurately as possible, while enjoying the process yourself.</li>
            <li>When finished, take your hands away, and wait for the next demonstration.</li>
          </ol>`,
        additional: `<p>We all need touch. Often, we enjoy different kinds of touch. In order for our partner to know and offer us the kind of touch that our body enjoys and needs, it’s important to better understand our own body. This card teaches in detail how to show your partner how you like to be touched.</p>
          <p>We often tend to offer our partner the kind of touch that we ourselves enjoy, but this kind of touch does not always give the other person deep pleasure.</p>
          <p>At first, it’s important for the learner to keep their eyes closed so that the giver can safely experiment with what kind of touch they want to feel on their body. First, you can experiment for about a minute to get in touch with your body. After that, the exercise should last for about 15 seconds. This should be long enough to experience the touch and for the learner to remember it.</p>
          <p>This card provides an opportunity to systematically discover your partner’s preferences and teaches you to focus entirely on their needs, setting aside your own desires.</p>`,
      },
      ET: {
        title: 'Puuduta ja õpi',
        description: `<h5>Ettenäitaja</h5>
          <ol>
            <li>Võta vähemalt minut, et enda keha puudutada ja tajuda. Avasta, milliseid puudutusi soovid praegu kogeda.</li>
            <li>Kui ei tea, millist puudutust soovid, siis alusta spontaanselt.</li>
            <li>Kui oled valmis, anna kaaslasele puudutusega märku.</li>
            <li>Näita kaaslasele enda keha peal, kuidas ja kust ta sind puudutada võiks.</li>
            <li>Võta kaaslase puudutus vastu sellisena, nagu see tuleb.</li>
            <li>Korda punkte 4 ja 5. Iga ettenäitamine võiks kesta umbes 15 sekundit.</li>
          </ol>
          <h5>Õppija</h5>
          <ol>
            <li>Hoia silmad kinni, kuniks kaaslane annab puudutusega märku, et on valmis.</li>
            <li>Proovi ette näidatud puudutust võimalikult täpselt järele teha, ise seda protsessi nautides.</li>
            <li>Kui tehtud, võta käed ära ning oota järgmist ettenäitamist.</li>
          </ol>`,
        additional: `<p>Me kõik vajame puudutusi. Sageli meeldivad meile erinevad puudutused. Selleks, et kaaslane teaks ja pakuks just meie kehale meeldivaid ja vajalikke puudutusi, on oluline õppida enda keha ise tundma. See kaart õpetab detailselt ette näitama, kuidas Sulle meeldib, et Sind puudutatakse. Sageli kipume pakkuma kaaslasele just sellist puudutust, nagu meile endale meeldib, kuid alati ei paku selline puudutus teisele sügavat naudingut.</p>
          <p>Alguses on oluline, et õppija hoiaks silmad kinni, et ettenäitaja saaks turvaliselt katsetada, millist puudutust ta oma kehal tunda soovib. Alguses võib katsetada umbes minuti, et enda kehaga ühendust leida. Peale seda võiks ettenäitamine kesta umbes 15 sekundit. See on piisavalt kaua, et oleks aega puudutust kogeda ja ettenäidatu jääks õppijale meelde.</p>
          <p>See kaart annab võimaluse süsteemselt avastada kaaslase eelistusi ning õpetab keskenduma täielikult tema vajadustele, jättes kõrvale enda soovid.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'A supple connection',
        description: `<h5>Giver</h5>
          <ol>
            <li>Sensually rub oil all over the front of your body. Use your body to transfer the oil to your partner.</li>
            <li>Slide your oiled body against your partner, moving from their groin up to their neck.</li>
            <li>Get creative: make circular, sensual, and flowing movements.</li>
            <li>Listen to your partner to determine what level of pressure they like.</li>
            <li>If your partner wants to turn around, continue on the other side.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Take some relaxing breaths.</li>
            <li>Receive and enjoy.</li>
          </ol>`,
        additional: `<p>Oil can give a silky and supple quality to touching, and can create a connection between two bodies. When the person covered in oil rubs against their partner’s body, it might awaken their playful and flowing, creative side. For the other person, it will be arousing and enjoyable to relax and receive their partner’s oily body as it rubs against them.</p>
          <p>This card gives you the opportunity to try softer, more fluid, and sensual movements. The positive effects of this experience can in turn extend to other areas of life. Using the whole body instead of just the hands can bring variety to a relationship, creating a different way of experiencing physical intimacy.</p>
          <p>It’s a spontaneous dance between two bodies, where both sensually combine into one.</p>`,
      },
      ET: {
        title: 'Õline liibumine',
        description: `<h5>Andja</h5>
          <ol>
            <li>Määri sensuaalselt enda keha eestpoolt õliga kokku. Kanna õli oma keha abil kaaslase omale.</li>
            <li>Liibu õlise kehaga kaaslase vastu, tõustes tema jalgevahest kuni kaelani.</li>
            <li>Ole loominguline: tee ringjaid, sensuaalseid ja voolavaid liigutusi.</li>
            <li>Tunneta oma kaaslast, et aru saada, mis tugevusaste talle meeldib.</li>
            <li>Kui kaaslane soovib ümber keerata, jätka teise poolega.</li>
          </ol>
          <h5>Saaja</h5>
          <ol>
            <li>Lõdvestu hingamise abil.</li>
            <li>Võta vastu ja naudi.</li>
          </ol>`,
        additional: `<p>Õli muudab puudutuse sujuvaks, ühtlaseks ning ühendab kaks keha. Kui õli pealekandja oma kehaga kallima keha vastu liibub, võib temas ärgata mänguline ja voolav loominguline pool. Teisel on erutav ja nauditav lõdvestununa vastu võtta kaaslase õline ja liibuv keha.</p>
          <p>See kaart annab võimaluse katsetada pehmemat, voolavamat ja sensuaalsemat liikumist. Selle kogemuse positiivne mõju võib omakorda laieneda elus mujalegi. Kogu keha kasutamine käte asemel võib tuua suhtesse vaheldust, luues teistsuguse viisi füüsilise intiimsuse kogemisel.</p>
          <p>See on kahe keha spontaanne tants, kus mõlemad saavad olla sensuaalselt terviklikud.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Indulging the breasts',
        description: `<h5>Man</h5>
          <ol>
            <li>Rub your hands together to warm them up. Place your hands in a loving, honoring way on the woman's breasts and keep them there for 30 seconds.</li>
            <li>Stroke the breast slowly and gently in a zigzagging motion, starting from the collarbone. Don't touch the nipples or the areola yet. Caress both breasts like this simultaneously.</li>
            <li>Push up on the breasts slowly with moderate pressure. First one breast, then the other, then both at once.</li>
            <li>Place your hand on a breast so that the nipple is between two fingers and then make your hand quiver gently. First one breast, then the other, followed by both at once.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax and close your eyes.</li>
            <li>Allow emotions to surface, be and pass.</li>
            <li>Breathe.</li>
          </ol>`,
        additional: `<p>Pampering the breasts helps the woman get connected to her own sensitivity and potentially kindle a loving feeling and release oxytocin, which produces a sense of well-being and relaxation. This can put the woman in a softer and more flowing frame of mind.</p>
          <p>The activity on this card encourages men to experiment with new ways of increasing sensual self-confidence and teaches new techniques for touching sensitive areas. Gentle tender loving care can also be a sexual turn-on.</p>
          <p>Giving the breasts tender care is particularly valuable if the woman is experiencing changes in her body (such as aging, weight fluctuations, pregnancy, nursing). It can help restore the woman’s loving relationship to her breasts and the pleasures that can manifest there.</p>
          <p>Like many other activities, this exercise can bring up unexpected emotions. Allow them to come, stay for a while, and go.</p>
          <p>Conscious and skillful touching of the breasts shows that intimacy is a lot richer than just genital stimulation, and teaches both partners to give sensual, slow and attentive caresses their proper due.</p>`,
      },
      ET: {
        title: 'Rindade hellitamine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Hõõru käed soojaks. Aseta käed armastavalt naise rindadele ning hoia neid 30 sekundit.</li>
            <li>Silita siksakis rindu aeglaselt ja õrnalt, alustades rangluude juurest, kuid ära nibuvälju ega nibusid veel puuduta. Silita selliselt kahte rinda korraga (pilt a).</li>
            <li>Lükka rindu aeglases tempos keskmise survega alt üles. Võta ette algul üks rind, siis teine, seejärel mõlemad korraga (pilt b).</li>
            <li>Pane käsi rinna peale nii, et nibu on kahe sõrme vahel ning siis värista õrnalt kätt. Võta sellisel moel ette algul üks rind, siis teine, seejärel mõlemad korraga (pilt c).</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu ning sulge silmad.</li>
            <li>Luba emotsioonidel tulla, olla ja minna.</li>
            <li>Hinga.</li>
          </ol>`,
        additional: `<p>Rindade hellitamine aitab naisel saada ühendust nende tundlikkusega, võib äratada naises armastustunde ning vabastab oksütotsiini, mis tekitab heaolu ja lõdvestab. See võib muuta naise pehmemaks ja voolavamaks.</p>
          <p>See kaart julgustab mehi katsetama uusi viise, et kasvatada sensuaalset enesekindlust, ning õpetab uusi võtteid, kuidas tundlikku piirkonda puudutada. Õrn ja hooliv tähelepanu võib ka seksuaalselt erutada.</p>
          <p>Armastaval moel rindadega tegelemine on eriti väärtuslik, kui naine kogeb muutusi oma kehas (vananemine, kaalu kõikumised, rasedus, imetamine). Seeläbi saab aidata taastada naise armastavat suhet oma rindadega ning sealt avalduda võivate naudingutega.</p>
          <p>Naisel võib selle harjutuse käigus üles kerkida emotsioone. Lubage neil tulla, olla ja minna.</p>
          <p>Teadlik ja oskuslik rindade hellitamine näitab, et intiimsus on palju rikkalikum kui vaid genitaalne stimulatsioon, ja õpetab mõlemat partnerit väärtustama sensuaalseid, aeglaseid ja tähelepanelikke puudutusi.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Borrow your partner\'s hand',
        description: `<h5>Borrower</h5>
          <ol>
            <li>Decide whether you want to be clad in underwear or completely naked.</li>
            <li>Ask your partner, e.g.: "Honey, can I borrow your hand for at least five minutes?"</li>
            <li>Borrow your partner's hand and touch your own body where you want to be touched – in the way that you want to be touched.</li>
            <li>Let your imagination roam free. Do what you like. If desired, use your other hand as well.</li>
          </ol>
          <h5>Lender</h5>
          <ol>
            <li>Select a comfortable position and relax your hand.</li>
            <li>Let your partner fully control your hand.</li>
          </ol>`,
        additional: `<p>Self-gratification is usually a private act. Experiencing it as a tandem can enhance honesty and trust between partners. The activity on this card gives a chance to see and feel the sorts of pleasure that your loved one prefers, and learn new ways of pleasuring them.</p>
          <p>This exercise gives you a chance to borrow your partner’s hand to touch parts of your body you want to be touched. Sometimes your partner’s hand can be more arousing than your own.</p>
          <p>In a safe space, it’s possible to expand your sexual comfort zone. You may discover that sexual autonomy and partnership can coexist.</p>`,
      },
      ET: {
        title: 'Laena kaaslase kätt',
        description: `<h5>Käe laenaja</h5>
          <ol>
            <li>Vali, kas soovid olla aluspesus või alasti.</li>
            <li>Küsi kaaslaselt: "Kallis, kas ma võin su kätt laenata vähemalt viieks minutiks?"</li>
            <li>Laena partneri kätt ja puuduta sellega enda keha sealt, kust ise soovid, ja selliselt, nagu ise soovid.</li>
            <li>Lase fantaasia valla. Tee seda, mis sulle meeldib. Soovi korral kasuta ka oma teist kätt.</li>
          </ol>
          <h5>Käe omanik</h5>
          <ol>
            <li>Vali mugav poos ning lõdvesta käsi.</li>
            <li>Anna käe juhtimine partnerile üle.</li>
          </ol>`,
        additional: `<p>Enese nautimine on tavaliselt privaatne tegevus. Koos kogemine kasvatab ausust ja usaldust kaaslaste vahel. See kaart avab võimaluse näha ja tunda, milliseid naudinguid kallim eelistab, ning õppida uusi viise, kuidas ise talle naudinguid pakkuda.</p>
          <p>See harjutus annab võimaluse kaaslase käega just endale sobival viisil kehaosi puudutada. Kaaslase käsi võib olla erutavam kui enda oma.</p>
          <p>Turvalises ruumis on võimalik laiendada oma seksuaalset mugavustsooni. Võite avastada, et seksuaalne iseseisvus ja partnerlus saavad eksisteerida koos.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Caressing her belly',
        description: `<h5>Man</h5>
          <ol>
            <li>Rub your hands together to warm them up and place them on the woman's lower belly for 10 seconds, feeling how the warmth from the palms of your hands spreads throughout your partner's body.</li>
            <li>Start stroking the belly gently with your fingertips.</li>
            <li>Caress slowly and gently using the palms of your hands. Try out circular and back-and-forth motions.</li>
            <li>Try and find the midpoint of the lower abdomen, which can respond pleasurably to massage with moderate pressure. Move your fingers back and forth smoothly at a slow pace. Also experiment with quivering fingers.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>If needed, empty your bladder first. That makes it easier to relax.</li>
            <li>Relax, close your eyes and feel the emotions you feel.</li>
            <li>Let the emotions come, be and go. Breathe.</li>
          </ol>
          <p>Suggestion: use oil to make the caresses even more silky-smooth.</p>`,
        additional: `<p>Lavishing attention on the abdominal area can help the woman get in tune with this part of her body. For some women, touching the lower part of her belly can produce discomfort, pain and dredge up emotions. Using a gentle, loving touch helps to release these feelings gradually. In the process, pleasure centers can become activated.</p>
          <p>Touching in this way stimulates circulation in the abdomen. It can enhance sensitivity to sensations, including the ability to experience pleasure.</p>
          <p>By massaging the woman’s lower abdomen, the man can forge indirect contact with the A-spot in the woman’s vagina. This in turn presents an opportunity to experience both genital and full-body pleasure, underscoring that sexuality is more than just genital pleasure – it encompasses the whole body.</p>`,
      },
      ET: {
        title: 'Kõhunauding naisele',
        description: `<h5>Mees</h5>
          <ol>
            <li>Hõõru käed kuumaks ning aseta 10 sekundiks naise alakõhule, tunnetades, kuidas peopesadest soojus kaaslase kehale üle kandub.</li>
            <li>Alusta õrnalt sõrmeotstega kõhu silitamist.</li>
            <li>Silita aeglaselt ja õrnalt peopesadega naise alakõhtu. Katseta ringjate ja edasi-tagasi liigutustega (pilt a).</li>
            <li>Katseta ja leia üles alakõhu keskpaik (pilt b), mille keskmise survega masseerimine pakub naudingut. Liiguta seal sõrmi sujuvalt ja aeglases tempos edasi-tagasi. Katseta ka sõrmede väristamist.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Vajadusel tühjenda enne põis, siis on kergem lõdvestuda.</li>
            <li>Lõdvestu, sulge silmad ning koge tekkivaid tundeid.</li>
            <li>Luba emotsioonidel tulla, olla ja minna. Hinga.</li>
          </ol>
          <p>Oluline: Võid kasutada õli, et silitada oleks meeldivam ja libedam.</p>`,
        additional: `<p>Kõhu hellitamine võib aidata naisel saada kontakti alakõhus toimuvaga. Mõnele naisele võib alakõhu puudutamine tekitada ebamugavust, valu ning tuua üles emotsioone. Õrna ja armastava puudutuse abil on võimalik neid järk-järgult vabastada. Seeläbi võivad aktiveeruda naudingulised alad.</p>
          <p>Selline puudutus ergutab kõhus vereringet. See võib aistingute tundlikkust, sealhulgas naudingute kogemise võimet, kehas kasvatada.</p>
          <p>Naise alakõhtu masseerides on mehel võimalus luua kaudne kontakt naise vagiinas asuva A-alaga. See võib pakkuda võimalust kogeda nii genitaalset kui ka kogu keha haaravat naudingut. Seeläbi võib mõista, et seksuaalsus ei ole seotud ainult suguelunditega, vaid hõlmab kogu keha.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
    translations: {
      EN: {
        title: 'Cuddling naked',
        description: `<h5>Giver</h5>
          <ol>
            <li>While naked, hold your partner in a loving manner from behind their back.</li>
            <li>Place your hand in the middle of your partner's chest for about two minutes.</li>
            <li>Then move the hand down to the lower belly for about two minutes.</li>
            <li>To conclude, move the hand to the hip bone and hold your partner against you with consistent pressure.</li>
          </ol>
          <h5>Receiver</h5>
          <ol>
            <li>Relax and enjoy.</li>
            <li>Breathe deeply.</li>
          </ol>`,
        additional: `<p>Naked bodies touching one another: a way to connect with each other and allow the sexual urge to grow. Try to get into a frame of mind where you have no expectation or idea about what should happen next. A sexual connection kindled in this manner can be more pleasurable than the mind’s designs.</p>
          <p>Nakedness without a sexual goal can make you feel vulnerable. Let the emotions come, be and go and return to the pleasure. If need be, read the “ABCs of Emotions.”</p>
          <p>Cuddling naked is an alternative to the superficial ideas of intimacy conditioned by the media and pornography.</p>`,
      },
      ET: {
        title: 'Paljalt kaisus',
        description: `<h5>Kaissuvõtja</h5>
          <ol>
            <li>Hoia kaaslast armastavalt selja tagant paljalt kaisus.</li>
            <li>Aseta käsi kaaslase rinna keskele umbes 2 minutiks.</li>
            <li>Seejärel liigu käega alakõhule umbes 2 minutiks.</li>
            <li>Lõpetuseks liiguta käsi puusakondile ning hoia kaaslast ühtlase survega enda vastas.</li>
          </ol>
          <h5>Kaisus olija</h5>
          <ol>
            <li>Lõdvestu ja naudi.</li>
            <li>Hinga sügavalt.</li>
          </ol>`,
        additional: `<p>Paljad kehad üksteise vastas – see annab võimaluse teineteisega ühenduda ja lubada seksuaalsel tungil kasvada. Laske tekkida olukorral, kus puudub ettekujutus ja ootus, mis juhtuma peaks. Sellise koha pealt tekkinud seksuaalne ühendus võib olla naudingulisem kui meelte loodud idee loodetavast stsenaariumist.</p>
          <p>Alastus ilma seksuaalse eesmärgita võib olla haavatav kogemus. Lubage emotsioonidel tulla, olla ja minna ning tulge naudingusse tagasi. Vajadusel tutvuge „Emotsioonide ABC-ga".</p>
          <p>Paljalt kaisus olemine pakub alternatiivi meediast ja pornograafiast mõjutatud pinnapealsele arusaamale intiimsusest.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    isFree: true,
    translations: {
      EN: {
        title: 'Tantalizing the labia',
        description: `<h5>Man</h5>
          <ol>
            <li>Oil your hands and rub them to warm them up.</li>
            <li>Hold the palm of your hand gently against the labia for 30 seconds.</li>
            <li>Gently and slowly use your hands to oil your partner's crotch area.</li>
            <li>Knead one side of the labia majora between the thumb and index finger. At a slow pace, gently, move downward. Repeat the same with the other side.</li>
            <li>Breathe deeply.</li>
            <li>Knead the labia minora in the same manner.</li>
            <li>Caress the area between the anus and the genitals.</li>
            <li>Pull the skin of the labia major away from the body and caress it particularly gently and slowly. Taut skin is more sensitive to the touch.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax and close your eyes.</li>
            <li>Allow pleasure to unfold.</li>
          </ol>`,
        additional: `<p>The outer and inner labia often go overlooked, but they’re very sensitive thanks to the many nerve endings here. Playing with the vulva in a gentle and slow manner gives the woman a chance to experience new and deeper pleasures. Indirect stimulation of the clitoris through the labia allows arousal to grow gradually. This can unlock a sensual, flowing, soft and succulent arousal.</p>
          <p>The man will be better able to understand the woman’s pleasure response as well as to get a sense of his own arousal dynamics. Mastering new skills and offering his partner a deeper kind of pleasure will boost his self-confidence and deepen emotional connection.</p>
          <p>This practice represents a shift from superficial, performance-centered sexuality in the direction of a deeper, more conscious and respectful sexuality, which acknowledges the complexity of the woman’s body and the multifaceted nature of pleasure.</p>`,
      },
      ET: {
        title: 'Häbemokkade hellitus',
        description: `<h5>Mees</h5>
          <ol>
            <li>Tee käed õliseks ja hõõru soojaks.</li>
            <li>Hoia peopesa õrnalt naise häbememokkade vastas umbes 30 sekundit.</li>
            <li>Tõmba pehmelt ja aeglaselt kätega kordamööda naise jalgevahe õliseks.</li>
            <li>Mudi pöidla ja nimetissõrme vahel välist häbememokka. Alusta ülevalt ning liigu aeglases tempos ja õrnalt allapoole. Korda sama teise häbememokaga (pilt a).</li>
            <li>Hinga sügavalt.</li>
            <li>Mudi sarnaselt sisemisi häbememokki.</li>
            <li>Silita päraku ja vagiina vahelist ala (pilt b).</li>
            <li>Tõmba välise häbememoka nahk kehast eemale ja silita seda pingul nahka eriti õrnalt ja aeglaselt. Pingul nahk on puudutuse suhtes tundlikum (pilt c).</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu ning sulge silmad.</li>
            <li>Luba naudingul avalduda.</li>
          </ol>`,
        additional: `<p>Häbememokad jäävad tihti tähelepanuta, kuid on väga tundlikud, sest seal on rohkelt närvilõpmeid. Häbememokkadega tegelemine õrnal ja aeglasel viisil annab naisele võimaluse kogeda uusi sügavamaid naudinguid. Kliitori kaudne stimuleerimine läbi väliste häbememokkade võimaldab järkjärgulist erutuse kasvu. Seeläbi võib naises avalduda sensuaalne, voolav, pehme, mahlane erutus.</p>
          <p>Mehel avaneb võimalus oma naise naudingulisust rohkem tundma õppida ning tajuda iseenda erutuse dünaamikat. Uute oskuste omandamine ja partnerile sügavama naudingu pakkumine suurendab enesekindlust ning süvendab emotsionaalset sidet.</p>
          <p>Selline praktika esindab nihet pinnapealselt soorituskeskselt seksuaalsuselt sügavama, teadlikuma ja austavama seksuaalsuse suunas, mis tunnustab naise keha keerukust ja naudingu mitmekihilisust.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Penis massage',
        description: `<h5>Woman</h5>
          <ol>
            <li>Oil your hands and rub them to warm them up.</li>
            <li>Stroke your partner's skin with long motions along the thighs and belly towards the penis.</li>
            <li>In a smooth motion, take hold of the penis. Apply oil to the penis and testicles, going slowly.</li>
            <li>The left hand moves up, the right hand moves down and vice versa. The movement should be long and fluid. Start slowly, then change speeds.</li>
            <li>Using your left hand, hold the root of the penis so that the foreskin is pulled back. Make circles with the right hand at the tip of the penis.</li>
            <li>Place both hands around the penis. Using your left hand, rotate right, while your right hand rotates left around the penis. The hands should go in opposing directions back and forth and up and down along the shaft.</li>
            <li>If the man asks for a pause, massage his belly and chest.</li>
          </ol>
          <h5>Man</h5>
          <ol>
            <li>Relax, close your eyes and enjoy.</li>
            <li>If it gets more intense, take slow, deep breaths.</li>
            <li>If it gets too intense, ask for a break so as not to ejaculate.</li>
          </ol>`,
        additional: `<p>Usually, men are in an active role. A penis massage allows them to receive pleasure and lets the woman control the process. As a result, the man can return to simply being in the here and now, present and focused in their body.</p>
          <p>Conscious and multifaceted stimulation helps to develop the ability to control ejaculation, have a better sense of one’s body and expand the palette of erotic pleasure. New facets can open up: he may experience how his sexual pleasure increases and spreads throughout his body. Breathing, vocalizing, moving and relaxing assist in this experience.</p>
          <p>The woman realizes the possibility of discovering how the male partner’s body responds and what it is sensitive to. If the man’s arousal starts peaking, it is a good time to massage his chest so that the pleasure can flow into the upper body as well.</p>`,
      },
      ET: {
        title: 'Peenisemassaaž',
        description: `<h5>Naine</h5>
          <ol>
            <li>Tee käed õliseks ja hõõru kuumaks.</li>
            <li>Silita nahka pikkade liigutustega mööda reisi ja kõhtu peenise suunas.</li>
            <li>Võta sujuvalt peenis käte vahele ning õlita peenist ja munandeid aeglases tempos.</li>
            <li>(Pilt a). Vasak käsi liigub üles, parem alla ning vastupidi. Liigutused olgu pikad ja voolavad. Alusta aeglaselt, vaheta tempot.</li>
            <li>(Pilt b). Vasaku käega hoia peenise juurest kinni nii, et eesnahk oleks all. Parema käe peopesaga tee ringjaid liigutusi peenise otsa peal.</li>
            <li>(Pilt c). Aseta mõlemad käed ümber peenise. Vasaku käega pööra paremale, samal ajal parema käega pööra vasakule ümber peenise, liiguta vastassuunas pöörates edasi-tagasi ning mööda peenist üles-alla.</li>
            <li>Kui mees palub pausi, masseeri tema kõhtu ja rinda.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Lõdvestu, sulge silmad ning naudi.</li>
            <li>Kui läheb intensiivseks, hinga sügavalt ning aeglaselt.</li>
            <li>Kui tunned, et läheb liiga intensiivseks, siis palu pausi, et mitte ejakuleerida.</li>
          </ol>`,
        additional: `<p>Enamasti on mehed aktiivses rollis. Peenisemassaaž võimaldab neile pakutav vastu võtta ning lubada naisel protsessi juhtida. Mees saab tulla tegemisest olemisse ning seeläbi kehalisse tunnetusse.</p>
          <p>Teadlik ja mitmekülgne stimulatsioon aitab arendada oskust ejakulatsiooni kontrollida, keha paremini tunnetada ja võib laiendada erootilise naudingu spektrit. Seeläbi võivad avaneda uued tahud. Mees võib kogeda, kuidas seksuaalnauding kasvab ning liigub kehas laiali. Selle kogemisele aitab kaasa HHLL ehk hingamine, häälimine, liikumine, lõdvestumine.</p>
          <p>Naisel avaneb võimalus avastada mehe keha reaktsioone ja tundlikkust. Kui mehe erutus kasvab, on hea aeg masserida tema rinda, et nauding saaks voolata ülakehasse.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Kissing the labia',
        description: `<h5>Man</h5>
          <ol>
            <li>Approach the vulva slowly. Plant a slow and moist kiss. Do it again a few times.</li>
            <li>Kiss the labia softly, proceeding slowly. Imagine you are kissing the woman's lips.</li>
            <li>Using your tongue's full surface area, run your tongue slowly over the labia. Do this several times.</li>
            <li>Kiss with an open mouth, creating a gentle vacuum. Maintain the seal and use your lips to pull the labia slightly back.</li>
            <li>If the woman is very aroused, you can also insert the tip of your tongue into the labia.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax, close your eyes and enjoy.</li>
            <li>Use your voice to give feedback so the man can adjust his kissing technique accordingly.</li>
          </ol>
          <p>Note: It is more comfortable for the man if the woman's pubic area is shaved. Also, it can be uncomfortable for the woman if the man has 1–2 days of facial hair growth.</p>`,
        additional: `<p>Soft and wet, the tongue is a tailor-made instrument for pleasurable arousal, activating the countless nerve endings in the labia. It may make the woman feel loved and accepted. In this activity, the woman just lies back and relaxes, and the body’s natural arousal process takes over. If she feels shame or is uncomfortable with her sex organs, she can blindfold the man before he begins.</p>
          <p>For the man, this is an opportunity to experience deeper pleasure through lavishing attention on the woman’s genital area. Offering the woman pleasure may also be physically pleasurable for the man. Caring and attentive oral stimulation can be healing – especially for those who have had negative sexual experiences.</p>
          <p>This practice helps to create a fuller, pleasurable sexuality where the woman and both partners’ well-being is honored and emotional connection is deepened.</p>`,
      },
      ET: {
        title: 'Häbememokkade suudlemine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Lähene aeglaselt häbememokkadele. Tee aeglane ja niiske musi. Tee veel mõned korrad musi.</li>
            <li>Suudle häbememokki õrnalt ja aeglases tempos. Kujutle, nagu suudleksid naise huuli.</li>
            <li>Tõmba laia keelega aeglaselt üle häbememokkade. Tee seda mitu korda.</li>
            <li>Suudle avatud suuga, tekitades õrna vaakumi. Hoia vaakumit ning tõmba huultega häbememokki veidi eemale.</li>
            <li>Kui naine on väga erutunud, võid keele häbememokkade vahelt sisse lükata.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sulge silmad ning naudi.</li>
            <li>Anna häälega vahetut tagasisidet, et mees saaks sellest lähtuvalt suudlemist kohandada.</li>
          </ol>
          <p>Oluline: Häbememokki on mehel mugavam suudelda, kui need on raseeritud. Naisel võib olla ebamugav, kui mehel on 1–2 päevane habe.</p>`,
        additional: `<p>Keel pakub niisket ja pehmet naudingulist erutust, mis aktiveerib rohkelt närvilõpmeid häbememokkades. See võib panna naist tundma, et teda armastatakse ja aktsepteeritakse. Naine saab rahulikult lõdvestuda ja nautida ning keha loomulik erutusprotsess ärgata. Kui mõni naine tunneb häbi või ebamugavust oma suguelundite pärast, siis naine võib mehel enne häbememokkade suudlemist silmad kinni siduda.</p>
          <p>Mehel avaneb võimalus kogeda ise sügavamat naudingut naise suguelundite piirkonda hellitades. Naisele naudingu pakkumine võib olla ka mehele nauditav. Hooliv ja tähelepanelik oraalne stimulatsioon võib olla tervendav kogemus, eriti neile, kellel on olnud negatiivseid seksuaalkogemusi.</p>
          <p>See praktika aitab luua terviklikumat, austavamat ja naudinguküllasemat seksuaalsust, peab silmas mõlema heaolu ning süvendab emotsionaalset sidet.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Kissing the penis',
        description: `<h5>Woman</h5>
          <ol>
            <li>Kiss the area where the legs and body meet. Delicately, lingeringly kiss the man's testicles.</li>
            <li>With slow kisses, make your way from the root of the penis to the head of the penis.</li>
            <li>Lick and kiss the edge of the head of the penis.</li>
            <li>With particular gentleness and a long, lingering manner, kiss the underside of the penis head. Kiss it as if it were your partner's lips.</li>
            <li>Slide the head of the penis into your mouth and treat it indulgently along with the sides of the glans.</li>
            <li>If the man indicates he is nearing ejaculation, massage his belly and chest.</li>
            <li>Enjoy the process and be creative.</li>
          </ol>
          <h5>Man</h5>
          <ol>
            <li>Close your eyes and let the woman hold the reins.</li>
            <li>Keep your arms by your sides, relax the fingers, palms of your hands and glutes and enjoy.</li>
            <li>If you get close to ejaculation, rap your knuckles to send a signal.</li>
          </ol>
          <p>Note: Use saliva or oil as a lubricant if desired.</p>`,
        additional: `<p>In this exercise, the man doesn’t have to do anything, just enjoy someone having their way with him. Through relaxation, we can experience more pleasure in the body. The man closes his eyes to be more aware of what is going on in his body and more clearly judge his arousal level. At that point, he is ready to surf waves of varying intensity without climaxing. Relaxing the buttocks helps passively receive the pleasure and makes the sexual pleasure flow better throughout his body.</p>
          <p>For the woman, this can be very enjoyable, since the lips, tongue and the rest of the mouth are also sensitive. If the woman enjoys ordinary kissing, kissing the penis can also be quite pleasant. If the man is a passive receiver, the woman has a chance to get into better touch with herself.</p>
          <p>Kissing the penis as described below may lead beyond conventional mechanical and goal-oriented sexual activity to a fuller, more meaningful and satisfying experience.</p>`,
      },
      ET: {
        title: 'Peenise suudlemine',
        description: `<h5>Naine</h5>
          <ol>
            <li>Suudle keha ja jalgade ühenduskohti. Suudle õrnalt ja aeglaselt mehe munandeid.</li>
            <li>Liigu aeglaste suudlustega peenise juure juurest (pilt a) kuni peenise peani.</li>
            <li>Limpsi ja suudle peenise pea serva.</li>
            <li>Eriti pehmelt ja pikalt suudle peenise pea alumist osa (pilt b). Suudle nii, nagu tegu oleks su kaaslase huultega.</li>
            <li>Libista peenise pea suhu ning hellita seda ja selle serva.</li>
            <li>Kui mees annab märku, et jõuab ejakulatsiooni lähedale, masseeri tema kõhtu ja rinda.</li>
            <li>Naudi protsessi ja ole loominguline.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Sulge silmad ning anna ohjad naisele.</li>
            <li>Hoia käed keha kõrval, lõdvesta sõrmed, peopesad ja tuharalihased ning naudi.</li>
            <li>Kui hakkad lähenema ejakulatsioonile, anna koputusega märku.</li>
          </ol>
          <p>Oluline: Soovi korral kasuta niisutamiseks sülge või õli.</p>`,
        additional: `<p>Mees ei pea ise midagi tegema, vaid lihtsalt nautima, kuidas temaga tegeletakse. Lõdvestumise teel suudame kehas rohkem naudinguid kogeda. Mees paneb silmad kinni, et paremini oma keha tunnetada ning saada selgem ülevaade erutuse tasemest, misjärel mees on võimeline lainetama vahelduva intensiivsusega naudingus ejakulatsioonini jõudmata. Kannikate lõdvestamine aitab naudingut passiivselt vastu võtta ning lubab seksuaalsel naudingul kehas paremini liikuda.</p>
          <p>Naisele võib selline tegevus olla väga nauditav, kuna huuled, keel ja suu on tundlikud. Kui naine oskab tavalist suudlemist nautida, võib ka peenise suudlemine olla väga meeldiv. Kui mees on passiivne vastuvõtja, avaneb naisel võimalus iseenda naudinguga kontakt saada.</p>
          <p>Selline peenise suudlemine võib viia tavapärasest mehaanilisest ja eesmärgipõhisest tegevusest seksuaalselt terviklikuma, tähendusrikkama ja rahuldust pakkuvama kogemuse poole.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Cunnilingus',
        description: `<h5>Man</h5>
          <ol>
            <li>For about 30 seconds, behold the woman's labia from a distance with an admiring gaze.</li>
            <li>Proceeding very slowly, kiss the insides of her thighs, moving toward the vagina.</li>
            <li>Shower the vagina area with kisses. Then hold your lips about 3 cm from the vagina and exhale warm air at the vagina 3 times.</li>
            <li>Softly kiss the woman's vulva admiringly.</li>
            <li>Slide your tongue several times over the labia using more surface area.</li>
            <li>Gently touch the clitoris with the tip of your tongue and make circles around it.</li>
            <li>Be attentive to the woman's body language.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax, close your eyes and enjoy.</li>
            <li>Let your body move and let your voice be heard.</li>
            <li>Breathe deeply into your abdomen.</li>
          </ol>`,
        additional: `<p>Using the lips, tongue and the breath to administer pleasure is something totally different than what the fingers and penis are capable of. The tongue has a much more delicate, softer effect. A light and slow touch gives the woman’s body time to warm up, which only deepens the pleasure.</p>
          <p>It can be a source of contentment and arousal for the male partner. The greater the pleasure experienced by both partners, the more they will want to spend sexual quality time together. Orgasm doesn’t have to be the end goal, since that can put pressure on the woman to meet “expectations” and block the flow of pleasure.</p>
          <p>A gentle and soft approach shows the woman that the man cares about her and wants to pleasure her, and that enhances mutual intimacy and trust.</p>`,
      },
      ET: {
        title: 'Suuseks naisele',
        description: `<h5>Mees</h5>
          <ol>
            <li>Vaata umbes 30 sekundit veidi eemalt häbememokki imetleva pilguga (pilt a).</li>
            <li>Suudle väga aeglases tempos naise reite sisekülgi, liikudes vagiina poole (pilt b).</li>
            <li>Külva vagiina ümbrus suudlustega üle. Seejärel hoia huuli vagiina juures umbes 3 sentimeetri kaugusel ning õhka 3 korda sooja hingeõhku vagiina peale.</li>
            <li>Suudle pehmelt naise väliseid häbememokki ning ime neid õrnalt.</li>
            <li>Libista mitu korda laia keelega üle häbememokkade.</li>
            <li>Puuduta õrnalt keeleotsaga kliitorit ning tee ringe ümber kliitori (pilt c).</li>
            <li>Märka naise kehakeelt.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sulge silmad, naudi.</li>
            <li>Luba kehal liikuda ja häälel avalduda.</li>
            <li>Hinga sügavalt kõhtu.</li>
          </ol>`,
        additional: `<p>Huulte, keele ja hingeõhuga hellitamine pakub teistsugust naudingut kui sõrmede ja peenise puhul. Keelega on võimalik pakkuda naisele palju õrnemat ja pehmemat puudutust. Õrnus ja aeglaselt lähenemine annab naise kehale aega üles soojeneda. See omakorda soodustab suuremaid naudinguid.</p>
          <p>Naise hellitamine suuga võib olla mehele rõõmu, rahulolu ja erutuse allikas. Mida suuremaid naudinguid mõlemad kogevad, seda rohkem soovitakse seksuaalselt koos aega veeta. Orgasm ei pea olema eesmärk omaette, sest võib naisele pinge peale panna ning sulgeda naudinguvoo.</p>
          <p>Õrnus ja pehmus näitab naisele, et mees hoolib temast ning soovib talle naudinguid pakkuda. Seeläbi kasvab nendevaheline intiimsus ja usaldus.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Slow entry',
        description: `<h5>Man</h5>
          <ol>
            <li>Lubricate the head of the penis with saliva or oil. Make gentle circles around the vaginal opening.</li>
            <li>Enter the vagina ever so slowly, one centimeter at a time. After each centimeter, take a 10-second break. Continue until you are fully inside.</li>
            <li>Hold the reins and enjoy.</li>
            <li>Feel your entire length inside the woman; breathe and relax.</li>
            <li>Withdraw slowly and stop when the head of the penis is between the labia. Repeat the slow re-entry.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Keep your attention on how the penis is entering one centimeter at a time.</li>
            <li>Focus in detail, savoring every movement in your vagina.</li>
            <li>Relax and breathe deeply.</li>
          </ol>`,
        additional: `<p>Male sexuality is often controlled by a subconscious setting that leads him to want to enter the vagina very quickly. He may instinctively rebel against the idea of slow entry at first. If he catches himself resisting the idea of slowing down, he should persevere and continue the slow entry. Consciously avoiding being in a hurry can unlock new levels of pleasure. Slowing down makes it possible to intensify the sense of each moment, increasing the pleasure experience.</p>
          <p>Slow entry increases the sensitivity of the woman’s vagina and allows her to feel more exquisite sensations that can go unnoticed in the case of rapid entry. The unfolding of the woman’s pleasure and tumescence of excitatory tissue takes time. If the first entry is very slow, it can increase the woman’s capacity for experiencing pleasure.</p>
          <p>A slower entry will make space for deeper emotional and physical connection and teach the partners to go from automatic sexuality toward a more mindful and conscious practice. That runs counter to the notion that good sex means fast thrusting, and emphasizes quality over quantity.</p>`,
      },
      ET: {
        title: 'Aeglane sisenemine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Libesta peenise pea sülje või õliga. Tee õrnalt ringe ümber vagiina ava (pilt a).</li>
            <li>Sisene vagiinasse aegluubis sentimeeterhaaval. Iga sentimeetri järel tee umbes 10-sekundine paus. Liigu selliselt kuni lõpuni (pilt b).</li>
            <li>Hoia ohjad enda käes ning naudi.</li>
            <li>Tunneta kogu oma peenist sügaval naise sees, hinga ja lõdvestu.</li>
            <li>Liigu aeglaselt välja ning peatu, kui peenise pea on jõudnud häbememokkade vahele. Korda aeglast sisenemist.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Hoia oma tähelepanu sellel, kuidas peenis siseneb sentimeeterhaaval Sinu vagiinasse.</li>
            <li>Tunneta detailselt igat liigutust vagiinas.</li>
            <li>Lõdvestu ja hinga sügavalt.</li>
          </ol>`,
        additional: `<p>Mehe seksuaalset tegevust juhib tihti alateadlik programm, mis sunnib teda kiiresti vagiinasse sisenema. Aeglasel sisenemisel võib mees kogeda esialgu tugevat vastupanu, kuid seda märgates tuleks aeglase sisenemisega jätkata. Teadlikult kiirustamist vältides võib pääseda uuele naudingutasemele. Aeglustamine võimaldab tunda iga momenti võimsamalt, suurendades naudingukogemust.</p>
          <p>Aeglane sisenemine suurendab naise vagiina tundlikkust ja võimaldab tajuda peenemaid aistinguid, mis kiire sisenemise korral võivad jääda märkamata. Naise naudingulisuse avanemine ja erutuskoe paisumine võtab aega. Kui esimene sisenemine on väga aeglane, võib naise võimekus naudinguid kogeda suureneda.</p>
          <p>Selline sisenemine loob ruumi sügavamaks emotsionaalseks ja füüsiliseks ühenduseks ning õpetab kallimaid liikuma automaatsest teadliku ja tundliku seksuaalsuse suunas. See lükkab ümber arusaama, et hea seks tähendab kiireid ja intensiivseid liigutusi, ja rõhutab kvaliteeti kvantiteedi asemel.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Soaking',
        description: `<h5>Man</h5>
          <ol>
            <li>Enter the vagina very slowly, delicately and smoothly.</li>
            <li>Keep your hips in place and the penis motionless inside the vagina.</li>
            <li>Relax the glutes and stomach muscles and the penis will relax inside the woman.</li>
            <li>Breathe slowly and deeply through the mouth into the abdomen.</li>
            <li>Focus on your penis and the warmth of the vagina.</li>
            <li>If you feel you start to lose your erection, make a few slow movements and then relax again inside your partner.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax your hips, stomach and vagina.</li>
            <li>Breathe slowly and deeply into your stomach through your mouth.</li>
            <li>Focus on the vagina and feel the warmth of the penis inside you.</li>
            <li>Allow pleasure to unfold freely in your body.</li>
          </ol>
          <p>Note: If you notice your attention wandering away from feeling the sensation of warmth, try to bring your focus back to the union between your genitals.</p>`,
        additional: `<p>This exercise gives you an opportunity to experience a deeper sexual connection in the absence of conventional active movement. Focusing on each other’s sexual organs can open up a deeply intimate and pleasurable shared space. If you’re not used to being in sexual contact while motionless, your thoughts may start to wander and become distracted. In that case, try to return your focus on the nexus between your genitals.</p>
          <p>Soaking can help perceive sexual energy not associated with friction but rather a deeper energy-centered connection. In this way, we can be aware of the sensitivity of our sex organs and reactions while not moving at all. A motionless state can help the woman perceive the natural pulsating of the walls of the vagina.</p>
          <p>Sharing a moment like this teaches you to value the sexual journey itself, making the sexual experience a meditative practice where the focus is on the moment and sensations.</p>`,
      },
      ET: {
        title: 'Peenise leotamine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Sisene vagiinasse väga aeglaselt, õrnalt ja sujuvalt.</li>
            <li>Hoia puusad paigal ning peenis liikumatult vagiinas.</li>
            <li>Lõdvesta tuharalihased, kõht ning peenis justkui lõdvestuks naise sees.</li>
            <li>Hinga suu kaudu aeglaselt ja sügavalt kõhtu.</li>
            <li>Keskendu oma peenisele ning taju vagiina soojust.</li>
            <li>Kui tunned, et peenis hakkab ära vajuma, tee mõned aeglased liigutused ning lõdvestu naise sees uuesti.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvesta puusad, kõht ja vagiina.</li>
            <li>Hinga suu kaudu aeglaselt ja sügavalt kõhtu.</li>
            <li>Keskendu vagiinale ja tunneta peenise soojust enda sees.</li>
            <li>Luba naudingutel vabalt oma kehas avalduda.</li>
          </ol>
          <p>Oluline: Kui märkad, et tähelepanu läheb soojuse tunnetamiselt eemale, keskendu taas suguelundite ühendusele.</p>`,
        additional: `<p>See tegevus annab võimaluse kogeda sügavamat seksuaalset ühendust, kus puudub tavapärane aktiivne liikumine. Teineteise suguelunditele keskendumine võib mehe ja naise vahel avada sügavalt intiimse ja naudingulise koosolemise ruumi. Kui ei ole harjunud liikumatult seksuaalses ühenduses olema, võib juhtuda, et mõte läheb rändama või tähelepanu hajub. See on normaalne. Sellisel juhul tooge tähelepanu tagasi suguelundite ühendusele.</p>
          <p>Peenise „leotamine" võib aidata tajuda seksuaalenergiat, mis ei ole seotud hõõrdumise, vaid sügavama energeetilise ühendusega. Seeläbi võib kasvada võime tajuda suguelundite tundlikkust ja reaktsioone liikumatuna. Naisel võimaldab liikumatu seisund tajuda vagiina seinte loomulikku tukslemist.</p>
          <p>Selline koos olemine õpetab väärtustama seksuaalset teekonda ennast, muutes seksuaalkogemuse meditatiivseks praktikaks, kus tähelepanu on koondunud hetkele ja aistingutele.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Savoring the penis',
        description: `<h5>Woman</h5>
          <ol>
            <li>Lubricate the penis with oil or saliva.</li>
            <li>Keep your lips soft and relaxed.</li>
            <li>Very slowly and gently stroke the penis with the outsides of your lips. With eyes closed, feel the penis touching your lips.</li>
            <li>Now do the same with the middle part and insides of the lips.</li>
            <li>Try some variations: a) draw your tongue slowly over the penis, b) slide the head of the penis ever so slowly into your mouth, c) make circular motions with your head with the penis in your mouth.</li>
            <li>Be creative. Focus on your own pleasure. Whether the man is deriving pleasure or not isn't that important here. If you feel your focus is drifting to the man, bring it back to your own pleasure.</li>
          </ol>
          <h5>Man</h5>
          <ol>
            <li>Leave behind all expectations.</li>
            <li>Relax, be a passive observer and experience the sensations while the woman is enjoying your penis.</li>
            <li>Refrain from ejaculating. If you feel you need a break, let your partner know.</li>
          </ol>`,
        additional: `<p>The idea behind this card is for the woman to learn to experience pleasure while she is administering oral sex. The lips are connected on some level with the labia and this exercise can offer sexual pleasure. By slowing down, it is possible to more deeply experience and feel what is happening where the lips meet the penis. The woman is an active agent of her own pleasure.</p>
          <p>The man lends his penis to the woman without expectations of reciprocal pleasure and lets the woman control the whole process. The more pleasure the woman derives from oral sex, the more frequently and longer she will want to do it.</p>
          <p>This card teaches that sexual enjoyment doesn’t have to be related to performance, it can come from genuine self-expression that the partner gives consent for and encourages.</p>`,
      },
      ET: {
        title: 'Peenise nautimine suuga',
        description: `<h5>Naine</h5>
          <ol>
            <li>Määri peenis õli või süljega kokku.</li>
            <li>Hoia huuled pehmed ja lõdvestunud.</li>
            <li>Silita väga aeglaselt ja õrnalt peenist oma huulte väliskülgedega. Tunneta kinnisilmi, kuidas peenis huuli puutub.</li>
            <li>Tee sama huulte keskosa ja sisekülgedega.</li>
            <li>Proovi variatsioone: a) tõmba keelega aeglaselt üle peenise, b) libista peenise pea üliaeglaselt suhu, c) tee, peenis suus, peaga ringjaid liigutusi.</li>
            <li>Ole loominguline. Keskendu iseenda naudingutele. See, kas mees naudib või mitte, pole siin nii oluline. Kui tunned, et fookus läheb mehele, siis too tähelepanu iseenda naudingule tagasi.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Võta kõik ootused maha.</li>
            <li>Lõdvestu, ole passiivne vaatleja ning koge tundmusi, kuni naine su peenist naudib.</li>
            <li>Hoidu ejakulatsioonist. Kui tunned, et vajad pausi, anna märku.</li>
          </ol>`,
        additional: `<p>Kaardi sügavam mõte on see, et naine õpiks suuseksi tehes ise naudinguid kogema. Huuled on ühenduses häbememokkadega ning selline tegevus võib pakkuda seksuaalset naudingut. Aeglustamise teel saab sügavamalt kogeda ning tunnetada peenise ja huulte puutepunktis toimuvat. Naine on oma naudingu aktiivne looja.</p>
          <p>Mees laenab oma peenist naisele naudinguootuseta ning lubab naisel juhtida kogu protsessi. Mida rohkem naine suuseksi tehes naudinguid saab, seda tihedamini ja pikemalt soovib ta seda teha.</p>
          <p>See kaart õpetab, et seksuaalne nauding ei pea olema seotud sooritusega, vaid võib tulla ehedast eneseväljendusest, mida kaaslane lubab ja soosib.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Clitoral pleasure',
        description: `<h5>Man</h5>
          <ol>
            <li>Lubricate your fingers with oil or saliva.</li>
            <li>With fingers relaxed, softly and slowly caress the labia several times.</li>
            <li>Using your finger, play around the clitoris slowly and gently. Then continue doing the same with two fingers.</li>
            <li>Place a finger on top of the clitoris and keep it there for about 20 seconds.</li>
            <li>Make circular movements on the clitoris. Use back-and-forth strokes, and with a finger, tap gently. Find the pressure and style of movement right for the woman.</li>
            <li>If she signals that she is getting close to climax, use long strokes to bring the pleasure out of her lower belly to the middle part of her chest. Tap your fingertips gently on the middle of the woman's chest.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax, close your eyes and enjoy.</li>
            <li>Unleash your voice.</li>
            <li>If you start getting close to orgasm, let your partner know so he can direct the pleasure out to your upper body.</li>
          </ol>`,
        additional: `<p>The clitoris is one of the most erogenous zones in the woman’s body. Playing with this area can lead to an outward-directed orgasm that culminates in liberation of sexual arousal akin to popping a champagne cork. The woman can also experience an inward clitoral orgasm where arousal transforms into a sense of pleasure that expands and sweeps across the whole body. The activity on this card allows the man to help the woman direct a clitoral orgasm across her entire body. In this way, a brief and intense clitoral orgasm can become a softer and more prolonged pleasure.</p>
          <p>Playing with such a delicate and sensitive organ as the clitoris and directing the pleasure body-wide can broaden the woman’s orgasmic spectrum. However, overstimulation of the clitoris can actually desensitize the area.</p>
          <p>The man has an opportunity to make the woman’s genital arousal spread in waves across her body and thereby give her new types of pleasure. The man becomes like a conductor who directs the woman’s pleasure through his touch.</p>`,
      },
      ET: {
        title: 'Kliitorinauding',
        description: `<h5>Mees</h5>
          <ol>
            <li>Libesta sõrmed õli või süljega.</li>
            <li>Silita lõdvestunud sõrmedega mõned korrad pehmelt ja aeglaselt häbememokki (pilt a).</li>
            <li>Mängi sõrmega aeglaselt ning õrnalt kliitori ümber. Edasi tee sama kahe sõrmega.</li>
            <li>Aseta sõrm kliitori peale ja hoia seda seal umbes 20 sekundit (pilt b).</li>
            <li>Tee kliitoril pehmelt ringjaid liigutusi, edasi-tagasi silitusi ja näpuga tippimist (pilt b). Leia oma naisele sobiv tugevusaste ja liikumisstiil.</li>
            <li>Kui naine annab märku, et hakkab jõudma orgasmini, siis suuna pikkade silitustega naudingut alakõhust rinna keskosani. Koputa sõrmeotstega õrnalt naise rinna keskele.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sulge silmad ja naudi.</li>
            <li>Luba häälel vallanduda.</li>
            <li>Kui hakkad jõudma orgasmini, siis anna sellest märku, et mees saaks naudingut ülakehale laiali suunata.</li>
          </ol>`,
        additional: `<p>Kliitor on üks erogeensemaid alasid naise kehal. Sellega mängides on võimalik kogeda väljapoole suunatud orgasmi, mis tipneb seksuaalse erutuse vabanemisega ja sarnaneb šampanjakorgi pauguga. Naine võib kogeda ka sissepoole suunatud kliitoriorgasmi, mille puhul erutus muundub üle keha laienevaks ja lainetavaks naudinguks.</p>
          <p>Selle kaardi abil saab mees aidata naisel kliitoriorgasmi üle keha laiali suunata. Seeläbi võib muutuda intensiivne lühiajaline kliitoriorgasm pehmemaks ja pikemaajaliseks kehaliseks naudinguks.</p>
          <p>Õrn ja tundlik kliitoriga tegelemine ja sellest tuleva naudingu kehasse laiali suunamine võib avardada naise orgastilisuse spektrit. Samal ajal kui pidev kliitori ülestimuleerimine võib pärssida tundlikkust.</p>
          <p>Mehel on võimalus naise suguelunditest erutus üle keha lainetama panna ning selle kaudu pakkuda talle uusi naudinguid. Mehest saab justkui dirigent, kes läbi puudutuste suunab naise naudinguid.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'G-spot delight',
        description: `<h5>Man</h5>
          <ol>
            <li>Insert a finger into the vagina.</li>
            <li>Locate the G-spot, which is a bumpy area about 2-6 cm deep.</li>
            <li>Hold your finger gently against the G-spot for about 30 seconds, and imagine how heat is flowing from your finger into the woman's body.</li>
            <li>Press the G-spot for 2 seconds, then take a 2-second break and repeat the cycle at least 10 times. Start gently and increase the pressure gradually.</li>
            <li>Make circular movements around the G-spot for at least 2 minutes.</li>
            <li>Move two fingers in and out, making a beckoning motion, for at least 2 minutes.</li>
            <li>Experiment with different pressures and speeds.</li>
            <li>Be aware that the woman may ejaculate.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Breathe deeply into the lower abdomen and relax.</li>
            <li>If you feel like you need to urinate, breathe even deeper and relax. You likely won't wet the bed, but you may ejaculate a fluid.</li>
          </ol>
          <p>Note: Sheets may get wet!</p>`,
        additional: `<p>The G-spot is a key pleasure center about 2–6 cm inside the anterior wall of the vagina. It has a bumpy texture, like the roof of a mouth. About the size of a coin, it expands when aroused. The area around the G-spot is likewise very sensitive.</p>
          <p>Here the man can be like an explorer, discovering his partner’s treasure chest. When the G-spot is activated, it usually brings on a feeling of needing to urinate, which is a sign that the woman’s body is approaching G-spot orgasm. It can culminate in female ejaculation – a natural and pleasurable event.</p>
          <p>Various emotions can be embedded in the body. G-spot stimulation can release these feelings if the woman feels she is in a safe space. She can start to weep, laugh, shout or become angry. If that should happen, hold her and stay with her until the emotion subsides. It’s important to allow her to experience the emotion and express herself freely without consoling her. When the emotions are released, the body realizes its potential for even deeper pleasure.</p>`,
      },
      ET: {
        title: 'G-punkti nauding',
        description: `<h5>Mees</h5>
          <ol>
            <li>Sisesta sõrm vagiinasse.</li>
            <li>Leia üles G-punkt, mis on krobelisem ala 2–6 cm sügavusel (punane ala pildil).</li>
            <li>Hoia sõrme õrnalt G-punkti vastas umbes 30 sekundit ja kujutle, kuidas soojus siseneb sõrmest naise kehasse.</li>
            <li>Vajuta 2 sekundit G-punkti, pea 2 sekundit pausi ning korda tsüklit vähemalt 10 korda. Alusta õrnalt ning suurenda vajutuse tugevust.</li>
            <li>Tee ringjaid liigutusi G-punkti ümber vähemalt 2 minutit.</li>
            <li>Liiguta kahte sõrme sisse-välja, tehes kutsuvat liigutust vähemalt 2 minutit.</li>
            <li>Katseta eri surve ja tempoga.</li>
            <li>Naine võib hakata eritama armuvedelikku.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Hinga sügavalt alakõhtu ja lõdvestu.</li>
            <li>Kui tekib pissihäda tunne, siis hinga veelgi sügavamalt ja lõdvestu. Tõenäoliselt ei hakka sa pissima, vaid eritama armuvedelikku.</li>
          </ol>
          <p>Oluline: Linad võivad märguda!</p>`,
        additional: `<p>G-punkt on oluline vagiinasisene naudingupunkt, mis asub kõhupoolses seinas umbes 2–6 sentimeetri sügavusel. Selle tekstuur on veidi krobeline nagu suulagi. Tegu on mündisuuruse alaga, mis erutudes paisub. G-punkti ümbrus on samuti väga tundlik.</p>
          <p>Mees saab olla nagu maadeavastaja, kes avab oma naise naudingute laegast. Kui G-punkt aktiveerub, siis tekib tavaliselt pissihäda tunne, mis on märk sellest, et naise keha läheneb G-punkti orgasmile. See võib lõppeda sellega, et naine eritab armuvedelikku – see on loomulik naudinguline protsess.</p>
          <p>Kehasse võivad olla talletunud eri emotsioonid. G-punkti stimulatsiooni käigus võivad tunded avalduda, kui naine tunneb ennast turvaliselt. Ta võib hakata näiteks naerma, nutma, karjuma, minna vihaseks. Kui nii juhtub, tuleb teda hoida ja olla temaga senikaua, kuni emotsioon möödub. Tuleb naisel lubada tunda emotsiooni ja ennast vabalt väljendada ilma teda lohutamata. Kui emotsioonid vabanevad, avaneb kehas potentsiaal veelgi sügavamaid naudinguid kogeda.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'A-spot delight',
        description: `<h5>Man</h5>
          <ol>
            <li>Insert a finger about 7–12 cm into the vagina.</li>
            <li>Keep it there for about 30 seconds, gently against the A-spot, and imagine how the heat of your finger flowing directly through the tip directly into the woman's body.</li>
            <li>Move your finger back and forth and left and right using very gentle and slow movements. Continually increase pressure, keeping the speed slow.</li>
            <li>Insert two fingers. Increase speed and pressure and add a bit of vibration.</li>
            <li>Continuing this, place the palm of your other hand on your partner's belly above where the A-spot is and apply pressure in that direction.</li>
            <li>Take a break, keeping your fingers in place. Breathe deeply a few times and sense the pleasure in your own body.</li>
            <li>Repeat step #4 and #5.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax, close your eyes and enjoy.</li>
            <li>Express your pleasure vocally.</li>
            <li>Let emotions come to the surface, be and then leave.</li>
          </ol>`,
        additional: `<p>The A-spot, short for anterior fornix erogenous area, is one of the relatively unexplored erogenous zones, and stimulation of this area can yield unique pleasure. The pleasure potential of the area may be in a dormant state, which can be reflected in numbness or hypersensitivity. To derive more pleasure from the area, we recommend consistent massage of the A-spot. The woman can do this herself, if her finger is long enough. It is natural for emotions to surface when this area is engaged. If necessary, see the “ABCs of Emotions”.</p>
          <p>The activity on this card allows the man to master specific skills to offer his partner pleasure. Taking a break allows you to focus on the connection between your bodies and take note of the richness of the exquisite sensations. During the pause, the man can direct his focus to what is going on in his own body.</p>
          <p>A-spot massage encourages women to explore and own the full pleasure potential in their body. In addition, it gives partners a chance to be more aware and attentive in pleasure-filled moments.</p>`,
      },
      ET: {
        title: 'A-ala nauding',
        description: `<h5>Mees</h5>
          <ol>
            <li>Sisesta sõrm vagiinasse umbes 7–12 sentimeetri sügavusele (pilt a).</li>
            <li>Hoia sõrme umbes 30 sekundit õrnalt A-ala vastas ja kujutle, kuidas soojus voogab sõrme otsast naise kehasse.</li>
            <li>Liiguta sõrme edasi-tagasi ja paremale-vasakule väga õrnade ning aeglaste liigutustega. Tõsta sujuvalt survet, hoides tempo aeglasena.</li>
            <li>Sisesta kaks sõrme. Tõsta kiirust ja survet ning värista.</li>
            <li>Jätkates tegevust, aseta peopesa kõhule ning avalda survet samale punktile kõhu pealt vastu (pilt b).</li>
            <li>Tee paus, hoides sõrmed paigal. Hinga mõned korrad sügavalt ning tunneta naudingut ka enda kehas.</li>
            <li>Korda 4. ja 5. punkti.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sulge silmad ja naudi.</li>
            <li>Väljenda oma naudingut hääle abil.</li>
            <li>Luba emotsioonidel tulla, olla ja lahkuda.</li>
          </ol>`,
        additional: `<p>A-ala on vähem teadvustatud erogeenne tsoon, mille stimuleerimine võib pakkuda ainulaadset naudingut. Sealt kogetav naudingulisus võib olla uinunud olekus, mis võib väljenduda kas tundetuses või ebameeldivas intensiivsuses. Et selle ala kaudu rohkem naudinguid kogeda, soovitame järjepidevalt A-ala masseerida. Seda võib ka naine ise endale pakkuda, kui sõrm ulatub. On loomulik, kui selle alaga tegeledes avalduvad emotsioonid. Vajadusel vaadake „Emotsioonide ABC-d".</p>
          <p>See kaart võimaldab mehel omandada spetsiifilisi oskusi, et kallimale naudingut pakkuda. Pausi tegemine võimaldab keskenduda teie kehade ühendusele ning märgata peenaistingute küllust. Mees saab pausi ajal suunata tunnetuse enda kehas toimuvale.</p>
          <p>A-ala massaaž julgustab naisi avastama ja omaks võtma oma keha täielikku naudingupotentsiaali. Lisaks annab võimaluse partneritel olla teadlikumad ja tähelepanelikumad naudingulistes hetkedes.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Having a ball',
        description: `<h5>Woman</h5>
          <ol>
            <li>Gently stroke him with your soft hand from the base of his testicles to the tip of his penis</li>
            <li>Hold his testicles in one hand and massage them gently.</li>
            <li>Take one testicle in your hand, then the other testicle, and then finally both of them and gently pull them back and forth.</li>
            <li>Use your fingers to fondle and shake the testicles. Try different angles and levels of pressure.</li>
            <li>If it suits both of you, continue the same activities with your mouth, tongue and lips. Hold his penis in your hand at the same time.</li>
            <li>Be creative and enjoy the process.</li>
          </ol>
          <h5>Man</h5>
          <ol>
            <li>Relax, close your eyes, and enjoy.</li>
            <li>Keep your hands at your side, relax your fingers and palms.</li>
            <li>Release the pleasure with the help of your breath and voice.</li>
          </ol>
          <p>Note: Use of oil is recommended to pleasure shaved testicles.</p>`,
        additional: `<p>The testicles are usually one of the least stimulated erogenous zones, but some well-intentioned (and well-deserved) touch can deliver real pleasure. The balls are very sensitive and delicate, and by giving them more attention, one can broaden their pleasure spectrum. What’s more, by pleasantly caressing the testicles, the space for intimate trust for a man and woman can only be increased.</p>
          <p>Think of the testicles as balls of pleasure that can provide enjoyable, arousing experiences for both partners. Through playing with her partner’s testicles, a woman can also expand her sexual repertoire as well. This card encourages both to understand that the entirety of the man’s body is sensual and capable of feeling pleasure, and not just a penis-centered performance machine.</p>
          <p>Be advised: playing with his testicles can also bring repressed feelings or even pain to the surface. If necessary, refer back to “The ABCs of Emotions.”</p>`,
      },
      ET: {
        title: 'Munadepüha',
        description: `<h5>Naine</h5>
          <ol>
            <li>Silita pehme käega üle munandite kuni peenise tipuni (pilt a).</li>
            <li>Hoia ühe käega hellalt munandeid ja mudi õrnalt.</li>
            <li>Võta alguses üks munand, seejärel teine ning lõpuks mõlemad pihku ning liiguta õrnalt kehast eemale ja tagasi (pilt b).</li>
            <li>Sikuta sõrmedega ja värista munandeid. Proovi eri nurki ja tugevusastmeid (pilt c).</li>
            <li>Kui teile mõlemale sobib, jätka sama tegevust suu, keele ja huultega. Hoia peenist samal ajal peos.</li>
            <li>Ole loominguline ja naudi ise protsessi.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Lõdvestu, sulge silmad ning naudi.</li>
            <li>Hoia käed keha kõrval, lõdvesta sõrmed ja peopesad.</li>
            <li>Väljenda naudingut hingamise ja hääle abil.</li>
          </ol>
          <p>Oluline: Mugavam on naudingut pakkuda raseeritud munadele, kui kasutate õli.</p>`,
        additional: `<p>Munandid on tavaliselt vähem stimuleeritud erogeenne kehaosa, mille teadlik puudutus võib pakkuda omapärast naudingut. Need on väga tundlikud ja õrnad ning sellele piirkonnale tähelepanu osutamine võib laiendada naudinguspektrit. Kui munandeid meeldivalt hellitada, võib see suurendada intiimse usalduse ruumi mehe ja naise vahel.</p>
          <p>Munandid on kui naudingupallid, mis võivad mõlemale pakkuda meeldivaid erutavaid elamusi. Munanditega mängides saab naine laiendada oma naudingu pakkumise repertuaari. See kaart julgustab mõistma, et terve mehe keha on naudinguline ja sensuaalne, mitte vaid peenisekeskne sooritusmasin.</p>
          <p>Munanditega mängimine võib üles tuua naudinguid takistavaid emotsioone või valulikkust. Vajadusel lugege „Emotsioonide ABC-d".</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Spooning and pausing',
        description: `<h5>Man</h5>
          <ol>
            <li>Penetrate the woman in the spooning position for about a minute while massaging her back.</li>
            <li>Stop moving and keep your penis inside her for about a minute.</li>
            <li>During the break, gently stroke your partner from the bottom of her back up. Keep on stroking.</li>
            <li>Penetrate her for a minute more while rubbing her back.</li>
            <li>Take another break while keeping your penis inside her for about a minute.</li>
            <li>Place your hand on the woman's breasts and hold her.</li>
            <li>Relax and breathe deeply. Feel what's happening in both of your bodies.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax, close your eyes, and let the sensations flow freely throughout your body.</li>
            <li>Release your voice and let your body move naturally.</li>
          </ol>`,
        additional: `<p>Massaging the woman’s back during penetration can increase arousal for both of you. The greater the arousal, the deeper and more powerful the pleasures experienced. When you pause, it’s also easier for both of you to get in contact with what’s happening in your bodies. This short pause also allows you to experience a sense of being filled without constant movement, as well as to feel connected without intense stimulation. By being still and paying attention to what’s happening in your body, one allows these already strong sensations to be felt in even greater depth and detail.</p>
          <p>Penetration also allows you to get in touch with a more primal sexuality while the pause allows you to focus on the moment and the sensations. When your sexual arousal subsides, allow it to happen. During these pauses, sexual arousal can transform into a sense of connection and bliss.</p>
          <p>This card reveals that sexuality and loving intimacy are not opposites but can support each other.</p>`,
      },
      ET: {
        title: 'Lusikapoos pausiga',
        description: `<h5>Mees</h5>
          <ol>
            <li>Penetreeri naist umbes minut aega lusikapoosis, samal ajal selga masseerides.</li>
            <li>Tee liikumisest paus ning hoia peenist tema sees umbes minut aega.</li>
            <li>Pausi ajal silita õrnalt naise selga alt üles (pilt a). Korda silitusi.</li>
            <li>Penetreeri umbes minut aega, samal ajal selga masseerides.</li>
            <li>Tee liikumisest paus ning hoia peenis sees umbes minut aega.</li>
            <li>Aseta käsi naise rinnale ja hoia teda kaisus (pilt b).</li>
            <li>Lõdvestu ja hinga sügavalt. Tunneta, mis toimub Sinu ja naise kehas.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sulge silmad ning luba tunnetel kehas vabalt lainetada.</li>
            <li>Lase hääl vabaks ja luba kehal loomulikult liikuda.</li>
          </ol>`,
        additional: `<p>Penetreerimise ajal naise selja masseerimine võib mõlema erutust kasvatada. Mida suurem erutus, seda sügavamaid ja võimsamaid naudinguid võib kogeda. Pausi ajal on lihtsam mõlemal saada kontakti sellega, mis kehas toimub. Paus võimaldab kogeda täidetuse tunnet ilma pideva liikumiseta, tunda ühendust ka ilma intensiivse stimulatsioonita. Kaisus olemine ja keha tunnetamine võimaldab niigi tugevaid kehalisi aistinguid veelgi sügavamalt ja detailsemalt tajuda.</p>
          <p>Penetreerimine aitab luua ühenduse ürgsema seksuaalsusega ning paus lubab keskenduda hetkele ja aistingule. Kui seksuaalne erutus vaibub, siis luba sel juhtuda. Pausi ajal võib seksuaalne erutus muunduda ühenduse ja õndsuse tundeks.</p>
          <p>See kaart õpetab, et seksuaalsus ja armastav lähedus pole vastandid, vaid võivad teineteist toetada.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'On top with added pleasure',
        description: `<h5>Woman</h5>
          <ol>
            <li>Sit on top of your man and let his penis slide deep inside of you.</li>
            <li>Slowly and smoothly move your hips up and down, back and forth.</li>
            <li>Focus on your labia and vagina and enjoy.</li>
            <li>When the man presses his hips against yours, take a break.</li>
          </ol>
          <h5>Man</h5>
          <ol>
            <li>Place a pillow under your head and hips.</li>
            <li>Keep your hips relaxed and motionless.</li>
            <li>When the woman is rocking on top of you, stroke her buttocks. Then use your fingers to massage her labia around your penis with long, smooth strokes.</li>
            <li>Start gently and then experiment with different intensities.</li>
            <li>When you feel that your arousal is surpassing 70%, take a pause, and press the woman's hips firmly against you.</li>
            <li>Pay attention to how the woman's vagina meets your penis in the way she has chosen.</li>
          </ol>
          <p>Note. If needed, use oil or saliva, so that the labia would be moist to the touch.</p>`,
        additional: `<p>When on top, the woman can experiment freely and feel how her partner’s penis moves inside her in different ways and feel which position gives her the greatest pleasure. In this position, she can control the depth, angle, and pace of penetration, according to her preferences. The buttocks, thighs, and labia are all very erogenous zones. Touching them enhances a woman’s pleasure and playing an active role can strengthen a woman’s sexual confidence.</p>
          <p>For his part, the man can regulate his level of arousal by pressing the woman’s hips firmly against his and taking a break if his arousal rises above 70%. This helps prevent ejaculation. The man has the opportunity to learn about ejaculation mechanisms in order to prolong the pleasure. He can also experience the role of the receiver instead of playing a more traditional active role, thereby gaining sexual confidence in the role of the observer.</p>
          <p>This can be an exciting game of submission and domination between a man and a woman, where the partners play both roles.</p>`,
      },
      ET: {
        title: 'Naine peal lisanaudinguga',
        description: `<h5>Naine</h5>
          <ol>
            <li>Ole mehe peal ja libista tema peenis sujuvalt enda sisse.</li>
            <li>Liigu üliaeglaselt ning sujuvalt puusadega üles-alla / ette-taha.</li>
            <li>Hoia tähelepanu häbememokkadel ja vagiinal ning naudi.</li>
            <li>Kui mees surub sind puusadest enda vastu, tee liikumisse paus.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Aseta padi pea ja puusade alla.</li>
            <li>Hoia puusad lõdvestunult paigal.</li>
            <li>Samal ajal kui naine õõtsub sinu peal, silita tema tuharaid. Seejärel hellita sõrmedega sujuvate pikkade liigutustega häbememokki peenise ümber.</li>
            <li>Alusta õrnemast puudutusest ning katseta eri tugevusega.</li>
            <li>Kui tunned, et erutus kerkib üle 70%, tee paus, surudes naist puusadest tugevalt enda vastu.</li>
            <li>Pane tähele, kuidas vagiina naise valitud viisil sinu peenisega kohtub.</li>
          </ol>
          <p>Oluline: Vajadusel kasuta õli või sülge, et häbememokki oleks libe puudutada.</p>`,
        additional: `<p>Naine saab segamatult katsetada ja tunnetada, kuidas peenis eri viisidel tema sees liigub ning mis talle kõige rohkem naudinguid pakub. Naine saab ise kontrollida penetratsiooni sügavust, nurka ja tempot vastavalt oma eelistustele. Tuharad, reied ja häbememokad on väga erogeensed piirkonnad. Nende puudutamine võimendab naise naudinguid. Aktiivne roll võib tugevdada naise seksuaalset enesekindlust.</p>
          <p>Mees reguleerib enda erutuse taset, surudes naist puusadest tugevalt enda vastu ja tehes pausi, juhul kui erutus kerkib üle 70%. See aitab vältida ejakuleerimist. Mehel avaneb võimalus õppida ejakulatsioonimehhanisme tundma, et naudinguid pikendada. Mehel on võimalus kogeda vastuvõtja rolli traditsioonilisema aktiivse asemel ning saada seeläbi seksuaalset enesekindlust vaatleja rollis.</p>
          <p>See võib olla erutav mehe ja naise vaheline alistumise ja domineerimise mäng, kus paarilised etendavad mõlemat rolli.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Boss and assistant',
        description: `<h5>Boss</h5>
          <ol>
            <li>In a confident, respectful, formal, and loving manner, assign a task that will give you physical pleasure.</li>
            <li>If the assistant doesn't perform the task to expectations, then call them to order and give them more detailed instructions.</li>
            <li>If the assistant completes the task in an exemplary manner, acknowledge it.</li>
            <li>If the assistant is unwilling to carry out the task, give them a new one.</li>
          </ol>
          <h5>Assistant</h5>
          <ol>
            <li>Listen attentively and without question to the assignment.</li>
            <li>If the task is clear and acceptable, then ask when you can begin to carry it out.</li>
            <li>Discover within yourself an obedient submissive partner who wishes to carry out the dominant's orders while remaining within their own limits. Try to find pleasure for yourself.</li>
            <li>When the assigned task really doesn't suit you, let the dominant know and ask for another task.</li>
            <li>If you liked your boss's assignment and would like additional tasks, ask for more.</li>
          </ol>`,
        additional: `<p>In role play, you can let your imagination run free and request the kinds of pleasures that you wouldn’t dare to ask for without feeling guilty or ashamed. Whatever your day-to-day roles are, this card allows you to take on both the dominant and submissive roles in a safe environment. In doing so, you can experience something that offers you greater pleasure and excitement. Perhaps both will, in equal measure.</p>
          <p>On the one hand, role-playing can free you from personal responsibility, allowing you to reveal your hidden desires, needs, and wishes, which you may not be able to express in everyday life. On the other hand, it teaches one the importance of consent and communication, which are essential for healthy sexuality.</p>
          <p>This card’s power dynamics can help you understand that sexuality can be complex and multifaceted. This allows one to experience that safe, coordinated, and playful power dynamics can be sexually and emotionally satisfying, while also helping one to associate power relationships with pleasure.</p>`,
      },
      ET: {
        title: 'Ülemus ja alluv',
        description: `<h5>Ülemus</h5>
          <ol>
            <li>Anna enesekindlas, austavas, ametlikus ja armastavas võtmes detailne töökorraldus, mis pakub sulle endale kehalisi naudinguid.</li>
            <li>Kui alluv ei toimi oodatul viisil, siis kutsu teda heatahtlikult korrale, andes täpsemaid juhiseid.</li>
            <li>Kui alluv täidab tööülesandeid eeskujulikult, siis tunnusta teda.</li>
            <li>Kui alluv pole nõus seda tööd tegema, anna talle uus ülesanne.</li>
          </ol>
          <h5>Alluv</h5>
          <ol>
            <li>Kuula tähelepanelikult ja vastu vaidlemata kogu tööülesande sisu.</li>
            <li>Kui ülesande sisu on selge ja vastuvõetav, siis küsi, millal tohib tööga pihta hakata.</li>
            <li>Leia endas sõnakuulelik alluv, kes soovib täita ülemuse töökorraldusi, jäädes enda piiridele kindlaks. Proovi leida nauding iseendale.</li>
            <li>Kui töökorraldus tõesti ei sobi, anna sellest teada ja küsi uut ülesannet.</li>
            <li>Kui sulle ülemuse töökorraldus meeldis ning soovid lisaülesandeid, palu tööd juurde.</li>
          </ol>`,
        additional: `<p>Rollimängus saate fantaasia lendu lasta ning küsida selliseid naudinguid, mida süü ja häbitundeta muidu ei söandaks. Sõltumata igapäevasest rollist võimaldab see kaart läbi mängida nii domineerivat kui alluvat rolli turvalises keskkonnas. Selle käigus saab kogeda, kumb rohkem naudingut ja erutust pakub. Või hoopis mõlemad ühepalju?</p>
          <p>Rollimäng ühelt poolt annab vabaks isikliku vastutuse ning võimaldab tuua nähtavale meie varjatud ihad, vajadused ja soovid, mida võib-olla igapäevaelus ei suuda ega oska väljendada. Teiselt poolt õpetab nõusoleku ja kommunikatsiooni olulisust, mis on eluterve seksuaalsuse puhul oluline.</p>
          <p>Selle kaardiga kaasnev võimudünaamika aitab mõista, et seksuaalsus võib olla kompleksne ja mitmetahuline. Seeläbi on võimalik kogeda, et turvaline, kooskõlastatud ja mänguline võimudünaamika võib nii seksuaalselt kui ka emotsionaalselt rahuldust pakkuda, aidates samal ajal võimusuhteid siduda naudinguga.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Oral sex with eye contact',
        description: `<h5>Woman</h5>
          <ol>
            <li>Kneel in front of the standing man.</li>
            <li>Start off by slowly licking his testicles and penis with your tongue.</li>
            <li>Move on to caressing his penis with your mouth while using your hands to help. Hold the penis with one hand and softly caress his testicles with the other.</li>
            <li>Take a break and look into his eyes while keeping his penis in your mouth.</li>
            <li>Switch up the tempo, move your head at different angles, and be creative with your tongue, lips, and mouth.</li>
            <li>When the man lets you know, pause to delay ejaculation and look him in the eyes.</li>
          </ol>
          <h5>Man</h5>
          <ol>
            <li>Stand up, hands at your sides, relax your buttocks, and observe the woman with soft, loving eyes.</li>
            <li>Forget all your expectations and receive everything that your woman offers you right now.</li>
            <li>When your arousal surpasses 70%, let her know that you need a break.</li>
            <li>During the pause, look into the woman's eyes, relax and experience everything that's happening in your body.</li>
          </ol>`,
        additional: `<p>Eye contact transforms oral sex from a mere physical act into an intimate, mutual experience, where both partners honor each other’s deep masculine and feminine energy.</p>
          <p>Every penis is beautiful and special in its own way. Here, the woman focuses her attention on what it is that makes the man or his equipment admirable. In this way, the man feels accepted. The man can admire the woman, as she has chosen to give him pleasure and to accept him just as he is.</p>
          <p>When both partners are willing to do this exercise sincerely, and to let go of expectations and habits, a deeper connection can be formed. This changes the perception that one’s partner is just a sex object who is there to provide only pleasure.</p>
          <p>If a woman does not want to perform oral sex, she can caress and fondle the penis with her hands while looking into the man’s eyes. If the woman is ready and willing, she will gradually begin to touch the penis with her mouth and tongue.</p>`,
      },
      ET: {
        title: 'Suuseks silma vaadates',
        description: `<h5>Naine</h5>
          <ol>
            <li>Põlvita seisva mehe ees.</li>
            <li>Alusta aegluubis keelega munade ja peenise limpsimist (pilt a).</li>
            <li>Liigu peenise hellitamiseni suuga ja võta käed appi. Ühega hoiad peenist, teisega hellalt mehe munandeid.</li>
            <li>Tee vahepeal paus ja vaata mehele silma, hoides peenist suus (pilt b).</li>
            <li>Vaheta tempot, liiguta pead eri nurkade all ja ole loominguline, kasutades keelt, huuli ja suulage.</li>
            <li>Kui mees annab märku, siis tee paus, et ejakulatsioon edasi lükata, ja vaata talle silma.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Seisa püsti, hoia käed kõrval, lõdvesta tuharad ja vaatle naist armastava pehme pilguga.</li>
            <li>Unusta kõik ootused ning võta vastu see, mida naine sulle parasjagu pakub.</li>
            <li>Kui sinu erutus ületab 70%, anna märku, et vajad pausi.</li>
            <li>Pausi ajal vaata naisele silma, lõdvestu ja koge seda, mis kehas toimub.</li>
          </ol>`,
        additional: `<p>Silma vaatamine muudab suuseksi mitte ainult füüsiliseks, vaid sügavalt intiimseks vastastikuseks kogemuseks, kus mõlemad austavad teineteise sügavamat mehelikku ja naiselikku olemust.</p>
          <p>Iga peenis on omal moel ilus ja eriline. Naine koondab oma tähelepanu sellele, mis on mehe või tema varustuse puhul imetlusväärne. Nii tunneb mees, et ta on aktsepteeritud. Mees saab naist imetleda selle eest, et kaaslane on valinud talle naudingut pakkuda ja võtab meest sellisena, nagu ta on.</p>
          <p>Kui mõlemad on valmis seda harjutust tegema siiralt, lastes ootustest ja harjumuspärastest mustritest lahti, võib tekkida sügavam ühendus. See muudab arusaama, et kaaslane on seksobjekt, kes pakub vaid naudingut.</p>
          <p>Kui naine ei soovi suuseksi teha, võib ta peenist kätega silitada ja hellitada, samal ajal mehele silma vaadates. Kui naine on valmis ja soovib, siis alustab veidihaaval peenise suu ja keelega puudutamist.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Together with yourself',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Close your eyes and focus attention on yourself.</li>
            <li>Touch yourself in a way that you find pleasurable. Find what turns you on.</li>
            <li>Keep your eyes closed for about 2 minutes, focus on your own sensation and pleasure.</li>
            <li>Open your eyes and look at your partner, while pleasuring yourself.</li>
            <li>Experience what you feel when you are both pleasuring yourself simultaneously.</li>
          </ol>`,
        additional: `<p>This card gives you a chance to partake in private pleasure in your partner’s presence. Sexual pleasure ramps up in a shared space. Arousal increases depending on whether eyes are open or shut.</p>
          <p>Taboos tend to get in the way of sexual self-expression and satisfaction of your actual needs. Due to cultural and societal tenets, seeing gratify themselves can kindle feelings of shame. But let it out: let it come, exist and go. That will allow you to free yourself of shame and feel deeper arousal and pleasure.</p>
          <p>Expressing pleasure to a partner boosts your sexual self-confidence. It’s an activity that allows you to create deep trust and acceptance. If everyone is responsible for their own pleasure, it can result in an expectation-free space that may offer a sense of freedom for both partners.</p>`,
      },
      ET: {
        title: 'Koos iseendaga',
        description: `<h5>Mõlemad</h5>
          <ol>
            <li>Sulge silmad ja too tähelepanu iseendale.</li>
            <li>Puuduta iseennast selliselt, et Sul oleks meeldiv ja nauditav. Leia, mis Sulle erutust pakub.</li>
            <li>Hoia silmad kinni umbes 2 minutit, keskendu iseenda tunnetusele ja naudingule.</li>
            <li>Ava silmad ning vaata kaaslast, samal ajal pakkudes endale naudingut.</li>
            <li>Koge tunnet, mis sinus tekib, kui samal ajal kumbki iseennast naudite.</li>
          </ol>`,
        additional: `<p>See kaart annab võimaluse jagada privaatset naudingut kaaslase juuresolekul. Seksuaalne nauding võimendub ühises ruumis. Erutus kasvab erinevalt, sõltuvalt sellest kas silmad on avatud või kinni.</p>
          <p>Tabud kipuvad piirama seksuaalset eneseväljendust ja oma tegelike vajaduste rahuldamist. Kultuurilistest ja ühiskondlikest uskumustest tingituna võib eneserahuldamine teiste nähes tekitada häbitunnet. Lubage sellel tulla, olla ja minna. Seeläbi võib häbist vabaneda ning tunda sügavamat erutust ja naudingut.</p>
          <p>Oma naudingu väljendamine kaaslasele tugevdab seksuaalset enesekindlust. Selline tegevus võimaldab luua sügavat usaldust ja aktsepteerimist. Kui igaüks hoolitseb oma naudingute eest, võib tekkida ootustevaba ruum, mis võib pakkuda mõlemale naudingulist vabadust.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Borrow the man\'s penis',
        description: `<h5>Woman</h5>
          <ol>
            <li>Ask the man: "Can I borrow your flaccid or hard penis and give myself pleasure with it?"</li>
            <li>If he consents, use the penis to discover what arouses you and gives you pleasure.</li>
            <li>If desired, lubricate the penis with oil or saliva.</li>
            <li>If you decide you want to feel the penis in your vagina, insert it in a way that feels good to you.</li>
            <li>Use the penis to focus your own pleasure.</li>
          </ol>
          <h5>Man</h5>
          <ol>
            <li>Respond honestly to the woman's request.</li>
            <li>If the answer is "yes", then relax and let the woman use the penis as she desires.</li>
            <li>Be passive yet also aware of what is going on in your body.</li>
            <li>If you feel that your arousal level is passing 70%, indicate to the woman that you need a break.</li>
          </ol>`,
        additional: `<p>For the most part, the man controls his own penis, but now it’s the woman’s turn to do as she likes. Borrowing the penis gives her a chance to experiment with the possible uses of a flaccid or hard penis, discover pleasurable areas of her own body and realize her fantasies. Having the lead role may give the woman a sense of security and responsibility for her own wellbeing.</p>
          <p>The male partner hands over control to his partner to experience what it is like to do nothing, allowing the woman to use the penis as she desires. The woman can value the man’s body as an instrument to give herself pleasure.</p>
          <p>Borrowing the penis helps break out of traditional gender roles where the man is the “top” and the woman is the “bottom”.</p>`,
      },
      ET: {
        title: 'Laena mehelt peenist',
        description: `<h5>Naine</h5>
          <ol>
            <li>Küsi mehelt: "Kas ma võin Sinu pehmet või kõva peenist laenata ja sellega endale naudingut pakkuda?"</li>
            <li>Kui ta on sellega nõus, siis kasuta peenist selleks, et avastada, mis Sulle praegu erutust ja naudingut pakub.</li>
            <li>Soovi korral määri peenis õli või süljega kokku.</li>
            <li>Kui tekib tunne, et soovid peenist oma vagiinasse, siis sisesta see endale meeldival moel.</li>
            <li>Kasuta peenist, keskendudes enda naudingutele.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Vasta naise palvele ausalt.</li>
            <li>Kui vastus on "jah", siis lõdvestu ning luba naisel oma peenist kasutada nii, nagu ta soovib.</li>
            <li>Ole passiivne, samal ajal tunnetades kehas toimuvat.</li>
            <li>Kui tunned, et sinu erutus kasvab üle 70%, anna naisele märku, et tuleks teha paus.</li>
          </ol>`,
        additional: `<p>Enamjaolt juhib peenisekasutust mees, kuid nüüd on võimalus naisel sellega endale meelepäraselt mängida. Peenise laenamine annab naisele võimaluse vabalt katsetada, mida saab pehme või kõva peenisega teha, seeläbi avastada enda keha naudingulisi alasid ja viia oma fantaasiaid ellu. Juhirollis võib naisel tekkida turvatunne ning vastutus iseenda heaolu eest.</p>
          <p>Mees annab juhtimise kaaslasele üle, et seeläbi kogeda, mis tunne on mitte midagi teha, lubades naisel kasutada peenist tema soovide järgi. Naisel on võimalus väärtustada mehe keha kui naudinguvahendit, et endale mõnu pakkuda. Peenise laenamine aitab murda välja traditsioonilistest rollidest, kus mees on aktiivne ja naine passiivne.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Lovemaking in the mirror',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Adopt a position in front of the mirror where both partners can see the penis slowly slide in and out.</li>
            <li>Looking in the mirror, focus on what turns you on the most.</li>
            <li>Take turns enjoying arousal, eyes open and shut. Feel the penis move in and out.</li>
            <li>Every so often, establish eye contact with your and your partner's reflection in the mirror.</li>
          </ol>`,
        additional: `<p>Lovemaking by the mirror allows you to see yourself and your partner through the eyes of a bystander. It’s like a live stream seen as both participant and observer, which can be very exciting.</p>
          <p>More than one mirror will yield an even more interesting perspective, since you see different angles.</p>
          <p>If you find yourself judging yourself or each other, get back in the observer role and direct your attention to the parts of the body that arouse you to increase pleasure. That makes it easier for you to accept both of your bodies.</p>
          <p>This exercise can help you understand how you see and perceive yourselves sexually and how you might appear to your partner.</p>`,
      },
      ET: {
        title: 'Peegli ees armatsemine',
        description: `<h5>Mõlemad</h5>
          <ol>
            <li>Leidke peegli ees selline asend, kus mõlemad näevad, kuidas peenis aeglaselt sisse ja välja liigub.</li>
            <li>Vaadake peeglist just seda, mis teile kõige erutavam ja nauditavam on.</li>
            <li>Nautige erutust vaheldumisi, silmad avatud ja suletud. Tunnetage, kuidas peenis sisse ja välja liigub.</li>
            <li>Looge vahepeal enda ja kaaslase peegeldusega silmside.</li>
          </ol>`,
        additional: `<p>Peegli ees armatsemine annab võimaluse näha ennast ja paarilist kõrvaltvaataja pilgu läbi. Saad vaadata nagu otseülekannet korraga nii osaleja kui ka vaatlejana, mis võib olla väga erutav.</p>
          <p>Peeglist võid ennast ja kaaslast näha teise nurga alt. Mitu peeglit annab veel huvitama perspektiivi, kuna nii näeb end eri nurkade alt.</p>
          <p>Kui märkate, et annate mõttes hinnanguid enda ja kaaslase kehale, siis võtke vaatleja roll ja suunake tähelepanu enda jaoks erutavatele kehaosadele, et naudingut kasvatada.</p>
          <p>Seeläbi on lihtsam enda ja kaaslase keha aktsepteerida. Peegli ees armatsemine võib aidata mõista, kuidas te näete ja tajute iseennast seksuaalselt ning kuidas te oma paarilisele paista võite.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Figure-eights with the hips',
        description: `<h5>Man</h5>
          <ol>
            <li>For the first 30 seconds, keep your eyes closed and concentrate on the penis.</li>
            <li>Make the following movements inside the vagina with your penis: • move the hips from side to side, • make circular movements with the hips, • make figures of eight with the hips.</li>
            <li>Perform these movements very gently, at a slow pace, keeping amplitude shallow.</li>
            <li>If the woman indicates she needs a break, take one.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Relax, close your eyes and breathe.</li>
            <li>Focus on the exquisite sensations you feel in your vagina.</li>
            <li>If you feel discomfort, signal that you need a break.</li>
          </ol>`,
        additional: `<p>Figure-eight movements stimulate different areas of the vagina, including the G-spot and A-spot. That can unlock pleasures that often are unattainable by ordinary in-and-out penetration. The varied, wave-like stimulation prolongs pleasure and can lead to more intense orgasms, increasing consciousness of the sensations and reactions in the pelvic area.</p>
          <p>For the man, hip play can increase mobility and creates a good basis for feeling arousal above the genitals.</p>
          <p>Hip play can also produce uncomfortable sensations in the woman’s vagina. In this case, take a break, keep the penis still and allow the woman’s feelings to surface, exist and pass.</p>
          <p>Consciously shaping your movements turns lovemaking from a mechanical act to a spontaneous and creative form of self-expression.</p>`,
      },
      ET: {
        title: 'Puusakaheksad',
        description: `<h5>Mees</h5>
          <ol>
            <li>Esimesed 30 sekundit hoia silmad suletud ning keskendu peenisele.</li>
            <li>Tee peenisega järgnevaid liigutusi vagiina sees: liiguta puusi küljelt küljele; tee puusadega ringjaid liigutusi; tee puusakaheksaid.</li>
            <li>Tee neid liigutusi väga õrnalt, aeglases tempos ning väikese amplituudiga.</li>
            <li>Kui naine annab märku, et vajab pausi, siis tee liikumisest paus.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sulge silmad ning hinga.</li>
            <li>Keskendu õrnadele aistingutele, mida vagiinas tunned.</li>
            <li>Kui tunned ebamugavust, anna märku, et soovid pausi.</li>
          </ol>`,
        additional: `<p>Kaheksakujulised liigutused stimuleerivad erinevaid vagiina piirkondi, sealhulgas G- ja A-punkti. Sellisel moel võivad avalduda naudingud, mis tavapärase edasi-tagasi penetratsiooniga jäävad kättesaamatuks. Vahelduv stimulatsioon pikendab naudingut ja võib viia intensiivsemate orgasmideni. Seeläbi võib suureneda teadlikkus vaagnapiirkonna aistingutest ja reaktsioonidest.</p>
          <p>Mehel aitab puusadega mängimine liikuvust suurendada ning loob hea pinnase seksuaalse erutuse tundmiseks suguelunditest ülalpool.</p>
          <p>Puusade mäng võib esile kutsuda ka ebamugavaid aistinguid naise vagiinas. Sellisel juhul on hea mehel teha paus, hoida peenist liikumatult sees ning lubada naise tunnetel tulla, olla ja minna.</p>
          <p>Liigutuste teadlik kujundamine muudab armatsemise mehaanilisest aktist spontaanseks ja loovaks eneseväljenduseks.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Teasing with the penis',
        description: `<h5>Man</h5>
          <ol>
            <li>Oil the penis.</li>
            <li>Hold the penis in your hand and stroke the woman's vulva.</li>
            <li>Using delicate, smooth movement insert the tip of the penis between the folds of the labia, moving it up and down.</li>
            <li>Make circles and other movements with a light touch around the vaginal opening.</li>
            <li>Slowly, and just a few times, insert the head of the penis in the vaginal opening, hold it there for a few seconds and then withdraw.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Keep your attention on the point where the penis meets your body.</li>
          </ol>`,
        additional: `<p>Gently toying with the vulva and vagina can conjure up exquisite sensations that stronger stimulation might not produce, making your connection to your partner deeper and more meaningful.</p>
          <p>The man can offer their partner delicate pleasure with his penis, while experiencing it themselves. Strong stimulation can also be good, but the nature of these techniques varies. During gentle stimulation, the man uses his penis as a sensitive part of the body, not just as a penetration instrument.</p>
          <p>Direct stimulation of the clitoris can be left out of this exercise, since intensity can overpower more delicate, deeper levels of pleasure. Touching the labia can also result in subtle stimulation of the clitoris. This type of sex play can result in many types of orgasm, including vaginal opening, U-point (named after the urethra), G-spot, clitoral and combined orgasm.</p>
          <p>This practice encourages partners to slow down and enjoy the process, not rush toward penetration and orgasm.</p>`,
      },
      ET: {
        title: 'Peenisega õrritamine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Tee peenis õliseks.</li>
            <li>Hoia peenist käes ja silita naise häbememokki.</li>
            <li>Aseta peenis õrnade ja sujuvate liigutusega häbememokkade vahele, liigutades seda üles-alla.</li>
            <li>Tee ringjaid ja õrna puudutusega liigutusi naise vagiina ava juures.</li>
            <li>Sisesta aeglaselt mõned korrad ainult peenise pea vagiina avasse, hoia seal paar sekundit ja tõmba uuesti välja.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Hoia tähelepanu peenise ja sinu keha kokkupuutepunktil.</li>
            <li>Lõdvestu, sulge silmad ja naudi.</li>
          </ol>`,
        additional: `<p>Häbememokkade ja vagiina avaga õrn mängimine võib äratada peenemad aistingud, mida tugevamal stimulatsioonil ei pruugi kogeda. Seeläbi võib ühendus kaaslasega muutuda sügavamaks ja tähenduslikumaks.</p>
          <p>Mees saab pakkuda naisele oma peenisega õrna naudingut ja samal ajal ise seda kogeda. Tugev stimulatsioon on ka hea, kuid nende võtete iseloom erineb. Õrna stimulatsiooni ajal kasutab mees peenist kui tundlikku kehaosa, mitte ainult kui penetratsioonivahendit.</p>
          <p>Kliitori otsene stimuleerimine tuleb jätta mängust välja, sest selle intensiivsus võib jätta varju õrnemad ning sügavamad naudingukihid. Häbememokkade puudutamise kaudu toimub ka kliitori õrn stimuleerimine. Sellisel moel õrritamine võib tuua kaasa vagiina ava, U-punkti (pissimisava), G-punkti, kliitori- või kombineeritud orgasmi.</p>
          <p>See praktika julgustab aeglustama ja nautima protsessi, mitte kiirustama penetratsiooni ja orgasmini.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Hitting the G-spot',
        description: `<h5>Woman</h5>
          <ol>
            <li>Sit in the man's lap and insert his penis in your vagina.</li>
            <li>Fluidly move your hips back and forth, from side to side, seeing what type of movement stimulates the G-spot.</li>
            <li>Also try lying on your back, legs on the man's shoulders, penis in the vagina. Move your hips up and down, side to side, making circular motions. Find the movements that are right for you.</li>
            <li>Focus on your physical pleasure.</li>
          </ol>
          <h5>Man</h5>
          <ol>
            <li>Lie on your back, with a pillow under your hips.</li>
            <li>Keep your hips relaxed and motionless.</li>
            <li>Let the woman insert your penis in her vagina to stimulate her G-spot.</li>
            <li>If she wants to change positions, kneel and place the woman's legs on your shoulders.</li>
            <li>Allow her to find a suitable speed and intensity for amplifying your pleasure.</li>
            <li>If you find your arousal level is passing 70%, indicate to the woman that it's time to take a break.</li>
          </ol>`,
        additional: `<p>A woman’s G-spot is a key pleasure point located in the anterior wall of the vagina, about 2–6 centimeters inside. The woman takes the initiative here and experiments at different speeds to help explore these areas. These positions are highly likely to engage the G-spot. It’s advisable to try out and explore different positions and techniques.</p>
          <p>Other female pleasure centers can also be stimulated in this manner. This type of play can result in many different types of orgasms: G-spot, A-spot, clitoral, cervical or combination orgasms.</p>
          <p>A feeling of having to urinate indicates that the G-spot is active. If the woman is relaxed, the phenomenon called female ejaculation is possible. It is recommended to spread a towel on the bed.</p>
          <p>This exercise allows the woman to discover the pleasure points in her vagina, and propping up the rear end on pillows allows better access to the G-spot.</p>`,
      },
      ET: {
        title: 'G-punkt peenisega',
        description: `<h5>Naine</h5>
          <ol>
            <li>Istu mehe peale ning libista peenis enda sisse.</li>
            <li>Kõiguta puusi sujuvalt edasi-tagasi, küljelt küljele, katsetades eri nurki, leides selline liikumislaad, mis stimuleerib G-punkti (pilt a).</li>
            <li>Proovi ka sellist poosi, et oled selili, sääred mehe õlgadel, peenis vagiina sees (pilt b). Liiguta puusi üles-alla, küljelt küljele, tee ringjaid liigutusi. Leia endale nauditav liikumisviis.</li>
            <li>Keskendu enda kehalisele naudingule.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Ole selili, asetades padi puusade alla.</li>
            <li>Luba naisel peenis vagiinasse lükata ning avastada sellega enda G-punkti (pilt a).</li>
            <li>Kui naine soovib poosi muuta, siis tule põlvili ja aseta naise sääred oma õlgadele (pilt b).</li>
            <li>Luba naisel leida sobiv tempo ja intensiivsus ning seeläbi võimendada enda naudinguid.</li>
            <li>Kui tunned, et sinu erutus kasvab üle 70%, anna naisele märku, aeg on teha paus.</li>
          </ol>`,
        additional: `<p>Naise G-punkt on oluline naudingupunkt, mis asub vagiina kõhupoolses osas umbes 2–6 sentimeetri sügavusel. Naine võtab ise initsiatiivi ning katsetab eri tempot, mis aitab tal avastada enda vagiinas asuvaid naudingualasid. Need poosid võimaldavad suure tõenäosusega G-punkti masseerida. Iga naise vagiina anatoomia erineb. Soovituslik on katsetada ja avastada endale sobivad poosid ja tehnikad.</p>
          <p>Naisel võivad stimuleeritud saada ka teised naudingualad. Sellisel moel mängimine võib tuua kaasa G-punkti, A-ala, kliitori-, emakakaela- või kombineeritud orgasmi.</p>
          <p>Pissihäda tunne annab märku sellest, et G-punkt on aktiivne. Sel juhul tuleb püüda lõdvestuda ning lubada armuvedelikul (naise ejakulatsioon) voolata. Soovitatav on laotada voodile rätik.</p>
          <p>Mees lubab selle tegevuse käigus naisel avastada enda vagiinas asuvaid naudingualasid. Padi tuharate all ning tõstetud keha võimaldab peenise paremat ligipääsu G-punktile.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Pause the passion',
        description: `<h5>Man</h5>
          <ol>
            <li>The woman is on top for this exercise.</li>
            <li>After about 2 minutes of intercourse (unless the man indicates he needs a pause earlier), pause your movement for about 30 seconds.</li>
            <li>During the pause, relax your body and jaw and breathe in deeply into your lower abdomen. Try to breathe out with a natural soft voice.</li>
            <li>The first time you take a pause, concentrate on feeling the vagina around your penis.</li>
            <li>During the second pause, keep your attention focused on the center of your chest.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>The man is on the bottom for this exercise.</li>
            <li>After about 2 minutes of intercourse (unless the man indicates he needs a pause earlier), pause your movement for about 30 seconds.</li>
            <li>During the pause, relax and concentrate on feeling the vagina around his penis.</li>
            <li>Resume movement for about 2 minutes, in the way that is most pleasurable for you.</li>
            <li>Take another pause. Place the hands on the man's chest and keep your attention focused on your heart area.</li>
          </ol>`,
        additional: `<p>As we know, sexual intercourse is mostly an active pursuit. A pause allows you to experience what sorts of feelings arise when movement ceases. Maybe you will feel a very specific sensation in your sex organs and the rest of your body. The more aroused you were before the pause, the more intense the tremor or goose bumps. To access more multifaceted levels of pleasure, we recommend relaxing the body and jaw. Breathe deeply into your lower body and exhale with a soft moan.</p>
          <p>Consciously taking a break during lovemaking makes you more aware of your body’s sensations, promoting total presence and awareness of each other. It is conducive to feeling as if both partners are becoming one.</p>
          <p>Balancing the conventional activity-centered aspect of sexuality, a pause opens a new level – being in the moment.</p>`,
      },
      ET: {
        title: 'Paus armatsemise ajal',
        description: `<h5>Mees</h5>
          <ol>
            <li>Armatsege selliselt, et naine on sinu peal.</li>
            <li>Umbes 2 minuti pärast teeb naine liikumises pausi. Kui su erutus kasvab varem üle 70%, siis anna märku, et soovid pausi.</li>
            <li>Pausi ajal lõdvesta keha ja lõug ning hinga sügavalt avatud suu kaudu alakõhtu. Proovi loomuliku pehme häälega välja hingata.</li>
            <li>Esimesel pausil tunneta, kuidas vagiina ümbritseb peenist.</li>
            <li>Teise pausi ajal hoia tähelepanu oma rinna keskel.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Armatsege selliselt, et oled mehe peal.</li>
            <li>Umbes 2 minuti pärast pea pool minutit pausi. Juhul kui mees annab varem märku, siis tee varem paus.</li>
            <li>Pausi ajal lõdvestu ning tunneta, kuidas vagiina ümbritseb peenist.</li>
            <li>Jätka liikumist umbes 2 minutit sulle meeldival viisil.</li>
            <li>Tee uuesti paus. Aseta käed mehe rinnale ning hoia tähelepanu enda südamepiirkonnas.</li>
          </ol>`,
        additional: `<p>Seksuaalvahekord on enamasti aktiivne tegevus. Paus annab võimaluse kogeda seda, mis tunded avalduvad, kui liikumine peatub. Võib tekkida detailne tunnetus oma suguelundites ja ülejäänud kehas. Mida suurem erutus enne pausi, seda intensiivsemalt on tunda näiteks värinat, surinat, kananahka. Et pääseda mitmekülgsematele naudingutasanditele, on soovituslik keha ja lõug lõdvestada, hingata sügavalt alakõhtu ning proovida pehmelt häälega välja hingata.</p>
          <p>Teadlik paus armatsemise ajal suurendab teadlikkust oma keha aistingutest. See soodustab täielikku kohalolu ja teineteise tajumist. Seeläbi võib tekkida tunne, nagu paarilised sulanduksid üheks.</p>
          <p>Tasakaaluks tavapäraselt tegevusele keskendunud seksuaalsusele avab paus uue tasandi – hetkes olemise.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'A-spot with penis',
        description: `<h5>Woman</h5>
          <ol>
            <li>Start by lying on your back, hips slightly up, in your partner's lap, penis inside you. Adjust your position so that you can feel your A-spot, which is about 7-12 cm inside the front of the vagina.</li>
            <li>Flip over so that you're lying on your stomach with the man on top of you and move your hips back and forth and up and down. Find what gives you pleasure and amplify it.</li>
            <li>Focus only on physical pleasure.</li>
            <li>Take a break in your movement if the man signals that he is getting close.</li>
          </ol>
          <h5>Man</h5>
          <ol>
            <li>Sit on your rear end, legs outstretched. The woman will be sitting in your lap for this exercise, your penis inside of her.</li>
            <li>Change your position so your knees are down, support yourself on outstretched arms and be poised above the woman so she has enough space to move.</li>
            <li>Let the woman amplify her pleasure without you intervening too much with your own movements.</li>
            <li>If you estimate that your arousal level is more than 70%, indicate to the woman that you need to hold off.</li>
          </ol>`,
        additional: `<p>Lovemaking in poses like this one helps discover areas of the vagina that often undeservedly are overlooked. It also lets the woman take control to find the pleasure zones inside her vagina. These poses allow for stimulation of the anterior fornix erogenous zone, which is located about 7-12 cm inside the vagina on the abdominal side.</p>
          <p>Other female pleasure points can also be stimulated in the course of A-spot stimulation – with potential for a G-spot orgasm, cervical orgasm or combination orgasm.</p>
          <p>The male partner can allow the woman to the pleasure zones inside her vagina.</p>`,
      },
      ET: {
        title: 'A-ala peenisega',
        description: `<h5>Naine</h5>
          <ol>
            <li>Alusta nii, et oled selili, puusad veidi üleval mehe süles, peenis sinu sees. Liiguta ennast selliselt, et tunnetada A-ala, mis asub umbes 7–12 sentimeetri sügavusel vagiina kõhupoolses osas (pilt a).</li>
            <li>Muuda poosi nii, et oled kõhuli, mees sinu kohal, ning liiguta puusi edasi-tagasi ja üles-alla (pilt b). Leia endale naudingut pakkuv ja võimenda seda.</li>
            <li>Keskendu ainult enda kehalisele naudingule.</li>
            <li>Tee liikumises paus, kui mees sellest märku annab.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Istu tagumikul, jalad välja sirutatult. Naine liigutab end sinu süles, peenis sees ja pikali olles (pilt a).</li>
            <li>Muuda poosi nii, et põlved on maas, toetu sirgetele kätele ning ole naise kohal nii, et jätad talle liikumiseks vaba ruumi (pilt b).</li>
            <li>Luba naisel võimendada naudinguid, ilma et sa liialt sekkuks oma liikumisega.</li>
            <li>Kui tunned, et sinu erutus kasvab üle 70%, anna naisele märku, et soovid pausi.</li>
          </ol>`,
        additional: `<p>Sellistes poosides armatsemine aitab avastada vagiina piirkondi, millele tavapäraselt nii palju tähelepanu ei pöörata. Naine saab haarata ohjad, et leida oma vagiinas naudingualad. Need poosid võimaldavad masseerida A-ala, mis asub 7–12 sentimeetri sügavusel kõhupoolses vagiina osas.</p>
          <p>Naisel võivad stimuleeritud saada ka teised naudingualad. Sellisel moel mängimine võib A-ala orgasmi kõrval tuua ka G-punkti, emakakaela- või kombineeritud orgasmi.</p>
          <p>Mees saab lubada naisel avastada vagiina siseseid naudingualasid.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: 'Deep connection',
        description: `<h5>Man</h5>
          <ol>
            <li>Slowly enter the vagina as deeply as the woman finds pleasurable.</li>
            <li>Pull the penis about 2 cm out, ever so slowly so that most of the penis is still in the vagina and then thrust the penis in deeply.</li>
            <li>From time to time, take breaks to focus on what your body is feeling.</li>
            <li>If the woman indicates that she is feeling discomfort, reduce the pressure and depth of thrusting.</li>
          </ol>
          <h5>Woman</h5>
          <ol>
            <li>Breathe deeply into your lower abdomen and relax the vaginal muscles.</li>
            <li>Focus on the contact between penis and vagina and the powerful sensations.</li>
            <li>If you feel discomfort in your body, indicate to your partner that he should reduce the pressure and depth of his thrusting.</li>
          </ol>`,
        additional: `<p>A woman’s deeper pleasure centers take time and massage in order to open and yield to pleasure. Rapid deep penetration with the penis may be pleasurable for some women, uncomfortable for others. Slow and sensitive penetration helps the woman experience pleasure through relaxation. If the activity is enjoyable and the female partner is aroused and wet, the male partner can gradually increase the intensity of the movement.</p>
          <p>A position where the woman brings up her knees to her chest allows the penis to penetrate deeper and meet the cervix. A cervical orgasm happens when the woman is fully relaxed and in a yielding position. If powerful emotions surface, allow them to come up, exist and pass.</p>
          <p>Contact between the cervix and the penis can foster a deeper physical and emotional connection and a feeling of closeness and fullness. If both partners are relaxed and keep their attention on the contact between the penis and the vagina, they can experience a loving feeling in the heart.</p>
          <p>A deep connection allows the partners to experience sexuality as a sacred encounter, not just a physical act.</p>`,
      },
      ET: {
        title: 'Sügav ühendus',
        description: `<h5>Mees</h5>
          <ol>
            <li>Vii oma peenis aeglaselt vagiinasse nii sügavale, kui naisele sobib.</li>
            <li>Liiguta peenist aegluubis 2 cm väljapoole, nii et suurem osa peenisest jääb vagiinasse, ja seejärel vii peenis uuesti sügavale.</li>
            <li>Tee aeg-ajalt liikumises pause, et kogeda kehas toimuvat.</li>
            <li>Kui naine annab märku, et on ebamugav, vähenda peenise survet ja sügavust.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Hinga sügavalt alakõhtu ja lõdvesta vagiinalihased.</li>
            <li>Keskendu peenise ja vagiina kokkupuutele ning tekkivatele aistingutele.</li>
            <li>Kui tunned kehas ebamugavust, siis anna mehele märku, et ta vähendaks survet ja sügavust.</li>
          </ol>`,
        additional: `<p>Naise sügavamad naudingupunktid vajavad naudingutele avanemiseks aega ja masseerimist. Kiire penetratsioon, kus peenis liigub sügavale sisse ja välja, võib mõnel naisel tekitada naudingut, teisel aga ebamugavust. Mehe aeglane ja tundlik armatsemine aitab naisel kogeda naudingut läbi lõdvestumise. Kui naine naudib ning on erutunud ja märg, siis mees võib vähehaaval liikumise intensiivsust tõsta.</p>
          <p>Kui naine kõverdab jalad rinnale, siis saab peenis sügavamale siseneda ning kohtuda emakakaelaga. Emakakaelaorgasm saab avalduda, kui naine on lõdvestunud ning lubavas olekus. Kui avalduvad emotsioonid, siis lubage neil tulla, olla ja minna.</p>
          <p>Kui emakakael ja peenise pea kohtuvad, siis võib tekkida sügavam kehaline ja emotsionaalne ühendus ning läheduse ja täidetuse tunne. Kui mõlemad lõdvestuvad ja hoiavad tähelepanu peenise ja vagiina kokkupuutel, siis võib südames tekkida armastustunne.</p>
          <p>Sügav ühendus annab võimaluse kogeda seksuaalsust kui püha kohtumise viisi, mitte lihtsalt füüsilist akti.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
    translations: {
      EN: {
        title: '69',
        description: `<h5>Both partners</h5>
          <ol>
            <li>Find a comfortable position lying on your side, with your head supported on your partner's thigh.</li>
            <li>Take time to look at each other's genitals with a loving gaze.</li>
            <li>Bring your lips closer and breathe hot air on your partner's genitals.</li>
            <li>Slowly, lavish attention with your mouth on your partner's sex organs in a way that you most enjoy; for example kiss or lick gently.</li>
            <li>If desired, caress your partner's body slowly and tenderly.</li>
            <li>Take turns taking 30-second pauses to admire your partner's genitals. Experience what it feels like for a desirable partner to give you pleasure at the same time.</li>
          </ol>`,
        additional: `<p>69 is a position where both partners can give and receive at the same time. Mature and conscious sexuality is a must for both partners to be able to derive full pleasure.</p>
          <p>A 69 is a very intimate coupling position. Both partners are exposed, open and vulnerable. Always treat your partner and their genitals with respect and love. If one partner is administering pleasure and the other is receiving in awe and admiration, this can transport you to a state of blissful connection.</p>
          <p>A sort of wordless partnership can develop during this activity where both partners have a harmonious intuitive sense whether to receive, admire or give pleasure. This will enhance intimacy, trust and sense of safety.</p>
          <p>When bodies are moving in an elegant dance, a timeless space and oneness can be achieved.</p>`,
      },
      ET: {
        title: '69',
        description: `<h5>Mõlemad</h5>
          <ol>
            <li>Leidke külili olles mugav asend, kus saate pea toetada teineteise reiele.</li>
            <li>Võtke aega, et vaadelda teineteise suguelundeid armastava pilguga.</li>
            <li>Viige huuled lähemale ning hingake kuuma õhku kaaslase suguelundite peale.</li>
            <li>Hellitage aeglaselt suuga kaaslase suguelundeid viisil, mida praegu kõige enam naudite, näiteks suudelge või lakkuge õrnalt.</li>
            <li>Soovi korral silitage õrnalt ja aeglaselt kaaslase keha.</li>
            <li>Tehke kordamööda 30-sekundisi pause, et imetleda oma kaaslase suguelundeid. Kogege seda tunnet, mis tekib, kui ihaldusväärne kaaslane pakub Sulle samal ajal naudinguid.</li>
          </ol>`,
        additional: `<p>69 on poos, kus mõlemad saavad kordamööda olla saaja ja andja. Selline lähenemine esindab küpset ja teadlikku seksuaalsust, kus mõlemad saavad täielikult kogeda nii andmise kui vastuvõtmise rõõmu.</p>
          <p>See on väga intiimne ühendus, kuna kallimad on kogu oma võlus eksponeeritud, avatud ning haavatavad. Seepärast on oluline suhtuda austuse ja armastusega kaaslasesse ja tema suguelunditesse. Kui üks kaaslastest on imetleja rollis ja teine samal ajal pakub naudinguid, siis võib kogeda ühenduse ja õndsuse seisundit.</p>
          <p>Selle tegevuse käigus võib kujuneda sõnadeta koostöö, kus mõlemad tunnetavad harmooniliselt, kas võtta vastu, imetleda või naudingut pakkuda. See kasvatab intiimsust, usaldust ja turvatunnet, kuna areneb partnerite kehaline vaist.</p>
          <p>Kui kehad lõimuvad harmoonilises koosloomises, siis võib kogeda ajatut ruumi ning üksolemise tunnet.</p>`,
      },
    },
  },
]
