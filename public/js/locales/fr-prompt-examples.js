/* FR overlays — prompt examples */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('fr', {
  "promptExampleCategories": {
    "全部": "Tous",
    "对话助手": "Assistants de discussion",
    "编程开发": "Codage et développement",
    "图像创作": "Création d'images",
    "视频音频": "Vidéo et audio",
    "办公效率": "Productivité au bureau",
    "Agent 自动化": "Automatisation des agents",
    "搜索研究": "Recherche et recherche"
  },
  "promptExamplesUi": {
    "countShown": "Affichage de {visible}/{total}",
    "emptyHint": "Aucun exemple dans cette catégorie. Essayez une autre balise.",
    "structureLabel": "Structure rapide",
    "scenarioLabel": "Quand utiliser",
    "tipsLabel": "Conseils",
    "copyLabel": "Copier l'invite",
    "frameworkHint": "Utilisez Rôle → Tâche → Contexte → Format → Contraintes (RTFC). Remplacez [placeholders] par vos coordonnées."
  },
  "promptExamples": [
    {
      "id": "chatgpt-longform",
      "difficulty": "Débutant",
      "title": "Rédaction d'articles longs structurés (framework RTFC)",
      "scenario": "Il est nécessaire de produire des comptes publics/blogs/descriptions de produits pouvant être publiés directement pour éviter les déclarations creuses et clichées.",
      "structure": [
        "Rôle",
        "Tâche de tâche",
        "Format",
        "Contraintes"
      ],
      "prompt": "# Rôle\nVous êtes un consultant en stratégie de contenu avec 10 ans d'expérience, spécialisé dans les articles longs sur la technologie B2B.\n\n#Tâche\nSur la base du contexte ci-dessous, rédigez un article de vulgarisation scientifique sur l’apprentissage de l’IA pour les nouveaux arrivants sur le lieu de travail.\n\n#Contexte\n- Lecteurs cibles : employés de bureau âgés de 25 à 35 ans, sans aucune connaissance de base\n- Informations de base : commencez en 7 jours, apprentissage axé sur les tâches, pas besoin d'apprendre les mathématiques au préalable\n- Nombre de mots : 1 200 à 1 500 mots\n- Chaîne : compte officiel WeChat\n\n#Format\n1. 3 options de titre (y compris les sous-titres)\n2. Texte principal : Histoire d'ouverture → 3 malentendus courants → Méthode des 7 jours → Recommandations d'outils → Fin du CTA\n3. 5 hashtags\n\n#Contraintes\n- Ton : amical, précis, moins d'adjectifs\n- Interdits : « Pour résumer » et « avec le développement de l'IA » et autres mots vides de sens\n- 1 exemple exécutable pour chaque argument\n- Ne pas inventer de données, marquer \"à vérifier\" en cas d'incertitude",
      "tips": "Essayez d'abord le même sujet avec des instructions floues, puis utilisez ce modèle pour comparer - la différence réside dans la valeur du mot d'invite. GPT-4o répond mieux à la section Format."
    },
    {
      "id": "claude-contract",
      "difficulty": "Intermédiaire",
      "title": "Revue des risques contractuels (document long)",
      "scenario": "Téléchargez le contrat PDF, identifiez les clauses à haut risque du point de vue de la partie B et fournissez des suggestions de négociation.",
      "structure": [
        "Rôle",
        "Tâche",
        "Structure de sortie",
        "Annotation de vérification"
      ],
      "prompt": "# Rôle\nVous êtes un avocat d'entreprise discret spécialisé dans l'examen des contrats d'approvisionnement SaaS et de services technologiques.\n\n#Tâche\nConsultez le texte intégral du contrat que j’ai téléchargé. Nous sommes la partie B (prestataire de services).\n\n#Sortie\n## 1. Clauses à haut risque (Top 5)\nChaque article contient : Citation originale de l'article | Niveau de risque (élevé/moyen/faible) | Raisons de risque | Modifications de formulation suggérées\n\n## 2. Clauses de risque moyen (3 clauses)\nMême format que ci-dessus\n\n## 3. Liste des priorités de négociation\n| Emplacement des clauses | Risques | Négociable | Suggestions |\n\n## 4. 3 questions que la partie B doit confirmer\n\n#Contraintes\n- Les conclusions juridiques incertaines sont marquées \"nécessite une confirmation par un avocat humain\".\n- N'inventez pas de numéros de loi\n- Veuillez indiquer le numéro du chapitre/page lors de la citation (si le PDF le contient)",
      "tips": "Le contexte Claude Long présente des avantages évidents : télécharger l'intégralité du contrat est plus précis que coller des extraits. N'utilisez pas les comptes publics pour des contrats sensibles."
    },
    {
      "id": "kimi-annual-report",
      "difficulty": "Intermédiaire",
      "title": "Résumé structuré du rapport annuel/prospectus",
      "scenario": "Téléchargez plus de 100 pages de rapports annuels PDF pour extraire rapidement les tendances financières, les risques et les déclarations de gestion.",
      "structure": [
        "Tâche",
        "Portée des données",
        "Schéma de sortie",
        "Citation"
      ],
      "prompt": "Veuillez produire des notes d'analyse structurées basées sur le rapport annuel PDF que j'ai téléchargé :\n\n## 1. Le positionnement de l'entreprise en une phrase\n## 2. Tendance du chiffre d'affaires/bénéfice net au cours des trois dernières années (tableau, indiquer l'unité)\n## 3. 3 faits marquants + 3 risques dans ce numéro (numéro de section/page pour chaque citation)\n## 4. Extraits des déclarations prospectives de la direction (texte original + numéro de page)\n## 5. Liste de questions des investisseurs (5 questions)\n\n#Règles\n- Les numéros doivent provenir de documents ; s'il manque, écrivez \"non divulgué\"\n- Ne spéculez pas sur des données financières qui n'apparaissent pas\n- L'unité de montant est conforme au texte original (10 000 yuans/100 millions de yuans)",
      "tips": "Kimi convient à l'intégralité du PDF ; les chiffres financiers doivent être vérifiés par rapport au texte original, car l’IA peut facilement confondre les unités."
    },
    {
      "id": "deepseek-code-review",
      "difficulty": "Débutant",
      "title": "Révision du code et suggestions de refactorisation",
      "scenario": "Soumettez le code du module et obtenez des avis sur la sécurité, les performances et la lisibilité.",
      "structure": [
        "Rôle",
        "Bloc de code",
        "Dimensions de l'examen",
        "Format de sortie"
      ],
      "prompt": "# Rôle\nVous êtes un ingénieur Python senior spécialisé dans la maintenabilité et la gestion des limites.\n\n#Tâche\nPassez en revue le code suivant et suggérez des améliorations.\n\n```python\n[Collez votre code ici]\n```\n\n# Revoir les dimensions\n1. **Exactement** : erreurs logiques, conditions aux limites, gestion des exceptions\n2. **Sécurité** : injection, informations sensibles, autorisations\n3. **Performance** : goulot d'étranglement évident (je viens de le souligner, pas besoin d'optimiser prématurément)\n4. **Lisibilité** : dénomination, longueur de la fonction, astuces de type\n\n#Sortie\n- Liste des problèmes (Gravité P0/P1/P2)\n- Exemple de code refactorisé (modifier uniquement les pièces nécessaires)\n- 2 suggestions de cas de test Pytest",
      "tips": "DeepSeek est rentable et adapté à la révision quotidienne du code ; il est préférable de joindre le contexte de l'appel et les journaux d'erreurs."
    },
    {
      "id": "cursor-feature",
      "difficulty": "Débutant",
      "title": "Mode agent : développement de fonctions full stack",
      "scenario": "Ajoutez un module fonctionnel complet (collaboration multi-fichiers) au projet existant.",
      "structure": [
        "Contexte",
        "Exigences",
        "Critères d'acceptation",
        "Contraintes"
      ],
      "prompt": "Veuillez implémenter la fonction \"Changement de thème utilisateur\" dans le projet actuel.\n\n## Situation actuelle\n- Pile technologique : HTML + CSS + JS natif (page unique)\n- Existant : disposition d'en-tête, principale, pied de page\n\n## Exigences\n1. Thème sombre/clair, palette de couleurs variable CSS\n2. Bouton de commutation sur le côté droit de l'en-tête, la préférence est d'enregistrer dans localStorage\n3. Pas de scintillement sur le premier écran (lisez localStorage avant le rendu)\n4. Disponible sur les appareils mobiles sans modifier la structure de mise en page existante\n\n## Critères d'acceptation\n- [ ] Après la commutation, le contraste de tout le texte atteint la norme.\n- [ ] Actualiser la page pour conserver la sélection\n- [ ] Liste des fichiers modifiés\n- [ ] Instructions d'utilisation supplémentaires README\n\n## Contraintes\n- Aucun nouveau framework introduit\n- Le code contient des commentaires chinois\n- Instructions sur la façon de tester localement une fois terminé",
      "tips": "Cursor Agent permet d'abord de le planifier puis de l'exécuter ; les changements majeurs nécessitent des instructions de validation étape par étape."
    },
    {
      "id": "copilot-comment-driven",
      "difficulty": "Débutant",
      "title": "Génération de fonctions basée sur les annotations",
      "scenario": "Utilisez des annotations de fonction claires pour déclencher l’achèvement par Copilot de la logique métier et des tests unitaires.",
      "structure": [
        "Commentaire sur les spécifications de fonction",
        "Exemples d'entrée/sortie",
        "Cas extrêmes"
      ],
      "prompt": "// Calculer le montant de la remise sur la commande\n// Règles : moins 10 pour les achats supérieurs à 100, moins 30 pour les achats supérieurs à 200, moins 80 pour les achats supérieurs à 500\n//Entrée : orderAmount (nombre non négatif, unité : yuan)\n// Sortie : { original, discount, final } sont tous des nombres, final >= 0\n// Limite : 0 yuan de réduction sur la commande = 0 ; une entrée négative génère une erreur\n// Exemple : calcDiscount(150) => { original : 150, remise : 10, final : 140 }\nfonction calcDiscount (orderAmount) {\n  // Copilot se termine à partir d'ici\n}",
      "tips": "Copilot répond de la manière la plus stable à l'annotation à quatre éléments « entrée/sortie/exemple/limite » ; les fichiers de test sont placés dans le même répertoire."
    },
    {
      "id": "codex-cli-bugfix",
      "difficulty": "Intermédiaire",
      "title": "Agent Terminal : rapport d'erreurs et réparation en boucle fermée",
      "scenario": "Collez le traçage complet et laissez l'agent localiser, corriger et ajouter des tests.",
      "structure": [
        "Journal des erreurs",
        "Étapes de reproduction",
        "Corriger les exigences",
        "Commande de test"
      ],
      "prompt": "Répertoire du projet : ./my-api (Node.js + Express)\n\n## Question\nL'exécution du test npm échoue avec l'erreur suivante :\n```\n[Coller le traçage complet]\n```\n\n## Récurrence\n1. installation npm\n2. test npm\n\n## Exigences\n1. Expliquez la cause profonde (chinois)\n2. Corrigez le code et conservez le comportement de l'API inchangé\n3. Compléter/mettre à jour les tests pour couvrir cette limite\n4. Donnez la commande de vérification\n\n## Contraintes\n- Ne pas mettre à niveau les dépendances majeures\n- Expliquez quels fichiers seront modifiés avant la modification",
      "tips": "Codex CLI nécessite la pile complète plutôt que la dernière ligne ; permet à l'agent d'exécuter des commandes de test à des fins de vérification."
    },
    {
      "id": "bolt-prototype",
      "difficulty": "Débutant",
      "title": "Prototypes déployables de génération de langage naturel",
      "scenario": "Les non-programmeurs ou les PM valident rapidement les idées de produits et génèrent des prototypes Web avec des liens partageables.",
      "structure": [
        "Vision produit",
        "Pages",
        "Style",
        "Interactions"
      ],
      "prompt": "Créez une application Web « AI Learning Progress Tracker » d'une seule page.\n\n## Pages/sections\n1. Héros : titre + résumé du parcours d'apprentissage sur 7 jours\n2. Cartes de progression : 4 phases (Apprentissage, Outils, Pratique, Révision) avec % terminé\n3. Journal quotidien：zone de texte pour enregistrer des notes (localStorage)\n4. CTA de pied de page : exporter les notes au format .txt\n\n##Style\n- Esthétique dark tech, accent bleu sarcelle\n- Adaptatif, axé sur le mobile\n- Typographie épurée sans empattement\n\n## Technologie\n- React ou Vanille — votre choix\n- Pas de back-end ; stockage local uniquement\n-Structure prête à déployer",
      "tips": "Bolt décrit la structure des pages en anglais comme étant plus stable ; itère « des cibles tactiles plus grandes » et des « couleurs plus simples » après génération."
    },
    {
      "id": "mj-product-shot",
      "difficulty": "Débutant",
      "title": "Images de produits de commerce électronique (mots d'invite en anglais)",
      "scenario": "Générez des images de produits sur fond blanc/scène à utiliser dans des pages de détails ou des créations publicitaires.",
      "structure": [
        "Sujet",
        "Environnement",
        "Éclairage",
        "Style",
        "Paramètres"
      ],
      "prompt": "photo de produit minimaliste d'écouteurs sans fil dans un étui de chargement,\nfond transparent blanc pur, éclairage studio softbox,\ncomposition centrée, ombre subtile sous le produit,\nphotographie commerciale ultra nette, détails 4k,\nnettoyer l'espace négatif pour la superposition de texte --ar 4:5 --style raw --v 6\n\nInvite négative : texte, filigrane, logo, flou, déformé, objets supplémentaires, arrière-plan encombré, mains",
      "tips": "Midjourney est principalement en anglais ; ordre : sujet → environnement → lumière → style → --ar/--v. La composition du texte doit être superposée ultérieurement."
    },
    {
      "id": "dalle-article-cover",
      "difficulty": "Débutant",
      "title": "Image de couverture de l’article (langue naturelle)",
      "scenario": "Utilisez DALL·E pour générer des couvertures de blog/newsletter dans ChatGPT, prenant en charge les descriptions de scènes chinoises.",
      "structure": [
        "Sujet",
        "Humeur",
        "Composition",
        "Rapport hauteur/largeur"
      ],
      "prompt": "Veuillez utiliser DALL·E pour générer une image de couverture d'article :\n\nSujet : Les personnes sur le lieu de travail utilisent l'IA pour améliorer leur efficacité (concept abstrait, pas de logos de marque spécifiques)\nImage : Un professionnel utilise un ordinateur portable dans un bureau moderne et lumineux, avec une douce lueur bleu-vert provenant de l'écran et un léger motif de lignes de réseau neuronal en arrière-plan.\nStyle : illustration plate + légère texture 3D, professionnel, optimiste, pas cartoon\nComposition : laissez 30 % de blanc sur le côté droit pour le texte du titre\nFormat : Horizontal 16:9, adapté aux photos de numéros publics",
      "tips": "DALL·E comprend bien les scènes chinoises ; explique l'espace vide pour éviter que le corps principal ne bloque la zone de titre."
    },
    {
      "id": "sd-ecommerce-white",
      "difficulty": "Intermédiaire",
      "title": "Photo du produit sur fond blanc (mots d'invite positifs et négatifs)",
      "scenario": "Générez par lots des images principales de commerce électronique de style unifié localement/WebUI.",
      "structure": [
        "Invite positive",
        "Invite négative",
        "Paramètres de l'échantillonneur"
      ],
      "prompt": "Positif :\n(photographie du produit : 1.3), bouteille thermos intelligente, finition blanc mat,\nfond blanc transparent, éclairage de studio, ombre douce au sol,\ncentré, mise au point nette, style catalogue commercial, 8k uhd\n\nNégatif :\nlowres, flou, texte, filigrane, logo, mauvaise anatomie, doigts supplémentaires,\ndéformé, artefacts jpeg, encombré, fond coloré, personnes\n\nSuggestion de paramètres : étapes 28 à 35, CFG 7 à 8, taille 1024 × 1024 ou 4:5",
      "tips": "SD utilise la syntaxe de poids (mot-clé : 1.2) ; les graines fixes peuvent unifier le style par lots."
    },
    {
      "id": "kling-product-video",
      "difficulty": "Débutant",
      "title": "Courte vidéo d'affichage du produit sur écran vertical",
      "scenario": "Générez 5 à 10 secondes de séquences surround du produit pour Douyin/Xiaohongshu.",
      "structure": [
        "Type de tir",
        "Action du sujet",
        "Éclairage",
        "Technique"
      ],
      "prompt": "Écran vertical 9h16, une tasse thermos intelligente est posée sur une simple table blanche.\nTir en orbite lentement, la vapeur s'élevant légèrement de l'embouchure de la tasse,\nLumière naturelle douce, texture publicitaire commerciale haut de gamme, arrière-plan propre sans texte,\nLe produit est toujours clair et non flou, avec un mouvement physique réel, 5 à 8 secondes",
      "tips": "Ke Ling répond bien au « emballage lent » et à la « texture commerciale » ; les tracés complexes sont divisés en plusieurs segments pour être générés puis modifiés."
    },
    {
      "id": "runway-image-to-video",
      "difficulty": "Intermédiaire",
      "title": "Vidéo Tusheng : Effets de micro-mouvement du produit",
      "scenario": "Convertissez les images statiques de produits en animations Hero de 4 secondes pour les pages de destination ou les titres d'annonces.",
      "structure": [
        "Description du mouvement",
        "Conserver le sujet",
        "Durée",
        "Qualité"
      ],
      "prompt": "Poussée cinématographique lente vers le produit,\nprofondeur de parallaxe subtile, le produit reste net et non déformé,\nlumière de studio douce avec un léger mouvement d'ombre,\npas d'artefacts de transformation ou de fusion, qualité publicitaire commerciale,\n4 secondes, fin harmonieuse en boucle",
      "tips": "Les vidéos graphiques doivent comporter de petits mouvements ; utiliser la contrainte « le produit reste tranchant » lorsque les bords du produit se déforment facilement."
    },
    {
      "id": "suno-bgm",
      "difficulty": "Débutant",
      "title": "Musique de fond pour la promotion de la marque (musique pure)",
      "scenario": "Générez une musique de fond de 30 à 60 secondes sans paroles pour une vidéo de lancement de produit.",
      "structure": [
        "Genre",
        "Humeur",
        "Instruments",
        "temporisation",
        "Cas d'utilisation"
      ],
      "prompt": "Piste technologique d'entreprise optimiste et instrumentale,\ndes nappes de synthé modernes et des percussions légères, optimistes et épurées,\npas de voix, adapté à la vidéo de lancement de produit AI,\n100-110 BPM, énergie constante sans chutes spectaculaires,\n30 à 45 secondes",
      "tips": "Suno définit « Instrumental + BPM + Scene » ; génère un Extend 2 pistes avec un rythme plus stable."
    },
    {
      "id": "notion-meeting",
      "difficulty": "Débutant",
      "title": "Enregistrement/notes de réunion → procès-verbaux structurés",
      "scenario": "Organisez des notes de réunion libres dans un format de procès-verbal qui peut être synchronisé avec la gestion de projet.",
      "structure": [
        "Saisir",
        "Schéma de sortie",
        "Affectation du propriétaire",
        "Règles"
      ],
      "prompt": "Veuillez organiser les procès-verbaux de réunion originaux suivants en procès-verbaux structurés :\n\n#Format de sortie\n## Informations sur la réunion\n- Thème, date, participants\n\n## Résolutions clés (liste numérotée)\n\n## Liste de tâches\n| Matière | Personne responsable | Date limite | Priorité |\n\n## Problèmes ouverts\n\n## Suggestions de sujets pour la prochaine réunion\n\n# Règles\n- N'inventez pas des choses qui n'ont pas été discutées\n- Les tâches sans personne responsable sont marquées \"à désigner\"\n- Si la date est inconnue, écrivez « à déterminer »\n\n---\n[Coller le procès-verbal de la réunion]",
      "tips": "Notion AI est adaptée au tri secondaire ; enregistrer des mots-clés en temps réel pendant une réunion est plus précis que rattraper par la suite."
    },
    {
      "id": "gamma-pitch",
      "difficulty": "Débutant",
      "title": "Aperçu PPT du roadshow de 10 pages",
      "scenario": "Saisissez un aperçu de votre activité et générez rapidement une première ébauche de diapositives prêtes à être présentées.",
      "structure": [
        "Sujet",
        "Public",
        "Aperçu de la diapositive",
        "Style visuel"
      ],
      "prompt": "Générez un roadshow PPT chinois de 10 pages :\n\nSujet : Plateforme d'apprentissage IA BestWayToLearn.AI\nPublic : Responsables de la formation en entreprise / RH L&D\n\nStructure des pages :\n1. Couverture 2. Problème 3. Solution 4. Démonstration du produit 5. Parcours d'apprentissage\n6. Cas clients 7. Modèle économique 8. Différenciation 9. Jalons 10. Coordonnées\n\nStyle : style dark tech, 3 à 5 puces par page, évitez les gros blocs de texte\nDonnées : vous pouvez d'abord utiliser l'espace réservé [X%] pour marquer les données réelles qui doivent être remplacées.",
      "tips": "Gamma nécessite une structure de page claire ; après la génération, remplacez les données d'espace réservé et insérez des captures d'écran du produit."
    },
    {
      "id": "copilot-excel",
      "difficulty": "Intermédiaire",
      "title": "Analyse de données et formules Excel",
      "scenario": "Utilisez Copilot dans Excel pour analyser les tableaux de ventes et générer des recommandations pivots.",
      "structure": [
        "Description des données",
        "Questions",
        "Sortir",
        "Formule"
      ],
      "prompt": "J'ai un tableau de données de ventes avec des champs : date, région, SKU, quantité, prix unitaire et montant.\nPériode : 12 derniers mois.\n\nVeuillez compléter :\n1. Aperçu des tendances des ventes mensuelles\n2. Quantité des 5 principaux SKU et proportion\n3. Trouvez le mois où les ventes ont diminué de manière anormale et analysez les raisons possibles (sur la base de données et non de spéculations)\n4. Suggérer 2 types de graphiques et définitions d'axes\n5. Donnez un exemple de la formule Excel pour calculer le rapport de chaîne YoY\n\nSi je dois sélectionner une plage de données, veuillez indiquer quelles colonnes doivent être incluses.",
      "tips": "Copilot sélectionne la zone de données dans Excel avant de poser des questions ; faites attention à la conformité de l’entreprise pour les données financières sensibles."
    },
    {
      "id": "openclaw-cron-digest",
      "difficulty": "Intermédiaire",
      "title": "Cron a prévu un briefing de l'industrie",
      "scenario": "Les actualités du secteur sont automatiquement résumées et transmises à Telegram/Slack les matins de la semaine.",
      "structure": [
        "Calendrier",
        "Rôle d'agent",
        "Spécification de sortie",
        "Canal"
      ],
      "prompt": "openclaw cron crée \"0 9 * * 1-5\" \\\n  --name \"Résumé quotidien de l'industrie de l'IA\" \\\n  --tz \"Asie/Shanghai\" \\\n  --session isolée \\\n  --message \"Vous êtes un assistant de recherche dans l'industrie. Résumé des développements importants dans l'industrie de l'IA au cours des dernières 24 heures :\n\n1) 3 titres (1 phrase chacun + lien source)\n2) Impact sur les développeurs\n3) Focus sur 2 variables aujourd’hui\n\nSortie en chinois, dans les 400 mots. Lorsqu’il n’existe pas de source fiable, écrivez « Pas encore de mise à jour majeure » et la fabrication est interdite.\nLes citations doivent être cliquables. \"\\\n  --annoncer \\\n  --télégramme de canal \\\n  --à \"VOTRE_CHANNEL_ID\"",
      "tips": "Tout d’abord, exécutez openclaw cron pour tester manuellement ; écrivez clairement la structure de sortie et interdisez la fabrication dans le message."
    },
    {
      "id": "coze-support-bot",
      "difficulty": "Débutant",
      "title": "Mot d'invite du système de robot du service client",
      "scenario": "Créez un bot FAQ produit dans Coze pour unifier le ton et la stratégie de mise à niveau.",
      "structure": [
        "Personnage",
        "Portée des connaissances",
        "Format de réponse",
        "Escalade"
      ],
      "prompt": "# rôle\nVous êtes l'assistant d'apprentissage officiel de \"BestWayToLearn.AI\", sympathique, professionnel et patient.\n\n#Portée des connaissances\nSeule réponse : structure du cours, parcours d'apprentissage, compte et progression, problèmes techniques courants.\nNe répondez pas : conseils en investissement, sujets médicaux et juridiques et sujets sans rapport avec les produits.\n\n# Format de réponse\n1. Répondez directement en 1 phrase en premier\n2. Liste des étapes (le cas échéant)\n3. Liens connexes ou « Si vous avez besoin de travail manuel, veuillez répondre : Transfert au travail manuel »\n\n# Contraintes\n- En cas de doute, dites \"Je ne suis pas sûr, je suggère de contacter support@example.com\".\n- N'inventez pas de fonctionnalités ou de prix\n- Gardez votre ton concis et évitez de dépasser 200 mots\n\n#Mise à niveau\nL'utilisateur a demandé \"C'est inutile\" deux fois de suite ou il s'agissait d'un litige de paiement → invite à passer à un ordre de travail manuel",
      "tips": "Connectez le document FAQ à la base de connaissances de Coze ; le système indique que les mots gèrent les limites et que la base de connaissances gère les faits."
    },
    {
      "id": "dify-rag-agent",
      "difficulty": "Intermédiaire",
      "title": "Base de connaissances d'entreprise Questions et réponses RAG",
      "scenario": "Créez un agent de questions et réponses basé sur des documents internes, et les réponses doivent contenir des fragments de référence.",
      "structure": [
        "Invite système",
        "Règles de récupération",
        "Format de citation",
        "Refus"
      ],
      "prompt": "# Système\nVous êtes l'assistant de la base de connaissances interne de l'entreprise. Des réponses basées uniquement sur des fragments de documents récupérés, sans s'appuyer sur des connaissances pré-formées pour concocter les politiques de l'entreprise.\n\n# Règles de réponse\n1. Donnez d'abord une réponse directe (2 à 4 phrases)\n2. Section « Base » : répertoriez le nom du document cité + résumé des paragraphes pertinents\n3. Si les résultats de la recherche ne suffisent pas à répondre à la question, répondez : « Les réglementations pertinentes ne sont pas trouvées dans la base de connaissances actuelle. Il est recommandé de contacter [le service] ou de soumettre un bon de travail.\n\n#format\n- Utiliser Markdown\n- Format de citation : [Nom du document § Chapitre]\n- Les dates/numéros concernés doivent être cohérents avec le texte original\n\n# Interdit\n- Spéculer des politiques qui ne sont pas écrites dans la base de connaissances\n- Donner une conclusion finale sur les aspects juridiques/conformité",
      "tips": "Il est recommandé que la segmentation de la base de connaissances Dify soit de 500 à 800 mots/bloc ; l'ensemble de tests est préparé avec 20 questions réelles d'employés pour acceptation."
    },
    {
      "id": "perplexity-competitor",
      "difficulty": "Débutant",
      "title": "Étude d'une page sur les produits compétitifs et le marché",
      "scenario": "Obtenez rapidement des comparaisons de produits compétitifs avec des références pour des discussions internes ou des réunions de sélection.",
      "structure": [
        "Portée",
        "Dimensions de comparaison",
        "Sortir",
        "Règles sources"
      ],
      "prompt": "Étudiez le marché des « IDE de programmation IA » en 2026, en vous concentrant sur la comparaison de Cursor, Windsurf et GitHub Copilot.\n\nVeuillez produire une page en chinois :\n1. Aperçu du marché (2 paragraphes)\n2. Tableau comparatif : positionnement | prix | différences fondamentales | utilisateurs cibles\n3. 3 suggestions de sélection (par type d'utilisateur)\n4. Toutes les conclusions clés sont accompagnées de numéros de référence et de liens sources.\n\nRègles : Les prix sont soumis au site officiel ; les données sans sources officielles sont marquées « à vérifier ».",
      "tips": "L'avantage de Perplexité réside dans la citation ; les prix et les fonctions doivent encore être confirmés sur le site officiel."
    },
    {
      "id": "notebooklm-papers",
      "difficulty": "Intermédiaire",
      "title": "Notes comparatives sur plusieurs articles",
      "scenario": "Téléchargez 3 articles connexes et générez un tableau de comparaison et des suggestions d'ordre de lecture.",
      "structure": [
        "Portée du téléchargement",
        "Champs de comparaison",
        "Recommandation",
        "Limites"
      ],
      "prompt": "(Envoyer après avoir téléchargé 3 PDF)\n\nVeuillez comparer ces trois articles et résultats :\n\n## Tableau comparatif\n| Thèse | Questions de recherche | Ensemble de données | Méthodes | Principales conclusions | Limites |\n\n## Similitudes et différences dans les méthodes (300 mots)\n\n## Ordre de lecture suggéré pour les débutants\nExpliquez quel article lire en premier et pourquoi\n\n## 3 questions de recherche à poser\n\nRègles : Basés uniquement sur les documents téléchargés, les résultats expérimentaux qui n'apparaissent pas ne seront pas complétés.",
      "tips": "NotebookLM est un téléchargement de contenu en lecture seule ; pour les citations académiques, veuillez vous référer au DOI original."
    },
    {
      "id": "metaso-academic",
      "difficulty": "Débutant",
      "title": "Point de départ d’une revue de la littérature sur le modèle académique",
      "scenario": "Utilisez le mode de recherche académique pour localiser rapidement les articles de base et examiner les entrées dans le domaine.",
      "structure": [
        "Question de recherche",
        "Plage de temps",
        "Sortir",
        "Prochaines étapes"
      ],
      "prompt": "Utiliser le mode de recherche académique :\n\nQuestion de recherche : Quelles sont les méthodes pour évaluer la fiabilité des grands modèles de langage dans la génération de code ?\nPériode : 2023-2026\nLangue : les sources académiques chinoises et anglaises sont acceptées\n\nVeuillez afficher :\n1. 5 articles très cités dans ce domaine (titre, auteur, année, contribution d'une phrase)\n2. Recommandation de 2 articles de revue/recherche\n3. Noms et définitions de 3 indicateurs d'évaluation couramment utilisés\n4. Mots-clés de recherche supplémentaires suggérés (chinois et anglais)\n\nChaque article a une source cliquable. S’il n’est pas trouvé, cela sera clairement indiqué.",
      "tips": "Le mode académique de la tour secrète convient aux utilisateurs chinois ; pour les articles importants, il est recommandé de recouper les citations sur Google Scholar."
    }
  ]
});
})();
