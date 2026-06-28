/* ZH-TW overlays — devices */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('zh-TW', {
    deviceOsCompare: {
        windows: {
          title: "Windows",
          emoji: "🪟",
          tagline: "相容性最廣、本地 AI 生態最成熟",
          chooseWhen: [
            "需要 NVIDIA 顯示卡跑本地模型、Stable Diffusion、ComfyUI",
            "公司/學校環境以 Office、CAD、工業軟體為主",
            "想自己組裝桌上型電腦，按需升級記憶體和顯示卡",
            "玩 3A 遊戲的同時兼顧 AI 實驗",
            "使用 CUDA 生態工具（訓練、推理、部分開發框架）"
          ],
          avoidWhen: [
            "主要開發 iOS/macOS 應用（仍需 Mac 做最終編譯）",
            "深度依賴 Final Cut Pro、Logic Pro 等蘋果獨佔軟體",
            "極度看重靜音、續航、開箱即用的移動體驗"
          ],
          aiNote: "Ollama、LM Studio、Stable Diffusion WebUI 在 Windows 上教程最多、驅動最省心。RTX 顯示卡是本地 AI 的價效比之選。"
        },
        macos: {
          title: "macOS",
          emoji: "🍎",
          tagline: "體驗精緻、蘋果生態無縫、統一記憶體適合輕量本地模型",
          chooseWhen: [
            "已是 iPhone/iPad 使用者，重視 AirDrop、接力、iCloud 一體體驗",
            "從事 iOS/macOS 開發，或影片剪輯用 Final Cut Pro",
            "主要用雲端 AI + 輕度本地模型（Ollama 7B 量化）",
            "看重續航、靜音、移動辦公，願為體驗付溢價",
            "不想折騰驅動和環境，希望「開箱就能學」"
          ],
          avoidWhen: [
            "需要 CUDA 或大量 NVIDIA 專屬 AI 工具鏈",
            "要本地跑 30B+ 大模型或訓練 LoRA（視訊記憶體/記憶體成本高）",
            "預算有限但需要高算力（同價位 Windows 顯示卡更強）",
            "依賴僅支援 Windows 的專業行業軟體"
          ],
          aiNote: "Apple Silicon 統一記憶體即視訊記憶體：36GB 舒適跑 13B，64GB 可上 34B 量化，128–512GB（Mac Studio/Pro）適合 70B 級本地推理與重度創作。不支援 CUDA，優先用 Ollama、MLX、LM Studio。"
        }
      },
      deviceMemoryTiers: [
        {
          size: "8 GB",
          level: "不推薦",
          suitable: "僅瀏覽網頁、單任務辦公",
          aiUse: "雲端 AI 勉強可用，Chrome + ChatGPT 多標籤易卡頓",
          verdict: "2026 年學 AI 的最低門檻已不夠。至少 16GB，8GB 機器不建議新購。",
          highlight: false
        },
        {
          size: "16 GB",
          level: "入門標配",
          suitable: "雲端 AI 主力、辦公寫作、輕量程式設計",
          aiUse: "ChatGPT/Claude 網頁與客戶端流暢；可試 Ollama 3B–7B 但速度一般",
          verdict: "大多數學員的甜蜜起點：不配獨顯也能完成本站 90% 學習內容。",
          highlight: true
        },
        {
          size: "32 GB",
          level: "強烈推薦",
          suitable: "AI 輔助程式設計、多專案並行、本地 7B–13B 模型",
          aiUse: "Cursor + 瀏覽器 + 本地模型同時開不吃力；量化 13B 可跑",
          verdict: "認真學 AI 並做實戰專案，32GB 是價效比最高的「不後悔」配置。",
          highlight: true
        },
        {
          size: "64 GB",
          level: "專業入門",
          platform: "MacBook Pro M3 Max · Windows 工作站",
          suitable: "重度開發、4K 剪輯、本地 30B 級模型、多虛擬機器",
          aiUse: "34B 量化推理、ComfyUI + Cursor 同開、Docker 多服務並行",
          recommendedApps: [
            "Cursor",
            "Ollama",
            "ComfyUI",
            "Docker",
            "Final Cut Pro"
          ],
          verdict: "專業使用者起點。Mac 64GB 統一記憶體約等於「大視訊記憶體本」；Windows 臺式可後期擴到 128GB。",
          highlight: false
        },
        {
          size: "128 GB",
          level: "旗艦工作站",
          platform: "Mac Studio M2/M3 Ultra · 高階 Windows 工作站",
          suitable: "70B 級本地模型、AI 影片長片、多專案並行、小型團隊開發環境",
          aiUse: "70B 量化推理、多模態大模型、批次生圖/生影片、同時跑 2–3 箇中型模型",
          recommendedApps: [
            "Ollama",
            "MLX",
            "LM Studio",
            "ComfyUI",
            "Runway 桌面端",
            "Cursor"
          ],
          verdict: "蘋果 128GB 統一記憶體的甜點檔（Studio Ultra）。適合把 AI 當生產力而非玩具的使用者。",
          highlight: false
        },
        {
          size: "256 GB",
          level: "頂級創作",
          platform: "Mac Studio / Mac Pro 定製 · 執行緒撕裂者工作站",
          suitable: "超長上下文實驗、多模型切換、8K 素材 + AI 特效、本地知識庫叢集",
          aiUse: "70B 較大量化 + 嵌入模型 + SD/FLUX 工作流同開；適合「一臺機器扛全工作室」",
          recommendedApps: [
            "Ollama",
            "MLX",
            "LM Studio",
            "ComfyUI",
            "NotebookLM 本地資料庫",
            "DaVinci Resolve"
          ],
          verdict: "預算充足的內容工廠/工程師配置。Mac 256GB 多為 BTO 定製，下單前確認無法後期升級。",
          highlight: false
        },
        {
          size: "512 GB",
          level: "極限規格",
          platform: "Mac Pro M2 Ultra 最高配 · 伺服器級工作站",
          suitable: "研究機構、影視後期、AI 工程團隊、本地私有化大模型部署",
          aiUse: "多使用者/多模型並行、超大上下文、輕量微調實驗、海量素材實時 AI 處理",
          recommendedApps: [
            "Ollama",
            "MLX",
            "vLLM（實驗）",
            "ComfyUI 叢集",
            "自建 RAG 服務",
            "Cursor"
          ],
          verdict: "極少數使用者需要。個人學習者通常 32–64GB 已夠；512GB 面向「本地就是機房」的極端場景。",
          highlight: false
        }
      ],
      deviceGpuTiers: [
        {
          tier: "核顯 / 無獨顯",
          vram: "共享記憶體",
          emoji: "💻",
          forWho: "純雲端 AI 學習、辦公、寫作",
          canDo: "ChatGPT、Claude、Kimi、Midjourney 網頁版、Notion AI",
          cannotDo: "流暢本地 SD 生圖、13B+ 模型推理、CUDA 訓練",
          examples: "Intel 核顯、AMD Radeon 集顯、MacBook Air M2/M3",
          verdict: "本站大部分課程無需獨顯。把錢投到 32GB 記憶體更值。"
        },
        {
          tier: "入門獨顯",
          vram: "6–8 GB",
          emoji: "⚡",
          forWho: "想試本地 AI、輕度生圖的學習者",
          canDo: "SD 1.5 低解析度、Ollama 7B 量化、基礎 LoRA 推理",
          cannotDo: "FLUX 全精度、70B 模型、大規模訓練",
          examples: "RTX 3050 6GB、RTX 4050 6GB、RTX 4060 Laptop 8GB",
          verdict: "入門級本地 AI 門票。桌上型電腦優先，筆記本散熱受限。"
        },
        {
          tier: "中端獨顯",
          vram: "8–12 GB",
          emoji: "🎯",
          forWho: "AI 副業接單、日常生圖、本地開發除錯",
          canDo: "SDXL、FLUX 量化、13B 模型、ComfyUI 工作流、輕量微調",
          cannotDo: "70B 全精度、多卡並行訓練",
          examples: "RTX 4060 Ti 16GB、RTX 4070 12GB、RTX 4070 Laptop",
          verdict: "本地 AI 價效比甜點。4060 Ti 16GB 版尤其適合生圖+模型雙修。"
        },
        {
          tier: "高階獨顯",
          vram: "16–24 GB",
          emoji: "🚀",
          forWho: "AI 工程師、重度創作者、小規模訓練",
          canDo: "34B–70B 量化推理、影片生成本地測試、LoRA 訓練、多模型並行",
          cannotDo: "大規模商業訓練（仍需雲端/A100 叢集）",
          examples: "RTX 4080 16GB、RTX 4090 24GB、RTX 5090",
          verdict: "單卡本地 AI 天花板。預算充足且確定走本地路線再考慮。"
        },
        {
          tier: "Apple 統一記憶體",
          vram: "記憶體即視訊記憶體",
          emoji: "🍎",
          forWho: "Mac 使用者、移動辦公、輕量本地模型",
          canDo: "Ollama 7B–13B（視記憶體而定）、MLX 框架、雲端 AI 主力",
          cannotDo: "CUDA 生態、NVIDIA 專屬最佳化工具、高價效比大視訊記憶體",
          examples: "M3 24GB、M3 Pro 36GB、M3 Max 64GB、Studio Ultra 128–192GB、Mac Pro 256–512GB",
          verdict: "36GB≈13B 舒適；64GB≈34B；128GB+ 可碰 70B 量化。記憶體即視訊記憶體，買定離手，選夠再下單。"
        }
      ],
      deviceStorageTiers: [
        {
          size: "256 GB",
          verdict: "僅適合純雲端使用者；系統 + 軟體即滿，不推薦。"
        },
        {
          size: "512 GB",
          verdict: "入門夠用；裝幾款 AI 客戶端後餘量緊張，需常清理。"
        },
        {
          size: "1 TB",
          verdict: "主流推薦。夠裝開發環境、本地模型快取與素材庫。"
        },
        {
          size: "2 TB+",
          verdict: "本地模型庫、4K 素材、多虛擬機器 — 創作者與工程師首選。"
        }
      ],
      deviceAiBoxes: [
        {
          id: "dgx-spark",
          title: "NVIDIA DGX Spark",
          emoji: "⚡",
          vendor: "NVIDIA",
          chip: "GB10 Grace Blackwell",
          budget: "約 22,000–32,000 元",
          form: "桌面 AI 超算盒（150×150×50 mm）",
          os: "NVIDIA DGX OS（Linux）",
          dedicated: true,
          specs: {
            chip: "GB10：20 核 Arm + Blackwell GPU，第五代 Tensor Core",
            memory: "128 GB LPDDR5x 統一記憶體（CPU/GPU 共享）",
            storage: "4 TB NVMe M.2（自加密）",
            aiCompute: "最高約 1 PFLOP（FP4）；ConnectX-7 200Gbps",
            networking: "10GbE + Wi-Fi 7；雙機互聯可擴至 405B 級模型"
          },
          capabilities: {
            inference: "單臺推理最高約 200B 引數",
            finetune: "可微調最高約 70B 引數",
            agents: "預裝 NIM、TensorRT、NemoClaw/OpenShell 智慧體棧"
          },
          forNeeds: [
            "local-llm",
            "luxury",
            "coding"
          ],
          bestFor: "AI 工程師、研究員、想本地跑智慧體與大模型的開發者",
          reasoning: [
            "官方定位「世界最小 AI 超算」——1.2kg 放桌面，功耗約 240W，比全塔工作站安靜得多",
            "128GB 統一記憶體讓大模型權重完整載入，不必像消費級顯示卡那樣反覆 offload",
            "DGX OS + NVIDIA AI 軟體棧開箱即用，省去 CUDA/驅動/容器環境折騰",
            "適合原型驗證、微調、推理後再遷移到 DGX Cloud 或資料中心"
          ],
          tradeoff: "Arm 架構 + 封閉軟體棧，部分 x86/Windows 工具需適配；國內購買渠道與售後不如消費 PC 普及；漲價後價效比需與自裝 RTX 5090 對比。",
          vsDiy: "對比自裝 128GB 工作站：DGX Spark 更小巧、軟體棧完整、大模型開箱即用；自裝 Windows/Linux 雙卡方案 CUDA 教程更多、顯示卡可更換，長期更「可折騰」。",
          recommendedApps: [
            "Ollama",
            "NIM",
            "TensorRT-LLM",
            "NemoClaw",
            "Jupyter",
            "Hugging Face"
          ],
          oemVariants: []
        },
        {
          id: "gb10-oem",
          title: "GB10 OEM 生態（同款晶片）",
          emoji: "🏭",
          vendor: "華碩 / 戴爾 / 惠普 / 聯想等",
          chip: "GB10 Grace Blackwell",
          budget: "約 22,000–35,000 元",
          form: "各品牌 AI 迷你工作站",
          os: "DGX OS 或品牌定製 Linux",
          dedicated: true,
          specs: {
            chip: "與 DGX Spark 同款 GB10 Superchip",
            memory: "128 GB 統一記憶體",
            storage: "2–4 TB NVMe（因品牌而異）",
            aiCompute: "與 DGX Spark 同級約 1 PFLOP FP4",
            networking: "多數含高速網口；部分型號擴充套件介面更豐富"
          },
          capabilities: {
            inference: "與 DGX Spark 相同，約 200B 引數",
            finetune: "約 70B 引數微調",
            agents: "NVIDIA AI Enterprise / NIM 支援因品牌套餐而異"
          },
          forNeeds: [
            "local-llm",
            "luxury",
            "coding"
          ],
          bestFor: "想用 GB10 算力、但希望走企業採購或品牌售後通道的團隊",
          reasoning: [
            "華碩 Ascent GX10、惠普 ZGX Nano、戴爾 Pro Max、聯想、宏碁 Veriton GN100、技嘉 AI TOP ATOM、微星等均為 GB10 平臺",
            "算力與 DGX Spark 同源，差異在機箱散熱、介面、保修與預裝服務",
            "企業使用者可走 IT 採購流程，便於統一資產管理",
            "適合已確定走 NVIDIA CUDA 路線、又不想自建機房的團隊"
          ],
          tradeoff: "各品牌配置與報價差異大，購買前需核對是否含完整 NVIDIA AI 軟體授權；與原廠 DGX Spark 相比未必更便宜。",
          vsDiy: "與 DGX Spark 二選一即可，不必重複購買。若已有 IT 供應商合約，優先問 OEM 報價；個人開發者通常直接買 DGX Spark 更直觀。",
          recommendedApps: [
            "NIM",
            "Ollama",
            "ComfyUI",
            "PyTorch",
            "Cursor（遠端開發）"
          ],
          oemVariants: [
            "華碩 Ascent GX10",
            "惠普 ZGX Nano",
            "戴爾 Pro Max",
            "聯想 AI 工作站",
            "宏碁 Veriton GN100",
            "技嘉 AI TOP ATOM",
            "微星 AI 桌面"
          ]
        },
        {
          id: "ryzen-ai-halo",
          title: "AMD Ryzen AI Halo · 128GB 迷你主機",
          emoji: "🔴",
          vendor: "AMD 平臺 · GMKtec / Geekom 等",
          chip: "Ryzen AI Max+ 395（Strix Halo）",
          budget: "約 14,000–28,000 元",
          form: "迷你 AI PC（約 193×186×77 mm）",
          os: "Windows 11 Pro / Ubuntu",
          dedicated: true,
          specs: {
            chip: "16 核 32 執行緒 Zen 5，最高 5.1 GHz；50 TOPS NPU",
            memory: "64 / 128 GB LPDDR5X 8000MHz 板載統一記憶體",
            storage: "2–4 TB PCIe 4.0 SSD，雙 M.2 最高擴至 16 TB",
            aiCompute: "Radeon 8060S 40CU RDNA 3.5；整晶片約 126 TOPS",
            networking: "2.5GbE + Wi-Fi 7 + 雙 USB4"
          },
          capabilities: {
            inference: "128GB 版：70B 量化、Qwen3 235B 量化、Llama4 109B 等",
            finetune: "輕量 LoRA 可行；大規模訓練仍建議雲端",
            agents: "支援 OpenClaw、本地知識庫、LM Studio / Ollama"
          },
          forNeeds: [
            "local-llm",
            "luxury",
            "coding",
            "budget"
          ],
          bestFor: "想用 128GB 本地大模型、但預算低於 DGX Spark 的進階學習者與獨立開發者",
          reasoning: [
            "AMD 官方稱 Ryzen AI Halo 系列——Strix Halo 把 CPU、核顯、NPU 與超大記憶體封進迷你機身",
            "GMKtec EVO-X2、Geekom A9 Max 等 128GB 版約 2,000 美元檔，比 GB10 盒子便宜一截",
            "Windows 開箱，Ollama / LM Studio / llama.cpp 上手快，適合國內使用者習慣",
            "RDNA 核顯還能兼顧遊戲與 ComfyUI 輕度生圖，一機多用"
          ],
          tradeoff: "無 CUDA，PyTorch ROCm 生態仍弱於 NVIDIA；記憶體板載不可升級；第三方迷你主機售後與品控需甄別品牌。",
          vsDiy: "對比自裝 128GB DDR5 桌上型電腦：Halo 盒子更小巧、功耗集中管理；自裝可換顯示卡、記憶體可擴充套件，3–5 年升級空間更大。對比 DGX Spark：AMD 方案便宜、Windows 友好，但大模型最佳化與官方軟體棧不如 NVIDIA 完整。",
          recommendedApps: [
            "Ollama",
            "LM Studio",
            "llama.cpp",
            "ComfyUI",
            "OpenClaw",
            "Cursor"
          ],
          oemVariants: [
            "GMKtec EVO-X2",
            "Geekom A9 Max",
            "Minisforum 等 Strix Halo 機型"
          ]
        },
        {
          id: "dual-dgx-spark",
          title: "雙機 DGX Spark 叢集",
          emoji: "🔗",
          vendor: "NVIDIA",
          chip: "2× GB10 Grace Blackwell",
          budget: "約 44,000–64,000 元",
          form: "雙桌面盒 + 高速互聯",
          os: "NVIDIA DGX OS",
          dedicated: true,
          specs: {
            chip: "兩臺 GB10 透過 ConnectX 高速網路組成叢集",
            memory: "256 GB 統一記憶體池（128GB × 2）",
            storage: "8 TB NVMe 合計（4TB × 2）",
            aiCompute: "約 2 PFLOP FP4 合計",
            networking: "ConnectX-7 200Gbps 機間互聯"
          },
          capabilities: {
            inference: "最高約 405B 引數模型推理",
            finetune: "更大規模分散式微調實驗",
            agents: "多智慧體並行、超大上下文路由"
          },
          forNeeds: [
            "luxury",
            "local-llm",
            "coding"
          ],
          bestFor: "研究小組、AI 原生創業團隊、需要本地超大模型而不上雲的極端使用者",
          reasoning: [
            "NVIDIA 官方支援兩臺 DGX Spark 互聯，突破單機 200B 推理上限",
            "比採購一臺 DGX Station 便宜得多，卻可覆蓋 400B 級實驗需求",
            "適合「桌面機房」——放工位旁做私有化大模型驗證",
            "兩臺獨立機器不叢集時仍可分工：一臺推理、一臺微調"
          ],
          tradeoff: "總價接近高階 Mac Pro，仍需自己維護叢集軟體；對 99% 個人學習者嚴重過剩。",
          vsDiy: "對比 4×4090 伺服器：雙 Spark 更省電、更安靜、佔桌面空間小；多卡 x86 機器訓練吞吐更高、二手顯示卡生態更成熟。",
          recommendedApps: [
            "vLLM",
            "NIM",
            "TensorRT-LLM",
            "Ray",
            "自建 RAG 叢集"
          ],
          oemVariants: []
        }
      ],
      devicePresets: [
        {
          id: "cloud-starter",
          title: "雲端學習入門",
          emoji: "☁️",
          budget: "4,000–6,000 元",
          form: "輕薄本",
          os: "Windows / macOS 均可",
          specs: {
            cpu: "i5 / R5 / M2",
            ram: "16 GB",
            gpu: "核顯",
            storage: "512 GB SSD"
          },
          forNeeds: [
            "cloud",
            "budget"
          ],
          bestFor: "跟完本站 7 天課程、日常 ChatGPT/Claude 學習、辦公寫作",
          reasoning: [
            "學習階段 90% 操作在瀏覽器和 App 完成，無需本地算力",
            "16GB 保證多標籤 + AI 客戶端不卡頓",
            "輕薄本便攜，圖書館、咖啡館都能學",
            "省下預算可先訂閱 1–2 款 AI 工具月費"
          ],
          tradeoff: "無法舒適本地跑模型或 SD 生圖；重度程式設計多開可能吃力。"
        },
        {
          id: "coding-mac",
          title: "程式設計 + 蘋果生態",
          emoji: "🍎",
          budget: "9,000–14,000 元",
          form: "MacBook Air/Pro",
          os: "macOS",
          specs: {
            cpu: "M3 / M3 Pro",
            ram: "24–36 GB 統一記憶體",
            gpu: "集顯（統一記憶體）",
            storage: "512 GB–1 TB"
          },
          forNeeds: [
            "coding",
            "apple",
            "cloud"
          ],
          bestFor: "Cursor 開發、iOS 學習、蘋果裝置聯動、雲端 AI 主力",
          reasoning: [
            "M 系列晶片編譯快、續航長，移動寫程式碼體驗一流",
            "24GB 起可兼顧 Ollama 7B 輕量本地實驗",
            "與 iPhone/iPad 接力查資料、試 App 極方便",
            "Final Cut、Keynote 等蘋果工具鏈完整"
          ],
          tradeoff: "同價位顯示卡算力不如 Windows；CUDA 工具無法使用。"
        },
        {
          id: "coding-win",
          title: "AI 程式設計主力機",
          emoji: "👨‍💻",
          budget: "7,000–10,000 元",
          form: "Windows 筆記本 / 小主機",
          os: "Windows 11",
          specs: {
            cpu: "i7 / R7 / Ultra 7",
            ram: "32 GB",
            gpu: "核顯或 RTX 4050",
            storage: "1 TB SSD"
          },
          forNeeds: [
            "coding",
            "cloud",
            "budget"
          ],
          bestFor: "Cursor、VS Code、Docker、多專案 AI 輔助開發",
          reasoning: [
            "32GB 是 AI 程式設計的「不後悔」記憶體線，多倉庫 + 瀏覽器 + AI 同時開",
            "Windows 相容企業開發環境與各類 CLI 工具",
            "可選帶 RTX 4050 的版本，兼顧輕度本地模型",
            "1TB SSD 裝 WSL、Docker 映象、多個 Node/Python 環境"
          ],
          tradeoff: "獨顯版更重更貴；核顯版本地 AI 能力有限。"
        },
        {
          id: "local-ai",
          title: "本地 AI 工作站",
          emoji: "🧠",
          budget: "12,000–18,000 元",
          form: "Windows 桌上型電腦 / 遊戲本",
          os: "Windows 11",
          specs: {
            cpu: "i7 / R7",
            ram: "32 GB",
            gpu: "RTX 4060 Ti 16GB",
            storage: "1 TB NVMe"
          },
          forNeeds: [
            "local-llm",
            "image",
            "coding"
          ],
          bestFor: "Ollama 本地模型、ComfyUI 生圖、AI 副業接單",
          reasoning: [
            "4060 Ti 16GB 是 2026 年本地 AI 價效比之王，視訊記憶體夠跑 SDXL 和 13B",
            "32GB 系統記憶體保證模型載入餘量",
            "桌上型電腦散熱好，長時間推理不降頻",
            "比 Mac 同算力便宜，CUDA 教程資源豐富"
          ],
          tradeoff: "佔地、耗電、不便攜；筆記本版同配置散熱打折扣。"
        },
        {
          id: "creator-pro",
          title: "創作生產力",
          emoji: "🎨",
          budget: "18,000–30,000 元",
          form: "MacBook Pro / Windows 創作本",
          os: "macOS / Windows",
          specs: {
            cpu: "M3 Max/Ultra 或 i9",
            ram: "64–128 GB 統一記憶體 / 64GB+",
            gpu: "集顯高記憶體 / RTX 4070+",
            storage: "2 TB SSD"
          },
          forNeeds: [
            "image",
            "apple",
            "local-llm"
          ],
          bestFor: "AI 影片、批次生圖、播客剪輯、70B 級本地模型實驗",
          reasoning: [
            "64GB 起可跑 34B 量化；128GB Studio Ultra 可碰 70B 級本地推理",
            "2TB 存模型權重、素材庫、專案歸檔",
            "Mac 記憶體買定離手，建議按 3 年用途一次選夠；Windows 選 4070 以上獨顯",
            "適合把本站所學轉化為自媒體/設計副業"
          ],
          tradeoff: "價格高；初學者可先雲端驗證方向再投資。"
        },
        {
          id: "desktop-value",
          title: "臺式價效比組裝",
          emoji: "💰",
          budget: "8,000–12,000 元",
          form: "DIY 桌上型電腦",
          os: "Windows 11",
          specs: {
            cpu: "R5 / i5",
            ram: "32 GB DDR5",
            gpu: "RTX 4060 8GB",
            storage: "1 TB NVMe"
          },
          forNeeds: [
            "budget",
            "local-llm",
            "image",
            "coding"
          ],
          bestFor: "預算有限但想本地 AI 全體驗、後期可升級",
          reasoning: [
            "桌上型電腦同價位算力最強，顯示卡和記憶體均可後期更換",
            "4060 8GB 夠入門 SD 和 7B 模型",
            "32GB 記憶體可升到 64GB，延長 3–5 年壽命",
            "適合在家固定學習、做 ComfyUI 和 Ollama 實驗"
          ],
          tradeoff: "無法移動；需一定裝機/維護知識。"
        },
        {
          id: "luxury-mbp",
          title: "移動旗艦 · MacBook Pro",
          emoji: "💎",
          luxury: true,
          budget: "45,000–68,000 元",
          form: "MacBook Pro 16\"",
          os: "macOS",
          specs: {
            cpu: "M4 Max",
            ram: "64–128 GB 統一記憶體",
            gpu: "集顯（統一記憶體）",
            storage: "2–4 TB SSD"
          },
          forNeeds: [
            "luxury",
            "apple",
            "coding",
            "local-llm",
            "image"
          ],
          bestFor: "隨時隨地本地跑 34B–70B 實驗、移動剪輯、出差演示",
          reasoning: [
            "128GB 版是目前蘋果筆記本記憶體天花板，一臺帶走整個 AI 實驗室",
            "M4 Max 單核/多核都強，Cursor + Final Cut + Ollama 同開無壓力",
            "適合高頻飛行、多地辦公的創業者與創意總監",
            "配 Pro Display XDR 回家即變桌面工作站"
          ],
          tradeoff: "溢價極高；散熱仍弱於臺式，長時間 70B 推理會降頻。"
        },
        {
          id: "luxury-studio",
          title: "桌面旗艦 · Mac Studio Ultra",
          emoji: "🏆",
          luxury: true,
          budget: "80,000–120,000 元",
          form: "Mac Studio",
          os: "macOS",
          specs: {
            cpu: "M3 Ultra",
            ram: "128–192 GB 統一記憶體",
            gpu: "集顯（60 核 GPU）",
            storage: "2–4 TB SSD"
          },
          forNeeds: [
            "luxury",
            "apple",
            "local-llm",
            "image",
            "coding"
          ],
          bestFor: "個人 AI 創作工作室、70B 本地推理、靜音高配桌面",
          reasoning: [
            "128GB 是多數 AI 從業者的蘋果「終極甜點」——夠跑 70B 量化還不至於 Mac Pro 價位",
            "體積極小、幾乎靜音，放桌面比水冷主機優雅",
            "MLX + Ollama 生態成熟，適合蘋果全家桶重度使用者",
            "比 Mac Pro 便宜一截，效能卻覆蓋 90% 本地 AI 場景"
          ],
          tradeoff: "記憶體/硬碟定製後不可升級；無 CUDA，部分科研工具需繞道。"
        },
        {
          id: "luxury-macpro",
          title: "蘋果天花板 · Mac Pro",
          emoji: "👑",
          luxury: true,
          budget: "180,000–450,000 元",
          form: "Mac Pro 塔式",
          os: "macOS",
          specs: {
            cpu: "M2 Ultra",
            ram: "256–512 GB 統一記憶體",
            gpu: "集顯（76 核 GPU）",
            storage: "4–8 TB SSD"
          },
          forNeeds: [
            "luxury",
            "apple",
            "local-llm",
            "image"
          ],
          bestFor: "影視公司、AI 原生團隊、私有化大模型、多路 8K 流",
          reasoning: [
            "512GB 統一記憶體在消費級裝置裡獨一無二，可同時駐留多個大模型",
            "適合「不想上雲、但要有機房級記憶體」的土豪團隊",
            "After Effects + ComfyUI + 本地 70B 助手三班倒",
            "蘋果生態內的身份象徵 + 真實生產力，不是純擺設"
          ],
          tradeoff: "價格離譜；M2 Ultra 代際略舊於 M4，純算力不如同價位 NVIDIA 叢集。"
        },
        {
          id: "luxury-dual-gpu",
          title: "雙卡怪獸 · NVIDIA 工作站",
          emoji: "🚀",
          luxury: true,
          budget: "80,000–180,000 元",
          form: "全塔工作站",
          os: "Windows 11 / Linux",
          specs: {
            cpu: "Threadripper PRO / i9-14900K",
            ram: "128–256 GB DDR5",
            gpu: "2× RTX 4090 24GB 或 2× RTX 5090",
            storage: "4 TB NVMe RAID"
          },
          forNeeds: [
            "luxury",
            "local-llm",
            "image",
            "coding"
          ],
          bestFor: "CUDA 深度玩家、LoRA 訓練、多路 ComfyUI、本地模型微調",
          reasoning: [
            "雙 4090 = 48GB 視訊記憶體池，跑 SDXL/FLUX 多工作流比單卡快一倍",
            "128GB 系統記憶體 + 大視訊記憶體，是 Windows 陣營本地 AI 的硬頂",
            "Ollama、ComfyUI、PyTorch 教程最全，工程師首選",
            "後期可換卡、可擴記憶體，比蘋果更「可折騰」"
          ],
          tradeoff: "噪音大、耗電高、體積佔滿一桌；驅動與環境維護成本高。"
        },
        {
          id: "luxury-apple-win",
          title: "土豪雙持 · Mac + Windows 雙機",
          emoji: "⚡",
          luxury: true,
          budget: "150,000–280,000 元",
          form: "Mac Studio + Windows 主機",
          os: "macOS + Windows",
          specs: {
            cpu: "M3 Ultra + i9",
            ram: "128 GB + 128 GB",
            gpu: "Apple 集顯 + RTX 4090",
            storage: "各 4 TB"
          },
          forNeeds: [
            "luxury",
            "apple",
            "local-llm",
            "image",
            "coding"
          ],
          bestFor: "既要蘋果體驗又要 CUDA 全生態的終極玩家",
          reasoning: [
            "Mac 負責日常創作、移動端、Final Cut、MLX 輕量推理",
            "Windows 主機負責 ComfyUI 批次、CUDA 訓練、遊戲放鬆",
            "NAS 或 10GbE 區域網共享模型與素材，雙機互補不重複造輪子",
            "很多 AI 工作室的真實頂配形態——不是一臺萬能，而是分工明確"
          ],
          tradeoff: "總價最高、線纜與同步成本高；對普通人嚴重過剩。"
        }
      ]
  });
})();
