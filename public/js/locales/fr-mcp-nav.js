/* FR overlays — mcp-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("fr", { mcpNav: {
  "meta": {
    "lead": "Serveurs MCP de premier ordre sélectionnés par cas d'utilisation. Appuyez sur Copier la configuration pour la coller dans Cursor ou Claude Desktop.",
    "searchPlaceholder": "Rechercher le nom du MCP, la catégorie, le client, le cas d'utilisation…",
    "countLabel": "{n} servers",
    "totalLabel": "{n} servers · {c} categories",
    "empty": "Aucun serveur MCP correspondant. Essayez un autre mot-clé.",
    "copyConfig": "Copier la configuration",
    "openLink": "Détails",
    "clientsLabel": "Clientèle",
    "transportLabel": "Transport",
    "sourceLabel": "Source",
    "starsLabel": "{n} ★",
    "featuresLabel": "Caractéristiques"
  },
  "categories": {
    "MCP 入门": "Premiers pas avec MCP",
    "开发工具": "outils de développement",
    "搜索检索": "Récupération de recherche",
    "浏览器自动化": "automatisation du navigateur",
    "地图与位置": "Cartes et emplacements",
    "数据库": "base de données",
    "知识库与文档": "Base de connaissances et documentation",
    "内容创作": "création de contenu",
    "办公协作": "Collaboration au bureau",
    "金融数据": "données financières",
    "社交与社区": "Social et communautaire",
    "电商": "Commerce électronique",
    "多媒体": "multimédia",
    "科研学术": "Recherche scientifique et universitaire",
    "生活服务": "Services de vie"
  },
  "clients": {
    "多平台": "Multi-plateforme",
    "开发者": "Développeurs",
    "Cursor": "Curseur",
    "Claude Desktop": "Claude Bureau",
    "Cline": "Clin",
    "Windsurf": "Planche à voile",
    "Codex": "Manuscrit",
    "Raycast": "Raycast"
  },
  "transports": {
    "概念": "Concept",
    "配置": "Encyclopédie des compétences Claude (Marketing)",
    "文档": "Documents",
    "Registry": "Enregistrement",
    "stdio": "stdio",
    "SSE": "ESS",
    "http": "HTTP"
  },
  "sources": {
    "official": "Officiel",
    "github": "GitHub",
    "community": "Communauté"
  },
  "items": {
    "MCP 是什么": {
      "name": "Qu'est-ce que MCP",
      "desc": "MCP (Model Context Protocol) est un protocole ouvert qui connecte les clients IA et les outils externes. Le client appelle les outils fournis par le serveur via stdio/SSE, permettant à l'agent de rechercher des pages Web, de lire des fichiers, de vérifier des bases de données, etc.",
      "features": [
        "normes de protocole ouvert",
        "transport stdio/SSE",
        "Connectez LLM avec des outils externes"
      ]
    },
    "Cursor 接入 MCP": {
      "name": "Accès par curseur à MCP",
      "desc": "Dans Curseur : Paramètres → MCP → Modifier mcp.json, fusionnez le fragment JSON ci-dessous dans l'objet mcpServers et enregistrez-le. Vous pouvez utiliser les outils correspondants dans la boîte de dialogue Agent.",
      "configNote": "Plusieurs serveurs peuvent être ajoutés ; redémarrer le curseur ou actualiser la liste MCP après modification",
      "features": [
        "Modifier mcp.json",
        "Plusieurs serveurs cohabitent",
        "Outil d'appel de dialogue d'agent"
      ]
    },
    "Claude Desktop 接入 MCP": {
      "name": "Claude Accès au bureau MCP",
      "desc": "Modifiez claude_desktop_config.json (macOS : ~/Library/Application Support/Claude/), ajoutez la configuration du serveur sous mcpServers et redémarrez Claude Desktop pour prendre effet.",
      "configNote": "Pour le chemin du fichier de configuration Windows, consultez le démarrage rapide officiel",
      "features": [
        "claude_desktop_config.json",
        "Vous êtes le coach du mot prompt. L'utilisateur donnera une invite simple, veuillez afficher :\n1. Diagnostic du problème\n2. Version réécrite complète du RTFC\n3. Deux entrées de test et points de sortie idéaux\nChinois, concis.",
        "Intégration de bureau native"
      ]
    },
    "MCP 官方参考实现": {
      "name": "Implémentation de la référence officielle MCP",
      "desc": "La collection officielle de serveurs de référence maintenue par Anthropic (système de fichiers, git, fetch, mémoire, postgres, etc.). Les entrées « officielles » dans chaque catégorie de cette page proviennent de ce référentiel.",
      "features": [
        "système de fichiers / git / fetch",
        "mémoire/postgres",
        "La maintenance officielle peut être interrompue"
      ]
    },
    "MCP 协议文档": {
      "name": "Document du protocole MCP",
      "desc": "Spécification officielle du Model Context Protocol, description de l'architecture et documentation du SDK multilingue, adaptée au développement d'un serveur MCP personnalisé ou au dépannage des problèmes d'accès.",
      "features": [
        "Spécification du protocole",
        "Descriptif architectural",
        "SDK multilingue"
      ]
    },
    "Context7": {
      "name": "Contexte7",
      "desc": "Injectez la dernière documentation de la bibliothèque et la référence API dans LLM pour éviter les illusions et la syntaxe obsolète, indispensables pour les scénarios de programmation.",
      "features": [
        "Injecter la dernière documentation de la bibliothèque",
        "Requête en temps réel de référence API",
        "Réduire l'illusion du code"
      ]
    },
    "GitHub MCP": {
      "name": "GitHub MCP",
      "desc": "Lisez et écrivez des problèmes, des PR, des fichiers d'entrepôt et des codes de recherche, permettant à l'agent d'exploiter directement le flux de travail GitHub.",
      "configNote": "Vous devez créer un jeton d'accès personnel GitHub et remplir env",
      "features": [
        "Lire et écrire un numéro / PR",
        "Rechercher le code du référentiel",
        "Obtenir le contenu du fichier"
      ]
    },
    "Filesystem": {
      "name": "Système de fichiers",
      "desc": "Le système de fichiers officiel Server lit et écrit des fichiers dans un répertoire limité, adapté à l'analyse de projets locaux et aux modifications par lots.",
      "configNote": "Remplacez /path/to/allowed/dir par un répertoire autorisé",
      "features": [
        "Limiter la lecture et l'écriture du répertoire",
        "Analyse de fichiers batch",
        "Il est recommandé que la segmentation de la base de connaissances Dify soit de 500 à 800 mots/bloc ; l'ensemble de tests est préparé avec 20 questions réelles d'employés pour acceptation."
      ]
    },
    "Git": {
      "name": "Git",
      "desc": "Serveur d'exploitation Git officiel : affichez l'état, les différences, l'historique de soumission et les branches, aidez à la révision du code et à la gestion des versions.",
      "features": [
        "vue état/diff",
        "Soumettre une requête historique",
        "informations sur la succursale"
      ]
    },
    "Fetch": {
      "name": "Aller chercher",
      "desc": "Le serveur d'exploration Web officiel convertit le contenu de l'URL en Markdown lisible par LLM, adapté à la lecture de documents et d'actualités.",
      "features": [
        "URL vers Markdown",
        "Extraction de texte de page Web",
        "Lecture de documents"
      ]
    },
    "Memory": {
      "name": "Mémoire",
      "desc": "Le serveur de mémoire officiel du graphe de connaissances conserve les entités et les relations entre les sessions et convient aux contextes de projet à long terme.",
      "features": [
        "Mémoire du graphe de connaissances",
        "Relations entre entités entre sessions",
        "Contexte du projet à long terme"
      ]
    },
    "Sequential Thinking": {
      "name": "Pensée séquentielle",
      "desc": "Le serveur officiel de la chaîne de pensée structurée guide les agents dans leur raisonnement, leur révision et leurs branchements pour explorer des problèmes complexes étape par étape.",
      "features": [
        "chaîne de raisonnement étape par étape",
        "Révision hypothétique",
        "Décomposer des problèmes complexes"
      ]
    },
    "Docker MCP": {
      "name": "DockerMCP",
      "desc": "Gérez les conteneurs Docker, les images et Compose, permettant à l'agent d'exploiter directement des environnements de conteneurs locaux ou distants.",
      "features": [
        "Gestion des démarrages et arrêts des conteneurs",
        "Liste miroir",
        "Opération de composition"
      ]
    },
    "Sentry MCP": {
      "name": "Sentinelle MCP",
      "desc": "Interrogez les erreurs, les problèmes et les données de performances de Sentry pour faciliter le dépannage en ligne et l'analyse des causes profondes.",
      "features": [
        "Requête de problème d'erreur",
        "Suivi des performances",
        "Dépannage en ligne"
      ]
    },
    "Brave Search": {
      "name": "Recherche courageuse",
      "desc": "La recherche Web basée sur l'API Brave Search fournit à l'agent des capacités de récupération Internet en temps réel.",
      "configNote": "Demandez une clé API sur brave.com/search/api",
      "features": [
        "Recherche Web en temps réel",
        "Résultats structurés",
        "Recherche respectueuse de la confidentialité"
      ]
    },
    "Tavily": {
      "name": "Tavily",
      "desc": "Une API de recherche optimisée pour les agents IA qui renvoie des résumés structurés, adaptés à la recherche et à la vérification des faits.",
      "features": [
        "Cette version a été spécialement optimisée pour trois types de scénarios : complétion sur une seule ligne/multiligne, saut de symbole entre fichiers et workflow \"bloc de code sélectionné → reconstruction du langage naturel\". Les utilisateurs du plug-in Claude Code seront redirigés vers la version haut débit par défaut, et les clients tiers tels que Cursor devront attendre l'annonce de l'adaptation.",
        "résumé structuré",
        "vérification des faits"
      ]
    },
    "Exa Search": {
      "name": "Recherche d'examen",
      "desc": "La recherche sémantique sur les réseaux neuronaux est efficace pour trouver des articles techniques, des articles et des informations sur les entreprises, et fonctionne bien dans les scénarios de recherche.",
      "features": [
        "Recherche neuronale sémantique",
        "Recherche d'articles techniques",
        "Demande d'informations sur l'entreprise"
      ]
    },
    "Firecrawl": {
      "name": "Feu d'artifice",
      "desc": "Explorez, saisissez et recherchez des pages Web, convertissez le contenu du site dans un format convivial LLM, adapté aux produits concurrents et à la collecte de données.",
      "features": [
        "Explorer l'intégralité du site",
        "Conversion de démarque",
        "Collecte de données sur les produits concurrents"
      ]
    },
    "Playwright MCP": {
      "name": "Dramaturge MCP",
      "desc": "Le MCP officiel de Microsoft Playwright contrôle Chromium pour les captures d'écran, les clics, le remplissage de formulaires et les tests E2E.",
      "features": [
        "Automatisation du chrome",
        "Captures d'écran et remplissage de formulaires",
        "Tests E2E"
      ]
    },
    "Puppeteer": {
      "name": "Marionnettiste",
      "desc": "Serveur Puppeteer officiel, automatisation Chrome sans tête, adapté aux captures d'écran de pages Web, à l'exploration et aux interactions simples.",
      "features": [
        "Chrome sans tête",
        "Capture d'écran de la page",
        "Interactions avec le DOM"
      ]
    },
    "Browserbase": {
      "name": "Base de navigateur",
      "desc": "Infrastructure de navigateur cloud sans tête, l'agent effectue des tâches de page Web complexes dans des navigateurs distants sans Chrome local.",
      "features": [
        "Navigateur cloud",
        "Aucun Chrome local requis",
        "Tâches Web complexes"
      ]
    },
    "Google Maps": {
      "name": "Google Cartes",
      "desc": "Géocodage, planification d'itinéraire, recherche de localisation et demandes de renseignements environnantes, adapté aux agents de voyage et de vie locale.",
      "features": [
        "Géocodage",
        "planification d'itinéraire",
        "Recherche de POI"
      ]
    },
    "OpenStreetMap": {
      "name": "OuvrirStreetMap",
      "desc": "Requête de géocodage et de localisation basée sur OpenStreetMap, gratuite et open source, adaptée aux scénarios ne nécessitant pas l'API Google.",
      "features": [
        "Géocodage gratuit",
        "Données cartographiques open source",
        "Aucune clé API requise"
      ]
    },
    "PostgreSQL": {
      "name": "PostgreSQL",
      "desc": "Serveur Postgres officiel, structure et données de table de requête en lecture seule, analyse de données auxiliaires et recherche dans la base de données en langage naturel.",
      "configNote": "Remplacez par la chaîne de connexion réelle ; les comptes en lecture seule sont recommandés",
      "features": [
        "Requête SQL en lecture seule",
        "Exploration de la structure des tables",
        "Bibliothèque de recherche en langage naturel"
      ]
    },
    "SQLite": {
      "name": "SQLite",
      "desc": "Serveur SQLite officiel, interrogez les fichiers .db locaux, adaptés aux prototypes et à l'analyse de données à petite échelle.",
      "features": [
        "Requête .db locale",
        "Analyse de données légère",
        "Vérification des prototypes"
      ]
    },
    "Supabase": {
      "name": "Supabase",
      "desc": "Projet Opération Supabase : gestion de tables, exécution SQL, Edge Functions et stockage, outil de développement full stack.",
      "features": [
        "gestion des tables",
        "Exécution SQL",
        "Fonctions de bord"
      ]
    },
    "Notion": {
      "name": "Notion",
      "desc": "Lisez et écrivez des pages et des bases de données Notion, et connectez la base de connaissances de l'équipe au flux de travail de l'agent.",
      "features": [
        "Lecture et écriture de pages",
        "Notes brutes",
        "Accès à la base de connaissances de l'équipe"
      ]
    },
    "Google Drive": {
      "name": "Google Drive",
      "desc": "Serveur Google Drive officiel, recherchez, lisez et répertoriez les documents cloud et ouvrez les bibliothèques de fichiers Office.",
      "configNote": "L'autorisation OAuth est requise pour la première exécution",
      "features": [
        "Recherche de fichiers",
        "Lecture de documents",
        "Autorisation OAuth"
      ]
    },
    "Obsidian MCP": {
      "name": "MCP d'obsidienne",
      "desc": "Connectez-vous au référentiel Obsidian local, recherchez et lisez les notes Markdown et constitue le premier choix pour les scénarios de gestion des connaissances personnelles.",
      "configNote": "Nécessite l'installation du plugin Obsidian Local REST API",
      "features": [
        "Recherche de notes locales",
        "Lecture de démarque",
        "base de connaissances personnelle"
      ]
    },
    "Figma": {
      "name": "Figma",
      "desc": "Lisez les brouillons de conception Figma, les styles et les commentaires, laissez l'agent comprendre l'interface utilisateur et générer le code correspondant.",
      "features": [
        "Lecture du nœud de conception",
        "Analyse du style et de la mise en page",
        "UI pour coder l'assistance"
      ]
    },
    "Cloudflare Workers": {
      "name": "Travailleurs Cloudflare",
      "desc": "Gérez Cloudflare Workers, KV, R2 et DNS pour déployer rapidement l'informatique de pointe et les sites statiques.",
      "features": [
        "Déploiement des travailleurs",
        "Stockage KV/R2",
        "Gestion DNS"
      ]
    },
    "Slack": {
      "name": "Mou",
      "desc": "Serveur Slack officiel, envoyez des messages, vérifiez les canaux et les fils de discussion et intégrez l'agent dans la collaboration d'équipe.",
      "features": [
        "Veuillez organiser les procès-verbaux de réunion originaux suivants en procès-verbaux structurés :\n\n#Format de sortie\n## Informations sur la réunion\n- Thème, date, participants\n\n## Résolutions clés (liste numérotée)\n\n## Liste de tâches\n| Matière | Personne responsable | Date limite | Priorité |\n\n## Problèmes ouverts\n\n## Suggestions de sujets pour la prochaine réunion\n\n# Règles\n- N'inventez pas des choses qui n'ont pas été discutées\n- Les tâches sans personne responsable sont marquées \"à désigner\"\n- Si la date est inconnue, écrivez « à déterminer »\n\n---\n[Coller le procès-verbal de la réunion]",
        "Requête de fil de discussion",
        "Travail d'équipe"
      ]
    },
    "Linear": {
      "name": "Linéaire",
      "desc": "Gérez les problèmes linéaires, les projets et les cycles, la gestion de projet pilotée par les agents adaptée aux équipes produit.",
      "features": [
        "Gestion des problèmes",
        "Cycle de sprint",
        "Gestion de projet produit"
      ]
    },
    "Google Calendar": {
      "name": "Google Agenda",
      "desc": "Recherchez et créez des événements Google Agenda, et automatisez la planification et la coordination des réunions.",
      "configNote": "Google OAuth doit être complété pour la première exécution",
      "features": [
        "Requête d'événement",
        "Créer un planning",
        "Autorisation OAuth"
      ]
    },
    "Alpha Vantage": {
      "name": "Alpha Avantage",
      "desc": "Interrogez les prix des actions américaines, des changes et des cryptomonnaies, les indicateurs techniques et les données fondamentales de l'entreprise.",
      "features": [
        "cotations boursières",
        "Indicateurs techniques",
        "données fondamentales"
      ]
    },
    "Stripe": {
      "name": "Bande",
      "desc": "Interrogez les clients, les abonnements, les factures et les paiements de Stripe pour faciliter l'analyse financière et de facturation du SaaS.",
      "features": [
        "Clients et abonnements",
        "Demande de facture",
        "Analyse de facturation SaaS"
      ]
    },
    "Twitter/X MCP": {
      "name": "Twitter/XMCP",
      "desc": "Rédigez un ordre du jour avant la réunion, publiez les points clés pendant la réunion et utilisez Notion AI pour générer des procès-verbaux et des tâches.",
      "features": [
        "Tweeter",
        "Recherche dans la chronologie",
        "Profil utilisateur"
      ]
    },
    "Reddit": {
      "name": "Reddit",
      "desc": "Parcourez les subreddits, recherchez des articles et des commentaires, effectuez des recherches communautaires et découvrez les tendances.",
      "features": [
        "Parcourir les sous-reddits",
        "Recherche de poste",
        "recherche communautaire"
      ]
    },
    "Shopify": {
      "name": "Shopify",
      "desc": "DeepMind présente en avant-première la précision de prédiction améliorée des sites de liaison des molécules médicamenteuses d'AlphaFold 4, et les sociétés pharmaceutiques étendent leur coopération pilote.",
      "features": [
        "Gestion des produits",
        "Demande de commande",
        "Informations client"
      ]
    },
    "WooCommerce": {
      "name": "WooCommerce",
      "desc": "Gérez les produits, les commandes et les clients WooCommerce, et automatisez les opérations du site indépendant de WordPress.",
      "features": [
        "Boutique WordPress",
        "Commandes et clients",
        "Gestion des produits"
      ]
    },
    "ElevenLabs": {
      "name": "OnzeLabs",
      "desc": "Synthèse vocale, clonage sonore et génération d'effets sonores, pipeline de création de contenu audio et vidéo.",
      "features": [
        "synthèse vocale",
        "clonage sonore",
        "Génération d'effets sonores"
      ]
    },
    "Replicate": {
      "name": "Reproduire",
      "desc": "Appelez des modèles d'images, de vidéos et d'audio sur Replicate, un guichet unique pour les dessins et les vidéos.",
      "features": [
        "Modèle de diagramme de Vincent",
        "génération vidéo",
        "Appel de modèle audio"
      ]
    },
    "arXiv": {
      "name": "arXiv",
      "desc": "Recherchez et téléchargez des articles arXiv, des revues de littérature et un suivi des technologies de pointe.",
      "features": [
        "Recherche de papier",
        "Téléchargement PDF",
        "revue de littérature"
      ]
    },
    "PubMed": {
      "name": "PubMed",
      "desc": "Recherchez dans PubMed de la littérature biomédicale, des recherches cliniques et en sciences de la vie.",
      "features": [
        "littérature biomédicale",
        "Recherche abstraite",
        "recherche clinique"
      ]
    },
    "Weather": {
      "name": "Météo",
      "desc": "Le serveur officiel de requêtes météo, basé sur l'API gratuite Open-Meteo, peut obtenir les prévisions sans clé.",
      "features": [
        "prévisions météorologiques",
        "Météo ouverte gratuite",
        "Aucune clé API requise"
      ]
    },
    "Time": {
      "name": "Temps",
      "desc": "Conversion de fuseau horaire et requête d'heure actuelle, un outil de base pour la collaboration et la planification transfrontalières.",
      "features": [
        "conversion de fuseau horaire",
        "heure actuelle",
        "Collaboration transfrontalière"
      ]
    },
    "AWS MCP": {
      "name": "AWS MCP",
      "desc": "La suite MCP officielle d'AWS couvre des services de base tels que Lambda, S3, DynamoDB et CloudWatch, permettant aux agents d'exploiter directement les ressources cloud.",
      "configNote": "Les informations d'identification AWS doivent être configurées (variables d'environnement ou ~/.aws/credentials)",
      "features": [
        "Opérations Lambda/S3",
        "Requête DynamoDB",
        "Journaux CloudWatch"
      ]
    },
    "Vercel MCP": {
      "name": "Vercel MCP",
      "desc": "Le MCP officiel de Vercel gère le déploiement de projets, les variables d'environnement, les noms de domaine et les journaux de build, et automatise le déploiement frontal.",
      "features": [
        "Gestion du déploiement de projets",
        "Configuration des variables d'environnement",
        "Créer une vue du journal"
      ]
    },
    "E2B Code Interpreter": {
      "name": "Interpréteur de codes E2B",
      "desc": "Le bac à sable de sécurité cloud exécute le code Python/JS et l'agent peut exécuter des scripts, dessiner des images et traiter des données sans polluer l'environnement local.",
      "features": [
        "Exécution du bac à sable cloud",
        "Exécution Python/JS",
        "visualisation des données"
      ]
    },
    "MongoDB": {
      "name": "MongoDB",
      "desc": "MCP officiel de MongoDB, collecte de requêtes en langage naturel, analyse d'agrégation et exploration de schémas, outil d'analyse de données NoSQL.",
      "features": [
        "Script de tâche : récupérez les 10 meilleurs messages de mots clés IA dans l'API HN Algolia",
        "pipeline d'agrégation",
        "Exploration du schéma"
      ]
    },
    "Neon": {
      "name": "Néon",
      "desc": "Neon Serverless Postgres MCP gère les bases de données de succursale, exécute SQL et migre, et constitue le premier choix pour le développement full-stack moderne.",
      "features": [
        "Postgres sans serveur",
        "branche de base de données",
        "Migration SQL"
      ]
    },
    "Atlassian": {
      "name": "Atlassien",
      "desc": "MCP officiel d'Atlassian, lisez et rédigez des tickets Jira, des pages Confluence et Sprint, et automatisez la collaboration des équipes R&D.",
      "features": [
        "Problème Jira en lecture et en écriture",
        "Page Confluence",
        "Gestion des sprints"
      ]
    },
    "21st.dev Magic": {
      "name": "21st.dev Magie",
      "desc": "L'IA pilote les composants de l'interface utilisateur pour générer du MCP, génère le code des composants React/Tailwind basé sur les descriptions et accélère le prototypage frontal.",
      "features": [
        "Composants d'interface utilisateur générés par l'IA",
        "Sortie Réagir/Vent arrière",
        "Accélération des prototypes front-end"
      ]
    },
    "Kubernetes": {
      "name": "Kubernetes",
      "desc": "Gérez les ressources du cluster K8s : Pod, Déploiement, Service, journaux et événements, scénarios DevOps et SRE.",
      "configNote": "Nécessite un kubectl local configuré et accessible au cluster cible",
      "features": [
        "Gestion des pods/déploiements",
        "Journaux et événements",
        "Requête de ressources de cluster"
      ]
    },
    "MCP Registry": {
      "name": "Registre MCP",
      "desc": "Registre officiel du Model Context Protocol, parcourez, évaluez et installez le serveur MCP de la communauté en un seul clic, réduisant ainsi le coût de découverte de l'outil Agent.",
      "features": [
        "Découverte et notation du serveur",
        "Installation en un clic",
        "Gestion des versions"
      ]
    },
    "Smithery": {
      "name": "Forge",
      "desc": "La plate-forme de découverte et d'hébergement de serveur MCP recherche des serveurs de premier ordre et génère une configuration Cursor/Claude Desktop, prenant en charge les connexions SSE à distance.",
      "configNote": "Certains serveurs nécessitent une clé API Smithery ; voir la documentation smithery.ai pour plus de détails",
      "features": [
        "Hébergement MCP à distance",
        "Génération de configurations",
        "Modèle de relations publiques"
      ]
    },
    "Pinecone": {
      "name": "Pomme de pin",
      "desc": "Base de données vectorielle MCP : requête d'index, gestion des espaces de noms et récupération RAG, adaptée à la base de connaissances d'entreprise et aux questions-réponses sur les documents longs.",
      "features": [
        "recherche de vecteurs",
        "Gestion des espaces de noms",
        "Questions et réponses sur le RAG"
      ]
    },
    "Qdrant": {
      "name": "Qdrant",
      "desc": "Qdrant Vector Library MCP : Création de collections, écriture de vecteurs et recherche sémantique, auto-hébergée ou via Qdrant Cloud.",
      "features": [
        "Bibliothèque de vecteurs auto-hébergée",
        "Recherche sémantique",
        "Gestion des collections"
      ]
    },
    "Redis": {
      "name": "Rédis",
      "desc": "Opération clé-valeur Redis MCP : lecture et écriture du cache, publication et abonnement, ainsi que requête de structure de données, adaptée au débogage de l'état de session et de la file d'attente des tâches.",
      "features": [
        "Cache lire et écrire",
        "Pub/Sous",
        "état de la session"
      ]
    },
    "Prisma": {
      "name": "prisme",
      "desc": "Prisma ORM MCP : exploration de schémas, suggestions de migration et génération de requêtes sécurisées pour accélérer le développement de la couche de base de données des projets full-stack.",
      "configNote": "Doit être utilisé dans le répertoire du projet contenant schema.prisma",
      "features": [
        "Exploration du schéma",
        "Recommandations de migration",
        "Requêtes de type sécurisé"
      ]
    },
    "ClickHouse": {
      "name": "Cliquez sur Maison",
      "desc": "ClickHouse Analysis Library MCP : requête OLAP, exploration de la structure des tables et agrégation d'indicateurs, adaptée à l'analyse des journaux et des données comportementales.",
      "features": [
        "Analyse OLAP",
        "Agrégation de journaux",
        "Requête d'indicateur"
      ]
    },
    "Grafana": {
      "name": "Grafana",
      "desc": "Grafana Observability MCP : requête sur le tableau de bord, état des alarmes et récupération de l'indicateur Loki/Prometheus pour faciliter le dépannage en ligne.",
      "features": [
        "Requête du tableau de bord",
        "État de l'alarme",
        "Loki/Prométhée"
      ]
    },
    "Semgrep": {
      "name": "Semgrep",
      "desc": "Analyse de sécurité du code statique MCP : recherche des vulnérabilités en fonction des ensembles de règles, interprétation des résultats SAST et suggestions de réparation, adaptée au contrôle d'accès de sécurité PR.",
      "features": [
        "Analyse SAST",
        "correspondance d'ensemble de règles",
        "Suggestions de correctifs de vulnérabilité"
      ]
    },
    "LangSmith": {
      "name": "LangSmith",
      "desc": "LangChain LangSmith MCP : suit les chaînes d'appels des agents, évalue les ensembles de données et compare les versions de mots d'invite, adaptées au débogage des applications LLM.",
      "features": [
        "Suivi de la chaîne d'appels",
        "Ensemble de données d'évaluation",
        "Comparaison rapide des versions"
      ]
    },
    "HubSpot": {
      "name": "Entreprises étrangères : Les entreprises japonaises doivent prêter attention aux obligations des représentants locaux. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine.",
      "desc": "HubSpot CRM MCP : mises à jour des requêtes de contacts, d'entreprises et de pipelines de transactions, adaptées à l'automatisation des agents commerciaux et marketing.",
      "features": [
        "Contact CRM",
        "Pipeline de transactions",
        "automatisation des ventes"
      ]
    },
    "Salesforce": {
      "name": "Force de vente",
      "desc": "Salesforce MCP : requêtes SOQL, mises à jour de leads et d'opportunités, scénarios d'entreprise CRM et d'assistant commercial.",
      "configNote": "Il est recommandé d'utiliser la méthode de connexion OAuth dans l'environnement de production",
      "features": [
        "Requête SOQL",
        "Opportunités de leads",
        "CRM d'entreprise"
      ]
    },
    "Zapier": {
      "name": "Zapier",
      "desc": "Zapier MCP : déclenchez plus de 7 000 automatisations d'applications, laissez l'agent créer des Zaps, interroger l'historique d'exécution et tester les actions.",
      "features": [
        "Plus de 7 000 candidatures",
        "Créer un Zap",
        "Historique de course"
      ]
    },
    "Cloudinary": {
      "name": "Nuageux",
      "desc": "Cloudinary Media MCP : téléchargement d'images/vidéos, génération d'URL de transformation et recherche de bibliothèque de ressources, adapté à l'exploitation de contenu et aux supports de commerce électronique.",
      "features": [
        "téléchargement de médias",
        "Transformer l'URL",
        "Recherche dans la bibliothèque de ressources"
      ]
    },
    "DeepWiki": {
      "name": "Wiki profond",
      "desc": "Devin DeepWiki MCP : lisez les documents de style Wiki et les structures de code de l'entrepôt GitHub pour comprendre rapidement les projets open source inconnus.",
      "features": [
        "Documentation d'entrepôt",
        "Aperçu rapide de la structure du code",
        "Comprendre les projets open source"
      ]
    },
    "Raycast": {
      "name": "Raycast",
      "desc": "Extension Raycast MCP : appelez les outils MCP dans le lanceur macOS pour exécuter rapidement des scripts, des recherches et des opérations système.",
      "configNote": "Nécessite l'installation de Raycast et l'activation de l'extension MCP",
      "features": [
        "lanceur macOS",
        "Extension MCP",
        "Fonctionnement rapide du système"
      ]
    }
  }
} });
})();
