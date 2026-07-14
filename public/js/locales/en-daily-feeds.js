/* EN overlays — ai-briefing + latest-tutorials */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("en", {
  "aiBriefing": {
    "meta": {
      "lead": "Daily curated AI industry news, archived by date. Updated every morning — grasp the pulse in 3 minutes.",
      "updatedLabel": "Last updated: {date}",
      "countShown": "Showing {visible} / {total}",
      "emptyHint": "No news in this category. Try another tag.",
      "readMore": "Read source",
      "sourceLabel": "Source",
      "backToList": "Back to briefing",
      "newBadge": "New",
      "highlightsLabel": "Key takeaways"
    },
    "categories": {
      "全部": "All",
      "产品发布": "product launch",
      "开源模型": "Open source model",
      "行业动态": "Industry trends",
      "政策监管": "policy supervision",
      "研究突破": "Research breakthrough"
    },
    "items": [
      {
        "id": "2026-07-02-openai-responses-api",
        "title": "OpenAI launches Responses API unified Agent call entrance",
        "summary": "The new API integrates conversations, tool calls, code execution and file retrieval into a single request flow, allowing developers to build multi-step agents with less glue code. The official Python SDK 2.x migration guide is released simultaneously.",
        "source": "OpenAI Developer Blog",
        "body": [
          "OpenAI officially released the Responses API, aiming to converge the capabilities that were scattered in Chat Completions, Assistants, tool calls, and code execution into a unified Agent call link. For developers, the biggest change is that multi-step tasks no longer require hand-writing a large amount of \"request-wait-request\" glue logic at the application layer.",
          "The new API natively supports tool invocation, code interpreter, file retrieval and network search capabilities, and allows multiple rounds of reasoning to be connected in the same response stream. Official examples show that a customer service agent can complete the process from understanding user intentions, querying orders, calling the refund interface to generating responses within a single request life cycle.",
          "The Python SDK 2.x migration guide released simultaneously maps the old version of chat.completions + manual function call mode to the event stream writing method of responses.create. Existing Assistants API users can migrate in batches, and OpenAI promises that the Assistants interface will remain compatible until the end of 2026.",
          "For domestic teams, if the product has been connected to the official OpenAI API, it is recommended to first evaluate whether the existing \"multi-API assembly\" Agent links can be converged to the Responses API to reduce delays and error surfaces. If you use a third-party proxy, you need to confirm whether the proxy has followed the interface."
        ],
        "highlights": [
          "Single API covering conversations, tools, code execution and retrieval",
          "Multi-step Agent reduces application layer glue code",
          "Python SDK 2.x provides complete migration guide",
          "Suitable for customer service, office automation, and data analysis agents"
        ],
        "tags": [
          "API",
          "Agent",
          "OpenAI"
        ]
      },
      {
        "id": "2026-07-02-anthropic-sonnet-speed",
        "title": "Anthropic releases Claude Sonnet 4.5 high-speed version, reducing encoding scene latency by 40%",
        "summary": "The new model is optimized for IDE completion and long context reconstruction. It maintains Sonnet level 4 accuracy on the SWE-bench subset while significantly reducing the first token delay. It is enabled by default for Claude Code users.",
        "source": "Anthropic News",
        "body": [
          "Anthropic launches Claude Sonnet 4.5 \"High-Speed ​​Edition\" (internally codenamed Sonnet Speed), which focuses on real-time code completion and long file reconstruction within the IDE. Official data claims that the first token delay is reduced by about 40% compared to standard Sonnet 4, and acceptable throughput is still maintained under the 128K context window.",
          "This version has been specially optimized for three types of scenarios: single-line/multi-line completion, cross-file symbol jump, and \"selected code block → natural language reconstruction\" workflow. Claude Code plug-in users will be routed to the high-speed version by default, and third-party clients such as Cursor need to wait for the adaptation announcement.",
          "On the SWE-bench Verified subset, the accuracy gap between the high-speed version and the Sonnet 4 standard version is within 2%, indicating that optimization does not come at the expense of inference quality. Early test feedback from the community: The completion response \"followability\" has been significantly improved, but it is still recommended to use Opus-level models for extremely complex architecture design tasks.",
          "If you use Claude to write code every day, you can switch the model parameter to claude-sonnet-4-5-speed in the API console (the specific slug is subject to the official document), and then decide whether to switch in full after comparing the delay and bill changes."
        ],
        "highlights": [
          "The first token delay is reduced by about 40%",
          "Claude Code is enabled by default, suitable for daily coding",
          "SWE-bench accuracy is basically the same as Sonnet 4",
          "For complex architecture designs, it is still recommended to use stronger models"
        ],
        "tags": [
          "Claude",
          "编程",
          "Anthropic"
        ]
      },
      {
        "id": "2026-07-01-qwen3-32b",
        "title": "Tongyi Qianwen Qwen3-32B-Instruct is open source, single card 24GB can run full blood reasoning",
        "summary": "Alibaba's open source 32B instruction fine-tuned version supports 128K context and tool calling formats; community evaluation shows that Chinese reasoning and coding capabilities are close to the same level of closed-source models, and is suitable for local privatized deployment.",
        "source": "Qwen GitHub",
        "body": [
          "Tongyi Qianwen team open sourced Qwen3-32B-Instruct, which is the main model in the Qwen3 series for \"single card deployable\" scenarios. The weight is licensed under the Apache 2.0 license and supports commercial use (you need to confirm the latest license terms yourself).",
          "The model supports 128K context, native function calling, and JSON schema output. The community's reproduction results on benchmarks such as MMLU, C-Eval, and HumanEval show that Chinese reasoning and code generation capabilities are close to GPT-4o mini and early versions of Claude 3.5 Sonnet, and are significantly stronger than the previous generation Qwen2.5-32B.",
          "In terms of hardware, BF16 full-blooded inference requires about 64GB of video memory; after quantification, INT4 can be run on a single RTX 4090 (24GB), with tokens/s of about 15–25, which is suitable for individual developers and intranet deployment of small and medium-sized enterprises. Ollama, llama.cpp, and vLLM all provide merge scripts or preset model cards.",
          "If you are evaluating an AI assistant that \"does not leave the data out of the intranet\", Qwen3-32B is currently a very cost-effective starting point: first use Ollama to pull and test run, and then decide whether to join the vLLM cluster based on business needs."
        ],
        "highlights": [
          "Apache 2.0 open source, supports 128K contexts",
          "INT4 quantized single card 24GB can be reasoned",
          "Chinese language and coding capabilities are close to the same level as the closed source model",
          "Ollama / vLLM ecosystem has followed"
        ],
        "tags": [
          "开源",
          "Qwen",
          "本地部署"
        ]
      },
      {
        "id": "2026-07-01-google-gemini-live",
        "title": "Google Gemini Live API opens up real-time multi-modal sessions to developers",
        "summary": "Developers can access low-latency voice + video streaming conversations, support interruption and screen sharing context; Android and Web SDK are launched simultaneously, suitable for customer service and on-site guidance applications.",
        "source": "Google Developers",
        "body": [
          "Google is opening up the Gemini Live API to developers, allowing apps to access low-latency voice + video streaming conversations. Different from the batch processing mode of uploading images/audio at once, the Live API maintains a long connection session, the model can \"listen, watch and respond\", and supports users to interrupt at any time.",
          "Typical access scenarios include: video customer service (the user holds up his mobile phone to show the faulty device), remote teaching (the teacher shares the screen to explain), and voice assistants on wearable devices. Android SDK is released simultaneously with Web SDK, and iOS SDK is in private preview.",
          "At the technical level, the Live API is based on WebSocket bidirectional streaming, the audio defaults to 16kHz PCM, and the video frames are pushed in JPEG sequences. Developers need to handle VAD (Voice Activity Detection) and echo cancellation by themselves, and Google provides a reference implementation. Billing is based on session length + input/output token stack.",
          "Domestic developers should note: Gemini API needs to be accessed through compliance agents in some regions, and real-time video streaming requires high bandwidth. It is recommended to use the official demo on the web side to verify the delay before integrating it into the product."
        ],
        "highlights": [
          "WebSocket long connection, supports voice + video real-time conversation",
          "Users can interrupt at any time, suitable for natural interaction scenarios",
          "Android/Web SDK is open",
          "Suitable for customer service, teaching, and on-site guidance applications"
        ],
        "tags": [
          "Gemini",
          "多模态",
          "API"
        ]
      },
      {
        "id": "2026-06-30-mcp-registry",
        "title": "MCP official Registry public beta: one-click discovery and installation of Server",
        "summary": "Model Context Protocol launches a centralized registry. Cursor, Claude Desktop and VS Code extensions can directly browse the highest-rated MCP Server, lowering the entry threshold for Agent tool links.",
        "source": "MCP Blog",
        "body": [
          "The Model Context Protocol (MCP) led by Anthropic has launched an official Registry public beta version, providing centralized server discovery, version management and one-click installation capabilities. In the past, developers had to manually clone the GitHub repository and configure JSON. Now they can directly search and install it in Cursor, Claude Desktop, and VS Code extensions.",
          "The first batch of Registry includes 200+ Servers, covering high-frequency tools such as GitHub, Slack, PostgreSQL, Brave Search, and Filesystem. Each Server displays downloads, recent updates, compatible clients and community ratings, and supports filtering by tags (database, search, automation, etc.).",
          "For Agent developers, this means that the tool link connection cost has dropped significantly: creating a new Agent that can \"read the warehouse + query the database + send Slack\" has been shortened from days to hours. However, in the production environment, you still need to pay attention to minimizing permissions - the quality of the Server on the Registry varies, so please read the source code and permission statement before installation.",
          "The MCP navigation section of BestWayToLearn.AI will continue to synchronize popular Registry entries. It is recommended to start with an officially certified Server to avoid installing third-party packages from unknown sources."
        ],
        "highlights": [
          "200+ Server can be installed on mainstream clients with one click",
          "Lower the entry barrier for Agent tool links",
          "Supports ratings, tags and version management",
          "Production environment needs to pay attention to permissions and source code auditing"
        ],
        "tags": [
          "MCP",
          "Agent",
          "工具链"
        ]
      },
      {
        "id": "2026-06-30-cn-genai-label",
        "title": "Domestic generative AI services add “content identification” compliance requirements",
        "summary": "The new regulations require public-facing applications to add explicit or implicit labels to AI-generated content and improve user complaints and traceability mechanisms; overseas products must simultaneously assess multi-regional labeling obligations.",
        "source": "行业合规速递",
        "body": [
          "Domestic generative AI services are ushering in more detailed “content identification” compliance requirements. Products that provide the public with text, picture, audio, and video generation capabilities need to add explicit identification (such as watermarks, subscripts) or implicit identification (digital watermark/metadata) that comply with national standards to the AI-generated content, and establish a user complaint and content traceability mechanism.",
          "Explicit identification requires that \"generated by AI\" be stated in a position perceptible to users, and the function of one-click removal of the identification must not be provided. Implicit identification needs to be written into file metadata or pixel-level watermarks for supervision and platform random inspection. Scenarios such as self-media distribution, e-commerce detail pages, and educational courseware are all covered.",
          "For overseas products, cross-border obligations such as the EU AI Act and US state deepfake regulations need to be simultaneously evaluated - the same generation pipeline may need to output different labeling strategies by region. The technical team should implement the front-end rendering layer and the export pipeline at the same time to avoid the compliance loophole of \"only web page display, export without identification\".",
          "Entrepreneurs suggest: incorporate identification capabilities into MVP rather than post-mortem patches; retain generation logs (user ID, time, model version, prompt word summary) for at least 6 months to facilitate response to complaints and audits."
        ],
        "highlights": [
          "Explicit + Implicit Dual Track Identification Requirements",
          "Complaint acceptance and traceability mechanism must be established",
          "Products shipped overseas need to evaluate regulations in multiple regions",
          "It is recommended to keep the generated logs for at least 6 months"
        ],
        "tags": [
          "合规",
          "政策",
          "中国"
        ]
      },
      {
        "id": "2026-06-29-deepseek-r2-rumor",
        "title": "DeepSeek R2 preview version appears on HuggingFace, inference cost reduced by half",
        "summary": "The leaked weight shows that the MoE architecture has been further expanded, and the mathematics and code benchmarks have been significantly improved. The official announcement has not yet been made, but the \"R2-preview\" grayscale entry has appeared on the API price page.",
        "source": "HuggingFace / 社区",
        "body": [
          "The preview copyright of DeepSeek R2 briefly appeared on HuggingFace, attracting great attention from the community. According to the leaked configuration, R2 continues to use the MoE (Mixed Expert) architecture, the number of activation parameters is further expanded compared to R1, and the mathematical reasoning (AIME, MATH) and code (LiveCodeBench) benchmarks have increased by double-digit percentage points.",
          "What is even more eye-catching is the cost: the community estimates based on the preview version API pricing page that the cost of R2 inference for the same task is about half of R1, mainly due to expert routing optimization and quantitative inference pipeline improvements. DeepSeek has not yet issued an official press release, but the \"deepseek-r2-preview\" grayscale entry has appeared on the domestic API console, and some enterprise users have been invited to test it.",
          "Please be reminded that the preview copyright has been removed from the shelves. The performance data currently circulating are from community reproduction and may be different from the final official version. Please do not rely on unofficial preview interfaces in production environments.",
          "For learners, if R2 is released as scheduled, it will further reduce the cost of \"high-quality reasoning\" and benefit AI application entrepreneurship and academic research. It is recommended to continue to pay attention to DeepSeek's official announcement and API changelog."
        ],
        "highlights": [
          "MoE architecture expansion, mathematics/code benchmark improvement",
          "A series of illustrations in a unified IP style.",
          "It has not been officially announced yet. Use the preview interface with caution in production environments.",
          "The API console has a grayscale entrance."
        ],
        "tags": [
          "DeepSeek",
          "MoE",
          "推理"
        ]
      },
      {
        "id": "2026-06-29-sora-public",
        "title": "OpenAI Sora opens Wensheng Video to ChatGPT Plus global users",
        "summary": "Users can directly generate 1080p videos up to 20 seconds in ChatGPT, supporting camera movement and style reference images; Pro subscription provides watermark-free export and longer duration.",
        "source": "OpenAI",
        "body": [
          "OpenAI opens Sora’s video capabilities to ChatGPT Plus subscribers worldwide (except in some regions). Users can generate 1080p video clips of up to 20 seconds by entering a text description or uploading a reference image in the ChatGPT dialog box without having to jump to a separate site.",
          "Sora supports camera movement description (push, pull, pan, move), style reference pictures (upload an atmosphere picture to guide tone and composition), and simple storyboard prompts. ChatGPT Pro subscribers get watermark-free exports, up to 60-second generation credits, and priority queues.",
          "In terms of content policy, OpenAI prohibits the generation of real-life portraits, copyrighted characters, and violent pornographic content, and by default adds an \"AI generated\" logo in the lower right corner of the generated video. Users can download MP4s, but they must comply with the platform's terms of use and may not be used for misleading deepfakes.",
          "Compared with competing products such as Runway, Kling, and Keling, the advantage of Sora is that it is seamlessly integrated with the ChatGPT conversation flow - you can first discuss the script in text and then generate a video with one click. The disadvantage is that the granularity of custom control is still weaker than that of professional video tools, and it is suitable for short video creators to do first drafts rather than refinements."
        ],
        "highlights": [
          "Directly generated within ChatGPT Plus, up to 20 seconds 1080p",
          "Supports camera movement and style reference images",
          "Pro subscription without watermark + longer duration",
          "Suitable for the first draft of short videos, fine editing still requires professional tools"
        ],
        "tags": [
          "Sora",
          "视频生成",
          "OpenAI"
        ]
      },
      {
        "id": "2026-06-28-agent-benchmark",
        "title": "AgentBench 2.0 released: Evaluating real office Agent completion rate",
        "summary": "The new benchmark covers email, forms, calendars, and cross-application workflows. The average completion rate of mainstream Agent frameworks on \"multi-step without manual intervention\" tasks is less than 35%, exposing shortcomings in planning and error recovery.",
        "source": "AgentBench Paper",
        "body": [
          "AgentBench 2.0 is officially released, which is currently one of the Agent evaluation benchmarks closest to “real office scenarios”. Unlike earlier benchmarks that only performed single-step tool calls, version 2.0 covers 48 multi-step tasks such as email sending and receiving, spreadsheet editing, calendar scheduling, and cross-application copy and paste, requiring the Agent to complete it end-to-end without manual intervention.",
          "Paper disclosure: When mainstream models such as GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro are combined with frameworks such as LangChain and AutoGPT, the average task completion rate is less than 35%. The failure modes are mainly concentrated in three categories: long-range planning breaks (reaching step 3 and forgetting the goal of step 1), tool parameters not self-correcting after filling in errors, and cross-application state synchronization lost.",
          "The researchers proposed \"error recovery rate\" as a new indicator - whether the Agent can adjust its strategy and try again based on the error message after the tool call fails. The results show that even the strongest model has an error recovery rate of only about 50%, indicating that the current Agent is still far from being a \"reliable digital employee\".",
          "Implications for practitioners: Before promoting \"fully automatic Agent\", use the AgentBench class benchmark to self-test; product design should retain manual confirmation nodes instead of pursuing one-step unattended operation."
        ],
        "highlights": [
          "48 real office multi-step tasks",
          "Average completion rate of mainstream agents < 35%",
          "Long-range planning and error recovery are major shortcomings",
          "Product design should retain manual confirmation nodes"
        ],
        "tags": [
          "评测",
          "Agent",
          "研究"
        ]
      },
      {
        "id": "2026-06-28-meta-llama4-scout",
        "title": "Meta Llama 4 Scout 17B open source, mobile NPU can run the quantized version",
        "summary": "The lightweight model is oriented to client-side Agent and summary scenarios, and officially provides Core ML and NNAPI conversion scripts; it can reach 25 tok/s quantitative reasoning on the M4 iPhone.",
        "source": "Meta AI",
        "body": [
          "Meta open-sources Llama 4 Scout 17B, which is positioned as a \"device-side first\" lightweight model, targeting Agent, summary, translation and other scenarios on mobile phones, tablets and notebooks. Using the new tokenizer and RoPE variants of the Llama 4 series, try to maintain the quality of inference at the 17B parameter level.",
          "The official release of the Core ML (iOS) and NNAPI (Android) conversion script, the INT4 quantified version measured about 25 tokens/s on the M4 iPhone, is enough to support the voice assistant's streaming reply. Mac-side M series chips can use the MLX framework to run to 40+ tok/s.",
          "Compared with competing products such as Qwen3-32B and Gemma 3, the advantage of Scout 17B lies in the device-side ecosystem - Meta directly cooperates with mobile phone manufacturers for pre-installation. The disadvantage is that the Chinese language ability is weaker than the domestic open source model. Domestic users are more recommended to use the Qwen client-side quantitative version.",
          "Developers can first download the GGUF quantified weight from HuggingFace and try it locally with llama.cpp or Ollama; if making an iOS App, follow the official Core ML tutorial to convert it and integrate it into the Swift project."
        ],
        "highlights": [
          "17B lightweight model, oriented to end-side Agent",
          "M4 iPhone INT4 about 25 tok/s",
          "Core ML / NNAPI conversion scripts provided",
          "For Chinese scenarios, it is recommended to give priority to domestic open source models."
        ],
        "tags": [
          "Llama",
          "端侧",
          "开源"
        ]
      },
      {
        "id": "2026-06-27-copilot-workspace-ga",
        "title": "Microsoft Copilot Workspace is fully online: one-stop agent for email + documents + meetings",
        "summary": "Workspace connects Outlook, Word, Teams and SharePoint into a single Agent session, which can draft minutes, update project tables and schedule meetings across applications. The enterprise version is billed on a per-seat basis.",
        "source": "Microsoft Blog",
        "body": [
          "Cross-application context: Copilot can read user-authorized email threads and SharePoint documents, and complete \"read minutes → change plan → send to Teams\" in one conversation. This is one of the most watched changes in the 2026-06-27 product release field surrounding the \"full launch of Microsoft Copilot Workspace\".",
          "Permission boundaries: Administrators can configure the data residency range, which does not span tenants by default; sensitive label documents require additional approval before Agents are allowed to write. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans based on this to avoid switching all production traffic without pilot verification.",
          "Pricing changes: Microsoft 365 E5 includes a basic quota, and excess billing is based on the number of Agent steps; small and medium-sized teams can start a 30-day pilot. In terms of business and compliance, it is recommended to check data residency, log retention, and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Implementation suggestions: Prioritize piloting in the two high-frequency scenarios of \"Weekly Report Collection\" and \"Customer Minutes\". ROI is the easiest to quantify. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Cross-application context: Copilot can read user-authorized email threads and SharePoint documents, and complete \"read minutes → change plan → send to Teams\" in one conversation",
          "Permission boundaries: Administrators can configure the data residency range, which does not cross tenants by default; sensitive label documents require additional approval before Agents are allowed to write",
          "Pricing changes: Microsoft 365 E5 includes a basic quota, and excess billing is based on the number of Agent steps; small and medium-sized teams can start a 30-day pilot",
          "Implementation suggestions: Prioritize piloting in two types of high-frequency scenarios: \"Weekly Report Collection\" and \"Customer Minutes\". ROI is the easiest to quantify."
        ],
        "tags": [
          "Copilot",
          "办公",
          "Agent"
        ]
      },
      {
        "id": "2026-06-26-github-copilot-agent",
        "title": "GitHub Copilot Agent mode GA: Automatically submit PR for warehouse-level tasks",
        "summary": "Agent can clone issue descriptions, search the code base, modify multiple files and open Pull Requests; supports people to gradually approve diffs in the loop.",
        "source": "GitHub Changelog",
        "body": [
          "Workflow: Start Agent with one click from Issue, automatically create branches, submit commits, and attach implementation instructions. This is one of the most watched changes in the product release field on 2026-06-26 surrounding \"GitHub Copilot Agent Mode GA\".",
          "Security mechanism: The default is a read-only token, and write operations require users to accept it step by step; the enterprise version can force code scanning access control. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Applicable boundaries: suitable for bug fixing, testing, and document synchronization; it is still recommended to manually lead architecture-level reconstruction. In terms of business and compliance, it is recommended to simultaneously check data residency, log retention, and user notification obligations, especially when the product is oriented to cross-border or multi-regional users.",
          "Team practice: Write the acceptance criteria in the Issue template, and the Agent completion rate can be increased by 20–30%. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Workflow: Start Agent with one click from Issue, automatically create branches, submit commits and attach implementation instructions",
          "Security mechanism: The default is read-only token, and the write operation requires the user to accept it step by step; the enterprise version can force code scanning access control",
          "Applicable boundary: suitable for bug fixing, testing, and document synchronization; manual-led architecture-level refactoring is still recommended",
          "Team practice: Write the acceptance criteria in the Issue template, and the Agent completion rate can be increased by 20–30%"
        ],
        "tags": [
          "Copilot",
          "编程",
          "GitHub"
        ]
      },
      {
        "id": "2026-06-25-notion-ai-3",
        "title": "Notion AI 3.0 releases \"Database Agent\": natural language changes views and formulas",
        "summary": "Users can use spoken language to describe filtering, grouping, and rollup requirements, and AI directly generates and interprets formulas; cross-page associations and batch attribute filling are supported.",
        "source": "Notion Release Notes",
        "body": [
          "Core capabilities: Create Kanban/calendar views in one sentence and automatically complete related fields. This is one of the most watched changes in the 2026-06-25 product release field surrounding \"Notion AI 3.0 releases \"Database Agent\"\".",
          "Audit trail: Each AI modification retains the diff and can be rolled back to the previous version of the database structure with one click. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Collaboration scenarios: Suitable for structured collaboration such as operational dashboards, recruitment pipelines, and course scheduling. In terms of business and compliance, it is recommended to simultaneously check data residency, log retention, and user notification obligations, especially when the product is targeted at cross-border or multi-regional users.",
          "Note: Complex cross-database formulas still require manual verification of boundary conditions. For AI learners, this can be used to update personal tool maps and pitfall lists, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Core capabilities: Create Kanban/calendar views in one sentence and automatically complete related fields",
          "Audit trail: Each AI modification retains the diff and can be rolled back to the previous version of the database structure with one click.",
          "Collaboration scenarios: suitable for structured collaboration such as operational dashboards, recruitment pipelines, course scheduling, etc.",
          "Note: Complex cross-database formulas still require manual verification of boundary conditions"
        ],
        "tags": [
          "Notion",
          "办公",
          "Agent"
        ]
      },
      {
        "id": "2026-06-24-perplexity-pages",
        "title": "Perplexity Pages Team Edition: One-click publishing of research pages that can cite sources",
        "summary": "The team can jointly build a research topic page with footnotes, which supports embedded charts and regular automatic refresh of paragraphs; it is suitable for external sharing by market and investment research groups.",
        "source": "Perplexity Blog",
        "body": [
          "Release form: Generate public or password-protected topic pages, retain traceable reference links. This is one of the most watched changes surrounding the \"Perplexity Pages Team Edition\" in the product release field on 2026-06-24.",
          "Refresh strategy: Weekly automatic updates can be set for specified paragraphs, reducing manual maintenance. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Demonstration: The official demo supports the \"use text to change pictures\" interaction. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans based on this to avoid switching all production traffic without pilot verification.",
          "Learner usage: Make the course reading list into a shareable topic page. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Publishing form: Generate public or password-protected topic pages, retain traceable reference links",
          "Refresh strategy: You can set automatic weekly updates for specified paragraphs to reduce manual maintenance.",
          "Permissions: Team administrators control editors and external domain name whitelists",
          "Learner usage: Make the course reading list into a shareable topic page"
        ],
        "tags": [
          "Perplexity",
          "调研",
          "协作"
        ]
      },
      {
        "id": "2026-06-23-adobe-firefly-video",
        "title": "Adobe Firefly Video open beta: Premiere built-in video editing track",
        "summary": "Firefly Video generates clips that drop directly into the Premiere timeline, supporting Extend, Inpaint, and style matching to existing footage.",
        "source": "Adobe News",
        "body": [
          "Workflow: Enter the storyboard description in the sidebar of Premiere and generate a B-roll to fill in the empty shots. This is one of the most watched changes in the product release field on 2026-06-23 surrounding the \"Adobe Firefly Video Open Beta\".",
          "Copyright policy: The training data statement does not contain unauthorized portraits of real people; export with Content Credentials. The technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching full production traffic without pilot verification.",
          "Compared with competing products: the control granularity is better than that of pure web page generators, but the duration is still relatively short. In terms of business and compliance, it is recommended to check data residency, log retention, and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Recommendation: First use it for the empty shot of the trailer, and then unify it with the real-shot material for color grading. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Workflow: Enter the storyboard description in the Premiere sidebar and generate a B-roll to fill in the empty shots.",
          "Copyright policy: The training data statement does not contain unauthorized portraits of real people; export with Content Credentials",
          "Compared with competing products: the control granularity is better than that of pure web page generators, but the duration is still short.",
          "Recommendation: Use it first for trailer empty shots, and then unify it with the real-shot material for color grading."
        ],
        "tags": [
          "Adobe",
          "视频",
          "Firefly"
        ]
      },
      {
        "id": "2026-06-22-apple-intelligence-cn",
        "title": "Apple Intelligence Mainland China version opens in grayscale: local summary + writing tools",
        "summary": "Grayscale users can use local models to summarize, polish and prioritize notifications in memos and emails; cloud enhancements will be released in batches.",
        "source": "Apple Newsroom",
        "body": [
          "Local priority: Summary and writing rewriting are completed on the device NPU by default, reducing privacy concerns. This is one of the most watched changes in the 2026-06-22 product release field surrounding \"Apple Intelligence China Mainland Version Turns On Grayscale\".",
          "Opening in batches: Tushengtu and cross-App Agent have not yet been fully released, so please pay attention to system update announcements. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Ecology: Developers can access the writing API through App Intents. In terms of business and compliance, it is recommended to simultaneously check data residency, log retention, and user notification obligations, especially when the product is targeted at cross-border or multi-regional users.",
          "User tip: Old devices need to confirm whether the Neural Engine generation is supported. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Local priority: summary and writing rewriting are completed on the device NPU by default, reducing privacy concerns.",
          "Opening in batches: Tushengtu and cross-App Agent are not yet fully available, please pay attention to the system update announcement",
          "Ecology: Developers can access the writing API through App Intents",
          "User tip: Old devices need to confirm whether Neural Engine generations support it"
        ],
        "tags": [
          "Apple",
          "端侧",
          "中国"
        ]
      },
      {
        "id": "2026-06-21-windsurf-cascade-2",
        "title": "Windsurf Cascade 2.0 introduces \"memory files\" for cross-session project context",
        "summary": "Project root directory .windsurf/memory.md Persistence architecture decisions and conventions, new sessions are automatically loaded, and repeated explanations are reduced.",
        "source": "Windsurf Blog",
        "body": [
          "Memory mechanism: Agent can write the rules confirmed by the user into a memory file for subsequent reuse. This is one of the most watched changes in the 2026-06-21 product release area surrounding \"Windsurf Cascade 2.0 introduces \"memory file\" cross-session project context\".",
          "Team sharing: memory.md can be submitted to Git to unify team coding standards. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Compare Cursor: Both are moving toward project-level long-term memory. The selection depends on language support and pricing. In terms of business and compliance, it is recommended to simultaneously check data residency, log retention, and user notification obligations, especially when the product is targeted at cross-border or multi-regional users.",
          "Practice: Manually maintain the memory in the first week, and then the Agent’s autonomous updates require manual review. For AI learners, this can be used to update the personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Memory mechanism: Agent can write the rules confirmed by the user into a memory file for subsequent reuse.",
          "Team sharing: memory.md can be submitted to Git to unify team coding standards",
          "Compare Cursor: Both are moving toward project-level long-term memory. The selection depends on language support and pricing.",
          "Practice: Manually maintain the memory in the first week, and then the Agent’s autonomous updates require manual review."
        ],
        "tags": [
          "Windsurf",
          "IDE",
          "编程"
        ]
      },
      {
        "id": "2026-06-20-zoom-ai-companion-3",
        "title": "Zoom AI Companion 3.0: Real-time Q&A and action item tracking during meetings",
        "summary": "During the meeting, you can ask privately \"What is the budget number just mentioned?\"; after the meeting, Jira/Asana action items will be automatically generated and the completion will be tracked.",
        "source": "Zoom Blog",
        "body": [
          "Assistant during the meeting: Only the person who asked the question can see the answer to avoid interrupting the rhythm of the meeting. This is one of the most watched changes surrounding \"Zoom AI Companion 3.0\" in the 2026-06-20 product release field.",
          "Integration: supports two-way synchronization of action items with Salesforce and Jira. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Compliance: Enterprises can turn off cloud recording and save only local summaries. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Tip: Uploading the agenda PDF before the meeting can improve the accuracy of the summary. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practice or internal sharing within a week."
        ],
        "highlights": [
          "Assistant during the meeting: Only the person who asked the question can see the answer to avoid interrupting the rhythm of the meeting.",
          "Integration: supports two-way synchronization of action items with Salesforce and Jira",
          "Compliance: Enterprises can turn off cloud recording and keep only local summaries",
          "Tip: Uploading the agenda PDF before the meeting can improve the accuracy of the summary"
        ],
        "tags": [
          "Zoom",
          "会议",
          "办公"
        ]
      },
      {
        "id": "2026-06-19-mistral-large-3",
        "title": "Mistral Large 3 Open Weight: Multilingual Reasoning Enhancement",
        "summary": "Mistral releases Large 3 open weight version, French, English, German and Spanish reasoning improvements, Apache 2.0 license; vLLM and TGI are supported on the same day.",
        "source": "Mistral AI",
        "body": [
          "Performance: MMLU-Pro and BBH are about 8% better than Large 2, and French text has obvious advantages. This is one of the most watched changes in the open source model field on 2026-06-19 around \"Mistral Large 3 open weight\".",
          "Deployment: BF16 requires 2×80GB; AWQ 4bit single card can run 48GB. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Tool call: Native JSON schema mode, suitable for Agent orchestration. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Selection: Prioritize European data sovereignty scenarios. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Performance: MMLU-Pro and BBH are about 8% better than Large 2, and French text has obvious advantages.",
          "Deployment: BF16 requires 2×80GB; AWQ 4bit single card 48GB can run",
          "Tool call: native JSON schema mode, suitable for Agent orchestration",
          "Selection: Prioritize European data sovereignty scenarios"
        ],
        "tags": [
          "Mistral",
          "开源",
          "推理"
        ]
      },
      {
        "id": "2026-06-18-gemma-3-12b",
        "title": "Google Gemma 3 12B open source: single-card friendly multi-modal small model",
        "summary": "Gemma 3 12B supports image + text input, 128K context; suitable for notebook local experiments and lightweight RAG.",
        "source": "Google DeepMind",
        "body": [
          "Modal: You can input chart screenshots for Q&A, suitable for report interpretation Demo This is one of the most watched changes in the open source model field on 2026-06-18 surrounding \"Google Gemma 3 12B Open Source\".",
          "Users can directly generate 1080p videos up to 20 seconds in ChatGPT, supporting camera movement and style reference images; Pro subscription provides watermark-free export and longer duration.",
          "Quantification: Ollama provides Q4_K_M, 16GB memory machine for trial operation. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Limitations: Chinese proficiency is weaker than Qwen's equivalent model. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Capability: Minute-level interaction scene consistency improvement This is one of the most watched changes in the 2026-05-25 research breakthrough field surrounding \"Google DeepMind releases Genie 3 world model\".",
          "License: Gemma license allows commercial use subject to usage policy",
          "Quantification: Ollama provides Q4_K_M, 16GB memory machine can be tested",
          "Limitations: Chinese ability is weaker than Qwen equivalent model"
        ],
        "tags": [
          "Gemma",
          "开源",
          "多模态"
        ]
      },
      {
        "id": "2026-06-17-sd3-medium-open",
        "title": "Stable Diffusion 3 Medium weighted open source: commercial-friendly image generation",
        "summary": "Stability AI open source SD3 Medium, 6B parameters, text rendering and composition are improved compared to SDXL; the ComfyUI node is updated on the same day.",
        "source": "Stability AI",
        "body": [
          "Quality: The usability of small font posters has been improved, but it is still recommended to modify the characters in PS later. This is one of the most watched changes in the field of open source models on 2026-06-17 surrounding \"Stable Diffusion 3 Medium Weighted Open Source\".",
          "Hardware: 12GB of video memory can generate 1024, and higher VRAM is required in batches. The technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Compliance: It is prohibited to generate portraits of specific celebrities, and local filtering of prompt words is required. In terms of business and compliance, it is recommended to check data residency, log retention, and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Workflow: Combining with ControlNet Union allows for precise control of composition. For AI learners, this can be used to update personal tool maps and pitfall lists, and complete a small-scale practice or internal sharing within a week."
        ],
        "highlights": [
          "Quality: The usability of small font posters has been improved, but it is still recommended to modify the fonts in PS later.",
          "Hardware: 12GB video memory capable of 1024 generation, higher VRAM required for batch processing",
          "Compliance: It is forbidden to generate portraits of specific celebrities, and local filtering prompt words are required",
          "Workflow: Combined with ControlNet Union for precise composition control"
        ],
        "tags": [
          "SD3",
          "图像",
          "开源"
        ]
      },
      {
        "id": "2026-06-16-phi-4-mini",
        "title": "Microsoft Phi-4-mini open source: 3.8B mobile-level inference model",
        "summary": "Phi-4-mini leads the list of small mathematical and logical models and is suitable for on-device assistants and offline FAQ robots.",
        "source": "Microsoft Research",
        "body": [
          "Positioning: 3.8B parameters but close to 7B reasoning performance, emphasizing data quality. This is one of the most watched changes in the open source model field surrounding \"Microsoft Phi-4-mini Open Source\" on 2026-06-16.",
          "Deployment: ONNX Runtime Mobile sample has been released. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Scenario: Suitable for deterministic tasks such as work order classification and form verification. In terms of business and compliance, it is recommended to simultaneously check data residency, log retention and user notification obligations, especially when the product is targeted at cross-border or multi-regional users.",
          "Note: Creative writing and long article generation are not strong points. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Positioning: 3.8B parameters but close to 7B reasoning performance, emphasizing data quality",
          "Deployment: ONNX Runtime Mobile sample released",
          "Scenario: Suitable for deterministic tasks such as work order classification and form verification",
          "Note: Creative writing and long article generation are not strong points"
        ],
        "tags": [
          "Phi",
          "端侧",
          "微软"
        ]
      },
      {
        "id": "2026-06-15-internlm3-8b",
        "title": "Scholar Puyu InternLM3-8B open source: Chinese Agent tool call optimization",
        "summary": "Shanghai AI Lab open source InternLM3-8B-Instruct, C-Eval and tool call format are aligned with OpenAI schema.",
        "source": "InternLM GitHub",
        "body": [
          "Chinese: Chinese knowledge Q&A is significantly better than the same level Llama. This is one of the most watched changes in the field of open source models on 2026-06-15 surrounding the \"Scholar·Puyu InternLM3-8B Open Source\".",
          "Tool: The function call success rate reaches 85%+ in the local benchmark. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans based on this to avoid switching all production traffic without pilot verification.",
          "Ecology: One-click startup scripts for LMDeploy and FastChat are available. In terms of business and compliance, it is recommended to check data residency, log retention, and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Recommendation: Chinese Agents on government and enterprise intranets can be prioritized for evaluation. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Chinese: Chinese trivia questions and answers are significantly better than Llama at the same level",
          "Tool: The function call success rate reaches 85%+ in local benchmark",
          "Ecology: LMDeploy and FastChat one-click startup scripts are available",
          "Suggestion: Chinese Agents on government and enterprise intranets can be evaluated first"
        ],
        "tags": [
          "InternLM",
          "中文",
          "开源"
        ]
      },
      {
        "id": "2026-06-14-yi-lightning-34b",
        "title": "Zero One Thing Yi-Lightning 34B open source: high-throughput inference optimization",
        "summary": "Yi-Lightning optimizes KV cache and speculative decoding for high QPS scenarios, and its API form is compatible with OpenAI.",
        "source": "01.AI",
        "body": [
          "Throughput: vLLM is about 35% higher than the standard Yi-34B tokens/s. This is one of the most watched changes in the open source model field on 2026-06-14 surrounding \"Zero One Thousand Yi-Lightning 34B Open Source\".",
          "Cost: Suitable for high concurrency such as customer service and search summaries. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Licensing: Please check the latest community license terms. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Deployment: It is recommended to pair with load balancing and circuit breaker. For AI learners, this can be used to update the personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Throughput: vLLM improves by about 35% compared to standard Yi-34B tokens/s",
          "Cost: Suitable for high concurrency such as customer service and search summaries",
          "Licensing: Please check the latest community license terms",
          "Deployment: It is recommended to pair with load balancing and circuit breaker"
        ],
        "tags": [
          "Yi",
          "推理",
          "开源"
        ]
      },
      {
        "id": "2026-06-13-emu3-vision",
        "title": "Zhiyuan Emu3 open source: unified multi-modal understanding and generation",
        "summary": "Emu3 uses a single model to complete image description, editing instructions and Vincentian diagrams. Research is improving but engineering is still in its early stages.",
        "source": "BAAI",
        "body": [
          "Unified architecture: understand and generate shared weights, reducing multi-model maintenance. This is one of the most watched changes in the field of open source models on 2026-06-13 surrounding \"Intelligent Source Emu3 Open Source\".",
          "Write an agenda before the meeting, post key points during the meeting, and use Notion AI to generate minutes and tasks.",
          "Production: Latency and stability have not yet reached the level of commercial APIs. In terms of business and compliance, it is recommended to check data residency, log retention, and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Follow: Suitable for tracking by multi-modal researchers. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Unified architecture: understand and generate shared weights, reducing multi-model maintenance",
          "Demo: The official Demo supports \"modify images with text\" interaction",
          "Production: Latency and stability not yet at commercial API levels",
          "Attention: Suitable for multi-modal researcher tracking"
        ],
        "tags": [
          "Emu3",
          "多模态",
          "研究"
        ]
      },
      {
        "id": "2026-06-12-command-r-plus-ft",
        "title": "Cohere Command R+ Fine Tuning Weight Open: Enterprise RAG Template",
        "summary": "Cohere releases R+ fine-tuning guide and LoRA weighting example, emphasizing citation generation and multi-document alignment.",
        "source": "Cohere",
        "body": [
          "RAG: built-in citation token to reduce illusory citations. This is one of the most watched changes in the open source model field on 2026-06-12 surrounding the \"Cohere Command R+ fine-tuning weight opening\".",
          "Fine-tuning: Provides 8×A100 full-parameter fine-tuning scripts and data formats. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Comparison: English long documents have obvious advantages, while Chinese requires preparing its own corpus. In terms of business and compliance, it is recommended to check data residency, log retention, and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Practice: Q&A on legal/medical English documents can be quickly piloted. For AI learners, this can be used to update the personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "RAG: Built-in citation token to reduce phantom citations",
          "Fine-tuning: Provides 8×A100 full-parameter fine-tuning scripts and data formats",
          "Comparison: English long documents have obvious advantages, while Chinese requires preparing its own corpus.",
          "Practice: Q&A on legal/medical English documents can be quickly piloted"
        ],
        "tags": [
          "Cohere",
          "RAG",
          "微调"
        ]
      },
      {
        "id": "2026-06-11-ai-chip-supply",
        "title": "2026 Q2 AI chip delivery cycle shortened: H100/B200 spot loose",
        "summary": "Channel data shows that the wait for GPU delivery has dropped from 12 weeks to 4–6 weeks, cloud vendors have lowered bids for some training instances, and entrepreneurial training costs have fallen.",
        "source": "SemiAnalysis",
        "body": [
          "Supply and demand: Blackwell production capacity ramping + second-hand H100 reshoring to alleviate shortages This is one of the most watched changes in the industry dynamics on 2026-06-11 surrounding \"2026 Q2 AI chip delivery cycle shortening\".",
          "Price: Spot GPU prices in some areas dropped by 18% quarter-on-quarter. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Impact: Small and medium-sized teams can afford short-term fine-tuning experiments. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Suggestion: Give priority to evaluating the cost of reasoning rather than blindly hoarding cards. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Supply and demand: Blackwell production capacity ramping + second-hand H100 reshoring to alleviate shortages",
          "Price: spot GPU prices dropped 18% quarter-on-quarter in some areas",
          "Impact: Small and medium-sized teams can afford short-term fine-tuning experiments",
          "Suggestion: Prioritize evaluating reasoning costs rather than blindly hoarding cards"
        ],
        "tags": [
          "芯片",
          "云计算",
          "成本"
        ]
      },
      {
        "id": "2026-06-10-yc-w26-ai-batch",
        "title": "YC W26 batch: Over 78% of companies are AI-Native products",
        "summary": "The highlights of Demo Day focus on vertical agents, voice workflow and compliance tools; the early median ARR doubled compared with last year.",
        "source": "YC Blog",
        "body": [
          "Trend: “Copilot for",
          "Financing: The median valuation of the seed round has increased, and investors focus on retention rather than demonstration. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Employment: Small teams prefer full stack + Agent orchestration capabilities. In terms of business and compliance, it is recommended to simultaneously check data residency, log retention, and user notification obligations, especially when the product is targeted at cross-border or multi-regional users.",
          "Learning: Pay attention to open source alternatives and vertical data barriers. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Trend: “Copilot for X” is still popular, but differentiation turns to industry data",
          "Funding: Median seed round valuations rise as investors look to retention over demo",
          "Employment: Small teams prefer full stack + Agent orchestration capabilities",
          "Learning: Pay attention to open source alternatives and vertical data barriers"
        ],
        "tags": [
          "创业",
          "YC",
          "Agent"
        ]
      },
      {
        "id": "2026-06-09-cursor-valuation",
        "title": "Cursor completes new financing, valued at $9 billion",
        "summary": "Anysphere confirms that Cursor’s annual recurring revenue has exceeded $500 million, and its proportion of enterprise customers has increased.",
        "source": "TechCrunch",
        "body": [
          "Revenue: Personal subscription + Teams two-wheel drive, Teams is growing faster. This is one of the most watched changes in the industry dynamics on 2026-06-09 surrounding \"Cursor completes new financing, valued at US$9 billion.\"",
          "Product: Agent security audit and corporate policy control will be strengthened. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Competition: Windsurf, Copilot, Claude Code stand on three pillars. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Users: Pay attention to educational discounts and team seat management. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Revenue: Personal subscription + Teams two-wheel drive, Teams is growing faster",
          "Product: Agent security audit and corporate policy control will be strengthened",
          "Competition: Windsurf, Copilot, Claude Code three pillars",
          "User: Pay attention to educational discounts and team seat management"
        ],
        "tags": [
          "Cursor",
          "融资",
          "IDE"
        ]
      },
      {
        "id": "2026-06-08-openai-enterprise-arr",
        "title": "OpenAI enterprise ARR exceeds US$8 billion, API accounts for more than half",
        "summary": "The earnings call disclosed the growth of ChatGPT Enterprise and API, and the contribution of medical and financial compliance packages increased.",
        "source": "OpenAI",
        "body": [
          "Structure: API revenue exceeded half for the first time, indicating deeper B2B integration. This is one of the most watched changes in the industry dynamics field on 2026-06-08 surrounding \"OpenAI enterprise ARR exceeded US$8 billion, and API accounted for more than half.\"",
          "Compliance: HIPAA and SOC2 packages drive major customer signings. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Price: Reasoning that price reduction and usage packages coexist, customers need to do FinOps business and compliance. It is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Enlightenment: The decision of self-built vs. official API should be based on data sensitivity. For AI learners, this can be used to update the personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Structure: API revenue crosses half for first time, indicating deeper B2B integration",
          "Compliance: HIPAA, SOC2 packages drive key customer signings",
          "Price: Reasoning price reduction and usage package coexist, customers need to do FinOps",
          "Enlightenment: The decision of self-built vs official API should be based on data sensitivity"
        ],
        "tags": [
          "OpenAI",
          "企业",
          "市场"
        ]
      },
      {
        "id": "2026-06-07-hf-enterprise",
        "title": "Write an agenda before the meeting, post key points during the meeting, and use Notion AI to generate minutes and tasks.",
        "summary": "Enterprise customers deploy open source models and audit trails through private hubs, which have become a common architecture in finance and government affairs.",
        "source": "Hugging Face",
        "body": [
          "Model: Private Hub + Inference Endpoints One-stop This is one of the most watched changes in the industry dynamics on 2026-06-07 surrounding \"Hugging Face enterprise hosting revenue doubled, model card becomes the purchasing entrance\".",
          "Governance: Model cards and data cards become compliance audit materials. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Ecology: Mature integration with K8s and Airflow. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Recommendation: Lock the model SBOM before deploying on the intranet. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Mode: Private Hub + Inference Endpoints one-stop",
          "Governance: Model cards and data cards become compliance audit materials",
          "Ecology: Mature integration with K8s and Airflow",
          "Recommendation: Lock the model SBOM before deploying on the intranet"
        ],
        "tags": [
          "HuggingFace",
          "企业",
          "MLOps"
        ]
      },
      {
        "id": "2026-06-06-ai-job-market",
        "title": "2026 AI job report: Agent engineer demand +120% year-on-year",
        "summary": "A joint report by recruitment platforms shows that the median salary of \"Agent engineers\" who can write evaluation benchmarks and tool chains exceeds that of traditional ML engineers.",
        "source": "LinkedIn Economic Graph",
        "body": [
          "Skills: Prompt, RAG, evaluation, and observability are essential. This is one of the most watched changes surrounding the \"2026 AI Job Report\" in the field of industry dynamics on 2026-06-06.",
          "Region: North, Shenzhen, Hangzhou and Singapore are most in demand. Technical and product teams need to evaluate integration costs, permission changes and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Getting Started: Portfolios are more important than papers. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Recommendation: Master 1 IDE Agent + 1 Automation Platform. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Skills: Prompt, RAG, evaluation, and observability are essential",
          "Region: North to Shenzhen, Hangzhou and Singapore have the highest demand",
          "Getting Started: Portfolio is More Important than Essay",
          "Recommendation: Master 1 IDE Agent + 1 Automation Platform"
        ],
        "tags": [
          "就业",
          "Agent",
          "技能"
        ]
      },
      {
        "id": "2026-06-05-vertical-ai-saas",
        "title": "Vertical AI SaaS financing picks up: legal, medical, and manufacturing account for the top three",
        "summary": "Q2 venture capital data shows that ARR retention in vertical scenarios is better than general chat shells; buyers are willing to pay for compliance and workflow.",
        "source": "a16z",
        "body": [
          "Retention: AI functions embedded in workflows have higher NDRs. This is one of the most watched changes in the industry dynamics on 2026-06-05 surrounding the “resurgence of vertical AI SaaS financing.”",
          "Barriers: Industry data and expert feedback loops are moats. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Risk: Price reduction of general large models and thin-shell applications. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "For sensitive meetings, first confirm whether the company allows cloud transcription."
        ],
        "highlights": [
          "Retention: AI capabilities embedded in workflows have higher NDR",
          "Barriers: Industry data and expert feedback loops are moats",
          "Risk: Price reduction of general large models for extruded thin shell applications",
          "Entrepreneurship: Choose a narrow scenario with a clear ROI"
        ],
        "tags": [
          "SaaS",
          "垂直",
          "融资"
        ]
      },
      {
        "id": "2026-06-04-china-ai-app-dau",
        "title": "Domestic AI native app monthly active list update: office assistant and education categories lead the way",
        "summary": "QuestMobile's May data shows that office minutes, photo-taking and problem-solving, and video generation apps have led the month-on-month growth in MAU.",
        "source": "QuestMobile",
        "body": [
          "Category: Office collaboration and educational tutoring occupy six of the top ten positions. This is one of the most watched changes in the field of industry dynamics on 2026-06-04 surrounding the \"Update of the Domestic AI Native App Monthly Active List\".",
          "Monetization: Subscription + pay-per-use hybrid billing has become mainstream. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Compliance: Minors mode and content identification must be checked on the shelves. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Product: The growth of pure chat is slowing down, and tool-type functions are more sticky. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Category: Office collaboration and educational tutoring occupy six of the top ten positions",
          "Monetization: Subscription + pay-per-view hybrid billing becomes mainstream",
          "Compliance: Minor mode and content identification must be checked before listing",
          "Product: The growth of pure chat is slowing down, and tool-type functions are more sticky"
        ],
        "tags": [
          "中国",
          "应用",
          "数据"
        ]
      },
      {
        "id": "2026-06-03-eu-ai-act-highrisk",
        "title": "EU AI Act High-Risk List Details Request Comments: Recruitment and Credit Models Included",
        "summary": "The European Commission released a draft appendix for high-risk AI scenarios, requiring consistency testing and manual appeals channels for recruitment screening and credit scoring systems.",
        "source": "European Commission",
        "body": [
          "Scope: Recruitment, education scoring, credit, critical infrastructure included in high risks This is one of the most watched changes in the policy and regulatory field on 2026-06-03 surrounding the \"European Union AI Act High-Risk List Details Solicitation\".",
          "Obligations: data governance documents, log retention, people in the loop. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Timeline: Member states will convert domestic laws before the end of 2026. In terms of business and compliance, it is recommended to simultaneously check data residency, log retention and user notification obligations, especially when the product is targeted at cross-border or multi-regional users.",
          "Going overseas: SaaS for EU users needs to do DPIA in advance. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Scope: Recruitment, education scoring, credit, critical infrastructure included in high risk",
          "Responsibilities: data management documents, log retention, people in the environment",
          "Timeline: Member States transpose domestic laws by the end of 2026",
          "Going overseas: SaaS for EU users requires DPIA in advance"
        ],
        "tags": [
          "欧盟",
          "AI Act",
          "合规"
        ]
      },
      {
        "id": "2026-06-02-us-ai-safety-eo",
        "title": "The United States updates the AI ​​executive order: basic models need to submit a red team summary",
        "summary": "The federal agency requires hyperscale base model providers to submit to NIST a summary of their security assessment, including CBRN and network abuse testing results.",
        "source": "White House",
        "body": [
          "Target: Model developers whose training computing power exceeds the threshold This is one of the most watched changes in the policy and regulatory field on 2026-06-02 surrounding the \"U.S. Updated AI Executive Order\".",
          "Content: Red team reports, abuse mitigation measures, version change notifications. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Impact: API providers may require customer usage statements. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Enterprises: You need to ask for the model security white paper when purchasing. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Target: Model developers whose training computing power exceeds the threshold",
          "Content: Red Team Reports, Abuse Mitigation Measures, Version Change Notifications",
          "Impact: API providers may require customer usage statements",
          "Enterprise: You need to ask for the model security white paper when purchasing"
        ],
        "tags": [
          "美国",
          "安全",
          "监管"
        ]
      },
      {
        "id": "2026-06-01-uk-ai-copyright",
        "title": "UK releases AI copyright practice guide: training data transparency recommendations",
        "summary": "The IPO guidance recommends that model companies disclose the categories of training data sources and provide best practices for opt-out mechanisms for rights holders.",
        "source": "UK IPO",
        "body": [
          "Training: Encourage disclosure of data lists and license status This is one of the most watched changes in the policy regulatory field on 2026-06-01 surrounding the \"UK Publishes AI Copyright Practice Guidelines\".",
          "Generated products: Copyright identification of AI-assisted works is still a case-by-case analysis. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Platform: The host should establish a complaint and removal process. In terms of business and compliance, it is recommended to simultaneously check data residency, log retention and user notification obligations, especially when the product is targeted at cross-border or multi-regional users.",
          "Creators: Keeping evidence of the creative process helps protect rights. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Training: Encourage disclosure of data inventories and license status",
          "Generated products: Copyright identification of AI-assisted works is still a case-by-case analysis",
          "Platform: The host should establish a complaint and removal process",
          "Creators: Keeping evidence of the creative process helps protect rights"
        ],
        "tags": [
          "英国",
          "版权",
          "AI"
        ]
      },
      {
        "id": "2026-05-31-cn-algorithm-filing",
        "title": "Domestic deep synthesis algorithm registration adds new \"interactive question and answer\" subcategory",
        "summary": "The Cyberspace Administration of China has updated the registration guide. Interactive large model applications need to supplement the training data source description and security assessment report template.",
        "source": "CAC",
        "body": [
          "Target: Conversational generation applications for the public This is one of the most watched changes in the policy supervision field on 2026-05-31 around \"the new \"interactive question and answer\" subcategory for domestic deep synthesis algorithm registration\".",
          "Materials: security assessment, identification plan, emergency response plan. Technical and product teams need to evaluate integration costs, permission changes and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Cycle: Major version upgrades may require change filing. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Recommendation: Legal and algorithm teams review materials simultaneously. For AI learners, this can be used to update personal tool maps and pitfall lists, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Target: Conversational generation applications for the public",
          "Materials: safety assessment, marking plan, emergency response plan",
          "Cycle: Major version upgrades may require change filing",
          "Suggestion: Legal and algorithm teams review materials simultaneously"
        ],
        "tags": [
          "中国",
          "备案",
          "合规"
        ]
      },
      {
        "id": "2026-05-30-sg-model-governance",
        "title": "Singapore Model AI Governance Framework 3.0 released",
        "summary": "IMDA updates generative AI governance framework to emphasize supply chain transparency with optional certification from third-party reviews.",
        "source": "IMDA Singapore",
        "body": [
          "Framework: covering the three-party responsibilities of development, deployment, and procurement. This is one of the most watched changes in the policy supervision field surrounding the \"Singapore Model AI Governance Framework 3.0 Release\" on 2026-05-30.",
          "Certification: The voluntary third-party evaluation label pilot is launched. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Data: Legal basis needs to be recorded for cross-border transmission. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Enterprise: Asia-Pacific headquarters often chooses Singapore as a compliance hub. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Framework: covering the three-party responsibilities of development, deployment and procurement",
          "Certification: Voluntary third-party evaluation label pilot launched",
          "Data: cross-border transmission needs to record legal basis",
          "Enterprise: Asia-Pacific headquarters often choose Singapore as compliance hub"
        ],
        "tags": [
          "新加坡",
          "治理",
          "亚太"
        ]
      },
      {
        "id": "2026-05-29-india-ai-safety",
        "title": "India establishes AI Safety Alliance: Open source model abuse monitoring pilot",
        "summary": "The multi-sector alliance will establish a reporting platform and model abuse case library, and encourage local clouds to provide secure API gateways.",
        "source": "MeitY India",
        "body": [
          "Monitoring: Focus on deep forgery and fraud script generation This is one of the most watched changes in the policy and regulatory field on 2026-05-29 surrounding \"India's establishment of AI Security Alliance\".",
          "Gateway: Cloud vendors can optionally install prompt words and output filtering. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Open source: Emphasis on community collaboration to publish abuse fingerprints. In terms of business and compliance, it is recommended to simultaneously check data residency, log retention, and user notification obligations, especially when the product is targeted at cross-border or multi-regional users.",
          "Search Skill name, industry, usage, applicable software..."
        ],
        "highlights": [
          "Monitoring: Focus on deepfakes and fraud script generation",
          "Gateway: Cloud vendors can optionally install prompt words and output filtering",
          "Open Source: Emphasis on community collaboration to publish abuse fingerprints",
          "Going overseas: Localized filtering needs to be evaluated for the Indian market"
        ],
        "tags": [
          "印度",
          "安全",
          "开源"
        ]
      },
      {
        "id": "2026-05-28-japan-ai-promotion",
        "title": "Implementation of Japan’s “AI Promotion Law”: Paying equal attention to innovation and safety",
        "summary": "The law establishes the AI ​​Strategy Headquarters, requires guidance on high-risk areas, and ensures a friendly environment for research and open source.",
        "source": "日本内阁府",
        "body": [
          "Governance: Scenario-based risk grading, no blanket prohibition. This is one of the most watched changes in the policy supervision field on 2026-05-28 surrounding the \"implementation of Japan's \"AI Promotion Law\"\".",
          "Industry: Robotics and manufacturing receive special subsidies. Technology and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Copyright: Discuss training data in conjunction with the Ministry of Culture. In terms of business and compliance, it is recommended to simultaneously check data residency, log retention, and user notification obligations, especially when the product is targeted at cross-border or multi-regional users.",
          "Foreign companies: Companies in Japan need to pay attention to the obligations of local representatives. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Governance: risk classification based on scenarios, no blanket prohibition",
          "Industry: Robotics and manufacturing receive special subsidies",
          "Copyright: Discussion of training data in collaboration with the Agency for Cultural Affairs",
          "Foreign companies: companies in Japan need to pay attention to the obligations of local representatives"
        ],
        "tags": [
          "日本",
          "立法",
          "亚太"
        ]
      },
      {
        "id": "2026-05-27-brazil-lgpd-ai",
        "title": "Brazil LGPD Draft Amendment: Automated Decision-Making Requires Right to Explanation",
        "summary": "The draft requires automated decisions that have legal or similar impacts on users to be provided with concise explanations and a manual review application portal.",
        "source": "Brazil Senate",
        "body": [
          "Right of interpretation: Users can request an explanation of the main logic and influencing factors. This is one of the most watched changes in the policy supervision field on 2026-05-27 surrounding the \"Brazilian LGPD Draft Amendment\".",
          "Review: Manual appeal channels and time limits need to be provided. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Penalty: Connect with the LGPD fine framework. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Product: Priority renovation of credit/recruitment automation functions. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Right of explanation: Users can request an explanation of the main logic and influencing factors",
          "Review: Manual appeal channel and time limit need to be provided",
          "Penalties: Alignment with the LGPD Penalties Framework",
          "Product: Credit/Recruitment Automation Function Priority Transformation"
        ],
        "tags": [
          "巴西",
          "隐私",
          "LATAM"
        ]
      },
      {
        "id": "2026-05-26-o3-reasoning",
        "title": "OpenAI o3 paper disclosure: Verifiable reasoning chain improves mathematics Olympiad accuracy",
        "summary": "The paper shows that o3 reaches 96% in AIME 2025 with a search + validator architecture, and analyzes failure cases from symbol ambiguity.",
        "source": "arXiv",
        "body": [
          "Method: Generate multiple reasoning chains and filter them by the verifier. This is one of the most watched changes surrounding the \"OpenAI o3 paper disclosure\" in the field of research breakthroughs on 2026-05-26.",
          "Cost: High accuracy comes with 10×+ token overhead. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Enlightenment: \"Small model drafting + large model verification\" can be used in the production environment. In terms of business and compliance, it is recommended to check data residency, log retention, and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Education: Suitable for Mathematical Olympiad tutoring but need to prevent direct leakage of questions. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Method: Generate multiple inference chains and filter them by the validator",
          "Manually fill in data and references",
          "Enlightenment: \"Small model rough calculation + large model verification\" can be used in the production environment",
          "Education: Suitable for Mathematical Olympiad tutoring but need to prevent direct disclosure of questions"
        ],
        "tags": [
          "o3",
          "推理",
          "数学"
        ]
      },
      {
        "id": "2026-05-25-world-model-robotics",
        "title": "Google DeepMind releases Genie 3 world model: robot simulation training",
        "summary": "Genie 3 can generate interactive 3D scenes from a single image for simulation data augmentation for robot policy learning.",
        "source": "DeepMind",
        "body": [
          "Capability: Minute-level interaction scene consistency improvement This is one of the most watched changes in the 2026-05-25 research breakthrough field surrounding \"Google DeepMind releases Genie 3 world model\".",
          "Application: Reduce real robot collection costs. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "A reviewable outline of a first draft proposal.",
          "Tracking: Embodied intelligent entrepreneurship should focus on simulation-real transfer. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Capability: Improved consistency of interaction scenarios at the minute level",
          "Application: Reduce the cost of real robot collection",
          "Limitations: Physical accuracy is still not enough to replace high-fidelity engines",
          "Tracking: Embodied intelligent entrepreneurship should focus on simulation-real migration"
        ],
        "tags": [
          "世界模型",
          "机器人",
          "仿真"
        ]
      },
      {
        "id": "2026-05-24-llm-memory-compress",
        "title": "MIT proposes LLM long-term memory compression: 1/8 context preservation 95% recall",
        "summary": "The new method distills historical dialogue into retrievable memory vectors, achieving near full-context performance on LongMemEval.",
        "source": "MIT CSAIL",
        "body": [
          "Idea: Hierarchical summary + vector index replace violent spelling of context. This is one of the most watched changes in the 2026-05-24 research breakthrough field surrounding \"MIT proposes LLM long-term memory compression\".",
          "Benefits: Reduce long-session API costs. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Risk: Loss of details in the summary may lead to contractual errors. In terms of business and compliance, it is recommended to check data residency, log retention, and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Engineering: Can be combined with existing vector libraries for implementation. For AI learners, this can be used to update personal tool maps and pitfall lists, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Idea: Hierarchical summary + vector index replace violent spelling of context",
          "Benefit: Reduced long-session API costs",
          "Risk: Missing details in the summary may lead to contract errors",
          "Engineering: Can be combined with existing vector libraries for implementation"
        ],
        "tags": [
          "记忆",
          "RAG",
          "上下文"
        ]
      },
      {
        "id": "2026-05-23-mm-math-reasoning",
        "title": "Multimodal mathematical reasoning benchmark MM-MATH released: chart questions are the biggest shortcoming",
        "summary": "The new benchmark includes statistical graphs and geometric drawing questions. The accuracy of the strongest model on chart questions is only 62%, exposing the visual-symbol gap.",
        "source": "MM-MATH Paper",
        "body": [
          "Discovery: The strength of text questions is not equal to the strength of chart questions. This is one of the most watched changes in the 2026-05-23 research breakthrough field surrounding the \"Multimodal Mathematical Reasoning Benchmark MM-MATH Release\".",
          "Data: High-quality chart-inference paired training set is required. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Application: Financial statement Q&A needs to be launched with caution. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Evaluation: Enterprises should build their own domain chart test set. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Discovery: Strength in text questions is not equal to strength in chart questions",
          "Data: Need high quality graphs - inference paired training set",
          "Application: Financial statement Q&A needs to be launched online with caution",
          "Evaluation: Enterprises should build their own domain chart test set"
        ],
        "tags": [
          "多模态",
          "数学",
          "评测"
        ]
      },
      {
        "id": "2026-05-22-alphafold-update",
        "title": "AlphaFold 4 Preview: Protein-ligand complex structure prediction",
        "summary": "DeepMind previews AlphaFold 4’s improved prediction accuracy of drug molecule binding sites, and pharmaceutical companies expand pilot cooperation.",
        "source": "DeepMind",
        "body": [
          "Breakthrough: Improved correlation of binding free energy ranking This is one of the most watched changes surrounding the \"AlphaFold 4 Preview\" in the field of 2026-05-22 research breakthroughs.",
          "Open: Academic non-commercial license, pharmaceutical companies need commercial agreement. Technical and product teams need to evaluate integration costs, permission changes and rollback plans accordingly to avoid switching production traffic in full without pilot verification.",
          "Computing power: single-complex inference in minutes. In terms of business and compliance, it is recommended to check data residency, log retention, and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Crossover: The demand for biology + AI composite talents is rising. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Breakthrough: Improved correlation of binding free energy rankings",
          "Open: academic non-commercial license, pharmaceutical company commercial agreement required",
          "Computing power: single compound inference in minutes",
          "Crossover: Biology + AI, the demand for composite talents is rising"
        ],
        "tags": [
          "生物",
          "AlphaFold",
          "科研"
        ]
      },
      {
        "id": "2026-05-21-synthetic-data-train",
        "title": "Meta research: High-quality synthetic data can replace 40% of manual annotation",
        "summary": "The paper shows that the synthetic data generated + filtered by the teacher model is comparable to manual annotation in classification and extraction tasks, but inference questions are prone to overfitting.",
        "source": "Meta AI Research",
        "body": [
          "Method: Teacher generation → Quality model filtering → Course learning This is one of the most watched changes surrounding \"Meta research\" in the field of research breakthroughs on 2026-05-21.",
          "Applicable to: Classification, NER, and format conversion will benefit most. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Risk: Reasoning/mathematics is prone to model collapse. In terms of business and compliance, it is recommended to check data residency, log retention and user notification obligations simultaneously, especially when the product is targeted at cross-border or multi-regional users.",
          "Practice: Enterprise fine-tuning can be mixed with 30% synthetic start. For AI learners, this can be used to update the personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Method: Teacher generation→Quality model filtering→Course learning",
          "Applicable: Classification, NER, format conversion will benefit most",
          "Risk: Reasoning/mathematical prone to model collapse",
          "Practice: Enterprise Fine-tuning Mixable 30% Synthetic Start"
        ],
        "tags": [
          "合成数据",
          "训练",
          "成本"
        ]
      },
      {
        "id": "2026-05-20-sparse-attn-2m",
        "title": "Sparse attention achieves 2 million token context experimental verification",
        "summary": "Several laboratories have announced a sparse + sliding window hybrid architecture, achieving usable accuracy in the 2M token book question and answer experiment.",
        "source": "arXiv",
        "body": [
          "Architecture: Block Sparse + Global Anchor Token This is one of the most watched changes in the 2026-05-20 research breakthrough area surrounding \"Sparse Attention Achieves 2 Million Token Context Experimental Verification\".",
          "Cost: The memory is reduced by 70%, but the implementation is complicated. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Product: Cloud API is not yet generally open. In terms of 2M business and compliance, it is recommended to simultaneously check data residency, log retention and user notification obligations, especially when the product is targeted at cross-border or multi-regional users.",
          "RAG: Extreme long article scenarios may be a choice between RAG and RAG. For AI learners, they can use this to update their personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Architecture: block sparse + global anchor token",
          "Cost: Memory reduced by 70% but implementation is complex",
          "Product: Cloud API is not generally open yet 2M",
          "RAG: Extreme long text scenarios may be a choice between RAG and RAG"
        ],
        "tags": [
          "长上下文",
          "架构",
          "研究"
        ]
      },
      {
        "id": "2026-05-19-self-evolving-agents",
        "title": "Self-evolving Agent paper attracts hot discussion: tool library automatically expands risk-controlled experiments",
        "summary": "Agent teaches itself new tool scripts in the sandbox, with a task completion rate of +18%, but there are also cases of unauthorized network requests.",
        "source": "AgentEvo Paper",
        "body": [
          "Result: The automatic expansion tool is effective but requires a sandbox. This is one of the most watched changes in the field of research breakthroughs on 2026-05-19 surrounding the \"Self-Evolving Agent Paper Sparking Hot Discussions\".",
          "Security: Network whitelisting and code auditing are required. Technical and product teams need to evaluate integration costs, permission changes, and rollback plans accordingly to avoid switching all production traffic without pilot verification.",
          "Industry: \"Self-learning\" marketing needs to lower expectations. In terms of business and compliance, it is recommended to simultaneously check data residency, log retention, and user notification obligations, especially when the product is targeted at cross-border or multi-regional users.",
          "Recommendation: Only registered tool sets are allowed for production. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week."
        ],
        "highlights": [
          "Result: Autoscaling tool works but requires sandboxing",
          "Security: Network whitelisting and code auditing are required",
          "Industry: \"Self-learning\" marketing needs to lower expectations",
          "Recommendation: Production only allows registered toolsets"
        ],
        "tags": [
          "Agent",
          "自进化",
          "安全"
        ]
      }
    ]
  },
  "latestTutorials": {
    "meta": {
      "lead": "Daily hands-on tutorials for the latest tools and workflows. Step-by-step cases include copy-ready prompts.",
      "updatedLabel": "Last updated: {date}",
      "countShown": "Showing {visible} / {total}",
      "emptyHint": "No tutorials in this category. Try another tag.",
      "newBadge": "New",
      "illustratedBadge": "Step-by-step",
      "backToList": "Back to tutorials"
    },
    "categories": {
      "全部": "All",
      "编程开发": "Programming development",
      "提示词": "prompt word",
      "图像视频": "image video",
      "自动化": "automation",
      "办公效率": "Office efficiency"
    },
    "items": [
      {
        "id": "2026-07-04-cursor-web-calculator",
        "title": "Step by step: Use AI to create a web calculator",
        "desc": "From zero to one, use Cursor Agent to generate an HTML calculator that can be run by double-clicking. The following diagram illustrates each step: building a project, writing prompt words, checking code, browser preview, and testing and repairing.",
        "illustratedSteps": [
          {
            "title": "Create a new empty project folder",
            "text": "Create the calc-demo folder on the desktop and open it with Cursor's File → Open Folder. Make sure the project is empty so that AI can generate a single file from scratch.",
            "image": "assets/tutorials/calc-step-1-folder.svg",
            "alt": "在 Cursor 中打开空的 calc-demo 项目文件夹"
          },
          {
            "title": "Open Composer and paste the prompt word",
            "text": "Press Cmd+I (Mac) or Ctrl+I (Windows) to open the Agent panel, paste the prompt words at the bottom of the tutorial, and click Generate. AI will create a single file index.html.",
            "image": "assets/tutorials/calc-step-2-composer.svg",
            "alt": "在 Cursor Composer 中输入计算器提示词",
            "caption": "提示词越具体，生成结果越接近预期。可先复制教程底部模板再微调。"
          },
          {
            "title": "Check the generated code structure",
            "text": "Confirm that index.html appears in the left explorer. Open the file and check whether it contains HTML structure, CSS style and JavaScript calculation logic.",
            "image": "assets/tutorials/calc-step-3-code.svg",
            "alt": "检查 AI 生成的 index.html 代码"
          },
          {
            "title": "Browser preview calculator",
            "text": "Right-click index.html → Reveal in Finder / Reveal in folder, double-click to open in Chrome or Safari. Live preview can also be extended with Cursor Live Server.",
            "image": "assets/tutorials/calc-step-4-preview.svg",
            "alt": "在浏览器中预览网页计算器"
          },
          {
            "title": "Test item by item and ask for fixes",
            "text": "Test the addition, subtraction, multiplication, division and clear buttons. If the button does not respond or there is an error in the continuous operator, select the relevant code and ask the AI: \"The button does not respond when clicked, please fix it.\" It takes 1–2 iterations to stabilize.",
            "image": "assets/tutorials/calc-step-5-test.svg",
            "alt": "测试计算器并追问 AI 修复问题"
          }
        ],
        "prompt": "Please help me create a simple and beautiful calculator web page using HTML + CSS + JavaScript:\n\nFunctional requirements:\n- Support addition, subtraction, multiplication, division and clearing (C)\n- The display shows input and results in real time\n- Prevent common logic errors such as continuous pressing of operators\n-Support keyboard numeric key input (optional bonus)\n\nDesign requirements:\n- Dark theme, rounded buttons, slight feedback on hover\n- Can also be used normally on mobile devices\n\nDelivery requirements:\n- Output a single index.html file, which can be opened directly in the browser by double-clicking it.\n-Code plus Chinese comments\n-Finally tell me how to run and test",
        "result": "Get a web calculator that can be opened by double-clicking, can complete four arithmetic operations, and master the AI ​​programming closed loop of \"Describe requirements → Generate → Preview → Feedback and repair\".",
        "tips": "There’s no need to strive for perfect UI the first time. Run through the logic first, and then let AI help you \"change the button to a circle and the main color to cyan.\""
      },
      {
        "id": "2026-07-04-cursor-local-matting",
        "title": "Step by step: Use AI to create a local cutout tool",
        "desc": "Do not rely on online API, use Cursor to generate Flask + rembg local cutout webpage: drag and drop to upload images, local AI to remove background, download transparent PNG. Suitable for e-commerce pictures and ID photo processing.",
        "illustratedSteps": [
          {
            "title": "Create project and install dependencies",
            "text": "Create a new bg-remove folder and open it with Cursor. Create a virtual environment in the terminal and install rembg, flask, pillow: pip install rembg flask pillow. Running rembg for the first time will automatically download the local model.",
            "image": "assets/tutorials/matting-step-1-setup.svg",
            "alt": "创建 bg-remove 项目并安装 Python 依赖"
          },
          {
            "title": "Describe the complete tool in natural language",
            "text": "Paste the prompt words at the bottom of the tutorial into the Cursor Agent to generate the Flask backend + drag-and-drop upload frontend + rembg local inference. It is clearly emphasized that \"images are not uploaded to the cloud, and are all processed locally.\"",
            "image": "assets/tutorials/matting-step-2-prompt.svg",
            "alt": "向 Cursor 描述本地抠图工具需求",
            "caption": "若生成代码报错，把终端报错信息贴回对话，AI 会逐行修复。"
          },
          {
            "title": "Start the service and open the upload page",
            "text": "The terminal runs python app.py, and the browser accesses http://127.0.0.1:5000. The page should display a drag-and-drop upload area, supporting JPG/PNG formats.",
            "image": "assets/tutorials/matting-step-3-upload.svg",
            "alt": "打开本地抠图工具上传页面"
          },
          {
            "title": "Upload pictures and local AI will automatically cut them out",
            "text": "Drag in a picture of a person or product and click \"Start Cutting\". rembg infers on local CPU/GPU and typically completes in 2–8 seconds. A progress log will be displayed on the terminal during processing.",
            "image": "assets/tutorials/matting-step-4-process.svg",
            "alt": "本地 rembg 模型处理抠图"
          },
          {
            "title": "Preview, compare and download PNG",
            "text": "Compare the original image and the cutout result from the left and right sides of the page, and click \"Download Transparent Background PNG\" after confirming that you are satisfied with the edges. The file can be used directly in PPT, Figma or e-commerce details page.",
            "image": "assets/tutorials/matting-step-5-download.svg",
            "alt": "预览抠图结果并下载 PNG"
          }
        ],
        "prompt": "Please help me make a locally running cutout tool (Python + Flask + rembg):\n\nFunction:\n1. The webpage supports dragging or clicking to upload JPG/PNG\n2. The backend uses rembg to remove the background locally without uploading any third-party API.\n3. Return the transparent background PNG, and the web page displays the original image/result comparison\n4. Provide a download button to save result.png\n\nProject structure:\n- app.py (Flask main program)\n- static/index.html (front-end page, dark and simple UI)\n- uploads/ temporary directory\n-requirements.txt\n\nRequirements:\n-Code plus Chinese comments\n- Give the startup command and access address\n- Handle common errors (file too large, format not supported)",
        "result": "A local cutout web tool running on localhost. Drag and drop to upload to get a transparent background PNG, and the entire process is processed offline.",
        "tips": "The effect of portrait cutout is usually better than that of complex hair product images. If the edges are jagged, you can ask the AI: \"Add edge feathering parameters\" or switch to the isnet model."
      },
      {
        "id": "2026-07-02-cursor-plan-mode",
        "title": "Use Cursor Plan mode to break down requirements and generate PR-level changes",
        "desc": "Experience the new Plan mode of Cursor: first let the Agent output the implementation plan and file list, and then execute it step by step. It is suitable for medium and large-scale function development without losing control.",
        "steps": [
          "Open Cursor and press Cmd+I in the project to enter Agent",
          "Input requirements: \"Add dark mode switching to the learning site, including localStorage persistence\"",
          "Select Plan mode to let the Agent output steps, involved files and risk points first",
          "After confirming the plan item by item, click Execute and observe the diff preview.",
          "Ask questions about the selected code that you are not satisfied with: \"Move the switch button to the right side of the header\"",
          "Run local preview and confirm that the status is maintained after theme switching and refresh"
        ],
        "prompt": "Please implement dark/light theme switching for static sites:\n1. Use CSS variables to define color matching, and data-theme is hung on html\n2. A circular toggle button is added to the right side of the Header, and the icon uses the sun and moon symbols.\n3. Choose to write to localStorage and keep it after refreshing.\n4. First output the Plan: file list, steps, potential risks, and then change the code after I confirm it.",
        "result": "Get a switchable learning site and understand the Plan → Execute Agent workflow.",
        "tips": "The core of Plan mode is \"align first and then start\", which can significantly reduce the confusion caused by AI changing too many files at once."
      },
      {
        "id": "2026-07-02-claude-projects-briefing",
        "title": "Use Claude Projects to build an automatic compilation workspace for \"AI Industry Daily\"",
        "desc": "Put the information links and summary templates into the Project knowledge base, and paste new links every day to generate a unified format of industry daily reports, suitable for sharing in morning team meetings.",
        "steps": [
          "Log in to claude.ai and create a new Project \"AI Daily\"",
          "Write the output format in Project Instructions: title, three key points, one depth, and action recommendations",
          "Upload daily reference reports for the past 7 days as style samples (optional)",
          "Paste 5–8 news links and one-sentence summaries into conversations every day",
          "Let Claude deduplicate, sort and generate Markdown daily reports",
          "Copy to Notion or Feishu document for publishing"
        ],
        "prompt": "Today’s AI Industry Daily (Chinese) is generated based on the following information links and summaries:\n\nFormat:\n## {Date} AI News\n### Headlines\n### Three pieces of news (within 80 words each)\n### Trends worth following\n### Today’s Actionable Advice (Learner’s Perspective)\n\nRequirements: Remove duplication, be objective, mark sources, and do not make up information that is not provided.",
        "result": "A unified, publish-ready document of daily AI news.",
        "tips": "Project Instructions are written once and can be reused; the source link must be pasted with the original text to avoid incorrect details in the model."
      },
      {
        "id": "2026-07-01-gemini-deep-research",
        "title": "Gemini Deep Research conducts competitive product research reports",
        "desc": "Use Gemini's in-depth research function to automatically browse multiple sources and generate competitive product analysis with references, which is suitable for product and market students to quickly publish.",
        "steps": [
          "Open gemini.google.com and select Deep Research",
          "Enter the research topic: \"Comparison of competing AI programming assistants in 2026: Cursor, Windsurf, Claude Code\"",
          "Wait for Agent to automatically search and read. During this period, you can add: \"Focus on comparing pricing and Chinese support\"",
          "Export to Google Doc or copy to Markdown when research is complete",
          "Manually check key price and function descriptions, and delete outdated references",
          "Organize conclusions into a decision memo shared by the team"
        ],
        "prompt": "Please do a 2026 AI programming assistant competitive product research: Cursor, Windsurf, Claude Code, GitHub Copilot.\nComparison dimensions: pricing, IDE support, Agent capabilities, Chinese experience, and enterprise compliance.\nOutput: Executive summary, comparison table, selection recommendations (individual learner/small team).\nThe date of the source of the information must be noted.",
        "result": "Structured competitive research report with citations.",
        "tips": "It is normal for Deep Research to take 5–15 minutes; be sure to manually check volatile information such as price pages before publishing."
      },
      {
        "id": "2026-07-01-n8n-ai-newsletter",
        "title": "n8n workflow: RSS aggregation → AI summary → email newsletter",
        "desc": "Build a zero-code automated pipeline to capture AI blog RSS regularly every day, use OpenAI nodes to generate summaries and send them to emails.",
        "steps": [
          "Register n8n Cloud or local Docker to start n8n",
          "Create a new Workflow and add Schedule Trigger (8:00 every day)",
          "Add RSS Read node and fill in OpenAI, Anthropic, Google AI official blog RSS",
          "Merge node merges entries, Filter removes duplicate processed GUIDs",
          "OpenAI node: generate 200-word Chinese news from title + abstract",
          "Gmail/SMTP node sends \"AI Morning News\" email to itself",
          "Activate the workflow, check the email performance the next day and fine-tune the prompt words"
        ],
        "prompt": "You are the AI ​​Industry Editor. Output today's morning news based on the following RSS entry (JSON):\n1. Select the 5 most important news (each ≤80 words, with original text link)\n2. A trend comment on \"Learners are worth paying attention to\" (≤120 words)\nTone: concise, objective, Chinese.",
        "result": "The AI ​​industry summary briefing, delivered automatically to your inbox daily.",
        "tips": "Use 2 RSS feeds to test run first, and then expand; pay attention to API fees and email sending frequency limits."
      },
      {
        "id": "2026-06-30-midjourney-style-ref",
        "title": "Midjourney style reference (--sref) for series illustrations",
        "desc": "Use a reference picture to lock the visual style, batch generate a series of blog or course cover pictures, and keep the brand tone consistent.",
        "steps": [
          "Prepare a brand reference image (or create a satisfactory main visual first)",
          "Upload the reference image on Midjourney and copy the image link",
          "Use --sref {url} --sw 80 to generate images with the same style and different themes",
          "Add --ar 16:9 and brand main color keywords to the tutorial series",
          "After batch generating 4 pictures, U enlarge the selected version.",
          "Export for site banner or official account cover"
        ],
        "prompt": "futuristic AI learning dashboard UI, teal and dark navy palette, soft glow, minimal typography, abstract neural network motif --ar 16:9 --sref {your reference image link} --sw 75 --v 6",
        "result": "A set of 16:9 technology-style images with a unified visual style.",
        "tips": "--sw Control style weight: 60–100 Commonly used; too high will cause the picture to almost copy the composition of the reference picture."
      },
      {
        "id": "2026-06-30-dify-knowledge-bot",
        "title": "Dify knowledge base Q&A robot accesses study notes",
        "desc": "Import Markdown study notes into the Dify knowledge base and publish an exclusive teaching assistant Bot that can answer \"How do you understand a certain term?\"",
        "steps": [
          "Log in to Dify and create a \"Knowledge Base\" application",
          "Upload Markdown notes or sync Notion export files",
          "Set segmentation strategy: segment by title, reserve 500–800 blocks",
          "Create a conversation application, associate the knowledge base, and enable reference display",
          "System prompt word limit: only answer based on the knowledge base, if you don’t know, just say don’t know.",
          "Publish a Web App or embed iframe test on a learning site"
        ],
        "prompt": "You are an AI learning assistant. Answer based only on knowledge base content, quoting excerpts from the original text.\nIf there is no relevant content in the knowledge base, clearly say \"not covered in the notes\" and suggest which chapter to consult.\nAnswer structure: one sentence conclusion + point explanation + keywords for further reading.",
        "result": "An exclusive Q&A bot that can cite the source of notes.",
        "tips": "Remember to re-index in Dify after updating your notes; emphasizing \"no fabrication\" in the prompt can reduce hallucinations."
      },
      {
        "id": "2026-06-29-chatgpt-custom-gpt-tutorial",
        "title": "Do a \"prompt word review\" Custom GPT in 10 minutes",
        "desc": "Create a dedicated GPT for your team: Automatically check the quality of prompt words according to the RTFC structure and give rewriting suggestions, suitable for learning and content teams.",
        "steps": [
          "Revenue: Personal subscription + Teams two-wheel drive, Teams is growing faster",
          "Name: Prompt Review Coach; Description Enter the prompt word to get review comments",
          "Instructions write review dimensions: role, task, format, constraints, testability",
          "Upload 2–3 examples of good/bad prompt words for reference",
          "Turn off web browsing and rely only on Instructions + Examples",
          "Test a few prompt words and publish the Workspace link for students to use"
        ],
        "prompt": "You are a Prompt Word Project reviewer. The user will submit a prompt, please RTFC (Role-Task-Format-Constraints) rating 1–5 and give:\n1. Advantages\n2. Question list\n3. Rewritten version of the prompt word\n4. A test input that can be used to verify the effect\nTone: Coaching, Chinese, concise.",
        "result": "A shareable Custom GPT, specifically for reviewing and rewriting prompt words.",
        "tips": "The quality of examples determines the upper limit of GPT behavior; good cases in the Prompt example library of this site can be exported as reference."
      },
      {
        "id": "2026-06-29-openclaw-daily-digest",
        "title": "OpenClaw scheduled task: grab Hacker News AI posts and push them",
        "desc": "Use OpenClaw to configure cron tasks, filter AI-related hot posts on Hacker News, and generate Chinese summaries to push to Telegram.",
        "steps": [
          "Install and log in to OpenClaw CLI to complete channel authorization",
          "Create a new cron job: executed every 6 hours",
          "Task script: grab the top 10 AI keyword posts in HN Algolia API",
          "Call the model to generate Chinese title translation + two-sentence summary",
          "Push to personal channel via Telegram Bot",
          "Run a manual test to confirm format and frequency"
        ],
        "prompt": "From the following list of Hacker News posts, select the 5 items most relevant to AI/LLM/Agent and output the Chinese briefing:\n- Chinese title\n- Two sentence summary\n- Discussion highlights (summary of comments and views)\n- Original link\nDon’t make up content that doesn’t exist in the post.",
        "result": "The Telegram channel regularly receives selected AI hot posts in Chinese.",
        "tips": "Do a low-frequency (once a day) test run first, and then encrypt after confirming that it is stable; pay attention to the HN API request frequency limit."
      },
      {
        "id": "2026-06-28-windsurf-refactor",
        "title": "Windsurf refactors legacy functions into TypeScript strict mode with one click",
        "desc": "Select legacy JS functions and let Cascade complete type completion, split side effects, and generate vitest tests.",
        "steps": [
          "Open the project containing legacy.js with Windsurf",
          "Select the objective function and open Cascade chat",
          "Requirements: Convert to TS, extract pure functions, and fill in JSDoc",
          "Let the Agent create .test.ts with the same name and run npm test",
          "If the test fails, paste the error report back to the dialog iteration",
          "Use git diff to review type assertions before submitting a PR"
        ],
        "prompt": "Please refactor the selected JavaScript functions to TypeScript strict mode:\n1. Extract the pure function and put the side effects in the outer layer\n2. Complete input and output types, prohibit any\n3. Add vitest single test coverage boundary case\n4. Keep the external API unchanged\nGive Plan first, confirm and then change the code.",
        "result": "Get type-safe, tested refactored versions and understand the AI-assisted refactoring process.",
        "tips": "Only refactor one function at a time to prevent the Agent from losing control when modifying the entire file at once."
      },
      {
        "id": "2026-06-27-copilot-pr-review",
        "title": "Use Copilot to make PR code review checklist",
        "desc": "Comment @copilot on GitHub PRs to generate security, performance, and readability reviews.",
        "steps": [
          "Open a Pull Request pending review",
          "Type @copilot /review in the comment to trigger the review",
          "Read generated severity grouping comments",
          "Reply \"false positive: reason\" to false positive items",
          "For real problems, let the author fix them or you can directly suggest them.",
          "Confirm CI and review items are cleared before merging"
        ],
        "prompt": "Please review this PR, output by severity level:\n- 🔴 Security/Data Loss Risk\n- 🟡Performance and maintainability\n- 🟢 Style and naming\nEach file is attached with a line number and repair suggestions.",
        "result": "Structured PR review comments to reduce misses.",
        "tips": "Posting the team coding specifications into the repository copilot-instructions.md will work better."
      },
      {
        "id": "2026-06-26-replit-rapid-api",
        "title": "Replit Agent 30 minutes to build to-do API + Swagger",
        "desc": "Generate Express CRUD APIs in natural language, automatically accompanied by Swagger UI documentation pages.",
        "steps": [
          "Create a new Replit Node.js template",
          "Open Agent and describe Todo API requirements",
          "Waiting to generate index.js, routes, swagger.json",
          "Click Run and visit /docs to view Swagger",
          "Test CRUD with the built-in HTTP client",
          "Deploy to Replit public URL share"
        ],
        "prompt": "Please use Express to create a Todo REST API:\n- GET/POST/DELETE /todos\n- Just store it in memory\n- Integrate swagger-ui in /docs\n- Contains input validation and error handling\nGive operating instructions.",
        "result": "Online accessible API and interactive documentation.",
        "tips": "Just add a dialogue to change the memory storage to Replit Database before going online."
      },
      {
        "id": "2026-06-25-v0-landing-section",
        "title": "v0 generates React landing page Hero block",
        "desc": "Describe the brand color and copy, let v0 output shadcn/ui Hero, which can be copied to the Next.js project.",
        "steps": [
          "Open v0.dev and create a new build",
          "Enter your brand colors, title, sub copy and CTA",
          "Select shadcn + Tailwind style",
          "Preview responsive after generation",
          "Click Code to copy the component to Next.js app/",
          "Local npm run dev verification"
        ],
        "prompt": "Generate an AI learning platform Hero:\n- Dark background with cyan accent color\n- Title: The best path to mastering AI\n- Double CTA: Start learning / browse tools\n- shadcn/ui + Tailwind, mobile friendly",
        "result": "Paste-ready React Hero components.",
        "tips": "After generation, fine-tune v0 to \"reduce shadows and increase title font size\" to be more refined."
      },
      {
        "id": "2026-06-24-claude-code-test",
        "title": "Claude Code completes integration tests for existing modules",
        "desc": "Use Claude Code in the terminal to analyze coverage holes, generate integration tests and run CI.",
        "steps": [
          "Start claude at the project root",
          "Write an agenda before the meeting, post key points during the meeting, and use Notion AI to generate minutes and tasks.",
          "Specify directory: add integration test for auth module",
          "Have Claude create tests/auth.int.test.ts",
          "Execute tests and fix flaky use cases",
          "Submit and observe CI green light"
        ],
        "prompt": "Analyze the coverage/lcov report and add integration tests for src/auth/:\n- Override login success/failure/lockout\n- Use supertest to adjust the HTTP layer\n- mock external mail service\nDo not change production code logic unless a bug is discovered.",
        "result": "Integrated test suites with increased coverage and stable CI.",
        "tips": "Scope creep can be avoided by explicitly saying \"just add tests and don't change the implementation.\""
      },
      {
        "id": "2026-06-23-cursor-mcp-github",
        "title": "Cursor connects to GitHub MCP: Check Issues and open PR in the conversation",
        "desc": "Configure the official GitHub MCP Server, query the warehouse issues in the Agent dialog and create a repair branch.",
        "steps": [
          "Install the latest version of Cursor and open MCP settings",
          "Add GitHub MCP Server and PAT",
          "Enable repo read/write permissions in mcp.json",
          "Dialog: List open issues with label=bug",
          "Select one to let the Agent create a repair branch",
          "After reviewing the diff, push and open a PR"
        ],
        "prompt": "Using GitHub MCP:\n1. List the open bug issues Top 5 of this repository\n2. Select #42 to analyze the root cause\n3. Create the fix/42 branch and submit the minimal fix\n4. Open a PR with reproduction steps and test instructions.",
        "result": "Complete the Issue→PR closed loop without leaving the IDE.",
        "tips": "PAT permissions are minimized and only fine-grained tokens are used."
      },
      {
        "id": "2026-06-22-bolt-new-pwa",
        "title": "Bolt.new generates offline PWA word memorization page",
        "desc": "Generate an installable PWA, including local vocabulary and daily review reminders.",
        "steps": [
          "Open bolt.new",
          "Describe PWA word card requirements and color matching",
          "Waiting for the React/Vite project to be generated",
          "Preview the Add to Home Screen process",
          "Download or sync to GitHub",
          "Real device installation and testing available offline"
        ],
        "prompt": "Make a word memorization PWA:\n- 20 words per day, turn over cards\n- Local localStorage records progress\n- Installable to home screen, available offline\n- Simple dark UI",
        "result": "Installable offline word memorization PWA.",
        "tips": "Let Bolt \"complement the service worker cache strategy\" to improve the offline experience."
      },
      {
        "id": "2026-06-21-continue-oss-model",
        "title": "Continue to configure the local Ollama model for privacy completion",
        "desc": "When the Qwen3 local model is connected to the VS Code Continue plug-in, the code cannot be uploaded to the cloud.",
        "steps": [
          "Install Ollama and pull qwen3 model",
          "Install the Continue VS Code extension",
          "config.json add ollama provider",
          "Set tab completion to the same model as chat",
          "Writing test files to experience completion delays",
          "Switch workspace rules to restrict file types"
        ],
        "prompt": "Help me write continue config:\n- chat and autocomplete using ollama qwen3\n- Enable completion only for *.ts\n- Enterprise projects are prohibited from uploading code to the cloud\nGives the complete JSON.",
        "result": "Local model-driven code completion and chat.",
        "tips": "When latency is high, a smaller quantized model is used for completion."
      },
      {
        "id": "2026-06-20-rtfc-interview",
        "title": "RTFC template to write \"simulated technical interview\" prompt words",
        "desc": "Use Role-Task-Format-Constraints to design reusable back-end interviewer prompts.",
        "steps": [
          "Create a new conversation, first write down Role: Senior Interviewer",
          "Task: Simulate a 45-minute back-end interview",
          "Format: One question and one comment in each round, final summary",
          "Constraints: It is forbidden to give complete answers directly",
          "Paste the template and test for a round",
          "Save to notes for daily practice"
        ],
        "prompt": "Role: Senior Go backend interviewer\nTask: Simulate a 45-minute interview to examine concurrency and system design\nFormat: one question at a time→waiting for answer→short comment→next question; end outputting the score sheet\nConstraints: Do not give standard answers directly; ask questions that are not what they are asked.",
        "result": "Mock interview conversations that can be used again and again.",
        "tips": "Adding \"dynamic adjustment of questions based on the difficulty of my answer\" is closer to reality."
      },
      {
        "id": "2026-06-19-claude-xml-prompt",
        "title": "Structure long prompt words with XML tags",
        "desc": "Split the background, data, and rules into <context><data><rules> to improve the stability of long tasks.",
        "steps": [
          "Prepare a customer service chat record that needs to be analyzed",
          "Paste into Claude in sections using XML tags",
          "Specify the output JSON schema in <rules>",
          "Run and verify JSON is parsable",
          "Does removing the XML contrast illusion increase?",
          "Save as Project template"
        ],
        "prompt": "<context>You are a customer service quality inspector</context>\n<data>\n{paste conversation}\n</data>\n<rules>\n1. Score 1-5 based on data only\n2. Output JSON: {tone, resolution, escalate}\n3. Fill in null if you are not sure about the field.\n</rules>",
        "result": "Stable output can parse JSON quality inspection results.",
        "tips": "Claude is more sensitive to XML boundaries than Markdown headers."
      },
      {
        "id": "2026-06-18-gemini-few-shot",
        "title": "Gemini few-shot classification: email intent recognition",
        "desc": "Give 6 example emails and labels and let the model classify the intent of new emails.",
        "steps": [
          "Collect 6 sample emails with labels",
          "Arranged by example/to be classified format",
          "Open Gemini and paste the full prompt",
          "Enter test number 7",
          "If there is an error, add a boundary example",
          "Export as team classification template"
        ],
        "prompt": "Label emails according to the example: support_billing/support_technical/sales/spam\n\nExample 1: ...\nTag: support_billing\n...\nTo be classified:\n{new email}\nOnly the tag name is output.",
        "result": "Highly accurate email intent classifier prompt words.",
        "tips": "Examples should cover confusing boundaries such as billing vs technical."
      },
      {
        "id": "2026-06-17-perplexity-system",
        "title": "Perplexity Research Tip: Enforcing Time Ranges and Source Types",
        "desc": "Writing Research Prompt Limitations 2025–2026 Sources, priority given to official documents and papers.",
        "steps": [
          "Open Perplexity Pro new thread",
          "Indicate the time window and source priority in the prompt",
          "Request output comparison table + quotation",
          "Check if the footnote is from an official source",
          "Ask about uncertain items",
          "Export PDF archive"
        ],
        "prompt": "System prompt word limit: only answer based on the knowledge base, if you don’t know, just say don’t know.",
        "result": "Traceable survey form with time constraints.",
        "tips": "Added \"Exclude secondary sources before 2024\" when old news is found to be mixed."
      },
      {
        "id": "2026-06-16-chatgpt-chain-of-density",
        "title": "Chain-of-Density Progressive Abstract Long Article",
        "desc": "Let the model start with a short summary and iterate for 5 rounds each time increasing the entity density without getting longer.",
        "steps": [
          "Paste a 3000 word article",
          "Round 1 80-word abstract requested",
          "Instructions: Add details in each subsequent round but keep the word count unchanged",
          "Record 5 rounds of summary comparisons",
          "Choose the version that best suits your poster",
          "Summary of when to use CoD"
        ],
        "prompt": "Make a Chain-of-Density summary of the following:\n- Round 1: 80 words\n- Rounds 2-5: Keep 80 words but increase entity density\nMark the \"new entity\" list in each round\n\n{article}",
        "result": "Fixed-length summaries of increasing information density.",
        "tips": "Perfect for podcast Show Notes to avoid getting too long."
      },
      {
        "id": "2026-06-15-claude-constitutional",
        "title": "Constitutional tip: Give your writing assistants hard reins",
        "desc": "Use numbered principles to limit tone, prohibited words, and sources of facts.",
        "steps": [
          "List 5 Writing Principles",
          "Write Claude Project Instructions",
          "Upload a draft that needs polishing",
          "Requires self-inspection of the constitution, article by article, and then output",
          "Check for violation of prohibited hyperbole",
          "Save Instructions for reuse by your team"
        ],
        "prompt": "Writing the Constitution:\n1. Don’t use exaggerated words such as “subversion” and “shock”\n2. The data must be marked \"based on the materials provided\"\n3. Paragraph ≤120 words\n4. Output structure: conclusion → argument → action\n5. Write “to be verified” if unsure.\nPlease polish the following and attach a constitutional self-examination form.",
        "result": "A polished draft with restrained tone and unified structure.",
        "tips": "The number of articles in the constitution should be limited to 5-8. Too many articles will reduce the compliance rate."
      },
      {
        "id": "2026-06-14-prompt-ab-test",
        "title": "A/B test two prompt words and quantitatively score them",
        "desc": "Run the A/B version of the prompts on the same test set, and use rubric to let the model act as a judge to score.",
        "steps": [
          "Prepare 10 test inputs",
          "Write Prompt A and Prompt B",
          "Batch run to collect output",
          "Score along the 5 dimensions using referee prompts",
          "Tabulated comparison mean",
          "The winning version is online"
        ],
        "prompt": "You are the prompt word evaluation judge. Score two outputs of the same input on a scale of 1-5: accuracy, completeness, format, conciseness, security.\nInput: {x}\nOutput A: {a}\nOutputB: {b}\nOutput JSON and recommend a winner.",
        "result": "Data-driven conclusion on prompt word selection.",
        "tips": "The test set should contain bounded and malicious inputs."
      },
      {
        "id": "2026-06-13-meta-prompt-refine",
        "title": "Meta-prompt: Let AI help you change the prompt word",
        "desc": "Give the rough prompts to the \"prompt word coach\" meta-prompt to automatically fill in RTFC.",
        "steps": [
          "Write a simple reminder \"Help me write my weekly report\"",
          "Apply meta-prompt template",
          "Get adapted versions and test cases",
          "Verify with test cases",
          "iterate round",
          "Save to prompt lexicon"
        ],
        "prompt": "You are the prompt word coach. The user will give a simple prompt, please output:\n1. Problem diagnosis\n2. RTFC complete rewritten version\n3. Two test inputs and ideal output points\nChinese, concise.",
        "result": "Get the professional RTFC version from Humble Tips.",
        "tips": "Meta-prompt only changes one item at a time to avoid batch quality degradation."
      },
      {
        "id": "2026-06-12-midjourney-character",
        "title": "Midjourney --cref makes consistent illustrations of series characters",
        "desc": "Use character references to generate multi-scene illustrations of the same IP, suitable for course mascots.",
        "steps": [
          "First create a satisfactory character portrait",
          "Copy image link as --cref",
          "Write different scene prompts to keep --cw 80",
          "Batch image selection with the highest consistency",
          "Upscale final four",
          "Export PNG for use in courses"
        ],
        "prompt": "The same mascot \"Little Blue Robot\" is studying in the library, flat illustration, blue and white color scheme --cref {url} --cw 85 --ar 1:1 --v 6",
        "result": "A collection of character illustrations that are consistent across scenes.",
        "tips": "--cw If it is too high, the pose will be copied and the replaceable actions will be reduced."
      },
      {
        "id": "2026-06-11-runway-motion-brush",
        "title": "Runway Gen-3 Motion Brush makes static posters move",
        "desc": "Apply motion vectors to the poster's clouds and light spots, and export a 5-second loop video.",
        "steps": [
          "Upload AI Poster JPG",
          "Choose Gen-3 Alpha Turbo",
          "Motion Brush paints cloud areas",
          "Set a slow horizontal drift",
          "Preview and fine-tune intensity",
          "Export 1080p MP4"
        ],
        "prompt": "(Visual operation mainly) Motion Brush only paints clouds and light spots, intensity 3/10, camera fixed.",
        "result": "Can be used for site Hero background loop video.",
        "tips": "Keep the moving area as small as possible to avoid distortion of the entire image."
      },
      {
        "id": "2026-06-10-kling-image2video",
        "title": "Keling Tusheng Video: Product pictures turned into 5-second display videos",
        "desc": "Upload the e-commerce product image, prompt slight rotation and halo, and get 5 seconds of advertising material.",
        "steps": [
          "Prepare transparent bottom product PNG",
          "Upload Ke Ling Tu Sheng video",
          "Tip: slow rotation + soft light",
          "Select 5s 720p",
          "Generate 2–3 versions of the best",
          "Download for short video delivery"
        ],
        "prompt": "The product remains centered, slowly rotates 15 degrees, studio soft light, background light gray gradient, no text.",
        "result": "5 seconds product demonstration video material.",
        "tips": "Complex background images are cut out first and then generated, so the main body is more stable."
      },
      {
        "id": "2026-06-09-figma-ai-prototype",
        "title": "Figma AI generates clickable prototypes from copywriting",
        "desc": "Product picture on white background (positive and negative prompt words)",
        "steps": [
          "Figma creates new AI prototype file",
          "Enter three-segment screen description and button flow",
          "Check autolayout after build",
          "Manually fine-tune copy and spacing",
          "Share link to comment with colleagues",
          "Export dev ready annotation"
        ],
        "prompt": "Generate 3-screen onboarding: Welcome → Select a target → Recommended courses; the main button \"Continue\" supports return; the mobile terminal is 390 wide.",
        "result": "Clickable link to low-fidelity prototype.",
        "tips": "After generation, the unified font is the team Design System."
      },
      {
        "id": "2026-06-08-comfyui-workflow",
        "title": "ComfyUI workflow: SD3 + ControlNet accurate poster",
        "desc": "Build a line drawing ControlNet workflow to generate course posters in batches.",
        "steps": [
          "Install ComfyUI and SD3 nodes",
          "Import OpenPose/Lineart ControlNet",
          "Upload line art or layout sketches",
          "Connect KSampler to the amplification node",
          "Batch queue 4 sheets",
          "After selecting the picture, use FaceDetailer to trim your face."
        ],
        "prompt": "(Workflow operation) Generate a technology-style course poster based on line drawings, with the text blank area at the top 30% and the main color blue and black.",
        "result": "Batch posters with controllable composition.",
        "tips": "It is still recommended that the text be typeset in Figma later, rather than rely solely on the model for typesetting."
      },
      {
        "id": "2026-06-07-chatgpt-image-edit",
        "title": "ChatGPT image editing: replace the background with a solid color studio shot",
        "desc": "Upload a portrait or product image, and the conversational style requires changing the background and slightly adjusting the color.",
        "steps": [
          "ChatGPT upload product images",
          "Requires \"pure white background + slight shadow\"",
          "If you are not satisfied, circle the area and change it.",
          "Download HD PNG",
          "Compare the color accuracy of the original image",
          "Used for e-commerce main image"
        ],
        "prompt": "Users: Pay attention to educational discounts and team seat management. For AI learners, you can use this to update your personal tool map and pitfall list, and complete a small-scale practical operation or internal sharing within a week.",
        "result": "White background main image available for e-commerce.",
        "tips": "Multiple rounds of circle selection iteration for complex hair edges."
      },
      {
        "id": "2026-06-06-capcut-ai-caption",
        "title": "CapCut AI subtitles + chapter titles automatically generated",
        "desc": "Import tutorial screen recordings, subtitle and generate chapter cards with one click.",
        "steps": [
          "Import 10-minute tutorial screen recording",
          "Recognize Chinese automatic subtitles",
          "Proofreading terminology",
          "AI chapters are divided according to pauses",
          "Apply branded subtitle style",
          "Export 1080p upload"
        ],
        "prompt": "(Mainly for tool operations) Replace terms such as \"API\" and \"RAG\" after the subtitles: {Glossary}",
        "result": "Tutorial videos with chapter markers.",
        "tips": "Manually check professional terms before exporting."
      },
      {
        "id": "2026-06-05-leonardo-consistent",
        "title": "Leonardo Character Reference Training Mini IP",
        "desc": "Use 4 reference pictures to lock the character and generate course pictures in batches.",
        "steps": [
          "Upload 4 photos of the same character from different angles",
          "Turn on Character Reference",
          "Set intensity Medium",
          "Write multiple scene prompts and generate them in batches",
          "Fixed seed recurrence",
          "Download the Unified Style Atlas"
        ],
        "prompt": "flat vector mascot teacher, classroom and desk scenes, teal palette, friendly smile",
        "result": "A series of illustrations in a unified IP style.",
        "tips": "The lighting of the reference image is consistent and the generation is more stable."
      },
      {
        "id": "2026-06-04-make-notion-sync",
        "title": "Make scenario: form submission→Notion database+Slack notification",
        "desc": "Typeform new replies are automatically written to Notion and pushed to the Slack summary.",
        "steps": [
          "Make new Scenario",
          "Typeform module listens for new replies",
          "Notion Create Database Item Mapping Fields",
          "OpenAI module generates a sentence summary",
          "Slack sends channel notifications",
          "Run tests and enable scheduling"
        ],
        "prompt": "Generate a Slack sentence summary based on the form JSON, including name, goal, urgency, in Chinese.",
        "result": "End-to-end automatic warehousing and notification.",
        "tips": "Map fields first and then connect to AI to make debugging easier."
      },
      {
        "id": "2026-06-03-zapier-gmail-label",
        "title": "Zapier: Gmail AI automatic labels and draft replies",
        "desc": "New emails trigger ChatGPT classification and are labeled as Gmail, and optionally generate drafts.",
        "steps": [
          "Zapier connects Gmail with OpenAI",
          "Trigger: New Email",
          "Action: Category + Suggested Tags",
          "Gmail Add Label",
          "Optional Create Draft reply",
          "Test 3 emails"
        ],
        "prompt": "Categorize emails and output JSON: {label, urgency, draft_reply}\nTag enumeration: Client/Support/Newsletter",
        "result": "Auto-categorized inbox with optional draft replies.",
        "tips": "Drafts are not automatically sent by default to avoid accidental sending."
      },
      {
        "id": "2026-06-02-dify-http-tool",
        "title": "Dify workflow calls external HTTP API for quote calculation",
        "desc": "Orchestrate LLM parsing requirements → HTTP pricing adjustment API → format quotation.",
        "steps": [
          "Dify new Workflow application",
          "The start node receives user budget and number of people",
          "LLM node parses into structured JSON",
          "HTTP node calls internal pricing API",
          "Template node rendering Markdown quote",
          "Publish WebApp tests"
        ],
        "prompt": "Parse user requirements into JSON: {plan, seats, months}, don't make up prices, unknown fields are null.",
        "result": "Automatic quote generator.",
        "tips": "HTTP nodes add timeouts and error branches."
      },
      {
        "id": "2026-06-01-n8n-github-release",
        "title": "n8n monitors GitHub Release and generates Chinese update posts",
        "desc": "When new versions are released, changelogs are automatically captured and AI is used to write short articles in the style of official accounts.",
        "steps": [
          "n8n GitHub Trigger on Release",
          "Fetch release body markdown",
          "OpenAI is rewritten as a public account tweet",
          "Save a Google Doc draft",
          "Telegram notification review",
          "Published after manual confirmation"
        ],
        "prompt": "Rewrite the following English changelog into a Chinese public account tweet: title + three-point update + upgrade suggestions, no exaggeration.",
        "result": "Chinese version update tweet pending review.",
        "tips": "Add the \"Explain with analogy\" command when Release is too technical."
      },
      {
        "id": "2026-05-31-openclaw-rss-summarize",
        "title": "OpenClaw aggregates RSS and writes it into Feishu multidimensional tables",
        "desc": "Capture AI blog RSS regularly and write the summary into Bitable for the team to browse.",
        "steps": [
          "OpenClaw new cron",
          "Configure RSS lists",
          "Filter GUID already exists",
          "AI-generated 80-word summary",
          "Feishu Bitable New row",
          "Weekly report view grouped by date"
        ],
        "prompt": "Output for each RSS: Chinese title, 80-word abstract, 3 keywords, and link to read the original text.",
        "result": "AI information library in Feishu Sheets.",
        "tips": "The Bitable field is created first to avoid writing failure."
      },
      {
        "id": "2026-05-30-pipedream-youtube",
        "title": "Pipedream: New YouTube Videos → Digest Email",
        "desc": "Subscribe to channel updates, automatically transcribe summaries and push them via email.",
        "steps": [
          "Pipedream Select YouTube New Video",
          "Pull subtitles or audio transcription",
          "OpenAI three-point summary",
          "Send Email via SMTP",
          "Deduplication processed videoId",
          "Daily at 9 o'clock"
        ],
        "prompt": "Generate based on subtitles: ①One sentence theme ②Three main points ③Whether it is worth watching (1-5) Chinese.",
        "result": "Daily video highlights email.",
        "tips": "Videos without subtitles need to go through the Whisper step first."
      },
      {
        "id": "2026-05-29-ifttt-ios-shortcut",
        "title": "IFTTT + iOS shortcut command: Voice inspiration → Notion AI organization",
        "desc": "Say inspiration to Siri, and it will automatically enter Notion and AI will fill in the tags.",
        "steps": [
          "IFTTT Connect iOS Shortcuts",
          "Shortcut recording to text",
          "Webhook to Notion API",
          "Notion AI completion tags and associations",
          "Notification confirmation write",
          "Test voice process"
        ],
        "prompt": "Organize the voice transcription into Notion notes: title + three bullets + tag #INSPIRED #AILearning",
        "result": "Voice inspiration leads to structured notes.",
        "tips": "In noisy environments, edit on your phone before sending."
      },
      {
        "id": "2026-05-28-activepieces-crm",
        "title": "Activepieces Self-Hosted: Lead Form→CRM+AI Scoring",
        "desc": "Self-hosted Activepieces, website forms feed into CRM and AI assesses lead quality.",
        "steps": [
          "Docker deployment Activepieces",
          "Webhook receiving form",
          "HTTP writing to HubSpot contacts",
          "AI hits Lead Score 1-5",
          "High score branch Slack @sales",
          "Enter the cultivation sequence with low scores"
        ],
        "prompt": "Score 1-5 according to the answers in the form, output reason≤50 words, JSON: {score, reason}",
        "result": "CRM lead pipeline with scoring.",
        "tips": "Be careful to back up encrypted credentials for self-hosting."
      },
      {
        "id": "2026-05-27-notion-ai-meeting",
        "title": "Notion AI meeting notes: agenda → minutes → action items",
        "desc": "Write an agenda before the meeting, post key points during the meeting, and use Notion AI to generate minutes and tasks.",
        "steps": [
          "Create a meeting page template with agenda area",
          "Bullet record key points during the meeting",
          "Select full text Notion AI Summarize",
          "Then AI Extract action items",
          "Convert to database task assignment",
          "Set deadline reminders"
        ],
        "prompt": "Generate minutes based on the agenda and key points: decision/discussion/action items (responsible person + DDL), in Chinese, do not make up undiscussed content.",
        "result": "Structured meeting minutes + task library.",
        "tips": "Action items must be assigned to people to avoid being left hanging."
      },
      {
        "id": "2026-05-26-google-docs-draft",
        "title": "Google Docs built-in Gemini drafting plan outline",
        "desc": "Use Gemini in the Docs sidebar to expand the plan outline based on three bullet points.",
        "steps": [
          "Create a new Google Doc",
          "Write three core bullets",
          "Gemini sidebar select Help me write",
          "After generating the outline, Accept",
          "Manually fill in data and references",
          "Share comments to collect feedback"
        ],
        "prompt": "Expand the following three points into a program outline: background, goals, and three-phase plan; 2-3 bullets in each section; formal Chinese.",
        "result": "A reviewable outline of a first draft proposal.",
        "tips": "Be sure to manually fill in the real data after generation."
      },
      {
        "id": "2026-05-25-excel-copilot-formula",
        "title": "Excel Copilot writes XLOOKUP formulas in natural language",
        "desc": "Describe cross-table matching requirements and let Copilot generate and interpret formulas.",
        "steps": [
          "Open a workbook with two sheets",
          "Copilot panel describes matching logic",
          "Insert formula into target column",
          "Check line #N/A",
          "Let Copilot change IFERROR",
          "Save template"
        ],
        "prompt": "Get the unit price from the price list based on the order table SKU and write it to a new column in the order table. If it cannot be found, fill in \"missing\"; use XLOOKUP.",
        "result": "Correct cross-table matching formula.",
        "tips": "Let Copilot \"explain each step of the formula\" first before copying."
      },
      {
        "id": "2026-05-24-slack-summary",
        "title": "Slack AI thread summary: Long discussion 30 seconds to read",
        "desc": "One-click summary of decisions and to-dos for 50+ reply threads.",
        "steps": [
          "Open lengthy project thread",
          "Click Summarize thread",
          "Read the AI ​​summary",
          "Check whether veto comments are missed",
          "Pin summary to channel",
          "Follow up on unassigned tasks"
        ],
        "prompt": "(Mainly button operations) Manually add after summary: person in charge/deadline/open issues",
        "result": "A quick review of team consensus.",
        "tips": "After the summary, @ the responsible person still needs to confirm."
      },
      {
        "id": "2026-05-23-obsidian-copilot",
        "title": "Obsidian Copilot plug-in: Q&A study notes in the library",
        "desc": "Configure local/cloud models to conduct reference-based Q&A on the entire database of notes.",
        "steps": [
          "Install the Obsidian Copilot plug-in",
          "Set up API or Ollama",
          "Index vault vector library",
          "Question \"Explain the experiment I did with RAG\"",
          "Check the citation link to jump to the note",
          "Fixed common issues for commands"
        ],
        "prompt": "Answer based on notes only; quote [[note name]]; if you don’t know, just say it’s not recorded; keep Chinese concise.",
        "result": "Personal trivia questions with note quotes.",
        "tips": "Reindex regularly to avoid new notes not being found."
      },
      {
        "id": "2026-05-22-feishu-ai-doc",
        "title": "Feishu Document AI compiles survey links into a competitive product list",
        "desc": "Paste the key points of 5 competing product links, and AI will generate a comparison table.",
        "steps": [
          "Create a new Feishu document",
          "Paste the bullet points of competing products",
          "Select AI Creation→Table",
          "Proofreading Prices and Features",
          "Add an \"unknown\" column to avoid blind filling in",
          "Write an agenda before the meeting, post key points during the meeting, and use Notion AI to generate minutes and tasks."
        ],
        "prompt": "Generate a comparison table of competing products based on the following key points: function/price/Chinese support/deployment method; fill in \"to be verified\" if missing.",
        "result": "Shareable comparison table of competing products.",
        "tips": "The price column is labeled \"as of date.\""
      },
      {
        "id": "2026-05-21-linear-ai-issue",
        "title": "Linear AI breaks user feedback into executable issues",
        "desc": "Paste 10 user feedback, AI clusters and generates prioritized Issues.",
        "steps": [
          "Linear project new View",
          "Paste feedback into AI assistant",
          "Request clustering by topic",
          "Generate Issue title + acceptance criteria",
          "Manually adjust priorities",
          "Scheduled into this week's Cycle"
        ],
        "prompt": "Cluster feedback into Issues: title, problem statement, acceptance criteria, priority P0-2; no duplication; Chinese.",
        "result": "Structured product Backlog.",
        "tips": "Acceptance criteria must be testable."
      },
      {
        "id": "2026-05-20-teams-recap",
        "title": "Teams meeting Copilot review: who said what decision",
        "desc": "After the meeting, open the Copilot panel to view the list of speaker segments and decisions.",
        "steps": [
          "Open the Teams meeting that just ended",
          "Copilot → Recap",
          "View Speakers & topics",
          "Copy decisions and action items",
          "Paste to OneNote project page",
          "Mark the person responsible"
        ],
        "prompt": "Extract from meeting transcript: decision list, open issues, action items (people + DDL); don’t make it up.",
        "result": "Archiveable record of meeting decisions.",
        "tips": "For sensitive meetings, first confirm whether the company allows cloud transcription."
      }
    ]
  }
});
})();
