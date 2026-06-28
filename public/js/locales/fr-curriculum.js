/* FR overlays — curriculum */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('fr', {
    aiOverview: [
        {
          id: "what",
          icon: "🌐",
          color: "var(--accent-teal-dim)",
          tag: "01 · Starting point",
          navLabel: "Qu’est-ce que l’IA ?",
          title: "Qu’est-ce que l’IA ?",
          lead: "L'intelligence artificielle (IA) est le terme générique désignant les technologies qui permettent aux machines de simuler un comportement humain intelligent : trouver des modèles dans les données, comprendre le langage, porter des jugements et générer du texte, des images, du code et de l'audio/vidéo. Il ne s'agit pas d'un produit unique mais d'un ensemble de méthodes et de systèmes d'ingénierie.",
          intro: "Aujourd'hui, lorsque les gens parlent de « IA » dans l'actualité et sur les réseaux sociaux, ils font généralement référence aux grands modèles de langage (LLM) et à l'IA générative (GenAI) : vous tapez un langage naturel et obtenez des réponses, des brouillons ou un travail créatif. La première étape pour comprendre l’IA consiste à séparer trois éléments : le concept technique, la forme du produit et la manière dont vous l’utilisez.",
          subsections: [
            {
              title: "Une analogie quotidienne de 30 secondes",
              text: "Considérez l'IA moderne comme un stagiaire qui a lu une énorme bibliothèque et qui répond instantanément : excellent pour organiser, rédiger, réfléchir et relier des idées, mais sans votre contexte professionnel par défaut, et sans garantie d'être factuellement exact à chaque fois. Vous fixez des objectifs, fournissez du matériel et vérifiez les résultats ; L'IA vous accélère et élargit votre réflexion.",
              items: [
                "Vous fournissez : les objectifs des tâches, les documents de référence, les exigences de format, les normes de qualité",
                "L'IA fournit : des premières ébauches, des alternatives, des explications, des ventilations structurées",
                "Vous vérifiez : la vérification des faits, le jugement logique, les décisions finales et tout ce qui est publié en externe"
              ]
            },
            {
              title: "Trois vagues de développement (connaître l'arc)",
              text: "L’IA n’a pas explosé du jour au lendemain : elle a connu plusieurs changements de paradigme. Connaître l'histoire permet d'expliquer pourquoi l'IA d'aujourd'hui est centrée sur la conversation et la génération.",
              items: [
                "1956-1980 IA symbolique : règles et bases de connaissances pour le raisonnement – ​​interprétables mais difficiles à couvrir une réalité complexe",
                "Années 1990-2010 Apprentissage statistique : apprendre automatiquement des modèles à partir de données ; la recommandation, le contrôle des risques et la reconnaissance vocale ont augmenté",
                "2012-présent Apprentissage profond : réseaux de neurones + calcul et données à grande échelle ; CV, discours, LLM et GenAI",
                "2022+ L'IA générative se généralise : ChatGPT a fait du \"langage naturel conduisant à la sortie\" l'interaction par défaut"
              ]
            }
          ],
          points: [
            {
              label: "Ce que les gens entendent par IA aujourd’hui",
              text: "Principalement des systèmes de machine learning formés sur le big data, notamment les LLM (GPT, Claude, Qwen) et les modèles de génération d'images/vidéos. Ils génèrent une sortie apparemment sémantique en « prédisant le prochain jeton/pixel »."
            },
            {
              label: "Hiérarchie",
              text: "Intelligence artificielle (IA) ⊃ Machine Learning (ML) ⊃ Deep Learning (DL) ⊃ Grands modèles de langage (LLM). Plus à droite = plus spécialisé, mais aussi plus de données, de calcul et d'ingénierie."
            },
            {
              label: "Formation vs inférence",
              text: "La formation consiste à « étudier pour un examen » : ajuster les paramètres du modèle sur des données massives ; coûteux et lent. L'inférence, c'est « passer l'examen » : le modèle génère des résultats à chaque fois que vous le demandez ; c'est l'étape d'utilisation quotidienne."
            },
            {
              label: "ANI contre AGI",
              text: "Aujourd’hui, tous les systèmes commerciaux sont des IA étroites (ANI) : fortes au sein de leur distribution de formation, transfert inter-domaines limité. L’AGI (raisonnement et action de type humain) n’a pas de calendrier convenu : ne traitez pas les produits actuels comme des agents omniscients."
            },
            {
              label: "Discriminatif vs génératif",
              text: "L'IA discriminante classe et juge (détection de spam, contrôle par imagerie médicale, notation des risques) ; l'IA générative crée du contenu (rapports, images, code, voix off). L’enthousiasme du public est aujourd’hui essentiellement génératif."
            },
            {
              label: "Multimodal",
              text: "Hallucination"
            },
            {
              label: "Hallucination",
              text: "L'IA peut inventer en toute confiance des faits, des citations ou des chiffres, car elle optimise pour être « fluides et plausibles » et non « nécessairement corrects ». Vérifiez toujours les chiffres, les réglementations, les scénarios médicaux et contractuels."
            },
            {
              label: "Les humains restent au courant",
              text: "Un déploiement fiable est constitué de « brouillons d'IA + révisions humaines » : l'IA gère la vitesse et la couverture ; les humains gèrent la vérité, la conformité et la responsabilité finale."
            }
          ],
          note: "La conférence de Dartmouth de 1956 a inventé « l’intelligence artificielle ». De « l'écriture de règles » à « l'apprentissage à partir des données » en passant par la « génération de contenu », les frontières de l'IA ne cessent de s'étendre, mais le noyau reste inchangé : elle augmente les capacités humaines, elle n'entraîne pas automatiquement de conséquences. Après cette section, vous devez expliquer ce qu'est l'IA, ce que les gens entendent généralement par IA aujourd'hui et pourquoi vous ne pouvez pas faire aveuglément confiance à chaque résultat."
        },
        {
          id: "capabilities",
          icon: "⚡",
          color: "var(--accent-amber-dim)",
          tag: "02 · Capability map",
          navLabel: "Ce qu'il peut faire",
          title: "Que peut faire l’IA ?",
          lead: "L'IA d'aujourd'hui couvre une part énorme du travail de connaissances, du travail créatif et du travail de processus : de la rédaction d'un e-mail à l'analyse d'un contrat, de la génération d'affiches à la synthèse automatique de rapports quotidiens. La valeur ne vous remplace pas mais compresse le temps de 0 à 60 % afin que vous puissiez juger et peaufiner plus rapidement.",
          intro: "Vous trouverez ci-dessous 8 domaines de capacités. Chacun comprend ce qu’il peut faire, des scénarios typiques et comment collaborer efficacement avec l’IA. N'oubliez pas : l'IA donne des ébauches, vous donnez des normes ; L'IA élargit les idées, vous prenez des décisions.",
          capabilities: [
            {
              image: "assets/capabilities/cap-writing.jpg",
              title: "Écriture et communication",
              desc: "Transformez des idées floues en texte que vous pouvez envoyer, signaler ou publier.",
              detail: "Idéal pour une expression structurée : e-mails, rapports hebdomadaires, propositions, discours, copie de produits, publications sur les réseaux sociaux, traduction et peaufinage du ton. L’IA excelle dans « le squelette d’abord, la chair ensuite ».",
              examples: [
                "Développez 3 puces dans un rapport hebdomadaire de 500 mots mettant en évidence les données et les risques",
                "Réécrire les documents techniques pour les clients (conserver les faits clés)",
                "Générer des variantes de ton formel/décontracté/anglais du même contenu",
                "Notes de réunion : organisez les décisions, les tâches et les propriétaires à partir de notes approximatives"
              ],
              tip: "Donnez à l'audience, à la longueur, au ton et aux faits à inclure : des sauts dans la qualité du résultat."
            },
            {
              image: "assets/capabilities/cap-coding.jpg",
              title: "Programmation et débogage",
              desc: "Accélérez l’écriture, la lecture et la modification du code de bout en bout.",
              detail: "De l'achèvement d'une fonction unique aux refactorisations multi-fichiers, l'IA peut expliquer les erreurs, générer des tests, scripter le traitement des données et transformer les exigences en prototypes exécutables. Les non-programmeurs peuvent également obtenir des pages Web, des petits outils et des scripts d'automatisation via le langage naturel.",
              examples: [
                "Décrire un besoin → récupérer le mini-outil HTML/JS → vérifier dans le navigateur",
                "Coller les journaux d'erreurs → obtenir les causes probables et corriger les correctifs",
                "Transformez le travail répétitif sur les données en un script Python commenté",
                "Transformez le travail répétitif sur les données en un script Python commenté"
              ],
              tip: "Fournir le contexte du projet, les E/S attendues et les contraintes de pile ; lorsque vous modifiez le code, demandez « ce qui a changé et comment vérifier »."
            },
            {
              image: "assets/capabilities/cap-design.jpg",
              title: "Images et conception",
              desc: "Brouillons visuels rapides, exploration de style et ressources créatives.",
              detail: "Générez des illustrations, des affiches, des tableaux d'ambiance de produits, des instructions de logo et des concepts d'interface utilisateur à partir du texte. Idéal pour le brainstorming et la direction visuelle précoce, sans remplacer un système de marque complet.",
              examples: [
                "3 brouillons de style de couverture pour un cours (tech / magazine / minimal)",
                "Concepts d'image de héros du commerce électronique à partir des arguments de vente de produits",
                "Transformez les descriptions de croquis dessinées à la main en art conceptuel de qualité",
                "Regroupez des images sociales avec une palette et un rapport hauteur/largeur cohérents"
              ],
              tip: "Création audio et vidéo"
            },
            {
              image: "assets/capabilities/cap-av.jpg",
              title: "Création audio et vidéo",
              desc: "Texte en vidéo, image en vidéo, voix off IA, clonage de voix, génération de musique, traduction de sous-titres et instructions d'édition simples. Idéal pour les courtes vidéos de têtes parlantes, les introductions de cours et les bobines de concepts publicitaires.",
              detail: "Texte en vidéo, image en vidéo, voix off IA, clonage de voix, génération de musique, traduction de sous-titres et instructions d'édition simples. Idéal pour les courtes vidéos de têtes parlantes, les introductions de cours et les bobines de concepts publicitaires.",
              examples: [
                "Clonez votre voix pour la narration du cours (avec autorisation légale)",
                "Clonez votre voix pour la narration du cours (avec autorisation légale)",
                "Générez une vidéo d'ambiance du produit à partir des descriptions de scènes",
                "Générez automatiquement des sous-titres et des titres bilingues pour les vidéos existantes"
              ],
              tip: "Durée de verrouillage, rapport hauteur/largeur, rythme et audience en premier ; pour la vérification vocale des émotions, des pauses et de la prononciation."
            },
            {
              image: "assets/capabilities/cap-analytics.jpg",
              title: "Analyse et recherche",
              desc: "Transformez les flux d’informations en informations lisibles et en conclusions exploitables.",
              detail: "Aide aux analyses des concurrents, aux résumés de tendances, au regroupement des commentaires, aux cadres d'analyse Excel et aux plans d'analyse d'enquêtes. Fort en synthèse structurée et en génération d’hypothèses ; faible aux statistiques précises non vérifiées.",
              examples: [
                "Téléchargez 20 commentaires d'utilisateurs → priorisez les points faibles et les améliorations",
                "Comparez 3 concurrents → tableau des fonctionnalités et opportunités de différenciation",
                "Transformez la description des données de vente en cadre d'analyse et en suggestions de visualisation",
                "Après de longs rapports, extrayez les risques, les chiffres clés et les éléments à vérifier"
              ],
              tip: "Fournir la matière première, l'objectif d'analyse et le contexte de décision ; demandez d'étiqueter \"confirmé / déduit / nécessite une vérification\"."
            },
            {
              image: "assets/capabilities/cap-agent.jpg",
              title: "Automatisation et agents",
              desc: "Laissez l’IA exécuter des tâches en plusieurs étapes selon des règles, et non seulement répondre à une seule ligne.",
              detail: "Les agents peuvent rechercher, lire/écrire des fichiers, exécuter des scripts, envoyer des notifications et exécuter des planifications Cron. Idéal pour le « résumé quotidien de l'industrie », la « surveillance des modifications apportées aux sites des concurrents » et l'enchaînement d'e-mails, de feuilles de calcul et de documents.",
              examples: [
                "Chaque jour de la semaine à 8h30, résumez automatiquement les actualités de l'industrie et poussez le résumé",
                "Surveillez les sites concurrents ; générer une comparaison lorsque les mises à jour apparaissent",
                "Enchaînez les e-mails, les feuilles de calcul et les documents en un seul flux de préparation à l'approbation",
                "Générer automatiquement un rapport hebdomadaire à partir d'un modèle avec les données du jour"
              ],
              tip: "Pilotez d’abord dans un petit périmètre ; définir des points de contrôle de nouvelle tentative, de journalisation et de révision humaine."
            },
            {
              image: "assets/capabilities/cap-learning.jpg",
              title: "Apprentissage et tutorat",
              desc: "Expliquez les concepts, testez-vous et planifiez des parcours d'apprentissage à votre rythme.",
              detail: "Utilisez la technique de Feynman, le questionnement socratique, les explications superposées et la révision des mauvaises réponses pour diviser les sujets difficiles en étapes digestes. Idéal pour les examens, les nouvelles compétences et l’intégration rapide d’un domaine.",
              examples: [
                "Expliquez Transformer avec une analogie quotidienne, puis 3 questions d'auto-vérification",
                "Personnalisez un plan d'introduction Python de 7 jours pour votre arrière-plan",
                "Générer des variantes de questions pour les points faibles",
                "Générer des variantes de questions pour les points faibles"
              ],
              tip: "Dites à l'IA ce que vous savez déjà, votre niveau cible et votre style préféré (exemples/schémas/exercices)."
            },
            {
              image: "assets/capabilities/cap-search.jpg",
              title: "Recherche et questions-réponses",
              desc: "Des réponses structurées plus rapides que les listes de liens traditionnelles.",
              detail: "La recherche IA synthétise les sources en résumés, comparaisons et pistes de citations ; Document Q&A recherche avec précision vos PDF/notes téléchargés. Idéal pour la recherche, l’apprentissage et la collecte d’informations préalables à la rédaction.",
              examples: [
                "Rechercher une approche technologique → avantages/inconvénients et scénarios adaptés",
                "Téléchargez le contrat/le document → renseignez-vous sur les clauses ou paragraphes spécifiques",
                "Fusionnez 5 articles de l'industrie en un résumé d'une page",
                "Vérifiez rapidement les sources courantes et les controverses autour d’une réclamation"
              ],
              tip: "Demandez des sources et des citations ; recouper les principales conclusions avec au moins deux sources indépendantes."
            }
          ],
          collabTips: {
            title: "Quatre principes pour une collaboration efficace",
            items: [
              {
                label: "Donnez le contexte complet",
                text: "Contexte, objectifs, public, contraintes, contre-exemples : plus le résultat est spécifique, plus il est utilisable."
              },
              {
                label: "Pas à pas, pas d'un seul coup",
                text: "Divisez le travail complexe en plan → brouillon → révision → final ; vérifiez chaque étape avant de continuer."
              },
              {
                label: "Demandez le format et les normes",
                text: "Spécifiez la longueur, la structure, le ton et les champs obligatoires ; évitez les peluches génériques."
              },
              {
                label: "Les humains jugent en dernier",
                text: "Les faits, les chiffres, la conformité et les publications externes doivent être confirmés par des humains."
              }
            ]
          },
          boundaries: {
            title: "Ce avec quoi il a encore du mal ou nécessite de la prudence",
            items: [
              "Données en temps réel de haute précision (cours boursiers de deuxième niveau, données internes non publiées) : nécessitent des flux de données faisant autorité",
              "Des preuves mathématiques complexes et une dérivation rigoureuse peuvent conduire à des erreurs ; vérifier les étapes clés",
              "Jugement professionnel juridique/médical/financier final – l’IA aide uniquement ; ne peut pas remplacer les professionnels agréés",
              "Confidentialité, droits d'auteur, ressemblance dans la génération et la publication : respectez les lois et les politiques de la plateforme",
              "Mémoire à long terme de toutes vos informations privées : les sessions par défaut ne persistent pas ; créez votre propre base de connaissances ou flux de travail"
            ]
          },
          note: "L'IA est la plus puissante sur les tâches avec des modèles clairs, une rédaction rapide et des variantes par lots ; les plus faibles en ce qui concerne l’exactitude factuelle garantie, la responsabilité juridique et les contraintes implicites non déclarées. Traitez-le comme un accélérateur et non comme un pilote automatique. Ensuite : choisir des outils spécifiques."
        },
        {
          id: "tools",
          icon: "🧰",
          color: "rgba(167, 139, 250, 0.15)",
          tag: "03 · Tool landscape",
          navLabel: "Quels outils",
          title: "Quels sont les outils d’IA disponibles ?",
          lead: "Il n’existe pas de « meilleure » IA, seulement la meilleure solution. Vous trouverez ci-dessous la carte des outils principaux de 2026 ; le module Outils de ce site couvre en détail 43 applications.",
          toolGroups: [
            {
              category: "Assistants de discussion",
              emoji: "💬",
              tools: "ChatGPT, Claude, Gémeaux, Qwen, DeepSeek, Kimi, Doubao, Grok",
              use: "Questions/réponses quotidiennes, rédaction, analyse, codage"
            },
            {
              category: "Codage et développement",
              emoji: "👨‍💻",
              tools: "Curseur, Claude Code, Codex CLI, Grok Build, Copilot, Gemini CLI, Aider, Cline, Continue, Zcode, Windsurf, Bolt.new, Amazon Q Developer",
              use: "Agents terminaux, complétion de l'IDE, programmation en binôme Git, constructions de sites en une seule ligne"
            },
            {
              category: "Création d'images",
              emoji: "🎨",
              tools: "Mi-parcours, DALL·E 3, Diffusion Stable, Flux",
              use: "Illustration, design, idéation visuelle"
            },
            {
              category: "Vidéo et audio",
              emoji: "🎵",
              tools: "Piste, Sora, Kling AI, Suno, ElevenLabs, Fish Audio",
              use: "Génération vidéo, musique, voix off et clonage"
            },
            {
              category: "Office productivity",
              emoji: "📋",
              tools: "Microsoft Copilot, Notion AI, Gamma",
              use: "Documents, diapositives, notes de réunion, collaboration"
            },
            {
              category: "Agent automation",
              emoji: "🦞",
              tools: "OpenClaw, Dify, Coze, n8n, Manus",
              use: "Tâches planifiées, orchestration des workflows, robots, exécution autonome"
            },
            {
              category: "Recherche et recherche",
              emoji: "🔎",
              tools: "Perplexité, Metaso AI Search, NotebookLM",
              use: "Recherche, analyse de la littérature, vérification des faits"
            }
          ],
          note: "Débutants : commencez avec une IA de chat (ChatGPT ou Qwen) plus un outil le plus pertinent pour votre travail ; n'installez pas tout en même temps."
        },
        {
          id: "impact",
          icon: "🏙️",
          color: "rgba(251, 113, 133, 0.12)",
          tag: "04 · Real-world impact",
          navLabel: "Domaines clés",
          title: "Où l’IA fait-elle déjà une différence ?",
          lead: "L’IA n’est plus un concept de laboratoire : elle remodèle la façon dont les industries produisent et la façon dont les utilisateurs expérimentent les produits.",
          fields: [
            {
              icon: "🏥",
              name: "Soins de santé",
              cases: "Assistance à l'imagerie médicale, criblage de molécules médicamenteuses, résumé de notes cliniques, robots de questions-réponses sur la santé"
            },
            {
              icon: "🎓",
              name: "Éducation et recherche",
              cases: "Tutorat personnalisé, revue de littérature, analyse de données d'expérimentation, aide à la rédaction de recherches"
            },
            {
              icon: "💰",
              name: "Finances et affaires",
              cases: "Contrôle de la fraude/des risques, service client intelligent, génération de rapports de marché, agrégation de recherche"
            },
            {
              icon: "🛒",
              name: "Vente au détail et commerce électronique",
              cases: "Systèmes de recommandation, support intelligent, génération de descriptions de produits, recherche visuelle"
            },
            {
              icon: "🏭",
              name: "Fabrication et industrie",
              cases: "Contrôle qualité, maintenance prédictive, optimisation de la supply chain, robots industriels"
            },
            {
              icon: "🎬",
              name: "Contenu et médias",
              cases: "Rédaction, montage vidéo, ancres virtuelles, localisation multilingue"
            },
            {
              icon: "⚖️",
              name: "Juridique et gouvernemental",
              cases: "Examen des contrats, recherche de réglementations, questions-réponses gouvernementales, aide à la rédaction de documents"
            },
            {
              icon: "🚗",
              name: "Transports & mobilité",
              cases: "Assistance à la conduite, planification d'itinéraire, R&D sur la conduite autonome, prévision du trafic"
            }
          ],
          note: "La plupart des applications sont « une IA spécialisée + des données de domaine + un examen humain » – et non une IA qui décide seule."
        },
        {
          id: "future",
          icon: "🔭",
          color: "var(--accent-teal-dim)",
          tag: "05 · Looking ahead",
          navLabel: "Perspectives d'avenir",
          title: "Comment l’IA va-t-elle évoluer et changer nos vies ?",
          lead: "Le progrès technique est incertain, mais ces orientations affectent clairement les individus et la société.",
          timeline: [
            {
              period: "Maintenant (2024-2026)",
              items: [
                "Les grands modèles deviennent l'interface par défaut : IA conversationnelle dans la recherche, la bureautique, le codage et la création",
                "Maturité multimodale : un modèle voit des images, entend de l'audio, génère du texte/image/vidéo",
                "Les agents IA passent de « répondre aux questions » à « exécuter des tâches de manière autonome »"
              ]
            },
            {
              period: "Court terme (3 à 5 ans)",
              items: [
                "Assistants personnels d'IA largement répandus : mémorisez vos préférences, votre calendrier et vos projets ; aide proactive",
                "L'IA industrielle est profondément intégrée : l'éducation, la santé et le droit bénéficient de modèles et de flux de travail dédiés.",
                "La collaboration homme-IA devient la norme : ne pas utiliser l’IA peut nuire considérablement à la compétitivité professionnelle"
              ]
            },
            {
              period: "Plus loin (toujours en exploration)",
              items: [
                "L’intelligence générale artificielle (AGI) : si et quand cela reste incertain",
                "Les règles sociales remodelées : les lois sur l'emploi, l'éducation, le droit d'auteur et la vie privée continuent d'évoluer",
                "Les règles sociales remodelées : les lois sur l'emploi, l'éducation, le droit d'auteur et la vie privée continuent d'évoluer"
              ]
            }
          ],
          lifeChanges: [
            {
              icon: "🏠",
              title: "Vie quotidienne",
              text: "Des recommandations plus précises, des maisons plus intelligentes, des barrières linguistiques beaucoup plus réduites"
            },
            {
              icon: "💼",
              title: "Comment nous travaillons",
              text: "Travail répétitif automatisé ; les humains se concentrent davantage sur la créativité, les décisions, les relations et le goût"
            },
            {
              icon: "🧠",
              title: "Apprentissage et croissance",
              text: "Tout le monde bénéficie d'un « tuteur en ligne 24h/24 et 7j/7 », mais la pensée critique compte plus que jamais"
            },
            {
              icon: "🌍",
              title: "Société",
              text: "Un accès plus équitable à l’information – et de nouveaux défis : désinformation, deepfakes"
            }
          ],
          note: "À l'ère de l'IA, les compétences les plus importantes ne consistent pas à « connaître un seul outil », mais à poser les bonnes questions, à juger de la qualité, à apprendre continuellement et à garder un jugement humaniste."
        }
      ],
      fundamentals: [
        {
          icon: "🧠",
          color: "var(--accent-teal-dim)",
          title: "Intelligence artificielle",
          abbr: "AI",
          fullEn: "Intelligence artificielle",
          content: "<p><strong>Intelligence artificielle (IA)</strong> est l'ensemble de technologies qui permettent aux machines de simuler un comportement intelligent : apprentissage, raisonnement, perception, compréhension du langage, planification et création. Inventé lors de la conférence de Dartmouth en 1956, il a connu des vagues d'IA symbolique, d'apprentissage statistique et d'apprentissage profond.</p>\n      <p>AI n'est pas une technique mais un vaste système comprenant <strong>ML (Machine Learning)</strong>, <strong>DL (Deep Learning)</strong>, <strong>NLP (Traitement du langage naturel)</strong>, <strong>CV (Computer Vision)</strong>, robotique, et plus encore. ChatGPT, les voitures autonomes et la reconnaissance faciale sont toutes des applications d'IA que nous touchons quotidiennement.</p>\n      <p><strong>AGI (Intelligence générale artificielle)</strong> : IA capable de gérer n'importe quelle tâche intellectuelle comme un humain – pas encore réalisée ; un objectif de recherche à long terme.</p>\n      <div class=\"analogy\"><strong>Analogie quotidienne :</strong> L'IA est la grande idée de « l'intelligence », comme le « transport » : les voitures, les trains et les avions sont des formes spécifiques.</div>\n      <ul class=\"key-points\"><li>« IA » quotidienne ≈ systèmes d'apprentissage automatique basés sur les données</li><li>AI ⊃ ML ⊃ DL — la portée se rétrécit de gauche à droite</li><li>Juges discriminatifs de l'IA ; l'IA générative crée</li></ul>"
        },
        {
          icon: "📊",
          color: "var(--accent-amber-dim)",
          title: "Apprentissage automatique",
          abbr: "ML",
          fullEn: "Apprentissage automatique",
          content: "<p><strong>Machine Learning (ML)</strong> est le sous-domaine principal de l'IA : les ordinateurs découvrent automatiquement des modèles à partir des données au lieu que les humains écrivent chaque règle if-else. Flux standard : collecter des données → ingénierie des fonctionnalités → entraîner le modèle → évaluer → déployer l'inférence.</p>\n      <p><strong>Trois paradigmes principaux :</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>Apprentissage supervisé</strong> : données étiquetées, apprentissage du mappage entrée → sortie. Utilisé pour la classification (détection de spam), la régression (prix de l'immobilier).</li>\n        <li><strong>Apprentissage non supervisé</strong> : pas d'étiquettes, découvrez la structure des données. Utilisé pour le clustering (segments d'utilisateurs), la réduction de dimensionnalité (compression).</li>\n        <li><strong>Apprentissage par renforcement (RL)</strong> : apprenez les politiques via des signaux de récompense. Utilisé pour le jeu AI (AlphaGo), le contrôle du robot.</li>\n      </ul>\n      <div class=\"analogy\"><strong>Analogie quotidienne :</strong> La programmation traditionnelle est « l'enseignant donne des réponses étape par étape » ; L'apprentissage automatique consiste à \"donner aux étudiants de nombreux exercices et ils en déduisent la méthode.\"</div>"
        },
        {
          icon: "🔬",
          color: "rgba(167, 139, 250, 0.15)",
          title: "Apprentissage profond",
          abbr: "DL",
          fullEn: "Apprentissage profond",
          content: "<p><strong>Deep Learning (DL)</strong> est une branche du ML utilisant des réseaux de neurones multicouches pour extraire automatiquement des caractéristiques hiérarchiques à partir de données brutes. Plus de couches → plus de concepts abstraits appris.</p>\n      <p>En 2012, <strong>AlexNet</strong> a remporté ImageNet de manière décisive, marquant ainsi l'ère de l'apprentissage profond. Des percées ont suivi dans les domaines de la parole (Siri), de la vision (reconnaissance faciale) et du langage (GPT).</p>\n      <p><strong>Ingrédients clés :</strong> données massives + réseaux profonds + calcul puissant (<strong>GPU, unité de traitement graphique</strong>) = performances optimales. La formation d'un grand modèle peut coûter des millions en calcul.</p>\n      <div class=\"analogy\"><strong>Analogie quotidienne :</strong> L'apprentissage superficiel est un tamis ; l'apprentissage profond est constitué de filtres empilés, chacun attrapant une taille de grain différente.</div>"
        },
        {
          icon: "🔗",
          color: "var(--accent-teal-dim)",
          title: "Réseau neuronal",
          abbr: "NN",
          fullEn: "Réseau neuronal",
          content: "<p><strong>Neural Network (NN)</strong> se compose de nombreux nœuds « neurones » traitant les informations en couches. Chaque couche transforme les entrées avec des poids et des biais, passe par des fonctions d'activation et alimente la couche suivante.</p>\n      <p><strong>La rétropropagation (BP)</strong> est l'algorithme d'entraînement de base : comparez la prédiction à la vérité, ajustez les pondérations couche par couche de la sortie à l'entrée pour réduire les erreurs.</p>\n      <p>Architectures communes : <strong>CNN (Convolutional Neural Network)</strong> excelle dans les images ; <strong>RNN (Recurrent Neural Network)</strong> gère les séquences mais a été largement remplacé par Transformers.</p>\n      <div class=\"analogy\"><strong>Analogie quotidienne :</strong> Comme une chaîne d'usine : les matières premières (données) passent par des étapes (couches) et deviennent le produit fini (prédiction).</div>"
        },
        {
          icon: "⚡",
          color: "var(--accent-amber-dim)",
          title: "Architecture du transformateur",
          abbr: "—",
          fullEn: "Architecture du transformateur",
          content: "L'article de <p>Google de 2017 <em>\"L'attention est tout ce dont vous avez besoin\"</em> a présenté l'architecture <strong>Transformer</strong> et transformé la PNL. Son noyau est <strong>Self-Attention</strong> : lors du traitement de chaque mot, calculez les pondérations de pertinence pour tous les autres mots de la phrase.</p>\n      <p><strong>Avantages principaux :</strong></p>\n      <ul class=\"key-points\">\n        <li>Résout les dépendances à long terme : le premier et le dernier mot interagissent directement</li>\n        <li>Très parallèle : entraînement beaucoup plus rapide que les RNN</li>\n        <li>S'adapte bien : modèles plus grands, capacités plus fortes (lois de mise à l'échelle)</li>\n      </ul>\n      <p>Tous les LLM modernes (GPT, Claude, Gemini, LLaMA) utilisent des structures Transformer <strong>decoder</strong> ou <strong>encoder-decoder</strong>.</p>\n      <div class=\"analogy\"><strong>Analogie quotidienne :</strong> En lisant une phrase, vous ne parcourez pas lettre par lettre : vous saisissez toute la ligne et vos yeux se concentrent sur des mots-clés. C'est de l'attention.</div>"
        },
        {
          icon: "💬",
          color: "var(--accent-teal-dim)",
          title: "Grand modèle de langage",
          abbr: "LLM",
          fullEn: "Grand modèle de langage",
          content: "<p><strong>Large Language Model (LLM)</strong> est un très grand réseau de neurones formé sur du texte massif ; son objectif principal est <strong>prédire le prochain jeton</strong>. Grâce à cet objectif simple, il apprend la grammaire, les faits, le raisonnement, le code, la capacité multilingue et bien plus encore.</p>\n      <p><strong>Étapes clés de la formation :</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>Pré-formation</strong> : vaste texte général, apprentissage des bases linguistiques</li>\n        <li><strong>SFT (Supervised Fine-Tuning)</strong> : données de dialogue de haute qualité, apprenez à suivre les instructions</li>\n        <li><strong>RLHF (Reinforcement Learning from Human Feedback)</strong> : les étiquettes de préférences humaines optimisent la qualité et la sécurité des réponses</li>\n      </ul>\n      <p><strong>Limites :</strong> les dates limites de connaissances, les hallucinations, les mathématiques et la logique peuvent toujours échouer. Restez critique et vérifiez les faits clés.</p>\n      <div class=\"analogy\"><strong>Analogie quotidienne :</strong> Un LLM est comme un érudit qui lit toute la bibliothèque Internet : couramment et largement, mais peut se souvenir de certains détails ; vérifier les informations importantes.</div>"
        },
        {
          icon: "🎯",
          color: "rgba(251, 113, 133, 0.12)",
          title: "IA générative",
          abbr: "GenAI",
          fullEn: "Generative Artificial Intelligence",
          content: "<p><strong>Generative AI (GenAI)</strong> crée de nouveaux contenus : texte, images, audio, vidéo, code, modèles 3D. Contrairement à l'IA discriminante <strong></strong> (classification, détection, prédiction), le cœur de GenAI est la « création ». </p>\n      <p><strong>Principaux itinéraires techniques :</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>Modèles autorégressifs</strong> : générer un jeton/pixel par jeton ; par ex. GPT, DALL·E</li>\n        <li><strong>Modèles de diffusion</strong> : débruitage du bruit à l'image ; par ex. Diffusion stable, mi-parcours</li>\n        <li><strong>GAN (Generative Adversarial Network)</strong> : générateur vs discriminateur ; premier courant dominant pour les images</li>\n      </ul>\n      Les modèles <p><strong>Multimodal</strong> comme GPT-4o et Gemini comprennent et génèrent du texte, des images, de l'audio et bien plus encore dans un seul système.</p>\n      <div class=\"analogy\"><strong>Analogie quotidienne :</strong> L'IA discriminante est le « classeur » (bien ou mal) ; L'IA générative est \"l'écrivain + le peintre\" (crée une nouvelle œuvre à partir de zéro).</div>"
        },
        {
          icon: "🌐",
          color: "rgba(167, 139, 250, 0.15)",
          title: "Traitement du langage naturel",
          abbr: "NLP",
          fullEn: "Traitement du langage naturel",
          content: "<p><strong>Traitement du langage naturel (NLP)</strong> est la branche de l'IA qui permet aux ordinateurs de comprendre, générer et traiter le langage humain : traduction automatique, analyse des sentiments, résumé, questions-réponses, reconnaissance vocale, etc.</p>\n      <p><strong>Évolution PNL :</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>Ère des règles</strong> : règles de grammaire et dictionnaires manuscrits</li>\n        <li><strong>Ère statistique</strong> : probabilité à partir de grands corpus (N-gramme)</li>\n        <li><strong>L'ère du Deep Learning</strong> : intégrations Word2Vec → RNN/LSTM → Transformer → LLM</li>\n      </ul>\n      <p>Aujourd'hui, la plupart des tâches de PNL sont « unifiées » par les LLM : un modèle avec différentes invites peut traduire, résumer, classer et générer. C'est le <strong>paradigme PNL unifié</strong>.</p>\n      <div class=\"analogy\"><strong>Analogie quotidienne :</strong> La PNL est le « département linguistique » de l'IA : il apprend aux machines à lire, à écrire, à écouter et à parler ; le LLM est l'étudiant droit A de cette classe.</div>"
        }
      ],
      fundamentalsFigcaption: "En un coup d'œil : l'IA apprend à partir des données, comprend votre question via l'inférence Transformer/LLM et génère des réponses ; les modules ci-dessous sont développés par défaut : cliquez sur les titres pour les réduire.",
      fundamentalsFigAlt: "Comment fonctionne l'IA : formation des données, architecture Transformer, inférence LLM aux réponses et hiérarchie de l'IA contenant ML et DL",
      sectionHeaders: {
        "ai-overview": {
          tag: "Module 1.1 · Start here",
          title: "Aperçu de l'IA",
          desc: "Avant d'approfondir : qu'est-ce que l'IA, ce qu'elle peut faire, quels outils existent, quels domaines elle évolue et où elle va."
        },
        fundamentals: {
          tag: "Module 1.2",
          title: "Comment fonctionne l’IA ?",
          desc: "8 modules fondamentaux : AI → ML → DL → Transformer → LLM → GenAI → NLP."
        },
        knowledge: {
          tag: "Module 1.3",
          title: "100 termes courants d’IA répartis en 9 catégories. Étude de fiche ou glossaire rapide.",
          desc: "100 termes courants d’IA répartis en 9 catégories. Étude de fiche ou glossaire rapide."
        },
        apps: {
          tag: "Module 2.1",
          title: "Choisissez les bons outils",
          desc: "43 applications d'IA grand public par scénario, avec fonctionnalités, audience et conseils de démarrage."
        },
        "prompt-lab": {
          tag: "Module 2.2",
          title: "Laboratoire rapide",
          desc: "Un espace de travail : choisissez un cas → modifiez l'invite → prévisualisez la réponse → allez opérer dans de vrais outils.",
          caseLabel: "Cas pratiques",
          selectCaseBadge: "Choisissez une affaire pour commencer",
          copyPrompt: "Copier l'invite",
          formTitle: "Configuration rapide",
          taskLabel: "Type de tâche",
          roleLabel: "Rôle",
          rolePlaceholder: "par ex. Chef de produit sénior",
          contextLabel: "Arrière-plan",
          contextPlaceholder: "Décrire le scénario, le public, les contraintes…",
          outputLabel: "Résultat attendu",
          outputPlaceholder: "par ex. Un aperçu du PRD de 500 mots",
          toneLabel: "Ton et style",
          tones: [
            "Professionnel & rigoureux",
            "Langage simple",
            "Créatif et exploratoire",
            "Concis et direct"
          ],
          generateBtn: "Générer et simuler",
          simTitle: "Invite et réponse · simulation côte à côte",
          simReset: "Réinitialiser la simulation",
          simEmptyTitle: "La simulation n'a pas démarré",
          simEmptyDesc: "Cliquez sur un cas ci-dessus ou modifiez le panneau de gauche et cliquez sur « Générer et simuler ». L'invite, la réponse de l'IA et le guide de l'étape suivante apparaissent tous dans cette fenêtre.",
          guideTitle: "Simulation terminée · essayez-la dans un outil réel",
          guideToolsLabel: "Outils recommandés :",
          followupPlaceholder: "Suivi, par ex. \"rendez-le plus court\"…",
          sendBtn: "Envoyer",
          simDisclaimer: "Démo de préréglages locaux pour comprendre la structure des invites. Copiez les invites vers les outils recommandés pour obtenir des résultats réels."
        },
        "hands-on": {
          tag: "Module 3.1 · Start here",
          title: "De vrais tutoriels logiciels",
          desc: "Modèles d'invite de scénario"
        },
        practice: {
          tag: "Module 3.2",
          title: "Modèles d'invite de scénario",
          desc: "16 scénarios de travail et d'apprentissage avec les outils recommandés, des flux étape par étape et des modèles d'invite de copie en un clic."
        },
        monetize: {
          tag: "Monetization map",
          title: "Transformez vos compétences en IA en revenus réels",
          desc: "Félicitations : 7 jours d'apprentissage de l'IA terminés !"
        },
        graduation: {
          tag: "Official graduation",
          title: "Félicitations : 7 jours d'apprentissage de l'IA terminés !",
          desc: "Vous avez terminé Cognition → Outils → Pratique → Révision. Passez en revue votre rapport et planifiez les 30 prochains jours.",
          learningFootprint: "Continuez à vous améliorer",
          planTag: "Continuez à vous améliorer",
          planTitle: "Plan d'entraînement de 30 jours",
          planDesc: "Entraînez-vous avec l’IA au moins deux fois par semaine et transformez ce que vous avez appris en véritables habitudes. Sauvegardes automatiques ; exporter à tout moment.",
          focusLegend: "Zones de mise au point (sélection multiple)",
          exportPlan: "Projet d'exportation",
          copyReport: "Copier le rapport de fin d'études",
          saved: "Enregistré automatiquement"
        },
        devices: {
          tag: "Buying map",
          title: "Choisissez les appareils en fonction de vos besoins réels",
          desc: ""
        },
        quiz: {
          tag: "Module 4.1",
          title: "Testez votre apprentissage",
          desc: "100 questions organisées sur la théorie, les termes, les outils et la pratique. Cible 80/100+."
        }
      },
      coachSections: [
        {
          id: "hero",
          msgTemplate: "{name}, je m'appelle {teacher} ! Prêt à commencer votre parcours d’apprentissage de l’IA ?"
        },
        {
          id: "roadmap",
          msgTemplate: "{name}, c'est la carte d'apprentissage. Suivez les quatre phases dans l’ordre : je serai avec vous tout au long du chemin."
        },
        {
          id: "path",
          msgTemplate: "{name}, ceci est votre plan d'apprentissage sur 7 jours. Travaillez les jours dans l'ordre ; marquez le contenu que vous connaissez déjà comme maîtrisé pour le sauter. Je suivrai vos progrès."
        },
        {
          id: "ai-aperçu",
          msgTemplate: "{name}, commencez par la présentation de l'IA ! Comprenez ce qu’est l’IA et ce qu’elle peut faire : les principes vous sembleront beaucoup plus faciles par la suite."
        },
        {
          id: "Qu’est-ce que le surapprentissage ?",
          msgTemplate: "{name}, ces 8 principes fondamentaux constituent la base de la compréhension de chaque outil d'IA."
        },
        {
          id: "connaissance",
          msgTemplate: "{name}, vous n'avez pas besoin de mémoriser les 100 termes à la fois : revenez à tout moment pour rechercher des informations."
        },
        {
          id: "applications",
          msgTemplate: "{name}, choisissez des outils pour vos scénarios : inscrivez-vous et essayez-en un ; c'est le moyen le plus rapide de commencer."
        },
        {
          id: "laboratoire d'invite",
          msgTemplate: "{name}, les invites sont la clé pour piloter l'IA : entraînez-vous à l'écriture structurée ici."
        },
        {
          id: "pratique",
          msgTemplate: "{name}, commencez par de vrais didacticiels de logiciels ! Suivez Cursor, Midjourney et d’autres : rien ne vaut le faire vous-même."
        },
        {
          id: "practice",
          msgTemplate: "{name}, choisissez un scénario lié à votre travail, copiez une invite et essayez-le pour de vrai !"
        },
        {
          id: "quiz",
          msgTemplate: "{name}, dernière ligne droite ! Faites le quiz pour valider vos 7 jours, vous l'avez compris !"
        },
        {
          id: "graduation",
          msgTemplate: "{name}, félicitations pour votre diplôme ! Passez en revue votre rapport d’apprentissage et remplissez votre plan de pratique de 30 jours."
        },
        {
          id: "Lorsque vous souscrivez des contrats Bot de base de connaissances d’entreprise, que doit clarifier l’accord ?",
          msgTemplate: "{name}, envie de monétiser vos compétences ? Voici 30 orientations concrètes : choisissez la meilleure solution et commencez à valider."
        },
        {
          id: "devices",
          msgTemplate: "{name}, lisez ceci avant d'acheter un PC ! Adaptez le système d'exploitation, la RAM et le GPU à votre parcours d'apprentissage : évitez les dépenses excessives."
        }
      ],
      phaseCoachHints: {
        "phase-learn": "{name}, Phase 1 : construisons les fondations cognitives : principes et terminologie.",
        "phase-tools": "{name}, Phase 2 : apprenez à choisir des outils et à rédiger des invites pour que l'IA fonctionne vraiment pour vous.",
        "phase-practice": "{name}, Phase 3 : intégrer l'IA dans des flux de travail réels : la pratique le prouve !",
        "phase-validate": "{name}, Phase 4 : réviser, tester et consolider – continuez à vous améliorer."
      },
      dayCompleteMessages: {
        allComplete: "{name}, les 7 jours sont terminés ! Incroyable : rendez-vous sur Review pour le quiz final 🎉",
        cognitionPhaseEnd: "{name}, Jour 3 terminé ! Phase de fondation terminée. Faites défiler vers le bas pour accéder aux Outils 👏",
        toolsPhaseEnd: "{name}, phase Outils terminée ! Utilisez le guide de transition en bas pour accéder à la pratique.",
        practiceDayComplete: "{name}, journée d'entraînement terminée ! Participez à Review pour le quiz final : sprintez jusqu'à l'arrivée !",
        dayComplete: "{name}, Jour {day}「{title}」complet ! {nextHint}{teacher} est fier de toi ✦",
        nextDayHint: "Demain, c'est le jour {nextDay}「{nextTitle}」."
      },
      personalizationNamed: {
        greeting: "Super, {name} — c'est parti !",
        titleHtml: "{name}, <span class=\"hero-highlight\">maîtrisons AI</span> ensemble",
        readyTitle: "Super, {name} — c'est parti !",
        readyDesc: "A partir d'aujourd'hui, je vais vous guider étape par étape en utilisant \"{name}\".",
        readyQuote: "« {name}, la meilleure façon d'apprendre l'IA est de s'entraîner sur des problèmes réels. »",
        pathBanner: "{name}, complétez les quatre phases dans l’ordre. Chacun a des objectifs et des modules clairs. La progression est enregistrée automatiquement : récupérez-la à tout moment.",
        roadmapHeader: "{name}, complétez les quatre phases dans l’ordre. Chacun a des objectifs et des modules clairs. La progression est enregistrée automatiquement : récupérez-la à tout moment.",
        phaseBannerTemplate: "{name}, {subtitle} · {days} · {descFirst}."
      }
  });
})();
