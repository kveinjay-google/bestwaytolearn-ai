/* ZH-TW overlays — skills-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("zh-TW", { skillsNav: {
  "meta": {
    "lead": "精選 GitHub 上 star ≥ 1000 的優質 Agent Skill，依行業與用途分類。涵蓋影片剪輯產生、跨境電商、小紅書營運、行銷 SEO 等場景；每條附帶安裝命令、適用工具與官方倉庫。",
    "searchPlaceholder": "搜尋 Skill 名稱、行業、用途、適用軟體…",
    "countLabel": "{n} 个 Skill",
    "totalLabel": "共 {n} 個 Skill · {c} 個分類",
    "empty": "沒有相符的 Skill，換個關鍵字試試",
    "copyCmd": "複製命令",
    "openGithub": "GitHub",
    "starsLabel": "{n} ★",
    "agentsLabel": "適用"
  },
  "categories": {
    "Skill 安装与合集": "Skill 安裝與收藏",
    "编程开发": "程式設計開發",
    "前端与设计": "前端與設計",
    "视频剪辑与生成": "影片剪輯與生成",
    "跨境电商与电商": "跨境電商與電商",
    "小红书与内容运营": "小紅書與內容運營",
    "营销与 SEO": "行銷與 SEO",
    "内容写作": "內容寫作",
    "调研搜索": "研究搜尋",
    "产品运营": "產品營運",
    "安全审计": "安全審計",
    "科研学术": "科學研究學術",
    "浏览器自动化": "瀏覽器自動化",
    "知识管理": "知識管理",
    "办公文档": "辦公室文件",
    "财务金融": "財務金融"
  },
  "agents": {
    "多平台": "Multi-platform",
    "格式通用": "Format universal",
    "通用": "Universal",
    "Cursor": "Cursor",
    "Claude Code": "Claude Code",
    "Codex": "Codex",
    "Gemini CLI": "Gemini CLI",
    "GitHub Copilot": "GitHub Copilot",
    "Claude.ai": "Claude.ai",
    "v0": "v0",
    "OpenClaw": "OpenClaw",
    "Antigravity": "Antigravity",
    "Grok": "Grok",
    "Windsurf": "Windsurf"
  },
  "items": {
    "skills CLI": {
      "name": "skills CLI",
      "desc": "Vercel 出品的開放 Agent Skill 安裝器，支援 68+ 編碼助手，統一用 npx skills add 安裝任意 GitHub 倉庫中的 Skill。",
      "installNote": "安裝器本身；上方指令範例為安裝 Vercel 官方 Skill 合集"
    },
    "Anthropic Skills": {
      "name": "Anthropic Skills",
      "desc": "Anthropic 官方 Skill 示範庫，包含創意、開發、企業溝通與文件處理（DOCX / PDF / PPTX / XLSX）等生產級範例。",
      "installNote": "Claude Code 也可用：/plugin marketplace add anthropics/skills"
    },
    "Antigravity Awesome Skills": {
      "name": "Antigravity Awesome Skills",
      "desc": "1,600+ 可安裝 Skill 的超級合集，含 Web、安全性、資料、DevOps、QA、行銷等專案插件包與角色 Bundle。",
      "installNote": "Claude Code：npx antigravity-awesome-skills --claude"
    },
    "Claude Skills 大全": {
      "name": "Claude Skills 大全",
      "desc": "337 個 Skill 與 70+ 自訂指令，涵蓋工程、行銷、產品、合規、研究、財務等全職能場景。"
    },
    "Awesome Agent Skills": {
      "name": "Awesome Agent Skills",
      "desc": "VoltAgent 策展的 1,000+ 社群與官方 Skill 索引，適合按方向瀏覽後再定向安裝。",
      "installNote": "先用 find 搜索，再 npx skills add <repo> 安裝"
    },
    "Agent Skills 规范": {
      "name": "Agent Skills 規範",
      "desc": "開放 Agent Skills 標準（agentskills.io）的官方規範與文檔，各平台 Skill 均遵循 SKILL.md 格式。",
      "installNote": "用 CLI 鷹架創建符合規範的新 Skill"
    },
    "Superpowers": {
      "name": "Superpowers",
      "desc": "最受歡迎的 Agent 開發方法論：腦力激盪 → 設計評審 → TDD 實作計畫 → 子 Agent 驅動開發，自動觸發全流程 Skill。",
      "installNote": "Cursor：/add-plugin superpowers · Codex：/plugins 搜尋 superpowers"
    },
    "Agent Skills (Addy Osmani)": {
      "name": "Agent Skills (Addy Osmani)",
      "desc": "Google 工程師出品的生產級工程 Skill：架構評審、效能最佳化、測試策略、程式碼審查等企業級開發規範。"
    },
    "Awesome Copilot": {
      "name": "Awesome Copilot",
      "desc": "GitHub 社群貢獻的 Copilot 指令、Agent、Skill 與組態合集，涵蓋 PR 審查、測試、文件、安全性等開發場景。"
    },
    "Context Engineering Skills": {
      "name": "Context Engineering Skills",
      "desc": "情境工程專題 Skill：RAG、記憶、工具編排與 Agent 情境視窗最佳化，適合複雜多步驟開發任務。"
    },
    "Planning with Files": {
      "name": "Planning with Files",
      "desc": "用文件系統做外部記憶：計畫、進度與知識沉澱，適合長期專案與營運 SOP 管理。"
    },
    "Vercel Agent Skills": {
      "name": "Vercel Agent Skills",
      "desc": "Vercel 官方 Skill 合輯：React 最佳實務、Web 設計規格、前端效能、Next.js 模式等 Web 開發專案能力。",
      "installNote": "也可安裝 frontend-design、react-best-practices 等單項"
    },
    "Frontend Design": {
      "name": "Frontend Design",
      "desc": "Vercel 官方前端設計 Skill：排版、配色、佈局與組件工藝規範，避免千篇一律的 AI 介面美學。"
    },
    "Awesome Design Skills": {
      "name": "Awesome Design Skills",
      "desc": "設計類 Skill 精選集：排版、配色、組件工藝與反 AI 美學套路，適合落地頁與產品介面。"
    },
    "Stitch Skills": {
      "name": "Stitch Skills",
      "desc": "也可安裝 frontend-design、react-best-practices 等單項"
    },
    "Vue.js AI Skills": {
      "name": "Vue.js AI Skills",
      "desc": "Vue 3 生態專案 Skill：組合式 API、Pinia、Nuxt 模式與最佳實踐，適合 Vue 全端專案。"
    },
    "OpenMontage": {
      "name": "OpenMontage",
      "desc": "開源 Agent 影片製作系統：12 條流水線、52 個工具、500+ Skill，覆蓋腳本、分鏡、TTS、剪輯與成片導出，把編碼助手變成視訊工作室。",
      "installNote": "含 FFmpeg、Remotion、文生影片與配音整合；詳見倉庫 AGENT_GUIDE.md"
    },
    "ViMax": {
      "name": "ViMax",
      "desc": "港大出品的 Agent 影片生成框架：導演、編劇、製片與生成器一體化，從創意到成片全自動編排。"
    },
    "Remotion Skills": {
      "name": "Remotion Skills",
      "desc": "以 React 編程式產生影片：口播字幕、動效、品牌片頭與資料視覺化短片，適合知識類短影片大量生產。"
    },
    "Pika Skills": {
      "name": "Pika Skills",
      "desc": "Pika AI 影片產生 Skill：文生影片、圖生影片與風格化特效工作流程，適合創意短片與廣告概念片。"
    },
    "Google Gemini 视频生成": {
      "name": "Google Gemini 影片生成",
      "desc": "Google 官方 Gemini API Skill：含 media_generation 子 Skill，支援 Veo 文生影片、圖生影片與多模態素材產生。",
      "installNote": "安裝後可用 media_generation 等子 Skill 呼叫 Veo 視訊模型"
    },
    "OpenAI Codex 多媒体": {
      "name": "OpenAI Codex 多媒體",
      "desc": "OpenAI 官方 Codex Skill 目錄：含 imagegen、sora 等多媒體生成與編輯子 Skill，適合 Agent 驅動創意素材生產。",
      "installNote": "Codex 內可用 /skills 瀏覽 imagegen 等 curated 子 Skill"
    },
    "Marketing Skills (视频)": {
      "name": "Marketing Skills (影片)",
      "desc": "行銷 Skill 合輯含 video 子 Skill：短影片腳本、廣告片結構、社媒影片策略與轉換型影片文案工作流程。"
    },
    "Social Media Skills (短视频)": {
      "name": "Social Media Skills (短影片)",
      "desc": "社群媒體內容策略 Skill：短影片腳本、話題規劃、分鏡節奏與跨平台內容日曆，適合 TikTok / 抖音 / Reels 營運。"
    },
    "Claude SEO (电商)": {
      "name": "Claude SEO (電商)",
      "desc": "含電商 SEO 子 Skill：類目頁、商品結構化資料、國際站 hreflang 與轉換式落地頁優化，適合平台賣家與 DTC。",
      "installNote": "安裝後可用 ecommerce-seo、schema-markup 等子 Skill"
    },
    "GEO SEO Claude": {
      "name": "GEO SEO Claude",
      "desc": "將海報雲層與光點塗抹運動向量，匯出 5 秒循環影片。"
    },
    "Last 30 Days": {
      "name": "Last 30 Days",
      "desc": "跨 Reddit、X、YouTube、HN、Polymarket 與全網研究任意話題，並合成有據可查的摘要報告。"
    },
    "Apify Agent Skills": {
      "name": "Apify Agent Skills",
      "desc": "網頁自動化抓取 Skill：結構化擷取頁面數據，適合營運資料擷取與競品監控。"
    },
    "Agent Reach": {
      "name": "Agent Reach",
      "desc": "網路能力路由器：小紅書、推特、B站、Reddit、GitHub、YouTube 等 13 平台統一研究與搜尋。"
    },
    "Humanizer 中文版": {
      "name": "Humanizer 中文版",
      "desc": "Humanizer 漢化版，針對中文 AI 痕跡優化，適合公眾號、知乎、小紅書等中文內容去 AI 口味。"
    },
    "MD2WeChat Skill": {
      "name": "MD2WeChat Skill",
      "desc": "Markdown 一鍵排版發布微信公眾號：40+ 樣式主題、AI 配圖、大量發布與多帳號管理，適合自媒體矩陣運作。"
    },
    "Claude SEO": {
      "name": "Claude SEO",
      "desc": "25 個子 Skill + 18 子 Agent：技術 SEO、國際 SEO、電商 SEO、外鏈與 PDF/Excel 報告，適合品牌成長團隊。"
    },
    "Marketing Skills": {
      "name": "Marketing Skills",
      "desc": "行銷 Skill 全家桶：CRO、文案、SEO、分析與成長工程，35k+ Star 社群首選行銷 Agent 能力包。"
    },
    "PM Skills": {
      "name": "PM Skills",
      "desc": "產品經理 Skill 市場：100+ 從發現、策略、執行到上線與成長的 Agentic Skill、命令與插件。"
    },
    "Claude Skills 大全 (营销)": {
      "name": "Claude Skills 大全 (行銷)",
      "desc": "337 個 Skill 含行銷、品牌、內容與成長實驗模板，適合市場團隊快速啟用。"
    },
    "Humanizer": {
      "name": "Humanizer",
      "desc": "去除 AI 生成文字痕跡，讓文章更自然、更像人類寫作；適合部落格、行銷文案與對外發佈內容潤飾。"
    },
    "Agent Rules Books": {
      "name": "Agent Rules Books",
      "desc": "長文寫作 Skill：結構化書籍/報告寫作規則與章節編排，適合白皮書與課程內容生產。"
    },
    "Awesome Agent Skills 索引": {
      "name": "Awesome Agent Skills 索引",
      "desc": "社區 Skill 索引，依行業與用途瀏覽後再定向安裝，適合發現垂直領域 Skill。"
    },
    "PM Claude Skills": {
      "name": "PM Claude Skills",
      "desc": "PM 專案 Claude Skill：使用者訪談、PRD、路線圖與 OKR 對齊工作流程。"
    },
    "noobnooc Skills": {
      "name": "noobnooc Skills",
      "desc": "產品、營運與成長混合 Skill 包：實驗設計、指標看板與功能發布 checklist。"
    },
    "Acontext": {
      "name": "Acontext",
      "desc": "結構化情境與記憶 Skill，適合團隊知識庫與 Agent 長期記憶編排。"
    },
    "Trail of Bits Skills": {
      "name": "Trail of Bits Skills",
      "desc": "Trail of Bits 安全團隊出品：漏洞偵測、靜態分析、稽核工作流程、合約安全等專業安全研究 Skill。"
    },
    "Cisco Skill Scanner": {
      "name": "Cisco Skill Scanner",
      "desc": "Skill 安全掃描器：偵測惡意或高風險 Agent Skill，適合團隊 Skill 治理與供應鏈稽核。"
    },
    "Claude BugHunter": {
      "name": "Claude BugHunter",
      "desc": "自動化 Bug 獵人 Skill：程式碼稽核、迴歸驗證與安全相關缺陷發現工作流程。"
    },
    "Scientific Agent Skills": {
      "name": "Scientific Agent Skills",
      "desc": "K-Dense 科學 Skill 庫：140+ 即用 Skill 與 100+ 科學資料庫，涵蓋生物、化學、醫學與藥物發現。"
    },
    "Text-to-CAD": {
      "name": "Text-to-CAD",
      "desc": "文字描述產生 CAD 模型 Skill，適合工程、製造與研究原型快速建模。"
    },
    "Document Skills (Anthropic)": {
      "name": "Document Skills (Anthropic)",
      "desc": "Anthropic 生產級文件 Skill：DOCX 編輯、PDF 解析、PPTX 投影片、XLSX 表格，與 Claude 文件能力同源。",
      "installNote": "Claude Code 外掛程式：/plugin install document-skills@anthropic-agent-skills"
    },
    "Browser Use": {
      "name": "Browser Use",
      "desc": "AI 驅動瀏覽器自動化：Agent 自主瀏覽、填表、抓取與驗證，適合營運與測試場景。"
    },
    "Playwright Skill": {
      "name": "Playwright Skill",
      "desc": "Claude Code 瀏覽器自動化 Skill：Agent 自主編寫並執行 Playwright 腳本，用於 E2E 測試與頁面驗證。"
    },
    "Obsidian Skills": {
      "name": "Obsidian Skills",
      "desc": "教導 Agent 使用 Obsidian CLI 與開放式格式（Markdown、Bases、JSON Canvas），自動化筆記與知識庫操作。"
    },
    "Google Workspace CLI": {
      "name": "Google Workspace CLI",
      "desc": "Google 辦公室套件 CLI Skill：Docs、Sheets、Slides 自動化，適合報表與協作文件批次處理。"
    },
    "Skill Creator": {
      "name": "Skill Creator",
      "desc": "用 skills CLI 鷹架創建符合 Agent Skills 規範的 SKILL.md，適合團隊沉澱自訂工作流程與領域知識。",
      "installNote": "在目前目錄產生 SKILL.md 模板，填寫 name 與 description 即可"
    },
    "Finance Skills": {
      "name": "Finance Skills",
      "desc": "財務分析 Skill：報表解讀、估價模型、預算與投融資材料起草輔助。"
    },
    "Awesome Finance Skills": {
      "name": "Awesome Finance Skills",
      "desc": "金融 Skill 精選索引：會計、投資、風控與 FP&A 場景範本集合。"
    },
    "Claude Skills 大全 (财务)": {
      "name": "Claude Skills 大全 (財務)",
      "desc": "337 個 Skill 包含財務建模、預算、投融資與合規報告模板，適合財務與商業分析團隊。"
    },
    "Smithery Skills": {
      "name": "Smithery Skills",
      "desc": "Smithery 出品的 MCP/Skill 發現與安裝平台 Skill，可搜尋 Registry 熱門 Server 並產生用戶端設定片段。",
      "installNote": "也可在 smithery.ai 網頁端一鍵產生 Cursor / Claude 配置"
    },
    "Cursor Directory Skills": {
      "name": "Cursor Directory Skills",
      "desc": "社區策展的 Cursor Rules 與 Skill 索引，涵蓋全端、行動端、AI 應用等高頻項目模板。"
    },
    "Cloudflare Agent Skills": {
      "name": "Cloudflare Agent Skills",
      "desc": "Cloudflare 官方 Agent Skill：Workers、R2、KV、D1 與 Pages 開發模式，適合邊緣運算與全端部署。"
    },
    "Composio Tool Router Skills": {
      "name": "Composio Tool Router Skills",
      "desc": "Composio 工具路由 Skill：統一接取 Gmail、GitHub、Slack、Notion 等 100+ SaaS，減少 Agent 工具膠水程式碼。"
    },
    "LangGraph Agent Skills": {
      "name": "LangGraph Agent Skills",
      "desc": "LangChain 官方 LangGraph Skill：多 Agent 編排、狀態圖、檢查點與人工審批節點，適合複雜自動化。"
    },
    "Windsurf Wave Skills": {
      "name": "Windsurf Wave Skills",
      "desc": "Codeium Windsurf 專案 Skill：Cascade 記憶檔案、Wave 多檔案編輯與程式碼庫層級重構工作流程。"
    },
    "shadcn/ui Agent Skills": {
      "name": "shadcn/ui Agent Skills",
      "desc": "shadcn/ui 元件工藝 Skill：Radix + Tailwind 模式、無障礙與主題變量，避免 AI 產生廉價 UI。",
      "installNote": "配合 npx shadcn@latest add 使用效果更佳"
    },
    "Figma to Code Skills": {
      "name": "Figma to Code Skills",
      "desc": "設計稿轉程式碼 Skill：解析 Figma 節點、間距與字體，產生 React/Tailwind 元件骨架。"
    },
    "ComfyUI Workflow Skills": {
      "name": "ComfyUI Workflow Skills",
      "desc": "ComfyUI 工作流程 Skill：SD3/Flux 節點編排、ControlNet 與大量出圖，適合電商與課程配圖管線。"
    },
    "CapCut Agent Skills": {
      "name": "CapCut Agent Skills",
      "desc": "短影片剪輯 Skill：自動字幕、章節切割與封面文案，適配抖音/小紅書發布節奏。"
    },
    "Shopify Hydrogen Skills": {
      "name": "Shopify Hydrogen Skills",
      "desc": "Shopify Hydrogen 電器 Skill：Headless 店鋪、產品頁 SEO 與購物車組件，適合跨境獨立站。"
    },
    "Amazon SP-API Skills": {
      "name": "Amazon SP-API Skills",
      "desc": "亞馬遜賣家 SP-API Skill：訂單、庫存、廣告報表拉取與異常警報腳本產生。"
    },
    "XHS Creator Skills": {
      "name": "XHS Creator Skills",
      "desc": "小紅書創作 Skill：標題公式、封面關鍵字、話題標籤與留言區引導語，貼合平台調性。"
    },
    "GEO SEO Skills": {
      "name": "GEO SEO Skills",
      "desc": "生成式引擎優化（GEO）Skill：結構化 FAQ、Schema 與 llms.txt，提升 AI 搜尋可見度。"
    },
    "Technical Writing Skills": {
      "name": "Technical Writing Skills",
      "desc": "技術文件 Skill：API 參考、README、變更日誌與教學結構，符合 Divio 文件四象限。"
    },
    "Deep Research Skills": {
      "name": "Deep Research Skills",
      "desc": "深度研究 Skill：多來源檢索、對照表、引用管理與不確定性標註，適合競品與市場分析。"
    },
    "n8n Workflow Skills": {
      "name": "n8n Workflow Skills",
      "desc": "n8n 自動化 Skill：產生 RSS→AI 摘要→郵件/飛書等工作流程 JSON，加速營運管線搭建。"
    },
    "Stagehand": {
      "name": "Stagehand",
      "desc": "Browserbase Stagehand：自然語言驅動瀏覽器操作，自動寫入 Playwright 腳本並執行驗證。"
    },
    "LaTeX Paper Skills": {
      "name": "LaTeX Paper Skills",
      "desc": "學術論文 Skill：LaTeX 範本、公式排版、參考文獻 BibTeX 與審稿回覆信起草。"
    },
    "Zapier Automation Skills": {
      "name": "Zapier Automation Skills",
      "desc": "Zapier 整合 Skill：描述觸發器與動作，產生 Zap 草稿與測試清單，連接 7000+ 應用程式。"
    }
  }
} });
})();
