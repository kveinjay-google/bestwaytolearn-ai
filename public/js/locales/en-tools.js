(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('en', {
    appCategories: {
      '对话助手': 'Chat assistants',
      '编程开发': 'Coding & development',
      '图像创作': 'Image creation',
      '视频音频': 'Video & audio',
      '办公效率': 'Office productivity',
      'Agent 自动化': 'Agent automation',
      '搜索研究': 'Search & research',
      '全部': 'All',
    },
    apps: [
      { category: 'Chat assistants', desc: 'OpenAI\'s general-purpose conversational AI. GPT-4o supports multimodal text, image, and voice. Strong at writing, analysis, coding, and brainstorming with a rich plugin ecosystem.', tags: ['General-purpose', 'Multimodal', 'Plugins'], features: ['GPT-4o multimodal', 'Code interpreter', 'DALL·E image generation', 'Voice chat'], bestFor: 'Beginners and everyday all-round assistant', tip: 'Free GPT-4o mini is enough for most tasks; consider Plus ($20/mo) for complex work.' },
      { category: 'Chat assistants', desc: 'Built by Anthropic, known for long context (200K), safety, and refined writing. Claude 3.5 Sonnet excels at coding and writing; Artifacts lets you preview code and documents live.', tags: ['Long text', 'Safety', 'Writing'], features: ['200K context', 'Artifacts preview', 'PDF analysis', 'Code generation'], bestFor: 'Long documents, writing, and code development', tip: 'Top pick for contracts, papers, and codebases; Pro is $20/mo.' },
      { category: 'Chat assistants', desc: 'Google\'s AI assistant deeply integrated with Search, Gmail, Docs, and YouTube. Gemini 2.0 supports real-time multimodal interaction and million-token context.', tags: ['Search integration', 'Multimodal', 'Free'], features: ['Google ecosystem integration', 'Real-time search', 'Multimodal interaction', 'Ultra-long context'], bestFor: 'Google ecosystem users who need live information', tip: 'If you already use Gmail/Docs, the free tier is very capable.' },
      { category: 'Chat assistants', desc: 'From Alibaba with strong Chinese understanding. Qwen2.5 leads on many benchmarks. Tongyi Wanxiang handles image/video; Tongyi Lingma assists with coding.', tags: ['Chinese', 'Domestic', 'Free'], features: ['Chinese optimization', 'Code capability', 'Tongyi Wanxiang images', 'Open API'], bestFor: 'Daily chat and development for users in China', tip: 'No VPN needed; generous free quota for Chinese scenarios.' },
      { category: 'Chat assistants', desc: 'Baidu\'s AI assistant with rich Chinese corpora in ERNIE 4.0, integrating Search, Wenku, Maps, and more. Strong at Chinese Q&A and content creation.', tags: ['Chinese', 'Search', 'Domestic'], features: ['Baidu Search integration', 'Chinese writing', 'Multimodal', 'Plugin marketplace'], bestFor: 'Chinese content creation and knowledge lookup', tip: 'Great when you need Chinese web information.' },
      { category: 'Chat assistants', desc: 'From Moonshot AI, famous for ultra-long context (up to 2 million characters). Handles whole books, long reports, and large codebases with strong web search.', tags: ['Ultra-long context', 'Chinese', 'Reading'], features: ['2M-character context', 'Web search', 'File parsing', 'Code understanding'], bestFor: 'Very long document analysis and literature reading', tip: 'Use when you need to analyze an entire book or large PDF.' },
      { category: 'Chat assistants', desc: 'From DeepSeek with leading open-source performance and standout DeepSeek-R1 reasoning. API pricing is extremely competitive (~1/50 of GPT-4) with local deployment support.', tags: ['Open source', 'Reasoning', 'Value'], features: ['R1 deep reasoning', 'Open & deployable', 'Very low API cost', 'Strong coding'], bestFor: 'Developers, cost-conscious users, and reasoning-heavy tasks', tip: 'Developers\' favorite; API integration costs are minimal.' },
      { category: 'Coding & development', desc: 'Microsoft/OpenAI AI coding assistant integrated into VS Code, JetBrains, and other IDEs. Real-time completion, logic explanation, functions, and unit tests.', tags: ['IDE integration', 'Completion', 'Microsoft'], features: ['Line/block completion', 'Chat', 'Multi-language', 'Copilot Workspace'], bestFor: 'Daily coding speed-up and completion', tip: 'Essential for programmers; students and OSS contributors can apply for free access.' },
      { category: 'Coding & development', desc: 'AI-native code editor (VS Code–based) that understands full project context. Agent mode can autonomously complete multi-file coding, debugging, and refactoring.', tags: ['AI IDE', 'Whole project', 'Agent'], features: ['Full-project indexing', 'Autonomous Agent coding', 'Multi-model switching', 'Terminal integration'], bestFor: 'Project-level development with AI assistance', tip: 'Highly recommended for developers who want a major productivity boost.' },
      { category: 'Coding & development', desc: 'Codeium\'s AI IDE. Cascade agent mode understands the codebase, plans, and executes multi-step coding tasks with generous free quota.', tags: ['Agent', 'Multi-file', 'Free quota'], features: ['Cascade Agent', 'Codebase understanding', 'Multi-file editing', 'Large free tier'], bestFor: 'AI-driven development projects', tip: 'Strong Cursor competitor; core features work on the free plan.' },
      { category: 'Coding & development', desc: 'Anthropic\'s terminal AI coding Agent with deep codebase understanding. Supports multi-file edits, test runs, Git ops, and custom Hooks/plugins. Excels at long-context refactors.', tags: ['Terminal Agent', 'Long context', 'Anthropic'], features: ['Full-repo indexing', 'Autonomous multi-file edits', 'Hooks/plugin extensions', 'Strong complex refactors'], bestFor: 'Terminal workflows, complex refactors, Claude ecosystem users', tip: 'Requires Claude Pro/Max; best for CLI-first developers who want deep Agent power.' },
      { category: 'Coding & development', desc: 'OpenAI\'s official CLI coding Agent based on GPT-5 series models. Plans, writes, tests, and commits code locally or in cloud sandboxes. Supports MCP and multi-step autonomous tasks.', tags: ['CLI', 'OpenAI', 'Cloud sandbox'], features: ['Terminal/cloud dual mode', 'Autonomous Agent tasks', 'MCP tool integration', 'Deep GitHub integration'], bestFor: 'OpenAI subscribers automating coding pipelines', tip: 'Included with ChatGPT Plus/Pro; run codex in terminal to start Agent tasks.' },
      { category: 'Coding & development', desc: 'xAI\'s terminal AI dev environment (Grok CLI) with Plan mode, parallel sub-Agents, AGENTS.md project specs, and MCP server access for complex multi-step development.', tags: ['CLI', 'Plan mode', 'Sub-Agents'], features: ['Plan mode planning', 'Parallel sub-Agents', 'AGENTS.md support', 'MCP integration'], bestFor: 'xAI users, multi-step Agent development, terminal workflows', tip: 'Requires SuperGrok or X Premium+; place AGENTS.md in project root to customize Agent behavior.' },
      { category: 'Coding & development', desc: 'Z.ai\'s Agentic Development Environment powered by GLM-5.2. Desktop, Remote dev, and Feishu/WeChat Bot access for long-horizon complex coding tasks.', tags: ['Domestic', 'ADE', 'Long-horizon'], features: ['GLM-5.2 powered', 'Desktop/Remote dual mode', 'Feishu/WeChat Bot', 'Long-horizon Agent tasks'], bestFor: 'Domestic developers, Zhipu ecosystem, remote collaborative coding', tip: 'Download at zcode.z.ai; strong for Chinese scenarios and long tasks, no VPN needed.' },
      { category: 'Coding & development', desc: 'Google\'s open-source CLI AI coding tool. Sign in with Google account; generous free quota (~1000 calls/day). Code generation, file ops, shell commands, and Search Grounding.', tags: ['CLI', 'Open source', 'Free quota'], features: ['Google account login', 'High free quota', 'Shell/file operations', 'Search Grounding'], bestFor: 'Budget-conscious users, Google ecosystem, CLI Agent exploration', tip: 'npm install -g @google/gemini-cli; free tier is very competitive among CLI tools.' },
      { category: 'Coding & development', desc: 'Open-source AI pair programming in the terminal with GPT/Claude/DeepSeek or any model API. Deep Git integration—auto-commit on each change, multi-file diff editing. 39K+ GitHub stars.', tags: ['Open source', 'BYOK', 'Git-native'], features: ['Any model API', 'Auto Git commit', 'Multi-file diff', 'Language-agnostic'], bestFor: 'Developers with their own API keys who value Git history', tip: 'pip install aider-chat; bring your own API key—lightweight open alternative to Cursor.' },
      { category: 'Coding & development', desc: 'Open-source VS Code extension connecting any LLM API. Agent mode can read/write files, run terminal commands, and browse the web. Plan/Act step-by-step execution.', tags: ['VS Code', 'Open source', 'BYOK'], features: ['Plan/Act mode', 'Terminal command execution', 'Browser assistance', 'Multi-model API'], bestFor: 'VS Code users who want to choose their own models', tip: 'Search Cline in Extensions; connect Anthropic/OpenAI/Ollama without switching editors.' },
      { category: 'Coding & development', desc: 'Open-source AI coding assistant for VS Code and JetBrains. Tab completion, Chat, and Agent mode. Teams can share models and rules for gradual enterprise rollout.', tags: ['Multi-IDE', 'Open source', 'Team-friendly'], features: ['VS Code + JetBrains', 'Tab completion', 'Custom Agents', 'Shared team config'], bestFor: 'Multi-IDE teams needing unified AI coding setup', tip: 'Install from continue.dev; config.yaml can point to your API or local Ollama.' },
      { category: 'Coding & development', desc: 'AWS AI coding assistant as IDE plugin and CLI, deeply integrated with AWS docs and SDKs. Code generation, security scanning, code conversion (e.g. Java upgrades), and Agent tasks.', tags: ['AWS', 'CLI+IDE', 'Enterprise'], features: ['AWS knowledge integration', 'Code security scanning', 'Code conversion', 'Free tier available'], bestFor: 'AWS cloud development, enterprise compliance, Java/.NET migration', tip: 'Enable free in AWS Console; CLI command q starts Agent tasks in terminal.' },
      { category: 'Coding & development', desc: 'StackBlitz AI full-stack tool—describe a web app in natural language (React, Vue, Node, etc.) and get a runnable app with in-browser preview and deploy.', tags: ['Full-stack', 'Browser', 'Zero config'], features: ['One-sentence app generation', 'In-browser IDE', 'Live preview', 'One-click deploy'], bestFor: 'Rapid prototypes, non-programmer sites, MVP validation', tip: 'Non-coders can ship a runnable web app in 10 minutes—great for validating ideas.' },
      { category: 'Image creation', desc: 'Top-tier AI art tool via Discord or Web. Industry-leading artistic style and image quality with an active, diverse community.', tags: ['Discord', 'Art', 'High quality'], features: ['Top-tier quality', 'Diverse styles', 'Community inspiration', 'HD upscale'], bestFor: 'Art creation, concept design, visual exploration', tip: 'Best for visual impact; learn prompt craft—starts at $10/mo.' },
      { category: 'Image creation', desc: 'OpenAI image model integrated in ChatGPT. Excels at precise complex text prompts with strong text rendering.', tags: ['ChatGPT', 'Precise', 'Easy'], features: ['Precise text understanding', 'ChatGPT integration', 'Text rendering', 'Zero barrier'], bestFor: 'Quick images for ChatGPT users', tip: 'Zero extra setup if you already use ChatGPT.' },
      { category: 'Image creation', desc: 'Open-source image model with local deployment and a huge community ecosystem. LoRA fine-tuning, ControlNet precision, full control over generation.', tags: ['Open source', 'Local', 'Customizable'], features: ['Local deployment', 'LoRA fine-tuning', 'ControlNet', 'Massive community models'], bestFor: 'Creators with GPU who want full control', tip: 'Needs some technical skill, but best freedom and cost long-term.' },
      { category: 'Video & audio', desc: 'Kuaishou\'s AI video tool with text-to-video and image-to-video. Natural physics and motion; leading domestic video generation.', tags: ['Video', 'Domestic', 'Easy'], features: ['Text-to-video', 'Image-to-video', 'Natural motion', 'Daily free quota'], bestFor: 'Domestic video creation and short-form content', tip: 'Top domestic video pick with daily free quota.' },
      { category: 'Video & audio', desc: 'Professional AI video platform. Gen-3 Alpha leads in quality. Also offers editing, background removal, motion tracking, and pro tools.', tags: ['Professional', 'Editing', 'Gen-3'], features: ['Gen-3 video generation', 'Video editing suite', 'Motion tracking', 'Green screen removal'], bestFor: 'Professional video creators and film/TV pros', tip: 'Great for content creators and film professionals.' },
      { category: 'Video & audio', desc: 'AI music tool—describe a style and get a full song with vocals and accompaniment in multiple styles and languages.', tags: ['Music', 'Vocals', 'Creation'], features: ['Full song generation', 'Multiple styles', 'Vocal performance', 'Extend/continue'], bestFor: 'Quick demo tracks and background music', tip: 'Try: "An upbeat pop song about summer" and generate.' },
      { category: 'Office productivity', desc: 'AI assistant built into Notion for writing, summarizing, translating, and brainstorming—seamlessly tied to notes and databases.', tags: ['Notes', 'Collaboration', 'Integrated'], features: ['Document writing', 'Summarization', 'Translation', 'Database AI'], bestFor: 'Notion users boosting document efficiency', tip: 'Must-have for Notion users—$10/mo per member.' },
      { category: 'Office productivity', desc: 'AI-driven presentation and document generator. Enter an outline or topic to get polished slides with themes and layouts.', tags: ['Slides', 'Design', 'Fast'], features: ['AI slide generation', 'Multiple themes', 'Online sharing', 'Embedded media'], bestFor: 'Fast reports, proposals, and course decks', tip: 'Enter a topic—full deck in 30 seconds. Lifesaver before deadlines.' },
      { category: 'Search & research', desc: 'AI search engine with direct cited answers instead of link lists. Pro Search for deep research—great for academic work.', tags: ['Search', 'Citations', 'Research'], features: ['Cited answers', 'Pro deep search', 'Multi-model choice', 'Real-time info'], bestFor: 'Quick research, academic study, fact-checking', tip: 'Use instead of Google for research—but always verify citations.' },
      { category: 'Search & research', desc: 'Google\'s AI notebook—upload PDFs/docs, chat with materials, generate summaries, and turn content into AI podcast (Audio Overview).', tags: ['Documents', 'Summary', 'Podcast'], features: ['Document chat', 'Auto summary', 'AI podcast generation', 'Multi-document analysis'], bestFor: 'Reading papers, literature reviews, learning new material', tip: 'Upload a paper and ask questions—the podcast feature is creative and useful.' },
      { category: 'Video & audio', desc: 'Leading AI voice platform with Instant Voice Cloning, 29+ language TTS, dubbing, and podcast production.', tags: ['Voice clone', 'TTS', 'Dubbing'], features: ['1-minute sample clone', 'Multilingual read-aloud', 'Emotional tone control', 'API integration'], bestFor: 'Cloning your voice, video dubbing, audio content', tip: 'Record in a quiet room; 1–3 minutes dry voice is enough to clone.' },
      { category: 'Video & audio', desc: 'Domestic AI voice synthesis and cloning with natural Chinese pronunciation. Zero/few-shot cloning for domestic creators.', tags: ['Voice clone', 'Chinese', 'Domestic'], features: ['Chinese optimization', 'Voice cloning', 'Emotional synthesis', 'Free quota'], bestFor: 'Chinese dubbing, short-video voiceover, domestic users', tip: 'Try first for Chinese scenarios—no VPN needed.' },
      { category: 'Agent automation', desc: 'Open-source AI Agent gateway with Cron scheduling, Webhook triggers, and multi-channel delivery (Telegram/Slack/Discord/Feishu) for autonomous research, monitoring, and reporting.', tags: ['Open source', 'Scheduled', 'Multi-channel'], features: ['Cron scheduling', 'Isolated Agent tasks', 'Webhook integration', 'Multi-channel push'], bestFor: 'Scheduled briefs, auto research, background Agent orchestration', tip: 'Run openclaw doctor first, then cron create for scheduled tasks.' },
      { category: 'Agent automation', desc: 'Open-source LLM app and Agent platform with visual workflows, RAG knowledge bases, tool calling, and API publishing. Self-hostable; 60K+ GitHub stars.', tags: ['Open source', 'Workflow', 'RAG'], features: ['Visual Agent orchestration', 'Knowledge-base RAG', 'Tool/API integration', 'Self-hostable'], bestFor: 'Enterprise knowledge-base Agents and custom AI apps', tip: 'Try cloud.dify.ai free; Docker self-host for full data control.' },
      { category: 'Agent automation', desc: 'ByteDance zero-code AI Agent platform—drag to build Bots and publish to Feishu, WeChat, Discord, Telegram. Rich plugin market; fastest onboarding in China.', tags: ['No-code', 'Domestic', 'Multi-channel'], features: ['Visual Bot builder', 'Plugins & workflows', 'Feishu/WeChat publish', 'Generous free quota'], bestFor: 'Quick customer-service/assistant Bots, domestic team collaboration', tip: 'coze.cn needs no VPN; start from a personal-assistant template, then add plugins.' },
      { category: 'Agent automation', desc: 'Open workflow automation with deep AI Agent nodes. Connect 400+ services; self-hostable—embed LLMs in email, spreadsheets, CRM, and business pipelines.', tags: ['Open source', 'Workflow', 'Self-hostable'], features: ['400+ app integrations', 'AI Agent nodes', 'Visual flow editor', 'Self-hostable'], bestFor: 'Business automation, cross-system orchestration, technical teams', tip: 'Free cloud at n8n.io; self-host Docker for sensitive data; start from AI templates.' },
      { category: 'Agent automation', desc: 'General AI Agent that autonomously plans and executes multi-step tasks—browse web, write docs, run code, compile reports. End-to-end "give it a goal, get a result."', tags: ['General Agent', 'Autonomous', 'Multi-step'], features: ['Autonomous task planning', 'Web browse & operate', 'Code/document output', 'Async long tasks'], bestFor: 'Complex research, report writing, end-to-end task delegation', tip: 'Describe the goal not steps, e.g. "Summarize last week\'s AI news as Markdown"; always review results.' },
      { category: 'Chat assistants', desc: 'ByteDance AI assistant on Doubao model with natural Chinese dialogue. Deep Douyin and Feishu integration; multimodal understanding and creation; large domestic user base.', tags: ['Chinese', 'Domestic', 'Multimodal'], features: ['Chinese dialogue', 'Image/video understanding', 'Feishu integration', 'Generous free quota'], bestFor: 'Daily chat, content creation, office collaboration in China', tip: 'Douyin/Feishu users get seamless access; web and app are free.' },
      { category: 'Chat assistants', desc: 'xAI assistant integrated with X (Twitter). Known for real-time info and humor; Grok 3 strong on math and reasoning with DeepSearch mode.', tags: ['Real-time', 'X integration', 'Reasoning'], features: ['X real-time feed', 'DeepSearch mode', 'Multimodal understanding', 'Code & math'], bestFor: 'Tracking trends, social media analysis, live news', tip: 'Requires X Premium+; great for real-time news and social dynamics.' },
      { category: 'Image creation', desc: 'Black Forest Labs open image model. Flux.1 excels at quality, text rendering, and human structure; local deployment and API available.', tags: ['Open source', 'High quality', 'Text rendering'], features: ['Top-tier quality', 'Accurate text rendering', 'Open & deployable', 'LoRA ecosystem'], bestFor: 'High-quality illustration, commercial design, local generation', tip: 'API via Replicate, fal.ai, etc., or run locally in ComfyUI.' },
      { category: 'Video & audio', desc: 'OpenAI video model with text-to-video and image-to-video. Industry-leading coherence and physical realism. Sora Turbo is much faster.', tags: ['OpenAI', 'High quality', 'Physical realism'], features: ['Text/image-to-video', 'Up to 20 seconds', 'Remix editing', 'Storyboard shots'], bestFor: 'High-quality short video, ad concepts, concept previews', tip: 'Requires ChatGPT Plus/Pro; describe camera motion and lighting for better results.' },
      { category: 'Office productivity', desc: 'Microsoft AI assistant integrated with Word, Excel, PowerPoint, Outlook, Teams. Based on GPT-4o—generate, edit, and analyze docs and data in Office.', tags: ['Office', 'Microsoft', 'Enterprise'], features: ['Word/Excel/PPT AI', 'Outlook mail assistant', 'Teams meeting summary', 'Enterprise data integration'], bestFor: 'Office 365 users and enterprise office automation', tip: 'Microsoft 365 subscribers can invoke Copilot in the Office sidebar.' },
      { category: 'Search & research', desc: 'Domestic AI search engine—ad-free, cited answers, modes for web, academic, podcast, and more. Excellent Chinese research experience.', tags: ['Search', 'Domestic', 'Ad-free'], features: ['Cited answers', 'Academic/podcast modes', 'Mind-map generation', 'File upload analysis'], bestFor: 'Chinese research, academic study, ad-free retrieval', tip: 'Accessible in China; cross-check academic citations.' },
    ],
    handsOnCategories: {
      '全部': 'All',
      '编程开发': 'Coding & development',
      '图像设计': 'Image design',
      '视频音频': 'Video & audio',
      '写作办公': 'Writing & office',
      '搜索研究': 'Search & research',
      'Agent 自动化': 'Agent automation',
    },
    handsOnCases: [
      { title: 'Build a web calculator with Cursor Codex', difficulty: 'Beginner', duration: '~15 min', desc: 'From scratch, use Cursor\'s built-in Codex Agent to generate a runnable HTML calculator—experience "say it once → get runnable code" AI programming.', steps: ['Install Cursor, create folder calc-demo and open in Cursor', 'Press Cmd+I (Mac) / Ctrl+I (Win) to open Composer / Agent panel', 'Paste the prompt below and let Codex generate a single index.html', 'Right-click index.html in explorer → Reveal in Finder → double-click to open in browser', 'Test add/subtract/multiply/divide; if issues, select code and say: "Button click does nothing—please fix"', '(Optional) Ask Codex to add keyboard input, history, or dark/light theme toggle'], prompt: 'Please create a clean, attractive calculator web page with HTML + CSS + JavaScript:\n\nFeatures:\n- Support add, subtract, multiply, divide, and clear (C)\n- Display shows input and result in real time\n- Prevent common logic errors like chaining operators\n\nDesign:\n- Dark theme, rounded buttons, subtle hover feedback\n- Works on mobile\n\nDeliverable:\n- Single index.html file, openable directly in browser\n- Code with English comments\n- Tell me how to run and test at the end', result: 'A double-clickable calculator web page that performs basic arithmetic.', tips: 'First time coding with AI, focus on: describe → generate → run → feedback fix—not perfection on the first try.' },
      { title: 'Generate Statue of Liberty image with Midjourney', difficulty: 'Beginner', duration: '~10 min', desc: 'Use English prompts in Midjourney for a cinematic Statue of Liberty shot and learn text-to-image basics and parameters.', steps: ['Register Midjourney, open Create on midjourney.com (or Discord #general)', 'Click input, type /imagine (Web can paste prompt directly)', 'Paste English prompt below, send, wait ~30–60s for 4 candidates', 'Click U1–U4 to upscale favorite; 🔄 to regenerate if needed', 'V1–V4 for variants, or tweak --ar ratio and retry', 'Right-click save HD image for slides, articles, or design reference'], prompt: 'Statue of Liberty on Liberty Island, New York Harbor, golden hour sunset, cinematic wide shot, dramatic clouds, warm light reflecting on water, photorealistic, highly detailed, 8k --ar 16:9 --v 6', result: 'A 16:9 cinematic Statue of Liberty HD image for demos or design.', tips: 'Midjourney works best in English. Order: subject → environment → light → style → params (--ar, --v).' },
      { title: 'Quick image with ChatGPT + DALL·E 3 (no Discord)', difficulty: 'Beginner', duration: '~5 min', desc: 'Skip Discord—use natural language in ChatGPT with DALL·E 3 for Statue of Liberty. Fastest text-to-image intro.', steps: ['Open ChatGPT (Plus/Team for DALL·E 3; free tier has limited image quota)', 'New chat, paste prompt below and send', 'ChatGPT calls DALL·E automatically, ~10–20s for result', 'If composition is off, reply: "Zoom in on the statue face, blur background"', 'Click image to download PNG for articles, slides, or social'], prompt: 'Please use DALL·E to generate an image:\n\nSubject: Statue of Liberty at golden hour, cinematic wide shot from the harbor, dramatic clouds, warm water reflections.\n\nStyle: Photorealistic, high detail, suitable as article cover.\n\nAspect ratio: Landscape 16:9.', result: 'Downloadable Statue of Liberty image in ChatGPT—no extra tools.', tips: 'ChatGPT understands your language and translates for DALL·E. Iterating "what to keep/avoid" beats rewriting the whole prompt.' },
      { title: 'Clone your voice with ElevenLabs', difficulty: 'Intermediate', duration: '~20 min', desc: 'Upload dry voice recording, create a personal voice model, then read any text—full voice-cloning workflow.', steps: ['Register ElevenLabs → Voice Lab → Instant Voice Cloning', 'Record 1–3 min dry voice on phone Voice Memos: quiet room, no music, normal pace', 'Upload, name voice (e.g. my-voice), accept clone terms, create', 'Text to Speech → select cloned voice', 'Paste test text below, Generate and listen', 'Download MP3 for video dubbing or podcast intro'], prompt: 'Hi everyone, I\'m [your nickname]. This is my AI-cloned voice test.\n\nNice weather today—I\'ll read a short intro: Artificial intelligence is changing how we learn, work, and create. I hope this sounds natural, clear, and friendly.\n\nThanks for listening!', result: 'Reusable "your voice" model—type any text to get dubbed audio.', tips: 'Quality depends on recording: quiet, consistent volume, no plosive pops. Only clone voices you have rights to use.' },
      { title: 'Clone Chinese voice with Fish Audio (domestic)', difficulty: 'Intermediate', duration: '~15 min', desc: 'Domestic users can clone Chinese voice naturally—great for short-video voiceover and Chinese dubbing.', steps: ['Register at fish.audio → Voice clone / Create voice', 'Upload 30s–3min Chinese dry voice (read news or article)', 'Name and create voice, wait 1–5 min for training', 'Text-to-speech: paste test copy below', 'Select new voice, adjust speed, generate', 'Listen and download; compare with ElevenLabs for your Chinese use case'], prompt: 'Hello everyone, welcome to today\'s AI learning notes.\n\nThis section covers hands-on AI with real software. You don\'t need all theory first—learn by doing real tasks.\n\nIf helpful, like and save.', result: 'Chinese test audio in your voice for voiceover comparison.', tips: 'Prefer Fish Audio for Chinese cloning; use ElevenLabs for multilingual/English dubbing.' },
      { title: 'Schedule stock news collection with OpenClaw', difficulty: 'Advanced', duration: '~30 min', desc: 'Configure OpenClaw Cron to run an Agent each trading morning to gather stock news and push to Telegram or Slack.', steps: ['Install OpenClaw CLI, run openclaw doctor --fix to init Gateway', 'Ensure Gateway is running (cron schedules inside Gateway)', 'Edit symbols, timezone, channel IDs in command below', 'Run cron create command in terminal (weekdays 8:30 Asia/Shanghai)', 'openclaw cron list to confirm; openclaw cron runs --id <job-id> for history', 'Manual test: openclaw cron run <job-id>, check push is readable and sourced'], prompt: 'openclaw cron create "30 8 * * 1-5" \\\n  --name "Daily stock news brief" \\\n  --tz "Asia/Shanghai" \\\n  --session isolated \\\n  --message "You are a professional investment research assistant. Gather and summarize today\'s market news:\\n\\nWatchlist: CSI 300, CATL (300750), Apple (AAPL)\\n\\nOutput (English, under 400 words):\\n1) Macro headlines (max 3, with sources)\\n2) Stock/sector moves (max 2 each)\\n3) Today\'s watchlist (not investment advice, info only)\\n\\nIf no reliable info, write \'No major updates\'; keep source names; do not invent data." \\\n  --announce \\\n  --channel telegram \\\n  --to "YOUR_TELEGRAM_USER_OR_CHANNEL_ID"', result: 'Weekday morning Agent-compiled stock brief (after you configure push channel).', tips: 'Output is reference only—not investment advice. Test message channel before going live.' },
      { title: 'Generate functions and unit tests with GitHub Copilot', difficulty: 'Beginner', duration: '~12 min', desc: 'In VS Code, Copilot completes a business function and Jest tests—daily coding productivity.', steps: ['Install VS Code + GitHub Copilot and sign in', 'Create utils/discount.js with comment describing discount rules', 'Type function and accept Copilot completion', 'Create utils/discount.test.js, type describe to trigger test completion', 'Run npm test (or jest); paste errors into Chat to fix', 'Change rules in comments (e.g. spend 200 save 30) and watch completion adapt'], prompt: '// Calculate order discount: spend 100 save 10, spend 200 save 30, no negative amounts\n// Return { original, discount, final } object\nfunction calcDiscount(amount) {\n  // Copilot completes from here\n}', result: 'Runnable discount function + basic unit tests; learn comment-driven completion.', tips: 'Copilot responds best to clear function comments and types; keep tests next to implementation.' },
      { title: 'Add dark mode across site with Windsurf', difficulty: 'Intermediate', duration: '~25 min', desc: 'Use Windsurf Cascade Agent to understand a small frontend project and add CSS variables + theme toggle across files.', steps: ['Open Windsurf on a small index.html + styles.css practice project', 'Open Cascade, paste task description below', 'Let Agent list files to change, confirm, then execute', 'Preview in browser, toggle theme to verify colors', 'If selectors missed: "Header contrast too low in dark mode"', 'Before commit, ask Agent for a short changelog'], prompt: 'Add dark/light theme toggle to this project:\n1) CSS variables for color system\n2) Header toggle button, preference in localStorage\n3) Don\'t break layout; mobile-friendly\n4) After changes, list modified files and how to test', result: 'One-click dark/light theme; experience Agent multi-file collaboration.', tips: 'Cascade suits consistent multi-file changes; get a plan before "change everything."' },
      { title: 'Review contract and flag risks with Claude', difficulty: 'Intermediate', duration: '~20 min', desc: 'Upload PDF contract; Claude flags high-risk clauses from counterparty perspective—intro legal/procurement practice.', steps: ['Register Claude, new chat (Pro for longer PDFs)', 'Upload contract PDF or paste key sections', 'Paste prompt below, specify you are "Party B"', 'Read risk table; verify page/section references', 'Follow up: "Rewrite high-risk clauses as more balanced alternatives"', 'Export for legal colleague review—AI review is not a lawyer'], prompt: 'You are a careful contract review assistant. We are Party B.\n\nReview the uploaded contract and output:\n1) Top 5 high-risk clauses (quote + reason)\n2) 3 medium-risk clauses\n3) Negotiable revision for each\n4) Summary table: location | risk level | suggestion\n\nMark uncertain items "Needs human verification"; do not invent statutes.', result: 'Structured contract risk list and negotiation draft.', tips: 'Claude handles long docs well; upload full text and cross-check; avoid public accounts for sensitive contracts.' },
      { title: 'Write industry brief with real-time search in Gemini', difficulty: 'Beginner', duration: '~10 min', desc: 'Use Gemini + Google Search to generate a weekly industry brief with clickable sources.', steps: ['Open gemini.google.com and sign in', 'Enable "Use Google Search" or similar if available', 'Paste prompt, change industry to your field', 'Check source links open; remove stale entries', 'Ask for "3 executive conclusions + 3 action items"', 'Copy to Google Docs for team weekly meeting'], prompt: 'Research important developments in "2026 China cross-border e-commerce" over the past 7 days. Output a 400-word English brief:\n\n- 3 headlines this week (one sentence + source each)\n- Impact on small sellers\n- 2 variables to watch next week\n\nCite verifiable sources; if none, write "None."', result: 'Sourced industry brief ready for standup or internal newsletter.', tips: 'Gemini\'s strength is search integration—still click each source to verify.' },
      { title: 'Write Xiaohongshu-style post with Qwen', difficulty: 'Beginner', duration: '~8 min', desc: 'Use Qwen for Xiaohongshu-style种草 copy with title, body, tags, and cover suggestions.', steps: ['Open Qwen, new chat', 'Fill real product selling points in prompt (no exaggerated claims)', 'Ask for "shorter, more conversational A/B version"', 'Ask for 3 cover photo/generation ideas', 'Copy 5 topic tags; check platform rules', 'Human review for ad-law sensitive words before posting'], prompt: 'Product: "Portable cold-brew coffee cup". Selling points: 5-min brew, double-wall heat protection, minimalist look.\n\nWrite Xiaohongshu-style post:\n1) 3 click-worthy titles\n2) ~250-word body, first person, conversational, light emoji\n3) 5 hashtags\n4) One comment CTA\n\nCompliance: no superlatives like "best" or "#1."', result: 'Draft Xiaohongshu post and tags ready to edit and publish.', tips: 'Qwen has good Chinese tone; add real experience details or it feels generic.' },
      { title: 'Deep-read 100-page annual report with Kimi', difficulty: 'Intermediate', duration: '~25 min', desc: 'Upload listed company annual report PDF; Kimi extracts financial highlights, risks, and management narrative—for research/business study.', steps: ['Open Kimi, attach annual report PDF (public sample OK)', 'Wait for parsing, paste analysis framework below', 'Verify numbers against PDF original text', 'Follow up: "Why difference between cash flow and net profit?"', 'Export Markdown notes, mark "to verify" fields', 'Never upload non-public insider materials to any cloud AI'], prompt: 'Based on the uploaded annual report, output in English:\n1) One-sentence core business\n2) Three-year revenue/net profit trend (list)\n3) 3 highlights + 3 risks this period (cite chapter/page)\n4) 3 management forward-looking statements\n5) 3 investor follow-up questions\n\nNumbers must come from the document; if missing, write "Not disclosed."', result: 'Structured annual report notes with page refs and question list.', tips: 'Kimi handles long PDFs well—always verify financial numbers; AI may misread units (10K vs 100M).' },
      { title: 'Debug Python error with DeepSeek', difficulty: 'Beginner', duration: '~12 min', desc: 'Give DeepSeek traceback + code snippet; locate IndexError root cause, fix, and harden against edge cases.', steps: ['Open DeepSeek, new chat', 'Paste buggy code + full traceback below', 'Read "cause" and "fixed code" sections', 'Replace locally and re-run', 'Follow up: "Add input validation for empty list"', 'Compare before/after; note bug pattern'], prompt: 'This Python code errors—explain in English and fix:\n\n```python\ndef avg_positive(nums):\n    pos = [n for n in nums if n > 0]\n    return sum(pos) / len(pos)\n\nprint(avg_positive([]))\n```\n\nTraceback: ZeroDivisionError: division by zero\n\nPlease: 1) Explain 2) Fixed code 3) Edge handling 4) 2 test cases', result: 'Fixed function handles empty list; understand divide-by-zero protection.', tips: 'DeepSeek is cost-effective for code; paste full traceback, not just the last line.' },
      { title: 'E-commerce product white-background image with Stable Diffusion', difficulty: 'Intermediate', duration: '~20 min', desc: 'Via Stability online or local WebUI, generate minimalist product shot; learn prompts + negative prompts.', steps: ['Open Stability online or local A1111 / ComfyUI', 'Paste English positive and negative prompts', 'Set 1:1 or 4:5, steps 25–30, CFG ~7', 'Generate 4, pick cleanest and upscale', 'Add brand-color background for second scene shot', 'Confirm platform license and product rights before commercial use'], prompt: 'Positive: minimalist product photo of wireless earbuds, pure white background, studio lighting, soft shadow, centered composition, ultra sharp, commercial photography, 4k\n\nNegative: text, watermark, logo, blurry, deformed, extra objects, cluttered background', result: 'Minimalist product image for e-commerce detail page.', tips: 'Product keywords: white background / studio lighting / centered; negative prompts reduce deformities.' },
      { title: '15-second product video with Kling AI', difficulty: 'Beginner', duration: '~15 min', desc: 'Chinese prompt for vertical product showcase short—good for Douyin/Xiaohongshu commerce.', steps: ['Register Kling AI → video generation', 'Text-to-video, 9:16 aspect', 'Paste prompt, generate 5–10s clip', 'Retry with "slow push-in", "soft light" if needed', 'Download MP4, import to editor for subtitles and CTA', 'Label AI-generated content per platform rules'], prompt: 'Vertical 9:16, minimalist white desk with smart thermos cup, steam rising slowly, camera orbits product, soft natural light, premium commercial ad feel, clean background, no text or watermark, realistic physics', result: 'Vertical product showcase video clip.', tips: 'Kling responds well to "slow motion" and "commercial ad quality"; split complex stories into segments.' },
      { title: 'Animate product photo with Runway', difficulty: 'Intermediate', duration: '~18 min', desc: 'Upload static product photo; Runway image-to-video for 4s dynamic hero—for ad opener or website hero.', steps: ['Register Runway → Gen-3 image-to-video', 'Upload clear product JPG/PNG (white background best)', 'Paste motion prompt below', 'Generate 4s, check motion is natural', 'Export, loop or add music in editor', 'Watch product edges—if warped, use simpler motion words'], prompt: 'Slow cinematic push-in, subtle parallax, product stays sharp, soft studio light, gentle shadow movement, no morphing, commercial ad quality', result: '4s product motion clip for hero or landing page.', tips: 'Image-to-video: small motion (slow push / subtle rotate); big motion warps easily.' },
      { title: '30-second brand promo track with Suno', difficulty: 'Beginner', duration: '~10 min', desc: 'Suno v4 generates short promo music from brand tone—instrumental + rhythm for video BGM or event warmup.', steps: ['Register Suno → Create', 'Custom mode, paste style description', 'Generate 2 tracks, pick steadier rhythm', 'Extend to 30–45s if needed', 'Download MP3, lower volume as video BGM', 'Check Suno license before commercial use'], prompt: 'Instrumental upbeat corporate tech, modern synth and light percussion, optimistic, clean, no vocals, suitable for AI product launch video, 100-110 BPM', result: 'Instrumental brand promo background music.', tips: 'Suno: "Instrumental + mood + BPM + scene" is stable; for lyrics specify language and theme.' },
      { title: 'Organize meeting notes and todos with Notion AI', difficulty: 'Beginner', duration: '~12 min', desc: 'Paste meeting rough notes in Notion; AI produces structured minutes, decisions, and checkable todos.', steps: ['New Notion page "Weekly meeting 2026-06-25"', 'Paste raw notes or transcript', 'Select all → Notion AI → Summarize → Action items', 'Prompt: "Group todos by owner"', 'Convert todos to Notion to-do blocks and @ teammates', 'Share page link for attendees to confirm'], prompt: 'From this page content, output:\n1) Meeting summary (≤5 bullets)\n2) Key decisions\n3) Todo list: owner | task | due date\n4) Open questions\n\nEnglish; do not invent undiscussed items.', result: 'Collaborative meeting page with grouped todos.', tips: 'Notion AI best for "second pass" on existing notes; capture keywords live for accuracy.' },
      { title: '10-minute pitch deck with Gamma', difficulty: 'Beginner', duration: '~10 min', desc: 'Feed outline to Gamma for 10-slide pitch deck—share online or export PDF.', steps: ['Log in Gamma → Create → Presentation', 'Paste pitch outline below, pick minimalist tech theme', 'Review each slide for data and wording', 'Insert product screenshots or charts on key slides', 'AI-rewrite long paragraphs to bullet points', 'Export PDF or share link for preview'], prompt: 'Generate 10-slide English pitch deck:\n\nTopic: AI learning platform "BestWayToLearn.AI"\nAudience: Corporate training leads\nStructure: Cover / Pain / Solution / Demo / Learning path / Cases / Business model / Differentiation / Milestones / Contact\n\nStyle: Dark tech, 3–5 bullets per slide, avoid walls of text', result: '10-slide shareable pitch deck draft.', tips: 'Gamma needs a clear outline; replace numbers and cases with real data.' },
      { title: 'One-page competitor research with Perplexity', difficulty: 'Beginner', duration: '~15 min', desc: 'Perplexity Pro Search for competitive landscape—one-page summary with cited sources.', steps: ['Open Perplexity (Pro for deeper search)', 'Paste research question, wait for retrieval', 'Click citation numbers to verify sources', 'Follow up: "ChatGPT vs Claude vs Gemini feature comparison table"', 'Copy to Notion/Feishu with research date', 'Remove stale or broken source links'], prompt: 'Research the 2026 "AI coding IDE" market: Cursor, Windsurf, GitHub Copilot positioning, pricing, core differences, target users. Output English one-pager: overview | comparison table | 3 selection tips | cited sources', result: 'Cited competitor one-pager for tooling discussions.', tips: 'Perplexity strength is verifiable sources—still confirm pricing on official sites.' },
      { title: 'Turn 3 papers into AI podcast with NotebookLM', difficulty: 'Intermediate', duration: '~20 min', desc: 'Upload 3 related PDF papers, generate Audio Overview podcast—listen to literature highlights on commute.', steps: ['NotebookLM → new Notebook', 'Upload 3 PDFs on same topic (public papers OK)', 'Wait for index, read auto FAQ first', 'Studio → Generate Audio Overview', 'Listen, pause to verify key claims', 'Chat: "Methodology differences across the three papers?"'], prompt: '(After uploading PDFs, ask Notebook:)\n\nCompare the three papers\' research questions, datasets, methods, limitations in a table, and recommend which a beginner should read first.', result: 'AI podcast audio + queryable literature notebook.', tips: 'NotebookLM only uses your uploads—great for lit reviews; cite original papers for academic work.' },
      { title: 'Write long-form WeChat article with ERNIE Bot', difficulty: 'Beginner', duration: '~15 min', desc: 'ERNIE Bot for ~1500-word explainer with title options, structure, and SEO keywords.', steps: ['Open ERNIE Bot, new chat', 'Paste writing task with your topic', 'Ask to "reduce AI tone, add concrete examples"', 'Get 3 titles + 100-word abstract', 'Add real experience/data, cut empty phrases', 'Format for WeChat: subheads, quotes, ending CTA'], prompt: 'Write a 1500-word English explainer:\nTopic: How ordinary people can systematically learn AI (for workplace newcomers)\nStructure: Opening story / 3 myths / 7-day method / Tool picks / Closing CTA\n\nClear subheads, conversational, concrete examples, avoid hollow "in conclusion" filler.', result: 'Draft long-form article ready to edit and publish.', tips: 'ERNIE knows Chinese internet context; fact-check and add personal angle before publishing.' },
      { title: 'Analyze Excel sales data with ChatGPT', difficulty: 'Intermediate', duration: '~18 min', desc: 'Upload CSV sample; ChatGPT advanced analysis for trends, top SKUs, anomaly months, and chart suggestions.', steps: ['Prepare anonymized sales.csv (month, SKU, qty, amount)', 'ChatGPT new chat, upload file (Plus/Team)', 'Paste analysis prompt', 'Review Python analysis or table output', 'Ask for "top 5 SKUs to restock this month"', 'Use enterprise tier or local analysis for sensitive data'], prompt: 'Analyze uploaded sales CSV:\n1) Monthly revenue trend\n2) Top 5 SKUs by amount\n3) Months with unusual volume drops and data-driven possible reasons (no speculation)\n4) Suggest 2 charts and insights\n5) 3 action items for the business team\n\nEnglish, lists + short conclusions.', result: 'Sales trend insights and chart suggestions for weekly meeting.', tips: 'Anonymize before upload; aggregate large data or have AI write Python to run locally.' },
      { title: 'Build interactive todo page with Claude Artifacts', difficulty: 'Intermediate', duration: '~15 min', desc: 'Claude Artifacts generates single-file HTML todo app with localStorage and checkboxes.', steps: ['Claude new chat, paste prompt', 'Preview todo page in Artifacts—add/complete/delete', 'If style off: "Simpler dark UI, larger tap targets"', 'Export or copy HTML from Artifacts', 'Double-click HTML in browser, verify localStorage', 'Deploy to GitHub Pages as personal tool'], prompt: 'Create a single-file HTML todo app (inline CSS+JS):\n- Add/complete/delete\n- localStorage persistence\n- Dark minimal UI, mobile-friendly\n- English UI\n\nOutput full runnable code in Artifacts and explain how to use.', result: 'Double-click runnable local todo web app.', tips: 'Claude Artifacts great for quick prototypes; import to Cursor for complex features.' },
      { title: 'Scaffold REST API with Cursor Agent', difficulty: 'Intermediate', duration: '~30 min', desc: 'Cursor Agent from zero: Node.js Express API with health check, TODO CRUD, and README.', steps: ['New folder todo-api, open in Cursor', 'Agent mode: paste requirements, allow multi-file creation', 'Terminal: npm install && npm run dev', 'curl or Postman test GET /health and POST /todos', 'If port conflict, ask Agent to update .env example', 'Read Agent README, add your deployment notes'], prompt: 'Create Node.js + Express REST API:\n- GET /health\n- CRUD /todos (in-memory storage OK)\n- package.json, README, .gitignore\n- Simple error handling and English comments\n- Give start command and test examples', result: 'Locally runnable TODO API scaffold with test instructions.', tips: 'Allow file writes and terminal in Agent mode; pass health check before adding database.' },
      { title: 'Design coffee brand poster with Midjourney', difficulty: 'Beginner', duration: '~12 min', desc: 'Commercial poster practice: subject, negative space, brand colors, typography area—not just landscape.', steps: ['Midjourney Create new task', 'Paste prompt, note --ar 2:3 vertical poster', 'Upscale version with space for logo', 'Overlay brand name and slogan in Figma/Canva (AI text is unreliable)', 'Vary warm/cool mood', 'Export JPG for store standee or social'], prompt: 'minimalist coffee brand poster, single ceramic cup on wooden table, morning light, large negative space at top for typography, earthy brown and cream palette, editorial photography, clean composition --ar 2:3 --style raw --v 6', result: 'Vertical coffee poster base image for text overlay.', tips: 'Reserve space: large negative space at top; add text in post—Midjourney text often garbles.' },
      { title: 'Batch App icon drafts with ChatGPT', difficulty: 'Beginner', duration: '~8 min', desc: 'DALL·E in ChatGPT generates 4 App icon style drafts for Figma refinement.', steps: ['ChatGPT new chat, confirm image generation available', 'Paste prompt, request 4 color variants', 'Download best 1024px match to brand', 'Figma rounded mask for iOS icon spec', 'Iterate "flatter, fewer details" if needed', 'Check readability at 60×60 small size'], prompt: 'Generate App icon design drafts (1024x1024, square):\n\nApp: AI learning platform "BestWayToLearn.AI"\nElements: Abstract neuron/star, tech feel\nStyle: Flat gradient, dark background, high contrast, no text\n\nGive 4 color schemes in one response.', result: '4 App icon drafts to refine in design tools.', tips: 'Test at 60×60—avoid too many thin lines.' },
      { title: 'English voiceover for video with ElevenLabs', difficulty: 'Beginner', duration: '~12 min', desc: 'Pick ElevenLabs preset English voice for 60s product intro MP3—import to editor.', steps: ['ElevenLabs → Text to Speech, pro English male/female', 'Paste 60s script below, tune Stability/Clarity', 'Generate, fix mispronounced words (spell out "A I")', 'Download MP3, import to video editor', 'Align to visuals, trim pauses', 'Note dubbing source if platform requires'], prompt: 'Welcome to BestWayToLearn.AI. In just seven days, you will move from AI basics to real projects. Learn how large language models work, pick the right tools, and practice with hands-on tutorials. Start with cognition, master the tools, ship real work, then validate your skills. Your AI journey begins now.', result: 'English narration MP3 embeddable in video.', tips: 'Spell abbreviations for pronunciation (A I / Chat G P T); split long scripts into segments.' },
      { title: 'Batch short-video voiceover with Fish Audio', difficulty: 'Intermediate', duration: '~18 min', desc: 'Use cloned or preset Chinese voice for 3 short scripts—boost short-video production.', steps: ['Fish Audio login, pick stable Chinese voice', 'Generate 3 × 30s scripts separately', 'Unify speed/volume, download MP3 as seq1–3', 'Align in editor with visuals and subtitles', 'Fix pronunciation of "AI", "model" if needed', 'Backup scripts and audio; reusable voiceover template'], prompt: '【Script 1】Did you know? You don\'t need all the math before using AI. Task-driven learning first, theory later—that\'s fastest.\n\n【Script 2】Don\'t hoard tools: one chat AI + one specialist for your main workflow is enough.\n\n【Script 3】45 minutes a day for one week—you can complete cognition through practice.', result: '3 Chinese voiceover MP3s for short video.', tips: 'Unify voice params for batch work; keep scripts 30–45s for editing rhythm.' },
      { title: 'Push daily competitor updates with OpenClaw', difficulty: 'Advanced', duration: '~25 min', desc: 'Beyond stock news—OpenClaw weekdays gather competitor site/blog updates and push to Slack.', steps: ['Ensure OpenClaw Gateway running, Slack webhook/bot connected', 'Replace competitor list in cron command with your space', 'After create, openclaw cron run manual test', 'Check Slack message has source links and dates', 'If noisy, message should require "major changes only"', 'Respect robots.txt; no aggressive crawling'], prompt: 'openclaw cron create "0 9 * * 1-5" \\\n  --name "Competitor daily digest" \\\n  --tz "Asia/Shanghai" \\\n  --session isolated \\\n  --message "You are a competitive intelligence analyst. Daily check changelog/blog updates for: Cursor, Windsurf, GitHub Copilot. Output English brief (≤300 words): 1) Today\'s changes 2) User impact 3) Source links. If none: \'No major public updates today.\'" \\\n  --announce \\\n  --channel slack \\\n  --to "YOUR_SLACK_CHANNEL_ID"', result: 'Weekday morning competitor digest in Slack.', tips: 'Like stock cron, use isolated session; always cite sources for intelligence use.' },
    ],
    practiceCategories: {
      '全部': 'All',
      '职场办公': 'Workplace & office',
      '学习成长': 'Learning & growth',
      '编程开发': 'Coding & development',
      '数据营销': 'Data & marketing',
      '翻译法务': 'Translation & legal',
    },
    practices: [
      { title: 'Weekly reports & email writing', desc: 'List work highlights as bullets; AI expands into structured weekly reports or professional emails.', steps: ['List 3–5 key items this week', 'Note measurable outcomes per item', 'Ask AI to format per company style'], prompt: 'You are a professional workplace communication consultant.\nExpand the following into a concise professional weekly report (~300 words):\n[Paste bullets]\nRequirements: data-driven, highlight outcomes, positive professional tone.' },
      { title: 'Learning something new', desc: 'Use AI as a private tutor—analogies, quiz questions, and correction of misunderstandings.', steps: ['Define topic and learning goal', 'Ask for Feynman-style explanation', 'Do practice questions to check understanding'], prompt: 'Teach me [topic] using the Feynman technique.\n1. Explain core concepts with everyday analogies\n2. List 3 common misconceptions\n3. Give 2 multiple-choice questions with answers and explanations' },
      { title: 'Code debugging & explanation', desc: 'Paste errors or code snippets; AI locates issues, explains causes, and suggests fixes.', steps: ['Paste full error message', 'Include relevant code context', 'Ask for cause, fix, and prevention'], prompt: 'This code fails at runtime:\n[Code and error]\nPlease: 1) Explain the error in English 2) Provide fixed code 3) How to avoid it' },
      { title: 'Data analysis & visualization', desc: 'Upload CSV/Excel; AI finds trends, anomalies, and suggests chart types.', steps: ['Upload data file', 'State analysis goal', 'Request stats, insights, and chart suggestions'], prompt: 'Analyze the uploaded sales data:\n1. Basic statistics overview\n2. Top 3 trends and anomalies\n3. Suggest 2 high-value charts\n4. Three actionable business recommendations' },
      { title: 'Marketing copy creation', desc: 'Provide product and audience; get multiple copy versions for A/B testing.', steps: ['Describe product and selling points', 'Define target audience persona', 'Request 3 style variants'], prompt: 'Product: [description] Audience: [description]\nGenerate 3 marketing copy versions (professional/lively/urgent), each with headline + body (~100 words) + CTA.' },
      { title: 'Meeting notes organization', desc: 'Feed transcript or messy notes to AI for structured minutes and action items.', steps: ['Provide meeting transcript or notes', 'Note attendees and topic', 'Request structured output'], prompt: 'Organize this meeting record:\n## Topic ## Key decisions ## Todos (owner + due date) ## Open questions\n\n[Paste record]' },
      { title: 'Resume & cover letter', desc: 'Optimize resume for a specific role and generate a personalized cover letter.', steps: ['Paste target job description', 'List your relevant experience', 'Ask for matched optimization'], prompt: 'Target role: [JD]\nMy background: [resume highlights]\nPlease: 1) Optimize experience bullets (highlight matches) 2) Write ~200-word cover letter' },
      { title: 'Product prototype ideation', desc: 'Describe product idea; AI generates user stories, feature list, and page structure.', steps: ['One-paragraph product idea', 'Define target users', 'Request MVP feature list'], prompt: 'I want to build [product description].\nOutput: 1) 3 user stories 2) Prioritized MVP feature list 3) Main page wireframe description 4) Risks and mitigations' },
      { title: 'Translation & localization', desc: 'Beyond literal translation—adapt cultural context, tone, and format.', steps: ['Provide source text and target language', 'Explain audience and cultural context', 'Request non-literal adaptation'], prompt: 'Translate the following to [language]:\n1. Natural local expressions 2. Preserve original tone 3. Note 2 cultural adaptations\n\n[Source text]' },
      { title: 'Competitor & market research', desc: 'AI maps competitive landscape and trends; produce SWOT analysis.', steps: ['Define industry and scope', 'Request structured competitor comparison', 'Verify key data sources'], prompt: 'Competitive analysis for [industry/product]:\n1. Five main competitors and differences 2. SWOT 3. Three differentiation opportunities\nCite sources.' },
      { title: 'Instructional design', desc: 'Design course outline, materials, and activities for a topic and audience.', steps: ['Audience and learning objectives', 'Specify duration and format', 'Request full teaching plan'], prompt: 'Audience: [background] Topic: [topic] Duration: [hours]\nDesign: 1) Learning objectives 2) Course outline 3) Interactive segments 4) Homework' },
      { title: 'Image & cover design', desc: 'Text prompts generate illustrations, covers, and visuals to validate direction fast.', steps: ['Clarify style and use case', 'Write English/Chinese prompt', 'Iterate 2–3 rounds'], prompt: 'A [style] illustration of [subject], [color] palette, [composition], clean composition, high quality --ar 16:9' },
      { title: 'Legal contract review', desc: 'Upload contract; AI flags risk clauses, explains terms, suggests revisions.', steps: ['Upload full contract', 'State your position (Party A/B)', 'Request risk highlights'], prompt: 'Review this contract (we are [Party A/B]):\n1. Flag 5 risk clauses 2. Explain legal terms 3. Suggest revisions\n\n[Contract text]' },
      { title: 'Social media content', desc: 'Generate platform-adapted posts for Xiaohongshu/Weibo/LinkedIn from core message.', steps: ['Pick platform and audience', 'Provide core message points', 'Request versions + hashtags'], prompt: 'Create a [platform] post about [topic]:\n1. Attention-grabbing headline 2. Body (~200 words) 3. Five hashtags 4. Engagement CTA' },
      { title: 'Excel formulas & data processing', desc: 'Describe data task; AI generates Excel/Sheets formulas or Python scripts.', steps: ['Describe data structure and goal', 'Give sample input/output', 'Request formula or script'], prompt: 'Excel data: [structure description]\nNeed: [processing goal]\nProvide: 1) Excel formula 2) Steps 3) Caveats' },
      { title: 'Personal knowledge management', desc: 'Organize reading notes and clippings into a structured knowledge base.', steps: ['Collect scattered notes', 'Define taxonomy', 'AI generates summaries and links'], prompt: 'Organize these notes into a structured knowledge base:\n1. Group by theme 2) Summary per theme 3) Key concepts and links\n\n[Notes]' },
    ],
    promptLab: {
      tasks: {
        '内容写作': 'Please write content according to the following requirements.',
        '问题分析': 'Please analyze the following problem in depth.',
        '代码开发': 'Please write code according to the following requirements.',
        '学习辅导': 'Please help me understand the following topic as a teacher would.',
        '数据分析': 'Please perform data analysis on the following data or question.',
        '创意策划': 'Please provide creative ideas for the following scenario.',
        '翻译润色': 'Please translate or polish the following content.',
        '会议纪要': 'Please organize the following into structured meeting minutes.',
        '竞品调研': 'Please conduct competitor and market analysis for the following industry/product.',
        '简历优化': 'Please optimize the resume and job materials based on the following information.',
      },
      taskLabels: {
        '内容写作': 'Content writing',
        '问题分析': 'Problem analysis',
        '代码开发': 'Code development',
        '学习辅导': 'Learning support',
        '数据分析': 'Data analysis',
        '创意策划': 'Creative planning',
        '翻译润色': 'Translation & polish',
        '会议纪要': 'Meeting notes',
        '竞品调研': 'Competitor research',
        '简历优化': 'Resume optimization',
      },
      tools: {
        '内容写作': ['ChatGPT', 'Claude', 'Qwen'],
        '问题分析': ['ChatGPT', 'Claude', 'DeepSeek'],
        '代码开发': ['Cursor', 'Claude', 'DeepSeek'],
        '学习辅导': ['ChatGPT', 'Claude', 'Perplexity'],
        '数据分析': ['ChatGPT', 'Claude', 'Qwen'],
        '创意策划': ['Claude', 'ChatGPT', 'Gemini'],
        '翻译润色': ['DeepL', 'Claude', 'ChatGPT'],
        '会议纪要': ['Kimi', 'Claude', 'Qwen'],
        '竞品调研': ['Perplexity', 'ChatGPT', 'NotebookLM'],
        '简历优化': ['ChatGPT', 'Claude', 'ERNIE Bot'],
      },
      presets: {
        '内容写作': { role: 'Senior content strategist', context: 'Writing topic:\nTarget audience:\nCore message points (3–5):\nChannel and word limit:', output: 'Complete draft with title, lede, 2–3 subheaded sections, and closing summary or CTA', tone: 'Professional & rigorous' },
        '问题分析': { role: 'Senior strategy consultant', context: 'Problem to analyze:\nKnown background and constraints:\nRelated data or observations:\nYour stance/decision goal:', output: 'Structured report: problem definition → root-cause hypotheses → option comparison → recommendation and next steps', tone: 'Professional & rigorous' },
        '代码开发': { role: 'Full-stack engineer', context: 'Tech stack:\nFeature requirements:\nInput/output examples:\nExisting code or errors (if any):', output: 'Runnable code + English comments + brief usage notes + suggested test cases', tone: 'Concise & direct' },
        '学习辅导': { role: 'Feynman-style tutor', context: 'Learning topic:\nMy current level:\nSpecific confusion:\nTime available:', output: 'Layered explanation (analogy + key concepts + misconceptions) + 2 self-check questions with answers', tone: 'Clear & approachable' },
        '数据分析': { role: 'Data analyst', context: 'Data description (source, fields, time range):\nAnalysis goal:\nBusiness questions:\nKnown anomalies or hypotheses:', output: 'Overview → 3 key findings → chart suggestions → actionable recommendations; label confirmed/inferred/to-verify', tone: 'Professional & rigorous' },
        '创意策划': { role: 'Creative director', context: 'Brand/product:\nTarget audience:\nChannel and budget constraints:\nCore message:', output: '2–3 creative concepts: each with core idea, execution path, expected impact, and risks', tone: 'Creative & exploratory' },
        '翻译润色': { role: 'Bilingual editor', context: 'Source language and content:\nTarget language and audience:\nStyle (formal/casual/marketing):\nTerms or brand names to preserve:', output: 'Polished/translated final + notes on 2 key wording choices', tone: 'Professional & rigorous' },
        '会议纪要': { role: 'Senior executive assistant', context: 'Meeting topic:\nAttendees and roles:\nDiscussion points (paste notes/transcript):\nVerbal todos (if any):', output: 'Structured minutes: topic & time → key decisions → todo table (owner + due date) → open questions', tone: 'Concise & direct' },
        '竞品调研': { role: 'Market research analyst', context: 'Industry/track:\nOur product positioning:\nCompetitors to compare (3–5):\nFocus (features/pricing/channels, etc.):', output: 'Competitor comparison table + SWOT summary + 3 differentiation opportunities; cite sources for key claims', tone: 'Professional & rigorous' },
        '简历优化': { role: 'Senior recruiting consultant', context: 'Target job description summary:\nCurrent resume highlights (experience/skills/projects):\nYears of experience and industry:\nStrengths to highlight / areas to downplay:', output: 'Optimized experience bullets (JD keywords) + ~200-word cover letter + 3 interview prep tips', tone: 'Professional & rigorous' },
      },
      tones: {
        '专业严谨': 'Professional & rigorous',
        '通俗易懂': 'Clear & approachable',
        '创意发散': 'Creative & exploratory',
        '简洁直接': 'Concise & direct',
      },
      ui: {
        casesLabel: 'Real-world cases',
        selectCaseStart: 'Select a case to start',
        copyPrompt: 'Copy prompt',
        configTitle: 'Prompt configuration',
        taskType: 'Task type',
        role: 'Role',
        rolePlaceholder: 'e.g. Senior product manager',
        context: 'Context',
        contextPlaceholder: 'Describe scenario, audience, constraints…',
        output: 'Expected output',
        outputPlaceholder: 'e.g. A 500-word PRD outline',
        tone: 'Tone',
        generateSimulate: 'Generate & simulate',
        chatTitle: 'Prompt & reply · side-by-side simulation',
        resetSim: 'Reset simulation',
        simEmptyTitle: 'Simulation not started',
        simEmptyDesc: 'Pick a case above or edit the left panel and click "Generate & simulate". Prompt, AI reply, and action guide appear here.',
        guideTitle: 'Simulation complete · Try in a real tool',
        guideToolsLabel: 'Recommended tools:',
        followupPlaceholder: 'Follow up, e.g. "Make it shorter"…',
        send: 'Send',
        disclaimer: 'Local preset demo to understand prompt structure. Copy the prompt to recommended tools for real results.',
        tryFollowup: 'Try asking:',
        taskPrefix: 'Task:',
        casePrefix: 'Case:',
        customScene: 'Custom scenario',
        defaultRole: 'Senior expert',
        defaultContext: '[Please add specific context]',
        defaultOutput: '[Describe expected output]',
        buildPrompt: {
          roleHeader: '# Role',
          rolePrefix: 'You are a',
          taskHeader: '# Task',
          contextHeader: '# Context',
          outputHeader: '# Expected output',
          requirementsHeader: '# Requirements',
          toneLine: '- Tone:',
          clarifyLine: '- If information is missing, list 2–3 key questions to confirm first',
          structureLine: '- Clear structure with headings and lists',
          uncertainLine: '- Mark uncertain content clearly; do not invent facts',
        },
        systemLabel: 'System',
        simulating: 'Simulating…',
        promptSent: 'Prompt sent',
        aiReply: 'AI reply',
        copyFail: 'Copy failed',
        defaultGuideSteps: [
          'Click "Copy prompt" in the toolbar',
          'Open ChatGPT or Claude and start a new chat',
          'Paste the prompt and replace context with your real scenario',
          'Iterate on the reply: "shorter", "as a table", "add data"',
        ],
      },
      cases: [
        {
          id: 'weekly-report',
          title: 'Expand weekly report',
          scene: 'Workplace communication',
          task: '内容写作',
          role: 'Workplace communication consultant',
          context: 'This week: 1) Shipped BestWayToLearn.AI deploy tool v2, fixed Nginx routing conflict; 2) Two customer demos, 5 feedback items; 3) Prompt lab redesign proposal. Blocker: server env check occasionally times out.',
          output: '~300-word professional weekly report highlighting metrics and next-week plan',
          tone: 'Professional & rigorous',
          response: `## Weekly Report

**Reporter**: Product ops · Cloud project team
**Period**: Jun 23 – Jun 25

### Key outcomes
1. **Deploy tool v2 live**: Fixed env-check crash and Nginx default_server conflict; full deploy verified, site accessible.
2. **Two customer demos**: Training leads and IT ops; 5 actionable feedback items on one-click deploy and learning path clarity.
3. **Prompt lab redesign**: Case library + side-by-side simulation to lower the beginner barrier.

### Metrics
- Deploy success rate: 100% in demo env (3/3)
- On-site satisfaction: 4.6 / 5
- Docs updated: deploy guide + 6 lab cases

### Issues & risks
- Env check occasionally times out (>15s) on weak networks; repro steps logged; retry and timeout UX planned.

### Next week
1. Weak-network detection + log export
2. Adjust Day 4 prompt module from customer feedback
3. Prepare external demo script

---
Ask if you want a shorter or email version for a specific audience.`,
          followups: [
            { user: 'Compress to under 200 words, more conversational', ai: `**Three things this week:**\n1. Deploy tool v2 is live—Nginx conflict fixed, site works.\n2. Two customer demos; top ask was one-click deploy.\n3. Prompt lab got 6 real cases with side-by-side simulation.\n\n**Blocker:** env check sometimes times out on weak networks—adding retry next week.\n\n**Next:** better detection, prompt module tweaks, demo script.` },
          ],
          realGuide: {
            tools: ['ChatGPT', 'Qwen', 'Kimi'],
            steps: [
              'Copy the generated prompt (or user message) from the chat',
              'Open ChatGPT / Qwen, new chat, paste',
              'Replace with your real weekly highlights in Context',
              'Iterate: "shorter", "email version", "highlight metrics"',
            ],
            link: { label: 'More writing scenario templates', href: '#practice' },
          },
        },
        {
          id: 'meeting-notes',
          title: 'Meeting notes cleanup',
          scene: 'Meeting collaboration',
          task: '会议纪要',
          role: 'Senior executive assistant',
          context: 'Product review for BestWayToLearn.AI learning path enterprise module. Attendees: Alex (PM), Blake (Eng), Casey (Design). Alex wants Q3 kickoff; Blake worried about headcount, prefers MVP; Casey wants unified visual system. Verbal todos: Blake tech assessment in two weeks; Casey component inventory.',
          output: 'Structured minutes: decisions, todos (owner + due date), open questions',
          tone: 'Concise & direct',
          response: `## Meeting minutes

**Topic**: BestWayToLearn.AI learning path · enterprise module review
**Time**: 2026-06-25 14:00–15:00
**Attendees**: Alex (PM), Blake (Eng), Casey (Design)

### Key decisions
1. **Enterprise direction approved**, but not full launch yet—MVP first to validate core hypothesis.
2. **Visual system first**: enterprise pages must reuse the shared component library.

### Action items
| Item | Owner | Due |
|------|-------|-----|
| Enterprise MVP tech assessment (effort/risks/deps) | Blake | Jul 9 |
| Component library inventory and gaps | Casey | Jul 5 |
| Update Q3 roadmap draft from assessment | Alex | Jul 12 |

### Open questions
- MVP scope: deploy tool only, or include quiz reporting?
- Separate pricing page and trial flow needed?

---
Need a background summary or Feishu/DingTalk todo format?`,
          followups: [
            { user: 'Convert to Feishu todo format', ai: `【Feishu todos】\n\n☐ Enterprise MVP tech assessment — @Blake — due Jul 9\n☐ Component library gaps — @Casey — due Jul 5\n☐ Update Q3 roadmap — @Alex — due Jul 12\n\nOpen: MVP scope; pricing/trial page.` },
          ],
          realGuide: {
            tools: ['Kimi', 'Claude', 'Qwen'],
            steps: [
              'After the meeting, paste transcript or rough notes into AI',
              'Use this case\'s structured prompt; note attendees and your focus',
              'Verify todos match what was actually agreed—do not forward unverified versions',
              'Sync confirmed todos to Feishu/DingTalk/Notion',
            ],
            link: { label: 'Kimi long-document hands-on', href: '#hands-on' },
          },
        },
        {
          id: 'code-debug',
          title: 'Fix Python divide-by-zero',
          scene: 'Code debugging',
          task: '代码开发',
          role: 'Senior Python engineer',
          context: 'Function averages positive numbers; crashes on empty list. Code:\ndef avg_positive(nums):\n    pos = [n for n in nums if n > 0]\n    return sum(pos) / len(pos)',
          output: 'Explain error, fixed code, edge handling, and 2 test cases',
          tone: 'Clear & approachable',
          response: `## Cause

When \`nums\` is empty or has no positives, \`pos\` is empty, \`len(pos)\` is 0, and \`sum(pos) / len(pos)\` raises **ZeroDivisionError**.

## Fixed code

\`\`\`python
def avg_positive(nums):
    """Return average of positive numbers; None if none."""
    if not nums:
        return None
    pos = [n for n in nums if n > 0]
    if not pos:
        return None
    return sum(pos) / len(pos)


assert avg_positive([1, -2, 3, 4]) == 2.5
assert avg_positive([-1, -2]) is None
assert avg_positive([]) is None
print("All tests passed")
\`\`\`

## Notes
1. **Filter then guard**—never divide by empty list length.
2. **Return None** when no positives; callers branch with \`if result is None\`.
3. Return \`0.0\` instead if business rules require it.

Want a custom exception or typed version?`,
          followups: [],
          realGuide: {
            tools: ['Cursor', 'DeepSeek', 'GitHub Copilot'],
            steps: [
              'In Cursor / VS Code, select failing code, open AI chat (Ctrl+L)',
              'Paste full stack trace + code context—not just one line',
              'Ask: explain → fix → add tests, same structure as this case',
              'Run \`python test.py\` locally before committing',
            ],
            link: { label: 'Cursor coding hands-on', href: '#hands-on' },
          },
        },
        {
          id: 'xhs-copy',
          title: 'Xiaohongshu-style post',
          scene: 'E-commerce marketing',
          task: '内容写作',
          role: 'Senior Xiaohongshu operator',
          context: 'Product: portable cold-brew coffee cup. Selling points: 5-min brew, double-wall heat protection, minimalist look. Audience: office workers 25–35, commute. No superlatives like "best" or "#1."',
          output: '3 titles + ~250-word post + 5 hashtags + comment CTA',
          tone: 'Clear & approachable',
          response: `### Title options
1. Commute in 5 min｜My portable cold-brew cup ☕
2. Office coffee hack—no overnight soak needed
3. Minimal cup that gets "where\'s the link?" at work

### Body (~250 words)
Cold brew used to mean soaking overnight—and spills on the commute. This portable cup changed my routine: **five minutes**, and I have a smooth cup at my desk.

What I like:
✅ **Double-wall**—warm or cold, comfortable to hold
✅ **Clean look**—doesn\'t scream on the desk, photos well

I prep grounds the night before, add water in the morning, done by arrival. Saves vs delivery and cuts disposable cups.

For commuters who want easy ritual without gear overload—not barista gear, but **daily-friendly**.

### Hashtags
#coldbrew #commuteessentials #officecoffee #portablecup #workfuel

### Comment CTA
Hot or cold brew on your commute? Share below—I\'ll post a "one week, no repeat" brew guide.

---
Want a livelier or review-style version?`,
          followups: [],
          realGuide: {
            tools: ['ChatGPT', 'ERNIE Bot', 'Claude'],
            steps: [
              'Put real selling points, audience, and banned words in the prompt',
              'Get 3 titles first, then expand the one you like',
              'Human check: ad law, brand tone, pricing',
              'Pair with Midjourney / Tongyi Wanxiang for product scene images',
            ],
            link: { label: 'Image generation hands-on', href: '#hands-on' },
          },
        },
        {
          id: 'market-brief',
          title: '7-day market brief',
          scene: 'Business research',
          task: '竞品调研',
          role: 'Industry research analyst',
          context: 'Industry: 2026 China cross-border e-commerce. Focus: Amazon policy, TikTok Shop, indie SaaS, logistics costs. ~400-word English brief with sources; write "None" if no reliable info.',
          output: '400-word brief: 3 headlines + SMB impact + 2 watch variables next week',
          tone: 'Professional & rigorous',
          response: `## Cross-border e-commerce 7-day brief (demo structure)

> ⚠️ Teaching demo—re-run retrieval in Perplexity / Metaso before real use.

### Headlines
1. **Amazon increased compliance spot-checks in some categories** (seller forum summary)—SMBs need CPC/label docs ready.
2. **TikTok Shop SEA onboarding push** (official page)—Q3 fee promos for sellers with short-video capability.
3. **Indie SaaS bundles AI site builder + multilingual packs** (Shopify changelog)—lower build barrier, SEO still operator-owned.

### SMB impact
- **Compliance cost up**: incomplete docs risk delistings—maintain category checklists.
- **Channel diversification**: Amazon-only risk rises; TikTok/indie stores as incremental channels.
- **Tools cheaper, ops harder**: building is easier; conversion depends on content and ads.

### Watch next week
1. Peak-season logistics surcharges (carrier rate pages).
2. US/EU import declaration field changes (customs and platform seller notices).

---
Want "Amazon-only" or a competitor comparison table?`,
          followups: [],
          realGuide: {
            tools: ['Perplexity', 'Metaso AI Search', 'ChatGPT'],
            steps: [
              'Use Perplexity / Metaso for **cited** retrieval—not model memory alone',
              'Paste results into ChatGPT; compress to this brief format',
              'Verify each source link; drop unverifiable items',
              'Schedule daily briefs with OpenClaw Cron (see hands-on case)',
            ],
            link: { label: 'OpenClaw scheduled brief hands-on', href: '#hands-on' },
          },
        },
        {
          id: 'feynman-transformer',
          title: 'Feynman: Transformer',
          scene: 'Learning support',
          task: '学习辅导',
          role: 'Patient teacher who uses analogies',
          context: 'Topic: Transformer self-attention. I\'m a product manager with no deep learning background; 10 minutes to grasp what problem it solves vs RNN.',
          output: 'Plain analogy + 3 misconceptions + 2 multiple-choice questions with explanations',
          tone: 'Clear & approachable',
          response: `## Understanding Transformer with Feynman

### One sentence
Transformer lets the model **see all words at once and decide what to focus on**, understanding long sentences and distant relationships better.

### Analogy
Meeting with 20 speakers:
- **RNN** = taking notes line by line—easy to forget early speakers.
- **Transformer (self-attention)** = everything on a wall board—you link "budget" from speaker 3 to the closing summary.

### Problems it solves
1. **Long-range dependencies**: "Because of rain, I canceled the outdoor launch in Shanghai"—"rain" and "canceled" are far apart; attention links them directly.
2. **Parallel training**: process whole sentences at once—faster than RNN step-by-step—enables large models.

### Misconceptions
| Myth | Reality |
|------|---------|
| Transformer = translation only | General architecture—GPT, BERT, multimodal models use it |
| Attention = human attention | Mathematical weights over other tokens |
| More layers = always better | Data, training, and task fit matter |

### Quiz
**Q1**: Self-attention vs RNN main advantage?
A. English only  B. Long-range deps + parallelism  C. No training  D. No hallucination
**Answer: B**

**Q2**: Does Transformer alone eliminate hallucination?
A. Yes  B. No—need retrieval, tools, human verification
**Answer: B**

---
Ask about Q/K/V or how this relates to GPT.`,
          followups: [
            { user: 'Explain Q/K/V with one image metaphor', ai: `Think **library search**:\n\n- **Query**: what topic you want\n- **Key**: label on each book spine\n- **Value**: content inside the book\n\nThe model scores how well its Q matches every K, then reads more from matching V values.\n\nSelf-attention = **weighted mix of context**, not magic.\n\n(In practice, ask ChatGPT for a mermaid diagram.)` },
          ],
          realGuide: {
            tools: ['ChatGPT', 'Claude', 'Perplexity'],
            steps: [
              'State who you are, what you know, what you want to understand (as in this case)',
              'Ask for analogy + quiz; answer immediately to self-test',
              'Follow up "why not A?" on wrong options',
              'Pair with this site\'s AI fundamentals module cards',
            ],
            link: { label: 'AI fundamentals module', href: '#fundamentals' },
          },
        },
      ],
    },
    monetize: {
      categories: {
        '全部': 'All',
        '内容创作': 'Content creation',
        '技术服务': 'Tech services',
        '自动化': 'Automation',
        '知识服务': 'Knowledge services',
        '教育培训': 'Education & training',
      },
      meta: {
        lead: 'After learning the tools on this site, you don\'t need to become an "AI engineer" overnight. A realistic path: use AI to amplify your existing skills 3–10× in content, design, automation, research, and training—freelance or side income. All 30 directions below use tools we cover; barriers are manageable; start with small paid validations.',
        workTypes: [
          { label: 'Content creation', desc: 'Articles, short video, podcast—AI drafts and visuals; you own topic and tone' },
          { label: 'Tech services', desc: 'Bot builds, scripts, landing pages—project-based fees' },
          { label: 'Automation', desc: 'Workflow integration, scheduled briefs—monthly maintenance or per-run setup' },
          { label: 'Knowledge services', desc: 'Research briefs, prompt packs, industry templates—subscription or one-time' },
          { label: 'Education & training', desc: 'Corporate workshops, community coaching—teach others AI productivity' },
        ],
        principles: [
          'Ship one portfolio case before quoting',
          'Define human review boundaries—don\'t deliver raw AI output as final',
          'Validate with friends/small gigs before scaling to platforms',
          'Chain 2–3 tools into a pipeline—worth more than single-tool use',
        ],
      },
      ui: {
        deliverables: 'Deliverables:',
        monetize: 'Monetization:',
        channels: 'Client channels:',
        note: 'Note:',
        difficulty: { '入门': 'Beginner', '进阶': 'Intermediate', '高级': 'Advanced' },
      },
      projects: [
        { title: 'Social content matrix management', category: 'Content creation', difficulty: 'Beginner', income: '$280–1,100/mo', desc: 'Maintain WeChat/Xiaohongshu/Douyin for local businesses, creators, or small brands—AI batch topics, copy, covers, and video scripts; you handle cadence and analytics.', deliverables: '3–5 posts/week + 2 video scripts + cover asset pack', monetize: 'Monthly retainer ($210–700/account); or per piece ($12–28 post, $22–55 script)', channels: 'Xiaohongshu gigs, marketplaces, referrals, local outreach', steps: ['Pick vertical (food, education, beauty) and demo content set', 'ChatGPT 7-day topic calendar; Midjourney/Kling for visuals', 'Low-price first-month trial to land first client', 'Use read/follower screenshots as case studies to raise rates'], tip: 'Agree revision rounds and originality upfront; sensitive industries need human final review.' },
        { title: 'Enterprise knowledge-base support Bot', category: 'Tech services', difficulty: 'Intermediate', income: '$420–2,800/project', desc: 'Turn product manuals, FAQ, and internal docs into conversational Bots on web, Feishu, or WeChat—cut repetitive support.', deliverables: 'Knowledge curation + Bot flows + admin guide + go-live', monetize: 'One-time implementation; optional annual maintenance ($70–280/mo)', channels: 'B2B groups, Feishu ecosystem, freelance platforms, dev community referrals', steps: ['NotebookLM organize client PDFs into Q&A pairs', 'Build RAG in Dify or Coze; test hit rate', '3-minute demo video as sales asset', 'First client half-price for case study + testimonial'], tip: 'Contract: data ownership and update cadence; answers labeled "for reference only."' },
        { title: 'E-commerce visual design outsourcing', category: 'Content creation', difficulty: 'Beginner', income: '$420–2,100/mo', desc: 'Main images, detail pages, promo posters, simple decks for marketplace sellers—fast AI images; you handle brand tone and client comms.', deliverables: '5 main images/set, detail slices, promo poster, optional deck', monetize: 'Main image set $28–110; detail page $70–280; rush +30%', channels: 'Taobao services, marketplaces, design accounts, seller groups', steps: ['3 sample sets across categories (food/3C/apparel)', 'Midjourney/Flux prompt templates for speed', '"24h first draft" as selling point', 'Upsell monthly visual retainer to repeat clients'], tip: 'Confirm model license before commercial use; don\'t feed unlicensed logos.' },
        { title: 'Vertical industry prompt pack sales', category: 'Knowledge services', difficulty: 'Beginner', income: '$140–1,400/mo', desc: 'Package legal, HR, e-commerce, or edtech prompt experience as copy-paste templates with guides and before/after examples.', deliverables: '20–50 structured prompts + scenario notes + 1-page quick start', monetize: 'Newsletter/community ($4–28/pack); enterprise bulk license ($70+)', channels: 'Xiaohongshu, newsletters, social apps, industry WeChat groups', steps: ['Deep-dive one industry you know—10 high-frequency scenarios', 'Validate in prompt lab; screenshot comparisons', 'Gamma 10-page sales page', 'Include "3 months updates" for retention'], tip: 'Templates are starting points; include human review checklist.' },
        { title: 'AI workflow automation integration', category: 'Automation', difficulty: 'Intermediate', income: '$700–4,200/project', desc: 'Connect scattered tools: email leads → spreadsheet → AI summary → Slack/Feishu → weekly rollup—less copy-paste.', deliverables: 'Flow diagram + n8n/OpenClaw workflow + alerts + runbook', monetize: 'Implementation by node complexity; maintenance $110–420/mo', channels: 'IT outsourcing, SaaS communities, LinkedIn, renewals', steps: ['Demo one universal scenario (sales daily report, competitor watch)', 'n8n: Gmail/sheets/Slack minimal loop', 'OpenClaw for scheduled briefs', 'One-week pilot before full payment'], tip: 'Client holds credentials; logs for audit and debugging.' },
        { title: 'AI-dubbed short video production', category: 'Content creation', difficulty: 'Beginner', income: '$14–110/video', desc: 'Voiceover shorts for creators, local businesses, training—clone or TTS, AI visuals and BGM; you edit rhythm and subtitles.', deliverables: '60s vertical video, SRT, cover frame, optional royalty-free BGM', monetize: 'Per video; 10-video monthly ($280–840); clone setup fee extra', channels: 'Douyin services, Bilibili creators, training cos., marketplaces', steps: ['One full Fish Audio/ElevenLabs sample in storefront', 'Standard script template (hook-pain-solution-CTA)', 'Kling/Runway B-roll to cut live-shoot cost', 'Published 3-day delivery price sheet'], tip: 'Clone only authorized voices; label AI content per platform rules.' },
        { title: 'Industry research brief subscription', category: 'Knowledge services', difficulty: 'Intermediate', income: '$14–70/mo per subscriber', desc: 'Weekly briefs for investors, PMs, ops—competitor launches, policy, funding; AI gathers, you curate and comment.', deliverables: 'Weekly PDF/email (3K–5K words) + data table + source links', monetize: 'Individual sub; team seats (5+); custom deep reports ($280+)', channels: 'Paid communities, newsletters, private groups, OpenClaw push', steps: ['Pick niche (AI tools, cross-border e-commerce); 4 free issues', 'Perplexity/Metaso gather; NotebookLM cross-summarize', 'OpenClaw Monday draft, you polish Tuesday', '100 subs → enterprise group pricing'], tip: 'Cite all claims; disclaimer—not investment or legal advice.' },
        { title: 'MVP landing page fast delivery', category: 'Tech services', difficulty: 'Beginner', income: '$420–1,680/project', desc: 'Entrepreneurs/PMs get demo landing page or light web MVP in 1–3 days—for fundraising, validation, or beta signup.', deliverables: 'Responsive landing + form capture + basic SEO + deploy link', monetize: 'Standard page from $420; simple backend/payment extra; 48h rush +50%', channels: 'Founder communities, PH Chinese circle, referrals, indie dev groups', steps: ['Bolt.new skeleton, Cursor polish UX', '2 style case studies (SaaS / consumer brand)', 'Quote sheet: revision rounds and hosting', '15-min screen recording so client can edit copy'], tip: 'Domain and accounts belong to client; mobile + form test before launch.' },
        { title: 'Data processing & script customization', category: 'Tech services', difficulty: 'Intermediate', income: '$140–2,100/project', desc: 'Python/JS utilities for ops, finance, marketing—Excel cleanup, batch rename, light scrapers, auto reports—for non-coders with repetitive work.', deliverables: 'Runnable script + README + one online walkthrough', monetize: 'Hourly or fixed; 30% deposit on complex scope', channels: 'Freelance platforms, remote work communities, WeChat outsourcing, referrals', steps: ['Two Excel merge/dedupe demos in portfolio', 'Cursor/Aider fast delivery with comments', 'Quote one-time vs maintenance separately', 'Deliver source; teach client to run—less support'], tip: 'Confirm scraper legality; don\'t keep client data in your cloud.' },
        { title: 'Corporate AI training & coaching', category: 'Education & training', difficulty: 'Intermediate', income: '$420–1,120/half-day; coaching from $280/mo', desc: 'Non-technical teams (marketing, admin, sales)—tool selection, prompts, office scenarios; optional 30-day WeChat coaching.', deliverables: '2–4h workshop + scenario handbook + homework + optional coaching', monetize: 'Corporate per session; small groups ($28–84/person); annual advisor package', channels: 'HR contacts, training brokers, word of mouth, alumni referrals', steps: ['Condense site 7-day path into half-day intensive', 'Gamma slides; live demo 3 role scenarios', 'Collect satisfaction and efficiency case studies', 'First corp client: free month coaching for case rights'], tip: 'Stress compliance and security—no confidential data in public cloud models.' },
        { title: 'Cross-border e-commerce listing copy', category: 'Content creation', difficulty: 'Beginner', income: '$11–42/listing', desc: 'Amazon, Shopee, Temu titles, bullets, A+ copy in English/multilingual with search-term optimization.', deliverables: 'Title + bullets + keyword sheet + optional ES/JA versions', monetize: 'Per SKU; store bundle (50+); peak season rush +30%', channels: 'Seller groups, forums, freelance platforms, agencies', steps: ['3 benchmark listings in familiar category', 'Perplexity for market search terms and competitor copy', 'Claude multilingual polish; human check cultural taboos', '"7-day launch pack" for small sellers'], tip: 'No false claims or trademark abuse; avoid prohibited categories.' },
        { title: 'AI podcast production outsourcing', category: 'Content creation', difficulty: 'Beginner', income: '$42–210/episode', desc: 'Turn long articles or interview notes into podcast—AI script, intro music, voiceover; you edit and guide distribution.', deliverables: '15–30 min audio + show notes + cover + distribution guide', monetize: 'Per episode; 10-episode season discount; custom intro extra', channels: 'Podcast host communities, knowledge community owners, brand teams', steps: ['NotebookLM article → dialogue script', 'Suno intro; ElevenLabs/Fish Audio voice', 'One full sample on podcast platform', 'Monthly 2-episode subscription for retention'], tip: 'Confirm music and voice commercial rights; client final on opinions.' },
        { title: 'Audiobook / course narration service', category: 'Content creation', difficulty: 'Beginner', income: '$2–6 per 1K words', desc: 'Authors and trainers convert ebooks, lectures, handbooks to professional audio—multi-voice, speed, chapter splits.', deliverables: 'Chapter MP3s + timeline + intro/outro + simple cover', monetize: 'Per word/duration; whole-book package; long-term discount', channels: 'Author communities, writing platforms, training orgs, corporate admin', steps: ['Public-domain chapter as voice sample', 'ChatGPT preprocess (punctuation, heteronyms)', 'Fish Audio for Chinese; ElevenLabs for English', 'Contract: revision rounds and turnaround (~3–5 days/10K words)'], tip: 'Copyrighted content only with rights; voice clone needs written consent.' },
        { title: 'Resume & interview coaching polish', category: 'Knowledge services', difficulty: 'Beginner', income: '$14–70/resume', desc: 'Optimize EN/CN resumes, portfolio blurbs, interview Q&A against target JD with STAR stories.', deliverables: '1–2 resume versions + cover letter + 10 mock interview Q&As', monetize: 'Basic polish $14; advanced with mock interview $42–70; LinkedIn add-on', channels: 'Job-search influencers, campus career groups, marketplaces, forums', steps: ['5 anonymized before/after cases (with permission)', 'Perplexity company/role keywords', 'Claude narrative polish; keep truthful experience', '"7-day satisfaction revisions" to lower friction'], tip: 'Never fabricate credentials; no guaranteed job outcomes.' },
        { title: 'Contract & legal document drafting assist', category: 'Knowledge services', difficulty: 'Intermediate', income: '$42–280/document', desc: 'Draft lease, cooperation, NDA, employment agreements for SMBs and freelancers—clear clauses for lawyer/legal review.', deliverables: 'Word draft + clause notes + risk checklist (not legal opinion)', monetize: 'Standard contract $42–110; custom by complexity', channels: 'Founder groups, bookkeeping referrals, legal platform partners', steps: ['Library of 10 common templates (lawyer-reviewed ideal)', 'NotebookLM client background + reference contracts', 'Draft with "requires attorney review" disclaimer', 'Mutual referral loop with local law firms'], tip: 'Not legal advice; no litigation or equity deals.' },
        { title: 'Competitor & SEO content strategy report', category: 'Knowledge services', difficulty: 'Intermediate', income: '$110–700/report', desc: 'Content matrix analysis, keyword opportunities, 90-day calendar for brands and indie site operators.', deliverables: '20–40 page report + keyword sheet + 90-day topic calendar', monetize: 'Standard competitor report from $110; deep SEO $280+', channels: 'Marketing agencies, indie sellers, B2B marketing leads', steps: ['One full sample in familiar industry', 'Metaso/Perplexity competitor and search trends', 'Manus for long lists; human insight in conclusions', '20% renewal discount on quarterly reports'], tip: 'Note data collection date; no guaranteed rankings.' },
        { title: 'Exam prep study plan customization', category: 'Knowledge services', difficulty: 'Beginner', income: '$28–125/plan', desc: 'Personalized study plans, daily tasks, error templates, flashcards from goals, baseline, and timeline—with subject expertise gate.', deliverables: 'Phased plan + daily tasks + resource index + mock exam schedule', monetize: 'One-time plan from $28; 4-week Q&A coaching $84–125', channels: 'Exam forums, education accounts, training partners', steps: ['Benchmark plan for one exam you know (English/CPA/teaching cert)', 'NotebookLM digest syllabus and past papers', 'Gamma visual plan handbook', 'Push hard 3 months before exam season'], tip: 'No leaked questions or illegal预测; update plans when syllabi change.' },
        { title: 'Personal "second brain" knowledge base', category: 'Knowledge services', difficulty: 'Intermediate', income: '$210–1,120/project', desc: 'Organize scattered docs, bookmarks, notes into searchable, conversational KB for individuals or small teams.', deliverables: 'KB architecture + import/cleanup + search/chat config + training', monetize: 'Personal $210–420; team priced per seat', channels: 'Productivity communities, Notion circles, PKM bloggers', steps: ['Demo library showing taxonomy and chat', 'Notion AI batch summaries; Dify external Q&A', '1-hour onboarding recording', 'Optional monthly content maintenance'], tip: 'Sensitive notes local-first; cloud on client-owned accounts.' },
        { title: 'Open-source README & docs optimization', category: 'Tech services', difficulty: 'Beginner', income: '$70–420/project', desc: 'English README, API docs, contributing guide, examples for indie devs and startups—better stars and partnerships.', deliverables: 'README + CONTRIBUTING + basic API docs + examples', monetize: 'Basic README from $70; full doc set $280+', channels: 'GitHub community, dev forums, Twitter, foundations', steps: ['Two open-source style doc samples', 'Cursor reads code for accurate API docs', 'Bilingual +30%', 'Help post Show HN / dev articles after delivery'], tip: 'Docs must track code version; no fake star services.' },
        { title: 'SaaS help center & changelog build', category: 'Tech services', difficulty: 'Intermediate', income: '$420–2,100/project', desc: 'Help docs site, FAQ Bot, changelog process for small SaaS—lower support load, higher self-serve resolution.', deliverables: 'Help structure + 20–50 articles + FAQ Bot + changelog template', monetize: 'Initial build + monthly updates $70–210', channels: 'SaaS founder groups, Indie Hackers CN, Product Hunt', steps: ['Full help center on demo SaaS', 'Dify on product docs for in-app Q&A', 'Cursor API drafts from code comments', 'Contract monthly article count'], tip: 'Docs versioned with product; major features need client sign-off.' },
        { title: 'WordPress / corporate site AI refresh', category: 'Tech services', difficulty: 'Intermediate', income: '$280–1,400/refresh', desc: 'Legacy corporate site refresh—AI-assisted copy, layout concepts, SEO meta; you deploy and maintain.', deliverables: 'Refresh plan + new copy + theme tweaks + 30-day bug fixes', monetize: 'One-time refresh; annual maintenance $170–500', channels: 'Local web agencies, hosting resellers, search ad partners', steps: ['Two before/after refresh cases', 'Bolt.new prototype blocks for client approval', 'Cursor theme edits; ChatGPT batch SEO copy', 'Maintenance SLA: updates and response time'], tip: 'ICP/domain client-owned; full backup before refresh.' },
        { title: 'AI feature white-label integration', category: 'Tech services', difficulty: 'Intermediate', income: '$1,120–7,000/project', desc: 'Embed smart support, doc Q&A, or content generation in existing app/site via API or Dify—client brand on front.', deliverables: 'Requirements + API integration + admin config + launch support', monetize: 'Per feature module; API cost client-paid or pass-through', channels: 'Software outsourcers, digital transformation consultancies, ISVs', steps: ['Demo site showing embed', 'DeepSeek API for cost; Dify for RAG', 'Deliver source and deploy docs', 'Upsell annual support after first project'], tip: 'Data residency and privacy in contract; no keys in your repo.' },
        { title: 'E-commerce after-sales Bot & ticket automation', category: 'Automation', difficulty: 'Beginner', income: '$210–840/mo', desc: 'FAQ auto-reply, logistics guidance, return flow scripts for sellers—light ERP/sheet linkage.', deliverables: 'Script library + Bot config + ticket rules + weekly report template', monetize: 'Setup $210–420; maintenance $42–110/mo', channels: 'Marketplace service providers, seller groups, CS outsourcing', steps: ['TOP 50 after-sales Q&A library', 'Coze on WeCom/Feishu channels', 'n8n export tickets to sheets', 'Peak-season script update upsell'], tip: 'Escalate complex disputes to humans; don\'t promise refunds on client behalf.' },
        { title: 'Recruiting JD & resume screening Agent', category: 'Automation', difficulty: 'Intermediate', income: '$42–168/role', desc: 'Write JDs, interview questions, Agent-first resume screen and summary—save ~70% screening time.', deliverables: 'JD + competency model + screening rules + candidate summary sheet', monetize: 'Per role; annual 10-role package; recruiter revenue share', channels: 'HR communities, headhunters, startup CEO groups', steps: ['One complete role sample (JD + screen sheet)', 'Manus batch-read PDF resumes to structured summaries', 'Human review bias and privacy risks', 'PIPL-compliant data handling in contract'], tip: 'AI score is assistive only; hiring decision stays with client; anonymize storage.' },
        { title: 'Invoice / contract smart archiving pipeline', category: 'Automation', difficulty: 'Intermediate', income: '$560–2,520/project', desc: 'Email/WeChat intake → OCR → categorize → exception alerts for finance/admin—less manual entry.', deliverables: 'Process design + n8n workflow + classification rules + manual', monetize: 'One-time implementation; monitoring $84–280/mo', channels: 'Bookkeeping firms, admin outsourcing, finance software implementers', steps: ['POC on invoices + contracts', 'Claude field extraction validation rules', 'OpenClaw scheduled exception digest to finance', 'Two-week parallel run vs manual before cutover'], tip: 'Financial data on-prem or client private cloud—not full bookkeeping service.' },
        { title: 'Multi-platform social scheduling & sentiment watch', category: 'Automation', difficulty: 'Intermediate', income: '$280–1,120/mo', desc: 'Unified scheduling, cross-platform metrics, brand keyword and negative mention monitoring with daily digest.', deliverables: 'Publishing calendar + auto-distribute config + daily sentiment brief + alerts', monetize: 'From $280/mo; per-platform surcharge; crisis response package extra', channels: 'Brand marketing, PR agencies, MCN ops teams', steps: ['OpenClaw Cron daily sentiment to Feishu', 'n8n CMS and social APIs where compliant', 'Grok for X real-time mentions', 'First month free pilot for case rights'], tip: 'Follow platform API/automation rules; human judgment on negative sentiment.' },
        { title: '1-on-1 workplace AI skills coaching', category: 'Education & training', difficulty: 'Beginner', income: '$28–70/hour', desc: 'Four to eight sessions on real tasks—weekly reports, decks, Python automation—for individual pain points.', deliverables: 'Pre-call diagnosis + 4–8 live/voice sessions + homework review + tool checklist', monetize: 'Hourly; 4-pack $210; 8-pack $390', channels: 'Social apps, communities, alumni referrals, HR intros', steps: ['Three standard packages (admin/marketing/dev intro)', 'Each session uses client\'s real task', 'Screen recording summaries for review', 'Graduation "AI capability checklist" for credibility'], tip: 'No promotion guarantees; confirm baseline and goals pre-call.' },
        { title: 'Youth AI innovation camp', category: 'Education & training', difficulty: 'Intermediate', income: '$420–2,100/session', desc: 'Half-day to 2-day camps for training orgs—chat bot, AI art, simple game page—spark interest, not deep CS.', deliverables: 'Lesson plan + onsite materials + student showcase page + instructor support', monetize: 'Institution buyout; per student $11–28; materials extra', channels: 'Training centers, youth palaces, international school activities', steps: ['Standard "2-hour shippable project" flow', 'Bolt.new zero-code shareable web page', 'Midjourney creative drawing module', 'Parent info session deck to close deals'], tip: 'Minor privacy protection; healthy content; follow local education policy.' },
        { title: 'Senior AI literacy classes (paid advanced tier)', category: 'Education & training', difficulty: 'Beginner', income: '$7–28/person/session', desc: 'Community senior centers—voice assistant chat, AI photo restore, scam awareness; free basics, paid advanced.', deliverables: '2h offline class + large-print handbook + 7-day WeChat Q&A', monetize: 'Community subsidies + voluntary advanced fees; corporate CSR sponsorship', channels: 'Street communities, senior universities, bank branch partners', steps: ['Extra-large step-by-step pictorial handbook', 'Doubao/Qwen voice and dialect support', 'Free trial for community endorsement', 'Advanced: AI album restore and trip planning'], tip: 'Slow pace; emphasize no transfers, no verification codes.' },
        { title: 'Designer AI workflow small-group course', category: 'Education & training', difficulty: 'Intermediate', income: '$210–560/cohort', desc: '4-week cohort for graphic/UI designers—AI generation, control, retouch, workflow integration; portfolio-grade output.', deliverables: '4 live sessions + critiques + prompt library + commercial license lesson', monetize: 'Per cohort; 1-on-1 critique extra; corporate group discount', steps: ['4-week syllabus: concept → commercial → motion → portfolio', 'Flux/MJ industry cases (beauty/3C)', 'Week 4 polish 3 portfolio pieces', 'Top students referred to gig channels'], tip: 'Clarify commercial license; encourage labeling AI-assisted work.' },
      ],
    },
  });
})();