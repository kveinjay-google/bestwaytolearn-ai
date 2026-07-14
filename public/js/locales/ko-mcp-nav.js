/* KO overlays — mcp-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("ko", { mcpNav: {
  "meta": {
    "lead": "브리핑으로 돌아가기",
    "searchPlaceholder": "MCP 이름, 카테고리, 클라이언트, 사용 사례 검색…",
    "countLabel": "{n} servers",
    "totalLabel": "{n} servers · {c} categories",
    "empty": "일치하는 MCP 서버가 없습니다. 다른 키워드를 사용해 보세요.",
    "copyConfig": "구성 복사",
    "openLink": "세부",
    "clientsLabel": "클라이언트",
    "transportLabel": "수송",
    "sourceLabel": "원천",
    "starsLabel": "{n} ★",
    "featuresLabel": "특징"
  },
  "categories": {
    "MCP 入门": "MCP 시작하기",
    "开发工具": "개발 도구",
    "搜索检索": "검색 검색",
    "浏览器自动化": "브라우저 자동화",
    "地图与位置": "지도 및 위치",
    "数据库": "데이터 베이스",
    "知识库与文档": "어울리는 스킬이 없습니다. 다른 키워드를 사용해 보세요.",
    "内容创作": "콘텐츠 제작",
    "办公协作": "사무실 협업",
    "金融数据": "금융 데이터",
    "社交与社区": "소셜 및 커뮤니티",
    "电商": "전자상거래",
    "多媒体": "멀티미디어",
    "科研学术": "과학 연구 및 학술",
    "生活服务": "생활 서비스"
  },
  "clients": {
    "多平台": "다중 플랫폼",
    "开发者": "개발자",
    "Cursor": "커서",
    "Claude Desktop": "클로드 데스크탑",
    "Cline": "클라인",
    "Windsurf": "윈드서핑",
    "Codex": "사본",
    "Raycast": "레이캐스트"
  },
  "transports": {
    "概念": "개념",
    "配置": "설정",
    "文档": "문서",
    "Registry": "기재",
    "stdio": "스튜디오",
    "SSE": "SSE",
    "http": "HTTP"
  },
  "sources": {
    "official": "공식적인",
    "github": "GitHub",
    "community": "지역 사회"
  },
  "items": {
    "MCP 是什么": {
      "name": "MCP 란 무엇입니까?",
      "desc": "당신은 AI 학습 도우미입니다. 원본 텍스트에서 발췌한 내용을 인용하여 지식 기반 콘텐츠만을 토대로 답변하세요.\n지식베이스에 관련 내용이 없으면 \"노트에 포함되지 않음\"이라고 명확하게 말하고 어느 장을 참조할지 제안합니다.\n답변 구조: 한 문장 결론 + 요점 설명 + 추가 읽기를 위한 키워드.",
      "features": [
        "개방형 프로토콜 표준",
        "stdio/SSE 전송",
        "LLM을 외부 도구와 연결"
      ]
    },
    "Cursor 接入 MCP": {
      "name": "MCP에 대한 커서 액세스",
      "desc": "커서: 설정 → MCP → mcp.json 편집에서 아래 JSON 조각을 mcpServers 개체에 병합하고 저장합니다. 에이전트 대화상자에서 해당 도구를 사용할 수 있습니다.",
      "configNote": "여러 서버를 추가할 수 있습니다. 커서를 다시 시작하거나 수정 후 MCP 목록을 새로 고칩니다.",
      "features": [
        "mcp.json 편집",
        "여러 서버가 공존",
        "변환 URL"
      ]
    },
    "Claude Desktop 接入 MCP": {
      "name": "Claude Desktop 액세스 MCP",
      "desc": "claude_desktop_config.json(macOS: ~/Library/Application Support/Claude/)을 편집하고 mcpServers 아래에 서버 구성을 추가한 다음 Claude Desktop을 다시 시작하여 적용합니다.",
      "configNote": "Windows 구성 파일 경로는 공식 빠른 시작을 참조하세요.",
      "features": [
        "clude_desktop_config.json",
        "당신은 프롬프트 단어 코치입니다. 사용자가 간단한 프롬프트를 표시합니다. 다음을 출력하십시오.\n1. 문제 진단\n2. RTFC 완전 재작성 버전\n3. 2개의 테스트 입력과 이상적인 출력 포인트\n중국어, 간결해요.",
        "기본 데스크탑 통합"
      ]
    },
    "MCP 官方参考实现": {
      "name": "MCP 공식 참조 구현",
      "desc": "Anthropic에서 관리하는 공식 참조 서버 컬렉션(파일 시스템, git, fetch, 메모리, postgres 등). 이 페이지의 각 카테고리에 있는 \"공식\" 항목은 이 저장소에서 가져온 것입니다.",
      "features": [
        "파일 시스템 / git / 가져오기",
        "메모리/포스트그레스",
        "공식 유지보수가 포크될 수 있음"
      ]
    },
    "MCP 协议文档": {
      "name": "MCP 프로토콜 문서",
      "desc": "사용자 정의 MCP 서버를 개발하거나 액세스 문제를 해결하는 데 적합한 모델 컨텍스트 프로토콜 공식 사양, 아키텍처 설명 및 다중 언어 SDK 문서입니다.",
      "features": [
        "프로토콜 사양",
        "아키텍처 설명",
        "다중 언어 SDK"
      ]
    },
    "Context7": {
      "name": "컨텍스트7",
      "desc": "최신 라이브러리 문서와 API 참조를 LLM에 삽입하여 프로그래밍 시나리오에 필수인 환상과 오래된 구문을 방지하세요.",
      "features": [
        "최신 라이브러리 문서 삽입",
        "API 참조 실시간 쿼리",
        "코드 환상 감소"
      ]
    },
    "GitHub MCP": {
      "name": "GitHub MCP",
      "desc": "이슈, PR, 웨어하우스 파일 및 검색 코드를 읽고 작성하여 에이전트가 GitHub 워크플로를 직접 운영할 수 있도록 합니다.",
      "configNote": "GitHub 개인 액세스 토큰을 생성하고 환경을 입력해야 합니다.",
      "features": [
        "이슈/PR 읽기 및 쓰기",
        "저장소 코드 검색",
        "온라인 API에 의존하지 마세요. 커서를 사용하여 Flask + rembg 로컬 컷아웃 웹페이지를 생성하세요. 드래그 앤 드롭으로 이미지를 업로드하고, 로컬 AI로 배경을 제거하고, 투명 PNG를 다운로드하세요. 전자상거래 사진 및 신분증 사진 처리에 적합합니다."
      ]
    },
    "Filesystem": {
      "name": "파일 시스템",
      "desc": "공식 파일 시스템 서버는 로컬 프로젝트 분석 및 일괄 변경에 적합한 제한된 디렉터리에서 파일을 읽고 씁니다.",
      "configNote": "/path/to/allowed/dir을 허용된 디렉터리로 바꾸세요.",
      "features": [
        "디렉터리 읽기 및 쓰기 제한",
        "배치 파일 분석",
        "Dify 지식 기반 세분화는 블록당 500~800 단어가 권장됩니다. 테스트 세트는 승인을 위한 실제 직원 질문 20개로 준비되었습니다."
      ]
    },
    "Git": {
      "name": "힘내",
      "desc": "공식 Git 운영 서버: 상태, 차이점, 제출 내역 및 분기를 확인하고 코드 검토 및 버전 관리를 지원합니다.",
      "features": [
        "상태/차이점 보기",
        "기록 쿼리 제출",
        "지점정보"
      ]
    },
    "Fetch": {
      "name": "술책",
      "desc": "공식 웹 크롤링 서버는 URL 콘텐츠를 문서 및 뉴스 읽기에 적합한 LLM 판독 가능 마크다운으로 변환합니다.",
      "features": [
        "마크다운 URL",
        "웹페이지 텍스트 추출",
        "문서읽기"
      ]
    },
    "Memory": {
      "name": "메모리",
      "desc": "공식 지식 그래프 메모리 서버는 세션 전반에 걸쳐 엔터티와 관계를 유지하며 장기적인 프로젝트 컨텍스트에 적합합니다.",
      "features": [
        "지식 그래프 메모리",
        "교차 세션 엔터티 관계",
        "장기 프로젝트 상황"
      ]
    },
    "Sequential Thinking": {
      "name": "순차적 사고",
      "desc": "공식적인 구조화된 사고 체인 서버는 에이전트가 복잡한 문제를 단계별로 탐색하기 위해 추론, 수정 및 분기하도록 안내합니다.",
      "features": [
        "단계별 추론 체인",
        "가상 개정",
        "복잡한 문제를 분해"
      ]
    },
    "Docker MCP": {
      "name": "도커 MCP",
      "desc": "Docker 컨테이너, 이미지, Compose를 관리하여 에이전트가 로컬 또는 원격 컨테이너 환경을 직접 운영할 수 있도록 합니다.",
      "features": [
        "컨테이너 시작 및 중지 관리",
        "미러 목록",
        "작성 작업"
      ]
    },
    "Sentry MCP": {
      "name": "센트리 MCP",
      "desc": "온라인 문제 해결 및 근본 원인 분석을 지원하기 위해 Sentry 오류, 문제 및 성능 데이터를 쿼리합니다.",
      "features": [
        "오류 문제 쿼리",
        "성능 추적",
        "온라인 문제 해결"
      ]
    },
    "Brave Search": {
      "name": "용감한 검색",
      "desc": "Brave Search API 기반 웹 검색은 에이전트에 실시간 인터넷 검색 기능을 제공합니다.",
      "configNote": "Brave.com/search/api에서 API 키를 신청하세요.",
      "features": [
        "실시간 웹 검색",
        "구조화된 결과",
        "개인정보 보호 검색"
      ]
    },
    "Tavily": {
      "name": "타빌리",
      "desc": "연구 및 사실 확인에 적합한 구조화된 요약을 반환하는 AI 에이전트에 최적화된 검색 API입니다.",
      "features": [
        "에이전트 최적화 검색",
        "구조화된 요약",
        "사실 확인"
      ]
    },
    "Exa Search": {
      "name": "엑사 검색",
      "desc": "신경망 의미론적 검색은 기술 기사, 논문 및 회사 정보를 찾는 데 적합하며 연구 시나리오에서 잘 수행됩니다.",
      "features": [
        "의미론적 신경 검색",
        "기술자료 검색",
        "회사정보 조회"
      ]
    },
    "Firecrawl": {
      "name": "파이어 크롤링",
      "desc": "웹 페이지를 크롤링하고, 잡고, 검색하고, 사이트 콘텐츠를 경쟁 제품 및 데이터 수집에 적합한 LLM 친화적인 형식으로 변환합니다.",
      "features": [
        "전체 사이트 크롤링",
        "마크다운 변환",
        "경쟁 제품 데이터 수집"
      ]
    },
    "Playwright MCP": {
      "name": "극작가 MCP",
      "desc": "Microsoft Playwright의 공식 MCP는 스크린샷, 클릭, 양식 작성 및 E2E 테스트를 위해 Chromium을 제어합니다.",
      "features": [
        "크롬 자동화",
        "스크린샷 및 양식 작성",
        "E2E 테스트"
      ]
    },
    "Puppeteer": {
      "name": "인형사",
      "desc": "공식 Puppeteer 서버, 헤드리스 Chrome 자동화, 웹페이지 스크린샷, 크롤링 및 간단한 상호작용에 적합합니다.",
      "features": [
        "헤드리스 크롬",
        "페이지 스크린샷",
        "DOM 상호작용"
      ]
    },
    "Browserbase": {
      "name": "브라우저베이스",
      "desc": "클라우드 헤드리스 브라우저 인프라인 에이전트는 로컬 Chrome 없이 원격 브라우저에서 복잡한 웹페이지 작업을 수행합니다.",
      "features": [
        "클라우드 브라우저",
        "로컬 Chrome이 필요하지 않습니다.",
        "복잡한 웹 작업"
      ]
    },
    "Google Maps": {
      "name": "구글 지도",
      "desc": "지오코딩, 경로 계획, 위치 검색 및 주변 문의 등 여행 및 현지 생활에 적합한 에이전트입니다.",
      "features": [
        "지오코딩",
        "경로 계획",
        "POI 검색"
      ]
    },
    "OpenStreetMap": {
      "name": "오픈스트리트맵",
      "desc": "무료 오픈 소스인 OpenStreetMap을 기반으로 한 지오코딩 및 위치 쿼리는 Google API가 필요하지 않은 시나리오에 적합합니다.",
      "features": [
        "무료 지오코딩",
        "오픈소스 지도 데이터",
        "API 키가 필요하지 않습니다"
      ]
    },
    "PostgreSQL": {
      "name": "포스트그레SQL",
      "desc": "공식 Postgres 서버, 읽기 전용 쿼리 테이블 구조 및 데이터, 보조 데이터 분석 및 자연어 데이터베이스 검색.",
      "configNote": "실제 연결 문자열로 바꾸십시오. 읽기 전용 계정을 권장합니다",
      "features": [
        "읽기 전용 SQL 쿼리",
        "테이블 구조 탐색",
        "자연어 검색 라이브러리"
      ]
    },
    "SQLite": {
      "name": "SQLite",
      "desc": "공식 SQLite 서버는 프로토타입 및 소규모 데이터 분석에 적합한 로컬 .db 파일을 쿼리합니다.",
      "features": [
        "로컬 .db 쿼리",
        "경량 데이터 분석",
        "프로토타입 검증"
      ]
    },
    "Supabase": {
      "name": "수파베이스",
      "desc": "Operation Supabase 프로젝트: 테이블 관리, SQL 실행, Edge Functions 및 스토리지, 풀 스택 개발 도구.",
      "features": [
        "Google Calendar 이벤트를 쿼리 및 생성하고 일정 예약 및 회의 조정을 자동화하세요.",
        "SQL 실행",
        "엣지 기능"
      ]
    },
    "Notion": {
      "name": "개념",
      "desc": "Notion 페이지와 데이터베이스를 읽고 쓰고 팀 지식 기반을 에이전트 워크플로우에 연결하세요.",
      "features": [
        "페이지 읽기 및 쓰기",
        "데이터베이스 쿼리",
        "팀 지식 기반 액세스"
      ]
    },
    "Google Drive": {
      "name": "구글 드라이브",
      "desc": "공식 Google 드라이브 서버, 클라우드 문서 검색, 읽기 및 나열, Office 파일 라이브러리 열기.",
      "configNote": "처음 실행하려면 OAuth 인증이 필요합니다.",
      "features": [
        "질문",
        "문서읽기",
        "OAuth 인증"
      ]
    },
    "Obsidian MCP": {
      "name": "흑요석 MCP",
      "desc": "로컬 Obsidian 저장소에 연결하고 Markdown 노트를 검색하고 읽으세요. 이는 개인 지식 관리 시나리오를 위한 첫 번째 선택입니다.",
      "configNote": "Obsidian Local REST API 플러그인이 설치되어 있어야 합니다.",
      "features": [
        "지역 노트 검색",
        "마크다운 읽기",
        "개인 지식 기반"
      ]
    },
    "Figma": {
      "name": "피그마",
      "desc": "Figma 디자인 초안 노드, 스타일 및 설명을 읽고 에이전트가 UI를 이해하고 해당 코드를 생성할 수 있도록 하세요.",
      "features": [
        "자피어",
        "스타일 및 레이아웃 분석",
        "코드 지원에 대한 UI"
      ]
    },
    "Cloudflare Workers": {
      "name": "Cloudflare 작업자",
      "desc": "Cloudflare Workers, KV, R2 및 DNS를 관리하여 엣지 컴퓨팅과 정적 사이트를 빠르게 배포하세요.",
      "features": [
        "작업자 배포",
        "KV/R2 스토리지",
        "DNS 관리"
      ]
    },
    "Slack": {
      "name": "느슨하게",
      "desc": "공식 Slack 서버, 메시지 보내기, 채널 및 스레드 확인, 에이전트를 팀 협업에 포함.",
      "features": [
        "채널 메시지 전송",
        "스레드 쿼리",
        "팀워크"
      ]
    },
    "Linear": {
      "name": "선의",
      "desc": "선형 문제, 프로젝트 및 주기를 관리하고 제품 팀에 적합한 에이전트 중심 프로젝트 관리를 수행합니다.",
      "features": [
        "이슈 관리",
        "스프린트 사이클",
        "제품 프로젝트 관리"
      ]
    },
    "Google Calendar": {
      "name": "구글캘린더",
      "desc": "Google Calendar 이벤트를 쿼리 및 생성하고 일정 예약 및 회의 조정을 자동화하세요.",
      "configNote": "처음 실행하려면 Google OAuth를 완료해야 합니다.",
      "features": [
        "이벤트 쿼리",
        "일정 만들기",
        "OAuth 인증"
      ]
    },
    "Alpha Vantage": {
      "name": "알파 밴티지",
      "desc": "미국 주식, 외환 및 암호화폐 가격, 기술 지표 및 회사 기본 데이터를 쿼리합니다.",
      "features": [
        "주식 시세",
        "기술 지표",
        "기본 데이터"
      ]
    },
    "Stripe": {
      "name": "줄무늬",
      "desc": "SaaS 재무 및 청구 분석을 지원하기 위해 Stripe 고객, 구독, 송장 및 지불을 쿼리합니다.",
      "features": [
        "고객 및 구독",
        "인보이스 조회",
        "SaaS 청구 분석"
      ]
    },
    "Twitter/X MCP": {
      "name": "트위터/X MCP",
      "desc": "회의 전에 안건을 작성하고, 회의 중에 핵심 사항을 게시하고, Notion AI를 사용하여 회의록과 작업을 생성하세요.",
      "features": [
        "짹짹",
        "타임라인 검색",
        "사용자 프로필"
      ]
    },
    "Reddit": {
      "name": "레딧",
      "desc": "하위 레딧을 찾아보고, 게시물과 댓글을 검색하고, 커뮤니티 조사를 수행하고, 트렌드를 알아보세요.",
      "features": [
        "하위 레딧 찾아보기",
        "게시물 검색",
        "지역사회 조사"
      ]
    },
    "Shopify": {
      "name": "쇼피파이",
      "desc": "DeepMind는 AlphaFold 4의 향상된 약물 분자 결합 부위 예측 정확도를 미리 선보이고 제약 회사는 파일럿 협력을 확대합니다.",
      "features": [
        "제품관리",
        "주문문의",
        "고객정보"
      ]
    },
    "WooCommerce": {
      "name": "우커머스",
      "desc": "WooCommerce 제품, 주문, 고객을 관리하고 WordPress 독립 사이트 운영을 자동화하세요.",
      "features": [
        "워드프레스 스토어",
        "주문 및 고객",
        "제품관리"
      ]
    },
    "ElevenLabs": {
      "name": "일레븐랩스",
      "desc": "텍스트 음성 변환, 사운드 복제 및 사운드 효과 생성, 오디오 및 비디오 콘텐츠 생성 파이프라인.",
      "features": [
        "텍스트 음성 변환",
        "사운드 복제",
        "음향 효과 생성"
      ]
    },
    "Replicate": {
      "name": "MCP 프로토콜 문서",
      "desc": "그림 및 비디오를 위한 원스톱 상점인 Replicate에서 이미지, 비디오 및 오디오 모델을 호출하세요.",
      "features": [
        "빈센트 다이어그램 모델",
        "비디오 생성",
        "오디오 모델 호출"
      ]
    },
    "arXiv": {
      "name": "arXiv",
      "desc": "arXiv 논문, 문헌 리뷰 및 최첨단 기술 추적을 검색하고 다운로드하세요.",
      "features": [
        "논문 검색",
        "PDF 다운로드",
        "문헌 검토"
      ]
    },
    "PubMed": {
      "name": "퍼브메드",
      "desc": "PubMed에서 생물의학 문헌, 임상 및 생명과학 연구를 검색해 보세요.",
      "features": [
        "생의학 문헌",
        "추상 검색",
        "임상 연구"
      ]
    },
    "Weather": {
      "name": "당신은 프롬프트 단어 코치입니다. 사용자가 간단한 프롬프트를 표시합니다. 다음을 출력하십시오.\n1. 문제 진단\n2. RTFC 완전 재작성 버전\n3. 2개의 테스트 입력과 이상적인 출력 포인트\n중국어, 간결해요.",
      "desc": "Open-Meteo 무료 API를 기반으로 하는 공식 날씨 쿼리 서버는 키 없이도 일기예보를 얻을 수 있습니다.",
      "features": [
        "일기 예보",
        "무료 Open-Meteo",
        "API 키가 필요하지 않습니다"
      ]
    },
    "Time": {
      "name": "시간",
      "desc": "국경 간 협업 및 일정 관리를 위한 기본 도구인 시간대 변환 및 현재 시간 쿼리입니다.",
      "features": [
        "시간대 변환",
        "현재 시간",
        "국경을 넘는 협업"
      ]
    },
    "AWS MCP": {
      "name": "AWS MCP",
      "desc": "AWS 공식 MCP 제품군은 Lambda, S3, DynamoDB 및 CloudWatch와 같은 핵심 서비스를 포함하므로 에이전트가 클라우드 리소스를 직접 운영할 수 있습니다.",
      "configNote": "AWS 자격 증명을 구성해야 합니다(환경 변수 또는 ~/.aws/credentials).",
      "features": [
        "Zapier 통합 기술: 트리거 및 작업을 설명하고, Zap 초안 및 테스트 목록을 생성하고, 7000개 이상의 애플리케이션에 연결합니다.",
        "DynamoDB 쿼리",
        "CloudWatch 로그"
      ]
    },
    "Vercel MCP": {
      "name": "베르셀 MCP",
      "desc": "Vercel의 공식 MCP는 프로젝트 배포, 환경 변수, 도메인 이름 및 빌드 로그를 관리하고 프런트 엔드 배포를 자동화합니다.",
      "features": [
        "프로젝트 배포 관리",
        "환경 변수 구성",
        "로그 보기 빌드"
      ]
    },
    "E2B Code Interpreter": {
      "name": "E2B 코드 해석기",
      "desc": "클라우드 보안 샌드박스는 Python/JS 코드를 실행하며 에이전트는 로컬 환경을 오염시키지 않고 스크립트를 실행하고 그림을 그리며 데이터를 처리할 수 있습니다.",
      "features": [
        "클라우드 샌드박스 실행",
        "Python/JS 실행",
        "데이터 시각화"
      ]
    },
    "MongoDB": {
      "name": "몽고DB",
      "desc": "MongoDB 공식 MCP, 자연어 쿼리 수집, 집계 분석 및 스키마 탐색, NoSQL 데이터 분석 도구입니다.",
      "features": [
        "컬렉션 쿼리",
        "집계 파이프라인",
        "스키마 탐색"
      ]
    },
    "Neon": {
      "name": "네온",
      "desc": "Neon Serverless Postgres MCP는 지점 데이터베이스를 관리하고 SQL을 실행하고 마이그레이션하며 최신 풀 스택 개발을 위한 첫 번째 선택입니다.",
      "features": [
        "서버리스 포스트그레스",
        "데이터베이스 분기",
        "SQL 마이그레이션"
      ]
    },
    "Atlassian": {
      "name": "아틀라시안",
      "desc": "Atlassian 공식 MCP는 Jira 이슈, Confluence 페이지 및 Sprint를 읽고 작성하며 R&D 팀 협업을 자동화합니다.",
      "features": [
        "Jira 이슈 읽기 및 쓰기",
        "컨플루언스 페이지",
        "스프린트 관리"
      ]
    },
    "21st.dev Magic": {
      "name": "21st.dev 매직",
      "desc": "AI는 UI 구성 요소를 구동하여 MCP를 생성하고 설명을 기반으로 React/Tailwind 구성 요소 코드를 생성하며 프런트 엔드 프로토타입 제작을 가속화합니다.",
      "features": [
        "AI 생성 UI 구성 요소",
        "React/Tailwind 출력",
        "프론트엔드 프로토타입 가속"
      ]
    },
    "Kubernetes": {
      "name": "쿠버네티스",
      "desc": "K8s 클러스터 리소스 관리: 포드, 배포, 서비스, 로그 및 이벤트, DevOps 및 SRE 시나리오.",
      "configNote": "로컬 kubectl이 구성되어 있고 대상 클러스터에 액세스할 수 있어야 합니다.",
      "features": [
        "포드/배포 관리",
        "로그 및 이벤트",
        "클러스터 리소스 쿼리"
      ]
    },
    "MCP Registry": {
      "name": "MCP 레지스트리",
      "desc": "Model Context Protocol 공식 레지스트리를 이용하면 한 번의 클릭으로 커뮤니티 MCP 서버를 탐색, 평가 및 설치하여 에이전트 도구 검색 비용을 줄일 수 있습니다.",
      "features": [
        "서버 검색 및 점수 매기기",
        "원클릭 설치",
        "버전 관리"
      ]
    },
    "Smithery": {
      "name": "대장간",
      "desc": "MCP 서버 검색 및 호스팅 플랫폼은 높은 성능의 서버를 검색하고 Cursor/Claude Desktop 구성을 생성하여 원격 SSE 연결을 지원합니다.",
      "configNote": "일부 서버에는 Smithery API 키가 필요합니다. 자세한 내용은 smithery.ai 문서를 참조하세요.",
      "features": [
        "원격 MCP 호스팅",
        "구성 생성",
        "높은 스타 서버 선택"
      ]
    },
    "Pinecone": {
      "name": "솔방울",
      "desc": "벡터 데이터베이스 MCP: 인덱스 쿼리, 네임스페이스 관리 및 RAG 검색, 기업 지식 기반 및 긴 문서 Q&A에 적합합니다.",
      "features": [
        "벡터 검색",
        "네임스페이스 관리",
        "RAG Q&A"
      ]
    },
    "Qdrant": {
      "name": "Qdrant",
      "desc": "Qdrant 벡터 라이브러리 MCP: 컬렉션 생성, 벡터 작성 및 의미론적 검색, 자체 호스팅 또는 Qdrant Cloud 사용.",
      "features": [
        "자체 호스팅 벡터 라이브러리",
        "의미 검색",
        "컬렉션 관리"
      ]
    },
    "Redis": {
      "name": "레디스",
      "desc": "Redis 키-값 작업 MCP: 캐시 읽기 및 쓰기, 게시 및 구독, 데이터 구조 쿼리, 세션 상태 및 작업 대기열 디버깅에 적합합니다.",
      "features": [
        "캐시 읽기 및 쓰기",
        "게시/구독",
        "세션 상태"
      ]
    },
    "Prisma": {
      "name": "프리즈마",
      "desc": "Prisma ORM MCP: 전체 스택 프로젝트의 데이터베이스 계층 개발을 가속화하기 위한 스키마 탐색, 마이그레이션 제안 및 유형 안전 쿼리 생성.",
      "configNote": "Schema.prisma가 포함된 프로젝트 디렉터리에서 사용해야 합니다.",
      "features": [
        "스키마 탐색",
        "마이그레이션 권장 사항",
        "유형이 안전한 쿼리"
      ]
    },
    "ClickHouse": {
      "name": "클릭하우스",
      "desc": "ClickHouse 분석 라이브러리 MCP: OLAP 쿼리, 테이블 구조 탐색 및 지표 집계, 로그 및 행동 데이터 분석에 적합합니다.",
      "features": [
        "OLAP 분석",
        "로그 집계",
        "지표 쿼리"
      ]
    },
    "Grafana": {
      "name": "그라파나",
      "desc": "Grafana Observability MCP: 대시보드 쿼리, 경보 상태 및 Loki/Prometheus 표시기를 검색하여 온라인 문제 해결을 지원합니다.",
      "features": [
        "대시보드 쿼리",
        "경보 상태",
        "로키/프로메테우스"
      ]
    },
    "Semgrep": {
      "name": "셈그렙",
      "desc": "정적 코드 보안 스캐닝 MCP: PR 보안 접근 제어에 적합한 규칙 세트, SAST 결과 해석 및 복구 제안에 따라 취약점을 검색합니다.",
      "features": [
        "SAST 스캔",
        "규칙 세트 일치",
        "OpenAI는 채팅 완료, 도우미, 도구 호출 및 코드 실행에 분산된 기능을 통합 에이전트 호출 링크로 통합하는 것을 목표로 Responses API를 공식 출시했습니다. 개발자의 경우 가장 큰 변화는 다단계 작업을 위해 더 이상 애플리케이션 계층에서 대량의 \"요청-대기-요청\" 글루 로직을 직접 작성할 필요가 없다는 것입니다."
      ]
    },
    "LangSmith": {
      "name": "랭스미스",
      "desc": "LangChain LangSmith MCP: 에이전트 호출 체인을 추적하고, 데이터 세트를 평가하고, LLM 애플리케이션 디버깅에 적합한 프롬프트 단어 버전을 비교합니다.",
      "features": [
        "호출 체인 추적",
        "평가 데이터 세트",
        "프롬프트 버전 비교"
      ]
    },
    "HubSpot": {
      "name": "허브스팟",
      "desc": "HubSpot CRM MCP: 영업 및 마케팅 대행사 자동화에 적합한 연락처, 회사 및 거래 파이프라인 쿼리 업데이트입니다.",
      "features": [
        "CRM 연락처",
        "트랜잭션 파이프라인",
        "영업 자동화"
      ]
    },
    "Salesforce": {
      "name": "세일즈포스",
      "desc": "Salesforce MCP: SOQL 쿼리, 리드 및 기회 업데이트, 엔터프라이즈 CRM 및 영업 보조 시나리오.",
      "configNote": "프로덕션 환경에서는 OAuth 연결 방식을 사용하는 것이 좋습니다.",
      "features": [
        "SOQL 쿼리",
        "반복되는 설명을 피하기 위해 Windsurf memory.md를 \"이 프로젝트의 API 명명 규칙\"에 작성할 수 있습니다.",
        "엔터프라이즈 CRM"
      ]
    },
    "Zapier": {
      "name": "자피어",
      "desc": "Zapier MCP: 7000개 이상의 애플리케이션 자동화를 트리거하고 에이전트가 Zap을 생성하고 실행 기록 및 테스트 작업을 쿼리하도록 합니다.",
      "features": [
        "7000개 이상의 애플리케이션",
        "Zap 생성",
        "달리기 이력"
      ]
    },
    "Cloudinary": {
      "name": "흐림",
      "desc": "Cloudinary 미디어 MCP: 이미지/비디오 업로드, 변환 URL 생성 및 리소스 라이브러리 검색, 콘텐츠 운영 및 전자상거래 자료에 적합합니다.",
      "features": [
        "미디어 업로드",
        "변환 URL",
        "리소스 라이브러리 검색"
      ]
    },
    "DeepWiki": {
      "name": "딥위키",
      "desc": "Devin DeepWiki MCP: GitHub 창고 Wiki 스타일 문서와 코드 구조를 읽어 익숙하지 않은 오픈 소스 프로젝트를 빠르게 이해하세요.",
      "features": [
        "창고 문서",
        "코드 구조에 대한 간략한 개요",
        "오픈소스 프로젝트 이해"
      ]
    },
    "Raycast": {
      "name": "레이캐스트",
      "desc": "Raycast MCP 확장: macOS 런처 내에서 MCP 도구를 호출하여 스크립트, 검색 및 시스템 작업을 빠르게 실행합니다.",
      "configNote": "Raycast를 설치하고 MCP 확장을 활성화해야 합니다.",
      "features": [
        "macOS 런처",
        "MCP 확장",
        "빠른 시스템 운영"
      ]
    }
  }
} });
})();
