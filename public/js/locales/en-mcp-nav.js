/* EN overlays — mcp-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("en", { mcpNav: {
  "meta": {
    "lead": "Curated high-star MCP servers by use case. Tap Copy config to paste into Cursor or Claude Desktop.",
    "searchPlaceholder": "Search MCP name, category, client, use case…",
    "countLabel": "{n} servers",
    "totalLabel": "{n} servers · {c} categories",
    "empty": "No matching MCP servers. Try another keyword.",
    "copyConfig": "Copy config",
    "openLink": "Details",
    "clientsLabel": "Clients",
    "transportLabel": "Transport",
    "sourceLabel": "Source",
    "starsLabel": "{n} ★",
    "featuresLabel": "Features"
  },
  "categories": {
    "MCP 入门": "Getting started with MCP",
    "开发工具": "development tools",
    "搜索检索": "Search retrieval",
    "浏览器自动化": "browser automation",
    "地图与位置": "Maps and locations",
    "数据库": "database",
    "知识库与文档": "Knowledge Base and Documentation",
    "内容创作": "content creation",
    "办公协作": "Office collaboration",
    "金融数据": "financial data",
    "社交与社区": "Social & Community",
    "电商": "E-commerce",
    "多媒体": "multimedia",
    "科研学术": "Scientific research and academic",
    "生活服务": "Life services"
  },
  "clients": {
    "多平台": "Multi-platform",
    "开发者": "Developers",
    "Cursor": "Cursor",
    "Claude Desktop": "Claude Desktop",
    "Cline": "Cline",
    "Windsurf": "Windsurf",
    "Codex": "Codex",
    "Raycast": "Raycast"
  },
  "transports": {
    "概念": "Concept",
    "配置": "Setup",
    "文档": "Docs",
    "Registry": "Registry",
    "stdio": "stdio",
    "SSE": "SSE",
    "http": "HTTP"
  },
  "sources": {
    "official": "Official",
    "github": "GitHub",
    "community": "Community"
  },
  "items": {
    "MCP 是什么": {
      "name": "What is MCP",
      "desc": "MCP (Model Context Protocol) is an open protocol that connects AI clients and external tools. The client calls the tools provided by the Server through stdio/SSE, allowing the Agent to search web pages, read files, check databases, etc.",
      "features": [
        "open protocol standards",
        "stdio/SSE transport",
        "Connect LLM with external tools"
      ]
    },
    "Cursor 接入 MCP": {
      "name": "Cursor access to MCP",
      "desc": "In Cursor: Settings → MCP → Edit mcp.json, merge the JSON fragment below into the mcpServers object and save it. You can use the corresponding tools in the Agent dialogue.",
      "configNote": "Multiple Servers can be added; restart Cursor or refresh the MCP list after modification",
      "features": [
        "Edit mcp.json",
        "Multiple servers coexist",
        "Agent dialogue calling tool"
      ]
    },
    "Claude Desktop 接入 MCP": {
      "name": "Claude Desktop access MCP",
      "desc": "Edit claude_desktop_config.json (macOS: ~/Library/Application Support/Claude/), add Server configuration under mcpServers, and restart Claude Desktop to take effect.",
      "configNote": "For the Windows configuration file path, see the official Quickstart",
      "features": [
        "claude_desktop_config.json",
        "You are the prompt word coach. The user will give a simple prompt, please output:\n1. Problem diagnosis\n2. RTFC complete rewritten version\n3. Two test inputs and ideal output points\nChinese, concise.",
        "Native desktop integration"
      ]
    },
    "MCP 官方参考实现": {
      "name": "MCP official reference implementation",
      "desc": "The official reference server collection maintained by Anthropic (filesystem, git, fetch, memory, postgres, etc.). The \"official\" entries in each category on this page are from this repository.",
      "features": [
        "filesystem / git / fetch",
        "memory / postgres",
        "Official maintenance can be forked"
      ]
    },
    "MCP 协议文档": {
      "name": "MCP protocol document",
      "desc": "Model Context Protocol official specification, architecture description and multi-language SDK documentation, suitable for developing custom MCP Server or troubleshooting access issues.",
      "features": [
        "Protocol specification",
        "Architecture description",
        "Multi-language SDK"
      ]
    },
    "Context7": {
      "name": "Context7",
      "desc": "Inject the latest library documentation and API reference into LLM to avoid illusions and outdated syntax, which is a must for programming scenarios.",
      "features": [
        "Inject the latest library documentation",
        "API reference real-time query",
        "Reduce code illusion"
      ]
    },
    "GitHub MCP": {
      "name": "GitHub MCP",
      "desc": "Read and write Issues, PRs, warehouse files and search codes, allowing Agent to directly operate GitHub workflow.",
      "configNote": "You need to create a GitHub Personal Access Token and fill in env",
      "features": [
        "Read and write Issue / PR",
        "Search repository code",
        "Get file content"
      ]
    },
    "Filesystem": {
      "name": "Filesystem",
      "desc": "The official file system Server reads and writes files in a limited directory, suitable for local project analysis and batch changes.",
      "configNote": "Replace /path/to/allowed/dir with an allowed directory",
      "features": [
        "Limit directory reading and writing",
        "Batch file analysis",
        "Dify knowledge base segmentation is recommended to be 500–800 words/block; the test set is prepared with 20 real employee questions for acceptance."
      ]
    },
    "Git": {
      "name": "Git",
      "desc": "Official Git operation server: View status, diff, submission history and branches, assist in code review and version management.",
      "features": [
        "status/diff view",
        "Submit historical query",
        "branch information"
      ]
    },
    "Fetch": {
      "name": "Fetch",
      "desc": "The official web crawling server converts URL content into LLM-readable Markdown, suitable for reading documents and news.",
      "features": [
        "URL to Markdown",
        "Web page text extraction",
        "Document reading"
      ]
    },
    "Memory": {
      "name": "Memory",
      "desc": "The official knowledge graph memory server persists entities and relationships across sessions and is suitable for long-term project contexts.",
      "features": [
        "Knowledge graph memory",
        "Cross-session entity relationships",
        "Long term project context"
      ]
    },
    "Sequential Thinking": {
      "name": "Sequential Thinking",
      "desc": "The official structured thinking chain server guides Agents to reason, revise and branch to explore complex problems step by step.",
      "features": [
        "step-by-step reasoning chain",
        "Hypothetical revision",
        "Breaking down complex problems"
      ]
    },
    "Docker MCP": {
      "name": "Docker MCP",
      "desc": "Manage Docker containers, images and Compose, allowing Agent to directly operate local or remote container environments.",
      "features": [
        "Container start and stop management",
        "Mirror list",
        "Compose operation"
      ]
    },
    "Sentry MCP": {
      "name": "Sentry MCP",
      "desc": "Query Sentry errors, issues and performance data to assist in online troubleshooting and root cause analysis.",
      "features": [
        "Error Issue Query",
        "Performance trace",
        "Online troubleshooting"
      ]
    },
    "Brave Search": {
      "name": "Brave Search",
      "desc": "Brave Search API-driven web search provides Agent with real-time Internet retrieval capabilities.",
      "configNote": "Apply for an API Key at brave.com/search/api",
      "features": [
        "Real-time web search",
        "Structured results",
        "Privacy friendly search"
      ]
    },
    "Tavily": {
      "name": "Tavily",
      "desc": "A search API optimized for AI Agents that returns structured summaries, suitable for research and fact-checking.",
      "features": [
        "Agent optimized search",
        "structured summary",
        "fact check"
      ]
    },
    "Exa Search": {
      "name": "Exa Search",
      "desc": "Neural network semantic search is good at finding technical articles, papers and company information, and performs well in research scenarios.",
      "features": [
        "Semantic Neural Search",
        "Technical article search",
        "Company information query"
      ]
    },
    "Firecrawl": {
      "name": "Firecrawl",
      "desc": "Crawl, grab and search web pages, convert site content into LLM-friendly format, suitable for competitive products and data collection.",
      "features": [
        "Crawl the entire site",
        "Markdown conversion",
        "Competitive product data collection"
      ]
    },
    "Playwright MCP": {
      "name": "Playwright MCP",
      "desc": "Microsoft Playwright's official MCP controls Chromium for screenshots, clicks, form filling and E2E testing.",
      "features": [
        "Chromium Automation",
        "Screenshots and form filling",
        "E2E testing"
      ]
    },
    "Puppeteer": {
      "name": "Puppeteer",
      "desc": "Official Puppeteer Server, headless Chrome automation, suitable for web page screenshots, crawling and simple interactions.",
      "features": [
        "Headless Chrome",
        "Page screenshot",
        "DOM interaction"
      ]
    },
    "Browserbase": {
      "name": "Browserbase",
      "desc": "Cloud headless browser infrastructure, Agent performs complex web page tasks in remote browsers without local Chrome.",
      "features": [
        "Cloud browser",
        "No local Chrome required",
        "Complex web tasks"
      ]
    },
    "Google Maps": {
      "name": "Google Maps",
      "desc": "Geocoding, route planning, location search and surrounding inquiries, suitable for travel and local life Agents.",
      "features": [
        "Geocoding",
        "route planning",
        "POI search"
      ]
    },
    "OpenStreetMap": {
      "name": "OpenStreetMap",
      "desc": "Geocoding and location query based on OpenStreetMap, free and open source, suitable for scenarios that do not require Google API.",
      "features": [
        "Free geocoding",
        "Open source map data",
        "No API Key required"
      ]
    },
    "PostgreSQL": {
      "name": "PostgreSQL",
      "desc": "Official Postgres Server, read-only query table structure and data, auxiliary data analysis and natural language database search.",
      "configNote": "Replace with the actual connection string; read-only accounts are recommended",
      "features": [
        "Read-only SQL query",
        "Table structure exploration",
        "Natural language search library"
      ]
    },
    "SQLite": {
      "name": "SQLite",
      "desc": "Official SQLite Server, query local .db files, suitable for prototypes and small-scale data analysis.",
      "features": [
        "Local .db query",
        "Lightweight data analysis",
        "Prototype verification"
      ]
    },
    "Supabase": {
      "name": "Supabase",
      "desc": "Operation Supabase project: table management, SQL execution, Edge Functions and storage, full stack development tool.",
      "features": [
        "table management",
        "SQL execution",
        "Edge Functions"
      ]
    },
    "Notion": {
      "name": "Notion",
      "desc": "Read and write Notion pages and databases, and connect the team knowledge base to the Agent workflow.",
      "features": [
        "Page reading and writing",
        "Database query",
        "Team knowledge base access"
      ]
    },
    "Google Drive": {
      "name": "Google Drive",
      "desc": "Official Google Drive Server, search, read and list cloud documents, and open up office file libraries.",
      "configNote": "OAuth authorization is required for first run",
      "features": [
        "File search",
        "Document reading",
        "OAuth authorization"
      ]
    },
    "Obsidian MCP": {
      "name": "Obsidian MCP",
      "desc": "Connect to the local Obsidian repository, search and read Markdown notes, and is the first choice for personal knowledge management scenarios.",
      "configNote": "Requires Obsidian Local REST API plugin installed",
      "features": [
        "Local note search",
        "Markdown reading",
        "personal knowledge base"
      ]
    },
    "Figma": {
      "name": "Figma",
      "desc": "Read Figma design draft nodes, styles and comments, let the Agent understand the UI and generate corresponding code.",
      "features": [
        "Design node reading",
        "Style and layout analysis",
        "UI to code assistance"
      ]
    },
    "Cloudflare Workers": {
      "name": "Cloudflare Workers",
      "desc": "Manage Cloudflare Workers, KV, R2 and DNS to quickly deploy edge computing and static sites.",
      "features": [
        "Workers deployment",
        "KV/R2 Storage",
        "DNS management"
      ]
    },
    "Slack": {
      "name": "Slack",
      "desc": "Official Slack Server, send messages, check channels and threads, and embed Agent into team collaboration.",
      "features": [
        "Channel message sending",
        "Thread query",
        "Teamwork"
      ]
    },
    "Linear": {
      "name": "Linear",
      "desc": "Manage Linear Issues, projects and cycles, Agent-driven project management suitable for product teams.",
      "features": [
        "Issue Management",
        "Sprint cycle",
        "Product project management"
      ]
    },
    "Google Calendar": {
      "name": "Google Calendar",
      "desc": "Query and create Google Calendar events, and automate scheduling and meeting coordination.",
      "configNote": "Google OAuth needs to be completed for first run",
      "features": [
        "Event query",
        "Create schedule",
        "OAuth authorization"
      ]
    },
    "Alpha Vantage": {
      "name": "Alpha Vantage",
      "desc": "Query US stock, foreign exchange and cryptocurrency prices, technical indicators and company fundamental data.",
      "features": [
        "stock quotes",
        "Technical indicators",
        "fundamental data"
      ]
    },
    "Stripe": {
      "name": "Stripe",
      "desc": "Query Stripe customers, subscriptions, invoices and payments to aid in SaaS financial and billing analysis.",
      "features": [
        "Customers and Subscriptions",
        "Invoice inquiry",
        "SaaS billing analysis"
      ]
    },
    "Twitter/X MCP": {
      "name": "Twitter/X MCP",
      "desc": "Write an agenda before the meeting, post key points during the meeting, and use Notion AI to generate minutes and tasks.",
      "features": [
        "Tweet",
        "Timeline search",
        "User profile"
      ]
    },
    "Reddit": {
      "name": "Reddit",
      "desc": "Browse Subreddits, search posts and comments, conduct community research and discover trends.",
      "features": [
        "Subreddit Browse",
        "Post search",
        "community research"
      ]
    },
    "Shopify": {
      "name": "Shopify",
      "desc": "DeepMind previews AlphaFold 4’s improved prediction accuracy of drug molecule binding sites, and pharmaceutical companies expand pilot cooperation.",
      "features": [
        "Product management",
        "Order inquiry",
        "Customer information"
      ]
    },
    "WooCommerce": {
      "name": "WooCommerce",
      "desc": "Manage WooCommerce products, orders and customers, and automate WordPress independent site operations.",
      "features": [
        "WordPress store",
        "Orders and Customers",
        "Product management"
      ]
    },
    "ElevenLabs": {
      "name": "ElevenLabs",
      "desc": "Text-to-speech, sound cloning and sound effect generation, audio and video content creation pipeline.",
      "features": [
        "text to speech",
        "sound cloning",
        "Sound effect generation"
      ]
    },
    "Replicate": {
      "name": "Replicate",
      "desc": "Call image, video and audio models on Replicate, a one-stop shop for drawings and videos.",
      "features": [
        "Vincent diagram model",
        "video generation",
        "Audio model call"
      ]
    },
    "arXiv": {
      "name": "arXiv",
      "desc": "Search and download arXiv papers, literature reviews and cutting-edge technology tracking.",
      "features": [
        "Paper search",
        "PDF download",
        "literature review"
      ]
    },
    "PubMed": {
      "name": "PubMed",
      "desc": "Search PubMed for biomedical literature, clinical and life science research.",
      "features": [
        "biomedical literature",
        "Abstract search",
        "clinical research"
      ]
    },
    "Weather": {
      "name": "Weather",
      "desc": "The official weather query server, based on the Open-Meteo free API, can obtain the forecast without a Key.",
      "features": [
        "weather forecast",
        "Free Open-Meteo",
        "No API Key required"
      ]
    },
    "Time": {
      "name": "Time",
      "desc": "Time zone conversion and current time query, a basic tool for cross-border collaboration and scheduling.",
      "features": [
        "time zone conversion",
        "current time",
        "Cross-border collaboration"
      ]
    },
    "AWS MCP": {
      "name": "AWS MCP",
      "desc": "AWS official MCP suite covers core services such as Lambda, S3, DynamoDB, and CloudWatch, allowing Agents to directly operate cloud resources.",
      "configNote": "AWS credentials need to be configured (environment variables or ~/.aws/credentials)",
      "features": [
        "Lambda/S3 operations",
        "DynamoDB query",
        "CloudWatch logs"
      ]
    },
    "Vercel MCP": {
      "name": "Vercel MCP",
      "desc": "Vercel's official MCP manages project deployment, environment variables, domain names and build logs, and automates front-end deployment.",
      "features": [
        "Project deployment management",
        "Environment variable configuration",
        "Build log view"
      ]
    },
    "E2B Code Interpreter": {
      "name": "E2B Code Interpreter",
      "desc": "The cloud security sandbox executes Python/JS code, and the Agent can run scripts, draw pictures, and process data without polluting the local environment.",
      "features": [
        "Cloud sandbox execution",
        "Python/JS run",
        "data visualization"
      ]
    },
    "MongoDB": {
      "name": "MongoDB",
      "desc": "MongoDB official MCP, natural language query collection, aggregation analysis and Schema exploration, NoSQL data analysis tool.",
      "features": [
        "Collection query",
        "aggregation pipeline",
        "Schema Explore"
      ]
    },
    "Neon": {
      "name": "Neon",
      "desc": "Neon Serverless Postgres MCP, manages branch databases, executes SQL and migrates, and is the first choice for modern full-stack development.",
      "features": [
        "Serverless Postgres",
        "database branch",
        "SQL migration"
      ]
    },
    "Atlassian": {
      "name": "Atlassian",
      "desc": "Atlassian official MCP, read and write Jira Issues, Confluence pages and Sprint, and automate R&D team collaboration.",
      "features": [
        "Jira Issue Read and Write",
        "Confluence page",
        "Sprint management"
      ]
    },
    "21st.dev Magic": {
      "name": "21st.dev Magic",
      "desc": "AI drives UI components to generate MCP, generates React/Tailwind component code based on descriptions, and accelerates front-end prototyping.",
      "features": [
        "AI generated UI components",
        "React/Tailwind output",
        "Front-end prototype acceleration"
      ]
    },
    "Kubernetes": {
      "name": "Kubernetes",
      "desc": "Manage K8s cluster resources: Pod, Deployment, Service, logs and events, DevOps and SRE scenarios.",
      "configNote": "Requires local kubectl configured and accessible to the target cluster",
      "features": [
        "Pod/Deployment management",
        "Logs and events",
        "Cluster resource query"
      ]
    },
    "MCP Registry": {
      "name": "MCP Registry",
      "desc": "Model Context Protocol official registry, browse, rate and install the community MCP Server with one click, reducing the cost of Agent tool discovery.",
      "features": [
        "Server discovery and scoring",
        "One click installation",
        "Version management"
      ]
    },
    "Smithery": {
      "name": "Smithery",
      "desc": "MCP Server discovery and hosting platform, searches for high-star servers and generates Cursor/Claude Desktop configuration, supporting remote SSE connections.",
      "configNote": "Some servers require Smithery API Key; see smithery.ai documentation for details",
      "features": [
        "Remote MCP hosting",
        "Configuration generation",
        "High Star Server Selection"
      ]
    },
    "Pinecone": {
      "name": "Pinecone",
      "desc": "Vector database MCP: index query, namespace management and RAG retrieval, suitable for enterprise knowledge base and long document Q&A.",
      "features": [
        "vector search",
        "Namespace management",
        "RAG Q&A"
      ]
    },
    "Qdrant": {
      "name": "Qdrant",
      "desc": "Qdrant Vector Library MCP: Collection creation, vector writing and semantic search, self-hosted or using Qdrant Cloud.",
      "features": [
        "Self-hosted vector library",
        "Semantic search",
        "Collection management"
      ]
    },
    "Redis": {
      "name": "Redis",
      "desc": "Redis key-value operation MCP: cache read and write, publish and subscribe, and data structure query, suitable for session state and task queue debugging.",
      "features": [
        "Cache read and write",
        "Pub/Sub",
        "session state"
      ]
    },
    "Prisma": {
      "name": "Prisma",
      "desc": "Prisma ORM MCP: Schema exploration, migration suggestions and type-safe query generation to accelerate the database layer development of full-stack projects.",
      "configNote": "Need to be used in the project directory containing schema.prisma",
      "features": [
        "Schema Explore",
        "Migration recommendations",
        "Type-safe queries"
      ]
    },
    "ClickHouse": {
      "name": "ClickHouse",
      "desc": "ClickHouse Analysis Library MCP: OLAP query, table structure exploration and indicator aggregation, suitable for log and behavioral data analysis.",
      "features": [
        "OLAP analysis",
        "Log aggregation",
        "Indicator query"
      ]
    },
    "Grafana": {
      "name": "Grafana",
      "desc": "Grafana Observability MCP: Dashboard query, alarm status and Loki/Prometheus indicator retrieval to assist in online troubleshooting.",
      "features": [
        "Dashboard query",
        "Alarm status",
        "Loki/Prometheus"
      ]
    },
    "Semgrep": {
      "name": "Semgrep",
      "desc": "Static code security scanning MCP: Scan for vulnerabilities according to rule sets, SAST result interpretation and repair suggestions, suitable for PR security access control.",
      "features": [
        "SAST scan",
        "ruleset matching",
        "Vulnerability fix suggestions"
      ]
    },
    "LangSmith": {
      "name": "LangSmith",
      "desc": "LangChain LangSmith MCP: Tracks Agent call chains, evaluates data sets, and compares prompt word versions, suitable for LLM application debugging.",
      "features": [
        "Call chain tracing",
        "Evaluation dataset",
        "Prompt version comparison"
      ]
    },
    "HubSpot": {
      "name": "HubSpot",
      "desc": "HubSpot CRM MCP: Contact, company and deal pipeline query updates, suitable for sales and marketing agent automation.",
      "features": [
        "CRM Contact",
        "Transaction pipeline",
        "sales automation"
      ]
    },
    "Salesforce": {
      "name": "Salesforce",
      "desc": "Salesforce MCP: SOQL queries, lead and opportunity updates, enterprise CRM and sales assistant scenarios.",
      "configNote": "It is recommended to use OAuth connection method in production environment",
      "features": [
        "SOQL query",
        "Lead opportunities",
        "Enterprise CRM"
      ]
    },
    "Zapier": {
      "name": "Zapier",
      "desc": "Zapier MCP: Trigger 7000+ application automation, let Agent create Zaps, query running history and test actions.",
      "features": [
        "7000+ applications",
        "Create a Zap",
        "Running history"
      ]
    },
    "Cloudinary": {
      "name": "Cloudinary",
      "desc": "Cloudinary media MCP: image/video upload, transformation URL generation and resource library search, suitable for content operation and e-commerce materials.",
      "features": [
        "media upload",
        "Transform URL",
        "Resource library search"
      ]
    },
    "DeepWiki": {
      "name": "DeepWiki",
      "desc": "Devin DeepWiki MCP: Read GitHub warehouse Wiki-style documents and code structures to quickly understand unfamiliar open source projects.",
      "features": [
        "Warehouse documentation",
        "Quick overview of code structure",
        "Understanding open source projects"
      ]
    },
    "Raycast": {
      "name": "Raycast",
      "desc": "Raycast MCP Extension: Call MCP tools within the macOS launcher to quickly execute scripts, searches, and system operations.",
      "configNote": "Requires Raycast to be installed and MCP extension enabled",
      "features": [
        "macOS launcher",
        "MCP extension",
        "Quick system operation"
      ]
    }
  }
} });
})();
