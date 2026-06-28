/* ZH-TW overlays — tools */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('zh-TW', {
    appCategories: {
        "对话助手": "對話助手",
        "编程开发": "程式設計開發",
        "图像创作": "影象創作",
        "视频音频": "影片音訊",
        "办公效率": "辦公效率",
        "Agent 自动化": "Agent 自動化",
        "搜索研究": "搜尋研究"
      },
      apps: [
        {
          name: "ChatGPT",
          fullEn: "Chat Generative Pre-trained Transformer",
          emoji: "💬",
          category: "对话助手",
          url: "https://chatgpt.com",
          desc: "OpenAI 出品的通用對話 AI，GPT-4o 支援文字、影象、語音多模態互動。擅長寫作、分析、程式設計、頭腦風暴，外掛生態豐富。",
          tags: [
            "通用",
            "多模態",
            "外掛"
          ],
          features: [
            "GPT-4o 多模態",
            "程式碼直譯器",
            "DALL·E 影象生成",
            "語音對話"
          ],
          bestFor: "新手入門、日常全能助手",
          tip: "免費版 GPT-4o mini 夠用；複雜任務考慮 Plus（$20/月）。"
        },
        {
          name: "Claude",
          fullEn: "Claude by Anthropic",
          emoji: "🎭",
          category: "对话助手",
          url: "https://claude.ai",
          desc: "Anthropic 開發，以長上下文（200K）、安全性、細膩文風著稱。Claude 3.5 Sonnet 在程式設計和寫作方面表現突出，Artifacts 功能可實時預覽程式碼和文件。",
          tags: [
            "長文字",
            "安全",
            "寫作"
          ],
          features: [
            "200K 上下文",
            "Artifacts 預覽",
            "PDF 分析",
            "程式碼生成"
          ],
          bestFor: "長文件處理、寫作、程式碼開發",
          tip: "處理合同/論文/程式碼庫的首選；Pro 版 $20/月。"
        },
        {
          name: "Gemini",
          fullEn: "Google Gemini",
          emoji: "✨",
          category: "对话助手",
          url: "https://gemini.google.com",
          desc: "Google 的 AI 助手，深度整合 Google 搜尋、Gmail、Docs、YouTube。Gemini 2.0 支援實時多模態互動和百萬級上下文。",
          tags: [
            "搜尋整合",
            "多模態",
            "免費"
          ],
          features: [
            "Google 生態整合",
            "實時搜尋",
            "多模態互動",
            "超長上下文"
          ],
          bestFor: "Google 生態使用者、需要實時資訊",
          tip: "已用 Gmail/Docs 的使用者可無縫銜接，免費版功能強大。"
        },
        {
          name: "通義千問",
          fullEn: "Qwen by Alibaba",
          emoji: "🌐",
          category: "对话助手",
          url: "https://tongyi.aliyun.com",
          desc: "阿里巴巴出品，中文理解優秀，Qwen2.5 在多項基準測試中表現領先。通義萬相提供影象/影片生成，通義靈碼提供程式設計輔助。",
          tags: [
            "中文",
            "國產",
            "免費"
          ],
          features: [
            "中文最佳化",
            "程式碼能力",
            "通義萬相影象",
            "API 開放"
          ],
          bestFor: "國內使用者日常對話與開發",
          tip: "無需翻牆，中文場景首選之一，免費額度充足。"
        },
        {
          name: "文心一言",
          fullEn: "ERNIE Bot by Baidu",
          emoji: "📝",
          category: "对话助手",
          url: "https://yiyan.baidu.com",
          desc: "百度 AI 助手，ERNIE 4.0 中文語料豐富，整合百度搜尋、文庫、地圖等資源，在中文知識問答和內容創作上表現出色。",
          tags: [
            "中文",
            "搜尋",
            "國產"
          ],
          features: [
            "百度搜尋整合",
            "中文創作",
            "多模態",
            "外掛市場"
          ],
          bestFor: "中文內容創作、知識查詢",
          tip: "適合需要結合中文網際網路資訊的場景。"
        },
        {
          name: "Kimi",
          fullEn: "Kimi by Moonshot AI",
          emoji: "🌙",
          category: "对话助手",
          url: "https://kimi.moonshot.cn",
          desc: "月之暗面出品，以超長上下文（最高 200 萬字）聞名。能處理整本書、長篇報告、大型程式碼庫，聯網搜尋能力強。",
          tags: [
            "超長上下文",
            "中文",
            "閱讀"
          ],
          features: [
            "200 萬字上下文",
            "聯網搜尋",
            "檔案解析",
            "程式碼理解"
          ],
          bestFor: "超長文件分析、文獻閱讀",
          tip: "需要分析整本書或大型 PDF 時的利器。"
        },
        {
          name: "DeepSeek",
          fullEn: "DeepSeek by DeepSeek AI",
          emoji: "🔍",
          category: "对话助手",
          url: "https://chat.deepseek.com",
          desc: "深度求索出品，開源模型效能領先，DeepSeek-R1 推理能力突出。API 價格極具競爭力（約為 GPT-4 的 1/50），支援本地部署。",
          tags: [
            "開源",
            "推理",
            "價效比"
          ],
          features: [
            "R1 深度推理",
            "開源可部署",
            "極低 API 價",
            "程式碼能力強"
          ],
          bestFor: "開發者、追求價效比、需要推理能力",
          tip: "開發者首選；API 整合成本極低。"
        },
        {
          name: "GitHub Copilot",
          fullEn: "GitHub Copilot",
          emoji: "👨‍💻",
          category: "编程开发",
          url: "https://github.com/features/copilot",
          desc: "微軟/OpenAI 聯合推出的 AI 程式設計助手，整合在 VS Code、JetBrains 等 IDE 中。實時補全程式碼、解釋邏輯、生成函式和單元測試。",
          tags: [
            "IDE 整合",
            "補全",
            "微軟"
          ],
          features: [
            "行級/塊級補全",
            "Chat 對話",
            "多語言支援",
            "Copilot Workspace"
          ],
          bestFor: "日常編碼加速、程式碼補全",
          tip: "程式設計師必備；學生和開源貢獻者可免費申請。"
        },
        {
          name: "Cursor",
          fullEn: "Cursor IDE",
          emoji: "⚡",
          category: "编程开发",
          url: "https://cursor.com",
          desc: "AI 原生程式碼編輯器（基於 VS Code），能理解整個專案上下文。支援 Agent 模式自主完成多檔案程式設計、除錯和重構任務。",
          tags: [
            "AI IDE",
            "全專案",
            "Agent"
          ],
          features: [
            "全專案索引",
            "Agent 自主程式設計",
            "多模型切換",
            "終端整合"
          ],
          bestFor: "專案級開發、AI 輔助程式設計",
          tip: "想大幅提升編碼效率的開發者強烈推薦。"
        },
        {
          name: "Windsurf",
          fullEn: "Windsurf by Codeium",
          emoji: "🏄",
          category: "编程开发",
          url: "https://windsurf.com",
          desc: "Codeium 推出的 AI IDE，Cascade 智慧體模式能自主理解程式碼庫、規劃並執行多步驟程式設計任務，免費額度慷慨。",
          tags: [
            "Agent",
            "多檔案",
            "免費額度"
          ],
          features: [
            "Cascade Agent",
            "程式碼庫理解",
            "多檔案編輯",
            "免費額度大"
          ],
          bestFor: "AI 驅動開發專案",
          tip: "Cursor 的強力競爭者，免費版即可體驗核心功能。"
        },
        {
          name: "Claude Code",
          fullEn: "Claude Code by Anthropic",
          emoji: "🎭",
          category: "编程开发",
          url: "https://claude.ai/code",
          desc: "Anthropic 推出的終端 AI 程式設計 Agent，深度理解整個程式碼庫，支援多檔案編輯、測試執行、Git 操作和自定義 Hooks/外掛。在長上下文和複雜重構任務上表現突出。",
          tags: [
            "終端 Agent",
            "長上下文",
            "Anthropic"
          ],
          features: [
            "全倉庫索引",
            "自主多檔案編輯",
            "Hooks/外掛擴充套件",
            "複雜重構能力強"
          ],
          bestFor: "終端工作流、複雜程式碼庫重構、Claude 生態使用者",
          tip: "需 Claude Pro/Max 訂閱；適合已習慣命令列、追求深度 Agent 能力的開發者。"
        },
        {
          name: "Codex CLI",
          fullEn: "OpenAI Codex CLI",
          emoji: "⚡",
          category: "编程开发",
          url: "https://developers.openai.com/codex/cli/",
          desc: "OpenAI 官方命令列程式設計 Agent，基於 GPT-5 系列模型，可在本地終端或雲端沙箱中自主規劃、編寫、測試和提交程式碼。支援 MCP 整合與多步自主任務。",
          tags: [
            "CLI",
            "OpenAI",
            "雲沙箱"
          ],
          features: [
            "終端/雲沙箱雙模式",
            "自主 Agent 任務",
            "MCP 工具整合",
            "GitHub 深度整合"
          ],
          bestFor: "OpenAI 訂閱使用者、自動化程式設計流水線",
          tip: "包含於 ChatGPT Plus/Pro；終端執行 codex 即可在專案中發起 Agent 任務。"
        },
        {
          name: "Grok Build",
          fullEn: "Grok Build CLI by xAI",
          emoji: "𝕏",
          category: "编程开发",
          url: "https://x.ai",
          desc: "xAI 推出的終端 AI 開發環境（Grok CLI），支援 Plan 規劃模式、子 Agent 並行執行、AGENTS.md 專案規範與 MCP 伺服器接入，適合複雜多步驟開發任務。",
          tags: [
            "CLI",
            "Plan 模式",
            "子 Agent"
          ],
          features: [
            "Plan 模式規劃",
            "子 Agent 並行",
            "AGENTS.md 支援",
            "MCP 整合"
          ],
          bestFor: "xAI 使用者、多步驟 Agent 開發、終端工作流",
          tip: "需 SuperGrok 或 X Premium+ 訂閱；專案根目錄放置 AGENTS.md 可定製 Agent 行為。"
        },
        {
          name: "Zcode",
          fullEn: "Zcode by Z.ai",
          emoji: "🧠",
          category: "编程开发",
          url: "https://zcode.z.ai",
          desc: "智譜 Z.ai 推出的 Agentic Development Environment，基於 GLM-5.2，支援桌面端、Remote 遠端開發及飛書/微信 Bot 接入，擅長長時程複雜程式設計任務的規劃與執行。",
          tags: [
            "國產",
            "ADE",
            "長時程任務"
          ],
          features: [
            "GLM-5.2 驅動",
            "桌面/Remote 雙模式",
            "飛書/微信 Bot",
            "長時程 Agent 任務"
          ],
          bestFor: "國內開發者、智譜生態、遠端協作程式設計",
          tip: "訪問 zcode.z.ai 下載；中文場景和長時程任務表現優秀，無需翻牆。"
        },
        {
          name: "Gemini CLI",
          fullEn: "Google Gemini CLI",
          emoji: "✨",
          category: "编程开发",
          url: "https://github.com/google-gemini/gemini-cli",
          desc: "Google 開源的命令列 AI 程式設計工具，使用 Google 賬號登入，免費額度慷慨（約 1000 次/天）。支援程式碼生成、檔案操作、Shell 命令執行和 Google Search Grounding。",
          tags: [
            "CLI",
            "開源",
            "免費額度"
          ],
          features: [
            "Google 賬號登入",
            "高免費配額",
            "Shell/檔案操作",
            "Search Grounding"
          ],
          bestFor: "預算有限、Google 生態使用者、CLI Agent 嚐鮮",
          tip: "npm 全域性安裝 @google/gemini-cli；免費層額度在同類工具中極具競爭力。"
        },
        {
          name: "Aider",
          fullEn: "Aider — AI Pair Programming",
          emoji: "🔗",
          category: "编程开发",
          url: "https://aider.chat",
          desc: "開源 AI 結對程式設計工具，在終端中與 GPT/Claude/DeepSeek 等任意模型 API 協作，深度整合 Git——每次修改自動 commit，支援多檔案 diff 編輯，GitHub 39K+ stars。",
          tags: [
            "開源",
            "BYOK",
            "Git 原生"
          ],
          features: [
            "任意模型 API",
            "自動 Git commit",
            "多檔案 diff",
            "語言無關"
          ],
          bestFor: "自帶 API Key、重視 Git 歷史的開發者",
          tip: "pip install aider-chat；自備 API Key 成本完全自控，是 Cursor 的輕量開源替代。"
        },
        {
          name: "Cline",
          fullEn: "Cline — VS Code Agent",
          emoji: "🧰",
          category: "编程开发",
          url: "https://cline.bot",
          desc: "開源 VS Code 擴充套件，將任意 LLM API 接入編輯器，Agent 模式可自主讀寫檔案、執行終端命令、瀏覽網頁。裝機量領先，支援 Plan/Act 分步執行。",
          tags: [
            "VS Code",
            "開源",
            "BYOK"
          ],
          features: [
            "Plan/Act 模式",
            "終端命令執行",
            "瀏覽器輔助",
            "多模型 API"
          ],
          bestFor: "VS Code 使用者、希望自選模型的開發者",
          tip: "擴充套件市場搜尋 Cline 安裝；Anthropic/OpenAI/Ollama 均可接入，無需換編輯器。"
        },
        {
          name: "Continue",
          fullEn: "Continue.dev",
          emoji: "☕",
          category: "编程开发",
          url: "https://continue.dev",
          desc: "開源 AI 程式設計助手，支援 VS Code 與 JetBrains 全家桶。提供 Tab 補全、Chat 對話和 Agent 模式，團隊可配置共享模型與規則，適合企業漸進式落地。",
          tags: [
            "多 IDE",
            "開源",
            "團隊友好"
          ],
          features: [
            "VS Code + JetBrains",
            "Tab 補全",
            "自定義 Agent",
            "團隊配置共享"
          ],
          bestFor: "多 IDE 團隊、需要統一 AI 程式設計配置",
          tip: "continue.dev 安裝擴充套件；config.yaml 可指定自有 API 或本地 Ollama 模型。"
        },
        {
          name: "Amazon Q Developer",
          fullEn: "Amazon Q Developer",
          emoji: "💼",
          category: "编程开发",
          url: "https://aws.amazon.com/q/developer/",
          desc: "AWS 推出的 AI 程式設計助手，提供 IDE 外掛和 CLI 兩種形態，深度整合 AWS 服務文件與 SDK。支援程式碼生成、安全掃描、程式碼轉換（如 Java 版本升級）和 Agent 任務。",
          tags: [
            "AWS",
            "CLI+IDE",
            "企業"
          ],
          features: [
            "AWS 知識整合",
            "程式碼安全掃描",
            "程式碼轉換",
            "免費層可用"
          ],
          bestFor: "AWS 雲開發、企業合規場景、Java/.NET 遷移",
          tip: "AWS 控制檯可免費開通；CLI 命令 q 可在終端發起 Agent 任務。"
        },
        {
          name: "Bolt.new",
          fullEn: "Bolt by StackBlitz",
          emoji: "⚡",
          category: "编程开发",
          url: "https://bolt.new",
          desc: "StackBlitz 推出的 AI 全棧開發工具，用自然語言描述即可生成完整 Web 應用（React、Vue、Node 等），瀏覽器內實時預覽與部署。",
          tags: [
            "全棧",
            "瀏覽器",
            "零配置"
          ],
          features: [
            "一句話生成應用",
            "瀏覽器內 IDE",
            "實時預覽",
            "一鍵部署"
          ],
          bestFor: "快速原型、非程式設計師建站、MVP 驗證",
          tip: "不會寫程式碼也能 10 分鐘做出可執行的網頁應用；適合驗證產品想法。"
        },
        {
          name: "Midjourney",
          fullEn: "Midjourney",
          emoji: "🎨",
          category: "图像创作",
          url: "https://www.midjourney.com",
          desc: "頂級 AI 繪畫工具，透過 Discord 或 Web 使用。藝術風格和畫面質量業界領先，社群活躍，風格多樣。",
          tags: [
            "Discord",
            "藝術",
            "高質量"
          ],
          features: [
            "極致畫質",
            "風格多樣",
            "社群靈感",
            "高畫質放大"
          ],
          bestFor: "藝術創作、概念設計、視覺探索",
          tip: "追求視覺效果首選；需學習提示詞技巧，$10/月起。"
        },
        {
          name: "DALL·E 3",
          fullEn: "DALL·E 3 by OpenAI",
          emoji: "🖼️",
          category: "图像创作",
          url: "https://openai.com/dall-e-3",
          desc: "OpenAI 影象生成模型，整合在 ChatGPT 中。擅長精確理解複雜文字描述，文字渲染能力強。",
          tags: [
            "ChatGPT",
            "精確",
            "易用"
          ],
          features: [
            "精確文字理解",
            "ChatGPT 整合",
            "文字渲染",
            "零門檻"
          ],
          bestFor: "快速出圖、ChatGPT 使用者",
          tip: "已在用 ChatGPT 的使用者零門檻上手。"
        },
        {
          name: "Stable Diffusion",
          fullEn: "Stable Diffusion by Stability AI",
          emoji: "🌀",
          category: "图像创作",
          url: "https://stability.ai",
          desc: "開源影象生成模型，可本地部署，社群生態極其豐富。支援 LoRA 微調、ControlNet 精準控制，完全掌控生成過程。",
          tags: [
            "開源",
            "本地",
            "可定製"
          ],
          features: [
            "本地部署",
            "LoRA 微調",
            "ControlNet",
            "海量社群模型"
          ],
          bestFor: "有 GPU、需完全掌控的創作者",
          tip: "需要一定技術基礎，但自由度和成本最優。"
        },
        {
          name: "可靈 AI",
          fullEn: "Kling AI by Kuaishou",
          emoji: "🎬",
          category: "视频音频",
          url: "https://klingai.com",
          desc: "快手出品的 AI 影片生成工具，支援文生影片、圖生影片，物理運動效果自然流暢，在國內影片生成領域領先。",
          tags: [
            "影片",
            "國產",
            "易用"
          ],
          features: [
            "文生影片",
            "圖生影片",
            "運動自然",
            "每日免費額度"
          ],
          bestFor: "國內影片創作、短影片製作",
          tip: "國內影片生成首選，每日有免費額度。"
        },
        {
          name: "Runway",
          fullEn: "Runway ML",
          emoji: "🎥",
          category: "视频音频",
          url: "https://runwayml.com",
          desc: "專業 AI 影片創作平臺，Gen-3 Alpha 影片生成質量領先。同時提供影片編輯、背景移除、運動追蹤等專業功能。",
          tags: [
            "專業",
            "編輯",
            "Gen-3"
          ],
          features: [
            "Gen-3 影片生成",
            "影片編輯套件",
            "運動追蹤",
            "綠幕移除"
          ],
          bestFor: "專業影片創作者、影視從業者",
          tip: "內容創作者和影視從業者的好幫手。"
        },
        {
          name: "Suno",
          fullEn: "Suno AI",
          emoji: "🎵",
          category: "视频音频",
          url: "https://suno.com",
          desc: "AI 音樂生成工具，輸入文字描述即可生成完整歌曲（含人聲演唱和伴奏），支援多種風格和語言。",
          tags: [
            "音樂",
            "人聲",
            "創作"
          ],
          features: [
            "完整歌曲生成",
            "多風格",
            "人聲演唱",
            "延長/續寫"
          ],
          bestFor: "快速製作 demo 曲、背景音樂",
          tip: "輸入「一首歡快的流行歌，關於夏天」即可生成。"
        },
        {
          name: "Notion AI",
          fullEn: "Notion AI",
          emoji: "📋",
          category: "办公效率",
          url: "https://www.notion.so/product/ai",
          desc: "整合在 Notion 筆記中的 AI 助手，幫助寫作、總結、翻譯、頭腦風暴，與筆記和資料庫無縫結合。",
          tags: [
            "筆記",
            "協作",
            "整合"
          ],
          features: [
            "文件寫作",
            "內容總結",
            "翻譯",
            "資料庫 AI"
          ],
          bestFor: "Notion 使用者提升文件效率",
          tip: "Notion 使用者必開，$10/月/成員。"
        },
        {
          name: "Gamma",
          fullEn: "Gamma App",
          emoji: "📊",
          category: "办公效率",
          url: "https://gamma.app",
          desc: "AI 驅動的簡報和文件生成工具，輸入大綱或主題即可生成精美幻燈片，支援多種主題和佈局。",
          tags: [
            "PPT",
            "設計",
            "快速"
          ],
          features: [
            "AI 生成 PPT",
            "多種主題",
            "線上分享",
            "嵌入多媒體"
          ],
          bestFor: "快速做彙報、提案、課件",
          tip: "輸入主題 30 秒生成完整 PPT，趕彙報救星。"
        },
        {
          name: "Perplexity",
          fullEn: "Perplexity AI",
          emoji: "🔎",
          category: "搜索研究",
          url: "https://www.perplexity.ai",
          desc: "AI 搜尋引擎，給出帶引用來源的直接答案而非連結列表。支援 Pro 搜尋深度調研，適合學術研究。",
          tags: [
            "搜尋",
            "引用",
            "研究"
          ],
          features: [
            "帶引用回答",
            "Pro 深度搜尋",
            "多模型選擇",
            "實時資訊"
          ],
          bestFor: "快速調研、學術研究、事實核查",
          tip: "替代 Google 做調研，但引用來源務必核實。"
        },
        {
          name: "NotebookLM",
          fullEn: "NotebookLM by Google",
          emoji: "📓",
          category: "搜索研究",
          url: "https://notebooklm.google.com",
          desc: "Google 的 AI 筆記本，上傳 PDF/文件後可與資料對話、生成摘要，還能將內容轉為 AI 播客（Audio Overview）。",
          tags: [
            "文件",
            "摘要",
            "播客"
          ],
          features: [
            "文件對話",
            "自動摘要",
            "AI 播客生成",
            "多文件分析"
          ],
          bestFor: "讀論文、做文獻綜述、學習新材料",
          tip: "上傳論文後即可對話提問，播客功能極具創意。"
        },
        {
          name: "ElevenLabs",
          fullEn: "ElevenLabs",
          emoji: "🎙️",
          category: "视频音频",
          url: "https://elevenlabs.io",
          desc: "業界領先的 AI 語音平臺，支援 Instant Voice Cloning（即時聲音克隆）、29+ 語言 TTS、配音和播客製作。",
          tags: [
            "聲音克隆",
            "TTS",
            "配音"
          ],
          features: [
            "1 分鐘樣本克隆",
            "多語言朗讀",
            "情感語調控制",
            "API 整合"
          ],
          bestFor: "克隆自己的聲音、影片配音、有聲內容",
          tip: "錄音環境要安靜無回聲，1–3 分鐘幹聲即可克隆。"
        },
        {
          name: "Fish Audio",
          fullEn: "Fish Audio",
          emoji: "🐟",
          category: "视频音频",
          url: "https://fish.audio",
          desc: "國產 AI 語音合成與克隆平臺，中文發音自然，支援零樣本/少樣本聲音克隆，適合國內創作者。",
          tags: [
            "聲音克隆",
            "中文",
            "國產"
          ],
          features: [
            "中文最佳化",
            "聲音克隆",
            "情感合成",
            "免費額度"
          ],
          bestFor: "中文配音、短影片口播、國內使用者",
          tip: "中文場景可優先嚐試，無需翻牆。"
        },
        {
          name: "OpenClaw",
          fullEn: "OpenClaw Agent Gateway",
          emoji: "🦞",
          category: "Agent 自动化",
          url: "https://docs.openclaw.ai",
          desc: "開源 AI Agent 閘道器，支援 Cron 定時任務、Webhook 觸發、多通道投遞（Telegram/Slack/Discord/飛書），可讓 Agent 自主執行調研、監控與彙報。",
          tags: [
            "開源",
            "定時任務",
            "多通道"
          ],
          features: [
            "Cron 定時排程",
            "Isolated Agent 任務",
            "Webhook 整合",
            "多通道推送"
          ],
          bestFor: "定時研報、自動調研、後臺 Agent 編排",
          tip: "先執行 openclaw doctor 完成初始化，再用 cron create 建立定時任務。"
        },
        {
          name: "Dify",
          fullEn: "Dify AI Workflow Platform",
          emoji: "🔗",
          category: "Agent 自动化",
          url: "https://dify.ai",
          desc: "開源 LLM 應用與 Agent 開發平臺，視覺化編排工作流、RAG 知識庫、工具呼叫與 API 釋出。支援自託管，GitHub 60K+ stars，企業與開發者廣泛使用。",
          tags: [
            "開源",
            "工作流",
            "RAG"
          ],
          features: [
            "視覺化 Agent 編排",
            "知識庫 RAG",
            "工具/API 整合",
            "可自託管部署"
          ],
          bestFor: "搭建企業知識庫 Agent、自定義 AI 應用",
          tip: "cloud.dify.ai 可免費試用；有技術基礎可 Docker 自託管，資料完全自控。"
        },
        {
          name: "釦子 Coze",
          fullEn: "Coze by ByteDance",
          emoji: "🎯",
          category: "Agent 自动化",
          url: "https://www.coze.cn",
          desc: "位元組跳動出品的零程式碼 AI Agent 平臺，拖拽即可建立 Bot，一鍵釋出到飛書、微信、Discord、Telegram。外掛市場豐富，國內使用者上手最快。",
          tags: [
            "零程式碼",
            "國產",
            "多通道"
          ],
          features: [
            "視覺化 Bot 搭建",
            "外掛與工作流",
            "飛書/微信釋出",
            "免費額度充足"
          ],
          bestFor: "快速搭建客服/助手 Bot、國內團隊協作",
          tip: "coze.cn 無需翻牆；先從「個人助手」模板改提示詞，再逐步加外掛。"
        },
        {
          name: "n8n",
          fullEn: "n8n Workflow Automation",
          emoji: "🏭",
          category: "Agent 自动化",
          url: "https://n8n.io",
          desc: "開源工作流自動化平臺，深度整合 AI Agent 節點。可連線 400+ 服務，支援自託管，適合把 LLM 嵌入郵件、表格、CRM 等業務流水線。",
          tags: [
            "開源",
            "工作流",
            "自託管"
          ],
          features: [
            "400+ 應用整合",
            "AI Agent 節點",
            "視覺化流程編輯",
            "可自託管"
          ],
          bestFor: "業務自動化、跨系統串聯、技術團隊編排",
          tip: "n8n.io 有免費雲版；敏感資料建議 Docker 自託管，從現成 AI 模板改起。"
        },
        {
          name: "Manus",
          fullEn: "Manus AI Agent",
          emoji: "🚀",
          category: "Agent 自动化",
          url: "https://manus.im",
          desc: "通用 AI Agent 產品，能自主規劃並執行多步驟任務——瀏覽網頁、寫文件、跑程式碼、整理報告。適合「交給它一件事、等結果」的端到端場景。",
          tags: [
            "通用 Agent",
            "自主執行",
            "多步驟"
          ],
          features: [
            "任務自主規劃",
            "網頁瀏覽與操作",
            "程式碼/文件產出",
            "非同步長任務"
          ],
          bestFor: "複雜調研、報告撰寫、端到端任務外包",
          tip: "描述目標而非步驟，如「整理上週 AI 行業要聞並輸出 Markdown 報告」；結果務必人工複核。"
        },
        {
          name: "豆包",
          fullEn: "Doubao by ByteDance",
          emoji: "🫘",
          category: "对话助手",
          url: "https://www.doubao.com",
          desc: "位元組跳動出品的 AI 助手，基於豆包大模型，中文對話自然流暢。深度整合抖音、飛書生態，支援多模態理解與創作，國內使用者基數大。",
          tags: [
            "中文",
            "國產",
            "多模態"
          ],
          features: [
            "中文對話最佳化",
            "影象/影片理解",
            "飛書整合",
            "免費額度充足"
          ],
          bestFor: "國內日常對話、內容創作、辦公協作",
          tip: "抖音/飛書使用者可無縫銜接；網頁版與 App 均可免費使用。"
        },
        {
          name: "Grok",
          fullEn: "Grok by xAI",
          emoji: "𝕏",
          category: "对话助手",
          url: "https://grok.com",
          desc: "xAI 開發的 AI 助手，整合在 X（Twitter）平臺。以實時資訊和幽默風格著稱，Grok 3 在數學與推理任務上表現突出，支援深度搜尋模式。",
          tags: [
            "實時資訊",
            "X 整合",
            "推理"
          ],
          features: [
            "X 實時資訊流",
            "DeepSearch 模式",
            "多模態理解",
            "程式碼與數學"
          ],
          bestFor: "追蹤熱點、社交媒體分析、實時資訊",
          tip: "需要 X Premium+ 訂閱；適合關注實時新聞與社交動態的使用者。"
        },
        {
          name: "Flux",
          fullEn: "Flux by Black Forest Labs",
          emoji: "🌊",
          category: "图像创作",
          url: "https://bfl.ai",
          desc: "Black Forest Labs 出品的開源影象生成模型，Flux.1 在畫質、文字渲染和人體結構上表現優異，支援本地部署與 API 呼叫。",
          tags: [
            "開源",
            "高質量",
            "文字渲染"
          ],
          features: [
            "極致畫質",
            "精準文字渲染",
            "開源可部署",
            "LoRA 生態"
          ],
          bestFor: "高質量插畫、商業設計、本地出圖",
          tip: "可透過 Replicate、fal.ai 等平臺 API 呼叫，也可 ComfyUI 本地執行。"
        },
        {
          name: "Sora",
          fullEn: "Sora by OpenAI",
          emoji: "🎞️",
          category: "视频音频",
          url: "https://openai.com/sora",
          desc: "OpenAI 的 AI 影片生成模型，支援文生影片、圖生影片，畫面連貫性和物理真實感業界領先。Sora Turbo 生成速度大幅提升。",
          tags: [
            "OpenAI",
            "高質量",
            "物理真實"
          ],
          features: [
            "文生/圖生影片",
            "最長 20 秒",
            "Remix 編輯",
            "Storyboard 分鏡"
          ],
          bestFor: "高質量短影片、廣告創意、概念預覽",
          tip: "需 ChatGPT Plus/Pro 訂閱；提示詞描述鏡頭運動和光影效果更佳。"
        },
        {
          name: "Microsoft Copilot",
          fullEn: "Microsoft Copilot",
          emoji: "🪟",
          category: "办公效率",
          url: "https://copilot.microsoft.com",
          desc: "微軟 AI 助手，深度整合 Word、Excel、PowerPoint、Outlook、Teams。基於 GPT-4o，可在 Office 中直接生成、編輯、分析文件與資料。",
          tags: [
            "Office",
            "微軟",
            "企業"
          ],
          features: [
            "Word/Excel/PPT AI",
            "Outlook 郵件助手",
            "Teams 會議摘要",
            "企業資料整合"
          ],
          bestFor: "Office 365 使用者、企業辦公自動化",
          tip: "Microsoft 365 訂閱使用者可直接在 Office 側邊欄喚起 Copilot。"
        },
        {
          name: "秘塔 AI 搜尋",
          fullEn: "Metaso AI Search",
          emoji: "🔭",
          category: "搜索研究",
          url: "https://metaso.cn",
          desc: "國產 AI 搜尋引擎，無廣告、回答帶引用來源，支援「全網」「學術」「播客」等多種搜尋模式，中文調研體驗優秀。",
          tags: [
            "搜尋",
            "國產",
            "無廣告"
          ],
          features: [
            "帶引用回答",
            "學術/播客模式",
            "思維導圖生成",
            "檔案上傳分析"
          ],
          bestFor: "中文調研、學術研究、無廣告資訊檢索",
          tip: "國內可直接訪問；學術模式適合查論文，引用來源建議交叉核實。"
        }
      ],
      handsOnCategories: {
        "编程开发": "程式設計開發",
        "图像设计": "影象設計",
        "视频音频": "影片音訊",
        "写作办公": "寫作辦公",
        "搜索研究": "搜尋研究",
        "Agent 自动化": "Agent 自動化"
      },
      handsOnUi: {
        countShown: "顯示 {visible} / {total} 個",
        emptyHint: "該分類下暫無案例，試試其他標籤。",
        resultLabel: "完成後你將得到：",
        tipsLabel: "小貼士：",
        commandPrompt: "命令 / 提示詞",
        copyToSoftware: "複製到 {software}",
        openWebsite: "開啟 {software} 官網"
      },
      handsOnCases: [
        {
          title: "用 Cursor Codex 編寫網頁計算器",
          software: "Cursor",
          emoji: "⚡",
          url: "https://cursor.com",
          difficulty: "入門",
          duration: "約 15 分鐘",
          desc: "從零開始，用 Cursor 內建 Codex Agent 生成一個可執行的 HTML 計算器，體驗「說一句話 → 得到可執行程式碼」的 AI 程式設計流程。",
          steps: [
            "安裝 Cursor，新建空資料夾 calc-demo 並用 Cursor 開啟",
            "按 Cmd+I（Mac）/ Ctrl+I（Win）開啟 Composer / Agent 面板",
            "貼上下方提示詞，讓 Codex 生成單檔案 index.html",
            "在資源管理器中右鍵 index.html → Reveal in Finder → 雙擊用瀏覽器開啟",
            "測試加減乘除；若有樣式或邏輯問題，選中程式碼繼續對話：「按鈕點選沒反應，請修復」",
            "（可選）讓 Codex 增加鍵盤輸入、歷史記錄或深色/淺色主題切換"
          ],
          prompt: "請幫我用 HTML + CSS + JavaScript 建立一個簡潔美觀的計算器網頁：\n\n功能要求：\n- 支援加、減、乘、除和清零（C）\n- 顯示屏實時顯示輸入與結果\n- 防止連續按運算子等常見邏輯錯誤\n\n設計要求：\n- 深色主題，圓角按鈕，hover 有輕微反饋\n- 移動端也能正常使用\n\n交付要求：\n- 輸出單個 index.html 檔案，可直接雙擊在瀏覽器開啟\n- 程式碼加中文註釋\n- 最後告訴我如何執行和測試",
          result: "得到一個可雙擊開啟的 calculator 網頁，能完成四則運算。",
          tips: "第一次用 AI 寫程式碼，重點不是「一次完美」，而是學會：描述需求 → 生成 → 執行 → 反饋修復。"
        },
        {
          title: "用 Midjourney 生成自由女神像圖片",
          software: "Midjourney",
          emoji: "🎨",
          url: "https://www.midjourney.com",
          difficulty: "入門",
          duration: "約 10 分鐘",
          desc: "在 Midjourney 中用英文提示詞生成一張電影感的紐約自由女神像圖片，學會文生圖的基本流程和引數用法。",
          steps: [
            "註冊 Midjourney，進入 midjourney.com 的 Create 頁面（或 Discord #general 頻道）",
            "點選輸入框，輸入 /imagine 命令（Web 版可直接輸入提示詞）",
            "貼上下方英文提示詞併傳送，等待約 30–60 秒生成 4 張候選圖",
            "點選 U1–U4 放大你最喜歡的一張；不滿意可點 🔄 重新生成",
            "想微調構圖可點 V1–V4 做變體，或修改提示詞中的 --ar 比例後重試",
            "右鍵儲存高畫質圖，可用於 PPT 封面、文章配圖或設計參考"
          ],
          prompt: "Statue of Liberty on Liberty Island, New York Harbor, golden hour sunset, cinematic wide shot, dramatic clouds, warm light reflecting on water, photorealistic, highly detailed, 8k --ar 16:9 --v 6",
          result: "得到一張 16:9 電影感自由女神像高畫質圖，可用於演示或設計參考。",
          tips: "Midjourney 以英文提示詞效果最佳。關鍵詞順序：主體 → 環境 → 光線 → 風格 → 引數（--ar 比例、--v 版本）。"
        },
        {
          title: "用 ChatGPT + DALL·E 3 快速出圖（免 Discord）",
          software: "ChatGPT",
          emoji: "💬",
          url: "https://chat.openai.com",
          difficulty: "入門",
          duration: "約 5 分鐘",
          desc: "不想折騰 Discord？直接在 ChatGPT 裡用自然語言讓 DALL·E 3 生成自由女神像，適合最快體驗文生圖。",
          steps: [
            "開啟 ChatGPT（Plus 或 Team 賬戶支援 DALL·E 3；免費版可用有限額度）",
            "新建對話，直接貼上下方提示詞傳送",
            "ChatGPT 會自動呼叫 DALL·E 生成圖片，約 10–20 秒出結果",
            "若構圖不滿意，回覆：「把鏡頭拉近，突出雕像面部，背景虛化」繼續迭代",
            "點選圖片可下載 PNG，用於文章、課件或社媒配圖"
          ],
          prompt: "請用 DALL·E 為我生成一張圖片：\n\n主題：紐約自由女神像，日落黃金時刻，從海港遠處拍攝的電影感廣角鏡頭，天空有戲劇性雲彩，水面有溫暖反光。\n\n風格：寫實攝影，高細節，適合作為文章封面。\n\n畫幅：橫向 16:9。",
          result: "在 ChatGPT 對話中直接獲得可下載的自由女神像圖片，無需額外工具。",
          tips: "ChatGPT 會用中文理解你的需求並自動轉譯為 DALL·E 提示。迭代時描述「要什麼」和「不要什麼」比重新寫一整段更高效。"
        },
        {
          title: "用 ElevenLabs 克隆自己的聲音",
          software: "ElevenLabs",
          emoji: "🎙️",
          url: "https://elevenlabs.io",
          difficulty: "進階",
          duration: "約 20 分鐘",
          desc: "上傳一段你的幹聲錄音，在 ElevenLabs 建立個人聲音模型，再用它朗讀任意文字——體驗聲音克隆的完整流程。",
          steps: [
            "註冊 ElevenLabs，進入左側 Voice Lab → Instant Voice Cloning",
            "用手機「語音備忘錄」錄製 1–3 分鐘幹聲：安靜房間、無背景音樂、正常語速朗讀一段文章",
            "上傳錄音，為聲音命名（如 my-voice），勾選克隆同意宣告並建立",
            "進入 Text to Speech，在 Voice 下拉中選擇剛克隆的聲音",
            "貼上下方測試文字，點選 Generate 試聽效果",
            "滿意後點選 Download 匯出 MP3，可用於影片配音或播客片頭"
          ],
          prompt: "大家好，我是[你的暱稱]。這是我用 AI 克隆的聲音測試。\n\n今天天氣不錯，我想讀一段簡短的介紹：人工智慧正在改變我們學習、工作和創作的方式。希望這個聲音聽起來自然、清晰、有親和力。\n\n謝謝收聽！",
          result: "獲得一個可複用的「你的聲音」模型，輸入任意文字即可生成配音音訊。",
          tips: "克隆質量取決於錄音：安靜環境、一致音量、避免噴麥。僅克隆並商用自己有權使用的聲音，勿克隆他人聲音。"
        },
        {
          title: "用 Fish Audio 克隆中文聲音（國產方案）",
          software: "Fish Audio",
          emoji: "🐟",
          url: "https://fish.audio",
          difficulty: "進階",
          duration: "約 15 分鐘",
          desc: "國內使用者可用 Fish Audio 完成中文聲音克隆，發音自然，適合短影片口播和中文配音場景。",
          steps: [
            "開啟 fish.audio 註冊賬號，進入「聲音克隆」或「建立聲音」",
            "上傳 30 秒–3 分鐘中文幹聲（朗讀新聞或文章片段即可）",
            "按提示完成聲音命名和建立，等待模型訓練（通常 1–5 分鐘）",
            "在「文字轉語音」輸入框貼上下方測試文案",
            "選擇剛建立的聲音，調整語速後點選生成",
            "試聽並下載音訊，對比 ElevenLabs 看哪個更適合你的中文場景"
          ],
          prompt: "各位好，歡迎收聽今天的 AI 學習筆記。\n\n這一節我們來講：怎樣用真實軟體上手人工智慧。不需要先學完所有理論，帶著具體問題去操作，才是最快的學習方式。\n\n如果你覺得有用，記得點贊收藏。",
          result: "獲得一段用你聲音朗讀的中文測試音訊，可用於口播或配音對比。",
          tips: "中文克隆優先選 Fish Audio；需要多語言或英文配音時再配合 ElevenLabs。"
        },
        {
          title: "用 OpenClaw 設定定時股票資訊蒐集",
          software: "OpenClaw",
          emoji: "🦞",
          url: "https://docs.openclaw.ai",
          difficulty: "高階",
          duration: "約 30 分鐘",
          desc: "配置 OpenClaw Cron 定時任務，讓每個交易日早上自動執行 Agent 蒐集股票資訊，並推送到 Telegram 或 Slack。",
          steps: [
            "安裝 OpenClaw CLI，執行 openclaw doctor --fix 完成 Gateway 初始化",
            "確保 Gateway 程序在執行（定時任務在 Gateway 內排程，非模型內部）",
            "將下方命令中的關注標的、時區、推送頻道 ID 改成你的配置",
            "在終端執行命令建立 cron 任務（工作日 8:30 Asia/Shanghai）",
            "執行 openclaw cron list 確認任務已入庫，openclaw cron runs --id <job-id> 檢視執行記錄",
            "首次可手動觸發測試：openclaw cron run <job-id>，檢查推送內容是否可讀、有據可查"
          ],
          prompt: "openclaw cron create \"30 8 * * 1-5\" \\\n  --name \"每日股票資訊簡報\" \\\n  --tz \"Asia/Shanghai\" \\\n  --session isolated \\\n  --message \"你是專業的投資研究助理。請蒐集並整理今日股市相關資訊：\\n\\n關注標的：滬深300、寧德時代(300750)、蘋果(AAPL)\\n\\n輸出格式（中文，400字以內）：\\n1) 宏觀要聞（最多3條，附來源）\\n2) 個股/板塊異動（各最多2條）\\n3) 今日關注提醒（非投資建議，僅資訊彙總）\\n\\n要求：沒有可靠資訊就寫「暫無重要更新」；保留來源名稱；不要編造資料。\" \\\n  --announce \\\n  --channel telegram \\\n  --to \"你的Telegram使用者ID或頻道ID\"",
          result: "每個交易日早上自動收到一份 Agent 整理的股票資訊簡報（需自行配置推送渠道）。",
          tips: "OpenClaw 輸出僅供參考，不構成投資建議；關鍵資料務必交叉核實。推送前先用 --channel 和 --to 測通訊息鏈路。"
        },
        {
          title: "用 GitHub Copilot 生成函式與單元測試",
          software: "GitHub Copilot",
          emoji: "👨‍💻",
          url: "https://github.com/features/copilot",
          difficulty: "入門",
          duration: "約 12 分鐘",
          desc: "在 VS Code 中用 Copilot 補全業務函式，並一鍵生成 Jest 單元測試，體驗日常編碼提效。",
          steps: [
            "安裝 VS Code + GitHub Copilot 外掛並登入",
            "新建 utils/discount.js，寫函式註釋描述折扣計算規則",
            "輸入 function 開頭，接受 Copilot 補全的函式體",
            "新建 utils/discount.test.js，輸入 describe 觸發測試用例補全",
            "執行 npm test（或 jest）驗證透過，不透過則把報錯貼回 Chat 面板修復",
            "嘗試在註釋裡改規則（如滿 200 減 30），觀察補全如何跟隨變化"
          ],
          prompt: "// 計算訂單折扣：滿 100 減 10，滿 200 減 30，不支援負數金額\n// 返回 { original, discount, final } 物件\nfunction calcDiscount(amount) {\n  // Copilot 從這裡開始補全\n}",
          result: "得到可執行的折扣函式 + 基礎單元測試，理解「註釋驅動補全」工作流。",
          tips: "Copilot 對清晰函式註釋和型別提示響應最好；測試檔案與實現放一起時補全質量更高。"
        },
        {
          title: "用 Windsurf 給網站批次加深色模式",
          software: "Windsurf",
          emoji: "🏄",
          url: "https://codeium.com/windsurf",
          difficulty: "進階",
          duration: "約 25 分鐘",
          desc: "用 Windsurf Cascade Agent 理解小型前端專案結構，跨多檔案新增 CSS 變數與主題切換按鈕。",
          steps: [
            "用 Windsurf 開啟含 index.html + styles.css 的練習專案",
            "開啟 Cascade，貼上下方任務描述",
            "讓 Agent 列出將修改的檔案清單，確認後執行",
            "在瀏覽器預覽，點選主題切換驗證顏色變化",
            "若有漏改的選擇器，選中問題元素繼續對話：「頂欄在暗色下對比度不夠」",
            "提交前讓 Agent 生成簡短變更說明（changelog）"
          ],
          prompt: "請為當前專案新增深色/淺色主題切換：\n1) 用 CSS 變數定義顏色體系\n2) 在頁頭加切換按鈕，偏好寫入 localStorage\n3) 不破壞現有佈局，移動端可用\n4) 修改後告訴我改了哪些檔案、如何測試",
          result: "專案支援一鍵深/淺色切換，體驗 Agent 跨檔案協作。",
          tips: "Cascade 適合「多檔案一致改動」；先讓 Agent 給計劃再執行，比直接「全改」更可控。"
        },
        {
          title: "用 Claude 審閱合同並標註風險條款",
          software: "Claude",
          emoji: "🎭",
          url: "https://claude.ai",
          difficulty: "進階",
          duration: "約 20 分鐘",
          desc: "上傳 PDF 合同，讓 Claude 從乙方視角標註高風險條款並給出修改建議，適合法務/採購入門練習。",
          steps: [
            "註冊 Claude，新建對話（Pro 版可上傳更長 PDF）",
            "上傳合同 PDF 或貼上關鍵章節文字",
            "貼上下方提示詞，指定你是「乙方」立場",
            "閱讀輸出的風險分級表，核對頁碼/章節引用是否準確",
            "追問：「請把高風險條款改寫成更平衡的替代表述」",
            "將結果匯出給法務同事複核——AI 審閱不能替代律師"
          ],
          prompt: "你是一位謹慎的合同審閱助手。我方為乙方。\n\n請審閱上傳的合同並輸出：\n1) 高風險條款 Top 5（引用原文+理由）\n2) 中風險條款 3 條\n3) 每條給出可談判的修改建議\n4) 用表格彙總：條款位置 | 風險等級 | 建議\n\n注意：不確定的表述請標註「需人工核實」，不要編造法條。",
          result: "得到結構化合同風險清單與談判建議草稿。",
          tips: "Claude 長文件能力強；務必上傳完整版並交叉核對原文，敏感合同勿用公共賬號處理。"
        },
        {
          title: "用 Gemini 寫帶實時搜尋的行業快報",
          software: "Gemini",
          emoji: "✨",
          url: "https://gemini.google.com",
          difficulty: "入門",
          duration: "約 10 分鐘",
          desc: "利用 Gemini 與 Google 搜尋整合，快速生成某行業一週要聞快報，並附可點選來源。",
          steps: [
            "開啟 gemini.google.com 並登入 Google 賬號",
            "開啟「使用 Google 搜尋」或類似聯網選項（如有）",
            "貼上下方提示詞，將行業改成你關心的領域",
            "檢查文末來源連結是否可開啟，刪除明顯過時條目",
            "要求 Gemini 輸出「管理層 3 條結論 + 執行層 3 條行動」",
            "複製到 Google Docs 供團隊週會使用"
          ],
          prompt: "請調研「2026 年中國跨境電商」過去 7 天重要動態，輸出 400 字中文快報：\n\n結構：\n- 本週 3 條要聞（每條一句話+來源）\n- 對中小賣家的影響\n- 下週值得關注的 2 個變數\n\n要求引用可核查來源，沒有可靠訊息就寫「暫無」。",
          result: "一份帶來源的行業快報，可直接用於晨會或內部資訊。",
          tips: "Gemini 的優勢是搜尋整合；仍要逐條點開來源核實，防止二手轉載誤差。"
        },
        {
          title: "用通義千問寫小紅書種草筆記",
          software: "通义千问",
          emoji: "🌐",
          url: "https://tongyi.aliyun.com",
          difficulty: "入門",
          duration: "約 8 分鐘",
          desc: "用通義千問生成符合小紅書語感的種草文案，含標題、正文、標籤和封面建議。",
          steps: [
            "開啟通義千問，新建對話",
            "在提示詞中填入真實產品賣點（勿誇大功效）",
            "生成後要求「再寫一版更口語、更短」做 A/B",
            "讓 AI 給出 3 個封面圖拍攝/生成建議",
            "複製 5 個話題標籤，檢查是否貼合平臺規範",
            "釋出前人工稽核廣告法敏感詞（絕對化用語等）"
          ],
          prompt: "產品是「便攜冷萃咖啡杯」，賣點：5 分鐘快萃、雙層防燙、顏值簡約。\n\n請寫小紅書種草筆記：\n1) 吸引點選的標題 3 個\n2) 正文 250 字，第一人稱，口語化，分段+emoji 適度\n3) 5 個話題標籤\n4) 評論區引導語 1 句\n\n合規：不使用「最好」「第一」等絕對化表述。",
          result: "一套可釋出的小紅書種草文案草稿與標籤。",
          tips: "通義千問中文語感好；真實體驗細節要自己補，否則容易「泛種草」。"
        },
        {
          title: "用 Kimi 精讀 100 頁 PDF 年報",
          software: "Kimi",
          emoji: "🌙",
          url: "https://kimi.moonshot.cn",
          difficulty: "進階",
          duration: "約 25 分鐘",
          desc: "上傳上市公司年報 PDF，讓 Kimi 提取財務亮點、風險因素與管理層論述，適合投研/商科學習。",
          steps: [
            "開啟 Kimi，點選附件上傳年報 PDF（可公開樣本）",
            "等待解析完成，貼上下方分析框架",
            "核對 Kimi 給出的數字是否能在 PDF 中找到原文",
            "追問：「現金流與淨利潤差異原因？」",
            "匯出為 Markdown 筆記，標註「待核實」欄位",
            "勿將未公開內幕材料上傳任何雲端 AI"
          ],
          prompt: "請基於上傳的年報，用中文輸出：\n1) 公司主業一句話\n2) 近三年營收/淨利潤趨勢（列表）\n3) 本期 3 個亮點 + 3 個風險（引用章節頁碼）\n4) 管理層對未來的 3 條表述\n5) 投資者需追問的 3 個問題\n\n數字必須來自文件；找不到就寫「未披露」。",
          result: "結構化年報精讀筆記，含頁碼引用與追問清單。",
          tips: "Kimi 長 PDF 能力強；財務數字務必回原文核對，AI 可能看錯表格單位（萬元/億元）。"
        },
        {
          title: "用 DeepSeek 除錯 Python 報錯",
          software: "DeepSeek",
          emoji: "🔍",
          url: "https://chat.deepseek.com",
          difficulty: "入門",
          duration: "約 12 分鐘",
          desc: "把 Traceback 和程式碼片段交給 DeepSeek，定位 IndexError 根因並給出修復與防呆建議。",
          steps: [
            "開啟 DeepSeek 對話，新建聊天",
            "貼上下方含 bug 的程式碼 + 完整報錯",
            "閱讀「原因解釋」與「修復程式碼」兩段輸出",
            "本地替換程式碼並重新執行驗證",
            "追問：「請加輸入校驗，避免空列表」",
            "對比修復前後差異，總結同類 bug 模式"
          ],
          prompt: "以下 Python 程式碼報錯，請中文解釋原因並給出修復：\n\n```python\ndef avg_positive(nums):\n    pos = [n for n in nums if n > 0]\n    return sum(pos) / len(pos)\n\nprint(avg_positive([]))\n```\n\nTraceback: ZeroDivisionError: division by zero\n\n請：1) 解釋 2) 修復程式碼 3) 加邊界處理 4) 給 2 個測試用例",
          result: "修復後的函式可處理空列表，並理解除零類錯誤防護。",
          tips: "DeepSeek 程式碼價效比高；貼完整 Traceback 比只貼最後一行更有效。"
        },
        {
          title: "用 Stable Diffusion 生成電商產品白底圖",
          software: "Stable Diffusion",
          emoji: "🌀",
          url: "https://stability.ai",
          difficulty: "進階",
          duration: "約 20 分鐘",
          desc: "透過 Stability 線上服務或本地 WebUI，生成簡約風產品展示圖，學習文生圖 + 負面提示詞。",
          steps: [
            "開啟 Stability 官方線上生成或本地 Automatic1111 / ComfyUI",
            "貼上英文提示詞與負面提示詞",
            "設定 1:1 或 4:5 畫幅，步數 25–30，CFG 7 左右",
            "生成 4 張，選最乾淨的一張放大",
            "用提示詞加入品牌色背景做第二張場景圖",
            "商用前確認平臺許可與產品實拍版權"
          ],
          prompt: "Positive: minimalist product photo of wireless earbuds, pure white background, studio lighting, soft shadow, centered composition, ultra sharp, commercial photography, 4k\n\nNegative: text, watermark, logo, blurry, deformed, extra objects, cluttered background",
          result: "一張可用於電商詳情頁的簡約產品展示圖。",
          tips: "產品圖關鍵詞：white background / studio lighting / centered；負面提示詞能顯著減少畸形。"
        },
        {
          title: "用可靈 AI 做 15 秒產品展示影片",
          software: "可灵 AI",
          emoji: "🎬",
          url: "https://klingai.com",
          difficulty: "入門",
          duration: "約 15 分鐘",
          desc: "輸入中文提示詞，讓可靈生成豎屏產品展示短片，適合抖音/小紅書帶貨場景。",
          steps: [
            "註冊可靈 AI，進入影片生成",
            "選擇文生影片，畫幅 9:16",
            "貼上下方提示詞，生成 5–10 秒片段",
            "不滿意可調整「鏡頭緩慢推進」「柔光」等詞重試",
            "下載 MP4，匯入剪映加字幕與 CTA",
            "釋出時標註 AI 生成內容（按平臺要求）"
          ],
          prompt: "豎屏 9:16，簡約白色桌面上的一款智慧保溫杯，蒸汽緩緩升起，鏡頭緩慢環繞產品，柔光自然，高階商業廣告質感，背景乾淨，無文字無水印，真實物理運動",
          result: "一段豎屏產品展示短影片素材。",
          tips: "可靈對「緩慢運動」「商業廣告質感」響應好；複雜劇情分鏡建議拆成多段生成再剪輯。"
        },
        {
          title: "用 Runway 把產品圖變成動態鏡頭",
          software: "Runway",
          emoji: "🎥",
          url: "https://runwayml.com",
          difficulty: "進階",
          duration: "約 18 分鐘",
          desc: "上傳靜態產品照片，用 Runway 圖生影片生成 4 秒動態展示，用於廣告片頭或網站 Hero。",
          steps: [
            "註冊 Runway，進入 Gen-3 圖生影片",
            "上傳一張清晰產品 JPG/PNG（最好白底）",
            "在 Motion Prompt 貼上下方英文鏡頭描述",
            "生成 4s 片段，預覽運動是否自然",
            "匯出後用剪映/Web 編輯器迴圈播放或加背景音樂",
            "注意產品邊緣是否變形，變形則換更簡單的運鏡詞"
          ],
          prompt: "Slow cinematic push-in, subtle parallax, product stays sharp, soft studio light, gentle shadow movement, no morphing, commercial ad quality",
          result: "4 秒產品動態鏡頭，可用於片頭或落地頁背景。",
          tips: "圖生影片宜「小運動」：slow push / subtle rotate；大幅度運動易變形。"
        },
        {
          title: "用 Suno 生成 30 秒品牌宣傳曲",
          software: "Suno",
          emoji: "🎵",
          url: "https://suno.com",
          difficulty: "入門",
          duration: "約 10 分鐘",
          desc: "用 Suno v4 根據品牌調性生成短宣傳曲，含器樂與節奏，可用於影片 BGM 或活動暖場。",
          steps: [
            "註冊 Suno，點選 Create",
            "選擇 Custom 模式，貼上下方風格描述",
            "生成 2 首，選節奏更穩的一首",
            "使用 Extend 延長到 30–45 秒（如需要）",
            "下載 MP3，在影片中壓低音量做背景樂",
            "商用前檢視 Suno 當前許可政策"
          ],
          prompt: "Instrumental upbeat corporate tech, modern synth and light percussion, optimistic, clean, no vocals, suitable for AI product launch video, 100-110 BPM",
          result: "一段無 VOC 的品牌宣傳背景音樂。",
          tips: "Suno 寫「Instrumental + 情緒 + BPM + 場景」穩定；帶歌詞則寫明語言與主題。"
        },
        {
          title: "用 Notion AI 整理會議紀要與待辦",
          software: "Notion AI",
          emoji: "📋",
          url: "https://www.notion.so/product/ai",
          difficulty: "入門",
          duration: "約 12 分鐘",
          desc: "在 Notion 頁面貼上會議速記，用 AI 生成結構化紀要、決策項和可勾選待辦列表。",
          steps: [
            "在 Notion 新建頁面「週會 2026-06-25」",
            "貼上原始會議速記（或語音轉寫文字）",
            "選中全文，點選 Notion AI → Summarize → Action items",
            "用提示詞進一步要求「按負責人分組待辦」",
            "把待辦轉成 Notion to-do 塊並 @同事",
            "分享頁面連結給參會人確認"
          ],
          prompt: "基於當前頁面內容，請輸出：\n1) 會議摘要（5 條以內）\n2) 關鍵決策\n3) 待辦清單：負責人 | 事項 | 截止日期\n4) 未決問題\n\n保持中文，不要編造未討論的內容。",
          result: "可協作的會議紀要頁面，含分組待辦。",
          tips: "Notion AI 適合「已有筆記二次整理」；會中實時記關鍵詞比事後補寫更準。"
        },
        {
          title: "用 Gamma 10 分鐘生成路演 PPT",
          software: "Gamma",
          emoji: "📊",
          url: "https://gamma.app",
          difficulty: "入門",
          duration: "約 10 分鐘",
          desc: "輸入大綱讓 Gamma 自動生成 10 頁路演 Deck，可線上分享與匯出 PDF。",
          steps: [
            "登入 Gamma，選擇 Create → Presentation",
            "貼上下方路演大綱，選擇簡約科技主題",
            "等待生成後逐頁檢查資料與措辭",
            "在關鍵頁插入產品截圖或圖表",
            "用 AI 改寫過長段落為要點列表",
            "匯出 PDF 或分享連結給同事預覽"
          ],
          prompt: "生成 10 頁中文路演 PPT：\n\n主題：AI 學習平臺「BestWayToLearn.AI」\n受眾：企業培訓負責人\n結構：封面 / 痛點 / 解決方案 / 產品演示 / 學習路徑 / 案例 / 商業模式 / 競爭差異 / 里程碑 / 聯絡頁\n\n風格：深色科技風，每頁 3-5 要點，避免大段文字",
          result: "10 頁可分享的路演簡報初稿。",
          tips: "Gamma 適合「結構清晰的大綱」；數字與案例需人工替換為真實資訊。"
        },
        {
          title: "用 Perplexity 做競品調研一頁紙",
          software: "Perplexity",
          emoji: "🔎",
          url: "https://www.perplexity.ai",
          difficulty: "入門",
          duration: "約 15 分鐘",
          desc: "用 Perplexity Pro Search 梳理競品格局，輸出帶引用來源的一頁對比摘要。",
          steps: [
            "開啟 Perplexity，登入（Pro 搜尋更深）",
            "貼上下方調研問題，等待檢索完成",
            "點選引用編號核對原始來源",
            "追問：「請做 ChatGPT vs Claude vs Gemini 功能對比表」",
            "複製結果到 Notion/飛書，標註調研日期",
            "刪除過時或無法開啟的來源條目"
          ],
          prompt: "請調研 2026 年「AI 程式設計 IDE」市場：Cursor、Windsurf、GitHub Copilot 的定位、定價、核心差異、目標使用者。輸出中文一頁紙：市場概覽 | 對比表 | 3 條選型建議 | 引用來源",
          result: "帶引用的競品調研一頁紙，可用於選型討論。",
          tips: "Perplexity 強項是「可核查來源」；表格仍建議回官網核實價格。"
        },
        {
          title: "用 NotebookLM 把 3 篇論文變成 AI 播客",
          software: "NotebookLM",
          emoji: "📓",
          url: "https://notebooklm.google.com",
          difficulty: "進階",
          duration: "約 20 分鐘",
          desc: "上傳 3 篇相關 PDF 論文，生成 Audio Overview 播客，通勤時聽文獻要點。",
          steps: [
            "開啟 NotebookLM，新建 Notebook",
            "上傳 3 篇同一主題的 PDF（公開論文即可）",
            "等待索引完成，先閱讀自動生成的 FAQ",
            "點選 Studio → Generate Audio Overview",
            "邊聽邊記，暫停回放核實關鍵結論",
            "用聊天功能追問：「三篇論文的方法論差異？」"
          ],
          prompt: "（上傳 PDF 後向 Notebook 提問）\n\n請比較三篇論文的研究問題、資料集、方法、侷限，輸出表格，並給出「新手該先讀哪篇」的建議。",
          result: "一段 AI 播客音訊 + 可追問的文獻筆記本。",
          tips: "NotebookLM 僅基於你上傳的資料回答，適合文獻綜述；播客娛樂性強，學術引用仍以原文為準。"
        },
        {
          title: "用文心一言寫公眾號長文",
          software: "文心一言",
          emoji: "📝",
          url: "https://yiyan.baidu.com",
          difficulty: "入門",
          duration: "約 15 分鐘",
          desc: "用文心一言完成 1500 字科普長文，含標題備選、小標題結構與 SEO 關鍵詞佈局。",
          steps: [
            "開啟文心一言，新建對話",
            "貼上下方寫作任務，填入你的主題",
            "生成後要求「降低 AI 腔，增加具體例子」",
            "讓 AI 輸出 3 個標題 + 100 字摘要",
            "人工加入真實經歷或資料，刪除空洞套話",
            "排版為公眾號格式（小標題、引用、結尾引導）"
          ],
          prompt: "請寫一篇 1500 字中文科普文：\n主題：普通人如何系統學習 AI（面向職場新人）\n結構：引子故事 / 3 個認知誤區 / 7 天學習法 / 工具推薦 / 結尾行動號召\n\n要求：小標題清晰，口語化，舉例具體，避免「綜上所述」式空話。",
          result: "一篇可編輯釋出的公眾號長文初稿。",
          tips: "文心一言中文網際網路語境熟悉；釋出前務必事實核查並加入個人視角。"
        },
        {
          title: "用 ChatGPT 分析 Excel 銷售資料",
          software: "ChatGPT",
          emoji: "💬",
          url: "https://chat.openai.com",
          difficulty: "進階",
          duration: "約 18 分鐘",
          desc: "上傳 CSV 樣本，用 ChatGPT 高階資料分析計算趨勢、Top SKU 與異常月份，並建議圖表。",
          steps: [
            "準備脫敏後的 sales.csv（月份,SKU,銷量,金額）",
            "ChatGPT 新建對話，上傳檔案（Plus/Team）",
            "貼上下方分析提示詞",
            "檢視生成的 Python 分析或表格結果",
            "要求匯出「本月建議補貨的 5 個 SKU」",
            "敏感經營資料請用企業版或本地分析，慎傳機密"
          ],
          prompt: "請分析上傳的銷售 CSV：\n1) 按月總銷售額趨勢\n2) Top 5 SKU（金額）\n3) 銷量異常下跌月份及可能原因（資料驅動，勿臆測）\n4) 建議繪製 2 張圖表及洞察\n5) 給業務團隊 3 條行動建議\n\n輸出中文，列表+簡短結論。",
          result: "銷售趨勢洞察與圖表建議，可直接用於週會。",
          tips: "上傳前脫敏；若資料量大可先在表格裡聚合，或讓 AI 寫 Python 在本地跑。"
        },
        {
          title: "用 Claude Artifacts 做互動式待辦頁",
          software: "Claude",
          emoji: "🎭",
          url: "https://claude.ai",
          difficulty: "進階",
          duration: "約 15 分鐘",
          desc: "讓 Claude 在 Artifacts 面板生成單檔案 HTML 待辦應用，支援本地儲存與勾選。",
          steps: [
            "Claude 新建對話，貼上下方提示詞",
            "右側 Artifacts 預覽待辦頁，試新增/完成/刪除",
            "若樣式不滿意：「更簡約的深色 UI，加大點選區域」",
            "點選 Artifacts 匯出或複製 HTML 儲存",
            "雙擊 HTML 在瀏覽器開啟，驗證 localStorage 持久化",
            "可部署到 GitHub Pages 作為個人小工具"
          ],
          prompt: "請建立一個單檔案 HTML 待辦應用（內聯 CSS+JS）：\n- 新增/完成/刪除\n- localStorage 持久化\n- 深色簡約 UI，移動端友好\n- 中文介面\n\n在 Artifacts 中輸出完整可執行程式碼，並說明如何使用。",
          result: "一個可雙擊執行的本地待辦網頁小應用。",
          tips: "Claude Artifacts 適合快速原型；複雜功能再匯入 Cursor 迭代。"
        },
        {
          title: "用 Cursor Agent 搭建 REST API 腳手架",
          software: "Cursor",
          emoji: "⚡",
          url: "https://cursor.com",
          difficulty: "進階",
          duration: "約 30 分鐘",
          desc: "用 Cursor Agent 從零生成 Node.js Express API，含健康檢查、TODO CRUD 與 README。",
          steps: [
            "新建資料夾 todo-api，用 Cursor 開啟",
            "Agent 模式貼上下方需求，允許建立多檔案",
            "終端執行 npm install && npm run dev",
            "用 curl 或 Postman 測試 GET /health 與 POST /todos",
            "若埠衝突，讓 Agent 改 .env 示例",
            "閱讀 Agent 生成的 README，補充你的部署說明"
          ],
          prompt: "請用 Node.js + Express 建立 REST API 專案：\n- GET /health\n- CRUD /todos（記憶體儲存即可）\n- 含 package.json、README、.gitignore\n- 加簡單錯誤處理與中文註釋\n- 告訴我啟動命令與測試示例",
          result: "本地可執行的 TODO API 腳手架與測試說明。",
          tips: "Agent 模式記得允許寫檔案與執行終端；先跑通健康檢查再擴充套件資料庫。"
        },
        {
          title: "用 Midjourney 設計咖啡品牌海報",
          software: "Midjourney",
          emoji: "🎨",
          url: "https://www.midjourney.com",
          difficulty: "入門",
          duration: "約 12 分鐘",
          desc: "不同於風景圖，本次練習商業海報構圖：主體、留白、品牌色與排版區域。",
          steps: [
            "Midjourney Create 頁面新建任務",
            "貼上下方提示詞，注意 --ar 2:3 豎版海報",
            "選擇構圖留白適合放 Logo 的版本 Upscale",
            "在 Figma/Canva 疊加品牌名與 Slogan（AI 圖不寫字）",
            "做 Vary 變體對比暖色/冷色氛圍",
            "匯出 JPG 用於門店立牌或社媒海報"
          ],
          prompt: "minimalist coffee brand poster, single ceramic cup on wooden table, morning light, large negative space at top for typography, earthy brown and cream palette, editorial photography, clean composition --ar 2:3 --style raw --v 6",
          result: "一張豎版咖啡品牌海報底圖，適合疊加文字。",
          tips: "海報預留排版區：large negative space at top；文字儘量後期疊加，Midjourney 寫字易亂碼。"
        },
        {
          title: "用 ChatGPT 批次生成 App 圖示草案",
          software: "ChatGPT",
          emoji: "🖼️",
          url: "https://chat.openai.com",
          difficulty: "入門",
          duration: "約 8 分鐘",
          desc: "用 DALL·E 在 ChatGPT 內一次生成 4 種風格的 App 圖示草案，供 Figma 精修。",
          steps: [
            "ChatGPT 新建對話，確認可用影象生成",
            "貼上提示詞，要求 4 種配色變體",
            "下載最符合品牌氣質的 1024px 圖",
            "在 Figma 加圓角蒙版符合 iOS 圖示規範",
            "不滿意就描述「更扁平、更少細節」迭代",
            "最終圖示需人工檢查小尺寸可讀性"
          ],
          prompt: "請生成 App 圖示設計草案（1024x1024，正方形）：\n\n應用：AI 學習平臺「BestWayToLearn.AI」\n元素：抽象神經元/星形，科技感\n風格：扁平漸變，深色底，高對比，無文字\n\n請一次給 4 種配色方案供我選擇。",
          result: "4 張 App 圖示草案，可匯入設計工具精修。",
          tips: "圖示生成後要測 60×60 小尺寸是否可辨認；避免過多細線。"
        },
        {
          title: "用 ElevenLabs 給影片做英文旁白",
          software: "ElevenLabs",
          emoji: "🎙️",
          url: "https://elevenlabs.io",
          difficulty: "入門",
          duration: "約 12 分鐘",
          desc: "選擇 ElevenLabs 預設英文音色，為 60 秒產品介紹生成旁白 MP3，匯入剪映替換原聲。",
          steps: [
            "ElevenLabs → Text to Speech，選專業英文男/女聲",
            "貼上下方 60 秒旁白指令碼，調整 Stability/Clarity",
            "生成並試聽，修改重音不當的單詞拼寫（如 AI 讀作字母）",
            "下載 MP3，在剪映匯入影片軌道",
            "對齊畫面節奏，必要時剪短句間停頓",
            "釋出時註明配音來源（如平臺要求）"
          ],
          prompt: "Welcome to BestWayToLearn.AI. In just seven days, you will move from AI basics to real projects. Learn how large language models work, pick the right tools, and practice with hands-on tutorials. Start with cognition, master the tools, ship real work, then validate your skills. Your AI journey begins now.",
          result: "一段可嵌入影片的英文旁白音訊。",
          tips: "英文縮寫用空格或連字元幫助發音（A I / Chat G P T）；長指令碼分段生成更穩。"
        },
        {
          title: "用 Fish Audio 批次生成短影片口播",
          software: "Fish Audio",
          emoji: "🐟",
          url: "https://fish.audio",
          difficulty: "進階",
          duration: "約 18 分鐘",
          desc: "用已克隆或預設中文音色，將 3 段短影片指令碼批次轉為口播音訊，提升產能。",
          steps: [
            "Fish Audio 登入，選擇穩定中文音色",
            "將 3 段 30 秒指令碼分條貼上生成",
            "統一語速與音量，下載 MP3 命名 seq1–3",
            "在剪映按分鏡對齊畫面與字幕",
            "檢查「AI」「模型」等詞發音，必要時改同音替換",
            "備份指令碼與音訊，建立可複用口播模板"
          ],
          prompt: "【指令碼 1】你知道嗎？學會 AI 不需要先啃完所有數學。先用真實任務驅動，再回頭補原理，效率最高。\n\n【指令碼 2】選工具別貪多：一個對話 AI + 一個你最常用的專用工具就夠了。\n\n【指令碼 3】每天 45 分鐘，堅持一週，你就能完成從認知到實戰的完整閉環。",
          result: "3 段中文口播 MP3，可直接用於短影片配音。",
          tips: "批次口播先統一音色引數；指令碼長度控制在 30–45 秒/條，便於剪輯節奏。"
        },
        {
          title: "用 OpenClaw 推送每日競品動態",
          software: "OpenClaw",
          emoji: "🦞",
          url: "https://docs.openclaw.ai",
          difficulty: "高階",
          duration: "約 25 分鐘",
          desc: "在股票資訊之外，配置 OpenClaw 每個工作日蒐集競品官網/部落格更新並推送 Slack。",
          steps: [
            "確保 OpenClaw Gateway 已執行，Slack webhook/bot 已連通",
            "將下方 cron 命令中競品列表換成你的賽道",
            "建立任務後執行 openclaw cron run 手動測試",
            "檢查 Slack 訊息是否含來源連結與日期",
            "噪音太多則讓 message 要求「僅重大變更」",
            "遵守 robots 協議，勿高頻爬取"
          ],
          prompt: "openclaw cron create \"0 9 * * 1-5\" \\\n  --name \"競品動態日報\" \\\n  --tz \"Asia/Shanghai\" \\\n  --session isolated \\\n  --message \"你是競品情報分析員。每日蒐集以下競品官網部落格/Changelog 更新：Cursor, Windsurf, GitHub Copilot。輸出中文簡報（300字內）：1) 今日變更摘要 2) 對使用者影響 3) 來源連結。無更新則寫「今日無重大公開更新」。\" \\\n  --announce \\\n  --channel slack \\\n  --to \"你的Slack頻道ID\"",
          result: "工作日早上在 Slack 收到競品動態簡報。",
          tips: "與股票 cron 類似，先 isolated session 防汙染；情報用途務必標註來源。"
        }
      ],
      practiceCategories: {
        "职场办公": "職場辦公",
        "学习成长": "學習成長",
        "编程开发": "程式設計開發",
        "数据营销": "資料營銷",
        "翻译法务": "翻譯法務"
      },
      practiceUi: {
        countShown: "顯示 {visible} / {total} 個",
        emptyHint: "該分類下暫無模板，試試其他標籤。",
        promptTplLabel: "提示詞模板"
      },
      practices: [
        {
          title: "週報與郵件寫作",
          tools: "ChatGPT / Claude / 通義千問",
          desc: "將工作要點列成 bullet points，AI 擴充套件為結構清晰的週報或專業郵件。",
          steps: [
            "列出本週 3-5 個關鍵事項",
            "註明每項的成果資料",
            "讓 AI 按公司格式生成"
          ],
          prompt: "你是一位專業的職場溝通顧問。\n請將以下要點擴充套件為一份簡潔專業的週報（約 300 字）：\n[貼上要點]\n要求：資料導向、突出成果、語氣積極專業。"
        },
        {
          title: "學習新知識",
          tools: "ChatGPT / Claude / Perplexity",
          desc: "用 AI 當私人導師——類比解釋、出題檢驗、糾正理解偏差。",
          steps: [
            "明確學習主題和目標",
            "要求用費曼學習法講解",
            "做練習題檢驗理解"
          ],
          prompt: "請用「費曼學習法」教我理解 [主題]。\n1. 用通俗類比解釋核心概念\n2. 指出 3 個常見誤解\n3. 出 2 道檢驗理解的選擇題（附答案和解析）"
        },
        {
          title: "程式碼除錯與解釋",
          tools: "Cursor / GitHub Copilot / DeepSeek",
          desc: "貼上報錯或程式碼片段，AI 定位問題、解釋原因並給出修復方案。",
          steps: [
            "貼上完整報錯資訊",
            "附上相關程式碼上下文",
            "要求解釋原因和修復方案"
          ],
          prompt: "以下程式碼執行時報錯：\n[程式碼和錯誤資訊]\n請：1) 用中文解釋錯誤原因 2) 給出修復程式碼 3) 說明如何避免"
        },
        {
          title: "資料分析與視覺化",
          tools: "ChatGPT（Code Interpreter）/ Claude",
          desc: "上傳 CSV/Excel，AI 分析趨勢、發現異常、建議圖表型別。",
          steps: [
            "上傳資料檔案",
            "說明分析目標",
            "要求統計+洞察+圖表建議"
          ],
          prompt: "請分析上傳的銷售資料：\n1. 基本統計概覽\n2. Top 3 趨勢和異常\n3. 建議 2 張最有價值的圖表\n4. 3 條可執行業務建議"
        },
        {
          title: "營銷文案創作",
          tools: "Claude / ChatGPT / 文心一言",
          desc: "提供產品資訊和受眾，生成多版本文案供 A/B 測試。",
          steps: [
            "描述產品和賣點",
            "定義目標受眾畫像",
            "要求 3 種風格版本"
          ],
          prompt: "產品：[描述] 受眾：[描述]\n請生成 3 版營銷文案（專業/活潑/緊迫），每版含標題+正文(100字)+CTA。"
        },
        {
          title: "會議紀要整理",
          tools: "Kimi / Claude / 通義千問",
          desc: "將錄音轉寫或雜亂筆記交給 AI，輸出結構化紀要和待辦。",
          steps: [
            "提供會議錄音轉寫或筆記",
            "標註參會人和主題",
            "要求結構化輸出"
          ],
          prompt: "請將以下會議記錄整理為結構化紀要：\n## 主題 ## 關鍵決議 ## 待辦(負責人+截止日期) ## 未決問題\n\n[貼上記錄]"
        },
        {
          title: "簡歷與求職信",
          tools: "ChatGPT / Claude",
          desc: "針對特定崗位最佳化簡歷描述，生成個性化求職信。",
          steps: [
            "貼上目標 JD",
            "列出自己的相關經歷",
            "要求匹配最佳化"
          ],
          prompt: "目標崗位：[JD]\n我的背景：[簡歷要點]\n請：1) 最佳化工作經歷描述(突出匹配點) 2) 寫 200 字求職信"
        },
        {
          title: "產品原型構思",
          tools: "ChatGPT / Gemini / Figma AI",
          desc: "描述產品想法，AI 生成使用者故事、功能列表、頁面結構。",
          steps: [
            "用一段話描述產品想法",
            "明確目標使用者",
            "要求 MVP 功能清單"
          ],
          prompt: "我想做一款 [產品描述]。\n請輸出：1) 3 個使用者故事 2) MVP 功能清單(按優先順序) 3) 主頁面線框描述 4) 風險與應對"
        },
        {
          title: "翻譯與本地化",
          tools: "DeepL / ChatGPT / Claude",
          desc: "不僅翻譯文字，還適配文化語境、調整語氣和格式。",
          steps: [
            "提供原文和目標語言",
            "說明受眾和文化背景",
            "要求非直譯適配"
          ],
          prompt: "將以下內容翻譯為 [語言]，要求：\n1. 符合當地表達習慣 2. 保持原文語氣 3. 標註 2 處文化適配調整\n\n[原文]"
        },
        {
          title: "競品與市場調研",
          tools: "Perplexity / ChatGPT / NotebookLM",
          desc: "AI 梳理競品格局、市場趨勢，生成 SWOT 分析。",
          steps: [
            "明確行業和調研範圍",
            "要求結構化競品對比",
            "核實關鍵資料來源"
          ],
          prompt: "請對 [行業/產品] 做競品分析：\n1. 5 個主要競品及差異 2. SWOT 分析 3. 3 個差異化機會\n請標註資訊來源。"
        },
        {
          title: "教學設計",
          tools: "ChatGPT / Claude / 通義千問",
          desc: "為特定主題和受眾設計課程大綱、講義和課堂活動。",
          steps: [
            "說明受眾和教學目標",
            "指定課時和形式",
            "要求完整教學方案"
          ],
          prompt: "受眾：[背景] 主題：[主題] 時長：[課時]\n請設計：1) 教學目標 2) 課程大綱 3) 互動環節 4) 課後作業"
        },
        {
          title: "影象與封面設計",
          tools: "Midjourney / DALL·E 3 / 通義萬相",
          desc: "文字描述生成配圖、封面、插畫，快速驗證視覺方向。",
          steps: [
            "明確風格和用途",
            "編寫英文/中文提示詞",
            "迭代最佳化 2-3 輪"
          ],
          prompt: "A [風格] illustration of [主題], [色調] palette, [構圖], clean composition, high quality --ar 16:9"
        },
        {
          title: "法律合同審閱",
          tools: "Claude / ChatGPT / Kimi",
          desc: "上傳合同文字，AI 標註風險條款、解釋法律術語、給出修改建議。",
          steps: [
            "上傳合同全文",
            "說明你的立場（甲方/乙方）",
            "要求標註風險點"
          ],
          prompt: "請審閱以下合同（我方為 [甲方/乙方]）：\n1. 標註 5 個風險條款 2. 解釋專業術語 3. 給出修改建議\n\n[合同文字]"
        },
        {
          title: "社交媒體內容",
          tools: "ChatGPT / 文心一言 / Claude",
          desc: "根據主題生成多平臺適配的社媒文案（小紅書/微博/LinkedIn）。",
          steps: [
            "確定平臺和受眾",
            "給出核心資訊點",
            "要求多版本+話題標籤"
          ],
          prompt: "請為 [平臺] 創作關於 [主題] 的帖子：\n1. 吸引注意的標題 2. 正文(200字) 3. 5 個話題標籤 4. 互動引導語"
        },
        {
          title: "Excel 公式與資料處理",
          tools: "ChatGPT / Claude / DeepSeek",
          desc: "描述資料處理需求，AI 生成 Excel/Sheets 公式或 Python 指令碼。",
          steps: [
            "描述資料結構和目標",
            "給出示例輸入輸出",
            "要求公式或指令碼"
          ],
          prompt: "我有 Excel 資料：[描述結構]\n需要：[處理目標]\n請給出：1) Excel 公式 2) 操作步驟 3) 注意事項"
        },
        {
          title: "個人知識管理",
          tools: "Notion AI / NotebookLM / Obsidian+AI",
          desc: "將讀書筆記、文章收藏交給 AI 整理為結構化知識庫。",
          steps: [
            "收集零散筆記和摘錄",
            "確定分類體系",
            "AI 生成摘要和關聯"
          ],
          prompt: "請整理以下筆記為結構化知識庫：\n1. 按主題分類 2. 每個主題寫摘要 3. 標註關鍵概念和關聯\n\n[筆記內容]"
        }
      ],
      promptLab: {
        cases: [
          {
            id: "weekly-report",
            emoji: "📊",
            title: "週報擴寫",
            scene: "職場溝通",
            task: "內容寫作",
            role: "職場溝通顧問",
            context: "本週完成：1) 上線 BestWayToLearn.AI部署工具 v2，修復 Nginx 路由衝突；2) 客戶演示 2 場，收集 5 條反饋；3) 輸出提示詞實驗室改版方案。卡點：伺服器環境檢測偶發超時。",
            output: "一份約 300 字的專業週報，突出成果資料與下週計劃",
            tone: "專業嚴謹",
            response: "## 本週工作週報\n\n**彙報人**：產品運營 · 阿里雲深圳專案組\n**週期**：6/23 – 6/25\n\n### 一、核心成果\n1. **部署工具 v2 上線**：修復環境檢測崩潰與 Nginx default_server 衝突，完整部署驗證透過，站點可正常訪問（8.135.40.124）。\n2. **客戶演示 2 場**：覆蓋培訓負責人與 IT 運維角色，收集有效反饋 5 條，集中在「一鍵部署」與「學習路徑清晰度」。\n3. **提示詞實驗室改版**：完成案例庫 + 同屏模擬方案，降低新手上手門檻。\n\n### 二、資料與進展\n- 部署成功率：演示環境 100%（3/3 次）\n- 客戶滿意度（現場打分）：4.6 / 5\n- 文件更新：部署說明 + 實驗室案例 6 個\n\n### 三、問題與風險\n- 環境檢測在弱網場景偶發超時（>15s），已記錄復現條件，計劃增加重試與超時提示。\n\n### 四、下週計劃\n1. 弱網檢測最佳化 + 日誌匯出\n2. 根據客戶反饋調整 Day 4 提示詞模組\n3. 準備 1 份對外演示指令碼\n\n---\n如需改成「更簡短」或「郵件版」，告訴我目標讀者即可。",
            followups: [
              {
                user: "請壓縮到 200 字以內，語氣更口語",
                ai: "**本週三件事：**\n1. 部署工具 v2 上線，Nginx 衝突已解決，站點可訪問。\n2. 完成 2 場客戶演示，收集 5 條反饋，大家最在意「一鍵部署」。\n3. 提示詞實驗室加了 6 個真實案例，支援同屏模擬。\n\n**卡點**：弱網下環境檢測偶爾超時，下週加重試。\n\n**下週**：最佳化檢測、改提示詞模組、寫演示指令碼。"
              }
            ],
            realGuide: {
              tools: [
                "ChatGPT",
                "通義千問",
                "Kimi"
              ],
              steps: [
                "複製左側生成的提示詞（或對話中的使用者訊息）",
                "開啟 ChatGPT / 通義千問，新建對話並貼上",
                "把本週真實工作要點替換進「背景資訊」後傳送",
                "根據回覆迭代：「更簡潔」「改成郵件版」「突出資料」"
              ],
              link: {
                label: "檢視更多寫作場景模板",
                href: "#practice"
              }
            }
          },
          {
            id: "meeting-notes",
            emoji: "📝",
            title: "會議紀要整理",
            scene: "會議協作",
            task: "會議紀要",
            role: "高階行政助理",
            context: "產品評審會，參會：張三(PM)、李四(研發)、王五(設計)。討論 BestWayToLearn.AI 學習路徑是否增加「企業版」模組。張三認為需求明確應 Q3 立項；李四擔心人力，建議先做 MVP 驗證；王五提出需統一視覺規範。散會前口頭約定：李四兩週內出技術評估，王五整理元件庫清單。",
            output: "結構化會議紀要：決議、待辦（含負責人與截止日期）、未決問題",
            tone: "簡潔直接",
            response: "## 會議紀要\n\n**會議主題**：BestWayToLearn.AI 學習路徑 · 企業版模組評審\n**時間**：2026-06-25 14:00–15:00\n**參會人**：張三（PM）、李四（研發）、王五（設計）\n\n### 關鍵決議\n1. **企業版模組方向認可**，但不立即全量立項，優先 MVP 驗證核心價值假設。\n2. **視覺規範需先行**：企業版頁面須複用統一元件庫，避免二次設計債。\n\n### 待辦事項\n| 事項 | 負責人 | 截止日期 |\n|------|--------|----------|\n| 輸出企業版 MVP 技術評估（人天/風險/依賴） | 李四 | 7/9 |\n| 整理現有元件庫清單與缺口 | 王五 | 7/5 |\n| 根據評估結果更新 Q3 路線圖草案 | 張三 | 7/12 |\n\n### 未決問題\n- 企業版首個 MVP 只覆蓋「部署工具」還是連同「測驗報表」一起做？\n- 是否需單獨定價頁與試用申請流程？\n\n---\n需要我補充「會議背景摘要」或轉成飛書/釘釘待辦格式嗎？",
            followups: [
              {
                user: "轉成飛書待辦格式",
                ai: "【飛書待辦同步稿】\n\n☐ 企業版 MVP 技術評估 — @李四 — 截止 7/9\n☐ 元件庫清單與缺口 — @王五 — 截止 7/5\n☐ 更新 Q3 路線圖草案 — @張三 — 截止 7/12\n\n未決：MVP 範圍（僅部署工具 vs 含測驗報表）；是否新增定價/試用頁。"
              }
            ],
            realGuide: {
              tools: [
                "Kimi",
                "Claude",
                "通義千問"
              ],
              steps: [
                "會議結束後，將錄音轉寫或隨手筆記貼上到 AI 對話方塊",
                "使用本案例的結構化提示詞，註明參會人與你的關注點",
                "核對 AI 輸出的待辦是否與會議一致，**勿直接轉發未核實版本**",
                "將確認的待辦同步到飛書/釘釘/Notion"
              ],
              link: {
                label: "Kimi 長文件實操",
                href: "#hands-on"
              }
            }
          },
          {
            id: "code-debug",
            emoji: "🐛",
            title: "Python 除零修復",
            scene: "程式設計除錯",
            task: "程式碼開發",
            role: "資深 Python 工程師",
            context: "函式計算正數平均值，空列表時崩潰。程式碼：\ndef avg_positive(nums):\n    pos = [n for n in nums if n > 0]\n    return sum(pos) / len(pos)",
            output: "解釋錯誤原因、給出修復程式碼、邊界處理與 2 個測試用例",
            tone: "通俗易懂",
            response: "## 錯誤原因\n\n當 `nums` 為空或沒有正數時，`pos` 為空列表，`len(pos)` 為 0，執行 `sum(pos) / len(pos)` 觸發 **ZeroDivisionError: division by zero**。\n\n## 修復程式碼\n\n```python\ndef avg_positive(nums):\n    \"\"\"返回正數的平均值；無正數時返回 None。\"\"\"\n    if not nums:\n        return None\n    pos = [n for n in nums if n > 0]\n    if not pos:\n        return None\n    return sum(pos) / len(pos)\n\n\n# 測試用例\nassert avg_positive([1, -2, 3, 4]) == 2.5      # 正常：正數平均\nassert avg_positive([-1, -2]) is None          # 邊界：無正數\nassert avg_positive([]) is None                # 邊界：空列表\nprint(\"全部測試透過\")\n```\n\n## 說明\n1. **先過濾再判斷**：避免對空列表做除法。\n2. **返回值約定**：無正數時返回 `None`，呼叫方可用 `if result is None` 分支處理。\n3. **可擴充套件**：若業務要求返回 0，把 `return None` 改為 `return 0.0` 並更新文件。\n\n需要我改成「丟擲自定義異常」或加上型別註解版本嗎？",
            followups: [],
            realGuide: {
              tools: [
                "Cursor",
                "DeepSeek",
                "GitHub Copilot"
              ],
              steps: [
                "在 Cursor / VS Code 中選中報錯程式碼，使用 Copilot 或 Ctrl+L 開啟 AI 對話",
                "貼上完整報錯棧 + 程式碼上下文（不要只貼一行）",
                "要求：解釋原因 → 修復 → 補測試，與本案例輸出結構一致",
                "本地執行 `python test.py` 驗證透過後再提交"
              ],
              link: {
                label: "Cursor 程式設計實操",
                href: "#hands-on"
              }
            }
          },
          {
            id: "xhs-copy",
            emoji: "☕",
            title: "小紅書種草文案",
            scene: "電商營銷",
            task: "內容寫作",
            role: "小紅書資深運營",
            context: "產品：便攜冷萃咖啡杯。賣點：5 分鐘快萃、雙層防燙、簡約顏值。目標人群：25-35 歲上班族，通勤場景。約束：不用「最好」「第一」等絕對化用語。",
            output: "3 個標題 + 250 字種草正文 + 5 個話題標籤 + 評論區引導語",
            tone: "通俗易懂",
            response: "### 標題備選\n1. 通勤 5 分鐘｜我的隨身冷萃杯真的省事☕\n2. 打工人早咖啡救星！冷萃不用等一夜了\n3. 簡約高顏值保溫杯，辦公室被問連結 N 次\n\n### 正文（約 250 字）\n以前想喝冷萃總要提前一晚泡，早上還怕灑一路。換了這款便攜冷萃杯之後，**通勤路上 5 分鐘就能搞定一杯**，到工位剛好微涼順口。\n\n最喜歡兩點：\n✅ **雙層防燙**——熱萃/冷萃切換，手握不燙\n✅ **外觀簡約**——放桌上不突兀，拍照也好看\n\n我會前一晚把咖啡粉裝好，早上加常溫水，到公司就是一杯清醒開工的冷萃。比外賣省不少，也減少一次性杯子。\n\n適合：想省事、又在意顏值的通勤黨。不是專業咖啡裝置，但**日常夠用、好堅持**。\n\n### 話題標籤\n#冷萃咖啡 #通勤好物 #辦公室咖啡 #便攜水杯 #打工人續命\n\n### 評論區引導\n你們通勤更喝熱咖還是冷萃？評論區聊聊，我整理一版「一週不重樣」泡法～\n\n---\n需要「更活潑」或「偏測評口吻」版本可以說一下。",
            followups: [],
            realGuide: {
              tools: [
                "ChatGPT",
                "文心一言",
                "Claude"
              ],
              steps: [
                "把真實產品賣點、人群、禁用詞寫進提示詞（越具體越好）",
                "讓 AI 一次出 3 個標題，選定後再要求「展開第 2 個標題」",
                "釋出前人工核對：廣告法用語、品牌調性、價格資訊",
                "配圖可用 Midjourney / 通義萬相生成產品場景圖"
              ],
              link: {
                label: "影象生成實操",
                href: "#hands-on"
              }
            }
          },
          {
            id: "market-brief",
            emoji: "🔍",
            title: "7 日市場快報",
            scene: "商業調研",
            task: "競品調研",
            role: "行業研究分析師",
            context: "行業：2026 年中國跨境電商。關注：亞馬遜政策變動、TikTok Shop 招商、獨立站 SaaS 工具、物流成本。輸出 400 字中文快報，需標註來源，無可靠資訊寫「暫無」。",
            output: "400 字快報：3 條要聞 + 對中小賣家影響 + 下週 2 個關注變數",
            tone: "專業嚴謹",
            response: "## 跨境電商 7 日快報（模擬演示資料）\n\n> ⚠️ 以下為教學演示結構，真實使用前請在 Perplexity / 秘塔中重新檢索並核實來源。\n\n### 本週要聞\n1. **亞馬遜調整部分品類合規抽查頻率**（來源：亞馬遜賣家論壇公告摘要）— 中小賣家需提前備齊 CPC / 標籤資料。\n2. **TikTok Shop 東南亞站點招商加速**（來源：TikTok Shop 官方招商頁）— 新入駐費率活動延續至 Q3，適合有短影片能力的賣家試水。\n3. **獨立站 SaaS 側推出 AI 建站與多語言包捆綁**（來源：Shopify 產品更新日誌）— 降低建站門檻，但 SEO 內容仍需自運營。\n\n### 對中小賣家影響\n- **合規成本上升**：資料不全易導致 listing 下架，建議建立「品類合規清單」。\n- **渠道多元化更緊迫**：單一依賴亞馬遜的風險增加，TikTok / 獨立站可作為增量渠道。\n- **工具成本下降、運營能力要求上升**：建站更容易，但轉化取決於內容與投放能力。\n\n### 下週關注\n1. 主要物流線路旺季附加費是否上調（關注各物流商官網價目表）。\n2. 美國/歐盟是否有新的進口申報欄位變更（關注海關與平臺賣家公告）。\n\n---\n需要我改成「僅亞馬遜賣家」或「附競品對比表」版本嗎？",
            followups: [],
            realGuide: {
              tools: [
                "Perplexity",
                "秘塔 AI 搜尋",
                "ChatGPT"
              ],
              steps: [
                "用 Perplexity / 秘塔執行**帶引用**的檢索，不要只靠模型記憶",
                "將檢索結果貼上到 ChatGPT，要求按本案例格式壓縮為快報",
                "每條要聞核對來源連結，刪除無法核實的資訊",
                "定時任務可用 OpenClaw Cron 做每日簡報（見實操案例）"
              ],
              link: {
                label: "OpenClaw 定時研報實操",
                href: "#hands-on"
              }
            }
          },
          {
            id: "feynman-transformer",
            emoji: "🎓",
            title: "費曼講 Transformer",
            scene: "學習輔導",
            task: "學習輔導",
            role: "耐心且善於類比的中文老師",
            context: "學習主題：Transformer 自注意力機制。我是產品經理，無深度學習背景，希望 10 分鐘搞懂「它解決了什麼問題」和「和 RNN 差在哪」。",
            output: "通俗類比 + 3 個常見誤解 + 2 道選擇題（附解析）",
            tone: "通俗易懂",
            response: "## 用費曼學習法理解 Transformer\n\n### 一句話\nTransformer 讓模型在讀一句話時，**能同時「看見」所有詞，並自己決定先關注誰**，從而更好地理解長句與遠距離關係。\n\n### 生活類比\n想象你在開會聽 20 人發言：\n- **RNN** 像「逐句聽筆記」——聽後面的容易忘了前面誰說了什麼。\n- **Transformer（Self-Attention）** 像「全景白板」——所有發言同時貼在牆上，你可以一眼看到「張三說的預算」和「最後李四的總結」之間的關聯。\n\n### 它解決了什麼問題？\n1. **長距離依賴**：例如「因為下雨，所以我取消了原定在上海的戶外發布」——「下雨」和「取消」隔很遠，注意力機制能直接建立聯絡。\n2. **平行計算**：訓練時可同時處理整句，比 RNN 逐步傳遞更高效，利於做大模型。\n\n### 常見誤解\n| 誤解 | 正解 |\n|------|------|\n| Transformer 只能做翻譯 | 它是通用架構，GPT、BERT、多模態模型都基於它 |\n| 注意力 = 人類注意力 | 這裡是數學權重，表示「當前詞對其他詞的關注程度」 |\n| 層數越多一定越好 | 還受資料、訓練、任務匹配影響，不是無腦堆層 |\n\n### 檢驗題\n**Q1**：Self-Attention 相比 RNN 的主要優勢是？\nA. 只能處理英文  B. 更好處理長距離依賴且易並行  C. 不需要訓練  D. 保證不幻覺\n**答案：B** — RNN 逐步傳遞易遺忘遠端資訊；注意力可同時建模全域性關係。\n\n**Q2**：「幻覺」問題靠 Transformer 架構本身能完全消除嗎？\nA. 能  B. 不能，還需檢索、工具呼叫與人類核實\n**答案：B** — 架構提升理解，不保證事實正確。\n\n---\n想繼續深入「Q/K/V 是什麼」或「和 GPT 的關係」可以追問。",
            followups: [
              {
                user: "用一張圖解釋 Q/K/V",
                ai: "可以把 Q/K/V 想成**圖書館找書**：\n\n- **Query（查詢）**：你要找什麼主題？\n- **Key（索引標籤）**：每本書封面上的標籤\n- **Value（內容）**：書裡真正要讀的內容\n\n模型對每個詞算一遍「我的 Q 和所有詞的 K 有多匹配」，匹配高的詞，就多讀一點它的 V。\n\n所以 Self-Attention 不是魔法，而是**加權彙總上下文資訊**。\n\n（真實環境可讓 ChatGPT 畫 mermaid 流程圖輔助理解。）"
              }
            ],
            realGuide: {
              tools: [
                "ChatGPT",
                "Claude",
                "Perplexity"
              ],
              steps: [
                "把「我是誰、已懂什麼、想搞懂什麼」寫清楚（本案例已示範）",
                "要求 AI 用類比 + 檢驗題，學完立刻做題自測",
                "不懂的選項回到對話追問「為什麼不是 A」",
                "配合本站「AI 原理」模組卡片加深記憶"
              ],
              link: {
                label: "AI 原理模組",
                href: "#fundamentals"
              }
            }
          }
        ],
        tasks: {
          "内容写作": "請根據以下要求撰寫內容。",
          "问题分析": "請對以下問題進行深入分析。",
          "代码开发": "請根據以下需求編寫程式碼。",
          "学习辅导": "請用教學的方式幫我理解以下主題。",
          "数据分析": "請對以下資料或問題進行資料分析。",
          "创意策划": "請為以下場景提供創意方案。",
          "翻译润色": "請對以下內容進行翻譯或潤色。",
          "会议纪要": "請將以下內容整理為結構化會議紀要。",
          "竞品调研": "請對以下行業/產品進行競品和市場分析。",
          "简历优化": "請根據以下資訊最佳化簡歷和求職材料。"
        },
        taskLabels: {
          "内容写作": "內容寫作",
          "问题分析": "問題分析",
          "代码开发": "程式碼開發",
          "学习辅导": "學習輔導",
          "数据分析": "資料分析",
          "创意策划": "創意策劃",
          "翻译润色": "翻譯潤色",
          "会议纪要": "會議紀要",
          "竞品调研": "競品調研",
          "简历优化": "簡歷最佳化"
        },
        presets: {
          "内容写作": {
            role: "資深內容策劃",
            context: "寫作主題：\n目標受眾：\n核心資訊點（3–5 條）：\n釋出渠道與字數限制：",
            output: "一篇結構完整的內容初稿：含標題、導語、2–3 個小標題正文、結尾總結或行動引導",
            tone: "專業嚴謹"
          },
          "问题分析": {
            role: "資深戰略顧問",
            context: "待分析問題：\n已知背景與約束：\n相關資料或現象：\n你的立場/決策目標：",
            output: "結構化分析報告：問題定義 → 根因假設 → 可選方案對比 → 推薦結論與下一步",
            tone: "專業嚴謹"
          },
          "代码开发": {
            role: "全棧工程師",
            context: "技術棧：\n功能需求描述：\n輸入/輸出示例：\n現有程式碼或報錯資訊（如有）：",
            output: "可執行的程式碼實現 + 中文註釋 + 簡要使用說明 + 建議的測試用例",
            tone: "簡潔直接"
          },
          "学习辅导": {
            role: "費曼學習法導師",
            context: "學習主題：\n我的現有水平：\n想搞懂的具體困惑：\n可用學習時間：",
            output: "分層講解（通俗類比 + 關鍵概念 + 常見誤解）+ 2 道自檢題（附答案解析）",
            tone: "通俗易懂"
          },
          "数据分析": {
            role: "資料分析師",
            context: "資料說明（來源、欄位、時間範圍）：\n分析目標：\n關注的業務問題：\n已知異常或假設：",
            output: "資料概覽 → 關鍵發現（3 條）→ 圖表建議 → 可執行業務建議；標註「確定/推測/待核實」",
            tone: "專業嚴謹"
          },
          "创意策划": {
            role: "創意總監",
            context: "品牌/產品：\n目標受眾：\n傳播場景與預算約束：\n希望傳達的核心資訊：",
            output: "2–3 套創意方案：每套含核心概念、執行路徑、預期效果與風險",
            tone: "創意發散"
          },
          "翻译润色": {
            role: "雙語編輯",
            context: "原文語言與內容：\n目標語言與受眾：\n文體要求（正式/口語/營銷）：\n需保留的術語或品牌名：",
            output: "潤色/翻譯後的終稿 + 2 處關鍵措辭調整說明（為何這樣譯/改）",
            tone: "專業嚴謹"
          },
          "会议纪要": {
            role: "高階行政助理",
            context: "會議主題：\n參會人與角色：\n討論要點（可貼上速記/轉寫）：\n口頭約定的待辦（如有）：",
            output: "結構化會議紀要：主題與時間 → 關鍵決議 → 待辦表（負責人+截止日期）→ 未決問題",
            tone: "簡潔直接"
          },
          "竞品调研": {
            role: "市場研究分析師",
            context: "行業/賽道：\n我方產品定位：\n需對比的競品（3–5 個）：\n調研關注點（功能/定價/渠道等）：",
            output: "競品對比表 + SWOT 摘要 + 3 條差異化機會；關鍵結論標註資訊來源",
            tone: "專業嚴謹"
          },
          "简历优化": {
            role: "資深招聘顧問",
            context: "目標崗位 JD 摘要：\n當前簡歷要點（經歷/技能/專案）：\n工作年限與行業：\n需突出的優勢與需弱化的部分：",
            output: "最佳化後的工作經歷描述（匹配 JD 關鍵詞）+ 200 字求職信 + 3 條面試準備建議",
            tone: "專業嚴謹"
          }
        },
        tools: {
          "内容写作": [
            "ChatGPT",
            "Claude",
            "通義千問"
          ],
          "问题分析": [
            "ChatGPT",
            "Claude",
            "DeepSeek"
          ],
          "代码开发": [
            "Cursor",
            "Claude",
            "DeepSeek"
          ],
          "学习辅导": [
            "ChatGPT",
            "Claude",
            "Perplexity"
          ],
          "数据分析": [
            "ChatGPT",
            "Claude",
            "通義千問"
          ],
          "创意策划": [
            "Claude",
            "ChatGPT",
            "Gemini"
          ],
          "翻译润色": [
            "DeepL",
            "Claude",
            "ChatGPT"
          ],
          "会议纪要": [
            "Kimi",
            "Claude",
            "通義千問"
          ],
          "竞品调研": [
            "Perplexity",
            "ChatGPT",
            "NotebookLM"
          ],
          "简历优化": [
            "ChatGPT",
            "Claude",
            "文心一言"
          ]
        },
        tones: {
          "专业严谨": "專業嚴謹",
          "通俗易懂": "通俗易懂",
          "创意发散": "創意發散",
          "简洁直接": "簡潔直接"
        },
        ui: {
          casesLabel: "真實案例",
          selectCaseStart: "選擇案例開始",
          copyPrompt: "複製提示詞",
          configTitle: "提示詞配置",
          taskType: "任務型別",
          role: "角色",
          rolePlaceholder: "例如：資深產品經理",
          context: "背景資訊",
          contextPlaceholder: "描述場景、受眾、約束條件…",
          output: "期望輸出",
          outputPlaceholder: "例如：一份 500 字的 PRD 大綱",
          tone: "語氣風格",
          generateSimulate: "生成並模擬",
          chatTitle: "提示詞與回覆 · 同屏模擬",
          resetSim: "重置模擬",
          simEmptyTitle: "尚未開始模擬",
          simEmptyDesc: "點選上方案例，或編輯左側配置後點「生成並模擬」。提示詞、AI 回覆與操作引導都在此視窗展示。",
          guideTitle: "模擬完成 · 去真實工具試試",
          guideToolsLabel: "推薦工具：",
          followupPlaceholder: "追問，例如「更簡潔一點」…",
          send: "傳送",
          disclaimer: "本地預置演示，幫助理解提示詞結構。真實效果請複製提示詞到推薦工具驗證。",
          tryFollowup: "試試追問：",
          taskPrefix: "任務：",
          casePrefix: "案例：",
          customScene: "自訂場景",
          defaultRole: "資深專家",
          defaultContext: "[請補充具體背景]",
          defaultOutput: "[請描述期望輸出]",
          buildPrompt: {
            roleHeader: "# 角色",
            rolePrefix: "你是一位",
            taskHeader: "# 任務",
            contextHeader: "# 背景資訊",
            outputHeader: "# 期望輸出",
            requirementsHeader: "# 要求",
            toneLine: "- 語氣風格：",
            clarifyLine: "- 資訊不足時先列出需確認的 2-3 個關鍵問題",
            structureLine: "- 輸出結構清晰，使用標題和列表",
            uncertainLine: "- 不確定的內容明確標註，不要編造事實"
          },
          systemLabel: "系統",
          simulating: "模擬中…",
          promptSent: "提示詞已傳送",
          aiReply: "AI 回覆",
          copyFail: "複製失敗",
          defaultGuideSteps: [
            "點選工具列「複製提示詞」",
            "開啟 ChatGPT 或通義千問，新建對話",
            "貼上提示詞，將背景替換為你的真實場景",
            "根據回覆迭代：「更簡潔」「換成表格」「補充資料」"
          ],
          stepPrefix: "第",
          stepSuffix: " 步",
          simError: "模擬出錯，請重新整理頁面後重試。若仍失敗，請強制重新整理（Cmd+Shift+R）清除快取。",
          caseDataError: "案例資料未載入，請強制重新整理頁面（Cmd+Shift+R）。",
          copyPromptLabel: "複製提示詞"
        }
      },
      monetize: {
        meta: {
          lead: "學完本站的 AI 工具後，你不必立刻轉行成「AI 工程師」。更現實的路徑是：用 AI 把現有技能放大 3–10 倍，在內容、設計、自動化、調研、培訓等方向接單或做副業。以下 30 個方向都基於本站已介紹的工具，門檻可控、可從小單驗證開始。",
          workTypes: [
            {
              label: "內容創作",
              desc: "圖文、短影片、播客——AI 負責起草與視覺，你負責選題與調性"
            },
            {
              label: "技術服務",
              desc: "Bot 搭建、指令碼開發、落地頁交付——按專案收費"
            },
            {
              label: "自動化",
              desc: "工作流整合、定時研報——按月維護或按次實施"
            },
            {
              label: "知識服務",
              desc: "調研簡報、提示詞包、行業模板——訂閱或一次性售賣"
            },
            {
              label: "教育培訓",
              desc: "企業內訓、社群陪跑——教別人用 AI 提效"
            }
          ],
          principles: [
            "先做出 1 個可展示的作品集案例，再談報價",
            "明確「人工複核」邊界，不把 AI 輸出直接當交付物",
            "從熟人/小單開始驗證需求，再擴到平臺接單",
            "組合 2–3 款工具形成流水線，比單點使用更值錢"
          ]
        },
        categories: {
          "内容创作": "內容創作",
          "技术服务": "技術服務",
          "自动化": "自動化",
          "知识服务": "知識服務",
          "教育培训": "教育培訓"
        },
        projects: [
          {
            title: "自媒體內容矩陣代運營",
            emoji: "📱",
            category: "内容创作",
            difficulty: "入門",
            income: "月入 2,000–8,000 元",
            tools: [
              "ChatGPT",
              "Kimi",
              "Midjourney",
              "可靈 AI",
              "Suno"
            ],
            desc: "幫本地商家、知識博主或小微品牌維護公眾號/小紅書/抖音賬號：用 AI 批次產出選題、文案、封面圖和短影片指令碼，你負責釋出節奏與資料覆盤。",
            deliverables: "每週 3–5 篇圖文 + 2 條短影片指令碼 + 封面素材包",
            monetize: "按月代運營費（1,500–5,000 元/賬號）；或按條計費（圖文 80–200 元，影片指令碼 150–400 元）",
            channels: "小紅書接單、閒魚、熟人介紹、本地商家地推",
            steps: [
              "選垂直領域（餐飲、教育、美妝）做 1 套示範內容",
              "用 ChatGPT 生成 7 天選題表，Midjourney/可靈出視覺",
              "打包「首月試運營」低價套餐吸引第一個客戶",
              "用資料截圖（閱讀量、漲粉）作為案例持續提價"
            ],
            tip: "簽約前約定修改次數與原創比例；敏感行業內容需人工終審。"
          },
          {
            title: "企業知識庫客服 Bot 定製",
            emoji: "🤖",
            category: "技术服务",
            difficulty: "進階",
            income: "單專案 3,000–20,000 元",
            tools: [
              "Dify",
              "釦子 Coze",
              "OpenClaw",
              "NotebookLM"
            ],
            desc: "為中小企業把產品手冊、FAQ、內部文件變成可對話的知識庫 Bot，部署到官網、飛書或微信，減少重複客服諮詢。",
            deliverables: "知識庫整理 + Bot 對話流程 + 後臺管理說明 + 上線交付",
            monetize: "專案實施費一次性收取；可選年費維護（500–2,000 元/月）",
            channels: "企業服務群、飛書生態、豬八戒、技術社群轉介紹",
            steps: [
              "用 NotebookLM 整理客戶 PDF/文件，提煉問答對",
              "在 Dify 或釦子搭建 RAG 工作流並測試命中率",
              "錄製 3 分鐘演示影片作為銷售素材",
              "首個客戶可半價換案例授權與推薦語"
            ],
            tip: "合同裡寫清資料歸屬與更新頻率；回答需標註「僅供參考」降低合規風險。"
          },
          {
            title: "電商視覺設計外包",
            emoji: "🎨",
            category: "内容创作",
            difficulty: "入門",
            income: "月入 3,000–15,000 元",
            tools: [
              "Midjourney",
              "Flux",
              "DALL·E 3",
              "Gamma"
            ],
            desc: "為淘寶、拼多多、獨立站賣家制作主圖、詳情頁視覺、活動海報和簡單 PPT。AI 出圖快，你負責品牌調性、排版和甲方溝通。",
            deliverables: "主圖 5 張/套、詳情頁切片、促銷海報、可選 PPT 彙報稿",
            monetize: "主圖套圖 200–800 元；詳情頁 500–2,000 元；加急費 30%",
            channels: "淘寶服務商、閒魚、小紅書設計賬號、電商賣家群",
            steps: [
              "做 3 套不同品類（食品/3C/服飾）樣例圖放作品集",
              "整理 Midjourney/Flux 提示詞模板提速出圖",
              "提供「24 小時出初稿」作為賣點",
              "老客戶推年費「視覺包月」鎖定收入"
            ],
            tip: "商用前確認模型許可條款；品牌 Logo 勿直接餵給未授權素材。"
          },
          {
            title: "垂直行業提示詞包售賣",
            emoji: "📝",
            category: "知识服务",
            difficulty: "入門",
            income: "月入 1,000–10,000 元",
            tools: [
              "Claude",
              "ChatGPT",
              "提示詞實驗室",
              "Gamma"
            ],
            desc: "把你在法務、HR、電商、教培等行業的提示詞經驗打包成「複製即用」模板集，附使用說明和 Before/After 對比案例。",
            deliverables: "20–50 條結構化提示詞 + 場景說明 + 1 頁快速上手指南",
            monetize: "小報童/知識星球（29–199 元/份）；企業批次授權（500 元起）",
            channels: "小紅書、公眾號、即刻、行業微信群",
            steps: [
              "選你最有經驗的 1 個行業深挖 10 個高頻場景",
              "在提示詞實驗室驗證並截圖效果對比",
              "用 Gamma 做 10 頁售賣頁說明價值",
              "買贈「更新 3 個月」提高復購與口碑"
            ],
            tip: "強調模板是起點而非萬能答案；附「人工複核 checklist」更專業。"
          },
          {
            title: "AI 自動化工作流整合",
            emoji: "⚙️",
            category: "自动化",
            difficulty: "進階",
            income: "單專案 5,000–30,000 元",
            tools: [
              "n8n",
              "OpenClaw",
              "Perplexity",
              "Notion AI"
            ],
            desc: "幫企業把分散工具串起來：如「郵件線索 → 表格歸檔 → AI 摘要 → Slack/飛書通知 → 週報彙總」，減少人工複製貼上。",
            deliverables: "流程圖 + n8n/OpenClaw 工作流 + 異常告警 + 操作文件",
            monetize: "實施費按節點複雜度報價；月維護 800–3,000 元",
            channels: "企業 IT 外包、SaaS 社群、LinkedIn/領英、老客戶續費",
            steps: [
              "選 1 個通用場景（銷售日報、競品監控）做 Demo",
              "用 n8n 連線 Gmail/表格/Slack 跑通最小閉環",
              "OpenClaw 補充定時研報類需求",
              "簽約前做 1 周試執行再收全款"
            ],
            tip: "敏感憑證客戶自持；日誌留存便於排錯與合規審計。"
          },
          {
            title: "AI 配音短影片製作",
            emoji: "🎙️",
            category: "内容创作",
            difficulty: "入門",
            income: "單條 100–800 元",
            tools: [
              "ElevenLabs",
              "Fish Audio",
              "可靈 AI",
              "Runway",
              "Suno"
            ],
            desc: "為知識博主、本地商家、培訓課程製作口播短影片：AI 克隆配音或 TTS 朗讀，配合 AI 生成畫面與背景音樂，你負責剪輯節奏與字幕。",
            deliverables: "60 秒豎版短影片、SRT 字幕、封面幀、無版權 BGM（可選）",
            monetize: "按條計費；包月 10 條套餐（2,000–6,000 元）；配音克隆另收設定費",
            channels: "抖音服務商、B 站 UP 主合作、培訓公司、閒魚",
            steps: [
              "用 Fish Audio/ElevenLabs 做 1 條完整樣片掛櫥窗",
              "標準化指令碼模板（鉤子-痛點-方案-CTA）",
              "可靈/Runway 補 B-roll 降低實拍成本",
              "提供「3 天交付」標準流程報價表"
            ],
            tip: "僅克隆客戶本人或已授權聲音；平臺需標註 AI 生成（按各平臺規則）。"
          },
          {
            title: "行業調研簡報訂閱",
            emoji: "📊",
            category: "知识服务",
            difficulty: "進階",
            income: "訂閱 99–499 元/月/人",
            tools: [
              "Perplexity",
              "秘塔 AI 搜尋",
              "NotebookLM",
              "Manus",
              "OpenClaw"
            ],
            desc: "為投資、產品、運營人群提供每週行業動態簡報：競品上新、政策變化、投融資事件，AI 蒐集整理，你負責篩選與點評。",
            deliverables: "週報 PDF/郵件（3,000–5,000 字）+ 關鍵資料表 + 來源連結",
            monetize: "個人訂閱；企業席位（5 人起）；定製深度報告另議（2,000 元起）",
            channels: "知識星球、小報童、私域社群、OpenClaw 定時推送",
            steps: [
              "選細分賽道（如 AI 工具、跨境電商）連更 4 期免費試讀",
              "用 Perplexity/秘塔蒐集，NotebookLM 做交叉摘要",
              "OpenClaw 每週一自動起草，你週二人工潤色釋出",
              "積累 100 訂閱後開放企業團購價"
            ],
            tip: "所有結論附引用來源；不構成投資/法律建議的免責宣告必寫。"
          },
          {
            title: "MVP 落地頁快速交付",
            emoji: "🚀",
            category: "技术服务",
            difficulty: "入門",
            income: "單專案 3,000–12,000 元",
            tools: [
              "Bolt.new",
              "Cursor",
              "Gamma",
              "ChatGPT"
            ],
            desc: "幫創業者、產品經理在 1–3 天內交付可演示的產品落地頁或輕量 Web MVP，用於融資路演、使用者驗證或內測報名。",
            deliverables: "響應式落地頁 + 表單收集 + 基礎 SEO + 部署連結",
            monetize: "標準頁 3,000 元起；含簡單後臺/支付加錢；48 小時加急 +50%",
            channels: "創業者社群、Product Hunt 中文圈、朋友介紹、獨立開發者群",
            steps: [
              "Bolt.new 生成骨架，Cursor 精修互動與樣式",
              "準備 2 個不同風格案例（SaaS / 消費品牌）",
              "報價單寫清修改輪次與託管方式",
              "交付時附 15 分鐘錄屏教客戶自己改文案"
            ],
            tip: "域名與賬號歸客戶所有；上線前做移動端與表單測試。"
          },
          {
            title: "資料處理與指令碼定製",
            emoji: "👨‍💻",
            category: "技术服务",
            difficulty: "進階",
            income: "單專案 1,000–15,000 元",
            tools: [
              "Cursor",
              "Aider",
              "Claude Code",
              "DeepSeek"
            ],
            desc: "幫運營、財務、市場人員寫 Python/JS 小工具：Excel 清洗、批次重新命名、簡易爬蟲、報表自動生成，解決「不會程式設計但重複勞動多」的痛點。",
            deliverables: "可執行指令碼 + README 使用說明 + 1 次線上講解",
            monetize: "按工時或固定價；複雜需求先收 30% 定金",
            channels: "豬八戒、電鴨社群、企業微信外包群、前同事轉介",
            steps: [
              "做 2 個「Excel 合併/去重」類 Demo 掛作品集",
              "用 Cursor/Aider 快速交付並自動寫註釋",
              "報價時區分「一次性」與「要維護升級」",
              "交付原始碼並教客戶跑通，減少售後"
            ],
            tip: "爬蟲類專案確認合法合規；客戶資料不留存於你的雲端。"
          },
          {
            title: "企業 AI 內訓與陪跑",
            emoji: "🎓",
            category: "教育培训",
            difficulty: "進階",
            income: "半天 3,000–8,000 元；陪跑 2,000 元/月起",
            tools: [
              "本站全套模組",
              "Gamma",
              "Microsoft Copilot",
              "釦子 Coze"
            ],
            desc: "面向非技術團隊（市場、行政、銷售）做 AI 提效培訓：選型、提示詞、辦公場景實操。可疊加 30 天微信群陪跑答疑。",
            deliverables: "2–4 小時工作坊 + 場景手冊 + 課後作業清單 + 可選陪跑",
            monetize: "企業按場次收費；個人小班（199–599 元/人）；年度顧問套餐",
            channels: "HR 對接、企業培訓經紀、朋友圈口碑、結業學員轉介紹",
            steps: [
              "把本站 7 天路徑濃縮成「半天速成課」大綱",
              "用 Gamma 做培訓幻燈片，現場演示 3 個崗位場景",
              "收集訓後滿意度與效率提升案例做背書",
              "首單企業可贈 1 個月陪跑換案例授權"
            ],
            tip: "強調合規與資訊保安；勿教員工把機密資料餵給公有云模型。"
          },
          {
            title: "跨境電商 Listing 文案與本地化",
            emoji: "🛒",
            category: "内容创作",
            difficulty: "入門",
            income: "單條 Listing 80–300 元",
            tools: [
              "ChatGPT",
              "Claude",
              "Gemini",
              "Perplexity"
            ],
            desc: "為亞馬遜、Shopee、Temu 賣家撰寫高轉化英文/多語言商品標題、五點描述、A+ 頁面文案，並結合目標市場搜尋詞最佳化。",
            deliverables: "標題 + 五點描述 + 搜尋關鍵詞表 + 可選西班牙語/日語版本",
            monetize: "按 SKU 計費；包店套餐（50 條起）；旺季加急 +30%",
            channels: "跨境賣家群、知無不言、豬八戒、跨境電商服務商",
            steps: [
              "選 1 個熟悉品類做 3 條標杆 Listing 當案例",
              "用 Perplexity 查目標市場熱搜詞與競品文案",
              "Claude 做多語言潤色，人工校對文化禁忌",
              "推出「7 天上新包」吸引中小賣家首單"
            ],
            tip: "禁止虛假宣傳與侵權關鍵詞；各平臺禁售品類不接單。"
          },
          {
            title: "AI 播客節目製作外包",
            emoji: "🎵",
            category: "内容创作",
            difficulty: "入門",
            income: "單期 300–1,500 元",
            tools: [
              "NotebookLM",
              "Suno",
              "ElevenLabs",
              "ChatGPT"
            ],
            desc: "幫企業主、專家、社群主理人把長文/訪談紀要變成播客節目：AI 生成指令碼、片頭音樂、配音，你負責剪輯包裝與上架指引。",
            deliverables: "15–30 分鐘播客音訊 + Show Notes + 封面圖 + 上架說明",
            monetize: "按期收費；包季 10 期優惠；片頭定製另收",
            channels: "小宇宙主播社群、知識星球主、企業品牌部",
            steps: [
              "NotebookLM 把客戶 PDF/文章轉成對話體指令碼",
              "Suno 做片頭曲，ElevenLabs/Fish Audio 配音",
              "做 1 期完整樣例掛在小宇宙展示",
              "提供「每月 2 期」訂閱制鎖定客戶"
            ],
            tip: "音樂與配音確認商用授權；內容觀點由客戶終審。"
          },
          {
            title: "AI 有聲書 / 課件朗讀服務",
            emoji: "📓",
            category: "内容创作",
            difficulty: "入門",
            income: "千字 15–40 元",
            tools: [
              "ElevenLabs",
              "Fish Audio",
              "ChatGPT"
            ],
            desc: "為作者、培訓機構、企業內訓把電子書、講義、制度手冊轉為專業有聲版，支援多音色、多語速與章節拆分。",
            deliverables: "分章節 MP3 + 時間軸 + 片頭片尾 + 簡易封面",
            monetize: "按字數/時長；整本書打包價；長期合作折扣",
            channels: "作者社群、網文平臺、培訓機構、企業行政",
            steps: [
              "用公版書籍做 1 章樣音展示音質與節奏",
              "ChatGPT 預處理文稿（斷句、多音字標註）",
              "Fish Audio 中文自然度高，ElevenLabs 做英文版",
              "簽約前明確修改次數與交期（通常 3–5 天/萬字）"
            ],
            tip: "僅處理客戶擁有版權的內容；克隆音色需書面授權。"
          },
          {
            title: "簡歷與面試輔導 AI 潤色",
            emoji: "💼",
            category: "知识服务",
            difficulty: "入門",
            income: "單份 99–499 元",
            tools: [
              "Claude",
              "ChatGPT",
              "Kimi",
              "Perplexity"
            ],
            desc: "為求職者最佳化中英文簡歷、作品集說明與面試問答稿，結合目標崗位 JD 做關鍵詞匹配與 STAR 故事改寫。",
            deliverables: "簡歷 1–2 版 + 求職信 + 10 道模擬面試 Q&A",
            monetize: "基礎潤色 99 元；高階含模擬面試 299–499 元；套餐加 LinkedIn 最佳化",
            channels: "小紅書求職博主、高校就業群、閒魚、知乎",
            steps: [
              "收集 5 份脫敏 Before/After 案例（需授權）",
              "Perplexity 調研目標公司/崗位關鍵詞",
              "Claude 做敘事最佳化，保留候選人真實經歷",
              "提供「7 天不滿意包改」降低決策門檻"
            ],
            tip: "不偽造經歷與學歷；輔導就業結果不作保底承諾。"
          },
          {
            title: "合同與法律文書初稿輔助",
            emoji: "⚖️",
            category: "知识服务",
            difficulty: "進階",
            income: "單份 300–2,000 元",
            tools: [
              "Claude",
              "Kimi",
              "文心一言",
              "NotebookLM"
            ],
            desc: "為小微企業和自由職業者起草租賃合同、合作協議、NDA、勞動協議等初稿，結構化條款清晰，供律師或法務終審。",
            deliverables: "Word 初稿 + 條款說明 + 風險點清單（非法律意見）",
            monetize: "標準合同 300–800 元；定製協議按條款複雜度報價",
            channels: "創業者社群、代理記賬公司轉介、法務平臺合作",
            steps: [
              "整理 10 份常用合同模板庫（經律師審閱更佳）",
              "NotebookLM 載入客戶背景與參考合同樣本",
              "輸出初稿並附「須律師稽核」宣告",
              "與本地律所互薦形成閉環"
            ],
            tip: "明確不提供法律意見；複雜訴訟與股權事項不接。"
          },
          {
            title: "競品與 SEO 內容策略報告",
            emoji: "🔎",
            category: "知识服务",
            difficulty: "進階",
            income: "單份 800–5,000 元",
            tools: [
              "Perplexity",
              "秘塔 AI 搜尋",
              "Manus",
              "ChatGPT"
            ],
            desc: "為品牌方、獨立站運營輸出競品內容矩陣分析、關鍵詞機會清單與 90 天內容日曆，指導 SEO 與自媒體選題。",
            deliverables: "20–40 頁報告 + 關鍵詞表 + 90 天選題日曆",
            monetize: "標準競品報告 800 元起；含 SEO 深度版 2,000 元起",
            channels: "營銷 Agency 外包、獨立站賣家、B2B 市場負責人",
            steps: [
              "選熟悉行業做 1 份完整樣例報告",
              "秘塔/Perplexity 抓競品內容與搜尋趨勢",
              "Manus 輔助整理長列表，人工寫洞察結論",
              "季報復購折扣 20% 鎖客"
            ],
            tip: "資料註明採集日期；不承諾搜尋排名結果。"
          },
          {
            title: "考研 / 考證學習計劃定製",
            emoji: "🎓",
            category: "知识服务",
            difficulty: "入門",
            income: "單套 199–899 元",
            tools: [
              "NotebookLM",
              "Kimi",
              "ChatGPT",
              "Gamma"
            ],
            desc: "根據考生目標、基礎與時間，用 AI 生成個性化複習計劃、每日任務清單、錯題歸納模板與記憶卡片，你負責學科經驗把關。",
            deliverables: "階段計劃表 + 每日任務 + 資料索引 + 模考節奏安排",
            monetize: "一次性計劃 199 元起；含 4 周答疑陪跑 599–899 元",
            channels: "考研論壇、小紅書教育號、培訓機構合作",
            steps: [
              "選 1 門擅長考試（英語/CPA/教資）做標杆方案",
              "NotebookLM 消化考綱與真題 PDF",
              "Gamma 輸出視覺化計劃手冊交付",
              "考季前 3 個月集中推廣"
            ],
            tip: "不做洩題與違規押題；計劃需隨考綱更新維護。"
          },
          {
            title: "個人「第二大腦」知識庫搭建",
            emoji: "🧠",
            category: "知识服务",
            difficulty: "進階",
            income: "單專案 1,500–8,000 元",
            tools: [
              "Notion AI",
              "Dify",
              "NotebookLM",
              "Obsidian+AI"
            ],
            desc: "幫高知使用者、小團隊把散落文件、書籤、筆記整理成可搜尋、可對話的個人知識庫，支援標籤體系與定期摘要。",
            deliverables: "知識庫架構 + 匯入整理 + 檢索/對話配置 + 使用培訓",
            monetize: "個人版 1,500–3,000 元；團隊版按人數加價",
            channels: "效率工具社群、Notion 中文圈、知識管理博主",
            steps: [
              "自建示範庫展示分類與對話效果",
              "Notion AI 批次摘要，Dify 做對外問答入口",
              "交付 1 小時上手培訓錄屏",
              "可選月費維護資料更新"
            ],
            tip: "敏感筆記本地優先；雲端需客戶賬號自持。"
          },
          {
            title: "GitHub 開源專案文件與 README 最佳化",
            emoji: "🔗",
            category: "技术服务",
            difficulty: "入門",
            income: "單專案 500–3,000 元",
            tools: [
              "Cursor",
              "Claude Code",
              "ChatGPT",
              "Aider"
            ],
            desc: "幫獨立開發者、初創團隊補全英文 README、API 文件、貢獻指南與示例程式碼，提升 Star 轉化與商業合作機會。",
            deliverables: "README + CONTRIBUTING + 基礎 API 文件 + 示例",
            monetize: "基礎 README 500 元起；全文件套件 2,000 元起",
            channels: "GitHub 社群、V2EX、開發者 Twitter、開源基金會",
            steps: [
              "選 2 個知名開源風格做文件樣例",
              "Cursor 讀程式碼生成準確 API 說明",
              "中英雙語版本加價 30%",
              "交付後幫發 Show HN/掘金文章引流"
            ],
            tip: "文件須與程式碼版本同步；不代寫虛假 Star 資料。"
          },
          {
            title: "SaaS 產品幫助中心與 Changelog 建設",
            emoji: "🪟",
            category: "技术服务",
            difficulty: "進階",
            income: "單專案 3,000–15,000 元",
            tools: [
              "Cursor",
              "Dify",
              "ChatGPT",
              "Notion AI"
            ],
            desc: "為小型 SaaS 搭建使用者幫助文件站、FAQ 機器人與版本更新日誌流程，降低客服壓力並提升自助解決率。",
            deliverables: "幫助中心結構 + 20–50 篇文件 + FAQ Bot + Changelog 模板",
            monetize: "首期建設費 + 月更維護 500–1,500 元",
            channels: "SaaS 創始人社群、Indie Hackers 中文圈、Product Hunt",
            steps: [
              "用自家或 Demo SaaS 做完整幫助中心樣板",
              "Dify 接入產品文件做站內問答",
              "Cursor 從程式碼註釋生成 API 文件草稿",
              "簽約時約定每月更新篇數"
            ],
            tip: "文件與產品版本繫結；重大功能需客戶確認後釋出。"
          },
          {
            title: "WordPress / 企業站 AI 改版維護",
            emoji: "🌐",
            category: "技术服务",
            difficulty: "進階",
            income: "改版 2,000–10,000 元",
            tools: [
              "Cursor",
              "Bolt.new",
              "ChatGPT",
              "Midjourney"
            ],
            desc: "承接老舊企業官網改版：AI 輔助重寫文案、生成新版塊設計稿、最佳化 SEO 元資訊，你負責部署與基礎維護。",
            deliverables: "改版方案 + 新文案 + 主題調整 + 30 天缺陷修復",
            monetize: "一次性改版費；年維護 1,200–3,600 元",
            channels: "本地企業服務公司、建站工作室、百度推廣代理商",
            steps: [
              "準備 2 個 Before/After 改版案例",
              "Bolt.new 快速搭新版塊原型給客戶確認",
              "Cursor 改主題程式碼，ChatGPT 批次 SEO 文案",
              "維護合同寫清更新次數與響應時間"
            ],
            tip: "備案與域名歸客戶；改版前全站備份。"
          },
          {
            title: "AI 功能白標接入開發",
            emoji: "⚡",
            category: "技术服务",
            difficulty: "進階",
            income: "單專案 8,000–50,000 元",
            tools: [
              "Cursor",
              "Codex CLI",
              "DeepSeek",
              "Dify"
            ],
            desc: "幫已有 App/網站整合「智慧客服、文件問答、內容生成」等 AI 模組，基於 API 或 Dify 工作流，客戶品牌前臺展示。",
            deliverables: "需求文件 + API 整合 + 後臺配置 + 上線聯調",
            monetize: "按功能模組報價；API 成本由客戶承擔或代充",
            channels: "軟體外包公司、數字化轉型諮詢、行業 ISV",
            steps: [
              "做 1 個 Demo 站點展示嵌入效果",
              "DeepSeek API 降本，Dify 管 RAG 邏輯",
              "交付原始碼與部署文件",
              "首單後推年度技術支援合同"
            ],
            tip: "資料出境與隱私合規寫進合同；金鑰不進你的倉庫。"
          },
          {
            title: "電商售後客服話術與工單自動化",
            emoji: "🏭",
            category: "自动化",
            difficulty: "入門",
            income: "月入 1,500–6,000 元",
            tools: [
              "釦子 Coze",
              "Dify",
              "通義千問",
              "n8n"
            ],
            desc: "為電商賣家配置售後 FAQ 自動回覆、物流查詢引導、退換貨流程話術，並與表格/ERP 簡單聯動。",
            deliverables: "話術庫 + Bot 配置 + 工單分類規則 + 週報模板",
            monetize: "首裝 1,500–3,000 元；月維護 300–800 元",
            channels: "淘寶服務商、拼多多商家群、客服外包公司",
            steps: [
              "整理 TOP50 售後問題標準答案",
              "釦子接入店鋪常用渠道（企微/飛書）",
              "n8n 把工單匯出到表格做統計",
              "大促前提供「話術更新包」增值服務"
            ],
            tip: "複雜糾紛轉人工；不代客戶承諾賠償。"
          },
          {
            title: "招聘 JD 撰寫與簡歷初篩 Agent",
            emoji: "👨‍💻",
            category: "自动化",
            difficulty: "進階",
            income: "單崗位 300–1,200 元",
            tools: [
              "Claude",
              "Manus",
              "n8n",
              "Microsoft Copilot"
            ],
            desc: "幫 HR 或創業團隊寫崗位 JD、設計面試題，並用 Agent 對簡歷做初篩打分與摘要，節省 70% 篩選時間。",
            deliverables: "JD + 勝任力模型 + 初篩規則 + 候選人摘要表",
            monetize: "按崗位收費；包年 10 崗套餐；獵頭合作分成",
            channels: "HR 社群、獵頭顧問、創業公司 CEO 群",
            steps: [
              "做 1 個崗位完整樣例（JD+篩簡歷表）",
              "Manus 批次讀 PDF 簡歷輸出結構化摘要",
              "人工複核消除偏見與隱私洩露風險",
              "簽約遵守個人資訊保護法"
            ],
            tip: "AI 打分僅作輔助，錄用決策權在客戶；資料脫敏儲存。"
          },
          {
            title: "發票 / 合同智慧歸檔流水線",
            emoji: "📋",
            category: "自动化",
            difficulty: "進階",
            income: "單專案 4,000–18,000 元",
            tools: [
              "n8n",
              "OpenClaw",
              "Claude",
              "Notion AI"
            ],
            desc: "為財務、行政團隊搭建「郵件/微信收票 → OCR 識別 → 分類入賬 → 異常提醒」自動化流水線，減少手工錄入。",
            deliverables: "流程設計 + n8n 工作流 + 分類規則 + 操作手冊",
            monetize: "實施費一次性；月監控 600–2,000 元",
            channels: "代理記賬公司、企業行政外包、財務軟體實施商",
            steps: [
              "選發票+合同兩類文件做 POC",
              "Claude 做欄位抽取校驗規則",
              "OpenClaw 定時推送異常彙總給財務",
              "上線前並行跑 2 周人工對照"
            ],
            tip: "財務資料本地或客戶私有云；不等同於代賬服務。"
          },
          {
            title: "多平臺社媒定時釋出與輿情監控",
            emoji: "𝕏",
            category: "自动化",
            difficulty: "進階",
            income: "月入 2,000–8,000 元",
            tools: [
              "OpenClaw",
              "n8n",
              "Grok",
              "Perplexity"
            ],
            desc: "幫品牌運營統一定時釋出內容、彙總各平臺資料，並監控品牌關鍵詞提及與負面評論，每日推送摘要。",
            deliverables: "釋出日曆 + 自動分發配置 + 每日輿情簡報 + 異常告警",
            monetize: "月費 2,000 元起；按平臺數量加價；危機響應包另議",
            channels: "品牌市場部、公關公司、MCN 運營團隊",
            steps: [
              "OpenClaw Cron 每日抓輿情並推飛書",
              "n8n 連線 CMS 與社媒 API（合規前提下）",
              "Grok 追蹤 X 實時提及",
              "首月免費試執行換案例授權"
            ],
            tip: "遵守各平臺 API 與自動化規則；負面輿情需人工研判。"
          },
          {
            title: "1v1 職場 AI 技能陪練",
            emoji: "🎯",
            category: "教育培训",
            difficulty: "入門",
            income: "200–500 元/小時",
            tools: [
              "本站全套模組",
              "Claude",
              "Cursor",
              "Gamma"
            ],
            desc: "針對個人職場痛點（寫週報、做 PPT、學 Python 自動化）提供 4–8 次 1v1 陪練，每次解決一個真實工作任務。",
            deliverables: "課前診斷 + 4–8 次直播/語音 + 作業批改 + 工具配置清單",
            monetize: "小時計費；4 次卡 1,500 元；8 次卡 2,800 元",
            channels: "小紅書、即刻、前學員轉介紹、企業 HR 內推",
            steps: [
              "定義 3 套標準課包（行政/市場/程式設計師入門）",
              "每次課用客戶真實任務當課堂練習",
              "錄屏總結髮學員複習",
              "結業發「AI 應用能力清單」增信"
            ],
            tip: "不承諾升職加薪；課前確認學員基礎與目標。"
          },
          {
            title: "青少年 AI 科創體驗營",
            emoji: "✨",
            category: "教育培训",
            difficulty: "進階",
            income: "單場 3,000–15,000 元",
            tools: [
              "Bolt.new",
              "ChatGPT",
              "Midjourney",
              "釦子 Coze"
            ],
            desc: "為教培機構、夏令營提供半天到 2 天的 AI 體驗課：做聊天機器人、AI 繪畫、小遊戲網頁，激發興趣而非深度程式設計。",
            deliverables: "課程教案 + 現場物料 + 學員作品展示頁 + 講師支援",
            monetize: "機構買斷課包；按人頭 80–200 元；材料費另計",
            channels: "教培機構、少年宮、國際學校課外活動",
            steps: [
              "打磨 1 套「2 小時出作品」標準流程",
              "Bolt.new 讓零基礎做出可分享網頁",
              "Midjourney 做創意繪畫模組",
              "準備家長說明會 PPT 促成交"
            ],
            tip: "未成年人隱私保護；內容健康向上，遵守雙減相關政策。"
          },
          {
            title: "銀髮族 AI 應用公益課（可收費進階版）",
            emoji: "🏥",
            category: "教育培训",
            difficulty: "入門",
            income: "單次 50–200 元/人",
            tools: [
              "豆包",
              "通義千問",
              "Fish Audio",
              "Gamma"
            ],
            desc: "在社群、老年大學教長輩用語音助手聊天、AI 修圖、防詐騙識別、視訊通話輔助，基礎課可公益獲客，進階課收費。",
            deliverables: "2 小時線下課 + 大字版圖文手冊 + 課後微信群答疑（7 天）",
            monetize: "社群補貼 + 學員自願進階課；企業 CSR 贊助",
            channels: "街道社群、老年大學、銀行網點合作",
            steps: [
              "製作超大字型一步一圖手冊",
              "豆包/通義支援方言與語音，降低打字門檻",
              "先免費試講換社群背書",
              "進階課教 AI 相簿修復與旅遊規劃"
            ],
            tip: "耐心慢節奏；強調不轉賬、不洩露驗證碼。"
          },
          {
            title: "設計師 AI 工作流小班課",
            emoji: "🎨",
            category: "教育培训",
            difficulty: "進階",
            income: "1,499–3,999 元/期",
            tools: [
              "Midjourney",
              "Flux",
              "Runway",
              "Stable Diffusion"
            ],
            desc: "面向平面/UI 設計師開設 4 周小班，系統教 AI 出圖、控圖、修圖與工作流整合，產出可入作品集的商業級稿件。",
            deliverables: "4 次直播 + 作業點評 + 提示詞庫 + 商用授權說明課",
            monetize: "期課收費；1v1 點評加價；企業團報折扣",
            channels: "設計社群、站酷、Behance 中文圈、設計院校",
            steps: [
              "準備 4 周大綱：概念→商業→動效→作品集",
              "Flux/MJ 各做 1 套行業案例（美妝/3C）",
              "第 4 周幫學員改 3 張作品集級稿件",
              "優秀學員推薦接單渠道"
            ],
            tip: "明確商用許可邊界；鼓勵學員標註 AI 輔助創作。"
          }
        ]
      }
  });
})();
