/* English overlays — Agent skills directory */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('en', {
    strings: {
      skillsNavPage: {
        tag: 'Skill',
        title: 'Top Agent Skills',
      },
      aiNavPage: {
        tabSkills: 'Skills',
      },
      search: {
        typeSkillsNav: 'Skill',
      },
    },
    skillsNav: {
      meta: {
        lead: 'Curated GitHub Agent Skills by industry and use case — e-commerce, Xiaohongshu, cross-border marketing, social media, and more. Each entry includes install command, compatible agents, and repo link.',
        searchPlaceholder: 'Search skills, industry, use case, agents…',
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
        '电商与零售': 'E-commerce & retail',
        '跨境电商': 'Cross-border commerce',
        '小红书运营': 'Xiaohongshu / RedNote',
        '自媒体运营': 'Creator & self-media',
        '短视频与直播': 'Short video & live',
        '社交媒体': 'Social media',
        '营销增长': 'Marketing & growth',
        'SEO 与获客': 'SEO & acquisition',
        '内容写作': 'Writing & content',
        '调研搜索': 'Research & search',
        '产品运营': 'Product & ops',
        '安全审计': 'Security audit',
        '科研学术': 'Science & research',
        '浏览器自动化': 'Browser automation',
        '知识管理': 'Knowledge management',
        '办公文档': 'Office documents',
        '财务金融': 'Finance',
        '法律合规': 'Legal & compliance',
        '教育培训': 'Education & training',
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
          desc: '1,600+ installable skills with web, security, data, DevOps, QA, and marketing bundles.',
          installNote: 'Claude Code: npx antigravity-awesome-skills --claude',
        },
        'Claude Skills 大全': {
          name: 'Claude Skills Pack',
          desc: '337 skills and 70+ commands across engineering, marketing, product, compliance, and finance.',
        },
        'Claude Skills 大全 (营销)': {
          name: 'Claude Skills Pack (Marketing)',
          desc: '337 skills including marketing, brand, content, and growth experiment templates.',
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
        'Awesome E-commerce Skills': {
          desc: 'E-commerce skill index: product research, listings, ads, support — for marketplaces and DTC.',
        },
        'Shopify Agent Skills': {
          desc: 'Shopify store ops: themes, product setup, orders, and marketing app integration.',
        },
        'Claude SEO (电商模块)': {
          name: 'Claude SEO (E-commerce)',
          desc: 'E-commerce SEO sub-skills: category pages, product schema, hreflang, and conversion landing pages.',
          installNote: 'Use ecommerce-seo, schema-markup sub-skills after install',
        },
        'Cross-border E-commerce Skills': {
          desc: 'Cross-border templates: product research, market analysis, IP risk, keywords, and listing copy for Amazon/DTC.',
        },
        'GEO SEO Claude': {
          desc: 'GEO-first SEO for AI search visibility, brand authority, schema, and cross-platform citations.',
        },
        'Claude SEO': {
          desc: '25 sub-skills + 18 sub-agents: technical SEO, international SEO, e-commerce SEO, backlinks, reporting.',
        },
        'Marketing Skill Pack': {
          desc: 'One-command marketing stack: Claude SEO, blog automation, Skill Forge, WordPress MCP.',
        },
        'Xiaohongshu Skills': {
          desc: 'XHS cover and note skill — themed cover images (Nano Banana Pro) for种草 posts and brand notes.',
        },
        'XHS Playwright Skill': {
          desc: 'Playwright XHS tools: search notes, post details, and profile extraction for competitor research.',
        },
        'Rednote Skills': {
          desc: 'Connect to RedNote/Xiaohongshu: read, search, and analyze content for ops and topic research.',
        },
        'XHS MCP Skills': {
          desc: 'Xiaohongshu MCP integration for automated ops and multi-account workflows.',
        },
        'MD2WeChat Skill': {
          desc: 'Markdown to WeChat: 40+ themes, AI images, batch publish, multi-account management.',
        },
        'WeChat Skills': {
          desc: 'WeChat official account writing pack: topics, outlines, layout, and publish workflow.',
        },
        'Huashu MD/HTML': {
          desc: 'Markdown↔HTML pipeline with anti-AI-slop themes for long-form creator content.',
        },
        'Douyin Skills': {
          desc: 'Douyin automation skills for short-video ops and publishing assistance.',
        },
        'Short Video Skills': {
          desc: 'End-to-end short-video workflow: scripts, storyboards, edit rhythm, publish checklist.',
        },
        'Remotion Skills': {
          desc: 'Programmatic video with React — captions, motion, brand intros for knowledge shorts.',
        },
        'Social Media Skills': {
          desc: 'Cross-platform social ops: content calendar, engagement, topic research, competitor monitoring.',
        },
        'Nox Influencer Skills': {
          desc: 'Influencer marketing: creator discovery, due diligence, contacts, and video monitoring.',
        },
        'Google Ads Skills': {
          desc: 'Google Ads structure, keyword groups, bidding, and conversion tracking checklists.',
        },
        'Email Marketing Skill': {
          desc: 'Email campaigns: welcome sequences, promos, cart recovery, and list segmentation.',
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
          desc: 'Internet router for 13 platforms: XHS, Twitter, Bilibili, Reddit, GitHub, YouTube — zero API fees.',
        },
        'Browser Use': {
          desc: 'AI-driven browser automation: browse, fill forms, scrape, and validate for ops and testing.',
        },
        'Finance Skills': {
          desc: 'Financial analysis: statements, valuation models, budgets, and investment memos.',
        },
        'Awesome Legal Skills': {
          desc: 'Legal skill collection: contract review, compliance checks, privacy policy drafting.',
        },
        'Education Agent Skills': {
          desc: 'Education workflows: syllabi, lesson plans, quizzes, and learner feedback analysis.',
        },
      },
      agents: {
        '多平台': 'Multi-platform',
        '格式通用': 'Format universal',
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