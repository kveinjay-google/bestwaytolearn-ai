(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('de', {
    strings: {
      notice: {
        partialEn: ""
      },
      terms: {
        flipHintFront: "Tippen für Details →",
        flipHintBack: "Tippen zum Zurückkehren ←",
        exampleLabel: "Beispiel: ",
        empty: "Keine passenden Begriffe. Anderes Stichwort versuchen.",
        flipAllBack: "Zur Vorderseite"
      },
      overview: {
        collabTip: "Kollaborationstipp: ",
        suitable: "Ideal für: ",
        appsLink: "Alle 43 Mainstream-Apps ansehen →"
      },
      phaseBridge: {
        phaseMastered: "Phase gemeistert",
        phaseRangeDone: "「{label}」{range} als gemeistert markiert",
        phaseRangeDoneDesc: "Ihr Lernplan wurde aktualisiert. Module oben jederzeit wiederholen oder Markierung aufheben.",
        unmark: "Gemeistert aufheben",
        masteryConfirm: "Meisterschaftsprüfung",
        masteryTitle: "Haben Sie diese Seite gemeistert?",
        masteryDesc: "Nach allen Modulen in 「{label}」 <strong>gemeistert</strong> markieren, wenn Sie den Stoff kennen — Ihr Plan wird aktualisiert ({range}).",
        masteryProgress: "Phasenfortschritt <strong>{done}/{total}</strong> Tage · Oder Tage im Lernplan abhaken.",
        markRemaining: "Verbleibende {n} Tage als gemeistert markieren",
        markPhase: "Phase als gemeistert markieren",
        viewPath: "Lernplan ansehen",
        phaseComplete: "Phase abgeschlossen",
        phaseSolid: "{name}, Sie haben 「{label}」 solide gemeistert",
        phaseSolidDesc: "Ziele dieser Phase erreicht — weiter zur nächsten Phase.",
        quizBest: "Bestes Quizergebnis: <strong>{score}</strong> / {total}",
        quizDayDone: "Tag 7 eingecheckt",
        quizFinalStep: "Letzter Schritt: Wissensquiz",
        quizTarget: "Ziel {pass}/{total}+. Aktuell bestes: {score}.",
        startQuiz: "Quiz starten / fortsetzen",
        nextPhase: "Nächste Phase",
        phaseFlowReview: "Phase 04 · Wiederholung",
        phaseFlowMap: "Lernkarte · Rückblick",
        phaseFlowFrom: "Phase {num} · {label}",
        jumpAhead: "{name}, Sie sind in 「{label}」. Es ist in Ordnung, wenn die Phase nicht 100 % fertig ist — jederzeit von der Lernkarte zurück.",
        jumpNext: "{name}, toll! Wir gehen in 「{label}」 — weiter so!",
        learningMap: "Lernkarte"
      },
      validate: {
        progressPending: "Quiz ausstehend",
        progressScore: "Beste {score} Pkt.",
        progressPass: "Quiz bestanden",
        progressGraduated: "Absolviert",
        progressQuizPending: "Quiz ausstehend",
        progressQuizPass: "Quiz bestanden",
        progressQuizScore: "Beste {score} Pkt."
      },
      graduation: {
        bannerBadge: "Absolviert",
        bannerMsg: "{name}, Sie haben alle vier Phasen abgeschlossen und das Quiz bestanden — offiziell absolviert!",
        heroBadge: "Offizielle Absolvierung",
        title: "{name}, vierphasiges AI-Lernen abgeschlossen!",
        desc: "Sie haben Kognition → Tools → Praxis → Wiederholung abgeschlossen und eine solide AI-Grundlage.",
        date: "Abschlussdatum: {date}",
        statPath: "Lernplan",
        statQuiz: "Bestes Quiz (/{total})",
        statPhases: "Phasen abgeschlossen",
        statContent: "Begriffe & Fälle",
        footprint: "Lernspur",
        celebrate: "{name}, Glückwunsch zur Absolvierung! Vier Phasen und Quiz geschafft — Bericht ansehen und 30-Tage-Plan ausfüllen 🎉",
        exportMsg: "Abschlussbericht als Textdatei exportiert.",
        copyMsg: "Abschlussbericht in die Zwischenablage kopiert.",
        copyFail: "Kopieren fehlgeschlagen. Nutzen Sie Exportieren zum Herunterladen.",
        exportFilename: "BestWayToLearn-AI-graduation-report-{name}.txt",
        reportTitle: "Abschlussbericht",
        reportPending: "(auszufüllen)",
        hintQuizPassNeedPhases: "Quiz bestanden — noch {n} Phase(n) bis zur Absolvierung.",
        hintPhasesDoneNeedQuiz: "Alle 4 Phasen fertig — {pass}+ im Quiz zur Absolvierung.",
        hintQuizPassNeedDays: "Quiz bestanden — noch {n} Lerntag(e) bis zur Absolvierung.",
        hintDaysDoneNeedQuiz: "Alle 7 Tage fertig — {pass}+ im Quiz zur Absolvierung.",
        continueLabel: "Abschlussbericht ansehen",
        continueSublabel: "Vier Phasen abgeschlossen",
        continueQuizLabel: "Wissensquiz machen",
        continueQuizSublabel: "Ziel {pass}/{total} zur Absolvierung",
        continuePhaseHeader: "{label} fortsetzen →",
        continuePhaseHero: "Weiterlernen: {label}",
        continueDayHeader: "Tag {day} fortsetzen →",
        continueGradHeader: "Abschlussbericht →",
        continueDayHero: "Tag {day} fortsetzen: {sublabel}",
        reportNickname: "Spitzname: {name}",
        reportDate: "Abschlussdatum: {date}",
        reportPath: "Lernplan: 7/7 Tage abgeschlossen",
        reportPhases: "Vier Phasen: 4/4 abgeschlossen",
        reportQuiz: "Bestes Quiz: {score} / {total}",
        reportFootprint: "Lernspur",
        reportPlan: "30-Tage-Übungsplan",
        reportFocus: "Schwerpunkte: {focus}",
        reportWeek: "Woche {n}",
        reportWeekFocus: "  Fokus: {text}",
        reportWeekP1: "  Übung 1: {text}",
        reportWeekP2: "  Übung 2: {text}",
        reportClosing: "— Der beste Weg, AI zu lernen, ist mit echten Problemen zu üben.",
        unfilled: "(nicht ausgefüllt)",
        today: "Heute",
        viewReport: "Abschlussbericht ansehen →",
        focusPlaceholder: "z. B. AI für wöchentliche Berichte nutzen",
        p1Placeholder: "z. B. Dienstag Bericht mit ChatGPT entwerfen",
        p2Placeholder: "z. B. Freitag Wettbewerbsbrief mit Prompt-Vorlage"
      },
      path: {
        unmarkDay: "{name}, Tag {day} demarkiert. Jederzeit weiterlernen.",
        unmarkPhase: "{name}, 「{label}」{range} demarkiert. Jederzeit weiterlernen."
      },
      profile: {
        nameUpdated: "{name}, Spitzname aktualisiert! Ich werde ihn beim Lernen weiter nutzen.",
        nameCleared: "Spitzname gelöscht. Tippen Sie auf Spitzname verwalten in Kopf- oder Fußzeile zum erneuten Setzen."
      },
      welcome: {
        joined: "{name}, willkommen! Öffnen Sie den Lernplan für den vierphasigen Weg. Gemeisterte Tage überspringen oder Phasenreihenfolge folgen.",
        welcomeBack: "{name}, willkommen zurück! Machen Sie an der Lernkarte weiter.",
        welcomeBackNoName: "Willkommen zurück! Tippen Sie auf Spitzname verwalten in Kopf- oder Fußzeile für Ihren Namen auf der Seite.",
        deepLink: "Sie sind in einem Lernmodul. Nach der Begrüßung merke ich mir Ihren Spitznamen und führe Sie durch jede Phase."
      },
      coach: {
        navGoto: "{name}, weiter zu 「{label}」.",
        searchOpened: "{name}, 「{label}」 geöffnet — weiterlernen!",
        collapse: "Coach-Tipps einklappen",
        expand: "Coach-Tipps ausklappen"
      },
      quiz: {
        feedbackCorrect: "✓ Richtig! {explain}",
        feedbackWrong: "✗ Richtige Antwort: {answer}<br><br>{explain}",
        seeResults: "Ergebnisse ansehen",
        reviewTitle: "Fehlerwiederholung",
        reviewHint: "Link klicken zum Modul oder nur Fehler wiederholen.",
        reviewAnswer: "Richtige Antwort: {answer}",
        reviewGo: "In 「{label}」 wiederholen →",
        retryWrong: "Nur Fehler wiederholen",
        retryFull: "Ganzes Quiz wiederholen",
        tierPerfect: "Volle Punktzahl! Solide AI-Grundlage — in echten Szenarien anwenden!",
        tierPass: "Großartig! Tiefes Verständnis — bestanden und absolvierbar. Weiter üben.",
        tierGood: "Gut! Grundlagen bekannt — Lücken nacharbeiten und erneut versuchen.",
        tierLow: "Weiter so! AI-Grundlagen und Kernkonzepte wiederholen, dann erneut versuchen.",
        wrongAllRight: "Alle Fehler richtig! Ganzes Quiz zur Festigung wiederholen.",
        wrongSomeLeft: "Noch Fehler — Links unten wiederholen, dann erneut versuchen.",
        resultPrefix: "{name}, {pct}% — {msg}",
        topicFallback: "AI-Grundlagen"
      },
      search: {
        typeModule: "Modul",
        typeTerm: "Begriff",
        typeApp: "App",
        typeDay: "Lerntag",
        typeCase: "Tutorial",
        typeTemplate: "Vorlage",
        typeProject: "Projekt",
        typeDevice: "Gerät",
        typePreset: "Voreinstellung",
        typeGraduation: "Abschluss",
        typeFundamental: "Grundlagen",
        typeOverview: "Überblick",
        typeMonetize: "Monetarisierung",
        typeAiBox: "AI-Box",
        typeConfig: "Konfiguration",
        typeToolsNav: "Tool-Link",
        typeSkillsNav: "Skill-Empfehlungen",
        typeMcpNav: "MCP",
        navMsg: "「{label}」 für Sie geöffnet."
      },
      devices: {
        sectionTag: "Kaufratgeber",
        sectionTitle: "Geräte nach echtem Bedarf wählen"
      },
      reader: {
        reading: "Lesen: {label}"
      }
    }
  });
})();
