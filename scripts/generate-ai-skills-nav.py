#!/usr/bin/env python3
"""Generate public/js/ai-skills-nav.js from curated skill data."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_JS = ROOT / 'public' / 'js' / 'ai-skills-nav.js'
OUT_EN = ROOT / 'public' / 'js' / 'locales' / 'en-skills-nav-generated.json'

# (name, category, agents, stars, desc, github, install, installNote?)
RAW: list[tuple] = [
    # ── Skill 安装与合集 ──
    ('skills CLI', 'Skill 安装与合集', ['多平台', 'Cursor', 'Claude Code', 'Codex'], 23668,
     'Vercel 出品的开放 Agent Skill 安装器，支持 68+ 编码助手，统一用 npx skills add 安装任意 GitHub 仓库中的 Skill。',
     'https://github.com/vercel-labs/skills', 'npx skills add vercel-labs/agent-skills -g -y',
     '安装器本身；上方命令示例为安装 Vercel 官方 Skill 合集'),
    ('Anthropic Skills', 'Skill 安装与合集', ['Claude Code', 'Claude.ai', 'Cursor', 'Codex'], 155687,
     'Anthropic 官方 Skill 示范库，含创意、开发、企业沟通与文档处理（DOCX / PDF / PPTX / XLSX）等生产级范例。',
     'https://github.com/anthropics/skills', 'npx skills add anthropics/skills -g -y',
     'Claude Code 也可用：/plugin marketplace add anthropics/skills'),
    ('Antigravity Awesome Skills', 'Skill 安装与合集', ['Cursor', 'Claude Code', 'Codex', 'Gemini CLI', 'Antigravity'], 41804,
     '1,600+ 可安装 Skill 的超级合集，含 Web、安全、数据、DevOps、QA、营销等专项插件包与角色 Bundle。',
     'https://github.com/sickn33/antigravity-awesome-skills', 'npx antigravity-awesome-skills --cursor',
     'Claude Code：npx antigravity-awesome-skills --claude'),
    ('Claude Skills 大全', 'Skill 安装与合集', ['Claude Code', 'Cursor', 'Codex', 'Gemini CLI'], 19168,
     '337 个 Skill 与 70+ 自定义命令，覆盖工程、营销、产品、合规、研究、财务等全职能场景。',
     'https://github.com/alirezarezvani/claude-skills', 'npx skills add alirezarezvani/claude-skills -g -y', None),
    ('Awesome Agent Skills', 'Skill 安装与合集', ['多平台', 'Cursor', 'Claude Code', 'Codex'], 26598,
     'VoltAgent 策展的 1,000+ 社区与官方 Skill 索引，适合按方向浏览后再定向安装。',
     'https://github.com/VoltAgent/awesome-agent-skills', 'npx skills find --owner VoltAgent',
     '先用 find 搜索，再 npx skills add <repo> 安装'),
    ('Agent Skills 规范', 'Skill 安装与合集', ['格式通用'], 21125,
     '开放 Agent Skills 标准（agentskills.io）的官方规范与文档，各平台 Skill 均遵循 SKILL.md 格式。',
     'https://github.com/agentskills/agentskills', 'npx skills init my-skill',
     '用 CLI 脚手架创建符合规范的新 Skill'),

    # ── 编程开发 ──
    ('Superpowers', '编程开发', ['Claude Code', 'Cursor', 'Codex', 'Gemini CLI'], 239657,
     '最流行的 Agent 开发方法论：头脑风暴 → 设计评审 → TDD 实施计划 → 子 Agent 驱动开发，自动触发全流程 Skill。',
     'https://github.com/obra/superpowers', '/plugin install superpowers@claude-plugins-official',
     'Cursor：/add-plugin superpowers · Codex：/plugins 搜索 superpowers'),
    ('Agent Skills (Addy Osmani)', '编程开发', ['Cursor', 'Claude Code', 'Codex'], 67115,
     'Google 工程师出品的生产级工程 Skill：架构评审、性能优化、测试策略、代码审查等企业级开发规范。',
     'https://github.com/addyosmani/agent-skills', 'npx skills add addyosmani/agent-skills -g -a cursor -y', None),
    ('Awesome Copilot', '编程开发', ['GitHub Copilot', 'Cursor', 'Codex'], 35804,
     'GitHub 社区贡献的 Copilot 指令、Agent、Skill 与配置合集，覆盖 PR 审查、测试、文档、安全等开发场景。',
     'https://github.com/github/awesome-copilot', 'npx skills add github/awesome-copilot -g -a github-copilot -y', None),
    ('Context Engineering Skills', '编程开发', ['Cursor', 'Claude Code', 'Codex'], 16764,
     '上下文工程专项 Skill：RAG、记忆、工具编排与 Agent 上下文窗口优化，适合复杂多步开发任务。',
     'https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering', 'npx skills add muratcankoylan/Agent-Skills-for-Context-Engineering -g -y', None),
    ('Planning with Files', '编程开发', ['Claude Code', 'Cursor', 'Codex'], 24004,
     '用文件系统做 Agent 外部记忆：计划、进度与上下文持久化，适合长周期项目与多会话协作。',
     'https://github.com/OthmanAdi/planning-with-files', 'npx skills add OthmanAdi/planning-with-files -g -y', None),

    # ── 前端与设计 ──
    ('Vercel Agent Skills', '前端与设计', ['Cursor', 'Claude Code', 'Codex', 'v0'], 28373,
     'Vercel 官方 Skill 合集：React 最佳实践、Web 设计规范、前端性能、Next.js 模式等 Web 开发专项能力。',
     'https://github.com/vercel-labs/agent-skills', 'npx skills add vercel-labs/agent-skills --skill web-design-guidelines -g -y',
     '也可安装 frontend-design、react-best-practices 等单项'),
    ('Frontend Design', '前端与设计', ['Cursor', 'Claude Code', 'Codex', 'v0'], 28373,
     'Vercel 官方前端设计 Skill：排版、配色、布局与组件工艺规范，避免千篇一律的 AI 界面审美。',
     'https://github.com/vercel-labs/agent-skills/tree/main/skills/frontend-design', 'npx skills add vercel-labs/agent-skills --skill frontend-design -g -a cursor -y', None),
    ('Awesome Design Skills', '前端与设计', ['Cursor', 'Claude Code', 'Codex'], 1429,
     '设计类 Skill 精选合集：排版、配色、组件工艺与反 AI 审美套路，适合落地页与产品界面。',
     'https://github.com/bergside/awesome-design-skills', 'npx skills add bergside/awesome-design-skills -g -y', None),
    ('Stitch Skills', '前端与设计', ['Cursor', 'Claude Code', 'Gemini CLI'], 6202,
     'Google Stitch 设计 Skill：从设计意图生成高保真界面与组件规范，适合快速原型与视觉迭代。',
     'https://github.com/google-labs-code/stitch-skills', 'npx skills add google-labs-code/stitch-skills -g -y', None),
    ('Vue.js AI Skills', '前端与设计', ['Cursor', 'Claude Code', 'Codex'], 2640,
     'Vue 3 生态专项 Skill：组合式 API、Pinia、Nuxt 模式与最佳实践，适合 Vue 全栈项目。',
     'https://github.com/vuejs-ai/skills', 'npx skills add vuejs-ai/skills -g -y', None),

    # ── 电商与零售 ──
    ('Awesome E-commerce Skills', '电商与零售', ['Claude Code', 'Cursor', 'Antigravity'], 31,
     '电商 Skill 索引合集：选品、Listing、广告、客服与店铺运营模板，适合独立站与平台卖家。',
     'https://github.com/finsilabs/awesome-ecommerce-skills', 'npx skills add finsilabs/awesome-ecommerce-skills -g -y', None),
    ('Shopify Agent Skills', '电商与零售', ['Cursor', 'Claude Code', 'Codex'], 43,
     'Shopify 店铺运营 Skill：主题定制、商品上架、订单流程与营销插件集成指引。',
     'https://github.com/dragnoir/Shopify-agent-skills', 'npx skills add dragnoir/Shopify-agent-skills -g -y', None),
    ('Claude SEO (电商模块)', '电商与零售', ['Claude Code', 'Cursor', 'Codex'], 9933,
     '含电商 SEO 子 Skill：类目页、商品结构化数据、国际站 hreflang 与转化型落地页优化。',
     'https://github.com/AgriciDaniel/claude-seo', 'npx skills add AgriciDaniel/claude-seo -g -y',
     '安装后可用 ecommerce-seo、schema-markup 等子 Skill'),
    ('Solopreneur OPC Skills', '电商与零售', ['Claude Code', 'Cursor'], 943,
     '一人公司电商 Skill：产品页文案、定价策略、邮件序列与微型 SaaS 变现工作流。',
     'https://github.com/ReScienceLab/opc-skills', 'npx skills add ReScienceLab/opc-skills -g -y', None),
    ('eCommerce Claude Skills', '电商与零售', ['Claude Code', 'Cursor'], 3,
     '面向电商场景的 Claude Skill 模板：商品描述、促销邮件与客户旅程脚本。',
     'https://github.com/amanamabasiakpan/Claude-Skills-for-eCommerce', 'npx skills add amanamabasiakpan/Claude-Skills-for-eCommerce -g -y', None),

    # ── 跨境电商 ──
    ('Cross-border E-commerce Skills', '跨境电商', ['Claude Code', 'Antigravity', 'Cursor'], 13,
     '跨境 Skill 模板：选品调研、市场分析、IP 风险、关键词与 Listing 文案，覆盖 Amazon / 独立站出海场景。',
     'https://github.com/noique/cross-border-ecommerce-skills', 'npx skills add noique/cross-border-ecommerce-skills -g -y', None),
    ('GEO SEO Claude', '跨境电商', ['Claude Code', 'Cursor', 'Codex'], 8721,
     'GEO 优先 SEO Skill：AI 搜索可见性、品牌权威、Schema 与多平台引用优化，适合出海品牌获客。',
     'https://github.com/zubair-trabzada/geo-seo-claude', 'npx skills add zubair-trabzada/geo-seo-claude -g -y', None),
    ('Claude SEO', '跨境电商', ['Claude Code', 'Cursor', 'Codex'], 9933,
     '25 个子 Skill + 18 子 Agent：技术 SEO、国际 SEO、电商 SEO、外链与 PDF/Excel 报告，适合跨境站增长。',
     'https://github.com/AgriciDaniel/claude-seo', 'npx skills add AgriciDaniel/claude-seo -g -y', None),
    ('Marketing Skill Pack', '跨境电商', ['Claude Code', 'Cursor'], 38,
     'AI 营销工具一键安装包：Claude SEO、博客、Skill Forge 与 WordPress MCP，适合出海内容营销栈。',
     'https://github.com/AgriciDaniel/marketing-skill-pack', 'npx skills add AgriciDaniel/marketing-skill-pack -g -y', None),
    ('Last 30 Days', '跨境电商', ['Cursor', 'Claude Code', 'Codex'], 47046,
     '调研目标市场近 30 天海外讨论热度：Reddit、X、YouTube、HN 合成报告，适合跨境选品与趋势验证。',
     'https://github.com/mvanhorn/last30days-skill', 'npx skills add mvanhorn/last30days-skill -g -y', None),

    # ── 小红书运营 ──
    ('Xiaohongshu Skills', '小红书运营', ['Cursor', 'Claude Code', 'Codex'], 92,
     '小红书封面与笔记 Skill：按主题生成精美封面图（Nano Banana Pro），适合种草图文与品牌笔记。',
     'https://github.com/freestylefly/xiaohongshu-skills', 'npx skills add freestylefly/xiaohongshu-skills -g -y', None),
    ('XHS Playwright Skill', '小红书运营', ['Claude Code', 'Cursor'], 29,
     '基于 Playwright 的小红书工具 Skill：搜索笔记、帖子详情与用户主页数据提取，适合竞品与达人分析。',
     'https://github.com/DeliciousBuding/xiaohongshu-skill', 'npx skills add DeliciousBuding/xiaohongshu-skill -g -y', None),
    ('Rednote Skills', '小红书运营', ['Claude Code', 'Cursor', 'OpenClaw'], 48,
     '连接小红书（RedNote）的 Agent Skill：读取、搜索与内容分析，适合运营复盘与选题研究。',
     'https://github.com/MrMao007/rednote-skills', 'npx skills add MrMao007/rednote-skills -g -y', None),
    ('XHS MCP Skills', '小红书运营', ['Claude Code', 'Cursor', 'OpenClaw'], 227,
     '小红书 MCP 集成 Skill：通过 MCP 协议读写小红书数据，适合自动化运营与多账号工作流。',
     'https://github.com/autoclaw-cc/xiaohongshu-mcp-skills', 'npx skills add autoclaw-cc/xiaohongshu-mcp-skills -g -y', None),
    ('Agent Reach', '小红书运营', ['Cursor', 'Claude Code', 'Codex', 'OpenClaw'], 42834,
     '13 平台统一调研：含小红书、B 站、推特、Reddit、GitHub、YouTube，零 API 费读取公开内容，适合选题与竞品。',
     'https://github.com/Panniantong/Agent-Reach', 'npx skills add Panniantong/Agent-Reach -g -y', None),
    ('Humanizer 中文版', '小红书运营', ['Claude Code', 'Cursor'], 11722,
     '去除中文 AI 痕迹，优化公众号、知乎、小红书等平台的笔记语气与自然度，降低平台识别风险。',
     'https://github.com/op7418/Humanizer-zh', 'npx skills add op7418/Humanizer-zh -g -a claude-code -y', None),

    # ── 自媒体运营 ──
    ('MD2WeChat Skill', '自媒体运营', ['Claude Code', 'Cursor'], 2997,
     'Markdown 一键排版发布微信公众号：40+ 样式主题、AI 配图、批量发布与多账号管理。',
     'https://github.com/geekjourneyx/md2wechat-skill', 'npx skills add geekjourneyx/md2wechat-skill -g -y', None),
    ('WeChat Skills', '自媒体运营', ['Claude Code', 'Cursor'], 137,
     '公众号写作 Skill 套装：选题、大纲、排版与发布流程，适合个人 IP 与品牌号运营。',
     'https://github.com/gainubi/wechat-skills', 'npx skills add gainubi/wechat-skills -g -y', None),
    ('Huashu MD/HTML', '自媒体运营', ['Claude Code', 'Cursor'], 815,
     '万物→Markdown→精美 HTML 流水线，4 套反 AI slop 主题，适合公众号与自媒体长文排版。',
     'https://github.com/alchaincyf/huashu-md-html', 'npx skills add alchaincyf/huashu-md-html -g -y', None),
    ('Douyin Skills', '自媒体运营', ['Claude Code', 'Cursor', 'OpenClaw'], 11,
     '抖音自动化 Skill：开箱即用的短视频运营与内容发布辅助流程。',
     'https://github.com/zJay26/douyin-skills', 'npx skills add zJay26/douyin-skills -g -y', None),
    ('Upload Post Skill', '自媒体运营', ['Claude Code', 'Cursor'], 21,
     '多平台内容分发 Skill：一键上传帖子到多个社交媒体平台，适合矩阵号运营。',
     'https://github.com/Upload-Post/upload-post-skill', 'npx skills add Upload-Post/upload-post-skill -g -y', None),

    # ── 短视频与直播 ──
    ('Short Video Skills', '短视频与直播', ['Codex', 'Claude Code', 'Cursor'], 2,
     'Codex 热门短视频全流程 Skill：脚本、分镜、剪辑节奏与发布 checklist。',
     'https://github.com/lixiaolin378-dev/short-video-skills', 'npx skills add lixiaolin378-dev/short-video-skills -g -y', None),
    ('Remotion Skills', '短视频与直播', ['Cursor', 'Claude Code', 'Codex'], 3804,
     '用 React 编程式生成视频：口播字幕、动效与品牌片头，适合知识类短视频批量生产。',
     'https://github.com/remotion-dev/skills', 'npx skills add remotion-dev/skills -g -y', None),
    ('Social Media Skills (Charlie)', '短视频与直播', ['Claude Code', 'Cursor', 'Codex'], 1537,
     '社交媒体内容策略与创作 Skill：短视频脚本、话题策划与跨平台内容日历。',
     'https://github.com/charlie947/social-media-skills', 'npx skills add charlie947/social-media-skills -g -y', None),
    ('Blacktwist Social Skills', '短视频与直播', ['Claude Code', 'Cursor'], 275,
     '文字优先社交平台内容策略、创作与分析 Skill，适合 Threads、X 与短视频引流文案。',
     'https://github.com/blacktwist/social-media-skills', 'npx skills add blacktwist/social-media-skills -g -y', None),

    # ── 社交媒体 ──
    ('Social Media Skills', '社交媒体', ['Claude Code', 'Cursor', 'Codex'], 1537,
     '全平台社媒运营 Skill：内容日历、互动策略、话题研究与竞品监测工作流。',
     'https://github.com/charlie947/social-media-skills', 'npx skills add charlie947/social-media-skills -g -y', None),
    ('Nox Influencer Skills', '社交媒体', ['Claude Code', 'Cursor'], 22,
     '达人营销 Skill：创作者发现、尽职调查、联系方式获取与视频监测，适合品牌投放与 KOL 合作。',
     'https://github.com/NoxInfluencer/skills', 'npx skills add NoxInfluencer/skills -g -y', None),
    ('Claude Social Media Skills', '社交媒体', ['Claude Code', 'Cursor'], 4,
     'Claude 社媒运营模板：发帖节奏、互动话术与品牌声线一致性检查。',
     'https://github.com/michaellady/claude-social-media-skills', 'npx skills add michaellady/claude-social-media-skills -g -y', None),
    ('Content Marketing Skills', '社交媒体', ['Claude Code', 'Cursor'], 1,
     '内容营销 Claude Skill：漏斗内容、案例研究与 B2B 线索 nurturing 脚本。',
     'https://github.com/esref1071/content-marketing-skills-claude-code', 'npx skills add esref1071/content-marketing-skills-claude-code -g -y', None),

    # ── 营销增长 ──
    ('Marketing Skill Pack', '营销增长', ['Claude Code', 'Cursor'], 38,
     '营销工具全家桶一键安装：SEO、博客自动化、Skill Forge 与 WordPress MCP。',
     'https://github.com/AgriciDaniel/marketing-skill-pack', 'npx skills add AgriciDaniel/marketing-skill-pack -g -y', None),
    ('Claude SEO Skill (Agency)', '营销增长', ['Claude Code', 'Cursor'], 35,
     '代理商级 SEO & AEO 插件：关键词研究、技术审计、本地 SEO、外链与 AI 搜索优化。',
     'https://github.com/mangollc/claude-seo-skill', 'npx skills add mangollc/claude-seo-skill -g -y', None),
    ('PM Skills', '营销增长', ['Claude Code', 'Cursor', 'Codex'], 21288,
     '产品增长 Skill 市场：100+ 从发现、策略、执行到上线与增长的 Agentic Skill 与命令。',
     'https://github.com/phuryn/pm-skills', 'npx skills add phuryn/pm-skills -g -y', None),
    ('Claude Skills 大全 (营销)', '营销增长', ['Claude Code', 'Cursor', 'Codex'], 19168,
     '337 个 Skill 含营销、品牌、内容与增长实验模板，适合市场团队快速启用。',
     'https://github.com/alirezarezvani/claude-skills', 'npx skills add alirezarezvani/claude-skills -g -y', None),

    # ── SEO 与获客 ──
    ('Claude SEO', 'SEO 与获客', ['Claude Code', 'Cursor', 'Codex'], 9933,
     '通用 SEO Skill：技术 SEO、E-E-A-T、Schema、GEO/AEO、外链、本地 SEO 与 PDF/Excel 报告。',
     'https://github.com/AgriciDaniel/claude-seo', 'npx skills add AgriciDaniel/claude-seo -g -y', None),
    ('GEO SEO Claude', 'SEO 与获客', ['Claude Code', 'Cursor', 'Codex'], 8721,
     'GEO 优先 AI 搜索优化：可引用性评分、AI 爬虫分析、品牌权威与平台专项优化。',
     'https://github.com/zubair-trabzada/geo-seo-claude', 'npx skills add zubair-trabzada/geo-seo-claude -g -y', None),
    ('Google Ads Skills', 'SEO 与获客', ['Claude Code', 'Cursor'], 15,
     'Google 广告 Skill：搜索广告结构、关键词分组、出价策略与转化追踪检查清单。',
     'https://github.com/itallstartedwithaidea/google-ads-skills', 'npx skills add itallstartedwithaidea/google-ads-skills -g -y', None),
    ('Email Marketing Skill', 'SEO 与获客', ['Claude Code', 'Cursor'], 43,
     '邮件营销 Skill：欢迎序列、促销战役、弃购挽回与列表分层策略模板。',
     'https://github.com/jacquescorbytuech/email-marketing-skill', 'npx skills add jacquescorbytuech/email-marketing-skill -g -y', None),

    # ── 内容写作 ──
    ('Humanizer', '内容写作', ['Claude Code', 'Cursor'], 26324,
     '去除 AI 生成文本痕迹，让文章更自然、更像人类写作；适合博客、营销文案与对外发布内容润色。',
     'https://github.com/blader/humanizer', 'npx skills add blader/humanizer -g -a claude-code -y', None),
    ('Humanizer 中文版', '内容写作', ['Claude Code', 'Cursor'], 11722,
     'Humanizer 汉化版，针对中文 AI 痕迹优化，适合公众号、知乎、小红书等中文内容去 AI 味。',
     'https://github.com/op7418/Humanizer-zh', 'npx skills add op7418/Humanizer-zh -g -a claude-code -y', None),
    ('Agent Rules Books', '内容写作', ['Claude Code', 'Cursor'], 1986,
     '长文写作 Skill：结构化书籍/报告写作规则与章节编排，适合白皮书与课程内容生产。',
     'https://github.com/ciembor/agent-rules-books', 'npx skills add ciembor/agent-rules-books -g -y', None),
    ('Huashu MD/HTML', '内容写作', ['Claude Code', 'Cursor'], 815,
     'Markdown 与 HTML 互转排版流水线，反 AI slop 主题，适合专业长文与案例研究。',
     'https://github.com/alchaincyf/huashu-md-html', 'npx skills add alchaincyf/huashu-md-html -g -y', None),

    # ── 调研搜索 ──
    ('Last 30 Days', '调研搜索', ['Cursor', 'Claude Code', 'Codex'], 47046,
     '跨 Reddit、X、YouTube、HN、Polymarket 与全网调研任意话题，并合成有据可查的摘要报告。',
     'https://github.com/mvanhorn/last30days-skill', 'npx skills add mvanhorn/last30days-skill -g -y', None),
    ('Agent Reach', '调研搜索', ['Cursor', 'Claude Code', 'Codex', 'OpenClaw'], 42834,
     '互联网能力路由器：小红书、推特、B站、Reddit、GitHub、YouTube 等 13 平台统一调研与搜索。',
     'https://github.com/Panniantong/Agent-Reach', 'npx skills add Panniantong/Agent-Reach -g -y', None),
    ('Apify Agent Skills', '调研搜索', ['Cursor', 'Claude Code', 'Codex'], 2181,
     'Apify 网页抓取与搜索 Skill：结构化采集竞品、评论与市场数据，适合电商与行业调研。',
     'https://github.com/apify/agent-skills', 'npx skills add apify/agent-skills -g -y', None),
    ('Awesome Agent Skills 索引', '调研搜索', ['多平台', 'Cursor', 'Claude Code'], 5856,
     '社区 Skill 索引，按行业与用途浏览后再定向安装，适合发现垂直领域 Skill。',
     'https://github.com/heilcheng/awesome-agent-skills', 'npx skills find --owner heilcheng', None),

    # ── 产品运营 ──
    ('PM Skills', '产品运营', ['Claude Code', 'Cursor', 'Codex'], 21288,
     '产品经理 Skill 市场：100+ 从发现、策略、执行到上线与增长的 Agentic Skill、命令与插件。',
     'https://github.com/phuryn/pm-skills', 'npx skills add phuryn/pm-skills -g -y', None),
    ('PM Claude Skills', '产品运营', ['Claude Code', 'Cursor'], 1033,
     'PM 专项 Claude Skill：用户访谈、PRD、路线图与 OKR 对齐工作流。',
     'https://github.com/mohitagw15856/pm-claude-skills', 'npx skills add mohitagw15856/pm-claude-skills -g -y', None),
    ('noobnooc Skills', '产品运营', ['Claude Code', 'Cursor', 'Codex'], 1372,
     '产品、运营与增长混合 Skill 包：实验设计、指标看板与功能发布 checklist。',
     'https://github.com/noobnooc/noobnooc', 'npx skills add noobnooc/noobnooc -g -y', None),
    ('Acontext', '产品运营', ['Cursor', 'Claude Code'], 3555,
     '产品上下文管理 Skill：用户反馈、需求与决策记录结构化，适合 AI 辅助产品迭代。',
     'https://github.com/memodb-io/Acontext', 'npx skills add memodb-io/Acontext -g -y', None),

    # ── 安全审计 ──
    ('Trail of Bits Skills', '安全审计', ['Claude Code', 'Cursor'], 5885,
     'Trail of Bits 安全团队出品：漏洞检测、静态分析、审计工作流、合约安全等专业安全研究 Skill。',
     'https://github.com/trailofbits/skills', 'npx skills add trailofbits/skills -g -a claude-code -y', None),
    ('Cisco Skill Scanner', '安全审计', ['Claude Code', 'Cursor'], 2251,
     'Skill 安全扫描器：检测恶意或高风险 Agent Skill，适合团队 Skill 治理与供应链审计。',
     'https://github.com/cisco-ai-defense/skill-scanner', 'npx skills add cisco-ai-defense/skill-scanner -g -y', None),
    ('Claude BugHunter', '安全审计', ['Claude Code', 'Cursor'], 2742,
     '自动化 Bug 猎手 Skill：代码审计、回归验证与安全相关缺陷发现工作流。',
     'https://github.com/elementalsouls/Claude-BugHunter', 'npx skills add elementalsouls/Claude-BugHunter -g -y', None),

    # ── 科研学术 ──
    ('Scientific Agent Skills', '科研学术', ['Cursor', 'Claude Code', 'Codex', 'Antigravity'], 29427,
     'K-Dense 科学 Skill 库：140+ 即用 Skill 与 100+ 科学数据库，覆盖生物、化学、医学与药物发现。',
     'https://github.com/K-Dense-AI/scientific-agent-skills', 'npx skills add K-Dense-AI/scientific-agent-skills -g -y', None),
    ('Academic PPTX Skill', '科研学术', ['Claude Code', 'Cursor'], 604,
     '学术演示 Skill：论文汇报幻灯片结构、图表说明与答辩节奏优化。',
     'https://github.com/Gabberflast/academic-pptx-skill', 'npx skills add Gabberflast/academic-pptx-skill -g -y', None),
    ('Text-to-CAD', '科研学术', ['Cursor', 'Claude Code'], 7011,
     '文本描述生成 CAD 模型 Skill，适合工程、制造与科研原型快速建模。',
     'https://github.com/earthtojake/text-to-cad', 'npx skills add earthtojake/text-to-cad -g -y', None),

    # ── 浏览器自动化 ──
    ('Browser Use', '浏览器自动化', ['Claude Code', 'Cursor', 'Codex'], 100896,
     'AI 驱动浏览器自动化：Agent 自主浏览、填表、抓取与验证，适合运营与测试场景。',
     'https://github.com/browser-use/browser-use', 'npx skills add browser-use/browser-use -g -y', None),
    ('Playwright Skill', '浏览器自动化', ['Claude Code'], 2831,
     'Claude Code 浏览器自动化 Skill：Agent 自主编写并执行 Playwright 脚本，用于 E2E 测试与页面验证。',
     'https://github.com/lackeyjb/playwright-skill', 'npx skills add lackeyjb/playwright-skill -g -a claude-code -y', None),
    ('XHS Playwright Skill', '浏览器自动化', ['Claude Code', 'Cursor'], 29,
     '小红书 Playwright 自动化：搜索、帖子详情与用户主页提取，适合运营数据采集。',
     'https://github.com/DeliciousBuding/xiaohongshu-skill', 'npx skills add DeliciousBuding/xiaohongshu-skill -g -y', None),

    # ── 知识管理 ──
    ('Obsidian Skills', '知识管理', ['Cursor', 'Claude Code', 'Codex'], 38441,
     '教 Agent 使用 Obsidian CLI 与开放格式（Markdown、Bases、JSON Canvas），自动化笔记与知识库操作。',
     'https://github.com/kepano/obsidian-skills', 'npx skills add kepano/obsidian-skills -g -y', None),
    ('Planning with Files', '知识管理', ['Claude Code', 'Cursor', 'Codex'], 24004,
     '用文件系统做外部记忆：计划、进度与知识沉淀，适合长期项目与运营 SOP 管理。',
     'https://github.com/OthmanAdi/planning-with-files', 'npx skills add OthmanAdi/planning-with-files -g -y', None),
    ('Acontext', '知识管理', ['Cursor', 'Claude Code'], 3555,
     '结构化上下文与记忆 Skill，适合团队知识库与 Agent 长期记忆编排。',
     'https://github.com/memodb-io/Acontext', 'npx skills add memodb-io/Acontext -g -y', None),

    # ── 办公文档 ──
    ('Document Skills (Anthropic)', '办公文档', ['Claude Code', 'Claude.ai', 'Cursor'], 155687,
     'Anthropic 生产级文档 Skill：DOCX 编辑、PDF 解析、PPTX 幻灯片、XLSX 表格，与 Claude 文档能力同源。',
     'https://github.com/anthropics/skills/tree/main/skills', 'npx skills add anthropics/skills --skill xlsx --skill docx --skill pptx --skill pdf -g -y',
     'Claude Code 插件：/plugin install document-skills@anthropic-agent-skills'),
    ('Google Workspace CLI', '办公文档', ['Claude Code', 'Cursor', 'Codex'], 28930,
     'Google 办公套件 CLI Skill：Docs、Sheets、Slides 自动化，适合报表与协作文档批量处理。',
     'https://github.com/googleworkspace/cli', 'npx skills add googleworkspace/cli -g -y', None),
    ('Skill Creator', '办公文档', ['多平台', 'Cursor', 'Claude Code', 'Codex', 'Grok'], 23668,
     '用 skills CLI 脚手架创建符合 Agent Skills 规范的 SKILL.md，适合团队沉淀自定义工作流与领域知识。',
     'https://github.com/vercel-labs/skills', 'npx skills init my-custom-skill',
     '在当前目录生成 SKILL.md 模板，填写 name 与 description 即可'),

    # ── 财务金融 ──
    ('Finance Skills', '财务金融', ['Claude Code', 'Cursor'], 2892,
     '财务分析 Skill：报表解读、估值模型、预算与投融资材料起草辅助。',
     'https://github.com/himself65/finance-skills', 'npx skills add himself65/finance-skills -g -y', None),
    ('Awesome Finance Skills', '财务金融', ['Claude Code', 'Cursor'], 2603,
     '金融 Skill 精选索引：会计、投资、风控与 FP&A 场景模板合集。',
     'https://github.com/RKiding/Awesome-finance-skills', 'npx skills add RKiding/Awesome-finance-skills -g -y', None),
    ('WeChat Pay Skills', '财务金融', ['Claude Code', 'Cursor'], 289,
     '微信支付 API Skill：下单、退款与对账流程指引，适合国内电商与小程序支付集成。',
     'https://github.com/wechatpay-apiv3/wechatpay-skills', 'npx skills add wechatpay-apiv3/wechatpay-skills -g -y', None),

    # ── 法律合规 ──
    ('Awesome Legal Skills', '法律合规', ['Claude Code', 'Cursor'], 513,
     '法律 Skill 合集：合同审查、合规检查与隐私政策起草工作流。',
     'https://github.com/lawve-ai/awesome-legal-skills', 'npx skills add lawve-ai/awesome-legal-skills -g -y', None),
    ('Legal Skills', '法律合规', ['Claude Code', 'Cursor'], 413,
     '法律文档 Skill：条款分析、风险标注与多国法域对比辅助。',
     'https://github.com/cat-xierluo/legal-skills', 'npx skills add cat-xierluo/legal-skills -g -y', None),
    ('Legal Skills 中文版', '法律合规', ['Claude Code', 'Cursor'], 365,
     '中文法律 Skill：劳动合同、隐私合规与电商法务常见问题模板。',
     'https://github.com/THUYRan/Legal-Skills-Chinese', 'npx skills add THUYRan/Legal-Skills-Chinese -g -y', None),

    # ── 教育培训 ──
    ('Education Agent Skills', '教育培训', ['Claude Code', 'Cursor'], 359,
     '教育场景 Skill：课程大纲、教案、测验与学习者反馈分析工作流。',
     'https://github.com/GarethManning/education-agent-skills', 'npx skills add GarethManning/education-agent-skills -g -y', None),
    ('Education Skills', '教育培训', ['Claude Code', 'Cursor'], 57,
     '教学设计与课件 Skill：学习目标对齐、互动活动与评估 rubric 生成。',
     'https://github.com/flysheep-ai/education-skills', 'npx skills add flysheep-ai/education-skills -g -y', None),
    ('Academic PPTX Skill', '教育培训', ['Claude Code', 'Cursor'], 604,
     '教学演示 Skill：课堂幻灯片、讲义与训练营路演材料结构化生成。',
     'https://github.com/Gabberflast/academic-pptx-skill', 'npx skills add Gabberflast/academic-pptx-skill -g -y', None),
]


def item_to_dict(t: tuple) -> dict:
    d = {
        'name': t[0],
        'category': t[1],
        'agents': list(t[2]),
        'stars': t[3],
        'desc': t[4],
        'github': t[5],
        'install': t[6],
    }
    if len(t) > 7 and t[7]:
        d['installNote'] = t[7]
    return d


def js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def render_js(items: list[dict], categories: list[str]) -> str:
    lines = [
        '/* BestWayToLearn.AI — 优质 Agent Skill 导航 */',
        '',
        'const AI_SKILLS_NAV_CATEGORIES = [',
    ]
    for c in categories:
        lines.append(f'  {js_str(c)},')
    lines.append('];')
    lines.append('')
    lines.append('const AI_SKILLS_NAV_META = {')
    lines.append("  lead: '精选 GitHub 上各方向 star 数名列前茅的 Agent Skill，按行业与用途分类。涵盖电商、小红书、跨境电商、社媒营销等垂直场景；每条附带安装命令、适用工具与官方仓库。',")
    lines.append("  searchPlaceholder: '搜索 Skill 名称、行业、用途、适用软件…',")
    lines.append("  countLabel: '{n} 个 Skill',")
    lines.append("  totalLabel: '共 {n} 个 Skill · {c} 个分类',")
    lines.append("  empty: '没有匹配的 Skill，换个关键词试试',")
    lines.append("  copyCmd: '复制命令',")
    lines.append("  openGithub: 'GitHub',")
    lines.append("  starsLabel: '{n} ★',")
    lines.append("  agentsLabel: '适用',")
    lines.append('};')
    lines.append('')
    lines.append('/** @type {Array<{name:string,category:string,agents:string[],stars:number,desc:string,github:string,install:string,installNote?:string}>} */')
    lines.append('const AI_SKILLS_NAV_ITEMS = [')

    cur_cat = None
    for it in items:
        if it['category'] != cur_cat:
            cur_cat = it['category']
            lines.append('')
            lines.append(f'  // {cur_cat}')
        lines.append('  {')
        lines.append(f'    name: {js_str(it["name"])},')
        lines.append(f'    category: {js_str(it["category"])},')
        lines.append(f'    agents: [{", ".join(js_str(a) for a in it["agents"])}],')
        lines.append(f'    stars: {it["stars"]},')
        lines.append(f'    desc: {js_str(it["desc"])},')
        lines.append(f'    github: {js_str(it["github"])},')
        lines.append(f'    install: {js_str(it["install"])},')
        if it.get('installNote'):
            lines.append(f'    installNote: {js_str(it["installNote"])},')
        lines.append('  },')

    lines.append('];')
    lines.append('')
    lines.append('function getAiSkillsNavCategorySlug(category) {')
    lines.append('  return String(category)')
    lines.append("    .replace(/\\s+/g, '-')")
    lines.append("    .replace(/[^\\w\\u4e00-\\u9fff-]/g, '')")
    lines.append('    .toLowerCase();')
    lines.append('}')
    lines.append('')
    lines.append('function buildAiSkillsNavLinks() {')
    lines.append('  return AI_SKILLS_NAV_ITEMS.map(item => ({ ...item }));')
    lines.append('}')
    lines.append('')
    return '\n'.join(lines)


EN_CATEGORIES = {
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
}

EN_AGENTS = {
    '多平台': 'Multi-platform',
    '格式通用': 'Format universal',
    '通用': 'Universal',
    'Cursor': 'Cursor',
    'Claude Code': 'Claude Code',
    'Codex': 'Codex',
    'Gemini CLI': 'Gemini CLI',
    'GitHub Copilot': 'GitHub Copilot',
    'Claude.ai': 'Claude.ai',
    'v0': 'v0',
    'OpenClaw': 'OpenClaw',
    'Antigravity': 'Antigravity',
    'Grok': 'Grok',
}


def main() -> None:
    items = [item_to_dict(t) for t in RAW]
    # preserve category order from first appearance
    seen: set[str] = set()
    categories: list[str] = []
    for it in items:
        if it['category'] not in seen:
            seen.add(it['category'])
            categories.append(it['category'])

    counts: dict[str, int] = {}
    for it in items:
        counts[it['category']] = counts.get(it['category'], 0) + 1

    bad = {k: v for k, v in counts.items() if v < 3}
    if bad:
        raise SystemExit(f'Categories with <3 items: {bad}')

    OUT_JS.write_text(render_js(items, categories), encoding='utf-8')
    OUT_EN.write_text(json.dumps({
        'categories': EN_CATEGORIES,
        'agents': EN_AGENTS,
        'itemCount': len(items),
        'categoryCount': len(categories),
    }, ensure_ascii=False, indent=2), encoding='utf-8')

    print(f'✓ {len(categories)} categories, {len(items)} items → {OUT_JS}')
    for c in categories:
        print(f'  {c}: {counts[c]}')


if __name__ == '__main__':
    main()