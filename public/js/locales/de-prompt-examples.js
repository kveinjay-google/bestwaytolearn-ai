/* DE overlays — prompt examples */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('de', {
  "promptExampleCategories": {
    "全部": "Alle",
    "对话助手": "Chat-Assistenten",
    "编程开发": "Codierung und Entwicklung",
    "图像创作": "Bilderstellung",
    "视频音频": "Video und Audio",
    "办公效率": "Produktivität im Büro",
    "Agent 自动化": "Agentenautomatisierung",
    "搜索研究": "Suchen und recherchieren"
  },
  "promptExamplesUi": {
    "countShown": "Zeigt {visible} / {total}",
    "emptyHint": "Keine Beispiele in dieser Kategorie. Versuchen Sie es mit einem anderen Tag.",
    "structureLabel": "Schnelle Struktur",
    "scenarioLabel": "Wann zu verwenden",
    "tipsLabel": "Tipps",
    "copyLabel": "Eingabeaufforderung kopieren",
    "frameworkHint": "Verwenden Sie Rolle → Aufgabe → Kontext → Format → Einschränkungen (RTFC). Ersetzen Sie [Platzhalter] durch Ihre Angaben."
  },
  "promptExamples": [
    {
      "id": "chatgpt-longform",
      "difficulty": "Anfänger",
      "title": "Strukturiertes Schreiben langer Artikel (RTFC-Framework)",
      "scenario": "Es ist notwendig, öffentliche Accounts/Blogs/Produktbeschreibungen zu erstellen, die direkt veröffentlicht werden können, um leere und klischeehafte Aussagen zu vermeiden.",
      "structure": [
        "Rollenrolle",
        "Aufgabenaufgabe",
        "Format",
        "Einschränkungen"
      ],
      "prompt": "# Rolle\nSie sind ein Content-Strategieberater mit 10 Jahren Erfahrung, spezialisiert auf lange B2B-Technologieartikel.\n\n#Aufgabe\nSchreiben Sie auf der Grundlage des folgenden Hintergrunds einen populärwissenschaftlichen Artikel über KI-Lernen für Neueinsteiger am Arbeitsplatz.\n\n#Kontext\n- Zielgruppe: Büroangestellte im Alter von 25–35 Jahren ohne Grundkenntnisse\n- Kerninformationen: Beginnen Sie in 7 Tagen, aufgabengesteuertes Lernen, Sie müssen nicht zuerst Mathematik lernen\n- Wortanzahl: 1200–1500 Wörter\n- Kanal: Offizielles WeChat-Konto\n\n#Format\n1. 3 Titeloptionen (einschließlich Untertitel)\n2. Haupttext: Eröffnungsgeschichte → 3 häufige Missverständnisse → 7-Tage-Methode → Tool-Empfehlungen → Schluss-CTA\n3. 5 Hashtags\n\n#Einschränkungen\n- Ton: freundlich, spezifisch, weniger Adjektive\n- Verboten: „Zusammenfassend“ und „mit der Entwicklung der KI“ und andere leere Worte\n- 1 ausführbares Beispiel für jedes Argument\n- Erfinden Sie keine Daten, kreuzen Sie bei Unsicherheiten „zu überprüfen“ an",
      "tips": "Probieren Sie zunächst das gleiche Thema mit Fuzzy-Anweisungen aus und verwenden Sie dann diese Vorlage zum Vergleich – der Unterschied liegt im Wert des Aufforderungsworts. GPT-4o reagiert am besten auf den Abschnitt „Format“."
    },
    {
      "id": "claude-contract",
      "difficulty": "Dazwischenliegend",
      "title": "Vertragsrisikoprüfung (langes Dokument)",
      "scenario": "Laden Sie den PDF-Vertrag hoch, identifizieren Sie risikoreiche Klauseln aus Sicht von Partei B und machen Sie Verhandlungsvorschläge.",
      "structure": [
        "Rolle",
        "Aufgabe",
        "Ausgabestruktur",
        "Anmerkung zur Überprüfung"
      ],
      "prompt": "# Rolle\nSie sind ein diskreter Rechtsberater für Unternehmen, der sich auf die Prüfung von SaaS-Beschaffungs- und Technologiedienstleistungsverträgen spezialisiert hat.\n\n#Aufgabe\nSehen Sie sich den vollständigen Vertragstext an, den ich hochgeladen habe. Wir sind Partei B (Dienstleister).\n\n#Ausgabe\n## 1. Hochrisikoklauseln (Top 5)\nJeder Artikel enthält: Originalzitat des Artikels | Risikostufe (hoch/mittel/niedrig) | Risikogründe | Vorgeschlagene Formulierungsänderungen\n\n## 2. Klauseln für mittleres Risiko (3 Klauseln)\nGleiches Format wie oben\n\n## 3. Verhandlungsprioritätenliste\n| Klauselposition | Risiken | Verhandelbar | Vorschläge |\n\n## 4. 3 Fragen, die Partei B bestätigen muss\n\n#Einschränkungen\n- Unsichere rechtliche Schlussfolgerungen sind mit „Bestätigung durch einen menschlichen Anwalt erforderlich“ gekennzeichnet.\n- Erfinden Sie keine Gesetzesnummern\n- Bitte geben Sie beim Zitieren die Kapitel-/Seitenzahl an (sofern im PDF vorhanden)",
      "tips": "Der Claude-Long-Kontext hat offensichtliche Vorteile: Das Hochladen des gesamten Vertrags ist genauer als das Einfügen von Auszügen. Verwenden Sie keine öffentlichen Konten für sensible Verträge."
    },
    {
      "id": "kimi-annual-report",
      "difficulty": "Dazwischenliegend",
      "title": "Strukturierte Zusammenfassung des Jahresberichts/Prospekts",
      "scenario": "Laden Sie mehr als 100 Seiten PDF-Jahresberichte hoch, um schnell Finanztrends, Risiken und Managementerklärungen abzurufen.",
      "structure": [
        "Aufgabe",
        "Datenumfang",
        "Ausgabeschema",
        "Zitat"
      ],
      "prompt": "Bitte geben Sie strukturierte Analysenotizen basierend auf dem von mir hochgeladenen Geschäftsberichts-PDF aus:\n\n## 1. Unternehmenspositionierung in einem Satz\n## 2. Umsatz-/Nettogewinnentwicklung in den letzten drei Jahren (Tabelle, Einheit angeben)\n## 3. 3 Highlights + 3 Risiken in dieser Ausgabe (Abschnitt/Seitenzahl für jedes Zitat)\n## 4. Auszüge aus zukunftsgerichteten Aussagen des Managements (Originaltext + Seitenzahl)\n## 5. Liste der Anlegerfragen (5 Fragen)\n\n#Regeln\n- Zahlen müssen aus Dokumenten stammen; Falls fehlend, schreiben Sie „nicht bekannt gegeben“\n- Spekulieren Sie nicht über Finanzdaten, die nicht angezeigt werden\n- Die Betragseinheit stimmt mit dem Originaltext überein (10.000 Yuan/100 Millionen Yuan).",
      "tips": "Kimi ist für das gesamte PDF geeignet; Finanzzahlen müssen auf den Originaltext überprüft werden, da KI die Einheiten leicht verwirren kann."
    },
    {
      "id": "deepseek-code-review",
      "difficulty": "Anfänger",
      "title": "Codeüberprüfungs- und Refactoring-Vorschläge",
      "scenario": "Reichen Sie den Modulcode ein und holen Sie Bewertungsmeinungen zu Sicherheit, Leistung und Lesbarkeit ein.",
      "structure": [
        "Rolle",
        "Codeblock",
        "Überprüfen Sie die Abmessungen",
        "Ausgabeformat"
      ],
      "prompt": "# Rolle\nSie sind ein leitender Python-Ingenieur mit Schwerpunkt auf Wartbarkeit und Grenzbehandlung.\n\n#Aufgabe\nÜberprüfen Sie den folgenden Code und schlagen Sie Verbesserungen vor.\n\n„Python\n[Fügen Sie hier Ihren Code ein]\n„\n\n# Überprüfen Sie die Abmessungen\n1. **Korrektheit**: Logikfehler, Randbedingungen, Ausnahmebehandlung\n2. **Sicherheit**: Injektion, vertrauliche Informationen, Berechtigungen\n3. **Leistung**: Offensichtlicher Engpass (nur darauf hingewiesen, keine Notwendigkeit einer vorzeitigen Optimierung)\n4. **Lesbarkeit**: Benennung, Funktionslänge, Typhinweise\n\n#Ausgabe\n- Problemliste (Schweregrad P0/P1/P2)\n- Überarbeitetes Codebeispiel (nur notwendige Teile ändern)\n- 2 Vorschläge für Pytest-Testfälle",
      "tips": "DeepSeek ist kostengünstig und für die tägliche Codeüberprüfung geeignet; Es ist besser, Anrufkontext- und Fehlerprotokolle anzuhängen."
    },
    {
      "id": "cursor-feature",
      "difficulty": "Anfänger",
      "title": "Agentenmodus: Full-Stack-Funktionsentwicklung",
      "scenario": "Fügen Sie dem bestehenden Projekt ein komplettes Funktionsmodul (Multi-File-Collaboration) hinzu.",
      "structure": [
        "Kontext",
        "Anforderungen",
        "Akzeptanzkriterien",
        "Einschränkungen"
      ],
      "prompt": "Bitte implementieren Sie die Funktion „User Theme Switching“ im aktuellen Projekt.\n\n## Aktuelle Situation\n- Technologie-Stack: HTML + CSS + natives JS (einzelne Seite)\n- Vorhanden: Kopf-, Haupt- und Fußzeilenlayout\n\n## Anforderungen\n1. Dunkel/Hell-Thema, CSS-Variablengesteuerte Farbpalette\n2. Schalten Sie die Schaltfläche auf der rechten Seite der Kopfzeile um. Die Voreinstellung ist die Speicherung im lokalen Speicher\n3. Kein Flackern auf dem ersten Bildschirm (lesen Sie localStorage vor dem Rendern)\n4. Verfügbar auf Mobilgeräten, ohne die bestehende Layoutstruktur zu ändern\n\n## Akzeptanzkriterien\n- [ ] Nach dem Umschalten erreicht der Kontrast aller Texte den Standard.\n- [ ] Aktualisieren Sie die Seite, um die Auswahl beizubehalten\n- [ ] Geänderte Dateien auflisten\n- [ ] README ergänzende Gebrauchsanweisung\n\n## Einschränkungen\n- Keine neuen Frameworks eingeführt\n- Der Code enthält chinesische Kommentare\n- Anleitung zum Testen vor Ort nach Fertigstellung",
      "tips": "Cursor Agent lässt es zunächst planen und dann ausführen; Größere Änderungen erfordern Schritt-für-Schritt-Commit-Anweisungen."
    },
    {
      "id": "copilot-comment-driven",
      "difficulty": "Anfänger",
      "title": "Annotationsgesteuerte Funktionsgenerierung",
      "scenario": "Verwenden Sie klare Funktionsanmerkungen, um den Abschluss von Geschäftslogik- und Komponententests durch Copilot auszulösen.",
      "structure": [
        "Kommentar zur Funktionsspezifikation",
        "Eingabe-/Ausgabebeispiele",
        "Randfälle"
      ],
      "prompt": "// Bestellrabattbetrag berechnen\n// Regeln: minus 10 für Einkäufe über 100, minus 30 für Einkäufe über 200, minus 80 für Einkäufe über 500\n//Eingabe: orderAmount (nicht negative Zahl, Einheit: Yuan)\n// Ausgabe: { original, discount, final } sind alle Zahlen, final >= 0\n//Grenze: 0 Yuan Bestellrabatt=0; Eine negative Eingabe löst einen Fehler aus\n// Beispiel: calcDiscount(150) => { original: 150, discount: 10, final: 140 }\nFunktion calcDiscount(orderAmount) {\n  // Copilot wird von hier aus abgeschlossen\n}",
      "tips": "Copilot reagiert am stabilsten auf die Vier-Elemente-Annotation „Eingabe/Ausgabe/Beispiel/Grenze“; Die Testdateien werden im selben Verzeichnis abgelegt."
    },
    {
      "id": "codex-cli-bugfix",
      "difficulty": "Dazwischenliegend",
      "title": "Terminal Agent: Fehlerbericht und Reparatur im geschlossenen Regelkreis",
      "scenario": "Fügen Sie den vollständigen Traceback ein und lassen Sie den Agent Tests suchen, reparieren und hinzufügen.",
      "structure": [
        "Fehlerprotokoll",
        "Repro-Schritte",
        "Anforderungen festlegen",
        "Testbefehl"
      ],
      "prompt": "Projektverzeichnis: ./my-api (Node.js + Express)\n\n## Frage\nDas Ausführen des NPM-Tests schlägt mit der folgenden Fehlermeldung fehl:\n„\n[Vollständiges Traceback einfügen]\n„\n\n## Wiederholung\n1. NPM-Installation\n2. NPM-Test\n\n## Anforderungen\n1. Erklären Sie die Grundursache (Chinesisch)\n2. Korrigieren Sie den Code und lassen Sie das API-Verhalten unverändert\n3. Ergänzen/aktualisieren Sie Tests, um diese Grenze abzudecken\n4. Geben Sie den Bestätigungsbefehl\n\n## Einschränkungen\n- Führen Sie keine Upgrades wichtiger Abhängigkeiten durch\n- Erklären Sie vor der Änderung, welche Dateien geändert werden",
      "tips": "Codex CLI erfordert den gesamten Stapel und nicht die letzte Zeile; Ermöglicht dem Agenten, Testbefehle zur Überprüfung auszuführen."
    },
    {
      "id": "bolt-prototype",
      "difficulty": "Anfänger",
      "title": "Bereitstellbare Prototypen zur Generierung natürlicher Sprache",
      "scenario": "Nicht-Programmierer oder PMs validieren Produktideen schnell und erstellen Web-Prototypen mit gemeinsam nutzbaren Links.",
      "structure": [
        "Produktvision",
        "Seiten",
        "Stil",
        "Interaktionen"
      ],
      "prompt": "Erstellen Sie eine einseitige Web-App „AI Learning Progress Tracker“.\n\n## Seiten/Abschnitte\n1. Held: Titel + Zusammenfassung des 7-Tage-Lernpfads\n2. Fortschrittskarten: 4 Phasen (Lernen, Tools, Üben, Überprüfen) mit % abgeschlossen\n3. Tägliches Protokoll: Textbereich zum Speichern von Notizen (localStorage)\n4. Fußzeilen-CTA: Notizen als .txt exportieren\n\n## Stil\n- Dunkle Tech-Ästhetik, blaugrüner Akzent\n- Reaktionsschnell, mobil-first\n- Saubere serifenlose Typografie\n\n## Tech\n- Reagieren oder Vanille – Sie haben die Wahl\n- Kein Backend; Nur localStorage\n-Bereitstellungsbereite Struktur",
      "tips": "Bolt beschreibt die Seitenstruktur im Englischen als stabiler; iteriert nach der Generierung „größere Tippziele“ und „einfachere Farben“."
    },
    {
      "id": "mj-product-shot",
      "difficulty": "Anfänger",
      "title": "E-Commerce-Produktbilder (englische Aufforderungswörter)",
      "scenario": "Generieren Sie weiße Hintergrund-/Szenenproduktbilder zur Verwendung auf Detailseiten oder Werbemotiven.",
      "structure": [
        "Thema",
        "Umfeld",
        "Beleuchtung",
        "Stil",
        "Parameter"
      ],
      "prompt": "minimalistisches Produktfoto von kabellosen Ohrhörern im Ladeetui,\nreinweißer, nahtloser Hintergrund, Studio-Softbox-Beleuchtung,\nzentrierte Komposition, subtiler Schatten unter dem Produkt,\nultrascharfe kommerzielle Fotografie, 4K-Details,\nnegativen Raum für Textüberlagerung bereinigen --ar 4:5 --style raw --v 6\n\nNegative Eingabeaufforderung: Text, Wasserzeichen, Logo, verschwommen, deformiert, zusätzliche Objekte, unübersichtlicher Hintergrund, Hände",
      "tips": "Midjourney ist hauptsächlich auf Englisch; Reihenfolge: Thema → Umgebung → Licht → Stil → --ar/--v. Der Textsatz muss später überlagert werden."
    },
    {
      "id": "dalle-article-cover",
      "difficulty": "Anfänger",
      "title": "Titelbild des Artikels (natürliche Sprache)",
      "scenario": "Verwenden Sie DALL·E, um Blog-/Newsletter-Cover in ChatGPT zu generieren und chinesische Szenenbeschreibungen zu unterstützen.",
      "structure": [
        "Thema",
        "Stimmung",
        "Zusammensetzung",
        "Seitenverhältnis"
      ],
      "prompt": "Bitte verwenden Sie DALL·E, um ein Titelbild für einen Artikel zu erstellen:\n\nThema: Menschen am Arbeitsplatz nutzen KI zur Effizienzsteigerung (abstraktes Konzept, keine spezifischen Markenlogos)\nBild: Ein Fachmann nutzt einen Laptop in einem hellen, modernen Büro, mit einem sanften blaugrünen Schimmer auf dem Bildschirm und einem schwachen Muster neuronaler Netzwerklinien im Hintergrund\nStil: flache Illustration + leichte 3D-Textur, professionell, optimistisch, nicht cartoonartig\nZusammensetzung: Lassen Sie auf der rechten Seite 30 % für den Titeltext frei\nFormat: Horizontal 16:9, geeignet für öffentliche Bilder",
      "tips": "DALL·E versteht chinesische Szenen gut; erklärt den Leerraum, um zu vermeiden, dass der Hauptteil den Titelbereich blockiert."
    },
    {
      "id": "sd-ecommerce-white",
      "difficulty": "Dazwischenliegend",
      "title": "Produktbild auf weißem Hintergrund (positive und negative Aufforderungswörter)",
      "scenario": "Batch-Generierung einheitlicher E-Commerce-Hauptbilder lokal/WebUI.",
      "structure": [
        "Positive Aufforderung",
        "Negative Aufforderung",
        "Sampler-Einstellungen"
      ],
      "prompt": "Positiv:\n(Produktfotografie:1.3), smarte Thermosflasche, mattweißes Finish,\nnahtloser weißer Hintergrund, Studiobeleuchtung, weicher Bodenschatten,\nzentriert, scharfer Fokus, kommerzieller Katalogstil, 8k uhd\n\nNegativ:\nniedrige Auflösung, verschwommen, Text, Wasserzeichen, Logo, schlechte Anatomie, zusätzliche Finger,\ndeformiert, JPEG-Artefakte, überfüllt, bunter Hintergrund, Menschen\n\nEinstellungsvorschlag: Schritte 28–35, CFG 7–8, Größe 1024×1024 oder 4:5",
      "tips": "SD verwendet Gewichtssyntax (Schlüsselwort:1.2); Feste Startwerte können den Stil stapelweise vereinheitlichen."
    },
    {
      "id": "kling-product-video",
      "difficulty": "Anfänger",
      "title": "Kurzes Video zur Produktpräsentation auf vertikalem Bildschirm",
      "scenario": "Generieren Sie 5–10 Sekunden Produkt-Surround-Filmmaterial für Douyin/Xiaohongshu.",
      "structure": [
        "Schussart",
        "Subjektaktion",
        "Beleuchtung",
        "Technisch"
      ],
      "prompt": "Vertikaler Bildschirm 9:16, ein smarter Thermosbecher steht auf einem einfachen weißen Tisch.\nLangsamer Orbitschuss, Dampf steigt leicht aus der Mündung des Bechers auf,\nSanftes natürliches Licht, hochwertige kommerzielle Werbetextur, sauberer Hintergrund ohne Text,\nDas Produkt ist immer klar und nicht verschwommen, bei echter körperlicher Bewegung, 5–8 Sekunden",
      "tips": "Ke Ling reagiert gut auf „Slow Wrap“ und „Commercial Texture“; Komplexe Diagramme werden in mehrere Segmente unterteilt, um sie zu erstellen und dann zu bearbeiten."
    },
    {
      "id": "runway-image-to-video",
      "difficulty": "Dazwischenliegend",
      "title": "Tusheng-Video: Produkt-Mikrobewegungseffekte",
      "scenario": "Konvertieren Sie statische Produktbilder in 4-sekündige Hero-Animationen für Landingpages oder Anzeigentitel.",
      "structure": [
        "Bewegungsbeschreibung",
        "Betreff beibehalten",
        "Dauer",
        "Qualität"
      ],
      "prompt": "Langsame filmische Annäherung an das Produkt,\nsubtile Parallaxentiefe, das Produkt bleibt scharf und unverzerrt,\nweiches Studiolicht mit sanfter Schattenbewegung,\nkeine Morphing- oder Schmelzartefakte, kommerzielle Anzeigenqualität,\n4 Sekunden, nahtloses, loopfreundliches Ende",
      "tips": "Grafikvideos sollten kleine Bewegungen haben; Verwenden Sie die Einschränkung „Produkt bleibt scharf“, wenn sich die Kanten des Produkts leicht verformen."
    },
    {
      "id": "suno-bgm",
      "difficulty": "Anfänger",
      "title": "Hintergrundmusik zur Markenwerbung (reine Musik)",
      "scenario": "Generieren Sie eine 30–60 Sekunden lange Hintergrundmusik ohne Text für ein Produkteinführungsvideo.",
      "structure": [
        "Genre",
        "Stimmung",
        "Instrumente",
        "BPM",
        "Anwendungsfall"
      ],
      "prompt": "Instrumentaler, optimistischer Corporate-Technology-Track,\nmoderne Synth-Pads und leichte Percussion, optimistisch und sauber,\nkein Gesang, geeignet für AI-Produkteinführungsvideo,\n100–110 BPM, gleichmäßige Energie ohne dramatische Einbrüche,\n30–45 Sekunden",
      "tips": "Suno definiert „Instrumental + BPM + Szene“; erzeugt einen 2-Spur-Extend mit stabilerem Rhythmus."
    },
    {
      "id": "notion-meeting",
      "difficulty": "Anfänger",
      "title": "Besprechungsaufzeichnung/Notizen → strukturierte Protokolle",
      "scenario": "Organisieren Sie lose Besprechungsnotizen in einem Protokollformat, das mit dem Projektmanagement synchronisiert werden kann.",
      "structure": [
        "Eingang",
        "Ausgabeschema",
        "Eigentümerzuordnung",
        "Regeln"
      ],
      "prompt": "Bitte gliedern Sie die folgenden ursprünglichen Sitzungsprotokolle in strukturierte Protokolle:\n\n# Ausgabeformat\n## Besprechungsinformationen\n- Thema, Datum, Teilnehmer\n\n## Wichtige Vorsätze (nummerierte Liste)\n\n## To-Do-Liste\n| Materie | Verantwortliche Person | Frist | Priorität |\n\n## Offene Probleme\n\n## Themenvorschläge für das nächste Treffen\n\n# Regeln\n- Erfinden Sie keine Dinge, die nicht besprochen wurden\n- To-Dos ohne verantwortliche Person sind mit „zu benennen“ gekennzeichnet\n- Wenn das Datum unbekannt ist, schreiben Sie „noch festzulegen“\n\n---\n[Besprechungsprotokoll einfügen]",
      "tips": "Notion AI eignet sich für die sekundäre Sortierung; Das Aufzeichnen von Schlüsselwörtern in Echtzeit während eines Meetings ist genauer, als dies im Nachhinein nachzuholen."
    },
    {
      "id": "gamma-pitch",
      "difficulty": "Anfänger",
      "title": "10-seitige Roadshow-PPT-Gliederung",
      "scenario": "Geben Sie eine Geschäftsskizze ein und erstellen Sie schnell einen ersten Entwurf präsentationsfertiger Folien.",
      "structure": [
        "Thema",
        "Publikum",
        "Foliengliederung",
        "Visueller Stil"
      ],
      "prompt": "Erstellen Sie eine 10-seitige chinesische Roadshow-PPT:\n\nThema: KI-Lernplattform BestWayToLearn.AI\nZielgruppe: Unternehmensschulungsleiter / HR-L&D\n\nSeitenstruktur:\n1. Cover 2. Problempunkt 3. Lösung 4. Produktdemonstration 5. Lernpfad\n6. Kundenfälle 7. Geschäftsmodell 8. Differenzierung 9. Meilensteine 10. Kontaktinformationen\n\nStil: dunkler Tech-Stil, 3–5 Aufzählungspunkte pro Seite, große Textblöcke vermeiden\nDaten: Mit dem Platzhalter [X%] können Sie zunächst die realen Daten markieren, die ersetzt werden müssen.",
      "tips": "Gamma erfordert eine klare Seitenstruktur; Ersetzen Sie nach der Generierung die Platzhalterdaten und fügen Sie Produkt-Screenshots ein."
    },
    {
      "id": "copilot-excel",
      "difficulty": "Dazwischenliegend",
      "title": "Excel-Datenanalyse und Formeln",
      "scenario": "Verwenden Sie Copilot in Excel, um Verkaufstabellen zu analysieren und Pivot-Empfehlungen zu generieren.",
      "structure": [
        "Datenbeschreibung",
        "Fragen",
        "Ausgabe",
        "Formel"
      ],
      "prompt": "Ich habe eine Verkaufsdatentabelle mit folgenden Feldern: Datum, Region, SKU, Menge, Stückpreis und Menge.\nZeitrahmen: Letzte 12 Monate.\n\nBitte vervollständigen Sie:\n1. Überblick über monatliche Verkaufstrends\n2. Anzahl der Top-5-SKUs und Anteil\n3. Finden Sie den Monat mit ungewöhnlichem Umsatzrückgang und analysieren Sie die möglichen Gründe (basierend auf Daten, nicht auf Spekulationen).\n4. Schlagen Sie zwei Diagrammtypen und Achsendefinitionen vor\n5. Geben Sie ein Beispiel für die Excel-Formel zur Berechnung des YoY-Kettenverhältnisses\n\nWenn ich einen Datenbereich auswählen muss, geben Sie bitte an, welche Spalten einbezogen werden müssen.",
      "tips": "Copilot wählt den Datenbereich in Excel aus, bevor er Fragen stellt; Achten Sie auf Corporate Compliance bei sensiblen Finanzdaten."
    },
    {
      "id": "openclaw-cron-digest",
      "difficulty": "Dazwischenliegend",
      "title": "Cron hat einen Briefing-Vorstoß für die Branche geplant",
      "scenario": "Branchennachrichten werden automatisch zusammengefasst und an Wochentagen vormittags an Telegram/Slack weitergeleitet.",
      "structure": [
        "Zeitplan",
        "Agentenrolle",
        "Ausgabespez",
        "Kanal"
      ],
      "prompt": "openclaw cron create „0 9 * * 1-5“ \\\n  --name „Täglicher Überblick über die KI-Branche“ \\\n  --tz \"Asien/Shanghai\" \\\n  --session isoliert \\\n  --message „Sie sind ein wissenschaftlicher Mitarbeiter in der Branche. Zusammenfassung wichtiger Entwicklungen in der KI-Branche in den letzten 24 Stunden:\n\n1) 3 Schlagzeilen (je 1 Satz + Quellenlink)\n2) Auswirkungen auf Entwickler\n3) Konzentrieren Sie sich heute auf zwei Variablen\n\nAusgabe auf Chinesisch, innerhalb von 400 Wörtern. Wenn es keine zuverlässige Quelle gibt, schreiben Sie „Noch kein größeres Update“ und eine Fälschung ist verboten.\nZitate müssen anklickbar sein. \" \\\n  --announce \\\n  --channel-Telegramm \\\n  --to „DEINE_KANAL_ID“",
      "tips": "Führen Sie zunächst den Openclaw-Cron aus, um ihn manuell zu testen. Schreiben Sie die Ausgabestruktur klar und deutlich und verbieten Sie Fälschungen in der Nachricht."
    },
    {
      "id": "coze-support-bot",
      "difficulty": "Anfänger",
      "title": "Kundendienst-Bot-System-Eingabewort",
      "scenario": "Erstellen Sie in Coze einen Produkt-FAQ-Bot, um den Ton und die Upgrade-Strategie zu vereinheitlichen.",
      "structure": [
        "Persona",
        "Wissensumfang",
        "Antwortformat",
        "Eskalation"
      ],
      "prompt": "# Rolle\nDu bist der offizielle Lernassistent von „BestWayToLearn.AI“, freundlich, professionell und geduldig.\n\n#Wissensumfang\nEinzige Antwort: Kursstruktur, Lernpfad, Konto und Fortschritt, häufige technische Probleme.\nNicht antworten: Anlageberatung, medizinische und rechtliche Themen sowie Themen, die nichts mit Produkten zu tun haben.\n\n# Antwortformat\n1. Antworten Sie zunächst direkt in einem Satz\n2. Liste der Schritte (falls zutreffend)\n3. Verwandte Links oder „Wenn Sie Handarbeit benötigen, antworten Sie bitte: Umstellung auf Handarbeit“\n\n# Einschränkungen\n- Wenn Sie sich nicht sicher sind, sagen Sie „Ich bin nicht sicher, ich empfehle Ihnen, sich an support@example.com zu wenden.“\n- Erfinden Sie keine Funktionen oder Preise\n- Halten Sie Ihren Ton prägnant und vermeiden Sie mehr als 200 Wörter\n\n#Upgrade\nDer Benutzer fragte zweimal hintereinander „Es ist sinnlos“ oder es handelte sich um einen Zahlungsstreit → Aufforderung zur Übertragung auf einen manuellen Arbeitsauftrag",
      "tips": "Verbinden Sie das FAQ-Dokument mit der Wissensdatenbank in Coze; Das System weist darauf hin, dass Wörter Grenzen verwalten und die Wissensdatenbank Fakten verwaltet."
    },
    {
      "id": "dify-rag-agent",
      "difficulty": "Dazwischenliegend",
      "title": "Enterprise Knowledge Base RAG Q&A",
      "scenario": "Erstellen Sie einen Frage- und Antwortagenten auf der Grundlage interner Dokumente. Die Antworten müssen Referenzfragmente enthalten.",
      "structure": [
        "Systemaufforderung",
        "Abrufregeln",
        "Zitierformat",
        "Ablehnung"
      ],
      "prompt": "# System\nSie sind der interne Wissensdatenbankassistent des Unternehmens. Antworten basieren nur auf abgerufenen Dokumentfragmenten, ohne sich bei der Erstellung von Unternehmensrichtlinien auf vorab trainiertes Wissen zu verlassen.\n\n# Antwortregeln\n1. Geben Sie zunächst eine direkte Antwort (2–4 Sätze)\n2. Abschnitt „Basis“: Listen Sie den Namen des zitierten Dokuments + eine Zusammenfassung der relevanten Absätze auf\n3. Reichen die Suchergebnisse zur Beantwortung der Frage nicht aus, antworten Sie: „Die relevanten Vorschriften sind in der aktuellen Wissensdatenbank nicht zu finden. Es wird empfohlen, [Abteilung] zu kontaktieren oder einen Arbeitsauftrag zu erteilen.“\n\n#-Format\n- Markdown verwenden\n- Zitierformat: [Dokumentname § Kapitel]\n- Die verwendeten Daten/Nummern müssen mit dem Originaltext übereinstimmen\n\n# Verboten\n- Spekulieren Sie über Richtlinien, die nicht in die Wissensdatenbank geschrieben sind\n- Geben Sie eine abschließende Schlussfolgerung zur Rechtslage/Compliance ab",
      "tips": "Die Dify-Wissensdatenbank-Segmentierung wird mit 500–800 Wörtern/Block empfohlen; Das Testset ist mit 20 echten Mitarbeiterfragen zur Abnahme vorbereitet."
    },
    {
      "id": "perplexity-competitor",
      "difficulty": "Anfänger",
      "title": "Wettbewerbsfähige Produkt- und Marktrecherche auf einer Seite",
      "scenario": "Erhalten Sie schnell wettbewerbsfähige Produktvergleiche mit Referenzen für interne Gespräche oder Auswahlgespräche.",
      "structure": [
        "Umfang",
        "Vergleichsmaße",
        "Ausgabe",
        "Quellregeln"
      ],
      "prompt": "Untersuchen Sie den Markt „KI-Programmier-IDE“ im Jahr 2026 und konzentrieren Sie sich dabei auf den Vergleich von Cursor, Windsurf und GitHub Copilot.\n\nBitte geben Sie eine Seite auf Chinesisch aus:\n1. Marktübersicht (2 Absätze)\n2. Vergleichstabelle: Positionierung | Preisgestaltung | Kernunterschiede | Zielbenutzer\n3. 3 Auswahlvorschläge (nach Benutzertyp)\n4. Alle wichtigen Schlussfolgerungen sind mit Referenznummern und Quellenlinks versehen.\n\nRegeln: Die Preise unterliegen der offiziellen Website; Daten ohne offizielle Quellen sind mit „zu überprüfen“ gekennzeichnet.",
      "tips": "Der Vorteil von Perplexity liegt im Zitat; Preise und Funktionen müssen noch auf der offiziellen Website bestätigt werden."
    },
    {
      "id": "notebooklm-papers",
      "difficulty": "Dazwischenliegend",
      "title": "Vergleichende Anmerkungen zu mehreren Arbeiten",
      "scenario": "Laden Sie drei verwandte Artikel hoch und erstellen Sie eine Vergleichstabelle sowie Vorschläge für die Lesereihenfolge.",
      "structure": [
        "Umfang hochladen",
        "Vergleichsfelder",
        "Empfehlung",
        "Grenzen"
      ],
      "prompt": "(Nach dem Hochladen von 3 PDFs senden)\n\nBitte vergleichen Sie diese drei Papiere und Ergebnisse:\n\n## Vergleichstabelle\n| These | Forschungsfragen | Datensatz | Methoden | Wichtigste Schlussfolgerungen | Einschränkungen |\n\n## Ähnlichkeiten und Unterschiede in den Methoden (300 Wörter)\n\n## Empfohlene Lesereihenfolge für Neulinge\nErklären Sie, welchen Artikel Sie zuerst lesen sollten und warum\n\n## 3 Forschungsfragen, die Sie stellen sollten\n\nRegeln: Basierend nur auf hochgeladenen Dokumenten, nicht angezeigte Versuchsergebnisse werden nicht ergänzt.",
      "tips": "Bei NotebookLM handelt es sich um einen schreibgeschützten Upload von Inhalten. Für wissenschaftliche Zitate beziehen Sie sich bitte auf das Original-DOI."
    },
    {
      "id": "metaso-academic",
      "difficulty": "Anfänger",
      "title": "Ausgangspunkt für die Literaturrecherche des akademischen Modells",
      "scenario": "Nutzen Sie den akademischen Suchmodus, um schnell Kernpapiere zu finden und Einträge zu diesem Fachgebiet zu überprüfen.",
      "structure": [
        "Forschungsfrage",
        "Zeitbereich",
        "Ausgabe",
        "Nächste Schritte"
      ],
      "prompt": "Verwenden Sie den akademischen Suchmodus:\n\nForschungsfrage: Welche Methoden gibt es, um die Zuverlässigkeit großer Sprachmodelle bei der Codegenerierung zu bewerten?\nZeitrahmen: 2023–2026\nSprache: Es werden sowohl chinesische als auch englische akademische Quellen akzeptiert\n\nBitte ausgeben:\n1. 5 häufig zitierte Arbeiten in diesem Bereich (Titel, Autor, Jahr, Ein-Satz-Beitrag)\n2. Empfehlung von 2 Übersichts-/Forschungsarbeiten\n3. Namen und Definitionen von drei häufig verwendeten Bewertungsindikatoren\n4. Vorgeschlagene weitere Suchbegriffe (Chinesisch und Englisch)\n\nJeder Artikel hat eine anklickbare Quelle. Wenn es nicht gefunden wird, wird es deutlich angegeben.",
      "tips": "Der akademische Modus „Secret Tower“ ist für chinesische Benutzer geeignet; Bei wichtigen Arbeiten empfiehlt es sich, die Zitate auf Google Scholar zu überprüfen."
    }
  ]
});
})();
