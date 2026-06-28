/* FR overlays — quiz */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('fr', {
    quiz: [
        {
          q: "IA ⊃ ML ⊃ DL",
          options: [
            "Complètement indépendant et sans lien de parenté",
            "IA ⊃ ML ⊃ DL",
            "DL ⊂ ML ⊂ AI",
            "Intelligence Artificielle ⊃ Machine Learning ⊃ Deep Learning : de gauche à droite (AI → ML → DL), le champ d’application se rétrécit."
          ],
          answer: 1,
          explain: "Intelligence Artificielle ⊃ Machine Learning ⊃ Deep Learning : de gauche à droite (AI → ML → DL), le champ d’application se rétrécit."
        },
        {
          q: "Reconnaître les images",
          options: [
            "Reconnaître les images",
            "Prédire le prochain jeton",
            "Stockage de chaque page Web",
            "Stockage de chaque page Web"
          ],
          answer: 1,
          explain: "Grâce au simple objectif de prédire le prochain jeton sur un texte massif, les LLM apprennent la compréhension et la génération du langage."
        },
        {
          q: "Que signifie hallucination ?",
          options: [
            "L'IA refuse de répondre",
            "Le système fonctionne plus lentement",
            "Générer en toute confiance du contenu incorrect",
            "Il ne peut gérer que du contenu fictif"
          ],
          answer: 2,
          explain: "L’hallucination est une limitation connue du LLM – courante mais factuellement erronée. Vérifiez toujours les informations critiques."
        },
        {
          q: "Quelle est l’innovation principale du Transformer ?",
          options: [
            "Convolution CNN",
            "Attention personnelle",
            "Récidive RNN",
            "Arbres de décision"
          ],
          answer: 1,
          explain: "L'auto-attention permet au modèle de s'occuper de toutes les positions de la séquence d'entrée en même temps, ce qui constitue le fondement du GPT et des autres LLM."
        },
        {
          q: "Que fait RAG (Retrieval-Augmented Generation) ?",
          options: [
            "Accélérer la formation",
            "Réduire le nombre de paramètres",
            "Combiner une base de connaissances pour réduire les hallucinations",
            "RAG récupère d'abord les sources externes, puis génère des réponses, réduisant ainsi considérablement les réponses inventées."
          ],
          answer: 2,
          explain: "RAG récupère d'abord les sources externes, puis génère des réponses, réduisant ainsi considérablement les réponses inventées."
        },
        {
          q: "Quelle est la manière la plus efficace d’écrire des invites ?",
          options: [
            "Plus c'est court, mieux c'est",
            "Écrivez simplement \"aidez-moi à écrire un article\"",
            "Utilisez beaucoup d'émojis",
            "Utilisez beaucoup d'émojis"
          ],
          answer: 2,
          explain: "Les invites structurées améliorent considérablement la qualité de la sortie."
        },
        {
          q: "Parmi les éléments suivants, lequel est une application GenAI (IA générative) ?",
          options: [
            "Filtrage anti-spam",
            "Reconnaissance faciale",
            "Génération d'images à mi-parcours",
            "Détection de fraude"
          ],
          answer: 2,
          explain: "GenAI crée du nouveau contenu ; le filtrage du spam et la détection des fraudes sont des IA discriminantes."
        },
        {
          q: "Qu'est-ce qu'un jeton ?",
          options: [
            "Un nom d'utilisateur",
            "L'unité de base du traitement de texte",
            "Une cryptomonnaie",
            "Un numéro de version"
          ],
          answer: 1,
          explain: "Un jeton est la plus petite unité utilisée par les modèles pour traiter le texte ; les fenêtres contextuelles sont mesurées en nombre de jetons."
        },
        {
          q: "C'est plus drôle",
          options: [
            "C'est plus drôle",
            "Il peut planifier de manière autonome et appeler des outils pour accomplir des tâches",
            "Il ne peut répondre que oui/non",
            "Il n'a pas besoin d'Internet"
          ],
          answer: 1,
          explain: "Les agents peuvent décomposer les tâches, appeler des outils et exécuter des opérations en plusieurs étapes."
        },
        {
          q: "Une méthode de formation rapide",
          options: [
            "Une méthode de formation rapide",
            "Apprentissage par renforcement à partir de la rétroaction humaine : optimisation des résultats en fonction des préférences humaines",
            "Une technique de génération d'images",
            "Un algorithme de compression de données"
          ],
          answer: 1,
          explain: "RLHF a rendu ChatGPT plus convivial et plus sûr que le GPT-3 brut."
        },
        {
          q: "Comment CoT (Chain of Thought) améliore-t-il les performances de l’IA ?",
          options: [
            "Accélère l'inférence",
            "Permet à l'IA de montrer son raisonnement étape par étape",
            "Réduit l'utilisation des jetons",
            "Augmente les paramètres du modèle"
          ],
          answer: 1,
          explain: "Les invites de chaîne de pensée permettent au modèle d'afficher les étapes de raisonnement, améliorant considérablement la précision des tâches logiques complexes."
        },
        {
          q: "À quoi sert principalement la LoRA (Low-Rank Adaptation) ?",
          options: [
            "Génération d'images",
            "Mise au point efficace des grands modèles",
            "Étiquetage des données",
            "Déploiement du modèle"
          ],
          answer: 1,
          explain: "LoRA n'entraîne qu'un petit ensemble de paramètres supplémentaires pour s'adapter à des tâches spécifiques à très faible coût."
        },
        {
          q: "Uniquement la traduction automatique",
          options: [
            "Uniquement la traduction automatique",
            "Traduction, résumé, questions-réponses, analyse des sentiments, etc.",
            "Uniquement la reconnaissance vocale",
            "Génération de texte uniquement"
          ],
          answer: 1,
          explain: "La PNL couvre toutes les techniques permettant aux ordinateurs de traiter le langage humain."
        },
        {
          q: "Quel est le rôle principal des GPU dans l’IA ?",
          options: [
            "Calcul parallèle pour accélérer la formation et l'inférence",
            "Calcul parallèle pour accélérer la formation et l'inférence",
            "Communication réseau",
            "Afficher des images"
          ],
          answer: 1,
          explain: "Le calcul parallèle GPU en fait un matériel essentiel pour la formation et l’inférence de l’IA."
        },
        {
          q: "Quelle est la meilleure façon pour les débutants de commencer à utiliser l’IA ?",
          options: [
            "Maîtrisez d'abord tous les mathématiques",
            "Essayez-le directement avec de vrais problèmes",
            "Attendez que l'IA soit complètement mature",
            "Attendez que l'IA soit complètement mature"
          ],
          answer: 1,
          explain: "L’apprentissage par la pratique fonctionne mieux : essayez de vraies tâches et comprenez les principes par la pratique."
        },
        {
          q: "Quelle est la principale différence entre l'AGI et l'ANI déployé aujourd'hui ?",
          options: [
            "AGI ne peut gérer que le langage",
            "ANI peut gérer n’importe quelle tâche intellectuelle",
            "L'AGI n'est pas encore atteint ; ANI n'effectue que des tâches spécifiques",
            "Ce sont exactement les mêmes"
          ],
          answer: 2,
          explain: "Aujourd’hui, toute l’IA commerciale est ANI (IA étroite) ; L’AGI (intelligence générale artificielle) reste un objectif de recherche à long terme."
        },
        {
          q: "Quels éléments une invite structurée doit-elle généralement inclure ?",
          options: [
            "Une seule ligne : \"aide-moi à écrire\"",
            "Rôle + tâche + contexte + format + contraintes",
            "Plus c'est court, mieux c'est",
            "Émojis uniquement"
          ],
          answer: 1,
          explain: "L'ingénierie rapide du jour 4 de ce site : les cinq éléments réunis améliorent considérablement la qualité et la réutilisabilité des résultats."
        },
        {
          q: "A quoi sert le paramètre température ?",
          options: [
            "Accélère l'inférence",
            "Contrôle le caractère aléatoire de la sortie : faible = plus stable, élevé = plus créatif",
            "Augmente la longueur du contexte",
            "Réduit l'utilisation des jetons"
          ],
          answer: 1,
          explain: "Utilisez une température basse pour le code (par exemple 0,1) et une température plus élevée pour l'écriture créative (par exemple 0,8)."
        },
        {
          q: "Qu'est-ce qu'une fenêtre contextuelle ?",
          options: [
            "Taille de la fenêtre du navigateur",
            "Le nombre maximum de jetons qu'un modèle peut traiter à la fois",
            "Taille de l'ensemble de données d'entraînement",
            "Limite d'appels API"
          ],
          answer: 1,
          explain: "Le contenu au-delà de la fenêtre contextuelle est tronqué ou oublié ; pour les documents longs, privilégiez les modèles avec de grandes fenêtres (ex. Kimi, Claude)."
        },
        {
          q: "Quelle est la différence entre un apprentissage supervisé et non supervisé ?",
          options: [
            "L'apprentissage supervisé utilise des données étiquetées ; l'apprentissage non supervisé trouve des modèles dans des données non étiquetées",
            "L'apprentissage non supervisé est toujours plus précis",
            "L'apprentissage supervisé ne nécessite aucune donnée",
            "Aucun des deux ne peut être utilisé pour la classification"
          ],
          answer: 0,
          explain: "Noyau du jour 2 : le filtrage du spam est un apprentissage supervisé ; la segmentation de la clientèle est souvent non supervisée."
        },
        {
          q: "A quoi servent principalement les modèles de diffusion ?",
          options: [
            "Classement du texte",
            "La génération d'images/vidéos grand public d'aujourd'hui",
            "Requêtes de base de données",
            "Routage réseau"
          ],
          answer: 1,
          explain: "Stable Diffusion, Midjourney, DALL·E 3 et d'autres outils de conversion texte-image similaires sont basés sur des modèles de diffusion."
        },
        {
          q: "Quelle est l’utilisation principale des intégrations ?",
          options: [
            "Chiffrement des données",
            "Transformer le texte en vecteurs pour la recherche de similarité sémantique",
            "Formation des pilotes GPU",
            "Formation des pilotes GPU"
          ],
          answer: 1,
          explain: "Un contenu sémantiquement similaire a des vecteurs plus proches – le fondement des bases de données RAG et vectorielles."
        },
        {
          q: "Qu'est-ce qu'une compétence IA ?",
          options: [
            "Une capacité de personnage de jeu",
            "Un pack de capacités modulaires de connaissances du domaine et de règles d'outils que les agents peuvent charger",
            "Un langage de programmation",
            "Un modèle GPU"
          ],
          answer: 1,
          explain: "Par exemple, une compétence de curseur apprend à l'IA à gérer xlsx ; Les agents peuvent charger dynamiquement des compétences pour des tâches spécifiques."
        },
        {
          q: "Que fait MCP (Model Context Protocol) ?",
          options: [
            "Accélérer la formation du modèle",
            "Standardisez la façon dont l’IA se connecte aux outils et sources de données externes",
            "RAG récupère d'abord les sources externes, puis génère des réponses, réduisant ainsi considérablement les réponses inventées.",
            "Remplacer les invites"
          ],
          answer: 1,
          explain: "MCP permet à l'IA de se connecter à GitHub, aux bases de données, aux systèmes de fichiers et à d'autres fonctionnalités externes via un seul protocole."
        },
        {
          q: "Quel est le flux de travail correct pour créer une calculatrice avec Cursor Codex ?",
          options: [
            "Mémorisez la syntaxe HTML complète et écrivez tout à la main",
            "Copiez uniquement le code du Web sans l'exécuter",
            "Copiez uniquement le code du Web sans l'exécuter",
            "Attendez que l'IA soit complètement mature"
          ],
          answer: 1,
          explain: "Le cas pratique de ce site : « énoncer les besoins → obtenir le code → ouvrir dans le navigateur → itérer les correctifs » est le chemin de démarrage de la programmation de l'IA."
        },
        {
          q: "Que signifie --ar 16:9 à la fin d'une invite de mi-parcours ?",
          options: [
            "Numéro de version de l'image",
            "Format d'image (paysage 16:9)",
            "Générer 16 images",
            "Limité à 9 couleurs"
          ],
          answer: 1,
          explain: "Paramètres communs : --ar contrôle le rapport, --v contrôle la version ; Les invites en anglais fonctionnent généralement mieux."
        },
        {
          q: "Quelle est la condition préalable clé pour le clonage vocal ElevenLabs / Fish Audio ?",
          options: [
            "Utiliser le discours public de n'importe qui à des fins commerciales",
            "Téléchargez des enregistrements clairs de voix sèches et clonez uniquement les voix que vous avez le droit d'utiliser",
            "Aucun enregistrement nécessaire",
            "Environnement calme, pas de musique de fond, 1 à 3 minutes de voix sèche ; ne clonez jamais la voix des autres sans autorisation."
          ],
          answer: 1,
          explain: "Environnement calme, pas de musique de fond, 1 à 3 minutes de voix sèche ; ne clonez jamais la voix des autres sans autorisation."
        },
        {
          q: "Quelle capacité d'IA une tâche d'actualité boursière planifiée OpenClaw démontre-t-elle ?",
          options: [
            "Questions et réponses par chat uniquement",
            "Automatisation des agents : déclencheurs planifiés, récupération, synthèse et push de canal",
            "Remplacer les décisions d’investissement humain",
            "Fonctionne sans configuration"
          ],
          answer: 1,
          explain: "OpenClaw Cron permet aux agents d'exécuter des tâches de recherche selon un calendrier et de transmettre les résultats : la sortie est à titre de référence uniquement ; vérifiez-le."
        },
        {
          q: "Quel est l'ordre correct de la méthode d'apprentissage en quatre phases de ce site ?",
          options: [
            "Pratique → Cognition → Révision → Outils",
            "Cognition → Outils → Pratique → Révision",
            "Outils → Révision → Cognition → Pratique",
            "Les outils seuls suffisent"
          ],
          answer: 1,
          explain: "Créez d'abord un cadre cognitif, puis maîtrisez les outils et les invites, pratiquez la pratique, et enfin testez et révisez."
        },
        {
          q: "Quel est le principe le plus judicieux lors du choix des outils d’IA ?",
          options: [
            "N'utilisez que le plus cher",
            "Choisissez l'outil spécialisé le mieux adapté à chaque scénario, et non le « meilleur » dans l'ensemble",
            "Installez les 43 en même temps",
            "Utilisez toujours uniquement le niveau gratuit"
          ],
          answer: 1,
          explain: "Sélection des outils du jour 5 : le chat, le codage, les images, les agents et la recherche ont chacun des points forts ; les utilisateurs nationaux devraient également envisager l’accès et le support chinois."
        },
        {
          q: "Quel est un cas d’utilisation typique de l’apprentissage par renforcement ?",
          options: [
            "Classement des e-mails",
            "AlphaGo joue au Go",
            "Compression d'images",
            "Indexation de base de données"
          ],
          answer: 1,
          explain: "L'apprentissage par renforcement apprend les politiques grâce à des signaux de récompense ; AlphaGo et le contrôle des robots sont des applications classiques.",
          topic: "Qu’est-ce que le surapprentissage ?"
        },
        {
          q: "Qu’est-ce que le surapprentissage ?",
          options: [
            "Trop peu de données d'entraînement",
            "Bonnes performances sur les données d'entraînement mais médiocres sur les nouvelles données",
            "L'entraînement est trop lent",
            "Mémoire GPU insuffisante"
          ],
          answer: 1,
          explain: "Le surapprentissage, c'est comme « mémoriser des réponses » : se souvenir d'échantillons d'entraînement sans généraliser ; utiliser plus de données ou de régularisation.",
          topic: "Qu’est-ce que le surapprentissage ?"
        },
        {
          q: "Qu'est-ce que l'invite de tir zéro ?",
          options: [
            "Décrivez la tâche sans exemples",
            "Donnez 100 exemples",
            "Images uniquement",
            "Il faut affiner le modèle"
          ],
          answer: 0,
          explain: "Zero-shot ne donne aucun exemple et s'appuie sur un pré-entraînement ; les invites en quelques coups fournissent quelques exemples.",
          topic: "laboratoire d'invite"
        },
        {
          q: "Quel est l’avantage de l’invite en quelques tirs ?",
          options: [
            "Toujours moins cher",
            "Quelques exemples alignent rapidement le format et le style de sortie",
            "Uniquement pour le code",
            "Aucune invite nécessaire"
          ],
          answer: 1,
          explain: "Mettre 1 à 3 exemples d'entrée-sortie dans l'invite améliore considérablement la cohérence du format.",
          topic: "laboratoire d'invite"
        },
        {
          q: "Quelle est la principale différence entre le réglage fin et l’ingénierie rapide ?",
          options: [
            "Exactement pareil",
            "Le réglage fin modifie les poids du modèle ; l'ingénierie rapide ne modifie que l'entrée",
            "L’ingénierie rapide coûte plus cher",
            "Le réglage fin concerne uniquement les images"
          ],
          answer: 1,
          explain: "La plupart des utilisateurs peuvent se débrouiller avec une ingénierie rapide ; le réglage fin convient aux entreprises disposant de nombreuses données étiquetées et de besoins de personnalisation approfondis.",
          topic: "Qu’est-ce que le surapprentissage ?"
        },
        {
          q: "Quelle est la différence entre l’IA discriminative et l’IA générative ?",
          options: [
            "L'IA discriminante crée du nouveau contenu",
            "L'IA discriminante classe/prédit ; l'IA générative crée du nouveau contenu",
            "L'IA générative ne peut que classer",
            "Aucune différence"
          ],
          answer: 1,
          explain: "La détection du spam est discriminante ; L'écriture ChatGPT et les images Midjourney sont génératives.",
          topic: "Qu’est-ce que le surapprentissage ?"
        },
        {
          q: "Qu’apprend principalement un modèle lors de la pré-formation ?",
          options: [
            "Uniquement les journaux de discussion des utilisateurs",
            "Modèles de langage et connaissances du monde à partir de corpus généraux massifs",
            "Uniquement les pixels de l'image",
            "Chaque règle écrite par les humains"
          ],
          answer: 1,
          explain: "Les grands modèles sont d'abord pré-entraînés sur un texte volumineux, puis alignés via un réglage fin/RLHF pour le comportement du produit.",
          topic: "Qu’est-ce que le surapprentissage ?"
        },
        {
          q: "À quoi sert la rétropropagation ?",
          options: [
            "RAG récupère d'abord les sources externes, puis génère des réponses, réduisant ainsi considérablement les réponses inventées.",
            "Connectez-vous à Internet",
            "Connectez-vous à Internet",
            "Compresser les modèles"
          ],
          answer: 1,
          explain: "L'algorithme de base pour la formation des réseaux de neurones : les modèles apprennent en ajustant les paramètres à partir des erreurs.",
          topic: "Qu’est-ce que le surapprentissage ?"
        },
        {
          q: "À quoi un CNN (réseau de neurones convolutifs) est-il particulièrement efficace ?",
          options: [
            "Texte uniquement",
            "Images et données spatialement structurées",
            "Audio uniquement",
            "Données tabulaires"
          ],
          answer: 1,
          explain: "Les convolutions CNN conviennent à la reconnaissance d'images ; Les transformateurs sont plus courants dans les tâches PNL et multimodales.",
          topic: "Qu’est-ce que le surapprentissage ?"
        },
        {
          q: "Quelle est une application typique de l’apprentissage non supervisé ?",
          options: [
            "Classification des e-mails étiquetés",
            "Clustering de segmentation client",
            "Prévision du prix de l'immobilier (étiquetée)",
            "Reconnaissance de chiffres manuscrits (étiquetés)"
          ],
          answer: 1,
          explain: "L'apprentissage non supervisé trouve une structure dans des données non étiquetées ; le regroupement et la réduction de dimensionnalité sont des tâches courantes.",
          topic: "Qu’est-ce que le surapprentissage ?"
        },
        {
          q: "ChatGPT est-il mieux adapté que la recherche Web classique ?",
          options: [
            "Recherche de codes boursiers exacts",
            "Dialogue à plusieurs tours, réécriture, brainstorming et génération de brouillons",
            "Remplacement de tous les moteurs de recherche",
            "Faire des preuves mathématiques uniquement"
          ],
          answer: 1,
          explain: "L'IA conversationnelle excelle dans la création et l'analyse interactives ; des données précises en temps réel nécessitent encore des outils de recherche.",
          topic: "applications"
        },
        {
          q: "L'une des principales forces de Claude est ?",
          options: [
            "Génération d'images uniquement",
            "Contexte long et écriture raffinée : idéal pour les documents longs",
            "Codage uniquement",
            "Pas de niveau gratuit"
          ],
          answer: 1,
          explain: "Claude est connu pour environ 200 000 contextes et son alignement sur la sécurité ; Les artefacts peuvent prévisualiser le code et les documents.",
          topic: "applications"
        },
        {
          q: "Quel est l’avantage unique des Gémeaux ?",
          options: [
            "Intégration approfondie avec la recherche Google, Gmail, Docs et l'écosystème Google",
            "Fonctionnement local uniquement",
            "Pas de support multimodal",
            "Pas de support chinois"
          ],
          answer: 0,
          explain: "Pour quel scénario Kimi est-il le meilleur ?",
          topic: "applications"
        },
        {
          q: "Pour quel scénario Kimi est-il le meilleur ?",
          options: [
            "Réponses SMS courtes",
            "Analyser des documents très longs (par exemple des livres entiers, des PDF volumineux)",
            "modélisation 3D",
            "Développement de pilotes matériels"
          ],
          answer: 1,
          explain: "Kimi est connu pour son contexte très long, idéal pour lire de la littérature et digérer des documents volumineux.",
          topic: "applications"
        },
        {
          q: "Pourquoi DeepSeek est-il particulièrement attrayant pour les développeurs ?",
          options: [
            "Dessin uniquement",
            "Modèles open source + prix API très bas + raisonnement solide",
            "Doit acheter un GPU",
            "Pas de prise en charge du code"
          ],
          answer: 1,
          explain: "DeepSeek-R1 se démarque par son raisonnement ; Le coût de l'API ne représente qu'une infime fraction de GPT-4.",
          topic: "applications"
        },
        {
          q: "Quelle est la principale commodité de Qwen pour les utilisateurs domestiques ?",
          options: [
            "Doit utiliser un VPN",
            "Forte optimisation chinoise, aucun VPN nécessaire, intégration de l'écosystème Tongyi",
            "Anglais seulement",
            "Aucune API"
          ],
          answer: 1,
          explain: "La série Qwen d'Alibaba possède une forte capacité chinoise et est liée à Tongyi Wanxiang, Lingma et à des produits associés.",
          topic: "applications"
        },
        {
          q: "Comment fonctionne GitHub Copilot ?",
          options: [
            "Remplace l'EDI",
            "Achèvement en temps réel et codage assisté par chat dans VS Code et d'autres IDE",
            "Python uniquement",
            "S'engage automatiquement sur Git"
          ],
          answer: 1,
          explain: "Quelle est la principale différence entre Cursor et VS Code classique ?",
          topic: "applications"
        },
        {
          q: "Quelle est la principale différence entre Cursor et VS Code classique ?",
          options: [
            "HTML uniquement",
            "AI-native : indexation de projet complet + codage autonome multi-fichiers d'agent",
            "Pas de terminal",
            "Pas de prise en charge des plugins"
          ],
          answer: 1,
          explain: "Le curseur comprend toute la base de code ; Le mode Agent peut modifier des fichiers et exécuter des commandes.",
          topic: "applications"
        },
        {
          q: "Qu'est-ce que le mode Cascade de Windsurf met en avant ?",
          options: [
            "Remplissage sur une seule ligne uniquement",
            "Java uniquement",
            "Java uniquement",
            "Doit payer pour utiliser"
          ],
          answer: 1,
          explain: "Cascade est la capacité d'agent de Codeium : le même espace concurrentiel que Cursor Agent dans les IDE d'IA.",
          topic: "applications"
        },
        {
          q: "Extension de navigateur",
          options: [
            "Extension de navigateur",
            "Agent Terminal avec une base de code approfondie et des opérations Git",
            "Application mobile",
            "Chat uniquement"
          ],
          answer: 1,
          explain: "Claude Code cible les workflows en ligne de commande, adaptés aux refactors complexes et aux longues sessions de codage.",
          topic: "applications"
        },
        {
          q: "À qui s’adresse la CLI OpenAI Codex ?",
          options: [
            "Faire des diapositives uniquement",
            "Abonnés OpenAI exécutant un agent de codage dans un terminal ou un bac à sable cloud",
            "Aucun réseau nécessaire",
            "Aucun réseau nécessaire"
          ],
          answer: 1,
          explain: "Codex CLI est l'agent de codage en ligne de commande officiel d'OpenAI, inclus avec ChatGPT Plus/Pro.",
          topic: "applications"
        },
        {
          q: "Quelle est la principale caractéristique d’Aider ?",
          options: [
            "Source fermée et cher",
            "Open source, apportez votre propre clé API, intégration Git approfondie avec validation automatique",
            "Java uniquement",
            "Pas d'édition multi-fichiers"
          ],
          answer: 1,
          explain: "À quoi sert Bolt.new ?",
          topic: "applications"
        },
        {
          q: "À quoi sert Bolt.new ?",
          options: [
            "Développement du noyau",
            "Les non-programmeurs prototypent rapidement des applications Web exécutables en langage naturel",
            "Formation de grands modèles",
            "Opérations de base de données"
          ],
          answer: 1,
          explain: "Bolt génère des applications full-stack dans le navigateur, idéales pour la validation MVP et la création rapide de sites.",
          topic: "applications"
        },
        {
          q: "Quel a été le principal point d’entrée de Midjourney ?",
          options: [
            "Ligne de commande uniquement",
            "Bot Discord (prend désormais également en charge le Web)",
            "Plugin Excel uniquement",
            "SMS"
          ],
          answer: 1,
          explain: "Midjourney a commencé sur Discord ; Le Web est également disponible dès maintenant ; Les invites en anglais fonctionnent généralement mieux.",
          topic: "pratique"
        },
        {
          q: "Quel est l'avantage de Stable Diffusion par rapport aux modèles fermés ?",
          options: [
            "Nuage uniquement",
            "Open source, déploiement local, modèles communautaires riches et écosystème ControlNet",
            "Qualité d'image toujours pire",
            "Pas de support LoRA"
          ],
          answer: 1,
          explain: "SD s'exécute localement ; LoRA/ControlNet donne aux utilisateurs un contrôle total sur le pipeline de génération.",
          topic: "applications"
        },
        {
          q: "Quel est le point fort de Flux dans la génération d'images ?",
          options: [
            "Noir et blanc uniquement",
            "Haute qualité + rendu de texte précis + utilisation locale/API",
            "Vidéo uniquement",
            "Pas de version open source"
          ],
          answer: 1,
          explain: "Flux de Black Forest Labs excelle dans le rendu du texte et la structure humaine.",
          topic: "applications"
        },
        {
          q: "À quoi sert principalement Suno ?",
          options: [
            "Écrire du code",
            "Générer des chansons complètes à partir du texte (chant et accompagnement)",
            "Faire des diapositives",
            "Formation LLM"
          ],
          answer: 1,
          explain: "Suno est un outil musical IA : décrivez un style et obtenez un morceau complet.",
          topic: "applications"
        },
        {
          q: "Quelle est la capacité principale d’ElevenLabs ?",
          options: [
            "Génération d'images",
            "TTS de haute qualité et clonage vocal instantané",
            "Montage vidéo",
            "Moteur de recherche"
          ],
          answer: 1,
          explain: "En quoi Perplexity diffère-t-il de la recherche Google traditionnelle ?",
          topic: "pratique"
        },
        {
          q: "En quoi Perplexity diffère-t-il de la recherche Google traditionnelle ?",
          options: [
            "Listes de liens uniquement",
            "Réponses directes avec des sources citées",
            "Impossible d'accéder au Web",
            "Recherche d'images uniquement"
          ],
          answer: 1,
          explain: "Perplexity est un moteur de recherche IA avec des citations, idéal pour une recherche rapide tout en vérifiant les faits.",
          topic: "applications"
        },
        {
          q: "Générer du code",
          options: [
            "Générer du code",
            "Transformez les documents téléchargés en audio de style podcast AI à deux hôtes",
            "Envoi automatique d'e-mail",
            "Modèles de trains"
          ],
          answer: 1,
          explain: "NotebookLM peut transformer des PDF/notes en résumés de podcast écoutables, idéal pour étudier la littérature.",
          topic: "applications"
        },
        {
          q: "Sans publicité, avec citations, modes de recherche académique/podcast et autres modes de recherche chinois",
          options: [
            "Doit utiliser un VPN",
            "Sans publicité, avec citations, modes de recherche académique/podcast et autres modes de recherche chinois",
            "Anglais seulement",
            "Pas de niveau gratuit"
          ],
          answer: 1,
          explain: "Metaso est une recherche d'IA nationale avec une solide expérience de recherche chinoise, accessible en Chine.",
          topic: "applications"
        },
        {
          q: "Quelle est la valeur de Notion AI ?",
          options: [
            "Remplacer Photoshop",
            "Rédiger, résumer et traduire des notes internes et des flux de travail de base de données",
            "Chat uniquement",
            "Aucune collaboration"
          ],
          answer: 1,
          explain: "Notion AI est profondément liée aux notes, adaptée aux documents d'équipe et à la gestion des connaissances.",
          topic: "applications"
        },
        {
          q: "Quel est le meilleur Gamma pour terminer rapidement ?",
          options: [
            "Compilation du noyau",
            "Générer des présentations/documents soignés à partir d'un plan",
            "Animations 3D",
            "Conception matérielle"
          ],
          answer: 1,
          explain: "Saisissez un sujet ou un plan pour obtenir des présentations sous forme de diapositives, très efficaces pour les rapports de dernière minute.",
          topic: "applications"
        },
        {
          q: "Quel est le positionnement d'OpenClaw ?",
          options: [
            "Éditeur d'images",
            "Passerelle AI Agent open source : Cron, Webhook, push multicanal",
            "Lecteur de musique",
            "Navigateur"
          ],
          answer: 1,
          explain: "OpenClaw permet aux agents d'exécuter des tâches planifiées et de les envoyer vers Telegram/Slack/Feishu et plus encore.",
          topic: "agent"
        },
        {
          q: "À quoi sert principalement Dify ?",
          options: [
            "Montage vidéo",
            "Création visuelle d'applications LLM, de bases de connaissances RAG et de flux de travail",
            "Extraction de crypto",
            "Pilotes matériels"
          ],
          answer: 1,
          explain: "Dify est une plateforme d'agent/d'application open source : des robots auto-hébergés et basés sur la base de connaissances d'entreprise.",
          topic: "agent"
        },
        {
          q: "Quel est le scénario central de Coze ?",
          options: [
            "Entraînement des clusters GPU",
            "Création et publication de robots sans code sur Feishu/WeChat et d'autres plateformes",
            "3D uniquement",
            "Remplacer le système d'exploitation"
          ],
          answer: 1,
          explain: "ByteDance Coze permet aux non-développeurs de glisser-déposer des Agent Bots, un démarrage rapide en Chine.",
          topic: "agent"
        },
        {
          q: "Quelle est la valeur de n8n ?",
          options: [
            "Dessin uniquement",
            "Connectez des centaines de services et orchestrez des workflows d'automatisation (y compris des nœuds IA)",
            "Remplacer le mot",
            "Envoyer un e-mail uniquement"
          ],
          answer: 1,
          explain: "n8n est une plateforme d'automatisation ouverte : vous pouvez intégrer des LLM dans des pipelines commerciaux.",
          topic: "agent"
        },
        {
          q: "À quoi conviennent les agents généraux comme Manus ?",
          options: [
            "Météo uniquement",
            "Tâches multi-étapes de bout en bout : recherche, rapports, navigation Web, etc.",
            "Remplacer les avocats au tribunal",
            "Aucun examen humain nécessaire"
          ],
          answer: 1,
          explain: "Manus met l'accent sur la planification autonome pour les tâches longues : les résultats nécessitent toujours un examen humain.",
          topic: "agent"
        },
        {
          q: "Quel problème central le protocole MCP résout-il ?",
          options: [
            "Accélérez les GPU",
            "Unifiez la façon dont l’IA se connecte aux outils et sources de données externes",
            "Générer de la musique",
            "Model Context Protocol permet à Claude, Cursor et d'autres de se connecter à GitHub, à des bases de données, etc. de manière standard."
          ],
          answer: 1,
          explain: "Model Context Protocol permet à Claude, Cursor et d'autres de se connecter à GitHub, à des bases de données, etc. de manière standard.",
          topic: "connaissance"
        },
        {
          q: "Utilisation gratuite et illimitée",
          options: [
            "Chat uniquement",
            "Choisir et appeler des API/fonctions prédéfinies en fonction de l'intention",
            "Utilisation gratuite et illimitée",
            "Aucun réseau nécessaire"
          ],
          answer: 1,
          explain: "L'appel de fonction constitue la base des agents qui appellent la météo, les calculatrices, les bases de données, etc.",
          topic: "connaissance"
        },
        {
          q: "Quel est le rôle d’une base de données vectorielles dans RAG ?",
          options: [
            "Modèles de trains",
            "Stocker les intégrations et exécuter la récupération de similarité sémantique",
            "Envoyer un e-mail",
            "Rendre les pages Web"
          ],
          answer: 1,
          explain: "Sur une question d'utilisateur, récupérez d'abord les morceaux de document les plus pertinents, puis laissez le LLM générer la réponse.",
          topic: "Qu’est-ce que le surapprentissage ?"
        },
        {
          q: "Quelle est l’approche la plus sûre lors de l’utilisation de l’IA sur des fichiers confidentiels d’entreprise ?",
          options: [
            "Téléchargez librement sur n'importe quel cloud public",
            "Vérifiez les politiques de confidentialité ; utiliser le niveau entreprise/le déploiement local/la désidentification pour les données sensibles",
            "Envoyer à n'importe qui",
            "Publier des captures d'écran sur les réseaux sociaux"
          ],
          answer: 1,
          explain: "Les données confidentielles nécessitent des accords d’entreprise ou une privatisation ; la formation interne de ce site met également l'accent sur le respect de la sécurité.",
          topic: "ai-aperçu"
        },
        {
          q: "Que devez-vous faire lorsque l’IA donne une réponse factuelle ?",
          options: [
            "Vérifiez les sources, en particulier les chiffres, les dates et les noms",
            "Vérifiez les sources, en particulier les chiffres, les dates et les noms",
            "Ne lui fais jamais confiance",
            "Ne demander qu'une seule fois"
          ],
          answer: 1,
          explain: "L'hallucination est une limite connue du LLM ; même la perplexité avec les citations nécessite une seconde vérification des faits clés.",
          topic: "ai-aperçu"
        },
        {
          q: "Quel est le flux correct pour itérer les invites ?",
          options: [
            "Écrivez une fois et ne changez jamais",
            "Brouillon → examiner le résultat → ajouter des contraintes/exemples → réessayer",
            "Plus court est toujours mieux",
            "Supprimer toutes les exigences de format"
          ],
          answer: 1,
          explain: "L’ingénierie rapide est une science expérimentale ; le laboratoire d'invite de ce site sert à comparer les itérations.",
          topic: "laboratoire d'invite"
        },
        {
          q: "Quel est l’avantage de spécifier le format de sortie dans une invite ?",
          options: [
            "Jetons Déchets",
            "Les résultats peuvent être directement transférés dans des feuilles de calcul/codes/rapports avec moins de nettoyage",
            "Toujours plus lent",
            "Le modèle refusera"
          ],
          answer: 1,
          explain: "Demander du JSON, des tableaux Markdown ou des listes à puces améliore considérablement la convivialité.",
          topic: "laboratoire d'invite"
        },
        {
          q: "Quelle est la méthode recommandée pour analyser les données Excel avec ChatGPT ?",
          options: [
            "Capture d'écran d'un tableau flou",
            "Téléchargez le fichier ou collez les données structurées et spécifiez les métriques à calculer",
            "Demandez seulement \"analyser ceci\"",
            "Impossible d'analyser les données"
          ],
          answer: 1,
          explain: "L'aspect pratique de ce site : fournir des données et des questions claires ; utilisez l'interpréteur de code pour les graphiques si nécessaire.",
          topic: "pratique"
        },
        {
          q: "Que devez-vous surveiller lorsque vous utilisez Perplexity pour la recherche de concurrents ?",
          options: [
            "Traitez les conclusions comme des conseils d’investissement",
            "Vérifiez les sources et les dates citées ; vérification croisée des données clés",
            "Pas besoin d’indiquer les domaines d’intervention",
            "Demandez uniquement « analyser les concurrents »"
          ],
          answer: 1,
          explain: "Le point pratique de ce site : la force de Perplexity réside dans les sources vérifiables, mais les prix, etc., nécessitent toujours une vérification officielle du site.",
          topic: "pratique"
        },
        {
          q: "Quel est le flux recommandé pour lire des articles avec NotebookLM ?",
          options: [
            "Téléchargez et ne posez jamais de questions",
            "Télécharger un PDF → poser des questions détaillées → utiliser les fonctionnalités de résumé/podcast pour renforcer",
            "Un seul papier",
            "Remplacer l'examen par les pairs des conseillers"
          ],
          answer: 1,
          explain: "Après le téléchargement, vous pouvez discuter ; L'aperçu audio est idéal pour passer en revue les points clés du trajet.",
          topic: "pratique"
        },
        {
          q: "Utilisez librement les noms de célébrités",
          options: [
            "Utilisez librement les noms de célébrités",
            "Évitez les vrais noms de célébrités non autorisés ; suivre la politique de contenu de la plateforme",
            "Toujours illégal",
            "Respecter les droits de ressemblance et les règles de la plateforme ; confirmer les termes de la licence d’abonnement avant toute utilisation commerciale."
          ],
          answer: 1,
          explain: "Respecter les droits de ressemblance et les règles de la plateforme ; confirmer les termes de la licence d’abonnement avant toute utilisation commerciale.",
          topic: "pratique"
        },
        {
          q: "Quelle est la condition préalable à la conformité pour les services de clonage vocal ?",
          options: [
            "Téléchargez l'audio de l'influenceur et utilisez-le",
            "Clonez votre ou vos propres voix uniquement avec une autorisation écrite",
            "Plus c'est bruyant, mieux c'est",
            "Aucun enregistrement nécessaire"
          ],
          answer: 1,
          explain: "Fish Audio/ElevenLabs nécessitent tous deux des échantillons de voix sèches que vous avez le droit d'utiliser.",
          topic: "pratique"
        },
        {
          q: "Dans une tâche cron OpenClaw, que fait --tz \"Asia/Shanghai\" ?",
          options: [
            "Définir la langue",
            "Planifier la tâche pour qu'elle se déclenche dans le fuseau horaire de Shanghai",
            "Chiffrer les messages",
            "Cron a besoin d'un fuseau horaire explicite, sinon le jour de la semaine 8h30 pourrait ne pas correspondre à l'heure locale."
          ],
          answer: 1,
          explain: "Cron a besoin d'un fuseau horaire explicite, sinon le jour de la semaine 8h30 pourrait ne pas correspondre à l'heure locale.",
          topic: "pratique"
        },
        {
          q: "Lorsque vous modifiez par lots le mode sombre dans Windsurf, que devez-vous demander à l'agent de faire en premier ?",
          options: [
            "Changer tout sans confirmation",
            "Lister les fichiers à modifier, puis exécuter après confirmation",
            "Supprimer le projet",
            "Changer une seule variable"
          ],
          answer: 1,
          explain: "Le pratique de ce site : Cascade planifie d'abord, puis exécute, ce qui est plus contrôlable que \"tout changer\".",
          topic: "pratique"
        },
        {
          q: "Lorsque vous créez rapidement un pitch deck avec Gamma, quelle est la meilleure entrée ?",
          options: [
            "Vide",
            "Plan clair : titre par diapositive + 3 puces",
            "Émojis aléatoires",
            "500 pages de texte intégral"
          ],
          answer: 1,
          explain: "Que fait ControlNet en diffusion stable ?",
          topic: "pratique"
        },
        {
          q: "Que fait ControlNet en diffusion stable ?",
          options: [
            "Accélérer la formation",
            "Utilisez les bords/poses et d’autres conditions pour contrôler avec précision la composition",
            "Étalonnage des couleurs uniquement",
            "Remplacer LoRA"
          ],
          answer: 1,
          explain: "ControlNet permet aux utilisateurs de limiter la sortie avec des croquis, des cartes de pose, etc., une extension essentielle de l'écosystème SD.",
          topic: "connaissance"
        },
        {
          q: "À quoi sert LoRA couramment utilisé dans la génération d’images ?",
          options: [
            "Compresser la vidéo",
            "Ajustement léger de styles/personnages/apparences de produits spécifiques",
            "Former des LLM",
            "Envoyer un e-mail"
          ],
          answer: 1,
          explain: "LoRA est un petit adaptateur que vous pouvez empiler sur un modèle de base pour des visuels de marque cohérents.",
          topic: "connaissance"
        },
        {
          q: "Quelle est la principale limitation actuelle des modèles vidéo de classe Sora ?",
          options: [
            "Remplacer complètement l'action en direct",
            "Les détails physiques peuvent être erronés ; nécessite un contrôle humain et un examen de la conformité",
            "Seulement 1 seconde",
            "Gratuit et illimité"
          ],
          answer: 1,
          explain: "La vidéo IA progresse rapidement mais doit encore être révisée en termes de plausibilité physique, de droits d'auteur et de règles de plate-forme.",
          topic: "applications"
        },
        {
          q: "À quoi sert Microsoft Copilot dans Office ?",
          options: [
            "Réinstallation du système d'exploitation",
            "Générer, résumer et analyser les données d'un document dans Word/Excel/PPT",
            "Remplacer les serveurs Outlook",
            "Dessin uniquement"
          ],
          answer: 1,
          explain: "Les abonnés M365 peuvent appeler Copilot dans la barre latérale Office pour les documents quotidiens.",
          topic: "applications"
        },
        {
          q: "Quel est le positionnement principal de Zcode ?",
          options: [
            "Lecteur de musique",
            "Environnement de développement agent basé sur Zhipu GLM prenant en charge les tâches à long terme",
            "Chat uniquement",
            "Anglais seulement"
          ],
          answer: 1,
          explain: "Zcode cible les développeurs nationaux : prise en charge des ordinateurs de bureau/à distance et Feishu/WeChat Bot.",
          topic: "applications"
        },
        {
          q: "Qu'est-ce qui attire les développeurs vers Gemini CLI ?",
          options: [
            "Doit acheter un GPU",
            "Utilisation du terminal + compte Google + quota gratuit relativement généreux",
            "C++ uniquement",
            "Aucune opération sur les fichiers"
          ],
          answer: 1,
          explain: "Gemini CLI est open source ; le quota du niveau gratuit est compétitif parmi les outils CLI.",
          topic: "applications"
        },
        {
          q: "Quelle est la relation entre Cline et Cursor ?",
          options: [
            "Exactement pareil",
            "Cline est une extension VS Code qui peut utiliser plusieurs API, pas besoin de changer d'éditeur",
            "Cline ne fait que dessiner",
            "Cline est un moteur de recherche"
          ],
          answer: 1,
          explain: "Cline ajoute la capacité d'agent au VS Code existant, ce qui est idéal pour les utilisateurs qui choisissent leurs propres modèles.",
          topic: "applications"
        },
        {
          q: "Quels IDE Continue.dev prend-il en charge ?",
          options: [
            "Vim uniquement",
            "VS Code et la suite complète JetBrains",
            "Navigateur uniquement",
            "Continuer est un assistant ouvert ; les équipes peuvent partager config.yaml pour unifier les paramètres du modèle."
          ],
          answer: 1,
          explain: "Continuer est un assistant ouvert ; les équipes peuvent partager config.yaml pour unifier les paramètres du modèle.",
          topic: "applications"
        },
        {
          q: "À qui s’adresse Amazon Q Developer particulièrement adapté ?",
          options: [
            "Illustration uniquement",
            "Développement du cloud AWS, intégration de documents SDK et conformité d'entreprise",
            "Remplacer le matériel",
            "Remplacer le matériel"
          ],
          answer: 1,
          explain: "Q Developer intègre profondément les connaissances AWS : plugin IDE et CLI.",
          topic: "applications"
        },
        {
          q: "Quel est le principal différenciateur de Grok ?",
          options: [
            "Pas de réseau",
            "Flux en temps réel X (Twitter) et modes DeepSearch",
            "Codage uniquement",
            "Obligatoire en Chine"
          ],
          answer: 1,
          explain: "Grok s'intègre à X—strong pour suivre les dynamiques sociales et d'actualité en direct.",
          topic: "applications"
        },
        {
          q: "Quelles commodités Doubao offre-t-il aux utilisateurs nationaux ?",
          options: [
            "Doit utiliser un VPN",
            "Dialogue chinois naturel, quotas gratuits, intégration de l'écosystème Douyin/Feishu",
            "Anglais seulement",
            "Pas de multimodal"
          ],
          answer: 1,
          explain: "Quelle ressource n'est PAS intégrée à ERNIE Bot ?",
          topic: "applications"
        },
        {
          q: "Quelle ressource n'est PAS intégrée à ERNIE Bot ?",
          options: [
            "Recherche Baidu et Wenku",
            "Une base de données privée mondiale entièrement hors ligne",
            "Optimisation de l'écriture chinoise",
            "Capacités multimodales"
          ],
          answer: 1,
          explain: "La force d'ERNIE Bot réside dans les sociétés chinoises et les ressources nationales comme Baidu Search.",
          topic: "applications"
        },
        {
          q: "Que génère principalement Kling AI ?",
          options: [
            "Musique uniquement",
            "Texte vers vidéo et image vers vidéo, accès pratique en Chine",
            "Code uniquement",
            "Fichiers d'impression 3D"
          ],
          answer: 1,
          explain: "Kuaishou Kling est en tête de la production vidéo nationale avec un quota quotidien gratuit.",
          topic: "applications"
        },
        {
          q: "À qui s’adresse principalement Runway Gen-3 ?",
          options: [
            "Calcul sur feuille de calcul",
            "Flux de travail professionnels de génération et de montage de vidéos",
            "Client de messagerie",
            "Pilotes matériels"
          ],
          answer: 1,
          explain: "Runway propose la génération vidéo Gen-3 ainsi que l'édition, le passe-partout et d'autres fonctionnalités professionnelles.",
          topic: "applications"
        },
        {
          q: "VPN requis et anglais uniquement",
          options: [
            "VPN requis et anglais uniquement",
            "Prononciation chinoise naturelle, accès facile, idéal pour le doublage domestique",
            "Impossible de cloner",
            "Seulement 1 seconde d'audio"
          ],
          answer: 1,
          explain: "Fish Audio est une plate-forme vocale nationale qui mérite d'être essayée en premier pour les scénarios chinois.",
          topic: "applications"
        },
        {
          q: "Exigence légale",
          options: [
            "Exigence légale",
            "Les clients ont besoin d'échantillons livrables vérifiables avant de payer",
            "Sans signification",
            "Doit être gratuit"
          ],
          answer: 1,
          explain: "Le guide de monétisation de ce site : prouvez vos capacités avec un cas de démonstration, puis discutez du prix et des forfaits.",
          topic: "Lorsque vous souscrivez des contrats Bot de base de connaissances d’entreprise, que doit clarifier l’accord ?"
        },
        {
          q: "Lorsque vous souscrivez des contrats Bot de base de connaissances d’entreprise, que doit clarifier l’accord ?",
          options: [
            "Accord verbal uniquement",
            "Propriété des données, fréquence de mise à jour, clauses de non-responsabilité et étendue de la maintenance",
            "Révisions gratuites illimitées",
            "Garantir une précision à 100 %"
          ],
          answer: 1,
          explain: "Les réponses du robot doivent indiquer « à titre de référence uniquement » ; les données et les clés appartiennent au client : écrivez clairement la portée de la maintenance.",
          topic: "Lorsque vous souscrivez des contrats Bot de base de connaissances d’entreprise, que doit clarifier l’accord ?"
        }
      ]
  });
})();
