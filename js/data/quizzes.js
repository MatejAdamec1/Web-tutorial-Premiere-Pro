window.QUIZZES = {
  uvod: [
    {
      question: "Adobe Premiere Pro je:",
      answers: ["Automobil", "Program pro úpravu videa", "Program pro úpravu fotek"],
      correctIndex: 1
    },
    {
      question: "Můžete se v tutoriálu vrátit k předchozím tématům?",
      answers: ["Ano", "Ne"],
      correctIndex: 0
    },
    {
      question: "Ve které části stránky můžete přepínat mezi podkapitolami?",
      answers: ["Levý panel", "Pravý panel", "Nikde"],
      correctIndex: 1
    }
  ],

  param_vid: [
    {
      question: "Co vyjadřuje rozlišení videa?",
      answers: [
        "Počet snímků za sekundu.",
        "Poměr mezi šířkou a výškou obrazu.",
        "Počet pixelů tvořících obraz (šířka × výška).",
        "Rychlost exportu videa."
      ],
      correctIndex: 2
    },
    {
      question: "Co určuje poměr stran videa?",
      answers: [
        "Kolik dat se uloží za jednu sekundu.",
        "Tvar obrazu (poměr šířky k výšce).",
        "Typ použitého kodeku.",
        "Počet pixelů v obrazu."
      ],
      correctIndex: 1
    },
    {
      question: "Co je to snímková frekvence (FPS)?",
      answers: [
        "Počet pixelů obrazu.",
        "Počet \"obrázků\" zobrazených za jednu sekundu.",
        "Velikost výsledného souboru.",
        "Typ komprese videa."
      ],
      correctIndex: 1
    },
    {
      question: "Co platí o datovém toku (bitrate)?",
      answers: [
        "Určuje pouze typ souboru (MP4, MOV).",
        "Nemá vliv na velikost souboru.",
        "Vyšší datový tok obvykle znamená lepší kvalitu, ale větší soubor.",
        "Ovlivňuje pouze zvukovou stopu."
      ],
      correctIndex: 2
    },
    {
      question: "Jaký je rozdíl mezi formátem a kodekem?",
      answers: [
        "Neexistuje žádný rozdíl, jde o stejný pojem.",
        "Formát je způsob komprese, kodek je typ souboru.",
        "Formát je kontejner (např. MP4), kodek je metoda komprese (např. H.264).",
        "Kodek určuje rozlišení videa."
      ],
      correctIndex: 2
    }
  ],

  workflow: [
    {
      question: "Jak se nazývá proces, kdy se soubory prováží s projektem?",
      answers: ["Import", "Export", "Vázání", "Natáčení"],
      correctIndex: 0
    },
    {
      question: "Co je cílem hrubého střihu?",
      answers: ["Dokončit úpravy na videu", "Vytvořit příběhovou kostru videa", "Doladit střihové body"],
      correctIndex: 1
    },
    {
      question: "Co je cílem jemného střihu?",
      answers: ["Dokončit úpravy na videu", "Vytvořit příběhovou kostru videa", "Doladit střihové body"],
      correctIndex: 2
    },
    {
      question: "Kdy obvykle dochází k exportu videa?",
      answers: ["Na začátku projektu", "Hned po Importu", "Na konci projektu"],
      correctIndex: 2
    }
  ],

  rozhrani: [
    {
      question: "K čemu slouží Project Panel?",
      answers: ["Ke střihu videa", "Ke správě materiálů", "K aplikaci efektů", "K exportu videa"],
      correctIndex: 1
    },
    {
      question: "Jaký je hlavní rozdíl mezi Source Monitor a Program Monitor?",
      answers: ["Source Monitor zobrazuje sekvenci, Program Monitor klip", "Program Monitor zobrazuje sekvenci, Source Monitor klip", "Neexistuje žádný rozdíl", "Program Monitor slouží jen pro audio"],
      correctIndex: 1
    },
    {
      question: "Kde se provádí samotný střih videa?",
      answers: ["Project Panel", "Source Monitor", "Timeline Panel", "Effects Panel"],
      correctIndex: 2
    },
    {
      question: "Kde lze upravovat parametry klipu/efektů?",
      answers: ["Tools Panel", "Project Panel", "Effects Panel", "Effect Controls Panel"],
      correctIndex: 3
    },
    {
      question: "Co jsou to bins v Project Panelu?",
      answers: ["Složky pro organizaci materiálů", "Typy sekvence", "Přechody", "Efekty"],
      correctIndex: 0
    }
  ],

  projekt: [ 
    {
      question: "Co obsahuje projekt v Adobe Premiere Pro?",
      answers: ["Samotná video a audio data", "Pouze exportované video", "Odkazy na soubory a informace o jejich použití", "Pouze efekty"],
      correctIndex: 2
    },
    {
      question: "Co se stane, když přesunete nebo smažete původní soubory projektu?",
      answers: ["Projekt se automaticky opraví", "Je nutné je znovu propojit", "Projekt se smaže", "Nic se nestane"],
      correctIndex: 1
    },
    {
      question: "Jak lze vytvořit nový projekt?",
      answers: ["Pouze přes Project Panel", "Pouze při exportu", "Tlačítkem New Project nebo File > New > Project", "Automaticky při importu"],
      correctIndex: 2
    },
    {
      question: "Jaká je doporučená praxe při ukládání projektu?",
      answers: ["Ukládat projekt na plochu", "Používat jednu složku pro všechny projekty", "Vytvořit pro každý projekt samostatnou složku", "Neřešit umístění"],
      correctIndex: 2
    },
    {
      question: "K čemu slouží režim Import?",
      answers: ["Ke střihu videa", "K exportu", "K výběru a importu souborů do projektu", "K aplikaci efektů"],
      correctIndex: 2
    },
    {
      question: "Co se stane při zaškrtnutí Create new sequence při importu?",
      answers: ["Vytvoří se nový projekt", "Soubory se smažou", "Vytvoří se sekvence a klipy se do ní vloží", "Nic se nestane"],
      correctIndex: 2
    },
    {
      question: "Jaký je hlavní důvod organizace materiálů do binů?",
      answers: ["Zrychlení renderu", "Zlepšení kvality videa", "Lepší přehled a orientace", "Menší velikost projektu"],
      correctIndex: 2
    },
    {
      question: "Jak lze projekt uložit?",
      answers: ["Jen automaticky", "Ctrl + S nebo File > Save", "Pouze při exportu", "Nelze ho uložit"],
      correctIndex: 1
    }
  ],

  sekvence: [
    {
      question: "Jak lze vytvořit novou sekvenci z vybraného klipu?",
      answers: ["Pomocí Export Media", "Volbou New Sequence From Clip", "Přes Effects panel", "Pomocí Play tlačítka"],
      correctIndex: 1
    },
    {
      question: "Které nastavení patří mezi základní parametry sekvence?",
      answers: ["Rozlišení a FPS", "Pouze hlasitost", "Jen název projektu", "Barva panelů"],
      correctIndex: 0
    },
    {
      question: "Co jsou vnořené sekvence (Nested sequences)?",
      answers: ["Exportované části videa", "Sekvence vložené do jiné sekvence", "Pouze zvukové stopy", "Automatické titulky"],
      correctIndex: 1
    },
    {
      question: "Jak vytvoříte vnořenou sekvenci na časové ose?",
      answers: ["Kliknutím na Play", "Přetažením do Program monitoru", "Vybráním klipů a volbou Nest...", "Přes File > Export"],
      correctIndex: 2
    },
    {
      question: "Co udělá volba Change sequence settings při varování Clip Mismatch Warning?",
      answers: ["Smaže vložený klip", "Vypne zvuk klipu", "Vytvoří nový projekt", "Přizpůsobí parametry sekvence vlastnostem klipu"],
      correctIndex: 3
    },
    {
      question: "Jak lze na časové ose měnit přiblížení?",
      answers: ["Držením levého Alt a kolečkem myši", "Pouze pravým tlačítkem myši", "Klávesou Enter", "Jen v Project panelu"],
      correctIndex: 0
    },
    {
      question: "Jak otevřete obsah vnořené sekvence k úpravě?",
      answers: ["Jedním kliknutím pravým tlačítkem", "Dvojklikem levým tlačítkem na vnořenou sekvenci", "Přes Export Settings", "Stiskem Delete"],
      correctIndex: 1
    }
  ],

    strih: [
    {
      question: "K čemu slouží Source panel při práci s klipy?",
      answers: [
        "K exportu videa",
        "K předvýběru a oříznutí klipu před vložením do sekvence",
        "K barevným úpravám",
        "K organizaci binů"
      ],
      correctIndex: 1
    },
    {
      question: "Jaký je rozdíl mezi funkcemi Insert a Overwrite?",
      answers: [
        "Insert klip vloží, Overwrite klip smaže",
        "Insert vždy vloží celý klip, Overwrite jen zvuk",
        "Insert vloží klip a může posunout další obsah, Overwrite překryje existující část",
        "Mezi nimi není žádný rozdíl"
      ],
      correctIndex: 2
    },
    {
      question: "K čemu slouží Razor Tool?",
      answers: [
        "K posouvání klipu na časové ose",
        "K rozdělení klipu na dvě nebo více částí",
        "K přidání přechodu",
        "K přiblížení náhledu"
      ],
      correctIndex: 1
    },
    {
      question: "Co dělá Slip Tool?",
      answers: [
        "Mění hlasitost klipu",
        "Posouvá obsah klipu bez změny jeho délky a pozice",
        "Otočí klip",
        "Smaže mezeru mezi klipy"
      ],
      correctIndex: 1
    },
    {
      question: "K čemu slouží Ripple Delete?",
      answers: [
        "K roztažení klipu",
        "K vytvoření nové sekvence",
        "K odstranění mezery a posunutí následujících klipů",
        "K duplikování klipu"
      ],
      correctIndex: 2
    },
    {
      question: "Co znamená trimming na časové ose?",
      answers: [
        "Přidání efektu na klip",
        "Úpravu délky klipu tažením za jeho okraj",
        "Změnu názvu klipu",
        "Převod zvuku na stereo"
      ],
      correctIndex: 1
    }
  ],

  zvuk: [
    {
      question: "Do jakých čtyř základních kategorií Premiere Pro rozděluje zvuk v panelu Essential Sound?",
      answers: [
        "Video, Hudba, Efekty, Export",
        "Dialogue, Music, SFX, Ambience",
        "Mono, Stereo, Left, Right",
        "Speech, Noise, Bass, Treble"
      ],
      correctIndex: 1
    },
    {
      question: "K čemu slouží funkce Enhance Speech?",
      answers: [
        "K prodloužení hudby",
        "K automatickému vytvoření titulků",
        "K potlačení šumu a zvýraznění hlasu",
        "K exportu zvuku do MP3"
      ],
      correctIndex: 2
    },
    {
      question: "Co dělá tlačítko Auto-Match v záložce Loudness?",
      answers: [
        "Automaticky sladí hlasitost vybraných klipů",
        "Odstraní ozvěnu",
        "Převede stereo na mono",
        "Přidá fade out"
      ],
      correctIndex: 0
    },
    {
      question: "K čemu slouží Ducking u hudby?",
      answers: [
        "K rozšíření sterea",
        "K automatickému ztlumení hudby při dialogu nebo jiné zvolené kategorii",
        "K úplnému odstranění hudby",
        "K rozdělení hudby na více stop"
      ],
      correctIndex: 1
    },
    {
      question: "Jaký je hlavní rozdíl mezi mono a stereo zvukem?",
      answers: [
        "Mono má jeden kanál, stereo dva kanály",
        "Stereo je vždy hlasitější než mono",
        "Mono se používá jen pro hudbu",
        "Mezi nimi není žádný rozdíl"
      ],
      correctIndex: 0
    },
    {
      question: "Jaký je rozdíl mezi funkcemi Stretch a Remix v záložce Duration u hudby?",
      answers: [
        "Stretch zkracuje hudbu a Remix ji maže",
        "Stretch nepoužívá AI",
        "Stretch je pro dialog, Remix pro video",
        "Neexistuje mezi nimi rozdíl"
      ],
      correctIndex: 1
    }
  ],

  efekty: [
    {
      question: "K čemu slouží panel Effects?",
      answers: [
        "K detailnímu nastavování efektů",
        "K vyhledávání a aplikaci efektů, přechodů a presetů",
        "K exportu hotového videa",
        "K organizaci materiálů"
      ],
      correctIndex: 1
    },
    {
      question: "Kde se upravují konkrétní parametry aplikovaného efektu?",
      answers: [
        "V Project panelu",
        "V Program Monitoru",
        "V Effect Controls",
        "V Export Settings"
      ],
      correctIndex: 2
    },
    {
      question: "Které dva základní efekty má každý video klip automaticky?",
      answers: [
        "Blur a Sharpen",
        "Motion a Opacity",
        "Volume a Panner",
        "Crop a Tint"
      ],
      correctIndex: 1
    },
    {
      question: "Co určuje parametr Scale v efektu Motion?",
      answers: [
        "Průhlednost klipu",
        "Přiblížení klipu",
        "Hlasitost klipu",
        "Barvu klipu"
      ],
      correctIndex: 1
    },
    {
      question: "Co znamená hodnota Opacity 0 %?",
      answers: [
        "Klip je plně viditelný",
        "Klip je přiblížený",
        "Klip je úplně průhledný",
        "Klip je otočený"
      ],
      correctIndex: 2
    },
    {
      question: "Co jsou presets v panelu Effects?",
      answers: [
        "Přednastavené efekty",
        "Zvláštní typ sekvence",
        "Automatické titulky",
        "Pouze zvukové přechody"
      ],
      correctIndex: 0
    }
  ],

  animace: [
    {
      question: "K čemu slouží klíčové snímky (keyframes)?",
      answers: [
        "K exportu videa",
        "K animaci vlastností v čase",
        "K organizaci panelů",
        "K vytváření binů"
      ],
      correctIndex: 1
    },
    {
      question: "Co je potřeba pro vznik viditelné animace?",
      answers: [
        "Jeden keyframe",
        "Alespoň dva keyframy s různými hodnotami",
        "Pouze zapnutý Effect Controls",
        "Přechod mezi klipy"
      ],
      correctIndex: 1
    },
    {
      question: "Co se stane po zapnutí Toggle animation u parametru?",
      answers: [
        "Efekt se smaže",
        "Program vytvoří novou sekvenci",
        "Zapne se animace a na aktuální pozici vznikne první keyframe",
        "Klip se automaticky přiblíží"
      ],
      correctIndex: 2
    },
    {
      question: "K čemu slouží tlačítko Add/Remove Keyframe?",
      answers: [
        "K přidání nebo smazání keyframu na aktuální pozici",
        "K přesunu klipu na časové ose",
        "K vypnutí efektu",
        "K exportu pouze části videa"
      ],
      correctIndex: 0
    },
    {
      question: "Jak se změní animace, když posunete keyframy dál od sebe?",
      answers: [
        "Animace se zrychlí",
        "Animace se zpomalí",
        "Animace zmizí",
        "Animace se duplikuje"
      ],
      correctIndex: 1
    },
    {
      question: "Co představuje animační oblast na pravé straně panelu Effect Controls?",
      answers: [
        "Globální časovou osu celého projektu",
        "Seznam exportních presetů",
        "Lokální časovou osu vybraného klipu pro práci s keyframy",
        "Panel pro organizaci médií"
      ],
      correctIndex: 2
    }
  ],

  barvy: [
    {
      question: "Jaký je hlavní důvod základní barevné korekce?",
      answers: [
        "Vždy vytvořit výraznou stylizaci",
        "Opravit a sjednotit barvy",
        "Zmenšit velikost souboru",
        "Přidat zvukové efekty"
      ],
      correctIndex: 1
    },
    {
      question: "Jak se jmenuje hlavní panel pro práci s barvami v Premiere Pro?",
      answers: [
        "Effect Controls",
        "Lumetri Color",
        "Color Mixer",
        "Program Color"
      ],
      correctIndex: 1
    },
    {
      question: "Která sekce panelu Lumetri Color je pro začátečníka nejdůležitější při základní korekci?",
      answers: [
        "Vignette",
        "HSL Secondary",
        "Basic Correction",
        "Curves"
      ],
      correctIndex: 2
    },
    {
      question: "K čemu slouží Comparison View?",
      answers: [
        "K porovnání dvou záběrů nebo stavu před a po úpravě",
        "K exportu dvou videí najednou",
        "K převodu klipu na černobílý",
        "K převodu klipu na animaci"
      ],
      correctIndex: 0
    },
    {
      question: "Co dělá funkce Auto Color?",
      answers: [
        "Automaticky vytvoří nový preset",
        "Pokusí se provést základní korekci barev",
        "Smaže všechny ruční úpravy",
        "Přidá vignette"
      ],
      correctIndex: 1
    },
    {
      question: "K čemu slouží funkce Color Match?",
      answers: [
        "K převodu videa do jiného formátu",
        "Ke sladění barev klipu s referenčním záběrem",
        "K oříznutí klipu",
        "K nastavení hlasitosti"
      ],
      correctIndex: 1
    }
  ],

  export: [
    {
      question: "Co je export v Adobe Premiere Pro?",
      answers: [
        "Import nových souborů do projektu",
        "Převedení sekvence do video souboru",
        "Pouze uložení projektu",
        "Změna rozložení panelů"
      ],
      correctIndex: 1
    },
    {
      question: "Jak se lze přepnout do režimu exportu?",
      answers: [
        "Pouze přes Effects panel",
        "Tlačítkem Export vlevo nahoře",
        "Jen dvojklikem na sekvenci",
        "Přes Effect Controls panel"
      ],
      correctIndex: 1
    },
    {
      question: "Co určuje volba Format v exportním okně?",
      answers: [
        "Pouze název souboru",
        "Typ výsledného souboru",
        "Barvu pozadí videa",
        "Počet binů v projektu"
      ],
      correctIndex: 1
    },
    {
      question: "K čemu slouží preset při exportu?",
      answers: [
        "K automatickému nastavení exportních parametrů",
        "K odstranění zvuku",
        "K vytvoření nové sekvence",
        "K přepnutí do tmavého režimu"
      ],
      correctIndex: 0
    },
    {
      question: "Co obvykle znamená vyšší bitrate u variant Match Source?",
      answers: [
        "Menší soubor a nižší kvalitu",
        "Větší soubor a vyšší kvalitu",
        "Žádnou změnu výsledku",
        "Jen změnu názvu souboru"
      ],
      correctIndex: 1
    },
    {
      question: "K čemu slouží přehled Source a Output v exportním okně?",
      answers: [
        "K porovnání vlastností zdroje a výsledného exportu",
        "K organizaci souborů do binů",
        "K úpravě barev",
        "K nastavení pracovního prostoru při exportu"
      ],
      correctIndex: 0
    },
    {
      question: "Co určuje parametr Range?",
      answers: [
        "Určuje rozsah exportované sekvence",
        "Způsob komprese zvuku",
        "Velikost textu v titulcích v souboru",
        "Počet vrstev v sekvenci"
      ],
      correctIndex: 0
    },
    {
      question: "Jak se spouští samotný export videa?",
      answers: [
        "Tlačítkem Play",
        "Tlačítkem Export v rohu",
        "Zavřením projektu",
        "Stiskem Delete"
      ],
      correctIndex: 1
    },
  ],

  text_based_editing: [
    {
      question: "K čemu slouží funkce Text-Based Editing v Adobe Premiere Pro?",
      answers: [
        "K úpravě efektů podle textového popisu",
        "Ke střihu videa pomocí textového přepisu",
        "K automatickému exportu videa do více formátů",
        "K vytváření grafických titulků bez zvuku"
      ],
      correctIndex: 1
    },
    {
      question: "Kde lze dodatečně vytvořit transcript, pokud nevznikl už při importu?",
      answers: [
        "V panelu Text",
        "V panelu Effects",
        "V panelu Lumetri Color",
        "V panelu Project"
      ],
      correctIndex: 0
    },
    {
      question: "Co se stane při označení části textu v transcriptu sekvence?",
      answers: [
        "Vytvoří se automaticky titulky",
        "Klip se ihned exportuje",
        "Na časové ose se vytvoří In a Out body",
        "Zvuková stopa se ztlumí"
      ],
      correctIndex: 2
    },
    {
      question: "Jaký je hlavní rozdíl mezi transcriptem a titulky?",
      answers: [
        "Transcript je pro diváka, titulky jsou jen pracovní pomůcka editora",
        "Transcript je pro editora, titulky pro diváka",
        "Transcript obsahuje jen obraz, titulky jen zvuk",
        "Mezi transcriptem a titulky není žádný rozdíl"
      ],
      correctIndex: 1
    },
    {
      question: "Které z následujících tvrzení o Text-Based Editing je podle textu správné?",
      answers: [
        "Plně nahrazuje klasický střih na časové ose",
        "Je vhodný hlavně pro videa bez mluveného slova",
        "Funguje bez omezení a přepis je vždy zcela přesný",
        "Může urychlit tvorbu hrubého střihu"
      ],
      correctIndex: 3
    }
  ],
};