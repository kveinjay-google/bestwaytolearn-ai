/* BestWayToLearn.AI — Content Data */

const LEARNING_PHASES = [
  {
    id: 'learn', num: '01', title: '认知基础', subtitle: '弄懂 AI 是什么、如何工作',
    days: 'Day 1–3', color: 'var(--accent-teal)',
    modules: ['AI 全景入门', 'AI 原理', 'AI 知识库'],
    anchors: ['#ai-overview', '#fundamentals', '#knowledge'],
    desc: '从 AI 全景认知到 ML/DL 原理，建立扎实的认知框架。'
  },
  {
    id: 'tools', num: '02', title: '工具掌握', subtitle: '选对工具、写好提示词',
    days: 'Day 4–5', color: 'var(--accent-amber)',
    modules: ['主流应用', '提示词实验室'],
    anchors: ['#apps', '#prompt-lab'],
    desc: '了解 43 款主流 AI 应用，学会用结构化提示词驱动 AI 产出。'
  },
  {
    id: 'practice', num: '03', title: '实战应用', subtitle: '把 AI 嵌入真实工作流',
    days: 'Day 6', color: 'var(--accent-violet)',
    modules: ['真实软件实操', '实战场景模板'],
    anchors: ['#hands-on', '#practice'],
    desc: '30 个真实软件手把手教程 + 16 个场景模板，跟着做就能产出成果。'
  },
  {
    id: 'validate', num: '04', title: '检验巩固', subtitle: '测验复盘、持续精进',
    days: 'Day 7', color: 'var(--accent-rose)',
    modules: ['知识测验'],
    anchors: ['#quiz'],
    desc: '100 道精选测验检验成果，制定后续 30 天实践计划。'
  }
];

const LEARNING_PATH = [
  {
    day: 1, phase: 1, duration: '约 45 分钟',
    title: '认识人工智能',
    goto: [{ label: 'AI 全景入门', href: '#ai-overview' }, { label: 'AI 原理', href: '#fundamentals' }, { label: '知识库', href: '#knowledge' }],
    goal: '建立 AI 的全局认知：是什么、能干什么、有哪些工具、正在改变什么',
    desc: '先读「AI 全景入门」建立鸟瞰视角，再深入原理模块。了解 AI 三次发展浪潮，区分专用 AI 与通用 AI（AGI）。',
    tasks: [
      '阅读「AI 全景入门」全部 5 个板块（建议 20 分钟）',
      '阅读「AI 原理」模块：人工智能、生成式 AI',
      '翻转 5 张核心概念卡：AI、ML、DL、LLM、GenAI',
      '写下 1 个你想用 AI 解决的真实问题（工作/学习/生活）'
    ],
    milestone: '学完后你能向他人清晰解释「AI 是什么」以及日常所说的 AI 主要指什么。'
  },
  {
    day: 2, phase: 1, duration: '约 50 分钟',
    title: '机器学习基础',
    goto: [{ label: 'AI 原理', href: '#fundamentals' }, { label: '知识库', href: '#knowledge' }],
    goal: '理解「数据 → 训练 → 预测」核心流程及三种学习范式',
    desc: '机器学习是让计算机从数据中自动发现规律，而非人工编写每一条规则。掌握监督学习、无监督学习、强化学习的区别与典型应用。',
    tasks: [
      '阅读「AI 原理」中的机器学习（ML）模块',
      '学习概念卡：监督学习、过拟合、预训练、零样本/少样本',
      '思考：你的岗位有哪些重复性判断或分类任务？',
      '用 ChatGPT 提问：「用通俗例子解释监督学习和无监督学习的区别」'
    ],
    milestone: '学完后你能判断某个场景适合哪种机器学习范式。'
  },
  {
    day: 3, phase: 1, duration: '约 60 分钟',
    title: '深度学习与大模型',
    goto: [{ label: 'AI 原理', href: '#fundamentals' }, { label: '知识库', href: '#knowledge' }],
    goal: '掌握神经网络、Transformer、LLM 的核心思想与能力边界',
    desc: '深度学习用多层神经网络自动提取特征。Transformer 架构催生了 GPT、Claude 等大语言模型，改变了人机交互方式。',
    tasks: [
      '阅读：神经网络、Transformer、大语言模型三个模块',
      '学习概念卡：Token、上下文窗口、Transformer、GPT、RLHF',
      '注册并试用一款对话 AI，问一个专业问题并评估回答质量',
      '记录：AI 回答中哪些部分准确？哪些需要核实？'
    ],
    milestone: '学完后你能解释 LLM 如何工作，以及为什么会出现「幻觉」。'
  },
  {
    day: 4, phase: 2, duration: '约 50 分钟',
    title: '提示词工程入门',
    goto: [{ label: '知识库', href: '#knowledge' }, { label: '提示词实验室', href: '#prompt-lab' }],
    goal: '掌握结构化提示词框架，显著提升 AI 输出质量',
    desc: '提示词（Prompt）是你与 AI 沟通的接口。好的提示词包含：角色、任务、背景、格式、约束五个要素。避免模糊指令，学会迭代优化。',
    tasks: [
      '学习概念卡：提示词、温度、零样本、少样本、CoT',
      '在提示词实验室体验 3 个实战模拟案例，同屏查看提示词与预置回复',
      '对比实验：同一问题分别用模糊提示和结构化提示，比较结果',
      '总结你的「提示词 checklist」3 条个人心得'
    ],
    milestone: '学完后你能独立写出可复用的结构化提示词模板。'
  },
  {
    day: 5, phase: 2, duration: '约 55 分钟',
    title: '主流工具选型',
    goto: [{ label: '主流应用', href: '#apps' }],
    goal: '根据场景从 43 款主流 AI 应用中选择最合适的工具',
    desc: '没有「最好」的 AI，只有「最合适」的。对话、编程、图像、视频、办公、搜索各有专精产品。国内用户还需考虑访问便利性与中文能力。',
    tasks: [
      '浏览「主流应用」全部 8 个分类，每类至少了解 2 款',
      '为写作、学习、工作各选 1 款工具并说明理由',
      '完成每款工具的首次注册和一次真实任务',
      '记录各工具的免费额度、付费方案与核心差异'
    ],
    milestone: '学完后你有一份个人「AI 工具箱」清单。'
  },
  {
    day: 6, phase: 3, duration: '约 70 分钟',
    title: '实战场景演练',
    goto: [{ label: '真实软件实操', href: '#hands-on' }, { label: '实战场景', href: '#practice' }, { label: '提示词实验室', href: '#prompt-lab' }],
    goal: '跟着真实软件教程完成 2-3 个可交付成果，体验端到端效率提升',
    desc: '理论转化为能力的唯一路径是实践。优先完成「真实软件实操」中的教程（计算器、绘图、声音克隆、定时研报等），再选场景模板应用到你的工作。',
    tasks: [
      '完成至少 2 个「真实软件实操」教程（建议：Codex 计算器 + 一项你最好奇的）',
      '再选 1 个实战场景模板，用提示词完成一项真实工作任务',
      '总结：哪些环节 AI 节省了大量时间？哪些必须人工把关？',
      '建立个人 AI 工作流 SOP（标准操作流程）文档'
    ],
    milestone: '学完后你已在真实工作中成功使用 AI 至少 2 次。'
  },
  {
    day: 7, phase: 4, duration: '约 60 分钟',
    title: '综合测验与复盘',
    goto: [{ label: '知识测验', href: '#quiz' }, { label: '知识库', href: '#knowledge' }],
    goal: '检验学习成果，制定未来 30 天 AI 持续学习计划',
    desc: '通过 100 道测验题回顾核心知识。复盘 7 天学习路径，识别薄弱环节，规划持续实践方向。',
    tasks: [
      '完成知识测验（目标 80/100 以上）',
      '回顾 7 天路径，标记未完成的模块并补齐',
      '在 AI 知识库速查词典中回顾全部 100 个词条',
      '写下未来 30 天 AI 应用计划（每周至少 2 次实践）'
    ],
    milestone: '学完后你具备系统的 AI 认知框架和持续学习的行动计划。'
  }
];

const AI_OVERVIEW_SECTIONS = [
  {
    id: 'what',
    icon: '🌐',
    color: 'var(--accent-teal-dim)',
    tag: '01 · 认知起点',
    navLabel: '什么是 AI',
    title: '什么是 AI？',
    lead: '人工智能（AI, Artificial Intelligence）是让机器模拟人类智能行为的技术总称——从数据中识别规律、理解语言、做出判断，乃至生成文本、图像、代码与音视频内容。它不是单一产品，而是一整套方法与工程系统的集合。',
    intro: '今天新闻和社交里说的「AI」，大多数时候指的是大语言模型（LLM）和生成式 AI（GenAI）：你输入一段自然语言，它输出回答、草稿或作品。理解 AI 的第一步，是分清「技术概念」「产品形态」和「使用方式」这三件事。',
    subsections: [
      {
        title: '一个 30 秒通俗类比',
        text: '可以把现代 AI 想象成「读过海量资料、反应极快的实习助理」：它擅长整理、起草、联想和举一反三，但并不天然拥有你的业务上下文，也不能保证每句话都事实正确。你负责定目标、给材料、验结果；它负责提速与扩展思路。',
        items: [
          '你提供：任务目标、背景材料、格式要求、质量标准',
          'AI 提供：初稿、备选方案、解释说明、结构化拆解',
          '你验收：事实核对、逻辑判断、最终决策与对外发布'
        ]
      },
      {
        title: '三次发展浪潮（知道脉络即可）',
        text: 'AI 并非一夜爆红，而是经历了多次范式切换。了解历史有助于理解「为什么今天的 AI 以对话和生成为主」。',
        items: [
          '1956–1980s 符号主义：用规则和知识库推理，可解释但难以覆盖复杂现实',
          '1990s–2010s 统计学习：从数据中自动学规律，推荐系统、风控、语音识别崛起',
          '2012 至今 深度学习：神经网络 + 大规模算力与数据，催生 CV、语音、LLM 与 GenAI',
          '2022 起 生成式 AI 大众化：ChatGPT 让「自然语言驱动产出」成为默认交互方式'
        ]
      }
    ],
    points: [
      { label: '日常所说的 AI', text: '多指基于大数据训练的机器学习系统，尤其是 LLM（如 GPT、Claude、通义千问）和图像/视频生成模型。它们通过「预测下一个 token/像素」来生成看似理解语义的输出。' },
      { label: '层级关系', text: '人工智能（AI）⊃ 机器学习（ML）⊃ 深度学习（DL）⊃ 大语言模型（LLM）。越往右越专精，但依赖的数据、算力与工程能力也越高。' },
      { label: '训练 vs 推理', text: '训练是「读书备考」——用海量数据调整模型参数，成本高、周期长；推理是「上考场答题」——你每次提问时模型实时生成结果，这也是日常使用的阶段。' },
      { label: '专用 AI（ANI）vs 通用 AI（AGI）', text: '当前所有商用系统都是专用 AI：在训练分布内表现强大，跨领域迁移有限。AGI（能像人一样广泛推理与行动）仍无公认时间表，不宜把现有产品当作全知代理。' },
      { label: '判别式 vs 生成式', text: '判别式 AI 做分类与判断（垃圾邮件识别、医学影像筛查、风控评分）；生成式 AI 做内容创作（写报告、画图、写代码、配音）。今天大众热度主要在生成式。' },
      { label: '多模态', text: '新一代模型可同时处理文本、图像、音频、视频甚至代码文件。这意味着你可以「发一张截图让 AI 解释」「上传 PDF 让它总结」「用语音直接对话」。' },
      { label: '幻觉（Hallucination）', text: 'AI 可能自信地编造事实、引用或数据——因为它优化的是「流畅合理」而非「必然正确」。涉及数字、法规、医疗、合同的场景必须人工核验。' },
      { label: '人类始终在场', text: '可靠落地模式是「AI 起草 + 人审核」：AI 负责速度与覆盖，人负责真实性、合规性与最终责任。' }
    ],
    note: '1956 年达特茅斯会议首次提出「人工智能」。从「写规则」到「学数据」再到「生成内容」，AI 的能力边界在持续扩展，但核心没变：它是增强人类能力的工具，而不是自动承担后果的主体。学完本节，你应能向他人解释：AI 是什么、今天常说的 AI 指什么、以及为什么不能盲信每一次输出。'
  },
  {
    id: 'capabilities',
    icon: '⚡',
    color: 'var(--accent-amber-dim)',
    tag: '02 · 能力地图',
    navLabel: '能干什么',
    title: 'AI 能干什么？',
    lead: '今天的 AI 已能覆盖大量「知识型 + 创意型 + 流程型」工作：从写一封邮件到分析一份合同，从生成海报到自动整理日报。价值不在于替代你，而在于把「从 0 到 60 分」的耗时大幅压缩，让你更快进入判断与打磨阶段。',
    intro: '下面按 8 大能力域展开。每一域都包含：能做什么、典型场景、以及怎样与 AI 协作更高效。记住一句话——AI 给草案，你给标准；AI 扩思路，你做决策。',
    capabilities: [
      {
        image: 'assets/capabilities/cap-writing.jpg',
        title: '写作与沟通',
        desc: '把模糊想法变成可发送、可汇报、可发布的文字内容。',
        detail: '适合处理结构化表达：邮件、周报、方案、演讲稿、产品介绍、社媒文案、多语言翻译与语气润色。AI 特别擅长「先搭骨架、再填血肉」。',
        examples: [
          '根据 3 条要点扩写成 500 字周报，并突出数据与风险',
          '把技术文档改写成客户能读懂的版本（保留关键信息）',
          '同一内容生成「正式版 / 口语版 / 英文版」三个语气变体',
          '会议纪要：从速记整理决议、待办与负责人'
        ],
        tip: '给出受众、篇幅、语气、必含信息四项，输出质量会显著提升。'
      },
      {
        image: 'assets/capabilities/cap-coding.jpg',
        title: '编程与调试',
        desc: '加速写代码、读代码、改代码的全流程。',
        detail: '从单函数补全到跨文件重构，AI 可解释报错、生成测试、写脚本处理数据、把需求转成可运行原型。对非程序员，也能用自然语言生成网页、小工具与自动化脚本。',
        examples: [
          '描述需求生成 HTML/JS 小工具，并在浏览器直接验证',
          '粘贴报错日志，定位可能原因并给出修复补丁',
          '为已有函数补全单元测试与边界用例',
          '将重复性数据处理写成 Python 脚本并加中文注释'
        ],
        tip: '提供项目上下文、期望输入输出、技术栈约束；改代码时要求「说明改了什么、如何验证」。'
      },
      {
        image: 'assets/capabilities/cap-design.jpg',
        title: '图像与设计',
        desc: '快速产出视觉草案、风格探索与创意素材。',
        detail: '通过文字描述生成插画、海报、产品氛围图、Logo 方向稿、UI 概念图。适合头脑风暴和早期视觉定调，而非替代精细品牌系统。',
        examples: [
          '为课程封面生成 3 种风格草案（科技感 / 杂志感 / 极简）',
          '根据产品卖点生成电商主图创意与构图参考',
          '把手绘草图描述转成高质量概念插画',
          '批量生成社媒配图并统一色调与画幅'
        ],
        tip: '写清主体、构图、光线、风格参考与画幅比例；迭代时说明「保留什么、改什么」。'
      },
      {
        image: 'assets/capabilities/cap-av.jpg',
        title: '音视频创作',
        desc: '从文本到可发布的音频、配乐与视频片段。',
        detail: '支持文生视频、图生视频、AI 配音、声音克隆、音乐生成、字幕翻译与简单剪辑指令。适合短视频口播、课程片头、广告创意样片。',
        examples: [
          '将文章摘要转成 60 秒口播稿并生成配音',
          '克隆个人声音用于课程旁白（需合法授权）',
          '输入场景描述生成产品氛围短视频样片',
          '为现有视频自动生成中英字幕与标题'
        ],
        tip: '先锁定时长、画幅、节奏与受众；配音注意情感、停顿与发音准确性。'
      },
      {
        image: 'assets/capabilities/cap-analytics.jpg',
        title: '分析与研究',
        desc: '把信息洪流变成可读洞察与可行动结论。',
        detail: '可辅助完成竞品扫描、行业趋势归纳、用户反馈归类、Excel 数据处理思路、调研问卷分析框架。强在「结构化整理与假设生成」，弱在未经核实的精确统计。',
        examples: [
          '上传 20 条用户反馈，归纳痛点优先级与改进建议',
          '给定 3 家竞品，输出功能对比表与差异化机会',
          '将销售数据描述转成分析框架与可视化建议',
          '阅读长报告后提取风险点、关键数据与待核实项'
        ],
        tip: '提供原始材料、分析目标、决策场景；要求标注「确定 / 推测 / 待核实」。'
      },
      {
        image: 'assets/capabilities/cap-agent.jpg',
        title: '自动化与 Agent',
        desc: '让 AI 按规则代你执行多步骤任务，而非只答一句话。',
        detail: 'Agent 能调用搜索、读写文件、运行脚本、发通知、按 Cron 定时执行。适合「每天固定搜集信息」「监控数据变化」「把多工具串成工作流」。',
        examples: [
          '每个工作日 8:30 自动汇总行业资讯并推送摘要',
          '监控竞品官网变化，有更新时生成对比说明',
          '把邮件 + 表格 + 文档串成一条审批准备流程',
          '根据模板自动生成周报并填入当日数据'
        ],
        tip: '先在小范围试跑，明确失败重试、日志记录与人工复核节点。'
      },
      {
        image: 'assets/capabilities/cap-learning.jpg',
        title: '学习与辅导',
        desc: '按你的节奏讲解概念、出题检验、规划学习路径。',
        detail: '可用费曼学习法、苏格拉底提问、分层讲解、错题回顾等方式，把难懂概念拆成可消化步骤。适合备考、学新技能、快速入门陌生领域。',
        examples: [
          '用生活类比解释 Transformer，再出 3 道自检题',
          '根据你的基础定制 7 天 Python 入门计划',
          '把一篇论文翻译成「先懂大意、再懂方法、最后懂局限」三层',
          '针对错题生成同类变式题巩固薄弱点'
        ],
        tip: '告诉 AI 你已知什么、想达到什么、偏好什么学习方式（例子/图表/练习）。'
      },
      {
        image: 'assets/capabilities/cap-search.jpg',
        title: '搜索与问答',
        desc: '比传统搜索更快获得「带结构的答案」，而非链接列表。',
        detail: 'AI 搜索可综合多来源给出摘要、对比与引用线索；文档问答可针对你上传的 PDF/笔记精准检索。适合调研、学习、写作前的信息收集。',
        examples: [
          '调研某技术方案时，输出优缺点与适用场景对比',
          '上传合同/论文，针对具体条款或段落提问',
          '把 5 篇行业文章整合成 1 页 executive summary',
          '快速核查一个说法的常见出处与争议点'
        ],
        tip: '要求给出处与引用；关键结论至少交叉核实两个独立来源。'
      }
    ],
    collabTips: {
      title: '高效协作的四条原则',
      items: [
        { label: '给足上下文', text: '背景、目标、受众、约束、反例——信息越具体，输出越可用。' },
        { label: '分步而非一把梭', text: '复杂任务拆成「大纲 → 初稿 → 修订 → 终稿」，每步验收后再继续。' },
        { label: '要格式与标准', text: '明确字数、结构、语气、必含字段，避免泛泛而谈。' },
        { label: '人做最终裁判', text: '事实、数字、合规、对外发布前必须人工确认。' }
      ]
    },
    boundaries: {
      title: '目前仍不擅长或需慎用的场景',
      items: [
        '高精度实时数据（股价秒级、未公开内部数据）——需接权威数据源',
        '复杂数学推导与严谨证明——可能出错，关键步骤要验算',
        '法律/医疗/金融的最终专业判断——AI 只能辅助，不能替代持证专业人士',
        '涉及隐私、版权、肖像权的生成与发布——需遵守法规与平台政策',
        '长期记忆你的所有私人信息——默认会话外不保存，需自建知识库或工作流'
      ]
    },
    note: 'AI 最强项是「有模式可循、可快速起草、可批量变体」的任务；最弱项是「事实必然正确、承担法律责任、理解你未说出口的隐性约束」。把它当加速器，而不是自动驾驶。下一节去看具体工具选型。'
  },
  {
    id: 'tools',
    icon: '🧰',
    color: 'rgba(167, 139, 250, 0.15)',
    tag: '03 · 工具版图',
    navLabel: '有哪些工具',
    title: '市面上有哪些 AI 工具？',
    lead: '没有「最好」的 AI，只有「最合适」的。以下是 2026 年主流工具的分类版图——本站「工具掌握」模块有更详细的 43 款介绍。',
    toolGroups: [
      { category: '对话助手', emoji: '💬', tools: 'ChatGPT、Claude、Gemini、通义千问、DeepSeek、Kimi、豆包、Grok', use: '日常问答、写作、分析、编程' },
      { category: '编程开发', emoji: '👨‍💻', tools: 'Cursor、Claude Code、Codex CLI、Grok Build、Copilot、Gemini CLI、Aider、Cline、Continue、Zcode、Windsurf、Bolt.new、Amazon Q Developer', use: '终端 Agent、IDE 补全、Git 结对编程、一句话建站' },
      { category: '图像创作', emoji: '🎨', tools: 'Midjourney、DALL·E 3、Stable Diffusion、Flux', use: '插画、设计、视觉创意' },
      { category: '视频音频', emoji: '🎵', tools: 'Runway、Sora、可灵 AI、Suno、ElevenLabs、Fish Audio', use: '视频生成、音乐、配音与声音克隆' },
      { category: '办公效率', emoji: '📋', tools: 'Microsoft Copilot、Notion AI、Gamma', use: '文档、PPT、会议纪要、协作' },
      { category: 'Agent 自动化', emoji: '🦞', tools: 'OpenClaw、Dify、扣子 Coze、n8n、Manus', use: '定时任务、工作流编排、Bot 搭建、自主执行任务' },
      { category: '搜索研究', emoji: '🔎', tools: 'Perplexity、秘塔 AI 搜索、NotebookLM', use: '调研、文献分析、事实核查' }
    ],
    note: '新手建议从一款对话 AI（ChatGPT 或通义千问）+ 一个你工作场景最相关的专用工具开始，不要一次装太多。'
  },
  {
    id: 'impact',
    icon: '🏙️',
    color: 'rgba(251, 113, 133, 0.12)',
    tag: '04 · 现实影响',
    navLabel: '重要领域',
    title: 'AI 已在哪些领域发挥重要作用？',
    lead: 'AI 不再是实验室概念，它正在重塑多个行业的生产方式和用户体验。',
    fields: [
      { icon: '🏥', name: '医疗健康', cases: '医学影像辅助诊断、药物分子筛选、病历摘要、健康问答机器人' },
      { icon: '🎓', name: '教育与科研', cases: '个性化辅导、论文综述、实验数据分析、科研写作辅助' },
      { icon: '💰', name: '金融与商业', cases: '风控反欺诈、智能客服、市场研报生成、投研信息聚合' },
      { icon: '🛒', name: '零售与电商', cases: '推荐系统、智能客服、商品描述生成、视觉搜索' },
      { icon: '🏭', name: '制造与工业', cases: '质量检测、预测性维护、供应链优化、工业机器人' },
      { icon: '🎬', name: '内容与传媒', cases: '文案创作、视频剪辑、虚拟主播、多语言本地化' },
      { icon: '⚖️', name: '法律与政务', cases: '合同审阅、法规检索、政务问答、公文辅助起草' },
      { icon: '🚗', name: '交通与出行', cases: '辅助驾驶、路径规划、自动驾驶研发、交通流量预测' }
    ],
    note: '这些应用背后大多是「专用 AI + 行业数据 + 人类审核」的组合，而非 AI 独立决策。'
  },
  {
    id: 'future',
    icon: '🔭',
    color: 'var(--accent-teal-dim)',
    tag: '05 · 展望未来',
    navLabel: '未来展望',
    title: 'AI 将如何发展，如何改变我们的生活？',
    lead: '技术演进充满不确定性，但以下几个方向正在清晰地影响个人与社会。',
    timeline: [
      {
        period: '当下（2024–2026）',
        items: [
          '大模型成为「默认界面」——对话式 AI 融入搜索、办公、编程和创作',
          '多模态成熟——同一模型能看图、听音、生成图文视频',
          'AI Agent 兴起——从「回答问题」走向「自主执行任务」'
        ]
      },
      {
        period: '近期（3–5 年）',
        items: [
          '个人 AI 助理普及——记住你的偏好、日程、项目，主动提供帮助',
          '行业 AI 深度嵌入——教育、医疗、法律等有专属模型与工作流',
          '人机协作成为标配——不会用 AI 的职场竞争力可能显著下降'
        ]
      },
      {
        period: '更远期（仍在探索）',
        items: [
          '通用人工智能（AGI）——能否、何时实现仍无定论',
          '具身智能（Embodied AI）——AI 进入机器人，与物理世界交互',
          '社会规则重构——就业结构、教育体系、版权与隐私法规将持续演变'
        ]
      }
    ],
    lifeChanges: [
      { icon: '🏠', title: '日常生活', text: '购物推荐更精准、智能家居更懂你、语言障碍大幅缩小' },
      { icon: '💼', title: '工作方式', text: '重复劳动自动化，人更多做创意、决策、关系和审美判断' },
      { icon: '🧠', title: '学习与成长', text: '人人都有「24 小时在线导师」，但批判性思维比以往更重要' },
      { icon: '🌍', title: '社会层面', text: '信息获取更平等，同时也面临虚假信息、深度伪造等新挑战' }
    ],
    note: '面对 AI 时代，最重要的能力不是「会用某个工具」，而是：提出问题、判断质量、持续学习、保持人文判断力。'
  }
];

const FUNDAMENTALS = [
  {
    icon: '🧠', color: 'var(--accent-teal-dim)',
    title: '人工智能', abbr: 'AI', fullEn: 'Artificial Intelligence',
    content: `
      <p><strong>人工智能（AI, Artificial Intelligence）</strong>是让机器模拟人类智能行为的技术集合，涵盖学习、推理、感知、语言理解、规划与创造。1956 年达特茅斯会议首次提出这一概念，历经符号主义、统计学习、深度学习三次浪潮。</p>
      <p>AI 不是单一技术，而是包含 <strong>ML（机器学习）</strong>、<strong>DL（深度学习）</strong>、<strong>NLP（自然语言处理）</strong>、<strong>CV（计算机视觉）</strong>、机器人等的庞大体系。我们日常接触的 ChatGPT、自动驾驶、人脸识别都属于 AI 应用。</p>
      <p><strong>AGI（Artificial General Intelligence，通用人工智能）</strong>：能像人类一样处理任意智力任务的 AI，尚未实现，是当前研究的长期目标。</p>
      <div class="analogy"><strong>通俗类比：</strong>AI 是「智能」这个大概念，就像「交通工具」——汽车、火车、飞机都是其中一种具体形式。</div>
      <ul class="key-points"><li>日常所说的 AI ≈ 基于数据的机器学习系统</li><li>AI ⊃ ML ⊃ DL，从左到右范围依次缩小</li><li>判别式 AI 做判断，生成式 AI 做创造</li></ul>
    `
  },
  {
    icon: '📊', color: 'var(--accent-amber-dim)',
    title: '机器学习', abbr: 'ML', fullEn: 'Machine Learning',
    content: `
      <p><strong>机器学习（ML, Machine Learning）</strong>是 AI 的核心子领域：让计算机从数据中自动发现规律，而非人类逐条编写 if-else 规则。标准流程为：收集数据 → 特征工程 → 训练模型 → 评估验证 → 部署推理。</p>
      <p><strong>三种主要范式：</strong></p>
      <ul class="key-points">
        <li><strong>监督学习（Supervised Learning）</strong>：有标注数据，学习输入→输出映射。用于分类（垃圾邮件检测）、回归（房价预测）。</li>
        <li><strong>无监督学习（Unsupervised Learning）</strong>：无标注，发现数据结构。用于聚类（用户分群）、降维（数据压缩）。</li>
        <li><strong>强化学习（RL, Reinforcement Learning）</strong>：通过奖惩信号学习策略。用于游戏 AI（AlphaGo）、机器人控制。</li>
      </ul>
      <div class="analogy"><strong>通俗类比：</strong>传统编程是「老师给标准答案步骤」；机器学习是「给学生大量习题，学生自己总结解题方法」。</div>
    `
  },
  {
    icon: '🔬', color: 'rgba(167, 139, 250, 0.15)',
    title: '深度学习', abbr: 'DL', fullEn: 'Deep Learning',
    content: `
      <p><strong>深度学习（DL, Deep Learning）</strong>是机器学习的一个分支，使用多层神经网络（Neural Network）自动从原始数据中提取层次化特征。层数越多，能学到的抽象概念越高级。</p>
      <p>2012 年 <strong>AlexNet</strong> 在 ImageNet 图像识别竞赛中大获全胜，标志着深度学习时代开启。此后在语音（Siri）、视觉（人脸识别）、语言（GPT）等领域取得突破性进展。</p>
      <p><strong>关键要素：</strong>海量数据 + 深层网络 + 强大算力（<strong>GPU, Graphics Processing Unit</strong>）= 卓越性能。训练一次大模型可能耗费数百万美元算力。</p>
      <div class="analogy"><strong>通俗类比：</strong>浅层学习像只用一个筛子过滤；深度学习像多层过滤网，每层捕捉不同粒度的信息。</div>
    `
  },
  {
    icon: '🔗', color: 'var(--accent-teal-dim)',
    title: '神经网络', abbr: 'NN', fullEn: 'Neural Network',
    content: `
      <p><strong>神经网络（NN, Neural Network）</strong>由大量「神经元」节点组成，分层处理信息。每层通过权重（Weight）和偏置（Bias）对输入做数学变换，经激活函数（Activation Function）产生输出，传递给下一层。</p>
      <p><strong>反向传播（Backpropagation, BP）</strong>是核心训练算法：比较预测与真实值的差距，从输出层向输入层逐层调整权重，使误差逐步减小。</p>
      <p>常见架构：<strong>CNN（Convolutional Neural Network，卷积神经网络）</strong>擅长图像；<strong>RNN（Recurrent Neural Network，循环神经网络）</strong>擅长序列，但已被 Transformer  largely 取代。</p>
      <div class="analogy"><strong>通俗类比：</strong>像工厂流水线——原材料（数据）经过多道工序（网络层）逐步加工，最终产出成品（预测结果）。</div>
    `
  },
  {
    icon: '⚡', color: 'var(--accent-amber-dim)',
    title: 'Transformer 架构', abbr: '—', fullEn: 'Transformer Architecture',
    content: `
      <p>2017 年 Google 论文 <em>"Attention Is All You Need"</em> 提出 <strong>Transformer</strong> 架构，彻底改变了 NLP 领域。其核心是 <strong>自注意力机制（Self-Attention）</strong>：处理每个词时，同时计算与句中所有其他词的相关性权重。</p>
      <p><strong>核心优势：</strong></p>
      <ul class="key-points">
        <li>解决长距离依赖——句首和句尾的词能直接交互</li>
        <li>高度并行化——训练速度远超 RNN</li>
        <li>可扩展性强——模型越大，能力越强（规模定律）</li>
      </ul>
      <p>所有现代大语言模型（GPT、Claude、Gemini、LLaMA）均基于 Transformer 的<strong>解码器（Decoder）</strong>或<strong>编码器-解码器（Encoder-Decoder）</strong>结构。</p>
      <div class="analogy"><strong>通俗类比：</strong>读句子时不是逐字扫描，而是整句一览，目光自动聚焦关键词——这就是注意力。</div>
    `
  },
  {
    icon: '💬', color: 'var(--accent-teal-dim)',
    title: '大语言模型', abbr: 'LLM', fullEn: 'Large Language Model',
    content: `
      <p><strong>大语言模型（LLM, Large Language Model）</strong>是在海量文本上训练的超大神经网络，核心训练目标是<strong>预测下一个 Token</strong>。通过这一简单目标，模型学会了语法、事实知识、推理、代码、多语言等复杂能力。</p>
      <p><strong>关键训练阶段：</strong></p>
      <ul class="key-points">
        <li><strong>预训练（Pre-training）</strong>：海量通用文本，学习语言基础能力</li>
        <li><strong>SFT（Supervised Fine-Tuning，监督微调）</strong>：用高质量对话数据微调，学会遵循指令</li>
        <li><strong>RLHF（Reinforcement Learning from Human Feedback，人类反馈强化学习）</strong>：人类标注偏好，优化回答质量与安全性</li>
      </ul>
      <p><strong>能力边界：</strong>知识有截止日期、会「幻觉」（Hallucination）、数学和逻辑仍可能出错。使用时需保持批判性思维，核实关键事实。</p>
      <div class="analogy"><strong>通俗类比：</strong>LLM 像读过整个互联网图书馆的博学者——表达流畅、知识广博，但可能记错细节，重要信息需交叉验证。</div>
    `
  },
  {
    icon: '🎯', color: 'rgba(251, 113, 133, 0.12)',
    title: '生成式 AI', abbr: 'GenAI', fullEn: 'Generative Artificial Intelligence',
    content: `
      <p><strong>生成式 AI（GenAI, Generative AI）</strong>能创造全新内容——文本、图像、音频、视频、代码、3D 模型。与传统<strong>判别式 AI（Discriminative AI）</strong>（分类、检测、预测）不同，GenAI 的核心是「创造」。</p>
      <p><strong>主要技术路线：</strong></p>
      <ul class="key-points">
        <li><strong>自回归模型（Autoregressive）</strong>：逐 Token/像素生成，代表 GPT、DALL·E</li>
        <li><strong>扩散模型（Diffusion Model）</strong>：从噪声逐步去噪生成图像，代表 Stable Diffusion、Midjourney</li>
        <li><strong>GAN（Generative Adversarial Network，生成对抗网络）</strong>：生成器与判别器博弈，早期图像生成主流</li>
      </ul>
      <p><strong>多模态（Multimodal）</strong>模型如 GPT-4o、Gemini 能同时理解和生成文本、图像、音频等多种形式。</p>
      <div class="analogy"><strong>通俗类比：</strong>判别式 AI 是「阅卷老师」（判断对错）；生成式 AI 是「作家+画家」（从零创作新作品）。</div>
    `
  },
  {
    icon: '🌐', color: 'rgba(167, 139, 250, 0.15)',
    title: '自然语言处理', abbr: 'NLP', fullEn: 'Natural Language Processing',
    content: `
      <p><strong>自然语言处理（NLP, Natural Language Processing）</strong>是 AI 领域中让计算机理解、生成和处理人类语言的技术分支。涵盖机器翻译、情感分析、文本摘要、问答系统、语音识别等。</p>
      <p><strong>NLP 发展脉络：</strong></p>
      <ul class="key-points">
        <li><strong>规则时代</strong>：人工编写语法规则和词典</li>
        <li><strong>统计时代</strong>：基于大规模语料统计概率（N-gram）</li>
        <li><strong>深度学习时代</strong>：Word2Vec 词嵌入 → RNN/LSTM → Transformer → LLM</li>
      </ul>
      <p>今天大多数 NLP 任务已被 LLM「统一解决」——一个模型通过不同提示词即可完成翻译、摘要、分类、生成等任务，这被称为 <strong>NLP 的统一范式</strong>。</p>
      <div class="analogy"><strong>通俗类比：</strong>NLP 是 AI 的「语言科」——让机器学会人类的听说读写，LLM 则是这门课的「全能学霸」。</div>
    `
  }
];

const APP_CATEGORIES = ['对话助手', '编程开发', '图像创作', '视频音频', '办公效率', 'Agent 自动化', '搜索研究', '全部'];

const DEFAULT_APP_CATEGORY = '对话助手';

const APPS = [
  { name: 'ChatGPT', fullEn: 'Chat Generative Pre-trained Transformer', emoji: '💬', category: '对话助手', url: 'https://chatgpt.com', desc: 'OpenAI 出品的通用对话 AI，GPT-4o 支持文本、图像、语音多模态交互。擅长写作、分析、编程、头脑风暴，插件生态丰富。', tags: ['通用', '多模态', '插件'], features: ['GPT-4o 多模态', '代码解释器', 'DALL·E 图像生成', '语音对话'], bestFor: '新手入门、日常全能助手', tip: '免费版 GPT-4o mini 够用；复杂任务考虑 Plus（$20/月）。' },
  { name: 'Claude', fullEn: 'Claude by Anthropic', emoji: '🎭', category: '对话助手', url: 'https://claude.ai', desc: 'Anthropic 开发，以长上下文（200K）、安全性、细腻文风著称。Claude 3.5 Sonnet 在编程和写作方面表现突出，Artifacts 功能可实时预览代码和文档。', tags: ['长文本', '安全', '写作'], features: ['200K 上下文', 'Artifacts 预览', 'PDF 分析', '代码生成'], bestFor: '长文档处理、写作、代码开发', tip: '处理合同/论文/代码库的首选；Pro 版 $20/月。' },
  { name: 'Gemini', fullEn: 'Google Gemini', emoji: '✨', category: '对话助手', url: 'https://gemini.google.com', desc: 'Google 的 AI 助手，深度整合 Google 搜索、Gmail、Docs、YouTube。Gemini 2.0 支持实时多模态交互和百万级上下文。', tags: ['搜索整合', '多模态', '免费'], features: ['Google 生态整合', '实时搜索', '多模态交互', '超长上下文'], bestFor: 'Google 生态用户、需要实时信息', tip: '已用 Gmail/Docs 的用户可无缝衔接，免费版功能强大。' },
  { name: '通义千问', fullEn: 'Qwen by Alibaba', emoji: '🌐', category: '对话助手', url: 'https://tongyi.aliyun.com', desc: '阿里巴巴出品，中文理解优秀，Qwen2.5 在多项基准测试中表现领先。通义万相提供图像/视频生成，通义灵码提供编程辅助。', tags: ['中文', '国产', '免费'], features: ['中文优化', '代码能力', '通义万相图像', 'API 开放'], bestFor: '国内用户日常对话与开发', tip: '无需翻墙，中文场景首选之一，免费额度充足。' },
  { name: '文心一言', fullEn: 'ERNIE Bot by Baidu', emoji: '📝', category: '对话助手', url: 'https://yiyan.baidu.com', desc: '百度 AI 助手，ERNIE 4.0 中文语料丰富，整合百度搜索、文库、地图等资源，在中文知识问答和内容创作上表现出色。', tags: ['中文', '搜索', '国产'], features: ['百度搜索整合', '中文创作', '多模态', '插件市场'], bestFor: '中文内容创作、知识查询', tip: '适合需要结合中文互联网信息的场景。' },
  { name: 'Kimi', fullEn: 'Kimi by Moonshot AI', emoji: '🌙', category: '对话助手', url: 'https://kimi.moonshot.cn', desc: '月之暗面出品，以超长上下文（最高 200 万字）闻名。能处理整本书、长篇报告、大型代码库，联网搜索能力强。', tags: ['超长上下文', '中文', '阅读'], features: ['200 万字上下文', '联网搜索', '文件解析', '代码理解'], bestFor: '超长文档分析、文献阅读', tip: '需要分析整本书或大型 PDF 时的利器。' },
  { name: 'DeepSeek', fullEn: 'DeepSeek by DeepSeek AI', emoji: '🔍', category: '对话助手', url: 'https://chat.deepseek.com', desc: '深度求索出品，开源模型性能领先，DeepSeek-R1 推理能力突出。API 价格极具竞争力（约为 GPT-4 的 1/50），支持本地部署。', tags: ['开源', '推理', '性价比'], features: ['R1 深度推理', '开源可部署', '极低 API 价', '代码能力强'], bestFor: '开发者、追求性价比、需要推理能力', tip: '开发者首选；API 集成成本极低。' },
  { name: 'GitHub Copilot', fullEn: 'GitHub Copilot', emoji: '👨‍💻', category: '编程开发', url: 'https://github.com/features/copilot', desc: '微软/OpenAI 联合推出的 AI 编程助手，集成在 VS Code、JetBrains 等 IDE 中。实时补全代码、解释逻辑、生成函数和单元测试。', tags: ['IDE 集成', '补全', '微软'], features: ['行级/块级补全', 'Chat 对话', '多语言支持', 'Copilot Workspace'], bestFor: '日常编码加速、代码补全', tip: '程序员必备；学生和开源贡献者可免费申请。' },
  { name: 'Cursor', fullEn: 'Cursor IDE', emoji: '⚡', category: '编程开发', url: 'https://cursor.com', desc: 'AI 原生代码编辑器（基于 VS Code），能理解整个项目上下文。支持 Agent 模式自主完成多文件编程、调试和重构任务。', tags: ['AI IDE', '全项目', 'Agent'], features: ['全项目索引', 'Agent 自主编程', '多模型切换', '终端集成'], bestFor: '项目级开发、AI 辅助编程', tip: '想大幅提升编码效率的开发者强烈推荐。' },
  { name: 'Windsurf', fullEn: 'Windsurf by Codeium', emoji: '🏄', category: '编程开发', url: 'https://windsurf.com', desc: 'Codeium 推出的 AI IDE，Cascade 智能体模式能自主理解代码库、规划并执行多步骤编程任务，免费额度慷慨。', tags: ['Agent', '多文件', '免费额度'], features: ['Cascade Agent', '代码库理解', '多文件编辑', '免费额度大'], bestFor: 'AI 驱动开发项目', tip: 'Cursor 的强力竞争者，免费版即可体验核心功能。' },
  { name: 'Claude Code', fullEn: 'Claude Code by Anthropic', emoji: '🎭', category: '编程开发', url: 'https://claude.ai/code', desc: 'Anthropic 推出的终端 AI 编程 Agent，深度理解整个代码库，支持多文件编辑、测试运行、Git 操作和自定义 Hooks/插件。在长上下文和复杂重构任务上表现突出。', tags: ['终端 Agent', '长上下文', 'Anthropic'], features: ['全仓库索引', '自主多文件编辑', 'Hooks/插件扩展', '复杂重构能力强'], bestFor: '终端工作流、复杂代码库重构、Claude 生态用户', tip: '需 Claude Pro/Max 订阅；适合已习惯命令行、追求深度 Agent 能力的开发者。' },
  { name: 'Codex CLI', fullEn: 'OpenAI Codex CLI', emoji: '⚡', category: '编程开发', url: 'https://developers.openai.com/codex/cli/', desc: 'OpenAI 官方命令行编程 Agent，基于 GPT-5 系列模型，可在本地终端或云端沙箱中自主规划、编写、测试和提交代码。支持 MCP 集成与多步自主任务。', tags: ['CLI', 'OpenAI', '云沙箱'], features: ['终端/云沙箱双模式', '自主 Agent 任务', 'MCP 工具集成', 'GitHub 深度整合'], bestFor: 'OpenAI 订阅用户、自动化编程流水线', tip: '包含于 ChatGPT Plus/Pro；终端运行 codex 即可在项目中发起 Agent 任务。' },
  { name: 'Grok Build', fullEn: 'Grok Build CLI by xAI', emoji: '𝕏', category: '编程开发', url: 'https://x.ai', desc: 'xAI 推出的终端 AI 开发环境（Grok CLI），支持 Plan 规划模式、子 Agent 并行执行、AGENTS.md 项目规范与 MCP 服务器接入，适合复杂多步骤开发任务。', tags: ['CLI', 'Plan 模式', '子 Agent'], features: ['Plan 模式规划', '子 Agent 并行', 'AGENTS.md 支持', 'MCP 集成'], bestFor: 'xAI 用户、多步骤 Agent 开发、终端工作流', tip: '需 SuperGrok 或 X Premium+ 订阅；项目根目录放置 AGENTS.md 可定制 Agent 行为。' },
  { name: 'Zcode', fullEn: 'Zcode by Z.ai', emoji: '🧠', category: '编程开发', url: 'https://zcode.z.ai', desc: '智谱 Z.ai 推出的 Agentic Development Environment，基于 GLM-5.2，支持桌面端、Remote 远程开发及飞书/微信 Bot 接入，擅长长时程复杂编程任务的规划与执行。', tags: ['国产', 'ADE', '长时程任务'], features: ['GLM-5.2 驱动', '桌面/Remote 双模式', '飞书/微信 Bot', '长时程 Agent 任务'], bestFor: '国内开发者、智谱生态、远程协作编程', tip: '访问 zcode.z.ai 下载；中文场景和长时程任务表现优秀，无需翻墙。' },
  { name: 'Gemini CLI', fullEn: 'Google Gemini CLI', emoji: '✨', category: '编程开发', url: 'https://github.com/google-gemini/gemini-cli', desc: 'Google 开源的命令行 AI 编程工具，使用 Google 账号登录，免费额度慷慨（约 1000 次/天）。支持代码生成、文件操作、Shell 命令执行和 Google Search Grounding。', tags: ['CLI', '开源', '免费额度'], features: ['Google 账号登录', '高免费配额', 'Shell/文件操作', 'Search Grounding'], bestFor: '预算有限、Google 生态用户、CLI Agent 尝鲜', tip: 'npm 全局安装 @google/gemini-cli；免费层额度在同类工具中极具竞争力。' },
  { name: 'Aider', fullEn: 'Aider — AI Pair Programming', emoji: '🔗', category: '编程开发', url: 'https://aider.chat', desc: '开源 AI 结对编程工具，在终端中与 GPT/Claude/DeepSeek 等任意模型 API 协作，深度整合 Git——每次修改自动 commit，支持多文件 diff 编辑，GitHub 39K+ stars。', tags: ['开源', 'BYOK', 'Git 原生'], features: ['任意模型 API', '自动 Git commit', '多文件 diff', '语言无关'], bestFor: '自带 API Key、重视 Git 历史的开发者', tip: 'pip install aider-chat；自备 API Key 成本完全自控，是 Cursor 的轻量开源替代。' },
  { name: 'Cline', fullEn: 'Cline — VS Code Agent', emoji: '🧰', category: '编程开发', url: 'https://cline.bot', desc: '开源 VS Code 扩展，将任意 LLM API 接入编辑器，Agent 模式可自主读写文件、执行终端命令、浏览网页。装机量领先，支持 Plan/Act 分步执行。', tags: ['VS Code', '开源', 'BYOK'], features: ['Plan/Act 模式', '终端命令执行', '浏览器辅助', '多模型 API'], bestFor: 'VS Code 用户、希望自选模型的开发者', tip: '扩展市场搜索 Cline 安装；Anthropic/OpenAI/Ollama 均可接入，无需换编辑器。' },
  { name: 'Continue', fullEn: 'Continue.dev', emoji: '☕', category: '编程开发', url: 'https://continue.dev', desc: '开源 AI 编程助手，支持 VS Code 与 JetBrains 全家桶。提供 Tab 补全、Chat 对话和 Agent 模式，团队可配置共享模型与规则，适合企业渐进式落地。', tags: ['多 IDE', '开源', '团队友好'], features: ['VS Code + JetBrains', 'Tab 补全', '自定义 Agent', '团队配置共享'], bestFor: '多 IDE 团队、需要统一 AI 编程配置', tip: 'continue.dev 安装扩展；config.yaml 可指定自有 API 或本地 Ollama 模型。' },
  { name: 'Amazon Q Developer', fullEn: 'Amazon Q Developer', emoji: '💼', category: '编程开发', url: 'https://aws.amazon.com/q/developer/', desc: 'AWS 推出的 AI 编程助手，提供 IDE 插件和 CLI 两种形态，深度整合 AWS 服务文档与 SDK。支持代码生成、安全扫描、代码转换（如 Java 版本升级）和 Agent 任务。', tags: ['AWS', 'CLI+IDE', '企业'], features: ['AWS 知识整合', '代码安全扫描', '代码转换', '免费层可用'], bestFor: 'AWS 云开发、企业合规场景、Java/.NET 迁移', tip: 'AWS 控制台可免费开通；CLI 命令 q 可在终端发起 Agent 任务。' },
  { name: 'Bolt.new', fullEn: 'Bolt by StackBlitz', emoji: '⚡', category: '编程开发', url: 'https://bolt.new', desc: 'StackBlitz 推出的 AI 全栈开发工具，用自然语言描述即可生成完整 Web 应用（React、Vue、Node 等），浏览器内实时预览与部署。', tags: ['全栈', '浏览器', '零配置'], features: ['一句话生成应用', '浏览器内 IDE', '实时预览', '一键部署'], bestFor: '快速原型、非程序员建站、MVP 验证', tip: '不会写代码也能 10 分钟做出可运行的网页应用；适合验证产品想法。' },
  { name: 'Midjourney', fullEn: 'Midjourney', emoji: '🎨', category: '图像创作', url: 'https://www.midjourney.com', desc: '顶级 AI 绘画工具，通过 Discord 或 Web 使用。艺术风格和画面质量业界领先，社区活跃，风格多样。', tags: ['Discord', '艺术', '高质量'], features: ['极致画质', '风格多样', '社区灵感', '高清放大'], bestFor: '艺术创作、概念设计、视觉探索', tip: '追求视觉效果首选；需学习提示词技巧，$10/月起。' },
  { name: 'DALL·E 3', fullEn: 'DALL·E 3 by OpenAI', emoji: '🖼️', category: '图像创作', url: 'https://openai.com/dall-e-3', desc: 'OpenAI 图像生成模型，集成在 ChatGPT 中。擅长精确理解复杂文字描述，文字渲染能力强。', tags: ['ChatGPT', '精确', '易用'], features: ['精确文字理解', 'ChatGPT 集成', '文字渲染', '零门槛'], bestFor: '快速出图、ChatGPT 用户', tip: '已在用 ChatGPT 的用户零门槛上手。' },
  { name: 'Stable Diffusion', fullEn: 'Stable Diffusion by Stability AI', emoji: '🌀', category: '图像创作', url: 'https://stability.ai', desc: '开源图像生成模型，可本地部署，社区生态极其丰富。支持 LoRA 微调、ControlNet 精准控制，完全掌控生成过程。', tags: ['开源', '本地', '可定制'], features: ['本地部署', 'LoRA 微调', 'ControlNet', '海量社区模型'], bestFor: '有 GPU、需完全掌控的创作者', tip: '需要一定技术基础，但自由度和成本最优。' },
  { name: '可灵 AI', fullEn: 'Kling AI by Kuaishou', emoji: '🎬', category: '视频音频', url: 'https://klingai.com', desc: '快手出品的 AI 视频生成工具，支持文生视频、图生视频，物理运动效果自然流畅，在国内视频生成领域领先。', tags: ['视频', '国产', '易用'], features: ['文生视频', '图生视频', '运动自然', '每日免费额度'], bestFor: '国内视频创作、短视频制作', tip: '国内视频生成首选，每日有免费额度。' },
  { name: 'Runway', fullEn: 'Runway ML', emoji: '🎥', category: '视频音频', url: 'https://runwayml.com', desc: '专业 AI 视频创作平台，Gen-3 Alpha 视频生成质量领先。同时提供视频编辑、背景移除、运动追踪等专业功能。', tags: ['专业', '编辑', 'Gen-3'], features: ['Gen-3 视频生成', '视频编辑套件', '运动追踪', '绿幕移除'], bestFor: '专业视频创作者、影视从业者', tip: '内容创作者和影视从业者的好帮手。' },
  { name: 'Suno', fullEn: 'Suno AI', emoji: '🎵', category: '视频音频', url: 'https://suno.com', desc: 'AI 音乐生成工具，输入文字描述即可生成完整歌曲（含人声演唱和伴奏），支持多种风格和语言。', tags: ['音乐', '人声', '创作'], features: ['完整歌曲生成', '多风格', '人声演唱', '延长/续写'], bestFor: '快速制作 demo 曲、背景音乐', tip: '输入「一首欢快的流行歌，关于夏天」即可生成。' },
  { name: 'Notion AI', fullEn: 'Notion AI', emoji: '📋', category: '办公效率', url: 'https://www.notion.so/product/ai', desc: '集成在 Notion 笔记中的 AI 助手，帮助写作、总结、翻译、头脑风暴，与笔记和数据库无缝结合。', tags: ['笔记', '协作', '集成'], features: ['文档写作', '内容总结', '翻译', '数据库 AI'], bestFor: 'Notion 用户提升文档效率', tip: 'Notion 用户必开，$10/月/成员。' },
  { name: 'Gamma', fullEn: 'Gamma App', emoji: '📊', category: '办公效率', url: 'https://gamma.app', desc: 'AI 驱动的演示文稿和文档生成工具，输入大纲或主题即可生成精美幻灯片，支持多种主题和布局。', tags: ['PPT', '设计', '快速'], features: ['AI 生成 PPT', '多种主题', '在线分享', '嵌入多媒体'], bestFor: '快速做汇报、提案、课件', tip: '输入主题 30 秒生成完整 PPT，赶汇报救星。' },
  { name: 'Perplexity', fullEn: 'Perplexity AI', emoji: '🔎', category: '搜索研究', url: 'https://www.perplexity.ai', desc: 'AI 搜索引擎，给出带引用来源的直接答案而非链接列表。支持 Pro 搜索深度调研，适合学术研究。', tags: ['搜索', '引用', '研究'], features: ['带引用回答', 'Pro 深度搜索', '多模型选择', '实时信息'], bestFor: '快速调研、学术研究、事实核查', tip: '替代 Google 做调研，但引用来源务必核实。' },
  { name: 'NotebookLM', fullEn: 'NotebookLM by Google', emoji: '📓', category: '搜索研究', url: 'https://notebooklm.google.com', desc: 'Google 的 AI 笔记本，上传 PDF/文档后可与资料对话、生成摘要，还能将内容转为 AI 播客（Audio Overview）。', tags: ['文档', '摘要', '播客'], features: ['文档对话', '自动摘要', 'AI 播客生成', '多文档分析'], bestFor: '读论文、做文献综述、学习新材料', tip: '上传论文后即可对话提问，播客功能极具创意。' },
  { name: 'ElevenLabs', fullEn: 'ElevenLabs', emoji: '🎙️', category: '视频音频', url: 'https://elevenlabs.io', desc: '业界领先的 AI 语音平台，支持 Instant Voice Cloning（即时声音克隆）、29+ 语言 TTS、配音和播客制作。', tags: ['声音克隆', 'TTS', '配音'], features: ['1 分钟样本克隆', '多语言朗读', '情感语调控制', 'API 集成'], bestFor: '克隆自己的声音、视频配音、有声内容', tip: '录音环境要安静无回声，1–3 分钟干声即可克隆。' },
  { name: 'Fish Audio', fullEn: 'Fish Audio', emoji: '🐟', category: '视频音频', url: 'https://fish.audio', desc: '国产 AI 语音合成与克隆平台，中文发音自然，支持零样本/少样本声音克隆，适合国内创作者。', tags: ['声音克隆', '中文', '国产'], features: ['中文优化', '声音克隆', '情感合成', '免费额度'], bestFor: '中文配音、短视频口播、国内用户', tip: '中文场景可优先尝试，无需翻墙。' },
  { name: 'OpenClaw', fullEn: 'OpenClaw Agent Gateway', emoji: '🦞', category: 'Agent 自动化', url: 'https://docs.openclaw.ai', desc: '开源 AI Agent 网关，支持 Cron 定时任务、Webhook 触发、多通道投递（Telegram/Slack/Discord/飞书），可让 Agent 自主执行调研、监控与汇报。', tags: ['开源', '定时任务', '多通道'], features: ['Cron 定时调度', 'Isolated Agent 任务', 'Webhook 集成', '多通道推送'], bestFor: '定时研报、自动调研、后台 Agent 编排', tip: '先运行 openclaw doctor 完成初始化，再用 cron create 创建定时任务。' },
  { name: 'Dify', fullEn: 'Dify AI Workflow Platform', emoji: '🔗', category: 'Agent 自动化', url: 'https://dify.ai', desc: '开源 LLM 应用与 Agent 开发平台，可视化编排工作流、RAG 知识库、工具调用与 API 发布。支持自托管，GitHub 60K+ stars，企业与开发者广泛使用。', tags: ['开源', '工作流', 'RAG'], features: ['可视化 Agent 编排', '知识库 RAG', '工具/API 集成', '可自托管部署'], bestFor: '搭建企业知识库 Agent、自定义 AI 应用', tip: 'cloud.dify.ai 可免费试用；有技术基础可 Docker 自托管，数据完全自控。' },
  { name: '扣子 Coze', fullEn: 'Coze by ByteDance', emoji: '🎯', category: 'Agent 自动化', url: 'https://www.coze.cn', desc: '字节跳动出品的零代码 AI Agent 平台，拖拽即可创建 Bot，一键发布到飞书、微信、Discord、Telegram。插件市场丰富，国内用户上手最快。', tags: ['零代码', '国产', '多通道'], features: ['可视化 Bot 搭建', '插件与工作流', '飞书/微信发布', '免费额度充足'], bestFor: '快速搭建客服/助手 Bot、国内团队协作', tip: 'coze.cn 无需翻墙；先从「个人助手」模板改提示词，再逐步加插件。' },
  { name: 'n8n', fullEn: 'n8n Workflow Automation', emoji: '🏭', category: 'Agent 自动化', url: 'https://n8n.io', desc: '开源工作流自动化平台，深度整合 AI Agent 节点。可连接 400+ 服务，支持自托管，适合把 LLM 嵌入邮件、表格、CRM 等业务流水线。', tags: ['开源', '工作流', '自托管'], features: ['400+ 应用集成', 'AI Agent 节点', '可视化流程编辑', '可自托管'], bestFor: '业务自动化、跨系统串联、技术团队编排', tip: 'n8n.io 有免费云版；敏感数据建议 Docker 自托管，从现成 AI 模板改起。' },
  { name: 'Manus', fullEn: 'Manus AI Agent', emoji: '🚀', category: 'Agent 自动化', url: 'https://manus.im', desc: '通用 AI Agent 产品，能自主规划并执行多步骤任务——浏览网页、写文档、跑代码、整理报告。适合「交给它一件事、等结果」的端到端场景。', tags: ['通用 Agent', '自主执行', '多步骤'], features: ['任务自主规划', '网页浏览与操作', '代码/文档产出', '异步长任务'], bestFor: '复杂调研、报告撰写、端到端任务外包', tip: '描述目标而非步骤，如「整理上周 AI 行业要闻并输出 Markdown 报告」；结果务必人工复核。' },
  { name: '豆包', fullEn: 'Doubao by ByteDance', emoji: '🫘', category: '对话助手', url: 'https://www.doubao.com', desc: '字节跳动出品的 AI 助手，基于豆包大模型，中文对话自然流畅。深度整合抖音、飞书生态，支持多模态理解与创作，国内用户基数大。', tags: ['中文', '国产', '多模态'], features: ['中文对话优化', '图像/视频理解', '飞书集成', '免费额度充足'], bestFor: '国内日常对话、内容创作、办公协作', tip: '抖音/飞书用户可无缝衔接；网页版与 App 均可免费使用。' },
  { name: 'Grok', fullEn: 'Grok by xAI', emoji: '𝕏', category: '对话助手', url: 'https://grok.com', desc: 'xAI 开发的 AI 助手，集成在 X（Twitter）平台。以实时信息和幽默风格著称，Grok 3 在数学与推理任务上表现突出，支持深度搜索模式。', tags: ['实时信息', 'X 集成', '推理'], features: ['X 实时信息流', 'DeepSearch 模式', '多模态理解', '代码与数学'], bestFor: '追踪热点、社交媒体分析、实时资讯', tip: '需要 X Premium+ 订阅；适合关注实时新闻与社交动态的用户。' },
  { name: 'Flux', fullEn: 'Flux by Black Forest Labs', emoji: '🌊', category: '图像创作', url: 'https://bfl.ai', desc: 'Black Forest Labs 出品的开源图像生成模型，Flux.1 在画质、文字渲染和人体结构上表现优异，支持本地部署与 API 调用。', tags: ['开源', '高质量', '文字渲染'], features: ['极致画质', '精准文字渲染', '开源可部署', 'LoRA 生态'], bestFor: '高质量插画、商业设计、本地出图', tip: '可通过 Replicate、fal.ai 等平台 API 调用，也可 ComfyUI 本地运行。' },
  { name: 'Sora', fullEn: 'Sora by OpenAI', emoji: '🎞️', category: '视频音频', url: 'https://openai.com/sora', desc: 'OpenAI 的 AI 视频生成模型，支持文生视频、图生视频，画面连贯性和物理真实感业界领先。Sora Turbo 生成速度大幅提升。', tags: ['OpenAI', '高质量', '物理真实'], features: ['文生/图生视频', '最长 20 秒', 'Remix 编辑', 'Storyboard 分镜'], bestFor: '高质量短视频、广告创意、概念预览', tip: '需 ChatGPT Plus/Pro 订阅；提示词描述镜头运动和光影效果更佳。' },
  { name: 'Microsoft Copilot', fullEn: 'Microsoft Copilot', emoji: '🪟', category: '办公效率', url: 'https://copilot.microsoft.com', desc: '微软 AI 助手，深度整合 Word、Excel、PowerPoint、Outlook、Teams。基于 GPT-4o，可在 Office 中直接生成、编辑、分析文档与数据。', tags: ['Office', '微软', '企业'], features: ['Word/Excel/PPT AI', 'Outlook 邮件助手', 'Teams 会议摘要', '企业数据整合'], bestFor: 'Office 365 用户、企业办公自动化', tip: 'Microsoft 365 订阅用户可直接在 Office 侧边栏唤起 Copilot。' },
  { name: '秘塔 AI 搜索', fullEn: 'Metaso AI Search', emoji: '🔭', category: '搜索研究', url: 'https://metaso.cn', desc: '国产 AI 搜索引擎，无广告、回答带引用来源，支持「全网」「学术」「播客」等多种搜索模式，中文调研体验优秀。', tags: ['搜索', '国产', '无广告'], features: ['带引用回答', '学术/播客模式', '思维导图生成', '文件上传分析'], bestFor: '中文调研、学术研究、无广告信息检索', tip: '国内可直接访问；学术模式适合查论文，引用来源建议交叉核实。' }
];

const HANDS_ON_CATEGORIES = ['全部', '编程开发', '图像设计', '视频音频', '写作办公', '搜索研究', 'Agent 自动化'];

const HANDS_ON_CATEGORY_BY_IDX = [
  '编程开发', '图像设计', '图像设计', '视频音频', '视频音频',
  'Agent 自动化', '编程开发', '编程开发', '写作办公', '搜索研究',
  '写作办公', '搜索研究', '编程开发', '图像设计', '视频音频',
  '视频音频', '视频音频', '写作办公', '写作办公', '搜索研究',
  '搜索研究', '写作办公', '写作办公', '编程开发', '编程开发',
  '图像设计', '图像设计', '视频音频', '视频音频', 'Agent 自动化',
];

const PRACTICE_CATEGORIES = ['全部', '职场办公', '学习成长', '编程开发', '数据营销', '翻译法务'];

const PRACTICE_CATEGORY_BY_IDX = [
  '职场办公', '学习成长', '编程开发', '数据营销', '数据营销',
  '职场办公', '职场办公', '数据营销', '翻译法务', '数据营销',
  '学习成长', '数据营销', '翻译法务', '职场办公', '职场办公', '学习成长',
];

const HANDS_ON_CASES = [
  {
    title: '用 Cursor Codex 编写网页计算器',
    software: 'Cursor',
    emoji: '⚡',
    url: 'https://cursor.com',
    difficulty: '入门',
    duration: '约 15 分钟',
    desc: '从零开始，用 Cursor 内置 Codex Agent 生成一个可运行的 HTML 计算器，体验「说一句话 → 得到可运行代码」的 AI 编程流程。',
    steps: [
      '安装 Cursor，新建空文件夹 calc-demo 并用 Cursor 打开',
      '按 Cmd+I（Mac）/ Ctrl+I（Win）打开 Composer / Agent 面板',
      '粘贴下方提示词，让 Codex 生成单文件 index.html',
      '在资源管理器中右键 index.html → Reveal in Finder → 双击用浏览器打开',
      '测试加减乘除；若有样式或逻辑问题，选中代码继续对话：「按钮点击没反应，请修复」',
      '（可选）让 Codex 增加键盘输入、历史记录或深色/浅色主题切换'
    ],
    prompt: '请帮我用 HTML + CSS + JavaScript 创建一个简洁美观的计算器网页：\n\n功能要求：\n- 支持加、减、乘、除和清零（C）\n- 显示屏实时显示输入与结果\n- 防止连续按运算符等常见逻辑错误\n\n设计要求：\n- 深色主题，圆角按钮，hover 有轻微反馈\n- 移动端也能正常使用\n\n交付要求：\n- 输出单个 index.html 文件，可直接双击在浏览器打开\n- 代码加中文注释\n- 最后告诉我如何运行和测试',
    result: '得到一个可双击打开的 calculator 网页，能完成四则运算。',
    tips: '第一次用 AI 写代码，重点不是「一次完美」，而是学会：描述需求 → 生成 → 运行 → 反馈修复。'
  },
  {
    title: '用 Midjourney 生成自由女神像图片',
    software: 'Midjourney',
    emoji: '🎨',
    url: 'https://www.midjourney.com',
    difficulty: '入门',
    duration: '约 10 分钟',
    desc: '在 Midjourney 中用英文提示词生成一张电影感的纽约自由女神像图片，学会文生图的基本流程和参数用法。',
    steps: [
      '注册 Midjourney，进入 midjourney.com 的 Create 页面（或 Discord #general 频道）',
      '点击输入框，输入 /imagine 命令（Web 版可直接输入提示词）',
      '粘贴下方英文提示词并发送，等待约 30–60 秒生成 4 张候选图',
      '点击 U1–U4 放大你最喜欢的一张；不满意可点 🔄 重新生成',
      '想微调构图可点 V1–V4 做变体，或修改提示词中的 --ar 比例后重试',
      '右键保存高清图，可用于 PPT 封面、文章配图或设计参考'
    ],
    prompt: 'Statue of Liberty on Liberty Island, New York Harbor, golden hour sunset, cinematic wide shot, dramatic clouds, warm light reflecting on water, photorealistic, highly detailed, 8k --ar 16:9 --v 6',
    result: '得到一张 16:9 电影感自由女神像高清图，可用于演示或设计参考。',
    tips: 'Midjourney 以英文提示词效果最佳。关键词顺序：主体 → 环境 → 光线 → 风格 → 参数（--ar 比例、--v 版本）。'
  },
  {
    title: '用 ChatGPT + DALL·E 3 快速出图（免 Discord）',
    software: 'ChatGPT',
    emoji: '💬',
    url: 'https://chat.openai.com',
    difficulty: '入门',
    duration: '约 5 分钟',
    desc: '不想折腾 Discord？直接在 ChatGPT 里用自然语言让 DALL·E 3 生成自由女神像，适合最快体验文生图。',
    steps: [
      '打开 ChatGPT（Plus 或 Team 账户支持 DALL·E 3；免费版可用有限额度）',
      '新建对话，直接粘贴下方提示词发送',
      'ChatGPT 会自动调用 DALL·E 生成图片，约 10–20 秒出结果',
      '若构图不满意，回复：「把镜头拉近，突出雕像面部，背景虚化」继续迭代',
      '点击图片可下载 PNG，用于文章、课件或社媒配图'
    ],
    prompt: '请用 DALL·E 为我生成一张图片：\n\n主题：纽约自由女神像，日落黄金时刻，从海港远处拍摄的电影感广角镜头，天空有戏剧性云彩，水面有温暖反光。\n\n风格：写实摄影，高细节，适合作为文章封面。\n\n画幅：横向 16:9。',
    result: '在 ChatGPT 对话中直接获得可下载的自由女神像图片，无需额外工具。',
    tips: 'ChatGPT 会用中文理解你的需求并自动转译为 DALL·E 提示。迭代时描述「要什么」和「不要什么」比重新写一整段更高效。'
  },
  {
    title: '用 ElevenLabs 克隆自己的声音',
    software: 'ElevenLabs',
    emoji: '🎙️',
    url: 'https://elevenlabs.io',
    difficulty: '进阶',
    duration: '约 20 分钟',
    desc: '上传一段你的干声录音，在 ElevenLabs 创建个人声音模型，再用它朗读任意文字——体验声音克隆的完整流程。',
    steps: [
      '注册 ElevenLabs，进入左侧 Voice Lab → Instant Voice Cloning',
      '用手机「语音备忘录」录制 1–3 分钟干声：安静房间、无背景音乐、正常语速朗读一段文章',
      '上传录音，为声音命名（如 my-voice），勾选克隆同意声明并创建',
      '进入 Text to Speech，在 Voice 下拉中选择刚克隆的声音',
      '粘贴下方测试文本，点击 Generate 试听效果',
      '满意后点击 Download 导出 MP3，可用于视频配音或播客片头'
    ],
    prompt: '大家好，我是[你的昵称]。这是我用 AI 克隆的声音测试。\n\n今天天气不错，我想读一段简短的介绍：人工智能正在改变我们学习、工作和创作的方式。希望这个声音听起来自然、清晰、有亲和力。\n\n谢谢收听！',
    result: '获得一个可复用的「你的声音」模型，输入任意文字即可生成配音音频。',
    tips: '克隆质量取决于录音：安静环境、一致音量、避免喷麦。仅克隆并商用自己有权使用的声音，勿克隆他人声音。'
  },
  {
    title: '用 Fish Audio 克隆中文声音（国产方案）',
    software: 'Fish Audio',
    emoji: '🐟',
    url: 'https://fish.audio',
    difficulty: '进阶',
    duration: '约 15 分钟',
    desc: '国内用户可用 Fish Audio 完成中文声音克隆，发音自然，适合短视频口播和中文配音场景。',
    steps: [
      '打开 fish.audio 注册账号，进入「声音克隆」或「创建声音」',
      '上传 30 秒–3 分钟中文干声（朗读新闻或文章片段即可）',
      '按提示完成声音命名和创建，等待模型训练（通常 1–5 分钟）',
      '在「文字转语音」输入框粘贴下方测试文案',
      '选择刚创建的声音，调整语速后点击生成',
      '试听并下载音频，对比 ElevenLabs 看哪个更适合你的中文场景'
    ],
    prompt: '各位好，欢迎收听今天的 AI 学习笔记。\n\n这一节我们来讲：怎样用真实软件上手人工智能。不需要先学完所有理论，带着具体问题去操作，才是最快的学习方式。\n\n如果你觉得有用，记得点赞收藏。',
    result: '获得一段用你声音朗读的中文测试音频，可用于口播或配音对比。',
    tips: '中文克隆优先选 Fish Audio；需要多语言或英文配音时再配合 ElevenLabs。'
  },
  {
    title: '用 OpenClaw 设置定时股票资讯搜集',
    software: 'OpenClaw',
    emoji: '🦞',
    url: 'https://docs.openclaw.ai',
    difficulty: '高级',
    duration: '约 30 分钟',
    desc: '配置 OpenClaw Cron 定时任务，让每个交易日早上自动运行 Agent 搜集股票资讯，并推送到 Telegram 或 Slack。',
    steps: [
      '安装 OpenClaw CLI，运行 openclaw doctor --fix 完成 Gateway 初始化',
      '确保 Gateway 进程在运行（定时任务在 Gateway 内调度，非模型内部）',
      '将下方命令中的关注标的、时区、推送频道 ID 改成你的配置',
      '在终端执行命令创建 cron 任务（工作日 8:30 Asia/Shanghai）',
      '运行 openclaw cron list 确认任务已入库，openclaw cron runs --id <job-id> 查看执行记录',
      '首次可手动触发测试：openclaw cron run <job-id>，检查推送内容是否可读、有据可查'
    ],
    prompt: 'openclaw cron create "30 8 * * 1-5" \\\n  --name "每日股票资讯简报" \\\n  --tz "Asia/Shanghai" \\\n  --session isolated \\\n  --message "你是专业的投资研究助理。请搜集并整理今日股市相关资讯：\\n\\n关注标的：沪深300、宁德时代(300750)、苹果(AAPL)\\n\\n输出格式（中文，400字以内）：\\n1) 宏观要闻（最多3条，附来源）\\n2) 个股/板块异动（各最多2条）\\n3) 今日关注提醒（非投资建议，仅信息汇总）\\n\\n要求：没有可靠信息就写「暂无重要更新」；保留来源名称；不要编造数据。" \\\n  --announce \\\n  --channel telegram \\\n  --to "你的Telegram用户ID或频道ID"',
    result: '每个交易日早上自动收到一份 Agent 整理的股票资讯简报（需自行配置推送渠道）。',
    tips: 'OpenClaw 输出仅供参考，不构成投资建议；关键数据务必交叉核实。推送前先用 --channel 和 --to 测通消息链路。'
  },
  {
    title: '用 GitHub Copilot 生成函数与单元测试',
    software: 'GitHub Copilot',
    emoji: '👨‍💻',
    url: 'https://github.com/features/copilot',
    difficulty: '入门',
    duration: '约 12 分钟',
    desc: '在 VS Code 中用 Copilot 补全业务函数，并一键生成 Jest 单元测试，体验日常编码提效。',
    steps: [
      '安装 VS Code + GitHub Copilot 插件并登录',
      '新建 utils/discount.js，写函数注释描述折扣计算规则',
      '输入 function 开头，接受 Copilot 补全的函数体',
      '新建 utils/discount.test.js，输入 describe 触发测试用例补全',
      '运行 npm test（或 jest）验证通过，不通过则把报错贴回 Chat 面板修复',
      '尝试在注释里改规则（如满 200 减 30），观察补全如何跟随变化'
    ],
    prompt: '// 计算订单折扣：满 100 减 10，满 200 减 30，不支持负数金额\n// 返回 { original, discount, final } 对象\nfunction calcDiscount(amount) {\n  // Copilot 从这里开始补全\n}',
    result: '得到可运行的折扣函数 + 基础单元测试，理解「注释驱动补全」工作流。',
    tips: 'Copilot 对清晰函数注释和类型提示响应最好；测试文件与实现放一起时补全质量更高。'
  },
  {
    title: '用 Windsurf 给网站批量加深色模式',
    software: 'Windsurf',
    emoji: '🏄',
    url: 'https://codeium.com/windsurf',
    difficulty: '进阶',
    duration: '约 25 分钟',
    desc: '用 Windsurf Cascade Agent 理解小型前端项目结构，跨多文件添加 CSS 变量与主题切换按钮。',
    steps: [
      '用 Windsurf 打开含 index.html + styles.css 的练习项目',
      '打开 Cascade，粘贴下方任务描述',
      '让 Agent 列出将修改的文件清单，确认后执行',
      '在浏览器预览，点击主题切换验证颜色变化',
      '若有漏改的选择器，选中问题元素继续对话：「顶栏在暗色下对比度不够」',
      '提交前让 Agent 生成简短变更说明（changelog）'
    ],
    prompt: '请为当前项目添加深色/浅色主题切换：\n1) 用 CSS 变量定义颜色体系\n2) 在页头加切换按钮，偏好写入 localStorage\n3) 不破坏现有布局，移动端可用\n4) 修改后告诉我改了哪些文件、如何测试',
    result: '项目支持一键深/浅色切换，体验 Agent 跨文件协作。',
    tips: 'Cascade 适合「多文件一致改动」；先让 Agent 给计划再执行，比直接「全改」更可控。'
  },
  {
    title: '用 Claude 审阅合同并标注风险条款',
    software: 'Claude',
    emoji: '🎭',
    url: 'https://claude.ai',
    difficulty: '进阶',
    duration: '约 20 分钟',
    desc: '上传 PDF 合同，让 Claude 从乙方视角标注高风险条款并给出修改建议，适合法务/采购入门练习。',
    steps: [
      '注册 Claude，新建对话（Pro 版可上传更长 PDF）',
      '上传合同 PDF 或粘贴关键章节文本',
      '粘贴下方提示词，指定你是「乙方」立场',
      '阅读输出的风险分级表，核对页码/章节引用是否准确',
      '追问：「请把高风险条款改写成更平衡的替代表述」',
      '将结果导出给法务同事复核——AI 审阅不能替代律师'
    ],
    prompt: '你是一位谨慎的合同审阅助手。我方为乙方。\n\n请审阅上传的合同并输出：\n1) 高风险条款 Top 5（引用原文+理由）\n2) 中风险条款 3 条\n3) 每条给出可谈判的修改建议\n4) 用表格汇总：条款位置 | 风险等级 | 建议\n\n注意：不确定的表述请标注「需人工核实」，不要编造法条。',
    result: '得到结构化合同风险清单与谈判建议草稿。',
    tips: 'Claude 长文档能力强；务必上传完整版并交叉核对原文，敏感合同勿用公共账号处理。'
  },
  {
    title: '用 Gemini 写带实时搜索的行业快报',
    software: 'Gemini',
    emoji: '✨',
    url: 'https://gemini.google.com',
    difficulty: '入门',
    duration: '约 10 分钟',
    desc: '利用 Gemini 与 Google 搜索整合，快速生成某行业一周要闻快报，并附可点击来源。',
    steps: [
      '打开 gemini.google.com 并登录 Google 账号',
      '开启「使用 Google 搜索」或类似联网选项（如有）',
      '粘贴下方提示词，将行业改成你关心的领域',
      '检查文末来源链接是否可打开，删除明显过时条目',
      '要求 Gemini 输出「管理层 3 条结论 + 执行层 3 条行动」',
      '复制到 Google Docs 供团队周会使用'
    ],
    prompt: '请调研「2026 年中国跨境电商」过去 7 天重要动态，输出 400 字中文快报：\n\n结构：\n- 本周 3 条要闻（每条一句话+来源）\n- 对中小卖家的影响\n- 下周值得关注的 2 个变量\n\n要求引用可核查来源，没有可靠消息就写「暂无」。',
    result: '一份带来源的行业快报，可直接用于晨会或内部资讯。',
    tips: 'Gemini 的优势是搜索整合；仍要逐条点开来源核实，防止二手转载误差。'
  },
  {
    title: '用通义千问写小红书种草笔记',
    software: '通义千问',
    emoji: '🌐',
    url: 'https://tongyi.aliyun.com',
    difficulty: '入门',
    duration: '约 8 分钟',
    desc: '用通义千问生成符合小红书语感的种草文案，含标题、正文、标签和封面建议。',
    steps: [
      '打开通义千问，新建对话',
      '在提示词中填入真实产品卖点（勿夸大功效）',
      '生成后要求「再写一版更口语、更短」做 A/B',
      '让 AI 给出 3 个封面图拍摄/生成建议',
      '复制 5 个话题标签，检查是否贴合平台规范',
      '发布前人工审核广告法敏感词（绝对化用语等）'
    ],
    prompt: '产品是「便携冷萃咖啡杯」，卖点：5 分钟快萃、双层防烫、颜值简约。\n\n请写小红书种草笔记：\n1) 吸引点击的标题 3 个\n2) 正文 250 字，第一人称，口语化，分段+emoji 适度\n3) 5 个话题标签\n4) 评论区引导语 1 句\n\n合规：不使用「最好」「第一」等绝对化表述。',
    result: '一套可发布的小红书种草文案草稿与标签。',
    tips: '通义千问中文语感好；真实体验细节要自己补，否则容易「泛种草」。'
  },
  {
    title: '用 Kimi 精读 100 页 PDF 年报',
    software: 'Kimi',
    emoji: '🌙',
    url: 'https://kimi.moonshot.cn',
    difficulty: '进阶',
    duration: '约 25 分钟',
    desc: '上传上市公司年报 PDF，让 Kimi 提取财务亮点、风险因素与管理层论述，适合投研/商科学习。',
    steps: [
      '打开 Kimi，点击附件上传年报 PDF（可公开样本）',
      '等待解析完成，粘贴下方分析框架',
      '核对 Kimi 给出的数字是否能在 PDF 中找到原文',
      '追问：「现金流与净利润差异原因？」',
      '导出为 Markdown 笔记，标注「待核实」字段',
      '勿将未公开内幕材料上传任何云端 AI'
    ],
    prompt: '请基于上传的年报，用中文输出：\n1) 公司主业一句话\n2) 近三年营收/净利润趋势（列表）\n3) 本期 3 个亮点 + 3 个风险（引用章节页码）\n4) 管理层对未来的 3 条表述\n5) 投资者需追问的 3 个问题\n\n数字必须来自文档；找不到就写「未披露」。',
    result: '结构化年报精读笔记，含页码引用与追问清单。',
    tips: 'Kimi 长 PDF 能力强；财务数字务必回原文核对，AI 可能看错表格单位（万元/亿元）。'
  },
  {
    title: '用 DeepSeek 调试 Python 报错',
    software: 'DeepSeek',
    emoji: '🔍',
    url: 'https://chat.deepseek.com',
    difficulty: '入门',
    duration: '约 12 分钟',
    desc: '把 Traceback 和代码片段交给 DeepSeek，定位 IndexError 根因并给出修复与防呆建议。',
    steps: [
      '打开 DeepSeek 对话，新建聊天',
      '粘贴下方含 bug 的代码 + 完整报错',
      '阅读「原因解释」与「修复代码」两段输出',
      '本地替换代码并重新运行验证',
      '追问：「请加输入校验，避免空列表」',
      '对比修复前后差异，总结同类 bug 模式'
    ],
    prompt: '以下 Python 代码报错，请中文解释原因并给出修复：\n\n```python\ndef avg_positive(nums):\n    pos = [n for n in nums if n > 0]\n    return sum(pos) / len(pos)\n\nprint(avg_positive([]))\n```\n\nTraceback: ZeroDivisionError: division by zero\n\n请：1) 解释 2) 修复代码 3) 加边界处理 4) 给 2 个测试用例',
    result: '修复后的函数可处理空列表，并理解除零类错误防护。',
    tips: 'DeepSeek 代码性价比高；贴完整 Traceback 比只贴最后一行更有效。'
  },
  {
    title: '用 Stable Diffusion 生成电商产品白底图',
    software: 'Stable Diffusion',
    emoji: '🌀',
    url: 'https://stability.ai',
    difficulty: '进阶',
    duration: '约 20 分钟',
    desc: '通过 Stability 在线服务或本地 WebUI，生成简约风产品展示图，学习文生图 + 负面提示词。',
    steps: [
      '打开 Stability 官方在线生成或本地 Automatic1111 / ComfyUI',
      '粘贴英文提示词与负面提示词',
      '设置 1:1 或 4:5 画幅，步数 25–30，CFG 7 左右',
      '生成 4 张，选最干净的一张放大',
      '用提示词加入品牌色背景做第二张场景图',
      '商用前确认平台许可与产品实拍版权'
    ],
    prompt: 'Positive: minimalist product photo of wireless earbuds, pure white background, studio lighting, soft shadow, centered composition, ultra sharp, commercial photography, 4k\n\nNegative: text, watermark, logo, blurry, deformed, extra objects, cluttered background',
    result: '一张可用于电商详情页的简约产品展示图。',
    tips: '产品图关键词：white background / studio lighting / centered；负面提示词能显著减少畸形。'
  },
  {
    title: '用可灵 AI 做 15 秒产品展示视频',
    software: '可灵 AI',
    emoji: '🎬',
    url: 'https://klingai.com',
    difficulty: '入门',
    duration: '约 15 分钟',
    desc: '输入中文提示词，让可灵生成竖屏产品展示短片，适合抖音/小红书带货场景。',
    steps: [
      '注册可灵 AI，进入视频生成',
      '选择文生视频，画幅 9:16',
      '粘贴下方提示词，生成 5–10 秒片段',
      '不满意可调整「镜头缓慢推进」「柔光」等词重试',
      '下载 MP4，导入剪映加字幕与 CTA',
      '发布时标注 AI 生成内容（按平台要求）'
    ],
    prompt: '竖屏 9:16，简约白色桌面上的一款智能保温杯，蒸汽缓缓升起，镜头缓慢环绕产品，柔光自然，高级商业广告质感，背景干净，无文字无水印，真实物理运动',
    result: '一段竖屏产品展示短视频素材。',
    tips: '可灵对「缓慢运动」「商业广告质感」响应好；复杂剧情分镜建议拆成多段生成再剪辑。'
  },
  {
    title: '用 Runway 把产品图变成动态镜头',
    software: 'Runway',
    emoji: '🎥',
    url: 'https://runwayml.com',
    difficulty: '进阶',
    duration: '约 18 分钟',
    desc: '上传静态产品照片，用 Runway 图生视频生成 4 秒动态展示，用于广告片头或网站 Hero。',
    steps: [
      '注册 Runway，进入 Gen-3 图生视频',
      '上传一张清晰产品 JPG/PNG（最好白底）',
      '在 Motion Prompt 粘贴下方英文镜头描述',
      '生成 4s 片段，预览运动是否自然',
      '导出后用剪映/Web 编辑器循环播放或加背景音乐',
      '注意产品边缘是否变形，变形则换更简单的运镜词'
    ],
    prompt: 'Slow cinematic push-in, subtle parallax, product stays sharp, soft studio light, gentle shadow movement, no morphing, commercial ad quality',
    result: '4 秒产品动态镜头，可用于片头或落地页背景。',
    tips: '图生视频宜「小运动」：slow push / subtle rotate；大幅度运动易变形。'
  },
  {
    title: '用 Suno 生成 30 秒品牌宣传曲',
    software: 'Suno',
    emoji: '🎵',
    url: 'https://suno.com',
    difficulty: '入门',
    duration: '约 10 分钟',
    desc: '用 Suno v4 根据品牌调性生成短宣传曲，含器乐与节奏，可用于视频 BGM 或活动暖场。',
    steps: [
      '注册 Suno，点击 Create',
      '选择 Custom 模式，粘贴下方风格描述',
      '生成 2 首，选节奏更稳的一首',
      '使用 Extend 延长到 30–45 秒（如需要）',
      '下载 MP3，在视频中压低音量做背景乐',
      '商用前查看 Suno 当前许可政策'
    ],
    prompt: 'Instrumental upbeat corporate tech, modern synth and light percussion, optimistic, clean, no vocals, suitable for AI product launch video, 100-110 BPM',
    result: '一段无 VOC 的品牌宣传背景音乐。',
    tips: 'Suno 写「Instrumental + 情绪 + BPM + 场景」稳定；带歌词则写明语言与主题。'
  },
  {
    title: '用 Notion AI 整理会议纪要与待办',
    software: 'Notion AI',
    emoji: '📋',
    url: 'https://www.notion.so/product/ai',
    difficulty: '入门',
    duration: '约 12 分钟',
    desc: '在 Notion 页面粘贴会议速记，用 AI 生成结构化纪要、决策项和可勾选待办列表。',
    steps: [
      '在 Notion 新建页面「周会 2026-06-25」',
      '粘贴原始会议速记（或语音转写文本）',
      '选中全文，点击 Notion AI → Summarize → Action items',
      '用提示词进一步要求「按负责人分组待办」',
      '把待办转成 Notion to-do 块并 @同事',
      '分享页面链接给参会人确认'
    ],
    prompt: '基于当前页面内容，请输出：\n1) 会议摘要（5 条以内）\n2) 关键决策\n3) 待办清单：负责人 | 事项 | 截止日期\n4) 未决问题\n\n保持中文，不要编造未讨论的内容。',
    result: '可协作的会议纪要页面，含分组待办。',
    tips: 'Notion AI 适合「已有笔记二次整理」；会中实时记关键词比事后补写更准。'
  },
  {
    title: '用 Gamma 10 分钟生成路演 PPT',
    software: 'Gamma',
    emoji: '📊',
    url: 'https://gamma.app',
    difficulty: '入门',
    duration: '约 10 分钟',
    desc: '输入大纲让 Gamma 自动生成 10 页路演 Deck，可在线分享与导出 PDF。',
    steps: [
      '登录 Gamma，选择 Create → Presentation',
      '粘贴下方路演大纲，选择简约科技主题',
      '等待生成后逐页检查数据与措辞',
      '在关键页插入产品截图或图表',
      '用 AI 改写过长段落为要点列表',
      '导出 PDF 或分享链接给同事预览'
    ],
    prompt: '生成 10 页中文路演 PPT：\n\n主题：AI 学习平台「BestWayToLearn.AI」\n受众：企业培训负责人\n结构：封面 / 痛点 / 解决方案 / 产品演示 / 学习路径 / 案例 / 商业模式 / 竞争差异 / 里程碑 / 联系页\n\n风格：深色科技风，每页 3-5 要点，避免大段文字',
    result: '10 页可分享的路演演示文稿初稿。',
    tips: 'Gamma 适合「结构清晰的大纲」；数字与案例需人工替换为真实信息。'
  },
  {
    title: '用 Perplexity 做竞品调研一页纸',
    software: 'Perplexity',
    emoji: '🔎',
    url: 'https://www.perplexity.ai',
    difficulty: '入门',
    duration: '约 15 分钟',
    desc: '用 Perplexity Pro Search 梳理竞品格局，输出带引用来源的一页对比摘要。',
    steps: [
      '打开 Perplexity，登录（Pro 搜索更深）',
      '粘贴下方调研问题，等待检索完成',
      '点击引用编号核对原始来源',
      '追问：「请做 ChatGPT vs Claude vs Gemini 功能对比表」',
      '复制结果到 Notion/飞书，标注调研日期',
      '删除过时或无法打开的来源条目'
    ],
    prompt: '请调研 2026 年「AI 编程 IDE」市场：Cursor、Windsurf、GitHub Copilot 的定位、定价、核心差异、目标用户。输出中文一页纸：市场概览 | 对比表 | 3 条选型建议 | 引用来源',
    result: '带引用的竞品调研一页纸，可用于选型讨论。',
    tips: 'Perplexity 强项是「可核查来源」；表格仍建议回官网核实价格。'
  },
  {
    title: '用 NotebookLM 把 3 篇论文变成 AI 播客',
    software: 'NotebookLM',
    emoji: '📓',
    url: 'https://notebooklm.google.com',
    difficulty: '进阶',
    duration: '约 20 分钟',
    desc: '上传 3 篇相关 PDF 论文，生成 Audio Overview 播客，通勤时听文献要点。',
    steps: [
      '打开 NotebookLM，新建 Notebook',
      '上传 3 篇同一主题的 PDF（公开论文即可）',
      '等待索引完成，先阅读自动生成的 FAQ',
      '点击 Studio → Generate Audio Overview',
      '边听边记，暂停回放核实关键结论',
      '用聊天功能追问：「三篇论文的方法论差异？」'
    ],
    prompt: '（上传 PDF 后向 Notebook 提问）\n\n请比较三篇论文的研究问题、数据集、方法、局限，输出表格，并给出「新手该先读哪篇」的建议。',
    result: '一段 AI 播客音频 + 可追问的文献笔记本。',
    tips: 'NotebookLM 仅基于你上传的资料回答，适合文献综述；播客娱乐性强，学术引用仍以原文为准。'
  },
  {
    title: '用文心一言写公众号长文',
    software: '文心一言',
    emoji: '📝',
    url: 'https://yiyan.baidu.com',
    difficulty: '入门',
    duration: '约 15 分钟',
    desc: '用文心一言完成 1500 字科普长文，含标题备选、小标题结构与 SEO 关键词布局。',
    steps: [
      '打开文心一言，新建对话',
      '粘贴下方写作任务，填入你的主题',
      '生成后要求「降低 AI 腔，增加具体例子」',
      '让 AI 输出 3 个标题 + 100 字摘要',
      '人工加入真实经历或数据，删除空洞套话',
      '排版为公众号格式（小标题、引用、结尾引导）'
    ],
    prompt: '请写一篇 1500 字中文科普文：\n主题：普通人如何系统学习 AI（面向职场新人）\n结构：引子故事 / 3 个认知误区 / 7 天学习法 / 工具推荐 / 结尾行动号召\n\n要求：小标题清晰，口语化，举例具体，避免「综上所述」式空话。',
    result: '一篇可编辑发布的公众号长文初稿。',
    tips: '文心一言中文互联网语境熟悉；发布前务必事实核查并加入个人视角。'
  },
  {
    title: '用 ChatGPT 分析 Excel 销售数据',
    software: 'ChatGPT',
    emoji: '💬',
    url: 'https://chat.openai.com',
    difficulty: '进阶',
    duration: '约 18 分钟',
    desc: '上传 CSV 样本，用 ChatGPT 高级数据分析计算趋势、Top SKU 与异常月份，并建议图表。',
    steps: [
      '准备脱敏后的 sales.csv（月份,SKU,销量,金额）',
      'ChatGPT 新建对话，上传文件（Plus/Team）',
      '粘贴下方分析提示词',
      '查看生成的 Python 分析或表格结果',
      '要求导出「本月建议补货的 5 个 SKU」',
      '敏感经营数据请用企业版或本地分析，慎传机密'
    ],
    prompt: '请分析上传的销售 CSV：\n1) 按月总销售额趋势\n2) Top 5 SKU（金额）\n3) 销量异常下跌月份及可能原因（数据驱动，勿臆测）\n4) 建议绘制 2 张图表及洞察\n5) 给业务团队 3 条行动建议\n\n输出中文，列表+简短结论。',
    result: '销售趋势洞察与图表建议，可直接用于周会。',
    tips: '上传前脱敏；若数据量大可先在表格里聚合，或让 AI 写 Python 在本地跑。'
  },
  {
    title: '用 Claude Artifacts 做交互式待办页',
    software: 'Claude',
    emoji: '🎭',
    url: 'https://claude.ai',
    difficulty: '进阶',
    duration: '约 15 分钟',
    desc: '让 Claude 在 Artifacts 面板生成单文件 HTML 待办应用，支持本地存储与勾选。',
    steps: [
      'Claude 新建对话，粘贴下方提示词',
      '右侧 Artifacts 预览待办页，试添加/完成/删除',
      '若样式不满意：「更简约的深色 UI，加大点击区域」',
      '点击 Artifacts 导出或复制 HTML 保存',
      '双击 HTML 在浏览器打开，验证 localStorage 持久化',
      '可部署到 GitHub Pages 作为个人小工具'
    ],
    prompt: '请创建一个单文件 HTML 待办应用（内联 CSS+JS）：\n- 添加/完成/删除\n- localStorage 持久化\n- 深色简约 UI，移动端友好\n- 中文界面\n\n在 Artifacts 中输出完整可运行代码，并说明如何使用。',
    result: '一个可双击运行的本地待办网页小应用。',
    tips: 'Claude Artifacts 适合快速原型；复杂功能再导入 Cursor 迭代。'
  },
  {
    title: '用 Cursor Agent 搭建 REST API 脚手架',
    software: 'Cursor',
    emoji: '⚡',
    url: 'https://cursor.com',
    difficulty: '进阶',
    duration: '约 30 分钟',
    desc: '用 Cursor Agent 从零生成 Node.js Express API，含健康检查、TODO CRUD 与 README。',
    steps: [
      '新建文件夹 todo-api，用 Cursor 打开',
      'Agent 模式粘贴下方需求，允许创建多文件',
      '终端运行 npm install && npm run dev',
      '用 curl 或 Postman 测试 GET /health 与 POST /todos',
      '若端口冲突，让 Agent 改 .env 示例',
      '阅读 Agent 生成的 README，补充你的部署说明'
    ],
    prompt: '请用 Node.js + Express 创建 REST API 项目：\n- GET /health\n- CRUD /todos（内存存储即可）\n- 含 package.json、README、.gitignore\n- 加简单错误处理与中文注释\n- 告诉我启动命令与测试示例',
    result: '本地可运行的 TODO API 脚手架与测试说明。',
    tips: 'Agent 模式记得允许写文件与运行终端；先跑通健康检查再扩展数据库。'
  },
  {
    title: '用 Midjourney 设计咖啡品牌海报',
    software: 'Midjourney',
    emoji: '🎨',
    url: 'https://www.midjourney.com',
    difficulty: '入门',
    duration: '约 12 分钟',
    desc: '不同于风景图，本次练习商业海报构图：主体、留白、品牌色与排版区域。',
    steps: [
      'Midjourney Create 页面新建任务',
      '粘贴下方提示词，注意 --ar 2:3 竖版海报',
      '选择构图留白适合放 Logo 的版本 Upscale',
      '在 Figma/Canva 叠加品牌名与 Slogan（AI 图不写字）',
      '做 Vary 变体对比暖色/冷色氛围',
      '导出 JPG 用于门店立牌或社媒海报'
    ],
    prompt: 'minimalist coffee brand poster, single ceramic cup on wooden table, morning light, large negative space at top for typography, earthy brown and cream palette, editorial photography, clean composition --ar 2:3 --style raw --v 6',
    result: '一张竖版咖啡品牌海报底图，适合叠加文字。',
    tips: '海报预留排版区：large negative space at top；文字尽量后期叠加，Midjourney 写字易乱码。'
  },
  {
    title: '用 ChatGPT 批量生成 App 图标草案',
    software: 'ChatGPT',
    emoji: '🖼️',
    url: 'https://chat.openai.com',
    difficulty: '入门',
    duration: '约 8 分钟',
    desc: '用 DALL·E 在 ChatGPT 内一次生成 4 种风格的 App 图标草案，供 Figma 精修。',
    steps: [
      'ChatGPT 新建对话，确认可用图像生成',
      '粘贴提示词，要求 4 种配色变体',
      '下载最符合品牌气质的 1024px 图',
      '在 Figma 加圆角蒙版符合 iOS 图标规范',
      '不满意就描述「更扁平、更少细节」迭代',
      '最终图标需人工检查小尺寸可读性'
    ],
    prompt: '请生成 App 图标设计草案（1024x1024，正方形）：\n\n应用：AI 学习平台「BestWayToLearn.AI」\n元素：抽象神经元/星形，科技感\n风格：扁平渐变，深色底，高对比，无文字\n\n请一次给 4 种配色方案供我选择。',
    result: '4 张 App 图标草案，可导入设计工具精修。',
    tips: '图标生成后要测 60×60 小尺寸是否可辨认；避免过多细线。'
  },
  {
    title: '用 ElevenLabs 给视频做英文旁白',
    software: 'ElevenLabs',
    emoji: '🎙️',
    url: 'https://elevenlabs.io',
    difficulty: '入门',
    duration: '约 12 分钟',
    desc: '选择 ElevenLabs 预设英文音色，为 60 秒产品介绍生成旁白 MP3，导入剪映替换原声。',
    steps: [
      'ElevenLabs → Text to Speech，选专业英文男/女声',
      '粘贴下方 60 秒旁白脚本，调整 Stability/Clarity',
      '生成并试听，修改重音不当的单词拼写（如 AI 读作字母）',
      '下载 MP3，在剪映导入视频轨道',
      '对齐画面节奏，必要时剪短句间停顿',
      '发布时注明配音来源（如平台要求）'
    ],
    prompt: 'Welcome to BestWayToLearn.AI. In just seven days, you will move from AI basics to real projects. Learn how large language models work, pick the right tools, and practice with hands-on tutorials. Start with cognition, master the tools, ship real work, then validate your skills. Your AI journey begins now.',
    result: '一段可嵌入视频的英文旁白音频。',
    tips: '英文缩写用空格或连字符帮助发音（A I / Chat G P T）；长脚本分段生成更稳。'
  },
  {
    title: '用 Fish Audio 批量生成短视频口播',
    software: 'Fish Audio',
    emoji: '🐟',
    url: 'https://fish.audio',
    difficulty: '进阶',
    duration: '约 18 分钟',
    desc: '用已克隆或预设中文音色，将 3 段短视频脚本批量转为口播音频，提升产能。',
    steps: [
      'Fish Audio 登录，选择稳定中文音色',
      '将 3 段 30 秒脚本分条粘贴生成',
      '统一语速与音量，下载 MP3 命名 seq1–3',
      '在剪映按分镜对齐画面与字幕',
      '检查「AI」「模型」等词发音，必要时改同音替换',
      '备份脚本与音频，建立可复用口播模板'
    ],
    prompt: '【脚本 1】你知道吗？学会 AI 不需要先啃完所有数学。先用真实任务驱动，再回头补原理，效率最高。\n\n【脚本 2】选工具别贪多：一个对话 AI + 一个你最常用的专用工具就够了。\n\n【脚本 3】每天 45 分钟，坚持一周，你就能完成从认知到实战的完整闭环。',
    result: '3 段中文口播 MP3，可直接用于短视频配音。',
    tips: '批量口播先统一音色参数；脚本长度控制在 30–45 秒/条，便于剪辑节奏。'
  },
  {
    title: '用 OpenClaw 推送每日竞品动态',
    software: 'OpenClaw',
    emoji: '🦞',
    url: 'https://docs.openclaw.ai',
    difficulty: '高级',
    duration: '约 25 分钟',
    desc: '在股票资讯之外，配置 OpenClaw 每个工作日搜集竞品官网/博客更新并推送 Slack。',
    steps: [
      '确保 OpenClaw Gateway 已运行，Slack webhook/bot 已连通',
      '将下方 cron 命令中竞品列表换成你的赛道',
      '创建任务后执行 openclaw cron run 手动测试',
      '检查 Slack 消息是否含来源链接与日期',
      '噪音太多则让 message 要求「仅重大变更」',
      '遵守 robots 协议，勿高频爬取'
    ],
    prompt: 'openclaw cron create "0 9 * * 1-5" \\\n  --name "竞品动态日报" \\\n  --tz "Asia/Shanghai" \\\n  --session isolated \\\n  --message "你是竞品情报分析员。每日搜集以下竞品官网博客/Changelog 更新：Cursor, Windsurf, GitHub Copilot。输出中文简报（300字内）：1) 今日变更摘要 2) 对用户影响 3) 来源链接。无更新则写「今日无重大公开更新」。" \\\n  --announce \\\n  --channel slack \\\n  --to "你的Slack频道ID"',
    result: '工作日早上在 Slack 收到竞品动态简报。',
    tips: '与股票 cron 类似，先 isolated session 防污染；情报用途务必标注来源。'
  }
];

const PRACTICES = [
  { title: '周报与邮件写作', tools: 'ChatGPT / Claude / 通义千问', desc: '将工作要点列成 bullet points，AI 扩展为结构清晰的周报或专业邮件。', steps: ['列出本周 3-5 个关键事项', '注明每项的成果数据', '让 AI 按公司格式生成'], prompt: '你是一位专业的职场沟通顾问。\n请将以下要点扩展为一份简洁专业的周报（约 300 字）：\n[粘贴要点]\n要求：数据导向、突出成果、语气积极专业。' },
  { title: '学习新知识', tools: 'ChatGPT / Claude / Perplexity', desc: '用 AI 当私人导师——类比解释、出题检验、纠正理解偏差。', steps: ['明确学习主题和目标', '要求用费曼学习法讲解', '做练习题检验理解'], prompt: '请用「费曼学习法」教我理解 [主题]。\n1. 用通俗类比解释核心概念\n2. 指出 3 个常见误解\n3. 出 2 道检验理解的选择题（附答案和解析）' },
  { title: '代码调试与解释', tools: 'Cursor / GitHub Copilot / DeepSeek', desc: '粘贴报错或代码片段，AI 定位问题、解释原因并给出修复方案。', steps: ['粘贴完整报错信息', '附上相关代码上下文', '要求解释原因和修复方案'], prompt: '以下代码运行时报错：\n[代码和错误信息]\n请：1) 用中文解释错误原因 2) 给出修复代码 3) 说明如何避免' },
  { title: '数据分析与可视化', tools: 'ChatGPT（Code Interpreter）/ Claude', desc: '上传 CSV/Excel，AI 分析趋势、发现异常、建议图表类型。', steps: ['上传数据文件', '说明分析目标', '要求统计+洞察+图表建议'], prompt: '请分析上传的销售数据：\n1. 基本统计概览\n2. Top 3 趋势和异常\n3. 建议 2 张最有价值的图表\n4. 3 条可执行业务建议' },
  { title: '营销文案创作', tools: 'Claude / ChatGPT / 文心一言', desc: '提供产品信息和受众，生成多版本文案供 A/B 测试。', steps: ['描述产品和卖点', '定义目标受众画像', '要求 3 种风格版本'], prompt: '产品：[描述] 受众：[描述]\n请生成 3 版营销文案（专业/活泼/紧迫），每版含标题+正文(100字)+CTA。' },
  { title: '会议纪要整理', tools: 'Kimi / Claude / 通义千问', desc: '将录音转写或杂乱笔记交给 AI，输出结构化纪要和待办。', steps: ['提供会议录音转写或笔记', '标注参会人和主题', '要求结构化输出'], prompt: '请将以下会议记录整理为结构化纪要：\n## 主题 ## 关键决议 ## 待办(负责人+截止日期) ## 未决问题\n\n[粘贴记录]' },
  { title: '简历与求职信', tools: 'ChatGPT / Claude', desc: '针对特定岗位优化简历描述，生成个性化求职信。', steps: ['粘贴目标 JD', '列出自己的相关经历', '要求匹配优化'], prompt: '目标岗位：[JD]\n我的背景：[简历要点]\n请：1) 优化工作经历描述(突出匹配点) 2) 写 200 字求职信' },
  { title: '产品原型构思', tools: 'ChatGPT / Gemini / Figma AI', desc: '描述产品想法，AI 生成用户故事、功能列表、页面结构。', steps: ['用一段话描述产品想法', '明确目标用户', '要求 MVP 功能清单'], prompt: '我想做一款 [产品描述]。\n请输出：1) 3 个用户故事 2) MVP 功能清单(按优先级) 3) 主页面线框描述 4) 风险与应对' },
  { title: '翻译与本地化', tools: 'DeepL / ChatGPT / Claude', desc: '不仅翻译文字，还适配文化语境、调整语气和格式。', steps: ['提供原文和目标语言', '说明受众和文化背景', '要求非直译适配'], prompt: '将以下内容翻译为 [语言]，要求：\n1. 符合当地表达习惯 2. 保持原文语气 3. 标注 2 处文化适配调整\n\n[原文]' },
  { title: '竞品与市场调研', tools: 'Perplexity / ChatGPT / NotebookLM', desc: 'AI 梳理竞品格局、市场趋势，生成 SWOT 分析。', steps: ['明确行业和调研范围', '要求结构化竞品对比', '核实关键数据来源'], prompt: '请对 [行业/产品] 做竞品分析：\n1. 5 个主要竞品及差异 2. SWOT 分析 3. 3 个差异化机会\n请标注信息来源。' },
  { title: '教学设计', tools: 'ChatGPT / Claude / 通义千问', desc: '为特定主题和受众设计课程大纲、讲义和课堂活动。', steps: ['说明受众和教学目标', '指定课时和形式', '要求完整教学方案'], prompt: '受众：[背景] 主题：[主题] 时长：[课时]\n请设计：1) 教学目标 2) 课程大纲 3) 互动环节 4) 课后作业' },
  { title: '图像与封面设计', tools: 'Midjourney / DALL·E 3 / 通义万相', desc: '文字描述生成配图、封面、插画，快速验证视觉方向。', steps: ['明确风格和用途', '编写英文/中文提示词', '迭代优化 2-3 轮'], prompt: 'A [风格] illustration of [主题], [色调] palette, [构图], clean composition, high quality --ar 16:9' },
  { title: '法律合同审阅', tools: 'Claude / ChatGPT / Kimi', desc: '上传合同文本，AI 标注风险条款、解释法律术语、给出修改建议。', steps: ['上传合同全文', '说明你的立场（甲方/乙方）', '要求标注风险点'], prompt: '请审阅以下合同（我方为 [甲方/乙方]）：\n1. 标注 5 个风险条款 2. 解释专业术语 3. 给出修改建议\n\n[合同文本]' },
  { title: '社交媒体内容', tools: 'ChatGPT / 文心一言 / Claude', desc: '根据主题生成多平台适配的社媒文案（小红书/微博/LinkedIn）。', steps: ['确定平台和受众', '给出核心信息点', '要求多版本+话题标签'], prompt: '请为 [平台] 创作关于 [主题] 的帖子：\n1. 吸引注意的标题 2. 正文(200字) 3. 5 个话题标签 4. 互动引导语' },
  { title: 'Excel 公式与数据处理', tools: 'ChatGPT / Claude / DeepSeek', desc: '描述数据处理需求，AI 生成 Excel/Sheets 公式或 Python 脚本。', steps: ['描述数据结构和目标', '给出示例输入输出', '要求公式或脚本'], prompt: '我有 Excel 数据：[描述结构]\n需要：[处理目标]\n请给出：1) Excel 公式 2) 操作步骤 3) 注意事项' },
  { title: '个人知识管理', tools: 'Notion AI / NotebookLM / Obsidian+AI', desc: '将读书笔记、文章收藏交给 AI 整理为结构化知识库。', steps: ['收集零散笔记和摘录', '确定分类体系', 'AI 生成摘要和关联'], prompt: '请整理以下笔记为结构化知识库：\n1. 按主题分类 2. 每个主题写摘要 3. 标注关键概念和关联\n\n[笔记内容]' }
];

const PROMPT_CASES = [
  {
    id: 'weekly-report',
    emoji: '📊',
    title: '周报扩写',
    scene: '职场沟通',
    task: '内容写作',
    role: '职场沟通顾问',
    context: '本周完成：1) 上线 BestWayToLearn.AI部署工具 v2，修复 Nginx 路由冲突；2) 客户演示 2 场，收集 5 条反馈；3) 输出提示词实验室改版方案。卡点：服务器环境检测偶发超时。',
    output: '一份约 300 字的专业周报，突出成果数据与下周计划',
    tone: '专业严谨',
    response: `## 本周工作周报

**汇报人**：产品运营 · 阿里云深圳项目组
**周期**：6/23 – 6/25

### 一、核心成果
1. **部署工具 v2 上线**：修复环境检测崩溃与 Nginx default_server 冲突，完整部署验证通过，站点可正常访问（8.135.40.124）。
2. **客户演示 2 场**：覆盖培训负责人与 IT 运维角色，收集有效反馈 5 条，集中在「一键部署」与「学习路径清晰度」。
3. **提示词实验室改版**：完成案例库 + 同屏模拟方案，降低新手上手门槛。

### 二、数据与进展
- 部署成功率：演示环境 100%（3/3 次）
- 客户满意度（现场打分）：4.6 / 5
- 文档更新：部署说明 + 实验室案例 6 个

### 三、问题与风险
- 环境检测在弱网场景偶发超时（>15s），已记录复现条件，计划增加重试与超时提示。

### 四、下周计划
1. 弱网检测优化 + 日志导出
2. 根据客户反馈调整 Day 4 提示词模块
3. 准备 1 份对外演示脚本

---
如需改成「更简短」或「邮件版」，告诉我目标读者即可。`,
    followups: [
      { user: '请压缩到 200 字以内，语气更口语', ai: `**本周三件事：**\n1. 部署工具 v2 上线，Nginx 冲突已解决，站点可访问。\n2. 完成 2 场客户演示，收集 5 条反馈，大家最在意「一键部署」。\n3. 提示词实验室加了 6 个真实案例，支持同屏模拟。\n\n**卡点**：弱网下环境检测偶尔超时，下周加重试。\n\n**下周**：优化检测、改提示词模块、写演示脚本。` }
    ],
    realGuide: {
      tools: ['ChatGPT', '通义千问', 'Kimi'],
      steps: [
        '复制左侧生成的提示词（或对话中的用户消息）',
        '打开 ChatGPT / 通义千问，新建对话并粘贴',
        '把本周真实工作要点替换进「背景信息」后发送',
        '根据回复迭代：「更简洁」「改成邮件版」「突出数据」'
      ],
      link: { label: '查看更多写作场景模板', href: '#practice' }
    }
  },
  {
    id: 'meeting-notes',
    emoji: '📝',
    title: '会议纪要整理',
    scene: '会议协作',
    task: '会议纪要',
    role: '高级行政助理',
    context: '产品评审会，参会：张三(PM)、李四(研发)、王五(设计)。讨论 BestWayToLearn.AI 学习路径是否增加「企业版」模块。张三认为需求明确应 Q3 立项；李四担心人力，建议先做 MVP 验证；王五提出需统一视觉规范。散会前口头约定：李四两周内出技术评估，王五整理组件库清单。',
    output: '结构化会议纪要：决议、待办（含负责人与截止日期）、未决问题',
    tone: '简洁直接',
    response: `## 会议纪要

**会议主题**：BestWayToLearn.AI 学习路径 · 企业版模块评审
**时间**：2026-06-25 14:00–15:00
**参会人**：张三（PM）、李四（研发）、王五（设计）

### 关键决议
1. **企业版模块方向认可**，但不立即全量立项，优先 MVP 验证核心价值假设。
2. **视觉规范需先行**：企业版页面须复用统一组件库，避免二次设计债。

### 待办事项
| 事项 | 负责人 | 截止日期 |
|------|--------|----------|
| 输出企业版 MVP 技术评估（人天/风险/依赖） | 李四 | 7/9 |
| 整理现有组件库清单与缺口 | 王五 | 7/5 |
| 根据评估结果更新 Q3 路线图草案 | 张三 | 7/12 |

### 未决问题
- 企业版首个 MVP 只覆盖「部署工具」还是连同「测验报表」一起做？
- 是否需单独定价页与试用申请流程？

---
需要我补充「会议背景摘要」或转成飞书/钉钉待办格式吗？`,
    followups: [
      { user: '转成飞书待办格式', ai: `【飞书待办同步稿】\n\n☐ 企业版 MVP 技术评估 — @李四 — 截止 7/9\n☐ 组件库清单与缺口 — @王五 — 截止 7/5\n☐ 更新 Q3 路线图草案 — @张三 — 截止 7/12\n\n未决：MVP 范围（仅部署工具 vs 含测验报表）；是否新增定价/试用页。` }
    ],
    realGuide: {
      tools: ['Kimi', 'Claude', '通义千问'],
      steps: [
        '会议结束后，将录音转写或随手笔记粘贴到 AI 对话框',
        '使用本案例的结构化提示词，注明参会人与你的关注点',
        '核对 AI 输出的待办是否与会议一致，**勿直接转发未核实版本**',
        '将确认的待办同步到飞书/钉钉/Notion'
      ],
      link: { label: 'Kimi 长文档实操', href: '#hands-on' }
    }
  },
  {
    id: 'code-debug',
    emoji: '🐛',
    title: 'Python 除零修复',
    scene: '编程调试',
    task: '代码开发',
    role: '资深 Python 工程师',
    context: '函数计算正数平均值，空列表时崩溃。代码：\ndef avg_positive(nums):\n    pos = [n for n in nums if n > 0]\n    return sum(pos) / len(pos)',
    output: '解释错误原因、给出修复代码、边界处理与 2 个测试用例',
    tone: '通俗易懂',
    response: `## 错误原因

当 \`nums\` 为空或没有正数时，\`pos\` 为空列表，\`len(pos)\` 为 0，执行 \`sum(pos) / len(pos)\` 触发 **ZeroDivisionError: division by zero**。

## 修复代码

\`\`\`python
def avg_positive(nums):
    """返回正数的平均值；无正数时返回 None。"""
    if not nums:
        return None
    pos = [n for n in nums if n > 0]
    if not pos:
        return None
    return sum(pos) / len(pos)


# 测试用例
assert avg_positive([1, -2, 3, 4]) == 2.5      # 正常：正数平均
assert avg_positive([-1, -2]) is None          # 边界：无正数
assert avg_positive([]) is None                # 边界：空列表
print("全部测试通过")
\`\`\`

## 说明
1. **先过滤再判断**：避免对空列表做除法。
2. **返回值约定**：无正数时返回 \`None\`，调用方可用 \`if result is None\` 分支处理。
3. **可扩展**：若业务要求返回 0，把 \`return None\` 改为 \`return 0.0\` 并更新文档。

需要我改成「抛出自定义异常」或加上类型注解版本吗？`,
    followups: [],
    realGuide: {
      tools: ['Cursor', 'DeepSeek', 'GitHub Copilot'],
      steps: [
        '在 Cursor / VS Code 中选中报错代码，使用 Copilot 或 Ctrl+L 打开 AI 对话',
        '粘贴完整报错栈 + 代码上下文（不要只贴一行）',
        '要求：解释原因 → 修复 → 补测试，与本案例输出结构一致',
        '本地运行 \`python test.py\` 验证通过后再提交'
      ],
      link: { label: 'Cursor 编程实操', href: '#hands-on' }
    }
  },
  {
    id: 'xhs-copy',
    emoji: '☕',
    title: '小红书种草文案',
    scene: '电商营销',
    task: '内容写作',
    role: '小红书资深运营',
    context: '产品：便携冷萃咖啡杯。卖点：5 分钟快萃、双层防烫、简约颜值。目标人群：25-35 岁上班族，通勤场景。约束：不用「最好」「第一」等绝对化用语。',
    output: '3 个标题 + 250 字种草正文 + 5 个话题标签 + 评论区引导语',
    tone: '通俗易懂',
    response: `### 标题备选
1. 通勤 5 分钟｜我的随身冷萃杯真的省事☕
2. 打工人早咖啡救星！冷萃不用等一夜了
3. 简约高颜值保温杯，办公室被问链接 N 次

### 正文（约 250 字）
以前想喝冷萃总要提前一晚泡，早上还怕洒一路。换了这款便携冷萃杯之后，**通勤路上 5 分钟就能搞定一杯**，到工位刚好微凉顺口。

最喜欢两点：
✅ **双层防烫**——热萃/冷萃切换，手握不烫
✅ **外观简约**——放桌上不突兀，拍照也好看

我会前一晚把咖啡粉装好，早上加常温水，到公司就是一杯清醒开工的冷萃。比外卖省不少，也减少一次性杯子。

适合：想省事、又在意颜值的通勤党。不是专业咖啡设备，但**日常够用、好坚持**。

### 话题标签
#冷萃咖啡 #通勤好物 #办公室咖啡 #便携水杯 #打工人续命

### 评论区引导
你们通勤更喝热咖还是冷萃？评论区聊聊，我整理一版「一周不重样」泡法～

---
需要「更活泼」或「偏测评口吻」版本可以说一下。`,
    followups: [],
    realGuide: {
      tools: ['ChatGPT', '文心一言', 'Claude'],
      steps: [
        '把真实产品卖点、人群、禁用词写进提示词（越具体越好）',
        '让 AI 一次出 3 个标题，选定后再要求「展开第 2 个标题」',
        '发布前人工核对：广告法用语、品牌调性、价格信息',
        '配图可用 Midjourney / 通义万相生成产品场景图'
      ],
      link: { label: '图像生成实操', href: '#hands-on' }
    }
  },
  {
    id: 'market-brief',
    emoji: '🔍',
    title: '7 日市场快报',
    scene: '商业调研',
    task: '竞品调研',
    role: '行业研究分析师',
    context: '行业：2026 年中国跨境电商。关注：亚马逊政策变动、TikTok Shop 招商、独立站 SaaS 工具、物流成本。输出 400 字中文快报，需标注来源，无可靠信息写「暂无」。',
    output: '400 字快报：3 条要闻 + 对中小卖家影响 + 下周 2 个关注变量',
    tone: '专业严谨',
    response: `## 跨境电商 7 日快报（模拟演示数据）

> ⚠️ 以下为教学演示结构，真实使用前请在 Perplexity / 秘塔中重新检索并核实来源。

### 本周要闻
1. **亚马逊调整部分品类合规抽查频率**（来源：亚马逊卖家论坛公告摘要）— 中小卖家需提前备齐 CPC / 标签资料。
2. **TikTok Shop 东南亚站点招商加速**（来源：TikTok Shop 官方招商页）— 新入驻费率活动延续至 Q3，适合有短视频能力的卖家试水。
3. **独立站 SaaS 侧推出 AI 建站与多语言包捆绑**（来源：Shopify 产品更新日志）— 降低建站门槛，但 SEO 内容仍需自运营。

### 对中小卖家影响
- **合规成本上升**：资料不全易导致 listing 下架，建议建立「品类合规清单」。
- **渠道多元化更紧迫**：单一依赖亚马逊的风险增加，TikTok / 独立站可作为增量渠道。
- **工具成本下降、运营能力要求上升**：建站更容易，但转化取决于内容与投放能力。

### 下周关注
1. 主要物流线路旺季附加费是否上调（关注各物流商官网价目表）。
2. 美国/欧盟是否有新的进口申报字段变更（关注海关与平台卖家公告）。

---
需要我改成「仅亚马逊卖家」或「附竞品对比表」版本吗？`,
    followups: [],
    realGuide: {
      tools: ['Perplexity', '秘塔 AI 搜索', 'ChatGPT'],
      steps: [
        '用 Perplexity / 秘塔执行**带引用**的检索，不要只靠模型记忆',
        '将检索结果粘贴到 ChatGPT，要求按本案例格式压缩为快报',
        '每条要闻核对来源链接，删除无法核实的信息',
        '定时任务可用 OpenClaw Cron 做每日简报（见实操案例）'
      ],
      link: { label: 'OpenClaw 定时研报实操', href: '#hands-on' }
    }
  },
  {
    id: 'feynman-transformer',
    emoji: '🎓',
    title: '费曼讲 Transformer',
    scene: '学习辅导',
    task: '学习辅导',
    role: '耐心且善于类比的中文老师',
    context: '学习主题：Transformer 自注意力机制。我是产品经理，无深度学习背景，希望 10 分钟搞懂「它解决了什么问题」和「和 RNN 差在哪」。',
    output: '通俗类比 + 3 个常见误解 + 2 道选择题（附解析）',
    tone: '通俗易懂',
    response: `## 用费曼学习法理解 Transformer

### 一句话
Transformer 让模型在读一句话时，**能同时「看见」所有词，并自己决定先关注谁**，从而更好地理解长句与远距离关系。

### 生活类比
想象你在开会听 20 人发言：
- **RNN** 像「逐句听笔记」——听后面的容易忘了前面谁说了什么。
- **Transformer（Self-Attention）** 像「全景白板」——所有发言同时贴在墙上，你可以一眼看到「张三说的预算」和「最后李四的总结」之间的关联。

### 它解决了什么问题？
1. **长距离依赖**：例如「因为下雨，所以我取消了原定在上海的户外发布」——「下雨」和「取消」隔很远，注意力机制能直接建立联系。
2. **并行计算**：训练时可同时处理整句，比 RNN 逐步传递更高效，利于做大模型。

### 常见误解
| 误解 | 正解 |
|------|------|
| Transformer 只能做翻译 | 它是通用架构，GPT、BERT、多模态模型都基于它 |
| 注意力 = 人类注意力 | 这里是数学权重，表示「当前词对其他词的关注程度」 |
| 层数越多一定越好 | 还受数据、训练、任务匹配影响，不是无脑堆层 |

### 检验题
**Q1**：Self-Attention 相比 RNN 的主要优势是？
A. 只能处理英文  B. 更好处理长距离依赖且易并行  C. 不需要训练  D. 保证不幻觉
**答案：B** — RNN 逐步传递易遗忘远端信息；注意力可同时建模全局关系。

**Q2**：「幻觉」问题靠 Transformer 架构本身能完全消除吗？
A. 能  B. 不能，还需检索、工具调用与人类核实
**答案：B** — 架构提升理解，不保证事实正确。

---
想继续深入「Q/K/V 是什么」或「和 GPT 的关系」可以追问。`,
    followups: [
      { user: '用一张图解释 Q/K/V', ai: `可以把 Q/K/V 想成**图书馆找书**：\n\n- **Query（查询）**：你要找什么主题？\n- **Key（索引标签）**：每本书封面上的标签\n- **Value（内容）**：书里真正要读的内容\n\n模型对每个词算一遍「我的 Q 和所有词的 K 有多匹配」，匹配高的词，就多读一点它的 V。\n\n所以 Self-Attention 不是魔法，而是**加权汇总上下文信息**。\n\n（真实环境可让 ChatGPT 画 mermaid 流程图辅助理解。）` }
    ],
    realGuide: {
      tools: ['ChatGPT', 'Claude', 'Perplexity'],
      steps: [
        '把「我是谁、已懂什么、想搞懂什么」写清楚（本案例已示范）',
        '要求 AI 用类比 + 检验题，学完立刻做题自测',
        '不懂的选项回到对话追问「为什么不是 A」',
        '配合本站「AI 原理」模块卡片加深记忆'
      ],
      link: { label: 'AI 原理模块', href: '#fundamentals' }
    }
  }
];

const PROMPT_TASKS = {
  '内容写作': '请根据以下要求撰写内容。',
  '问题分析': '请对以下问题进行深入分析。',
  '代码开发': '请根据以下需求编写代码。',
  '学习辅导': '请用教学的方式帮我理解以下主题。',
  '数据分析': '请对以下数据或问题进行数据分析。',
  '创意策划': '请为以下场景提供创意方案。',
  '翻译润色': '请对以下内容进行翻译或润色。',
  '会议纪要': '请将以下内容整理为结构化会议纪要。',
  '竞品调研': '请对以下行业/产品进行竞品和市场分析。',
  '简历优化': '请根据以下信息优化简历和求职材料。'
};

const PROMPT_TOOLS = {
  '内容写作': ['ChatGPT', 'Claude', '通义千问'],
  '问题分析': ['ChatGPT', 'Claude', 'DeepSeek'],
  '代码开发': ['Cursor', 'Claude', 'DeepSeek'],
  '学习辅导': ['ChatGPT', 'Claude', 'Perplexity'],
  '数据分析': ['ChatGPT', 'Claude', '通义千问'],
  '创意策划': ['Claude', 'ChatGPT', 'Gemini'],
  '翻译润色': ['DeepL', 'Claude', 'ChatGPT'],
  '会议纪要': ['Kimi', 'Claude', '通义千问'],
  '竞品调研': ['Perplexity', 'ChatGPT', 'NotebookLM'],
  '简历优化': ['ChatGPT', 'Claude', '文心一言']
};

const PROMPT_TASK_PRESETS = {
  '内容写作': {
    role: '资深内容策划',
    context: '写作主题：\n目标受众：\n核心信息点（3–5 条）：\n发布渠道与字数限制：',
    output: '一篇结构完整的内容初稿：含标题、导语、2–3 个小标题正文、结尾总结或行动引导',
    tone: '专业严谨'
  },
  '问题分析': {
    role: '资深战略顾问',
    context: '待分析问题：\n已知背景与约束：\n相关数据或现象：\n你的立场/决策目标：',
    output: '结构化分析报告：问题定义 → 根因假设 → 可选方案对比 → 推荐结论与下一步',
    tone: '专业严谨'
  },
  '代码开发': {
    role: '全栈工程师',
    context: '技术栈：\n功能需求描述：\n输入/输出示例：\n现有代码或报错信息（如有）：',
    output: '可运行的代码实现 + 中文注释 + 简要使用说明 + 建议的测试用例',
    tone: '简洁直接'
  },
  '学习辅导': {
    role: '费曼学习法导师',
    context: '学习主题：\n我的现有水平：\n想搞懂的具体困惑：\n可用学习时间：',
    output: '分层讲解（通俗类比 + 关键概念 + 常见误解）+ 2 道自检题（附答案解析）',
    tone: '通俗易懂'
  },
  '数据分析': {
    role: '数据分析师',
    context: '数据说明（来源、字段、时间范围）：\n分析目标：\n关注的业务问题：\n已知异常或假设：',
    output: '数据概览 → 关键发现（3 条）→ 图表建议 → 可执行业务建议；标注「确定/推测/待核实」',
    tone: '专业严谨'
  },
  '创意策划': {
    role: '创意总监',
    context: '品牌/产品：\n目标受众：\n传播场景与预算约束：\n希望传达的核心信息：',
    output: '2–3 套创意方案：每套含核心概念、执行路径、预期效果与风险',
    tone: '创意发散'
  },
  '翻译润色': {
    role: '双语编辑',
    context: '原文语言与内容：\n目标语言与受众：\n文体要求（正式/口语/营销）：\n需保留的术语或品牌名：',
    output: '润色/翻译后的终稿 + 2 处关键措辞调整说明（为何这样译/改）',
    tone: '专业严谨'
  },
  '会议纪要': {
    role: '高级行政助理',
    context: '会议主题：\n参会人与角色：\n讨论要点（可粘贴速记/转写）：\n口头约定的待办（如有）：',
    output: '结构化会议纪要：主题与时间 → 关键决议 → 待办表（负责人+截止日期）→ 未决问题',
    tone: '简洁直接'
  },
  '竞品调研': {
    role: '市场研究分析师',
    context: '行业/赛道：\n我方产品定位：\n需对比的竞品（3–5 个）：\n调研关注点（功能/定价/渠道等）：',
    output: '竞品对比表 + SWOT 摘要 + 3 条差异化机会；关键结论标注信息来源',
    tone: '专业严谨'
  },
  '简历优化': {
    role: '资深招聘顾问',
    context: '目标岗位 JD 摘要：\n当前简历要点（经历/技能/项目）：\n工作年限与行业：\n需突出的优势与需弱化的部分：',
    output: '优化后的工作经历描述（匹配 JD 关键词）+ 200 字求职信 + 3 条面试准备建议',
    tone: '专业严谨'
  }
};

const QUIZ_DATA = [
  { q: 'AI、ML、DL 三者的关系是？', options: ['完全独立无关', 'AI ⊃ ML ⊃ DL', 'AI 是 DL 的子集', 'DL ⊂ ML ⊂ AI'], answer: 1, explain: '人工智能 ⊃ 机器学习 ⊃ 深度学习：从左到右（AI → ML → DL）范围依次缩小。' },
  { q: 'LLM（Large Language Model）的核心训练目标是？', options: ['识别图像', '预测下一个 Token', '翻译所有语言', '存储所有网页'], answer: 1, explain: 'LLM 通过预测下一个 Token 的简单目标，在海量文本上学会了语言理解和生成。' },
  { q: 'Hallucination（幻觉）是指？', options: ['AI 拒绝回答', '运行变慢', '自信地生成错误内容', '只能处理虚构内容'], answer: 2, explain: '幻觉是 LLM 已知局限——流畅但事实错误，关键信息务必核实。' },
  { q: 'Transformer 的核心创新是？', options: ['CNN 卷积', 'Self-Attention 自注意力', 'RNN 循环', '决策树'], answer: 1, explain: '自注意力机制让模型同时关注输入序列所有位置，是 GPT 等 LLM 的基石。' },
  { q: 'RAG（Retrieval-Augmented Generation）的作用是？', options: ['加快训练', '减少参数量', '结合知识库减少幻觉', '生成图像'], answer: 2, explain: 'RAG 先检索外部资料再生成回答，大幅减少凭空捏造。' },
  { q: '最有效的提示词（Prompt）做法是？', options: ['越短越好', '只写「帮我写一篇文章」', '角色+任务+格式+约束的结构化描述', '多用表情符号'], answer: 2, explain: '结构化提示词能显著提升输出质量。' },
  { q: '以下哪个是 GenAI（生成式 AI）应用？', options: ['垃圾邮件过滤', '人脸识别', 'Midjourney 图像生成', '欺诈检测'], answer: 2, explain: 'GenAI 创造新内容；垃圾邮件过滤和欺诈检测是判别式 AI。' },
  { q: 'Token 是什么？', options: ['用户名', '文本处理的基本单位', '加密货币', '版本号'], answer: 1, explain: 'Token 是模型处理文本的最小单位，上下文窗口以 Token 数计量。' },
  { q: 'AI Agent 与普通聊天机器人的区别？', options: ['更幽默', '能自主规划并调用工具执行任务', '只能回答是/否', '不需网络'], answer: 1, explain: 'Agent 能分解任务、调用工具、执行多步骤操作。' },
  { q: 'RLHF 的全称和作用是？', options: ['快速训练方法', 'Reinforcement Learning from Human Feedback，用人类偏好优化输出', '图像生成技术', '数据压缩算法'], answer: 1, explain: 'RLHF 让 ChatGPT 比原始 GPT-3 更友好、更安全。' },
  { q: 'CoT（Chain of Thought）如何提升 AI 表现？', options: ['加快推理速度', '让 AI 一步步展示推理过程', '减少 Token 消耗', '增加模型参数'], answer: 1, explain: '链式思考让 AI 展示推理步骤，显著提升复杂逻辑任务准确率。' },
  { q: 'LoRA（Low-Rank Adaptation）主要用于？', options: ['图像生成', '高效微调大模型', '数据标注', '模型部署'], answer: 1, explain: 'LoRA 只训练少量附加参数，高效适配特定任务，成本极低。' },
  { q: 'NLP（Natural Language Processing）包括？', options: ['只有机器翻译', '翻译、摘要、问答、情感分析等', '只有语音识别', '只有文本生成'], answer: 1, explain: 'NLP 涵盖所有让计算机处理人类语言的技术。' },
  { q: 'GPU 在 AI 中的主要作用是？', options: ['存储数据', '并行计算加速训练和推理', '网络通信', '显示图像'], answer: 1, explain: 'GPU 的并行计算能力使其成为 AI 训练和推理的核心硬件。' },
  { q: '新手开始使用 AI 的最佳方式是？', options: ['先学透数学再用', '带着真实问题直接试用', '只看不练', '等 AI 完全成熟'], answer: 1, explain: '学以致用最高效——带着真实任务试用，在实践中理解原理。' },
  { q: 'AGI 与当前已落地的 ANI 的主要区别是？', options: ['AGI 只能处理语言', 'ANI 能处理任意智力任务', 'AGI 尚未实现，ANI 只做特定任务', '两者完全相同'], answer: 2, explain: '今天所有商用 AI 都是 ANI（专用 AI）；AGI（通用人工智能）仍是长期研究目标。' },
  { q: '结构化提示词通常应包含哪些要素？', options: ['只有一句「帮我写」', '角色 + 任务 + 背景 + 格式 + 约束', '越短越好', '只用表情符号'], answer: 1, explain: '本站 Day 4 提示词工程：五要素齐全能显著提升输出质量与可复用性。' },
  { q: 'Temperature（温度）参数的作用是？', options: ['加快推理速度', '控制输出随机性：低温度更稳定，高温度更创意', '增加上下文长度', '减少 Token 消耗'], answer: 1, explain: '写代码宜低温度（如 0.1），创意写作宜高温度（如 0.8）。' },
  { q: '上下文窗口（Context Window）指的是？', options: ['浏览器窗口大小', '模型一次能处理的最大 Token 数', '训练数据集大小', 'API 调用次数限制'], answer: 1, explain: '超出上下文窗口的内容会被截断或遗忘，长文档任务需选大窗口模型（如 Kimi、Claude）。' },
  { q: '监督学习与无监督学习的区别是？', options: ['监督学习用带标签数据，无监督学习从无标签数据发现模式', '无监督学习一定更准确', '监督学习不需要数据', '两者都不能用于分类'], answer: 0, explain: 'Day 2 核心：垃圾邮件过滤是监督学习；客户分群常是无监督学习。' },
  { q: '扩散模型（Diffusion Model）主要用于？', options: ['文本分类', '当前主流的图像/视频生成', '数据库查询', '网络路由'], answer: 1, explain: 'Stable Diffusion、Midjourney、DALL·E 3 等文生图工具基于扩散模型。' },
  { q: 'Embedding（嵌入向量）的核心用途是？', options: ['加密数据', '将文本转为向量以支持语义相似度搜索', '压缩视频', '训练 GPU 驱动'], answer: 1, explain: '语义相近的内容向量距离更近，是 RAG 和向量数据库的基础。' },
  { q: 'AI Skill（技能）是什么？', options: ['游戏角色技能', '封装领域知识与工具规则的模块化能力包，供 Agent 加载', '一种编程语言', 'GPU 型号'], answer: 1, explain: '如 Cursor Skill 教 AI 处理 xlsx；Agent 可动态加载 Skill 完成特定任务。' },
  { q: 'MCP（Model Context Protocol）的作用是？', options: ['加快模型训练', '标准化 AI 与外部工具、数据源的连接方式', '生成图像', '替代提示词'], answer: 1, explain: 'MCP 让 AI 通过统一协议连接 GitHub、数据库、文件系统等外部能力。' },
  { q: '用 Cursor Codex 写计算器的正确流程是？', options: ['先背完整 HTML 语法再手写', '描述需求 → 生成代码 → 运行测试 → 反馈修复', '只复制网上代码不运行', '等 AI 完全成熟再用'], answer: 1, explain: '本站实操案例：「说需求 → 得代码 → 浏览器打开 → 迭代修复」是 AI 编程入门路径。' },
  { q: 'Midjourney 提示词末尾的 --ar 16:9 表示？', options: ['图片版本号', '画面宽高比（横版 16:9）', '生成 16 张图', '仅限 9 种颜色'], answer: 1, explain: '常用参数：--ar 控制比例，--v 控制版本；英文提示词效果通常更好。' },
  { q: 'ElevenLabs / Fish Audio 声音克隆的关键前提是？', options: ['使用他人公开演讲即可商用', '上传清晰干声录音并仅克隆有权使用的声音', '不需要任何录音', '必须购买专业麦克风才能开始'], answer: 1, explain: '安静环境、无背景音乐、1–3 分钟干声；勿未经授权克隆他人声音。' },
  { q: 'OpenClaw 定时股票资讯任务体现了 AI 哪类能力？', options: ['只能聊天问答', 'Agent 自动化：定时触发、检索整理、推送到频道', '替代人类做投资决策', '无需配置即可运行'], answer: 1, explain: 'OpenClaw Cron 让 Agent 按日程执行调研任务并推送结果，输出仅供参考需核实。' },
  { q: '本站四阶段学习法的正确顺序是？', options: ['实战 → 认知 → 检验 → 工具', '认知 → 工具 → 实战 → 检验', '工具 → 检验 → 认知 → 实战', '只学工具即可'], answer: 1, explain: '先建立认知框架，再掌握工具与提示词，然后实战演练，最后测验复盘。' },
  { q: '选择 AI 工具时最合理的原则是？', options: ['只用最贵的一款', '根据具体场景选最合适的专用工具，而非追求「最好」', '一次安装全部 43 款', '永远只用免费版'], answer: 1, explain: 'Day 5 工具选型：对话、编程、图像、Agent、搜索各有专精；国内用户还需考虑访问与中文能力。' },
  { q: '强化学习（Reinforcement Learning）的典型场景是？', options: ['邮件分类', 'AlphaGo 下棋', '图像压缩', '数据库索引'], answer: 1, explain: '强化学习通过奖励信号学习策略，AlphaGo、机器人控制是经典应用。', topic: 'fundamentals' },
  { q: '过拟合（Overfitting）是指？', options: ['训练数据太少', '模型在训练集表现好、新数据表现差', '训练速度太慢', 'GPU 内存不足'], answer: 1, explain: '过拟合像「背答案」——记住训练样本却泛化不了，需更多数据或正则化。', topic: 'fundamentals' },
  { q: '零样本（Zero-shot）提示是指？', options: ['不给任何示例，直接描述任务', '提供 100 个示例', '只用图片', '必须微调模型'], answer: 0, explain: '零样本不附示例，靠模型预训练知识完成；少样本（Few-shot）才给几个例子。', topic: 'prompt-lab' },
  { q: '少样本（Few-shot）提示的优势是？', options: ['一定更便宜', '用少量示例快速对齐输出格式与风格', '只能用于代码', '不需要提示词'], answer: 1, explain: '在提示词里放 1–3 个输入输出范例，能显著提升格式一致性。', topic: 'prompt-lab' },
  { q: '微调（Fine-tuning）与提示工程的主要区别是？', options: ['完全相同', '微调改模型权重，提示工程不改权重只改输入', '提示工程更贵', '微调只能用于图像'], answer: 1, explain: '大多数用户用提示工程即可；微调适合企业有大量标注数据、要深度定制时。', topic: 'fundamentals' },
  { q: '判别式 AI 与生成式 AI 的区别是？', options: ['判别式创造新内容', '判别式做分类/预测，生成式创造新内容', '生成式只能分类', '没有区别'], answer: 1, explain: '垃圾邮件检测是判别式；ChatGPT 写文、Midjourney 出图是生成式。', topic: 'fundamentals' },
  { q: '预训练（Pre-training）阶段模型主要学习什么？', options: ['只有用户聊天记录', '海量通用语料中的语言规律与世界知识', '仅图像像素', '人工编写的全部规则'], answer: 1, explain: '大模型先在海量文本上预训练，再通过微调/RLHF 对齐产品行为。', topic: 'fundamentals' },
  { q: '反向传播（Backpropagation）的作用是？', options: ['生成图像', '根据误差更新神经网络权重', '连接互联网', '压缩模型'], answer: 1, explain: '训练神经网络的核心算法，让模型从错误中学习调整参数。', topic: 'fundamentals' },
  { q: 'CNN（卷积神经网络）特别擅长处理？', options: ['只有文本', '图像与空间结构数据', '只有音频', '表格数据'], answer: 1, explain: 'CNN 的卷积操作适合图像识别；Transformer 在 NLP 和多模态中更主流。', topic: 'fundamentals' },
  { q: '无监督学习的典型应用是？', options: ['邮件标注分类', '客户分群聚类', '房价预测（有标签）', '手写数字识别（有标签）'], answer: 1, explain: '无监督从无标签数据发现结构，聚类、降维是常见任务。', topic: 'fundamentals' },
  { q: 'ChatGPT 相比普通网页搜索更适合？', options: ['查精确股价代码', '多轮对话、改写、头脑风暴与草稿生成', '替代所有搜索引擎', '只做数学证明'], answer: 1, explain: '对话 AI 强项是交互式创作与分析；实时精确数据仍需搜索工具核实。', topic: 'apps' },
  { q: 'Claude 的核心优势之一是？', options: ['只能生成图像', '长上下文与细腻文风，适合长文档与写作', '仅限编程', '无免费版'], answer: 1, explain: 'Claude 以 200K 级上下文和安全对齐著称，Artifacts 可预览代码与文档。', topic: 'apps' },
  { q: 'Gemini 的独特优势是？', options: ['与 Google 搜索、Gmail、Docs 等生态深度整合', '只能本地运行', '不支持多模态', '无中文能力'], answer: 0, explain: 'Google 生态用户可无缝使用 Gemini，并具备实时搜索与多模态能力。', topic: 'apps' },
  { q: 'Kimi 最适合的场景是？', options: ['短短信回复', '超长文档（如整本书、大型 PDF）分析', '3D 建模', '硬件驱动开发'], answer: 1, explain: 'Kimi 以超长上下文闻名，适合文献阅读与大型资料消化。', topic: 'apps' },
  { q: 'DeepSeek 对开发者特别有吸引力是因为？', options: ['只能画画', '开源模型 + 极低 API 价格 + 强推理能力', '必须买 GPU', '不支持代码'], answer: 1, explain: 'DeepSeek-R1 推理表现突出，API 成本约为 GPT-4 的极小比例。', topic: 'apps' },
  { q: '通义千问对国内用户的主要便利是？', options: ['必须翻墙', '中文优化好、无需翻墙、通义生态整合', '只能英文', '无 API'], answer: 1, explain: '阿里通义系列中文能力强，且与通义万相、灵码等产品联动。', topic: 'apps' },
  { q: 'GitHub Copilot 的工作方式是？', options: ['替代 IDE', '在 VS Code 等 IDE 内实时补全与对话辅助编程', '只能写 Python', '自动提交 Git'], answer: 1, explain: 'Copilot 深度集成编辑器，行级/块级补全是日常最高频用法。', topic: 'apps' },
  { q: 'Cursor 相比普通 VS Code 的核心差异是？', options: ['只能写 HTML', 'AI 原生：全项目索引 + Agent 多文件自主编程', '没有终端', '不支持插件'], answer: 1, explain: 'Cursor 理解整个代码库上下文，Agent 模式可跨文件编辑与运行命令。', topic: 'apps' },
  { q: 'Windsurf 的 Cascade 模式强调？', options: ['只能补全一行', '智能体自主理解代码库并执行多步骤任务', '仅限 Java', '必须付费才能用'], answer: 1, explain: 'Cascade 是 Codeium 的 Agent 能力，与 Cursor Agent 同属 AI IDE 竞争阵营。', topic: 'apps' },
  { q: 'Claude Code 的主要使用形态是？', options: ['浏览器插件', '终端 Agent，深度操作代码库与 Git', '手机 App', '只能聊天'], answer: 1, explain: 'Claude Code 面向命令行工作流，适合复杂重构与长时程编码任务。', topic: 'apps' },
  { q: 'OpenAI Codex CLI 适合哪类用户？', options: ['只做 PPT', 'OpenAI 订阅用户，在终端或云沙箱运行编程 Agent', '只能小学生', '无需网络'], answer: 1, explain: 'Codex CLI 是 OpenAI 官方命令行编程 Agent，含于 ChatGPT Plus/Pro。', topic: 'apps' },
  { q: 'Aider 的核心特点是？', options: ['闭源且贵', '开源、自带 API Key、深度 Git 集成自动 commit', '只能写 Java', '无多文件编辑'], answer: 1, explain: 'Aider 是终端结对编程工具，每次修改自动 Git 记录，成本自控。', topic: 'apps' },
  { q: 'Bolt.new 最适合？', options: ['内核开发', '非程序员用自然语言快速生成可运行 Web 应用原型', '训练大模型', '数据库运维'], answer: 1, explain: 'Bolt 在浏览器内生成全栈应用，适合 MVP 验证与快速建站。', topic: 'apps' },
  { q: 'Midjourney 的主要使用入口曾经是？', options: ['只有命令行', 'Discord 机器人（现也支持 Web）', '只能 Excel 插件', '手机短信'], answer: 1, explain: 'Midjourney 以 Discord 交互起家，现 Web 版也可使用；英文提示词效果通常更好。', topic: 'hands-on' },
  { q: 'Stable Diffusion 相比闭源模型的优势是？', options: ['只能云端', '开源可本地部署，社区模型与 ControlNet 生态丰富', '画质一定最差', '不支持 LoRA'], answer: 1, explain: 'SD 可本地运行，LoRA/ControlNet 让用户完全掌控生成流程。', topic: 'apps' },
  { q: 'Flux 模型在图像生成上的亮点是？', options: ['只能黑白图', '高画质 + 精准文字渲染 + 可本地/API 调用', '仅限视频', '无开源版本'], answer: 1, explain: 'Black Forest Labs 的 Flux 在文字渲染和人体结构上表现优异。', topic: 'apps' },
  { q: 'Suno 主要用来？', options: ['写代码', '文字描述生成完整歌曲（含人声与伴奏）', '做 PPT', '训练 LLM'], answer: 1, explain: 'Suno 是 AI 音乐生成工具，输入风格描述即可得完整曲目。', topic: 'apps' },
  { q: 'ElevenLabs 的核心能力是？', options: ['图像生成', '高质量 TTS 与即时声音克隆', '视频剪辑', '搜索引擎'], answer: 1, explain: '1–3 分钟干声即可克隆音色，支持多语言配音与播客制作。', topic: 'hands-on' },
  { q: 'Perplexity 与 Google 传统搜索的主要区别是？', options: ['只给链接列表', '直接给带引用来源的答案', '不能联网', '只能查图片'], answer: 1, explain: 'Perplexity 是 AI 搜索引擎，答案附引用，适合快速调研但仍需核实。', topic: 'apps' },
  { q: 'NotebookLM 的「Audio Overview」功能是？', options: ['生成代码', '把上传文档转成 AI 双人播客式音频', '自动发邮件', '训练模型'], answer: 1, explain: 'NotebookLM 可将 PDF/笔记变成可听的播客摘要，适合文献学习。', topic: 'apps' },
  { q: '秘塔 AI 搜索对中文用户的优势是？', options: ['必须翻墙', '无广告、带引用、支持学术/播客等多种中文搜索模式', '只能英文', '无免费版'], answer: 1, explain: '秘塔是国产 AI 搜索，中文调研体验好，国内可直接访问。', topic: 'apps' },
  { q: 'Notion AI 的价值在于？', options: ['替代 Photoshop', '在笔记与数据库工作流内直接写作、总结、翻译', '只能聊天', '无法协作'], answer: 1, explain: 'Notion AI 与笔记深度结合，适合团队文档与知识管理场景。', topic: 'apps' },
  { q: 'Gamma 最适合快速完成？', options: ['内核编译', '从大纲生成精美演示文稿/文档', '3D 动画', '硬件设计'], answer: 1, explain: '输入主题或大纲即可生成 PPT 风格幻灯片，赶汇报场景效率高。', topic: 'apps' },
  { q: 'OpenClaw 的定位是？', options: ['图像编辑器', '开源 AI Agent 网关：Cron、Webhook、多通道推送', '音乐播放器', '浏览器'], answer: 1, explain: 'OpenClaw 让 Agent 定时执行任务并推送到 Telegram/Slack/飞书等。', topic: 'agent' },
  { q: 'Dify 主要用于？', options: ['剪辑视频', '可视化搭建 LLM 应用、RAG 知识库与工作流', '挖矿', '硬件驱动'], answer: 1, explain: 'Dify 是开源 Agent/应用开发平台，支持自托管与企业知识库 Bot。', topic: 'agent' },
  { q: '扣子（Coze）的核心场景是？', options: ['训练 GPU 集群', '零代码搭建 Bot 并发布到飞书/微信等平台', '只做 3D', '替代操作系统'], answer: 1, explain: '字节扣子让非开发者也能拖拽搭建 Agent Bot，国内上手快。', topic: 'agent' },
  { q: 'n8n 的价值在于？', options: ['只能画图', '连接数百项服务，编排自动化工作流（含 AI 节点）', '替代 Word', '只能发邮件'], answer: 1, explain: 'n8n 是开源自动化平台，可把 LLM 嵌入业务流水线。', topic: 'agent' },
  { q: 'Manus 类通用 Agent 适合？', options: ['只回答天气', '端到端多步骤任务：调研、写报告、浏览网页等', '替代律师出庭', '无需人工复核'], answer: 1, explain: 'Manus 强调自主规划执行长任务，结果仍需人工审核。', topic: 'agent' },
  { q: 'MCP 协议解决的核心问题是？', options: ['加快 GPU', '统一 AI 与外部工具/数据源的连接方式', '生成音乐', '替代 HTTP'], answer: 1, explain: 'Model Context Protocol 让 Claude、Cursor 等以标准方式接入 GitHub、数据库等。', topic: 'knowledge' },
  { q: 'Function Calling（函数调用）让 LLM 能？', options: ['只能聊天', '根据意图自动选择并调用预定义 API/函数', '免费无限使用', '无需网络'], answer: 1, explain: '函数调用是 Agent 调用天气、计算器、数据库的基础能力。', topic: 'knowledge' },
  { q: '向量数据库在 RAG 中的作用是？', options: ['训练模型', '存储 Embedding 并做语义相似度检索', '发送邮件', '渲染网页'], answer: 1, explain: '用户提问时先检索最相关文档片段，再交给 LLM 生成答案。', topic: 'fundamentals' },
  { q: '使用 AI 处理公司机密文件时，最稳妥的做法是？', options: ['随便上传公有云', '确认工具隐私政策，敏感数据用企业版/本地部署/脱敏', '发给任何人', '截图发朋友圈'], answer: 1, explain: '机密数据需企业协议或私有化；本站内训也强调信息安全合规。', topic: 'ai-overview' },
  { q: '发现 AI 给出的事实性答案，正确做法是？', options: ['直接引用发表', '交叉核实来源，尤其是数字、日期、人名', '永远不信', '只问一次'], answer: 1, explain: '幻觉是 LLM 已知局限；Perplexity 等带引用也需二次核实关键事实。', topic: 'ai-overview' },
  { q: '提示词迭代优化的正确流程是？', options: ['一次写完永不改', '初稿 → 看输出 → 补充约束/示例 → 再试', '越短一定越好', '删除所有格式要求'], answer: 1, explain: '提示词工程是实验科学；本站提示词实验室即用于对比迭代。', topic: 'prompt-lab' },
  { q: '在提示词中指定「输出格式」的好处是？', options: ['浪费 Token', '让结果可直接复制进表格/代码/报告，减少二次整理', '一定更慢', '模型会拒绝'], answer: 1, explain: '如要求 JSON、Markdown 表格、分点列表，可显著提升可用性。', topic: 'prompt-lab' },
  { q: '用 ChatGPT 分析 Excel 数据的推荐方式是？', options: ['截图模糊表格', '上传文件或粘贴结构化数据，并说明要计算的指标', '只问「分析一下」', '不能分析数据'], answer: 1, explain: '本站实操：提供清晰数据与问题，必要时用代码解释器生成图表。', topic: 'hands-on' },
  { q: '用 Perplexity 做竞品调研时应注意？', options: ['结论直接当投资依据', '核对引用来源与日期，交叉验证关键数据', '不用写关注点', '只问一句「分析竞品」'], answer: 1, explain: '本站实操强调：Perplexity 强项是可核查来源，但价格等仍需回官网核实。', topic: 'hands-on' },
  { q: '用 NotebookLM 读论文的推荐流程是？', options: ['上传后不提问', '上传 PDF → 提问细节 → 用摘要/播客功能巩固', '只能一篇', '替代导师审稿'], answer: 1, explain: '上传论文后可对话提问，Audio Overview 适合通勤时复习要点。', topic: 'hands-on' },
  { q: 'Midjourney 生成人物肖像时应注意？', options: ['随意用明星名字', '避免未经授权的真实名人姓名，注意平台内容政策', '一定违法', '只能画风景'], answer: 1, explain: '尊重肖像权与平台规则；商用前确认订阅许可条款。', topic: 'hands-on' },
  { q: '声音克隆服务的合规前提是？', options: ['下载网红音频即可', '仅克隆本人或已获书面授权的声音', '越吵越好', '不需要录音'], answer: 1, explain: 'Fish Audio/ElevenLabs 均需有权使用的干声样本。', topic: 'hands-on' },
  { q: 'OpenClaw cron 任务中 --tz "Asia/Shanghai" 的作用是？', options: ['设置语言', '指定定时任务按上海时区触发', '加密消息', '选择 AI 模型'], answer: 1, explain: 'Cron 需明确时区，否则工作日 8:30 可能对不上本地时间。', topic: 'hands-on' },
  { q: 'Windsurf 做深色模式批量改动时，推荐先让 Agent？', options: ['直接改完全部不确认', '列出将修改的文件清单，确认后再执行', '删除项目', '只改一个变量'], answer: 1, explain: '本站实操：Cascade 先给计划再执行，比「全改」更可控。', topic: 'hands-on' },
  { q: '用 Gamma 快速做路演 PPT 时，输入最好是？', options: ['空白', '清晰大纲：每页标题 + 3 个要点', '随机 emoji', '500 页全文'], answer: 1, explain: '结构化大纲让 Gamma 生成逻辑清晰的幻灯片，再微调视觉。', topic: 'hands-on' },
  { q: 'Stable Diffusion 中 ControlNet 的作用是？', options: ['加速训练', '用边缘/姿态等条件精确控制构图', '只能调色', '替代 LoRA'], answer: 1, explain: 'ControlNet 让用户用草图、姿态图等约束生成结果，是 SD 生态核心扩展。', topic: 'knowledge' },
  { q: 'LoRA 在图像生成中常用于？', options: ['压缩视频', '轻量微调特定风格/角色/产品外观', '训练 LLM', '发邮件'], answer: 1, explain: 'LoRA 是小体积适配器，可叠加基础模型实现品牌一致视觉。', topic: 'knowledge' },
  { q: 'Sora 类视频模型目前的主要局限是？', options: ['完全取代实拍', '物理细节可能失真、需人工筛选与合规审核', '只能 1 秒', '免费无限'], answer: 1, explain: 'AI 视频进步快但仍需审核物理合理性、版权与平台规则。', topic: 'apps' },
  { q: 'Microsoft Copilot 在 Office 中最适合？', options: ['重装系统', '在 Word/Excel/PPT 内生成、总结、分析文档数据', '替代 Outlook 服务器', '只能画图'], answer: 1, explain: 'M365 订阅用户可在 Office 侧边栏唤起 Copilot 处理日常文档。', topic: 'apps' },
  { q: 'Zcode 的主要定位是？', options: ['音乐播放器', '智谱 GLM 驱动的 Agentic 开发环境，支持长时程任务', '只能聊天', '英文 only'], answer: 1, explain: 'Zcode 面向国内开发者，支持桌面/Remote 与飞书微信 Bot。', topic: 'apps' },
  { q: 'Gemini CLI 对开发者吸引点是？', options: ['必须买 GPU', '终端使用 + Google 账号 + 较高免费配额', '只能写 C++', '无文件操作'], answer: 1, explain: 'Gemini CLI 开源，免费层额度在同类 CLI 工具中较有竞争力。', topic: 'apps' },
  { q: 'Cline 与 Cursor 的关系是？', options: ['完全相同', 'Cline 是 VS Code 扩展，可接多种 API，不必换编辑器', 'Cline 只能画图', 'Cline 是搜索引擎'], answer: 1, explain: 'Cline 在现有 VS Code 上加 Agent 能力，适合自选模型用户。', topic: 'apps' },
  { q: 'Continue.dev 支持哪些 IDE？', options: ['只有 Vim', 'VS Code 与 JetBrains 全家桶', '只能浏览器', '只有 Xcode'], answer: 1, explain: 'Continue 是开源助手，团队可共享 config.yaml 统一模型配置。', topic: 'apps' },
  { q: 'Amazon Q Developer 特别适合？', options: ['只做插画', 'AWS 云开发、SDK 文档整合与企业合规场景', '只能手机', '替代硬件'], answer: 1, explain: 'Q Developer 深度整合 AWS 知识，提供 IDE 插件与 CLI。', topic: 'apps' },
  { q: 'Grok 的主要差异化是？', options: ['无网络', 'X（Twitter）实时信息流与 DeepSearch 等模式', '只能编程', '国内必用'], answer: 1, explain: 'Grok 集成 X 平台，擅长追踪实时社交与新闻动态。', topic: 'apps' },
  { q: '豆包对国内用户的便利包括？', options: ['必须翻墙', '中文对话自然、免费额度、抖音/飞书生态整合', '只能英文', '无多模态'], answer: 1, explain: '豆包是字节旗下助手，国内用户基数大、访问便利。', topic: 'apps' },
  { q: '文心一言整合的百度资源不包括？', options: ['百度搜索与文库', '完全离线的全球私密数据库', '中文创作优化', '多模态能力'], answer: 1, explain: '文心一言优势在中文语料与百度搜索等国内资源整合。', topic: 'apps' },
  { q: '可灵 AI 主要生成？', options: ['只有音乐', '文生/图生视频，国内访问便利', '只有代码', '3D 打印文件'], answer: 1, explain: '快手可灵在国内视频生成领域领先，有每日免费额度。', topic: 'apps' },
  { q: 'Runway Gen-3 主要面向？', options: ['表格计算', '专业视频生成与编辑工作流', '邮件客户端', '硬件驱动'], answer: 1, explain: 'Runway 提供 Gen-3 视频生成及剪辑、抠像等专业功能。', topic: 'apps' },
  { q: 'Fish Audio 相比 ElevenLabs 对国内用户？', options: ['必须翻墙且只支持英文', '中文发音自然、访问便利，适合国内配音场景', '不能克隆', '只能 1 秒音频'], answer: 1, explain: 'Fish Audio 是国产语音平台，中文场景可优先尝试。', topic: 'apps' },
  { q: 'AI 变现时「先作品集后报价」的原因是？', options: ['法律规定', '客户需要看到可验证交付样例才愿付费', '没有意义', '只能免费'], answer: 1, explain: '本站变现指南原则：用 1 个示范案例证明能力，再谈价格与套餐。', topic: 'monetize' },
  { q: '接单做企业知识库 Bot 时，合同应明确？', options: ['只口头约定', '数据归属、更新频率、免责声明与维护边界', '无限免费改', '保证 100% 准确'], answer: 1, explain: 'Bot 回答需标注仅供参考；数据与密钥归属客户，维护范围写清。', topic: 'monetize' }
];

const AI_MONETIZE_CATEGORIES = ['全部', '内容创作', '技术服务', '自动化', '知识服务', '教育培训'];

const AI_MONETIZE_META = {
  lead: '学完本站的 AI 工具后，你不必立刻转行成「AI 工程师」。更现实的路径是：用 AI 把现有技能放大 3–10 倍，在内容、设计、自动化、调研、培训等方向接单或做副业。以下 30 个方向都基于本站已介绍的工具，门槛可控、可从小单验证开始。',
  workTypes: [
    { label: '内容创作', desc: '图文、短视频、播客——AI 负责起草与视觉，你负责选题与调性' },
    { label: '技术服务', desc: 'Bot 搭建、脚本开发、落地页交付——按项目收费' },
    { label: '自动化', desc: '工作流集成、定时研报——按月维护或按次实施' },
    { label: '知识服务', desc: '调研简报、提示词包、行业模板——订阅或一次性售卖' },
    { label: '教育培训', desc: '企业内训、社群陪跑——教别人用 AI 提效' }
  ],
  principles: [
    '先做出 1 个可展示的作品集案例，再谈报价',
    '明确「人工复核」边界，不把 AI 输出直接当交付物',
    '从熟人/小单开始验证需求，再扩到平台接单',
    '组合 2–3 款工具形成流水线，比单点使用更值钱'
  ]
};

const AI_MONETIZE_PROJECTS = [
  {
    title: '自媒体内容矩阵代运营',
    emoji: '📱',
    category: '内容创作',
    difficulty: '入门',
    income: '月入 2,000–8,000 元',
    tools: ['ChatGPT', 'Kimi', 'Midjourney', '可灵 AI', 'Suno'],
    desc: '帮本地商家、知识博主或小微品牌维护公众号/小红书/抖音账号：用 AI 批量产出选题、文案、封面图和短视频脚本，你负责发布节奏与数据复盘。',
    deliverables: '每周 3–5 篇图文 + 2 条短视频脚本 + 封面素材包',
    monetize: '按月代运营费（1,500–5,000 元/账号）；或按条计费（图文 80–200 元，视频脚本 150–400 元）',
    channels: '小红书接单、闲鱼、熟人介绍、本地商家地推',
    steps: [
      '选垂直领域（餐饮、教育、美妆）做 1 套示范内容',
      '用 ChatGPT 生成 7 天选题表，Midjourney/可灵出视觉',
      '打包「首月试运营」低价套餐吸引第一个客户',
      '用数据截图（阅读量、涨粉）作为案例持续提价'
    ],
    tip: '签约前约定修改次数与原创比例；敏感行业内容需人工终审。'
  },
  {
    title: '企业知识库客服 Bot 定制',
    emoji: '🤖',
    category: '技术服务',
    difficulty: '进阶',
    income: '单项目 3,000–20,000 元',
    tools: ['Dify', '扣子 Coze', 'OpenClaw', 'NotebookLM'],
    desc: '为中小企业把产品手册、FAQ、内部文档变成可对话的知识库 Bot，部署到官网、飞书或微信，减少重复客服咨询。',
    deliverables: '知识库整理 + Bot 对话流程 + 后台管理说明 + 上线交付',
    monetize: '项目实施费一次性收取；可选年费维护（500–2,000 元/月）',
    channels: '企业服务群、飞书生态、猪八戒、技术社群转介绍',
    steps: [
      '用 NotebookLM 整理客户 PDF/文档，提炼问答对',
      '在 Dify 或扣子搭建 RAG 工作流并测试命中率',
      '录制 3 分钟演示视频作为销售素材',
      '首个客户可半价换案例授权与推荐语'
    ],
    tip: '合同里写清数据归属与更新频率；回答需标注「仅供参考」降低合规风险。'
  },
  {
    title: '电商视觉设计外包',
    emoji: '🎨',
    category: '内容创作',
    difficulty: '入门',
    income: '月入 3,000–15,000 元',
    tools: ['Midjourney', 'Flux', 'DALL·E 3', 'Gamma'],
    desc: '为淘宝、拼多多、独立站卖家制作主图、详情页视觉、活动海报和简单 PPT。AI 出图快，你负责品牌调性、排版和甲方沟通。',
    deliverables: '主图 5 张/套、详情页切片、促销海报、可选 PPT 汇报稿',
    monetize: '主图套图 200–800 元；详情页 500–2,000 元；加急费 30%',
    channels: '淘宝服务商、闲鱼、小红书设计账号、电商卖家群',
    steps: [
      '做 3 套不同品类（食品/3C/服饰）样例图放作品集',
      '整理 Midjourney/Flux 提示词模板提速出图',
      '提供「24 小时出初稿」作为卖点',
      '老客户推年费「视觉包月」锁定收入'
    ],
    tip: '商用前确认模型许可条款；品牌 Logo 勿直接喂给未授权素材。'
  },
  {
    title: '垂直行业提示词包售卖',
    emoji: '📝',
    category: '知识服务',
    difficulty: '入门',
    income: '月入 1,000–10,000 元',
    tools: ['Claude', 'ChatGPT', '提示词实验室', 'Gamma'],
    desc: '把你在法务、HR、电商、教培等行业的提示词经验打包成「复制即用」模板集，附使用说明和 Before/After 对比案例。',
    deliverables: '20–50 条结构化提示词 + 场景说明 + 1 页快速上手指南',
    monetize: '小报童/知识星球（29–199 元/份）；企业批量授权（500 元起）',
    channels: '小红书、公众号、即刻、行业微信群',
    steps: [
      '选你最有经验的 1 个行业深挖 10 个高频场景',
      '在提示词实验室验证并截图效果对比',
      '用 Gamma 做 10 页售卖页说明价值',
      '买赠「更新 3 个月」提高复购与口碑'
    ],
    tip: '强调模板是起点而非万能答案；附「人工复核 checklist」更专业。'
  },
  {
    title: 'AI 自动化工作流集成',
    emoji: '⚙️',
    category: '自动化',
    difficulty: '进阶',
    income: '单项目 5,000–30,000 元',
    tools: ['n8n', 'OpenClaw', 'Perplexity', 'Notion AI'],
    desc: '帮企业把分散工具串起来：如「邮件线索 → 表格归档 → AI 摘要 → Slack/飞书通知 → 周报汇总」，减少人工复制粘贴。',
    deliverables: '流程图 + n8n/OpenClaw 工作流 + 异常告警 + 操作文档',
    monetize: '实施费按节点复杂度报价；月维护 800–3,000 元',
    channels: '企业 IT 外包、SaaS 社群、LinkedIn/领英、老客户续费',
    steps: [
      '选 1 个通用场景（销售日报、竞品监控）做 Demo',
      '用 n8n 连接 Gmail/表格/Slack 跑通最小闭环',
      'OpenClaw 补充定时研报类需求',
      '签约前做 1 周试运行再收全款'
    ],
    tip: '敏感凭证客户自持；日志留存便于排错与合规审计。'
  },
  {
    title: 'AI 配音短视频制作',
    emoji: '🎙️',
    category: '内容创作',
    difficulty: '入门',
    income: '单条 100–800 元',
    tools: ['ElevenLabs', 'Fish Audio', '可灵 AI', 'Runway', 'Suno'],
    desc: '为知识博主、本地商家、培训课程制作口播短视频：AI 克隆配音或 TTS 朗读，配合 AI 生成画面与背景音乐，你负责剪辑节奏与字幕。',
    deliverables: '60 秒竖版短视频、SRT 字幕、封面帧、无版权 BGM（可选）',
    monetize: '按条计费；包月 10 条套餐（2,000–6,000 元）；配音克隆另收设置费',
    channels: '抖音服务商、B 站 UP 主合作、培训公司、闲鱼',
    steps: [
      '用 Fish Audio/ElevenLabs 做 1 条完整样片挂橱窗',
      '标准化脚本模板（钩子-痛点-方案-CTA）',
      '可灵/Runway 补 B-roll 降低实拍成本',
      '提供「3 天交付」标准流程报价表'
    ],
    tip: '仅克隆客户本人或已授权声音；平台需标注 AI 生成（按各平台规则）。'
  },
  {
    title: '行业调研简报订阅',
    emoji: '📊',
    category: '知识服务',
    difficulty: '进阶',
    income: '订阅 99–499 元/月/人',
    tools: ['Perplexity', '秘塔 AI 搜索', 'NotebookLM', 'Manus', 'OpenClaw'],
    desc: '为投资、产品、运营人群提供每周行业动态简报：竞品上新、政策变化、投融资事件，AI 搜集整理，你负责筛选与点评。',
    deliverables: '周报 PDF/邮件（3,000–5,000 字）+ 关键数据表 + 来源链接',
    monetize: '个人订阅；企业席位（5 人起）；定制深度报告另议（2,000 元起）',
    channels: '知识星球、小报童、私域社群、OpenClaw 定时推送',
    steps: [
      '选细分赛道（如 AI 工具、跨境电商）连更 4 期免费试读',
      '用 Perplexity/秘塔搜集，NotebookLM 做交叉摘要',
      'OpenClaw 每周一自动起草，你周二人工润色发布',
      '积累 100 订阅后开放企业团购价'
    ],
    tip: '所有结论附引用来源；不构成投资/法律建议的免责声明必写。'
  },
  {
    title: 'MVP 落地页快速交付',
    emoji: '🚀',
    category: '技术服务',
    difficulty: '入门',
    income: '单项目 3,000–12,000 元',
    tools: ['Bolt.new', 'Cursor', 'Gamma', 'ChatGPT'],
    desc: '帮创业者、产品经理在 1–3 天内交付可演示的产品落地页或轻量 Web MVP，用于融资路演、用户验证或内测报名。',
    deliverables: '响应式落地页 + 表单收集 + 基础 SEO + 部署链接',
    monetize: '标准页 3,000 元起；含简单后台/支付加钱；48 小时加急 +50%',
    channels: '创业者社群、Product Hunt 中文圈、朋友介绍、独立开发者群',
    steps: [
      'Bolt.new 生成骨架，Cursor 精修交互与样式',
      '准备 2 个不同风格案例（SaaS / 消费品牌）',
      '报价单写清修改轮次与托管方式',
      '交付时附 15 分钟录屏教客户自己改文案'
    ],
    tip: '域名与账号归客户所有；上线前做移动端与表单测试。'
  },
  {
    title: '数据处理与脚本定制',
    emoji: '👨‍💻',
    category: '技术服务',
    difficulty: '进阶',
    income: '单项目 1,000–15,000 元',
    tools: ['Cursor', 'Aider', 'Claude Code', 'DeepSeek'],
    desc: '帮运营、财务、市场人员写 Python/JS 小工具：Excel 清洗、批量重命名、简易爬虫、报表自动生成，解决「不会编程但重复劳动多」的痛点。',
    deliverables: '可运行脚本 + README 使用说明 + 1 次线上讲解',
    monetize: '按工时或固定价；复杂需求先收 30% 定金',
    channels: '猪八戒、电鸭社区、企业微信外包群、前同事转介',
    steps: [
      '做 2 个「Excel 合并/去重」类 Demo 挂作品集',
      '用 Cursor/Aider 快速交付并自动写注释',
      '报价时区分「一次性」与「要维护升级」',
      '交付源码并教客户跑通，减少售后'
    ],
    tip: '爬虫类项目确认合法合规；客户数据不留存于你的云端。'
  },
  {
    title: '企业 AI 内训与陪跑',
    emoji: '🎓',
    category: '教育培训',
    difficulty: '进阶',
    income: '半天 3,000–8,000 元；陪跑 2,000 元/月起',
    tools: ['本站全套模块', 'Gamma', 'Microsoft Copilot', '扣子 Coze'],
    desc: '面向非技术团队（市场、行政、销售）做 AI 提效培训：选型、提示词、办公场景实操。可叠加 30 天微信群陪跑答疑。',
    deliverables: '2–4 小时工作坊 + 场景手册 + 课后作业清单 + 可选陪跑',
    monetize: '企业按场次收费；个人小班（199–599 元/人）；年度顾问套餐',
    channels: 'HR 对接、企业培训经纪、朋友圈口碑、结业学员转介绍',
    steps: [
      '把本站 7 天路径浓缩成「半天速成课」大纲',
      '用 Gamma 做培训幻灯片，现场演示 3 个岗位场景',
      '收集训后满意度与效率提升案例做背书',
      '首单企业可赠 1 个月陪跑换案例授权'
    ],
    tip: '强调合规与信息安全；勿教员工把机密数据喂给公有云模型。'
  },
  {
    title: '跨境电商 Listing 文案与本地化',
    emoji: '🛒',
    category: '内容创作',
    difficulty: '入门',
    income: '单条 Listing 80–300 元',
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
    desc: '为亚马逊、Shopee、Temu 卖家撰写高转化英文/多语言商品标题、五点描述、A+ 页面文案，并结合目标市场搜索词优化。',
    deliverables: '标题 + 五点描述 + 搜索关键词表 + 可选西班牙语/日语版本',
    monetize: '按 SKU 计费；包店套餐（50 条起）；旺季加急 +30%',
    channels: '跨境卖家群、知无不言、猪八戒、跨境电商服务商',
    steps: [
      '选 1 个熟悉品类做 3 条标杆 Listing 当案例',
      '用 Perplexity 查目标市场热搜词与竞品文案',
      'Claude 做多语言润色，人工校对文化禁忌',
      '推出「7 天上新包」吸引中小卖家首单'
    ],
    tip: '禁止虚假宣传与侵权关键词；各平台禁售品类不接单。'
  },
  {
    title: 'AI 播客节目制作外包',
    emoji: '🎵',
    category: '内容创作',
    difficulty: '入门',
    income: '单期 300–1,500 元',
    tools: ['NotebookLM', 'Suno', 'ElevenLabs', 'ChatGPT'],
    desc: '帮企业主、专家、社群主理人把长文/访谈纪要变成播客节目：AI 生成脚本、片头音乐、配音，你负责剪辑包装与上架指引。',
    deliverables: '15–30 分钟播客音频 + Show Notes + 封面图 + 上架说明',
    monetize: '按期收费；包季 10 期优惠；片头定制另收',
    channels: '小宇宙主播社群、知识星球主、企业品牌部',
    steps: [
      'NotebookLM 把客户 PDF/文章转成对话体脚本',
      'Suno 做片头曲，ElevenLabs/Fish Audio 配音',
      '做 1 期完整样例挂在小宇宙展示',
      '提供「每月 2 期」订阅制锁定客户'
    ],
    tip: '音乐与配音确认商用授权；内容观点由客户终审。'
  },
  {
    title: 'AI 有声书 / 课件朗读服务',
    emoji: '📓',
    category: '内容创作',
    difficulty: '入门',
    income: '千字 15–40 元',
    tools: ['ElevenLabs', 'Fish Audio', 'ChatGPT'],
    desc: '为作者、培训机构、企业内训把电子书、讲义、制度手册转为专业有声版，支持多音色、多语速与章节拆分。',
    deliverables: '分章节 MP3 + 时间轴 + 片头片尾 + 简易封面',
    monetize: '按字数/时长；整本书打包价；长期合作折扣',
    channels: '作者社群、网文平台、培训机构、企业行政',
    steps: [
      '用公版书籍做 1 章样音展示音质与节奏',
      'ChatGPT 预处理文稿（断句、多音字标注）',
      'Fish Audio 中文自然度高，ElevenLabs 做英文版',
      '签约前明确修改次数与交期（通常 3–5 天/万字）'
    ],
    tip: '仅处理客户拥有版权的内容；克隆音色需书面授权。'
  },
  {
    title: '简历与面试辅导 AI 润色',
    emoji: '💼',
    category: '知识服务',
    difficulty: '入门',
    income: '单份 99–499 元',
    tools: ['Claude', 'ChatGPT', 'Kimi', 'Perplexity'],
    desc: '为求职者优化中英文简历、作品集说明与面试问答稿，结合目标岗位 JD 做关键词匹配与 STAR 故事改写。',
    deliverables: '简历 1–2 版 + 求职信 + 10 道模拟面试 Q&A',
    monetize: '基础润色 99 元；高级含模拟面试 299–499 元；套餐加 LinkedIn 优化',
    channels: '小红书求职博主、高校就业群、闲鱼、知乎',
    steps: [
      '收集 5 份脱敏 Before/After 案例（需授权）',
      'Perplexity 调研目标公司/岗位关键词',
      'Claude 做叙事优化，保留候选人真实经历',
      '提供「7 天不满意包改」降低决策门槛'
    ],
    tip: '不伪造经历与学历；辅导就业结果不作保底承诺。'
  },
  {
    title: '合同与法律文书初稿辅助',
    emoji: '⚖️',
    category: '知识服务',
    difficulty: '进阶',
    income: '单份 300–2,000 元',
    tools: ['Claude', 'Kimi', '文心一言', 'NotebookLM'],
    desc: '为小微企业和自由职业者起草租赁合同、合作协议、NDA、劳动协议等初稿，结构化条款清晰，供律师或法务终审。',
    deliverables: 'Word 初稿 + 条款说明 + 风险点清单（非法律意见）',
    monetize: '标准合同 300–800 元；定制协议按条款复杂度报价',
    channels: '创业者社群、代理记账公司转介、法务平台合作',
    steps: [
      '整理 10 份常用合同模板库（经律师审阅更佳）',
      'NotebookLM 载入客户背景与参考合同样本',
      '输出初稿并附「须律师审核」声明',
      '与本地律所互荐形成闭环'
    ],
    tip: '明确不提供法律意见；复杂诉讼与股权事项不接。'
  },
  {
    title: '竞品与 SEO 内容策略报告',
    emoji: '🔎',
    category: '知识服务',
    difficulty: '进阶',
    income: '单份 800–5,000 元',
    tools: ['Perplexity', '秘塔 AI 搜索', 'Manus', 'ChatGPT'],
    desc: '为品牌方、独立站运营输出竞品内容矩阵分析、关键词机会清单与 90 天内容日历，指导 SEO 与自媒体选题。',
    deliverables: '20–40 页报告 + 关键词表 + 90 天选题日历',
    monetize: '标准竞品报告 800 元起；含 SEO 深度版 2,000 元起',
    channels: '营销 Agency 外包、独立站卖家、B2B 市场负责人',
    steps: [
      '选熟悉行业做 1 份完整样例报告',
      '秘塔/Perplexity 抓竞品内容与搜索趋势',
      'Manus 辅助整理长列表，人工写洞察结论',
      '季报复购折扣 20% 锁客'
    ],
    tip: '数据注明采集日期；不承诺搜索排名结果。'
  },
  {
    title: '考研 / 考证学习计划定制',
    emoji: '🎓',
    category: '知识服务',
    difficulty: '入门',
    income: '单套 199–899 元',
    tools: ['NotebookLM', 'Kimi', 'ChatGPT', 'Gamma'],
    desc: '根据考生目标、基础与时间，用 AI 生成个性化复习计划、每日任务清单、错题归纳模板与记忆卡片，你负责学科经验把关。',
    deliverables: '阶段计划表 + 每日任务 + 资料索引 + 模考节奏安排',
    monetize: '一次性计划 199 元起；含 4 周答疑陪跑 599–899 元',
    channels: '考研论坛、小红书教育号、培训机构合作',
    steps: [
      '选 1 门擅长考试（英语/CPA/教资）做标杆方案',
      'NotebookLM 消化考纲与真题 PDF',
      'Gamma 输出可视化计划手册交付',
      '考季前 3 个月集中推广'
    ],
    tip: '不做泄题与违规押题；计划需随考纲更新维护。'
  },
  {
    title: '个人「第二大脑」知识库搭建',
    emoji: '🧠',
    category: '知识服务',
    difficulty: '进阶',
    income: '单项目 1,500–8,000 元',
    tools: ['Notion AI', 'Dify', 'NotebookLM', 'Obsidian+AI'],
    desc: '帮高知用户、小团队把散落文档、书签、笔记整理成可搜索、可对话的个人知识库，支持标签体系与定期摘要。',
    deliverables: '知识库架构 + 导入整理 + 检索/对话配置 + 使用培训',
    monetize: '个人版 1,500–3,000 元；团队版按人数加价',
    channels: '效率工具社群、Notion 中文圈、知识管理博主',
    steps: [
      '自建示范库展示分类与对话效果',
      'Notion AI 批量摘要，Dify 做对外问答入口',
      '交付 1 小时上手培训录屏',
      '可选月费维护资料更新'
    ],
    tip: '敏感笔记本地优先；云端需客户账号自持。'
  },
  {
    title: 'GitHub 开源项目文档与 README 优化',
    emoji: '🔗',
    category: '技术服务',
    difficulty: '入门',
    income: '单项目 500–3,000 元',
    tools: ['Cursor', 'Claude Code', 'ChatGPT', 'Aider'],
    desc: '帮独立开发者、初创团队补全英文 README、API 文档、贡献指南与示例代码，提升 Star 转化与商业合作机会。',
    deliverables: 'README + CONTRIBUTING + 基础 API 文档 + 示例',
    monetize: '基础 README 500 元起；全文档套件 2,000 元起',
    channels: 'GitHub 社区、V2EX、开发者 Twitter、开源基金会',
    steps: [
      '选 2 个知名开源风格做文档样例',
      'Cursor 读代码生成准确 API 说明',
      '中英双语版本加价 30%',
      '交付后帮发 Show HN/掘金文章引流'
    ],
    tip: '文档须与代码版本同步；不代写虚假 Star 数据。'
  },
  {
    title: 'SaaS 产品帮助中心与 Changelog 建设',
    emoji: '🪟',
    category: '技术服务',
    difficulty: '进阶',
    income: '单项目 3,000–15,000 元',
    tools: ['Cursor', 'Dify', 'ChatGPT', 'Notion AI'],
    desc: '为小型 SaaS 搭建用户帮助文档站、FAQ 机器人与版本更新日志流程，降低客服压力并提升自助解决率。',
    deliverables: '帮助中心结构 + 20–50 篇文档 + FAQ Bot + Changelog 模板',
    monetize: '首期建设费 + 月更维护 500–1,500 元',
    channels: 'SaaS 创始人社群、Indie Hackers 中文圈、Product Hunt',
    steps: [
      '用自家或 Demo SaaS 做完整帮助中心样板',
      'Dify 接入产品文档做站内问答',
      'Cursor 从代码注释生成 API 文档草稿',
      '签约时约定每月更新篇数'
    ],
    tip: '文档与产品版本绑定；重大功能需客户确认后发布。'
  },
  {
    title: 'WordPress / 企业站 AI 改版维护',
    emoji: '🌐',
    category: '技术服务',
    difficulty: '进阶',
    income: '改版 2,000–10,000 元',
    tools: ['Cursor', 'Bolt.new', 'ChatGPT', 'Midjourney'],
    desc: '承接老旧企业官网改版：AI 辅助重写文案、生成新版块设计稿、优化 SEO 元信息，你负责部署与基础维护。',
    deliverables: '改版方案 + 新文案 + 主题调整 + 30 天缺陷修复',
    monetize: '一次性改版费；年维护 1,200–3,600 元',
    channels: '本地企业服务公司、建站工作室、百度推广代理商',
    steps: [
      '准备 2 个 Before/After 改版案例',
      'Bolt.new 快速搭新版块原型给客户确认',
      'Cursor 改主题代码，ChatGPT 批量 SEO 文案',
      '维护合同写清更新次数与响应时间'
    ],
    tip: '备案与域名归客户；改版前全站备份。'
  },
  {
    title: 'AI 功能白标接入开发',
    emoji: '⚡',
    category: '技术服务',
    difficulty: '进阶',
    income: '单项目 8,000–50,000 元',
    tools: ['Cursor', 'Codex CLI', 'DeepSeek', 'Dify'],
    desc: '帮已有 App/网站集成「智能客服、文档问答、内容生成」等 AI 模块，基于 API 或 Dify 工作流，客户品牌前台展示。',
    deliverables: '需求文档 + API 集成 + 后台配置 + 上线联调',
    monetize: '按功能模块报价；API 成本由客户承担或代充',
    channels: '软件外包公司、数字化转型咨询、行业 ISV',
    steps: [
      '做 1 个 Demo 站点展示嵌入效果',
      'DeepSeek API 降本，Dify 管 RAG 逻辑',
      '交付源码与部署文档',
      '首单后推年度技术支持合同'
    ],
    tip: '数据出境与隐私合规写进合同；密钥不进你的仓库。'
  },
  {
    title: '电商售后客服话术与工单自动化',
    emoji: '🏭',
    category: '自动化',
    difficulty: '入门',
    income: '月入 1,500–6,000 元',
    tools: ['扣子 Coze', 'Dify', '通义千问', 'n8n'],
    desc: '为电商卖家配置售后 FAQ 自动回复、物流查询引导、退换货流程话术，并与表格/ERP 简单联动。',
    deliverables: '话术库 + Bot 配置 + 工单分类规则 + 周报模板',
    monetize: '首装 1,500–3,000 元；月维护 300–800 元',
    channels: '淘宝服务商、拼多多商家群、客服外包公司',
    steps: [
      '整理 TOP50 售后问题标准答案',
      '扣子接入店铺常用渠道（企微/飞书）',
      'n8n 把工单导出到表格做统计',
      '大促前提供「话术更新包」增值服务'
    ],
    tip: '复杂纠纷转人工；不代客户承诺赔偿。'
  },
  {
    title: '招聘 JD 撰写与简历初筛 Agent',
    emoji: '👨‍💻',
    category: '自动化',
    difficulty: '进阶',
    income: '单岗位 300–1,200 元',
    tools: ['Claude', 'Manus', 'n8n', 'Microsoft Copilot'],
    desc: '帮 HR 或创业团队写岗位 JD、设计面试题，并用 Agent 对简历做初筛打分与摘要，节省 70% 筛选时间。',
    deliverables: 'JD + 胜任力模型 + 初筛规则 + 候选人摘要表',
    monetize: '按岗位收费；包年 10 岗套餐；猎头合作分成',
    channels: 'HR 社群、猎头顾问、创业公司 CEO 群',
    steps: [
      '做 1 个岗位完整样例（JD+筛简历表）',
      'Manus 批量读 PDF 简历输出结构化摘要',
      '人工复核消除偏见与隐私泄露风险',
      '签约遵守个人信息保护法'
    ],
    tip: 'AI 打分仅作辅助，录用决策权在客户；数据脱敏存储。'
  },
  {
    title: '发票 / 合同智能归档流水线',
    emoji: '📋',
    category: '自动化',
    difficulty: '进阶',
    income: '单项目 4,000–18,000 元',
    tools: ['n8n', 'OpenClaw', 'Claude', 'Notion AI'],
    desc: '为财务、行政团队搭建「邮件/微信收票 → OCR 识别 → 分类入账 → 异常提醒」自动化流水线，减少手工录入。',
    deliverables: '流程设计 + n8n 工作流 + 分类规则 + 操作手册',
    monetize: '实施费一次性；月监控 600–2,000 元',
    channels: '代理记账公司、企业行政外包、财务软件实施商',
    steps: [
      '选发票+合同两类文档做 POC',
      'Claude 做字段抽取校验规则',
      'OpenClaw 定时推送异常汇总给财务',
      '上线前并行跑 2 周人工对照'
    ],
    tip: '财务数据本地或客户私有云；不等同于代账服务。'
  },
  {
    title: '多平台社媒定时发布与舆情监控',
    emoji: '𝕏',
    category: '自动化',
    difficulty: '进阶',
    income: '月入 2,000–8,000 元',
    tools: ['OpenClaw', 'n8n', 'Grok', 'Perplexity'],
    desc: '帮品牌运营统一定时发布内容、汇总各平台数据，并监控品牌关键词提及与负面评论，每日推送摘要。',
    deliverables: '发布日历 + 自动分发配置 + 每日舆情简报 + 异常告警',
    monetize: '月费 2,000 元起；按平台数量加价；危机响应包另议',
    channels: '品牌市场部、公关公司、MCN 运营团队',
    steps: [
      'OpenClaw Cron 每日抓舆情并推飞书',
      'n8n 连接 CMS 与社媒 API（合规前提下）',
      'Grok 追踪 X 实时提及',
      '首月免费试运行换案例授权'
    ],
    tip: '遵守各平台 API 与自动化规则；负面舆情需人工研判。'
  },
  {
    title: '1v1 职场 AI 技能陪练',
    emoji: '🎯',
    category: '教育培训',
    difficulty: '入门',
    income: '200–500 元/小时',
    tools: ['本站全套模块', 'Claude', 'Cursor', 'Gamma'],
    desc: '针对个人职场痛点（写周报、做 PPT、学 Python 自动化）提供 4–8 次 1v1 陪练，每次解决一个真实工作任务。',
    deliverables: '课前诊断 + 4–8 次直播/语音 + 作业批改 + 工具配置清单',
    monetize: '小时计费；4 次卡 1,500 元；8 次卡 2,800 元',
    channels: '小红书、即刻、前学员转介绍、企业 HR 内推',
    steps: [
      '定义 3 套标准课包（行政/市场/程序员入门）',
      '每次课用客户真实任务当课堂练习',
      '录屏总结发学员复习',
      '结业发「AI 应用能力清单」增信'
    ],
    tip: '不承诺升职加薪；课前确认学员基础与目标。'
  },
  {
    title: '青少年 AI 科创体验营',
    emoji: '✨',
    category: '教育培训',
    difficulty: '进阶',
    income: '单场 3,000–15,000 元',
    tools: ['Bolt.new', 'ChatGPT', 'Midjourney', '扣子 Coze'],
    desc: '为教培机构、夏令营提供半天到 2 天的 AI 体验课：做聊天机器人、AI 绘画、小游戏网页，激发兴趣而非深度编程。',
    deliverables: '课程教案 + 现场物料 + 学员作品展示页 + 讲师支持',
    monetize: '机构买断课包；按人头 80–200 元；材料费另计',
    channels: '教培机构、少年宫、国际学校课外活动',
    steps: [
      '打磨 1 套「2 小时出作品」标准流程',
      'Bolt.new 让零基础做出可分享网页',
      'Midjourney 做创意绘画模块',
      '准备家长说明会 PPT 促成交'
    ],
    tip: '未成年人隐私保护；内容健康向上，遵守双减相关政策。'
  },
  {
    title: '银发族 AI 应用公益课（可收费进阶版）',
    emoji: '🏥',
    category: '教育培训',
    difficulty: '入门',
    income: '单次 50–200 元/人',
    tools: ['豆包', '通义千问', 'Fish Audio', 'Gamma'],
    desc: '在社区、老年大学教长辈用语音助手聊天、AI 修图、防诈骗识别、视频通话辅助，基础课可公益获客，进阶课收费。',
    deliverables: '2 小时线下课 + 大字版图文手册 + 课后微信群答疑（7 天）',
    monetize: '社区补贴 + 学员自愿进阶课；企业 CSR 赞助',
    channels: '街道社区、老年大学、银行网点合作',
    steps: [
      '制作超大字体一步一图手册',
      '豆包/通义支持方言与语音，降低打字门槛',
      '先免费试讲换社区背书',
      '进阶课教 AI 相册修复与旅游规划'
    ],
    tip: '耐心慢节奏；强调不转账、不泄露验证码。'
  },
  {
    title: '设计师 AI 工作流小班课',
    emoji: '🎨',
    category: '教育培训',
    difficulty: '进阶',
    income: '1,499–3,999 元/期',
    tools: ['Midjourney', 'Flux', 'Runway', 'Stable Diffusion'],
    desc: '面向平面/UI 设计师开设 4 周小班，系统教 AI 出图、控图、修图与工作流整合，产出可入作品集的商业级稿件。',
    deliverables: '4 次直播 + 作业点评 + 提示词库 + 商用授权说明课',
    monetize: '期课收费；1v1 点评加价；企业团报折扣',
    channels: '设计社群、站酷、Behance 中文圈、设计院校',
    steps: [
      '准备 4 周大纲：概念→商业→动效→作品集',
      'Flux/MJ 各做 1 套行业案例（美妆/3C）',
      '第 4 周帮学员改 3 张作品集级稿件',
      '优秀学员推荐接单渠道'
    ],
    tip: '明确商用许可边界；鼓励学员标注 AI 辅助创作。'
  }
];

/* ═══ 设备选购指南 ═══ */

const DEVICE_GUIDE_META = {
  lead: '学 AI 不必先买顶配电脑。大多数人用云端工具（ChatGPT、Claude、Cursor 等）就够了；只有当你要本地跑模型、大量生图或重度开发时，才需要认真规划内存与显卡。2026 年 NVIDIA、AMD 也推出了 128GB 统一内存的专用 AI 计算盒子——不想自己装机的人可以重点看第七节。',
  principles: [
    '云端 AI 为主 → 16GB 内存 + 核显即可，系统按习惯选',
    '本地跑模型 → 优先看内存与显卡显存，Windows + NVIDIA 最成熟',
    '专用 AI 盒子（128GB）→ 开箱即用的本地大模型，适合工程师与重度玩家',
    '苹果高内存（128GB+）→ 本地大模型与多应用并行是强项，但 CUDA 生态弱',
    '买前想清楚 3 年主要用途，比追最新芯片更重要'
  ]
};

const DEVICE_AI_BOXES_META = {
  lead: '这类设备把「大内存 + AI 算力 + 预装软件栈」封装成桌面小盒子，体积远小于传统工作站。NVIDIA 走 GB10 Grace Blackwell + CUDA 全栈；AMD 走 Ryzen AI Halo（Strix Halo）统一内存 + ROCm/llama.cpp。与自装双 4090 相比，它们更省心、更静音，但扩展性和性价比因人而异。',
  compareNote: '单台 DGX Spark 推理上限约 200B 参数；两台互联可达约 405B。AMD 128GB 版可跑 70B 量化及更大 MoE 模型（如 Qwen3 235B 量化），但 CUDA 生态工具无法直接复用。'
};

const DEVICE_AI_BOXES = [
  {
    id: 'dgx-spark',
    title: 'NVIDIA DGX Spark',
    emoji: '⚡',
    vendor: 'NVIDIA',
    chip: 'GB10 Grace Blackwell',
    budget: '约 22,000–32,000 元',
    form: '桌面 AI 超算盒（150×150×50 mm）',
    os: 'NVIDIA DGX OS（Linux）',
    dedicated: true,
    specs: {
      chip: 'GB10：20 核 Arm + Blackwell GPU，第五代 Tensor Core',
      memory: '128 GB LPDDR5x 统一内存（CPU/GPU 共享）',
      storage: '4 TB NVMe M.2（自加密）',
      aiCompute: '最高约 1 PFLOP（FP4）；ConnectX-7 200Gbps',
      networking: '10GbE + Wi-Fi 7；双机互联可扩至 405B 级模型'
    },
    capabilities: {
      inference: '单台推理最高约 200B 参数',
      finetune: '可微调最高约 70B 参数',
      agents: '预装 NIM、TensorRT、NemoClaw/OpenShell 智能体栈'
    },
    forNeeds: ['local-llm', 'luxury', 'coding'],
    bestFor: 'AI 工程师、研究员、想本地跑智能体与大模型的开发者',
    reasoning: [
      '官方定位「世界最小 AI 超算」——1.2kg 放桌面，功耗约 240W，比全塔工作站安静得多',
      '128GB 统一内存让大模型权重完整载入，不必像消费级显卡那样反复 offload',
      'DGX OS + NVIDIA AI 软件栈开箱即用，省去 CUDA/驱动/容器环境折腾',
      '适合原型验证、微调、推理后再迁移到 DGX Cloud 或数据中心'
    ],
    tradeoff: 'Arm 架构 + 封闭软件栈，部分 x86/Windows 工具需适配；国内购买渠道与售后不如消费 PC 普及；涨价后性价比需与自装 RTX 5090 对比。',
    vsDiy: '对比自装 128GB 工作站：DGX Spark 更小巧、软件栈完整、大模型开箱即用；自装 Windows/Linux 双卡方案 CUDA 教程更多、显卡可更换，长期更「可折腾」。',
    recommendedApps: ['Ollama', 'NIM', 'TensorRT-LLM', 'NemoClaw', 'Jupyter', 'Hugging Face'],
    oemVariants: []
  },
  {
    id: 'gb10-oem',
    title: 'GB10 OEM 生态（同款芯片）',
    emoji: '🏭',
    vendor: '华硕 / 戴尔 / 惠普 / 联想等',
    chip: 'GB10 Grace Blackwell',
    budget: '约 22,000–35,000 元',
    form: '各品牌 AI 迷你工作站',
    os: 'DGX OS 或品牌定制 Linux',
    dedicated: true,
    specs: {
      chip: '与 DGX Spark 同款 GB10 Superchip',
      memory: '128 GB 统一内存',
      storage: '2–4 TB NVMe（因品牌而异）',
      aiCompute: '与 DGX Spark 同级约 1 PFLOP FP4',
      networking: '多数含高速网口；部分型号扩展接口更丰富'
    },
    capabilities: {
      inference: '与 DGX Spark 相同，约 200B 参数',
      finetune: '约 70B 参数微调',
      agents: 'NVIDIA AI Enterprise / NIM 支持因品牌套餐而异'
    },
    forNeeds: ['local-llm', 'luxury', 'coding'],
    bestFor: '想用 GB10 算力、但希望走企业采购或品牌售后通道的团队',
    reasoning: [
      '华硕 Ascent GX10、惠普 ZGX Nano、戴尔 Pro Max、联想、宏碁 Veriton GN100、技嘉 AI TOP ATOM、微星等均为 GB10 平台',
      '算力与 DGX Spark 同源，差异在机箱散热、接口、保修与预装服务',
      '企业用户可走 IT 采购流程，便于统一资产管理',
      '适合已确定走 NVIDIA CUDA 路线、又不想自建机房的团队'
    ],
    tradeoff: '各品牌配置与报价差异大，购买前需核对是否含完整 NVIDIA AI 软件授权；与原厂 DGX Spark 相比未必更便宜。',
    vsDiy: '与 DGX Spark 二选一即可，不必重复购买。若已有 IT 供应商合约，优先问 OEM 报价；个人开发者通常直接买 DGX Spark 更直观。',
    recommendedApps: ['NIM', 'Ollama', 'ComfyUI', 'PyTorch', 'Cursor（远程开发）'],
    oemVariants: ['华硕 Ascent GX10', '惠普 ZGX Nano', '戴尔 Pro Max', '联想 AI 工作站', '宏碁 Veriton GN100', '技嘉 AI TOP ATOM', '微星 AI 桌面']
  },
  {
    id: 'ryzen-ai-halo',
    title: 'AMD Ryzen AI Halo · 128GB 迷你主机',
    emoji: '🔴',
    vendor: 'AMD 平台 · GMKtec / Geekom 等',
    chip: 'Ryzen AI Max+ 395（Strix Halo）',
    budget: '约 14,000–28,000 元',
    form: '迷你 AI PC（约 193×186×77 mm）',
    os: 'Windows 11 Pro / Ubuntu',
    dedicated: true,
    specs: {
      chip: '16 核 32 线程 Zen 5，最高 5.1 GHz；50 TOPS NPU',
      memory: '64 / 128 GB LPDDR5X 8000MHz 板载统一内存',
      storage: '2–4 TB PCIe 4.0 SSD，双 M.2 最高扩至 16 TB',
      aiCompute: 'Radeon 8060S 40CU RDNA 3.5；整芯片约 126 TOPS',
      networking: '2.5GbE + Wi-Fi 7 + 双 USB4'
    },
    capabilities: {
      inference: '128GB 版：70B 量化、Qwen3 235B 量化、Llama4 109B 等',
      finetune: '轻量 LoRA 可行；大规模训练仍建议云端',
      agents: '支持 OpenClaw、本地知识库、LM Studio / Ollama'
    },
    forNeeds: ['local-llm', 'luxury', 'coding', 'budget'],
    bestFor: '想用 128GB 本地大模型、但预算低于 DGX Spark 的进阶学习者与独立开发者',
    reasoning: [
      'AMD 官方称 Ryzen AI Halo 系列——Strix Halo 把 CPU、核显、NPU 与超大内存封进迷你机身',
      'GMKtec EVO-X2、Geekom A9 Max 等 128GB 版约 2,000 美元档，比 GB10 盒子便宜一截',
      'Windows 开箱，Ollama / LM Studio / llama.cpp 上手快，适合国内用户习惯',
      'RDNA 核显还能兼顾游戏与 ComfyUI 轻度生图，一机多用'
    ],
    tradeoff: '无 CUDA，PyTorch ROCm 生态仍弱于 NVIDIA；内存板载不可升级；第三方迷你主机售后与品控需甄别品牌。',
    vsDiy: '对比自装 128GB DDR5 台式机：Halo 盒子更小巧、功耗集中管理；自装可换显卡、内存可扩展，3–5 年升级空间更大。对比 DGX Spark：AMD 方案便宜、Windows 友好，但大模型优化与官方软件栈不如 NVIDIA 完整。',
    recommendedApps: ['Ollama', 'LM Studio', 'llama.cpp', 'ComfyUI', 'OpenClaw', 'Cursor'],
    oemVariants: ['GMKtec EVO-X2', 'Geekom A9 Max', 'Minisforum 等 Strix Halo 机型']
  },
  {
    id: 'dual-dgx-spark',
    title: '双机 DGX Spark 集群',
    emoji: '🔗',
    vendor: 'NVIDIA',
    chip: '2× GB10 Grace Blackwell',
    budget: '约 44,000–64,000 元',
    form: '双桌面盒 + 高速互联',
    os: 'NVIDIA DGX OS',
    dedicated: true,
    specs: {
      chip: '两台 GB10 通过 ConnectX 高速网络组成集群',
      memory: '256 GB 统一内存池（128GB × 2）',
      storage: '8 TB NVMe 合计（4TB × 2）',
      aiCompute: '约 2 PFLOP FP4 合计',
      networking: 'ConnectX-7 200Gbps 机间互联'
    },
    capabilities: {
      inference: '最高约 405B 参数模型推理',
      finetune: '更大规模分布式微调实验',
      agents: '多智能体并行、超大上下文路由'
    },
    forNeeds: ['luxury', 'local-llm', 'coding'],
    bestFor: '研究小组、AI 原生创业团队、需要本地超大模型而不上云的极端用户',
    reasoning: [
      'NVIDIA 官方支持两台 DGX Spark 互联，突破单机 200B 推理上限',
      '比采购一台 DGX Station 便宜得多，却可覆盖 400B 级实验需求',
      '适合「桌面机房」——放工位旁做私有化大模型验证',
      '两台独立机器不集群时仍可分工：一台推理、一台微调'
    ],
    tradeoff: '总价接近高端 Mac Pro，仍需自己维护集群软件；对 99% 个人学习者严重过剩。',
    vsDiy: '对比 4×4090 服务器：双 Spark 更省电、更安静、占桌面空间小；多卡 x86 机器训练吞吐更高、二手显卡生态更成熟。',
    recommendedApps: ['vLLM', 'NIM', 'TensorRT-LLM', 'Ray', '自建 RAG 集群'],
    oemVariants: []
  }
];

const DEVICE_NEED_OPTIONS = [
  { id: 'cloud', label: '云端 AI 学习', emoji: '☁️', desc: '网页/App 为主，不写代码' },
  { id: 'coding', label: 'AI 辅助编程', emoji: '👨‍💻', desc: 'Cursor、VS Code、多项目' },
  { id: 'local-llm', label: '本地跑大模型', emoji: '🧠', desc: 'Ollama、LM Studio 离线推理' },
  { id: 'image', label: 'AI 绘画 / 视频', emoji: '🎨', desc: 'SD、ComfyUI、本地渲染' },
  { id: 'apple', label: '苹果全家桶', emoji: '🍎', desc: 'iPhone/iPad/Mac 深度联动' },
  { id: 'budget', label: '预算优先', emoji: '💰', desc: '够用就好，可后期升级' },
  { id: 'luxury', label: '顶配土豪', emoji: '💎', desc: '预算不是问题，要最强体验' }
];

const DEVICE_OS_COMPARE = {
  windows: {
    title: 'Windows',
    emoji: '🪟',
    tagline: '兼容性最广、本地 AI 生态最成熟',
    chooseWhen: [
      '需要 NVIDIA 显卡跑本地模型、Stable Diffusion、ComfyUI',
      '公司/学校环境以 Office、CAD、工业软件为主',
      '想自己组装台式机，按需升级内存和显卡',
      '玩 3A 游戏的同时兼顾 AI 实验',
      '使用 CUDA 生态工具（训练、推理、部分开发框架）'
    ],
    avoidWhen: [
      '主要开发 iOS/macOS 应用（仍需 Mac 做最终编译）',
      '深度依赖 Final Cut Pro、Logic Pro 等苹果独占软件',
      '极度看重静音、续航、开箱即用的移动体验'
    ],
    aiNote: 'Ollama、LM Studio、Stable Diffusion WebUI 在 Windows 上教程最多、驱动最省心。RTX 显卡是本地 AI 的性价比之选。'
  },
  macos: {
    title: 'macOS',
    emoji: '🍎',
    tagline: '体验精致、苹果生态无缝、统一内存适合轻量本地模型',
    chooseWhen: [
      '已是 iPhone/iPad 用户，重视 AirDrop、接力、iCloud 一体体验',
      '从事 iOS/macOS 开发，或视频剪辑用 Final Cut Pro',
      '主要用云端 AI + 轻度本地模型（Ollama 7B 量化）',
      '看重续航、静音、移动办公，愿为体验付溢价',
      '不想折腾驱动和环境，希望「开箱就能学」'
    ],
    avoidWhen: [
      '需要 CUDA 或大量 NVIDIA 专属 AI 工具链',
      '要本地跑 30B+ 大模型或训练 LoRA（显存/内存成本高）',
      '预算有限但需要高算力（同价位 Windows 显卡更强）',
      '依赖仅支持 Windows 的专业行业软件'
    ],
    aiNote: 'Apple Silicon 统一内存即显存：36GB 舒适跑 13B，64GB 可上 34B 量化，128–512GB（Mac Studio/Pro）适合 70B 级本地推理与重度创作。不支持 CUDA，优先用 Ollama、MLX、LM Studio。'
  }
};

const DEVICE_MEMORY_TIERS = [
  {
    size: '8 GB',
    level: '不推荐',
    suitable: '仅浏览网页、单任务办公',
    aiUse: '云端 AI 勉强可用，Chrome + ChatGPT 多标签易卡顿',
    verdict: '2026 年学 AI 的最低门槛已不够。至少 16GB，8GB 机器不建议新购。',
    highlight: false
  },
  {
    size: '16 GB',
    level: '入门标配',
    suitable: '云端 AI 主力、办公写作、轻量编程',
    aiUse: 'ChatGPT/Claude 网页与客户端流畅；可试 Ollama 3B–7B 但速度一般',
    verdict: '大多数学员的甜蜜起点：不配独显也能完成本站 90% 学习内容。',
    highlight: true
  },
  {
    size: '32 GB',
    level: '强烈推荐',
    suitable: 'AI 辅助编程、多项目并行、本地 7B–13B 模型',
    aiUse: 'Cursor + 浏览器 + 本地模型同时开不吃力；量化 13B 可跑',
    verdict: '认真学 AI 并做实战项目，32GB 是性价比最高的「不后悔」配置。',
    highlight: true
  },
  {
    size: '64 GB',
    level: '专业入门',
    platform: 'MacBook Pro M3 Max · Windows 工作站',
    suitable: '重度开发、4K 剪辑、本地 30B 级模型、多虚拟机',
    aiUse: '34B 量化推理、ComfyUI + Cursor 同开、Docker 多服务并行',
    recommendedApps: ['Cursor', 'Ollama', 'ComfyUI', 'Docker', 'Final Cut Pro'],
    verdict: '专业用户起点。Mac 64GB 统一内存约等于「大显存本」；Windows 台式可后期扩到 128GB。',
    highlight: false
  },
  {
    size: '128 GB',
    level: '旗舰工作站',
    platform: 'Mac Studio M2/M3 Ultra · 高端 Windows 工作站',
    suitable: '70B 级本地模型、AI 视频长片、多项目并行、小型团队开发环境',
    aiUse: '70B 量化推理、多模态大模型、批量生图/生视频、同时跑 2–3 个中型模型',
    recommendedApps: ['Ollama', 'MLX', 'LM Studio', 'ComfyUI', 'Runway 桌面端', 'Cursor'],
    verdict: '苹果 128GB 统一内存的甜点档（Studio Ultra）。适合把 AI 当生产力而非玩具的用户。',
    highlight: false
  },
  {
    size: '256 GB',
    level: '顶级创作',
    platform: 'Mac Studio / Mac Pro 定制 · 线程撕裂者工作站',
    suitable: '超长上下文实验、多模型切换、8K 素材 + AI 特效、本地知识库集群',
    aiUse: '70B 较大量化 + 嵌入模型 + SD/FLUX 工作流同开；适合「一台机器扛全工作室」',
    recommendedApps: ['Ollama', 'MLX', 'LM Studio', 'ComfyUI', 'NotebookLM 本地资料库', 'DaVinci Resolve'],
    verdict: '预算充足的内容工厂/工程师配置。Mac 256GB 多为 BTO 定制，下单前确认无法后期升级。',
    highlight: false
  },
  {
    size: '512 GB',
    level: '极限规格',
    platform: 'Mac Pro M2 Ultra 最高配 · 服务器级工作站',
    suitable: '研究机构、影视后期、AI 工程团队、本地私有化大模型部署',
    aiUse: '多用户/多模型并行、超大上下文、轻量微调实验、海量素材实时 AI 处理',
    recommendedApps: ['Ollama', 'MLX', 'vLLM（实验）', 'ComfyUI 集群', '自建 RAG 服务', 'Cursor'],
    verdict: '极少数用户需要。个人学习者通常 32–64GB 已够；512GB 面向「本地就是机房」的极端场景。',
    highlight: false
  }
];

const DEVICE_GPU_TIERS = [
  {
    tier: '核显 / 无独显',
    vram: '共享内存',
    emoji: '💻',
    forWho: '纯云端 AI 学习、办公、写作',
    canDo: 'ChatGPT、Claude、Kimi、Midjourney 网页版、Notion AI',
    cannotDo: '流畅本地 SD 生图、13B+ 模型推理、CUDA 训练',
    examples: 'Intel 核显、AMD Radeon 集显、MacBook Air M2/M3',
    verdict: '本站大部分课程无需独显。把钱投到 32GB 内存更值。'
  },
  {
    tier: '入门独显',
    vram: '6–8 GB',
    emoji: '⚡',
    forWho: '想试本地 AI、轻度生图的学习者',
    canDo: 'SD 1.5 低分辨率、Ollama 7B 量化、基础 LoRA 推理',
    cannotDo: 'FLUX 全精度、70B 模型、大规模训练',
    examples: 'RTX 3050 6GB、RTX 4050 6GB、RTX 4060 Laptop 8GB',
    verdict: '入门级本地 AI 门票。台式机优先，笔记本散热受限。'
  },
  {
    tier: '中端独显',
    vram: '8–12 GB',
    emoji: '🎯',
    forWho: 'AI 副业接单、日常生图、本地开发调试',
    canDo: 'SDXL、FLUX 量化、13B 模型、ComfyUI 工作流、轻量微调',
    cannotDo: '70B 全精度、多卡并行训练',
    examples: 'RTX 4060 Ti 16GB、RTX 4070 12GB、RTX 4070 Laptop',
    verdict: '本地 AI 性价比甜点。4060 Ti 16GB 版尤其适合生图+模型双修。'
  },
  {
    tier: '高端独显',
    vram: '16–24 GB',
    emoji: '🚀',
    forWho: 'AI 工程师、重度创作者、小规模训练',
    canDo: '34B–70B 量化推理、视频生成本地测试、LoRA 训练、多模型并行',
    cannotDo: '大规模商业训练（仍需云端/A100 集群）',
    examples: 'RTX 4080 16GB、RTX 4090 24GB、RTX 5090',
    verdict: '单卡本地 AI 天花板。预算充足且确定走本地路线再考虑。'
  },
  {
    tier: 'Apple 统一内存',
    vram: '内存即显存',
    emoji: '🍎',
    forWho: 'Mac 用户、移动办公、轻量本地模型',
    canDo: 'Ollama 7B–13B（视内存而定）、MLX 框架、云端 AI 主力',
    cannotDo: 'CUDA 生态、NVIDIA 专属优化工具、高性价比大显存',
    examples: 'M3 24GB、M3 Pro 36GB、M3 Max 64GB、Studio Ultra 128–192GB、Mac Pro 256–512GB',
    verdict: '36GB≈13B 舒适；64GB≈34B；128GB+ 可碰 70B 量化。内存即显存，买定离手，选够再下单。'
  }
];

const DEVICE_STORAGE_TIERS = [
  { size: '256 GB', verdict: '仅适合纯云端用户；系统 + 软件即满，不推荐。' },
  { size: '512 GB', verdict: '入门够用；装几款 AI 客户端后余量紧张，需常清理。' },
  { size: '1 TB', verdict: '主流推荐。够装开发环境、本地模型缓存与素材库。' },
  { size: '2 TB+', verdict: '本地模型库、4K 素材、多虚拟机 — 创作者与工程师首选。' }
];

const DEVICE_PRESETS = [
  {
    id: 'cloud-starter',
    title: '云端学习入门',
    emoji: '☁️',
    budget: '4,000–6,000 元',
    form: '轻薄本',
    os: 'Windows / macOS 均可',
    specs: { cpu: 'i5 / R5 / M2', ram: '16 GB', gpu: '核显', storage: '512 GB SSD' },
    forNeeds: ['cloud', 'budget'],
    bestFor: '跟完本站 7 天课程、日常 ChatGPT/Claude 学习、办公写作',
    reasoning: [
      '学习阶段 90% 操作在浏览器和 App 完成，无需本地算力',
      '16GB 保证多标签 + AI 客户端不卡顿',
      '轻薄本便携，图书馆、咖啡馆都能学',
      '省下预算可先订阅 1–2 款 AI 工具月费'
    ],
    tradeoff: '无法舒适本地跑模型或 SD 生图；重度编程多开可能吃力。'
  },
  {
    id: 'coding-mac',
    title: '编程 + 苹果生态',
    emoji: '🍎',
    budget: '9,000–14,000 元',
    form: 'MacBook Air/Pro',
    os: 'macOS',
    specs: { cpu: 'M3 / M3 Pro', ram: '24–36 GB 统一内存', gpu: '集显（统一内存）', storage: '512 GB–1 TB' },
    forNeeds: ['coding', 'apple', 'cloud'],
    bestFor: 'Cursor 开发、iOS 学习、苹果设备联动、云端 AI 主力',
    reasoning: [
      'M 系列芯片编译快、续航长，移动写代码体验一流',
      '24GB 起可兼顾 Ollama 7B 轻量本地实验',
      '与 iPhone/iPad 接力查资料、试 App 极方便',
      'Final Cut、Keynote 等苹果工具链完整'
    ],
    tradeoff: '同价位显卡算力不如 Windows；CUDA 工具无法使用。'
  },
  {
    id: 'coding-win',
    title: 'AI 编程主力机',
    emoji: '👨‍💻',
    budget: '7,000–10,000 元',
    form: 'Windows 笔记本 / 小主机',
    os: 'Windows 11',
    specs: { cpu: 'i7 / R7 / Ultra 7', ram: '32 GB', gpu: '核显或 RTX 4050', storage: '1 TB SSD' },
    forNeeds: ['coding', 'cloud', 'budget'],
    bestFor: 'Cursor、VS Code、Docker、多项目 AI 辅助开发',
    reasoning: [
      '32GB 是 AI 编程的「不后悔」内存线，多仓库 + 浏览器 + AI 同时开',
      'Windows 兼容企业开发环境与各类 CLI 工具',
      '可选带 RTX 4050 的版本，兼顾轻度本地模型',
      '1TB SSD 装 WSL、Docker 镜像、多个 Node/Python 环境'
    ],
    tradeoff: '独显版更重更贵；核显版本地 AI 能力有限。'
  },
  {
    id: 'local-ai',
    title: '本地 AI 工作站',
    emoji: '🧠',
    budget: '12,000–18,000 元',
    form: 'Windows 台式机 / 游戏本',
    os: 'Windows 11',
    specs: { cpu: 'i7 / R7', ram: '32 GB', gpu: 'RTX 4060 Ti 16GB', storage: '1 TB NVMe' },
    forNeeds: ['local-llm', 'image', 'coding'],
    bestFor: 'Ollama 本地模型、ComfyUI 生图、AI 副业接单',
    reasoning: [
      '4060 Ti 16GB 是 2026 年本地 AI 性价比之王，显存够跑 SDXL 和 13B',
      '32GB 系统内存保证模型加载余量',
      '台式机散热好，长时间推理不降频',
      '比 Mac 同算力便宜，CUDA 教程资源丰富'
    ],
    tradeoff: '占地、耗电、不便携；笔记本版同配置散热打折扣。'
  },
  {
    id: 'creator-pro',
    title: '创作生产力',
    emoji: '🎨',
    budget: '18,000–30,000 元',
    form: 'MacBook Pro / Windows 创作本',
    os: 'macOS / Windows',
    specs: { cpu: 'M3 Max/Ultra 或 i9', ram: '64–128 GB 统一内存 / 64GB+', gpu: '集显高内存 / RTX 4070+', storage: '2 TB SSD' },
    forNeeds: ['image', 'apple', 'local-llm'],
    bestFor: 'AI 视频、批量生图、播客剪辑、70B 级本地模型实验',
    reasoning: [
      '64GB 起可跑 34B 量化；128GB Studio Ultra 可碰 70B 级本地推理',
      '2TB 存模型权重、素材库、项目归档',
      'Mac 内存买定离手，建议按 3 年用途一次选够；Windows 选 4070 以上独显',
      '适合把本站所学转化为自媒体/设计副业'
    ],
    tradeoff: '价格高；初学者可先云端验证方向再投资。'
  },
  {
    id: 'desktop-value',
    title: '台式性价比组装',
    emoji: '💰',
    budget: '8,000–12,000 元',
    form: 'DIY 台式机',
    os: 'Windows 11',
    specs: { cpu: 'R5 / i5', ram: '32 GB DDR5', gpu: 'RTX 4060 8GB', storage: '1 TB NVMe' },
    forNeeds: ['budget', 'local-llm', 'image', 'coding'],
    bestFor: '预算有限但想本地 AI 全体验、后期可升级',
    reasoning: [
      '台式机同价位算力最强，显卡和内存均可后期更换',
      '4060 8GB 够入门 SD 和 7B 模型',
      '32GB 内存可升到 64GB，延长 3–5 年寿命',
      '适合在家固定学习、做 ComfyUI 和 Ollama 实验'
    ],
    tradeoff: '无法移动；需一定装机/维护知识。'
  },
  {
    id: 'luxury-mbp',
    title: '移动旗舰 · MacBook Pro',
    emoji: '💎',
    luxury: true,
    budget: '45,000–68,000 元',
    form: 'MacBook Pro 16"',
    os: 'macOS',
    specs: { cpu: 'M4 Max', ram: '64–128 GB 统一内存', gpu: '集显（统一内存）', storage: '2–4 TB SSD' },
    forNeeds: ['luxury', 'apple', 'coding', 'local-llm', 'image'],
    bestFor: '随时随地本地跑 34B–70B 实验、移动剪辑、出差演示',
    reasoning: [
      '128GB 版是目前苹果笔记本内存天花板，一台带走整个 AI 实验室',
      'M4 Max 单核/多核都强，Cursor + Final Cut + Ollama 同开无压力',
      '适合高频飞行、多地办公的创业者与创意总监',
      '配 Pro Display XDR 回家即变桌面工作站'
    ],
    tradeoff: '溢价极高；散热仍弱于台式，长时间 70B 推理会降频。'
  },
  {
    id: 'luxury-studio',
    title: '桌面旗舰 · Mac Studio Ultra',
    emoji: '🏆',
    luxury: true,
    budget: '80,000–120,000 元',
    form: 'Mac Studio',
    os: 'macOS',
    specs: { cpu: 'M3 Ultra', ram: '128–192 GB 统一内存', gpu: '集显（60 核 GPU）', storage: '2–4 TB SSD' },
    forNeeds: ['luxury', 'apple', 'local-llm', 'image', 'coding'],
    bestFor: '个人 AI 创作工作室、70B 本地推理、静音高配桌面',
    reasoning: [
      '128GB 是多数 AI 从业者的苹果「终极甜点」——够跑 70B 量化还不至于 Mac Pro 价位',
      '体积极小、几乎静音，放桌面比水冷主机优雅',
      'MLX + Ollama 生态成熟，适合苹果全家桶重度用户',
      '比 Mac Pro 便宜一截，性能却覆盖 90% 本地 AI 场景'
    ],
    tradeoff: '内存/硬盘定制后不可升级；无 CUDA，部分科研工具需绕道。'
  },
  {
    id: 'luxury-macpro',
    title: '苹果天花板 · Mac Pro',
    emoji: '👑',
    luxury: true,
    budget: '180,000–450,000 元',
    form: 'Mac Pro 塔式',
    os: 'macOS',
    specs: { cpu: 'M2 Ultra', ram: '256–512 GB 统一内存', gpu: '集显（76 核 GPU）', storage: '4–8 TB SSD' },
    forNeeds: ['luxury', 'apple', 'local-llm', 'image'],
    bestFor: '影视公司、AI 原生团队、私有化大模型、多路 8K 流',
    reasoning: [
      '512GB 统一内存在消费级设备里独一无二，可同时驻留多个大模型',
      '适合「不想上云、但要有机房级内存」的土豪团队',
      'After Effects + ComfyUI + 本地 70B 助手三班倒',
      '苹果生态内的身份象征 + 真实生产力，不是纯摆设'
    ],
    tradeoff: '价格离谱；M2 Ultra 代际略旧于 M4，纯算力不如同价位 NVIDIA 集群。'
  },
  {
    id: 'luxury-dual-gpu',
    title: '双卡怪兽 · NVIDIA 工作站',
    emoji: '🚀',
    luxury: true,
    budget: '80,000–180,000 元',
    form: '全塔工作站',
    os: 'Windows 11 / Linux',
    specs: { cpu: 'Threadripper PRO / i9-14900K', ram: '128–256 GB DDR5', gpu: '2× RTX 4090 24GB 或 2× RTX 5090', storage: '4 TB NVMe RAID' },
    forNeeds: ['luxury', 'local-llm', 'image', 'coding'],
    bestFor: 'CUDA 深度玩家、LoRA 训练、多路 ComfyUI、本地模型微调',
    reasoning: [
      '双 4090 = 48GB 显存池，跑 SDXL/FLUX 多工作流比单卡快一倍',
      '128GB 系统内存 + 大显存，是 Windows 阵营本地 AI 的硬顶',
      'Ollama、ComfyUI、PyTorch 教程最全，工程师首选',
      '后期可换卡、可扩内存，比苹果更「可折腾」'
    ],
    tradeoff: '噪音大、耗电高、体积占满一桌；驱动与环境维护成本高。'
  },
  {
    id: 'luxury-apple-win',
    title: '土豪双持 · Mac + Windows 双机',
    emoji: '⚡',
    luxury: true,
    budget: '150,000–280,000 元',
    form: 'Mac Studio + Windows 主机',
    os: 'macOS + Windows',
    specs: { cpu: 'M3 Ultra + i9', ram: '128 GB + 128 GB', gpu: 'Apple 集显 + RTX 4090', storage: '各 4 TB' },
    forNeeds: ['luxury', 'apple', 'local-llm', 'image', 'coding'],
    bestFor: '既要苹果体验又要 CUDA 全生态的终极玩家',
    reasoning: [
      'Mac 负责日常创作、移动端、Final Cut、MLX 轻量推理',
      'Windows 主机负责 ComfyUI 批量、CUDA 训练、游戏放松',
      'NAS 或 10GbE 局域网共享模型与素材，双机互补不重复造轮子',
      '很多 AI 工作室的真实顶配形态——不是一台万能，而是分工明确'
    ],
    tradeoff: '总价最高、线缆与同步成本高；对普通人严重过剩。'
  }
];