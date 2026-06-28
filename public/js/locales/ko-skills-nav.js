/* KO overlays — skills-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('ko', {
    skillsNav: {
        meta: {
          lead: "1,000개 이상의 별을 받은 선별된 GitHub 에이전트 기술 — 비디오 편집 및 생성, 전자 상거래, Xiaohongshu, 마케팅, SEO 등. 각 항목에는 설치 명령, 호환 가능한 에이전트 및 저장소 링크가 포함됩니다.",
          searchPlaceholder: "__T0__ 기술",
          countLabel: "{n} 기술",
          totalLabel: "{n} 기술 · {c} 카테고리",
          empty: "어울리는 스킬이 없습니다. 다른 키워드를 사용해 보세요.",
          copyCmd: "복사 명령",
          openGithub: "GitHub",
          starsLabel: "{n} ★",
          agentsLabel: "함께 작동"
        },
        categories: {
          "Skill 安装与合集": "설치 프로그램 및 컬렉션",
          "编程开发": "공학",
          "前端与设计": "프런트엔드 및 디자인",
          "视频剪辑与生成": "비디오 편집 및 생성",
          "跨境电商与电商": "국경 간 및 전자 상거래",
          "小红书与内容运营": "XHS 및 크리에이터 운영",
          "营销与 SEO": "마케팅 및 SEO",
          "内容写作": "글쓰기 및 콘텐츠",
          "调研搜索": "연구 및 검색",
          "产品运营": "제품 및 운영",
          "安全审计": "보안 감사",
          "科研学术": "브라우저 자동화",
          "浏览器自动化": "브라우저 자동화",
          "知识管理": "사무실 문서",
          "办公文档": "사무실 문서",
          "财务金融": "재원"
        },
        items: {
          "skills CLI": {
            name: "스킬 CLI",
            desc: "68개 이상의 코딩 에이전트를 위한 Vercel 개방형 설치 프로그램 — npx 기술 추가를 통해 GitHub 기술을 설치합니다.",
            installNote: "공식 Anthropic 데모: 크리에이티브, 개발, 기업 커뮤니케이션 및 문서 기술(DOCX/PDF/PPTX/XLSX)."
          },
          "Anthropic Skills": {
            desc: "공식 Anthropic 데모: 크리에이티브, 개발, 기업 커뮤니케이션 및 문서 기술(DOCX/PDF/PPTX/XLSX).",
            installNote: "클로드 코드: /플러그인 마켓플레이스 인류학/기술 추가"
          },
          "Antigravity Awesome Skills": {
            desc: "웹, 보안, 데이터, DevOps, QA 및 마케팅 번들을 포함하는 1,600개 이상의 설치 가능한 기술.",
            installNote: "클로드 코드: npx antigravity-awesome-skills --claude"
          },
          "Claude Skills 大全": {
            name: "클로드 스킬 팩",
            desc: "엔지니어링, 마케팅, 제품, 규정 준수, 재무 전반에 걸쳐 337개의 기술과 70개 이상의 명령이 있습니다."
          },
          "Claude Skills 大全 (营销)": {
            name: "클로드 스킬 팩(마케팅)",
            desc: "마케팅, 브랜드, 콘텐츠, 성장 실험 템플릿 등 337가지 스킬."
          },
          "Claude Skills 大全 (财务)": {
            name: "클로드 스킬 팩(금융)",
            desc: "재무 모델링, 예산 책정, 자금 조달, 규정 준수 보고서 템플릿을 포함한 337개 기술."
          },
          "Awesome Agent Skills": {
            desc: "VoltAgent가 선별한 1,000개 이상의 공식 및 커뮤니티 기술 인덱스.",
            installNote: "먼저 찾기로 검색한 다음 npx 기술에 <repo>을 추가합니다."
          },
          "Agent Skills 规范": {
            name: "상담원 기술 사양",
            desc: "공식 개방형 표준(agentskills.io) 및 SKILL.md 형식 문서.",
            installNote: "새로운 사양 준수 기술의 비계"
          },
          Superpowers: {
            desc: "상위 에이전트 개발 방법론: 브레인스토밍 → 설계 검토 → TDD 계획 → 하위 에이전트 중심 실행.",
            installNote: "커서: /add-plugin superpowers · 코덱스: /plugins → superpowers"
          },
          OpenMontage: {
            desc: "오픈 소스 에이전트 비디오 스튜디오: 12개 파이프라인, 52개 도구, 500개 이상의 기술 — FFmpeg, Remotion, TTS 및 T2V를 사용한 최종 컷 스크립트.",
            installNote: "HKU 에이전트 비디오 프레임워크: 하나의 자동화된 파이프라인에 감독, 시나리오 작가, 프로듀서, 생성자가 포함됩니다."
          },
          ViMax: {
            desc: "HKU 에이전트 비디오 프레임워크: 하나의 자동화된 파이프라인에 감독, 시나리오 작가, 프로듀서, 생성자가 포함됩니다."
          },
          "Remotion Skills": {
            desc: "Pika AI 비디오 생성: 텍스트를 비디오로, 이미지를 비디오로, 창의적인 단편 및 광고 컨셉을 위한 스타일화된 효과."
          },
          "Pika Skills": {
            desc: "Pika AI 비디오 생성: 텍스트를 비디오로, 이미지를 비디오로, 창의적인 단편 및 광고 컨셉을 위한 스타일화된 효과."
          },
          "Google Gemini 视频生成": {
            name: "Google Gemini 비디오 생성",
            desc: "Veo 비디오 모델에 media_generation 하위 기술 사용",
            installNote: "Veo 비디오 모델에 media_generation 하위 기술 사용"
          },
          "OpenAI Codex 多媒体": {
            name: "OpenAI 코덱스 멀티미디어",
            desc: "imagegen, sora 및 기타 멀티미디어 생성 하위 기술이 포함된 공식 Codex 기술 카탈로그입니다.",
            installNote: "Codex의 /skills를 통해 선별된 하위 기술을 찾아보세요."
          },
          "Marketing Skills (视频)": {
            name: "마케팅 기술(비디오)",
            desc: "비디오 하위 기술: 짧은 비디오 스크립트, 광고 구조, 소셜 ​​비디오 전략 및 전환 문구."
          },
          "Social Media Skills (短视频)": {
            name: "소셜 미디어 기술(짧은 비디오)",
            desc: "TikTok/Reels를 위한 짧은 비디오 스크립트, 주제 계획, 스토리보드 리듬 및 크로스 플랫폼 콘텐츠 달력입니다."
          },
          "Claude SEO (电商)": {
            name: "클로드 SEO(전자상거래)",
            desc: "전자상거래 SEO 하위 기술: 카테고리 페이지, 제품 스키마, hreflang 및 전환 랜딩 페이지.",
            installNote: "ecommerce-seo,schema-markup 하위 스킬 설치 후 사용"
          },
          "GEO SEO Claude": {
            desc: "AI 검색 가시성, 브랜드 권위, 스키마 및 크로스 플랫폼 인용을 위한 GEO 우선 SEO입니다."
          },
          "Claude SEO": {
            desc: "35,000개 이상의 스타 마케팅 기술 팩: CRO, 카피라이팅, SEO, 분석 및 성장 엔지니어링."
          },
          "Marketing Skills": {
            desc: "35,000개 이상의 스타 마케팅 기술 팩: CRO, 카피라이팅, SEO, 분석 및 성장 엔지니어링."
          },
          "MD2WeChat Skill": {
            desc: "WeChat에 대한 마크다운: 40개 이상의 테마, AI 이미지, 일괄 게시, 다중 계정 관리."
          },
          Humanizer: {
            desc: "블로그, 마케팅 및 게시된 콘텐츠에 대한 AI 글쓰기 정보를 제거합니다."
          },
          "Humanizer 中文版": {
            name: "휴머나이저(중국어)",
            desc: "Reddit, X, YouTube, HN, Polymarket 및 웹에서 모든 주제를 조사하세요."
          },
          "Last 30 Days": {
            desc: "Reddit, X, YouTube, HN, Polymarket 및 웹에서 모든 주제를 조사하세요."
          },
          "Agent Reach": {
            desc: "XHS, Twitter, Bilibili, Reddit, GitHub, YouTube 등 13개 플랫폼을 위한 인터넷 라우터 - API 수수료가 없습니다."
          },
          "Browser Use": {
            desc: "AI 기반 브라우저 자동화: 운영 및 테스트를 위해 탐색하고, 양식을 채우고, 스크랩하고, 검증합니다."
          },
          "Finance Skills": {
            desc: "재무 분석: 명세서, 평가 모델, 예산 및 투자 메모."
          }
        },
        agents: {
          "多平台": "다중 플랫폼",
          "格式通用": "범용 형식",
          "通用": "만능인",
          Cursor: "커서",
          "Claude Code": "클로드 코드",
          Codex: "사본",
          "Gemini CLI": "제미니 CLI",
          Antigravity: "반중력",
          "GitHub Copilot": "GitHub 코파일럿",
          "Claude.ai": "클로드.ai",
          v0: "v0",
          OpenClaw: "오픈클로",
          Grok: "그록"
        }
      },
      strings: {
        skillsNavPage: {
          tag: "Skill",
          bannerTitle: "최고의 GitHub 기술 · 원클릭 설치",
          bannerSubtitle: "최고의 GitHub 기술 · 원클릭 설치",
          title: "최고의 GitHub 기술 · 원클릭 설치"
        },
        search: {
          typeSkillsNav: "최고의 GitHub 기술 · 원클릭 설치"
        }
      }
  });
})();
