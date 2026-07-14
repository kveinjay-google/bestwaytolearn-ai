/* KO overlays — skills-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("ko", { skillsNav: {
  "meta": {
    "lead": "별 1,000개 이상으로 선별된 GitHub 에이전트 기술. 각 항목에는 설치 명령, 호환 가능한 에이전트 및 저장소 링크가 포함됩니다.",
    "searchPlaceholder": "검색 기술, 산업, 사용 사례, 에이전트...",
    "countLabel": "{n} skills",
    "totalLabel": "{n} skills · {c} categories",
    "empty": "어울리는 스킬이 없습니다. 다른 키워드를 사용해 보세요.",
    "copyCmd": "복사 명령",
    "openGithub": "GitHub",
    "starsLabel": "{n} ★",
    "agentsLabel": "함께 작동"
  },
  "categories": {
    "Skill 安装与合集": "제품 운영",
    "编程开发": "프로그래밍 개발",
    "前端与设计": "프런트 엔드 및 디자인",
    "视频剪辑与生成": "비디오 편집 및 생성",
    "跨境电商与电商": "국경을 넘는 전자상거래와 전자상거래",
    "小红书与内容运营": "샤오홍슈 및 콘텐츠 운영",
    "营销与 SEO": "콘텐츠 제작",
    "内容写作": "콘텐츠 작성",
    "调研搜索": "연구 검색",
    "产品运营": "어울리는 스킬이 없습니다. 다른 키워드를 사용해 보세요.",
    "安全审计": "브리핑으로 돌아가기",
    "科研学术": "과학 연구 및 학술",
    "浏览器自动化": "브라우저 자동화",
    "知识管理": "지식경영",
    "办公文档": "사무실 문서",
    "财务金融": "재원"
  },
  "agents": {
    "多平台": "다중 플랫폼",
    "格式通用": "범용 형식",
    "通用": "만능인",
    "Cursor": "커서",
    "Claude Code": "클로드 코드",
    "Codex": "사본",
    "Gemini CLI": "제미니 CLI",
    "GitHub Copilot": "GitHub 코파일럿",
    "Claude.ai": "클로드.ai",
    "v0": "v0",
    "OpenClaw": "오픈클로",
    "Antigravity": "반중력",
    "Grok": "그록",
    "Windsurf": "윈드서핑"
  },
  "items": {
    "skills CLI": {
      "name": "스킬 CLI",
      "desc": "커서 에이전트는 먼저 이를 예약한 다음 실행합니다. 주요 변경 사항에는 단계별 커밋 지침이 필요합니다.",
      "installNote": "설치 프로그램 자체; 위의 명령 예는 Vercel 공식 Skill 컬렉션을 설치합니다."
    },
    "Anthropic Skills": {
      "name": "인류학적 기술",
      "desc": "창의성, 개발, 기업 커뮤니케이션 및 문서 처리(DOCX/PDF/PPTX/XLSX)에 대한 생산 수준의 예를 포함하는 Anthropic의 공식 기술 시연 라이브러리입니다.",
      "installNote": "클로드 코드 또한 사용 가능: /플러그인 마켓플레이스 인류학/기술 추가"
    },
    "Antigravity Awesome Skills": {
      "name": "반중력 멋진 기술",
      "desc": "웹, 보안, 데이터, DevOps, QA, 마케팅 등을 위한 특수 플러그인 패키지 및 역할 번들을 포함하여 설치 가능한 1,600개 이상의 기술로 구성된 슈퍼 컬렉션입니다.",
      "installNote": "클로드 코드: npx antigravity-awesome-skills --claude"
    },
    "Claude Skills 大全": {
      "name": "클로드 스킬 백과사전",
      "desc": "337개 기술과 70개 이상의 사용자 정의 명령은 엔지니어링, 마케팅, 제품, 규정 준수, 연구, 재무 등 모든 기능 시나리오를 포괄합니다."
    },
    "Awesome Agent Skills": {
      "name": "뛰어난 에이전트 기술",
      "desc": "VoltAgent가 큐레이팅한 1,000개 이상의 커뮤니티 및 공식 스킬 인덱스는 방향별로 탐색한 후 설치하기에 적합합니다.",
      "installNote": "먼저 찾기로 검색한 다음 npx 기술을 사용하여 설치하고 <repo>를 추가하세요."
    },
    "Agent Skills 规范": {
      "name": "상담원 기술 사양",
      "desc": "Agent Skills 표준(agentskills.io)의 공식 사양 및 문서를 엽니다. 각 플랫폼의 스킬은 SKILL.md 형식을 따릅니다.",
      "installNote": "CLI 스캐폴딩을 사용하여 사양을 준수하는 새로운 기술 만들기"
    },
    "Superpowers": {
      "name": "초능력",
      "desc": "가장 널리 사용되는 에이전트 개발 방법론: 브레인스토밍 → 디자인 검토 → TDD 구현 계획 → 하위 에이전트 중심 개발, 자동으로 전체 프로세스 스킬을 트리거합니다.",
      "installNote": "커서:/add-plugin 초능력 · Codex:/plugins 검색 초능력"
    },
    "Agent Skills (Addy Osmani)": {
      "name": "에이전트 스킬(Addy Osmani)",
      "desc": "Google 엔지니어가 생산하는 프로덕션 수준 엔지니어링 기술: 아키텍처 검토, 성능 최적화, 테스트 전략, 코드 검토 등과 같은 엔터프라이즈 수준 개발 사양"
    },
    "Awesome Copilot": {
      "name": "멋진 부조종사",
      "desc": "PR 검토, 테스트, 문서화 및 보안과 같은 개발 시나리오를 다루는 GitHub 커뮤니티에서 제공한 Copilot 지침, 에이전트, 기술 및 구성 모음입니다."
    },
    "Context Engineering Skills": {
      "name": "컨텍스트 엔지니어링 기술",
      "desc": "컨텍스트 엔지니어링 특수 기술: 복잡한 다단계 개발 작업에 적합한 RAG, 메모리, 도구 오케스트레이션 및 에이전트 컨텍스트 창 최적화."
    },
    "Planning with Files": {
      "name": "파일을 이용한 계획",
      "desc": "파일 시스템을 외부 메모리로 사용: 계획, 진행 및 지식 축적, 장기 프로젝트 및 운영 SOP 관리에 적합합니다."
    },
    "Vercel Agent Skills": {
      "name": "Vercel 에이전트 스킬",
      "desc": "Vercel 공식 기술 컬렉션: React 모범 사례, 웹 디자인 사양, 프런트 엔드 성능, Next.js 모드 및 기타 웹 개발 전문화 기능.",
      "installNote": "Frontend-design 및 React-Best Practices와 같은 개별 항목을 설치할 수도 있습니다."
    },
    "Frontend Design": {
      "name": "프론트엔드 디자인",
      "desc": "Vercel의 공식 프런트 엔드 디자인 기술: 틀에 박힌 AI 인터페이스 미학을 피하기 위한 조판, 색상 일치, 레이아웃 및 구성 요소 프로세스 사양."
    },
    "Awesome Design Skills": {
      "name": "놀라운 디자인 기술",
      "desc": "엄선된 디자인 기술 모음: 레이아웃, 색상 일치, 구성 요소 기술 및 AI 방지 미적 루틴은 랜딩 페이지 및 제품 인터페이스에 적합합니다."
    },
    "Stitch Skills": {
      "name": "스티치 기술",
      "desc": "Google Stitch 디자인 기술: 디자인 의도를 토대로 신속한 프로토타이핑 및 시각적 반복에 적합한 충실도 높은 인터페이스 및 구성 요소 사양을 생성합니다."
    },
    "Vue.js AI Skills": {
      "name": "Vue.js AI 기술",
      "desc": "Vue 3 생태학적 특수 기술: API, Pinia, Nuxt 모드 및 모범 사례가 결합되어 Vue 풀 스택 프로젝트에 적합합니다."
    },
    "OpenMontage": {
      "name": "오픈몽타주",
      "desc": "오픈 소스 에이전트 비디오 제작 시스템: 12개 파이프라인, 52개 도구, 500개 이상의 기술, 스크립트, 스토리보드, TTS, 편집 및 완성된 영화 내보내기, 코딩 지원을 비디오 스튜디오로 전환.",
      "installNote": "스크린샷 및 양식 작성"
    },
    "ViMax": {
      "name": "바이맥스",
      "desc": "홍콩 대학에서 제작한 Agent 비디오 생성 프레임워크: 감독, 시나리오 작가, 제작자 및 생성자가 통합되어 창의성부터 완성된 영화까지 완전 자동 배열됩니다."
    },
    "Remotion Skills": {
      "name": "원격 기술",
      "desc": "React를 사용하여 지식 기반 단편 비디오의 대량 제작에 적합한 음성 자막, 모션 효과, 브랜드 제목 및 데이터 시각화 짧은 비디오 등 프로그래밍 방식으로 비디오를 생성합니다."
    },
    "Pika Skills": {
      "name": "피카 스킬",
      "desc": "Pika AI 비디오 생성 기술: 창의적인 단편 영화 및 광고 컨셉 영화에 적합한 Vincent 비디오, Tusheng 비디오 및 스타일화된 특수 효과 워크플로우입니다."
    },
    "Google Gemini 视频生成": {
      "name": "Google Gemini 비디오 생성",
      "desc": "Google 공식 Gemini API 스킬: media_ Generation 하위 스킬을 포함하고 Veo Wensheng 비디오, Tusheng 비디오 및 다중 모드 자료 생성을 지원합니다.",
      "installNote": "설치 후 media_ Generation과 같은 하위 기술을 사용하여 Veo 비디오 모델을 호출할 수 있습니다."
    },
    "OpenAI Codex 多媒体": {
      "name": "OpenAI 코덱스 멀티미디어",
      "desc": "OpenAI 공식 Codex 스킬 디렉토리: 에이전트 중심의 창의적 자료 제작에 적합한 imagegen, sora 및 기타 멀티미디어 생성 및 편집 하위 스킬이 포함되어 있습니다.",
      "installNote": "Codex에서 /skills를 사용하여 imagegen과 같은 선별된 하위 기술을 찾아볼 수 있습니다."
    },
    "Marketing Skills (视频)": {
      "name": "마케팅 기술(비디오)",
      "desc": "마케팅 기술 컬렉션에는 짧은 비디오 스크립트, 광고 영화 구조, 소셜 ​​미디어 비디오 전략 및 전환 비디오 카피라이팅 워크플로우와 같은 비디오 하위 기술이 포함됩니다."
    },
    "Social Media Skills (短视频)": {
      "name": "소셜 미디어 기술(짧은 비디오)",
      "desc": "소셜 미디어 콘텐츠 전략 기술: TikTok/Douyin/Reels 운영에 적합한 짧은 비디오 스크립트, 주제 계획, 스토리보드 리듬 및 크로스 플랫폼 콘텐츠 달력."
    },
    "Claude SEO (电商)": {
      "name": "클로드 SEO(전자상거래)",
      "desc": "플랫폼 판매자 및 DTC에 적합한 카테고리 페이지, 제품 구조 데이터, 국제 사이트 hreflang 및 전환 랜딩 페이지 최적화 등 전자 상거래 SEO 하위 기술이 포함되어 있습니다.",
      "installNote": "설치 후 ecommerce-seo,schema-markup 등의 하위 스킬을 사용할 수 있습니다."
    },
    "GEO SEO Claude": {
      "name": "GEO SEO 클로드",
      "desc": "GEO 우선 SEO 기술: AI 검색 가시성, 브랜드 권위, 스키마 및 다중 플랫폼 인용 최적화, 해외 브랜드가 고객을 확보하는 데 적합합니다."
    },
    "Last 30 Days": {
      "name": "지난 30일",
      "desc": "Reddit, X, YouTube, HN, Polymarket 및 전체 웹에서 모든 주제를 조사하고 잘 문서화된 요약 보고서를 종합하세요."
    },
    "Apify Agent Skills": {
      "name": "Apify 에이전트 기술",
      "desc": "자동 웹 크롤링 기술: 운영 데이터 수집 및 경쟁 제품 모니터링에 적합한 구조화된 페이지 데이터 수집."
    },
    "Agent Reach": {
      "name": "상담원 도달 범위",
      "desc": "인터넷 기능 라우터: Xiaohongshu, Twitter, Bilibili, Reddit, GitHub, YouTube 등 13개 플랫폼에 대한 통합 연구 및 검색"
    },
    "Humanizer 中文版": {
      "name": "휴머나이저 중국어 버전",
      "desc": "Humanizer 중국어 버전은 중국 AI 추적에 최적화되어 있으며, 공개 계정, Zhihu, Xiaohongshu 등 중국 콘텐츠에서 AI 풍미를 제거하는 데 적합합니다."
    },
    "MD2WeChat Skill": {
      "name": "MD2위챗 스킬",
      "desc": "WeChat 공개 계정을 게시하기 위한 마크다운 원클릭 조판: 40개 이상의 스타일 테마, AI 일러스트레이션, 일괄 게시 및 다중 계정 관리, 셀프 미디어 매트릭스 작업에 적합합니다."
    },
    "Claude SEO": {
      "name": "클로드 SEO",
      "desc": "25개의 하위 기술 + 18개의 하위 에이전트: 기술 SEO, 국제 SEO, 전자 상거래 SEO, 외부 링크 및 PDF/Excel 보고서는 브랜드 성장 팀에 적합합니다."
    },
    "Marketing Skills": {
      "name": "마케팅 기술",
      "desc": "마케팅 기술 제품군 버킷: CRO, 카피라이팅, SEO, 분석 및 성장 엔지니어링, 35,000개 이상의 스타 커뮤니티가 선호하는 마케팅 대행사 기능 패키지."
    },
    "PM Skills": {
      "name": "PM 기술",
      "desc": "제품 관리자 스킬 마켓플레이스: 검색, 전략, 실행부터 실행 및 성장까지 100개 이상의 에이전트 스킬, 명령 및 플러그인이 있습니다."
    },
    "Claude Skills 大全 (营销)": {
      "name": "클로드 스킬 백과사전(마케팅)",
      "desc": "337 기술에는 마케팅 팀이 신속하게 시작할 수 있는 마케팅, 브랜딩, 콘텐츠 및 성장 실험 템플릿이 포함됩니다."
    },
    "Humanizer": {
      "name": "휴머나이저",
      "desc": "AI가 생성한 텍스트의 흔적을 제거하여 기사를 더욱 자연스럽고 인간의 글과 유사하게 만듭니다. 블로그, 마케팅 카피라이팅, 외부 출판을 위한 콘텐츠 다듬기에 적합합니다."
    },
    "Agent Rules Books": {
      "name": "에이전트 규칙 책",
      "desc": "긴 기사 작성 기술: 백서 및 강좌 콘텐츠 제작에 적합한 구조화된 책/보고서 작성 규칙 및 장 구성."
    },
    "Awesome Agent Skills 索引": {
      "name": "멋진 상담원 기술 지수",
      "desc": "커뮤니티 기술 색인은 산업 및 목적별로 검색한 다음 수직 분야의 기술을 발견하는 데 적합한 타겟 방식으로 설치합니다."
    },
    "PM Claude Skills": {
      "name": "PM 클로드 스킬스",
      "desc": "PM 전문 Claude 기술: 사용자 인터뷰, PRD, 로드맵 및 OKR 정렬 워크플로우."
    },
    "noobnooc Skills": {
      "name": "눕눅 스킬",
      "desc": "제품, 운영 및 성장 하이브리드 기술 팩: 실험 설계, 지표 대시보드 및 기능 릴리스 체크리스트."
    },
    "Acontext": {
      "name": "컨텍스트",
      "desc": "작업 스크립트: HN Algolia API에서 상위 10개의 AI 키워드 게시물을 가져옵니다."
    },
    "Trail of Bits Skills": {
      "name": "비트 스킬의 흔적",
      "desc": "Trail of Bits 보안 팀은 취약점 탐지, 정적 분석, 감사 워크플로, 계약 보안 및 기타 전문 보안 연구 기술을 생산합니다."
    },
    "Cisco Skill Scanner": {
      "name": "Cisco 스킬 스캐너",
      "desc": "스킬 보안 스캐너: 팀 스킬 거버넌스 및 공급망 감사에 적합한 악성 또는 고위험 에이전트 스킬을 감지합니다."
    },
    "Claude BugHunter": {
      "name": "클로드 버그헌터",
      "desc": "자동화된 버그 헌터 기술: 코드 감사, 회귀 검증 및 보안 관련 결함 발견 워크플로우."
    },
    "Scientific Agent Skills": {
      "name": "과학 요원 기술",
      "desc": "K-Dense 과학 기술 라이브러리: 즉시 사용 가능한 140개 이상의 기술과 생물학, 화학, 의학 및 약물 발견을 다루는 100개 이상의 과학 데이터베이스."
    },
    "Text-to-CAD": {
      "name": "텍스트-CAD",
      "desc": "텍스트 설명 생성 CAD 모델 기술, 엔지니어링, 제조 및 과학 연구 프로토타입의 신속한 모델링에 적합합니다."
    },
    "Document Skills (Anthropic)": {
      "name": "문서 기술(인류)",
      "desc": "인류 생산 수준의 문서 기술: DOCX 편집, PDF 구문 분석, PPTX 슬라이드, XLSX 테이블 및 Claude의 문서 기능과 동일한 출처를 가지고 있습니다.",
      "installNote": "클로드 코드 플러그인:/plugin install document-skills@anthropic-agent-skills"
    },
    "Browser Use": {
      "name": "브라우저 사용",
      "desc": "AI 기반 브라우저 자동화: 에이전트는 운영 및 테스트 시나리오에 적합한 독립적으로 탐색, 양식 작성, 크롤링 및 확인합니다."
    },
    "Playwright Skill": {
      "name": "극작가 스킬",
      "desc": "Claude Code 브라우저 자동화 기술: 에이전트는 E2E 테스트 및 페이지 확인을 위해 Playwright 스크립트를 독립적으로 작성하고 실행합니다."
    },
    "Obsidian Skills": {
      "name": "흑요석 스킬",
      "desc": "에이전트에게 Obsidian CLI 및 개방형 형식(Markdown, Bases, JSON Canvas)을 사용하여 메모 작성 및 지식창고 작업을 자동화하도록 가르칩니다."
    },
    "Google Workspace CLI": {
      "name": "Google Workspace CLI",
      "desc": "Google Office Suite CLI 기술: 보고서 및 공동작업 문서의 일괄 처리에 적합한 Docs, Sheets, Slides 자동화."
    },
    "Skill Creator": {
      "name": "스킬 크리에이터",
      "desc": "스킬 CLI 스캐폴딩을 사용하여 에이전트 스킬 사양을 준수하는 SKILL.md를 생성하세요. 이는 팀이 맞춤형 워크플로 및 도메인 지식을 축적하는 데 적합합니다.",
      "installNote": "현재 디렉터리에 SKILL.md 템플릿을 생성하고 이름과 설명을 입력합니다."
    },
    "Finance Skills": {
      "name": "금융 기술",
      "desc": "재무 분석 기술: 명세서 해석, 평가 모델, 예산 및 투자, 자금 조달 자료 초안 작성 지원."
    },
    "Awesome Finance Skills": {
      "name": "강좌 포스터를 일괄적으로 생성하기 위한 선 그리기 ControlNet 워크플로를 구축합니다.",
      "desc": "금융 기술 선별 지수: 회계, 투자, 위험 통제 및 FP&A 시나리오 템플릿 모음."
    },
    "Claude Skills 大全 (财务)": {
      "name": "Claude Skills 백과사전(금융)",
      "desc": "337 기술에는 재무 모델링, 예산 책정, 투자 및 자금 조달, 규정 준수 보고 템플릿이 포함되어 재무 및 비즈니스 분석 팀에 적합합니다."
    },
    "Smithery Skills": {
      "name": "대장간 기술",
      "desc": "Smithery가 제작한 MCP/Skill 검색 및 설치 플랫폼 Skill은 레지스트리 인기 서버를 검색하고 클라이언트 구성 조각을 생성할 수 있습니다.",
      "installNote": "smithery.ai 웹페이지에서 한 번의 클릭으로 커서/클로드 구성을 생성할 수도 있습니다."
    },
    "Cursor Directory Skills": {
      "name": "커서 디렉토리 기술",
      "desc": "풀 스택, 모바일 및 AI 애플리케이션과 같은 빈도가 높은 프로젝트 템플릿을 포함하여 커뮤니티에서 선별한 커서 규칙 및 기술 인덱스입니다."
    },
    "Cloudflare Agent Skills": {
      "name": "Cloudflare 에이전트 기술",
      "desc": "Cloudflare 공식 에이전트 기술: Workers, R2, KV, D1 및 Pages 개발 모드는 에지 컴퓨팅 및 전체 스택 배포에 적합합니다."
    },
    "Composio Tool Router Skills": {
      "name": "Composio 도구 라우터 기술",
      "desc": "Composio 도구 라우팅 기술: Gmail, GitHub, Slack, Notion 및 기타 100개 이상의 SaaS에 대한 통합 액세스로 에이전트 도구 글루 코드가 줄어듭니다."
    },
    "LangGraph Agent Skills": {
      "name": "LangGraph 에이전트 기술",
      "desc": "LangChain 공식 LangGraph 스킬: 다중 에이전트 오케스트레이션, 상태 다이어그램, 체크포인트 및 수동 승인 노드는 복잡한 자동화에 적합합니다."
    },
    "Windsurf Wave Skills": {
      "name": "윈드서핑 웨이브 스킬",
      "desc": "Codeium Windsurf 특수 기술: 캐스케이드 메모리 파일, Wave 다중 파일 편집 및 코드 기반 레벨 리팩토링 워크플로우."
    },
    "shadcn/ui Agent Skills": {
      "name": "shadcn/ui 에이전트 스킬",
      "desc": "shadcn/ui 구성 요소 제작 기술: Radix + Tailwind 모드, 접근성 및 테마 변수를 사용하여 AI가 저렴한 UI를 생성하는 것을 방지합니다.",
      "installNote": "npx shadcn@latest add와 함께 사용하면 효과가 더 좋습니다."
    },
    "Figma to Code Skills": {
      "name": "Figma에서 코드 스킬까지",
      "desc": "코드 기술에 대한 초안 디자인: Figma 노드, 간격 및 글꼴을 분석하고 React/Tailwind 구성 요소 뼈대를 생성합니다."
    },
    "ComfyUI Workflow Skills": {
      "name": "ComfyUI 워크플로 기술",
      "desc": "ComfyUI 워크플로우 기술: SD3/Flux 노드 오케스트레이션, ControlNet 및 배치 이미지 출력, 전자 상거래 및 코스 이미지 매칭 파이프라인에 적합합니다."
    },
    "CapCut Agent Skills": {
      "name": "CapCut 에이전트 기술",
      "desc": "회의가 끝난 후 Copilot 패널을 열어 발언자 세그먼트 및 결정 목록을 확인하세요."
    },
    "Shopify Hydrogen Skills": {
      "name": "Shopify 수소 기술",
      "desc": "Shopify Hydrogen 전자상거래 기술: 헤드리스 스토어, 제품 페이지 SEO 및 장바구니 구성 요소는 국경을 초월한 독립 웹사이트에 적합합니다."
    },
    "Amazon SP-API Skills": {
      "name": "Amazon SP-API 기술",
      "desc": "Amazon 판매자 SP-API 스킬: 주문, 재고, 광고 보고서 가져오기 및 예외 경보 스크립트 생성."
    },
    "XHS Creator Skills": {
      "name": "XHS 제작자 기술",
      "desc": "Xiaohongshu 작성 기술: 제목 공식, 표지 키워드, 주제 태그 및 댓글 영역 가이드가 모두 플랫폼의 분위기와 일치합니다."
    },
    "GEO SEO Skills": {
      "name": "GEO SEO 기술",
      "desc": "생성 엔진 최적화(GEO) 기술: 구조화된 FAQ, 스키마 및 llms.txt를 통해 AI 검색 가시성을 향상합니다."
    },
    "Technical Writing Skills": {
      "name": "기술적인 글쓰기 능력",
      "desc": "기술 문서 기술: Divio 문서의 4개 사분면에 따른 API 참조, README, 변경 로그 및 튜토리얼 구조."
    },
    "Deep Research Skills": {
      "name": "심층 연구 기술",
      "desc": "심층적인 연구 기술: 경쟁 제품 및 시장 분석에 적합한 다중 소스 검색, 비교 테이블, 인용 관리 및 불확실성 주석."
    },
    "n8n Workflow Skills": {
      "name": "n8n 워크플로 기술",
      "desc": "n8n 자동화 기술: RSS → AI 요약 → 이메일/Feishu 및 기타 워크플로우 JSON을 생성하여 운영 파이프라인 구축을 가속화합니다."
    },
    "Stagehand": {
      "name": "무대 담당자",
      "desc": "Browserbase Stagehand: 자연어가 브라우저 작업을 구동하고 자동으로 Playwright 스크립트를 작성하며 검증을 수행합니다."
    },
    "LaTeX Paper Skills": {
      "name": "LaTeX 종이 기술",
      "desc": "학술 논문 기술: LaTeX 템플릿, 수식 서식 지정, BibTeX 참조 및 리뷰 응답 편지 초안 작성."
    },
    "Zapier Automation Skills": {
      "name": "계속 구성 작성을 도와주세요.\n- ollama qwen3을 사용한 채팅 및 자동 완성\n- *.ts에 대해서만 완성 활성화\n- 엔터프라이즈 프로젝트는 클라우드에 코드를 업로드하는 것이 금지됩니다.\n완전한 JSON을 제공합니다.",
      "desc": "Zapier 통합 기술: 트리거 및 작업을 설명하고, Zap 초안 및 테스트 목록을 생성하고, 7000개 이상의 애플리케이션에 연결합니다."
    }
  }
} });
})();
