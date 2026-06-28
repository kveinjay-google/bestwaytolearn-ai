/* ZH-TW overlays — prompt examples */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('zh-TW', {
  "promptExampleCategories": {
    "全部": "全部",
    "对话助手": "對話助手",
    "编程开发": "程式設計開發",
    "图像创作": "圖像創作",
    "视频音频": "影片音訊",
    "办公效率": "辦公效率",
    "Agent 自动化": "Agent 自動化",
    "搜索研究": "搜尋研究"
  },
  "promptExamplesUi": {
    "countShown": "顯示 {visible} / {total} 個",
    "emptyHint": "該分類下暫無範例，試試其他標籤。",
    "structureLabel": "提示詞結構",
    "scenarioLabel": "適用場景",
    "tipsLabel": "使用建議",
    "copyLabel": "複製提示詞",
    "frameworkHint": "結構化提示詞建議包含：角色 → 任務 → 背景 → 格式 → 約束（RTFC）。將 [佔位符] 替換為你的真實資訊。"
  },
  "promptExamples": [
    {
      "id": "chatgpt-longform",
      "category": "對話助手",
      "software": "ChatGPT",
      "emoji": "💬",
      "difficulty": "入門",
      "title": "結構化長文寫作（RTFC 框架）",
      "scenario": "需要產出可直接釋出的公眾號/部落格/產品說明文，避免空泛套話。",
      "structure": [
        "Role 角色",
        "Task 任務",
        "Format 格式",
        "Constraints 約束"
      ],
      "prompt": "# Role\n你是一位有 10 年經驗的內容策略顧問，擅長 B2B 科技類長文。\n\n# Task\n根據下方背景，撰寫一篇面向職場新人的 AI 學習科普文。\n\n# Context\n- 目標讀者：25–35 歲上班族，零基礎\n- 核心資訊：7 天可上手、任務驅動學習、不必先學數學\n- 字數：1200–1500 字\n- 渠道：微信公眾號\n\n# Format\n1. 3 個標題備選（含副標題）\n2. 正文：開篇故事 → 3 個常見誤區 → 7 天方法 → 工具推薦 → 結尾 CTA\n3. 5 個話題標籤\n\n# Constraints\n- 語氣：親切、具體、少形容詞堆砌\n- 禁止：「綜上所述」「隨著 AI 發展」等空話\n- 每個論點配 1 個可執行例子\n- 不編造資料，不確定處標註「待核實」",
      "tips": "同一主題先用模糊指令試一次，再用此模板對比——差異即提示詞價值。GPT-4o 對 Format 小節響應最好。",
      "tags": [
        "寫作",
        "長文",
        "RTFC"
      ]
    },
    {
      "id": "claude-contract",
      "category": "對話助手",
      "software": "Claude",
      "emoji": "🎭",
      "difficulty": "進階",
      "title": "合同風險審閱（長文件）",
      "scenario": "上傳 PDF 合同，從乙方視角識別高風險條款並給出談判建議。",
      "structure": [
        "Role",
        "Task",
        "Output 結構",
        "Verification 標註"
      ],
      "prompt": "# Role\n你是一位謹慎的企業法務助理，擅長 SaaS 採購與技術服務合同審閱。\n\n# Task\n審閱我上傳的合同全文。我們是乙方（服務提供方）。\n\n# Output\n## 1. 高風險條款（Top 5）\n每條包含：條款原文引用 | 風險等級（高/中/低）| 風險原因 | 建議修改措辭\n\n## 2. 中風險條款（3 條）\n同上格式\n\n## 3. 談判優先順序表\n| 條款位置 | 風險 | 是否可談 | 建議 |\n\n## 4. 乙方需確認的 3 個問題\n\n# Constraints\n- 不確定的法律結論標註「需人工律師確認」\n- 不編造法條編號\n- 引用時註明章節/頁碼（若 PDF 有）",
      "tips": "Claude 長上下文優勢明顯：上傳完整合同比貼上片段準確。敏感合同勿用公共賬號。",
      "tags": [
        "法務",
        "長文件",
        "Claude"
      ]
    },
    {
      "id": "kimi-annual-report",
      "category": "對話助手",
      "software": "Kimi",
      "emoji": "🌙",
      "difficulty": "進階",
      "title": "年報/招股書結構化摘要",
      "scenario": "上傳 100+ 頁 PDF 年報，快速提取財務趨勢、風險與管理層表述。",
      "structure": [
        "Task",
        "Data scope",
        "Output schema",
        "Citation 引用"
      ],
      "prompt": "請基於我上傳的年度報告 PDF，輸出結構化分析筆記：\n\n## 1. 一句話業務定位\n## 2. 近三年營收/淨利潤趨勢（表格，註明單位）\n## 3. 本期 3 個亮點 + 3 個風險（每條引用章節/頁碼）\n## 4. 管理層前瞻性表述摘錄（原文 + 頁碼）\n## 5. 投資者追問清單（5 個問題）\n\n# Rules\n- 數字必須來自文件；缺失寫「未披露」\n- 不推測未出現的財務資料\n- 金額單位與原文一致（萬元/億元）",
      "tips": "Kimi 適合整本 PDF；財務數字務必回原文核對，AI 易混淆單位。",
      "tags": [
        "財報",
        "PDF",
        "Kimi"
      ]
    },
    {
      "id": "deepseek-code-review",
      "category": "對話助手",
      "software": "DeepSeek",
      "emoji": "🔍",
      "difficulty": "入門",
      "title": "程式碼審查與重構建議",
      "scenario": "提交模組程式碼，獲取安全、效能、可讀性三方面審查意見。",
      "structure": [
        "Role",
        "Code block",
        "Review dimensions",
        "Output format"
      ],
      "prompt": "# Role\n你是一位資深 Python 工程師，注重可維護性與邊界處理。\n\n# Task\n審查以下程式碼並給出改進建議。\n\n```python\n[Paste your code here]\n```\n\n# Review dimensions\n1. **正確性**：邏輯錯誤、邊界條件、異常處理\n2. **安全性**：注入、敏感資訊、許可權\n3. **效能**：明顯瓶頸（僅指出，不必過早最佳化）\n4. **可讀性**：命名、函式長度、型別提示\n\n# Output\n- 問題列表（嚴重度 P0/P1/P2）\n- 重構後程式碼示例（僅改必要部分）\n- 2 個 pytest 測試用例建議",
      "tips": "DeepSeek 價效比高，適合日常 Code Review；附上呼叫上下文和錯誤日誌效果更好。",
      "tags": [
        "程式碼",
        "審查",
        "DeepSeek"
      ]
    },
    {
      "id": "cursor-feature",
      "category": "程式設計開發",
      "software": "Cursor",
      "emoji": "⚡",
      "difficulty": "入門",
      "title": "Agent 模式：全棧功能開發",
      "scenario": "在現有專案中新增一個完整功能模組（多檔案協作）。",
      "structure": [
        "Context",
        "Requirements",
        "Acceptance criteria",
        "Constraints"
      ],
      "prompt": "請在當前專案中實現「使用者主題切換」功能。\n\n## 現狀\n- 技術棧：HTML + CSS + 原生 JS（單頁）\n- 已有：header、main、footer 佈局\n\n## 需求\n1. 深色/淺色主題，CSS 變數驅動色板\n2. Header 右側切換按鈕，偏好存入 localStorage\n3. 首屏無閃爍（讀取 localStorage 後再渲染）\n4. 移動端可用，不改變現有佈局結構\n\n## 驗收標準\n- [ ] 切換後所有文字對比度達標\n- [ ] 重新整理頁面保持選擇\n- [ ] 列出修改的檔案清單\n- [ ] README 補充使用說明\n\n## 約束\n- 不引入新框架\n- 程式碼含中文註釋\n- 完成後說明如何本地測試",
      "tips": "Cursor Agent 先讓它列計劃再執行；大改動要求分步 commit 說明。",
      "tags": [
        "Agent",
        "前端",
        "Cursor"
      ]
    },
    {
      "id": "copilot-comment-driven",
      "category": "程式設計開發",
      "software": "GitHub Copilot",
      "emoji": "👨‍💻",
      "difficulty": "入門",
      "title": "註釋驅動函式生成",
      "scenario": "用清晰函式註釋觸發 Copilot 補全業務邏輯與單元測試。",
      "structure": [
        "Function spec comment",
        "Input/Output examples",
        "Edge cases"
      ],
      "prompt": "// 計算訂單折扣金額\n// 規則：滿 100 減 10，滿 200 減 30，滿 500 減 80\n// 輸入：orderAmount（非負數字，單位：元）\n// 輸出：{ original, discount, final } 均為數字，final >= 0\n// 邊界：0 元訂單 discount=0；負數輸入拋錯\n// 示例：calcDiscount(150) => { original: 150, discount: 10, final: 140 }\nfunction calcDiscount(orderAmount) {\n  // Copilot 從此處補全\n}",
      "tips": "Copilot 對「輸入/輸出/示例/邊界」四要素註釋響應最穩定；測試檔案放同目錄。",
      "tags": [
        "補全",
        "註釋",
        "Copilot"
      ]
    },
    {
      "id": "codex-cli-bugfix",
      "category": "程式設計開發",
      "software": "Codex CLI",
      "emoji": "⚡",
      "difficulty": "進階",
      "title": "終端 Agent：報錯修復閉環",
      "scenario": "貼上完整 traceback，讓 Agent 定位、修復並補充測試。",
      "structure": [
        "Error log",
        "Repro steps",
        "Fix requirements",
        "Test command"
      ],
      "prompt": "專案目錄：./my-api（Node.js + Express）\n\n## 問題\n執行 npm test 失敗，報錯如下：\n```\n[Paste full traceback]\n```\n\n## 復現\n1. npm install\n2. npm test\n\n## 要求\n1. 解釋根因（中文）\n2. 修復程式碼，保持 API 行為不變\n3. 補充/更新測試覆蓋此邊界\n4. 給出驗證命令\n\n## 約束\n- 不升級 major 依賴\n- 修改前說明將改哪些檔案",
      "tips": "Codex CLI 需給完整棧而非最後一行；允許 Agent 執行測試命令驗證。",
      "tags": [
        "CLI",
        "除錯",
        "Codex"
      ]
    },
    {
      "id": "bolt-prototype",
      "category": "程式設計開發",
      "software": "Bolt.new",
      "emoji": "⚡",
      "difficulty": "入門",
      "title": "自然語言生成可部署原型",
      "scenario": "非程式設計師或 PM 快速驗證產品想法，生成可分享連結的 Web 原型。",
      "structure": [
        "Product vision",
        "Pages",
        "Style",
        "Interactions"
      ],
      "prompt": "Build a single-page \"AI Learning Progress Tracker\" web app.\n\n## Pages / sections\n1. Hero：標題 + 7-day learning path summary\n2. Progress cards：4 phases (Learn, Tools, Practice, Review) with % complete\n3. Daily log：textarea to save notes (localStorage)\n4. Footer CTA：Export notes as .txt\n\n## Style\n- Dark tech aesthetic, teal accent\n- Responsive, mobile-first\n- Clean sans-serif typography\n\n## Tech\n- React or vanilla — your choice\n- No backend; localStorage only\n- Deploy-ready structure",
      "tips": "Bolt 用英文描述頁面結構更穩；生成後迭代「bigger tap targets」「simpler colors」。",
      "tags": [
        "原型",
        "全棧",
        "Bolt"
      ]
    },
    {
      "id": "mj-product-shot",
      "category": "影象創作",
      "software": "Midjourney",
      "emoji": "🎨",
      "difficulty": "入門",
      "title": "電商產品圖（英文提示詞）",
      "scenario": "生成白底/場景產品圖，用於詳情頁或廣告素材。",
      "structure": [
        "Subject",
        "Environment",
        "Lighting",
        "Style",
        "Parameters"
      ],
      "prompt": "minimalist product photo of wireless earbuds in charging case,\npure white seamless background, studio softbox lighting,\ncentered composition, subtle shadow beneath product,\nultra sharp commercial photography, 4k detail,\nclean negative space for text overlay --ar 4:5 --style raw --v 6\n\nNegative prompt: text, watermark, logo, blurry, deformed, extra objects, cluttered background, hands",
      "tips": "Midjourney 英文為主；順序：主體 → 環境 → 光 → 風格 → --ar/--v。文字排版需後期疊加。",
      "tags": [
        "產品圖",
        "電商",
        "Midjourney"
      ]
    },
    {
      "id": "dalle-article-cover",
      "category": "影象創作",
      "software": "DALL·E 3",
      "emoji": "🖼️",
      "difficulty": "入門",
      "title": "文章封面圖（自然語言）",
      "scenario": "在 ChatGPT 內用 DALL·E 生成部落格/ newsletter 封面，支援中文場景描述。",
      "structure": [
        "Subject",
        "Mood",
        "Composition",
        "Aspect ratio"
      ],
      "prompt": "請使用 DALL·E 生成一張文章封面圖：\n\n主題：職場人利用 AI 提升效率（抽象概念，不要出現具體品牌 Logo）\n畫面：一位專業人士在明亮現代辦公室使用膝上型電腦，螢幕發出柔和的藍綠色光暈，背景有隱約的神經網路線條圖案\n風格：扁平插畫 + 輕微 3D 質感，專業、樂觀、不卡通\n構圖：右側留白 30% 用於標題文字\n畫幅：橫版 16:9，適合公眾號頭圖",
      "tips": "DALL·E 理解中文場景好；說明留白位置避免主體擋標題區。",
      "tags": [
        "封面",
        "插畫",
        "DALL·E"
      ]
    },
    {
      "id": "sd-ecommerce-white",
      "category": "影象創作",
      "software": "Stable Diffusion",
      "emoji": "🌀",
      "difficulty": "進階",
      "title": "白底商品圖（正負提示詞）",
      "scenario": "本地/WebUI 批次生成統一風格電商主圖。",
      "structure": [
        "Positive prompt",
        "Negative prompt",
        "Sampler settings"
      ],
      "prompt": "Positive:\n(product photography:1.3), smart thermos bottle, matte white finish,\nseamless white background, studio lighting, soft ground shadow,\ncentered, sharp focus, commercial catalog style, 8k uhd\n\nNegative:\nlowres, blurry, text, watermark, logo, bad anatomy, extra fingers,\ndeformed, jpeg artifacts, cluttered, colorful background, people\n\nSettings suggestion: Steps 28–35, CFG 7–8, Size 1024×1024 or 4:5",
      "tips": "SD 用權重語法 (keyword:1.2)；固定 seed 可批次統一風格。",
      "tags": [
        "SD",
        "電商",
        "負向提示"
      ]
    },
    {
      "id": "kling-product-video",
      "category": "影片音訊",
      "software": "可靈 AI",
      "emoji": "🎬",
      "difficulty": "入門",
      "title": "豎屏產品展示短影片",
      "scenario": "為抖音/小紅書生成 5–10 秒產品環繞鏡頭素材。",
      "structure": [
        "Shot type",
        "Subject action",
        "Lighting",
        "Technical"
      ],
      "prompt": "豎屏 9:16，簡約白色桌面上放置智慧保溫杯，\n緩慢環繞鏡頭（orbit shot），杯口有輕微蒸汽上升，\n柔和自然光，高階商業廣告質感，背景乾淨無文字，\n產品始終清晰不虛化，真實物理運動，5–8 秒",
      "tips": "可靈對「緩慢環繞」「商業廣告質感」響應好；複雜劇情拆成多段生成再剪輯。",
      "tags": [
        "產品影片",
        "豎屏",
        "可靈"
      ]
    },
    {
      "id": "runway-image-to-video",
      "category": "影片音訊",
      "software": "Runway",
      "emoji": "🎥",
      "difficulty": "進階",
      "title": "圖生影片：產品微動效",
      "scenario": "將靜態產品圖轉為 4 秒 Hero 動效，用於落地頁或廣告片頭。",
      "structure": [
        "Motion description",
        "Preserve subject",
        "Duration",
        "Quality"
      ],
      "prompt": "Slow cinematic push-in toward the product,\nsubtle parallax depth, product remains sharp and undistorted,\nsoft studio light with gentle shadow movement,\nno morphing or melting artifacts, commercial ad quality,\n4 seconds, seamless loop-friendly ending",
      "tips": "圖生影片宜小幅度運動；產品邊緣易變形時用「product remains sharp」約束。",
      "tags": [
        "圖生影片",
        "Runway",
        "動效"
      ]
    },
    {
      "id": "suno-bgm",
      "category": "影片音訊",
      "software": "Suno",
      "emoji": "🎵",
      "difficulty": "入門",
      "title": "品牌宣傳背景音樂（純音樂）",
      "scenario": "為產品釋出影片生成 30–60 秒無歌詞 BGM。",
      "structure": [
        "Genre",
        "Mood",
        "Instruments",
        "BPM",
        "Use case"
      ],
      "prompt": "Instrumental upbeat corporate technology track,\nmodern synth pads and light percussion, optimistic and clean,\nno vocals, suitable for AI product launch video,\n100–110 BPM, steady energy without dramatic drops,\n30–45 seconds",
      "tips": "Suno 明確「Instrumental + BPM + 場景」；生成 2 軌選節奏更穩的一首 Extend。",
      "tags": [
        "BGM",
        "純音樂",
        "Suno"
      ]
    },
    {
      "id": "notion-meeting",
      "category": "辦公效率",
      "software": "Notion AI",
      "emoji": "📋",
      "difficulty": "入門",
      "title": "會議錄音/筆記 → 結構化紀要",
      "scenario": "將散亂會議記錄整理為可同步到專案管理的紀要格式。",
      "structure": [
        "Input",
        "Output schema",
        "Owner assignment",
        "Rules"
      ],
      "prompt": "請將以下會議原始記錄整理為結構化紀要：\n\n# 輸出格式\n## 會議資訊\n- 主題、日期、參會人\n\n## 關鍵決議（編號列表）\n\n## 待辦事項表\n| 事項 | 負責人 | 截止日期 | 優先順序 |\n\n## 未決問題\n\n## 下次會議議題建議\n\n# 規則\n- 不編造未討論內容\n- 無負責人的待辦標註「待指定」\n- 日期不明寫「待定」\n\n---\n[貼上會議記錄]",
      "tips": "Notion AI 適合二次整理；會中實時記關鍵詞比事後補錄更準。",
      "tags": [
        "會議紀要",
        "Notion",
        "辦公"
      ]
    },
    {
      "id": "gamma-pitch",
      "category": "辦公效率",
      "software": "Gamma",
      "emoji": "📊",
      "difficulty": "入門",
      "title": "10 頁路演 PPT 大綱",
      "scenario": "輸入商業大綱，快速生成可演示的幻燈片初稿。",
      "structure": [
        "Topic",
        "Audience",
        "Slide outline",
        "Visual style"
      ],
      "prompt": "生成 10 頁中文路演 PPT：\n\n主題：AI 學習平臺 BestWayToLearn.AI\n受眾：企業培訓負責人 / HR L&D\n\n頁結構：\n1. 封面  2. 痛點  3. 解決方案  4. 產品演示  5. 學習路徑\n6. 客戶案例  7. 商業模式  8. 差異化  9. 里程碑  10. 聯絡方式\n\n風格：深色科技風，每頁 3–5 條要點，避免大段文字\n資料：可先用佔位符 [X%] 標註需替換的真實資料",
      "tips": "Gamma 需要清晰頁結構；生成後替換佔位資料並插入產品截圖。",
      "tags": [
        "PPT",
        "路演",
        "Gamma"
      ]
    },
    {
      "id": "copilot-excel",
      "category": "辦公效率",
      "software": "Microsoft Copilot",
      "emoji": "🪟",
      "difficulty": "進階",
      "title": "Excel 資料分析與公式",
      "scenario": "在 Excel 內用 Copilot 分析銷售表並生成透視建議。",
      "structure": [
        "Data description",
        "Questions",
        "Output",
        "Formula"
      ],
      "prompt": "我有一張銷售資料表，欄位：日期、區域、SKU、數量、單價、金額。\n時間範圍：過去 12 個月。\n\n請完成：\n1. 月度銷售額趨勢概述\n2. 金額 Top 5 SKU 及佔比\n3. 找出銷售額異常下降的月份並分析可能原因（基於資料，不臆測）\n4. 建議 2 種圖表型別及軸定義\n5. 給出計算 YoY 環比的 Excel 公式示例\n\n若需要我選中資料區域，請說明需要包含哪些列。",
      "tips": "Copilot 在 Excel 內先選中資料區域再提問；敏感財務資料注意企業合規。",
      "tags": [
        "Excel",
        "資料分析",
        "Copilot"
      ]
    },
    {
      "id": "openclaw-cron-digest",
      "category": "Agent 自動化",
      "software": "OpenClaw",
      "emoji": "🦞",
      "difficulty": "進階",
      "title": "Cron 定時行業簡報推送",
      "scenario": "工作日早晨自動彙總行業動態並推送到 Telegram/Slack。",
      "structure": [
        "Schedule",
        "Agent role",
        "Output spec",
        "Channel"
      ],
      "prompt": "openclaw cron create \"0 9 * * 1-5\" \\\n  --name \"Daily AI industry digest\" \\\n  --tz \"Asia/Shanghai\" \\\n  --session isolated \\\n  --message \"你是行業研究助理。彙總過去 24 小時 AI 行業重要動態：\n\n1) 頭條 3 條（各 1 句 + 來源連結）\n2) 對開發者的影響\n3) 今日關注 2 個變數\n\n輸出中文，400 字以內。無可靠來源時寫「暫無重大更新」，禁止編造。\n引用必須可點選。\" \\\n  --announce \\\n  --channel telegram \\\n  --to \"YOUR_CHANNEL_ID\"",
      "tips": "先 openclaw cron run 手動測試；message 裡寫清輸出結構與禁止編造。",
      "tags": [
        "Cron",
        "自動化",
        "OpenClaw"
      ]
    },
    {
      "id": "coze-support-bot",
      "category": "Agent 自動化",
      "software": "釦子 Coze",
      "emoji": "🎯",
      "difficulty": "入門",
      "title": "客服 Bot 系統提示詞",
      "scenario": "在 Coze 建立產品 FAQ 機器人，統一語氣與升級策略。",
      "structure": [
        "Persona",
        "Knowledge scope",
        "Reply format",
        "Escalation"
      ],
      "prompt": "# 角色\n你是「BestWayToLearn.AI」官方學習助手，友好、專業、耐心。\n\n# 知識範圍\n僅回答：課程結構、學習路徑、賬號與進度、常見技術問題。\n不回答：投資建議、醫療法律、與產品無關話題。\n\n# 回覆格式\n1. 先 1 句直接回答\n2. 步驟列表（若適用）\n3. 相關連結或「如需人工請回復：轉人工」\n\n# 約束\n- 不確定時說「我不確定，建議聯絡 support@example.com」\n- 不編造功能或價格\n- 語氣簡潔，避免超過 200 字\n\n# 升級\n使用者連問 2 次「沒用」或涉及付款糾紛 → 提示轉人工工單",
      "tips": "Coze 中把 FAQ 文件接入知識庫；系統提示詞管邊界，知識庫管事實。",
      "tags": [
        "Bot",
        "客服",
        "Coze"
      ]
    },
    {
      "id": "dify-rag-agent",
      "category": "Agent 自動化",
      "software": "Dify",
      "emoji": "🔗",
      "difficulty": "進階",
      "title": "企業知識庫 RAG 問答",
      "scenario": "搭建基於內部文件的問答 Agent，答案必須帶引用片段。",
      "structure": [
        "System prompt",
        "Retrieval rules",
        "Citation format",
        "Refusal"
      ],
      "prompt": "# System\n你是企業內部知識庫助手。僅根據檢索到的文件片段回答，不依賴預訓練知識編造公司政策。\n\n# 回答規則\n1. 先給出直接答案（2–4 句）\n2. 「依據」小節：列出引用文件名 + 相關段落摘要\n3. 若檢索結果不足以回答，回覆：「當前知識庫未找到相關規定，建議聯絡 [部門] 或提交工單。」\n\n# 格式\n- 使用 Markdown\n- 引用格式：[文件名 §章節]\n- 涉及日期/數字必須與原文一致\n\n# 禁止\n- 推測未寫入知識庫的政策\n- 給出法律/合規的最終結論",
      "tips": "Dify 知識庫分段建議 500–800 字/塊；測試集準備 20 個真實員工問題驗收。",
      "tags": [
        "RAG",
        "知識庫",
        "Dify"
      ]
    },
    {
      "id": "perplexity-competitor",
      "category": "搜尋研究",
      "software": "Perplexity",
      "emoji": "🔎",
      "difficulty": "入門",
      "title": "競品與市場一頁紙調研",
      "scenario": "快速獲取帶引用的競品對比，用於內部討論或選型會議。",
      "structure": [
        "Scope",
        "Comparison dimensions",
        "Output",
        "Source rules"
      ],
      "prompt": "調研 2026 年「AI 程式設計 IDE」市場，重點對比 Cursor、Windsurf、GitHub Copilot。\n\n請輸出中文一頁紙：\n1. 市場概述（2 段）\n2. 對比表：定位 | 定價 | 核心差異 | 目標使用者\n3. 3 條選型建議（按使用者型別）\n4. 所有關鍵結論附引用編號，附來源連結\n\n規則：定價以官網為準；無官方來源的資料標註「待核實」。",
      "tips": "Perplexity 優勢在引用；定價和功能仍要點進官網二次確認。",
      "tags": [
        "競品",
        "調研",
        "Perplexity"
      ]
    },
    {
      "id": "notebooklm-papers",
      "category": "搜尋研究",
      "software": "NotebookLM",
      "emoji": "📓",
      "difficulty": "進階",
      "title": "多篇論文對比筆記",
      "scenario": "上傳 3 篇相關論文，生成對比表與閱讀順序建議。",
      "structure": [
        "Upload scope",
        "Comparison fields",
        "Recommendation",
        "Limits"
      ],
      "prompt": "（上傳 3 篇 PDF 後傳送）\n\n請對比這三篇論文並輸出：\n\n## 對比表\n| 論文 | 研究問題 | 資料集 | 方法 | 主要結論 | 侷限 |\n\n## 方法異同（300 字）\n\n## 新手閱讀順序建議\n說明先讀哪篇、為什麼\n\n## 3 個可追問的研究問題\n\n規則：僅基於上傳文件，不補充未出現的實驗結果。",
      "tips": "NotebookLM 只讀上傳內容；學術引用請回溯原文 DOI。",
      "tags": [
        "論文",
        "文獻",
        "NotebookLM"
      ]
    },
    {
      "id": "metaso-academic",
      "category": "搜尋研究",
      "software": "秘塔 AI 搜尋",
      "emoji": "🔭",
      "difficulty": "入門",
      "title": "學術模式文獻綜述起點",
      "scenario": "用學術搜尋模式快速定位領域核心論文與綜述入口。",
      "structure": [
        "Research question",
        "Time range",
        "Output",
        "Next steps"
      ],
      "prompt": "使用學術搜尋模式：\n\n研究問題：大語言模型在程式碼生成中的可靠性評估方法有哪些？\n時間範圍：2023–2026\n語言：中英文學術來源均可\n\n請輸出：\n1. 該領域 5 篇高引用論文（標題、作者、年份、一句話貢獻）\n2. 2 篇綜述/調研論文推薦\n3. 3 個常用評估指標名稱及定義\n4. 建議的進一步檢索關鍵詞（中英文）\n\n每條附可點選來源。未找到則明確說明。",
      "tips": "秘塔學術模式適合中文使用者；重要論文建議去 Google Scholar 交叉驗證引用量。",
      "tags": [
        "學術",
        "綜述",
        "秘塔"
      ]
    }
  ]
});
})();
