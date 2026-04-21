# Webový tutoriál pro Adobe Premiere Pro

Tento projekt vznikl jako součást bakalářské práce zaměřené na návrh a implementaci výukového materiálu pro začátečníky pracující s programem Adobe Premiere Pro.

Cílem je vytvořit přehledný a srozumitelný webový návod, který uživatele provede základními principy digitálního střihu a naučí je efektivně pracovat v prostředí Premiere Pro.

---

### Online verze 
Aplikace je dostupná také v [online podobě](https://tutorial-premiere-pro.pages.dev/)

---

### O projektu

Tutoriál je navržen jako webová aplikace, která kombinuje:

* teoretické vysvětlení pojmů
* praktické ukázky krok za krokem
* kvízy na zopakování kapitol

---

### Cíl práce
Hlavním cílem projektu je:

* vysvětlit principy digitálního střihu a postprodukce
* seznámit uživatele s funkcemi Adobe Premiere Pro
* vytvořit výukový materiál vhodný pro začátečníky
* implementovat tento materiál do webové aplikace
* ověřit jeho použitelnost na reálných uživatelích

---

### Použité technologie

* HTML5
* CSS3
* JavaScript
* Mithril.js

Projekt je realizován jako **statická webová aplikace**.

---

### Spuštění projektu

Projekt lze spustit pomocí lokálního serveru (např.):

```bash
npx serve
```

nebo jednoduše otevřením souboru:

```bash
index.html
```

---

### Struktura projektu

```
/
├── index.html        # hlavní vstupní bod aplikace
├── js/               # logika aplikace (Mithril, routing, layout apod.)
│   └── lessons.js    # obsah jednotlivých lekcí
├── css/              # styly aplikace
├── img/              # obrázky a ilustrace
```


---

###  Poznámka

Projekt je průběžně vyvíjen a rozšiřován v rámci bakalářské práce.
Obsah i struktura se mohou postupně měnit a doplňovat.

---

### Autor

Matěj Adamec

---

### Licence

Zdrojový kód tohoto projektu je licencován pod licencí Apache License 2.0.

Výukový obsah, zejména soubory `js/data/lessons.js`, `js/data/quizzes.js` a adresář `img/`,
není součástí této open-source licence. Pokud není výslovně uvedeno jinak, tento obsah je
poskytován s vyhrazenými právy.

Podrobnosti jsou uvedeny v souborech `LICENSE` a `LICENSE-CONTENT`.
