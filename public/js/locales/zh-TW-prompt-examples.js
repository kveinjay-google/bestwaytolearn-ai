/* ZH-TW overlays — prompt-examples */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("zh-TW", {
  "promptExampleCategories": {
    "全部": "全部",
    "对话助手": "對話助理",
    "编程开发": "程式設計開發",
    "图像创作": "圖片創作",
    "视频音频": "視訊音訊",
    "办公效率": "辦公室效率",
    "Agent 自动化": "Agent 自動化",
    "搜索研究": "搜尋研究"
  },
  "promptExamplesUi": {
    "countShown": "Showing {visible} / {total}",
    "emptyHint": "No examples in this category. Try another tag.",
    "structureLabel": "Prompt structure",
    "scenarioLabel": "When to use",
    "tipsLabel": "Tips",
    "copyLabel": "Copy prompt",
    "frameworkHint": "Use Role → Task → Context → Format → Constraints (RTFC). Replace [placeholders] with your details."
  },
  "promptExamples": [
    {
      "id": "chatgpt-longform",
      "title": "結構化長文寫作（RTFC 框架）",
      "scenario": "需要產出可直接發佈的公眾號碼/部落格/產品說明文，避免空泛套話。",
      "structure": [
        "Role 角色",
        "Task 任務",
        "Format 格式",
        "Constraints 約束"
      ],
      "prompt": "# Role\n你是一位有 10 年經驗的內容策略顧問，擅長 B2B 科技類長文。\n\n# Task\n根據下方背景，撰寫一篇針對職場新人的 AI 學習科普文。\n\n# Context\n- 目標讀者：25–35 歲上班族，零基礎\n- 核心訊息：7 天可上手、任務驅動學習、不必先學數學\n- 字數：1200–1500 字\n- 管道：微信公眾號\n\n# Format\n1. 3 個標題備選（含副標題）\n2. 內文：開篇故事 → 3 常見迷思 → 7 天法 → 工具推薦 → 結尾 CTA\n3. 5 個話題標籤\n\n# Constraints\n- 語調：親切、具體、少形容詞堆砌\n- 禁止：「綜上所述」「隨著 AI 發展」等空話\n- 每個論點配 1 個可執行例子\n- 不編造數據，不確定處標註「待核實」",
      "tips": "同一主題先用模糊指令試一次，再用此模板對比──差異即提示詞價值。 GPT-4o 對 Format 小節反應最好。"
    },
    {
      "id": "claude-contract",
      "title": "合約風險審閱（長文件）",
      "scenario": "上傳 PDF 合同，從乙方視角識別高風險條款並給予談判建議。",
      "structure": [
        "Role",
        "Task",
        "Output 結構",
        "Verification 標註"
      ],
      "prompt": "# Role\n你是一位謹慎的企業法務助理，擅長 SaaS 採購與技術服務合約審閱。\n\n# Task\n審閱我上傳的合約全文。我們是乙方（服務提供方）。\n\n# Output\n## 1. 高風險條款（Top 5）\n每條包含：條款原文引用 | 風險等級（高/中/低）| 風險原因 | 建議修改措詞\n\n## 2. 中風險條款（3 條）\n同上格式\n\n## 3. 談判優先級表\n| 條款位置 | 風險 | 是否可談 | 建議 |\n\n## 4. 乙方需確認的 3 個問題\n\n# Constraints\n- 不確定的法律結論標註“需人工律師確認”\n- 不編造法條編號\n- 引用時註明章節/頁碼（若 PDF 有）",
      "tips": "Claude 長上下文優勢明顯：上傳完整合約比貼上片段準確。敏感合約勿用公共帳號。"
    },
    {
      "id": "kimi-annual-report",
      "title": "年報/招股書結構化摘要",
      "scenario": "上傳 100+ 頁 PDF 年報，快速擷取財務趨勢、風險與管理表述。",
      "structure": [
        "Task",
        "Data scope",
        "Output schema",
        "Citation 引用"
      ],
      "prompt": "請基於我上傳的年度報告 PDF，輸出結構化分析筆記：\n\n## 1. 一句話業務定位\n## 2. 近三年營收/淨利趨勢（表格，註明單位）\n## 3. 本期 3 個亮點 + 3 個風險（每個引用章節/頁碼）\n## 4. 管理階層前瞻性表述摘錄（原文 + 頁碼）\n## 5. 投資人追問清單（5 個問題）\n\n# Rules\n- 數字必須來自文件；缺失寫「未揭露」\n- 不推測未出現的財務數據\n- 金額單位與原文一致（萬元/億元）",
      "tips": "Kimi 適合整本 PDF；財務數字務必回原文核對，AI 易混淆單位。"
    },
    {
      "id": "deepseek-code-review",
      "title": "程式碼審查與重構建議",
      "scenario": "提交模組程式碼，取得安全性、效能、可讀性三方面審查意見。",
      "structure": [
        "Role",
        "Code block",
        "Review dimensions",
        "Output format"
      ],
      "prompt": "# Role\n你是資深 Python 工程師，注重可維護性與邊界處理。\n\n# Task\n審查以下程式碼並給予改進建議。\n\n『`python\n[Paste your code here]\n```\n\n# Review dimensions\n1. **正確性**：邏輯錯誤、邊界條件、異常處理\n2. **安全性**：注入、敏感資訊、權限\n3. **效能**：明顯瓶頸（僅指出，不必過早優化）\n4. **可讀性**：命名、函數長度、型別提示\n\n# Output\n- 問題清單（嚴重度 P0/P1/P2）\n- 重構後程式碼範例（僅改必要部分）\n- 2 個 pytest 測試案例建議",
      "tips": "DeepSeek 性價比高，適合日常 Code Review；附上呼叫上下文和錯誤日誌效果更好。"
    },
    {
      "id": "cursor-feature",
      "title": "Agent 模式：全端功能開發",
      "scenario": "在現有專案中新增一個完整功能模組（多檔案協作）。",
      "structure": [
        "Context",
        "Requirements",
        "Acceptance criteria",
        "Constraints"
      ],
      "prompt": "請在目前專案中實現「使用者主題切換」功能。\n\n## 現狀\n- 技術堆疊：HTML + CSS + 原生 JS（單頁）\n- 已有：header、main、footer 佈局\n\n## 需求\n1. 深色/淺色主題，CSS 變數驅動色板\n2. Header 右側切換鈕，偏好存入 localStorage\n3. 首屏無閃爍（讀取 localStorage 後再渲染）\n4. 行動端可用，不改變現有佈局結構\n\n## 驗收標準\n- [ ] 切換後所有文字對比達標\n- [ ] 刷新頁面保持選擇\n- [ ] 列出修改後的文件清單\n- [ ] README 補充使用說明\n\n## 約束\n- 不引入新框架\n- 代碼含中文註釋\n- 完成後說明如何本地測試",
      "tips": "Cursor Agent 先讓它列計畫再執行；大改動要求逐步 commit 說明。"
    },
    {
      "id": "copilot-comment-driven",
      "title": "註釋驅動函數生成",
      "scenario": "以清晰函數註解觸發 Copilot 補全業務邏輯與單元測試。",
      "structure": [
        "Function spec comment",
        "Input/Output examples",
        "Edge cases"
      ],
      "prompt": "// 計算訂單折扣金額\n// 規則：滿 100 減 10，滿 200 減 30，滿 500 減 80\n// 輸入：orderAmount（非負數字，單位：元）\n// 輸出：{ original, discount, final } 皆為數字，final >= 0\n// 邊界：0 元訂單 discount=0；負數輸入拋錯\n// 範例：calcDiscount(150) => { original: 150, discount: 10, final: 140 }\nfunction calcDiscount(orderAmount) {\n  // Copilot 從此處補全\n}",
      "tips": "Copilot 對「輸入/輸出/範例/邊界」四要素註解回應最穩定；測試檔案放同目錄。"
    },
    {
      "id": "codex-cli-bugfix",
      "title": "終端機 Agent：報錯修復閉環",
      "scenario": "貼上完整 traceback，讓 Agent 定位、修復並補充測試。",
      "structure": [
        "Error log",
        "Repro steps",
        "Fix requirements",
        "Test command"
      ],
      "prompt": "專案目錄：./my-api（Node.js + Express）\n\n## 問題\n運行 npm test 失敗，報錯如下：\n```\n[Paste full traceback]\n```\n\n## 復現\n1. npm install\n2. npm test\n\n## 要求\n1. 解釋根因（中文）\n2. 修復程式碼，保持 API 行為不變\n3. 補充/更新測試涵蓋此邊界\n4. 給予驗證命令\n\n## 約束\n- 不升級 major 依賴\n- 修改前說明將改哪些文件",
      "tips": "Codex CLI 需給完整堆疊而非最後一行；允許 Agent 執行測試指令驗證。"
    },
    {
      "id": "bolt-prototype",
      "title": "自然語言產生可部署原型",
      "scenario": "非程式設計師或 PM 快速驗證產品想法，產生可分享連結的 Web 原型。",
      "structure": [
        "Product vision",
        "Pages",
        "Style",
        "Interactions"
      ],
      "prompt": "Build a single-page \"AI Learning Progress Tracker\" web app.\n\n## Pages / sections\n1. Hero：標題 + 7-day learning path summary\n2. Progress cards：4 phases (Learn, Tools, Practice, Review) with % complete\n3. Daily log：textarea to save notes (localStorage)\n4. Footer CTA：Export notes as .txt\n\n## Style\n- Dark tech aesthetic, teal accent\n- Responsive, mobile-first\n- Clean sans-serif typography\n\n## Tech\n- React or vanilla — your choice\n- No backend; localStorage only\n- Deploy-ready structure",
      "tips": "Bolt 以英文描述頁面結構較穩；生成後迭代「bigger tap targets」「simpler colors」。"
    },
    {
      "id": "mj-product-shot",
      "title": "電商產品圖（英文提示詞）",
      "scenario": "產生白底/場景產品圖，用於詳情頁或廣告素材。",
      "structure": [
        "Subject",
        "Environment",
        "Lighting",
        "Style",
        "Parameters"
      ],
      "prompt": "minimalist product photo of wireless earbuds in charging case,\npure white seamless background, studio softbox lighting,\ncentered composition, subtle shadow beneath product,\nultra sharp commercial photography, 4k detail,\nclean negative space for text overlay --ar 4:5 --style raw --v 6\n\nNegative prompt: text, watermark, logo, blurry, deformed, extra objects, cluttered background, hands",
      "tips": "Midjourney 英文為主；順序：主體 → 環境 → 光 → 風格 → --ar/--v。文字排版需後期疊加。"
    },
    {
      "id": "dalle-article-cover",
      "title": "文章封面圖（自然語言）",
      "scenario": "在 ChatGPT 內用 DALL·E 產生部落格/ newsletter 封面，支援中文場景描述。",
      "structure": [
        "Subject",
        "Mood",
        "Composition",
        "Aspect ratio"
      ],
      "prompt": "請使用 DALL·E 產生一張文章封面圖：\n\n主題：職場人利用 AI 提升效率（抽象概念，不要出現具體品牌 Logo）\n畫面：一位專業人士在明亮現代辦公室使用筆記型電腦，螢幕發出柔和的藍綠色光暈，背景有隱約的神經網路線條圖案\n風格：扁平插畫 + 輕微 3D 質感，專業、樂觀、不卡通\n構圖：右側留白 30% 用於標題文字\n畫幅：橫版 16:9，適合公眾號頭圖",
      "tips": "DALL·E 理解中文場景好；說明留白位置避免主體擋標題區。"
    },
    {
      "id": "sd-ecommerce-white",
      "title": "白底商品圖（正負提示詞）",
      "scenario": "本地/WebUI 批次產生統一風格電商主圖。",
      "structure": [
        "Positive prompt",
        "Negative prompt",
        "Sampler settings"
      ],
      "prompt": "Positive:\n(product photography:1.3), smart thermos bottle, matte white finish,\nseamless white background, studio lighting, soft ground shadow,\ncentered, sharp focus, commercial catalog style, 8k uhd\n\nNegative:\nlowres, blurry, text, watermark, logo, bad anatomy, extra fingers,\ndeformed, jpeg artifacts, cluttered, colorful background, people\n\nSettings suggestion: Steps 28–35, CFG 7–8, Size 1024×1024 or 4:5",
      "tips": "SD 使用權重語法 (keyword:1.2)；固定 seed 可批次統一風格。"
    },
    {
      "id": "kling-product-video",
      "title": "豎屏產品展示短視頻",
      "scenario": "為抖音/小紅書產生 5–10 秒產品環繞鏡頭素材。",
      "structure": [
        "Shot type",
        "Subject action",
        "Lighting",
        "Technical"
      ],
      "prompt": "垂直螢幕 9:16，簡約白色桌面放置智慧保溫杯，\n緩慢環繞鏡頭（orbit shot），杯口有輕微蒸氣上升，\n柔和自然光，高級商業廣告質感，背景乾淨無文字，\n產品始終清晰不虛化，真實物理運動，5–8 秒",
      "tips": "可靈對「緩慢環繞」「商業廣告質感」反應好；複雜劇情拆成多段生成再剪輯。"
    },
    {
      "id": "runway-image-to-video",
      "title": "圖生影片：產品微動效",
      "scenario": "將靜態產品圖轉為 4 秒 Hero 動效，用於落地頁或廣告片頭。",
      "structure": [
        "Motion description",
        "Preserve subject",
        "Duration",
        "Quality"
      ],
      "prompt": "Slow cinematic push-in toward the product,\nsubtle parallax depth, product remains sharp and undistorted,\nsoft studio light with gentle shadow movement,\nno morphing or melting artifacts, commercial ad quality,\n4 seconds, seamless loop-friendly ending",
      "tips": "圖生影片宜小幅度運動；產品邊緣易變形時以「product remains sharp」約束。"
    },
    {
      "id": "suno-bgm",
      "title": "品牌宣傳背景音樂（純音樂）",
      "scenario": "為產品發布影片產生 30–60 秒無歌詞 BGM。",
      "structure": [
        "Genre",
        "Mood",
        "Instruments",
        "BPM",
        "Use case"
      ],
      "prompt": "Instrumental upbeat corporate technology track,\nmodern synth pads and light percussion, optimistic and clean,\nno vocals, suitable for AI product launch video,\n100–110 BPM, steady energy without dramatic drops,\n30–45 seconds",
      "tips": "Suno 明確「Instrumental + BPM + 場景」；生成 2 軌選節奏較穩的一首 Extend。"
    },
    {
      "id": "notion-meeting",
      "title": "會議錄音/筆記 → 結構化紀要",
      "scenario": "將散亂會議記錄整理為可同步到專案管理的紀要格式。",
      "structure": [
        "Input",
        "Output schema",
        "Owner assignment",
        "Rules"
      ],
      "prompt": "請將以下會議原始記錄整理為結構化紀要：\n\n# 輸出格式\n## 會議訊息\n- 主題、日期、與會者\n\n## 關鍵決議（編號清單）\n\n## 待辦事項表\n| 事項 | 負責人 | 截止日期 | 優先權 |\n\n## 未決問題\n\n## 下次會議議題建議\n\n# 規則\n- 不編造未討論內容\n- 無負責人的待辦事項標註「待指定」\n- 日期不明寫「待定」\n\n---\n[貼上會議記錄]",
      "tips": "Notion AI 適合二次整理；會中即時記關鍵字比事後補錄更準。"
    },
    {
      "id": "gamma-pitch",
      "title": "10 頁路演 PPT 大綱",
      "scenario": "輸入商業大綱，快速產生可簡報的投影片初稿。",
      "structure": [
        "Topic",
        "Audience",
        "Slide outline",
        "Visual style"
      ],
      "prompt": "生成 10 页中文路演 PPT：\n\n主题：AI 学习平台 BestWayToLearn.AI\n受众：企业培训负责人 / HR L&D\n\n頁結構：\n1. 封面  2. 痛点  3. 解决方案  4. 产品演示  5. 学习路径\n6. 客户案例  7. 商业模式  8. 差异化  9. 里程碑  10. 联系方式\n\n风格：深色科技风，每页 3–5 条要点，避免大段文字\n数据：可先用占位符 [X%] 标注需替换的真实数据",
      "tips": "Gamma 需要清晰頁結構；產生後替換佔位資料並插入產品截圖。"
    },
    {
      "id": "copilot-excel",
      "title": "Excel 資料分析與公式",
      "scenario": "在 Excel 內以 Copilot 分析銷售表並產生透視建議。",
      "structure": [
        "Data description",
        "Questions",
        "Output",
        "Formula"
      ],
      "prompt": "我有一張銷售資料表，欄位：日期、區域、SKU、數量、單價、金額。\n時間範圍：過去 12 個月。\n\n請完成：\n1. 月度銷售額趨勢概述\n2. 金額 Top 5 SKU 及佔比\n3. 找出銷售額異常下降的月份並分析可能原因（基於數據，不臆測）\n4. 建議 2 種圖表類型及軸定義\n5. 給出計算 YoY 環比的 Excel 公式範例\n\n若需要我選取資料區域，請說明需要包含哪些欄位。",
      "tips": "Copilot 在 Excel 內先勾選資料區再提問；敏感財務資料注意企業合規。"
    },
    {
      "id": "openclaw-cron-digest",
      "title": "Cron 定時產業簡報推送",
      "scenario": "工作日早晨自動匯總行業動態並推送到 Telegram/Slack。",
      "structure": [
        "Schedule",
        "Agent role",
        "Output spec",
        "Channel"
      ],
      "prompt": "openclaw cron create \"0 9 * * 1-5\" \\\n  --name \"Daily AI industry digest\" \\\n  --tz \"Asia/Shanghai\" \\\n  --session isolated \\\n  --message \"你是產業研究助理。總結過去 24 小時 AI 產業重要動態：\n\n1) 頭條 3 條（各 1 句 + 來源連結）\n2) 對開發者的影響\n3) 今日關注 2 個變數\n\n輸出中文，400 字以內。無可靠來源時寫「暫無重大更新」，禁止編造。\n引用必須可點選。 \" \\\n  --announce \\\n  --channel telegram \\\n  --to \"YOUR_CHANNEL_ID\"",
      "tips": "先 openclaw cron run 手動測試；message 裡寫清輸出結構與禁止編造。"
    },
    {
      "id": "coze-support-bot",
      "title": "客服 Bot 系統提示詞",
      "scenario": "在 Coze 創建產品 FAQ 機器人，統一語氣與升級策略。",
      "structure": [
        "Persona",
        "Knowledge scope",
        "Reply format",
        "Escalation"
      ],
      "prompt": "# 角色\n你是「BestWayToLearn.AI」官方學習助手，友善、專業、耐心。\n\n# 知識範圍\n僅回答：課程架構、學習路徑、帳號與進度、常見技術問題。\n不回答：投資建議、醫療法、與產品無關話題。\n\n# 回覆格式\n1. 先 1 句直接回答\n2. 步驟清單（若適用）\n3. 相關連結或「如需人工請回覆：轉人工」\n\n# 約束\n- 不確定時說「我不確定，建議聯繫 support@example.com」\n- 不編造功能或價格\n- 語氣簡潔，避免超過 200 字\n\n# 升級\n用戶連問 2 次「沒用」或涉及付款糾紛 → 提示轉人工工單",
      "tips": "Coze 中把 FAQ 文檔連接到知識庫；系統提示詞管邊界，知識庫管事實。"
    },
    {
      "id": "dify-rag-agent",
      "title": "企業知識庫 RAG 問答",
      "scenario": "建構基於內部文件的問答 Agent，答案必須帶有引用片段。",
      "structure": [
        "System prompt",
        "頁面截圖",
        "Citation format",
        "Refusal"
      ],
      "prompt": "# System\n你是企業內部知識庫助手。僅根據檢索到的文件片段回答，不依賴預訓練知識編造公司政策。\n\n# 回答規則\n1. 先給直接答案（2–4 句）\n2. 「依據」小節：列出引用文件名稱 + 相關段落摘要\n3. 若檢索結果不足以回答，回覆：「目前知識庫未找到相關規定，建議聯絡 [部門] 或提交工單。」\n\n# 格式\n- 使用 Markdown\n- 引用格式：[文檔名稱 §章節]\n- 涉及日期/數字必須與原文一致\n\n# 禁止\n- 推測未寫入知識庫的政策\n- 給出法律/合規的最終結論",
      "tips": "Dify 知識庫分段建議 500–800 字/區塊；測試集準備 20 個真實員工問題驗收。"
    },
    {
      "id": "perplexity-competitor",
      "title": "競品與市場一頁紙調查",
      "scenario": "快速取得帶有引用的競品對比，用於內部討論或選型會議。",
      "structure": [
        "Scope",
        "Comparison dimensions",
        "Output",
        "Source rules"
      ],
      "prompt": "研究 2026 年「AI 程式 IDE」市場，重點在於 Cursor、Windsurf、GitHub Copilot。\n\n請輸出中文一頁紙：\n1. 市場概況（2 段）\n2. 比較表：定位 | 定價 | 核心差異 | 目標用戶\n3. 3 個選型建議（依使用者類型）\n4. 所有關鍵結論附引用編號，附來源鏈接\n\n規則：定價以官網為準；無官方來源的資料標註「待核實」。",
      "tips": "Perplexity 優勢在引用；定價與功能仍要點進官網二次確認。"
    },
    {
      "id": "notebooklm-papers",
      "title": "多篇論文對比筆記",
      "scenario": "上傳 3 篇相關論文，產生對比表與閱讀順序建議。",
      "structure": [
        "Upload scope",
        "Comparison fields",
        "Recommendation",
        "Limits"
      ],
      "prompt": "（上傳 3 篇 PDF 後發送）\n\n請對比這三篇論文並輸出：\n\n## 對比表\n| 論文 | 研究問題 | 資料集 | 方法 | 主要結論 | 限制 |\n\n## 方法異同（300 字）\n\n## 新手閱讀順序建議\n說明先讀哪一篇、為什麼\n\n## 3 個可追問的研究問題\n\n規則：僅基於上傳文檔，不補充未出現的實驗結果。",
      "tips": "NotebookLM 只讀上傳內容；學術引用請回溯原文 DOI。"
    },
    {
      "id": "metaso-academic",
      "title": "學術模式文獻綜述起點",
      "scenario": "用學術搜尋模式快速定位領域核心論文與綜述入口。",
      "structure": [
        "Research question",
        "Time range",
        "Output",
        "Next steps"
      ],
      "prompt": "使用學術搜尋模式：\n\n研究問題：大語言模型在程式碼產生中的可靠性評估方法有哪些？\n時間範圍：2023–2026\n語言：中英文學術來源皆可\n\n請輸出：\n1. 該領域 5 篇高引用論文（標題、作者、年份、一句話貢獻）\n2. 2 篇綜述/研究論文推薦\n3. 3 個常用評估指標名稱及定義\n4. 建議的進一步檢索關鍵字（中英文）\n\n每條附可點擊來源。未找到則明確說明。",
      "tips": "秘塔學術模式適合中文使用者；重要論文建議去 Google Scholar 交叉驗證引用量。"
    },
    {
      "id": "gemini-lesson-plan",
      "title": "7 天 AI 學習計畫生成",
      "scenario": "根據個人時間與目標，產生可執行的一週學習路徑。",
      "structure": [
        "結構化 PR 審查評論，減少漏檢。",
        "Goal",
        "Constraints",
        "Output"
      ],
      "prompt": "洩漏權重顯示 MoE 架構進一步擴容，數學與代碼 benchmark 提昇明顯；官方尚未官宣，但 API 價格頁已出現「R2-preview」灰階入口。",
      "tips": "把「驗收標準」寫具體，避免 AI 輸出空泛任務清單。"
    },
    {
      "id": "grok-news-brief",
      "title": "X 平台 AI 熱帖速覽",
      "scenario": "快速總結 X 上 AI 領域今日討論熱點與爭議點。",
      "structure": [
        "Scope",
        "Time",
        "Output",
        "Neutrality"
      ],
      "prompt": "總結過去 24 小時 X 平台上與 AI/LLM/Agent 相關的熱門討論：\n\n1. 5 個最熱話題（各 2 句摘要）\n2. 2 個爭議觀點比較（正方/反方各 1 句）\n3. 1 個值得跟進的連結類型建議\n\n規則：標註不確定性；不編造具體點讚數；中文輸出。",
      "tips": "Grok 可存取即時 X 資料；發布前仍建議點開原文核對。"
    },
    {
      "id": "doubao-study-buddy",
      "title": "概念講解 + 小測驗",
      "scenario": "學習新概念時，先講解再出 3 題鞏固。",
      "structure": [
        "Concept",
        "Audience",
        "Teach then quiz",
        "Feedback"
      ],
      "prompt": "我要學習“RAG（檢索增強生成）”。\n\n請：\n1. 用類比向零基礎解釋（≤200 字）\n2. 給 1 個生活化例子\n3. 出 3 題選擇題（附答案與解析）\n4. 若我答錯，用更簡單語言再講一次\n\n語氣：耐心、中文、不堆砌術語。",
      "tips": "把錯誤回覆貼回去，讓豆包針對性補講薄弱點。"
    },
    {
      "id": "windsurf-cascade-refactor",
      "title": "Cascade 跨文件重構",
      "scenario": "在多檔案專案中統一重命名 API 並更新呼叫方。",
      "structure": [
        "Scope",
        "Plan first",
        "Safety",
        "Verification"
      ],
      "prompt": "請在目前倉庫將 `fetchUserProfile` 重新命名為 `getUserProfile`：\n\n1. 先列出會改動的文件清單與風險\n2. 再執行重新命名（含 import/export）\n3. 更新相關測試與類型定義\n4. 運行測試並報告結果\n\n約束：不改無關邏輯；每步說明 diff 範圍。",
      "tips": "Windsurf memory.md 可寫入「本專案 API 命名規範」避免重複解釋。"
    },
    {
      "id": "replit-fullstack",
      "title": "Replit Agent 全端 Todo 應用",
      "scenario": "從零生成前後端分離的 Todo 應用並部署。",
      "structure": [
        "Stack",
        "Features",
        "MCP（Model Context Protocol）是連接 AI 用戶端與外部工具的開放協定。用戶端透過 stdio / SSE 呼叫 Server 提供的工具，讓 Agent 能搜尋網頁、讀取檔案、查資料庫等。",
        "Deploy"
      ],
      "prompt": "用 Node.js + Express + SQLite 建立 Todo API，React 前端：\n\n功能：增刪改查、完成狀態、依日期篩選\nUI：簡潔深色，行動端友好\n\n交付：\n- 後端 REST API + 前端頁面\n- package.json 腳本說明\n- Replit 部署步驟\n- 中文註釋",
      "tips": "先讓 Agent 只產生 API，驗收後再產生前端，出錯面更小。"
    },
    {
      "id": "claude-code-terminal",
      "title": "終端排障：CI 失敗分析",
      "scenario": "貼上 CI 日誌，定位失敗原因並給予修復 PR 方案。",
      "structure": [
        "Log paste",
        "Hypothesis",
        "Fix plan",
        "Test"
      ],
      "prompt": "以下是 GitHub Actions 失敗日誌：\n\n```\n[Paste CI log]\n```\n\n請：\n1. 指出最可能的根因（依機率排序 3 條）\n2. 給予最小修復 diff 思路\n3. 建議本地復現指令\n4. 如需改測試，說明原因\n\n不要大範圍重構。",
      "tips": "日誌截取失敗步驟前後 80 行即可，過長反而乾擾判斷。"
    },
    {
      "id": "flux-product-photo",
      "title": "Flux 電商產品棚拍",
      "scenario": "產生白底產品圖，用於主圖或廣告素材初稿。",
      "structure": [
        "Subject",
        "Lighting",
        "Background",
        "Technical"
      ],
      "prompt": "professional product photography, wireless bluetooth earbuds in charging case, pure white seamless background, soft studio lighting, subtle ground shadow, centered composition, ultra.",
      "tips": "產品細節以實拍為準；AI 圖適合構圖與光影參考。"
    },
    {
      "id": "ideogram-poster-text",
      "title": "Ideogram 海報標題排版",
      "scenario": "產生含準確中文標題的活動海報。",
      "structure": [
        "Copy",
        "Layout",
        "Style",
        "Negative"
      ],
      "prompt": "event poster, title text exactly: \"AI 學習者大會 2026\", subtitle: \"7天實戰營\", modern tech conference style, teal and dark navy, bold sans-serif typography, clean layout, high readability, bold sans-serif typography, clean layout, high readability, notexttra read",
      "tips": "Ideogram 文字渲染較強；仍要檢查錯字與多餘字元。"
    },
    {
      "id": "chatgpt-image-restyle",
      "title": "ChatGPT 影像風格遷移",
      "scenario": "部署：BF16 需 2×80GB；AWQ 4bit 單卡 48GB 可跑 技術與產品團隊需要據此評估整合成本、權限變更與回滾方案，避免未經試點驗證就全量切換生產流量。",
      "structure": [
        "Upload",
        "Style target",
        "Keep identity",
        "Output"
      ],
      "prompt": "將上傳的照片轉換為扁平向量插畫風格：\n- 保留人物 recognizable 特徵\n- 配色：青+深藍\n- 背景簡化純色\n- 適合用作網站頭像\n- 不要添加文字",
      "tips": "分步：先「簡化背景」再「改插畫風格」比一次到位更穩。"
    },
    {
      "id": "leonardo-ip-series",
      "title": "Leonardo 角色系列圖",
      "scenario": "固定吉祥物 IP，大量產生課程場景插圖。",
      "structure": [
        "Reference",
        "Scenes",
        "Palette",
        "Consistency"
      ],
      "prompt": "協作場景：適合營運看板、招募管道、課程排程等結構化協作",
      "tips": "上傳 4 張參考圖後開啟 Character Reference，一致性明顯提升。"
    },
    {
      "id": "capcut-script-to-video",
      "title": "CapCut AI 腳本分鏡",
      "scenario": "把教學腳本拆成分鏡與字幕時間軸。",
      "structure": [
        "Script",
        "Shot list",
        "Duration",
        "Captions"
      ],
      "prompt": "將以下 60 秒教學腳本拆成 CapCut 分鏡表：\n\n| 鏡號 | 畫面描述 | 旁白字幕 | 長度(秒) |\n\n腳本：\n[Paste script]\n\n需求：每鏡 3-8 秒；口語化字幕；標註 B-roll 建議。",
      "tips": "開放 Agent Skills 標準（agentskills.io）的官方規範與文檔，各平台 Skill 均遵循 SKILL.md 格式。"
    },
    {
      "id": "pika-extend-clip",
      "title": "Pika 影片延長與循環",
      "scenario": "將 3 秒素材延長為 8 秒循環背景影片。",
      "structure": [
        "Source",
        "Motion",
        "Loop",
        "Quality"
      ],
      "prompt": "extend video smoothly, subtle camera push-in, keep subject centered, seamless loop for website hero background, cinematic lighting, no flicker, 8 seconds",
      "tips": "延長幅度不宜過大；循環背景選運動幅度小的鏡頭。"
    },
    {
      "id": "elevenlabs-voiceover",
      "title": "ElevenLabs 教學旁白",
      "scenario": "將教學文稿轉為自然中文旁白音訊。",
      "structure": [
        "Voice persona",
        "Pacing",
        "Pronunciation",
        "Output"
      ],
      "prompt": "HeyGen 數位人課程開場",
      "tips": "專業術語可附「讀音提示」行，減少 TTS 讀錯。"
    },
    {
      "id": "heygen-avatar-intro",
      "title": "HeyGen 數位人課程開場",
      "scenario": "產生 30 秒數位人出鏡的課程介紹影片。",
      "structure": [
        "Avatar",
        "Script",
        "Tone",
        "CTA"
      ],
      "prompt": "Script (30s, Mandarin):\n\n大家好，歡迎來到《7天 AI 工具實戰營》。\n我是你的學習嚮導。\n本週你將學會：用 ChatGPT 寫文案、用 Cursor 做網頁、用自動化省時間。\n現在開始第一課－準備好了嗎？\n\nTone: friendly, confident, slight smile. No sales hype.",
      "tips": "腳本控制在 80–100 字/30 秒；預覽後微調停頓標記。"
    },
    {
      "id": "feishu-competitor-table",
      "title": "飛書 AI 競技對比表",
      "scenario": "從 bullet 要點產生可分享的競品對比多維表格。",
      "structure": [
        "Bullets",
        "Columns",
        "Unknown handling",
        "Date"
      ],
      "prompt": "根據以下要點產生競品對比表（Markdown 表格）：\n\n維度：功能 | 價格 | 中文支援 | 部署方式 | 備註\n競賽：Cursor、Windsurf、Copilot\n\n要點：\n[Paste bullets]\n\n缺失資訊填「待核實」；表頭註明「截至 2026-07」",
      "tips": "生成後貼到飛書多維表格，方便團隊協同更新。"
    },
    {
      "id": "slack-standup",
      "title": "Slack AI 日報潤飾",
      "scenario": "把粗糙 bullet 整理成團隊 Standup 格式訊息。",
      "structure": [
        "Raw notes",
        "Format",
        "Blockers",
        "Tone"
      ],
      "prompt": "將以下工作記錄整理為 Slack Standup 訊息（中文）：\n\n格式：\n✅ 昨日完成\n🎯 今日計劃\n🚧 阻塞/需協助\n\n原始記錄：\n[Paste notes]\n\n語氣：簡潔、可掃描；不超過 150 字。",
      "tips": "在 Slack AI 側邊欄貼上；阻塞項記得 @ 相關負責人。"
    },
    {
      "id": "google-docs-gemini",
      "title": "Google Docs Gemini 會議紀要",
      "scenario": "從會議要點產生正式紀要郵件附件版本。",
      "structure": [
        "Attendees",
        "固定常用問題為指令",
        "Decisions",
        "Actions"
      ],
      "prompt": "根據以下會議要點產生正式紀要：\n\n參加：產品、工程、運營\n\n要點：\n[Paste notes]\n\n輸出：\n1. 會議資訊（時間/主題）\n2. 討論摘要（3-5 bullet）\n3. 決議事項\n4. 行動項表（負責人|任務|DDL）\n\n不編造未討論內容。",
      "tips": "Gemini in Docs 可直接選取要點生成；行動項目務必指派到人。"
    },
    {
      "id": "linear-backlog-groom",
      "title": "Linear AI 整理 Backlog",
      "scenario": "將雜亂需求清單整理為可排期的 Issue。",
      "structure": [
        "Input list",
        "Dedup",
        "Acceptance",
        "Priority"
      ],
      "prompt": "整理以下需求為 Linear Issue 草稿（JSON 陣列）：\n\n字段：title, description, acceptanceCriteria[], priority(P0-2), labels[]\n\n需求清單：\n[Paste list]\n\n規則：合併重複；描述含使用者故事；驗收標準可測試。",
      "tips": "導入前人工過一遍 P0 是否過多，避免 Sprint 超載。"
    },
    {
      "id": "make-rss-slack",
      "title": "Make：RSS→摘要→Slack",
      "scenario": "建立自動化管線，新文章自動推送頻道摘要。",
      "structure": [
        "Trigger",
        "Filter",
        "Summarize",
        "Notify"
      ],
      "prompt": "你是自動化架構師。設計 Make 場景：\n\nTrigger: RSS 新條目\nSteps: 去重 → OpenAI 80字中文摘要 → Slack #ai-news 發帖\n\n請輸出：\n1. 模組清單\n2. 各模組關鍵字段映射\n3. 測試步驟\n4. 常見失敗與檢驗",
      "tips": "先用 1 個 RSS 來源試跑；OpenAI 模組加上「附原文連結」約束。"
    },
    {
      "id": "n8n-release-notes",
      "title": "n8n 監聽 Release 發推文",
      "scenario": "GitHub Release 觸發，產生中文更新貼文草稿。",
      "structure": [
        "Trigger",
        "Transform",
        "Draft",
        "Review gate"
      ],
      "prompt": "設計 n8n 工作流程：GitHub Release → 擷取 changelog → GPT 產生中文推文（≤280字）→ 寫入 Notion 待審\n\n輸出節點配置說明 + 提示字範本：\n「根據 changelog 寫更新帖：標題+3要點+鏈接，不誇大」",
      "tips": "發文前加人工審核節點，避免自動發錯版本號。"
    },
    {
      "id": "cursor-mcp-issue",
      "title": "Cursor + GitHub MCP 修 Issue",
      "scenario": "在 Agent 對話中查詢 Issue、改代碼、開 PR。",
      "structure": [
        "MCP context",
        "Issue ID",
        "Fix scope",
        "PR template"
      ],
      "prompt": "使用 GitHub MCP：\n1. 讀取 Issue #128 描述與評論\n2. 分析根因並列出變更文件\n3. 建立 fix/128 分支並提交最小修復\n4. 開啟 PR，內文含：問題|方案|測試|關閉 #128\n\n不要修改無關文件。",
      "tips": "先在 mcp.json 配好 GitHub token；PR 前本地跑測試。"
    },
    {
      "id": "zapier-lead-score",
      "title": "Zapier AI 線索評分",
      "scenario": "表單新線索自動評分並路由到不同 Slack 頻道。",
      "structure": [
        "Form fields",
        "Score rubric",
        "Routing",
        "Human review"
      ],
      "prompt": "Zapier Central 提示詞：\n\n根據表單欄位為線索評分 1-5：\n- budget, timeline, company_size, use_case\n\n輸出 JSON: {score, reason, route: \"sales\"|\"nurture\"}\n\n規則：reason ≤50字；不確定時 score=3。",
      "tips": "高分線索複製到 CRM 前仍建議銷售人工確認。"
    },
    {
      "id": "gemini-deep-research-prompt",
      "title": "Gemini Deep Research 產業掃描",
      "scenario": "自動瀏覽多來源，輸出帶引用的產業趨勢報告。",
      "structure": [
        "Question",
        "Scope",
        "Output sections",
        "Citation"
      ],
      "prompt": "研究主题：2026 年企业采用 AI Agent 的 5 大趋势\n\n范围：2025-2026 年公开报道、论文、厂商博客\n\n輸出：\n1. 執行摘要（200字）\n2. 五条趋势（每条：描述|证据|代表案例）\n3. 對中小企業的 3 項行動建議\n4. 參考文獻列表（標題+連結+日期）\n\n禁止編造來源。",
      "tips": "Deep Research 需 5–15 分鐘；發布前點開引用核對。"
    },
    {
      "id": "chatgpt-browse-factcheck",
      "title": "ChatGPT 瀏覽模式事實查核",
      "scenario": "核查一篇文章中的關鍵數據與引用是否準確。",
      "structure": [
        "Claims list",
        "Verify each",
        "Verdict",
        "Sources"
      ],
      "prompt": "請瀏覽網頁並核查以下陳述（逐條）：\n\n[Paste 3-5 claims with URLs if any]\n\n每條輸出：\n- 陳述原文\n- 核查結論：✅準確 / ⚠️部分準確 / ❌不準確 / ❓無法驗證\n- 依據來源鏈接\n- 修正表述（若需要）",
      "tips": "一次核查不超過 5 條；優先找一手來源（官網、論文）。"
    },
    {
      "id": "metaso-industry-scan",
      "title": "秘塔產業速覽（中文來源優先）",
      "scenario": "快速了解一個陌生產業的產業鏈與關鍵玩家。",
      "structure": [
        "Industry",
        "Questions",
        "Output",
        "Source type"
      ],
      "prompt": "產業：AI 學習平台 / 線上教育（AI 方向）\n\n請用中文來源回答：\n1. 產業鏈上中下游各 3 類玩家\n2. 國內 vs 海外差異（各 2 點）\n3. 2026 年 3 個商業模式趨勢\n4. 新進入者 3 個機會切口\n\n附來源連結；不確定處標註。",
      "tips": "秘塔適合中文產業報告；關鍵數字回原文核對。"
    },
    {
      "id": "perplexity-source-audit",
      "title": "Perplexity 引用品質審計",
      "scenario": "評估調查回答中引用是否權威、是否過時。",
      "structure": [
        "Answer paste",
        "Audit dimensions",
        "Replace weak",
        "Summary"
      ],
      "prompt": "審計以下 Perplexity 調查回答的引用品質：\n\n[Paste answer]\n\n按每條引用評估：\n- 權威性（高/中/低）\n- 時效性（年份）\n- 是否與結論直接相關\n\n輸出：\n1. 應刪除的弱引用\n2. 建議補充的搜尋關鍵字\n3. 修訂後結論（若有變化）",
      "tips": "定價類結論務必以官網目前頁為準，二手來源易過時。"
    },
    {
      "id": "claude-skill-author",
      "title": "Claude 起草 Agent Skill（SKILL.md）",
      "scenario": "把團隊 SOP 轉化為符合規範的 SKILL.md 檔案。",
      "structure": [
        "SOP input",
        "SKILL.md schema",
        "Examples",
        "Validation"
      ],
      "prompt": "將以下團隊 SOP 轉為 Agent Skills 規範 SKILL.md：\n\nSOP：\n[Paste SOP]\n\n輸出完整 SKILL.md，含：\n---\nname:\ndescription:\n---\n\n# 步驟\n# 範例輸入/輸出\n# 約束與失敗處理\n\n遵循 agentskills.io 格式；description 寫清何時觸發。",
      "tips": "用 `npx skills init` 產生骨架後，讓 Claude 填滿內容更有效率。"
    }
  ]
});
})();
