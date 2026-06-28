(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('en', {
  "promptExampleCategories": {
    "全部": "All",
    "对话助手": "Chat assistants",
    "编程开发": "Coding & development",
    "图像创作": "Image creation",
    "视频音频": "Video & audio",
    "办公效率": "Office productivity",
    "Agent 自动化": "Agent automation",
    "搜索研究": "Search & research"
  },
  "promptExamplesUi": {
    "countShown": "Showing {visible} / {total}",
    "emptyHint": "No examples in this category. Try another tag.",
    "structureLabel": "Prompt structure",
    "scenarioLabel": "When to use",
    "tipsLabel": "Tips",
    "copyLabel": "Copy prompt",
    "frameworkHint": "Use Role → Task → Context → Format → Constraints (RTFC). Replace [placeholders] with your details."
  },
  "promptExamples": [
    {
      "id": "chatgpt-longform",
      "difficulty": "Beginner",
      "title": "Structured long article writing (RTFC framework)",
      "scenario": "It is necessary to produce public accounts/blogs/product descriptions that can be published directly to avoid empty and clichéd statements.",
      "structure": [
        "Role role",
        "Task task",
        "Format",
        "Constraints"
      ],
      "prompt": "# Role\nYou are a content strategy consultant with 10 years of experience, specializing in long-form B2B technology articles.\n\n#Task\nBased on the background below, write a popular science article on AI learning for newcomers in the workplace.\n\n#Context\n- Target readers: office workers aged 25–35, with zero basic knowledge\n- Core information: Get started in 7 days, task-driven learning, no need to learn math first\n- Word count: 1200–1500 words\n- Channel: WeChat official account\n\n#Format\n1. 3 title options (including subtitles)\n2. Main text: Opening story → 3 common misunderstandings → 7-day method → Tool recommendations → Ending CTA\n3. 5 hashtags\n\n#Constraints\n- Tone: friendly, specific, less adjectives\n- Prohibited: \"To sum up\" and \"with the development of AI\" and other empty words\n- 1 executable example for each argument\n- Do not make up data, mark \"to be verified\" where uncertain",
      "tips": "First try the same topic with fuzzy instructions, and then use this template to compare - the difference is the value of the prompt word. GPT-4o responds best to the Format section."
    },
    {
      "id": "claude-contract",
      "difficulty": "Intermediate",
      "title": "Contract risk review (long document)",
      "scenario": "Upload the PDF contract, identify high-risk clauses from Party B's perspective and provide negotiation suggestions.",
      "structure": [
        "Role",
        "Task",
        "Output structure",
        "Verification annotation"
      ],
      "prompt": "# Role\nYou are a discreet corporate legal associate who specializes in SaaS procurement and technology services contract reviews.\n\n#Task\nReview the full text of the contract I uploaded. We are Party B (service provider).\n\n#Output\n## 1. High-risk clauses (Top 5)\nEach article contains: Original quote of the article | Risk level (high/medium/low) | Risk reasons | Suggested wording modifications\n\n## 2. Medium risk clauses (3 clauses)\nSame format as above\n\n## 3. Negotiation priority list\n| Clause location | Risks | Negotiable | Suggestions |\n\n## 4. 3 questions that Party B needs to confirm\n\n#Constraints\n- Uncertain legal conclusions are marked \"requires confirmation by a human lawyer\"\n- Do not make up law numbers\n- Please indicate the chapter/page number when citing (if the PDF has it)",
      "tips": "Claude Long context has obvious advantages: uploading the entire contract is more accurate than pasting snippets. Do not use public accounts for sensitive contracts."
    },
    {
      "id": "kimi-annual-report",
      "difficulty": "Intermediate",
      "title": "Structured summary of annual report/prospectus",
      "scenario": "Upload 100+ pages of PDF annual reports to quickly extract financial trends, risks and management statements.",
      "structure": [
        "Task",
        "Data scope",
        "Output schema",
        "Citation"
      ],
      "prompt": "Please output structured analysis notes based on the annual report PDF I uploaded:\n\n## 1. Business positioning in one sentence\n## 2. Revenue/net profit trend in the past three years (table, indicate unit)\n## 3. 3 highlights + 3 risks in this issue (section/page number for each quote)\n## 4. Excerpts from management’s forward-looking statements (original text + page number)\n## 5. Investor Questions List (5 questions)\n\n#Rules\n- Numbers must come from documents; if missing, write \"undisclosed\"\n- Do not speculate on financial data that does not appear\n- The unit of amount is consistent with the original text (10,000 yuan/100 million yuan)",
      "tips": "Kimi is suitable for the entire PDF; financial figures must be checked back to the original text, as AI can easily confuse units."
    },
    {
      "id": "deepseek-code-review",
      "difficulty": "Beginner",
      "title": "Code review and refactoring suggestions",
      "scenario": "Submit the module code and obtain review opinions on security, performance, and readability.",
      "structure": [
        "Role",
        "Code block",
        "Review dimensions",
        "Output format"
      ],
      "prompt": "# Role\nYou are a senior Python engineer with a focus on maintainability and boundary handling.\n\n#Task\nReview the following code and suggest improvements.\n\n```python\n[Paste your code here]\n```\n\n# Review dimensions\n1. **Correctness**: logic errors, boundary conditions, exception handling\n2. **Security**: injection, sensitive information, permissions\n3. **Performance**: Obvious bottleneck (just pointed out, no need to optimize prematurely)\n4. **Readability**: naming, function length, type hints\n\n#Output\n- Problem list (Severity P0/P1/P2)\n- Refactored code example (only change necessary parts)\n- 2 pytest test case suggestions",
      "tips": "DeepSeek is cost-effective and suitable for daily code review; it is better to attach call context and error logs."
    },
    {
      "id": "cursor-feature",
      "difficulty": "Beginner",
      "title": "Agent mode: full stack function development",
      "scenario": "Add a complete functional module (multi-file collaboration) to the existing project.",
      "structure": [
        "Context",
        "Requirements",
        "Acceptance criteria",
        "Constraints"
      ],
      "prompt": "Please implement the \"User Theme Switching\" function in the current project.\n\n## Current situation\n- Technology stack: HTML + CSS + native JS (single page)\n- Existing: header, main, footer layout\n\n## Requirements\n1. Dark/light theme, CSS variable driven color palette\n2. Switch button on the right side of Header, the preference is to save to localStorage\n3. No flicker on the first screen (read localStorage before rendering)\n4. Available on mobile devices without changing the existing layout structure\n\n## Acceptance criteria\n- [ ] After switching, the contrast of all text reaches the standard.\n- [ ] Refresh the page to keep the selection\n- [ ] List modified files\n- [ ] README supplementary instructions for use\n\n## Constraints\n- No new frameworks introduced\n- The code contains Chinese comments\n- Instructions on how to test locally after completion",
      "tips": "Cursor Agent first lets it be scheduled and then executed; major changes require step-by-step commit instructions."
    },
    {
      "id": "copilot-comment-driven",
      "difficulty": "Beginner",
      "title": "Annotation driven function generation",
      "scenario": "Use clear function annotations to trigger Copilot completion of business logic and unit tests.",
      "structure": [
        "Function spec comment",
        "Input/Output examples",
        "Edge cases"
      ],
      "prompt": "// Calculate order discount amount\n// Rules: minus 10 for purchases over 100, minus 30 for purchases over 200, minus 80 for purchases over 500\n//Input: orderAmount (non-negative number, unit: yuan)\n// Output: { original, discount, final } are all numbers, final >= 0\n//Boundary: 0 yuan order discount=0; negative input throws an error\n// Example: calcDiscount(150) => { original: 150, discount: 10, final: 140 }\nfunction calcDiscount(orderAmount) {\n  // Copilot completes from here\n}",
      "tips": "Copilot responds most stably to the four-element annotation of \"input/output/example/boundary\"; the test files are placed in the same directory."
    },
    {
      "id": "codex-cli-bugfix",
      "difficulty": "Intermediate",
      "title": "Terminal Agent: Error reporting and repair closed loop",
      "scenario": "Paste the complete traceback and let the Agent locate, fix, and add tests.",
      "structure": [
        "Error log",
        "Repro steps",
        "Fix requirements",
        "Test command"
      ],
      "prompt": "Project directory: ./my-api (Node.js + Express)\n\n## Question\nRunning npm test fails with the following error:\n```\n[Paste full traceback]\n```\n\n## Recurrence\n1. npm install\n2. npm test\n\n## Requirements\n1. Explain the root cause (Chinese)\n2. Fix the code and keep the API behavior unchanged\n3. Supplement/update tests to cover this boundary\n4. Give verification command\n\n## Constraints\n- Do not upgrade major dependencies\n- Explain which files will be changed before modification",
      "tips": "Codex CLI requires the full stack rather than the last line; allows the Agent to run test commands for verification."
    },
    {
      "id": "bolt-prototype",
      "difficulty": "Beginner",
      "title": "Natural language generation deployable prototypes",
      "scenario": "Non-programmers or PMs quickly validate product ideas and generate web prototypes with shareable links.",
      "structure": [
        "Product vision",
        "Pages",
        "Style",
        "Interactions"
      ],
      "prompt": "Build a single-page \"AI Learning Progress Tracker\" web app.\n\n## Pages/sections\n1. Hero: title + 7-day learning path summary\n2. Progress cards: 4 phases (Learn, Tools, Practice, Review) with % complete\n3. Daily log：textarea to save notes (localStorage)\n4. Footer CTA: Export notes as .txt\n\n## Style\n- Dark tech aesthetic, teal accent\n- Responsive, mobile-first\n- Clean sans-serif typography\n\n## Tech\n- React or vanilla — your choice\n- No backend; localStorage only\n-Deploy-ready structure",
      "tips": "Bolt describes the page structure in English to be more stable; iterates \"bigger tap targets\" and \"simpler colors\" after generation."
    },
    {
      "id": "mj-product-shot",
      "difficulty": "Beginner",
      "title": "E-commerce product pictures (English prompt words)",
      "scenario": "Generate white background/scene product images for use in detail pages or advertising creatives.",
      "structure": [
        "Subject",
        "Environment",
        "Lighting",
        "Style",
        "Parameters"
      ],
      "prompt": "minimalist product photo of wireless earbuds in charging case,\npure white seamless background, studio softbox lighting,\ncentered composition, subtle shadow beneath product,\nultra sharp commercial photography, 4k detail,\nclean negative space for text overlay --ar 4:5 --style raw --v 6\n\nNegative prompt: text, watermark, logo, blurry, deformed, extra objects, cluttered background, hands",
      "tips": "Midjourney is mainly in English; order: subject → environment → light → style → --ar/--v. Text typesetting needs to be superimposed later."
    },
    {
      "id": "dalle-article-cover",
      "difficulty": "Beginner",
      "title": "Article cover image (natural language)",
      "scenario": "Use DALL·E to generate blog/newsletter covers in ChatGPT, supporting Chinese scene descriptions.",
      "structure": [
        "Subject",
        "Mood",
        "Composition",
        "Aspect ratio"
      ],
      "prompt": "Please use DALL·E to generate an article cover image:\n\nTopic: People in the workplace use AI to improve efficiency (abstract concept, no specific brand logos)\nImage: A professional uses a laptop in a bright modern office, with a soft blue-green glow from the screen and a faint pattern of neural network lines in the background\nStyle: flat illustration + slight 3D texture, professional, optimistic, not cartoony\nComposition: Leave 30% blank on the right side for title text\nFormat: Horizontal 16:9, suitable for public number pictures",
      "tips": "DALL·E understands Chinese scenes well; explains the blank space to avoid the main body blocking the title area."
    },
    {
      "id": "sd-ecommerce-white",
      "difficulty": "Intermediate",
      "title": "Product picture on white background (positive and negative prompt words)",
      "scenario": "Batch generate unified style e-commerce main images locally/WebUI.",
      "structure": [
        "Positive prompt",
        "Negative prompt",
        "Sampler settings"
      ],
      "prompt": "Positive:\n(product photography:1.3), smart thermos bottle, matte white finish,\nseamless white background, studio lighting, soft ground shadow,\ncentered, sharp focus, commercial catalog style, 8k uhd\n\nNegative:\nlowres, blurry, text, watermark, logo, bad anatomy, extra fingers,\ndeformed, jpeg artifacts, cluttered, colorful background, people\n\nSettings suggestion: Steps 28–35, CFG 7–8, Size 1024×1024 or 4:5",
      "tips": "SD uses weight syntax (keyword:1.2); fixed seed can unify the style in batches."
    },
    {
      "id": "kling-product-video",
      "difficulty": "Beginner",
      "title": "Vertical screen product display short video",
      "scenario": "Generate 5–10 seconds of product surround footage for Douyin/Xiaohongshu.",
      "structure": [
        "Shot type",
        "Subject action",
        "Lighting",
        "Technical"
      ],
      "prompt": "Vertical screen 9:16, a smart thermos cup is placed on a simple white table.\nSlowly orbit shot, steam rising slightly from the mouth of the cup,\nSoft natural light, high-end commercial advertising texture, clean background without text,\nThe product is always clear and not blurry, with real physical movement, 5–8 seconds",
      "tips": "Ke Ling responds well to \"slow wrap\" and \"commercial texture\"; complex plots are broken into multiple segments to generate and then edit."
    },
    {
      "id": "runway-image-to-video",
      "difficulty": "Intermediate",
      "title": "Tusheng video: Product micro-motion effects",
      "scenario": "Convert static product images into 4-second Hero animations for landing pages or ad titles.",
      "structure": [
        "Motion description",
        "Preserve subject",
        "Duration",
        "Quality"
      ],
      "prompt": "Slow cinematic push-in toward the product,\nsubtle parallax depth, product remains sharp and undistorted,\nsoft studio light with gentle shadow movement,\nno morphing or melting artifacts, commercial ad quality,\n4 seconds, seamless loop-friendly ending",
      "tips": "Graphics videos should have small movements; use the \"product remains sharp\" constraint when the edges of the product are easily deformed."
    },
    {
      "id": "suno-bgm",
      "difficulty": "Beginner",
      "title": "Brand promotion background music (pure music)",
      "scenario": "Generate a 30–60 second lyric-less BGM for a product launch video.",
      "structure": [
        "Genre",
        "Mood",
        "Instruments",
        "BPM",
        "Use case"
      ],
      "prompt": "Instrumental upbeat corporate technology track,\nmodern synth pads and light percussion, optimistic and clean,\nno vocals, suitable for AI product launch video,\n100–110 BPM, steady energy without dramatic drops,\n30–45 seconds",
      "tips": "Suno defines \"Instrumental + BPM + Scene\"; generates a 2-track Extend with a more stable rhythm."
    },
    {
      "id": "notion-meeting",
      "difficulty": "Beginner",
      "title": "Meeting recording/notes → structured minutes",
      "scenario": "Organize loose meeting notes into a minutes format that can be synced to project management.",
      "structure": [
        "Input",
        "Output schema",
        "Owner assignment",
        "Rules"
      ],
      "prompt": "Please organize the following original meeting minutes into structured minutes:\n\n# Output format\n## Meeting information\n- Topic, date, participants\n\n## Key Resolutions (Numbered List)\n\n## To-do list\n| Matter | Responsible Person | Deadline | Priority |\n\n## Open issues\n\n## Suggestions on topics for the next meeting\n\n# Rules\n- Don’t make up things that haven’t been discussed\n- To-dos without a responsible person are marked \"to be designated\"\n- If the date is unknown, write \"to be determined\"\n\n---\n[Paste meeting minutes]",
      "tips": "Notion AI is suitable for secondary sorting; recording keywords in real time during a meeting is more accurate than making up for it afterward."
    },
    {
      "id": "gamma-pitch",
      "difficulty": "Beginner",
      "title": "10 page roadshow PPT outline",
      "scenario": "Enter a business outline and quickly generate a first draft of presentation-ready slides.",
      "structure": [
        "Topic",
        "Audience",
        "Slide outline",
        "Visual style"
      ],
      "prompt": "Generate a 10-page Chinese roadshow PPT:\n\nTopic: AI Learning Platform BestWayToLearn.AI\nAudience: Corporate training leaders / HR L&D\n\nPage structure:\n1. Cover 2. Pain Point 3. Solution 4. Product Demonstration 5. Learning Path\n6. Customer cases 7. Business model 8. Differentiation 9. Milestones 10. Contact information\n\nStyle: dark tech style, 3–5 bullet points per page, avoid large blocks of text\nData: You can first use the placeholder [X%] to mark the real data that needs to be replaced.",
      "tips": "Gamma requires a clear page structure; after generation, replace placeholder data and insert product screenshots."
    },
    {
      "id": "copilot-excel",
      "difficulty": "Intermediate",
      "title": "Excel data analysis and formulas",
      "scenario": "Use Copilot within Excel to analyze sales tables and generate pivot recommendations.",
      "structure": [
        "Data description",
        "Questions",
        "Output",
        "Formula"
      ],
      "prompt": "I have a sales data table with fields: date, region, SKU, quantity, unit price, and amount.\nTime frame: Past 12 months.\n\nPlease complete:\n1. Overview of Monthly Sales Trends\n2. Amount Top 5 SKUs and proportion\n3. Find the month with abnormal sales decline and analyze the possible reasons (based on data, not speculation)\n4. Suggest 2 chart types and axis definitions\n5. Give an example of the Excel formula for calculating YoY chain ratio\n\nIf I need to select a data range, please indicate which columns need to be included.",
      "tips": "Copilot selects the data area in Excel before asking questions; pay attention to corporate compliance for sensitive financial data."
    },
    {
      "id": "openclaw-cron-digest",
      "difficulty": "Intermediate",
      "title": "Cron scheduled industry briefing push",
      "scenario": "Industry news is automatically summarized and pushed to Telegram/Slack on weekday mornings.",
      "structure": [
        "Schedule",
        "Agent role",
        "Output spec",
        "Channel"
      ],
      "prompt": "openclaw cron create \"0 9 * * 1-5\" \\\n  --name \"Daily AI industry digest\" \\\n  --tz \"Asia/Shanghai\" \\\n  --session isolated \\\n  --message \"You are an industry research assistant. Summary of important developments in the AI industry in the past 24 hours:\n\n1) 3 headlines (1 sentence each + source link)\n2) Impact on developers\n3) Focus on 2 variables today\n\nOutput in Chinese, within 400 words. When there is no reliable source, write \"No major update yet\" and fabrication is prohibited.\nQuotes must be clickable. \" \\\n  --announce \\\n  --channel telegram \\\n  --to \"YOUR_CHANNEL_ID\"",
      "tips": "First, openclaw cron run to test manually; write clearly the output structure and prohibit fabrication in the message."
    },
    {
      "id": "coze-support-bot",
      "difficulty": "Beginner",
      "title": "Customer Service Bot System Prompt Word",
      "scenario": "Create a product FAQ bot in Coze to unify tone and upgrade strategy.",
      "structure": [
        "Persona",
        "Knowledge scope",
        "Reply format",
        "Escalation"
      ],
      "prompt": "# role\nYou are the official learning assistant of \"BestWayToLearn.AI\", friendly, professional and patient.\n\n#Knowledge scope\nOnly answer: course structure, learning path, account and progress, common technical issues.\nDon't answer: investment advice, medical and legal topics, and topics unrelated to products.\n\n# Reply format\n1. Answer directly in 1 sentence first\n2. List of steps (if applicable)\n3. Related links or \"If you need manual labor, please reply: Transfer to manual labor\"\n\n# Constraints\n- When unsure, say \"I'm not sure, I suggest contacting support@example.com\"\n- Don’t make up features or prices\n- Keep your tone concise and avoid exceeding 200 words\n\n#Upgrade\nThe user asked \"It's useless\" twice in a row or it involved a payment dispute → prompt to transfer to manual work order",
      "tips": "Connect the FAQ document to the knowledge base in Coze; the system prompts that words manage boundaries and the knowledge base manages facts."
    },
    {
      "id": "dify-rag-agent",
      "difficulty": "Intermediate",
      "title": "Enterprise Knowledge Base RAG Q&A",
      "scenario": "Build a question and answer agent based on internal documents, and the answers must contain reference fragments.",
      "structure": [
        "System prompt",
        "Retrieval rules",
        "Citation format",
        "Refusal"
      ],
      "prompt": "# System\nYou are the internal knowledge base assistant of the enterprise. Answers based only on retrieved document fragments, without relying on pre-trained knowledge to concoct company policies.\n\n# Answer rules\n1. Give a direct answer first (2–4 sentences)\n2. \"Basis\" section: List the cited document name + summary of relevant paragraphs\n3. If the search results are not enough to answer the question, reply: \"The relevant regulations are not found in the current knowledge base. It is recommended to contact [department] or submit a work order.\"\n\n# format\n- Use Markdown\n- Citation format: [Document name § Chapter]\n- The dates/numbers involved must be consistent with the original text\n\n# Forbidden\n- Speculate policies that are not written into the knowledge base\n- Give final conclusion on legal/compliance",
      "tips": "Dify knowledge base segmentation is recommended to be 500–800 words/block; the test set is prepared with 20 real employee questions for acceptance."
    },
    {
      "id": "perplexity-competitor",
      "difficulty": "Beginner",
      "title": "Competitive product and market one-page research",
      "scenario": "Quickly obtain competitive product comparisons with references for internal discussions or selection meetings.",
      "structure": [
        "Scope",
        "Comparison dimensions",
        "Output",
        "Source rules"
      ],
      "prompt": "Investigate the \"AI programming IDE\" market in 2026, focusing on comparing Cursor, Windsurf, and GitHub Copilot.\n\nPlease output one page in Chinese:\n1. Market Overview (2 paragraphs)\n2. Comparison table: positioning | pricing | core differences | target users\n3. 3 selection suggestions (by user type)\n4. All key conclusions are accompanied by reference numbers and source links.\n\nRules: Pricing is subject to the official website; data without official sources is marked \"to be verified\".",
      "tips": "The advantage of Perplexity lies in the quotation; pricing and functions still need to be confirmed on the official website."
    },
    {
      "id": "notebooklm-papers",
      "difficulty": "Intermediate",
      "title": "Comparative notes on multiple papers",
      "scenario": "Upload 3 related papers and generate a comparison table and reading order suggestions.",
      "structure": [
        "Upload scope",
        "Comparison fields",
        "Recommendation",
        "Limits"
      ],
      "prompt": "(Send after uploading 3 PDFs)\n\nPlease compare these three papers and output:\n\n## Comparison table\n| Thesis | Research questions | Dataset | Methods | Main conclusions | Limitations |\n\n## Similarities and differences in methods (300 words)\n\n## Suggested reading order for newbies\nExplain which article to read first and why\n\n## 3 research questions to ask\n\nRules: Based only on uploaded documents, experimental results that do not appear will not be supplemented.",
      "tips": "NotebookLM is a read-only upload of content; for academic citations, please refer back to the original DOI."
    },
    {
      "id": "metaso-academic",
      "difficulty": "Beginner",
      "title": "Starting point for literature review of academic model",
      "scenario": "Use the academic search mode to quickly locate core papers and review entries in the field.",
      "structure": [
        "Research question",
        "Time range",
        "Output",
        "Next steps"
      ],
      "prompt": "Use academic search mode:\n\nResearch question: What are the methods for evaluating the reliability of large language models in code generation?\nTime frame: 2023–2026\nLanguage: Both Chinese and English academic sources are accepted\n\nPlease output:\n1. 5 highly cited papers in this field (title, author, year, one sentence contribution)\n2. Recommendation of 2 review/research papers\n3. Names and definitions of 3 commonly used evaluation indicators\n4. Suggested further search keywords (Chinese and English)\n\nEach article has a clickable source. If not found, it will be clearly stated.",
      "tips": "The secret tower academic mode is suitable for Chinese users; for important papers, it is recommended to cross-verify the citations on Google Scholar."
    }
  ]
});
})();
