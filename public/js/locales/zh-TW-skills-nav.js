/* ZH-TW overlays — skills-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('zh-TW', {
    skillsNav: {
        meta: {
          lead: "Curated GitHub Agent Skills with 1,000+ stars — video editing & generation, e-commerce, Xiaohongshu, marketing, SEO, and more. Each entry includes install command, compatible agents, and repo link.",
          searchPlaceholder: "Search skills, industry, use case, agents…",
          countLabel: "{n} skills",
          totalLabel: "{n} skills · {c} categories",
          empty: "No matching skills. Try another keyword.",
          copyCmd: "Copy command",
          openGithub: "GitHub",
          starsLabel: "{n} ★",
          agentsLabel: "Works with"
        },
        categories: {
          "Skill 安装与合集": "Installers & collections",
          "编程开发": "Engineering",
          "前端与设计": "Frontend & design",
          "视频剪辑与生成": "Video editing & generation",
          "跨境电商与电商": "Cross-border & e-commerce",
          "小红书与内容运营": "XHS & creator ops",
          "营销与 SEO": "Marketing & SEO",
          "内容写作": "Writing & content",
          "调研搜索": "Research & search",
          "产品运营": "Product & ops",
          "安全审计": "Security audit",
          "科研学术": "Science & research",
          "浏览器自动化": "Browser automation",
          "知识管理": "Knowledge management",
          "办公文档": "Office documents",
          "财务金融": "Finance"
        },
        items: {
          "skills CLI": {
            name: "skills CLI",
            desc: "Vercel open installer for 68+ coding agents — install any GitHub skill via npx skills add.",
            installNote: "Installer itself; example installs Vercel official skill pack"
          },
          "Anthropic Skills": {
            desc: "Official Anthropic demos: creative, dev, enterprise comms, and document skills (DOCX/PDF/PPTX/XLSX).",
            installNote: "Claude Code: /plugin marketplace add anthropics/skills"
          },
          "Antigravity Awesome Skills": {
            desc: "1,600+ installable skills with web, security, data, DevOps, QA, and marketing bundles.",
            installNote: "Claude Code: npx antigravity-awesome-skills --claude"
          },
          "Claude Skills 大全": {
            name: "Claude Skills Pack",
            desc: "337 skills and 70+ commands across engineering, marketing, product, compliance, and finance."
          },
          "Claude Skills 大全 (营销)": {
            name: "Claude Skills Pack (Marketing)",
            desc: "337 skills including marketing, brand, content, and growth experiment templates."
          },
          "Claude Skills 大全 (财务)": {
            name: "Claude Skills Pack (Finance)",
            desc: "337 skills including financial modeling, budgeting, fundraising, and compliance report templates."
          },
          "Awesome Agent Skills": {
            desc: "VoltAgent curated index of 1,000+ official and community skills.",
            installNote: "Search first with find, then npx skills add <repo>"
          },
          "Agent Skills 规范": {
            name: "Agent Skills Spec",
            desc: "Official open standard (agentskills.io) and SKILL.md format docs.",
            installNote: "Scaffold a new spec-compliant skill"
          },
          Superpowers: {
            desc: "Top agent dev methodology: brainstorm → design review → TDD plan → subagent-driven execution.",
            installNote: "Cursor: /add-plugin superpowers · Codex: /plugins → superpowers"
          },
          OpenMontage: {
            desc: "Open-source agent video studio: 12 pipelines, 52 tools, 500+ skills — script to final cut with FFmpeg, Remotion, TTS, and T2V.",
            installNote: "See AGENT_GUIDE.md for full video production workflow"
          },
          ViMax: {
            desc: "HKU agent video framework: director, screenwriter, producer, and generator in one automated pipeline."
          },
          "Remotion Skills": {
            desc: "Programmatic video with React — captions, motion, brand intros for knowledge shorts."
          },
          "Pika Skills": {
            desc: "Pika AI video generation: text-to-video, image-to-video, and stylized effects for creative shorts and ad concepts."
          },
          "Google Gemini 视频生成": {
            name: "Google Gemini Video Gen",
            desc: "Official Gemini API skill with media_generation sub-skill — Veo text/image-to-video and multimodal assets.",
            installNote: "Use media_generation sub-skill for Veo video models"
          },
          "OpenAI Codex 多媒体": {
            name: "OpenAI Codex Multimedia",
            desc: "Official Codex skill catalog with imagegen, sora, and other multimedia generation sub-skills.",
            installNote: "Browse curated sub-skills via /skills in Codex"
          },
          "Marketing Skills (视频)": {
            name: "Marketing Skills (Video)",
            desc: "Video sub-skill: short-video scripts, ad structure, social video strategy, and conversion copy."
          },
          "Social Media Skills (短视频)": {
            name: "Social Media Skills (Short Video)",
            desc: "Short-video scripts, topic planning, storyboard rhythm, and cross-platform content calendars for TikTok/Reels."
          },
          "Claude SEO (电商)": {
            name: "Claude SEO (E-commerce)",
            desc: "E-commerce SEO sub-skills: category pages, product schema, hreflang, and conversion landing pages.",
            installNote: "Use ecommerce-seo, schema-markup sub-skills after install"
          },
          "GEO SEO Claude": {
            desc: "GEO-first SEO for AI search visibility, brand authority, schema, and cross-platform citations."
          },
          "Claude SEO": {
            desc: "25 sub-skills + 18 sub-agents: technical SEO, international SEO, e-commerce SEO, backlinks, reporting."
          },
          "Marketing Skills": {
            desc: "35k+ star marketing skill pack: CRO, copywriting, SEO, analytics, and growth engineering."
          },
          "MD2WeChat Skill": {
            desc: "Markdown to WeChat: 40+ themes, AI images, batch publish, multi-account management."
          },
          Humanizer: {
            desc: "Remove AI-writing tells for blogs, marketing, and published content."
          },
          "Humanizer 中文版": {
            name: "Humanizer (Chinese)",
            desc: "Chinese-localized Humanizer for WeChat, Zhihu, Xiaohongshu de-AI polishing."
          },
          "Last 30 Days": {
            desc: "Research any topic across Reddit, X, YouTube, HN, Polymarket, and the web."
          },
          "Agent Reach": {
            desc: "Internet router for 13 platforms: XHS, Twitter, Bilibili, Reddit, GitHub, YouTube — zero API fees."
          },
          "Browser Use": {
            desc: "AI-driven browser automation: browse, fill forms, scrape, and validate for ops and testing."
          },
          "Finance Skills": {
            desc: "Financial analysis: statements, valuation models, budgets, and investment memos."
          }
        },
        agents: {
          "多平台": "Multi-platform",
          "格式通用": "Format universal",
          "通用": "Universal",
          Cursor: "Cursor",
          "Claude Code": "Claude Code",
          Codex: "Codex",
          "Gemini CLI": "Gemini CLI",
          Antigravity: "Antigravity",
          "GitHub Copilot": "GitHub Copilot",
          "Claude.ai": "Claude.ai",
          v0: "v0",
          OpenClaw: "OpenClaw",
          Grok: "Grok"
        }
      },
      strings: {
        skillsNavPage: {
          tag: "Skill",
          bannerTitle: "Skill Picks",
          bannerSubtitle: "Top GitHub skills · One-click install",
          title: "Skill Picks"
        },
        search: {
          typeSkillsNav: "Skill Picks"
        }
      }
  });
})();
