/* FR overlays — skills-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("fr", { skillsNav: {
  "meta": {
    "lead": "Compétences d'agent GitHub organisées avec plus de 1 000 étoiles. Chaque entrée comprend une commande d'installation, des agents compatibles et un lien de dépôt.",
    "searchPlaceholder": "Compétences de recherche, secteur d’activité, cas d’utilisation, agents…",
    "countLabel": "{n} skills",
    "totalLabel": "{n} skills · {c} categories",
    "empty": "Aucune compétence correspondante. Essayez un autre mot-clé.",
    "copyCmd": "Commande Copier",
    "openGithub": "GitHub",
    "starsLabel": "{n} ★",
    "agentsLabel": "Fonctionne avec"
  },
  "categories": {
    "Skill 安装与合集": "Base de connaissances et documentation",
    "编程开发": "Recherche de recherche",
    "前端与设计": "Front-end et conception",
    "视频剪辑与生成": "Montage et génération vidéo",
    "跨境电商与电商": "E-commerce transfrontalier et e-commerce",
    "小红书与内容运营": "Xiaohongshu et le fonctionnement du contenu",
    "营销与 SEO": "Marketing et référencement",
    "内容写作": "rédaction de contenu",
    "调研搜索": "Recherche de recherche",
    "产品运营": "Opérations sur les produits",
    "安全审计": "audit de sécurité",
    "科研学术": "Recherche scientifique et universitaire",
    "浏览器自动化": "automatisation du navigateur",
    "知识管理": "gestion des connaissances",
    "办公文档": "Documents de bureau",
    "财务金融": "Finance"
  },
  "agents": {
    "多平台": "Multi-plateforme",
    "格式通用": "Format universel",
    "通用": "Universel",
    "Cursor": "Curseur",
    "Claude Code": "Claude Code",
    "Codex": "Manuscrit",
    "Gemini CLI": "CLI Gémeaux",
    "GitHub Copilot": "Copilote GitHub",
    "Claude.ai": "Claude.ai",
    "v0": "v0",
    "OpenClaw": "Griffe Ouverte",
    "Antigravity": "Antigravité",
    "Grok": "Grok",
    "Windsurf": "Planche à voile"
  },
  "items": {
    "skills CLI": {
      "name": "compétences CLI",
      "desc": "Cursor Agent permet d'abord de le planifier puis de l'exécuter ; les changements majeurs nécessitent des instructions de validation étape par étape.",
      "installNote": "L'installateur lui-même ; l'exemple de commande ci-dessus installe la collection officielle de compétences Vercel"
    },
    "Anthropic Skills": {
      "name": "Compétences anthropiques",
      "desc": "Bibliothèque officielle de démonstration de compétences d'Anthropic, comprenant des exemples de niveau production pour la créativité, le développement, la communication d'entreprise et le traitement de documents (DOCX / PDF / PPTX / XLSX).",
      "installNote": "Claude Code Également disponible : /plugin marketplace ajouter des anthropiques/compétences"
    },
    "Antigravity Awesome Skills": {
      "name": "Compétences impressionnantes en antigravité",
      "desc": "Une super collection de plus de 1 600 compétences installables, y compris des packages de plug-ins spéciaux et des ensembles de rôles pour le Web, la sécurité, les données, le DevOps, l'assurance qualité, le marketing, etc.",
      "installNote": "Claude Code：npx antigravité-génial-compétences --claude"
    },
    "Claude Skills 大全": {
      "name": "Encyclopédie des compétences Claude",
      "desc": "337 compétences et plus de 70 commandes personnalisées couvrent tous les scénarios fonctionnels tels que l'ingénierie, le marketing, les produits, la conformité, la recherche, la finance, etc."
    },
    "Awesome Agent Skills": {
      "name": "Compétences impressionnantes des agents",
      "desc": "Les plus de 1 000 communautés et l'index de compétences officiel organisé par VoltAgent peuvent être consultés par direction, puis installés.",
      "installNote": "Recherchez d'abord avec find, puis installez avec npx skills add <repo>"
    },
    "Agent Skills 规范": {
      "name": "Spécification des compétences des agents",
      "desc": "Ouvrez les spécifications et documents officiels du standard Agent Skills (agentskills.io). Les compétences sur chaque plateforme suivent le format SKILL.md.",
      "installNote": "Utilisez l'échafaudage CLI pour créer de nouvelles compétences conformes aux spécifications"
    },
    "Superpowers": {
      "name": "Superpouvoirs",
      "desc": "La méthodologie de développement d'agent la plus populaire : brainstorming → revue de conception → plan de mise en œuvre TDD → ​​développement piloté par sous-agent, déclenchant automatiquement l'ensemble du processus.",
      "installNote": "Curseur :/ajouter des superpouvoirs de plugin · Codex :/plugins Rechercher des superpouvoirs"
    },
    "Agent Skills (Addy Osmani)": {
      "name": "Compétences d'agent (Addy Osmani)",
      "desc": "Compétences d'ingénierie au niveau de la production produites par les ingénieurs de Google : spécifications de développement au niveau de l'entreprise telles que la révision de l'architecture, l'optimisation des performances, la stratégie de test, la révision du code, etc."
    },
    "Awesome Copilot": {
      "name": "Copilote génial",
      "desc": "Une collection d'instructions, d'agents, de compétences et de configurations Copilot fournies par la communauté GitHub, couvrant des scénarios de développement tels que l'examen des relations publiques, les tests, la documentation et la sécurité."
    },
    "Context Engineering Skills": {
      "name": "Compétences en ingénierie de contexte",
      "desc": "Compétences particulières en ingénierie de contexte : RAG, mémoire, orchestration d'outils et optimisation de la fenêtre contextuelle d'agent, adaptées aux tâches de développement complexes en plusieurs étapes."
    },
    "Planning with Files": {
      "name": "Planification avec des fichiers",
      "desc": "Utilisez le système de fichiers comme mémoire externe : planification, progression et accumulation de connaissances, adapté à la gestion des SOP de projets et d'opérations à long terme."
    },
    "Vercel Agent Skills": {
      "name": "Compétences des agents Vercel",
      "desc": "Collection de compétences officielle de Vercel : meilleures pratiques React, spécifications de conception Web, performances front-end, mode Next.js et autres capacités de spécialisation en développement Web.",
      "installNote": "Vous pouvez également installer des éléments individuels tels que la conception du frontend et les meilleures pratiques de réaction."
    },
    "Frontend Design": {
      "name": "Conception frontale",
      "desc": "Compétence officielle de conception frontale de Vercel : composition, correspondance des couleurs, spécifications de mise en page et de processus de composants pour éviter une esthétique d'interface IA à l'emporte-pièce."
    },
    "Awesome Design Skills": {
      "name": "Compétences de conception impressionnantes",
      "desc": "Ensemble sélectionné de compétences en conception : mise en page, correspondance des couleurs, technologie des composants et routines esthétiques anti-IA, adaptées aux pages de destination et aux interfaces de produits."
    },
    "Stitch Skills": {
      "name": "Compétences en points",
      "desc": "Compétence de conception Google Stitch : générez des spécifications d'interface et de composants haute fidélité à partir de l'intention de conception, adaptées au prototypage rapide et à l'itération visuelle."
    },
    "Vue.js AI Skills": {
      "name": "Compétences en IA Vue.js",
      "desc": "Compétences particulières écologiques Vue 3 : combinaison API, Pinia, mode Nuxt et bonnes pratiques, adaptées aux projets Vue full-stack."
    },
    "OpenMontage": {
      "name": "OuvrirMontage",
      "desc": "Le système de production vidéo Agent open source : 12 pipelines, 52 outils, plus de 500 compétences, couvrant les scripts, les storyboards, les TTS, le montage et l'exportation du film fini, transformant l'assistant de codage en studio vidéo.",
      "installNote": "Captures d'écran et remplissage de formulaires"
    },
    "ViMax": {
      "name": "ViMax",
      "desc": "Le framework de génération vidéo Agent produit par l'Université de Hong Kong : le réalisateur, le scénariste, le producteur et le générateur sont intégrés, avec un agencement entièrement automatique de la créativité au film fini."
    },
    "Remotion Skills": {
      "name": "Compétences de rémotion",
      "desc": "Utilisez React pour générer des vidéos par programmation : sous-titres vocaux, effets de mouvement, titres de marque et courtes vidéos de visualisation de données, adaptées à la production de masse de courtes vidéos basées sur la connaissance."
    },
    "Pika Skills": {
      "name": "Compétences des pikas",
      "desc": "Compétence de génération vidéo Pika AI : vidéo Vincent, vidéo Tusheng et flux de travail d'effets spéciaux stylisés, adaptés aux courts métrages créatifs et aux films conceptuels publicitaires."
    },
    "Google Gemini 视频生成": {
      "name": "Génération vidéo Google Gemini",
      "desc": "Compétence API Gemini officielle de Google : contient la sous-compétence Media_Generation, prend en charge la vidéo Veo Wensheng, la vidéo Tusheng et la génération de matériel multimodal.",
      "installNote": "Après l'installation, vous pouvez utiliser des sous-compétences telles que media_generation pour appeler le modèle vidéo Veo"
    },
    "OpenAI Codex 多媒体": {
      "name": "OpenAI Codex Multimédia",
      "desc": "Répertoire officiel de compétences Codex d'OpenAI : contient imagegen, sora et d'autres sous-compétences de génération et d'édition multimédia, adaptées à la production de matériel créatif piloté par des agents.",
      "installNote": "Vous pouvez utiliser /skills dans Codex pour parcourir les sous-compétences sélectionnées telles que imagegen."
    },
    "Marketing Skills (视频)": {
      "name": "Compétences en marketing (vidéo)",
      "desc": "L'ensemble des compétences marketing comprend des sous-compétences vidéo : courts scripts vidéo, structures de films publicitaires, stratégies vidéo sur les réseaux sociaux et flux de travail de rédaction de vidéos de conversion."
    },
    "Social Media Skills (短视频)": {
      "name": "Compétences en médias sociaux (courte vidéo)",
      "desc": "Compétences en stratégie de contenu sur les réseaux sociaux : courts scripts vidéo, planification de sujets, rythme du storyboard et calendrier de contenu multiplateforme, adaptés aux opérations TikTok/Douyin/Reels."
    },
    "Claude SEO (电商)": {
      "name": "Claude SEO (e-commerce)",
      "desc": "Contient des sous-compétences SEO pour le commerce électronique : pages de catégories, données structurées sur les produits, hreflang de sites internationaux et optimisation de pages de destination de conversion, adaptées aux vendeurs de plateformes et aux DTC.",
      "installNote": "Après l'installation, des sous-compétences telles que le référencement e-commerce et le balisage de schéma sont disponibles."
    },
    "GEO SEO Claude": {
      "name": "GÉO SEO Claude",
      "desc": "Compétence SEO prioritaire GEO : visibilité de la recherche IA, autorité de la marque, optimisation des schémas et des citations multiplateformes, adaptée aux marques étrangères pour acquérir des clients."
    },
    "Last 30 Days": {
      "name": "30 derniers jours",
      "desc": "Recherchez n'importe quel sujet sur Reddit, X, YouTube, HN, Polymarket et sur l'ensemble du Web et synthétisez des rapports de synthèse bien documentés."
    },
    "Apify Agent Skills": {
      "name": "Compétences des agents Apify",
      "desc": "Compétence d'exploration automatique du Web : Collecte structurée de données de page, adaptée à la collecte de données opérationnelles et à la surveillance des produits concurrentiels."
    },
    "Agent Reach": {
      "name": "Portée des agents",
      "desc": "Routeur de capacité Internet : recherche et recherche unifiées sur 13 plateformes, dont Xiaohongshu, Twitter, Bilibili, Reddit, GitHub, YouTube, etc."
    },
    "Humanizer 中文版": {
      "name": "Humaniseur version chinoise",
      "desc": "La version chinoise d'Humanizer est optimisée pour les traces de l'IA chinoise et convient pour supprimer la saveur de l'IA du contenu chinois tel que les comptes publics, Zhihu et Xiaohongshu."
    },
    "MD2WeChat Skill": {
      "name": "Compétence MD2WeChat",
      "desc": "Composition en un clic Markdown pour publier des comptes publics WeChat : plus de 40 thèmes de style, illustrations d'IA, publication par lots et gestion multi-comptes, adaptés aux opérations matricielles auto-médias."
    },
    "Claude SEO": {
      "name": "Claude SEO",
      "desc": "25 sous-compétences + 18 sous-agents : SEO technique, SEO international, SEO e-commerce, liens externes et rapports PDF/Excel, adaptés aux équipes de croissance de marque."
    },
    "Marketing Skills": {
      "name": "Compétences en marketing",
      "desc": "Seau familial de compétences en marketing : CRO, rédaction, référencement, analyse et ingénierie de croissance, package de capacités d'agent marketing préféré de la communauté 35k+ Star."
    },
    "PM Skills": {
      "name": "Compétences PM",
      "desc": "Marché des compétences de chef de produit : plus de 100 compétences, commandes et plugins d'agent, de la découverte, de la stratégie et de l'exécution à la mise en service et à la croissance."
    },
    "Claude Skills 大全 (营销)": {
      "name": "Encyclopédie des compétences Claude (Marketing)",
      "desc": "337 compétences incluent des modèles d'expériences de marketing, de stratégie de marque, de contenu et de croissance que les équipes marketing peuvent lancer rapidement."
    },
    "Humanizer": {
      "name": "Humaniseur",
      "desc": "Supprime les traces de texte généré par l'IA, rendant les articles plus naturels et ressemblant davantage à une écriture humaine ; adapté aux blogs, à la rédaction marketing et au peaufinage du contenu pour la publication externe."
    },
    "Agent Rules Books": {
      "name": "Livres de règles pour les agents",
      "desc": "Compétence en rédaction d'articles longs : règles de rédaction de livres/rapports structurés et disposition des chapitres, adaptées à la production de livres blancs et de contenu de cours."
    },
    "Awesome Agent Skills 索引": {
      "name": "Indice de compétences des agents impressionnant",
      "desc": "Community Skill Index, parcourez par secteur et par objectif, puis installez-le de manière ciblée, adaptée à la découverte de compétences dans des domaines verticaux."
    },
    "PM Claude Skills": {
      "name": "PM Claude Compétences",
      "desc": "PM Spécialité Claude Compétence : Entretiens avec les utilisateurs, PRD, feuille de route et workflow d'alignement des OKR."
    },
    "noobnooc Skills": {
      "name": "Compétences noobnooc",
      "desc": "Pack de compétences hybrides produit, opérations et croissance : conception d'expériences, tableau de bord de métriques et liste de contrôle de publication de fonctionnalités."
    },
    "Acontext": {
      "name": "Un contexte",
      "desc": "Script de tâche : récupérez les 10 meilleurs messages de mots clés IA dans l'API HN Algolia"
    },
    "Trail of Bits Skills": {
      "name": "Compétences Trail of Bits",
      "desc": "L'équipe de sécurité de Trail of Bits produit : la détection des vulnérabilités, l'analyse statique, le flux de travail d'audit, la sécurité des contrats et d'autres compétences professionnelles en matière de recherche sur la sécurité."
    },
    "Cisco Skill Scanner": {
      "name": "Scanner de compétences Cisco",
      "desc": "Skill Security Scanner : détecte les compétences d'agent malveillantes ou à haut risque, adaptées à la gouvernance des compétences d'équipe et à l'audit de la chaîne d'approvisionnement."
    },
    "Claude BugHunter": {
      "name": "Claude BugHunter",
      "desc": "Compétence automatisée de chasseur de bogues : audit de code, vérification de régression et workflows de découverte de défauts liés à la sécurité."
    },
    "Scientific Agent Skills": {
      "name": "Compétences d'agent scientifique",
      "desc": "Bibliothèque de compétences scientifiques K-Dense : plus de 140 compétences prêtes à l'emploi et plus de 100 bases de données scientifiques couvrant la biologie, la chimie, la médecine et la découverte de médicaments."
    },
    "Text-to-CAD": {
      "name": "Texte vers CAO",
      "desc": "Génération de description textuelle Compétence de modèle CAO, adaptée à la modélisation rapide de prototypes d'ingénierie, de fabrication et de recherche scientifique."
    },
    "Document Skills (Anthropic)": {
      "name": "Compétences documentaires (Anthropique)",
      "desc": "Compétences documentaires de niveau production anthropique : édition DOCX, analyse PDF, diapositives PPTX, tableaux XLSX, et ont la même origine que les capacités documentaires de Claude.",
      "installNote": "Plug-in Claude Code :/plugin installer document-skills@anthropic-agent-skills"
    },
    "Browser Use": {
      "name": "Utilisation du navigateur",
      "desc": "Automatisation du navigateur basée sur l'IA : l'agent parcourt, remplit des formulaires, explore et vérifie de manière indépendante, adapté aux scénarios d'exploitation et de test."
    },
    "Playwright Skill": {
      "name": "Compétence de dramaturge",
      "desc": "Compétence d'automatisation du navigateur Claude Code : l'agent écrit et exécute de manière indépendante des scripts Playwright pour les tests E2E et la vérification des pages."
    },
    "Obsidian Skills": {
      "name": "Compétences d'obsidienne",
      "desc": "Apprenez à l'agent à utiliser Obsidian CLI et les formats ouverts (Markdown, Bases, JSON Canvas) pour automatiser la prise de notes et les opérations de la base de connaissances."
    },
    "Google Workspace CLI": {
      "name": "CLI Google Workspace",
      "desc": "Puissance de calcul : inférence composée unique en quelques minutes"
    },
    "Skill Creator": {
      "name": "Créateur de compétences",
      "desc": "Utilisez l'échafaudage CLI de compétences pour créer SKILL.md conforme aux spécifications des compétences d'agent, ce qui permet aux équipes d'accumuler des flux de travail personnalisés et des connaissances du domaine.",
      "installNote": "Générez le modèle SKILL.md dans le répertoire actuel et remplissez le nom et la description."
    },
    "Finance Skills": {
      "name": "Compétences financières",
      "desc": "Compétences en analyse financière : interprétation des déclarations, modèles de valorisation, assistance à la rédaction de budgets et de documents d'investissement et de financement."
    },
    "Awesome Finance Skills": {
      "name": "Compétences financières impressionnantes",
      "desc": "Index sélectionné de compétences financières : une collection de modèles de scénarios de comptabilité, d'investissement, de contrôle des risques et de FP&A."
    },
    "Claude Skills 大全 (财务)": {
      "name": "Encyclopédie des compétences Claude (Finance)",
      "desc": "337 compétences comprennent des modèles de modélisation financière, de budgétisation, d'investissement, de financement et de conformité, adaptés aux équipes d'analyse financière et commerciale."
    },
    "Smithery Skills": {
      "name": "Compétences en forge",
      "desc": "La plate-forme de découverte et d'installation MCP/Skill Skill produite par Smithery peut rechercher les serveurs populaires du registre et générer des fragments de configuration client.",
      "installNote": "La configuration Curseur / Claude peut également être générée en un clic sur la page web smithery.ai"
    },
    "Cursor Directory Skills": {
      "name": "Compétences du répertoire de curseur",
      "desc": "Règles de curseur et index de compétences organisés par la communauté, couvrant les modèles de projets à haute fréquence tels que les applications full-stack, mobiles et IA."
    },
    "Cloudflare Agent Skills": {
      "name": "Compétences des agents Cloudflare",
      "desc": "Compétence d'agent officielle de Cloudflare : modes de développement Workers, R2, KV, D1 et Pages, adaptés à l'informatique de pointe et au déploiement full-stack."
    },
    "Composio Tool Router Skills": {
      "name": "Compétences du routeur de l'outil Composio",
      "desc": "Compétence de routage de l'outil Composio : accès unifié à Gmail, GitHub, Slack, Notion et plus de 100 autres SaaS, réduisant le code de colle de l'outil Agent."
    },
    "LangGraph Agent Skills": {
      "name": "chaîne de raisonnement étape par étape",
      "desc": "Compétence LangGraph officielle de LangChain : orchestration multi-agents, diagrammes d'état, points de contrôle et nœuds d'approbation manuelle, adaptés à une automatisation complexe."
    },
    "Windsurf Wave Skills": {
      "name": "Compétences en vagues de planche à voile",
      "desc": "Compétences particulières de Codeium Windsurf : fichiers de mémoire en cascade, édition multi-fichiers Wave et flux de travail de refactorisation au niveau de la base du code."
    },
    "shadcn/ui Agent Skills": {
      "name": "Compétences des agents shadcn/ui",
      "desc": "Compétence de création de composants shadcn/ui : mode Radix + Tailwind, accessibilité et variables de thème pour éviter que l'IA ne génère une interface utilisateur bon marché.",
      "installNote": "L'effet est meilleur lorsqu'il est utilisé avec npx shadcn@latest add"
    },
    "Figma to Code Skills": {
      "name": "Figma pour coder les compétences",
      "desc": "Concevoir une ébauche pour coder Compétence : analyser les nœuds Figma, l'espacement et les polices, et générer le squelette du composant React/Tailwind."
    },
    "ComfyUI Workflow Skills": {
      "name": "Compétences en matière de flux de travail ComfyUI",
      "desc": "Compétence de flux de travail ComfyUI : orchestration de nœuds SD3/Flux, ControlNet et sortie d'images par lots, adaptée aux pipelines de commerce électronique et de correspondance d'images de cours."
    },
    "CapCut Agent Skills": {
      "name": "Compétences des agents CapCut",
      "desc": "Après la réunion, ouvrez le panneau Copilot pour afficher la liste des segments et des décisions des intervenants."
    },
    "Shopify Hydrogen Skills": {
      "name": "Compétences Shopify en hydrogène",
      "desc": "Compétence de commerce électronique Shopify Hydrogen : boutique sans tête, composants de référencement de page produit et de panier d'achat, adaptés aux sites Web indépendants transfrontaliers."
    },
    "Amazon SP-API Skills": {
      "name": "Compétences Amazon SP-API",
      "desc": "Compétence SP-API du vendeur Amazon : commande, inventaire, extraction de rapports publicitaires et génération de scripts d'alarme d'exception."
    },
    "XHS Creator Skills": {
      "name": "Compétences du créateur XHS",
      "desc": "Compétences en création de Xiaohongshu : formule de titre, mots-clés de couverture, balises de sujet et guides de zone de commentaires, le tout en accord avec le ton de la plateforme."
    },
    "GEO SEO Skills": {
      "name": "Compétences GEO SEO",
      "desc": "Compétence d'optimisation du moteur génératif (GEO) : FAQ structurée, schéma et llms.txt pour améliorer la visibilité de la recherche IA."
    },
    "Technical Writing Skills": {
      "name": "Compétences en rédaction technique",
      "desc": "Compétence en documentation technique : référence API, README, journal des modifications et structure du didacticiel, en ligne avec les quatre quadrants de la documentation Divio."
    },
    "Deep Research Skills": {
      "name": "Compétences approfondies en recherche",
      "desc": "Compétences approfondies en recherche : recherche multi-sources, tableau de comparaison, gestion des citations et annotation des incertitudes, adaptées à l'analyse des produits et des marchés concurrentiels."
    },
    "n8n Workflow Skills": {
      "name": "Compétences en matière de flux de travail n8n",
      "desc": "Compétence d'automatisation n8n : générer RSS → résumé IA → e-mail/Feishu et autres flux de travail JSON pour accélérer la construction de pipelines d'opérations."
    },
    "Stagehand": {
      "name": "Machiniste",
      "desc": "Browserbase Stagehand : le langage naturel pilote les opérations du navigateur, écrit automatiquement les scripts Playwright et effectue la vérification."
    },
    "LaTeX Paper Skills": {
      "name": "Compétences en papier LaTeX",
      "desc": "Compétences académiques en matière de rédaction : modèle LaTeX, formatage de formules, référence BibTeX et rédaction de lettres de réponse aux avis."
    },
    "Zapier Automation Skills": {
      "name": "Compétences en automatisation Zapier",
      "desc": "Compétence d'intégration Zapier : décrivez les déclencheurs et les actions, générez des brouillons Zap et des listes de tests et connectez-vous à plus de 7 000 applications."
    }
  }
} });
})();
