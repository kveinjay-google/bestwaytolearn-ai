/* EN overlays — skills-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("en", { skillsNav: {
  "meta": {
    "lead": "Curated GitHub Agent Skills with 1,000+ stars. Each entry includes install command, compatible agents, and repo link.",
    "searchPlaceholder": "Search skills, industry, use case, agents…",
    "countLabel": "{n} skills",
    "totalLabel": "{n} skills · {c} categories",
    "empty": "No matching skills. Try another keyword.",
    "copyCmd": "Copy command",
    "openGithub": "GitHub",
    "starsLabel": "{n} ★",
    "agentsLabel": "Works with"
  },
  "categories": {
    "Skill 安装与合集": "Skill installation and collection",
    "编程开发": "Programming development",
    "前端与设计": "Front-end and design",
    "视频剪辑与生成": "Video editing and generation",
    "跨境电商与电商": "Cross-border e-commerce and e-commerce",
    "小红书与内容运营": "Xiaohongshu and content operation",
    "营销与 SEO": "Marketing and SEO",
    "内容写作": "content writing",
    "调研搜索": "Research search",
    "产品运营": "Product operations",
    "安全审计": "security audit",
    "科研学术": "Scientific research and academic",
    "浏览器自动化": "browser automation",
    "知识管理": "knowledge management",
    "办公文档": "Office documents",
    "财务金融": "Finance"
  },
  "agents": {
    "多平台": "Multi-platform",
    "格式通用": "Format universal",
    "通用": "Universal",
    "Cursor": "Cursor",
    "Claude Code": "Claude Code",
    "Codex": "Codex",
    "Gemini CLI": "Gemini CLI",
    "GitHub Copilot": "GitHub Copilot",
    "Claude.ai": "Claude.ai",
    "v0": "v0",
    "OpenClaw": "OpenClaw",
    "Antigravity": "Antigravity",
    "Grok": "Grok",
    "Windsurf": "Windsurf"
  },
  "items": {
    "skills CLI": {
      "name": "skills CLI",
      "desc": "Cursor Agent first lets it be scheduled and then executed; major changes require step-by-step commit instructions.",
      "installNote": "The installer itself; the command example above installs the Vercel official Skill collection"
    },
    "Anthropic Skills": {
      "name": "Anthropic Skills",
      "desc": "Anthropic's official Skill Demonstration Library, including production-level examples for creativity, development, corporate communication and document processing (DOCX / PDF / PPTX / XLSX).",
      "installNote": "Claude Code Also available: /plugin marketplace add anthropics/skills"
    },
    "Antigravity Awesome Skills": {
      "name": "Antigravity Awesome Skills",
      "desc": "A super collection of 1,600+ installable skills, including special plug-in packages and role bundles for Web, security, data, DevOps, QA, marketing, etc.",
      "installNote": "Claude Code：npx antigravity-awesome-skills --claude"
    },
    "Claude Skills 大全": {
      "name": "Claude Skills Encyclopedia",
      "desc": "337 skills and 70+ custom commands cover all-functional scenarios such as engineering, marketing, product, compliance, research, finance, etc."
    },
    "Awesome Agent Skills": {
      "name": "Awesome Agent Skills",
      "desc": "The 1,000+ community and official Skill index curated by VoltAgent is suitable for browsing by direction and then installation.",
      "installNote": "First search with find, then install with npx skills add <repo>"
    },
    "Agent Skills 规范": {
      "name": "Agent Skills Specification",
      "desc": "Open the official specifications and documents of the Agent Skills standard (agentskills.io). Skills on each platform follow the SKILL.md format.",
      "installNote": "Use CLI scaffolding to create new skills that comply with specifications"
    },
    "Superpowers": {
      "name": "Superpowers",
      "desc": "The most popular Agent development methodology: brainstorming → design review → TDD implementation plan → sub-Agent driven development, automatically triggering the entire process Skill.",
      "installNote": "Cursor:/add-plugin superpowers · Codex:/plugins Search superpowers"
    },
    "Agent Skills (Addy Osmani)": {
      "name": "Agent Skills (Addy Osmani)",
      "desc": "Production-level engineering skills produced by Google engineers: enterprise-level development specifications such as architecture review, performance optimization, testing strategy, code review, etc."
    },
    "Awesome Copilot": {
      "name": "Awesome Copilot",
      "desc": "A collection of Copilot instructions, Agents, Skills, and configurations contributed by the GitHub community, covering development scenarios such as PR review, testing, documentation, and security."
    },
    "Context Engineering Skills": {
      "name": "Context Engineering Skills",
      "desc": "Context engineering special skills: RAG, memory, tool orchestration and Agent context window optimization, suitable for complex multi-step development tasks."
    },
    "Planning with Files": {
      "name": "Planning with Files",
      "desc": "Use the file system as external memory: planning, progress and knowledge accumulation, suitable for long-term project and operation SOP management."
    },
    "Vercel Agent Skills": {
      "name": "Vercel Agent Skills",
      "desc": "Vercel official skill collection: React best practices, web design specifications, front-end performance, Next.js mode and other web development specialization capabilities.",
      "installNote": "You can also install individual items such as frontend-design and react-best-practices."
    },
    "Frontend Design": {
      "name": "Frontend Design",
      "desc": "Vercel's official front-end design skill: typesetting, color matching, layout and component process specifications to avoid a cookie-cutter AI interface aesthetic."
    },
    "Awesome Design Skills": {
      "name": "Awesome Design Skills",
      "desc": "Selected collection of design skills: layout, color matching, component technology and anti-AI aesthetic routines, suitable for landing pages and product interfaces."
    },
    "Stitch Skills": {
      "name": "Stitch Skills",
      "desc": "Google Stitch Design Skill: Generate high-fidelity interface and component specifications from design intent, suitable for rapid prototyping and visual iteration."
    },
    "Vue.js AI Skills": {
      "name": "Vue.js AI Skills",
      "desc": "Vue 3 ecological special skills: combined API, Pinia, Nuxt mode and best practices, suitable for Vue full-stack projects."
    },
    "OpenMontage": {
      "name": "OpenMontage",
      "desc": "The open source Agent video production system: 12 pipelines, 52 tools, 500+ Skills, covering scripts, storyboards, TTS, editing and finished film export, turning the coding assistant into a video studio.",
      "installNote": "Screenshots and form filling"
    },
    "ViMax": {
      "name": "ViMax",
      "desc": "The Agent video generation framework produced by the University of Hong Kong: Director, screenwriter, producer and generator are integrated, with fully automatic arrangement from creativity to finished film."
    },
    "Remotion Skills": {
      "name": "Remotion Skills",
      "desc": "Use React to programmatically generate videos: spoken subtitles, motion effects, brand titles and data visualization short videos, suitable for mass production of knowledge-based short videos."
    },
    "Pika Skills": {
      "name": "Pika Skills",
      "desc": "Pika AI video generation skill: Vincent video, Tusheng video and stylized special effects workflow, suitable for creative short films and advertising concept films."
    },
    "Google Gemini 视频生成": {
      "name": "Google Gemini video generation",
      "desc": "Google official Gemini API Skill: Contains media_generation sub-Skill, supports Veo Wensheng video, Tusheng video and multi-modal material generation.",
      "installNote": "After installation, you can use sub-Skills such as media_generation to call the Veo video model"
    },
    "OpenAI Codex 多媒体": {
      "name": "OpenAI Codex Multimedia",
      "desc": "OpenAI official Codex Skill directory: contains imagegen, sora and other multimedia generation and editing sub-skills, suitable for Agent-driven creative material production.",
      "installNote": "You can use /skills in Codex to browse curated sub-skills such as imagegen."
    },
    "Marketing Skills (视频)": {
      "name": "Marketing Skills (Video)",
      "desc": "The marketing skills collection includes video sub-skills: short video scripts, ad film structures, social media video strategies, and conversion video copywriting workflows."
    },
    "Social Media Skills (短视频)": {
      "name": "Social Media Skills (Short Video)",
      "desc": "Social media content strategy skills: short video scripts, topic planning, storyboard rhythm and cross-platform content calendar, suitable for TikTok / Douyin / Reels operations."
    },
    "Claude SEO (电商)": {
      "name": "Claude SEO (e-commerce)",
      "desc": "Contains e-commerce SEO sub-skills: category pages, product structured data, international site hreflang and conversion landing page optimization, suitable for platform sellers and DTC.",
      "installNote": "After installation, sub-skills such as ecommerce-seo and schema-markup are available."
    },
    "GEO SEO Claude": {
      "name": "GEO SEO Claude",
      "desc": "GEO priority SEO Skill: AI search visibility, brand authority, Schema and multi-platform citation optimization, suitable for overseas brands to acquire customers."
    },
    "Last 30 Days": {
      "name": "Last 30 Days",
      "desc": "Research any topic across Reddit, X, YouTube, HN, Polymarket, and the entire web and synthesize well-documented summary reports."
    },
    "Apify Agent Skills": {
      "name": "Apify Agent Skills",
      "desc": "Automatic web crawling Skill: Structured collection of page data, suitable for operational data collection and competitive product monitoring."
    },
    "Agent Reach": {
      "name": "Agent Reach",
      "desc": "Internet capability router: Unified research and search on 13 platforms including Xiaohongshu, Twitter, Bilibili, Reddit, GitHub, YouTube, etc."
    },
    "Humanizer 中文版": {
      "name": "Humanizer Chinese version",
      "desc": "The Chinese version of Humanizer is optimized for Chinese AI traces and is suitable for removing AI flavor from Chinese content such as public accounts, Zhihu, and Xiaohongshu."
    },
    "MD2WeChat Skill": {
      "name": "MD2WeChat Skill",
      "desc": "Markdown one-click typesetting to publish WeChat public accounts: 40+ style themes, AI illustrations, batch publishing and multi-account management, suitable for self-media matrix operations."
    },
    "Claude SEO": {
      "name": "Claude SEO",
      "desc": "25 sub-Skills + 18 sub-Agents: technical SEO, international SEO, e-commerce SEO, external links and PDF/Excel reports, suitable for brand growth teams."
    },
    "Marketing Skills": {
      "name": "Marketing Skills",
      "desc": "Marketing Skills Family Bucket: CRO, copywriting, SEO, analysis and growth engineering, 35k+ Star community preferred marketing agent capability package."
    },
    "PM Skills": {
      "name": "PM Skills",
      "desc": "Product Manager Skill Marketplace: 100+ Agentic Skills, Commands, and Plugins from discovery, strategy, and execution to go-live and growth."
    },
    "Claude Skills 大全 (营销)": {
      "name": "Claude Skills Encyclopedia (Marketing)",
      "desc": "337 skills include marketing, branding, content, and growth experiment templates for marketing teams to quickly launch."
    },
    "Humanizer": {
      "name": "Humanizer",
      "desc": "Removes traces of AI-generated text, making articles more natural and more like human writing; suitable for blogging, marketing copywriting, and content polishing for external publishing."
    },
    "Agent Rules Books": {
      "name": "Agent Rules Books",
      "desc": "Long Article Writing Skill: Structured book/report writing rules and chapter arrangement, suitable for white paper and course content production."
    },
    "Awesome Agent Skills 索引": {
      "name": "Awesome Agent Skills Index",
      "desc": "Community Skill Index, browse by industry and purpose and then install in a targeted manner, suitable for discovering Skills in vertical fields."
    },
    "PM Claude Skills": {
      "name": "PM Claude Skills",
      "desc": "PM Specialty Claude Skill: User interviews, PRD, roadmap and OKR alignment workflow."
    },
    "noobnooc Skills": {
      "name": "noobnooc Skills",
      "desc": "Product, operations, and growth hybrid skill pack: Experiment design, metrics dashboard, and feature release checklist."
    },
    "Acontext": {
      "name": "Acontext",
      "desc": "Task script: grab the top 10 AI keyword posts in HN Algolia API"
    },
    "Trail of Bits Skills": {
      "name": "Trail of Bits Skills",
      "desc": "Trail of Bits security team produces: vulnerability detection, static analysis, audit workflow, contract security and other professional security research skills."
    },
    "Cisco Skill Scanner": {
      "name": "Cisco Skill Scanner",
      "desc": "Skill Security Scanner: Detects malicious or high-risk Agent Skills, suitable for team Skill governance and supply chain auditing."
    },
    "Claude BugHunter": {
      "name": "Claude BugHunter",
      "desc": "Automated Bug Hunter Skill: Code audit, regression verification, and security-related defect discovery workflows."
    },
    "Scientific Agent Skills": {
      "name": "Scientific Agent Skills",
      "desc": "K-Dense Science Skill Library: 140+ ready-to-use skills and 100+ scientific databases covering biology, chemistry, medicine and drug discovery."
    },
    "Text-to-CAD": {
      "name": "Text-to-CAD",
      "desc": "Text description generation CAD model Skill, suitable for rapid modeling of engineering, manufacturing and scientific research prototypes."
    },
    "Document Skills (Anthropic)": {
      "name": "Document Skills (Anthropic)",
      "desc": "Anthropic production-level document skills: DOCX editing, PDF parsing, PPTX slides, XLSX tables, and have the same origin as Claude's document capabilities.",
      "installNote": "Claude Code plug-in:/plugin install document-skills@anthropic-agent-skills"
    },
    "Browser Use": {
      "name": "Browser Use",
      "desc": "AI-driven browser automation: Agent independently browses, fills out forms, crawls and verifies, suitable for operation and testing scenarios."
    },
    "Playwright Skill": {
      "name": "Playwright Skill",
      "desc": "Claude Code Browser Automation Skill: Agent independently writes and executes Playwright scripts for E2E testing and page verification."
    },
    "Obsidian Skills": {
      "name": "Obsidian Skills",
      "desc": "Teach Agent to use Obsidian CLI and open formats (Markdown, Bases, JSON Canvas) to automate note-taking and knowledge base operations."
    },
    "Google Workspace CLI": {
      "name": "Google Workspace CLI",
      "desc": "Google Office Suite CLI Skill: Docs, Sheets, and Slides automation, suitable for batch processing of reports and collaborative documents."
    },
    "Skill Creator": {
      "name": "Skill Creator",
      "desc": "Use skills CLI scaffolding to create SKILL.md that complies with Agent Skills specifications, which is suitable for teams to accumulate custom workflows and domain knowledge.",
      "installNote": "Generate the SKILL.md template in the current directory and fill in the name and description."
    },
    "Finance Skills": {
      "name": "Finance Skills",
      "desc": "Financial analysis skills: statement interpretation, valuation models, budget and investment and financing material drafting assistance."
    },
    "Awesome Finance Skills": {
      "name": "Awesome Finance Skills",
      "desc": "Selected index of financial skills: a collection of accounting, investment, risk control and FP&A scenario templates."
    },
    "Claude Skills 大全 (财务)": {
      "name": "Claude Skills Encyclopedia (Finance)",
      "desc": "337 skills include financial modeling, budgeting, investment and financing and compliance reporting templates, suitable for financial and business analysis teams."
    },
    "Smithery Skills": {
      "name": "Smithery Skills",
      "desc": "The MCP/Skill discovery and installation platform Skill produced by Smithery can search Registry popular servers and generate client configuration fragments.",
      "installNote": "Cursor / Claude configuration can also be generated with one click on the smithery.ai web page"
    },
    "Cursor Directory Skills": {
      "name": "Cursor Directory Skills",
      "desc": "Cursor Rules and Skill indexes curated by the community, covering high-frequency project templates such as full-stack, mobile, and AI applications."
    },
    "Cloudflare Agent Skills": {
      "name": "Cloudflare Agent Skills",
      "desc": "Cloudflare official Agent Skill: Workers, R2, KV, D1 and Pages development modes, suitable for edge computing and full-stack deployment."
    },
    "Composio Tool Router Skills": {
      "name": "Composio Tool Router Skills",
      "desc": "Composio tool routing skill: unified access to Gmail, GitHub, Slack, Notion and other 100+ SaaS, reducing Agent tool glue code."
    },
    "LangGraph Agent Skills": {
      "name": "LangGraph Agent Skills",
      "desc": "LangChain official LangGraph Skill: multi-agent orchestration, state diagrams, checkpoints and manual approval nodes, suitable for complex automation."
    },
    "Windsurf Wave Skills": {
      "name": "Windsurf Wave Skills",
      "desc": "Codeium Windsurf special skills: Cascade memory files, Wave multi-file editing and code base-level refactoring workflow."
    },
    "shadcn/ui Agent Skills": {
      "name": "shadcn/ui Agent Skills",
      "desc": "shadcn/ui component crafting skill: Radix + Tailwind mode, accessibility and theme variables to avoid AI generating cheap UI.",
      "installNote": "The effect is better when used with npx shadcn@latest add"
    },
    "Figma to Code Skills": {
      "name": "Figma to Code Skills",
      "desc": "Design draft to code Skill: Analyze Figma nodes, spacing and fonts, and generate React/Tailwind component skeleton."
    },
    "ComfyUI Workflow Skills": {
      "name": "ComfyUI Workflow Skills",
      "desc": "ComfyUI workflow skill: SD3/Flux node orchestration, ControlNet and batch image output, suitable for e-commerce and course image matching pipelines."
    },
    "CapCut Agent Skills": {
      "name": "CapCut Agent Skills",
      "desc": "After the meeting, open the Copilot panel to view the list of speaker segments and decisions."
    },
    "Shopify Hydrogen Skills": {
      "name": "Shopify Hydrogen Skills",
      "desc": "Shopify Hydrogen e-commerce skill: Headless store, product page SEO and shopping cart components, suitable for cross-border independent websites."
    },
    "Amazon SP-API Skills": {
      "name": "Amazon SP-API Skills",
      "desc": "Amazon seller SP-API Skill: order, inventory, advertising report pulling and exception alarm script generation."
    },
    "XHS Creator Skills": {
      "name": "XHS Creator Skills",
      "desc": "Xiaohongshu creation skills: title formula, cover keywords, topic tags and comment area guides, all in line with the platform’s tone."
    },
    "GEO SEO Skills": {
      "name": "GEO SEO Skills",
      "desc": "Generative Engine Optimization (GEO) Skill: Structured FAQ, Schema and llms.txt to improve AI search visibility."
    },
    "Technical Writing Skills": {
      "name": "Technical Writing Skills",
      "desc": "Technical documentation Skill: API reference, README, change log and tutorial structure, in line with the four quadrants of Divio documentation."
    },
    "Deep Research Skills": {
      "name": "Deep Research Skills",
      "desc": "In-depth research skills: multi-source search, comparison table, citation management and uncertainty annotation, suitable for competitive product and market analysis."
    },
    "n8n Workflow Skills": {
      "name": "n8n Workflow Skills",
      "desc": "n8n Automation Skill: Generate RSS → AI summary → email/Feishu and other workflow JSON to accelerate the construction of operation pipelines."
    },
    "Stagehand": {
      "name": "Stagehand",
      "desc": "Browserbase Stagehand: Natural language drives browser operations, automatically writes Playwright scripts and performs verification."
    },
    "LaTeX Paper Skills": {
      "name": "LaTeX Paper Skills",
      "desc": "Academic paper skills: LaTeX template, formula formatting, reference BibTeX and drafting of review response letters."
    },
    "Zapier Automation Skills": {
      "name": "Zapier Automation Skills",
      "desc": "Zapier Integration Skill: Describe triggers and actions, generate Zap drafts and test lists, and connect to 7000+ applications."
    }
  }
} });
})();
