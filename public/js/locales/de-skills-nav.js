/* DE overlays — skills-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("de", { skillsNav: {
  "meta": {
    "lead": "Kuratierte GitHub-Agentenfähigkeiten mit über 1.000 Sternen. Jeder Eintrag enthält einen Installationsbefehl, kompatible Agents und einen Repo-Link.",
    "searchPlaceholder": "Suchfähigkeiten, Branche, Anwendungsfall, Agenten …",
    "countLabel": "{n} skills",
    "totalLabel": "{n} skills · {c} categories",
    "empty": "Keine passenden Fähigkeiten. Versuchen Sie es mit einem anderen Schlüsselwort.",
    "copyCmd": "Befehl kopieren",
    "openGithub": "GitHub",
    "starsLabel": "{n} ★",
    "agentsLabel": "Funktioniert mit"
  },
  "categories": {
    "Skill 安装与合集": "Fertigkeitsinstallation und -sammlung",
    "编程开发": "Programmierentwicklung",
    "前端与设计": "Frontend und Design",
    "视频剪辑与生成": "Videobearbeitung und -generierung",
    "跨境电商与电商": "Grenzüberschreitender E-Commerce und E-Commerce",
    "小红书与内容运营": "Xiaohongshu und Inhaltsbetrieb",
    "营销与 SEO": "Marketing und SEO",
    "内容写作": "Schreiben von Inhalten",
    "调研搜索": "Forschungssuche",
    "产品运营": "Produktoperationen",
    "安全审计": "Sicherheitsaudit",
    "科研学术": "Office-Dokumente",
    "浏览器自动化": "Browser-Automatisierung",
    "知识管理": "Wissensmanagement",
    "办公文档": "Office-Dokumente",
    "财务金融": "Finanzen"
  },
  "agents": {
    "多平台": "Multiplattform",
    "格式通用": "Universelles Format",
    "通用": "Universal",
    "Cursor": "Cursor",
    "Claude Code": "Claude Code",
    "Codex": "Kodex",
    "Gemini CLI": "Gemini-CLI",
    "GitHub Copilot": "GitHub-Copilot",
    "Claude.ai": "Claude.ai",
    "v0": "v0",
    "OpenClaw": "OpenClaw",
    "Antigravity": "Antigravitation",
    "Grok": "Grok",
    "Windsurf": "Windsurfen"
  },
  "items": {
    "skills CLI": {
      "name": "Fähigkeiten CLI",
      "desc": "Cursor Agent lässt es zunächst planen und dann ausführen; Größere Änderungen erfordern Schritt-für-Schritt-Commit-Anweisungen.",
      "installNote": "Das Installationsprogramm selbst; Das obige Befehlsbeispiel installiert die offizielle Skill-Sammlung von Vercel"
    },
    "Anthropic Skills": {
      "name": "Anthropische Fähigkeiten",
      "desc": "Anthropics offizielle Kompetenzdemonstrationsbibliothek, einschließlich Beispielen auf Produktionsebene für Kreativität, Entwicklung, Unternehmenskommunikation und Dokumentenverarbeitung (DOCX/PDF/PPTX/XLSX).",
      "installNote": "Claude Code Auch verfügbar: /plugin Marketplace Add Anthropics/Skills"
    },
    "Antigravity Awesome Skills": {
      "name": "Tolle Antigravitationsfähigkeiten",
      "desc": "Eine tolle Sammlung von über 1.600 installierbaren Fähigkeiten, einschließlich spezieller Plug-in-Pakete und Rollenpakete für Web, Sicherheit, Daten, DevOps, Qualitätssicherung, Marketing usw.",
      "installNote": "Claude Code: npx antigravity-awesome-skills --claude"
    },
    "Claude Skills 大全": {
      "name": "Claude Skills Enzyklopädie",
      "desc": "337 Fertigkeiten und mehr als 70 benutzerdefinierte Befehle decken alle Funktionsszenarien wie Technik, Marketing, Produkt, Compliance, Forschung, Finanzen usw. ab."
    },
    "Awesome Agent Skills": {
      "name": "Tolle Agentenfähigkeiten",
      "desc": "Der über 1.000 Community- und offizielle Skill-Index, kuratiert von VoltAgent, eignet sich zum Durchsuchen nach Richtung und anschließender Installation.",
      "installNote": "Zuerst mit find suchen, dann mit npx skills installieren und <repo> hinzufügen"
    },
    "Agent Skills 规范": {
      "name": "Spezifikation der Agentenfähigkeiten",
      "desc": "Öffnen Sie die offiziellen Spezifikationen und Dokumente des Agent Skills-Standards (agentskills.io). Die Fertigkeiten auf jeder Plattform folgen dem SKILL.md-Format.",
      "installNote": "Nutzen Sie CLI-Gerüst, um neue Fähigkeiten zu schaffen, die den Spezifikationen entsprechen"
    },
    "Superpowers": {
      "name": "Superkräfte",
      "desc": "Die beliebteste Agentenentwicklungsmethode: Brainstorming → Designüberprüfung → TDD-Implementierungsplan → Subagenten-gesteuerte Entwicklung, die den gesamten Prozess automatisch auslöst.",
      "installNote": "Cursor:/add-plugin Superkräfte · Codex:/plugins Suche nach Superkräften"
    },
    "Agent Skills (Addy Osmani)": {
      "name": "Agentenfähigkeiten (Addy Osmani)",
      "desc": "Von Google-Ingenieuren entwickelte technische Fähigkeiten auf Produktionsebene: Entwicklungsspezifikationen auf Unternehmensebene wie Architekturüberprüfung, Leistungsoptimierung, Teststrategie, Codeüberprüfung usw."
    },
    "Awesome Copilot": {
      "name": "Toller Copilot",
      "desc": "Eine Sammlung von Copilot-Anweisungen, Agenten, Fähigkeiten und Konfigurationen, die von der GitHub-Community bereitgestellt wurden und Entwicklungsszenarien wie PR-Überprüfung, Tests, Dokumentation und Sicherheit abdecken."
    },
    "Context Engineering Skills": {
      "name": "Kontexttechnische Fähigkeiten",
      "desc": "Besondere Fähigkeiten im Kontext-Engineering: RAG, Speicher, Tool-Orchestrierung und Optimierung des Agenten-Kontextfensters, geeignet für komplexe mehrstufige Entwicklungsaufgaben."
    },
    "Planning with Files": {
      "name": "Planen mit Dateien",
      "desc": "Verwenden Sie das Dateisystem als externen Speicher: Planung, Fortschritt und Wissensakkumulation, geeignet für die langfristige Projekt- und Betriebs-SOP-Verwaltung."
    },
    "Vercel Agent Skills": {
      "name": "Fähigkeiten des Vercel-Agenten",
      "desc": "Offizielle Kompetenzsammlung von Vercel: Best Practices für React, Webdesign-Spezifikationen, Front-End-Leistung, Next.js-Modus und andere Spezialisierungsfunktionen für die Webentwicklung.",
      "installNote": "Sie können auch einzelne Elemente wie Frontend-Design und React-Best-Practices installieren."
    },
    "Frontend Design": {
      "name": "Frontend-Design",
      "desc": "Vercels offizielle Front-End-Designkompetenz: Satz, Farbabstimmung, Layout und Komponentenprozessspezifikationen, um eine ausdrucksstarke KI-Schnittstellenästhetik zu vermeiden."
    },
    "Awesome Design Skills": {
      "name": "Tolle Designfähigkeiten",
      "desc": "Ausgewählte Sammlung von Designfähigkeiten: Layout, Farbabstimmung, Komponententechnologie und Anti-KI-Ästhetikroutinen, geeignet für Landingpages und Produktschnittstellen."
    },
    "Stitch Skills": {
      "name": "Stichfähigkeiten",
      "desc": "Google Stitch Design Skill: Generieren Sie hochauflösende Schnittstellen- und Komponentenspezifikationen aus der Designabsicht, die für schnelles Prototyping und visuelle Iteration geeignet sind."
    },
    "Vue.js AI Skills": {
      "name": "Vue.js KI-Fähigkeiten",
      "desc": "Vue 3 ökologische Spezialfähigkeiten: kombinierte API, Pinia, Nuxt-Modus und Best Practices, geeignet für Vue-Full-Stack-Projekte."
    },
    "OpenMontage": {
      "name": "OpenMontage",
      "desc": "Das Open-Source-Agent-Videoproduktionssystem: 12 Pipelines, 52 Tools, über 500 Fähigkeiten, die Skripte, Storyboards, TTS, Bearbeitung und fertigen Filmexport abdecken und den Codierungsassistenten in ein Videostudio verwandeln.",
      "installNote": "Screenshots und Ausfüllen von Formularen"
    },
    "ViMax": {
      "name": "ViMax",
      "desc": "Das von der Universität Hongkong entwickelte Agent-Videogenerierungs-Framework: Regisseur, Drehbuchautor, Produzent und Generator sind integriert, mit vollautomatischer Anordnung von der Kreativität bis zum fertigen Film."
    },
    "Remotion Skills": {
      "name": "Remotionsfähigkeiten",
      "desc": "Verwenden Sie React, um Videos programmgesteuert zu generieren: gesprochene Untertitel, Bewegungseffekte, Markentitel und Kurzvideos zur Datenvisualisierung, geeignet für die Massenproduktion wissensbasierter Kurzvideos."
    },
    "Pika Skills": {
      "name": "Pika-Fähigkeiten",
      "desc": "Pika AI-Fähigkeit zur Videogenerierung: Vincent-Video, Tusheng-Video und stilisierter Spezialeffekt-Workflow, geeignet für kreative Kurzfilme und Werbekonzeptfilme."
    },
    "Google Gemini 视频生成": {
      "name": "Google Gemini-Videogenerierung",
      "desc": "Offizieller Gemini-API-Skill von Google: Enthält den Sub-Skill media_generation, unterstützt Veo Wensheng-Video, Tusheng-Video und multimodale Materialgenerierung.",
      "installNote": "Nach der Installation können Sie Sub-Skills wie media_generation verwenden, um das Veo-Videomodell aufzurufen"
    },
    "OpenAI Codex 多媒体": {
      "name": "OpenAI Codex Multimedia",
      "desc": "Offizielles Codex-Skill-Verzeichnis von OpenAI: Enthält Imagegen, Sora und andere Multimedia-Generierungs- und Bearbeitungs-Subskills, die für die agentengesteuerte Produktion kreativer Materialien geeignet sind.",
      "installNote": "Sie können /skills in Codex verwenden, um kuratierte Unterfähigkeiten wie Imagegen zu durchsuchen."
    },
    "Marketing Skills (视频)": {
      "name": "Marketingfähigkeiten (Video)",
      "desc": "Die Sammlung von Marketingkompetenzen umfasst Video-Unterkompetenzen: kurze Videoskripte, Werbefilmstrukturen, Social-Media-Videostrategien und Workflows für das Verfassen von Videotexten zur Konvertierung."
    },
    "Social Media Skills (短视频)": {
      "name": "Social-Media-Kenntnisse (kurzes Video)",
      "desc": "Fähigkeiten im Bereich Social-Media-Content-Strategie: kurze Videoskripte, Themenplanung, Storyboard-Rhythmus und plattformübergreifender Content-Kalender, geeignet für TikTok-/Douyin-/Reels-Operationen."
    },
    "Claude SEO (电商)": {
      "name": "Claude SEO (E-Commerce)",
      "desc": "Enthält E-Commerce-SEO-Unterkompetenzen: Kategorieseiten, strukturierte Produktdaten, internationales Website-Hreflang und Conversion-Landingpage-Optimierung, geeignet für Plattformverkäufer und DTC.",
      "installNote": "Nach der Installation stehen Unterfähigkeiten wie E-Commerce-SEO und Schema-Markup zur Verfügung."
    },
    "GEO SEO Claude": {
      "name": "GEO SEO Claude",
      "desc": "SEO-Fähigkeit mit GEO-Priorität: KI-Suchsichtbarkeit, Markenautorität, Schema- und Multiplattform-Zitatoptimierung, geeignet für ausländische Marken, um Kunden zu gewinnen."
    },
    "Last 30 Days": {
      "name": "Letzte 30 Tage",
      "desc": "Recherchieren Sie zu jedem Thema auf Reddit, X, YouTube, HN, Polymarket und im gesamten Web und erstellen Sie gut dokumentierte zusammenfassende Berichte."
    },
    "Apify Agent Skills": {
      "name": "Fähigkeiten des Apify-Agenten",
      "desc": "Automatische Web-Crawling-Fähigkeit: Strukturierte Sammlung von Seitendaten, geeignet für die Erfassung von Betriebsdaten und die Überwachung von Wettbewerbsprodukten."
    },
    "Agent Reach": {
      "name": "Agentenreichweite",
      "desc": "Internetfähiger Router: Einheitliche Recherche und Suche auf 13 Plattformen, darunter Xiaohongshu, Twitter, Bilibili, Reddit, GitHub, YouTube usw."
    },
    "Humanizer 中文版": {
      "name": "Chinesische Version von Humanizer",
      "desc": "Die chinesische Version von Humanizer ist für chinesische KI-Spuren optimiert und eignet sich zum Entfernen des KI-Geschmacks aus chinesischen Inhalten wie öffentlichen Konten, Zhihu und Xiaohongshu."
    },
    "MD2WeChat Skill": {
      "name": "MD2WeChat-Fähigkeit",
      "desc": "Markdown-Ein-Klick-Schriftsatz zum Veröffentlichen öffentlicher WeChat-Konten: über 40 Stilthemen, KI-Illustrationen, Stapelveröffentlichung und Verwaltung mehrerer Konten, geeignet für Self-Media-Matrixvorgänge."
    },
    "Claude SEO": {
      "name": "Claude SEO",
      "desc": "25 Unterfähigkeiten + 18 Unteragenten: technisches SEO, internationales SEO, E-Commerce-SEO, externe Links und PDF/Excel-Berichte, geeignet für Markenwachstumsteams."
    },
    "Marketing Skills": {
      "name": "Marketingfähigkeiten",
      "desc": "Marketing Skills Family Bucket: CRO, Texterstellung, SEO, Analyse und Wachstumstechnik, 35.000+ Star-Community-Kompetenzpaket für bevorzugte Marketingagenten."
    },
    "PM Skills": {
      "name": "PM-Fähigkeiten",
      "desc": "Marktplatz für Produktmanager-Fähigkeiten: Über 100 Agentenfähigkeiten, Befehle und Plugins von der Entdeckung, Strategie und Ausführung bis hin zum Go-Live und Wachstum."
    },
    "Claude Skills 大全 (营销)": {
      "name": "Claude Skills Enzyklopädie (Marketing)",
      "desc": "Zu den 337-Fähigkeiten gehören Vorlagen für Marketing, Branding, Inhalte und Wachstumsexperimente, die Marketingteams schnell starten können."
    },
    "Humanizer": {
      "name": "Humanisierer",
      "desc": "Entfernt Spuren von KI-generiertem Text und macht Artikel natürlicher und ähnelt eher menschlichem Schreiben; Geeignet zum Bloggen, zum Verfassen von Marketingtexten und zum Polieren von Inhalten für externe Veröffentlichungen."
    },
    "Agent Rules Books": {
      "name": "Agentenregelbücher",
      "desc": "Fähigkeit zum Schreiben langer Artikel: Strukturierte Regeln für das Schreiben von Büchern/Berichten und Kapitelanordnung, geeignet für die Erstellung von Whitepapers und Kursinhalten."
    },
    "Awesome Agent Skills 索引": {
      "name": "Toller Agentenfähigkeitsindex",
      "desc": "Community Skill Index, nach Branche und Zweck durchsuchen und dann gezielt installieren, geeignet zum Entdecken von Fähigkeiten in vertikalen Bereichen."
    },
    "PM Claude Skills": {
      "name": "PM Claude Skills",
      "desc": "PM-Spezialität Claude Skill: Benutzerinterviews, PRD, Roadmap und OKR-Alignment-Workflow."
    },
    "noobnooc Skills": {
      "name": "noobnooc-Fähigkeiten",
      "desc": "Hybrid-Skill-Paket für Produkt, Betrieb und Wachstum: Experimentdesign, Metrik-Dashboard und Feature-Release-Checkliste."
    },
    "Acontext": {
      "name": "Ein Kontext",
      "desc": "Aufgabenskript: Holen Sie sich die Top 10 AI-Keyword-Beiträge in der HN Algolia API"
    },
    "Trail of Bits Skills": {
      "name": "Spur der Bits-Fähigkeiten",
      "desc": "Das Sicherheitsteam von Trail of Bits produziert: Schwachstellenerkennung, statische Analyse, Audit-Workflow, Vertragssicherheit und andere professionelle Sicherheitsforschungskompetenzen."
    },
    "Cisco Skill Scanner": {
      "name": "Cisco Skill Scanner",
      "desc": "Skill-Sicherheitsscanner: Erkennt bösartige oder risikoreiche Agenten-Skills und eignet sich für die Skill-Governance von Teams und die Prüfung der Lieferkette."
    },
    "Claude BugHunter": {
      "name": "Claude BugHunter",
      "desc": "Automatisierte Bug Hunter-Fähigkeit: Code-Audit, Regressionsüberprüfung und sicherheitsbezogene Fehlererkennungs-Workflows."
    },
    "Scientific Agent Skills": {
      "name": "Fähigkeiten wissenschaftlicher Agenten",
      "desc": "Bilder der Leonardo-Charakterserie"
    },
    "Text-to-CAD": {
      "name": "Text-zu-CAD",
      "desc": "Fähigkeit zur Erstellung von Textbeschreibungen für CAD-Modelle, geeignet für die schnelle Modellierung von Prototypen in den Bereichen Technik, Fertigung und wissenschaftliche Forschung."
    },
    "Document Skills (Anthropic)": {
      "name": "Dokumentfähigkeiten (anthropisch)",
      "desc": "Anthropische Dokumentfähigkeiten auf Produktionsebene: DOCX-Bearbeitung, PDF-Analyse, PPTX-Folien, XLSX-Tabellen und haben den gleichen Ursprung wie Claudes Dokumentfähigkeiten.",
      "installNote": "Claude Code-Plugin:/plugin install document-skills@anthropic-agent-skills"
    },
    "Browser Use": {
      "name": "Browsernutzung",
      "desc": "KI-gesteuerte Browser-Automatisierung: Agent durchsucht selbstständig, füllt Formulare aus, crawlt und verifiziert, geeignet für Betriebs- und Testszenarien."
    },
    "Playwright Skill": {
      "name": "Fähigkeiten als Dramatiker",
      "desc": "Claude Code Browser Automation Skill: Agent schreibt und führt selbstständig Playwright-Skripte für E2E-Tests und Seitenverifizierung aus."
    },
    "Obsidian Skills": {
      "name": "Obsidian-Fähigkeiten",
      "desc": "Bringen Sie dem Agenten bei, Obsidian CLI und offene Formate (Markdown, Bases, JSON Canvas) zu verwenden, um Notizen und Wissensdatenbankvorgänge zu automatisieren."
    },
    "Google Workspace CLI": {
      "name": "Google Workspace-CLI",
      "desc": "Google Office Suite CLI-Fähigkeit: Automatisierung von Dokumenten, Tabellen und Folien, geeignet für die Stapelverarbeitung von Berichten und kollaborativen Dokumenten."
    },
    "Skill Creator": {
      "name": "Skill-Ersteller",
      "desc": "Verwenden Sie das Skills-CLI-Gerüst, um SKILL.md zu erstellen, das den Agent Skills-Spezifikationen entspricht und sich für Teams eignet, um benutzerdefinierte Workflows und Domänenwissen zu sammeln.",
      "installNote": "Generieren Sie die Vorlage SKILL.md im aktuellen Verzeichnis und geben Sie den Namen und die Beschreibung ein."
    },
    "Finance Skills": {
      "name": "Finanzkenntnisse",
      "desc": "Kenntnisse in der Finanzanalyse: Interpretation von Kontoauszügen, Bewertungsmodelle, Unterstützung bei der Erstellung von Budget- und Investitions- und Finanzierungsmaterialien."
    },
    "Awesome Finance Skills": {
      "name": "Tolle Finanzkenntnisse",
      "desc": "Ausgewählter Index finanzieller Kompetenzen: eine Sammlung von Szenariovorlagen für Buchhaltung, Investitionen, Risikokontrolle und FP&A."
    },
    "Claude Skills 大全 (财务)": {
      "name": "Claude Skills Encyclopedia (Finanzen)",
      "desc": "Zu den Fähigkeiten von 337 gehören Finanzmodellierung, Budgetierung, Investitionen und Finanzierung sowie Compliance-Berichtsvorlagen, die für Finanz- und Geschäftsanalyseteams geeignet sind."
    },
    "Smithery Skills": {
      "name": "Schmiedekenntnisse",
      "desc": "Die von Smithery hergestellte MCP/Skill-Erkennungs- und Installationsplattform Skill kann beliebte Registry-Server durchsuchen und Client-Konfigurationsfragmente generieren.",
      "installNote": "Die Cursor-/Claude-Konfiguration kann auch mit einem Klick auf der Webseite smithery.ai generiert werden"
    },
    "Cursor Directory Skills": {
      "name": "Cursor-Verzeichnisfähigkeiten",
      "desc": "Von der Community kuratierte Cursor-Regeln und Fähigkeitsindizes, die hochfrequente Projektvorlagen wie Full-Stack-, Mobil- und KI-Anwendungen abdecken."
    },
    "Cloudflare Agent Skills": {
      "name": "Fähigkeiten des Cloudflare-Agenten",
      "desc": "Offizieller Agenten-Skill von Cloudflare: Workers-, R2-, KV-, D1- und Pages-Entwicklungsmodi, geeignet für Edge Computing und Full-Stack-Bereitstellung."
    },
    "Composio Tool Router Skills": {
      "name": "Composio Tool Router-Kenntnisse",
      "desc": "Composio-Tool-Routing-Fähigkeit: einheitlicher Zugriff auf Gmail, GitHub, Slack, Notion und andere über 100 SaaS, wodurch der Klebercode des Agent-Tools reduziert wird."
    },
    "LangGraph Agent Skills": {
      "name": "Fähigkeiten des LangGraph-Agenten",
      "desc": "LangChain offizielle LangGraph-Fähigkeit: Multi-Agenten-Orchestrierung, Zustandsdiagramme, Prüfpunkte und manuelle Genehmigungsknoten, geeignet für komplexe Automatisierung."
    },
    "Windsurf Wave Skills": {
      "name": "Windsurf-Wellenfähigkeiten",
      "desc": "Besondere Fähigkeiten von Codeium Windsurf: Cascade-Speicherdateien, Wave-Bearbeitung mehrerer Dateien und Refactoring-Workflow auf Code-Basisebene."
    },
    "shadcn/ui Agent Skills": {
      "name": "shadcn/ui-Agentenfähigkeiten",
      "desc": "Fertigkeit zur Herstellung von Shadcn/UI-Komponenten: Radix + Tailwind-Modus, Zugänglichkeit und Themenvariablen, um zu vermeiden, dass KI eine billige Benutzeroberfläche generiert.",
      "installNote": "Der Effekt ist besser, wenn er mit npx shadcn@latest add verwendet wird"
    },
    "Figma to Code Skills": {
      "name": "Figma zu Code-Fähigkeiten",
      "desc": "Vom Entwurf zum Code werden Fertigkeiten: Figma-Knoten, Abstände und Schriftarten analysieren und ein React/Tailwind-Komponentenskelett generieren."
    },
    "ComfyUI Workflow Skills": {
      "name": "ComfyUI-Workflow-Kenntnisse",
      "desc": "ComfyUI-Workflow-Fähigkeit: SD3/Flux-Knoten-Orchestrierung, ControlNet und Batch-Bildausgabe, geeignet für E-Commerce und Kursbild-Matching-Pipelines."
    },
    "CapCut Agent Skills": {
      "name": "Fähigkeiten des CapCut-Agenten",
      "desc": "Öffnen Sie nach der Besprechung das Copilot-Panel, um die Liste der Sprechersegmente und Entscheidungen anzuzeigen."
    },
    "Shopify Hydrogen Skills": {
      "name": "Wasserstoffkompetenzen von Shopify",
      "desc": "Shopify Hydrogen E-Commerce-Fähigkeit: Headless Store, Produktseiten-SEO und Warenkorbkomponenten, geeignet für grenzüberschreitende unabhängige Websites."
    },
    "Amazon SP-API Skills": {
      "name": "Amazon SP-API-Kenntnisse",
      "desc": "Neue Leads aus dem Formular werden automatisch bewertet und an verschiedene Slack-Kanäle weitergeleitet."
    },
    "XHS Creator Skills": {
      "name": "XHS Creator-Fähigkeiten",
      "desc": "Fähigkeiten zur Erstellung von Xiaohongshu: Titelformel, Titelschlüsselwörter, Themen-Tags und Leitfäden für den Kommentarbereich, alles im Einklang mit dem Ton der Plattform."
    },
    "GEO SEO Skills": {
      "name": "GEO-SEO-Fähigkeiten",
      "desc": "Generative Engine Optimization (GEO)-Fähigkeit: Strukturierte FAQ, Schema und llms.txt zur Verbesserung der Sichtbarkeit der KI-Suche."
    },
    "Technical Writing Skills": {
      "name": "Technische Schreibfähigkeiten",
      "desc": "Technische Dokumentationsfähigkeit: API-Referenz, README, Änderungsprotokoll und Tutorialstruktur, im Einklang mit den vier Quadranten der Divio-Dokumentation."
    },
    "Deep Research Skills": {
      "name": "Tiefe Forschungsfähigkeiten",
      "desc": "Vertiefte Recherchefähigkeiten: Suche in mehreren Quellen, Vergleichstabelle, Zitierverwaltung und Annotation von Unsicherheiten, geeignet für wettbewerbsfähige Produkt- und Marktanalysen."
    },
    "n8n Workflow Skills": {
      "name": "n8n-Workflow-Kenntnisse",
      "desc": "n8n-Automatisierungsfähigkeit: Generieren Sie RSS → KI-Zusammenfassung → E-Mail/Feishu und andere Workflow-JSON, um den Aufbau von Betriebspipelines zu beschleunigen."
    },
    "Stagehand": {
      "name": "Bühnenarbeiter",
      "desc": "Browserbase Stagehand: Natürliche Sprache steuert Browservorgänge, schreibt automatisch Playwright-Skripte und führt Überprüfungen durch."
    },
    "LaTeX Paper Skills": {
      "name": "LaTeX-Papierkenntnisse",
      "desc": "Akademische Papierkenntnisse: LaTeX-Vorlage, Formelformatierung, Referenz-BibTeX und Verfassen von Antwortschreiben für Rezensionen."
    },
    "Zapier Automation Skills": {
      "name": "Zapier-Automatisierungsfähigkeiten",
      "desc": "Zapier-Integrationskompetenz: Beschreiben Sie Auslöser und Aktionen, generieren Sie Zap-Entwürfe und Testlisten und stellen Sie eine Verbindung zu über 7000 Anwendungen her."
    }
  }
} });
})();
