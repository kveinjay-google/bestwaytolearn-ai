/* DE overlays — mcp-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('de', {
    mcpNav: {
        meta: {
          lead: "Suchen Sie nach MCP-Namen, Kategorie, Client, Anwendungsfall ...",
          searchPlaceholder: "Suchen Sie nach MCP-Namen, Kategorie, Client, Anwendungsfall ...",
          countLabel: "{n} Server",
          totalLabel: "{n} Server · {c} Kategorien",
          empty: "Keine passenden MCP-Server. Versuchen Sie es mit einem anderen Schlüsselwort.",
          copyConfig: "Konfiguration kopieren",
          openLink: "Einzelheiten",
          clientsLabel: "Kunden",
          transportLabel: "Transport",
          sourceLabel: "Quelle",
          starsLabel: "{n} ★",
          featuresLabel: "Merkmale"
        },
        categories: {
          "MCP 入门": "MCP-Grundlagen",
          "开发工具": "Entwicklertools",
          "搜索检索": "Suchen und Abrufen",
          "浏览器自动化": "Browser-Automatisierung",
          "地图与位置": "Karten und Standort",
          "数据库": "Datenbanken",
          "知识库与文档": "Wissen und Dokumente",
          "内容创作": "Inhaltserstellung",
          "办公协作": "Büro & Zusammenarbeit",
          "金融数据": "Finanzdaten",
          "社交与社区": "Sozial und Gemeinschaft",
          "电商": "E-Commerce",
          "多媒体": "Multimedia",
          "科研学术": "Wissenschaft und Forschung",
          "生活服务": "Lebensstil"
        },
        clients: {
          "多平台": "Multiplattform",
          "开发者": "Entwickler"
        },
        transports: {
          "概念": "Konzept",
          "配置": "Aufstellen",
          "文档": "Dokumente",
          stdio: "stdio",
          SSE: "SSE",
          http: "HTTP"
        },
        sources: {
          official: "Offiziell",
          github: "GitHub",
          community: "Gemeinschaft"
        },
        items: {
          "MCP 是什么": {
            name: "Was ist MCP?",
            desc: "MCP im Cursor"
          },
          "Cursor 接入 MCP": {
            name: "MCP im Cursor",
            desc: "Einstellungen → MCP → mcp.json bearbeiten, den JSON unten in mcpServers zusammenführen und dann speichern, um Tools im Agent-Chat zu aktivieren.",
            configNote: "Fügen Sie mehrere Server hinzu; Starten Sie Cursor neu oder aktualisieren Sie die MCP-Liste nach Änderungen"
          },
          "Claude Desktop 接入 MCP": {
            name: "MCP in Claude Desktop",
            desc: "Bearbeiten Sie claude_desktop_config.json und fügen Sie Server unter mcpServers hinzu. Starten Sie Claude Desktop neu.",
            configNote: "Sehen Sie sich den offiziellen Quickstart für Windows-Konfigurationspfad an"
          },
          "MCP 官方参考实现": {
            name: "Offizielle MCP-Server",
            desc: "Anthropische Referenzserver (Dateisystem, Git, Fetch, Speicher, Postgres usw.) – viele „offizielle“ Einträge auf dieser Seite stammen aus diesem Repo."
          },
          "MCP 协议文档": {
            name: "MCP-Spezifikation",
            desc: "Offizielle Model Context Protocol-Spezifikation, Architektur und SDK-Dokumente zum Erstellen benutzerdefinierter Server."
          }
        }
      },
      strings: {
        mcpNavPage: {
          tag: "MCP",
          bannerTitle: "High-Star-MCP-Server · Funktionen · Konfiguration kopieren",
          bannerSubtitle: "High-Star-MCP-Server · Funktionen · Konfiguration kopieren",
          title: "High-Star-MCP-Server · Funktionen · Konfiguration kopieren",
          linkApps: "Sehen Sie sich Agenten- und Automatisierungstools im Lehrplan an →"
        },
        aiNavPage: {
          bannerStatMcp: "{n} MCP-Server"
        },
        search: {
          typeMcpNav: "MCP"
        }
      }
  });
})();
