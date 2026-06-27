(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('ko', {
    strings: {
      notice: {
        partialEn: ""
      },
      terms: {
        flipHintFront: "탭하여 상세 보기 →",
        flipHintBack: "탭하여 앞면으로 ←",
        exampleLabel: "예시: ",
        empty: "일치하는 용어가 없습니다. 다른 키워드를 시도해 보세요.",
        flipAllBack: "다시 앞면"
      },
      overview: {
        collabTip: "협업 팁: ",
        suitable: "추천: ",
        appsLink: "43개 주요 앱 모두 보기 →"
      },
      phaseBridge: {
        phaseMastered: "단계 습득 완료",
        phaseRangeDone: "「{label}」{range} 습득 표시됨",
        phaseRangeDoneDesc: "학습 계획이 업데이트되었습니다. 위 모듈을 다시 볼 수 있으며, 습득 표시를 해제할 수도 있습니다.",
        unmark: "습득 표시 해제",
        masteryConfirm: "습득 확인",
        masteryTitle: "이 페이지를 습득했나요?",
        masteryDesc: "「{label}」의 모든 모듈을 마친 후 내용을 익혔다면 <strong>습득 완료</strong>로 표시하세요 — 학습 계획이 업데이트됩니다 ({range}).",
        masteryProgress: "단계 진행 <strong>{done}/{total}</strong>일 · 학습 계획에서 날짜를 체크할 수도 있습니다.",
        markRemaining: "남은 {n}일 습득 완료 표시",
        markPhase: "단계 습득 완료 표시",
        viewPath: "학습 계획 보기",
        phaseComplete: "단계 완료",
        phaseSolid: "{name}님, 「{label}」을(를) 확실히 습득했습니다",
        phaseSolidDesc: "이 단계의 목표를 달성했습니다 — 다음 단계로 진행하세요.",
        quizBest: "퀴즈 최고 점수: <strong>{score}</strong> / {total}",
        quizDayDone: "Day 7 체크인 완료",
        quizFinalStep: "마지막 단계: 지식 퀴즈",
        quizTarget: "목표 {pass}/{total}점 이상. 현재 최고: {score}점.",
        startQuiz: "퀴즈 시작 / 계속",
        nextPhase: "다음 단계",
        phaseFlowReview: "단계 04 · 복습",
        phaseFlowMap: "학습 지도 · 회고",
        phaseFlowFrom: "단계 {num} · {label}",
        jumpAhead: "{name}님, 이제 「{label}」에 있습니다. 현재 단계가 100% 완료되지 않아도 괜찮습니다 — 학습 지도에서 언제든 돌아올 수 있습니다.",
        jumpNext: "{name}님, 훌륭합니다! 「{label}」에 진입합니다 — 계속 화이팅!",
        learningMap: "학습 지도"
      },
      validate: {
        progressPending: "퀴즈 대기",
        progressScore: "최고 {score}점",
        progressPass: "퀴즈 합격",
        progressGraduated: "수료",
        progressQuizPending: "퀴즈 대기",
        progressQuizPass: "퀴즈 합격",
        progressQuizScore: "최고 {score}점"
      },
      graduation: {
        bannerBadge: "수료",
        bannerMsg: "{name}님, 네 단계를 모두 마치고 퀴즈에 합격했습니다 — 공식 수료!",
        heroBadge: "공식 수료",
        title: "{name}님, 4단계 AI 학습 완료!",
        desc: "인지 → 도구 → 실습 → 복습을 마쳤으며, 탄탄한 AI 기반을 갖추었습니다.",
        date: "수료일: {date}",
        statPath: "학습 계획",
        statQuiz: "퀴즈 최고 (/{total})",
        statPhases: "완료 단계",
        statContent: "용어 및 사례",
        footprint: "학습 기록",
        celebrate: "{name}님, 수료를 축하합니다! 네 단계와 퀴즈를 완료했습니다 — 보고서를 확인하고 30일 계획을 작성하세요 🎉",
        exportMsg: "수료 보고서가 텍스트 파일로보내졌습니다.",
        copyMsg: "수료 보고서가 클립보드에 복사되었습니다.",
        copyFail: "복사에 실패했습니다.보내기로 텍스트 파일을 다운로드하세요.",
        exportFilename: "BestWayToLearn-AI-graduation-report-{name}.txt",
        reportTitle: "수료 보고서",
        reportPending: "(작성 예정)",
        hintQuizPassNeedPhases: "퀴즈 합격 — 수료까지 {n}단계 남음.",
        hintPhasesDoneNeedQuiz: "4단계 완료 — 퀴즈 {pass}점 이상으로 수료.",
        hintQuizPassNeedDays: "퀴즈 합격 — 수료까지 {n}일 남음.",
        hintDaysDoneNeedQuiz: "7일 완료 — 퀴즈 {pass}점 이상으로 수료.",
        continueLabel: "수료 보고서 보기",
        continueSublabel: "네 단계 완료",
        continueQuizLabel: "지식 퀴즈 응시",
        continueQuizSublabel: "목표 {pass}/{total}점으로 수료",
        continuePhaseHeader: "{label} 계속 →",
        continuePhaseHero: "계속 학습: {label}",
        continueDayHeader: "Day {day} 계속 →",
        continueGradHeader: "수료 보고서 →",
        continueDayHero: "Day {day} 계속: {sublabel}",
        reportNickname: "닉네임: {name}",
        reportDate: "수료일: {date}",
        reportPath: "학습 계획: 7/7일 완료",
        reportPhases: "네 단계: 4/4 완료",
        reportQuiz: "퀴즈 최고: {score} / {total}",
        reportFootprint: "학습 기록",
        reportPlan: "30일 실습 계획",
        reportFocus: "집중 분야: {focus}",
        reportWeek: "{n}주차",
        reportWeekFocus: "  집중: {text}",
        reportWeekP1: "  실습 1: {text}",
        reportWeekP2: "  실습 2: {text}",
        reportClosing: "— AI를 배우는 가장 좋은 방법은 실제 문제에 적용하는 것입니다.",
        unfilled: "(미작성)",
        today: "오늘",
        viewReport: "수료 보고서 보기 →",
        focusPlaceholder: "예: AI로 주간 보고서 작성 간소화",
        p1Placeholder: "예: 화요일 ChatGPT로 보고서 초안 작성",
        p2Placeholder: "예: 금요일 프롬프트 템플릿으로 경쟁사 브리프 작성"
      },
      path: {
        unmarkDay: "{name}님, Day {day} 습득 표시를 해제했습니다. 언제든 계속 학습할 수 있습니다.",
        unmarkPhase: "{name}님, 「{label}」{range} 습득 표시를 해제했습니다. 언제든 계속 학습할 수 있습니다."
      },
      profile: {
        nameUpdated: "{name}님, 닉네임이 업데이트되었습니다! 학습 중 이 이름을 계속 사용하겠습니다.",
        nameCleared: "닉네임이 삭제되었습니다. 상단 또는 하단의 닉네임 관리에서 다시 설정하세요."
      },
      welcome: {
        joined: "{name}님, 환영합니다! 학습 계획을 열어 4단계 경로를 확인하세요. 습득한 날은 건너뛸 수 있으며, 단계 순서대로 진행해도 됩니다.",
        welcomeBack: "{name}님, 다시 오신 것을 환영합니다! 학습 지도에서 이어서 진행하세요.",
        welcomeBackNoName: "다시 오신 것을 환영합니다! 상단 또는 하단의 닉네임 관리에서 사이트 표시 이름을 설정하세요.",
        deepLink: "학습 모듈에 있습니다. 환영 안내 후 닉네임을 기억하고 각 단계를 안내하겠습니다."
      },
      coach: {
        navGoto: "{name}님, 「{label}」(으)로 이동합니다.",
        searchOpened: "{name}님, 「{label}」을(를) 열었습니다 — 계속 학습하세요!",
        collapse: "코치 팁 접기",
        expand: "코치 팁 펼치기"
      },
      quiz: {
        feedbackCorrect: "✓ 정답! {explain}",
        feedbackWrong: "✗ 정답: {answer}<br><br>{explain}",
        seeResults: "결과 보기",
        reviewTitle: "오답 복습",
        reviewHint: "링크를 클릭해 모듈로 돌아가거나, 오답만 다시 풀 수 있습니다.",
        reviewAnswer: "정답: {answer}",
        reviewGo: "「{label}」에서 복습 →",
        retryWrong: "오답만 다시",
        retryFull: "전체 퀴즈 다시",
        tierPerfect: "만점! 탄탄한 AI 기반을 갖췄습니다 — 실제 시나리오에 적용해 보세요!",
        tierPass: "훌륭합니다! 깊이 이해했으며 합격 및 수료 가능합니다. 계속 실습하세요.",
        tierGood: "좋습니다! 기초를 알고 있습니다 — 빈틈을 복습하고 다시 도전하세요.",
        tierLow: "계속 화이팅! AI 기초와 핵심 개념을 복습한 후 다시 도전하세요.",
        wrongAllRight: "모든 오답을 맞혔습니다! 전체 퀴즈를 다시 풀어 복습하세요.",
        wrongSomeLeft: "아직 틀린 문제가 있습니다 — 아래 링크를 복습한 후 다시 시도하세요.",
        resultPrefix: "{name}님, {pct}% — {msg}",
        topicFallback: "AI 기초"
      },
      search: {
        typeModule: "모듈",
        typeTerm: "용어",
        typeApp: "앱",
        typeDay: "학습일",
        typeCase: "튜토리얼",
        typeTemplate: "템플릿",
        typeProject: "프로젝트",
        typeDevice: "기기",
        typePreset: "프리셋",
        typeGraduation: "수료",
        typeFundamental: "기초",
        typeOverview: "개요",
        typeMonetize: "수익화",
        typeAiBox: "AI 박스",
        typeConfig: "설정",
        typeToolsNav: "도구 링크",
        typeSkillsNav: "Skill 추천",
        typeMcpNav: "MCP",
        navMsg: "「{label}」을(를) 열었습니다."
      },
      devices: {
        sectionTag: "구매 가이드",
        sectionTitle: "실제 필요에 맞는 기기 선택"
      },
      reader: {
        reading: "읽는 중: {label}"
      }
    }
  });
})();
