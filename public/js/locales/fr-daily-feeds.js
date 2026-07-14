/* FR overlays — ai-briefing + latest-tutorials */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("fr", {
  "aiBriefing": {
    "meta": {
      "lead": "Actualités quotidiennes de l'industrie de l'IA, archivées par date. Mis à jour chaque matin : prenez le pouls en 3 minutes.",
      "updatedLabel": "Dernière mise à jour : {date}",
      "countShown": "Affichage de {visible}/{total}",
      "emptyHint": "Aucune actualité dans cette catégorie. Essayez une autre balise.",
      "readMore": "Lire la source",
      "sourceLabel": "Source",
      "backToList": "Aucune compétence correspondante. Essayez un autre mot-clé.",
      "newBadge": "Nouveau",
      "highlightsLabel": "Points clés à retenir"
    },
    "categories": {
      "全部": "Tous",
      "产品发布": "lancement de produit",
      "开源模型": "Modèle open source",
      "行业动态": "Tendances de l'industrie",
      "政策监管": "supervision des politiques",
      "研究突破": "Percée de la recherche"
    },
    "items": [
      {
        "id": "2026-07-02-openai-responses-api",
        "title": "OpenAI lance l'entrée d'appel unifiée des agents de l'API Responses",
        "summary": "La nouvelle API intègre les conversations, les appels d'outils, l'exécution de code et la récupération de fichiers dans un flux de requête unique, permettant aux développeurs de créer des agents en plusieurs étapes avec moins de code collant. Le guide officiel de migration du SDK Python 2.x est publié simultanément.",
        "source": "OpenAI Developer Blog",
        "body": [
          "OpenAI a officiellement publié l'API Responses, dans le but de faire converger les fonctionnalités dispersées dans les achèvements de chat, les assistants, les appels d'outils et l'exécution de code dans un lien d'appel d'agent unifié. Pour les développeurs, le changement le plus important est que les tâches en plusieurs étapes ne nécessitent plus d'écrire manuellement une grande quantité de logique de collage « demande-attente-demande » au niveau de la couche application.",
          "La nouvelle API prend en charge de manière native les capacités d'invocation d'outils, d'interpréteur de code, de récupération de fichiers et de recherche sur réseau, et permet de connecter plusieurs cycles de raisonnement dans le même flux de réponse. Des exemples officiels montrent qu'un agent du service client peut compléter le processus depuis la compréhension des intentions des utilisateurs, l'interrogation des commandes, l'appel de l'interface de remboursement jusqu'à la génération de réponses au sein d'un seul cycle de vie de demande.",
          "Le guide de migration Python SDK 2.x publié simultanément mappe l'ancienne version de chat.completions + mode d'appel de fonction manuel à la méthode d'écriture de flux d'événements de réponses.create. Les utilisateurs existants de l’API Assistants peuvent migrer par lots, et OpenAI promet que l’interface Assistants restera compatible jusqu’à fin 2026.",
          "Pour les équipes nationales, si le produit a été connecté à l'API officielle OpenAI, il est recommandé d'évaluer d'abord si les liens d'agent « assemblage multi-API » existants peuvent être convergés vers l'API Responses pour réduire les retards et les surfaces d'erreur. Si vous utilisez un proxy tiers, vous devez confirmer si le proxy a suivi l'interface."
        ],
        "highlights": [
          "API unique couvrant les conversations, les outils, l'exécution et la récupération de code",
          "L'agent en plusieurs étapes réduit le code de colle de la couche d'application",
          "Python SDK 2.x fournit un guide de migration complet",
          "Convient aux agents de service client, de bureautique et d'analyse de données"
        ],
        "tags": [
          "API",
          "Agent",
          "OpenAI"
        ]
      },
      {
        "id": "2026-07-02-anthropic-sonnet-speed",
        "title": "Anthropic lance la version haute vitesse Claude Sonnet 4.5, réduisant la latence des scènes d'encodage de 40 %",
        "summary": "Le nouveau modèle est optimisé pour la complétion de l'IDE et la reconstruction de contexte long. Il maintient la précision Sonnet de niveau 4 sur le sous-ensemble SWE-bench tout en réduisant considérablement le délai du premier jeton. Il est activé par défaut pour les utilisateurs de Claude Code.",
        "source": "Anthropic News",
        "body": [
          "Anthropic lance Claude Sonnet 4.5 « High-Speed ​​​​Edition » (nom de code interne Sonnet Speed), qui se concentre sur la complétion de code en temps réel et la reconstruction de fichiers longs au sein de l'EDI. Les données officielles affirment que le délai du premier jeton est réduit d'environ 40 % par rapport au Sonnet 4 standard, et qu'un débit acceptable est toujours maintenu dans la fenêtre contextuelle de 128 Ko.",
          "Cette version a été spécialement optimisée pour trois types de scénarios : complétion sur une seule ligne/multiligne, saut de symbole entre fichiers et workflow \"bloc de code sélectionné → reconstruction du langage naturel\". Les utilisateurs du plug-in Claude Code seront redirigés vers la version haut débit par défaut, et les clients tiers tels que Cursor devront attendre l'annonce de l'adaptation.",
          "Sur le sous-ensemble SWE-bench Verified, l'écart de précision entre la version haute vitesse et la version standard Sonnet 4 est inférieur à 2 %, ce qui indique que l'optimisation ne se fait pas au détriment de la qualité de l'inférence. Premiers retours de tests de la communauté : la « suillabilité » de la réponse d'achèvement a été considérablement améliorée, mais il est toujours recommandé d'utiliser des modèles de niveau Opus pour des tâches de conception d'architecture extrêmement complexes.",
          "Si vous utilisez Claude pour écrire du code tous les jours, vous pouvez basculer le paramètre model sur claude-sonnet-4-5-speed dans la console API (le slug spécifique est soumis au document officiel), puis décider si vous souhaitez basculer complètement après avoir comparé les changements de délai et de facture."
        ],
        "highlights": [
          "Le délai du premier token est réduit d'environ 40 %",
          "Claude Code est activé par défaut, adapté au codage quotidien",
          "La précision du banc SWE est fondamentalement la même que celle du Sonnet 4",
          "Pour les conceptions d'architecture complexes, il est toujours recommandé d'utiliser des modèles plus solides."
        ],
        "tags": [
          "Claude",
          "编程",
          "Anthropic"
        ]
      },
      {
        "id": "2026-07-01-qwen3-32b",
        "title": "Tongyi Qianwen Qwen3-32B-Instruct est open source, une seule carte de 24 Go peut exécuter un raisonnement complet",
        "summary": "La version affinée des instructions open source 32B d'Alibaba prend en charge les formats d'appel de contexte et d'outils 128K ; L'évaluation de la communauté montre que les capacités de raisonnement et de codage chinoises sont proches du même niveau que les modèles à source fermée et conviennent à un déploiement privatisé local.",
        "source": "Qwen GitHub",
        "body": [
          "L'équipe Tongyi Qianwen open source Qwen3-32B-Instruct, qui est le modèle principal de la série Qwen3 pour les scénarios « déployables sur une seule carte ». Le poids est sous licence Apache 2.0 et prend en charge une utilisation commerciale (vous devez confirmer vous-même les dernières conditions de licence).",
          "Le modèle prend en charge le contexte 128 Ko, les appels de fonctions natives et la sortie de schéma JSON. Les résultats de reproduction de la communauté sur des benchmarks tels que MMLU, C-Eval et HumanEval montrent que les capacités de raisonnement et de génération de code chinois sont proches de GPT-4o mini et des premières versions de Claude 3.5 Sonnet, et sont nettement plus puissantes que la génération précédente Qwen2.5-32B.",
          "En termes de matériel, l'inférence complète BF16 nécessite environ 64 Go de mémoire vidéo ; après quantification, INT4 peut être exécuté sur un seul RTX 4090 (24 Go), avec des jetons/s d'environ 15 à 25, ce qui convient aux développeurs individuels et au déploiement intranet des petites et moyennes entreprises. Ollama, llama.cpp et vLLM fournissent tous des scripts de fusion ou des cartes de modèles prédéfinis.",
          "Si vous évaluez un assistant d'IA qui « ne laisse pas les données hors de l'intranet », Qwen3-32B est actuellement un point de départ très rentable : utilisez d'abord Ollama pour extraire et tester l'exécution, puis décidez si vous souhaitez rejoindre le cluster vLLM en fonction des besoins de l'entreprise."
        ],
        "highlights": [
          "Apache 2.0 open source, prend en charge 128 000 contextes",
          "La carte unique quantifiée INT4 de 24 Go peut être raisonnée",
          "Les capacités de langue et de codage chinoises sont proches du même niveau que le modèle source fermé",
          "L’écosystème Ollama/vLLM a suivi"
        ],
        "tags": [
          "开源",
          "Qwen",
          "本地部署"
        ]
      },
      {
        "id": "2026-07-01-google-gemini-live",
        "title": "L'API Google Gemini Live ouvre des sessions multimodales en temps réel aux développeurs",
        "summary": "Les développeurs peuvent accéder à des conversations en streaming voix + vidéo à faible latence, prendre en charge le contexte d'interruption et de partage d'écran ; Android et Web SDK sont lancés simultanément, adaptés aux applications de service client et de guidage sur site.",
        "source": "Google Developers",
        "body": [
          "Google ouvre l'API Gemini Live aux développeurs, permettant aux applications d'accéder à des conversations en streaming voix + vidéo à faible latence. Différent du mode de traitement par lots consistant à télécharger des images/audio en même temps, l'API Live maintient une longue session de connexion, le modèle peut « écouter, regarder et répondre » et permet aux utilisateurs d'interrompre à tout moment.",
          "Les chercheurs ont proposé le « taux de récupération des erreurs » comme nouvel indicateur : si l'agent peut ajuster sa stratégie et réessayer en fonction du message d'erreur après l'échec de l'appel à l'outil. Les résultats montrent que même le modèle le plus performant a un taux de récupération d'erreurs d'environ 50 % seulement, ce qui indique que l'agent actuel est encore loin d'être un « employé numérique fiable ».",
          "Au niveau technique, l'API Live est basée sur le streaming bidirectionnel WebSocket, l'audio par défaut est PCM 16 kHz et les images vidéo sont poussées dans des séquences JPEG. Les développeurs doivent gérer eux-mêmes le VAD (Voice Activity Detection) et l’annulation de l’écho, et Google fournit une implémentation de référence. La facturation est basée sur la durée de la session + la pile de jetons d'entrée/sortie.",
          "Les développeurs nationaux doivent noter : l'API Gemini doit être accessible via des agents de conformité dans certaines régions, et le streaming vidéo en temps réel nécessite une bande passante élevée. Il est recommandé d'utiliser la démo officielle côté web pour vérifier le délai avant de l'intégrer dans le produit."
        ],
        "highlights": [
          "Longue connexion WebSocket, prend en charge les conversations voix + vidéo en temps réel",
          "Les utilisateurs peuvent interrompre à tout moment, adapté aux scénarios d'interaction naturelle",
          "Le SDK Android/Web est ouvert",
          "Convient aux applications de service client, d'enseignement et d'orientation sur site"
        ],
        "tags": [
          "Gemini",
          "多模态",
          "API"
        ]
      },
      {
        "id": "2026-06-30-mcp-registry",
        "title": "Bêta publique du registre officiel MCP : découverte et installation du serveur en un clic",
        "summary": "Model Context Protocol lance un registre centralisé. Les extensions Cursor, Claude Desktop et VS Code peuvent parcourir directement le serveur MCP le mieux noté, abaissant ainsi le seuil d'entrée pour les liens vers les outils d'agent.",
        "source": "MCP Blog",
        "body": [
          "Le Model Context Protocol (MCP) dirigé par Anthropic a lancé une version bêta publique du registre officiel, offrant des capacités centralisées de découverte de serveur, de gestion des versions et d'installation en un clic. Dans le passé, les développeurs devaient cloner manuellement le référentiel GitHub et configurer JSON. Ils peuvent désormais le rechercher et l'installer directement dans les extensions Cursor, Claude Desktop et VS Code.",
          "Le premier lot de registre comprend plus de 200 serveurs, couvrant des outils à haute fréquence tels que GitHub, Slack, PostgreSQL, Brave Search et Filesystem. Chaque serveur affiche les téléchargements, les mises à jour récentes, les clients compatibles et les évaluations de la communauté, et prend en charge le filtrage par balises (base de données, recherche, automatisation, etc.).",
          "Pour les développeurs d'agents, cela signifie que le coût de connexion au lien outil a considérablement diminué : la création d'un nouvel agent capable de « lire l'entrepôt + interroger la base de données + envoyer Slack » a été raccourcie de quelques jours à quelques heures. Cependant, dans l'environnement de production, vous devez toujours faire attention à minimiser les autorisations - la qualité du serveur sur le registre varie, veuillez donc lire le code source et la déclaration d'autorisation avant l'installation.",
          "La section de navigation MCP de BestWayToLearn.AI continuera à synchroniser les entrées de registre populaires. Il est recommandé de commencer avec un serveur officiellement certifié pour éviter d'installer des packages tiers provenant de sources inconnues."
        ],
        "highlights": [
          "Plus de 200 serveurs peuvent être installés sur des clients grand public en un seul clic",
          "Réduisez la barrière d’entrée pour les liens vers les outils d’agent",
          "Prend en charge les évaluations, les balises et la gestion des versions",
          "L'environnement de production doit prêter attention aux autorisations et à l'audit du code source"
        ],
        "tags": [
          "MCP",
          "Agent",
          "工具链"
        ]
      },
      {
        "id": "2026-06-30-cn-genai-label",
        "title": "Les services nationaux d’IA générative ajoutent des exigences de conformité « d’identification du contenu »",
        "summary": "Les nouvelles réglementations exigent que les applications destinées au public ajoutent des étiquettes explicites ou implicites au contenu généré par l'IA et améliorent les mécanismes de plaintes des utilisateurs et de traçabilité ; les produits étrangers doivent simultanément évaluer les obligations d’étiquetage multirégionales.",
        "source": "行业合规速递",
        "body": [
          "Les services nationaux d’IA générative ouvrent la voie à des exigences de conformité plus détaillées en matière d’« identification du contenu ». Les produits qui offrent au public des capacités de génération de texte, d'images, d'audio et de vidéo doivent ajouter une identification explicite (telle que des filigranes, des indices) ou une identification implicite (filigrane numérique/métadonnées) conformes aux normes nationales au contenu généré par l'IA, et établir un mécanisme de plainte des utilisateurs et de traçabilité du contenu.",
          "Déploiement : BF16 nécessite 2 × 80 Go ; Une carte unique AWQ 4 bits de 48 Go peut fonctionner",
          "Pour les produits étrangers, les obligations transfrontalières telles que la loi européenne sur l’IA et les réglementations de l’État américain sur les deepfakes doivent être évaluées simultanément – ​​le même pipeline de génération peut devoir produire différentes stratégies d’étiquetage par région. L'équipe technique doit mettre en œuvre la couche de rendu frontal et le pipeline d'exportation en même temps pour éviter le problème de conformité du « uniquement affichage de pages Web, exportation sans identification ».",
          "Les entrepreneurs suggèrent : d'incorporer des capacités d'identification dans MVP plutôt que dans des correctifs post-mortem ; conserver les journaux de génération (ID utilisateur, heure, version du modèle, résumé des mots d'invite) pendant au moins 6 mois pour faciliter la réponse aux plaintes et aux audits."
        ],
        "highlights": [
          "Exigences d'identification à double voie explicites et implicites",
          "Un mécanisme d’acceptation et de traçabilité des plaintes doit être établi",
          "Les produits expédiés à l’étranger doivent évaluer les réglementations de plusieurs régions",
          "Il est recommandé de conserver les logs générés pendant au moins 6 mois"
        ],
        "tags": [
          "合规",
          "政策",
          "中国"
        ]
      },
      {
        "id": "2026-06-29-deepseek-r2-rumor",
        "title": "La version préliminaire de DeepSeek R2 apparaît sur HuggingFace, le coût d'inférence est réduit de moitié",
        "summary": "Le poids divulgué montre que l'architecture du MoE a été encore étendue et que les références mathématiques et de code ont été considérablement améliorées. L'annonce officielle n'a pas encore été faite, mais l'entrée en niveaux de gris \"R2-preview\" est apparue sur la page des prix de l'API.",
        "source": "HuggingFace / 社区",
        "body": [
          "Le droit d'auteur de l'aperçu de DeepSeek R2 est brièvement apparu sur HuggingFace, attirant une grande attention de la communauté. Selon la configuration divulguée, R2 continue d'utiliser l'architecture MoE (Mixed Expert), le nombre de paramètres d'activation est encore plus étendu par rapport à R1 et les tests de raisonnement mathématique (AIME, MATH) et de code (LiveCodeBench) ont augmenté de points de pourcentage à deux chiffres.",
          "Ce qui est encore plus accrocheur, c'est le coût : la communauté estime, sur la base de la page de tarification de l'API de la version préliminaire, que le coût de l'inférence R2 pour la même tâche est d'environ la moitié de celui de R1, principalement en raison de l'optimisation du routage expert et des améliorations du pipeline d'inférence quantitative. DeepSeek n'a pas encore publié de communiqué de presse officiel, mais l'entrée en niveaux de gris « deepseek-r2-preview » est apparue sur la console API nationale et certains utilisateurs d'entreprise ont été invités à la tester.",
          "N'oubliez pas que les droits d'auteur de l'aperçu ont été supprimés des étagères. Les données de performances qui circulent actuellement sont issues de reproductions communautaires et peuvent être différentes de la version officielle finale. Ne vous fiez pas aux interfaces de prévisualisation non officielles dans les environnements de production.",
          "Pour les apprenants, si R2 est publié comme prévu, cela réduira encore le coût du « raisonnement de haute qualité » et profitera à l'entrepreneuriat et à la recherche universitaire en matière d'applications d'IA. Il est recommandé de continuer à prêter attention à l'annonce officielle de DeepSeek et au journal des modifications de l'API."
        ],
        "highlights": [
          "Extension de l'architecture du MoE, amélioration du benchmark mathématique/code",
          "Une série d’illustrations dans un style IP unifié.",
          "Cela n’a pas encore été officiellement annoncé. Utilisez l'interface d'aperçu avec prudence dans les environnements de production.",
          "La console API a une entrée en niveaux de gris."
        ],
        "tags": [
          "DeepSeek",
          "MoE",
          "推理"
        ]
      },
      {
        "id": "2026-06-29-sora-public",
        "title": "OpenAI Sora ouvre Wensheng Video aux utilisateurs mondiaux de ChatGPT Plus",
        "summary": "Les utilisateurs peuvent générer directement des vidéos 1080p jusqu'à 20 secondes dans ChatGPT, prenant en charge les mouvements de caméra et les images de référence de style ; L'abonnement Pro permet une exportation sans filigrane et une durée plus longue.",
        "source": "OpenAI",
        "body": [
          "OpenAI ouvre les capacités vidéo de Sora aux abonnés ChatGPT Plus dans le monde entier (sauf dans certaines régions). Les utilisateurs peuvent générer des clips vidéo 1080p d'une durée maximale de 20 secondes en saisissant une description textuelle ou en téléchargeant une image de référence dans la boîte de dialogue ChatGPT sans avoir à accéder à un site distinct.",
          "Sora prend en charge la description des mouvements de la caméra (pousser, tirer, panoramique, déplacer), les images de référence de style (télécharger une image d'ambiance pour guider le ton et la composition) et les invites simples du storyboard. Les abonnés ChatGPT Pro bénéficient d'exportations sans filigrane, de crédits de génération jusqu'à 60 secondes et de files d'attente prioritaires.",
          "En termes de politique de contenu, OpenAI interdit la génération de portraits réels, de personnages protégés par le droit d'auteur et de contenu pornographique violent, et ajoute par défaut un logo « généré par l'IA » dans le coin inférieur droit de la vidéo générée. Les utilisateurs peuvent télécharger des MP4, mais ils doivent respecter les conditions d'utilisation de la plateforme et ne peuvent pas être utilisés pour des deepfakes trompeurs.",
          "Par rapport aux produits concurrents tels que Runway, Kling et Keling, l'avantage de Sora est qu'il s'intègre parfaitement au flux de conversation ChatGPT : vous pouvez d'abord discuter du script sous forme de texte, puis générer une vidéo en un seul clic. L'inconvénient est que la granularité du contrôle personnalisé est encore plus faible que celle des outils vidéo professionnels, et il convient aux créateurs de vidéos courtes pour faire des premières ébauches plutôt que des améliorations."
        ],
        "highlights": [
          "Directement généré dans ChatGPT Plus, jusqu'à 20 secondes 1080p",
          "Prend en charge le mouvement de la caméra et les images de référence de style",
          "Abonnement Pro sans filigrane + durée plus longue",
          "Adapté à la première ébauche de vidéos courtes, le montage fin nécessite néanmoins des outils professionnels"
        ],
        "tags": [
          "Sora",
          "视频生成",
          "OpenAI"
        ]
      },
      {
        "id": "2026-06-28-agent-benchmark",
        "title": "Sortie d'AgentBench 2.0 : évaluation du taux d'achèvement des agents de bureau réel",
        "summary": "La nouvelle référence couvre les e-mails, les formulaires, les calendriers et les flux de travail inter-applications. Le taux d'achèvement moyen des frameworks d'agents traditionnels sur les tâches « en plusieurs étapes sans intervention manuelle » est inférieur à 35 %, ce qui révèle des lacunes en matière de planification et de récupération des erreurs.",
        "source": "AgentBench Paper",
        "body": [
          "AgentBench 2.0 est officiellement publié, qui est actuellement l'un des benchmarks d'évaluation d'agent les plus proches des « scénarios de bureau réels ». Contrairement aux tests précédents qui n'effectuaient que des appels d'outils en une seule étape, la version 2.0 couvre 48 tâches en plusieurs étapes telles que l'envoi et la réception d'e-mails, l'édition de feuilles de calcul, la planification de calendriers et le copier-coller inter-applications, exigeant que l'agent les exécute de bout en bout sans intervention manuelle.",
          "Divulgation papier : lorsque des modèles grand public tels que GPT-4o, Claude 3.5 Sonnet et Gemini 1.5 Pro sont combinés avec des frameworks tels que LangChain et AutoGPT, le taux d'achèvement moyen des tâches est inférieur à 35 %. Les modes de défaillance sont principalement concentrés en trois catégories : les interruptions de planification à long terme (atteindre l'étape 3 et oublier l'objectif de l'étape 1), les paramètres de l'outil ne s'autocorrigent pas après avoir rempli des erreurs et la synchronisation des états inter-applications est perdue.",
          "Les chercheurs ont proposé le « taux de récupération des erreurs » comme nouvel indicateur : si l'agent peut ajuster sa stratégie et réessayer en fonction du message d'erreur après l'échec de l'appel à l'outil. Les résultats montrent que même le modèle le plus performant a un taux de récupération d'erreurs d'environ 50 % seulement, ce qui indique que l'agent actuel est encore loin d'être un « employé numérique fiable ».",
          "Implications pour les praticiens : avant de promouvoir un « agent entièrement automatique », utilisez le benchmark de classe AgentBench pour vous auto-tester ; la conception du produit doit conserver des nœuds de confirmation manuelle au lieu de poursuivre une opération sans surveillance en une seule étape."
        ],
        "highlights": [
          "48 tâches de bureau réelles en plusieurs étapes",
          "Taux d'achèvement moyen des agents traditionnels < 35 %",
          "La planification à long terme et la récupération des erreurs constituent des lacunes majeures",
          "La conception du produit doit conserver les nœuds de confirmation manuelle"
        ],
        "tags": [
          "评测",
          "Agent",
          "研究"
        ]
      },
      {
        "id": "2026-06-28-meta-llama4-scout",
        "title": "Meta Llama 4 Scout 17B open source, le NPU mobile peut exécuter la version quantifiée",
        "summary": "Le modèle léger est orienté vers les scénarios d'agent et de résumé côté client, et fournit officiellement des scripts de conversion Core ML et NNAPI ; il peut atteindre 25 tok/s en raisonnement quantitatif sur l'iPhone M4.",
        "source": "Meta AI",
        "body": [
          "Meta open-source Llama 4 Scout 17B, qui se positionne comme un modèle léger « côté appareil d'abord », ciblant les scénarios d'agent, de résumé, de traduction et autres sur les téléphones mobiles, les tablettes et les ordinateurs portables. En utilisant les nouvelles variantes tokenizer et RoPE de la série Llama 4, essayez de maintenir la qualité de l'inférence au niveau du paramètre 17B.",
          "La sortie officielle du script de conversion Core ML (iOS) et NNAPI (Android), la version quantifiée INT4 mesurée à environ 25 tokens/s sur l'iPhone M4, est suffisante pour prendre en charge la réponse streaming de l'assistant vocal. Les puces de la série M côté Mac peuvent utiliser le framework MLX pour fonctionner à plus de 40 tok/s.",
          "Par rapport aux produits concurrents tels que Qwen3-32B et Gemma 3, l'avantage du Scout 17B réside dans l'écosystème côté appareil : Meta coopère directement avec les fabricants de téléphones mobiles pour la pré-installation. L'inconvénient est que la maîtrise de la langue chinoise est plus faible que le modèle open source national. Il est davantage recommandé aux utilisateurs nationaux d'utiliser la version quantitative côté client de Qwen.",
          "Les développeurs peuvent d'abord télécharger le poids quantifié GGUF depuis HuggingFace et l'essayer localement avec llama.cpp ou Ollama ; si vous créez une application iOS, suivez le didacticiel officiel Core ML pour la convertir et l'intégrer dans le projet Swift."
        ],
        "highlights": [
          "Modèle léger 17B, orienté vers l'agent final",
          "M4 iPhone INT4 environ 25 tok/s",
          "Scripts de conversion Core ML/NNAPI fournis",
          "Pour les scénarios chinois, il est recommandé de donner la priorité aux modèles open source nationaux."
        ],
        "tags": [
          "Llama",
          "端侧",
          "开源"
        ]
      },
      {
        "id": "2026-06-27-copilot-workspace-ga",
        "title": "Microsoft Copilot Workspace est entièrement en ligne : agent unique pour les e-mails + documents + réunions",
        "summary": "Générer le titre du problème + les critères d'acceptation",
        "source": "Microsoft Blog",
        "body": [
          "Contexte inter-applications : Copilot peut lire les fils de discussion de courrier électronique et les documents SharePoint autorisés par l'utilisateur, et effectuer « lire les minutes → modifier le plan → envoyer aux équipes » en une seule conversation. Il s’agit de l’un des changements les plus surveillés dans le domaine de la version du produit du 27/06/2026 entourant le « lancement complet de Microsoft Copilot Workspace ».",
          "Limites d'autorisation : les administrateurs peuvent configurer la plage de résidence des données, qui ne s'étend pas sur les locataires par défaut ; les documents d'étiquettes sensibles nécessitent une approbation supplémentaire avant que les agents ne soient autorisés à écrire. Les équipes techniques et produit doivent évaluer les coûts d'intégration, les modifications d'autorisations et les plans de restauration sur cette base pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Modifications de prix : Microsoft 365 E5 inclut un quota de base et la surfacturation est basée sur le nombre d'étapes de l'agent ; les équipes petites et moyennes peuvent démarrer un projet pilote de 30 jours. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Suggestions de mise en œuvre : donner la priorité au pilotage dans les deux scénarios à haute fréquence de « Collecte de rapports hebdomadaires » et « Minutes clients ». Le retour sur investissement est le plus simple à quantifier. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Contexte inter-applications : Copilot peut lire les fils de discussion de courrier électronique et les documents SharePoint autorisés par l'utilisateur, et effectuer \"lire les minutes → modifier le plan → envoyer aux équipes\" en une seule conversation",
          "Limites d'autorisation : les administrateurs peuvent configurer la plage de résidence des données, qui ne traverse pas les locataires par défaut ; les documents d'étiquettes sensibles nécessitent une approbation supplémentaire avant que les agents ne soient autorisés à écrire",
          "Modifications de prix : Microsoft 365 E5 inclut un quota de base et la surfacturation est basée sur le nombre d'étapes de l'agent ; les petites et moyennes équipes peuvent démarrer un projet pilote de 30 jours",
          "Suggestions de mise en œuvre : privilégiez le pilotage dans deux types de scénarios à haute fréquence : « Collecte de rapports hebdomadaires » et « Minutes clients ». Le retour sur investissement est le plus simple à quantifier."
        ],
        "tags": [
          "Copilot",
          "办公",
          "Agent"
        ]
      },
      {
        "id": "2026-06-26-github-copilot-agent",
        "title": "GitHub Copilot Agent mode GA : soumettre automatiquement des relations publiques pour les tâches au niveau de l'entrepôt",
        "summary": "L'agent peut cloner des descriptions de problèmes, rechercher dans la base de code, modifier plusieurs fichiers et ouvrir des demandes d'extraction ; aide les gens à approuver progressivement les différences dans la boucle.",
        "source": "GitHub Changelog",
        "body": [
          "Créez un pipeline automatisé et envoyez automatiquement des résumés de chaîne pour les nouveaux articles.",
          "Mécanisme de sécurité : la valeur par défaut est un jeton en lecture seule, et les opérations d'écriture nécessitent que les utilisateurs l'acceptent étape par étape ; la version entreprise peut forcer le contrôle d’accès par analyse de code. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Limites applicables : adaptées à la correction de bogues, aux tests et à la synchronisation de documents ; il est toujours recommandé de mener manuellement la reconstruction au niveau de l'architecture. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Pratique d'équipe : écrivez les critères d'acceptation dans le modèle de problème et le taux d'achèvement de l'agent peut être augmenté de 20 à 30 %. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Workflow : démarrez l'agent en un seul clic depuis le problème, créez automatiquement des branches, soumettez des validations et joignez des instructions de mise en œuvre.",
          "Mécanisme de sécurité : la valeur par défaut est un jeton en lecture seule et l'opération d'écriture nécessite que l'utilisateur l'accepte étape par étape ; la version entreprise peut forcer le contrôle d'accès par analyse de code",
          "Limite applicable : convient à la correction de bogues, aux tests et à la synchronisation de documents ; la refactorisation manuelle au niveau de l'architecture est toujours recommandée",
          "Pratique d'équipe : rédigez les critères d'acceptation dans le modèle de problème et le taux d'achèvement de l'agent peut être augmenté de 20 à 30 %"
        ],
        "tags": [
          "Copilot",
          "编程",
          "GitHub"
        ]
      },
      {
        "id": "2026-06-25-notion-ai-3",
        "title": "Notion AI 3.0 lance \"Database Agent\" : le langage naturel modifie les vues et les formules",
        "summary": "Les utilisateurs peuvent utiliser le langage parlé pour décrire les exigences de filtrage, de regroupement et de cumul, et l'IA génère et interprète directement les formules ; les associations entre pages et le remplissage des attributs par lots sont pris en charge.",
        "source": "Notion Release Notes",
        "body": [
          "Capacités de base : créez des vues Kanban/calendrier en une seule phrase et complétez automatiquement les champs associés. Il s'agit de l'un des changements les plus surveillés dans le champ de la version du produit du 25/06/2026 entourant « Notion AI 3.0 releases « Database Agent » ».",
          "Piste d'audit : chaque modification de l'IA conserve la différence et peut être restaurée à la version précédente de la structure de la base de données en un seul clic. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Scénarios de collaboration : adaptés à une collaboration structurée telle que des tableaux de bord opérationnels, des pipelines de recrutement et la planification de cours. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Remarque : Les formules complexes entre bases de données nécessitent toujours une vérification manuelle des conditions aux limites. Pour les apprenants en IA, cela peut être utilisé pour mettre à jour les cartes d’outils personnelles et les listes de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Capacités de base : créez des vues Kanban/calendrier en une seule phrase et complétez automatiquement les champs associés",
          "Piste d'audit : chaque modification de l'IA conserve la différence et peut être restaurée à la version précédente de la structure de la base de données en un seul clic.",
          "Scénarios de collaboration : adaptés à une collaboration structurée telle que des tableaux de bord opérationnels, des pipelines de recrutement, la planification des cours, etc.",
          "Remarque : Les formules complexes entre bases de données nécessitent toujours une vérification manuelle des conditions aux limites."
        ],
        "tags": [
          "Notion",
          "办公",
          "Agent"
        ]
      },
      {
        "id": "2026-06-24-perplexity-pages",
        "title": "Perplexity Pages Team Edition : publication en un clic de pages de recherche pouvant citer des sources",
        "summary": "L'équipe peut créer conjointement une page de sujet de recherche avec des notes de bas de page, qui prend en charge les graphiques intégrés et l'actualisation automatique régulière des paragraphes ; il convient au partage externe par des groupes de recherche de marché et d'investissement.",
        "source": "Perplexity Blog",
        "body": [
          "Formulaire de libération : générez des pages de sujets publiques ou protégées par mot de passe, conservez des liens de référence traçables. Il s'agit de l'un des changements les plus surveillés concernant « Perplexity Pages Team Edition » dans le domaine de la version du produit le 24/06/2026.",
          "Stratégie d'actualisation : des mises à jour automatiques hebdomadaires peuvent être définies pour des paragraphes spécifiés, réduisant ainsi la maintenance manuelle. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Démonstration : la démo officielle prend en charge l'interaction « utiliser du texte pour modifier les images ». Les équipes techniques et produit doivent évaluer les coûts d'intégration, les modifications d'autorisations et les plans de restauration sur cette base pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Utilisation par l'apprenant : transformez la liste de lecture du cours en une page thématique partageable. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Formulaire de publication : générez des pages de sujets publiques ou protégées par mot de passe, conservez des liens de référence traçables",
          "Stratégie d'actualisation : vous pouvez définir des mises à jour hebdomadaires automatiques pour les paragraphes spécifiés afin de réduire la maintenance manuelle.",
          "Autorisations : les administrateurs d'équipe contrôlent les éditeurs et les listes blanches de noms de domaine externes",
          "Utilisation par l'apprenant : transformez la liste de lecture du cours en une page thématique partageable"
        ],
        "tags": [
          "Perplexity",
          "调研",
          "协作"
        ]
      },
      {
        "id": "2026-06-23-adobe-firefly-video",
        "title": "Bêta ouverte d'Adobe Firefly Video : piste de montage vidéo intégrée à Premiere",
        "summary": "Firefly Video génère des clips qui s'insèrent directement dans la chronologie de Premiere, prenant en charge Extend, Inpaint et la correspondance de style avec les séquences existantes.",
        "source": "Adobe News",
        "body": [
          "Workflow : saisissez la description du storyboard dans la barre latérale de Premiere et générez un rouleau B pour remplir les plans vides. Il s’agit de l’un des changements les plus regardés dans le domaine des versions de produits le 23/06/2026 autour de la « bêta ouverte d’Adobe Firefly Video ».",
          "Politique de droits d'auteur : la déclaration des données de formation ne contient pas de portraits non autorisés de personnes réelles ; exporter avec les informations d'identification du contenu. Les équipes techniques et produit doivent évaluer les coûts d'intégration, les modifications d'autorisations et les plans de restauration en conséquence pour éviter de basculer sur l'intégralité du trafic de production sans vérification pilote.",
          "Par rapport aux produits concurrents : la granularité du contrôle est meilleure que celle des purs générateurs de pages Web, mais la durée reste relativement courte. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Recommandation : utilisez-le d'abord pour le plan vide de la bande-annonce, puis unifiez-le avec le matériel réel pour l'étalonnage des couleurs. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Workflow : saisissez la description du storyboard dans la barre latérale de Premiere et générez un rouleau B pour remplir les plans vides.",
          "Politique de droits d'auteur : la déclaration des données de formation ne contient pas de portraits non autorisés de personnes réelles ; exporter avec les informations d'identification du contenu",
          "Par rapport aux produits concurrents : la granularité du contrôle est meilleure que celle des purs générateurs de pages Web, mais la durée reste courte.",
          "Recommandation : utilisez-le d'abord pour les prises de vue vides de la bande-annonce, puis unifiez-le avec le matériel réel pour l'étalonnage des couleurs."
        ],
        "tags": [
          "Adobe",
          "视频",
          "Firefly"
        ]
      },
      {
        "id": "2026-06-22-apple-intelligence-cn",
        "title": "La version Apple Intelligence Chine continentale s'ouvre en niveaux de gris : résumé local + outils d'écriture",
        "summary": "Les utilisateurs en niveaux de gris peuvent utiliser des modèles locaux pour résumer, peaufiner et hiérarchiser les notifications dans les mémos et les e-mails ; les améliorations du cloud seront publiées par lots.",
        "source": "Apple Newsroom",
        "body": [
          "Priorité locale : le résumé et la réécriture sont effectués par défaut sur le NPU de l'appareil, réduisant ainsi les problèmes de confidentialité. Il s’agit de l’un des changements les plus surveillés dans le domaine de la version du produit du 22/06/2026 autour de « La version continentale d’Apple Intelligence en Chine active les niveaux de gris ».",
          "Ouverture par lots : Tushengtu et Cross-App Agent n'ont pas encore été entièrement publiés, veuillez donc prêter attention aux annonces de mise à jour du système. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Écologie : les développeurs peuvent accéder à l'API d'écriture via les intentions d'application. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Conseil d'utilisation : les anciens appareils doivent confirmer si la génération Neural Engine est prise en charge. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Priorité locale : le résumé et la réécriture sont effectués par défaut sur le NPU de l'appareil, réduisant ainsi les problèmes de confidentialité.",
          "Ouverture par lots : Tushengtu et Cross-App Agent ne sont pas encore entièrement disponibles, veuillez prêter attention à l'annonce de la mise à jour du système",
          "Écologie : les développeurs peuvent accéder à l'API d'écriture via les intentions d'application",
          "Conseil d'utilisation : les anciens appareils doivent confirmer si les générations de Neural Engine le prennent en charge"
        ],
        "tags": [
          "Apple",
          "端侧",
          "中国"
        ]
      },
      {
        "id": "2026-06-21-windsurf-cascade-2",
        "title": "Windsurf Cascade 2.0 introduit des « fichiers mémoire » pour le contexte de projet inter-sessions",
        "summary": "Répertoire racine du projet .windsurf/memory.md Décisions et conventions d'architecture de persistance, les nouvelles sessions sont automatiquement chargées et les explications répétées sont réduites.",
        "source": "Windsurf Blog",
        "body": [
          "Mécanisme de mémoire : l'agent peut écrire les règles confirmées par l'utilisateur dans un fichier mémoire pour une réutilisation ultérieure. Il s'agit de l'un des changements les plus surveillés dans la zone de sortie du produit du 21/06/2026 autour de « Windsurf Cascade 2.0 introduit le contexte de projet inter-session « fichier mémoire ».",
          "Partage en équipe : memory.md peut être soumis à Git pour unifier les normes de codage de l'équipe. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Comparez le curseur : les deux évoluent vers une mémoire à long terme au niveau du projet. La sélection dépend de la langue prise en charge et du prix. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Pratique : gérez manuellement la mémoire au cours de la première semaine, puis les mises à jour autonomes de l'agent nécessitent une révision manuelle. Pour les apprenants en IA, cela peut être utilisé pour mettre à jour la carte des outils personnels et la liste des pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Mécanisme de mémoire : l'agent peut écrire les règles confirmées par l'utilisateur dans un fichier mémoire pour une réutilisation ultérieure.",
          "Partage en équipe : memory.md peut être soumis à Git pour unifier les normes de codage en équipe",
          "Sur le sous-ensemble SWE-bench Verified, l'écart de précision entre la version haute vitesse et la version standard Sonnet 4 est inférieur à 2 %, ce qui indique que l'optimisation ne se fait pas au détriment de la qualité de l'inférence. Premiers retours de tests de la communauté : la « suillabilité » de la réponse d'achèvement a été considérablement améliorée, mais il est toujours recommandé d'utiliser des modèles de niveau Opus pour des tâches de conception d'architecture extrêmement complexes.",
          "Pratique : gérez manuellement la mémoire au cours de la première semaine, puis les mises à jour autonomes de l'agent nécessitent une révision manuelle."
        ],
        "tags": [
          "Windsurf",
          "IDE",
          "编程"
        ]
      },
      {
        "id": "2026-06-20-zoom-ai-companion-3",
        "title": "Zoom AI Companion 3.0 : suivi des questions-réponses et des actions en temps réel pendant les réunions",
        "summary": "Lors de la réunion, vous pouvez demander en privé « Quel est le numéro de budget qui vient d'être mentionné ? » ; après la réunion, les éléments d'action Jira/Asana seront automatiquement générés et leur achèvement sera suivi.",
        "source": "Zoom Blog",
        "body": [
          "Assistant pendant la réunion : Seule la personne qui a posé la question peut voir la réponse pour ne pas interrompre le rythme de la réunion. Il s’agit de l’un des changements les plus surveillés concernant « Zoom AI Companion 3.0 » dans le domaine de la version du produit 2026-06-20.",
          "Intégration : prend en charge la synchronisation bidirectionnelle des éléments d'action avec Salesforce et Jira. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Conformité : les entreprises peuvent désactiver l'enregistrement dans le cloud et enregistrer uniquement les résumés locaux. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Astuce : Télécharger le PDF de l'ordre du jour avant la réunion peut améliorer l'exactitude du résumé. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Assistant pendant la réunion : Seule la personne qui a posé la question peut voir la réponse pour ne pas interrompre le rythme de la réunion.",
          "Intégration : prend en charge la synchronisation bidirectionnelle des éléments d'action avec Salesforce et Jira",
          "Conformité : les entreprises peuvent désactiver l'enregistrement dans le cloud et conserver uniquement les résumés locaux",
          "Astuce : télécharger le PDF de l'ordre du jour avant la réunion peut améliorer l'exactitude du résumé."
        ],
        "tags": [
          "Zoom",
          "会议",
          "办公"
        ]
      },
      {
        "id": "2026-06-19-mistral-large-3",
        "title": "Mistral Large 3 Open Weight : amélioration du raisonnement multilingue",
        "summary": "Mistral lance la version Large 3 à poids ouvert, améliorations du raisonnement en français, anglais, allemand et espagnol, licence Apache 2.0 ; vLLM et TGI sont pris en charge le même jour.",
        "source": "Mistral AI",
        "body": [
          "Performances : MMLU-Pro et BBH sont environ 8 % meilleurs que Large 2, et le texte en français présente des avantages évidents. Il s'agit de l'un des changements les plus observés dans le domaine des modèles open source le 19/06/2026 autour du \"Mistral Large 3 openweight\".",
          "Déploiement : BF16 nécessite 2 × 80 Go ; La carte unique AWQ 4 bits peut exécuter 48 Go. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Appel d'outil : mode schéma JSON natif, adapté à l'orchestration d'agents. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Sélection : Prioriser les scénarios européens de souveraineté des données. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Performances : MMLU-Pro et BBH sont environ 8 % meilleurs que Large 2, et le texte en français présente des avantages évidents.",
          "Déploiement : BF16 nécessite 2 × 80 Go ; Une carte unique AWQ 4 bits de 48 Go peut fonctionner",
          "Appel d'outil : mode schéma JSON natif, adapté à l'orchestration d'agents",
          "Sélection : Prioriser les scénarios européens de souveraineté des données"
        ],
        "tags": [
          "Mistral",
          "开源",
          "推理"
        ]
      },
      {
        "id": "2026-06-18-gemma-3-12b",
        "title": "Google Gemma 3 12B open source : petit modèle multimodal convivial avec une seule carte",
        "summary": "Gemma 3 12B prend en charge la saisie d'images + texte, contexte 128 Ko ; adapté aux expériences locales sur ordinateur portable et au RAG léger.",
        "source": "Google DeepMind",
        "body": [
          "Modal : vous pouvez saisir des captures d'écran de graphiques pour les questions et réponses, adaptées à l'interprétation des rapports. Démo Il s'agit de l'un des changements les plus observés dans le domaine des modèles open source le 18/06/2026 autour de \"Google Gemma 3 12B Open Source\".",
          "Les utilisateurs peuvent générer directement des vidéos 1080p jusqu'à 20 secondes dans ChatGPT, prenant en charge les mouvements de caméra et les images de référence de style ; L'abonnement Pro permet une exportation sans filigrane et une durée plus longue.",
          "La nouvelle API intègre les conversations, les appels d'outils, l'exécution de code et la récupération de fichiers dans un flux de requête unique, permettant aux développeurs de créer des agents en plusieurs étapes avec moins de code collant. Le guide officiel de migration du SDK Python 2.x est publié simultanément.",
          "Limites : la maîtrise du chinois est plus faible que le modèle équivalent de Qwen. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Capacité : amélioration de la cohérence des scènes d'interaction au niveau minute. Il s'agit de l'un des changements les plus observés dans le domaine de recherche révolutionnaire du 25/05/2026 entourant \"Google DeepMind lance le modèle mondial Genie 3\".",
          "Licence : la licence Gemma autorise une utilisation commerciale soumise à la politique d'utilisation",
          "Quantification : Ollama fournit Q4_K_M, une machine à mémoire de 16 Go peut être testée",
          "Limites : la capacité chinoise est plus faible que le modèle équivalent Qwen"
        ],
        "tags": [
          "Gemma",
          "开源",
          "多模态"
        ]
      },
      {
        "id": "2026-06-17-sd3-medium-open",
        "title": "Stable Diffusion 3 Open source de poids moyen : génération d'images commercialement conviviales",
        "summary": "Stabilité AI open source SD3 Medium, les paramètres 6B, le rendu du texte et la composition sont améliorés par rapport au SDXL ; le nœud ComfyUI est mis à jour le même jour.",
        "source": "Stability AI",
        "body": [
          "Qualité : La convivialité des affiches en petites polices a été améliorée, mais il est toujours recommandé de modifier les caractères dans PS ultérieurement. Il s’agit de l’un des changements les plus observés dans le domaine des modèles open source le 17/06/2026 autour de « Stable Diffusion 3 Medium Weighted Open Source ».",
          "Matériel : 12 Go de mémoire vidéo peuvent en générer 1 024, et une VRAM plus élevée est requise par lots. Les équipes techniques et produit doivent évaluer les coûts d'intégration, les modifications d'autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Conformité : il est interdit de générer des portraits de célébrités spécifiques et un filtrage local des mots d'invite est requis. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Flux de travail : la combinaison avec ControlNet Union permet un contrôle précis de la composition. Pour les apprenants en IA, cela peut être utilisé pour mettre à jour les cartes d’outils personnelles et les listes de pièges, et réaliser une pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Qualité : La convivialité des affiches en petites polices a été améliorée, mais il est toujours recommandé de modifier les polices dans PS ultérieurement.",
          "Matériel : mémoire vidéo de 12 Go capable de générer 1 024, VRAM plus élevée requise pour le traitement par lots",
          "Conformité : il est interdit de générer des portraits de célébrités spécifiques et des mots d'invite de filtrage local sont requis",
          "Flux de travail : combiné avec ControlNet Union pour un contrôle précis de la composition"
        ],
        "tags": [
          "SD3",
          "图像",
          "开源"
        ]
      },
      {
        "id": "2026-06-16-phi-4-mini",
        "title": "Recommandation : les agents chinois présents sur les intranets gouvernementaux et d'entreprise peuvent être évalués en priorité. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine.",
        "summary": "Phi-4-mini est en tête de liste des petits modèles mathématiques et logiques et convient aux assistants sur appareil et aux robots FAQ hors ligne.",
        "source": "Microsoft Research",
        "body": [
          "Positionnement : 3,8B de paramètres mais des performances de raisonnement proches de 7B, mettant l'accent sur la qualité des données. Il s'agit de l'un des changements les plus observés dans le domaine des modèles open source autour de « Microsoft Phi-4-mini Open Source » le 16/06/2026.",
          "Déploiement : un exemple d'ONNX Runtime Mobile a été publié. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Scénario : convient aux tâches déterministes telles que la classification des ordres de travail et la vérification des formulaires. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Remarque : L’écriture créative et la génération d’articles longs ne sont pas des points forts. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Positionnement : 3,8 B de paramètres mais des performances de raisonnement proches de 7B, mettant l'accent sur la qualité des données",
          "Déploiement : publication d'un exemple d'ONNX Runtime Mobile",
          "Scénario : convient aux tâches déterministes telles que la classification des ordres de travail et la vérification des formulaires",
          "Remarque : l'écriture créative et la génération d'articles longs ne sont pas des points forts"
        ],
        "tags": [
          "Phi",
          "端侧",
          "微软"
        ]
      },
      {
        "id": "2026-06-15-internlm3-8b",
        "title": "Scholar Puyu InternLM3-8B open source : optimisation des appels de l'outil d'agent chinois",
        "summary": "Shanghai AI Lab open source InternLM3-8B-Instruct, C-Eval et le format d'appel d'outil sont alignés sur le schéma OpenAI.",
        "source": "InternLM GitHub",
        "body": [
          "Chinois : les connaissances chinoises en matière de questions et réponses sont nettement meilleures que celles du lama du même niveau. Il s'agit de l'un des changements les plus observés dans le domaine des modèles open source le 15/06/2026 autour du \"Scholar·Puyu InternLM3-8B Open Source\".",
          "Impact : les équipes de petite et moyenne taille peuvent se permettre des expériences de mise au point à court terme. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Écologie : des scripts de démarrage en un clic pour LMDeploy et FastChat sont disponibles. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Recommandation : les agents chinois présents sur les intranets gouvernementaux et d'entreprise peuvent être évalués en priorité. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Chinois : les questions et réponses chinoises sont nettement meilleures que celles de Lama au même niveau",
          "Outil : Le taux de réussite des appels de fonction atteint plus de 85 % dans le benchmark local",
          "Écologie : les scripts de démarrage en un clic LMDeploy et FastChat sont disponibles",
          "Suggestion : les agents chinois sur les intranets gouvernementaux et d'entreprise peuvent être évalués en premier"
        ],
        "tags": [
          "InternLM",
          "中文",
          "开源"
        ]
      },
      {
        "id": "2026-06-14-yi-lightning-34b",
        "title": "Zero One Thing Yi-Lightning 34B open source : optimisation de l'inférence à haut débit",
        "summary": "Yi-Lightning optimise le cache KV et le décodage spéculatif pour les scénarios à QPS élevé, et sa forme API est compatible avec OpenAI.",
        "source": "01.AI",
        "body": [
          "Débit : vLLM est environ 35 % supérieur aux jetons/s Yi-34B standard. Il s’agit de l’un des changements les plus observés dans le domaine des modèles open source le 14/06/2026 autour de « Zero One Thousand Yi-Lightning 34B Open Source ».",
          "Coût : convient à une concurrence élevée, comme le service client et les résumés de recherche. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Licence : veuillez vérifier les dernières conditions de licence communautaire. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Déploiement : il est recommandé de l'associer à un équilibrage de charge et à un disjoncteur. Pour les apprenants en IA, cela peut être utilisé pour mettre à jour la carte des outils personnels et la liste des pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Débit : vLLM s'améliore d'environ 35 % par rapport aux jetons/s Yi-34B standard",
          "Coût : convient à une concurrence élevée, comme le service client et les résumés de recherche.",
          "Licence : veuillez vérifier les dernières conditions de licence communautaire",
          "Déploiement : il est recommandé de l'associer à un équilibrage de charge et à un disjoncteur."
        ],
        "tags": [
          "Yi",
          "推理",
          "开源"
        ]
      },
      {
        "id": "2026-06-13-emu3-vision",
        "title": "Zhiyuan Emu3 open source : compréhension et génération multimodales unifiées",
        "summary": "Emu3 utilise un modèle unique pour compléter la description de l'image, les instructions d'édition et les diagrammes vincentiens. La recherche s'améliore mais l'ingénierie en est encore à ses débuts.",
        "source": "BAAI",
        "body": [
          "Architecture unifiée : comprenez et générez des pondérations partagées, réduisant ainsi la maintenance multimodèle. Il s'agit de l'un des changements les plus observés dans le domaine des modèles open source le 13/06/2026 autour de \"Intelligent Source Emu3 Open Source\".",
          "Rédigez un ordre du jour avant la réunion, publiez les points clés pendant la réunion et utilisez Notion AI pour générer des procès-verbaux et des tâches.",
          "Production : La latence et la stabilité n’ont pas encore atteint le niveau des API commerciales. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Suivre : convient au suivi par des chercheurs multimodaux. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Architecture unifiée : comprendre et générer des pondérations partagées, réduisant ainsi la maintenance multimodèle",
          "Démo : la démo officielle prend en charge l'interaction « modifier les images avec du texte »",
          "Production : latence et stabilité pas encore au niveau des API commerciales",
          "Attention : Convient au suivi multimodal des chercheurs"
        ],
        "tags": [
          "Emu3",
          "多模态",
          "研究"
        ]
      },
      {
        "id": "2026-06-12-command-r-plus-ft",
        "title": "Cohere Command R+ Fine Tuning Weight Ouvert : Modèle RAG d'entreprise",
        "summary": "Cohere publie un guide de réglage fin R+ et un exemple de pondération LoRA, mettant l'accent sur la génération de citations et l'alignement multi-documents.",
        "source": "Cohere",
        "body": [
          "RAG : jeton de citation intégré pour réduire les citations illusoires. Il s’agit de l’un des changements les plus observés dans le domaine des modèles open source le 12/06/2026, autour de « l’ouverture du poids de réglage fin du Cohere Command R+ ».",
          "Réglage fin : fournit des scripts de réglage fin et des formats de données 8 × A100 avec tous les paramètres. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Comparaison : les documents longs en anglais présentent des avantages évidents, tandis que le chinois nécessite de préparer son propre corpus. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Pratique : des questions et réponses sur des documents juridiques/médicaux en anglais peuvent être rapidement pilotées. Pour les apprenants en IA, cela peut être utilisé pour mettre à jour la carte des outils personnels et la liste des pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "RAG : jeton de citation intégré pour réduire les citations fantômes",
          "Réglage fin : fournit 8 × A100 de scripts de réglage fin et de formats de données avec tous les paramètres",
          "Comparaison : les documents longs en anglais présentent des avantages évidents, tandis que le chinois nécessite de préparer son propre corpus.",
          "Pratique : les questions et réponses sur les documents juridiques/médicaux en anglais peuvent être rapidement pilotées"
        ],
        "tags": [
          "Cohere",
          "RAG",
          "微调"
        ]
      },
      {
        "id": "2026-06-11-ai-chip-supply",
        "title": "Cycle de livraison des puces AI du deuxième trimestre 2026 raccourci : spot H100/B200 en vrac",
        "summary": "Les données des chaînes montrent que l'attente pour la livraison des GPU est passée de 12 semaines à 4 à 6 semaines, que les fournisseurs de cloud ont réduit leurs offres pour certaines instances de formation et que les coûts de formation entrepreneuriale ont diminué.",
        "source": "SemiAnalysis",
        "body": [
          "Offre et demande : augmentation de la capacité de production de Blackwell + relocalisation de H100 d'occasion pour atténuer les pénuries. Il s'agit de l'un des changements les plus surveillés dans la dynamique de l'industrie le 11/06/2026 autour du « raccourcissement du cycle de livraison des puces AI du deuxième trimestre 2026 ».",
          "Prix : les prix spot des GPU dans certaines régions ont chuté de 18 % en glissement trimestriel. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Impact : les équipes de petite et moyenne taille peuvent se permettre des expériences de mise au point à court terme. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Suggestion : privilégier l’évaluation du coût du raisonnement plutôt que d’accumuler aveuglément les cartes. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Offre et demande : augmentation de la capacité de production de Blackwell + relocalisation de H100 d'occasion pour atténuer les pénuries",
          "Prix : les prix spot des GPU ont chuté de 18 % en glissement trimestriel dans certaines régions",
          "Impact : les équipes de petite et moyenne taille peuvent se permettre des expériences de mise au point à court terme",
          "Suggestion : donner la priorité à l'évaluation des coûts de raisonnement plutôt qu'à accumuler aveuglément des cartes"
        ],
        "tags": [
          "芯片",
          "云计算",
          "成本"
        ]
      },
      {
        "id": "2026-06-10-yc-w26-ai-batch",
        "title": "Lot YC W26 : plus de 78 % des entreprises sont des produits AI-Native",
        "summary": "Les points forts du Demo Day se concentrent sur les agents verticaux, le flux de travail vocal et les outils de conformité ; le TRA médian initial a doublé par rapport à l’année dernière.",
        "source": "YC Blog",
        "body": [
          "Tendance : « Copilote pour",
          "Financement : la valorisation médiane du cycle d'amorçage a augmenté et les investisseurs se concentrent sur la rétention plutôt que sur la démonstration. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Emploi : les petites équipes préfèrent les capacités full stack + d'orchestration d'agents. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Apprentissage : faites attention aux alternatives open source et aux barrières verticales en matière de données. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Tendance : « Copilot for X » est toujours populaire, mais la différenciation se tourne vers les données de l'industrie",
          "Financement : les valorisations médianes des tours de table augmentent alors que les investisseurs cherchent à conserver leurs titres par rapport à la démo",
          "Emploi : Les petites équipes préfèrent le full stack + les capacités d'orchestration d'agents",
          "Apprentissage : faites attention aux alternatives open source et aux barrières verticales en matière de données"
        ],
        "tags": [
          "创业",
          "YC",
          "Agent"
        ]
      },
      {
        "id": "2026-06-09-cursor-valuation",
        "title": "Cursor finalise un nouveau financement, évalué à 9 milliards de dollars",
        "summary": "Anysphere confirme que les revenus récurrents annuels de Cursor ont dépassé les 500 millions de dollars et que sa proportion de clients entreprises a augmenté.",
        "source": "TechCrunch",
        "body": [
          "Revenus : Abonnement personnel + Teams deux roues motrices, Teams croît plus vite. Il s’agit de l’un des changements les plus observés dans la dynamique de l’industrie le 09/06/2026 autour de « Cursor finalise un nouveau financement, évalué à 9 milliards de dollars américains ».",
          "Produit : l'audit de sécurité des agents et le contrôle des politiques d'entreprise seront renforcés. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Compétition : Windsurf, Copilot, Claude Code reposent sur trois piliers. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Utilisateurs : faites attention aux réductions éducatives et à la gestion des sièges d’équipe. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Revenus : Abonnement personnel + Teams deux roues motrices, Teams croît plus vite",
          "Produit : L'audit de sécurité des agents et le contrôle des politiques d'entreprise seront renforcés",
          "Compétition : Windsurf, Copilot, Claude Code trois piliers",
          "Utilisateur : faites attention aux réductions éducatives et à la gestion des sièges d'équipe"
        ],
        "tags": [
          "Cursor",
          "融资",
          "IDE"
        ]
      },
      {
        "id": "2026-06-08-openai-enterprise-arr",
        "title": "Le ARR d'OpenAI Enterprise dépasse les 8 milliards de dollars, l'API en représente plus de la moitié",
        "summary": "L'appel aux résultats a révélé la croissance de ChatGPT Enterprise et de l'API, ainsi que l'augmentation de la contribution des packages de conformité médicale et financière.",
        "source": "OpenAI",
        "body": [
          "Structure : les revenus des API ont dépassé la moitié pour la première fois, ce qui indique une intégration B2B plus approfondie. Il s'agit de l'un des changements les plus observés dans le domaine de la dynamique de l'industrie le 08/06/2026, autour de « l'ARR d'entreprise OpenAI a dépassé 8 milliards de dollars américains et l'API représentait plus de la moitié ».",
          "Conformité : les packages HIPAA et SOC2 génèrent des signatures de clients majeurs. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Prix : étant donné que la réduction des prix et les packages d'utilisation coexistent, les clients doivent faire des affaires et se conformer aux FinOps. Il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Lumière : la décision entre une API auto-construite et une API officielle doit être basée sur la sensibilité des données. Pour les apprenants en IA, cela peut être utilisé pour mettre à jour la carte des outils personnels et la liste des pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Structure : les revenus des API dépassent la moitié pour la première fois, indiquant une intégration B2B plus profonde",
          "Conformité : les packages HIPAA et SOC2 génèrent des signatures de clients clés",
          "Prix ​​: En raison du raisonnement, la réduction de prix et le package d'utilisation coexistent, les clients doivent faire du FinOps",
          "Lumière : la décision entre une API auto-construite et une API officielle doit être basée sur la sensibilité des données"
        ],
        "tags": [
          "OpenAI",
          "企业",
          "市场"
        ]
      },
      {
        "id": "2026-06-07-hf-enterprise",
        "title": "Rédigez un ordre du jour avant la réunion, publiez les points clés pendant la réunion et utilisez Notion AI pour générer des procès-verbaux et des tâches.",
        "summary": "Les entreprises clientes déploient des modèles open source et des pistes d'audit via des hubs privés, qui sont devenus une architecture courante dans les domaines de la finance et des affaires gouvernementales.",
        "source": "Hugging Face",
        "body": [
          "Modèle : Hub privé + points de terminaison d'inférence à guichet unique. Il s'agit de l'un des changements les plus observés dans la dynamique de l'industrie le 07/06/2026 autour de \"Les revenus de l'hébergement d'entreprise Hugging Face ont doublé, la carte modèle devient l'entrée d'achat\".",
          "Gouvernance : les cartes modèles et les cartes de données deviennent des supports d'audit de conformité. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Écologie : intégration mature avec K8 et Airflow. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Recommandation : Verrouillez le modèle SBOM avant de le déployer sur l'intranet. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Mode : Hub privé + points de terminaison d'inférence à guichet unique",
          "Gouvernance : les cartes modèles et les cartes de données deviennent des supports d'audit de conformité",
          "Écologie : intégration mature avec K8 et Airflow",
          "Recommandation : Verrouiller le modèle SBOM avant de le déployer sur l'intranet"
        ],
        "tags": [
          "HuggingFace",
          "企业",
          "MLOps"
        ]
      },
      {
        "id": "2026-06-06-ai-job-market",
        "title": "Rapport sur l'emploi de l'IA 2026 : demande d'ingénieurs d'agent + 120 % d'une année sur l'autre",
        "summary": "Un rapport conjoint des plateformes de recrutement montre que le salaire médian des « ingénieurs agents » capables de rédiger des référentiels d'évaluation et des chaînes d'outils dépasse celui des ingénieurs ML traditionnels.",
        "source": "LinkedIn Economic Graph",
        "body": [
          "Compétences : l'invite, le RAG, l'évaluation et l'observabilité sont essentiels. Il s’agit de l’un des changements les plus surveillés autour du « 2026 AI Job Report » dans le domaine de la dynamique de l’industrie le 2026-06-06.",
          "Région : Le Nord, Shenzhen, Hangzhou et Singapour sont les plus demandés. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Mise en route : les portfolios sont plus importants que les papiers. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Recommandation : Maîtriser 1 Agent IDE + 1 Plateforme d'Automation. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Compétences : l'invite, le RAG, l'évaluation et l'observabilité sont essentiels",
          "Région : au nord de Shenzhen, Hangzhou et Singapour ont la plus forte demande",
          "Pour commencer : le portfolio est plus important que la dissertation",
          "Recommandation : Master 1 Agent IDE + 1 Plateforme d'Automation"
        ],
        "tags": [
          "就业",
          "Agent",
          "技能"
        ]
      },
      {
        "id": "2026-06-05-vertical-ai-saas",
        "title": "Le financement SaaS vertical de l'IA reprend : les domaines juridique, médical et manufacturier représentent les trois premiers",
        "summary": "Les données sur le capital-risque du deuxième trimestre montrent que la rétention des ARR dans les scénarios verticaux est meilleure que dans les shells de discussion généraux ; les acheteurs sont prêts à payer pour la conformité et le flux de travail.",
        "source": "a16z",
        "body": [
          "Rétention : les fonctions d'IA intégrées aux flux de travail ont des rapports de non-remise plus élevés. Il s’agit de l’un des changements les plus observés dans la dynamique de l’industrie le 05/06/2026 autour de la « résurgence du financement vertical SaaS de l’IA ».",
          "Obstacles : les données du secteur et les boucles de rétroaction des experts constituent des fossés. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Risque : Baisse des prix des grands modèles généraux et des applications à coque fine. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Longue connexion WebSocket, prend en charge les conversations voix + vidéo en temps réel"
        ],
        "highlights": [
          "Rétention : les capacités d'IA intégrées aux flux de travail ont un NDR plus élevé",
          "Obstacles : les données du secteur et les boucles de rétroaction des experts constituent des fossés",
          "Risque : Réduction du prix des grands modèles généraux pour les applications à coque mince extrudée",
          "Entrepreneuriat : choisissez un scénario restreint avec un retour sur investissement clair"
        ],
        "tags": [
          "SaaS",
          "垂直",
          "融资"
        ]
      },
      {
        "id": "2026-06-04-china-ai-app-dau",
        "title": "Mise à jour mensuelle de la liste active de l'application native d'IA nationale : les catégories d'assistant de bureau et d'éducation ouvrent la voie",
        "summary": "Les données de mai de QuestMobile montrent que les minutes de bureau, les applications de prise de photos, de résolution de problèmes et de génération de vidéos ont mené la croissance mensuelle de la MAU.",
        "source": "QuestMobile",
        "body": [
          "Catégorie : La collaboration au bureau et le tutorat pédagogique occupent six des dix premières positions. Il s'agit de l'un des changements les plus observés dans le domaine de la dynamique de l'industrie le 04/06/2026 autour de la « Mise à jour de la liste active mensuelle des applications natives d'IA nationales ».",
          "Monétisation : la facturation hybride abonnement + paiement à l'utilisation est devenue courante. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Conformité : Le mode mineur et l'identification des contenus doivent être vérifiés dans les rayons. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Produit : La croissance du chat pur ralentit et les fonctions de type outil sont plus collantes. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Catégorie : La collaboration au bureau et le tutorat pédagogique occupent six des dix premières positions",
          "Monétisation : la facturation hybride abonnement + paiement à la séance devient courante",
          "Conformité : le mode mineur et l'identification du contenu doivent être vérifiés avant la mise en vente",
          "Produit : la croissance du chat pur ralentit et les fonctions de type outil sont plus collantes"
        ],
        "tags": [
          "中国",
          "应用",
          "数据"
        ]
      },
      {
        "id": "2026-06-03-eu-ai-act-highrisk",
        "title": "Détails de la liste à haut risque de la loi européenne sur l'IA Demande de commentaires : modèles de recrutement et de crédit inclus",
        "summary": "La Commission européenne a publié un projet d'annexe pour les scénarios d'IA à haut risque, exigeant des tests de cohérence et des canaux d'appel manuels pour les systèmes de sélection de recrutement et de notation de crédit.",
        "source": "European Commission",
        "body": [
          "Portée : Recrutement, notation de l'éducation, crédit, infrastructures critiques incluses dans les risques élevés. Il s'agit de l'un des changements les plus surveillés dans le domaine politique et réglementaire le 03/06/2026 entourant la « Sollicitation de détails sur la liste des risques élevés en vertu de la Loi sur l'IA de l'Union européenne ».",
          "Obligations : documents de gouvernance des données, conservation des journaux, personnes informées. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Calendrier : les États membres convertiront leurs lois nationales avant la fin de 2026. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Partir à l’étranger : le SaaS pour les utilisateurs de l’UE doit effectuer une DPIA à l’avance. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Portée : recrutement, notation de l'éducation, crédit, infrastructures critiques incluses dans la catégorie à haut risque",
          "Responsabilités : documents de gestion des données, conservation des journaux, personnes dans l'environnement",
          "Calendrier: les États membres transposeront leurs lois nationales d’ici fin 2026",
          "Partir à l’étranger : le SaaS pour les utilisateurs de l’UE nécessite une DPIA à l’avance"
        ],
        "tags": [
          "欧盟",
          "AI Act",
          "合规"
        ]
      },
      {
        "id": "2026-06-02-us-ai-safety-eo",
        "title": "Les États-Unis mettent à jour le décret sur l'IA : les modèles de base doivent soumettre un résumé de l'équipe rouge",
        "summary": "L'agence fédérale exige que les fournisseurs de modèles de base hyperscale soumettent au NIST un résumé de leur évaluation de sécurité, y compris les résultats des tests CBRN et d'abus du réseau.",
        "source": "White House",
        "body": [
          "Cible : Développeurs de modèles dont la puissance de calcul de formation dépasse le seuil. Il s'agit de l'un des changements les plus surveillés dans le domaine politique et réglementaire le 02/06/2026 entourant le « Décret exécutif américain sur l'IA mis à jour ».",
          "Contenu : rapports de l'équipe rouge, mesures d'atténuation des abus, notifications de changement de version. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Impact : les fournisseurs d'API peuvent exiger des déclarations d'utilisation des clients. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Entreprises : Vous devez demander le modèle de livre blanc sur la sécurité lors de l'achat. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Cible : Développeurs de modèles dont la puissance de calcul de formation dépasse le seuil",
          "Contenu : rapports de l'équipe rouge, mesures d'atténuation des abus, notifications de changement de version",
          "Impact : les fournisseurs d'API peuvent exiger des déclarations d'utilisation des clients",
          "Entreprise : Vous devez demander le livre blanc sur la sécurité du modèle lors de l'achat"
        ],
        "tags": [
          "美国",
          "安全",
          "监管"
        ]
      },
      {
        "id": "2026-06-01-uk-ai-copyright",
        "title": "Le Royaume-Uni publie un guide pratique sur le droit d'auteur en matière d'IA : recommandations de formation sur la transparence des données",
        "summary": "Les directives de l'IPO recommandent aux entreprises modèles de divulguer les catégories de sources de données de formation et de fournir les meilleures pratiques en matière de mécanismes de désinscription pour les titulaires de droits.",
        "source": "UK IPO",
        "body": [
          "Essayez d'abord le même sujet avec des instructions floues, puis utilisez ce modèle pour comparer - la différence réside dans la valeur du mot d'invite. GPT-4o répond mieux à la section Format.",
          "Produits générés : l’identification par le droit d’auteur des œuvres assistées par l’IA reste une analyse au cas par cas. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Plateforme : l'hébergeur doit établir une procédure de réclamation et de suppression. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Créateurs : conserver des preuves du processus de création contribue à protéger les droits. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Formation : encourager la divulgation des inventaires de données et du statut des licences",
          "Produits générés : l'identification par le droit d'auteur des œuvres assistées par l'IA reste une analyse au cas par cas",
          "Plateforme : l'hébergeur doit établir une procédure de réclamation et de suppression",
          "Créateurs : conserver des preuves du processus de création contribue à protéger les droits"
        ],
        "tags": [
          "英国",
          "版权",
          "AI"
        ]
      },
      {
        "id": "2026-05-31-cn-algorithm-filing",
        "title": "L'enregistrement national des algorithmes de synthèse profonde ajoute une nouvelle sous-catégorie « questions et réponses interactives »",
        "summary": "L'Administration chinoise du cyberespace a mis à jour le guide d'inscription. Les applications interactives de grands modèles doivent compléter la description de la source de données de formation et le modèle de rapport d'évaluation de la sécurité.",
        "source": "CAC",
        "body": [
          "Cible : Applications de génération conversationnelle pour le public Il s'agit de l'un des changements les plus observés dans le domaine de la supervision politique le 31/05/2026 autour de « la nouvelle sous-catégorie « questions et réponses interactives » pour l'enregistrement des algorithmes de synthèse profonde nationaux ».",
          "Matériel : évaluation de la sécurité, plan d’identification, plan d’intervention d’urgence. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Cycle : les mises à niveau de version majeures peuvent nécessiter le dépôt des modifications. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Recommandation : les équipes juridiques et algorithmiques examinent les documents simultanément. Pour les apprenants en IA, cela peut être utilisé pour mettre à jour les cartes d’outils personnelles et les listes de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Cible : Applications de génération conversationnelle pour le grand public",
          "Matériel : évaluation de la sécurité, plan de marquage, plan d'intervention d'urgence",
          "Cycle : Les mises à niveau majeures des versions peuvent nécessiter le dépôt des modifications",
          "Suggestion : les équipes juridiques et algorithmiques examinent les documents simultanément"
        ],
        "tags": [
          "中国",
          "备案",
          "合规"
        ]
      },
      {
        "id": "2026-05-30-sg-model-governance",
        "title": "Publication du modèle de gouvernance de l'IA de Singapour 3.0",
        "summary": "L'IMDA met à jour le cadre de gouvernance de l'IA générative pour mettre l'accent sur la transparence de la chaîne d'approvisionnement avec une certification facultative provenant d'examens tiers.",
        "source": "IMDA Singapore",
        "body": [
          "Cadre : couvrant les responsabilités tripartites de développement, de déploiement et d'approvisionnement. Il s'agit de l'un des changements les plus surveillés dans le domaine de la supervision des politiques entourant la « version 3.0 du cadre de gouvernance de l'IA du modèle de Singapour » le 30/05/2026.",
          "Certification : Le projet pilote volontaire de label d'évaluation par un tiers est lancé. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Données : la base juridique doit être enregistrée pour la transmission transfrontalière. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Entreprise : le siège social de la région Asie-Pacifique choisit souvent Singapour comme centre de conformité. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Cadre : couvrant les responsabilités tripartites de développement, de déploiement et d'approvisionnement",
          "Certification : Lancement d'un projet pilote de label d'évaluation volontaire par un tiers",
          "Données : la transmission transfrontalière doit enregistrer une base juridique",
          "Entreprise : le siège social de la région Asie-Pacifique choisit souvent Singapour comme centre de conformité"
        ],
        "tags": [
          "新加坡",
          "治理",
          "亚太"
        ]
      },
      {
        "id": "2026-05-29-india-ai-safety",
        "title": "L'Inde crée AI Safety Alliance : projet pilote de surveillance des abus des modèles open source",
        "summary": "L'alliance multisectorielle établira une plate-forme de signalement et une bibliothèque de cas d'abus modèles, et encouragera les cloud locaux à fournir des passerelles API sécurisées.",
        "source": "MeitY India",
        "body": [
          "Surveillance : focus sur la falsification profonde et la génération de scripts de fraude. Il s'agit de l'un des changements les plus surveillés dans le domaine politique et réglementaire le 2026-05-29 entourant « la création par l'Inde de l'AI Security Alliance ».",
          "Passerelle : les fournisseurs de cloud peuvent éventuellement installer des mots d'invite et un filtrage de sortie. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Open source : accent sur la collaboration communautaire pour publier les empreintes digitales des abus. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Rechercher le nom de la compétence, le secteur d'activité, l'utilisation, le logiciel applicable..."
        ],
        "highlights": [
          "Surveillance : Focus sur les deepfakes et la génération de scripts de fraude",
          "Passerelle : les fournisseurs de cloud peuvent éventuellement installer des mots d'invite et un filtrage de sortie",
          "Open Source : accent sur la collaboration communautaire pour publier les empreintes digitales des abus",
          "Partir à l'étranger : le filtrage localisé doit être évalué pour le marché indien"
        ],
        "tags": [
          "印度",
          "安全",
          "开源"
        ]
      },
      {
        "id": "2026-05-28-japan-ai-promotion",
        "title": "Mise en œuvre de la « loi japonaise sur la promotion de l’IA » : accorder une attention égale à l’innovation et à la sécurité",
        "summary": "La loi établit le siège de la stratégie d'IA, exige des conseils sur les domaines à haut risque et garantit un environnement convivial pour la recherche et l'open source.",
        "source": "日本内阁府",
        "body": [
          "Gouvernance : classification des risques basée sur des scénarios, pas d'interdiction générale. Il s'agit de l'un des changements les plus surveillés dans le domaine de la supervision politique le 2026-05-28 entourant la « mise en œuvre de la « loi japonaise sur la promotion de l'IA » ».",
          "Industrie : La robotique et l’industrie manufacturière bénéficient de subventions spéciales. Les équipes technologiques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Copyright : Discuter des données de formation en collaboration avec le ministère de la Culture. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Entreprises étrangères : Les entreprises japonaises doivent prêter attention aux obligations des représentants locaux. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Gouvernance : classification des risques selon des scénarios, pas d’interdiction générale",
          "Industrie : la robotique et l'industrie manufacturière bénéficient de subventions spéciales",
          "Copyright : Discussion des données de formation en collaboration avec l'Agence des Affaires Culturelles",
          "Entreprises étrangères : les entreprises au Japon doivent prêter attention aux obligations des représentants locaux"
        ],
        "tags": [
          "日本",
          "立法",
          "亚太"
        ]
      },
      {
        "id": "2026-05-27-brazil-lgpd-ai",
        "title": "Projet d'amendement de la LGPD brésilienne : la prise de décision automatisée nécessite un droit à l'explication",
        "summary": "Le projet exige que les décisions automatisées ayant des impacts juridiques ou similaires sur les utilisateurs soient fournies avec des explications concises et un portail de demande de révision manuelle.",
        "source": "Brazil Senate",
        "body": [
          "Droit d’interprétation : les utilisateurs peuvent demander une explication de la logique principale et des facteurs d’influence. Il s'agit de l'un des changements les plus surveillés dans le domaine de la supervision politique le 2026-05-27 entourant le « projet d'amendement de la LGPD brésilienne ».",
          "Révision : des voies d'appel manuelles et des délais doivent être prévus. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Pénalité : connectez-vous au cadre fin LGPD. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Produit : Rénovation prioritaire des fonctions d'automatisation du crédit/recrutement. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Droit d’explication : les utilisateurs peuvent demander une explication sur la logique principale et les facteurs d’influence",
          "Révision : un canal d'appel manuel et un délai doivent être fournis",
          "Pénalités : alignement avec le cadre de pénalités LGPD",
          "Produit : Transformation prioritaire de la fonction d'automatisation du crédit/recrutement"
        ],
        "tags": [
          "巴西",
          "隐私",
          "LATAM"
        ]
      },
      {
        "id": "2026-05-26-o3-reasoning",
        "title": "Divulgation de l'article OpenAI o3 : une chaîne de raisonnement vérifiable améliore la précision de l'Olympiade de mathématiques",
        "summary": "L'article montre que o3 atteint 96 % dans AIME 2025 avec une architecture de recherche + validateur et analyse les cas d'échec à partir de l'ambiguïté des symboles.",
        "source": "arXiv",
        "body": [
          "Méthode : Générez plusieurs chaînes de raisonnement et filtrez-les par le vérificateur. Il s'agit de l'un des changements les plus surveillés entourant la « divulgation du papier OpenAI o3 » dans le domaine des percées de la recherche le 2026-05-26.",
          "Coût : la haute précision s’accompagne d’une surcharge de jetons de 10×+. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Éclairage : « Rédaction de petits modèles + vérification de grands modèles » peut être utilisé dans l'environnement de production. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Éducation : convient au tutorat des Olympiades mathématiques, mais doit éviter les fuites directes de questions. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Méthode : générer plusieurs chaînes d'inférence et les filtrer par le validateur",
          "Remplissez manuellement les données et les références",
          "Éclairage : « Calcul approximatif sur petit modèle + vérification sur grand modèle » peut être utilisé dans l'environnement de production",
          "Éducation : convient au tutorat des Olympiades de mathématiques, mais doit empêcher la divulgation directe des questions."
        ],
        "tags": [
          "o3",
          "推理",
          "数学"
        ]
      },
      {
        "id": "2026-05-25-world-model-robotics",
        "title": "Google DeepMind lance le modèle mondial Genie 3 : formation en simulation de robot",
        "summary": "Genie 3 peut générer des scènes 3D interactives à partir d'une seule image pour augmenter les données de simulation pour l'apprentissage des politiques des robots.",
        "source": "DeepMind",
        "body": [
          "Capacité : amélioration de la cohérence des scènes d'interaction au niveau minute. Il s'agit de l'un des changements les plus observés dans le domaine de recherche révolutionnaire du 25/05/2026 entourant \"Google DeepMind lance le modèle mondial Genie 3\".",
          "Application : Réduisez les coûts réels de collecte des robots. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Un aperçu révisable d’une première ébauche de proposition.",
          "Suivi : L’entrepreneuriat intelligent incarné devrait se concentrer sur le transfert simulation-réel. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Capacité : cohérence améliorée des scénarios d'interaction au niveau infime",
          "Application : Réduisez le coût de la véritable collecte de robots",
          "Limites : la précision physique n’est toujours pas suffisante pour remplacer les moteurs haute fidélité",
          "Suivi : l'entrepreneuriat intelligent incarné devrait se concentrer sur la migration simulée-réelle"
        ],
        "tags": [
          "世界模型",
          "机器人",
          "仿真"
        ]
      },
      {
        "id": "2026-05-24-llm-memory-compress",
        "title": "Le MIT propose une compression de mémoire à long terme LLM : 1/8 de préservation du contexte, 95 % de rappel",
        "summary": "La nouvelle méthode distille le dialogue historique en vecteurs de mémoire récupérables, obtenant ainsi des performances quasi-contextuelles sur LongMemEval.",
        "source": "MIT CSAIL",
        "body": [
          "Idée : Résumé hiérarchique + index vectoriel remplacent l'orthographe violente du contexte. Il s’agit de l’un des changements les plus observés dans le domaine de recherche révolutionnaire du 2026-05-24 autour du « MIT propose la compression de mémoire à long terme LLM ».",
          "Avantages : Réduisez les coûts des API de longue session. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Risque : La perte de détails dans le résumé peut entraîner des erreurs contractuelles. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Ingénierie : peut être combinée avec des bibliothèques vectorielles existantes pour la mise en œuvre. Pour les apprenants en IA, cela peut être utilisé pour mettre à jour les cartes d’outils personnelles et les listes de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Idée : résumé hiérarchique + index vectoriel pour remplacer l'orthographe violente du contexte",
          "Avantage : coûts d'API réduits pour les longues sessions",
          "Risque : des détails manquants dans le résumé peuvent entraîner des erreurs contractuelles",
          "Ingénierie : peut être combinée avec des bibliothèques vectorielles existantes pour la mise en œuvre"
        ],
        "tags": [
          "记忆",
          "RAG",
          "上下文"
        ]
      },
      {
        "id": "2026-05-23-mm-math-reasoning",
        "title": "Publication du benchmark de raisonnement mathématique multimodal MM-MATH : les questions graphiques constituent la plus grande lacune",
        "summary": "Le nouveau benchmark comprend des graphiques statistiques et des questions de dessin géométrique. La précision du modèle le plus puissant sur les questions liées aux graphiques n'est que de 62 %, ce qui révèle l'écart entre les symboles visuels et les symboles.",
        "source": "MM-MATH Paper",
        "body": [
          "Découverte : la force des questions textuelles n’est pas égale à la force des questions graphiques. Il s’agit de l’un des changements les plus observés dans le domaine de recherche révolutionnaire du 23/05/2026 entourant la « version MM-MATH de référence de raisonnement mathématique multimodal ».",
          "Données : un ensemble de formation couplé à l'inférence de graphiques de haute qualité est requis. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Application : Les questions et réponses sur les états financiers doivent être lancées avec prudence. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Évaluation : les entreprises doivent créer leur propre ensemble de tests de graphiques de domaines. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Découverte : la force des questions textuelles n'est pas égale à la force des questions graphiques",
          "Données : nécessite des graphiques de haute qualité – ensemble de formation couplé à l'inférence",
          "Application : Les questions et réponses sur les états financiers doivent être lancées en ligne avec prudence",
          "Évaluation : les entreprises doivent créer leur propre ensemble de tests de graphiques de domaines"
        ],
        "tags": [
          "多模态",
          "数学",
          "评测"
        ]
      },
      {
        "id": "2026-05-22-alphafold-update",
        "title": "Aperçu AlphaFold 4 : prédiction de la structure complexe protéine-ligand",
        "summary": "DeepMind présente en avant-première la précision de prédiction améliorée des sites de liaison des molécules médicamenteuses d'AlphaFold 4, et les sociétés pharmaceutiques étendent leur coopération pilote.",
        "source": "DeepMind",
        "body": [
          "Percée : corrélation améliorée du classement de l'énergie libre de liaison. Il s'agit de l'un des changements les plus surveillés autour de \"l'aperçu AlphaFold 4\" dans le domaine des percées de la recherche du 2026-05-22.",
          "Ouvert : Licence académique non commerciale, les sociétés pharmaceutiques ont besoin d'un accord commercial. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer complètement le trafic de production sans vérification pilote.",
          "Puissance de calcul : inférence mono-complexe en quelques minutes. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Crossover : La demande de talents composites biologie + IA augmente. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Percée : amélioration de la corrélation des classements contraignants d’énergie libre",
          "Ouvert : licence académique non commerciale, accord commercial avec une société pharmaceutique requis",
          "Puissance de calcul : inférence composée unique en quelques minutes",
          "Crossover : Biologie + IA, la demande de talents composites augmente"
        ],
        "tags": [
          "生物",
          "AlphaFold",
          "科研"
        ]
      },
      {
        "id": "2026-05-21-synthetic-data-train",
        "title": "Méta-recherche : des données synthétiques de haute qualité peuvent remplacer 40 % des annotations manuelles",
        "summary": "L'article montre que les données synthétiques générées + filtrées par le modèle d'enseignant sont comparables à l'annotation manuelle dans les tâches de classification et d'extraction, mais que les questions d'inférence sont sujettes au surajustement.",
        "source": "Meta AI Research",
        "body": [
          "Méthode : Génération d'enseignants → Filtrage du modèle de qualité → Apprentissage des cours C'est l'un des changements les plus observés autour de la « Méta-recherche » dans le domaine des avancées de la recherche le 2026-05-21.",
          "Applicable à : La classification, le NER et la conversion de format en bénéficieront le plus. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Risque : Le raisonnement/les mathématiques sont sujets à l'effondrement du modèle. En termes d'activité et de conformité, il est recommandé de vérifier simultanément les obligations de résidence des données, de conservation des journaux et de notification des utilisateurs, en particulier lorsque le produit est destiné à des utilisateurs transfrontaliers ou multirégionaux.",
          "Pratique : le réglage fin de l'entreprise peut être mélangé à 30 % de démarrage synthétique. Pour les apprenants en IA, cela peut être utilisé pour mettre à jour la carte des outils personnels et la liste des pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Méthode : Génération d'enseignants → Filtrage du modèle de qualité → Apprentissage des cours",
          "Applicable : la classification, le NER et la conversion de format bénéficieront le plus",
          "Après la génération, affinez la v0 pour « réduire les ombres et augmenter la taille de la police du titre » pour être plus raffiné.",
          "Pratique : Réglage fin d'entreprise Démarrage synthétique à 30 % mixable"
        ],
        "tags": [
          "合成数据",
          "训练",
          "成本"
        ]
      },
      {
        "id": "2026-05-20-sparse-attn-2m",
        "title": "Une attention éparse permet une vérification expérimentale du contexte de 2 millions de jetons",
        "summary": "Plusieurs laboratoires ont annoncé une architecture hybride clairsemée + fenêtre coulissante, permettant d'obtenir une précision utilisable dans l'expérience de questions et réponses du livre de jetons 2M.",
        "source": "arXiv",
        "body": [
          "Architecture : Block Sparse + Global Anchor Token Il s'agit de l'un des changements les plus surveillés dans le domaine de recherche révolutionnaire du 20/05/2026 autour de « Sparse Attention Achieves 2 Million Token Context Experimental Verification ».",
          "Coût : La mémoire est réduite de 70 %, mais la mise en œuvre est compliquée. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Produit : L'API Cloud n'est pas encore généralement ouverte. En termes d'activité et de conformité de 2M, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "RAG : Les scénarios d'articles extrêmement longs peuvent être un choix entre RAG et RAG. Pour les apprenants en IA, ils peuvent l'utiliser pour mettre à jour leur carte d'outils personnelle et leur liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Architecture : bloc clairsemé + jeton d'ancrage global",
          "Coût : Mémoire réduite de 70% mais mise en œuvre complexe",
          "Produit : L'API Cloud n'est généralement pas encore ouverte 2M",
          "RAG : les scénarios de texte extrêmement longs peuvent être un choix entre RAG et RAG"
        ],
        "tags": [
          "长上下文",
          "架构",
          "研究"
        ]
      },
      {
        "id": "2026-05-19-self-evolving-agents",
        "title": "L'article sur l'agent auto-évolutif suscite de vives discussions : la bibliothèque d'outils étend automatiquement les expériences à risque contrôlé",
        "summary": "L'agent apprend lui-même de nouveaux scripts d'outils dans le bac à sable, avec un taux d'achèvement des tâches de +18 %, mais il existe également des cas de requêtes réseau non autorisées.",
        "source": "AgentEvo Paper",
        "body": [
          "Résultat : L’outil d’expansion automatique est efficace mais nécessite un bac à sable. Il s'agit de l'un des changements les plus observés dans le domaine des percées en matière de recherche le 19/05/2026 autour du « papier sur les agents auto-évolutifs suscitant des discussions brûlantes ».",
          "Sécurité : la liste blanche du réseau et l'audit du code sont requis. Les équipes techniques et produit doivent évaluer les coûts d’intégration, les modifications d’autorisations et les plans de restauration en conséquence pour éviter de basculer tout le trafic de production sans vérification pilote.",
          "Industrie : le marketing « auto-apprenant » doit réduire les attentes. En termes d'activité et de conformité, il est recommandé de vérifier simultanément la résidence des données, la conservation des journaux et les obligations de notification des utilisateurs, en particulier lorsque le produit est destiné aux utilisateurs transfrontaliers ou multirégionaux.",
          "Recommandation : seuls les ensembles d'outils enregistrés sont autorisés pour la production. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine."
        ],
        "highlights": [
          "Résultat : l'outil de mise à l'échelle automatique fonctionne mais nécessite un sandboxing",
          "Sécurité : la liste blanche du réseau et l'audit du code sont requis",
          "Industrie : le marketing « auto-apprenant » doit réduire les attentes",
          "Recommandation : La production autorise uniquement les ensembles d'outils enregistrés"
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
      "lead": "Des didacticiels pratiques quotidiens pour les derniers outils et flux de travail. Les cas étape par étape incluent des invites prêtes à copier.",
      "updatedLabel": "Dernière mise à jour : {date}",
      "countShown": "Affichage de {visible}/{total}",
      "emptyHint": "Aucun tutoriel dans cette catégorie. Essayez une autre balise.",
      "newBadge": "Nouveau",
      "illustratedBadge": "Pas à pas",
      "backToList": "Retour aux tutoriels"
    },
    "categories": {
      "全部": "Tous",
      "编程开发": "Recherche de recherche",
      "提示词": "mot d'invite",
      "图像视频": "image vidéo",
      "自动化": "automation",
      "办公效率": "Efficacité du bureau"
    },
    "items": [
      {
        "id": "2026-07-04-cursor-web-calculator",
        "title": "Étape par étape : utilisez l'IA pour créer une calculatrice Web",
        "desc": "De zéro à un, utilisez Cursor Agent pour générer une calculatrice HTML pouvant être exécutée par double-clic. Le diagramme suivant illustre chaque étape : création d'un projet, écriture des mots d'invite, vérification du code, aperçu du navigateur, test et réparation.",
        "illustratedSteps": [
          {
            "title": "Créer un nouveau dossier de projet vide",
            "text": "Créez le dossier calc-demo sur le bureau et ouvrez-le avec Fichier du curseur → Ouvrir le dossier. Assurez-vous que le projet est vide afin que l'IA puisse générer un seul fichier à partir de zéro.",
            "image": "assets/tutorials/calc-step-1-folder.svg",
            "alt": "在 Cursor 中打开空的 calc-demo 项目文件夹"
          },
          {
            "title": "Ouvrez Composer et collez le mot d'invite",
            "text": "Appuyez sur Cmd+I (Mac) ou Ctrl+I (Windows) pour ouvrir le panneau Agent, collez les mots d'invite au bas du didacticiel et cliquez sur Générer. AI créera un seul fichier index.html.",
            "image": "assets/tutorials/calc-step-2-composer.svg",
            "alt": "在 Cursor Composer 中输入计算器提示词",
            "caption": "提示词越具体，生成结果越接近预期。可先复制教程底部模板再微调。"
          },
          {
            "title": "Vérifiez la structure du code généré",
            "text": "Confirmez que index.html apparaît dans l'explorateur de gauche. Ouvrez le fichier et vérifiez s'il contient une structure HTML, un style CSS et une logique de calcul JavaScript.",
            "image": "assets/tutorials/calc-step-3-code.svg",
            "alt": "检查 AI 生成的 index.html 代码"
          },
          {
            "title": "Calculateur d'aperçu du navigateur",
            "text": "Cliquez avec le bouton droit sur index.html → Révéler dans le Finder / Révéler dans le dossier, double-cliquez pour l'ouvrir dans Chrome ou Safari. L'aperçu en direct peut également être étendu avec Cursor Live Server.",
            "image": "assets/tutorials/calc-step-4-preview.svg",
            "alt": "在浏览器中预览网页计算器"
          },
          {
            "title": "Testez élément par élément et demandez des correctifs",
            "text": "Testez les boutons d'addition, de soustraction, de multiplication, de division et d'effacement. Si le bouton ne répond pas ou s'il y a une erreur dans l'opérateur continu, sélectionnez le code correspondant et demandez à l'IA : \"Le bouton ne répond pas lorsque vous cliquez dessus, veuillez le corriger.\" Il faut 1 à 2 itérations pour se stabiliser.",
            "image": "assets/tutorials/calc-step-5-test.svg",
            "alt": "测试计算器并追问 AI 修复问题"
          }
        ],
        "prompt": "S'il vous plaît, aidez-moi à créer une page Web de calculatrice simple et belle en utilisant HTML + CSS + JavaScript :\n\nExigences fonctionnelles :\n- Prise en charge de l'addition, de la soustraction, de la multiplication, de la division et de la compensation (C)\n- L'écran affiche les entrées et les résultats en temps réel\n- Prévenir les erreurs logiques courantes telles que la pression continue sur les opérateurs\n-Prise en charge de la saisie des touches numériques du clavier (bonus en option)\n\nExigences de conception :\n- Thème sombre, boutons arrondis, léger retour au survol\n- Peut également être utilisé normalement sur les appareils mobiles\n\nConditions de livraison :\n- Générer un seul fichier index.html, qui peut être ouvert directement dans le navigateur en double-cliquant dessus.\n-Code plus commentaires chinois\n-Enfin, dis-moi comment exécuter et tester",
        "result": "Obtenez une calculatrice Web qui peut être ouverte par double-clic, peut effectuer quatre opérations arithmétiques et maîtriser la boucle fermée de programmation de l'IA de « Décrire les exigences → Générer → Aperçu → Commentaires et réparation ».",
        "tips": "Il n’est pas nécessaire de rechercher une interface utilisateur parfaite du premier coup. Parcourez d'abord la logique, puis laissez l'IA vous aider à \"changer le bouton en cercle et la couleur principale en cyan\"."
      },
      {
        "id": "2026-07-04-cursor-local-matting",
        "title": "Étape par étape : utilisez l'IA pour créer un outil de découpe local",
        "desc": "Ne comptez pas sur l'API en ligne, utilisez le curseur pour générer une page Web découpée locale Flask + rembg : faites glisser et déposez pour télécharger des images, l'IA locale pour supprimer l'arrière-plan, téléchargez le PNG transparent. Convient pour les photos de commerce électronique et le traitement de photos d'identité.",
        "illustratedSteps": [
          {
            "title": "Créer un projet et installer les dépendances",
            "text": "Créez un nouveau dossier bg-remove et ouvrez-le avec le curseur. Créez un environnement virtuel dans le terminal et installez rembg, flask, Pillow : pip install rembg flask Pillow. Exécuter rembg pour la première fois téléchargera automatiquement le modèle local.",
            "image": "assets/tutorials/matting-step-1-setup.svg",
            "alt": "创建 bg-remove 项目并安装 Python 依赖"
          },
          {
            "title": "Décrire l'outil complet en langage naturel",
            "text": "Collez les mots d'invite au bas du didacticiel dans l'agent Cursor pour générer le backend Flask + l'interface de téléchargement par glisser-déposer + l'inférence locale rembg. Il est clairement souligné que « les images ne sont pas téléchargées sur le cloud, mais sont toutes traitées localement ».",
            "image": "assets/tutorials/matting-step-2-prompt.svg",
            "alt": "向 Cursor 描述本地抠图工具需求",
            "caption": "若生成代码报错，把终端报错信息贴回对话，AI 会逐行修复。"
          },
          {
            "title": "Démarrez le service et ouvrez la page de téléchargement",
            "text": "Le terminal exécute python app.py et le navigateur accède à http://127.0.0.1:5000. La page doit afficher une zone de téléchargement par glisser-déposer, prenant en charge les formats JPG/PNG.",
            "image": "assets/tutorials/matting-step-3-upload.svg",
            "alt": "打开本地抠图工具上传页面"
          },
          {
            "title": "Téléchargez des images et l'IA locale les supprimera automatiquement",
            "text": "Contexte inter-applications : Copilot peut lire les fils de discussion de courrier électronique et les documents SharePoint autorisés par l'utilisateur, et effectuer « lire les minutes → modifier le plan → envoyer aux équipes » en une seule conversation. Il s’agit de l’un des changements les plus surveillés dans le domaine de la version du produit du 27/06/2026 entourant le « lancement complet de Microsoft Copilot Workspace ».",
            "image": "assets/tutorials/matting-step-4-process.svg",
            "alt": "本地 rembg 模型处理抠图"
          },
          {
            "title": "Prévisualisez, comparez et téléchargez PNG",
            "text": "Comparez l'image originale et le résultat de la découpe des côtés gauche et droit de la page, puis cliquez sur \"Télécharger le fond transparent PNG\" après avoir confirmé que vous êtes satisfait des bords. Le fichier peut être utilisé directement dans la page de détails PPT, Figma ou e-commerce.",
            "image": "assets/tutorials/matting-step-5-download.svg",
            "alt": "预览抠图结果并下载 PNG"
          }
        ],
        "prompt": "S'il vous plaît, aidez-moi à créer un outil de découpe exécuté localement (Python + Flask + rembg) :\n\nFonction :\n1. La page Web prend en charge le glisser ou le clic pour télécharger JPG/PNG\n2. Le backend utilise rembg pour supprimer l'arrière-plan localement sans télécharger d'API tierce.\n3. Renvoyez le PNG d'arrière-plan transparent et la page Web affiche la comparaison image/résultat d'origine\n4. Fournissez un bouton de téléchargement pour enregistrer le résultat.png\n\nStructure du projet :\n- app.py (programme principal Flask)\n- static/index.html (page frontale, interface utilisateur sombre et simple)\n- téléchargements/répertoire temporaire\n-requirements.txt\n\nExigences :\n-Code plus commentaires chinois\n- Donnez la commande de démarrage et l'adresse d'accès\n- Gérer les erreurs courantes (fichier trop volumineux, format non pris en charge)",
        "result": "Un outil Web de découpe locale fonctionnant sur localhost. Faites glisser et déposez pour télécharger pour obtenir un arrière-plan PNG transparent, et l'ensemble du processus est traité hors ligne.",
        "tips": "L’effet d’un portrait découpé est généralement meilleur que celui d’images de produits capillaires complexes. Si les bords sont irréguliers, vous pouvez demander à l'IA : \"Ajouter des paramètres d'adoucissement des bords\" ou passer au modèle isnet."
      },
      {
        "id": "2026-07-02-cursor-plan-mode",
        "title": "Utilisez le mode Cursor Plan pour décomposer les exigences et générer des modifications au niveau PR",
        "desc": "Découvrez le nouveau mode Plan du curseur : laissez d'abord l'agent générer le plan de mise en œuvre et la liste des fichiers, puis exécutez-le étape par étape. Il convient au développement fonctionnel à moyenne et grande échelle sans perte de contrôle.",
        "steps": [
          "Ouvrez le curseur et appuyez sur Cmd+I dans le projet pour entrer dans l'agent.",
          "Exigences de saisie : \"Ajouter le passage en mode sombre au site d'apprentissage, y compris la persistance de localStorage\"",
          "Sélectionnez le mode Plan pour permettre à l'agent de sortir en premier les étapes, les fichiers impliqués et les points à risque.",
          "Après avoir confirmé le plan élément par élément, cliquez sur Exécuter et observez l'aperçu des différences.",
          "Posez des questions sur le code sélectionné dont vous n'êtes pas satisfait : \"Déplacez le bouton de commutation vers le côté droit de l'en-tête\"",
          "Exécutez l'aperçu local et confirmez que l'état est conservé après le changement de thème et l'actualisation"
        ],
        "prompt": "Veuillez implémenter le changement de thème sombre/clair pour les sites statiques :\n1. Utilisez des variables CSS pour définir la correspondance des couleurs, et le thème des données est accroché au HTML\n2. Un bouton à bascule circulaire est ajouté sur le côté droit de l'en-tête et l'icône utilise les symboles du soleil et de la lune.\n3. Choisissez d'écrire sur localStorage et de le conserver après l'actualisation.\n4. Affichez d'abord le plan : liste des fichiers, étapes, risques potentiels, puis modifiez le code après l'avoir confirmé.",
        "result": "Obtenez un site d'apprentissage commutable et comprenez le flux de travail Planifier → Exécuter l'agent.",
        "tips": "Le cœur du mode Plan est « aligner d'abord, puis démarrer », ce qui peut réduire considérablement la confusion causée par l'IA modifiant trop de fichiers à la fois."
      },
      {
        "id": "2026-07-02-claude-projects-briefing",
        "title": "Utilisez Claude Projects pour créer un espace de travail de compilation automatique pour \"AI Industry Daily\"",
        "desc": "Placez les liens d'information et les modèles de résumé dans la base de connaissances du projet et collez de nouveaux liens chaque jour pour générer un format unifié de rapports quotidiens de l'industrie, pouvant être partagés lors des réunions d'équipe du matin.",
        "steps": [
          "Connectez-vous à claude.ai et créez un nouveau projet \"AI Daily\"",
          "Écrivez le format de sortie dans les instructions du projet : titre, trois points clés, une profondeur et des recommandations d'action.",
          "Limites : la capacité chinoise est plus faible que le modèle équivalent Qwen",
          "Collez chaque jour 5 à 8 liens d'actualité et des résumés d'une phrase dans les conversations",
          "Laissez Claude dédupliquer, trier et générer des rapports quotidiens Markdown",
          "Copier dans le document Notion ou Feishu pour publication"
        ],
        "prompt": "L’AI Industry Daily (chinois) d’aujourd’hui est généré sur la base des liens d’information et des résumés suivants :\n\nFormat :\n## {Date} Actualités IA\n### titres\n### Trois nouvelles (dans les 80 mots chacune)\n### Tendances à suivre\n### Conseils concrets du jour (point de vue de l'apprenant)\n\nExigences : Supprimez les doublons, soyez objectif, marquez les sources et n'inventez pas d'informations qui ne sont pas fournies.",
        "result": "Un document unifié et prêt à être publié sur l'actualité quotidienne de l'IA.",
        "tips": "Les instructions du projet sont rédigées une seule fois et peuvent être réutilisées ; le lien source doit être collé avec le texte original pour éviter des détails incorrects dans le modèle."
      },
      {
        "id": "2026-07-01-gemini-deep-research",
        "title": "Gemini Deep Research réalise des rapports de recherche sur les produits compétitifs",
        "desc": "Utilisez la fonction de recherche approfondie de Gemini pour parcourir automatiquement plusieurs sources et générer une analyse de produits concurrentiels avec des références, qui permet aux étudiants en produits et en marchés de publier rapidement.",
        "steps": [
          "Ouvrez gemini.google.com et sélectionnez Recherche approfondie",
          "Entrez dans le sujet de recherche : « Comparaison des assistants de programmation IA concurrents en 2026 : Cursor, Windsurf, Claude Code »",
          "Attendez que l'agent recherche et lise automatiquement. Pendant cette période, vous pouvez ajouter : \"Concentrez-vous sur la comparaison des prix et du support chinois\"",
          "Exporter vers Google Doc ou copier vers Markdown une fois la recherche terminée",
          "Vérifiez manuellement les prix clés et les descriptions de fonctions, et supprimez les références obsolètes.",
          "Organiser les conclusions dans une note de décision partagée par l'équipe"
        ],
        "prompt": "Veuillez effectuer une recherche de produits compétitifs pour l'assistant de programmation IA 2026 : Cursor, Windsurf, Claude Code, GitHub Copilot.\nDimensions de comparaison : tarification, prise en charge de l'IDE, capacités de l'agent, expérience chinoise et conformité de l'entreprise.\nRésultat : résumé, tableau comparatif, recommandations de sélection (apprenant individuel/petite équipe).\nLa date de la source de l'information doit être notée.",
        "result": "Rapport de recherche concurrentiel structuré avec citations.",
        "tips": "Il est normal qu’une recherche approfondie prenne 5 à 15 minutes ; assurez-vous de vérifier manuellement les informations volatiles telles que les pages de prix avant de les publier."
      },
      {
        "id": "2026-07-01-n8n-ai-newsletter",
        "title": "Workflow n8n : agrégation RSS → résumé IA → newsletter par e-mail",
        "desc": "Créez un pipeline automatisé sans code pour capturer régulièrement les flux RSS des blogs IA, utilisez les nœuds OpenAI pour générer des résumés et les envoyer par e-mail.",
        "steps": [
          "Enregistrez n8n Cloud ou Docker local pour démarrer n8n",
          "Créez un nouveau workflow et ajoutez un déclencheur de planification (8h00 tous les jours)",
          "Ajoutez le nœud RSS Read et remplissez OpenAI, Anthropic, Google AI blog officiel RSS",
          "Le nœud de fusion fusionne les entrées, le filtre supprime les GUID traités en double",
          "Nœud OpenAI : générer des nouvelles chinoises de 200 mots à partir du titre + du résumé",
          "Le nœud Gmail/SMTP s'envoie l'e-mail \"AI Morning News\"",
          "Activez le workflow, vérifiez les performances des e-mails le lendemain et affinez les mots d'invite"
        ],
        "prompt": "Vous êtes l'éditeur de l'industrie de l'IA. Afficher les nouvelles du matin d'aujourd'hui en fonction de l'entrée RSS suivante (JSON) :\n1. Sélectionnez les 5 actualités les plus importantes (chacune ≤ 80 mots, avec lien texte original)\n2. Un commentaire de tendance sur « Les apprenants méritent qu'on y prête attention » (≤ 120 mots)\nTon : concis, objectif, chinois.",
        "result": "Le briefing récapitulatif de l’industrie de l’IA, livré automatiquement quotidiennement dans votre boîte de réception.",
        "tips": "Utilisez 2 flux RSS pour tester d'abord, puis développez ; faites attention aux frais d'API et aux limites de fréquence d'envoi d'e-mails."
      },
      {
        "id": "2026-06-30-midjourney-style-ref",
        "title": "Référence de style à mi-parcours (--sref) pour les illustrations de séries",
        "desc": "Utilisez une image de référence pour verrouiller le style visuel, générez par lots une série d'images de blog ou de couverture de cours et gardez le ton de la marque cohérent.",
        "steps": [
          "Lorsque de nouvelles versions sont publiées, les journaux des modifications sont automatiquement capturés et l’IA est utilisée pour rédiger de courts articles dans le style des comptes officiels.",
          "Téléchargez l'image de référence sur Midjourney et copiez le lien de l'image",
          "arXiv",
          "Ajoutez --ar 16:9 et les mots-clés de couleur principale de la marque à la série de didacticiels",
          "Après avoir généré par lots 4 images, vous agrandissez la version sélectionnée.",
          "Exporter pour la bannière du site ou la couverture du compte officiel"
        ],
        "prompt": "Interface utilisateur futuriste du tableau de bord d'apprentissage de l'IA, palette bleu sarcelle et bleu marine foncé, lueur douce, typographie minimale, motif de réseau neuronal abstrait --ar 16:9 --sref {votre lien d'image de référence} --sw 75 --v 6",
        "result": "Un ensemble d'images de style technologique 16:9 avec un style visuel unifié.",
        "tips": "--sw Poids du style de contrôle : 60–100 Couramment utilisé ; Si la valeur est trop élevée, l'image copiera presque la composition de l'image de référence."
      },
      {
        "id": "2026-06-30-dify-knowledge-bot",
        "title": "Le robot questions-réponses de la base de connaissances Dify accède aux notes d'étude",
        "desc": "Importez des notes d'étude Markdown dans la base de connaissances Dify et publiez un robot assistant pédagogique exclusif qui peut répondre « Comment comprenez-vous un certain terme ? »",
        "steps": [
          "Connectez-vous à Dify et créez une application « Base de connaissances »",
          "Téléchargez des notes Markdown ou synchronisez les fichiers d'exportation Notion",
          "Définir une stratégie de segmentation : segmenter par titre, réserver 500 à 800 blocs",
          "Créer une application de conversation, associer la base de connaissances et activer l'affichage des références",
          "Grok",
          "Publiez une application Web ou intégrez un test iframe sur un site d'apprentissage"
        ],
        "prompt": "Vous êtes un assistant d'apprentissage de l'IA. Réponse basée uniquement sur le contenu de la base de connaissances, citant des extraits du texte original.\nS'il n'y a pas de contenu pertinent dans la base de connaissances, indiquez clairement « non couvert dans les notes » et suggérez quel chapitre consulter.\nStructure de réponse : conclusion en une phrase + explication des points + mots-clés pour une lecture plus approfondie.",
        "result": "Un robot Q&A exclusif qui peut citer la source des notes.",
        "tips": "N'oubliez pas de réindexer dans Dify après avoir mis à jour vos notes ; mettre l'accent sur « aucune fabrication » dans l'invite peut réduire les hallucinations."
      },
      {
        "id": "2026-06-29-chatgpt-custom-gpt-tutorial",
        "title": "Effectuez une « révision rapide des mots » GPT personnalisé en 10 minutes",
        "desc": "Créez un GPT dédié pour votre équipe : vérifiez automatiquement la qualité des mots d'invite selon la structure RTFC et donnez des suggestions de réécriture, adaptées aux équipes d'apprentissage et de contenu.",
        "steps": [
          "Revenus : Abonnement personnel + Teams deux roues motrices, Teams croît plus vite",
          "Nom : Coach d’évaluation rapide ; Description Entrez le mot d'invite pour obtenir des commentaires d'évaluation",
          "Les instructions écrivent les dimensions de la révision : rôle, tâche, format, contraintes, testabilité.",
          "Téléchargez 2 à 3 exemples de bons/mauvais mots d'invite pour référence",
          "Désactivez la navigation Web et comptez uniquement sur les instructions + exemples",
          "Testez quelques mots d'invite et publiez le lien vers l'espace de travail que les étudiants pourront utiliser"
        ],
        "prompt": "Vous êtes un réviseur du projet Prompt Word. L'utilisateur soumettra une invite, veuillez noter RTFC (Role-Task-Format-Constraints) 1 à 5 et donnera :\n1. Avantages\n2. Liste de questions\n3. Version réécrite du mot d'invite\n4. Une entrée de test qui peut être utilisée pour vérifier l'effet\nTon : Coaching, chinois, concis.",
        "result": "Un GPT personnalisé partageable, spécifiquement pour réviser et réécrire les mots d'invite.",
        "tips": "La qualité des exemples détermine la limite supérieure du comportement GPT ; les bons cas de la bibliothèque d'exemples Prompt de ce site peuvent être exportés comme référence."
      },
      {
        "id": "2026-06-29-openclaw-daily-digest",
        "title": "Captures d'écran et remplissage de formulaires",
        "desc": "Utilisez OpenClaw pour configurer les tâches cron, filtrer les publications brûlantes liées à l'IA sur Hacker News et générer des résumés en chinois à transmettre à Telegram.",
        "steps": [
          "Installez et connectez-vous à OpenClaw CLI pour terminer l'autorisation du canal",
          "Créer une nouvelle tâche cron : exécutée toutes les 6 heures",
          "Script de tâche : récupérez les 10 meilleurs messages de mots clés IA dans l'API HN Algolia",
          "Appelez le modèle pour générer une traduction du titre chinois + un résumé en deux phrases",
          "Pousser vers la chaîne personnelle via Telegram Bot",
          "Exécutez un test manuel pour confirmer le format et la fréquence"
        ],
        "prompt": "Dans la liste suivante de publications de Hacker News, sélectionnez les 5 éléments les plus pertinents pour AI/LLM/Agent et publiez le briefing en chinois :\n- Titre chinois\n- Résumé en deux phrases\n- Faits saillants de la discussion (résumé des commentaires et points de vue)\n- Lien d'origine\nN'inventez pas de contenu qui n'existe pas dans la publication.",
        "result": "La chaîne Telegram reçoit régulièrement des posts sélectionnés sur l'IA en chinois.",
        "tips": "Effectuez d'abord un test à basse fréquence (une fois par jour), puis chiffrez après avoir confirmé qu'il est stable ; faites attention à la limite de fréquence des requêtes de l’API HN."
      },
      {
        "id": "2026-06-28-windsurf-refactor",
        "title": "Windsurf refactorise les fonctions héritées en mode strict TypeScript en un seul clic",
        "desc": "Sélectionnez les fonctions JS héritées et laissez Cascade terminer la complétion du type, diviser les effets secondaires et générer les tests les plus rapides.",
        "steps": [
          "Ouvrez le projet contenant Legacy.js avec Windsurf",
          "Sélectionnez la fonction objectif et ouvrez le chat Cascade",
          "Exigences : convertir en TS, extraire les fonctions pures et remplir JSDoc",
          "Laissez l'agent créer .test.ts avec le même nom et exécutez le test npm",
          "Si le test échoue, collez le rapport d'erreur dans l'itération de la boîte de dialogue.",
          "Utilisez git diff pour examiner les assertions de type avant de soumettre un PR"
        ],
        "prompt": "Veuillez refactoriser les fonctions JavaScript sélectionnées en mode strict TypeScript :\n1. Extrayez la fonction pure et placez les effets secondaires dans la couche externe\n2. Complétez les types d'entrée et de sortie, interdisez tout\n3. Ajouter le cas limite de couverture de test unique le plus rapide\n4. Gardez l'API externe inchangée\nDonnez d'abord Plan, confirmez puis modifiez le code.",
        "result": "Obtenez des versions refactorisées testées et sécurisées et comprenez le processus de refactorisation assisté par l'IA.",
        "tips": "Refactorisez uniquement une fonction à la fois pour éviter que l'agent ne perde le contrôle lors de la modification de l'intégralité du fichier en même temps."
      },
      {
        "id": "2026-06-27-copilot-pr-review",
        "title": "Utilisez Copilot pour créer une liste de contrôle de révision du code PR",
        "desc": "Commentez @copilot sur les PR GitHub pour générer des évaluations de sécurité, de performances et de lisibilité.",
        "steps": [
          "Ouvrir une Pull Request en attente d'examen",
          "Tapez @copilot /review dans le commentaire pour déclencher la révision",
          "Lire les commentaires de regroupement de gravité générés",
          "Répondre « faux positif : raison » aux éléments faussement positifs",
          "Pour les problèmes réels, laissez l’auteur les résoudre ou vous pouvez les suggérer directement.",
          "Confirmez que les éléments CI et de révision sont effacés avant la fusion"
        ],
        "prompt": "Veuillez consulter ce PR, affiché par niveau de gravité :\n- 🔴 Risque de sécurité/perte de données\n- 🟡Performance et maintenabilité\n- 🟢 Style et dénomination\nChaque fichier est joint à un numéro de ligne et à des suggestions de réparation.",
        "result": "Commentaires structurés sur l'examen des relations publiques pour réduire les erreurs.",
        "tips": "La publication des spécifications de codage de l'équipe dans le référentiel copilot-instructions.md fonctionnera mieux."
      },
      {
        "id": "2026-06-26-replit-rapid-api",
        "title": "Replit Agent 30 minutes pour créer une API de tâches + Swagger",
        "desc": "Générez des API Express CRUD en langage naturel, automatiquement accompagnées des pages de documentation de l'interface utilisateur Swagger.",
        "steps": [
          "Créer un nouveau modèle Replit Node.js",
          "Ouvrir l'agent et décrire les exigences de l'API Todo",
          "Une série d’illustrations dans un style IP unifié.",
          "Cliquez sur Exécuter et visitez /docs pour afficher Swagger",
          "Testez CRUD avec le client HTTP intégré",
          "Déployer sur le partage d'URL publique Replit"
        ],
        "prompt": "Veuillez utiliser Express pour créer une API Todo REST :\n- GET/POST/DELETE /todos\n- Stockez-le simplement en mémoire\n- Intégrer swagger-ui dans /docs\n- Contient la validation des entrées et la gestion des erreurs\nDonner les instructions d'utilisation.",
        "result": "API accessible en ligne et documentation interactive.",
        "tips": "Ajoutez simplement une boîte de dialogue pour modifier le stockage mémoire en Replit Database avant de vous connecter."
      },
      {
        "id": "2026-06-25-v0-landing-section",
        "title": "La v0 génère le bloc Hero de la page de destination de React",
        "desc": "La collection officielle de serveurs de référence maintenue par Anthropic (système de fichiers, git, fetch, mémoire, postgres, etc.). Les entrées « officielles » dans chaque catégorie de cette page proviennent de ce référentiel.",
        "steps": [
          "Ouvrez v0.dev et créez une nouvelle version",
          "Le champ Bitable est créé en premier pour éviter les échecs d'écriture.",
          "Sélectionnez le style shadcn + Tailwind",
          "Aperçu réactif après génération",
          "Cliquez sur Code pour copier le composant dans l'application Next.js/",
          "Vérification du développement d'exécution npm locale"
        ],
        "prompt": "Générez un héros de plateforme d'apprentissage IA :\n- Fond sombre avec une couleur d'accent cyan\n- Titre : Le meilleur chemin pour maîtriser l'IA\n- Double CTA : commencez à apprendre / parcourir les outils\n- shadcn/ui + Tailwind, compatible avec les appareils mobiles",
        "result": "Composants React Hero prêts à coller.",
        "tips": "Après la génération, affinez la v0 pour « réduire les ombres et augmenter la taille de la police du titre » pour être plus raffiné."
      },
      {
        "id": "2026-06-24-claude-code-test",
        "title": "Claude Code termine les tests d'intégration des modules existants",
        "desc": "Utilisez Claude Code dans le terminal pour analyser les trous de couverture, générer des tests d'intégration et exécuter CI.",
        "steps": [
          "Démarrez Claude à la racine du projet",
          "Rédigez un ordre du jour avant la réunion, publiez les points clés pendant la réunion et utilisez Notion AI pour générer des procès-verbaux et des tâches.",
          "Spécifier le répertoire : ajouter un test d'intégration pour le module d'authentification",
          "Demandez à Claude de créer tests/auth.int.test.ts",
          "Exécuter des tests et corriger les cas d'utilisation instables",
          "Soumettre et observer le feu vert CI"
        ],
        "prompt": "Analysez le rapport couverture/lcov et ajoutez des tests d'intégration pour src/auth/ :\n- Remplacer le succès/échec/verrouillage de la connexion\n- Utilisez supertest pour ajuster la couche HTTP\n- simulation de service de messagerie externe\nNe modifiez pas la logique du code de production à moins qu'un bug ne soit découvert.",
        "result": "Suites de tests intégrées avec une couverture accrue et un CI stable.",
        "tips": "La dérive de la portée peut être évitée en disant explicitement \"ajoutez simplement des tests et ne modifiez pas l'implémentation\"."
      },
      {
        "id": "2026-06-23-cursor-mcp-github",
        "title": "Le curseur se connecte à GitHub MCP : vérifiez les problèmes et ouvrez le PR dans la conversation",
        "desc": "Configurez le serveur GitHub MCP officiel, interrogez les problèmes d'entrepôt dans la boîte de dialogue Agent et créez une branche de réparation.",
        "steps": [
          "Définir une dérive horizontale lente",
          "Ajouter le serveur GitHub MCP et PAT",
          "Formulaire de libération : générez des pages de sujets publiques ou protégées par mot de passe, conservez des liens de référence traçables. Il s'agit de l'un des changements les plus surveillés concernant « Perplexity Pages Team Edition » dans le domaine de la version du produit le 24/06/2026.",
          "Boîte de dialogue : Répertorier les problèmes ouverts avec label=bug",
          "Sélectionnez-en un pour permettre à l'agent de créer une branche de réparation",
          "Après avoir examiné la différence, poussez et ouvrez un PR"
        ],
        "prompt": "Utilisation de GitHub MCP :\n1. Répertoriez les problèmes de bugs ouverts Top 5 de ce référentiel\n2. Sélectionnez #42 pour analyser la cause première\n3. Créez la branche fix/42 et soumettez le correctif minimal\n4. Ouvrez un PR avec les étapes de reproduction et les instructions de test.",
        "result": "Terminez la boucle fermée Issue → PR sans quitter l’EDI.",
        "tips": "Les autorisations PAT sont minimisées et seuls des jetons à granularité fine sont utilisés."
      },
      {
        "id": "2026-06-22-bolt-new-pwa",
        "title": "Bolt.new génère une page de mémorisation de mots PWA hors ligne",
        "desc": "Générez une PWA installable, comprenant du vocabulaire local et des rappels de révision quotidiens.",
        "steps": [
          "Boulon ouvert.nouveau",
          "Décrire les exigences de la carte de mots PWA et la correspondance des couleurs",
          "En attente de génération du projet React/Vite",
          "Aperçu du processus d'ajout à l'écran d'accueil",
          "Téléchargez ou synchronisez avec GitHub",
          "Installation et test d'appareils réels disponibles hors ligne"
        ],
        "prompt": "Créer une PWA de mémorisation de mots :\n- 20 mots par jour, retournez les cartes\n- Local localStorage enregistre la progression\n- Installable sur l'écran d'accueil, disponible hors ligne\n- Interface utilisateur sombre et simple",
        "result": "PWA de mémorisation de mots hors ligne installable.",
        "tips": "Laissez Bolt « compléter la stratégie de cache des techniciens de service » pour améliorer l’expérience hors ligne."
      },
      {
        "id": "2026-06-21-continue-oss-model",
        "title": "Continuer à configurer le modèle Ollama local pour la finalisation de la confidentialité",
        "desc": "Lorsque le modèle local Qwen3 est connecté au plug-in VS Code Continue, le code ne peut pas être téléchargé sur le cloud.",
        "steps": [
          "Installez Ollama et extrayez le modèle qwen3",
          "Installez l'extension Continuer VS Code",
          "config.json ajouter le fournisseur ollama",
          "Définir la complétion des onglets sur le même modèle que le chat",
          "Veillez à sauvegarder les informations d'identification cryptées pour l'auto-hébergement.",
          "Changer les règles de l'espace de travail pour restreindre les types de fichiers"
        ],
        "prompt": "Aidez-moi à écrire la configuration continue :\n- discuter et compléter automatiquement en utilisant ollama qwen3\n- Activer la complétion uniquement pour *.ts\n- Il est interdit aux projets d'entreprise de télécharger du code sur le cloud\nDonne le JSON complet.",
        "result": "Analyse SAST",
        "tips": "Lorsque la latence est élevée, un modèle quantifié plus petit est utilisé pour la complétion."
      },
      {
        "id": "2026-06-20-rtfc-interview",
        "title": "Modèle RTFC pour écrire les mots d'invite « entretien technique simulé »",
        "desc": "Utilisez les contraintes de rôle-tâche-format pour concevoir des invites d'intervieweur back-end réutilisables.",
        "steps": [
          "Créez une nouvelle conversation, notez d'abord Rôle : Intervieweur principal",
          "Tâche : Simuler un entretien back-end de 45 minutes",
          "Format : Une question et un commentaire à chaque tour, résumé final",
          "Contraintes : Il est interdit de donner directement des réponses complètes",
          "Collez le modèle et testez pendant un tour",
          "Enregistrer dans des notes pour la pratique quotidienne"
        ],
        "prompt": "Rôle : intervieweur senior Go back-end\nTâche : Simuler un entretien de 45 minutes pour examiner la concurrence et la conception du système\nFormat : une question à la fois → en attente de réponse → commentaire court → question suivante ; terminer la sortie de la feuille de match\nContraintes : Ne pas donner directement des réponses standards ; poser des questions qui ne sont pas celles qui leur sont posées.",
        "result": "Des conversations d’entretien simulées qui peuvent être utilisées encore et encore.",
        "tips": "Ajouter « un ajustement dynamique des questions en fonction de la difficulté de ma réponse » est plus proche de la réalité."
      },
      {
        "id": "2026-06-19-claude-xml-prompt",
        "title": "Structurez de longs mots d'invite avec des balises XML",
        "desc": "Veuillez produire des notes d'analyse structurées basées sur le rapport annuel PDF que j'ai téléchargé :\n\n## 1. Le positionnement de l'entreprise en une phrase\n## 2. Tendance du chiffre d'affaires/bénéfice net au cours des trois dernières années (tableau, indiquer l'unité)\n## 3. 3 faits marquants + 3 risques dans ce numéro (numéro de section/page pour chaque citation)\n## 4. Extraits des déclarations prospectives de la direction (texte original + numéro de page)\n## 5. Liste de questions des investisseurs (5 questions)\n\n#Règles\n- Les numéros doivent provenir de documents ; s'il manque, écrivez \"non divulgué\"\n- Ne spéculez pas sur des données financières qui n'apparaissent pas\n- L'unité de montant est conforme au texte original (10 000 yuans/100 millions de yuans)",
        "steps": [
          "Préparer un enregistrement de discussion du service client qui doit être analysé",
          "Coller dans Claude par sections à l'aide de balises XML",
          "Spécifiez le schéma JSON de sortie dans <rules>",
          "Exécutez et vérifiez que JSON est analysable",
          "La suppression de l'illusion de contraste XML augmente-t-elle ?",
          "Enregistrer comme modèle de projet"
        ],
        "prompt": "<context>Vous êtes inspecteur qualité du service client</context>\n<données>\n{coller la conversation}\n</données>\n<règles>\n1. Score de 1 à 5 basé uniquement sur les données\n2. Sortie JSON : {ton, résolution, escalade}\n3. Remplissez null si vous n'êtes pas sûr du champ.\n</règles>",
        "result": "Une sortie stable peut analyser les résultats de l’inspection de qualité JSON.",
        "tips": "Claude est plus sensible aux limites XML qu'aux en-têtes Markdown."
      },
      {
        "id": "2026-06-18-gemini-few-shot",
        "title": "Classification Gemini en quelques coups : reconnaissance de l'intention d'e-mail",
        "desc": "Donnez 6 exemples d'e-mails et d'étiquettes et laissez le modèle classer l'intention des nouveaux e-mails.",
        "steps": [
          "Collectez 6 exemples d'e-mails avec des étiquettes",
          "Classé par exemple/à classer format",
          "Ouvrez Gemini et collez l'invite complète",
          "Entrez le numéro de test 7",
          "S'il y a une erreur, ajoutez un exemple de limite",
          "Exporter en tant que modèle de classification d'équipe"
        ],
        "prompt": "Étiquetez les e-mails selon l'exemple : support_billing/support_technical/sales/spam\n\nExemple 1 : ...\nÉtiquette : support_billing\n...\nA classer :\n{nouvel e-mail}\nSeul le nom de la balise est affiché.",
        "result": "Mots d’invite du classificateur d’intention de courrier électronique très précis.",
        "tips": "Les exemples doivent couvrir des limites déroutantes telles que la facturation et la technique."
      },
      {
        "id": "2026-06-17-perplexity-system",
        "title": "Conseil de recherche sur Perplexity : application des plages de temps et des types de sources",
        "desc": "Rédaction d'invites de recherche Limites 2025-2026 Sources, priorité donnée aux documents et papiers officiels.",
        "steps": [
          "Ouvrir le nouveau fil de discussion Perplexity Pro",
          "Indiquez la fenêtre horaire et la priorité de la source dans l'invite",
          "Demander un tableau de comparaison des sorties + un devis",
          "Vérifiez si la note de bas de page provient d'une source officielle",
          "Renseignez-vous sur les articles incertains",
          "Exporter les archives PDF"
        ],
        "prompt": "Grok",
        "result": "Formulaire d'enquête traçable avec contraintes de temps.",
        "tips": "Ajout de « Exclure les sources secondaires avant 2024 » lorsque les anciennes nouvelles s'avèrent mélangées."
      },
      {
        "id": "2026-06-16-chatgpt-chain-of-density",
        "title": "Article long sur le résumé progressif de la chaîne de densité",
        "desc": "Laissez le modèle commencer par un bref résumé et répétez pendant 5 tours à chaque fois en augmentant la densité de l'entité sans s'allonger.",
        "steps": [
          "Collez un article de 3000 mots",
          "Round 1 Résumé de 80 mots demandé",
          "Instructions : ajoutez des détails à chaque tour suivant mais gardez le nombre de mots inchangé",
          "Enregistrez 5 séries de comparaisons récapitulatives",
          "Choisissez la version qui convient le mieux à votre affiche",
          "Résumé de quand utiliser CoD"
        ],
        "prompt": "Faites un résumé de la chaîne de densité des éléments suivants :\n- Tour 1 : 80 mots\n- Tours 2 à 5 : conservez 80 mots mais augmentez la densité des entités\nMarquez la liste des « nouvelles entités » à chaque tour\n\n{article}",
        "result": "Résumés de longueur fixe présentant une densité d’informations croissante.",
        "tips": "Parfait pour les podcasts Show Notes afin d'éviter d'être trop long."
      },
      {
        "id": "2026-06-15-claude-constitutional",
        "title": "Conseil constitutionnel : donnez les rênes à vos assistants de rédaction",
        "desc": "Utilisez des principes numérotés pour limiter le ton, les mots interdits et les sources de faits.",
        "steps": [
          "Liste 5 principes d'écriture",
          "Rédiger les instructions du projet Claude",
          "Téléchargez un brouillon qui doit être peaufiné",
          "Nécessite une auto-inspection de la constitution, article par article, puis une sortie",
          "Vérifier la violation de l'hyperbole interdite",
          "Enregistrer les instructions pour réutilisation par votre équipe"
        ],
        "prompt": "Rédiger la Constitution :\n1. N’utilisez pas de mots exagérés tels que « subversion » et « choc »\n2. Les données doivent être marquées « sur la base des matériaux fournis »\n3. Paragraphe ≤120 mots\n4. Structure de sortie : conclusion → argument → action\n5. Écrivez « à vérifier » en cas de doute.\nVeuillez peaufiner les éléments suivants et joindre un formulaire d’auto-examen constitutionnel.",
        "result": "Un projet soigné avec un ton sobre et une structure unifiée.",
        "tips": "Le nombre d'articles dans la constitution devrait être limité à 5-8. Trop d’articles réduiront le taux de conformité."
      },
      {
        "id": "2026-06-14-prompt-ab-test",
        "title": "Testez A/B deux mots d’invite et notez-les quantitativement",
        "desc": "Sujet de recherche : 5 tendances majeures dans l’adoption des agents d’IA par les entreprises en 2026\n\nPortée : rapports publics 2025-2026, articles, blogs des fabricants\n\nSortie :\n1. Résumé (200 mots)\n2. Cinq tendances (chacune : description | preuve | cas représentatif)\n3. 3 suggestions d'action pour les PME\n4. Liste de références (titre + lien + date)\n\nLa fabrication de sources est interdite.",
        "steps": [
          "Préparer 10 entrées de test",
          "Écrire l'invite A et l'invite B",
          "Exécution par lots pour collecter la sortie",
          "Marquez selon les 5 dimensions à l’aide des invites de l’arbitre",
          "Moyenne de comparaison tabulée",
          "La version gagnante est en ligne"
        ],
        "prompt": "Vous êtes le juge de l’évaluation des mots rapides. Notez deux résultats de la même entrée sur une échelle de 1 à 5 : exactitude, exhaustivité, format, concision, sécurité.\nEntrée : {x}\nSortie A : {a}\nSortie B : {b}\nGénérez du JSON et recommandez un gagnant.",
        "result": "Conclusion basée sur les données sur la sélection rapide des mots.",
        "tips": "L'ensemble de test doit contenir des entrées limitées et malveillantes."
      },
      {
        "id": "2026-06-13-meta-prompt-refine",
        "title": "Méta-invite : laissez l'IA vous aider à modifier le mot d'invite",
        "desc": "Donnez les invites approximatives à la méta-invite « entraîneur de mots d'invite » pour remplir automatiquement le RTFC.",
        "steps": [
          "Écrivez un rappel simple « Aidez-moi à rédiger mon rapport hebdomadaire »",
          "Appliquer un modèle de méta-invite",
          "Obtenez des versions adaptées et des cas de tests",
          "Vérifier avec des cas de test",
          "parcourir le tour",
          "Enregistrer dans le lexique d'invite"
        ],
        "prompt": "Vous êtes le coach du mot prompt. L'utilisateur donnera une invite simple, veuillez afficher :\n1. Diagnostic du problème\n2. Version réécrite complète du RTFC\n3. Deux entrées de test et points de sortie idéaux\nChinois, concis.",
        "result": "Obtenez la version professionnelle RTFC auprès de Humble Tips.",
        "tips": "La méta-invite ne modifie qu'un élément à la fois pour éviter une dégradation de la qualité des lots."
      },
      {
        "id": "2026-06-12-midjourney-character",
        "title": "Ajustez manuellement la copie et l'espacement",
        "desc": "Utilisez des références de personnages pour générer des illustrations multi-scènes de la même IP, adaptées aux mascottes du cours.",
        "steps": [
          "Créez d’abord un portrait de personnage satisfaisant",
          "Copier le lien de l'image en tant que --cref",
          "Écrivez différentes invites de scène à conserver --cw 80",
          "Sélection d'images par lots avec la plus grande cohérence",
          "Final Four haut de gamme",
          "Exporter PNG pour une utilisation dans les cours"
        ],
        "prompt": "La même mascotte \"Petit Robot Bleu\" étudie dans la bibliothèque, illustration plate, couleurs bleu et blanc --cref {url} --cw 85 --ar 1:1 --v 6",
        "result": "Une collection d’illustrations de personnages cohérentes d’une scène à l’autre.",
        "tips": "--cw S'il est trop élevé, la pose sera copiée et les actions remplaçables seront réduites."
      },
      {
        "id": "2026-06-11-runway-motion-brush",
        "title": "Runway Gen-3 Motion Brush fait bouger les affiches statiques",
        "desc": "Appliquez des vecteurs de mouvement aux nuages ​​et aux points lumineux de l'affiche et exportez une vidéo en boucle de 5 secondes.",
        "steps": [
          "Télécharger l'affiche IA JPG",
          "Choisissez Gen-3 Alpha Turbo",
          "Motion Brush peint les zones nuageuses",
          "Définir une dérive horizontale lente",
          "Prévisualiser et affiner l’intensité",
          "Exporter 1080p MP4"
        ],
        "prompt": "(Opération visuelle principalement) Motion Brush ne peint que les nuages ​​et les points lumineux, intensité 3/10, caméra fixe.",
        "result": "Peut être utilisé pour la vidéo en boucle d'arrière-plan du site Hero.",
        "tips": "Gardez la zone de déplacement aussi petite que possible pour éviter la distorsion de l'image entière."
      },
      {
        "id": "2026-06-10-kling-image2video",
        "title": "Vidéo de Keling Tusheng : des images de produits transformées en vidéos d'affichage de 5 secondes",
        "desc": "Téléchargez l'image du produit de commerce électronique, provoquez une légère rotation et un halo, et obtenez 5 secondes de matériel publicitaire.",
        "steps": [
          "Préparer le produit de fond transparent PNG",
          "Télécharger la vidéo de Ke Ling Tu Sheng",
          "Astuce : rotation lente + lumière douce",
          "Sélectionnez 5s 720p",
          "Générez 2 à 3 versions des meilleurs",
          "Télécharger pour une courte diffusion vidéo"
        ],
        "prompt": "Le produit reste centré, tourne lentement de 15 degrés, lumière douce en studio, fond dégradé gris clair, pas de texte.",
        "result": "Matériel vidéo de démonstration du produit de 5 secondes.",
        "tips": "Les images d'arrière-plan complexes sont d'abord découpées puis générées, de sorte que le corps principal est plus stable."
      },
      {
        "id": "2026-06-09-figma-ai-prototype",
        "title": "Figma AI génère des prototypes cliquables à partir de la rédaction",
        "desc": "Photo du produit sur fond blanc (mots d'invite positifs et négatifs)",
        "steps": [
          "Figma crée un nouveau fichier prototype d'IA",
          "Entrez la description de l'écran en trois segments et le flux des boutons",
          "Vérifier la mise en page automatique après la construction",
          "Ajustez manuellement la copie et l'espacement",
          "Partager le lien pour commenter avec des collègues",
          "Exporter l'annotation prête pour le développement"
        ],
        "prompt": "Générez une intégration sur 3 écrans : Bienvenue → Sélectionnez une cible → Cours recommandés ; le bouton principal « Continuer » prend en charge le retour ; le terminal mobile mesure 390 de large.",
        "result": "Lien cliquable vers le prototype basse fidélité.",
        "tips": "Édition d'images ChatGPT : remplacez l'arrière-plan par une photo en studio de couleur unie"
      },
      {
        "id": "2026-06-08-comfyui-workflow",
        "title": "Flux de travail ComfyUI : affiche précise SD3 + ControlNet",
        "desc": "Créez un flux de travail ControlNet de dessin au trait pour générer des affiches de cours par lots.",
        "steps": [
          "Installer les nœuds ComfyUI et SD3",
          "Importer OpenPose/Lineart ControlNet",
          "Téléchargez des dessins au trait ou des croquis de mise en page",
          "Connectez KSampler au nœud d'amplification",
          "File d'attente par lots 4 feuilles",
          "Après avoir sélectionné l'image, utilisez FaceDetailer pour découper votre visage."
        ],
        "prompt": "(Opération de workflow) Générez une affiche de cours de style technologique basée sur des dessins au trait, avec la zone de texte vide dans les 30 % supérieurs et la couleur principale bleu et noir.",
        "result": "Affiches par lots avec composition contrôlable.",
        "tips": "Il est toujours recommandé que le texte soit composé dans Figma ultérieurement, plutôt que de s'appuyer uniquement sur le modèle pour la composition."
      },
      {
        "id": "2026-06-07-chatgpt-image-edit",
        "title": "Édition d'images ChatGPT : remplacez l'arrière-plan par une photo en studio de couleur unie",
        "desc": "Téléchargez un portrait ou une image de produit, et le style conversationnel nécessite de changer l'arrière-plan et d'ajuster légèrement la couleur.",
        "steps": [
          "ChatGPT télécharger des images de produits",
          "Nécessite \"un fond blanc pur + une légère ombre\"",
          "Si vous n'êtes pas satisfait, entourez la zone et modifiez-la.",
          "Télécharger HD PNG",
          "Comparez la précision des couleurs de l'image originale",
          "Convertissez les documents du didacticiel en audio de narration chinoise naturelle."
        ],
        "prompt": "Utilisateurs : faites attention aux réductions éducatives et à la gestion des sièges d’équipe. Pour les apprenants en IA, vous pouvez l'utiliser pour mettre à jour votre carte d'outils personnelle et votre liste de pièges, et réaliser une opération pratique à petite échelle ou un partage interne en une semaine.",
        "result": "Image principale sur fond blanc disponible pour le commerce électronique.",
        "tips": "Plusieurs tours d’itération de sélection de cercle pour les bords de cheveux complexes."
      },
      {
        "id": "2026-06-06-capcut-ai-caption",
        "title": "Sous-titres CapCut AI + titres de chapitre générés automatiquement",
        "desc": "Importez des enregistrements d'écran de didacticiel, sous-titrez et générez des fiches de chapitre en un seul clic.",
        "steps": [
          "Importer un enregistrement d'écran de didacticiel de 10 minutes",
          "Reconnaître les sous-titres automatiques chinois",
          "Terminologie de relecture",
          "Les chapitres d'IA sont divisés en fonction des pauses",
          "Appliquer un style de sous-titre de marque",
          "Exporter le téléchargement 1080p"
        ],
        "prompt": "(Principalement pour les opérations sur les outils) Remplacez les termes tels que « API » et « RAG » après les sous-titres : {Glossaire}",
        "result": "Vidéos tutorielles avec marqueurs de chapitre.",
        "tips": "Vérifiez manuellement les termes professionnels avant d’exporter."
      },
      {
        "id": "2026-06-05-leonardo-consistent",
        "title": "Leonardo Mini IP de formation de référence sur les personnages",
        "desc": "Utilisez 4 images de référence pour verrouiller le personnage et générer des images de parcours par lots.",
        "steps": [
          "Téléchargez 4 photos du même personnage sous différents angles",
          "Activer la référence de personnage",
          "Régler l'intensité Moyenne",
          "Écrivez plusieurs invites de scène et générez-les par lots",
          "Récurrence fixe des graines",
          "Téléchargez l'Atlas des styles unifiés"
        ],
        "prompt": "professeur de mascotte vectorielle plate, scènes de classe et de bureau, palette bleu sarcelle, sourire amical",
        "result": "Une série d’illustrations dans un style IP unifié.",
        "tips": "L'éclairage de l'image de référence est cohérent et la génération est plus stable."
      },
      {
        "id": "2026-06-04-make-notion-sync",
        "title": "Scénario de création : soumission de formulaire → Base de données Notion + notification Slack",
        "desc": "Les nouvelles réponses Typeform sont automatiquement écrites dans Notion et transférées vers le résumé Slack.",
        "steps": [
          "Créer un nouveau scénario",
          "Le module Typeform écoute les nouvelles réponses",
          "Notion Créer des champs de mappage d'éléments de base de données",
          "Le module OpenAI génère un résumé de phrase",
          "Slack envoie des notifications de chaîne",
          "Exécutez des tests et activez la planification"
        ],
        "prompt": "Générez un résumé de phrase Slack basé sur le formulaire JSON, comprenant le nom, l'objectif, l'urgence, en chinois.",
        "result": "Entreposage et notification automatiques de bout en bout.",
        "tips": "Mappez d'abord les champs, puis connectez-vous à l'IA pour faciliter le débogage."
      },
      {
        "id": "2026-06-03-zapier-gmail-label",
        "title": "Zapier : étiquettes automatiques Gmail AI et brouillons de réponses",
        "desc": "Les nouveaux e-mails déclenchent la classification ChatGPT et sont étiquetés comme Gmail et génèrent éventuellement des brouillons.",
        "steps": [
          "Zapier connecte Gmail à OpenAI",
          "Déclencheur : nouvel e-mail",
          "Action : catégorie + balises suggérées",
          "Gmail Ajouter une étiquette",
          "Facultatif Créer un brouillon de réponse",
          "Testez 3 e-mails"
        ],
        "prompt": "Catégoriser les e-mails et générer du JSON : {label, urgence, draft_reply}\nÉnumération des balises : Client/Support/Newsletter",
        "result": "Boîte de réception catégorisée automatiquement avec des brouillons de réponses facultatifs.",
        "tips": "Les brouillons ne sont pas automatiquement envoyés par défaut pour éviter un envoi accidentel."
      },
      {
        "id": "2026-06-02-dify-http-tool",
        "title": "Le workflow Dify appelle l'API HTTP externe pour le calcul du devis",
        "desc": "Orchestrer les exigences d'analyse LLM → API d'ajustement des prix HTTP → format de devis.",
        "steps": [
          "Définir une nouvelle application Workflow",
          "Le nœud de démarrage reçoit le budget utilisateur et le nombre de personnes",
          "Le nœud LLM analyse en JSON structuré",
          "Le nœud HTTP appelle l'API de tarification interne",
          "Rendu du nœud de modèle Citation Markdown",
          "Publier des tests WebApp"
        ],
        "prompt": "Analysez les exigences des utilisateurs en JSON : {plan, sièges, mois}, n'inventez pas les prix, les champs inconnus sont nuls.",
        "result": "Générateur de devis automatique.",
        "tips": "Les nœuds HTTP ajoutent des délais d'attente et des branches d'erreur."
      },
      {
        "id": "2026-06-01-n8n-github-release",
        "title": "n8n surveille la version GitHub et génère des publications de mise à jour en chinois",
        "desc": "Lorsque de nouvelles versions sont publiées, les journaux des modifications sont automatiquement capturés et l’IA est utilisée pour rédiger de courts articles dans le style des comptes officiels.",
        "steps": [
          "Déclencheur n8n GitHub à la sortie",
          "Scénario de script CapCut AI",
          "OpenAI est réécrit sous la forme d'un tweet de compte public",
          "Enregistrer un brouillon Google Doc",
          "Examen des notifications de télégramme",
          "Publié après confirmation manuelle"
        ],
        "prompt": "Réécrivez le journal des modifications en anglais suivant dans un tweet de compte public chinois : titre + mise à jour en trois points + suggestions de mise à niveau, sans exagération.",
        "result": "Tweet de mise à jour de la version chinoise en attente d'examen.",
        "tips": "Ajoutez la commande \"Expliquer par analogie\" lorsque la version est trop technique."
      },
      {
        "id": "2026-05-31-openclaw-rss-summarize",
        "title": "OpenClaw regroupe le RSS et l'écrit dans les tables multidimensionnelles Feishu",
        "desc": "Capturez régulièrement le flux RSS du blog IA et rédigez le résumé dans Bitable pour que l'équipe puisse le parcourir.",
        "steps": [
          "OpenClaw nouveau cron",
          "Configurer les listes RSS",
          "Le GUID du filtre existe déjà",
          "Résumé de 80 mots généré par l'IA",
          "Feishu Bitable Nouvelle rangée",
          "Vue du rapport hebdomadaire regroupé par date"
        ],
        "prompt": "Sortie pour chaque RSS : titre chinois, résumé de 80 mots, 3 mots-clés et lien pour lire le texte original.",
        "result": "Bibliothèque d'informations sur l'IA dans Feishu Sheets.",
        "tips": "Le champ Bitable est créé en premier pour éviter les échecs d'écriture."
      },
      {
        "id": "2026-05-30-pipedream-youtube",
        "title": "Pipedream : nouvelles vidéos YouTube → E-mail de résumé",
        "desc": "Abonnez-vous aux mises à jour de la chaîne, transcrivez automatiquement les résumés et envoyez-les par e-mail.",
        "steps": [
          "Pipedream Sélectionnez une nouvelle vidéo YouTube",
          "Extraire des sous-titres ou une transcription audio",
          "Résumé en trois points d'OpenAI",
          "Envoyer un e-mail via SMTP",
          "ID vidéo traité par déduplication",
          "Tous les jours à 9 heures"
        ],
        "prompt": "Générer en fonction des sous-titres : ①Thème d'une phrase ②Trois points principaux ③Vaut-il la peine de regarder (1-5) le chinois.",
        "result": "La vidéo quotidienne met en lumière les e-mails.",
        "tips": "Les vidéos sans sous-titres doivent d’abord passer par l’étape Whisper."
      },
      {
        "id": "2026-05-29-ifttt-ios-shortcut",
        "title": "Commande de raccourci IFTTT + iOS : Inspiration vocale → Notion AI organisation",
        "desc": "Dites inspiration à Siri, et il entrera automatiquement dans Notion et l'IA remplira les balises.",
        "steps": [
          "Raccourcis iOS IFTTT Connect",
          "Enregistrement de raccourci vers du texte",
          "Webhook vers l'API Notion",
          "Balises et associations d'achèvement de Notion AI",
          "Écriture de confirmation de notification",
          "Tester le processus vocal"
        ],
        "prompt": "Organisez la transcription vocale en notes Notion : titre + trois puces + tag #INSPIRED #AILearning",
        "result": "L'inspiration vocale mène à des notes structurées.",
        "tips": "Dans les environnements bruyants, modifiez sur votre téléphone avant d'envoyer."
      },
      {
        "id": "2026-05-28-activepieces-crm",
        "title": "Activepieces auto-hébergé : formulaire de prospect → notation CRM + IA",
        "desc": "Les Activepieces auto-hébergés, les formulaires de sites Web alimentent le CRM et l'IA évalue la qualité des prospects.",
        "steps": [
          "Déploiement Docker",
          "Formulaire de réception de webhook",
          "Écriture HTTP vers les contacts HubSpot",
          "L'IA atteint le Lead Score de 1 à 5",
          "Branche avec les meilleurs scores Slack @sales",
          "Entrez dans la séquence de culture avec des scores faibles"
        ],
        "prompt": "Score 1-5 selon les réponses dans le formulaire, raison de sortie≤50 mots, JSON : {score, raison}",
        "result": "Pipeline de leads CRM avec notation.",
        "tips": "Veillez à sauvegarder les informations d'identification cryptées pour l'auto-hébergement."
      },
      {
        "id": "2026-05-27-notion-ai-meeting",
        "title": "Notes de réunion Notion AI : ordre du jour → procès-verbal → points d'action",
        "desc": "Rédigez un ordre du jour avant la réunion, publiez les points clés pendant la réunion et utilisez Notion AI pour générer des procès-verbaux et des tâches.",
        "steps": [
          "Créer un modèle de page de réunion avec une zone d'agenda",
          "Commentaires structurés sur l'examen des relations publiques pour réduire les erreurs.",
          "Sélectionnez le texte intégral Notion AI Résumer",
          "Ensuite, les éléments d'action AI Extract",
          "Convertir en affectation de tâche de base de données",
          "Définir des rappels de date limite"
        ],
        "prompt": "Générez des procès-verbaux basés sur l'ordre du jour et les points clés : les points de décision/discussion/action (responsable + DDL), en chinois, ne constituent pas un contenu non discuté.",
        "result": "Procès-verbaux de réunion structurés + bibliothèque de tâches.",
        "tips": "Les éléments d’action doivent être attribués aux personnes pour éviter d’être laissés en suspens."
      },
      {
        "id": "2026-05-26-google-docs-draft",
        "title": "Aperçu du plan de rédaction Gemini intégré à Google Docs",
        "desc": "Utilisez Gemini dans la barre latérale Docs pour développer le plan en fonction de trois puces.",
        "steps": [
          "Créer un nouveau document Google",
          "Écrivez trois puces principales",
          "Sélectionnez dans la barre latérale Gemini Aidez-moi à écrire",
          "Après avoir généré le plan, Acceptez",
          "Remplissez manuellement les données et les références",
          "Partagez des commentaires pour recueillir des commentaires"
        ],
        "prompt": "Développez les trois points suivants dans un aperçu du programme : contexte, objectifs et plan en trois phases ; 2-3 puces dans chaque section ; chinois formel.",
        "result": "Un aperçu révisable d’une première ébauche de proposition.",
        "tips": "Assurez-vous de remplir manuellement les données réelles après la génération."
      },
      {
        "id": "2026-05-25-excel-copilot-formula",
        "title": "Excel Copilot écrit des formules XLOOKUP en langage naturel",
        "desc": "Décrivez les exigences de correspondance entre tableaux et laissez Copilot générer et interpréter des formules.",
        "steps": [
          "Ouvrir un classeur avec deux feuilles",
          "Le panneau Copilot décrit la logique de correspondance",
          "Insérer une formule dans la colonne cible",
          "Vérifiez la ligne #N/A",
          "Laissez Copilot changer IFERROR",
          "Enregistrer le modèle"
        ],
        "prompt": "Obtenez le prix unitaire de la liste de prix en fonction du SKU du tableau de commande et écrivez-le dans une nouvelle colonne du tableau de commande. S'il est introuvable, remplissez « manquant » ; utilisez XLOOKUP.",
        "result": "Corriger la formule de correspondance des tableaux croisés.",
        "tips": "Laissez Copilot « expliquer chaque étape de la formule » avant de copier."
      },
      {
        "id": "2026-05-24-slack-summary",
        "title": "Résumé du fil de discussion Slack AI : Longue discussion de 30 secondes à lire",
        "desc": "Résumé en un clic des décisions et des tâches à effectuer pour plus de 50 fils de discussion.",
        "steps": [
          "Ouvrir un long fil de discussion sur le projet",
          "Cliquez sur Résumer le fil de discussion",
          "Lire le résumé de l'IA",
          "Vérifiez si les commentaires de veto sont manqués",
          "Épingler le résumé sur la chaîne",
          "Effectuer le suivi des tâches non assignées"
        ],
        "prompt": "(Principalement des opérations sur les boutons) Ajouter manuellement après le résumé : responsable/date limite/problèmes ouverts",
        "result": "Un examen rapide du consensus de l’équipe.",
        "tips": "Après le résumé, @ la personne responsable doit encore confirmer."
      },
      {
        "id": "2026-05-23-obsidian-copilot",
        "title": "Plug-in Obsidian Copilot : notes d'étude de questions-réponses dans la bibliothèque",
        "desc": "Configurez des modèles locaux/cloud pour mener des questions et réponses basées sur des références sur l'ensemble de la base de données de notes.",
        "steps": [
          "Installer le plug-in Obsidian Copilot",
          "Configurer l'API ou Ollama",
          "Bibliothèque de vecteurs de coffre-fort d'indexation",
          "Question \"Expliquez l'expérience que j'ai faite avec RAG\"",
          "Vérifiez le lien de citation pour accéder à la note",
          "Correction de problèmes courants pour les commandes"
        ],
        "prompt": "Réponse basée uniquement sur des notes ; citer [[nom de la note]] ; si vous ne le savez pas, dites simplement que ce n’est pas enregistré ; gardez le chinois concis.",
        "result": "Questions personnelles avec des citations de notes.",
        "tips": "Réindexez régulièrement pour éviter que de nouvelles notes ne soient trouvées."
      },
      {
        "id": "2026-05-22-feishu-ai-doc",
        "title": "Feishu Document AI compile les liens d'enquête dans une liste de produits compétitifs",
        "desc": "Collez les points clés de 5 liens de produits concurrents et l'IA générera un tableau comparatif.",
        "steps": [
          "Créer un nouveau document Feishu",
          "Collez les puces des produits concurrents",
          "Sélectionnez Création d'IA → Table",
          "Prix ​​et fonctionnalités de relecture",
          "Ajoutez une colonne \"inconnu\" pour éviter de remplir à l'aveugle",
          "Rédigez un ordre du jour avant la réunion, publiez les points clés pendant la réunion et utilisez Notion AI pour générer des procès-verbaux et des tâches."
        ],
        "prompt": "Générer un tableau comparatif des produits concurrents basé sur les points clés suivants : fonction/prix/support chinois/méthode de déploiement ; remplissez \"à vérifier\" s'il manque.",
        "result": "Tableau comparatif partageable des produits concurrents.",
        "tips": "La colonne Prix est intitulée « à compter de la date »."
      },
      {
        "id": "2026-05-21-linear-ai-issue",
        "title": "L'IA linéaire décompose les commentaires des utilisateurs en problèmes exécutables",
        "desc": "Collez 10 commentaires d'utilisateurs, regroupez l'IA et génèrez des problèmes prioritaires.",
        "steps": [
          "Projet linéaire nouveau Voir",
          "Collez les commentaires dans l'assistant AI",
          "Demander un regroupement par sujet",
          "Générer le titre du problème + les critères d'acceptation",
          "Ajuster manuellement les priorités",
          "Programmé dans le cycle de cette semaine"
        ],
        "prompt": "Regroupez les commentaires en problèmes : titre, énoncé du problème, critères d'acceptation, priorité P0-2 ; pas de double emploi ; Chinois.",
        "result": "Backlog de produits structurés.",
        "tips": "Les critères d’acceptation doivent être testables."
      },
      {
        "id": "2026-05-20-teams-recap",
        "title": "Examen du Copilot lors des réunions des équipes : qui a pris quelle décision",
        "desc": "Après la réunion, ouvrez le panneau Copilot pour afficher la liste des segments et des décisions des intervenants.",
        "steps": [
          "Ouvrir la réunion Teams qui vient de se terminer",
          "Copilote → Récapitulatif",
          "Voir les conférenciers et les sujets",
          "Copier les décisions et les actions",
          "Coller sur la page du projet OneNote",
          "Marquez la personne responsable"
        ],
        "prompt": "Contact CRM",
        "result": "Compte rendu archivable des décisions des réunions.",
        "tips": "Longue connexion WebSocket, prend en charge les conversations voix + vidéo en temps réel"
      }
    ]
  }
});
})();
