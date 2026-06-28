/* ES overlays — skills-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('es', {
    skillsNav: {
        meta: {
          lead: "Habilidades seleccionadas del agente de GitHub con más de 1000 estrellas: edición y generación de videos, comercio electrónico, Xiaohongshu, marketing, SEO y más. Cada entrada incluye el comando de instalación, agentes compatibles y un enlace de repositorio.",
          searchPlaceholder: "__T0__ habilidades · __T1__ categorías",
          countLabel: "{n} habilidades",
          totalLabel: "{n} habilidades · {c} categorías",
          empty: "Sin habilidades de combinación. Pruebe con otra palabra clave.",
          copyCmd: "comando copiar",
          openGithub: "GitHub",
          starsLabel: "{n} ★",
          agentsLabel: "Funciona con"
        },
        categories: {
          "Skill 安装与合集": "Instaladores y colecciones",
          "编程开发": "Ingeniería",
          "前端与设计": "Interfaz y diseño",
          "视频剪辑与生成": "Edición y generación de vídeo.",
          "跨境电商与电商": "Comercio transfronterizo y electrónico",
          "小红书与内容运营": "XHS y operaciones de creador",
          "营销与 SEO": "Marketing y SEO",
          "内容写作": "Escritura y contenido",
          "调研搜索": "Investigación y búsqueda",
          "产品运营": "Producto y operaciones",
          "安全审计": "Auditoría de seguridad",
          "科研学术": "Ciencia e investigación",
          "浏览器自动化": "Automatización del navegador",
          "知识管理": "Gestión del conocimiento",
          "办公文档": "Documentos de oficina",
          "财务金融": "Finanzas"
        },
        items: {
          "skills CLI": {
            name: "habilidades CLI",
            desc: "Instalador abierto de Vercel para más de 68 agentes de codificación: instale cualquier habilidad de GitHub mediante el complemento de habilidades npx.",
            installNote: "El propio instalador; El ejemplo instala el paquete de habilidades oficial de Vercel."
          },
          "Anthropic Skills": {
            desc: "Demostraciones oficiales de Anthropic: creatividad, desarrollo, comunicaciones empresariales y habilidades documentales (DOCX/PDF/PPTX/XLSX).",
            installNote: "Código Claude: /plugin Marketplace agrega antrópicos/habilidades"
          },
          "Antigravity Awesome Skills": {
            desc: "Más de 1600 habilidades instalables con paquetes web, de seguridad, de datos, de DevOps, de control de calidad y de marketing.",
            installNote: "Código Claude: npx habilidades-antigravedad-increíbles --claude"
          },
          "Claude Skills 大全": {
            name: "Paquete de habilidades de Claude",
            desc: "337 habilidades y más de 70 comandos en ingeniería, marketing, productos, cumplimiento y finanzas."
          },
          "Claude Skills 大全 (营销)": {
            name: "Paquete de habilidades de Claude (Marketing)",
            desc: "337 habilidades que incluyen plantillas de experimentos de crecimiento, marca, contenido y marketing."
          },
          "Claude Skills 大全 (财务)": {
            name: "Paquete de habilidades de Claude (Finanzas)",
            desc: "337 habilidades que incluyen modelos financieros, elaboración de presupuestos, recaudación de fondos y plantillas de informes de cumplimiento."
          },
          "Awesome Agent Skills": {
            desc: "Índice seleccionado de VoltAgent de más de 1000 habilidades oficiales y comunitarias.",
            installNote: "Busque primero con buscar, luego las habilidades npx agregan <repo>"
          },
          "Agent Skills 规范": {
            name: "Especificaciones de habilidades del agente",
            desc: "Documentos oficiales en formato de estándar abierto (agentskills.io) y SKILL.md.",
            installNote: "Crea una nueva habilidad que cumpla con las especificaciones"
          },
          Superpowers: {
            desc: "Metodología de desarrollo de agentes principales: lluvia de ideas → revisión del diseño → plan TDD → ​​ejecución impulsada por subagentes.",
            installNote: "Cursor: /add-plugin superpoderes · Codex: /plugins → superpoderes"
          },
          OpenMontage: {
            desc: "Estudio de vídeo de agente de código abierto: 12 canales, 52 herramientas, más de 500 habilidades: desde el guión hasta el montaje final con FFmpeg, Remotion, TTS y T2V.",
            installNote: "Consulte AGENT_GUIDE.md para conocer el flujo de trabajo completo de producción de video."
          },
          ViMax: {
            desc: "Marco de vídeo del agente HKU: director, guionista, productor y generador en un canal automatizado."
          },
          "Remotion Skills": {
            desc: "Generación de videos con Pika AI: texto a video, imagen a video y efectos estilizados para cortos creativos y conceptos publicitarios."
          },
          "Pika Skills": {
            desc: "Generación de videos con Pika AI: texto a video, imagen a video y efectos estilizados para cortos creativos y conceptos publicitarios."
          },
          "Google Gemini 视频生成": {
            name: "Generación de vídeos Google Gemini",
            desc: "Habilidad API oficial de Gemini con subhabilidad de generación de medios: texto/imagen a video Veo y recursos multimodales.",
            installNote: "Utilice la subhabilidad media_generación para modelos de vídeo Veo"
          },
          "OpenAI Codex 多媒体": {
            name: "Multimedia del Códice OpenAI",
            desc: "Catálogo oficial de habilidades del Codex con imagegen, sora y otras subhabilidades de generación multimedia.",
            installNote: "Explore las subhabilidades seleccionadas a través de /skills en Codex"
          },
          "Marketing Skills (视频)": {
            name: "Habilidades de marketing (vídeo)",
            desc: "Subhabilidad de vídeo: guiones de vídeo cortos, estructura de anuncios, estrategia de vídeo social y texto de conversión."
          },
          "Social Media Skills (短视频)": {
            name: "Habilidades en redes sociales (video corto)",
            desc: "Guiones de vídeos cortos, planificación de temas, ritmo de guiones gráficos y calendarios de contenido multiplataforma para TikTok/Reels."
          },
          "Claude SEO (电商)": {
            name: "Claude SEO (comercio electrónico)",
            desc: "Subhabilidades de SEO para comercio electrónico: páginas de categorías, esquema de producto, hreflang y páginas de destino de conversión.",
            installNote: "Utilice las subhabilidades de comercio electrónico, SEO y marcado de esquemas después de la instalación"
          },
          "GEO SEO Claude": {
            desc: "SEO primero en GEO para visibilidad de búsqueda de IA, autoridad de marca, esquema y citas multiplataforma."
          },
          "Claude SEO": {
            desc: "25 subhabilidades + 18 subagentes: SEO técnico, SEO internacional, SEO de comercio electrónico, backlinks, reporting."
          },
          "Marketing Skills": {
            desc: "Paquete de habilidades de marketing de más de 35.000 estrellas: CRO, redacción publicitaria, SEO, análisis e ingeniería de crecimiento."
          },
          "MD2WeChat Skill": {
            desc: "Markdown para WeChat: más de 40 temas, imágenes de IA, publicación por lotes, gestión de múltiples cuentas."
          },
          Humanizer: {
            desc: "Elimine los avisos de escritura mediante IA para blogs, marketing y contenido publicado."
          },
          "Humanizer 中文版": {
            name: "Humanizador (chino)",
            desc: "Humanizador localizado en chino para WeChat, Zhihu, Xiaohongshu y pulido de AI."
          },
          "Last 30 Days": {
            desc: "Investigue cualquier tema en Reddit, X, YouTube, HN, Polymarket y la web."
          },
          "Agent Reach": {
            desc: "Enrutador de Internet para 13 plataformas: XHS, Twitter, Bilibili, Reddit, GitHub, YouTube: cero tarifas de API."
          },
          "Browser Use": {
            desc: "Automatización del navegador impulsada por IA: explore, complete formularios, extraiga y valide para operaciones y pruebas."
          },
          "Finance Skills": {
            desc: "Análisis financiero: estados financieros, modelos de valoración, presupuestos y memorias de inversión."
          }
        },
        agents: {
          "多平台": "Multiplataforma",
          "格式通用": "Formato universal",
          "通用": "Universal",
          Cursor: "Cursor",
          "Claude Code": "Código Claude",
          Codex: "Códice",
          "Gemini CLI": "CLI de Géminis",
          Antigravity: "antigravedad",
          "GitHub Copilot": "Copiloto de GitHub",
          "Claude.ai": "Claude.ai",
          v0: "v0",
          OpenClaw: "garra abierta",
          Grok: "Grok"
        }
      },
      strings: {
        skillsNavPage: {
          tag: "Skill",
          bannerTitle: "Habilidades seleccionadas del agente de GitHub con más de 1000 estrellas: edición y generación de videos, comercio electrónico, Xiaohongshu, marketing, SEO y más. Cada entrada incluye el comando de instalación, agentes compatibles y un enlace de repositorio.",
          bannerSubtitle: "Principales habilidades de GitHub · Instalación con un clic",
          title: "Habilidades seleccionadas del agente de GitHub con más de 1000 estrellas: edición y generación de videos, comercio electrónico, Xiaohongshu, marketing, SEO y más. Cada entrada incluye el comando de instalación, agentes compatibles y un enlace de repositorio."
        },
        search: {
          typeSkillsNav: "Habilidades seleccionadas del agente de GitHub con más de 1000 estrellas: edición y generación de videos, comercio electrónico, Xiaohongshu, marketing, SEO y más. Cada entrada incluye el comando de instalación, agentes compatibles y un enlace de repositorio."
        }
      }
  });
})();
