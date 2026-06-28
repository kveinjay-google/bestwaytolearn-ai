/* DE overlays — quiz */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('de', {
    quiz: [
        {
          q: "Welche Beziehung besteht zwischen KI, ML und DL?",
          options: [
            "Völlig unabhängig und unabhängig",
            "AI ⊃ ML ⊃ DL",
            "KI ist eine Teilmenge von DL",
            "DL ⊂ ML ⊂ AI"
          ],
          answer: 1,
          explain: "Künstliche Intelligenz ⊃ Maschinelles Lernen ⊃ Deep Learning: Von links nach rechts (KI → ML → DL) wird der Umfang kleiner."
        },
        {
          q: "Was ist das Kernausbildungsziel eines LLM (Large Language Model)?",
          options: [
            "Bilder erkennen",
            "Vorhersage des nächsten Tokens",
            "Alle Sprachen übersetzen",
            "Speichern jeder Webseite"
          ],
          answer: 1,
          explain: "Durch das einfache Ziel, den nächsten Token in umfangreichen Texten vorherzusagen, lernen LLMs das Verstehen und Generieren von Sprachen."
        },
        {
          q: "Was bedeutet Halluzination?",
          options: [
            "Die KI weigert sich zu antworten",
            "Das System läuft langsamer",
            "Souverän falsche Inhalte generieren",
            "Es kann nur fiktive Inhalte verarbeiten"
          ],
          answer: 2,
          explain: "Halluzination ist eine bekannte LLM-Einschränkung – fließend, aber sachlich falsch. Überprüfen Sie stets wichtige Informationen."
        },
        {
          q: "Was ist die Kerninnovation des Transformers?",
          options: [
            "CNN-Faltung",
            "Selbstaufmerksamkeit",
            "RNN-Wiederholung",
            "Entscheidungsbäume"
          ],
          answer: 1,
          explain: "Durch die Selbstaufmerksamkeit kümmert sich das Modell gleichzeitig um alle Positionen in der Eingabesequenz – die Grundlage von GPT und anderen LLMs."
        },
        {
          q: "Was macht RAG (Retrieval-Augmented Generation)?",
          options: [
            "Beschleunigen Sie das Training",
            "Parameteranzahl reduzieren",
            "Kombinieren Sie eine Wissensdatenbank, um Halluzinationen zu reduzieren",
            "Bilder generieren"
          ],
          answer: 2,
          explain: "RAG ruft zunächst externe Quellen ab und generiert dann Antworten – wodurch erfundene Antworten erheblich reduziert werden."
        },
        {
          q: "Wie schreibt man Aufforderungen am effektivsten?",
          options: [
            "Je kürzer, desto besser",
            "Schreiben Sie einfach „Hilf mir, einen Artikel zu schreiben“",
            "Strukturierte Eingabeaufforderungen mit Rolle + Aufgabe + Format + Einschränkungen",
            "Verwenden Sie viele Emojis"
          ],
          answer: 2,
          explain: "Strukturierte Eingabeaufforderungen verbessern die Ausgabequalität erheblich."
        },
        {
          q: "Welche der folgenden ist eine GenAI-Anwendung (generative KI)?",
          options: [
            "Spam-Filterung",
            "Gesichtserkennung",
            "Bilderzeugung während der Fahrt",
            "Betrugserkennung"
          ],
          answer: 2,
          explain: "GenAI erstellt neue Inhalte; Spam-Filterung und Betrugserkennung sind diskriminierende KI."
        },
        {
          q: "Was ist ein Token?",
          options: [
            "Ein Benutzername",
            "Die Grundeinheit der Textverarbeitung",
            "Eine Kryptowährung",
            "Eine Versionsnummer"
          ],
          answer: 1,
          explain: "Ein Token ist die kleinste Einheit, die Modelle zum Verarbeiten von Text verwenden. Kontextfenster werden in der Tokenanzahl gemessen."
        },
        {
          q: "Wie unterscheidet sich ein KI-Agent von einem normalen Chatbot?",
          options: [
            "Es ist lustiger",
            "Es kann autonom planen und Tools zur Erledigung von Aufgaben aufrufen",
            "Es kann nur mit Ja/Nein geantwortet werden",
            "Es braucht kein Internet"
          ],
          answer: 1,
          explain: "Agenten können Aufgaben aufschlüsseln, Tools aufrufen und mehrstufige Vorgänge ausführen."
        },
        {
          q: "Eine schnelle Trainingsmethode",
          options: [
            "Eine schnelle Trainingsmethode",
            "Reinforcement Learning aus menschlichem Feedback – Optimierung der Ergebnisse unter Berücksichtigung menschlicher Vorlieben",
            "Eine Technik zur Bilderzeugung",
            "Ein Datenkomprimierungsalgorithmus"
          ],
          answer: 1,
          explain: "RLHF hat ChatGPT benutzerfreundlicher und sicherer gemacht als rohes GPT-3."
        },
        {
          q: "Wie verbessert CoT (Chain of Thought) die KI-Leistung?",
          options: [
            "Beschleunigt die Schlussfolgerung",
            "Lässt die KI Schritt für Schritt ihre Argumentation zeigen",
            "Reduziert die Token-Nutzung",
            "Erhöht die Modellparameter"
          ],
          answer: 1,
          explain: "Wofür wird LoRA (Low-Rank Adaptation) hauptsächlich verwendet?"
        },
        {
          q: "Wofür wird LoRA (Low-Rank Adaptation) hauptsächlich verwendet?",
          options: [
            "Bilderzeugung",
            "Effiziente Feinabstimmung großer Modelle",
            "Datenkennzeichnung",
            "Modellbereitstellung"
          ],
          answer: 1,
          explain: "LoRA trainiert nur einen kleinen Satz zusätzlicher Parameter, um sich zu sehr geringen Kosten an bestimmte Aufgaben anzupassen."
        },
        {
          q: "Was beinhaltet NLP (Natural Language Processing)?",
          options: [
            "Nur maschinelle Übersetzung",
            "Übersetzung, Zusammenfassung, Fragen und Antworten, Stimmungsanalyse und mehr",
            "Nur Spracherkennung",
            "Nur Textgenerierung"
          ],
          answer: 1,
          explain: "NLP umfasst alle Techniken, die es Computern ermöglichen, menschliche Sprache zu verarbeiten."
        },
        {
          q: "Welche Hauptrolle spielen GPUs in der KI?",
          options: [
            "Parallele Berechnung zur Beschleunigung von Training und Inferenz",
            "Parallele Berechnung zur Beschleunigung von Training und Inferenz",
            "Netzwerkkommunikation",
            "Bilder anzeigen"
          ],
          answer: 1,
          explain: "GPU-Parallelberechnung macht sie zur Kernhardware für KI-Training und -Inferenz."
        },
        {
          q: "Wie können Einsteiger am besten mit der Nutzung von KI beginnen?",
          options: [
            "Beherrsche zuerst die ganze Mathematik",
            "Probieren Sie es direkt mit echten Problemen aus",
            "Nur zuschauen, niemals üben",
            "Learning by Doing funktioniert am besten – probieren Sie reale Aufgaben aus und verstehen Sie Prinzipien durch Übung."
          ],
          answer: 1,
          explain: "Learning by Doing funktioniert am besten – probieren Sie reale Aufgaben aus und verstehen Sie Prinzipien durch Übung."
        },
        {
          q: "Was ist der Hauptunterschied zwischen AGI und der heute eingesetzten ANI?",
          options: [
            "ANI kann jede intellektuelle Aufgabe bewältigen",
            "ANI kann jede intellektuelle Aufgabe bewältigen",
            "AGI ist noch nicht erreicht; ANI erledigt nur bestimmte Aufgaben",
            "Die gesamte kommerzielle KI ist heute ANI (schmale KI); AGI (künstliche allgemeine Intelligenz) bleibt ein langfristiges Forschungsziel."
          ],
          answer: 2,
          explain: "Die gesamte kommerzielle KI ist heute ANI (schmale KI); AGI (künstliche allgemeine Intelligenz) bleibt ein langfristiges Forschungsziel."
        },
        {
          q: "Welche Elemente sollte eine strukturierte Eingabeaufforderung normalerweise enthalten?",
          options: [
            "Nur eine Zeile: „Hilf mir zu schreiben“",
            "Rolle + Aufgabe + Kontext + Format + Einschränkungen",
            "Je kürzer, desto besser",
            "Nur Emojis"
          ],
          answer: 1,
          explain: "Das Prompt-Engineering für Tag 4 dieser Site: Alle fünf Elemente zusammen verbessern die Ausgabequalität und Wiederverwendbarkeit erheblich."
        },
        {
          q: "Steuert die Zufälligkeit der Ausgabe: niedrig = stabiler, hoch = kreativer",
          options: [
            "Beschleunigt die Schlussfolgerung",
            "Steuert die Zufälligkeit der Ausgabe: niedrig = stabiler, hoch = kreativer",
            "Erhöht die Kontextlänge",
            "Reduziert die Token-Nutzung"
          ],
          answer: 1,
          explain: "Verwenden Sie eine niedrige Temperatur für Code (z. B. 0,1) und eine höhere Temperatur für kreatives Schreiben (z. B. 0,8)."
        },
        {
          q: "Was ist ein Kontextfenster?",
          options: [
            "Größe des Browserfensters",
            "Die maximale Anzahl an Token, die ein Modell gleichzeitig verarbeiten kann",
            "Größe des Trainingsdatensatzes",
            "Limit für API-Aufrufe"
          ],
          answer: 1,
          explain: "Inhalte außerhalb des Kontextfensters werden abgeschnitten oder vergessen; Wählen Sie für lange Dokumente Modelle mit großen Fenstern (z. B. Kimi, Claude)."
        },
        {
          q: "Was ist der Unterschied zwischen überwachtem und unüberwachtem Lernen?",
          options: [
            "Beim überwachten Lernen werden gekennzeichnete Daten verwendet. Unüberwachtes Lernen findet Muster in unbeschrifteten Daten",
            "Unüberwachtes Lernen ist immer genauer",
            "Für überwachtes Lernen sind keine Daten erforderlich",
            "Beides kann nicht zur Klassifizierung herangezogen werden"
          ],
          answer: 0,
          explain: "Tag 2 Kern: Spam-Filterung ist überwachtes Lernen; Die Kundensegmentierung erfolgt oft unbeaufsichtigt."
        },
        {
          q: "Wofür werden Diffusionsmodelle hauptsächlich verwendet?",
          options: [
            "Textklassifizierung",
            "Die heutige Mainstream-Bild-/Videogeneration",
            "Datenbankabfragen",
            "Netzwerkrouting"
          ],
          answer: 1,
          explain: "Stable Diffusion, Midjourney, DALL·E 3 und ähnliche Text-zu-Bild-Tools basieren auf Diffusionsmodellen."
        },
        {
          q: "Was ist der Hauptzweck von Einbettungen?",
          options: [
            "Daten verschlüsseln",
            "Umwandlung von Text in Vektoren für die semantische Ähnlichkeitssuche",
            "Video komprimieren",
            "Schulung von GPU-Treibern"
          ],
          answer: 1,
          explain: "Semantisch ähnliche Inhalte haben nähere Vektoren – die Grundlage von RAG- und Vektordatenbanken."
        },
        {
          q: "Was ist eine KI-Fähigkeit?",
          options: [
            "Eine Spielcharakterfähigkeit",
            "Ein modulares Funktionspaket mit Domänenwissen und Toolregeln, das Agenten laden können",
            "Eine Programmiersprache",
            "Ein GPU-Modell"
          ],
          answer: 1,
          explain: "Beispielsweise bringt eine Cursor-Fähigkeit der KI bei, mit xlsx umzugehen; Agenten können Fähigkeiten für bestimmte Aufgaben dynamisch laden."
        },
        {
          q: "Was macht MCP (Model Context Protocol)?",
          options: [
            "Beschleunigen Sie das Modelltraining",
            "Standardisieren Sie, wie KI eine Verbindung zu externen Tools und Datenquellen herstellt",
            "Bilder generieren",
            "Eingabeaufforderungen ersetzen"
          ],
          answer: 1,
          explain: "Mit MCP kann AI über ein Protokoll eine Verbindung zu GitHub, Datenbanken, Dateisystemen und anderen externen Funktionen herstellen."
        },
        {
          q: "Was ist der richtige Arbeitsablauf zum Erstellen eines Taschenrechners mit Cursor Codex?",
          options: [
            "Merken Sie sich die vollständige HTML-Syntax und schreiben Sie alles von Hand",
            "Beschreiben Sie die Anforderungen → generieren Sie Code → führen Sie Tests durch → geben Sie Feedback zur Behebung",
            "Kopieren Sie Code nur aus dem Web, ohne ihn auszuführen",
            "Learning by Doing funktioniert am besten – probieren Sie reale Aufgaben aus und verstehen Sie Prinzipien durch Übung."
          ],
          answer: 1,
          explain: "Der praktische Fall dieser Website: „Anforderungen angeben → Code abrufen → im Browser öffnen → Korrekturen iterieren“ ist der Einstiegspfad für die KI-Programmierung."
        },
        {
          q: "Was bedeutet --ar 16:9 am Ende einer Midjourney-Eingabeaufforderung?",
          options: [
            "Bildversionsnummer",
            "Generieren Sie 16 Bilder",
            "Generieren Sie 16 Bilder",
            "Was ist die wichtigste Voraussetzung für das Stimmklonen von ElevenLabs / Fish Audio?"
          ],
          answer: 1,
          explain: "Was ist die wichtigste Voraussetzung für das Stimmklonen von ElevenLabs / Fish Audio?"
        },
        {
          q: "Was ist die wichtigste Voraussetzung für das Stimmklonen von ElevenLabs / Fish Audio?",
          options: [
            "Laden Sie klare, trockene Sprachaufnahmen hoch und klonen Sie nur Stimmen, zu deren Verwendung Sie berechtigt sind",
            "Laden Sie klare, trockene Sprachaufnahmen hoch und klonen Sie nur Stimmen, zu deren Verwendung Sie berechtigt sind",
            "Keine Aufnahme erforderlich",
            "Um zu beginnen, müssen Sie ein professionelles Mikrofon kaufen"
          ],
          answer: 1,
          explain: "Ruhige Umgebung, keine Hintergrundmusik, 1–3 Minuten trockene Stimme; Klonen Sie niemals die Stimmen anderer ohne Genehmigung."
        },
        {
          q: "Welche KI-Fähigkeit zeigt eine von OpenClaw geplante Börsennachrichtenaufgabe?",
          options: [
            "Nur Chat-Fragen und Antworten",
            "Agentenautomatisierung: geplante Auslöser, Abruf, Zusammenfassung und Kanal-Push",
            "Läuft ohne Konfiguration",
            "Läuft ohne Konfiguration"
          ],
          answer: 1,
          explain: "Mit OpenClaw Cron können Agenten Rechercheaufgaben nach einem Zeitplan ausführen und Ergebnisse veröffentlichen – die Ausgabe dient nur als Referenz; Überprüfen Sie es."
        },
        {
          q: "Wie ist die richtige Reihenfolge der vierphasigen Lernmethode dieser Website?",
          options: [
            "Üben → Erkenntnis → Überprüfen → Werkzeuge",
            "Erkenntnis → Werkzeuge → Praxis → Überprüfen",
            "Werkzeuge → Überprüfen → Erkenntnis → Üben",
            "Werkzeuge allein reichen aus"
          ],
          answer: 1,
          explain: "Erstellen Sie zunächst einen kognitiven Rahmen, beherrschen Sie dann die Tools und Eingabeaufforderungen, üben Sie praktisch und führen Sie schließlich ein Quiz und eine Wiederholung durch."
        },
        {
          q: "Was ist der sinnvollste Grundsatz bei der Auswahl von KI-Tools?",
          options: [
            "Wählen Sie für jedes Szenario das am besten geeignete Spezialtool aus, nicht das „beste“ insgesamt",
            "Wählen Sie für jedes Szenario das am besten geeignete Spezialtool aus, nicht das „beste“ insgesamt",
            "Installieren Sie alle 43 auf einmal",
            "Verwenden Sie immer nur das kostenlose Kontingent"
          ],
          answer: 1,
          explain: "Werkzeugauswahl für Tag 5: Chat, Codierung, Bilder, Agenten und Suche haben jeweils Stärken; Inländische Benutzer sollten auch den Zugang und den chinesischen Support in Betracht ziehen."
        },
        {
          q: "Was ist ein typischer Anwendungsfall für Reinforcement Learning?",
          options: [
            "E-Mail-Klassifizierung",
            "AlphaGo spielt Go",
            "Bildkomprimierung",
            "Datenbankindizierung"
          ],
          answer: 1,
          explain: "Reinforcement Learning lernt Richtlinien durch Belohnungssignale; AlphaGo und Robotersteuerung sind klassische Anwendungen.",
          topic: "Grundlagen"
        },
        {
          q: "Was ist Überanpassung?",
          options: [
            "Zu wenig Trainingsdaten",
            "Gute Leistung bei Trainingsdaten, aber schlecht bei neuen Daten",
            "Das Training ist zu langsam",
            "Nicht genügend GPU-Speicher"
          ],
          answer: 1,
          explain: "Überanpassung ist wie „Antworten auswendig lernen“ – sich Trainingsbeispiele zu merken, ohne sie zu verallgemeinern; Verwenden Sie mehr Daten oder Regularisierung.",
          topic: "Grundlagen"
        },
        {
          q: "Beschreiben Sie die Aufgabe ohne Beispiele",
          options: [
            "Beschreiben Sie die Aufgabe ohne Beispiele",
            "Geben Sie 100 Beispiele an",
            "Nur Bilder",
            "Das Modell muss verfeinert werden"
          ],
          answer: 0,
          explain: "Zero-Shot gibt keine Beispiele und verlässt sich auf Vortraining; Einige Beispiele finden Sie in der Wenig-Schuss-Eingabeaufforderung.",
          topic: "prompt-lab"
        },
        {
          q: "Was ist der Vorteil der Wenig-Schuss-Eingabeaufforderung?",
          options: [
            "Immer günstiger",
            "Ein paar Beispiele bringen Ausgabeformat und -stil schnell in Einklang",
            "Nur für Code",
            "Keine Aufforderung erforderlich"
          ],
          answer: 1,
          explain: "Das Einfügen von 1–3 Eingabe-Ausgabe-Beispielen in die Eingabeaufforderung verbessert die Formatkonsistenz erheblich.",
          topic: "prompt-lab"
        },
        {
          q: "Was ist der Hauptunterschied zwischen Fine-Tuning und Prompt Engineering?",
          options: [
            "Genau das Gleiche",
            "Feinabstimmung ändert Modellgewichte; Prompt Engineering ändert nur die Eingabe",
            "Schnelles Engineering kostet mehr",
            "Die Feinabstimmung gilt nur für Bilder"
          ],
          answer: 1,
          explain: "Die meisten Benutzer kommen mit einer zeitnahen Entwicklung aus; Die Feinabstimmung eignet sich für Unternehmen mit vielen gekennzeichneten Daten und umfassenden Anpassungsanforderungen.",
          topic: "Grundlagen"
        },
        {
          q: "Was ist der Unterschied zwischen diskriminierender KI und generativer KI?",
          options: [
            "Diskriminierende KI klassifiziert/prognostiziert; Generative KI erstellt neue Inhalte",
            "Diskriminierende KI klassifiziert/prognostiziert; Generative KI erstellt neue Inhalte",
            "Generative KI kann nur klassifizieren",
            "Kein Unterschied"
          ],
          answer: 1,
          explain: "Die Spam-Erkennung ist diskriminierend; ChatGPT-Schreiben und Midjourney-Bilder sind generativ.",
          topic: "Grundlagen"
        },
        {
          q: "Was lernt ein Modell hauptsächlich während des Vortrainings?",
          options: [
            "Nur Benutzer-Chatprotokolle",
            "Sprachmuster und Weltwissen aus umfangreichen allgemeinen Korpora",
            "Nur Bildpixel",
            "Jede von Menschen geschriebene Regel"
          ],
          answer: 1,
          explain: "Große Modelle werden zunächst anhand umfangreicher Texte vorab trainiert und anschließend durch Feinabstimmung/RLHF auf das Produktverhalten abgestimmt.",
          topic: "Grundlagen"
        },
        {
          q: "Was bewirkt Backpropagation?",
          options: [
            "Bilder generieren",
            "Aktualisieren Sie die Gewichte des neuronalen Netzwerks basierend auf Fehlern",
            "Stellen Sie eine Verbindung zum Internet her",
            "Modelle komprimieren"
          ],
          answer: 1,
          explain: "Der Kernalgorithmus für das Training neuronaler Netze: Modelle lernen, indem sie Parameter aus Fehlern anpassen.",
          topic: "Grundlagen"
        },
        {
          q: "Was kann ein CNN (Convolutional Neural Network) besonders gut?",
          options: [
            "Nur Text",
            "Bilder und räumlich strukturierte Daten",
            "Nur Audio",
            "Tabellarische Daten"
          ],
          answer: 1,
          explain: "CNN-Faltungen eignen sich für die Bilderkennung; Transformatoren sind in NLP und multimodalen Aufgaben häufiger anzutreffen.",
          topic: "Grundlagen"
        },
        {
          q: "Was ist eine typische Anwendung des unbeaufsichtigten Lernens?",
          options: [
            "Beschriftete E-Mail-Klassifizierung",
            "Hauspreisvorhersage (beschriftet)",
            "Hauspreisvorhersage (beschriftet)",
            "Unüberwachtes Lernen findet Struktur in unbeschrifteten Daten; Clustering und Dimensionsreduktion sind häufige Aufgaben."
          ],
          answer: 1,
          explain: "Unüberwachtes Lernen findet Struktur in unbeschrifteten Daten; Clustering und Dimensionsreduktion sind häufige Aufgaben.",
          topic: "Grundlagen"
        },
        {
          q: "Ist ChatGPT besser geeignet als die normale Websuche?",
          options: [
            "Suche nach genauen Börsentickercodes",
            "Mehrstufiger Dialog, Umschreiben, Brainstorming und Entwurfserstellung",
            "Ersetzen aller Suchmaschinen",
            "Ich mache nur mathematische Beweise"
          ],
          answer: 1,
          explain: "Konversations-KI zeichnet sich durch interaktive Erstellung und Analyse aus; Für präzise Daten in Echtzeit sind immer noch Suchwerkzeuge erforderlich.",
          topic: "Apps"
        },
        {
          q: "Nur Bildgenerierung",
          options: [
            "Nur Bildgenerierung",
            "Langer Kontext und raffinierter Text – ideal für lange Dokumente",
            "Nur Codierung",
            "Kein kostenloses Kontingent"
          ],
          answer: 1,
          explain: "Claude ist für seine ca. 200.000 Kontext- und Sicherheitsausrichtung bekannt; Artefakte können eine Vorschau von Code und Dokumenten anzeigen.",
          topic: "Apps"
        },
        {
          q: "Was ist der einzigartige Vorteil von Zwillingen?",
          options: [
            "Tiefe Integration mit der Google-Suche, Gmail, Docs und dem Google-Ökosystem",
            "Nur lokaler Betrieb",
            "Keine multimodale Unterstützung",
            "Keine chinesische Unterstützung"
          ],
          answer: 0,
          explain: "Nutzer des Google-Ökosystems können Gemini nahtlos nutzen, mit Echtzeitsuche und multimodalen Funktionen.",
          topic: "Apps"
        },
        {
          q: "Für welches Szenario eignet sich Kimi am besten?",
          options: [
            "Kurze SMS-Antworten",
            "Analyse sehr langer Dokumente (z. B. ganze Bücher, große PDFs)",
            "3D-Modellierung",
            "Entwicklung von Hardwaretreibern"
          ],
          answer: 1,
          explain: "Kimi ist für sehr lange Kontexte bekannt – ideal zum Lesen von Literatur und zum Verdauen umfangreicher Materialien.",
          topic: "Apps"
        },
        {
          q: "Warum ist DeepSeek für Entwickler besonders attraktiv?",
          options: [
            "Nur Zeichnen",
            "Open-Source-Modelle + sehr niedrige API-Preise + starke Argumentation",
            "Muss eine GPU kaufen",
            "Keine Codeunterstützung"
          ],
          answer: 1,
          explain: "DeepSeek-R1 zeichnet sich durch seine Argumentation aus; Die API-Kosten betragen nur einen winzigen Bruchteil von GPT-4.",
          topic: "Apps"
        },
        {
          q: "Was ist der größte Vorteil von Qwen für Privatanwender?",
          options: [
            "Muss ein VPN verwenden",
            "Starke chinesische Optimierung, kein VPN erforderlich, Integration des Tongyi-Ökosystems",
            "Nur Englisch",
            "Keine API"
          ],
          answer: 1,
          explain: "Wie funktioniert GitHub Copilot?",
          topic: "Apps"
        },
        {
          q: "Wie funktioniert GitHub Copilot?",
          options: [
            "Ersetzt die IDE",
            "Echtzeitvervollständigung und chatgestütztes Codieren in VS Code und anderen IDEs",
            "Nur Python",
            "Automatisches Commit an Git"
          ],
          answer: 1,
          explain: "Copilot ist tief in Editoren integriert; Die Linien-/Blockvervollständigung ist die häufigste tägliche Nutzung.",
          topic: "Apps"
        },
        {
          q: "Was ist der Hauptunterschied von Cursor zum regulären VS-Code?",
          options: [
            "Nur HTML",
            "KI-nativ: vollständige Projektindizierung + autonome Codierung mehrerer Dateien durch Agenten",
            "Kein Terminal",
            "Keine Plugin-Unterstützung"
          ],
          answer: 1,
          explain: "Cursor versteht die gesamte Codebasis; Der Agent-Modus kann dateienübergreifend bearbeiten und Befehle ausführen.",
          topic: "Apps"
        },
        {
          q: "Was betont der Kaskadenmodus von Windsurf?",
          options: [
            "Nur einzeilige Vervollständigung",
            "Ein Agent, der die Codebasis versteht und mehrstufige Aufgaben ausführt",
            "Nur Java",
            "Die Nutzung muss bezahlt werden"
          ],
          answer: 1,
          explain: "Cascade ist die Agent-Funktion von Codeium – der gleiche Wettbewerbsraum wie Cursor Agent in KI-IDEs.",
          topic: "Apps"
        },
        {
          q: "Was ist der Hauptformfaktor von Claude Code?",
          options: [
            "Terminalagent mit umfassender Codebasis und Git-Operationen",
            "Terminalagent mit umfassender Codebasis und Git-Operationen",
            "Mobile App",
            "Nur Chat"
          ],
          answer: 1,
          explain: "Claude Code zielt auf Befehlszeilen-Workflows ab – geeignet für komplexe Refaktorierungen und lange Codierungssitzungen.",
          topic: "Apps"
        },
        {
          q: "Für wen ist OpenAI Codex CLI am besten geeignet?",
          options: [
            "Nur Folien erstellen",
            "OpenAI-Abonnenten, die einen Codierungsagenten im Terminal oder in der Cloud-Sandbox ausführen",
            "Nur Grundschüler",
            "Kein Netzwerk erforderlich"
          ],
          answer: 1,
          explain: "Codex CLI ist der offizielle Befehlszeilen-Codierungsagent von OpenAI, der in ChatGPT Plus/Pro enthalten ist.",
          topic: "Apps"
        },
        {
          q: "Was ist Aiders Hauptmerkmal?",
          options: [
            "Closed-Source und teuer",
            "Open Source, bringen Sie Ihren eigenen API-Schlüssel mit, tiefe Git-Integration mit Auto-Commit",
            "Nur Java",
            "Keine Bearbeitung mehrerer Dateien"
          ],
          answer: 1,
          explain: "Aider ist ein Terminalpaar-Programmiertool. Jede Bearbeitung wird automatisch in Git aufgezeichnet – Sie kontrollieren die Kosten.",
          topic: "Apps"
        },
        {
          q: "Wofür eignet sich Bolt.new am besten?",
          options: [
            "Kernel-Entwicklung",
            "Nicht-Programmierer erstellen schnell Prototypen ausführbarer Web-Apps in natürlicher Sprache",
            "Training großer Modelle",
            "Datenbankoperationen"
          ],
          answer: 1,
          explain: "Bolt generiert Full-Stack-Apps im Browser – ideal für die MVP-Validierung und die schnelle Website-Erstellung.",
          topic: "Apps"
        },
        {
          q: "Was war Midjourneys Haupteinstiegspunkt?",
          options: [
            "Nur Befehlszeile",
            "Discord-Bot (unterstützt jetzt auch Web)",
            "Nur Excel-Plugin",
            "SMS"
          ],
          answer: 1,
          explain: "Midjourney begann auf Discord; Web ist jetzt auch verfügbar; Englische Eingabeaufforderungen funktionieren normalerweise besser.",
          topic: "praktisch"
        },
        {
          q: "Was ist der Vorteil von Stable Diffusion gegenüber geschlossenen Modellen?",
          options: [
            "Nur Cloud",
            "Open Source, lokale Bereitstellung, umfangreiche Community-Modelle und ControlNet-Ökosystem",
            "Immer schlechteste Bildqualität",
            "Keine LoRA-Unterstützung"
          ],
          answer: 1,
          explain: "SD läuft lokal; LoRA/ControlNet gibt Benutzern die volle Kontrolle über die Erzeugungspipeline.",
          topic: "Apps"
        },
        {
          q: "Was ist das Highlight von Flux in der Bildgenerierung?",
          options: [
            "Nur Schwarzweiß",
            "Hohe Qualität + genaue Textwiedergabe + lokale/API-Nutzung",
            "Nur Video",
            "Keine Open-Source-Version"
          ],
          answer: 1,
          explain: "Flux von Black Forest Labs zeichnet sich durch Textwiedergabe und menschliche Struktur aus.",
          topic: "Apps"
        },
        {
          q: "Wofür wird Suno hauptsächlich verwendet?",
          options: [
            "Code schreiben",
            "Generierung vollständiger Songs aus Text (Gesang und Begleitung)",
            "Folien erstellen",
            "Ausbildung von LLMs"
          ],
          answer: 1,
          explain: "Suno ist ein KI-Musiktool – beschreiben Sie einen Stil und erhalten Sie einen vollständigen Titel.",
          topic: "Apps"
        },
        {
          q: "Hochwertiges TTS und sofortiges Klonen von Stimmen",
          options: [
            "Bilderzeugung",
            "Hochwertiges TTS und sofortiges Klonen von Stimmen",
            "Videobearbeitung",
            "Suchmaschine"
          ],
          answer: 1,
          explain: "1–3 Minuten trockene Stimme können einen Ton klonen; unterstützt mehrsprachige Synchronisation und Podcast-Produktion.",
          topic: "praktisch"
        },
        {
          q: "Wie unterscheidet sich Perplexity von der herkömmlichen Google-Suche?",
          options: [
            "Nur Linklisten",
            "Direkte Antworten mit zitierten Quellen",
            "Kein Zugriff auf das Internet möglich",
            "Nur Bildsuche"
          ],
          answer: 1,
          explain: "Perplexity ist eine KI-Suchmaschine mit Zitaten – gut für schnelle Recherchen und dennoch zur Überprüfung von Fakten.",
          topic: "Apps"
        },
        {
          q: "Was ist die Funktion „Audioübersicht“ von NotebookLM?",
          options: [
            "Code generieren",
            "Verwandeln Sie hochgeladene Dokumente in AI-Audio im Podcast-Stil mit zwei Hosts",
            "E-Mail automatisch versenden",
            "Eisenbahnmodelle"
          ],
          answer: 1,
          explain: "NotebookLM kann PDFs/Notizen in anhörbare Podcast-Zusammenfassungen umwandeln – ideal zum Literaturstudium.",
          topic: "Apps"
        },
        {
          q: "Was ist der Vorteil von Metaso AI Search für chinesische Benutzer?",
          options: [
            "Muss ein VPN verwenden",
            "Werbefrei, mit Zitaten, akademischen/Podcast- und anderen chinesischen Suchmodi",
            "Nur Englisch",
            "Kein kostenloses Kontingent"
          ],
          answer: 1,
          explain: "Metaso ist eine inländische KI-Suche mit umfassender chinesischer Forschungserfahrung – zugänglich in China.",
          topic: "Apps"
        },
        {
          q: "Welchen Wert hat Notion AI?",
          options: [
            "Ersetzen Sie Photoshop",
            "Keine Zusammenarbeit",
            "Nur Chat",
            "Keine Zusammenarbeit"
          ],
          answer: 1,
          explain: "Notion AI ist eng mit Notizen verknüpft – geeignet für Teamdokumente und Wissensmanagement.",
          topic: "Apps"
        },
        {
          q: "Welches Gamma eignet sich am besten für einen schnellen Abschluss?",
          options: [
            "Kernel-Kompilierung",
            "Erstellen ausgefeilter Präsentationen/Dokumente aus einer Gliederung",
            "3D-Animation",
            "Hardware-Design"
          ],
          answer: 1,
          explain: "Wie positioniert sich OpenClaw?",
          topic: "Apps"
        },
        {
          q: "Wie positioniert sich OpenClaw?",
          options: [
            "Bildeditor",
            "Open-Source-AI-Agent-Gateway: Cron, Webhook, Multi-Channel-Push",
            "Musikplayer",
            "OpenClaw ermöglicht es Agenten, geplante Aufgaben auszuführen und an Telegram/Slack/Feishu und mehr zu pushen."
          ],
          answer: 1,
          explain: "OpenClaw ermöglicht es Agenten, geplante Aufgaben auszuführen und an Telegram/Slack/Feishu und mehr zu pushen.",
          topic: "Agent"
        },
        {
          q: "Wofür wird Dify hauptsächlich verwendet?",
          options: [
            "Videobearbeitung",
            "Visuelle Erstellung von LLM-Apps, RAG-Wissensdatenbanken und Workflows",
            "Krypto-Mining",
            "Hardwaretreiber"
          ],
          answer: 1,
          explain: "Dify ist eine Open-Source-Agenten-/App-Plattform – selbstgehostete Bots und Wissensdatenbank-Bots für Unternehmen.",
          topic: "Agent"
        },
        {
          q: "Was ist Cozes Kernszenario?",
          options: [
            "GPU-Cluster trainieren",
            "No-Code-Bot-Erstellung und Veröffentlichung auf Feishu/WeChat und anderen Plattformen",
            "Nur 3D",
            "Ersetzen Sie das Betriebssystem"
          ],
          answer: 1,
          explain: "Mit ByteDance Coze können Nicht-Entwickler Agent Bots per Drag-and-Drop verschieben – ein schneller Start in China.",
          topic: "Agent"
        },
        {
          q: "Was ist der Wert von n8n?",
          options: [
            "Nur Zeichnen",
            "Verbinden Sie Hunderte von Diensten und orchestrieren Sie Automatisierungsworkflows (einschließlich KI-Knoten).",
            "Word ersetzen",
            "Nur E-Mail senden"
          ],
          answer: 1,
          explain: "n8n ist eine offene Automatisierungsplattform – Sie können LLMs in Geschäftspipelines einbetten.",
          topic: "Agent"
        },
        {
          q: "Wofür eignen sich Generalagenten wie Manus?",
          options: [
            "Nur Wetter",
            "Durchgehende, mehrstufige Aufgaben: Recherche, Berichte, Surfen im Internet usw.",
            "Ersetzen Sie Anwälte vor Gericht",
            "Keine menschliche Überprüfung erforderlich"
          ],
          answer: 1,
          explain: "Manus legt Wert auf autonome Planung bei langen Aufgaben – die Ergebnisse müssen immer noch von Menschen überprüft werden.",
          topic: "Agent"
        },
        {
          q: "Welches Kernproblem löst das MCP-Protokoll?",
          options: [
            "Beschleunigen Sie GPUs",
            "Vereinheitlichen Sie die Art und Weise, wie KI eine Verbindung zu externen Tools und Datenquellen herstellt",
            "Musik generieren",
            "Ersetzen Sie HTTP"
          ],
          answer: 1,
          explain: "Mit dem Model Context Protocol können sich Claude, Cursor und andere auf standardmäßige Weise in GitHub, Datenbanken usw. einbinden.",
          topic: "Wissen"
        },
        {
          q: "Was ermöglicht ein Funktionsaufruf einem LLM?",
          options: [
            "Nur Chat",
            "Wählen Sie vordefinierte APIs/Funktionen je nach Absicht aus und rufen Sie sie auf",
            "Unbegrenzte kostenlose Nutzung",
            "Kein Netzwerk erforderlich"
          ],
          answer: 1,
          explain: "Funktionsaufrufe sind die Grundlage für Agenten, die Wetter, Taschenrechner, Datenbanken und mehr aufrufen.",
          topic: "Wissen"
        },
        {
          q: "Welche Rolle spielt eine Vektordatenbank in RAG?",
          options: [
            "Eisenbahnmodelle",
            "Speichern Sie Einbettungen und führen Sie einen semantischen Ähnlichkeitsabruf durch",
            "E-Mail senden",
            "Rendern Sie Webseiten"
          ],
          answer: 1,
          explain: "Was ist der sicherste Ansatz beim Einsatz von KI für vertrauliche Unternehmensdateien?",
          topic: "Grundlagen"
        },
        {
          q: "Was ist der sicherste Ansatz beim Einsatz von KI für vertrauliche Unternehmensdateien?",
          options: [
            "Laden Sie es kostenlos in jede öffentliche Cloud hoch",
            "Überprüfen Sie die Datenschutzrichtlinien. Verwenden Sie Unternehmensebene/lokale Bereitstellung/De-Identifizierung für sensible Daten",
            "An jeden senden",
            "Posten Sie Screenshots in den sozialen Medien"
          ],
          answer: 1,
          explain: "Vertrauliche Daten erfordern Unternehmensvereinbarungen oder Privatisierung; Bei den internen Schulungen dieser Website wird auch auf die Einhaltung der Sicherheitsvorschriften Wert gelegt.",
          topic: "ai-Übersicht"
        },
        {
          q: "Was tun, wenn KI eine sachliche Antwort gibt?",
          options: [
            "Überprüfen Sie die Quellen – insbesondere Zahlen, Daten und Namen",
            "Überprüfen Sie die Quellen – insbesondere Zahlen, Daten und Namen",
            "Vertraue ihm niemals",
            "Fragen Sie nur einmal"
          ],
          answer: 1,
          explain: "Halluzination ist eine bekannte LLM-Grenze; Selbst die Verwirrung bei Zitaten erfordert eine zweite Überprüfung der wichtigsten Fakten.",
          topic: "ai-Übersicht"
        },
        {
          q: "Was ist der richtige Ablauf für die Iteration von Eingabeaufforderungen?",
          options: [
            "Einmal schreiben und nie ändern",
            "Kürzer ist immer besser",
            "Kürzer ist immer besser",
            "Entfernen Sie alle Formatanforderungen"
          ],
          answer: 1,
          explain: "Prompt Engineering ist experimentelle Wissenschaft; Das Prompt-Lab dieser Site dient dem Vergleich von Iterationen.",
          topic: "prompt-lab"
        },
        {
          q: "Welchen Vorteil hat die Angabe des Ausgabeformats in einer Eingabeaufforderung?",
          options: [
            "Verschwendet Token",
            "Immer langsamer",
            "Immer langsamer",
            "Das Modell wird ablehnen"
          ],
          answer: 1,
          explain: "Die Abfrage nach JSON, Markdown-Tabellen oder Aufzählungslisten verbessert die Benutzerfreundlichkeit erheblich.",
          topic: "prompt-lab"
        },
        {
          q: "Was ist die empfohlene Methode zur Analyse von Excel-Daten mit ChatGPT?",
          options: [
            "Machen Sie einen Screenshot einer verschwommenen Tabelle",
            "Laden Sie die Datei hoch oder fügen Sie strukturierte Daten ein und geben Sie die zu berechnenden Metriken an",
            "Bitten Sie nur „analysieren“",
            "Daten können nicht analysiert werden"
          ],
          answer: 1,
          explain: "Die praktischen Aspekte dieser Website: Bereitstellung klarer Daten und Fragen; Verwenden Sie bei Bedarf den Code-Interpreter für Diagramme.",
          topic: "praktisch"
        },
        {
          q: "Was sollten Sie beachten, wenn Sie Perplexity für die Konkurrenzforschung nutzen?",
          options: [
            "Behandeln Sie Schlussfolgerungen als Anlageberatung",
            "Überprüfen Sie die zitierten Quellen und Daten. Schlüsseldaten gegenprüfen",
            "Es ist nicht erforderlich, Schwerpunktbereiche anzugeben",
            "Bitten Sie nur um „Wettbewerber analysieren“"
          ],
          answer: 1,
          explain: "Diese Website ist praktisch: Die Stärke von Perplexity sind überprüfbare Quellen, Preise usw. müssen jedoch noch von einer offiziellen Website überprüft werden.",
          topic: "praktisch"
        },
        {
          q: "Was ist der empfohlene Ablauf zum Lesen von Arbeiten mit NotebookLM?",
          options: [
            "Laden Sie hoch und stellen Sie niemals Fragen",
            "PDF hochladen → Detailfragen stellen → Zusammenfassungs-/Podcast-Funktionen zur Verstärkung nutzen",
            "Nur ein Papier",
            "Ersetzen Sie das Peer-Review des Beraters"
          ],
          answer: 1,
          explain: "Nach dem Hochladen können Sie chatten; Die Audioübersicht eignet sich hervorragend, um wichtige Punkte auf dem Weg zur Arbeit noch einmal durchzugehen.",
          topic: "praktisch"
        },
        {
          q: "Was ist bei der Erstellung von Porträts in Midjourney zu beachten?",
          options: [
            "Verwenden Sie die Namen von Prominenten frei",
            "Vermeiden Sie nicht autorisierte Namen echter Prominenter; Befolgen Sie die Inhaltsrichtlinien der Plattform",
            "Immer illegal",
            "Nur Landschaften"
          ],
          answer: 1,
          explain: "Respektieren Sie Ähnlichkeitsrechte und Plattformregeln. Bestätigen Sie vor der kommerziellen Nutzung die Abonnementlizenzbedingungen.",
          topic: "praktisch"
        },
        {
          q: "Was sind die Compliance-Voraussetzungen für Voice-Cloning-Dienste?",
          options: [
            "Laden Sie Influencer-Audio herunter und verwenden Sie es",
            "Klonen Sie Ihre eigene Stimme oder Stimmen nur mit schriftlicher Genehmigung",
            "Je lauter, desto besser",
            "Keine Aufnahme erforderlich"
          ],
          answer: 1,
          explain: "Fish Audio/ElevenLabs benötigen beide trockene Sprachproben, zu deren Nutzung Sie berechtigt sind.",
          topic: "praktisch"
        },
        {
          q: "Was macht --tz „Asia/Shanghai“ in einem OpenClaw-Cronjob?",
          options: [
            "Sprache einstellen",
            "Planen Sie den Job so, dass er in der Zeitzone Shanghai ausgelöst wird",
            "Nachrichten verschlüsseln",
            "Wählen Sie das KI-Modell"
          ],
          answer: 1,
          explain: "Cron benötigt eine explizite Zeitzone – andernfalls stimmt der Wochentag 8:30 möglicherweise nicht mit der Ortszeit überein.",
          topic: "praktisch"
        },
        {
          q: "Was sollten Sie den Agenten zuerst bitten, wenn Sie den Dunkelmodus in Windsurf stapelweise ändern?",
          options: [
            "Ändern Sie alles ohne Bestätigung",
            "Zu ändernde Dateien auflisten und nach Bestätigung ausführen",
            "Löschen Sie das Projekt",
            "Ändern Sie nur eine Variable"
          ],
          answer: 1,
          explain: "Praktisch zum Anfassen: Cascade plant zuerst und führt es dann aus – besser kontrollierbar als „Alles ändern“.",
          topic: "praktisch"
        },
        {
          q: "Was ist der beste Input, wenn man mit Gamma schnell ein Pitch-Deck erstellt?",
          options: [
            "Leer",
            "Zufällige Emojis",
            "Zufällige Emojis",
            "500 Seiten Volltext"
          ],
          answer: 1,
          explain: "Eine strukturierte Gliederung hilft Gamma bei der Erstellung logischer Folien und der anschließenden Feinabstimmung der visuellen Elemente.",
          topic: "praktisch"
        },
        {
          q: "Was macht ControlNet bei stabiler Diffusion?",
          options: [
            "Beschleunigen Sie das Training",
            "Verwenden Sie Kanten/Posen und andere Bedingungen, um die Komposition präzise zu steuern",
            "Nur Farbkorrektur",
            "Ersetzen Sie LoRA"
          ],
          answer: 1,
          explain: "Mit ControlNet können Benutzer die Ausgabe mit Skizzen, Posenkarten usw. einschränken – eine zentrale Erweiterung des SD-Ökosystems.",
          topic: "Wissen"
        },
        {
          q: "Wofür wird LoRA üblicherweise bei der Bilderzeugung verwendet?",
          options: [
            "Video komprimieren",
            "Leichte Feinabstimmung bestimmter Stile/Charaktere/Produkt-Looks",
            "Trainieren Sie LLMs",
            "E-Mail senden"
          ],
          answer: 1,
          explain: "LoRA ist ein kleiner Adapter, den Sie auf ein Basismodell stapeln können, um eine konsistente Markendarstellung zu erzielen.",
          topic: "Wissen"
        },
        {
          q: "Was ist derzeit eine wesentliche Einschränkung der Videomodelle der Sora-Klasse?",
          options: [
            "Live-Action vollständig ersetzen",
            "Physikalische Angaben können falsch sein; erfordert ein menschliches Screening und eine Compliance-Überprüfung",
            "Nur 1 Sekunde",
            "Unbegrenzt kostenlos"
          ],
          answer: 1,
          explain: "KI-Video schreitet schnell voran, muss aber noch auf physische Plausibilität, Urheberrecht und Plattformregeln überprüft werden.",
          topic: "Apps"
        },
        {
          q: "Wozu eignet sich Microsoft Copilot am besten in Office?",
          options: [
            "Neuinstallation des Betriebssystems",
            "Dokumentdaten in Word/Excel/PPT generieren, zusammenfassen und analysieren",
            "Ersetzen Sie Outlook-Server",
            "Nur Zeichnen"
          ],
          answer: 1,
          explain: "M365-Abonnenten können Copilot in der Office-Seitenleiste für alltägliche Dokumente aufrufen.",
          topic: "Apps"
        },
        {
          q: "Was ist die Hauptpositionierung von Zcode?",
          options: [
            "Musikplayer",
            "Zhipu GLM-basierte Agentic-Entwicklungsumgebung, die langfristige Aufgaben unterstützt",
            "Nur Chat",
            "Nur Englisch"
          ],
          answer: 1,
          explain: "Zcode richtet sich an inländische Entwickler – Desktop-/Remote- und Feishu-/WeChat-Bot-Unterstützung.",
          topic: "Apps"
        },
        {
          q: "Was reizt Entwickler an Gemini CLI?",
          options: [
            "Muss eine GPU kaufen",
            "Terminalnutzung + Google-Konto + relativ großzügiges kostenloses Kontingent",
            "Nur C++",
            "Keine Dateioperationen"
          ],
          answer: 1,
          explain: "Gemini CLI ist Open Source; Das kostenlose Kontingent ist unter den CLI-Tools konkurrenzfähig.",
          topic: "Apps"
        },
        {
          q: "Welche Beziehung besteht zwischen Cline und Cursor?",
          options: [
            "Genau das Gleiche",
            "Cline ist eine VS Code-Erweiterung, die mehrere APIs verwenden kann – ein Wechsel des Editors ist nicht erforderlich",
            "Cline zeichnet nur",
            "Cline ist eine Suchmaschine"
          ],
          answer: 1,
          explain: "Cline fügt dem vorhandenen VS-Code die Agent-Fähigkeit hinzu – gut für Benutzer, die ihre eigenen Modelle auswählen.",
          topic: "Apps"
        },
        {
          q: "Welche IDEs unterstützt Continue.dev?",
          options: [
            "VS Code und die vollständige JetBrains-Suite",
            "VS Code und die vollständige JetBrains-Suite",
            "Nur Browser",
            "Nur Xcode"
          ],
          answer: 1,
          explain: "Continue ist ein offener Assistent; Teams können config.yaml teilen, um Modelleinstellungen zu vereinheitlichen.",
          topic: "Apps"
        },
        {
          q: "Für wen ist Amazon Q Developer besonders geeignet?",
          options: [
            "Nur Illustration",
            "AWS-Cloud-Entwicklung, SDK-Dokumentenintegration und Unternehmens-Compliance",
            "Nur mobil",
            "Ersetzen Sie die Hardware"
          ],
          answer: 1,
          explain: "Was ist das Hauptunterscheidungsmerkmal von Grok?",
          topic: "Apps"
        },
        {
          q: "Was ist das Hauptunterscheidungsmerkmal von Grok?",
          options: [
            "Kein Netzwerk",
            "X (Twitter) Echtzeit-Feed und DeepSearch-Modi",
            "Nur Codierung",
            "In China erforderlich"
          ],
          answer: 1,
          explain: "Grok lässt sich in X integrieren und ist besonders gut darin, Live-Sozial- und Nachrichtendynamiken zu verfolgen.",
          topic: "Apps"
        },
        {
          q: "Welche Annehmlichkeiten bietet Doubao inländischen Nutzern?",
          options: [
            "Muss ein VPN verwenden",
            "Natürlicher chinesischer Dialog, kostenlose Quote, Integration des Douyin/Feishu-Ökosystems",
            "Nur Englisch",
            "Kein Multimodal"
          ],
          answer: 1,
          explain: "Doubao ist der Assistent von ByteDance – große inländische Nutzerbasis und einfacher Zugang.",
          topic: "Apps"
        },
        {
          q: "Welche Ressource ist NICHT in ERNIE Bot integriert?",
          options: [
            "Baidu Search und Wenku",
            "Optimierung der chinesischen Schrift",
            "Optimierung der chinesischen Schrift",
            "Multimodale Fähigkeiten"
          ],
          answer: 1,
          explain: "Die Stärke von ERNIE Bot sind chinesische Korpora und inländische Ressourcen wie Baidu Search.",
          topic: "Apps"
        },
        {
          q: "Was generiert Kling AI hauptsächlich?",
          options: [
            "Nur Musik",
            "Text-zu-Video und Bild-zu-Video, bequemer Zugriff in China",
            "Nur Code",
            "3D-Druckdateien"
          ],
          answer: 1,
          explain: "Kuaishou Kling ist mit seinem täglichen kostenlosen Kontingent führend bei der inländischen Videoproduktion.",
          topic: "Apps"
        },
        {
          q: "An wen richtet sich Runway Gen-3 hauptsächlich?",
          options: [
            "Tabellenkalkulation",
            "E-Mail-Client",
            "E-Mail-Client",
            "Hardwaretreiber"
          ],
          answer: 1,
          explain: "Runway bietet Gen-3-Videogenerierung sowie Bearbeitung, Mattierung und andere professionelle Funktionen.",
          topic: "Apps"
        },
        {
          q: "Wie schneidet Fish Audio im Vergleich zu ElevenLabs für Privatanwender ab?",
          options: [
            "VPN erforderlich und nur Englisch",
            "Natürliche chinesische Aussprache, einfacher Zugang – gut für die Synchronisation im Inland",
            "Kann nicht geklont werden",
            "Nur 1 Sekunde Audio"
          ],
          answer: 1,
          explain: "Fish Audio ist eine inländische Sprachplattform – es lohnt sich, sie zunächst für chinesische Szenarien auszuprobieren.",
          topic: "Apps"
        },
        {
          q: "Warum „erst das Portfolio, dann die Preisgestaltung“ bei der Monetarisierung mit KI?",
          options: [
            "Gesetzliche Anforderung",
            "Kunden benötigen vor der Zahlung nachweisbare, lieferbare Muster",
            "Bedeutungslos",
            "Muss kostenlos sein"
          ],
          answer: 1,
          explain: "Der Monetarisierungsleitfaden dieser Website: Beweisen Sie Ihre Fähigkeiten mit einem Demo-Fall und besprechen Sie dann Preis und Pakete.",
          topic: "monetarisieren"
        },
        {
          q: "Was sollte in der Vereinbarung klargestellt werden, wenn man Bot-Verträge für Unternehmenswissensdatenbanken abschließt?",
          options: [
            "Nur mündliche Vereinbarung",
            "Dateneigentum, Aktualisierungshäufigkeit, Haftungsausschlüsse und Wartungsumfang",
            "Unbegrenzte kostenlose Überarbeitungen",
            "Garantieren Sie 100 % Genauigkeit"
          ],
          answer: 1,
          explain: "Bot-Antworten sollten den Vermerk „nur als Referenz“ enthalten. Daten und Schlüssel gehören dem Kunden – schreiben Sie den Wartungsumfang klar auf.",
          topic: "monetarisieren"
        }
      ]
  });
})();
