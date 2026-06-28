/* FR overlays — tools-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('fr', {
    toolsNav: {
        meta: {
          lead: "Parcourez les outils d'IA fiables par cas d'utilisation et accédez aux sites officiels. Les éléments marqués « En vedette ici » sont inclus dans notre guide d'application du programme.",
          searchPlaceholder: "Outils __T0__",
          featuredBadge: "Outils __T0__",
          countLabel: "Outils {n}",
          totalLabel: "Outils {n} · Catégories {c}",
          empty: "Aucun outil correspondant. Essayez un autre mot-clé.",
          openSite: "Assistants de discussion"
        },
        categories: {
          "对话助手": "Assistants de discussion",
          "编程开发": "Codage et développement",
          "图像创作": "Création d'images",
          "视频音频": "Vidéo et audio",
          "办公效率": "Productivité",
          "搜索研究": "Recherche et recherche",
          "Agent 自动化": "Agents et automatisation",
          "设计原型": "Conception & prototypage",
          "营销写作": "Commercialisation et rédaction",
          "本地与开源": "Hub de discussion multimodèle : basculez GPT, Claude et Gemini dans un seul compte"
        },
        tools: {
          Poe: {
            desc: "Hub de discussion multimodèle : basculez GPT, Claude et Gemini dans un seul compte"
          },
          "Meta AI": {
            desc: "Méta-assistant lié à Instagram / WhatsApp"
          },
          "Character.AI": {
            desc: "Communauté de jeux de rôle et de chat personnel"
          },
          "腾讯混元": {
            name: "Tencent Hunyuan",
            desc: "Tencent LLM pour le chat chinois et la création multimodale"
          },
          "讯飞星火": {
            name: "iFlytek Spark",
            desc: "Modèle iFlytek puissant dans les flux de travail vocaux et bureautiques"
          },
          "天工 AI": {
            name: "IA Skywork",
            desc: "Questions et réponses optimisées par la recherche Kunlun et chat multimodal"
          },
          "智谱清言": {
            name: "ChatGLM",
            desc: "Chat officiel de Zhipu GLM et écosystème de modèle ouvert"
          },
          Replit: {
            desc: "Développement full-stack et déploiement d'agents IA dans le navigateur"
          },
          Lovable: {
            desc: "Du langage naturel aux applications Web full-stack"
          },
          v0: {
            desc: "Générateur d'interface utilisateur Vercel AI pour React / shadcn"
          },
          "Google AI Studio": {
            desc: "Terrain de jeu et prototypage de l'API Gemini"
          },
          "Hugging Face": {
            desc: "Modèles ouverts, démos Spaces, ensembles de données"
          },
          Replicate: {
            desc: "Exécutez des modèles ouverts via API, payez par appel"
          },
          Tabnine: {
            desc: "Achèvement du code d'IA d'entreprise, déploiement privé"
          },
          "JetBrains AI": {
            desc: "Assistant IA intégré dans les IDE JetBrains"
          },
          "Sourcegraph Cody": {
            desc: "Assistant de codage IA compatible avec la base de code"
          },
          "Leonardo.ai": {
            desc: "Rendu de texte fort dans les images IA"
          },
          Ideogram: {
            desc: "Rendu de texte fort dans les images IA"
          },
          "Adobe Firefly": {
            desc: "Images génératives Adobe commercialement sécurisées"
          },
          "即梦 AI": {
            name: "Jimeng IA",
            desc: "Génération d'images ByteDance, compatible avec la Chine"
          },
          LiblibAI: {
            desc: "Hub de modèles SD chinois et génération en ligne"
          },
          Civitai: {
            desc: "La plus grande communauté de modèles SD/LoRA"
          },
          Recraft: {
            desc: "Conception d'IA vectorielle et sur marque"
          },
          Canva: {
            desc: "Magic Studio pour le design social et marketing"
          },
          Pika: {
            desc: "Génération de courtes vidéos stylisées"
          },
          "Luma Dream Machine": {
            desc: "Texte vers vidéo de haute qualité"
          },
          HeyGen: {
            desc: "Avatars IA et vidéo de synchronisation labiale multilingue"
          },
          Descript: {
            desc: "Musique IA avec voix et styles"
          },
          Udio: {
            desc: "Musique IA avec voix et styles"
          },
          "剪映 CapCut": {
            name: "CapCut",
            desc: "Éditeur ByteDance avec légendes et effets IA"
          },
          Vidu: {
            desc: "Texte-vidéo Shengshu, invites chinoises"
          },
          PixVerse: {
            desc: "Vidéo IA avec modèles et effets"
          },
          "海螺 AI": {
            name: "Hailuo IA",
            desc: "Plateforme voix et vidéo MiniMax"
          },
          Tome: {
            desc: "Diaporamas narratifs sur l'IA"
          },
          "Beautiful.ai": {
            desc: "Présentations de mise en page intelligentes"
          },
          "飞书": {
            name: "Alouette / Feishu",
            desc: "Suite ByteDance avec copilote IA"
          },
          "WPS AI": {
            desc: "Écriture et feuilles de calcul Kingsoft WPS AI"
          },
          Grammarly: {
            desc: "Grammaire anglaise, ton et clarté"
          },
          "Slack AI": {
            desc: "Résumés des canaux et IA du workflow"
          },
          "钉钉 AI": {
            name: "IA DingTalk",
            desc: "Collaboration d'entreprise avec l'assistant IA"
          },
          Consensus: {
            desc: "Recherche d'articles académiques avec citations"
          },
          Elicit: {
            desc: "Revue de la littérature et extraction papier"
          },
          "You.com": {
            desc: "Recherche IA avec plusieurs modèles"
          },
          Phind: {
            desc: "Recherche d'IA axée sur les développeurs"
          },
          "夸克 AI": {
            name: "Quark IA",
            desc: "Recherche IA du navigateur Alibaba Quark"
          },
          Flowise: {
            desc: "Applications Visual LLM, auto-hébergables"
          },
          LangChain: {
            desc: "Cadre d'application LLM et LangSmith"
          },
          CrewAI: {
            desc: "Connectez plus de 7 000 applications grâce à l'automatisation de l'IA"
          },
          Zapier: {
            desc: "Connectez plus de 7 000 applications grâce à l'automatisation de l'IA"
          },
          Make: {
            desc: "Automatisation visuelle avec des modules d'IA"
          },
          FastGPT: {
            desc: "Workflows de questions et réponses ouverts sur la base de connaissances"
          },
          Figma: {
            desc: "Figma AI pour l'interface utilisateur, la copie et les prototypes"
          },
          Framer: {
            desc: "Sites et mouvements assistés par l'IA"
          },
          Uizard: {
            desc: "Esquisse/capture d'écran des prototypes d'interface utilisateur"
          },
          Motiff: {
            desc: "Outil de conception d'interface utilisateur natif d'IA"
          },
          Relume: {
            desc: "Plans de site et wireframes IA"
          },
          Jasper: {
            desc: "Copie de marketing de marque et de référencement"
          },
          "Copy.ai": {
            desc: "Annonces, e-mails et textes sociaux à grande échelle"
          },
          Writesonic: {
            desc: "Articles et pages de destination SEO"
          },
          Sudowrite: {
            desc: "Aide à la fiction et à l'écriture créative"
          },
          Ollama: {
            desc: "Exécutez Llama, Qwen, etc. localement"
          },
          "LM Studio": {
            desc: "Interface graphique pour le chat LLM local"
          },
          ComfyUI: {
            desc: "Workflows de diffusion stable basés sur les nœuds"
          },
          "Open WebUI": {
            desc: "Interface utilisateur de chat auto-hébergée pour Ollama"
          },
          LocalAI: {
            desc: "Serveur API local compatible OpenAI"
          },
          OpenRouter: {
            desc: "Routage d'API unifié entre les fournisseurs LLM"
          }
        }
      },
      strings: {
        nav: {
          toolsNav: "Parcourir le hub AI (plus de 100 outils) →",
          aiToolsNav: "Parcourir le hub AI (plus de 100 outils) →"
        },
        aiNavPage: {
          linkDirectory: "Parcourir le hub AI (plus de 100 outils) →"
        }
      }
  });
})();
