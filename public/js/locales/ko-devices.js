/* KO overlays — devices */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('ko', {
    deviceOsCompare: {
        windows: {
          title: "가장 폭넓은 호환성과 가장 성숙한 로컬 AI 생태계",
          tagline: "가장 폭넓은 호환성과 가장 성숙한 로컬 AI 생태계",
          chooseWhen: [
            "직장이나 학교는 Office, CAD 또는 산업용 Windows 소프트웨어에서 실행됩니다.",
            "AAA 게임을 플레이하고 동일한 머신에서 AI 실험을 원합니다.",
            "AAA 게임을 플레이하고 동일한 머신에서 AI 실험을 원합니다.",
            "AAA 게임을 플레이하고 동일한 머신에서 AI 실험을 원합니다.",
            "주로 iOS/macOS 앱을 출시합니다(최종 빌드에는 여전히 Mac이 필요합니다)."
          ],
          avoidWhen: [
            "Final Cut Pro 또는 Logic Pro와 같은 Apple 전용 앱에 의존합니다.",
            "Final Cut Pro 또는 Logic Pro와 같은 Apple 전용 앱에 의존합니다.",
            "Ollama, LM Studio 및 Stable Diffusion WebUI는 Windows에서 가장 많은 튜토리얼과 가장 부드러운 드라이버를 제공합니다. RTX 카드는 로컬 AI를 위한 가치 있는 선택입니다."
          ],
          aiNote: "macOS"
        },
        macos: {
          title: "macOS",
          tagline: "세련된 경험, 원활한 Apple 생태계, 더 가벼운 로컬 모델을 위한 통합 메모리",
          chooseWhen: [
            "이미 iPhone/iPad를 사용하고 있으며 AirDrop, Handoff 및 iCloud를 하나의 흐름으로 원합니다.",
            "Final Cut Pro에서 iOS/macOS 개발 또는 비디오 편집을 수행하는 경우",
            "주로 클라우드 AI와 가벼운 로컬 모델(예: Ollama 7B 퀀트)을 사용합니다.",
            "배터리, 무소음, 모바일 작업을 중시하고 프리미엄을 받아들입니다.",
            "운전자의 번거로움을 최소화하고 즉시 사용 가능한 학습 설정을 원합니다."
          ],
          avoidWhen: [
            "CUDA 또는 다양한 NVIDIA 전용 AI 도구가 필요합니다.",
            "300억 개 이상의 로컬 모델 또는 LoRA 교육을 원합니다(메모리 비용이 높음).",
            "예산은 부족하지만 높은 컴퓨팅이 필요함(Windows GPU는 달러당 더 많은 성능을 발휘함)",
            "Windows 전용 전문 소프트웨어에 의존하는 경우"
          ],
          aiNote: "Apple Silicon 통합 메모리는 VRAM 역할을 합니다. 13B에는 36GB, 34B 퀀트에는 64GB, 70B급 로컬 추론 및 대규모 창작 작업에는 128~512GB(Mac Studio/Pro)가 적합합니다. CUDA 없음 - Ollama, MLX 및 LM Studio를 선호합니다."
        }
      },
      deviceMemoryTiers: [
        {
          level: "권장되지 않음",
          suitable: "웹 브라우징 및 단일 작업 사무에만 해당",
          aiUse: "클라우드 AI는 거의 사용할 수 없습니다. 탭이 많은 Chrome + ChatGPT가 끊김",
          verdict: "AI 학습을 위한 2026년 바닥은 더 이상 충분하지 않습니다. 최소 16GB를 구매하세요. 새로운 8GB 시스템을 구입하지 마십시오."
        },
        {
          level: "진입 기준",
          suitable: "클라우드 AI를 주요 경로로, 사무실 글쓰기, 가벼운 코딩",
          aiUse: "ChatGPT/Claude 웹 및 데스크톱 앱이 원활하게 실행됩니다. Ollama 3B–7B는 가능하지만 느립니다.",
          verdict: "대부분의 학습자를 위한 좋은 시작: 이 사이트의 ~90%에는 별도의 GPU가 필요하지 않습니다."
        },
        {
          level: "적극 권장",
          suitable: "AI 지원 코딩, 여러 프로젝트, 로컬 7B–13B 모델",
          aiUse: "커서 + 브라우저 + 로컬 모델을 부담 없이 함께 사용할 수 있습니다. 양자화된 13B가 실행 가능합니다.",
          verdict: "AI와 실제 프로젝트를 진지하게 생각한다면 32GB가 가장 가치 있는 \"후회 없는\" 선택입니다."
        },
        {
          level: "프로입장",
          platform: "MacBook Pro M3 Max · Windows 워크스테이션",
          suitable: "대규모 개발, 4K 편집, 로컬 ~300억 모델, 여러 VM",
          aiUse: "프로의 출발점. Mac 64GB 통합 메모리는 대형 VRAM 노트북처럼 작동합니다. Windows 데스크톱은 나중에 128GB로 확장될 수 있습니다.",
          verdict: "프로의 출발점. Mac 64GB 통합 메모리는 대형 VRAM 노트북처럼 작동합니다. Windows 데스크톱은 나중에 128GB로 확장될 수 있습니다."
        },
        {
          level: "플래그십 워크스테이션",
          platform: "Mac Studio M2/M3 Ultra · 고급형 Windows 워크스테이션",
          suitable: "70B급 로컬 모델, 긴 AI 영상 작업, 다수의 병렬 프로젝트, 소규모 팀 개발 환경",
          aiUse: "70B 정량 추론, 멀티모달 LLM, 배치 이미지/비디오 생성, 한 번에 2~3개의 중간 크기 모델",
          verdict: "Apple의 128GB 통합 메모리 최적점(Studio Ultra). AI를 장난감이 아닌 생산으로 취급하는 사람들을 위한 제품입니다."
        },
        {
          level: "최상위 크리에이티브",
          platform: "Mac Studio/Mac Pro(BTO) · Threadripper 워크스테이션",
          suitable: "매우 긴 상황 실험, 모델 전환, 8K 영상 + AI 효과, 로컬 지식 기반 클러스터",
          aiUse: "70B 더 무거운 퀀트 + 임베딩 모델 + SD/FLUX 워크플로우를 함께 사용 - 전체 스튜디오를 위한 하나의 시스템",
          verdict: "콘텐츠 팩토리/엔지니어 예산. Mac 256GB는 일반적으로 BTO 전용입니다. 주문하기 전에 나중에 업그레이드할 수 없는지 확인하세요."
        },
        {
          level: "극한사양",
          platform: "Mac Pro M2 Ultra max 구성 · 서버급 워크스테이션",
          suitable: "연구실, 영화 포스트, AI 엔지니어링 팀, 온프레미스 비공개 LLM 배포",
          aiUse: "다중 사용자/다중 모델 병렬 처리, 대규모 컨텍스트, 가벼운 미세 조정 실험, 대규모 미디어 라이브러리의 실시간 AI",
          verdict: "이것을 필요로 하는 사람은 거의 없습니다. 대부분의 학습자는 32~64GB이면 충분합니다. 512GB는 \"내 책상이 데이터 센터\" 시나리오용입니다."
        }
      ],
      deviceGpuTiers: [
        {
          tier: "통합/개별 GPU 없음",
          forWho: "클라우드 전용 AI 학습, 사무, 글쓰기",
          canDo: "ChatGPT, Claude, Kimi, Midjourney web, Notion AI",
          cannotDo: "부드러운 로컬 SD 이미지 생성, 13B+ 모델 추론, CUDA 교육",
          examples: "Intel 통합 그래픽, AMD Radeon iGPU, MacBook Air M2/M3",
          verdict: "여기에 있는 대부분의 과정에는 별도의 GPU가 필요하지 않습니다. 대신 32GB RAM에 돈을 쓰세요."
        },
        {
          tier: "엔트리 개별 GPU",
          forWho: "로컬 AI 및 조명 이미지 생성을 시도하는 학습자",
          canDo: "저해상도 SD 1.5, Ollama 7B 퀀트, 기본 LoRA 추론",
          cannotDo: "완전 정밀도 FLUX, 70B 모델, 대규모 훈련",
          examples: "RTX 3050 6GB, RTX 4050 6GB, RTX 4060 노트북 8GB",
          verdict: "로컬 AI 입장권. 데스크탑을 선호합니다. 노트북 발열로 인해 지속적인 부하가 제한됩니다."
        },
        {
          tier: "중급 개별 GPU",
          forWho: "AI 측면 공연, 일일 이미지 생성, 로컬 개발 및 디버깅",
          canDo: "SDXL, 양자화된 FLUX, 13B 모델, ComfyUI 워크플로우, 가벼운 미세 조정",
          cannotDo: "70B 완전 정밀도, 다중 GPU 교육",
          examples: "RTX 4060 Ti 16GB, RTX 4070 12GB, RTX 4070 노트북",
          verdict: "로컬 AI 가치 최적점. 4060 Ti 16GB는 특히 이미지 생성 + 모델을 함께 사용하는 데 강력합니다."
        },
        {
          tier: "고급 외장형 GPU",
          forWho: "AI 엔지니어, 헤비 크리에이터, 소규모 교육",
          canDo: "34B–70B 양자 추론, 로컬 비디오 생성 테스트, LoRA 교육, 여러 모델 병렬",
          cannotDo: "대규모 상업 교육(여전히 클라우드/A100 클러스터 필요)",
          examples: "RTX 4080 16GB, RTX 4090 24GB, RTX 5090",
          verdict: "단일 GPU 로컬 AI 한도. 예산이 탄탄하고 지역적 길에 전념하는 경우에만 가능합니다."
        },
        {
          tier: "애플 통합 메모리",
          forWho: "Mac 사용자, 모바일 작업, 더 가벼운 로컬 모델",
          canDo: "Ollama 7B–13B(RAM 기준), MLX 프레임워크, 클라우드 AI를 메인 엔진으로 사용",
          cannotDo: "CUDA 생태계, NVIDIA 전용 최적화 도구, 비용 효율적인 대형 VRAM",
          examples: "36GB ≒ 편안한 13B; 64GB ≒ 34B; 128GB+는 70B 퀀트에 닿을 수 있습니다. 메모리는 VRAM입니다. 구매하기 전에 구성하세요.",
          verdict: "36GB ≒ 편안한 13B; 64GB ≒ 34B; 128GB+는 70B 퀀트에 닿을 수 있습니다. 메모리는 VRAM입니다. 구매하기 전에 구성하세요."
        }
      ],
      deviceStorageTiers: [
        {
          verdict: "클라우드 전용 사용자만 해당. OS + 앱은 이를 빠르게 채웁니다. 권장되지 않습니다."
        },
        {
          verdict: "입국 시 벌금이 부과됩니다. 일부 AI 앱은 여유 공간이 거의 없으므로 자주 정리해야 합니다."
        },
        {
          verdict: "주류 추천. 개발 환경, 모델 캐시 및 자산 라이브러리에 충분합니다."
        },
        {
          verdict: "로컬 모델 라이브러리, 4K 미디어, 여러 VM - 작성자 및 엔지니어 기본값."
        }
      ],
      deviceAiBoxes: {
        "dgx-spark": {
          title: "엔비디아 DGX 스파크",
          budget: "대략. $3,150~4,570",
          form: "데스크탑 AI 슈퍼컴퓨터 박스 (150×150×50 mm)",
          os: "엔비디아 DGX OS(리눅스)",
          bestFor: "로컬 에이전트와 대형 모델을 책상에 두고 싶어하는 AI 엔지니어, 연구원, 개발자",
          tradeoff: "Arm 아키텍처 및 비교적 폐쇄적인 스택 - 일부 x86/Windows 도구에는 이식이 필요합니다. 주요 시장 이외의 가용성 및 지원은 다양합니다. 가격 인상 후 DIY RTX 5090 빌드와 가치를 비교하세요.",
          vsDiy: "DIY 128GB 워크스테이션과 비교: DGX Spark는 더 작고, 전체 소프트웨어 스택과 함께 제공되며, 큰 모델을 즉시 실행합니다. 자체 제작된 Windows/Linux 듀얼 GPU 장비에는 더 많은 CUDA 튜토리얼과 장기간 작업을 위한 교체 가능한 GPU가 있습니다.",
          specs: {
            chip: "GB10: 20코어 Arm + Blackwell GPU, 5세대 Tensor 코어",
            memory: "128GB LPDDR5x 통합 메모리(공유 CPU/GPU)",
            storage: "최대 1PFLOP(FP4); ConnectX-7 200Gbps",
            aiCompute: "최대 1PFLOP(FP4); ConnectX-7 200Gbps",
            networking: "10GbE + Wi-Fi 7; 듀얼 유닛 링크는 최대 405B급 모델로 확장됩니다."
          },
          capabilities: {
            inference: "단일 장치: 최대 ~200B 매개변수",
            finetune: "최대 70B 매개변수까지 미세 조정",
            agents: "사전 설치된 NIM, TensorRT, NemoClaw/OpenShell 에이전트 스택"
          },
          reasoning: [
            "\"세계에서 가장 작은 AI 슈퍼컴퓨터\"로 포지셔닝 - 책상 위 1.2kg, 최대 240W, 풀 타워보다 훨씬 조용함",
            "128GB 통합 메모리는 소비자 GPU의 오프로드 댄스 없이 전체 모델 무게를 로드합니다.",
            "DGX OS + NVIDIA AI 스택은 첫 번째 부팅 시 준비됨 - CUDA/드라이버/컨테이너 설정 건너뛰기",
            "GB10 OEM 에코시스템(동일 칩)"
          ],
          oemVariants: []
        },
        "gb10-oem": {
          title: "GB10 OEM 에코시스템(동일 칩)",
          budget: "대략. $3,150~5,000",
          form: "브랜드 AI 미니 워크스테이션",
          os: "DGX OS 또는 공급업체 맞춤형 Linux",
          bestFor: "GB10 컴퓨팅을 원하지만 기업 조달 및 브랜드 지원을 선호하는 팀",
          tradeoff: "이 또는 DGX Spark 중 하나를 선택하십시오. 둘 다 필요하지 않습니다. 이미 IT 공급업체 계약을 맺은 경우 먼저 OEM에 문의하세요. 개별 개발자는 일반적으로 DGX Spark가 더 간단하다고 생각합니다.",
          vsDiy: "이 또는 DGX Spark 중 하나를 선택하십시오. 둘 다 필요하지 않습니다. 이미 IT 공급업체 계약을 맺은 경우 먼저 OEM에 문의하세요. 개별 개발자는 일반적으로 DGX Spark가 더 간단하다고 생각합니다.",
          specs: {
            chip: "DGX Spark와 동일한 GB10 Superchip",
            memory: "128GB 통합 메모리",
            storage: "2~4TB NVMe(브랜드에 따라 다름)",
            aiCompute: "DGX Spark와 동일한 클래스, ~1 PFLOP FP4",
            networking: "대부분은 고속 이더넷을 포함합니다. 일부 모델은 더욱 풍부한 확장성을 제공합니다."
          },
          capabilities: {
            inference: "DGX Spark와 동일, 최대 200B 매개변수",
            finetune: "~70B 매개변수 미세 조정",
            agents: "NVIDIA AI Enterprise/NIM 지원은 공급업체 번들에 따라 다름"
          },
          reasoning: [
            "ASUS Ascent GX10, HP ZGX Nano, Dell Pro Max, Lenovo, Acer Veriton GN100, GIGABYTE AI TOP ATOM, MSI 등은 GB10을 사용합니다.",
            "컴퓨팅은 DGX Spark와 일치합니다. 차이점은 섀시 냉각, 포트, 보증 및 사전 설치 서비스입니다.",
            "기업 구매자는 표준 IT 조달 및 자산 관리를 실행할 수 있습니다.",
            "NVIDIA CUDA를 사용했지만 서버룸을 구축하고 싶지 않을 때 가장 좋습니다."
          ],
          oemVariants: [
            "ASUS 어센트 GX10",
            "HP ZGX 나노",
            "델 프로 맥스",
            "Lenovo AI 워크스테이션",
            "에이서 베리톤 GN100",
            "기가바이트 AI 탑 아톰",
            "MSI AI 데스크탑"
          ]
        },
        "ryzen-ai-halo": {
          title: "AMD Ryzen AI Halo · 128GB 미니 PC",
          budget: "대략. $2,000~4,000",
          form: "미니 AI PC(~193×186×77mm)",
          os: "윈도우 11 프로/우분투",
          bestFor: "DGX Spark 가격보다 낮은 128GB 로컬 LLM을 원하는 고급 학습자 및 인디 개발자",
          tradeoff: "CUDA가 없습니다. PyTorch ROCm은 여전히 ​​NVIDIA보다 약합니다. RAM은 납땜되어 있습니다. 타사 미니 PC 지원 및 QC는 브랜드에 따라 다릅니다.",
          vsDiy: "DIY 128GB DDR5 데스크탑과 비교: Halo 박스는 관리되는 전력으로 인해 더 작습니다. DIY를 사용하면 3~5년 내에 더 많은 여유 공간을 확보하여 GPU 교체 및 RAM 업그레이드가 가능합니다. vs DGX Spark: AMD는 저렴하고 Windows에 적합하지만 대형 모델 튜닝 및 공식 스택은 덜 완전합니다.",
          specs: {
            chip: "16코어/32스레드 Zen 5, 최대 5.1GHz; 50탑스 NPU",
            memory: "64/128GB LPDDR5X 8000MHz 납땜 통합 메모리",
            storage: "2~4TB PCIe 4.0 SSD; 최대 16TB까지 확장 가능한 듀얼 M.2",
            aiCompute: "라데온 8060S 40CU RDNA 3.5; 전체 SoC ~126 TOPS",
            networking: "2.5GbE + Wi-Fi 7 + 듀얼 USB4"
          },
          capabilities: {
            inference: "128GB 모델: 70B 퀀트, Qwen3 235B 퀀트, Llama4 109B 등",
            finetune: "가벼운 LoRA가 가능합니다. 대규모 교육은 여전히 ​​클라우드에 속합니다",
            agents: "OpenClaw, 지역 지식 베이스, LM Studio / Ollama"
          },
          reasoning: [
            "AMD의 Ryzen AI Halo 라인 - Strix Halo는 CPU, iGPU, NPU 및 대용량 메모리를 미니 섀시에 담았습니다.",
            "GMKtec EVO-X2 및 Geekom A9 Max와 같은 128GB 구성은 GB10 상자보다 훨씬 아래인 ~$2,000 계층에 위치합니다.",
            "즉시 사용 가능한 Windows; Ollama / LM Studio / llama.cpp는 빠르게 채택됩니다.",
            "RDNA iGPU는 게임 및 가벼운 ComfyUI 이미지 작업도 처리합니다. 하나의 시스템, 다양한 역할"
          ],
          oemVariants: [
            "GMKtec EVO-X2",
            "긱콤 A9 맥스",
            "Minisforum 및 기타 Strix Halo 모델"
          ]
        },
        "dual-dgx-spark": {
          title: "듀얼 DGX Spark 클러스터",
          budget: "데스크톱 장치 2개 + 고속 상호 연결",
          form: "데스크톱 장치 2개 + 고속 상호 연결",
          os: "엔비디아 DGX OS",
          bestFor: "클라우드 없이 대규모 로컬 모델이 필요한 연구 그룹, AI 기반 스타트업 및 엣지 케이스",
          tradeoff: "총 비용은 고급 Mac Pro에 가깝습니다. 여전히 클러스터 소프트웨어를 유지 관리하고 있습니다. 이는 개별 학습자의 최대 99%에게 과잉입니다.",
          vsDiy: "4×4090 서버와 비교: 듀얼 Spark는 더 조용하고 전력 소모가 적으며 책상에 적합합니다. 다중 GPU x86 리그는 더 높은 훈련 처리량과 성숙한 중고 GPU 시장을 제공합니다.",
          specs: {
            chip: "ConnectX 고속 네트워킹을 통해 연결된 2개의 GB10 장치",
            memory: "256GB 통합 메모리 풀(128GB × 2)",
            storage: "8TB NVMe 결합(4TB × 2)",
            aiCompute: "~2PFLOP FP4 결합",
            networking: "ConnectX-7 200Gbps 노드 간 링크"
          },
          capabilities: {
            inference: "최대 405B 매개변수 모델 추론",
            finetune: "대규모 분산 미세 조정 실험",
            agents: "다중 에이전트 병렬 처리, 매우 큰 컨텍스트 라우팅"
          },
          reasoning: [
            "NVIDIA는 공식적으로 두 개의 DGX Spark 장치 연결을 지원하여 단일 상자 최대 200B 추론 한도를 깨뜨렸습니다.",
            "~400B급 실험을 포괄하면서 DGX Station 하나보다 훨씬 저렴합니다.",
            "개인 대형 모델 검증을 위한 책상 옆의 \"데스크톱 기계실\"",
            "클러스터되지 않은 경우 각 상자는 추론용으로 하나, 미세 조정용으로 하나 역할을 분할할 수 있습니다."
          ],
          oemVariants: []
        }
      },
      devicePresets: {
        "cloud-starter": {
          title: "클라우드 학습 스타터",
          budget: "대략. $570~860",
          form: "울트라북",
          os: "윈도우 또는 macOS",
          bestFor: "이 사이트의 7일 과정 완료, 일일 ChatGPT/Claude 학습, 사무실 글쓰기",
          reasoning: [
            "~90%의 학습이 브라우저와 앱에서 이루어지며 로컬 컴퓨팅이 필요하지 않습니다.",
            "16GB는 많은 탭과 AI 클라이언트의 반응성을 유지합니다.",
            "울트라북은 도서관, 카페 등 어디든 휴대 가능합니다.",
            "먼저 AI 도구 구독의 1~2개월 예산을 절약하세요."
          ],
          tradeoff: "로컬 모델이나 SD 이미지 생성에는 적합하지 않습니다. 무거운 다중 저장소 코딩이 빡빡하게 느껴질 수 있습니다.",
          specs: {
            gpu: "통합 그래픽"
          }
        },
        "coding-mac": {
          title: "코딩 + Apple 생태계",
          budget: "대략. $1,290~2,000",
          form: "맥북 에어 / 프로",
          os: "macOS",
          bestFor: "커서 개발, iOS 학습, Apple 기기 시너지, 클라우드 AI를 메인 엔진으로",
          reasoning: [
            "M 시리즈 칩은 긴 배터리 수명으로 빠르게 컴파일되며 뛰어난 모바일 코딩 기능을 제공합니다.",
            "iPhone/iPad를 통한 Handoff로 연구 및 앱 테스트가 원활하게 진행됩니다.",
            "iPhone/iPad를 통한 Handoff로 연구 및 앱 테스트가 원활하게 진행됩니다.",
            "전체 Apple 툴체인: Final Cut, Keynote 등"
          ],
          tradeoff: "달러당 GPU 컴퓨팅은 동일한 가격으로 Windows보다 뒤떨어집니다. CUDA 도구를 사용할 수 없습니다.",
          specs: {
            ram: "24~36GB 통합 메모리",
            gpu: "통합 그래픽(통합 메모리)",
            storage: "512GB~1TB"
          }
        },
        "coding-win": {
          title: "AI 코딩의 일꾼",
          budget: "대략. $1,000~1,430",
          form: "Windows 노트북/컴팩트 데스크탑",
          os: "윈도우 11",
          bestFor: "커서, VS Code, Docker, 다중 저장소 AI 지원 개발",
          reasoning: [
            "32GB는 AI 코딩을 위한 \"후회 없는\" 라인입니다. 많은 저장소 + 브라우저 + AI가 함께 사용됩니다.",
            "Windows는 엔터프라이즈 개발 환경과 다양한 CLI 도구에 적합합니다.",
            "옵션 RTX 4050 구성으로 가벼운 로컬 모델 기능 추가",
            "WSL, Docker 이미지 및 다중 Node/Python 환경을 위한 1TB SSD"
          ],
          tradeoff: "개별 GPU 버전은 더 무겁고 가격이 더 비쌉니다. 통합 그래픽은 로컬 AI를 제한합니다.",
          specs: {
            gpu: "통합 그래픽 또는 RTX 4050"
          }
        },
        "local-ai": {
          title: "대략. $1,710~2,570",
          budget: "대략. $1,710~2,570",
          form: "Windows 데스크톱/게임용 노트북",
          os: "윈도우 11",
          bestFor: "Ollama 로컬 모델, ComfyUI 이미지 생성, AI 부수입 프로젝트",
          reasoning: [
            "RTX 4060 Ti 16GB는 2026년 로컬 AI 가치의 왕입니다. SDXL 및 13B에 충분한 VRAM입니다.",
            "32GB 시스템 RAM은 모델을 로드할 때 여유 공간을 남깁니다.",
            "데스크탑의 냉각 성능이 향상됨 - 조절 없이 추론이 지속됨",
            "유사한 컴퓨팅에서는 Mac보다 저렴합니다. CUDA 튜토리얼은 어디에나 있습니다"
          ],
          tradeoff: "휴대용이 아닙니다. 더 높은 전력 소모; 노트북 구성은 장시간 로드 시 스로틀됩니다."
        },
        "creator-pro": {
          title: "창의적인 제작",
          budget: "대략. $2,570~4,290",
          form: "MacBook Pro / Windows 크리에이터 노트북",
          os: "맥OS/윈도우",
          bestFor: "AI 영상, 배치 이미지 생성, 팟캐스트 편집, 70B급 로컬 모델 실험",
          reasoning: [
            "64GB부터 34B 퀀트를 실행할 수 있습니다. 128GB Studio Ultra는 최대 70B 로컬 추론에 도달합니다.",
            "모델 가중치, 미디어 라이브러리 및 프로젝트 아카이브용 2TB",
            "Mac에서는 나중에 업그레이드할 필요 없이 3년 동안 메모리를 구성하세요. Windows에서는 RTX 4070+를 선택하세요.",
            "여기서 배운 내용을 콘텐츠나 디자인 측면의 수입으로 전환하세요"
          ],
          tradeoff: "높은 가격; 초보자는 구매하기 전에 클라우드에서 방향을 확인해야 합니다.",
          specs: {
            ram: "64~128GB 통합 메모리 / 64GB+",
            gpu: "고성능 메모리 통합 / RTX 4070+"
          }
        },
        "desktop-value": {
          title: "데스크탑 가치 구축",
          budget: "대략. $1,140~1,710",
          form: "예산이 부족하지만 나중에 업그레이드할 여지가 있는 완전한 로컬 AI 취향",
          os: "윈도우 11",
          bestFor: "예산이 부족하지만 나중에 업그레이드할 여지가 있는 완전한 로컬 AI 취향",
          reasoning: [
            "데스크탑은 달러당 가장 많은 컴퓨팅 성능을 제공합니다. GPU와 RAM은 업그레이드 가능",
            "RTX 4060 8GB는 보급형 SD 및 7B 모델에 충분합니다.",
            "ComfyUI 및 Ollama 실험을 통한 고정형 가정 학습에 이상적",
            "ComfyUI 및 Ollama 실험을 통한 고정형 가정 학습에 이상적"
          ],
          tradeoff: "모바일이 아닙니다. 일부 조립 및 유지 관리 노하우가 도움이 됩니다."
        },
        "luxury-mbp": {
          title: "모바일 플래그십 · MacBook Pro",
          budget: "대략. $6,430~9,710",
          form: "맥북 프로 16\"",
          os: "macOS",
          bestFor: "이동 중 34B~70B 실험, 모바일 편집, 여행 중 데모",
          reasoning: [
            "M4 Max는 강력한 단일 및 다중 코어입니다. 커서+파이널컷+올라마 함께해도 괜찮습니다",
            "M4 Max는 강력한 단일 및 다중 코어입니다. 커서+파이널컷+올라마 함께해도 괜찮습니다",
            "자주 비행기를 타고 여러 도시에서 일하는 창립자와 크리에이티브 디렉터를 위해 제작되었습니다.",
            "집에 Pro Display XDR을 추가하면 데스크 워크스테이션으로 변신"
          ],
          tradeoff: "매우 높은 프리미엄; 열은 여전히 ​​데스크탑을 뒤쫓고 있습니다. 70B를 오랫동안 실행하면 속도가 느려집니다.",
          specs: {
            ram: "64~128GB 통합 메모리",
            gpu: "통합 그래픽(통합 메모리)",
            storage: "2~4TB SSD"
          }
        },
        "luxury-studio": {
          title: "데스크탑 플래그십 · Mac Studio Ultra",
          budget: "대략. $11,430~17,140",
          form: "맥 스튜디오",
          os: "macOS",
          bestFor: "개인용 AI 창작 스튜디오, 70B 로컬 추론, 조용한 고사양 데스크탑",
          reasoning: [
            "128GB는 대부분의 AI 전문가에게 Apple의 \"최적의 최적 공간\"입니다. Mac Pro 가격을 제외하면 70B 용량입니다.",
            "작고 소음이 거의 없는 섀시 - 책상 위의 우아함과 수냉식 타워 비교",
            "MLX + Ollama 생태계는 무거운 Apple 가구를 위해 성숙해졌습니다.",
            "Mac Pro보다 훨씬 적은 비용으로 로컬 AI 사용 사례의 최대 90%를 처리합니다."
          ],
          tradeoff: "메모리와 스토리지는 BTO이며 고정되어 있습니다. CUDA가 없습니다. 일부 연구 도구에는 해결 방법이 필요합니다.",
          specs: {
            ram: "128~192GB 통합 메모리",
            gpu: "통합 그래픽(60코어 GPU)",
            storage: "2~4TB SSD"
          }
        },
        "luxury-macpro": {
          title: "대략. $25,700~64,300",
          budget: "대략. $25,700~64,300",
          form: "맥 프로 타워",
          os: "macOS",
          bestFor: "영화 스튜디오, AI 기반 팀, 개인 대형 모델, 멀티 스트림 8K",
          reasoning: [
            "512GB 통합 메모리는 여러 대형 모델이 동시에 상주하는 소비자 장치 중에서 고유합니다.",
            "클라우드를 거부하지만 데이터 센터급 RAM이 필요한 팀용",
            "After Effects + ComfyUI + 로컬 70B 보조자 순환",
            "Apple 생태계 내부의 상태 기호 - 선반 장식이 아닌 실제 처리량 포함"
          ],
          tradeoff: "극단적인 가격; M2 Ultra는 비슷한 가격의 NVIDIA 클러스터와 비교하여 원시 컴퓨팅을 위한 M4보다 한 세대 뒤처진 제품입니다.",
          specs: {
            ram: "256~512GB 통합 메모리",
            gpu: "통합 그래픽(76코어 GPU)",
            storage: "4~8TB SSD"
          }
        },
        "luxury-dual-gpu": {
          title: "듀얼 GPU 야수 · NVIDIA 워크스테이션",
          budget: "대략. $11,430~25,700",
          form: "풀 타워 워크스테이션",
          os: "윈도우 11/리눅스",
          bestFor: "CUDA 고급 사용자, LoRA 교육, 다중 ComfyUI 파이프라인, 로컬 모델 미세 조정",
          reasoning: [
            "듀얼 4090 = 48GB VRAM 풀 - 병렬 SDXL/FLUX 워크플로우는 단일 카드의 약 2배입니다.",
            "128GB 시스템 RAM + 대형 VRAM은 Windows 로컬 AI의 한계입니다.",
            "Ollama, ComfyUI 및 PyTorch 튜토리얼은 여기에서 가장 풍부합니다. 엔지니어가 가장 좋아하는 것입니다.",
            "GPU를 교체하고 나중에 RAM을 확장하세요. Apple보다 더 \"조정 가능\"합니다."
          ],
          tradeoff: "시끄럽고 전력 소모가 많으며 책상을 가득 채웁니다. 운전자와 환경은 지속적인 관리가 필요합니다.",
          specs: {
            gpu: "2× RTX 4090 24GB 또는 2× RTX 5090",
            storage: "4TB NVMe RAID"
          }
        },
        "luxury-apple-win": {
          title: "이중 설정 · Mac + Windows",
          budget: "대략. $21,430~40,000",
          form: "Mac Studio + Windows 타워",
          os: "맥OS + 윈도우",
          bestFor: "Mac은 일상적인 창의적인 작업, 이동성, Final Cut 및 MLX 조명 추론을 처리합니다.",
          reasoning: [
            "Mac은 일상적인 창의적인 작업, 이동성, Final Cut 및 MLX 조명 추론을 처리합니다.",
            "Windows 타워는 ComfyUI 배치, CUDA 교육 및 게임을 실행합니다.",
            "NAS 또는 10GbE LAN은 모델과 미디어를 공유하며 중복되지 않고 보완적입니다.",
            "실제 AI 스튜디오가 몇 개나 되는가: 하나의 옴니 머신이 아니라 명확한 업무 분업"
          ],
          tradeoff: "총 비용이 가장 높습니다. 대부분의 사람들이 필요로 하는 것보다 훨씬 더 많은 케이블 및 동기화 오버헤드를 제공합니다.",
          specs: {
            ram: "128GB + 128GB",
            gpu: "Apple 통합 + RTX 4090",
            storage: "각 4TB"
          }
        }
      },
      deviceSubsections: {
        needs: {
          title: "① 주요 사용 사례부터 시작하세요.",
          desc: "② 윈도우즈인가, macOS인가?"
        },
        os: {
          title: "② 윈도우즈인가, macOS인가?",
          desc: "어느 쪽도 보편적으로 더 나은 것은 없습니다. 소프트웨어 생태계와 AI 로드맵을 일치시키세요."
        },
        memory: {
          title: "③ RAM은 얼마나 되나요?",
          desc: "④ 어떤 GPU 계층인가요?"
        },
        gpu: {
          title: "④ 어떤 GPU 계층인가요?",
          desc: "클라우드 전용 학습자는 개별 GPU를 무시할 수 있습니다. 로컬 이미지 생성 및 모델에는 심각한 VRAM이 필요합니다."
        },
        storage: {
          title: "⑤ 저장용량",
          desc: ""
        },
        aiBoxes: {
          title: "⑥ 전용 AI 컴퓨팅 박스",
          desc: ""
        },
        presets: {
          title: "7 권장 구성",
          desc: "항목부터 <strong>절충 없는 빌드</strong>까지—빠르게 필터링하려면 위의 \"절충 없음\"을 선택하세요. 각각은 누구를 위한 것인지, 왜 이런 방식으로 구성되었는지, 그리고 장단점을 설명합니다."
        }
      },
      deviceFieldLabels: {
        chooseWhen: "그것을 선택하는 경우",
        avoidWhen: "건너뛸 때",
        aiNotePrefix: "AI 학습 팁:",
        commonModels: "일반적인 모델:",
        suitable: "가장 적합한 대상:",
        aiCapability: "AI 기능:",
        recommendedApps: "추천 앱",
        forWho: "가장 적합한 대상:",
        canDo: "할 수 있는 일:",
        cannotDo: "어려움을 겪습니다 / 할 수 없습니다:",
        examples: "하드웨어 예시:",
        ram: "메모리",
        gpu: "GPU",
        storage: "저장",
        needResultPrefix: "권장 초점:",
        needResultEmpty: "아직 없음",
        weekN: "주 {n}",
        focusThisWeek: "이번주 집중",
        practice1: "연습 2",
        practice2: "연습 2"
      }
  });
})();
