(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('ja', {
    strings: {
      notice: {
        partialEn: ""
      },
      terms: {
        flipHintFront: "タップして詳細を表示 →",
        flipHintBack: "タップして表に戻る ←",
        exampleLabel: "例: ",
        empty: "一致する用語がありません。別のキーワードをお試しください。",
        flipAllBack: "表に戻す"
      },
      overview: {
        collabTip: "コラボのヒント: ",
        suitable: "おすすめ: ",
        appsLink: "43の主要アプリをすべて見る →"
      },
      phaseBridge: {
        phaseMastered: "フェーズ習得済み",
        phaseRangeDone: "「{label}」{range} を習得済みにしました",
        phaseRangeDoneDesc: "学習プランが更新されました。上のモジュールをいつでも復習でき、習得マークも解除できます。",
        unmark: "習得済みを解除",
        masteryConfirm: "習得確認",
        masteryTitle: "このページを習得しましたか？",
        masteryDesc: "「{label}」の全モジュールを終えたら、内容を理解していれば<strong>習得済み</strong>とマークしてください — プランが更新されます ({range})。",
        masteryProgress: "フェーズ進捗 <strong>{done}/{total}</strong>日 · 学習プランで日数をチェックすることもできます。",
        markRemaining: "残り{n}日を習得済みに",
        markPhase: "フェーズを習得済みに",
        viewPath: "学習プランを見る",
        phaseComplete: "フェーズ完了",
        phaseSolid: "{name}さん、「{label}」をしっかり習得しました",
        phaseSolidDesc: "このフェーズの目標を達成しました — 次のフェーズへ進みましょう。",
        quizBest: "クイズ最高スコア: <strong>{score}</strong> / {total}",
        quizDayDone: "Day 7チェックイン済み",
        quizFinalStep: "最終ステップ: 知識クイズ",
        quizTarget: "目標 {pass}/{total}点以上。現在の最高: {score}点。",
        startQuiz: "クイズ開始 / 続ける",
        nextPhase: "次のフェーズ",
        phaseFlowReview: "フェーズ 04 · 復習",
        phaseFlowMap: "学習マップ · 振り返り",
        phaseFlowFrom: "フェーズ {num} · {label}",
        jumpAhead: "{name}さん、今は「{label}」にいます。現在のフェーズが100%完了していなくても大丈夫 — 学習マップからいつでも戻れます。",
        jumpNext: "{name}さん、素晴らしい！「{label}」に入ります — その調子で！",
        learningMap: "学習マップ"
      },
      validate: {
        progressPending: "クイズ未完了",
        progressScore: "最高 {score}点",
        progressPass: "クイズ合格",
        progressGraduated: "修了",
        progressQuizPending: "クイズ未完了",
        progressQuizPass: "クイズ合格",
        progressQuizScore: "最高 {score}点"
      },
      graduation: {
        bannerBadge: "修了",
        bannerMsg: "{name}さん、4フェーズを完了しクイズに合格しました — 正式修了！",
        heroBadge: "正式修了",
        title: "{name}さん、4フェーズのAI学習完了！",
        desc: "認知 → ツール → 実践 → 復習を終え、しっかりしたAIの基盤を身につけました。",
        date: "修了日: {date}",
        statPath: "学習プラン",
        statQuiz: "クイズ最高 (/{total})",
        statPhases: "クリアしたフェーズ",
        statContent: "用語とケース",
        footprint: "学習の足跡",
        celebrate: "{name}さん、修了おめでとう！4フェーズとクイズを完了しました — レポートを確認し30日プランを記入してください 🎉",
        exportMsg: "修了レポートをテキストファイルとしてエクスポートしました。",
        copyMsg: "修了レポートをクリップボードにコピーしました。",
        copyFail: "コピーに失敗しました。エクスポートでテキストファイルをダウンロードしてください。",
        exportFilename: "BestWayToLearn-AI-graduation-report-{name}.txt",
        reportTitle: "修了レポート",
        reportPending: "（未記入）",
        hintQuizPassNeedPhases: "クイズ合格 — 修了まであと{n}フェーズ。",
        hintPhasesDoneNeedQuiz: "4フェーズ完了 — クイズ{pass}点以上で修了。",
        hintQuizPassNeedDays: "クイズ合格 — 修了まであと{n}日。",
        hintDaysDoneNeedQuiz: "7日完了 — クイズ{pass}点以上で修了。",
        continueLabel: "修了レポートを見る",
        continueSublabel: "4フェーズ完了",
        continueQuizLabel: "知識クイズを受ける",
        continueQuizSublabel: "目標 {pass}/{total}点で修了",
        continuePhaseHeader: "{label} を続ける →",
        continuePhaseHero: "学習を続ける: {label}",
        continueDayHeader: "Day {day} を続ける →",
        continueGradHeader: "修了レポート →",
        continueDayHero: "Day {day} を続ける: {sublabel}",
        reportNickname: "ニックネーム: {name}",
        reportDate: "修了日: {date}",
        reportPath: "学習プラン: 7/7日完了",
        reportPhases: "4フェーズ: 4/4完了",
        reportQuiz: "クイズ最高: {score} / {total}",
        reportFootprint: "学習の足跡",
        reportPlan: "30日実践プラン",
        reportFocus: "重点分野: {focus}",
        reportWeek: "第{n}週",
        reportWeekFocus: "  重点: {text}",
        reportWeekP1: "  実践 1: {text}",
        reportWeekP2: "  実践 2: {text}",
        reportClosing: "— AIを学ぶ最良の方法は、実際の問題に取り組むことです。",
        unfilled: "（未記入）",
        today: "今日",
        viewReport: "修了レポートを見る →",
        focusPlaceholder: "例: AIで週報作成を効率化",
        p1Placeholder: "例: 火曜にChatGPTで週報の下書き",
        p2Placeholder: "例: 金曜にプロンプトテンプレートで競合ブリーフ"
      },
      path: {
        unmarkDay: "{name}さん、Day {day} の習得マークを解除しました。いつでも学習を続けられます。",
        unmarkPhase: "{name}さん、「{label}」{range} の習得マークを解除しました。いつでも学習を続けられます。"
      },
      profile: {
        nameUpdated: "{name}さん、ニックネームを更新しました！学習中もこの名前でお呼びします。",
        nameCleared: "ニックネームを削除しました。ヘッダーまたはフッターのニックネーム管理から再設定できます。"
      },
      welcome: {
        joined: "{name}さん、ようこそ！学習プランで4フェーズの道筋を確認してください。習得済みの日はスキップでき、フェーズ順に進めても構いません。",
        welcomeBack: "{name}さん、おかえりなさい！学習マップから続けましょう。",
        welcomeBackNoName: "おかえりなさい！ヘッダーまたはフッターのニックネーム管理でサイト上の名前を設定できます。",
        deepLink: "学習モジュールにいます。ウェルカムツアー後、ニックネームを覚えて各フェーズを案内します。"
      },
      coach: {
        navGoto: "{name}さん、「{label}」へ移動します。",
        searchOpened: "{name}さん、「{label}」を開きました — 学習を続けましょう！",
        collapse: "コーチのヒントを折りたたむ",
        expand: "コーチのヒントを展開"
      },
      quiz: {
        feedbackCorrect: "✓ 正解！{explain}",
        feedbackWrong: "✗ 正解: {answer}<br><br>{explain}",
        seeResults: "結果を見る",
        reviewTitle: "誤答の復習",
        reviewHint: "リンクをクリックしてモジュールに戻るか、誤答のみ再挑戦できます。",
        reviewAnswer: "正解: {answer}",
        reviewGo: "「{label}」で復習 →",
        retryWrong: "誤答のみ再挑戦",
        retryFull: "全問再挑戦",
        tierPerfect: "満点！しっかりしたAI基盤があります — 実際のシナリオで活かしましょう！",
        tierPass: "素晴らしい！深く理解し合格・修了可能です。実践を続けましょう。",
        tierGood: "良いです！基礎を把握しています — 抜けを復習して再挑戦しましょう。",
        tierLow: "頑張りましょう！AIの基礎と核心概念を復習してから再挑戦してください。",
        wrongAllRight: "誤答をすべて正解！全問クイズでもう一度復習しましょう。",
        wrongSomeLeft: "まだ誤答があります — 下のリンクを復習してから再挑戦してください。",
        resultPrefix: "{name}さん、{pct}% — {msg}",
        topicFallback: "AI基礎"
      },
      search: {
        typeModule: "モジュール",
        typeTerm: "用語",
        typeApp: "アプリ",
        typeDay: "学習日",
        typeCase: "チュートリアル",
        typeTemplate: "テンプレート",
        typeProject: "プロジェクト",
        typeDevice: "デバイス",
        typePreset: "プリセット",
        typeGraduation: "修了",
        typeFundamental: "基礎",
        typeOverview: "概要",
        typeMonetize: "収益化",
        typeAiBox: "AIボックス",
        typeConfig: "設定",
        typeToolsNav: "ツールリンク",
        typeSkillsNav: "Skillおすすめ",
        typeMcpNav: "MCP",
        navMsg: "「{label}」を開きました。"
      },
      devices: {
        sectionTag: "購入ガイド",
        sectionTitle: "実際のニーズに合わせてデバイスを選ぶ"
      },
      reader: {
        reading: "読書中: {label}"
      }
    }
  });
})();
