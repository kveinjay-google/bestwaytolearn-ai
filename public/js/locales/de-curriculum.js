/* DE overlays — curriculum */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('de', {
    aiOverview: [
        {
          id: "what",
          icon: "🌐",
          color: "var(--accent-teal-dim)",
          tag: "01 · Starting point",
          navLabel: "Was ist KI?",
          title: "Was ist KI?",
          lead: "Künstliche Intelligenz (KI) ist der Überbegriff für Technologien, die es Maschinen ermöglichen, intelligentes menschliches Verhalten zu simulieren – Muster in Daten zu finden, Sprache zu verstehen, Urteile zu fällen und Text, Bilder, Code und Audio/Video zu generieren. Es handelt sich nicht um ein einzelnes Produkt, sondern um eine Sammlung von Methoden und Engineering-Systemen.",
          intro: "Wenn man heute in den Nachrichten und in den sozialen Medien von „KI“ spricht, meint man meist große Sprachmodelle (LLMs) und generative KI (GenAI): Man gibt natürliche Sprache ein und erhält Antworten, Entwürfe oder kreative Arbeit. Der erste Schritt zum Verständnis von KI besteht darin, drei Dinge zu trennen: das technische Konzept, die Produktform und wie Sie es verwenden.",
          subsections: [
            {
              title: "Eine 30-sekündige Alltags-Analogie",
              text: "Stellen Sie sich moderne KI als einen Praktikanten vor, der eine riesige Bibliothek gelesen hat und sofort antwortet: Er ist großartig darin, Ideen zu organisieren, zu entwerfen, Brainstorming zu betreiben und Ideen zu verbinden – aber standardmäßig ohne Ihren geschäftlichen Kontext und nicht garantiert, dass er jedes Mal sachlich korrekt ist. Sie legen Ziele fest, stellen Materialien bereit und überprüfen Ergebnisse. KI beschleunigt Sie und erweitert Ihr Denken.",
              items: [
                "Sie stellen Folgendes bereit: Aufgabenziele, Hintergrundmaterialien, Formatanforderungen, Qualitätsstandards",
                "KI liefert: erste Entwürfe, Alternativen, Erläuterungen, strukturierte Aufschlüsselungen",
                "Sie überprüfen: Faktenprüfung, logisches Urteil, endgültige Entscheidungen und alles, was extern veröffentlicht wird"
              ]
            },
            {
              title: "Drei Entwicklungswellen (kennen Sie den Bogen)",
              text: "1956–1980er Jahre Symbolische KI: Regeln und Wissensbasen für das Denken – interpretierbar, aber schwer zu erfassende komplexe Realität",
              items: [
                "1956–1980er Jahre Symbolische KI: Regeln und Wissensbasen für das Denken – interpretierbar, aber schwer zu erfassende komplexe Realität",
                "1990er–2010er Jahre Statistisches Lernen: Muster automatisch aus Daten lernen; Empfehlung, Risikokontrolle und Spracherkennung stiegen",
                "2022+ Generative KI wird zum Mainstream: ChatGPT hat „natürliche Sprache steuert die Ausgabe“ zur Standardinteraktion gemacht",
                "2022+ Generative KI wird zum Mainstream: ChatGPT hat „natürliche Sprache steuert die Ausgabe“ zur Standardinteraktion gemacht"
              ]
            }
          ],
          points: [
            {
              label: "Was man heute unter KI versteht",
              text: "Meistens maschinelle Lernsysteme, die auf Big Data trainiert sind – insbesondere LLMs (GPT, Claude, Qwen) und Bild-/Videogenerierungsmodelle. Sie erzeugen eine scheinbar semantische Ausgabe, indem sie „das nächste Token/Pixel vorhersagen“."
            },
            {
              label: "Hierarchie",
              text: "Künstliche Intelligenz (KI) ⊃ Maschinelles Lernen (ML) ⊃ Deep Learning (DL) ⊃ Große Sprachmodelle (LLM). Weiter rechts = spezialisierter, aber auch mehr Daten, Rechenleistung und Technik."
            },
            {
              label: "Training vs. Schlussfolgerung",
              text: "Training ist „Lernen für eine Prüfung“ – das Anpassen von Modellparametern anhand umfangreicher Daten; teuer und langsam. Inferenz ist „das Ablegen der Prüfung“ – das Modell generiert jedes Mal Ergebnisse, wenn Sie danach fragen; Das ist die alltägliche Nutzungsphase."
            },
            {
              label: "ANI vs. AGI",
              text: "Alle kommerziellen Systeme sind heutzutage schmale KI (ANI): stark innerhalb ihrer Trainingsverteilung, begrenzte domänenübergreifende Übertragung. Für AGI (menschenähnliches breites Denken und Handeln) gibt es keinen vereinbarten Zeitplan – behandeln Sie aktuelle Produkte nicht als allwissende Agenten."
            },
            {
              label: "Diskriminativ vs. generativ",
              text: "Diskriminierende KI klassifiziert und beurteilt (Spam-Erkennung, medizinische Bildgebungsprüfung, Risikobewertung); Generative KI erstellt Inhalte (Berichte, Bilder, Code, Voiceover). Die öffentliche Aufregung ist heute überwiegend generativ."
            },
            {
              label: "Multimodal",
              text: "Neuere Modelle verarbeiten Text, Bilder, Audio, Video und sogar Codedateien zusammen. Sie können „einen Screenshot zur Erläuterung senden“, „ein PDF zur Zusammenfassung hochladen“ oder „per Spracheingabe sprechen“."
            },
            {
              label: "Halluzination",
              text: "KI kann Fakten, Zitate oder Zahlen souverän erfinden – weil sie auf „flüssig und plausibel“ und nicht auf „unbedingt korrekt“ optimiert ist. Überprüfen Sie immer Zahlen, Vorschriften, medizinische und Vertragsszenarien."
            },
            {
              label: "Der Mensch bleibt auf dem Laufenden",
              text: "Zuverlässiger Einsatz bedeutet „KI-Entwürfe + menschliche Überprüfungen“: KI kümmert sich um Geschwindigkeit und Abdeckung; Menschen kümmern sich um Wahrheit, Einhaltung und endgültige Verantwortung."
            }
          ],
          note: "Die Dartmouth-Konferenz 1956 prägte „künstliche Intelligenz“. Vom „Schreiben von Regeln“ über „Lernen aus Daten“ bis hin zum „Generieren von Inhalten“ erweitern sich die Grenzen der KI immer weiter – aber der Kern bleibt unverändert: Sie erweitert die menschlichen Fähigkeiten, sie zieht nicht automatisch Konsequenzen nach sich. Nach diesem Abschnitt sollten Sie erklären, was KI ist, was man heute üblicherweise unter KI versteht und warum man nicht jeder Ausgabe blind vertrauen kann."
        },
        {
          id: "capabilities",
          icon: "⚡",
          color: "var(--accent-amber-dim)",
          tag: "02 · Capability map",
          navLabel: "Was es kann",
          title: "Was kann KI?",
          lead: "Die heutige KI deckt einen großen Teil der Wissensarbeit, der kreativen Arbeit und der Prozessarbeit ab – vom Schreiben einer E-Mail bis zur Analyse eines Vertrags, von der Erstellung von Postern bis zur automatischen Zusammenfassung täglicher Berichte. Der Wert ersetzt Sie nicht, sondern komprimiert die Zeit von 0 auf 60 %, sodass Sie schneller ein Urteil fällen und den Feinschliff vornehmen können.",
          intro: "Schreiben & Kommunikation",
          capabilities: [
            {
              image: "assets/capabilities/cap-writing.jpg",
              title: "Schreiben & Kommunikation",
              desc: "Verwandeln Sie unscharfe Ideen in Text, den Sie senden, melden oder veröffentlichen können.",
              detail: "Ideal für strukturierten Ausdruck: E-Mail, wöchentliche Berichte, Vorschläge, Reden, Produkttexte, Social-Media-Beiträge, Übersetzungen und Tonaufbereitung. KI zeichnet sich dadurch aus, dass „Skelett zuerst, Fleisch dann“ gilt.",
              examples: [
                "Erweitern Sie drei Aufzählungspunkte zu einem wöchentlichen Bericht mit 500 Wörtern, in dem Daten und Risiken hervorgehoben werden",
                "Technische Dokumente für Kunden neu schreiben (wichtige Fakten behalten)",
                "Generieren Sie formale/lässige/englische Tonvarianten desselben Inhalts",
                "Besprechungsnotizen: Organisieren Sie Entscheidungen, Aufgaben und Eigentümer anhand grober Notizen"
              ],
              tip: "Geben Sie Zielgruppe, Länge, Ton und unbedingt enthaltene Fakten an – Sprünge in der Ausgabequalität."
            },
            {
              image: "assets/capabilities/cap-coding.jpg",
              title: "Programmieren und Debuggen",
              desc: "Beschleunigen Sie das Schreiben, Lesen und Ändern von Code durchgängig.",
              detail: "Von der Vervollständigung einzelner Funktionen bis hin zu dateiübergreifenden Refaktoren kann KI Fehler erklären, Tests generieren, die Datenverarbeitung skripten und Anforderungen in ausführbare Prototypen umwandeln. Auch Nicht-Programmierer können Webseiten, kleine Tools und Automatisierungsskripte über natürliche Sprache erhalten.",
              examples: [
                "Beschreiben Sie einen Bedarf → holen Sie sich das HTML/JS-Minitool → überprüfen Sie es im Browser",
                "Fehlerprotokolle einfügen → wahrscheinliche Ursachen ermitteln und Patches beheben",
                "Fügen Sie Komponententests und Randfälle für vorhandene Funktionen hinzu",
                "Verwandeln Sie repetitive Datenarbeit in ein kommentiertes Python-Skript"
              ],
              tip: "Bilder & Design"
            },
            {
              image: "assets/capabilities/cap-design.jpg",
              title: "Bilder & Design",
              desc: "Schnelle visuelle Entwürfe, Stilerkundung und kreative Assets.",
              detail: "Generieren Sie Illustrationen, Poster, Produkt-Moodboards, Logoanweisungen und UI-Konzepte aus Text. Ideal für Brainstorming und frühe visuelle Ausrichtung – kein Ersatz für ein vollständiges Markensystem.",
              examples: [
                "3 Cover-Stil-Entwürfe für einen Kurs (Tech / Magazin / Minimal)",
                "E-Commerce-Heldenbildkonzepte aus Produktverkaufsargumenten",
                "Verwandeln Sie handgezeichnete Skizzenbeschreibungen in hochwertige Konzeptzeichnungen",
                "Geben Sie Motiv, Komposition, Beleuchtung, Stilreferenz und Seitenverhältnis an; Sagen Sie beim Iterieren, was Sie behalten oder ändern möchten."
              ],
              tip: "Geben Sie Motiv, Komposition, Beleuchtung, Stilreferenz und Seitenverhältnis an; Sagen Sie beim Iterieren, was Sie behalten oder ändern möchten."
            },
            {
              image: "assets/capabilities/cap-av.jpg",
              title: "Audio- und Videoerstellung",
              desc: "Vom Text bis hin zu veröffentlichungsfähigen Audio-, Musik- und Videoclips.",
              detail: "Text-zu-Video, Bild-zu-Video, KI-Voiceover, Stimmenklonen, Musikgenerierung, Untertitelübersetzung und einfache Bearbeitungsanweisungen. Gut geeignet für kurze Talking-Head-Videos, Kurseinführungen und Werbekonzept-Reels.",
              examples: [
                "Verwandeln Sie die Artikelzusammenfassung in ein 60-Sekunden-Skript + Voiceover",
                "Klonen Sie Ihre Stimme für Kurskommentare (mit gesetzlicher Genehmigung)",
                "Generieren Sie Produktstimmungsvideos aus Szenenbeschreibungen",
                "Generieren Sie automatisch zweisprachige Untertitel und Titel für vorhandene Videos"
              ],
              tip: "Sperren Sie zunächst Dauer, Seitenverhältnis, Tempo und Zielgruppe. zur Sprachprüfung von Emotionen, Pausen und Aussprache."
            },
            {
              image: "assets/capabilities/cap-analytics.jpg",
              title: "Analyse & Forschung",
              desc: "Verwandeln Sie Informationsfluten in lesbare Erkenntnisse und umsetzbare Schlussfolgerungen.",
              detail: "Hilft bei Mitbewerber-Scans, Trendzusammenfassungen, Feedback-Clustering, Excel-Analyse-Frameworks und Übersichten zur Umfrageanalyse. Stark in strukturierter Synthese und Hypothesengenerierung; schwach bei unbestätigten genauen Statistiken.",
              examples: [
                "Laden Sie 20 Benutzerkommentare hoch → Priorisieren Sie Schwachstellen und Verbesserungen",
                "Vergleichen Sie 3 Wettbewerber → Merkmalstabelle und Differenzierungsmöglichkeiten",
                "Verwandeln Sie die Beschreibung der Verkaufsdaten in ein Analyse-Framework und Visualisierungsvorschläge",
                "Extrahieren Sie nach langen Berichten Risiken, Schlüsselzahlen und zu überprüfende Elemente"
              ],
              tip: "Bereitstellung von Rohmaterial, Analyseziel und Entscheidungskontext; Bitten Sie um die Kennzeichnung „bestätigt/abgeleitet/Bestätigung erforderlich“."
            },
            {
              image: "assets/capabilities/cap-agent.jpg",
              title: "Automatisierung und Agenten",
              desc: "Lassen Sie die KI mehrstufige Aufgaben nach Regeln ausführen – und nicht nur eine Zeile beantworten.",
              detail: "Agenten können Dateien suchen, lesen/schreiben, Skripts ausführen, Benachrichtigungen senden und Cron-Zeitpläne ausführen. Gut geeignet für „tägliche Branchenübersicht“, „Überwachung von Änderungen auf der Website von Mitbewerbern“ und für die Verknüpfung von E-Mails, Tabellenkalkulationen und Dokumenten.",
              examples: [
                "An jedem Wochentag um 8:30 Uhr werden Branchennachrichten automatisch zusammengefasst und eine Push-Übersicht erstellt",
                "Beobachten Sie die Websites von Mitbewerbern. Generieren Sie einen Vergleich, wenn Aktualisierungen angezeigt werden",
                "Verknüpfen Sie E-Mail + Tabelle + Dokument in einem Genehmigungsvorbereitungsablauf",
                "Erstellen Sie automatisch einen wöchentlichen Bericht aus einer Vorlage mit den aktuellen Daten"
              ],
              tip: "Pilotversuch zunächst in einem kleinen Umfang; Definieren Sie Prüfpunkte für Wiederholung, Protokollierung und menschliche Überprüfung."
            },
            {
              image: "assets/capabilities/cap-learning.jpg",
              title: "Lernen & Nachhilfe",
              desc: "Erklären Sie Konzepte, stellen Sie Fragen und planen Sie Lernpfade in Ihrem Tempo.",
              detail: "Verwenden Sie die Feynman-Technik, sokratische Fragen, mehrschichtige Erklärungen und die Überprüfung falscher Antworten, um schwierige Themen in verdauliche Schritte zu unterteilen. Ideal für Prüfungen, neue Fähigkeiten und schnelles Domain-Onboarding.",
              examples: [
                "Erklären Sie Transformer anhand einer Alltagsanalogie und stellen Sie anschließend drei Fragen zur Selbstkontrolle",
                "Passen Sie einen 7-tägigen Python-Einführungsplan an Ihren Hintergrund an",
                "Generieren Sie Variantenfragen für Schwachstellen",
                "Generieren Sie Variantenfragen für Schwachstellen"
              ],
              tip: "Die KI-Suche fasst Quellen zu Zusammenfassungen, Vergleichen und Zitierpfaden zusammen. document Q&A durchsucht Ihre hochgeladenen PDFs/Notizen präzise. Gut zum Recherchieren, Lernen und zum Sammeln von Informationen vor dem Schreiben."
            },
            {
              image: "assets/capabilities/cap-search.jpg",
              title: "Die KI-Suche fasst Quellen zu Zusammenfassungen, Vergleichen und Zitierpfaden zusammen. document Q&A durchsucht Ihre hochgeladenen PDFs/Notizen präzise. Gut zum Recherchieren, Lernen und zum Sammeln von Informationen vor dem Schreiben.",
              desc: "Die KI-Suche fasst Quellen zu Zusammenfassungen, Vergleichen und Zitierpfaden zusammen. document Q&A durchsucht Ihre hochgeladenen PDFs/Notizen präzise. Gut zum Recherchieren, Lernen und zum Sammeln von Informationen vor dem Schreiben.",
              detail: "Die KI-Suche fasst Quellen zu Zusammenfassungen, Vergleichen und Zitierpfaden zusammen. document Q&A durchsucht Ihre hochgeladenen PDFs/Notizen präzise. Gut zum Recherchieren, Lernen und zum Sammeln von Informationen vor dem Schreiben.",
              examples: [
                "Recherchieren Sie einen technischen Ansatz → Vor- und Nachteile sowie passende Szenarien",
                "Laden Sie einen Vertrag/ein Papier hoch → fragen Sie nach bestimmten Klauseln oder Absätzen",
                "Überprüfen Sie schnell häufige Quellen und Kontroversen rund um einen Anspruch",
                "Überprüfen Sie schnell häufige Quellen und Kontroversen rund um einen Anspruch"
              ],
              tip: "Fragen Sie nach Quellen und Zitaten; Überprüfen Sie die wichtigsten Schlussfolgerungen mit mindestens zwei unabhängigen Quellen."
            }
          ],
          collabTips: {
            title: "Vier Prinzipien für eine effektive Zusammenarbeit",
            items: [
              {
                label: "Geben Sie den vollständigen Kontext an",
                text: "Hintergrund, Ziele, Zielgruppe, Einschränkungen, Gegenbeispiele – je spezifischer, desto nutzbarer die Ausgabe."
              },
              {
                label: "Komplexe Arbeit in Gliederung → Entwurf → Überarbeitung → endgültig aufteilen; Überprüfen Sie jeden Schritt, bevor Sie fortfahren.",
                text: "Komplexe Arbeit in Gliederung → Entwurf → Überarbeitung → endgültig aufteilen; Überprüfen Sie jeden Schritt, bevor Sie fortfahren."
              },
              {
                label: "Fragen Sie nach Format und Standards",
                text: "Geben Sie Länge, Struktur, Ton und Pflichtfelder an – vermeiden Sie generisches Geschwätz."
              },
              {
                label: "Der Mensch urteilt zuletzt",
                text: "Fakten, Zahlen, Compliance und externe Veröffentlichungen müssen von Menschen bestätigt werden."
              }
            ]
          },
          boundaries: {
            title: "Womit es immer noch zu kämpfen hat oder was Vorsicht erfordert",
            items: [
              "Hochpräzise Echtzeitdaten (Aktienkurse der zweiten Ebene, unveröffentlichte interne Daten) – erfordern verlässliche Datenfeeds",
              "Komplexe mathematische Beweise und strenge Ableitungen können fehlschlagen; Überprüfen Sie wichtige Schritte",
              "Endgültige rechtliche/medizinische/finanzielle professionelle Beurteilung – KI unterstützt nur; lizenzierte Fachkräfte können nicht ersetzt werden",
              "Datenschutz, Urheberrecht, Ähnlichkeit bei der Generierung und Veröffentlichung – befolgen Sie die Gesetze und Plattformrichtlinien",
              "Langzeitspeicher aller Ihrer privaten Informationen – Standardsitzungen bleiben nicht bestehen; Erstellen Sie Ihre eigene Wissensdatenbank oder Ihren eigenen Workflow"
            ]
          },
          note: "KI ist bei Aufgaben mit klaren Mustern, schnellem Entwurf und Stapelvarianten am stärksten. am schwächsten hinsichtlich garantierter sachlicher Korrektheit, rechtlicher Haftung und nicht genannten impliziten Einschränkungen. Behandeln Sie es als Beschleuniger, nicht als Autopilot. Als nächstes: Auswahl spezifischer Werkzeuge."
        },
        {
          id: "tools",
          icon: "🧰",
          color: "rgba(167, 139, 250, 0.15)",
          tag: "03 · Tool landscape",
          navLabel: "Welche KI-Tools gibt es?",
          title: "Welche KI-Tools gibt es?",
          lead: "Es gibt keine „beste“ KI – nur die beste Lösung. Nachfolgend finden Sie die Mainstream-Tool-Karte für 2026. Das Tools-Modul auf dieser Website bietet eine detaillierte Abdeckung von 43 Apps.",
          toolGroups: [
            {
              category: "Chat-Assistenten",
              emoji: "💬",
              tools: "ChatGPT, Claude, Gemini, Qwen, DeepSeek, Kimi, Doubao, Grok",
              use: "Tägliche Fragen und Antworten, Schreiben, Analysieren, Codieren"
            },
            {
              category: "Codierung & Entwicklung",
              emoji: "👨‍💻",
              tools: "Cursor, Claude Code, Codex CLI, Grok Build, Copilot, Gemini CLI, Aider, Cline, Continue, Zcode, Windsurf, Bolt.new, Amazon Q Developer",
              use: "Terminalagenten, IDE-Vervollständigung, Git-Pair-Programmierung, einzeilige Site-Builds"
            },
            {
              category: "Bilderstellung",
              emoji: "🎨",
              tools: "Illustration, Design, visuelle Idee",
              use: "Illustration, Design, visuelle Idee"
            },
            {
              category: "Video und Audio",
              emoji: "🎵",
              tools: "Runway, Sora, Kling AI, Suno, ElevenLabs, Fish Audio",
              use: "Videogenerierung, Musik, Voiceover und Klonen"
            },
            {
              category: "Office productivity",
              emoji: "📋",
              tools: "Microsoft Copilot, Notion AI, Gamma",
              use: "Dokumente, Folien, Besprechungsnotizen, Zusammenarbeit"
            },
            {
              category: "Agent automation",
              emoji: "🦞",
              tools: "OpenClaw, Dify, Coze, n8n, Manus",
              use: "Geplante Aufgaben, Workflow-Orchestrierung, Bots, autonome Ausführung"
            },
            {
              category: "Suchen und recherchieren",
              emoji: "🔎",
              tools: "Perplexity, Metaso AI Search, NotebookLM",
              use: "Recherche, Literaturanalyse, Faktenprüfung"
            }
          ],
          note: "Anfänger: Beginnen Sie mit einer Chat-KI (ChatGPT oder Qwen) und einem Tool, das für Ihre Arbeit am relevantesten ist – installieren Sie nicht alles auf einmal."
        },
        {
          id: "impact",
          icon: "🏙️",
          color: "rgba(251, 113, 133, 0.12)",
          tag: "04 · Real-world impact",
          navLabel: "Schlüsseldomänen",
          title: "Wo macht KI bereits einen Unterschied?",
          lead: "KI ist kein Laborkonzept mehr – sie verändert die Art und Weise, wie Industrien produzieren und wie Benutzer Produkte erleben.",
          fields: [
            {
              icon: "🏥",
              name: "Gesundheitspflege",
              cases: "Unterstützung bei der medizinischen Bildgebung, Screening von Medikamentenmolekülen, Zusammenfassung klinischer Notizen, Bots für Gesundheitsfragen und -antworten"
            },
            {
              icon: "🎓",
              name: "Bildung & Forschung",
              cases: "Persönliche Nachhilfe, Literaturrecherche, Analyse von Versuchsdaten, Unterstützung beim Verfassen von Forschungsarbeiten"
            },
            {
              icon: "💰",
              name: "Finanzen und Wirtschaft",
              cases: "Betrugs-/Risikokontrolle, intelligenter Kundenservice, Erstellung von Marktberichten, Forschungsaggregation"
            },
            {
              icon: "🛒",
              name: "Einzelhandel und E-Commerce",
              cases: "Fertigung und Industrie"
            },
            {
              icon: "🏭",
              name: "Fertigung und Industrie",
              cases: "Qualitätsprüfung, vorausschauende Wartung, Lieferkettenoptimierung, Industrieroboter"
            },
            {
              icon: "🎬",
              name: "Inhalte und Medien",
              cases: "Texterstellung, Videobearbeitung, virtuelle Moderatoren, mehrsprachige Lokalisierung"
            },
            {
              icon: "⚖️",
              name: "Recht und Regierung",
              cases: "Vertragsprüfung, Suche nach Vorschriften, Fragen und Antworten der Regierung, Unterstützung bei der Dokumentenerstellung"
            },
            {
              icon: "🚗",
              name: "Transport & Mobilität",
              cases: "Fahrerassistenz, Routenplanung, Forschung und Entwicklung zum autonomen Fahren, Verkehrsvorhersage"
            }
          ],
          note: "Bei den meisten Anwendungen handelt es sich um „spezialisierte KI + Domänendaten + menschliche Überprüfung“ – also nicht um Entscheidungen allein durch KI."
        },
        {
          id: "future",
          icon: "🔭",
          color: "var(--accent-teal-dim)",
          tag: "05 · Looking ahead",
          navLabel: "Zukunftsaussichten",
          title: "Wie wird sich KI weiterentwickeln und unser Leben verändern?",
          lead: "Der technische Fortschritt ist ungewiss, aber diese Richtungen wirken sich eindeutig auf den Einzelnen und die Gesellschaft aus.",
          timeline: [
            {
              period: "Jetzt (2024–2026)",
              items: [
                "Große Modelle werden zur Standardschnittstelle – Konversations-KI in Suche, Büro, Codierung und Erstellung",
                "Multimodale Reife – ein Modell sieht Bilder, hört Audio, generiert Text/Bild/Video",
                "KI-Agenten steigen auf – von „Fragen beantworten“ zu „Aufgaben autonom ausführen“"
              ]
            },
            {
              period: "Kurzfristig (3–5 Jahre)",
              items: [
                "Persönliche KI-Assistenten weit verbreitet – merken Sie sich Präferenzen, Kalender, Projekte; proaktive Hilfe",
                "Branchen-KI ist tief verankert – Bildung, Gesundheitswesen und Recht erhalten spezielle Modelle und Arbeitsabläufe",
                "Die Zusammenarbeit zwischen Mensch und KI wird zum Standard – der Verzicht auf KI kann die berufliche Wettbewerbsfähigkeit erheblich beeinträchtigen"
              ]
            },
            {
              period: "Weiter draußen (noch auf Entdeckungsreise)",
              items: [
                "Künstliche Allgemeine Intelligenz (AGI) – ob und wann bleibt ungeklärt",
                "Verkörperte KI – KI in Robotern, die mit der physischen Welt interagieren",
                "Soziale Regeln wurden neu gestaltet – Arbeits-, Bildungs-, Urheberrechts- und Datenschutzgesetze entwickeln sich ständig weiter"
              ]
            }
          ],
          lifeChanges: [
            {
              icon: "🏠",
              title: "Alltag",
              text: "Schärfere Empfehlungen, intelligentere Häuser, viel geringere Sprachbarrieren"
            },
            {
              icon: "💼",
              title: "Wie wir arbeiten",
              text: "Wiederholte Arbeit automatisiert; Menschen konzentrieren sich mehr auf Kreativität, Entscheidungen, Beziehungen und Geschmack"
            },
            {
              icon: "🧠",
              title: "Lernen und Wachstum",
              text: "Jeder bekommt einen „24/7-Online-Nachhilfelehrer“ – aber kritisches Denken ist wichtiger denn je"
            },
            {
              icon: "🌍",
              title: "Gesellschaft",
              text: "Gleicherer Zugang zu Informationen – und neue Herausforderungen: Fehlinformationen, Deepfakes"
            }
          ],
          note: "Im KI-Zeitalter sind die wichtigsten Fähigkeiten nicht „die Kenntnis eines Werkzeugs“, sondern das Stellen guter Fragen, die Beurteilung der Qualität, kontinuierliches Lernen und die Wahrung eines humanistischen Urteilsvermögens."
        }
      ],
      fundamentals: [
        {
          icon: "🧠",
          color: "var(--accent-teal-dim)",
          title: "Künstliche Intelligenz",
          abbr: "AI",
          fullEn: "Künstliche Intelligenz",
          content: "<p><strong>Künstliche Intelligenz (KI)</strong> ist die Sammlung von Technologien, die es Maschinen ermöglichen, intelligentes Verhalten zu simulieren – Lernen, Argumentation, Wahrnehmung, Sprachverständnis, Planung und Kreation. Es wurde 1956 auf der Dartmouth-Konferenz geprägt und hat symbolische KI, statistisches Lernen und Deep-Learning-Wellen durchlaufen.</p>\n      <p>AI ist keine einzelne Technik, sondern ein großes System, einschließlich <strong>ML (Machine Learning)</strong>, <strong>DL (Deep Learning)</strong>, <strong>NLP (Natural Language Processing)</strong>, <strong>CV (Computer Vision)</strong>, Robotik und mehr. ChatGPT, selbstfahrende Autos und Gesichtserkennung sind alles KI-Anwendungen, mit denen wir täglich in Berührung kommen.</p>\n      <p><strong>AGI (Künstliche Allgemeine Intelligenz)</strong>: KI, die jede intellektuelle Aufgabe wie ein Mensch bewältigen kann – noch nicht erreicht; ein langfristiges Forschungsziel.</p>\n      <div class=\"analogy\"><strong>Alltagsanalogie:</strong> KI ist die große Idee von „Intelligenz“, wie „Transport“ – Autos, Züge und Flugzeuge sind spezifische Formen.</div>\n      <ul class=\"key-points\"><li>Alltägliche „KI“ ≈ datengesteuerte maschinelle Lernsysteme</li><li>AI ⊃ ML ⊃ DL – Umfang verengt sich von links nach rechts</li><li>Diskriminierende KI-Richter; Generative KI schafft</li></ul>"
        },
        {
          icon: "📊",
          color: "var(--accent-amber-dim)",
          title: "Maschinelles Lernen",
          abbr: "ML",
          fullEn: "Maschinelles Lernen",
          content: "<p><strong>Maschinelles Lernen (ML)</strong> ist das Kerngebiet der KI: Computer erkennen automatisch Muster aus Daten, anstatt dass Menschen jede If-Else-Regel schreiben. Standardablauf: Daten sammeln → Feature-Engineering → Modell trainieren → auswerten → Inferenz bereitstellen.</p>\n      <p><strong>Drei Hauptparadigmen:</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>Überwachtes Lernen</strong>: beschriftete Daten, Eingabe-Ausgabe-Zuordnung lernen. Wird zur Klassifizierung (Spam-Erkennung) und zur Regression (Hauspreise) verwendet.</li>\n        <li><strong>Unüberwachtes Lernen</strong>: keine Beschriftungen, Datenstruktur ermitteln. Wird für Clustering (Benutzersegmente) und Dimensionsreduzierung (Komprimierung) verwendet.</li>\n        <li><strong>Reinforcement Learning (RL)</strong>: Richtlinien über Belohnungssignale erlernen. Wird für Spiel-KI (AlphaGo) und Robotersteuerung verwendet.</li>\n      </ul>\n      <div class=\"analogy\"><strong>Alltagsanalogie:</strong> Traditionelle Programmierung ist „Lehrer gibt Schritt-für-Schritt-Antworten“; Beim maschinellen Lernen geht es darum, „den Schülern viele Übungen zu geben und sie erschließen die Methode.“</div>"
        },
        {
          icon: "🔬",
          color: "rgba(167, 139, 250, 0.15)",
          title: "Tiefes Lernen",
          abbr: "DL",
          fullEn: "Tiefes Lernen",
          content: "<p><strong>Deep Learning (DL)</strong> ist ein Zweig von ML, der mehrschichtige neuronale Netze verwendet, um hierarchische Merkmale automatisch aus Rohdaten zu extrahieren. Mehr Ebenen → mehr abstrakte Konzepte gelernt.</p>\n      <p>Im Jahr 2012 gewann <strong>AlexNet</strong> ImageNet entscheidend und markierte damit die Ära des Deep Learning. Es folgten Durchbrüche in den Bereichen Sprache (Siri), Sehen (Gesichtserkennung) und Sprache (GPT).</p>\n      <p><strong>Hauptzutaten:</strong> Riesige Datenmenge + tiefe Netzwerke + starke Rechenleistung (<strong>GPU, Grafikverarbeitungseinheit</strong>) = Spitzenleistung. Das Training eines großen Modells kann Millionen an Rechenleistung kosten.</p>\n      <div class=\"analogy\"><strong>Alltagsanalogie:</strong> Flaches Lernen ist ein Sieb; Deep Learning besteht aus gestapelten Filtern, von denen jeder eine andere Korngröße erfasst.</div>"
        },
        {
          icon: "🔗",
          color: "var(--accent-teal-dim)",
          title: "Neuronales Netzwerk",
          abbr: "NN",
          fullEn: "Neuronales Netzwerk",
          content: "<p><strong>Neuronales Netzwerk (NN)</strong> besteht aus vielen „Neuronen“-Knoten, die Informationen in Schichten verarbeiten. Jede Schicht wandelt Eingaben mit Gewichten und Verzerrungen um, durchläuft Aktivierungsfunktionen und speist die nächste Schicht.</p>\n      <p><strong>Backpropagation (BP)</strong> ist der Kerntrainingsalgorithmus: Vergleichen Sie die Vorhersage mit der Wahrheit, passen Sie die Gewichte Schicht für Schicht von der Ausgabe zur Eingabe an, um Fehler zu reduzieren.</p>\n      <p>Gemeinsame Architekturen: <strong>CNN (Convolutional Neural Network)</strong> zeichnet sich durch Bilder aus; <strong>RNN (Recurrent Neural Network)</strong> verarbeitet Sequenzen, wurde jedoch weitgehend durch Transformers ersetzt.</p>\n      <div class=\"analogy\"><strong>Alltagsanalogie:</strong> Wie eine Fabriklinie – Rohstoffe (Daten) durchlaufen Stufen (Schichten) und werden zum fertigen Produkt (Vorhersage).</div>"
        },
        {
          icon: "⚡",
          color: "var(--accent-amber-dim)",
          title: "Transformatorarchitektur",
          abbr: "—",
          fullEn: "Transformatorarchitektur",
          content: "<p>Googles Artikel <em>„Attention Is All You Need“</em> aus dem Jahr 2017 stellte die <strong>Transformer</strong>-Architektur vor und transformierte NLP. Sein Kern ist <strong>Selbstaufmerksamkeit</strong>: Berechnen Sie bei der Verarbeitung jedes Wortes die Relevanzgewichte für jedes andere Wort im Satz.</p>\n      <p><strong>Hauptvorteile:</strong></p>\n      <ul class=\"key-points\">\n        <li>Löst langfristige Abhängigkeiten – erstes und letztes Wort interagieren direkt</li>\n        <li>Hochparallel – viel schnelleres Training als RNNs</li>\n        <li>Gut skalierbar – größere Modelle, stärkere Fähigkeiten (Skalierungsgesetze)</li>\n      </ul>\n      <p>Alle modernen LLMs (GPT, Claude, Gemini, LLaMA) verwenden Transformer <strong>decoder</strong> oder <strong>encoder-decoder</strong> Strukturen.</p>\n      <div class=\"analogy\"><strong>Alltagsanalogie:</strong> Beim Lesen eines Satzes scannen Sie nicht Buchstabe für Buchstabe – Sie erfassen die gesamte Zeile und Ihre Augen konzentrieren sich auf Schlüsselwörter. Das ist Aufmerksamkeit.</div>"
        },
        {
          icon: "💬",
          color: "var(--accent-teal-dim)",
          title: "Großes Sprachmodell",
          abbr: "LLM",
          fullEn: "Großes Sprachmodell",
          content: "<p><strong>Large Language Model (LLM)</strong> ist ein sehr großes neuronales Netzwerk, das auf massiven Text trainiert wird; Sein Hauptziel ist <strong>den nächsten Token vorhersagen</strong>. Durch dieses einfache Ziel lernt es Grammatik, Fakten, Argumentation, Code, Mehrsprachigkeit und mehr.</p>\n      <p><strong>Wichtige Trainingsphasen:</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>Vorschulung</strong>: umfangreicher allgemeiner Text, Sprachgrundlagen erlernen</li>\n        <li><strong>SFT (Überwachte Feinabstimmung)</strong>: Hochwertige Dialogdaten, lernen, Anweisungen zu befolgen</li>\n        <li><strong>RLHF (Reinforcement Learning from Human Feedback)</strong>: Menschliche Präferenzetiketten optimieren Antwortqualität und Sicherheit</li>\n      </ul>\n      <p><strong>Grenzen:</strong> Wissensstichtage, Halluzinationen, Mathematik und Logik können immer noch scheitern. Bleiben Sie kritisch und überprüfen Sie wichtige Fakten.</p>\n      <div class=\"analogy\"><strong>Alltagsanalogie:</strong> Ein LLM ist wie ein Gelehrter, der die gesamte Internetbibliothek liest – fließend und umfassend, sich aber möglicherweise an Details falsch erinnert; Überprüfen Sie wichtige Informationen.</div>"
        },
        {
          icon: "🎯",
          color: "rgba(251, 113, 133, 0.12)",
          title: "Generative KI",
          abbr: "GenAI",
          fullEn: "Generative Artificial Intelligence",
          content: "<p><strong>Generative KI (GenAI)</strong> erstellt neue Inhalte – Texte, Bilder, Audio, Video, Code, 3D-Modelle. Im Gegensatz zur <strong>diskriminierenden KI</strong> (Klassifizierung, Erkennung, Vorhersage) liegt der Kern von GenAI in der „Erschaffung“.</p>\n      <p><strong>Technische Hauptrouten:</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>Autoregressive Modelle</strong>: Token/Pixel für Token generieren; z.B. GPT, DALL·E</li>\n        <li><strong>Diffusionsmodelle</strong>: Entrauschen von Rauschen zu Bild; z.B. Stabile Verbreitung, Midjourney</li>\n        <li><strong>GAN (Generative Adversarial Network)</strong>: Generator vs. Diskriminator; früher Mainstream für Bilder</li>\n      </ul>\n      <p><strong>Multimodal</strong> Modelle wie GPT-4o und Gemini verstehen und generieren Text, Bilder, Audio und mehr in einem System.</p>\n      <div class=\"analogy\"><strong>Alltagsanalogie:</strong> Diskriminierende KI ist der „Beurteiler“ (richtig oder falsch); Generative KI ist der „Autor + Maler“ (erstellt neue Werke von Grund auf).</div>"
        },
        {
          icon: "🌐",
          color: "rgba(167, 139, 250, 0.15)",
          title: "Verarbeitung natürlicher Sprache",
          abbr: "NLP",
          fullEn: "Verarbeitung natürlicher Sprache",
          content: "<p><strong>Natural Language Processing (NLP)</strong> ist der KI-Zweig, der es Computern ermöglicht, menschliche Sprache zu verstehen, zu erzeugen und zu verarbeiten – maschinelle Übersetzung, Stimmungsanalyse, Zusammenfassung, Fragen und Antworten, Spracherkennung und mehr.</p>\n      <p><strong>NLP-Entwicklung:</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>Regelzeit</strong>: handgeschriebene Grammatikregeln und Wörterbücher</li>\n        <li><strong>Statistisches Zeitalter</strong>: Wahrscheinlichkeit aus großen Korpora (N-Gramm)</li>\n        <li><strong>Deep-Learning-Ära</strong>: Word2Vec-Einbettungen → RNN/LSTM → Transformer → LLM</li>\n      </ul>\n      <p>Heutzutage werden die meisten NLP-Aufgaben durch LLMs „vereinheitlicht“ – ein Modell mit unterschiedlichen Eingabeaufforderungen kann übersetzen, zusammenfassen, klassifizieren und generieren. Dies ist das <strong>unified NLP-Paradigma</strong>.</p>\n      <div class=\"analogy\"><strong>Alltagsanalogie:</strong> NLP ist die „Sprachabteilung“ der KI – sie bringt Maschinen das Lesen, Schreiben, Zuhören und Sprechen bei; Der LLM ist der Einser-Schüler in diesem Jahrgang.</div>"
        }
      ],
      fundamentalsFigcaption: "Auf einen Blick: KI lernt aus Daten, versteht Ihre Frage über Transformer/LLM-Inferenz und generiert Antworten; Die folgenden Module sind standardmäßig erweitert. Klicken Sie zum Ausblenden auf die Titel.",
      fundamentalsFigAlt: "Wie KI funktioniert: Datentraining, Transformer-Architektur, LLM-Inferenz auf Antworten und die Hierarchie der KI, die ML und DL enthält",
      sectionHeaders: {
        "ai-overview": {
          tag: "Module 1.1 · Start here",
          title: "KI-Übersicht",
          desc: "Bevor wir tiefer eintauchen: Was KI ist, was sie kann, welche Tools es gibt, welche Bereiche sie verändert und wohin sie geht."
        },
        fundamentals: {
          tag: "Module 1.2",
          title: "Wie funktioniert KI?",
          desc: "8 Grundmodule: AI → ML → DL → Transformer → LLM → GenAI → NLP."
        },
        knowledge: {
          tag: "Module 1.3",
          title: "KI-Wissensdatenbank",
          desc: "100 gängige KI-Begriffe in 9 Kategorien. Kartenstudium oder kurzes Glossar."
        },
        apps: {
          tag: "Module 2.1",
          title: "Wählen Sie die richtigen Werkzeuge",
          desc: "43 gängige KI-Apps nach Szenario, mit Funktionen, Zielgruppe und Tipps für den Einstieg."
        },
        "prompt-examples": {
          tag: "Prompt-Referenz",
          title: "Prompt-Beispiele nach Softwaretyp",
          desc: "Sieben Kategorien — Chat, Coding, Bilder, Video, Büro, Agenten und Recherche — mit Szenarien, Strukturhinweisen und kopierfertigen Prompts."
        },
        "prompt-lab": {
          tag: "Module 2.2",
          title: "Promptes Labor",
          desc: "Ein Arbeitsbereich: Wählen Sie einen Fall aus → Eingabeaufforderung bearbeiten → Antwort in der Vorschau anzeigen → Mit echten Tools arbeiten.",
          caseLabel: "Praxisfälle",
          selectCaseBadge: "Wählen Sie einen Fall aus, mit dem Sie beginnen möchten",
          copyPrompt: "Eingabeaufforderung kopieren",
          formTitle: "Schnelle Konfiguration",
          taskLabel: "Aufgabentyp",
          roleLabel: "Rolle",
          rolePlaceholder: "z.B. Leitender Produktmanager",
          contextLabel: "Hintergrund",
          contextPlaceholder: "Beschreiben Sie Szenario, Zielgruppe, Einschränkungen ...",
          outputLabel: "Erwartete Ausgabe",
          outputPlaceholder: "z.B. Eine PRD-Gliederung mit 500 Wörtern",
          toneLabel: "Ton und Stil",
          tones: [
            "Professionell und streng",
            "Einfache Sprache",
            "Kreativ und explorativ",
            "Prägnant und direkt"
          ],
          generateBtn: "Generieren und simulieren",
          simTitle: "Simulation zurücksetzen",
          simReset: "Simulation zurücksetzen",
          simEmptyTitle: "Simulation nicht gestartet",
          simEmptyDesc: "Klicken Sie oben auf einen Fall oder bearbeiten Sie den linken Bereich und klicken Sie auf „Generieren und simulieren“. In diesem Fenster werden eine Eingabeaufforderung, eine KI-Antwort und eine Anleitung zum nächsten Schritt angezeigt.",
          guideTitle: "Simulation abgeschlossen · Probieren Sie es in einem echten Werkzeug aus",
          guideToolsLabel: "Empfohlene Werkzeuge:",
          followupPlaceholder: "Follow-up, z.B. „Mach es kürzer“…",
          sendBtn: "Schicken",
          simDisclaimer: "Lokale Voreinstellungsdemo zum Verständnis der Eingabeaufforderungsstruktur. Kopieren Sie Eingabeaufforderungen in empfohlene Tools, um echte Ergebnisse zu erzielen."
        },
        "hands-on": {
          tag: "Module 3.1 · Start here",
          title: "Echte Software-Tutorials",
          desc: "30 Schritt-für-Schritt-Anleitungen zu den Themen Codierung, Schreiben, Bilder, Video, Audio, Office, Suche und Agentenautomatisierung – folgen Sie den Schritten und liefern Sie echte Ergebnisse."
        },
        practice: {
          tag: "Module 3.2",
          title: "Vorlagen für Szenario-Eingabeaufforderungen",
          desc: "16 Arbeitsplatz- und Lernszenarien mit empfohlenen Tools, Schritt-für-Schritt-Abläufen und Ein-Klick-Kopieraufforderungsvorlagen."
        },
        monetize: {
          tag: "Monetization map",
          title: "Verwandeln Sie KI-Fähigkeiten in echtes Einkommen",
          desc: "30 umsetzbare Nebenverdienst- und Freiberufler-Richtungen – wählen Sie eine aus, die zu Ihnen passt, und beginnen Sie mit der Validierung."
        },
        graduation: {
          tag: "Official graduation",
          title: "Herzlichen Glückwunsch – 7-tägiges KI-Lernen abgeschlossen!",
          desc: "Sie haben „Erkenntnis“ → „Tools“ → „Üben“ → „Überprüfen“ abgeschlossen. Überprüfen Sie Ihren Bericht und planen Sie die nächsten 30 Tage.",
          learningFootprint: "Lernfußabdruck",
          planTag: "Verbessere dich weiter",
          planTitle: "30-Tage-Übungsplan",
          planDesc: "Üben Sie mindestens zweimal pro Woche mit KI und setzen Sie das Gelernte in echte Gewohnheiten um. Automatische Speicherung; jederzeit exportieren.",
          focusLegend: "Fokusbereiche (Mehrfachauswahl)",
          exportPlan: "Plan exportieren",
          copyReport: "Abschlussbericht kopieren",
          saved: "Automatisch gespeichert"
        },
        devices: {
          tag: "Buying map",
          title: "Wählen Sie Geräte nach tatsächlichen Bedürfnissen aus",
          desc: ""
        },
        quiz: {
          tag: "Module 4.1",
          title: "Testen Sie Ihr Lernen",
          desc: "100 kuratierte Fragen zu Theorie, Begriffen, Werkzeugen und Praxis. Ziel 80/100+."
        }
      },
      coachSections: [
        {
          id: "hero",
          msgTemplate: "{name}, ich bin {teacher}! Sind Sie bereit, Ihre KI-Lernreise zu beginnen?"
        },
        {
          id: "roadmap",
          msgTemplate: "{name}, das ist die Lernkarte. Befolgen Sie die vier Phasen der Reihe nach – ich werde Sie den ganzen Weg begleiten."
        },
        {
          id: "path",
          msgTemplate: "{name}, das ist Ihr 7-Tage-Lernplan. Arbeiten Sie die Tage der Reihe nach durch; Markieren Sie Inhalte, die Sie bereits kennen, als gemeistert, um sie zu überspringen – ich verfolge Ihren Fortschritt."
        },
        {
          id: "ai-Übersicht",
          msgTemplate: "{name}, beginnen Sie mit der KI-Übersicht! Verstehen Sie, was KI ist und was sie kann – danach werden Ihnen die Grundlagen viel leichter fallen."
        },
        {
          id: "Grundlagen",
          msgTemplate: "{name}, diese 8 Grundlagen sind die Grundlage für das Verständnis jedes KI-Tools."
        },
        {
          id: "Wissen",
          msgTemplate: "{name}, Sie müssen sich nicht alle 100 Begriffe auf einmal merken – kommen Sie jederzeit zurück, um etwas nachzuschlagen."
        },
        {
          id: "Apps",
          msgTemplate: "{name}, wählen Sie Tools für Ihre Szenarien aus – registrieren Sie sich und probieren Sie eines aus; So kann man am schnellsten loslegen."
        },
        {
          id: "prompt-lab",
          msgTemplate: "{name}, Eingabeaufforderungen sind der Schlüssel zur Steuerung der KI – üben Sie hier strukturiertes Schreiben."
        },
        {
          id: "praktisch",
          msgTemplate: "{name}, beginnen Sie mit echten Software-Tutorials! Folgen Sie Cursor, Midjourney und anderen – nichts ist besser, als es selbst zu tun."
        },
        {
          id: "practice",
          msgTemplate: "{name}, wählen Sie ein Szenario aus, das mit Ihrer Arbeit verknüpft ist, kopieren Sie eine Eingabeaufforderung und probieren Sie es in der Realität aus!"
        },
        {
          id: "quiz",
          msgTemplate: "{name}, Endspurt! Nehmen Sie am Quiz teil, um Ihre 7 Tage zu bestätigen – Sie haben es geschafft!"
        },
        {
          id: "graduation",
          msgTemplate: "{name}, herzlichen Glückwunsch zum Abschluss! Überprüfen Sie Ihren Lernbericht und füllen Sie Ihren 30-Tage-Praxisplan aus."
        },
        {
          id: "monetarisieren",
          msgTemplate: "{name}, möchten Sie Ihre Fähigkeiten monetarisieren? Hier sind 30 umsetzbare Anweisungen: Wählen Sie die beste Lösung aus und beginnen Sie mit der Validierung."
        },
        {
          id: "devices",
          msgTemplate: "{name}, lesen Sie dies, bevor Sie einen PC kaufen! Passen Sie Betriebssystem, RAM und GPU an Ihren Lernpfad an – vermeiden Sie zu hohe Ausgaben."
        }
      ],
      phaseCoachHints: {
        "phase-learn": "{name}, Phase 1: Lassen Sie uns kognitive Grundlagen schaffen – Prinzipien und Terminologie.",
        "phase-tools": "{name}, Phase 2: Lernen Sie, Tools auszuwählen und Eingabeaufforderungen zu verfassen, damit KI wirklich für Sie funktioniert.",
        "phase-practice": "{name}, Phase 4: Überprüfen, testen und konsolidieren – weiter verbessern.",
        "phase-validate": "{name}, Phase 4: Überprüfen, testen und konsolidieren – weiter verbessern."
      },
      dayCompleteMessages: {
        allComplete: "{name}, alle 7 Tage abgeschlossen! Erstaunlich – gehen Sie zu Review für das letzte Quiz 🎉",
        cognitionPhaseEnd: "{name}, Tag 3 geschafft! Die Fundamentphase ist abgeschlossen. Scrollen Sie nach unten, um zu Extras 👏 zu springen",
        toolsPhaseEnd: "{name}, Tools-Phase abgeschlossen! Verwenden Sie die Übergangsanleitung unten, um in die Praxis einzusteigen.",
        practiceDayComplete: "{name}, Übungstag geschafft! Nehmen Sie am Abschlussquiz teil – sprinten Sie bis zum Ziel!",
        dayComplete: "{name}, Tag {day}「{title}」abgeschlossen! {nextHint}{teacher} ist stolz auf dich ✦",
        nextDayHint: "Morgen ist Tag {nextDay}「{nextTitle}」."
      },
      personalizationNamed: {
        greeting: "{name}, willkommen bei BestWayToLearn.AI",
        titleHtml: "{name}, lasst uns gemeinsam <span class=\"hero-highlight\">AI</span> meistern",
        readyTitle: "Großartig, {name} – los geht's!",
        readyDesc: "Ab heute leite ich Sie Schritt für Schritt mit „{name}“ an.",
        readyQuote: "„{name}, der beste Weg, KI zu lernen, besteht darin, an echten Problemen zu üben.“",
        pathBanner: "{name}, sehen Sie sich zuerst den vollständigen 7-Tage-Plan an und arbeiten Sie dann Tag für Tag. Markieren Sie die gemeisterten Tage zum Überspringen – ich verfolge Ihren Fortschritt.",
        roadmapHeader: "{name}, schließen Sie die vier Phasen der Reihe nach ab. Jeder hat klare Ziele und Module. Der Fortschritt wird automatisch gespeichert – jederzeit abrufbar.",
        phaseBannerTemplate: "{name}, {subtitle} · {days} · {descFirst}."
      }
  });
})();
