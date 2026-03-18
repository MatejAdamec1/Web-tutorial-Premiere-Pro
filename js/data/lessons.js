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
        <img src="img/premiere_logo.png" alt="Logo Adobe Premiere Pro">

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
        Pro přepínání mezi kapitolami můžete použít levý panel nebo tlačítka ve spodu stránky.
        V pravém panelu jsou vypsané jednotlivé podkapitoly aktuálního tématu. Po kliknutí na 
        podtéma se posunete přímo k dané části textu. Ve spodu tohoto panelu si také můžete přepnout 
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
        Počet pokusů je neomezený a při špatné odpovědi vám ukáže správně řešení.
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
        takže se s nimi seznámit předtím, než půjdete dál.
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
        Nejčastěji se dnes setkáte právě s poměrem 16:9, který je dnes standardem pro většinu moderních videí, například pro
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
        <img src="img/framerate.jpg" alt="Různé snímkové frekvence">

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
        Prácí se zvukem můžete rozmět například k vyrovnání hlasitosti jednotlivých stop, odstranění šumu,
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
        zase mohou pomoci lépe komunikovat informace, zvýraznit důležité části videa nebo jen zlepšit jeho estetiku.
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
  },

  {
    id: "rozhrani",
    menu: "Rozhraní a panely",
    title: "Rozhraní a panely",
    subtitle: "Seznámení s panely a workspaces.",
    html: `
      <h2 id="okno-edit-panely">Okno Edit a panelové prostředí</h2>
      <p>
        Částí programu, kde budete trávit většinu času, je okno Edit. Toto okno slouží jako hlavní pracovní plocha, která je dále rozdělena
        do jednotlivých panelů. To jsou samostatné části rozhraní, které mají specifickou funkci, například náhled videa nebo
        zobrazení seznamu importovaných materiálů.
      </p>

      <p>
        Premiere Pro poskytuje různé přednastavené workspaces, česky pracovní plochy, což jsou již připravené rozvržení panelů. 
        Jednotlivé předkonfigurované workspaces jsou přizpůsobeny pro různé účely, například pro práci se zvukem.
        Jako uživatel mezi nimy můžete přepínat na horní liště v záložce Window > Workspaces.
      </p>

<br>

      <h2 id="prizpusobeni-pracovniho-prostoru">Přizpůsobení pracovního prostoru</h2>
      <p>
        Rozložení panelů však není fixní a můžete si ho přizpůsobit podle svých potřeb. Panely lze libovolně zobrazovat/skrývat,
        přesouvat nebo měnit jejich velikost. Všechny dostupné panely najdete v záložce Window, kde stisknutím na název panelu,
        jej můžete zobrazit. Zobrazené panely jsou označeny symbolem ✓ a pokud na název kliknete znovu,
        tak se tento panel skryje. 
      </p>

      <p>
        Při kliknutí a podržení lišty panelu jej můžete přemístit. Když ho přetáhnete, zobrazí se vám zvýrazněné pole,
        do kterého se při pustění panel ukotví. Pokud ho pustíte do středu jiného panelu, tak se oba spojí a vytvoří
        skupinu panelů. Tato skupina pak v daný moment může zobrazit jen jeden z těchto panelů, přičemž mezi nimi můžete
        přepínat kliknutím na název panelu v horní části skupiny. Když panel přřetáhnete mimo zvýrazněná pole, tak se z hlavního okna
        programu oddělí a chová se jako samostatné okno, které můžete umístit kamkoliv na obrazovku.
      </p>

      <p>
        Přizpůsobit lze i velikost jednotlivých panelů. Při podržení na okraji panelu jej můžete roztáhnout nebo zmenšit. 
        Pokud chcete upravit velikost panelů, které jsou ve skupině, musíte změnit velikost celé skupiny.
      </p>

      <p>
        Přizpůsobené workspace si můžete uložit a následně kdykoliv znovu načíst. Uložení se provádí v záložce
        Window > Workspaces > Save as New Workspace. Dále zvolíte název pro vaše rozložení a stisknete Ok. Uložené workspaces se
        pak zobrazí v seznamu mezi přednastavenými rozloženími a můžete je kdykoliv načíst.
      </p>

<br>

      <h2 id="prehled-panelu">Přehled důležitých panelů</h2>

      <h3 id="project-panel">Project Panel</h3>
      <p>
        Tento panel je místem, kde se zobrazují všechny importované materiály, ale i objekty vytvořené přímo v programu, například
        sekvence, nebo určité grafické prvky. Odtud můžete materiály vyhledávat, vybírat a přetahovat do časové osy. Premiere Pro také dovoluje 
        v tomto panelu materiály organizovat do logických složek, tzv. bins.
      </p>

<br>

      <h3 id="timeline-panel">Timeline Panel</h3> 
      <p> 
        Timeline Panel, neboli panel časové osy, je hlavním pracovním prostorem pro střih. Zde skládáte jednotlivé klipy za sebe, 
        upravujete jejich délku, přidáváte přechody, efekty a pracujete se zvukem. Sekvence představuje konkrétní výsledné video 
        s danými technickými parametry. Na časové ose jsou jednotlivé klipy rozděleny do video a audio stop, které umožňují pracovat s více vrstvami současně. </p> <p> Právě zde probíhá samotný proces střihu. Proto je důležité porozumět práci se stopami, nástrojům pro ořezávání a pohybu klipů v čase. </p>

      <h3 id="source-monitor">Source Monitor</h3> 
      <p> 
        Source Monitor slouží k náhledu a předvýběru jednotlivých klipů před jejich vložením do časové osy. Jakmile v Project Panelu
        dvakrát kliknete na soubor, otevře se právě zde. V tomto panelu můžete nastavit vstupní (In) a výstupní (Out) bod. 
        Tím určíte, která část klipu se vloží do sekvence. 
      </p>

<br>

      <h3 id="program-monitor">Program Monitor</h3>
      <p>
    `,
    quizKey: "rozhrani",
  }
];
