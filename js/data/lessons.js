window.LESSONS = [
  {
    id: "uvod",
    menu: "Úvod",
    title: "Úvod",
    subtitle:
      "Pár informací na začátek.",
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
        Pro přepínání mezi kapitolami můžete použít levý panel nebo tlačítka vespodu stránky.
        V pravém panelu jsou vypsané jednotlivé podkapitoly aktuálního tématu. Po kliknutí na 
        podtéma se posunete přímo k dané části textu. Dole na tomto panelu si také můžete přepnout 
        mezi světlým a tmavým motivem.
      </p>

      <p>
        Některé kapitoly obsahují i praktické ukázky. V rámci těchto pasáží máte možnost následovat
        konkrétní kroky a souběžně s návodem si je vyzkoušet v programu. Ukázky jsou navrženy tak, aby 
        prakticky odrážely vybrané probírané funkce a pomohly vám je tak lépe pochopit. Průběžně tedy v tutoriálu
        budeme rozvíjet a upravovat váš první projekt.
      </p>

      <p>
        Na konci kapitol se nachází kvíz, který vám pomůže zkontrolovat, zda jste pochopili probírané téma.
        Počet pokusů je neomezený a při špatné odpovědi se vám ukáže správně řešení.
      </p>

<br>

      <h2 id="poznamka">Finální poznámka</h2>
      <p>
        Tutoriál je psaný na verzi Adobe Premiere Pro 26.0.1, která je v době psaní aktuální. 
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
        Při práci na rozsáhlejším projektu, kde napříklat budete pracovat s několika různými záběry nebo jinými objekty, je
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
        jednotlivé klipy střídají. Cílem je dosáhnout plynulých přechodů mezi záběry, například precizním zkrácením záčátků či konců klipů.
        Video v podstatě projdete znovu od začátku až do konce, kontrolujete a případně upravujete místa střihů. Diky druhému průchodu
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
        Pod pojmem práce s ezvukem si můžete předsdtavit například vyrovnání hlasitosti jednotlivých stop, odstranění šumu,
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
        Jako uživatel mezi nimy můžete přepínat v pravém horním rohu rozhraní pod tlačítkem Workspaces. Alternativně je můžete 
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
        přesouvat nebo měnit jejich velikost. Všechny dostupné panely najdete v záložce Window, kde stisknutím na název panelu,
        jej můžete zobrazit. Zobrazené panely jsou označeny symbolem ✓ a pokud na název kliknete znovu,
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
        <img src="img/kapitola_5/uvodni_okno.png" alt="Uvodní okno">

        <figcaption>
          <div class="figure_title">Uvodní okno</div>
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
        Dále je v této sekci možné zaškrtnout možnost Create new sequence. Toto nastavení vytvoří př importu novou sekvenci na časové ose
        a do ní umístí importované klipy.
      </p>

      <figure class="doc_figure doc_figure--large">
        <img src="img/kapitola_5/auto_transcribe.png" alt="Automatic transcription">

        <figcaption>
          <div class="figure_title">Automatic transcription</div>
        </figcaption>
      </figure>

      <p>
        V případě, že budete pro váš projekt potřebovat vytvořit titulky, můžete zaškrtnout možnost Automatic transcription. Program
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
        Poslední záložkou v sekci Import Settings je Media analysis. Pokud tuto možnost zvolíte, program provede analýzu
        naimportovaných souborů. Díky tomu je pak možné vyhledávat mezi materiály podle obrazových či audio vlastností.
      </p>

      <p>
        Poté, co zvolíte materiály a nastavíte import, stačí kliknout na tlačítko Import a zvolené soubory se přidají do projektu. 
        Do Import režimu se můžete vždy znovu přepnout pomocí tlačítka Import v levém horním rohu rozhraní.
      </p>

      <p>
        Import můžete provést i alternativním způsobem přes nabídku File > Import..., nebo stiskem pravého tlačítka v Project panelu
        a zvolením možnosti Import... . Následně se otevře okno s průzkumníkem souborů, ve kterém můžete procházet vaše soubory
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
        slouží právě bins, tedy logické složky v rámci projektu, do kterých můžete mateiály třídit. Bin lze vytvořit kliknutím
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
        Organizace materiálů v rámci projektu je důležitá také pro práci v teamu. Pokud na projektu pracuje více lidí,
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
        V této části se prakticky vyzkoušíte postup při zakládání projektu, import materiálů a procesy s tím spojené.
      </p>

      <h3 id="prakticka-priprava-projektu">Příprava</h3>
      <p>
        Před začátkem práce na projektu je potřeba pořídit materiály, které budete v programu upravovat. Pro ukázkový projekt budete
        pracovat na videu XY.
      </p>

      <p>
        Stáhněte si materiály z tohoto odkazu: XYXY
      </p>

      <p>
        Po stažení materiálů si v systémové složce Videa vytvořte složku pro tento projekt
        a pojmenujte jí XY. Do složky umístěte všechny stažené materiály.
      </p>

      <p>
        V projektovém adresáři vytvořte složku Videa a umístěte do ní materiály XY. Dále si vytvořte složku Obrázky 
        a vložte do ní XY.
      </p>

<br>

      <h3 id="prakticka-zalozeni-projektu">Založení projektu</h3>
      <p>
        Otevřete Program Adobe Premiere Pro, zobrazí se vám úvodní okno s nedávno otevřenými projekty. Pokud je toto váš první projekt,
        seznam bude prázdný. Pro založení nového projektu klikněte na modré tlačítko New Project.
      </p>

      <p>
        Otevře se vám formulářové okno, kde nastavte název projektu na XY. V části Location stiskněte tlačítko Browse a 
        vyberte složku XY, kterou jste pro tento projekt vytvořili. Do této složky se vám pak uloží projektový soubor.
        U Template zvolte možnost None a ujistěte se, že zaškrtávácí pole Skip Import mode je nevyplněné. 
        Pokud vše sedí jako na obrázku, stiskněte Create.
      </p>

      <p>
        Umístění projektu samozřejmě bude odpovídat složce na vašem počítači, proto není problém pokud není stejné jako na obrázku výše.
        Pouze se ujistěte, že je to opravdu složka, kterou jste si pro tento projekt vytvořili.
      </p>

<br>

      <h3 id="prakticka-import">Import souborů</h3>
      <p>
        Po stisknutí Create se přepnete do režimu Import. Zde na levém panelu v sekci Local zvolte umístění Movies, které
        na Windows odpovídá systémové složce Videa. Zde najděte vaši projektovou složku XY, tu otevřete.
      </p>

      <p>
        Zobrazí se vám složky Videa a Obrázky, kde máte své materiály. Otevřete složku Videa a zaškrtněte všechny soubory.
        Tím je vyberete pro import do projektu. V horní části klikněte na XY, tím se vrátíte zpět do adresáře vaší
        projektové složky. Pokud vyberete pro import celou složku, naimportují se všechny soubory, které se v ní nachází.
        Vyzkoušejte si to zaškrtnutím složky Obrázky.
      </p>

      <p>
        Pokud se vám podařilo zvolit všechny materiály správně, měli byste vidět jejich náhled v dolní části rozhraní.
        Stiskněte modré tlačítko Import a zvolené soubory se přidají do projektu.
      </p>

<br>

      <h3 id="prakticka-organizace">Organizace materiálů v projektu</h3>
      <p>
        TODO
      </p>

    `,
    quizKey: "projekt",
    sources: [
      {
        text: "Adobe Help Center – Create a project in Premiere Pro"
      },
      {
        text: "Adobe Help Center – Import media into Premiere Pro",
        url: "https://helpx.adobe.com/premiere-pro/using/importing-digitizing.html"
      }
    ]
  },
];
