/* English overlays — Agent skills directory */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('en', {
    strings: {
      skillsNavPage: {
        tag: 'Skills hub',
        title: 'Top Agent Skills',
        linkTools: 'Browse AI tools directory →',
        bannerStat: '{n} skills',
      },
      search: {
        typeSkillsNav: 'Skill',
      },
    },
    skillsNav: {
      meta: {
        lead: 'Curated top GitHub Agent Skills by use case and compatible coding agents. Each entry includes a one-click install command and official repo link.',
        searchPlaceholder: 'Search skills, use cases, agents…',
        countLabel: '{n} skills',
        totalLabel: '{n} skills · {c} categories',
        empty: 'No matching skills. Try another keyword.',
        copyCmd: 'Copy command',
        openGithub: 'GitHub',
        starsLabel: '{n} ★',
        agentsLabel: 'Works with',
      },
      categories: {
        'Skill 安装与合集': 'Installers & collections',
        '编程开发': 'Engineering',
        '前端与设计': 'Frontend & design',
        '安全审计': 'Security audit',
        '科研学术': 'Science & research',
        '产品运营': 'Product & growth',
        '内容写作': 'Writing & content',
        '调研搜索': 'Research & search',
        '浏览器自动化': 'Browser automation',
        '知识管理': 'Knowledge management',
        '办公文档': 'Office documents',
      },
      items: {
        'skills CLI': {
          name: 'skills CLI',
          desc: 'Vercel open installer for 68+ coding agents — install any GitHub skill via npx skills add.',
          installNote: 'Installer itself; example installs Vercel official skill pack',
        },
        'Anthropic Skills': {
          desc: 'Official Anthropic demos: creative, dev, enterprise comms, and document skills (DOCX/PDF/PPTX/XLSX).',
          installNote: 'Claude Code: /plugin marketplace add anthropics/skills',
        },
        'Antigravity Awesome Skills': {
          desc: '1,600+ installable skills with web, security, data, DevOps, QA plugin bundles.',
          installNote: 'Claude Code: npx antigravity-awesome-skills --claude',
        },
        'Claude Skills 大全': {
          name: 'Claude Skills Pack',
          desc: '337 skills and 70+ commands across engineering, marketing, product, compliance, and finance.',
        },
        'Awesome Agent Skills': {
          desc: 'VoltAgent curated index of 1,000+ official and community skills.',
          installNote: 'Search first with find, then npx skills add <repo>',
        },
        'Agent Skills 规范': {
          name: 'Agent Skills Spec',
          desc: 'Official open standard (agentskills.io) and SKILL.md format docs.',
          installNote: 'Scaffold a new spec-compliant skill',
        },
        'Superpowers': {
          desc: 'Top agent dev methodology: brainstorm → design review → TDD plan → subagent-driven execution.',
          installNote: 'Cursor: /add-plugin superpowers · Codex: /plugins → superpowers',
        },
        'Agent Skills (Addy Osmani)': {
          desc: 'Production engineering skills: architecture review, performance, testing, code review.',
        },
        'Awesome Copilot': {
          desc: 'Community Copilot instructions, agents, and skills for PRs, tests, docs, and security.',
        },
        'Vercel Agent Skills': {
          desc: 'Official Vercel pack: React best practices, web guidelines, frontend performance, Next.js patterns.',
          installNote: 'Also try frontend-design, react-best-practices individually',
        },
        'Frontend Design': {
          desc: 'Vercel frontend design skill: typography, color, layout — avoids generic AI UI aesthetics.',
        },
        'Trail of Bits Skills': {
          desc: 'Security team skills: vuln detection, static analysis, audit workflows, contract security.',
        },
        'Scientific Agent Skills': {
          desc: '140+ science skills and 100+ databases for biology, chemistry, medicine, drug discovery.',
        },
        'PM Skills': {
          desc: '100+ product skills from discovery and strategy through launch and growth.',
        },
        'Humanizer': {
          desc: 'Remove AI-writing tells for blogs, marketing, and published content.',
        },
        'Humanizer 中文版': {
          name: 'Humanizer (Chinese)',
          desc: 'Chinese-localized Humanizer for WeChat, Zhihu, Xiaohongshu de-AI polishing.',
        },
        'Last 30 Days': {
          desc: 'Research any topic across Reddit, X, YouTube, HN, Polymarket, and the web.',
        },
        'Agent Reach': {
          desc: 'Internet router skill for 13 platforms: XHS, Twitter, Bilibili, Reddit, GitHub, YouTube, etc.',
        },
        'Playwright Skill': {
          desc: 'Claude Code browser automation — agent writes and runs Playwright for E2E validation.',
        },
        'Obsidian Skills': {
          desc: 'Teach agents Obsidian CLI and Markdown, Bases, JSON Canvas knowledge workflows.',
        },
        'Document Skills (Anthropic)': {
          desc: 'Production DOCX, PDF, PPTX, XLSX skills — same stack as Claude document features.',
          installNote: 'Claude Code plugin: /plugin install document-skills@anthropic-agent-skills',
        },
        'Skill Creator': {
          desc: 'Scaffold spec-compliant SKILL.md files for custom team workflows.',
          installNote: 'Generates template in cwd — fill name and description',
        },
      },
      agents: {
        '通用': 'Universal',
        'Cursor': 'Cursor',
        'Claude Code': 'Claude Code',
        'Codex': 'Codex',
        'Gemini CLI': 'Gemini CLI',
        'Antigravity': 'Antigravity',
        'GitHub Copilot': 'GitHub Copilot',
        'Claude.ai': 'Claude.ai',
        'v0': 'v0',
        'OpenClaw': 'OpenClaw',
        'Grok': 'Grok',
      },
    },
  });
})();