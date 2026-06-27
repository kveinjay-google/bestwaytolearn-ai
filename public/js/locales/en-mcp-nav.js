/* English overlays — MCP server directory */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('en', {
    strings: {
      mcpNavPage: {
        tag: 'MCP',
        bannerTitle: 'MCP Hub',
        bannerSubtitle: 'High-star MCP servers · Features · Copy config',
        title: 'MCP Hub',
        linkApps: 'View Agent & automation tools in the curriculum →',
      },
      aiNavPage: {
        bannerStatMcp: '{n} MCP servers',
      },
      search: {
        typeMcpNav: 'MCP',
      },
    },
    mcpNav: {
      meta: {
        lead: 'Curated high-star MCP servers by use case. Each card shows core features and GitHub stars — config JSON stays hidden; tap Copy config to paste into Cursor or Claude Desktop.',
        searchPlaceholder: 'Search MCP name, category, client, use case…',
        countLabel: '{n} servers',
        totalLabel: '{n} servers · {c} categories',
        empty: 'No matching MCP servers. Try another keyword.',
        copyConfig: 'Copy config',
        openLink: 'Details',
        clientsLabel: 'Clients',
        transportLabel: 'Transport',
        sourceLabel: 'Source',
        starsLabel: '{n} ★',
        featuresLabel: 'Features',
      },
      categories: {
        'MCP 入门': 'MCP basics',
        '开发工具': 'Developer tools',
        '搜索检索': 'Search & retrieval',
        '浏览器自动化': 'Browser automation',
        '地图与位置': 'Maps & location',
        '数据库': 'Databases',
        '知识库与文档': 'Knowledge & docs',
        '内容创作': 'Content creation',
        '办公协作': 'Office & collaboration',
        '金融数据': 'Finance data',
        '社交与社区': 'Social & community',
        '电商': 'E-commerce',
        '多媒体': 'Multimedia',
        '科研学术': 'Science & research',
        '生活服务': 'Lifestyle',
      },
      clients: {
        '多平台': 'Multi-platform',
        '开发者': 'Developers',
      },
      transports: {
        '概念': 'Concept',
        '配置': 'Setup',
        '文档': 'Docs',
        'stdio': 'stdio',
        'SSE': 'SSE',
        'http': 'HTTP',
      },
      sources: {
        official: 'Official',
        github: 'GitHub',
        community: 'Community',
      },
      items: {
        'MCP 是什么': {
          name: 'What is MCP?',
          desc: 'Model Context Protocol connects AI clients to external tools via stdio/SSE so agents can search, read files, query databases, and more.',
        },
        'Cursor 接入 MCP': {
          name: 'MCP in Cursor',
          desc: 'Settings → MCP → edit mcp.json, merge the JSON below into mcpServers, then save to enable tools in Agent chat.',
          configNote: 'Add multiple servers; restart Cursor or refresh the MCP list after changes',
        },
        'Claude Desktop 接入 MCP': {
          name: 'MCP in Claude Desktop',
          desc: 'Edit claude_desktop_config.json and add servers under mcpServers; restart Claude Desktop.',
          configNote: 'See the official Quickstart for Windows config path',
        },
        'MCP 官方参考实现': {
          name: 'Official MCP Servers',
          desc: 'Anthropic reference servers (filesystem, git, fetch, memory, postgres, etc.) — many “official” entries on this page come from this repo.',
        },
        'MCP 协议文档': {
          name: 'MCP Specification',
          desc: 'Official Model Context Protocol spec, architecture, and SDK docs for building custom servers.',
        },
      },
    },
  });
})();