/* BestWayToLearn.AI — AI 工具导航（Hao123 风格目录） */

const AI_TOOLS_NAV_CATEGORIES = [
  '对话助手',
  '编程开发',
  '图像创作',
  '视频音频',
  '办公效率',
  '搜索研究',
  'Agent 自动化',
  '设计原型',
  '营销写作',
  '本地与开源',
];

/** 课程未收录、但值得收录的扩展工具（按分类） */
const AI_TOOLS_NAV_EXTRA = [
  // 对话助手
  { name: 'Poe', category: '对话助手', url: 'https://poe.com', emoji: '💬', desc: '多模型聚合对话，一账号切换 GPT / Claude / Gemini 等' },
  { name: 'Meta AI', category: '对话助手', url: 'https://www.meta.ai', emoji: '🦙', desc: 'Meta 官方助手，整合 Instagram / WhatsApp 生态' },
  { name: 'Character.AI', category: '对话助手', url: 'https://character.ai', emoji: '🎭', desc: '角色扮演与个性化 AI 角色对话社区' },
  { name: '腾讯混元', category: '对话助手', url: 'https://hunyuan.tencent.com', emoji: '🐧', desc: '腾讯大模型，中文对话与多模态创作' },
  { name: '讯飞星火', category: '对话助手', url: 'https://xinghuo.xfyun.cn', emoji: '🔥', desc: '科大讯飞认知大模型，语音与办公场景强' },
  { name: '天工 AI', category: '对话助手', url: 'https://www.tiangong.cn', emoji: '🌤️', desc: '昆仑万维出品，搜索增强与多模态问答' },
  { name: '智谱清言', category: '对话助手', url: 'https://chatglm.cn', emoji: '🧠', desc: '智谱 GLM 官方对话入口，国产开源生态' },

  // 编程开发
  { name: 'Replit', category: '编程开发', url: 'https://replit.com', emoji: '🔁', desc: '浏览器内全栈开发与 AI Agent 部署' },
  { name: 'Lovable', category: '编程开发', url: 'https://lovable.dev', emoji: '💜', desc: '自然语言生成全栈 Web 应用并一键部署' },
  { name: 'v0', category: '编程开发', url: 'https://v0.dev', emoji: '▲', desc: 'Vercel 出品，AI 生成 React / shadcn UI 组件' },
  { name: 'Google AI Studio', category: '编程开发', url: 'https://aistudio.google.com', emoji: '🔬', desc: 'Gemini API 调试、Prompt 测试与原型搭建' },
  { name: 'Hugging Face', category: '编程开发', url: 'https://huggingface.co', emoji: '🤗', desc: '开源模型托管、Spaces 演示与数据集社区' },
  { name: 'Replicate', category: '编程开发', url: 'https://replicate.com', emoji: '🔁', desc: '云端运行开源模型 API，按调用计费' },
  { name: 'Tabnine', category: '编程开发', url: 'https://www.tabnine.com', emoji: '⌨️', desc: '企业级 AI 代码补全，支持私有部署' },
  { name: 'JetBrains AI', category: '编程开发', url: 'https://www.jetbrains.com/ai/', emoji: '🛠️', desc: 'JetBrains IDE 内置 AI 助手与补全' },
  { name: 'Sourcegraph Cody', category: '编程开发', url: 'https://sourcegraph.com/cody', emoji: '🔎', desc: '基于代码库上下文的 AI 编程助手' },

  // 图像创作
  { name: 'Leonardo.ai', category: '图像创作', url: 'https://leonardo.ai', emoji: '🦁', desc: '游戏与概念设计向 AI 绘画，模型丰富' },
  { name: 'Ideogram', category: '图像创作', url: 'https://ideogram.ai', emoji: '🔤', desc: '文字渲染能力突出的 AI 图像生成' },
  { name: 'Adobe Firefly', category: '图像创作', url: 'https://firefly.adobe.com', emoji: '🔥', desc: 'Adobe 商用安全 AI 图像，与 PS 深度整合' },
  { name: '即梦 AI', category: '图像创作', url: 'https://jimeng.jianying.com', emoji: '🌙', desc: '字节剪映系文生图工具，国内访问友好' },
  { name: 'LiblibAI', category: '图像创作', url: 'https://www.liblib.art', emoji: '📚', desc: '国内 Stable Diffusion 模型社区与在线生图' },
  { name: 'Civitai', category: '图像创作', url: 'https://civitai.com', emoji: '🌐', desc: '全球最大 SD / LoRA 模型分享社区' },
  { name: 'Recraft', category: '图像创作', url: 'https://www.recraft.ai', emoji: '✏️', desc: '矢量与品牌风格一致的 AI 设计生成' },
  { name: 'Canva', category: '图像创作', url: 'https://www.canva.com', emoji: '🎨', desc: 'Magic Studio AI 设计、海报与社媒素材' },

  // 视频音频
  { name: 'Pika', category: '视频音频', url: 'https://pika.art', emoji: '⚡', desc: '创意短视频生成，特效与风格化突出' },
  { name: 'Luma Dream Machine', category: '视频音频', url: 'https://lumalabs.ai/dream-machine', emoji: '🌙', desc: '高质量文生视频，镜头运动自然' },
  { name: 'HeyGen', category: '视频音频', url: 'https://www.heygen.com', emoji: '🧑‍💼', desc: '数字人播报与多语言口型同步视频' },
  { name: 'Descript', category: '视频音频', url: 'https://www.descript.com', emoji: '✂️', desc: '播客/视频剪辑，文本即剪辑时间线' },
  { name: 'Udio', category: '视频音频', url: 'https://www.udio.com', emoji: '🎶', desc: 'AI 音乐生成，风格多样含人声' },
  { name: '剪映 CapCut', category: '视频音频', url: 'https://www.capcut.cn', emoji: '🎬', desc: '字节系剪辑工具，内置 AI 字幕与特效' },
  { name: 'Vidu', category: '视频音频', url: 'https://www.vidu.cn', emoji: '📹', desc: '生数科技文生视频，中文提示词友好' },
  { name: 'PixVerse', category: '视频音频', url: 'https://pixverse.ai', emoji: '🌌', desc: '爱诗科技 AI 视频，模板与特效丰富' },
  { name: '海螺 AI', category: '视频音频', url: 'https://hailuoai.com', emoji: '🐚', desc: 'MiniMax 语音与视频生成平台' },

  // 办公效率
  { name: 'Tome', category: '办公效率', url: 'https://tome.app', emoji: '📖', desc: 'AI 叙事型演示文稿，适合故事化汇报' },
  { name: 'Beautiful.ai', category: '办公效率', url: 'https://www.beautiful.ai', emoji: '✨', desc: '智能排版 PPT，自动保持设计一致性' },
  { name: '飞书', category: '办公效率', url: 'https://www.feishu.cn', emoji: '🪶', desc: '字节协作套件，内置飞书智能伙伴' },
  { name: 'WPS AI', category: '办公效率', url: 'https://ai.wps.cn', emoji: '📄', desc: '金山 WPS 内置 AI 写作与表格分析' },
  { name: 'Grammarly', category: '办公效率', url: 'https://www.grammarly.com', emoji: '✍️', desc: '英文写作纠错、润色与语气建议' },
  { name: 'Slack AI', category: '办公效率', url: 'https://slack.com/features/ai', emoji: '💼', desc: '团队频道摘要、搜索与工作流助手' },
  { name: '钉钉 AI', category: '办公效率', url: 'https://www.dingtalk.com', emoji: '📌', desc: '企业协作与 AI 助理、智能填表' },

  // 搜索研究
  { name: 'Consensus', category: '搜索研究', url: 'https://consensus.app', emoji: '📑', desc: '学术论文 AI 搜索，结论带文献引用' },
  { name: 'Elicit', category: '搜索研究', url: 'https://elicit.com', emoji: '🔬', desc: '科研文献综述与自动提取论文要点' },
  { name: 'You.com', category: '搜索研究', url: 'https://you.com', emoji: '🔍', desc: 'AI 搜索引擎，可切换多种模型回答' },
  { name: 'Phind', category: '搜索研究', url: 'https://www.phind.com', emoji: '👨‍💻', desc: '面向开发者的 AI 搜索与代码解答' },
  { name: '夸克 AI', category: '搜索研究', url: 'https://www.quark.cn', emoji: '🧭', desc: '阿里夸克浏览器内置 AI 搜索与总结' },

  // Agent 自动化
  { name: 'Flowise', category: 'Agent 自动化', url: 'https://flowiseai.com', emoji: '🌊', desc: '可视化 LLM 应用编排，可自托管' },
  { name: 'LangChain', category: 'Agent 自动化', url: 'https://www.langchain.com', emoji: '🦜', desc: 'LLM 应用开发框架与 LangSmith 观测' },
  { name: 'CrewAI', category: 'Agent 自动化', url: 'https://www.crewai.com', emoji: '👥', desc: '多 Agent 协作编排框架' },
  { name: 'Zapier', category: 'Agent 自动化', url: 'https://zapier.com', emoji: '⚡', desc: '7000+ 应用连接，AI 自动化工作流' },
  { name: 'Make', category: 'Agent 自动化', url: 'https://www.make.com', emoji: '🔗', desc: '可视化自动化平台，支持 AI 模块' },
  { name: 'FastGPT', category: 'Agent 自动化', url: 'https://fastgpt.in', emoji: '🚀', desc: '开源知识库问答与工作流 Agent 平台' },

  // 设计原型
  { name: 'Figma', category: '设计原型', url: 'https://www.figma.com', emoji: '🎯', desc: 'Figma AI 生成 UI、改写文案与原型' },
  { name: 'Framer', category: '设计原型', url: 'https://www.framer.com', emoji: '🖼️', desc: 'AI 辅助建站与交互动效设计' },
  { name: 'Uizard', category: '设计原型', url: 'https://uizard.io', emoji: '📱', desc: '草图/截图转高保真 UI 原型' },
  { name: 'Motiff', category: '设计原型', url: 'https://motiff.com', emoji: '🎨', desc: 'AI 原生 UI 设计工具，国产 Figma 替代' },
  { name: 'Relume', category: '设计原型', url: 'https://www.relume.io', emoji: '🏗️', desc: 'AI 生成网站 Sitemap 与 Wireframe' },

  // 营销写作
  { name: 'Jasper', category: '营销写作', url: 'https://www.jasper.ai', emoji: '📝', desc: '品牌营销文案、广告与 SEO 内容' },
  { name: 'Copy.ai', category: '营销写作', url: 'https://www.copy.ai', emoji: '©️', desc: '营销文案、邮件与社媒内容批量生成' },
  { name: 'Writesonic', category: '营销写作', url: 'https://writesonic.com', emoji: '✏️', desc: 'SEO 文章、落地页与广告文案' },
  { name: 'Sudowrite', category: '营销写作', url: 'https://www.sudowrite.com', emoji: '📚', desc: '小说与创意写作 AI 辅助' },

  // 本地与开源
  { name: 'Ollama', category: '本地与开源', url: 'https://ollama.com', emoji: '🦙', desc: '本地一键运行 Llama、Qwen 等开源模型' },
  { name: 'LM Studio', category: '本地与开源', url: 'https://lmstudio.ai', emoji: '🖥️', desc: '图形化本地大模型加载与聊天' },
  { name: 'ComfyUI', category: '本地与开源', url: 'https://github.com/comfyanonymous/ComfyUI', emoji: '🧩', desc: '节点式 Stable Diffusion 工作流（开源）' },
  { name: 'Open WebUI', category: '本地与开源', url: 'https://openwebui.com', emoji: '🌐', desc: '自托管 Ollama  Web 聊天界面' },
  { name: 'LocalAI', category: '本地与开源', url: 'https://localai.io', emoji: '🏠', desc: '本地 OpenAI 兼容 API 服务（开源）' },
  { name: 'OpenRouter', category: '本地与开源', url: 'https://openrouter.ai', emoji: '🔀', desc: '统一 API 路由多家大模型，按量计费' },
];

const AI_TOOLS_NAV_META = {
  lead: '按用途分类收录知名 AI 工具官网，一键直达。带「本站推荐」标签的工具已纳入课程选型模块。',
  searchPlaceholder: '搜索工具名称、用途…',
  featuredBadge: '本站推荐',
  countLabel: '{n} 个工具',
  totalLabel: '共 {n} 个工具 · {c} 个分类',
  empty: '没有匹配的工具，换个关键词试试',
  openSite: '打开官网',
};

function buildAiToolsNavLinks() {
  if (typeof APPS === 'undefined') return [...AI_TOOLS_NAV_EXTRA];

  const seen = new Set();
  const links = [];

  APPS.forEach(app => {
    const key = `${app.name}::${app.url}`;
    if (seen.has(key)) return;
    seen.add(key);
    links.push({
      name: app.name,
      category: app.category,
      url: app.url,
      emoji: app.emoji,
      desc: (app.desc || '').replace(/\s+/g, ' ').slice(0, 56) + (app.desc && app.desc.length > 56 ? '…' : ''),
      featured: true,
      tags: app.tags || [],
    });
  });

  AI_TOOLS_NAV_EXTRA.forEach(tool => {
    const key = `${tool.name}::${tool.url}`;
    if (seen.has(key)) return;
    seen.add(key);
    links.push({ ...tool, featured: false });
  });

  return links;
}

function getAiToolsNavCategorySlug(category) {
  return String(category)
    .replace(/\s+/g, '-')
    .replace(/[^\w\u4e00-\u9fff-]/g, '')
    .toLowerCase();
}