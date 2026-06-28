/* DE overlays — terms */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('de', {
    termCategories: {
        "基础概念": "Grundlagen",
        "模型与架构": "Modelle & Architektur",
        "训练与调优": "Training & Tuning",
        "提示与推理": "Aufforderung und Schlussfolgerung",
        "智能体与技能": "Agenten und Fähigkeiten",
        "数据与知识": "Daten & Wissen",
        "多模态与生成": "Multimodal & Generation",
        "工程与部署": "Technik und Bereitstellung",
        "伦理与安全": "Ethik und Sicherheit"
      },
      terms: [
        {
          def: "Der Überbegriff für Technologien, die es Maschinen ermöglichen, menschliche Intelligenz zu simulieren, einschließlich Lernen, Denken, Wahrnehmung, Sprachverständnis und Schöpfung.",
          example: "Suchmaschinen, Sprachassistenten, autonomes Fahren."
        },
        {
          def: "Eine Möglichkeit für Computer, automatisch Muster aus Daten zu lernen, ohne für jeden Fall handschriftliche Regeln zu erstellen; der zentrale Weg zum Aufbau von KI.",
          example: "Spam-Filterung, Produktempfehlungen, Bonitätsbewertung."
        },
        {
          def: "Maschinelles Lernen, das mehrschichtige neuronale Netze nutzt, um hierarchische Merkmalsdarstellungen automatisch aus Daten zu extrahieren.",
          example: "KI, die jede intellektuelle Aufgabe eines Menschen bewältigen kann, so wie Menschen es tun. Noch nicht erreicht; ein langfristiges Forschungsziel."
        },
        {
          def: "Ein Allzweck-KI-Assistent, der sich jede neue Fähigkeit selbst beibringen kann.",
          example: "Ein Allzweck-KI-Assistent, der sich jede neue Fähigkeit selbst beibringen kann."
        },
        {
          def: "KI, die nur bestimmte Aufgaben ausführen kann; die Art aller heute eingesetzten KI-Systeme.",
          example: "AlphaGo spielt nur Go; ChatGPT übernimmt hauptsächlich Sprachaufgaben."
        },
        {
          def: "KI, die neue Inhalte erstellt (Text, Bilder, Audio, Video, Code); Der Schwerpunkt liegt eher auf der Generierung als auf der Klassifizierung.",
          example: "ChatGPT zum Schreiben, Midjourney für Bilder, Suno für Musik."
        },
        {
          def: "Ein Zweig der KI, der es Computern ermöglicht, menschliche Sprache zu verstehen, zu erzeugen und zu verarbeiten.",
          example: "Maschinelle Übersetzung, intelligenter Kundenservice, Textzusammenfassung."
        },
        {
          def: "Face Unlock, medizinische Bildgebung, Wahrnehmung beim autonomen Fahren.",
          example: "Face Unlock, medizinische Bildgebung, Wahrnehmung beim autonomen Fahren."
        },
        {
          def: "Eine genaue Reihe von Schritten und Regeln zur Lösung eines Problems. In der KI sind Algorithmen Methoden zum Lernen aus Daten oder zum Denken.",
          example: "Gradientenabstieg, Backpropagation, Aufmerksamkeitsmechanismen."
        },
        {
          def: "Eine aus Daten erlernte mathematische Darstellung, die Ausgaben für unsichtbare Eingaben vorhersagen oder generieren kann.",
          example: "GPT-4 ist ein Modell; Die von Ihnen heruntergeladene stabile Diffusion ist ebenfalls ein Modell."
        },
        {
          def: "Lernbare Gewichtswerte innerhalb eines Modells. Mehr Parameter bedeuten normalerweise eine größere Kapazität, aber höhere Trainings- und Inferenzkosten.",
          example: "GPT-4 hat etwa 1,8 Billionen Parameter; DeepSeek-R1 hat ~671 Milliarden."
        },
        {
          def: "GPT-4, Claude, Gemini, Qwen, DeepSeek.",
          example: "Ein Sprachmodell mit weniger Parametern, das auf Telefonen und Edge-Geräten ausgeführt werden kann – schneller und kostengünstiger."
        },
        {
          def: "Ein Sprachmodell mit weniger Parametern, das auf Telefonen und Edge-Geräten ausgeführt werden kann – schneller und kostengünstiger.",
          example: "Gemma 2B, Phi-3 Mini, Sprachassistenten auf dem Gerät."
        },
        {
          def: "OpenAIs Familie großer Sprachmodelle basierend auf dem Transformer-Decoder; Vorab trainiert und dann fein abgestimmt.",
          example: "GPT-3.5, GPT-4 und GPT-4o unterstützen ChatGPT."
        },
        {
          def: "Das bidirektionale Sprachverständnismodell von Google; stark in der Klassifizierung und Qualitätssicherung, schwach in der Langformgenerierung.",
          example: "Suchranking, Stimmungsanalyse, Erkennung benannter Entitäten."
        },
        {
          def: "Eine 2017 eingeführte neuronale Netzwerkarchitektur, die sich auf Selbstaufmerksamkeit konzentriert; die Grundlage moderner LLMs.",
          example: "GPT, Claude, Gemini und LLaMA verwenden alle diese Architektur."
        },
        {
          def: "Ermöglicht einem Modell, sich dynamisch auf die relevantesten Teile der Eingabe zu konzentrieren und weitreichende Abhängigkeiten zu erfassen.",
          example: "Fernausrichtung in der Übersetzung; Konzentrieren Sie sich beim Lesen auf Schlüsselwörter."
        },
        {
          def: "Verstehen, auf welches Substantiv sich „es“ bezieht.",
          example: "Verstehen, auf welches Substantiv sich „es“ bezieht."
        },
        {
          def: "Bildklassifizierung, Objekterkennung, medizinische Bildgebung.",
          example: "Bildklassifizierung, Objekterkennung, medizinische Bildgebung."
        },
        {
          def: "Ein Netzwerk für sequentielle Daten mit Speicher; langsam zu trainieren, schwer zu parallelisieren, weitgehend durch Transformers ersetzt.",
          example: "Frühe maschinelle Übersetzung, Vorhersage von Bestandszeitreihen."
        },
        {
          def: "Ein Generator und ein Diskriminator trainieren gegensätzlich, um realistische Bilder zu erzeugen. eine gängige frühe Bildgenerierungstechnik.",
          example: "Gesichtsaustausch, Stilübertragung, Restaurierung alter Fotos."
        },
        {
          def: "Stabile Diffusion, Midjourney, DALL·E 3.",
          example: "Stabile Diffusion, Midjourney, DALL·E 3."
        },
        {
          def: "Ein Computermodell miteinander verbundener Neuronen in Schichten; der Grundbaustein des Deep Learning.",
          example: "Die zugrunde liegende Struktur aller LLMs, CNNs und GANs."
        },
        {
          def: "Schulung zu umfangreichen allgemeinen Daten zum Aufbau grundlegender Fähigkeiten; die erste Stufe für alle LLMs.",
          example: "GPT-4 wurde auf Billionen von Text-Tokens vorab trainiert."
        },
        {
          def: "Weiteres Trainieren eines vorab trainierten Modells anhand hochwertiger domänenspezifischer Daten, damit es bei einer bestimmten Aufgabe hervorragende Leistungen erbringt.",
          example: "Feinabstimmung eines medizinischen Dialogdatensatzes zu einem spezialisierten KI-Assistenten."
        },
        {
          def: "Menschen bewerten mehrere Modellantworten; Reinforcement Learning optimiert dann die Ausgabequalität und -sicherheit.",
          example: "ChatGPT ist benutzerfreundlicher und sicherer als GPT-3 – RLHF ist der Schlüssel."
        },
        {
          def: "Effiziente Feinabstimmung: Trainieren Sie nur einen kleinen Satz von Adapterparametern mit niedrigem Rang, ohne die ursprünglichen Gewichte zu ändern – kostengünstig und schnell.",
          example: "Hinzufügen eines bestimmten Kunststils zu Stable Diffusion; Unternehmen private Feinabstimmung."
        },
        {
          def: "Komprimieren Sie die Fähigkeiten eines großen Lehrermodells in einem kleineren Schülermodell und behalten Sie so die Leistung bei, während Sie gleichzeitig weniger Rechenleistung benötigen.",
          example: "DeepSeek-R1 wurde in kleinere, schnellere Argumentationsmodelle destilliert."
        },
        {
          def: "Das Modell schneidet bei Trainingsdaten hervorragend ab, bei neuen Daten jedoch schlecht, etwa beim Auswendiglernen ohne Verständnis.",
          example: "Ich erinnere mich an Trainingsantworten, scheitere aber bei neuen Fragen."
        },
        {
          def: "Das Modell ist zu einfach, um auch nur an die Trainingsdaten anzupassen. Komplexität erhöhen oder Funktionen verbessern.",
          example: "Jede Trainingsiteration verwendet Backpropagation."
        },
        {
          def: "Kerntrainingsalgorithmus für neuronale Netze: Berechnen Sie Gradienten Schicht für Schicht von der Ausgabe bis zur Eingabe und aktualisieren Sie die Gewichte.",
          example: "Jede Trainingsiteration verwendet Backpropagation."
        },
        {
          def: "Misst die Lücke zwischen Vorhersagen und der Grundwahrheit; Training minimiert dies.",
          example: "Kreuzentropie zur Klassifizierung; mittlerer quadratischer Fehler für die Regression."
        },
        {
          def: "Ein Hyperparameter, der steuert, wie viele Gewichte bei jedem Schritt aktualisiert werden. Zu hoch und das Training divergiert; zu niedrig und es ist zu langsam.",
          example: "Aktualisiert die Parameter gegenüber dem Verlustgradienten, sodass der Verlust schrittweise abnimmt."
        },
        {
          def: "Aktualisiert die Parameter gegenüber dem Verlustgradienten, sodass der Verlust schrittweise abnimmt.",
          example: "Gehen Sie bei jeder Stufe in der steilsten Richtung bergab."
        },
        {
          def: "Die kleinste Einheit der Text-KI-Prozesse. ~1–2 Token pro chinesischem Schriftzeichen; ~1–3 pro englisches Wort.",
          example: "„Künstliche Intelligenz“ umfasst etwa 2–4 ​​Token; 128.000 Kontext ≈ ~100.000 chinesische Schriftzeichen."
        },
        {
          def: "Die Anweisung, die Sie an die KI senden. Eine gute Eingabeaufforderung = Rolle + Aufgabe + Kontext + Format + Einschränkungen.",
          example: "„Sie sind ein hochrangiger PM – schreiben Sie ein PRD für die folgende Anforderung …“"
        },
        {
          def: "Strukturierte Eingabeaufforderungen, wenige Beispiele, folgerichtige Argumentation.",
          example: "Strukturierte Eingabeaufforderungen, wenige Beispiele, folgerichtige Argumentation."
        },
        {
          def: "Maximale Token, die das Modell in einem Durchgang verarbeiten kann; Darüber hinaus werden Inhalte abgeschnitten oder vergessen.",
          example: "Claude 200.000, Kimi 2 Mio. Zeichen, GPT-4o 128.000."
        },
        {
          def: "Steuert die Ausgabezufälligkeit. Niedrig = präzise und stabil; hoch = kreativ und abwechslungsreich.",
          example: "Stichprobe aus dem kleinsten Satz von Token, deren kumulative Wahrscheinlichkeit p erreicht; Steuert die Diversität und wird oft zusammen mit der Temperatur verwendet."
        },
        {
          def: "Stichprobe aus dem kleinsten Satz von Token, deren kumulative Wahrscheinlichkeit p erreicht; Steuert die Diversität und wird oft zusammen mit der Temperatur verwendet.",
          example: "Top-p=0,9 bedeutet, dass aus Token ausgewählt wird, die eine kumulative Wahrscheinlichkeit von 90 % abdecken."
        },
        {
          def: "Das Modell generiert zuverlässig plausibel klingende, aber falsche Inhalte – eine bekannte LLM-Einschränkung.",
          example: "Erfinden gefälschter Papierzitate oder falscher historischer Daten."
        },
        {
          def: "Verwendung eines trainierten Modells für neue Eingaben, um Ausgaben zu erzeugen – das Gegenteil von Training.",
          example: "ChatGPT eine Frage zu stellen und eine Antwort zu erhalten, ist eine Schlussfolgerung."
        },
        {
          def: "Das Modell erledigt eine Aufgabe allein anhand von Anweisungen und ohne Beispiele.",
          example: "Sagen Sie „in Englisch übersetzen“ und es wird ohne Beispiele übersetzt."
        },
        {
          def: "Geben Sie in der Eingabeaufforderung einige Beispiele (1–5) an, damit das Modell das Aufgabenformat schnell lernt.",
          example: "Geben Sie zwei Eingabe-Ausgabe-Paare an, und die KI behandelt neue Eingaben auf die gleiche Weise."
        },
        {
          def: "Lassen Sie die KI Schritt für Schritt die Argumentation zeigen; Verbessert die Genauigkeit bei Mathematik, Logik und anderen komplexen Aufgaben erheblich.",
          example: "„Analysieren Sie Schritt für Schritt: 3 Personen schaffen es in 5 Tagen – wie viele Tage für 6 Personen?“"
        },
        {
          def: "Durchsuchen Sie das Internet, schreiben und implementieren Sie Code, senden Sie E-Mail-Berichte.",
          example: "Durchsuchen Sie das Internet, schreiben und implementieren Sie Code, senden Sie E-Mail-Berichte."
        },
        {
          def: "Ein gepacktes Modul mit Domänenwissen, Arbeitsabläufen und Werkzeugaufrufregeln, das ein Agent dynamisch für bestimmte Aufgaben laden kann.",
          example: "Cursor-Fähigkeiten bringen der KI das Lesen/Schreiben von XLSX bei; Claude Skills-Leitfaden zum Umgang mit Dokumenten; Workctl Skills rufen Händlertools auf."
        },
        {
          def: "Ein offenes Protokoll von Anthropic, das standardisiert, wie KI-Modelle mit externen Tools und Datenquellen verbunden werden.",
          example: "AI stellt über MCP eine Verbindung zu GitHub, Datenbanken und Dateisystemen her."
        },
        {
          def: "Der LLM wählt vordefinierte Funktionen/APIs basierend auf der Benutzerabsicht aus und ruft sie auf – die Grundlage von Agenten.",
          example: "KI ruft eine Wetter-API für die Temperatur oder einen Rechner für Mathematik auf."
        },
        {
          def: "Das Modell ruft externe Tools (Suche, Codeausführung, Datenbanken usw.) auf, um das zu tun, was es nicht direkt tun kann.",
          example: "ChatGPT beim Surfen im Internet; Cursor führt Terminalbefehle aus."
        },
        {
          def: "Rufen Sie zunächst relevante Dokumente aus einer Wissensdatenbank ab und lassen Sie dann die KI-Antwort auf der Grundlage dieses Materials erstellen – wodurch Halluzinationen erheblich reduziert werden.",
          example: "Laden Sie ein Unternehmenshandbuch hoch und die KI beantwortet daraus Mitarbeiterfragen."
        },
        {
          def: "Eine automatisierte Pipeline, die mehrere KI-Schritte oder Tool-Aufrufe für End-to-End-Aufgaben verkettet.",
          example: "Eine Seite scrollen → zusammenfassen → übersetzen → per E-Mail versenden – vollautomatisch."
        },
        {
          def: "Planen und Koordinieren mehrerer Modelle, Agenten oder Tools, um logisch zusammenzuarbeiten.",
          example: "Ein Hauptagent weist Unteragenten Aufgaben zum Schreiben, Suchen und Codieren zu."
        },
        {
          def: "Mehrere KI-Agenten arbeiten bei komplexen Aufgaben mit unterschiedlichen Rollen und Kommunikation zusammen.",
          example: "Simuliertes Unternehmen: PM-Agent + Ingenieur-Agent + QA-Agent bauen zusammen."
        },
        {
          def: "Drittanbieter- oder offizielle Module, die ein KI-Produkt um zusätzliche Tools und Funktionen erweitern.",
          example: "ChatGPT-Plugin-Store, Claude-Konnektoren, Browser-Erweiterungen."
        },
        {
          def: "Ein Agent, der mit minimalem menschlichen Eingriff Ziele setzt, Schritte plant, Aktionen ausführt und sich selbst korrigiert.",
          example: "AutoGPT-, Devin- und Cursor-Agent-Modus, der Codierungsaufgaben automatisch erledigt."
        },
        {
          def: "Konvertiert Text, Bilder usw. in hochdimensionale Vektoren; Semantisch ähnliche Inhalte haben nähere Vektoren.",
          example: "Speichert und ruft hochdimensionale Vektoren mit semantischer Ähnlichkeitssuche ab – eine zentrale RAG-Komponente."
        },
        {
          def: "Speichert und ruft hochdimensionale Vektoren mit semantischer Ähnlichkeitssuche ab – eine zentrale RAG-Komponente.",
          example: "Tannenzapfen, Milvus, Chroma, Weaviate."
        },
        {
          def: "Suchen Sie nach Bedeutung und nicht nach Stichwortübereinstimmung. versteht Synonyme und Absicht.",
          example: "Durch die Suche nach „Obst“ können auch Inhalte nach „Apfel“ gefunden werden."
        },
        {
          def: "Ein 100-seitiges PDF, aufgeteilt in Abschnitte mit ca. 500 Zeichen.",
          example: "Ein 100-seitiges PDF, aufgeteilt in Abschnitte mit ca. 500 Zeichen."
        },
        {
          def: "Strukturiertes oder unstrukturiertes Wissen für die KI-Abfrage und Zitierung zur Verbesserung der Antwortgenauigkeit.",
          example: "Firmen-Wiki, Produktdokumente, FAQ integriert in den KI-Support."
        },
        {
          def: "Trainieren Sie anhand gekennzeichneter Daten, um Eingabe-Ausgabe-Zuordnungen zu erlernen.",
          example: "Beschriften Sie Katzen-/Hundebilder, um einen Klassifikator zu trainieren."
        },
        {
          def: "Verwenden Sie unbeschriftete Daten, damit das Modell verborgene Strukturen und Muster erkennt.",
          example: "Kundensegmentierung, Anomalieerkennung, Themenclusterung."
        },
        {
          def: "Wenden Sie das bei einer Aufgabe gewonnene Wissen auf eine verwandte Aufgabe an und reduzieren Sie so den Datenbedarf für die neue Aufgabe.",
          example: "Optimieren Sie ein mit ImageNet vorab trainiertes Modell für die medizinische Bildgebung."
        },
        {
          def: "Hinzufügen von Labels oder Metadaten zu Rohdaten – eine Voraussetzung für überwachtes Lernen, oft manuell durchgeführt.",
          example: "Begrenzungsrahmen für Objekte in Bildern; Stimmungsbeschriftungen im Text."
        },
        {
          def: "Organisierte Daten zum Trainieren oder Bewerten von KI-Modellen; Qualität wirkt sich direkt auf die Leistung aus.",
          example: "ImageNet (Bilder), Common Crawl (Text), SQuAD (QA)."
        },
        {
          def: "Nützliche Informationen, die aus Rohdaten extrahiert werden, aus denen das Modell lernt.",
          example: "Für die Immobilienpreisvorhersage: Fläche, Lage und Alter sind Merkmale."
        },
        {
          def: "Ein KI-Modell, das Text, Bilder, Audio, Video und andere Modalitäten gemeinsam verarbeitet.",
          example: "GPT-4o beschreibt Bilder; Zwillinge analysieren Video."
        },
        {
          def: "KI, die Bilder aus Textbeschreibungen generiert.",
          example: "Midjourney, DALL·E 3, stabile Diffusion."
        },
        {
          def: "KI, die Videos aus Text oder Bildern generiert.",
          example: "Kling AI, Runway Gen-3, Sora."
        },
        {
          def: "Wandelt Text in natürlich klingende Sprache um.",
          example: "ChatGPT-Sprachmodus, Azure TTS, ElevenLabs."
        },
        {
          def: "Wandelt menschliche Sprache automatisch in Text um.",
          example: "Siri-Diktat, Transkription von Besprechungen, Flüstern."
        },
        {
          def: "Analysiert Bildinhalte und erstellt Textbeschreibungen oder beantwortet Fragen zu Bildern.",
          example: "Fragen und Antworten zum GPT-4o-Sehvermögen, Lösung von Fotoproblemen, medizinische Bildgebungsberichte."
        },
        {
          def: "Bearbeitung von Gesichtsattributen, Latentrauminterpolation.",
          example: "Bearbeitung von Gesichtsattributen, Latentrauminterpolation."
        },
        {
          def: "Ein großes allgemeines Modell, das auf verschiedenen Daten vorab trainiert wurde und an viele nachgelagerte Aufgaben angepasst werden kann.",
          example: "GPT-4, Claude und Gemini sind Basismodelle."
        },
        {
          def: "Modellgewichte sind öffentlich; kostenlos herunterzuladen, bereitzustellen und zu ändern.",
          example: "LLaMA, DeepSeek, Mistral, Stable Diffusion."
        },
        {
          def: "Nur über API oder Produkt verfügbar; Gewichte sind nicht öffentlich.",
          example: "GPT-4, Claude, Gemini Pro."
        },
        {
          def: "Das Modell setzt Text aus dem fort, was Sie bereits geschrieben haben – eine Kernfunktion von GPT.",
          example: "KI beendet den nächsten Satz in einer E-Mail; Code-Autovervollständigung."
        },
        {
          def: "Hochparallele Chips, die Kernhardware für KI-Training und -Inferenz sind.",
          example: "NVIDIA H100 zum Training großer Modelle; RTX 4090, auf dem Stable Diffusion lokal ausgeführt wird."
        },
        {
          def: "Googles benutzerdefinierter ML-Beschleuniger; stark im TensorFlow-Ökosystem.",
          example: "Google Cloud TPU v5-Schulung Gemini."
        },
        {
          def: "Ermöglicht Entwicklern, KI-Modellfunktionen im Code aufzurufen und sie in ihre Produkte zu integrieren.",
          example: "OpenAI-API, Claude-API, Qwen-API."
        },
        {
          def: "Reduziert die Gewichtsgenauigkeit (z. B. 32-Bit → 8-Bit/4-Bit), um die Größe zu verkleinern und die Inferenz zu beschleunigen.",
          example: "Ein 70B-Modell, das für die Ausführung auf Verbraucher-GPUs quantisiert wurde."
        },
        {
          def: "Ein trainiertes Modell in die Produktion überführen, um Rückschlüsse für Benutzer oder Anwendungen zu ziehen.",
          example: "Stellen Sie für Ihr Team ein fein abgestimmtes Modell auf einem Cloud-Server bereit."
        },
        {
          def: "Ein gespeicherter Modell-Schnappschuss während des Trainings zum Fortsetzen oder Auswählen der besten Version.",
          example: "Setzen Sie das Training nach der Unterbrechung am letzten Kontrollpunkt fort."
        },
        {
          def: "Anzahl der Proben pro Trainingsiteration; wirkt sich auf Geschwindigkeit, Speicher und Konvergenzstabilität aus.",
          example: "Bei 24 GB GPU-Speicher beträgt die Stapelgröße häufig 4–32."
        },
        {
          def: "Ein vollständiger Durchgang durch den gesamten Trainingsdatensatz.",
          example: "10 Epochen bedeuten, dass der Datensatz 10 Mal gesehen wurde."
        },
        {
          def: "Ausführen des Modells auf Cloud-Servern; Benutzer rufen es über Netzwerk-APIs auf.",
          example: "ChatGPT und Claude.ai sind Cloud-Inferenz."
        },
        {
          def: "Führen Sie das Modell lokal auf Telefonen oder PCs aus – kein Netzwerk erforderlich, bessere Privatsphäre und geringere Latenz.",
          example: "Siri auf dem Gerät auf dem iPhone; Ollama führt LLaMA lokal aus."
        },
        {
          def: "Reduzieren Sie die Modellgröße und berechnen Sie durch Quantisierung, Bereinigung, Destillation usw. für eine ressourcenbeschränkte Bereitstellung.",
          example: "Ausführen eines komprimierten 1B-Modells auf einem Telefon."
        },
        {
          def: "Systematische unfaire Tendenzen in der KI, verursacht durch unausgewogene Trainingsdaten.",
          example: "Einstellung einer KI, die ein Geschlecht bevorzugt; Die Gesichtserkennung ist bei dunkleren Hauttönen weniger genau."
        },
        {
          def: "Forschung stellt sicher, dass KI-Ziele und -Verhalten mit menschlichen Werten übereinstimmen.",
          example: "RLHF als Ausrichtung; Verhinderung schädlicher Emissionen."
        },
        {
          def: "Sicherheitsmechanismen, die die KI-Ausgabe einschränken, um schädliche, illegale oder unangemessene Inhalte zu blockieren.",
          example: "Anweisungen zum Waffenbau verweigern; Filterung gewalttätiger Inhalte."
        },
        {
          def: "Angreifer verwenden böswillige Eingaben, um Systemanweisungen außer Kraft zu setzen oder zu umgehen.",
          example: "Stellen Sie sicher, dass Benutzerdaten nicht missbraucht werden und Modelle keine sensiblen Trainingsdaten preisgeben."
        },
        {
          def: "Stellen Sie sicher, dass Benutzerdaten nicht missbraucht werden und Modelle keine sensiblen Trainingsdaten preisgeben.",
          example: "Nicht direkt auf echten Kundendaten trainieren; Lokale Bereitstellung zum Schutz der Privatsphäre."
        },
        {
          def: "KI-Entscheidungen für Menschen verständlich und überprüfbar machen.",
          example: "Erklären, warum AI einen Kreditantrag abgelehnt hat."
        },
        {
          def: "Ein Rahmen für die Entwicklung und Nutzung von KI mit Fairness, Transparenz, Sicherheit und Datenschutz.",
          example: "Die KI-Prinzipien und Überprüfungsprozesse von Google und Microsoft."
        },
        {
          def: "Automatische Erkennung und Filterung schädlicher KI-generierter oder vom Benutzer bereitgestellter Inhalte.",
          example: "Filterung von Hassreden, Fehlinformationen und CSAM."
        },
        {
          def: "Spezielle Eingabeaufforderungen umgehen Sicherheitsgrenzen, sodass das Modell ansonsten verbotene Inhalte ausgibt.",
          example: "Rollenspieltricks, um Richtlinienverstöße hervorzurufen (sollten abgelehnt werden)."
        },
        {
          def: "Das Modell legt in seiner Ausgabe versehentlich vertrauliche oder private Informationen aus Trainingsdaten offen.",
          example: "Das Modell wiederholt echte E-Mails oder Passwörter aus dem Trainingssatz."
        },
        {
          def: "Stabilität bei ungewöhnlichen Eingaben, gegnerischen Angriffen oder Verteilungsverschiebungen.",
          example: "Ich gebe trotz Tippfehlern oder böswilligen Störungen immer noch vernünftige Antworten."
        }
      ]
  });
})();
