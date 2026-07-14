/* ZH-TW overlays — mcp-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("zh-TW", { mcpNav: {
  "meta": {
    "lead": "精選高星 MCP Server，依場景分類。每個展示核心功能與 GitHub Star，設定程式碼不展開顯示，點「複製配置」即可接入 Cursor / Claude Desktop。",
    "searchPlaceholder": "表現：MMLU-Pro 與 BBH 較 Large 2 提升約 8%，法文文本優勢明顯",
    "countLabel": "{n} 个 MCP",
    "totalLabel": "共 {n} 個 MCP · {c} 個分類",
    "empty": "沒有相符的 MCP，換個關鍵字試試",
    "copyConfig": "複製配置",
    "openLink": "詳情",
    "clientsLabel": "適用",
    "transportLabel": "傳輸",
    "sourceLabel": "來源",
    "starsLabel": "{n} ★",
    "featuresLabel": "功能"
  },
  "categories": {
    "MCP 入门": "MCP 入門",
    "开发工具": "開發工具",
    "搜索检索": "搜尋檢索",
    "浏览器自动化": "瀏覽器自動化",
    "地图与位置": "地圖與位置",
    "数据库": "資料庫",
    "知识库与文档": "知識庫與文檔",
    "内容创作": "內容創作",
    "办公协作": "辦公室協作",
    "金融数据": "金融數據",
    "社交与社区": "社交與社區",
    "电商": "電商",
    "多媒体": "多媒體",
    "科研学术": "科學研究學術",
    "生活服务": "生活服務"
  },
  "clients": {
    "多平台": "Multi-platform",
    "开发者": "Developers",
    "Cursor": "Cursor",
    "Claude Desktop": "Claude Desktop",
    "Cline": "Cline",
    "Windsurf": "Windsurf",
    "Codex": "Codex",
    "Raycast": "Raycast"
  },
  "transports": {
    "概念": "Concept",
    "配置": "Setup",
    "文档": "Docs",
    "Registry": "Registry",
    "stdio": "stdio",
    "SSE": "SSE",
    "http": "HTTP"
  },
  "sources": {
    "official": "Official",
    "github": "GitHub",
    "community": "Community"
  },
  "items": {
    "MCP 是什么": {
      "name": "MCP 是什麼",
      "desc": "MCP（Model Context Protocol）是連接 AI 用戶端與外部工具的開放協定。用戶端透過 stdio / SSE 呼叫 Server 提供的工具，讓 Agent 能搜尋網頁、讀取檔案、查資料庫等。",
      "features": [
        "開放協議標準",
        "stdio / SSE 傳輸",
        "連接 LLM 與外部工具"
      ]
    },
    "Cursor 接入 MCP": {
      "name": "Cursor 接入 MCP",
      "desc": "在 Cursor 中：Settings → MCP → 編輯 mcp.json，將下方 JSON 片段合併進 mcpServers 物件後儲存，即可在 Agent 對話中使用對應工具。",
      "configNote": "可新增多個 Server；修改後重新啟動 Cursor 或重新整理 MCP 列表",
      "features": [
        "編輯 mcp.json",
        "多 Server 並存",
        "Agent 對話呼叫工具"
      ]
    },
    "Claude Desktop 接入 MCP": {
      "name": "Claude Desktop 接取 MCP",
      "desc": "編輯 claude_desktop_config.json（macOS：~/Library/Application Support/Claude/），在 mcpServers 下新增 Server 配置，重新啟動 Claude Desktop 生效。",
      "configNote": "Windows 設定檔路徑請見官方 Quickstart",
      "features": [
        "claude_desktop_config.json",
        "OAuth 部分服務",
        "桌面端原生集成"
      ]
    },
    "MCP 官方参考实现": {
      "name": "MCP 官方參考實現",
      "desc": "洩漏權重顯示 MoE 架構進一步擴容，數學與代碼 benchmark 提昇明顯；官方尚未官宣，但 API 價格頁已出現「R2-preview」灰階入口。",
      "features": [
        "filesystem / git / fetch",
        "memory / postgres",
        "官方維護可 fork"
      ]
    },
    "MCP 协议文档": {
      "name": "MCP 協定文檔",
      "desc": "Model Context Protocol 官方規範、架構說明與多語言 SDK 文檔，適合開發自訂 MCP Server 或排查存取問題。",
      "features": [
        "協定規範",
        "架構說明",
        "多語言 SDK"
      ]
    },
    "Context7": {
      "name": "Context7",
      "desc": "為 LLM 注入最新庫文檔與 API 參考，避免幻覺與過時語法，程式設計場景必備。",
      "features": [
        "注入最新庫文檔",
        "API 參考即時查詢",
        "減少程式碼幻覺"
      ]
    },
    "GitHub MCP": {
      "name": "GitHub MCP",
      "desc": "讀寫 Issue、PR、倉庫文件與搜尋代碼，讓 Agent 直接操作 GitHub 工作流程。",
      "configNote": "需建立 GitHub Personal Access Token 並填入 env",
      "features": [
        "讀寫 Issue / PR",
        "搜尋倉庫代碼",
        "文件內容獲取"
      ]
    },
    "Filesystem": {
      "name": "Filesystem",
      "desc": "官方檔案系統 Server，在限定目錄內讀寫文件，適合本地專案分析與批次變更。",
      "configNote": "將 /path/to/allowed/dir 替換為允許存取的目錄",
      "features": [
        "限定目錄讀寫",
        "大量文件分析",
        "專案結構遍歷"
      ]
    },
    "Git": {
      "name": "Git",
      "desc": "官方 Git 操作 Server：檢視狀態、diff、提交歷史與分支，輔助程式碼審查與版本管理。",
      "features": [
        "收集 6 封範例郵件與標籤",
        "提交歷史查詢",
        "分支資訊"
      ]
    },
    "Fetch": {
      "name": "建議：掌握 1 個 IDE Agent + 1 個自動化平台 對 AI 學習者而言，可藉此更新個人工具圖譜與踩坑清單，並在一周內完成一次小範圍實操或內部分享。",
      "desc": "官方網頁抓取 Server，將 URL 內容轉換為 LLM 可讀的 Markdown，適合閱讀文件與新聞。",
      "features": [
        "URL 轉 Markdown",
        "網頁正文擷取",
        "文件閱讀"
      ]
    },
    "Memory": {
      "name": "Memory",
      "desc": "官方知識圖譜記憶 Server，跨會話持久化實體與關係，適合長期專案情境。",
      "features": [
        "知識圖譜記憶",
        "跨會話實體關係",
        "長期專案情境"
      ]
    },
    "Sequential Thinking": {
      "name": "Sequential Thinking",
      "desc": "官方結構化思考鏈 Server，引導 Agent 分步推理、修訂與分支探索複雜問題。",
      "features": [
        "分步推理鏈",
        "假設修訂",
        "複雜問題拆解"
      ]
    },
    "Docker MCP": {
      "name": "Docker MCP",
      "desc": "管理 Docker 容器、映像與 Compose，讓 Agent 直接操作本地或遠端容器環境。",
      "features": [
        "容器啟動/停止管理",
        "鏡像列表",
        "Compose 操作"
      ]
    },
    "Sentry MCP": {
      "name": "Sentry MCP",
      "desc": "查詢 Sentry 錯誤、Issue 與效能數據，輔助線上故障排查與根因分析。",
      "features": [
        "錯誤 Issue 查詢",
        "效能 trace",
        "線上故障排查"
      ]
    },
    "Brave Search": {
      "name": "Brave Search",
      "desc": "Brave Search API 驅動的網頁搜索，為 Agent 提供即時互聯網檢索能力。",
      "configNote": "在 brave.com/search/api 申請 API Key",
      "features": [
        "即時網頁搜尋",
        "結構化結果",
        "隱私權友善檢索"
      ]
    },
    "Tavily": {
      "name": "Tavily",
      "desc": "以 AI Agent 優化的搜尋 API，返回結構化摘要，適合研究與事實查核。",
      "features": [
        "Agent 優化搜尋",
        "結構化摘要",
        "事實查核"
      ]
    },
    "Exa Search": {
      "name": "Exa Search",
      "desc": "神經網路語義搜索，擅長找技術文章、論文與公司資訊，研究場景表現優異。",
      "features": [
        "語義神經搜尋",
        "技術文章檢索",
        "公司資訊查詢"
      ]
    },
    "Firecrawl": {
      "name": "Firecrawl",
      "desc": "爬取、抓取與搜尋網頁，將網站內容轉換為 LLM 友善格式，適合競品與資料收集。",
      "features": [
        "整站爬取",
        "Markdown 轉換",
        "競品資料採集"
      ]
    },
    "Playwright MCP": {
      "name": "Playwright MCP",
      "desc": "微軟 Playwright 官方 MCP，控制 Chromium 做截圖、點擊、填表與 E2E 測試。",
      "features": [
        "Chromium 自動化",
        "截圖與填表",
        "E2E 測試"
      ]
    },
    "Puppeteer": {
      "name": "Puppeteer",
      "desc": "官方 Puppeteer Server，無頭 Chrome 自動化，適合網頁截圖、抓取與簡單互動。",
      "features": [
        "無頭 Chrome",
        "頁面截圖",
        "DOM 交互"
      ]
    },
    "Browserbase": {
      "name": "Browserbase",
      "desc": "雲端無頭瀏覽器基礎設施，Agent 在遠端瀏覽器中執行複雜網頁任務，無需本地 Chrome。",
      "features": [
        "雲端瀏覽器",
        "無需本地 Chrome",
        "複雜網頁任務"
      ]
    },
    "Google Maps": {
      "name": "Google Maps",
      "desc": "地理編碼、路線規劃、地點搜尋與週邊查詢，適合旅遊、本地生活類 Agent。",
      "features": [
        "地理編碼",
        "路線規劃",
        "POI 搜尋"
      ]
    },
    "OpenStreetMap": {
      "name": "OpenStreetMap",
      "desc": "基於 OpenStreetMap 的地理編碼與地點查詢，免費開源，適合不需要 Google API 的場景。",
      "features": [
        "免費地理編碼",
        "開源地圖數據",
        "無需 API Key"
      ]
    },
    "PostgreSQL": {
      "name": "PostgreSQL",
      "desc": "洩漏權重顯示 MoE 架構進一步擴容，數學與代碼 benchmark 提昇明顯；官方尚未官宣，但 API 價格頁已出現「R2-preview」灰階入口。",
      "configNote": "替換為實際連接字串；建議只讀帳號",
      "features": [
        "唯讀 SQL 查詢",
        "表結構探索",
        "自然語言查庫"
      ]
    },
    "SQLite": {
      "name": "SQLite",
      "desc": "官方 SQLite Server，查詢本地 .db 文件，適合原型與小規模資料分析。",
      "features": [
        "本機 .db 查詢",
        "輕量數據分析",
        "原型驗證"
      ]
    },
    "Supabase": {
      "name": "Supabase",
      "desc": "操作 Supabase 專案：表管理、SQL 執行、Edge Functions 與存儲，全端開發利器。",
      "features": [
        "表格管理",
        "SQL 執行",
        "Edge Functions"
      ]
    },
    "Notion": {
      "name": "Notion",
      "desc": "讀寫 Notion 頁面與資料庫，將團隊知識庫連結到 Agent 工作流程。",
      "features": [
        "頁面讀寫",
        "資料庫查詢",
        "團隊知識庫接入"
      ]
    },
    "Google Drive": {
      "name": "Google Drive",
      "desc": "官方 Google Drive Server，搜尋、讀取與列舉雲端文檔，打通辦公室文件庫。",
      "configNote": "首次運作需完成 OAuth 授權",
      "features": [
        "文件搜尋",
        "文件讀取",
        "OAuth 授權"
      ]
    },
    "Obsidian MCP": {
      "name": "Obsidian MCP",
      "desc": "連接本地 Obsidian 倉庫，搜尋與讀取 Markdown 筆記，個人知識管理場景首選。",
      "configNote": "需安裝 Obsidian Local REST API 插件",
      "features": [
        "本地筆記搜尋",
        "Markdown 讀取",
        "個人知識庫"
      ]
    },
    "Figma": {
      "name": "Figma",
      "desc": "讀取 Figma 設計稿節點、樣式與評論，讓 Agent 理解 UI 並產生對應程式碼。",
      "features": [
        "設計節點讀取",
        "樣式與佈局解析",
        "UI 轉代碼輔助"
      ]
    },
    "Cloudflare Workers": {
      "name": "Cloudflare Workers",
      "desc": "管理 Cloudflare Workers、KV、R2 與 DNS，快速部署邊緣運算與靜態網站。",
      "features": [
        "Workers 部署",
        "KV / R2 存儲",
        "DNS 管理"
      ]
    },
    "Slack": {
      "name": "Slack",
      "desc": "官方 Slack Server，發送訊息、查頻道與線程，將 Agent 嵌入團隊合作。",
      "features": [
        "頻道訊息發送",
        "線程查詢",
        "團隊協作"
      ]
    },
    "Linear": {
      "name": "Linear",
      "desc": "管理 Linear Issue、專案與週期，適合產品團隊的 Agent 驅動專案管理。",
      "features": [
        "Issue 管理",
        "Sprint 週期",
        "產品專案管理"
      ]
    },
    "Google Calendar": {
      "name": "Google Calendar",
      "desc": "查詢與建立 Google 日曆事件，日程安排與會議協調自動化。",
      "configNote": "首次運作需完成 Google OAuth",
      "features": [
        "事件查詢",
        "創建日程",
        "OAuth 授權"
      ]
    },
    "Alpha Vantage": {
      "name": "Alpha Vantage",
      "desc": "美股、外匯與加密貨幣行情、技術指標與公司基本面資料查詢。",
      "features": [
        "股票行情",
        "技術指標",
        "基本面數據"
      ]
    },
    "Stripe": {
      "name": "Stripe",
      "desc": "查詢 Stripe 客戶、訂閱、發票與支付，輔助 SaaS 財務與計費分析。",
      "features": [
        "客戶與訂閱",
        "發票查詢",
        "SaaS 計費分析"
      ]
    },
    "Twitter/X MCP": {
      "name": "Twitter/X MCP",
      "desc": "發布推文、搜尋時間軸與用戶資料，社群媒體運作與輿情監控。",
      "features": [
        "發推文",
        "時間軸搜尋",
        "使用者資料"
      ]
    },
    "Reddit": {
      "name": "Reddit",
      "desc": "瀏覽 Subreddit、搜尋貼文與評論，社群研究與趨勢發現。",
      "features": [
        "Subreddit 瀏覽",
        "貼文搜尋",
        "社區研究"
      ]
    },
    "Shopify": {
      "name": "Shopify",
      "desc": "管理 Shopify 商品、訂單與客戶，跨境電商店鋪營運自動化。",
      "features": [
        "商品管理",
        "訂單查詢",
        "客戶資訊"
      ]
    },
    "WooCommerce": {
      "name": "WooCommerce",
      "desc": "管理 WooCommerce 商品、訂單與客戶，WordPress 獨立站營運自動化。",
      "features": [
        "WordPress 商店",
        "訂單與客戶",
        "商品管理"
      ]
    },
    "ElevenLabs": {
      "name": "ElevenLabs",
      "desc": "文字轉語音、聲音複製與音效生成，音視訊內容創作流水線。",
      "features": [
        "文字轉語音",
        "聲音克隆",
        "音效生成"
      ]
    },
    "Replicate": {
      "name": "Replicate",
      "desc": "呼叫 Replicate 上的圖像、視訊與音訊模型，文生圖/圖生視訊一站式。",
      "features": [
        "文生圖模型",
        "影片生成",
        "音訊模型調用"
      ]
    },
    "arXiv": {
      "name": "arXiv",
      "desc": "搜尋與下載 arXiv 論文，文獻綜述與前沿技術追蹤。",
      "features": [
        "論文搜尋",
        "PDF 下載",
        "文獻綜述"
      ]
    },
    "PubMed": {
      "name": "PubMed",
      "desc": "檢索 PubMed 生物醫學文獻，臨床與生命科學研究方向。",
      "features": [
        "生物醫學文獻",
        "摘要檢索",
        "臨床研究"
      ]
    },
    "Weather": {
      "name": "Weather",
      "desc": "官方天氣查詢 Server，基於 Open-Meteo 免費 API，無需 Key 即可取得預報。",
      "features": [
        "天氣預報",
        "免費 Open-Meteo",
        "無需 API Key"
      ]
    },
    "Time": {
      "name": "Time",
      "desc": "時區轉換與當前時間查詢，跨國協作與日程安排的基礎工具。",
      "features": [
        "時區轉換",
        "目前時間",
        "跨國協作"
      ]
    },
    "AWS MCP": {
      "name": "AWS MCP",
      "desc": "AWS 官方 MCP 套件，涵蓋 Lambda、S3、DynamoDB、CloudWatch 等核心服務，讓 Agent 直接操作雲端資源。",
      "configNote": "需配置 AWS 憑證（環境變數或 ~/.aws/credentials）",
      "features": [
        "Lambda / S3 操作",
        "DynamoDB 查詢",
        "CloudWatch 日誌"
      ]
    },
    "Vercel MCP": {
      "name": "Vercel MCP",
      "desc": "Vercel 官方 MCP，管理專案部署、環境變數、網域與建置日誌，前端部署自動化。",
      "features": [
        "專案部署管理",
        "環境變數配置",
        "建置日誌查看"
      ]
    },
    "E2B Code Interpreter": {
      "name": "E2B Code Interpreter",
      "desc": "雲端安全沙箱執行 Python/JS 程式碼，Agent 可運行腳本、畫圖、處理數據，無需污染本機環境。",
      "features": [
        "雲端沙箱執行",
        "Python / JS 運行",
        "數據視覺化"
      ]
    },
    "MongoDB": {
      "name": "MongoDB",
      "desc": "MongoDB 官方 MCP，自然語言查詢集合、聚合分析與 Schema 探索，NoSQL 資料分析利器。",
      "features": [
        "集合查詢",
        "聚合管道",
        "Schema 探索"
      ]
    },
    "Neon": {
      "name": "Neon",
      "desc": "Neon Serverless Postgres MCP，管理分支資料庫、執行 SQL 與遷移，現代全端開發首選。",
      "features": [
        "Serverless Postgres",
        "資料庫分支",
        "SQL 遷移"
      ]
    },
    "Atlassian": {
      "name": "Atlassian",
      "desc": "Atlassian 官方 MCP，讀寫 Jira Issue、Confluence 頁面與 Sprint，研發團隊協作自動化。",
      "features": [
        "Jira Issue 讀寫",
        "Confluence 頁面",
        "Sprint 管理"
      ]
    },
    "21st.dev Magic": {
      "name": "21st.dev Magic",
      "desc": "AI 驅動 UI 元件產生 MCP，根據描述產生 React/Tailwind 元件程式碼，加速前端原型。",
      "features": [
        "AI 產生 UI 元件",
        "React / Tailwind 輸出",
        "前端原型加速"
      ]
    },
    "Kubernetes": {
      "name": "Kubernetes",
      "desc": "管理 K8s 叢集資源：Pod、Deployment、Service、日誌與事件，DevOps 與 SRE 場景。",
      "configNote": "需本地 kubectl 已配置並可存取目標集群",
      "features": [
        "Pod / Deployment 管理",
        "日誌與事件",
        "叢集資源查詢"
      ]
    },
    "MCP Registry": {
      "name": "MCP Registry",
      "desc": "Model Context Protocol 官方註冊表，瀏覽、評分與一鍵安裝社群 MCP Server，降低 Agent 工具發現成本。",
      "features": [
        "Server 發現與評分",
        "一鍵安裝",
        "版本管理"
      ]
    },
    "Smithery": {
      "name": "Smithery",
      "desc": "MCP Server 發現與託管平台，搜尋高星 Server 並產生 Cursor / Claude Desktop 配置，支援遠端 SSE 連線。",
      "configNote": "部分 Server 需 Smithery API Key；詳見 smithery.ai 文件",
      "features": [
        "遠端 MCP 託管",
        "配置生成",
        "高星 Server 精選"
      ]
    },
    "Pinecone": {
      "name": "Pinecone",
      "desc": "向量資料庫 MCP：索引查詢、命名空間管理與 RAG 檢索，適合企業知識庫與長文件問答。",
      "features": [
        "向量檢索",
        "命名空間管理",
        "RAG 問答"
      ]
    },
    "Qdrant": {
      "name": "Qdrant",
      "desc": "Qdrant 向量庫 MCP：集合建立、向量寫入與語意搜索，可自託管或使用 Qdrant Cloud。",
      "features": [
        "自託管向量庫",
        "Docker 部署 Activepieces",
        "集合管理"
      ]
    },
    "Redis": {
      "name": "產品成長 Skill 市場：100+ 從發現、策略、執行到上線與成長的 Agentic Skill 與指令。",
      "desc": "可引用筆記出處的專屬問答機器人。",
      "features": [
        "快取讀寫",
        "Pub/Sub",
        "會話狀態"
      ]
    },
    "Prisma": {
      "name": "Prisma",
      "desc": "Prisma ORM MCP：Schema 探索、遷移建議與類型安全性查詢生成，加速全端專案資料庫層開發。",
      "configNote": "需在含 schema.prisma 的專案目錄下使用",
      "features": [
        "Schema 探索",
        "遷移建議",
        "類型安全查詢"
      ]
    },
    "ClickHouse": {
      "name": "ClickHouse",
      "desc": "ClickHouse 分析函式庫 MCP：OLAP 查詢、表格結構探索與指標聚合，適合日誌與行為資料分析。",
      "features": [
        "OLAP 分析",
        "日誌聚合",
        "指標查詢"
      ]
    },
    "Grafana": {
      "name": "Grafana",
      "desc": "Grafana 可觀測性 MCP：Dashboard 查詢、警告狀態與 Loki/Prometheus 指標檢索，輔助線上排障。",
      "features": [
        "Dashboard 查詢",
        "告警狀態",
        "Loki/Prometheus"
      ]
    },
    "Semgrep": {
      "name": "Semgrep",
      "desc": "靜態程式碼安全掃描 MCP：依規則集掃描漏洞、SAST 結果解讀與修復建議，適合 PR 安全門禁。",
      "features": [
        "SAST 掃描",
        "規則集匹配",
        "漏洞修復建議"
      ]
    },
    "LangSmith": {
      "name": "LangSmith",
      "desc": "LangChain LangSmith MCP：追蹤 Agent 呼叫鏈、評估資料集與提示詞版本對比，適合 LLM 應用調試。",
      "features": [
        "呼叫鏈追蹤",
        "評估數據集",
        "Prompt 版本對比"
      ]
    },
    "HubSpot": {
      "name": "HubSpot",
      "desc": "HubSpot CRM MCP：聯絡人、公司與交易管道查詢更新，適合銷售與市場 Agent 自動化。",
      "features": [
        "CRM 聯絡人",
        "交易管道",
        "銷售自動化"
      ]
    },
    "Salesforce": {
      "name": "Salesforce",
      "desc": "Salesforce MCP：SOQL 查詢、線索與商機更新，企業 CRM 與銷售助理場景。",
      "configNote": "生產環境建議使用 OAuth 連接方式",
      "features": [
        "SOQL 查詢",
        "線索商機",
        "解釋權：使用者可要求說明主要邏輯與影響因素"
      ]
    },
    "Zapier": {
      "name": "Zapier",
      "desc": "Zapier MCP：觸發 7000+ 應用程式自動化，讓 Agent 建立 Zaps、查詢運行歷史與測試動作。",
      "features": [
        "7000+ 應用",
        "Zap 創建",
        "運行歷史"
      ]
    },
    "Cloudinary": {
      "name": "Cloudinary",
      "desc": "Cloudinary 媒體 MCP：圖片/影片上傳、變換 URL 產生與資源庫搜索，適合內容營運與電商素材。",
      "features": [
        "媒體上傳",
        "安裝 Obsidian Copilot 插件",
        "資源庫搜尋"
      ]
    },
    "DeepWiki": {
      "name": "DeepWiki",
      "desc": "Devin DeepWiki MCP：讀取 GitHub 倉庫 Wiki 式文件與程式碼結構，快速理解陌生開源專案。",
      "features": [
        "倉庫文檔化",
        "程式碼結構速覽",
        "開源專案理解"
      ]
    },
    "Raycast": {
      "name": "Raycast",
      "desc": "Raycast MCP 擴充：在 macOS 啟動器內呼叫 MCP 工具，快速執行腳本、搜尋與系統操作。",
      "configNote": "需安裝 Raycast 並開啟 MCP 擴充",
      "features": [
        "macOS 啟動器",
        "MCP 擴展",
        "時間軸：2026 年底前成員國轉化國內法"
      ]
    }
  }
} });
})();
