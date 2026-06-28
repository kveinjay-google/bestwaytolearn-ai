/* KO overlays — tools-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('ko', {
    toolsNav: {
        meta: {
          lead: "사용 사례별로 신뢰할 수 있는 AI 도구를 찾아보고 공식 사이트로 이동하세요. \"여기에 추천\" 태그가 붙은 항목은 커리큘럼 앱 가이드에 포함되어 있습니다.",
          searchPlaceholder: "검색 도구…",
          featuredBadge: "여기에 특집",
          countLabel: "{n} 도구",
          totalLabel: "{n} 도구 · {c} 카테고리",
          empty: "일치하는 도구가 없습니다. 다른 키워드를 사용해 보세요.",
          openSite: "사이트 열기"
        },
        categories: {
          "对话助手": "채팅 도우미",
          "编程开发": "코딩 및 개발",
          "图像创作": "이미지 생성",
          "视频音频": "비디오 및 오디오",
          "办公效率": "생산력",
          "搜索研究": "검색 및 연구",
          "Agent 自动化": "에이전트 및 자동화",
          "设计原型": "디자인 및 프로토타이핑",
          "营销写作": "마케팅 및 글쓰기",
          "本地与开源": "로컬 및 오픈 소스"
        },
        tools: {
          Poe: {
            desc: "다중 모델 채팅 허브 — 하나의 계정에서 GPT, Claude, Gemini 전환"
          },
          "Meta AI": {
            desc: "Instagram/WhatsApp에 연결된 메타 어시스턴트"
          },
          "Character.AI": {
            desc: "역할극 및 페르소나 채팅 커뮤니티"
          },
          "腾讯混元": {
            name: "텐센트 훈위안",
            desc: "중국어 채팅 및 다중 모드 생성을 위한 Tencent LLM"
          },
          "讯飞星火": {
            name: "아이플라이텍 스파크",
            desc: "음성 및 사무 작업 흐름에 강력한 iFlytek 모델"
          },
          "天工 AI": {
            name: "스카이워크 AI",
            desc: "Kunlun 검색 증강 Q&A 및 다중 모드 채팅"
          },
          "智谱清言": {
            name: "채팅GLM",
            desc: "Zhipu GLM 공식 채팅 및 개방형 모델 생태계"
          },
          Replit: {
            desc: "브라우저 내 풀 스택 개발 및 AI 에이전트 배포"
          },
          Lovable: {
            desc: "풀스택 웹 앱에 대한 자연어"
          },
          v0: {
            desc: "Gemini API 플레이그라운드 및 프로토타이핑"
          },
          "Google AI Studio": {
            desc: "Gemini API 플레이그라운드 및 프로토타이핑"
          },
          "Hugging Face": {
            desc: "공개 모델, Spaces 데모, 데이터세트"
          },
          Replicate: {
            desc: "API를 통해 개방형 모델 실행, 통화당 지불"
          },
          Tabnine: {
            desc: "Enterprise AI 코드 완성, 비공개 배포"
          },
          "JetBrains AI": {
            desc: "JetBrains IDE에 내장된 AI 도우미"
          },
          "Sourcegraph Cody": {
            desc: "코드베이스 인식 AI 코딩 도우미"
          },
          "Leonardo.ai": {
            desc: "게임 및 컨셉 아트 생성"
          },
          Ideogram: {
            desc: "AI 이미지의 강력한 텍스트 렌더링"
          },
          "Adobe Firefly": {
            desc: "상업용으로 안전한 Adobe 생성 이미지"
          },
          "即梦 AI": {
            name: "지멩 AI",
            desc: "ByteDance 이미지 생성, 중국 친화적"
          },
          LiblibAI: {
            desc: "중국 SD 모델 허브 및 온라인 생성"
          },
          Civitai: {
            desc: "최대 규모의 SD/LoRA 모델 커뮤니티"
          },
          Recraft: {
            desc: "벡터 및 브랜드 AI 디자인"
          },
          Canva: {
            desc: "소셜 및 마케팅 디자인을 위한 Magic Studio"
          },
          Pika: {
            desc: "양식화된 짧은 비디오 생성"
          },
          "Luma Dream Machine": {
            desc: "AI 아바타와 다국어 립싱크 영상"
          },
          HeyGen: {
            desc: "AI 아바타와 다국어 립싱크 영상"
          },
          Descript: {
            desc: "텍스트를 편집하여 오디오/비디오 편집"
          },
          Udio: {
            desc: "캡컷"
          },
          "剪映 CapCut": {
            name: "캡컷",
            desc: "AI 캡션 및 효과가 포함된 ByteDance 편집기"
          },
          Vidu: {
            desc: "Shengshu 텍스트-비디오, 중국어 프롬프트"
          },
          PixVerse: {
            desc: "템플릿과 효과가 포함된 AI 비디오"
          },
          "海螺 AI": {
            name: "MiniMax 음성 및 비디오 플랫폼",
            desc: "MiniMax 음성 및 비디오 플랫폼"
          },
          Tome: {
            desc: "내러티브 AI 슬라이드 데크"
          },
          "Beautiful.ai": {
            desc: "스마트 레이아웃 프레젠테이션"
          },
          "飞书": {
            name: "종달새 / 페이슈",
            desc: "AI 부조종사가 포함된 ByteDance 제품군"
          },
          "WPS AI": {
            desc: "Kingsoft WPS AI 작성 및 스프레드시트"
          },
          Grammarly: {
            desc: "영어 문법, 어조, 명확성"
          },
          "Slack AI": {
            desc: "채널 요약 및 워크플로 AI"
          },
          "钉钉 AI": {
            name: "딩톡 AI",
            desc: "AI 비서와의 기업 협업"
          },
          Consensus: {
            desc: "인용을 통한 학술 논문 검색"
          },
          Elicit: {
            desc: "문헌 검토 및 논문 추출"
          },
          "You.com": {
            desc: "여러 모델을 사용한 AI 검색"
          },
          Phind: {
            desc: "개발자 중심 AI 검색"
          },
          "夸克 AI": {
            name: "쿼크 AI",
            desc: "Alibaba Quark 브라우저 AI 검색"
          },
          Flowise: {
            desc: "자체 호스팅 가능한 Visual LLM 앱"
          },
          LangChain: {
            desc: "LLM 앱 프레임워크 및 LangSmith"
          },
          CrewAI: {
            desc: "다중 에이전트 오케스트레이션 프레임워크"
          },
          Zapier: {
            desc: "AI 자동화로 7000개 이상의 앱 연결"
          },
          Make: {
            desc: "AI 모듈을 통한 시각적 자동화"
          },
          FastGPT: {
            desc: "개방형 지식 기반 Q&A 워크플로"
          },
          Figma: {
            desc: "UI, 카피, 프로토타입을 위한 Figma AI"
          },
          Framer: {
            desc: "AI 지원 사이트 및 모션"
          },
          Uizard: {
            desc: "UI 프로토타입에 대한 스케치/스크린샷"
          },
          Motiff: {
            desc: "AI 기반 UI 디자인 도구"
          },
          Relume: {
            desc: "AI 사이트맵 및 와이어프레임"
          },
          Jasper: {
            desc: "브랜드 마케팅 및 SEO 카피"
          },
          "Copy.ai": {
            desc: "대규모 광고, 이메일, 소셜 카피"
          },
          Writesonic: {
            desc: "SEO 기사 및 랜딩 페이지"
          },
          Sudowrite: {
            desc: "소설 및 창작 지원"
          },
          Ollama: {
            desc: "Llama, Qwen 등을 로컬에서 실행"
          },
          "LM Studio": {
            desc: "로컬 LLM 채팅용 GUI"
          },
          ComfyUI: {
            desc: "Ollama용 자체 호스팅 채팅 UI"
          },
          "Open WebUI": {
            desc: "Ollama용 자체 호스팅 채팅 UI"
          },
          LocalAI: {
            desc: "로컬 OpenAI 호환 API 서버"
          },
          OpenRouter: {
            desc: "LLM 제공업체 전반에 걸친 통합 API 라우팅"
          }
        }
      },
      strings: {
        nav: {
          toolsNav: "AI 허브 찾아보기(100개 이상의 도구) →",
          aiToolsNav: "AI 허브 찾아보기(100개 이상의 도구) →"
        },
        aiNavPage: {
          linkDirectory: "AI 허브 찾아보기(100개 이상의 도구) →"
        }
      }
  });
})();
