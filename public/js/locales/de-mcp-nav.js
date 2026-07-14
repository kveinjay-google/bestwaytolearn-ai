/* DE overlays — mcp-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("de", { mcpNav: {
  "meta": {
    "lead": "Kuratierte High-Star-MCP-Server nach Anwendungsfall. Tippen Sie auf Konfiguration kopieren, um sie in Cursor oder Claude Desktop einzufügen.",
    "searchPlaceholder": "Suchen Sie nach MCP-Namen, Kategorie, Client, Anwendungsfall ...",
    "countLabel": "{n} servers",
    "totalLabel": "{n} servers · {c} categories",
    "empty": "Keine passenden MCP-Server. Versuchen Sie es mit einem anderen Schlüsselwort.",
    "copyConfig": "Konfiguration kopieren",
    "openLink": "Einzelheiten",
    "clientsLabel": "Kunden",
    "transportLabel": "Transport",
    "sourceLabel": "Quelle",
    "starsLabel": "{n} ★",
    "featuresLabel": "Merkmale"
  },
  "categories": {
    "MCP 入门": "Erste Schritte mit MCP",
    "开发工具": "Entwicklungstools",
    "搜索检索": "Suchabruf",
    "浏览器自动化": "Browser-Automatisierung",
    "地图与位置": "Karten und Standorte",
    "数据库": "Datenbank",
    "知识库与文档": "Wissensdatenbank und Dokumentation",
    "内容创作": "Erstellung von Inhalten",
    "办公协作": "Zusammenarbeit im Büro",
    "金融数据": "Finanzdaten",
    "社交与社区": "Sozial & Gemeinschaft",
    "电商": "E-Commerce",
    "多媒体": "Multimedia",
    "科研学术": "Office-Dokumente",
    "生活服务": "Lebensdienstleistungen"
  },
  "clients": {
    "多平台": "Multiplattform",
    "开发者": "Entwickler",
    "Cursor": "Cursor",
    "Claude Desktop": "Claude Desktop",
    "Cline": "Cline",
    "Windsurf": "Windsurfen",
    "Codex": "Kodex",
    "Raycast": "In dieser Kategorie sind keine Informationen vorhanden. Bitte versuchen Sie es mit anderen Tags."
  },
  "transports": {
    "概念": "Konzept",
    "配置": "Aufstellen",
    "文档": "Dokumente",
    "Registry": "Registrierung",
    "stdio": "stdio",
    "SSE": "SSE",
    "http": "HTTP"
  },
  "sources": {
    "official": "Offiziell",
    "github": "GitHub",
    "community": "Gemeinschaft"
  },
  "items": {
    "MCP 是什么": {
      "name": "Was ist MCP?",
      "desc": "MCP (Model Context Protocol) ist ein offenes Protokoll, das KI-Clients und externe Tools verbindet. Der Client ruft die vom Server bereitgestellten Tools über stdio/SSE auf und ermöglicht es dem Agenten, Webseiten zu durchsuchen, Dateien zu lesen, Datenbanken zu überprüfen usw.",
      "features": [
        "offene Protokollstandards",
        "stdio/SSE-Transport",
        "Verbinden Sie LLM mit externen Tools"
      ]
    },
    "Cursor 接入 MCP": {
      "name": "Cursorzugriff auf MCP",
      "desc": "Führen Sie unter Cursor: Einstellungen → MCP → mcp.json bearbeiten das JSON-Fragment unten in das mcpServers-Objekt ein und speichern Sie es. Im Agentendialog stehen Ihnen die entsprechenden Tools zur Verfügung.",
      "configNote": "Es können mehrere Server hinzugefügt werden. Starten Sie Cursor neu oder aktualisieren Sie die MCP-Liste nach der Änderung",
      "features": [
        "Bearbeiten Sie mcp.json",
        "Mehrere Server koexistieren",
        "Tool zum Aufrufen des Agentendialogs"
      ]
    },
    "Claude Desktop 接入 MCP": {
      "name": "Claude Desktop-Zugriff auf MCP",
      "desc": "Bearbeiten Sie claude_desktop_config.json (macOS: ~/Library/Application Support/Claude/), fügen Sie die Serverkonfiguration unter mcpServers hinzu und starten Sie Claude Desktop neu, damit es wirksam wird.",
      "configNote": "Den Pfad der Windows-Konfigurationsdatei finden Sie im offiziellen Quickstart",
      "features": [
        "claude_desktop_config.json",
        "Sie sind der Prompt-Word-Coach. Der Benutzer gibt eine einfache Eingabeaufforderung aus. Bitte geben Sie Folgendes aus:\n1. Problemdiagnose\n2. RTFC komplett neu geschriebene Version\n3. Zwei Testeingänge und ideale Ausgangspunkte\nChinesisch, prägnant.",
        "Native Desktop-Integration"
      ]
    },
    "MCP 官方参考实现": {
      "name": "Offizielle MCP-Referenzimplementierung",
      "desc": "Die offizielle Referenzserversammlung, die von Anthropic verwaltet wird (Dateisystem, Git, Fetch, Speicher, Postgres usw.). Die „offiziellen“ Einträge in jeder Kategorie auf dieser Seite stammen aus diesem Repository.",
      "features": [
        "Dateisystem / git / fetch",
        "Speicher / Postgres",
        "Die offizielle Wartung kann gegabelt werden"
      ]
    },
    "MCP 协议文档": {
      "name": "MCP-Protokolldokument",
      "desc": "Offizielle Spezifikation des Model Context Protocol, Architekturbeschreibung und mehrsprachige SDK-Dokumentation, geeignet für die Entwicklung eines benutzerdefinierten MCP-Servers oder die Fehlerbehebung bei Zugriffsproblemen.",
      "features": [
        "Protokollspezifikation",
        "Architekturbeschreibung",
        "Mehrsprachiges SDK"
      ]
    },
    "Context7": {
      "name": "Kontext7",
      "desc": "Integrieren Sie die neueste Bibliotheksdokumentation und API-Referenz in LLM, um Illusionen und veraltete Syntax zu vermeiden, was für Programmierszenarien ein Muss ist.",
      "features": [
        "Integrieren Sie die neueste Bibliotheksdokumentation",
        "API-Referenz-Echtzeitabfrage",
        "Reduzieren Sie Code-Illusionen"
      ]
    },
    "GitHub MCP": {
      "name": "GitHub MCP",
      "desc": "Lesen und schreiben Sie Issues, PRs, Warehouse-Dateien und Suchcodes, sodass der Agent den GitHub-Workflow direkt bedienen kann.",
      "configNote": "Sie müssen ein GitHub Personal Access Token erstellen und env ausfüllen",
      "features": [
        "Ausgabe/PR lesen und schreiben",
        "Repository-Code durchsuchen",
        "Dateiinhalt abrufen"
      ]
    },
    "Filesystem": {
      "name": "Dateisystem",
      "desc": "Der offizielle Dateisystemserver liest und schreibt Dateien in einem begrenzten Verzeichnis, das für lokale Projektanalysen und Stapeländerungen geeignet ist.",
      "configNote": "Ersetzen Sie /path/to/allowed/dir durch ein zulässiges Verzeichnis",
      "features": [
        "Beschränken Sie das Lesen und Schreiben von Verzeichnissen",
        "Batch-Dateianalyse",
        "Die Dify-Wissensdatenbank-Segmentierung wird mit 500–800 Wörtern/Block empfohlen; Das Testset ist mit 20 echten Mitarbeiterfragen zur Abnahme vorbereitet."
      ]
    },
    "Git": {
      "name": "Git",
      "desc": "Offizieller Git-Betriebsserver: Status, Diff, Übermittlungsverlauf und Zweige anzeigen, Unterstützung bei der Codeüberprüfung und Versionsverwaltung.",
      "features": [
        "Status-/Diff-Ansicht",
        "Senden Sie eine historische Abfrage",
        "Klicken Sie mit der rechten Maustaste auf index.html → Im Finder anzeigen / Im Ordner anzeigen, doppelklicken Sie, um es in Chrome oder Safari zu öffnen. Die Live-Vorschau kann auch mit Cursor Live Server erweitert werden."
      ]
    },
    "Fetch": {
      "name": "Bringen",
      "desc": "Der offizielle Web-Crawling-Server wandelt URL-Inhalte in LLM-lesbaren Markdown um, der zum Lesen von Dokumenten und Nachrichten geeignet ist.",
      "features": [
        "URL zu Markdown",
        "Extraktion von Webseitentext",
        "Lesen von Dokumenten"
      ]
    },
    "Memory": {
      "name": "Erinnerung",
      "desc": "Der offizielle Knowledge-Graph-Speicherserver speichert Entitäten und Beziehungen über Sitzungen hinweg und eignet sich für langfristige Projektkontexte.",
      "features": [
        "Wissensgraphenspeicher",
        "Sitzungsübergreifende Entitätsbeziehungen",
        "Langfristiger Projektkontext"
      ]
    },
    "Sequential Thinking": {
      "name": "Sequentielles Denken",
      "desc": "Der offizielle Server für strukturierte Denkketten leitet Agenten beim Denken, Überarbeiten und Verzweigen an, um komplexe Probleme Schritt für Schritt zu untersuchen.",
      "features": [
        "Schritt-für-Schritt-Argumentationskette",
        "Hypothetische Überarbeitung",
        "Komplexe Probleme aufschlüsseln"
      ]
    },
    "Docker MCP": {
      "name": "Docker MCP",
      "desc": "Verwalten Sie Docker-Container, Images und Compose, sodass der Agent lokale oder Remote-Containerumgebungen direkt betreiben kann.",
      "features": [
        "Container-Start- und Stopp-Management",
        "Spiegelliste",
        "Vorgang erstellen"
      ]
    },
    "Sentry MCP": {
      "name": "Sentry MCP",
      "desc": "Fragen Sie Sentry-Fehler, Probleme und Leistungsdaten ab, um die Online-Fehlerbehebung und Ursachenanalyse zu unterstützen.",
      "features": [
        "Fehlerproblemabfrage",
        "Leistungsverfolgung",
        "Online-Fehlerbehebung"
      ]
    },
    "Brave Search": {
      "name": "Mutige Suche",
      "desc": "Die API-gesteuerte Websuche von Brave Search bietet Agent Echtzeit-Internetabruffunktionen.",
      "configNote": "Beantragen Sie einen API-Schlüssel unter brave.com/search/api",
      "features": [
        "Echtzeit-Websuche",
        "Strukturierte Ergebnisse",
        "Datenschutzfreundliche Suche"
      ]
    },
    "Tavily": {
      "name": "Tavily",
      "desc": "Eine für KI-Agenten optimierte Such-API, die strukturierte Zusammenfassungen zurückgibt, die für Recherchen und Faktenprüfungen geeignet sind.",
      "features": [
        "Agentenoptimierte Suche",
        "strukturierte Zusammenfassung",
        "Faktencheck"
      ]
    },
    "Exa Search": {
      "name": "Exa-Suche",
      "desc": "Die semantische Suche in neuronalen Netzwerken eignet sich gut zum Auffinden technischer Artikel, Papiere und Unternehmensinformationen und eignet sich gut für Forschungsszenarien.",
      "features": [
        "Semantische neuronale Suche",
        "Suche nach technischen Artikeln",
        "Abfrage von Unternehmensinformationen"
      ]
    },
    "Firecrawl": {
      "name": "Feuerkriechen",
      "desc": "Crawlen, erfassen und durchsuchen Sie Webseiten, konvertieren Sie Website-Inhalte in ein LLM-freundliches Format, das für Wettbewerbsprodukte und die Datenerfassung geeignet ist.",
      "features": [
        "Crawlen Sie die gesamte Website",
        "Markdown-Konvertierung",
        "Erfassung wettbewerbsfähiger Produktdaten"
      ]
    },
    "Playwright MCP": {
      "name": "Dramatiker MCP",
      "desc": "Das offizielle MCP von Microsoft Playwright steuert Chromium für Screenshots, Klicks, das Ausfüllen von Formularen und E2E-Tests.",
      "features": [
        "Chromium-Automatisierung",
        "Screenshots und Ausfüllen von Formularen",
        "E2E-Tests"
      ]
    },
    "Puppeteer": {
      "name": "Puppenspieler",
      "desc": "Offizieller Puppeteer-Server, Headless-Chrome-Automatisierung, geeignet für Webseiten-Screenshots, Crawling und einfache Interaktionen.",
      "features": [
        "Headless Chrome",
        "Wettbewerbsfähige Produkt- und Marktrecherche auf einer Seite",
        "DOM-Interaktion"
      ]
    },
    "Browserbase": {
      "name": "Browserbasis",
      "desc": "Cloud-Headless-Browser-Infrastruktur, Agent führt komplexe Webseitenaufgaben in Remote-Browsern ohne lokales Chrome aus.",
      "features": [
        "Cloud-Browser",
        "Kein lokales Chrome erforderlich",
        "Komplexe Webaufgaben"
      ]
    },
    "Google Maps": {
      "name": "Google Maps",
      "desc": "Geokodierung, Routenplanung, Standortsuche und Umgebungsabfragen, geeignet für Reise- und lokale Lebensvermittler.",
      "features": [
        "Geokodierung",
        "Routenplanung",
        "POI-Suche"
      ]
    },
    "OpenStreetMap": {
      "name": "OpenStreetMap",
      "desc": "Geokodierung und Standortabfrage basierend auf OpenStreetMap, kostenlos und Open Source, geeignet für Szenarien, die keine Google API erfordern.",
      "features": [
        "Kostenlose Geokodierung",
        "Open-Source-Kartendaten",
        "Kein API-Schlüssel erforderlich"
      ]
    },
    "PostgreSQL": {
      "name": "PostgreSQL",
      "desc": "Offizieller Postgres-Server, schreibgeschützte Abfragetabellenstruktur und -daten, Hilfsdatenanalyse und Datenbanksuche in natürlicher Sprache.",
      "configNote": "Durch die tatsächliche Verbindungszeichenfolge ersetzen; Es werden schreibgeschützte Konten empfohlen",
      "features": [
        "Schreibgeschützte SQL-Abfrage",
        "Erkundung der Tabellenstruktur",
        "Bibliothek für die Suche in natürlicher Sprache"
      ]
    },
    "SQLite": {
      "name": "SQLite",
      "desc": "Offizieller SQLite-Server, Abfrage lokaler DB-Dateien, geeignet für Prototypen und kleine Datenanalysen.",
      "features": [
        "Lokale .db-Abfrage",
        "Leichte Datenanalyse",
        "Name: Prompt Review Coach; Beschreibung Geben Sie das Aufforderungswort ein, um Bewertungskommentare zu erhalten"
      ]
    },
    "Supabase": {
      "name": "Supabase",
      "desc": "Operation Supabase-Projekt: Tabellenverwaltung, SQL-Ausführung, Edge-Funktionen und Speicher, Full-Stack-Entwicklungstool.",
      "features": [
        "Tischverwaltung",
        "SQL-Ausführung",
        "Kantenfunktionen"
      ]
    },
    "Notion": {
      "name": "Vorstellung",
      "desc": "Lesen und schreiben Sie Notion-Seiten und -Datenbanken und verbinden Sie die Wissensdatenbank des Teams mit dem Agenten-Workflow.",
      "features": [
        "Lesen und Schreiben von Seiten",
        "Datenbankabfrage",
        "Zugriff auf die Wissensdatenbank des Teams"
      ]
    },
    "Google Drive": {
      "name": "Google Drive",
      "desc": "Offizieller Google Drive-Server, Cloud-Dokumente suchen, lesen und auflisten sowie Office-Dateibibliotheken öffnen.",
      "configNote": "Für die erste Ausführung ist eine OAuth-Autorisierung erforderlich",
      "features": [
        "Dateisuche",
        "Lesen von Dokumenten",
        "OAuth-Autorisierung"
      ]
    },
    "Obsidian MCP": {
      "name": "Obsidian MCP",
      "desc": "Stellen Sie eine Verbindung zum lokalen Obsidian-Repository her, suchen und lesen Sie Markdown-Notizen und sind die erste Wahl für persönliche Wissensmanagementszenarien.",
      "configNote": "Erfordert die Installation des Obsidian Local REST API-Plugins",
      "features": [
        "Lokale Notizensuche",
        "Markdown-Lesung",
        "persönliche Wissensdatenbank"
      ]
    },
    "Figma": {
      "name": "Figma",
      "desc": "Lesen Sie die Knoten, Stile und Kommentare des Figma-Designentwurfs, lassen Sie den Agenten die Benutzeroberfläche verstehen und den entsprechenden Code generieren.",
      "features": [
        "Lesen des Entwurfsknotens",
        "Stil- und Layoutanalyse",
        "Schusstyp"
      ]
    },
    "Cloudflare Workers": {
      "name": "Cloudflare-Mitarbeiter",
      "desc": "Verwalten Sie Cloudflare Workers, KV, R2 und DNS, um Edge Computing und statische Standorte schnell bereitzustellen.",
      "features": [
        "Einsatz der Arbeitnehmer",
        "KV/R2-Speicher",
        "DNS-Verwaltung"
      ]
    },
    "Slack": {
      "name": "Locker",
      "desc": "Offizieller Slack-Server, Nachrichten senden, Kanäle und Threads überprüfen und Agent in die Teamzusammenarbeit einbinden.",
      "features": [
        "Senden von Kanalnachrichten",
        "Thread-Abfrage",
        "Teamarbeit"
      ]
    },
    "Linear": {
      "name": "Linear",
      "desc": "Verwalten Sie lineare Probleme, Projekte und Zyklen, agentengesteuertes Projektmanagement, geeignet für Produktteams.",
      "features": [
        "Problemmanagement",
        "Sprint-Zyklus",
        "Produktprojektmanagement"
      ]
    },
    "Google Calendar": {
      "name": "Google Kalender",
      "desc": "Fragen Sie Google Kalender-Ereignisse ab und erstellen Sie sie, und automatisieren Sie die Terminplanung und Besprechungskoordination.",
      "configNote": "Google OAuth muss für die erste Ausführung abgeschlossen werden",
      "features": [
        "Ereignisabfrage",
        "Zeitplan erstellen",
        "OAuth-Autorisierung"
      ]
    },
    "Alpha Vantage": {
      "name": "Alpha Vantage",
      "desc": "Fragen Sie US-Aktien-, Devisen- und Kryptowährungspreise, technische Indikatoren und Unternehmensfundamentaldaten ab.",
      "features": [
        "Aktienkurse",
        "Technische Indikatoren",
        "grundlegende Daten"
      ]
    },
    "Stripe": {
      "name": "Streifen",
      "desc": "Fragen Sie Stripe-Kunden, Abonnements, Rechnungen und Zahlungen ab, um die SaaS-Finanz- und Abrechnungsanalyse zu unterstützen.",
      "features": [
        "Kunden und Abonnements",
        "Rechnungsanfrage",
        "Beschränken Sie das Lesen und Schreiben von Verzeichnissen"
      ]
    },
    "Twitter/X MCP": {
      "name": "Twitter/X MCP",
      "desc": "Schreiben Sie vor dem Meeting eine Tagesordnung, veröffentlichen Sie wichtige Punkte während des Meetings und verwenden Sie Notion AI, um Protokolle und Aufgaben zu erstellen.",
      "features": [
        "Twittern",
        "Timeline-Suche",
        "Benutzerprofil"
      ]
    },
    "Reddit": {
      "name": "Reddit",
      "desc": "Durchsuchen Sie Subreddits, durchsuchen Sie Beiträge und Kommentare, führen Sie Community-Recherchen durch und entdecken Sie Trends.",
      "features": [
        "Subreddit durchsuchen",
        "Beitragssuche",
        "Fertigkeit zur Herstellung von Shadcn/UI-Komponenten: Radix + Tailwind-Modus, Zugänglichkeit und Themenvariablen, um zu vermeiden, dass KI eine billige Benutzeroberfläche generiert."
      ]
    },
    "Shopify": {
      "name": "Shopify",
      "desc": "DeepMind gibt einen Ausblick auf die verbesserte Vorhersagegenauigkeit der Bindungsstellen von Arzneimittelmolekülen durch AlphaFold 4 und Pharmaunternehmen weiten die Pilotkooperation aus.",
      "features": [
        "Produktmanagement",
        "Bestellanfrage",
        "Kundeninformationen"
      ]
    },
    "WooCommerce": {
      "name": "WooCommerce",
      "desc": "Verwalten Sie WooCommerce-Produkte, Bestellungen und Kunden und automatisieren Sie WordPress-unabhängige Website-Vorgänge.",
      "features": [
        "WordPress-Shop",
        "Bestellungen und Kunden",
        "Produktmanagement"
      ]
    },
    "ElevenLabs": {
      "name": "ElfLabs",
      "desc": "Text-to-Speech, Sound-Klonen und Soundeffekt-Generierung, Pipeline zur Erstellung von Audio- und Videoinhalten.",
      "features": [
        "Text-zu-Sprache",
        "Sound-Klonen",
        "Erzeugung von Soundeffekten"
      ]
    },
    "Replicate": {
      "name": "Replizieren",
      "desc": "Rufen Sie Bild-, Video- und Audiomodelle auf Replicate auf, einem One-Stop-Shop für Zeichnungen und Videos.",
      "features": [
        "Vincent-Diagrammmodell",
        "Videogenerierung",
        "Audiomodellaufruf"
      ]
    },
    "arXiv": {
      "name": "arXiv",
      "desc": "Suchen und laden Sie arXiv-Artikel, Literaturrezensionen und die Verfolgung modernster Technologien herunter.",
      "features": [
        "Papiersuche",
        "PDF-Download",
        "Literaturische Rezension"
      ]
    },
    "PubMed": {
      "name": "PubMed",
      "desc": "Durchsuchen Sie PubMed nach biomedizinischer Literatur sowie klinischer und biowissenschaftlicher Forschung.",
      "features": [
        "Biomedizinische Literatur",
        "Abstrakte Suche",
        "klinische Forschung"
      ]
    },
    "Weather": {
      "name": "Wetter",
      "desc": "Der offizielle Wetterabfrageserver, der auf der kostenlosen Open-Meteo-API basiert, kann die Vorhersage ohne Schlüssel abrufen.",
      "features": [
        "Wettervorhersage",
        "Kostenloses Open-Meteo",
        "Kein API-Schlüssel erforderlich"
      ]
    },
    "Time": {
      "name": "Zeit",
      "desc": "Zeitzonenumrechnung und aktuelle Zeitabfrage, ein grundlegendes Werkzeug für die grenzüberschreitende Zusammenarbeit und Terminplanung.",
      "features": [
        "Zeitzonenumrechnung",
        "aktuelle Uhrzeit",
        "Grenzüberschreitende Zusammenarbeit"
      ]
    },
    "AWS MCP": {
      "name": "AWS MCP",
      "desc": "Die offizielle MCP-Suite von AWS deckt Kerndienste wie Lambda, S3, DynamoDB und CloudWatch ab und ermöglicht Agenten den direkten Betrieb von Cloud-Ressourcen.",
      "configNote": "AWS-Anmeldeinformationen müssen konfiguriert werden (Umgebungsvariablen oder ~/.aws/credentials)",
      "features": [
        "Lambda/S3-Operationen",
        "DynamoDB-Abfrage",
        "CloudWatch-Protokolle"
      ]
    },
    "Vercel MCP": {
      "name": "Vercel MCP",
      "desc": "Das offizielle MCP von Vercel verwaltet die Projektbereitstellung, Umgebungsvariablen, Domänennamen und Build-Protokolle und automatisiert die Front-End-Bereitstellung.",
      "features": [
        "Projektbereitstellungsmanagement",
        "Konfiguration der Umgebungsvariablen",
        "Protokollansicht erstellen"
      ]
    },
    "E2B Code Interpreter": {
      "name": "E2B-Code-Interpreter",
      "desc": "Die Cloud-Sicherheitssandbox führt Python/JS-Code aus und der Agent kann Skripte ausführen, Bilder zeichnen und Daten verarbeiten, ohne die lokale Umgebung zu verschmutzen.",
      "features": [
        "Cloud-Sandbox-Ausführung",
        "Python/JS-Ausführung",
        "Datenvisualisierung"
      ]
    },
    "MongoDB": {
      "name": "MongoDB",
      "desc": "Offizielles MCP von MongoDB, Abfragesammlung in natürlicher Sprache, Aggregationsanalyse und Schema-Exploration, NoSQL-Datenanalysetool.",
      "features": [
        "Sammlungsabfrage",
        "Aggregationspipeline",
        "Schema erkunden"
      ]
    },
    "Neon": {
      "name": "Neon",
      "desc": "Urheberrecht: Diskussion der Trainingsdaten in Zusammenarbeit mit der Agentur für Kultur",
      "features": [
        "Serverloses Postgres",
        "Datenbankzweig",
        "SQL-Migration"
      ]
    },
    "Atlassian": {
      "name": "Atlassian",
      "desc": "Offizielles MCP von Atlassian, Lesen und Schreiben von Jira-Issues, Confluence-Seiten und Sprint sowie Automatisierung der Zusammenarbeit im Forschungs- und Entwicklungsteam.",
      "features": [
        "Lesen und Schreiben von Jira-Problemen",
        "Confluence-Seite",
        "Sprintmanagement"
      ]
    },
    "21st.dev Magic": {
      "name": "21st.dev Magie",
      "desc": "KI steuert UI-Komponenten zur Generierung von MCP, generiert React/Tailwind-Komponentencode basierend auf Beschreibungen und beschleunigt das Front-End-Prototyping.",
      "features": [
        "KI-generierte UI-Komponenten",
        "Reagieren/Rückenwind-Ausgabe",
        "Beschleunigung des Front-End-Prototyps"
      ]
    },
    "Kubernetes": {
      "name": "Kubernetes",
      "desc": "Verwalten Sie K8s-Clusterressourcen: Pod, Bereitstellung, Service, Protokolle und Ereignisse, DevOps- und SRE-Szenarien.",
      "configNote": "Erfordert lokales Kubectl, das für den Zielcluster konfiguriert und zugänglich ist",
      "features": [
        "Pod-/Bereitstellungsverwaltung",
        "Protokolle und Ereignisse",
        "Cluster-Ressourcenabfrage"
      ]
    },
    "MCP Registry": {
      "name": "MCP-Registrierung",
      "desc": "Mithilfe der offiziellen Registrierung des Model Context Protocol können Sie den Community-MCP-Server mit einem Klick durchsuchen, bewerten und installieren und so die Kosten für die Agent-Tool-Erkennung senken.",
      "features": [
        "Servererkennung und -bewertung",
        "Installation mit einem Klick",
        "Versionsverwaltung"
      ]
    },
    "Smithery": {
      "name": "Schmiedekunst",
      "desc": "MCP Server-Erkennungs- und Hosting-Plattform, sucht nach High-Star-Servern und generiert die Cursor/Claude-Desktop-Konfiguration und unterstützt Remote-SSE-Verbindungen.",
      "configNote": "Einige Server erfordern einen Smithery-API-Schlüssel; Weitere Informationen finden Sie in der Dokumentation zu smithery.ai",
      "features": [
        "Remote-MCP-Hosting",
        "Konfigurationsgenerierung",
        "Auswahl des High Star-Servers"
      ]
    },
    "Pinecone": {
      "name": "Tannenzapfen",
      "desc": "Vektordatenbank MCP: Indexabfrage, Namespace-Verwaltung und RAG-Abruf, geeignet für Unternehmenswissensdatenbanken und lange Fragen und Antworten zu Dokumenten.",
      "features": [
        "Vektorsuche",
        "Namespace-Verwaltung",
        "Einsetzen"
      ]
    },
    "Qdrant": {
      "name": "Qdrant",
      "desc": "Zielgruppe: Modellentwickler, deren Trainingsrechenleistung den Schwellenwert überschreitet",
      "features": [
        "Selbstgehostete Vektorbibliothek",
        "Semantische Suche",
        "Sammlungsverwaltung"
      ]
    },
    "Redis": {
      "name": "Redis",
      "desc": "Redis-Schlüsselwertoperation MCP: Lesen und Schreiben im Cache, Veröffentlichen und Abonnieren sowie Datenstrukturabfrage, geeignet für das Debuggen von Sitzungsstatus und Aufgabenwarteschlange.",
      "features": [
        "Lesen und Schreiben im Cache",
        "Pub/Sub",
        "Sitzungsstatus"
      ]
    },
    "Prisma": {
      "name": "Prisma",
      "desc": "Prisma ORM MCP: Schema-Exploration, Migrationsvorschläge und typsichere Abfragegenerierung zur Beschleunigung der Datenbankschichtentwicklung von Full-Stack-Projekten.",
      "configNote": "Muss im Projektverzeichnis verwendet werden, das schema.prisma enthält",
      "features": [
        "Schema erkunden",
        "Migrationsempfehlungen",
        "Typsichere Abfragen"
      ]
    },
    "ClickHouse": {
      "name": "ClickHouse",
      "desc": "ClickHouse Analysis Library MCP: OLAP-Abfrage, Tabellenstrukturerkundung und Indikatoraggregation, geeignet für Protokoll- und Verhaltensdatenanalyse.",
      "features": [
        "OLAP-Analyse",
        "Protokollaggregation",
        "Indikatorabfrage"
      ]
    },
    "Grafana": {
      "name": "Grafana",
      "desc": "Grafana Observability MCP: Dashboard-Abfrage, Alarmstatus und Loki/Prometheus-Indikatorabruf zur Unterstützung bei der Online-Fehlerbehebung.",
      "features": [
        "Dashboard-Abfrage",
        "Alarmstatus",
        "Loki/Prometheus"
      ]
    },
    "Semgrep": {
      "name": "Semgrep",
      "desc": "Statischer Code-Sicherheitsscan MCP: Scannen Sie nach Schwachstellen gemäß Regelsätzen, SAST-Ergebnisinterpretation und Reparaturvorschlägen, geeignet für PR-Sicherheitszugriffskontrolle.",
      "features": [
        "SAST-Scan",
        "Regelsatzabgleich",
        "Vorschläge zur Behebung von Sicherheitslücken"
      ]
    },
    "LangSmith": {
      "name": "LangSmith",
      "desc": "LangChain LangSmith MCP: Verfolgt Agentenanrufketten, wertet Datensätze aus und vergleicht Eingabeaufforderungswortversionen, geeignet für das Debuggen von LLM-Anwendungen.",
      "features": [
        "Rückverfolgung von Anrufketten",
        "Bewertungsdatensatz",
        "Schneller Versionsvergleich"
      ]
    },
    "HubSpot": {
      "name": "HubSpot",
      "desc": "HubSpot CRM MCP: Kontakt-, Unternehmens- und Deal-Pipeline-Abfrageaktualisierungen, geeignet für die Automatisierung von Vertriebs- und Marketingagenten.",
      "features": [
        "CRM-Kontakt",
        "Transaktionspipeline",
        "Vertriebsautomatisierung"
      ]
    },
    "Salesforce": {
      "name": "Salesforce",
      "desc": "Salesforce MCP: SOQL-Abfragen, Lead- und Opportunity-Updates, Unternehmens-CRM und Vertriebsassistentenszenarien.",
      "configNote": "Es wird empfohlen, in der Produktionsumgebung die OAuth-Verbindungsmethode zu verwenden",
      "features": [
        "SOQL-Abfrage",
        "Lead-Chancen",
        "Unternehmens-CRM"
      ]
    },
    "Zapier": {
      "name": "Zapier",
      "desc": "Zapier MCP: Lösen Sie mehr als 7.000 Anwendungsautomatisierungen aus, lassen Sie Agenten Zaps erstellen, den Ausführungsverlauf abfragen und Aktionen testen.",
      "features": [
        "Über 7000 Anwendungen",
        "Erstellen Sie einen Zap",
        "Laufgeschichte"
      ]
    },
    "Cloudinary": {
      "name": "Bewölkt",
      "desc": "Cloudinary Media MCP: Hochladen von Bildern/Videos, Generierung von Transformations-URLs und Suche nach Ressourcenbibliotheken, geeignet für den Betrieb von Inhalten und E-Commerce-Materialien.",
      "features": [
        "Medien-Upload",
        "URL umwandeln",
        "Suche nach Ressourcenbibliotheken"
      ]
    },
    "DeepWiki": {
      "name": "DeepWiki",
      "desc": "Devin DeepWiki MCP: Lesen Sie Dokumente und Codestrukturen im GitHub-Warehouse-Wiki-Stil, um unbekannte Open-Source-Projekte schnell zu verstehen.",
      "features": [
        "Lagerdokumentation",
        "Schneller Überblick über die Codestruktur",
        "Open-Source-Projekte verstehen"
      ]
    },
    "Raycast": {
      "name": "In dieser Kategorie sind keine Informationen vorhanden. Bitte versuchen Sie es mit anderen Tags.",
      "desc": "Raycast MCP-Erweiterung: Rufen Sie MCP-Tools im macOS-Launcher auf, um Skripte, Suchvorgänge und Systemvorgänge schnell auszuführen.",
      "configNote": "Erfordert die Installation von Raycast und die Aktivierung der MCP-Erweiterung",
      "features": [
        "macOS-Launcher",
        "MCP-Erweiterung",
        "Schnelle Systembedienung"
      ]
    }
  }
} });
})();
