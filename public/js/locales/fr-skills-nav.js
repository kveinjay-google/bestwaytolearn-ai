/* FR overlays — skills-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('fr', {
    skillsNav: {
        meta: {
          lead: "Compétences d'agent GitHub organisées avec plus de 1 000 étoiles : montage et génération vidéo, commerce électronique, Xiaohongshu, marketing, référencement, et plus encore. Chaque entrée comprend une commande d'installation, des agents compatibles et un lien de dépôt.",
          searchPlaceholder: "Compétences de recherche, secteur d’activité, cas d’utilisation, agents…",
          countLabel: "Compétences {n}",
          totalLabel: "{n} compétences · {c} catégories",
          empty: "Aucune compétence correspondante. Essayez un autre mot-clé.",
          copyCmd: "Commande Copier",
          openGithub: "GitHub",
          starsLabel: "{n} ★",
          agentsLabel: "Fonctionne avec"
        },
        categories: {
          "Skill 安装与合集": "Installateurs et collections",
          "编程开发": "Front-end et conception",
          "前端与设计": "Front-end et conception",
          "视频剪辑与生成": "Montage et génération vidéo",
          "跨境电商与电商": "Transfrontalier et e-commerce",
          "小红书与内容运营": "XHS et opérations des créateurs",
          "营销与 SEO": "Marketing et référencement",
          "内容写作": "Rédaction et contenu",
          "调研搜索": "Recherche et recherche",
          "产品运营": "Produit et opérations",
          "安全审计": "Audit de sécurité",
          "科研学术": "Sciences et recherche",
          "浏览器自动化": "Gestion des connaissances",
          "知识管理": "Gestion des connaissances",
          "办公文档": "Documents de bureau",
          "财务金融": "Finance"
        },
        items: {
          "skills CLI": {
            name: "compétences CLI",
            desc: "Programme d'installation ouvert Vercel pour plus de 68 agents de codage : installez n'importe quelle compétence GitHub via l'ajout de compétences npx.",
            installNote: "Démos officielles d'Anthropic : compétences en matière de création, de développement, de communication d'entreprise et de documentation (DOCX/PDF/PPTX/XLSX)."
          },
          "Anthropic Skills": {
            desc: "Démos officielles d'Anthropic : compétences en matière de création, de développement, de communication d'entreprise et de documentation (DOCX/PDF/PPTX/XLSX).",
            installNote: "Plus de 1 600 compétences installables avec des offres groupées Web, sécurité, données, DevOps, QA et marketing."
          },
          "Antigravity Awesome Skills": {
            desc: "Plus de 1 600 compétences installables avec des offres groupées Web, sécurité, données, DevOps, QA et marketing.",
            installNote: "Claude Code : npx antigravité-génial-compétences --claude"
          },
          "Claude Skills 大全": {
            name: "Pack de compétences Claude",
            desc: "337 compétences et plus de 70 commandes dans les domaines de l'ingénierie, du marketing, des produits, de la conformité et de la finance."
          },
          "Claude Skills 大全 (营销)": {
            name: "Pack de compétences Claude (Marketing)",
            desc: "337 compétences, y compris des modèles d'expériences de marketing, de marque, de contenu et de croissance."
          },
          "Claude Skills 大全 (财务)": {
            name: "Pack de compétences Claude (Finance)",
            desc: "VoltAgent a organisé un index de plus de 1 000 compétences officielles et communautaires."
          },
          "Awesome Agent Skills": {
            desc: "VoltAgent a organisé un index de plus de 1 000 compétences officielles et communautaires.",
            installNote: "Recherchez d'abord avec find, puis les compétences npx ajoutent <repo>"
          },
          "Agent Skills 规范": {
            name: "Spécifications des compétences des agents",
            desc: "Élaborer une nouvelle compétence conforme aux spécifications",
            installNote: "Élaborer une nouvelle compétence conforme aux spécifications"
          },
          Superpowers: {
            desc: "Méthodologie de développement des meilleurs agents : brainstorming → revue de conception → plan TDD → ​​exécution pilotée par sous-agent.",
            installNote: "Curseur : /ajouter des superpouvoirs au plugin · Codex : /plugins → superpouvoirs"
          },
          OpenMontage: {
            desc: "Studio vidéo d'agent open source : 12 pipelines, 52 outils, plus de 500 compétences – script jusqu'au montage final avec FFmpeg, Remotion, TTS et T2V.",
            installNote: "Voir AGENT_GUIDE.md pour le flux de travail complet de production vidéo"
          },
          ViMax: {
            desc: "Cadre vidéo d'agent HKU : réalisateur, scénariste, producteur et générateur dans un seul pipeline automatisé."
          },
          "Remotion Skills": {
            desc: "Vidéo programmatique avec React : sous-titres, animations, introductions de marque pour les courts métrages de connaissances."
          },
          "Pika Skills": {
            desc: "Génération de vidéos Pika AI : texte en vidéo, image en vidéo et effets stylisés pour les courts métrages créatifs et les concepts publicitaires."
          },
          "Google Gemini 视频生成": {
            name: "Génération vidéo Google Gemini",
            desc: "Compétence API Gemini officielle avec sous-compétence media_Generation – Texte/image en vidéo Veo et ressources multimodales.",
            installNote: "Utiliser la sous-compétence media_Generation pour les modèles vidéo Veo"
          },
          "OpenAI Codex 多媒体": {
            name: "OpenAI Codex Multimédia",
            desc: "Catalogue officiel de compétences Codex avec imagegen, sora et autres sous-compétences de génération multimédia.",
            installNote: "Parcourez les sous-compétences sélectionnées via /skills dans le Codex"
          },
          "Marketing Skills (视频)": {
            name: "Compétences en marketing (vidéo)",
            desc: "Sous-compétence vidéo : scripts vidéo courts, structure publicitaire, stratégie de vidéo sociale et copie de conversion."
          },
          "Social Media Skills (短视频)": {
            name: "Compétences en médias sociaux (courte vidéo)",
            desc: "Scripts vidéo courts, planification de sujets, rythme de storyboard et calendriers de contenu multiplateforme pour TikTok/Reels."
          },
          "Claude SEO (电商)": {
            name: "Claude SEO (E-commerce)",
            desc: "Sous-compétences SEO pour le commerce électronique : pages de catégories, schéma de produit, hreflang et pages de destination de conversion.",
            installNote: "Utiliser les sous-compétences de commerce électronique-seo et de balisage de schéma après l'installation"
          },
          "GEO SEO Claude": {
            desc: "GEO-first SEO pour la visibilité de la recherche IA, l'autorité de la marque, le schéma et les citations multiplateformes."
          },
          "Claude SEO": {
            desc: "25 sous-compétences + 18 sous-agents : SEO technique, SEO international, SEO e-commerce, backlinks, reporting."
          },
          "Marketing Skills": {
            desc: "Pack de compétences marketing de plus de 35 000 étoiles : CRO, rédaction, référencement, analyses et ingénierie de croissance."
          },
          "MD2WeChat Skill": {
            desc: "Markdown vers WeChat : plus de 40 thèmes, images IA, publication par lots, gestion multi-comptes."
          },
          Humanizer: {
            desc: "Supprimez les informations d'écriture IA pour les blogs, le marketing et le contenu publié."
          },
          "Humanizer 中文版": {
            name: "Humaniseur (chinois)",
            desc: "Humaniseur localisé en chinois pour le polissage WeChat, Zhihu, Xiaohongshu de-AI."
          },
          "Last 30 Days": {
            desc: "Recherchez n'importe quel sujet sur Reddit, X, YouTube, HN, Polymarket et sur le Web."
          },
          "Agent Reach": {
            desc: "Routeur Internet pour 13 plateformes : XHS, Twitter, Bilibili, Reddit, GitHub, YouTube — aucun frais API."
          },
          "Browser Use": {
            desc: "Automatisation du navigateur basée sur l'IA : parcourez, remplissez des formulaires, grattez et validez pour les opérations et les tests."
          },
          "Finance Skills": {
            desc: "Analyse financière : relevés, modèles de valorisation, budgets et notes d'investissement."
          }
        },
        agents: {
          "多平台": "Multi-plateforme",
          "格式通用": "Format universel",
          "通用": "Universel",
          Cursor: "Curseur",
          "Claude Code": "Manuscrit",
          Codex: "Manuscrit",
          "Gemini CLI": "CLI Gémeaux",
          Antigravity: "Antigravité",
          "GitHub Copilot": "Copilote GitHub",
          "Claude.ai": "Claude.ai",
          v0: "v0",
          OpenClaw: "Griffe Ouverte",
          Grok: "Grok"
        }
      },
      strings: {
        skillsNavPage: {
          tag: "Skill",
          bannerTitle: "Compétences d'agent GitHub organisées avec plus de 1 000 étoiles : montage et génération vidéo, commerce électronique, Xiaohongshu, marketing, référencement, et plus encore. Chaque entrée comprend une commande d'installation, des agents compatibles et un lien de dépôt.",
          bannerSubtitle: "Meilleures compétences GitHub · Installation en un clic",
          title: "Compétences d'agent GitHub organisées avec plus de 1 000 étoiles : montage et génération vidéo, commerce électronique, Xiaohongshu, marketing, référencement, et plus encore. Chaque entrée comprend une commande d'installation, des agents compatibles et un lien de dépôt."
        },
        search: {
          typeSkillsNav: "Compétences d'agent GitHub organisées avec plus de 1 000 étoiles : montage et génération vidéo, commerce électronique, Xiaohongshu, marketing, référencement, et plus encore. Chaque entrée comprend une commande d'installation, des agents compatibles et un lien de dépôt."
        }
      }
  });
})();
