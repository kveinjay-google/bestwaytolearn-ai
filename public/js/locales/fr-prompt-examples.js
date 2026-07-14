/* FR overlays — prompt-examples */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("fr", {
  "promptExampleCategories": {
    "全部": "Tous",
    "对话助手": "Assistant de conversation",
    "编程开发": "Recherche de recherche",
    "图像创作": "création d'images",
    "视频音频": "audio vidéo",
    "办公效率": "Efficacité du bureau",
    "Agent 自动化": "Automatisation des agents",
    "搜索研究": "Recherche de recherche"
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
      "title": "Résumé structuré du rapport annuel/prospectus",
      "scenario": "Téléchargez plus de 100 pages de rapports annuels PDF pour extraire rapidement les tendances financières, les risques et les déclarations de gestion.",
      "structure": [
        "Tâche",
        "Portée des données",
        "Schéma de sortie",
        "recherche communautaire"
      ],
      "prompt": "Veuillez produire des notes d'analyse structurées basées sur le rapport annuel PDF que j'ai téléchargé :\n\n## 1. Le positionnement de l'entreprise en une phrase\n## 2. Tendance du chiffre d'affaires/bénéfice net au cours des trois dernières années (tableau, indiquer l'unité)\n## 3. 3 faits marquants + 3 risques dans ce numéro (numéro de section/page pour chaque citation)\n## 4. Extraits des déclarations prospectives de la direction (texte original + numéro de page)\n## 5. Liste de questions des investisseurs (5 questions)\n\n#Règles\n- Les numéros doivent provenir de documents ; s'il manque, écrivez \"non divulgué\"\n- Ne spéculez pas sur des données financières qui n'apparaissent pas\n- L'unité de montant est conforme au texte original (10 000 yuans/100 millions de yuans)",
      "tips": "Kimi convient à l'intégralité du PDF ; les chiffres financiers doivent être vérifiés par rapport au texte original, car l’IA peut facilement confondre les unités."
    },
    {
      "id": "deepseek-code-review",
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
      "title": "Mode agent : développement de fonctions full stack",
      "scenario": "Mot d'invite du système de robot du service client",
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
      "title": "Agent Terminal : rapport d'erreurs et réparation en boucle fermée",
      "scenario": "Calendrier: les États membres transposeront leurs lois nationales d’ici fin 2026",
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
      "title": "Image de couverture de l’article (langue naturelle)",
      "scenario": "Utilisez DALL·E dans ChatGPT pour générer une couverture de blog/newsletter, prenant en charge les descriptions de scènes chinoises.",
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
      "title": "Courte vidéo d'affichage du produit sur écran vertical",
      "scenario": "Générez 5 à 10 secondes de séquences surround du produit pour Douyin/Xiaohongshu.",
      "structure": [
        "Type de tir",
        "Action du sujet",
        "Éclairage",
        "Technique"
      ],
      "prompt": "Écran vertical 9h16, une tasse thermos intelligente est posée sur une simple table blanche.\nTir en orbite lentement, la vapeur s'élevant légèrement de l'embouchure de la tasse,\nLumière naturelle douce, texture publicitaire commerciale haut de gamme, arrière-plan propre sans texte,\nLe produit est toujours clair et non flou, avec un mouvement physique réel, 5 à 8 secondes",
      "tips": "Ke Ling réagit bien au « emballage lent » et à la « texture publicitaire commerciale » ; les tracés complexes sont divisés en plusieurs segments pour être générés puis modifiés."
    },
    {
      "id": "runway-image-to-video",
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
      "title": "Musique de fond pour la promotion de la marque (musique pure)",
      "scenario": "Générez une musique de fond de 30 à 60 secondes sans paroles pour une vidéo de lancement de produit.",
      "structure": [
        "Genre",
        "Humeur",
        "Instruments",
        "temporisation",
        "Cas d'utilisation"
      ],
      "prompt": "Piste technologique d'entreprise instrumentale et optimiste,\ndes nappes de synthé modernes et des percussions légères, optimistes et épurées,\npas de voix, adapté à la vidéo de lancement de produit AI,\n100-110 BPM, énergie constante sans chutes spectaculaires,\n30 à 45 secondes",
      "tips": "Suno définit « Instrumental + BPM + Scene » ; génère un Extend 2 pistes avec un rythme plus stable."
    },
    {
      "id": "notion-meeting",
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
      "title": "Cron a prévu un briefing de l'industrie",
      "scenario": "Windsurf Cascade 2.0 introduit des « fichiers mémoire » pour le contexte de projet inter-sessions",
      "structure": [
        "Calendrier",
        "Rôle d'agent",
        "Spécification de sortie",
        "Canal"
      ],
      "prompt": "openclaw cron crée \"0 9 * * 1-5\" \\\n  --name \"Résumé quotidien de l'industrie de l'IA\" \\\n  --tz \"Asie/Shanghai\" \\\n  --session isolée\\\n  --message \"Vous êtes un assistant de recherche dans l'industrie. Résumé des développements importants dans l'industrie de l'IA au cours des dernières 24 heures :\n\n1) 3 titres (1 phrase chacun + lien source)\n2) Impact sur les développeurs\n3) Focus sur 2 variables aujourd’hui\n\nSortie en chinois, dans les 400 mots. Lorsqu’il n’existe pas de source fiable, écrivez « Pas encore de mise à jour majeure » et la fabrication est interdite.\nLes citations doivent être cliquables. \"\\\n  --annoncer \\\n  --télégramme de canal \\\n  --à \"VOTRE_CHANNEL_ID\"",
      "tips": "Tout d’abord, exécutez openclaw cron pour tester manuellement ; écrivez clairement la structure de sortie et interdisez la fabrication dans le message."
    },
    {
      "id": "coze-support-bot",
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
      "title": "Base de connaissances d'entreprise Questions et réponses RAG",
      "scenario": "Créez un agent de questions et réponses basé sur des documents internes, et les réponses doivent contenir des fragments de référence.",
      "structure": [
        "Invite système",
        "Règles de récupération",
        "Format de citation",
        "Refus"
      ],
      "prompt": "#Système\nVous êtes l'assistant de la base de connaissances interne de l'entreprise. Des réponses basées uniquement sur des fragments de documents récupérés, sans s'appuyer sur des connaissances pré-formées pour concocter les politiques de l'entreprise.\n\n# Règles de réponse\n1. Donnez d'abord une réponse directe (2 à 4 phrases)\n2. Section « Base » : répertoriez le nom du document cité + résumé des paragraphes pertinents\n3. Si les résultats de la recherche ne suffisent pas à répondre à la question, répondez : « Les réglementations pertinentes ne sont pas trouvées dans la base de connaissances actuelle. Il est recommandé de contacter [le service] ou de soumettre un bon de travail.\n\n#format\n- Utiliser Markdown\n- Format de citation : [Nom du document § Chapitre]\n- Les dates/numéros concernés doivent être cohérents avec le texte original\n\n# Interdit\n- Spéculer des politiques qui ne sont pas écrites dans la base de connaissances\n- Donner une conclusion finale sur les aspects juridiques/conformité",
      "tips": "Il est recommandé que la segmentation de la base de connaissances Dify soit de 500 à 800 mots/bloc ; l'ensemble de tests est préparé avec 20 questions réelles d'employés pour acceptation."
    },
    {
      "id": "perplexity-competitor",
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
      "title": "Téléchargez plus de 100 pages de rapports annuels PDF pour extraire rapidement les tendances financières, les risques et les déclarations de gestion.",
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
      "title": "Point de départ d’une revue de la littérature sur le modèle académique",
      "scenario": "Utilisez le mode de recherche académique pour localiser rapidement les articles de base et examiner les entrées dans le domaine.",
      "structure": [
        "Question de recherche",
        "Plage de temps",
        "Sortir",
        "Prochaines étapes"
      ],
      "prompt": "Utiliser le mode de recherche académique :\n\nQuestion de recherche : Quelles sont les méthodes pour évaluer la fiabilité des grands modèles de langage dans la génération de code ?\nPériode : 2023-2026\nLangue : les sources académiques chinoises et anglaises sont acceptées\n\nVeuillez afficher :\n1. 5 articles très cités dans ce domaine (titre, auteur, année, contribution d'une phrase)\n2. Recommandation de 2 articles de revue/recherche\n3. Noms et définitions de 3 indicateurs d'évaluation couramment utilisés\n4. Mots-clés de recherche supplémentaires suggérés (chinois et anglais)\n\nChaque article a une source cliquable. S’il n’est pas trouvé, cela sera clairement indiqué.",
      "tips": "Le mode académique de la tour secrète convient aux utilisateurs chinois ; pour les articles importants, il est recommandé de vérifier les citations sur Google Scholar."
    },
    {
      "id": "gemini-lesson-plan",
      "title": "Génération d'un plan d'apprentissage de l'IA sur 7 jours",
      "scenario": "Générez un parcours d'apprentissage exécutable pour la semaine en fonction du temps et des objectifs personnels.",
      "structure": [
        "Profil",
        "But",
        "Contraintes",
        "Sortir"
      ],
      "prompt": "# Profil\nLes employés de bureau peuvent étudier 45 minutes par jour sans aucune connaissance de base.\n\n#Objectif\nMaîtrisez-le en 7 jours : conversation de base ChatGPT + Curseur pour rédiger une petite page Web.\n\n#Contraintes\n- ≤ 3 tâches par jour, chaque tâche peut être complétée en 15 minutes\n- Aucun calcul/essai requis\n- Sortie chinoise\n\n#Sortie\nRésultats par jour : Objectifs d'apprentissage | Tâches spécifiques | Critères d'acceptation | Types de liens d'outils recommandés",
      "tips": "Rendez les « critères d'acceptation » spécifiques et évitez que l'IA ne publie une vague liste de tâches."
    },
    {
      "id": "grok-news-brief",
      "title": "Un aperçu rapide des articles chauds de la plate-forme X sur l'IA",
      "scenario": "Un bref résumé des sujets d’actualité et des controverses d’aujourd’hui dans le domaine de l’IA sur X.",
      "structure": [
        "Portée",
        "Temps",
        "Sortir",
        "Neutralité"
      ],
      "prompt": "Résumé des discussions populaires liées à AI/LLM/Agent sur la plateforme X au cours des dernières 24 heures :\n\n1. 5 sujets les plus chauds (résumé de 2 phrases chacun)\n2. Comparaison de 2 points de vue controversés (1 phrase pour chaque côté)\n3. 1 suggestion de type de lien qui mérite d'être suivie\n\nRègles : marquer l'incertitude ; ne créez pas un nombre spécifique de likes ; sortie en chinois.",
      "tips": "Grok peut accéder aux données X en temps réel ; il est tout de même recommandé de cliquer sur le texte original pour vérifier avant de publier."
    },
    {
      "id": "doubao-study-buddy",
      "title": "Explication du concept + quiz",
      "scenario": "Lorsque vous apprenez un nouveau concept, expliquez-le d'abord puis posez 3 questions pour le consolider.",
      "structure": [
        "Concept",
        "Public",
        "Enseigner puis faire un quiz",
        "Retour"
      ],
      "prompt": "Je veux apprendre \"RAG (Retrieval Augmented Generation)\".\n\nS'il vous plaît :\n1. Utiliser des analogies pour expliquer les bases (≤200 mots)\n2. Donnez un exemple réaliste\n3. Posez 3 questions à choix multiples (avec réponses et analyse)\n4. Si je ne réponds pas correctement, réessayez dans un langage plus simple.\n\nTon : patient, chinois, pas de jargon.",
      "tips": "Publiez les réponses aux mauvaises questions et laissez Doubao s'attaquer aux points faibles de manière ciblée."
    },
    {
      "id": "windsurf-cascade-refactor",
      "title": "Reconstruction multi-fichiers en cascade",
      "scenario": "Renommez uniformément les API et mettez à jour les appelants dans les projets multi-fichiers.",
      "structure": [
        "Portée",
        "Planifiez d’abord",
        "Sécurité",
        "Vérification"
      ],
      "prompt": "Veuillez renommer « fetchUserProfile » en « getUserProfile » dans le référentiel actuel :\n\n1. Listez d’abord les documents qui seront modifiés et les risques\n2. Effectuez ensuite le renommage (y compris l'import/export)\n3. Mettre à jour les tests associés et les définitions de types\n4. Exécutez le test et rapportez les résultats\n\nContraintes : Ne pas modifier la logique non pertinente ; expliquer la plage de différence à chaque étape.",
      "tips": "Windsurf memory.md peut être écrit dans la « convention de dénomination API de ce projet » pour éviter des explications répétées."
    },
    {
      "id": "replit-fullstack",
      "title": "Application Todo à pile complète Repli Agent",
      "scenario": "Générez et déployez une application Todo avec un front-end et un back-end séparés à partir de zéro.",
      "structure": [
        "Empiler",
        "Caractéristiques",
        "API",
        "Déployer"
      ],
      "prompt": "Créez l'API Todo avec Node.js + Express + SQLite, front end React :\n\nFonctions : Ajouter, supprimer, modifier, vérifier, état d'achèvement, filtrer par date\nInterface utilisateur : simple et sombre, adaptée aux appareils mobiles\n\nLivraison :\n- API REST back-end + page front-end\n- description du script package.json\n- Étapes de déploiement de réplication\n- Annotation chinoise",
      "tips": "Laissez l'agent générer uniquement l'API en premier, puis générer le frontal après acceptation, afin que la marge d'erreur soit plus petite."
    },
    {
      "id": "claude-code-terminal",
      "title": "Dépannage du terminal : analyse des défaillances du CI",
      "scenario": "Collez le journal CI, localisez la cause de l'échec et fournissez un plan de relations publiques correctif.",
      "structure": [
        "Coller le journal",
        "Hypothèse",
        "Plan de correction",
        "Test"
      ],
      "prompt": "Voici le journal des échecs des actions GitHub :\n\n```\n[Coller le journal CI]\n```\n\nS'il vous plaît :\n1. Indiquez la cause profonde la plus probable (3 éléments par ordre de probabilité)\n2. Donnez des idées pour une différence de réparation minimale\n3. Commande de reproduction locale recommandée\n4. Si vous devez modifier le test, expliquez-en la raison\n\nNe refactorisez pas en profondeur.",
      "tips": "80 lignes avant et après l’étape d’interception du journal ayant échoué suffisent. S'il est trop long, cela perturbera le jugement."
    },
    {
      "id": "flux-product-photo",
      "title": "Prise de vue en studio pour les produits e-commerce Flux",
      "scenario": "Générez des images de produits sur fond blanc pour les images principales ou les premières ébauches de créations publicitaires.",
      "structure": [
        "Sujet",
        "Éclairage",
        "Arrière-plan",
        "Technique"
      ],
      "prompt": "photographie de produits professionnelle, écouteurs Bluetooth sans fil dans un étui de chargement, fond blanc pur sans couture, éclairage de studio doux, ombre au sol subtile, composition centrée, ultra nette, style e-commerce commercial, pas de texte, pas de filigrane --ar 1:1",
      "tips": "Les détails du produit sont sujets à des photos réelles ; Les images IA conviennent à la composition et à la référence de lumière et d’ombre."
    },
    {
      "id": "ideogram-poster-text",
      "title": "Disposition du titre de l'affiche de l'idéogramme",
      "scenario": "Générez des affiches d'événements avec des titres chinois précis.",
      "structure": [
        "Copie",
        "Mise en page",
        "Style",
        "Négatif"
      ],
      "prompt": "affiche de l'événement, texte du titre exactement : \"AI Learner Conference 2026\", sous-titre : \"Camp pratique de 7 jours\", style de conférence technologique moderne, bleu sarcelle et bleu marine foncé, typographie sans empattement audacieuse, mise en page épurée, haute lisibilité, pas de texte aléatoire supplémentaire",
      "tips": "Le rendu du texte de l'idéogramme est puissant ; vérifiez toujours les fautes de frappe et les caractères supplémentaires."
    },
    {
      "id": "chatgpt-image-restyle",
      "title": "Migration du style d'image ChatGPT",
      "scenario": "Téléchargez des photos et convertissez-les en styles d'illustration/aquarelle pour des avatars ou des illustrations.",
      "structure": [
        "Télécharger",
        "Cible de style",
        "Conserver son identité",
        "Sortir"
      ],
      "prompt": "Convertissez les photos téléchargées en style d'illustration vectorielle plate :\n- Préserver les caractéristiques reconnaissables des personnages\n-Couleur couleur: vert + bleu foncé\n- Fond de couleur unie simplifié\n- Convient pour une utilisation comme avatar de site Web\n- N'ajoutez pas de texte",
      "tips": "Étape par étape : \"Simplifier l'arrière-plan\" d'abord, puis \"Changer le style d'illustration\" est plus stable que de bien faire les choses d'un seul coup."
    },
    {
      "id": "leonardo-ip-series",
      "title": "Photos de la série de personnages de Leonardo",
      "scenario": "Correction de l'IP de la mascotte et des illustrations de scènes de cours générées par lots.",
      "structure": [
        "Référence",
        "Scènes",
        "Demander un tableau de comparaison des sorties + un devis",
        "Compétence d'automatisation n8n : générer RSS → résumé IA → e-mail/Feishu et autres flux de travail JSON pour accélérer la construction de pipelines d'opérations."
      ],
      "prompt": "mascotte vectorielle plate \"professeur de robot bleu\", scènes : tableau blanc de classe, bureau de lecture, abandonner le pouce en l'air, conception de personnage cohérente, palette bleu sarcelle et blanche, expression amicale, pas de texte - référence de personnage activée",
      "tips": "Après avoir téléchargé 4 images de référence et ouvert Character Reference, la cohérence est considérablement améliorée."
    },
    {
      "id": "capcut-script-to-video",
      "title": "Scénario de script CapCut AI",
      "scenario": "Divisez le script du didacticiel en scénarios de storyboard et de sous-titres.",
      "structure": [
        "Scénario",
        "Liste des plans",
        "Durée",
        "Légendes"
      ],
      "prompt": "Divisez le script de didacticiel suivant de 60 secondes dans un storyboard CapCut :\n\n| Numéro de miroir | Description de l'écran | Sous-titres de narration | Durée (secondes) |\n\nScénario :\n[Coller le script]\n\nExigences : 3 à 8 secondes par tir ; sous-titres de créations orales ; marqué B-roll recommandé.",
      "tips": "Après la génération, utilisez « Image to Film » dans CapCut ou alignez manuellement la chronologie."
    },
    {
      "id": "pika-extend-clip",
      "title": "Extension et boucle vidéo Pika",
      "scenario": "Prolongez 3 secondes de séquence dans une vidéo d'arrière-plan en boucle de 8 secondes.",
      "structure": [
        "Source",
        "Mouvement",
        "Boucle",
        "Qualité"
      ],
      "prompt": "étendre la vidéo en douceur, insertion subtile de la caméra, garder le sujet centré, boucle transparente pour l'arrière-plan du héros du site Web, éclairage cinématographique, pas de scintillement, 8 secondes",
      "tips": "L'extension ne doit pas être trop grande ; choisissez un objectif avec un petit mouvement pour l’arrière-plan en boucle."
    },
    {
      "id": "elevenlabs-voiceover",
      "title": "Narration du didacticiel ElevenLabs",
      "scenario": "Convertissez les documents du didacticiel en audio de narration chinoise naturelle.",
      "structure": [
        "Personnalité vocale",
        "Les informations d'identification AWS doivent être configurées (variables d'environnement ou ~/.aws/credentials)",
        "Prononciation",
        "Sortir"
      ],
      "prompt": "Voix : narrateur chaleureux en mandarin professionnel, rythme moyen, énonciation claire.\n\nLisez naturellement le script du didacticiel suivant. Faites une pause de 0,5 s aux sauts de paragraphe. Insistez légèrement sur les noms d’outils.\n\n[Coller le script]",
      "tips": "Les termes professionnels peuvent être accompagnés d'une ligne « indice de prononciation » pour réduire les erreurs de prononciation TTS."
    },
    {
      "id": "heygen-avatar-intro",
      "title": "Ouverture du cours HeyGen Digital Human",
      "scenario": "Générez une vidéo d'introduction au cours de 30 secondes mettant en vedette un humain numérique.",
      "structure": [
        "Avatar",
        "Scénario",
        "Tonifier",
        "Appel à l'action"
      ],
      "prompt": "Scénario (années 30, mandarin) :\n\nBonjour à tous, bienvenue au \"Camp pratique de 7 jours sur les outils IA\".\nJe suis votre guide d'étude.\nCette semaine, vous apprendrez : utilisez ChatGPT pour rédiger des textes, utilisez le curseur pour créer des pages Web et utilisez l'automatisation pour gagner du temps.\nPassons maintenant à la première leçon : êtes-vous prêt ?\n\nTon : amical, confiant, léger sourire. Pas de battage publicitaire.",
      "tips": "Le script est contrôlé à 80-100 mots/30 secondes ; affiner les marques de pause après la prévisualisation."
    },
    {
      "id": "feishu-competitor-table",
      "title": "Tableau de comparaison des produits concurrents de Feishu AI",
      "scenario": "Générez un tableau multidimensionnel partageable de comparaisons de produits concurrents à partir de puces.",
      "structure": [
        "Balles",
        "Colonnes",
        "Manipulation inconnue",
        "Date"
      ],
      "prompt": "Générez un tableau comparatif des produits concurrents (tableau Markdown) basé sur les points suivants :\n\nDimensions : Fonction | Prix ​​| Soutien chinois | Méthode de déploiement | Remarques\nProduits concurrents : Cursor, Windsurf, Copilot\n\nPoints clés :\n[Coller les puces]\n\nPour les informations manquantes, remplissez « à vérifier » ; indiquer « à compter du 2026-07 » dans l'en-tête",
      "tips": "Après génération, collez-le dans le tableau multidimensionnel Feishu pour faciliter les mises à jour collaboratives par l'équipe."
    },
    {
      "id": "slack-standup",
      "title": "Mise à jour quotidienne de Slack AI",
      "scenario": "Organisez les puces brutes dans des messages au format stand-up d'équipe.",
      "structure": [
        "Notes brutes",
        "Format",
        "Bloqueurs",
        "Tonifier"
      ],
      "prompt": "Organisez les enregistrements de travail suivants dans des messages Slack Standup (chinois) :\n\nFormat :\n✅ Terminé hier\n🎯 Le plan du jour\n🚧 Bloqué/besoin d'aide\n\nEnregistrement original :\n[Coller les notes]\n\nTon : concis et numérisable ; pas plus de 150 mots.",
      "tips": "Collez dans la barre latérale de Slack AI ; n'oubliez pas de contacter la personne responsable des articles bloqués."
    },
    {
      "id": "google-docs-gemini",
      "title": "Compte rendu de la réunion Google Docs Gemini",
      "scenario": "Générez une version officielle en pièce jointe du procès-verbal à partir des faits saillants de la réunion.",
      "structure": [
        "Participants",
        "Remarques",
        "Décisions",
        "Actes"
      ],
      "prompt": "Générez des procès-verbaux formels basés sur les points de rencontre suivants :\n\nParticipants : Produit, Ingénierie, Opérations\n\nPoints clés :\n[Coller les notes]\n\nSortie :\n1. Informations sur la réunion (heure/sujet)\n2. Résumé de la discussion (3-5 puces)\n3. La résolution est importante\n4. Liste des actions (personne responsable | tâche | DDL)\n\nN’inventez pas des choses qui n’ont pas été discutées.",
      "tips": "Gemini dans Docs peut sélectionner directement les points clés à générer ; les éléments d’action doivent être attribués à des personnes."
    },
    {
      "id": "linear-backlog-groom",
      "title": "L'IA linéaire comble le retard",
      "scenario": "Organisez une liste complexe d’exigences en problèmes pouvant être planifiés.",
      "structure": [
        "Liste d'entrée",
        "Déduplication",
        "Acceptation",
        "Priorité"
      ],
      "prompt": "Organisez les exigences suivantes dans un brouillon de problème linéaire (tableau JSON) :\n\nChamps : titre, description, acceptCriteria[], priorité (P0-2), étiquettes[]\n\nListe des exigences :\n[Coller la liste]\n\nRègles : fusionner les doublons ; les descriptions incluent des user stories ; les critères d’acceptation sont testables.",
      "tips": "Avant d'importer, vérifiez manuellement s'il y a trop de P0 pour éviter une surcharge de Sprint."
    },
    {
      "id": "make-rss-slack",
      "title": "Marque : RSS → Flux → Slack",
      "scenario": "Créez un pipeline automatisé et envoyez automatiquement des résumés de chaîne pour les nouveaux articles.",
      "structure": [
        "Déclenchement",
        "Filtre",
        "Résumer",
        "Notifier"
      ],
      "prompt": "Vous êtes l'architecte de l'automatisation. Concevez la scène Make :\n\nDéclencheur : Nouvelles entrées RSS\nÉtapes : Supprimer les doublons → Résumé chinois OpenAI de 80 mots → Publier dans Slack #ai-news\n\nVeuillez afficher :\n1. Liste des modules\n2. Cartographie des champs clés de chaque module\n3. Étapes du test\n4. Pannes courantes et dépannage",
      "tips": "Utilisez d’abord 1 source RSS pour tester l’exécution ; le module OpenAI ajoute la contrainte \"lien texte original attaché\"."
    },
    {
      "id": "n8n-release-notes",
      "title": "n8n surveille la sortie et les tweets",
      "scenario": "La version GitHub est déclenchée et un brouillon de mise à jour en chinois est généré.",
      "structure": [
        "Déclenchement",
        "Transformer",
        "Brouillon",
        "Porte d'examen"
      ],
      "prompt": "Concevoir un workflow n8n : version GitHub → Extraire le journal des modifications → GPT générer des tweets chinois (≤ 280 mots) → Écrire une notion pour examen\n\nInstructions de configuration du nœud de sortie + modèle de mot d'invite :\n\"Rédigez un article de mise à jour basé sur le changelog : titre + 3 points clés + lien, sans exagération\"",
      "tips": "Ajoutez un nœud d'approbation manuelle avant de publier pour éviter d'émettre automatiquement un mauvais numéro de version."
    },
    {
      "id": "cursor-mcp-issue",
      "title": "Curseur + Problème de résolution de GitHub MCP",
      "scenario": "Recherchez les problèmes, modifiez le code et ouvrez les PR dans la conversation de l'agent.",
      "structure": [
        "Contexte MCP",
        "ID du problème",
        "Emu3 utilise un modèle unique pour compléter la description de l'image, les instructions d'édition et les diagrammes vincentiens. La recherche s'améliore mais l'ingénierie en est encore à ses débuts.",
        "Modèle de relations publiques"
      ],
      "prompt": "Utilisation de GitHub MCP :\n1. Lisez la description et les commentaires du numéro 128\n2. Analysez les causes profondes et répertoriez les fichiers modifiés\n3. Créez la branche fix/128 et soumettez le correctif minimal\n4. Ouvrez PR, le texte contient : problème|solution|test|fermer #128\n\nNe modifiez pas les fichiers non pertinents.",
      "tips": "Configurez d'abord le jeton GitHub dans mcp.json ; exécutez le test localement avant PR."
    },
    {
      "id": "zapier-lead-score",
      "title": "Notation des leads Zapier AI",
      "scenario": "Les nouveaux prospects du formulaire sont automatiquement notés et acheminés vers différents canaux Slack.",
      "structure": [
        "Champs de formulaire",
        "Rubrique de notation",
        "Routage",
        "Examen humain"
      ],
      "prompt": "Mots d'invite de Zapier Central :\n\nNotez les prospects de 1 à 5 en fonction des champs du formulaire :\n- budget, calendrier, company_size, use_case\n\nSortie JSON : {score, raison, itinéraire : \"sales\"|\"nurture\"}\n\nRègles : raison ≤50 mots ; score = 3 en cas de doute.",
      "tips": "Il est toujours recommandé aux commerciaux de confirmer manuellement les prospects les plus performants avant de les copier dans le CRM."
    },
    {
      "id": "gemini-deep-research-prompt",
      "title": "Analyse approfondie du secteur de la recherche Gemini",
      "scenario": "Parcourez automatiquement plusieurs sources et produisez des rapports sur les tendances du secteur avec des citations.",
      "structure": [
        "Question",
        "Portée",
        "Sections de sortie",
        "recherche communautaire"
      ],
      "prompt": "Sujet de recherche : 5 tendances majeures dans l’adoption des agents d’IA par les entreprises en 2026\n\nPortée : rapports publics 2025-2026, articles, blogs des fabricants\n\nSortie :\n1. Résumé (200 mots)\n2. Cinq tendances (chacune : description | preuve | cas représentatif)\n3. 3 suggestions d'action pour les PME\n4. Liste de références (titre + lien + date)\n\nLa fabrication de sources est interdite.",
      "tips": "La recherche approfondie prend 5 à 15 minutes ; cliquez pour vérifier les citations avant de publier."
    },
    {
      "id": "chatgpt-browse-factcheck",
      "title": "Vérification des faits en mode navigation ChatGPT",
      "scenario": "Vérifiez que les chiffres clés et les références d’un article sont exacts.",
      "structure": [
        "Liste des réclamations",
        "Vérifiez chacun",
        "Téléchargez 4 photos du même personnage sous différents angles",
        "Sources"
      ],
      "prompt": "Veuillez parcourir la page Web et vérifier les déclarations suivantes (une par une) :\n\n[Coller 3 à 5 revendications avec les URL, le cas échéant]\n\nChaque sortie :\n-Déclaration originale\n- Conclusion de la vérification : ✅Exacte / ⚠️Partiellement exact / ❌Inexact / ❓Invérifiable\n- Basé sur le lien source\n- Formulation correcte (si nécessaire)",
      "tips": "Ne vérifiez pas plus de 5 éléments à la fois ; donner la priorité aux sources primaires (sites officiels, journaux)."
    },
    {
      "id": "metaso-industry-scan",
      "title": "Un aperçu rapide de l'industrie des tours secrètes (les sources chinoises sont préférées)",
      "scenario": "Comprenez rapidement la chaîne industrielle et les acteurs clés d’un secteur inconnu.",
      "structure": [
        "Industrie",
        "Questions",
        "Sortir",
        "Type de source"
      ],
      "prompt": "Secteur : plateforme d'apprentissage de l'IA/éducation en ligne (direction IA)\n\nVeuillez répondre avec une source chinoise :\n1. Trois types d’acteurs en haut, milieu et bas de la chaîne industrielle\n2. Différences nationales et étrangères (2 points chacune)\n3. 3 tendances du business model en 2026\n4. 3 opportunités pour les nouveaux entrants\n\nVous trouverez ci-joint des liens vers des sources ; toute incertitude est notée.",
      "tips": "Secret Tower convient aux rapports de l'industrie chinoise ; les chiffres clés peuvent être vérifiés par rapport au texte original."
    },
    {
      "id": "perplexity-source-audit",
      "title": "Audit de qualité des citations de perplexité",
      "scenario": "Évaluez si les citations dans les réponses à l’enquête font autorité et sont obsolètes.",
      "structure": [
        "Coller la réponse",
        "Dimensions de l'audit",
        "Remplacer faible",
        "Résumé"
      ],
      "prompt": "Vérifiez la qualité des citations des réponses suivantes à l'enquête Perplexity :\n\n[Coller la réponse]\n\nÉvalué par citation :\n- Autorité (élevée/moyenne/faible)\n- Actualité (année)\n- Est-ce directement lié à la conclusion ?\n\nSortie :\n1. Références faibles à supprimer\n2. Mots-clés de recherche supplémentaires suggérés\n3. Conclusion révisée (si changement)",
      "tips": "Les conclusions sur les prix doivent être basées sur la page actuelle du site officiel, car les sources d'occasion sont facilement obsolètes."
    },
    {
      "id": "claude-skill-author",
      "title": "Compétence d'agent de rédaction Claude (SKILL.md)",
      "scenario": "Convertissez les SOP de l'équipe en fichiers SKILL.md conformes aux spécifications.",
      "structure": [
        "Nécessite une auto-inspection de la constitution, article par article, puis une sortie",
        "Schéma SKILL.md",
        "Exemples",
        "Créer un projet et installer les dépendances"
      ],
      "prompt": "Convertissez la SOP d'équipe suivante en spécification de compétences d'agent SKILL.md :\n\nPOS :\n[Coller la SOP]\n\nGénérez le SKILL.md complet, comprenant :\n---\nnom :\ndescriptif :\n---\n\n# étapes\n# Exemple d'entrée/sortie\n# Contraintes et gestion des échecs\n\nSuivez le format agentskills.io ; la description précise quand déclencher.",
      "tips": "Migration du style d'image ChatGPT"
    }
  ]
});
})();
