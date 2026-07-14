/* JA overlays — skills-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("ja", { skillsNav: {
  "meta": {
    "lead": "1,000 つ星以上の厳選された GitHub エージェント スキル。各エントリには、インストール コマンド、互換性のあるエージェント、およびリポジトリ リンクが含まれます。",
    "searchPlaceholder": "検索スキル、業界、ユースケース、エージェント…",
    "countLabel": "{n} skills",
    "totalLabel": "{n} skills · {c} categories",
    "empty": "一致するスキルはありません。別のキーワードを試してください。",
    "copyCmd": "コピーコマンド",
    "openGithub": "GitHub",
    "starsLabel": "{n} ★",
    "agentsLabel": "で動作します"
  },
  "categories": {
    "Skill 安装与合集": "スキルのインストールと収集",
    "编程开发": "プログラミング開発",
    "前端与设计": "フロントエンドとデザイン",
    "视频剪辑与生成": "ビデオの編集と生成",
    "跨境电商与电商": "越境電子商取引と電子商取引",
    "小红书与内容运营": "小紅書とコンテンツ運営",
    "营销与 SEO": "マーケティングとSEO",
    "内容写作": "コンテンツライティング",
    "调研搜索": "研究検索",
    "产品运营": "一致するスキルはありません。別のキーワードを試してください。",
    "安全审计": "セキュリティ監査",
    "科研学术": "科学研究と学術",
    "浏览器自动化": "ブラウザの自動化",
    "知识管理": "ナレッジマネジメント",
    "办公文档": "オフィス文書",
    "财务金融": "構成をコピーする"
  },
  "agents": {
    "多平台": "マルチプラットフォーム",
    "格式通用": "時間制限のある追跡可能な調査フォーム。",
    "通用": "ユニバーサル",
    "Cursor": "カーソル",
    "Claude Code": "クロード・コード",
    "Codex": "コーデックス",
    "Gemini CLI": "ジェミニ CLI",
    "GitHub Copilot": "GitHub コパイロット",
    "Claude.ai": "クロード・アイ",
    "v0": "v0",
    "OpenClaw": "オープンクロー",
    "Antigravity": "反重力",
    "Grok": "グロク",
    "Windsurf": "ウィンドサーフィン"
  },
  "items": {
    "skills CLI": {
      "name": "スキル CLI",
      "desc": "Cursor Agent は、まずスケジュールを設定してから実行します。大きな変更には段階的なコミット手順が必要です。",
      "installNote": "インストーラー自体。上記のコマンド例では、Vercel 公式スキル コレクションをインストールします"
    },
    "Anthropic Skills": {
      "name": "人間的なスキル",
      "desc": "Anthropic の公式スキル デモンストレーション ライブラリには、創造性、開発、企業コミュニケーション、ドキュメント処理 (DOCX / PDF / PPTX / XLSX) のための本番レベルのサンプルが含まれています。",
      "installNote": "クロード コード こちらも利用可能: /plugin マーケットプレイスで人間像/スキルを追加"
    },
    "Antigravity Awesome Skills": {
      "name": "反重力の素晴らしいスキル",
      "desc": "Web、セキュリティ、データ、DevOps、QA、マーケティングなどの特別なプラグイン パッケージとロール バンドルを含む、1,600 以上のインストール可能なスキルのスーパー コレクション。",
      "installNote": "クロード コード：npx antigravity-awesome-skills --claude"
    },
    "Claude Skills 大全": {
      "name": "クロードスキル事典",
      "desc": "337 のスキルと 70 以上のカスタム コマンドは、エンジニアリング、マーケティング、製品、コンプライアンス、研究、財務などのすべての機能シナリオをカバーします。"
    },
    "Awesome Agent Skills": {
      "name": "素晴らしいエージェントスキル",
      "desc": "VoltAgent が厳選した 1,000 以上のコミュニティと公式スキル インデックスは、方向別に参照してからインストールするのに適しています。",
      "installNote": "まず find で検索し、次に npx スキル add <repo> でインストールします。"
    },
    "Agent Skills 规范": {
      "name": "エージェントのスキル仕様",
      "desc": "エージェント スキル標準の公式仕様とドキュメント (agentskills.io) を開きます。各プラットフォームのスキルは SKILL.md 形式に従います。",
      "installNote": "CLI スキャフォールディングを使用して仕様に準拠した新しいスキルを作成する"
    },
    "Superpowers": {
      "name": "超大国",
      "desc": "最も一般的なエージェント開発方法論: ブレーンストーミング → 設計レビュー → TDD 実装計画 → サブエージェント駆動開発。プロセス全体のスキルが自動的にトリガーされます。",
      "installNote": "カーソル:/add-plugin superpowers · Codex:/plugins スーパーパワーを検索"
    },
    "Agent Skills (Addy Osmani)": {
      "name": "エージェント スキル (アディ オスマニ)",
      "desc": "Google エンジニアが生み出す本番レベルのエンジニアリング スキル: アーキテクチャ レビュー、パフォーマンスの最適化、テスト戦略、コード レビューなどのエンタープライズ レベルの開発仕様。"
    },
    "Awesome Copilot": {
      "name": "素晴らしい副操縦士",
      "desc": "GitHub コミュニティによって提供された Copilot の命令、エージェント、スキル、構成のコレクション。PR レビュー、テスト、ドキュメント、セキュリティなどの開発シナリオをカバーします。"
    },
    "Context Engineering Skills": {
      "name": "コンテキストエンジニアリングのスキル",
      "desc": "コンテキスト エンジニアリングの特別なスキル: RAG、メモリ、ツール オーケストレーション、エージェント コンテキスト ウィンドウの最適化。複雑な複数ステップの開発タスクに適しています。"
    },
    "Planning with Files": {
      "name": "ファイルを使用した計画",
      "desc": "ファイルシステムを外部メモリとして使用: 計画、進行状況、知識の蓄積。長期にわたるプロジェクトと運用の SOP 管理に適しています。"
    },
    "Vercel Agent Skills": {
      "name": "ヴァーセルエージェントのスキル",
      "desc": "Vercel 公式スキル コレクション: React のベスト プラクティス、Web デザイン仕様、フロントエンド パフォーマンス、Next.js モード、その他の Web 開発に特化した機能。",
      "installNote": "フロントエンドデザインやリアクトベストプラクティスなどの個別の項目をインストールすることもできます。"
    },
    "Frontend Design": {
      "name": "フロントエンド設計",
      "desc": "Vercel の公式フロントエンド デザイン スキル: 型にはまった AI インターフェイスの美学を避けるための、植字、カラー マッチング、レイアウトおよびコンポーネント プロセス仕様。"
    },
    "Awesome Design Skills": {
      "name": "素晴らしいデザインスキル",
      "desc": "厳選されたデザイン スキルのコレクション: レイアウト、カラー マッチング、コンポーネント テクノロジー、AI に対抗する美的ルーチン。ランディング ページや製品インターフェイスに適しています。"
    },
    "Stitch Skills": {
      "name": "ステッチスキル",
      "desc": "Google Stitch Design Skill: 設計意図から高忠実度のインターフェイスとコンポーネントの仕様を生成し、迅速なプロトタイピングと視覚的な反復に適しています。"
    },
    "Vue.js AI Skills": {
      "name": "Vue.js AI スキル",
      "desc": "Vue 3 のエコロジー特別スキル: API、Pinia、Nuxt モード、およびベスト プラクティスを組み合わせたもので、Vue フルスタック プロジェクトに適しています。"
    },
    "OpenMontage": {
      "name": "オープンモンタージュ",
      "desc": "スキーマの探索",
      "installNote": "スクリーンショットとフォーム入力"
    },
    "ViMax": {
      "name": "ヴィマックス",
      "desc": "香港大学が作成したエージェントビデオ生成フレームワーク: 監督、脚本家、プロデューサー、ジェネレーターが統合され、創造性から映画の完成まで完全に自動で手配されます。"
    },
    "Remotion Skills": {
      "name": "リモートスキル",
      "desc": "React を使用してプログラムでビデオを生成します。音声字幕、モーション エフェクト、ブランド タイトル、データ視覚化のショート ビデオは、ナレッジベースのショート ビデオの大量生産に適しています。"
    },
    "Pika Skills": {
      "name": "ピカのスキル",
      "desc": "Pika AI ビデオ生成スキル: Vincent ビデオ、Tusheng ビデオ、定型化された特殊効果ワークフロー。クリエイティブな短編映画や広告コンセプト フィルムに適しています。"
    },
    "Google Gemini 视频生成": {
      "name": "Google Gemini ビデオ生成",
      "desc": "Google 公式 Gemini API スキル: media_generation サブスキルが含まれており、Veo Wensheng ビデオ、Tusheng ビデオ、およびマルチモーダル マテリアル生成をサポートします。",
      "installNote": "インストール後、media_generation などのサブスキルを使用して Veo ビデオ モデルを呼び出すことができます。"
    },
    "OpenAI Codex 多媒体": {
      "name": "OpenAI コーデックス マルチメディア",
      "desc": "OpenAI 公式 Codex スキル ディレクトリ: imagegen、sora、その他のマルチメディア生成および編集サブスキルが含まれており、エージェント主導のクリエイティブ素材制作に適しています。",
      "installNote": "Codex で /skills を使用すると、imagegen などの厳選されたサブスキルを参照できます。"
    },
    "Marketing Skills (视频)": {
      "name": "マーケティングスキル (ビデオ)",
      "desc": "マーケティング スキルのコレクションには、短いビデオ スクリプト、広告フィルムの構造、ソーシャル メディアのビデオ戦略、コンバージョン ビデオのコピーライティング ワークフローなどのビデオ サブスキルが含まれています。"
    },
    "Social Media Skills (短视频)": {
      "name": "ソーシャルメディアスキル（ショートビデオ）",
      "desc": "ソーシャル メディア コンテンツ戦略スキル: 短いビデオ スクリプト、トピック計画、ストーリーボード リズム、クロスプラットフォーム コンテンツ カレンダー。TikTok / Douyin / Reels の運用に適しています。"
    },
    "Claude SEO (电商)": {
      "name": "クロード SEO (eコマース)",
      "desc": "電子商取引 SEO サブスキル: カテゴリ ページ、商品構造化データ、国際サイトの hreflang、コンバージョン ランディング ページの最適化が含まれており、プラットフォーム販売者と DTC に適しています。",
      "installNote": "インストール後は、ecommerce-seo や schema-markup などのサブスキルが利用可能になります。"
    },
    "GEO SEO Claude": {
      "name": "GEO SEO クロード",
      "desc": "GEO優先SEOスキル：AI検索の可視性、ブランドオーソリティ、スキーマとマルチプラットフォーム引用の最適化、海外ブランドの顧客獲得に適しています。"
    },
    "Last 30 Days": {
      "name": "過去 30 日間",
      "desc": "Reddit、X、YouTube、HN、Polymarket、および Web 全体にわたるあらゆるトピックを調査し、十分に文書化された概要レポートを作成します。"
    },
    "Apify Agent Skills": {
      "name": "Apify エージェントのスキル",
      "desc": "自動 Web クローリング スキル: ページ データの構造化された収集。運用データの収集や競合製品の監視に適しています。"
    },
    "Agent Reach": {
      "name": "エージェントのリーチ",
      "desc": "インターネット機能ルーター: 小紅書、Twitter、Bilibili、Reddit、GitHub、YouTube などを含む 13 のプラットフォームでの統合調査と検索。"
    },
    "Humanizer 中文版": {
      "name": "ヒューマナイザー中国語版",
      "desc": "Humanizer の中国語版は、中国の AI トレース用に最適化されており、公開アカウント、Zhihu、Xiaohongshu などの中国のコンテンツから AI の風味を除去するのに適しています。"
    },
    "MD2WeChat Skill": {
      "name": "MD2WeChat スキル",
      "desc": "WeChat パブリック アカウントを公開するためのマークダウン ワンクリック タイプセット: 40 以上のスタイル テーマ、AI イラスト、バッチ パブリッシュ、およびマルチアカウント管理。セルフ メディア マトリックス操作に適しています。"
    },
    "Claude SEO": {
      "name": "クロード・セオ",
      "desc": "25 のサブスキル + 18 のサブエージェント: テクニカル SEO、インターナショナル SEO、電子商取引 SEO、外部リンク、PDF/Excel レポート。ブランド成長チームに適しています。"
    },
    "Marketing Skills": {
      "name": "マーケティングスキル",
      "desc": "マーケティング スキル ファミリー バケット: CRO、コピーライティング、SEO、分析および成長エンジニアリング、35,000 以上のスター コミュニティが推奨するマーケティング エージェント機能パッケージ。"
    },
    "PM Skills": {
      "name": "PMスキル",
      "desc": "プロダクト マネージャー スキル マーケットプレイス: 発見、戦略、実行から稼働および成長までの 100 以上のエージェント スキル、コマンド、プラグイン。"
    },
    "Claude Skills 大全 (营销)": {
      "name": "中国語: 中国語のトリビアの質問と回答は、同じレベルのラマよりもはるかに優れています",
      "desc": "337 のスキルには、マーケティング チームがすぐに開始できるマーケティング、ブランディング、コンテンツ、成長実験のテンプレートが含まれています。"
    },
    "Humanizer": {
      "name": "ヒューマナイザー",
      "desc": "AI が生成したテキストの痕跡を削除し、記事をより自然で人間の文章に近づけます。ブログ、マーケティングのコピーライティング、外部出版用のコンテンツの磨き上げに適しています。"
    },
    "Agent Rules Books": {
      "name": "エージェントルールブック",
      "desc": "長い記事を書くスキル: ホワイトペーパーやコースコンテンツの制作に適した、構造化された書籍/レポートの執筆ルールと章の配置。"
    },
    "Awesome Agent Skills 索引": {
      "name": "素晴らしいエージェント スキル インデックス",
      "desc": "コミュニティ スキル インデックス。業界や目的別に参照し、対象を絞った方法でインストールします。これは、垂直分野のスキルを見つけるのに適しています。"
    },
    "PM Claude Skills": {
      "name": "クロード首相のスキル",
      "desc": "PM の専門分野 Claude スキル: ユーザー インタビュー、PRD、ロードマップ、OKR 調整ワークフロー。"
    },
    "noobnooc Skills": {
      "name": "ヌーブヌークのスキル",
      "desc": "製品、運用、成長のハイブリッド スキル パック: 実験設計、指標ダッシュボード、機能リリース チェックリスト。"
    },
    "Acontext": {
      "name": "コンテキスト",
      "desc": "タスク スクリプト: HN Algolia API で上位 10 個の AI キーワード投稿を取得する"
    },
    "Trail of Bits Skills": {
      "name": "ビットの軌跡のスキル",
      "desc": "Trail of Bits セキュリティ チームは、脆弱性検出、静的分析、監査ワークフロー、契約セキュリティ、その他の専門的なセキュリティ調査スキルを生み出します。"
    },
    "Cisco Skill Scanner": {
      "name": "シスコ スキル スキャナー",
      "desc": "Skill Security Scanner: 悪意のあるまたは高リスクのエージェント スキルを検出し、チームのスキル ガバナンスとサプライ チェーンの監査に適しています。"
    },
    "Claude BugHunter": {
      "name": "クロード・バグハンター",
      "desc": "自動化されたバグ ハンター スキル: コード監査、回帰検証、セキュリティ関連の欠陥発見ワークフロー。"
    },
    "Scientific Agent Skills": {
      "name": "科学エージェントのスキル",
      "desc": "K-Dense Science Skill Library: 生物学、化学、医学、創薬をカバーする 140 以上のすぐに使えるスキルと 100 以上の科学データベース。"
    },
    "Text-to-CAD": {
      "name": "テキストからCADへ",
      "desc": "テキスト記述生成 CAD モデル スキル。エンジニアリング、製造、科学研究のプロトタイプの迅速なモデリングに適しています。"
    },
    "Document Skills (Anthropic)": {
      "name": "ドキュメントスキル (人間的)",
      "desc": "人間的な制作レベルのドキュメント スキル: DOCX 編集、PDF 解析、PPTX スライド、XLSX テーブルは、クロードのドキュメント機能と同じ起源を持っています。",
      "installNote": "クロード コード プラグイン:/plugin install document-skills@anthropic-agent-skills"
    },
    "Browser Use": {
      "name": "ブラウザの使用",
      "desc": "AI 主導のブラウザ自動化: エージェントは独自に閲覧、フォームへの記入、クロールと検証を行い、運用およびテストのシナリオに適しています。"
    },
    "Playwright Skill": {
      "name": "劇作家のスキル",
      "desc": "クロード コード ブラウザ自動化スキル: エージェントは、E2E テストとページ検証用の Playwright スクリプトを独自に作成して実行します。"
    },
    "Obsidian Skills": {
      "name": "黒曜石のスキル",
      "desc": "Obsidian CLI とオープン フォーマット (Markdown、Bases、JSON Canvas) を使用してメモ取りとナレ​​ッジ ベースの操作を自動化するようにエージェントに教えます。"
    },
    "Google Workspace CLI": {
      "name": "Google Workspace CLI",
      "desc": "Google Office Suite CLI スキル: ドキュメント、スプレッドシート、スライドの自動化。レポートや共同ドキュメントのバッチ処理に適しています。"
    },
    "Skill Creator": {
      "name": "スキルクリエイター",
      "desc": "スキル CLI スキャフォールディングを使用して、エージェント スキル仕様に準拠した SKILL.md を作成します。これは、チームがカスタム ワークフローとドメインの知識を蓄積するのに適しています。",
      "installNote": "現在のディレクトリに SKILL.md テンプレートを生成し、名前と説明を入力します。"
    },
    "Finance Skills": {
      "name": "財務スキル",
      "desc": "財務分析スキル: ステートメントの解釈、評価モデル、予算および投資および財務資料の作成支援。"
    },
    "Awesome Finance Skills": {
      "name": "素晴らしい財務スキル",
      "desc": "財務スキルの厳選されたインデックス: 会計、投資、リスク管理、および FP&A シナリオ テンプレートのコレクション。"
    },
    "Claude Skills 大全 (财务)": {
      "name": "クロードスキル事典（財務）",
      "desc": "337 のスキルには、財務モデリング、予算編成、投資と融資、コンプライアンス レポート テンプレートが含まれており、財務およびビジネス分析チームに適しています。"
    },
    "Smithery Skills": {
      "name": "鍛冶スキル",
      "desc": "Smithery が開発した MCP/Skill 検出およびインストール プラットフォーム Skill は、レジストリの一般的なサーバーを検索し、クライアント構成フラグメントを生成できます。",
      "installNote": "カーソル/クロード設定は、smithery.ai Web ページでワンクリックで生成することもできます。"
    },
    "Cursor Directory Skills": {
      "name": "コンテキスト",
      "desc": "コミュニティによって厳選されたカーソル ルールとスキル インデックス。フルスタック、モバイル、AI アプリケーションなどの高頻度プロジェクト テンプレートをカバーします。"
    },
    "Cloudflare Agent Skills": {
      "name": "Cloudflareエージェントのスキル",
      "desc": "Cloudflare公式エージェントスキル: ワーカー、R2、KV、D1、およびページ開発モード。エッジコンピューティングおよびフルスタック展開に適しています。"
    },
    "Composio Tool Router Skills": {
      "name": "「データをイントラネットの外に残さない」AI アシスタントを評価している場合、現時点では Qwen3-32B が非常にコスト効率の高い出発点となります。まず Ollama を使用してプルしてテスト実行し、次にビジネス ニーズに基づいて vLLM クラスターに参加するかどうかを決定します。",
      "desc": "Composio ツールのルーティング スキル: Gmail、GitHub、Slack、Notion、その他の 100 以上の SaaS への統合アクセスにより、エージェント ツールのグルー コードが削減されます。"
    },
    "LangGraph Agent Skills": {
      "name": "LangGraph エージェントのスキル",
      "desc": "LangChain 公式 LangGraph スキル: マルチエージェント オーケストレーション、状態図、チェックポイント、手動承認ノード。複雑な自動化に適しています。"
    },
    "Windsurf Wave Skills": {
      "name": "ウィンドサーフィンの波のスキル",
      "desc": "詳細"
    },
    "shadcn/ui Agent Skills": {
      "name": "shadcn/ui エージェント スキル",
      "desc": "shadcn/ui コンポーネント作成スキル: AI による安っぽい UI 生成を回避するための Radix + Tailwind モード、アクセシビリティおよびテーマ変数。",
      "installNote": "npx shadcn@latest add と併用すると効果が高くなります"
    },
    "Figma to Code Skills": {
      "name": "Figma からコーディング スキルまで",
      "desc": "デザインドラフトからコード化 スキル: Figma ノード、間隔、フォントを分析し、React/Tailwind コンポーネント スケルトンを生成します。"
    },
    "ComfyUI Workflow Skills": {
      "name": "ComfyUI ワークフロー スキル",
      "desc": "ComfyUI ワークフロー スキル: SD3/Flux ノード オーケストレーション、ControlNet、およびバッチ画像出力。電子商取引およびコース画像マッチング パイプラインに適しています。"
    },
    "CapCut Agent Skills": {
      "name": "CapCut エージェントのスキル",
      "desc": "会議後、Copilot パネルを開いて、発言者のセグメントと決定事項のリストを表示します。"
    },
    "Shopify Hydrogen Skills": {
      "name": "Shopify 水素スキル",
      "desc": "Shopify Hydrogen eコマース スキル: ヘッドレス ストア、商品ページ SEO、ショッピング カート コンポーネント。国境を越えた独立系 Web サイトに適しています。"
    },
    "Amazon SP-API Skills": {
      "name": "Amazon SP-API スキル",
      "desc": "Amazon セラー SP-API スキル: 注文、在庫、広告レポートの取得、および例外アラーム スクリプトの生成。"
    },
    "XHS Creator Skills": {
      "name": "XHS クリエイターのスキル",
      "desc": "Xiaohonshu の作成スキル: タイトルの式、表紙のキーワード、トピック タグ、コメント エリアのガイド、すべてプラットフォームのトーンに沿ったもの。"
    },
    "GEO SEO Skills": {
      "name": "GEO SEO スキル",
      "desc": "生成エンジン最適化 (GEO) スキル: AI 検索の可視性を向上させる構造化 FAQ、スキーマ、および llms.txt。"
    },
    "Technical Writing Skills": {
      "name": "テクニカルライティングスキル",
      "desc": "技術ドキュメント スキル: Divio ドキュメントの 4 つの象限に沿った、API リファレンス、README、変更ログ、およびチュートリアルの構造。"
    },
    "Deep Research Skills": {
      "name": "サイトヒーローのバックグラウンドループビデオに使用できます。",
      "desc": "綿密な調査スキル: 複数情報源の検索、比較表、引用管理、および不確実性の注釈付け。競合製品や市場の分析に適しています。"
    },
    "n8n Workflow Skills": {
      "name": "n8n ワークフロー スキル",
      "desc": "n8n 自動化スキル: RSS → AI サマリー → メール/Feishu などのワークフロー JSON を生成し、運用パイプラインの構築を加速します。"
    },
    "Stagehand": {
      "name": "舞台係",
      "desc": "ブラウザベース Stagehand: 自然言語がブラウザ操作を駆動し、Playwright スクリプトを自動的に作成して検証を実行します。"
    },
    "LaTeX Paper Skills": {
      "name": "LaTeXペーパースキル",
      "desc": "学術論文のスキル: LaTeX テンプレート、数式の書式設定、参考 BibTeX、査読応答レターの草稿。"
    },
    "Zapier Automation Skills": {
      "name": "Zapier 自動化スキル",
      "desc": "Zapier 統合スキル: トリガーとアクションを説明し、Zap ドラフトとテスト リストを生成し、7000 以上のアプリケーションに接続します。"
    }
  }
} });
})();
