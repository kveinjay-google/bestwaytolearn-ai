/* DE overlays — devices */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('de', {
    deviceOsCompare: {
        windows: {
          title: "Größte Kompatibilität und das ausgereifteste lokale KI-Ökosystem",
          tagline: "Größte Kompatibilität und das ausgereifteste lokale KI-Ökosystem",
          chooseWhen: [
            "Sie möchten einen Desktop erstellen und im Laufe der Zeit RAM und GPU aufrüsten",
            "Am Arbeitsplatz oder in der Schule läuft es mit Office-, CAD- oder Industrie-Windows-Software",
            "Sie spielen AAA-Spiele und möchten KI-Experimente auf demselben Computer durchführen",
            "Sie spielen AAA-Spiele und möchten KI-Experimente auf demselben Computer durchführen",
            "Sie verlassen sich auf die CUDA-Toolchain (Training, Inferenz, Entwicklungsframeworks)"
          ],
          avoidWhen: [
            "Sie liefern hauptsächlich iOS-/macOS-Apps (für endgültige Builds benötigen Sie immer noch einen Mac).",
            "Sie legen Wert auf Ruhe, Akkulaufzeit und ein ausgefeiltes mobiles Erlebnis",
            "Ollama, LM Studio und Stable Diffusion WebUI verfügen über die meisten Tutorials und die reibungslosesten Treiber unter Windows. RTX-Karten sind die preiswerte Wahl für lokale KI."
          ],
          aiNote: "Ollama, LM Studio und Stable Diffusion WebUI verfügen über die meisten Tutorials und die reibungslosesten Treiber unter Windows. RTX-Karten sind die preiswerte Wahl für lokale KI."
        },
        macos: {
          title: "macOS",
          tagline: "Verfeinertes Erlebnis, nahtloses Apple-Ökosystem, einheitlicher Speicher für leichtere lokale Modelle",
          chooseWhen: [
            "Sie verwenden bereits ein iPhone/iPad und möchten AirDrop, Handoff und iCloud in einem Durchgang",
            "Sie verwenden hauptsächlich Cloud-KI plus leichte lokale Modelle (z. B. Ollama 7B Quant).",
            "Sie verwenden hauptsächlich Cloud-KI plus leichte lokale Modelle (z. B. Ollama 7B Quant).",
            "Sie wünschen sich einen minimalen Aufwand für den Fahrer und ein echtes, sofort einsatzbereites Lernsetup",
            "Sie wünschen sich einen minimalen Aufwand für den Fahrer und ein echtes, sofort einsatzbereites Lernsetup"
          ],
          avoidWhen: [
            "Sie benötigen CUDA oder viele reine NVIDIA-KI-Tools",
            "Sie möchten lokale 30B+-Modelle oder LoRA-Training (die Speicherkosten sind hoch)",
            "Das Budget ist knapp, aber Sie benötigen eine hohe Rechenleistung (Windows-GPUs kosten pro Dollar mehr)",
            "Sie sind auf professionelle Software angewiesen, die nur für Windows verfügbar ist"
          ],
          aiNote: "Der einheitliche Speicher von Apple Silicon fungiert als VRAM: 36 GB sind komfortabel für 13 B, 64 GB für 34 B Quant, 128–512 GB (Mac Studio/Pro) für lokale Inferenz der 70B-Klasse und schwere kreative Arbeit. Kein CUDA – bevorzugen Sie Ollama, MLX und LM Studio."
        }
      },
      deviceMemoryTiers: [
        {
          level: "Nicht empfohlen",
          suitable: "Nur Surfen im Internet und Einzelaufgaben im Büro",
          aiUse: "Cloud AI ist kaum nutzbar; Chrome + ChatGPT mit vielen Tabs stottern",
          verdict: "Die Untergrenze von 2026 für das Erlernen von KI reicht nicht mehr aus. Kaufen Sie mindestens 16 GB; Kaufen Sie keine neuen 8-GB-Maschinen."
        },
        {
          level: "Einstiegsstandard",
          suitable: "Cloud-KI als Hauptpfad, Office-Schreiben, Light-Coding",
          aiUse: "ChatGPT/Claude-Web- und Desktop-Apps laufen reibungslos; Ollama 3B–7B ist möglich, aber langsam",
          verdict: "Sehr empfehlenswert"
        },
        {
          level: "Sehr empfehlenswert",
          suitable: "KI-gestützte Codierung, mehrere Projekte, lokale 7B–13B-Modelle",
          aiUse: "Cursor + Browser + ein lokales Modell zusammen ohne Anstrengung; quantisiertes 13B ist realisierbar",
          verdict: "Wenn Sie es mit KI und realen Projekten ernst meinen, sind 32 GB die preiswerteste Wahl, bei der Sie kein Bedauern befürchten müssen."
        },
        {
          level: "MacBook Pro M3 Max · Windows-Workstation",
          platform: "MacBook Pro M3 Max · Windows-Workstation",
          suitable: "Umfangreiche Entwicklung, 4K-Bearbeitung, lokale ~30 Milliarden Modelle, mehrere VMs",
          aiUse: "34B Quant Inference, ComfyUI + Cursor zusammen, viele Docker-Dienste parallel",
          verdict: "Der Profi-Ausgangspunkt. Mac 64 GB Unified Memory verhält sich wie ein Laptop mit großem VRAM; Windows-Desktops können später auf 128 GB erweitert werden."
        },
        {
          level: "Flaggschiff-Workstation",
          platform: "Mac Studio M2/M3 Ultra · High-End-Windows-Workstation",
          suitable: "Lokale Modelle der 70B-Klasse, lange KI-Videoarbeit, viele parallele Projekte, Entwicklungsumgebungen für kleine Teams",
          aiUse: "70B Quant Inference, multimodale LLMs, Batch-Bild-/Videogenerierung, 2–3 mittelgroße Modelle gleichzeitig",
          verdict: "Apples 128-GB-Unified-Memory-Sweetspot (Studio Ultra). Für Menschen, die KI als Produktion und nicht als Spielzeug betrachten."
        },
        {
          level: "Kreatives auf höchstem Niveau",
          platform: "Mac Studio / Mac Pro (BTO) · Threadripper-Workstation",
          suitable: "Sehr lange Kontextexperimente, Modellwechsel, 8K-Filmmaterial + KI-Effekte, lokale Wissensdatenbank-Cluster",
          aiUse: "Ein Content-Factory-/Ingenieur-Budget. Mac 256 GB ist normalerweise nur BTO; Bestätigen Sie vor der Bestellung, dass Sie später kein Upgrade durchführen können.",
          verdict: "Ein Content-Factory-/Ingenieur-Budget. Mac 256 GB ist normalerweise nur BTO; Bestätigen Sie vor der Bestellung, dass Sie später kein Upgrade durchführen können."
        },
        {
          level: "Extreme Spezifikation",
          platform: "Mac Pro M2 Ultra mit maximaler Konfiguration · Workstation der Serverklasse",
          suitable: "Forschungslabore, Filmpost, KI-Ingenieurteams, private LLM-Bereitstellung vor Ort",
          aiUse: "Multi-User-/Multi-Modell-Parallelität, riesiger Kontext, leichte Feinabstimmungsexperimente, Echtzeit-KI in riesigen Medienbibliotheken",
          verdict: "Das brauchen nur sehr wenige Menschen. Für die meisten Lernenden sind 32–64 GB ausreichend; 512 GB sind für „Mein Schreibtisch ist das Rechenzentrum“-Szenarios vorgesehen."
        }
      ],
      deviceGpuTiers: [
        {
          tier: "Integrierte / keine separate GPU",
          forWho: "Cloud-only KI-Lernen, Büroarbeit, Schreiben",
          canDo: "Reibungslose lokale SD-Bildgenerierung, 13B+-Modellinferenz, CUDA-Training",
          cannotDo: "Reibungslose lokale SD-Bildgenerierung, 13B+-Modellinferenz, CUDA-Training",
          examples: "Integrierte Intel-Grafik, AMD Radeon iGPU, MacBook Air M2/M3",
          verdict: "Diskreter Einstiegs-GPU"
        },
        {
          tier: "Diskreter Einstiegs-GPU",
          forWho: "Lernende probieren lokale KI und Lichtbilderzeugung aus",
          canDo: "SD 1,5 bei niedriger Auflösung, Ollama 7B Quant, grundlegende LoRA-Inferenz",
          cannotDo: "Vollpräzises FLUX, 70B-Modelle, groß angelegte Schulung",
          examples: "RTX 3050 6 GB, RTX 4050 6 GB, RTX 4060 Laptop 8 GB",
          verdict: "Eine Eintrittskarte zur lokalen KI. Bevorzugen Sie Desktops; Die Thermik des Laptops begrenzt die Dauerbelastung."
        },
        {
          tier: "Diskrete GPU der Mittelklasse",
          forWho: "KI-Nebenauftritte, tägliche Bildgenerierung, lokale Entwicklung und Debugging",
          canDo: "SDXL, quantisierter FLUX, 13B-Modelle, ComfyUI-Workflows, leichte Feinabstimmung",
          cannotDo: "70B volle Präzision, Multi-GPU-Training",
          examples: "RTX 4060 Ti 16 GB, RTX 4070 12 GB, RTX 4070 Laptop",
          verdict: "Der Sweet Spot für lokale KI-Werte. Die 4060 Ti 16GB ist besonders stark für Image-Gen+-Modelle zusammen."
        },
        {
          tier: "Diskrete High-End-GPU",
          forWho: "KI-Ingenieure, starke Schöpfer, kleine Schulungen",
          canDo: "34B–70B Quant Inference, lokale Video-Gen-Tests, LoRA-Training, mehrere Modelle parallel",
          cannotDo: "Große kommerzielle Schulung (benötigt noch Cloud/A100-Cluster)",
          examples: "RTX 4080 16 GB, RTX 4090 24 GB, RTX 5090",
          verdict: "Lokale KI-Obergrenze für eine einzelne GPU. Nur wenn das Budget solide ist und Sie sich für den lokalen Weg einsetzen."
        },
        {
          tier: "Apple einheitlicher Speicher",
          forWho: "Mac-Benutzer, mobiles Arbeiten, leichtere lokale Modelle",
          canDo: "Ollama 7B–13B (von RAM), MLX-Framework, Cloud AI als Haupt-Engine",
          cannotDo: "CUDA-Ökosystem, nur für NVIDIA optimierte Tools, kostengünstiger großer VRAM",
          examples: "M3 24 GB, M3 Pro 36 GB, M3 Max 64 GB, Studio Ultra 128–192 GB, Mac Pro 256–512 GB",
          verdict: "36 GB ≈ komfortable 13 GB; 64 GB ≈ 34 B; 128 GB+ können eine Quantität von 70 GB erreichen. Beim Speicher handelt es sich um VRAM – konfigurieren Sie ihn vor dem Kauf."
        }
      ],
      deviceStorageTiers: [
        {
          verdict: "Nur Cloud-Benutzer; OS + Apps füllen es schnell – nicht empfohlen."
        },
        {
          verdict: "Gut geeignet für den Einstieg; Einige KI-Apps lassen nur wenig Spielraum – Sie müssen mit häufigen Bereinigungen rechnen."
        },
        {
          verdict: "Mainstream-Empfehlung. Ausreichend für Entwicklungsumgebungen, Modell-Caches und Asset-Bibliotheken."
        },
        {
          verdict: "Lokale Modellbibliotheken, 4K-Medien, mehrere VMs – der Standard für Ersteller und Ingenieure."
        }
      ],
      deviceAiBoxes: {
        "dgx-spark": {
          title: "NVIDIA DGX Spark",
          budget: "ca. 3.150–4.570 $",
          form: "Desktop-KI-Supercomputer-Box (150×150×50 mm)",
          os: "NVIDIA DGX-Betriebssystem (Linux)",
          bestFor: "KI-Ingenieure, Forscher und Entwickler, die lokale Agenten und große Modelle auf dem Schreibtisch haben möchten",
          tradeoff: "Arm-Architektur und ein relativ geschlossener Stack – einige x86/Windows-Tools müssen portiert werden; Verfügbarkeit und Support außerhalb der großen Märkte variieren; Vergleichen Sie nach Preiserhöhungen den Wert mit einem DIY-RTX-5090-Build.",
          vsDiy: "im Vergleich zu einer selbstgebauten 128-GB-Workstation: DGX Spark ist kleiner, wird mit einem vollständigen Software-Stack ausgeliefert und läuft sofort mit großen Modellen; Ein selbstgebautes Windows/Linux-Dual-GPU-Rig bietet mehr CUDA-Tutorials und austauschbare GPUs für langfristiges Basteln.",
          specs: {
            chip: "GB10: 20-Kern-Arm + Blackwell-GPU, Tensorkerne der 5. Generation",
            memory: "128 GB LPDDR5x Unified Memory (gemeinsam genutzte CPU/GPU)",
            storage: "4 TB NVMe M.2 (selbstverschlüsselnd)",
            aiCompute: "Bis zu ~1 PFLOP (FP4); ConnectX-7 200 Gbit/s",
            networking: "10GbE + Wi-Fi 7; Dual-Unit-Link skaliert auf Modelle der ~405B-Klasse"
          },
          capabilities: {
            inference: "Einzelgerät: bis zu ~200B Parameter",
            finetune: "Feinabstimmung von bis zu ~70B Parametern",
            agents: "Vorinstallierter NIM, TensorRT, NemoClaw/OpenShell-Agentenstack"
          },
          reasoning: [
            "Positioniert als „kleinster KI-Supercomputer der Welt“ – 1,2 kg auf Ihrem Schreibtisch, ~240 W, weitaus leiser als ein vollwertiger Tower",
            "Der DGX OS + NVIDIA AI-Stack ist beim ersten Start bereit – überspringen Sie die Einrichtung von CUDA/Treiber/Container",
            "Der DGX OS + NVIDIA AI-Stack ist beim ersten Start bereit – überspringen Sie die Einrichtung von CUDA/Treiber/Container",
            "Gut für Prototyping, Feinabstimmung und Schlussfolgerungen vor dem Wechsel zur DGX Cloud oder einem Rechenzentrum"
          ],
          oemVariants: []
        },
        "gb10-oem": {
          title: "GB10 OEM-Ökosystem (gleicher Chip)",
          budget: "ca. 3.150–5.000 $",
          form: "Teams, die GB10-Rechenleistung wünschen, aber Unternehmensbeschaffung und Markensupport bevorzugen",
          os: "DGX OS oder vom Anbieter angepasstes Linux",
          bestFor: "Teams, die GB10-Rechenleistung wünschen, aber Unternehmensbeschaffung und Markensupport bevorzugen",
          tradeoff: "Konfigurationen und Preise unterscheiden sich stark – bestätigen Sie vor dem Kauf die vollständige NVIDIA AI-Softwarelizenzierung; nicht unbedingt günstiger als DGX Spark vom Erstanbieter.",
          vsDiy: "Wählen Sie entweder dieses oder DGX Spark – beides ist nicht erforderlich. Wenn Sie bereits Verträge mit IT-Anbietern haben, fragen Sie zuerst die OEMs; Einzelne Entwickler finden DGX Spark normalerweise einfacher.",
          specs: {
            chip: "Gleicher GB10-Superchip wie DGX Spark",
            memory: "128 GB einheitlicher Speicher",
            storage: "2–4 TB NVMe (variiert je nach Marke)",
            aiCompute: "Gleiche Klasse wie DGX Spark, ~1 PFLOP FP4",
            networking: "Die meisten verfügen über Hochgeschwindigkeits-Ethernet. Einige Modelle bieten eine reichhaltigere Erweiterung"
          },
          capabilities: {
            inference: "Wie DGX Spark, ~200B Parameter",
            finetune: "~70B Parameter-Feinabstimmung",
            agents: "Die Unterstützung von NVIDIA AI Enterprise/NIM hängt vom Anbieterpaket ab"
          },
          reasoning: [
            "Compute stimmt mit DGX Spark überein; Unterschiede bestehen in der Gehäusekühlung, den Anschlüssen, der Garantie und den Vorinstallationsdiensten",
            "Compute stimmt mit DGX Spark überein; Unterschiede bestehen in der Gehäusekühlung, den Anschlüssen, der Garantie und den Vorinstallationsdiensten",
            "Unternehmenskäufer können die Standard-IT-Beschaffung und das Asset-Management durchführen",
            "Am besten, wenn Sie sich für NVIDIA CUDA entschieden haben und keinen Serverraum bauen möchten"
          ],
          oemVariants: [
            "ASUS Ascent GX10",
            "Dell Pro Max",
            "Dell Pro Max",
            "Lenovo KI-Workstation",
            "Acer Veriton GN100",
            "GIGABYTE AI TOP ATOM",
            "MSI AI-Desktop"
          ]
        },
        "ryzen-ai-halo": {
          title: "AMD Ryzen AI Halo · 128 GB Mini-PC",
          budget: "ca. 2.000–4.000 $",
          form: "Mini-KI-PC (~193×186×77 mm)",
          os: "Windows 11 Pro / Ubuntu",
          bestFor: "Fortgeschrittene Lernende und Indie-Entwickler, die 128 GB lokale LLMs zum Preis von DGX Spark wünschen",
          tradeoff: "Kein CUDA; PyTorch ROCm ist immer noch schwächer als NVIDIA; RAM ist verlötet; Der Support und die Qualitätskontrolle für Mini-PCs von Drittanbietern variieren je nach Marke.",
          vsDiy: "im Vergleich zu einem selbstgebauten 128-GB-DDR5-Desktop: Halo-Boxen sind kleiner und verfügen über eine verwaltete Stromversorgung; DIY ermöglicht GPU-Austausch und RAM-Upgrades mit mehr Spielraum in 3–5 Jahren. vs. DGX Spark: AMD ist günstiger und Windows-freundlich, aber das Tuning großer Modelle und offizielle Stacks sind weniger vollständig.",
          specs: {
            chip: "16-Kern/32-Thread Zen 5, bis zu 5,1 GHz; 50 TOPS NPU",
            memory: "64/128 GB LPDDR5X 8000 MHz verlöteter Unified-Speicher",
            storage: "2–4 TB PCIe 4.0 SSD; Dual M.2 erweiterbar auf bis zu 16 TB",
            aiCompute: "Radeon 8060S 40CU RDNA 3.5; gesamter SoC ~126 TOPS",
            networking: "2,5 GbE + Wi-Fi 7 + Dual USB4"
          },
          capabilities: {
            inference: "128-GB-Modell: 70B Quant, Qwen3 235B Quant, Llama4 109B und ähnliches",
            finetune: "Light LoRA ist machbar; Große Schulungen gehören immer noch in die Cloud",
            agents: "OpenClaw, lokale Wissensdatenbanken, LM Studio / Ollama"
          },
          reasoning: [
            "128-GB-Konfigurationen wie GMKtec EVO-X2 und Geekom A9 Max liegen im Bereich von etwa 2.000 US-Dollar – deutlich unter GB10-Boxen",
            "128-GB-Konfigurationen wie GMKtec EVO-X2 und Geekom A9 Max liegen im Bereich von etwa 2.000 US-Dollar – deutlich unter GB10-Boxen",
            "Windows sofort einsatzbereit; Ollama / LM Studio / llama.cpp lassen sich schnell übernehmen",
            "RDNA iGPU übernimmt auch Spiele und leichte ComfyUI-Image-Arbeiten – eine Maschine, viele Rollen"
          ],
          oemVariants: [
            "GMKtec EVO-X2",
            "Geekom A9 Max",
            "Minisforum und andere Strix Halo-Modelle"
          ]
        },
        "dual-dgx-spark": {
          title: "Dualer DGX Spark-Cluster",
          budget: "ca. 6.300–9.150 $",
          form: "Zwei Desktop-Geräte + Hochgeschwindigkeitsverbindung",
          os: "NVIDIA DGX-Betriebssystem",
          bestFor: "Forschungsgruppen, KI-native Startups und Randfälle, die riesige lokale Modelle ohne Cloud benötigen",
          tradeoff: "Die Gesamtkosten nähern sich einem High-End-Mac Pro; Sie pflegen immer noch Cluster-Software – ein Overkill für etwa 99 % der einzelnen Lernenden.",
          vsDiy: "im Vergleich zu einem 4×4090-Server: Dual Spark ist leiser, verbraucht weniger Strom und ist für den Schreibtisch geeignet; Multi-GPU-x86-Rigs bieten einen höheren Trainingsdurchsatz und einen ausgereiften Markt für gebrauchte GPUs.",
          specs: {
            chip: "Zwei GB10-Einheiten, verbunden über ConnectX-Hochgeschwindigkeitsnetzwerk",
            memory: "256 GB einheitlicher Speicherpool (128 GB × 2)",
            storage: "8 TB NVMe kombiniert (4 TB × 2)",
            aiCompute: "~2 PFLOP FP4 kombiniert",
            networking: "Bis zu ~405B Parametermodellinferenz"
          },
          capabilities: {
            inference: "Bis zu ~405B Parametermodellinferenz",
            finetune: "Größere verteilte Feinabstimmungsexperimente",
            agents: "Multi-Agent-Parallelität, sehr großes Kontext-Routing"
          },
          reasoning: [
            "NVIDIA unterstützt offiziell die Verknüpfung zweier DGX Spark-Einheiten und durchbricht damit die Inferenzobergrenze von ca. 200 B für eine einzelne Box",
            "Weitaus günstiger als eine DGX-Station und deckt gleichzeitig Experimente der ~400B-Klasse ab",
            "Wenn sie nicht geclustert sind, kann jede Box ihre Rollen aufteilen – eine für Inferenz, eine für die Feinabstimmung",
            "Wenn sie nicht geclustert sind, kann jede Box ihre Rollen aufteilen – eine für Inferenz, eine für die Feinabstimmung"
          ],
          oemVariants: []
        }
      },
      devicePresets: {
        "cloud-starter": {
          title: "Cloud-Lernstarter",
          budget: "ca. 570–860 $",
          form: "Ultrabook",
          os: "Abschluss des 7-Tage-Pfads dieser Website, tägliches ChatGPT/Claude-Lernen, Schreiben im Büro",
          bestFor: "Abschluss des 7-Tage-Pfads dieser Website, tägliches ChatGPT/Claude-Lernen, Schreiben im Büro",
          reasoning: [
            "Etwa 90 % des Lernens findet im Browser und in Apps statt – es ist keine lokale Rechenleistung erforderlich",
            "16 GB sorgen dafür, dass viele Registerkarten und KI-Clients reaktionsfähig bleiben",
            "Ultrabooks sind tragbar – in der Bibliothek, im Café, überall",
            "Sparen Sie zunächst das Budget für ein bis zwei Monate dauernde KI-Tool-Abonnements"
          ],
          tradeoff: "Nicht geeignet für lokale Modelle oder SD-Image-Generierung; Schwere Multi-Repo-Codierung kann sich eng anfühlen.",
          specs: {
            gpu: "Integrierte Grafik"
          }
        },
        "coding-mac": {
          title: "Codierung + Apple-Ökosystem",
          budget: "ca. 1.290–2.000 $",
          form: "MacBook Air / Pro",
          os: "macOS",
          bestFor: "Cursor-Entwicklung, iOS-Lernen, Apple-Gerätesynergie, Cloud-KI als Hauptmotor",
          reasoning: [
            "Chips der M-Serie lassen sich schnell kompilieren und haben eine lange Akkulaufzeit – hervorragende mobile Codierung",
            "Die Übergabe mit iPhone/iPad ermöglicht eine nahtlose Recherche und App-Tests",
            "Die Übergabe mit iPhone/iPad ermöglicht eine nahtlose Recherche und App-Tests",
            "Vollständige Apple-Toolchain: Final Cut, Keynote und mehr"
          ],
          tradeoff: "24–36 GB einheitlicher Speicher",
          specs: {
            ram: "Integrierte Grafik (Unified Memory)",
            gpu: "Integrierte Grafik (Unified Memory)",
            storage: "512 GB–1 TB"
          }
        },
        "coding-win": {
          title: "Arbeitstier der KI-Codierung",
          budget: "ca. 1.000–1.430 $",
          form: "Windows-Laptop / kompakter Desktop",
          os: "Windows 11",
          bestFor: "Cursor, VS-Code, Docker, KI-gestützte Multi-Repo-Entwicklung",
          reasoning: [
            "32 GB ist die „Kein Bedauern“-Grenze für die KI-Codierung – viele Repos + Browser + KI zusammen",
            "1 TB SSD für WSL, Docker-Images und mehrere Node-/Python-Umgebungen",
            "1 TB SSD für WSL, Docker-Images und mehrere Node-/Python-Umgebungen",
            "1 TB SSD für WSL, Docker-Images und mehrere Node-/Python-Umgebungen"
          ],
          tradeoff: "Versionen mit diskreter GPU sind schwerer und teurer; Integrierte Grafiken schränken die lokale KI ein.",
          specs: {
            gpu: "Integrierte Grafik oder RTX 4050"
          }
        },
        "local-ai": {
          title: "Lokale KI-Workstation",
          budget: "ca. 1.710–2.570 $",
          form: "Windows-Desktop/Gaming-Laptop",
          os: "Windows 11",
          bestFor: "Lokale Ollama-Modelle, ComfyUI-Bildgenerierung, KI-Nebeneinkommensprojekte",
          reasoning: [
            "Die RTX 4060 Ti 16 GB ist der Wertkönig für lokale KI im Jahr 2026 – genug VRAM für SDXL und 13 B",
            "32 GB System-RAM lassen Spielraum beim Laden von Modellen",
            "Desktops kühlen besser – nachhaltige Rückschlüsse ohne Drosselung",
            "Günstiger als Mac bei ähnlicher Rechenleistung; CUDA-Tutorials gibt es überall"
          ],
          tradeoff: "Nicht tragbar; höherer Stromverbrauch; Laptop-Konfigurationen drosseln bei längerer Belastung."
        },
        "creator-pro": {
          title: "Kreative Produktion",
          budget: "ca. 2.570–4.290 $",
          form: "MacBook Pro / Windows Creator-Laptop",
          os: "macOS / Windows",
          bestFor: "KI-Video, Batch-Bildgenerierung, Podcast-Bearbeitung, lokale Modellexperimente der 70B-Klasse",
          reasoning: [
            "Von 64 GB können Sie 34B Quant ausführen; 128 GB Studio Ultra erreicht ~70 B lokale Inferenz",
            "2 TB für Modellgewichte, Medienbibliotheken und Projektarchive",
            "Konfigurieren Sie auf dem Mac den Speicher für einen Zeitraum von drei Jahren – später keine Upgrades; Wählen Sie unter Windows RTX 4070+",
            "Verwandeln Sie das, was Sie hier lernen, in inhaltliche oder gestalterische Nebeneinnahmen"
          ],
          tradeoff: "Hoher Preis; Anfänger sollten vor dem Kauf die Richtung in der Cloud überprüfen.",
          specs: {
            ram: "64–128 GB einheitlicher Speicher / 64 GB+",
            gpu: "Hoher Speicher integriert / RTX 4070+"
          }
        },
        "desktop-value": {
          title: "Desktop-Wertaufbau",
          budget: "ca. 1.140–1.710 $",
          form: "DIY-Desktop",
          os: "Windows 11",
          bestFor: "RTX 4060 8 GB reichen für SD- und 7B-Einstiegsmodelle",
          reasoning: [
            "RTX 4060 8 GB reichen für SD- und 7B-Einstiegsmodelle",
            "RTX 4060 8 GB reichen für SD- und 7B-Einstiegsmodelle",
            "32 GB RAM können auf 64 GB erweitert werden und die Lebensdauer um 3–5 Jahre verlängern",
            "Ideal für festes Lernen zu Hause mit ComfyUI- und Ollama-Experimenten"
          ],
          tradeoff: "Nicht mobil; etwas Montage- und Wartungs-Know-how hilft."
        },
        "luxury-mbp": {
          title: "Mobiles Flaggschiff · MacBook Pro",
          budget: "ca. 6.430–9.710 $",
          form: "MacBook Pro 16\"",
          os: "macOS",
          bestFor: "34B–70B Experimente unterwegs, mobile Bearbeitung, Demos auf Reisen",
          reasoning: [
            "128 GB sind die heutige Speicherobergrenze für MacBooks – Ihr gesamtes KI-Labor in einer Tasche",
            "M4 Max ist ein starker Single- und Multi-Core; Cursor + Final Cut + Ollama zusammen ist in Ordnung",
            "Entwickelt für Gründer und Kreativdirektoren, die oft fliegen und in vielen Städten arbeiten",
            "Wenn Sie das Pro Display XDR zu Hause hinzufügen, wird es zu einem Schreibtisch-Arbeitsplatz"
          ],
          tradeoff: "Sehr hohe Prämie; Die Thermik bleibt den Desktops immer noch hinterher – lange 70B-Läufe werden gedrosselt.",
          specs: {
            ram: "64–128 GB einheitlicher Speicher",
            gpu: "Integrierte Grafik (Unified Memory)",
            storage: "2–4 TB SSD"
          }
        },
        "luxury-studio": {
          title: "ca. 11.430–17.140 $",
          budget: "ca. 11.430–17.140 $",
          form: "Mac Studio",
          os: "macOS",
          bestFor: "Persönliches KI-Kreativstudio, 70B lokale Inferenz, leiser High-Spec-Desktop",
          reasoning: [
            "Winziges, nahezu geräuschloses Gehäuse – elegant auf einem Schreibtisch im Vergleich zu wassergekühlten Towern",
            "Winziges, nahezu geräuschloses Gehäuse – elegant auf einem Schreibtisch im Vergleich zu wassergekühlten Towern",
            "Das MLX + Ollama-Ökosystem ist für schwere Apple-Haushalte ausgereift",
            "Deckt ca. 90 % der lokalen KI-Anwendungsfälle zu einem deutlich günstigeren Preis als der Mac Pro ab"
          ],
          tradeoff: "Speicher und Speicher sind BTO und fest; kein CUDA – für einige Recherchetools sind Workarounds erforderlich.",
          specs: {
            ram: "128–192 GB einheitlicher Speicher",
            gpu: "Apple-Decke · Mac Pro",
            storage: "2–4 TB SSD"
          }
        },
        "luxury-macpro": {
          title: "Apple-Decke · Mac Pro",
          budget: "ca. 25.700–64.300 $",
          form: "Mac Pro-Tower",
          os: "macOS",
          bestFor: "Filmstudios, KI-native Teams, private Großmodelle, Multi-Stream 8K",
          reasoning: [
            "Der einheitliche Speicher von 512 GB ist einzigartig unter Verbrauchergeräten – mehrere große Modelle sind gleichzeitig vorhanden",
            "Für Teams, die die Cloud ablehnen, aber RAM der Rechenzentrumsklasse benötigen",
            "After Effects + ComfyUI + ein lokaler 70B-Assistent im Wechsel",
            "Statussymbol innerhalb des Apple-Ökosystems – mit echtem Durchsatz, nicht mit Regaldekor"
          ],
          tradeoff: "Extremer Preis; M2 Ultra ist eine Generation hinter M4 für Rohdatenverarbeitung im Vergleich zu ähnlich teuren NVIDIA-Clustern.",
          specs: {
            ram: "256–512 GB einheitlicher Speicher",
            gpu: "Integrierte Grafik (76-Core-GPU)",
            storage: "4–8 TB SSD"
          }
        },
        "luxury-dual-gpu": {
          title: "Biest mit zwei GPUs · NVIDIA-Workstation",
          budget: "ca. 11.430–25.700 $",
          form: "Full-Tower-Workstation",
          os: "Windows 11 / Linux",
          bestFor: "CUDA-Power-User, LoRA-Schulung, mehrere ComfyUI-Pipelines, Feinabstimmung lokaler Modelle",
          reasoning: [
            "Dual 4090 = 48 GB VRAM-Pool – parallele SDXL/FLUX-Workflows etwa 2× eine einzelne Karte",
            "128 GB System-RAM + großer VRAM sind die harte Obergrenze für die lokale KI von Windows",
            "Ollama-, ComfyUI- und PyTorch-Tutorials sind hier am umfangreichsten – bei Ingenieuren beliebt",
            "GPUs tauschen und RAM später erweitern – „bastelbarer“ als bei Apple"
          ],
          tradeoff: "Laut, stromhungrig, schreibtischfüllend; Fahrer und Umgebung benötigen ständige Pflege.",
          specs: {
            gpu: "2× RTX 4090 24GB oder 2× RTX 5090",
            storage: "4 TB NVMe RAID"
          }
        },
        "luxury-apple-win": {
          title: "Duales Setup · Mac + Windows",
          budget: "ca. 21.430–40.000 $",
          form: "Mac Studio + Windows-Tower",
          os: "macOS + Windows",
          bestFor: "Ultimative Benutzer, die ein tägliches Apple-Erlebnis und vollständiges CUDA wünschen",
          reasoning: [
            "Der Mac übernimmt die tägliche kreative Arbeit, Mobilität, Final Cut und MLX-Light-Inferenz",
            "Windows Tower führt ComfyUI-Batches, CUDA-Training und Spiele aus",
            "NAS oder 10GbE LAN nutzen Modelle und Medien gemeinsam – komplementär, nicht dupliziert",
            "Wie viele echte KI-Studios setzen sich durch: nicht eine Omni-Maschine, sondern klare Arbeitsteilung"
          ],
          tradeoff: "Höchste Gesamtkosten; Kabel- und Synchronisierungsaufwand – weit über das hinaus, was die meisten Menschen benötigen.",
          specs: {
            ram: "128 GB + 128 GB",
            gpu: "Apple integriert + RTX 4090",
            storage: "Jeweils 4 TB"
          }
        }
      },
      deviceSubsections: {
        needs: {
          title: "① Beginnen Sie mit Ihrem Hauptanwendungsfall",
          desc: "Wählen Sie die Option aus, die Ihnen am nächsten liegt. Die unten aufgeführten passenden Voreinstellungen werden automatisch hervorgehoben."
        },
        os: {
          title: "② Windows oder macOS?",
          desc: "Keines von beiden ist allgemein besser – passen Sie Ihr Software-Ökosystem und Ihre KI-Roadmap an."
        },
        memory: {
          title: "③ Wie viel RAM?",
          desc: "RAM ist der erste Hebel für KI-Multitasking. Windows-RAM kann später erweitert werden; Apple Silicon verwendet Unified Memory (RAM = VRAM). Mac Studio/Pro bietet 128–512 GB."
        },
        gpu: {
          title: "④ Welche GPU-Stufe?",
          desc: "Nur-Cloud-Lernende können diskrete GPUs ignorieren; Lokale Bildgenerierung und Modelle benötigen ernsthaften VRAM."
        },
        storage: {
          title: "⑤ Speicherkapazität",
          desc: ""
        },
        aiBoxes: {
          title: "⑥ Dedizierte KI-Rechnerboxen",
          desc: ""
        },
        presets: {
          title: "⑦ Empfohlene Konfigurationen",
          desc: "Vom Einstieg bis zu <strong>kompromisslosen Builds</strong> – wählen Sie oben „Kompromisslos“ aus, um schnell zu filtern. Jeder erklärt, für wen es gedacht ist, warum es so konfiguriert ist und welche Kompromisse es gibt."
        }
      },
      deviceFieldLabels: {
        chooseWhen: "Wann man es wählt",
        avoidWhen: "Wann sollte man es überspringen?",
        aiNotePrefix: "KI-Lerntipp:",
        commonModels: "Gängige Modelle:",
        suitable: "Am besten für:",
        aiCapability: "KI-Fähigkeit:",
        recommendedApps: "Empfohlene Apps",
        forWho: "Am besten für:",
        canDo: "Kämpft / kann nicht:",
        cannotDo: "Kämpft / kann nicht:",
        examples: "Beispielhardware:",
        ram: "Erinnerung",
        gpu: "GPU",
        storage: "Lagerung",
        needResultPrefix: "Empfohlener Fokus:",
        needResultEmpty: "noch keine",
        weekN: "Woche {n}",
        focusThisWeek: "Konzentrieren Sie sich diese Woche",
        practice1: "Übung 1",
        practice2: "Übung 2"
      }
  });
})();
