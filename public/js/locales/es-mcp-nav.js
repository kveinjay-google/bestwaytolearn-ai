/* ES overlays — mcp-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('es', {
    mcpNav: {
        meta: {
          lead: "Servidores MCP de alta calidad seleccionados por caso de uso. Cada tarjeta muestra características principales y estrellas de GitHub: el JSON de configuración permanece oculto; toque Copiar configuración para pegarla en Cursor o Claude Desktop.",
          searchPlaceholder: "Busque nombre de MCP, categoría, cliente, caso de uso…",
          countLabel: "{n} servidores",
          totalLabel: "{n} servidores · {c} categorías",
          empty: "No hay servidores MCP coincidentes. Pruebe con otra palabra clave.",
          copyConfig: "Copiar configuración",
          openLink: "Detalles",
          clientsLabel: "Clientela",
          transportLabel: "Transporte",
          sourceLabel: "Fuente",
          starsLabel: "{n} ★",
          featuresLabel: "Características"
        },
        categories: {
          "MCP 入门": "Conceptos básicos de MCP",
          "开发工具": "Herramientas de desarrollador",
          "搜索检索": "Búsqueda y recuperación",
          "浏览器自动化": "Automatización del navegador",
          "地图与位置": "Mapas y ubicación",
          "数据库": "Bases de datos",
          "知识库与文档": "Conocimientos y documentos",
          "内容创作": "Creación de contenido",
          "办公协作": "Oficina y colaboración",
          "金融数据": "Datos financieros",
          "社交与社区": "Social y comunitario",
          "电商": "Comercio electrónico",
          "多媒体": "Multimedia",
          "科研学术": "Ciencia e investigación",
          "生活服务": "Estilo de vida"
        },
        clients: {
          "多平台": "Multiplataforma",
          "开发者": "Desarrolladores"
        },
        transports: {
          "概念": "Concepto",
          "配置": "Configuración",
          "文档": "Documentos",
          stdio: "stdio",
          SSE: "ESS",
          http: "HTTP"
        },
        sources: {
          official: "Oficial",
          github: "GitHub",
          community: "Comunidad"
        },
        items: {
          "MCP 是什么": {
            name: "¿Qué es MCP?",
            desc: "Model Context Protocol conecta clientes de IA con herramientas externas a través de stdio/SSE para que los agentes puedan buscar, leer archivos, consultar bases de datos y más."
          },
          "Cursor 接入 MCP": {
            name: "MCP en el cursor",
            desc: "Configuración → MCP → edite mcp.json, combine el JSON a continuación en mcpServers y luego guárdelo para habilitar las herramientas en el chat del Agente.",
            configNote: "Agregue varios servidores; reinicie el cursor o actualice la lista de MCP después de los cambios"
          },
          "Claude Desktop 接入 MCP": {
            name: "MCP en el escritorio Claude",
            desc: "Edite claude_desktop_config.json y agregue servidores en mcpServers; reinicie Claude Desktop.",
            configNote: "Consulte la ruta de configuración oficial del inicio rápido para Windows"
          },
          "MCP 官方参考实现": {
            name: "Servidores de referencia antrópicos (sistema de archivos, git, fetch, memoria, postgres, etc.): muchas entradas \"oficiales\" en esta página provienen de este repositorio.",
            desc: "Servidores de referencia antrópicos (sistema de archivos, git, fetch, memoria, postgres, etc.): muchas entradas \"oficiales\" en esta página provienen de este repositorio."
          },
          "MCP 协议文档": {
            name: "Especificación MCP",
            desc: "Documentos oficiales de SDK, arquitectura y especificaciones del protocolo de contexto de modelo para crear servidores personalizados."
          }
        }
      },
      strings: {
        mcpNavPage: {
          tag: "MCP",
          bannerTitle: "Ver agentes y herramientas de automatización en el plan de estudios →",
          bannerSubtitle: "Ver agentes y herramientas de automatización en el plan de estudios →",
          title: "Ver agentes y herramientas de automatización en el plan de estudios →",
          linkApps: "Ver agentes y herramientas de automatización en el plan de estudios →"
        },
        aiNavPage: {
          bannerStatMcp: "Busque nombre de MCP, categoría, cliente, caso de uso…"
        },
        search: {
          typeMcpNav: "MCP"
        }
      }
  });
})();
