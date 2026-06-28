(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('en', {
    aiOverview: [
      {
        id: 'what',
        icon: '🌐',
        color: 'var(--accent-teal-dim)',
        tag: '01 · Starting point',
        navLabel: 'What is AI',
        title: 'What is AI?',
        lead: 'Artificial Intelligence (AI) is the umbrella term for technologies that let machines simulate intelligent human behavior—finding patterns in data, understanding language, making judgments, and generating text, images, code, and audio/video. It is not a single product but a collection of methods and engineering systems.',
        intro: 'When people say "AI" in the news and on social media today, they usually mean large language models (LLMs) and generative AI (GenAI): you type natural language and get answers, drafts, or creative work. The first step in understanding AI is separating three things: the technical concept, the product form, and how you use it.',
        subsections: [
          {
            title: 'A 30-second everyday analogy',
            text: 'Think of modern AI as an intern who has read a huge library and responds instantly: great at organizing, drafting, brainstorming, and connecting ideas—but without your business context by default, and not guaranteed to be factually correct every time. You set goals, provide materials, and verify results; AI speeds you up and expands your thinking.',
            items: [
              'You provide: task goals, background materials, format requirements, quality standards',
              'AI provides: first drafts, alternatives, explanations, structured breakdowns',
              'You verify: fact-checking, logical judgment, final decisions, and anything published externally'
            ]
          },
          {
            title: 'Three waves of development (know the arc)',
            text: 'AI did not explode overnight—it went through several paradigm shifts. Knowing the history helps explain why today\'s AI is centered on conversation and generation.',
            items: [
              '1956–1980s Symbolic AI: rules and knowledge bases for reasoning—interpretable but hard to cover complex reality',
              '1990s–2010s Statistical learning: learn patterns from data automatically; recommendation, risk control, and speech recognition rose',
              '2012–present Deep learning: neural networks + large-scale compute and data; CV, speech, LLMs, and GenAI',
              '2022+ Generative AI goes mainstream: ChatGPT made "natural language drives output" the default interaction'
            ]
          }
        ],
        points: [
          { label: 'What people mean by AI today', text: 'Mostly machine learning systems trained on big data—especially LLMs (GPT, Claude, Qwen) and image/video generation models. They generate seemingly semantic output by "predicting the next token/pixel."' },
          { label: 'Hierarchy', text: 'Artificial Intelligence (AI) ⊃ Machine Learning (ML) ⊃ Deep Learning (DL) ⊃ Large Language Models (LLM). Further right = more specialized, but also more data, compute, and engineering.' },
          { label: 'Training vs inference', text: 'Training is "studying for an exam"—adjusting model parameters on massive data; costly and slow. Inference is "taking the exam"—the model generates results each time you ask; that is the everyday usage stage.' },
          { label: 'ANI vs AGI', text: 'All commercial systems today are narrow AI (ANI): strong within their training distribution, limited cross-domain transfer. AGI (human-like broad reasoning and action) has no agreed timeline—do not treat current products as omniscient agents.' },
          { label: 'Discriminative vs generative', text: 'Discriminative AI classifies and judges (spam detection, medical imaging screening, risk scoring); generative AI creates content (reports, images, code, voiceover). Public excitement today is mostly generative.' },
          { label: 'Multimodal', text: 'Newer models handle text, images, audio, video, and even code files together. You can "send a screenshot for explanation," "upload a PDF for summary," or "talk by voice."' },
          { label: 'Hallucination', text: 'AI may confidently invent facts, citations, or numbers—because it optimizes for "fluent and plausible" not "necessarily correct." Always verify numbers, regulations, medical, and contract scenarios.' },
          { label: 'Humans stay in the loop', text: 'Reliable deployment is "AI drafts + human reviews": AI handles speed and coverage; humans handle truth, compliance, and final accountability.' }
        ],
        note: 'The 1956 Dartmouth conference coined "artificial intelligence." From "writing rules" to "learning from data" to "generating content," AI\'s boundaries keep expanding—but the core is unchanged: it augments human ability, it does not automatically bear consequences. After this section you should explain what AI is, what people usually mean by AI today, and why you cannot blindly trust every output.'
      },
      {
        id: 'capabilities',
        icon: '⚡',
        color: 'var(--accent-amber-dim)',
        tag: '02 · Capability map',
        navLabel: 'What it can do',
        title: 'What can AI do?',
        lead: 'Today\'s AI covers a huge share of knowledge work, creative work, and process work—from writing an email to analyzing a contract, from generating posters to auto-summarizing daily reports. The value is not replacing you but compressing the time from 0 to 60% so you reach judgment and polish faster.',
        intro: 'Below are 8 capability domains. Each includes what it can do, typical scenarios, and how to collaborate with AI efficiently. Remember: AI gives drafts, you give standards; AI expands ideas, you make decisions.',
        capabilities: [
          {
            image: 'assets/capabilities/cap-writing.jpg',
            title: 'Writing & communication',
            desc: 'Turn fuzzy ideas into text you can send, report, or publish.',
            detail: 'Great for structured expression: email, weekly reports, proposals, speeches, product copy, social posts, translation, and tone polishing. AI excels at "skeleton first, flesh second."',
            examples: [
              'Expand 3 bullet points into a 500-word weekly report highlighting data and risks',
              'Rewrite technical docs for customers (keep key facts)',
              'Generate formal / casual / English tone variants of the same content',
              'Meeting notes: organize decisions, todos, and owners from rough notes'
            ],
            tip: 'Give audience, length, tone, and must-include facts—output quality jumps.'
          },
          {
            image: 'assets/capabilities/cap-coding.jpg',
            title: 'Programming & debugging',
            desc: 'Speed up writing, reading, and changing code end to end.',
            detail: 'From single-function completion to cross-file refactors, AI can explain errors, generate tests, script data processing, and turn requirements into runnable prototypes. Non-programmers can also get web pages, small tools, and automation scripts via natural language.',
            examples: [
              'Describe a need → get HTML/JS mini-tool → verify in the browser',
              'Paste error logs → get likely causes and fix patches',
              'Add unit tests and edge cases for existing functions',
              'Turn repetitive data work into a commented Python script'
            ],
            tip: 'Provide project context, expected I/O, and stack constraints; when changing code ask for "what changed and how to verify."'
          },
          {
            image: 'assets/capabilities/cap-design.jpg',
            title: 'Images & design',
            desc: 'Quick visual drafts, style exploration, and creative assets.',
            detail: 'Generate illustrations, posters, product mood boards, logo directions, and UI concepts from text. Best for brainstorming and early visual direction—not replacing a full brand system.',
            examples: [
              '3 cover style drafts for a course (tech / magazine / minimal)',
              'E-commerce hero image concepts from product selling points',
              'Turn hand-drawn sketch descriptions into quality concept art',
              'Batch social images with consistent palette and aspect ratio'
            ],
            tip: 'Specify subject, composition, lighting, style reference, and aspect ratio; when iterating say what to keep vs change.'
          },
          {
            image: 'assets/capabilities/cap-av.jpg',
            title: 'Audio & video creation',
            desc: 'From text to publishable audio, music, and video clips.',
            detail: 'Text-to-video, image-to-video, AI voiceover, voice cloning, music generation, subtitle translation, and simple edit instructions. Good for short talking-head videos, course intros, and ad concept reels.',
            examples: [
              'Turn article summary into 60-second script + voiceover',
              'Clone your voice for course narration (with legal permission)',
              'Generate product mood video from scene descriptions',
              'Auto-generate bilingual subtitles and titles for existing video'
            ],
            tip: 'Lock duration, aspect ratio, pacing, and audience first; for voice check emotion, pauses, and pronunciation.'
          },
          {
            image: 'assets/capabilities/cap-analytics.jpg',
            title: 'Analysis & research',
            desc: 'Turn information floods into readable insights and actionable conclusions.',
            detail: 'Helps with competitor scans, trend summaries, feedback clustering, Excel analysis frameworks, and survey analysis outlines. Strong at structured synthesis and hypothesis generation; weak at unverified precise statistics.',
            examples: [
              'Upload 20 user comments → prioritize pain points and improvements',
              'Compare 3 competitors → feature table and differentiation opportunities',
              'Turn sales data description into analysis framework and viz suggestions',
              'After long reports extract risks, key numbers, and items to verify'
            ],
            tip: 'Provide raw material, analysis goal, and decision context; ask to label "confirmed / inferred / needs verification."'
          },
          {
            image: 'assets/capabilities/cap-agent.jpg',
            title: 'Automation & Agents',
            desc: 'Let AI run multi-step tasks by rules—not just answer one line.',
            detail: 'Agents can search, read/write files, run scripts, send notifications, and execute on Cron schedules. Good for "daily industry digest," "monitor competitor site changes," and chaining email + spreadsheets + docs.',
            examples: [
              'Every weekday 8:30 auto-summarize industry news and push digest',
              'Watch competitor sites; generate comparison when updates appear',
              'Chain email + spreadsheet + doc into one approval prep flow',
              'Auto-generate weekly report from template with today\'s data'
            ],
            tip: 'Pilot in a small scope first; define retry, logging, and human review checkpoints.'
          },
          {
            image: 'assets/capabilities/cap-learning.jpg',
            title: 'Learning & tutoring',
            desc: 'Explain concepts, quiz you, and plan learning paths at your pace.',
            detail: 'Use Feynman technique, Socratic questioning, layered explanations, and wrong-answer review to break hard topics into digestible steps. Great for exams, new skills, and quick domain onboarding.',
            examples: [
              'Explain Transformer with everyday analogy, then 3 self-check questions',
              'Customize a 7-day Python intro plan for your background',
              'Layer a paper: big picture → method → limitations',
              'Generate variant questions for weak spots'
            ],
            tip: 'Tell AI what you already know, your target level, and preferred style (examples / diagrams / drills).'
          },
          {
            image: 'assets/capabilities/cap-search.jpg',
            title: 'Search & Q&A',
            desc: 'Faster structured answers than traditional link lists.',
            detail: 'AI search synthesizes sources into summaries, comparisons, and citation trails; document Q&A searches your uploaded PDFs/notes precisely. Good for research, learning, and pre-writing information gathering.',
            examples: [
              'Research a tech approach → pros/cons and fit scenarios',
              'Upload contract/paper → ask about specific clauses or paragraphs',
              'Merge 5 industry articles into one-page executive summary',
              'Quickly check common sources and controversies around a claim'
            ],
            tip: 'Ask for sources and citations; cross-check key conclusions with at least two independent sources.'
          }
        ],
        collabTips: {
          title: 'Four principles for effective collaboration',
          items: [
            { label: 'Give full context', text: 'Background, goals, audience, constraints, counterexamples—the more specific, the more usable the output.' },
            { label: 'Step by step, not one shot', text: 'Split complex work into outline → draft → revise → final; verify each step before continuing.' },
            { label: 'Ask for format & standards', text: 'Specify length, structure, tone, required fields—avoid generic fluff.' },
            { label: 'Humans judge last', text: 'Facts, numbers, compliance, and external publishing must be human-confirmed.' }
          ]
        },
        boundaries: {
          title: 'What it still struggles with or needs caution',
          items: [
            'High-precision real-time data (second-level stock prices, unreleased internal data)—needs authoritative data feeds',
            'Complex math proofs and rigorous derivation—can err; verify key steps',
            'Final legal/medical/financial professional judgment—AI assists only; cannot replace licensed professionals',
            'Privacy, copyright, likeness in generation and publishing—follow laws and platform policies',
            'Long-term memory of all your private information—default sessions do not persist; build your own knowledge base or workflow'
          ]
        },
        note: 'AI is strongest on tasks with clear patterns, fast drafting, and batch variants; weakest on guaranteed factual correctness, legal liability, and unstated implicit constraints. Treat it as an accelerator, not autopilot. Next: choosing specific tools.'
      },
      {
        id: 'tools',
        icon: '🧰',
        color: 'rgba(167, 139, 250, 0.15)',
        tag: '03 · Tool landscape',
        navLabel: 'Which tools',
        title: 'What AI tools are out there?',
        lead: 'There is no "best" AI—only the best fit. Below is the 2026 mainstream tool map; the Tools module on this site has detailed coverage of 43 apps.',
        toolGroups: [
          { category: 'Chat assistants', emoji: '💬', tools: 'ChatGPT, Claude, Gemini, Qwen, DeepSeek, Kimi, Doubao, Grok', use: 'Daily Q&A, writing, analysis, coding' },
          { category: 'Coding & dev', emoji: '👨‍💻', tools: 'Cursor, Claude Code, Codex CLI, Grok Build, Copilot, Gemini CLI, Aider, Cline, Continue, Zcode, Windsurf, Bolt.new, Amazon Q Developer', use: 'Terminal agents, IDE completion, Git pair programming, one-line site builds' },
          { category: 'Image creation', emoji: '🎨', tools: 'Midjourney, DALL·E 3, Stable Diffusion, Flux', use: 'Illustration, design, visual ideation' },
          { category: 'Video & audio', emoji: '🎵', tools: 'Runway, Sora, Kling AI, Suno, ElevenLabs, Fish Audio', use: 'Video generation, music, voiceover & cloning' },
          { category: 'Office productivity', emoji: '📋', tools: 'Microsoft Copilot, Notion AI, Gamma', use: 'Docs, slides, meeting notes, collaboration' },
          { category: 'Agent automation', emoji: '🦞', tools: 'OpenClaw, Dify, Coze, n8n, Manus', use: 'Scheduled tasks, workflow orchestration, bots, autonomous execution' },
          { category: 'Search & research', emoji: '🔎', tools: 'Perplexity, Metaso AI Search, NotebookLM', use: 'Research, literature analysis, fact-checking' }
        ],
        note: 'Beginners: start with one chat AI (ChatGPT or Qwen) plus one tool most relevant to your work—do not install everything at once.'
      },
      {
        id: 'impact',
        icon: '🏙️',
        color: 'rgba(251, 113, 133, 0.12)',
        tag: '04 · Real-world impact',
        navLabel: 'Key domains',
        title: 'Where is AI already making a difference?',
        lead: 'AI is no longer a lab concept—it is reshaping how industries produce and how users experience products.',
        fields: [
          { icon: '🏥', name: 'Healthcare', cases: 'Medical imaging assist, drug molecule screening, clinical note summarization, health Q&A bots' },
          { icon: '🎓', name: 'Education & research', cases: 'Personalized tutoring, literature review, experiment data analysis, research writing assist' },
          { icon: '💰', name: 'Finance & business', cases: 'Fraud/risk control, intelligent customer service, market report generation, research aggregation' },
          { icon: '🛒', name: 'Retail & e-commerce', cases: 'Recommendation systems, smart support, product description generation, visual search' },
          { icon: '🏭', name: 'Manufacturing & industry', cases: 'Quality inspection, predictive maintenance, supply chain optimization, industrial robots' },
          { icon: '🎬', name: 'Content & media', cases: 'Copywriting, video editing, virtual anchors, multilingual localization' },
          { icon: '⚖️', name: 'Legal & government', cases: 'Contract review, regulation search, government Q&A, document drafting assist' },
          { icon: '🚗', name: 'Transport & mobility', cases: 'Driver assistance, route planning, autonomous driving R&D, traffic prediction' }
        ],
        note: 'Most applications are "specialized AI + domain data + human review"—not AI deciding alone.'
      },
      {
        id: 'future',
        icon: '🔭',
        color: 'var(--accent-teal-dim)',
        tag: '05 · Looking ahead',
        navLabel: 'Future outlook',
        title: 'How will AI evolve and change our lives?',
        lead: 'Technical progress is uncertain, but these directions are clearly affecting individuals and society.',
        timeline: [
          {
            period: 'Now (2024–2026)',
            items: [
              'Large models become the default interface—conversational AI in search, office, coding, and creation',
              'Multimodal maturity—one model sees images, hears audio, generates text/image/video',
              'AI Agents rise—from "answer questions" to "execute tasks autonomously"'
            ]
          },
          {
            period: 'Near term (3–5 years)',
            items: [
              'Personal AI assistants widespread—remember preferences, calendar, projects; proactive help',
              'Industry AI deeply embedded—education, healthcare, law get dedicated models and workflows',
              'Human-AI collaboration becomes standard—not using AI may significantly hurt career competitiveness'
            ]
          },
          {
            period: 'Further out (still exploring)',
            items: [
              'Artificial General Intelligence (AGI)—whether and when remains unsettled',
              'Embodied AI—AI in robots interacting with the physical world',
              'Social rules reshaped—employment, education, copyright, and privacy law keep evolving'
            ]
          }
        ],
        lifeChanges: [
          { icon: '🏠', title: 'Daily life', text: 'Sharper recommendations, smarter homes, much smaller language barriers' },
          { icon: '💼', title: 'How we work', text: 'Repetitive labor automated; humans focus more on creativity, decisions, relationships, and taste' },
          { icon: '🧠', title: 'Learning & growth', text: 'Everyone gets a "24/7 online tutor"—but critical thinking matters more than ever' },
          { icon: '🌍', title: 'Society', text: 'More equal access to information—and new challenges: misinformation, deepfakes' }
        ],
        note: 'In the AI era the most important skills are not "knowing one tool" but asking good questions, judging quality, learning continuously, and keeping humanistic judgment.'
      }
    ],

    fundamentals: [
      {
        icon: '🧠', color: 'var(--accent-teal-dim)',
        title: 'Artificial Intelligence', abbr: 'AI', fullEn: 'Artificial Intelligence',
        content: `
      <p><strong>Artificial Intelligence (AI)</strong> is the collection of technologies that let machines simulate intelligent behavior—learning, reasoning, perception, language understanding, planning, and creation. Coined at the 1956 Dartmouth conference, it has gone through symbolic AI, statistical learning, and deep learning waves.</p>
      <p>AI is not one technique but a large system including <strong>ML (Machine Learning)</strong>, <strong>DL (Deep Learning)</strong>, <strong>NLP (Natural Language Processing)</strong>, <strong>CV (Computer Vision)</strong>, robotics, and more. ChatGPT, self-driving cars, and face recognition are all AI applications we touch daily.</p>
      <p><strong>AGI (Artificial General Intelligence)</strong>: AI that can handle any intellectual task like a human—not yet achieved; a long-term research goal.</p>
      <div class="analogy"><strong>Everyday analogy:</strong> AI is the big idea of "intelligence," like "transportation"—cars, trains, and planes are specific forms.</div>
      <ul class="key-points"><li>Everyday "AI" ≈ data-driven machine learning systems</li><li>AI ⊃ ML ⊃ DL—scope narrows left to right</li><li>Discriminative AI judges; generative AI creates</li></ul>
    `
      },
      {
        icon: '📊', color: 'var(--accent-amber-dim)',
        title: 'Machine Learning', abbr: 'ML', fullEn: 'Machine Learning',
        content: `
      <p><strong>Machine Learning (ML)</strong> is AI's core subfield: computers discover patterns from data automatically instead of humans writing every if-else rule. Standard flow: collect data → feature engineering → train model → evaluate → deploy inference.</p>
      <p><strong>Three main paradigms:</strong></p>
      <ul class="key-points">
        <li><strong>Supervised Learning</strong>: labeled data, learn input→output mapping. Used for classification (spam detection), regression (house prices).</li>
        <li><strong>Unsupervised Learning</strong>: no labels, discover data structure. Used for clustering (user segments), dimensionality reduction (compression).</li>
        <li><strong>Reinforcement Learning (RL)</strong>: learn policies via reward signals. Used for game AI (AlphaGo), robot control.</li>
      </ul>
      <div class="analogy"><strong>Everyday analogy:</strong> Traditional programming is "teacher gives step-by-step answers"; machine learning is "give students many exercises and they infer the method."</div>
    `
      },
      {
        icon: '🔬', color: 'rgba(167, 139, 250, 0.15)',
        title: 'Deep Learning', abbr: 'DL', fullEn: 'Deep Learning',
        content: `
      <p><strong>Deep Learning (DL)</strong> is a branch of ML using multi-layer neural networks to automatically extract hierarchical features from raw data. More layers → more abstract concepts learned.</p>
      <p>In 2012 <strong>AlexNet</strong> won ImageNet decisively, marking the deep learning era. Breakthroughs followed in speech (Siri), vision (face recognition), and language (GPT).</p>
      <p><strong>Key ingredients:</strong> massive data + deep networks + strong compute (<strong>GPU, Graphics Processing Unit</strong>) = top performance. Training one large model can cost millions in compute.</p>
      <div class="analogy"><strong>Everyday analogy:</strong> Shallow learning is one sieve; deep learning is stacked filters, each catching a different grain size.</div>
    `
      },
      {
        icon: '🔗', color: 'var(--accent-teal-dim)',
        title: 'Neural Network', abbr: 'NN', fullEn: 'Neural Network',
        content: `
      <p><strong>Neural Network (NN)</strong> consists of many "neuron" nodes processing information in layers. Each layer transforms inputs with weights and biases, passes through activation functions, and feeds the next layer.</p>
      <p><strong>Backpropagation (BP)</strong> is the core training algorithm: compare prediction to truth, adjust weights layer by layer from output to input to reduce error.</p>
      <p>Common architectures: <strong>CNN (Convolutional Neural Network)</strong> excels at images; <strong>RNN (Recurrent Neural Network)</strong> handles sequences but has been largely replaced by Transformers.</p>
      <div class="analogy"><strong>Everyday analogy:</strong> Like a factory line—raw materials (data) pass through stages (layers) and become the finished product (prediction).</div>
    `
      },
      {
        icon: '⚡', color: 'var(--accent-amber-dim)',
        title: 'Transformer Architecture', abbr: '—', fullEn: 'Transformer Architecture',
        content: `
      <p>Google's 2017 paper <em>"Attention Is All You Need"</em> introduced the <strong>Transformer</strong> architecture and transformed NLP. Its core is <strong>Self-Attention</strong>: when processing each word, compute relevance weights to every other word in the sentence.</p>
      <p><strong>Core advantages:</strong></p>
      <ul class="key-points">
        <li>Solves long-range dependencies—first and last words interact directly</li>
        <li>Highly parallel—much faster training than RNNs</li>
        <li>Scales well—bigger models, stronger capabilities (scaling laws)</li>
      </ul>
      <p>All modern LLMs (GPT, Claude, Gemini, LLaMA) use Transformer <strong>decoder</strong> or <strong>encoder-decoder</strong> structures.</p>
      <div class="analogy"><strong>Everyday analogy:</strong> Reading a sentence you do not scan letter by letter—you grasp the whole line and your eyes focus on keywords. That is attention.</div>
    `
      },
      {
        icon: '💬', color: 'var(--accent-teal-dim)',
        title: 'Large Language Model', abbr: 'LLM', fullEn: 'Large Language Model',
        content: `
      <p><strong>Large Language Model (LLM)</strong> is a very large neural network trained on massive text; its core objective is <strong>predict the next token</strong>. Through that simple goal it learns grammar, facts, reasoning, code, multilingual ability, and more.</p>
      <p><strong>Key training stages:</strong></p>
      <ul class="key-points">
        <li><strong>Pre-training</strong>: vast general text, learn language foundations</li>
        <li><strong>SFT (Supervised Fine-Tuning)</strong>: high-quality dialogue data, learn to follow instructions</li>
        <li><strong>RLHF (Reinforcement Learning from Human Feedback)</strong>: human preference labels optimize answer quality and safety</li>
      </ul>
      <p><strong>Limits:</strong> knowledge cutoff dates, hallucinations, math and logic can still fail. Stay critical and verify key facts.</p>
      <div class="analogy"><strong>Everyday analogy:</strong> An LLM is like a scholar who read the whole internet library—fluent and broad, but may misremember details; cross-check important information.</div>
    `
      },
      {
        icon: '🎯', color: 'rgba(251, 113, 133, 0.12)',
        title: 'Generative AI', abbr: 'GenAI', fullEn: 'Generative Artificial Intelligence',
        content: `
      <p><strong>Generative AI (GenAI)</strong> creates new content—text, images, audio, video, code, 3D models. Unlike <strong>discriminative AI</strong> (classification, detection, prediction), GenAI's core is "creation."</p>
      <p><strong>Main technical routes:</strong></p>
      <ul class="key-points">
        <li><strong>Autoregressive models</strong>: generate token/pixel by token; e.g. GPT, DALL·E</li>
        <li><strong>Diffusion models</strong>: denoise from noise to image; e.g. Stable Diffusion, Midjourney</li>
        <li><strong>GAN (Generative Adversarial Network)</strong>: generator vs discriminator; early mainstream for images</li>
      </ul>
      <p><strong>Multimodal</strong> models like GPT-4o and Gemini understand and generate text, images, audio, and more in one system.</p>
      <div class="analogy"><strong>Everyday analogy:</strong> Discriminative AI is the "grader" (right or wrong); generative AI is the "writer + painter" (creates new work from scratch).</div>
    `
      },
      {
        icon: '🌐', color: 'rgba(167, 139, 250, 0.15)',
        title: 'Natural Language Processing', abbr: 'NLP', fullEn: 'Natural Language Processing',
        content: `
      <p><strong>Natural Language Processing (NLP)</strong> is the AI branch that lets computers understand, generate, and process human language—machine translation, sentiment analysis, summarization, Q&A, speech recognition, and more.</p>
      <p><strong>NLP evolution:</strong></p>
      <ul class="key-points">
        <li><strong>Rule era</strong>: hand-written grammar rules and dictionaries</li>
        <li><strong>Statistical era</strong>: probability from large corpora (N-gram)</li>
        <li><strong>Deep learning era</strong>: Word2Vec embeddings → RNN/LSTM → Transformer → LLM</li>
      </ul>
      <p>Today most NLP tasks are "unified" by LLMs—one model with different prompts can translate, summarize, classify, and generate. This is the <strong>unified NLP paradigm</strong>.</p>
      <div class="analogy"><strong>Everyday analogy:</strong> NLP is AI's "language department"—teaching machines to read, write, listen, and speak; the LLM is the straight-A student in that class.</div>
    `
      }
    ],

    fundamentalsFigcaption: 'At a glance: AI learns from data, understands your question via Transformer/LLM inference, and generates answers; modules below are expanded by default—click titles to collapse.',
    fundamentalsFigAlt: 'How AI works: data training, Transformer architecture, LLM inference to answers, and the hierarchy of AI containing ML and DL',

    sectionHeaders: {
      'ai-overview': { tag: 'Module 1.1 · Start here', title: 'AI overview', desc: 'Before deep dives: what AI is, what it can do, which tools exist, which fields it\'s changing, and where it\'s headed.' },
      fundamentals: { tag: 'Module 1.2', title: 'How does AI work?', desc: '8 fundamental modules: AI → ML → DL → Transformer → LLM → GenAI → NLP.' },
      knowledge: { tag: 'Module 1.3', title: 'AI knowledge base', desc: '100 common AI terms in 9 categories. Card study or quick glossary.' },
      apps: { tag: 'Module 2.1', title: 'Pick the right tools', desc: '43 mainstream AI apps by scenario, with features, audience, and getting-started tips.' },
      'prompt-examples': {
        tag: 'Prompt reference',
        title: 'Prompt examples by software type',
        desc: 'Seven categories—chat, coding, images, video, office, agents, and research—with scenarios, structure notes, and copy-ready prompts.',
      },
      'prompt-lab': {
        tag: 'Module 2.2',
        title: 'Prompt lab',
        desc: 'One workspace: pick a case → edit prompt → preview reply → go operate in real tools.',
        caseLabel: 'Practice cases',
        selectCaseBadge: 'Pick a case to start',
        copyPrompt: 'Copy prompt',
        formTitle: 'Prompt configuration',
        taskLabel: 'Task type',
        roleLabel: 'Role',
        rolePlaceholder: 'e.g. Senior product manager',
        contextLabel: 'Background',
        contextPlaceholder: 'Describe scenario, audience, constraints…',
        outputLabel: 'Expected output',
        outputPlaceholder: 'e.g. A 500-word PRD outline',
        toneLabel: 'Tone & style',
        tones: ['Professional & rigorous', 'Plain language', 'Creative & exploratory', 'Concise & direct'],
        generateBtn: 'Generate & simulate',
        simTitle: 'Prompt & reply · side-by-side simulation',
        simReset: 'Reset simulation',
        simEmptyTitle: 'Simulation not started',
        simEmptyDesc: 'Click a case above, or edit the left panel and hit "Generate & simulate." Prompt, AI reply, and next-step guide all appear in this window.',
        guideTitle: 'Simulation complete · try it in a real tool',
        guideToolsLabel: 'Recommended tools:',
        followupPlaceholder: 'Follow up, e.g. "make it shorter"…',
        sendBtn: 'Send',
        simDisclaimer: 'Local preset demo to understand prompt structure. Copy prompts to recommended tools for real results.'
      },
      'hands-on': {
        tag: 'Module 3.1 · Start here',
        title: 'Real software tutorials',
        desc: '30 step-by-step tutorials across coding, writing, images, video, audio, office, search, and Agent automation—follow along and ship real output.'
      },
      practice: {
        tag: 'Module 3.2',
        title: 'Scenario prompt templates',
        desc: '16 workplace and learning scenarios with recommended tools, step-by-step flows, and one-click copy prompt templates.'
      },
      monetize: {
        tag: 'Monetization map',
        title: 'Turn AI skills into real income',
        desc: '30 actionable side-income and freelancing directions—pick one that fits you and start validating.'
      },
      graduation: {
        tag: 'Official graduation',
        title: 'Congratulations — 7-day AI learning complete!',
        desc: 'You finished Cognition → Tools → Practice → Review. Review your report and plan the next 30 days.',
        learningFootprint: 'Learning footprint',
        planTag: 'Keep improving',
        planTitle: '30-day practice plan',
        planDesc: 'Practice with AI at least twice a week and turn what you learned into real habits. Auto-saves; export anytime.',
        focusLegend: 'Focus areas (multi-select)',
        exportPlan: 'Export plan',
        copyReport: 'Copy graduation report',
        saved: 'Auto-saved'
      },
      devices: { tag: 'Buying map', title: 'Choose devices by real needs', desc: '' },
      quiz: { tag: 'Module 4.1', title: 'Test your learning', desc: '100 curated questions on theory, terms, tools, and practice. Target 80/100+.' }
    },

    coachSections: [
      { id: 'hero', msgTemplate: '{name}, I\'m {teacher}! Ready to start your AI learning journey?' },
      { id: 'roadmap', msgTemplate: '{name}, this is the learning map. Follow the four phases in order—I\'ll be with you all the way.' },
      { id: 'path', msgTemplate: '{name}, this is your 7-day learning plan. Work through the Days in order; mark content you already know as mastered to skip—I\'ll track your progress.' },
      { id: 'ai-overview', msgTemplate: '{name}, start with AI Overview! Understand what AI is and what it can do—principles will feel much easier after that.' },
      { id: 'fundamentals', msgTemplate: '{name}, these 8 fundamentals are the foundation for understanding every AI tool.' },
      { id: 'knowledge', msgTemplate: '{name}, you don\'t need to memorize all 100 terms at once—come back anytime to look things up.' },
      { id: 'apps', msgTemplate: '{name}, pick tools for your scenarios—register and try one; that\'s the fastest way to get started.' },
      { id: 'prompt-lab', msgTemplate: '{name}, prompts are the key to steering AI—practice structured writing here.' },
      { id: 'hands-on', msgTemplate: '{name}, start with Real Software Tutorials! Follow Cursor, Midjourney, and others—nothing beats doing it yourself.' },
      { id: 'practice', msgTemplate: '{name}, pick a scenario tied to your work, copy a prompt, and try it for real!' },
      { id: 'quiz', msgTemplate: '{name}, final stretch! Take the quiz to validate your 7 days—you\'ve got this!' },
      { id: 'graduation', msgTemplate: '{name}, congratulations on graduating! Review your learning report and fill in your 30-day practice plan.' },
      { id: 'monetize', msgTemplate: '{name}, want to monetize your skills? Here are 30 actionable directions—pick the best fit and start validating.' },
      { id: 'devices', msgTemplate: '{name}, read this before buying a PC! Match OS, RAM, and GPU to your learning path—avoid overspending.' }
    ],

    phaseCoachHints: {
      'phase-learn': '{name}, Phase 1: let\'s build cognitive foundations—principles and terminology.',
      'phase-tools': '{name}, Phase 2: learn to pick tools and write prompts so AI truly works for you.',
      'phase-practice': '{name}, Phase 3: embed AI in real workflows—practice proves it!',
      'phase-validate': '{name}, Phase 4: review, quiz, and consolidate—keep improving.'
    },

    dayCompleteMessages: {
      allComplete: '{name}, all 7 days complete! Amazing—head to Review for the final quiz 🎉',
      cognitionPhaseEnd: '{name}, Day 3 done! Foundations phase wrapped. Scroll to the bottom to jump to Tools 👏',
      toolsPhaseEnd: '{name}, Tools phase complete! Use the transition guide at the bottom to enter Practice.',
      practiceDayComplete: '{name}, Practice day done! Enter Review for the final quiz—sprint to the finish!',
      dayComplete: '{name}, Day {day}「{title}」complete! {nextHint}{teacher} is proud of you ✦',
      nextDayHint: 'Tomorrow is Day {nextDay}「{nextTitle}」.'
    },

    personalizationNamed: {
      greeting: '{name}, welcome to BestWayToLearn.AI',
      titleHtml: '{name}, let\'s <span class="hero-highlight">master AI</span> together',
      readyTitle: 'Great, {name} — let\'s go!',
      readyDesc: 'From today on, I\'ll guide you step by step using "{name}".',
      readyQuote: '「{name}, the best way to learn AI is to practice on real problems.」',
      pathBanner: '{name}, see the full 7-day plan first, then work day by day; mark mastered days to skip—I\'ll track your progress.',
      roadmapHeader: '{name}, complete the four phases in order. Each has clear goals and modules. Progress saves automatically—pick up anytime.',
      phaseBannerTemplate: '{name}, {subtitle} · {days} · {descFirst}.'
    }
  });
})();