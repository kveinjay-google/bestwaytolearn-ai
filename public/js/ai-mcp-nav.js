/* BestWayToLearn.AI — MCP Server 导航 */

const AI_MCP_NAV_CATEGORIES = [
  'MCP 入门',
  '开发工具',
  '搜索检索',
  '浏览器自动化',
  '地图与位置',
  '数据库',
  '知识库与文档',
  '内容创作',
  '办公协作',
  '金融数据',
  '社交与社区',
  '电商',
  '多媒体',
  '科研学术',
  '生活服务',
];

const AI_MCP_NAV_META = {
  lead: '本站自建的 MCP Server 导航，按场景分类收录常用服务。每条附带适用客户端、传输方式与 Cursor / Claude Desktop 配置片段，站内搜索、分类跳转、一键复制即可接入。',
  searchPlaceholder: '搜索 MCP 名称、分类、客户端、用途…',
  countLabel: '{n} 个 MCP',
  totalLabel: '共 {n} 个 MCP · {c} 个分类',
  empty: '没有匹配的 MCP，换个关键词试试',
  copyConfig: '复制配置',
  openLink: '详情',
  clientsLabel: '适用',
  transportLabel: '传输',
  sourceLabel: '来源',
};

/** @type {Array<{name:string,category:string,clients:string[],transport:string,desc:string,url:string,config:string,configNote?:string,source:string,featured?:boolean}>} */
const AI_MCP_NAV_ITEMS = [

  // MCP 入门
  {
    name: 'MCP 是什么',
    category: 'MCP 入门',
    clients: ['Cursor', 'Claude Desktop', 'Cline', 'Windsurf', 'Codex'],
    transport: '概念',
    desc: 'MCP（Model Context Protocol）是连接 AI 客户端与外部工具的开放协议。客户端通过 stdio / SSE 调用 Server 提供的工具，让 Agent 能搜网页、读文件、查数据库等。',
    url: 'https://modelcontextprotocol.io/introduction',
    config: '',
    source: 'official',
    featured: true,
  },
  {
    name: 'Cursor 接入 MCP',
    category: 'MCP 入门',
    clients: ['Cursor'],
    transport: '配置',
    desc: '在 Cursor 中：Settings → MCP → 编辑 mcp.json，将下方 JSON 片段合并进 mcpServers 对象后保存，即可在 Agent 对话中使用对应工具。',
    url: 'https://docs.cursor.com/context/mcp',
    config: `// ~/.cursor/mcp.json 示例结构
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}`,
    configNote: '可添加多个 Server；修改后重启 Cursor 或刷新 MCP 列表',
    source: 'official',
    featured: true,
  },
  {
    name: 'Claude Desktop 接入 MCP',
    category: 'MCP 入门',
    clients: ['Claude Desktop'],
    transport: '配置',
    desc: '编辑 claude_desktop_config.json（macOS：~/Library/Application Support/Claude/），在 mcpServers 下添加 Server 配置，重启 Claude Desktop 生效。',
    url: 'https://modelcontextprotocol.io/quickstart/user',
    config: `// claude_desktop_config.json 示例
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/projects"]
    }
  }
}`,
    configNote: 'Windows 配置文件路径见官方 Quickstart',
    source: 'official',
  },
  {
    name: 'MCP 官方参考实现',
    category: 'MCP 入门',
    clients: ['Cursor', 'Claude Desktop', 'Cline', 'Codex'],
    transport: 'stdio',
    desc: 'Anthropic 维护的官方参考 Server 合集（filesystem、git、fetch、memory、postgres 等），本页各分类中的「official」条目均来自此仓库。',
    url: 'https://github.com/modelcontextprotocol/servers',
    config: '',
    source: 'official',
  },
  {
    name: 'MCP 协议文档',
    category: 'MCP 入门',
    clients: ['开发者'],
    transport: '文档',
    desc: 'Model Context Protocol 官方规范、架构说明与多语言 SDK 文档，适合开发自定义 MCP Server 或排查接入问题。',
    url: 'https://modelcontextprotocol.io',
    config: '',
    source: 'official',
  },

  // 开发工具
  {
    name: 'Context7',
    category: '开发工具',
    clients: ['Cursor', 'Claude Desktop', 'Cline', 'Windsurf', 'Codex'],
    transport: 'stdio',
    desc: '为 LLM 注入最新库文档与 API 参考，避免幻觉与过时语法，编程场景必备。',
    url: 'https://github.com/upstash/context7',
    config: `{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}`,
    source: 'github',
    featured: true,
  },
  {
    name: 'GitHub MCP',
    category: '开发工具',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '读写 Issue、PR、仓库文件与搜索代码，让 Agent 直接操作 GitHub 工作流。',
    url: 'https://github.com/github/github-mcp-server',
    config: `{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>" }
    }
  }
}`,
    configNote: '需创建 GitHub Personal Access Token 并填入 env',
    source: 'official',
    featured: true,
  },
  {
    name: 'Filesystem',
    category: '开发工具',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '官方文件系统 Server，在限定目录内读写文件，适合本地项目分析与批量改动。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem',
    config: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/dir"]
    }
  }
}`,
    configNote: '将 /path/to/allowed/dir 替换为允许访问的目录',
    source: 'official',
  },
  {
    name: 'Git',
    category: '开发工具',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '官方 Git 操作 Server：查看状态、diff、提交历史与分支，辅助代码审查与版本管理。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/git',
    config: `{
  "mcpServers": {
    "git": {
      "command": "uvx",
      "args": ["mcp-server-git", "--repository", "/path/to/repo"]
    }
  }
}`,
    source: 'official',
  },
  {
    name: 'Fetch',
    category: '开发工具',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '官方网页抓取 Server，将 URL 内容转为 LLM 可读的 Markdown，适合读文档与新闻。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/fetch',
    config: `{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    }
  }
}`,
    source: 'official',
  },
  {
    name: 'Memory',
    category: '开发工具',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '官方知识图谱记忆 Server，跨会话持久化实体与关系，适合长期项目上下文。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/memory',
    config: `{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}`,
    source: 'official',
  },
  {
    name: 'Sequential Thinking',
    category: '开发工具',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '官方结构化思考链 Server，引导 Agent 分步推理、修订与分支探索复杂问题。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking',
    config: `{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}`,
    source: 'official',
  },
  {
    name: 'Docker MCP',
    category: '开发工具',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '管理 Docker 容器、镜像与 Compose，让 Agent 直接操作本地或远程容器环境。',
    url: 'https://github.com/ckreiling/mcp-server-docker',
    config: `{
  "mcpServers": {
    "docker": {
      "command": "uvx",
      "args": ["mcp-server-docker"]
    }
  }
}`,
    source: 'github',
  },
  {
    name: 'Sentry MCP',
    category: '开发工具',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '查询 Sentry 错误、Issue 与性能数据，辅助线上故障排查与根因分析。',
    url: 'https://github.com/getsentry/sentry-mcp',
    config: `{
  "mcpServers": {
    "sentry": {
      "command": "npx",
      "args": ["-y", "@sentry/mcp-server"],
      "env": { "SENTRY_AUTH_TOKEN": "<YOUR_TOKEN>" }
    }
  }
}`,
    source: 'github',
  },

  // 搜索检索
  {
    name: 'Brave Search',
    category: '搜索检索',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: 'Brave Search API 驱动的网页搜索，为 Agent 提供实时互联网检索能力。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search',
    config: `{
  "mcpServers": {
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": { "BRAVE_API_KEY": "<YOUR_KEY>" }
    }
  }
}`,
    configNote: '在 brave.com/search/api 申请 API Key',
    source: 'official',
    featured: true,
  },
  {
    name: 'Tavily',
    category: '搜索检索',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '面向 AI Agent 优化的搜索 API，返回结构化摘要，适合调研与事实核查。',
    url: 'https://github.com/tavily-ai/tavily-mcp',
    config: `{
  "mcpServers": {
    "tavily": {
      "command": "npx",
      "args": ["-y", "tavily-mcp"],
      "env": { "TAVILY_API_KEY": "<YOUR_KEY>" }
    }
  }
}`,
    source: 'github',
  },
  {
    name: 'Exa Search',
    category: '搜索检索',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '神经网络语义搜索，擅长找技术文章、论文与公司信息，调研场景表现优秀。',
    url: 'https://github.com/exa-labs/exa-mcp-server',
    config: `{
  "mcpServers": {
    "exa": {
      "command": "npx",
      "args": ["-y", "exa-mcp-server"],
      "env": { "EXA_API_KEY": "<YOUR_KEY>" }
    }
  }
}`,
    source: 'github',
  },
  {
    name: 'Firecrawl',
    category: '搜索检索',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '爬取、抓取与搜索网页，将站点内容转为 LLM 友好格式，适合竞品与资料采集。',
    url: 'https://github.com/mendableai/firecrawl-mcp-server',
    config: `{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": { "FIRECRAWL_API_KEY": "<YOUR_KEY>" }
    }
  }
}`,
    source: 'github',
  },

  // 浏览器自动化
  {
    name: 'Playwright MCP',
    category: '浏览器自动化',
    clients: ['Cursor', 'Claude Desktop', 'Cline', 'Codex'],
    transport: 'stdio',
    desc: '微软 Playwright 官方 MCP，控制 Chromium 做截图、点击、填表与 E2E 测试。',
    url: 'https://github.com/microsoft/playwright-mcp',
    config: `{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    }
  }
}`,
    source: 'official',
    featured: true,
  },
  {
    name: 'Puppeteer',
    category: '浏览器自动化',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '官方 Puppeteer Server，无头 Chrome 自动化，适合网页截图、抓取与简单交互。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer',
    config: `{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}`,
    source: 'official',
  },
  {
    name: 'Browserbase',
    category: '浏览器自动化',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '云端无头浏览器基础设施，Agent 在远程浏览器中执行复杂网页任务，无需本地 Chrome。',
    url: 'https://github.com/browserbase/mcp-server-browserbase',
    config: `{
  "mcpServers": {
    "browserbase": {
      "command": "npx",
      "args": ["-y", "@browserbasehq/mcp-server-browserbase"],
      "env": {
        "BROWSERBASE_API_KEY": "<YOUR_KEY>",
        "BROWSERBASE_PROJECT_ID": "<YOUR_PROJECT>"
      }
    }
  }
}`,
    source: 'github',
  },

  // 地图与位置
  {
    name: 'Google Maps',
    category: '地图与位置',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '地理编码、路线规划、地点搜索与周边查询，适合出行、本地生活类 Agent。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps',
    config: `{
  "mcpServers": {
    "google-maps": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-google-maps"],
      "env": { "GOOGLE_MAPS_API_KEY": "<YOUR_KEY>" }
    }
  }
}`,
    source: 'official',
  },
  {
    name: 'OpenStreetMap',
    category: '地图与位置',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '基于 OpenStreetMap 的地理编码与地点查询，免费开源，适合不需要 Google API 的场景。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/osm',
    config: `{
  "mcpServers": {
    "openstreetmap": {
      "command": "uvx",
      "args": ["mcp-server-openstreetmap"]
    }
  }
}`,
    source: 'official',
  },

  // 数据库
  {
    name: 'PostgreSQL',
    category: '数据库',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '官方 Postgres Server，只读查询表结构与数据，辅助数据分析与自然语言查库。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/postgres',
    config: `{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://user:pass@localhost/db"]
    }
  }
}`,
    configNote: '替换为实际连接串；建议只读账号',
    source: 'official',
    featured: true,
  },
  {
    name: 'SQLite',
    category: '数据库',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '官方 SQLite Server，查询本地 .db 文件，适合原型与小规模数据分析。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite',
    config: `{
  "mcpServers": {
    "sqlite": {
      "command": "uvx",
      "args": ["mcp-server-sqlite", "--db-path", "/path/to/database.db"]
    }
  }
}`,
    source: 'official',
  },
  {
    name: 'Supabase',
    category: '数据库',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '操作 Supabase 项目：表管理、SQL 执行、Edge Functions 与存储，全栈开发利器。',
    url: 'https://github.com/supabase-community/supabase-mcp',
    config: `{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["-y", "@supabase/mcp-server-supabase@latest"],
      "env": { "SUPABASE_ACCESS_TOKEN": "<YOUR_TOKEN>" }
    }
  }
}`,
    source: 'github',
  },

  // 知识库与文档
  {
    name: 'Notion',
    category: '知识库与文档',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '读写 Notion 页面与数据库，将团队知识库接入 Agent 工作流。',
    url: 'https://github.com/makenotion/notion-mcp-server',
    config: `{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": { "NOTION_TOKEN": "<YOUR_TOKEN>" }
    }
  }
}`,
    source: 'github',
    featured: true,
  },
  {
    name: 'Google Drive',
    category: '知识库与文档',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '官方 Google Drive Server，搜索、读取与列举云端文档，打通办公文件库。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive',
    config: `{
  "mcpServers": {
    "gdrive": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-gdrive"]
    }
  }
}`,
    configNote: '首次运行需完成 OAuth 授权',
    source: 'official',
  },
  {
    name: 'Obsidian MCP',
    category: '知识库与文档',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '连接本地 Obsidian 仓库，搜索与读取 Markdown 笔记，个人知识管理场景首选。',
    url: 'https://github.com/calclavia/mcp-obsidian',
    config: `{
  "mcpServers": {
    "obsidian": {
      "command": "npx",
      "args": ["-y", "mcp-obsidian"],
      "env": { "OBSIDIAN_API_KEY": "<YOUR_KEY>" }
    }
  }
}`,
    configNote: '需安装 Obsidian Local REST API 插件',
    source: 'github',
  },

  // 内容创作
  {
    name: 'Figma',
    category: '内容创作',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '读取 Figma 设计稿节点、样式与评论，让 Agent 理解 UI 并生成对应代码。',
    url: 'https://github.com/GLips/Figma-Context-MCP',
    config: `{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp"],
      "env": { "FIGMA_API_KEY": "<YOUR_KEY>" }
    }
  }
}`,
    source: 'github',
    featured: true,
  },
  {
    name: 'Cloudflare Workers',
    category: '内容创作',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '管理 Cloudflare Workers、KV、R2 与 DNS，快速部署边缘计算与静态站点。',
    url: 'https://github.com/cloudflare/mcp-server-cloudflare',
    config: `{
  "mcpServers": {
    "cloudflare": {
      "command": "npx",
      "args": ["-y", "@cloudflare/mcp-server-cloudflare"],
      "env": { "CLOUDFLARE_API_TOKEN": "<YOUR_TOKEN>" }
    }
  }
}`,
    source: 'github',
  },

  // 办公协作
  {
    name: 'Slack',
    category: '办公协作',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '官方 Slack Server，发消息、查频道与线程，将 Agent 嵌入团队协作。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/slack',
    config: `{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "<BOT_TOKEN>",
        "SLACK_TEAM_ID": "<TEAM_ID>"
      }
    }
  }
}`,
    source: 'official',
  },
  {
    name: 'Linear',
    category: '办公协作',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '管理 Linear Issue、项目与周期，适合产品团队的 Agent 驱动项目管理。',
    url: 'https://github.com/jerhadf/linear-mcp-server',
    config: `{
  "mcpServers": {
    "linear": {
      "command": "npx",
      "args": ["-y", "linear-mcp-server"],
      "env": { "LINEAR_API_KEY": "<YOUR_KEY>" }
    }
  }
}`,
    source: 'github',
  },
  {
    name: 'Google Calendar',
    category: '办公协作',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '查询与创建 Google 日历事件，日程安排与会议协调自动化。',
    url: 'https://github.com/nspady/google-calendar-mcp',
    config: `{
  "mcpServers": {
    "google-calendar": {
      "command": "npx",
      "args": ["-y", "google-calendar-mcp"]
    }
  }
}`,
    configNote: '首次运行需完成 Google OAuth',
    source: 'github',
  },

  // 金融数据
  {
    name: 'Alpha Vantage',
    category: '金融数据',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '美股、外汇与加密货币行情、技术指标与公司基本面数据查询。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/alphavantage',
    config: `{
  "mcpServers": {
    "alphavantage": {
      "command": "uvx",
      "args": ["mcp-server-alphavantage"],
      "env": { "ALPHAVANTAGE_API_KEY": "<YOUR_KEY>" }
    }
  }
}`,
    source: 'official',
  },
  {
    name: 'Stripe',
    category: '金融数据',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '查询 Stripe 客户、订阅、发票与支付，辅助 SaaS 财务与计费分析。',
    url: 'https://github.com/stripe/agent-toolkit',
    config: `{
  "mcpServers": {
    "stripe": {
      "command": "npx",
      "args": ["-y", "@stripe/mcp"],
      "env": { "STRIPE_SECRET_KEY": "<YOUR_KEY>" }
    }
  }
}`,
    source: 'github',
  },

  // 社交与社区
  {
    name: 'Twitter/X MCP',
    category: '社交与社区',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '发布推文、搜索时间线与用户资料，社交媒体运营与舆情监控。',
    url: 'https://github.com/EnesCinr/twitter-mcp',
    config: `{
  "mcpServers": {
    "twitter": {
      "command": "npx",
      "args": ["-y", "twitter-mcp"],
      "env": {
        "TWITTER_API_KEY": "<KEY>",
        "TWITTER_API_SECRET": "<SECRET>"
      }
    }
  }
}`,
    source: 'github',
  },
  {
    name: 'Reddit',
    category: '社交与社区',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '浏览 Subreddit、搜索帖子与评论，社区调研与趋势发现。',
    url: 'https://github.com/adhikasp/mcp-reddit',
    config: `{
  "mcpServers": {
    "reddit": {
      "command": "uvx",
      "args": ["mcp-reddit"]
    }
  }
}`,
    source: 'github',
  },

  // 电商
  {
    name: 'Shopify',
    category: '电商',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '管理 Shopify 商品、订单与客户，跨境电商店铺运营自动化。',
    url: 'https://github.com/Shopify/shopify-mcp',
    config: `{
  "mcpServers": {
    "shopify": {
      "command": "npx",
      "args": ["-y", "@shopify/mcp-server"],
      "env": {
        "SHOPIFY_ACCESS_TOKEN": "<TOKEN>",
        "SHOPIFY_STORE_DOMAIN": "your-store.myshopify.com"
      }
    }
  }
}`,
    source: 'github',
  },
  {
    name: 'WooCommerce',
    category: '电商',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '管理 WooCommerce 商品、订单与客户，WordPress 独立站运营自动化。',
    url: 'https://github.com/Automattic/woocommerce-mcp',
    config: `{
  "mcpServers": {
    "woocommerce": {
      "command": "npx",
      "args": ["-y", "@automattic/mcp-server-woocommerce"],
      "env": {
        "WOOCOMMERCE_URL": "https://your-store.com",
        "WOOCOMMERCE_CONSUMER_KEY": "<KEY>",
        "WOOCOMMERCE_CONSUMER_SECRET": "<SECRET>"
      }
    }
  }
}`,
    source: 'github',
  },

  // 多媒体
  {
    name: 'ElevenLabs',
    category: '多媒体',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '文字转语音、声音克隆与音效生成，音视频内容创作流水线。',
    url: 'https://github.com/elevenlabs/elevenlabs-mcp',
    config: `{
  "mcpServers": {
    "elevenlabs": {
      "command": "uvx",
      "args": ["elevenlabs-mcp"],
      "env": { "ELEVENLABS_API_KEY": "<YOUR_KEY>" }
    }
  }
}`,
    source: 'github',
  },
  {
    name: 'Replicate',
    category: '多媒体',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '调用 Replicate 上的图像、视频与音频模型，文生图/图生视频一站式。',
    url: 'https://github.com/deepfates/replicate-mcp',
    config: `{
  "mcpServers": {
    "replicate": {
      "command": "npx",
      "args": ["-y", "replicate-mcp"],
      "env": { "REPLICATE_API_TOKEN": "<YOUR_TOKEN>" }
    }
  }
}`,
    source: 'github',
  },

  // 科研学术
  {
    name: 'arXiv',
    category: '科研学术',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '搜索与下载 arXiv 论文，文献综述与前沿技术跟踪。',
    url: 'https://github.com/blazickjp/arxiv-mcp-server',
    config: `{
  "mcpServers": {
    "arxiv": {
      "command": "uvx",
      "args": ["arxiv-mcp-server"]
    }
  }
}`,
    source: 'github',
  },
  {
    name: 'PubMed',
    category: '科研学术',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '检索 PubMed 生物医学文献，临床与生命科学研究方向。',
    url: 'https://github.com/JackKuo666/PubMed-MCP-Server',
    config: `{
  "mcpServers": {
    "pubmed": {
      "command": "uvx",
      "args": ["pubmed-mcp-server"]
    }
  }
}`,
    source: 'github',
  },

  // 生活服务
  {
    name: 'Weather',
    category: '生活服务',
    clients: ['Cursor', 'Claude Desktop', 'Cline'],
    transport: 'stdio',
    desc: '官方天气查询 Server，基于 Open-Meteo 免费 API，无需 Key 即可获取预报。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/weather',
    config: `{
  "mcpServers": {
    "weather": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-weather"]
    }
  }
}`,
    source: 'official',
  },
  {
    name: 'Time',
    category: '生活服务',
    clients: ['Cursor', 'Claude Desktop'],
    transport: 'stdio',
    desc: '时区转换与当前时间查询，跨国协作与日程安排的基础工具。',
    url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/time',
    config: `{
  "mcpServers": {
    "time": {
      "command": "uvx",
      "args": ["mcp-server-time"]
    }
  }
}`,
    source: 'official',
  },
];

function getAiMcpNavCategorySlug(category) {
  return String(category)
    .replace(/\s+/g, '-')
    .replace(/[^\w\u4e00-\u9fff-]/g, '')
    .toLowerCase();
}

function buildAiMcpNavLinks() {
  return AI_MCP_NAV_ITEMS.map(item => ({ ...item }));
}