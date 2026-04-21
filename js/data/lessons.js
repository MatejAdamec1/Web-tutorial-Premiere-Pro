window.LESSONS = [
  {
    id: "uvod",
    menu: "Úvod",
    title: "Úvod",
    subtitle: "Pár informací na začátek.",
    hasAI: false,
    html: `
      <h2 id="pro-koho">Pro koho je tutoriál</h2>
      <p>
        Adobe Premiere Pro je komplexní program sloužící pro střih a postprodukci
        videí či filmů. Díky jeho široké škále funkcí a univerzalitě je oblíbený
        mezi profesionály i amatéry. Na první pohled však může jeho rozhraní působit
        složitě, zejména pro ty, kteří s digitálním střihem teprve začínají.
      </p>

      <figure class="doc_figure doc_figure--small">
        <img src="img/kapitola_1/premiere_logo.png" alt="Logo Adobe Premiere Pro">

        <figcaption>
          <div class="figure_title">Logo Premiere Pro</div>
          <div class="figure_source">
            Zdroj:
            <a href="https://www.adobe.com/products/premiere.html"
              >
              Adobe Premiere Pro
            </a>
          </div>
        </figcaption>
      </figure>

      <p>
        Tutoriál je tedy navržen tak, aby ho mohli následovat všichni i bez 
        předchozích zkušeností s podobnými programy. Vysvětluje základní pojmy,
        pracovní postupy a funkce, které se při úpravě videa běžně používají.
        Cílem je poskytnout vám pevný základ, na kterém můžete dále stavět a rozvíjet
        své dovednosti v oblasti střihu a softwaru Premiere Pro.
      </p>

<br>

      <h2 id="cile">Jak s tutoriálem pracovat</h2>
      <p>
        Návod je rozdělen do několika kapitol, které vás postupně provedou základními kroky
        práce v programu a vysvětlí potřebné pojmy. Doporučuji je procházet postupně, jelikož vás povedou od základů až k 
        pokročilým funkcím a technikám. Pokud si v průběhu budete potřebovat něco zopakovat,
        můžete se kdykoliv vrátit k předchozím tématům a znovu si je projít.
      </p>

      <p>
        Pro přepínání mezi kapitolami můžete použít levý panel nebo tlačítka v dolní části stránky.
        Na širších obrazovkách se v pravém panelu zobrazují jednotlivé podkapitoly aktuálního tématu.
      </p>
      
      <p>
        Po kliknutí na název podkapitoly se můžete rychle přesunout na vybranou část textu. Přepínač mezi světlým
        a tmavým motivem je na větších zařízeních umístěn ve spodní části pravého panelu. Na menších
        obrazovkách se kvůli přehlednosti obsah pravého panelu nezobrazuje a přepínač motivu je přesunut
        do horní části rozhraní.
      </p>

      <p>
        Některé kapitoly obsahují i praktické ukázky. V rámci těchto pasáží máte možnost následovat
        konkrétní kroky a souběžně s návodem si je vyzkoušet v programu. Ukázky jsou navrženy tak, aby 
        prakticky odrážely vybrané probírané funkce a pomohly vám je tak lépe pochopit. Průběžně tedy v tutoriálu
        budeme rozvíjet a upravovat váš první projekt.
      </p>

      <p>
        <i>Praktické části nenásledují popsaný doporučený pracovní postup z kapitoly "Postprodukční workflow",
        ale jsou zaměřené na konkrétní témata probraná v aktuální kapitole.</i>
      </p>

      <p>
        Na konci kapitol se nachází kvíz, který vám pomůže zkontrolovat, zda jste pochopili probírané téma.
        Počet pokusů je neomezený a při špatné odpovědi se vám ukáže správné řešení.
      </p>

      <p>
        V tutoriálu jsou rozebrány i funkce využívající umělou inteligenci. Text a kapitoly, které o daných funkcích pojednávají,
        jsou označeny speciálním <ai-term>štítkem</ai-term>.
      </p>

<br>

      <h2 id="poznamka">Finální poznámka</h2>
      <p>
        Tutoriál je vytvořen na verzi Adobe Premiere Pro 26.0.1, která je v době psaní aktuální. 
        Vzhledem k tomu, že se jedná o software, který je pravidelně aktualizován, může se stát, že některé funkce nebo rozhraní
        se v budoucnu změní. 
      </p>
    `,
    quizKey: "uvod",
  },

  {
    id: "param_vid",
    menu: "Parametry videa",
    title: "Technické parametry videa",
    subtitle: "Základní parametry videa a jejich význam.",
    hasAI: false,
    html: `
      <h2 id="proc-je-potreba-tyto-vlastnosti">Proč je potřeba znát tyto vlastnosti</h2>
      <p>
        Při práci s videem je důležité mít základní přehled alespoň o jeho základních technických vlastnostech,
        jako jsou například rozlišení, snímková frekvence a datový tok. 
        Tyto parametry totiž zásadně ovlivňují kvalitu výsledného videa, jeho velikost a kompatibilitu s různými zařízeními a 
        cílovými platformami.
      </p>

      <p>
        Pokud například natáčíte video pro sociální sítě, je důležité zvolit správné rozlišení a poměr stran, 
        aby se vaše video zobrazovalo správně na různých zařízeních. Naopak pokud pracujete na profesionálním projektu, 
        může být potřeba zvolit vyšší rozlišení a snímkovou frekvenci pro dosažení lepší kvality obrazu.
      </p>

      <p>
        Znalost těchto parametrů vám tedy pomůže lépe porozumět tomu, jak různé nastavení ovlivňuje výsledný soubor
        a jak optimalizovat své video pro různé účely. Zároveň se s nimi bude pracovat i v rámci tohoto tutoriálu, 
        bylo by vhodné se s nimi seznámit předtím, než půjdete dál.
      </p>

<br>

      <h2 id="rozliseni">Rozlišení</h2>
      <p>
        Asi tou nejznámější vlastností videa je jeho rozlišení, které vyjadřuje počet obrazových bodů snímku videa.
        Má velký vliv na míru detailů a estetiku obrazu, avšak samo o sobě není zárukou dobré kvality.
        Rozlišení je udáváno v pixelech, což jsou malé body, které tvoří celkový obraz. Nejčastěji se tyto pixely, při zápisu rozlišení, 
        uvádí jako šířka x výška, například 1920x1080, což znamená, že video má 1920 pixelů na šířku a 1080 pixelů na výšku.     
      </p>

      <p>
        Pokud jste se někdy setkali s pojmy jako HD, Full HD nebo 4K, tak právě tyto termíny se vztahují k různým úrovním rozlišení.
        Zároveň se také v některých případech používá zkrácené označení podle výšky, například 1080p (pro 1920x1080).
      </p>

      <table class="doc_table">
        <caption>Známá rozlišení</caption>
        <thead>
            <tr>
                <th>Označení</th>
                <th>Rozlišení</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>SD</td>
                <td>720x480</td>
            </tr>
            <tr>
                <td>HD</td>
                <td>1280x720</td>
            </tr>
            <tr>
                <td>Full HD</td>
                <td>1920x1080</td>
            </tr>
            <tr>
                <td>UHD</td>
                <td>3840x2160</td>
            </tr>
            <tr>
                <td>4K</td>
                <td>4096x2160</td>
            </tr>
        </tbody>
      </table>  

      <p>
        Čím vyšší zvolíte rozlišení, tím detailnější a kvalitnější bude obraz. Nicméně nelze říci, že to nejvyšší rozlišení je vždy
        nejlepší volbou. S výškou rozlišení se zvedá počet pixelů, a každý nový pixel znamená další data, která musí počítač uložit
        a zpracovat. Je tedy potřeba zvážit, jaké rozlišení je pro váš projekt vhodné, 
        aby bylo dosaženo dobré rovnováhy mezi kvalitou a velikostí souboru.
      </p>

<br>

      <h2 id="pomer-stran">Poměr stran</h2>
      <p>
        Poměr stran je další důležitou vlastností videa, která úzce souvisí s rozlišením. Vyjadřuje poměr mezi šířkou a výškou obrazu.
        Na rozdíl právě od rozlišení, neudává poměr stran počet pixelů, ale určuje tvar obrazu. 
        Například poměr stran 16:9 znamená, že šířka obrazu je 16 jednotek a výška je 9 jednotek. Typ poměru se odvíjí 
        od způsobu, jakým bylo video natočeno, ale také od toho, pro jakou platformu je určeno.
      </p>

      <p>
        Nejčastěji se dnes setkáte právě s poměrem 16:9, který je standardem pro většinu moderních videí, například pro
        YouTube nebo filmy. Na sociálních sítích, jako je třeba Instagram, se pro fotky často používá poměr stran 1:1
        (čtverec) a pro novější reels videa zase 9:16 (na výšku).
        Starším poměrem je 4:3, který byl dříve standardem pro televizní vysílání.
      </p>

<br>

      <h2 id="snimkova-frekvence">Snímková frekvence</h2>
      <p>
        Snímková frekvence, často označovaná jako FPS (frames per second), udává, kolik jednotlivých snímků (obrázků) se zobrazuje za jednu sekundu videa.
        Čím vyšší snímkovou frekvenci zvolíte, tím plynulejší bude pohyb ve videu. Avšak i zde platí, že vyšší není vždy lepší. 
        Pro většinu běžných videí je standardní snímkovou frekvencí 24 nebo 30 FPS, což poskytuje přirozený vzhled pohybu. 
        Pro sportovní nebo akční záběry se často používá 60 FPS, které umožňuje zachytit rychlé pohyby s větší ostrostí.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_2/framerate.jpg" alt="Různé snímkové frekvence">

        <figcaption>
          <div class="figure_title">Různé snímkové frekvence</div>
          <div class="figure_source">
            Zdroj:
            <a href="https://www.wowza.com/blog/frame-rate-beginners-guide-live-streaming"
              >
              Wowza
            </a>
          </div>
        </figcaption>
      </figure>

<br>

      <h2 id="datovy-tok">Datový tok</h2>
      <p>
        Datový tok, často označovaný také jako bitrate, udává, kolik dat je potřeba pro uložení jedné sekundy videa.
        Nejčastěji se vyjadřuje v jednotkách kb/s nebo Mb/s. Tento parametr má velký vliv jak na výslednou kvalitu videa,
        tak i na velikost exportovaného souboru.
      </p>

      <p>
        Obecně platí, že čím vyšší datový tok video má, tím více informací se do něj může uložit. To obvykle znamená lepší kvalitu obrazu,
        protože komprese nemusí být tak silná. Na druhou stranu ale vyšší datový tok zároveň znamená větší velikost souboru.
        Pokud je datový tok příliš nízký, mohou se ve videu objevit různé nežádoucí artefakty, například rozmazání detailů,
        ztráta ostrosti nebo viditelné bloky v obraze.
      </p>

      <p>
        Vyšší rozlišení nebo vyšší FPS obvykle vyžadují také vyšší datový tok, jinak by se kvalita videa mohla zhoršit.
        Nelze tedy říci, že existuje jedna univerzálně správná hodnota. Vždy záleží na tom, pro jaký účel video vytváříte
        a kde bude výsledný soubor přehráván nebo nahráván.
      </p>

<br>

      <h2 id="kodek">Kodek</h2>
      <p>
        Kodek je technologie, která slouží ke kódování a dekódování videa nebo zvuku. Jinými slovy jde o způsob,
        jakým jsou data videa uložena do souboru a jak je potom zařízení nebo program znovu přečte a přehraje.
        Bez vhodného kodeku by video buď zabíralo obrovské množství místa, nebo by jej zařízení nedokázalo správně otevřít.
      </p>

      <p>
        Při práci s videem je důležité neplést si kodek s formátem souboru. Formát je například MP4, MOV nebo AVI,
        tedy typ kontejneru, do kterého jsou data uložena. Kodek je naproti tomu konkrétní metoda komprese uvnitř tohoto souboru,
        například H.264 nebo H.265. Dva soubory se stejnou příponou tedy mohou používat odlišné kodeky a chovat se jinak
        z hlediska kvality, velikosti i kompatibility.
      </p>

      <p>
        Kodeky se používají hlavně proto, že nekomprimované video by mělo extrémně velkou velikost. Komprese proto umožňuje
        uložit video výrazně úsporněji. Některé kodeky jsou navrženy tak, aby nabízely dobrou kvalitu při menší velikosti souboru,
        jiné se více zaměřují na snadné přehrávání nebo rychlejší zpracování při editaci.
      </p>

      <p>
        Pro začátečníky je dobré si zapamatovat především to, že kodek ovlivňuje výslednou kvalitu, velikost souboru
        i kompatibilitu videa. Nejde tedy jen o technický detail navíc, ale o důležitou volbu, se kterou se při exportu
        videa setkáte velmi často.
      </p>
    `,
    quizKey: "param_vid",
    sources: [
      {
        text: "ALZA, Rozlišení",
        url: "https://www.alza.cz/slovnik/rozliseni-art17301.htm"
      },
      {
        text: "ADOBE, Select a perfect aspect ratio for your film",
        url: "https://www.adobe.com/creativecloud/video/discover/aspect-ratio.html"
      },
      {
        text: "ADOBE, What is a frame rate?",
        url: "https://www.adobe.com/ie/creativecloud/video/discover/frame-rate.html"
      },
      {
        text: "MAGIX, WHAT IS A VIDEO BIT RATE AND HOW IT AFFECTS VIDEO",
        url: "https://www.vegascreativesoftware.com/us/video-editing/what-is-video-bitrate-and-how-change-easily/"
      },
      {
        text: "ADOBE, Video codec",
        url: "https://www.adobe.com/creativecloud/file-types/video/codec.html"
      }
    ]
  },

  {
    id: "workflow",
    menu: "Postprodukční workflow",
    title: "Jak funguje postprodukční workflow",
    subtitle: "Seznámení s obvyklým pracovním postupem při úpravě videa.",
    hasAI: false,
    html: `
      <h2 id="co-workflow">Co je to workflow?</h2>
      <p>
        Workflow, neboli pracovní postup, je systematický způsob, jakým se organizuje a provádí práce na projektu.
        Jedná se tedy o nějaké rozdělení pracovních činností do logických fází. Díky tomuto rozdělení je možné
        lépe plánovat práci, efektivněji využívat čas a zároveň zajistit, že se na nic nezapomene. 
      </p>

      <p>
        Představte si, že máte natočené video a chcete ho upravit. Můžete se do toho pustit bez jakéhokoliv plánu, 
        ale pravděpodobně byste se brzy ztratili v množství úkolů, které je potřeba udělat. Pokud si ale jednotlivé úkony
        rozdělíte do několika fází, tak získáte jasnější představu o tom, co je potřeba udělat a v jakém pořadí. 
        Postupným plněním fází také dostanete pocit určitého postupu a můžete tím předejít například stavu vyhoření.
      </p>

<br>

      <h2 id="import-organizace">Import a organizace dat</h2>
      <p>
        Před začátkem úpravy videa je potřeba importovat natočené materiály. Při importování se 
        zvolené materiály prováží s otevřeným projektem a budou připravené k práci v programu. Nemusíte se bát, že by změny, které 
        provedete v Premiere Pro, ovlivnily původní videa, protože program ukládá úpravy separátně a vaše soubory tak zůstávají nedotčené.
       </p>

      <p>
        Materiálem se rozumí všechny soubory, které budete potřebovat pro vytvoření finálního díla. Může se tak jednat o jedno či více
        videí, zvukových stop hudby, ale také i obrázky.
      </p>

      <p>
        Při práci na rozsáhlejším projektu, kde například budete pracovat s několika různými záběry nebo jinými objekty, je
        dobrou praxí si tyto materiály logicky organizovat. Organizace může předejít zdlouhavému hledání v naimportovaných materiálech
        a pomůže vám udržet přehled o tom, co máte k dispozici.
      </p>

<br>

      <h2 id="strih-upravy">Střih a úpravy</h2>
      <p>
        V momentě, kdy máte naimportované materiály, můžete začít se samotným střihem. Střih je dobré si rozdělit do dvou samostatných fází
        a to na hrubý a jemný střih.
      </p>

      <p>
        Při hrubém střihu je hlavním úkolem vybrat záběry, které chcete použít, a umístit je do požadovaného pořadí. Tyto klipy 
        pak můžete dále upravit, například oříznout nebo odstranit hluchá místa. Důležité je však vytvořit hrubou kostru finálního díla,
        která odráží základní strukturu příběhu, který chcete vyprávět.
      </p>

      <p>
        Po dokončení hrubého střihu přichází na řadu jemný střih. V tomto bodě dochází k dolazení střihových bodů, tedy míst, kde se
        jednotlivé klipy střídají. Cílem je dosáhnout plynulých přechodů mezi záběry, například precizním zkrácením začátků či konců klipů.
        Video v podstatě projdete znovu od začátku až do konce, kontrolujete a případně upravujete místa střihů. Díky druhému průchodu
        také můžete odhalit možné nedostatky, které jste mohli při hrubém střihu přehlédnout, například chybějící záběry.
      </p>

<br>

      <h2 id="zvuk-barvy-efekty">Zvuk, Barvy a Efekty</h2>
      <p>
        Když budete spokojeni se střihem, můžete začít další fázi. Ta se zaměřuje na úpravu zvuku, barev, přidávání grafických prvků
        či dalších efektů. 
      </p>

      <p>
        Zvuk je často opomíjenou, ale velmi důležitou součástí videa. Správná práce se zvukem může výrazně zlepšit
        celkový dojem z videa a pomoci vytvořit požadovanou atmosféru.
        Pod pojmem práce se zvukem si můžete představit například vyrovnání hlasitosti jednotlivých stop, odstranění šumu,
        přidání hudby nebo zvukových efektů.
      </p>

      <p>
        Natočený materiál může působit příliš tmavě, nevýrazně nebo barevně nevyváženě. Pomocí základních úprav je možné upravit jas,
        kontrast, sytost barev nebo vyvážení bílé. Barevné úpravy mohou mít dva hlavní cíle. Prvním je korekce, 
        tedy sjednocení a technické vylepšení obrazu, aby jednotlivé záběry působily konzistentně. Druhým cílem může být stylizace,
        kdy se pomocí barev vytváří určitá atmosféra nebo nálada videa.
      </p>

      <p>
        Práce s efekty a grafickými prvky bývá ze všech fází časově nejnáročnější, hlavně pokud používáte více efektů nebo 
        vytváříte složitější animace. Efekty lze použít k mnoha různým účelům, například k vytvoření přechodů mezi záběry,
        změně perspektivy, či jiným obrazovým úpravám. Grafické prvky, jako jsou titulky, loga nebo jiné vizuální doplňky, 
        zase mohou pomoci lépe předat informace, zvýraznit důležité části videa nebo jen zlepšit jeho estetiku.
      </p>

<br>

      <h2 id="export">Export</h2>
      <p>
        Na závěr celého procesu přichází fáze exportu. Exportem se rozumí proces, kdy se všechny úpravy a změny, které jste v
        programu provedli, uloží do jednoho finálního video souboru. Zde je potřeba zvolit správné nastavení, které bude odpovídat
        vašim potřebám a požadavkům cílové platformy, na kterou video nahráváte.
      </p>

<br>

      <h2 id="finalni-poznamky">Finální poznámky</h2>
      <p>
        Workflow, zde popsaný, není jediným možným způsobem, jak pracovat s videem. Každý tvůrce může mít svůj 
        vlastní přístup a způsob organizace práce. Nicméně tento postup je poměrně běžný a může být dobrým výchozím 
        bodem pro ty, kteří s úpravou videa teprve začínají.
      </p>

      <p>
        Důležité je také zmínit, že jednotlivé fáze workflow nejsou vždy striktně oddělené. Může se stát,
        že při práci s efekty narazíte na problém, který vás donutí vrátit se zpět k úpravě střihu.
        Tento pracovní postup je tedy orientačním rámcem, který vám poskytuje určité milníky a pomáhá vám lépe se orientovat
        v celkovém procesu úpravy videa.
      </p>
    `,
    quizKey: "workflow",
    sources: [
      {
        text: "ADOBE. Assemble and refine footage in post-production process",
        url: "https://www.adobe.com/creativecloud/video/post-production.html "
      },
      {
        text: "JAGO, Maxim. Adobe Premiere Pro 2025 Release: Classroom in a Book. San Jose, California: Adobe Press, 2025. ISBN 978-0-13-538283-7."
      }
    ]
  },

  {
    id: "rozhrani",
    menu: "Rozhraní a panely",
    title: "Rozhraní a panely",
    subtitle: "Seznámení s panely a workspaces.",
    hasAI: false,
    html: `
      <h2 id="rezim-edit-panely">Režim Edit a panelové prostředí</h2>

      <p>
        Částí programu, kde budete trávit většinu času, je Edit mode. Tento režim slouží jako hlavní pracovní plocha, která je dále rozdělena
        do jednotlivých panelů. To jsou samostatné části rozhraní, které mají specifickou funkci, například náhled videa nebo
        zobrazení seznamu importovaných materiálů.
      </p>

      
      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_4/rezim_edit.png" alt="Režim Edit rozhraní">

        <figcaption>
          <div class="figure_title">Režim Edit</div>
        </figcaption>
      </figure>

      <p>
        Premiere Pro poskytuje různé přednastavené workspaces, česky pracovní plochy, což jsou již připravená rozvržení panelů. 
        Jednotlivé předkonfigurované workspaces jsou přizpůsobeny pro různé účely, například pro práci se zvukem nebo pro barevné úpravy.
        Jako uživatel mezi nimi můžete přepínat v pravém horním rohu rozhraní pod tlačítkem Workspaces. Alternativně je můžete 
        najít v záložce Window > Workspaces.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_4/workspaces_nabidka.png" alt="Workspaces nabídka">

        <figcaption>
          <div class="figure_title">Workspaces nabídka</div>
        </figcaption>
      </figure>

<br>

      <h2 id="prizpusobeni-pracovniho-prostoru">Přizpůsobení pracovního prostoru</h2>
      <p>
        Rozložení panelů však není fixní a můžete si ho přizpůsobit podle svých potřeb. Panely lze libovolně zobrazovat/skrývat,
        přesouvat nebo měnit jejich velikost. Všechny dostupné panely najdete v záložce Window, kde jej stisknutím 
        na název panelu můžete zobrazit. Zobrazené panely jsou označeny symbolem ✓ a pokud na název kliknete znovu,
        tak se tento panel skryje. 
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_4/window_zalozka.png" alt="Window záložka">

        <figcaption>
          <div class="figure_title">Záložka s panely</div>
        </figcaption>
      </figure>

      <p>
        Při kliknutí a podržení lišty panelu jej můžete přemístit. Když ho přetáhnete, zobrazí se vám zvýrazněné pole,
        do kterého se při pustění panel ukotví. Pokud ho pustíte do středu jiného panelu, tak se oba spojí a vytvoří
        skupinu panelů. Tato skupina pak v daný moment může zobrazit jen jeden z těchto panelů, přičemž mezi nimi můžete
        přepínat kliknutím na název panelu v horní části skupiny. Když panel přetáhnete mimo zvýrazněná pole, tak se z hlavního okna
        programu oddělí a chová se jako samostatné okno, které můžete umístit kamkoliv na obrazovku.
      </p>

      <p>
        Přizpůsobit lze i velikost jednotlivých panelů. Při podržení na okraji panelu jej můžete roztáhnout nebo zmenšit. 
        Pokud chcete upravit velikost panelů, které jsou ve skupině, musíte změnit velikost celé skupiny.
      </p>

      <p>
        Přizpůsobené workspace si můžete uložit a následně kdykoliv znovu načíst. Uložení se provádí v pravém horním rohu okna, 
        nebo v záložce Window > Workspaces. Po stisknutí Save as New Workspace se vám zobrazí dialog, 
        kde zadáte název pro tento workspace a potvrdíte. Uložené workspace se pak objeví v seznamu a můžete mezi nimi přepínat.
      </p>

<br>

      <h2 id="prehled-panelu">Přehled důležitých panelů</h2>

      <h3 id="project-panel">Project Panel</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_4/project_panel.png" alt="Project Panel">

        <figcaption>
          <div class="figure_title">Project Panel</div>
        </figcaption>
      </figure>

      <p>
        Tento panel je místem, kde se zobrazují všechny importované materiály, ale i objekty vytvořené přímo v programu, například
        sekvence, nebo určité grafické prvky. Odtud můžete materiály vyhledávat, vybírat a přetahovat do časové osy. Premiere Pro také dovoluje 
        v tomto panelu materiály organizovat do logických složek, tzv. bins.
      </p>

<br>

      <h3 id="timeline-panel">Timeline Panel</h3> 

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_4/timeline_panel.png" alt="Timeline Panel">

        <figcaption>
          <div class="figure_title">Timeline Panel</div>
        </figcaption>
      </figure>

      <p> 
        Timeline Panel, neboli panel časové osy, je hlavním pracovním prostorem pro střih. Zde skládáte jednotlivé klipy za sebe, 
        upravujete jejich délku, přidáváte přechody, efekty a pracujete se zvukem. Na časové ose jsou jednotlivé klipy rozděleny
        do video a audio stop, které umožňují pracovat s více vrstvami současně. Každá časová osa reprezentuje jednu sekvenci,
        což je samostatný objekt v programu, který může obsahovat různé klipy, grafické prvky a další objekty.
      </p>

<br>

      <h3 id="source-monitor">Source Monitor</h3> 

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_4/source_monitor_panel.png" alt="Source Monitor Panel">

        <figcaption>
          <div class="figure_title">Source Monitor Panel</div>
        </figcaption>
      </figure>

      <p> 
        Source Monitor slouží k náhledu a předvýběru jednotlivých klipů před jejich vložením do časové osy. Jakmile v Project Panelu
        dvakrát kliknete na soubor, otevře se právě zde. V tomto panelu můžete nastavit vstupní (In) a výstupní (Out) bod. 
        Tím určíte, která část klipu se vloží do sekvence. 
      </p>

<br>

      <h3 id="program-monitor">Program Monitor</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_4/program_monitor_panel.png" alt="Program Monitor Panel">

        <figcaption>
          <div class="figure_title">Program Monitor Panel</div>
        </figcaption>
      </figure>

      <p>
        Program Monitor zobrazuje náhled aktuálního stavu vaší sekvence, tedy toho, co máte na časové ose. 
        Čas náhledu odpovídá aktuální pozici přehrávací hlavy. Na rozdíl od Source Monitoru nepracuje s jednotlivými klipy, 
        ale s celou kompozicí. Během přehrávání můžete sledovat změny střihu, efektů i barevných úprav.
      </p>

<br>

      <h3 id="tools-panel">Tools Panel</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_4/tools_panel.png" alt="Tools Panel">

        <figcaption>
          <div class="figure_title">Tools Panel</div>
        </figcaption>
      </figure>

      <p>
        Tools Panel obsahuje základní nástroje pro práci s klipy na časové ose. Mezi nejdůležitější patří například Razor Tool
        pro rozdělení klipu nebo Selection Tool pro výběr a přesouvání klipů.
      </p>

<br>

      <h3 id="effects-panel">Effects Panel</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_4/effects_panel.png" alt="Effects Panel">

        <figcaption>
          <div class="figure_title">Effects Panel</div>
        </figcaption>
      </figure>

      <p>
        Effects Panel obsahuje seznam dostupných video a audio efektů a přechodů. Odtud můžete efekty přetahovat přímo na klipy 
        na časové ose. Efekty jsou rozděleny do kategorií. Najdete zde například korekce barev, transformace obrazu, 
        rozostření nebo různé zvukové úpravy. Samotné nastavení efektu se však vždy provádí v panelu Effect Controls.
      </p>

<br>

      <h3 id="effect-controls-panel">Effect Controls Panel</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_4/effect_controls_panel.png" alt="Effect Controls Panel">

        <figcaption>
          <div class="figure_title">Effect Controls Panel</div>
        </figcaption>
      </figure>

      <p>
        Panel Effect Controls umožňuje upravovat vlastnosti vybraného klipu. Zobrazí se zde například parametry pozice, měřítka, 
        rotace nebo průhlednosti. Pokud na klip aplikujete efekt, jeho nastavení se objeví právě v tomto panelu. 
        Effect Controls je klíčový při práci s animacemi, protože umožňuje nastavovat keyframes a měnit tak hodnoty parametrů v čase.
      </p>

    `,
    quizKey: "rozhrani",
  },

  {
    id: "projekt",
    menu: "Projekt",
    title: "Projekt v Premiere Pro",
    subtitle: "Vytvoření a nastavení projektu.",
    hasAI: true,
    html: `
      <h2 id="co-je-projekt">Co je to projekt?</h2>
      <p>
        Projekt představuje základní pracovní soubor v programu Adobe Premiere Pro, ve kterém jsou uloženy informace o práci uživatele.
        Neobsahuje však samotné video, audio ani obrazová data, ale pouze odkazy na tyto soubory a informace o tom, jak jsou
        použity.
      </p>

      <p>
        Jinými slovy, projekt funguje jako \"návod\", podle kterého program skládá výsledné video. Ukládá například informace o tom, jaké
        klipy jsou použity, v jakém pořadí jsou umístěny na časové ose nebo jaké efekty jsou aplikovány. Důsledkem tohoto principu je, že
        projekt je závislý na původních souborech. Pokud by došlo k jejich přesunutí, přejmenování nebo smazání, Premiere Pro 
        je nedokáže automaticky najít a je potřeba je znovu propojit.
      </p>

<br>

      <h2 id="vytvoreni-projektu">Vytvoření projektu</h2>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/uvodni_okno.png" alt="Úvodní okno">

        <figcaption>
          <div class="figure_title">Úvodní okno</div>
        </figcaption>
      </figure>

      <p>
        Projekt lze vytvořit po spuštění programu pomocí tlačítka New Project, nebo přes nabídku File > New > Project.
        Po zvolení této možnosti se zobrazí dialog, ve kterém lze zadat název projektu a vybrat jeho umístění. Název projektu 
        by měl co nejlépe vystihovat jeho obsah a zvolené umístění by mělo odpovídat způsobu organizace pracovních souborů. 
        V praxi je vhodné vytvořit pro každý projekt samostatnou složku, do které budou ukládány také související materiály. 
        Takové uspořádání usnadňuje orientaci a snižuje riziko ztráty vazeb mezi projektem a použitými soubory.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/dialog_projekt.png" alt="Dialog pro vytvoření projektu">

        <figcaption>
          <div class="figure_title">Dialog pro vytvoření projektu</div>
        </figcaption>
      </figure>

      <p>
        Součástí dialogu pro vytvoření projektu je také možnost zvolit Template, tedy přednastavenou šablonu projektu. 
        Tyto šablony jsou přizpůsobeny různým typům výstupu a mohou obsahovat například předem připravené sekvence nebo uspořádání 
        vhodné pro konkrétní způsob použití. Premiere Pro nabízí například šablonu Social Media Template Project, která je 
        určena pro sociální sítě a je nastavena tak, aby lépe odpovídala formátům videí publikovaných na těchto platformách. 
        Kromě přednastavených šablon je možné využít i vlastní šablony nebo šablony získané z jiných zdrojů.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/project_settings.png" alt="Pokročilé nastavení projektu">

        <figcaption>
          <div class="figure_title">Pokročilé nastavení projektu</div>
        </figcaption>
      </figure>

      <p>
        Pro pokročilá nastavení projektu lze využít ikonu ozubeného kolečka vedle tlačítka Create. 
        Po jeho stisknutí se zobrazí okno, ve kterém lze nastavit například způsob zobrazení času v projektu, 
        tedy zda bude délka a pozice klipů vyjadřována pomocí časového kódu (Timecode) nebo počtem snímků (Frames). 
        Dále je možné určit i další parametry, například umístění dočasných souborů vznikajících během práce. 
        Pokud je potřeba tato nastavení změnit později, lze je otevřít také přes nabídku File > Project Settings > General, 
        případně v jiné odpovídající kategorii nastavení.
      </p>

<br>

      <h2 id="import-materialu">Import materiálů</h2>
      <p>
        Po vytvoření projektu je potřeba do něj importovat materiály, se kterými budete pracovat. Pokud jste v dialogovém okně 
        pro vytvoření projektu nezaškrtli možnost Skip Import mode, tak po zvolení Create se vám program automaticky přepne do režimu
        Import.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/import_rezim.png" alt="Import režim">

        <figcaption>
          <div class="figure_title">Režim Import</div>
        </figcaption>
      </figure>

      <p>
        Zde můžete procházet složky vašeho počítače či připojených zařízení a vybírat soubory, které chcete do projektu přidat.
        Při přejetí nad souborem se vám zobrazí náhled a zaškrtávací políčko, pro vybrání daného souboru pak stačí kliknout.
        Materiály, zvolené pro import, budou mít políčko zaškrtnuté, opětovným stisknutím políčka jej odeberete z výběru.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/organize_media.png" alt="Organize media">

        <figcaption>
          <div class="figure_title">Organize media</div>
        </figcaption>
      </figure>

      <p>
        V pravé části rozhraní se nachází sekce Import settings. V záložce Organize Media je možnost vytvořit a pojmenovat bin, do kterého se
        zvolené materiály při importu automaticky umístí.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/create_new_sequence.png" alt="Create new sequence">

        <figcaption>
          <div class="figure_title">Create new sequence</div>
        </figcaption>
      </figure>

      <p>
        Dále je v této sekci možné zaškrtnout možnost Create new sequence. Toto nastavení vytvoří při importu novou sekvenci na časové ose
        a do ní umístí importované klipy.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/auto_transcribe.png" alt="Automatic transcription">

        <figcaption>
          <div class="figure_title">Automatic transcription</div>
        </figcaption>
      </figure>

      <p>
        V případě, že budete pro váš projekt potřebovat vytvořit titulky, můžete zaškrtnout možnost <ai-term>Automatic transcription</ai-term>. Program
        pak automaticky přepíše mluvenou řeč importovaných souborů do transkriptu. Lze zde nastavit jazyk, ve kterém se bude přepis
        provádět, avšak v době psaní tohoto textu není zatím podporována čeština. Premiere Pro dokáže rozlišovat mezi různými
        mluvčími, to lze zapnout v poli Speaker Labeling.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/media_analysis.png" alt="Media analysis">

        <figcaption>
          <div class="figure_title">Media analysis</div>
        </figcaption>
      </figure>

      <p>
        Poslední záložkou v sekci Import Settings je <ai-term>Media analysis</ai-term>. Pokud tuto možnost zvolíte, program provede analýzu
        naimportovaných souborů. Díky tomu je pak možné vyhledávat mezi materiály podle obrazových či audio vlastností.
      </p>

      <p>
        Poté, co zvolíte materiály a nastavíte import, stačí kliknout na tlačítko Import a zvolené soubory se přidají do projektu. 
        Do Import režimu se můžete vždy znovu přepnout pomocí tlačítka Import v levém horním rohu rozhraní.
      </p>

      <p>
        Import můžete provést i alternativním způsobem přes nabídku File > Import..., nebo stiskem pravého tlačítka v Project panelu
        a zvolením možnosti Import.... Následně se otevře okno s průzkumníkem souborů, ve kterém můžete procházet vaše soubory
        klasickým způsobem.
      </p>

<br>

      <h2 id="organizace-materialu">Organizace materiálů</h2>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/new_bin.png" alt="Vytvoření binu">

        <figcaption>
          <div class="figure_title">Vytvoření binu</div>
        </figcaption>
      </figure>

      <p>
        Po importu najdete všechny propojené materiály v Project panelu. Dobrou praxí je si tyto materiály systematicky organizovat. K tomu 
        slouží právě bins, tedy logické složky v rámci projektu, do kterých můžete materiály třídit. Bin lze vytvořit kliknutím
        pravým tlačítkem myši do prázdného prostoru v panelu Project a zvolením možnosti New Bin. Je možné ho pojmenovat
        a materiály do něj vložit přetažením.
      </p>

      <p>
        Struktura bins by měla být přehledná a mělo by být jasné, co v jednotlivých složkách najdete. Rozdělení bins může 
        vypadat například takto:
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/bins_ukazka.png" alt="Příklad struktury bins">

        <figcaption>
          <div class="figure_title">Příklad struktury bins</div>
        </figcaption>
      </figure>

      <ul>
        <li>Videa - pro video soubory</li>
        <li>Obrázky - pro obrázkové soubory</li>
        <li>Hudba - pro soubory s hudbou</li>
        <li>Zvukové efekty - pro soubory se zvukovými efekty</li>
        <li>Sekvence - pro jednotlivé sekvence</li>
        <li>Grafika - pro grafické objekty vytvořené v programu</li>
      </ul>

      <p>
        Takové uspořádání vám pomůže rychleji najít potřebné materiály a udržet přehled o tom, co máte k dispozici. 
        Organizace materiálů je důležitá hlavně u rozsáhlejších projektů, kde pracujete s velkým množstvím souborů.
      </p>

<br>

    <h2 id="poznamka-organizace">Poznámka k organizaci</h2>
      <p>
        Organizace materiálů v rámci projektu je důležitá také pro práci v týmu. Pokud na projektu pracuje více lidí,
        je potřeba, aby všichni měli přehled o tom, kde se co nachází. Díky tomu se předejde zbytečnému hledání a zmatkům, 
        které mohou vzniknout.
      </p>

      <p>
        Také se doporučuje organizovat materiály již na úrovni souborů v počítači. Například vytvořením složek pro jednotlivé typy
        materiálů v kořenové složce projektu. Tím zlepšíte přehled i mimo Premiere Pro.
      </p>

<br>
<hr>
<br>

      <h2 id="prakticka-projekt">Praktická část</h2>
      <p>
        V této části si prakticky vyzkoušíte postup při zakládání projektu, import materiálů a procesy s tím spojené.
      </p>

      <h3 id="prakticka-priprava-projektu">Příprava</h3>
      <p>
        Před začátkem práce na projektu je potřeba pořídit materiály, které budete v programu upravovat. Pro ukázkový projekt budete
        pracovat na videu o cestě vlakem a materiály budete mít připravené níže.
      </p>

      <p>
        Stáhněte si materiály z tohoto odkazu: <a class="m-link" href="https://drive.google.com/uc?export=download&id=1690JdHvlCNsZieIM0j8p7AT_Fy0nP5Ff" 
        target="_blank">Odkaz na materiály</a>
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/prakt_tvorba_slozky.png" alt="Tvorba složky pro projekt">

        <figcaption>
          <div class="figure_title">Tvorba složky pro projekt</div>
        </figcaption>
      </figure>

      <p>
        Po stažení materiálů si v systémové složce Videa vytvořte složku pro tento projekt
        a pojmenujte ji Cesta vlakem - projekt. Stažený soubor s materiály otevřete v rozbalovacím programu, například WinRar nebo 7-Zip.
        Materiály ze zipu rozbalte do složky Cesta vlakem - projekt.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/prakt_tvorba_extrakt.png" alt="Tvorba složek Videa a Obrázky">

        <figcaption>
          <div class="figure_title">Tvorba složek Videa a Obrázky</div>
        </figcaption>
      </figure>

      <p>
        Následně si adresář otevřete a zde vytvořte složku Videa, umístěte do ní materiály nádraží1.mov, nádraží2.mov, cesta_vlakem1.mov,
        cesta_vlakem2.mov a cesta_vlakem3.mov. Dále si zde vytvořte složku Obrázky a přesuňte do ní soubory logo_bílá.png a logo_černá.png.
      </p>

<br>

      <h3 id="prakticka-zalozeni-projektu">Založení projektu</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/prakt_uvodni.png" alt="Úvodní okno">

        <figcaption>
          <div class="figure_title">Úvodní okno</div>
        </figcaption>
      </figure>

      <p>
        Otevřete Program Adobe Premiere Pro, zobrazí se vám úvodní okno s nedávno otevřenými projekty. Pokud je toto váš první projekt,
        seznam bude prázdný. Pro založení nového projektu klikněte na modré tlačítko New Project.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/prakt_dialog.png" alt="Formulář pro založení projektu">

        <figcaption>
          <div class="figure_title">Formulář pro založení projektu</div>
        </figcaption>
      </figure>

      <p>
        Otevře se vám formulářové okno, kde nastavte název projektu na Cesta vlakem. V části Location stiskněte tlačítko Browse a 
        vyberte složku Cesta vlakem - projekt, kterou jste pro tento projekt vytvořili. Do této složky se vám pak uloží projektový soubor.
        U Template zvolte možnost None a ujistěte se, že zaškrtávací pole Skip Import mode je nevyplněné. 
        Pokud vše sedí jako na obrázku, stiskněte Create.
      </p>

      <p>
        Umístění projektu samozřejmě bude odpovídat složce na vašem počítači, proto není problém, pokud není stejné jako na obrázku výše.
        Pouze se ujistěte, že je to opravdu složka, kterou jste si pro tento projekt vytvořili.
      </p>

<br>

      <h3 id="prakticka-import">Import souborů</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/prakt_import1.png" alt="Umístění projektové složky v režimu Import">

        <figcaption>
          <div class="figure_title">Umístění projektové složky v režimu Import</div>
        </figcaption>
      </figure>

      <p>
        Po stisknutí Create se přepnete do režimu Import. Zde na levém panelu v sekci Local zvolte umístění Movies, které
        na Windows odpovídá systémové složce Videa. Zde najděte vaši projektovou složku Cesta vlakem - projekt, tu otevřete.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/prakt_import2.png" alt="Import materiálů">

        <figcaption>
          <div class="figure_title">Import materiálů</div>
        </figcaption>
      </figure>

      <p>
        Zobrazí se vám složky Videa a Obrázky, kde máte své materiály. Otevřete složku Videa a zaškrtněte všechny soubory.
        Tím je vyberete pro import do projektu. V horní části klikněte na Cesta vlakem - projekt, tím se vrátíte zpět do adresáře vaší
        projektové složky. Pokud vyberete pro import celou složku, naimportují se všechny soubory, které se v ní nachází.
        Vyzkoušejte si to zaškrtnutím složky Obrázky.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/prakt_import3.png" alt="Náhled zvolených materiálů">

        <figcaption>
          <div class="figure_title">Náhled zvolených materiálů</div>
        </figcaption>
      </figure>

      <p>
        Pokud se vám podařilo zvolit všechny materiály správně, měli byste vidět jejich náhled v dolní části rozhraní.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/prakt_import4.png" alt="Import settings">

        <figcaption>
          <div class="figure_title">Import settings</div>
        </figcaption>
      </figure>      

      <p>
        V panelu Import settings, zvolte pouze možnost Media analysis.
        Stiskněte modré tlačítko Import a zvolené soubory se přidají do projektu.
      </p>

<br>

      <h3 id="prakticka-organizace">Organizace materiálů v projektu</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/prakt_organ1.png" alt="Project panel po importu">

        <figcaption>
          <div class="figure_title">Project panel po importu</div>
        </figcaption>
      </figure>     

      <p>
        Po importu bude váš Project panel vypadat podobně jako na obrázku. Zatím není složité se mezi malým počtem materiálů orientovat,
        ale jakmile byste pracovali v rozsáhlejším projektu, mohli byste se ztratit v množství souborů. Proto je dobrou praxí si 
        materiály organizovat, například podle typu souboru.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/prakt_organ2.png" alt="Tvorba Binů">

        <figcaption>
          <div class="figure_title">Tvorba Binů</div>
        </figcaption>
      </figure>     

      <p>
        Vytvořte si pomocí tlačítka New Bin dva biny, ty pojmenujte Videa a Obrázky.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/prakt_organ3.png" alt="Tvorba Binů">

        <figcaption>
          <div class="figure_title">Tvorba Binů</div>
        </figcaption>
      </figure>  

      <p>
        Dále přetažením roztřiďte materiály do binů. Pokud nevíte, kam jednotlivé materiály patří, vzpomeňte si na souborovou strukturu 
        vaší projektové složky, kde také máte složky Videa a Obrázky. Obsah binů v programu bude odpovídat obsahu těchto složek.
      </p>

      <p>
        Nyní jste úspěšně založili projekt, naimportovali materiály a zorganizovali je v rámci projektu. Abyste uložili svou práci,
        můžete použít klávesovou zkratku Ctrl + S, nebo záložku File > Save. Projektový soubor se uloží do složky 
        Cesta vlakem - projekt.
      </p>

    `,
    quizKey: "projekt",
    sources: []
  },

  {
    id: "sekvence",
    menu: "Sekvence a časová osa",
    title: "Sekvence a časová osa",
    subtitle: "Seznámení se sekvencemi a prací na časové ose.",
    hasAI: false,
    html: `
      <h2 id="co-je-sekvence">Co je to sekvence?</h2>
      <p>
        Pojem sekvence označuje samostatný objekt, který představuje pracovní prostor pro střih videa. 
        V rámci projektu může existovat více sekvencí, přičemž každá z nich funguje nezávisle na ostatních.
      </p>

      <p>
        Představte si, že máte prázdný list papíru. Na ten postupně přilepujete obrázky, kreslíte tvary nebo 
        přidáváte další listy. Tento list je analogií k sekvenci v Premiere Pro. Jednotlivé prvky 
        na něm představují klipy, grafiku, titulky nebo zvukové stopy. Výsledkem je postupně sestavený celek, 
        tedy výsledné video.
      </p>

      <p>
        Každá sekvence má svou vlastní pracovní plochu, kterou je časová osa (timeline). Ta určuje nejen pořadí 
        jednotlivých klipů, ale také jejich délku, vzájemné překrývání a synchronizaci obrazu se zvukem. 
        Právě práce na časové ose tvoří základ digitálního střihu.
      </p>

      <p>
        V praxi se často používá více sekvencí v rámci jednoho projektu. Například si můžete vytvořit jednu sekvenci 
        pro hrubý střih, jinou pro finální verzi nebo oddělené sekvence pro jednotlivé části videa. Tyto sekvence lze 
        následně kombinovat, například vkládáním jedné sekvence do druhé. Vložené sekvence se v Premiere Pro nazývají
        Nested sequences.
      </p>

      <h2 id="vytvoreni-sekvence">Vytvoření sekvence</h2>
      <p>
        Sekvenci lze vytvořit několika způsoby. Prvním z nich je, jak bylo zmíněno v minulé kapitole, zaškrtnutí možnosti
        Create new sequence při importu materiálů. Tím se vytvoří nová sekvence, která má na časové ose vložené
        importované materiály.
      </p>

      <p>
        Další způsob umožňuje vytvořit sekvenci přímo z klipů. Pokud vyberete jeden či více klipů v Project panelu a kliknete na ně
        pravým tlačítkem myši, zobrazí se nabídka, kde lze zvolit možnost New Sequence From Clip. Toto vytvoří novou sekvenci,
        která bude mít na časové ose umístěny zvolené klipy. Parametry této sekvence se automaticky přizpůsobí vlastnostem klipů.
      </p>

      <p>
        Třetím způsobem je manuální vytvoření skrze New Item tlačítko ve spodní části Project panelu. Po kliknutí na tento symbol
        se zobrazí nabídka, kde se při zvolení možnosti Sequence otevře dialog pro nastavení parametrů nové sekvence. Po nastavení
        a stisknutí Ok se prázdná sekvence vloží do projektu.
      </p>

      <p>
        Možností, jak vytvořit sekvenci je více, ale pro potřeby tutoriálu jsou tyto tři dostačující.
      </p>

      <h2 id="nastaveni-sekvence">Nastavení sekvence</h2>
      <p>
        Každá sekvence má vlastní parametry, které ovlivňují výslednou podobu videa. Mezi ty základní 
        patří rozlišení, snímková frekvence (FPS) a display format, tedy způsob zobrazení času na časové ose.
        Tato nastavení určují, jakým způsobem budou klipy v sekvenci interpretovány. Například rozdílná snímková frekvence 
        může ovlivnit plynulost pohybu, zatímco rozlišení určuje kvalitu obrazu.
      </p>

      <p>
        V rámci jednoho projektu je možné pracovat s více sekvencemi s odlišnými parametry. Jedna sekvence může být 
        například určena pro klasické video v poměru stran 16:9, zatímco jiná může být optimalizována pro sociální sítě 
        ve vertikálním formátu 9:16.
      </p>

      <p>
        Pokud vytvoříte sekvenci skrze New Item, otevře se vám dialog pro nastavení parametrů. Zde můžete vybrat jednu z šablon, nebo
        nastavení přizpůsobit ručně. Další možností jak otevřít okno pro nastavení sekvence je přes pravé kliknutí myši
        na danou sekvenci a zvolení Sequence Settings....
      </p>

<br>

      <h2 id="vnorene-sekvence">Vnořené sekvence</h2>
      <p>
        Anglicky Nested sequences, jsou sekvence vložené do jiné sekvence. Fungují jako samostatné klipy, které lze umístit 
        na časovou osu stejně jako běžné klipy. Tímto způsobem je možné například vytvořit složitější kompozici, která se 
        skládá z několika částí, a tu pak vložit do hlavní sekvence jako jednotný objekt.
      </p>

      <p>
        Jsou užitečné pokud máte určitou část videa, kterou je potřeba použít opakovaně, například
        animace loga s textem. Místo toho, abyste tuto animaci vytvářeli znovu pro každé použití, stačí z dané části udělat vnořenou
        sekvenci.
      </p>

      <p>
        Vnořenou sekvenci vytvoříte na časové ose tak, že vyberete klipy, které chcete do sekvence vložit, kliknete na ně pravým
        tlačítkem myši a zvolíte možnost Nest.... Otevře se formulář pro zadání jména sekvence, po jeho vyplnění a stisknutí Ok se
        nová sekvence objeví v Project panelu a vloží se namísto původních označených klipů na časové ose.
      </p>

<br>

    <h2 id="vrstvy">Vrstvy</h2>

    <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/vrstvy1.png" alt="Vrstvy">

        <figcaption>
          <div class="figure_title">Vrstvy</div>
        </figcaption>
      </figure>

      <p>
        Časová osa je v Premiere Pro vertikálně dělena do jednotlivých vrstev. Ty jsou dále děleny do dvou kategorií, a to video vrstvy
        a audio vrstvy. Video vrstvy jsou určeny pro obrazová data, zatímco audio vrstvy pro data zvuková. 
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/vrstvy2.png" alt="Překrývání vrstev">

        <figcaption>
          <div class="figure_title">Překrývání vrstev</div>
        </figcaption>
      </figure>

      <p>
        Do video vrstev je možné vkládat klipy s obrazovými daty, grafiku nebo třeba titulky. Obrazové vrstvy si můžete představit,
        jako průhledné tabule položené nad sebou. Na tyto tabule lze umístit různé prvky. Objekty na vyšších vrstvách zakrývají 
        ty na nižších vrstvách. Tato vlastnost je užitečná například při práci s malými obrázky, které při umístění na vyšší vrstvu
        nezakryjí celý obsah na nižších vrstvách, například logo v rohu.
      </p>

      <p>
        Neprůhlednost obrazové vrstvy je udávána v procentech, přičemž 0% znamená plnou průhlednost a 100% znamená neprůhlednost.
        Tuto vlastnost lze, pro jednotlivé klipy, nastavit v panelu Effect Controls pod záložkou Opacity. 
        Alternativně lze chytit čáru v horní části klipu na časové ose a posouváním nahoru a dolů měnit tak 
        neprůhlednost klipu.
      </p>

      <p>
        Audio vrstvy nedisponují vlastností překrývání. Při přidání dvou audio stop se jednoduše přehrají najednou.
        U audio stop na těchto vrstvách lze také sledovat náhled amplitudy zvuku, který zobrazuje intenzitu zvuku v daném úseku. 
        Tento náhled je užitečný pro rychlou orientaci v tom, kde se nachází tiché a hlasité části zvukové stopy.
      </p>

      <p>
        Hlasitost jednotlivých audiostop lze měnit v panelu Effect Controls v záložce Volume. 
        Je také možné použít čáru v horní části klipu na časové ose, podobně jako u video stop.
      </p>

      <p>
        Pokud má naimportovaný materiál více stop, například jednu pro video a dvě pro audio, při vložení na časovou osu
        se jednotlivé stopy vloží do odpovídajících vrstev.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/unlink.png" alt="Unlink možnost">

        <figcaption>
          <div class="figure_title">Unlink možnost</div>
        </figcaption>
      </figure>

      <p>
        Materiál s více stopami je má navzájem propojené. To znamená, že při posunutí jedné stopy se posunou i ostatní.
        Při provedení střihu nad takovým materiálem se přestřihnou všechny jeho stopy. Toto chování se dá změnit v kontextovém menu,
        které se zobrazí po kliknutí pravým tlačítkem myši na klip na časové ose. Možnost Unlink stopy oddělí, pak je s nimi
        možné pracovat samostatně. Při označení rozpojených vrstev se v kontextovém menu zobrazí možnost Link, což spojení obnoví.
      </p>

<br>
<hr>
<br>

      <h2 id="sekvence-prakticka">Praktická část</h2>
      <p>
        V této části si prakticky vyzkoušíte postup při zakládání sekvence, vkládání klipů na časovou osu a práci s vnořenými sekvencemi.
        Před začátkem si otevřete projekt, který jste vytvořili v minulé kapitole.
      </p>

      <h3 id="prakticka-tvorba-sekvence">Tvorba sekvence</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_6/prakt_tvorba1.png" alt="Tvorba sekvence">

        <figcaption>
          <div class="figure_title">Tvorba sekvence</div>
        </figcaption>
      </figure>

      <p>
        Vespodu Project panelu klikněte na tlačítko New Item a zvolte možnost Sequence....
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_6/prakt_tvorba2.png" alt="Formulář pro tvorbu sekvence">

        <figcaption>
          <div class="figure_title">Formulář pro tvorbu sekvence</div>
        </figcaption>
      </figure>

      <p>
        Otevře se vám formulář pro vytvoření sekvence, kde lze nastavit i jednotlivé její parametry. Pro teď pouze použijte šablonu
        HD 1080p 23.976 fps. Tato šablona má přednastavené parametry pro FullHD video, které má snímkovou frekvenci 23.976 FPS.
        Ve spodní části nastavte název sekvence na Hlavní sekvence. Pokud vaše nastavení odpovídá obrázku výše, stiskněte Ok.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_6/prakt_tvorba3.png" alt="Organizace sekvence na Project panelu">

        <figcaption>
          <div class="figure_title">Organizace sekvence na Project panelu</div>
        </figcaption>
      </figure>

      <p>
        V Project panelu se vám vytvoří nový objekt vaší sekvence. Pro udržení organizační struktury z minulé kapitoly
        si vytvořte nový bin a pojmenujte ho sekvence. Sem budete dávat všechny další sekvence v tomto projektu.
        Přetáhnutím přesuňte Hlavní sekvenci do tohoto binu.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_6/prakt_timeline1.png" alt="Nová sekvence na Timeline panelu">

        <figcaption>
          <div class="figure_title">Nová sekvence na Timeline panelu</div>
        </figcaption>
      </figure>

      <p>
        Timeline panel vám po vytvoření otevře novou sekvenci. Všimněte si, že sekvence obsahuje několik vrstev, konkrétně dvě
        pro video a dvě pro audio. Počet vrstev je možné později změnit podle potřeby.
      </p>

<br>

      <h3 id="prakticka-klipy">Práce s klipy</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_6/prakt_timeline2.png" alt="Vložení klipu do sekvence">

        <figcaption>
          <div class="figure_title">Vložení klipu do sekvence</div>
        </figcaption>
      </figure>

      <p>
        Nyní si otevřete bin Videa, kde máte naimportované klipy. Vyberte klip nádraží1.mov a přetáhněte ho do Timeline panelu.
        Na časové ose se vám při přetahování objeví barevný náhled, který ukazuje, kam bude klip umístěn.
        Tímto jste vložili klip do sekvence.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_6/prakt_timeline3.png" alt="Varování o odlišném nastavení">

        <figcaption>
          <div class="figure_title">Varování o odlišném nastavení</div>
        </figcaption>
      </figure>

      <p>
        Po vložení klipu do sekvence se vám zobrazí varování Clip Mismatch Warning. Toto varování říká, že parametry sekvence
        a klipu se liší. V tomto případě se jedná o snímkovou frekvenci, protože vaše sekvence je nastavená na 23.976 FPS,
        zatímco klip má snímkovou frekvenci 29.65 FPS. Rozdíl je způsoben tím, že šablona, kterou jste použili, má nastavené jiné parametry.
        Aby se sekvence přizpůsobila klipu, stačí kliknout na tlačítko Change sequence settings. Tím se parametry sekvence změní tak,
        aby odpovídaly parametrům vkládaného klipu.
      </p>

<br>

      <h3 id="prakticka-casova-osa">Časová osa</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_6/prakt_timeline4.png" alt="Klip na časové ose">

        <figcaption>
          <div class="figure_title">Klip na časové ose</div>
        </figcaption>
      </figure>
      
      <p>
        Klip s nádražím je složen ze dvou vrstev, video vrstvy, kde jsou obrazová data a audio vrstvy, kde jsou zvuková data. 
        Na časové ose se klip zobrazuje jako blok, který zabírá určitý úsek. Všimněte si ale, že klip vypadá velmi krátký.
        To je způsobeno tím, že měřítko časové osy je moc malé. Abyste měřítko změnili, podržte levý Alt a scrollujte
        kolečkem myši. Je možné, že se vám nyní klip ztratil, protože měřítko se změnilo a zobrazovaná plocha na časové ose
        se posunula. Pro pohyb náhledu časové osy použijte kolečko myši, tentokrát bez držení levého Alt.
      </p>

      <p>
        Pracovat s měřítkem a pohybem na časové ose je možné i pomocí posuvníku vespodu Timeline panelu. Při chycení kraje posuvníku
        upravujete měřítko a posouváním pohybujete náhledem časové osy.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_6/prakt_timeline5.png" alt="Přiblížený klip na časové ose">

        <figcaption>
          <div class="figure_title">Přiblížený klip na časové ose</div>
        </figcaption>
      </figure>

      <p>
        Přiblížený klip vypadá následovně. Ve video stopě vidíte jednoduchý přednáhled obrazu, ve stopě audia pak vlnovku,
        která znázorňuje amplitudu zvuku.
      </p>

      <p>
        V levé části Timeline panelu se nachází možnosti pro zobrazení jednotlivých vrstev. Nad nimi je časový kód, 
        který znázorňuje pozici přehrávací hlavy na časové ose. Přehrávací hlava je svislá čára, která ukazuje aktuální pozici v sekvenci,
        podle její pozice se mění hodnota v časovém kódu a náhled v Program monitoru. Je možné s ní pohybovat kliknutím do oblasti
        v horní části Timeline panelu, nebo po jednotlivých snímcích pomocí šipek na klávesnici.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_6/prakt_nahled.png" alt="Náhled v Program monitoru">

        <figcaption>
          <div class="figure_title">Náhled v Program monitoru</div>
        </figcaption>
      </figure>

      <p>
        Program monitor zobrazuje náhled aktuální pozice přehrávací hlavy na časové ose. V ovládací části naspodu tohoto panelu je možné
        kliknout na tlačítko Play. Tím se spustí přehrávání sekvence od původní pozice přehrávací hlavy. Toto přehrávání je možné zastavit
        stiskem tlačítka Stop, které při přehrávání nahradí tlačítko Play. Pro přehrávání a zastavení lze také použít mezerník
        na klávesnici.
      </p>

<br>

      <h3 id="prakticka-vnorene-sekvence">Vnořené sekvence</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_6/prakt_nest1.png" alt="Vložení klipů pro vytvoření vnořené sekvence">

        <figcaption>
          <div class="figure_title">Vložení klipů pro vytvoření vnořené sekvence</div>
        </figcaption>
      </figure>

      <p>
        Pro ukázku vnořené sekvence použijte klipy logo_bílá.png a logo_černá.png, které máte v binu Obrázky. 
        Přetáhněte je oba na časovou osu, za nádraží1.mov, a umístěte je vedle sebe.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_6/prakt_nest2.png" alt="Tvorba vnořené sekvence">

        <figcaption>
          <div class="figure_title">Tvorba vnořené sekvence</div>
        </figcaption>
      </figure>

      <p>
        Nyní označte oba klipy s logem a klikněte na ně pravým tlačítkem myši, v kontextovém menu zvolte možnost Nest....
        Otevře se formulář pro zadání názvu nové sekvence, pojmenujte ji Logo animace a stiskněte Ok.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_6/prakt_nest3.png" alt="Organizace vnořené sekvence na Project panelu">

        <figcaption>
          <div class="figure_title">Organizace vnořené sekvence na Project panelu</div>
        </figcaption>
      </figure>

      <p>
        V Project panelu se vám vytvoří nová sekvence, pro udržení organizace ji přetáhněte do binu sekvence.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_6/prakt_nest4.png" alt="Vnořená sekvence na časové ose">

        <figcaption>
          <div class="figure_title">Vnořená sekvence na časové ose</div>
        </figcaption>
      </figure>

      <p>
        Na časové ose se původní klipy s logem nahradily novou vnořenou sekvencí. Ta funguje jako běžný klip, který můžete přesouvat,
        stříhat nebo upravovat efekty. Pokud chcete upravit obsah vnořené sekvence, stačí na ni dvakrát rychle kliknout 
        levým tlačítkem myši. Tím se vám otevře časová osa této vnořené sekvence, kde můžete pracovat s jednotlivými klipy uvnitř ní.
      </p>

      <p>
        Mezi jednotlivými sekvencemi na Timeline panelu se můžete přepínat kliknutím na záložky s jejich názvy v horní
        části tohoto panelu.
      </p>

    `,
    quizKey: "sekvence",
    sources: []
  },

  {
    id: "strih",
    menu: "Základy střihu",
    title: "Základy střihu",
    subtitle: "Seznámení se základními nástroji pro střih a úpravu klipů na časové ose.",
    hasAI: false,
    html: `
      <h2 id="prace-v-source-panelu">Práce v Source panelu</h2>
      <p>
        Aby bylo možné začít stříhat, je potřeba vložit klipy do sekvence. Jak již bylo zmíněno v předchozí kapitole,
        klipy lze přetáhnout z Project panelu přímo na časovou osu. Tento způsob vloží klip do sekvence celý.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/source_panel.png" alt="Source panel">

        <figcaption>
          <div class="figure_title">Source panel</div>
        </figcaption>
      </figure>

      <p>
        Další možností, jak vložit klip do sekvence, je s využitím Source panelu. Dvojklikem na klip v Project panelu se 
        otevře Source panel. Zde můžete klip přehrát, podobně jako v Program monitoru, navíc je zde možnost nastavit tzv. In a Out
        points, tedy vstupní a výstupní body. In point označuje začátek části klipu, Out point pak konec. Nastavením těchto bodů
        lze oříznout klip ještě před vložením do sekvence.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/source_panel2.png" alt="Popis Source panelu">

        <figcaption>
          <div class="figure_title">Popis Source panelu</div>
        </figcaption>
      </figure>

      <p>
        In a Out body lze nastavit pomocí tlačítek pod náhledem v Source panelu. Na ose v panelu se následně zvýrazní plocha,
        která je těmito body ohraničena. Pokud je potřeba In a Out body odstranit, stačí kliknout na osu pravým
        tlačítkem myši a zvolit Clear In and Out.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/source_panel3.png" alt="Tlačítka Insert a Overwrite">

        <figcaption>
          <div class="figure_title">Tlačítka Insert a Overwrite</div>
        </figcaption>
      </figure>

      <p>
        Do sekvence je možné vložit celý, nebo oříznutý, klip pomocí tlačítka Insert nebo Overwrite, které se nachází ve spodní části
        panelu. Insert vloží klip na pozici přehrávací hlavy a pokud se hlava nachází uprostřed jiného, již vloženého klipu,
        vytvoří se střih a vkládaný klip se vloží mezi dvě části původního klipu. Při použití Overwrite se klip vloží na pozici
        přehrávací hlavy, ale pokud se hlava nachází uprostřed jiného klipu, ten se nepřestřihne, ale přepíše se překrývající se část.
      </p>

<br>

      <h2 id="zpusoby-strihu-timeline">Způsoby střihu na Timeline panelu</h2>

      <h3 id="trimming">Trimming</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/trimming.png" alt="Trimming klipu">

        <figcaption>
          <div class="figure_title">Trimming klipu</div>
        </figcaption>
      </figure>

      <p>
        Trimování je způsob úpravy délky klipu přímo na Timeline panelu. Pomocí Selection nástroje, který lze zvolit v 
        Tools panelu nebo pomocí klávesové zkratky V, je možné chytit okraj klipu. Tažením okraje se pak jeho délka zkracuje nebo
        prodlužuje.
      </p>

      <h3 id="razor-tool">Razor Tool</h3>

      <p>
        Razor Tool, nebo také nástroj žiletka, je hlavním nástrojem pro střih. Lze ho zvolit buď v Tools panelu, nebo pomocí
        klávesové zkratky C. Po zvolení tohoto nástroje se kurzor myši změní na ikonu žiletky. Kliknutím na klip na časové ose
        se klip přestřihne na dvě části v místě kliknutí.
      </p>

      <p>
        Pokud je potřeba klip znovu spojit, například v případě chybného střihu, je potřeba přepnout zpět na Selection Tool.
        Následně je možné kliknout pravým tlačítkem na místo střihu a zvolit možnost Join Through Edits. Tím se dvě části klipu 
        spojí zpět do jednoho klipu. Aby bylo možné klipy zpět spojit, je potřeba, aby mezi nimi nebyla mezera a nechyběla
        žádná část původního klipu.
      </p>

      <h3 id="slip-tool">Slip Tool</h3>

      <p>
        Slip Tool je nástroj pro posouvání obsahu klipu, aniž by se měnila jeho délka nebo pozice na časové ose. Lze ho zvolit v Tools panelu
        nebo pomocí klávesové zkratky Y. Po zvolení tohoto nástroje se kurzor myši změní na ikonu s dvěma šipkami směřujícími proti sobě.
        Kliknutím a tažením klipu s tímto nástrojem se posouvá jeho obsah, zatímco začátek a konec klipu zůstávají na stejném místě.
      </p>

      <h3 id="ripple-edit-tool">Ripple Edit Tool</h3>

      <p>
        Ripple Edit Tool je nástroj pro úpravu délky klipu, který zároveň posouvá všechny následující klipy na časové ose, tak 
        aby se přizpůsobily nové délce upravovaného klipu. Lze ho zvolit v Tools panelu nebo pomocí klávesové zkratky B. 
        Kliknutím a tažením okraje klipu s tímto nástrojem se mění jeho délka, přičemž všechny následující klipy se posouvají, 
        aby nedošlo k mezeře mezi nimi.
      </p>

      <h3 id="ripple-delete">Ripple Delete</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/ripple_delete.png" alt="Ripple Delete">

        <figcaption>
          <div class="figure_title">Ripple Delete</div>
        </figcaption>
      </figure>

      <p>
        Při odstranění části uprostřed klipu, například pomocí Razor Tool, vznikne mezi dvěma zbývajícími částmi mezera.
        Mezeru je možné odstranit přetažením jedné části klipu k druhé, pokud jsou ale v sekvenci další objekty, vytvoří se další
        mezera za posunutým klipem. Existuje proto způsob, jak tuto mezeru odstranit bez toho, aby se vytvořila další.
        Stačí na ni kliknout pravým tlačítkem myši a zvolit možnost Ripple Delete. Tím se mezera odstraní a všechny následující 
        klipy se posunou.
      </p>

<br>
<hr>
<br>

      <h2 id="strih-prakticka">Praktická část</h2>

      <p>
        V této části si prakticky vyzkoušíte základní nástroje a způsoby střihu. 
        Před začátkem si otevřete projekt Cesta vlakem.
      </p>

      <h3 id="prakticka-source-panel">Oříznutí klipu v Source panelu</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/prakt_clear.png" alt="Odstranění vnořené sekvence Logo animace z časové osy">

        <figcaption>
          <div class="figure_title">Odstranění vnořené sekvence Logo animace z časové osy</div>
        </figcaption>
      </figure>

      <p>
        Nejprve dočasně odstraňte vnořenou sekvenci Logo animace z časové osy, objekt se nesmaže z projektu, stále bude uložen
        v binu Sekvence. Odstranění se provede pravým kliknutím myší na objekt a zvolením možnosti Clear, nebo klávesovou
        zkratkou X.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/prakt_source.png" alt="cesta_vlakem1.mov v Source panelu">

        <figcaption>
          <div class="figure_title">cesta_vlakem1.mov v Source panelu</div>
        </figcaption>
      </figure>

      <p>
        V Project panelu se přesuňte do binu Videa a dvojklikem na klip cesta_vlakem1.mov ho otevřete v Source panelu.
        Tlačítkem Play a posouváním přehrávací hlavy si video projděte a najděte vhodnou část klipu, kde výhled neblokují
        žádné objekty.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/prakt_InOut.png" alt="Vybraná část klipu cesta_vlakem1.mov">

        <figcaption>
            <div class="figure_title">cesta_vlakem1.mov v Source panelu</div>
        </figcaption>
      </figure>

      <p>
        Tuto oblast označte In a Out body. V Timeline panelu přesuňte přehrávací hlavu, do prázdného místa, za klip s nádražím,
        aby ho nově vložený klip nijak nepřepsal/nerozdělil. Pomocí tlačítka Insert, v Source panelu, vložte oříznutou část 
        klipu na časovou osu.
      </p>

      <p>
        <i>Na obrázku jsou In a Out body nastaveny takto: In -> 00:00:07:19; Out -> 00:00:15:23.</i>
      </p>

<br>

    <h3 id="prakt-strih">Razor Tool</h3>

    <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/prakt_timeline1.png" alt="Přidání cesta_vlakem2.mov na časovou osu">

        <figcaption>
            <div class="figure_title">Přidání cesta_vlakem2.mov na časovou osu</div>
        </figcaption>
      </figure>

    <p>
      Dále přejděte zpět do binu Videa a přetáhněte cesta_vlakem2.mov do prázdného místa na časovou osu. Neotevírejte tentokrát
      video v panelu Source, oříznutí si tentokrát vyzkoušíte přímo na časové ose. Vaše sekvence by měla vypadat podobně, jako na 
      obrázku výše.
    </p>

    <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/prakt_timeline2.png" alt="Stav časové osy po rozdělení klipu">

        <figcaption>
            <div class="figure_title">Stav časové osy po rozdělení klipu</div>
        </figcaption>
      </figure>

    <p>
      Pomocí přehrávací hlavy a náhledu v Program monitoru najděte v cesta_vlakem2.mov místo, kde se objevuje železniční přejezd.
      V Tools panelu zvolte nástroj Razor Tool a rozdělte klip na tři části tak, aby první část obsahovala jízdu před přejezdem,
      druhá část přejezd a třetí část jízdu za přejezdem. V případě chyby použijte klávesovou zkratku Ctrl + Z, která 
      vrátí zpět poslední provedenou úpravu. Alternativně můžete použít Selection Tool, označit místo střihu a 
      v kontextovém menu zvolit možnost Join Through Edits, která klip spojí zpět do jednoho.
    </p>

    <p>
      Následně pomocí Selection Tool označte části bez přejezdu a odstraňte
      je ze sekvence.
    </p>

    <p>
      <i>Pokud vidíte klip moc malý, podržte levý Alt a posuňte kolečkem myši, změní se vám měřítko časové osy a klip se zvětší.</i>
    </p>

    <h3 id="prakt-Trimming">Trimming</h3>

    <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/prakt_trimming.png" alt="Prodloužený klip s přejezdem">

        <figcaption>
            <div class="figure_title">Prodloužený klip s přejezdem</div>
        </figcaption>
      </figure>
    
    <p>
      Klip s přejezdem je poměrně krátký, prodlužte ho z obou stran pomocí trimování. Zvolte Selection Tool a chyťte okraj klipu,
      začátek roztáhněte směrem doleva tak, aby byla krátce vidět i jízda před přejezdem. Konec klipu roztáhněte obdobně, ale opačným směrem,
      jinak byste klip zkracovali.
    </p>

    <p>
      <i>Na obrázku je klip roztažen tak, že části před a za přejezdem jsou dlouhé přibližně jednu vteřinu.</i>
    </p>

<br>

    <h3 id="prakt-ripple-delete">Ripple Delete</h3>

    <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/prakt_ripples.png" alt="Ripples v sekvenci">

        <figcaption>
            <div class="figure_title">Ripples v sekvenci</div>
        </figcaption>
      </figure>

    <p>
      Pokud se podíváte na celou časovou osu, uvidíte, že mezi klipy jsou mezery. Tyto mezery se při přehrávání zobrazí pouze
      jako černá barva. Proto je potřeba je odstranit.
    </p>

    <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/prakt_ripple_delete.png" alt="Ripple Delete v sekvenci">

        <figcaption>
            <div class="figure_title">Ripple Delete v sekvenci</div>
        </figcaption>
      </figure>

    <p>
      To lze provést několika způsoby. První způsob je pomocí nástroje Selection, kdy chytíte klip a přetáhnete ho k sousednímu 
      klipu, čímž se mezera odstraní. Takto by ale u většího množství klipů, při každém přesunutí, vznikaly další mezery.
      Proto radši použijte druhý způsob, který využívá funkci Ripple Delete. Klikněte na mezeru pravým tlačítkem myši
      a zvolte možnost Ripple Delete. Tím se mezera odstraní a všechny klipy napravo od ní se posunou.
    </p>

    <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/prakt_close_gap.png" alt="Close Gap v sekvenci">

        <figcaption>
            <div class="figure_title">Close Gap v sekvenci</div>
        </figcaption>
      </figure>

    <p>
      Existuje ještě jeden způsob, který najdete na horní liště v záložce Sequence -> Close Gap. Tato možnost funguje stejně 
      jako Ripple Delete, ale odstraní všechny mezery v sekvenci najednou.
    </p>

    <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_7/prakt_final.png" alt="Stav časové osy po odstranění mezer">

        <figcaption>
            <div class="figure_title">Stav časové osy po odstranění mezer</div>
        </figcaption>
      </figure>

    <p>
      Po odstranění mezer by měla vaše časová osa vypadat podobně, jako na obrázku výše.
    </p>

    <p>
      Vyzkoušejte si libovolným způsobem vložit na časovou osu i zbylé klipy: cesta_vlakem3.mov, nádraží2.mov.
      Vložte je za klip cesta_vlakem2.mov. Tyto klipy sestříhejte tak, aby cesta_vlakem3.mov trvala přibližně 8 vteřin a nádraží2.mov 
      přibližně 10 vteřin. Po vložení a sestříhání klipů odstraňte Ripples.
    </p>
     `,
    quizKey: "strih",
    sources: []
  },

  {
    id: "zvuk",
    menu: "Práce se zvukem",
    title: "Základy práce se zvukem",
    subtitle: "Seznámení se základy práce se zvukem.",
    hasAI: true,
    html: `
      <h2 id="zvuk-uvod">Zvuk v Premiere Pro</h2>
      <p>
        Zvuk je nedílnou součástí každého videa a výrazně ovlivňuje jeho celkové vnímání. I technicky kvalitní obraz může 
        působit neprofesionálně, pokud je doprovázen nekvalitním nebo špatně upraveným zvukem. Při práci v Adobe Premiere Pro 
        je proto důležité věnovat zvuku stejnou pozornost jako obrazu. Zatímco střih videa je často vizuálně zřejmý, 
        chyby ve zvuku mohou být pro diváka méně nápadné, ale o to více rušivé.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/zvuk_kategorie.png" alt="Ukázka kategorizace zvukových stop">

        <figcaption>
          <div class="figure_title">Ukázka kategorizace zvukových stop</div>
        </figcaption>
      </figure>

      <p>
        Premiere Pro rozděluje zvukové stopy do čtyř kategorií podle obsahu: Dialog (Dialogue), Hudba (Music), 
        Zvukový efekt (SFX) a Zvuky prostředí (Ambience). Na základě této klasifikace pak nabízí různé možnosti pro úpravu
        a zpracování dané stopy. Například pro dialogy jsou k dispozici nástroje pro odstranění šumu, nebo pro hudbu 
        lze využít funkci <ai-term>Auto Ducking</ai-term>, která ji automaticky ztlumí, pokud například detekuje, že v sekvenci hraje Dialog stopa.
      </p>

<br>

      <h3 id="mono-stereo">Mono vs. Stereo</h3>
      <p>
        Zvuk může být zaznamenán jako mono nebo stereo. Mono (monofonní zvuk) obsahuje 
        pouze jeden zvukový kanál, to znamená, že zvuk vychází stejně z obou reproduktorů. 
        Tento typ se často používá například u mluveného slova, kde není důležitá prostorovost. 
        Naproti tomu stereo (stereofonní zvuk) pracuje se dvěma kanály (levým a pravým),
        což umožňuje vytvářet prostorový dojem a lépe rozlišit směr, odkud zvuk přichází. 
        Stereo je proto běžné zejména u hudby nebo scén, kde je důležitá atmosféra a prostor.
      </p>

      <p>
        Program umožňuje převádět audio stopy mezi mono a stereo. Toto nastavení lze nalézt při pravém kliknutí myši na
        daný materiál v Project panelu a zvolením možnosti Modify -> Audio Channels. 
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/zvuk_kanály.png" alt="Porovnání mono a stereo stopy">

        <figcaption>
          <div class="figure_title">Porovnání mono a stereo stopy</div>
        </figcaption>
      </figure>

      <p>
        Při převodu z mono na stereo se vytvoří dva identické kanály, při převodu ze stereo na mono se kanály sloučí do jednoho. 
      </p>

<br>

      <h2 id="panel-essential-sound">Panel Essential Sound</h2>

      <p>
        Většina nástrojů pro úpravy zvuku se nachází v panelu Essential Sound. Na základě typu označené audiostopy
        se v tomto panelu zobrazí různá nastavení, která odpovídají běžným potřebám pro úpravu daného typu audia.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/ess_sound1.png" alt="Výběr kategorie pro zvukovou stopu v panelu Essential Sound">

        <figcaption>
          <div class="figure_title">Výběr kategorie pro zvukovou stopu v panelu Essential Sound</div>
        </figcaption>
      </figure>

      <p>
        Program automaticky detekuje, do jaké kategorie daná stopa patří. Panel Essential Sound však umožňuje tuto
        klasifikaci změnit, například pokud byl typ špatně detekován. Pro každý typ je zde také možné vybírat z několika
        přednastavených šablon, které příslušná nastavení upraví tak, aby odpovídala dané situaci. Například pro 
        dialogy je, mimo jiné, k dispozici šablona Podcast Voice, která se pokusí upravit zvuk, tak, aby vynikal hlas mluvčího.
      </p>

      <p>
        Vespodu panelu se pak nachází možnosti pro celkové ztlumení stopy a pro úpravu hlasitosti klipu.
      </p>

<br>

      <h3 id="ess-dialog">Základní nastavení pro Dialog</h3>

      <figure class="doc_figure doc_figure--medium">
        <img src="img/kapitola_8/ess_sound2.png" alt="Záložka Enhance Speech">

        <figcaption>
          <div class="figure_title">Záložka Enhance Speech</div>
        </figcaption>
      </figure>

      <p>
        U zvukových stop představujících řeč je klíčové, aby byl hlas mluvčího dobře srozumitelný. 
        Panel Essential Sound nabízí nástroj <ai-term>Enhance Speech</ai-term>, který pomocí umělé inteligence potlačuje 
        okolní šum a zvýrazňuje hlas. Posuvníkem Mix Amount lze regulovat intenzitu tohoto efektu.
      </p>

      <figure class="doc_figure doc_figure--medium">
        <img src="img/kapitola_8/ess_sound3.png" alt="Záložka Loudness">

        <figcaption>
          <div class="figure_title">Záložka Loudness</div>
        </figcaption>
      </figure>

      <p>
        Důležité je také udržovat konzistentní úroveň hlasitosti, aby nevznikaly příliš hlasité nebo tiché části. 
        K tomu slouží nástroj <ai-term>Auto-Match</ai-term> v záložce Loudness. Po jeho použití se hlasitost vybraných klipů automaticky 
        upraví na podobnou úroveň.
      </p>

      <figure class="doc_figure doc_figure--medium">
        <img src="img/kapitola_8/ess_sound4.png" alt="Záložka Repair">

        <figcaption>
          <div class="figure_title">Záložka Repair</div>
        </figcaption>
      </figure>

      <p>
        Natočený materiál může často obsahovat nežádoucí zvuky, například šum nebo ozvěnu. 
        Záložka Repair nabízí nástroje pro jejich potlačení, jako je redukce šumu (Reduce Noise) 
        nebo omezení ozvěny (Reduce Reverb) a další.
      </p>

      <figure class="doc_figure doc_figure--medium">
        <img src="img/kapitola_8/ess_sound5.png" alt="Záložka Clarity">

        <figcaption>
          <div class="figure_title">Záložka Clarity</div>
        </figcaption>
      </figure>

      <p>
        Záložka Clarity slouží k detailnějším úpravám hlasu pomocí nástrojů, jako je Dynamics, EQ nebo Vocal Enhancer. 
        Vocal Enhancer umožňuje zvýraznit buď vysoké nebo nízké tóny ve stopě. EQ upravuje frekvenční charakter zvuku, 
        například zvýrazněním řeči nebo vytvoření efektu telefonního hovoru.
      </p>

      <figure class="doc_figure doc_figure--medium">
        <img src="img/kapitola_8/ess_sound6.png" alt="Záložka Creative">

        <figcaption>
          <div class="figure_title">Záložka Creative</div>
        </figcaption>
      </figure>

      <p>
        Záložka Creative obsahuje efekty pro stylizaci zvuku. Lze zde například přidat ozvěnu (Reverb), 
        která vytváří dojem prostoru pro dramatické či atmosférické úpravy hlasu. 
      </p>

<br>

      <h3 id="ess-music">Základní nastavení pro Hudbu</h3>

      <p>
        Hudba je klíčovým prvkem pro vytvoření atmosféry ve videu. Kromě správného výběru hudby je tedy také důležité
        ji vhodně upravit.
      </p>

      <p>
        Panel Essential Sound pro hudbu nabízí záložku Loudness, která funguje stejně jako u dialogů. Obsahuje však navíc
        dvě další užitečné záložky.
      </p>

      <figure class="doc_figure doc_figure--medium">
        <img src="img/kapitola_8/ess_sound7.png" alt="Záložka Duration">

        <figcaption>
          <div class="figure_title">Záložka Duration</div>
        </figcaption>
      </figure>

      <p>
        První z nich se nazývá Duration a umožňuje stopu prodloužit. Hodí se například v případě, kdy hudba skončí dříve,
        než klip, který má podkreslovat. Existují dvě metody prodloužení: Stretch a <ai-term>Remix</ai-term>. Stretch prodlužuje stopu tím,
        že zpomalí její přehrávání tak, aby naplnila požadovanou délku. Není tedy ideální, protože zpomalí celou stopu
        a tím může změnit způsob, jakým hudba působí. Na druhou stranu, <ai-term>Remix</ai-term> prodlužuje délku stopy pomocí umělé inteligence,
        která nejdříve hudbu analyzuje a nalezne místa, kde lze hudbu prodloužit. Následně přeorganizuje, či duplikuje
        části stopy a tím ji prodlouží. Části, kde byla stopa upravena jsou v klipu na časové ose zvýrazněny vertikální vlnovkou.
      </p>

      <figure class="doc_figure doc_figure--medium">
        <img src="img/kapitola_8/ess_sound8.png" alt="Záložka Ducking">

        <figcaption>
          <div class="figure_title">Záložka Ducking</div>
        </figcaption>
      </figure>

      <p>
        Druhou záložkou pro tuto kategorii je <ai-term>Ducking</ai-term>. Tato funkce je založená na umělé inteligenci, která automaticky 
        ztlumí hudbu, pokud detekuje, že v sekvenci hraje audio stopa označená Dialog, či jako jiná zvolená kategorie. 
        Tím se zajistí, že hudba nebude rušit srozumitelnost dialogů, nebo důležitých momentů ve videu.
      </p>

<br>

      <h3 id="ess-sfx">Základní nastavení pro Zvukové efekty (SFX)</h3>

      <p>
        Zvukové efekty slouží k doplnění vizuálního děje a zvýraznění konkrétních akcí ve videu. 
        Obvykle se jedná o krátké zvuky, které by měly být dostatečně výrazné, ale neměly by rušit ostatní složky zvuku.
        Jako zvukový efekt lze označit například \"cinknutí\" při zobrazení textu.
      </p>

      <figure class="doc_figure doc_figure--medium">
        <img src="img/kapitola_8/ess_sound9.png" alt="Záložka Pan">

        <figcaption>
          <div class="figure_title">Záložka Pan</div>
        </figcaption>
      </figure>

      <p>
        Pro tento typ audia je v panelu Essential Sound jen jedna nová záložka, a tou je Pan. Zde je možné nastavit,
        z jaké strany bude zvuk přicházet. Pomocí posuvníku se nastaví pozice zdroje zvuku, hodnota 0 znamená prostředek,
        -100 levý kanál a 100 pravý kanál. Je však možné nastavit hodnotu Pan na libovolné číslo v tomto rozsahu.
        Alternativně lze tuto vlastnost nastavit také v panelu Effect Controls, pod záložkou Audio > Panner > Balance.
      </p>

      <h3 id="ess-ambience">Základní nastavení pro Atmosférické zvuky</h3>

      <p>
        Atmosférické zvuky, označované jako Ambience, dokáží diváka vtáhnout do příběhu.
        Jedná se například o zvuky prostředí, jako je vítr, ruch města nebo šum přírody.
        Tyto zvuky by měly být spíše v pozadí a neměly by odvádět pozornost od hlavního děje. 
      </p>

      <figure class="doc_figure doc_figure--medium">
        <img src="img/kapitola_8/ess_sound10.png" alt="Záložka Stereo Width">

        <figcaption>
          <div class="figure_title">Záložka Stereo Width</div>
        </figcaption>
      </figure>

      <p>
        Kromě záložek Loudness, Creative a <ai-term>Ducking</ai-term> je zde nová záložka Stereo Width. Tato funkce slouží k rozšíření 
        nebo zúžení prostorového vnímání daného zvuku, aby lépe zapadl do scény.
      </p>

<br>

      <h2 id="jine-zpusoby">Jiné způsoby úpravy zvuku</h2>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/zvuk_eff_controls.png" alt="Možnosti úpravy zvuku v panelu Effect Controls">

        <figcaption>
          <div class="figure_title">Možnosti úpravy zvuku v panelu Effect Controls</div>
        </figcaption>
      </figure>

      <p>
        Mimo nástroje v Essential Sound panelu, lze se zvukem pracovat i jinými způsoby. Vlastnosti jako celková hlasitost, 
        hlasitost jednotlivých kanálů (pravý a levý) nebo Pan (poměr mezi těmito kanály) se dají manuálně nastavit
        v Effect Controls panelu.
      </p>

      <figure class="doc_figure doc_figure--medium">
        <img src="img/kapitola_8/zvuk_effects.png" alt="Efekty pro úpravu zvuku v panelu Effects">

        <figcaption>
          <div class="figure_title">Efekty pro úpravu zvuku v panelu Effects</div>
        </figcaption>
      </figure>

      <p>
        V panelu Effects existuje také složka Audio Effects, která obsahuje různé efekty, jež je možné na zvukové stopy aplikovat.
      </p>

      <p>
        Na časové ose se pro střih zvuku používají stejné nástroje jako pro střih obrazu. Tedy nástroje představené v minulé kapitole.
      </p>

<br>

      <h2 id="dobra-praxe">Dobrá praxe při práci se zvukem</h2>

      <p>
        Zvuk hraje ve videu zásadní roli a jeho správné použití může výrazně ovlivnit celkový dojem i atmosféru výsledného díla. 
        Volba hudby, práce s hlasem i použití zvukových efektů by proto měla vždy vycházet z cíle videa a jeho hlavního sdělení.
      </p>

      <p>
        Při úpravě zvuku je důležité si uvědomit, co je v daném momentu nejdůležitější. 
        U rozhovorů nebo jiných situací, kde je klíčové mluvené slovo, musí být řeč vždy dobře srozumitelná 
        a ostatní zvukové složky ji nesmí přehlušovat. Naopak u vizuálně zaměřených nebo tzv. cinematických videí může 
        hrát hlavní roli hudba, která by měla odpovídat tempu a náladě obrazu.
      </p>

      <p>
        Zvukové efekty by měly být používány citlivě a účelně. Jejich úkolem není rušit, ale doplňovat obraz, zvýrazňovat děj 
        nebo podpořit emoci. Stejně důležité je udržovat vyváženost mezi jednotlivými zvukovými stopami, aby například
        hudba nebyla nepřiměřeně hlasitá ve srovnání s dialogem nebo efekty.
      </p>

      <p>
        Při práci se zvukem je vhodné se vyvarovat náhlým začátkům a koncům zvukových klipů, které mohou působit rušivě. 
        Místo toho se používají plynulé přechody, například pomocí postupného zesilování a zeslabování (fade in a fade out), 
        které lze vytvořit pomocí tzv. klíčových snímků (keyframes) v Effect Controls panelu, či použitím a nastavením efektu z panelu Effects
        a složky Audio Transitions > Crossfade. (Více o efektech v další kapitole)
      </p>

      <p>
        Pro lepší přehlednost je také vhodné organizovat zvuk do více vrstev podle jejich typu, například oddělit dialog, hudbu 
        a zvukové efekty. Premiere Pro navíc umožňuje jednotlivé vrstvy dočasně izolovat pomocí funkce Solo Track nebo naopak ztlumit 
        pomocí Mute Track, což usnadňuje práci při úpravách.
      </p>

<br>
<hr>
<br>

      <h2 id ="zvuk-prakticka">Praktická část</h2>

      <p>
        V této části si prakticky vyzkoušíte základní práci se zvukem. 
        
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/prakt_pixabay.png" alt="Stažení hudby z Pixabay">

        <figcaption>
          <div class="figure_title">Stažení hudby z Pixabay</div>
        </figcaption>
      </figure>
      
      <p>
        Do projektové složky vytvořte novou složku s názvem Hudba a do ní stáhněte skladbu z tohoto odkazu: 
        <a class="m-link" href="https://pixabay.com/music/corporate-digital-digital-music-492802/" target="_blank">
        Odkaz na Pixabay</a>. Pixabay je webová platforma poskytující volně dostupné materiály, včetně hudby, 
        které lze zdarma používat a upravovat jako součást vlastních projektů.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/prakt_timeline1.png" alt="Vložení hudby na časovou osu">

        <figcaption>
          <div class="figure_title">Vložení hudby na časovou osu</div>
        </figcaption>
      </figure>
        
      <p>
        Otevřete si projekt Cesta vlakem a importujte do něj staženou hudbu.
        V Project panelu si vytvořte nový bin s názvem Hudba a skladbu tam přetáhněte.
        Následně skladbu přetáhněte na časovou osu, tak aby byla na své vlastní vrstvě a nepřekrývala tak 
        žádné z existujících stop a začínala v čase 00:00:00:00.
      </p>

<br>

      <h3 id="prakt-priprava">Příprava existujících klipů</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/prakt_mute.png" alt="Ztlumení vrstvy hudby">

        <figcaption>
          <div class="figure_title">Ztlumení vrstvy hudby</div>
        </figcaption>
      </figure>

      <p>
        Pokud byste se pokusili video nyní přehrát, hudba by přehlušila ostatní zvukové stopy.
        Proto její vrstvu prozatím ztlumte pomocí tlačítka M (Mute Track), které se nachází v levé části Timeline panelu
        na příslušné vrstvě s hudbou.
      </p>

      <p>
        Pomocí záložky Window > Essential Sound otevřete panel Essential Sound.
        Vyberte klip nádraží1.mov a v panelu Essential Sound se ujistěte, že má přiřazenou kategorii Dialogue. 
        Pokud je klip přiřazen do jiné kategorie, stiskněte tlačítko Clear Audio Type a poté zvolte Dialogue.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/prakt_ess1.png" alt="Změna hlasitosti pomocí Loudness">

        <figcaption>
          <div class="figure_title">Změna hlasitosti pomocí Loudness</div>
        </figcaption>
      </figure>

      <p>
        V této části je důležité, aby bylo slyšet hlas oznamující zpoždění vlaku. Sice to nepředává divákovi 
        žádné důležité informace, ale pomáhá to navodit atmosféru nádraží. Všimněte si, že audio tohoto klipu
        je poměrně potichu. Upravte proto jeho hlasitost pomocí Loudness funkce. 
        Zapněte záložku Loudness pomocí přepínače a poté klikněte na tlačítko Auto-Match.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/prakt_ess2.png" alt="Doladění hlasitosti pomocí Essential Sound panelu">

        <figcaption>
          <div class="figure_title">Doladění hlasitosti pomocí Essential Sound panelu</div>
        </figcaption>
      </figure>

      <p>
        Audio stále není dostatečně hlasité, proto ve spodní části panelu Essential Sound pomocí posuvníku Volume
        zvyšte hlasitost na hodnotu 3,0 dB. Tím se hlasitost klipu zvýší o tři decibely.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/prakt_timeline2.png" alt="Střih klipu s nádražím">

        <figcaption>
          <div class="figure_title">Střih klipu s nádražím</div>
        </figcaption>
      </figure>

      <p>
        Nyní už je hlas slyšet, ale klip začíná a končí uprostřed slova, použijte tedy Razor Tool a klip rozdělte.
        První střih proveďte předtím, než hlas řekne 0 minut, druhý střih pak proveďte až hlas vysloví "se může změnit".
        Krajní klipy odstraňte a vzniklé Ripples smažte buď použitím Ripple Delete, nebo pomocí funkce Close Gap.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/prakt_timeline3.png" alt="Použití Unlink na zbylé klipy">

        <figcaption>
          <div class="figure_title">Použití Unlink na zbylé klipy</div>
        </figcaption>
      </figure>

      <p>
        Klip s nádražím je připraven, nyní se přesuňte na zbylé klipy. Jelikož jejich audio neobsahuje 
        žádné důležité prvky, může být odstraněno. Ve finále tak bude slyšet pouze hudba a případné zvukové efekty.
        Pro odstranění musíte nejdříve stopy rozpojit pomocí funkce Unlink. Bez rozpojení by se odstranily 
        i obrazové stopy. Po rozpojení je možné jednotlivé audio stopy cesty vlakem odstranit.
      </p>

<br>

      <h3 id="prakt-hudba">Úprava hudby</h3>

      <p>
        Když už jsou klipy připravené, je možné začít pracovat s hudbou. Nejprve zrušte ztlumení vrstvy se skladbou, ať je znovu
        slyšet. Pusťte si video a všimněte si, jak hudba tlumí výraznost hlasu z klipu s nádražím. Vyberte stopu hudby
        a v panelu Essential Sound se ujistěte, že má kategorii Music, případně ji na Music změňte.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/prakt_duck.png" alt="Nastavení Ducking pro hudbu">

        <figcaption>
          <div class="figure_title">Nastavení Ducking pro hudbu</div>
        </figcaption>
      </figure>

      <p>
        Zapněte záložku Ducking v Essential Sound panelu a v možnosti Duck against zvolte Dialogue. Tím určíte, že hudba se automaticky ztlumí,
        pokud bude hrát klip s dialogem. Za pomoci slideru Duck Amount nastavte intenzitu ztlumení na -12 dB.
        Tím se hudba během dialogů bude tlumit o 12 decibelů. Po nastavení klikněte na Generate Keyframes,
        čímž se v klipu s hudbou vytvoří klíčové snímky, které automaticky upraví hlasitost hudby pouze v potřebných místech.
        Nyní by měla být hudba výrazně tišší, když hraje klip s nádražím, ale stále by měla být slyšet v pozadí.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/prakt_keyframes.png" alt="Klíčové snímky pro hlasitost hudby">

        <figcaption>
          <div class="figure_title">Klíčové snímky pro hlasitost hudby</div>
        </figcaption>
      </figure>

      <p>
        Všimněte si, že na stopě s hudbou se vytvořily malé tečky. Ty znázorňují pozice klíčových snímků hlasitosti.
        V případě potřeby je možné je manuálně upravit tažením na časové ose, nebo v panelu Effect Controls.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_8/prakt_konec.png" alt="Ukončení stopy s hudbou">

        <figcaption>
          <div class="figure_title">Ukončení stopy s hudbou</div>
        </figcaption>
      </figure>

      <p>
        Použijte Razor Tool a klip s hudbou zkraťte tak, aby končil ve stejném momentě jako klip nádraží2.mov.
      </p>

      <p>
        Nyní jste do svého projektu přidali základní hudební podkres a upravili jste zbylé klipy a hlasitost hudby tak,
        aby se navzájem doplňovaly.
      </p>
    `,
    quizKey: "zvuk",
    sources: [
      {
        text: "Hudba použitá v ukázkovém projektu: Pixabay. Autor: The_Mountain. Skladba: Digital - Digital Music",
        url: "https://pixabay.com/music/corporate-digital-digital-music-492802/"
      }
    ]
  },

    {
    id: "efekty",
    menu: "Efekty",
    title: "Základy efektů",
    subtitle: "Přiblížení používání efektů a Effect Controls panelu.",
    hasAI: false,
    html: `
      <h2 id="efekty-uvod">Efekty v Premiere Pro</h2>
      <p>
        Efekty slouží k úpravě vzhledu nebo chování obrazu a zvuku. 
        Pomocí nich je možné například měnit velikost a polohu klipu, upravovat barvy, 
        rozmazávat obraz, měnit průhlednost, deformovat záběr, přidávat stylizační prvky 
        nebo vytvářet různé přechody mezi záběry. Nejde tedy jen o vizuálně výrazné změny, 
        ale i o běžné a velmi praktické úpravy, které se při střihu používají téměř neustále.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/povinne_efekty1.png" alt="Ukázka povinných efektů pro obrazové a zvukové klipy">

        <figcaption>
          <div class="figure_title">Ukázka povinných efektů pro obrazové a zvukové klipy</div>
        </figcaption>
      </figure>

      <p>
        Každý klip disponuje základními efekty, které jsou odvozeny od typu daného klipu.
        Obrazové klipy mají například povinné efekty Motion a Opacity, zatímco zvukové klipy jsou vybaveny efekty Volume a Panner.
        Pomocí těchto efektů lze upravovat základní vlastnosti daných klipů, jako je přiblížení či oříznutí obrazu, nebo
        hlasitost zvuku.
      </p>

      <p>
        Při práci s efekty je důležité myslet na to, že jejich úkolem není pouze „udělat video zajímavější“. 
        Efekty by měly mít vždy nějaký účel. Mohou pomoci diváka navést, zvýraznit důležitý detail, 
        podpořit atmosféru nebo zpřehlednit přechod mezi dvěma záběry. Příliš velké množství efektů 
        nebo jejich nevhodné použití však může působit rušivě a odvádět pozornost od samotného obsahu videa.
      </p>

<br>

      <h2 id="effects-panel">Effects panel</h2>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/effects_panel1.png" alt="Effects panel">

        <figcaption>
          <div class="figure_title">Effects panel</div>
        </figcaption>
      </figure>

      <p>
        Hlavním místem pro vyhledávání efektů je panel Effects. Zde jsou efekty 
        uspořádány do kategorií, takže je možné se v nich orientovat buď ručně, nebo pomocí vyhledávacího pole. 
        Uživatel zde najde jak obrazové efekty, tak i zvukové efekty. 
        Panel tedy slouží především jako knihovna nástrojů, které lze následně aplikovat na klipy v sekvenci.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/effects_panel2.png" alt="Ukázka aplikování efektu">

        <figcaption>
          <div class="figure_title">Ukázka aplikování efektu</div>
        </figcaption>
      </figure>

      <p>
        Na klip je možné efekt aplikovat jednoduchým přetažením z panelu Effects. 
        Samotné detailní nastavení efektu se však neprovádí přímo zde, ale v panelu Effect Controls. 
        Effects panel je tedy vhodné chápat hlavně jako místo, kde efekt najdete a použijete.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/effects_panel3.png" alt="Přechody v Effects panelu">

        <figcaption>
          <div class="figure_title">Přechody v Effects panelu</div>
        </figcaption>
      </figure>

      <p>
        Kromě samotných efektů lze v panelu Effects nalézt také přechody a presety. 
        Předvolby, označované jako presets, vypadají v panelu jako klasické efekty, ale představují již připravená nastavení efektů, 
        která je možné rychle použít bez nutnosti všechno nastavovat ručně od začátku. 
        To je užitečné zejména v situacích, kdy se stejný typ úpravy opakuje na více klipech.
      </p>

<br>

      <h2 id="effect-controls">Effect Controls</h2>

      <p>
        Po aplikaci efektu se jeho nastavení zobrazí v panelu Effect Controls. Tento panel zobrazuje 
        všechny efekty, které jsou přiřazeny k aktuálně vybranému klipu. Pokud tedy na časové ose označíte 
        jiný klip, obsah panelu se změní. Není však možné upravovat efekty pro více klipů najednou, pokud máte vybraných několik klipů,
        obsah panelu bude prázdný.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/eff_cont_panel1.png" alt="Nastavení přidaného efektu (Directional Blur) v panelu Effect Controls">

        <figcaption>
          <div class="figure_title">Nastavení přidaného efektu (Directional Blur) v panelu Effect Controls</div>
        </figcaption>
      </figure>

      <p>
        V panelu Effect Controls se nacházejí jak pevně přítomné vlastnosti klipu, tak i efekty, které byly 
        přidány ručně. U každé položky je možné měnit konkrétní hodnoty, nejčastěji číselně zadat hodnotu parametru, 
        vypnout/zapnout dané nastavení, či animovat vlastnost v čase. 
      </p>

      <p>
        Je zde možné efekty nejen nastavovat, ale také je resetovat, kopírovat jejich nastavení nebo postupně měnit 
        jejich hodnoty v průběhu času. Právě zde se pracuje i s klíčovými snímky (keyframes), které tvoří základ animace.
        <i>O těchto snímcích pojednává kapitola 10.</i>
      </p>

<br>

      <h2 id="motion">Motion a Opacity</h2>
      <p>
        Motion je jedna ze základních vlastností každého video klipu. Není potřeba ji na klip nijak zvlášť přidávat, 
        protože je přítomná automaticky. Slouží k základní transformaci obrazu v rámci výsledného snímku, 
        tedy k tomu, jak bude klip v záběru umístěn a jak bude vypadat.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/motion.png" alt="Motion efekt">

        <figcaption>
          <div class="figure_title">Motion efekt</div>
        </figcaption>
      </figure>

      <p>
        Mezi nejdůležitější parametry Motion patří Position, Scale, Rotation a Anchor Point. 
        Position určuje polohu klipu v obraze. Scale mění jeho velikost, tedy přiblížení nebo oddálení. 
        Rotation slouží k natočení klipu. Anchor Point představuje bod, kolem kterého se některé transformace, 
        zejména otáčení a škálování, provádějí.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/opacity.png" alt="Opacity efekt">

        <figcaption>
          <div class="figure_title">Opacity efekt</div>
        </figcaption>
      </figure>

      <p>
        Opacity je další ze základních vlastností video klipů. Slouží k nastavení neprůhlednosti klipu, tedy k tomu, jak moc bude 
        klip viditelný. Při hodnotě 100 % je video plně viditelné, hodnota 0% znamená kompletní průhlednost.
      </p>

<br>
      <h2 id="audio">Volume a Panner</h2> 

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/audio1.png" alt="Volume a Panner efekty">

        <figcaption>
          <div class="figure_title">Volume a Panner efekty</div>
        </figcaption>
      </figure>

      <p>
        Stejně jako video klipy, i zvukové klipy mají svá základní nastavení, která se nachází v záložce Audio. 
        Zde jsou povinné efekty, jako například Volume (hlasitost) a Panner 
        (poměr mezi levým a pravým kanálem). Pomocí těchto parametrů lze upravit celkovou hlasitost zvuku, jeho prostorové 
        umístění nebo například kompletně ztlumit zvuk pomocí Mute nastavení.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/audio2.png" alt="Channel Volume efekt">

        <figcaption>
          <div class="figure_title">Channel Volume efekt</div>
        </figcaption>
      </figure>

      <p>
        Pokud je audiostopa typu Stereo, zobrazí se i třetí efekt, Channel Volume. Ten umožňuje upravit hlasitost 
        jednotlivých kanálů (levý a pravý) zvlášť, což je užitečné pro vytvoření prostorového zvuku.
      </p>

  <br>

      <h2 id="prechody">Přechody</h2>
      <p>
        Přechod je speciální typ efektu, který se používá mezi dvěma klipy, případně na začátku nebo konci klipu. 
        Jeho úkolem je vizuálně nebo zvukově propojit dvě objekty. Pokud mezi klipy není použit žádný přechod, 
        dochází k obyčejnému střihu, tedy okamžitému přepnutí z jednoho do druhého.
      </p>

      <p>
        Premiere Pro nabízí přechody jak pro video, tak pro audio. V případě obrazu ovlivňují změnu mezi dvěma záběry, 
        u zvuku pak pomáhají odstranit nepříjemné skoky mezi dvěma stopami.
        Mezi nejčastější přechody patří například prolnutí (Fade), tedy postupné plynulé nahrazení jednoho obrazu druhým.
        Ačkoliv je tento přechod jeden z nejpoužívanějších, neexistuje v panelu Effects jako samostatný efekt,
        ale je třeba ho vytvořit právě pomocí keyframes u vlastnosti Opacity.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prechody1.png" alt="Crossfade kategorie v panelu Effects">

        <figcaption>
          <div class="figure_title">Crossfade kategorie v panelu Effects</div>
        </figcaption>
      </figure>

      <p>
        Pro audioklipy existuje obdobný typ přechodu,
        který se nazývá Crossfade a vytváří plynulou změnu hlasitosti mezi dvěma zvukovými stopami. Crossfade naopak od obrazového
        Fade existuje jako efekt v panelu Effects, konkrétně ve své vlastní kategorii.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prechody2.png" alt="Ukázka aplikování přechodů">

        <figcaption>
          <div class="figure_title">Ukázka aplikování přechodů</div>
        </figcaption>
      </figure>

      <p>
        Přechody se stejně jako běžné efekty vybírají v panelu Effects. Následně se přetáhnou na střih mezi dvěma klipy 
        nebo na začátek či konec klipu. Po aplikaci je možné jejich délku a přesné umístění upravit přímo na časové ose 
        nebo v panelu Effect Controls. Délka přechodu výrazně ovlivňuje jeho výsledné působení. Krátký přechod bývá nenápadný, 
        delší přechod je naopak výraznější a více na sebe upozorňuje.
      </p>

<br>

      <h2 id="prakticka-efekty">Praktická část</h2>
      <p>
        V této části si vyzkoušíte aplikovat přechody mezi klipy, práci s panelem Effect Controls a seznámíte se s nastavením 
        základních parametrů efektu Motion.
      </p>

      <h3 id="prakt-prechody">Přechody mezi klipy</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_prechody1.png" alt="Video Transitions kategorie v panelu Effects">

        <figcaption>
          <div class="figure_title">Video Transitions kategorie v panelu Effects</div>
        </figcaption>
      </figure>

      <p>
        Otevřete si projekt Cesta vlakem. V panelu Effects najděte kategorii Video Transitions. Zde se nachází různé kategorie
        přechodů pro video stopy.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_prechody2.png" alt="Aplikování přechodu Wipe > Stretch Wipe">

        <figcaption>
          <div class="figure_title">Aplikování přechodu Wipe > Stretch Wipe</div>
        </figcaption>
      </figure>

      <p>
        Vyberte například přechod Wipe > Stretch Wipe a přetáhněte ho na první střih, tedy mezi klipy nádraží1.mov a cesta_vlakem1.mov.
        Přechod se zobrazí jako malý obdélník, který se nachází na střihu mezi těmito dvěma klipy. 
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_prechody3.png" alt="Set Transition Duration pro úpravu délky přechodu">

        <figcaption>
          <div class="figure_title">Set Transition Duration pro úpravu délky přechodu</div>
        </figcaption>
      </figure>

      <p>
        Přehrajte si část sekvence, kde se tento přechod nachází a všimněte si, jak se klipy navzájem prolínají.
        Pokud vám nevyhovuje délka přechodu, můžete ji upravit pravým kliknutím myši na přechod a zvolením možnosti Set Transition 
        Duration, nebo jednoduše tažením za okraj přechodu přímo na časové ose.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_prechody4.png" alt="Možnost Clear pro odstranění přechodu">

        <figcaption>
          <div class="figure_title">Možnost Clear pro odstranění přechodu</div>
        </figcaption>
      </figure>

      <p>
        Přechod můžete odstranit pomocí pravého kliknutí a zvolením možnosti Clear.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_prechody5.png" alt="Přechody na zbylých střizích">

        <figcaption>
          <div class="figure_title">Přechody na zbylých střizích</div>
        </figcaption>
      </figure>

      <p>
        Projděte si další kategorie přechodů a aplikujte je na další střihy mezi ostatní klipy. 
        <i>Na obrázku byly pro jednotlivé střihy zvoleny tyto přechody (chronologicky): Wipe > Stretch Wipe, 
        Dissolve > Blur Dissolve, Dissolve > Film Dissolve, Wipe > Stretch Wipe.</i>
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_prechody6.png" alt="Constant Gain aplikovaný na konec klipu s hudbou">

        <figcaption>
          <div class="figure_title">Constant Gain aplikovaný na konec klipu s hudbou</div>
        </figcaption>
      </figure>

      <p>
        Přechody existují i pro zvukové stopy a nacházejí se v panelu Effects pod kategorií Audio Transitions > Crossfade.
        Zde jsou tři varianty přechodu pro zvuk: Constant Power, Constant Gain a Exponential Fade. Všechny tyto přechody vytváří 
        plynulou změnu hlasitosti mezi dvěma zvukovými klipy či mezi klipem a tichou částí. Liší se křivkou, podle které
        se hlasitost mění. Pro konec hudby v projektu zvolte například přechod Constant Gain a přetáhněte ho na konec klipu s hudbou. 
        Tím se vytvoří plynulý fade out, tedy postupné zeslabení hudby až do ticha.
      </p>

<br>

      <h3 id="prakt-efekty">Ukázka úprav pomocí Motion</h3>

      <p>
        Následující část se zaměřuje na základní parametry efektu Motion. Tyto parametry patří mezi nejpoužívanější 
        nástroje při práci s videem a objevují se i u řady dalších efektů. Je proto důležité porozumět tomu, jak fungují. 
        Nejde jen o jednorázový postup, ale o principy, které budete využívat opakovaně při práci na vlastních projektech. 
        Doporučuje se proto jednotlivé parametry vyzkoušet a osahat, abyste porozuměli tomu, jak dokáží klip měnit.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_motion1.png" alt="Motion a Opacity pro klip s nádražím">

        <figcaption>
          <div class="figure_title">Motion a Opacity pro klip s nádražím</div>
        </figcaption>
      </figure>

      <p>
        Na časové ose zvolte například klip nádraží2.mov a otevřete panel Effect Controls.
        Všimněte si, že tento klip má již přiřazené základní efekty Motion a Opacity. Vyzkoušejte si různé úpravy pomocí
        nastavení v efektu Motion.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_motion2.png" alt="Parametr Scale">

        <figcaption>
          <div class="figure_title">Parametr Scale</div>
        </figcaption>
      </figure>

      <p> 
        Nastavení Scale mění přiblížení klipu, základní hodnota je 100, při zvýšení hodnoty se klip přiblíží a při snížení se oddálí.
        Zkuste klip s nádražím přiblížit na hodnotu 160, čímž se vytvoří efekt zoomu. Hodnotu lze upravovat buď kliknutím na 
        modré číslo a napsáním nové hodnoty, nebo podržením na hodnotě a tažením. 
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_motion3.png" alt="Vypnutí Uniform Scale">

        <figcaption>
          <div class="figure_title">Vypnutí Uniform Scale</div>
        </figcaption>
      </figure>
      
      <p>
        Všimněte si, že se klipu zvětšuje 
        rovnoměrně šířka i výška. Toto chování lze vypnout odškrtnutím políčka Uniform Scale, přičemž se vám nastavení Scale 
        změní na Scale Height (velikost výšky) a Scale Width (velikost šířky). Pomocí těchto polí pak můžete dimenze klipu 
        zvětšovat/zmenšovat libovolně. To ale může vést k deformaci obrazu, proto je důležité s tímto nastavením pracovat opatrně. 
        Pokud nepotřebujete opravit dimenze či záměrně klip deformovat, je lepší ponechat nastavení Uniform Scale zapnuté. 
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_motion4.png" alt="Uniform a Anchor Point">

        <figcaption>
          <div class="figure_title">Uniform a Anchor Point</div>
        </figcaption>
      </figure>

      <p>
        Se Scale se často upravuje i nastavení Position a Anchor Point. Tato dvě nastavení mohou na první
        pohled působit podobně, ale jejich účel je odlišný. Position určuje, kde se klip nachází ve výsledném obrazu,
        tedy zda je více vlevo, vpravo, nahoře nebo dole. Anchor Point naopak představuje vnitřní kotevní bod klipu,
        kolem kterého se provádí škálování a otáčení. Ve výchozím stavu se tento bod nachází přibližně uprostřed klipu.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_motion5.png" alt="Ukázka nastavení parametru Position">

        <figcaption>
          <div class="figure_title">Ukázka nastavení parametru Position</div>
        </figcaption>
      </figure>

      <p>
        Position se nastavuje pomocí dvou hodnot. První hodnota určuje vodorovnou polohu, druhá svislou.
        Pokud tedy změníte Position, neposouváte „obsah uvnitř klipu“, ale celý klip v rámci výsledného snímku.
        To se hodí například tehdy, když chcete po přiblížení pomocí Scale upravit výřez tak, aby v obraze zůstal
        důležitý objekt, například budova nádraží nebo postava.
      </p>

      <p>
        Anchor Point funguje jinak. Neurčuje, kam je klip umístěn ve výsledném obrazu, ale určuje bod, od kterého
        se počítá transformace klipu. Pokud tedy změníte Scale nebo Rotation, Premiere Pro provádí tuto změnu právě
        vzhledem ke kotevnímu bodu. Když je Anchor Point uprostřed klipu, klip se zvětšuje nebo otáčí kolem středu.
        Pokud byste Anchor Point přesunuli například více doleva, klip by se při zvětšování nebo otáčení choval tak,
        jako by byl „uchycený“ právě v tomto novém bodě.
      </p>

      <p>
        V praxi tedy obvykle platí, že pokud chcete pouze posunout výřez, upravíte Position. Pokud ale chcete změnit,
        kolem jakého místa se má klip zvětšovat nebo otáčet, upravíte Anchor Point. Pro běžný jednoduchý zoom většinou
        stačí pracovat jen se Scale a případně s Position. Anchor Point se častěji využívá u složitějších animací
        nebo ve chvíli, kdy potřebujete, aby se klip nepřibližoval od středu, ale od jiného místa.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_motion6.png" alt="Parametr Rotation">

        <figcaption>
          <div class="figure_title">Parametr Rotation</div>
        </figcaption>
      </figure>

      <p>
        Dalším nastavením v efektu Motion je Rotation, které slouží k natočení klipu. Základní hodnota je 0°, při zvýšení hodnoty se 
        klip otáčí ve směru hodinových ručiček, při snížení se otáčí proti směru hodinových ručiček. Stejně jako u Scale, i zde se 
        změna projeví vzhledem k Anchor Pointu.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_motion7.png" alt="Reset tlačítko pro parametry">

        <figcaption>
          <div class="figure_title">Reset tlačítko pro parametry</div>
        </figcaption>
      </figure>

      <p>
        Vyzkoušejte si různé kombinace těchto nastavení a sledujte, jak se klip chová. Zkuste například přiblížit klip pomocí 
        Scale a poté upravit Position tak, aby v záběru zůstal důležitý objekt. Následně změňte Anchor Point a pozorujte, jak se 
        klip zvětšuje nebo otáčí kolem nového bodu.
        V případě potřeby můžete libovolné nastavení v rámci efektů resetovat pomocí tlačítka Reset Parameter, které vrátí
        danou vlastnost do výchozího stavu.
      </p>

<br>
      <h3 id="prakt-zoom">Přiblížení klipu</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_priblizeni.png" alt="Přiblížení klipu nádraží2.mov pomocí Scale">

        <figcaption>
          <div class="figure_title">Přiblížení klipu nádraží2.mov pomocí Scale</div>
        </figcaption>
      </figure>

      <p>
        Poté, co jste si vyzkoušeli nastavení parametrů v efektu Motion, je čas je využít pro úpravu klipu s nádražím.
        Resetujte všechny parametry efektu Motion a přibližte ho pomocí Scale na hodnotu 120.
        Ze záběru tak zmizí část prázdného nádraží a kus zábradlí, které předtím mohly odvádět pozornost od vlaků.
      </p>

<br>
      <h3 id="prakt-obrazek">Úprava loga s vlakem</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_logo1.png" alt="Přetažení loga na časovou osu">

        <figcaption>
          <div class="figure_title">Přetažení loga na časovou osu</div>
        </figcaption>
      </figure>

      <p>
        Na časovou osu přetáhněte z binu Obrázky klip logo_bílá.png a umístěte ho nad klip nádraží1.mov. 
        Obrázek má bílou barvu, a oproti barevnému pozadí tolik nevyniká.
      </p>
      
      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_logo2.png" alt="Vyhledání efektu Drop Shadow v panelu Effects">

        <figcaption>
          <div class="figure_title">Vyhledání efektu Drop Shadow v panelu Effects</div>
        </figcaption>
      </figure>

      <p>
        V panelu Effects pomocí vyhledávacího pole vyhledejte efekt Drop Shadow. Alternativně ho najdete v kategorii
        Video Effects > Perspective. Tento efekt přetáhněte na klip s logem.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_logo3.png" alt="Nastavení Drop Shadow v panelu Effect Controls">

        <figcaption>
          <div class="figure_title">Nastavení Drop Shadow v panelu Effect Controls</div>
        </figcaption>
      </figure>

      <p>
        V panelu Effect Controls se vám, pro klip logo_bílá.png, zobrazí nastavení tohoto efektu. Drop Shadow slouží k vytvoření
        stínu za objektem.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_logo4.png" alt="Úprava parametrů Drop Shadow">

        <figcaption>
          <div class="figure_title">Úprava parametrů Drop Shadow</div>
        </figcaption>
      </figure>

      <p>
        Upravte parametr Drop Shadow > Opacity na hodnotu 100%. Dále oddalte stín od objektu
        za pomoci parametru Drop Shadow > Distance, použijte hodnotu 25.
        Vytvoříte tak černý obrysový stín na jedné straně, který pomůže, aby logo více vyniklo a nebylo ztracené na pozadí.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_logo5.png" alt="Úprava parametrů Motion efektu">

        <figcaption>
          <div class="figure_title">Úprava parametrů Motion efektu</div>
        </figcaption>
      </figure>

      <p>
        Logo nyní vypadá lépe, ale zakrývá velkou část obrazu. Pomocí parametru Motion > Scale zmenšete logo na hodnotu 75 a přesuňte
        ho například do levého dolního rohu obrazu. Přesun realizujte použitím parametru Motion > Position.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_9/prakt_logo6.png" alt="Výsledná podoba loga po úpravách">

        <figcaption>
          <div class="figure_title">Výsledná podoba loga po úpravách</div>
        </figcaption>
      </figure>

      <p>
        Logo by pak ve výsledku mělo vypadat, jako na obrázku výše.
      </p>
    `,
    quizKey: "efekty",
    sources: []
  },

  {
    id: "animace",
    menu: "Animace a Keyframes",
    title: "Animace a Keyframes",
    subtitle: "Rozpohybování statických efektů skrze animace.",
    hasAI: false,
    html: `
      <h2 id="keyframes">Klíčové snímky (Keyframes)</h2>
      <p>
        Klíčové snímky, anglicky keyframes, slouží k animaci vlastností v čase. 
        Princip je poměrně jednoduchý: uživatel zvolí, jakou hodnotu má mít určitá vlastnost v jednom okamžiku 
        a jakou v jiném. Premiere Pro potom dopočítá průběh změny mezi těmito body. 
        Díky tomu lze vytvořit pohyb, postupné zesílení či zeslabení efektu, postupnou změnu velikosti a mnoho dalších 
        typů animací.
      </p>

      <p>
        Typickou animací je pro příklad přiblížení záběru za účelem zvětšit důležitou oblast. Ačkoliv je možné původní klip
        roztřihnout a část, která se soustředí na určitou oblast záběru přiblížit staticky, přístup s animací působí
        více profesionálně a pomáhá udržet pozornost diváka. 
      </p>

      <p>
        Pro příklad lze uvést tvorbu videonávodu, který se zabývá vysvětlováním funkcí určitého softwaru. Při popisu 
        specifických oken, či tlačítek by bylo vhodné změnit kompozici tak, aby byl probíraný objekt dobře vidět.
        Situace, kdy se mluvčí přesouvá z popisu jiné části rozhraní se pomocí animace změní, ze segmentovaného popisu se střihy,
        na plynulý výklad, který se kompozičně přizpůsobuje dle potřeby.
      </p>

      <p>
        Za další situaci, kdy je výhodné použít keyframes, lze považovat například práci s hlasitostí hudby.
        Pouhé ustřižení hudební stopy a náhlé zvýšení hlasitosti by mohlo působit rušivě a pokud by byl rozdíl mezi hlasitostmi
        velký, mohlo by to diváka i vylekat. Postupné navyšování hlasitosti, rozložené do několika vteřin, na druhou stranu 
        zní přirozeněji a dosáhne stejného zamýšleného výsledku.
      </p>

<br>

      <h2 id="effect-con-pole">Animační oblast v Effect Controls</h2>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/anim_obl1.png" alt="Animační oblast v panelu Effect Controls">

        <figcaption>
          <div class="figure_title">Animační oblast v panelu Effect Controls</div>
        </figcaption>
      </figure>

      <p>
        Na pravé straně panelu Effect Controls se nachází řádkovaná oblast pro animace. Zde je možné
        vizuálně vidět pozice jednotlivých klíčových snímků. Každý řádek odpovídá jednomu parametru.
      </p>
      
      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/anim_obl2.png" alt="Přehrávací hlava a měřítko animační oblasti">

        <figcaption>
          <div class="figure_title">Přehrávací hlava a měřítko animační oblasti</div>
        </figcaption>
      </figure>

      <p>
        Tato oblast představuje lokální časovou osu pro vybraný klip, její měřítko je možné upravit pomocí
        scrollbaru na spodu této oblasti. Chycením za okraj a zmenšením bude osa detailnější, roztažením se měřítko
        zmenšuje. Zobrazuje se zde i přehrávací hlava, jejíž pozice odpovídá pozici přehrávací hlavy na časové ose.
        To znamená, že pokud přehrávací hlava protíná právě vybraný klip, bude zde vidět v místě protnutí. Pokud je na Timeline
        panelu přehrávací hlava mimo klip, nebude v této oblasti vidět.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/anim_obl3.png" alt="Plocha pro posouvání přehrávací hlavy v animační oblasti">

        <figcaption>
          <div class="figure_title">Plocha pro posouvání přehrávací hlavy v animační oblasti</div>
        </figcaption>
      </figure>

      <p>
        V horní části oblasti je plocha, která po kliknutí přesune přehrávací hlavu na pozici kliknutí. Pohyb přehrávací hlavy tedy 
        lze ovládat i zde, avšak jak už bylo řečeno, v této oblasti je limitován pouze na vybraný klip. Pohyb hlavy lze také 
        realizovat po jednotlivých snímcích pomocí šipek na klávesnici, stejným způsobem jako na Timeline panelu.
      </p>

<br>
    
      <h2 id="tvorba-animace">Tvorba animace</h2>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/tvorba_anim1.png" alt="Toggle animation pro zapnutí klíčových snímků">

        <figcaption>
          <div class="figure_title">Toggle animation pro zapnutí klíčových snímků</div>
        </figcaption>
      </figure>

      <p>
        Klíčové snímky lze nastavovat pro většinu parametrů všech efektů, výjimkou jsou například parametry
        se zaškrtávacím polem. Tvorba probíhá v panelu Effect Controls, kde se po kliknutí na ikonu hodin (tlačítko
        Toggle animation) v levé části panelu, pro daný parametr zapnou klíčové snímky. V bodě, kde se nachází 
        přehrávací hlava se pak vytvoří první keyframe.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/tvorba_anim2.png" alt="Tlačítka pro posouvání mezi a pro přidávání/odstraňování klíčových snímků">

        <figcaption>
          <div class="figure_title">Tlačítka pro posouvání mezi a pro přidávání/odstraňování klíčových snímků</div>
        </figcaption>
      </figure>

      <p>
        Na pravé straně pole daného parametru se, po Toggle animation, objeví tři tlačítka: Go to Previous Keyframe, Add/Remove Keyframe,
        Go to Next Keyframe. Pomocí těchto tlačítek je možné se posouvat vždy na předchozí/následující klíčový snímek.
        Tlačítko Add/Remove Keyframe slouží pro tvorbu a smazání klíčového snímku. Odstranění se provede pokud se v momentě jeho
        stisknutí přehrávací hlava nachází na pozici již existujícího keyframe. Pokud se přehrávací hlava nepřekrývá s 
        pozicí žádného keyframe, tak tlačítko vytvoří nový. Alternativně je možné klíčový snímek vytvořit pouze upravením hodnoty
        parametru, který má zapnuté Toggle animation, v místě, kde se žádný keyframe zatím nenachází.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/tvorba_anim3.png" alt="Délka animace mezi klíčovými snímky">

        <figcaption>
          <div class="figure_title">Délka animace mezi klíčovými snímky</div>
        </figcaption>
      </figure>

      <p>
        Animaci program vytvoří automaticky po přidání alespoň dvou klíčových snímků pro určitý parametr s různými hodnotami.
        Vypočítá se rozdíl mezi hodnotami, který se od prvního klíčového snímku, postupně vyrovnává. Trvání animace
        lze upravit posouváním klíčových snímků od sebe (zpomalení), nebo k sobě (zrychlení).
      </p>

      <p>
        <i>Všechny keyframes, pro daný parametr, je možné smazat vypnutím možnosti Toggle animation.</i>
      </p>

<br>
<hr>
<br>

      <h2 id="prakticka-animace">Praktická část</h2>
      <p>
        V této části si vyzkoušíte vytvořit jednoduchou animaci pro logo vlaku.
      </p>

      <h3 id="prakt-priprava">Příprava</h3>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/prakt_priprava1.png" alt="Vložení vnořené sekvence s logem na časovou osu">

        <figcaption>
          <div class="figure_title">Vložení vnořené sekvence s logem na časovou osu</div>
        </figcaption>
      </figure>

      <p>
        Otevřete si projekt cesta vlakem. V Project Panelu otevřete bin Sekvence a přetáhněte sekvenci Logo animace
        na časovou osu nad klip nádraží2.mov. Vnořenou sekvenci Logo animace jste si připravili v kapitole "Sekvence a časová osa".
        Pomocí Unlink odstraňte zvukovou stopu této vnořené sekvence.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/prakt_priprava2.png" alt="Zkrácení klipů uvnitř sekvence Logo animace">

        <figcaption>
          <div class="figure_title">Zkrácení klipů uvnitř sekvence Logo animace</div>
        </figcaption>
      </figure>

      <p>
        Dvojitým kliknutím vnořenou sekvenci otevřete a zobrazí se vám dva obrázky s logem. Zkraťte jednotlivě oba klipy
        přibližně na 1,5 vteřiny a odstraňte případné ripples.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/prakt_priprava3.png" alt="Odstranění prázdné části vzniklé zkrácením klipů">

        <figcaption>
          <div class="figure_title">Odstranění prázdné části vzniklé zkrácením klipů</div>
        </figcaption>
      </figure>

      <p>
        Nyní se přepněte zpět do hlavní sekvence. I když jste ostřihnutím klipů uvnitř vnořené sekvence zkrátili její délku,
        v hlavní sekvenci se stále zobrazuje v původním rozsahu. Část, kde uvnitř vnořené sekvence nic není, je zvýrazněna
        diagonálními pruhy. Ostřihněte tuto oblast, tak aby zbytečně nezabírala místo.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/prakt_priprava4.png" alt="Zkopírování efektu Drop Shadow z klipu logo_bílá.png">

        <figcaption>
          <div class="figure_title">Zkopírování efektu Drop Shadow z klipu logo_bílá.png</div>
        </figcaption>
      </figure>

      <p>
        V minulé kapitole jste klip logo_bílá.png upravili efektem Drop Shadow, aby nyní loga nepůsobila odlišně,
        bylo by vhodné efekty sjednotit. Jednou možností, jak to udělat je zkopírovat klip s logem do vnořené sekvence,
        alternativně můžete efekty zkopírovat napříč klipy. Označte klip logo_bílá.png v panelu Effect Controls 
        klikněte pravým tlačítkem na název efektu Drop Shadow. V kontextovém menu zvolte Copy. 
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/prakt_priprava5.png" alt="Vložení zkopírovaného efektu do klipů uvnitř vnořené sekvence">

        <figcaption>
          <div class="figure_title">Vložení zkopírovaného efektu do klipů uvnitř vnořené sekvence</div>
        </figcaption>
      </figure>

      <p>
        Poté se přesuňte zpět do vnořené sekvence Logo animace. Zde označte klip logo_bílá.png a v panelu Effect Controls
        klikněte pravým tlačítkem myši a zvolte možnost Paste. Tím se zkopíruje efekt Drop Shadow i s nastavenými parametry.
        Efekt zkopírujte i do klipu logo_černá.png.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/prakt_priprava6.png" alt="Změna barvy stínu v efektu Drop Shadow">

        <figcaption>
          <div class="figure_title">Změna barvy stínu v efektu Drop Shadow</div>
        </figcaption>
      </figure>

      <p>
        Všechny klipy s logy mají teď stejně nastavený efekt Drop Shadow. Ale pod černým logem nevynikne černý obrysový stín,
        proto v jeho efektu Drop Shadow upravte parametr Shadow Color na bílou barvu. To provedete kliknutím na obdélníček s barvou
        a zvolením bílé barvy v okně Color Picker.
      </p>

<br>

      <h3 id="prakt-animace2">Tvorba animace</h3>

      <p>
        Nyní se přepněte zpět do hlavní sekvence. Přehrajte si část, kde se nachází vnořená sekvence Logo animace.
        Všimněte si, že máte v jednom klipu bílé logo, které se po 1,5 vteřině změní na černé. Zatím to bez animace působí jen jako
        střih. Zvolte tedy klip s vnořenou sekvencí a otevřete panel Effect Controls.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/prakt_animace1.png" alt="Úprava parametrů Motion pro vnořenou sekvenci">

        <figcaption>
          <div class="figure_title">Úprava parametrů Motion pro vnořenou sekvenci</div>
        </figcaption>
      </figure>

      <p>
        Budete vytvářet animaci, která plynule zobrazí logo na obrazovce a při přeměně barvy se lehce nakloní.
        Začněte tím, že přesunete logo na podobné místo, jako v minulé kapitole klip logo_bílá.png, tedy upravíte
        parametr Motion > Position a Motion > Scale, nebo zkopírujete Motion efekt z klipu logo_bílá.png.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/prakt_animace2.png" alt="Toggle animation pro zapnutí klíčových snímků u parametru Position">

        <figcaption>
          <div class="figure_title">Toggle animation pro zapnutí klíčových snímků u parametru Position</div>
        </figcaption>
      </figure>

      <p>
        Pro vytvoření pohybu obrázku použijete parametr Motion > Position.
        Posuňte přehrávací hlavu na začátek klipu a zapněte Toggle animation pro parametr Motion > Position.
        Tím se vytvoří první keyframe pro animaci, který odpovídá aktuálnímu nastavení parametru.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/prakt_animace3.png" alt="Vytvoření druhého klíčového snímku">

        <figcaption>
          <div class="figure_title">Vytvoření druhého klíčového snímku</div>
        </figcaption>
      </figure>

      <p>
        Posuňte se o 10 snímků dopředu, nejlépe použitím šipek na klávesnici. Zde stisknutím tlačítka Add/Remove Keyframe
        vytvořte druhý keyframe. Zatím se vám žádná animace nevytvoří, protože parametry mají v obou 
        keyframe bodech stejnou hodnotu.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/prakt_animace4.png" alt="Úprava prvního keyframe pro vytvoření animace">

        <figcaption>
          <div class="figure_title">Úprava prvního keyframe pro vytvoření animace</div>
        </figcaption>
      </figure>

      <p>
        Tlačítkem Go to Previous Keyframe se vraťte na první klíčový snímek a změňte hodnotu Position tak,
        aby se logo nacházelo těsně pod obrazem a nebylo vidět. Když si nyní klip přehrajete, uvidíte animaci loga,
        které plynule vyjede do obrazu. <i>(V obrázku je použita svislá pozice 1367).</i>
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/prakt_animace5.png" alt="Vytvoření animace pro konec klipu">

        <figcaption>
          <div class="figure_title">Vytvoření animace pro konec klipu</div>
        </figcaption>
      </figure>

      <p>
        Zopakujte tento postup i na konci klipu, s tím rozdílem, že na prvním klíčovém snímku bude logo v obraze
        a na druhém znovu zajede pod obraz. Tím vytvoříte animaci, kdy logo na začátku klipu vyjede do obrazu a na konci 
        z něj sjede dolů.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/prakt_animace6.png" alt="Toggle animation pro zapnutí klíčových snímků u parametru Rotation">

        <figcaption>
          <div class="figure_title">Toggle animation pro zapnutí klíčových snímků u parametru Rotation</div>
        </figcaption>
      </figure>

      <p>
        Dále je potřeba vytvořit jednoduchou animaci rotace při změně barvy loga. Posuňte přehrávací hlavu na místo, kde
        změna probíhá, tedy přibližně doprostřed klipu Logo animace. Zapněte Toggle animation pro parametr Motion > Rotation 
        a nastavte jeho hodnotu na 9°.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_10/prakt_animace7.png" alt="Dokončení rotační animace">

        <figcaption>
          <div class="figure_title">Dokončení rotační animace</div>
        </figcaption>
      </figure>

      <p>
        Vytvořte pro tento parametr keyframe 3 snímky před a 3 snímky po této pozici. V těchto krajních keyframes nastavte hodnotu
        Rotation na 0°, nebo stiskněte Reset tlačítko. Tím se vytvoří jednoduchá animace, kdy se logo při změně barvy lehce nakloní 
        a poté se vrátí zpět.
      </p>

    `,
    quizKey: "animace",
    sources: []
  },

  {
    id: "barvy",
    menu: "Úprava barev",
    title: "Práce s barvami",
    subtitle: "Seznámení se základy barevných úprav a panelem Lumetri Color.",
    hasAI: true,
    html: `
      <h2 id="proc-upravovat-barvy">Proč se barvy upravují</h2>
      <p>
        Při práci s videem nestačí řešit pouze samotný střih. Důležitou roli hraje i to, jak obraz ve výsledku působí.
        Natočený materiál se totiž může lišit od toho, jak vypadal ve skutečnosti při pořizování. Záběr může být
        příliš tmavý, moc studený, nažloutlý nebo celkově nevýrazný. V takové situaci přichází na řadu práce s barvami.
      </p>

      <p>
        Jedním z hlavních důvodů barevných úprav je oprava obrazu. Editor se snaží záběry upravit tak, aby působily
        přirozeněji a technicky správněji. Zároveň je důležité udržovat konzistentní vzhled napříč celým videem.
        Pokud by měl každý záběr jiný barevný nádech, mohly by přechody mezi nimi působit rušivě a nejednotně.
      </p>

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/matrix.png" alt="Ukázka změny barev ve filmu Matrix">

          <figcaption>
            <div class="figure_title">Ukázka změny barev ve filmu Matrix</div>
            <div class="figure_source">
              Zdroj:
              <a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/ColorWash"
                >
                TV Tropes
              </a>
            </div>
          </figcaption>
        </figure>

      <p>
        Barevné úpravy ale neslouží jen k opravám. Mohou být také kreativním nástrojem, kterým se záměrně vytváří
        určitý styl nebo atmosféra. Teplejší odstíny často působí příjemněji a útulněji, chladnější naopak mohou
        vyvolávat pocit odstupu nebo napětí. Díky tomu lze pomocí barev podpořit celkové vyznění videa a lépe
        vést divákovu pozornost.
      </p>

  <br>

        <h2 id="lumetri-color">Lumetri Color</h2>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/lumetri1.png" alt="Panel Lumetri Color">

          <figcaption>
            <div class="figure_title">Panel Lumetri Color</div>
          </figcaption>
        </figure>

        <p>
          Hlavním nástrojem pro práci s barvami v Adobe Premiere Pro je panel Lumetri Color. Ten sdružuje většinu důležitých
          nástrojů pro základní barevnou korekci i pokročilejší úpravy. Místo používání více oddělených efektů tak lze většinu
          běžné práce provádět na jednom místě.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/lumetri2.png" alt="Záložka Basic Correction v panelu Lumetri Color">

          <figcaption>
            <div class="figure_title">Záložka Basic Correction v panelu Lumetri Color</div>
          </figcaption>
        </figure>

        <p>
          Panel Lumetri Color je rozdělen do několika záložek. Každá z nich se zaměřuje na jiný typ úprav. Pro začátečníka je
          nejdůležitější především sekce Basic Correction, ve které lze nalézt všechny potřebné nástroje pro základní korekci.
          V sekci Color jsou slidery pro úpravu teploty a sytosti barev. V sekci Light jsou zase nástroje pro úpravu
          kontrastu, stínů a další.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/lumetri3.png" alt="Záložka Creative v panelu Lumetri Color">

          <figcaption>
            <div class="figure_title">Záložka Creative v panelu Lumetri Color</div>
          </figcaption>
        </figure>

        <p>
          Záložka Creative slouží spíše k dodání určitého stylu nebo nálady. Uživatel zde může použít přednastavené vzhledy obrazu 
          a jednoduše tak změnit celkové barevné působení záběru. Hodí se tedy hlavně tehdy, když už je obraz základně opravený a 
          chcete mu dodat zajímavější vzhled.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/lumetri4.png" alt="Záložka Curves v panelu Lumetri Color">

          <figcaption>
            <div class="figure_title">Záložka Curves v panelu Lumetri Color</div>
          </figcaption>
        </figure>

        <p>
          Sekce Curves umožňuje přesnější práci s barvami a jasem. Oproti základním posuvníkům dává větší kontrolu nad tím, 
          jak se mají upravit světlé, tmavé nebo konkrétně barevné části obrazu.
        </p>

        <p>
          Zbývající sekce slouží k detailnějším a přesnějším úpravám obrazu. Color Wheels & Match umožňuje upravovat barvy zvlášť 
          ve stínech, středních tónech a světlech a také sladit barevnost mezi dvěma záběry. HSL Secondary se používá tehdy, 
          když je potřeba upravit jen určitou vybranou barvu v obrazu, aniž by se výrazně změnil zbytek záběru. 
          Poslední sekcí je Vignette, která slouží k jemnému zesvětlení nebo ztmavení okrajů obrazu, čímž může pomoci zvýraznit 
          střed záběru.
        </p>


  <br>

        <h2 id="zakladni-korekce">Základní korekce</h2>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/korekce1.png" alt="Příklad záběru před a po základní korekci">

          <figcaption>
            <div class="figure_title">Příklad záběru před a po základní korekci</div>
          </figcaption>
        </figure>

        <p>
          Základní korekce je první krok, od kterého se obvykle práce s barvou odvíjí. Jejím cílem není vytvořit výraznou stylizaci,
          ale dostat obraz do vyváženého a použitelnějšího stavu. Jinými slovy jde o technickou úpravu záběru tak, aby nepůsobil
          příliš tmavě, přesvětleně nebo barevně posunutě.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/korekce2.png" alt="Nastavení teploty barev">

          <figcaption>
            <div class="figure_title">Nastavení teploty barev</div>
          </figcaption>
        </figure>

        <p>
          Jednou z nejdůležitějších částí je vyvážení teploty barev. To určuje, zda obraz nepůsobí příliš studeně do modra nebo naopak příliš
          teple do oranžova či žluta. Pokud je ve videu bílá plocha zabarvená, obvykle to znamená, že není vyvážení bílé nastaveno správně.
          V takové situaci lze pomocí hodnot Temperature (Teplota) a Tint (Nádech) obraz barevně srovnat.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/korekce3.png" alt="Základní nástroje pro práci se světlem">

          <figcaption>
            <div class="figure_title">Základní nástroje pro práci se světlem</div>
          </figcaption>
        </figure>

        <p>
          Další důležitou oblastí je práce se světlem. Pomocí hodnoty Exposure lze upravit celkový jas záběru, Contrast ovlivňuje rozdíl
          mezi světlými a tmavými částmi obrazu. Parametry Highlights, Shadows, Whites a Blacks pak umožňují jemněji upravit jednotlivé
          oblasti jasu. Díky tomu je možné například zesvětlit stíny bez výrazného ovlivnění zbytku obrazu, nebo naopak stáhnout
          příliš silná světla.
        </p>

        <p>
          Součástí základní korekce je i práce se saturací, tedy sytostí barev. Vyšší saturace udělá barvy výraznější, nižší naopak
          tlumenější. Ani zde ale neplatí, že silnější úprava znamená lepší výsledek. Příliš saturovaný obraz může působit nepřirozeně
          a rušivě, zvlášť pokud se jedná o běžné realistické video.
        </p>

        <p>
          Při základní korekci je vhodné postupovat po menších krocích. Smyslem této fáze není obraz „přetvořit“, ale spíše opravit
          jeho barevné nedostatky a připravit ho pro další práci.
        </p>

  <br>

      <h2 id="comparison-view">Comparison View</h2>

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/comparison1.png" alt="Tlačítko pro zapnutí Comparison View v panelu Program Monitor">

          <figcaption>
            <div class="figure_title">Tlačítko pro zapnutí Comparison View v panelu Program Monitor</div>
          </figcaption>
        </figure>

      <p>
        Panel Program Monitor je možné přepnout do režimu Comparison View, tedy do zobrazení, ve kterém lze porovnávat dva obrazy 
        současně. Tento režim je užitečný hlavně při práci s barvami, protože umožňuje lépe vidět rozdíly mezi záběry a průběžně
        kontrolovat, zda na sebe barevně navazují. Comparison View lze zapnout přímo v Program Monitoru nebo také z panelu Lumetri Color.
      </p>

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/comparison2.png" alt="Porovnání dvou klipů v Comparison View">

          <figcaption>
            <div class="figure_title">Porovnání dvou klipů v Comparison View</div>
          </figcaption>
        </figure>

      <p>
        Jedním z hlavních využití je porovnání dvou různých záběrů. Uživatel si může zvolit referenční záběr, jehož barevnost
        považuje za správnou, a vedle něj zobrazit aktuálně upravovaný klip. Díky tomu je snazší odhadnout, jak moc se záběry
        liší v jasu, kontrastu nebo barevném ladění. Právě na základě tohoto porovnání je možné následně použít nástroj Color Match,
        který se pokusí vzhled aktuálního záběru přiblížit referenci.
      </p>

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/comparison3.png" alt="Porovnání jednoho klipu, před a po úpravě">

          <figcaption>
            <div class="figure_title">Porovnání jednoho klipu, před a po úpravě</div>
          </figcaption>
        </figure>

      <p>
        Comparison View ale neslouží jen k porovnání dvou různých klipů. Lze ho využít i pro srovnání jednoho záběru 
        před a po provedených úpravách. To se hodí například tehdy, když chcete zkontrolovat, jak výrazně barevná korekce změnila 
        původní obraz, nebo zda už úpravy nejsou příliš silné. 
      </p>

      <p>
        Comparison View je tedy praktický pomocník pro vizuální kontrolu barevných úprav. Neprovádí sám o sobě žádnou korekci,
        ale usnadňuje rozhodování při práci s barvami, protože dává editorovi možnost lépe porovnat původní a upravený stav
        nebo sladit více záběrů mezi sebou.
      </p>

  <br>

        <h2 id="auto-color-a-color-match">Auto Color a Color Match</h2>

        <h3 id="auto-color"><ai-term>Auto Color</ai-term></h3>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/autoColor1.png" alt="Ukázka změny po použití Auto Color">

          <figcaption>
            <div class="figure_title">Ukázka změny po použití Auto Color</div>
            <div class="figure_source">
              Zdroj:
              <a href="https://helpx.adobe.com/premiere-pro/using/auto-color.html"
                >
                Adobe HelpX: Auto Color
              </a>
            </div>
          </figcaption>
        </figure>

        <p>
          Premiere Pro nabízí i nástroje, které dokáží část barevných úprav provést automaticky. Jedním z nich je funkce Auto Color.
          Ta, pomocí umělé inteligence Adobe Sensei, analyzuje vybraný klip a pokusí se provést základní korekci tak, 
          aby obraz působil vyváženěji. 
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/autoColor2.png" alt="Tlačítko Auto v panelu Lumetri Color">

          <figcaption>
            <div class="figure_title">Tlačítko Auto v panelu Lumetri Color</div>
          </figcaption>
        </figure>

        <p>
          Funkci lze nalézt v panelu Lumetri Color v sekci Basic Correction. Nachází se zde také slider pro
          nastavení intenzity, tedy do jaké míry se korekce projeví. Efekt lze vymazat tlačítkem Reset.
        </p>

        <p>
          Auto Color může být užitečný hlavně jako rychlý výchozí bod. Pokud si nejste jistí, jak s barevnou korekcí začít,
          může vám tento nástroj pomoci vytvořit první návrh úprav. Následně je možné jednotlivé hodnoty dále ručně doladit.
          Není však vhodné automatickému výsledku vždy bez výhrad věřit. U některých záběrů může fungovat velmi dobře,
          u jiných bude potřeba další zásah.
        </p>

        <h3 id="color-match"><ai-term>Color Match</ai-term></h3>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/colorMatch1.png" alt="Funkce Color Match">

          <figcaption>
            <div class="figure_title">Funkce Color Match</div>
          </figcaption>
        </figure>

        <p>
          Druhou užitečnou funkcí je Color Match, která slouží ke sladění barev mezi dvěma záběry. To je praktické například tehdy,
          když byly klipy natočeny v odlišných světelných podmínkách, ale ve výsledném videu mají působit jako součást jedné scény.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/colorMatch2.png" alt="Funkce Color Match v panelu Lumetri Color">

          <figcaption>
            <div class="figure_title">Funkce Color Match v panelu Lumetri Color</div>
          </figcaption>
        </figure>

        <p>
          Funkce se nachází v panelu Lumetri Color v sekci Color Wheels & Match. Pro její použití je potřeba mít zapnutý Comparison View,
          který je možné zapnout také v této záložce.
        </p>

        <p>
          Na časové ose lze pak zvolit referenční záběr, tedy ten, jehož vzhled chcete napodobit. Premiere Pro následně automaticky 
          upraví barevné vlastnosti tak, aby si oba klipy byly podobnější. Ani zde však nejde o zázračné řešení pro každou situaci. 
          Pokud jsou si záběry obsahem nebo světlem velmi vzdálené, bývá nutné výsledek ručně doladit.
        </p>

        <p>
          Auto Color i Color Match tedy mohou výrazně urychlit práci, ale v praxi je vhodné je chápat spíše jako pomocné nástroje,
          ne jako úplnou náhradu vlastního rozhodování.
        </p>

  <br>

        <h2 id="korekce-vs-color-grading">Základ barevné korekce vs. color grading</h2>
        <p>
          Při práci s barvou se často setkáte se dvěma pojmy, a to barevná korekce a color grading. Ačkoliv spolu úzce souvisí,
          neznamenají totéž.
        </p>

        <p>
          Barevná korekce je technická úprava obrazu. Jejím cílem je opravit problémy v záběru a sjednotit vzhled klipů tak,
          aby působily přirozeně a konzistentně. Typicky sem patří úprava expozice, kontrastu, vyvážení bílé nebo základní sytosti barev.
        </p>

        <p>
          Color grading je naopak kreativnější fáze. Přichází obvykle až poté, co je obraz technicky srovnaný. V této části se řeší,
          jak má video působit po estetické stránce. Pomocí barev lze vytvořit určitou náladu, zdůraznit emoci nebo dodat videu
          specifický styl.
        </p>

        <p>
          Zjednodušeně lze říci, že barevná korekce řeší, aby obraz vypadal správně, zatímco color grading řeší, aby obraz vypadal
          záměrně určitým způsobem. 
        </p>

  <br>
  <hr>
  <br>

        <h2 id="prakticka-barvy">Praktická část</h2>

        <p>
          V této části si vyzkoušíte základní úpravy barev a jejich korekci.
        </p>

        <h3 id="prakt-korekce">Základní korekce barev klipů</h3>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/prakt1.png" alt="Otevření panelu Lumetri Color">

          <figcaption>
            <div class="figure_title">Otevření panelu Lumetri Color</div>
          </figcaption>
        </figure>

        <p>
          Otevřete si projekt Cesta vlakem. V horní nabídce zvolte Window > Lumetri Color, čímž zobrazíte panel Lumetri Color.
          Poté vyberte klip nádraží1.mov a umístěte přehrávací hlavu nad tento klip v panelu Timeline.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/praktCorr1.png" alt="Přepnutí zobrazení do režimu Comparison View">

          <figcaption>
            <div class="figure_title">Přepnutí zobrazení do režimu Comparison View</div>
          </figcaption>
        </figure>

        <p>
          V panelu Program Monitor přepněte zobrazení do režimu Comparison View. Tím se zobrazí vedle sebe náhledy dvou různých klipů.
          Protože zatím není potřeba porovnávat dva odlišné záběry, stiskněte tlačítko Shot or Frame Comparison. Náhled se tím přepne
          do režimu Before a After, tedy na záběr před a po úpravě.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/praktCorr2.png" alt="Basic Correction a funkce Auto Color v panelu Lumetri Color">

          <figcaption>
            <div class="figure_title">Basic Correction a funkce Auto Color v panelu Lumetri Color</div>
          </figcaption>
        </figure>

        <p>
          V panelu Lumetri Color rozbalte sekci Basic Correction. Zde klikněte na tlačítko Auto, čímž se provede automatická
          korekce barev klipu nádraží1.mov.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/praktCorr3.png" alt="Porovnání klipu před a po použití Auto Color">

          <figcaption>
            <div class="figure_title">Porovnání klipu před a po použití Auto Color</div>
          </figcaption>
        </figure>

        <p>
          Všimněte si, že se vzhled klipu změní a záběr působí vyváženěji. Některé parametry však stále mohou vyžadovat
          ruční doladění.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/praktCorr4.png" alt="Ukázka nastavení posuvníků pro základní korekci klipu nádraží1.mov">

          <figcaption>
            <div class="figure_title">Ukázka nastavení posuvníků pro základní korekci klipu nádraží1.mov</div>
          </figcaption>
        </figure>

        <p>
          Upravte hodnoty posuvníků podle obrázku výše. Volitelně si je můžete nastavit také podle vlastního uvážení.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/praktCorr5.png" alt="Porovnání klipu nádraží1.mov před a po základní korekci">

          <figcaption>
            <div class="figure_title">Porovnání klipu nádraží1.mov před a po základní korekci</div>
          </figcaption>
        </figure>

        <p>
          Klip nádraží1.mov nyní působí čistěji a barvy jsou výraznější, než před úpravou.
        </p>

  <br>

        <h3 id="prakt-dalsi-klipy">Úprava dalších klipů</h3>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/praktDalsiKlipy.png" alt="Ukázka úpravy klipu cesta_vlakem1.mov">

          <figcaption>
            <div class="figure_title">Ukázka úpravy klipu cesta_vlakem1.mov</div>
          </figcaption>
        </figure>

        <p>
          Nyní postupně upravte barvy i u klipů z vlaku. Použijte funkci Auto Color a případně ručně dolaďte nastavení tak,
          aby obraz působil přirozeněji a barevně vyváženěji.
        </p>

  <br>

        <h3 id="prakt-color-match">Použití Color Match</h3>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/praktMatch1.png" alt="Záložka Color Wheels & Match v panelu Lumetri Color">

          <figcaption>
            <div class="figure_title">Záložka Color Wheels & Match v panelu Lumetri Color</div>
          </figcaption>
        </figure>

        <p>
          Po úpravě klipů s cestou vyberte klip nádraží2.mov. V panelu Lumetri Color přepněte do záložky Color Wheels & Match.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/praktMatch2.png" alt="Přepnutí Comparison View do režimu pro dva klipy">

          <figcaption>
            <div class="figure_title">Přepnutí Comparison View do režimu pro dva klipy</div>
          </figcaption>
        </figure>

        <p>
          V panelu Program Monitor přepněte pomocí tlačítka Shot or Frame Comparison náhled zpět tak, aby se opět zobrazovaly
          dva různé klipy.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/praktMatch3.png" alt="Volba referenčního snímku pro funkci Color Match">

          <figcaption>
            <div class="figure_title">Volba referenčního snímku pro funkci Color Match</div>
          </figcaption>
        </figure>

        <p>
          Jako referenční klip zvolte nádraží1.mov. Výběr provedete tak, že v referenční části náhledu kliknete na časový kód
          (Reference position) pod obrazem a potáhnete ho doleva ke klipu nádraží1.mov. Stejným způsobem pak vyberte 
          konkrétní snímek, podle kterého chcete barvy přizpůsobit.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/praktMatch4.png" alt="Použití funkce Color Match">

          <figcaption>
            <div class="figure_title">Použití funkce Color Match</div>
          </figcaption>
        </figure>

        <p>
          V panelu Lumetri Color klikněte na tlačítko Apply Match. Premiere Pro se pokusí upravit barvy klipu nádraží2.mov tak,
          aby se co nejvíce podobaly referenčnímu klipu.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_11/praktMatch5.png" alt="Výsledné porovnání klipů s nádražími">

          <figcaption>
            <div class="figure_title">Výsledné porovnání klipů s nádražími</div>
          </figcaption>
        </figure>

        <p>
          Následně použijte funkci Auto Color a výsledek můžete případně ještě jemně doladit ruční úpravou jednotlivých 
          parametrů. Oba klipy by tak měly působit barevně sjednoceněji.
        </p>
      `,
    quizKey: "barvy",
    sources: []
  },

  {
    id: "export",
    menu: "Export",
    title: "Export",
    subtitle: "Vytvoření hotového videa z projektu, neboli Export.",
    hasAI: false,
    html: `
      <h2 id="co-je-export">Co je export</h2> 

      <p> 
        Export je závěrečná fáze práce na videu, při které se hotová sekvence převede do výsledného souboru. 
        Zatímco během střihu Premiere Pro ukládá především projektové informace a odkazy na původní materiály, při exportu vzniká 
        nový soubor, který lze přehrát samostatně, nahrát na internet nebo předat dalším uživatelům.
      </p>

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/prepnuti.png" alt="Tlačítko pro přepnutí do režimu Export">

          <figcaption>
            <div class="figure_title">Tlačítko pro přepnutí do režimu Export</div>
          </figcaption>
        </figure>
      
      <p>
        V Adobe Premiere Pro se lze do režimu exportu přepnout tlačítkem Export v levém horním rohu rozhraní nebo 
        přes nabídku File > Export > Media. 
      </p> 
      
      <p> 
        Při exportu je potřeba rozhodnout, v jaké podobě má být video uloženo. To znamená zvolit vhodný formát, kvalitu 
        a další nastavení tak, aby výsledný soubor odpovídal zamýšlenému použití. Jiné požadavky bude mít video určené pro sociální 
        sítě, jiné video určené k archivaci a jiné například soubor, který má být dále zpracováván v dalším programu. 
        Export tedy nepředstavuje jen pouhé „uložení videa“, ale důležitý krok, který ovlivňuje podobu finálního výstupu. 
      </p> 

  <br>

      <h2 id="rezim-export">Režim Export</h2>

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/rozhrani.png" alt="Rozhraní režimu export">

          <figcaption>
            <div class="figure_title">Rozhraní režimu export</div>
          </figcaption>
        </figure>

      <h3 id="nahled-a-shrnutí">Náhled a shrnutí</h3>

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/prava1.png" alt="Náhled videa a parametr Range">

          <figcaption>
            <div class="figure_title">Náhled videa a parametr Range</div>
          </figcaption>
        </figure>

      <p> 
        Po přepnutí do režimu exportu se zobrazí rozhraní, kde lze nastavit všechny důležité parametry exportu. 
        Na pravé straně se nachází náhled výsledného videa, připomínající panel Source Monitor.
        Pod ním je zobrazena zmenšená časová osa pro pohyb ve videu. Parametr Range slouží pro nastavení rozsahu exportu,
        tedy zda se má exportovat celá sekvence, nebo například jen oblast mezi In a Out body.
      </p> 

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/prava2.png" alt="Parametr Scaling">

          <figcaption>
            <div class="figure_title">Parametr Scaling</div>
          </figcaption>
        </figure>

      <p>
        Parametr Scaling umožňuje nastavit způsob, kterým se obraz přizpůsobí zvolenému rozlišení. 
        Nabízené možnosti jsou Scale to fit (zvětšit/zmenšit obraz tak, aby se vešel), Scale to fill (zvětšit/zmenšit obraz tak, 
        aby vyplnil požadovaný prostor) a Stretch to fill (roztáhnout obraz na celé rozlišení bez zachování poměru stran).
      </p>

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/prava3.png" alt="Oblast se shrnutím nastavení">

          <figcaption>
            <div class="figure_title">Oblast se shrnutím nastavení</div>
          </figcaption>
        </figure>
      
      <p> 
        Pod oblastí s náhledem se nachází shrnutí základních informací o exportu. Zde lze porovnat vlastnosti původní sekvence (Source)
        s nastavenými vlastnostmi exportovaného souboru (Output).
      </p> 

  <br>

      <h3 id="nastaveni-exportu">Nastavení exportu</h3>

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/leva1.png" alt="Záložka Settings">

          <figcaption>
            <div class="figure_title">Záložka Settings</div>
          </figcaption>
        </figure>

      <p>
        V levé části exportního okna se nachází záložka Settings, která slouží k nastavení základních parametrů výstupu. 
        Uživatel zde určuje název výsledného souboru, jeho umístění, formát souboru a preset, tedy přednastavenou kombinaci 
        exportních voleb.
      </p>

      <p>
        Pole File Name slouží k nastavení názvu exportovaného souboru. Pod ním se nachází položka Location, která určuje, 
        do jaké složky bude výsledné video po dokončení exportu uloženo.
      </p>

      <p>
        Součástí této části rozhraní jsou také volby Format a Preset. Zvolený formát určuje typ výsledného souboru 
        a zároveň ovlivňuje, jaké další možnosti budou v exportním okně dostupné. Preset naopak představuje již připravené 
        nastavení, které automaticky vyplní hodnoty v dalších sekcích exportu, například v záložkách Video nebo Audio.
      </p>

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/leva2.png" alt="Záložky s podrobnějšími nastaveními exportu">

          <figcaption>
            <div class="figure_title">Záložky s podrobnějšími nastaveními exportu</div>
          </figcaption>
        </figure>

      <p>
        Pod těmito základními položkami se nacházejí rozbalitelné sekce Video, Audio, Multiplexer, Captions, Effects, Metadata 
        a General. Tyto části obsahují podrobnější volby exportu. Zatímco preset slouží jako rychlé výchozí nastavení, 
        v jednotlivých sekcích je možné jeho hodnoty dále zkontrolovat a případně upravit podle konkrétních požadavků.
      </p>

  <br>

      <h3 id="format-a-preset">Formát a preset</h3>

      <p>
        Formát a preset patří mezi nejdůležitější volby v exportním okně, protože určují základní podobu výsledného souboru. 
        Formát rozhoduje o tom, jaký typ souboru bude vytvořen a jaké parametry bude možné dále nastavovat. V praxi se často 
        používá například formát H.264, který je vhodný pro běžný export videa i pro publikování na webu.
      </p>

      <p>
        Adobe nabízí větší množství presetů určených pro různé účely, například 
        pro běžná rozlišení videa nebo pro rychlé vytvoření výstupu bez nutnosti ručního nastavování všech hodnot. 
        Kromě mnoha specifických presetů, upravených například přímo pro konkrétní sociální sítě, jsou k dispozici i presety Match Source.
        Konkrétně Match Source - Adaptive High Bitrate, Match Source - Adaptive Medium Bitrate a Match Source - Adaptive Low Bitrate.
      </p>

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/presety1.png" alt="Presety Match Source v nabídce presetů">

          <figcaption>
            <div class="figure_title">Presety Match Source v nabídce presetů</div>
          </figcaption>
        </figure>

      <p>
        Presety typu Match Source vycházejí z vlastností sekvence nebo zdrojového klipu. Obvykle tak automaticky převezmou 
        například rozlišení nebo snímkovou frekvenci a současně nastaví i další související parametry. Varianta Match Source - 
        Adaptive High Bitrate představuje vhodnou volbu ve chvíli, kdy je potřeba rychle vytvořit kvalitní export bez detailního 
        ručního nastavování.
      </p>

      <p>
        Preset tedy nefunguje jen jako doporučení, ale jako praktické přednastavení hodnot, které se promítne do dalších částí 
        exportního okna. Díky tomu je možné začít s již připravenou konfigurací a následně upravit pouze ty parametry, které je 
        potřeba přizpůsobit konkrétnímu způsobu použití videa.
      </p>
      
  <br> 
      
      <h2 id="kontrola-pred-exportem">Kontrola před exportem</h2> 

      <p>
        Ještě než se přepnete do exportního rozhraní, je vhodné provést kontrolu projektu a ujistit se, že je vše připraveno.
        Dobré je projít sekvenci a zkontrolovat, zda jsou všechny klipy správně umístěné, zda jsou použité efekty a přechody 
        v pořádku.
      </p>

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/kontrola1.png" alt="Název sekvence zvolené pro export">

          <figcaption>
            <div class="figure_title">Název sekvence zvolené pro export</div>
          </figcaption>
        </figure>
      
      <p> 
        Před spuštěním samotného exportování je vhodné provést krátkou kontrolu. Měli byste se ujistit, že exportujete správnou 
        sekvenci, že je správně zvolen název a umístění výsledného souboru a že formát i preset odpovídají zamýšlenému použití videa.
      </p>

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/kontrola2.png" alt="Velikost výsledného souboru">

          <figcaption>
            <div class="figure_title">Velikost výsledného souboru</div>
          </figcaption>
        </figure>
      
      <p>
        Stejně tak je dobré zkontrolovat, zda sedí základní video nastavení a zda export nevytvoří zbytečně velký nebo naopak 
        příliš nekvalitní soubor. Je také dobré si zkontrolovat, že máte před exportem dostatek volného místa na disku. 
      </p> 

      <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/kontrola3.png" alt="Tlačítko Export">

          <figcaption>
            <div class="figure_title">Tlačítko Export</div>
          </figcaption>
        </figure>
      
      <p> 
        Pokud jsou všechna nastavení v pořádku, můžete export spustit. To se dělá modrým tlačítkem Export
        v pravém dolním rohu exportního rozhraní. Po jeho stisknutí se začne proces exportu, který může trvat od několika sekund 
        až po několik hodin, v závislosti na délce videa, zvolených nastaveních a výkonu počítače. 
        Po dokončení exportu bude výsledný soubor uložen na zvolené místo a bude připraven ke zhlédnutí.
      </p>

  <br>
  <hr>
  <br>

        <h2 id="prakticka">Praktická část</h2>

        <p>
          V této části si vyzkoušíte nastavení exportu a vytvoření výsledného souboru z projektu.
        </p>

        <h3 id="prakt-priprava">Kontrola a příprava na export</h3>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktKontrola1.png" alt="Finální podoba hlavní sekvence">

          <figcaption>
            <div class="figure_title">Finální podoba hlavní sekvence</div>
          </figcaption>
        </figure>

        <p>
          Otevřete si projekt Cesta vlakem. Přehrajte si video a zkontrolujte hlavní sekvenci. Je důležité, aby všechny aplikované efekty,
          přechody a jiné úpravy byly v pořádku.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktKontrola2.png" alt="Kontrola zapnutí vrstev">

          <figcaption>
            <div class="figure_title">Kontrola zapnutí vrstev</div>
          </figcaption>
        </figure>
        
        <p>
          Také zkontrolujte, zda u žádné vrstvy není zvolena možnost Toggle Track Output 
          (ikona oka u obrazových vrstev), nebo Mute (ikona M u zvukových vrstev). Tyto možnosti by totiž způsobily, že by se daná vrstva
          do výsledného exportu nezahrnula.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktKontrola3.png" alt="Přepnutí do exportního režimu">

          <figcaption>
            <div class="figure_title">Přepnutí do exportního režimu</div>
          </figcaption>
        </figure>

        <p>
          Pokud je vše v pořádku, přejděte v panelu Project do binu Sekvence a vyberte Hlavní sekvenci. Následně klikněte na tlačítko
          Export v levém horním rohu rozhraní, čímž se přepnete do režimu exportu.
        </p>

        <h3 id="prakt-nastaveni">Nastavení exportu</h3>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktNastaveni1.png" alt="Nastavení názvu a umístění výsledného souboru">

          <figcaption>
            <div class="figure_title">Nastavení názvu a umístění výsledného souboru</div>
          </figcaption>
        </figure>

        <p>
          Otevře se vám exportní rozhraní. V levé části v záložce Settings > File Name nastavte název výsledného souboru,
          například Cesta_vlakem_export.mp4. V poli Location můžete po kliknutí na zobrazenou cestu zvolit složku,
          kam bude výsledný soubor uložen. Výchozí umístění je ve složce se souborem projektu.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktNastaveni2.png" alt="Volba presetu pro export">

          <figcaption>
            <div class="figure_title">Volba presetu pro export</div>
          </figcaption>
        </figure>

        <p>
          Rozklikněte nabídku v poli Presets a zvolte Match Source - Medium Bitrate. Tím se vám automaticky nastaví další 
          parametry exportu, které odpovídají vlastnostem vaší sekvence. 
        </p>

        <p>
          Volitelně můžete použít jinou variantu Match Source, buď pro vyšší Bitrate, nebo pro nižší. Mějte ale na paměti, že
          při vyšším Bitrate bude výsledný soubor větší, zatímco při nižším může být kvalita horší.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktNastaveni3.png" alt="Formát výsledného souboru">

          <figcaption>
            <div class="figure_title">Formát výsledného souboru</div>
          </figcaption>
        </figure>

        <p>
          Ujistěte se, že v poli Format máte zvolený H.264. Tento formát je vhodný pro běžný export videa a je 
          kompatibilní s většinou přehrávačů i online platforem.
        </p>

        <h3 id="prakt-finalni-kontrola">Finální kontrola a export</h3>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktExportRange.png" alt="Kontrola parametru Range">

          <figcaption>
            <div class="figure_title">Kontrola parametru Range</div>
          </figcaption>
        </figure>

        <p>
          Jelikož budete exportovat celou sekvenci, zkontrolujte si prvně, že parametr Range je nastavený na možnost Entire Source.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktExportScaling.png" alt="Kontrola parametru Scaling">

          <figcaption>
            <div class="figure_title">Kontrola parametru Scaling</div>
          </figcaption>
        </figure>

        <p>
          Jelikož jste zvolili preset Match Source, výsledný soubor a sekvence tak mají stejné rozlišení. Pokud by ale exportovaný soubor
          měl rozlišení nastavené jinak, než sekvence, bylo by potřeba zkontrolovat a nastavit parametr Scaling. Zde by se určilo, zda se
          sekvence zvětší/roztáhne tak, aby vyplnila celé rozlišení.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktExport1.png" alt="Shrnutí nastavení exportu">

          <figcaption>
            <div class="figure_title">Shrnutí nastavení exportu</div>
          </figcaption>
        </figure>

        <p>
          Na pravé straně pod náhledem videa se nachází krátké shrnutí exportních nastavení.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktExport2.png" alt="Kontrola rozlišení a snímkové frekvence">

          <figcaption>
            <div class="figure_title">Kontrola rozlišení a snímkové frekvence</div>
          </figcaption>
        </figure>

        <p>
          Zkontrolujte si především, ať sedí rozlišení a snímková frekvence. Jelikož jste použili preset Match Source, tak by 
          vše mělo odpovídat, ale vždy je dobré si nastavení ověřit.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktExport3.png" alt="Kontrola velikosti výsledného souboru">

          <figcaption>
            <div class="figure_title">Kontrola velikosti výsledného souboru</div>
          </figcaption>
        </figure>

        <p>
          Dále věnujte pozornost velikosti výsledného souboru a ujistěte se, že máte na svém počítači dostatek volného místa.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktExport4.png" alt="Spuštění exportu">

          <figcaption>
            <div class="figure_title">Spuštění exportu</div>
          </figcaption>
        </figure>

        <p>
          Pokud je vše v pořádku, klikněte na modré tlačítko Export v pravém dolním rohu.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktExport5.png" alt="Okno s průběhem exportu">

          <figcaption>
            <div class="figure_title">Okno s průběhem exportu</div>
          </figcaption>
        </figure>

        <p>
          Spustí se export a otevře se informační okno s průběhem procesu. Poté, co se exportování dokončí, bude výsledný soubor
          uložený ve zvolené složce.
        </p>

        <figure class="doc_figure doc_figure--large">
          <img src="img/kapitola_12/praktExport6.png" alt="Okno s průběhem exportu">

          <figcaption>
            <div class="figure_title">Okno s průběhem exportu</div>
          </figcaption>
        </figure>

        <p>
          Otevřete si soubor v libovolném video přehrávači a ještě jednou zkontrolujte, zda je vše v pořádku.
          Pokud ano, můžete se těšit z vašeho prvního hotového videa vytvořeného v Adobe Premiere Pro!
        </p>



    `,
    quizKey: "export",
    sources: []
  },

  {
    id: "text_based_editing",
    menu: "Text-Based Editing",
    title: "Text-Based Editing",
    subtitle: "Střih videa pomocí přepisu mluveného slova.",
    hasAI: true,
    html: `
      <h2 id="co-je-text-based-editing">Co je <ai-term>Text-Based Editing</ai-term></h2>

      <p>
        Text-Based Editing je funkce v Adobe Premiere Pro, která umožňuje pracovat se střihem videa pomocí textového přepisu
        mluveného slova. Program nejprve vytvoří transcript, tedy přepis dialogu nebo mluveného komentáře, a ten pak může sloužit
        jako základ pro výběr a úpravu klipů.
      </p>

      <p>
        Tato funkce využívá technologii <ai-term>automatického přepisu</ai-term> řeči založenou na umělé inteligenci. Díky tomu dokáže Premiere Pro
        rozpoznat mluvený obsah v klipu, převést jej do textové podoby a propojit jednotlivé části přepisu s konkrétními místy
        na časové ose. Uživatel tak nemusí hledat požadovanou pasáž pouze poslechem nebo ručním projížděním záběrů, ale může ji
        vyhledat i podle textu.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_13/textBased1.png" alt="Možnost tvorby transkriptu při importu">

        <figcaption>
          <div class="figure_title">Možnost tvorby transkriptu při importu</div>
        </figcaption>
      </figure>

      <p>
        Transcript je možné vygenerovat už při importu materiálů nebo později v panelu Text.
      </p>

      <p>
        Text-Based Editing je užitečný především u rozhovorů, reportáží, podcastů, přednášek nebo jiných typů videí, kde hraje
        důležitou roli mluvené slovo. V těchto situacích může výrazně urychlit orientaci v materiálu i přípravu prvního hrubého střihu.
      </p>

<br>

      <h2 id="panel-text">Panel Text</h2>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_13/textBased2.png" alt="Možnost tvorby transkriptu v panelu Text">

        <figcaption>
          <div class="figure_title">Možnost tvorby transkriptu v panelu Text</div>
        </figcaption>
      </figure>

      <p>
        Důležitou součástí práce s funkcí Text-Based Editing je panel Text. Právě v něm lze vytvářet a zobrazovat transcript,
        tedy textový přepis mluveného obsahu. Pokud nebyl transcript vytvořen již při importu, je možné jej vygenerovat dodatečně
        právě zde.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_13/textBased3.png" alt="Ukázka transkriptu v panelu Text">

        <figcaption>
          <div class="figure_title">Ukázka transkriptu v panelu Text</div>
        </figcaption>
      </figure>

      <p>
        Při tvorbě transkriptu je možné nastavit jazyk analyzovaného zvuku a případně zapnout rozpoznávání jednotlivých mluvčích.
        Výsledný přepis je následně propojen s konkrétními místy v klipu nebo v sekvenci, takže kliknutí na určitou část textu
        uživatele přesune na odpovídající místo ve videu. Transcript tak neslouží pouze jako přepis řeči, ale i jako nástroj
        pro orientaci v materiálu.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_13/textBased4.png" alt="Vybrání části textu pro střih">

        <figcaption>
          <div class="figure_title">Vybrání části textu pro střih</div>
        </figcaption>
      </figure>

      <p>
        Při označení části textu se na časové ose automaticky vytvoří In a Out body, ty pak graficky označují vybranou část
        přímo v sekvenci. Kliknutím na Lift se označená část ze sekvence odstraní a při kliknutí na Extract se s vybranou částí
        smažou i vzniklé Ripples.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_13/textBased5.png" alt="Ukázka vyhledávání v transkriptu">

        <figcaption>
          <div class="figure_title">Ukázka vyhledávání v transkriptu</div>
        </figcaption>
      </figure>

      <p>
        V panelu Text lze též v přepisu vyhledávat konkrétní slova nebo fráze, což usnadňuje práci zejména u delších rozhovorů,
        komentářů nebo záznamů přednášek. 
      </p>

<br>

      <h2 id="titulky">Titulky</h2>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_13/textBased7.png" alt="Vrstva titulků">

        <figcaption>
          <div class="figure_title">Vrstva titulků</div>
        </figcaption>
      </figure>

      <p>
        Na transcript navazuje také práce s titulky. Z již vytvořeného přepisu je možné automaticky vygenerovat titulky,
        které se vloží na časovou osu do samostatné stopy. Takto vytvořené titulky lze dále upravovat, měnit jejich text,
        časování i vizuální podobu.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_13/textBased6.png" alt="Tvorba titulků z transkriptu">

        <figcaption>
          <div class="figure_title">Tvorba titulků z transkriptu</div>
        </figcaption>
      </figure>

      <p>
        Titulky lze z transcriptu v záložce Captions vygenerovat tlačítkem Create captions, po jehož stisknutí se otevře 
        i formulářové okno pro podrobnější nastavení. Zvolit lze například jazyk titulků, nebo počet jejich řádků.
      </p>

      <p>
        Je však vhodné rozlišovat mezi transcriptem a titulky. Transcript slouží především jako pracovní textový přepis pro orientaci
        v obsahu a pro střih podle textu, zatímco titulky představují výslednou textovou vrstvu určenou pro diváka. V praxi tedy
        transcript pomáhá při editaci a titulky slouží hlavně ke zpřístupnění nebo doplnění hotového videa.
      </p>

<br>

      <h2 id="strih-podle-textu">Střih podle textu</h2>

      <p>
        Princip této funkce spočívá v tom, že uživatel nepracuje pouze s klipy na časové ose, ale také s jejich textovým přepisem.
        Po vytvoření transkriptu lze v panelu Text číst jednotlivé věty, vyhledávat konkrétní slova nebo označovat části dialogu,
        které mají být použity ve výsledné sekvenci.
      </p>

      <p>
        Odstraněním vybraných částí textu ze sekvence lze provést hrubý střih. Premiere Pro přitom automaticky propojí text
        s odpovídající částí videa a zvuku. Při práci tak editor v podstatě vybírá obsah podle toho, co bylo řečeno,
        a ne pouze podle náhledu obrazu na časové ose.
      </p>

      <p>
        Tento přístup je vhodný zejména při sestavování interview nebo mluvených pasáží, kdy je často důležitější význam sdělení
        než přesná vizuální podoba každého jednotlivého záběru. Text-Based Editing tak může výrazně zjednodušit tvorbu prvního výběru
        použitelných částí nahrávky.
      </p>

<br>

      <h2 id="vyhody-a-omezeni">Výhody a omezení</h2>

      <p>
        Hlavní výhodou Text-Based Editing je zrychlení práce. U dlouhých rozhovorů nebo záznamů s větším množstvím mluveného obsahu
        může být práce s textem přehlednější než opakované procházení celé nahrávky. Funkce také usnadňuje hledání konkrétních vět,
        témat nebo klíčových slov a pomáhá vytvořit hrubý střih efektivnějším způsobem.
      </p>

      <p>
        Přínosem je i to, že tato funkce zpřístupňuje střih více uživatelům. Začátečník se může v materiálu lépe orientovat,
        protože nepracuje pouze s časovou osou a obrazem, ale i s textovým obsahem. Text-Based Editing tak může působit
        srozumitelněji a intuitivněji než klasický způsob výběru záběrů.
      </p>

      <p>
        Výhodou je také návaznost na tvorbu titulků. Z vytvořeného přepisu lze automaticky vygenerovat titulky pro video,
        které se vloží do samostatné stopy na časové ose. Titulky je následně možné dále upravovat, měnit jejich vzhled,
        pozici, načasování i samotný text.
      </p>

      <p>
        Je však potřeba počítat i s omezeními. Přepis nemusí být vždy zcela přesný, zejména pokud je zvuk nekvalitní, obsahuje šum,
        výrazný přízvuk nebo odborné pojmy. V takových případech je vhodné transcript zkontrolovat a případně opravit. Problém může
        nastat také tehdy, pokud je v nahrávce více mluvčích s podobným tónem hlasu. I když program dokáže mezi jednotlivými lidmi
        rozlišovat, může se stát, že některé části přepisu budou přiřazeny nesprávně.
      </p>

      <p>
        Dalším omezením je, že tato funkce není plnohodnotnou náhradou klasického střihu. Text může velmi dobře pomoci při výběru
        obsahu a vytvoření hrubé verze sekvence, ale finální úpravy je stále potřeba kontrolovat i obrazově a zvukově na časové ose.
        U videa totiž nezáleží jen na tom, co je řečeno, ale také jak záběr působí, jak na sebe jednotlivé části navazují
        a jaké je výsledné tempo střihu.
      </p>

      <p>
        Praktickým omezením může být také jazyková podpora této funkce, protože není stejná pro všechny jazyky. Například 
        český jazyk není v době psaní tohoto textu podporován.
      </p>

      <p>
        Text-Based Editing je tedy vhodné chápat jako moderní nástroj, který s pomocí umělé inteligence urychluje práci s mluveným
        obsahem. Největší přínos má při přípravě hrubého střihu, orientaci v rozsáhlém materiálu a vyhledávání konkrétních pasáží,
        ale nejlepší výsledky přináší ve spojení s běžnou editací na časové ose.
      </p>
    `,
    quizKey: "text_based_editing",
    sources: []
  },

  {
    id: "generative_extend",
    menu: "Generativní funkce",
    title: "Generativní funkce",
    subtitle: "Seznámení s funkcemi využívajícími generativní umělou inteligenci.",
    hasAI: true,
    html: `
      <h2 id="generative-extend"><ai-term>Generative Extend</ai-term></h2>

      <p>
        V novějších verzích Adobe Premiere Pro se objevují i funkce založené na generativní umělé inteligenci.
        Narozdíl od technologie Adobe Sensei jsou tyto nástroje zaměřeny na vytváření nového obsahu.
        Jejich cílem není nahradit běžný střih, ale pomoci editorovi v situacích, kdy chybí krátký kus záběru,
        nebo je potřeba krátce prodloužit zvuk.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_14/genExt.png" alt="Nástroj Generative Extend v panelu nástrojů">

        <figcaption>
          <div class="figure_title">Nástroj Generative Extend v panelu nástrojů</div>
        </figcaption>
      </figure>

      <p>
        Generative Extend je funkce, která umožňuje prodloužit začátek nebo konec klipu za hranici původně natočeného materiálu.
        Program se přitom nepokouší pouze natáhnout existující obraz nebo zvuk, ale pomocí generativní umělé inteligence
        vytvoří novou část, která navazuje na původní obsah.
      </p>

<br>

      <h2 id="jak-funguje">Jak funci použít</h2>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_14/pouziti1.png" alt="Protažení klipu pomocí Generative Extend">

        <figcaption>
          <div class="figure_title">Protažení klipu pomocí Generative Extend</div>
        </figcaption>
      </figure>

      <p>
        Generative Extend je založen na technologii Adobe Firefly. Editor vybere klip na časové ose, zvolí nástroj Generative Extend
        a přetažením okraje klipu určí, o kolik chce klip prodloužit.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_14/pouziti2.png" alt="Program generuje novou část klipu pomocí AI">

        <figcaption>
          <div class="figure_title">Program generuje novou část klipu pomocí AI</div>
        </figcaption>
      </figure>

      <p>
        Premiere Pro následně odešle požadavek ke zpracování
        a vygeneruje novou část obrazu nebo zvuku, která se pokusí co nejplynuleji navázat na původní materiál.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_14/ukazkaVidea.gif" alt="Ukázka protažení videa pomocí Generative Extend">

        <figcaption>
          <div class="figure_title">Ukázka protažení videa pomocí Generative Extend</div>
        </figcaption>
      </figure>

      <p>
        Vygenerovaná část se po dokončení označí přímo na časové ose, takže je možné snadno rozlišit, která část klipu
        vznikla pomocí AI.
      </p>

<br>

      <h2 id="omezeni">Omezení</h2>

      <p>
        Pro použití funkce je potřeba internetové připojení,
        protože generování probíhá s využitím cloudového modelu Adobe Firefly. Funkce je také vedena jako prémiová
        a podle typu účtu může spotřebovávat generativní kredity.
      </p>

      <p>
        Praktickým omezením je i samotný rozsah prodloužení. Video lze prodloužit maximálně o dvě sekundy a zvuk maximálně
        o deset sekund. Funkce navíc není vhodná pro všechny typy materiálů. Nepodporuje například prodlužování hudby,
        negeneruje pokračování mluveného dialogu. Oba tyto typy zvukového obsahu jsou pro generetivní model zatím 
        příliš složité, protože vyžadují pochopení rytmu, melodie nebo významu slov.
      </p>

      <p>
        Generative Extend je tedy vhodné chápat jako praktický doplněk pro jemné dolaďování střihu.
        Dokáže pomoci v situacích, kdy chybí jen krátký úsek obrazu nebo zvuku, ale stále je potřeba výsledek
        pečlivě zkontrolovat a posoudit, zda působí přirozeně a odpovídá zamýšlenému použití.
      </p>
    `,
    quizKey: "generative_extend",
    sources: []
  },
];
