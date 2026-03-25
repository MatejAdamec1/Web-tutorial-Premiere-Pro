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
  ]
};