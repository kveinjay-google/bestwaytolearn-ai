/* DE overlays — tools-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('de', {
    toolsNav: {
        meta: {
          lead: "Durchsuchen Sie vertrauenswürdige KI-Tools nach Anwendungsfall und springen Sie zu offiziellen Websites. Elemente mit dem Tag „Hier vorgestellt“ sind in unserem Lehrplan-App-Leitfaden enthalten.",
          searchPlaceholder: "Hier vorgestellt",
          featuredBadge: "Hier vorgestellt",
          countLabel: "{n} Werkzeuge",
          totalLabel: "{n} Werkzeuge · {c} Kategorien",
          empty: "Keine passenden Werkzeuge. Versuchen Sie es mit einem anderen Schlüsselwort.",
          openSite: "Website öffnen"
        },
        categories: {
          "对话助手": "Chat-Assistenten",
          "编程开发": "Codierung & Entwicklung",
          "图像创作": "Bilderstellung",
          "视频音频": "Video und Audio",
          "办公效率": "Produktivität",
          "搜索研究": "Suchen und recherchieren",
          "Agent 自动化": "Agenten und Automatisierung",
          "设计原型": "Design und Prototyping",
          "营销写作": "Marketing & Schreiben",
          "本地与开源": "Lokal und Open Source"
        },
        tools: {
          Poe: {
            desc: "Multi-Modell-Chat-Hub – Wechseln Sie GPT, Claude, Gemini in einem Konto"
          },
          "Meta AI": {
            desc: "Rollenspiel- und Persona-Chat-Community"
          },
          "Character.AI": {
            desc: "Rollenspiel- und Persona-Chat-Community"
          },
          "腾讯混元": {
            name: "Tencent Hunyuan",
            desc: "Tencent LLM für chinesischen Chat und multimodale Erstellung"
          },
          "讯飞星火": {
            name: "iFlytek Spark",
            desc: "iFlytek-Modell stark in Sprach- und Büro-Workflows"
          },
          "天工 AI": {
            name: "Skywork-KI",
            desc: "Durch die Kunlun-Suche erweiterte Frage-und-Antwort-Runde und multimodaler Chat"
          },
          "智谱清言": {
            name: "ChatGLM",
            desc: "Zhipu GLM offizieller Chat und offenes Modell-Ökosystem"
          },
          Replit: {
            desc: "Bereitstellung von Full-Stack-Entwicklern und KI-Agenten im Browser"
          },
          Lovable: {
            desc: "Natürliche Sprache bis hin zu Full-Stack-Web-Apps"
          },
          v0: {
            desc: "Vercel AI UI-Generator für React / shadcn"
          },
          "Google AI Studio": {
            desc: "Gemini API-Spielplatz und Prototyping"
          },
          "Hugging Face": {
            desc: "Offene Modelle, Spaces-Demos, Datensätze"
          },
          Replicate: {
            desc: "Vervollständigung des Unternehmens-KI-Codes, private Bereitstellung"
          },
          Tabnine: {
            desc: "Vervollständigung des Unternehmens-KI-Codes, private Bereitstellung"
          },
          "JetBrains AI": {
            desc: "Integrierter KI-Assistent in JetBrains-IDEs"
          },
          "Sourcegraph Cody": {
            desc: "Generierung von Spiel- und Konzeptkunst"
          },
          "Leonardo.ai": {
            desc: "Generierung von Spiel- und Konzeptkunst"
          },
          Ideogram: {
            desc: "Starke Textwiedergabe in KI-Bildern"
          },
          "Adobe Firefly": {
            desc: "Jimeng AI"
          },
          "即梦 AI": {
            name: "Jimeng AI",
            desc: "ByteDance-Bildgenerierung, China-freundlich"
          },
          LiblibAI: {
            desc: "Chinesischer SD-Modell-Hub und Online-Generierung"
          },
          Civitai: {
            desc: "Größte SD/LoRA-Modell-Community"
          },
          Recraft: {
            desc: "Vektor- und markengerechtes KI-Design"
          },
          Canva: {
            desc: "Magic Studio für Social- und Marketingdesign"
          },
          Pika: {
            desc: "Stilisierte Kurzvideogenerierung"
          },
          "Luma Dream Machine": {
            desc: "Hochwertige Text-zu-Video-Konvertierung"
          },
          HeyGen: {
            desc: "KI-Avatare und mehrsprachiges Lippensynchronisationsvideo"
          },
          Descript: {
            desc: "Bearbeiten Sie Audio/Video, indem Sie Text bearbeiten"
          },
          Udio: {
            desc: "KI-Musik mit Gesang und Stilen"
          },
          "剪映 CapCut": {
            name: "CapCut",
            desc: "ByteDance-Editor mit KI-Untertiteln und -Effekten"
          },
          Vidu: {
            desc: "Shengshu Text-to-Video, chinesische Ansagen"
          },
          PixVerse: {
            desc: "MiniMax Sprach- und Videoplattform"
          },
          "海螺 AI": {
            name: "MiniMax Sprach- und Videoplattform",
            desc: "MiniMax Sprach- und Videoplattform"
          },
          Tome: {
            desc: "Narrative KI-Diadecks"
          },
          "Beautiful.ai": {
            desc: "Intelligente Layout-Präsentationen"
          },
          "飞书": {
            name: "Lerche / Feishu",
            desc: "ByteDance-Suite mit KI-Copilot"
          },
          "WPS AI": {
            desc: "Kingsoft WPS AI-Schreiben und Tabellenkalkulationen"
          },
          Grammarly: {
            desc: "Englische Grammatik, Ton und Klarheit"
          },
          "Slack AI": {
            desc: "Kanalzusammenfassungen und Workflow-KI"
          },
          "钉钉 AI": {
            name: "DingTalk KI",
            desc: "Suche nach wissenschaftlichen Arbeiten mit Zitaten"
          },
          Consensus: {
            desc: "Suche nach wissenschaftlichen Arbeiten mit Zitaten"
          },
          Elicit: {
            desc: "Literaturrecherche und Papierextraktion"
          },
          "You.com": {
            desc: "KI-Suche mit mehreren Modellen"
          },
          Phind: {
            desc: "Entwicklerorientierte KI-Suche"
          },
          "夸克 AI": {
            name: "Quark-KI",
            desc: "AI-Suche im Alibaba Quark-Browser"
          },
          Flowise: {
            desc: "Visual LLM-Apps, selbsthostbar"
          },
          LangChain: {
            desc: "LLM-App-Framework und LangSmith"
          },
          CrewAI: {
            desc: "Multiagenten-Orchestrierungs-Framework"
          },
          Zapier: {
            desc: "Verbinden Sie über 7000 Apps mit KI-Automatisierung"
          },
          Make: {
            desc: "Offene Wissensdatenbank-Q&A-Workflows"
          },
          FastGPT: {
            desc: "Offene Wissensdatenbank-Q&A-Workflows"
          },
          Figma: {
            desc: "Figma AI für Benutzeroberfläche, Kopie und Prototypen"
          },
          Framer: {
            desc: "KI-gestützte Websites und Bewegung"
          },
          Uizard: {
            desc: "Skizze/Screenshot zu UI-Prototypen"
          },
          Motiff: {
            desc: "KI-natives UI-Designtool"
          },
          Relume: {
            desc: "KI-Sitemaps und Wireframes"
          },
          Jasper: {
            desc: "Markenmarketing und SEO-Text"
          },
          "Copy.ai": {
            desc: "Anzeigen, E-Mails und Social Copy im großen Maßstab"
          },
          Writesonic: {
            desc: "SEO-Artikel und Landingpages"
          },
          Sudowrite: {
            desc: "Führen Sie Llama, Qwen usw. lokal aus"
          },
          Ollama: {
            desc: "Führen Sie Llama, Qwen usw. lokal aus"
          },
          "LM Studio": {
            desc: "GUI für lokalen LLM-Chat"
          },
          ComfyUI: {
            desc: "Knotenbasierte Stable Diffusion-Workflows"
          },
          "Open WebUI": {
            desc: "Lokaler OpenAI-kompatibler API-Server"
          },
          LocalAI: {
            desc: "Lokaler OpenAI-kompatibler API-Server"
          },
          OpenRouter: {
            desc: "Einheitliches API-Routing über alle LLM-Anbieter hinweg"
          }
        }
      },
      strings: {
        nav: {
          toolsNav: "Durchsuchen Sie vertrauenswürdige KI-Tools nach Anwendungsfall und springen Sie zu offiziellen Websites. Elemente mit dem Tag „Hier vorgestellt“ sind in unserem Lehrplan-App-Leitfaden enthalten.",
          aiToolsNav: "Durchsuchen Sie vertrauenswürdige KI-Tools nach Anwendungsfall und springen Sie zu offiziellen Websites. Elemente mit dem Tag „Hier vorgestellt“ sind in unserem Lehrplan-App-Leitfaden enthalten."
        },
        aiNavPage: {
          linkDirectory: "Durchsuchen Sie den AI Hub (über 100 Tools) →"
        }
      }
  });
})();
