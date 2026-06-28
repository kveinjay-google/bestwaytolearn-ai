/* DE overlays — tools */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('de', {
    appCategories: {
        "对话助手": "Chat-Assistenten",
        "编程开发": "Produktivität im Büro",
        "图像创作": "Bilderstellung",
        "视频音频": "Video und Audio",
        "办公效率": "Produktivität im Büro",
        "Agent 自动化": "Agentenautomatisierung",
        "搜索研究": "Suchen und recherchieren",
        "全部": "Alle"
      },
      apps: [
        {
          category: "Chat-Assistenten",
          desc: "Die universelle Konversations-KI von OpenAI. GPT-4o unterstützt multimodalen Text, Bild und Sprache. Stark im Schreiben, Analysieren, Codieren und Brainstorming mit einem umfangreichen Plugin-Ökosystem.",
          tags: [
            "Universell einsetzbar",
            "Multimodal",
            "Plugins"
          ],
          features: [
            "DALL·E-Bilderzeugung",
            "DALL·E-Bilderzeugung",
            "DALL·E-Bilderzeugung",
            "Sprachchat"
          ],
          bestFor: "Einsteiger und alltagstauglicher Allround-Assistent",
          tip: "Das kostenlose GPT-4o mini reicht für die meisten Aufgaben aus; Erwägen Sie Plus (20 $/Monat) für komplexe Arbeiten."
        },
        {
          category: "Chat-Assistenten",
          desc: "Gebaut von Anthropic, bekannt für langen Kontext (200.000), Sicherheit und raffiniertes Schreiben. Claude 3.5 Sonnet zeichnet sich durch Programmieren und Schreiben aus; Mit Artifacts können Sie Code und Dokumente live in der Vorschau anzeigen.",
          tags: [
            "Langer Text",
            "Sicherheit",
            "200.000 Kontext"
          ],
          features: [
            "200.000 Kontext",
            "Vorschau der Artefakte",
            "PDF-Analyse",
            "Codegenerierung"
          ],
          bestFor: "Lange Dokumente, Schreiben und Codeentwicklung",
          tip: "Top-Wahl für Verträge, Dokumente und Codebasen; Pro kostet 20 $/Monat."
        },
        {
          category: "Chat-Assistenten",
          desc: "Der KI-Assistent von Google ist tief in die Suche, Gmail, Docs und YouTube integriert. Gemini 2.0 unterstützt multimodale Interaktion in Echtzeit und Millionen-Token-Kontext.",
          tags: [
            "Suchintegration",
            "Multimodal",
            "Frei"
          ],
          features: [
            "Integration des Google-Ökosystems",
            "Echtzeitsuche",
            "Multimodale Interaktion",
            "Ultralanger Kontext"
          ],
          bestFor: "Nutzer des Google-Ökosystems, die Live-Informationen benötigen",
          tip: "Wenn Sie bereits Gmail/Docs nutzen, ist die kostenlose Version sehr leistungsfähig."
        },
        {
          category: "Chat-Assistenten",
          desc: "Von Alibaba mit starkem Chinesisch-Verständnis. Qwen2.5 ist in vielen Benchmarks führend. Tongyi Wanxiang kümmert sich um Bild/Video; Tongyi Lingma hilft beim Codieren.",
          tags: [
            "chinesisch",
            "Inländisch",
            "Frei"
          ],
          features: [
            "Chinesische Optimierung",
            "Codefähigkeit",
            "Tongyi Wanxiang Bilder",
            "Offene API"
          ],
          bestFor: "Täglicher Chat und Entwicklung für Benutzer in China",
          tip: "Kein VPN erforderlich; großzügiges kostenloses Kontingent für chinesische Szenarien."
        },
        {
          category: "Chat-Assistenten",
          desc: "Baidus KI-Assistent mit umfangreichen chinesischen Korpora in ERNIE 4.0, der Suche, Wenku, Karten und mehr integriert. Stark in Fragen und Antworten auf Chinesisch und in der Erstellung von Inhalten.",
          tags: [
            "chinesisch",
            "Suchen",
            "Inländisch"
          ],
          features: [
            "Baidu Search-Integration",
            "Chinesische Schrift",
            "Multimodal",
            "Plugin-Marktplatz"
          ],
          bestFor: "Erstellung chinesischer Inhalte und Wissenssuche",
          tip: "Großartig, wenn Sie chinesische Webinformationen benötigen."
        },
        {
          category: "Chat-Assistenten",
          desc: "Von Moonshot AI, bekannt für ultralangen Kontext (bis zu 2 Millionen Zeichen). Bewältigt ganze Bücher, lange Berichte und große Codebasen mit starker Websuche.",
          tags: [
            "Ultralanger Kontext",
            "chinesisch",
            "Lektüre"
          ],
          features: [
            "2M-Zeichenkontext",
            "Websuche",
            "Dateianalyse",
            "Code-Verständnis"
          ],
          bestFor: "Sehr lange Dokumentenanalyse und Literaturlektüre",
          tip: "Verwenden Sie diese Funktion, wenn Sie ein ganzes Buch oder eine große PDF-Datei analysieren müssen."
        },
        {
          category: "Chat-Assistenten",
          desc: "Von DeepSeek mit führender Open-Source-Leistung und herausragender DeepSeek-R1-Argumentation. Die API-Preise sind äußerst wettbewerbsfähig (ca. 1/50 von GPT-4) mit lokaler Bereitstellungsunterstützung.",
          tags: [
            "Open Source",
            "Argumentation",
            "Wert"
          ],
          features: [
            "R1 tiefes Denken",
            "Offen und einsetzbar",
            "Sehr niedrige API-Kosten",
            "Starke Codierung"
          ],
          bestFor: "Entwickler, kostenbewusste Benutzer und Aufgaben, die viele Überlegungen erfordern",
          tip: "Der Favorit der Entwickler; Die Kosten für die API-Integration sind minimal."
        },
        {
          category: "Produktivität im Büro",
          desc: "Microsoft/OpenAI AI-Codierungsassistent, integriert in VS Code, JetBrains und andere IDEs. Echtzeit-Vervollständigung, Logikerklärung, Funktionen und Komponententests.",
          tags: [
            "IDE-Integration",
            "Fertigstellung",
            "Microsoft"
          ],
          features: [
            "Zeilen-/Blockvervollständigung",
            "Chatten",
            "Mehrsprachig",
            "Copilot-Arbeitsbereich"
          ],
          bestFor: "Tägliche Codierungsbeschleunigung und -vervollständigung",
          tip: "Unverzichtbar für Programmierer; Studierende und OSS-Mitwirkende können sich für einen kostenlosen Zugang bewerben."
        },
        {
          category: "Produktivität im Büro",
          desc: "KI-nativer Code-Editor (VS-Code-basiert), der den gesamten Projektkontext versteht. Der Agent-Modus kann das Codieren, Debuggen und Refactoring mehrerer Dateien autonom durchführen.",
          tags: [
            "KI-IDE",
            "Ganzes Projekt",
            "Agent"
          ],
          features: [
            "Vollständige Projektindizierung",
            "Kodierung autonomer Agenten",
            "Multi-Modell-Umschaltung",
            "Terminalintegration"
          ],
          bestFor: "Entwicklung auf Projektebene mit KI-Unterstützung",
          tip: "Sehr empfehlenswert für Entwickler, die eine deutliche Produktivitätssteigerung wünschen."
        },
        {
          category: "Produktivität im Büro",
          desc: "Codeiums KI-IDE. Der Cascade-Agent-Modus versteht die Codebasis, plant und führt mehrstufige Codierungsaufgaben mit großzügigem kostenlosen Kontingent aus.",
          tags: [
            "Agent",
            "Mehrdatei",
            "Kostenloses Kontingent"
          ],
          features: [
            "Kaskadenagent",
            "Verständnis der Codebasis",
            "Bearbeitung mehrerer Dateien",
            "Großes kostenloses Kontingent"
          ],
          bestFor: "KI-gesteuerte Entwicklungsprojekte",
          tip: "Starker Cursor-Konkurrent; Kernfunktionen funktionieren im kostenlosen Plan."
        },
        {
          category: "Produktivität im Büro",
          desc: "Anthropics Terminal-KI-Coding-Agent mit tiefem Verständnis der Codebasis. Unterstützt Bearbeitungen mehrerer Dateien, Testläufe, Git-Operationen und benutzerdefinierte Hooks/Plugins. Hervorragend geeignet für Langkontext-Refaktoren.",
          tags: [
            "Terminalagent",
            "Langer Kontext",
            "Anthropisch"
          ],
          features: [
            "Vollständige Repo-Indizierung",
            "Autonome Bearbeitung mehrerer Dateien",
            "Hooks/Plugin-Erweiterungen",
            "Starke komplexe Refaktoren"
          ],
          bestFor: "Terminal-Workflows, komplexe Refaktoren, Benutzer des Claude-Ökosystems",
          tip: "Erfordert Claude Pro/Max; Am besten für CLI-First-Entwickler geeignet, die umfassende Agentenleistung wünschen."
        },
        {
          category: "Produktivität im Büro",
          desc: "OpenAIs offizieller CLI-Coding-Agent basierend auf Modellen der GPT-5-Serie. Plant, schreibt, testet und schreibt Code lokal oder in Cloud-Sandboxen fest. Unterstützt MCP und mehrstufige autonome Aufgaben.",
          tags: [
            "CLI",
            "OpenAI",
            "Cloud-Sandbox"
          ],
          features: [
            "Aufgaben des autonomen Agenten",
            "Aufgaben des autonomen Agenten",
            "MCP-Tool-Integration",
            "Tiefe GitHub-Integration"
          ],
          bestFor: "OpenAI-Abonnenten automatisieren Codierungspipelines",
          tip: "Im Lieferumfang von ChatGPT Plus/Pro enthalten; Führen Sie Codex im Terminal aus, um Agentenaufgaben zu starten."
        },
        {
          category: "Produktivität im Büro",
          desc: "xAIs Terminal-KI-Entwicklungsumgebung (Grok CLI) mit Planmodus, parallelen Subagenten, AGENTS.md-Projektspezifikationen und MCP-Serverzugriff für komplexe mehrstufige Entwicklung.",
          tags: [
            "CLI",
            "Planmodus",
            "Unteragenten"
          ],
          features: [
            "Planung im Planmodus",
            "Parallele Unteragenten",
            "AGENTS.md-Unterstützung",
            "MCP-Integration"
          ],
          bestFor: "xAI-Benutzer, mehrstufige Agentenentwicklung, Terminal-Workflows",
          tip: "Erfordert SuperGrok oder X Premium+; Platzieren Sie AGENTS.md im Projektstammverzeichnis, um das Agentenverhalten anzupassen."
        },
        {
          category: "Produktivität im Büro",
          desc: "Die Agenten-Entwicklungsumgebung von Z.ai, unterstützt von GLM-5.2. Desktop-, Remote-Entwicklungs- und Feishu/WeChat-Bot-Zugriff für komplexe Codierungsaufgaben über einen längeren Zeitraum.",
          tags: [
            "Inländisch",
            "ADE",
            "Langer Horizont"
          ],
          features: [
            "GLM-5.2 angetrieben",
            "Desktop/Remote-Dual-Modus",
            "Feishu/WeChat Bot",
            "Agentenaufgaben mit langem Horizont"
          ],
          bestFor: "Inländische Entwickler, Zhipu-Ökosystem, kollaborative Remote-Codierung",
          tip: "Herunterladen unter zcode.z.ai; Stark für chinesische Szenarien und lange Aufgaben, kein VPN erforderlich."
        },
        {
          category: "Produktivität im Büro",
          desc: "Das Open-Source-CLI-KI-Codierungstool von Google. Melden Sie sich mit einem Google-Konto an; großzügiges kostenloses Kontingent (~1000 Anrufe/Tag). Codegenerierung, Dateioperationen, Shell-Befehle und Search Grounding.",
          tags: [
            "CLI",
            "Open Source",
            "Kostenloses Kontingent"
          ],
          features: [
            "Anmeldung für das Google-Konto",
            "Hohes kostenloses Kontingent",
            "Shell-/Dateioperationen",
            "Suche Erdung"
          ],
          bestFor: "Budgetbewusste Benutzer, Google-Ökosystem, CLI-Agent-Erkundung",
          tip: "npm install -g @google/gemini-cli; Die kostenlose Stufe ist unter den CLI-Tools sehr wettbewerbsfähig."
        },
        {
          category: "Produktivität im Büro",
          desc: "Open-Source-KI-Paarprogrammierung im Terminal mit GPT/Claude/DeepSeek oder einer beliebigen Modell-API. Tiefgreifende Git-Integration – automatisches Commit bei jeder Änderung, Bearbeitung mehrerer Dateiunterschiede. Über 39.000 GitHub-Stars.",
          tags: [
            "Open Source",
            "Na gut",
            "Git-nativ"
          ],
          features: [
            "Beliebige Modell-API",
            "Automatisches Git-Commit",
            "Sprachunabhängig",
            "Sprachunabhängig"
          ],
          bestFor: "Entwickler mit eigenen API-Schlüsseln, die Wert auf den Git-Verlauf legen",
          tip: "Open-Source-VS-Code-Erweiterung, die jede LLM-API verbindet. Der Agent-Modus kann Dateien lesen/schreiben, Terminalbefehle ausführen und im Internet surfen. Schrittweise Umsetzung planen/handeln."
        },
        {
          category: "Produktivität im Büro",
          desc: "Open-Source-VS-Code-Erweiterung, die jede LLM-API verbindet. Der Agent-Modus kann Dateien lesen/schreiben, Terminalbefehle ausführen und im Internet surfen. Schrittweise Umsetzung planen/handeln.",
          tags: [
            "VS-Code",
            "Open Source",
            "Na gut"
          ],
          features: [
            "Plan/Act-Modus",
            "Ausführung von Terminalbefehlen",
            "Browserunterstützung",
            "Multimodell-API"
          ],
          bestFor: "VS-Code-Benutzer, die ihre eigenen Modelle auswählen möchten",
          tip: "Suchlinie in Erweiterungen; Verbinden Sie Anthropic/OpenAI/Ollama, ohne den Editor zu wechseln."
        },
        {
          category: "Produktivität im Büro",
          desc: "Open-Source-KI-Codierungsassistent für VS Code und JetBrains. Tab-Vervollständigung, Chat und Agentenmodus. Teams können Modelle und Regeln für die schrittweise Einführung im Unternehmen austauschen.",
          tags: [
            "Multi-IDE",
            "Open Source",
            "Teamfreundlich"
          ],
          features: [
            "VS-Code + JetBrains",
            "Tab-Vervollständigung",
            "Benutzerdefinierte Agenten",
            "Gemeinsame Teamkonfiguration"
          ],
          bestFor: "Multi-IDE-Teams benötigen eine einheitliche KI-Codierungseinrichtung",
          tip: "Von continue.dev installieren; config.yaml kann auf Ihre API oder lokales Ollama verweisen."
        },
        {
          category: "Produktivität im Büro",
          desc: "AWS AI-Codierungsassistent als IDE-Plugin und CLI, tief integriert in AWS-Dokumente und SDKs. Codegenerierung, Sicherheitsscans, Codekonvertierung (z. B. Java-Upgrades) und Agentenaufgaben.",
          tags: [
            "AWS",
            "CLI+IDE",
            "Unternehmen"
          ],
          features: [
            "AWS-Wissensintegration",
            "Code-Sicherheitsscan",
            "Codekonvertierung",
            "Kostenloses Kontingent verfügbar"
          ],
          bestFor: "AWS-Cloud-Entwicklung, Unternehmens-Compliance, Java/.NET-Migration",
          tip: "Kostenlos in der AWS-Konsole aktivieren; Der CLI-Befehl q startet Agentenaufgaben im Terminal."
        },
        {
          category: "Produktivität im Büro",
          desc: "StackBlitz AI Full-Stack-Tool – Beschreiben Sie eine Web-App in natürlicher Sprache (React, Vue, Node usw.) und erhalten Sie eine ausführbare App mit Vorschau und Bereitstellung im Browser.",
          tags: [
            "Full-Stack",
            "OpenClaw ermöglicht es Agenten, geplante Aufgaben auszuführen und an Telegram/Slack/Feishu und mehr zu pushen.",
            "Keine Konfiguration"
          ],
          features: [
            "Generierung einer Ein-Satz-App",
            "In-Browser-IDE",
            "Live-Vorschau",
            "Bereitstellung mit einem Klick"
          ],
          bestFor: "Schnelle Prototypen, Nicht-Programmierer-Sites, MVP-Validierung",
          tip: "Nicht-Programmierer können eine lauffähige Web-App in 10 Minuten bereitstellen – ideal für die Validierung von Ideen."
        },
        {
          category: "Bilderstellung",
          desc: "Erstklassiges KI-Kunsttool über Discord oder Web. Branchenführender künstlerischer Stil und Bildqualität mit einer aktiven, vielfältigen Community.",
          tags: [
            "Zwietracht",
            "Kunst",
            "Hohe Qualität"
          ],
          features: [
            "Erstklassige Qualität",
            "Verschiedene Stile",
            "Community-Inspiration",
            "HD-Upscale"
          ],
          bestFor: "Kunstschaffen, Konzeptdesign, visuelle Erkundung",
          tip: "Am besten für die visuelle Wirkung; Schnelles Basteln lernen – ab 10 $/Monat."
        },
        {
          category: "Bilderstellung",
          desc: "In ChatGPT integriertes OpenAI-Bildmodell. Hervorragend geeignet für präzise komplexe Textaufforderungen mit überzeugender Textwiedergabe.",
          tags: [
            "ChatGPT",
            "Präzise",
            "Einfach"
          ],
          features: [
            "Präzises Textverständnis",
            "ChatGPT-Integration",
            "Textwiedergabe",
            "Null Barriere"
          ],
          bestFor: "Schnelle Bilder für ChatGPT-Benutzer",
          tip: "Keine zusätzliche Einrichtung, wenn Sie ChatGPT bereits verwenden."
        },
        {
          category: "Bilderstellung",
          desc: "Open-Source-Image-Modell mit lokaler Bereitstellung und einem riesigen Community-Ökosystem. LoRA-Feinabstimmung, ControlNet-Präzision, volle Kontrolle über die Erzeugung.",
          tags: [
            "Open Source",
            "Lokal",
            "Anpassbar"
          ],
          features: [
            "Lokale Bereitstellung",
            "ControlNet",
            "ControlNet",
            "Massive Community-Modelle"
          ],
          bestFor: "Entwickler mit GPU, die die volle Kontrolle wünschen",
          tip: "Kuaishous KI-Videotool mit Text-zu-Video und Bild-zu-Video. Natürliche Physik und Bewegung; führende inländische Videogeneration."
        },
        {
          category: "Video und Audio",
          desc: "Kuaishous KI-Videotool mit Text-zu-Video und Bild-zu-Video. Natürliche Physik und Bewegung; führende inländische Videogeneration.",
          tags: [
            "Video",
            "Inländisch",
            "Einfach"
          ],
          features: [
            "Text-zu-Video",
            "Bild-zu-Video",
            "Natürliche Bewegung",
            "Tägliches kostenloses Kontingent"
          ],
          bestFor: "Inländische Videoerstellung und Kurzinhalte",
          tip: "Beste inländische Videoauswahl mit täglichem Gratiskontingent."
        },
        {
          category: "Video und Audio",
          desc: "Professionelle KI-Videoplattform. Gen-3 Alpha ist qualitativ führend. Bietet außerdem Bearbeitung, Hintergrundentfernung, Bewegungsverfolgung und Profi-Tools.",
          tags: [
            "Professional",
            "Bearbeitung",
            "Gen-3"
          ],
          features: [
            "Gen-3-Videogeneration",
            "Videobearbeitungssuite",
            "Bewegungsverfolgung",
            "Greenscreen-Entfernung"
          ],
          bestFor: "Professionelle Videokünstler und Film-/TV-Profis",
          tip: "Ideal für Content-Ersteller und Filmprofis."
        },
        {
          category: "Video und Audio",
          desc: "KI-Musiktool – beschreiben Sie einen Stil und erhalten Sie einen vollständigen Song mit Gesang und Begleitung in mehreren Stilen und Sprachen.",
          tags: [
            "Musik",
            "Gesang",
            "Schaffung"
          ],
          features: [
            "Vollständige Songgenerierung",
            "Mehrere Stile",
            "Gesangsdarbietung",
            "Verlängern/fortfahren"
          ],
          bestFor: "Schnelle Demo-Tracks und Hintergrundmusik",
          tip: "Versuchen Sie: „Ein fröhlicher Popsong über den Sommer“ und generieren Sie."
        },
        {
          category: "Produktivität im Büro",
          desc: "In Notion integrierter KI-Assistent zum Schreiben, Zusammenfassen, Übersetzen und Brainstorming – nahtlos verknüpft mit Notizen und Datenbanken.",
          tags: [
            "Notizen",
            "Zusammenarbeit",
            "Integriert"
          ],
          features: [
            "Schreiben von Dokumenten",
            "Zusammenfassung",
            "Übersetzung",
            "Datenbank-KI"
          ],
          bestFor: "Ein Muss für Notion-Benutzer – 10 $/Monat pro Mitglied.",
          tip: "Ein Muss für Notion-Benutzer – 10 $/Monat pro Mitglied."
        },
        {
          category: "Produktivität im Büro",
          desc: "KI-gesteuerter Präsentations- und Dokumentengenerator. Geben Sie eine Gliederung oder ein Thema ein, um ausgefeilte Folien mit Themen und Layouts zu erhalten.",
          tags: [
            "Folien",
            "Design",
            "Schnell"
          ],
          features: [
            "KI-Foliengenerierung",
            "Mehrere Themen",
            "Online-Sharing",
            "Eingebettete Medien"
          ],
          bestFor: "Schnelle Berichte, Vorschläge und Kursunterlagen",
          tip: "Geben Sie ein Thema ein – komplettes Deck in 30 Sekunden. Lebensretter vor Fristen."
        },
        {
          category: "Suchen und recherchieren",
          desc: "KI-Suchmaschine mit direkt zitierten Antworten statt Linklisten. Pro Search für tiefgreifende Recherche – ideal für akademische Arbeiten.",
          tags: [
            "Suchen",
            "Zitate",
            "Forschung"
          ],
          features: [
            "Zitierte Antworten",
            "Professionelle Tiefensuche",
            "Auswahl mehrerer Modelle",
            "Echtzeitinformationen"
          ],
          bestFor: "Schnelle Recherche, akademisches Studium, Faktenprüfung",
          tip: "Verwenden Sie für die Recherche anstelle von Google – überprüfen Sie jedoch immer die Zitate."
        },
        {
          category: "Suchen und recherchieren",
          desc: "Das KI-Notizbuch von Google – laden Sie PDFs/Dokumente hoch, chatten Sie mit Materialien, erstellen Sie Zusammenfassungen und verwandeln Sie Inhalte in KI-Podcasts (Audioübersicht).",
          tags: [
            "Unterlagen",
            "Zusammenfassung",
            "Podcast"
          ],
          features: [
            "Dokumenten-Chat",
            "Automatische Zusammenfassung",
            "KI-Podcast-Generierung",
            "Analyse mehrerer Dokumente"
          ],
          bestFor: "Aufsätze lesen, Literatur rezensieren, neues Material lernen",
          tip: "Laden Sie einen Aufsatz hoch und stellen Sie Fragen – die Podcast-Funktion ist kreativ und nützlich."
        },
        {
          category: "Video und Audio",
          desc: "TTS",
          tags: [
            "TTS",
            "TTS",
            "Synchronisation"
          ],
          features: [
            "1-Minuten-Probenklon",
            "Mehrsprachiges Vorlesen",
            "Emotionale Tonkontrolle",
            "API-Integration"
          ],
          bestFor: "Klonen Ihrer Stimme, Videosynchronisation, Audioinhalte",
          tip: "Nehmen Sie in einem ruhigen Raum auf; 1–3 Minuten trockene Stimme reichen zum Klonen aus."
        },
        {
          category: "Video und Audio",
          desc: "Inländische KI-Sprachsynthese und Klonen mit natürlicher chinesischer Aussprache. Zero-/Few-Shot-Klonen für inländische Urheber.",
          tags: [
            "TTS",
            "chinesisch",
            "Inländisch"
          ],
          features: [
            "Chinesische Optimierung",
            "Klonen von Stimmen",
            "Emotionale Synthese",
            "Kostenloses Kontingent"
          ],
          bestFor: "Chinesische Synchronisation, Kurzvideo-Voiceover, inländische Nutzer",
          tip: "Versuchen Sie es zunächst mit chinesischen Szenarien – kein VPN erforderlich."
        },
        {
          category: "Agentenautomatisierung",
          desc: "Open-Source-KI-Agent-Gateway mit Cron-Planung, Webhook-Triggern und Mehrkanalbereitstellung (Telegram/Slack/Discord/Feishu) für autonome Recherche, Überwachung und Berichterstattung.",
          tags: [
            "Open Source",
            "Geplant",
            "Mehrkanalig"
          ],
          features: [
            "Cron-Planung",
            "Isolierte Agentenaufgaben",
            "Webhook-Integration",
            "Mehrkanal-Push"
          ],
          bestFor: "Geplante Briefings, automatische Recherche, Agenten-Orchestrierung im Hintergrund",
          tip: "Führen Sie zuerst openclaw doctor und dann cron create für geplante Aufgaben aus."
        },
        {
          category: "Agentenautomatisierung",
          desc: "Open-Source-LLM-App und Agentenplattform mit visuellen Workflows, RAG-Wissensdatenbanken, Tool-Aufruf und API-Veröffentlichung. Selbsthostbar; Über 60.000 GitHub-Stars.",
          tags: [
            "Open Source",
            "Arbeitsablauf",
            "RAG"
          ],
          features: [
            "Visual Agent-Orchestrierung",
            "Wissensbasis RAG",
            "Tool-/API-Integration",
            "Selbstveranstaltbar"
          ],
          bestFor: "Wissensdatenbank-Agenten für Unternehmen und benutzerdefinierte KI-Apps",
          tip: "Testen Sie cloud.dify.ai kostenlos; Docker-Selbsthost für vollständige Datenkontrolle."
        },
        {
          category: "Agentenautomatisierung",
          desc: "Null-Code-KI-Agent-Plattform von ByteDance – ziehen Sie, um Bots zu erstellen und auf Feishu, WeChat, Discord, Telegram zu veröffentlichen. Umfangreicher Plugin-Markt; schnellstes Onboarding in China.",
          tags: [
            "Kein Code",
            "Inländisch",
            "Mehrkanalig"
          ],
          features: [
            "Visueller Bot-Builder",
            "Plugins und Workflows",
            "Feishu/WeChat veröffentlichen",
            "Großzügiges kostenloses Kontingent"
          ],
          bestFor: "Schneller Kundenservice/Assistent-Bots, Zusammenarbeit im Inlandteam",
          tip: "coze.cn benötigt kein VPN; Beginnen Sie mit einer Personal-Assistant-Vorlage und fügen Sie dann Plugins hinzu."
        },
        {
          category: "Agentenautomatisierung",
          desc: "Offene Workflow-Automatisierung mit tiefen AI Agent-Knoten. Verbinden Sie über 400 Dienste; Selbsthostbar – betten Sie LLMs in E-Mails, Tabellenkalkulationen, CRM und Geschäftspipelines ein.",
          tags: [
            "Open Source",
            "Arbeitsablauf",
            "Selbstveranstaltbar"
          ],
          features: [
            "AI Agent-Knoten",
            "AI Agent-Knoten",
            "Visueller Flusseditor",
            "Selbstveranstaltbar"
          ],
          bestFor: "Geschäftsautomatisierung, systemübergreifende Orchestrierung, technische Teams",
          tip: "Kostenlose Cloud bei n8n.io; Selbsthostender Docker für sensible Daten; Beginnen Sie mit KI-Vorlagen."
        },
        {
          category: "Agentenautomatisierung",
          desc: "Allgemeiner KI-Agent, der mehrstufige Aufgaben autonom plant und ausführt – im Internet surfen, Dokumente schreiben, Code ausführen, Berichte erstellen. End-to-End: „Geben Sie ihm ein Ziel, erzielen Sie ein Ergebnis.“",
          tags: [
            "Generalvertreter",
            "Autonom",
            "Mehrstufig"
          ],
          features: [
            "Autonome Aufgabenplanung",
            "Durchsuchen und Bedienen im Internet",
            "Code-/Dokumentausgabe",
            "Asynchrone lange Aufgaben"
          ],
          bestFor: "Komplexe Recherche, Verfassen von Berichten, umfassende Aufgabendelegierung",
          tip: "Beschreiben Sie das Ziel, nicht die Schritte, z. B. „Die KI-Neuigkeiten der letzten Woche als Markdown zusammenfassen“; Überprüfen Sie immer die Ergebnisse."
        },
        {
          category: "Chat-Assistenten",
          desc: "ByteDance KI-Assistent nach Doubao-Modell mit natürlichem chinesischen Dialog. Tiefe Douyin- und Feishu-Integration; multimodales Verstehen und Schaffen; große inländische Nutzerbasis.",
          tags: [
            "chinesisch",
            "Inländisch",
            "Multimodal"
          ],
          features: [
            "Chinesischer Dialog",
            "Bild-/Videoverständnis",
            "Feishu-Integration",
            "Großzügiges kostenloses Kontingent"
          ],
          bestFor: "Täglicher Chat, Content-Erstellung, Bürozusammenarbeit in China",
          tip: "Douyin/Feishu-Benutzer erhalten nahtlosen Zugriff; Web und App sind kostenlos."
        },
        {
          category: "Chat-Assistenten",
          desc: "xAI-Assistent integriert in X (Twitter). Bekannt für Echtzeitinformationen und Humor; Grok 3 stark in Mathematik und Argumentation mit DeepSearch-Modus.",
          tags: [
            "Echtzeit",
            "X-Integration",
            "Argumentation"
          ],
          features: [
            "X Echtzeit-Feed",
            "DeepSearch-Modus",
            "Multimodales Verständnis",
            "Code und Mathematik"
          ],
          bestFor: "Verfolgung von Trends, Social-Media-Analyse, Live-Nachrichten",
          tip: "Erfordert X Premium+; Ideal für Echtzeitnachrichten und soziale Dynamik."
        },
        {
          category: "Bilderstellung",
          desc: "Offenes Bildmodell der Black Forest Labs. Flux.1 zeichnet sich durch Qualität, Textwiedergabe und menschliche Struktur aus. lokale Bereitstellung und API verfügbar.",
          tags: [
            "Open Source",
            "Hohe Qualität",
            "Textwiedergabe"
          ],
          features: [
            "Erstklassige Qualität",
            "Präzise Textwiedergabe",
            "Offen und einsetzbar",
            "LoRA-Ökosystem"
          ],
          bestFor: "Hochwertige Illustration, kommerzielles Design, lokale Erzeugung",
          tip: "API über Replicate, fal.ai usw. oder lokal in ComfyUI ausführen."
        },
        {
          category: "Video und Audio",
          desc: "OpenAI-Videomodell mit Text-zu-Video und Bild-zu-Video. Branchenführende Kohärenz und physikalischer Realismus. Sora Turbo ist viel schneller.",
          tags: [
            "OpenAI",
            "Hohe Qualität",
            "Physischer Realismus"
          ],
          features: [
            "Text/Bild-zu-Video",
            "Bis zu 20 Sekunden",
            "Remix-Bearbeitung",
            "Storyboard-Aufnahmen"
          ],
          bestFor: "Hochwertige Kurzvideos, Anzeigenkonzepte, Konzeptvorschauen",
          tip: "Erfordert ChatGPT Plus/Pro; Beschreiben Sie Kamerabewegung und Beleuchtung, um bessere Ergebnisse zu erzielen."
        },
        {
          category: "Produktivität im Büro",
          desc: "Microsoft AI-Assistent integriert in Word, Excel, PowerPoint, Outlook, Teams. Basierend auf GPT-4o – Dokumente und Daten in Office generieren, bearbeiten und analysieren.",
          tags: [
            "Büro",
            "Microsoft",
            "Unternehmen"
          ],
          features: [
            "Word/Excel/PPT-KI",
            "Outlook-Mail-Assistent",
            "Zusammenfassung der Teambesprechung",
            "Unternehmensdatenintegration"
          ],
          bestFor: "Office 365-Benutzer und Unternehmensbüroautomatisierung",
          tip: "Microsoft 365-Abonnenten können Copilot in der Office-Seitenleiste aufrufen."
        },
        {
          category: "Suchen und recherchieren",
          desc: "Inländische KI-Suchmaschine – werbefrei, zitierte Antworten, Modi für Web, Wissenschaft, Podcast und mehr. Ausgezeichnete chinesische Forschungserfahrung.",
          tags: [
            "Suchen",
            "Inländisch",
            "Werbefrei"
          ],
          features: [
            "Zitierte Antworten",
            "Akademische/Podcast-Modi",
            "Mindmap-Erstellung",
            "Chinesische Forschung, akademisches Studium, werbefreies Abrufen"
          ],
          bestFor: "Chinesische Forschung, akademisches Studium, werbefreies Abrufen",
          tip: "In China zugänglich; Überprüfen Sie akademische Zitate."
        }
      ],
      handsOnCategories: {
        "全部": "Alle",
        "编程开发": "Produktivität im Büro",
        "图像设计": "Bildgestaltung",
        "视频音频": "Video und Audio",
        "写作办公": "Erstellen Sie einen Webrechner mit Cursor Codex",
        "搜索研究": "Suchen und recherchieren",
        "Agent 自动化": "Agentenautomatisierung"
      },
      handsOnUi: {
        countShown: "{visible} / {total} angezeigt",
        emptyHint: "Keine Fälle in dieser Kategorie. Versuchen Sie es mit einem anderen Tag.",
        resultLabel: "Sie erhalten:",
        tipsLabel: "Tipps:",
        commandPrompt: "Befehl/Eingabeaufforderung",
        copyToSoftware: "Nach {software} kopieren",
        openWebsite: "Öffnen Sie die {software}-Website"
      },
      handsOnCases: [
        {
          title: "Erstellen Sie einen Webrechner mit Cursor Codex",
          difficulty: "Anfänger",
          duration: "~15 Min",
          desc: "Verwenden Sie von Grund auf den integrierten Codex-Agenten von Cursor, um einen ausführbaren HTML-Rechner zu generieren – erleben Sie die KI-Programmierung „Sagen Sie es einmal → erhalten Sie ausführbaren Code“.",
          steps: [
            "Installieren Sie Cursor, erstellen Sie den Ordner calc-demo und öffnen Sie ihn in Cursor",
            "Drücken Sie Cmd+I (Mac) / Strg+I (Win), um das Composer-/Agent-Bedienfeld zu öffnen",
            "Fügen Sie die Eingabeaufforderung unten ein und lassen Sie Codex eine einzelne index.html generieren",
            "Klicken Sie im Explorer mit der rechten Maustaste auf index.html → Im Finder anzeigen → Doppelklicken Sie, um es im Browser zu öffnen",
            "Testen Sie Addieren/Subtrahieren/Multiplizieren/Dividieren; Wenn Probleme auftreten, wählen Sie den Code aus und sagen Sie: „Klick auf die Schaltfläche bewirkt nichts – bitte beheben.“",
            "(Optional) Bitten Sie Codex, Tastatureingaben, Verlauf oder Umschalten zwischen dunklem und hellem Design hinzuzufügen"
          ],
          prompt: "Bitte erstellen Sie eine saubere, attraktive Rechner-Webseite mit HTML + CSS + JavaScript:\n\nEigenschaften:\n- Unterstützt Addieren, Subtrahieren, Multiplizieren, Dividieren und Löschen (C)\n- Das Display zeigt Eingaben und Ergebnisse in Echtzeit an\n- Verhindern Sie häufige Logikfehler wie Verkettungsoperatoren\n\nDesign:\n- Dunkles Design, abgerundete Tasten, dezentes Hover-Feedback\n- Funktioniert auf Mobilgeräten\n\nLieferbar:\n- Einzelne index.html-Datei, direkt im Browser öffenbar\n- Code mit englischen Kommentaren\n- Sagen Sie mir am Ende, wie ich es ausführen und testen soll",
          result: "Eine doppelklickbare Taschenrechner-Webseite, die grundlegende Arithmetik durchführt.",
          tips: "Erstellen Sie mit Midjourney ein Bild der Freiheitsstatue"
        },
        {
          title: "Erstellen Sie mit Midjourney ein Bild der Freiheitsstatue",
          difficulty: "Anfänger",
          duration: "~10 Min",
          desc: "Nutzen Sie in Midjourney die englischen Eingabeaufforderungen für eine filmische Aufnahme der Freiheitsstatue und lernen Sie die Grundlagen und Parameter von Text zu Bild kennen.",
          steps: [
            "Registrieren Sie Midjourney, öffnen Sie „Create“ auf midjourney.com (oder Discord #general)",
            "Klicken Sie auf Eingabe und geben Sie /imagine ein (Web kann die Eingabeaufforderung direkt einfügen).",
            "Fügen Sie unten die englische Eingabeaufforderung ein, senden Sie sie und warten Sie ca. 30–60 Sekunden auf 4 Kandidaten",
            "Klicken Sie auf U1–U4, um den Favoriten hochzuskalieren. 🔄 zur Regeneration bei Bedarf",
            "V1–V4 für Varianten oder optimieren Sie das --ar-Verhältnis und versuchen Sie es erneut",
            "Klicken Sie mit der rechten Maustaste, um das HD-Bild für Folien, Artikel oder Designreferenzen zu speichern"
          ],
          prompt: "Freiheitsstatue auf Liberty Island, New Yorker Hafen, Sonnenuntergang zur goldenen Stunde, filmische Weitwinkelaufnahme, dramatische Wolken, warmes Licht, das sich auf dem Wasser spiegelt, fotorealistisch, sehr detailliert, 8k –ar 16:9 –v 6",
          result: "Ein filmisches HD-Bild der Freiheitsstatue im 16:9-Format für Demos oder Design.",
          tips: "Midjourney funktioniert am besten auf Englisch. Reihenfolge: Betreff → Umgebung → Licht → Stil → Parameter (--ar, --v)."
        },
        {
          title: "Schnelles Bild mit ChatGPT + DALL·E 3 (kein Discord)",
          difficulty: "Anfänger",
          duration: "Überspringen Sie Discord – verwenden Sie natürliche Sprache in ChatGPT mit DALL·E 3 für die Freiheitsstatue. Schnellste Text-zu-Bild-Einführung.",
          desc: "Überspringen Sie Discord – verwenden Sie natürliche Sprache in ChatGPT mit DALL·E 3 für die Freiheitsstatue. Schnellste Text-zu-Bild-Einführung.",
          steps: [
            "Open ChatGPT (Plus/Team für DALL·E 3; kostenlose Stufe hat begrenztes Bildkontingent)",
            "Neuer Chat, Eingabeaufforderung unten einfügen und senden",
            "ChatGPT ruft DALL·E automatisch auf, ca. 10–20 Sekunden für das Ergebnis",
            "Wenn die Komposition deaktiviert ist, antworten Sie: „Vergrößern Sie das Gesicht der Statue, verwischen Sie den Hintergrund.“",
            "Klicken Sie auf das Bild, um PNG für Artikel, Folien oder soziale Netzwerke herunterzuladen"
          ],
          prompt: "Bitte verwenden Sie DALL·E, um ein Bild zu generieren:\n\nMotiv: Freiheitsstatue zur goldenen Stunde, filmische Weitwinkelaufnahme vom Hafen, dramatische Wolken, warme Wasserspiegelungen.\n\nStil: Fotorealistisch, detailreich, geeignet als Artikelcover.\n\nSeitenverhältnis: Querformat 16:9.",
          result: "Herunterladbares Bild der Freiheitsstatue in ChatGPT – keine zusätzlichen Tools.",
          tips: "ChatGPT versteht Ihre Sprache und übersetzt für DALL·E. Das Iterieren von „Was sollte man behalten/vermeiden“ ist besser als das Umschreiben der gesamten Eingabeaufforderung."
        },
        {
          title: "Klonen Sie Ihre Stimme mit ElevenLabs",
          difficulty: "Dazwischenliegend",
          duration: "~20 Min",
          desc: "Laden Sie eine trockene Sprachaufzeichnung hoch, erstellen Sie ein persönliches Sprachmodell und lesen Sie dann einen beliebigen Text vor – vollständiger Workflow zum Klonen von Stimmen.",
          steps: [
            "Registrieren Sie ElevenLabs → Voice Lab → Instant Voice Cloning",
            "Nehmen Sie 1–3 Minuten lang trockene Stimme auf dem Telefon auf. Sprachnotizen: ruhiger Raum, keine Musik, normales Tempo",
            "Hochladen, Stimme benennen (z. B. meine Stimme), Klonbedingungen akzeptieren, erstellen",
            "Text-to-Speech → Geklonte Stimme auswählen",
            "Testtext unten einfügen, generieren und anhören",
            "Laden Sie MP3 zum Überspielen von Videos oder Podcast-Intros herunter"
          ],
          prompt: "Hallo zusammen, ich bin [dein Spitzname]. Dies ist mein AI-geklonter Sprachtest.\n\nSchönes Wetter heute – ich lese eine kurze Einführung: Künstliche Intelligenz verändert die Art und Weise, wie wir lernen, arbeiten und kreieren. Ich hoffe, das klingt natürlich, klar und freundlich.\n\nDanke fürs Zuhören!",
          result: "Wiederverwendbares „Ihre Stimme“-Modell – geben Sie einen beliebigen Text ein, um den Ton zu synchronisieren.",
          tips: "Die Qualität hängt von der Aufnahme ab: leise, gleichmäßige Lautstärke, keine explosiven Knallgeräusche. Klonen Sie nur Stimmen, zu deren Verwendung Sie berechtigt sind."
        },
        {
          title: "Chinesische Stimme mit Fish Audio klonen (Inland)",
          difficulty: "Dazwischenliegend",
          duration: "~15 Min",
          desc: "Privatanwender können chinesische Stimmen auf natürliche Weise klonen – ideal für Kurzvideo-Voiceover und chinesische Synchronisation.",
          steps: [
            "Registrieren Sie sich bei fish.audio → Sprachklon / Stimme erstellen",
            "Laden Sie eine 30- bis 3-minütige chinesische trockene Stimme hoch (Nachrichten oder Artikel lesen)",
            "Benennen und erstellen Sie eine Stimme, warten Sie 1–5 Minuten auf das Training",
            "Anhören und herunterladen; Vergleichen Sie mit ElevenLabs für Ihren chinesischen Anwendungsfall",
            "Neue Stimme auswählen, Geschwindigkeit anpassen, generieren",
            "Anhören und herunterladen; Vergleichen Sie mit ElevenLabs für Ihren chinesischen Anwendungsfall"
          ],
          prompt: "Hallo zusammen, willkommen zu den heutigen KI-Lernnotizen.\n\nIn diesem Abschnitt geht es um praktische KI mit echter Software. Sie brauchen nicht zuerst die ganze Theorie – lernen Sie, indem Sie reale Aufgaben lösen.\n\nWenn hilfreich, liken und speichern.",
          result: "Testen Sie den Ton Ihrer Stimme auf Chinesisch zum Voice-Over-Vergleich.",
          tips: "Planen Sie die Sammlung von Börsennachrichten mit OpenClaw"
        },
        {
          title: "Planen Sie die Sammlung von Börsennachrichten mit OpenClaw",
          difficulty: "Fortschrittlich",
          duration: "~30 Min",
          desc: "Konfigurieren Sie OpenClaw Cron so, dass an jedem Handelsmorgen ein Agent ausgeführt wird, der Börsennachrichten sammelt und an Telegram oder Slack weiterleitet.",
          steps: [
            "Installieren Sie OpenClaw CLI und führen Sie openclaw doctor --fix aus, um Gateway zu initiieren",
            "Stellen Sie sicher, dass Gateway ausgeführt wird (Cron-Zeitpläne innerhalb von Gateway)",
            "Bearbeiten Sie Symbole, Zeitzone und Kanal-IDs im folgenden Befehl",
            "Führen Sie den Befehl „cron create“ im Terminal aus (werktags 8:30 Uhr Asien/Shanghai).",
            "Openclaw-Cron-Liste zur Bestätigung; openclaw cron führt --id <job-id> für den Verlauf aus",
            "Manueller Test: openclaw cron run <job-id>, prüfen, ob Push lesbar ist und Quellen enthält"
          ],
          prompt: "openclaw cron create „30 8 * * 1-5“ \\\n  --name „Täglicher Aktien-Newsbrief“ \\\n  --tz \"Asien/Shanghai\" \\\n  --session isoliert \\\n  --message „Sie sind ein professioneller Investment-Research-Assistent. Sammeln und fassen Sie die heutigen Marktnachrichten zusammen:\\n\\nBeobachtungsliste: CSI 300, CATL (300750), Apple (AAPL)\\n\\nAusgabe (Englisch, weniger als 400 Wörter):\\n1) Makro-Schlagzeilen (max. 3, mit Quellen)\\n2) Aktien-/Sektorbewegungen (jeweils max. 2)\\n3) Die heutige Beobachtungsliste (keine Anlageberatung, Informationen). nur)\\n\\nWenn keine verlässlichen Informationen vorhanden sind, schreiben Sie „Keine größeren Aktualisierungen“. Behalten Sie die Quellnamen bei, erfinden Sie keine Daten. \\\n  --announce \\\n  --channel-Telegramm \\\n  --to „YOUR_TELEGRAM_USER_OR_CHANNEL_ID“",
          result: "Vom Agenten zusammengestellter Aktienbrief an Wochentagen (nachdem Sie den Push-Kanal konfiguriert haben).",
          tips: "Die Ausgabe dient nur als Referenz, nicht als Anlageberatung. Testen Sie den Nachrichtenkanal, bevor Sie ihn live schalten."
        },
        {
          title: "Generieren Sie Funktionen und Unit-Tests mit GitHub Copilot",
          difficulty: "Anfänger",
          duration: "~12 Min",
          desc: "In VS Code führt Copilot eine Geschäftsfunktion und Jest-Tests durch – die tägliche Codierungsproduktivität.",
          steps: [
            "Installieren Sie VS Code + GitHub Copilot und melden Sie sich an",
            "Erstellen Sie utils/discount.js mit einem Kommentar, der die Rabattregeln beschreibt",
            "Erstellen Sie „utils/discount.test.js“ und geben Sie „beschreiben“ ein, um den Abschluss des Tests auszulösen",
            "Erstellen Sie „utils/discount.test.js“ und geben Sie „beschreiben“ ein, um den Abschluss des Tests auszulösen",
            "Führen Sie den NPM-Test (oder einen Scherz) aus. Fügen Sie Fehler in den Chat ein, um sie zu beheben",
            "Ändern Sie die Regeln in Kommentaren (z. B. 200 ausgeben, 30 sparen) und beobachten Sie, wie sich die Fertigstellung anpasst"
          ],
          prompt: "// Bestellrabatt berechnen: 100 ausgeben, 10 sparen, 200 ausgeben, 30 sparen, keine negativen Beträge\n// {original, discount, final} Objekt zurückgeben\nFunktion calcDiscount(amount) {\n  // Copilot wird von hier aus abgeschlossen\n}",
          result: "Ausführbare Rabattfunktion + grundlegende Unit-Tests; Lernen Sie die kommentargesteuerte Vervollständigung.",
          tips: "Copilot reagiert am besten auf klare Funktionskommentare und -typen. Halten Sie Tests neben der Implementierung."
        },
        {
          title: "Fügen Sie mit Windsurf den Dunkelmodus auf der gesamten Website hinzu",
          difficulty: "Dazwischenliegend",
          duration: "~25 Min",
          desc: "Verwenden Sie den Windsurf Cascade Agent, um ein kleines Frontend-Projekt zu verstehen und CSS-Variablen sowie dateiübergreifende Theme-Umschaltung hinzuzufügen.",
          steps: [
            "Öffnen Sie Windsurf in einem kleinen Übungsprojekt mit index.html + style.css",
            "Öffnen Sie Cascade und fügen Sie die Aufgabenbeschreibung unten ein",
            "Vorschau im Browser, Design wechseln, um die Farben zu überprüfen",
            "Vorschau im Browser, Design wechseln, um die Farben zu überprüfen",
            "Wenn Selektoren fehlen: „Kopfzeilenkontrast im Dunkelmodus zu niedrig“",
            "Bitten Sie den Agenten vor dem Festschreiben um ein kurzes Änderungsprotokoll"
          ],
          prompt: "Fügen Sie diesem Projekt den Umschalter zwischen dunklem und hellem Design hinzu:\n1) CSS-Variablen für das Farbsystem\n2) Schaltfläche zum Umschalten der Kopfzeile, Einstellung in localStorage\n3) Brechen Sie das Layout nicht. mobilfreundlich\n4) Listen Sie nach den Änderungen die geänderten Dateien und die Vorgehensweise zum Testen auf",
          result: "Ein-Klick-Dunkel-/Hell-Theme; Erleben Sie die Zusammenarbeit mehrerer Dateien mit Agenten.",
          tips: "Überprüfen Sie mit Claude den Vertrag und weisen Sie auf Risiken hin"
        },
        {
          title: "Überprüfen Sie mit Claude den Vertrag und weisen Sie auf Risiken hin",
          difficulty: "Dazwischenliegend",
          duration: "~20 Min",
          desc: "PDF-Vertrag hochladen; Claude weist auf risikoreiche Klauseln aus der Sicht der Gegenpartei hin – Einführung in die Rechts-/Vergabepraxis.",
          steps: [
            "Registrieren Sie Claude, neuen Chat (Pro für längere PDFs)",
            "Laden Sie das Vertrags-PDF hoch oder fügen Sie wichtige Abschnitte ein",
            "Fügen Sie die Eingabeaufforderung unten ein und geben Sie an, dass Sie „Partei B“ sind.",
            "Risikotabelle lesen; Überprüfen Sie Seiten-/Abschnittsverweise",
            "Follow-up: „Hochrisikoklauseln als ausgewogenere Alternativen umschreiben“",
            "Export zur Überprüfung durch einen juristischen Kollegen – KI-Überprüfung ist kein Anwalt"
          ],
          prompt: "Sie sind ein sorgfältiger Assistent bei der Vertragsprüfung. Wir sind Partei B.\n\nÜberprüfen Sie den hochgeladenen Vertrag und die Ausgabe:\n1) Top 5 Hochrisikoklauseln (Zitat + Begründung)\n2) 3 Klauseln mit mittlerem Risiko\n3) Verhandelbare Revision für jeden\n4) Übersichtstabelle: Standort | Risikostufe | Vorschlag\n\nMarkieren Sie unsichere Elemente als „Benötigt menschliche Überprüfung“; Erfinde keine Gesetze.",
          result: "Strukturierte Vertragsrisikoliste und Verhandlungsentwurf.",
          tips: "Claude kommt gut mit langen Dokumenten zurecht; Volltext hochladen und gegenprüfen; Vermeiden Sie öffentliche Konten für sensible Verträge."
        },
        {
          title: "Schreiben Sie Branchenbriefe mit Echtzeitsuche in Gemini",
          difficulty: "Anfänger",
          duration: "~10 Min",
          desc: "Verwenden Sie Gemini + Google Search, um ein wöchentliches Branchenbriefing mit anklickbaren Quellen zu erstellen.",
          steps: [
            "Öffnen Sie gemini.google.com und melden Sie sich an",
            "Aktivieren Sie „Google-Suche verwenden“ oder ähnliches, falls verfügbar",
            "Überprüfen Sie, ob die Quelllinks geöffnet sind. Entfernen Sie veraltete Einträge",
            "Überprüfen Sie, ob die Quelllinks geöffnet sind. Entfernen Sie veraltete Einträge",
            "Fragen Sie nach „3 Schlussfolgerungen der Geschäftsleitung + 3 Aktionspunkten“",
            "Für die wöchentliche Teambesprechung in Google Docs kopieren"
          ],
          prompt: "Informieren Sie sich über wichtige Entwicklungen im „grenzüberschreitenden E-Commerce in China im Jahr 2026“ in den letzten 7 Tagen. Geben Sie ein 400 Wörter umfassendes englisches Briefing aus:\n\n- 3 Schlagzeilen diese Woche (je ein Satz + Quelle)\n- Auswirkungen auf Kleinverkäufer\n- 2 Variablen, die Sie nächste Woche im Auge behalten sollten\n\nZitieren Sie überprüfbare Quellen; Wenn keine, schreiben Sie „Keine“.",
          result: "Branchenbriefing, bereit für Standup- oder interne Newsletter.",
          tips: "Die Stärke von Gemini liegt in der Suchintegration – klicken Sie dennoch auf jede Quelle, um sie zu überprüfen."
        },
        {
          title: "Schreiben Sie mit Qwen einen Beitrag im Xiaohongshu-Stil",
          difficulty: "Anfänger",
          duration: "~8 Min",
          desc: "Verwenden Sie Qwen für Texte im Xiaohongshu-Stil mit Titel, Text, Tags und Cover-Vorschlägen.",
          steps: [
            "Öffne Qwen, neuer Chat",
            "Geben Sie zeitnah echte Verkaufsargumente für Produkte an (keine übertriebenen Behauptungen)",
            "Fragen Sie nach einer „kürzeren, gesprächigeren A/B-Version“",
            "Fragen Sie nach 3 Ideen für Titelfotos/Generationen",
            "Kopieren Sie 5 Themen-Tags. Überprüfen Sie die Plattformregeln",
            "Menschliche Überprüfung auf werberechtlich sensible Wörter vor der Veröffentlichung"
          ],
          prompt: "Produkt: „Tragbare Kaltbrühkaffeetasse“. Verkaufsargumente: 5-Minuten-Brühzeit, doppelwandiger Hitzeschutz, minimalistischer Look.\n\nSchreiben Sie einen Beitrag im Xiaohongshu-Stil:\n1) 3 klickwürdige Titel\n2) Textkörper mit ca. 250 Wörtern, erste Person, Konversation, leichtes Emoji\n3) 5 Hashtags\n4) Ein Kommentar-CTA\n\nCompliance: Keine Superlative wie „Beste“ oder „#1“.",
          result: "Entwurf eines Xiaohongshu-Beitrags und Tags, bereit zur Bearbeitung und Veröffentlichung.",
          tips: "Qwen hat einen guten chinesischen Ton; Fügen Sie echte Erlebnisdetails hinzu, sonst fühlt es sich allgemein an."
        },
        {
          title: "Gründlich gelesener 100-seitiger Geschäftsbericht mit Kimi",
          difficulty: "Dazwischenliegend",
          duration: "~25 Min",
          desc: "Laden Sie den Jahresbericht des börsennotierten Unternehmens im PDF-Format hoch; Kimi extrahiert finanzielle Highlights, Risiken und Managementerzählungen – für Forschungs-/Geschäftsstudien.",
          steps: [
            "Kimi öffnen, Jahresbericht im PDF-Format anhängen (öffentliches Beispiel OK)",
            "Warten Sie auf die Analyse und fügen Sie das Analyse-Framework unten ein",
            "Überprüfen Sie die Zahlen anhand des PDF-Originaltexts",
            "Follow-up: „Warum Unterschied zwischen Cashflow und Nettogewinn?“",
            "Exportieren Sie Markdown-Notizen und markieren Sie die Felder als „zu überprüfen“.",
            "Laden Sie niemals nicht öffentliche Insidermaterialien auf eine Cloud-KI hoch"
          ],
          prompt: "Basierend auf dem hochgeladenen Geschäftsbericht, Ausgabe in Englisch:\n1) Kerngeschäft in einem Satz\n2) Umsatz-/Nettogewinntrend über drei Jahre (Liste)\n3) 3 Highlights + 3 Risiken in diesem Zeitraum (Kapitel/Seite zitieren)\n4) 3 zukunftsgerichtete Aussagen des Managements\n5) 3 Folgefragen für Anleger\n\nZahlen müssen aus dem Dokument stammen; Wenn es fehlt, schreiben Sie „Nicht bekannt gegeben“.",
          result: "Strukturierte Notizen zum Jahresbericht mit Seitenreferenzen und Fragenliste.",
          tips: "Kimi kommt gut mit langen PDFs zurecht – überprüfen Sie immer die Finanzzahlen; Die KI kann Einheiten falsch interpretieren (10.000 vs. 100 Mio.)."
        },
        {
          title: "Debuggen Sie Python-Fehler mit DeepSeek",
          difficulty: "Anfänger",
          duration: "~12 Min",
          desc: "Geben Sie DeepSeek-Traceback + Code-Snippet; Lokalisieren Sie die Grundursache des IndexError, beheben Sie ihn und schützen Sie ihn vor Grenzfällen.",
          steps: [
            "Öffnen Sie DeepSeek, neuer Chat",
            "Fügen Sie unten fehlerhaften Code + vollständiges Traceback ein",
            "Lesen Sie die Abschnitte „Ursache“ und „Fester Code“.",
            "Lokal ersetzen und erneut ausführen",
            "Follow-up: „Eingabevalidierung für leere Liste hinzufügen“",
            "Vorher/Nachher vergleichen; Beachten Sie das Fehlermuster"
          ],
          prompt: "Diese Python-Codefehler – auf Englisch erklären und beheben:\n\n„Python\ndef avg_positive(nums):\n    pos = [n für n in Zahlen, wenn n > 0]\n    Rückgabesumme(pos) / len(pos)\n\nprint(avg_positive([]))\n„\n\nTraceback: ZeroDivisionError: Division durch Null\n\nBitte: 1) Erklären Sie 2) Festcode 3) Kantenbehandlung 4) 2 Testfälle",
          result: "Feste Funktion verarbeitet leere Listen; den Schutz durch Division durch Null verstehen.",
          tips: "DeepSeek ist für Code kostengünstig; Fügen Sie den vollständigen Traceback ein, nicht nur die letzte Zeile."
        },
        {
          title: "E-Commerce-Produktbild mit weißem Hintergrund und stabiler Verbreitung",
          difficulty: "Dazwischenliegend",
          duration: "~20 Min",
          desc: "Erstellen Sie über Stability online oder die lokale WebUI ein minimalistisches Produktfoto. Lernen Sie Aufforderungen + negative Aufforderungen.",
          steps: [
            "Öffnen Sie Stability online oder lokal A1111 / ComfyUI",
            "Fügen Sie englische positive und negative Eingabeaufforderungen ein",
            "Stellen Sie 1:1 oder 4:5 ein, Schritte 25–30, CFG ~7",
            "Generieren Sie 4, wählen Sie das sauberste und hochwertigste aus",
            "Fügen Sie einen markenfarbenen Hintergrund für die zweite Szenenaufnahme hinzu",
            "Bestätigen Sie vor der kommerziellen Nutzung die Plattformlizenz und die Produktrechte"
          ],
          prompt: "Positiv: minimalistisches Produktfoto von kabellosen Ohrhörern, reinweißer Hintergrund, Studiobeleuchtung, weicher Schatten, zentrierte Komposition, ultrascharf, kommerzielle Fotografie, 4k\n\nNegativ: Text, Wasserzeichen, Logo, verschwommen, deformiert, zusätzliche Objekte, unübersichtlicher Hintergrund",
          result: "Minimalistisches Produktbild für E-Commerce-Detailseite.",
          tips: "15-sekündiges Produktvideo mit Kling AI"
        },
        {
          title: "15-sekündiges Produktvideo mit Kling AI",
          difficulty: "Anfänger",
          duration: "~15 Min",
          desc: "Chinesische Aufforderung für eine vertikale Produktpräsentation – gut für den Douyin/Xiaohongshu-Handel.",
          steps: [
            "Registrieren Sie Kling AI → Videogenerierung",
            "Text-zu-Video, Seitenverhältnis 9:16",
            "Eingabeaufforderung zum Einfügen, 5–10-sekündiger Clip generieren",
            "Laden Sie MP4 herunter und importieren Sie es in den Editor für Untertitel und CTA",
            "Laden Sie MP4 herunter und importieren Sie es in den Editor für Untertitel und CTA",
            "Kennzeichnen Sie KI-generierte Inhalte gemäß den Plattformregeln"
          ],
          prompt: "Vertikal 9:16, minimalistischer weißer Schreibtisch mit intelligentem Thermosbecher, Dampf steigt langsam auf, Kamera umkreist das Produkt, weiches natürliches Licht, erstklassige kommerzielle Werbeatmosphäre, sauberer Hintergrund, kein Text oder Wasserzeichen, realistische Physik",
          result: "Videoclip zur vertikalen Produktpräsentation.",
          tips: "Kling reagiert gut auf „Zeitlupe“ und „Werbeanzeigenqualität“; Teilen Sie komplexe Geschichten in Segmente auf."
        },
        {
          title: "~18 Min",
          difficulty: "Dazwischenliegend",
          duration: "~18 Min",
          desc: "Statisches Produktfoto hochladen; Bild-zu-Video vom Laufsteg für 4s Dynamic Hero – für Ad Opener oder Website Hero.",
          steps: [
            "Registrieren Sie Runway → Bild-zu-Video der 3. Generation",
            "Laden Sie ein klares Produkt im JPG/PNG-Format hoch (weißer Hintergrund am besten)",
            "Fügen Sie die Bewegungsaufforderung unten ein",
            "Erzeuge 4 Sekunden und prüfe, ob die Bewegung natürlich ist",
            "Exportieren, wiederholen oder fügen Sie Musik im Editor hinzu",
            "Achten Sie auf Produktkanten – wenn sie verzogen sind, verwenden Sie einfachere Bewegungswörter"
          ],
          prompt: "Langsames filmisches Einschieben, subtile Parallaxe, Produkt bleibt scharf, weiches Studiolicht, sanfte Schattenbewegung, kein Morphing, kommerzielle Werbequalität",
          result: "4s-Produkt-Motion-Clip für Hero oder Landingpage.",
          tips: "Bild-zu-Video: kleine Bewegung (langsames Drücken / leichte Drehung); Große Bewegungen verziehen sich leicht."
        },
        {
          title: "Suno v4 generiert kurze Werbemusik aus dem Markenton – Instrumental + Rhythmus für Video-Hintergrundmusik oder Event-Aufwärmphase.",
          difficulty: "Anfänger",
          duration: "~10 Min",
          desc: "Suno v4 generiert kurze Werbemusik aus dem Markenton – Instrumental + Rhythmus für Video-Hintergrundmusik oder Event-Aufwärmphase.",
          steps: [
            "Registrieren Sie Suno → Erstellen",
            "Benutzerdefinierter Modus, Stilbeschreibung einfügen",
            "Bei Bedarf auf 30–45 Sekunden verlängern",
            "Bei Bedarf auf 30–45 Sekunden verlängern",
            "MP3 herunterladen, geringere Lautstärke als Video-Hintergrundmusik",
            "Überprüfen Sie die Suno-Lizenz vor der kommerziellen Nutzung"
          ],
          prompt: "Suno: „Instrumental + Stimmung + BPM + Szene“ ist stabil; Geben Sie für den Liedtext Sprache und Thema an.",
          result: "Instrumentale Marken-Promo-Hintergrundmusik.",
          tips: "Suno: „Instrumental + Stimmung + BPM + Szene“ ist stabil; Geben Sie für den Liedtext Sprache und Thema an."
        },
        {
          title: "Organisieren Sie Besprechungsnotizen und Aufgaben mit Notion AI",
          difficulty: "Anfänger",
          duration: "~12 Min",
          desc: "Fügen Sie grobe Besprechungsnotizen in Notion ein. KI erstellt strukturierte Protokolle, Entscheidungen und überprüfbare Aufgaben.",
          steps: [
            "Neue Begriffsseite „Wöchentliches Treffen 25.06.2026“",
            "Fügen Sie Rohnotizen oder Transkripte ein",
            "Eingabeaufforderung: „Aufgaben nach Besitzer gruppieren“",
            "Eingabeaufforderung: „Aufgaben nach Besitzer gruppieren“",
            "Konvertieren Sie Aufgaben in Notion-Aufgabenblöcke und @Teamkollegen",
            "Teilen Sie den Seitenlink zur Bestätigung durch die Teilnehmer"
          ],
          prompt: "Aus diesem Seiteninhalt wird Folgendes ausgegeben:\n1) Besprechungszusammenfassung (≤5 Punkte)\n2) Wichtige Entscheidungen\n3) Todo-Liste: Besitzer | Aufgabe | Fälligkeitsdatum\n4) Offene Fragen\n\nEnglisch; Erfinden Sie keine unbesprochenen Gegenstände.",
          result: "Kollaborative Besprechungsseite mit gruppierten Aufgaben.",
          tips: "Notion AI eignet sich am besten für den „zweiten Durchgang“ vorhandener Notizen; Erfassen Sie Schlüsselwörter live für Genauigkeit."
        },
        {
          title: "10-minütiges Pitchdeck mit Gamma",
          difficulty: "Anfänger",
          duration: "~10 Min",
          desc: "Geben Sie die Gliederung für ein 10-Folien-Pitch-Deck an Gamma weiter – teilen Sie es online oder exportieren Sie es als PDF.",
          steps: [
            "Anmelden Gamma → Erstellen → Präsentation",
            "Fügen Sie unten die Pitch-Übersicht ein und wählen Sie ein minimalistisches Tech-Thema",
            "Überprüfen Sie jede Folie auf Daten und Wortlaut",
            "Fügen Sie Produkt-Screenshots oder Diagramme auf wichtigen Folien ein",
            "Schreiben Sie lange Absätze mithilfe der KI in Aufzählungspunkte um",
            "PDF exportieren oder Link zur Vorschau teilen"
          ],
          prompt: "Pitch-Deck-Entwurf mit 10 Folien zum Teilen.",
          result: "Pitch-Deck-Entwurf mit 10 Folien zum Teilen.",
          tips: "Gamma braucht eine klare Gliederung; Ersetzen Sie Zahlen und Fälle durch reale Daten."
        },
        {
          title: "Einseitige Wettbewerbsrecherche mit Perplexity",
          difficulty: "Anfänger",
          duration: "~15 Min",
          desc: "Perplexity Pro Suche nach Wettbewerbslandschaft – einseitige Zusammenfassung mit zitierten Quellen.",
          steps: [
            "Forschungsfrage einfügen, auf Abruf warten",
            "Forschungsfrage einfügen, auf Abruf warten",
            "Klicken Sie auf Zitatnummern, um die Quellen zu überprüfen",
            "Follow-up: „Funktionsvergleichstabelle von ChatGPT vs. Claude vs. Gemini“",
            "Mit Recherchedatum nach Notion/Feishu kopieren",
            "Entfernen Sie veraltete oder defekte Quelllinks"
          ],
          prompt: "Erforschen Sie den „AI-Coding-IDE“-Markt 2026: Positionierung von Cursor, Windsurf, GitHub Copilot, Preise, Kernunterschiede, Zielbenutzer. Ausgabe Englischer One-Pager: Übersicht | Vergleichstabelle | 3 Auswahltipps | zitierte Quellen",
          result: "Zitierter One-Pager eines Mitbewerbers für Werkzeugdiskussionen.",
          tips: "Die Stärke der Ratlosigkeit liegt in überprüfbaren Quellen – die Preise werden immer noch auf offiziellen Websites bestätigt."
        },
        {
          title: "Verwandeln Sie mit NotebookLM 3 Artikel in einen KI-Podcast",
          difficulty: "Dazwischenliegend",
          duration: "~20 Min",
          desc: "Laden Sie 3 verwandte PDF-Artikel hoch, erstellen Sie einen Audio-Übersichts-Podcast – hören Sie sich Literatur-Highlights beim Pendeln an.",
          steps: [
            "NotebookLM → neues Notebook",
            "Laden Sie 3 PDFs zum gleichen Thema hoch (öffentliche Veröffentlichungen in Ordnung)",
            "Warten Sie auf den Index und lesen Sie zuerst die automatischen FAQ",
            "Studio → Audioübersicht generieren",
            "Hören Sie zu, machen Sie eine Pause, um die wichtigsten Behauptungen zu überprüfen",
            "Chat: „Methodische Unterschiede zwischen den drei Arbeiten?“"
          ],
          prompt: "(Nach dem Hochladen der PDFs fragen Sie Notebook:)\n\nVergleichen Sie die Forschungsfragen, Datensätze, Methoden und Einschränkungen der drei Artikel in einer Tabelle und empfehlen Sie, was ein Anfänger zuerst lesen sollte.",
          result: "KI-Podcast-Audio + abfragbares Literaturnotizbuch.",
          tips: "NotebookLM verwendet nur Ihre Uploads – ideal für ausführliche Rezensionen; Zitieren von Originalarbeiten für wissenschaftliche Arbeiten."
        },
        {
          title: "Schreiben Sie lange WeChat-Artikel mit ERNIE Bot",
          difficulty: "Anfänger",
          duration: "~15 Min",
          desc: "ERNIE Bot für ca. 1500 Wörter umfassende Erklärungen mit Titeloptionen, Struktur und SEO-Schlüsselwörtern.",
          steps: [
            "ERNIE Bot öffnen, neuer Chat",
            "Fügen Sie eine Schreibaufgabe mit Ihrem Thema ein",
            "Bitten Sie darum, „den KI-Ton zu reduzieren und konkrete Beispiele hinzuzufügen“.",
            "Erhalten Sie 3 Titel + eine Zusammenfassung mit 100 Wörtern",
            "Format für WeChat: Zwischenüberschriften, Anführungszeichen, End-CTA",
            "Format für WeChat: Zwischenüberschriften, Anführungszeichen, End-CTA"
          ],
          prompt: "Schreiben Sie eine englische Erklärung mit 1500 Wörtern:\nThema: Wie normale Menschen KI systematisch erlernen können (für Berufseinsteiger)\nStruktur: Eröffnungsgeschichte / 3 Mythen / 7-Tage-Methode / Tool-Tipps / Schluss-CTA\n\nKlare Zwischenüberschriften, Konversation, konkrete Beispiele, vermeiden Sie hohle „Abschluss“-Füllungen.",
          result: "Entwurf eines langen Artikels, der zur Bearbeitung und Veröffentlichung bereit ist.",
          tips: "ERNIE kennt den chinesischen Internetkontext; Überprüfen Sie die Fakten und fügen Sie persönliche Aspekte hinzu, bevor Sie sie veröffentlichen."
        },
        {
          title: "Analysieren Sie Excel-Verkaufsdaten mit ChatGPT",
          difficulty: "Dazwischenliegend",
          duration: "~18 Min",
          desc: "CSV-Beispiel hochladen; Erweiterte ChatGPT-Analyse für Trends, Top-SKUs, Anomaliemonate und Diagrammvorschläge.",
          steps: [
            "Bereiten Sie eine anonymisierte sales.csv-Datei vor (Monat, SKU, Menge, Menge).",
            "ChatGPT neuer Chat, Datei hochladen (Plus/Team)",
            "Eingabeaufforderung zur Analyse einfügen",
            "Überprüfen Sie die Python-Analyse oder Tabellenausgabe",
            "Fragen Sie nach den „Top 5 SKUs, die diesen Monat wieder aufgefüllt werden sollten“",
            "Verwenden Sie für sensible Daten eine unternehmensweite oder lokale Analyse"
          ],
          prompt: "Hochgeladene Verkaufs-CSV analysieren:\n1) Monatliche Umsatzentwicklung\n2) Top 5 SKUs nach Menge\n3) Monate mit ungewöhnlichen Volumenrückgängen und datengesteuerten möglichen Gründen (keine Spekulation)\n4) Schlagen Sie zwei Diagramme und Erkenntnisse vor\n5) 3 Aktionspunkte für das Geschäftsteam\n\nEnglisch, Listen + kurze Schlussfolgerungen.",
          result: "Einblicke in Verkaufstrends und Diagrammvorschläge für wöchentliche Besprechungen.",
          tips: "Vor dem Hochladen anonymisieren; Aggregieren Sie große Datenmengen oder lassen Sie die KI Python schreiben, um es lokal auszuführen."
        },
        {
          title: "Erstellen Sie eine interaktive Aufgabenseite mit Claude Artifacts",
          difficulty: "Dazwischenliegend",
          duration: "~15 Min",
          desc: "Claude Artifacts generiert eine Einzeldatei-HTML-ToDo-App mit localStorage und Kontrollkästchen.",
          steps: [
            "Claude neuer Chat, Eingabeaufforderung",
            "Vorschau der Aufgabenseite in Artefakten – hinzufügen/vervollständigen/löschen",
            "Wenn der Stil deaktiviert ist: „Einfachere dunkle Benutzeroberfläche, größere Tippziele“",
            "Exportieren oder kopieren Sie HTML aus Artefakten",
            "Doppelklicken Sie im Browser auf HTML und überprüfen Sie localStorage",
            "Als persönliches Tool auf GitHub-Seiten bereitstellen"
          ],
          prompt: "Erstellen Sie eine HTML-ToDo-App mit einer einzelnen Datei (Inline-CSS+JS):\n- Hinzufügen/Vervollständigen/Löschen\n- LocalStorage-Persistenz\n- Dunkle, minimalistische Benutzeroberfläche, mobilfreundlich\n- Englische Benutzeroberfläche\n\nGeben Sie vollständigen ausführbaren Code in Artifacts aus und erklären Sie die Verwendung.",
          result: "Doppelklicken Sie auf die ausführbare lokale ToDo-Web-App.",
          tips: "Claude Artifacts eignet sich hervorragend für schnelle Prototypen; Import in Cursor für komplexe Features."
        },
        {
          title: "Gerüst-REST-API mit Cursor-Agent",
          difficulty: "Dazwischenliegend",
          duration: "~30 Min",
          desc: "Cursor-Agent von Null: Node.js Express API mit Gesundheitsprüfung, TODO CRUD und README.",
          steps: [
            "Neuer Ordner todo-api, im Cursor öffnen",
            "Agentenmodus: Anforderungen einfügen, Erstellung mehrerer Dateien zulassen",
            "Terminal: npm install && npm run dev",
            "Curl oder Postman testen GET /health und POST /todos",
            "Bei einem Portkonflikt bitten Sie den Agenten, das .env-Beispiel zu aktualisieren",
            "Lesen Sie die README-Datei des Agenten und fügen Sie Ihre Bereitstellungshinweise hinzu"
          ],
          prompt: "Erstellen Sie Node.js + Express REST API:\n- GET /health\n- CRUD /todos (In-Memory-Speicherung OK)\n- package.json, README, .gitignore\n- Einfache Fehlerbehandlung und englische Kommentare\n- Geben Sie Startbefehle und Testbeispiele an",
          result: "Lokal ausführbares TODO-API-Gerüst mit Testanweisungen.",
          tips: "Dateischreibvorgänge und Terminal im Agent-Modus zulassen; Bestehen Sie die Integritätsprüfung, bevor Sie die Datenbank hinzufügen."
        },
        {
          title: "Entwerfen Sie ein Kaffeemarkenplakat mit Midjourney",
          difficulty: "Anfänger",
          duration: "~12 Min",
          desc: "Kommerzielle Plakatpraxis: Motiv, Negativraum, Markenfarben, Typografiebereich – nicht nur Landschaft.",
          steps: [
            "Midjourney Neue Aufgabe erstellen",
            "Eingabeaufforderung, Hinweis --ar 2:3 vertikales Poster",
            "Gehobene Version mit Platz für Logo",
            "Markenname und Slogan in Figma/Canva überlagern (KI-Text ist unzuverlässig)",
            "Variieren Sie warme/kühle Stimmung",
            "Exportieren Sie JPG für Ladenbesuche oder soziale Netzwerke"
          ],
          prompt: "Minimalistisches Kaffeemarkenplakat, einzelne Keramiktasse auf Holztisch, Morgenlicht, großer Negativraum oben für Typografie, erdige Braun- und Cremetöne, redaktionelle Fotografie, klare Komposition – AR 2:3 – Stil roh – V 6",
          result: "Vertikales Kaffee-Poster-Basisbild für Textüberlagerung.",
          tips: "Reserveraum: großer negativer Raum oben; Text im Beitrag hinzufügen – Unterwegs ist der Text oft verstümmelt."
        },
        {
          title: "Batch-App-Icon-Entwürfe mit ChatGPT",
          difficulty: "Anfänger",
          duration: "~8 Min",
          desc: "ChatGPT neuer Chat, Bildgenerierung bestätigen verfügbar",
          steps: [
            "ChatGPT neuer Chat, Bildgenerierung bestätigen verfügbar",
            "Eingabeaufforderung, 4 Farbvarianten anfordern",
            "Laden Sie das beste 1024px-Matching zur Marke herunter",
            "Figma abgerundete Maske für iOS-Symbolspezifikation",
            "Iterieren Sie bei Bedarf „flacher, weniger Details“.",
            "Überprüfen Sie die Lesbarkeit bei kleiner Größe 60×60"
          ],
          prompt: "App-Icon-Designentwürfe generieren (1024x1024, quadratisch):\n\nApp: KI-Lernplattform „BestWayToLearn.AI“\nElemente: Abstraktes Neuron/Stern, technisches Gefühl\nStil: Flacher Farbverlauf, dunkler Hintergrund, hoher Kontrast, kein Text\n\nGeben Sie in einer Antwort 4 Farbschemata an.",
          result: "4 App-Icon-Entwürfe zur Verfeinerung in Design-Tools.",
          tips: "Englischer Voiceover für Video mit ElevenLabs"
        },
        {
          title: "Englischer Voiceover für Video mit ElevenLabs",
          difficulty: "Anfänger",
          duration: "~12 Min",
          desc: "ElevenLabs → Text to Speech, Profi-Englisch, männlich/weiblich",
          steps: [
            "ElevenLabs → Text to Speech, Profi-Englisch, männlich/weiblich",
            "Fügen Sie unten das 60er-Jahre-Skript ein und stellen Sie Stabilität/Klarheit ein",
            "Falsch ausgesprochene Wörter generieren und korrigieren (buchstabieren Sie „A I“)",
            "MP3 herunterladen, in den Videoeditor importieren",
            "An Bildern ausrichten, Pausen kürzen",
            "Notieren Sie die Synchronisationsquelle, wenn die Plattform dies erfordert"
          ],
          prompt: "Willkommen bei BestWayToLearn.AI. In nur sieben Tagen gelangen Sie von den KI-Grundlagen zu realen Projekten. Erfahren Sie, wie große Sprachmodelle funktionieren, wählen Sie die richtigen Tools aus und üben Sie mit praktischen Tutorials. Beginnen Sie mit der Erkenntnis, beherrschen Sie die Werkzeuge, leisten Sie echte Arbeit und validieren Sie dann Ihre Fähigkeiten. Ihre KI-Reise beginnt jetzt.",
          result: "Englischer Erzählung MP3, einbettbar in Video.",
          tips: "Abkürzungen für die Aussprache buchstabieren (A I / Chat G P T); Teilen Sie lange Skripte in Segmente auf."
        },
        {
          title: "Batch-Kurzvideo-Voiceover mit Fish Audio",
          difficulty: "Dazwischenliegend",
          duration: "~18 Min",
          desc: "Verwenden Sie geklonte oder voreingestellte chinesische Stimmen für drei kurze Skripte – steigern Sie die Produktion von Kurzvideos.",
          steps: [
            "Melden Sie sich bei Fish Audio an und wählen Sie eine stabile chinesische Stimme",
            "Generieren Sie separat 3 × 30s-Skripte",
            "Geschwindigkeit/Lautstärke vereinheitlichen, MP3 als Folge 1–3 herunterladen",
            "Im Editor an Bildern und Untertiteln ausrichten",
            "Backup-Skripte und Audio; wiederverwendbare Voiceover-Vorlage",
            "Backup-Skripte und Audio; wiederverwendbare Voiceover-Vorlage"
          ],
          prompt: "【Skript 1】Wussten Sie schon? Sie brauchen nicht die ganze Mathematik, bevor Sie KI einsetzen. Zuerst aufgabengesteuertes Lernen, dann Theorie – so geht es am schnellsten.\n\n【Skript 2】Horten Sie keine Tools: Eine Chat-KI + ein Spezialist für Ihren Hauptworkflow reichen aus.\n\n【Skript 3】 45 Minuten pro Tag für eine Woche – Sie können die Erkenntnis durch Übung vervollständigen.",
          result: "3 chinesische Voiceover-MP3s für ein kurzes Video.",
          tips: "Sprachparameter für Batch-Arbeit vereinheitlichen; Halten Sie Skripte 30–45 Sekunden lang für die Bearbeitung des Rhythmus bereit."
        },
        {
          title: "Veröffentlichen Sie tägliche Mitbewerber-Updates mit OpenClaw",
          difficulty: "Fortschrittlich",
          duration: "~25 Min",
          desc: "Über Aktiennachrichten hinaus sammelt OpenClaw an Wochentagen Aktualisierungen der Websites/Blogs der Mitbewerber und leitet sie an Slack weiter.",
          steps: [
            "Ersetzen Sie die Mitbewerberliste im Cron-Befehl durch Ihren Bereich",
            "Ersetzen Sie die Mitbewerberliste im Cron-Befehl durch Ihren Bereich",
            "Nach der Erstellung führt openclaw cron einen manuellen Test durch",
            "Überprüfen Sie, ob die Slack-Nachricht Quelllinks und Daten enthält",
            "Bei Störungen sollte die Meldung „nur größere Änderungen“ erfordern.",
            "Respektiere robots.txt; kein aggressives Krabbeln"
          ],
          prompt: "openclaw cron create „0 9 * * 1-5“ \\\n  --name „Tagesüberblick des Wettbewerbers“ \\\n  --tz \"Asien/Shanghai\" \\\n  --session isoliert \\\n  --message „Sie sind ein Competitive-Intelligence-Analyst. Überprüfen Sie täglich Changelog-/Blog-Updates auf: Cursor, Windsurf, GitHub Copilot. Englische Ausgabe (≤300 Wörter): 1) Heutige Änderungen 2) Benutzerauswirkungen 3) Quelllinks. Wenn keine: „Heute keine größeren öffentlichen Updates.“ \\\n  --announce \\\n  --channel slack \\\n  --to „YOUR_SLACK_CHANNEL_ID“",
          result: "Zusammenfassung der Wettbewerber an Wochentagen am Morgen in Slack.",
          tips: "Verwenden Sie wie bei Stock Cron eine isolierte Sitzung. Zitieren Sie immer Quellen für nachrichtendienstliche Zwecke."
        }
      ],
      practiceCategories: {
        "全部": "Alle",
        "职场办公": "Arbeitsplatz & Büro",
        "学习成长": "Lernen und Wachstum",
        "编程开发": "Produktivität im Büro",
        "数据营销": "Daten & Marketing",
        "翻译法务": "Übersetzung & Recht"
      },
      practiceUi: {
        countShown: "{visible} / {total} angezeigt",
        emptyHint: "Keine Vorlagen in dieser Kategorie. Versuchen Sie es mit einem anderen Tag.",
        promptTplLabel: "Prompt-Vorlage"
      },
      practices: [
        {
          title: "Listen Sie Arbeitshighlights als Aufzählungszeichen auf. KI erweitert sich in strukturierte Wochenberichte oder professionelle E-Mails.",
          desc: "Listen Sie Arbeitshighlights als Aufzählungszeichen auf. KI erweitert sich in strukturierte Wochenberichte oder professionelle E-Mails.",
          steps: [
            "Listen Sie diese Woche 3–5 wichtige Punkte auf",
            "Beachten Sie messbare Ergebnisse pro Element",
            "Bitten Sie die KI, die Formatierung entsprechend dem Unternehmensstil vorzunehmen"
          ],
          prompt: "Sie sind ein professioneller Berater für Arbeitsplatzkommunikation.\nErweitern Sie Folgendes zu einem prägnanten professionellen Wochenbericht (ca. 300 Wörter):\n[Aufzählungszeichen einfügen]\nAnforderungen: datengesteuert, hervorhebende Ergebnisse, positiver professioneller Ton."
        },
        {
          title: "Etwas Neues lernen",
          desc: "Nutzen Sie KI als Nachhilfelehrer – Analogien, Quizfragen und Korrektur von Missverständnissen.",
          steps: [
            "Definieren Sie Thema und Lernziel",
            "Bitten Sie um eine Erklärung im Feynman-Stil",
            "Üben Sie Fragen, um das Verständnis zu überprüfen"
          ],
          prompt: "Bringen Sie mir [Thema] die Feynman-Technik bei.\n1. Erklären Sie Kernkonzepte anhand alltäglicher Analogien\n2. Listen Sie drei häufige Missverständnisse auf\n3. Stellen Sie 2 Multiple-Choice-Fragen mit Antworten und Erklärungen"
        },
        {
          title: "Code-Debugging und Erklärung",
          desc: "Fehler oder Codeausschnitte einfügen; KI lokalisiert Probleme, erklärt Ursachen und schlägt Lösungen vor.",
          steps: [
            "Vollständige Fehlermeldung einfügen",
            "Beziehen Sie den relevanten Codekontext mit ein",
            "Fragen Sie nach Ursache, Lösung und Vorbeugung"
          ],
          prompt: "Dieser Code schlägt zur Laufzeit fehl:\n[Code und Fehler]\nBitte: 1) Erklären Sie den Fehler auf Englisch 2) Geben Sie einen festen Code an 3) Wie Sie ihn vermeiden können"
        },
        {
          title: "Datenanalyse und Visualisierung",
          desc: "CSV/Excel hochladen; KI findet Trends und Anomalien und schlägt Diagrammtypen vor.",
          steps: [
            "Datendatei hochladen",
            "Ziel der Zustandsanalyse",
            "Fordern Sie Statistiken, Einblicke und Diagrammvorschläge an"
          ],
          prompt: "Analysieren Sie die hochgeladenen Verkaufsdaten:\n1. Grundlegende Statistikübersicht\n2. Top 3 Trends und Anomalien\n3. Schlagen Sie zwei hochwertige Diagramme vor\n4. Drei umsetzbare Geschäftsempfehlungen"
        },
        {
          title: "Erstellung von Marketingtexten",
          desc: "Bereitstellung von Produkt und Zielgruppe; Erhalten Sie mehrere Kopieversionen für A/B-Tests.",
          steps: [
            "Beschreiben Sie Produkt- und Verkaufsargumente",
            "Definieren Sie die Persona der Zielgruppe",
            "Fordern Sie 3 Stilvarianten an"
          ],
          prompt: "Produkt: [Beschreibung] Zielgruppe: [Beschreibung]\nErstellen Sie drei Marketingtextversionen (professionell/lebendig/dringend), jeweils mit Überschrift + Text (ca. 100 Wörter) + CTA."
        },
        {
          title: "Organisation von Besprechungsnotizen",
          desc: "Geben Sie Transkripte oder unordentliche Notizen an die KI weiter, um strukturierte Protokolle und Aktionspunkte zu erhalten.",
          steps: [
            "Stellen Sie ein Protokoll oder Notizen zur Besprechung bereit",
            "Notieren Sie Teilnehmer und Thema",
            "Fordern Sie eine strukturierte Ausgabe an"
          ],
          prompt: "Organisieren Sie diese Besprechungsaufzeichnung:\n## Thema ## Wichtige Entscheidungen ## Todos (Eigentümer + Fälligkeitsdatum) ## Offene Fragen\n\n[Datensatz einfügen]"
        },
        {
          title: "Lebenslauf und Anschreiben",
          desc: "Optimieren Sie den Lebenslauf für eine bestimmte Rolle und erstellen Sie ein personalisiertes Anschreiben.",
          steps: [
            "Zieljobbeschreibung einfügen",
            "Listen Sie Ihre relevanten Erfahrungen auf",
            "Fragen Sie nach einer passenden Optimierung"
          ],
          prompt: "Zielrolle: [JD]\nMein Hintergrund: [Lebenslauf-Highlights]\nBitte: 1) Optimieren Sie die Aufzählungszeichen Ihrer Erlebnisse (markieren Sie Übereinstimmungen). 2) Schreiben Sie ein Anschreiben mit ca. 200 Wörtern"
        },
        {
          title: "Idee für einen Produktprototyp",
          desc: "Produktidee beschreiben; KI generiert User Stories, Feature-Listen und Seitenstrukturen.",
          steps: [
            "Produktidee mit einem Absatz",
            "Definieren Sie Zielbenutzer",
            "Fordern Sie eine MVP-Feature-Liste an"
          ],
          prompt: "Ich möchte [Produktbeschreibung] erstellen.\nAusgabe: 1) 3 User Stories 2) Priorisierte MVP-Funktionsliste 3) Wireframe-Beschreibung der Hauptseite 4) Risiken und Abhilfemaßnahmen"
        },
        {
          title: "Übersetzung und Lokalisierung",
          desc: "Über die wörtliche Übersetzung hinaus – passen Sie den kulturellen Kontext, den Ton und das Format an.",
          steps: [
            "Geben Sie Ausgangstext und Zielsprache an",
            "Erklären Sie das Publikum und den kulturellen Kontext",
            "Fordern Sie eine nicht wörtliche Anpassung an"
          ],
          prompt: "Übersetzen Sie Folgendes in [Sprache]:\n1. Natürliche lokale Ausdrücke 2. Den ursprünglichen Ton bewahren 3. Beachten Sie 2 kulturelle Anpassungen\n\n[Quellentext]"
        },
        {
          title: "Wettbewerbs- und Marktforschung",
          desc: "KI bildet die Wettbewerbslandschaft und Trends ab; Erstellen Sie eine SWOT-Analyse.",
          steps: [
            "Definieren Sie Branche und Umfang",
            "Fordern Sie einen strukturierten Mitbewerbervergleich an",
            "Überprüfen Sie wichtige Datenquellen"
          ],
          prompt: "Wettbewerbsanalyse für [Branche/Produkt]:\n1. Fünf Hauptkonkurrenten und Unterschiede 2. SWOT 3. Drei Differenzierungsmöglichkeiten\nZitieren Sie Quellen."
        },
        {
          title: "Unterrichtsdesign",
          desc: "Entwerfen Sie eine Kursskizze, Materialien und Aktivitäten für ein Thema und eine Zielgruppe.",
          steps: [
            "Zielgruppe und Lernziele",
            "Geben Sie Dauer und Format an",
            "Zielgruppe: [Hintergrund] Thema: [Thema] Dauer: [Stunden]\nDesign: 1) Lernziele 2) Kursübersicht 3) Interaktive Segmente 4) Hausaufgaben"
          ],
          prompt: "Zielgruppe: [Hintergrund] Thema: [Thema] Dauer: [Stunden]\nDesign: 1) Lernziele 2) Kursübersicht 3) Interaktive Segmente 4) Hausaufgaben"
        },
        {
          title: "Bild- und Coverdesign",
          desc: "Textaufforderungen generieren Illustrationen, Umschläge und visuelle Elemente, um die Richtung schnell zu bestätigen.",
          steps: [
            "Stil und Anwendungsfall klären",
            "Schreiben Sie eine Eingabeaufforderung in Englisch/Chinesisch",
            "Wiederholen Sie 2–3 Runden"
          ],
          prompt: "Eine [Stil]-Illustration von [Thema], [Farbpalette], [Komposition], klare Komposition, hohe Qualität – im 16:9-Format"
        },
        {
          title: "Vertrag hochladen; KI weist auf Risikoklauseln hin, erklärt Begriffe und schlägt Überarbeitungen vor.",
          desc: "Vertrag hochladen; KI weist auf Risikoklauseln hin, erklärt Begriffe und schlägt Überarbeitungen vor.",
          steps: [
            "Laden Sie den vollständigen Vertrag hoch",
            "Geben Sie Ihren Standpunkt an (Partei A/B)",
            "Risiko-Highlights anfordern"
          ],
          prompt: "Überprüfen Sie diesen Vertrag (wir sind [Partei A/B]):\n1. 5 Risikoklauseln kennzeichnen 2. Rechtsbegriffe erläutern 3. Überarbeitungen vorschlagen\n\n[Vertragstext]"
        },
        {
          title: "Social-Media-Inhalte",
          desc: "Generieren Sie plattformangepasste Beiträge für Xiaohongshu/Weibo/LinkedIn aus der Kernbotschaft.",
          steps: [
            "Wählen Sie Plattform und Zielgruppe",
            "Geben Sie Kernbotschaften an",
            "Fordern Sie Versionen + Hashtags an"
          ],
          prompt: "Erstellen Sie einen [Plattform]-Beitrag zu [Thema]:\n1. Aufmerksamkeit erregende Überschrift 2. Text (ca. 200 Wörter) 3. Fünf Hashtags 4. Engagement-CTA"
        },
        {
          title: "Datenaufgabe beschreiben; KI generiert Excel/Sheets-Formeln oder Python-Skripte.",
          desc: "Datenaufgabe beschreiben; KI generiert Excel/Sheets-Formeln oder Python-Skripte.",
          steps: [
            "Beschreiben Sie Datenstruktur und Ziel",
            "Geben Sie eine Beispieleingabe/-ausgabe an",
            "Fordern Sie eine Formel oder ein Skript an"
          ],
          prompt: "Excel-Daten: [Strukturbeschreibung]\nBedarf: [Verarbeitungsziel]\nGeben Sie an: 1) Excel-Formel 2) Schritte 3) Vorbehalte"
        },
        {
          title: "Persönliches Wissensmanagement",
          desc: "Organisieren Sie Lesenotizen und Ausschnitte in einer strukturierten Wissensdatenbank.",
          steps: [
            "Sammle verstreute Notizen",
            "Taxonomie definieren",
            "KI generiert Zusammenfassungen und Links"
          ],
          prompt: "Organisieren Sie diese Notizen in einer strukturierten Wissensdatenbank:\n1. Gruppierung nach Thema 2) Zusammenfassung nach Thema 3) Schlüsselkonzepte und Links\n\n[Notizen]"
        }
      ],
      promptLab: {
        tasks: {
          "内容写作": "Bitte schreiben Sie Inhalte gemäß den folgenden Anforderungen.",
          "问题分析": "Bitte analysieren Sie das folgende Problem eingehend.",
          "代码开发": "Bitte schreiben Sie Code gemäß den folgenden Anforderungen.",
          "学习辅导": "Bitte helfen Sie mir, das folgende Thema so zu verstehen, wie es ein Lehrer tun würde.",
          "数据分析": "Bitte führen Sie eine Datenanalyse für die folgenden Daten oder Fragen durch.",
          "创意策划": "Bitte liefern Sie kreative Ideen für das folgende Szenario.",
          "翻译润色": "Bitte übersetzen oder polieren Sie den folgenden Inhalt.",
          "会议纪要": "Bitte organisieren Sie Folgendes in strukturierten Besprechungsprotokollen.",
          "竞品调研": "Bitte führen Sie eine Wettbewerbs- und Marktanalyse für die folgende Branche/das folgende Produkt durch.",
          "简历优化": "Bitte optimieren Sie Ihren Lebenslauf und Ihre Bewerbungsunterlagen anhand der folgenden Informationen."
        },
        taskLabels: {
          "内容写作": "Schreiben von Inhalten",
          "问题分析": "Problemanalyse",
          "代码开发": "Code-Entwicklung",
          "学习辅导": "Lernunterstützung",
          "数据分析": "Datenanalyse",
          "创意策划": "Kreative Planung",
          "翻译润色": "Übersetzung und Polnisch",
          "会议纪要": "Besprechungsnotizen",
          "竞品调研": "Konkurrenzforschung",
          "简历优化": "Qwen"
        },
        tools: {
          "内容写作": [
            "ChatGPT",
            "Claude",
            "Qwen"
          ],
          "问题分析": [
            "ChatGPT",
            "Claude",
            "DeepSeek"
          ],
          "代码开发": [
            "Claude Code",
            "Claude",
            "DeepSeek"
          ],
          "学习辅导": [
            "ChatGPT",
            "Claude",
            "Verwirrung"
          ],
          "数据分析": [
            "ChatGPT",
            "Claude",
            "Qwen"
          ],
          "创意策划": [
            "Claude",
            "ChatGPT",
            "Gemini"
          ],
          "翻译润色": [
            "DeepL",
            "Claude",
            "ChatGPT"
          ],
          "会议纪要": [
            "Kimi",
            "Claude",
            "Qwen"
          ],
          "竞品调研": [
            "Verwirrung",
            "ChatGPT",
            "NotebookLM"
          ],
          "简历优化": [
            "ChatGPT",
            "Claude",
            "ERNIE Bot"
          ]
        },
        presets: {
          "内容写作": {
            role: "Leitender Content-Stratege",
            context: "Schreibthema:\nZielgruppe:\nKernbotschaftspunkte (3–5):\nKanal- und Wortlimit:",
            output: "Vollständiger Entwurf mit Titel, Lede, 2–3 Unterüberschriften und abschließender Zusammenfassung oder CTA",
            tone: "Professionell und streng"
          },
          "问题分析": {
            role: "Leitender Strategieberater",
            context: "Zu analysierendes Problem:\nBekannte Hintergründe und Einschränkungen:\nVerwandte Daten oder Beobachtungen:\nIhr Standpunkt/Entscheidungsziel:",
            output: "Full-Stack-Ingenieur",
            tone: "Professionell und streng"
          },
          "代码开发": {
            role: "Full-Stack-Ingenieur",
            context: "Tech-Stack:\nFunktionsanforderungen:\nBeispiele für Eingabe/Ausgabe:\nVorhandener Code oder Fehler (falls vorhanden):",
            output: "Ausführbarer Code + englische Kommentare + kurze Nutzungshinweise + empfohlene Testfälle",
            tone: "Prägnant und direkt"
          },
          "学习辅导": {
            role: "Tutor im Feynman-Stil",
            context: "Mehrschichtige Erklärung (Analogie + Schlüsselkonzepte + Missverständnisse) + 2 Selbstkontrollfragen mit Antworten",
            output: "Mehrschichtige Erklärung (Analogie + Schlüsselkonzepte + Missverständnisse) + 2 Selbstkontrollfragen mit Antworten",
            tone: "Klar und zugänglich"
          },
          "数据分析": {
            role: "Datenanalyst",
            context: "Datenbeschreibung (Quelle, Felder, Zeitbereich):\nAnalyseziel:\nGeschäftsfragen:\nBekannte Anomalien oder Hypothesen:",
            output: "Übersicht → 3 Hauptergebnisse → Diagrammvorschläge → umsetzbare Empfehlungen; Etikett bestätigt/abgeleitet/zu überprüfen",
            tone: "Professionell und streng"
          },
          "创意策划": {
            role: "Kreativdirektor",
            context: "Marke/Produkt:\nZielgruppe:\nKanal- und Budgetbeschränkungen:\nKernbotschaft:",
            output: "2–3 kreative Konzepte: jeweils mit Kernidee, Umsetzungspfad, erwarteten Auswirkungen und Risiken",
            tone: "Kreativ und explorativ"
          },
          "翻译润色": {
            role: "Zweisprachiger Herausgeber",
            context: "Ausgangssprache und Inhalt:\nZielsprache und Zielgruppe:\nStil (formell/lässig/Marketing):\nZu bewahrende Begriffe oder Markennamen:",
            output: "Ausgearbeiteter/übersetzter Abschluss + Anmerkungen zu zwei Schlüsselwortwahlmöglichkeiten",
            tone: "Professionell und streng"
          },
          "会议纪要": {
            role: "Leitender Assistent der Geschäftsleitung",
            context: "Tagungsthema:\nTeilnehmer und Rollen:\nDiskussionspunkte (Notizen/Transkript einfügen):\nVerbale Aufgaben (falls vorhanden):",
            output: "Strukturiertes Protokoll: Thema & Zeit → wichtige Entscheidungen → Todo-Tabelle (Inhaber + Fälligkeitsdatum) → offene Fragen",
            tone: "Prägnant und direkt"
          },
          "竞品调研": {
            role: "Marktforschungsanalyst",
            context: "Branche/Spur:\nUnsere Produktpositionierung:\nMitbewerber zum Vergleich (3–5):\nFokus (Funktionen/Preise/Kanäle usw.):",
            output: "Wettbewerbsvergleichstabelle + SWOT-Zusammenfassung + 3 Differenzierungsmöglichkeiten; Nennen Sie Quellen für die wichtigsten Behauptungen",
            tone: "Professionell und streng"
          },
          "简历优化": {
            role: "Senior-Recruiting-Berater",
            context: "Zusammenfassung der Zielstellenbeschreibung:\nAktuelle Lebenslauf-Highlights (Erfahrung/Fähigkeiten/Projekte):\nLangjährige Erfahrung und Branche:\nHervorzuhebende Stärken / herunterzuspielende Bereiche:",
            output: "Optimierte Erlebnisaufzählungszeichen (JD-Schlüsselwörter) + Anschreiben mit ca. 200 Wörtern + 3 Tipps zur Vorbereitung auf Vorstellungsgespräche",
            tone: "Professionell und streng"
          }
        },
        tones: {
          "专业严谨": "Professionell und streng",
          "通俗易懂": "Klar und zugänglich",
          "创意发散": "Kreativ und explorativ",
          "简洁直接": "Prägnant und direkt"
        },
        ui: {
          casesLabel: "Fälle aus der Praxis",
          selectCaseStart: "Wählen Sie einen Fall aus, um zu beginnen",
          copyPrompt: "Eingabeaufforderung kopieren",
          configTitle: "Schnelle Konfiguration",
          taskType: "Aufgabentyp",
          role: "Rolle",
          rolePlaceholder: "z.B. Leitender Produktmanager",
          context: "Kontext",
          contextPlaceholder: "Beschreiben Sie Szenario, Zielgruppe, Einschränkungen ...",
          output: "Erwartete Ausgabe",
          outputPlaceholder: "z.B. Eine PRD-Gliederung mit 500 Wörtern",
          tone: "Ton",
          generateSimulate: "Generieren und simulieren",
          chatTitle: "Simulation zurücksetzen",
          resetSim: "Simulation zurücksetzen",
          simEmptyTitle: "Simulation nicht gestartet",
          simEmptyDesc: "Wählen Sie oben einen Fall aus oder bearbeiten Sie das linke Feld und klicken Sie auf „Generieren und simulieren“. Hier werden Eingabeaufforderung, KI-Antwort und Aktionsleitfaden angezeigt.",
          guideTitle: "Simulation abgeschlossen · Probieren Sie es mit einem echten Werkzeug aus",
          guideToolsLabel: "Empfohlene Werkzeuge:",
          followupPlaceholder: "Follow-up, z.B. „Mach es kürzer“…",
          send: "Schicken",
          disclaimer: "Lokale Voreinstellungsdemo zum Verständnis der Eingabeaufforderungsstruktur. Kopieren Sie die Eingabeaufforderung in die empfohlenen Tools, um echte Ergebnisse zu erzielen.",
          tryFollowup: "Versuchen Sie zu fragen:",
          taskPrefix: "Aufgabe:",
          casePrefix: "Fall:",
          customScene: "Benutzerdefiniertes Szenario",
          defaultRole: "Leitender Experte",
          defaultContext: "[Bitte fügen Sie einen spezifischen Kontext hinzu]",
          defaultOutput: "[Erwartete Ausgabe beschreiben]",
          buildPrompt: {
            roleHeader: "# Rolle",
            rolePrefix: "Du bist ein",
            taskHeader: "# Aufgabe",
            contextHeader: "# Kontext",
            outputHeader: "# Erwartete Ausgabe",
            requirementsHeader: "# Anforderungen",
            toneLine: "- Wenn Informationen fehlen, listen Sie zunächst 2–3 Schlüsselfragen zur Bestätigung auf",
            clarifyLine: "- Wenn Informationen fehlen, listen Sie zunächst 2–3 Schlüsselfragen zur Bestätigung auf",
            structureLine: "- Klare Struktur mit Überschriften und Listen",
            uncertainLine: "- Kennzeichnen Sie unsichere Inhalte deutlich; Erfinde keine Fakten"
          },
          systemLabel: "System",
          simulating: "Simulieren…",
          promptSent: "Prompt gesendet",
          aiReply: "KI-Antwort",
          copyFail: "Der Kopiervorgang ist fehlgeschlagen",
          defaultGuideSteps: [
            "Klicken Sie in der Symbolleiste auf „Eingabeaufforderung kopieren“.",
            "Öffnen Sie ChatGPT oder Claude und starten Sie einen neuen Chat",
            "Fügen Sie die Eingabeaufforderung ein und ersetzen Sie den Kontext durch Ihr reales Szenario",
            "Iterieren Sie die Antwort: „kürzer“, „als Tabelle“, „Daten hinzufügen“"
          ],
          stepPrefix: "Schritt",
          stepSuffix: "",
          simError: "Die Simulation ist fehlgeschlagen. Aktualisieren Sie die Seite und versuchen Sie es erneut. Wenn es weiterhin besteht, führen Sie eine harte Aktualisierung durch (Befehl+Umschalt+R), um den Cache zu leeren.",
          caseDataError: "Falldaten konnten nicht geladen werden. Aktualisieren Sie die Seite hart (Befehl+Umschalt+R).",
          copyPromptLabel: "Eingabeaufforderung kopieren"
        },
        simulatedResponses: {
          "内容写作": "Verstanden – ich werde als {role} schreiben.\n\n## Entwurf\n\nBasierend auf Ihrem Kontext 「{ctx}」 ist hier {output}:\n\n---\n\n[Der Text wird hier im {tone}-Ton mit klaren Überschriften und Listen erweitert.]\n\n1. Mit der Kernspitze öffnen\n2. Unterstützen Sie mit Beweisen und Beispielen\n3. Schließen Sie mit umsetzbaren nächsten Schritten ab\n\n---\n\n💡 Sagen Sie mir, wenn Sie eine andere Länge, einen anderen Ton oder mehr Beispiele wünschen.",
          "问题分析": "Als {role} ist hier meine Analyse:\n\n## Problem-Framing\n「{ctx}」\n\n## Kernanalyse\n\n**1. Wichtige Spannungen**\nUrsachen aus mehreren Blickwinkeln…\n\n**2. Treiber**\n- Intern: …\n- Extern: …\n\n**3. Optionen**\n| Option | Oben | Risiko |\n|--------|--------|------|\n| A | … | … |\n| B | … | … |\n\n## Empfehlung\nBevorzugen Sie Option A, weil…\n\n({tone} · Zielausgabe: {output})",
          "代码开发": "„Python\n# {output}\n# Beispielcode aus Ihren Anforderungen\n\ndef main():\n    # TODO: Kernlogik für „{ctx}“ implementieren\n    passieren\n\nif __name__ == \"__main__\":\n    main()\n„\n\n## Notizen\n\n1. **Ansatz**: …\n2. **Schlüsselfunktionen**: …\n3. **Wie man läuft**: …\n\n⚠️ Passen Sie sich Ihrer Umgebung an. Möchten Sie Unit-Tests oder Fehlerbehandlung hinzufügen?",
          "学习辅导": "Gerne unterrichte ich als {role}! Lassen Sie uns die Feynman-Methode verwenden.\n\n## 📖 Kernidee\n\n**Analogie**: Stellen Sie sich das so vor ...\n\n## 🔍In die Tiefe gehen\n\nVon 「{ctx}」:\n\n1. Ebene 1: Definition\n2. Schicht 2: So funktioniert es\n3. Schicht 3: tatsächliche Nutzung\n\n## ❌ Häufige Fehler\n- Fehler 1: …\n- Fehler 2: …\n\n## ✅ Überprüfe dich selbst\n**F1**: …\n**A1**: …\n\nMöchten Sie weitere Quizfragen oder ein tiefergehendes Unterthema?",
          "数据分析": "## Analysebericht\n\n**Ziel**: {output}\n**Daten**: {ctx}\n\n### 1. Übersicht\n- Stichprobengröße: …\n- Zeitbereich: …\n- Schlüsselmetrik-Mittelwert/Median: …\n\n### 2. Erkenntnisse\n🔹 **Trend 1**: …\n🔹 **Trend 2**: …\n🔹 **Anomalie**: …\n\n### 3. Diagrammideen\n- Liniendiagramm für Trends\n- Balkendiagramm für Kategorien\n\n### 4. Empfehlungen\n1. …\n2. …\n3. …\n\nMuss Diagrammcode generiert werden?",
          "创意策划": "## Kreative Konzepte 🎯\n\n**Szenario**: {ctx}\n**Ziel**: {output}\n\n### Plan A｜Sicher\n- Kernidee: …\n- Ausführung: …\n- Erwartete Auswirkungen: …\n\n### Plan B｜Bold\n- Kernidee: …\n- Unterscheidungsmerkmal: …\n\n### Plan C｜Lean\n- Mindestlebensfähige Version: …\n\n**Auswahl**: Plan B, weil…\n\n({tone}) Möchten Sie einen vollständigen Rollout-Plan für eine Option?",
          "翻译润色": "## Übersetzung / Polnisch\n\n**Quellenzusammenfassung**: {ctx}\n\n### Polierter Text\n\n[Endgültige Version im {tone}-Ton, natürlich für die Zielgruppe.]\n\n### Notizen\n1. 「…」→「…」(lokale Formulierung)\n2. 「…」→「…」(kulturelle Veränderung)\n\nMöchten Sie eine alternative Stilversion?",
          "会议纪要": "## Sitzungsprotokoll\n\n**Thema**: [aus Kontext]\n**Hintergrund**: {ctx}\n\n### Entscheidungen\n1. …\n2. …\n\n### Aktionselemente\n| Artikel | Eigentümer | Fällig |\n|------|-------|-----|\n| … | … | … |\n\n### Offene Fragen\n- …\n\n---\nStrukturierte Zusammenfassung ({tone}). Brauchen Sie Teilnehmer hinzugefügt?",
          "竞品调研": "## Kurzbeschreibung des Wettbewerbers\n\n**Umfang**: {ctx}\n**Lieferbar**: {output}\n\n### Schlüsselspieler\n| Spieler | Stärke | Unterschied |\n|--------|----------|------------|\n| A | … | … |\n| B | … | … |\n\n### SWOT (unsere Meinung)\n- **S** Stärken: …\n- **W** Schwächen: …\n- **O** Möglichkeiten: …\n- **T** Bedrohungen: …\n\n### Differenzierung\n1. …\n2. …\n\n⚠️ Markieren Sie nicht überprüfte Zahlen zur manuellen Überprüfung.",
          "简历优化": "## Politur fortsetzen\n\n**Zielrollenkontext**: {ctx}\n\n### Erlebnisaufzählungen neu geschrieben\n\n> [Leistungsorientierte Aufzählungszeichen, abgestimmt auf die JD]\n\n**Änderungen**:\n- Generisch → ergebnisorientiert\n- Passende Schlüsselwörter hinzugefügt\n- Quantifizierte Auswirkungen, soweit möglich\n\n### Entwurf eines Anschreibens (~200 Wörter)\n\n[{tone} Tonentwurf]\n\nMöchten Sie eine andere Version für eine andere Rolle?",
          __default__: "Verstanden – ich helfe als {role}.\n\nAus 「{ctx}」 ist hier {output}:\n\n[Strukturierte Ausgabe im {tone}-Ton.]\n\nBitten Sie jederzeit um Anpassungen."
        },
        followupPatterns: [
          {
            match: "简洁|简短|精简|短一点|kürzer|kurz|prägnant",
            response: "Hier ist eine engere Version:\n\n**Wichtige Punkte**:\n1. …\n2. …\n3. …\n\n**Einzeiler**: …\n\nBrauchen Sie es noch kürzer?"
          },
          {
            match: "表格|table|列表|list",
            response: "In eine Tabelle umgewandelt:\n\n| Artikel | Detail | Priorität |\n|------|--------|----------|\n| … | … | Hoch |\n| … | … | Mittel |\n\nSpalten hinzufügen oder entfernen?"
          },
          {
            match: "详细|展开|更多|补充|detail|erweitern|mehr",
            response: "Erweitertes Detail:\n\n### Mehr Tiefe\n\nVon 「{ctx}」:\n\n1. …\n2. …\n3. …\n\nWas sollte ich noch vertiefen?"
          },
          {
            match: "英文|englisch|翻译|übersetzen",
            response: "Hier ist die englische Version:\n\n[Übersetzter Inhalt im {tone}-Ton]\n\nSagen Sie es mir, wenn Sie Optimierungen wünschen."
          },
          {
            match: ".",
            response: "Habe dein Follow-up erhalten: 「{followup}」\n\nAktualisierte Ausgabe:\n\n[Überarbeiteter Inhalt im {tone}-Ton]\n\nIterieren Sie diese Struktur weiter oder kopieren Sie sie in Ihr echtes Tool."
          }
        ],
        cases: [
          {
            id: "weekly-report",
            title: "Wochenbericht erweitern",
            scene: "Kommunikation am Arbeitsplatz",
            task: "内容写作",
            role: "Berater für Kommunikation am Arbeitsplatz",
            context: "Diese Woche: 1) BestWayToLearn.AI-Bereitstellungstool v2 ausgeliefert, Nginx-Routing-Konflikt behoben; 2) Zwei Kundendemos, 5 Feedback-Elemente; 3) Sofortiger Vorschlag zur Neugestaltung des Labors. Blocker: Bei der Überprüfung der Serverumgebung kommt es gelegentlich zu Zeitüberschreitungen.",
            output: "Professioneller Wochenbericht mit ca. 300 Wörtern, der Kennzahlen und den Plan für die nächste Woche hervorhebt",
            tone: "Professionell und streng",
            response: "## Wöchentlicher Bericht\n\n**Reporter**: Produktabteilung · Cloud-Projektteam\n**Zeitraum**: 23. Juni – 25. Juni\n\n### Wichtige Ergebnisse\n1. **Tool v2 live bereitstellen**: Env-Check-Absturz und Nginx-Default_Server-Konflikt behoben; Vollständige Bereitstellung verifiziert, Website zugänglich.\n2. **Zwei Kundendemos**: Schulung von Leitern und IT-Mitarbeitern; 5 umsetzbare Feedback-Elemente zur Ein-Klick-Bereitstellung und zur Klarheit des Lernpfads.\n3. **Umgehende Neugestaltung des Labors**: Fallbibliothek + Parallelsimulation, um die Einstiegshürde zu senken.\n\n### Metriken\n- Erfolgsquote bei der Bereitstellung: 100 % in der Demoumgebung (3/3)\n- Zufriedenheit vor Ort: 4,6 / 5\n– Aktualisierte Dokumente: Bereitstellungsanleitung + 6 Laborfälle\n\n### Probleme und Risiken\n- In schwachen Netzwerken kommt es bei der Umgebungsprüfung gelegentlich zu Zeitüberschreitungen (>15 Sekunden); Repro-Schritte protokolliert; Wiederholungsversuch und Timeout UX geplant.\n\n### Nächste Woche\n1. Erkennung schwacher Netzwerke + Protokollexport\n2. Passen Sie das Prompt-Modul für Tag 4 anhand des Kundenfeedbacks an\n3. Bereiten Sie ein externes Demoskript vor\n\n---\nFragen Sie, ob Sie eine kürzere Version oder eine E-Mail-Version für eine bestimmte Zielgruppe wünschen.",
            followups: [
              {
                user: "Auf weniger als 200 Wörter komprimieren, gesprächiger",
                ai: "**Drei Dinge diese Woche:**\n1. Deploy Tool v2 ist live – Nginx-Konflikt behoben, Site funktioniert.\n2. Zwei Kundendemos; Die wichtigste Frage war die Ein-Klick-Bereitstellung.\n3. Das Prompt-Labor hat 6 reale Fälle mit Parallelsimulation erhalten.\n\n**Blocker:** Bei schwachen Netzwerken kommt es bei der Umgebungsprüfung manchmal zu Zeitüberschreitungen. Nächste Woche wird ein erneuter Versuch hinzugefügt.\n\n**Weiter:** bessere Erkennung, Optimierungen des Eingabeaufforderungsmoduls, Demo-Skript."
              }
            ],
            realGuide: {
              tools: [
                "ChatGPT",
                "Qwen",
                "Kimi"
              ],
              steps: [
                "Kopieren Sie die generierte Eingabeaufforderung (oder Benutzernachricht) aus dem Chat",
                "ChatGPT / Qwen öffnen, neuer Chat, einfügen",
                "Ersetzen Sie sie durch Ihre echten wöchentlichen Highlights im Kontext",
                "Iterieren: „kürzer“, „E-Mail-Version“, „Metriken hervorheben“"
              ],
              link: {
                label: "Weitere Vorlagen für Schreibszenarien",
                href: "#practice"
              }
            }
          },
          {
            id: "meeting-notes",
            title: "Bereinigung von Besprechungsnotizen",
            scene: "Zusammenarbeit bei Besprechungen",
            task: "会议纪要",
            role: "Leitender Assistent der Geschäftsleitung",
            context: "Produktbewertung für das BestWayToLearn.AI-Lernpfad-Unternehmensmodul. Teilnehmer: Alex (PM), Blake (Eng), Casey (Design). Alex will Q3-Auftakt; Blake macht sich Sorgen um die Mitarbeiterzahl und bevorzugt MVP; Casey möchte ein einheitliches visuelles System. Mündliche Aufgaben: Blakes technische Beurteilung in zwei Wochen; Casey-Komponenteninventar.",
            output: "Strukturiertes Protokoll: Entscheidungen, Todos (Inhaber + Fälligkeitsdatum), offene Fragen",
            tone: "Prägnant und direkt",
            response: "## Sitzungsprotokoll\n\n**Thema**: BestWayToLearn.AI-Lernpfad · Überprüfung des Unternehmensmoduls\n**Zeit**: 25.06.2026 14:00–15:00 Uhr\n**Teilnehmer**: Alex (PM), Blake (Eng), Casey (Design)\n\n### Wichtige Entscheidungen\n1. **Unternehmensausrichtung genehmigt**, aber noch nicht vollständig eingeführt – MVP validiert als erster die Kernhypothese.\n2. **Visuelles System zuerst**: Unternehmensseiten müssen die gemeinsam genutzte Komponentenbibliothek wiederverwenden.\n\n### Aktionselemente\n| Artikel | Eigentümer | Fällig |\n|------|-------|-----|\n| Tech-Bewertung des Enterprise MVP (Aufwand/Risiken/Abhängigkeiten) | Blake | 9. Juli |\n| Bestand und Lücken in der Komponentenbibliothek | Casey | 5. Juli |\n| Aktualisierung des Q3-Roadmap-Entwurfs aus der Bewertung | Alex | 12. Juli |\n\n### Offene Fragen\n- MVP-Umfang: Nur Tool bereitstellen oder Quizberichte einschließen?\n- Separate Preisseite und Testablauf erforderlich?\n\n---\nBenötigen Sie eine Hintergrundzusammenfassung oder ein Feishu/DingTalk-Aufgabenformat?",
            followups: [
              {
                user: "Konvertieren Sie in das Feishu-ToDo-Format",
                ai: "【Feishu-Todos】\n\n☐ Enterprise MVP Tech Assessment – @Blake – fällig am 9. Juli\n☐ Lücken in der Komponentenbibliothek – @Casey – fällig am 5. Juli\n☐ Aktualisierung der Q3-Roadmap – @Alex – fällig am 12. Juli\n\nOffen: MVP-Bereich; Preis-/Testseite."
              }
            ],
            realGuide: {
              tools: [
                "Kimi",
                "Claude",
                "Qwen"
              ],
              steps: [
                "Fügen Sie nach dem Meeting das Transkript oder grobe Notizen in AI ein",
                "Verwenden Sie die strukturierte Eingabeaufforderung dieses Falles. Notieren Sie die Teilnehmer und Ihren Fokus",
                "Bestätigte Aufgaben mit Feishu/DingTalk/Notion synchronisieren",
                "Bestätigte Aufgaben mit Feishu/DingTalk/Notion synchronisieren"
              ],
              link: {
                label: "Kimi Long-Dokument zum Anfassen",
                href: "#hands-on"
              }
            }
          },
          {
            id: "code-debug",
            title: "Korrigieren Sie die Division durch Null in Python",
            scene: "Code-Debugging",
            task: "代码开发",
            role: "Leitender Python-Ingenieur",
            context: "Funktion mittelt positive Zahlen; stürzt bei leerer Liste ab. Code:\ndef avg_positive(nums):\n    pos = [n für n in Zahlen, wenn n > 0]\n    Rückgabesumme(pos) / len(pos)",
            output: "## Ursache\n\nWenn „nums“ leer ist oder keine positiven Werte enthält, ist „pos“ leer, „len(pos)“ ist 0 und „sum(pos) / len(pos)“ löst **ZeroDivisionError** aus.\n\n## Fester Code\n\n„Python\ndef avg_positive(nums):\n    „“„Gibt den Durchschnitt positiver Zahlen zurück; Keine, wenn keine.“““\n    wenn nicht Zahlen:\n        return Keine\n    pos = [n für n in Zahlen, wenn n > 0]\n    wenn nicht pos:\n        return Keine\n    Rückgabesumme(pos) / len(pos)\n\n\nbehaupten avg_positive([1, -2, 3, 4]) == 2,5\naffirm avg_positive([-1, -2]) ist None\naffirm avg_positive([]) ist None\nprint(\"Alle Tests bestanden\")\n„\n\n## Notizen\n1. **Filtern, dann schützen** – niemals durch die Länge einer leeren Liste dividieren.\n2. **Keine zurückgeben**, wenn keine positiven Ergebnisse vorliegen; Aufrufer verzweigen mit „if result is None“.\n3. Geben Sie stattdessen „0,0“ zurück, wenn Geschäftsregeln dies erfordern.\n\nMöchten Sie eine benutzerdefinierte Ausnahme oder eine typisierte Version?",
            tone: "Klar und zugänglich",
            response: "## Ursache\n\nWenn „nums“ leer ist oder keine positiven Werte enthält, ist „pos“ leer, „len(pos)“ ist 0 und „sum(pos) / len(pos)“ löst **ZeroDivisionError** aus.\n\n## Fester Code\n\n„Python\ndef avg_positive(nums):\n    „“„Gibt den Durchschnitt positiver Zahlen zurück; Keine, wenn keine.“““\n    wenn nicht Zahlen:\n        return Keine\n    pos = [n für n in Zahlen, wenn n > 0]\n    wenn nicht pos:\n        return Keine\n    Rückgabesumme(pos) / len(pos)\n\n\nbehaupten avg_positive([1, -2, 3, 4]) == 2,5\naffirm avg_positive([-1, -2]) ist None\naffirm avg_positive([]) ist None\nprint(\"Alle Tests bestanden\")\n„\n\n## Notizen\n1. **Filtern, dann schützen** – niemals durch die Länge einer leeren Liste dividieren.\n2. **Keine zurückgeben**, wenn keine positiven Ergebnisse vorliegen; Aufrufer verzweigen mit „if result is None“.\n3. Geben Sie stattdessen „0,0“ zurück, wenn Geschäftsregeln dies erfordern.\n\nMöchten Sie eine benutzerdefinierte Ausnahme oder eine typisierte Version?",
            followups: [],
            realGuide: {
              tools: [
                "Claude Code",
                "DeepSeek",
                "Claude.ai"
              ],
              steps: [
                "Wählen Sie in Cursor/VS-Code den fehlerhaften Code aus und öffnen Sie den AI-Chat (Strg+L).",
                "Fügen Sie den vollständigen Stack-Trace + Codekontext ein – nicht nur eine Zeile",
                "Fragen Sie: Erklären → Korrigieren → Tests hinzufügen, gleiche Struktur wie in diesem Fall",
                "Führen Sie „python test.py“ vor dem Festschreiben lokal aus"
              ],
              link: {
                label: "Cursor-Codierung zum Anfassen",
                href: "#hands-on"
              }
            }
          },
          {
            id: "xhs-copy",
            title: "Beitrag im Xiaohongshu-Stil",
            scene: "E-Commerce-Marketing",
            task: "内容写作",
            role: "Leitender Xiaohongshu-Betreiber",
            context: "3 Titel + Beitrag mit ca. 250 Wörtern + 5 Hashtags + Kommentar-CTA",
            output: "3 Titel + Beitrag mit ca. 250 Wörtern + 5 Hashtags + Kommentar-CTA",
            tone: "Klar und zugänglich",
            response: "### Titeloptionen\n1. Pendeln Sie in 5 Minuten ｜Mein tragbarer Kaltbrühbecher ☕\n2. Kaffee-Hack fürs Büro – kein Einweichen über Nacht nötig\n3. Minimaler Becher mit der Frage „Wo ist der Link?“ bei der Arbeit\n\n### Text (~250 Wörter)\nFrüher bedeutete Cold Brew, dass man es über Nacht einweichen musste – und beim Pendeln verschüttetes Wasser. Dieser tragbare Becher hat meine Routine verändert: **Fünf Minuten** und ich habe einen glatten Becher auf meinem Schreibtisch.\n\nWas mir gefällt:\n✅ **Doppelwandig** – warm oder kalt, angenehm zu halten\n✅ **Sauberes Aussehen** – schreit nicht auf dem Schreibtisch, Fotos gut\n\nIch bereite den Boden am Vorabend vor, füge morgens Wasser hinzu und bin fertig, wenn ich ankomme. Spart gegenüber Lieferung und reduziert Einwegbecher.\n\nFür Pendler, die ein einfaches Ritual ohne Überlastung der Ausrüstung wünschen – keine Barista-Ausrüstung, aber **alltagstauglich**.\n\n### Hashtags\n#Coldbrew #Commuteessentials #OfficeCoffee #PortableCup #WorkFuel\n\n### Kommentar-CTA\nHeißes oder kaltes Gebräu auf dem Weg zur Arbeit? Teilen Sie es unten – ich werde eine Brauanleitung „Eine Woche, keine Wiederholung“ veröffentlichen.\n\n---\nMöchten Sie eine lebendigere Version oder eine Rezensionsversion?",
            followups: [],
            realGuide: {
              tools: [
                "ChatGPT",
                "ERNIE Bot",
                "Claude"
              ],
              steps: [
                "Holen Sie sich zuerst 3 Titel und erweitern Sie dann den Titel, der Ihnen gefällt",
                "Holen Sie sich zuerst 3 Titel und erweitern Sie dann den Titel, der Ihnen gefällt",
                "Menschliche Kontrolle: Werberecht, Markenton, Preisgestaltung",
                "Kombinieren Sie es mit Midjourney / Tongyi Wanxiang für Produktszenenbilder"
              ],
              link: {
                label: "Bilderzeugung zum Anfassen",
                href: "#hands-on"
              }
            }
          },
          {
            id: "market-brief",
            title: "7-tägiger Marktbrief",
            scene: "Unternehmensforschung",
            task: "竞品调研",
            role: "Branchenanalyst",
            context: "400-Wörter-Briefing: 3 Schlagzeilen + SMB-Auswirkungen + 2 Beobachtungsvariablen nächste Woche",
            output: "400-Wörter-Briefing: 3 Schlagzeilen + SMB-Auswirkungen + 2 Beobachtungsvariablen nächste Woche",
            tone: "Professionell und streng",
            response: "## Grenzüberschreitender E-Commerce 7-Tage-Brief (Demostruktur)\n\n> ⚠️ Lehrdemo – Wiederholen Sie den Abruf in Perplexity / Metaso vor der tatsächlichen Verwendung.\n\n### Schlagzeilen\n1. **Amazon hat die Compliance-Stichproben in einigen Kategorien verstärkt** (Zusammenfassung des Verkäuferforums) – KMU benötigen CPC-/Label-Dokumente.\n2. **TikTok Shop SEA-Onboarding-Push** (offizielle Seite) – Q3-Gebührenaktionen für Verkäufer mit Kurzvideofunktion.\n3. **Indie SaaS bündelt KI-Site-Builder + mehrsprachige Pakete** (Shopify-Änderungsprotokoll) – niedrigere Build-Hürde, SEO immer noch in Betreiberbesitz.\n\n### Auswirkungen auf KMU\n- **Compliance-Kosten steigen**: Unvollständige Dokumente riskieren die Entfernung aus der Liste – Kategorie-Checklisten beibehalten.\n- **Kanaldiversifizierung**: Das Risiko, nur Amazon zu nutzen, steigt; TikTok/Indie-Stores als inkrementelle Kanäle.\n- **Werkzeuge billiger, Operationen schwieriger**: Das Bauen ist einfacher; Die Konvertierung hängt von Inhalten und Anzeigen ab.\n\n### Nächste Woche ansehen\n1. Logistikzuschläge in der Hauptsaison (Seiten mit den Tarifen der Spediteure).\n2. Änderungen im Bereich der US-/EU-Einfuhrdeklaration (Zoll- und Plattformverkäuferhinweise).\n\n---\nMöchten Sie „nur Amazon“ oder eine Vergleichstabelle mit Mitbewerbern?",
            followups: [],
            realGuide: {
              tools: [
                "Verwirrung",
                "Metaso KI-Suche",
                "ChatGPT"
              ],
              steps: [
                "Verwenden Sie Perplexity/Metaso zum Abrufen **zitierter** – nicht nur für das Modellgedächtnis",
                "Ergebnisse in ChatGPT einfügen; in dieses kurze Format komprimieren",
                "Überprüfen Sie jeden Quelllink; Lassen Sie nicht überprüfbare Gegenstände fallen",
                "Planen Sie tägliche Briefings mit OpenClaw Cron (siehe Praxisbeispiel)"
              ],
              link: {
                label: "Feynman: Transformator",
                href: "#hands-on"
              }
            }
          },
          {
            id: "feynman-transformer",
            title: "Feynman: Transformator",
            scene: "Lernunterstützung",
            task: "学习辅导",
            role: "Geduldiger Lehrer, der Analogien verwendet",
            context: "Thema: Transformer-Selbstaufmerksamkeit. Ich bin ein Produktmanager ohne Deep-Learning-Hintergrund; 10 Minuten, um zu verstehen, welches Problem es im Vergleich zu RNN löst.",
            output: "Einfache Analogie + 3 Missverständnisse + 2 Multiple-Choice-Fragen mit Erklärungen",
            tone: "Klar und zugänglich",
            response: "## Transformer verstehen mit Feynman\n\n### Ein Satz\nMit Transformer kann das Modell **alle Wörter auf einmal sehen und entscheiden, worauf es sich konzentrieren möchte**, um so lange Sätze und entfernte Beziehungen besser zu verstehen.\n\n### Analogie\nTreffen mit 20 Referenten:\n- **RNN** = Zeile für Zeile Notizen machen – frühe Sprecher vergessen leicht.\n- **Transformer (Selbstaufmerksamkeit)** = alles auf einer Wandtafel – Sie verknüpfen „Budget“ von Sprecher 3 mit der abschließenden Zusammenfassung.\n\n### Probleme, die es löst\n1. **Langstreckenabhängigkeiten**: „Wegen Regen habe ich den Outdoor-Start in Shanghai abgesagt“ – „Regen“ und „abgesagt“ liegen weit auseinander; Aufmerksamkeit verbindet sie direkt.\n2. **Paralleles Training**: Ganze Sätze auf einmal verarbeiten – schneller als RNN Schritt für Schritt – ermöglicht große Modelle.\n\n### Missverständnisse\n| Mythos | Realität |\n|------|---------|\n| Transformer = nur Übersetzung | Allgemeine Architektur – GPT, BERT, multimodale Modelle verwenden sie |\n| Aufmerksamkeit = menschliche Aufmerksamkeit | Mathematische Gewichte gegenüber anderen Token |\n| Mehr Schichten = immer besser | Daten, Training und Aufgabenanpassung sind wichtig |\n\n### Quiz\n**F1**: Hauptvorteil der Selbstaufmerksamkeit gegenüber RNN?\nA. Nur Englisch B. Langstreckendeps + Parallelität C. Kein Training D. Keine Halluzination\n**Antwort: B**\n\n**F2**: Beseitigt Transformer allein Halluzinationen?\nA. Ja B. Nein – Abruf, Werkzeuge, menschliche Überprüfung erforderlich\n**Antwort: B**\n\n---\nFragen Sie nach Q/K/V oder wie dies mit GPT zusammenhängt.",
            followups: [
              {
                user: "Erklären Sie Q/K/V mit einer Bildmetapher",
                ai: "Denken Sie an **Bibliothekssuche**:\n\n- **Abfrage**: Welches Thema möchten Sie?\n- **Schlüssel**: Etikett auf jedem Buchrücken\n- **Wert**: Inhalt im Buch\n\nDas Modell bewertet, wie gut sein Q mit jedem K übereinstimmt, und ermittelt dann mehr aus den übereinstimmenden V-Werten.\n\nSelbstaufmerksamkeit = **gewichteter Kontextmix**, keine Magie.\n\n(In der Praxis fragen Sie ChatGPT nach einem Meerjungfrauendiagramm.)"
              }
            ],
            realGuide: {
              tools: [
                "ChatGPT",
                "Claude",
                "Verwirrung"
              ],
              steps: [
                "Geben Sie an, wer Sie sind, was Sie wissen, was Sie verstehen möchten (wie in diesem Fall)",
                "Bitten Sie um Analogie + Quiz; Beantworten Sie sofort den Selbsttest",
                "Follow-up „Warum nicht A?“ auf falsche Optionen",
                "Kombinieren Sie es mit den KI-Grundlagenmodulkarten dieser Website"
              ],
              link: {
                label: "Modul „KI-Grundlagen“.",
                href: "#fundamentals"
              }
            }
          }
        ]
      },
      monetize: {
        categories: {
          "全部": "Alle",
          "内容创作": "Inhaltserstellung",
          "技术服务": "Technische Dienstleistungen",
          "自动化": "Automatisierung",
          "知识服务": "Wissensdienste",
          "教育培训": "Bildung und Ausbildung"
        },
        meta: {
          lead: "Nachdem Sie die Tools auf dieser Website kennengelernt haben, müssen Sie nicht über Nacht ein „KI-Ingenieur“ werden. Ein realistischer Weg: Nutzen Sie KI, um Ihre vorhandenen Fähigkeiten in den Bereichen Inhalt, Design, Automatisierung, Forschung und Schulung um das Drei- bis Zehnfache zu erweitern – als Freiberufler oder als Nebenverdiener. Alle 30 unten aufgeführten Anweisungen verwenden die von uns abgedeckten Tools. Barrieren sind überschaubar; Beginnen Sie mit kleinen bezahlten Validierungen.",
          workTypes: [
            {
              label: "Inhaltserstellung",
              desc: "Artikel, kurzes Video, Podcast – KI-Entwürfe und Visuals; Sie bestimmen das Thema und den Ton"
            },
            {
              label: "Technische Dienstleistungen",
              desc: "Bot-Builds, Skripte, Landingpages – projektbasierte Gebühren"
            },
            {
              label: "Automatisierung",
              desc: "Workflow-Integration, geplante Briefings – monatliche Wartung oder Einrichtung pro Lauf"
            },
            {
              label: "Wissensdienste",
              desc: "Forschungsberichte, Informationspakete, Branchenvorlagen – im Abonnement oder einmalig"
            },
            {
              label: "Bildung und Ausbildung",
              desc: "Unternehmensworkshops, Community-Coaching – bringen Sie anderen KI-Produktivität bei"
            }
          ],
          principles: [
            "Versenden Sie einen Portfolio-Koffer, bevor Sie ein Angebot abgeben",
            "Definieren Sie Grenzen für die menschliche Überprüfung – liefern Sie keine rohen KI-Ausgaben als endgültig",
            "Verketten Sie 2–3 Tools in einer Pipeline – mehr wert als die Verwendung eines einzelnen Tools",
            "Verketten Sie 2–3 Tools in einer Pipeline – mehr wert als die Verwendung eines einzelnen Tools"
          ]
        },
        ui: {
          deliverables: "Leistungen:",
          monetize: "Monetarisierung:",
          channels: "Notiz:",
          note: "Notiz:",
          difficulty: {
            "入门": "Anfänger",
            "进阶": "Dazwischenliegend",
            "高级": "Fortschrittlich"
          }
        },
        projects: [
          {
            title: "Verwaltung der Social-Content-Matrix",
            category: "Inhaltserstellung",
            difficulty: "Anfänger",
            income: "280–1.100 $/Monat",
            desc: "Pflegen Sie WeChat/Xiaohongshu/Douyin für lokale Unternehmen, YouTuber oder kleine Marken – KI-Batch-Themen, Texte, Cover und Videoskripte; Du kümmerst dich um Kadenz und Analysen.",
            deliverables: "3–5 Beiträge/Woche + 2 Videoskripte + Cover-Asset-Paket",
            monetize: "Monatlicher Vorschuss (210–700 $/Konto); oder pro Stück (12–28 $ per Post, 22–55 $ Skript)",
            channels: "Auftritte in Xiaohongshu, Marktplätze, Empfehlungen, lokale Öffentlichkeitsarbeit",
            steps: [
              "Wählen Sie eine Branche (Essen, Bildung, Schönheit) und ein Demo-Inhaltsset aus",
              "ChatGPT 7-Tage-Themenkalender; Midjourney/Kling für Visuals",
              "Kostengünstiger Testmonat im ersten Monat, um den ersten Kunden zu gewinnen",
              "Nutzen Sie Lese-/Follower-Screenshots als Fallstudien, um die Quoten zu erhöhen"
            ],
            tip: "Überarbeitungsrunden und Originalität im Voraus vereinbaren; Sensible Branchen benötigen eine abschließende menschliche Überprüfung."
          },
          {
            title: "Bot zur Unterstützung der Wissensdatenbank des Unternehmens",
            category: "Technische Dienstleistungen",
            difficulty: "Dazwischenliegend",
            income: "420–2.800 $/Projekt",
            desc: "Verwandeln Sie Produkthandbücher, FAQ und interne Dokumente in Konversations-Bots im Web, Feishu oder WeChat – reduzieren Sie den sich wiederholenden Support.",
            deliverables: "Wissenskuration + Bot-Flows + Admin-Leitfaden + Go-Live",
            monetize: "Einmalige Implementierung; optionale jährliche Wartung (70–280 $/Monat)",
            channels: "B2B-Gruppen, Feishu-Ökosystem, freiberufliche Plattformen, Empfehlungen der Entwickler-Community",
            steps: [
              "NotebookLM organisiert Client-PDFs in Frage-und-Antwort-Paare",
              "Erstellen Sie RAG in Dify oder Coze; Testtrefferquote",
              "3-minütiges Demovideo als Verkaufsargument",
              "Erster Kunde zum halben Preis für Fallstudie + Testimonial"
            ],
            tip: "Vertrag: Dateneigentum und Aktualisierungsrhythmus; Antworten mit der Aufschrift „nur als Referenz“."
          },
          {
            title: "Outsourcing von visuellem E-Commerce-Design",
            category: "Inhaltserstellung",
            difficulty: "Anfänger",
            income: "420–2.100 $/Monat",
            desc: "Hauptbilder, Detailseiten, Werbeplakate, einfache Decks für Marktplatzverkäufer – schnelle KI-Bilder; Sie kümmern sich um den Markenton und die Kundenkommunikation.",
            deliverables: "5 Hauptbilder/Set, Detailschnitte, Promo-Poster, optionales Deck",
            monetize: "Hauptbildsatz 28–110 $; Detailseite 70–280 $; Ansturm +30 %",
            channels: "Taobao-Dienste, Marktplätze, Designkonten, Verkäufergruppen",
            steps: [
              "3 Mustersets in allen Kategorien (Lebensmittel/3C/Bekleidung)",
              "Midjourney/Flux-Eingabeaufforderungsvorlagen für mehr Geschwindigkeit",
              "„24h erster Entwurf“ als Verkaufsargument",
              "Verkaufen Sie monatliche visuelle Retainer an Stammkunden"
            ],
            tip: "Bestätigen Sie die Modelllizenz vor der kommerziellen Nutzung. Füttere keine nicht lizenzierten Logos."
          },
          {
            title: "Direkter Packungsverkauf in der vertikalen Industrie",
            category: "Wissensdienste",
            difficulty: "Anfänger",
            income: "140–1.400 $/Monat",
            desc: "Packen Sie Prompt-Erfahrungen aus den Bereichen Recht, HR, E-Commerce oder EdTech als Copy-Paste-Vorlagen mit Leitfäden und Vorher/Nachher-Beispielen.",
            deliverables: "20–50 strukturierte Eingabeaufforderungen + Szenarionotizen + 1-seitiger Schnellstart",
            monetize: "Xiaohongshu, Newsletter, soziale Apps, Branchen-WeChat-Gruppen",
            channels: "Xiaohongshu, Newsletter, soziale Apps, Branchen-WeChat-Gruppen",
            steps: [
              "Tauchen Sie tief in eine Branche ein, die Sie kennen – 10 Hochfrequenzszenarien",
              "Validierung im Sofortlabor; Screenshot-Vergleiche",
              "Gamma 10-seitige Verkaufsseite",
              "Fügen Sie „3-Monats-Updates“ zur Aufbewahrung hinzu"
            ],
            tip: "Vorlagen sind Ausgangspunkte; Fügen Sie eine Checkliste für die menschliche Überprüfung hinzu."
          },
          {
            title: "Integration der KI-Workflow-Automatisierung",
            category: "Automatisierung",
            difficulty: "Dazwischenliegend",
            income: "700–4.200 $/Projekt",
            desc: "Verbinden Sie verstreute Tools: E-Mail-Leads → Tabellenkalkulation → KI-Zusammenfassung → Slack/Feishu → wöchentliches Rollup – weniger Kopieren und Einfügen.",
            deliverables: "Flussdiagramm + n8n/OpenClaw-Workflow + Warnungen + Runbook",
            monetize: "Implementierung nach Knotenkomplexität; Wartung 110–420 $/Monat",
            channels: "IT-Outsourcing, SaaS-Communities, LinkedIn, Verlängerungen",
            steps: [
              "Demo eines universellen Szenarios (täglicher Verkaufsbericht, Beobachtung der Konkurrenz)",
              "n8n: Gmail/sheets/Slack minimale Schleife",
              "OpenClaw für geplante Briefings",
              "Einwöchiges Pilotprojekt vor vollständiger Bezahlung"
            ],
            tip: "Der Kunde verfügt über Anmeldeinformationen; Protokolle für Audit und Debugging."
          },
          {
            title: "KI-synchronisierte Kurzvideoproduktion",
            category: "Inhaltserstellung",
            difficulty: "Anfänger",
            income: "14–110 $/Video",
            desc: "Voiceover-Kurzfilme für YouTuber, lokale Unternehmen, Schulungen – Klon oder TTS, KI-Visuals und Hintergrundmusik; Sie bearbeiten Rhythmus und Untertitel.",
            deliverables: "60er-Jahre-Vertikalvideo, SRT, Coverrahmen, optionale lizenzfreie Hintergrundmusik",
            monetize: "Pro Video; 10 Videos monatlich (280–840 $); Zusätzliche Gebühr für die Einrichtung des Klons",
            channels: "Douyin-Dienste, Bilibili-Ersteller, Schulungsanbieter, Marktplätze",
            steps: [
              "Ein vollständiges Fish Audio/ElevenLabs-Beispiel im Laden",
              "Kling/Runway-B-Roll zur Senkung der Live-Shooting-Kosten",
              "Kling/Runway-B-Roll zur Senkung der Live-Shooting-Kosten",
              "Veröffentlichte Preisliste für 3-Tage-Lieferung"
            ],
            tip: "Nur autorisierte Stimmen klonen; Kennzeichnen Sie KI-Inhalte nach Plattformregeln."
          },
          {
            title: "Kurzabonnement für Branchenforschung",
            category: "Wissensdienste",
            difficulty: "Dazwischenliegend",
            income: "14–70 $/Monat pro Abonnent",
            desc: "Wöchentliche Briefings für Investoren, PMs, Betriebsleiter – Markteinführungen von Wettbewerbern, Richtlinien, Finanzierung; KI sammelt, Sie kuratieren und kommentieren.",
            deliverables: "Einzelner Sub; Teamsitze (5+); Benutzerdefinierte ausführliche Berichte (über 280 $)",
            monetize: "Einzelner Sub; Teamsitze (5+); Benutzerdefinierte ausführliche Berichte (über 280 $)",
            channels: "Bezahlte Communities, Newsletter, private Gruppen, OpenClaw Push",
            steps: [
              "Nische auswählen (KI-Tools, grenzüberschreitender E-Commerce); 4 kostenlose Ausgaben",
              "Ratlosigkeit/Metaso versammeln sich; NotebookLM-Querzusammenfassung",
              "OpenClaw-Montagsentwurf, Sie polieren am Dienstag",
              "100 Abonnenten → Preise für Unternehmensgruppen"
            ],
            tip: "Zitieren Sie alle Behauptungen; Haftungsausschluss – keine Anlage- oder Rechtsberatung."
          },
          {
            title: "420–1.680 $/Projekt",
            category: "Technische Dienstleistungen",
            difficulty: "Anfänger",
            income: "420–1.680 $/Projekt",
            desc: "Unternehmer/PMs erhalten innerhalb von 1–3 Tagen eine Demo-Landingpage oder ein leichtes Web-MVP – für Fundraising, Validierung oder Beta-Anmeldung.",
            deliverables: "Responsive Landing + Formularerfassung + grundlegende SEO + Bereitstellungslink",
            monetize: "Standardseite ab 420 $; einfaches Backend/Zahlungsextra; 48-Stunden-Ansturm +50 %",
            channels: "Gründergemeinschaften, chinesischer PH-Kreis, Empfehlungen, Indie-Entwicklergruppen",
            steps: [
              "Bolt.neues Skelett, Cursor-Polish UX",
              "2 Stil-Fallstudien (SaaS / Verbrauchermarke)",
              "Angebotsblatt: Revisionsrunden und Hosting",
              "15-minütige Bildschirmaufzeichnung, damit der Kunde die Kopie bearbeiten kann"
            ],
            tip: "Datenverarbeitung und Skriptanpassung"
          },
          {
            title: "Datenverarbeitung und Skriptanpassung",
            category: "Technische Dienstleistungen",
            difficulty: "Dazwischenliegend",
            income: "140–2.100 $/Projekt",
            desc: "Python/JS-Dienstprogramme für Betrieb, Finanzen, Marketing – Excel-Bereinigung, Batch-Umbenennung, Light Scraper, automatische Berichte – für Nicht-Programmierer mit repetitiver Arbeit.",
            deliverables: "Ausführbares Skript + README + eine Online-Anleitung",
            monetize: "Stündlich oder fest; 30 % Anzahlung bei komplexem Umfang",
            channels: "Freiberufliche Plattformen, Remote-Arbeitsgemeinschaften, WeChat-Outsourcing, Empfehlungen",
            steps: [
              "Zwei Demos zum Zusammenführen/Deduplizieren von Excel im Portfolio",
              "Cursor/Aider schnelle Lieferung mit Kommentaren",
              "Bieten Sie einmalig oder Wartung separat an",
              "Quelle liefern; Bringen Sie dem Kunden das Laufen bei – weniger Unterstützung"
            ],
            tip: "Bestätigen Sie die Legalität des Schabers. Bewahren Sie Kundendaten nicht in Ihrer Cloud auf."
          },
          {
            title: "KI-Training und Coaching für Unternehmen",
            category: "Bildung und Ausbildung",
            difficulty: "Dazwischenliegend",
            income: "420–1.120 $/halber Tag; Coaching ab 280 $/Monat",
            desc: "Nicht-technische Teams (Marketing, Verwaltung, Vertrieb) – Werkzeugauswahl, Eingabeaufforderungen, Büroszenarien; optionales 30-tägiges WeChat-Coaching.",
            deliverables: "2–4-stündiger Workshop + Szenariohandbuch + Hausaufgaben + optionales Coaching",
            monetize: "Corporate pro Sitzung; kleine Gruppen (28–84 $/Person); jährliches Beraterpaket",
            channels: "HR-Kontakte, Schulungsvermittler, Mundpropaganda, Alumni-Empfehlungen",
            steps: [
              "Kondensieren Sie den 7-Tage-Pfad in einen Halbtages-Intensivkurs",
              "Gamma-Folien; Live-Demo 3 Rollenszenarien",
              "Sammeln Sie Fallstudien zu Zufriedenheit und Effizienz",
              "Erster Firmenkunde: kostenloses monatliches Coaching für Fallrechte"
            ],
            tip: "Betonen Sie Compliance und Sicherheit – keine vertraulichen Daten in öffentlichen Cloud-Modellen."
          },
          {
            title: "Kopie des grenzüberschreitenden E-Commerce-Eintrags",
            category: "Inhaltserstellung",
            difficulty: "Anfänger",
            income: "11–42 $/Eintrag",
            desc: "Amazon-, Shopee-, Temu-Titel, Aufzählungszeichen, A+-Kopie in Englisch/mehrsprachig mit Suchbegriffoptimierung.",
            deliverables: "Titel + Aufzählungszeichen + Schlüsselwortblatt + optionale ES/JA-Versionen",
            monetize: "Pro SKU; Store-Paket (50+); Ansturm in der Hauptsaison +30 %",
            channels: "Verkäufergruppen, Foren, Freelance-Plattformen, Agenturen",
            steps: [
              "3 Benchmark-Einträge in der bekannten Kategorie",
              "Verwirrung bei Marktsuchbegriffen und Konkurrenzkopien",
              "Claude mehrsprachiges Polnisch; Menschen überprüfen kulturelle Tabus",
              "„7-Tage-Startpaket“ für Kleinverkäufer"
            ],
            tip: "Keine falschen Behauptungen oder Markenmissbrauch; Vermeiden Sie verbotene Kategorien."
          },
          {
            title: "Outsourcing der KI-Podcast-Produktion",
            category: "Inhaltserstellung",
            difficulty: "Anfänger",
            income: "Verwandeln Sie lange Artikel oder Interviewnotizen in Podcasts – KI-Skript, Intro-Musik, Voice-Over; Sie bearbeiten und leiten den Vertrieb.",
            desc: "Verwandeln Sie lange Artikel oder Interviewnotizen in Podcasts – KI-Skript, Intro-Musik, Voice-Over; Sie bearbeiten und leiten den Vertrieb.",
            deliverables: "15–30 Min. Audio + Shownotizen + Cover + Vertriebsleitfaden",
            monetize: "Pro Folge; Rabatt auf eine Staffel mit 10 Folgen; benutzerdefiniertes Intro-Extra",
            channels: "Podcast-Host-Communities, Eigentümer von Wissens-Communitys, Markenteams",
            steps: [
              "NotebookLM-Artikel → Dialogskript",
              "Suno-Intro; ElevenLabs/Fish Audio-Stimme",
              "Ein vollständiges Beispiel auf der Podcast-Plattform",
              "Monatliches Abonnement für 2 Folgen zur Aufbewahrung"
            ],
            tip: "Bestätigen Sie die kommerziellen Rechte an Musik und Sprache. Endgültige Kundenmeinungen."
          },
          {
            title: "Hörbuch-/Kurs-Kommentarservice",
            category: "Inhaltserstellung",
            difficulty: "Anfänger",
            income: "2–6 $ pro 1.000 Wörter",
            desc: "Autoren und Trainer wandeln E-Books, Vorträge und Handbücher in professionelles Audio um – mehrsprachig, schnell, Kapitelaufteilung.",
            deliverables: "Kapitel MP3s + Timeline + Intro/Outro + einfaches Cover",
            monetize: "Pro Wort/Dauer; Gesamtbuchpaket; Langzeitrabatt",
            channels: "Autorengemeinschaften, Schreibplattformen, Schulungsorganisationen, Unternehmensadministration",
            steps: [
              "Gemeinfreies Kapitel als Sprachprobe",
              "ChatGPT-Vorprozess (Interpunktion, Heteronyme)",
              "Fisch-Audio für Chinesisch; ElevenLabs für Englisch",
              "Vertrag: Überarbeitungsrunden und Bearbeitungszeit (~3–5 Tage/10.000 Wörter)"
            ],
            tip: "Urheberrechtlich geschützte Inhalte nur mit Rechten; Das Klonen von Stimmen erfordert eine schriftliche Zustimmung."
          },
          {
            title: "Lebenslauf- und Interview-Coaching-Finish",
            category: "Wissensdienste",
            difficulty: "Anfänger",
            income: "14–70 $/Lebenslauf",
            desc: "Optimieren Sie EN/CN-Lebensläufe, Portfolio-Klappentexte und Interview-Fragen und Antworten mit Ziel-JD mit STAR-Geschichten.",
            deliverables: "1–2 Lebenslaufversionen + Anschreiben + 10 Fragen und Antworten zu Vorstellungsgesprächen",
            monetize: "Grundpolitur 14 $; fortgeschritten mit Scheininterview 42–70 $; LinkedIn-Add-on",
            channels: "Influencer für die Jobsuche, Campus-Karrieregruppen, Marktplätze, Foren",
            steps: [
              "5 anonymisierte Vorher/Nachher-Fälle (mit Genehmigung)",
              "Ratlosigkeit Firmen-/Rollenschlüsselwörter",
              "Claude erzählerischer Schliff; Behalte wahrheitsgetreue Erfahrungen",
              "„7-Tage-Zufriedenheitsrevisionen“ zur Verringerung der Reibung"
            ],
            tip: "Fälschen Sie niemals Anmeldeinformationen; keine garantierten Arbeitsergebnisse."
          },
          {
            title: "Unterstützung bei der Erstellung von Verträgen und Rechtsdokumenten",
            category: "Wissensdienste",
            difficulty: "Dazwischenliegend",
            income: "42–280 $/Dokument",
            desc: "Mietvertragsentwürfe, Kooperationen, NDA, Arbeitsverträge für KMUs und Freiberufler – klare Klauseln zur anwaltlichen/juristischen Prüfung.",
            deliverables: "Word-Entwurf + Klauselnotizen + Risiko-Checkliste (kein Rechtsgutachten)",
            monetize: "Standardvertrag 42–110 $; individuell nach Komplexität",
            channels: "Bibliothek mit 10 gängigen Vorlagen (vom Anwalt geprüftes Ideal)",
            steps: [
              "Bibliothek mit 10 gängigen Vorlagen (vom Anwalt geprüftes Ideal)",
              "NotebookLM-Kundenhintergrund + Referenzverträge",
              "Entwurf mit Haftungsausschluss „erfordert anwaltliche Prüfung“.",
              "Gegenseitige Empfehlungsschleife mit lokalen Anwaltskanzleien"
            ],
            tip: "Keine Rechtsberatung; Keine Rechtsstreitigkeiten oder Beteiligungsgeschäfte."
          },
          {
            title: "Bericht zur Konkurrenz- und SEO-Content-Strategie",
            category: "Wissensdienste",
            difficulty: "Dazwischenliegend",
            income: "110–700 $/Bericht",
            desc: "Content-Matrix-Analyse, Keyword-Möglichkeiten, 90-Tage-Kalender für Marken und Indie-Site-Betreiber.",
            deliverables: "20–40-seitiger Bericht + Keyword-Blatt + 90-Tage-Themenkalender",
            monetize: "Standard-Mitbewerberbericht ab 110 $; Deep SEO ab 280 $",
            channels: "Marketingagenturen, Indie-Verkäufer, B2B-Marketing-Leads",
            steps: [
              "Eine vollständige Probe in bekannter Industrie",
              "Metaso/Perplexity-Konkurrent und Suchtrends",
              "Manus für lange Listen; menschliche Einsicht in Schlussfolgerungen",
              "20 % Erneuerungsrabatt auf Quartalsberichte"
            ],
            tip: "Datum der Datenerhebung beachten; Keine garantierten Platzierungen."
          },
          {
            title: "Anpassung des Studienplans zur Prüfungsvorbereitung",
            category: "Wissensdienste",
            difficulty: "Anfänger",
            income: "28–125 $/Plan",
            desc: "Personalisierte Lernpläne, tägliche Aufgaben, Fehlervorlagen, Karteikarten mit Zielen, Grundlinien und Zeitleiste – mit Fachkompetenz-Gate.",
            deliverables: "Stufenplan + tägliche Aufgaben + Ressourcenindex + Scheinprüfungsplan",
            monetize: "Einmaliger Plan ab 28 $; 4-wöchiges Q&A-Coaching 84–125 $",
            channels: "Prüfungsforen, Bildungskonten, Trainingspartner",
            steps: [
              "Benchmark-Plan für eine Prüfung, die Sie kennen (Englisch/CPA/Lehrzertifikat)",
              "NotebookLM-Zusammenfassung des Lehrplans und früherer Arbeiten",
              "Handbuch zum Gamma-Visualplan",
              "Geben Sie 3 Monate vor der Prüfungssaison kräftig Druck"
            ],
            tip: "Keine durchgesickerten Fragen oder illegalen Antworten; Aktualisieren Sie Pläne, wenn sich die Lehrpläne ändern."
          },
          {
            title: "Persönliche Wissensdatenbank zum „zweiten Gehirn“.",
            category: "Wissensdienste",
            difficulty: "Dazwischenliegend",
            income: "210–1.120 $/Projekt",
            desc: "Organisieren Sie verstreute Dokumente, Lesezeichen und Notizen in durchsuchbaren, konversationsfähigen KBs für Einzelpersonen oder kleine Teams.",
            deliverables: "KB-Architektur + Import/Bereinigung + Such-/Chat-Konfiguration + Schulung",
            monetize: "Persönlich 210–420 $; Teampreis pro Sitzplatz",
            channels: "Produktivitätsgemeinschaften, Ideenkreise, PKM-Blogger",
            steps: [
              "Demobibliothek mit Taxonomie und Chat",
              "Batch-Zusammenfassungen von Notion AI; Verfeinern Sie externe Fragen und Antworten",
              "1-stündige Onboarding-Aufzeichnung",
              "Optionale monatliche Content-Wartung"
            ],
            tip: "Sensible Notizen lokal zuerst; Cloud auf kundeneigenen Konten."
          },
          {
            title: "Open-Source-README-Datei und Dokumentenoptimierung",
            category: "Technische Dienstleistungen",
            difficulty: "Anfänger",
            income: "70–420 $/Projekt",
            desc: "Englische README-Datei, API-Dokumente, Beitragsleitfaden, Beispiele für Indie-Entwickler und Startups – bessere Stars und Partnerschaften.",
            deliverables: "README + BEITRAG + grundlegende API-Dokumente + Beispiele",
            monetize: "GitHub-Community, Entwicklerforen, Twitter, Stiftungen",
            channels: "GitHub-Community, Entwicklerforen, Twitter, Stiftungen",
            steps: [
              "Zwei Dokumentbeispiele im Open-Source-Stil",
              "Der Cursor liest Code für genaue API-Dokumente",
              "Zweisprachig +30 %",
              "Hilfebeitrag HN/Dev-Artikel nach Lieferung anzeigen"
            ],
            tip: "Dokumente müssen die Codeversion verfolgen; Keine Fake-Star-Dienste."
          },
          {
            title: "SaaS-Hilfecenter und Änderungsprotokoll-Erstellung",
            category: "Technische Dienstleistungen",
            difficulty: "Dazwischenliegend",
            income: "420–2.100 $/Projekt",
            desc: "Website mit Hilfedokumenten, FAQ-Bot, Änderungsprotokollprozess für kleine SaaS – geringere Supportlast, höhere Self-Service-Lösung.",
            deliverables: "Hilfestruktur + 20–50 Artikel + FAQ-Bot + Changelog-Vorlage",
            monetize: "Erster Build + monatliche Updates 70–210 $",
            channels: "SaaS-Gründergruppen, Indie Hackers CN, Product Hunt",
            steps: [
              "Vollständiges Hilfecenter zur Demo-SaaS",
              "Sehen Sie sich die Produktdokumente für In-App-Fragen und Antworten an",
              "Cursor-API-Entwürfe aus Codekommentaren",
              "Anzahl der monatlichen Vertragsartikel"
            ],
            tip: "Mit Produkt versionierte Dokumente; Wichtige Funktionen müssen vom Kunden genehmigt werden."
          },
          {
            title: "KI-Aktualisierung der WordPress-/Unternehmenswebsite",
            category: "Technische Dienstleistungen",
            difficulty: "Dazwischenliegend",
            income: "280–1.400 $/Aktualisierung",
            desc: "Aktualisierung der alten Unternehmenswebsite – KI-gestützter Text, Layoutkonzepte, SEO-Meta; Sie implementieren und warten.",
            deliverables: "Aktualisierungsplan + neue Kopie + Theme-Optimierungen + 30-Tage-Fehlerbehebungen",
            monetize: "Einmalige Aktualisierung; jährliche Wartung 170–500 $",
            channels: "Lokale Webagenturen, Hosting-Reseller, Partner für Suchanzeigen",
            steps: [
              "Zwei Vorher/Nachher-Refresh-Fälle",
              "Bolt.new-Prototypblöcke zur Kundenfreigabe",
              "Änderungen am Cursor-Thema; ChatGPT-Batch-SEO-Kopie",
              "Wartungs-SLA: Updates und Reaktionszeit"
            ],
            tip: "ICP/Domäne im Besitz des Kunden; Vollständige Sicherung vor der Aktualisierung."
          },
          {
            title: "KI bietet White-Label-Integration",
            category: "Technische Dienstleistungen",
            difficulty: "Dazwischenliegend",
            income: "1.120–7.000 $/Projekt",
            desc: "Integrieren Sie intelligenten Support, Fragen und Antworten zu Dokumenten oder die Generierung von Inhalten über API oder Dify in eine bestehende App/Site – die Kundenmarke im Vordergrund.",
            deliverables: "Anforderungen + API-Integration + Admin-Konfiguration + Startunterstützung",
            monetize: "Pro Funktionsmodul; API-Kosten werden vom Kunden bezahlt oder durchgereicht",
            channels: "Software-Outsourcer, Beratungsunternehmen für digitale Transformation, ISVs",
            steps: [
              "Demoseite mit Einbettung",
              "Kostenpflichtige DeepSeek-API; Dify für RAG",
              "Liefern Sie Quell- und Bereitstellungsdokumente",
              "Upselling des jährlichen Supports nach dem ersten Projekt"
            ],
            tip: "Datenresidenz und Datenschutz im Vertrag; Keine Schlüssel in Ihrem Repo."
          },
          {
            title: "E-Commerce-After-Sales-Bot- und Ticketautomatisierung",
            category: "Automatisierung",
            difficulty: "Anfänger",
            income: "210–840 $/Monat",
            desc: "Automatische FAQ-Antwort, Logistikberatung, Rückflussskripte für Verkäufer – leichte ERP-/Blattverknüpfung.",
            deliverables: "Skriptbibliothek + Bot-Konfiguration + Ticketregeln + wöchentliche Berichtsvorlage",
            monetize: "Marktplatzdienstleister, Verkäufergruppen, CS-Outsourcing",
            channels: "Marktplatzdienstleister, Verkäufergruppen, CS-Outsourcing",
            steps: [
              "TOP 50 After-Sales-Q&A-Bibliothek",
              "Coze auf WeCom/Feishu-Kanälen",
              "n8n exportiert Tickets in Blätter",
              "Upsell für Skriptaktualisierungen in der Hochsaison"
            ],
            tip: "Komplexe Streitigkeiten auf Menschen übertragen; Versprechen Sie keine Rückerstattungen im Namen des Kunden."
          },
          {
            title: "Rekrutierung eines JD- und Lebenslauf-Screening-Agenten",
            category: "Automatisierung",
            difficulty: "Dazwischenliegend",
            income: "42–168 $/Rolle",
            desc: "Schreiben Sie JDs, Interviewfragen, einen Lebenslauf-Screening und eine Zusammenfassung mit dem Agenten zuerst – sparen Sie etwa 70 % Screening-Zeit.",
            deliverables: "JD + Kompetenzmodell + Screening-Regeln + Kandidatenzusammenfassungsblatt",
            monetize: "Pro Rolle; jährliches 10-Rollen-Paket; Umsatzbeteiligung des Personalvermittlers",
            channels: "HR-Communitys, Headhunter, Startup-CEO-Gruppen",
            steps: [
              "Manus stapelt PDF-Lebensläufe zu strukturierten Zusammenfassungen",
              "Manus stapelt PDF-Lebensläufe zu strukturierten Zusammenfassungen",
              "Voreingenommenheit menschlicher Bewertungen und Risiken für den Datenschutz",
              "PIPL-konforme Datenverarbeitung im Vertrag"
            ],
            tip: "Der KI-Score ist nur hilfreich; Die Einstellungsentscheidung bleibt beim Kunden; Speicherung anonymisieren."
          },
          {
            title: "Intelligente Archivierungspipeline für Rechnungen/Verträge",
            category: "Automatisierung",
            difficulty: "Dazwischenliegend",
            income: "560–2.520 $/Projekt",
            desc: "E-Mail-/WeChat-Aufnahme → OCR → Kategorisieren → Ausnahmewarnungen für Finanzen/Verwaltung – weniger manuelle Eingabe.",
            deliverables: "Einmalige Implementierung; Überwachung 84–280 $/Monat",
            monetize: "Einmalige Implementierung; Überwachung 84–280 $/Monat",
            channels: "Buchhaltungsfirmen, Verwaltungs-Outsourcing, Finanzsoftware-Implementierer",
            steps: [
              "POC für Rechnungen und Verträge",
              "Validierungsregeln für die Claude-Feldextraktion",
              "OpenClaw hat eine Ausnahmeübersicht zur Finanzierung geplant",
              "Zweiwöchiger Parallellauf vs. manueller Betrieb vor der Umstellung"
            ],
            tip: "Finanzdaten vor Ort oder in der privaten Cloud des Kunden – kein vollständiger Buchhaltungsservice."
          },
          {
            title: "Plattformübergreifende Social-Planung und Sentiment-Überwachung",
            category: "Automatisierung",
            difficulty: "Dazwischenliegend",
            income: "280–1.120 $/Monat",
            desc: "Einheitliche Planung, plattformübergreifende Metriken, Überwachung von Markenschlüsselwörtern und negativen Erwähnungen mit täglicher Übersicht.",
            deliverables: "Veröffentlichungskalender + automatische Verteilungskonfiguration + tägliches Sentiment-Briefing + Benachrichtigungen",
            monetize: "Ab 280 $/Monat; Aufpreis pro Bahnsteig; Krisenreaktionspaket extra",
            channels: "Markenmarketing, PR-Agenturen, MCN-Ops-Teams",
            steps: [
              "OpenClaw Cron tägliche Stimmung zu Feishu",
              "n8n CMS und soziale APIs waren konform",
              "Grok für X Echtzeit-Erwähnungen",
              "Befolgen Sie die API-/Automatisierungsregeln der Plattform. menschliches Urteil über negative Gefühle."
            ],
            tip: "Befolgen Sie die API-/Automatisierungsregeln der Plattform. menschliches Urteil über negative Gefühle."
          },
          {
            title: "1-zu-1-Coaching von KI-Fähigkeiten am Arbeitsplatz",
            category: "Bildung und Ausbildung",
            difficulty: "Anfänger",
            income: "28–70 $/Stunde",
            desc: "Vier bis acht Sitzungen zu echten Aufgaben – wöchentliche Berichte, Decks, Python-Automatisierung – für einzelne Schwachstellen.",
            deliverables: "Diagnose vor dem Anruf + 4–8 Live-/Sprachsitzungen + Hausaufgabenbesprechung + Tool-Checkliste",
            monetize: "Stündlich; 4er-Pack 210 $; 8er-Pack 390 $",
            channels: "Soziale Apps, Communities, Alumni-Empfehlungen, HR-Einführungen",
            steps: [
              "Drei Standardpakete (Administrator/Marketing/Entwicklereinführung)",
              "Jede Sitzung verwendet die eigentliche Aufgabe des Kunden",
              "Zusammenfassungen der Bildschirmaufzeichnungen zur Überprüfung",
              "Abschluss „Checkliste zur KI-Fähigkeit“ für Glaubwürdigkeit"
            ],
            tip: "Keine Werbegarantien; Bestätigen Sie die Grundlinie und die Ziele vor dem Anruf."
          },
          {
            title: "Jugend-KI-Innovationscamp",
            category: "Bildung und Ausbildung",
            difficulty: "Dazwischenliegend",
            income: "420–2.100 $/Sitzung",
            desc: "Halbtägige bis zweitägige Camps für Schulungsorganisationen – Chatbot, KI-Kunst, einfache Spieleseite – wecken Interesse, nicht tiefe CS.",
            deliverables: "Unterrichtsplan + Materialien vor Ort + Präsentationsseite für Schüler + Lehrerunterstützung",
            monetize: "Übernahme einer Institution; pro Schüler 11–28 $; Materialien extra",
            channels: "Ausbildungszentren, Jugendpaläste, internationale Schulaktivitäten",
            steps: [
              "Standardablauf für „2-Stunden-versandfähiges Projekt“.",
              "Bolt.neue gemeinsam nutzbare Zero-Code-Webseite",
              "Modul für kreatives Zeichnen während der Reise",
              "Eltern-Info-Session-Deck zum Abschluss von Geschäften"
            ],
            tip: "Geringer Datenschutz; gesunder Inhalt; Befolgen Sie die lokale Bildungspolitik."
          },
          {
            title: "KI-Kompetenzkurse für Senioren (bezahlte Fortgeschrittenenstufe)",
            category: "Bildung und Ausbildung",
            difficulty: "Anfänger",
            income: "7–28 $/Person/Sitzung",
            desc: "Community-Seniorenzentren – Sprachassistenten-Chat, KI-Fotowiederherstellung, Betrugsaufklärung; kostenlose Grundlagen, kostenpflichtige Fortgeschrittene.",
            deliverables: "2-stündiger Offline-Kurs + großgedrucktes Handbuch + 7-tägige WeChat-Fragen und Antworten",
            monetize: "Gemeinschaftszuschüsse + freiwillige Vorschüsse; CSR-Sponsoring von Unternehmen",
            channels: "Straßengemeinden, Seniorenuniversitäten, Bankfilialpartner",
            steps: [
              "Extragroßes Schritt-für-Schritt-Handbuch mit Bildern",
              "Doubao/Qwen-Sprach- und Dialektunterstützung",
              "Kostenlose Testversion zur Unterstützung durch die Community",
              "Erweitert: AI-Albumwiederherstellung und Reiseplanung"
            ],
            tip: "Langsames Tempo; Betonen Sie keine Überweisungen, keine Bestätigungscodes."
          },
          {
            title: "Kleingruppenkurs zum Designer-KI-Workflow",
            category: "Bildung und Ausbildung",
            difficulty: "Dazwischenliegend",
            income: "210–560 $/Kohorte",
            desc: "4-wöchige Kohorte für Grafik-/UI-Designer – KI-Generierung, Steuerung, Retusche, Workflow-Integration; Portfolio-Produktion.",
            deliverables: "4 Live-Sitzungen + Kritiken + prompte Bibliothek + Lektion zur kommerziellen Lizenz",
            monetize: "Pro Kohorte; 1-zu-1-Kritik zusätzlich; Firmengruppenrabatt",
            steps: [
              "4-wöchiger Lehrplan: Konzept → Werbung → Bewegung → Portfolio",
              "Flux/MJ-Industriefälle (Beauty/3C)",
              "Woche 4: 3 Portfolioteile polieren",
              "Top-Studenten verwiesen auf Gig-Kanäle"
            ],
            tip: "Gewerbliche Lizenz klären; Förderung der Kennzeichnung KI-gestützter Arbeit."
          }
        ]
      }
  });
})();
