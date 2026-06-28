/* JA overlays — mcp-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('ja', {
    mcpNav: {
        meta: {
          lead: "ユースケース別に厳選された高スター MCP サーバー。各カードにはコア機能と GitHub スターが表示されます。構成 JSON は非表示のままです。 [構成をコピー] をタップして、カーソルまたはクロード デスクトップに貼り付けます。",
          searchPlaceholder: "MCP 名、カテゴリ、クライアント、ユースケースを検索...",
          countLabel: "{n} サーバー",
          totalLabel: "{n} サーバー · {c} カテゴリ",
          empty: "一致する MCP サーバーがありません。別のキーワードを試してください。",
          copyConfig: "構成をコピーする",
          openLink: "詳細",
          clientsLabel: "クライアント",
          transportLabel: "輸送",
          sourceLabel: "ソース",
          starsLabel: "{n} ★",
          featuresLabel: "特徴"
        },
        categories: {
          "MCP 入门": "MCPの基本",
          "开发工具": "開発者ツール",
          "搜索检索": "検索と取得",
          "浏览器自动化": "ナレッジマネジメント",
          "地图与位置": "地図と場所",
          "数据库": "データベース",
          "知识库与文档": "ナレッジとドキュメント",
          "内容创作": "コンテンツ制作",
          "办公协作": "オフィスとコラボレーション",
          "金融数据": "財務データ",
          "社交与社区": "ソーシャル＆コミュニティ",
          "电商": "電子商取引",
          "多媒体": "開発者",
          "科研学术": "科学と研究",
          "生活服务": "開発者"
        },
        clients: {
          "多平台": "マルチプラットフォーム",
          "开发者": "開発者"
        },
        transports: {
          "概念": "コンセプト",
          "配置": "設定",
          "文档": "ドキュメント",
          stdio: "標準デジタル",
          SSE: "SSE",
          http: "HTTP"
        },
        sources: {
          official: "正式",
          github: "GitHub",
          community: "コミュニティ"
        },
        items: {
          "MCP 是什么": {
            name: "MCPとは何ですか？",
            desc: "Model Context Protocol は、AI クライアントを stdio/SSE 経由で外部ツールに接続し、エージェントが検索、ファイルの読み取り、データベースのクエリなどを実行できるようにします。"
          },
          "Cursor 接入 MCP": {
            name: "カーソル内の MCP",
            desc: "[設定] → [MCP] → [mcp.json] を編集し、以下の JSON を mcpServers にマージし、保存してエージェント チャットでツールを有効にします。",
            configNote: "複数のサーバーを追加します。変更後にカーソルを再起動するか、MCP リストを更新します"
          },
          "Claude Desktop 接入 MCP": {
            name: "クロードデスクトップのMCP",
            desc: "claude_desktop_config.json を編集し、mcpServers の下にサーバーを追加します。クロードデスクトップを再起動します。",
            configNote: "Windows 構成パスの公式クイックスタートを参照してください。"
          },
          "MCP 官方参考实现": {
            name: "公式 MCP サーバー",
            desc: "MCP仕様"
          },
          "MCP 协议文档": {
            name: "MCP仕様",
            desc: "カスタム サーバーを構築するための公式モデル コンテキスト プロトコルの仕様、アーキテクチャ、および SDK ドキュメント。"
          }
        }
      },
      strings: {
        mcpNavPage: {
          tag: "MCP",
          bannerTitle: "MCP ハブ",
          bannerSubtitle: "ハイスター MCP サーバー · 機能 · 構成のコピー",
          title: "MCP ハブ",
          linkApps: "MCP 名、カテゴリ、クライアント、ユースケースを検索..."
        },
        aiNavPage: {
          bannerStatMcp: "{n} MCP サーバー"
        },
        search: {
          typeMcpNav: "MCP"
        }
      }
  });
})();
