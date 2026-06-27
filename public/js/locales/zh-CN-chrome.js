(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('zh-CN', {
    strings: {
      notice: {
        partialEn: ""
      },
      terms: {
        flipHintFront: "点击翻转查看详解 →",
        flipHintBack: "点击翻回正面 ←",
        exampleLabel: "示例：",
        empty: "未找到匹配术语，换个关键词试试。",
        flipAllBack: "全部翻回"
      },
      overview: {
        collabTip: "协作要点：",
        suitable: "适合：",
        appsLink: "查看全部 43 款主流应用 →"
      },
      phaseBridge: {
        phaseMastered: "本阶段已掌握",
        phaseRangeDone: "「{label}」{range} 已标记掌握",
        phaseRangeDoneDesc: "学习地图进度已同步更新。需要复习可返回上方模块，或取消掌握标记。",
        unmark: "取消已掌握标记",
        masteryConfirm: "掌握确认",
        masteryTitle: "掌握本页内容了吗？",
        masteryDesc: "学完「{label}」各模块后，若内容已熟悉，可标记<strong>已掌握</strong>，学习地图将同步更新（{range}）。",
        masteryProgress: "本阶段进度 <strong>{done}/{total}</strong> · 也可在学习计划中勾选天数。",
        markRemaining: "标记剩余 {n} 天已掌握",
        markPhase: "标记本阶段已掌握",
        viewPath: "查看学习计划",
        phaseComplete: "本阶段完成",
        phaseSolid: "{name}，你已扎实掌握「{label}」",
        phaseSolidDesc: "当前阶段学习目标已达成，可以进入下一阶段继续进阶。",
        quizBest: "测验最佳成绩：<strong>{score}</strong> / {total}",
        quizDayDone: "Day 7 已打卡",
        quizFinalStep: "完成本阶段最后一步：知识测验",
        quizTarget: "目标 {pass}/{total} 分以上。当前最佳：{score} 分。",
        startQuiz: "开始 / 继续测验",
        nextPhase: "下一阶段",
        phaseFlowReview: "阶段 04 · 检验巩固",
        phaseFlowMap: "学习地图 · 复盘总结",
        phaseFlowFrom: "阶段 {num} · {label}",
        jumpAhead: "{name}，已带你进入「{label}」。当前阶段还没全部完成也没关系，随时可以从学习地图回来继续。",
        jumpNext: "{name}，很好！我们进入「{label}」，继续加油。",
        learningMap: "学习地图"
      },
      validate: {
        progressPending: "测验待完成",
        progressScore: "最佳 {score} 分",
        progressPass: "测验已达标",
        progressGraduated: "已结业",
        progressQuizPending: "测验待完成",
        progressQuizPass: "测验已达标",
        progressQuizScore: "最佳 {score} 分"
      },
      graduation: {
        bannerBadge: "已结业",
        bannerMsg: "{name}，你已完成四阶段学习并通过测验，正式结业！",
        heroBadge: "正式结业",
        title: "{name}，四阶段 AI 学习圆满完成！",
        desc: "你已走完「认知 → 工具 → 实战 → 检验」全流程，具备系统的 AI 认知与实战起点。",
        date: "结业日期：{date}",
        statPath: "学习计划",
        statQuiz: "测验最佳（/{total}）",
        statPhases: "阶段通关",
        statContent: "术语与案例",
        footprint: "学习足迹",
        celebrate: "{name}，恭喜结业！你已完成四阶段学习与测验，请查看报告并填写 30 天实践计划 🎉",
        exportMsg: "结业报告已导出为文本文件。",
        copyMsg: "结业报告已复制到剪贴板。",
        copyFail: "复制失败，请使用「导出计划」下载文本文件。",
        exportFilename: "BestWayToLearn-AI-graduation-report-{name}.txt",
        reportTitle: "结业报告",
        reportPending: "（待填写）",
        hintQuizPassNeedPhases: "测验已达标，还差 {n} 个阶段即可结业。",
        hintPhasesDoneNeedQuiz: "四阶段已全部完成，测验达到 {pass} 分即可结业。",
        hintQuizPassNeedDays: "测验已达标，还差 {n} 天学习即可结业。",
        hintDaysDoneNeedQuiz: "7 天已全部完成，测验达到 {pass} 分即可结业。",
        continueLabel: "查看结业报告",
        continueSublabel: "四阶段学习已圆满完成",
        continueQuizLabel: "去做知识测验",
        continueQuizSublabel: "目标 {pass}/{total} 分即可结业",
        continuePhaseHeader: "继续 {label} →",
        continuePhaseHero: "继续学习：{label}",
        continueDayHeader: "继续 Day {day} →",
        continueGradHeader: "结业报告 →",
        continueDayHero: "继续 Day {day}：{sublabel}",
        reportNickname: "昵称：{name}",
        reportDate: "结业日期：{date}",
        reportPath: "学习计划：7/7 天已完成",
        reportPhases: "四阶段学习：4/4 完成",
        reportQuiz: "测验最佳：{score} / {total}",
        reportFootprint: "学习足迹",
        reportPlan: "30 天实践计划",
        reportFocus: "重点方向：{focus}",
        reportWeek: "第 {n} 周",
        reportWeekFocus: "  重点：{text}",
        reportWeekP1: "  实践 1：{text}",
        reportWeekP2: "  实践 2：{text}",
        reportClosing: "—— 学习 AI 最好的方式，就是带着真实问题去实践。",
        unfilled: "（未填写）",
        today: "今日",
        viewReport: "查看结业报告 →",
        focusPlaceholder: "例：用 AI 优化周报写作流程",
        p1Placeholder: "例：周二用 ChatGPT 起草周报",
        p2Placeholder: "例：周五用提示词模板做竞品简析"
      },
      path: {
        unmarkDay: "{name}，已取消 Day {day} 的已掌握标记，需要时可以继续学习。",
        unmarkPhase: "{name}，已取消「{label}」{range} 的已掌握标记，需要时可以继续学习。"
      },
      profile: {
        nameUpdated: "{name}，昵称已更新！接下来我会继续用这个昵称陪你学习。",
        nameCleared: "昵称已清除。点击顶部或底部「管理我的昵称」可重新设置。"
      },
      welcome: {
        joined: "{name}，欢迎！打开学习计划查看四阶段路径，已掌握可标记跳过，或按阶段顺序学习。",
        welcomeBack: "{name}，欢迎回来！从学习地图接着学吧。",
        welcomeBackNoName: "欢迎回来！点击顶部或底部「管理我的昵称」设置站内称呼。",
        deepLink: "你正在学习模块中。欢迎引导结束后，我会记住你的昵称并带你完成各阶段学习。"
      },
      coach: {
        navGoto: "{name}，正在前往「{label}」。",
        searchOpened: "{name}，已为你打开「{label}」—— 继续学习吧！",
        collapse: "收起导师提示",
        expand: "展开导师提示"
      },
      quiz: {
        feedbackCorrect: "✓ 正确！{explain}",
        feedbackWrong: "✗ 正确答案：{answer}<br><br>{explain}",
        seeResults: "查看结果",
        reviewTitle: "错题复习",
        reviewHint: "点击链接回到对应模块复习，或仅重做错题。",
        reviewAnswer: "正确答案：{answer}",
        reviewGo: "在「{label}」中复习 →",
        retryWrong: "仅重做错题",
        retryFull: "重新完整测验",
        tierPerfect: "满分！已具备扎实 AI 基础，去场景中大展身手！",
        tierPass: "很棒！理解深入，已达标可结业，继续保持实践。",
        tierGood: "不错！已掌握 AI 基础知识，查漏补缺后再挑战。",
        tierLow: "继续加油！回顾 AI 原理和核心概念后再次挑战。",
        wrongAllRight: "错题全部正确！建议再做一次完整测验巩固。",
        wrongSomeLeft: "仍有错题未掌握 — 请查看下方链接复习后重试。",
        resultPrefix: "{name}，{pct}% — {msg}",
        topicFallback: "AI 原理"
      },
      search: {
        typeModule: "模块",
        typeTerm: "术语",
        typeApp: "应用",
        typeDay: "学习日",
        typeCase: "教程",
        typeTemplate: "模板",
        typeProject: "项目",
        typeDevice: "设备",
        typePreset: "预设",
        typeGraduation: "结业",
        typeFundamental: "原理",
        typeOverview: "全景",
        typeMonetize: "变现",
        typeAiBox: "AI 盒子",
        typeConfig: "配置",
        typeToolsNav: "工具链接",
        typeSkillsNav: "Skill 推荐",
        typeMcpNav: "MCP 导航",
        navMsg: "已为你打开「{label}」。"
      },
      devices: {
        sectionTag: "选购地图",
        sectionTitle: "按真实需求选设备，不花冤枉钱"
      },
      reader: {
        reading: "阅读中：{label}"
      }
    }
  });
})();
