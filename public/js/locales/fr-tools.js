/* FR overlays — tools */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('fr', {
    appCategories: {
        "对话助手": "Assistants de discussion",
        "编程开发": "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
        "图像创作": "Création d'images",
        "视频音频": "Vidéo et audio",
        "办公效率": "Tous",
        "Agent 自动化": "Automatisation des agents",
        "搜索研究": "Recherche et recherche",
        "全部": "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins."
      },
      apps: [
        {
          category: "Assistants de discussion",
          desc: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          tags: [
            "Usage général",
            "Multimodal",
            "Plugins"
          ],
          features: [
            "GPT-4o multimodal",
            "Génération d'images DALL·E",
            "Chat vocal",
            "Chat vocal"
          ],
          bestFor: "Débutants et assistant polyvalent au quotidien",
          tip: "Le GPT-4o mini gratuit est suffisant pour la plupart des tâches ; envisagez Plus (20 $/mois) pour les travaux complexes."
        },
        {
          category: "Assistants de discussion",
          desc: "Construit par Anthropic, connu pour son contexte long (200K), sa sécurité et son écriture raffinée. Claude 3.5 Sonnet excelle en codage et en rédaction ; Artifacts vous permet de prévisualiser le code et les documents en direct.",
          tags: [
            "Texte long",
            "Sécurité",
            "En écrivant"
          ],
          features: [
            "Contexte 200K",
            "Aperçu des artefacts",
            "Analyse PDF",
            "Documents longs, rédaction et développement de code"
          ],
          bestFor: "Documents longs, rédaction et développement de code",
          tip: "Premier choix pour les contrats, les documents et les bases de code ; Pro coûte 20 $/mois."
        },
        {
          category: "Assistants de discussion",
          desc: "L'assistant IA de Google profondément intégré à la recherche, Gmail, Docs et YouTube. Gemini 2.0 prend en charge l'interaction multimodale en temps réel et le contexte d'un million de jetons.",
          tags: [
            "Intégration de la recherche",
            "Multimodal",
            "Gratuit"
          ],
          features: [
            "Intégration de l'écosystème Google",
            "Recherche en temps réel",
            "Interaction multimodale",
            "Contexte ultra-long"
          ],
          bestFor: "Utilisateurs de l'écosystème Google qui ont besoin d'informations en direct",
          tip: "Si vous utilisez déjà Gmail/Docs, l'offre gratuite est très performante."
        },
        {
          category: "Assistants de discussion",
          desc: "D'Alibaba avec une forte compréhension du chinois. Qwen2.5 est en tête sur de nombreux benchmarks. Tongyi Wanxiang s'occupe de l'image/vidéo ; Tongyi Lingma aide au codage.",
          tags: [
            "Chinois",
            "Optimisation chinoise",
            "Gratuit"
          ],
          features: [
            "Optimisation chinoise",
            "Capacité de code",
            "Images Tongyi Wanxiang",
            "API ouverte"
          ],
          bestFor: "Chat et développement quotidiens pour les utilisateurs en Chine",
          tip: "Aucun VPN n'est nécessaire ; quota gratuit généreux pour les scénarios chinois."
        },
        {
          category: "Assistants de discussion",
          desc: "Recherche",
          tags: [
            "Chinois",
            "Recherche",
            "Optimisation chinoise"
          ],
          features: [
            "Intégration de Baidu Search",
            "écriture chinoise",
            "Multimodal",
            "Marché des plugins"
          ],
          bestFor: "Création de contenu chinois et recherche de connaissances",
          tip: "Idéal lorsque vous avez besoin d’informations sur le Web chinois."
        },
        {
          category: "Assistants de discussion",
          desc: "De Moonshot AI, célèbre pour son contexte ultra long (jusqu'à 2 millions de caractères). Gère des livres entiers, des rapports longs et des bases de code volumineuses avec une recherche Web approfondie.",
          tags: [
            "Contexte ultra-long",
            "Chinois",
            "En lisant"
          ],
          features: [
            "Contexte de 2 millions de caractères",
            "Recherche sur le Web",
            "Compréhension du code",
            "Compréhension du code"
          ],
          bestFor: "Analyse de documents très longue et lecture de la littérature",
          tip: "À utiliser lorsque vous devez analyser un livre entier ou un PDF volumineux."
        },
        {
          category: "Assistants de discussion",
          desc: "De DeepSeek avec des performances open source de pointe et un raisonnement DeepSeek-R1 exceptionnel. Les prix des API sont extrêmement compétitifs (~ 1/50 de GPT-4) avec prise en charge du déploiement local.",
          tags: [
            "Source ouverte",
            "Raisonnement",
            "Valeur"
          ],
          features: [
            "Raisonnement profond R1",
            "Ouvert et déployable",
            "Coût API très faible",
            "Codage fort"
          ],
          bestFor: "Développeurs, utilisateurs soucieux des coûts et tâches lourdes de raisonnement",
          tip: "Le favori des développeurs ; Les coûts d'intégration de l'API sont minimes."
        },
        {
          category: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          desc: "Assistant de codage Microsoft/OpenAI AI intégré à VS Code, JetBrains et autres IDE. Achèvement en temps réel, explication logique, fonctions et tests unitaires.",
          tags: [
            "Intégration de l'EDI",
            "Achèvement",
            "Microsoft"
          ],
          features: [
            "Achèvement de ligne/bloc",
            "Chat",
            "Multilingue",
            "Espace de travail copilote"
          ],
          bestFor: "Accélération et complétion du codage quotidien",
          tip: "Indispensable pour les programmeurs ; les étudiants et les contributeurs de l’OSS peuvent demander un accès gratuit."
        },
        {
          category: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          desc: "Éditeur de code natif IA (basé sur VS Code) qui comprend le contexte complet du projet. Le mode Agent peut effectuer de manière autonome le codage, le débogage et la refactorisation de plusieurs fichiers.",
          tags: [
            "EDI IA",
            "Projet entier",
            "Agent"
          ],
          features: [
            "Indexation du projet complet",
            "Codage d'agent autonome",
            "Commutation multimodèle",
            "Intégration des terminaux"
          ],
          bestFor: "Développement au niveau du projet avec l’aide de l’IA",
          tip: "Fortement recommandé aux développeurs qui souhaitent un gain de productivité majeur."
        },
        {
          category: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          desc: "L'IDE IA de Codeium. Le mode agent Cascade comprend la base de code, planifie et exécute des tâches de codage en plusieurs étapes avec un quota gratuit généreux.",
          tags: [
            "Agent",
            "Multi-fichier",
            "Quota gratuit"
          ],
          features: [
            "Compréhension de la base de code",
            "Compréhension de la base de code",
            "Édition multi-fichiers",
            "Grand niveau gratuit"
          ],
          bestFor: "Projets de développement basés sur l'IA",
          tip: "Fort concurrent du curseur ; les fonctionnalités de base fonctionnent sur le plan gratuit."
        },
        {
          category: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          desc: "Agent de codage d'IA de terminal d'Anthropic avec une compréhension approfondie de la base de code. Prend en charge les modifications multi-fichiers, les exécutions de tests, les opérations Git et les Hooks/plugins personnalisés. Excelle dans les refactors à contexte long.",
          tags: [
            "Agent de terminal",
            "Contexte long",
            "Anthropique"
          ],
          features: [
            "Modifications multi-fichiers autonomes",
            "Modifications multi-fichiers autonomes",
            "Crochets/extensions de plugins",
            "Refactoristes complexes et puissants"
          ],
          bestFor: "Workflows terminaux, refactors complexes, utilisateurs de l'écosystème Claude",
          tip: "Nécessite Claude Pro/Max; idéal pour les développeurs CLI-first qui souhaitent une puissance d'agent approfondie."
        },
        {
          category: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          desc: "Agent de codage CLI officiel d'OpenAI basé sur les modèles de la série GPT-5. Planifie, écrit, teste et valide le code localement ou dans des bacs à sable cloud. Prend en charge MCP et les tâches autonomes en plusieurs étapes.",
          tags: [
            "CLI",
            "OpenAI",
            "Bac à sable cloud"
          ],
          features: [
            "Double mode terminal/cloud",
            "Tâches d'agent autonome",
            "Intégration de l'outil MCP",
            "Intégration profonde de GitHub"
          ],
          bestFor: "Les abonnés OpenAI automatisent les pipelines de codage",
          tip: "Inclus avec ChatGPT Plus/Pro ; exécutez le codex dans le terminal pour démarrer les tâches de l'agent."
        },
        {
          category: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          desc: "Environnement de développement d'IA de terminal de xAI (Grok CLI) avec mode Plan, sous-agents parallèles, spécifications de projet AGENTS.md et accès au serveur MCP pour un développement complexe en plusieurs étapes.",
          tags: [
            "CLI",
            "Mode Planification",
            "Sous-agents"
          ],
          features: [
            "Planification en mode Plan",
            "Sous-agents parallèles",
            "Prise en charge d'AGENTS.md",
            "Intégration MCP"
          ],
          bestFor: "Utilisateurs xAI, développement d'agents en plusieurs étapes, workflows de terminaux",
          tip: "Nécessite SuperGrok ou X Premium+ ; placez AGENTS.md à la racine du projet pour personnaliser le comportement de l'agent."
        },
        {
          category: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          desc: "Environnement de développement agent de Z.ai optimisé par GLM-5.2. Accès au bureau, au développement à distance et au Feishu/WeChat Bot pour les tâches de codage complexes à long terme.",
          tags: [
            "Optimisation chinoise",
            "ADE",
            "Long horizon"
          ],
          features: [
            "Alimenté par GLM-5.2",
            "Double mode bureau/à distance",
            "Bot Feishu/WeChat",
            "Tâches d'agent à long terme"
          ],
          bestFor: "Développeurs nationaux, écosystème Zhipu, codage collaboratif à distance",
          tip: "Téléchargez sur zcode.z.ai ; fort pour les scénarios chinois et les tâches longues, aucun VPN n'est nécessaire."
        },
        {
          category: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          desc: "Connexion au compte Google",
          tags: [
            "CLI",
            "Source ouverte",
            "Quota gratuit"
          ],
          features: [
            "Connexion au compte Google",
            "Quota gratuit élevé",
            "Opérations shell/fichier",
            "Rechercher une mise à la terre"
          ],
          bestFor: "Utilisateurs soucieux de leur budget, écosystème Google, exploration de l'agent CLI",
          tip: "npm install -g @google/gemini-cli ; le niveau gratuit est très compétitif parmi les outils CLI."
        },
        {
          category: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          desc: "Programmation de paires d'IA open source dans le terminal avec GPT/Claude/DeepSeek ou n'importe quel modèle d'API. Intégration Deep Git : validation automatique à chaque modification, édition de différences multi-fichiers. Plus de 39 000 étoiles GitHub.",
          tags: [
            "Source ouverte",
            "BYOK",
            "Git-natif"
          ],
          features: [
            "N'importe quelle API de modèle",
            "Validation automatique de Git",
            "Différence multi-fichiers",
            "Indépendant de la langue"
          ],
          bestFor: "Développeurs avec leurs propres clés API qui valorisent l'historique Git",
          tip: "pip install aide-chat; apportez votre propre clé API : alternative ouverte et légère au Cursor."
        },
        {
          category: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          desc: "Extension VS Code open source connectant n’importe quelle API LLM. Le mode Agent peut lire/écrire des fichiers, exécuter des commandes de terminal et naviguer sur le Web. Planifier/Agir, exécution étape par étape.",
          tags: [
            "Code VS",
            "Source ouverte",
            "BYOK"
          ],
          features: [
            "Mode Planifier/Agir",
            "Exécution de commandes de terminal",
            "Aide au navigateur",
            "Utilisateurs de VS Code qui souhaitent choisir leurs propres modèles"
          ],
          bestFor: "Utilisateurs de VS Code qui souhaitent choisir leurs propres modèles",
          tip: "Rechercher Cline dans les extensions ; connectez Anthropic/OpenAI/Ollama sans changer d'éditeur."
        },
        {
          category: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          desc: "Assistant de codage IA open source pour VS Code et JetBrains. Complétion des onglets, chat et mode agent. Les équipes peuvent partager des modèles et des règles pour un déploiement progressif en entreprise.",
          tags: [
            "Multi-IDE",
            "Source ouverte",
            "Esprit d'équipe"
          ],
          features: [
            "VS Code + JetBrains",
            "Achèvement des onglets",
            "Agents personnalisés",
            "Configuration d'équipe partagée"
          ],
          bestFor: "Équipes multi-IDE nécessitant une configuration de codage IA unifiée",
          tip: "Installer à partir de continue.dev ; config.yaml peut pointer vers votre API ou Ollama local."
        },
        {
          category: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          desc: "Assistant de codage AWS AI en tant que plug-in IDE et CLI, profondément intégré aux documents et SDK AWS. Génération de code, analyse de sécurité, conversion de code (par exemple mises à niveau Java) et tâches d'agent.",
          tags: [
            "AWS",
            "CLI+IDE",
            "Entreprise"
          ],
          features: [
            "Intégration des connaissances AWS",
            "Analyse de sécurité du code",
            "Conversion de codes",
            "Niveau gratuit disponible"
          ],
          bestFor: "Développement cloud AWS, conformité d'entreprise, migration Java/.NET",
          tip: "Activer gratuitement dans la console AWS ; La commande CLI q démarre les tâches de l'agent dans le terminal."
        },
        {
          category: "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          desc: "Pile complète",
          tags: [
            "Pile complète",
            "Navigateur",
            "Zéro configuration"
          ],
          features: [
            "Génération d'application en une phrase",
            "IDE intégré au navigateur",
            "Aperçu en direct",
            "Déploiement en un clic"
          ],
          bestFor: "Prototypes rapides, sites non programmeurs, validation MVP",
          tip: "Les non-codeurs peuvent livrer une application Web exécutable en 10 minutes, ce qui est idéal pour valider des idées."
        },
        {
          category: "Création d'images",
          desc: "Outil artistique d'IA de premier plan via Discord ou Web. Style artistique et qualité d’image à la pointe de l’industrie avec une communauté active et diversifiée.",
          tags: [
            "Discorde",
            "Art",
            "Haute qualité"
          ],
          features: [
            "Qualité supérieure",
            "Des styles variés",
            "HD haut de gamme",
            "HD haut de gamme"
          ],
          bestFor: "Création artistique, conception conceptuelle, exploration visuelle",
          tip: "Idéal pour l’impact visuel ; apprenez l’artisanat rapide – à partir de 10 $/mois."
        },
        {
          category: "Création d'images",
          desc: "Modèle d'image OpenAI intégré à ChatGPT. Excelle dans les invites de texte complexes et précises avec un rendu de texte fort.",
          tags: [
            "ChatGPT",
            "Facile",
            "Facile"
          ],
          features: [
            "Compréhension précise du texte",
            "Intégration ChatGPT",
            "Rendu du texte",
            "Zéro barrière"
          ],
          bestFor: "Images rapides pour les utilisateurs de ChatGPT",
          tip: "Aucune configuration supplémentaire si vous utilisez déjà ChatGPT."
        },
        {
          category: "Création d'images",
          desc: "Modèle d'image open source avec déploiement local et un vaste écosystème communautaire. Réglage fin LoRA, précision ControlNet, contrôle total sur la génération.",
          tags: [
            "Source ouverte",
            "Locale",
            "Personnalisable"
          ],
          features: [
            "Déploiement local",
            "Ajustement LoRA",
            "ContrôleNet",
            "Modèles de communauté massive"
          ],
          bestFor: "Créateurs équipés d'un GPU qui souhaitent un contrôle total",
          tip: "Nécessite une certaine compétence technique, mais une meilleure liberté et un meilleur coût à long terme."
        },
        {
          category: "Vidéo et audio",
          desc: "L'outil vidéo IA de Kuaishou avec texte en vidéo et image en vidéo. Physique naturelle et mouvement ; leader de la génération vidéo nationale.",
          tags: [
            "Texte vers vidéo",
            "Optimisation chinoise",
            "Facile"
          ],
          features: [
            "Texte vers vidéo",
            "Image vers vidéo",
            "Mouvement naturel",
            "Quota quotidien gratuit"
          ],
          bestFor: "Création vidéo nationale et contenu court",
          tip: "Meilleur choix de vidéos nationales avec quota quotidien gratuit."
        },
        {
          category: "Vidéo et audio",
          desc: "Plateforme vidéo IA professionnelle. Gen-3 Alpha est en tête en termes de qualité. Propose également des outils d'édition, de suppression d'arrière-plan, de suivi de mouvement et professionnels.",
          tags: [
            "Professionnel",
            "Édition",
            "Génération 3"
          ],
          features: [
            "Génération vidéo Gen-3",
            "Suite de montage vidéo",
            "Suivi de mouvement",
            "Suppression de l'écran vert"
          ],
          bestFor: "Créateurs vidéo professionnels et professionnels du cinéma et de la télévision",
          tip: "Idéal pour les créateurs de contenu et les professionnels du cinéma."
        },
        {
          category: "Vidéo et audio",
          desc: "Outil musical IA : décrivez un style et obtenez une chanson complète avec chant et accompagnement dans plusieurs styles et langues.",
          tags: [
            "Musique",
            "Voix",
            "Création"
          ],
          features: [
            "Génération de chansons complètes",
            "Plusieurs styles",
            "Performance vocale",
            "Prolonger/continuer"
          ],
          bestFor: "Pistes de démonstration rapides et musique de fond",
          tip: "Essayez : \"Une chanson pop optimiste sur l'été\" et générez."
        },
        {
          category: "Tous",
          desc: "Assistant IA intégré à Notion pour la rédaction, la synthèse, la traduction et le brainstorming, lié de manière transparente aux notes et aux bases de données.",
          tags: [
            "Remarques",
            "Collaboration",
            "Intégré"
          ],
          features: [
            "Rédaction de documents",
            "Récapitulation",
            "Traduction",
            "IA de base de données"
          ],
          bestFor: "Les utilisateurs de Notion améliorent l'efficacité de leurs documents",
          tip: "Indispensable pour les utilisateurs de Notion : 10 $/mois par membre."
        },
        {
          category: "Tous",
          desc: "Générateur de présentations et de documents piloté par l'IA. Saisissez un plan ou un sujet pour obtenir des diapositives soignées avec des thèmes et des mises en page.",
          tags: [
            "Diapositives",
            "Conception",
            "Rapide"
          ],
          features: [
            "Génération de diapositives IA",
            "Thèmes multiples",
            "Partage en ligne",
            "Médias intégrés"
          ],
          bestFor: "Rapports, propositions et présentations de cours rapides",
          tip: "Entrez un sujet : présentation complète en 30 secondes. Bouée de sauvetage avant les délais."
        },
        {
          category: "Recherche et recherche",
          desc: "Moteur de recherche IA avec des réponses directement citées au lieu de listes de liens. Pro Search pour des recherches approfondies : idéal pour les travaux universitaires.",
          tags: [
            "Recherche",
            "Citations",
            "Recherche"
          ],
          features: [
            "Réponses citées",
            "Recherche approfondie professionnelle",
            "Informations en temps réel",
            "Informations en temps réel"
          ],
          bestFor: "Recherche rapide, étude universitaire, vérification des faits",
          tip: "Utilisez plutôt Google pour la recherche, mais vérifiez toujours les citations."
        },
        {
          category: "Recherche et recherche",
          desc: "Le bloc-notes IA de Google : téléchargez des PDF/documents, discutez avec des documents, générez des résumés et transformez le contenu en podcast IA (Audio Overview).",
          tags: [
            "Documents",
            "Résumé",
            "Podcast"
          ],
          features: [
            "Discussion documentaire",
            "Résumé automatique",
            "Génération de podcasts IA",
            "Analyse multi-documents"
          ],
          bestFor: "Lire des articles, des revues de littérature, apprendre de nouveaux contenus",
          tip: "Téléchargez un article et posez des questions : la fonctionnalité podcast est créative et utile."
        },
        {
          category: "Vidéo et audio",
          desc: "Plateforme vocale IA leader avec clonage vocal instantané, TTS dans plus de 29 langues, doublage et production de podcasts.",
          tags: [
            "Clonage de voix",
            "TTS",
            "Doublage"
          ],
          features: [
            "Clonage d'échantillon d'une minute",
            "Lecture multilingue à voix haute",
            "Contrôle du ton émotionnel",
            "Intégration API"
          ],
          bestFor: "Clonage de votre voix, doublage vidéo, contenu audio",
          tip: "Enregistrez dans une pièce calme ; 1 à 3 minutes de voix sèche suffisent pour cloner."
        },
        {
          category: "Vidéo et audio",
          desc: "Synthèse vocale et clonage d'IA domestique avec prononciation chinoise naturelle. Clonage zéro/quelques plans pour les créateurs nationaux.",
          tags: [
            "Clonage de voix",
            "Chinois",
            "Optimisation chinoise"
          ],
          features: [
            "Optimisation chinoise",
            "Clonage vocal",
            "Synthèse émotionnelle",
            "Quota gratuit"
          ],
          bestFor: "Doublage chinois, voix off de courtes vidéos, utilisateurs nationaux",
          tip: "Essayez d'abord les scénarios chinois : aucun VPN n'est nécessaire."
        },
        {
          category: "Automatisation des agents",
          desc: "Programmé",
          tags: [
            "Source ouverte",
            "Programmé",
            "À canaux multiples"
          ],
          features: [
            "Planification Cron",
            "Tâches d'agent isolé",
            "Intégration de webhooks",
            "Push multicanal"
          ],
          bestFor: "Briefs programmés, recherche automatique, orchestration des agents en arrière-plan",
          tip: "Exécutez d'abord openclaw doctor, puis cron create pour les tâches planifiées."
        },
        {
          category: "Automatisation des agents",
          desc: "Application LLM open source et plateforme d'agent avec flux de travail visuels, bases de connaissances RAG, appels d'outils et publication d'API. Auto-hébergable ; Plus de 60 000 étoiles GitHub.",
          tags: [
            "Source ouverte",
            "Flux de travail",
            "RAG"
          ],
          features: [
            "Orchestration des agents visuels",
            "Base de connaissances RAG",
            "Intégration outil/API",
            "Auto-hébergable"
          ],
          bestFor: "Agents de base de connaissances d'entreprise et applications d'IA personnalisées",
          tip: "Essayez cloud.dify.ai gratuitement ; Docker auto-hébergé pour un contrôle total des données."
        },
        {
          category: "Automatisation des agents",
          desc: "Plateforme d'agent IA sans code ByteDance : faites glisser pour créer des robots et publiez-les sur Feishu, WeChat, Discord, Telegram. Marché riche des plugins ; intégration la plus rapide en Chine.",
          tags: [
            "Sans code",
            "Optimisation chinoise",
            "À canaux multiples"
          ],
          features: [
            "Générateur de robots visuels",
            "Plugins et flux de travail",
            "Publication Feishu/WeChat",
            "Service client/assistant robots rapides, collaboration d'équipe nationale"
          ],
          bestFor: "Service client/assistant robots rapides, collaboration d'équipe nationale",
          tip: "coze.cn n'a pas besoin de VPN ; commencez à partir d’un modèle d’assistant personnel, puis ajoutez des plugins."
        },
        {
          category: "Automatisation des agents",
          desc: "Automatisation ouverte du flux de travail avec des nœuds d'agent AI approfondis. Connectez plus de 400 services ; auto-hébergable : intégrez les LLM dans les e-mails, les feuilles de calcul, le CRM et les pipelines commerciaux.",
          tags: [
            "Source ouverte",
            "Flux de travail",
            "Auto-hébergable"
          ],
          features: [
            "Plus de 400 intégrations d'applications",
            "Nœuds d'agent IA",
            "Éditeur de flux visuel",
            "Auto-hébergable"
          ],
          bestFor: "Automatisation métier, orchestration inter-systèmes, équipes techniques",
          tip: "Agent d'IA général qui planifie et exécute de manière autonome des tâches en plusieurs étapes : naviguer sur le Web, rédiger des documents, exécuter du code, compiler des rapports. De bout en bout, « donnez-lui un objectif, obtenez un résultat »."
        },
        {
          category: "Automatisation des agents",
          desc: "Agent d'IA général qui planifie et exécute de manière autonome des tâches en plusieurs étapes : naviguer sur le Web, rédiger des documents, exécuter du code, compiler des rapports. De bout en bout, « donnez-lui un objectif, obtenez un résultat ».",
          tags: [
            "Autonome",
            "Autonome",
            "Planification autonome des tâches"
          ],
          features: [
            "Planification autonome des tâches",
            "Sortie de code/document",
            "Sortie de code/document",
            "Tâches longues asynchrones"
          ],
          bestFor: "Recherche complexe, rédaction de rapports, délégation de tâches de bout en bout",
          tip: "Assistant ByteDance AI sur le modèle Doubao avec dialogue chinois naturel. Intégration profonde de Douyin et Feishu ; compréhension et création multimodales; large base d’utilisateurs nationaux."
        },
        {
          category: "Assistants de discussion",
          desc: "Assistant ByteDance AI sur le modèle Doubao avec dialogue chinois naturel. Intégration profonde de Douyin et Feishu ; compréhension et création multimodales; large base d’utilisateurs nationaux.",
          tags: [
            "Chinois",
            "Optimisation chinoise",
            "Multimodal"
          ],
          features: [
            "dialogue chinois",
            "Compréhension d'images/vidéos",
            "Intégration Feishu",
            "Service client/assistant robots rapides, collaboration d'équipe nationale"
          ],
          bestFor: "Chat quotidien, création de contenu, collaboration de bureau en Chine",
          tip: "Les utilisateurs Douyin/Feishu bénéficient d'un accès transparent ; le Web et l'application sont gratuits."
        },
        {
          category: "Assistants de discussion",
          desc: "Assistant xAI intégré à X (Twitter). Connu pour ses informations en temps réel et son humour ; Grok 3 fort en mathématiques et en raisonnement avec le mode DeepSearch.",
          tags: [
            "En temps réel",
            "Intégration X",
            "Raisonnement"
          ],
          features: [
            "X flux en temps réel",
            "Mode de recherche approfondie",
            "Compréhension multimodale",
            "Code et mathématiques"
          ],
          bestFor: "Suivi des tendances, analyse des médias sociaux, actualités en direct",
          tip: "Nécessite X Premium+ ; idéal pour les actualités en temps réel et la dynamique sociale."
        },
        {
          category: "Création d'images",
          desc: "Modèle d'image ouvert des laboratoires de la Forêt-Noire. Flux.1 excelle en termes de qualité, de rendu de texte et de structure humaine ; déploiement local et API disponibles.",
          tags: [
            "Source ouverte",
            "Haute qualité",
            "Rendu du texte"
          ],
          features: [
            "Qualité supérieure",
            "Rendu de texte précis",
            "Ouvert et déployable",
            "Illustration de haute qualité, design commercial, génération locale"
          ],
          bestFor: "Illustration de haute qualité, design commercial, génération locale",
          tip: "API via Replicate, fal.ai, etc., ou exécutée localement dans ComfyUI."
        },
        {
          category: "Vidéo et audio",
          desc: "Modèle vidéo OpenAI avec texte en vidéo et image en vidéo. Cohérence et réalisme physique à la pointe de l’industrie. Sora Turbo est beaucoup plus rapide.",
          tags: [
            "OpenAI",
            "Haute qualité",
            "Réalisme physique"
          ],
          features: [
            "Texte/image vers vidéo",
            "Jusqu'à 20 secondes",
            "Montage de remix",
            "Plans de story-board"
          ],
          bestFor: "Courtes vidéos de haute qualité, concepts publicitaires, aperçus de concepts",
          tip: "Nécessite ChatGPT Plus/Pro ; décrire le mouvement et l'éclairage de la caméra pour de meilleurs résultats."
        },
        {
          category: "Tous",
          desc: "Assistant Microsoft AI intégré à Word, Excel, PowerPoint, Outlook, Teams. Basé sur GPT-4o : générez, modifiez et analysez des documents et des données dans Office.",
          tags: [
            "Bureau",
            "Microsoft",
            "Entreprise"
          ],
          features: [
            "Word/Excel/PPT IA",
            "Assistant de messagerie Outlook",
            "Résumé de la réunion des équipes",
            "Intégration des données d'entreprise"
          ],
          bestFor: "Utilisateurs d'Office 365 et bureautique d'entreprise",
          tip: "Les abonnés Microsoft 365 peuvent appeler Copilot dans la barre latérale Office."
        },
        {
          category: "Recherche et recherche",
          desc: "Moteur de recherche d'IA national : sans publicité, réponses citées, modes Web, académique, podcast, etc. Excellente expérience de recherche chinoise.",
          tags: [
            "Recherche",
            "Optimisation chinoise",
            "Sans publicité"
          ],
          features: [
            "Réponses citées",
            "Modes académique/podcast",
            "Génération de cartes mentales",
            "Recherche chinoise, étude universitaire, récupération sans publicité"
          ],
          bestFor: "Recherche chinoise, étude universitaire, récupération sans publicité",
          tip: "Accessible en Chine ; recouper les citations académiques."
        }
      ],
      handsOnCategories: {
        "全部": "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
        "编程开发": "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
        "图像设计": "Conception d'images",
        "视频音频": "Vidéo et audio",
        "写作办公": "Écriture et bureau",
        "搜索研究": "Recherche et recherche",
        "Agent 自动化": "Automatisation des agents"
      },
      handsOnCases: [
        {
          title: "Créez une calculatrice Web avec Cursor Codex",
          difficulty: "Débutant",
          duration: "~15 minutes",
          desc: "À partir de zéro, utilisez l'agent Codex intégré de Cursor pour générer une calculatrice HTML exécutable : faites l'expérience de la programmation IA « dites-le une fois → obtenez du code exécutable ».",
          steps: [
            "Installez Cursor, créez le dossier calc-demo et ouvrez-le dans Cursor",
            "Appuyez sur Cmd+I (Mac) / Ctrl+I (Win) pour ouvrir le panneau Composer/Agent.",
            "Collez l'invite ci-dessous et laissez le Codex générer un seul index.html",
            "Cliquez avec le bouton droit sur index.html dans l'explorateur → Révéler dans le Finder → double-cliquez pour l'ouvrir dans le navigateur",
            "Test d'addition/soustraction/multiplication/division ; en cas de problème, sélectionnez le code et dites : \"Le clic sur le bouton ne fait rien, veuillez le corriger\"",
            "(Facultatif) Demandez au Codex d'ajouter une saisie au clavier, un historique ou une bascule de thème sombre/clair"
          ],
          prompt: "Veuillez créer une page Web de calculatrice propre et attrayante avec HTML + CSS + JavaScript :\n\nCaractéristiques :\n- Prise en charge de l'ajout, de la soustraction, de la multiplication, de la division et de l'effacement (C)\n- L'écran affiche l'entrée et le résultat en temps réel\n- Prévenir les erreurs logiques courantes telles que le chaînage des opérateurs\n\nConception :\n- Thème sombre, boutons arrondis, retour de survol subtil\n- Fonctionne sur mobile\n\nLivrable :\n- Fichier index.html unique, ouvrable directement dans le navigateur\n- Code avec commentaires en anglais\n- Dites-moi comment exécuter et tester à la fin",
          result: "Une page Web de calculatrice double-cliquable qui effectue des opérations arithmétiques de base.",
          tips: "Codage pour la première fois avec l'IA, concentrez-vous sur : décrire → générer → exécuter → corriger les commentaires – pas la perfection du premier coup."
        },
        {
          title: "Générer une image de la Statue de la Liberté avec Midjourney",
          difficulty: "Débutant",
          duration: "~10 minutes",
          desc: "Utilisez les invites en anglais dans Midjourney pour une prise de vue cinématographique de la Statue de la Liberté et apprenez les bases et les paramètres de la conversion texte-image.",
          steps: [
            "Enregistrez Midjourney, ouvrez Create sur midjourney.com (ou Discord #general)",
            "Cliquez sur Entrée, tapez /imagine (le Web peut coller l'invite directement)",
            "Collez l'invite en anglais ci-dessous, envoyez, attendez environ 30 à 60 s pour 4 candidats.",
            "Cliquez sur U1 – U4 pour mettre à niveau le favori ; 🔄à régénérer si besoin",
            "V1 – V4 pour les variantes, ou modifiez le rapport --ar et réessayez",
            "Cliquez avec le bouton droit sur Enregistrer l'image HD pour des diapositives, des articles ou une référence de conception"
          ],
          prompt: "Statue de la Liberté sur Liberty Island, port de New York, coucher de soleil à l'heure d'or, plan large cinématographique, nuages ​​spectaculaires, lumière chaude se reflétant sur l'eau, photoréaliste, très détaillé, 8k --ar 16:9 --v 6",
          result: "Une image HD cinématographique 16:9 de la Statue de la Liberté pour des démonstrations ou du design.",
          tips: "Midjourney fonctionne mieux en anglais. Ordre : sujet → environnement → lumière → style → paramètres (--ar, --v)."
        },
        {
          title: "Image rapide avec ChatGPT + DALL·E 3 (pas de Discord)",
          difficulty: "Débutant",
          duration: "~5 minutes",
          desc: "Ignorer Discord : utilisez le langage naturel dans ChatGPT avec DALL·E 3 pour la Statue de la Liberté. Introduction texte-image la plus rapide.",
          steps: [
            "Ouvrez ChatGPT (Plus/Team pour DALL·E 3 ; le niveau gratuit a un quota d'images limité)",
            "Nouveau chat, collez l'invite ci-dessous et envoyez",
            "ChatGPT appelle DALL·E automatiquement, environ 10 à 20 s pour le résultat",
            "Si la composition est désactivée, répondez : \"Zoomez sur le visage de la statue, floutez l'arrière-plan\"",
            "Cliquez sur l'image pour télécharger le PNG pour des articles, des diapositives ou des réseaux sociaux."
          ],
          prompt: "Veuillez utiliser DALL·E pour générer une image :\n\nSujet : Statue de la Liberté à l'heure d'or, plan large cinématographique depuis le port, nuages spectaculaires, reflets d'eau chaude.\n\nStyle : photoréaliste, très détaillé, adapté comme couverture d'article.\n\nRapport hauteur/largeur : Paysage 16:9.",
          result: "Image téléchargeable de la Statue de la Liberté dans ChatGPT : aucun outil supplémentaire.",
          tips: "ChatGPT comprend votre langue et traduit pour DALL·E. Itérer « ce qu'il faut garder/éviter » vaut mieux réécrire l'intégralité de l'invite."
        },
        {
          title: "Clonez votre voix avec ElevenLabs",
          difficulty: "Intermédiaire",
          duration: "~20 minutes",
          desc: "Téléchargez un enregistrement vocal sec, créez un modèle vocal personnel, puis lisez n'importe quel texte : flux de travail de clonage vocal complet.",
          steps: [
            "Enregistrez ElevenLabs → Voice Lab → Clonage vocal instantané",
            "Enregistrez 1 à 3 minutes de voix sèche sur le téléphone Mémos vocaux : pièce calme, pas de musique, rythme normal",
            "Téléchargez, nommez la voix (par exemple ma voix), acceptez les termes de clonage, créez",
            "Synthèse vocale → sélectionnez la voix clonée",
            "Collez le texte de test ci-dessous, générez et écoutez",
            "Téléchargez des MP3 pour le doublage vidéo ou l'introduction d'un podcast"
          ],
          prompt: "Salut à tous, je m'appelle [votre pseudo]. Ceci est mon test vocal cloné par l'IA.\n\nIl fait beau aujourd'hui. Je vais lire une courte introduction : l'intelligence artificielle change la façon dont nous apprenons, travaillons et créons. J'espère que cela semble naturel, clair et amical.\n\nMerci d'avoir écouté !",
          result: "Modèle réutilisable « votre voix » : saisissez n'importe quel texte pour obtenir un son doublé.",
          tips: "La qualité dépend de l'enregistrement : volume silencieux et constant, pas de bruit occlusif. Clonez uniquement les voix que vous avez le droit d'utiliser."
        },
        {
          title: "Cloner la voix chinoise avec Fish Audio (domestique)",
          difficulty: "Intermédiaire",
          duration: "~15 minutes",
          desc: "Les utilisateurs nationaux peuvent cloner naturellement la voix chinoise, ce qui est idéal pour les voix off de courtes vidéos et le doublage chinois.",
          steps: [
            "Inscrivez-vous sur fish.audio → Clonage de voix / Créer une voix",
            "Téléchargez une voix sèche en chinois de 30 s à 3 minutes (lire l'actualité ou l'article)",
            "Nommez et créez une voix, attendez 1 à 5 minutes pour l'entraînement",
            "Synthèse vocale : collez la copie de test ci-dessous",
            "Sélectionnez une nouvelle voix, ajustez la vitesse, générez",
            "Écoutez et téléchargez ; comparer avec ElevenLabs pour votre cas d'utilisation chinois"
          ],
          prompt: "Bonjour à tous, bienvenue dans les notes d'apprentissage sur l'IA d'aujourd'hui.\n\nCette section couvre l'IA pratique avec de vrais logiciels. Vous n'avez pas besoin d'abord de toute la théorie : apprenez en effectuant de vraies tâches.\n\nSi cela vous est utile, aimez et enregistrez.",
          result: "Testez l'audio chinois dans votre voix pour une comparaison de voix off.",
          tips: "Préférez Fish Audio pour le clonage chinois ; utilisez ElevenLabs pour le doublage multilingue/anglais."
        },
        {
          title: "Planifier une collecte d'actualités boursières avec OpenClaw",
          difficulty: "Avancé",
          duration: "~30 minutes",
          desc: "Configurez OpenClaw Cron pour exécuter un agent chaque matin de négociation afin de recueillir des actualités boursières et de les transmettre à Telegram ou Slack.",
          steps: [
            "Installez OpenClaw CLI, exécutez openclaw doctor --fix pour initialiser Gateway",
            "Modifiez les symboles, le fuseau horaire et les identifiants de chaîne dans la commande ci-dessous",
            "Modifiez les symboles, le fuseau horaire et les identifiants de chaîne dans la commande ci-dessous",
            "Exécutez la commande cron create dans le terminal (en semaine à 8h30 Asie/Shanghai)",
            "liste cron openclaw pour confirmer ; openclaw cron exécute --id <job-id> pour l'historique",
            "Test manuel : openclaw cron run <job-id>, vérifiez que le push est lisible et sourcé"
          ],
          prompt: "openclaw cron crée \"30 8 * * 1-5\" \\\n  --name \"Bref quotidien sur l'actualité boursière\" \\\n  --tz \"Asie/Shanghai\" \\\n  --session isolée \\\n  --message \"Vous êtes un assistant de recherche en investissement professionnel. Rassemblez et résumez l'actualité du marché d'aujourd'hui :\\n\\nListe de surveillance : CSI 300, CATL (300750), Apple (AAPL)\\n\\nSortie (anglais, moins de 400 mots) :\\n1) Titres macro (max 3, avec sources)\\n2) Mouvements boursiers/sectoriels (max 2 chacun)\\n3) Liste de surveillance du jour (pas de conseils en investissement, d'informations) uniquement)\\n\\nEn l'absence d'informations fiables, écrivez « Aucune mise à jour majeure » ; conservez les noms des sources ; n'inventez pas de données. » \\\n  --annoncer \\\n  --télégramme de canal \\\n  --à \"YOUR_TELEGRAM_USER_OR_CHANNEL_ID\"",
          result: "Le matin de la semaine, synthèse des stocks compilée par l'agent (après avoir configuré le canal push).",
          tips: "Le résultat est uniquement une référence, pas un conseil en investissement. Testez le canal de message avant de le mettre en ligne."
        },
        {
          title: "~12 minutes",
          difficulty: "Débutant",
          duration: "~12 minutes",
          desc: "Dans VS Code, Copilot exécute une fonction commerciale et des tests Jest : la productivité quotidienne du codage.",
          steps: [
            "Installez VS Code + GitHub Copilot et connectez-vous",
            "Créez utils/discount.js avec un commentaire décrivant les règles de remise",
            "Tapez la fonction et acceptez l'achèvement du Copilot",
            "Créez utils/discount.test.js, tapez décrire pour déclencher l'achèvement du test",
            "Exécutez le test npm (ou la plaisanterie) ; collez les erreurs dans Chat pour les corriger",
            "Modifiez les règles dans les commentaires (par exemple, dépensez 200, économisez 30) et regardez l'achèvement s'adapter"
          ],
          prompt: "// Calculer la remise sur la commande : dépensez 100, économisez 10, dépensez 200, économisez 30, pas de montant négatif\n// Retourne l'objet { original, discount, final }\nfonction calcDiscount(montant) {\n  // Copilot se termine à partir d'ici\n}",
          result: "Fonction de remise exécutable + tests unitaires de base ; apprenez la complétion basée sur les commentaires.",
          tips: "Copilot répond mieux aux commentaires et types de fonctions clairs ; conserver les tests à côté de la mise en œuvre."
        },
        {
          title: "Ajoutez le mode sombre sur tout le site avec Windsurf",
          difficulty: "Intermédiaire",
          duration: "~25 minutes",
          desc: "Utilisez Windsurf Cascade Agent pour comprendre un petit projet frontend et ajoutez des variables CSS + une bascule de thème entre les fichiers.",
          steps: [
            "Ouvrez Windsurf sur un petit projet pratique index.html + styles.css",
            "Ouvrez Cascade, collez la description de la tâche ci-dessous",
            "Laissez l'agent lister les fichiers à modifier, confirmer, puis exécuter",
            "Aperçu dans le navigateur, basculer le thème pour vérifier les couleurs",
            "Si les sélecteurs sont manqués : \"Contraste de l'en-tête trop faible en mode sombre\"",
            "Avant de vous engager, demandez à l'agent un court journal des modifications"
          ],
          prompt: "Ajoutez une bascule de thème sombre/clair à ce projet :\n1) Variables CSS pour le système de couleurs\n2) Bouton bascule d'en-tête, préférence dans localStorage\n3) Ne cassez pas la mise en page ; adapté aux mobiles\n4) Après les modifications, listez les fichiers modifiés et comment tester",
          result: "Thème sombre/clair en un clic ; faites l'expérience de la collaboration multi-fichiers d'agent.",
          tips: "Cascade convient aux modifications multi-fichiers cohérentes ; obtenez un plan avant de « tout changer »."
        },
        {
          title: "Revoir le contrat et signaler les risques avec Claude",
          difficulty: "Intermédiaire",
          duration: "~20 minutes",
          desc: "Télécharger le contrat PDF ; Claude signale les clauses à haut risque du point de vue de la contrepartie – introduction aux pratiques juridiques/approvisionnements.",
          steps: [
            "Inscrivez Claude, nouveau chat (Pro pour les PDF plus longs)",
            "Téléchargez le contrat PDF ou collez les sections clés",
            "Lire le tableau des risques ; vérifier les références de page/section",
            "Lire le tableau des risques ; vérifier les références de page/section",
            "Suivi : « Réécrire les clauses à haut risque en tant qu'alternatives plus équilibrées »",
            "Exporter pour révision par un collègue juridique : la révision par l'IA n'est pas un avocat"
          ],
          prompt: "Vous êtes un assistant minutieux en matière de révision des contrats. Nous sommes le parti B.\n\nExaminez le contrat téléchargé et le résultat :\n1) Top 5 des clauses à haut risque (citation + motif)\n2) 3 clauses à risque moyen\n3) Révision négociable pour chacun\n4) Tableau récapitulatif : localisation | niveau de risque | suggestion\n\nMarquez les éléments incertains « Nécessite une vérification humaine » ; n'inventez pas de statuts.",
          result: "Liste structurée des risques contractuels et projet de négociation.",
          tips: "Claude gère bien les longs documents ; télécharger le texte intégral et effectuer des vérifications croisées ; éviter les comptes publics pour les contrats sensibles."
        },
        {
          title: "Rédigez un briefing industriel avec une recherche en temps réel dans Gemini",
          difficulty: "Débutant",
          duration: "~10 minutes",
          desc: "Utilisez Gemini + Google Search pour générer un rapport hebdomadaire sur l'industrie avec des sources cliquables.",
          steps: [
            "Ouvrez gemini.google.com et connectez-vous",
            "Collez l'invite, changez d'industrie pour votre domaine",
            "Vérifiez les liens sources ouverts ; supprimer les entrées obsolètes",
            "Vérifiez les liens sources ouverts ; supprimer les entrées obsolètes",
            "Demandez « 3 conclusions exécutives + 3 mesures d'action »",
            "Copier dans Google Docs pour la réunion hebdomadaire de l'équipe"
          ],
          prompt: "Recherchez les développements importants dans le « commerce électronique transfrontalier en Chine 2026 » au cours des 7 derniers jours. Produisez un mémoire en anglais de 400 mots :\n\n- 3 titres cette semaine (une phrase + source chacun)\n- Impact sur les petits vendeurs\n- 2 variables à surveiller la semaine prochaine\n\nCiter des sources vérifiables ; s'il n'y en a pas, écrivez « Aucun ».",
          result: "Briefing de l'industrie d'origine prêt pour un stand-up ou une newsletter interne.",
          tips: "La force de Gemini réside dans l'intégration de la recherche : cliquez toujours sur chaque source pour vérifier."
        },
        {
          title: "Écrivez un article de style Xiaohongshu avec Qwen",
          difficulty: "Débutant",
          duration: "~8 minutes",
          desc: "Utilisez Qwen pour une copie de style Xiaohongshu avec titre, corps, balises et suggestions de couverture.",
          steps: [
            "Ouvrez Qwen, nouveau chat",
            "Remplissez rapidement les arguments de vente de produits réels (pas d'allégations exagérées)",
            "Demandez « une version A/B plus courte et plus conversationnelle »",
            "Demandez 3 idées de photo de couverture/génération",
            "Copiez 5 balises de sujet ; vérifier les règles de la plateforme",
            "Examen humain des mots sensibles au droit de la publicité avant leur publication"
          ],
          prompt: "Produit : « Tasse à café portable à infusion froide ». Points forts : infusion 5 minutes, protection thermique double paroi, look minimaliste.\n\nÉcrivez un article dans le style de Xiaohongshu :\n1) 3 titres dignes d'un clic\n2) ~ Corps de 250 mots, première personne, conversationnel, emoji léger\n3) 5 hashtags\n4) Un commentaire CTA\n\nConformité : pas de superlatifs comme « meilleur » ou « #1 ».",
          result: "Brouillon de message et balises Xiaohongshu prêts à être modifiés et publiés.",
          tips: "Qwen a un bon ton chinois ; ajoutez des détails d'expérience réels ou cela semble générique."
        },
        {
          title: "Lisez en profondeur le rapport annuel de 100 pages avec Kimi",
          difficulty: "Intermédiaire",
          duration: "~25 minutes",
          desc: "Télécharger le rapport annuel de la société cotée en PDF ; Kimi extrait les faits saillants financiers, les risques et le récit de gestion, à des fins de recherche et d'étude commerciale.",
          steps: [
            "Ouvrez Kimi, joignez le rapport annuel PDF (échantillon public OK)",
            "Attendez l'analyse, collez le cadre d'analyse ci-dessous",
            "Vérifier les numéros par rapport au texte original du PDF",
            "Suite : « Pourquoi une différence entre flux de trésorerie et bénéfice net ? »",
            "Exportez les notes Markdown, marquez les champs « à vérifier »",
            "Ne téléchargez jamais de documents privilégiés non publics sur une IA cloud"
          ],
          prompt: "Sur la base du rapport annuel téléchargé, publié en anglais :\n1) Activité principale en une phrase\n2) Tendance du chiffre d'affaires/bénéfice net sur trois ans (liste)\n3) 3 faits marquants + 3 risques cette période (citer le chapitre/page)\n4) 3 déclarations prospectives de la direction\n5) 3 questions de suivi pour les investisseurs\n\nLes numéros doivent provenir du document ; s'il manque, écrivez « Non divulgué ».",
          result: "Notes de rapport annuel structurées avec références de pages et liste de questions.",
          tips: "Kimi gère bien les longs PDF : vérifiez toujours les chiffres financiers ; L'IA peut mal lire les unités (10 000 contre 100 M)."
        },
        {
          title: "Erreur de débogage Python avec DeepSeek",
          difficulty: "Débutant",
          duration: "~12 minutes",
          desc: "Donnez le traçage DeepSeek + un extrait de code ; localisez la cause première d’IndexError, corrigez-la et renforcez-la contre les cas extrêmes.",
          steps: [
            "Ouvrez DeepSeek, nouveau chat",
            "Collez le code buggy + traçage complet ci-dessous",
            "Lisez les sections « cause » et « code fixe ».",
            "Suivi : \"Ajouter une validation d'entrée pour une liste vide\"",
            "Suivi : \"Ajouter une validation d'entrée pour une liste vide\"",
            "Comparez avant/après ; noter le modèle de bug"
          ],
          prompt: "Ces erreurs de code Python : expliquez en anglais et corrigez :\n\n```python\ndef avg_positive (nombres) :\n    pos = [n pour n en chiffres si n > 0]\n    retourner somme (pos) / len (pos)\n\nimprimer(moyenne_positive([]))\n```\n\nTraceback : ZeroDivisionError : division par zéro\n\nVeuillez : 1) Expliquez 2) Code fixe 3) Gestion des bords 4) 2 cas de test",
          result: "DeepSeek est rentable pour le code ; collez le traçage complet, pas seulement la dernière ligne.",
          tips: "DeepSeek est rentable pour le code ; collez le traçage complet, pas seulement la dernière ligne."
        },
        {
          title: "Image sur fond blanc d'un produit de commerce électronique avec diffusion stable",
          difficulty: "Intermédiaire",
          duration: "~20 minutes",
          desc: "Via Stability Online ou WebUI local, générez une photo de produit minimaliste ; apprendre les invites + les invites négatives.",
          steps: [
            "Ouvrez Stabilité en ligne ou local A1111 / ComfyUI",
            "Collez les invites positives et négatives en anglais",
            "Réglez 1:1 ou 4:5, étapes 25 à 30, CFG ~7",
            "Générez-en 4, choisissez le plus propre et le plus haut de gamme",
            "Ajoutez un arrière-plan de la couleur de la marque pour la deuxième scène",
            "Confirmer la licence de la plateforme et les droits du produit avant toute utilisation commerciale"
          ],
          prompt: "Positif : photo de produit minimaliste d'écouteurs sans fil, fond blanc pur, éclairage de studio, ombre douce, composition centrée, ultra nette, photographie commerciale, 4k\n\nNégatif : texte, filigrane, logo, flou, déformé, objets supplémentaires, arrière-plan encombré",
          result: "Image de produit minimaliste pour la page de détail du commerce électronique.",
          tips: "Mots-clés du produit : fond blanc / éclairage studio / centré ; les invites négatives réduisent les déformations."
        },
        {
          title: "Vidéo produit de 15 secondes avec Kling AI",
          difficulty: "Débutant",
          duration: "~15 minutes",
          desc: "L'invite chinoise pour une présentation verticale de produits est courte : idéale pour le commerce Douyin/Xiaohongshu.",
          steps: [
            "Enregistrez Kling AI → génération vidéo",
            "Texte vers vidéo, format 9:16",
            "Coller l'invite, générer un clip de 5 à 10 s",
            "Réessayez avec « push-in lent », « lumière douce » si nécessaire",
            "Téléchargez MP4, importez dans l'éditeur pour les sous-titres et le CTA",
            "Étiquetez le contenu généré par l'IA selon les règles de la plate-forme"
          ],
          prompt: "Vertical 9:16, bureau blanc minimaliste avec tasse thermos intelligente, vapeur qui monte lentement, produit en orbite de la caméra, lumière naturelle douce, sensation publicitaire haut de gamme, arrière-plan épuré, sans texte ni filigrane, physique réaliste",
          result: "Clip vidéo de présentation de produits vertical.",
          tips: "Kling répond bien au « ralenti » et à la « qualité des publicités commerciales » ; diviser des histoires complexes en segments."
        },
        {
          title: "Animer une photo de produit avec Runway",
          difficulty: "Intermédiaire",
          duration: "~18 minutes",
          desc: "Téléchargez une photo statique du produit ; Image en vidéo de piste pour le héros dynamique 4 s : pour l'ouvreur de publicité ou le héros de site Web.",
          steps: [
            "Enregistrer Runway → Image vers vidéo Gen-3",
            "Téléchargez un produit clair JPG/PNG (fond blanc de préférence)",
            "Coller l'invite de mouvement ci-dessous",
            "Générez 4s, vérifiez que le mouvement est naturel",
            "Exporter, mettre en boucle ou ajouter de la musique dans l'éditeur",
            "Surveillez les bords du produit : s'ils sont déformés, utilisez des mots de mouvement plus simples."
          ],
          prompt: "Push-in cinématographique lent, parallaxe subtile, le produit reste net, lumière de studio douce, mouvement d'ombre doux, pas de morphing, qualité publicitaire commerciale",
          result: "Clip animé du produit 4s pour le héros ou la page de destination.",
          tips: "Image vers vidéo : petits mouvements (poussée lente / rotation subtile) ; les gros mouvements se déforment facilement."
        },
        {
          title: "Piste promotionnelle de marque de 30 secondes avec Suno",
          difficulty: "Débutant",
          duration: "~10 minutes",
          desc: "Suno v4 génère une courte musique promotionnelle à partir du ton de la marque : instrumental + rythme pour la vidéo BGM ou l'échauffement d'un événement.",
          steps: [
            "Enregistrer Suno → Créer",
            "Mode personnalisé, coller la description du style",
            "Générez 2 pistes, choisissez un rythme plus régulier",
            "Prolonger jusqu'à 30 à 45 s si nécessaire",
            "Télécharger MP3, baisser le volume en vidéo BGM",
            "Vérifiez la licence Suno avant une utilisation commerciale"
          ],
          prompt: "Suno : « Instrumental + ambiance + BPM + scène » est stable ; pour les paroles, précisez la langue et le thème.",
          result: "Musique de fond promotionnelle de la marque instrumentale.",
          tips: "Organisez des notes de réunion et des tâches avec Notion AI"
        },
        {
          title: "Organisez des notes de réunion et des tâches avec Notion AI",
          difficulty: "Débutant",
          duration: "~12 minutes",
          desc: "Collez les notes approximatives de la réunion dans Notion ; L'IA produit des procès-verbaux structurés, des décisions et des tâches vérifiables.",
          steps: [
            "Nouvelle page Notion \"Réunion hebdomadaire 2026-06-25\"",
            "Coller des notes brutes ou une transcription",
            "Tout sélectionner → Notion AI → Résumer → Éléments d'action",
            "Invite : « Regrouper les tâches par propriétaire »",
            "Convertissez les tâches en blocs de tâches Notion et en @coéquipiers",
            "Lien de page de partage pour que les participants puissent confirmer"
          ],
          prompt: "À partir du contenu de cette page, sortie :\n1) Résumé de la réunion (≤5 puces)\n2) Décisions clés\n3) Liste de tâches : propriétaire | tâche | date d'échéance\n4) Questions ouvertes\n\nanglais; n’inventez pas d’éléments indiscutables.",
          result: "Page de réunion collaborative avec tâches groupées.",
          tips: "Notion AI idéale pour le « second passage » sur les notes existantes ; capturez les mots-clés en direct pour plus de précision."
        },
        {
          title: "Pitch deck de 10 minutes avec Gamma",
          difficulty: "Débutant",
          duration: "~10 minutes",
          desc: "Envoyez le plan à Gamma pour un pitch deck de 10 diapositives : partagez en ligne ou exportez au format PDF.",
          steps: [
            "Connectez-vous Gamma → Créer → Présentation",
            "Collez le contour du pitch ci-dessous, choisissez un thème technologique minimaliste",
            "Examinez chaque diapositive pour les données et le libellé.",
            "Insérez des captures d'écran ou des graphiques de produits sur les diapositives clés",
            "L'IA réécrit les longs paragraphes en puces",
            "Exporter le PDF ou partager le lien pour un aperçu"
          ],
          prompt: "Générez un pitch deck en anglais de 10 diapositives :\n\nSujet : Plateforme d'apprentissage de l'IA \"BestWayToLearn.AI\"\nPublic : Responsables de formation en entreprise\nStructure : Couverture / Pain / Solution / Démo / Parcours d'apprentissage / Cas / Business model / Différenciation / Jalons / Contact\n\nStyle : technologie sombre, 3 à 5 puces par diapositive, évitez les murs de texte",
          result: "Projet de pitch deck partageable en 10 diapositives.",
          tips: "Gamma a besoin d’un aperçu clair ; remplacer les nombres et les cas par des données réelles."
        },
        {
          title: "Recherche de concurrents sur une page avec Perplexity",
          difficulty: "Débutant",
          duration: "~15 minutes",
          desc: "Perplexity Pro Recherchez le paysage concurrentiel : résumé d'une page avec les sources citées.",
          steps: [
            "Open Perplexity (Pro pour une recherche plus approfondie)",
            "Coller la question de recherche, attendre la récupération",
            "Suivi : \"Tableau de comparaison des fonctionnalités ChatGPT vs Claude vs Gemini\"",
            "Suivi : \"Tableau de comparaison des fonctionnalités ChatGPT vs Claude vs Gemini\"",
            "Copier vers Notion/Feishu avec la date de recherche",
            "Supprimer les liens sources obsolètes ou brisés"
          ],
          prompt: "Recherchez le marché 2026 des « IDE de codage IA » : positionnement du curseur, de la planche à voile, du copilote GitHub, des prix, des différences fondamentales, des utilisateurs cibles. Sortie en anglais d'une page : aperçu | tableau comparatif | 3 conseils de sélection | sources citées",
          result: "Cité d'une page d'un concurrent pour les discussions sur les outils.",
          tips: "La force de la perplexité est des sources vérifiables – confirmez toujours les prix sur les sites officiels."
        },
        {
          title: "Transformez 3 articles en podcast IA avec NotebookLM",
          difficulty: "Intermédiaire",
          duration: "~20 minutes",
          desc: "Téléchargez 3 documents PDF associés, générez un podcast de présentation audio et écoutez les faits saillants de la littérature sur les déplacements domicile-travail.",
          steps: [
            "Téléchargez 3 PDF sur le même sujet (articles publics OK)",
            "Attendez l'index, lisez d'abord la FAQ automatique",
            "Attendez l'index, lisez d'abord la FAQ automatique",
            "Studio → Générer un aperçu audio",
            "Écoutez, faites une pause pour vérifier les affirmations clés",
            "Chat : « Différences de méthodologie entre les trois articles ? »"
          ],
          prompt: "Audio podcast AI + cahier de littérature interrogeable.",
          result: "Audio podcast AI + cahier de littérature interrogeable.",
          tips: "NotebookLM utilise uniquement vos téléchargements, ce qui est idéal pour les critiques éclairées ; citer des articles originaux pour des travaux universitaires."
        },
        {
          title: "Rédigez un article WeChat long avec ERNIE Bot",
          difficulty: "Débutant",
          duration: "~15 minutes",
          desc: "ERNIE Bot pour une explication d'environ 1 500 mots avec des options de titre, une structure et des mots-clés SEO.",
          steps: [
            "Ouvrez ERNIE Bot, nouveau chat",
            "Collez la tâche d'écriture avec votre sujet",
            "Demandez de \"réduire le ton de l'IA, ajouter des exemples concrets\"",
            "Obtenez 3 titres + un résumé de 100 mots",
            "Ajoutez de l'expérience/des données réelles, supprimez les phrases vides",
            "Format pour WeChat : sous-titres, citations, CTA de fin"
          ],
          prompt: "ERNIE connaît le contexte Internet chinois ; vérifiez les faits et ajoutez un angle personnel avant de publier.",
          result: "ERNIE connaît le contexte Internet chinois ; vérifiez les faits et ajoutez un angle personnel avant de publier.",
          tips: "Analysez les données de ventes Excel avec ChatGPT"
        },
        {
          title: "Analysez les données de ventes Excel avec ChatGPT",
          difficulty: "Intermédiaire",
          duration: "~18 minutes",
          desc: "Téléchargez un échantillon CSV ; Analyse avancée ChatGPT des tendances, des principaux SKU, des mois d'anomalie et des suggestions de graphiques.",
          steps: [
            "Préparer sales.csv anonymisé (mois, SKU, quantité, montant)",
            "Nouveau chat ChatGPT, télécharger le fichier (Plus/Équipe)",
            "Coller l'invite d'analyse",
            "Examiner l'analyse Python ou la sortie du tableau",
            "Demandez « les 5 meilleurs SKU à réapprovisionner ce mois-ci »",
            "Utiliser le niveau entreprise ou l'analyse locale pour les données sensibles"
          ],
          prompt: "Analysez le CSV des ventes téléchargé :\n1) Tendance des revenus mensuels\n2) Top 5 des SKU par montant\n3) Mois avec des baisses de volume inhabituelles et des raisons possibles basées sur les données (pas de spéculation)\n4) Suggérer 2 graphiques et informations\n5) 3 points d'action pour l'équipe commerciale\n\nAnglais, listes + courtes conclusions.",
          result: "Informations sur les tendances des ventes et suggestions de graphiques pour les réunions hebdomadaires.",
          tips: "Anonymiser avant le téléchargement ; agréger des données volumineuses ou demander à l'IA d'écrire Python pour l'exécuter localement."
        },
        {
          title: "Créez une page de tâches interactive avec Claude Artifacts",
          difficulty: "Intermédiaire",
          duration: "~15 minutes",
          desc: "Claude Artifacts génère une application HTML à fichier unique avec localStorage et cases à cocher.",
          steps: [
            "Claude nouveau chat, invite de collage",
            "Aperçu de la page de tâches dans Artifacts : ajouter/compléter/supprimer",
            "Si le style est désactivé : « UI sombre plus simple, cibles tactiles plus grandes »",
            "Exporter ou copier du code HTML à partir d'artefacts",
            "Double-cliquez sur HTML dans le navigateur, vérifiez localStorage",
            "Déployer sur les pages GitHub en tant qu'outil personnel"
          ],
          prompt: "Créez une application de tâches HTML à fichier unique (CSS+JS en ligne) :\n- Ajouter/compléter/supprimer\n- persistance du stockage local\n- Interface utilisateur minimale et sombre, adaptée aux mobiles\n- Interface utilisateur en anglais\n\nGénérez du code exécutable complet dans Artifacts et expliquez comment l'utiliser.",
          result: "Double-cliquez sur l'application Web Todo locale exécutable.",
          tips: "Claude Artefacts idéal pour les prototypes rapides ; importer vers Cursor pour les fonctionnalités complexes."
        },
        {
          title: "API REST d'échafaudage avec agent de curseur",
          difficulty: "Intermédiaire",
          duration: "~30 minutes",
          desc: "Agent curseur à partir de zéro : API Node.js Express avec vérification de l'état, TODO CRUD et README.",
          steps: [
            "Nouveau dossier todo-api, ouvert dans le curseur",
            "Mode agent : coller les exigences, autoriser la création multi-fichiers",
            "Terminal : installation npm && npm run dev",
            "curl ou Postman testent GET /health et POST /todos",
            "En cas de conflit de port, demandez à l'agent de mettre à jour l'exemple .env",
            "Lisez le fichier README de l'agent, ajoutez vos notes de déploiement"
          ],
          prompt: "Créez l'API REST Node.js + Express :\n- OBTENIR / santé\n- CRUD /todos (stockage en mémoire OK)\n- package.json, README, .gitignore\n- Gestion simple des erreurs et commentaires en anglais\n- Donner des exemples de commandes de démarrage et de tests",
          result: "Échafaudage d'API TODO exécutable localement avec instructions de test.",
          tips: "Autoriser les écritures de fichiers et le terminal en mode Agent ; passer le contrôle de santé avant d'ajouter la base de données."
        },
        {
          title: "Concevoir une affiche de marque de café avec Midjourney",
          difficulty: "Débutant",
          duration: "~12 minutes",
          desc: "Pratique des affiches commerciales : sujet, espace négatif, couleurs de la marque, zone de typographie, pas seulement le paysage.",
          steps: [
            "Invite de collage, note --ar 2:3 affiche verticale",
            "Invite de collage, note --ar 2:3 affiche verticale",
            "Version haut de gamme avec espace pour logo",
            "Superposer le nom de la marque et le slogan dans Figma/Canva (le texte de l'IA n'est pas fiable)",
            "Exporter JPG pour un voyageur debout en magasin ou sur les réseaux sociaux",
            "Exporter JPG pour un voyageur debout en magasin ou sur les réseaux sociaux"
          ],
          prompt: "affiche minimaliste de la marque de café, tasse en céramique unique sur table en bois, lumière du matin, grand espace négatif en haut pour la typographie, palette terreuse marron et crème, photographie éditoriale, composition épurée --ar 2:3 --style brut --v 6",
          result: "Image de base d'affiche de café verticale pour la superposition de texte.",
          tips: "Espace de réserve : grand espace négatif en haut ; ajouter du texte dans la publication : le texte à mi-parcours est souvent tronqué."
        },
        {
          title: "Brouillons d'icônes d'application par lots avec ChatGPT",
          difficulty: "Débutant",
          duration: "~8 minutes",
          desc: "DALL·E dans ChatGPT génère 4 brouillons de style d'icône d'application pour le raffinement Figma.",
          steps: [
            "Nouveau chat ChatGPT, confirmez la génération d'images disponible",
            "Invite de collage, demander 4 variantes de couleurs",
            "Téléchargez la meilleure correspondance 1024px avec la marque",
            "Masque arrondi Figma pour les spécifications d'icône iOS",
            "Itérer \"plus plat, moins de détails\" si nécessaire",
            "Vérifier la lisibilité en petite taille 60×60"
          ],
          prompt: "4 brouillons d'icônes d'application à affiner dans les outils de conception.",
          result: "4 brouillons d'icônes d'application à affiner dans les outils de conception.",
          tips: "Testez à 60 × 60 : évitez trop de lignes fines."
        },
        {
          title: "Voix off en anglais pour vidéo avec ElevenLabs",
          difficulty: "Débutant",
          duration: "~12 minutes",
          desc: "ElevenLabs → Text to Speech, pro anglais homme/femme",
          steps: [
            "ElevenLabs → Text to Speech, pro anglais homme/femme",
            "Collez le script des années 60 ci-dessous, réglez la stabilité/la clarté",
            "Générez, corrigez les mots mal prononcés (épelez « A I »)",
            "Téléchargez MP3, importez dans l'éditeur vidéo",
            "Alignez-vous sur les visuels, coupez les pauses",
            "Notez la source de doublage si la plate-forme l'exige"
          ],
          prompt: "Bienvenue sur BestWayToLearn.AI. En seulement sept jours, vous passerez des bases de l'IA à de vrais projets. Découvrez le fonctionnement des grands modèles de langage, choisissez les bons outils et entraînez-vous avec des didacticiels pratiques. Commencez par la cognition, maîtrisez les outils, expédiez un travail réel, puis validez vos compétences. Votre voyage vers l'IA commence maintenant.",
          result: "Narration en anglais MP3 intégrable en vidéo.",
          tips: "Épeler les abréviations pour la prononciation (A I / Chat G P T) ; diviser les longs scripts en segments."
        },
        {
          title: "Voix off par lots de courtes vidéos avec Fish Audio",
          difficulty: "Intermédiaire",
          duration: "~18 minutes",
          desc: "Utilisez une voix chinoise clonée ou prédéfinie pour 3 courts scripts et améliorez la production de courtes vidéos.",
          steps: [
            "Connexion Fish Audio, choisissez une voix chinoise stable",
            "Générez des scripts 3 × 30 s séparément",
            "Unifiez la vitesse/le volume, téléchargez le MP3 en séquence 1–3",
            "Aligner dans l'éditeur avec les visuels et les sous-titres",
            "Corriger la prononciation de \"AI\", \"model\" si nécessaire",
            "Scripts de sauvegarde et audio ; modèle de voix off réutilisable"
          ],
          prompt: "【Script 1】Le saviez-vous ? Vous n'avez pas besoin de tous les calculs avant d'utiliser l'IA. L'apprentissage axé sur les tâches d'abord, la théorie ensuite : c'est le plus rapide.\n\n【Script 2】N'accumulez pas d'outils : une IA de chat + un spécialiste pour votre flux de travail principal suffisent.\n\n【Script 3】 45 minutes par jour pendant une semaine : vous pouvez compléter la cognition par la pratique.",
          result: "3 MP3 de voix off chinoise pour une courte vidéo.",
          tips: "Unifiez les paramètres vocaux pour le travail par lots ; gardez les scripts 30 à 45 secondes pour éditer le rythme."
        },
        {
          title: "Diffusez des mises à jour quotidiennes sur les concurrents avec OpenClaw",
          difficulty: "Avancé",
          duration: "~25 minutes",
          desc: "Au-delà des actualités boursières : les jours de semaine, OpenClaw rassemble les mises à jour des sites/blogs des concurrents et les diffuse vers Slack.",
          steps: [
            "Assurez-vous qu'OpenClaw Gateway est en cours d'exécution et que le webhook/bot Slack est connecté.",
            "Remplacez la liste des concurrents dans la commande cron par votre espace",
            "Après la création, openclaw cron exécute un test manuel",
            "S'il est bruyant, le message doit nécessiter « des changements majeurs uniquement »",
            "S'il est bruyant, le message doit nécessiter « des changements majeurs uniquement »",
            "Respectez le fichier robots.txt ; pas d'exploration agressive"
          ],
          prompt: "openclaw cron crée \"0 9 * * 1-5\" \\\n  --name \"Résumé quotidien des concurrents\" \\\n  --tz \"Asie/Shanghai\" \\\n  --session isolée \\\n  --message \"Vous êtes un analyste de veille concurrentielle. Vérifiez quotidiennement les mises à jour du journal des modifications/du blog pour : Cursor, Windsurf, GitHub Copilot. Sortez un bref en anglais (≤ 300 mots) : 1) Les changements d'aujourd'hui 2) L'impact sur l'utilisateur 3) Les liens sources. S'il n'y en a pas : 'Aucune mise à jour publique majeure aujourd'hui.'\" \\\n  --annoncer \\\n  --canal mou \\\n  --à \"VOTRE_SLACK_CHANNEL_ID\"",
          result: "Résumé des concurrents du matin en semaine dans Slack.",
          tips: "Comme stock cron, utilisez une session isolée ; citez toujours des sources à des fins de renseignement."
        }
      ],
      practiceCategories: {
        "全部": "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
        "职场办公": "Lieu de travail et bureau",
        "学习成长": "Apprentissage et croissance",
        "编程开发": "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
        "数据营销": "Données et marketing",
        "翻译法务": "Traduction & juridique"
      },
      practices: [
        {
          title: "Répertoriez les points forts du travail sous forme de puces ; L'IA se développe dans des rapports hebdomadaires structurés ou des e-mails professionnels.",
          desc: "Énumérez 3 à 5 éléments clés cette semaine",
          steps: [
            "Énumérez 3 à 5 éléments clés cette semaine",
            "Notez les résultats mesurables par élément",
            "Demandez à l'IA de formater selon le style de l'entreprise"
          ],
          prompt: "Vous êtes un consultant professionnel en communication sur le lieu de travail.\nDéveloppez ce qui suit dans un rapport hebdomadaire professionnel concis (~ 300 mots) :\n[Coller les puces]\nExigences : axé sur les données, mettre en évidence les résultats, ton professionnel positif."
        },
        {
          title: "Apprendre quelque chose de nouveau",
          desc: "Utilisez l'IA comme tuteur privé : analogies, questions de quiz et correction des malentendus.",
          steps: [
            "Demandez une explication à la Feynman",
            "Demandez une explication à la Feynman",
            "Pratiquez des questions pour vérifier la compréhension"
          ],
          prompt: "Apprenez-moi [sujet] en utilisant la technique Feynman.\n1. Expliquez les concepts de base avec des analogies quotidiennes\n2. Énumérez 3 idées fausses courantes\n3. Donnez 2 questions à choix multiples avec réponses et explications"
        },
        {
          title: "Débogage et explication du code",
          desc: "Collez les erreurs ou les extraits de code ; L'IA localise les problèmes, explique les causes et suggère des correctifs.",
          steps: [
            "Coller le message d'erreur complet",
            "Inclure le contexte de code pertinent",
            "Demandez la cause, la solution et la prévention"
          ],
          prompt: "Ce code échoue au moment de l'exécution :\n[Code et erreur]\nVeuillez : 1) Expliquez l'erreur en anglais 2) Fournissez un code fixe 3) Comment l'éviter"
        },
        {
          title: "Analyse et visualisation des données",
          desc: "Téléchargez CSV/Excel ; L'IA trouve des tendances, des anomalies et suggère des types de graphiques.",
          steps: [
            "Télécharger le fichier de données",
            "Objectif de l'analyse d'état",
            "Demander des statistiques, des informations et des suggestions de graphiques"
          ],
          prompt: "Analysez les données de ventes téléchargées :\n1. Aperçu des statistiques de base\n2. Top 3 des tendances et anomalies\n3. Suggérez 2 graphiques de grande valeur\n4. Trois recommandations commerciales concrètes"
        },
        {
          title: "Création de copie marketing",
          desc: "Fournir le produit et le public ; obtenez plusieurs versions de copie pour les tests A/B.",
          steps: [
            "Décrire le produit et les arguments de vente",
            "Définir la personnalité du public cible",
            "Demander 3 variantes de style"
          ],
          prompt: "Produit : [description] Public : [description]\nGénérez 3 versions de copie marketing (professionnelle/vivante/urgente), chacune avec titre + corps (~ 100 mots) + CTA."
        },
        {
          title: "Organisation des notes de réunion",
          desc: "Envoyez des transcriptions ou des notes désordonnées à l'IA pour des minutes structurées et des éléments d'action.",
          steps: [
            "Fournir une transcription ou des notes de la réunion",
            "Notez les participants et le sujet",
            "Organisez ce compte rendu de réunion :\n## Sujet ## Décisions clés ## Todos (propriétaire + date d'échéance) ## Questions ouvertes\n\n[Coller l'enregistrement]"
          ],
          prompt: "Organisez ce compte rendu de réunion :\n## Sujet ## Décisions clés ## Todos (propriétaire + date d'échéance) ## Questions ouvertes\n\n[Coller l'enregistrement]"
        },
        {
          title: "CV et lettre de motivation",
          desc: "Optimisez votre CV pour un rôle spécifique et générez une lettre de motivation personnalisée.",
          steps: [
            "Coller la description de poste cible",
            "Énumérez votre expérience pertinente",
            "Demandez une optimisation adaptée"
          ],
          prompt: "Rôle cible : [JD]\nMon parcours : [faits saillants du CV]\nS'il vous plaît : 1) Optimisez les puces d'expérience (surlignez les correspondances) 2) Rédigez une lettre de motivation d'environ 200 mots"
        },
        {
          title: "Idéation de prototypes de produits",
          desc: "Décrire l'idée du produit ; L'IA génère des user stories, une liste de fonctionnalités et une structure de page.",
          steps: [
            "Idée de produit en un paragraphe",
            "Définir les utilisateurs cibles",
            "Demander la liste des fonctionnalités MVP"
          ],
          prompt: "Je veux construire [description du produit].\nRésultat : 1) 3 témoignages d'utilisateurs 2) Liste des fonctionnalités MVP prioritaires 3) Description filaire de la page principale 4) Risques et atténuations"
        },
        {
          title: "Traduction et localisation",
          desc: "Au-delà de la traduction littérale, adaptez le contexte culturel, le ton et le format.",
          steps: [
            "Fournir le texte source et la langue cible",
            "Expliquer le public et le contexte culturel",
            "Demander une adaptation non littérale"
          ],
          prompt: "Traduisez ce qui suit en [langue] :\n1. Expressions locales naturelles 2. Préserver le ton original 3. Noter 2 adaptations culturelles\n\n[Texte source]"
        },
        {
          title: "Etude de concurrence et de marché",
          desc: "L'IA cartographie le paysage et les tendances concurrentiels ; produire une analyse SWOT.",
          steps: [
            "Définir le secteur et la portée",
            "Demander une comparaison structurée des concurrents",
            "Vérifier les sources de données clés"
          ],
          prompt: "Analyse concurrentielle pour [industrie/produit] :\n1. Cinq principaux concurrents et différences 2. SWOT 3. Trois opportunités de différenciation\nCiter les sources."
        },
        {
          title: "Conception pédagogique",
          desc: "Concevoir un plan de cours, du matériel et des activités pour un sujet et un public.",
          steps: [
            "Public cible et objectifs d’apprentissage",
            "Préciser la durée et le format",
            "Demander un plan d'enseignement complet"
          ],
          prompt: "Public : [contexte] Sujet : [sujet] Durée : [heures]\nConception : 1) Objectifs d'apprentissage 2) Plan du cours 3) Segments interactifs 4) Devoirs"
        },
        {
          title: "Conception des images et de la couverture",
          desc: "Clarifier le style et le cas d'utilisation",
          steps: [
            "Clarifier le style et le cas d'utilisation",
            "Écrire une invite en anglais/chinois",
            "Répéter 2 à 3 tours"
          ],
          prompt: "Une illustration [style] de [sujet], palette [couleur], [composition], composition épurée, haute qualité --ar 16:9"
        },
        {
          title: "Révision des contrats juridiques",
          desc: "Télécharger le contrat ; AI signale les clauses de risque, explique les termes et suggère des révisions.",
          steps: [
            "Télécharger le contrat complet",
            "Indiquez votre position (Partie A/B)",
            "Demander les faits saillants des risques"
          ],
          prompt: "Examinez ce contrat (nous sommes [Partie A/B]) :\n1. Signaler 5 clauses de risque 2. Expliquer les termes juridiques 3. Suggérer des révisions\n\n[Texte du contrat]"
        },
        {
          title: "Contenu des réseaux sociaux",
          desc: "Générez des publications adaptées à la plateforme pour Xiaohongshu/Weibo/LinkedIn à partir du message principal.",
          steps: [
            "Choisissez la plateforme et le public",
            "Fournir des points de message centraux",
            "Demander des versions + hashtags"
          ],
          prompt: "Créez un article [plateforme] sur [sujet] :\n1. Titre accrocheur 2. Corps (~ 200 mots) 3. Cinq hashtags 4. CTA d'engagement"
        },
        {
          title: "Formules Excel et traitement des données",
          desc: "Décrire la tâche relative aux données ; L'IA génère des formules Excel/Sheets ou des scripts Python.",
          steps: [
            "Décrire la structure des données et l'objectif",
            "Donner un exemple d'entrée/sortie",
            "Demander une formule ou un script"
          ],
          prompt: "Données Excel : [description de la structure]\nBesoin : [objectif de traitement]\nFournir : 1) Formule Excel 2) Étapes 3) Mises en garde"
        },
        {
          title: "Gestion des connaissances personnelles",
          desc: "Organisez les notes de lecture et les coupures de presse dans une base de connaissances structurée.",
          steps: [
            "Collectez des notes éparses",
            "Définir la taxonomie",
            "L'IA génère des résumés et des liens"
          ],
          prompt: "Organisez ces notes dans une base de connaissances structurée :\n1. Regrouper par thème 2) Résumé par thème 3) Concepts clés et liens\n\n[Remarques]"
        }
      ],
      promptLab: {
        tasks: {
          "内容写作": "Veuillez rédiger le contenu conformément aux exigences suivantes.",
          "问题分析": "Veuillez analyser le problème suivant en profondeur.",
          "代码开发": "Veuillez écrire le code conformément aux exigences suivantes.",
          "学习辅导": "S'il vous plaît, aidez-moi à comprendre le sujet suivant comme le ferait un enseignant.",
          "数据分析": "Veuillez effectuer une analyse des données sur les données ou questions suivantes.",
          "创意策划": "Veuillez fournir des idées créatives pour le scénario suivant.",
          "翻译润色": "Veuillez traduire ou peaufiner le contenu suivant.",
          "会议纪要": "Veuillez organiser les éléments suivants dans des procès-verbaux de réunion structurés.",
          "竞品调研": "Veuillez effectuer une analyse de la concurrence et du marché pour l’industrie/le produit suivant.",
          "简历优化": "Veuillez optimiser le CV et les documents d'emploi en fonction des informations suivantes."
        },
        taskLabels: {
          "内容写作": "Rédaction de contenu",
          "问题分析": "Analyse du problème",
          "代码开发": "Développement de codes",
          "学习辅导": "Aide à l'apprentissage",
          "数据分析": "Analyse des données",
          "创意策划": "Planification créative",
          "翻译润色": "Traduction et polissage",
          "会议纪要": "Notes de réunion",
          "竞品调研": "Recherche de concurrents",
          "简历优化": "Reprendre l'optimisation"
        },
        tools: {
          "内容写作": [
            "ChatGPT",
            "Claude",
            "Qwen"
          ],
          "问题分析": [
            "ChatGPT",
            "Claude",
            "Recherche profonde"
          ],
          "代码开发": [
            "Curseur",
            "Claude",
            "Recherche profonde"
          ],
          "学习辅导": [
            "ChatGPT",
            "Claude",
            "Profond"
          ],
          "数据分析": [
            "ChatGPT",
            "Claude",
            "Qwen"
          ],
          "创意策划": [
            "Claude",
            "ChatGPT",
            "Gemini"
          ],
          "翻译润色": [
            "Profond",
            "Claude",
            "ChatGPT"
          ],
          "会议纪要": [
            "Kimi",
            "Claude",
            "Qwen"
          ],
          "竞品调研": [
            "Profond",
            "ChatGPT",
            "CarnetLM"
          ],
          "简历优化": [
            "ChatGPT",
            "Claude",
            "Bot ERNIE"
          ]
        },
        presets: {
          "内容写作": {
            role: "Stratège de contenu senior",
            context: "Sujet d'écriture :\nPublic cible :\nPoints clés du message (3 à 5) :\nLimite de chaînes et de mots :",
            output: "Projet complet avec titre, lede, 2 à 3 sections sous-titrées et résumé final ou CTA",
            tone: "Professionnel & rigoureux"
          },
          "问题分析": {
            role: "Consultant en stratégie senior",
            context: "Problème à analyser :\nContexte connu et contraintes :\nDonnées ou observations connexes :\nVotre objectif de position/décision :",
            output: "Rapport structuré : définition du problème → hypothèses sur les causes profondes → comparaison des options → recommandation et étapes suivantes",
            tone: "Professionnel & rigoureux"
          },
          "代码开发": {
            role: "Ingénieur full-stack",
            context: "Pile technologique :\nExigences des fonctionnalités :\nExemples d'entrées/sorties :\nCode existant ou erreurs (le cas échéant) :",
            output: "Code exécutable + commentaires en anglais + brèves notes d'utilisation + cas de test suggérés",
            tone: "Concis et direct"
          },
          "学习辅导": {
            role: "Tuteur à la Feynman",
            context: "Sujet d'apprentissage :\nMon niveau actuel :\nConfusion spécifique :\nTemps disponible :",
            output: "Clair et accessible",
            tone: "Clair et accessible"
          },
          "数据分析": {
            role: "Analyste de données",
            context: "Description des données (source, champs, plage horaire) :\nObjectif de l'analyse :\nQuestions commerciales :\nAnomalies ou hypothèses connues :",
            output: "Aperçu → 3 conclusions clés → suggestions de graphiques → recommandations exploitables ; étiquette confirmée/déduite/à vérifier",
            tone: "Professionnel & rigoureux"
          },
          "创意策划": {
            role: "Directeur créatif",
            context: "Marque/produit :\nPublic cible :\nContraintes de canal et de budget :\nMessage principal :",
            output: "2 à 3 concepts créatifs : chacun avec une idée principale, un chemin d'exécution, un impact attendu et des risques",
            tone: "Créatif et exploratoire"
          },
          "翻译润色": {
            role: "Éditeur bilingue",
            context: "Langue source et contenu :\nLangue cible et public :\nStyle (formel/décontracté/marketing) :\nTermes ou noms de marques à conserver :",
            output: "Final poli/traduit + notes sur 2 choix de formulations clés",
            tone: "Professionnel & rigoureux"
          },
          "会议纪要": {
            role: "Adjointe de direction principale",
            context: "Sujet de la réunion :\nParticipants et rôles :\nPoints de discussion (coller des notes/transcription) :\nTâches verbales (le cas échéant) :",
            output: "Minutes structurées : sujet et heure → décisions clés → table des tâches (propriétaire + date d'échéance) → questions ouvertes",
            tone: "Concis et direct"
          },
          "竞品调研": {
            role: "Analyste d'études de marché",
            context: "Industrie/piste :\nNotre positionnement produit :\nConcurrents à comparer (3-5) :\nFocus (fonctionnalités/tarifs/canaux, etc.) :",
            output: "Tableau de comparaison des concurrents + résumé SWOT + 3 opportunités de différenciation ; citer les sources des affirmations clés",
            tone: "Professionnel & rigoureux"
          },
          "简历优化": {
            role: "Consultante senior en recrutement",
            context: "Résumé de la description de poste cible :\nFaits saillants du CV actuel (expérience/compétences/projets) :\nAnnées d'expérience et d'industrie :\nPoints forts à souligner / domaines à minimiser :",
            output: "Puces d'expérience optimisées (mots-clés JD) + lettre de motivation d'environ 200 mots + 3 conseils de préparation à l'entretien",
            tone: "Professionnel & rigoureux"
          }
        },
        tones: {
          "专业严谨": "Professionnel & rigoureux",
          "通俗易懂": "Clair et accessible",
          "创意发散": "Créatif et exploratoire",
          "简洁直接": "Concis et direct"
        },
        ui: {
          casesLabel: "Cas concrets",
          selectCaseStart: "Sélectionnez un dossier pour démarrer",
          copyPrompt: "Copier l'invite",
          configTitle: "Configuration rapide",
          taskType: "Type de tâche",
          role: "Rôle",
          rolePlaceholder: "par ex. Chef de produit sénior",
          context: "Contexte",
          contextPlaceholder: "Décrire le scénario, le public, les contraintes…",
          output: "Résultat attendu",
          outputPlaceholder: "par ex. Un aperçu du PRD de 500 mots",
          tone: "Tonifier",
          generateSimulate: "Générer et simuler",
          chatTitle: "Invite et réponse · simulation côte à côte",
          resetSim: "Réinitialiser la simulation",
          simEmptyTitle: "La simulation n'a pas démarré",
          simEmptyDesc: "Choisissez un cas ci-dessus ou modifiez le panneau de gauche et cliquez sur \"Générer et simuler\". L'invite, la réponse de l'IA et le guide d'action apparaissent ici.",
          guideTitle: "Simulation terminée · Essayer dans un outil réel",
          guideToolsLabel: "Outils recommandés :",
          followupPlaceholder: "Suivi, par ex. \"Rendez-le plus court\"…",
          send: "Envoyer",
          disclaimer: "Démo de préréglages locaux pour comprendre la structure des invites. Copiez l'invite dans les outils recommandés pour obtenir des résultats réels.",
          tryFollowup: "Essayez de demander :",
          taskPrefix: "Tâche:",
          casePrefix: "Cas:",
          customScene: "Scénario personnalisé",
          defaultRole: "Expert senior",
          defaultContext: "[Veuillez ajouter un contexte spécifique]",
          defaultOutput: "[Décrire le résultat attendu]",
          buildPrompt: {
            roleHeader: "# Rôle",
            rolePrefix: "Vous êtes un",
            taskHeader: "# Tâche",
            contextHeader: "# Contexte",
            outputHeader: "# Résultat attendu",
            requirementsHeader: "# Exigences",
            toneLine: "- Tonalité :",
            clarifyLine: "- Si des informations manquent, énumérez 2 à 3 questions clés pour confirmer en premier",
            structureLine: "- Structure claire avec des titres et des listes",
            uncertainLine: "- Marquer clairement le contenu incertain ; n'inventez pas de faits"
          },
          systemLabel: "Système",
          simulating: "Simuler…",
          promptSent: "Invite envoyée",
          aiReply: "Réponse de l'IA",
          copyFail: "Échec de la copie",
          defaultGuideSteps: [
            "Cliquez sur \"Copier l'invite\" dans la barre d'outils",
            "Ouvrez ChatGPT ou Claude et démarrez une nouvelle discussion",
            "Collez l'invite et remplacez le contexte par votre scénario réel",
            "Itérer sur la réponse : \"plus court\", \"sous forme de tableau\", \"ajouter des données\""
          ]
        },
        cases: [
          {
            id: "weekly-report",
            title: "Développer le rapport hebdomadaire",
            scene: "Communication sur le lieu de travail",
            task: "内容写作",
            role: "Consultante en communication au travail",
            context: "Cette semaine : 1) Livraison de l'outil de déploiement BestWayToLearn.AI v2, résolution du conflit de routage Nginx ; 2) Deux démos clients, 5 éléments de commentaires ; 3) Proposition rapide de refonte du laboratoire. Bloqueur : la vérification de l'environnement du serveur expire parfois.",
            output: "Rapport hebdomadaire professionnel d'environ 300 mots mettant en évidence les mesures et le plan de la semaine prochaine",
            tone: "Professionnel & rigoureux",
            response: "## Rapport hebdomadaire\n\n**Reporter** : Opérations produit · Équipe de projet Cloud\n**Période** : du 23 juin au 25 juin\n\n### Résultats clés\n1. **Déployer l'outil v2 en direct** : correction d'un crash de vérification d'environnement et d'un conflit avec le serveur par défaut de Nginx ; déploiement complet vérifié, site accessible.\n2. **Deux démonstrations clients** : Formation des responsables et des opérations informatiques ; 5 éléments de feedback exploitables sur le déploiement en un clic et la clarté du parcours d'apprentissage.\n3. **Refonte rapide du laboratoire** : bibliothèque de cas + simulation côte à côte pour abaisser la barrière du débutant.\n\n### Métriques\n- Taux de réussite du déploiement : 100 % en environnement de démonstration (3/3)\n- Satisfaction sur site : 4,6 / 5\n- Docs mis à jour : guide de déploiement + 6 cas de laboratoire\n\n### Problèmes et risques\n- La vérification de l'environnement expire parfois (> 15 s) sur les réseaux faibles ; étapes de repro enregistrées ; nouvelle tentative et expiration du délai UX prévu.\n\n### La semaine prochaine\n1. Détection de réseau faible + exportation de journaux\n2. Ajustez le module d'invite du jour 4 à partir des commentaires des clients\n3. Préparez un script de démonstration externe\n\n---\nDemandez si vous souhaitez une version plus courte ou par courrier électronique pour un public spécifique.",
            followups: [
              {
                user: "Compresser à moins de 200 mots, plus conversationnel",
                ai: "**Trois choses cette semaine :**\n1. L'outil de déploiement v2 est en ligne : conflit Nginx résolu, le site fonctionne.\n2. Deux démonstrations clients ; La principale demande était le déploiement en un clic.\n3. Le laboratoire Prompt a obtenu 6 cas réels avec simulation côte à côte.\n\n**Bloqueur :** la vérification de l'environnement expire parfois sur les réseaux faibles ; ajout d'une nouvelle tentative la semaine prochaine.\n\n**Suivant :** meilleure détection, ajustements du module d'invite, script de démonstration."
              }
            ],
            realGuide: {
              tools: [
                "ChatGPT",
                "Qwen",
                "Kimi"
              ],
              steps: [
                "Copiez l'invite générée (ou le message utilisateur) à partir du chat",
                "Ouvrez ChatGPT / Qwen, nouveau chat, collez",
                "Remplacez par vos véritables faits saillants hebdomadaires en contexte",
                "Itérer : \"plus court\", \"version e-mail\", \"mettre en évidence les métriques\""
              ],
              link: {
                label: "Plus de modèles de scénarios d'écriture",
                href: "#practice"
              }
            }
          },
          {
            id: "meeting-notes",
            title: "Collaboration en réunion",
            scene: "Collaboration en réunion",
            task: "会议纪要",
            role: "Adjointe de direction principale",
            context: "Évaluation du produit pour le module d'entreprise du parcours d'apprentissage BestWayToLearn.AI. Participants : Alex (PM), Blake (Eng), Casey (Design). Alex veut le coup d'envoi du troisième trimestre ; Blake s'inquiète des effectifs et préfère MVP ; Casey veut un système visuel unifié. Tâches verbales : évaluation technique de Blake dans deux semaines ; Inventaire des composants Casey.",
            output: "Minutes structurées : décisions, tâches (propriétaire + date d'échéance), questions ouvertes",
            tone: "Concis et direct",
            response: "## Compte-rendu de la réunion\n\n**Sujet** : Parcours d'apprentissage BestWayToLearn.AI · Examen du module d'entreprise\n**Heure** : 2026-06-25 14h00-15h00\n**Participants** : Alex (PM), Blake (Eng), Casey (Design)\n\n### Décisions clés\n1. **Direction de l'entreprise approuvée**, mais pas encore de lancement complet : MVP est le premier à valider l'hypothèse principale.\n2. **Système visuel d'abord** : les pages d'entreprise doivent réutiliser la bibliothèque de composants partagée.\n\n### Éléments d'action\n| Article | Propriétaire | À payer |\n|------|-------|-----|\n| Évaluation technique Enterprise MVP (effort/risques/dépenses) | Blake | 9 juillet |\n| Inventaire et lacunes de la bibliothèque de composants | Casey | 5 juillet |\n| Mettre à jour le projet de feuille de route du troisième trimestre à partir de l'évaluation | Alex | 12 juillet |\n\n### Questions ouvertes\n- Périmètre MVP : déployer l'outil uniquement ou inclure des rapports de quiz ?\n- Une page de tarification distincte et un flux d'essai sont-ils nécessaires ?\n\n---\nBesoin d'un résumé de fond ou d'un format de tâche Feishu/DingTalk ?",
            followups: [
              {
                user: "Convertir au format Feishu todo",
                ai: "【Feishu toutes choses】\n\n☐ Évaluation technique Enterprise MVP — @Blake — prévue le 9 juillet\n☐ Lacunes dans la bibliothèque de composants - @Casey - attendu le 5 juillet\n☐ Mise à jour de la feuille de route du troisième trimestre — @Alex — prévue le 12 juillet\n\nOuvert : portée MVP ; page de tarification/essai."
              }
            ],
            realGuide: {
              tools: [
                "Kimi",
                "Claude",
                "Qwen"
              ],
              steps: [
                "Après la réunion, collez la transcription ou les notes brouillons dans l'IA",
                "Utilisez l'invite structurée de ce cas ; notez les participants et votre concentration",
                "Vérifiez que les tâches correspondent à ce qui a été réellement convenu : ne transmettez pas de versions non vérifiées.",
                "Synchronisation des tâches confirmées avec Feishu/DingTalk/Notion"
              ],
              link: {
                label: "Kimi, un long document pratique",
                href: "#hands-on"
              }
            }
          },
          {
            id: "code-debug",
            title: "Correction de la division par zéro de Python",
            scene: "Débogage du code",
            task: "代码开发",
            role: "Ingénieur Python senior",
            context: "La fonction fait la moyenne des nombres positifs ; plante sur une liste vide. Code :\ndef avg_positive (nombres) :\n    pos = [n pour n en chiffres si n > 0]\n    retourner somme (pos) / len (pos)",
            output: "Expliquer l'erreur, le code corrigé, la gestion des bords et 2 cas de test",
            tone: "Clair et accessible",
            response: "## Cause\n\nLorsque `nums` est vide ou n'a pas de positif, `pos` est vide, `len(pos)` vaut 0 et `sum(pos) / len(pos)` déclenche **ZeroDivisionError**.\n\n## Code fixe\n\n```python\ndef avg_positive (nombres) :\n    \"\"\"Renvoyer la moyenne des nombres positifs ; Aucun si aucun.\"\"\"\n    sinon des chiffres :\n        retourner Aucun\n    pos = [n pour n en chiffres si n > 0]\n    sinon pos :\n        retourner Aucun\n    retourner somme (pos) / len (pos)\n\n\naffirmer avg_positive([1, -2, 3, 4]) == 2,5\naffirmer avg_positive([-1, -2]) est Aucun\naffirmer avg_positive([]) est Aucun\nprint(\"Tous les tests ont été réussis\")\n```\n\n## Remarques\n1. **Filtre puis garde** : ne divisez jamais par la longueur d'une liste vide.\n2. **Return None** lorsqu'il n'y a aucun positif ; branche des appelants avec « si le résultat est Aucun ».\n3. Renvoyez plutôt « 0.0 » si les règles métier l'exigent.\n\nVous souhaitez une exception personnalisée ou une version typée ?",
            followups: [],
            realGuide: {
              tools: [
                "Curseur",
                "Recherche profonde",
                "Copilote GitHub"
              ],
              steps: [
                "Dans Cursor / VS Code, sélectionnez le code défaillant, ouvrez le chat AI (Ctrl+L)",
                "Coller la trace de la pile complète + le contexte du code – pas seulement une ligne",
                "Demander : expliquer → corriger → ajouter des tests, même structure que ce cas",
                "Exécutez `python test.py` localement avant de vous engager"
              ],
              link: {
                label: "Codage pratique du curseur",
                href: "#hands-on"
              }
            }
          },
          {
            id: "xhs-copy",
            title: "Marketing du commerce électronique",
            scene: "Marketing du commerce électronique",
            task: "内容写作",
            role: "Opérateur senior de Xiaohongshu",
            context: "Produit : tasse à café portable à infusion froide. Points forts : infusion 5 minutes, protection thermique double paroi, look minimaliste. Public : employés de bureau de 25 à 35 ans, déplacements domicile-travail. Pas de superlatifs comme « meilleur » ou « #1 ».",
            output: "3 titres + article d'environ 250 mots + 5 hashtags + commentaire CTA",
            tone: "Clair et accessible",
            response: "### Options de titre\n1. Trajet en 5 minutes ｜Ma tasse à infusion froide portable ☕\n2. Astuce pour le café au bureau : aucun trempage nocturne n'est nécessaire\n3. Une tasse minimale qui obtient \"où est le lien ?\" au travail\n\n### Corps (~250 mots)\nAutrefois, une infusion froide signifiait tremper toute la nuit et se renverser pendant le trajet. Cette tasse portable a changé ma routine : **cinq minutes** et j'ai une tasse lisse à mon bureau.\n\nCe que j'aime :\n✅ **Double paroi**—chaud ou froid, confortable à tenir\n✅ **Look épuré** : ne crie pas sur le bureau, prend bien des photos\n\nJe prépare le marc la veille, j'ajoute de l'eau le matin, fait à l'arrivée. Économise par rapport à la livraison et coupe les gobelets jetables.\n\nPour les navetteurs qui souhaitent un rituel facile sans surcharge de matériel : pas de matériel de barista, mais **convivial au quotidien**.\n\n### Hashtags\n#coldbrew #commuteessentials #officecoffee #portablecup #workfuel\n\n### Commenter l'incitation à l'action\nInfusion chaude ou froide pendant votre trajet ? Partagez ci-dessous : je publierai un guide de préparation « une semaine, sans répétition ».\n\n---\nVous voulez une version plus vivante ou de style révision ?",
            followups: [],
            realGuide: {
              tools: [
                "ChatGPT",
                "Bot ERNIE",
                "Claude"
              ],
              steps: [
                "Mettez de vrais arguments de vente, une audience et des mots interdits dans l'invite",
                "Obtenez d'abord 3 titres, puis développez celui que vous aimez",
                "Contrôle humain : droit de la publicité, ton de la marque, tarification",
                "Associez-le à Midjourney / Tongyi Wanxiang pour des images de scènes de produits"
              ],
              link: {
                label: "Génération d'images pratique",
                href: "#hands-on"
              }
            }
          },
          {
            id: "market-brief",
            title: "Briefing du marché sur 7 jours",
            scene: "Recherche commerciale",
            task: "竞品调研",
            role: "Analyste de recherche industrielle",
            context: "Industrie : 2026 Commerce électronique transfrontalier en Chine. Focus : politique Amazon, TikTok Shop, SaaS indépendant, coûts logistiques. ~ Bref en anglais de 400 mots avec sources ; écrivez \"Aucun\" si aucune information fiable.",
            output: "## Brief de 7 jours sur le commerce électronique transfrontalier (structure de démonstration)\n\n> ⚠️ Démo pédagogique : réexécutez la récupération dans Perplexity / Metaso avant une utilisation réelle.\n\n### titres\n1. **Amazon a augmenté les contrôles ponctuels de conformité dans certaines catégories** (résumé du forum des vendeurs) : les PME ont besoin que les documents CPC/étiquette soient prêts.\n2. **Pousse d'intégration de TikTok Shop SEA** (page officielle) : promotions sur les frais du troisième trimestre pour les vendeurs dotés d'une capacité de vidéo courte.\n3. **Le SaaS indépendant regroupe un créateur de site IA + des packs multilingues** (journal des modifications de Shopify) : barrière de construction inférieure, le référencement appartient toujours à l'opérateur.\n\n### Impact sur les PME\n- **Coût de conformité en hausse** : les documents incomplets risquent d'être radiés – maintenez des listes de contrôle de catégorie.\n- **Diversification des canaux** : le risque uniquement pour Amazon augmente ; Magasins TikTok/indépendants en tant que chaînes incrémentielles.\n- **Outils moins chers, opérations plus difficiles** : la construction est plus facile ; la conversion dépend du contenu et des annonces.\n\n### À regarder la semaine prochaine\n1. Suppléments logistiques haute saison (pages tarifs transporteurs).\n2. Modifications du champ de déclaration d’importation US/UE (avis des douanes et du vendeur de la plateforme).\n\n---\nVous voulez « Amazon uniquement » ou un tableau comparatif des concurrents ?",
            tone: "Professionnel & rigoureux",
            response: "## Brief de 7 jours sur le commerce électronique transfrontalier (structure de démonstration)\n\n> ⚠️ Démo pédagogique : réexécutez la récupération dans Perplexity / Metaso avant une utilisation réelle.\n\n### titres\n1. **Amazon a augmenté les contrôles ponctuels de conformité dans certaines catégories** (résumé du forum des vendeurs) : les PME ont besoin que les documents CPC/étiquette soient prêts.\n2. **Pousse d'intégration de TikTok Shop SEA** (page officielle) : promotions sur les frais du troisième trimestre pour les vendeurs dotés d'une capacité de vidéo courte.\n3. **Le SaaS indépendant regroupe un créateur de site IA + des packs multilingues** (journal des modifications de Shopify) : barrière de construction inférieure, le référencement appartient toujours à l'opérateur.\n\n### Impact sur les PME\n- **Coût de conformité en hausse** : les documents incomplets risquent d'être radiés – maintenez des listes de contrôle de catégorie.\n- **Diversification des canaux** : le risque uniquement pour Amazon augmente ; Magasins TikTok/indépendants en tant que chaînes incrémentielles.\n- **Outils moins chers, opérations plus difficiles** : la construction est plus facile ; la conversion dépend du contenu et des annonces.\n\n### À regarder la semaine prochaine\n1. Suppléments logistiques haute saison (pages tarifs transporteurs).\n2. Modifications du champ de déclaration d’importation US/UE (avis des douanes et du vendeur de la plateforme).\n\n---\nVous voulez « Amazon uniquement » ou un tableau comparatif des concurrents ?",
            followups: [],
            realGuide: {
              tools: [
                "Profond",
                "Recherche Metaso AI",
                "ChatGPT"
              ],
              steps: [
                "Utilisez Perplexity / Metaso pour la récupération **cité**, et non la mémoire modèle seule",
                "Collez les résultats dans ChatGPT ; compresser dans ce format bref",
                "Vérifiez chaque lien source ; déposer des éléments invérifiables",
                "Planifiez des briefings quotidiens avec OpenClaw Cron (voir cas pratique)"
              ],
              link: {
                label: "Brève pratique programmée pour OpenClaw",
                href: "#hands-on"
              }
            }
          },
          {
            id: "feynman-transformer",
            title: "Feynman : Transformateur",
            scene: "Aide à l'apprentissage",
            task: "学习辅导",
            role: "Enseignant patient qui utilise des analogies",
            context: "Sujet : Auto-attention du transformateur. Je suis un chef de produit sans expérience en apprentissage profond ; 10 minutes pour comprendre quel problème il résout par rapport à RNN.",
            output: "Analogie simple + 3 idées fausses + 2 questions à choix multiples avec explications",
            tone: "Clair et accessible",
            response: "## Comprendre Transformer avec Feynman\n\n### Une phrase\nTransformer permet au modèle **de voir tous les mots à la fois et de décider sur quoi se concentrer**, en comprenant mieux les phrases longues et les relations distantes.\n\n### Analogie\nRencontre avec 20 intervenants :\n- **RNN** = prendre des notes ligne par ligne : il est facile d'oublier les premiers orateurs.\n- **Transformer (auto-attention)** = tout sur un tableau mural : vous associez le \"budget\" de l'orateur 3 au résumé de clôture.\n\n### Problèmes qu'il résout\n1. **Dépendances à longue portée** : « À cause de la pluie, j'ai annulé le lancement en extérieur à Shanghai » — « pluie » et « annulé » sont très éloignés ; l’attention les relie directement.\n2. **Formation parallèle** : traiter des phrases entières en même temps, plus rapidement que RNN étape par étape, permet de réaliser de grands modèles.\n\n### Idées fausses\n| Mythe | Réalité |\n|------|--------------|\n| Transformer = Traduction uniquement | Architecture générale : les modèles GPT, BERT et multimodaux l'utilisent |\n| Attention = attention humaine | Poids mathématiques par rapport aux autres jetons |\n| Plus de couches = toujours mieux | Les données, la formation et l’adéquation aux tâches sont importantes |\n\n### Quiz\n**Q1** : principal avantage de l'attention personnelle par rapport au RNN ?\nA. Anglais uniquement B. Dépôts longue portée + parallélisme C. Pas d'entraînement D. Pas d'hallucination\n**Réponse : B**\n\n**Q2** : Transformer à lui seul élimine-t-il les hallucinations ?\nA. Oui B. Non : récupération, outils et vérification humaine nécessaires\n**Réponse : B**\n\n---\nRenseignez-vous sur Q/K/V ou sur son rapport avec GPT.",
            followups: [
              {
                user: "Expliquez Q/K/V avec une métaphore d'image",
                ai: "Pensez à la **recherche dans la bibliothèque** :\n\n- **Requête** : quel sujet souhaitez-vous\n- **Clé** : étiquette sur chaque dos du livre\n- **Valeur** : contenu à l'intérieur du livre\n\nLe modèle évalue dans quelle mesure son Q correspond à chaque K, puis lit davantage à partir des valeurs V correspondantes.\n\nAuto-attention = **mélange pondéré de contexte**, pas de magie.\n\n(En pratique, demandez à ChatGPT un diagramme de sirène.)"
              }
            ],
            realGuide: {
              tools: [
                "ChatGPT",
                "Claude",
                "Profond"
              ],
              steps: [
                "Dites qui vous êtes, ce que vous savez, ce que vous voulez comprendre (comme dans ce cas)",
                "Demandez une analogie + un quiz ; répondre immédiatement à l'auto-test",
                "Suivez \"pourquoi pas A?\" sur les mauvaises options",
                "Associez-le aux cartes du module de base de l'IA de ce site"
              ],
              link: {
                label: "Module fondamentaux de l'IA",
                href: "#fundamentals"
              }
            }
          }
        ]
      },
      monetize: {
        categories: {
          "全部": "L'IA conversationnelle à usage général d'OpenAI. GPT-4o prend en charge le texte, l'image et la voix multimodaux. Fort en rédaction, analyse, codage et brainstorming avec un riche écosystème de plugins.",
          "内容创作": "Création de contenu",
          "技术服务": "Services techniques",
          "自动化": "Automation",
          "知识服务": "Services de connaissances",
          "教育培训": "Éducation et formation"
        },
        meta: {
          lead: "Après avoir appris les outils de ce site, vous n'avez pas besoin de devenir un « ingénieur IA » du jour au lendemain. Une voie réaliste : utilisez l'IA pour amplifier vos compétences existantes de 3 à 10 fois en matière de contenu, de conception, d'automatisation, de recherche et de formation (indépendant ou revenus annexes). Les 30 directions ci-dessous utilisent les outils que nous couvrons ; les obstacles sont gérables ; commencez par de petites validations payantes.",
          workTypes: [
            {
              label: "Création de contenu",
              desc: "Articles, courtes vidéos, podcasts : brouillons et visuels d'IA ; vous possédez le sujet et le ton"
            },
            {
              label: "Services techniques",
              desc: "Constructions de robots, scripts, pages de destination : frais basés sur le projet"
            },
            {
              label: "Automation",
              desc: "Intégration du workflow, briefs programmés : maintenance mensuelle ou configuration par exécution"
            },
            {
              label: "Services de connaissances",
              desc: "Mémoires de recherche, packs d'invites, modèles industriels : abonnement ou unique"
            },
            {
              label: "Éducation et formation",
              desc: "Ateliers d'entreprise, coaching communautaire : enseignez aux autres la productivité de l'IA"
            }
          ],
          principles: [
            "Expédiez un dossier de portfolio avant de proposer un devis",
            "Définissez les limites de l'évaluation humaine : ne fournissez pas le résultat brut de l'IA comme final",
            "Validez avec des amis/petits concerts avant de passer aux plates-formes",
            "Chaînez 2 à 3 outils dans un pipeline : cela vaut plus que l'utilisation d'un seul outil"
          ]
        },
        ui: {
          deliverables: "Livrables :",
          monetize: "Monétisation :",
          channels: "Canaux clients :",
          note: "Note:",
          difficulty: {
            "入门": "Débutant",
            "进阶": "Intermédiaire",
            "高级": "Avancé"
          }
        },
        projects: [
          {
            title: "Gestion de la matrice de contenu social",
            category: "Création de contenu",
            difficulty: "Débutant",
            income: "280 à 1 100 $/mois",
            desc: "Maintenir WeChat/Xiaohongshu/Douyin pour les entreprises locales, les créateurs ou les petites marques : sujets par lots d'IA, copies, couvertures et scripts vidéo ; vous gérez la cadence et les analyses.",
            deliverables: "3 à 5 publications/semaine + 2 scripts vidéo + pack d'actifs de couverture",
            monetize: "Acompte mensuel (210 à 700 $/compte) ; ou par pièce (12 à 28 $ par article, 22 à 55 $ par script)",
            channels: "Concerts de Xiaohongshu, marchés, références, sensibilisation locale",
            steps: [
              "Choisissez un ensemble de contenus verticaux (alimentation, éducation, beauté) et de démonstration",
              "Calendrier thématique ChatGPT sur 7 jours ; Midjourney/Kling pour les visuels",
              "Essai à bas prix le premier mois pour attirer le premier client",
              "Utilisez des captures d'écran lues/abonnées comme études de cas pour augmenter les tarifs"
            ],
            tip: "Convenez dès le départ des cycles de révision et de l’originalité ; les industries sensibles nécessitent un examen final humain."
          },
          {
            title: "Bot de support de base de connaissances d'entreprise",
            category: "Services techniques",
            difficulty: "Intermédiaire",
            income: "420 à 2 800 $/projet",
            desc: "Transformez les manuels de produits, les FAQ et les documents internes en robots conversationnels sur le Web, Feishu ou WeChat – éliminez le support répétitif.",
            deliverables: "Curation des connaissances + Flux de robots + Guide d'administration + Go-live",
            monetize: "Mise en œuvre unique ; maintenance annuelle facultative (70 à 280 $/mois)",
            channels: "Groupes B2B, écosystème Feishu, plateformes indépendantes, références de la communauté de développement",
            steps: [
              "NotebookLM organise les fichiers PDF des clients en paires de questions-réponses",
              "Construisez RAG dans Dify ou Coze ; taux de réussite des tests",
              "Vidéo de démonstration de 3 minutes comme atout commercial",
              "Premier client à moitié prix pour étude de cas + témoignage"
            ],
            tip: "Contrat : propriété des données et cadence de mise à jour ; réponses intitulées « à titre de référence uniquement »."
          },
          {
            title: "Externalisation de la conception visuelle e-commerce",
            category: "Création de contenu",
            difficulty: "Débutant",
            income: "420 à 2 100 $/mois",
            desc: "Images principales, pages de détails, affiches promotionnelles, présentations simples pour les vendeurs du marché : images IA rapides ; vous gérez le ton de la marque et les communications avec les clients.",
            deliverables: "5 images principales/ensemble, tranches détaillées, affiche promotionnelle, deck en option",
            monetize: "Ensemble d'images principal de 28 à 110 $ ; page de détail 70-280 $ ; précipitation +30%",
            channels: "Services Taobao, places de marché, comptes de conception, groupes de vendeurs",
            steps: [
              "Modèles d'invites à mi-parcours/flux pour la vitesse",
              "Modèles d'invites à mi-parcours/flux pour la vitesse",
              "\"Première ébauche 24h\" comme argument de vente",
              "Vendre un service visuel mensuel aux clients réguliers"
            ],
            tip: "Confirmer la licence du modèle avant toute utilisation commerciale ; ne nourrissez pas de logos sans licence."
          },
          {
            title: "140 à 1 400 $/mois",
            category: "Services de connaissances",
            difficulty: "Débutant",
            income: "140 à 1 400 $/mois",
            desc: "Regroupez les expériences juridiques, RH, e-commerce ou edtech sous forme de modèles copier-coller avec des guides et des exemples avant/après.",
            deliverables: "20 à 50 invites structurées + notes de scénario + démarrage rapide d'une page",
            monetize: "Newsletter/communauté (4 à 28 $/pack) ; licence groupée d'entreprise (70 $ et plus)",
            channels: "Xiaohongshu, newsletters, applications sociales, groupes WeChat industriels",
            steps: [
              "Plongez en profondeur dans un secteur que vous connaissez : 10 scénarios à haute fréquence",
              "Valider dans un laboratoire rapide ; comparaisons de captures d'écran",
              "Page de vente Gamma de 10 pages",
              "Les modèles sont des points de départ ; inclure une liste de contrôle d’examen humain."
            ],
            tip: "Les modèles sont des points de départ ; inclure une liste de contrôle d’examen humain."
          },
          {
            title: "Intégration de l'automatisation du flux de travail IA",
            category: "Automation",
            difficulty: "Intermédiaire",
            income: "700 à 4 200 $/projet",
            desc: "Connectez des outils dispersés : prospects par e-mail → feuille de calcul → résumé de l'IA → Slack/Feishu → cumul hebdomadaire : moins de copier-coller.",
            deliverables: "Diagramme de flux + workflow n8n/OpenClaw + alertes + runbook",
            monetize: "Implémentation par complexité de nœud ; entretien 110-420 $/mois",
            channels: "Externalisation informatique, communautés SaaS, LinkedIn, renouvellements",
            steps: [
              "Démo d'un scénario universel (rapport quotidien des ventes, veille des concurrents)",
              "n8n : boucle minimale Gmail/sheets/Slack",
              "OpenClaw pour les briefs programmés",
              "Pilote d'une semaine avant le paiement intégral"
            ],
            tip: "Le client détient des informations d'identification ; journaux pour l’audit et le débogage."
          },
          {
            title: "Production de courtes vidéos doublées par l'IA",
            category: "Création de contenu",
            difficulty: "Débutant",
            income: "14 à 110 $/vidéo",
            desc: "Courts métrages de voix off pour les créateurs, les entreprises locales, les formations : clone ou TTS, visuels IA et BGM ; vous éditez le rythme et les sous-titres.",
            deliverables: "Par vidéo ; 10 vidéos par mois (280 à 840 $) ; frais d'installation du clone en sus",
            monetize: "Par vidéo ; 10 vidéos par mois (280 à 840 $) ; frais d'installation du clone en sus",
            channels: "Un échantillon complet de Fish Audio/ElevenLabs en vitrine",
            steps: [
              "Un échantillon complet de Fish Audio/ElevenLabs en vitrine",
              "Modèle de script standard (hook-pain-solution-CTA)",
              "Kling/Runway B-roll pour réduire les coûts de tournage en direct",
              "Fiche tarifaire de livraison sous 3 jours publiée"
            ],
            tip: "Cloner uniquement les voix autorisées ; étiquetez le contenu de l'IA selon les règles de la plate-forme."
          },
          {
            title: "Abonnement aux brèves de recherche industrielle",
            category: "Services de connaissances",
            difficulty: "Intermédiaire",
            income: "14 à 70 $/mois par abonné",
            desc: "Briefs hebdomadaires pour les investisseurs, les PM, les opérations : lancements de concurrents, politique, financement ; L'IA rassemble, vous organisez et commentez.",
            deliverables: "PDF/e-mail hebdomadaire (3 000 à 5 000 mots) + tableau de données + liens sources",
            monetize: "Sous individuel ; sièges d'équipe (5+); rapports approfondis personnalisés (280 $+)",
            channels: "Communautés payantes, newsletters, groupes privés, push OpenClaw",
            steps: [
              "Choisissez une niche (outils d'IA, commerce électronique transfrontalier) ; 4 numéros gratuits",
              "Perplexité/Metaso se rassemblent ; Résumé croisé NotebookLM",
              "Draft OpenClaw du lundi, vous peaufinez mardi",
              "100 abonnements → tarification groupe d'entreprises"
            ],
            tip: "Citer toutes les réclamations ; clause de non-responsabilité – pas de conseil en investissement ou juridique."
          },
          {
            title: "Page de destination MVP, livraison rapide",
            category: "Services techniques",
            difficulty: "Débutant",
            income: "420 à 1 680 $/projet",
            desc: "Les entrepreneurs/PM obtiennent une page de destination de démonstration ou un MVP Light Web en 1 à 3 jours, pour la collecte de fonds, la validation ou l'inscription bêta.",
            deliverables: "Atterrissage réactif + capture de formulaire + référencement de base + lien de déploiement",
            monetize: "Page standard à partir de 420 $ ; backend simple/paiement supplémentaire ; 48h de pointe +50%",
            channels: "Communautés de fondateurs, cercle chinois PH, références, groupes de développement indépendants",
            steps: [
              "Bolt.new squelette, Curseur polonais UX",
              "2 études de cas de style (SaaS / marque grand public)",
              "Fiche de devis : tournées de révision et hébergement",
              "Le domaine et les comptes appartiennent au client ; test mobile + formulaire avant lancement."
            ],
            tip: "Traitement des données et personnalisation des scripts"
          },
          {
            title: "Traitement des données et personnalisation des scripts",
            category: "Services techniques",
            difficulty: "Intermédiaire",
            income: "140 à 2 100 $/projet",
            desc: "Utilitaires Python/JS pour les opérations, la finance, le marketing (nettoyage Excel, renommage par lots, grattages légers, rapports automatiques) pour les non-codeurs ayant un travail répétitif.",
            deliverables: "Script exécutable + README + une procédure pas à pas en ligne",
            monetize: "Horaire ou fixe ; Acompte de 30% sur périmètre complexe",
            channels: "Plateformes freelance, communautés de travail à distance, externalisation WeChat, référencements",
            steps: [
              "Deux démos de fusion/déduplication Excel dans le portefeuille",
              "Cursor/Aider livraison rapide avec commentaires",
              "Devis ponctuel et maintenance séparément",
              "Livrer la source ; apprendre au client à exécuter - moins de support"
            ],
            tip: "Confirmer la légalité du grattoir ; ne conservez pas les données client dans votre cloud."
          },
          {
            title: "Formation et coaching en IA en entreprise",
            category: "Éducation et formation",
            difficulty: "Intermédiaire",
            income: "Équipes non techniques (marketing, administration, ventes) : sélection d'outils, invites, scénarios de bureau ; Coaching WeChat facultatif de 30 jours.",
            desc: "Équipes non techniques (marketing, administration, ventes) : sélection d'outils, invites, scénarios de bureau ; Coaching WeChat facultatif de 30 jours.",
            deliverables: "Atelier 2–4h + cahier de scénarios + devoirs + coaching en option",
            monetize: "Entreprise par séance ; petits groupes (28 à 84 $/personne) ; forfait annuel du conseiller",
            channels: "Contacts RH, courtiers en formation, bouche à oreille, références d'anciens",
            steps: [
              "Condenser le parcours de 7 jours du site en une demi-journée intensive",
              "diapositives gamma ; démo en direct 3 scénarios de rôle",
              "Recueillir des études de cas de satisfaction et d’efficacité",
              "Premier client corp : coaching d'un mois gratuit pour les droits des dossiers"
            ],
            tip: "Mettez l’accent sur la conformité et la sécurité : aucune donnée confidentielle dans les modèles de cloud public."
          },
          {
            title: "Copie de la liste de commerce électronique transfrontalier",
            category: "Création de contenu",
            difficulty: "Débutant",
            income: "11 à 42 $/annonce",
            desc: "Titres Amazon, Shopee, Temu, puces, copie A+ en anglais/multilingue avec optimisation des termes de recherche.",
            deliverables: "Titre + puces + feuille de mots-clés + versions ES/JA facultatives",
            monetize: "Par SKU ; forfait magasin (50+); pointe de haute saison +30%",
            channels: "3 listes de référence dans une catégorie familière",
            steps: [
              "3 listes de référence dans une catégorie familière",
              "Perplexité concernant les termes de recherche sur le marché et la copie des concurrents",
              "Claude vernis multilingue; l'homme vérifie les tabous culturels",
              "\"Pack de lancement 7 jours\" pour les petits vendeurs"
            ],
            tip: "Pas de fausses déclarations ni d'abus de marque ; éviter les catégories interdites."
          },
          {
            title: "Externalisation de la production de podcasts IA",
            category: "Création de contenu",
            difficulty: "Débutant",
            income: "42 à 210 $/épisode",
            desc: "Transformez de longs articles ou notes d'interview en podcast : script IA, musique d'introduction, voix off ; vous éditez et guidez la distribution.",
            deliverables: "15 à 30 minutes audio + notes de l'émission + couverture + guide de distribution",
            monetize: "Par épisode ; Remise sur la saison de 10 épisodes ; introduction personnalisée supplémentaire",
            channels: "Communautés d'accueil de podcasts, propriétaires de communautés de connaissances, équipes de marque",
            steps: [
              "Article NotebookLM → script de dialogue",
              "Introduction à Suno ; Voix ElevenLabs/Fish Audio",
              "Un échantillon complet sur la plateforme de podcast",
              "Abonnement mensuel de 2 épisodes pour la rétention"
            ],
            tip: "Confirmer les droits commerciaux de la musique et de la voix ; client final sur les avis."
          },
          {
            title: "Service de livre audio/narration de cours",
            category: "Création de contenu",
            difficulty: "Débutant",
            income: "2 à 6 $ pour 1 000 mots",
            desc: "Les auteurs et les formateurs convertissent des ebooks, des conférences et des manuels en audio professionnel : multi-voix, vitesse, divisions de chapitres.",
            deliverables: "MP3 du chapitre + timeline + intro/outro + couverture simple",
            monetize: "Par mot/durée ; forfait livre complet; réduction à long terme",
            channels: "Communautés d'auteurs, plateformes d'écriture, organismes de formation, administrateurs d'entreprise",
            steps: [
              "Chapitre du domaine public comme échantillon vocal",
              "Fish Audio pour le chinois ; ElevenLabs pour l’anglais",
              "Fish Audio pour le chinois ; ElevenLabs pour l’anglais",
              "Contrat : cycles de révision et délais d'exécution (~ 3 à 5 jours/10 000 mots)"
            ],
            tip: "Contenu protégé par le droit d'auteur uniquement avec droits ; Le clonage vocal nécessite un consentement écrit."
          },
          {
            title: "14 à 70 $/CV",
            category: "Services de connaissances",
            difficulty: "Débutant",
            income: "14 à 70 $/CV",
            desc: "Optimisez les CV EN/CN, les présentations de portfolio, les questions-réponses des entretiens avec JD cible avec les histoires STAR.",
            deliverables: "1 à 2 versions de CV + lettre de motivation + 10 simulations d'entretien de questions et réponses",
            monetize: "Vernis de base 14 $ ; avancé avec entretien simulé 42 à 70 $ ; Module complémentaire LinkedIn",
            channels: "Influenceurs en recherche d'emploi, groupes de carrière sur les campus, marchés, forums",
            steps: [
              "5 cas anonymisés avant/après (avec autorisation)",
              "Mots-clés Perplexité entreprise/rôle",
              "Vernissage narratif de Claude ; garder une expérience véridique",
              "\"Révisions de satisfaction sur 7 jours\" pour réduire les frictions"
            ],
            tip: "Ne fabriquez jamais d’informations d’identification ; aucun résultat professionnel garanti."
          },
          {
            title: "Aide à la rédaction de contrats et de documents juridiques",
            category: "Services de connaissances",
            difficulty: "Intermédiaire",
            income: "42 à 280 $/document",
            desc: "Projet Word + notes de clause + liste de contrôle des risques (pas d'avis juridique)",
            deliverables: "Contrat standard 42-110 $ ; personnalisé par complexité",
            monetize: "Contrat standard 42-110 $ ; personnalisé par complexité",
            channels: "Groupes fondateurs, références en comptabilité, partenaires de plateforme juridique",
            steps: [
              "Bibliothèque de 10 modèles courants (idéal révisé par un avocat)",
              "Historique client NotebookLM + contrats de référence",
              "Brouillon avec clause de non-responsabilité « nécessite un examen par un avocat »",
              "Boucle de référence mutuelle avec les cabinets d’avocats locaux"
            ],
            tip: "Pas de conseils juridiques ; pas de litige ni d'opérations d'équité."
          },
          {
            title: "Rapport sur la stratégie de contenu des concurrents et du référencement",
            category: "Services de connaissances",
            difficulty: "Intermédiaire",
            income: "110 à 700 $/rapport",
            desc: "Analyse matricielle de contenu, opportunités de mots clés, calendrier de 90 jours pour les marques et les opérateurs de sites indépendants.",
            deliverables: "Rapport de 20 à 40 pages + feuille de mots-clés + calendrier thématique de 90 jours",
            monetize: "Rapport standard sur les concurrents à partir de 110 $ ; SEO approfondi 280 $+",
            channels: "Agences de marketing, vendeurs indépendants, prospects marketing B2B",
            steps: [
              "Un échantillon complet dans un secteur familier",
              "Concurrent Metaso/Perplexity et tendances de recherche",
              "Manus pour les longues listes ; la perspicacité humaine dans les conclusions",
              "20 % de remise de renouvellement sur les rapports trimestriels"
            ],
            tip: "Personnalisation du plan d'étude de préparation aux examens"
          },
          {
            title: "Personnalisation du plan d'étude de préparation aux examens",
            category: "Services de connaissances",
            difficulty: "Débutant",
            income: "28 à 125 $/forfait",
            desc: "Plans d'étude personnalisés, tâches quotidiennes, modèles d'erreurs, fiches d'objectifs, référence et calendrier, avec porte d'expertise en matière de sujet.",
            deliverables: "Plan par étapes + tâches quotidiennes + index des ressources + calendrier des examens blancs",
            monetize: "Forfait unique à partir de 28 $ ; Coaching questions-réponses de 4 semaines 84-125 $",
            channels: "Forums d'examen, comptes d'éducation, partenaires de formation",
            steps: [
              "Plan de référence pour un examen que vous connaissez (anglais/CPA/certificat d'enseignement)",
              "Programme de résumé de NotebookLM et articles antérieurs",
              "Manuel du plan visuel Gamma",
              "Poussez fort 3 mois avant la saison des examens"
            ],
            tip: "Aucune question divulguée ou illégale ; mettre à jour les plans lorsque les programmes changent."
          },
          {
            title: "Base de connaissances personnelle \"second cerveau\"",
            category: "Services de connaissances",
            difficulty: "Intermédiaire",
            income: "210 à 1 120 $/projet",
            desc: "Organisez des documents, des signets et des notes dispersés dans une base de connaissances consultable et conversationnelle pour des individus ou de petites équipes.",
            deliverables: "Architecture KB + import/nettoyage + configuration recherche/chat + formation",
            monetize: "Personnel 210-420 $ ; prix de l'équipe par siège",
            channels: "Communautés de productivité, cercles de notions, blogueurs PKM",
            steps: [
              "Bibliothèque de démonstration montrant la taxonomie et le chat",
              "Résumés de lots Notion AI ; Modifier les questions et réponses externes",
              "Enregistrement d'intégration d'une heure",
              "Maintenance mensuelle facultative du contenu"
            ],
            tip: "Notes sensibles locales d'abord ; cloud sur les comptes appartenant aux clients."
          },
          {
            title: "Optimisation des README et des documents open source",
            category: "Services techniques",
            difficulty: "Débutant",
            income: "70 à 420 $/projet",
            desc: "README + CONTRIBUTION + documentation API de base + exemples",
            deliverables: "README + CONTRIBUTION + documentation API de base + exemples",
            monetize: "README de base à partir de 70 $ ; ensemble de documentation complet 280 $+",
            channels: "Communauté GitHub, forums de développement, Twitter, fondations",
            steps: [
              "Deux exemples de documents de style open source",
              "Le curseur lit le code pour des documents API précis",
              "Bilingue +30%",
              "Post d'aide Afficher les articles HN/dev après la livraison"
            ],
            tip: "Les documents doivent suivre la version du code ; pas de faux services étoiles."
          },
          {
            title: "Centre d'aide SaaS et création du journal des modifications",
            category: "Services techniques",
            difficulty: "Intermédiaire",
            income: "420 à 2 100 $/projet",
            desc: "Site de documentation d'aide, FAQ Bot, processus de journal des modifications pour les petits SaaS : charge de support inférieure, résolution libre-service plus élevée.",
            deliverables: "Structure d'aide + 20 à 50 articles + FAQ Bot + modèle de journal des modifications",
            monetize: "Version initiale + mises à jour mensuelles de 70 à 210 $",
            channels: "Groupes fondateurs SaaS, Indie Hackers CN, Product Hunt",
            steps: [
              "Centre d'aide complet sur la démo SaaS",
              "Brouillons d'API de curseur à partir de commentaires de code",
              "Brouillons d'API de curseur à partir de commentaires de code",
              "Nombre d'articles mensuels du contrat"
            ],
            tip: "Documents versionnés avec le produit ; les principales fonctionnalités nécessitent l’approbation du client."
          },
          {
            title: "Actualisation de l'IA de WordPress/site d'entreprise",
            category: "Services techniques",
            difficulty: "Intermédiaire",
            income: "280 à 1 400 $/actualisation",
            desc: "Plan d'actualisation + nouvelle copie + ajustements du thème + corrections de bugs pendant 30 jours",
            deliverables: "Plan d'actualisation + nouvelle copie + ajustements du thème + corrections de bugs pendant 30 jours",
            monetize: "Actualisation unique ; entretien annuel 170-500 $",
            channels: "Deux cas de rafraîchissement avant/après",
            steps: [
              "Deux cas de rafraîchissement avant/après",
              "Blocs prototypes Bolt.new pour approbation du client",
              "Modifications du thème du curseur ; Copie SEO par lots ChatGPT",
              "SLA de maintenance : mises à jour et temps de réponse"
            ],
            tip: "Propriété du client ICP/domaine ; sauvegarde complète avant actualisation."
          },
          {
            title: "Intégration de fonctionnalités d'IA en marque blanche",
            category: "Services techniques",
            difficulty: "Intermédiaire",
            income: "1 120 à 7 000 $/projet",
            desc: "Intégrez une assistance intelligente, des questions-réponses sur des documents ou la génération de contenu dans une application/un site existant via l'API ou Dify (marque du client au premier plan).",
            deliverables: "Exigences + intégration API + configuration administrateur + prise en charge du lancement",
            monetize: "Par module de fonctionnalités ; Coût de l'API payé par le client ou répercuté",
            channels: "Site de démonstration affichant l'intégration",
            steps: [
              "Site de démonstration affichant l'intégration",
              "API DeepSeek pour le coût ; Difier pour RAG",
              "Livrer les sources et déployer les documents",
              "Support annuel de vente incitative après le premier projet"
            ],
            tip: "Résidence des données et confidentialité dans le contrat ; pas de clés dans votre dépôt."
          },
          {
            title: "210 à 840 $/mois",
            category: "Automation",
            difficulty: "Débutant",
            income: "210 à 840 $/mois",
            desc: "Bibliothèque de scripts + configuration du bot + règles de ticket + modèle de rapport hebdomadaire",
            deliverables: "Bibliothèque de scripts + configuration du bot + règles de ticket + modèle de rapport hebdomadaire",
            monetize: "Configuration 210 à 420 $ ; entretien 42-110 $/mois",
            channels: "Fournisseurs de services Marketplace, groupes de vendeurs, externalisation CS",
            steps: [
              "Bibliothèque de questions et réponses TOP 50 après-vente",
              "Coze sur les chaînes WeCom/Feishu",
              "Transmettre les différends complexes aux humains ; ne promettez pas de remboursement au nom du client.",
              "Vente incitative de mise à jour du script en haute saison"
            ],
            tip: "Transmettre les différends complexes aux humains ; ne promettez pas de remboursement au nom du client."
          },
          {
            title: "Recrutement de JD et agent de sélection de CV",
            category: "Automation",
            difficulty: "Intermédiaire",
            income: "Rédigez des JD, des questions d'entretien, un écran de CV et un résumé pour l'agent en premier : gagnez environ 70 % de temps de sélection.",
            desc: "Rédigez des JD, des questions d'entretien, un écran de CV et un résumé pour l'agent en premier : gagnez environ 70 % de temps de sélection.",
            deliverables: "JD + modèle de compétences + règles de sélection + fiche récapitulative du candidat",
            monetize: "Par rôle ; forfait annuel de 10 rôles ; partage des revenus du recruteur",
            channels: "Communautés RH, chasseurs de têtes, groupes de PDG de startups",
            steps: [
              "Manus lit des CV PDF en résumés structurés",
              "Manus lit des CV PDF en résumés structurés",
              "Biais des examens humains et risques pour la vie privée",
              "Traitement des données conforme à PIPL dans le contrat"
            ],
            tip: "Le score AI est uniquement informatif ; la décision d'embauche appartient au client ; anonymiser le stockage."
          },
          {
            title: "Pipeline d’archivage intelligent des factures/contrats",
            category: "Automation",
            difficulty: "Intermédiaire",
            income: "560 à 2 520 $/projet",
            desc: "Entrée par e-mail/WeChat → OCR → catégoriser → alertes d'exception pour les finances/l'administration — moins de saisie manuelle.",
            deliverables: "Conception de processus + workflow n8n + règles de classification + manuel",
            monetize: "Mise en œuvre unique ; surveillance 84 à 280 $/mois",
            channels: "Entreprises de tenue de livres, sous-traitance administrative, implémenteurs de logiciels financiers",
            steps: [
              "POC sur factures + contrats",
              "Règles de validation de l'extraction du champ Claude",
              "OpenClaw a programmé un résumé des exceptions pour financer",
              "Données financières sur site ou dans le cloud privé du client : il ne s'agit pas d'un service de comptabilité complet."
            ],
            tip: "Données financières sur site ou dans le cloud privé du client : il ne s'agit pas d'un service de comptabilité complet."
          },
          {
            title: "Planification sociale multiplateforme et surveillance des sentiments",
            category: "Automation",
            difficulty: "Intermédiaire",
            income: "280 à 1 120 $/mois",
            desc: "Calendrier de publication + configuration de distribution automatique + briefing quotidien + alertes",
            deliverables: "Calendrier de publication + configuration de distribution automatique + briefing quotidien + alertes",
            monetize: "À partir de 280 $/mois ; supplément par plateforme ; paquet de réponse à la crise en supplément",
            channels: "Marketing de marque, agences de relations publiques, équipes opérationnelles MCN",
            steps: [
              "Sentiment quotidien d'OpenClaw Cron envers Feishu",
              "CMS n8n et API sociales lorsqu'ils sont conformes",
              "Grok pour X mentions en temps réel",
              "Pilote gratuit du premier mois pour les droits des dossiers"
            ],
            tip: "Suivre les règles API/automatisation de la plateforme ; jugement humain sur les sentiments négatifs."
          },
          {
            title: "Coaching individuel en matière de compétences en IA sur le lieu de travail",
            category: "Éducation et formation",
            difficulty: "Débutant",
            income: "28 à 70 $/heure",
            desc: "Diagnostic préalable à l'appel + 4 à 8 séances en direct/voix + révision des devoirs + liste de contrôle des outils",
            deliverables: "Diagnostic préalable à l'appel + 4 à 8 séances en direct/voix + révision des devoirs + liste de contrôle des outils",
            monetize: "Horaire ; paquet de 4 210 $ ; Paquet de 8 390 $",
            channels: "Applications sociales, communautés, références d'anciens élèves, introductions RH",
            steps: [
              "Trois packages standards (admin/marketing/dev intro)",
              "Chaque session utilise la tâche réelle du client",
              "Résumés des enregistrements d'écran pour examen",
              "Diplôme \"Liste de contrôle des capacités de l'IA\" pour la crédibilité"
            ],
            tip: "Aucune garantie de promotion ; confirmer la ligne de base et les objectifs avant l'appel."
          },
          {
            title: "Camp d'innovation pour les jeunes en IA",
            category: "Éducation et formation",
            difficulty: "Intermédiaire",
            income: "420 à 2 100 $/séance",
            desc: "Des camps d'une demi-journée à 2 jours pour les organisations de formation (chat bot, art IA, simple page de jeu) suscitent l'intérêt, pas une CS approfondie.",
            deliverables: "Plan de cours + matériel sur place + page de présentation des étudiants + soutien de l'instructeur",
            monetize: "Rachat d'institutions ; par étudiant : 11 à 28 $ ; matériaux en sus",
            channels: "Flux standard « Projet livrable en 2 heures »",
            steps: [
              "Flux standard « Projet livrable en 2 heures »",
              "Bolt.nouvelle page Web partageable sans code",
              "Module de dessin créatif à mi-parcours",
              "Session d'information pour les parents pour conclure des affaires"
            ],
            tip: "Protection mineure de la vie privée ; contenu sain; suivre la politique éducative locale."
          },
          {
            title: "7 à 28 $/personne/séance",
            category: "Éducation et formation",
            difficulty: "Débutant",
            income: "7 à 28 $/personne/séance",
            desc: "Centres communautaires pour personnes âgées : chat avec assistant vocal, restauration de photos par IA, sensibilisation aux escroqueries ; bases gratuites, avancées payantes.",
            deliverables: "Cours hors ligne de 2 heures + manuel en gros caractères + questions-réponses WeChat de 7 jours",
            monetize: "Subventions communautaires + avances volontaires de redevances ; mécénat RSE d'entreprise",
            channels: "Communautés de rue, universités supérieures, agences bancaires partenaires",
            steps: [
              "Manuel illustré étape par étape extra-large",
              "Prise en charge de la voix et du dialecte Doubao/Qwen",
              "Essai gratuit pour l'approbation de la communauté",
              "Avancé : restauration d'albums IA et planification de voyage"
            ],
            tip: "Rythme lent ; insistez sur aucun transfert, aucun code de vérification."
          },
          {
            title: "Cours en petit groupe sur le workflow Designer IA",
            category: "Éducation et formation",
            difficulty: "Intermédiaire",
            income: "210 à 560 $/cohorte",
            desc: "Cohorte de 4 semaines pour les graphistes/concepteurs d'interface utilisateur : génération d'IA, contrôle, retouche, intégration de flux de travail ; sortie de qualité portefeuille.",
            deliverables: "4 sessions en direct + critiques + bibliothèque d'invites + leçon de licence commerciale",
            monetize: "Programme de 4 semaines : concept → commercial → mouvement → portfolio",
            steps: [
              "Programme de 4 semaines : concept → commercial → mouvement → portfolio",
              "Cas industriels Flux/MJ (beauté/3C)",
              "Les meilleurs étudiants référés aux chaînes de concerts",
              "Les meilleurs étudiants référés aux chaînes de concerts"
            ],
            tip: "Clarifier la licence commerciale ; encourager l’étiquetage du travail assisté par l’IA."
          }
        ]
      }
  });
})();
