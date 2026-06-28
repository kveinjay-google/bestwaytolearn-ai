/* FR overlays — terms */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('fr', {
    termCategories: {
        "基础概念": "Fondamentaux",
        "模型与架构": "Maquettes et architecture",
        "训练与调优": "Formation et réglage",
        "提示与推理": "Invite et inférence",
        "智能体与技能": "Agents et compétences",
        "数据与知识": "Données et connaissances",
        "多模态与生成": "Terme générique désignant les technologies qui permettent aux machines de simuler l’intelligence humaine, notamment l’apprentissage, le raisonnement, la perception, la compréhension du langage et la création.",
        "工程与部署": "Terme générique désignant les technologies qui permettent aux machines de simuler l’intelligence humaine, notamment l’apprentissage, le raisonnement, la perception, la compréhension du langage et la création.",
        "伦理与安全": "Éthique et sécurité"
      },
      terms: [
        {
          def: "Terme générique désignant les technologies qui permettent aux machines de simuler l’intelligence humaine, notamment l’apprentissage, le raisonnement, la perception, la compréhension du langage et la création.",
          example: "Moteurs de recherche, assistants vocaux, conduite autonome."
        },
        {
          def: "Un moyen pour les ordinateurs d'apprendre automatiquement des modèles à partir de données sans règles manuscrites pour chaque cas ; la voie principale vers la création de l’IA.",
          example: "Filtrage du spam, recommandations de produits, notation de crédit."
        },
        {
          def: "Apprentissage automatique qui utilise des réseaux neuronaux multicouches pour extraire automatiquement des représentations de caractéristiques hiérarchiques à partir des données.",
          example: "Reconnaissance faciale, reconnaissance vocale, grands modèles de langage."
        },
        {
          def: "Une IA capable de gérer n’importe quelle tâche intellectuelle qu’un humain peut réaliser, comme le font les humains. Pas encore atteint ; un objectif de recherche à long terme.",
          example: "Un assistant IA polyvalent qui peut apprendre lui-même n'importe quelle nouvelle compétence."
        },
        {
          def: "Une IA qui ne peut effectuer que des tâches spécifiques ; le type de tous les systèmes d’IA déployés aujourd’hui.",
          example: "AlphaGo ne joue qu'au Go ; ChatGPT gère principalement les tâches linguistiques."
        },
        {
          def: "IA qui crée du nouveau contenu (texte, images, audio, vidéo, code) ; l'accent est mis sur la génération plutôt que sur la classification.",
          example: "Une branche de l'IA qui permet aux ordinateurs de comprendre, de générer et de traiter le langage humain."
        },
        {
          def: "Une branche de l'IA qui permet aux ordinateurs de comprendre, de générer et de traiter le langage humain.",
          example: "Traduction automatique, service client intelligent, synthèse de texte."
        },
        {
          def: "Face unlock, imagerie médicale, perception en conduite autonome.",
          example: "Face unlock, imagerie médicale, perception en conduite autonome."
        },
        {
          def: "Un ensemble précis d’étapes et de règles pour résoudre un problème. En IA, les algorithmes sont des méthodes permettant d’apprendre à partir de données ou de raisonnements.",
          example: "Descente de gradient, rétropropagation, mécanismes d'attention."
        },
        {
          def: "Une représentation mathématique tirée de données qui peut prédire ou générer des sorties pour des entrées invisibles.",
          example: "GPT-4 est un modèle ; la Diffusion Stable que vous téléchargez est également un modèle."
        },
        {
          def: "Valeurs de poids apprenables dans un modèle. Plus de paramètres signifie généralement une plus grande capacité, mais des coûts de formation et d’inférence plus élevés.",
          example: "GPT-4 compte environ 1,8 billion de paramètres ; DeepSeek-R1 en compte environ 671 milliards."
        },
        {
          def: "Un très grand réseau de neurones entraîné sur des corpus de textes massifs ; apprend la compréhension et la génération du langage en prédisant le prochain jeton.",
          example: "Un modèle de langage avec moins de paramètres pouvant s'exécuter sur les téléphones et les appareils périphériques, plus rapide et moins cher."
        },
        {
          def: "Un modèle de langage avec moins de paramètres pouvant s'exécuter sur les téléphones et les appareils périphériques, plus rapide et moins cher.",
          example: "Gemma 2B, Phi-3 Mini, assistants vocaux intégrés à l'appareil."
        },
        {
          def: "La famille OpenAI de grands modèles de langage basés sur le décodeur Transformer ; pré-entraîné puis affiné.",
          example: "GPT-3.5, GPT-4 et GPT-4o alimentent ChatGPT."
        },
        {
          def: "Le modèle de compréhension du langage bidirectionnel de Google ; fort en classification et en assurance qualité, faible en génération de formulaires longs.",
          example: "Classement de recherche, analyse des sentiments, reconnaissance d’entité nommée."
        },
        {
          def: "Une architecture de réseau de neurones introduite en 2017, centrée sur l'attention personnelle ; le fondement des LLM modernes.",
          example: "GPT, Claude, Gemini et LLaMA utilisent tous cette architecture."
        },
        {
          def: "Permet à un modèle de se concentrer dynamiquement sur les parties les plus pertinentes de l'entrée et de capturer les dépendances à long terme.",
          example: "Alignement longue distance en traduction ; se concentrer sur les mots clés lors de la lecture."
        },
        {
          def: "Chaque élément d'une séquence calcule la pertinence avec tous les autres éléments ; le composant principal de Transformers.",
          example: "Comprendre à quel nom « ça » fait référence."
        },
        {
          def: "Un réseau de neurones conçu pour les images ; les couches convolutives extraient les caractéristiques hiérarchiques spatiales.",
          example: "Classification d'images, détection d'objets, imagerie médicale."
        },
        {
          def: "Un réseau de données séquentielles avec mémoire ; lent à former, difficile à paralléliser, largement remplacé par Transformers.",
          example: "Première traduction automatique, prédiction de séries chronologiques."
        },
        {
          def: "Un générateur et un discriminateur s'entraînent de manière antagoniste pour produire des images réalistes ; une technique courante de génération d’images précoces.",
          example: "Échange de visage, transfert de style, restauration de photos anciennes."
        },
        {
          def: "Diffusion stable, mi-parcours, DALL·E 3.",
          example: "Diffusion stable, mi-parcours, DALL·E 3."
        },
        {
          def: "Un modèle informatique de neurones interconnectés en couches ; l’élément de base de l’apprentissage profond.",
          example: "La structure sous-jacente de tous les LLM, CNN et GAN."
        },
        {
          def: "Formation sur les données générales à grande échelle pour renforcer les capacités fondamentales ; la première étape pour tous les LLM.",
          example: "GPT-4 pré-entraîné sur des milliards de jetons de texte."
        },
        {
          def: "Formation continue d'un modèle pré-entraîné sur des données spécifiques à un domaine de haute qualité afin qu'il excelle dans une tâche particulière.",
          example: "Affiner un ensemble de données de dialogue médical pour en faire un assistant spécialisé en IA."
        },
        {
          def: "Les humains classent plusieurs réponses modèles ; l’apprentissage par renforcement optimise alors la qualité et la sécurité des résultats.",
          example: "Réglage fin efficace : entraînez uniquement un petit ensemble de paramètres d'adaptateur de bas rang sans modifier les poids d'origine : faible coût et rapide."
        },
        {
          def: "Réglage fin efficace : entraînez uniquement un petit ensemble de paramètres d'adaptateur de bas rang sans modifier les poids d'origine : faible coût et rapide.",
          example: "Ajout d'un style artistique spécifique à Stable Diffusion ; mise au point privée de l'entreprise."
        },
        {
          def: "Compressez les capacités d'un grand modèle d'enseignant dans un modèle d'élève plus petit, tout en conservant les performances tout en réduisant le calcul.",
          example: "DeepSeek-R1 distillé en modèles de raisonnement plus petits et plus rapides."
        },
        {
          def: "Le modèle fonctionne parfaitement sur les données d'entraînement, mais peu sur les nouvelles données, comme la mémorisation sans compréhension.",
          example: "Se souvenir des réponses de la formation mais échouer sur de nouvelles questions."
        },
        {
          def: "Le modèle est trop simple pour s'adapter même aux données d'entraînement ; augmenter la complexité ou améliorer les fonctionnalités.",
          example: "Algorithme de formation de base pour les réseaux de neurones : calculez les gradients couche par couche de la sortie à l'entrée et mettez à jour les poids."
        },
        {
          def: "Algorithme de formation de base pour les réseaux de neurones : calculez les gradients couche par couche de la sortie à l'entrée et mettez à jour les poids.",
          example: "Chaque itération de formation utilise la rétropropagation."
        },
        {
          def: "Mesure l’écart entre les prédictions et la vérité terrain ; la formation minimise cela.",
          example: "Entropie croisée pour la classification ; erreur quadratique moyenne pour la régression."
        },
        {
          def: "Un hyperparamètre contrôlant la quantité de poids mis à jour à chaque étape. Trop élevé et la formation diverge ; trop bas et c'est trop lent.",
          example: "Valeurs communes 1e-4 à 1e-5, ajustées par tâche."
        },
        {
          def: "Met à jour les paramètres opposés au gradient de perte afin que la perte diminue étape par étape.",
          example: "Descendre dans la direction la plus raide à chaque pas."
        },
        {
          def: "« L'intelligence artificielle » représente environ 2 à 4 jetons ; 128 000 contextes ≈ ~ 100 000 caractères chinois.",
          example: "« L'intelligence artificielle » représente environ 2 à 4 jetons ; 128 000 contextes ≈ ~ 100 000 caractères chinois."
        },
        {
          def: "L'instruction que vous envoyez à l'IA. Une bonne invite = rôle + tâche + contexte + format + contraintes.",
          example: "\"Vous êtes un PM senior : rédigez un PRD pour l'exigence suivante...\""
        },
        {
          def: "Les techniques et méthodes de conception et d'optimisation des invites pour obtenir une sortie IA de haute qualité.",
          example: "Invites structurées, quelques exemples, raisonnement en chaîne de pensée."
        },
        {
          def: "Nombre maximum de jetons que le modèle peut gérer en un seul passage ; au-delà, le contenu est tronqué ou oublié.",
          example: "Claude 200K, Kimi 2M personnages, GPT-4o 128K."
        },
        {
          def: "Contrôle le caractère aléatoire de la sortie. Faible = précis et stable ; élevé = créatif et varié.",
          example: "Échantillonner à partir du plus petit ensemble de jetons dont la probabilité cumulée atteint p ; contrôle la diversité, souvent utilisé avec la température."
        },
        {
          def: "Échantillonner à partir du plus petit ensemble de jetons dont la probabilité cumulée atteint p ; contrôle la diversité, souvent utilisé avec la température.",
          example: "Top-p=0,9 signifie choisir parmi des jetons couvrant une probabilité cumulée de 90 %."
        },
        {
          def: "Le modèle génère en toute confiance un contenu plausible mais incorrect, une limitation connue du LLM.",
          example: "Inventer de fausses citations papier ou de fausses dates historiques."
        },
        {
          def: "Utiliser un modèle entraîné sur de nouveaux intrants pour produire des résultats – le contraire de la formation.",
          example: "Poser une question à ChatGPT et obtenir une réponse est une inférence."
        },
        {
          def: "Le modèle accomplit une tâche à partir d'instructions uniquement, sans exemples.",
          example: "Dites « traduire en anglais » et cela se traduit sans exemples."
        },
        {
          def: "Fournissez quelques exemples (1 à 5) dans l'invite afin que le modèle apprenne rapidement le format de la tâche.",
          example: "Donnez 2 paires d'entrées-sorties et l'IA gère les nouvelles entrées de la même manière."
        },
        {
          def: "Demandez à l’IA de montrer son raisonnement étape par étape ; améliore considérablement la précision des mathématiques, de la logique et d'autres tâches complexes.",
          example: "« Analysez étape par étape : 3 personnes terminent en 5 jours, combien de jours pour 6 personnes ?"
        },
        {
          def: "Un système d'IA capable de planifier de manière autonome, d'appeler des outils et d'exécuter des tâches en plusieurs étapes, évoluant de la conversation à l'action.",
          example: "Parcourez le Web, écrivez et déployez du code, envoyez des rapports par courrier électronique."
        },
        {
          def: "Les compétences de curseur apprennent à l'IA à lire/écrire xlsx ; Claude Compétences guider la manipulation des documents; workctl Skills appelle les outils marchands.",
          example: "Les compétences de curseur apprennent à l'IA à lire/écrire xlsx ; Claude Compétences guider la manipulation des documents; workctl Skills appelle les outils marchands."
        },
        {
          def: "Un protocole ouvert d'Anthropic qui standardise la façon dont les modèles d'IA se connectent aux outils et sources de données externes.",
          example: "L'IA se connecte à GitHub, aux bases de données et aux systèmes de fichiers via MCP."
        },
        {
          def: "Le LLM sélectionne et appelle des fonctions/API prédéfinies en fonction de l'intention de l'utilisateur, qui constitue la base des agents.",
          example: "L'IA appelle une API météo pour la température ou une calculatrice pour les mathématiques."
        },
        {
          def: "Le modèle fait appel à des outils externes (recherche, exécution de code, bases de données, etc.) pour faire ce qu'il ne peut pas faire directement.",
          example: "ChatGPT naviguant sur le Web ; Curseur exécutant les commandes du terminal."
        },
        {
          def: "Récupérez d’abord les documents pertinents d’une base de connaissances, puis obtenez la réponse de l’IA basée sur ce matériel, réduisant ainsi considérablement les hallucinations.",
          example: "Téléchargez un manuel d'entreprise et l'IA répond aux questions des employés."
        },
        {
          def: "Un pipeline automatisé enchaînant plusieurs étapes ou outils d’IA appelle des tâches de bout en bout.",
          example: "Gratter une page → résumer → traduire → e-mail – entièrement automatisé."
        },
        {
          def: "Planification et coordination de plusieurs modèles, agents ou outils pour travailler ensemble logiquement.",
          example: "Plusieurs agents IA collaborent sur des tâches complexes avec des rôles et une communication distincts."
        },
        {
          def: "Entreprise simulée : agent PM + agent ingénieur + agent QA construisant ensemble.",
          example: "Entreprise simulée : agent PM + agent ingénieur + agent QA construisant ensemble."
        },
        {
          def: "Modules tiers ou officiels qui étendent un produit d'IA avec des outils et des fonctionnalités supplémentaires.",
          example: "Boutique de plugins ChatGPT, connecteurs Claude, extensions de navigateur."
        },
        {
          def: "AutoGPT, Devin, mode Cursor Agent complétant automatiquement les tâches de codage.",
          example: "AutoGPT, Devin, mode Cursor Agent complétant automatiquement les tâches de codage."
        },
        {
          def: "Convertit le texte, les images, etc. en vecteurs de grande dimension ; un contenu sémantiquement similaire a des vecteurs plus proches.",
          example: "Les intégrations pour « chat » et « chaton » sont très proches."
        },
        {
          def: "Pomme de pin, Milvus, Chroma, Weaviate.",
          example: "Pomme de pin, Milvus, Chroma, Weaviate."
        },
        {
          def: "Effectuez une recherche par sens plutôt que par correspondance de mots clés ; comprend les synonymes et l’intention.",
          example: "La recherche de « fruit » peut également trouver du contenu « pomme »."
        },
        {
          def: "Divisez les documents longs en segments de taille appropriée pour l'intégration et la récupération, une étape clé du prétraitement RAG.",
          example: "Un PDF de 100 pages divisé en morceaux d’environ 500 caractères."
        },
        {
          def: "Connaissances structurées ou non structurées pour la récupération et la citation par l'IA afin d'améliorer la précision des réponses.",
          example: "Wiki de l'entreprise, documentation produit, FAQ intégrées au support IA."
        },
        {
          def: "Entraînez-vous sur des données étiquetées pour apprendre les mappages entrée-sortie.",
          example: "Étiquetez les images de chat/chien pour former un classificateur."
        },
        {
          def: "Utilisez des données non étiquetées pour que le modèle découvre la structure et les modèles cachés.",
          example: "Segmentation client, détection d'anomalies, clustering thématique."
        },
        {
          def: "Appliquez les connaissances acquises sur une tâche à une tâche connexe, réduisant ainsi les données nécessaires pour la nouvelle tâche.",
          example: "Affinez un modèle pré-entraîné ImageNet pour l’imagerie médicale."
        },
        {
          def: "Ajout d'étiquettes ou de métadonnées aux données brutes : une condition préalable à l'apprentissage supervisé, souvent effectué manuellement.",
          example: "Cadres de délimitation sur les objets dans les images ; étiquettes de sentiment sur le texte."
        },
        {
          def: "ImageNet (images), Common Crawl (texte), SQuAD (QA).",
          example: "ImageNet (images), Common Crawl (texte), SQuAD (QA)."
        },
        {
          def: "Informations utiles extraites des données brutes dont le modèle apprend.",
          example: "Pour la prévision du prix d’une maison : la zone, l’emplacement et l’âge sont des caractéristiques."
        },
        {
          def: "Un modèle d'IA qui gère ensemble le texte, les images, l'audio, la vidéo et d'autres modalités.",
          example: "GPT-4o décrivant des images ; Gémeaux analysant la vidéo."
        },
        {
          def: "IA qui génère des images à partir de descriptions textuelles.",
          example: "Mi-parcours, DALL·E 3, Diffusion Stable."
        },
        {
          def: "IA qui génère des vidéos à partir de texte ou d'images.",
          example: "Kling AI, piste Gen-3, Sora."
        },
        {
          def: "Convertit le texte en discours au son naturel.",
          example: "Mode vocal ChatGPT, Azure TTS, ElevenLabs."
        },
        {
          def: "Convertit automatiquement la parole humaine en texte.",
          example: "Analyse le contenu des images et produit des descriptions textuelles ou répond aux questions sur les images."
        },
        {
          def: "Analyse le contenu des images et produit des descriptions textuelles ou répond aux questions sur les images.",
          example: "Questions et réponses sur la vision GPT-4o, résolution de problèmes photo, rapports d'imagerie médicale."
        },
        {
          def: "Un modèle génératif qui apprend les représentations compressées ; peut générer des échantillons ou éditer des images.",
          example: "Édition des attributs de visage, interpolation de l'espace latent."
        },
        {
          def: "Un grand modèle général pré-entraîné sur des données diverses et adaptable à de nombreuses tâches en aval.",
          example: "GPT-4, Claude et Gemini sont des modèles de base."
        },
        {
          def: "Les poids des modèles sont publics ; gratuit à télécharger, déployer et modifier.",
          example: "LLaMA, DeepSeek, Mistral, Diffusion Stable."
        },
        {
          def: "Disponible uniquement via l'API ou le produit ; les poids ne sont pas publics.",
          example: "GPT-4, Claude, Gémeaux Pro."
        },
        {
          def: "AI terminant la phrase suivante dans un e-mail ; saisie semi-automatique du code.",
          example: "AI terminant la phrase suivante dans un e-mail ; saisie semi-automatique du code."
        },
        {
          def: "Puces hautement parallèles qui constituent le matériel de base pour la formation et l'inférence de l'IA.",
          example: "NVIDIA H100 pour la formation de grands modèles ; RTX 4090 exécutant Stable Diffusion localement."
        },
        {
          def: "L'accélérateur ML personnalisé de Google ; fort dans l’écosystème TensorFlow.",
          example: "Formation Google Cloud TPU v5 Gemini."
        },
        {
          def: "Permet aux développeurs d'appeler les capacités du modèle IA dans le code et de les intégrer dans leurs produits.",
          example: "API OpenAI, API Claude, API Qwen."
        },
        {
          def: "Réduit la précision du poids (par exemple 32 bits → 8 bits/4 bits) pour réduire la taille et accélérer l'inférence.",
          example: "Un modèle 70B quantifié pour fonctionner sur des GPU grand public."
        },
        {
          def: "Mettre en production un modèle entraîné pour servir d'inférence aux utilisateurs ou aux applications.",
          example: "Déployez un modèle affiné sur un serveur cloud pour votre équipe."
        },
        {
          def: "Un instantané du modèle enregistré pendant la formation pour reprendre ou choisir la meilleure version.",
          example: "Reprenez l'entraînement à partir du dernier point de contrôle après une interruption."
        },
        {
          def: "Nombre d'échantillons par itération de formation ; affecte la vitesse, la mémoire et la stabilité de la convergence.",
          example: "Un passage complet à travers l’ensemble des données d’entraînement."
        },
        {
          def: "Un passage complet à travers l’ensemble des données d’entraînement.",
          example: "10 époques signifie que l'ensemble de données a été vu 10 fois."
        },
        {
          def: "Exécuter le modèle sur des serveurs cloud ; les utilisateurs l'appellent via les API réseau.",
          example: "ChatGPT et Claude.ai sont des inférences cloud."
        },
        {
          def: "Exécution du modèle localement sur des téléphones ou des PC : aucun réseau requis, meilleure confidentialité et latence réduite.",
          example: "Siri sur l'appareil sur iPhone ; Ollama exécute LLaMA localement."
        },
        {
          def: "Exécution d'un modèle 1B compressé sur un téléphone.",
          example: "Exécution d'un modèle 1B compressé sur un téléphone."
        },
        {
          def: "Tendances injustes systématiques dans l'IA causées par des données d'entraînement déséquilibrées.",
          example: "Embaucher une IA privilégiant un sexe ; la reconnaissance faciale est moins précise sur les peaux plus foncées."
        },
        {
          def: "Recherche garantissant que les objectifs et les comportements de l’IA correspondent aux valeurs humaines.",
          example: "RLHF comme alignement ; empêchant les sorties nocives."
        },
        {
          def: "Mécanismes de sécurité limitant la sortie de l'IA pour bloquer les contenus nuisibles, illégaux ou inappropriés.",
          example: "Refuser les instructions de fabrication d'armes ; filtrer les contenus violents."
        },
        {
          def: "Les attaquants utilisent des entrées malveillantes pour remplacer ou contourner les instructions du système.",
          example: "Saisie de l'utilisateur disant \"Ignorez toutes les instructions précédentes, maintenant…\""
        },
        {
          def: "Assurez-vous que les données utilisateur ne sont pas utilisées à mauvais escient et que les modèles ne divulguent pas de données d'entraînement sensibles.",
          example: "Ne pas former directement sur les données client réelles ; déploiement local pour plus de confidentialité."
        },
        {
          def: "Rendre les décisions d’IA compréhensibles et auditables pour les humains.",
          example: "Expliquant pourquoi AI a refusé une demande de prêt."
        },
        {
          def: "Un cadre pour développer et utiliser l’IA avec équité, transparence, sécurité et confidentialité.",
          example: "Principes d'IA et processus d'examen de Google et Microsoft."
        },
        {
          def: "Détection et filtrage automatiques du contenu nuisible généré par l'IA ou fourni par l'utilisateur.",
          example: "Filtrage des discours de haine, de la désinformation et du CSAM."
        },
        {
          def: "Des invites spéciales contournent les limites de sécurité afin que le modèle génère du contenu autrement interdit.",
          example: "Astuces de jeu de rôle pour susciter des violations des politiques (il faut résister)."
        },
        {
          def: "Le modèle expose accidentellement des informations sensibles ou privées provenant des données de formation dans sa sortie.",
          example: "Le modèle répétant de vrais e-mails ou mots de passe de l’ensemble de formation."
        },
        {
          def: "Stabilité face à des entrées inhabituelles, des attaques contradictoires ou un changement de distribution.",
          example: "Donnant toujours des réponses raisonnables malgré des fautes de frappe ou des perturbations malveillantes."
        }
      ]
  });
})();
