import 'dotenv/config'
import { Category, Locale, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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
        description: `<h5>Andja</h5>
          <p>Väljenda oma partnerile siirast tunnustust. Too vähemalt kolm päriselulist näidet:</p>
          <p>• midagi olulist, mida ta sinu jaoks tegi: "Minu jaoks oli väga oluline, et sa…, see pani mind tundma …."</p>
          <p>• iseloomuomadus: "Mulle väga meeldib sinu … Kui sa …, siis see paneb mind tundma …"</p>
          <p>• käsil olev väljakutse: "Ma näen, kui palju sa oled teinud seoses …. Ma usun, et sa saad sellega hakkama!."</p>
          <h5>Vastuvõtja</h5>
          <p>Kuula ja võta komplimendid vastu ilma tundeta, et pead vastama.</p>
          <p>Oluline: Olge kordamööda andja ja vastuvõtja rollis. Naine alustab.</p>`,
        additional: `<p>Paarid, kes kinnitavad teineteise väärtust sõnadega, tunnevad end tavaliselt rahulolevamana ja tajuvad tugevamat ühendust. Siiras tunnustus partnerile paneb teda tundma, et teda hinnatakse, tema panust märgatakse ja väärtustatakse. See tekitab soovi vastata samaga ja jagada sinuga lähedust.</p>
          <p>Tunnustavate sõnade ütlemine võib tunduda kohmakas, kui sa pole sellega harjunud. Kuid kui sellest saab igapäevane harjumus, kaob ebamugavus ning see hakkab tunduma loomulik ja lihtne.</p>
          <p>Kuna vastuvõtja rollis olev inimene lihtsalt kuulab ega pea kohe samaga vastama, võivad sõnad paremini kohale jõuda ja tugevamalt mõjuda. Kui sinu „ood” partnerile on helgem, kui vastuvõtja enesekuvand lubab vastu võtta, võib ta tunda end veidi kohmetult. Vastuvõtja võiks proovida hoida silmsidet, lõdvestada keha, hingata sügavalt sisse ja lasta ebamugavuse all olevatel tunnetel välja tulla.</p>
          <p>Kui tunneme, et meid väärtustatakse, suudame olla rohkem kohal oma kehas, mitte ainult peas, sest me ei pea enam taga ajama tunnet, et meid hinnatakse, ega muretsema: kas mu partner tõesti märkab ja hindab mind?</p>`,
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
        description: `<h5>Andja</h5>
          <ol>
            <li>Hõõru käsi kokku, et need soojaks saada, ja hoia neid 10 sekundit partneri pea lähedal.</li>
            <li>Liiguta käed aeglaselt lähemale ja puuduta partneri pead.</li>
            <li>Silita partneri pead ja kaela.</li>
            <li>Jätka aeglases tempos masseerimist.</li>
            <li>Masseeri õrnalt kõrvu ja kõrvalesti pöidla ning nimetissõrmega.</li>
            <li>Rakenda kaelal ja peanahal tugevamat survet.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Otsusta, kas soovid massaaži vastu võtta asendis a) või b) või mõnel muul sulle sobival viisil.</li>
            <li>Lõdvestu, sule silmad ja naudi.</li>
          </ol>`,
        additional: `<p>Massaaž on viis näidata partnerile puudutuse kaudu, et hoolid temast. Peamassaaž aitab lõdvestuda, loob ühenduse ja turvatunde. See toob sind tagasi kehateadlikku seisundisse ja eemale kiirest mõtete tulvast.</p>
          <p>Peamassaaž võib olla sensuaalne, kuid samas ei pane see kehale survet kuidagi puudutusele reageerida. Peamassaaž loob hetki, kus saate keskenduda ainult teineteisele ja nautida koos olemist.</p>
          <p>Lõõgastumine sünnib koostööst – üks partner annab ja teine naudib. See on suurepärane viis argielust hingetõmbe võtmiseks. Teie kehad saavad järk-järgult ühest seisundist teise liikuda ja kogeda sügavamat ühendust.</p>`,
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
        title: 'Koos lõõgastumine',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Naine istub mehele võimalikult lähedale, tema jalgade vahele. Leidke poos, mis sobib teile mõlemale. Vajadusel kasutage patju.</li>
            <li>Valige üks järgmistest asenditest: • embuses, rind vastu rinda, • laubad koos.</li>
            <li>Sulgege silmad, hingake läbi avatud suu ja tundke, nagu tõmbaksite õhku sügavale alakõhtu.</li>
            <li>Soovi korral liigutage keha aeglases tempos.</li>
          </ol>
          <p>Oluline: Hoidke sõnadeta ruumi.</p>
          <p>Kasutage liivakella asemel pehme helinaga taimerit.</p>`,
        additional: `<p>Koos lõõgastumine loob füüsilise läheduse, mis võib rahustada närvisüsteemi: emotsioonid vaibuvad ja mõtete tulv aeglustub. See asend aitab teil mõlemal rahuneda.</p>
          <p>Oluline on luua ühendus esmalt oma kehaga ja seejärel partneri kehaga. Sõnadeta ruumis olemine aitab kehal paremini tajuda oma sügavamaid soove.</p>
          <p>Koos lõõgastumine aitab teil häälestuda hetkele ja viia kehad samale lainele, nagu kaks merelainet, mis kohtuvad ja sulanduvad.</p>
          <p>Rindade kokkupuutel istumine viib tähelepanu südamesse. Laubad koos istumine rahustab meelt; te kogete ühenduses olemise tunnet.</p>`,
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
        description: `<h5>Andja</h5>
          <ol>
            <li>Hoia partnerit heatahtliku kavatsusega soovida talle ainult parimat.</li>
            <li>Kujutle, et partner on keegi, keda armastad tingimusteta ja platooniliselt – keegi, keda tahaksid süles hoida, näiteks kallis magav laps, kutsikas või kassipoeg.</li>
            <li>Proovi hoida sama armastavat tunnet kogu aja. Kui tähelepanu hajub, too see tagasi.</li>
            <li>Kui partner muutub emotsionaalseks, luba tal kogemusele alistuda ja jätka kaisutamist armastavalt ning hinnanguteta.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Vali, kas soovid, et sind kaisutataks asendis a) või b).</li>
            <li>Lõdvestu, sule silmad ja luba endal kogeda kõiki emotsioone.</li>
          </ol>`,
        additional: `<p>Igaüks vajab aeg-ajalt kaisutamist – lähedust ilma seksuaalsete ootusteta. Täiskasvanutena me sageli ei teadvusta, et vajame kaisutamist, ega pruugi osata seda küsida. See harjutus on võimalus lõdvestuda ja olla turvaliselt kellegi embuses ilma vajaduseta midagi kontrollida või suunata. Kui see on uus kogemus, võib see olla emotsionaalselt intensiivne. Vajadusel vaadake „Emotsioonide ABC-d”.</p>
          <p>See kaardiülesanne võib esile tuua vanem-laps dünaamika. Luba sellel avalduda, lõdvestu ja teadvusta, et sellel võib olla tervendav ja ühendust loov potentsiaal.</p>
          <p>Mida rohkem teete seda harjutust ilma oma emotsioone eitamata, seda rohkem hakkab keha partnerit usaldama, mis omakorda võib viia sügavama naudingu ja heaoluni.</p>`,
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
        description: `<h5>Andja</h5>
          <ol>
            <li>Vali sobiv asend, et silitada partneri käsivarsi aegluubis nii pealt kui seestpoolt.</li>
            <li>Seejärel aeglusta poole võrra ja liigu veel õrnemalt kui tavaliselt.</li>
            <li>Hoia iga partneri sõrme eraldi oma peopesas ja lase sellel läbi käe libiseda.</li>
            <li>Aseta oma täiesti lõdvestunud sõrmeotsad partneri peopesadesse. Seejärel joonista ringe väljastpoolt sissepoole. Mida lähemale keskmele liigud, seda aeglasemalt tee seda.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja naudi.</li>
            <li>Pane tähele, kus sinu käed tunduvad kõige tundlikumad.</li>
          </ol>`,
        additional: `<p>Partneri käte silitamine on õrn ja intiimne viis pakkuda hellust ja hoolt. Küünarvarte sise- ja välisküljed, peopesad, kõik sõrmede osad ja sõrmeotsad on väga tundlikud ning igapäevaelus ei saa need sageli palju aeglast, õrna ja nauditavat puudutust.</p>
          <p>Kui suunad tähelepanu ja puudutuse neisse piirkondadesse, avaneb võimalus avastada uusi tundlikke alasid. Mida rohkem suudad sellele harjutusele kogu tähelepanu anda ja füüsilisi stiimuleid teadvustada, seda suurem on võimalus kogeda uusi nauditavaid aistinguid.</p>
          <p>Keha naudingupotentsiaali suurendamiseks peaksid liigutused olema aeglased ja voolavad. Tavapärasest aeglasem tempo võimaldab partneril kogeda paljusid tegevusi ja aistinguid uuel viisil.</p>`,
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
        description: `<h5>Andja</h5>
          <ol>
            <li>Hõõru käsi kokku, et need soojaks saada. Seejärel aseta käed väga õrnalt partneri kehale.</li>
            <li>Puuduta partnerit läbi riiete aeglases tempos, alustades 2 minuti pikkuse käte ja jalgade silitamisega.</li>
            <li>Seejärel jätka sõrmeotstega puudutamist veel aeglasemalt ja õrnemalt.</li>
            <li>Mida lähemale intiimsetele piirkondadele jõuad, seda aeglasemaks ja õrnemaks muuda puudutus. Selle harjutuse ajal ära puuduta suguelundeid.</li>
            <li>Hoia tähelepanu kohas, kus sinu käsi kohtub partneri kehaga. Proovi erinevaid kehapiirkondi ja liikumissuundi.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Otsusta, kas soovid olla selili või kõhuli.</li>
            <li>Lõdvestu, sule silmad ja naudi.</li>
          </ol>`,
        additional: `<p>Puudutus on üks viis armastust väljendada. See on nauditav ja annab turvatunde, sest keha on endiselt riietega kaetud. Me ei tunne, et peaksime seksuaalselt avanema enne, kui oleme valmis. Aeglased ja sujuvad liigutused suurendavad keha naudingupotentsiaali.</p>
          <p>Kerge puudutus lubab kehal avaneda ja kogeda naudingut omas tempos. Nauding võib ilmuda kohtades ja viisidel, mida sa pole varem kogenud ega märganud. Lõdvestunud passiivse vastuvõtjana on sul hea võimalus laiendada keha peenemat naudinguvõimet. See tehnika aitab avastada erineva tundlikkusega kehapiirkondi. Riiete kaudu tehtud hellitused võivad kõhkleva partneri panna tundma end ihaldatuna.</p>
          <p>Vastuvõtjana saad keskenduda naudingu vastuvõtmise viisidele ja kehapiirkondadele, mis pole harjunud selliseid aistinguid tundma. Sa saad liikuda tuttaval iha maastikul, kuid ka laiendada naudingu ulatust ja repertuaari.</p>
          <p>Andja rollis oleval partneril on võimalus katsetada puudutust erinevatel ja ebaharilikel viisidel, laiendades oma „oskuste pagasit”.</p>`,
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
        title: 'Raskusega embus',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Üks partner lamab teise peal. All olev partner peaks võimalusel olema pehmel pinnal.</li>
            <li>Leidke asend, mis on mõlemale mugav ja soodustab lõõgastumist.</li>
            <li>All olev partner otsustab, kas lamada kõhuli või selili.</li>
            <li>Sulgege silmad, lõdvestuge ja hingake loomulikult.</li>
            <li>Kui tekib erutus, lase sellel olla ja keskendu lõõgastumisele.</li>
          </ol>
          <p>Märkus: Kergem partner peaks lamama peal. Soovi korral proovige ka vastupidi.</p>
          <p>Kasutage liivakella asemel pehme helinaga taimerit.</p>`,
        additional: `<p>Teineteise peal lamamine võib käivitada oksütotsiini tootmise, mis aitab vähendada stressi ja soodustab lõõgastumist. Kui teie kehad on sünkroonis, on võimalik sügavam ühendus. Õrn surve ja soojus mõjuvad rahustavalt ning loovad läheduse ja turvatunde.</p>
          <p>Kui teil on mugav teineteise peal lamada, võib see asend tugevdada intiimsust ja lähedust. Kui aga üks partner tunneb end ebamugavalt, muutub see vastupidiseks. Oluline on leida mugav asend ja vajadusel seda kohandada, et mõlemad partnerid tunneksid sama lõõgastust.</p>
          <p>Kasutage seda kaarti siis, kui soovite tüli maha matta ja erimeelsused pausile panna. See toob teid teineteisele lähemale ning hiljem saate teema juurde tagasi tulla, kui tunnete, et see on veel vajalik.</p>`,
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
            <li>Alusta väga õrna juuste silitamisega. Mida aeglasemalt alustad, seda rohkem äratab see naudinguretseptoreid.</li>
            <li>Silita ainult juukseid ja juukseotsi, puudutamata peanahka.</li>
            <li>Tõmba õrnalt juukseotsi ja libista sõrmi läbi juuste.</li>
            <li>Keera juuksesalke ümber sõrmede.</li>
            <li>Ole loov, vaheldades õrnemat ja kindlamat silitust.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja naudi.</li>
          </ol>
          <p>Märkus: Soovitame juuksed eelnevalt läbi kammida.</p>`,
        additional: `<p>Juuste silitamine stimuleerib peanaha närvilõpmeid, mis võib aidata naisel lõdvestuda. Paljud naised kogevad juuste puudutamist erilise ja tähendusliku aistinguna. Kui mees võtab aega, et naise juukseid silitada, võib naine tunda end ihaldatuna ja tähtsana.</p>
          <p>Naise peanahk on väga tundlik – tegelikult on see erogeenne tsoon. Juustega mängimine aitab naisel tulla mõtetest kehasse, panna meele pausile ja lihtsalt kogeda kehas toimuvat, kutsudes esile sügavamat naudingut.</p>
          <p>See tegevus aitab aeglustada mõtete tulva ja keskenduda sellele, mis toimub kehas ning kuidas see tundub. Veel suurema naudingu kogemiseks on oluline olla ühenduses sellega, mis toimub sinu kehas.</p>
          <p>Juuste silitamine võib pakkuda rahuldust ka mehele, sest naise lõdvestumise ja rahulolu nägemine loob ka temas heaolutunde.</p>`,
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
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Alustage ninade kokkusurumisest.</li>
            <li>Hõõruge ninaotsi teineteise vastu ja liikuge edasi üle partneri näo, kaela ning ülejäänud keha allapoole.</li>
            <li>Hõõru kogu oma nägu õrnalt ja aeglaselt vastu partneri keha viisil, mis on teile mõlemale nauditav. Ole spontaanne.</li>
            <li>Võta inspiratsiooni mõnelt loomalt, näiteks kassilt või koeralt, kuid jää iseendaks.</li>
            <li>Alustage tegevust vaikuses ja lisage soovi korral häält.</li>
          </ol>
          <p>Oluline: Ära kasuta selles harjutuses käsi!</p>`,
        additional: `<p>Hõõrumine, eriti kui see on õrn ja aeglane, võib aidata stressitaset vähendada ja turvatunnet luua. Nahk on täis närvilõpmeid, seega võib hõõrumine tekitada kas meeldivaid või ebameeldivaid aistinguid sõltuvalt kontakti liigist ja intensiivsusest.</p>
          <p>Kuula oma keha. See tegevus aitab sind meelest kehasse tuua ja väljendab keha soovi füüsilise läheduse järele. Kui lubad kehal liikuda nii, nagu ta tahab, arendad paremat kontakti oma keha ürgse ja loomuliku poolega. See on tee kogemuseni, kuidas teie kehad omavahel suhtlevad.</p>
          <p>See tegevus hõlmab partneritevahelist kehalist kontakti ja liikumist viisil, mis ei pruugi järgida teadlikke reegleid või standardeid, vaid põhineb puhtalt instinktil, emotsioonil ja füüsilisel ühendusel.</p>`,
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
            <li>Seistes aseta üks käsi kaheks minutiks naise kuklale ja teine käsi tema seljale südame kõrgusele.</li>
            <li>Libista alumist kätt aegluubis nii, et see jõuaks veidi allapoole taljet.</li>
            <li>Hoia käed kindlad ja stabiilsed. Hinga loomulikult, kuid sügavalt alakõhtu kaks minutit.</li>
            <li>Võid sellesse asendisse jääda või libistada käe minutiks tagasi südamepiirkonda.</li>
            <li>Kallista, keskendudes armastava ja hooliva tunde kogemisele. Kui tekib erutus, luba sellel juhtuda ja jätka kallistamist.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu ja hinga loomulikult, kuid sügavalt alakõhtu.</li>
          </ol>`,
        additional: `<p>Kallistamine vabastab oksütotsiini, armastuse ja õnnetunde hormooni, ning suurendab usaldust, lähedust ja heaolu. Igapäevase kallistamise kaudu saate hoida suhet elava ja intiimsena. Isegi lühike kallistus võib väljendada kiindumust, mis võib parandada suhte kvaliteeti.</p>
          <p>Naudingut võib kogeda südamesse koondunud hoolimise kaudu. Käe asetamine kuklale võib anda naisele turva- ja usaldustunde. Teise käe asetamine naise südame kõrgusele loob emotsionaalset lähedust ja armastavat tunnet. Käe hoidmine naise taljel annab kaitstud ja toetatud tunde. See on tunne, et mees hoiab teda kindlalt, ning loob põhilise turvatunde, mis lubab naisel lõdvestuda ja loomulikul naudingul ise esile kerkida. Sellises embuses võtab mees juhtiva rolli.</p>
          <p>Partneri füüsiline hoidmine võib konfliktisituatsioonis mõjuda rahustavalt ja lepitavalt.</p>
          <p>Kui soovite jätkata intiimsuskaartidega, võib mees lõpetada harjutuse käega naise taljel. Kui soovite, võite jätkata ühenduse kaartidega või selleks korraks mängu lõpetada. Lõpeta harjutus käega naise südame kohal.</p>`,
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
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Leidke sobiv asend silmsideks ja veenduge, et olete teineteisest sellisel kaugusel, kus te ei puutu füüsiliselt kokku, kuid mitte kaugemal kui üks meeter.</li>
            <li>Otsustage, kes kelle silmadesse vaatab, ja alustage harjutust pehme, armastava pilguga, midagi ütlemata.</li>
            <li>Hingake rahulikus tempos sügavalt ning lõdvestage huuled ja alalõug.</li>
            <li>Kui kumbki teist kogeb tugevat emotsiooni, ärge suruge seda alla ja jätkake partneri silmadesse vaatamist.</li>
            <li>Kui viis minutit on täis, lõpetage harjutus kallistusega.</li>
          </ol>
          <p>Soovitus: Kasutage liivakella asemel pehme helinaga taimerit.</p>`,
        additional: `<p>Selle kaardi tegevus annab võimaluse vaadata partnerile pikemalt silma. Selline silmside võib käivitada sügava füüsilise kogemuse, mis toob partnereid teineteisele lähemale.</p>
          <p>Kui vaatame kellelegi silma, muutume haavatavaks. Kui oleme emotsionaalselt avatud, saame luua teise inimesega emotsionaalse ühenduse. Haavatavus võib olla hirmutav, sest kardame haiget saada, kuid just selles seisundis peitub sügavaima ühenduse ja intiimsuse võimalus.</p>
          <p>Otsene silma vaatamine võib esile tuua emotsioone, mis varem ei tundunud turvalised või isegi võimalikud. Kui emotsioonid vallanduvad, järgneb sügavam lõdvestus koos võimalusega kogeda veelgi rohkem ühendust ja naudingut. Lahti lastes teeme ruumi uutele tunnetele. Vaadake „Emotsioonide ABC-d”.</p>
          <p>Pikem teineteisele silma vaatamine võib tekitada tunde, et partneri nägu muudab kuju ja võtab uusi varjundeid. See nähtus on üsna tavaline ja seda nimetatakse Troxleri efektiks – optiliseks illusiooniks, kus ühele kindlale punktile keskendudes võivad selle ümbrused hakata näima moonutatud.</p>
          <p>Regulaarne partnerile silma vaatamine võib aidata paaridel hoida suhte kvaliteeti ja ennetada emotsionaalse distantsi tekkimist.</p>`,
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
        title: 'Huulte sosinad',
        description: `<h5>Andja</h5>
          <ol>
            <li>Suudle partneri pead, nägu, kaela, kõrvu ja käsi.</li>
            <li>Huulte kontakt peaks olema aeglane, õrn ja armastav.</li>
            <li>Kasuta huuli, mitte käsi.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Leia sobiv istuv või lamav asend.</li>
            <li>Lõdvestu, sule silmad ja naudi.</li>
            <li>Võta suudlused vastu ilma midagi vastu tegemata.</li>
          </ol>
          <p>Nõuanne: Kui vastuvõtjal on pikad juuksed, seo need kinni, et kõrvad ja kael oleksid paremini ligipääsetavad.</p>`,
        additional: `<p>Paljud kerged suudlused partneri näole, kaelale, kõrvadele ja kätele annavad märku, et ta on aktsepteeritud ja armastatud. Keha muutub vähem pidurdatuks, võimaldades kogeda rohkem naudingut.</p>
          <p>Passiivse vastuvõtjana tunneb suudeldav partner, et ta on ootustevabas ruumis, kus ta võib olla tema ise – mitte see, kelleks partner tahab teda teha või mida ta temalt ootab. Selles punktis võivad pinnale tõusta sügavad emotsioonid. Vajadusel lugege „Emotsioonide ABC-d”, et leida viise tunnete tunnustamiseks ja läbitöötamiseks.</p>
          <p>Nii andja kui vastuvõtja saavad kanda armastuse energiat ja hakata nägema täiuslikkust partneri ebatäiuslikus kehas. Kui keegi pöörab meile heldelt armastavat tähelepanu, on lihtsam armastada ka oma keha. Mida vähem pidurdatud ja enesekindlamalt end oma kehas tunneme, seda rohkem naudingut suudame kogeda.</p>`,
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
        description: `<h5>Andja</h5>
          <ol>
            <li>Istu partneri selja taha.</li>
            <li>Pane käed partneri ümber ja hoia teda toetavalt ning kindlalt.</li>
            <li>Paku turvalist ja armastavat kohalolu ilma midagi tegemata.</li>
            <li>Kui partner hakkab kogema tugevaid emotsioone, peaks tal olema lubatud vooluga kaasa minna. Jätka tema hoidmist armastavalt ja hinnanguteta.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Istu paigal ja luba partneril võtta asend sinu selja taga.</li>
            <li>Sule silmad, lõdvesta keha ning hinga sügavalt ja rahulikult.</li>
          </ol>`,
        additional: `<p>Partneri hoidmine annab talle märku, et toetad teda füüsiliselt ja emotsionaalselt. Partneri füüsiline kohalolu aitab leevendada muret ja ärevust, pakub turvatunnet ning kedagi, kellele toetuda. Turvatunde kogemine lubab mõlemal partneril emotsionaalsel tasandil sügavamalt avaneda. Mida sügavam on emotsionaalne avanemine, seda suurem on füüsilise naudingu potentsiaal.</p>
          <p>Kui hoitav inimene tunneb kehas vastupanu, ära võitle emotsiooniga. Proovi lihtsalt lõdvestuda. Mõne jaoks võib selja tagant hoidmine olla ebamugav või tunduda kummaline ning paljud võivad märgata, et argimõtted hajutavad tähelepanu. Kui see juhtub, on hea keskenduda hingamisele.</p>
          <p>Selline hoidmine annab kehale märku, et ta ei pea enam tugev olema. Kui partnerite vahel on usalduslik suhe, saab hoitav inimene lubada endal olla haavatav, ebatäiuslik, nähtavalt emotsionaalne – täpselt selline, nagu ta on. Ja see on hea. Kui laseme kaitserüü maha, tajume selgemalt hetkes olemist ja pääseme ligi sügavamatele naudingutele, mis sellega kaasnevad.</p>`,
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
        description: `<h5>Domineeriv partner</h5>
          <ol>
            <li>Seo partneri silmad kinni, seisa tema selja taha ja aseta käed tema õlgadele.</li>
            <li>Seisa 30 sekundit paigal, lihtsalt teineteist teadvustades.</li>
            <li>Alusta partneri aeglast juhendamist, jälgides, kuidas ta sellele reageerib.</li>
            <li>Ole tähelepanelik ja juhi partnerit nii, et ta hakkaks sinu juhendamist usaldama.</li>
            <li>Sa vastutad partneri turvalisuse eest: kui ruumis on astmeid või muid takistusi, pead talle ütlema, kuhu ja kuidas astuda.</li>
            <li>Kui partner annab märku, et vajab pausi, tehke paus ja lase tal oma emotsioone kogeda.</li>
          </ol>
          <h5>Alluv partner</h5>
          <ol>
            <li>Lõdvestu ja usalda partnerit.</li>
            <li>Pane tähele tundeid, mida koged, ja soovi korral väljenda neid partnerile.</li>
            <li>Kui sinu usalduse tase pole piisav, et kinnisilmi liikuda, anna märku, et vajad pausi, ja pane tähele, mida tunned.</li>
          </ol>`,
        additional: `<p>Selle kaardi tegevus võimaldab paaril katsetada erinevaid rolle: juhtimist ja juhitav olemist. Kui üks partner usaldab teist teda juhtima, võib see süvendada usaldust.</p>
          <p>Partneri silmade kinnisidumine muudab ta haavatavaks ja sinust sõltuvaks ning annab ühele inimesele võimaluse võtta vastutus teise turvalisuse ja heaolu eest. Nägemisvõime puudumine sunnib juhitavat partnerit juhendajat paremini kuulama ja tema juhistele tähelepanu pöörama. Vastutav inimene peab olema tähelepanelik, märkama võimalikke ohte ja neid ennetama.</p>
          <p>Partneri turvaline juhendamine süvendab usaldust. Kuid domineeriva partneri viga võib esile kutsuda negatiivseid emotsioone ja usaldus võib lühiajaliselt kahjustuda. Tugevate tunnetega toimetuleku kohta vaadake „Emotsioonide ABC-d”.</p>
          <p>Kui suhtes puudub turvaline ja sõbralik suhtlus, on võimalik neid oskusi selle harjutuse käigus õppida. Edukalt lõpetatud harjutus kinnistab partneritevahelist sidet positiivsel viisil ja toetab turvatunnet.</p>`,
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
        description: `<h5>Andja</h5>
          <ol>
            <li>Hõõru käsi kokku, et need soojaks saada, ja aseta need partneri õlgadele. Hoia neid seal 10 sekundit.</li>
            <li>Liiguta sõrmeotsi õrnalt ja aeglaselt mööda partneri kaela külgi ja tagaosa.</li>
            <li>Jätka kõrvade ja kõrvade taguste piirkondadega.</li>
            <li>Silita nägu, põski, lõuga, otsaesist ja kulme.</li>
            <li>Võid õrnalt puhuda juuksepiirile, kõrvadele ja kaelale.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja naudi.</li>
          </ol>
          <p>Märkus: Mõned inimesed eelistavad õrna ja aeglast silitamist, teised aga tugevamat survet.</p>`,
        additional: `<p>Nägu, kael ja kõrvad on meie keha väga tundlikud piirkonnad, mis reageerivad eriti hästi aeglastele ja õrnadele paitustele. Mida aeglasem puudutus, seda rohkem aega on kehal kõike kogeda.</p>
          <p>Näo ja pea kerge puudutamine on midagi, mida naudivad nii naised kui mehed. See võib mõjuda rahustavalt, aidates partneril lõdvestuda ja tunda, et temast hoolitakse. Lõppude lõpuks lubame neid kohti tavaliselt puudutada ainult neil, keda usaldame. Silitamise kaudu saame harjutada helluse kunsti ja kogeda, kuidas see mõjutab meid ja meie partnereid.</p>
          <p>Partneri puudutamine võib vabastada õnnehormoone nagu oksütotsiin ja endorfiin. Need kemikaalid muudavad teid mõlemaid rahulikumaks ja õnnelikumaks ning tugevdavad teie suhet.</p>`,
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
        description: `<h5>Andja</h5>
          <ol>
            <li>Kui partner lamab kõhuli, istu tema selja kohal põlvedega kahel pool nii, et see oleks teile mõlemale mugav.</li>
            <li>Aseta mõlemad käed õrnalt partneri südame kohale.</li>
            <li>Liiguta sõrmeotsi kergelt üle kogu tema selja ja suurenda survet aeglaselt.</li>
            <li>Liigu kätega õlgadele ja alusta mudimist.</li>
            <li>Suurenda õlamassaaži intensiivsust mõõdukalt. Hoia liigutused siiski sujuvad ja ühtlased.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Leia mugav asend ja sule silmad.</li>
            <li>Hinga sügavalt sisse ja keskendu keha lõdvestamisele.</li>
            <li>Anna andjale tagasisidet, kui soovid kergemat või tugevamat massaaži.</li>
          </ol>`,
        additional: `<p>Õlgadesse koguneb palju stressi, eriti arvutiga töötamise ja nutiseadmete kohal küürutamise tõttu. Nendele piirkondadele keskenduv massaaž on hea viis seda pinget vabastada. Mida lõdvestunumad on õlad ja selg, seda rohkem naudingut keha tunda saab.</p>
          <p>Massaaž aitab mõlemal partneril taastada ühenduse oma kehaga ja aeglustada mõtete tulva.</p>
          <p>Selle kaardi tegevus võib soodustada mitteseksuaalset füüsilist ühendust. Regulaarne selja- ja õlamassaaž võib olla vastumürk elu kiirele tempole ning meenutada, kui oluline on füüsiline kontakt emotsionaalsete sidemete hoidmisel ja tugevdamisel.</p>`,
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
        description: `<h5>Andja</h5>
          <ol>
            <li>Hõõru käsi, et need soojaks saada.</li>
            <li>Asetades ühe käe partneri jala alla, libista teine käsi üle säärelihase, kuni jõuad suure varbani, ja tõmba varvast, lastes sellel läbi sõrmede libiseda.</li>
            <li>Korda sammu #2 iga varbaga.</li>
            <li>Masseeri õrnalt säärt ja jalatalda.</li>
            <li>Korda sama teise jalaga.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Lama kõhuli, lõdvestu, sule silmad ja naudi.</li>
          </ol>`,
        additional: `<p>Jalad ja labajalad saavad igapäevaselt palju koormust, kuid sageli ei saa piisavalt hoolt. Jalamassaaž leevendab kogunenud pinget. See võib olla eriti väärtuslik, kui mõlemad partnerid otsivad rahulikku ja hoolivat kontakti. Jalamassaaž on lihtne viis suhet tugevdada.</p>
          <p>Jalatallal, varvastel, varvastevahelisel nahal, säärtel ja sääremarjadel on palju kohti, mis reageerivad massaažile nauditavalt.</p>
          <p>Jalamassaaž võib pakkuda rahuldust ka massaaži tegijale, sest partneri lõdvestumise ja rahulolu nägemine on omamoodi kaasakogemus. Kui partner massaaži ajal magama jääb, on see täiesti okei, sest see näitab, et ta oli lihtsalt väsinud, kuid suutis lõdvestuda ja tunda end turvalises kohas.</p>`,
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
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Täitke kopsud poolenisti ja pange huuled kokku.</li>
            <li>Mees hingab suu kaudu välja ja naine tõmbab sama õhu oma kopsudesse.</li>
            <li>Naine hingab suu kaudu välja ja mees tõmbab õhu oma kopsudesse.</li>
            <li>Kui üks hingab sisse, hingab teine välja.</li>
            <li>Hingake nii rahulikult ja aeglaselt, hoides huuled kogu aeg koos, et uut õhku ei lisanduks ja kopsudes olev õhk välja ei lekiks.</li>
            <li>Kui üks partner eemaldub, hoidke silmad mõnda aega vaikuses suletuna.</li>
            <li>Korrake kogu protsessi vähemalt kaks korda.</li>
          </ol>
          <p>Märkus: Sellisel viisil hingamine võib põhjustada pearinglust ja loidust.</p>`,
        additional: `<p>Selline suudlemine võib luua kahe inimese vahel sügava sideme. Hingamine – kogu elu alus – muutub jagatud kogemuseks. Sellisel viisil õhu jagamine loob erilise füüsilise ja energeetilise ühenduse.</p>
          <p>Hingamise aeglustamine ja partneri hingetõmmetega sünkroonimine rahustab närvisüsteemi, suurendab kehateadlikkust ja võib viia isegi transilaadsesse seisundisse. See võib olla peaaegu müstiline kogemus, justkui kaks hinge sulaksid üheks. Kui keskendute hingamisele ja kohalolule, võib see luua vaimse kogemuse, kus piir mina ja sina vahel kaob.</p>
          <p>Kui pärast sõna „Stopp” ütlemist tekib soov sellest rääkida, ignoreeri seda impulssi ja vali selle asemel vaikus. See võib viia muutunud teadvuse seisundisse, kus meel on vaikne ning kohal on sügavam kohalolu ja sisemine rahu.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.INTIMACY,
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
        description: `<h5>Andja</h5>
          <ol>
            <li>Vaata partneri keha nii, nagu ta oleks kõige ilusam ja seksikam olend Maa peal.</li>
            <li>Mõtle vähemalt kolmele asjale tema kehas, mis sulle tõeliselt meeldivad. Ütle talle, mis need on.</li>
            <li>Võid õrnalt ja armastavalt puudutada ning silitada seda kehaosa, mis sulle väga meeldib.</li>
            <li>Kasuta näiteks selliseid lauseid:</li>
          </ol>
          <p>a) "Ma arvan, et sinu … on ilus",</p>
          <p>b) "Sinu … erutab mind",</p>
          <p>c) "Ma leian, et sinu … on seksikas".</p>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Vaata partnerile silma ja võta kompliment tänulikult vastu.</li>
          </ol>`,
        additional: `<p>Siirad komplimendid on meie kehale emotsionaalsel tasandil nagu paitus. Need panevad meid end hästi tundma ja avavad meid komplimentide tegijale. Kui tunneme end ihaldatuna ja seksikana, on see hea koht, millelt veel suuremat naudingut ehitada!</p>
          <p>Paljud inimesed ei saa oma elus piisavalt tunnustust. Partneri komplimendid võivad suurendada soovi kellegagi koos olla. Soovitame osalist lahtiriietumist, et mugavustsoonist välja tulla, ning siirad komplimendid on hea „ravim” ebamugavuse vastu.</p>
          <p>Olge teineteisele komplimente tehes siirad. Mõelge sellele, mis teile teineteise juures päriselt meeldib. Kui kallim ei tunne, et kompliment on siiras, võib see hoopis usaldust kahjustada. Kui partner tunneb komplimendi siirust, kuid kahtleb selle tõesuses, võib sellel siiski olla positiivne mõju. Mida rohkem sama komplimenti kinnitad, seda rohkem partner avaneb ja hakkab endasse uskuma.</p>
          <p>Partnerile regulaarselt komplimentide tegemine võib saada harjumuseks, mis parandab mõlema partneri meeleolu ja üldist suhtumist. Suhtes on oluline, et positiivseid suhtlushetki oleks rohkem kui negatiivseid. Komplimendid toetavad positiivset ja tervet suhet ning hoiavad romantikat elus. Partneri suurepäraste omaduste tunnustamine võib võtta vaid sekundi, kuid selle mõju võib kesta kaua.</p>`,
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
        title: 'Kui sügav on suudlus?',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Lõdvestage huuled ja alalõug.</li>
            <li>Enne kui huuled kokku puutuvad, hoidke neid umbes 30 sekundit teineteisele väga lähedal ning laske erutusel ja ootusärevusel kasvada.</li>
            <li>Proovige ühe minuti pikkust eelmängu: • puudutage partneri huuli vaid korraks ja tõmbuge siis tagasi • suruge huuled õrnalt partneri huulte vastu ja tõmbuge siis tagasi</li>
            <li>Jätkake õrna ja aeglase suudlemisega.</li>
            <li>Lõpuks lisage keel, kui te mõlemad seda soovite.</li>
          </ol>
          <p>Soovitus: Kasutage liivakella asemel pehme helinaga taimerit.</p>`,
        additional: `<p>Pikem suudlemine on palju enamat kui füüsiline tegevus – see on viis tugevdada armastust, hoida kirge elus ning parandada suhtes emotsionaalset ja füüsilist heaolu.</p>
          <p>Suudlemine käivitab selliste ainete nagu oksütotsiin ja endorfiinid tootmise, mis võivad keha lõdvestada ja tuju tõsta. Suudlemine vabastab ajus dopamiini ja serotoniini, mis loovad õnnetunde ning mõjuvad ka meeleolu parandajana.</p>
          <p>Suudlemine võib olla erootiline – erutus, mis süütab sädemed ja füüsilise tõmbe. See loob siira intiimsuse ja võimaldab kohtuda armastuses.</p>
          <p>Pikem suudlemine annab võimaluse sügavamalt märgata, mis kehas toimub. See äratab palju naudinguretseptoreid. Kui oled seni kogenud ainult tuliseid ja kirglikke suudlusi, anna aeglasematele võimalus.</p>
          <p>Paljud naised kogevad suudlemise ajal häbememokkades naudingut. Aeglasem lähenemine võib armatsedes avada sügavamaid naudinguid.</p>`,
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
        title: 'Puudutuse kummitus',
        description: `<h5>Andja</h5>
          <ol>
            <li>Puuduta partnerit võimalikult õrnalt ja aeglaselt sõrmeotste, salliääre või sulega.</li>
            <li>Liigu mööda keha seest väljapoole ja seejärel üles mööda keha külgi.</li>
            <li>Silita samamoodi käsivarte ja reite sisekülgi. Ka kaela.</li>
            <li>Möödaminnes suguelundite riivamine on samuti suurepärane.</li>
          </ol>
          <p>Soovitus: Aeglusta liigutusi poole kiiruseni, seejärel veerandkiiruseni.</p>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja naudi.</li>
          </ol>`,
        additional: `<p>Kõige kergem puudutus äratab naudinguretseptoreid, mis võivad igapäevaelus märkamata jääda.</p>
          <p>Kerge puudutus aitab taastada intiimsust, mis võib rutiini ja igapäevakohustuste tõttu aja jooksul väheneda, ning toob tagasi avastamise ja maagia tunde. Sageli esineb selline puudutus suhte alguses, kuid aja jooksul võib see tagaplaanile jääda.</p>
          <p>Kui partner selle harjutuse ajal magama jääb, on see normaalne. Võib-olla oli ta lihtsalt väsinud ja kuna tundis end turvaliselt, vajus ta unne. Järgmisel korral proovige harjutust siis, kui olete mõlemad hästi puhanud.</p>
          <p>Meie kiires maailmas on puudu aeglasest naudingust ja kohalolust – see „puudutuse kummituse” harjutus pakub mõlemat.</p>`,
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
            <li>Hinga sisse partneri keha olemust ja välja hingates puhu õrnalt tema kaelale.</li>
            <li>Jätka huulte ja ninaga aeglaselt mööda partneri keha liikumist.</li>
            <li>Lisa mõned suudlused. Võid proovida ka õrna näksimist.</li>
            <li>Liigu kõrvade juurde, kasutades samu tehnikaid.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja naudi.</li>
            <li>Anna hääle või hingamisega märku, millised liigutused ja piirkonnad on sulle kõige nauditavamad, et partner saaks neile keskenduda.</li>
          </ol>`,
        additional: `<p>Nii naistel kui meestel on kael ja kõrvad väga tundlikud ning tegelikult erogeensed tsoonid. Nuzzling, hingamine, suudlemine ja näksimine äratavad seksuaalseid aistinguid. Erinevalt suguelundite otsesest stimuleerimisest laseb kaela ja kõrvade aeglane suudlemine erutusel kasvada, luues pikema ja intensiivsema eelmängu.</p>
          <p>Leides partneri kaelal ja kõrvadel kõige nauditavamad kohad, õpid paremini tundma tema keha. Piirkondadele tähelepanu pööramine, mida tavaliselt ei stimuleerita, aitab murda seksuaalset rutiini ja teineteise kehasid uuesti avastada.</p>
          <p>Hääled ja helid on olulised, sest need vabastavad keha pingest, lasevad seksuaalsel naudingul paremini läbi keha voolata ja aitavad ühel partneril paremini mõista, mida teine hetkel tunneb. Partneri reaktsioonide jälgimine arendab mitteverbaalset suhtlust, nagu häälitsused ja kehakeel, mis on intiimsuse jaoks äärmiselt tähtsad.</p>`,
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
        title: 'Seks riietega',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Riietes olles hõõruge ja jäljendage seksiasendeid nii, et kehad puudutavad.</li>
            <li>Valige asendeid kordamööda. Mees alustab.</li>
            <li>Alustage väga aeglaselt ja kiirendage järk-järgult.</li>
            <li>Proovige jõuda uutele tasanditele mängulistes ja lõbusates asendites, sõites naudingu lainetel.</li>
          </ol>`,
        additional: `<p>Selle kaardi tegevus loob mängulise, piduriteta õhkkonna ja vähendab sooritusärevust. Seks ilma riideid seljast võtmata võtab ära surve jõuda orgasmi või ejakulatsioonini. See on ka võimalus katsetada asendeid ja lasta välja enda ürgne loomus.</p>
          <p>Ebatavaline lähenemine aitab seksuaalsetest rutiinidest mööda minna. Kui olete endiselt osaliselt riides, võib see muuta olukorda just piisavalt, et vähendada täiusliku soorituse survet. Läbi seksiliigutuste ilma penetratsioonita võite avastada, et nauding on enamat kui alastus ja vahekord.</p>
          <p>See on ka hea harjutus intiimsuse tugevdamiseks, kui sina ja partner olete väsinud või teil on vähe aega – ideaalne hetkedel, mil täielik lahtiriietumine pole võimalik.</p>`,
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
        title: 'Puusamäng',
        description: `<h5>Mees</h5>
          <ol>
            <li>Lamades hoia naist selja tagant embuses, käsi tema rinnal.</li>
            <li>Hinga sügavalt, lõdvestu ja hoia puusad paigal.</li>
            <li>Suuna tähelepanu oma südamepiirkonda.</li>
            <li>Kui erutud, lase sellel juhtuda ja hoia tähelepanu jätkuvalt südamepiirkonnas.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Vali, kummal küljel lamad, kui partner sind selja tagant embab.</li>
            <li>Mängi puusadega, tehes ülemise puusaga erinevaid ringjaid liigutusi. Proovi erinevaid kiirusi paigalseisust väga kiire liikumiseni ja tagasi.</li>
          </ol>`,
        additional: `<p>Puusade liigutamine võimaldab ühendada seksuaalenergia teadmisega, et saame oma naudingut ise liikumise kaudu juhtida. Nauding ei tule välisest allikast, vaid on alati meie kehas olemas ning me saame otsustada, millal selle sisse lülitame.</p>
          <p>See harjutus loob naisele turvalise ruumi, et oma seksuaalsusega paremini ühendust saada, sest meespartner on lihtsalt kohal ja lubab naise seksuaalsusel avalduda ilma sekkumata.</p>
          <p>Mehe jaoks võib olla erutav näha, et tema partner tunneb end vabalt ja soovib jagada intiimset hetke. Kui mees keskendub südamepiirkonnale, liigub seksuaalenergia kehas ülespoole ja muutub sügavamaks armastavaks tundeks.</p>
          <p>See tegevus nõuab koostööd. Mees pakub naisele ruumi, kuhu ta ei sekku, ja laseb naisel avastada seksuaalenergiat oma puusades omas tempos. Mees on kohal ja jälgib tema rütme, samal ajal kui naine lihtsalt voolab ja lubab puusadel loomulikult liikuda.</p>`,
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
        title: 'Tuharate hellitamine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Hoia kätt tuharatel 30 sekundit.</li>
            <li>Tee ringjaid, sensuaalseid ja masseerivaid liigutusi.</li>
            <li>Ava tuharapõsed aeglaselt alumises osas, häbememokkade lähedal, nii et häbememokad veidi avanevad, ja lase siis järsult lahti.</li>
            <li>Proovi erineva tugevusega haardeid.</li>
            <li>Leia tuharatel piirkond, mis laseb häbememokkadel lahti lastes kergelt vibreerida.</li>
            <li>Alusta uuesti sammust #1.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvesta tuharad.</li>
            <li>Tunneta aistinguid oma kehas, hoides tähelepanu tagumikul ja häbememokkadel.</li>
          </ol>`,
        additional: `<p>Tuharapõskedel on palju närvilõpmeid, mis võivad stimuleerimisel tekitada tugevat naudingut. Naise jaoks võib see olla meeldiv, sest otsest kontakti häbememokkadega ei ole – stimulatsioon on kaudne, jättes talle võimaluse erutuda või mitte. Naine võiks proovida lasta naudingul alakehas paisuda ja vabalt ülejäänud kehasse voolata.</p>
          <p>Tuharatega mängimine võib olla mehe jaoks ürgselt erutav. Kuna mees saab naist õrritamise kaudu erutada, toob see harjutus sisse kerge domineerimise-allumise elemendi, mis võib olla nauditav mõlemale partnerile.</p>
          <p>Tuharate hellitamine võib olla sensuaalne ja mänguline, tuues vaheldust ning lisades paari intiimsusesse kergust.</p>`,
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
        title: 'Lahtiriietamine',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Riided veel seljas, vaadake teineteist imetleva pilguga.</li>
            <li>Meespartner alustab ja eemaldab esimese riideeseme naise seljast.</li>
            <li>Eemaldage kordamööda üks riideese korraga.</li>
            <li>Liikuge aeglaselt ja sensuaalselt, nii et liigutused oleksid pikad ja viibivad; puudutage partneri keha voolavalt.</li>
            <li>Sulgege silmad ja nautige alasti embust.</li>
          </ol>
          <p>Soovitus: Veenduge, et teil oleks seljas vähemalt kuus riideeset, milles tunnete end seksikana.</p>`,
        additional: `<p>Lahtiriietamine annab võimaluse teineteise keha õrnalt puudutada juba protsessi käigus. Riiete eemaldamine võib tekitada tunde, nagu pakiksid lahti kingitust. Kui teed seda aeglaselt, suurendab see ainult ootust ja iha. Õhus on elevust: millise riideeseme partner järgmisena eemaldab?</p>
          <p>Mida rohkem sa partneri keha aeglaselt ja õrnalt hellitad riiete eemaldamise ajal, seda nauditavam on kogemus. Mida rohkem keha paljastub, seda enam kasvab seksuaalne erutus, luues ideaalse tasakaalu seksuaalse erutuse ja naudingu vahel.</p>
          <p>See tegevus õpetab partnereid väärtustama teekonda sama palju kui lõpptulemust: see on oluline osa teadlikust seksuaalsusest.</p>`,
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
        title: 'Vanniaeg',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Kasutage pehmet valgustust, et luua vannitoas romantiline õhkkond.</li>
            <li>Peske partnerit voolava vee all pikkade, aeglaste ja silitavate liigutustega, kasutades vahutavat dušigeeli.</li>
            <li>Alustage tagant: selg, käed, tuharad ja jalad.</li>
            <li>Seejärel keha esikülg: kael, rind, käed, kõht ja jalad.</li>
            <li>Liikuge aina lähemale suguelunditele, neid õrnalt riivates.</li>
            <li>Peske suguelundeid veel aeglasemalt ja õrnade liigutustega.</li>
            <li>Kui tunned, et võiksid partneri suguelundeid pesta ka suu ja keelega, tee seda sensuaalselt.</li>
            <li>Kui olete mõlemad puhtad, kuivatage teineteist samuti mänguliselt ja mõnulevalt.</li>
          </ol>`,
        additional: `<p>Selle igapäevase tegevuse saab muuta mänguliseks ja intiimseks kogemuseks, kui võtate aega seda koos teha. Pestav saab lõdvestuda ja tähelepanu nautida, samal ajal kui pesija saab nautida pehmeid ja voolavaid puudutusi ning naudingu pakkumist. Pehme ja mahe valgustus loob turvalise ruumi oma seksuaalse ja sensuaalse poole avastamiseks.</p>
          <p>Vesi võimaldab teha teineteisele pikki silitavaid liigutusi. Dušigeeli kasutamine muudab kogemuse veel siidisemaks ja mõnusamaks, äratades kehas erinevaid retseptoreid. Intiimsete piirkondade sellisel viisil puudutamine on parem kui libesti kasutamine. Kuum vesi paneb meid end turvaliselt tundma, võib-olla meenutades universaalset kogemust emaüsas hõljumisest.</p>
          <p>See praktika aitab hoida suhtes nii kirglikku sädet kui hoolitsevat elementi, ühendades vajaduse sügava emotsionaalse ja füüsilise ühenduse järele.</p>`,
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
        title: 'Aluspükste tõmbamine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Seisa naise selja taga ja haara tagant tema aluspükste servast.</li>
            <li>Tõmba aluspükse aeglaselt ülespoole. Kui tunned, et surve naise häbememokkadele on meeldiv, liiguta aluspükse õrnalt edasi-tagasi.</li>
            <li>Aseta naine selili. Tõmba aluspesu mõlemalt poolt aeglaselt ja õrnalt üles, nii et osa häbememokkadest paljastub.</li>
            <li>Hoia aluspesu ühe käega pingul ja silita teisega õrnalt ning aeglaselt tema häbememokki, eriti seda osa, mis aluspükste vahelt paljastub.</li>
            <li>Kui tunned, et naisele see meeldiks, puuduta keelega ja suudle õrnalt neid häbememokkade osi, mis aluspükste vahelt paljastuvad.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Luba mehel sind esmalt seistes ja seejärel lamades paigutada.</li>
            <li>Lõdvestu, sule silmad ja naudi.</li>
            <li>Anna talle pehme, sensuaalse häälega märku, kui see tundub hea või liiga intensiivne.</li>
          </ol>`,
        additional: `<p>Naise aluspükste tõmbamine võib tuua häbememokkadesse uusi aistinguid. Aluspükste pingutamise ja paljastunud häbememokkade puudutamisega saad luua pinget ja ootusärevust, mis võib suurendada naise seksuaalset erutust.</p>
          <p>See tegevus võib dünaamikasse tuua kerge domineerimise ja allumise. See annab mehele võimaluse naist seksuaalselt õrritada ning õpetab teda pöörama tähelepanu naise kehakeelele ja reaktsioonidele. Kui naine lubab partneril kontrolli võtta, on võimalik kogeda erootilist ohjade üleandmist.</p>
          <p>Sellised mängulised ja kerged erootilised tegevused võivad aidata tuua suhtesse tagasi põnevust, eriti kui argielu on vähendanud seksuaalset spontaansust. Sel juhul muutub tavaline riideese erutuse allikaks, mis võib hiljem luua meeldivaid seoseid.</p>`,
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
        title: 'Naudingupunkti massaaž',
        description: `<h5>Mees</h5>
          <ol>
            <li>Pane partner lamama nii, et padi on tema alakõhu all ja jalad on sinu reitel laiali. Hõõru käsi kokku, et need soojaks saada.</li>
            <li>Aseta ühe käe peopesa tema sabakondile ja hoia teise käega tema puusast. Tunne 20 sekundit, kuidas sinu käte soojus imendub partneri kehasse.</li>
            <li>Alusta tema alaselja ja tuharate väga aeglast masseerimist, suurendades survet järk-järgult.</li>
            <li>Aseta ühe käe pöial tema lahklihale, mis asub tupe ja päraku vahel, ning hoia teise käega tema puusast. Jää nii 20 sekundiks.</li>
            <li>Tee pöidlaga erinevaid liigutusi: aeglaseid ringe, õrnaid pumpavaid liigutusi ja vibratsiooni.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, hinga sügavalt sisse, sule silmad ja naudi.</li>
          </ol>`,
        additional: `<p>Päraku ja tupe vahel on punkt, mille masseerimine võib pakkuda tohutut naudingut. Seda nimetatakse lahklihaks; selle puudutamisel saavad nii pärak kui tupeava kaudset stimulatsiooni, aktiveerides naise ürgse soovi alistuda.</p>
          <p>Selles asendis võib naine tunda end haavatavana. Seetõttu on oluline, et mees oleks temaga hooliv ja õrn. Nii on naisel lihtsam lõdvestuda ja kogeda naudingut selle ilmumisel. Kui naisel ei õnnestu esimesel katsel lõdvestuda, proovige mõnel teisel korral uuesti.</p>
          <p>See harjutus annab mehele ka võimaluse murda välja oma tavapärasest seksuaalkäitumise mustrist. Uute oskuste omandamine suurendab seksuaalset enesekindlust.</p>
          <p>See kaart aitab paaril ületada seksuaalseid tabusid, mis võivad piirata naudingut teatud kehapiirkondades.</p>`,
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
        description: `<h5>Andja</h5>
          <ol>
            <li>Kasuta melonitükki või muud mahlast puuvilja, et õrnalt ja aeglaselt partneri keha ahvatleda: kõht, rindkere, käed ja käsivarred, kael, reied.</li>
            <li>Kui libistad puuviljatükki mööda keha, pigista sellest mahla välja ja järgi huulte ning keelega, et "jäljed katta".</li>
            <li>Esimesed kolm minutit väldi peamisi erogeenseid tsoone.</li>
            <li>Liigu sensuaalselt suguelundite ja rindkere piirkonda.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Lõdvestu ja too tähelepanu sinna, kus puuvili, huuled või keel sinu nahka puudutavad.</li>
            <li>Koge puudutuse tunnet nii avatud kui suletud silmadega.</li>
          </ol>
          <p>Märkus: Puuviljamahl võib linad määrida.</p>
          <p>Kui puuviljaga inimesel on pikad juuksed, on soovitatav need kinni siduda.</p>`,
        additional: `<p>Puuvilja mängu kaasamine võib stimuleerida korraga nelja meelt – puudutust, lõhna, maitset ja nägemist –, muutes kogemuse rikkamaks. See lisab intiimsusele lõbu ja mängulisust, aidates väljuda seksuaalsest rutiinist. See julgustab tajuma kogu keha seksuaalse naudingu allikana, mitte keskenduma ainult erogeensetele tsoonidele.</p>
          <p>Puuviljamahla niristamine võib luua füüsilist elevust ja erutust. Mahla keelega limpsimine võimendab naudingukogemust. Mida kauem kestab mäng erogeensete tsoonide ümber ilma neid tegelikult puudutamata, seda rohkem võib erutus kasvada, mis hiljem võib tasuda end ära tugevama naudingu ja kirglikuma vahekorra näol.</p>`,
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
        title: 'Laks vallatule pepule',
        description: `<h5>Mees</h5>
          <ol>
            <li>Ütle naisele, kui seksikas on tema tagumik ja kui vallatu ta on, samal ajal teda pehmelt silitades.</li>
            <li>Hoia teist kätt naise kõhul.</li>
            <li>Pooleldi lõdva käega anna õrn laks tuharate alumisele osale, nii et vibratsioon jõuaks häbememokkadeni.</li>
            <li>Kui käsi langeb nahale, lase keskmistel sõrmedel häbememokki vaid vaevu riivata. Mida õrnem puudutus, seda vastupandamatum.</li>
            <li>Muuda sagedust ja intensiivsust, et üllatada ennast ja partnerit. Võid proovida ka hoida kätt mõneks sekundiks tema jalgade vahel.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Sule silmad ja lõdvestu.</li>
            <li>Lase kehal laksule reageerides võpatada ja ära hoia häält tagasi.</li>
          </ol>`,
        additional: `<p>Õhus on elektrit, kui paar mängib viisil, kus õrn ja kindel stimulatsioon vahelduvad ning kehad tunnevad erinevaid kontakti liike. See toob tähelepanu kehasse ja ajab argimõtted mõlema partneri meelest eemale.</p>
          <p>Laks tuharale võib võimendada ürgse maskuliinsuse ja feminiinsuse tunnet. Mees peab tundlikult tajuma, kas anda pehmem või tugevam laks. Õige intensiivsuse ja sagedusega laksutamine võib panna naise häbememokad naudingust värisema, suurendades mõlema partneri seksuaalset erutust.</p>`,
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
            <li>Silita rindu spiraalselt. Alusta rinnavahelt ja liigu iga ringiga aeglaselt nibule lähemale, kuid ära puuduta nibusid. Korda.</li>
            <li>Võta rinnad laiali sirutatud sõrmedega pihku. Too sõrmi lähemale, kuni jõuad peaaegu nibuni, ja lase lahti. Korda.</li>
            <li>Tee ringe areoolal, liikudes väljastpoolt nibu poole. Kui jõuad nibuni, libista sõrmega õrnalt üle selle. Ole aeglane ja õrn. Korda.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu ja sule silmad.</li>
            <li>Lase mõtetel ja emotsioonidel tulla ja minna ning keskendu kehas olevatele aistingutele.</li>
            <li>Hinga.</li>
          </ol>`,
        additional: `<p>Rinnad on väga tundlikud ja erogeensed. Silitamine ja õrn stimuleerimine võivad olla nauditavad ning vabastada oksütotsiini, mis loob heaolutunde ja suurendab emotsionaalset lähedust.</p>
          <p>Rindadel võib olla vaja aega ja õrna puudutust ootustevabas ruumis, et nende naudingupotentsiaal avaneks. Kui mees pöörab naise rindadele heldelt positiivset tähelepanu, võib see parandada naise kehapilti ja enesekindlust.</p>
          <p>Selle kaardi tegevus õpetab mehele mitmekesisemaid viise rindade silitamiseks. Ta äratab naise südamepiirkonna ning näeb, kuidas armastus, hellus ja pehmus naises tärkavad. Teadvusta, et rindade õrn silitamine võib esile tuua emotsioone. Mees peaks lubama naisel neid tundeid kogeda, jätkates aeglast ja õrna silitamist.</p>
          <p>Rindade stimuleerimine aktiveerib samu närvilõpmeid, mis on seotud genitaalse erutusega. Mida vastuvõtlikumaks rinnad muutuvad, seda suurem on võimalus ülespoole kulgevaks naudingukaareks, mis tipneb orgasmiga.</p>`,
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
            <li>Istu mehe kõrvale, kanna kätele õli ja hõõru neid soojaks.</li>
            <li>Aseta üks käsi õrnalt peenisele ja teine kõhule naba kohale. Tunneta, kuidas soojus voolab sinu käest mehe kehasse.</li>
            <li>Alusta kõhumassaaži ringjate liigutustega.</li>
            <li>Hoia ühe käega peenist ja masseeri teisega alakõhtu naba all.</li>
            <li>Jätka kõhumassaaži ja suurenda survet vähehaaval.</li>
            <li>Võid panna kõhu õrnalt värisema.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja naudi.</li>
            <li>Keskendu alakõhuhingamisele.</li>
          </ol>`,
        additional: `<p>Massaaž stimuleerib verevoolu kubemepiirkonnas, mis võib suurendada erutust ja tundlikkust. Alakõhu masseerimine aktiveerib seksuaalenergia. Tavaliselt saavad mehed erektsiooni aktiivse soorituse kaudu, kuid selles harjutuses saavad nad seda kogeda lõõgastumise kaudu.</p>
          <p>Selle kaardi tegevus võimaldab uurida mehe keha piirkondi, mis saavad sageli vähem tähelepanu, kui väärivad. See pakub ka viisi seksuaalse kogemuse pikendamiseks ja naudingu intensiivsuse suurendamiseks.</p>
          <p>Kõhumassaaž aitab parandada üldist kehateadlikkust, mõista, kuidas seksuaalenergia kehas liigub, ning luua ruumi aeglasemaks ja teadlikumaks intiimsuseks. Kõik see pikendab naudingut ja süvendab emotsionaalset sidet.</p>`,
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
            <li>Vali kas asend a või b.</li>
            <li>Hoia naist ühe käega turvaliselt ja kindlalt. Teisega hoia teda kindlalt, õrrita, kõdita või silita.</li>
          </ol>
          <p>Armastav domineerimine võib sisaldada järgmisi elemente:</p>
          <p>• naise kaela ja rindade silitamine,</p>
          <p>• naise peast või juustest hoidmine ja kaela suudlemine,</p>
          <p>• puusadest haaramine ja penetratsiooni jäljendamine,</p>
          <p>• lihtsalt naise hoidmine.</p>
          <ol>
            <li>Oluline on leida turvaline haare ja rakendada piisavat survet ilma pigistamata, jäädes samal ajal hoolivasse ja armastavasse seisundisse.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Usalda kontroll mehele.</li>
            <li>Lõdvestu, alistu ja hinga rahulikult.</li>
            <li>Kui tunned ebamugavust, miski on valus ja/või sa ei soovi jätkata, anna kohe märku, et vajad pausi.</li>
          </ol>`,
        additional: `<p>See on sügavam väljendus naise ja mehe vahelisest polaarsusest. Mees võib domineerida ja naine alistuda. Domineerimine tähendab siin seda, et sa tead, et juhid olukorda; sa oled võimas, kuid ka armastav. Alistumine seostub lõõgastumise, usalduse ja kontrollist lahti laskmisega.</p>
          <p>Armastav domineerimine on väga erinev alandavatest kontrollivormidest, mis panevad inimese tundma end rõhutu ja väikesena. Armastav ja heatahtlik domineerimine lubab naisel lõdvestuda ja alistuda. Enamik naisi tunneb selle erinevuse kergesti ära. Paljude naiste üks suurimaid seksuaalseid soove on täielikult alistuda armastavale ja empaatilisele domineerimisele.</p>
          <p>Kui naisel on raske alistuda või mehel on raske domineerida, vahetage rolle. Seejärel pöörduge tagasi algsete rollide juurde, nii et mees on domineeriv ja naine alistuv.</p>
          <p>On oluline, et see dünaamika põhineks vastastikusel nõusolekul, usaldusel ja selgel suhtlusel. Kaart rõhutab partneri heaolu ja turvalisust – need on selle praktika jaoks hädavajalikud.</p>`,
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
            <li>Hõõru käsi kokku, et need soojaks saada.</li>
            <li>Hoia peenist õrnalt ühes käes ja aseta teine käsi rinnale, tundes, kuidas soojus liigub kätest kehasse. Jää sellesse asendisse umbes 2 minutiks.</li>
            <li>Seejärel libista käsi peenisepeani. Hoia käsi lõdvestunult.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Lama rahulikult ja unusta kõik ootused.</li>
            <li>Hinga kergelt läbi avatud suu ja lõdvesta keel.</li>
            <li>Kui soovid häält kasutada, tee seda julgelt.</li>
          </ol>`,
        additional: `<p>Peenise hoidmine ilma ootusteta annab mehele võimaluse tunda, mis toimub tema suguelundis. Mis tunne on, kui naine hoiab mehe kõige intiimsemat kehaosa midagi vastu soovimata?</p>
          <p>Kui naine hoiab kätt mehe rindkere keskel, saab mees ühendust oma emotsioonidega. See harjutus õpetab kontrollist loobumise ja lihtsalt olemise kunsti, mis võib mõne mehe jaoks olla uus.</p>
          <p>Naisel on võimalus saada partneri reaktsioonidega tuttavamaks ja märgata peeneid muutusi tema kehakeeles.</p>
          <p>See tegevus võib näidata, et seksuaalsus on palju laiem kui penetratiivne akt ning paljud erinevad füüsilise läheduse vormid on väärtuslikud ja pakuvad naudingut. See aitab ka laiendada traditsioonilisi vaateid mehe seksuaalsusele, rõhutades vastuvõtlikkust ja tundlikkust.</p>`,
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
        title: 'Tuharate väristamine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Hõõru käsi kokku, et need soojaks saada. Aseta mõlemad käed partneri sabakondile tuharate vahele ja tunne umbes 20 sekundit, kuidas soojus voolab tema kehasse.</li>
            <li>Aseta käed tema puusade külgedele veidi puusakondist allapoole ja raputa puusi küljelt küljele umbes 30 sekundit.</li>
            <li>Aseta peopesa sabakondile ja raputa seda piirkonda kiiresti ning intensiivselt umbes 30 sekundit.</li>
            <li>Kõige kergema puudutusega silita ühe käega partneri selga sabakondist õlgadeni.</li>
            <li>Korda alates sammust #1 2–3 korda.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lama kõhuli mugavas asendis. Võid panna padja kõhu alla.</li>
            <li>Lase kehal lõdvestuda.</li>
            <li>Kui keha tahab liikuda, väriseda või võpatada, lase sel juhtuda.</li>
            <li>Hinga sügavalt ja kui tunned, et soovid hääle valla lasta, lase sellel välja tulla.</li>
          </ol>`,
        additional: `<p>Puusad on ühe olulise seksuaalse naudingukeskuse hoidla. Sabakondi vibreerima pannes võib ärgata uinunud seksuaalenergia. See harjutus võib aidata lihtsamalt kogeda sügavamaid naudinguid üle kogu keha. See on võimalus kogeda nii genitaalset naudingut kui sügavamat energeetilist naudingut.</p>
          <p>Sabaluu juurest õlgadeni silitamine aitab seksuaalenergial levida läbi kogu keha, et see ei jääks koonduma ainult suguelundite ümber. See on oluline osa energeetilise kogu keha orgasmi kogemisel. Selliste orgasmide väravana õpetab praktika laiemat kehateadlikkust, energia teadlikku suunamist, naudingu aeglast kogunemist ning fookuse laiendamist genitaalidelt kogu kehale.</p>`,
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
        title: 'Jalgade vahel',
        description: `<h5>Mees</h5>
          <ol>
            <li>Silita õrnalt ja aeglaselt naise põlvi ja põlvekedra.</li>
            <li>Silita tema reite sisekülgi, alustades põlvest ja liikudes üles jalgade vahele. Tee seda õrnalt sõrmeotstega ja hoia tempo aeglane.</li>
            <li>Puuduta tema aluspükste serva, alustades kõhu ülaservast. Lõpuks õrrita naist, silitades aluspükste serva seal, kus jalad ja keha kohtuvad.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja naudi.</li>
          </ol>`,
        additional: `<p>Põlved, põlvekedrad, reite siseküljed, alakõht ja vaagen on kõik väga erogeensed tsoonid. Neid sageli ignoreeritakse ja jäetakse tähelepanuta. Kuid õrn ja aeglane puudutus on just see, mis aitab nende piirkondade naudingupotentsiaali avada. Selline puudutus ja katsetamine annab võimaluse avastada partneri keha, äratades samal ajal palju sügavamaid naudinguid.</p>
          <p>Naistel võimaldab puudutus jalgade vahel kogeda aeglast erutuse kasvu ilma suguelundite otsese stimuleerimiseta. See õpetab ka naudingut vastu võtma ilma tundeta, et peab kohe samaga vastama. Mehed, kes naudivad pikka eelmängu ja järkjärgulisemat lähenemist, õpivad kannatlikkust ja oma seksuaalsete soovide jälgimist.</p>
          <p>Jalgade vahel puudutamine võib näidata paaridele, et teekond on sama oluline kui sihtpunkt. See aitab väärtustada eelmängu ja aeglasemaid lähenemisi, mis on sageli sügavama seksuaalse rahulolu ja intiimse ühenduse võti.</p>`,
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
        description: `<h5>Õpetaja</h5>
          <ol>
            <li>Võta minut, et puudutada ja tajuda oma keha. Avasta, millist puudutust soovid praegu kogeda.</li>
            <li>Kui sa ei tea, millist puudutust soovid, alusta spontaanselt.</li>
            <li>Kui oled valmis, anna partnerile puudutusega märku.</li>
            <li>Näita partnerile oma kehal, kuidas ja kus ta võib sind puudutada.</li>
            <li>Võta partneri puudutus vastu sellisena, nagu see tuleb.</li>
            <li>Korda samme 4 ja 5. Iga demonstratsioon peaks kestma umbes 15 sekundit.</li>
          </ol>
          <h5>Õppija</h5>
          <ol>
            <li>Hoia silmad suletuna, kuni partner annab puudutusega märku, et on valmis.</li>
            <li>Proovi näidatud puudutust võimalikult täpselt korrata, nautides samal ajal protsessi ka ise.</li>
            <li>Kui oled lõpetanud, võta käed ära ja oota järgmist demonstratsiooni.</li>
          </ol>`,
        additional: `<p>Me kõik vajame puudutust. Sageli naudime erinevaid puudutusi. Selleks et partner teaks ja pakuks puudutust, mida meie keha naudib ja vajab, on oluline oma keha paremini mõista. See kaart õpetab üksikasjalikult, kuidas näidata partnerile, kuidas sulle meeldib, et sind puudutatakse.</p>
          <p>Me kipume sageli pakkuma partnerile sellist puudutust, mida ise naudime, kuid see puudutus ei pruugi teisele inimesele alati sügavat naudingut pakkuda.</p>
          <p>Alguses on oluline, et õppija hoiaks silmad suletuna, et andja saaks turvaliselt katsetada, millist puudutust ta oma kehal tunda soovib. Kõigepealt võid umbes minuti katsetada, et oma kehaga ühendust saada. Pärast seda peaks harjutus kestma umbes 15 sekundit. See on piisavalt pikk, et puudutust kogeda ja õppijal seda meelde jätta.</p>
          <p>See kaart annab võimaluse süstemaatiliselt avastada partneri eelistusi ja õpetab keskenduma täielikult tema vajadustele, jättes enda soovid kõrvale.</p>`,
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
        title: 'Nõtke ühendus',
        description: `<h5>Andja</h5>
          <ol>
            <li>Hõõru sensuaalselt õli üle kogu oma keha esikülje. Kasuta oma keha, et kanda õli partnerile.</li>
            <li>Libista oma õlitatud keha vastu partnerit, liikudes tema kubemest kaelani.</li>
            <li>Ole loov: tee ringjaid, sensuaalseid ja voolavaid liigutusi.</li>
            <li>Kuula partnerit, et mõista, milline surve talle meeldib.</li>
            <li>Kui partner soovib ümber pöörata, jätka teisel küljel.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Hinga paar korda lõõgastavalt.</li>
            <li>Võta vastu ja naudi.</li>
          </ol>`,
        additional: `<p>Õli võib muuta puudutuse siidiseks ja nõtkeks ning luua kahe keha vahele ühenduse. Kui õliga kaetud inimene hõõrub end vastu partneri keha, võib see äratada tema mängulise, voolava ja loova poole. Teise inimese jaoks on erutav ja nauditav lõdvestuda ning võtta vastu partneri õline keha, kui see tema vastu liigub.</p>
          <p>See kaart annab võimaluse proovida pehmemaid, voolavamaid ja sensuaalsemaid liigutusi. Selle kogemuse positiivne mõju võib kanduda ka teistesse eluvaldkondadesse. Kogu keha kasutamine ainult käte asemel toob suhtesse vaheldust ja loob teistsuguse viisi füüsilise intiimsuse kogemiseks.</p>
          <p>See on spontaanne tants kahe keha vahel, kus mõlemad sulanduvad sensuaalselt üheks.</p>`,
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
            <li>Hõõru käsi kokku, et need soojaks saada. Aseta käed armastaval ja austaval viisil naise rindadele ning hoia neid seal 30 sekundit.</li>
            <li>Silita rinda aeglaselt ja õrnalt siksakilise liigutusega, alustades rangluust. Ära puuduta veel nibusid ega areooli. Silita nii mõlemat rinda korraga.</li>
            <li>Tõsta rindu aeglaselt mõõduka survega üles. Esmalt üht rinda, siis teist ja seejärel mõlemat korraga.</li>
            <li>Aseta käsi rinnale nii, et nibu jääb kahe sõrme vahele, ja lase käel õrnalt väriseda. Esmalt ühel rinnal, siis teisel ja lõpuks mõlemal korraga.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu ja sule silmad.</li>
            <li>Luba emotsioonidel pinnale tõusta, olla ja mööduda.</li>
            <li>Hinga.</li>
          </ol>`,
        additional: `<p>Rindade hellitamine aitab naisel saada ühendust oma tundlikkusega ning võib süüdata armastava tunde ja vabastada oksütotsiini, mis loob heaolu ja lõõgastuse tunde. See võib viia naise pehmemasse ja voolavamasse meeleseisundisse.</p>
          <p>Selle kaardi tegevus julgustab mehi katsetama uusi viise sensuaalse enesekindluse suurendamiseks ja õpetab uusi tehnikaid tundlike piirkondade puudutamiseks. Õrn hoolitsus võib olla ka seksuaalselt erutav.</p>
          <p>Rindadele õrna hoolt andmine on eriti väärtuslik siis, kui naine kogeb oma kehas muutusi, nagu vananemine, kaalukõikumised, rasedus või imetamine. See võib aidata taastada naise armastavat suhet oma rindadega ja naudingutega, mis seal võivad avalduda.</p>
          <p>Nagu paljud teised tegevused, võib ka see harjutus esile tuua ootamatuid emotsioone. Luba neil tulla, mõnda aega olla ja minna.</p>
          <p>Rindade teadlik ja oskuslik puudutamine näitab, et intiimsus on palju rikkam kui ainult genitaalne stimulatsioon, ning õpetab mõlemat partnerit väärtustama sensuaalseid, aeglaseid ja tähelepanelikke paitusi.</p>`,
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
        title: 'Laena partneri kätt',
        description: `<h5>Laenaja</h5>
          <ol>
            <li>Otsusta, kas soovid olla aluspesus või täiesti alasti.</li>
            <li>Küsi partnerilt näiteks: "Kallis, kas ma võin sinu kätt vähemalt viieks minutiks laenata?"</li>
            <li>Laena partneri käsi ja puuduta oma keha seal, kus soovid puudutust – täpselt nii, nagu soovid, et sind puudutataks.</li>
            <li>Lase kujutlusvõimel vabalt liikuda. Tee seda, mis sulle meeldib. Soovi korral kasuta ka teist kätt.</li>
          </ol>
          <h5>Laenutaja</h5>
          <ol>
            <li>Vali mugav asend ja lõdvesta käsi.</li>
            <li>Lase partneril oma kätt täielikult juhtida.</li>
          </ol>`,
        additional: `<p>Eneserahuldamine on tavaliselt privaatne tegevus. Selle kogemine kahekesi võib suurendada partneritevahelist ausust ja usaldust. Selle kaardi tegevus annab võimaluse näha ja tunda, millist naudingut kallim eelistab, ning õppida uusi viise talle naudingu pakkumiseks.</p>
          <p>See harjutus annab võimaluse laenata partneri kätt, et puudutada neid oma kehaosi, kus soovid puudutust. Mõnikord võib partneri käsi olla erutavam kui sinu enda oma.</p>
          <p>Turvalises ruumis on võimalik laiendada oma seksuaalset mugavustsooni. Võid avastada, et seksuaalne autonoomia ja partnerlus saavad koos eksisteerida.</p>`,
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
        title: 'Tema kõhu silitamine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Hõõru käsi kokku, et need soojaks saada, ja aseta need 10 sekundiks naise alakõhule, tundes, kuidas käte soojus levib partneri kehasse.</li>
            <li>Alusta kõhu õrna silitamist sõrmeotstega.</li>
            <li>Silita aeglaselt ja õrnalt peopesadega. Proovi ringjaid ja edasi-tagasi liigutusi.</li>
            <li>Proovi leida alakõhu keskpunkt, mis võib reageerida nauditavalt mõõduka survega massaažile. Liiguta sõrmi aeglaselt ja sujuvalt edasi-tagasi. Katseta ka värisevate sõrmedega.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Vajadusel tühjenda esmalt põis. See teeb lõõgastumise lihtsamaks.</li>
            <li>Lõdvestu, sule silmad ja tunne emotsioone, mida tunned.</li>
            <li>Lase emotsioonidel tulla, olla ja minna. Hinga.</li>
          </ol>
          <p>Soovitus: kasuta õli, et silitused oleksid veelgi siidisemad.</p>`,
        additional: `<p>Kõhupiirkonnale heldelt tähelepanu pööramine võib aidata naisel selle kehaosaga häälestuda. Mõne naise jaoks võib alakõhu puudutamine tekitada ebamugavust, valu ja tuua esile emotsioone. Õrna ja armastava puudutuse kasutamine aitab neid tundeid järk-järgult vabastada. Selle käigus võivad naudingukeskused aktiveeruda.</p>
          <p>Selline puudutus stimuleerib kõhupiirkonna vereringet. See võib suurendada tundlikkust aistingute suhtes, sealhulgas võimet kogeda naudingut.</p>
          <p>Naise alakõhtu masseerides saab mees luua kaudse kontakti naise tupe A-punktiga. See omakorda annab võimaluse kogeda nii genitaalset kui kogu keha naudingut, rõhutades, et seksuaalsus on enamat kui ainult genitaalne nauding – see hõlmab kogu keha.</p>`,
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
        title: 'Alasti kaisutamine',
        description: `<h5>Andja</h5>
          <ol>
            <li>Alasti olles hoia partnerit armastavalt selja tagant.</li>
            <li>Aseta käsi umbes kaheks minutiks partneri rindkere keskele.</li>
            <li>Seejärel liiguta käsi umbes kaheks minutiks alakõhule.</li>
            <li>Lõpetuseks liiguta käsi puusakondile ja hoia partnerit ühtlase survega enda vastas.</li>
          </ol>
          <h5>Vastuvõtja</h5>
          <ol>
            <li>Lõdvestu ja naudi.</li>
            <li>Hinga sügavalt.</li>
          </ol>`,
        additional: `<p>Alasti kehad teineteist puudutamas: viis teineteisega ühenduda ja lasta seksuaalsel tungil kasvada. Proovi jõuda meeleseisundisse, kus sul pole ootust ega ettekujutust, mis peaks järgmisena juhtuma. Sellisel viisil süüdatud seksuaalne ühendus võib olla nauditavam kui mõistuse plaanid.</p>
          <p>Alastus ilma seksuaalse eesmärgita võib panna sind tundma end haavatavana. Lase emotsioonidel tulla, olla ja minna ning naase naudingu juurde. Vajadusel lugege „Emotsioonide ABC-d”.</p>
          <p>Alasti kaisutamine on alternatiiv pealiskaudsetele intiimsuse ideedele, mida kujundavad meedia ja pornograafia.</p>`,
      },
    },
  },
  {
    imageUrl: 'https://sahradyan.com/open-world/card1.png',
    category: Category.LOVEMAKING,
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
        title: 'Häbememokkade ahvatlemine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Õlita käed ja hõõru neid soojaks.</li>
            <li>Hoia peopesa õrnalt 30 sekundit häbememokkade vastas.</li>
            <li>Kasuta käsi õrnalt ja aeglaselt, et õlitada partneri jalgevahe piirkond.</li>
            <li>Mudige üht suurte häbememokkade poolt pöidla ja nimetissõrme vahel. Liigu õrnalt ja aeglaselt allapoole. Korda sama teisel poolel.</li>
            <li>Hinga sügavalt.</li>
            <li>Mudige väikeseid häbememokki samal viisil.</li>
            <li>Silita päraku ja suguelundite vahelist piirkonda.</li>
            <li>Tõmba suurte häbememokkade nahka kehast eemale ja silita seda eriti õrnalt ning aeglaselt. Pingul nahk on puudutusele tundlikum.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu ja sule silmad.</li>
            <li>Luba naudingul avaneda.</li>
          </ol>`,
        additional: `<p>Välised ja sisemised häbememokad jäävad sageli tähelepanuta, kuid tänu paljudele närvilõpmetele on need väga tundlikud. Häbeme õrn ja aeglane puudutamine annab naisele võimaluse kogeda uusi ja sügavamaid naudinguid. Kliitori kaudne stimuleerimine häbememokkade kaudu lubab erutusel järk-järgult kasvada. See võib avada sensuaalse, voolava, pehme ja mahlase erutuse.</p>
          <p>Mees suudab paremini mõista naise naudingureaktsioone ning tajuda ka omaenda erutuse dünaamikat. Uute oskuste omandamine ja partnerile sügavama naudingu pakkumine kasvatab tema enesekindlust ja süvendab emotsionaalset ühendust.</p>
          <p>See praktika tähistab liikumist pealiskaudsest, soorituskesksest seksuaalsusest sügavama, teadlikuma ja austavama seksuaalsuse poole, mis tunnustab naise keha keerukust ja naudingu mitmetahulisust.</p>`,
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
        title: 'Peenise massaaž',
        description: `<h5>Naine</h5>
          <ol>
            <li>Õlita käed ja hõõru neid soojaks.</li>
            <li>Silita partneri nahka pikkade liigutustega mööda reisi ja kõhtu peenise suunas.</li>
            <li>Võta peenis sujuva liigutusega kätte. Kanna õli aeglaselt peenisele ja munanditele.</li>
            <li>Vasak käsi liigub üles, parem alla ja vastupidi. Liikumine peaks olema pikk ja voolav. Alusta aeglaselt, seejärel muuda kiirust.</li>
            <li>Hoia vasaku käega peenise juurt nii, et eesnahk tõmbub tagasi. Tee parema käega peenise tipus ringe.</li>
            <li>Aseta mõlemad käed ümber peenise. Vasak käsi pöörab paremale, parem käsi vasakule ümber peenise. Käed peaksid liikuma vastassuundades edasi-tagasi ning mööda vart üles ja alla.</li>
            <li>Kui mees palub pausi, masseeri tema kõhtu ja rinda.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja naudi.</li>
            <li>Kui tunne muutub intensiivsemaks, hinga aeglaselt ja sügavalt.</li>
            <li>Kui see muutub liiga intensiivseks, palu paus, et mitte ejakuleerida.</li>
          </ol>`,
        additional: `<p>Tavaliselt on mehed aktiivses rollis. Peenise massaaž lubab neil naudingut vastu võtta ja laseb naisel protsessi juhtida. Selle tulemusel saab mees lihtsalt naasta siin ja praegu olemisse, olla kohal ja keskendunud oma kehas.</p>
          <p>Teadlik ja mitmekülgne stimulatsioon aitab arendada võimet ejakulatsiooni kontrollida, oma keha paremini tajuda ja laiendada erootilise naudingu paletti. Võivad avaneda uued tahud: ta võib kogeda, kuidas seksuaalne nauding suureneb ja levib kogu kehas. Hingamine, häälitsemine, liikumine ja lõdvestumine toetavad seda kogemust.</p>
          <p>Naine avastab võimaluse märgata, kuidas mehe keha reageerib ja mille suhtes see tundlik on. Kui mehe erutus hakkab tippu jõudma, on hea aeg masseerida tema rindkere, et nauding saaks voolata ka ülakehasse.</p>`,
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
            <li>Lähene häbemele aeglaselt. Anna aeglane ja niiske suudlus. Korda seda paar korda.</li>
            <li>Suudle häbememokki pehmelt ja aeglaselt. Kujutle, et suudled naise huuli.</li>
            <li>Kasutades kogu keelepinda, libista keel aeglaselt üle häbememokkade. Tee seda mitu korda.</li>
            <li>Suudle avatud suuga, luues õrna vaakumi. Hoia tihendust ja tõmba huultega häbememokki veidi tagasi.</li>
            <li>Kui naine on väga erutunud, võid keeleotsa ka häbememokkade vahele viia.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja naudi.</li>
            <li>Anna häälega tagasisidet, et mees saaks oma suudlemistehnikat vastavalt kohandada.</li>
          </ol>
          <p>Märkus: Mehele on mugavam, kui naise häbemepiirkond on raseeritud. Samuti võib naise jaoks olla ebamugav, kui mehel on 1–2 päeva pikkune habemetüügas.</p>`,
        additional: `<p>Pehme ja märg keel on justkui naudingu ja erutuse jaoks loodud vahend, mis aktiveerib häbememokkade lugematuid närvilõpmeid. See võib panna naise tundma end armastatu ja aktsepteerituna. Selles tegevuses lamab naine lihtsalt selili ja lõdvestub ning keha loomulik erutusprotsess võtab üle. Kui ta tunneb häbi või ebamugavust oma suguelundite pärast, võib ta enne alustamist mehe silmad kinni siduda.</p>
          <p>Mehe jaoks on see võimalus kogeda sügavamat naudingut, pöörates heldelt tähelepanu naise genitaalpiirkonnale. Naisele naudingu pakkumine võib olla mehele ka füüsiliselt nauditav. Hooliv ja tähelepanelik oraalseks võib olla tervendav – eriti neile, kellel on olnud negatiivseid seksuaalseid kogemusi.</p>
          <p>See praktika aitab luua täidlasemat ja nauditavamat seksuaalsust, kus austatakse naise ja mõlema partneri heaolu ning süvendatakse emotsionaalset ühendust.</p>`,
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
            <li>Suudle piirkonda, kus jalad ja keha kohtuvad. Suudle mehe munandeid õrnalt ja pikalt.</li>
            <li>Liigu aeglaste suudlustega peenise juurest peenisepeani.</li>
            <li>Limpsi ja suudle peenisepea serva.</li>
            <li>Erilise õrnuse ja pika viibimisega suudle peenisepea alumist poolt. Suudle seda nii, nagu see oleks partneri huuled.</li>
            <li>Libista peenisepea suhu ja hellita seda koos peenisepea külgedega.</li>
            <li>Kui mees annab märku, et ta läheneb ejakulatsioonile, masseeri tema kõhtu ja rinda.</li>
            <li>Naudi protsessi ja ole loov.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Sule silmad ja lase naisel ohjad enda kätte võtta.</li>
            <li>Hoia käed külgedel, lõdvesta sõrmed, peopesad ja tuharad ning naudi.</li>
            <li>Kui jõuad ejakulatsiooni lähedale, koputa sõrmenukkidega, et anda märku.</li>
          </ol>
          <p>Märkus: Soovi korral kasuta libestina sülge või õli.</p>`,
        additional: `<p>Selles harjutuses ei pea mees midagi tegema, vaid lihtsalt nautima seda, et keegi temaga tegeleb. Lõõgastumise kaudu saame kehas rohkem naudingut kogeda. Mees sulgeb silmad, et paremini teadvustada, mis tema kehas toimub, ja selgemalt hinnata oma erutuse taset. Siis on ta valmis surfama erineva intensiivsusega lainetel ilma tippu jõudmata. Tuharate lõdvestamine aitab naudingut passiivselt vastu võtta ja laseb seksuaalsel naudingul paremini läbi keha voolata.</p>
          <p>Naise jaoks võib see olla väga nauditav, sest huuled, keel ja ülejäänud suu on samuti tundlikud. Kui naine naudib tavalist suudlemist, võib peenise suudlemine olla samuti väga meeldiv. Kui mees on passiivne vastuvõtja, on naisel võimalus saada paremini ühendust iseendaga.</p>
          <p>Allpool kirjeldatud peenise suudlemine võib viia tavapärasest mehaanilisest ja eesmärgikesksest seksuaalsusest kaugemale, täidlasema, tähenduslikuma ja rahuldavama kogemuseni.</p>`,
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
        title: 'Kunnilingus',
        description: `<h5>Mees</h5>
          <ol>
            <li>Vaata umbes 30 sekundit naise häbememokki eemalt imetleva pilguga.</li>
            <li>Liikudes väga aeglaselt, suudle tema reite sisekülgi, liikudes tupe poole.</li>
            <li>Kata tupe piirkond suudlustega. Seejärel hoia huuli umbes 3 cm kaugusel tupest ja hinga 3 korda sooja õhku tupe suunas.</li>
            <li>Suudle naise häbet pehmelt ja imetlevalt.</li>
            <li>Libista keelt mitu korda üle häbememokkade, kasutades suuremat keelepinda.</li>
            <li>Puuduta kliitorit õrnalt keeleotsaga ja tee selle ümber ringe.</li>
            <li>Ole tähelepanelik naise kehakeele suhtes.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja naudi.</li>
            <li>Lase kehal liikuda ja häälel kõlada.</li>
            <li>Hinga sügavalt kõhtu.</li>
          </ol>`,
        additional: `<p>Huulte, keele ja hingamise kasutamine naudingu pakkumiseks on täiesti erinev sellest, mida sõrmed ja peenis suudavad. Keelel on palju õrnem ja pehmem mõju. Kerge ja aeglane puudutus annab naise kehale aega soojeneda, mis ainult süvendab naudingut.</p>
          <p>Meespartneri jaoks võib see olla rahulduse ja erutuse allikas. Mida suuremat naudingut mõlemad partnerid kogevad, seda rohkem soovivad nad koos seksuaalset kvaliteetaega veeta. Orgasm ei pea olema lõppeesmärk, sest see võib panna naisele surve täita „ootusi” ja blokeerida naudingu voolu.</p>
          <p>Õrn ja pehme lähenemine näitab naisele, et mees hoolib temast ja tahab talle naudingut pakkuda, ning see suurendab vastastikust intiimsust ja usaldust.</p>`,
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
            <li>Niisuta peenisepea sülje või õliga. Tee õrnu ringe tupeava ümber.</li>
            <li>Sisene tuppe äärmiselt aeglaselt, üks sentimeeter korraga. Pärast iga sentimeetrit tee 10-sekundiline paus. Jätka, kuni oled täielikult sees.</li>
            <li>Hoia ohjad enda käes ja naudi.</li>
            <li>Tunneta kogu oma pikkust naise sees; hinga ja lõdvestu.</li>
            <li>Tõmbu aeglaselt välja ja peatu, kui peenisepea on häbememokkade vahel. Korda aeglast uuesti sisenemist.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Hoia tähelepanu sellel, kuidas peenis siseneb üks sentimeeter korraga.</li>
            <li>Keskendu üksikasjalikult, nautides iga liigutust oma tupes.</li>
            <li>Lõdvestu ja hinga sügavalt.</li>
          </ol>`,
        additional: `<p>Meeste seksuaalsust juhib sageli alateadlik seadistus, mis paneb teda tahtma tuppe väga kiiresti siseneda. Alguses võib ta instinktiivselt aeglase sisenemise mõttele vastu hakata. Kui ta märkab, et seisab aeglustamisele vastu, peaks ta püsima ja jätkama aeglast sisenemist. Teadlik kiirustamise vältimine võib avada uued naudingu tasandid. Aeglustamine võimaldab iga hetke tunnet intensiivistada ja naudingukogemust suurendada.</p>
          <p>Aeglane sisenemine suurendab naise tupe tundlikkust ja võimaldab tal tunda peenemaid aistinguid, mis kiire sisenemise puhul võivad märkamatuks jääda. Naise naudingu avanemine ja erutuskudede paisumine võtab aega. Kui esimene sisenemine on väga aeglane, võib see suurendada naise võimet naudingut kogeda.</p>
          <p>Aeglasem sisenemine loob ruumi sügavamale emotsionaalsele ja füüsilisele ühendusele ning õpetab partnereid liikuma automaatsest seksuaalsusest teadlikuma praktika poole. See läheb vastuollu arusaamaga, et hea seks tähendab kiiret tõukamist, ning rõhutab kvaliteeti kvantiteedi asemel.</p>`,
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
        title: 'Paigal olemine',
        description: `<h5>Mees</h5>
          <ol>
            <li>Sisene tuppe väga aeglaselt, õrnalt ja sujuvalt.</li>
            <li>Hoia puusad paigal ja peenis liikumatult tupes.</li>
            <li>Lõdvesta tuharad ja kõhulihased ning peenis lõdvestub naise sees.</li>
            <li>Hinga aeglaselt ja sügavalt suu kaudu kõhtu.</li>
            <li>Keskendu oma peenisele ja tupe soojusele.</li>
            <li>Kui tunned, et erektsioon hakkab kaduma, tee mõned aeglased liigutused ja lõdvestu siis uuesti partneri sees.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvesta puusad, kõht ja tupp.</li>
            <li>Hinga aeglaselt ja sügavalt suu kaudu kõhtu.</li>
            <li>Keskendu tupele ja tunne peenise soojust enda sees.</li>
            <li>Luba naudingul kehas vabalt avaneda.</li>
          </ol>
          <p>Märkus: Kui märkad, et tähelepanu hajub soojuse tundelt, too fookus tagasi suguelundite ühendusele.</p>`,
        additional: `<p>See harjutus annab võimaluse kogeda sügavamat seksuaalset ühendust ilma tavapärase aktiivse liikumiseta. Teineteise suguelunditele keskendumine võib avada sügavalt intiimse ja nauditava jagatud ruumi. Kui sa pole harjunud liikumatult seksuaalses kontaktis olema, võivad mõtted rändama minna. Sel juhul proovi tuua fookus tagasi suguelundite kokkupuutepunkti.</p>
          <p>Paigal olemine aitab tajuda seksuaalenergiat, mis ei põhine hõõrdumisel, vaid sügavamal energiakesksel ühendusel. Nii saame märgata oma suguelundite tundlikkust ja reaktsioone ilma üldse liikumata. Liikumatu seisund võib aidata naisel tajuda tupe seinte loomulikku pulseerimist.</p>
          <p>Sellise hetke jagamine õpetab väärtustama seksuaalset teekonda ennast, muutes seksuaalse kogemuse meditatiivseks praktikaks, kus fookus on hetkel ja aistingutel.</p>`,
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
        title: 'Peenise nautimine',
        description: `<h5>Naine</h5>
          <ol>
            <li>Niisuta peenist õli või süljega.</li>
            <li>Hoia huuled pehmed ja lõdvestunud.</li>
            <li>Silita peenist väga aeglaselt ja õrnalt huulte väliskülgedega. Suletud silmadega tunne, kuidas peenis puudutab sinu huuli.</li>
            <li>Tee nüüd sama huulte keskosa ja sisekülgedega.</li>
            <li>Proovi variatsioone: a) tõmba keel aeglaselt üle peenise, b) libista peenisepea üliaeglaselt suhu, c) tee peenist suus hoides peaga ringjaid liigutusi.</li>
            <li>Ole loov. Keskendu oma naudingule. See, kas mees saab naudingut või mitte, pole siin nii oluline. Kui tunned, et fookus liigub mehele, too see tagasi oma naudingule.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Jäta kõik ootused maha.</li>
            <li>Lõdvestu, ole passiivne vaatleja ja koge aistinguid, samal ajal kui naine naudib sinu peenist.</li>
            <li>Hoidu ejakuleerimisest. Kui vajad pausi, anna partnerile teada.</li>
          </ol>`,
        additional: `<p>Selle kaardi idee on, et naine õpiks kogema naudingut oraalseksi pakkumise ajal. Huuled on mingil tasandil seotud häbememokkadega ja see harjutus võib pakkuda seksuaalset naudingut. Aeglustades on võimalik sügavamalt kogeda ja tunda, mis toimub seal, kus huuled kohtuvad peenisega. Naine on oma naudingu aktiivne looja.</p>
          <p>Mees laenab oma peenise naisele ilma vastastikuse naudingu ootusteta ja laseb naisel kogu protsessi juhtida. Mida rohkem naudingut naine oraalseksist saab, seda sagedamini ja kauem soovib ta seda teha.</p>
          <p>See kaart õpetab, et seksuaalne nauding ei pea olema seotud sooritusega; see võib tulla ehtsast eneseväljendusest, milleks partner annab nõusoleku ja mida ta julgustab.</p>`,
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
        title: 'Kliitori nauding',
        description: `<h5>Mees</h5>
          <ol>
            <li>Niisuta sõrmed õli või süljega.</li>
            <li>Lõdvestunud sõrmedega silita häbememokki mitu korda pehmelt ja aeglaselt.</li>
            <li>Mängi sõrmega kliitori ümber aeglaselt ja õrnalt. Seejärel jätka sama kahe sõrmega.</li>
            <li>Aseta sõrm kliitori peale ja hoia seda seal umbes 20 sekundit.</li>
            <li>Tee kliitoril ringjaid liigutusi. Kasuta edasi-tagasi silitusi ja koputa sõrmega õrnalt. Leia naisele sobiv surve ja liikumisstiil.</li>
            <li>Kui ta annab märku, et on haripunktile lähedal, kasuta pikki silitusi, et tuua nauding alakõhust rindkere keskossa. Koputa sõrmeotstega õrnalt naise rindkere keskele.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja naudi.</li>
            <li>Lase oma hääl valla.</li>
            <li>Kui hakkad orgasmile lähenema, anna partnerile teada, et ta saaks naudingu sinu ülakehasse suunata.</li>
          </ol>`,
        additional: `<p>Kliitor on üks naise keha kõige erogeensemaid tsoone. Selle piirkonnaga mängimine võib viia väljapoole suunatud orgasmini, mis kulmineerub seksuaalse erutuse vabanemisega nagu šampanjakorgi pauk. Naine võib kogeda ka sissepoole suunatud kliitoriorgasmi, kus erutus muutub naudingutundeks, mis laieneb ja levib üle kogu keha. Selle kaardi tegevus lubab mehel aidata naisel suunata kliitoriorgasm üle kogu keha. Nii võib lühike ja intensiivne kliitoriorgasm muutuda pehmemaks ja pikemaks naudinguks.</p>
          <p>Nii õrna ja tundliku elundiga nagu kliitor mängimine ning naudingu üle keha suunamine võib laiendada naise orgasmilist spektrit. Samas võib kliitori üleliigne stimuleerimine piirkonda tegelikult tundetumaks muuta.</p>
          <p>Mehel on võimalus panna naise genitaalne erutus lainetena üle keha levima ja anda talle sellega uusi naudingu liike. Mees muutub nagu dirigendiks, kes juhib naise naudingut oma puudutuse kaudu.</p>`,
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
            <li>Sisesta sõrm tuppe.</li>
            <li>Leia G-punkt, mis on umbes 2–6 cm sügavusel paiknev kühmuline piirkond.</li>
            <li>Hoia sõrme õrnalt umbes 30 sekundit G-punkti vastas ja kujutle, kuidas soojus voolab sõrmest naise kehasse.</li>
            <li>Vajuta G-punkti 2 sekundit, tee seejärel 2-sekundiline paus ja korda tsüklit vähemalt 10 korda. Alusta õrnalt ja suurenda survet järk-järgult.</li>
            <li>Tee G-punkti ümber ringjaid liigutusi vähemalt 2 minutit.</li>
            <li>Liiguta kahte sõrme sisse ja välja kutsuva liigutusega vähemalt 2 minutit.</li>
            <li>Katseta erinevate survete ja kiirustega.</li>
            <li>Arvesta, et naine võib ejakuleerida.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Hinga sügavalt alakõhtu ja lõdvestu.</li>
            <li>Kui tunned, et pead urineerima, hinga veel sügavamalt ja lõdvestu. Tõenäoliselt sa ei tee voodit märjaks, kuid võid väljutada vedelikku.</li>
          </ol>
          <p>Märkus: Linad võivad märjaks saada!</p>`,
        additional: `<p>G-punkt on oluline naudingukeskus umbes 2–6 cm sügavusel tupe eesmisel seinal. Sellel on kühmuline tekstuur nagu suulael. Umbes mündi suurune piirkond paisub erutudes. Ka G-punkti ümbrus on väga tundlik.</p>
          <p>Siin võib mees olla nagu avastaja, kes leiab partneri aardekirstu. Kui G-punkt aktiveerub, tekitab see tavaliselt urineerimisvajaduse tunde, mis on märk, et naise keha läheneb G-punkti orgasmile. See võib kulmineeruda naise ejakulatsiooniga – loomuliku ja nauditava sündmusega.</p>
          <p>Kehas võivad peituda erinevad emotsioonid. G-punkti stimuleerimine võib need tunded vabastada, kui naine tunneb end turvalises ruumis. Ta võib hakata nutma, naerma, karjuma või vihastuda. Kui see juhtub, hoia teda ja jää temaga, kuni emotsioon vaibub. Oluline on lubada tal emotsiooni kogeda ja end vabalt väljendada ilma lohutamata. Kui emotsioonid vabanevad, mõistab keha oma potentsiaali veelgi sügavamaks naudinguks.</p>`,
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
        title: 'A-punkti nauding',
        description: `<h5>Mees</h5>
          <ol>
            <li>Sisesta sõrm umbes 7–12 cm sügavusele tuppe.</li>
            <li>Hoia seda umbes 30 sekundit õrnalt A-punkti vastas ja kujutle, kuidas sõrme soojus voolab otse sõrmeotsast naise kehasse.</li>
            <li>Liiguta sõrme väga õrnade ja aeglaste liigutustega edasi-tagasi ning vasakule-paremale. Suurenda survet järk-järgult, hoides kiiruse aeglasena.</li>
            <li>Sisesta kaks sõrme. Suurenda kiirust ja survet ning lisa veidi vibratsiooni.</li>
            <li>Seda jätkates aseta teise käe peopesa partneri kõhule A-punkti kohal ja avalda survet selles suunas.</li>
            <li>Tee paus, hoides sõrmed paigal. Hinga paar korda sügavalt ja tunne naudingut oma kehas.</li>
            <li>Korda samme #4 ja #5.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja naudi.</li>
            <li>Väljenda naudingut häälega.</li>
            <li>Lase emotsioonidel pinnale tulla, olla ja siis lahkuda.</li>
          </ol>`,
        additional: `<p>A-punkt ehk anterior fornix erogenous area on üks suhteliselt vähe uuritud erogeenseid tsoone ning selle piirkonna stimuleerimine võib pakkuda ainulaadset naudingut. Piirkonna naudingupotentsiaal võib olla uinunud, mis võib väljenduda tuimuses või ülitundlikkuses. Rohkema naudingu saamiseks soovitame A-punkti järjepidevat massaaži. Naine saab seda teha ka ise, kui tema sõrm on piisavalt pikk. Emotsioonide pinnale tõusmine selle piirkonna puudutamisel on loomulik. Vajadusel vaadake „Emotsioonide ABC-d”.</p>
          <p>Selle kaardi tegevus võimaldab mehel omandada konkreetseid oskusi partnerile naudingu pakkumiseks. Paus võimaldab keskenduda teie kehadevahelisele ühendusele ja märgata peente aistingute rikkust. Pausi ajal saab mees suunata tähelepanu sellele, mis toimub tema enda kehas.</p>
          <p>A-punkti massaaž julgustab naisi uurima ja omaks võtma oma keha täielikku naudingupotentsiaali. Lisaks annab see partneritele võimaluse olla naudingurohketel hetkedel teadlikumad ja tähelepanelikumad.</p>`,
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
        title: 'Munanditega mängimine',
        description: `<h5>Naine</h5>
          <ol>
            <li>Silita teda õrnalt pehme käega munandite juurest peenise tipuni.</li>
            <li>Hoia tema munandeid ühes käes ja masseeri neid õrnalt.</li>
            <li>Võta üks munand kätte, siis teine ja lõpuks mõlemad ning tõmba neid õrnalt edasi-tagasi.</li>
            <li>Kasuta sõrmi munandite hellitamiseks ja õrnaks raputamiseks. Proovi erinevaid nurki ja survetugevusi.</li>
            <li>Kui see sobib teile mõlemale, jätka samu tegevusi suu, keele ja huultega. Hoia samal ajal tema peenist käes.</li>
            <li>Ole loov ja naudi protsessi.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja naudi.</li>
            <li>Hoia käed külgedel, lõdvesta sõrmed ja peopesad.</li>
            <li>Vabasta nauding hingamise ja hääle abil.</li>
          </ol>
          <p>Märkus: Raseeritud munandite hellitamiseks on soovitatav kasutada õli.</p>`,
        additional: `<p>Munandid on tavaliselt ühed kõige vähem stimuleeritud erogeensed tsoonid, kuid heatahtlik ja vääriline puudutus võib pakkuda tõelist naudingut. Munandid on väga tundlikud ja õrnad ning neile rohkem tähelepanu pöörates saab naudinguspektrit laiendada. Lisaks võib munandite meeldiv hellitamine ainult suurendada intiimse usalduse ruumi mehe ja naise vahel.</p>
          <p>Mõtle munanditest kui naudingupallidest, mis võivad pakkuda mõlemale partnerile meeldivaid ja erutavaid kogemusi. Partneri munanditega mängides saab naine laiendada ka oma seksuaalset repertuaari. See kaart julgustab mõlemat mõistma, et kogu mehe keha on sensuaalne ja võimeline naudingut tundma, mitte ainult peenisekeskne sooritusmasin.</p>
          <p>Pane tähele: munanditega mängimine võib tuua pinnale ka allasurutud tundeid või isegi valu. Vajadusel pöördu tagasi „Emotsioonide ABC” juurde.</p>`,
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
        title: 'Lusikasasend ja pausid',
        description: `<h5>Mees</h5>
          <ol>
            <li>Tungige naisesse lusikasasendis umbes minutiks, masseerides samal ajal tema selga.</li>
            <li>Lõpeta liikumine ja hoia peenist umbes minut tema sees.</li>
            <li>Pausi ajal silita partnerit õrnalt tema selja alaosast ülespoole. Jätka silitamist.</li>
            <li>Tungige veel minutiks, samal ajal tema selga hõõrudes.</li>
            <li>Tee veel üks paus, hoides peenist umbes minut tema sees.</li>
            <li>Aseta käsi naise rindadele ja hoia teda.</li>
            <li>Lõdvestu ja hinga sügavalt. Tunneta, mis toimub teie mõlema kehas.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja lase aistingutel vabalt läbi keha voolata.</li>
            <li>Vabasta hääl ja lase kehal loomulikult liikuda.</li>
          </ol>`,
        additional: `<p>Naise selja masseerimine penetratsiooni ajal võib suurendada erutust teie mõlema jaoks. Mida suurem erutus, seda sügavamad ja võimsamad on kogetud naudingud. Kui teete pausi, on teil mõlemal lihtsam saada kontakti sellega, mis kehas toimub. See lühike paus lubab kogeda täidetuse tunnet ilma pideva liikumiseta ning tunda ühendust ilma intensiivse stimulatsioonita. Paigal olles ja kehas toimuvale tähelepanu pöörates saavad juba tugevad aistingud veelgi sügavamalt ja detailsemalt tuntavaks.</p>
          <p>Penetratsioon võimaldab saada kontakti ürgsema seksuaalsusega, paus aga lubab keskenduda hetkele ja aistingutele. Kui seksuaalne erutus vaibub, lase sel juhtuda. Nende pauside ajal võib seksuaalne erutus muutuda ühenduse ja õndsuse tundeks.</p>
          <p>See kaart näitab, et seksuaalsus ja armastav intiimsus ei ole vastandid, vaid võivad teineteist toetada.</p>`,
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
        title: 'Peal olles lisanaudinguga',
        description: `<h5>Naine</h5>
          <ol>
            <li>Istu mehe peale ja lase tema peenisel sügavale enda sisse libiseda.</li>
            <li>Liiguta puusi aeglaselt ja sujuvalt üles-alla ning edasi-tagasi.</li>
            <li>Keskendu häbememokkadele ja tupele ning naudi.</li>
            <li>Kui mees surub puusad sinu omade vastu, tee paus.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Aseta padi pea ja puusade alla.</li>
            <li>Hoia puusad lõdvestunud ja liikumatud.</li>
            <li>Kui naine liigub sinu peal, silita tema tuharaid. Seejärel masseeri sõrmedega tema häbememokki sinu peenise ümber pikkade ja sujuvate liigutustega.</li>
            <li>Alusta õrnalt ja katseta siis erinevate intensiivsustega.</li>
            <li>Kui tunned, et erutus ületab 70%, tee paus ja suru naise puusad kindlalt enda vastu.</li>
            <li>Pane tähele, kuidas naise tupp kohtub sinu peenisega viisil, mille ta on valinud.</li>
          </ol>
          <p>Märkus. Vajadusel kasuta õli või sülge, et häbememokad oleksid puudutades niisked.</p>`,
        additional: `<p>Peal olles saab naine vabalt katsetada ja tunda, kuidas partneri peenis liigub tema sees erinevatel viisidel ning milline asend pakub talle kõige rohkem naudingut. Selles asendis saab ta kontrollida penetratsiooni sügavust, nurka ja tempot vastavalt oma eelistustele. Tuharad, reied ja häbememokad on kõik väga erogeensed tsoonid. Nende puudutamine suurendab naise naudingut ning aktiivne roll võib tugevdada naise seksuaalset enesekindlust.</p>
          <p>Mees saab omalt poolt reguleerida oma erutustaset, surudes naise puusad kindlalt enda vastu ja tehes pausi, kui erutus tõuseb üle 70%. See aitab ennetada ejakulatsiooni. Mehel on võimalus õppida ejakulatsioonimehhanisme, et naudingut pikendada. Ta saab kogeda ka vastuvõtja rolli traditsioonilisema aktiivse rolli asemel, kasvatades seeläbi seksuaalset enesekindlust vaatlejana.</p>
          <p>See võib olla põnev allumise ja domineerimise mäng mehe ja naise vahel, kus partnerid mängivad mõlemat rolli.</p>`,
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
        title: 'Boss ja assistent',
        description: `<h5>Boss</h5>
          <ol>
            <li>Enesekindlal, austaval, formaalsel ja armastaval viisil anna ülesanne, mis pakub sulle füüsilist naudingut.</li>
            <li>Kui assistent ei täida ülesannet ootuspäraselt, kutsu ta korrale ja anna täpsemad juhised.</li>
            <li>Kui assistent täidab ülesande eeskujulikult, tunnusta seda.</li>
            <li>Kui assistent ei soovi ülesannet täita, anna talle uus.</li>
          </ol>
          <h5>Assistent</h5>
          <ol>
            <li>Kuula ülesannet tähelepanelikult ja küsimusteta.</li>
            <li>Kui ülesanne on selge ja vastuvõetav, küsi, millal võid seda täitma hakata.</li>
            <li>Avasta endas kuulekas alluv partner, kes soovib täita domineerija korraldusi, jäädes samal ajal oma piiridesse. Proovi leida endale naudingut.</li>
            <li>Kui määratud ülesanne sulle tõesti ei sobi, anna domineerijale teada ja küsi teist ülesannet.</li>
            <li>Kui sulle meeldis bossi ülesanne ja soovid lisaks ülesandeid, küsi juurde.</li>
          </ol>`,
        additional: `<p>Rollimängus saad lasta kujutlusvõimel vabalt lennata ja paluda selliseid naudinguid, mida muidu ei julgeks süütunde või häbita küsida. Ükskõik millised on teie igapäevased rollid, lubab see kaart võtta turvalises keskkonnas nii domineeriva kui alluva rolli. Seda tehes võite kogeda midagi, mis pakub suuremat naudingut ja elevust. Võib-olla mõlemale võrdselt.</p>
          <p>Ühelt poolt võib rollimäng vabastada isiklikust vastutusest, lubades paljastada varjatud ihasid, vajadusi ja soove, mida igapäevaelus ei pruugi väljendada. Teiselt poolt õpetab see nõusoleku ja suhtluse tähtsust, mis on terve seksuaalsuse jaoks hädavajalikud.</p>
          <p>Selle kaardi võimudünaamika aitab mõista, et seksuaalsus võib olla keerukas ja mitmetahuline. See lubab kogeda, et turvaline, kokkulepitud ja mänguline võimudünaamika võib olla seksuaalselt ja emotsionaalselt rahuldust pakkuv ning aidata seostada võimusuhteid naudinguga.</p>`,
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
        title: 'Oraalseks silmsidega',
        description: `<h5>Naine</h5>
          <ol>
            <li>Põlvita seisva mehe ette.</li>
            <li>Alusta tema munandite ja peenise aeglast lakkumist keelega.</li>
            <li>Jätka peenise hellitamist suuga, kasutades abiks käsi. Hoia ühe käega peenist ja silita teisega pehmelt tema munandeid.</li>
            <li>Tee paus ja vaata talle silma, hoides peenist suus.</li>
            <li>Muuda tempot, liigu peaga erinevate nurkade all ning ole keele, huulte ja suuga loov.</li>
            <li>Kui mees annab märku, tee ejakulatsiooni edasi lükkamiseks paus ja vaata talle silma.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Seisa, käed külgedel, lõdvesta tuharad ja jälgi naist pehmete, armastavate silmadega.</li>
            <li>Unusta kõik ootused ja võta vastu kõik, mida sinu naine sulle praegu pakub.</li>
            <li>Kui erutus ületab 70%, anna talle teada, et vajad pausi.</li>
            <li>Pausi ajal vaata naisele silma, lõdvestu ja koge kõike, mis sinu kehas toimub.</li>
          </ol>`,
        additional: `<p>Silmside muudab oraalseksi pelgalt füüsilisest aktist intiimseks ja vastastikuseks kogemuseks, kus mõlemad partnerid austavad teineteise sügavat maskuliinset ja feminiinset energiat.</p>
          <p>Iga peenis on omal moel ilus ja eriline. Siin keskendub naine sellele, mis teeb mehe või tema varustuse imetlusväärseks. Nii tunneb mees end aktsepteerituna. Mees saab imetleda naist, sest naine on valinud talle naudingut pakkuda ja teda vastu võtta just sellisena, nagu ta on.</p>
          <p>Kui mõlemad partnerid on valmis seda harjutust siiralt tegema ning ootustest ja harjumustest lahti laskma, võib tekkida sügavam ühendus. See muudab arusaama, et partner on lihtsalt seksiobjekt, kes on olemas ainult naudingu pakkumiseks.</p>
          <p>Kui naine ei soovi oraalseksi teha, võib ta peenist kätega silitada ja hellitada, vaadates mehele silma. Kui naine on valmis ja soovib, hakkab ta järk-järgult puudutama peenist suu ja keelega.</p>`,
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
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Sulgege silmad ja keskenduge iseendale.</li>
            <li>Puudutage ennast viisil, mis tundub nauditav. Leidke, mis teid erutab.</li>
            <li>Hoidke silmad umbes 2 minutit suletuna ja keskenduge oma aistingule ning naudingule.</li>
            <li>Avage silmad ja vaadake partnerit, samal ajal endale naudingut pakkudes.</li>
            <li>Kogege, mida tunnete, kui pakute mõlemad endale samaaegselt naudingut.</li>
          </ol>`,
        additional: `<p>See kaart annab võimaluse kogeda privaatset naudingut partneri juuresolekul. Seksuaalne nauding kasvab jagatud ruumis. Erutus suureneb sõltuvalt sellest, kas silmad on avatud või suletud.</p>
          <p>Tabud kipuvad takistama seksuaalset eneseväljendust ja tegelike vajaduste rahuldamist. Kultuuriliste ja ühiskondlike tõekspidamiste tõttu võib eneserahuldamise nägemine tekitada häbitunnet. Aga lase see välja: lase sel tulla, olla ja minna. See aitab vabaneda häbist ning tunda sügavamat erutust ja naudingut.</p>
          <p>Naudingu väljendamine partnerile tugevdab seksuaalset enesekindlust. See on tegevus, mis võimaldab luua sügavat usaldust ja aktsepteerimist. Kui igaüks vastutab oma naudingu eest, võib tekkida ootustevaba ruum, mis pakub mõlemale partnerile vabaduse tunnet.</p>`,
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
        title: 'Laena mehe peenist',
        description: `<h5>Naine</h5>
          <ol>
            <li>Küsi mehelt: "Kas ma võin laenata sinu lõtva või kõva peenist ja sellega endale naudingut pakkuda?"</li>
            <li>Kui ta nõustub, kasuta peenist, et avastada, mis sind erutab ja sulle naudingut pakub.</li>
            <li>Soovi korral niisuta peenist õli või süljega.</li>
            <li>Kui otsustad, et tahad tunda peenist oma tupes, sisesta see viisil, mis tundub sulle hea.</li>
            <li>Kasuta peenist oma naudingu fookustamiseks.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Vasta naise palvele ausalt.</li>
            <li>Kui vastus on "jah", lõdvestu ja lase naisel kasutada peenist nii, nagu ta soovib.</li>
            <li>Ole passiivne, kuid samal ajal teadlik sellest, mis sinu kehas toimub.</li>
            <li>Kui tunned, et erutus ületab 70%, anna naisele märku, et vajad pausi.</li>
          </ol>`,
        additional: `<p>Enamasti kontrollib mees oma peenist ise, kuid nüüd on naise kord teha sellega seda, mis talle meeldib. Peenise laenamine annab talle võimaluse katsetada lõtva või kõva peenise võimalikke kasutusviise, avastada oma keha nauditavaid piirkondi ja teostada fantaasiaid. Juhtroll võib anda naisele turvatunde ja vastutuse oma heaolu eest.</p>
          <p>Meespartner annab kontrolli partnerile üle, et kogeda, mis tunne on mitte midagi teha, lubades naisel kasutada peenist nii, nagu ta soovib. Naine saab väärtustada mehe keha instrumendina, millega endale naudingut pakkuda.</p>
          <p>Peenise laenamine aitab murda traditsioonilistest soorollidest, kus mees on „peal” ja naine „all”.</p>`,
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
        title: 'Armastamine peegli ees',
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Võtke peegli ees asend, kus mõlemad partnerid näevad, kuidas peenis aeglaselt sisse ja välja libiseb.</li>
            <li>Peeglisse vaadates keskenduge sellele, mis teid kõige rohkem erutab.</li>
            <li>Nautige kordamööda erutust avatud ja suletud silmadega. Tundke peenise sisse-välja liikumist.</li>
            <li>Looge aeg-ajalt silmside enda ja partneri peegeldusega peeglis.</li>
          </ol>`,
        additional: `<p>Peegli kõrval armastamine lubab näha ennast ja partnerit kõrvaltvaataja pilgu läbi. See on nagu otseülekanne, mida näed korraga osaleja ja vaatlejana, mis võib olla väga erutav.</p>
          <p>Rohkem kui üks peegel annab veelgi huvitavama perspektiivi, sest näed erinevaid nurki.</p>
          <p>Kui märkad, et hindad ennast või teineteist, naase vaatleja rolli ja suuna tähelepanu nendele kehaosadele, mis sind erutavad, et naudingut suurendada. See teeb mõlema keha aktsepteerimise lihtsamaks.</p>
          <p>See harjutus aitab mõista, kuidas te näete ja tajute end seksuaalselt ning kuidas võite paista oma partnerile.</p>`,
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
        title: 'Puusade kaheksakujulised liigutused',
        description: `<h5>Mees</h5>
          <ol>
            <li>Esimesed 30 sekundit hoia silmad suletuna ja keskendu peenisele.</li>
            <li>Tee peenisega tupes järgmisi liigutusi: • liiguta puusi küljelt küljele, • tee puusadega ringjaid liigutusi, • tee puusadega kaheksakujulisi liigutusi.</li>
            <li>Tee neid liigutusi väga õrnalt, aeglases tempos ja väikese amplituudiga.</li>
            <li>Kui naine annab märku, et vajab pausi, tee paus.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Lõdvestu, sule silmad ja hinga.</li>
            <li>Keskendu peentele aistingutele, mida tupes tunned.</li>
            <li>Kui tunned ebamugavust, anna märku, et vajad pausi.</li>
          </ol>`,
        additional: `<p>Kaheksakujulised liigutused stimuleerivad tupe erinevaid piirkondi, sealhulgas G-punkti ja A-punkti. See võib avada naudinguid, mis tavalise sisse-välja penetratsiooniga sageli kättesaamatuks jäävad. Mitmekesine laineline stimulatsioon pikendab naudingut ja võib viia intensiivsemate orgasmideni, suurendades teadlikkust vaagnapiirkonna aistingutest ja reaktsioonidest.</p>
          <p>Mehe jaoks võib puusamäng suurendada liikuvust ja luua hea aluse erutuse tundmiseks ka suguelunditest kõrgemal.</p>
          <p>Puusamäng võib naise tupes tekitada ka ebamugavaid aistinguid. Sel juhul tehke paus, hoidke peenis paigal ja lubage naise tunnetel pinnale tõusta, olla ja mööduda.</p>
          <p>Liigutuste teadlik kujundamine muudab armastamise mehaanilisest aktist spontaanseks ja loovaks eneseväljenduseks.</p>`,
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
            <li>Õlita peenis.</li>
            <li>Hoia peenist käes ja silita naise häbet.</li>
            <li>Sisesta peenise ots õrna ja sujuva liigutusega häbememokkade voltide vahele, liigutades seda üles ja alla.</li>
            <li>Tee kerge puudutusega ringe ja muid liigutusi tupeava ümber.</li>
            <li>Aeglaselt ja vaid mõned korrad sisesta peenisepea tupeavasse, hoia seda seal paar sekundit ja tõmbu siis tagasi.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Hoia tähelepanu punktil, kus peenis kohtub sinu kehaga.</li>
          </ol>`,
        additional: `<p>Häbeme ja tupe õrnaga mängimine võib esile kutsuda peeneid aistinguid, mida tugevam stimulatsioon ei pruugi tekitada, muutes ühenduse partneriga sügavamaks ja tähenduslikumaks.</p>
          <p>Mees saab pakkuda partnerile peenisega õrna naudingut, kogedes seda samal ajal ka ise. Tugev stimulatsioon võib samuti hea olla, kuid nende tehnikate olemus on erinev. Õrna stimulatsiooni ajal kasutab mees peenist tundliku kehaosana, mitte ainult penetratsiooni instrumendina.</p>
          <p>Kliitori otsese stimulatsiooni võib sellest harjutusest välja jätta, sest intensiivsus võib summutada peenemad ja sügavamad naudingu tasandid. Häbememokkade puudutamine võib siiski tekitada ka kliitori peent stimulatsiooni. Selline seksuaalne mäng võib viia mitut tüüpi orgasmideni, sealhulgas tupeava, U-punkti, G-punkti, kliitori ja kombineeritud orgasmini.</p>
          <p>See praktika julgustab partnereid aeglustama ja protsessi nautima, mitte kiirustama penetratsiooni ja orgasmi poole.</p>`,
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
        title: 'G-punkti tabamine',
        description: `<h5>Naine</h5>
          <ol>
            <li>Istu mehe süles ja sisesta tema peenis oma tuppe.</li>
            <li>Liiguta puusi voolavalt edasi-tagasi ja küljelt küljele, vaadates, milline liikumine stimuleerib G-punkti.</li>
            <li>Proovi ka lamada selili, jalad mehe õlgadel, peenis tupes. Liiguta puusi üles-alla ja küljelt küljele, tehes ringjaid liigutusi. Leia endale sobivad liigutused.</li>
            <li>Keskendu füüsilisele naudingule.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Lama selili, padi puusade all.</li>
            <li>Hoia puusad lõdvestunud ja liikumatud.</li>
            <li>Lase naisel sisestada sinu peenis oma tuppe, et stimuleerida tema G-punkti.</li>
            <li>Kui ta soovib asendit muuta, põlvita ja aseta naise jalad oma õlgadele.</li>
            <li>Luba tal leida sobiv kiirus ja intensiivsus, mis suurendab sinu naudingut.</li>
            <li>Kui tunned, et erutus ületab 70%, anna naisele märku, et on aeg paus teha.</li>
          </ol>`,
        additional: `<p>Naise G-punkt on oluline naudingupunkt tupe eesmisel seinal umbes 2–6 sentimeetri sügavusel. Siin võtab naine initsiatiivi ja katsetab erinevaid kiirusi, et neid piirkondi uurida. Need asendid kaasavad väga tõenäoliselt G-punkti. Soovitatav on proovida ja uurida erinevaid asendeid ning tehnikaid.</p>
          <p>Sel viisil saab stimuleerida ka teisi naise naudingukeskusi. Selline mäng võib viia erinevat tüüpi orgasmideni: G-punkti, A-punkti, kliitori, emakakaela või kombineeritud orgasmini.</p>
          <p>Urineerimisvajaduse tunne näitab, et G-punkt on aktiivne. Kui naine on lõdvestunud, on võimalik nähtus, mida nimetatakse naise ejakulatsiooniks. Soovitatav on panna voodile rätik.</p>
          <p>See harjutus võimaldab naisel avastada oma tupe naudingupunkte ning tagumiku patjadele tõstmine annab parema ligipääsu G-punktile.</p>`,
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
        title: 'Peata kirg',
        description: `<h5>Mees</h5>
          <ol>
            <li>Selle harjutuse ajal on naine peal.</li>
            <li>Pärast umbes 2 minutit vahekorda (kui mees ei anna varem märku, et vajab pausi), peatage liikumine umbes 30 sekundiks.</li>
            <li>Pausi ajal lõdvesta keha ja lõug ning hinga sügavalt alakõhtu. Proovi välja hingata loomuliku pehme häälega.</li>
            <li>Esimese pausi ajal keskendu sellele, kuidas tupp on sinu peenise ümber.</li>
            <li>Teise pausi ajal hoia tähelepanu rindkere keskosas.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Selle harjutuse ajal on mees all.</li>
            <li>Pärast umbes 2 minutit vahekorda (kui mees ei anna varem märku, et vajab pausi), peatage liikumine umbes 30 sekundiks.</li>
            <li>Pausi ajal lõdvestu ja keskendu sellele, kuidas tupp on tema peenise ümber.</li>
            <li>Jätka liikumist umbes 2 minutit viisil, mis on sulle kõige nauditavam.</li>
            <li>Tee veel üks paus. Aseta käed mehe rinnale ja hoia tähelepanu südamepiirkonnas.</li>
          </ol>`,
        additional: `<p>Nagu teame, on seksuaalvahekord enamasti aktiivne tegevus. Paus võimaldab kogeda, millised tunded tekivad siis, kui liikumine peatub. Võib-olla tunned väga konkreetset aistingut suguelundites ja ülejäänud kehas. Mida erutunum olid enne pausi, seda intensiivsem võib olla värin või kananahk. Mitmekülgsematele naudingutasanditele ligipääsemiseks soovitame lõdvestada keha ja lõua. Hinga sügavalt alakehasse ja hinga välja pehme oigega.</p>
          <p>Teadlik paus armastamise ajal muudab sind teadlikumaks oma keha aistingutest, soodustades täielikku kohalolu ja teineteise tajumist. See toetab tunnet, nagu mõlemad partnerid muutuksid üheks.</p>
          <p>Tasakaalustades tavapärast tegevuskeskset seksuaalsust, avab paus uue tasandi – hetkes olemise.</p>`,
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
        title: 'A-punkt peenisega',
        description: `<h5>Naine</h5>
          <ol>
            <li>Alusta selili lamades, puusad veidi tõstetud, partneri süles, peenis sinu sees. Kohanda asendit nii, et tunneksid oma A-punkti, mis asub umbes 7–12 cm sügavusel tupe eesosas.</li>
            <li>Pööra end ümber kõhuli nii, et mees on sinu peal, ja liiguta puusi edasi-tagasi ning üles-alla. Leia, mis pakub naudingut, ja võimenda seda.</li>
            <li>Keskendu ainult füüsilisele naudingule.</li>
            <li>Tee liikumises paus, kui mees annab märku, et ta on lähedal.</li>
          </ol>
          <h5>Mees</h5>
          <ol>
            <li>Istu tagumikul, jalad välja sirutatud. Naine istub selle harjutuse ajal sinu süles, sinu peenis tema sees.</li>
            <li>Muuda asendit nii, et põlved on maas, toetad end sirgetele kätele ja oled naise kohal, et tal oleks piisavalt ruumi liikuda.</li>
            <li>Lase naisel oma naudingut võimendada, sekkumata liigselt oma liigutustega.</li>
            <li>Kui hindad, et erutus on üle 70%, anna naisele märku, et pead tagasi hoidma.</li>
          </ol>`,
        additional: `<p>Sellistes asendites armastamine aitab avastada tupe piirkondi, mis jäävad sageli teenimatult tähelepanuta. See lubab naisel võtta kontrolli, et leida oma tupe sees olevad naudingutsoonid. Need asendid võimaldavad stimuleerida anterior fornix erogenous zone’i, mis asub umbes 7–12 cm sügavusel tupes kõhupoolsel küljel.</p>
          <p>A-punkti stimuleerimise käigus võib stimuleerida ka teisi naise naudingupunkte – võimalikud on G-punkti orgasm, emakakaela orgasm või kombineeritud orgasm.</p>
          <p>Meespartner saab lubada naisel avastada naudingutsoone oma tupes.</p>`,
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
            <li>Sisene tuppe aeglaselt nii sügavale, kui naisele on nauditav.</li>
            <li>Tõmba peenis umbes 2 cm välja, väga aeglaselt, nii et suurem osa peenisest jääb endiselt tuppe, ja seejärel tõuka peenis sügavale sisse.</li>
            <li>Tee aeg-ajalt pause, et keskenduda sellele, mida sinu keha tunneb.</li>
            <li>Kui naine annab märku ebamugavusest, vähenda survet ja tõugete sügavust.</li>
          </ol>
          <h5>Naine</h5>
          <ol>
            <li>Hinga sügavalt alakõhtu ja lõdvesta tupelihased.</li>
            <li>Keskendu peenise ja tupe kontaktile ning võimsatele aistingutele.</li>
            <li>Kui tunned kehas ebamugavust, anna partnerile märku, et ta vähendaks survet ja tõugete sügavust.</li>
          </ol>`,
        additional: `<p>Naise sügavamad naudingukeskused vajavad aega ja massaaži, et avaneda ja naudingule alistuda. Kiire sügav penetratsioon peenisega võib mõnele naisele olla nauditav, teistele ebamugav. Aeglane ja tundlik penetratsioon aitab naisel kogeda naudingut lõõgastumise kaudu. Kui tegevus on nauditav ning naine on erutunud ja märg, võib meespartner liikumise intensiivsust järk-järgult suurendada.</p>
          <p>Asend, kus naine tõmbab põlved rinnale, võimaldab peenisel tungida sügavamale ja kohtuda emakakaelaga. Emakakaela orgasm toimub siis, kui naine on täielikult lõdvestunud ja alistuvas asendis. Kui pinnale tõusevad tugevad emotsioonid, luba neil tulla, olla ja mööduda.</p>
          <p>Emakakaela ja peenise vaheline kontakt võib luua sügavama füüsilise ja emotsionaalse ühenduse ning läheduse ja täidetuse tunde. Kui mõlemad partnerid on lõdvestunud ja hoiavad tähelepanu peenise ning tupe kontaktil, võivad nad kogeda südames armastavat tunnet.</p>
          <p>Sügav ühendus lubab partneritel kogeda seksuaalsust püha kohtumisena, mitte ainult füüsilise aktina.</p>`,
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
        description: `<h5>Mõlemad partnerid</h5>
          <ol>
            <li>Leidke mugav asend külili lamades, pea toetumas partneri reiele.</li>
            <li>Võtke aega, et vaadata teineteise suguelundeid armastava pilguga.</li>
            <li>Tooge huuled lähemale ja hingake kuuma õhku partneri suguelunditele.</li>
            <li>Pöörake aeglaselt suuga heldelt tähelepanu partneri suguelunditele viisil, mis teile kõige rohkem meeldib; näiteks suudelge või limpsige õrnalt.</li>
            <li>Soovi korral silitage partneri keha aeglaselt ja hellalt.</li>
            <li>Tehke kordamööda 30-sekundilisi pause, et imetleda partneri suguelundeid. Kogege, mis tunne on, kui ihaldusväärne partner pakub teile samal ajal naudingut.</li>
          </ol>`,
        additional: `<p>69 on asend, kus mõlemad partnerid saavad samal ajal anda ja vastu võtta. Küps ja teadlik seksuaalsus on vajalik, et mõlemad partnerid saaksid täielikku naudingut kogeda.</p>
          <p>69 on väga intiimne koosolemise asend. Mõlemad partnerid on paljastatud, avatud ja haavatavad. Kohtle alati oma partnerit ja tema suguelundeid austuse ja armastusega. Kui üks partner pakub naudingut ja teine võtab seda vastu imetluses ja aukartuses, võib see viia õndsa ühenduse seisundisse.</p>
          <p>Selle tegevuse ajal võib tekkida omamoodi sõnadeta partnerlus, kus mõlemal partneril on harmooniline intuitiivne tunnetus, kas vastu võtta, imetleda või naudingut anda. See tugevdab intiimsust, usaldust ja turvatunnet.</p>
          <p>Kui kehad liiguvad elegantses tantsus, võib sündida ajatu ruum ja ühtsus.</p>`,
      },
    },
  }
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
        isFree: card.isFree ?? false,
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