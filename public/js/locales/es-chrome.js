(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('es', {
    strings: {
      notice: {
        partialEn: ""
      },
      terms: {
        flipHintFront: "Toca para ver detalles →",
        flipHintBack: "Toca para volver ←",
        exampleLabel: "Ejemplo: ",
        empty: "No hay términos coincidentes. Prueba otra palabra clave.",
        flipAllBack: "Volver al frente"
      },
      overview: {
        collabTip: "Consejo de colaboración: ",
        suitable: "Ideal para: ",
        appsLink: "Ver las 43 apps principales →"
      },
      phaseBridge: {
        phaseMastered: "Fase dominada",
        phaseRangeDone: "「{label}」{range} marcado como dominado",
        phaseRangeDoneDesc: "Tu plan de aprendizaje está actualizado. Repasa los módulos arriba o desmarca el dominio.",
        unmark: "Quitar dominado",
        masteryConfirm: "Confirmación de dominio",
        masteryTitle: "¿Has dominado esta página?",
        masteryDesc: "Tras terminar todos los módulos de 「{label}」, marca <strong>dominado</strong> si conoces el material — tu plan se actualizará ({range}).",
        masteryProgress: "Progreso de fase <strong>{done}/{total}</strong> días · O marca días en el plan.",
        markRemaining: "Marcar {n} días restantes como dominados",
        markPhase: "Marcar fase dominada",
        viewPath: "Ver plan de aprendizaje",
        phaseComplete: "Fase completada",
        phaseSolid: "{name}, dominas sólidamente 「{label}」",
        phaseSolidDesc: "Los objetivos de esta fase están cumplidos — pasa a la siguiente fase.",
        quizBest: "Mejor puntuación del quiz: <strong>{score}</strong> / {total}",
        quizDayDone: "Día 7 registrado",
        quizFinalStep: "Paso final: quiz de conocimientos",
        quizTarget: "Objetivo {pass}/{total}+. Mejor actual: {score}.",
        startQuiz: "Empezar / continuar quiz",
        nextPhase: "Siguiente fase",
        phaseFlowReview: "Fase 04 · Repaso",
        phaseFlowMap: "Mapa de aprendizaje · retrospectiva",
        phaseFlowFrom: "Fase {num} · {label}",
        jumpAhead: "{name}, estás en 「{label}」. No pasa nada si la fase no está al 100 % — vuelve cuando quieras desde el mapa.",
        jumpNext: "{name}, ¡genial! Entrando en 「{label}」 — ¡sigue así!",
        learningMap: "Mapa de aprendizaje"
      },
      validate: {
        progressPending: "Quiz pendiente",
        progressScore: "Mejor {score} pts",
        progressPass: "Quiz aprobado",
        progressGraduated: "Graduado",
        progressQuizPending: "Quiz pendiente",
        progressQuizPass: "Quiz aprobado",
        progressQuizScore: "Mejor {score} pts"
      },
      graduation: {
        bannerBadge: "Graduado",
        bannerMsg: "{name}, completaste las cuatro fases y aprobaste el quiz — ¡graduación oficial!",
        heroBadge: "Graduación oficial",
        title: "{name}, ¡aprendizaje de IA en cuatro fases completado!",
        desc: "Terminaste Cognición → Herramientas → Práctica → Repaso y tienes una base sólida de IA.",
        date: "Fecha de graduación: {date}",
        statPath: "Plan de aprendizaje",
        statQuiz: "Mejor quiz (/{total})",
        statPhases: "Fases superadas",
        statContent: "Términos y casos",
        footprint: "Huella de aprendizaje",
        celebrate: "{name}, ¡felicidades por graduarte! Completaste las cuatro fases y el quiz — revisa tu informe y completa tu plan de 30 días 🎉",
        exportMsg: "Informe de graduación exportado como archivo de texto.",
        copyMsg: "Informe de graduación copiado al portapapeles.",
        copyFail: "Error al copiar. Usa Exportar para descargar un archivo de texto.",
        exportFilename: "BestWayToLearn-AI-graduation-report-{name}.txt",
        reportTitle: "Informe de graduación",
        reportPending: "(por completar)",
        hintQuizPassNeedPhases: "Quiz aprobado — faltan {n} fase(s) para graduarte.",
        hintPhasesDoneNeedQuiz: "4 fases completas — {pass}+ en el quiz para graduarte.",
        hintQuizPassNeedDays: "Quiz aprobado — faltan {n} día(s) de aprendizaje para graduarte.",
        hintDaysDoneNeedQuiz: "7 días completos — {pass}+ en el quiz para graduarte.",
        continueLabel: "Ver informe de graduación",
        continueSublabel: "Cuatro fases completadas",
        continueQuizLabel: "Hacer el quiz",
        continueQuizSublabel: "Objetivo {pass}/{total} para graduarte",
        continuePhaseHeader: "Continuar {label} →",
        continuePhaseHero: "Seguir aprendiendo: {label}",
        continueDayHeader: "Continuar Día {day} →",
        continueGradHeader: "Informe de graduación →",
        continueDayHero: "Continuar Día {day}: {sublabel}",
        reportNickname: "Apodo: {name}",
        reportDate: "Fecha de graduación: {date}",
        reportPath: "Plan: 7/7 días completos",
        reportPhases: "Cuatro fases: 4/4 completas",
        reportQuiz: "Mejor quiz: {score} / {total}",
        reportFootprint: "Huella de aprendizaje",
        reportPlan: "Plan de práctica 30 días",
        reportFocus: "Áreas de enfoque: {focus}",
        reportWeek: "Semana {n}",
        reportWeekFocus: "  Enfoque: {text}",
        reportWeekP1: "  Práctica 1: {text}",
        reportWeekP2: "  Práctica 2: {text}",
        reportClosing: "— La mejor forma de aprender IA es practicar con problemas reales.",
        unfilled: "(sin completar)",
        today: "Hoy",
        viewReport: "Ver informe de graduación →",
        focusPlaceholder: "ej. Usar IA para agilizar informes semanales",
        p1Placeholder: "ej. Borrador de informe con ChatGPT el martes",
        p2Placeholder: "ej. Brief competitivo con plantilla de prompt el viernes"
      },
      path: {
        unmarkDay: "{name}, desmarcado Día {day}. Continúa aprendiendo cuando quieras.",
        unmarkPhase: "{name}, desmarcado 「{label}」{range}. Continúa aprendiendo cuando quieras."
      },
      profile: {
        nameUpdated: "{name}, ¡apodo actualizado! Seguiré usándolo mientras aprendemos.",
        nameCleared: "Apodo borrado. Toca Gestionar apodo en el encabezado o pie para configurarlo de nuevo."
      },
      welcome: {
        joined: "{name}, ¡bienvenido! Abre el plan para ver el camino de cuatro fases. Marca días dominados para saltar, o sigue el orden de fases.",
        welcomeBack: "{name}, ¡bienvenido de nuevo! Retoma desde el mapa de aprendizaje.",
        welcomeBackNoName: "¡Bienvenido de nuevo! Toca Gestionar apodo en el encabezado o pie para configurar tu nombre en el sitio.",
        deepLink: "Estás en un módulo de aprendizaje. Tras la bienvenida, recordaré tu apodo y te guiaré en cada fase."
      },
      coach: {
        navGoto: "{name}, yendo a 「{label}」.",
        searchOpened: "{name}, abrí 「{label}」 — ¡sigue aprendiendo!",
        collapse: "Contraer consejos del coach",
        expand: "Expandir consejos del coach"
      },
      quiz: {
        feedbackCorrect: "✓ ¡Correcto! {explain}",
        feedbackWrong: "✗ Respuesta correcta: {answer}<br><br>{explain}",
        seeResults: "Ver resultados",
        reviewTitle: "Repaso de errores",
        reviewHint: "Haz clic en un enlace para revisar el módulo, o reintenta solo los errores.",
        reviewAnswer: "Respuesta correcta: {answer}",
        reviewGo: "Repasar en 「{label}」 →",
        retryWrong: "Reintentar errores",
        retryFull: "Repetir quiz completo",
        tierPerfect: "¡Puntuación perfecta! Base sólida de IA — ¡aplícala en escenarios reales!",
        tierPass: "¡Genial! Comprensión profunda — aprobado y puedes graduarte. Sigue practicando.",
        tierGood: "¡Bien! Conoces lo básico — repasa lagunas e inténtalo de nuevo.",
        tierLow: "¡Ánimo! Repasa fundamentos de IA y conceptos clave, luego reintenta.",
        wrongAllRight: "¡Todos los errores corregidos! Haz un quiz completo para consolidar.",
        wrongSomeLeft: "Quedan errores — repasa los enlaces abajo y reintenta.",
        resultPrefix: "{name}, {pct}% — {msg}",
        topicFallback: "Fundamentos de IA"
      },
      search: {
        typeModule: "Módulo",
        typeTerm: "Término",
        typeApp: "App",
        typeDay: "Día de aprendizaje",
        typeCase: "Tutorial",
        typeTemplate: "Plantilla",
        typeProject: "Proyecto",
        typeDevice: "Dispositivo",
        typePreset: "Preset",
        typeGraduation: "Graduación",
        typeFundamental: "Fundamentos",
        typeOverview: "Resumen",
        typeMonetize: "Monetización",
        typeAiBox: "Caja IA",
        typeConfig: "Config",
        typeToolsNav: "Enlace de herramienta",
        typeSkillsNav: "Skills recomendados",
        typeMcpNav: "MCP",
        navMsg: "Abierto 「{label}」 para ti."
      },
      devices: {
        sectionTag: "Guía de compra",
        sectionTitle: "Elige dispositivos según necesidades reales"
      },
      reader: {
        reading: "Leyendo: {label}"
      }
    }
  });
})();
