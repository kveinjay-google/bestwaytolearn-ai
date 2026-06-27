(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('zh-TW', {
    strings: {
      notice: {
        partialEn: ""
      },
      terms: {
        flipHintFront: "點擊翻轉查看詳解 →",
        flipHintBack: "點擊翻回正面 ←",
        exampleLabel: "範例：",
        empty: "未找到匹配術語，換個關鍵詞試試。",
        flipAllBack: "全部翻回"
      },
      overview: {
        collabTip: "協作要點：",
        suitable: "適合：",
        appsLink: "查看全部 43 款主流應用 →"
      },
      phaseBridge: {
        phaseMastered: "本階段已掌握",
        phaseRangeDone: "「{label}」{range} 已標記掌握",
        phaseRangeDoneDesc: "學習地圖進度已同步更新。需要複習可返回上方模組，或取消掌握標記。",
        unmark: "取消已掌握標記",
        masteryConfirm: "掌握確認",
        masteryTitle: "掌握本頁內容了嗎？",
        masteryDesc: "學完「{label}」各模組後，若內容已熟悉，可標記<strong>已掌握</strong>，學習地圖將同步更新（{range}）。",
        masteryProgress: "本階段進度 <strong>{done}/{total}</strong> · 也可在學習計劃中勾選天數。",
        markRemaining: "標記剩餘 {n} 天已掌握",
        markPhase: "標記本階段已掌握",
        viewPath: "查看學習計劃",
        phaseComplete: "本階段完成",
        phaseSolid: "{name}，你已紮實掌握「{label}」",
        phaseSolidDesc: "當前階段學習目標已達成，可以進入下一階段繼續進階。",
        quizBest: "測驗最佳成績：<strong>{score}</strong> / {total}",
        quizDayDone: "Day 7 已打卡",
        quizFinalStep: "完成本階段最後一步：知識測驗",
        quizTarget: "目標 {pass}/{total} 分以上。當前最佳：{score} 分。",
        startQuiz: "開始 / 繼續測驗",
        nextPhase: "下一階段",
        phaseFlowReview: "階段 04 · 檢驗鞏固",
        phaseFlowMap: "學習地圖 · 複盤總結",
        phaseFlowFrom: "階段 {num} · {label}",
        jumpAhead: "{name}，已帶你進入「{label}」。當前階段還沒全部完成也沒關係，隨時可以從學習地圖回來繼續。",
        jumpNext: "{name}，很好！我們進入「{label}」，繼續加油。",
        learningMap: "學習地圖"
      },
      validate: {
        progressPending: "測驗待完成",
        progressScore: "最佳 {score} 分",
        progressPass: "測驗已達標",
        progressGraduated: "已結業",
        progressQuizPending: "測驗待完成",
        progressQuizPass: "測驗已達標",
        progressQuizScore: "最佳 {score} 分"
      },
      graduation: {
        bannerBadge: "已結業",
        bannerMsg: "{name}，你已完成四階段學習並通過測驗，正式結業！",
        heroBadge: "正式結業",
        title: "{name}，四階段 AI 學習圓滿完成！",
        desc: "你已走完「認知 → 工具 → 實戰 → 檢驗」全流程，具備系統的 AI 認知與實戰起點。",
        date: "結業日期：{date}",
        statPath: "學習計劃",
        statQuiz: "測驗最佳（/{total}）",
        statPhases: "階段通關",
        statContent: "術語與案例",
        footprint: "學習足跡",
        celebrate: "{name}，恭喜結業！你已完成四階段學習與測驗，請查看報告並填寫 30 天實踐計劃 🎉",
        exportMsg: "結業報告已匯出為文字檔。",
        copyMsg: "結業報告已複製到剪貼簿。",
        copyFail: "複製失敗，請使用「匯出計劃」下載文字檔。",
        exportFilename: "BestWayToLearn-AI-graduation-report-{name}.txt",
        reportTitle: "結業報告",
        reportPending: "（待填寫）",
        hintQuizPassNeedPhases: "測驗已達標，還差 {n} 個階段即可結業。",
        hintPhasesDoneNeedQuiz: "四階段已全部完成，測驗達到 {pass} 分即可結業。",
        hintQuizPassNeedDays: "測驗已達標，還差 {n} 天學習即可結業。",
        hintDaysDoneNeedQuiz: "7 天已全部完成，測驗達到 {pass} 分即可結業。",
        continueLabel: "查看結業報告",
        continueSublabel: "四階段學習已圓滿完成",
        continueQuizLabel: "去做知識測驗",
        continueQuizSublabel: "目標 {pass}/{total} 分即可結業",
        continuePhaseHeader: "繼續 {label} →",
        continuePhaseHero: "繼續學習：{label}",
        continueDayHeader: "繼續 Day {day} →",
        continueGradHeader: "結業報告 →",
        continueDayHero: "繼續 Day {day}：{sublabel}",
        reportNickname: "暱稱：{name}",
        reportDate: "結業日期：{date}",
        reportPath: "學習計劃：7/7 天已完成",
        reportPhases: "四階段學習：4/4 完成",
        reportQuiz: "測驗最佳：{score} / {total}",
        reportFootprint: "學習足跡",
        reportPlan: "30 天實踐計劃",
        reportFocus: "重點方向：{focus}",
        reportWeek: "第 {n} 週",
        reportWeekFocus: "  重點：{text}",
        reportWeekP1: "  實踐 1：{text}",
        reportWeekP2: "  實踐 2：{text}",
        reportClosing: "—— 學習 AI 最好的方式，就是帶著真實問題去實踐。",
        unfilled: "（未填寫）",
        today: "今日",
        viewReport: "查看結業報告 →",
        focusPlaceholder: "例：用 AI 優化週報寫作流程",
        p1Placeholder: "例：週二用 ChatGPT 起草週報",
        p2Placeholder: "例：週五用提示詞模板做競品簡析"
      },
      path: {
        unmarkDay: "{name}，已取消 Day {day} 的已掌握標記，需要時可以繼續學習。",
        unmarkPhase: "{name}，已取消「{label}」{range} 的已掌握標記，需要時可以繼續學習。"
      },
      profile: {
        nameUpdated: "{name}，暱稱已更新！接下來我會繼續用這個暱稱陪你學習。",
        nameCleared: "暱稱已清除。點擊頂部或底部「管理我的暱稱」可重新設定。"
      },
      welcome: {
        joined: "{name}，歡迎！打開學習計劃查看四階段路徑，已掌握可標記跳過，或按階段順序學習。",
        welcomeBack: "{name}，歡迎回來！從學習地圖接著學吧。",
        welcomeBackNoName: "歡迎回來！點擊頂部或底部「管理我的暱稱」設定站內稱呼。",
        deepLink: "你正在學習模組中。歡迎引導結束後，我會記住你的暱稱並帶你完成各階段學習。"
      },
      coach: {
        navGoto: "{name}，正在前往「{label}」。",
        searchOpened: "{name}，已為你打開「{label}」—— 繼續學習吧！",
        collapse: "收起導師提示",
        expand: "展開導師提示"
      },
      quiz: {
        feedbackCorrect: "✓ 正確！{explain}",
        feedbackWrong: "✗ 正確答案：{answer}<br><br>{explain}",
        seeResults: "查看結果",
        reviewTitle: "錯題複習",
        reviewHint: "點擊連結回到對應模組複習，或僅重做错題。",
        reviewAnswer: "正確答案：{answer}",
        reviewGo: "在「{label}」中複習 →",
        retryWrong: "僅重做错題",
        retryFull: "重新完整測驗",
        tierPerfect: "滿分！已具備紮實 AI 基礎，去場景中大展身手！",
        tierPass: "很棒！理解深入，已達標可結業，繼續保持實踐。",
        tierGood: "不錯！已掌握 AI 基礎知識，查漏補缺後再挑戰。",
        tierLow: "繼續加油！回顧 AI 原理和核心概念後再次挑戰。",
        wrongAllRight: "錯題全部正確！建議再做一次完整測驗鞏固。",
        wrongSomeLeft: "仍有錯題未掌握 — 請查看下方連結複習後重試。",
        resultPrefix: "{name}，{pct}% — {msg}",
        topicFallback: "AI 原理"
      },
      search: {
        typeModule: "模組",
        typeTerm: "術語",
        typeApp: "應用",
        typeDay: "學習日",
        typeCase: "教學",
        typeTemplate: "模板",
        typeProject: "專案",
        typeDevice: "裝置",
        typePreset: "預設",
        typeGraduation: "結業",
        typeFundamental: "原理",
        typeOverview: "全景",
        typeMonetize: "變現",
        typeAiBox: "AI 盒子",
        typeConfig: "設定",
        typeToolsNav: "工具連結",
        typeSkillsNav: "Skill 推薦",
        typeMcpNav: "MCP 導航",
        navMsg: "已為你打開「{label}」。"
      },
      devices: {
        sectionTag: "選購地圖",
        sectionTitle: "按真實需求選裝置，不花冤枉錢"
      },
      reader: {
        reading: "閱讀中：{label}"
      }
    }
  });
})();
