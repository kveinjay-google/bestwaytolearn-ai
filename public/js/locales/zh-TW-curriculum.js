/* ZH-TW overlays — curriculum */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('zh-TW', {
    aiOverview: [
        {
          id: "what",
          icon: "🌐",
          color: "var(--accent-teal-dim)",
          tag: "01 · 认知起点",
          navLabel: "什麼是 AI",
          title: "什麼是 AI？",
          lead: "人工智慧（AI, Artificial Intelligence）是讓機器模擬人類智慧行為的技術總稱——從資料中識別規律、理解語言、做出判斷，乃至生成文字、影象、程式碼與音影片內容。它不是單一產品，而是一整套方法與工程系統的集合。",
          intro: "今天新聞和社交裡說的「AI」，大多數時候指的是大語言模型（LLM）和生成式 AI（GenAI）：你輸入一段自然語言，它輸出回答、草稿或作品。理解 AI 的第一步，是分清「技術概念」「產品形態」和「使用方式」這三件事。",
          subsections: [
            {
              title: "一個 30 秒通俗類比",
              text: "可以把現代 AI 想象成「讀過海量資料、反應極快的實習助理」：它擅長整理、起草、聯想和舉一反三，但並不天然擁有你的業務上下文，也不能保證每句話都事實正確。你負責定目標、給材料、驗結果；它負責提速與擴充套件思路。",
              items: [
                "你提供：任務目標、背景材料、格式要求、質量標準",
                "AI 提供：初稿、備選方案、解釋說明、結構化拆解",
                "你驗收：事實核對、邏輯判斷、最終決策與對外發布"
              ]
            },
            {
              title: "三次發展浪潮（知道脈絡即可）",
              text: "AI 並非一夜爆紅，而是經歷了多次正規化切換。瞭解歷史有助於理解「為什麼今天的 AI 以對話和生成為主」。",
              items: [
                "1956–1980s 符號主義：用規則和知識庫推理，可解釋但難以覆蓋複雜現實",
                "1990s–2010s 統計學習：從資料中自動學規律，推薦系統、風控、語音識別崛起",
                "2012 至今 深度學習：神經網路 + 大規模算力與資料，催生 CV、語音、LLM 與 GenAI",
                "2022 起 生成式 AI 大眾化：ChatGPT 讓「自然語言驅動產出」成為預設互動方式"
              ]
            }
          ],
          points: [
            {
              label: "日常所說的 AI",
              text: "多指基於大資料訓練的機器學習系統，尤其是 LLM（如 GPT、Claude、通義千問）和影象/影片生成模型。它們透過「預測下一個詞元/畫素」來生成看似理解語義的輸出。"
            },
            {
              label: "層級關係",
              text: "人工智慧（AI）⊃ 機器學習（ML）⊃ 深度學習（DL）⊃ 大語言模型（LLM）。越往右越專精，但依賴的資料、算力與工程能力也越高。"
            },
            {
              label: "訓練 vs 推理",
              text: "訓練是「讀書備考」——用海量資料調整模型引數，成本高、週期長；推理是「上考場答題」——你每次提問時模型實時生成結果，這也是日常使用的階段。"
            },
            {
              label: "專用 AI（ANI）vs 通用 AI（AGI）",
              text: "當前所有商用系統都是專用 AI：在訓練分佈內表現強大，跨領域遷移有限。AGI（能像人一樣廣泛推理與行動）仍無公認時間表，不宜把現有產品當作全知代理。"
            },
            {
              label: "判別式 vs 生成式",
              text: "判別式 AI 做分類與判斷（垃圾郵件識別、醫學影像篩查、風控評分）；生成式 AI 做內容創作（寫報告、畫圖、寫程式碼、配音）。今天大眾熱度主要在生成式。"
            },
            {
              label: "多模態",
              text: "新一代模型可同時處理文字、影象、音訊、影片甚至程式碼檔案。這意味著你可以「發一張截圖讓 AI 解釋」「上傳 PDF 讓它總結」「用語音直接對話」。"
            },
            {
              label: "幻覺（Hallucination）",
              text: "AI 可能自信地編造事實、引用或資料——因為它最佳化的是「流暢合理」而非「必然正確」。涉及數字、法規、醫療、合同的場景必須人工核驗。"
            },
            {
              label: "人類始終在場",
              text: "可靠落地模式是「AI 起草 + 人稽核」：AI 負責速度與覆蓋，人負責真實性、合規性與最終責任。"
            }
          ],
          note: "1956 年達特茅斯會議首次提出「人工智慧」。從「寫規則」到「學資料」再到「生成內容」，AI 的能力邊界在持續擴充套件，但核心沒變：它是增強人類能力的工具，而不是自動承擔後果的主體。學完本節，你應能向他人解釋：AI 是什麼、今天常說的 AI 指什麼、以及為什麼不能盲信每一次輸出。"
        },
        {
          id: "capabilities",
          icon: "⚡",
          color: "var(--accent-amber-dim)",
          tag: "02 · 能力地图",
          navLabel: "能幹什麼",
          title: "AI 能幹什麼？",
          lead: "今天的 AI 已能覆蓋大量「知識型 + 創意型 + 流程型」工作：從寫一封郵件到分析一份合同，從生成海報到自動整理日報。價值不在於替代你，而在於把「從 0 到 60 分」的耗時大幅壓縮，讓你更快進入判斷與打磨階段。",
          intro: "下面按 8 大能力域展開。每一域都包含：能做什麼、典型場景、以及怎樣與 AI 協作更高效。記住一句話——AI 給草案，你給標準；AI 擴思路，你做決策。",
          capabilities: [
            {
              image: "assets/capabilities/cap-writing.jpg",
              title: "寫作與溝通",
              desc: "把模糊想法變成可傳送、可彙報、可釋出的文字內容。",
              detail: "適合處理結構化表達：郵件、週報、方案、演講稿、產品介紹、社媒文案、多語言翻譯與語氣潤色。AI 特別擅長「先搭骨架、再填血肉」。",
              examples: [
                "根據 3 條要點擴寫成 500 字週報，並突出資料與風險",
                "把技術文件改寫成客戶能讀懂的版本（保留關鍵資訊）",
                "同一內容生成「正式版 / 口語版 / 英文版」三個語氣變體",
                "會議紀要：從速記整理決議、待辦與負責人"
              ],
              tip: "給出受眾、篇幅、語氣、必含資訊四項，輸出質量會顯著提升。"
            },
            {
              image: "assets/capabilities/cap-coding.jpg",
              title: "程式設計與除錯",
              desc: "加速寫程式碼、讀程式碼、改程式碼的全流程。",
              detail: "從單函式補全到跨檔案重構，AI 可解釋報錯、生成測試、寫指令碼處理資料、把需求轉成可執行原型。對非程式設計師，也能用自然語言生成網頁、小工具與自動化指令碼。",
              examples: [
                "描述需求生成 HTML/JS 小工具，並在瀏覽器直接驗證",
                "貼上報錯日誌，定位可能原因並給出修復補丁",
                "為已有函式補全單元測試與邊界用例",
                "將重複性資料處理寫成 Python 指令碼並加中文註釋"
              ],
              tip: "提供專案上下文、期望輸入輸出、技術棧約束；改程式碼時要求「說明改了什麼、如何驗證」。"
            },
            {
              image: "assets/capabilities/cap-design.jpg",
              title: "影象與設計",
              desc: "快速產出視覺草案、風格探索與創意素材。",
              detail: "透過文字描述生成插畫、海報、產品氛圍圖、Logo 方向稿、UI 概念圖。適合頭腦風暴和早期視覺定調，而非替代精細品牌系統。",
              examples: [
                "為課程封面生成 3 種風格草案（科技感 / 雜誌感 / 極簡）",
                "根據產品賣點生成電商主圖創意與構圖參考",
                "把手繪草圖描述轉成高質量概念插畫",
                "批次生成社媒配圖並統一色調與畫幅"
              ],
              tip: "寫清主體、構圖、光線、風格參考與畫幅比例；迭代時說明「保留什麼、改什麼」。"
            },
            {
              image: "assets/capabilities/cap-av.jpg",
              title: "音影片創作",
              desc: "從文字到可釋出的音訊、配樂與影片片段。",
              detail: "支援文生影片、圖生影片、AI 配音、聲音克隆、音樂生成、字幕翻譯與簡單剪輯指令。適合短影片口播、課程片頭、廣告創意樣片。",
              examples: [
                "將文章摘要轉成 60 秒口播稿並生成配音",
                "克隆個人聲音用於課程旁白（需合法授權）",
                "輸入場景描述生成產品氛圍短影片樣片",
                "為現有影片自動生成中英字幕與標題"
              ],
              tip: "先鎖定時長、畫幅、節奏與受眾；配音注意情感、停頓與發音準確性。"
            },
            {
              image: "assets/capabilities/cap-analytics.jpg",
              title: "分析與研究",
              desc: "把資訊洪流變成可讀洞察與可行動結論。",
              detail: "可輔助完成競品掃描、行業趨勢歸納、使用者反饋歸類、Excel 資料處理思路、調研問卷分析框架。強在「結構化整理與假設生成」，弱在未經核實的精確統計。",
              examples: [
                "上傳 20 條使用者反饋，歸納痛點優先順序與改進建議",
                "給定 3 家競品，輸出功能對比表與差異化機會",
                "將銷售資料描述轉成分析框架與視覺化建議",
                "閱讀長報告後提取風險點、關鍵資料與待核實項"
              ],
              tip: "提供原始材料、分析目標、決策場景；要求標註「確定 / 推測 / 待核實」。"
            },
            {
              image: "assets/capabilities/cap-agent.jpg",
              title: "自動化與 Agent",
              desc: "讓 AI 按規則代你執行多步驟任務，而非只答一句話。",
              detail: "Agent 能呼叫搜尋、讀寫檔案、執行指令碼、發通知、按 Cron 定時執行。適合「每天固定蒐集資訊」「監控資料變化」「把多工具串成工作流」。",
              examples: [
                "每個工作日 8:30 自動彙總行業資訊並推送摘要",
                "監控競品官網變化，有更新時生成對比說明",
                "把郵件 + 表格 + 文件串成一條審批准備流程",
                "根據模板自動生成周報並填入當日資料"
              ],
              tip: "先在小範圍試跑，明確失敗重試、日誌記錄與人工複核節點。"
            },
            {
              image: "assets/capabilities/cap-learning.jpg",
              title: "學習與輔導",
              desc: "按你的節奏講解概念、出題檢驗、規劃學習路徑。",
              detail: "可用費曼學習法、蘇格拉底提問、分層講解、錯題回顧等方式，把難懂概念拆成可消化步驟。適合備考、學新技能、快速入門陌生領域。",
              examples: [
                "用生活類比解釋 Transformer，再出 3 道自檢題",
                "根據你的基礎定製 7 天 Python 入門計劃",
                "把一篇論文翻譯成「先懂大意、再懂方法、最後懂侷限」三層",
                "針對錯題生成同類變式題鞏固薄弱點"
              ],
              tip: "告訴 AI 你已知什麼、想達到什麼、偏好什麼學習方式（例子/圖表/練習）。"
            },
            {
              image: "assets/capabilities/cap-search.jpg",
              title: "搜尋與問答",
              desc: "比傳統搜尋更快獲得「帶結構的答案」，而非連結列表。",
              detail: "AI 搜尋可綜合多來源給出摘要、對比與引用線索；文件問答可針對你上傳的 PDF/筆記精準檢索。適合調研、學習、寫作前的資訊收集。",
              examples: [
                "調研某技術方案時，輸出優缺點與適用場景對比",
                "上傳合同/論文，針對具體條款或段落提問",
                "把 5 篇行業文章整合成 1 頁 executive summary",
                "快速核查一個說法的常見出處與爭議點"
              ],
              tip: "要求給出處與引用；關鍵結論至少交叉核實兩個獨立來源。"
            }
          ],
          collabTips: {
            title: "高效協作的四條原則",
            items: [
              {
                label: "給足上下文",
                text: "背景、目標、受眾、約束、反例——資訊越具體，輸出越可用。"
              },
              {
                label: "分步而非一把梭",
                text: "複雜任務拆成「大綱 → 初稿 → 修訂 → 終稿」，每步驗收後再繼續。"
              },
              {
                label: "要格式與標準",
                text: "明確字數、結構、語氣、必含欄位，避免泛泛而談。"
              },
              {
                label: "人做最終裁判",
                text: "事實、數字、合規、對外發布前必須人工確認。"
              }
            ]
          },
          boundaries: {
            title: "目前仍不擅長或需慎用的場景",
            items: [
              "高精度實時資料（股價秒級、未公開內部資料）——需接權威資料來源",
              "複雜數學推導與嚴謹證明——可能出錯，關鍵步驟要驗算",
              "法律/醫療/金融的最終專業判斷——AI 只能輔助，不能替代持證專業人士",
              "涉及隱私、版權、肖像權的生成與釋出——需遵守法規與平臺政策",
              "長期記憶你的所有私人資訊——預設會話外不儲存，需自建知識庫或工作流"
            ]
          },
          note: "AI 最強項是「有模式可循、可快速起草、可批次變體」的任務；最弱項是「事實必然正確、承擔法律責任、理解你未說出口的隱性約束」。把它當加速器，而不是自動駕駛。下一節去看具體工具選型。"
        },
        {
          id: "tools",
          icon: "🧰",
          color: "rgba(167, 139, 250, 0.15)",
          tag: "03 · 工具版图",
          navLabel: "有哪些工具",
          title: "市面上有哪些 AI 工具？",
          lead: "沒有「最好」的 AI，只有「最合適」的。以下是 2026 年主流工具的分類版圖——本站「工具掌握」模組有更詳細的 43 款介紹。",
          toolGroups: [
            {
              category: "对话助手",
              emoji: "💬",
              tools: "ChatGPT、Claude、Gemini、通義千問、DeepSeek、Kimi、豆包、Grok",
              use: "日常問答、寫作、分析、程式設計"
            },
            {
              category: "编程开发",
              emoji: "👨‍💻",
              tools: "Cursor、Claude Code、Codex CLI、Grok Build、Copilot、Gemini CLI、Aider、Cline、Continue、Zcode、Windsurf、Bolt.new、Amazon Q Developer",
              use: "終端 Agent、IDE 補全、Git 結對程式設計、一句話建站"
            },
            {
              category: "图像创作",
              emoji: "🎨",
              tools: "Midjourney、DALL·E 3、Stable Diffusion、Flux",
              use: "插畫、設計、視覺創意"
            },
            {
              category: "视频音频",
              emoji: "🎵",
              tools: "Runway、Sora、可靈 AI、Suno、ElevenLabs、Fish Audio",
              use: "影片生成、音樂、配音與聲音克隆"
            },
            {
              category: "办公效率",
              emoji: "📋",
              tools: "Microsoft Copilot、Notion AI、Gamma",
              use: "文件、PPT、會議紀要、協作"
            },
            {
              category: "Agent 自动化",
              emoji: "🦞",
              tools: "OpenClaw、Dify、釦子 Coze、n8n、Manus",
              use: "定時任務、工作流編排、Bot 搭建、自主執行任務"
            },
            {
              category: "搜索研究",
              emoji: "🔎",
              tools: "Perplexity、秘塔 AI 搜尋、NotebookLM",
              use: "調研、文獻分析、事實核查"
            }
          ],
          note: "新手建議從一款對話 AI（ChatGPT 或通義千問）+ 一個你工作場景最相關的專用工具開始，不要一次裝太多。"
        },
        {
          id: "impact",
          icon: "🏙️",
          color: "rgba(251, 113, 133, 0.12)",
          tag: "04 · 现实影响",
          navLabel: "重要領域",
          title: "AI 已在哪些領域發揮重要作用？",
          lead: "AI 不再是實驗室概念，它正在重塑多個行業的生產方式和使用者體驗。",
          fields: [
            {
              icon: "🏥",
              name: "醫療健康",
              cases: "醫學影像輔助診斷、藥物分子篩選、病歷摘要、健康問答機器人"
            },
            {
              icon: "🎓",
              name: "教育與科研",
              cases: "個性化輔導、論文綜述、實驗資料分析、科研寫作輔助"
            },
            {
              icon: "💰",
              name: "金融與商業",
              cases: "風控反欺詐、智慧客服、市場研報生成、投研資訊聚合"
            },
            {
              icon: "🛒",
              name: "零售與電商",
              cases: "推薦系統、智慧客服、商品描述生成、視覺搜尋"
            },
            {
              icon: "🏭",
              name: "製造與工業",
              cases: "質量檢測、預測性維護、供應鏈最佳化、工業機器人"
            },
            {
              icon: "🎬",
              name: "內容與傳媒",
              cases: "文案創作、影片剪輯、虛擬主播、多語言本地化"
            },
            {
              icon: "⚖️",
              name: "法律與政務",
              cases: "合同審閱、法規檢索、政務問答、公文輔助起草"
            },
            {
              icon: "🚗",
              name: "交通與出行",
              cases: "輔助駕駛、路徑規劃、自動駕駛研發、交通流量預測"
            }
          ],
          note: "這些應用背後大多是「專用 AI + 行業資料 + 人類稽核」的組合，而非 AI 獨立決策。"
        },
        {
          id: "future",
          icon: "🔭",
          color: "var(--accent-teal-dim)",
          tag: "05 · 展望未来",
          navLabel: "未來展望",
          title: "AI 將如何發展，如何改變我們的生活？",
          lead: "技術演進充滿不確定性，但以下幾個方向正在清晰地影響個人與社會。",
          timeline: [
            {
              period: "當下（2024–2026）",
              items: [
                "大模型成為「預設介面」——對話式 AI 融入搜尋、辦公、程式設計和創作",
                "多模態成熟——同一模型能看圖、聽音、生成圖文影片",
                "AI Agent 興起——從「回答問題」走向「自主執行任務」"
              ]
            },
            {
              period: "近期（3–5 年）",
              items: [
                "個人 AI 助理普及——記住你的偏好、日程、專案，主動提供幫助",
                "行業 AI 深度嵌入——教育、醫療、法律等有專屬模型與工作流",
                "人機協作成為標配——不會用 AI 的職場競爭力可能顯著下降"
              ]
            },
            {
              period: "更遠期（仍在探索）",
              items: [
                "通用人工智慧（AGI）——能否、何時實現仍無定論",
                "具身智慧（Embodied AI）——AI 進入機器人，與物理世界互動",
                "社會規則重構——就業結構、教育體系、版權與隱私法規將持續演變"
              ]
            }
          ],
          lifeChanges: [
            {
              icon: "🏠",
              title: "日常生活",
              text: "購物推薦更精準、智慧家居更懂你、語言障礙大幅縮小"
            },
            {
              icon: "💼",
              title: "工作方式",
              text: "重複勞動自動化，人更多做創意、決策、關係和審美判斷"
            },
            {
              icon: "🧠",
              title: "學習與成長",
              text: "人人都有「24 小時線上導師」，但批判性思維比以往更重要"
            },
            {
              icon: "🌍",
              title: "社會層面",
              text: "資訊獲取更平等，同時也面臨虛假資訊、深度偽造等新挑戰"
            }
          ],
          note: "面對 AI 時代，最重要的能力不是「會用某個工具」，而是：提出問題、判斷質量、持續學習、保持人文判斷力。"
        }
      ],
      fundamentals: [
        {
          icon: "🧠",
          color: "var(--accent-teal-dim)",
          title: "人工智慧",
          abbr: "AI",
          fullEn: "Artificial Intelligence",
          content: "\n      <p><strong>人工智慧（AI, Artificial Intelligence）</strong>是讓機器模擬人類智慧行為的技術集合，涵蓋學習、推理、感知、語言理解、規劃與創造。1956 年達特茅斯會議首次提出這一概念，歷經符號主義、統計學習、深度學習三次浪潮。</p>\n      <p>AI 不是單一技術，而是包含 <strong>ML（機器學習）</strong>、<strong>DL（深度學習）</strong>、<strong>NLP（自然語言處理）</strong>、<strong>CV（計算機視覺）</strong>、機器人等的龐大體系。我們日常接觸的 ChatGPT、自動駕駛、人臉識別都屬於 AI 應用。</p>\n      <p><strong>AGI（Artificial General Intelligence，通用人工智慧）</strong>：能像人類一樣處理任意智力任務的 AI，尚未實現，是當前研究的長期目標。</p>\n      <div class=\"analogy\"><strong>通俗類比：</strong>AI 是「智慧」這個大概念，就像「交通工具」——汽車、火車、飛機都是其中一種具體形式。</div>\n      <ul class=\"key-points\"><li>日常所說的 AI ≈ 基於資料的機器學習系統</li><li>AI ⊃ ML ⊃ DL，從左到右範圍依次縮小</li><li>判別式 AI 做判斷，生成式 AI 做創造</li></ul>\n    "
        },
        {
          icon: "📊",
          color: "var(--accent-amber-dim)",
          title: "機器學習",
          abbr: "ML",
          fullEn: "Machine Learning",
          content: "\n      <p><strong>機器學習（ML, Machine Learning）</strong>是 AI 的核心子領域：讓計算機從資料中自動發現規律，而非人類逐條編寫 if-else 規則。標準流程為：收集資料 → 特徵工程 → 訓練模型 → 評估驗證 → 部署推理。</p>\n      <p><strong>三種主要正規化：</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>監督學習（Supervised Learning）</strong>：有標註資料，學習輸入→輸出對映。用於分類（垃圾郵件檢測）、迴歸（房價預測）。</li>\n        <li><strong>無監督學習（Unsupervised Learning）</strong>：無標註，發現資料結構。用於聚類（使用者分群）、降維（資料壓縮）。</li>\n        <li><strong>強化學習（RL, Reinforcement Learning）</strong>：透過獎懲訊號學習策略。用於遊戲 AI（AlphaGo）、機器人控制。</li>\n      </ul>\n      <div class=\"analogy\"><strong>通俗類比：</strong>傳統程式設計是「老師給標準答案步驟」；機器學習是「給學生大量習題，學生自己總結解題方法」。</div>\n    "
        },
        {
          icon: "🔬",
          color: "rgba(167, 139, 250, 0.15)",
          title: "深度學習",
          abbr: "DL",
          fullEn: "Deep Learning",
          content: "\n      <p><strong>深度學習（DL, Deep Learning）</strong>是機器學習的一個分支，使用多層神經網路（Neural Network）自動從原始資料中提取層次化特徵。層數越多，能學到的抽象概念越高階。</p>\n      <p>2012 年 <strong>AlexNet</strong> 在 ImageNet 影象識別競賽中大獲全勝，標誌著深度學習時代開啟。此後在語音（Siri）、視覺（人臉識別）、語言（GPT）等領域取得突破性進展。</p>\n      <p><strong>關鍵要素：</strong>海量資料 + 深層網路 + 強大算力（<strong>GPU, Graphics Processing Unit</strong>）= 卓越效能。訓練一次大模型可能耗費數百萬美元算力。</p>\n      <div class=\"analogy\"><strong>通俗類比：</strong>淺層學習像只用一個篩子過濾；深度學習像多層過濾網，每層捕捉不同粒度的資訊。</div>\n    "
        },
        {
          icon: "🔗",
          color: "var(--accent-teal-dim)",
          title: "神經網路",
          abbr: "NN",
          fullEn: "Neural Network",
          content: "\n      <p><strong>神經網路（NN, Neural Network）</strong>由大量「神經元」節點組成，分層處理資訊。每層透過權重（Weight）和偏置（Bias）對輸入做數學變換，經啟用函式（Activation Function）產生輸出，傳遞給下一層。</p>\n      <p><strong>反向傳播（Backpropagation, BP）</strong>是核心訓練演算法：比較預測與真實值的差距，從輸出層向輸入層逐層調整權重，使誤差逐步減小。</p>\n      <p>常見架構：<strong>CNN（Convolutional Neural Network，卷積神經網路）</strong>擅長影象；<strong>RNN（Recurrent Neural Network，迴圈神經網路）</strong>擅長序列，但已被 Transformer  largely 取代。</p>\n      <div class=\"analogy\"><strong>通俗類比：</strong>像工廠流水線——原材料（資料）經過多道工序（網路層）逐步加工，最終產出成品（預測結果）。</div>\n    "
        },
        {
          icon: "⚡",
          color: "var(--accent-amber-dim)",
          title: "Transformer 架構",
          abbr: "—",
          fullEn: "Transformer Architecture",
          content: "\n      <p>2017 年 Google 論文 <em>\"Attention Is All You Need\"</em> 提出 <strong>Transformer</strong> 架構，徹底改變了 NLP 領域。其核心是 <strong>自注意力機制（Self-Attention）</strong>：處理每個詞時，同時計算與句中所有其他詞的相關性權重。</p>\n      <p><strong>核心優勢：</strong></p>\n      <ul class=\"key-points\">\n        <li>解決長距離依賴——句首和句尾的詞能直接互動</li>\n        <li>高度並行化——訓練速度遠超 RNN</li>\n        <li>可擴充套件性強——模型越大，能力越強（規模定律）</li>\n      </ul>\n      <p>所有現代大語言模型（GPT、Claude、Gemini、LLaMA）均基於 Transformer 的<strong>解碼器（Decoder）</strong>或<strong>編碼器-解碼器（Encoder-Decoder）</strong>結構。</p>\n      <div class=\"analogy\"><strong>通俗類比：</strong>讀句子時不是逐字掃描，而是整句一覽，目光自動聚焦關鍵詞——這就是注意力。</div>\n    "
        },
        {
          icon: "💬",
          color: "var(--accent-teal-dim)",
          title: "大語言模型",
          abbr: "LLM",
          fullEn: "Large Language Model",
          content: "\n      <p><strong>大語言模型（LLM, Large Language Model）</strong>是在海量文字上訓練的超大神經網路，核心訓練目標是<strong>預測下一個詞元</strong>。透過這一簡單目標，模型學會了語法、事實知識、推理、程式碼、多語言等複雜能力。</p>\n      <p><strong>關鍵訓練階段：</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>預訓練（Pre-training）</strong>：海量通用文字，學習語言基礎能力</li>\n        <li><strong>SFT（Supervised Fine-Tuning，監督微調）</strong>：用高質量對話資料微調，學會遵循指令</li>\n        <li><strong>RLHF（Reinforcement Learning from Human Feedback，人類反饋強化學習）</strong>：人類標註偏好，最佳化回答質量與安全性</li>\n      </ul>\n      <p><strong>能力邊界：</strong>知識有截止日期、會「幻覺」（Hallucination）、數學和邏輯仍可能出錯。使用時需保持批判性思維，核實關鍵事實。</p>\n      <div class=\"analogy\"><strong>通俗類比：</strong>LLM 像讀過整個網際網路圖書館的博學者——表達流暢、知識廣博，但可能記錯細節，重要資訊需交叉驗證。</div>\n    "
        },
        {
          icon: "🎯",
          color: "rgba(251, 113, 133, 0.12)",
          title: "生成式 AI",
          abbr: "GenAI",
          fullEn: "Generative Artificial Intelligence",
          content: "\n      <p><strong>生成式 AI（GenAI, Generative AI）</strong>能創造全新內容——文字、影象、音訊、影片、程式碼、3D 模型。與傳統<strong>判別式 AI（Discriminative AI）</strong>（分類、檢測、預測）不同，GenAI 的核心是「創造」。</p>\n      <p><strong>主要技術路線：</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>自迴歸模型（Autoregressive）</strong>：逐詞元/畫素生成，代表 GPT、DALL·E</li>\n        <li><strong>擴散模型（Diffusion Model）</strong>：從噪聲逐步去噪生成影象，代表 Stable Diffusion、Midjourney</li>\n        <li><strong>GAN（Generative Adversarial Network，生成對抗網路）</strong>：生成器與判別器博弈，早期影象生成主流</li>\n      </ul>\n      <p><strong>多模態（Multimodal）</strong>模型如 GPT-4o、Gemini 能同時理解和生成文字、影象、音訊等多種形式。</p>\n      <div class=\"analogy\"><strong>通俗類比：</strong>判別式 AI 是「閱卷老師」（判斷對錯）；生成式 AI 是「作家+畫家」（從零創作新作品）。</div>\n    "
        },
        {
          icon: "🌐",
          color: "rgba(167, 139, 250, 0.15)",
          title: "自然語言處理",
          abbr: "NLP",
          fullEn: "Natural Language Processing",
          content: "\n      <p><strong>自然語言處理（NLP, Natural Language Processing）</strong>是 AI 領域中讓計算機理解、生成和處理人類語言的技術分支。涵蓋機器翻譯、情感分析、文字摘要、問答系統、語音識別等。</p>\n      <p><strong>NLP 發展脈絡：</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>規則時代</strong>：人工編寫語法規則和詞典</li>\n        <li><strong>統計時代</strong>：基於大規模語料統計機率（N-gram）</li>\n        <li><strong>深度學習時代</strong>：Word2Vec 詞嵌入 → RNN/LSTM → Transformer → LLM</li>\n      </ul>\n      <p>今天大多數 NLP 任務已被 LLM「統一解決」——一個模型透過不同提示詞即可完成翻譯、摘要、分類、生成等任務，這被稱為 <strong>NLP 的統一正規化</strong>。</p>\n      <div class=\"analogy\"><strong>通俗類比：</strong>NLP 是 AI 的「語言科」——讓機器學會人類的聽說讀寫，LLM 則是這門課的「全能學霸」。</div>\n    "
        }
      ],
      fundamentalsFigcaption: "一圖看懂：AI 從學習資料到理解你的問題並生成回答；下方模組預設展開，可點選標題摺疊。",
      fundamentalsFigAlt: "AI 工作原理示意圖：資料訓練、Transformer 架構、大語言模型推理到生成回答，以及 AI 包含機器學習與深度學習的層級關係",
      coachSections: [
        {
          id: "hero",
          msgTemplate: "{name}, I'm {teacher}! Ready to start your AI learning journey?"
        },
        {
          id: "roadmap",
          msgTemplate: "{name}, this is the learning map. Follow the four phases in order—I'll be with you all the way."
        },
        {
          id: "path",
          msgTemplate: "{name}, this is your 7-day learning plan. Work through the Days in order; mark content you already know as mastered to skip—I'll track your progress."
        },
        {
          id: "ai-overview",
          msgTemplate: "{name}, start with AI Overview! Understand what AI is and what it can do—principles will feel much easier after that."
        },
        {
          id: "fundamentals",
          msgTemplate: "{name}, these 8 fundamentals are the foundation for understanding every AI tool."
        },
        {
          id: "knowledge",
          msgTemplate: "{name}, you don't need to memorize all 100 terms at once—come back anytime to look things up."
        },
        {
          id: "apps",
          msgTemplate: "{name}, pick tools for your scenarios—register and try one; that's the fastest way to get started."
        },
        {
          id: "prompt-lab",
          msgTemplate: "{name}, prompts are the key to steering AI—practice structured writing here."
        },
        {
          id: "hands-on",
          msgTemplate: "{name}, start with Real Software Tutorials! Follow Cursor, Midjourney, and others—nothing beats doing it yourself."
        },
        {
          id: "practice",
          msgTemplate: "{name}, pick a scenario tied to your work, copy a prompt, and try it for real!"
        },
        {
          id: "quiz",
          msgTemplate: "{name}, final stretch! Take the quiz to validate your 7 days—you've got this!"
        },
        {
          id: "graduation",
          msgTemplate: "{name}, congratulations on graduating! Review your learning report and fill in your 30-day practice plan."
        },
        {
          id: "monetize",
          msgTemplate: "{name}, want to monetize your skills? Here are 30 actionable directions—pick the best fit and start validating."
        },
        {
          id: "devices",
          msgTemplate: "{name}, read this before buying a PC! Match OS, RAM, and GPU to your learning path—avoid overspending."
        }
      ],
      phaseCoachHints: {
        "phase-learn": "{name}, Phase 1: let's build cognitive foundations—principles and terminology.",
        "phase-tools": "{name}, Phase 2: learn to pick tools and write prompts so AI truly works for you.",
        "phase-practice": "{name}, Phase 3: embed AI in real workflows—practice proves it!",
        "phase-validate": "{name}, Phase 4: review, quiz, and consolidate—keep improving."
      },
      dayCompleteMessages: {
        allComplete: "{name}, all 7 days complete! Amazing—head to Review for the final quiz 🎉",
        cognitionPhaseEnd: "{name}, Day 3 done! Foundations phase wrapped. Scroll to the bottom to jump to Tools 👏",
        toolsPhaseEnd: "{name}, Tools phase complete! Use the transition guide at the bottom to enter Practice.",
        practiceDayComplete: "{name}, Practice day done! Enter Review for the final quiz—sprint to the finish!",
        dayComplete: "{name}, Day {day}「{title}」complete! {nextHint}{teacher} is proud of you ✦",
        nextDayHint: "Tomorrow is Day {nextDay}「{nextTitle}」."
      },
      personalizationNamed: {
        greeting: "{name}, welcome to BestWayToLearn.AI",
        titleHtml: "{name}, let's <span class=\"hero-highlight\">master AI</span> together",
        readyTitle: "Great, {name} — let's go!",
        readyDesc: "From today on, I'll guide you step by step using \"{name}\".",
        readyQuote: "「{name}, the best way to learn AI is to practice on real problems.」",
        pathBanner: "{name}, see the full 7-day plan first, then work day by day; mark mastered days to skip—I'll track your progress.",
        roadmapHeader: "{name}, complete the four phases in order. Each has clear goals and modules. Progress saves automatically—pick up anytime.",
        phaseBannerTemplate: "{name}, {subtitle} · {days} · {descFirst}."
      }
  });
})();
