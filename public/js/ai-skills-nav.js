/* BestWayToLearn.AI — 优质 Agent Skill 导航 */

const AI_SKILLS_NAV_CATEGORIES = [
  'Skill 安装与合集',
  '编程开发',
  '前端与设计',
  '安全审计',
  '科研学术',
  '产品运营',
  '内容写作',
  '调研搜索',
  '浏览器自动化',
  '知识管理',
  '办公文档',
];

const AI_SKILLS_NAV_META = {
  lead: '精选 GitHub 上各方向 star 数名列前茅的 Agent Skill，按用途与适用软件分类。每条附带一键复制的安装命令与官方仓库地址。',
  searchPlaceholder: '搜索 Skill 名称、用途、适用软件…',
  countLabel: '{n} 个 Skill',
  totalLabel: '共 {n} 个 Skill · {c} 个分类',
  empty: '没有匹配的 Skill，换个关键词试试',
  copyCmd: '复制命令',
  openGithub: 'GitHub',
  starsLabel: '{n} ★',
  agentsLabel: '适用',
};

/** @type {Array<{name:string,category:string,agents:string[],stars:number,desc:string,github:string,install:string,installNote?:string}>} */
const AI_SKILLS_NAV_ITEMS = [
  // Skill 安装与合集
  {
    name: 'skills CLI',
    category: 'Skill 安装与合集',
    agents: ['通用', 'Cursor', 'Claude Code', 'Codex'],
    stars: 23662,
    desc: 'Vercel 出品的开放 Agent Skill 安装器，支持 68+ 编码助手，统一用 npx skills add 安装任意 GitHub 仓库中的 Skill。',
    github: 'https://github.com/vercel-labs/skills',
    install: 'npx skills add vercel-labs/agent-skills -g -y',
    installNote: '安装器本身；上方命令示例为安装 Vercel 官方 Skill 合集',
  },
  {
    name: 'Anthropic Skills',
    category: 'Skill 安装与合集',
    agents: ['Claude Code', 'Claude.ai', 'Cursor', 'Codex'],
    stars: 155680,
    desc: 'Anthropic 官方 Skill 示范库，含创意、开发、企业沟通与文档处理（DOCX / PDF / PPTX / XLSX）等生产级范例。',
    github: 'https://github.com/anthropics/skills',
    install: 'npx skills add anthropics/skills -g -y',
    installNote: 'Claude Code 也可用：/plugin marketplace add anthropics/skills',
  },
  {
    name: 'Antigravity Awesome Skills',
    category: 'Skill 安装与合集',
    agents: ['Cursor', 'Claude Code', 'Codex', 'Gemini CLI', 'Antigravity'],
    stars: 41804,
    desc: '1,600+ 可安装 Skill 的超级合集，含 Web、安全、数据、DevOps、QA 等专项插件包与角色 Bundle。',
    github: 'https://github.com/sickn33/antigravity-awesome-skills',
    install: 'npx antigravity-awesome-skills --cursor',
    installNote: 'Claude Code：npx antigravity-awesome-skills --claude',
  },
  {
    name: 'Claude Skills 大全',
    category: 'Skill 安装与合集',
    agents: ['Claude Code', 'Cursor', 'Codex', 'Gemini CLI'],
    stars: 19168,
    desc: '337 个 Skill 与 70+ 自定义命令，覆盖工程、营销、产品、合规、研究、财务等全职能场景。',
    github: 'https://github.com/alirezarezvani/claude-skills',
    install: 'npx skills add alirezarezvani/claude-skills -g -y',
  },
  {
    name: 'Awesome Agent Skills',
    category: 'Skill 安装与合集',
    agents: ['Cursor', 'Claude Code', 'Codex', 'Gemini CLI'],
    stars: 26596,
    desc: 'VoltAgent 策展的 1,000+ 社区与官方 Skill 索引，适合按方向浏览后再定向安装。',
    github: 'https://github.com/VoltAgent/awesome-agent-skills',
    install: 'npx skills find --owner VoltAgent',
    installNote: '先用 find 搜索，再 npx skills add <repo> 安装',
  },
  {
    name: 'Agent Skills 规范',
    category: 'Skill 安装与合集',
    agents: ['通用'],
    stars: 21124,
    desc: '开放 Agent Skills 标准（agentskills.io）的官方规范与文档，各平台 Skill 均遵循 SKILL.md 格式。',
    github: 'https://github.com/agentskills/agentskills',
    install: 'npx skills init my-skill',
    installNote: '用 CLI 脚手架创建符合规范的新 Skill',
  },

  // 编程开发
  {
    name: 'Superpowers',
    category: '编程开发',
    agents: ['Claude Code', 'Cursor', 'Codex', 'Gemini CLI'],
    stars: 239645,
    desc: '最流行的 Agent 开发方法论：头脑风暴 → 设计评审 → TDD 实施计划 → 子 Agent 驱动开发，自动触发全流程 Skill。',
    github: 'https://github.com/obra/superpowers',
    install: '/plugin install superpowers@claude-plugins-official',
    installNote: 'Cursor：/add-plugin superpowers · Codex：/plugins 搜索 superpowers',
  },
  {
    name: 'Agent Skills (Addy Osmani)',
    category: '编程开发',
    agents: ['Cursor', 'Claude Code', 'Codex'],
    stars: 67108,
    desc: 'Google 工程师出品的生产级工程 Skill：架构评审、性能优化、测试策略、代码审查等企业级开发规范。',
    github: 'https://github.com/addyosmani/agent-skills',
    install: 'npx skills add addyosmani/agent-skills -g -a cursor -y',
  },
  {
    name: 'Awesome Copilot',
    category: '编程开发',
    agents: ['GitHub Copilot', 'Cursor', 'Codex'],
    stars: 35803,
    desc: 'GitHub 社区贡献的 Copilot 指令、Agent、Skill 与配置合集，覆盖 PR 审查、测试、文档、安全等开发场景。',
    github: 'https://github.com/github/awesome-copilot',
    install: 'npx skills add github/awesome-copilot -g -a github-copilot -y',
  },

  // 前端与设计
  {
    name: 'Vercel Agent Skills',
    category: '前端与设计',
    agents: ['Cursor', 'Claude Code', 'Codex', 'v0'],
    stars: 28371,
    desc: 'Vercel 官方 Skill 合集：React 最佳实践、Web 设计规范、前端性能、Next.js 模式等 Web 开发专项能力。',
    github: 'https://github.com/vercel-labs/agent-skills',
    install: 'npx skills add vercel-labs/agent-skills --skill web-design-guidelines -g -y',
    installNote: '也可安装 frontend-design、react-best-practices 等单项',
  },
  {
    name: 'Frontend Design',
    category: '前端与设计',
    agents: ['Cursor', 'Claude Code', 'Codex', 'v0'],
    stars: 28371,
    desc: 'Vercel 官方前端设计 Skill：排版、配色、布局与组件工艺规范，避免千篇一律的 AI 界面审美。',
    github: 'https://github.com/vercel-labs/agent-skills/tree/main/skills/frontend-design',
    install: 'npx skills add vercel-labs/agent-skills --skill frontend-design -g -a cursor -y',
  },

  // 安全审计
  {
    name: 'Trail of Bits Skills',
    category: '安全审计',
    agents: ['Claude Code', 'Cursor'],
    stars: 5885,
    desc: 'Trail of Bits 安全团队出品：漏洞检测、静态分析、审计工作流、合约安全等专业安全研究 Skill。',
    github: 'https://github.com/trailofbits/skills',
    install: 'npx skills add trailofbits/skills -g -a claude-code -y',
  },

  // 科研学术
  {
    name: 'Scientific Agent Skills',
    category: '科研学术',
    agents: ['Cursor', 'Claude Code', 'Codex', 'Antigravity'],
    stars: 29425,
    desc: 'K-Dense 科学 Skill 库：140+ 即用 Skill 与 100+ 科学数据库，覆盖生物、化学、医学与药物发现。',
    github: 'https://github.com/K-Dense-AI/scientific-agent-skills',
    install: 'npx skills add K-Dense-AI/scientific-agent-skills -g -y',
  },

  // 产品运营
  {
    name: 'PM Skills',
    category: '产品运营',
    agents: ['Claude Code', 'Cursor', 'Codex'],
    stars: 21285,
    desc: '产品经理 Skill 市场：100+ 从发现、策略、执行到上线与增长的 Agentic Skill、命令与插件。',
    github: 'https://github.com/phuryn/pm-skills',
    install: 'npx skills add phuryn/pm-skills -g -y',
  },

  // 内容写作
  {
    name: 'Humanizer',
    category: '内容写作',
    agents: ['Claude Code', 'Cursor'],
    stars: 26324,
    desc: '去除 AI 生成文本痕迹，让文章更自然、更像人类写作；适合博客、营销文案与对外发布内容润色。',
    github: 'https://github.com/blader/humanizer',
    install: 'npx skills add blader/humanizer -g -a claude-code -y',
  },
  {
    name: 'Humanizer 中文版',
    category: '内容写作',
    agents: ['Claude Code', 'Cursor'],
    stars: 0,
    desc: 'Humanizer 汉化版，针对中文 AI 痕迹优化，适合公众号、知乎、小红书等中文内容去 AI 味。',
    github: 'https://github.com/op7418/Humanizer-zh',
    install: 'npx skills add op7418/Humanizer-zh -g -a claude-code -y',
  },

  // 调研搜索
  {
    name: 'Last 30 Days',
    category: '调研搜索',
    agents: ['Cursor', 'Claude Code', 'Codex'],
    stars: 47030,
    desc: '跨 Reddit、X、YouTube、HN、Polymarket 与全网调研任意话题，并合成有据可查的摘要报告。',
    github: 'https://github.com/mvanhorn/last30days-skill',
    install: 'npx skills add mvanhorn/last30days-skill -g -y',
  },
  {
    name: 'Agent Reach',
    category: '调研搜索',
    agents: ['Cursor', 'Claude Code', 'Codex', 'OpenClaw'],
    stars: 42771,
    desc: '互联网能力路由器：小红书、推特、B站、Reddit、GitHub、YouTube 等 13 平台统一调研与搜索 Skill。',
    github: 'https://github.com/Panniantong/Agent-Reach',
    install: 'npx skills add Panniantong/Agent-Reach -g -y',
  },

  // 浏览器自动化
  {
    name: 'Playwright Skill',
    category: '浏览器自动化',
    agents: ['Claude Code'],
    stars: 2831,
    desc: 'Claude Code 浏览器自动化 Skill：Agent 自主编写并执行 Playwright 脚本，用于 E2E 测试与页面验证。',
    github: 'https://github.com/lackeyjb/playwright-skill',
    install: 'npx skills add lackeyjb/playwright-skill -g -a claude-code -y',
  },

  // 知识管理
  {
    name: 'Obsidian Skills',
    category: '知识管理',
    agents: ['Cursor', 'Claude Code', 'Codex'],
    stars: 38441,
    desc: '教 Agent 使用 Obsidian CLI 与开放格式（Markdown、Bases、JSON Canvas），自动化笔记与知识库操作。',
    github: 'https://github.com/kepano/obsidian-skills',
    install: 'npx skills add kepano/obsidian-skills -g -y',
  },

  // 办公文档
  {
    name: 'Document Skills (Anthropic)',
    category: '办公文档',
    agents: ['Claude Code', 'Claude.ai', 'Cursor'],
    stars: 155680,
    desc: 'Anthropic 生产级文档 Skill：DOCX 编辑、PDF 解析、PPTX 幻灯片、XLSX 表格，与 Claude 文档能力同源。',
    github: 'https://github.com/anthropics/skills/tree/main/skills',
    install: 'npx skills add anthropics/skills --skill xlsx --skill docx --skill pptx --skill pdf -g -y',
    installNote: 'Claude Code 插件：/plugin install document-skills@anthropic-agent-skills',
  },
  {
    name: 'Skill Creator',
    category: '办公文档',
    agents: ['Cursor', 'Claude Code', 'Codex', 'Grok'],
    stars: 23662,
    desc: '用 skills CLI 脚手架创建符合 Agent Skills 规范的 SKILL.md，适合团队沉淀自定义工作流与领域知识。',
    github: 'https://github.com/vercel-labs/skills',
    install: 'npx skills init my-custom-skill',
    installNote: '在当前目录生成 SKILL.md 模板，填写 name 与 description 即可',
  },
];

function getAiSkillsNavCategorySlug(category) {
  return String(category)
    .replace(/\s+/g, '-')
    .replace(/[^\w\u4e00-\u9fff-]/g, '')
    .toLowerCase();
}

function buildAiSkillsNavLinks() {
  return AI_SKILLS_NAV_ITEMS.map(item => ({ ...item }));
}