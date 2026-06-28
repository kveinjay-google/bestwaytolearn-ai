/* FR overlays — mcp-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('fr', {
    mcpNav: {
        meta: {
          lead: "Serveurs MCP de premier ordre sélectionnés par cas d'utilisation. Chaque carte présente les fonctionnalités principales et les étoiles GitHub : la configuration JSON reste cachée ; appuyez sur Copier la configuration pour la coller dans Cursor ou Claude Desktop.",
          searchPlaceholder: "Rechercher le nom du MCP, la catégorie, le client, le cas d'utilisation…",
          countLabel: "Serveurs {n}",
          totalLabel: "Serveurs {n} · Catégories {c}",
          empty: "Aucun serveur MCP correspondant. Essayez un autre mot-clé.",
          copyConfig: "Copier la configuration",
          openLink: "Détails",
          clientsLabel: "Clientèle",
          transportLabel: "Transport",
          sourceLabel: "Source",
          starsLabel: "{n} ★",
          featuresLabel: "Caractéristiques"
        },
        categories: {
          "MCP 入门": "Les bases du MCP",
          "开发工具": "Outils de développement",
          "搜索检索": "Recherche et récupération",
          "浏览器自动化": "Gestion des connaissances",
          "地图与位置": "Cartes et localisation",
          "数据库": "Connaissances et documents",
          "知识库与文档": "Connaissances et documents",
          "内容创作": "Création de contenu",
          "办公协作": "Bureau et collaboration",
          "金融数据": "Données financières",
          "社交与社区": "Social et communautaire",
          "电商": "Commerce électronique",
          "多媒体": "Multimédia",
          "科研学术": "Sciences et recherche",
          "生活服务": "Mode de vie"
        },
        clients: {
          "多平台": "Multi-plateforme",
          "开发者": "Développeurs"
        },
        transports: {
          "概念": "Concept",
          "配置": "Installation",
          "文档": "Documents",
          stdio: "stdio",
          SSE: "ESS",
          http: "HTTP"
        },
        sources: {
          official: "Officiel",
          github: "GitHub",
          community: "Communauté"
        },
        items: {
          "MCP 是什么": {
            name: "Qu’est-ce que le MCP ?",
            desc: "MCP dans le curseur"
          },
          "Cursor 接入 MCP": {
            name: "MCP dans le curseur",
            desc: "Paramètres → MCP → modifiez mcp.json, fusionnez le JSON ci-dessous dans mcpServers, puis enregistrez pour activer les outils dans le chat de l'agent.",
            configNote: "Ajoutez plusieurs serveurs ; redémarrez le curseur ou actualisez la liste MCP après les modifications"
          },
          "Claude Desktop 接入 MCP": {
            name: "Modifiez claude_desktop_config.json et ajoutez des serveurs sous mcpServers ; redémarrez Claude Desktop.",
            desc: "Voir le chemin de configuration officiel de Quickstart pour Windows",
            configNote: "Voir le chemin de configuration officiel de Quickstart pour Windows"
          },
          "MCP 官方参考实现": {
            name: "Serveurs MCP officiels",
            desc: "Serveurs de référence anthropiques (système de fichiers, git, fetch, mémoire, postgres, etc.) — de nombreuses entrées « officielles » sur cette page proviennent de ce dépôt."
          },
          "MCP 协议文档": {
            name: "Spécification MCP",
            desc: "Documents officiels sur les spécifications, l'architecture et le SDK du protocole de contexte de modèle pour la création de serveurs personnalisés."
          }
        }
      },
      strings: {
        mcpNavPage: {
          tag: "MCP",
          bannerTitle: "Serveurs MCP haut de gamme · Fonctionnalités · Copier la configuration",
          bannerSubtitle: "Serveurs MCP haut de gamme · Fonctionnalités · Copier la configuration",
          title: "Serveurs MCP haut de gamme · Fonctionnalités · Copier la configuration",
          linkApps: "Voir les outils d'agent et d'automatisation dans le programme →"
        },
        aiNavPage: {
          bannerStatMcp: "{n} Serveurs MCP"
        },
        search: {
          typeMcpNav: "MCP"
        }
      }
  });
})();
