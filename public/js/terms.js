/* Synapse AI Academy — 100 个最常见 AI 术语（分类资料库） */

const TERM_CATEGORIES = [
  '基础概念',
  '模型与架构',
  '训练与调优',
  '提示与推理',
  '智能体与技能',
  '数据与知识',
  '多模态与生成',
  '工程与部署',
  '伦理与安全',
  '全部'
];

const DEFAULT_TERM_CATEGORY = '基础概念';

const AI_TERMS = [
  // ── 基础概念 (11) ──
  { term: '人工智能', abbr: 'AI', fullEn: 'Artificial Intelligence', category: '基础概念', def: '让机器模拟人类智能行为的技术总称，涵盖学习、推理、感知、语言理解与创造。', example: '搜索引擎、语音助手、自动驾驶。' },
  { term: '机器学习', abbr: 'ML', fullEn: 'Machine Learning', category: '基础概念', def: '让计算机从数据中自动学习规律，无需逐条编写规则，是 AI 的核心实现路径。', example: '垃圾邮件过滤、商品推荐、信用评分。' },
  { term: '深度学习', abbr: 'DL', fullEn: 'Deep Learning', category: '基础概念', def: '使用多层神经网络的机器学习方法，能自动提取数据的层次化特征表示。', example: '人脸识别、语音识别、大语言模型。' },
  { term: '通用人工智能', abbr: 'AGI', fullEn: 'Artificial General Intelligence', category: '基础概念', def: '能像人类一样处理任意智力任务的 AI，目前尚未实现，是长期研究目标。', example: '能自学任何新技能的全能 AI 助手。' },
  { term: '专用人工智能', abbr: 'ANI', fullEn: 'Artificial Narrow Intelligence', category: '基础概念', def: '只能完成特定任务的 AI，是当前所有已部署 AI 系统的类型。', example: 'AlphaGo 只会下棋，ChatGPT 主要处理语言任务。' },
  { term: '生成式 AI', abbr: 'GenAI', fullEn: 'Generative Artificial Intelligence', category: '基础概念', def: '能创造全新内容（文本、图像、音频、视频、代码）的 AI，核心是「生成」而非「判断」。', example: 'ChatGPT 写作、Midjourney 绘图、Suno 作曲。' },
  { term: '自然语言处理', abbr: 'NLP', fullEn: 'Natural Language Processing', category: '基础概念', def: '让计算机理解、生成和处理人类语言的技术分支。', example: '机器翻译、智能客服、文本摘要。' },
  { term: '计算机视觉', abbr: 'CV', fullEn: 'Computer Vision', category: '基础概念', def: '让计算机「看懂」图像和视频的技术，包括检测、分类、分割、场景理解。', example: '人脸解锁、医学影像、自动驾驶感知。' },
  { term: '算法', abbr: '—', fullEn: 'Algorithm', category: '基础概念', def: '解决问题的明确步骤和规则。AI 算法是让机器从数据中学习或推理的方法。', example: '梯度下降、反向传播、注意力机制。' },
  { term: '模型', abbr: '—', fullEn: 'Model', category: '基础概念', def: '从数据中学习到的数学表示，能对未见过的输入做出预测或生成输出。', example: 'GPT-4 是一个模型；你下载的 Stable Diffusion 也是模型。' },
  { term: '参数', abbr: '—', fullEn: 'Parameters', category: '基础概念', def: '模型内部可学习的权重数值。参数量越大，模型容量通常越强，但训练和推理成本也越高。', example: 'GPT-4 约 1.8 万亿参数；DeepSeek-R1 约 6710 亿。' },

  // ── 模型与架构 (12) ──
  { term: '大语言模型', abbr: 'LLM', fullEn: 'Large Language Model', category: '模型与架构', def: '在海量文本上训练的超大神经网络，通过预测下一个 Token 学会语言理解与生成。', example: 'GPT-4、Claude、Gemini、通义千问、DeepSeek。' },
  { term: '小语言模型', abbr: 'SLM', fullEn: 'Small Language Model', category: '模型与架构', def: '参数量较小的语言模型，可在手机、边缘设备上运行，速度更快、成本更低。', example: 'Gemma 2B、Phi-3 Mini、端侧语音助手。' },
  { term: '生成式预训练变换器', abbr: 'GPT', fullEn: 'Generative Pre-trained Transformer', category: '模型与架构', def: 'OpenAI 提出的大语言模型系列，基于 Transformer 解码器，先预训练再微调。', example: 'GPT-3.5、GPT-4、GPT-4o 驱动 ChatGPT。' },
  { term: '双向编码器', abbr: 'BERT', fullEn: 'Bidirectional Encoder Representations from Transformers', category: '模型与架构', def: 'Google 提出的双向语言理解模型，擅长分类、问答等理解任务，不擅长长文本生成。', example: '搜索引擎排序、情感分析、命名实体识别。' },
  { term: 'Transformer 架构', abbr: '—', fullEn: 'Transformer Architecture', category: '模型与架构', def: '2017 年提出的神经网络架构，以自注意力机制为核心，是现代 LLM 的基石。', example: 'GPT、Claude、Gemini、LLaMA 均基于此架构。' },
  { term: '注意力机制', abbr: '—', fullEn: 'Attention Mechanism', category: '模型与架构', def: '让模型动态关注输入中最相关部分的技术，能捕捉长距离依赖关系。', example: '翻译时长距离对齐；阅读时聚焦关键词。' },
  { term: '自注意力', abbr: '—', fullEn: 'Self-Attention', category: '模型与架构', def: '序列中的每个元素都与其他所有元素计算相关性，是 Transformer 的核心组件。', example: '理解「它」指代的是哪个名词。' },
  { term: '卷积神经网络', abbr: 'CNN', fullEn: 'Convolutional Neural Network', category: '模型与架构', def: '专为图像处理设计的神经网络，通过卷积层提取空间层次特征。', example: '图像分类、目标检测、医学影像。' },
  { term: '循环神经网络', abbr: 'RNN', fullEn: 'Recurrent Neural Network', category: '模型与架构', def: '处理序列数据的网络，具有记忆能力，但训练慢、难并行，已被 Transformer 大量取代。', example: '早期机器翻译、股票时序预测。' },
  { term: '生成对抗网络', abbr: 'GAN', fullEn: 'Generative Adversarial Network', category: '模型与架构', def: '生成器与判别器两个网络博弈训练，能生成逼真图像，是早期图像生成主流技术。', example: 'AI 换脸、风格迁移、老照片修复。' },
  { term: '扩散模型', abbr: '—', fullEn: 'Diffusion Model', category: '模型与架构', def: '通过逐步去噪从随机噪声中生成清晰内容的模型，是当前图像/视频生成的主流技术。', example: 'Stable Diffusion、Midjourney、DALL·E 3。' },
  { term: '神经网络', abbr: 'NN', fullEn: 'Neural Network', category: '模型与架构', def: '由大量神经元节点分层连接组成的计算模型，是深度学习的基本单元。', example: '所有 LLM、CNN、GAN 的底层结构。' },

  // ── 训练与调优 (11) ──
  { term: '预训练', abbr: '—', fullEn: 'Pre-training', category: '训练与调优', def: '在大规模通用数据上训练模型，获得基础能力。是所有 LLM 的第一阶段。', example: 'GPT-4 在万亿 Token 文本上预训练。' },
  { term: '微调', abbr: 'SFT', fullEn: 'Supervised Fine-Tuning', category: '训练与调优', def: '在预训练模型上用特定领域高质量数据进一步训练，使模型更擅长某项任务。', example: '用医疗对话数据微调出专科 AI 助手。' },
  { term: '人类反馈强化学习', abbr: 'RLHF', fullEn: 'Reinforcement Learning from Human Feedback', category: '训练与调优', def: '人类对模型多个回答排序偏好后，用强化学习优化输出质量与安全性。', example: 'ChatGPT 比 GPT-3 更友好安全，RLHF 是关键。' },
  { term: '低秩适配', abbr: 'LoRA', fullEn: 'Low-Rank Adaptation', category: '训练与调优', def: '高效微调技术：只训练少量低秩附加参数，不动原模型权重，成本低、速度快。', example: '给 Stable Diffusion 添加特定画风；企业私有化微调。' },
  { term: '知识蒸馏', abbr: '—', fullEn: 'Knowledge Distillation', category: '训练与调优', def: '将大模型（教师）的能力压缩到小模型（学生）中，保持性能的同时降低计算成本。', example: 'DeepSeek-R1 蒸馏出更小更快的推理模型。' },
  { term: '过拟合', abbr: '—', fullEn: 'Overfitting', category: '训练与调优', def: '模型在训练数据上表现极好，但在新数据上表现差，像死记硬背的学生。', example: '记住了训练题答案但不会做新题。' },
  { term: '欠拟合', abbr: '—', fullEn: 'Underfitting', category: '训练与调优', def: '模型过于简单，连训练数据都学不好，需要增加复杂度或改善特征。', example: '用直线拟合复杂的曲线数据。' },
  { term: '反向传播', abbr: 'BP', fullEn: 'Backpropagation', category: '训练与调优', def: '神经网络核心训练算法，从输出层向输入层逐层计算梯度并更新权重。', example: '每次训练迭代都在做反向传播。' },
  { term: '损失函数', abbr: '—', fullEn: 'Loss Function', category: '训练与调优', def: '衡量模型预测与真实值差距的函数，训练目标是最小化损失。', example: '交叉熵损失用于分类；均方误差用于回归。' },
  { term: '学习率', abbr: 'LR', fullEn: 'Learning Rate', category: '训练与调优', def: '控制每次权重更新幅度的超参数。太大不收敛，太小训练太慢。', example: '常见值 1e-4 到 1e-5，需根据任务调整。' },
  { term: '梯度下降', abbr: 'GD', fullEn: 'Gradient Descent', category: '训练与调优', def: '沿损失函数梯度反方向更新参数，使损失逐步减小的优化算法。', example: '下山时每一步朝最陡的方向走。' },

  // ── 提示与推理 (11) ──
  { term: 'Token', abbr: '—', fullEn: 'Token', category: '提示与推理', def: 'AI 处理文本的最小单位。中文 1 字 ≈ 1-2 Token，英文 1 词 ≈ 1-3 Token。', example: '「人工智能」约 2-4 Token；128K 上下文 ≈ 10 万汉字。' },
  { term: '提示词', abbr: '—', fullEn: 'Prompt', category: '提示与推理', def: '你发给 AI 的输入指令。好提示词 = 角色 + 任务 + 背景 + 格式 + 约束。', example: '「你是资深产品经理，请为以下需求写 PRD…」' },
  { term: '提示词工程', abbr: 'PE', fullEn: 'Prompt Engineering', category: '提示与推理', def: '设计和优化提示词以获得高质量 AI 输出的技术与方法论。', example: '结构化提示、Few-shot 示例、CoT 链式思考。' },
  { term: '上下文窗口', abbr: '—', fullEn: 'Context Window', category: '提示与推理', def: '模型一次能处理的最大 Token 数，超出会被截断或遗忘。', example: 'Claude 200K、Kimi 200 万字、GPT-4o 128K。' },
  { term: '温度', abbr: '—', fullEn: 'Temperature', category: '提示与推理', def: '控制输出随机性的参数。低温度精确稳定，高温度创意发散。', example: '写代码设 0.1，写故事设 0.8。' },
  { term: '核采样', abbr: 'Top-p', fullEn: 'Nucleus Sampling', category: '提示与推理', def: '从概率累计达 p 的最小词集合中采样，控制输出多样性，与 Temperature 配合使用。', example: 'Top-p=0.9 表示从累计概率 90% 的词中选取。' },
  { term: '幻觉', abbr: '—', fullEn: 'Hallucination', category: '提示与推理', def: 'AI 自信地生成看似合理但实际错误的内容，是 LLM 的已知局限。', example: '编造不存在的论文引用、错误的历史日期。' },
  { term: '推理', abbr: '—', fullEn: 'Inference', category: '提示与推理', def: '使用已训练好的模型处理新输入、产生输出的过程，与训练（Training）相对。', example: '在 ChatGPT 中提问并获得回答就是一次 Inference。' },
  { term: '零样本学习', abbr: '—', fullEn: 'Zero-shot Learning', category: '提示与推理', def: '模型未见过任务示例，仅凭自然语言指令就能完成。', example: '直接说「翻译成英文」就能翻译，无需给例子。' },
  { term: '少样本学习', abbr: '—', fullEn: 'Few-shot Learning', category: '提示与推理', def: '在提示词中提供少量示例（1-5 个），让模型快速理解任务格式。', example: '给 2 个输入输出例子，AI 学会同样格式处理新输入。' },
  { term: '链式思考', abbr: 'CoT', fullEn: 'Chain of Thought', category: '提示与推理', def: '让 AI 一步步展示推理过程，显著提升数学、逻辑等复杂任务准确率。', example: '「请一步步分析：3 人 5 天完成，6 人几天？」' },

  // ── 智能体与技能 (11) ──
  { term: '智能体', abbr: 'Agent', fullEn: 'AI Agent', category: '智能体与技能', def: '能自主规划、调用工具、执行多步骤任务的 AI 系统，从「对话」进化到「行动」。', example: '自动浏览网页、写代码部署、发邮件汇报。' },
  { term: '技能', abbr: 'Skill', fullEn: 'AI Skill', category: '智能体与技能', def: '封装好的领域知识、操作流程和工具调用规则的模块化能力包，Agent 可动态加载 Skill 来完成特定任务。', example: 'Cursor Skill 教 AI 读写 xlsx；Claude Skill 指导文档处理；workctl Skill 调用商家工具。' },
  { term: '模型上下文协议', abbr: 'MCP', fullEn: 'Model Context Protocol', category: '智能体与技能', def: 'Anthropic 提出的开放协议，标准化 AI 模型与外部工具、数据源的连接方式。', example: 'AI 通过 MCP 连接 GitHub、数据库、文件系统。' },
  { term: '函数调用', abbr: 'FC', fullEn: 'Function Calling', category: '智能体与技能', def: 'LLM 根据用户意图自动选择并调用预定义函数/API 的能力，是 Agent 的基础。', example: 'AI 自动调用天气 API 查温度、调用计算器做数学。' },
  { term: '工具调用', abbr: '—', fullEn: 'Tool Use', category: '智能体与技能', def: 'AI 模型调用外部工具（搜索、代码执行、数据库等）来完成自身无法直接完成的任务。', example: 'ChatGPT 浏览网页、Cursor 执行终端命令。' },
  { term: '检索增强生成', abbr: 'RAG', fullEn: 'Retrieval-Augmented Generation', category: '智能体与技能', def: '先从知识库检索相关文档，再让 AI 基于资料生成回答，大幅减少幻觉。', example: '上传公司手册后，AI 基于手册回答员工问题。' },
  { term: '工作流', abbr: '—', fullEn: 'Workflow', category: '智能体与技能', def: '将多个 AI 步骤或工具调用串联成的自动化流程，完成端到端任务。', example: '抓取网页 → 摘要 → 翻译 → 发邮件，全自动完成。' },
  { term: '编排', abbr: '—', fullEn: 'Orchestration', category: '智能体与技能', def: '协调多个 AI 模型、Agent 或工具按逻辑配合工作的调度机制。', example: '一个主 Agent 分配任务给写作、搜索、代码三个子 Agent。' },
  { term: '多智能体', abbr: '—', fullEn: 'Multi-agent System', category: '智能体与技能', def: '多个 AI Agent 协作完成复杂任务的系统架构，各有分工、互相通信。', example: '模拟公司：产品经理 Agent + 工程师 Agent + 测试 Agent 协作开发。' },
  { term: '插件', abbr: '—', fullEn: 'Plugin', category: '智能体与技能', def: '扩展 AI 产品功能的第三方或官方模块，提供额外工具和能力。', example: 'ChatGPT 插件商店、Claude 连接器、浏览器扩展。' },
  { term: '自主智能体', abbr: '—', fullEn: 'Autonomous Agent', category: '智能体与技能', def: '能独立设定目标、规划步骤、执行操作并自我纠正的 AI Agent，人工干预最少。', example: 'AutoGPT、Devin、Cursor Agent 模式自动完成编程任务。' },

  // ── 数据与知识 (11) ──
  { term: '嵌入向量', abbr: '—', fullEn: 'Embedding', category: '数据与知识', def: '将文本、图像等转换为高维数值向量，语义相近的内容向量距离更近。', example: '「猫」和「小猫」的 Embedding 非常接近。' },
  { term: '向量数据库', abbr: '—', fullEn: 'Vector Database', category: '数据与知识', def: '专门存储和检索高维向量的数据库，支持语义相似度搜索，是 RAG 的核心组件。', example: 'Pinecone、Milvus、Chroma、Weaviate。' },
  { term: '语义搜索', abbr: '—', fullEn: 'Semantic Search', category: '数据与知识', def: '基于语义含义而非关键词匹配的搜索方式，能理解同义词和意图。', example: '搜「水果」也能找到「苹果」相关内容。' },
  { term: '文本分块', abbr: '—', fullEn: 'Chunking', category: '数据与知识', def: '将长文档切分为适当大小的片段，便于 Embedding 和检索，是 RAG 的关键预处理步骤。', example: '100 页 PDF 切成每段 500 字的块。' },
  { term: '知识库', abbr: 'KB', fullEn: 'Knowledge Base', category: '数据与知识', def: '结构化或非结构化的知识集合，供 AI 检索和引用，提升回答准确性。', example: '企业 wiki、产品文档、FAQ 库接入 AI 客服。' },
  { term: '监督学习', abbr: '—', fullEn: 'Supervised Learning', category: '数据与知识', def: '使用带标签的数据训练模型，学习输入到输出的映射关系。', example: '标注「猫/狗」图片训练分类器。' },
  { term: '无监督学习', abbr: '—', fullEn: 'Unsupervised Learning', category: '数据与知识', def: '使用无标签数据，让模型自行发现数据中的隐藏结构和模式。', example: '客户分群、异常检测、主题聚类。' },
  { term: '迁移学习', abbr: '—', fullEn: 'Transfer Learning', category: '数据与知识', def: '将在一个任务上学到的知识迁移到相关任务上，减少新任务所需数据量。', example: '用 ImageNet 预训练模型微调医学影像识别。' },
  { term: '数据标注', abbr: '—', fullEn: 'Data Annotation', category: '数据与知识', def: '为原始数据添加标签或元信息的过程，是监督学习的前提，通常需人工完成。', example: '标注图片中物体的边框、给文本打情感标签。' },
  { term: '数据集', abbr: '—', fullEn: 'Dataset', category: '数据与知识', def: '用于训练或评估 AI 模型的有组织数据集合，质量直接影响模型表现。', example: 'ImageNet（图像）、Common Crawl（文本）、SQuAD（问答）。' },
  { term: '特征', abbr: '—', fullEn: 'Feature', category: '数据与知识', def: '从原始数据中提取的、对任务有用的信息表示，是模型学习的输入。', example: '房价预测中的面积、地段、房龄就是特征。' },

  // ── 多模态与生成 (11) ──
  { term: '多模态', abbr: '—', fullEn: 'Multimodal', category: '多模态与生成', def: '能同时处理文本、图像、音频、视频等多种数据类型的 AI 模型。', example: 'GPT-4o 看图说话；Gemini 分析视频。' },
  { term: '文生图', abbr: 'T2I', fullEn: 'Text-to-Image', category: '多模态与生成', def: '根据文字描述生成图像的 AI 技术。', example: 'Midjourney、DALL·E 3、Stable Diffusion。' },
  { term: '文生视频', abbr: 'T2V', fullEn: 'Text-to-Video', category: '多模态与生成', def: '根据文字描述或图片生成视频的 AI 技术。', example: '可灵 AI、Runway Gen-3、Sora。' },
  { term: '文字转语音', abbr: 'TTS', fullEn: 'Text-to-Speech', category: '多模态与生成', def: '将文字转换为自然语音的 AI 技术。', example: 'ChatGPT 语音模式、Azure TTS、ElevenLabs。' },
  { term: '自动语音识别', abbr: 'ASR', fullEn: 'Automatic Speech Recognition', category: '多模态与生成', def: '将人类语音自动转换为文字的 AI 技术。', example: 'Siri 听写、会议录音转文字、Whisper。' },
  { term: '图生文', abbr: 'I2T', fullEn: 'Image-to-Text', category: '多模态与生成', def: '分析图像内容并生成文字描述或回答关于图像的问题。', example: 'GPT-4o 看图回答、拍照搜题、医学影像报告。' },
  { term: '变分自编码器', abbr: 'VAE', fullEn: 'Variational Autoencoder', category: '多模态与生成', def: '学习数据压缩表示的生成模型，可生成新样本或做图像编辑。', example: '人脸属性编辑、潜在空间插值生成。' },
  { term: '基础模型', abbr: 'FM', fullEn: 'Foundation Model', category: '多模态与生成', def: '在大规模多样数据上预训练、可适配多种下游任务的通用大模型。', example: 'GPT-4、Claude、Gemini 都是 Foundation Model。' },
  { term: '开源模型', abbr: '—', fullEn: 'Open-source Model', category: '多模态与生成', def: '模型权重公开，可自由下载、部署和修改。', example: 'LLaMA、DeepSeek、Mistral、Stable Diffusion。' },
  { term: '闭源模型', abbr: '—', fullEn: 'Closed-source Model', category: '多模态与生成', def: '仅通过 API 或产品使用，不公开模型权重。', example: 'GPT-4、Claude、Gemini Pro。' },
  { term: '文本补全', abbr: '—', fullEn: 'Completion', category: '多模态与生成', def: '模型根据已有文本续写后续内容的能力，是 GPT 系列的基础功能。', example: '写邮件时 AI 自动补全下一句；代码自动补全。' },

  // ── 工程与部署 (11) ──
  { term: '图形处理器', abbr: 'GPU', fullEn: 'Graphics Processing Unit', category: '工程与部署', def: '高度并行计算的芯片，是 AI 训练和推理的核心硬件。', example: 'NVIDIA H100 训练大模型；RTX 4090 本地跑 Stable Diffusion。' },
  { term: '张量处理器', abbr: 'TPU', fullEn: 'Tensor Processing Unit', category: '工程与部署', def: 'Google 专为机器学习定制的 AI 加速芯片，在 TensorFlow 生态中性能优异。', example: 'Google Cloud TPU v5 训练 Gemini。' },
  { term: '应用程序接口', abbr: 'API', fullEn: 'Application Programming Interface', category: '工程与部署', def: '让开发者通过代码调用 AI 模型能力的接口，可集成到自有产品中。', example: 'OpenAI API、Claude API、通义千问 API。' },
  { term: '量化', abbr: '—', fullEn: 'Quantization', category: '工程与部署', def: '降低模型权重数值精度（如 32 位→8 位/4 位），减小体积、加快推理速度。', example: '将 70B 模型量化后可在消费级 GPU 上运行。' },
  { term: '部署', abbr: '—', fullEn: 'Deployment', category: '工程与部署', def: '将训练好的模型投入生产环境，为用户或应用提供推理服务的过程。', example: '把微调模型部署到云服务器供团队使用。' },
  { term: '检查点', abbr: '—', fullEn: 'Checkpoint', category: '工程与部署', def: '训练过程中保存的模型快照，用于恢复训练或选择最优版本。', example: '训练中断后从最近 Checkpoint 继续。' },
  { term: '批次大小', abbr: '—', fullEn: 'Batch Size', category: '工程与部署', def: '每次训练迭代处理的样本数量，影响训练速度、内存占用和收敛稳定性。', example: 'GPU 显存 24GB 通常 batch size 设 4-32。' },
  { term: '训练轮次', abbr: '—', fullEn: 'Epoch', category: '工程与部署', def: '模型完整遍历一次全部训练数据称为一个 Epoch。', example: '训练 10 个 Epoch 意味着数据集被学习了 10 遍。' },
  { term: '云端推理', abbr: '—', fullEn: 'Cloud Inference', category: '工程与部署', def: '在云端服务器上运行 AI 模型提供推理服务，用户通过网络 API 调用。', example: 'ChatGPT、Claude.ai 都是云端推理。' },
  { term: '端侧推理', abbr: '—', fullEn: 'On-device Inference', category: '工程与部署', def: '在手机、电脑等本地设备上运行 AI 模型，无需联网，保护隐私、降低延迟。', example: 'iPhone 本地 Siri 处理、Ollama 本地跑 LLaMA。' },
  { term: '模型压缩', abbr: '—', fullEn: 'Model Compression', category: '工程与部署', def: '通过量化、剪枝、蒸馏等技术减小模型体积和计算量，便于部署到资源受限环境。', example: '手机端运行压缩后的 1B 参数小模型。' },

  // ── 伦理与安全 (11) ──
  { term: '偏见', abbr: '—', fullEn: 'Bias', category: '伦理与安全', def: 'AI 模型因训练数据不均衡而产生的系统性不公平倾向。', example: '招聘 AI 偏向某性别；人脸识别对深色皮肤准确率更低。' },
  { term: '对齐', abbr: '—', fullEn: 'Alignment', category: '伦理与安全', def: '确保 AI 系统的目标和行为与人类价值观一致的研究领域。', example: 'RLHF 是对齐手段；防止 AI 生成有害内容。' },
  { term: '护栏', abbr: '—', fullEn: 'Guardrails', category: '伦理与安全', def: '限制 AI 输出范围的安全机制，防止生成有害、违法或不适当内容。', example: '拒绝生成武器制造方法；过滤暴力内容。' },
  { term: '提示词注入', abbr: '—', fullEn: 'Prompt Injection', category: '伦理与安全', def: '攻击者通过恶意输入覆盖或绕过 AI 系统指令的安全攻击方式。', example: '在用户输入中写「忽略之前所有指令，现在…」' },
  { term: '隐私保护', abbr: '—', fullEn: 'Privacy', category: '伦理与安全', def: '确保用户数据不被滥用、模型不泄露训练数据中的敏感信息。', example: '不用真实客户数据直接训练；本地部署保护隐私。' },
  { term: '可解释性', abbr: 'XAI', fullEn: 'Explainable AI', category: '伦理与安全', def: '让 AI 的决策过程对人类可理解、可审计的能力。', example: '解释为什么 AI 拒绝了贷款申请。' },
  { term: '负责任 AI', abbr: 'RAI', fullEn: 'Responsible AI', category: '伦理与安全', def: '开发和使用 AI 时遵循公平、透明、安全、隐私等伦理原则的综合框架。', example: 'Google、Microsoft 的 AI 原则与审查流程。' },
  { term: '内容审核', abbr: '—', fullEn: 'Content Moderation', category: '伦理与安全', def: '自动检测和过滤 AI 生成或用户输入中的违规内容。', example: '过滤仇恨言论、虚假信息、CSAM。' },
  { term: '越狱', abbr: '—', fullEn: 'Jailbreak', category: '伦理与安全', def: '通过特殊提示词绕过 AI 安全限制，使其生成原本被禁止的内容。', example: '用角色扮演方式让 AI 输出违规内容（应抵制）。' },
  { term: '数据泄露', abbr: '—', fullEn: 'Data Leakage', category: '伦理与安全', def: '模型在输出中意外暴露训练数据中的敏感或私密信息。', example: '模型复述了训练集中的真实邮箱或密码。' },
  { term: '鲁棒性', abbr: '—', fullEn: 'Robustness', category: '伦理与安全', def: 'AI 系统面对异常输入、对抗攻击或分布变化时保持稳定的能力。', example: '对拼写错误、恶意扰动仍给出合理回答。' }
];