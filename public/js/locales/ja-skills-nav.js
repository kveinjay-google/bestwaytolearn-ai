/* JA overlays — skills-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('ja', {
    skillsNav: {
        meta: {
          lead: "1,000 個以上のスターが付いた厳選された GitHub エージェント スキル — ビデオ編集と生成、電子商取引、Xiaohongshu、マーケティング、SEO など。各エントリには、インストール コマンド、互換性のあるエージェント、およびリポジトリ リンクが含まれます。",
          searchPlaceholder: "検索スキル、業界、ユースケース、エージェント…",
          countLabel: "{n} スキル",
          totalLabel: "{n} スキル · {c} カテゴリ",
          empty: "一致するスキルはありません。別のキーワードを試してください。",
          copyCmd: "コピーコマンド",
          openGithub: "GitHub",
          starsLabel: "{n} ★",
          agentsLabel: "で動作します"
        },
        categories: {
          "Skill 安装与合集": "インストーラーとコレクション",
          "编程开发": "エンジニアリング",
          "前端与设计": "フロントエンドとデザイン",
          "视频剪辑与生成": "ビデオの編集と生成",
          "跨境电商与电商": "国境を越えた電子商取引",
          "小红书与内容运营": "XHS とクリエイター運用",
          "营销与 SEO": "マーケティングとSEO",
          "内容写作": "執筆と内容",
          "调研搜索": "調査と検索",
          "产品运营": "製品と運用",
          "安全审计": "セキュリティ監査",
          "科研学术": "科学と研究",
          "浏览器自动化": "ナレッジマネジメント",
          "知识管理": "ナレッジマネジメント",
          "办公文档": "オフィス文書",
          "财务金融": "ファイナンス"
        },
        items: {
          "skills CLI": {
            name: "スキル CLI",
            desc: "68 を超えるコーディング エージェント用の Vercel オープン インストーラー — npx スキルの追加を介して GitHub スキルをインストールします。",
            installNote: "インストーラー自体。例では Vercel 公式スキル パックをインストールします"
          },
          "Anthropic Skills": {
            desc: "公式 Anthropic デモ: クリエイティブ、開発、エンタープライズ コミュニケーション、ドキュメント スキル (DOCX/PDF/PPTX/XLSX)。",
            installNote: "クロード コード: /plugin マーケットプレイスに人間像/スキルを追加"
          },
          "Antigravity Awesome Skills": {
            desc: "Web、セキュリティ、データ、DevOps、QA、マーケティングのバンドルを備えた 1,600 以上のインストール可能なスキル。",
            installNote: "クロード コード: npx antigravity-awesome-skills --claude"
          },
          "Claude Skills 大全": {
            name: "クロード スキルパック",
            desc: "エンジニアリング、マーケティング、製品、コンプライアンス、財務にわたる 337 のスキルと 70 以上のコマンド。"
          },
          "Claude Skills 大全 (营销)": {
            name: "クロード スキル パック (マーケティング)",
            desc: "マーケティング、ブランド、コンテンツ、成長実験のテンプレートを含む 337 のスキル。"
          },
          "Claude Skills 大全 (财务)": {
            name: "クロード スキル パック (財務)",
            desc: "財務モデリング、予算編成、資金調達、コンプライアンス レポート テンプレートを含む 337 のスキル。"
          },
          "Awesome Agent Skills": {
            desc: "VoltAgent が厳選した 1,000 以上の公式スキルおよびコミュニティ スキルのインデックス。",
            installNote: "最初に find で検索し、次に npx スキルで <repo> を追加します"
          },
          "Agent Skills 规范": {
            name: "エージェントのスキル仕様",
            desc: "公式オープンスタンダード (agentskills.io) および SKILL.md 形式のドキュメント。",
            installNote: "仕様に準拠した新しいスキルを足場にする"
          },
          Superpowers: {
            desc: "最上位のエージェント開発方法論: ブレーンストーミング → 設計レビュー → TDD 計画 → サブエージェント主導の実行。",
            installNote: "カーソル: /add-plugin superpowers · コーデックス: /plugins → superpowers"
          },
          OpenMontage: {
            desc: "オープンソースのエージェント ビデオ スタジオ: 12 のパイプライン、52 のツール、500 以上のスキル — FFmpeg、Remotion、TTS、および T2V を使用したスクリプトから最終カットまで。",
            installNote: "完全なビデオ制作ワークフローについては、AGENT_GUIDE.md を参照してください。"
          },
          ViMax: {
            desc: "HKU エージェントのビデオ フレームワーク: ディレクター、脚本家、プロデューサー、ジェネレーターが 1 つの自動化されたパイプラインに含まれています。"
          },
          "Remotion Skills": {
            desc: "React を使用したプログラマティックビデオ - ナレッジショートのキャプション、モーション、ブランド紹介。"
          },
          "Pika Skills": {
            desc: "Pika AI ビデオ生成: テキストからビデオ、画像からビデオ、クリエイティブな短編や広告コンセプト向けの様式化されたエフェクト。"
          },
          "Google Gemini 视频生成": {
            name: "Google Gemini ビデオジェネ",
            desc: "media_generation サブスキルを備えた公式 Gemini API スキル — Veo テキスト/画像からビデオへの変換およびマルチモーダル アセット。",
            installNote: "Veo ビデオ モデルに media_generation サブスキルを使用する"
          },
          "OpenAI Codex 多媒体": {
            name: "OpenAI コーデックス マルチメディア",
            desc: "imagegen、sora、その他のマルチメディア生成サブスキルを含む公式 Codex スキル カタログ。",
            installNote: "Codex の /skills から厳選されたサブスキルを参照する"
          },
          "Marketing Skills (视频)": {
            name: "マーケティングスキル (ビデオ)",
            desc: "動画サブスキル: 短編動画スクリプト、広告構造、ソーシャル動画戦略、コンバージョン コピー。"
          },
          "Social Media Skills (短视频)": {
            name: "ソーシャルメディアスキル（ショートビデオ）",
            desc: "ショートビデオのスクリプト、トピックの計画、ストーリーボードのリズム、TikTok/Reels のクロスプラットフォーム コンテンツ カレンダー。"
          },
          "Claude SEO (电商)": {
            name: "クロード SEO (電子商取引)",
            desc: "E コマース SEO サブスキル: カテゴリ ページ、製品スキーマ、hreflang、コンバージョン ランディング ページ。",
            installNote: "インストール後に ecommerce-seo、schema-markup サブスキルを使用する"
          },
          "GEO SEO Claude": {
            desc: "AI 検索の可視性、ブランド権威、スキーマ、クロスプラットフォーム引用のための GEO ファースト SEO。"
          },
          "Claude SEO": {
            desc: "25 のサブスキル + 18 のサブエージェント: テクニカル SEO、インターナショナル SEO、電子商取引 SEO、バックリンク、レポート。"
          },
          "Marketing Skills": {
            desc: "35,000 つ星以上のマーケティング スキル パック: CRO、コピーライティング、SEO、分析、グロース エンジニアリング。"
          },
          "MD2WeChat Skill": {
            desc: "WeChat へのマークダウン: 40 以上のテーマ、AI 画像、バッチ パブリッシュ、マルチアカウント管理。"
          },
          Humanizer: {
            desc: "ブログ、マーケティング、公開コンテンツの AI ライティング テルを削除します。"
          },
          "Humanizer 中文版": {
            name: "WeChat、Zhihu、Xiaohongshu の中国ローカライズ版 Humanizer による AI 磨き。",
            desc: "WeChat、Zhihu、Xiaohongshu の中国ローカライズ版 Humanizer による AI 磨き。"
          },
          "Last 30 Days": {
            desc: "Reddit、X、YouTube、HN、Polymarket、および Web にわたるあらゆるトピックを調査します。"
          },
          "Agent Reach": {
            desc: "AI 主導のブラウザー自動化: 運用とテストのための閲覧、フォームへの入力、スクレイピング、検証を行います。"
          },
          "Browser Use": {
            desc: "AI 主導のブラウザー自動化: 運用とテストのための閲覧、フォームへの入力、スクレイピング、検証を行います。"
          },
          "Finance Skills": {
            desc: "財務分析: 明細書、評価モデル、予算、投資メモ。"
          }
        },
        agents: {
          "多平台": "マルチプラットフォーム",
          "格式通用": "ユニバーサルフォーマット",
          "通用": "カーソル",
          Cursor: "カーソル",
          "Claude Code": "クロード・コード",
          Codex: "コーデックス",
          "Gemini CLI": "ジェミニ CLI",
          Antigravity: "反重力",
          "GitHub Copilot": "GitHub コパイロット",
          "Claude.ai": "クロードアイ",
          v0: "v0",
          OpenClaw: "オープンクロー",
          Grok: "グロク"
        }
      },
      strings: {
        skillsNavPage: {
          tag: "Skill",
          bannerTitle: "スキルピック",
          bannerSubtitle: "検索スキル、業界、ユースケース、エージェント…",
          title: "スキルピック"
        },
        search: {
          typeSkillsNav: "スキルピック"
        }
      }
  });
})();
