/* ES overlays — skills-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("es", { skillsNav: {
  "meta": {
    "lead": "Habilidades seleccionadas del agente de GitHub con más de 1000 estrellas. Cada entrada incluye el comando de instalación, agentes compatibles y un enlace de repositorio.",
    "searchPlaceholder": "Habilidades de búsqueda, industria, casos de uso, agentes…",
    "countLabel": "{n} skills",
    "totalLabel": "{n} skills · {c} categories",
    "empty": "Sin habilidades de combinación. Pruebe con otra palabra clave.",
    "copyCmd": "comando copiar",
    "openGithub": "GitHub",
    "starsLabel": "{n} ★",
    "agentsLabel": "Funciona con"
  },
  "categories": {
    "Skill 安装与合集": "Instalación y recopilación de habilidades.",
    "编程开发": "Desarrollo de programación",
    "前端与设计": "Front-end y diseño",
    "视频剪辑与生成": "Edición y generación de vídeo.",
    "跨境电商与电商": "Comercio electrónico transfronterizo y comercio electrónico",
    "小红书与内容运营": "Xiaohongshu y operación de contenido",
    "营销与 SEO": "Marketing y SEO",
    "内容写作": "redacción de contenidos",
    "调研搜索": "búsqueda de investigación",
    "产品运营": "Operaciones de producto",
    "安全审计": "auditoría de seguridad",
    "科研学术": "Investigación científica y académica.",
    "浏览器自动化": "automatización del navegador",
    "知识管理": "gestión del conocimiento",
    "办公文档": "Documentos de oficina",
    "财务金融": "Finanzas"
  },
  "agents": {
    "多平台": "Multiplataforma",
    "格式通用": "Formato universal",
    "通用": "Universal",
    "Cursor": "Cursor",
    "Claude Code": "Código Claude",
    "Codex": "Códice",
    "Gemini CLI": "CLI de Géminis",
    "GitHub Copilot": "Copiloto de GitHub",
    "Claude.ai": "Claude.ai",
    "v0": "v0",
    "OpenClaw": "garra abierta",
    "Antigravity": "Antigravedad",
    "Grok": "Grok",
    "Windsurf": "windsurf"
  },
  "items": {
    "skills CLI": {
      "name": "Beta pública del Registro oficial de MCP: descubrimiento e instalación del servidor con un solo clic",
      "desc": "Cursor Agent primero permite programarlo y luego ejecutarlo; Los cambios importantes requieren instrucciones de confirmación paso a paso.",
      "installNote": "El propio instalador; El ejemplo de comando anterior instala la colección Skill oficial de Vercel."
    },
    "Anthropic Skills": {
      "name": "Habilidades antrópicas",
      "desc": "Biblioteca de demostración de habilidades oficial de Anthropic, que incluye ejemplos a nivel de producción para creatividad, desarrollo, comunicación corporativa y procesamiento de documentos (DOCX/PDF/PPTX/XLSX).",
      "installNote": "Código Claude También disponible: /plugin Marketplace add anthropics/skills"
    },
    "Antigravity Awesome Skills": {
      "name": "Habilidades impresionantes antigravedad",
      "desc": "Una súper colección de más de 1600 habilidades instalables, incluidos paquetes de complementos especiales y paquetes de funciones para Web, seguridad, datos, DevOps, control de calidad, marketing, etc.",
      "installNote": "Código Claude: npx antigravedad-habilidades-increíbles --claude"
    },
    "Claude Skills 大全": {
      "name": "Enciclopedia de habilidades de Claude",
      "desc": "337 habilidades y más de 70 comandos personalizados cubren escenarios totalmente funcionales como ingeniería, marketing, producto, cumplimiento, investigación, finanzas, etc."
    },
    "Awesome Agent Skills": {
      "name": "Impresionantes habilidades de agente",
      "desc": "La comunidad de más de 1000 y el índice de habilidades oficial seleccionado por VoltAgent son adecuados para navegar por dirección y luego instalar.",
      "installNote": "Primero busque con buscar, luego instale con npx skills y agregue <repo>"
    },
    "Agent Skills 规范": {
      "name": "Especificación de habilidades del agente",
      "desc": "Abra las especificaciones y documentos oficiales del estándar Agent Skills (agentskills.io). Las habilidades en cada plataforma siguen el formato SKILL.md.",
      "installNote": "Tareas web complejas"
    },
    "Superpowers": {
      "name": "Superpoderes",
      "desc": "La metodología de desarrollo de agentes más popular: lluvia de ideas → revisión de diseño → plan de implementación de TDD → ​​desarrollo impulsado por subagentes, que activa automáticamente todo el proceso Habilidad.",
      "installNote": "Cursor:/add-plugin superpoderes · Codex:/plugins Buscar superpoderes"
    },
    "Agent Skills (Addy Osmani)": {
      "name": "Habilidades del agente (Addy Osmani)",
      "desc": "Habilidades de ingeniería a nivel de producción producidas por ingenieros de Google: especificaciones de desarrollo a nivel empresarial como revisión de arquitectura, optimización del rendimiento, estrategia de prueba, revisión de código, etc."
    },
    "Awesome Copilot": {
      "name": "copiloto impresionante",
      "desc": "Una colección de instrucciones, agentes, habilidades y configuraciones de Copilot aportadas por la comunidad de GitHub, que cubre escenarios de desarrollo como revisión de relaciones públicas, pruebas, documentación y seguridad."
    },
    "Context Engineering Skills": {
      "name": "Habilidades de ingeniería de contexto",
      "desc": "Habilidades especiales de ingeniería de contexto: RAG, memoria, orquestación de herramientas y optimización de ventanas de contexto del agente, adecuadas para tareas complejas de desarrollo de varios pasos."
    },
    "Planning with Files": {
      "name": "Planificación con archivos",
      "desc": "Utilice el sistema de archivos como memoria externa: planificación, progreso y acumulación de conocimientos, adecuado para la gestión de SOP de operaciones y proyectos a largo plazo."
    },
    "Vercel Agent Skills": {
      "name": "Habilidades del agente de Vercel",
      "desc": "Colección de habilidades oficiales de Vercel: mejores prácticas de React, especificaciones de diseño web, rendimiento de front-end, modo Next.js y otras capacidades de especialización de desarrollo web.",
      "installNote": "También puede instalar elementos individuales como frontend-design y react-best-practices."
    },
    "Frontend Design": {
      "name": "Diseño de interfaz",
      "desc": "La habilidad oficial de diseño front-end de Vercel: composición tipográfica, combinación de colores, diseño y especificaciones de proceso de componentes para evitar una estética de interfaz de IA prefabricada."
    },
    "Awesome Design Skills": {
      "name": "Impresionantes habilidades de diseño",
      "desc": "Colección seleccionada de habilidades de diseño: diseño, combinación de colores, tecnología de componentes y rutinas estéticas anti-IA, adecuadas para páginas de destino e interfaces de productos."
    },
    "Stitch Skills": {
      "name": "Habilidades de puntada",
      "desc": "Habilidad de diseño de Google Stitch: genere especificaciones de componentes y interfaces de alta fidelidad a partir de la intención del diseño, adecuadas para la creación rápida de prototipos y la iteración visual."
    },
    "Vue.js AI Skills": {
      "name": "Habilidades de IA de Vue.js",
      "desc": "Habilidades especiales ecológicas de Vue 3: API combinada, Pinia, modo Nuxt y mejores prácticas, adecuadas para proyectos Vue full-stack."
    },
    "OpenMontage": {
      "name": "Montaje abierto",
      "desc": "El sistema de producción de video Agent de código abierto: 12 canales, 52 herramientas, más de 500 habilidades, que cubren guiones, guiones gráficos, TTS, edición y exportación de películas terminadas, lo que convierte al asistente de codificación en un estudio de video.",
      "installNote": "Capturas de pantalla y llenado de formularios."
    },
    "ViMax": {
      "name": "vimax",
      "desc": "El marco de generación de vídeo Agent producido por la Universidad de Hong Kong: director, guionista, productor y generador están integrados, con una disposición totalmente automática desde la creatividad hasta la película terminada."
    },
    "Remotion Skills": {
      "name": "Habilidades remotas",
      "desc": "Utilice React para generar videos mediante programación: subtítulos hablados, efectos de movimiento, títulos de marcas y videos cortos de visualización de datos, adecuados para la producción masiva de videos cortos basados ​​en conocimientos."
    },
    "Pika Skills": {
      "name": "Habilidades de Pika",
      "desc": "Habilidad de generación de video de Pika AI: video de Vincent, video de Tusheng y flujo de trabajo de efectos especiales estilizados, adecuado para cortometrajes creativos y películas conceptuales publicitarias."
    },
    "Google Gemini 视频生成": {
      "name": "Generación de vídeos Google Gemini",
      "desc": "Habilidad API Gemini oficial de Google: contiene subhabilidad de generación de medios, admite video Veo Wensheng, video Tusheng y generación de material multimodal.",
      "installNote": "Después de la instalación, puede usar subhabilidades como media_generación para llamar al modelo de video Veo."
    },
    "OpenAI Codex 多媒体": {
      "name": "Multimedia del Códice OpenAI",
      "desc": "Directorio oficial de habilidades del Codex de OpenAI: contiene imagegen, sora y otras subhabilidades de edición y generación multimedia, adecuadas para la producción de material creativo impulsada por agentes.",
      "installNote": "Puede utilizar /skills en Codex para buscar subhabilidades seleccionadas como imagegen."
    },
    "Marketing Skills (视频)": {
      "name": "Una descripción general rápida de las publicaciones más destacadas sobre IA de la plataforma X",
      "desc": "La colección de habilidades de marketing incluye subhabilidades de vídeo: guiones de vídeo cortos, estructuras de películas publicitarias, estrategias de vídeo de redes sociales y flujos de trabajo de redacción de vídeos de conversión."
    },
    "Social Media Skills (短视频)": {
      "name": "Habilidades en redes sociales (video corto)",
      "desc": "Habilidades de estrategia de contenido en redes sociales: guiones de video cortos, planificación de temas, ritmo de guión gráfico y calendario de contenido multiplataforma, adecuado para operaciones de TikTok/Douyin/Reels."
    },
    "Claude SEO (电商)": {
      "name": "Pista instrumental de tecnología corporativa optimista,\npads de sintetizador modernos y percusión ligera, optimista y limpia,\nsin voces, adecuado para video de lanzamiento de producto de IA,\n100–110 BPM, energía constante sin caídas dramáticas,\n30 a 45 segundos",
      "desc": "Contiene subhabilidades de SEO para comercio electrónico: páginas de categorías, datos estructurados de productos, hreflang de sitios internacionales y optimización de páginas de destino de conversión, adecuado para vendedores de plataformas y DTC.",
      "installNote": "Después de la instalación, están disponibles subhabilidades como comercio electrónico-seo y marcado de esquema."
    },
    "GEO SEO Claude": {
      "name": "GEO SEO Claude",
      "desc": "Habilidad SEO con prioridad GEO: visibilidad de búsqueda de IA, autoridad de marca, optimización de esquemas y citas multiplataforma, adecuada para que marcas extranjeras adquieran clientes."
    },
    "Last 30 Days": {
      "name": "Últimos 30 días",
      "desc": "Investigue cualquier tema en Reddit, X, YouTube, HN, Polymarket y toda la web y sintetice informes resumidos bien documentados."
    },
    "Apify Agent Skills": {
      "name": "Los escenarios de acceso típicos incluyen: atención al cliente por vídeo (el usuario levanta su teléfono móvil para mostrar el dispositivo defectuoso), enseñanza remota (el profesor comparte la pantalla para explicar) y asistentes de voz en dispositivos portátiles. El SDK de Android se lanza simultáneamente con el SDK web y el SDK de iOS se encuentra en versión preliminar privada.",
      "desc": "Habilidad de rastreo web automático: recopilación estructurada de datos de páginas, adecuada para la recopilación de datos operativos y el seguimiento de productos competitivos."
    },
    "Agent Reach": {
      "name": "Alcance del agente",
      "desc": "Enrutador con capacidad de Internet: investigación y búsqueda unificadas en 13 plataformas, incluidas Xiaohongshu, Twitter, Bilibili, Reddit, GitHub, YouTube, etc."
    },
    "Humanizer 中文版": {
      "name": "Humanizador versión china",
      "desc": "La versión china de Humanizer está optimizada para rastros de IA china y es adecuada para eliminar el sabor de IA del contenido chino, como cuentas públicas, Zhihu y Xiaohongshu."
    },
    "MD2WeChat Skill": {
      "name": "Habilidad MD2WeChat",
      "desc": "Composición tipográfica Markdown con un solo clic para publicar cuentas públicas de WeChat: más de 40 temas de estilo, ilustraciones de IA, publicación por lotes y administración de cuentas múltiples, adecuado para operaciones matriciales de medios propios."
    },
    "Claude SEO": {
      "name": "Claudio SEO",
      "desc": "foto de producto minimalista de auriculares inalámbricos en el estuche de carga,\nfondo transparente blanco puro, iluminación de softbox de estudio,\ncomposición centrada, sombra sutil debajo del producto,\nfotografía comercial ultranítida, detalle 4k,\nlimpiar espacio negativo para superposición de texto --ar 4:5 --style raw --v 6\n\nAviso negativo: texto, marca de agua, logotipo, borroso, deformado, objetos adicionales, fondo desordenado, manos"
    },
    "Marketing Skills": {
      "name": "Habilidades de marketing",
      "desc": "Grupo familiar de habilidades de marketing: CRO, redacción publicitaria, SEO, análisis e ingeniería de crecimiento, paquete de capacidades de agente de marketing preferido de la comunidad de más de 35.000 estrellas."
    },
    "PM Skills": {
      "name": "Habilidades PM",
      "desc": "Mercado de habilidades de gerente de producto: más de 100 habilidades, comandos y complementos de agentes, desde el descubrimiento, la estrategia y la ejecución hasta la puesta en marcha y el crecimiento."
    },
    "Claude Skills 大全 (营销)": {
      "name": "Enciclopedia de habilidades de Claude (marketing)",
      "desc": "337 habilidades incluyen plantillas de experimentos de marketing, marca, contenido y crecimiento para que los equipos de marketing las lancen rápidamente."
    },
    "Humanizer": {
      "name": "Humanizador",
      "desc": "Elimina rastros de texto generado por IA, lo que hace que los artículos sean más naturales y más parecidos a la escritura humana; adecuado para blogs, redacción de textos publicitarios de marketing y pulido de contenidos para publicaciones externas."
    },
    "Agent Rules Books": {
      "name": "Libros de reglas para agentes",
      "desc": "Habilidad de redacción de artículos extensos: reglas estructuradas de redacción de libros/informes y disposición de capítulos, adecuadas para la producción de informes técnicos y contenidos de cursos."
    },
    "Awesome Agent Skills 索引": {
      "name": "Impresionante índice de habilidades de agentes",
      "desc": "Índice de habilidades de la comunidad, busque por industria y propósito y luego instálelo de manera específica, adecuado para descubrir habilidades en campos verticales."
    },
    "PM Claude Skills": {
      "name": "PM Claude Habilidades",
      "desc": "PM Specialty Claude Skill: Entrevistas con usuarios, PRD, hoja de ruta y flujo de trabajo de alineación de OKR."
    },
    "noobnooc Skills": {
      "name": "Habilidades noobnooc",
      "desc": "Paquete de habilidades híbrido de productos, operaciones y crecimiento: diseño de experimentos, panel de métricas y lista de verificación de lanzamiento de funciones."
    },
    "Acontext": {
      "name": "Un contexto",
      "desc": "Secuencia de comandos de tarea: obtenga las 10 principales publicaciones de palabras clave de IA en la API de HN Algolia"
    },
    "Trail of Bits Skills": {
      "name": "Habilidades del rastro de bits",
      "desc": "El equipo de seguridad de Trail of Bits produce: detección de vulnerabilidades, análisis estático, flujo de trabajo de auditoría, seguridad de contratos y otras habilidades profesionales de investigación de seguridad."
    },
    "Cisco Skill Scanner": {
      "name": "Escáner de habilidades de Cisco",
      "desc": "Escáner de seguridad de habilidades: detecta habilidades de agentes maliciosas o de alto riesgo, adecuado para el gobierno de habilidades del equipo y la auditoría de la cadena de suministro."
    },
    "Claude BugHunter": {
      "name": "Claude cazador de insectos",
      "desc": "Habilidad automatizada de cazador de errores: auditoría de código, verificación de regresión y flujos de trabajo de descubrimiento de defectos relacionados con la seguridad."
    },
    "Scientific Agent Skills": {
      "name": "Habilidades del agente científico",
      "desc": "Biblioteca de habilidades científicas K-Dense: más de 140 habilidades listas para usar y más de 100 bases de datos científicas que cubren biología, química, medicina y descubrimiento de fármacos."
    },
    "Text-to-CAD": {
      "name": "Texto a CAD",
      "desc": "Habilidad de modelo CAD de generación de descripción de texto, adecuada para el modelado rápido de prototipos de ingeniería, fabricación e investigación científica."
    },
    "Document Skills (Anthropic)": {
      "name": "Habilidades documentales (antrópicas)",
      "desc": "Habilidades de documentos antrópicos a nivel de producción: edición DOCX, análisis de PDF, diapositivas PPTX, tablas XLSX y tienen el mismo origen que las capacidades de documentos de Claude.",
      "installNote": "Complemento de Claude Code:/instalación del complemento document-skills@anthropic-agent-skills"
    },
    "Browser Use": {
      "name": "Uso del navegador",
      "desc": "Automatización del navegador impulsada por IA: el agente navega, completa formularios, rastrea y verifica de forma independiente, adecuado para escenarios de operación y prueba."
    },
    "Playwright Skill": {
      "name": "Habilidad de dramaturgo",
      "desc": "Habilidad de automatización del navegador Claude Code: el agente escribe y ejecuta de forma independiente scripts de Playwright para pruebas E2E y verificación de páginas."
    },
    "Obsidian Skills": {
      "name": "Habilidades de obsidiana",
      "desc": "Enseñe al agente a utilizar Obsidian CLI y formatos abiertos (Markdown, Bases, JSON Canvas) para automatizar la toma de notas y las operaciones de la base de conocimientos."
    },
    "Google Workspace CLI": {
      "name": "CLI de Google Workspace",
      "desc": "Habilidad CLI de Google Office Suite: automatización de documentos, hojas de cálculo y diapositivas, adecuada para el procesamiento por lotes de informes y documentos colaborativos."
    },
    "Skill Creator": {
      "name": "Creador de habilidades",
      "desc": "Utilice la estructura de CLI de habilidades para crear SKILL.md que cumpla con las especificaciones de habilidades del agente, lo cual es adecuado para que los equipos acumulen flujos de trabajo personalizados y conocimiento del dominio.",
      "installNote": "Genere la plantilla SKILL.md en el directorio actual y complete el nombre y la descripción."
    },
    "Finance Skills": {
      "name": "Habilidades financieras",
      "desc": "Habilidades de análisis financiero: interpretación de estados financieros, modelos de valoración, asistencia en la redacción de presupuestos y materiales de inversión y financiación."
    },
    "Awesome Finance Skills": {
      "name": "Impresionantes habilidades financieras",
      "desc": "Índice seleccionado de habilidades financieras: una colección de plantillas de escenarios de contabilidad, inversión, control de riesgos y FP&A."
    },
    "Claude Skills 大全 (财务)": {
      "name": "Enciclopedia Claude Skills (Finanzas)",
      "desc": "337 habilidades incluyen modelos financieros, elaboración de presupuestos, inversión y financiación y plantillas de informes de cumplimiento, adecuadas para equipos de análisis financiero y empresarial."
    },
    "Smithery Skills": {
      "name": "Habilidades de herrería",
      "desc": "La plataforma de instalación y descubrimiento MCP/Skill Skill producida por Smithery puede buscar servidores populares del Registro y generar fragmentos de configuración del cliente.",
      "installNote": "La configuración del cursor/Claude también se puede generar con un clic en la página web smithery.ai"
    },
    "Cursor Directory Skills": {
      "name": "Habilidades de directorio de cursor",
      "desc": "Reglas de cursor e índices de habilidades seleccionados por la comunidad, que cubren plantillas de proyectos de alta frecuencia, como aplicaciones completas, móviles y de inteligencia artificial."
    },
    "Cloudflare Agent Skills": {
      "name": "Habilidades del agente de Cloudflare",
      "desc": "Habilidad oficial del agente de Cloudflare: modos de desarrollo Workers, R2, KV, D1 y Pages, adecuados para informática de punta e implementación de pila completa."
    },
    "Composio Tool Router Skills": {
      "name": "Habilidades del enrutador de herramientas Composio",
      "desc": "Habilidad de enrutamiento de la herramienta Composio: acceso unificado a Gmail, GitHub, Slack, Notion y otros más de 100 SaaS, lo que reduce el código adhesivo de la herramienta Agent."
    },
    "LangGraph Agent Skills": {
      "name": "Habilidades del agente LangGraph",
      "desc": "Habilidad LangGraph oficial de LangChain: orquestación de múltiples agentes, diagramas de estado, puntos de control y nodos de aprobación manual, adecuados para automatización compleja."
    },
    "Windsurf Wave Skills": {
      "name": "Habilidades de olas de windsurf",
      "desc": "Habilidades especiales de Codeium Windsurf: archivos de memoria en cascada, edición de múltiples archivos Wave y flujo de trabajo de refactorización de código a nivel base."
    },
    "shadcn/ui Agent Skills": {
      "name": "Habilidades del agente shadcn/ui",
      "desc": "Habilidad de creación de componentes shadcn/ui: modo Radix + Tailwind, accesibilidad y variables temáticas para evitar que la IA genere una interfaz de usuario barata.",
      "installNote": "El efecto es mejor cuando se usa con npx shadcn@latest add"
    },
    "Figma to Code Skills": {
      "name": "Habilidades de Figma a codificar",
      "desc": "Diseñar borrador para codificar Habilidad: Analizar nodos, espaciado y fuentes de Figma, y ​​generar el esqueleto del componente React/Tailwind."
    },
    "ComfyUI Workflow Skills": {
      "name": "Habilidades de flujo de trabajo de ComfyUI",
      "desc": "Habilidad de flujo de trabajo de ComfyUI: orquestación de nodos SD3/Flux, ControlNet y salida de imágenes por lotes, adecuado para comercio electrónico y canalizaciones de coincidencia de imágenes de cursos."
    },
    "CapCut Agent Skills": {
      "name": "Habilidades del agente CapCut",
      "desc": "Después de la reunión, abra el panel Copilot para ver la lista de segmentos y decisiones de los oradores."
    },
    "Shopify Hydrogen Skills": {
      "name": "Habilidades de hidrógeno de Shopify",
      "desc": "Habilidad de comercio electrónico Shopify Hydrogen: tienda sin cabeza, SEO de página de producto y componentes de carrito de compras, adecuados para sitios web independientes transfronterizos."
    },
    "Amazon SP-API Skills": {
      "name": "Habilidades de API de Amazon SP",
      "desc": "Habilidad SP-API del vendedor de Amazon: pedidos, inventario, extracción de informes publicitarios y generación de scripts de alarmas de excepción."
    },
    "XHS Creator Skills": {
      "name": "Habilidades del creador de XHS",
      "desc": "Habilidades de creación de Xiaohongshu: fórmula de título, palabras clave de portada, etiquetas de tema y guías del área de comentarios, todo en línea con el tono de la plataforma."
    },
    "GEO SEO Skills": {
      "name": "Habilidades de SEO GEO",
      "desc": "Habilidad de optimización generativa del motor (GEO): preguntas frecuentes estructuradas, esquema y llms.txt para mejorar la visibilidad de la búsqueda de IA."
    },
    "Technical Writing Skills": {
      "name": "Habilidades de escritura técnica",
      "desc": "Habilidad de documentación técnica: referencia de API, README, registro de cambios y estructura del tutorial, en línea con los cuatro cuadrantes de la documentación de Divio."
    },
    "Deep Research Skills": {
      "name": "Habilidades de investigación profunda",
      "desc": "Habilidades de investigación en profundidad: búsqueda en múltiples fuentes, tabla de comparación, gestión de citas y anotación de incertidumbre, adecuadas para análisis competitivos de productos y mercados."
    },
    "n8n Workflow Skills": {
      "name": "Habilidades de flujo de trabajo n8n",
      "desc": "Habilidad de automatización n8n: generar RSS → resumen de IA → correo electrónico/Feishu y otros JSON de flujo de trabajo para acelerar la construcción de canales de operación."
    },
    "Stagehand": {
      "name": "tramoyista",
      "desc": "Browserbase Stagehand: el lenguaje natural impulsa las operaciones del navegador, escribe automáticamente guiones de Playwright y realiza la verificación."
    },
    "LaTeX Paper Skills": {
      "name": "Habilidades con papel LaTeX",
      "desc": "Habilidades en trabajos académicos: plantilla LaTeX, formato de fórmulas, referencia BibTeX y redacción de cartas de respuesta a reseñas."
    },
    "Zapier Automation Skills": {
      "name": "Habilidades de automatización de Zapier",
      "desc": "Habilidad de integración de Zapier: describa desencadenantes y acciones, genere borradores de Zap y listas de prueba, y conéctese a más de 7000 aplicaciones."
    }
  }
} });
})();
