(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('fr', {
    strings: {
      notice: {
        partialEn: ""
      },
      terms: {
        flipHintFront: "Appuyez pour voir les détails →",
        flipHintBack: "Appuyez pour revenir ←",
        exampleLabel: "Exemple : ",
        empty: "Aucun terme correspondant. Essayez un autre mot-clé.",
        flipAllBack: "Remettre face avant"
      },
      overview: {
        collabTip: "Conseil collaboration : ",
        suitable: "Idéal pour : ",
        appsLink: "Voir les 43 applications majeures →"
      },
      phaseBridge: {
        phaseMastered: "Phase maîtrisée",
        phaseRangeDone: "「{label}」{range} marqué comme maîtrisé",
        phaseRangeDoneDesc: "Votre plan d'apprentissage est à jour. Révisez les modules ci-dessus ou retirez la maîtrise.",
        unmark: "Retirer maîtrisé",
        masteryConfirm: "Vérification de maîtrise",
        masteryTitle: "Avez-vous maîtrisé cette page ?",
        masteryDesc: "Après avoir terminé tous les modules de 「{label}」, marquez <strong>maîtrisé</strong> si vous connaissez le contenu — votre plan sera mis à jour ({range}).",
        masteryProgress: "Progression de la phase <strong>{done}/{total}</strong> jours · Ou cochez les jours dans le plan.",
        markRemaining: "Marquer les {n} jours restants maîtrisés",
        markPhase: "Marquer la phase maîtrisée",
        viewPath: "Voir le plan d'apprentissage",
        phaseComplete: "Phase terminée",
        phaseSolid: "{name}, vous maîtrisez solidement 「{label}」",
        phaseSolidDesc: "Les objectifs de cette phase sont atteints — passez à la phase suivante.",
        quizBest: "Meilleur score au quiz : <strong>{score}</strong> / {total}",
        quizDayDone: "Jour 7 validé",
        quizFinalStep: "Dernière étape : quiz de connaissances",
        quizTarget: "Objectif {pass}/{total}+. Meilleur actuel : {score}.",
        startQuiz: "Commencer / continuer le quiz",
        nextPhase: "Phase suivante",
        phaseFlowReview: "Phase 04 · Révision",
        phaseFlowMap: "Carte d'apprentissage · rétrospective",
        phaseFlowFrom: "Phase {num} · {label}",
        jumpAhead: "{name}, vous êtes dans 「{label}」. Ce n'est pas grave si la phase n'est pas à 100 % — revenez quand vous voulez depuis la carte.",
        jumpNext: "{name}, bravo ! Entrée dans 「{label}」 — continuez !",
        learningMap: "Carte d'apprentissage"
      },
      validate: {
        progressPending: "Quiz en attente",
        progressScore: "Meilleur {score} pts",
        progressPass: "Quiz réussi",
        progressGraduated: "Diplômé",
        progressQuizPending: "Quiz en attente",
        progressQuizPass: "Quiz réussi",
        progressQuizScore: "Meilleur {score} pts"
      },
      graduation: {
        bannerBadge: "Diplômé",
        bannerMsg: "{name}, vous avez terminé les quatre phases et réussi le quiz — diplômé officiellement !",
        heroBadge: "Diplôme officiel",
        title: "{name}, apprentissage IA en quatre phases terminé !",
        desc: "Vous avez complété Cognition → Outils → Pratique → Révision et avez une base IA solide.",
        date: "Date de diplôme : {date}",
        statPath: "Plan d'apprentissage",
        statQuiz: "Meilleur quiz (/{total})",
        statPhases: "Phases validées",
        statContent: "Termes et cas",
        footprint: "Parcours d'apprentissage",
        celebrate: "{name}, félicitations pour votre diplôme ! Quatre phases et quiz réussis — consultez votre rapport et remplissez votre plan de 30 jours 🎉",
        exportMsg: "Rapport de diplôme exporté en fichier texte.",
        copyMsg: "Rapport de diplôme copié dans le presse-papiers.",
        copyFail: "Échec de la copie. Utilisez Exporter pour télécharger un fichier texte.",
        exportFilename: "BestWayToLearn-AI-graduation-report-{name}.txt",
        reportTitle: "Rapport de diplôme",
        reportPending: "(à remplir)",
        hintQuizPassNeedPhases: "Quiz réussi — encore {n} phase(s) pour diplômer.",
        hintPhasesDoneNeedQuiz: "4 phases terminées — {pass}+ au quiz pour diplômer.",
        hintQuizPassNeedDays: "Quiz réussi — encore {n} jour(s) d'apprentissage pour diplômer.",
        hintDaysDoneNeedQuiz: "7 jours terminés — {pass}+ au quiz pour diplômer.",
        continueLabel: "Voir le rapport de diplôme",
        continueSublabel: "Quatre phases terminées",
        continueQuizLabel: "Passer le quiz",
        continueQuizSublabel: "Objectif {pass}/{total} pour diplômer",
        continuePhaseHeader: "Continuer {label} →",
        continuePhaseHero: "Continuer : {label}",
        continueDayHeader: "Continuer Jour {day} →",
        continueGradHeader: "Rapport de diplôme →",
        continueDayHero: "Continuer Jour {day} : {sublabel}",
        reportNickname: "Surnom : {name}",
        reportDate: "Date de diplôme : {date}",
        reportPath: "Plan : 7/7 jours terminés",
        reportPhases: "Quatre phases : 4/4 terminées",
        reportQuiz: "Meilleur quiz : {score} / {total}",
        reportFootprint: "Parcours d'apprentissage",
        reportPlan: "Plan de pratique 30 jours",
        reportFocus: "Axes prioritaires : {focus}",
        reportWeek: "Semaine {n}",
        reportWeekFocus: "  Focus : {text}",
        reportWeekP1: "  Pratique 1 : {text}",
        reportWeekP2: "  Pratique 2 : {text}",
        reportClosing: "— La meilleure façon d'apprendre l'IA est de pratiquer sur de vrais problèmes.",
        unfilled: "(non renseigné)",
        today: "Aujourd'hui",
        viewReport: "Voir le rapport de diplôme →",
        focusPlaceholder: "ex. Utiliser l'IA pour rationaliser les rapports hebdo",
        p1Placeholder: "ex. Rédiger un rapport avec ChatGPT mardi",
        p2Placeholder: "ex. Brief concurrent vendredi avec un modèle de prompt"
      },
      path: {
        unmarkDay: "{name}, Jour {day} démarqué. Reprenez l'apprentissage quand vous voulez.",
        unmarkPhase: "{name}, 「{label}」{range} démarqué. Reprenez l'apprentissage quand vous voulez."
      },
      profile: {
        nameUpdated: "{name}, surnom mis à jour ! Je continuerai à l'utiliser pendant l'apprentissage.",
        nameCleared: "Surnom effacé. Appuyez sur Gérer le surnom dans l'en-tête ou le pied de page pour le redéfinir."
      },
      welcome: {
        joined: "{name}, bienvenue ! Ouvrez le plan pour voir le parcours en quatre phases. Marquez les jours maîtrisés pour sauter, ou suivez l'ordre des phases.",
        welcomeBack: "{name}, bon retour ! Reprenez depuis la carte d'apprentissage.",
        welcomeBackNoName: "Bon retour ! Appuyez sur Gérer le surnom dans l'en-tête ou le pied de page pour définir votre nom sur le site.",
        deepLink: "Vous êtes dans un module. Après l'accueil, je retiendrai votre surnom et vous guiderai à chaque phase."
      },
      coach: {
        navGoto: "{name}, direction 「{label}」.",
        searchOpened: "{name}, 「{label}」 ouvert — continuez !",
        collapse: "Réduire les conseils du coach",
        expand: "Développer les conseils du coach"
      },
      quiz: {
        feedbackCorrect: "✓ Correct ! {explain}",
        feedbackWrong: "✗ Bonne réponse : {answer}<br><br>{explain}",
        seeResults: "Voir les résultats",
        reviewTitle: "Révision des erreurs",
        reviewHint: "Cliquez un lien pour revisiter le module, ou refaites seulement les erreurs.",
        reviewAnswer: "Bonne réponse : {answer}",
        reviewGo: "Réviser dans 「{label}」 →",
        retryWrong: "Refaire les erreurs",
        retryFull: "Refaire le quiz complet",
        tierPerfect: "Score parfait ! Base IA solide — appliquez-la dans de vrais scénarios !",
        tierPass: "Excellent ! Compréhension profonde — vous pouvez diplômer. Continuez à pratiquer.",
        tierGood: "Bien ! Vous connaissez les bases — révisez les lacunes et réessayez.",
        tierLow: "Continuez ! Révisez les fondamentaux IA puis réessayez.",
        wrongAllRight: "Toutes les erreurs corrigées ! Refaites un quiz complet pour consolider.",
        wrongSomeLeft: "Il reste des erreurs — révisez les liens ci-dessous puis réessayez.",
        resultPrefix: "{name}, {pct}% — {msg}",
        topicFallback: "Fondamentaux IA"
      },
      search: {
        typeModule: "Module",
        typeTerm: "Terme",
        typeApp: "App",
        typeDay: "Jour d'apprentissage",
        typeCase: "Tutoriel",
        typeTemplate: "Modèle",
        typeProject: "Projet",
        typeDevice: "Appareil",
        typePreset: "Préréglage",
        typeGraduation: "Diplôme",
        typeFundamental: "Fondamentaux",
        typeOverview: "Aperçu",
        typeMonetize: "Monétisation",
        typeAiBox: "Boîtier IA",
        typeConfig: "Config",
        typeToolsNav: "Lien outil",
        typeSkillsNav: "Skills recommandés",
        typeMcpNav: "MCP",
        navMsg: "「{label}」 ouvert pour vous."
      },
      devices: {
        sectionTag: "Guide d'achat",
        sectionTitle: "Choisir les appareils selon vos besoins réels"
      },
      reader: {
        reading: "Lecture : {label}"
      }
    }
  });
})();
