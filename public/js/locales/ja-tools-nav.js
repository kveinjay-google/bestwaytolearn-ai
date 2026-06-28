/* JA overlays — tools-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('ja', {
    toolsNav: {
        meta: {
          lead: "信頼できる AI ツールをユースケース別に参照し、公式サイトにジャンプします。 「ここで紹介」のタグが付いたアイテムは、カリキュラム アプリ ガイドに含まれています。",
          searchPlaceholder: "検索ツール…",
          featuredBadge: "__T0__ ツール",
          countLabel: "{n} ツール",
          totalLabel: "{n} ツール · {c} カテゴリ",
          empty: "一致するツールがありません。別のキーワードを試してください。",
          openSite: "サイトを開く"
        },
        categories: {
          "对话助手": "チャットアシスタント",
          "编程开发": "コーディングと開発",
          "图像创作": "画像作成",
          "视频音频": "ビデオとオーディオ",
          "办公效率": "検索と調査",
          "搜索研究": "検索と調査",
          "Agent 自动化": "エージェントと自動化",
          "设计原型": "設計とプロトタイピング",
          "营销写作": "マーケティングとライティング",
          "本地与开源": "ローカルおよびオープンソース"
        },
        tools: {
          Poe: {
            desc: "マルチモデルのチャットハブ — 1 つのアカウントで GPT、Claude、Gemini を切り替える"
          },
          "Meta AI": {
            desc: "Instagram / WhatsAppと連携したメタアシスタント"
          },
          "Character.AI": {
            desc: "ロールプレイとペルソナのチャット コミュニティ"
          },
          "腾讯混元": {
            name: "テンセント・フンユアン",
            desc: "Tencent LLM による中国語チャットとマルチモーダル作成"
          },
          "讯飞星火": {
            name: "iFlytek スパーク",
            desc: "スピーチやオフィスワークフローに強いiFlytekモデル"
          },
          "天工 AI": {
            name: "Kunlun 検索で強化された Q&A とマルチモーダル チャット",
            desc: "Kunlun 検索で強化された Q&A とマルチモーダル チャット"
          },
          "智谱清言": {
            name: "チャットGLM",
            desc: "Zhipu GLM 公式チャットとオープンモデル エコシステム"
          },
          Replit: {
            desc: "ブラウザ内のフルスタック開発と AI エージェントのデプロイ"
          },
          Lovable: {
            desc: "自然言語からフルスタック Web アプリまで"
          },
          v0: {
            desc: "React / shadcn 用 Vercel AI UI ジェネレーター"
          },
          "Google AI Studio": {
            desc: "Gemini API プレイグラウンドとプロトタイピング"
          },
          "Hugging Face": {
            desc: "オープンモデル、Spaces デモ、データセット"
          },
          Replicate: {
            desc: "エンタープライズ AI コード補完、プライベート デプロイ"
          },
          Tabnine: {
            desc: "エンタープライズ AI コード補完、プライベート デプロイ"
          },
          "JetBrains AI": {
            desc: "JetBrains IDE に組み込まれた AI アシスタント"
          },
          "Sourcegraph Cody": {
            desc: "コードベースを認識した AI コーディング アシスタント"
          },
          "Leonardo.ai": {
            desc: "ゲームとコンセプトアートの生成"
          },
          Ideogram: {
            desc: "AI 画像における強力なテキスト レンダリング"
          },
          "Adobe Firefly": {
            desc: "商用安全な Adob​​e 生成画像"
          },
          "即梦 AI": {
            name: "ジメンAI",
            desc: "中国の SD モデル ハブとオンライン生成"
          },
          LiblibAI: {
            desc: "中国の SD モデル ハブとオンライン生成"
          },
          Civitai: {
            desc: "最大の SD / LoRA モデル コミュニティ"
          },
          Recraft: {
            desc: "ベクターおよびブランド上の AI デザイン"
          },
          Canva: {
            desc: "ソーシャルおよびマーケティングデザインのための Magic Studio"
          },
          Pika: {
            desc: "定型化されたショートビデオの生成"
          },
          "Luma Dream Machine": {
            desc: "高品質のテキストからビデオへの変換"
          },
          HeyGen: {
            desc: "AIアバターと多言語リップシンクビデオ"
          },
          Descript: {
            desc: "テキストを編集してオーディオ/ビデオを編集する"
          },
          Udio: {
            desc: "ボーカルとスタイルを備えた AI ミュージック"
          },
          "剪映 CapCut": {
            name: "キャップカット",
            desc: "AI キャプションとエフェクトを備えた ByteDance エディター"
          },
          Vidu: {
            desc: "テンプレートとエフェクトを備えた AI ビデオ"
          },
          PixVerse: {
            desc: "テンプレートとエフェクトを備えた AI ビデオ"
          },
          "海螺 AI": {
            name: "ハイルオAI",
            desc: "MiniMax 音声およびビデオ プラットフォーム"
          },
          Tome: {
            desc: "ナラティブ AI スライドデッキ"
          },
          "Beautiful.ai": {
            desc: "スマートなレイアウトのプレゼンテーション"
          },
          "飞书": {
            name: "ヒバリ/フェイシュ",
            desc: "AI 副操縦士を備えた ByteDance スイート"
          },
          "WPS AI": {
            desc: "Kingsoft WPS AI ライティングとスプレッドシート"
          },
          Grammarly: {
            desc: "英語の文法、語調、明瞭さ"
          },
          "Slack AI": {
            desc: "チャネル概要とワークフロー AI"
          },
          "钉钉 AI": {
            name: "ディントークAI",
            desc: "AI アシスタントとのエンタープライズ コラボレーション"
          },
          Consensus: {
            desc: "引用による学術論文検索"
          },
          Elicit: {
            desc: "文献レビューと論文抽出"
          },
          "You.com": {
            desc: "複数モデルによるAI検索"
          },
          Phind: {
            desc: "開発者重視の AI 検索"
          },
          "夸克 AI": {
            name: "クォークAI",
            desc: "ビジュアル LLM アプリ、自己ホスト可能"
          },
          Flowise: {
            desc: "ビジュアル LLM アプリ、自己ホスト可能"
          },
          LangChain: {
            desc: "LLM アプリ フレームワークと LangSmith"
          },
          CrewAI: {
            desc: "マルチエージェント オーケストレーション フレームワーク"
          },
          Zapier: {
            desc: "7000 以上のアプリを AI オートメーションで接続"
          },
          Make: {
            desc: "AIモジュールによるビジュアルオートメーション"
          },
          FastGPT: {
            desc: "オープンナレッジベースの Q&A ワークフロー"
          },
          Figma: {
            desc: "Figma AI による UI、コピー、プロトタイプ"
          },
          Framer: {
            desc: "AI を活用したサイトとモーション"
          },
          Uizard: {
            desc: "UI プロトタイプへのスケッチ/スクリーンショット"
          },
          Motiff: {
            desc: "AI サイトマップとワイヤーフレーム"
          },
          Relume: {
            desc: "AI サイトマップとワイヤーフレーム"
          },
          Jasper: {
            desc: "ブランドマーケティングとSEOコピー"
          },
          "Copy.ai": {
            desc: "大規模な広告、電子メール、ソーシャル コピー"
          },
          Writesonic: {
            desc: "SEO記事とランディングページ"
          },
          Sudowrite: {
            desc: "フィクションと創作の補助"
          },
          Ollama: {
            desc: "Llama、Qwenなどをローカルで実行する"
          },
          "LM Studio": {
            desc: "ローカル LLM チャット用の GUI"
          },
          ComfyUI: {
            desc: "ノードベースの安定した拡散ワークフロー"
          },
          "Open WebUI": {
            desc: "Ollama の自己ホスト型チャット UI"
          },
          LocalAI: {
            desc: "LLM プロバイダー間での統合 API ルーティング"
          },
          OpenRouter: {
            desc: "LLM プロバイダー間での統合 API ルーティング"
          }
        }
      },
      strings: {
        nav: {
          toolsNav: "AIハブ",
          aiToolsNav: "AIハブ"
        },
        aiNavPage: {
          linkDirectory: "__T0__ ツール"
        }
      }
  });
})();
