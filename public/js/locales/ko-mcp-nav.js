/* KO overlays — mcp-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('ko', {
    mcpNav: {
        meta: {
          lead: "사용 사례별로 선별된 고급 MCP 서버. 각 카드에는 핵심 기능과 GitHub 스타가 표시됩니다. 구성 JSON은 숨겨져 있습니다. 구성 복사를 눌러 Cursor 또는 Claude Desktop에 붙여넣으세요.",
          searchPlaceholder: "MCP 이름, 카테고리, 클라이언트, 사용 사례 검색…",
          countLabel: "{n} 서버",
          totalLabel: "{n} 서버 · {c} 카테고리",
          empty: "일치하는 MCP 서버가 없습니다. 다른 키워드를 사용해 보세요.",
          copyConfig: "구성 복사",
          openLink: "세부",
          clientsLabel: "클라이언트",
          transportLabel: "수송",
          sourceLabel: "원천",
          starsLabel: "{n} ★",
          featuresLabel: "특징"
        },
        categories: {
          "MCP 入门": "MCP 기본 사항",
          "开发工具": "개발자 도구",
          "搜索检索": "검색 및 조회",
          "浏览器自动化": "브라우저 자동화",
          "地图与位置": "지도 및 위치",
          "数据库": "데이터베이스",
          "知识库与文档": "지식 및 문서",
          "内容创作": "콘텐츠 제작",
          "办公协作": "사무실 및 협업",
          "金融数据": "금융 데이터",
          "社交与社区": "소셜 및 커뮤니티",
          "电商": "전자상거래",
          "多媒体": "멀티미디어",
          "科研学术": "브라우저 자동화",
          "生活服务": "개발자"
        },
        clients: {
          "多平台": "다중 플랫폼",
          "开发者": "개발자"
        },
        transports: {
          "概念": "개념",
          "配置": "설정",
          "文档": "문서",
          stdio: "스튜디오",
          SSE: "SSE",
          http: "HTTP"
        },
        sources: {
          official: "공식적인",
          github: "GitHub",
          community: "지역 사회"
        },
        items: {
          "MCP 是什么": {
            name: "MCP란 무엇입니까?",
            desc: "Model Context Protocol은 stdio/SSE를 통해 AI 클라이언트를 외부 도구에 연결하므로 에이전트가 파일을 검색하고 읽고 데이터베이스를 쿼리하는 등의 작업을 수행할 수 있습니다."
          },
          "Cursor 接入 MCP": {
            name: "커서의 MCP",
            desc: "설정 → MCP → mcp.json 편집, 아래 JSON을 mcpServers에 병합한 다음 저장하여 에이전트 채팅에서 도구를 활성화합니다.",
            configNote: "여러 서버를 추가합니다. 변경 후 커서를 다시 시작하거나 MCP 목록을 새로 고칩니다."
          },
          "Claude Desktop 接入 MCP": {
            name: "Claude Desktop의 MCP",
            desc: "clude_desktop_config.json을 편집하고 mcpServers 아래에 서버를 추가합니다. Claude Desktop을 다시 시작하세요.",
            configNote: "공식 MCP 서버"
          },
          "MCP 官方参考实现": {
            name: "공식 MCP 서버",
            desc: "인류 참조 서버(파일 시스템, git, fetch, 메모리, postgres 등) — 이 페이지의 많은 \"공식\" 항목은 이 저장소에서 가져온 것입니다."
          },
          "MCP 协议文档": {
            name: "MCP 사양",
            desc: "맞춤형 서버 구축을 위한 공식 모델 컨텍스트 프로토콜 사양, 아키텍처 및 SDK 문서입니다."
          }
        }
      },
      strings: {
        mcpNavPage: {
          tag: "MCP",
          bannerTitle: "고급 MCP 서버 · 기능 · 구성 복사",
          bannerSubtitle: "고급 MCP 서버 · 기능 · 구성 복사",
          title: "고급 MCP 서버 · 기능 · 구성 복사",
          linkApps: "커리큘럼의 에이전트 및 자동화 도구 보기 →"
        },
        aiNavPage: {
          bannerStatMcp: "{n} MCP 서버"
        },
        search: {
          typeMcpNav: "MCP"
        }
      }
  });
})();
