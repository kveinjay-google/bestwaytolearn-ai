/* DE overlays — ai-briefing + latest-tutorials */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("de", {
  "aiBriefing": {
    "meta": {
      "lead": "Täglich kuratierte Neuigkeiten aus der KI-Branche, archiviert nach Datum. Jeden Morgen aktualisiert – in 3 Minuten den Puls erfassen.",
      "updatedLabel": "Letzte Aktualisierung: {Datum}",
      "countShown": "Zeigt {visible} / {total}",
      "emptyHint": "Lebensdienstleistungen",
      "readMore": "Quelle lesen",
      "sourceLabel": "Quelle",
      "backToList": "Zurück zum Briefing",
      "newBadge": "Neu",
      "highlightsLabel": "Wichtige Erkenntnisse"
    },
    "categories": {
      "全部": "Alle",
      "产品发布": "Produkteinführung",
      "开源模型": "Open-Source-Modell",
      "行业动态": "Branchentrends",
      "政策监管": "politische Aufsicht",
      "研究突破": "Forschungsdurchbruch"
    },
    "items": [
      {
        "id": "2026-07-02-openai-responses-api",
        "title": "OpenAI führt den einheitlichen Agenten-Anrufeingang der Responses API ein",
        "summary": "Die neue API integriert Konversationen, Toolaufrufe, Codeausführung und Dateiabruf in einem einzigen Anforderungsfluss und ermöglicht Entwicklern so die Erstellung mehrstufiger Agenten mit weniger Glue-Code. Gleichzeitig wird der offizielle Python SDK 2.x-Migrationsleitfaden veröffentlicht.",
        "source": "OpenAI Developer Blog",
        "body": [
          "OpenAI hat die Responses API offiziell veröffentlicht, mit dem Ziel, die Funktionen, die in Chat-Abschlüssen, Assistenten, Tool-Aufrufen und Codeausführung verstreut waren, in einem einheitlichen Agenten-Anruf-Link zusammenzuführen. Für Entwickler besteht die größte Änderung darin, dass mehrstufige Aufgaben nicht mehr das handschriftliche Schreiben einer großen Menge an „Request-Wait-Request“-Leimlogik auf der Anwendungsebene erfordern.",
          "Die neue API unterstützt nativ Tool-Aufrufe, Code-Interpreter, Dateiabruf und Netzwerksuchfunktionen und ermöglicht die Verbindung mehrerer Argumentationsrunden im selben Antwortstrom. Offizielle Beispiele zeigen, dass ein Kundendienstmitarbeiter den Prozess vom Verständnis der Benutzerabsichten über die Abfrage von Bestellungen, den Aufruf der Rückerstattungsschnittstelle bis hin zur Generierung von Antworten innerhalb eines einzigen Anfragelebenszyklus abschließen kann.",
          "Der gleichzeitig veröffentlichte Python SDK 2.x-Migrationsleitfaden ordnet die alte Version von chat.completions + den manuellen Funktionsaufrufmodus der Event-Stream-Schreibmethode von „responses.create“ zu. Bestehende Benutzer der Assistants-API können stapelweise migrieren, und OpenAI verspricht, dass die Assistants-Schnittstelle bis Ende 2026 kompatibel bleiben wird.",
          "Für inländische Teams wird empfohlen, zunächst zu prüfen, ob die vorhandenen „Multi-API-Assembly“-Agent-Links mit der Responses-API konvergiert werden können, wenn das Produkt mit der offiziellen OpenAI-API verbunden wurde, um Verzögerungen und Fehlerquellen zu reduzieren. Wenn Sie einen Proxy eines Drittanbieters verwenden, müssen Sie bestätigen, ob der Proxy der Schnittstelle gefolgt ist."
        ],
        "highlights": [
          "Eine einzige API, die Konversationen, Tools, Codeausführung und -abruf abdeckt",
          "Der Multi-Step-Agent reduziert den Klebercode der Anwendungsschicht",
          "Python SDK 2.x bietet eine vollständige Migrationsanleitung",
          "Geeignet für Kundendienst-, Büroautomatisierungs- und Datenanalyseagenten"
        ],
        "tags": [
          "API",
          "Agent",
          "OpenAI"
        ]
      },
      {
        "id": "2026-07-02-anthropic-sonnet-speed",
        "title": "Anthropic veröffentlicht die Hochgeschwindigkeitsversion Claude Sonnet 4.5, die die Latenz der Codierungsszene um 40 % reduziert",
        "summary": "Das neue Modell ist für die IDE-Vervollständigung und lange Kontextrekonstruktion optimiert. Es behält die Sonnet-Level-4-Genauigkeit auf der SWE-Bench-Teilmenge bei und reduziert gleichzeitig die Verzögerung des ersten Tokens erheblich. Für Claude Code-Benutzer ist es standardmäßig aktiviert.",
        "source": "Anthropic News",
        "body": [
          "Anthropic bringt Claude Sonnet 4.5 „High-Speed ​​​​Edition“ (interner Codename Sonnet Speed) auf den Markt, die sich auf die Codevervollständigung in Echtzeit und die Rekonstruktion langer Dateien innerhalb der IDE konzentriert. Offizielle Daten besagen, dass die erste Token-Verzögerung im Vergleich zum Standard-Sonnet 4 um etwa 40 % reduziert wird und ein akzeptabler Durchsatz unter dem 128-KByte-Kontextfenster weiterhin aufrechterhalten wird.",
          "Diese Version wurde speziell für drei Arten von Szenarien optimiert: einzeilige/mehrzeilige Vervollständigung, dateiübergreifender Symbolsprung und Workflow „Ausgewählter Codeblock → Rekonstruktion natürlicher Sprache“. Benutzer des Claude Code-Plug-ins werden standardmäßig zur Hochgeschwindigkeitsversion weitergeleitet, und Clients von Drittanbietern wie Cursor müssen auf die Ankündigung der Anpassung warten.",
          "Dateiinhalt abrufen",
          "Wenn Sie Claude jeden Tag zum Schreiben von Code verwenden, können Sie den Modellparameter in der API-Konsole auf claude-sonnet-4-5-speed umstellen (der spezifische Slug unterliegt dem offiziellen Dokument) und dann nach dem Vergleich der Verzögerung und der Rechnungsänderungen entscheiden, ob der vollständige Wechsel erfolgen soll."
        ],
        "highlights": [
          "Die erste Token-Verzögerung wird um etwa 40 % reduziert",
          "Claude Code ist standardmäßig aktiviert und für die tägliche Codierung geeignet",
          "Die Genauigkeit des SWE-Benchmarks ist grundsätzlich dieselbe wie bei Sonnet 4",
          "Für komplexe Architekturentwürfe empfiehlt es sich dennoch, stärkere Modelle zu verwenden"
        ],
        "tags": [
          "Claude",
          "编程",
          "Anthropic"
        ]
      },
      {
        "id": "2026-07-01-qwen3-32b",
        "title": "Tongyi Qianwen Qwen3-32B-Instruct ist Open Source, eine einzelne Karte mit 24 GB kann Vollblut-Argumentation ausführen",
        "summary": "Alibabas Open-Source-32B-Anweisungs-Feinabstimmungsversion unterstützt 128K-Kontext- und Tool-Aufrufformate; Die Community-Bewertung zeigt, dass die Denk- und Codierungsfunktionen Chinas nahezu auf dem Niveau von Closed-Source-Modellen liegen und für den privaten Einsatz vor Ort geeignet sind.",
        "source": "Qwen GitHub",
        "body": [
          "Das Team von Tongyi Qianwen hat Qwen3-32B-Instruct als Open-Source-Lösung entwickelt, das Hauptmodell der Qwen3-Serie für „Einzelkarten-bereitstellbare“ Szenarien. Das Gewicht ist unter der Apache 2.0-Lizenz lizenziert und unterstützt die kommerzielle Nutzung (Sie müssen die neuesten Lizenzbedingungen selbst bestätigen).",
          "Das Modell unterstützt 128K-Kontext, native Funktionsaufrufe und JSON-Schemaausgabe. Die Reproduktionsergebnisse der Community bei Benchmarks wie MMLU, C-Eval und HumanEval zeigen, dass die chinesischen Argumentations- und Codegenerierungsfähigkeiten nahe an GPT-4o mini und frühen Versionen von Claude 3.5 Sonnet liegen und deutlich stärker sind als die Qwen2.5-32B der vorherigen Generation.",
          "In Bezug auf die Hardware erfordert die Vollblut-Inferenz von BF16 etwa 64 GB Videospeicher; Nach der Quantifizierung kann INT4 auf einer einzelnen RTX 4090 (24 GB) mit etwa 15–25 Token/s ausgeführt werden, was für einzelne Entwickler und den Intranet-Einsatz kleiner und mittlerer Unternehmen geeignet ist. Ollama, llama.cpp und vLLM bieten alle Zusammenführungsskripte oder voreingestellte Modellkarten.",
          "Wenn Sie einen KI-Assistenten evaluieren, der „die Daten nicht aus dem Intranet herauslässt“, ist Qwen3-32B derzeit ein sehr kostengünstiger Ausgangspunkt: Verwenden Sie zunächst Ollama zum Abrufen und Testen und entscheiden Sie dann basierend auf den Geschäftsanforderungen, ob Sie dem vLLM-Cluster beitreten möchten."
        ],
        "highlights": [
          "Apache 2.0 Open Source, unterstützt 128.000 Kontexte",
          "Eine INT4-quantisierte Einzelkarte mit 24 GB kann begründet werden",
          "Die chinesischen Sprach- und Codierungsfunktionen liegen nahezu auf dem gleichen Niveau wie das Closed-Source-Modell",
          "Das Ollama/vLLM-Ökosystem ist gefolgt"
        ],
        "tags": [
          "开源",
          "Qwen",
          "本地部署"
        ]
      },
      {
        "id": "2026-07-01-google-gemini-live",
        "title": "Die Google Gemini Live API ermöglicht Entwicklern multimodale Sitzungen in Echtzeit",
        "summary": "Entwickler können auf Sprach- und Video-Streaming-Gespräche mit geringer Latenz zugreifen, Unterbrechungen und Bildschirmfreigabekontext unterstützen; Android und Web SDK werden gleichzeitig gestartet und eignen sich für Kundendienst- und Vor-Ort-Beratungsanwendungen.",
        "source": "Google Developers",
        "body": [
          "Google öffnet die Gemini Live API für Entwickler und ermöglicht Apps den Zugriff auf Sprach- und Video-Streaming-Gespräche mit geringer Latenz. Im Gegensatz zum Stapelverarbeitungsmodus zum gleichzeitigen Hochladen von Bildern/Audio hält die Live-API eine lange Verbindungssitzung aufrecht, das Modell kann „zuhören, beobachten und reagieren“ und unterstützt Benutzer dabei, jederzeit zu unterbrechen.",
          "Als neuen Indikator schlugen die Forscher die „Fehlerwiederherstellungsrate“ vor – ob der Agent seine Strategie anpassen und es basierend auf der Fehlermeldung erneut versuchen kann, nachdem der Tool-Aufruf fehlgeschlagen ist. Die Ergebnisse zeigen, dass selbst das stärkste Modell eine Fehlerwiederherstellungsrate von nur etwa 50 % aufweist, was darauf hindeutet, dass der aktuelle Agent noch weit davon entfernt ist, ein „zuverlässiger digitaler Mitarbeiter“ zu sein.",
          "Auf technischer Ebene basiert die Live-API auf bidirektionalem WebSocket-Streaming, der Ton ist standardmäßig auf 16 kHz PCM eingestellt und die Videobilder werden in JPEG-Sequenzen übertragen. Entwickler müssen sich selbst mit VAD (Voice Activity Detection) und Echounterdrückung befassen, und Google stellt eine Referenzimplementierung bereit. Die Abrechnung basiert auf Sitzungslänge + Eingabe-/Ausgabe-Token-Stack.",
          "Inländische Entwickler sollten beachten: In einigen Regionen muss auf die Gemini-API über Compliance-Agenten zugegriffen werden, und Echtzeit-Videostreaming erfordert eine hohe Bandbreite. Es wird empfohlen, die offizielle Demo auf der Website zu verwenden, um die Verzögerung zu überprüfen, bevor Sie sie in das Produkt integrieren."
        ],
        "highlights": [
          "Lange WebSocket-Verbindung, unterstützt Sprach- und Videogespräche in Echtzeit",
          "Benutzer können jederzeit unterbrechen, was für natürliche Interaktionsszenarien geeignet ist",
          "Android/Web SDK ist geöffnet",
          "Geeignet für Kundendienst-, Unterrichts- und Beratungsanwendungen vor Ort"
        ],
        "tags": [
          "Gemini",
          "多模态",
          "API"
        ]
      },
      {
        "id": "2026-06-30-mcp-registry",
        "title": "Öffentliche Betaversion der offiziellen MCP-Registrierung: Erkennung und Installation des Servers mit einem Klick",
        "summary": "Das Model Context Protocol startet eine zentralisierte Registrierung. Cursor-, Claude Desktop- und VS Code-Erweiterungen können direkt den am höchsten bewerteten MCP-Server durchsuchen und so die Eintrittsschwelle für Agent-Tool-Links senken.",
        "source": "MCP Blog",
        "body": [
          "Das von Anthropic geleitete Model Context Protocol (MCP) hat eine offizielle öffentliche Betaversion der Registry veröffentlicht, die zentralisierte Servererkennung, Versionsverwaltung und Ein-Klick-Installationsfunktionen bietet. In der Vergangenheit mussten Entwickler das GitHub-Repository manuell klonen und JSON konfigurieren. Jetzt können sie es direkt in den Erweiterungen Cursor, Claude Desktop und VS Code suchen und installieren.",
          "Der erste Registry-Stapel umfasst mehr als 200 Server und deckt Hochfrequenz-Tools wie GitHub, Slack, PostgreSQL, Brave Search und Filesystem ab. Jeder Server zeigt Downloads, aktuelle Updates, kompatible Clients und Community-Bewertungen an und unterstützt das Filtern nach Tags (Datenbank, Suche, Automatisierung usw.).",
          "Für Agent-Entwickler bedeutet dies, dass die Tool-Link-Verbindungskosten erheblich gesunken sind: Die Erstellung eines neuen Agenten, der „das Warehouse lesen, die Datenbank abfragen und Slack senden“ kann, wurde von Tagen auf Stunden verkürzt. Allerdings müssen Sie in der Produktionsumgebung dennoch darauf achten, die Berechtigungen zu minimieren – die Qualität des Servers in der Registrierung variiert, lesen Sie daher vor der Installation bitte den Quellcode und die Berechtigungserklärung.",
          "Der MCP-Navigationsabschnitt von BestWayToLearn.AI wird weiterhin beliebte Registrierungseinträge synchronisieren. Es wird empfohlen, mit einem offiziell zertifizierten Server zu beginnen, um die Installation von Drittanbieterpaketen aus unbekannten Quellen zu vermeiden."
        ],
        "highlights": [
          "Über 200 Server können mit einem Klick auf Mainstream-Clients installiert werden",
          "Android/Web SDK ist geöffnet",
          "Unterstützt Bewertungen, Tags und Versionsverwaltung",
          "Die Produktionsumgebung muss auf Berechtigungen und Quellcodeprüfung achten"
        ],
        "tags": [
          "MCP",
          "Agent",
          "工具链"
        ]
      },
      {
        "id": "2026-06-30-cn-genai-label",
        "title": "Inländische generative KI-Dienste fügen Compliance-Anforderungen zur „Inhaltsidentifizierung“ hinzu",
        "summary": "Die neuen Vorschriften erfordern, dass öffentlich zugängliche Anwendungen KI-generierten Inhalten explizite oder implizite Kennzeichnungen hinzufügen und Benutzerbeschwerden und Rückverfolgbarkeitsmechanismen verbessern. Überseeprodukte müssen gleichzeitig multiregionale Kennzeichnungspflichten prüfen.",
        "source": "行业合规速递",
        "body": [
          "Inländische generative KI-Dienste führen zu detaillierteren Compliance-Anforderungen zur „Inhaltsidentifizierung“. Produkte, die der Öffentlichkeit Funktionen zur Text-, Bild-, Audio- und Videogenerierung bieten, müssen den KI-generierten Inhalten eine explizite Identifizierung (z. B. Wasserzeichen, Indizes) oder implizite Identifizierung (digitale Wasserzeichen/Metadaten) hinzufügen, die den nationalen Standards entsprechen, und einen Mechanismus für Benutzerbeschwerden und die Rückverfolgbarkeit von Inhalten einrichten.",
          "Bei der eindeutigen Identifizierung muss „durch KI generiert“ an einer für Nutzer erkennbaren Stelle angegeben werden und die Funktion der One-Click-Entfernung der Identifizierung darf nicht vorgesehen sein. Die implizite Identifizierung muss zur Überwachung und stichprobenartigen Überprüfung der Plattform in Dateimetadaten oder Wasserzeichen auf Pixelebene geschrieben werden. Es werden Szenarien wie die Verbreitung über Selbstmedien, E-Commerce-Detailseiten und Lehrmaterialien abgedeckt.",
          "Für ausländische Produkte müssen grenzüberschreitende Verpflichtungen wie das EU-KI-Gesetz und die Deepfake-Vorschriften der US-Bundesstaaten gleichzeitig evaluiert werden – die gleiche Generationspipeline muss möglicherweise je nach Region unterschiedliche Kennzeichnungsstrategien ausgeben. Das technische Team sollte die Front-End-Rendering-Ebene und die Export-Pipeline gleichzeitig implementieren, um die Compliance-Lücke „nur Webseitenanzeige, Export ohne Identifizierung“ zu vermeiden.",
          "Unternehmer schlagen vor: Integrieren Sie Identifizierungsfunktionen in MVP statt Post-Mortem-Patches. Bewahren Sie Generierungsprotokolle (Benutzer-ID, Uhrzeit, Modellversion, Zusammenfassung der Aufforderungsworte) mindestens 6 Monate lang auf, um die Reaktion auf Beschwerden und Prüfungen zu erleichtern."
        ],
        "highlights": [
          "Explizite und implizite zweigleisige Identifizierungsanforderungen",
          "Es müssen Mechanismen zur Annahme von Beschwerden und zur Rückverfolgbarkeit eingerichtet werden",
          "Für ins Ausland versandte Produkte müssen die Vorschriften in mehreren Regionen geprüft werden",
          "Es wird empfohlen, die generierten Protokolle mindestens 6 Monate lang aufzubewahren"
        ],
        "tags": [
          "合规",
          "政策",
          "中国"
        ]
      },
      {
        "id": "2026-06-29-deepseek-r2-rumor",
        "title": "Die Vorschauversion von DeepSeek R2 erscheint auf HuggingFace, die Inferenzkosten wurden um die Hälfte reduziert",
        "summary": "Das durchgesickerte Gewicht zeigt, dass die MoE-Architektur weiter ausgebaut wurde und die Mathematik- und Code-Benchmarks deutlich verbessert wurden. Die offizielle Ankündigung ist noch nicht erfolgt, aber der Graustufeneintrag „R2-preview“ ist auf der API-Preisseite aufgetaucht.",
        "source": "HuggingFace / 社区",
        "body": [
          "Das Vorschau-Copyright von DeepSeek R2 erschien kurzzeitig auf HuggingFace und erregte große Aufmerksamkeit in der Community. Der durchgesickerten Konfiguration zufolge verwendet R2 weiterhin die MoE-Architektur (Mixed Expert), die Anzahl der Aktivierungsparameter ist im Vergleich zu R1 weiter erweitert und die Benchmarks für mathematisches Denken (AIME, MATH) und Code (LiveCodeBench) sind um zweistellige Prozentpunkte gestiegen.",
          "Was noch auffälliger ist, sind die Kosten: Die Community schätzt basierend auf der Preisseite der Vorschauversion der API, dass die Kosten für R2-Inferenz für dieselbe Aufgabe etwa die Hälfte von R1 betragen, was hauptsächlich auf die Routing-Optimierung durch Experten und Verbesserungen der quantitativen Inferenz-Pipeline zurückzuführen ist. DeepSeek hat noch keine offizielle Pressemitteilung veröffentlicht, aber der Graustufeneintrag „deepseek-r2-preview“ ist auf der inländischen API-Konsole erschienen und einige Unternehmensbenutzer wurden eingeladen, ihn zu testen.",
          "Bitte beachten Sie, dass das Vorschau-Copyright aus den Regalen entfernt wurde. Die derzeit im Umlauf befindlichen Leistungsdaten stammen aus der Community-Reproduktion und können von der endgültigen offiziellen Version abweichen. Bitte verlassen Sie sich in Produktionsumgebungen nicht auf inoffizielle Vorschauschnittstellen.",
          "Wenn R2 wie geplant veröffentlicht wird, werden für Lernende die Kosten für „hochwertiges Denken“ weiter gesenkt und das Unternehmertum bei KI-Anwendungen und die akademische Forschung profitieren. Es wird empfohlen, weiterhin die offizielle Ankündigung und das API-Änderungsprotokoll von DeepSeek zu beachten."
        ],
        "highlights": [
          "Erweiterung der MoE-Architektur, Verbesserung des Mathematik-/Code-Benchmarks",
          "Eine Reihe von Illustrationen im einheitlichen IP-Stil.",
          "Es wurde noch nicht offiziell bekannt gegeben. Verwenden Sie die Vorschauoberfläche in Produktionsumgebungen mit Vorsicht.",
          "Die API-Konsole verfügt über einen Graustufeneingang."
        ],
        "tags": [
          "DeepSeek",
          "MoE",
          "推理"
        ]
      },
      {
        "id": "2026-06-29-sora-public",
        "title": "OpenAI Sora öffnet Wensheng Video für globale ChatGPT Plus-Benutzer",
        "summary": "Benutzer können in ChatGPT direkt 1080p-Videos mit einer Länge von bis zu 20 Sekunden erstellen und dabei Kamerabewegungen und Stilreferenzbilder unterstützen. Das Pro-Abonnement bietet einen wasserzeichenfreien Export und eine längere Laufzeit.",
        "source": "OpenAI",
        "body": [
          "OpenAI öffnet die Videofunktionen von Sora für ChatGPT Plus-Abonnenten weltweit (außer in einigen Regionen). Benutzer können 1080p-Videoclips mit einer Länge von bis zu 20 Sekunden erstellen, indem sie eine Textbeschreibung eingeben oder ein Referenzbild in das ChatGPT-Dialogfeld hochladen, ohne zu einer separaten Website springen zu müssen.",
          "Sora unterstützt die Beschreibung von Kamerabewegungen (Drücken, Ziehen, Schwenken, Bewegen), Stilreferenzbilder (laden Sie ein Atmosphärenbild hoch, um Ton und Komposition zu steuern) und einfache Storyboard-Eingabeaufforderungen. ChatGPT Pro-Abonnenten erhalten wasserzeichenfreie Exporte, bis zu 60 Sekunden lange Credits und Prioritätswarteschlangen.",
          "In Bezug auf die Inhaltsrichtlinien verbietet OpenAI die Erstellung von Porträts aus dem wirklichen Leben, urheberrechtlich geschützten Charakteren und gewalttätigen pornografischen Inhalten und fügt standardmäßig ein „KI-generiertes“ Logo in der unteren rechten Ecke des generierten Videos hinzu. Nutzer können MP4s herunterladen, diese müssen sich jedoch an die Nutzungsbedingungen der Plattform halten und dürfen nicht für irreführende Deepfakes verwendet werden.",
          "Im Vergleich zu Konkurrenzprodukten wie Runway, Kling und Keling besteht der Vorteil von Sora darin, dass es nahtlos in den ChatGPT-Konversationsablauf integriert ist – Sie können das Skript zunächst im Text besprechen und dann mit einem Klick ein Video erstellen. Der Nachteil besteht darin, dass die Granularität der benutzerdefinierten Steuerung immer noch schwächer ist als die professioneller Videotools und sie sich für Kurzvideo-Ersteller eignet, um erste Entwürfe statt Verfeinerungen zu erstellen."
        ],
        "highlights": [
          "Direkt in ChatGPT Plus generiert, bis zu 20 Sekunden 1080p",
          "Unterstützt Kamerabewegungen und Stilreferenzbilder",
          "Pro-Abonnement ohne Wasserzeichen + längere Laufzeit",
          "Geeignet für den ersten Entwurf von Kurzvideos, für die Feinbearbeitung sind dennoch professionelle Werkzeuge erforderlich"
        ],
        "tags": [
          "Sora",
          "视频生成",
          "OpenAI"
        ]
      },
      {
        "id": "2026-06-28-agent-benchmark",
        "title": "AgentBench 2.0 veröffentlicht: Bewertung der tatsächlichen Abschlussrate von Büroagenten",
        "summary": "Der neue Benchmark umfasst E-Mail, Formulare, Kalender und anwendungsübergreifende Workflows. Die durchschnittliche Abschlussrate gängiger Agenten-Frameworks bei „mehrstufigen Aufgaben ohne manuellen Eingriff“ beträgt weniger als 35 %, was Mängel bei der Planung und Fehlerbeseitigung aufdeckt.",
        "source": "AgentBench Paper",
        "body": [
          "AgentBench 2.0 wird offiziell veröffentlicht und ist derzeit einer der Agentenbewertungs-Benchmarks, die „echten Büroszenarien“ am nächsten kommen. Im Gegensatz zu früheren Benchmarks, die nur einstufige Tool-Aufrufe durchführten, deckt Version 2.0 48 mehrstufige Aufgaben wie das Senden und Empfangen von E-Mails, die Bearbeitung von Tabellenkalkulationen, die Kalenderplanung sowie das anwendungsübergreifende Kopieren und Einfügen ab und erfordert, dass der Agent diese durchgängig ohne manuelles Eingreifen abschließt.",
          "Offenlegung des Papiers: Wenn Mainstream-Modelle wie GPT-4o, Claude 3.5 Sonnet und Gemini 1.5 Pro mit Frameworks wie LangChain und AutoGPT kombiniert werden, beträgt die durchschnittliche Aufgabenerledigungsrate weniger als 35 %. Die Fehlermodi konzentrieren sich hauptsächlich auf drei Kategorien: langfristige Planungsunterbrechungen (Erreichen von Schritt 3 und Vergessen des Ziels von Schritt 1), nicht selbstkorrigierende Werkzeugparameter nach dem Ausfüllen von Fehlern und verlorene anwendungsübergreifende Statussynchronisierung.",
          "Als neuen Indikator schlugen die Forscher die „Fehlerwiederherstellungsrate“ vor – ob der Agent seine Strategie anpassen und es basierend auf der Fehlermeldung erneut versuchen kann, nachdem der Tool-Aufruf fehlgeschlagen ist. Die Ergebnisse zeigen, dass selbst das stärkste Modell eine Fehlerwiederherstellungsrate von nur etwa 50 % aufweist, was darauf hindeutet, dass der aktuelle Agent noch weit davon entfernt ist, ein „zuverlässiger digitaler Mitarbeiter“ zu sein.",
          "Implikationen für Praktiker: Bevor Sie „vollautomatische Agenten“ bewerben, verwenden Sie den AgentBench-Klassen-Benchmark zum Selbsttest. Das Produktdesign sollte manuelle Bestätigungsknoten beibehalten, anstatt einen einstufigen unbeaufsichtigten Betrieb zu verfolgen."
        ],
        "highlights": [
          "48 echte mehrstufige Büroaufgaben",
          "Durchschnittliche Abschlussquote der Mainstream-Agenten < 35 %",
          "Langfristige Planung und Fehlerbeseitigung sind große Mängel",
          "Das Produktdesign sollte manuelle Bestätigungsknoten beibehalten"
        ],
        "tags": [
          "评测",
          "Agent",
          "研究"
        ]
      },
      {
        "id": "2026-06-28-meta-llama4-scout",
        "title": "Meta Llama 4 Scout 17B Open Source, mobile NPU kann die quantisierte Version ausführen",
        "summary": "Das leichtgewichtige Modell ist auf clientseitige Agenten- und Zusammenfassungsszenarien ausgerichtet und stellt offiziell Core ML- und NNAPI-Konvertierungsskripte bereit. Auf dem M4 iPhone kann das quantitative Denken 25 tok/s erreichen.",
        "source": "Meta AI",
        "body": [
          "Meta-Open-Source-Llama 4 Scout 17B, das als „geräteseitig zuerst“ leichtes Modell positioniert ist und auf Agenten, Zusammenfassungen, Übersetzungen und andere Szenarien auf Mobiltelefonen, Tablets und Notebooks abzielt. Versuchen Sie mit den neuen Tokenizer- und RoPE-Varianten der Llama 4-Serie, die Qualität der Inferenz auf der 17B-Parameterebene aufrechtzuerhalten.",
          "Die offizielle Veröffentlichung des Konvertierungsskripts für Core ML (iOS) und NNAPI (Android), dessen INT4-quantifizierte Version etwa 25 Token/s auf dem M4 iPhone misst, reicht aus, um die Streaming-Antwort des Sprachassistenten zu unterstützen. Mac-seitige Chips der M-Serie können das MLX-Framework verwenden, um mit über 40 tok/s zu laufen.",
          "Filter",
          "Entwickler können zunächst das GGUF-quantifizierte Gewicht von HuggingFace herunterladen und es lokal mit llama.cpp oder Ollama ausprobieren; Wenn Sie eine iOS-App erstellen, befolgen Sie das offizielle Core ML-Tutorial, um sie zu konvertieren und in das Swift-Projekt zu integrieren."
        ],
        "highlights": [
          "17B leichtes Modell, ausgerichtet auf den endseitigen Agenten",
          "M4 iPhone INT4 ca. 25 tok/s",
          "Kern-ML/NNAPI-Konvertierungsskripte werden bereitgestellt",
          "Für chinesische Szenarien wird empfohlen, inländischen Open-Source-Modellen Vorrang einzuräumen."
        ],
        "tags": [
          "Llama",
          "端侧",
          "开源"
        ]
      },
      {
        "id": "2026-06-27-copilot-workspace-ga",
        "title": "Microsoft Copilot Workspace ist vollständig online: One-Stop-Agent für E-Mail + Dokumente + Besprechungen",
        "summary": "Workspace verbindet Outlook, Word, Teams und SharePoint in einer einzigen Agentensitzung, die Protokolle erstellen, Projekttabellen aktualisieren und Besprechungen anwendungsübergreifend planen kann. Die Enterprise-Version wird pro Sitzplatz abgerechnet.",
        "source": "Microsoft Blog",
        "body": [
          "Anwendungsübergreifender Kontext: Copilot kann vom Benutzer autorisierte E-Mail-Threads und SharePoint-Dokumente lesen und „Protokoll lesen → Plan ändern → an Teams senden“ in einer Konversation abschließen. Dies ist eine der meistgesehenen Änderungen im Bereich der Produktveröffentlichungen vom 27.06.2026 im Zusammenhang mit der „vollständigen Einführung von Microsoft Copilot Workspace“.",
          "Berechtigungsgrenzen: Administratoren können den Datenresidenzbereich konfigurieren, der sich standardmäßig nicht über Mandanten erstreckt; Vertrauliche Etikettendokumente erfordern eine zusätzliche Genehmigung, bevor Agenten schreiben dürfen. Technik- und Produktteams müssen auf dieser Grundlage Integrationskosten, Berechtigungsänderungen und Rollback-Pläne bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Preisänderungen: Microsoft 365 E5 beinhaltet ein Basiskontingent und die darüber hinausgehende Abrechnung basiert auf der Anzahl der Agentenschritte; Kleine und mittlere Teams können einen 30-Tage-Piloten starten. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Umsetzungsvorschläge: Priorisieren Sie die Pilotierung in den beiden hochfrequenten Szenarien „Wöchentliche Berichtssammlung“ und „Kundenprotokoll“. Der ROI lässt sich am einfachsten quantifizieren. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Anwendungsübergreifender Kontext: Copilot kann vom Benutzer autorisierte E-Mail-Threads und SharePoint-Dokumente lesen und „Protokoll lesen → Plan ändern → an Teams senden“ in einer Konversation abschließen",
          "Berechtigungsgrenzen: Administratoren können den Datenresidenzbereich konfigurieren, der standardmäßig nicht mandantenübergreifend ist; Vertrauliche Etikettendokumente erfordern eine zusätzliche Genehmigung, bevor Agenten schreiben dürfen",
          "Preisänderungen: Microsoft 365 E5 beinhaltet ein Basiskontingent und die darüber hinausgehende Abrechnung basiert auf der Anzahl der Agentenschritte; Kleine und mittlere Teams können einen 30-Tage-Piloten starten",
          "Umsetzungsvorschläge: Priorisieren Sie die Pilotierung in zwei Arten von Hochfrequenzszenarien: „Wöchentliche Berichtssammlung“ und „Kundenprotokolle“. Der ROI lässt sich am einfachsten quantifizieren."
        ],
        "tags": [
          "Copilot",
          "办公",
          "Agent"
        ]
      },
      {
        "id": "2026-06-26-github-copilot-agent",
        "title": "GitHub Copilot Agent-Modus GA: PR automatisch für Aufgaben auf Lagerebene einreichen",
        "summary": "Der Agent kann Problembeschreibungen klonen, die Codebasis durchsuchen, mehrere Dateien ändern und Pull-Anfragen öffnen; unterstützt Menschen dabei, Unterschiede schrittweise zu genehmigen.",
        "source": "GitHub Changelog",
        "body": [
          "Arbeitsablauf: Starten Sie den Agenten mit einem Klick von Issue aus, erstellen Sie automatisch Zweige, übermitteln Sie Commits und hängen Sie Implementierungsanweisungen an. Dies ist eine der meistgesehenen Änderungen im Bereich der Produktveröffentlichungen am 26.06.2026 rund um „GitHub Copilot Agent Mode GA“.",
          "Sicherheitsmechanismus: Der Standardwert ist ein schreibgeschütztes Token. Für Schreibvorgänge müssen Benutzer es Schritt für Schritt akzeptieren. Die Enterprise-Version kann die Zugriffskontrolle für das Code-Scannen erzwingen. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Anwendbare Grenzen: geeignet für Fehlerbehebung, Tests und Dokumentsynchronisierung; Es wird weiterhin empfohlen, die Rekonstruktion auf Architekturebene manuell durchzuführen. Im Hinblick auf Geschäft und Compliance empfiehlt es sich, gleichzeitig die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Teampraxis: Schreiben Sie die Akzeptanzkriterien in die Problemvorlage, und die Abschlussquote des Agenten kann um 20–30 % erhöht werden. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Arbeitsablauf: Starten Sie den Agenten mit einem Klick von Issue aus, erstellen Sie automatisch Zweige, übermitteln Sie Commits und hängen Sie Implementierungsanweisungen an",
          "Sicherheitsmechanismus: Der Standardwert ist ein schreibgeschütztes Token. Für den Schreibvorgang muss der Benutzer es Schritt für Schritt akzeptieren. Die Enterprise-Version kann die Zugriffskontrolle für das Code-Scannen erzwingen",
          "Anwendbare Grenze: geeignet für Fehlerbehebung, Tests und Dokumentsynchronisierung; Ein manuell durchgeführtes Refactoring auf Architekturebene wird weiterhin empfohlen",
          "Teampraxis: Schreiben Sie die Akzeptanzkriterien in die Problemvorlage, und die Abschlussquote des Agenten kann um 20–30 % erhöht werden"
        ],
        "tags": [
          "Copilot",
          "编程",
          "GitHub"
        ]
      },
      {
        "id": "2026-06-25-notion-ai-3",
        "title": "Notion AI 3.0 veröffentlicht „Database Agent“: Natürliche Sprache ändert Ansichten und Formeln",
        "summary": "Benutzer können gesprochene Sprache verwenden, um Filter-, Gruppierungs- und Rollup-Anforderungen zu beschreiben, und KI generiert und interpretiert Formeln direkt; Seitenübergreifende Zuordnungen und Batch-Attributfüllung werden unterstützt.",
        "source": "Notion Release Notes",
        "body": [
          "Kernfunktionen: Kanban-/Kalenderansichten in einem Satz erstellen und zugehörige Felder automatisch ausfüllen. Dies ist eine der meistgesehenen Änderungen im Bereich der Produktveröffentlichungen vom 25.06.2026 rund um „Notion AI 3.0 veröffentlicht „Database Agent““.",
          "Prüfpfad: Bei jeder KI-Änderung bleibt der Unterschied erhalten und kann mit einem Klick auf die vorherige Version der Datenbankstruktur zurückgesetzt werden. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Kollaborationsszenarien: Geeignet für strukturierte Zusammenarbeit wie operative Dashboards, Rekrutierungspipelines und Kursplanung. Im Hinblick auf Geschäft und Compliance wird empfohlen, gleichzeitig die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Hinweis: Komplexe datenbankübergreifende Formeln erfordern weiterhin eine manuelle Überprüfung der Randbedingungen. Für KI-Lernende kann dies verwendet werden, um persönliche Werkzeugkarten und Fallstricklisten zu aktualisieren und eine kleine praktische Operation oder einen internen Austausch innerhalb einer Woche durchzuführen."
        ],
        "highlights": [
          "Kernfunktionen: Kanban-/Kalenderansichten in einem Satz erstellen und zugehörige Felder automatisch ausfüllen",
          "Aktivieren Sie Repo-Lese-/Schreibberechtigungen in mcp.json",
          "Kollaborationsszenarien: geeignet für strukturierte Zusammenarbeit wie operative Dashboards, Rekrutierungspipelines, Kursplanung usw.",
          "Hinweis: Komplexe datenbankübergreifende Formeln erfordern weiterhin eine manuelle Überprüfung der Randbedingungen"
        ],
        "tags": [
          "Notion",
          "办公",
          "Agent"
        ]
      },
      {
        "id": "2026-06-24-perplexity-pages",
        "title": "Perplexity Pages Team Edition: Veröffentlichung von Forschungsseiten, auf denen Quellen zitiert werden können, mit einem Klick",
        "summary": "Das Team kann gemeinsam eine Forschungsthemenseite mit Fußnoten erstellen, die eingebettete Diagramme und die regelmäßige automatische Aktualisierung von Absätzen unterstützt; Es eignet sich für die externe Weitergabe durch Markt- und Investmentforschungsgruppen.",
        "source": "Perplexity Blog",
        "body": [
          "Freigabeformular: Erstellen Sie öffentliche oder passwortgeschützte Themenseiten und behalten Sie nachvollziehbare Referenzlinks bei. Dies ist eine der meistgesehenen Änderungen rund um die „Perplexity Pages Team Edition“ im Bereich der Produktveröffentlichung am 24.06.2026.",
          "Aktualisierungsstrategie: Für bestimmte Absätze können wöchentliche automatische Aktualisierungen festgelegt werden, wodurch die manuelle Wartung reduziert wird. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Demonstration: Die offizielle Demo unterstützt die Interaktion „Text zum Ändern von Bildern verwenden“. Technik- und Produktteams müssen auf dieser Grundlage Integrationskosten, Berechtigungsänderungen und Rollback-Pläne bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Nutzung durch Lernende: Machen Sie aus der Kursleseliste eine gemeinsam nutzbare Themenseite. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Veröffentlichungsform: Erstellen Sie öffentliche oder passwortgeschützte Themenseiten und behalten Sie nachvollziehbare Referenzlinks bei",
          "Aktualisierungsstrategie: Sie können automatische wöchentliche Aktualisierungen für bestimmte Absätze festlegen, um die manuelle Wartung zu reduzieren.",
          "Berechtigungen: Teamadministratoren kontrollieren Redakteure und externe Domänennamen-Whitelists",
          "Nutzung durch Lernende: Machen Sie aus der Kursleseliste eine gemeinsam nutzbare Themenseite"
        ],
        "tags": [
          "Perplexity",
          "调研",
          "协作"
        ]
      },
      {
        "id": "2026-06-23-adobe-firefly-video",
        "title": "Offene Betaversion von Adobe Firefly Video: Integrierter Videobearbeitungstrack von Premiere",
        "summary": "Firefly Video generiert Clips, die direkt in die Premiere-Timeline eingefügt werden und unterstützt Extend, Inpaint und Stilanpassung an vorhandenes Filmmaterial.",
        "source": "Adobe News",
        "body": [
          "Arbeitsablauf: Geben Sie die Storyboard-Beschreibung in die Seitenleiste von Premiere ein und erstellen Sie eine B-Rolle, um die leeren Aufnahmen zu füllen. Dies ist eine der meistgesehenen Änderungen im Bereich der Produktveröffentlichungen am 23.06.2026 rund um die „Adobe Firefly Video Open Beta“.",
          "Urheberrechtsrichtlinie: Die Trainingsdatenerklärung enthält keine unerlaubten Porträts realer Personen; Mit Inhaltsanmeldeinformationen exportieren. Die Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Im Vergleich zu Konkurrenzprodukten: Die Steuerungsgranularität ist besser als bei reinen Webseitengeneratoren, die Dauer ist jedoch immer noch relativ kurz. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Empfehlung: Verwenden Sie es zunächst für die Leeraufnahme des Trailers und vereinheitlichen Sie es dann für die Farbkorrektur mit dem Material der echten Aufnahme. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Arbeitsablauf: Geben Sie die Storyboard-Beschreibung in die Premiere-Seitenleiste ein und erstellen Sie eine B-Rolle, um die leeren Aufnahmen zu füllen.",
          "Urheberrechtsrichtlinie: Die Trainingsdatenerklärung enthält keine unerlaubten Porträts realer Personen; Mit Inhaltsanmeldeinformationen exportieren",
          "Im Vergleich zu Konkurrenzprodukten: Die Steuerungsgranularität ist besser als bei reinen Webseitengeneratoren, die Dauer ist jedoch immer noch kurz.",
          "Empfehlung: Verwenden Sie es zuerst für Trailer-Leeraufnahmen und vereinheitlichen Sie es dann mit dem Material der echten Aufnahme für die Farbkorrektur."
        ],
        "tags": [
          "Adobe",
          "视频",
          "Firefly"
        ]
      },
      {
        "id": "2026-06-22-apple-intelligence-cn",
        "title": "Die Version von Apple Intelligence für Festlandchina wird in Graustufen geöffnet: lokale Zusammenfassung + Schreibwerkzeuge",
        "summary": "Graustufenbenutzer können lokale Modelle verwenden, um Benachrichtigungen in Memos und E-Mails zusammenzufassen, zu verfeinern und zu priorisieren. Cloud-Verbesserungen werden stapelweise veröffentlicht.",
        "source": "Apple Newsroom",
        "body": [
          "Lokale Priorität: Zusammenfassung und Neuschreiben werden standardmäßig auf der Geräte-NPU abgeschlossen, wodurch Datenschutzbedenken verringert werden. Dies ist eine der meistgesehenen Änderungen im Bereich der Produktveröffentlichungen vom 22.06.2026 rund um „Apple Intelligence China Mainland Version Turns On Grayscale“.",
          "Stapelweise Öffnung: Tushengtu und Cross-App Agent wurden noch nicht vollständig veröffentlicht. Achten Sie daher bitte auf Ankündigungen zu Systemaktualisierungen. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Ökologie: Entwickler können über App Intents auf die Schreib-API zugreifen. Im Hinblick auf Geschäft und Compliance wird empfohlen, gleichzeitig die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Benutzertipp: Bei alten Geräten muss bestätigt werden, ob die Neural Engine-Generation unterstützt wird. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Lokale Priorität: Zusammenfassung und Neuschreiben werden standardmäßig auf der Geräte-NPU abgeschlossen, wodurch Datenschutzbedenken verringert werden.",
          "Stapelweise Öffnung: Tushengtu und Cross-App Agent sind noch nicht vollständig verfügbar. Bitte beachten Sie die Ankündigung des Systemupdates",
          "Ökologie: Entwickler können über App Intents auf die Schreib-API zugreifen",
          "Benutzertipp: Bei alten Geräten muss bestätigt werden, ob Neural Engine-Generationen dies unterstützen"
        ],
        "tags": [
          "Apple",
          "端侧",
          "中国"
        ]
      },
      {
        "id": "2026-06-21-windsurf-cascade-2",
        "title": "Windsurf Cascade 2.0 führt „Speicherdateien“ für den sitzungsübergreifenden Projektkontext ein",
        "summary": "Projektstammverzeichnis .windsurf/memory.md Persistenzarchitekturentscheidungen und -konventionen, neue Sitzungen werden automatisch geladen und wiederholte Erklärungen werden reduziert.",
        "source": "Windsurf Blog",
        "body": [
          "Speichermechanismus: Der Agent kann die vom Benutzer bestätigten Regeln zur späteren Wiederverwendung in eine Speicherdatei schreiben. Dies ist eine der meistgesehenen Änderungen im Bereich der Produktveröffentlichungen vom 21.06.2026 rund um „Windsurf Cascade 2.0 führt den sitzungsübergreifenden Projektkontext „Speicherdatei“ ein“.",
          "Teamfreigabe: Memory.md kann an Git übermittelt werden, um die Teamcodierungsstandards zu vereinheitlichen. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Vergleichscursor: Beide bewegen sich in Richtung Langzeitgedächtnis auf Projektebene. Die Auswahl hängt von der Sprachunterstützung und den Preisen ab. Im Hinblick auf Geschäft und Compliance wird empfohlen, gleichzeitig die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Übung: Pflegen Sie den Speicher in der ersten Woche manuell. Anschließend müssen die autonomen Aktualisierungen des Agenten manuell überprüft werden. Für KI-Lernende kann dies verwendet werden, um die persönliche Werkzeugkarte und Fallstrickliste zu aktualisieren und einen kleinen praktischen Vorgang oder einen internen Austausch innerhalb einer Woche abzuschließen."
        ],
        "highlights": [
          "Speichermechanismus: Der Agent kann die vom Benutzer bestätigten Regeln zur späteren Wiederverwendung in eine Speicherdatei schreiben.",
          "Teamfreigabe: Memory.md kann an Git übermittelt werden, um die Team-Codierungsstandards zu vereinheitlichen",
          "Vergleichscursor: Beide bewegen sich in Richtung Langzeitgedächtnis auf Projektebene. Die Auswahl hängt von der Sprachunterstützung und den Preisen ab.",
          "Übung: Pflegen Sie den Speicher in der ersten Woche manuell. Anschließend müssen die autonomen Aktualisierungen des Agenten manuell überprüft werden."
        ],
        "tags": [
          "Windsurf",
          "IDE",
          "编程"
        ]
      },
      {
        "id": "2026-06-20-zoom-ai-companion-3",
        "title": "Zoom AI Companion 3.0: Fragen und Antworten in Echtzeit und Nachverfolgung von Aktionspunkten während Besprechungen",
        "summary": "Während des Treffens können Sie privat fragen: „Wie lautet die gerade genannte Budgetnummer?“; Nach dem Meeting werden Jira/Asana-Aktionselemente automatisch generiert und der Abschluss wird verfolgt.",
        "source": "Zoom Blog",
        "body": [
          "Assistent während des Meetings: Nur die Person, die die Frage gestellt hat, kann die Antwort sehen, um den Rhythmus des Meetings nicht zu unterbrechen. Dies ist eine der meistgesehenen Änderungen rund um „Zoom AI Companion 3.0“ im Bereich der Produktveröffentlichungen 2026-06-20.",
          "Integration: Unterstützt die bidirektionale Synchronisierung von Aktionselementen mit Salesforce und Jira. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Compliance: Unternehmen können die Cloud-Aufzeichnung deaktivieren und nur lokale Zusammenfassungen speichern. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Tipp: Das Hochladen der Agenda-PDF vor der Besprechung kann die Genauigkeit der Zusammenfassung verbessern. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine Übung oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Assistent während des Meetings: Nur die Person, die die Frage gestellt hat, kann die Antwort sehen, um den Rhythmus des Meetings nicht zu unterbrechen.",
          "Integration: Unterstützt die bidirektionale Synchronisierung von Aktionselementen mit Salesforce und Jira",
          "Compliance: Unternehmen können die Cloud-Aufzeichnung deaktivieren und nur lokale Zusammenfassungen aufbewahren",
          "Tipp: Das Hochladen der Agenda-PDF vor der Besprechung kann die Genauigkeit der Zusammenfassung verbessern"
        ],
        "tags": [
          "Zoom",
          "会议",
          "办公"
        ]
      },
      {
        "id": "2026-06-19-mistral-large-3",
        "title": "Mistral Large 3 Open Weight: Verbesserung des mehrsprachigen Denkens",
        "summary": "Mistral veröffentlicht die Open-Weight-Version Large 3, Argumentationsverbesserungen in Französisch, Englisch, Deutsch und Spanisch, Apache 2.0-Lizenz; vLLM und TGI werden am selben Tag unterstützt.",
        "source": "Mistral AI",
        "body": [
          "Leistung: MMLU-Pro und BBH sind etwa 8 % besser als Large 2, und französischer Text hat offensichtliche Vorteile. Dies ist eine der meistgesehenen Änderungen im Open-Source-Modellbereich am 19.06.2026 rund um „Mistral Large 3 Open Weight“.",
          "Bereitstellung: BF16 erfordert 2×80 GB; Die AWQ 4-Bit-Einzelkarte kann 48 GB betreiben. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Tool-Aufruf: Nativer JSON-Schemamodus, geeignet für Agent-Orchestrierung. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Auswahl: Priorisieren Sie europäische Datensouveränitätsszenarien. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Leistung: MMLU-Pro und BBH sind etwa 8 % besser als Large 2, und französischer Text hat offensichtliche Vorteile.",
          "Bereitstellung: BF16 erfordert 2×80 GB; AWQ 4-Bit-Einzelkarte mit 48 GB kann ausgeführt werden",
          "Tool-Aufruf: nativer JSON-Schemamodus, geeignet für Agent-Orchestrierung",
          "Auswahl: Priorisieren Sie europäische Datensouveränitätsszenarien"
        ],
        "tags": [
          "Mistral",
          "开源",
          "推理"
        ]
      },
      {
        "id": "2026-06-18-gemma-3-12b",
        "title": "Google Gemma 3 12B Open Source: Einzelkartenfreundliches multimodales kleines Modell",
        "summary": "Gemma 3 12B unterstützt Bild- und Texteingabe, 128K-Kontext; Geeignet für lokale Notebook-Experimente und leichte RAG.",
        "source": "Google DeepMind",
        "body": [
          "Modal: Sie können Diagramm-Screenshots für Fragen und Antworten eingeben, die für die Interpretation von Berichten geeignet sind. Demo Dies ist eine der meistgesehenen Änderungen im Bereich Open-Source-Modelle am 18.06.2026 rund um „Google Gemma 3 12B Open Source“.",
          "Benutzer können in ChatGPT direkt 1080p-Videos mit einer Länge von bis zu 20 Sekunden erstellen und dabei Kamerabewegungen und Stilreferenzbilder unterstützen. Das Pro-Abonnement bietet einen wasserzeichenfreien Export und eine längere Laufzeit.",
          "Quantifizierung: Ollama stellt Q4_K_M, eine 16-GB-Speichermaschine, für den Testbetrieb zur Verfügung. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Einschränkungen: Die Chinesischkenntnisse sind schwächer als das entsprechende Modell von Qwen. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Fähigkeit: Verbesserung der Szenenkonsistenz bei Interaktionen auf Minutenebene. Dies ist eine der meistgesehenen Änderungen im Forschungsdurchbruch vom 25.05.2026 rund um „Google DeepMind veröffentlicht Genie 3-Weltmodell“.",
          "Lizenz: Die Gemma-Lizenz erlaubt die kommerzielle Nutzung vorbehaltlich der Nutzungsrichtlinien",
          "Quantifizierung: Ollama bietet Q4_K_M, 16 GB Arbeitsspeicher können getestet werden",
          "Einschränkungen: Die chinesischen Fähigkeiten sind schwächer als die des Qwen-Äquivalentmodells"
        ],
        "tags": [
          "Gemma",
          "开源",
          "多模态"
        ]
      },
      {
        "id": "2026-06-17-sd3-medium-open",
        "title": "Stable Diffusion 3 Mittelgewichtete Open Source: kommerziell freundliche Bilderzeugung",
        "summary": "Stabilität AI Open Source SD3 Medium, 6B-Parameter, Textwiedergabe und -komposition sind im Vergleich zu SDXL verbessert; Der ComfyUI-Knoten wird am selben Tag aktualisiert.",
        "source": "Stability AI",
        "body": [
          "Qualität: Die Benutzerfreundlichkeit von Postern mit kleinen Schriftarten wurde verbessert, es wird jedoch weiterhin empfohlen, die Zeichen später in PS zu ändern. Dies ist eine der meistgesehenen Änderungen im Bereich der Open-Source-Modelle am 17.06.2026 rund um „Stable Diffusion 3 Medium Weighted Open Source“.",
          "Offen: Akademische nichtkommerzielle Lizenz, Pharmaunternehmen benötigen eine kommerzielle Vereinbarung. Technik- und Produktteams müssen Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Compliance: Es ist verboten, Porträts bestimmter Prominenter zu erstellen, und eine lokale Filterung der Schlagworte ist erforderlich. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Dann AI Extract Action Items"
        ],
        "highlights": [
          "Qualität: Die Benutzerfreundlichkeit von Postern mit kleinen Schriftarten wurde verbessert, es wird jedoch weiterhin empfohlen, die Schriftarten später in PS zu ändern.",
          "Hardware: 12 GB Videospeicher für 1024-Generation, höherer VRAM für Stapelverarbeitung erforderlich",
          "Einhaltung: Es ist verboten, Porträts bestimmter Prominenter zu erstellen, und es sind lokale Filter-Eingabewörter erforderlich",
          "Arbeitsablauf: Kombiniert mit ControlNet Union für eine präzise Kompositionssteuerung"
        ],
        "tags": [
          "SD3",
          "图像",
          "开源"
        ]
      },
      {
        "id": "2026-06-16-phi-4-mini",
        "title": "Microsoft Phi-4-mini Open Source: 3.8B-Inferenzmodell auf mobiler Ebene",
        "summary": "Phi-4-mini führt die Liste der kleinen mathematischen und logischen Modelle an und eignet sich für On-Device-Assistenten und Offline-FAQ-Roboter.",
        "source": "Microsoft Research",
        "body": [
          "Positionierung: 3,8B Parameter, aber nahe an 7B Argumentationsleistung, wobei die Datenqualität im Vordergrund steht. Dies ist eine der meistgesehenen Änderungen im Open-Source-Modellbereich rund um „Microsoft Phi-4-mini Open Source“ am 16.06.2026.",
          "Bereitstellung: ONNX Runtime Mobile-Beispiel wurde veröffentlicht. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Szenario: Geeignet für deterministische Aufgaben wie Arbeitsauftragsklassifizierung und Formularüberprüfung. Im Hinblick auf Geschäft und Compliance wird empfohlen, gleichzeitig die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Hinweis: Kreatives Schreiben und die Erstellung langer Artikel sind keine Stärken. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Positionierung: 3,8B Parameter, aber nahe an 7B Argumentationsleistung, wobei die Datenqualität im Vordergrund steht",
          "Bereitstellung: ONNX Runtime Mobile-Beispiel veröffentlicht",
          "Szenario: Geeignet für deterministische Aufgaben wie Arbeitsauftragsklassifizierung und Formularüberprüfung",
          "Hinweis: Kreatives Schreiben und die Erstellung langer Artikel sind keine Stärken"
        ],
        "tags": [
          "Phi",
          "端侧",
          "微软"
        ]
      },
      {
        "id": "2026-06-15-internlm3-8b",
        "title": "Gelehrter Puyu InternLM3-8B Open Source: Optimierung des Aufrufs des chinesischen Agenten-Tools",
        "summary": "Shanghai AI Lab Open Source InternLM3-8B-Instruct, C-Eval und Tool-Call-Format sind auf das OpenAI-Schema abgestimmt.",
        "source": "InternLM GitHub",
        "body": [
          "Chinesisch: Chinesisch-Fragen und Antworten sind deutlich besser als Lama auf dem gleichen Niveau. Dies ist eine der meistgesehenen Änderungen im Bereich der Open-Source-Modelle am 15.06.2026 rund um den „Scholar·Puyu InternLM3-8B Open Source“.",
          "Tool: Die Erfolgsquote von Funktionsaufrufen erreicht im lokalen Benchmark 85 %+. Technik- und Produktteams müssen auf dieser Grundlage Integrationskosten, Berechtigungsänderungen und Rollback-Pläne bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Ökologie: Ein-Klick-Startskripte für LMDeploy und FastChat sind verfügbar. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Empfehlung: Chinesische Agenten in Intranets von Behörden und Unternehmen können für die Bewertung priorisiert werden. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Chinesisch: Chinesische Trivia-Fragen und -Antworten sind deutlich besser als Lama auf demselben Niveau",
          "Tool: Die Erfolgsquote von Funktionsaufrufen liegt im lokalen Benchmark bei über 85 %",
          "Ökologie: Ein-Klick-Startskripte für LMDeploy und FastChat sind verfügbar",
          "Vorschlag: Chinesische Agenten in Intranets von Behörden und Unternehmen können zunächst evaluiert werden"
        ],
        "tags": [
          "InternLM",
          "中文",
          "开源"
        ]
      },
      {
        "id": "2026-06-14-yi-lightning-34b",
        "title": "Zero One Thing Yi-Lightning 34B Open Source: Inferenzoptimierung mit hohem Durchsatz",
        "summary": "Yi-Lightning optimiert den KV-Cache und die spekulative Dekodierung für Szenarien mit hohem QPS und seine API-Form ist mit OpenAI kompatibel.",
        "source": "01.AI",
        "body": [
          "Durchsatz: vLLM ist etwa 35 % höher als die standardmäßigen Yi-34B-Tokens/s. Dies ist eine der meistgesehenen Änderungen im Open-Source-Modellbereich am 14.06.2026 rund um „Zero One Thousand Yi-Lightning 34B Open Source“.",
          "Kosten: Geeignet für hohe Parallelität wie Kundenservice und Suchzusammenfassungen. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Lizenzierung: Bitte überprüfen Sie die neuesten Community-Lizenzbedingungen. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Einsatz: Es wird die Kombination mit Lastausgleich und Leistungsschalter empfohlen. Für KI-Lernende kann dies verwendet werden, um die persönliche Werkzeugkarte und Fallstrickliste zu aktualisieren und einen kleinen praktischen Vorgang oder einen internen Austausch innerhalb einer Woche abzuschließen."
        ],
        "highlights": [
          "Durchsatz: vLLM verbessert sich um etwa 35 % im Vergleich zu Standard-Yi-34B-Tokens/s",
          "Kosten: Geeignet für hohe Parallelität wie Kundenservice und Suchzusammenfassungen",
          "Lizenzierung: Bitte überprüfen Sie die neuesten Community-Lizenzbedingungen",
          "Einsatz: Es wird die Kombination mit Lastausgleich und Leistungsschalter empfohlen"
        ],
        "tags": [
          "Yi",
          "推理",
          "开源"
        ]
      },
      {
        "id": "2026-06-13-emu3-vision",
        "title": "Zhiyuan Emu3 Open Source: einheitliches multimodales Verständnis und Generierung",
        "summary": "Emu3 verwendet ein einziges Modell, um Bildbeschreibungen, Bearbeitungsanweisungen und vinzentinische Diagramme zu vervollständigen. Die Forschung macht Fortschritte, aber die Technik steckt noch in den Kinderschuhen.",
        "source": "BAAI",
        "body": [
          "Einheitliche Architektur: gemeinsame Gewichtungen verstehen und generieren, wodurch die Wartung mehrerer Modelle reduziert wird. Dies ist eine der meistgesehenen Änderungen im Bereich der Open-Source-Modelle am 13.06.2026 rund um „Intelligent Source Emu3 Open Source“.",
          "Schreiben Sie vor dem Meeting eine Tagesordnung, veröffentlichen Sie wichtige Punkte während des Meetings und verwenden Sie Notion AI, um Protokolle und Aufgaben zu erstellen.",
          "Produktion: Latenz und Stabilität haben noch nicht das Niveau kommerzieller APIs erreicht. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Folgen: Geeignet für die Nachverfolgung durch multimodale Forscher. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Einheitliche Architektur: gemeinsame Gewichtungen verstehen und generieren, wodurch die Wartung mehrerer Modelle reduziert wird",
          "Demo: Die offizielle Demo unterstützt die Interaktion „Bilder mit Text ändern“.",
          "Produktion: Latenz und Stabilität sind noch nicht auf kommerziellem API-Niveau",
          "Achtung: Geeignet für multimodales Forscher-Tracking"
        ],
        "tags": [
          "Emu3",
          "多模态",
          "研究"
        ]
      },
      {
        "id": "2026-06-12-command-r-plus-ft",
        "title": "Cohere Command R+ Fine Tuning Weight Open: Enterprise RAG-Vorlage",
        "summary": "Cohere veröffentlicht einen R+-Feinabstimmungsleitfaden und ein LoRA-Gewichtungsbeispiel, wobei der Schwerpunkt auf der Erstellung von Zitaten und der Ausrichtung mehrerer Dokumente liegt.",
        "source": "Cohere",
        "body": [
          "RAG: Integriertes Zitier-Token zur Reduzierung illusorischer Zitate. Dies ist eine der meistgesehenen Änderungen im Open-Source-Modellbereich am 12.06.2026 rund um die „Cohere Command R+ Feinabstimmungsgewichtsöffnung“.",
          "Feinabstimmung: Bietet 8×A100 vollständige Parameter-Feinabstimmungsskripte und Datenformate. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Vergleich: Englische lange Dokumente haben offensichtliche Vorteile, während Chinesisch die Vorbereitung eines eigenen Korpus erfordert. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Übung: Fragen und Antworten zu juristischen/medizinischen englischen Dokumenten können schnell erprobt werden. Für KI-Lernende kann dies verwendet werden, um die persönliche Werkzeugkarte und Fallstrickliste zu aktualisieren und einen kleinen praktischen Vorgang oder einen internen Austausch innerhalb einer Woche abzuschließen."
        ],
        "highlights": [
          "RAG: Integriertes Zitier-Token zur Reduzierung von Phantomzitaten",
          "Feinabstimmung: Bietet 8×A100 vollständige Parameter-Feinabstimmungsskripte und Datenformate",
          "Vergleich: Englische lange Dokumente haben offensichtliche Vorteile, während Chinesisch die Vorbereitung eines eigenen Korpus erfordert.",
          "Übung: Fragen und Antworten zu juristischen/medizinischen englischen Dokumenten können schnell erprobt werden"
        ],
        "tags": [
          "Cohere",
          "RAG",
          "微调"
        ]
      },
      {
        "id": "2026-06-11-ai-chip-supply",
        "title": "2026 Q2 KI-Chip-Lieferzyklus verkürzt: H100/B200 vor Ort lose",
        "summary": "Kanaldaten zeigen, dass die Wartezeit auf die GPU-Bereitstellung von 12 Wochen auf 4 bis 6 Wochen gesunken ist, Cloud-Anbieter ihre Angebote für einige Schulungsinstanzen gesenkt haben und die Kosten für unternehmerische Schulungen gesunken sind.",
        "source": "SemiAnalysis",
        "body": [
          "Angebot und Nachfrage: Blackwell-Produktionskapazität erhöht + gebrauchte H100-Reshoring zur Linderung von Engpässen Dies ist eine der am 11.06.2026 am häufigsten beobachteten Veränderungen in der Branchendynamik rund um die „Verkürzung des KI-Chip-Lieferzyklus im zweiten Quartal 2026“.",
          "Der Effekt eines Porträtausschnitts ist in der Regel besser als der von komplexen Haarproduktbildern. Wenn die Kanten gezackt sind, können Sie die KI fragen: „Kantenverlaufsparameter hinzufügen“ oder zum Isnet-Modell wechseln.",
          "Auswirkung: Kleine und mittlere Teams können sich kurzfristige Feinabstimmungsexperimente leisten. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Vorschlag: Geben Sie der Bewertung der Argumentationskosten Vorrang, anstatt blind Karten zu horten. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Angebot und Nachfrage: Ausweitung der Blackwell-Produktionskapazität + Rückverlagerung gebrauchter H100, um Engpässe zu lindern",
          "Preis: Die Spot-GPU-Preise fielen in einigen Bereichen im Vergleich zum Vorquartal um 18 %",
          "Bewerten Sie, ob die Zitate in den Umfrageantworten maßgeblich und veraltet sind.",
          "Vorschlag: Priorisieren Sie die Bewertung der Argumentationskosten, anstatt blind Karten zu horten"
        ],
        "tags": [
          "芯片",
          "云计算",
          "成本"
        ]
      },
      {
        "id": "2026-06-10-yc-w26-ai-batch",
        "title": "YC W26-Charge: Über 78 % der Unternehmen sind KI-native Produkte",
        "summary": "Die Highlights des Demo Day konzentrieren sich auf vertikale Agenten, Voice-Workflow und Compliance-Tools; Der frühe mittlere ARR hat sich im Vergleich zum Vorjahr verdoppelt.",
        "source": "YC Blog",
        "body": [
          "Das Terminal führt python app.py aus und der Browser greift auf http://127.0.0.1:5000 zu. Auf der Seite sollte ein Drag-and-Drop-Upload-Bereich angezeigt werden, der die Formate JPG/PNG unterstützt.",
          "Finanzierung: Die durchschnittliche Bewertung der Seed-Runde ist gestiegen und die Anleger konzentrieren sich eher auf die Bindung als auf die Demonstration. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Einsatz: Kleine Teams bevorzugen Full-Stack- und Agenten-Orchestrierungsfunktionen. Im Hinblick auf Geschäft und Compliance wird empfohlen, gleichzeitig die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Lernen: Achten Sie auf Open-Source-Alternativen und vertikale Datenbarrieren. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Trend: „Copilot for X“ ist immer noch beliebt, aber die Differenzierung erfolgt über Branchendaten",
          "Finanzierung: Die durchschnittlichen Bewertungen der Seed-Runde steigen, da die Anleger eher auf Bindung als auf Demo setzen",
          "Einsatz: Kleine Teams bevorzugen Full-Stack- und Agenten-Orchestrierungsfunktionen",
          "Lernen: Achten Sie auf Open-Source-Alternativen und vertikale Datenbarrieren"
        ],
        "tags": [
          "创业",
          "YC",
          "Agent"
        ]
      },
      {
        "id": "2026-06-09-cursor-valuation",
        "title": "Cursor schließt neue Finanzierung im Wert von 9 Milliarden US-Dollar ab",
        "summary": "Anysphere bestätigt, dass der jährliche wiederkehrende Umsatz von Cursor 500 Millionen US-Dollar überschritten hat und sein Anteil an Unternehmenskunden gestiegen ist.",
        "source": "TechCrunch",
        "body": [
          "Umsatz: Persönliches Abonnement + Teams-Zweiradantrieb, Teams wächst schneller. Dies ist eine der meistgesehenen Veränderungen in der Branchendynamik am 09.06.2026 im Zusammenhang mit „Cursor schließt neue Finanzierung im Wert von 9 Milliarden US-Dollar ab.“",
          "Produkt: Die Überprüfung der Agentensicherheit und die Kontrolle der Unternehmensrichtlinien werden gestärkt. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Wettbewerb: Windsurf, Copilot, Claude Code stehen auf drei Säulen. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Benutzer: Achten Sie auf Bildungsrabatte und Teamplatzverwaltung. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Umsatz: Persönliches Abonnement + Teams-Zweiradantrieb, Teams wächst schneller",
          "Produkt: Die Überprüfung der Agentensicherheit und die Kontrolle der Unternehmensrichtlinien werden gestärkt",
          "Wettbewerb: Windsurfen, Copilot, Claude Code drei Säulen",
          "Benutzer: Achten Sie auf Bildungsrabatte und Teamplatzverwaltung"
        ],
        "tags": [
          "Cursor",
          "融资",
          "IDE"
        ]
      },
      {
        "id": "2026-06-08-openai-enterprise-arr",
        "title": "Der OpenAI-Enterprise-ARR übersteigt 8 Milliarden US-Dollar, API macht mehr als die Hälfte aus",
        "summary": "In der Gewinnaufforderung wurde das Wachstum von ChatGPT Enterprise und API offengelegt, und der Beitrag medizinischer und finanzieller Compliance-Pakete stieg.",
        "source": "OpenAI",
        "body": [
          "Struktur: Der API-Umsatz überstieg erstmals die Hälfte, was auf eine tiefere B2B-Integration hinweist. Dies ist eine der am meisten beobachteten Veränderungen im Bereich der Branchendynamik am 08.06.2026 rund um „OpenAI Enterprise ARR überstieg 8 Milliarden US-Dollar, und API machte mehr als die Hälfte aus.“",
          "Compliance: HIPAA- und SOC2-Pakete fördern die Vertragsabschlüsse großer Kunden. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Preis: Aufgrund der Tatsache, dass Preisnachlässe und Nutzungspakete gleichzeitig existieren, müssen Kunden FinOps-Geschäfte abwickeln und Compliance gewährleisten. Es wird empfohlen, den Datenspeicherort, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Aufklärung: Die Entscheidung zwischen selbst erstellter und offizieller API sollte auf der Datensensibilität basieren. Für KI-Lernende kann dies verwendet werden, um die persönliche Werkzeugkarte und Fallstrickliste zu aktualisieren und einen kleinen praktischen Vorgang oder einen internen Austausch innerhalb einer Woche abzuschließen."
        ],
        "highlights": [
          "Struktur: Der API-Umsatz überschreitet zum ersten Mal die Hälfte, was auf eine tiefere B2B-Integration hinweist",
          "Compliance: HIPAA- und SOC2-Pakete fördern wichtige Kundenverträge",
          "Preis: Aufgrund der Koexistenz von Preissenkungen und Nutzungspaketen müssen Kunden FinOps durchführen",
          "Aufklärung: Die Entscheidung zwischen selbst erstellter und offizieller API sollte auf der Datensensibilität basieren"
        ],
        "tags": [
          "OpenAI",
          "企业",
          "市场"
        ]
      },
      {
        "id": "2026-06-07-hf-enterprise",
        "title": "Schreiben Sie vor dem Meeting eine Tagesordnung, veröffentlichen Sie wichtige Punkte während des Meetings und verwenden Sie Notion AI, um Protokolle und Aufgaben zu erstellen.",
        "summary": "Unternehmenskunden stellen Open-Source-Modelle und Prüfprotokolle über private Hubs bereit, die zu einer gängigen Architektur in Finanz- und Regierungsangelegenheiten geworden sind.",
        "source": "Hugging Face",
        "body": [
          "Modell: Privater Hub + Inferenzendpunkte aus einer Hand Dies ist eine der meistbeobachteten Änderungen in der Branchendynamik am 07.06.2026 rund um „Hugging Face-Unternehmenshosting-Einnahmen verdoppelt, Modellkarte wird zum Einkaufseingang“.",
          "Governance: Modellkarten und Datenkarten werden zu Compliance-Prüfmaterialien. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Ökologie: Ausgereifte Integration mit K8s und Airflow. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Empfehlung: Sperren Sie die Modell-SBOM vor der Bereitstellung im Intranet. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Modus: Privater Hub + Inferenzendpunkte aus einer Hand",
          "Governance: Modellkarten und Datenkarten werden zu Compliance-Prüfmaterialien",
          "Tracking: Verkörpertes intelligentes Unternehmertum sollte sich auf den simulativ-realen Transfer konzentrieren. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen.",
          "Empfehlung: Sperren Sie die Modell-SBOM vor der Bereitstellung im Intranet"
        ],
        "tags": [
          "HuggingFace",
          "企业",
          "MLOps"
        ]
      },
      {
        "id": "2026-06-06-ai-job-market",
        "title": "KI-Stellenbericht 2026: Nachfrage nach Agenteningenieuren um 120 % im Vergleich zum Vorjahr gestiegen",
        "summary": "Ein gemeinsamer Bericht von Rekrutierungsplattformen zeigt, dass das Durchschnittsgehalt von „Agent Engineers“, die Bewertungsbenchmarks und Toolketten schreiben können, das der traditionellen ML-Ingenieure übersteigt.",
        "source": "LinkedIn Economic Graph",
        "body": [
          "Fähigkeiten: Schnelligkeit, RAG, Bewertung und Beobachtbarkeit sind unerlässlich. Dies ist eine der meistgesehenen Änderungen rund um den „2026 AI Job Report“ im Bereich Branchendynamik am 06.06.2026.",
          "Region: Norden, Shenzhen, Hangzhou und Singapur sind am gefragtesten. Technik- und Produktteams müssen Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Bühnenarbeiter",
          "Empfehlung: Master 1 IDE-Agent + 1 Automatisierungsplattform. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Fähigkeiten: Schnelligkeit, RAG, Bewertung und Beobachtbarkeit sind unerlässlich",
          "Region: Nördlich bis Shenzhen, Hangzhou und Singapur haben die höchste Nachfrage",
          "Erste Schritte: Portfolio ist wichtiger als Aufsatz",
          "Empfehlung: Master 1 IDE-Agent + 1 Automatisierungsplattform"
        ],
        "tags": [
          "就业",
          "Agent",
          "技能"
        ]
      },
      {
        "id": "2026-06-05-vertical-ai-saas",
        "title": "Die vertikale KI-SaaS-Finanzierung nimmt zu: Recht, Medizin und Fertigung liegen auf den ersten drei Plätzen",
        "summary": "Die Risikokapitaldaten für das zweite Quartal zeigen, dass die ARR-Beibehaltung in vertikalen Szenarien besser ist als bei allgemeinen Chat-Shells; Käufer sind bereit, für Compliance und Arbeitsabläufe zu zahlen.",
        "source": "a16z",
        "body": [
          "Aufbewahrung: In Workflows eingebettete KI-Funktionen weisen höhere NDRs auf. Dies ist eine der am 05.06.2026 am häufigsten beobachteten Veränderungen in der Branchendynamik rund um das „Wiederaufleben der vertikalen KI-SaaS-Finanzierung“.",
          "Barrieren: Branchendaten und Experten-Feedbackschleifen sind Burggräben. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Risiko: Preissenkung allgemeiner Großmodelle und dünnschaliger Anwendungen. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Überprüfen Sie bei vertraulichen Besprechungen zunächst, ob das Unternehmen die Cloud-Transkription zulässt."
        ],
        "highlights": [
          "Schreiben Sie verschiedene Szenenaufforderungen, um --cw 80 beizubehalten",
          "Barrieren: Branchendaten und Experten-Feedbackschleifen sind Burggräben",
          "Risiko: Preissenkung allgemeiner Großmodelle für extrudierte Dünnschalenanwendungen",
          "Unternehmertum: Wählen Sie ein enges Szenario mit einem klaren ROI"
        ],
        "tags": [
          "SaaS",
          "垂直",
          "融资"
        ]
      },
      {
        "id": "2026-06-04-china-ai-app-dau",
        "title": "Monatliche Aktualisierung der aktiven Liste der inländischen KI-nativen App: Die Kategorien „Büroassistent“ und „Bildung“ sind führend",
        "summary": "Die Mai-Daten von QuestMobile zeigen, dass Büroprotokolle, Apps zum Aufnehmen und Lösen von Fotos sowie zur Videogenerierung das monatliche Wachstum der MAU angeführt haben.",
        "source": "QuestMobile",
        "body": [
          "Kategorie: Bürokollaboration und pädagogische Nachhilfe belegen sechs der Top-Ten-Plätze. Dies ist eine der am meisten beobachteten Änderungen im Bereich der Branchendynamik am 04.06.2026 im Zusammenhang mit der „Aktualisierung der monatlichen aktiven Liste inländischer nativer KI-Apps“.",
          "Monetarisierung: Die Hybridabrechnung aus Abonnement und Pay-per-Use ist zum Mainstream geworden. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Compliance: Der Minderjährigenmodus und die Inhaltsidentifizierung müssen an den Regalen überprüft werden. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Produkt: Das Wachstum des reinen Chats verlangsamt sich und Tool-Funktionen sind klebriger. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Kategorie: Bürokollaboration und pädagogische Nachhilfe belegen sechs der Top-Ten-Plätze",
          "Monetarisierung: Hybridabrechnung aus Abonnement und Pay-per-View wird zum Mainstream",
          "Compliance: Nebenmodus und Inhaltsidentifizierung müssen vor der Auflistung überprüft werden",
          "Produkt: Das Wachstum des reinen Chats verlangsamt sich und Tool-Funktionen sind klebriger"
        ],
        "tags": [
          "中国",
          "应用",
          "数据"
        ]
      },
      {
        "id": "2026-06-03-eu-ai-act-highrisk",
        "title": "Es müssen Mechanismen zur Annahme von Beschwerden und zur Rückverfolgbarkeit eingerichtet werden",
        "summary": "Die Europäische Kommission hat einen Anhangsentwurf für KI-Szenarien mit hohem Risiko veröffentlicht, der Konsistenztests und manuelle Einspruchskanäle für Einstellungsüberprüfungs- und Kreditbewertungssysteme vorschreibt.",
        "source": "European Commission",
        "body": [
          "Geltungsbereich: Rekrutierung, Bildungsbewertung, Kreditwürdigkeit, kritische Infrastruktur im Zusammenhang mit hohen Risiken. Dies ist eine der meistgesehenen Änderungen im politischen und regulatorischen Bereich am 03.06.2026 im Zusammenhang mit der „European Union AI Act High-Risk List Details Solicitation“.",
          "Pflichten: Data-Governance-Dokumente, Protokollaufbewahrung, Personen auf dem Laufenden. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Zeitplan: Die Mitgliedstaaten werden ihre nationalen Gesetze vor Ende 2026 umstellen. Im Hinblick auf Geschäft und Compliance wird empfohlen, gleichzeitig die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Ins Ausland gehen: SaaS für EU-Benutzer muss im Voraus eine DPIA durchführen. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Geltungsbereich: Rekrutierung, Bildungsbewertung, Kreditwürdigkeit, kritische Infrastruktur im Hochrisikobereich enthalten",
          "Verantwortlichkeiten: Datenverwaltungsdokumente, Protokollaufbewahrung, Personen in der Umgebung",
          "Zeitplan: Die Mitgliedstaaten setzen ihre innerstaatlichen Gesetze bis Ende 2026 um",
          "Ins Ausland gehen: SaaS für EU-Benutzer erfordert eine DPIA im Voraus"
        ],
        "tags": [
          "欧盟",
          "AI Act",
          "合规"
        ]
      },
      {
        "id": "2026-06-02-us-ai-safety-eo",
        "title": "Die Vereinigten Staaten aktualisieren die AI-Executive Order: Basismodelle müssen eine rote Teamzusammenfassung einreichen",
        "summary": "Die Bundesbehörde verlangt von Anbietern von Hyperscale-Basismodellen, dem NIST eine Zusammenfassung ihrer Sicherheitsbewertung vorzulegen, einschließlich der Ergebnisse von CBRN- und Netzwerkmissbrauchstests.",
        "source": "White House",
        "body": [
          "Zielgruppe: Modellentwickler, deren Trainingsrechenleistung den Schwellenwert überschreitet. Dies ist eine der meistgesehenen Änderungen im politischen und regulatorischen Bereich am 02.06.2026 im Zusammenhang mit der „U.S. Updated AI Executive Order“.",
          "Inhalt: Red-Team-Berichte, Maßnahmen zur Missbrauchsbekämpfung, Benachrichtigungen über Versionsänderungen. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Auswirkung: API-Anbieter verlangen möglicherweise Kundennutzungserklärungen. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Unternehmen: Beim Kauf müssen Sie nach dem Muster-Sicherheits-Whitepaper fragen. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Zielgruppe: Modellentwickler, deren Trainingsrechenleistung den Schwellenwert überschreitet",
          "Inhalt: Red-Team-Berichte, Maßnahmen zur Missbrauchsbekämpfung, Benachrichtigungen über Versionsänderungen",
          "Auswirkung: API-Anbieter verlangen möglicherweise Kundennutzungserklärungen",
          "Unternehmen: Beim Kauf müssen Sie nach dem Muster-Sicherheits-Whitepaper fragen"
        ],
        "tags": [
          "美国",
          "安全",
          "监管"
        ]
      },
      {
        "id": "2026-06-01-uk-ai-copyright",
        "title": "Großbritannien veröffentlicht Leitfaden zur KI-Urheberrechtspraxis: Empfehlungen zur Schulung von Datentransparenz",
        "summary": "Cursor + GitHub MCP-Fix-Problem",
        "source": "UK IPO",
        "body": [
          "Schulung: Offenlegung von Datenlisten und Lizenzstatus fördern Dies ist eine der meistgesehenen Änderungen im Bereich der politischen Regulierung am 01.06.2026 im Zusammenhang mit den „UK Publishes AI Copyright Practice Guidelines“.",
          "Generierte Produkte: Die urheberrechtliche Identifizierung von KI-gestützten Werken ist immer noch eine Einzelfallanalyse. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Plattform: Der Gastgeber sollte ein Beschwerde- und Entfernungsverfahren einrichten. Im Hinblick auf Geschäft und Compliance wird empfohlen, gleichzeitig die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Urheber: Die Aufbewahrung von Beweisen über den kreativen Prozess trägt zum Schutz der Rechte bei. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Schulung: Ermutigen Sie zur Offenlegung von Datenbeständen und Lizenzstatus",
          "Generierte Produkte: Die urheberrechtliche Identifizierung von KI-gestützten Werken ist immer noch eine Einzelfallanalyse",
          "Plattform: Der Gastgeber sollte ein Beschwerde- und Entfernungsverfahren einrichten",
          "Urheber: Die Aufbewahrung von Beweisen über den kreativen Prozess trägt zum Schutz der Rechte bei"
        ],
        "tags": [
          "英国",
          "版权",
          "AI"
        ]
      },
      {
        "id": "2026-05-31-cn-algorithm-filing",
        "title": "Bei der inländischen Deep-Synthese-Algorithmus-Registrierung wird die neue Unterkategorie „Interaktive Frage und Antwort“ hinzugefügt",
        "summary": "Die Cyberspace Administration of China hat den Registrierungsleitfaden aktualisiert. Interaktive Großmodellanwendungen müssen die Beschreibung der Trainingsdatenquelle und die Vorlage für den Sicherheitsbewertungsbericht ergänzen.",
        "source": "CAC",
        "body": [
          "Ziel: Anwendungen zur Konversationsgenerierung für die Öffentlichkeit Dies ist eine der am 31.05.2026 am häufigsten beobachteten Änderungen im Bereich der politischen Überwachung rund um „die neue Unterkategorie „interaktive Frage und Antwort“ für die Registrierung von inländischen Tiefensynthesealgorithmen“.",
          "Materialien: Sicherheitsbewertung, Identifizierungsplan, Notfallplan. Technik- und Produktteams müssen Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Zyklus: Hauptversions-Upgrades erfordern möglicherweise die Einreichung von Änderungen. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Empfehlung: Rechts- und Algorithmenteams überprüfen Materialien gleichzeitig. Für KI-Lernende kann dies verwendet werden, um persönliche Werkzeugkarten und Fallstricklisten zu aktualisieren und eine kleine praktische Operation oder einen internen Austausch innerhalb einer Woche durchzuführen."
        ],
        "highlights": [
          "Ziel: Anwendungen zur Konversationsgenerierung für die Öffentlichkeit",
          "Materialien: Sicherheitsbewertung, Markierungsplan, Notfallplan",
          "Zyklus: Hauptversions-Upgrades erfordern möglicherweise die Einreichung von Änderungen",
          "Vorschlag: Rechts- und Algorithmenteams überprüfen Materialien gleichzeitig"
        ],
        "tags": [
          "中国",
          "备案",
          "合规"
        ]
      },
      {
        "id": "2026-05-30-sg-model-governance",
        "title": "Singapore Model AI Governance Framework 3.0 veröffentlicht",
        "summary": "IMDA aktualisiert das generative KI-Governance-Framework, um die Transparenz der Lieferkette mit optionaler Zertifizierung durch Bewertungen Dritter zu betonen.",
        "source": "IMDA Singapore",
        "body": [
          "Rahmenwerk: Deckt die Verantwortlichkeiten der drei Parteien für Entwicklung, Bereitstellung und Beschaffung ab. Dies ist eine der am meisten beobachteten Änderungen im Bereich der politischen Überwachung rund um das „Singapore Model AI Governance Framework 3.0 Release“ am 30.05.2026.",
          "Zertifizierung: Das freiwillige Pilotprojekt zum Gütesiegel für die Bewertung durch Dritte wird gestartet. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Daten: Für die grenzüberschreitende Übermittlung ist die Erfassung der Rechtsgrundlage erforderlich. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Unternehmen: Die Zentrale im asiatisch-pazifischen Raum wählt oft Singapur als Compliance-Hub. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Rahmenwerk: Deckt die Verantwortlichkeiten der drei Parteien für Entwicklung, Bereitstellung und Beschaffung ab",
          "Zertifizierung: Pilotprojekt zur freiwilligen Bewertung eines Gütesiegels durch Dritte gestartet",
          "Daten: Die grenzüberschreitende Übermittlung muss auf gesetzlicher Grundlage erfasst werden",
          "Unternehmen: Zentralen im asiatisch-pazifischen Raum wählen häufig Singapur als Compliance-Hub"
        ],
        "tags": [
          "新加坡",
          "治理",
          "亚太"
        ]
      },
      {
        "id": "2026-05-29-india-ai-safety",
        "title": "Indien gründet AI Safety Alliance: Pilotprojekt zur Überwachung des Missbrauchs von Open-Source-Modellen",
        "summary": "Die branchenübergreifende Allianz wird eine Meldeplattform und eine Modellbibliothek für Missbrauchsfälle einrichten und lokale Clouds dazu ermutigen, sichere API-Gateways bereitzustellen.",
        "source": "MeitY India",
        "body": [
          "Überwachung: Fokus auf Deep-Forgery- und Betrugsskriptgenerierung Dies ist eine der am 29.05.2026 am häufigsten beobachteten Änderungen im politischen und regulatorischen Bereich im Zusammenhang mit „Indiens Gründung der AI Security Alliance“.",
          "Gateway: Cloud-Anbieter können optional Eingabeaufforderungen und Ausgabefilter installieren. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Open Source: Schwerpunkt auf Community-Zusammenarbeit zur Veröffentlichung von Missbrauchs-Fingerabdrücken. Im Hinblick auf Geschäft und Compliance wird empfohlen, gleichzeitig die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Suchen Sie nach Skill-Name, Branche, Verwendung, anwendbarer Software ..."
        ],
        "highlights": [
          "Überwachung: Konzentrieren Sie sich auf Deepfakes und die Erstellung von Betrugsskripten",
          "Gateway: Cloud-Anbieter können optional Eingabeaufforderungen und Ausgabefilter installieren",
          "Open Source: Schwerpunkt auf Community-Zusammenarbeit zur Veröffentlichung von Missbrauchs-Fingerabdrücken",
          "Ins Ausland gehen: Die lokalisierte Filterung muss für den indischen Markt evaluiert werden"
        ],
        "tags": [
          "印度",
          "安全",
          "开源"
        ]
      },
      {
        "id": "2026-05-28-japan-ai-promotion",
        "title": "Ausgewählte Sammlung von Designfähigkeiten: Layout, Farbabstimmung, Komponententechnologie und Anti-KI-Ästhetikroutinen, geeignet für Landingpages und Produktschnittstellen.",
        "summary": "Das Gesetz richtet das KI-Strategie-Hauptquartier ein, verlangt Leitlinien zu Hochrisikobereichen und sorgt für ein freundliches Umfeld für Forschung und Open Source.",
        "source": "日本内阁府",
        "body": [
          "Governance: Szenariobasierte Risikoeinstufung, kein pauschales Verbot. Dies ist eine der am 28.05.2026 am meisten beobachteten Änderungen im Bereich der politischen Aufsicht im Zusammenhang mit der „Umsetzung des japanischen „KI-Fördergesetzes““.",
          "Industrie: Robotik und Fertigung erhalten Sonderförderungen. Technologie- und Produktteams müssen Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Urheberrecht: Schulungsdaten in Zusammenarbeit mit dem Kulturministerium besprechen. Im Hinblick auf Geschäft und Compliance wird empfohlen, gleichzeitig die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Ausländische Unternehmen: Unternehmen in Japan müssen auf die Pflichten lokaler Vertreter achten. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Governance: Risikoklassifizierung anhand von Szenarien, kein pauschales Verbot",
          "Industrie: Robotik und Fertigung erhalten Sonderförderungen",
          "Urheberrecht: Diskussion der Trainingsdaten in Zusammenarbeit mit der Agentur für Kultur",
          "Ausländische Unternehmen: Unternehmen in Japan müssen auf die Pflichten lokaler Vertreter achten"
        ],
        "tags": [
          "日本",
          "立法",
          "亚太"
        ]
      },
      {
        "id": "2026-05-27-brazil-lgpd-ai",
        "title": "Brasilien LGPD-Änderungsentwurf: Automatisierte Entscheidungsfindung erfordert Recht auf Erklärung",
        "summary": "Der Entwurf sieht vor, automatisierte Entscheidungen, die rechtliche oder ähnliche Auswirkungen auf Nutzer haben, mit prägnanten Erläuterungen und einem manuellen Überprüfungsantragsportal bereitzustellen.",
        "source": "Brazil Senate",
        "body": [
          "Interpretationsrecht: Nutzer können eine Erläuterung der wesentlichen Logik und Einflussfaktoren verlangen. Dies ist eine der meistgesehenen Änderungen im Bereich der politischen Aufsicht am 27.05.2026 im Zusammenhang mit dem „Brazilian LGPD Draft Amendment“.",
          "Überprüfung: Es müssen manuelle Einspruchskanäle und Fristen bereitgestellt werden. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Strafe: Verbinden Sie sich mit dem LGPD-Bußgeldrahmen. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Produkt: Vorrangige Erneuerung der Kredit-/Rekrutierungsautomatisierungsfunktionen. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Erklärungsrecht: Nutzer können eine Erläuterung der wesentlichen Logik und Einflussfaktoren verlangen",
          "Überprüfung: Manueller Einspruchskanal und Zeitlimit müssen angegeben werden",
          "Strafen: Angleichung an das LGPD-Strafrahmenwerk",
          "Produkt: Prioritätstransformation der Kredit-/Rekrutierungsautomatisierungsfunktion"
        ],
        "tags": [
          "巴西",
          "隐私",
          "LATAM"
        ]
      },
      {
        "id": "2026-05-26-o3-reasoning",
        "title": "OpenAI o3-Papieroffenlegung: Überprüfbare Argumentationskette verbessert die Genauigkeit der Mathematikolympiade",
        "summary": "Das Papier zeigt, dass o3 in AIME 2025 mit einer Such- und Validierungsarchitektur 96 % erreicht, und analysiert Fehlerfälle aufgrund von Symbolmehrdeutigkeit.",
        "source": "arXiv",
        "body": [
          "Methode: Generieren Sie mehrere Argumentationsketten und filtern Sie sie durch den Prüfer. Dies ist eine der am 26.05.2026 am häufigsten beobachteten Änderungen im Zusammenhang mit der „OpenAI o3 Paper Disclosure“ im Bereich der Forschungsdurchbrüche.",
          "Kosten: Hohe Genauigkeit geht mit einem Overhead von 10×+ Token einher. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Aufklärung: „Kleiner Modellentwurf + große Modellüberprüfung“ kann in der Produktionsumgebung verwendet werden. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Ausbildung: Geeignet für Nachhilfeunterricht bei der Mathematikolympiade, muss jedoch ein direktes Durchsickern von Fragen verhindern. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Methode: Generieren Sie mehrere Inferenzketten und filtern Sie sie durch den Validator",
          "Geben Sie Daten und Referenzen manuell ein",
          "Aufklärung: „Grobberechnung eines kleinen Modells + Verifizierung eines großen Modells“ kann in der Produktionsumgebung verwendet werden",
          "Ausbildung: Geeignet für Nachhilfeunterricht bei der Mathematikolympiade, muss aber die direkte Offenlegung von Fragen verhindern"
        ],
        "tags": [
          "o3",
          "推理",
          "数学"
        ]
      },
      {
        "id": "2026-05-25-world-model-robotics",
        "title": "Google DeepMind veröffentlicht Genie 3-Weltmodell: Robotersimulationstraining",
        "summary": "Genie 3 kann aus einem einzigen Bild interaktive 3D-Szenen generieren, um Simulationsdaten für das Erlernen von Roboterrichtlinien zu erweitern.",
        "source": "DeepMind",
        "body": [
          "Fähigkeit: Verbesserung der Szenenkonsistenz bei Interaktionen auf Minutenebene. Dies ist eine der meistgesehenen Änderungen im Forschungsdurchbruch vom 25.05.2026 rund um „Google DeepMind veröffentlicht Genie 3-Weltmodell“.",
          "Anwendung: Reduzieren Sie die tatsächlichen Kosten für die Robotersammlung. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Eine überprüfbare Skizze eines ersten Vorschlagsentwurfs.",
          "Tracking: Verkörpertes intelligentes Unternehmertum sollte sich auf den simulativ-realen Transfer konzentrieren. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Funktion: Verbesserte Konsistenz von Interaktionsszenarien auf Minutenebene",
          "Anwendung: Reduzieren Sie die Kosten für die Sammlung echter Roboter",
          "Einschränkungen: Die physikalische Genauigkeit reicht immer noch nicht aus, um High-Fidelity-Engines zu ersetzen",
          "Tracking: Verkörpertes intelligentes Unternehmertum sollte sich auf die Simulation realer Migration konzentrieren"
        ],
        "tags": [
          "世界模型",
          "机器人",
          "仿真"
        ]
      },
      {
        "id": "2026-05-24-llm-memory-compress",
        "title": "Das MIT schlägt eine LLM-Komprimierung des Langzeitgedächtnisses vor: 1/8 Kontexterhaltung, 95 % Erinnerung",
        "summary": "Die neue Methode destilliert historische Dialoge in abrufbare Speichervektoren und erreicht so eine nahezu vollständige Kontextleistung bei LongMemEval.",
        "source": "MIT CSAIL",
        "body": [
          "Idee: Hierarchische Zusammenfassung + Vektorindex ersetzen die gewalttätige Schreibweise des Kontexts. Dies ist eine der meistbeachteten Änderungen im Forschungsdurchbruch vom 24.05.2026 rund um „MIT schlägt LLM-Langzeitgedächtniskomprimierung vor“.",
          "Vorteile: Reduzieren Sie die API-Kosten für lange Sitzungen. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Risiko: Der Verlust von Details in der Zusammenfassung kann zu Vertragsfehlern führen. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Engineering: Kann zur Implementierung mit vorhandenen Vektorbibliotheken kombiniert werden. Für KI-Lernende kann dies verwendet werden, um persönliche Werkzeugkarten und Fallstricklisten zu aktualisieren und eine kleine praktische Operation oder einen internen Austausch innerhalb einer Woche durchzuführen."
        ],
        "highlights": [
          "Idee: Hierarchische Zusammenfassung + Vektorindex ersetzen die gewalttätige Schreibweise des Kontexts",
          "Vorteil: Reduzierte API-Kosten für lange Sitzungen",
          "Risiko: Fehlende Angaben in der Zusammenfassung können zu Vertragsfehlern führen",
          "Engineering: Kann zur Implementierung mit vorhandenen Vektorbibliotheken kombiniert werden"
        ],
        "tags": [
          "记忆",
          "RAG",
          "上下文"
        ]
      },
      {
        "id": "2026-05-23-mm-math-reasoning",
        "title": "Multimodaler Benchmark zum mathematischen Denken MM-MATH veröffentlicht: Diagrammfragen sind das größte Manko",
        "summary": "Der neue Benchmark umfasst statistische Grafiken und Fragen zum geometrischen Zeichnen. Die Genauigkeit des stärksten Modells bei Diagrammfragen beträgt nur 62 %, was die Lücke zwischen visuellen Symbolen offenlegt.",
        "source": "MM-MATH Paper",
        "body": [
          "Entdeckung: Die Stärke von Textfragen ist nicht gleich der Stärke von Diagrammfragen. Dies ist eine der meistbeachteten Änderungen im Forschungsdurchbruch vom 23.05.2026 rund um die „Multimodal Mathematical Reasoning Benchmark MM-MATH Release“.",
          "Daten: Es ist ein qualitativ hochwertiger gepaarter Diagramm-Inferenz-Trainingssatz erforderlich. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Anwendung: Fragen und Antworten zum Jahresabschluss müssen mit Vorsicht eingeleitet werden. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Bewertung: Unternehmen sollten ihr eigenes Domänendiagramm-Testset erstellen. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Entdeckung: Die Stärke bei Textfragen ist nicht gleichbedeutend mit der Stärke bei Diagrammfragen",
          "Daten: Hochwertige Diagramme erforderlich – gepaarter Inferenz-Trainingssatz",
          "Anwendung: Fragen und Antworten zu Finanzberichten müssen mit Vorsicht online gestellt werden",
          "Bewertung: Unternehmen sollten ihr eigenes Domänendiagramm-Testset erstellen"
        ],
        "tags": [
          "多模态",
          "数学",
          "评测"
        ]
      },
      {
        "id": "2026-05-22-alphafold-update",
        "title": "AlphaFold 4-Vorschau: Vorhersage der Protein-Ligand-Komplexstruktur",
        "summary": "DeepMind gibt einen Ausblick auf die verbesserte Vorhersagegenauigkeit der Bindungsstellen von Arzneimittelmolekülen durch AlphaFold 4 und Pharmaunternehmen weiten die Pilotkooperation aus.",
        "source": "DeepMind",
        "body": [
          "Durchbruch: Verbesserte Korrelation der Rangfolge der freien Bindungsenergie Dies ist eine der meistgesehenen Änderungen rund um die „AlphaFold 4 Preview“ im Bereich der Forschungsdurchbrüche vom 22.05.2026.",
          "Offen: Akademische nichtkommerzielle Lizenz, Pharmaunternehmen benötigen eine kommerzielle Vereinbarung. Technik- und Produktteams müssen Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der Produktionsverkehr ohne Pilotverifizierung vollständig umgeschaltet wird.",
          "Rechenleistung: Einzelkomplex-Inferenz in Minuten. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Crossover: Die Nachfrage nach Biologie + KI-Kombinationstalenten steigt. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Durchbruch: Verbesserte Korrelation der Rankings der bindenden freien Energie",
          "Offen: akademische, nichtkommerzielle Lizenz, Handelsvereinbarung eines Pharmaunternehmens erforderlich",
          "Rechenleistung: Einzelverbindungsinferenz in Minuten",
          "Crossover: Biologie + KI, die Nachfrage nach zusammengesetzten Talenten steigt"
        ],
        "tags": [
          "生物",
          "AlphaFold",
          "科研"
        ]
      },
      {
        "id": "2026-05-21-synthetic-data-train",
        "title": "Metaforschung: Hochwertige synthetische Daten können 40 % der manuellen Annotation ersetzen",
        "summary": "Der Artikel zeigt, dass die vom Lehrermodell generierten und gefilterten synthetischen Daten mit manuellen Anmerkungen bei Klassifizierungs- und Extraktionsaufgaben vergleichbar sind, Inferenzfragen jedoch anfällig für Überanpassungen sind.",
        "source": "Meta AI Research",
        "body": [
          "Methode: Lehrergenerierung → Qualitätsmodellfilterung → Kurslernen Dies ist eine der am 21.05.2026 am häufigsten beobachteten Änderungen rund um „Metaforschung“ im Bereich Forschungsdurchbrüche.",
          "Anwendbar auf: Klassifizierung, NER und Formatkonvertierung werden am meisten profitieren. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Risiko: Argumentation/Mathematik neigt zum Zusammenbruch des Modells. Im Hinblick auf Geschäft und Compliance wird empfohlen, die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten gleichzeitig zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Praxis: Unternehmensfeinabstimmung kann mit 30 % synthetischem Start gemischt werden. Für KI-Lernende kann dies verwendet werden, um die persönliche Werkzeugkarte und Fallstrickliste zu aktualisieren und einen kleinen praktischen Vorgang oder einen internen Austausch innerhalb einer Woche abzuschließen."
        ],
        "highlights": [
          "Methode: Lehrergenerierung→Qualitätsmodellfilterung→Kurslernen",
          "Anwendbar: Klassifizierung, NER, Formatkonvertierung werden am meisten profitieren",
          "Risiko: Argumentation/Mathematik neigt zum Zusammenbruch des Modells",
          "Praxis: Unternehmens-Feinabstimmung des mischbaren 30 % synthetischen Starts"
        ],
        "tags": [
          "合成数据",
          "训练",
          "成本"
        ]
      },
      {
        "id": "2026-05-20-sparse-attn-2m",
        "title": "Durch sparsame Aufmerksamkeit wird eine experimentelle Überprüfung des 2-Millionen-Token-Kontexts erreicht",
        "summary": "Mehrere Labore haben eine Hybridarchitektur mit Sparse + Sliding Window angekündigt, die im 2M-Token-Book-Frage-und-Antwort-Experiment eine brauchbare Genauigkeit erreicht.",
        "source": "arXiv",
        "body": [
          "Architektur: Block Sparse + Global Anchor Token Dies ist eine der meistgesehenen Änderungen im Forschungsdurchbruch vom 20.05.2026 rund um „Sparse Attention erreicht 2 Millionen Token-Kontextexperimentelle Verifizierung“.",
          "Kosten: Der Speicher wird um 70 % reduziert, die Implementierung ist jedoch kompliziert. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Produkt: Cloud API ist noch nicht allgemein zugänglich. Im Hinblick auf das 2M-Geschäft und die Compliance wird empfohlen, gleichzeitig die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "RAG: Bei extrem langen Artikelszenarien kann zwischen RAG und RAG gewählt werden. KI-Lernende können damit ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch abschließen."
        ],
        "highlights": [
          "Architektur: Blocksparse + globales Ankertoken",
          "Kosten: Speicher um 70 % reduziert, aber die Implementierung ist komplex",
          "Produkt: Cloud API ist noch nicht allgemein geöffnet 2M",
          "RAG: Bei extrem langen Textszenarien kann zwischen RAG und RAG gewählt werden"
        ],
        "tags": [
          "长上下文",
          "架构",
          "研究"
        ]
      },
      {
        "id": "2026-05-19-self-evolving-agents",
        "title": "Sich selbst weiterentwickelndes Agent-Papier sorgt für heftige Diskussionen: Tool-Bibliothek erweitert automatisch risikokontrollierte Experimente",
        "summary": "Der Agent lernt sich selbst neue Tool-Skripte in der Sandbox bei, mit einer Aufgabenerledigungsrate von +18 %, es gibt jedoch auch Fälle von nicht autorisierten Netzwerkanfragen.",
        "source": "AgentEvo Paper",
        "body": [
          "Ergebnis: Das automatische Erweiterungstool ist effektiv, erfordert jedoch eine Sandbox. Dies ist eine der meistgesehenen Veränderungen im Bereich der Forschungsdurchbrüche am 19.05.2026 rund um das „Self-Evolving Agent Paper Sparking Hot Discussions“.",
          "Sicherheit: Netzwerk-Whitelisting und Code-Auditing sind erforderlich. Technik- und Produktteams müssen die Integrationskosten, Berechtigungsänderungen und Rollback-Pläne entsprechend bewerten, um zu vermeiden, dass der gesamte Produktionsverkehr ohne Pilotverifizierung umgestellt wird.",
          "Branche: „Selbstlernendes“ Marketing muss Erwartungen senken. Im Hinblick auf Geschäft und Compliance wird empfohlen, gleichzeitig die Datenresidenz, die Protokollaufbewahrung und die Benutzerbenachrichtigungspflichten zu überprüfen, insbesondere wenn das Produkt auf grenzüberschreitende oder multiregionale Benutzer ausgerichtet ist.",
          "Empfehlung: Für die Produktion sind nur registrierte Werkzeugsätze zugelassen. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen."
        ],
        "highlights": [
          "Ergebnis: Das Autoscaling-Tool funktioniert, erfordert jedoch Sandboxing",
          "Sicherheit: Netzwerk-Whitelisting und Code-Auditing sind erforderlich",
          "Branche: „Selbstlernendes“ Marketing muss Erwartungen senken",
          "Empfehlung: Die Produktion erlaubt nur registrierte Toolsets"
        ],
        "tags": [
          "Agent",
          "自进化",
          "安全"
        ]
      }
    ]
  },
  "latestTutorials": {
    "meta": {
      "lead": "Tägliche praktische Tutorials zu den neuesten Tools und Arbeitsabläufen. Schritt-für-Schritt-Fälle enthalten kopierfertige Eingabeaufforderungen.",
      "updatedLabel": "Letzte Aktualisierung: {Datum}",
      "countShown": "Zeigt {visible} / {total}",
      "emptyHint": "Keine Tutorials in dieser Kategorie. Versuchen Sie es mit einem anderen Tag.",
      "newBadge": "Neu",
      "illustratedBadge": "Schritt für Schritt",
      "backToList": "Zurück zu den Tutorials"
    },
    "categories": {
      "全部": "Alle",
      "编程开发": "Programmierentwicklung",
      "提示词": "schnelles Wort",
      "图像视频": "Imagevideo",
      "自动化": "Automatisierung",
      "办公效率": "Büroeffizienz"
    },
    "items": [
      {
        "id": "2026-07-04-cursor-web-calculator",
        "title": "Schritt für Schritt: Erstellen Sie mit KI einen Webrechner",
        "desc": "Von Null auf Eins: Verwenden Sie Cursor Agent, um einen HTML-Rechner zu generieren, der per Doppelklick ausgeführt werden kann. Das folgende Diagramm veranschaulicht jeden Schritt: Erstellen eines Projekts, Schreiben von Aufforderungswörtern, Überprüfen des Codes, Browservorschau sowie Testen und Reparieren.",
        "illustratedSteps": [
          {
            "title": "Erstellen Sie einen neuen leeren Projektordner",
            "text": "Erstellen Sie den Ordner calc-demo auf dem Desktop und öffnen Sie ihn mit Cursors Datei → Ordner öffnen. Stellen Sie sicher, dass das Projekt leer ist, damit AI eine einzelne Datei von Grund auf erstellen kann.",
            "image": "assets/tutorials/calc-step-1-folder.svg",
            "alt": "在 Cursor 中打开空的 calc-demo 项目文件夹"
          },
          {
            "title": "Öffnen Sie Composer und fügen Sie das Eingabeaufforderungswort ein",
            "text": "Drücken Sie Befehl+I (Mac) oder Strg+I (Windows), um das Agentenfenster zu öffnen, fügen Sie die Eingabeaufforderungswörter am Ende des Tutorials ein und klicken Sie auf „Generieren“. AI erstellt eine einzelne Datei index.html.",
            "image": "assets/tutorials/calc-step-2-composer.svg",
            "alt": "在 Cursor Composer 中输入计算器提示词",
            "caption": "提示词越具体，生成结果越接近预期。可先复制教程底部模板再微调。"
          },
          {
            "title": "Überprüfen Sie die generierte Codestruktur",
            "text": "Vergewissern Sie sich, dass index.html im linken Explorer angezeigt wird. Öffnen Sie die Datei und prüfen Sie, ob sie HTML-Struktur, CSS-Stil und JavaScript-Berechnungslogik enthält.",
            "image": "assets/tutorials/calc-step-3-code.svg",
            "alt": "检查 AI 生成的 index.html 代码"
          },
          {
            "title": "Browser-Vorschau-Rechner",
            "text": "Klicken Sie mit der rechten Maustaste auf index.html → Im Finder anzeigen / Im Ordner anzeigen, doppelklicken Sie, um es in Chrome oder Safari zu öffnen. Die Live-Vorschau kann auch mit Cursor Live Server erweitert werden.",
            "image": "assets/tutorials/calc-step-4-preview.svg",
            "alt": "在浏览器中预览网页计算器"
          },
          {
            "title": "Testen Sie Artikel für Artikel und fragen Sie nach Korrekturen",
            "text": "Testen Sie die Schaltflächen Addition, Subtraktion, Multiplikation, Division und Löschen. Wenn die Schaltfläche nicht reagiert oder ein Fehler im kontinuierlichen Operator vorliegt, wählen Sie den entsprechenden Code aus und fragen Sie die KI: „Die Schaltfläche reagiert beim Klicken nicht, bitte beheben Sie das Problem.“ Zur Stabilisierung sind 1–2 Iterationen erforderlich.",
            "image": "assets/tutorials/calc-step-5-test.svg",
            "alt": "测试计算器并追问 AI 修复问题"
          }
        ],
        "prompt": "Bitte helfen Sie mir, eine einfache und schöne Rechner-Webseite mit HTML + CSS + JavaScript zu erstellen:\n\nFunktionale Anforderungen:\n- Unterstützt Addition, Subtraktion, Multiplikation, Division und Clearing (C)\n- Das Display zeigt Eingaben und Ergebnisse in Echtzeit an\n- Verhindern Sie häufige Logikfehler wie das ständige Drücken von Operatoren\n-Unterstützung der numerischen Tastatureingabe (optionaler Bonus)\n\nDesignanforderungen:\n- Dunkles Design, abgerundete Tasten, leichtes Feedback beim Schweben\n- Auch auf mobilen Geräten normal nutzbar\n\nLieferbedingungen:\n- Geben Sie eine einzelne index.html-Datei aus, die durch Doppelklick direkt im Browser geöffnet werden kann.\n-Code plus chinesische Kommentare\n-Sag mir endlich, wie man es ausführt und testet",
        "result": "Holen Sie sich einen Webrechner, der per Doppelklick geöffnet werden kann, vier Rechenoperationen ausführen kann und den geschlossenen Regelkreis der KI-Programmierung „Anforderungen beschreiben → Generieren → Vorschau → Feedback und Reparatur“ beherrscht.",
        "tips": "Es besteht keine Notwendigkeit, gleich beim ersten Mal eine perfekte Benutzeroberfläche anzustreben. Gehen Sie zunächst die Logik durch und lassen Sie sich dann von der KI dabei helfen, „die Schaltfläche in einen Kreis und die Hauptfarbe in Cyan zu ändern“."
      },
      {
        "id": "2026-07-04-cursor-local-matting",
        "title": "Schritt für Schritt: Erstellen Sie mithilfe von KI ein lokales Ausschnittwerkzeug",
        "desc": "Verlassen Sie sich nicht auf die Online-API, sondern verwenden Sie den Cursor, um die lokale Ausschnitt-Webseite von Flask + rembg zu generieren: Bilder per Drag & Drop hochladen, lokale KI zum Entfernen des Hintergrunds, transparentes PNG herunterladen. Geeignet für E-Commerce-Bilder und die Verarbeitung von Ausweisfotos.",
        "illustratedSteps": [
          {
            "title": "Projekt erstellen und Abhängigkeiten installieren",
            "text": "Erstellen Sie einen neuen bg-remove-Ordner und öffnen Sie ihn mit dem Cursor. Erstellen Sie eine virtuelle Umgebung im Terminal und installieren Sie Rembg, Flask, Pillow: pip install rembg Flask Pillow. Wenn Sie rembg zum ersten Mal ausführen, wird das lokale Modell automatisch heruntergeladen.",
            "image": "assets/tutorials/matting-step-1-setup.svg",
            "alt": "创建 bg-remove 项目并安装 Python 依赖"
          },
          {
            "title": "Beschreiben Sie das komplette Tool in natürlicher Sprache",
            "text": "Fügen Sie die Eingabeaufforderungswörter am Ende des Tutorials in den Cursor-Agenten ein, um das Flask-Backend + Drag-and-Drop-Upload-Frontend + lokale Rembg-Inferenz zu generieren. Es wird deutlich betont, dass „Bilder nicht in die Cloud hochgeladen werden, sondern alle lokal verarbeitet werden.“",
            "image": "assets/tutorials/matting-step-2-prompt.svg",
            "alt": "向 Cursor 描述本地抠图工具需求",
            "caption": "若生成代码报错，把终端报错信息贴回对话，AI 会逐行修复。"
          },
          {
            "title": "Starten Sie den Dienst und öffnen Sie die Upload-Seite",
            "text": "Das Terminal führt python app.py aus und der Browser greift auf http://127.0.0.1:5000 zu. Auf der Seite sollte ein Drag-and-Drop-Upload-Bereich angezeigt werden, der die Formate JPG/PNG unterstützt.",
            "image": "assets/tutorials/matting-step-3-upload.svg",
            "alt": "打开本地抠图工具上传页面"
          },
          {
            "title": "Laden Sie Bilder hoch und die lokale KI schneidet sie automatisch aus",
            "text": "Ziehen Sie ein Bild einer Person oder eines Produkts hinein und klicken Sie auf „Ausschneiden starten“. rembg leitet Rückschlüsse auf die lokale CPU/GPU und ist in der Regel in 2–8 Sekunden abgeschlossen. Während der Verarbeitung wird auf dem Terminal ein Fortschrittsprotokoll angezeigt.",
            "image": "assets/tutorials/matting-step-4-process.svg",
            "alt": "本地 rembg 模型处理抠图"
          },
          {
            "title": "Vorschau, Vergleich und Download von PNG",
            "text": "Vergleichen Sie das Originalbild und das Ausschnittergebnis auf der linken und rechten Seite der Seite und klicken Sie auf „Transparenten Hintergrund PNG herunterladen“, nachdem Sie bestätigt haben, dass Sie mit den Kanten zufrieden sind. Die Datei kann direkt in PPT, Figma oder auf der E-Commerce-Detailseite verwendet werden.",
            "image": "assets/tutorials/matting-step-5-download.svg",
            "alt": "预览抠图结果并下载 PNG"
          }
        ],
        "prompt": "Bitte helfen Sie mir, ein lokal ausgeführtes Ausschnitt-Tool zu erstellen (Python + Flask + rembg):\n\nFunktion:\n1. Die Webseite unterstützt das Ziehen oder Klicken zum Hochladen von JPG/PNG\n2. Das Backend verwendet rembg, um den Hintergrund lokal zu entfernen, ohne eine Drittanbieter-API hochzuladen.\n3. Geben Sie das transparente Hintergrund-PNG zurück und die Webseite zeigt den Originalbild-/Ergebnisvergleich an\n4. Stellen Sie eine Download-Schaltfläche bereit, um result.png zu speichern\n\nProjektstruktur:\n- app.py (Flask-Hauptprogramm)\n- static/index.html (Frontend-Seite, dunkle und einfache Benutzeroberfläche)\n- Uploads/temporäres Verzeichnis\n-Anforderungen.txt\n\nAnforderungen:\n-Code plus chinesische Kommentare\n- Geben Sie den Startbefehl und die Zugriffsadresse an\n- Behandeln Sie häufige Fehler (Datei zu groß, Format nicht unterstützt)",
        "result": "Ein lokales Ausschnitt-Webtool, das auf localhost ausgeführt wird. Zum Hochladen ziehen und ablegen, um ein transparentes Hintergrund-PNG zu erhalten, und der gesamte Vorgang wird offline verarbeitet.",
        "tips": "Der Effekt eines Porträtausschnitts ist in der Regel besser als der von komplexen Haarproduktbildern. Wenn die Kanten gezackt sind, können Sie die KI fragen: „Kantenverlaufsparameter hinzufügen“ oder zum Isnet-Modell wechseln."
      },
      {
        "id": "2026-07-02-cursor-plan-mode",
        "title": "Verwenden Sie den Cursor-Planmodus, um Anforderungen aufzuschlüsseln und Änderungen auf PR-Ebene zu generieren",
        "desc": "Erleben Sie den neuen Planmodus von Cursor: Lassen Sie den Agenten zunächst den Implementierungsplan und die Dateiliste ausgeben und führen Sie ihn dann Schritt für Schritt aus. Es eignet sich für die Funktionsentwicklung im mittleren und großen Maßstab, ohne die Kontrolle zu verlieren.",
        "steps": [
          "Öffnen Sie Cursor und drücken Sie im Projekt Cmd+I, um Agent aufzurufen",
          "Eingabeanforderungen: „Dunkelmodus-Umschaltung zur Lernseite hinzufügen, einschließlich LocalStorage-Persistenz“",
          "Wählen Sie den Planmodus aus, damit der Agent zuerst Schritte, betroffene Dateien und Risikopunkte ausgeben kann",
          "Nachdem Sie den Plan Artikel für Artikel bestätigt haben, klicken Sie auf „Ausführen“ und beobachten Sie die Diff-Vorschau.",
          "Stellen Sie Fragen zum ausgewählten Code, mit denen Sie nicht zufrieden sind: „Verschieben Sie die Umschalttaste auf die rechte Seite der Kopfzeile.“",
          "Führen Sie eine lokale Vorschau aus und vergewissern Sie sich, dass der Status nach dem Themenwechsel und der Aktualisierung beibehalten wird"
        ],
        "prompt": "Bitte implementieren Sie den Wechsel des dunklen/hellen Designs für statische Websites:\n1. Verwenden Sie CSS-Variablen, um die Farbanpassung zu definieren, und das Datenthema hängt an HTML\n2. Auf der rechten Seite der Kopfzeile wird eine kreisförmige Umschalttaste hinzugefügt, und das Symbol verwendet die Symbole Sonne und Mond.\n3. Wählen Sie, ob Sie in localStorage schreiben und es nach der Aktualisierung behalten möchten.\n4. Geben Sie zuerst den Plan aus: Dateiliste, Schritte, potenzielle Risiken, und ändern Sie dann den Code, nachdem ich ihn bestätigt habe.",
        "result": "Holen Sie sich eine umschaltbare Lernseite und verstehen Sie den Arbeitsablauf Plan → Agent ausführen.",
        "tips": "Der Kern des Planmodus ist „Zuerst ausrichten und dann starten“, was die Verwirrung, die dadurch entsteht, dass die KI zu viele Dateien auf einmal ändert, erheblich reduzieren kann."
      },
      {
        "id": "2026-07-02-claude-projects-briefing",
        "title": "Verwenden Sie Claude Projects, um einen automatischen Kompilierungsarbeitsbereich für „AI Industry Daily“ zu erstellen.",
        "desc": "Fügen Sie die Informationslinks und Zusammenfassungsvorlagen in die Wissensdatenbank des Projekts ein und fügen Sie jeden Tag neue Links ein, um ein einheitliches Format täglicher Branchenberichte zu erstellen, das für die Weitergabe in morgendlichen Teambesprechungen geeignet ist.",
        "steps": [
          "Melden Sie sich bei claude.ai an und erstellen Sie ein neues Projekt „AI Daily“.",
          "Schreiben Sie das Ausgabeformat in Projektanweisungen: Titel, drei Schlüsselpunkte, eine Tiefe und Handlungsempfehlungen",
          "Laden Sie tägliche Referenzberichte der letzten 7 Tage als Stilbeispiele hoch (optional)",
          "Fügen Sie jeden Tag 5–8 Nachrichtenlinks und Zusammenfassungen in einem Satz in Konversationen ein",
          "Lassen Sie Claude tägliche Markdown-Berichte deduplizieren, sortieren und generieren",
          "Zur Veröffentlichung in ein Notion- oder Feishu-Dokument kopieren"
        ],
        "prompt": "Die heutige AI Industry Daily (Chinesisch) wird auf der Grundlage der folgenden Informationslinks und Zusammenfassungen erstellt:\n\nFormat:\n## {Datum} KI-Neuigkeiten\n### Schlagzeilen\n### Drei Neuigkeiten (jeweils maximal 80 Wörter)\n### Trends, die es wert sind, verfolgt zu werden\n### Die umsetzbaren Ratschläge von heute (aus der Perspektive des Lernenden)\n\nAnforderungen: Doppelungen entfernen, objektiv sein, Quellen kennzeichnen und keine Informationen erfinden, die nicht bereitgestellt werden.",
        "result": "Ein einheitliches, veröffentlichungsbereites Dokument mit täglichen KI-Nachrichten.",
        "tips": "Projektanweisungen werden einmal geschrieben und können wiederverwendet werden; Der Quelllink muss mit dem Originaltext eingefügt werden, um falsche Details im Modell zu vermeiden."
      },
      {
        "id": "2026-07-01-gemini-deep-research",
        "title": "Gemini Deep Research führt Forschungsberichte zu wettbewerbsfähigen Produkten durch",
        "desc": "Nutzen Sie die umfassende Recherchefunktion von Gemini, um automatisch mehrere Quellen zu durchsuchen und wettbewerbsfähige Produktanalysen mit Referenzen zu erstellen, die für Produkt- und Marktstudenten zur schnellen Veröffentlichung geeignet sind.",
        "steps": [
          "Öffnen Sie gemini.google.com und wählen Sie „Deep Research“ aus",
          "Rollenrolle",
          "Warten Sie, bis der Agent automatisch sucht und liest. Während dieser Zeit können Sie Folgendes hinzufügen: „Konzentrieren Sie sich auf den Preisvergleich und den chinesischen Support.“",
          "Nach Abschluss der Recherche nach Google Doc exportieren oder nach Markdown kopieren",
          "Überprüfen Sie wichtige Preis- und Funktionsbeschreibungen manuell und löschen Sie veraltete Referenzen",
          "Organisieren Sie die Schlussfolgerungen in einem Entscheidungsmemo, das vom Team geteilt wird"
        ],
        "prompt": "Bitte führen Sie eine wettbewerbsfähige Produktrecherche für den KI-Programmierassistenten 2026 durch: Cursor, Windsurf, Claude Code, GitHub Copilot.\nVergleichsdimensionen: Preisgestaltung, IDE-Unterstützung, Agentenfunktionen, chinesische Erfahrung und Unternehmenskonformität.\nAusgabe: Zusammenfassung, Vergleichstabelle, Auswahlempfehlungen (einzelner Lernender/kleines Team).\nDabei ist das Datum der Informationsquelle zu vermerken.",
        "result": "Strukturierter Wettbewerbsforschungsbericht mit Zitaten.",
        "tips": "Es ist normal, dass Deep Research 5–15 Minuten dauert; Achten Sie darauf, volatile Informationen wie Preislisten vor der Veröffentlichung manuell zu überprüfen."
      },
      {
        "id": "2026-07-01-n8n-ai-newsletter",
        "title": "n8n-Workflow: RSS-Aggregation → KI-Zusammenfassung → E-Mail-Newsletter",
        "desc": "Dramatiker MCP",
        "steps": [
          "Registrieren Sie n8n Cloud oder lokalen Docker, um n8n zu starten",
          "Erstellen Sie einen neuen Workflow und fügen Sie einen Zeitplan-Trigger hinzu (jeden Tag 8:00 Uhr).",
          "Fügen Sie den RSS-Leseknoten hinzu und füllen Sie OpenAI, Anthropic und den offiziellen Blog-RSS von Google AI aus",
          "Der Merge-Knoten führt Einträge zusammen, der Filter entfernt doppelt verarbeitete GUIDs",
          "OpenAI-Knoten: Generieren Sie chinesische Nachrichten mit 200 Wörtern aus Titel und Zusammenfassung",
          "Der Gmail/SMTP-Knoten sendet die E-Mail „AI Morning News“ an sich selbst",
          "Aktivieren Sie den Workflow, überprüfen Sie die E-Mail-Leistung am nächsten Tag und optimieren Sie die Aufforderungswörter"
        ],
        "prompt": "Sie sind der KI-Branchenredakteur. Geben Sie die heutigen Morgennachrichten basierend auf dem folgenden RSS-Eintrag (JSON) aus:\n1. Wählen Sie die 5 wichtigsten Nachrichten aus (jeweils ≤80 Wörter, mit Originaltextlink)\n2. Ein Trendkommentar zum Thema „Lernende sind es wert, beachtet zu werden“ (≤120 Wörter)\nTon: prägnant, sachlich, chinesisch.",
        "result": "Das zusammenfassende Briefing der KI-Branche wird täglich automatisch in Ihren Posteingang geliefert.",
        "tips": "Verwenden Sie zwei RSS-Feeds, um sie zunächst zu testen und dann zu erweitern. Beachten Sie die API-Gebühren und die Häufigkeitsbeschränkungen für den E-Mail-Versand."
      },
      {
        "id": "2026-06-30-midjourney-style-ref",
        "title": "Referenz im Midjourney-Stil (--sref) für Serienillustrationen",
        "desc": "Verwenden Sie ein Referenzbild, um den visuellen Stil festzulegen, eine Reihe von Blog- oder Kurs-Coverbildern stapelweise zu erstellen und den Markenton konsistent zu halten.",
        "steps": [
          "Bereiten Sie ein Markenreferenzbild vor (oder erstellen Sie zunächst ein zufriedenstellendes Hauptbild)",
          "Laden Sie das Referenzbild auf Midjourney hoch und kopieren Sie den Bildlink",
          "Verwenden Sie --sref {url} --sw 80, um Bilder mit demselben Stil und unterschiedlichen Themen zu generieren",
          "Fügen Sie der Tutorialreihe die Schlüsselwörter „--ar 16:9“ und „Markenhauptfarbe“ hinzu",
          "Nachdem Sie 4 Bilder stapelweise erstellt haben, vergrößern Sie die ausgewählte Version.",
          "Export für Website-Banner oder offizielles Account-Cover"
        ],
        "prompt": "futuristische KI-Lern-Dashboard-Benutzeroberfläche, blaugrüne und dunkle Marineblau-Palette, sanftes Leuchten, minimale Typografie, abstraktes neuronales Netzwerkmotiv --ar 16:9 --sref {Ihr Referenzbild-Link} --sw 75 --v 6",
        "result": "Eine Reihe von 16:9-Bildern im Technologiestil mit einem einheitlichen visuellen Stil.",
        "tips": "--sw Kontrollstilgewicht: 60–100 Häufig verwendet; Ein zu hoher Wert führt dazu, dass das Bild fast die Komposition des Referenzbilds kopiert."
      },
      {
        "id": "2026-06-30-dify-knowledge-bot",
        "title": "Der Dify-Wissensdatenbank-Q&A-Roboter greift auf Studiennotizen zu",
        "desc": "Importieren Sie Markdown-Studiennotizen in die Dify-Wissensdatenbank und veröffentlichen Sie einen exklusiven Lehrassistenten-Bot, der antworten kann: „Wie verstehen Sie einen bestimmten Begriff?“",
        "steps": [
          "Melden Sie sich bei Dify an und erstellen Sie eine „Knowledge Base“-Anwendung",
          "Laden Sie Markdown-Notizen hoch oder synchronisieren Sie Notion-Exportdateien",
          "Legen Sie die Segmentierungsstrategie fest: Segmentieren Sie nach Titel, reservieren Sie 500–800 Blöcke",
          "Erstellen Sie eine Konversationsanwendung, verknüpfen Sie die Wissensdatenbank und aktivieren Sie die Referenzanzeige",
          "Wortbeschränkung für Systemaufforderungen: Antworten Sie nur basierend auf der Wissensdatenbank. Wenn Sie es nicht wissen, sagen Sie einfach „Weiß nicht“.",
          "Veröffentlichen Sie eine Web-App oder betten Sie einen Iframe-Test auf einer Lernseite ein"
        ],
        "prompt": "Sie sind ein KI-Lernassistent. Die Antwort basiert ausschließlich auf dem Inhalt der Wissensdatenbank und zitiert Auszüge aus dem Originaltext.\nWenn die Wissensdatenbank keinen relevanten Inhalt enthält, sagen Sie deutlich „nicht in den Notizen behandelt“ und schlagen Sie vor, welches Kapitel Sie konsultieren sollten.\nAntwortstruktur: ein Satz zum Abschluss + Punkterklärung + Schlüsselwörter zur weiteren Lektüre.",
        "result": "Ein exklusiver Q&A-Bot, der die Quelle von Notizen angeben kann.",
        "tips": "Denken Sie daran, nach der Aktualisierung Ihrer Notizen eine Neuindizierung in Dify durchzuführen. Die Betonung „keine Erfindung“ in der Aufforderung kann Halluzinationen reduzieren."
      },
      {
        "id": "2026-06-29-chatgpt-custom-gpt-tutorial",
        "title": "Führen Sie in 10 Minuten eine „prompte Wortüberprüfung“ des benutzerdefinierten GPT durch",
        "desc": "Erstellen Sie ein spezielles GPT für Ihr Team: Überprüfen Sie automatisch die Qualität von Aufforderungswörtern gemäß der RTFC-Struktur und geben Sie Vorschläge zum Umschreiben, die für Lern- und Inhaltsteams geeignet sind.",
        "steps": [
          "Umsatz: Persönliches Abonnement + Teams-Zweiradantrieb, Teams wächst schneller",
          "Name: Prompt Review Coach; Beschreibung Geben Sie das Aufforderungswort ein, um Bewertungskommentare zu erhalten",
          "Anweisungen zum Schreiben von Überprüfungsdimensionen: Rolle, Aufgabe, Format, Einschränkungen, Testbarkeit",
          "Laden Sie 2–3 Beispiele für gute/schlechte Aufforderungswörter als Referenz hoch",
          "Schalten Sie das Surfen im Internet aus und verlassen Sie sich nur auf Anweisungen und Beispiele",
          "Testen Sie ein paar Aufforderungswörter und veröffentlichen Sie den Workspace-Link, damit die Schüler ihn verwenden können"
        ],
        "prompt": "Sie sind ein Prompt-Word-Projektprüfer. Der Benutzer wird eine Aufforderung einreichen, bitte RTFC (Role-Task-Format-Constraints) mit 1–5 bewerten und Folgendes angeben:\n1. Vorteile\n2. Fragenliste\n3. Umgeschriebene Version des Aufforderungsworts\n4. Ein Testeingang, mit dem die Wirkung überprüft werden kann\nTon: Coaching, Chinesisch, prägnant.",
        "result": "Ein gemeinsam nutzbares benutzerdefiniertes GPT, speziell zum Überprüfen und Umschreiben von Aufforderungswörtern.",
        "tips": "Die Qualität der Beispiele bestimmt die Obergrenze des GPT-Verhaltens; Gute Fälle in der Prompt-Beispielbibliothek dieser Site können als Referenz exportiert werden."
      },
      {
        "id": "2026-06-29-openclaw-daily-digest",
        "title": "Geplante OpenClaw-Aufgabe: Hacker-News-KI-Beiträge abrufen und veröffentlichen",
        "desc": "Verwenden Sie OpenClaw, um Cron-Aufgaben zu konfigurieren, KI-bezogene Hot-Posts auf Hacker News zu filtern und chinesische Zusammenfassungen zu generieren, um sie an Telegram zu senden.",
        "steps": [
          "Installieren Sie OpenClaw CLI und melden Sie sich an, um die Kanalautorisierung abzuschließen",
          "Erstellen Sie einen neuen Cron-Job: wird alle 6 Stunden ausgeführt",
          "Aufgabenskript: Holen Sie sich die Top 10 AI-Keyword-Beiträge in der HN Algolia API",
          "Rufen Sie das Modell auf, um eine chinesische Titelübersetzung + eine Zusammenfassung mit zwei Sätzen zu generieren",
          "Per Telegram Bot zum persönlichen Kanal pushen",
          "Führen Sie einen manuellen Test durch, um Format und Häufigkeit zu bestätigen"
        ],
        "prompt": "Wählen Sie aus der folgenden Liste von Hacker-News-Beiträgen die 5 Elemente aus, die für AI/LLM/Agent am relevantesten sind, und geben Sie das chinesische Briefing aus:\n- Chinesischer Titel\n- Zusammenfassung in zwei Sätzen\n- Diskussionshighlights (Zusammenfassung der Kommentare und Ansichten)\n- Ursprünglicher Link\nErfinden Sie keine Inhalte, die im Beitrag nicht vorhanden sind.",
        "result": "Der Telegram-Kanal erhält regelmäßig ausgewählte AI-Hot-Posts auf Chinesisch.",
        "tips": "Führen Sie zuerst einen Testlauf mit niedriger Frequenz (einmal täglich) durch und verschlüsseln Sie ihn dann, nachdem Sie bestätigt haben, dass er stabil ist. Beachten Sie die Häufigkeitsbegrenzung der HN-API-Anfragen."
      },
      {
        "id": "2026-06-28-windsurf-refactor",
        "title": "Windsurf refaktoriert Legacy-Funktionen mit einem Klick in den strikten TypeScript-Modus",
        "desc": "Wählen Sie ältere JS-Funktionen aus und lassen Sie Cascade die Typvervollständigung abschließen, Nebenwirkungen aufteilen und Vitest-Tests generieren.",
        "steps": [
          "Öffnen Sie das Projekt, das Legacy.js enthält, mit Windsurf",
          "Wählen Sie die Zielfunktion aus und öffnen Sie den Cascade-Chat",
          "Anforderungen: In TS konvertieren, reine Funktionen extrahieren und JSDoc ausfüllen",
          "Lassen Sie den Agent .test.ts mit demselben Namen erstellen und npm test ausführen",
          "Wenn der Test fehlschlägt, fügen Sie den Fehlerbericht wieder in die Dialogiteration ein",
          "Verwenden Sie git diff, um Typzusicherungen zu überprüfen, bevor Sie eine PR einreichen"
        ],
        "prompt": "Bitte überarbeiten Sie die ausgewählten JavaScript-Funktionen in den strikten TypeScript-Modus:\n1. Extrahieren Sie die reine Funktion und platzieren Sie die Nebenwirkungen in der äußeren Schicht\n2. Vollständige Eingabe- und Ausgabetypen, verbieten Sie alle\n3. Fügen Sie den Vitest-Einzeltestabdeckungsgrenzfall hinzu\n4. Behalten Sie die externe API unverändert bei\nGeben Sie zuerst Plan ein, bestätigen Sie und ändern Sie dann den Code.",
        "result": "Erhalten Sie typsichere, getestete Refactoring-Versionen und verstehen Sie den KI-gestützten Refactoring-Prozess.",
        "tips": "Benachrichtigungsbestätigung schreiben"
      },
      {
        "id": "2026-06-27-copilot-pr-review",
        "title": "Verwenden Sie Copilot, um eine Checkliste für die Überprüfung des PR-Codes zu erstellen",
        "desc": "Kommentieren Sie @copilot auf GitHub-PRs, um Sicherheits-, Leistungs- und Lesbarkeitsbewertungen zu erstellen.",
        "steps": [
          "Öffnen Sie eine Pull-Anfrage mit ausstehender Überprüfung",
          "Geben Sie @copilot /review in den Kommentar ein, um die Überprüfung auszulösen",
          "Lesen Sie generierte Kommentare zur Schweregradgruppierung",
          "Antworten Sie mit „falsch positiv: Grund“ auf falsch positive Elemente",
          "Lassen Sie echte Probleme vom Autor beheben oder schlagen Sie sie direkt vor.",
          "Bestätigen Sie, dass CI- und Überprüfungselemente vor dem Zusammenführen gelöscht werden"
        ],
        "prompt": "Bitte überprüfen Sie diese PR, Ausgabe nach Schweregrad:\n- 🔴 Sicherheits-/Datenverlustrisiko\n- 🟡Leistung und Wartbarkeit\n- 🟢 Stil und Benennung\nJeder Datei sind eine Zeilennummer und Reparaturvorschläge beigefügt.",
        "result": "Strukturierte PR-Rezensionskommentare zur Reduzierung von Fehlern.",
        "tips": "Das Veröffentlichen der Team-Coding-Spezifikationen im Repository copilot-instructions.md wird besser funktionieren."
      },
      {
        "id": "2026-06-26-replit-rapid-api",
        "title": "Replit Agent 30 Minuten zum Erstellen der To-Do-API + Swagger",
        "desc": "Generieren Sie Express-CRUD-APIs in natürlicher Sprache, automatisch begleitet von Swagger-UI-Dokumentationsseiten.",
        "steps": [
          "Erstellen Sie eine neue Replit Node.js-Vorlage",
          "Öffnen Sie den Agent und beschreiben Sie die Todo-API-Anforderungen",
          "Warten auf die Generierung von index.js, Routen und swagger.json",
          "Klicken Sie auf Ausführen und besuchen Sie /docs, um Swagger anzuzeigen",
          "Testen Sie CRUD mit dem integrierten HTTP-Client",
          "Bereitstellen für die öffentliche URL-Freigabe von Replit"
        ],
        "prompt": "Bitte verwenden Sie Express, um eine Todo-REST-API zu erstellen:\n- GET/POST/DELETE /todos\n- Speichern Sie es einfach im Speicher\n- Integrieren Sie swagger-ui in /docs\n- Enthält Eingabevalidierung und Fehlerbehandlung\nGeben Sie eine Bedienungsanleitung.",
        "result": "Online zugängliche API und interaktive Dokumentation.",
        "tips": "Fügen Sie einfach einen Dialog hinzu, um den Speicher in Replit Database zu ändern, bevor Sie online gehen."
      },
      {
        "id": "2026-06-25-v0-landing-section",
        "title": "v0 generiert den React-Landingpage-Hero-Block",
        "desc": "Beschreiben Sie die Markenfarbe und kopieren Sie sie. Lassen Sie v0 shadcn/ui Hero ausgeben, das in das Next.js-Projekt kopiert werden kann.",
        "steps": [
          "Öffnen Sie v0.dev und erstellen Sie einen neuen Build",
          "Geben Sie Ihre Markenfarben, Ihren Titel, Ihren Untertext und Ihren CTA ein",
          "Wählen Sie den Stil „shadcn + Tailwind“.",
          "Responsive Vorschau nach der Generierung",
          "Klicken Sie auf Code, um die Komponente in Next.js app/ zu kopieren.",
          "Lokale NPM-Entwicklerüberprüfung ausführen"
        ],
        "prompt": "Generieren Sie eine KI-Lernplattform Hero:\n- Dunkler Hintergrund mit Cyan-Akzentfarbe\n- Titel: Der beste Weg zur Beherrschung der KI\n- Doppelter CTA: Mit dem Lernen beginnen / Tools durchsuchen\n- shadcn/ui + Tailwind, mobilfreundlich",
        "result": "Zum Einfügen bereite React Hero-Komponenten.",
        "tips": "Passen Sie v0 nach der Generierung an, um „Schatten zu reduzieren und die Schriftgröße des Titels zu erhöhen“, um eine bessere Verfeinerung zu erreichen."
      },
      {
        "id": "2026-06-24-claude-code-test",
        "title": "Claude Code führt Integrationstests für bestehende Module durch",
        "desc": "Verwenden Sie Claude Code im Terminal, um Abdeckungslücken zu analysieren, Integrationstests zu generieren und CI auszuführen.",
        "steps": [
          "Starten Sie Claude im Projektstammverzeichnis",
          "Schreiben Sie vor dem Meeting eine Tagesordnung, veröffentlichen Sie wichtige Punkte während des Meetings und verwenden Sie Notion AI, um Protokolle und Aufgaben zu erstellen.",
          "Verzeichnis angeben: Integrationstest für Authentifizierungsmodul hinzufügen",
          "Lassen Sie Claude tests/auth.int.test.ts erstellen",
          "Führen Sie Tests durch und beheben Sie unzuverlässige Anwendungsfälle",
          "Senden Sie CI und beobachten Sie grünes Licht"
        ],
        "prompt": "Analysieren Sie den Coverage/lcov-Bericht und fügen Sie Integrationstests für src/auth/ hinzu:\n- Erfolgreiche/fehlgeschlagene/gesperrte Anmeldung außer Kraft setzen\n- Verwenden Sie Supertest, um die HTTP-Ebene anzupassen\n- simulierter externer Mail-Dienst\nÄndern Sie die Logik des Produktionscodes nicht, es sei denn, ein Fehler wird entdeckt.",
        "result": "Integrierte Testsuiten mit erhöhter Abdeckung und stabilem CI.",
        "tips": "Scope Creep kann vermieden werden, indem Sie ausdrücklich sagen: „Fügen Sie einfach Tests hinzu und ändern Sie nicht die Implementierung.“"
      },
      {
        "id": "2026-06-23-cursor-mcp-github",
        "title": "Cursor stellt eine Verbindung zu GitHub MCP her: Überprüfen Sie Probleme und öffnen Sie PR in der Konversation",
        "desc": "Konfigurieren Sie den offiziellen GitHub MCP-Server, fragen Sie die Warehouse-Probleme im Agent-Dialog ab und erstellen Sie einen Reparaturzweig.",
        "steps": [
          "Installieren Sie die neueste Version von Cursor und öffnen Sie die MCP-Einstellungen",
          "Fügen Sie GitHub MCP Server und PAT hinzu",
          "Aktivieren Sie Repo-Lese-/Schreibberechtigungen in mcp.json",
          "Dialog: Offene Probleme mit label=bug auflisten",
          "Wählen Sie einen aus, damit der Agent einen Reparaturzweig erstellen kann",
          "Nachdem Sie den Unterschied überprüft haben, drücken Sie und öffnen Sie eine PR"
        ],
        "prompt": "Mit GitHub MCP:\n1. Listen Sie die offenen Bug-Probleme Top 5 dieses Repositorys auf\n2. Wählen Sie #42, um die Grundursache zu analysieren\n3. Erstellen Sie den Zweig „fix/42“ und senden Sie den minimalen Fix\n4. Öffnen Sie eine PR mit Reproduktionsschritten und Testanweisungen.",
        "result": "Schließen Sie den geschlossenen Regelkreis Issue→PR ab, ohne die IDE zu verlassen.",
        "tips": "PAT-Berechtigungen werden minimiert und es werden nur feinkörnige Token verwendet."
      },
      {
        "id": "2026-06-22-bolt-new-pwa",
        "title": "Bolt.new generiert eine Offline-PWA-Seite zum Auswendiglernen von Wörtern",
        "desc": "Generieren Sie eine installierbare PWA, einschließlich lokalem Vokabular und täglichen Wiederholungserinnerungen.",
        "steps": [
          "Riegel öffnen.neu",
          "Beschreiben Sie die Anforderungen an PWA-Wortkarten und die Farbanpassung",
          "Warten auf die Generierung des React/Vite-Projekts",
          "Sehen Sie sich den Vorgang „Zum Startbildschirm hinzufügen“ in der Vorschau an",
          "Laden Sie es herunter oder synchronisieren Sie es mit GitHub",
          "Echte Geräteinstallation und -tests offline verfügbar"
        ],
        "prompt": "Erstellen Sie eine PWA zum Auswendiglernen von Wörtern:\n- 20 Wörter pro Tag, Karten umdrehen\n- Lokaler localStorage zeichnet den Fortschritt auf\n- Installierbar auf dem Startbildschirm, offline verfügbar\n- Einfache dunkle Benutzeroberfläche",
        "result": "Installierbare Offline-Wortspeicher-PWA.",
        "tips": "Lassen Sie Bolt „die Service-Worker-Cache-Strategie ergänzen“, um das Offline-Erlebnis zu verbessern."
      },
      {
        "id": "2026-06-21-continue-oss-model",
        "title": "Konfigurieren Sie weiterhin das lokale Ollama-Modell zur Vervollständigung des Datenschutzes",
        "desc": "Wenn das lokale Qwen3-Modell mit dem VS Code Continue-Plug-in verbunden ist, kann der Code nicht in die Cloud hochgeladen werden.",
        "steps": [
          "Installieren Sie Ollama und ziehen Sie das qwen3-Modell",
          "Installieren Sie die Erweiterung „Continue VS Code“.",
          "config.json Ollama-Anbieter hinzufügen",
          "Stellen Sie die Tab-Vervollständigung auf dasselbe Modell wie den Chat ein",
          "Beim Schreiben von Testdateien kommt es zu Verzögerungen bei der Fertigstellung",
          "Ändern Sie die Arbeitsbereichsregeln, um Dateitypen einzuschränken"
        ],
        "prompt": "Helfen Sie mir, die Fortsetzungskonfiguration zu schreiben:\n- Chat und automatische Vervollständigung mit ollama qwen3\n- Vervollständigung nur für *.ts aktivieren\n– Unternehmensprojekten ist das Hochladen von Code in die Cloud untersagt\nGibt den vollständigen JSON an.",
        "result": "Lokale modellgesteuerte Codevervollständigung und Chat.",
        "tips": "Bei hoher Latenz wird zur Vervollständigung ein kleineres quantisiertes Modell verwendet."
      },
      {
        "id": "2026-06-20-rtfc-interview",
        "title": "RTFC-Vorlage zum Schreiben von Aufforderungswörtern für „simulierte technische Interviews“.",
        "desc": "Verwenden Sie Role-Task-Format-Constraints, um wiederverwendbare Back-End-Interviewer-Eingabeaufforderungen zu entwerfen.",
        "steps": [
          "Erstellen Sie ein neues Gespräch und notieren Sie zunächst „Rolle: Leitender Interviewer“.",
          "Aufgabe: Simulieren Sie ein 45-minütiges Back-End-Interview",
          "Format: Eine Frage und ein Kommentar in jeder Runde, abschließende Zusammenfassung",
          "Einschränkungen: Es ist verboten, vollständige Antworten direkt zu geben",
          "Fügen Sie die Vorlage ein und testen Sie sie rund",
          "Speichern Sie Notizen für die tägliche Praxis"
        ],
        "prompt": "Rolle: Senior Go Backend-Interviewer\nAufgabe: Simulieren Sie ein 45-minütiges Interview, um Parallelität und Systemdesign zu untersuchen\nFormat: jeweils eine Frage→Warten auf Antwort→kurzer Kommentar→nächste Frage; Beenden Sie die Ausgabe des Punkteblatts\nEinschränkungen: Geben Sie Standardantworten nicht direkt an; Stellen Sie Fragen, die nicht das sind, was ihnen gestellt wird.",
        "result": "Scheininterviewgespräche, die immer wieder verwendet werden können.",
        "tips": "Das Hinzufügen einer „dynamischen Anpassung von Fragen basierend auf der Schwierigkeit meiner Antwort“ kommt der Realität näher."
      },
      {
        "id": "2026-06-19-claude-xml-prompt",
        "title": "Strukturieren Sie lange Eingabeaufforderungswörter mit XML-Tags",
        "desc": "Teilen Sie den Hintergrund, die Daten und die Regeln in <context><data><rules> auf, um die Stabilität langer Aufgaben zu verbessern.",
        "steps": [
          "Bereiten Sie einen Kundendienst-Chat-Datensatz vor, der analysiert werden muss",
          "Abschnittsweise mithilfe von XML-Tags in Claude einfügen",
          "Geben Sie das Ausgabe-JSON-Schema in <rules> an",
          "Führen Sie JSON aus und überprüfen Sie, ob es analysierbar ist",
          "Palette",
          "Eine einzige API, die Konversationen, Tools, Codeausführung und -abruf abdeckt"
        ],
        "prompt": "<context>Sie sind ein Kundendienst-Qualitätsprüfer</context>\n<Daten>\n{Konversation einfügen}\n</data>\n<Regeln>\n1. Bewerten Sie 1-5 nur basierend auf Daten\n2. JSON ausgeben: {ton, auflösung, eskalieren}\n3. Geben Sie null ein, wenn Sie sich über das Feld nicht sicher sind.\n</rules>",
        "result": "Eine stabile Ausgabe kann die Ergebnisse der JSON-Qualitätsprüfung analysieren.",
        "tips": "Claude reagiert empfindlicher auf XML-Grenzen als Markdown-Header."
      },
      {
        "id": "2026-06-18-gemini-few-shot",
        "title": "Gemini-Fow-Shot-Klassifizierung: E-Mail-Absichtserkennung",
        "desc": "Geben Sie 6 Beispiel-E-Mails und Labels an und lassen Sie das Modell die Absicht neuer E-Mails klassifizieren.",
        "steps": [
          "Sammeln Sie 6 Beispiel-E-Mails mit Labels",
          "Nach Beispiel/zu klassifizierendem Format geordnet",
          "Öffnen Sie Gemini und fügen Sie die vollständige Eingabeaufforderung ein",
          "Geben Sie Testnummer 7 ein",
          "Wenn ein Fehler vorliegt, fügen Sie ein Grenzbeispiel hinzu",
          "Als Teamklassifizierungsvorlage exportieren"
        ],
        "prompt": "Beschriften Sie E-Mails gemäß dem Beispiel: support_billing/support_technical/sales/spam\n\nBeispiel 1: ...\nSchlagwort: support_billing\n...\nZu klassifizieren:\n{neue E-Mail}\nEs wird nur der Tag-Name ausgegeben.",
        "result": "Hochpräzise Eingabeaufforderungswörter zur Klassifizierung von E-Mail-Absichten.",
        "tips": "Beispiele sollten verwirrende Grenzen wie Abrechnung oder Technik abdecken."
      },
      {
        "id": "2026-06-17-perplexity-system",
        "title": "Ratlosigkeitsforschungstipp: Durchsetzung von Zeitbereichen und Quellentypen",
        "desc": "Einschränkungen beim Schreiben von Forschungsaufforderungen 2025–2026 Quellen, Priorität haben offizielle Dokumente und Papiere.",
        "steps": [
          "Öffnen Sie einen neuen Perplexity Pro-Thread",
          "Geben Sie in der Eingabeaufforderung das Zeitfenster und die Quellenpriorität an",
          "Fordern Sie eine Leistungsvergleichstabelle + ein Angebot an",
          "Überprüfen Sie, ob die Fußnote aus einer offiziellen Quelle stammt",
          "Fragen Sie nach unsicheren Artikeln",
          "PDF-Archiv exportieren"
        ],
        "prompt": "Wortbeschränkung für Systemaufforderungen: Antworten Sie nur basierend auf der Wissensdatenbank. Wenn Sie es nicht wissen, sagen Sie einfach „Weiß nicht“.",
        "result": "Nachverfolgbares Umfrageformular mit zeitlichen Einschränkungen.",
        "tips": "„Sekundäre Quellen vor 2024 ausschließen“ hinzugefügt, wenn festgestellt wird, dass alte Nachrichten gemischt sind."
      },
      {
        "id": "2026-06-16-chatgpt-chain-of-density",
        "title": "Chain-of-Density Progressive Abstract Langer Artikel",
        "desc": "Lassen Sie das Modell mit einer kurzen Zusammenfassung beginnen und jedes Mal fünf Runden lang iterieren, um die Entitätsdichte zu erhöhen, ohne länger zu werden.",
        "steps": [
          "Fügen Sie einen Artikel mit 3000 Wörtern ein",
          "Runde 1 Zusammenfassung mit 80 Wörtern erforderlich",
          "Anleitung: Fügen Sie in jeder weiteren Runde Details hinzu, aber lassen Sie die Wortanzahl unverändert",
          "Zeichnen Sie 5 Runden zusammenfassender Vergleiche auf",
          "Wählen Sie die Version, die am besten zu Ihrem Poster passt",
          "Zusammenfassung, wann CoD verwendet werden sollte"
        ],
        "prompt": "Erstellen Sie eine Chain-of-Density-Zusammenfassung der folgenden Punkte:\n- Runde 1: 80 Wörter\n- Runden 2–5: Behalten Sie 80 Wörter bei, erhöhen Sie jedoch die Entitätsdichte\nMarkieren Sie in jeder Runde die Liste „Neue Entität“.\n\n{Artikel}",
        "result": "Zusammenfassungen fester Länge mit zunehmender Informationsdichte.",
        "tips": "Perfekt für Podcast-Shownotizen, um zu vermeiden, dass sie zu lang werden."
      },
      {
        "id": "2026-06-15-claude-constitutional",
        "title": "Verfassungstipp: Geben Sie Ihren Schreibassistenten harte Zügel",
        "desc": "Verwenden Sie nummerierte Grundsätze, um den Ton, verbotene Wörter und Faktenquellen einzuschränken.",
        "steps": [
          "Listen Sie 5 Schreibprinzipien auf",
          "Schreiben Sie Claude-Projektanweisungen",
          "Laden Sie einen Entwurf hoch, der überarbeitet werden muss",
          "Erfordert eine Selbstprüfung der Verfassung Artikel für Artikel und deren anschließende Ausgabe",
          "Prüfen Sie, ob eine verbotene Übertreibung vorliegt",
          "Speichern Sie die Anweisungen zur Wiederverwendung durch Ihr Team"
        ],
        "prompt": "Die Verfassung schreiben:\n1. Verwenden Sie keine übertriebenen Wörter wie „Subversion“ und „Schock“\n2. Die Daten müssen mit „basierend auf den bereitgestellten Materialien“ gekennzeichnet sein.\n3. Absatz ≤120 Wörter\n4. Ausgabestruktur: Schlussfolgerung → Argument → Aktion\n5. Schreiben Sie „zur Überprüfung“, wenn Sie unsicher sind.\nBitte überarbeiten Sie Folgendes und fügen Sie ein verfassungsrechtliches Selbstprüfungsformular bei.",
        "result": "Ein ausgefeilter Entwurf mit zurückhaltendem Ton und einheitlicher Struktur.",
        "tips": "Die Anzahl der Artikel in der Verfassung sollte auf 5-8 begrenzt werden. Zu viele Artikel verringern die Compliance-Rate."
      },
      {
        "id": "2026-06-14-prompt-ab-test",
        "title": "A/B-Testen Sie zwei Aufforderungswörter und bewerten Sie sie quantitativ",
        "desc": "Führen Sie die A/B-Version der Eingabeaufforderungen mit demselben Testsatz aus und verwenden Sie die Rubrik, damit das Modell als Richter für die Bewertung fungiert.",
        "steps": [
          "Bereiten Sie 10 Testeingaben vor",
          "Schreiben Sie Eingabeaufforderung A und Eingabeaufforderung B",
          "Batch-Lauf zum Erfassen der Ausgabe",
          "Die semantische Suche in neuronalen Netzwerken eignet sich gut zum Auffinden technischer Artikel, Papiere und Unternehmensinformationen und eignet sich gut für Forschungsszenarien.",
          "Tabellierter Vergleichsmittelwert",
          "Die Gewinnerversion ist online"
        ],
        "prompt": "Sie sind der Richter für die schnelle Wortbewertung. Bewerten Sie zwei Ausgaben derselben Eingabe auf einer Skala von 1 bis 5: Genauigkeit, Vollständigkeit, Format, Prägnanz, Sicherheit.\nEingabe: {x}\nAusgabe A: {a}\nAusgabeB: {b}\nGeben Sie JSON aus und empfehlen Sie einen Gewinner.",
        "result": "Datenbasierte Schlussfolgerung zur schnellen Wortauswahl.",
        "tips": "Der Testsatz sollte begrenzte und böswillige Eingaben enthalten."
      },
      {
        "id": "2026-06-13-meta-prompt-refine",
        "title": "Meta-Eingabeaufforderung: Lassen Sie sich von der KI beim Ändern des Eingabeaufforderungsworts unterstützen",
        "desc": "Geben Sie die groben Eingabeaufforderungen an die Meta-Eingabeaufforderung „Prompt Word Coach“ weiter, um RTFC automatisch auszufüllen.",
        "steps": [
          "Schreiben Sie eine einfache Erinnerung: „Hilf mir, meinen Wochenbericht zu schreiben“",
          "Meta-Prompt-Vorlage anwenden",
          "Erhalten Sie angepasste Versionen und Testfälle",
          "Perfekt für Podcast-Shownotizen, um zu vermeiden, dass sie zu lang werden.",
          "Runde iterieren",
          "Im Prompt-Lexikon speichern"
        ],
        "prompt": "Sie sind der Prompt-Word-Coach. Der Benutzer gibt eine einfache Eingabeaufforderung aus. Bitte geben Sie Folgendes aus:\n1. Problemdiagnose\n2. RTFC komplett neu geschriebene Version\n3. Zwei Testeingänge und ideale Ausgangspunkte\nChinesisch, prägnant.",
        "result": "Holen Sie sich die professionelle RTFC-Version von Humble Tips.",
        "tips": "Die Meta-Eingabeaufforderung ändert jeweils nur ein Element, um eine Verschlechterung der Chargenqualität zu vermeiden."
      },
      {
        "id": "2026-06-12-midjourney-character",
        "title": "Midjourney --cref erstellt konsistente Illustrationen von Seriencharakteren",
        "desc": "Lesen Sie generierte Kommentare zur Schweregradgruppierung",
        "steps": [
          "Erstellen Sie zunächst ein zufriedenstellendes Charakterporträt",
          "Bildlink kopieren als --cref",
          "Schreiben Sie verschiedene Szenenaufforderungen, um --cw 80 beizubehalten",
          "Stapelbildauswahl mit höchster Konsistenz",
          "Gehobenes Final Four",
          "Exportieren Sie PNG zur Verwendung in Kursen"
        ],
        "prompt": "Das gleiche Maskottchen „Little Blue Robot“ lernt in der Bibliothek, flache Illustration, blaues und weißes Farbschema --cref {url} --cw 85 --ar 1:1 --v 6",
        "result": "Eine Sammlung von Charakterillustrationen, die in allen Szenen konsistent sind.",
        "tips": "--cw Wenn es zu hoch ist, wird die Pose kopiert und die ersetzbaren Aktionen werden reduziert."
      },
      {
        "id": "2026-06-11-runway-motion-brush",
        "title": "Der Runway Gen-3 Motion Brush sorgt dafür, dass sich statische Poster bewegen",
        "desc": "Wenden Sie Bewegungsvektoren auf die Wolken und Lichtpunkte des Posters an und exportieren Sie ein 5-Sekunden-Loop-Video.",
        "steps": [
          "Laden Sie das AI-Poster im JPG-Format hoch",
          "Wählen Sie Gen-3 Alpha Turbo",
          "Der Bewegungspinsel malt Wolkenbereiche",
          "Stellen Sie eine langsame horizontale Drift ein",
          "Vorschau und Feinabstimmung der Intensität",
          "Exportieren Sie 1080p MP4"
        ],
        "prompt": "(Hauptsächlich visuelle Bedienung) Der Bewegungspinsel malt nur Wolken und Lichtpunkte, Intensität 3/10, Kamera fixiert.",
        "result": "Kann für Site-Hero-Hintergrundschleifenvideos verwendet werden.",
        "tips": "Halten Sie den Bewegungsbereich so klein wie möglich, um eine Verzerrung des gesamten Bildes zu vermeiden."
      },
      {
        "id": "2026-06-10-kling-image2video",
        "title": "Keling Tusheng Video: Produktbilder werden in 5-Sekunden-Anzeigevideos umgewandelt",
        "desc": "Laden Sie das E-Commerce-Produktbild hoch, veranlassen Sie eine leichte Drehung und einen Lichthof und erhalten Sie 5 Sekunden Werbematerial.",
        "steps": [
          "Bereiten Sie ein transparentes Unterprodukt im PNG-Format vor",
          "Laden Sie das Ke Ling Tu Sheng-Video hoch",
          "Tipp: langsame Rotation + weiches Licht",
          "Wählen Sie 5s 720p",
          "Generieren Sie 2–3 Versionen des Besten",
          "Zur kurzen Videoübermittlung herunterladen"
        ],
        "prompt": "Das Produkt bleibt zentriert, dreht sich langsam um 15 Grad, weiches Studiolicht, Hintergrund hellgrauer Farbverlauf, kein Text.",
        "result": "5 Sekunden langes Videomaterial zur Produktdemonstration.",
        "tips": "Komplexe Hintergrundbilder werden zuerst ausgeschnitten und dann generiert, damit der Hauptkörper stabiler ist."
      },
      {
        "id": "2026-06-09-figma-ai-prototype",
        "title": "Figma AI generiert aus Texten anklickbare Prototypen",
        "desc": "Produktbild auf weißem Hintergrund (positive und negative Aufforderungswörter)",
        "steps": [
          "Figma erstellt eine neue KI-Prototypdatei",
          "Geben Sie eine dreiteilige Bildschirmbeschreibung und einen Tastenablauf ein",
          "Überprüfen Sie das Autolayout nach dem Erstellen",
          "Passen Sie Kopie und Abstand manuell an",
          "Teilen Sie den Link, um mit Kollegen zu kommentieren",
          "Entwicklungsbereite Anmerkung exportieren"
        ],
        "prompt": "3-Bildschirm-Onboarding generieren: Willkommen → Ziel auswählen → Empfohlene Kurse; die Hauptschaltfläche „Weiter“ unterstützt die Rückkehr; Das mobile Endgerät ist 390 breit.",
        "result": "Anklickbarer Link zum Low-Fidelity-Prototyp.",
        "tips": "Nach der Generierung ist die einheitliche Schriftart das Team Design System."
      },
      {
        "id": "2026-06-08-comfyui-workflow",
        "title": "ComfyUI-Workflow: SD3 + ControlNet-genaues Poster",
        "desc": "Erstellen Sie einen ControlNet-Workflow zum Zeichnen von Strichzeichnungen, um Kursplakate in Stapeln zu erstellen.",
        "steps": [
          "Installieren Sie ComfyUI- und SD3-Knoten",
          "Importieren Sie OpenPose/Lineart ControlNet",
          "Laden Sie Strichzeichnungen oder Layoutskizzen hoch",
          "Verbinden Sie KSampler mit dem Verstärkungsknoten",
          "Stapelwarteschlange 4 Blatt",
          "Nachdem Sie das Bild ausgewählt haben, verwenden Sie FaceDetailer, um Ihr Gesicht zuzuschneiden."
        ],
        "prompt": "(Workflow-Vorgang) Erstellen Sie ein Kursplakat im Technologiestil basierend auf Strichzeichnungen, mit einem leeren Textbereich in den oberen 30 % und den Hauptfarben Blau und Schwarz.",
        "result": "Stapelplakate mit kontrollierbarer Zusammensetzung.",
        "tips": "Es wird dennoch empfohlen, den Text später in Figma zu setzen, anstatt sich beim Satz ausschließlich auf das Modell zu verlassen."
      },
      {
        "id": "2026-06-07-chatgpt-image-edit",
        "title": "ChatGPT-Bildbearbeitung: Ersetzen Sie den Hintergrund durch eine einfarbige Studioaufnahme",
        "desc": "Laden Sie ein Porträt- oder Produktbild hoch, und der Gesprächsstil erfordert eine Änderung des Hintergrunds und eine leichte Anpassung der Farbe.",
        "steps": [
          "ChatGPT lädt Produktbilder hoch",
          "Erfordert „reinweißer Hintergrund + leichter Schatten“",
          "Wenn Sie nicht zufrieden sind, kreisen Sie den Bereich ein und ändern Sie ihn.",
          "Laden Sie HD PNG herunter",
          "Vergleichen Sie die Farbgenauigkeit des Originalbildes",
          "Wird für das E-Commerce-Hauptbild verwendet"
        ],
        "prompt": "Benutzer: Achten Sie auf Bildungsrabatte und Teamplatzverwaltung. Für KI-Lernende können Sie damit Ihre persönliche Werkzeugkarte und Fallstrickliste aktualisieren und innerhalb einer Woche eine kleine praktische Operation oder einen internen Austausch durchführen.",
        "result": "Hauptbild mit weißem Hintergrund für E-Commerce verfügbar.",
        "tips": "Mehrere Runden der Kreisauswahliteration für komplexe Haarkanten."
      },
      {
        "id": "2026-06-06-capcut-ai-caption",
        "title": "CapCut AI-Untertitel und Kapiteltitel werden automatisch generiert",
        "desc": "Importieren Sie Tutorial-Bildschirmaufzeichnungen, Untertitel und erstellen Sie Kapitelkarten mit einem Klick.",
        "steps": [
          "Importieren Sie eine 10-minütige Tutorial-Bildschirmaufzeichnung",
          "Erkennen Sie chinesische automatische Untertitel",
          "Korrekturlesen der Terminologie",
          "KI-Kapitel sind nach Pausen unterteilt",
          "Wenden Sie den Untertitelstil Ihrer Marke an",
          "1080p-Upload exportieren"
        ],
        "prompt": "(Hauptsächlich für Werkzeugoperationen) Ersetzen Sie Begriffe wie „API“ und „RAG“ nach den Untertiteln: {Glossar}",
        "result": "Tutorial-Videos mit Kapitelmarkierungen.",
        "tips": "Überprüfen Sie die Fachbegriffe vor dem Export manuell."
      },
      {
        "id": "2026-06-05-leonardo-consistent",
        "title": "Leonardo Character Reference Training Mini IP",
        "desc": "Verwenden Sie 4 Referenzbilder, um den Charakter zu sperren und Kursbilder stapelweise zu generieren.",
        "steps": [
          "Laden Sie 4 Fotos desselben Charakters aus verschiedenen Blickwinkeln hoch",
          "Aktivieren Sie die Zeichenreferenz",
          "Stellen Sie die Intensität auf Mittel ein",
          "Schreiben Sie mehrere Szenenaufforderungen und generieren Sie sie stapelweise",
          "Das erneute Auftreten von Seeds wurde behoben",
          "Laden Sie den Unified Style Atlas herunter"
        ],
        "prompt": "Flache Vektor-Maskottchen-Lehrer-, Klassenzimmer- und Schreibtischszenen, blaugrüne Farbpalette, freundliches Lächeln",
        "result": "Eine Reihe von Illustrationen im einheitlichen IP-Stil.",
        "tips": "Die Beleuchtung des Referenzbildes ist konsistent und die Erzeugung ist stabiler."
      },
      {
        "id": "2026-06-04-make-notion-sync",
        "title": "Szenario erstellen: Formularübermittlung→Notion-Datenbank+Slack-Benachrichtigung",
        "desc": "Neue Typeform-Antworten werden automatisch in Notion geschrieben und in die Slack-Zusammenfassung verschoben.",
        "steps": [
          "Erstellen Sie ein neues Szenario",
          "Das Typeform-Modul wartet auf neue Antworten",
          "Notion erstellt Datenbankelementzuordnungsfelder",
          "Das OpenAI-Modul generiert eine Satzzusammenfassung",
          "Slack sendet Kanalbenachrichtigungen",
          "Führen Sie Tests durch und aktivieren Sie die Planung"
        ],
        "prompt": "Generieren Sie eine Slack-Satzzusammenfassung basierend auf dem JSON-Formular, einschließlich Name, Ziel, Dringlichkeit, auf Chinesisch.",
        "result": "Durchgängige automatische Lagerhaltung und Benachrichtigung.",
        "tips": "Ordnen Sie zuerst Felder zu und stellen Sie dann eine Verbindung zur KI her, um das Debuggen zu erleichtern."
      },
      {
        "id": "2026-06-03-zapier-gmail-label",
        "title": "Zapier: Automatische Labels und Antwortentwürfe von Gmail AI",
        "desc": "Neue E-Mails lösen die ChatGPT-Klassifizierung aus, werden als Gmail gekennzeichnet und generieren optional Entwürfe.",
        "steps": [
          "Zapier verbindet Gmail mit OpenAI",
          "Auslöser: Neue E-Mail",
          "Aktion: Kategorie + vorgeschlagene Tags",
          "Gmail-Label hinzufügen",
          "Optional: Antwortentwurf erstellen",
          "Testen Sie 3 E-Mails"
        ],
        "prompt": "Anwendbar",
        "result": "Automatisch kategorisierter Posteingang mit optionalen Antwortentwürfen.",
        "tips": "Entwürfe werden standardmäßig nicht automatisch gesendet, um ein versehentliches Senden zu vermeiden."
      },
      {
        "id": "2026-06-02-dify-http-tool",
        "title": "Der Dify-Workflow ruft eine externe HTTP-API zur Angebotsberechnung auf",
        "desc": "Orchestrieren Sie die LLM-Parsing-Anforderungen → HTTP-Preisanpassungs-API → Formatangebot.",
        "steps": [
          "Erstellen Sie eine neue Workflow-Anwendung",
          "Der Startknoten erhält das Benutzerbudget und die Anzahl der Personen",
          "Der LLM-Knoten wird in strukturiertes JSON analysiert",
          "Der HTTP-Knoten ruft die interne Preis-API auf",
          "Vorlagenknoten für die Darstellung von Markdown-Zitaten",
          "Veröffentlichen Sie WebApp-Tests"
        ],
        "prompt": "Analysieren Sie Benutzeranforderungen in JSON: {Plan, Sitzplätze, Monate}, erfinden Sie keine Preise, unbekannte Felder sind null.",
        "result": "Automatischer Angebotsgenerator.",
        "tips": "HTTP-Knoten fügen Timeouts und Fehlerverzweigungen hinzu."
      },
      {
        "id": "2026-06-01-n8n-github-release",
        "title": "n8n überwacht die GitHub-Veröffentlichung und generiert chinesische Update-Beiträge",
        "desc": "Wenn neue Versionen veröffentlicht werden, werden Änderungsprotokolle automatisch erfasst und mithilfe von KI kurze Artikel im Stil offizieller Accounts geschrieben.",
        "steps": [
          "n8n GitHub-Trigger bei Veröffentlichung",
          "Abschlag für Release-Body abrufen",
          "OpenAI wird als öffentlicher Account-Tweet umgeschrieben",
          "Speichern Sie einen Google Doc-Entwurf",
          "Überprüfung der Telegrammbenachrichtigung",
          "Nach manueller Bestätigung veröffentlicht"
        ],
        "prompt": "Schreiben Sie das folgende englische Änderungsprotokoll in einen Tweet eines chinesischen öffentlichen Kontos um: Titel + Drei-Punkte-Update + Upgrade-Vorschläge, keine Übertreibung.",
        "result": "Tweet zur chinesischen Versionsaktualisierung, Überprüfung steht noch aus.",
        "tips": "Fügen Sie den Befehl „Mit Analogie erklären“ hinzu, wenn die Veröffentlichung zu technisch ist."
      },
      {
        "id": "2026-05-31-openclaw-rss-summarize",
        "title": "Eine tolle Sammlung von über 1.600 installierbaren Fähigkeiten, einschließlich spezieller Plug-in-Pakete und Rollenpakete für Web, Sicherheit, Daten, DevOps, Qualitätssicherung, Marketing usw.",
        "desc": "Erfassen Sie regelmäßig AI-Blog-RSS und schreiben Sie die Zusammenfassung in Bitable, damit das Team sie durchsuchen kann.",
        "steps": [
          "OpenClaw neuer Cron",
          "Konfigurieren Sie RSS-Listen",
          "Die Filter-GUID ist bereits vorhanden",
          "KI-generierte Zusammenfassung mit 80 Wörtern",
          "Feishu Bitable Neue Reihe",
          "Wöchentliche Berichtsansicht, gruppiert nach Datum"
        ],
        "prompt": "Ausgabe für jedes RSS: Chinesischer Titel, Zusammenfassung mit 80 Wörtern, 3 Schlüsselwörter und Link zum Lesen des Originaltextes.",
        "result": "Tabellierter Vergleichsmittelwert",
        "tips": "Das Bitable-Feld wird zuerst erstellt, um Schreibfehler zu vermeiden."
      },
      {
        "id": "2026-05-30-pipedream-youtube",
        "title": "Kommentieren Sie @copilot auf GitHub-PRs, um Sicherheits-, Leistungs- und Lesbarkeitsbewertungen zu erstellen.",
        "desc": "Abonnieren Sie Kanalaktualisierungen, transkribieren Sie Zusammenfassungen automatisch und senden Sie sie per E-Mail.",
        "steps": [
          "Pipedream Wählen Sie „Neues YouTube-Video“.",
          "Ziehen Sie Untertitel oder Audiotranskription herunter",
          "OpenAI-Drei-Punkte-Zusammenfassung",
          "E-Mail über SMTP senden",
          "Deduplizierung verarbeitete Video-ID",
          "Täglich um 9 Uhr"
        ],
        "prompt": "Generieren Sie basierend auf Untertiteln: ①Ein Satzthema ②Drei Hauptpunkte ③Ob es sich lohnt, sich anzusehen (1-5) Chinesisch.",
        "result": "Tägliche E-Mail mit Video-Highlights.",
        "tips": "Videos ohne Untertitel müssen zuerst den Whisper-Schritt durchlaufen."
      },
      {
        "id": "2026-05-29-ifttt-ios-shortcut",
        "title": "IFTTT + iOS-Verknüpfungsbefehl: Sprachinspiration → Notion AI-Organisation",
        "desc": "Sagen Sie Siri Inspiration, und Notion wird automatisch eingegeben und die KI füllt die Tags aus.",
        "steps": [
          "IFTTT Connect iOS-Verknüpfungen",
          "Verknüpfung zum Aufzeichnen von Text",
          "Webhook zur Notion-API",
          "Begriffs-KI-Vervollständigungs-Tags und -Zuordnungen",
          "Benachrichtigungsbestätigung schreiben",
          "Testen Sie den Sprachprozess"
        ],
        "prompt": "Organisieren Sie die Sprachtranskription in Notion-Notizen: Titel + drei Aufzählungszeichen + Tag #INSPIRED #AILearning",
        "result": "Stimmliche Inspiration führt zu strukturierten Notizen.",
        "tips": "Bearbeiten Sie in lauten Umgebungen die Texte vor dem Senden auf Ihrem Telefon."
      },
      {
        "id": "2026-05-28-activepieces-crm",
        "title": "Selbstgehostete Activepieces: Lead-Formular → CRM + KI-Bewertung",
        "desc": "Selbst gehostete Activepieces, Website-Formulare werden in CRM eingespeist und KI bewertet die Lead-Qualität.",
        "steps": [
          "Docker-Bereitstellung Activepieces",
          "Webhook-Empfangsformular",
          "HTTP-Schreiben an HubSpot-Kontakte",
          "KI erreicht Lead Score 1–5",
          "Highscore-Filiale Slack @sales",
          "Geben Sie die Kultivierungssequenz mit niedrigen Werten ein"
        ],
        "prompt": "Bewerten Sie 1-5 entsprechend den Antworten im Formular, Ausgabegrund ≤ 50 Wörter, JSON: {score, reason}",
        "result": "CRM-Lead-Pipeline mit Scoring.",
        "tips": "Achten Sie darauf, verschlüsselte Anmeldeinformationen für das Selbsthosting zu sichern."
      },
      {
        "id": "2026-05-27-notion-ai-meeting",
        "title": "Notion AI-Besprechungsnotizen: Tagesordnung → Protokoll → Aktionspunkte",
        "desc": "Schreiben Sie vor dem Meeting eine Tagesordnung, veröffentlichen Sie wichtige Punkte während des Meetings und verwenden Sie Notion AI, um Protokolle und Aufgaben zu erstellen.",
        "steps": [
          "Erstellen Sie eine Besprechungsseitenvorlage mit Agendabereich",
          "Halten Sie wichtige Punkte während des Meetings fest",
          "Wählen Sie Volltext „Notion AI Summarize“ aus",
          "Dann AI Extract Action Items",
          "Konvertieren Sie in eine Datenbankaufgabenzuweisung",
          "Legen Sie Terminerinnerungen fest"
        ],
        "prompt": "Erstellen Sie Protokolle auf der Grundlage der Tagesordnung und der wichtigsten Punkte: Entscheidungs-/Diskussions-/Aktionspunkte (verantwortliche Person + DDL), auf Chinesisch, keine unbesprochenen Inhalte.",
        "result": "Strukturierte Besprechungsprotokolle + Aufgabenbibliothek.",
        "tips": "Aktionselemente müssen Personen zugewiesen werden, um nicht hängen zu bleiben."
      },
      {
        "id": "2026-05-26-google-docs-draft",
        "title": "In Google Docs integrierte Gemini-Entwurfsplanübersicht",
        "desc": "Verwenden Sie Gemini in der Seitenleiste „Dokumente“, um die Planübersicht anhand von drei Aufzählungspunkten zu erweitern.",
        "steps": [
          "Erstellen Sie ein neues Google-Dokument",
          "Schreiben Sie drei Kernaufzählungszeichen",
          "Wählen Sie in der Gemini-Seitenleiste „Hilf mir beim Schreiben“ aus",
          "Akzeptieren Sie nach dem Erstellen der Gliederung",
          "Geben Sie Daten und Referenzen manuell ein",
          "Benachrichtigen"
        ],
        "prompt": "Erweitern Sie die folgenden drei Punkte zu einer Programmskizze: Hintergrund, Ziele und Drei-Phasen-Plan; 2-3 Kugeln in jedem Abschnitt; formelles Chinesisch.",
        "result": "Eine überprüfbare Skizze eines ersten Vorschlagsentwurfs.",
        "tips": "Stellen Sie sicher, dass Sie die echten Daten nach der Generierung manuell eingeben."
      },
      {
        "id": "2026-05-25-excel-copilot-formula",
        "title": "Excel Copilot schreibt XLOOKUP-Formeln in natürlicher Sprache",
        "desc": "Beschreiben Sie Anforderungen für den tabellenübergreifenden Abgleich und lassen Sie Copilot Formeln generieren und interpretieren.",
        "steps": [
          "Öffnen Sie eine Arbeitsmappe mit zwei Blättern",
          "Das Copilot-Panel beschreibt die Matching-Logik",
          "Formel in Zielspalte einfügen",
          "Überprüfen Sie die Zeile #N/A",
          "Lassen Sie Copilot IFERROR ändern",
          "Vorlage speichern"
        ],
        "prompt": "Holen Sie sich den Stückpreis aus der Preisliste basierend auf der Bestelltabelle SKU und schreiben Sie ihn in eine neue Spalte in der Bestelltabelle. Wenn es nicht gefunden werden kann, tragen Sie „fehlt“ ein. Verwenden Sie XLOOKUP.",
        "result": "Veröffentlichen Sie WebApp-Tests",
        "tips": "Lassen Sie Copilot vor dem Kopieren zunächst „jeden Schritt der Formel erklären“."
      },
      {
        "id": "2026-05-24-slack-summary",
        "title": "Zusammenfassung des Slack AI-Threads: Lange Diskussion, 30 Sekunden Lesezeit",
        "desc": "Zusammenfassung von Entscheidungen und Aufgaben mit einem Klick für mehr als 50 Antwortthreads.",
        "steps": [
          "Öffnen Sie einen langen Projektthread",
          "Klicken Sie auf Thread zusammenfassen",
          "Lesen Sie die KI-Zusammenfassung",
          "Prüfen Sie, ob Vetokommentare übersehen werden",
          "Zusammenfassung an den Kanal anpinnen",
          "Verfolgen Sie nicht zugewiesene Aufgaben"
        ],
        "prompt": "(Hauptsächlich Tastenbedienung) Nach der Zusammenfassung manuell hinzufügen: Verantwortlicher/Frist/offene Probleme",
        "result": "Ein kurzer Überblick über den Teamkonsens.",
        "tips": "Nach der Zusammenfassung muss @ noch die verantwortliche Person bestätigen."
      },
      {
        "id": "2026-05-23-obsidian-copilot",
        "title": "Dateisystem",
        "desc": "Konfigurieren Sie lokale/Cloud-Modelle, um referenzbasierte Fragen und Antworten zur gesamten Notizdatenbank durchzuführen.",
        "steps": [
          "Installieren Sie das Obsidian Copilot-Plug-in",
          "API oder Ollama einrichten",
          "Index-Tresor-Vektorbibliothek",
          "Frage „Erklären Sie das Experiment, das ich mit RAG durchgeführt habe“",
          "Überprüfen Sie den Zitierlink, um zur Notiz zu springen",
          "Häufige Probleme bei Befehlen behoben"
        ],
        "prompt": "Antwort ausschließlich auf der Grundlage von Notizen; Zitat [[Name der Notiz]]; Wenn Sie es nicht wissen, sagen Sie einfach, dass es nicht aufgezeichnet wurde. Halten Sie Chinesisch prägnant.",
        "result": "Persönliche Quizfragen mit Notizzitaten.",
        "tips": "Indizieren Sie regelmäßig neu, um zu vermeiden, dass neue Notizen nicht gefunden werden."
      },
      {
        "id": "2026-05-22-feishu-ai-doc",
        "title": "Feishu Document AI stellt Umfragelinks zu einer wettbewerbsfähigen Produktliste zusammen",
        "desc": "Fügen Sie die wichtigsten Punkte von 5 konkurrierenden Produktlinks ein und die KI erstellt eine Vergleichstabelle.",
        "steps": [
          "Erstellen Sie ein neues Feishu-Dokument",
          "Fügen Sie die Aufzählungspunkte der Konkurrenzprodukte ein",
          "Wählen Sie KI-Erstellung→Tabelle",
          "Preise und Funktionen für das Korrekturlesen",
          "Fügen Sie eine „unbekannte“ Spalte hinzu, um blindes Ausfüllen zu vermeiden",
          "Schreiben Sie vor dem Meeting eine Tagesordnung, veröffentlichen Sie wichtige Punkte während des Meetings und verwenden Sie Notion AI, um Protokolle und Aufgaben zu erstellen."
        ],
        "prompt": "Erstellen Sie eine Vergleichstabelle konkurrierender Produkte basierend auf den folgenden Schlüsselpunkten: Funktion/Preis/chinesischer Support/Bereitstellungsmethode; Füllen Sie „zu überprüfen“ aus, wenn es fehlt.",
        "result": "Der Agent kann Problembeschreibungen klonen, die Codebasis durchsuchen, mehrere Dateien ändern und Pull-Anfragen öffnen; unterstützt Menschen dabei, Unterschiede schrittweise zu genehmigen.",
        "tips": "Die Preisspalte trägt die Bezeichnung „Standdatum“."
      },
      {
        "id": "2026-05-21-linear-ai-issue",
        "title": "Lineare KI unterteilt Benutzerfeedback in ausführbare Probleme",
        "desc": "Fügen Sie 10 Benutzer-Feedbacks ein, gruppieren Sie die KI und generieren Sie priorisierte Probleme.",
        "steps": [
          "Lineares Projekt, neue Ansicht",
          "Fügen Sie Feedback in den KI-Assistenten ein",
          "Clustering nach Themen anfordern",
          "Generieren Sie den Titel des Problems und die Akzeptanzkriterien",
          "Passen Sie die Prioritäten manuell an",
          "Im Zyklus dieser Woche eingeplant"
        ],
        "prompt": "Cluster-Feedback in Issues: Titel, Problemstellung, Akzeptanzkriterien, Priorität P0-2; keine Duplizierung; Chinesisch.",
        "result": "Strukturiertes Produkt-Backlog.",
        "tips": "Akzeptanzkriterien müssen überprüfbar sein."
      },
      {
        "id": "2026-05-20-teams-recap",
        "title": "Teambesprechung Copilot-Bewertung: Wer hat welche Entscheidung gesagt?",
        "desc": "Öffnen Sie nach der Besprechung das Copilot-Panel, um die Liste der Sprechersegmente und Entscheidungen anzuzeigen.",
        "steps": [
          "Öffnen Sie die Teams-Besprechung, die gerade beendet wurde",
          "Copilot → Zusammenfassung",
          "Referenten und Themen anzeigen",
          "Kopieren Sie Entscheidungen und Aktionselemente",
          "In OneNote-Projektseite einfügen",
          "Markieren Sie den Verantwortlichen"
        ],
        "prompt": "Auszug aus dem Sitzungsprotokoll: Entscheidungsliste, offene Probleme, Aktionspunkte (Personen + DDL); erfinde es nicht.",
        "result": "Archivierbare Aufzeichnung von Sitzungsentscheidungen.",
        "tips": "Überprüfen Sie bei vertraulichen Besprechungen zunächst, ob das Unternehmen die Cloud-Transkription zulässt."
      }
    ]
  }
});
})();
