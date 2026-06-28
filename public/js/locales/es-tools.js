/* ES overlays — tools */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('es', {
    appCategories: {
        "对话助手": "Asistentes de chat",
        "编程开发": "Codificación y desarrollo",
        "图像创作": "Creación de imágenes",
        "视频音频": "Productividad",
        "办公效率": "Productividad de la oficina",
        "Agent 自动化": "Automatización de agentes",
        "搜索研究": "Búsqueda e investigación",
        "全部": "Propósito general"
      },
      apps: [
        {
          category: "Asistentes de chat",
          desc: "La IA conversacional de propósito general de OpenAI. GPT-4o admite texto, imagen y voz multimodal. Fuerte en escritura, análisis, codificación y lluvia de ideas con un rico ecosistema de complementos.",
          tags: [
            "Propósito general",
            "Multimodal",
            "Complementos"
          ],
          features: [
            "Generación de imágenes DALL·E",
            "Generación de imágenes DALL·E",
            "Generación de imágenes DALL·E",
            "chat de voz"
          ],
          bestFor: "El GPT-4o mini gratuito es suficiente para la mayoría de las tareas; considere Plus ($20/mes) para trabajos complejos.",
          tip: "El GPT-4o mini gratuito es suficiente para la mayoría de las tareas; considere Plus ($20/mes) para trabajos complejos."
        },
        {
          category: "Asistentes de chat",
          desc: "Creado por Anthropic, conocido por su contexto extenso (200K), seguridad y escritura refinada. Claude 3.5 Sonnet sobresale en codificación y escritura; Artifacts le permite obtener una vista previa del código y los documentos en vivo.",
          tags: [
            "texto largo",
            "Seguridad",
            "Escribiendo"
          ],
          features: [
            "Contexto 200K",
            "Vista previa de artefactos",
            "Análisis de PDF",
            "Generación de código"
          ],
          bestFor: "Documentos extensos, redacción y desarrollo de código.",
          tip: "La mejor elección para contratos, documentos y bases de código; Pro cuesta $20/mes."
        },
        {
          category: "Asistentes de chat",
          desc: "El asistente de inteligencia artificial de Google está profundamente integrado con la Búsqueda, Gmail, Docs y YouTube. Gemini 2.0 admite interacción multimodal en tiempo real y contexto de millones de tokens.",
          tags: [
            "Integración de búsqueda",
            "Multimodal",
            "Gratis"
          ],
          features: [
            "Integración del ecosistema de Google",
            "Búsqueda en tiempo real",
            "Interacción multimodal",
            "Contexto ultralargo"
          ],
          bestFor: "Usuarios del ecosistema de Google que necesitan información en vivo",
          tip: "Si ya usa Gmail/Docs, el nivel gratuito es muy capaz."
        },
        {
          category: "Asistentes de chat",
          desc: "De Alibaba con fuerte comprensión china. Qwen2.5 lidera en muchos puntos de referencia. Tongyi Wanxiang se encarga de la imagen y el vídeo; Tongyi Lingma ayuda con la codificación.",
          tags: [
            "Chino",
            "Doméstico",
            "Gratis"
          ],
          features: [
            "optimización china",
            "Capacidad de código",
            "Imágenes de Tongyi Wanxiang",
            "API abierta"
          ],
          bestFor: "No se necesita VPN; generosa cuota gratuita para los escenarios chinos.",
          tip: "No se necesita VPN; generosa cuota gratuita para los escenarios chinos."
        },
        {
          category: "Asistentes de chat",
          desc: "Asistente de inteligencia artificial de Baidu con ricos corpus chinos en ERNIE 4.0, que integra Búsqueda, Wenku, Maps y más. Fuerte en preguntas y respuestas chinas y creación de contenido.",
          tags: [
            "Chino",
            "Buscar",
            "Doméstico"
          ],
          features: [
            "Integración de búsqueda de Baidu",
            "escritura china",
            "Multimodal",
            "Mercado de complementos"
          ],
          bestFor: "Creación de contenidos chinos y búsqueda de conocimientos.",
          tip: "Genial cuando necesitas información web china."
        },
        {
          category: "Asistentes de chat",
          desc: "De Moonshot AI, famoso por su contexto ultralargo (hasta 2 millones de caracteres). Maneja libros completos, informes extensos y grandes bases de código con una sólida búsqueda web.",
          tags: [
            "Contexto ultralargo",
            "Chino",
            "Lectura"
          ],
          features: [
            "Contexto de 2 millones de caracteres",
            "búsqueda web",
            "análisis de archivos",
            "Comprensión del código"
          ],
          bestFor: "Análisis de documentos muy extensos y lectura de literatura.",
          tip: "Úselo cuando necesite analizar un libro completo o un PDF de gran tamaño."
        },
        {
          category: "Asistentes de chat",
          desc: "De DeepSeek con un rendimiento líder en código abierto y un razonamiento destacado de DeepSeek-R1. El precio de la API es extremadamente competitivo (~1/50 de GPT-4) con soporte de implementación local.",
          tags: [
            "Código abierto",
            "Razonamiento",
            "Valor"
          ],
          features: [
            "R1 razonamiento profundo",
            "Abierto y desplegable",
            "Costo API muy bajo",
            "Codificación fuerte"
          ],
          bestFor: "Desarrolladores, usuarios preocupados por los costos y tareas que requieren mucho razonamiento",
          tip: "El favorito de los desarrolladores; Los costos de integración API son mínimos."
        },
        {
          category: "Codificación y desarrollo",
          desc: "Asistente de codificación de IA de Microsoft/OpenAI integrado en VS Code, JetBrains y otros IDE. Finalización en tiempo real, explicación lógica, funciones y pruebas unitarias.",
          tags: [
            "integración IDE",
            "Terminación",
            "microsoft"
          ],
          features: [
            "Finalización de línea/bloque",
            "Charlar",
            "Multi-idioma",
            "Espacio de trabajo del copiloto"
          ],
          bestFor: "Aceleración y finalización diaria de la codificación",
          tip: "Esencial para programadores; Los estudiantes y contribuyentes de OSS pueden solicitar acceso gratuito."
        },
        {
          category: "Codificación y desarrollo",
          desc: "Editor de código nativo de IA (basado en VS Code) que comprende el contexto completo del proyecto. El modo agente puede completar de forma autónoma la codificación, depuración y refactorización de varios archivos.",
          tags: [
            "IDE de IA",
            "Todo el proyecto",
            "Agente"
          ],
          features: [
            "Indexación de proyectos completos",
            "Codificación de agente autónomo",
            "Cambio multimodelo",
            "Integración de terminales"
          ],
          bestFor: "Desarrollo a nivel de proyecto con asistencia de IA",
          tip: "Altamente recomendado para desarrolladores que desean un importante impulso de productividad."
        },
        {
          category: "Codificación y desarrollo",
          desc: "IDE de IA de Codeium. El modo de agente en cascada comprende el código base, planifica y ejecuta tareas de codificación de varios pasos con una generosa cuota gratuita.",
          tags: [
            "Agente",
            "Archivo múltiple",
            "Cuota libre"
          ],
          features: [
            "Agente en cascada",
            "Comprensión del código base",
            "Edición de varios archivos",
            "Gran nivel gratuito"
          ],
          bestFor: "Proyectos de desarrollo impulsados ​​por IA",
          tip: "Fuerte competidor de cursores; Las funciones principales funcionan en el plan gratuito."
        },
        {
          category: "Codificación y desarrollo",
          desc: "Agente de codificación de IA terminal de Anthropic con un profundo conocimiento de la base del código. Admite ediciones de varios archivos, ejecuciones de prueba, operaciones de Git y ganchos/complementos personalizados. Sobresale en refactorizaciones de contexto largo.",
          tags: [
            "Agente terminal",
            "Contexto largo",
            "antrópico"
          ],
          features: [
            "Indexación de repositorio completo",
            "Ediciones autónomas de varios archivos",
            "Ganchos/extensiones de complementos",
            "Fuertes refactores complejos"
          ],
          bestFor: "Flujos de trabajo de terminal, refactores complejos, usuarios del ecosistema Claude",
          tip: "Requiere Claude Pro/Max; Lo mejor para desarrolladores que utilizan CLI primero y desean un poder de agente profundo."
        },
        {
          category: "Codificación y desarrollo",
          desc: "Agente de codificación CLI oficial de OpenAI basado en los modelos de la serie GPT-5. Planifica, escribe, prueba y confirma código localmente o en entornos limitados de nube. Admite MCP y tareas autónomas de varios pasos.",
          tags: [
            "CLI",
            "OpenAI",
            "Modo dual terminal/nube"
          ],
          features: [
            "Modo dual terminal/nube",
            "Tareas del agente autónomo",
            "Integración de herramientas MCP",
            "Integración profunda de GitHub"
          ],
          bestFor: "Suscriptores de OpenAI que automatizan procesos de codificación",
          tip: "Incluido con ChatGPT Plus/Pro; Ejecute Codex en la terminal para iniciar las tareas del Agente."
        },
        {
          category: "Codificación y desarrollo",
          desc: "Entorno de desarrollo de IA de terminal de xAI (Grok CLI) con modo Plan, subagentes paralelos, especificaciones de proyecto AGENTS.md y acceso al servidor MCP para un desarrollo complejo de varios pasos.",
          tags: [
            "CLI",
            "Modo de plan",
            "Subagentes"
          ],
          features: [
            "Planificación del modo de plan",
            "Subagentes paralelos",
            "Soporte de AGENTES.md",
            "Integración MCP"
          ],
          bestFor: "Usuarios de xAI, desarrollo de agentes de varios pasos, flujos de trabajo de terminal",
          tip: "Requiere SuperGrok o X Premium+; coloque AGENTS.md en la raíz del proyecto para personalizar el comportamiento del Agente."
        },
        {
          category: "Codificación y desarrollo",
          desc: "ADE",
          tags: [
            "Doméstico",
            "ADE",
            "horizonte largo"
          ],
          features: [
            "Alimentado por GLM-5.2",
            "Modo dual escritorio/remoto",
            "Bot Feishu/WeChat",
            "Tareas del agente a largo plazo"
          ],
          bestFor: "Desarrolladores nacionales, ecosistema Zhipu, codificación colaborativa remota",
          tip: "Descargar en zcode.z.ai; fuerte para escenarios chinos y tareas largas, no se necesita VPN."
        },
        {
          category: "Codificación y desarrollo",
          desc: "La herramienta de codificación CLI AI de código abierto de Google. Inicie sesión con una cuenta de Google; generosa cuota gratuita (~1000 llamadas/día). Generación de código, operaciones de archivos, comandos de shell y base de búsqueda.",
          tags: [
            "CLI",
            "Código abierto",
            "Cuota libre"
          ],
          features: [
            "inicio de sesión de cuenta de Google",
            "Cuota libre alta",
            "Operaciones de shell/archivo",
            "Búsqueda de puesta a tierra"
          ],
          bestFor: "Usuarios preocupados por su presupuesto, ecosistema de Google, exploración de agentes CLI",
          tip: "instalación npm -g @google/gemini-cli; El nivel gratuito es muy competitivo entre las herramientas CLI."
        },
        {
          category: "Codificación y desarrollo",
          desc: "Programación de pares de IA de código abierto en la terminal con GPT/Claude/DeepSeek o cualquier modelo de API. Integración profunda con Git: confirmación automática de cada cambio, edición de diferencias de varios archivos. Más de 39.000 estrellas de GitHub.",
          tags: [
            "Código abierto",
            "BIOK",
            "nativo de Git"
          ],
          features: [
            "Cualquier modelo API",
            "Confirmación automática de Git",
            "Diferencia de varios archivos",
            "Independiente del idioma"
          ],
          bestFor: "Desarrolladores con sus propias claves API que valoran la historia de Git",
          tip: "instalación de pip Aider-Chat; traiga su propia clave API: una alternativa abierta y liviana a Cursor."
        },
        {
          category: "Codificación y desarrollo",
          desc: "Extensión VS Code de código abierto que conecta cualquier API LLM. El modo agente puede leer/escribir archivos, ejecutar comandos de terminal y navegar por la web. Planificar/Actuar paso a paso de ejecución.",
          tags: [
            "Código VS",
            "Código abierto",
            "BIOK"
          ],
          features: [
            "Modo Planificar/Actuar",
            "Ejecución de comandos de terminal",
            "Asistencia del navegador",
            "Usuarios de VS Code que quieran elegir sus propios modelos"
          ],
          bestFor: "Usuarios de VS Code que quieran elegir sus propios modelos",
          tip: "Buscar Cline en Extensiones; conecte Anthropic/OpenAI/Ollama sin cambiar de editor."
        },
        {
          category: "Codificación y desarrollo",
          desc: "Asistente de codificación de IA de código abierto para VS Code y JetBrains. Modo de finalización de pestañas, chat y agente. Los equipos pueden compartir modelos y reglas para una implementación empresarial gradual.",
          tags: [
            "IDE múltiple",
            "Código abierto",
            "Amigable con el equipo"
          ],
          features: [
            "Código VS + JetBrains",
            "Completar tabulación",
            "Agentes personalizados",
            "Configuración de equipo compartido"
          ],
          bestFor: "Instalar desde continue.dev; config.yaml puede apuntar a su API o a Ollama local.",
          tip: "Instalar desde continue.dev; config.yaml puede apuntar a su API o a Ollama local."
        },
        {
          category: "Codificación y desarrollo",
          desc: "Asistente de codificación de IA de AWS como complemento IDE y CLI, profundamente integrado con documentos y SDK de AWS. Generación de código, escaneo de seguridad, conversión de código (por ejemplo, actualizaciones de Java) y tareas del agente.",
          tags: [
            "CLI+IDE",
            "CLI+IDE",
            "Empresa"
          ],
          features: [
            "Integración de conocimientos de AWS",
            "Escaneo de seguridad de código",
            "Conversión de código",
            "Nivel gratuito disponible"
          ],
          bestFor: "Desarrollo de la nube de AWS, cumplimiento empresarial, migración de Java/.NET",
          tip: "Habilite gratis en la consola de AWS; El comando CLI q inicia las tareas del Agente en la terminal."
        },
        {
          category: "Codificación y desarrollo",
          desc: "Herramienta completa StackBlitz AI: describe una aplicación web en lenguaje natural (React, Vue, Node, etc.) y obtén una aplicación ejecutable con vista previa e implementación en el navegador.",
          tags: [
            "Pila completa",
            "Navegador",
            "Configuración cero"
          ],
          features: [
            "Generación de aplicaciones de una frase",
            "IDE en el navegador",
            "Vista previa en vivo",
            "Implementación con un clic"
          ],
          bestFor: "Prototipos rápidos, sitios no programadores, validación MVP",
          tip: "Los no programadores pueden enviar una aplicación web ejecutable en 10 minutos, lo cual es excelente para validar ideas."
        },
        {
          category: "Creación de imágenes",
          desc: "Herramienta artística de IA de primer nivel a través de Discord o Web. Estilo artístico y calidad de imagen líderes en la industria con una comunidad activa y diversa.",
          tags: [
            "Discordia",
            "Arte",
            "Alta calidad"
          ],
          features: [
            "Calidad de primer nivel",
            "Diversos estilos",
            "Inspiración comunitaria",
            "HD de lujo"
          ],
          bestFor: "Creación de arte, diseño conceptual, exploración visual.",
          tip: "Lo mejor para el impacto visual; aprenda manualidades rápidas: desde $ 10 al mes."
        },
        {
          category: "Creación de imágenes",
          desc: "Modelo de imagen OpenAI integrado en ChatGPT. Destaca en indicaciones de texto complejas y precisas con una representación de texto sólida.",
          tags: [
            "ChatGPT",
            "Preciso",
            "Fácil"
          ],
          features: [
            "Comprensión precisa del texto",
            "Integración ChatGPT",
            "Representación de texto",
            "Barrera cero"
          ],
          bestFor: "Imágenes rápidas para usuarios de ChatGPT",
          tip: "Cero configuración adicional si ya usa ChatGPT."
        },
        {
          category: "Creación de imágenes",
          desc: "Modelo de imagen de código abierto con implementación local y un enorme ecosistema comunitario. Ajuste LoRA, precisión ControlNet, control total sobre la generación.",
          tags: [
            "Código abierto",
            "Local",
            "Personalizable"
          ],
          features: [
            "Despliegue local",
            "Ajuste de LoRA",
            "ControlNet",
            "Modelos comunitarios masivos"
          ],
          bestFor: "Creadores con GPU que quieren control total",
          tip: "Necesita cierta habilidad técnica, pero la mejor libertad y costo a largo plazo."
        },
        {
          category: "Productividad",
          desc: "La herramienta de video AI de Kuaishou con texto a video e imagen a video. Física natural y movimiento; líder en generación de vídeo nacional.",
          tags: [
            "Video",
            "Doméstico",
            "Fácil"
          ],
          features: [
            "Texto a vídeo",
            "Imagen a vídeo",
            "movimiento natural",
            "Cuota diaria gratuita"
          ],
          bestFor: "Creación de videos nacionales y contenido de formato corto.",
          tip: "Selección de vídeos nacional superior con cuota diaria gratuita."
        },
        {
          category: "Productividad",
          desc: "Plataforma de vídeo profesional de IA. Gen-3 Alpha lidera en calidad. También ofrece edición, eliminación de fondo, seguimiento de movimiento y herramientas profesionales.",
          tags: [
            "Profesional",
            "Edición",
            "Generación 3"
          ],
          features: [
            "Generación de vídeo Gen-3",
            "paquete de edición de vídeo",
            "Seguimiento de movimiento",
            "Eliminación de pantalla verde"
          ],
          bestFor: "Creadores de vídeos profesionales y profesionales del cine y la televisión.",
          tip: "Ideal para creadores de contenido y profesionales del cine."
        },
        {
          category: "Productividad",
          desc: "Herramienta de música con IA: describe un estilo y obtén una canción completa con voces y acompañamiento en múltiples estilos e idiomas.",
          tags: [
            "Música",
            "Voz",
            "Creación"
          ],
          features: [
            "Generación de canciones completa",
            "Múltiples estilos",
            "interpretación vocal",
            "Ampliar/continuar"
          ],
          bestFor: "Pistas de demostración rápidas y música de fondo.",
          tip: "Prueba: \"Una canción pop alegre sobre el verano\" y genera."
        },
        {
          category: "Productividad de la oficina",
          desc: "Asistente de IA integrado en Notion para escribir, resumir, traducir y generar ideas, perfectamente vinculado a notas y bases de datos.",
          tags: [
            "Notas",
            "Colaboración",
            "Integrado"
          ],
          features: [
            "Redacción de documentos",
            "Resumen",
            "Traducción",
            "IA de base de datos"
          ],
          bestFor: "Los usuarios de Notion aumentan la eficiencia de los documentos",
          tip: "Imprescindible para los usuarios de Notion: $10 al mes por miembro."
        },
        {
          category: "Productividad de la oficina",
          desc: "Generador de presentaciones y documentos impulsado por IA. Ingrese un esquema o tema para obtener diapositivas pulidas con temas y diseños.",
          tags: [
            "Diapositivas",
            "Diseño",
            "Rápido"
          ],
          features: [
            "Generación de diapositivas AI",
            "Múltiples temas",
            "Compartir en línea",
            "Medios integrados"
          ],
          bestFor: "Informes rápidos, propuestas y presentaciones de cursos",
          tip: "Ingrese un tema: plataforma completa en 30 segundos. Salvavidas antes de los plazos."
        },
        {
          category: "Búsqueda e investigación",
          desc: "Motor de búsqueda de IA con respuestas citadas directas en lugar de listas de enlaces. Pro Search para una investigación profunda: ideal para el trabajo académico.",
          tags: [
            "Buscar",
            "Citas",
            "Investigación"
          ],
          features: [
            "Respuestas citadas",
            "Búsqueda profunda profesional",
            "Elección de varios modelos",
            "Información en tiempo real"
          ],
          bestFor: "Investigación rápida, estudio académico, verificación de hechos.",
          tip: "Úselo en lugar de Google para realizar investigaciones, pero siempre verifique las citas."
        },
        {
          category: "Búsqueda e investigación",
          desc: "Cuaderno de IA de Google: cargue archivos PDF/docs, charle con materiales, genere resúmenes y convierta contenido en podcasts de IA (Descripción general de audio).",
          tags: [
            "Documentos",
            "Resumen",
            "Podcast"
          ],
          features: [
            "Chat de documentos",
            "Resumen automático",
            "Generación de podcasts de IA",
            "Análisis de múltiples documentos"
          ],
          bestFor: "Leer artículos, reseñas de literatura, aprender material nuevo.",
          tip: "Cargue un artículo y haga preguntas: la función de podcast es creativa y útil."
        },
        {
          category: "Productividad",
          desc: "Plataforma de voz líder en IA con clonación de voz instantánea, TTS en más de 29 idiomas, doblaje y producción de podcasts.",
          tags: [
            "Clon de voz",
            "tts",
            "Doblaje"
          ],
          features: [
            "Clon de muestra de 1 minuto",
            "Lectura multilingüe en voz alta",
            "Control del tono emocional",
            "Integración API"
          ],
          bestFor: "Clonación de tu voz, doblaje de vídeos, contenidos de audio.",
          tip: "Grabe en una habitación tranquila; De 1 a 3 minutos de voz seca son suficientes para clonar."
        },
        {
          category: "Productividad",
          desc: "Síntesis y clonación de voz por IA nacional con pronunciación china natural. Clonación cero o de pocas posibilidades para creadores nacionales.",
          tags: [
            "Clon de voz",
            "Chino",
            "Doméstico"
          ],
          features: [
            "optimización china",
            "Clonación de voz",
            "Síntesis emocional",
            "Cuota libre"
          ],
          bestFor: "Doblaje chino, locución de vídeos cortos, usuarios domésticos.",
          tip: "Pruebe primero en escenarios chinos: no se necesita VPN."
        },
        {
          category: "Automatización de agentes",
          desc: "Puerta de enlace de AI Agent de código abierto con programación Cron, activadores de Webhook y entrega multicanal (Telegram/Slack/Discord/Feishu) para investigación, monitoreo e informes autónomos.",
          tags: [
            "Código abierto",
            "Programado",
            "Multicanal"
          ],
          features: [
            "programación cron",
            "Tareas de agentes aislados",
            "Integración de webhooks",
            "Empuje multicanal"
          ],
          bestFor: "Resúmenes programados, investigación automática, antecedentes Orquestación de agentes",
          tip: "Primero ejecute openclaw doctor y luego cree cron para las tareas programadas."
        },
        {
          category: "Automatización de agentes",
          desc: "Aplicación LLM de código abierto y plataforma Agent con flujos de trabajo visuales, bases de conocimiento RAG, llamadas de herramientas y publicación de API. Autohospedable; Más de 60.000 estrellas de GitHub.",
          tags: [
            "Código abierto",
            "Flujo de trabajo",
            "RAG"
          ],
          features: [
            "Orquestación del agente visual",
            "RAG de base de conocimientos",
            "Integración de herramienta/API",
            "Autohospedable"
          ],
          bestFor: "Agentes de base de conocimientos empresariales y aplicaciones de IA personalizadas",
          tip: "Pruebe cloud.dify.ai gratis; Docker autohospedado para un control total de los datos."
        },
        {
          category: "Automatización de agentes",
          desc: "Constructor de robots visuales",
          tags: [
            "Constructor de robots visuales",
            "Doméstico",
            "Multicanal"
          ],
          features: [
            "Constructor de robots visuales",
            "Complementos y flujos de trabajo",
            "Publicación de Feishu/WeChat",
            "Generosa cuota gratuita"
          ],
          bestFor: "Bots rápidos de servicio al cliente/asistente, colaboración en equipo nacional",
          tip: "coze.cn no necesita VPN; comience desde una plantilla de asistente personal y luego agregue complementos."
        },
        {
          category: "Automatización de agentes",
          desc: "Automatización abierta del flujo de trabajo con nodos profundos de AI Agent. Conecte más de 400 servicios; Autohospedable: incorpore LLM en correos electrónicos, hojas de cálculo, CRM y canales de negocios.",
          tags: [
            "Código abierto",
            "Flujo de trabajo",
            "Autohospedable"
          ],
          features: [
            "Más de 400 integraciones de aplicaciones",
            "Nodos del agente de IA",
            "editor de flujo visual",
            "Autohospedable"
          ],
          bestFor: "Automatización empresarial, orquestación entre sistemas, equipos técnicos.",
          tip: "Nube gratuita en n8n.io; Docker autohospedado para datos confidenciales; comience desde plantillas de IA."
        },
        {
          category: "Automatización de agentes",
          desc: "Agente de IA general que planifica y ejecuta de forma autónoma tareas de varios pasos: navegar por la web, escribir documentos, ejecutar código y compilar informes. De principio a fin \"dale un objetivo, obtén un resultado\".",
          tags: [
            "Agente General",
            "Autónomo",
            "Varios pasos"
          ],
          features: [
            "Planificación autónoma de tareas",
            "Navegación web y operación",
            "Salida de código/documento",
            "Tareas largas asíncronas"
          ],
          bestFor: "Describe el objetivo, no los pasos, p.e. \"Resumir las noticias sobre IA de la semana pasada como Markdown\"; Revisa siempre los resultados.",
          tip: "Describe el objetivo, no los pasos, p.e. \"Resumir las noticias sobre IA de la semana pasada como Markdown\"; Revisa siempre los resultados."
        },
        {
          category: "Asistentes de chat",
          desc: "Asistente de ByteDance AI en el modelo Doubao con diálogo natural en chino. Integración profunda de Douyin y Feishu; comprensión y creación multimodal; gran base de usuarios domésticos.",
          tags: [
            "Chino",
            "Doméstico",
            "Multimodal"
          ],
          features: [
            "diálogo chino",
            "Comprensión de imagen/video",
            "integración feishu",
            "Generosa cuota gratuita"
          ],
          bestFor: "Chat diario, creación de contenido, colaboración en la oficina en China",
          tip: "Los usuarios de Douyin/Feishu obtienen un acceso perfecto; La web y la aplicación son gratuitas."
        },
        {
          category: "Asistentes de chat",
          desc: "Asistente xAI integrado con X (Twitter). Conocido por su información y humor en tiempo real; Grok 3 es fuerte en matemáticas y razonamiento con el modo DeepSearch.",
          tags: [
            "En tiempo real",
            "integración x",
            "Razonamiento"
          ],
          features: [
            "X alimentación en tiempo real",
            "Modo de búsqueda profunda",
            "Comprensión multimodal",
            "Código y matemáticas"
          ],
          bestFor: "Seguimiento de tendencias, análisis de redes sociales, noticias en vivo.",
          tip: "Modelo de imagen abierta de Black Forest Labs. Flux.1 sobresale en calidad, representación de texto y estructura humana; Implementación local y API disponibles."
        },
        {
          category: "Creación de imágenes",
          desc: "Modelo de imagen abierta de Black Forest Labs. Flux.1 sobresale en calidad, representación de texto y estructura humana; Implementación local y API disponibles.",
          tags: [
            "Código abierto",
            "Alta calidad",
            "Representación de texto"
          ],
          features: [
            "Calidad de primer nivel",
            "Representación de texto precisa",
            "Abierto y desplegable",
            "Ecosistema LoRA"
          ],
          bestFor: "Ilustración de alta calidad, diseño comercial, generación local.",
          tip: "API a través de Replicate, fal.ai, etc., o ejecútela localmente en ComfyUI."
        },
        {
          category: "Productividad",
          desc: "Modelo de vídeo OpenAI con texto a vídeo e imagen a vídeo. Coherencia y realismo físico líderes en la industria. Sora Turbo es mucho más rápido.",
          tags: [
            "OpenAI",
            "Alta calidad",
            "Realismo físico"
          ],
          features: [
            "Texto/imagen a vídeo",
            "Hasta 20 segundos",
            "Edición de remezclas",
            "Tomas del guión gráfico"
          ],
          bestFor: "Requiere ChatGPT Plus/Pro; Describe el movimiento de la cámara y la iluminación para obtener mejores resultados.",
          tip: "Requiere ChatGPT Plus/Pro; Describe el movimiento de la cámara y la iluminación para obtener mejores resultados."
        },
        {
          category: "Productividad de la oficina",
          desc: "Asistente de Microsoft AI integrado con Word, Excel, PowerPoint, Outlook, Teams. Basado en GPT-4o: genere, edite y analice documentos y datos en Office.",
          tags: [
            "Oficina",
            "microsoft",
            "Empresa"
          ],
          features: [
            "Word/Excel/PPT IA",
            "asistente de correo de Outlook",
            "Resumen de la reunión de equipos",
            "Integración de datos empresariales"
          ],
          bestFor: "Usuarios de Office 365 y ofimática empresarial",
          tip: "Sin publicidad"
        },
        {
          category: "Búsqueda e investigación",
          desc: "Sin publicidad",
          tags: [
            "Buscar",
            "Doméstico",
            "Sin publicidad"
          ],
          features: [
            "Respuestas citadas",
            "Modos académicos/podcast",
            "Generación de mapas mentales",
            "Análisis de carga de archivos"
          ],
          bestFor: "Investigación china, estudio académico y recuperación sin publicidad",
          tip: "Accesible en China; cotejar las citas académicas."
        }
      ],
      handsOnCategories: {
        "全部": "Propósito general",
        "编程开发": "Codificación y desarrollo",
        "图像设计": "Diseño de imagen",
        "视频音频": "Productividad",
        "写作办公": "Escritura y oficina",
        "搜索研究": "Búsqueda e investigación",
        "Agent 自动化": "Automatización de agentes"
      },
      handsOnUi: {
        countShown: "Se muestra {visible} / {total}",
        emptyHint: "No hay casos en esta categoría. Prueba con otra etiqueta.",
        resultLabel: "Obtendrás:",
        tipsLabel: "Consejos:",
        commandPrompt: "Comando/indicador",
        copyToSoftware: "Copiar a {software}",
        openWebsite: "Abrir el sitio web {software}"
      },
      handsOnCases: [
        {
          title: "Construya una calculadora web con Cursor Codex",
          difficulty: "Principiante",
          duration: "~15 minutos",
          desc: "Desde cero, utilice el Codex Agent integrado de Cursor para generar una calculadora HTML ejecutable: experimente la programación de IA \"dígalo una vez → obtenga código ejecutable\".",
          steps: [
            "Instale Cursor, cree la carpeta calc-demo y ábrala en Cursor",
            "Presione Cmd+I (Mac) / Ctrl+I (Win) para abrir el panel Compositor/Agente",
            "Pegue el siguiente mensaje y deje que Codex genere un único index.html",
            "Haga clic derecho en index.html en el explorador → Mostrar en Finder → haga doble clic para abrir en el navegador",
            "Pruebe sumar/restar/multiplicar/dividir; Si hay problemas, seleccione el código y diga: \"Hacer clic en el botón no hace nada; corríjalo\".",
            "(Opcional) Pídale a Codex que agregue entrada de teclado, historial o alternancia de tema oscuro/claro"
          ],
          prompt: "Cree una página web de calculadora limpia y atractiva con HTML + CSS + JavaScript:\n\nCaracterísticas:\n- Admite sumar, restar, multiplicar, dividir y borrar (C)\n- La pantalla muestra la entrada y el resultado en tiempo real\n- Prevenir errores lógicos comunes como el encadenamiento de operadores.\n\nDiseño:\n- Tema oscuro, botones redondeados, respuesta sutil al pasar el cursor\n- Funciona en el móvil\n\nEntregable:\n- Archivo único index.html, que se puede abrir directamente en el navegador.\n- Código con comentarios en inglés.\n- Dime cómo ejecutar y probar al final.",
          result: "Una página web de calculadora en la que se puede hacer doble clic y que realiza aritmética básica.",
          tips: "La primera vez que codifique con IA, concéntrese en: describir → generar → ejecutar → corregir comentarios, no en la perfección en el primer intento."
        },
        {
          title: "Generar imagen de la Estatua de la Libertad con Midjourney",
          difficulty: "Principiante",
          duration: "~10 minutos",
          desc: "Utilice indicaciones en inglés en Midjourney para una toma cinematográfica de la Estatua de la Libertad y aprenda los parámetros y conceptos básicos de conversión de texto a imagen.",
          steps: [
            "Regístrese en Midjourney, abra Crear en midjourney.com (o Discord #general)",
            "Haga clic en ingresar, escriba /imagine (la Web puede pegar el mensaje directamente)",
            "Pegue el mensaje en inglés a continuación, envíelo y espere entre 30 y 60 segundos para 4 candidatos",
            "Haga clic en U1–U4 para mejorar el favorito; 🔄 para regenerarse si es necesario",
            "V1–V4 para variantes, o modifique la relación --ar y vuelva a intentarlo",
            "Haga clic con el botón derecho en guardar imagen HD para diapositivas, artículos o referencia de diseño."
          ],
          prompt: "Estatua de la Libertad en la Isla de la Libertad, puerto de Nueva York, puesta de sol en la hora dorada, toma panorámica cinematográfica, nubes dramáticas, luz cálida reflejada en el agua, fotorrealista, muy detallada, 8k --ar 16:9 --v 6",
          result: "Una imagen cinematográfica HD de la Estatua de la Libertad 16:9 para demostraciones o diseño.",
          tips: "Midjourney funciona mejor en inglés. Orden: sujeto → entorno → luz → estilo → parámetros (--ar, --v)."
        },
        {
          title: "Imagen rápida con ChatGPT + DALL·E 3 (sin Discord)",
          difficulty: "Principiante",
          duration: "~5 minutos",
          desc: "Omita Discord: use lenguaje natural en ChatGPT con DALL·E 3 para la Estatua de la Libertad. Introducción de texto a imagen más rápida.",
          steps: [
            "Open ChatGPT (Plus/Team para DALL·E 3; el nivel gratuito tiene una cuota de imágenes limitada)",
            "ChatGPT llama a DALL·E automáticamente, entre 10 y 20 segundos para obtener el resultado",
            "ChatGPT llama a DALL·E automáticamente, entre 10 y 20 segundos para obtener el resultado",
            "Si la composición está desactivada, responda: \"Acercar la cara de la estatua, desenfocar el fondo\".",
            "Haga clic en la imagen para descargar PNG para artículos, diapositivas o redes sociales."
          ],
          prompt: "Utilice DALL·E para generar una imagen:\n\nAsunto: Estatua de la Libertad en la hora dorada, toma panorámica cinematográfica desde el puerto, nubes espectaculares, reflejos en el agua cálida.\n\nEstilo: Fotorrealista, alto nivel de detalle, adecuado como portada de artículo.\n\nRelación de aspecto: Paisaje 16:9.",
          result: "ChatGPT entiende tu idioma y traduce para DALL·E. Iterar \"qué conservar/evitar\" es mejor que reescribir todo el mensaje.",
          tips: "ChatGPT entiende tu idioma y traduce para DALL·E. Iterar \"qué conservar/evitar\" es mejor que reescribir todo el mensaje."
        },
        {
          title: "Clona tu voz con ElevenLabs",
          difficulty: "Intermedio",
          duration: "~20 minutos",
          desc: "Cargue una grabación de voz seca, cree un modelo de voz personal y luego lea cualquier texto: flujo de trabajo completo de clonación de voz.",
          steps: [
            "Regístrate ElevenLabs → Voice Lab → Clonación de voz instantánea",
            "Grabe notas de voz secas de 1 a 3 minutos en el teléfono: habitación tranquila, sin música, ritmo normal",
            "Cargar, nombrar voz (por ejemplo, mi-voz), aceptar términos de clonación, crear",
            "Texto a voz → seleccione voz clonada",
            "Pegue el texto de prueba a continuación, genere y escuche",
            "Descargue MP3 para doblaje de video o introducción de podcast"
          ],
          prompt: "Hola a todos, soy [tu apodo]. Esta es mi prueba de voz clonada por IA.\n\nHace buen tiempo hoy. Leeré una breve introducción: La inteligencia artificial está cambiando la forma en que aprendemos, trabajamos y creamos. Espero que esto suene natural, claro y amigable.\n\n¡Gracias por escuchar!",
          result: "Modelo reutilizable \"tu voz\": escribe cualquier texto para obtener audio doblado.",
          tips: "La calidad depende de la grabación: volumen silencioso y constante, sin estallidos explosivos. Solo clona voces que tengas derecho a usar."
        },
        {
          title: "Clonar voz china con Fish Audio (nacional)",
          difficulty: "Intermedio",
          duration: "~15 minutos",
          desc: "Los usuarios domésticos pueden clonar la voz en chino de forma natural, ideal para locuciones en off de vídeos cortos y doblaje al chino.",
          steps: [
            "Regístrese en fish.audio → Clonar voz / Crear voz",
            "Cargue voz seca en chino de 30 a 3 minutos (leer noticia o artículo)",
            "Nombra y crea voz, espera de 1 a 5 minutos para el entrenamiento",
            "Texto a voz: pegue la copia de prueba a continuación",
            "Seleccione nueva voz, ajuste la velocidad, genere",
            "Escuche y descargue; compárelo con ElevenLabs para su caso de uso chino"
          ],
          prompt: "Hola a todos, bienvenidos a las notas de aprendizaje de IA de hoy.\n\nEsta sección cubre la IA práctica con software real. No necesitas toda la teoría primero: aprende realizando tareas reales.\n\nSi es útil, dale me gusta y guarda.",
          result: "Prueba de audio en chino en tu voz para comparar locuciones.",
          tips: "Prefiero Fish Audio para la clonación china; Utilice ElevenLabs para doblaje multilingüe/inglés."
        },
        {
          title: "Programe la recopilación de noticias sobre acciones con OpenClaw",
          difficulty: "Avanzado",
          duration: "Configure OpenClaw Cron para ejecutar un agente cada mañana de operaciones para recopilar noticias sobre acciones y enviarlas a Telegram o Slack.",
          desc: "Configure OpenClaw Cron para ejecutar un agente cada mañana de operaciones para recopilar noticias sobre acciones y enviarlas a Telegram o Slack.",
          steps: [
            "Asegúrese de que Gateway se esté ejecutando (programaciones cron dentro de Gateway)",
            "Asegúrese de que Gateway se esté ejecutando (programaciones cron dentro de Gateway)",
            "Edite símbolos, zona horaria e ID de canal en el comando a continuación",
            "Ejecute el comando cron create en la terminal (entre semana 8:30 Asia/Shanghai)",
            "lista cron de openclaw para confirmar; Openclaw cron ejecuta --id <job-id> para el historial",
            "Prueba manual: ejecución cron de openclaw <job-id>, verifique que la inserción sea legible y tenga origen"
          ],
          prompt: "openclaw cron crear \"30 8 * * 1-5\" \\\n  --name \"Resumen diario de noticias sobre acciones\" \\\n  --tz \"Asia/Shanghái\" \\\n  --sesión aislada \\\n  --message \"Usted es un asistente profesional de investigación de inversiones. Reúna y resuma las noticias del mercado de hoy:\\n\\nLista de seguimiento: CSI 300, CATL (300750), Apple (AAPL)\\n\\nSalida (inglés, menos de 400 palabras):\\n1) Titulares macro (máximo 3, con fuentes)\\n2) Movimientos de acciones/sectores (máximo 2 cada uno)\\n3) Lista de seguimiento de hoy (no consejos de inversión, información solamente)\\n\\nSi no hay información confiable, escriba 'Sin actualizaciones importantes'; conserve los nombres de las fuentes, no invente datos.\" \\\n  --anunciar \\\n  --telegrama de canal \\\n  --a \"TU_TELEGRAM_USER_OR_CHANNEL_ID\"",
          result: "Los resultados son sólo de referencia, no de consejos de inversión. Pruebe el canal de mensajes antes de publicarlo.",
          tips: "Los resultados son sólo de referencia, no de consejos de inversión. Pruebe el canal de mensajes antes de publicarlo."
        },
        {
          title: "Genera funciones y pruebas unitarias con GitHub Copilot",
          difficulty: "Principiante",
          duration: "~12 minutos",
          desc: "En VS Code, Copilot completa una función empresarial y Jest prueba la productividad de codificación diaria.",
          steps: [
            "Instale VS Code + GitHub Copilot e inicie sesión",
            "Cree utils/discount.js con un comentario que describa las reglas de descuento",
            "Escriba la función y acepte la finalización de Copilot",
            "Cree utils/discount.test.js, escriba describe para activar la finalización de la prueba",
            "Ejecute la prueba npm (o bromee); pegar errores en el chat para corregirlos",
            "Cambie las reglas en los comentarios (por ejemplo, gaste 200 y ahorre 30) y observe cómo se adapta la finalización"
          ],
          prompt: "// Calcular el descuento del pedido: gastar 100 ahorrar 10, gastar 200 ahorrar 30, sin cantidades negativas\n// Devuelve el objeto {original, descuento, final}\nfunción calcDescuento(monto) {\n  // El copiloto completa desde aquí\n}",
          result: "Función de descuento ejecutable + pruebas unitarias básicas; Aprenda a completar mediante comentarios.",
          tips: "Copilot responde mejor a comentarios y tipos de funciones claros; Mantenga las pruebas junto a la implementación."
        },
        {
          title: "Agregue modo oscuro en todo el sitio con Windsurf",
          difficulty: "Intermedio",
          duration: "~ 25 minutos",
          desc: "Utilice Windsurf Cascade Agent para comprender un pequeño proyecto frontend y agregar variables CSS + alternancia de tema entre archivos.",
          steps: [
            "Abra Windsurf en un pequeño proyecto de práctica index.html + estilos.css",
            "Abra Cascade, pegue la descripción de la tarea a continuación",
            "Deje que el Agente enumere los archivos para cambiar, confirmar y luego ejecutar",
            "Vista previa en el navegador, alternar tema para verificar colores",
            "Si se omitieron los selectores: \"Contraste del encabezado demasiado bajo en modo oscuro\"",
            "Antes de comprometerse, solicite al Agente un breve registro de cambios"
          ],
          prompt: "Agregue alternancia de tema oscuro/claro a este proyecto:\n1) variables CSS para el sistema de color\n2) Botón de alternancia del encabezado, preferencia en localStorage\n3) No rompas el diseño; compatible con dispositivos móviles\n4) Después de los cambios, enumere los archivos modificados y cómo probarlos.",
          result: "Tema oscuro/claro con un solo clic; experimente la colaboración de varios archivos del agente.",
          tips: "Cascade se adapta a cambios consistentes de varios archivos; obtenga un plan antes de \"cambiarlo todo\"."
        },
        {
          title: "Revisar el contrato y señalar los riesgos con Claude.",
          difficulty: "Intermedio",
          duration: "~20 minutos",
          desc: "Cargar contrato en PDF; Claude señala cláusulas de alto riesgo desde la perspectiva de la contraparte: introducción a la práctica legal/de adquisiciones.",
          steps: [
            "Registra Claude, nuevo chat (Pro para archivos PDF más largos)",
            "Cargue el PDF del contrato o pegue las secciones clave",
            "Pegue el mensaje a continuación, especifique que es \"Parte B\"",
            "Leer tabla de riesgos; verificar las referencias de página/sección",
            "Seguimiento: \"Reescribir las cláusulas de alto riesgo como alternativas más equilibradas\"",
            "Exportar para revisión de un colega legal: la revisión de IA no es un abogado"
          ],
          prompt: "Eres un cuidadoso asistente de revisión de contratos. Somos el Partido B.\n\nRevise el contrato cargado y el resultado:\n1) Las 5 principales cláusulas de alto riesgo (cita + motivo)\n2) 3 cláusulas de riesgo medio\n3) Revisión negociable para cada uno.\n4) Cuadro resumen: ubicación | nivel de riesgo | sugerencia\n\nMarque los elementos inciertos como \"Necesita verificación humana\"; No inventes estatutos.",
          result: "Lista de riesgos del contrato estructurado y borrador de negociación.",
          tips: "Claude maneja bien los documentos largos; cargar el texto completo y verificarlo; evitar cuentas públicas para contratos sensibles."
        },
        {
          title: "Redacte un resumen de la industria con búsqueda en tiempo real en Gemini",
          difficulty: "Principiante",
          duration: "~10 minutos",
          desc: "Utilice Gemini + Búsqueda de Google para generar un resumen semanal de la industria con fuentes en las que se puede hacer clic.",
          steps: [
            "Abra gemini.google.com e inicie sesión",
            "Habilite \"Usar la búsqueda de Google\" o similar si está disponible",
            "Pegue el mensaje, cambie la industria a su campo",
            "Verifique que los enlaces de origen estén abiertos; eliminar entradas obsoletas",
            "Solicite \"3 conclusiones ejecutivas + 3 elementos de acción\"",
            "Copiar a Google Docs para la reunión semanal del equipo"
          ],
          prompt: "Investigue novedades importantes en el \"comercio electrónico transfronterizo de China 2026\" durante los últimos 7 días. Genere un resumen en inglés de 400 palabras:\n\n- 3 titulares de esta semana (una frase + fuente cada uno)\n- Impacto en los pequeños vendedores\n- 2 variables para observar la próxima semana\n\nCitar fuentes verificables; si no hay ninguno, escriba \"Ninguno\".",
          result: "Resumen de la industria obtenido listo para stand-up o boletín interno.",
          tips: "La fortaleza de Gemini es la integración de búsquedas; aún así, haga clic en cada fuente para verificar."
        },
        {
          title: "Escribe una publicación al estilo Xiaohongshu con Qwen",
          difficulty: "Principiante",
          duration: "~8 minutos",
          desc: "Utilice Qwen para textos al estilo Xiaohongshu种草 con título, cuerpo, etiquetas y sugerencias de portada.",
          steps: [
            "Abre Qwen, nuevo chat.",
            "Complete los puntos de venta de productos reales rápidamente (sin afirmaciones exageradas)",
            "Solicite una \"versión A/B más corta y conversacional\"",
            "Solicite 3 fotos de portada/ideas de generación",
            "Copie 5 etiquetas de temas; comprobar las reglas de la plataforma",
            "Revisión humana de palabras sensibles a la ley publicitaria antes de publicarlas"
          ],
          prompt: "Producto: “Taza de café portátil para preparar en frío”. Puntos de venta: preparación de 5 minutos, protección térmica de doble pared, aspecto minimalista.\n\nEscribe una publicación al estilo Xiaohongshu:\n1) 3 títulos dignos de hacer clic\n2) ~250 palabras, primera persona, conversacional, emoji ligero\n3) 5 hashtags\n4) CTA de un comentario\n\nCumplimiento: no hay superlativos como \"mejor\" o \"n.º 1\".",
          result: "Borrador de publicación y etiquetas de Xiaohongshu listas para editar y publicar.",
          tips: "Qwen tiene buen tono chino; agregue detalles de la experiencia real o se sentirá genérico."
        },
        {
          title: "Informe anual de 100 páginas de lectura profunda con Kimi",
          difficulty: "Intermedio",
          duration: "~ 25 minutos",
          desc: "Abra Kimi, adjunte el informe anual en PDF (muestra pública OK)",
          steps: [
            "Abra Kimi, adjunte el informe anual en PDF (muestra pública OK)",
            "Espere a que se analice y pegue el marco de análisis a continuación",
            "Verificar números con el texto original en PDF",
            "Exportar notas de Markdown, marcar los campos \"para verificar\"",
            "Exportar notas de Markdown, marcar los campos \"para verificar\"",
            "Basado en el informe anual cargado, publicado en inglés:\n1) Negocio principal de una frase\n2) Tendencia de ingresos/beneficio neto de tres años (lista)\n3) 3 aspectos destacados + 3 riesgos de este período (citar capítulo/página)\n4) 3 declaraciones prospectivas de la gerencia\n5) 3 preguntas de seguimiento para inversores\n\nLos números deben provenir del documento; si falta, escriba \"No divulgado\"."
          ],
          prompt: "Basado en el informe anual cargado, publicado en inglés:\n1) Negocio principal de una frase\n2) Tendencia de ingresos/beneficio neto de tres años (lista)\n3) 3 aspectos destacados + 3 riesgos de este período (citar capítulo/página)\n4) 3 declaraciones prospectivas de la gerencia\n5) 3 preguntas de seguimiento para inversores\n\nLos números deben provenir del documento; si falta, escriba \"No divulgado\".",
          result: "Notas estructuradas del informe anual con referencias de página y lista de preguntas.",
          tips: "Kimi maneja bien archivos PDF largos: verifique siempre las cifras financieras; La IA puede leer mal las unidades (10K frente a 100M)."
        },
        {
          title: "Depurar error de Python con DeepSeek",
          difficulty: "Principiante",
          duration: "~12 minutos",
          desc: "Proporcione rastreo de DeepSeek + fragmento de código; Localice la causa raíz de IndexError, solucione y proteja los casos extremos.",
          steps: [
            "Abre DeepSeek, nuevo chat",
            "Pegue el código del error + rastreo completo a continuación",
            "Lea las secciones \"causa\" y \"código fijo\"",
            "Reemplazar localmente y volver a ejecutar",
            "Seguimiento: \"Agregar validación de entrada para lista vacía\"",
            "Errores de este código Python: explíquelos en inglés y corríjalos:\n\n```pitón\ndef avg_positive(numeros):\n    pos = [n para n en números si n > 0]\n    devolver suma(pos) / len(pos)\n\nimprimir(avg_positive([]))\n```\n\nRastreo: ZeroDivisionError: división por cero\n\nPor favor: 1) Explique 2) Código fijo 3) Manejo de bordes 4) 2 casos de prueba"
          ],
          prompt: "Errores de este código Python: explíquelos en inglés y corríjalos:\n\n```pitón\ndef avg_positive(numeros):\n    pos = [n para n en números si n > 0]\n    devolver suma(pos) / len(pos)\n\nimprimir(avg_positive([]))\n```\n\nRastreo: ZeroDivisionError: división por cero\n\nPor favor: 1) Explique 2) Código fijo 3) Manejo de bordes 4) 2 casos de prueba",
          result: "La función fija maneja la lista vacía; entender la protección de división por cero.",
          tips: "DeepSeek es rentable para el código; pegue el rastreo completo, no solo la última línea."
        },
        {
          title: "Imagen de fondo blanco del producto de comercio electrónico con difusión estable",
          difficulty: "Intermedio",
          duration: "~20 minutos",
          desc: "A través de Stability en línea o WebUI local, genere una fotografía de producto minimalista; aprender indicaciones + indicaciones negativas.",
          steps: [
            "Estabilidad abierta en línea o local A1111 / ComfyUI",
            "Pegue indicaciones positivas y negativas en inglés",
            "Establecer 1:1 o 4:5, pasos 25–30, CFG ~7",
            "Genera 4, elige el más limpio y exclusivo",
            "Agregue un fondo del color de la marca para la segunda escena",
            "Confirme la licencia de la plataforma y los derechos del producto antes del uso comercial"
          ],
          prompt: "Positivo: fotografía de producto minimalista de auriculares inalámbricos, fondo blanco puro, iluminación de estudio, sombra suave, composición centrada, fotografía comercial ultranítida, 4k\n\nNegativo: texto, marca de agua, logotipo, borroso, deformado, objetos adicionales, fondo desordenado",
          result: "Imagen de producto minimalista para la página de detalles de comercio electrónico.",
          tips: "Palabras clave del producto: fondo blanco / iluminación de estudio / centrado; Las indicaciones negativas reducen las deformidades."
        },
        {
          title: "Vídeo de producto de 15 segundos con Kling AI",
          difficulty: "Principiante",
          duration: "~15 minutos",
          desc: "Los chinos solicitan un breve escaparate vertical de productos: bueno para el comercio de Douyin/Xiaohongshu.",
          steps: [
            "Registrar Kling AI → generación de video",
            "Texto a vídeo, aspecto 9:16",
            "Pegar mensaje, generar clip de 5 a 10 segundos",
            "Vuelva a intentarlo con \"empuje lento\", \"luz suave\" si es necesario",
            "Descargue MP4, importe al editor para subtítulos y CTA",
            "Etiquetar el contenido generado por IA según las reglas de la plataforma"
          ],
          prompt: "Vertical 9:16, escritorio blanco minimalista con termo inteligente, vapor que sube lentamente, cámara orbita el producto, luz natural suave, sensación de anuncio comercial premium, fondo limpio, sin texto ni marca de agua, física realista",
          result: "Videoclip de exhibición vertical de productos.",
          tips: "Kling responde bien a la \"cámara lenta\" y a la \"calidad de los anuncios comerciales\"; dividir historias complejas en segmentos."
        },
        {
          title: "Animar la foto del producto con Runway",
          difficulty: "Intermedio",
          duration: "~18 minutos",
          desc: "Cargue una foto estática del producto; Imagen de pasarela a video para héroe dinámico de 4 segundos: para abridor de anuncios o héroe de sitio web.",
          steps: [
            "Registrarse Pasarela → Imagen a video Gen-3",
            "Cargue el producto claro en formato JPG/PNG (mejor con fondo blanco)",
            "Pegue el mensaje de movimiento a continuación",
            "Genera 4, comprueba que el movimiento sea natural.",
            "Exportar, reproducir en bucle o agregar música en el editor",
            "Observe los bordes del producto; si están deformados, utilice palabras de movimiento más simples"
          ],
          prompt: "Empuje cinematográfico lento, paralaje sutil, el producto se mantiene nítido, luz de estudio suave, movimiento suave de las sombras, sin transformación, calidad de anuncio comercial",
          result: "Clip de movimiento del producto 4s para héroe o página de inicio.",
          tips: "Imagen a vídeo: movimiento pequeño (empuje lento/rotación sutil); Los grandes movimientos se deforman fácilmente."
        },
        {
          title: "Pista promocional de marca de 30 segundos con Suno",
          difficulty: "Principiante",
          duration: "~10 minutos",
          desc: "Suno v4 genera música promocional corta a partir del tono de la marca: instrumental + ritmo para música de fondo en video o preparación de eventos.",
          steps: [
            "Registrar Suno → Crear",
            "Modo personalizado, descripción del estilo de pegado",
            "Genera 2 pistas, elige un ritmo más constante",
            "Ampliar a 30-45 segundos si es necesario",
            "Descargar MP3, bajar volumen como video BGM",
            "Verifique la licencia de Suno antes del uso comercial"
          ],
          prompt: "Tecnología corporativa optimista instrumental, sintetizador moderno y percusión ligera, optimista, limpia, sin voces, adecuada para video de lanzamiento de productos de IA, 100-110 BPM",
          result: "Música de fondo promocional de marca instrumental.",
          tips: "Suno: \"Instrumental + estado de ánimo + BPM + escena\" es estable; para letras especifique idioma y tema."
        },
        {
          title: "Organice notas de reuniones y todo con Notion AI",
          difficulty: "Principiante",
          duration: "~12 minutos",
          desc: "Pegue notas preliminares de la reunión en Notion; La IA produce actas estructuradas, decisiones y todos verificables.",
          steps: [
            "Nueva página de Notion \"Reunión semanal 2026-06-25\"",
            "Pegar notas sin editar o transcripción",
            "Seleccionar todo → Notion AI → Resumir → Elementos de acción",
            "Mensaje: \"Agrupar todos por propietario\"",
            "Convierta todos en bloques de tareas pendientes de Notion y @ compañeros de equipo",
            "Compartir enlace de la página para que los asistentes lo confirmen"
          ],
          prompt: "Desde el contenido de esta página, genere:\n1) Resumen de la reunión (≤5 viñetas)\n2) Decisiones clave\n3) Lista de tareas pendientes: propietario | tarea | fecha de vencimiento\n4) Preguntas abiertas\n\ninglés; no inventes cosas no discutidas.",
          result: "Página de reunión colaborativa con todos agrupados.",
          tips: "Notion AI es mejor para una \"segunda pasada\" en notas existentes; Capture palabras clave en vivo para mayor precisión."
        },
        {
          title: "Presentación de 10 minutos con Gamma",
          difficulty: "Principiante",
          duration: "~10 minutos",
          desc: "Envíe el esquema a Gamma para obtener una presentación de 10 diapositivas: compártala en línea o exporte PDF.",
          steps: [
            "Iniciar sesión Gamma → Crear → Presentación",
            "Pegue el esquema de tono a continuación, elija un tema tecnológico minimalista",
            "Revise cada diapositiva para conocer los datos y la redacción.",
            "Inserte capturas de pantalla o gráficos de productos en diapositivas clave",
            "Reescribe con IA párrafos largos en viñetas",
            "Exporte PDF o comparta el enlace para obtener una vista previa"
          ],
          prompt: "Genere una presentación en inglés de 10 diapositivas:\n\nTema: Plataforma de aprendizaje de IA \"BestWayToLearn.AI\"\nAudiencia: Líderes de capacitación corporativa\nEstructura: Portada / Pain / Solución / Demo / Ruta de aprendizaje / Casos / Modelo de negocio / Diferenciación / Hitos / Contacto\n\nEstilo: tecnología oscura, de 3 a 5 viñetas por diapositiva, evite paredes de texto",
          result: "Borrador de plataforma de presentación compartible con 10 diapositivas.",
          tips: "Investigación de la competencia de una página con Perplexity"
        },
        {
          title: "Investigación de la competencia de una página con Perplexity",
          difficulty: "Principiante",
          duration: "~15 minutos",
          desc: "Perplexity Pro Búsqueda de panorama competitivo: resumen de una página con fuentes citadas.",
          steps: [
            "Open Perplexity (Pro para una búsqueda más profunda)",
            "Pegue la pregunta de investigación y espere a que la recuperen.",
            "Haga clic en los números de citas para verificar las fuentes",
            "Seguimiento: \"Tabla comparativa de funciones de ChatGPT, Claude y Gemini\"",
            "Copia a Notion/Feishu con fecha de investigación",
            "Eliminar enlaces de origen obsoletos o rotos"
          ],
          prompt: "Investigue el mercado de \"IDE de codificación de IA\" de 2026: cursor, windsurf, posicionamiento de GitHub Copilot, precios, diferencias principales, usuarios objetivo. Salida de una página en inglés: descripción general | tabla comparativa | 3 consejos de selección | fuentes citadas",
          result: "Se citó una página de la competencia para discutir sobre herramientas.",
          tips: "La fuerza de la perplejidad son las fuentes verificables; aún se confirman los precios en los sitios oficiales."
        },
        {
          title: "Convierta 3 artículos en un podcast de IA con NotebookLM",
          difficulty: "Intermedio",
          duration: "~20 minutos",
          desc: "Cargue 3 artículos en PDF relacionados, genere un podcast de descripción general de audio y escuche los aspectos más destacados de la literatura mientras viaja.",
          steps: [
            "NotebookLM → nuevo cuaderno",
            "Cargue 3 archivos PDF sobre el mismo tema (se aceptan artículos públicos)",
            "Espere el índice, lea primero las preguntas frecuentes automáticas",
            "Estudio → Generar descripción general de audio",
            "Escuche, haga una pausa para verificar las afirmaciones clave",
            "Charla: \"¿Diferencias metodológicas entre los tres artículos?\""
          ],
          prompt: "(Después de cargar archivos PDF, pregunte a Notebook :)\n\nCompare las preguntas de investigación, los conjuntos de datos, los métodos y las limitaciones de los tres artículos en una tabla y recomiende cuál debería leer primero un principiante.",
          result: "Audio de podcast de IA + cuaderno de literatura consultable.",
          tips: "Escriba un artículo extenso en WeChat con ERNIE Bot"
        },
        {
          title: "Escriba un artículo extenso en WeChat con ERNIE Bot",
          difficulty: "Principiante",
          duration: "~15 minutos",
          desc: "ERNIE Bot para una explicación de ~1500 palabras con opciones de título, estructura y palabras clave SEO.",
          steps: [
            "Abrir ERNIE Bot, nuevo chat",
            "Pega la tarea de escritura con tu tema",
            "Pide \"reducir el tono de la IA, añadir ejemplos concretos\"",
            "Obtenga 3 títulos + resumen de 100 palabras",
            "Agregue experiencia/datos reales, elimine frases vacías",
            "Formato para WeChat: subtítulos, citas, CTA final"
          ],
          prompt: "Borrador de artículo extenso listo para editar y publicar.",
          result: "Borrador de artículo extenso listo para editar y publicar.",
          tips: "ERNIE conoce el contexto chino de Internet; Verifique los hechos y agregue un ángulo personal antes de publicar."
        },
        {
          title: "Analice datos de ventas de Excel con ChatGPT",
          difficulty: "Intermedio",
          duration: "~18 minutos",
          desc: "Cargar muestra CSV; Análisis avanzado de ChatGPT para tendencias, SKU principales, meses de anomalías y sugerencias de gráficos.",
          steps: [
            "Prepare sales.csv anónimo (mes, SKU, cantidad, cantidad)",
            "ChatGPT nuevo chat, subir archivo (Plus/Team)",
            "Pegar mensaje de análisis",
            "Revisar el análisis de Python o la salida de la tabla",
            "Solicite \"los 5 principales SKU para reabastecer este mes\"",
            "Utilice análisis de nivel empresarial o local para datos confidenciales"
          ],
          prompt: "Información sobre tendencias de ventas y sugerencias de gráficos para reuniones semanales.",
          result: "Información sobre tendencias de ventas y sugerencias de gráficos para reuniones semanales.",
          tips: "Anonimizar antes de cargar; agregue grandes datos o haga que AI escriba Python para ejecutarlo localmente."
        },
        {
          title: "Cree una página de tareas interactiva con Claude Artifacts",
          difficulty: "Intermedio",
          duration: "~15 minutos",
          desc: "Claude Artifacts genera una aplicación HTML de tareas pendientes de un solo archivo con almacenamiento local y casillas de verificación.",
          steps: [
            "Vista previa de la página de tareas pendientes en Artefactos: agregar/completar/eliminar",
            "Vista previa de la página de tareas pendientes en Artefactos: agregar/completar/eliminar",
            "Si el estilo está desactivado: \"IU oscura más simple, objetivos táctiles más grandes\"",
            "Exportar o copiar HTML desde artefactos",
            "Haga doble clic en HTML en el navegador, verifique localStorage",
            "Implementar en páginas de GitHub como herramienta personal"
          ],
          prompt: "Cree una aplicación HTML de tareas pendientes de un solo archivo (CSS+JS en línea):\n- Agregar/completar/eliminar\n- persistencia del almacenamiento local\n- UI oscura y minimalista, compatible con dispositivos móviles\n- Interfaz de usuario en inglés\n\nGenere el código ejecutable completo en Artefactos y explique cómo usarlo.",
          result: "Haga doble clic en la aplicación web de tareas pendientes local ejecutable.",
          tips: "Claude Artifacts es ideal para prototipos rápidos; importar al cursor para funciones complejas."
        },
        {
          title: "API REST de andamio con agente de cursor",
          difficulty: "Intermedio",
          duration: "Configure OpenClaw Cron para ejecutar un agente cada mañana de operaciones para recopilar noticias sobre acciones y enviarlas a Telegram o Slack.",
          desc: "Agente de cursor desde cero: API Node.js Express con verificación de estado, TODO CRUD y README.",
          steps: [
            "Nueva carpeta todo-api, abierta en Cursor",
            "Modo agente: requisitos de pegado, permitir la creación de varios archivos",
            "Terminal: npm install && npm run dev",
            "curl o prueba de cartero GET /health y POST /todos",
            "Si el puerto entra en conflicto, solicite al Agente que actualice el ejemplo .env",
            "Lea el archivo README del agente, agregue sus notas de implementación"
          ],
          prompt: "Cree Node.js + API REST Express:\n- OBTENER /salud\n- CRUD /todos (almacenamiento en memoria correcto)\n- paquete.json, LÉAME, .gitignore\n- Manejo de errores simple y comentarios en inglés.\n- Dar comandos de inicio y ejemplos de prueba.",
          result: "Andamio TODO API ejecutable localmente con instrucciones de prueba.",
          tips: "Permitir escritura de archivos y terminal en modo Agente; pasar el control de salud antes de agregar la base de datos."
        },
        {
          title: "Diseño de cartel de marca de café con Midjourney.",
          difficulty: "Principiante",
          duration: "~12 minutos",
          desc: "Práctica de carteles comerciales: tema, espacio negativo, colores de la marca, área tipográfica, no solo paisaje.",
          steps: [
            "Versión exclusiva con espacio para logo.",
            "Pegar mensaje, nota --ar 2:3 cartel vertical",
            "Versión exclusiva con espacio para logo.",
            "Superposición de nombre de marca y eslogan en Figma/Canva (el texto AI no es confiable)",
            "Variar el estado de ánimo cálido/frío",
            "Exportar JPG para usuarios de la tienda o redes sociales"
          ],
          prompt: "póster minimalista de marca de café, una sola taza de cerámica sobre una mesa de madera, luz de la mañana, gran espacio negativo en la parte superior para tipografía, paleta marrón terroso y crema, fotografía editorial, composición limpia --ar 2:3 --estilo crudo --v 6",
          result: "Imagen base de póster de café vertical para superposición de texto.",
          tips: "Espacio de reserva: gran espacio negativo en la parte superior; agregue texto en la publicación: el texto de mitad de camino a menudo es confuso."
        },
        {
          title: "Borradores de íconos de aplicaciones por lotes con ChatGPT",
          difficulty: "Principiante",
          duration: "~8 minutos",
          desc: "DALL·E en ChatGPT genera 4 borradores de estilo de ícono de aplicación para refinar Figma.",
          steps: [
            "ChatGPT nuevo chat, confirma generación de imágenes disponible",
            "Pegar mensaje, solicitar 4 variantes de color",
            "Descargar la mejor coincidencia de 1024 px con la marca",
            "Máscara redondeada de Figma para la especificación del icono de iOS",
            "Itere \"más plano, con menos detalles\" si es necesario",
            "Comprobar legibilidad en tamaño pequeño 60×60"
          ],
          prompt: "Generar borradores de diseño de íconos de aplicaciones (1024x1024, cuadrado):\n\nAplicación: plataforma de aprendizaje de IA \"BestWayToLearn.AI\"\nElementos: neurona/estrella abstracta, sensación tecnológica\nEstilo: degradado plano, fondo oscuro, alto contraste, sin texto\n\nDé 4 combinaciones de colores en una respuesta.",
          result: "Pruebe a 60×60: evite demasiadas líneas finas.",
          tips: "Pruebe a 60×60: evite demasiadas líneas finas."
        },
        {
          title: "Locución en inglés para vídeo con ElevenLabs",
          difficulty: "Principiante",
          duration: "~12 minutos",
          desc: "Elija la voz en inglés preestablecida de ElevenLabs para la introducción del producto de los años 60 en MP3: importe al editor.",
          steps: [
            "ElevenLabs → Texto a voz, pro inglés masculino/femenino",
            "Pegue el guión de los años 60 a continuación, ajuste Estabilidad/Claridad",
            "Generar, corregir palabras mal pronunciadas (deletrear \"A I\")",
            "Descargar MP3, importar al editor de video",
            "Alinear con imágenes, recortar pausas",
            "Tenga en cuenta la fuente de doblaje si la plataforma lo requiere"
          ],
          prompt: "Bienvenido a BestWayToLearn.AI. En solo siete días, pasará de los conceptos básicos de la IA a proyectos reales. Aprenda cómo funcionan los modelos de lenguaje grandes, elija las herramientas adecuadas y practique con tutoriales prácticos. Comience con la cognición, domine las herramientas, realice un trabajo real y luego valide sus habilidades. Su viaje con la IA comienza ahora.",
          result: "Narración en inglés MP3 integrable en vídeo.",
          tips: "Deletrear abreviaturas para la pronunciación (A I / Chat G P T); dividir guiones largos en segmentos."
        },
        {
          title: "Locución por lotes de vídeos cortos con Fish Audio",
          difficulty: "Intermedio",
          duration: "~18 minutos",
          desc: "Utilice voz china clonada o preestablecida para 3 guiones cortos: impulse la producción de videos cortos.",
          steps: [
            "Inicia sesión en Fish Audio, elige voz china estable",
            "Genere scripts de 3 × 30 por separado",
            "Unifique velocidad/volumen, descargue MP3 como secuencias 1–3",
            "Alinear en el editor con imágenes y subtítulos",
            "Corrija la pronunciación de \"AI\", \"modelo\" si es necesario",
            "Copias de seguridad de scripts y audio; plantilla de locución reutilizable"
          ],
          prompt: "【Guión 1】¿Lo sabías? No necesitas todos los cálculos antes de usar la IA. Primero el aprendizaje basado en tareas, luego la teoría: eso es lo más rápido.\n\n【Script 2】No acumule herramientas: una IA de chat + un especialista para su flujo de trabajo principal es suficiente.\n\n【Guión 3】45 minutos al día durante una semana: puedes completar la cognición mediante la práctica.",
          result: "Unifique los parámetros de voz para el trabajo por lotes; mantenga guiones de 30 a 45 segundos para editar el ritmo.",
          tips: "Unifique los parámetros de voz para el trabajo por lotes; mantenga guiones de 30 a 45 segundos para editar el ritmo."
        },
        {
          title: "Impulsa actualizaciones diarias de la competencia con OpenClaw",
          difficulty: "Avanzado",
          duration: "~ 25 minutos",
          desc: "Asegúrese de que OpenClaw Gateway esté funcionando y que el webhook/bot de Slack esté conectado",
          steps: [
            "Asegúrese de que OpenClaw Gateway esté funcionando y que el webhook/bot de Slack esté conectado",
            "Reemplace la lista de competidores en el comando cron con su espacio",
            "Después de crear, openclaw cron ejecuta la prueba manual",
            "Verifique que el mensaje de Slack tenga enlaces de origen y fechas",
            "Si hay ruido, el mensaje debería requerir \"solo cambios importantes\"",
            "Respetar robots.txt; sin gatear agresivo"
          ],
          prompt: "openclaw cron crear \"0 9 * * 1-5\" \\\n  --name \"Resumen diario del competidor\" \\\n  --tz \"Asia/Shanghái\" \\\n  --sesión aislada \\\n  --message \"Es un analista de inteligencia competitiva. Verifique diariamente las actualizaciones del blog/registro de cambios para: Cursor, Windsurf, GitHub Copilot. Resumen en inglés (≤300 palabras): 1) Cambios de hoy 2) Impacto en el usuario 3) Enlaces de origen. Si no hay ninguno: 'No hay actualizaciones públicas importantes hoy'\".\n  --anunciar \\\n  --canal flojo \\\n  --a \"TU_SLACK_CHANNEL_ID\"",
          result: "Resumen de competidores matutinos entre semana en Slack.",
          tips: "Al igual que el cron de acciones, utilice una sesión aislada; Siempre cite fuentes para uso de inteligencia."
        }
      ],
      practiceCategories: {
        "全部": "Propósito general",
        "职场办公": "Lugar de trabajo y oficina",
        "学习成长": "Aprendizaje y crecimiento",
        "编程开发": "Codificación y desarrollo",
        "数据营销": "Datos y marketing",
        "翻译法务": "Traducción y legal"
      },
      practiceUi: {
        countShown: "Se muestra {visible} / {total}",
        emptyHint: "plantilla de aviso",
        promptTplLabel: "plantilla de aviso"
      },
      practices: [
        {
          title: "Enumere los aspectos más destacados del trabajo como viñetas; La IA se expande a informes semanales estructurados o correos electrónicos profesionales.",
          desc: "Enumere los aspectos más destacados del trabajo como viñetas; La IA se expande a informes semanales estructurados o correos electrónicos profesionales.",
          steps: [
            "Enumere de 3 a 5 elementos clave esta semana",
            "Anote los resultados medibles por elemento",
            "Pídale a AI que formatee según el estilo de la empresa"
          ],
          prompt: "Eres un consultor profesional de comunicación en el lugar de trabajo.\nAmplíe lo siguiente en un informe semanal profesional conciso (~300 palabras):\n[Pegar viñetas]\nRequisitos: basado en datos, resultados destacados, tono profesional positivo."
        },
        {
          title: "aprendiendo algo nuevo",
          desc: "Utilice la IA como tutor privado: analogías, preguntas de cuestionario y corrección de malentendidos.",
          steps: [
            "Definir tema y objetivo de aprendizaje.",
            "Solicite una explicación al estilo Feynman",
            "Haga preguntas de práctica para comprobar la comprensión."
          ],
          prompt: "Enséñame [tema] usando la técnica de Feynman.\n1. Explicar conceptos básicos con analogías cotidianas.\n2. Enumere 3 conceptos erróneos comunes\n3. Haga 2 preguntas de opción múltiple con respuestas y explicaciones."
        },
        {
          title: "Depuración y explicación del código",
          desc: "Pegar mensaje de error completo",
          steps: [
            "Pegar mensaje de error completo",
            "Incluir contexto de código relevante",
            "Este código falla en tiempo de ejecución:\n[Código y error]\nPor favor: 1) Explique el error en inglés 2) Proporcione el código fijo 3) Cómo evitarlo"
          ],
          prompt: "Este código falla en tiempo de ejecución:\n[Código y error]\nPor favor: 1) Explique el error en inglés 2) Proporcione el código fijo 3) Cómo evitarlo"
        },
        {
          title: "Análisis y visualización de datos.",
          desc: "Cargue CSV/Excel; La IA encuentra tendencias, anomalías y sugiere tipos de gráficos.",
          steps: [
            "Cargar archivo de datos",
            "Objetivo del análisis del estado",
            "Solicite estadísticas, conocimientos y sugerencias de gráficos"
          ],
          prompt: "Analice los datos de ventas cargados:\n1. Descripción general de las estadísticas básicas\n2. Las tres principales tendencias y anomalías\n3. Sugiera 2 gráficos de alto valor\n4. Tres recomendaciones comerciales viables"
        },
        {
          title: "Creación de textos de marketing",
          desc: "Proporcionar producto y audiencia; obtenga múltiples versiones de copia para pruebas A/B.",
          steps: [
            "Describir el producto y los puntos de venta.",
            "Definir la personalidad del público objetivo",
            "Solicite 3 variantes de estilo"
          ],
          prompt: "Producto: [descripción] Público: [descripción]\nGenere 3 versiones de textos de marketing (profesional/animado/urgente), cada una con título + cuerpo (~100 palabras) + CTA."
        },
        {
          title: "Envíe transcripciones o notas desordenadas a la IA para obtener actas estructuradas y elementos de acción.",
          desc: "Envíe transcripciones o notas desordenadas a la IA para obtener actas estructuradas y elementos de acción.",
          steps: [
            "Proporcionar transcripción o notas de la reunión.",
            "Anotar los asistentes y el tema",
            "Solicitar salida estructurada"
          ],
          prompt: "Organice este acta de reunión:\n## Tema ## Decisiones clave ## Todos (propietario + fecha de vencimiento) ## Preguntas abiertas\n\n[Pegar registro]"
        },
        {
          title: "Currículum y carta de presentación",
          desc: "Pegar descripción del trabajo de destino",
          steps: [
            "Pegar descripción del trabajo de destino",
            "Enumere su experiencia relevante",
            "Solicite optimización combinada"
          ],
          prompt: "Ideación de prototipos de producto."
        },
        {
          title: "Ideación de prototipos de producto.",
          desc: "Describir la idea del producto; La IA genera historias de usuarios, listas de funciones y estructura de páginas.",
          steps: [
            "Idea de producto de un párrafo",
            "Definir usuarios objetivo",
            "Solicitar lista de funciones de MVP"
          ],
          prompt: "Quiero construir [descripción del producto].\nResultado: 1) 3 historias de usuario 2) Lista de funciones de MVP priorizadas 3) Descripción de la estructura alámbrica de la página principal 4) Riesgos y mitigaciones"
        },
        {
          title: "Traducción y localización",
          desc: "Más allá de la traducción literal: adapte el contexto, el tono y el formato cultural.",
          steps: [
            "Proporcionar el texto de origen y el idioma de destino.",
            "Explicar la audiencia y el contexto cultural.",
            "Solicitar adaptación no literal"
          ],
          prompt: "Traduce lo siguiente al [idioma]:\n1. Expresiones locales naturales 2. Preservar el tono original 3. Nota 2 adaptaciones culturales\n\n[Texto fuente]"
        },
        {
          title: "Investigación de mercado y competencia",
          desc: "La IA mapea el panorama y las tendencias competitivos; producir análisis FODA.",
          steps: [
            "Definir industria y alcance",
            "Solicite una comparación estructurada de la competencia",
            "Verificar fuentes de datos clave"
          ],
          prompt: "Análisis competitivo para [industria/producto]:\n1. Cinco competidores principales y diferencias 2. FODA 3. Tres oportunidades de diferenciación\nCitar fuentes."
        },
        {
          title: "diseño instruccional",
          desc: "Diseñar el esquema del curso, los materiales y las actividades para un tema y una audiencia.",
          steps: [
            "Audiencia y objetivos de aprendizaje.",
            "Especificar duración y formato",
            "Solicitar plan docente completo"
          ],
          prompt: "Audiencia: [antecedentes] Tema: [tema] Duración: [horas]\nDiseño: 1) Objetivos de aprendizaje 2) Esquema del curso 3) Segmentos interactivos 4) Tarea"
        },
        {
          title: "Diseño de imagen y portada",
          desc: "Aclarar el estilo y el caso de uso",
          steps: [
            "Aclarar el estilo y el caso de uso",
            "Escribir mensaje en inglés/chino",
            "Iterar 2 o 3 rondas"
          ],
          prompt: "Una ilustración de [estilo] de [tema], paleta de [colores], [composición], composición limpia, alta calidad --ar 16:9"
        },
        {
          title: "Revisión de contrato legal",
          desc: "Subir contrato; AI señala cláusulas de riesgo, explica términos y sugiere revisiones.",
          steps: [
            "Subir contrato completo",
            "Expresa tu posición (Partido A/B)",
            "Solicitar aspectos destacados de los riesgos"
          ],
          prompt: "Revise este contrato (somos [Parte A/B]):\n1. Señalar 5 cláusulas de riesgo 2. Explicar los términos legales 3. Sugerir revisiones\n\n[Texto del contrato]"
        },
        {
          title: "Contenido de redes sociales",
          desc: "Genere publicaciones adaptadas a la plataforma para Xiaohongshu/Weibo/LinkedIn a partir del mensaje principal.",
          steps: [
            "Elija plataforma y audiencia",
            "Proporcionar puntos de mensaje centrales",
            "Solicitar versiones + hashtags"
          ],
          prompt: "Crea una publicación en [plataforma] sobre [tema]:\n1. Título que llame la atención 2. Cuerpo (~200 palabras) 3. Cinco hashtags 4. CTA de participación"
        },
        {
          title: "Fórmulas de Excel y procesamiento de datos.",
          desc: "Describir la tarea de datos; La IA genera fórmulas de Excel/Hojas o scripts de Python.",
          steps: [
            "Describir la estructura de datos y el objetivo.",
            "Dar muestra de entrada/salida",
            "Solicitar fórmula o guión"
          ],
          prompt: "Datos de Excel: [descripción de la estructura]\nNecesidad: [objetivo de procesamiento]\nProporcione: 1) Fórmula de Excel 2) Pasos 3) Advertencias"
        },
        {
          title: "Gestión del conocimiento personal.",
          desc: "Organice notas de lectura y recortes en una base de conocimientos estructurada.",
          steps: [
            "Recoge notas dispersas",
            "Definir taxonomía",
            "La IA genera resúmenes y enlaces"
          ],
          prompt: "Organice estas notas en una base de conocimientos estructurada:\n1. Grupo por tema 2) Resumen por tema 3) Conceptos clave y enlaces\n\n[Notas]"
        }
      ],
      promptLab: {
        tasks: {
          "内容写作": "Por favor escriba el contenido de acuerdo con los siguientes requisitos.",
          "问题分析": "Analice en profundidad el siguiente problema.",
          "代码开发": "Escriba el código de acuerdo con los siguientes requisitos.",
          "学习辅导": "Por favor ayúdenme a entender el siguiente tema como lo haría un maestro.",
          "数据分析": "Realice un análisis de datos sobre los siguientes datos o preguntas.",
          "创意策划": "Proporcione ideas creativas para el siguiente escenario.",
          "翻译润色": "Traduzca o pula el siguiente contenido.",
          "会议纪要": "Organice lo siguiente en actas de reuniones estructuradas.",
          "竞品调研": "Realice análisis de mercado y de competencia para la siguiente industria/producto.",
          "简历优化": "Optimice el currículum y los materiales del trabajo según la siguiente información."
        },
        taskLabels: {
          "内容写作": "Redacción de contenidos",
          "问题分析": "Análisis de problemas",
          "代码开发": "Desarrollo de código",
          "学习辅导": "Apoyo al aprendizaje",
          "数据分析": "Planificación creativa",
          "创意策划": "Planificación creativa",
          "翻译润色": "Traducción y polaco",
          "会议纪要": "notas de la reunión",
          "竞品调研": "Investigación de la competencia",
          "简历优化": "Reanudar optimización"
        },
        tools: {
          "内容写作": [
            "ChatGPT",
            "Claude",
            "Qwen"
          ],
          "问题分析": [
            "ChatGPT",
            "Claude",
            "búsqueda profunda"
          ],
          "代码开发": [
            "Cursor",
            "Claude",
            "búsqueda profunda"
          ],
          "学习辅导": [
            "ChatGPT",
            "Claude",
            "Profundo"
          ],
          "数据分析": [
            "ChatGPT",
            "Claude",
            "Qwen"
          ],
          "创意策划": [
            "Claude",
            "ChatGPT",
            "Gemini"
          ],
          "翻译润色": [
            "Profundo",
            "Claude",
            "ChatGPT"
          ],
          "会议纪要": [
            "kimi",
            "Claude",
            "Qwen"
          ],
          "竞品调研": [
            "Profundo",
            "ChatGPT",
            "CuadernoLM"
          ],
          "简历优化": [
            "ChatGPT",
            "Claude",
            "ERNIE Bot"
          ]
        },
        presets: {
          "内容写作": {
            role: "Estratega sénior de contenidos",
            context: "Tema de escritura:\nPúblico objetivo:\nPuntos del mensaje central (3 a 5):\nLímite de canales y palabras:",
            output: "Borrador completo con título, encabezado, 2 o 3 secciones con subtítulos y resumen de cierre o CTA.",
            tone: "Profesional y riguroso"
          },
          "问题分析": {
            role: "Consultor senior de estrategia",
            context: "Problema a analizar:\nAntecedentes y limitaciones conocidos:\nDatos u observaciones relacionados:\nSu postura/objetivo de decisión:",
            output: "Informe estructurado: definición del problema → hipótesis de causa raíz → comparación de opciones → recomendación y próximos pasos",
            tone: "Profesional y riguroso"
          },
          "代码开发": {
            role: "Ingeniero full-stack",
            context: "Pila de tecnología:\nRequisitos de funciones:\nEjemplos de entrada/salida:\nCódigo existente o errores (si los hay):",
            output: "Código ejecutable + comentarios en inglés + breves notas de uso + casos de prueba sugeridos",
            tone: "Conciso y directo"
          },
          "学习辅导": {
            role: "Tutor estilo Feynman",
            context: "Tema de aprendizaje:\nMi nivel actual:\nConfusión específica:\nTiempo disponible:",
            output: "Explicación en capas (analogía + conceptos clave + conceptos erróneos) + 2 preguntas de autoevaluación con respuestas",
            tone: "Claro y accesible"
          },
          "数据分析": {
            role: "analista de datos",
            context: "Descripción de los datos (fuente, campos, rango de tiempo):\nObjetivo del análisis:\nPreguntas comerciales:\nAnomalías o hipótesis conocidas:",
            output: "Descripción general → 3 hallazgos clave → sugerencias de gráficos → recomendaciones prácticas; etiqueta confirmada/inferida/para verificar",
            tone: "Profesional y riguroso"
          },
          "创意策划": {
            role: "directora creativa",
            context: "Marca/producto:\nPúblico objetivo:\nRestricciones de canal y presupuesto:\nMensaje central:",
            output: "editor bilingüe",
            tone: "Creativo y exploratorio"
          },
          "翻译润色": {
            role: "editor bilingüe",
            context: "Idioma de origen y contenido:\nIdioma de destino y audiencia:\nEstilo (formal/informal/marketing):\nTérminos o marcas a preservar:",
            output: "Final pulido/traducido + notas sobre 2 opciones de redacción clave",
            tone: "Profesional y riguroso"
          },
          "会议纪要": {
            role: "asistente ejecutivo senior",
            context: "Tema de la reunión:\nAsistentes y roles:\nPuntos de discusión (pegar notas/transcripción):\nTodos verbales (si los hay):",
            output: "Actas estructuradas: tema y tiempo → decisiones clave → tabla de tareas pendientes (propietario + fecha de vencimiento) → preguntas abiertas",
            tone: "Conciso y directo"
          },
          "竞品调研": {
            role: "analista de investigacion de mercado",
            context: "Industria/pista:\nNuestro posicionamiento de producto:\nCompetidores para comparar (3–5):\nEnfoque (características/precios/canales, etc.):",
            output: "Tabla comparativa de competidores + resumen FODA + 3 oportunidades de diferenciación; citar fuentes para afirmaciones clave",
            tone: "Profesional y riguroso"
          },
          "简历优化": {
            role: "consultor senior de reclutamiento",
            context: "Resumen de la descripción del puesto de destino:\nAspectos destacados del currículum actual (experiencia/habilidades/proyectos):\nAños de experiencia e industria:\nFortalezas a resaltar / áreas a restar importancia:",
            output: "Viñetas de experiencia optimizadas (palabras clave de JD) + carta de presentación de ~200 palabras + 3 consejos de preparación para la entrevista",
            tone: "Profesional y riguroso"
          }
        },
        tones: {
          "专业严谨": "Profesional y riguroso",
          "通俗易懂": "Claro y accesible",
          "创意发散": "Creativo y exploratorio",
          "简洁直接": "Conciso y directo"
        },
        ui: {
          casesLabel: "Casos del mundo real",
          selectCaseStart: "Seleccione un caso para comenzar",
          copyPrompt: "Copiar mensaje",
          configTitle: "Configuración rápida",
          taskType: "Tipo de tarea",
          role: "Role",
          rolePlaceholder: "p.ej. Gerente sénior de producto",
          context: "Contexto",
          contextPlaceholder: "Describe el escenario, la audiencia, las limitaciones...",
          output: "Salida esperada",
          outputPlaceholder: "p.ej. Un esquema del PRD de 500 palabras",
          tone: "Tono",
          generateSimulate: "Generar y simular",
          chatTitle: "Preguntar y responder · simulación en paralelo",
          resetSim: "Restablecer simulación",
          simEmptyTitle: "Simulación no iniciada",
          simEmptyDesc: "Elija un caso de arriba o edite el panel izquierdo y haga clic en \"Generar y simular\". Aquí aparecen el aviso, la respuesta de IA y la guía de acción.",
          guideTitle: "Simulación completa · Pruébalo en una herramienta real",
          guideToolsLabel: "Herramientas recomendadas:",
          followupPlaceholder: "Seguimiento, p.e. \"Hazlo más corto\"…",
          send: "Enviar",
          disclaimer: "Demostración preestablecida local para comprender la estructura del mensaje. Copie el mensaje en las herramientas recomendadas para obtener resultados reales.",
          tryFollowup: "Intenta preguntar:",
          taskPrefix: "Tarea:",
          casePrefix: "Caso:",
          customScene: "Escenario personalizado",
          defaultRole: "experto mayor",
          defaultContext: "[Por favor agregue contexto específico]",
          defaultOutput: "[Describa el resultado esperado]",
          buildPrompt: {
            roleHeader: "# Role",
            rolePrefix: "# Tarea",
            taskHeader: "# Tarea",
            contextHeader: "# Contexto",
            outputHeader: "# Salida esperada",
            requirementsHeader: "# Requisitos",
            toneLine: "- Tono:",
            clarifyLine: "- Si falta información, enumere 2 o 3 preguntas clave para confirmar primero",
            structureLine: "- Estructura clara con títulos y listas.",
            uncertainLine: "- Marcar claramente el contenido incierto; no inventes hechos"
          },
          systemLabel: "Sistema",
          simulating: "Simulando…",
          promptSent: "Aviso enviado",
          aiReply: "Respuesta de IA",
          copyFail: "Copia fallida",
          defaultGuideSteps: [
            "Haga clic en \"Copiar mensaje\" en la barra de herramientas.",
            "Abra ChatGPT o Claude e inicie un nuevo chat",
            "Pegue el mensaje y reemplace el contexto con su escenario real",
            "Iterar sobre la respuesta: \"más corto\", \"como tabla\", \"agregar datos\""
          ],
          stepPrefix: "Paso",
          stepSuffix: "",
          simError: "La simulación falló. Actualiza la página y vuelve a intentarlo. Si persiste, realice una actualización completa (Cmd+Shift+R) para borrar el caché.",
          caseDataError: "No se pudieron cargar los datos del caso. Actualice completamente la página (Cmd+Shift+R).",
          copyPromptLabel: "Copiar mensaje"
        },
        simulatedResponses: {
          "内容写作": "Entendido: escribiré como {role}.\n\n## Borrador\n\nSegún su contexto 「{ctx}」, aquí está {output}:\n\n---\n\n[El cuerpo se expande aquí en un tono {tone} con títulos y listas claros.]\n\n1. Abre con el punto central\n2. Apoyar con evidencia y ejemplos.\n3. Cerrar con los siguientes pasos prácticos\n\n---\n\n💡 Cuéntame si quieres otro largo, tono o más ejemplos.",
          "问题分析": "Como {role}, aquí está mi análisis:\n\n## Encuadre del problema\n「{ctx}」\n\n## Análisis central\n\n**1. Tensiones clave**\nCausas fundamentales desde múltiples ángulos...\n\n**2. Conductores**\n- Interno:…\n- Externo:…\n\n**3. Opciones**\n| Opción | Al revés | Riesgo |\n|--------|--------|------|\n| Un | … | … |\n| B | … | … |\n\n## Recomendación\nPrefiero la opción A porque...\n\n({tone} · Salida objetivo: {output})",
          "代码开发": "```pitón\n# {output}\n# Código de ejemplo de sus requisitos\n\ndefinición principal():\n    # TODO: implementar la lógica central para 「{ctx}」\n    pasar\n\nsi __nombre__ == \"__principal__\":\n    principal()\n```\n\n## Notas\n\n1. **Enfoque**:…\n2. **Funciones clave**:…\n3. **Cómo ejecutar**:…\n\n⚠️ Ajústese a su entorno. ¿Quiere agregar pruebas unitarias o manejo de errores?",
          "学习辅导": "¡Feliz de enseñar como {role}! Utilicemos el método de Feynman.\n\n## 📖 Idea central\n\n**Analogía**: Piénsalo como...\n\n## 🔍 Profundizando\n\nDe 「{ctx}」:\n\n1. Capa 1: definición\n2. Capa 2: cómo funciona\n3. Capa 3: uso real\n\n## ❌ Errores comunes\n- Error 1:…\n- Error 2:…\n\n## ✅ Compruébalo tú mismo\n**P1**:…\n**A1**:…\n\n¿Quieres más preguntas del cuestionario o un subtema más profundo?",
          "数据分析": "## Informe de análisis\n\n**Objetivo**: {output}\n**Datos**: {ctx}\n\n### 1. Descripción general\n- Tamaño de la muestra:…\n- Rango de tiempo:…\n- Media/mediana de la métrica clave:…\n\n### 2. Hallazgos\n🔹 **Tendencia 1**:…\n🔹 **Tendencia 2**:…\n🔹 **Anomalía**:…\n\n### 3. Ideas de gráficos\n- Gráfico de líneas para tendencias.\n- Gráfico de barras para categorías.\n\n### 4. Recomendaciones\n1.…\n2.…\n3.…\n\n¿Necesita generar código de gráfico?",
          "创意策划": "## Conceptos creativos 🎯\n\n**Escenario**: {ctx}\n**Objetivo**: {output}\n\n### Planifique A｜Seguro\n- Idea central:…\n- Ejecución:…\n- Impacto esperado:…\n\n### Planificar por ｜ Negrita\n- Idea central:…\n- Diferenciador:…\n\n### Plan C｜Lean\n- Versión mínima viable:…\n\n**Elija**: Plan B porque…\n\n({tone}) ¿Quiere un plan de implementación completo para una opción?",
          "翻译润色": "## Traducción / polaco\n\n**Resumen de fuente**: {ctx}\n\n### Texto pulido\n\n[Versión final en tono {tone}, natural para el público objetivo.]\n\n### Notas\n1. 「…」→「…」(frase local)\n2. 「…」→「…」(modificación cultural)\n\n¿Quieres una versión de estilo alternativo?",
          "会议纪要": "## Actas de la reunión\n\n**Tema**: [del contexto]\n**Antecedentes**: {ctx}\n\n### Decisiones\n1.…\n2.…\n\n### Elementos de acción\n| Artículo | Propietario | Vencimiento |\n|------|-------|-----|\n| … | … | … |\n\n### Preguntas abiertas\n-…\n\n---\nResumen estructurado ({tone}). ¿Necesita agregar asistentes?",
          "竞品调研": "## Informe del competidor\n\n**Alcance**: {ctx}\n**Entregable**: {output}\n\n### Jugadores clave\n| Jugador | Fuerza | Diferencia |\n|--------|----------|------------|\n| Un | … | … |\n| B | … | … |\n\n### FODA (nuestra opinión)\n- **S** Fortalezas:…\n- **W** Debilidades:…\n- **O** Oportunidades:…\n- **T** Amenazas:…\n\n### Diferenciación\n1.…\n2.…\n\n⚠️ Marcar cifras no verificadas para verificación manual.",
          "简历优化": "## Reanudar el pulido\n\n**Contexto del rol objetivo**: {ctx}\n\n### Viñetas de experiencia reescritas\n\n> [Viñetas centradas en logros alineadas con el JD]\n\n**Cambios**:\n- Genérico → basado en resultados\n- Se agregaron palabras clave coincidentes\n- Impacto cuantificado cuando sea posible\n\n### Borrador de carta de presentación (~200 palabras)\n\n[{tone} borrador de tono]\n\n¿Quieres otra versión para un rol diferente?",
          __default__: "Entendido, te ayudaré como {role}.\n\nDe 「{ctx}」, aquí está {output}:\n\n[Salida estructurada en tono {tone}.]\n\nSolicite ajustes en cualquier momento."
        },
        followupPatterns: [
          {
            match: "简洁|简短|精简|短一点|más corto|breve|conciso",
            response: "Aquí hay una versión más ajustada:\n\n**Puntos clave**:\n1.…\n2.…\n3.…\n\n**Una sola línea**:…\n\n¿Lo necesitas aún más corto?"
          },
          {
            match: "表格|tabla|列表|lista",
            response: "Convertido a una mesa:\n\n| Artículo | Detalle | Prioridad |\n|------|--------|----------|\n| … | … | Alto |\n| … | … | Medio |\n\n¿Agregar o eliminar columnas?"
          },
          {
            match: "Detalles|展开|更多|补充|detalle|expandir|más",
            response: "Detalle ampliado:\n\n### Más profundidad\n\nDe 「{ctx}」:\n\n1.…\n2.…\n3.…\n\n¿Qué más debo profundizar?"
          },
          {
            match: "英文|inglés|翻译|traducir",
            response: "Aquí está la versión en inglés:\n\n[Contenido traducido en tono {tone}]\n\nDime si quieres ajustes."
          },
          {
            match: ".",
            response: "Recibí tu seguimiento: 「{followup}」\n\nSalida actualizada:\n\n[Contenido revisado en tono {tone}]\n\nSiga iterando o copie esta estructura en su herramienta real."
          }
        ],
        cases: [
          {
            id: "weekly-report",
            title: "Ampliar informe semanal",
            scene: "Comunicación en el lugar de trabajo",
            task: "内容写作",
            role: "Consultor de comunicación laboral",
            context: "Esta semana: 1) Se envió la herramienta de implementación BestWayToLearn.AI v2, se solucionó el conflicto de enrutamiento de Nginx; 2) Dos demostraciones de clientes, 5 comentarios; 3) Pronta propuesta de renovación de Simulación práctica. Bloqueador: la verificación del entorno del servidor ocasionalmente se agota.",
            output: "~Informe semanal profesional de 300 palabras que destaca las métricas y el plan para la próxima semana.",
            tone: "Profesional y riguroso",
            response: "## Informe semanal\n\n**Reportero**: Operaciones de producto · Equipo de proyecto en la nube\n**Período**: 23 de junio – 25 de junio\n\n### Resultados clave\n1. **Implementar la herramienta v2 en vivo**: Se corrigió el fallo de verificación del entorno y el conflicto del servidor predeterminado de Nginx; Implementación completa verificada, sitio accesible.\n2. **Dos demostraciones para clientes**: capacitación de líderes y operaciones de TI; Cinco elementos de comentarios procesables sobre la implementación con un solo clic y la claridad de la ruta de aprendizaje.\n3. **Renovación de Simulación práctica**: biblioteca de casos + simulación en paralelo para reducir la barrera del principiante.\n\n### Métricas\n- Tasa de éxito de la implementación: 100% en entorno de demostración (3/3)\n- Satisfacción in situ: 4,6 / 5\n- Documentos actualizados: guía de implementación + 6 casos de simulación\n\n### Problemas y riesgos\n- La verificación ambiental ocasionalmente se agota (>15 s) en redes débiles; pasos de reproducción registrados; reintento y tiempo de espera de UX planificado.\n\n### La próxima semana\n1. Detección de redes débiles + exportación de registros\n2. Ajuste el módulo de avisos del día 4 a partir de los comentarios de los clientes.\n3. Prepare un script de demostración externo\n\n---\nPregunte si desea una versión más corta o por correo electrónico para una audiencia específica.",
            followups: [
              {
                user: "Comprimir a menos de 200 palabras, más conversacional",
                ai: "Copie el mensaje generado (o mensaje de usuario) del chat"
              }
            ],
            realGuide: {
              tools: [
                "ChatGPT",
                "Qwen",
                "kimi"
              ],
              steps: [
                "Copie el mensaje generado (o mensaje de usuario) del chat",
                "Abre ChatGPT/Qwen, nuevo chat, pega",
                "Reemplácelo con sus aspectos más destacados semanales reales en Contexto",
                "Iterar: \"más corto\", \"versión de correo electrónico\", \"resaltar métricas\""
              ],
              link: {
                label: "Más plantillas de escenarios de escritura",
                href: "#practice"
              }
            }
          },
          {
            id: "meeting-notes",
            title: "Limpieza de notas de reuniones",
            scene: "Colaboración en reuniones",
            task: "会议纪要",
            role: "asistente ejecutivo senior",
            context: "Revisión del producto para el módulo empresarial de ruta de aprendizaje BestWayToLearn.AI. Asistentes: Alex (PM), Blake (Ing), Casey (Diseño). Alex quiere el inicio de la Q3; Blake está preocupado por la plantilla y prefiere MVP; Casey quiere un sistema visual unificado. Verbal todos: Evaluación técnica de Blake en dos semanas; Inventario de componentes de Casey.",
            output: "Actas estructuradas: decisiones, todos (propietario + fecha de vencimiento), preguntas abiertas",
            tone: "Conciso y directo",
            response: "## Actas de la reunión\n\n**Tema**: Ruta de aprendizaje BestWayToLearn.AI · Revisión del módulo empresarial\n**Hora**: 2026-06-25 14:00–15:00\n**Asistentes**: Alex (PM), Blake (Ing), Casey (Diseño)\n\n### Decisiones clave\n1. **Dirección empresarial aprobada**, pero aún no se ha lanzado por completo: MVP es el primero en validar la hipótesis central.\n2. **Primero el sistema visual**: las páginas empresariales deben reutilizar la biblioteca de componentes compartidos.\n\n### Elementos de acción\n| Artículo | Propietario | Vencimiento |\n|------|-------|-----|\n| Evaluación tecnológica del MVP empresarial (esfuerzo/riesgos/departamentos) | Blake | 9 de julio |\n| Inventario de bibliotecas de componentes y lagunas | Casey | 5 de julio |\n| Actualizar el borrador de la hoja de ruta del tercer trimestre a partir de la evaluación | Álex | 12 de julio |\n\n### Preguntas abiertas\n- Alcance de MVP: ¿implementar solo la herramienta o incluir informes de cuestionarios?\n- ¿Se necesita una página de precios y un flujo de prueba separados?\n\n---\n¿Necesita un resumen de antecedentes o el formato de tareas pendientes Feishu/DingTalk?",
            followups: [
              {
                user: "Convertir al formato todo Feishu",
                ai: "【Feishu todos】\n\n☐ Evaluación tecnológica de MVP empresarial – @Blake – prevista para el 9 de julio\n☐ Brechas en la biblioteca de componentes - @Casey - previstas para el 5 de julio\n☐ Actualización de la hoja de ruta del tercer trimestre – @Alex – prevista para el 12 de julio\n\nAbierto: alcance MVP; página de precios/prueba."
              }
            ],
            realGuide: {
              tools: [
                "kimi",
                "Claude",
                "Qwen"
              ],
              steps: [
                "Después de la reunión, pegue la transcripción o las notas preliminares en AI",
                "Utilice el mensaje estructurado de este caso; tome nota de los asistentes y su enfoque",
                "Verifique que todos coincidan con lo que realmente se acordó; no envíe versiones no verificadas",
                "La sincronización confirmó todos con Feishu/DingTalk/Notion"
              ],
              link: {
                label: "Práctica del documento largo de Kimi",
                href: "#hands-on"
              }
            }
          },
          {
            id: "code-debug",
            title: "Arreglar la división por cero de Python",
            scene: "Depuración de código",
            task: "代码开发",
            role: "Ingeniero sénior de Python",
            context: "La función promedia números positivos; falla en la lista vacía. Código:\ndef avg_positive(numeros):\n    pos = [n para n en números si n > 0]\n    devolver suma(pos) / len(pos)",
            output: "Explique el error, el código fijo, el manejo de bordes y 2 casos de prueba.",
            tone: "Claro y accesible",
            response: "## Causa\n\nCuando `nums` está vacío o no tiene positivos, `pos` está vacío, `len(pos)` es 0 y `sum(pos) / len(pos)` genera **ZeroDivisionError**.\n\n## Código fijo\n\n```pitón\ndef avg_positive(numeros):\n    \"\"\"Devuelve el promedio de números positivos; Ninguno si ninguno.\"\"\"\n    si no números:\n        regresar Ninguno\n    pos = [n para n en números si n > 0]\n    si no pos:\n        regresar Ninguno\n    devolver suma(pos) / len(pos)\n\n\nafirmar avg_positive([1, -2, 3, 4]) == 2.5\nafirmar avg_positive([-1, -2]) es Ninguno\nafirmar avg_positive([]) es Ninguno\nprint(\"Todas las pruebas pasaron\")\n```\n\n## Notas\n1. **Filtrar y luego proteger**: nunca divida por la longitud de la lista vacía.\n2. **Devolver Ninguno** cuando no haya resultados positivos; las personas que llaman se ramifican con \"si el resultado es Ninguno\".\n3. En su lugar, devuelva `0.0` si las reglas comerciales lo requieren.\n\n¿Quieres una excepción personalizada o una versión escrita?",
            followups: [],
            realGuide: {
              tools: [
                "Cursor",
                "búsqueda profunda",
                "Copiloto de GitHub"
              ],
              steps: [
                "En Cursor/Código VS, seleccione el código defectuoso, abra el chat AI (Ctrl+L)",
                "Pegue el seguimiento de la pila completa + el contexto del código, no solo una línea",
                "Preguntar: explicar → arreglar → agregar pruebas, la misma estructura que este caso",
                "Ejecute `python test.py` localmente antes de confirmar"
              ],
              link: {
                label: "Práctica de codificación de cursor",
                href: "#hands-on"
              }
            }
          },
          {
            id: "xhs-copy",
            title: "Publicación estilo Xiaohongshu",
            scene: "marketing de comercio electrónico",
            task: "内容写作",
            role: "Operador senior de Xiaohongshu",
            context: "Producto: taza de café portátil para preparar en frío. Puntos de venta: preparación de 5 minutos, protección térmica de doble pared, aspecto minimalista. Público: trabajadores de oficina de 25 a 35 años, que viajan diariamente. No hay superlativos como \"mejor\" o \"n.º 1\".",
            output: "### Opciones de título\n1. Viaje en 5 minutos ｜ Mi taza portátil de café frío ☕\n2. Truco para tomar café en la oficina: no es necesario remojarlo durante la noche\n3. Taza mínima que dice \"¿dónde está el enlace?\" en el trabajo\n\n### Cuerpo (~250 palabras)\nLa cerveza fría solía significar remojar durante la noche y derramarse durante el viaje. Esta taza portátil cambió mi rutina: **cinco minutos** y tengo una taza suave en mi escritorio.\n\nLo que me gusta:\n✅ **Doble pared**: cálida o fría, cómoda de sostener\n✅ **Aspecto limpio**: no grita en el escritorio, las fotos están bien\n\nPreparo tierra molida la noche anterior, agrego agua por la mañana y termino al llegar. Ahorra vs delivery y corta vasos desechables.\n\nPara viajeros que desean un ritual sencillo sin sobrecarga de equipo: no equipo de barista, pero **apto para el día a día**.\n\n### Hashtags\n#coldbrew #commuteessentials #officecoffee #portablecup #workfuel\n\n### Comentar CTA\n¿Cerveza fría o caliente en tu viaje? Comparta a continuación: publicaré una guía de preparación \"una semana, sin repetición\".\n\n---\n¿Quieres una versión más animada o con estilo de revisión?",
            tone: "Claro y accesible",
            response: "### Opciones de título\n1. Viaje en 5 minutos ｜ Mi taza portátil de café frío ☕\n2. Truco para tomar café en la oficina: no es necesario remojarlo durante la noche\n3. Taza mínima que dice \"¿dónde está el enlace?\" en el trabajo\n\n### Cuerpo (~250 palabras)\nLa cerveza fría solía significar remojar durante la noche y derramarse durante el viaje. Esta taza portátil cambió mi rutina: **cinco minutos** y tengo una taza suave en mi escritorio.\n\nLo que me gusta:\n✅ **Doble pared**: cálida o fría, cómoda de sostener\n✅ **Aspecto limpio**: no grita en el escritorio, las fotos están bien\n\nPreparo tierra molida la noche anterior, agrego agua por la mañana y termino al llegar. Ahorra vs delivery y corta vasos desechables.\n\nPara viajeros que desean un ritual sencillo sin sobrecarga de equipo: no equipo de barista, pero **apto para el día a día**.\n\n### Hashtags\n#coldbrew #commuteessentials #officecoffee #portablecup #workfuel\n\n### Comentar CTA\n¿Cerveza fría o caliente en tu viaje? Comparta a continuación: publicaré una guía de preparación \"una semana, sin repetición\".\n\n---\n¿Quieres una versión más animada o con estilo de revisión?",
            followups: [],
            realGuide: {
              tools: [
                "ChatGPT",
                "ERNIE Bot",
                "Claude"
              ],
              steps: [
                "Incluya puntos de venta reales, audiencia y palabras prohibidas en el mensaje",
                "Obtenga 3 títulos primero, luego expanda el que le guste",
                "Control humano: ley publicitaria, tono de marca, precios",
                "Combínelo con Midjourney / Tongyi Wanxiang para imágenes de escenas de productos"
              ],
              link: {
                label: "Práctica de generación de imágenes",
                href: "#hands-on"
              }
            }
          },
          {
            id: "market-brief",
            title: "Resumen de mercado de 7 días",
            scene: "investigación empresarial",
            task: "竞品调研",
            role: "Analista de investigación de la industria",
            context: "Industria: 2026 Comercio electrónico transfronterizo en China. Enfoque: política de Amazon, tienda TikTok, SaaS independiente, costos de logística. ~Resumen en inglés de 400 palabras con fuentes; escriba \"Ninguno\" si no hay información confiable.",
            output: "Resumen de 400 palabras: 3 titulares + impacto en las PYMES + 2 variables de observación la próxima semana",
            tone: "Profesional y riguroso",
            response: "## Resumen de 7 días sobre comercio electrónico transfronterizo (estructura de demostración)\n\n> ⚠️ Demostración didáctica: vuelva a ejecutar la recuperación en Perplexity / Metaso antes del uso real.\n\n### Titulares\n1. **Amazon aumentó las comprobaciones aleatorias de cumplimiento en algunas categorías** (resumen del foro de vendedores): las PYMES necesitan documentos de etiquetas/CPC preparados.\n2. **Impulso de incorporación de TikTok Shop SEA** (página oficial): promociones de tarifas del tercer trimestre para vendedores con capacidad de videos cortos.\n3. **Indie SaaS incluye un creador de sitios de IA + paquetes multilingües** (registro de cambios de Shopify): barrera de construcción más baja, el SEO sigue siendo propiedad del operador.\n\n### Impacto de las PYMES\n- **Aumento del costo de cumplimiento**: los documentos incompletos corren el riesgo de ser eliminados de la lista; mantenga listas de verificación de categorías.\n- **Diversificación de canales**: aumenta el riesgo exclusivo de Amazon; TikTok/tiendas independientes como canales incrementales.\n- **Herramientas más baratas, operaciones más difíciles**: construir es más fácil; La conversión depende del contenido y los anuncios.\n\n### Ver la próxima semana\n1. Recargos logísticos en temporada alta (páginas de tarifas de transportistas).\n2. Cambios en el campo de la declaración de importación de EE. UU./UE (avisos de vendedor de plataforma y aduanas).\n\n---\n¿Quieres \"solo Amazon\" o una tabla comparativa de la competencia?",
            followups: [],
            realGuide: {
              tools: [
                "Profundo",
                "Búsqueda de IA de Metaso",
                "ChatGPT"
              ],
              steps: [
                "Utilice Perplexity/Metaso para la recuperación **citada**, no solo para la memoria del modelo",
                "Pegue los resultados en ChatGPT; comprimir a este breve formato",
                "Verifique cada enlace de origen; soltar elementos no verificables",
                "Programe resúmenes diarios con OpenClaw Cron (ver caso práctico)"
              ],
              link: {
                label: "OpenClaw programó una breve práctica práctica",
                href: "#hands-on"
              }
            }
          },
          {
            id: "feynman-transformer",
            title: "Feynman: Transformador",
            scene: "Apoyo al aprendizaje",
            task: "学习辅导",
            role: "Profesor paciente que utiliza analogías.",
            context: "Tema: Autoatención del transformador. Soy gerente de producto sin experiencia en aprendizaje profundo; 10 minutos para comprender qué problema resuelve frente a RNN.",
            output: "Simple analogía + 3 conceptos erróneos + 2 preguntas de opción múltiple con explicaciones",
            tone: "Claro y accesible",
            response: "## Entendiendo el transformador con Feynman\n\n### Una frase\nTransformer permite al modelo **ver todas las palabras a la vez y decidir en qué concentrarse**, comprendiendo mejor oraciones largas y relaciones distantes.\n\n### Analogía\nEncuentro con 20 ponentes:\n- **RNN** = tomar notas línea por línea: es fácil olvidar a los primeros oradores.\n- **Transformer (autoatención)** = todo en un tablero de pared: vincula el \"presupuesto\" del orador 3 al resumen de cierre.\n\n### Problemas que resuelve\n1. **Dependencias de largo alcance**: \"Debido a la lluvia, cancelé el lanzamiento al aire libre en Shanghai\": \"lluvia\" y \"cancelado\" están muy separados; la atención los vincula directamente.\n2. **Entrenamiento paralelo**: procesar oraciones completas a la vez (más rápido que RNN paso a paso) permite modelos grandes.\n\n### Conceptos erróneos\n| Mito | Realidad |\n|------|---------|\n| transformador = sólo traducción | Arquitectura general: GPT, BERT y modelos multimodales la utilizan |\n| Atención = atención humana | Pesos matemáticos sobre otros tokens |\n| Más capas = siempre mejor | Los datos, la formación y la adaptación a las tareas son importantes |\n\n### Prueba\n**P1**: ¿La principal ventaja de la autoatención frente a RNN?\nA. Sólo inglés B. Deps de largo alcance + paralelismo C. Sin entrenamiento D. Sin alucinaciones\n**Respuesta: B**\n\n**P2**: ¿Transformer por sí solo elimina las alucinaciones?\nA. Sí B. No: necesita recuperación, herramientas, verificación humana\n**Respuesta: B**\n\n---\nPregunte sobre Q/K/V o cómo se relaciona con GPT.",
            followups: [
              {
                user: "Explica Q/K/V con una metáfora de imagen.",
                ai: "Indica quién eres, qué sabes, qué quieres entender (como en este caso)"
              }
            ],
            realGuide: {
              tools: [
                "ChatGPT",
                "Claude",
                "Profundo"
              ],
              steps: [
                "Indica quién eres, qué sabes, qué quieres entender (como en este caso)",
                "Solicite analogía + cuestionario; responder inmediatamente a la autoevaluación",
                "Continúe \"¿por qué no A?\" en opciones equivocadas",
                "Módulo de fundamentos de IA"
              ],
              link: {
                label: "Módulo de fundamentos de IA",
                href: "#fundamentals"
              }
            }
          }
        ]
      },
      monetize: {
        categories: {
          "全部": "Propósito general",
          "内容创作": "Creación de contenido",
          "技术服务": "Servicios tecnológicos",
          "自动化": "Automatización",
          "知识服务": "Servicios de conocimiento",
          "教育培训": "Educación y formación"
        },
        meta: {
          lead: "Después de aprender las herramientas de este sitio, no es necesario que se convierta en un \"ingeniero de IA\" de la noche a la mañana. Un camino realista: utilice la IA para amplificar sus habilidades existentes entre 3 y 10 veces en contenido, diseño, automatización, investigación y capacitación, ya sea como autónomo o con ingresos adicionales. Las 30 instrucciones siguientes utilizan herramientas que cubrimos; las barreras son manejables; Comience con pequeñas validaciones pagas.",
          workTypes: [
            {
              label: "Creación de contenido",
              desc: "Artículos, vídeos cortos, podcasts: borradores y elementos visuales de IA; tu propio tema y tono"
            },
            {
              label: "Servicios tecnológicos",
              desc: "Construcciones de bots, scripts, páginas de destino: tarifas basadas en proyectos"
            },
            {
              label: "Automatización",
              desc: "Integración del flujo de trabajo, resúmenes programados: mantenimiento mensual o configuración por ejecución"
            },
            {
              label: "Servicios de conocimiento",
              desc: "Resúmenes de investigación, paquetes de sugerencias, plantillas de la industria: por suscripción o por única vez"
            },
            {
              label: "Educación y formación",
              desc: "Envíe un estuche de cartera antes de cotizar"
            }
          ],
          principles: [
            "Envíe un estuche de cartera antes de cotizar",
            "Defina los límites de la revisión humana: no entregue resultados de IA sin procesar como final",
            "Validar con amigos/conciertos pequeños antes de escalar a plataformas",
            "Encadene de 2 a 3 herramientas en una tubería: vale más que el uso de una sola herramienta"
          ]
        },
        ui: {
          deliverables: "Entregables:",
          monetize: "Monetización:",
          channels: "Canales de clientes:",
          note: "Nota:",
          difficulty: {
            "入门": "Principiante",
            "进阶": "Intermedio",
            "高级": "Avanzado"
          }
        },
        projects: [
          {
            title: "Gestión de matrices de contenidos sociales.",
            category: "Creación de contenido",
            difficulty: "Principiante",
            income: "$280–1100/mes",
            desc: "Mantenga WeChat/Xiaohongshu/Douyin para empresas, creadores o marcas pequeñas locales: temas, textos, portadas y guiones de vídeo por lotes de IA; manejas la cadencia y el análisis.",
            deliverables: "3 a 5 publicaciones por semana + 2 guiones de vídeo + paquete de recursos de portada",
            monetize: "Anticipo mensual ($210–700/cuenta); o por pieza ($12–28 publicación, $22–55 guión)",
            channels: "Conciertos de Xiaohongshu, mercados, referencias, alcance local",
            steps: [
              "Elija un conjunto de contenido vertical (comida, educación, belleza) y de demostración",
              "Calendario de temas de 7 días de ChatGPT; Midjourney/Kling para imágenes",
              "Prueba del primer mes a bajo precio para conseguir el primer cliente",
              "Utilice capturas de pantalla de lectura/seguidor como estudios de caso para aumentar las tarifas"
            ],
            tip: "Acordar rondas de revisión y originalidad por adelantado; Las industrias sensibles necesitan una revisión final humana."
          },
          {
            title: "Bot de soporte de base de conocimientos empresariales",
            category: "Servicios tecnológicos",
            difficulty: "Intermedio",
            income: "$420–2800/proyecto",
            desc: "Curación de conocimientos + flujos de bots + guía de administración + puesta en marcha",
            deliverables: "Curación de conocimientos + flujos de bots + guía de administración + puesta en marcha",
            monetize: "Implementación única; mantenimiento anual opcional ($70–280/mes)",
            channels: "Grupos B2B, ecosistema Feishu, plataformas independientes, referencias de la comunidad de desarrolladores",
            steps: [
              "NotebookLM organiza los archivos PDF de los clientes en pares de preguntas y respuestas",
              "Construye RAG en Dify o Coze; tasa de éxito de la prueba",
              "Vídeo de demostración de 3 minutos como activo de ventas",
              "Primer cliente a mitad de precio por estudio de caso + testimonio"
            ],
            tip: "Contrato: propiedad de los datos y cadencia de actualización; respuestas etiquetadas como \"solo como referencia\"."
          },
          {
            title: "Subcontratación del diseño visual del comercio electrónico",
            category: "Creación de contenido",
            difficulty: "Principiante",
            income: "$420–2100/mes",
            desc: "Imágenes principales, páginas de detalles, carteles promocionales, presentaciones sencillas para vendedores del mercado: imágenes rápidas de IA; usted maneja el tono de la marca y las comunicaciones con los clientes.",
            deliverables: "5 imágenes principales/conjunto, cortes detallados, póster promocional, presentación opcional",
            monetize: "Conjunto de imágenes principales entre 28 y 110 dólares; página de detalles $70–280; prisa +30%",
            channels: "Servicios de Taobao, mercados, cuentas de diseño, grupos de vendedores",
            steps: [
              "3 conjuntos de muestra en todas las categorías (comida/3C/ropa)",
              "Plantillas de indicaciones Midjourney/Flux para mayor velocidad",
              "\"Primer borrador en 24 horas\" como punto de venta",
              "Vender retenedores visuales mensuales a clientes habituales"
            ],
            tip: "Venta de paquetes rápidos de la industria vertical"
          },
          {
            title: "Venta de paquetes rápidos de la industria vertical",
            category: "Servicios de conocimiento",
            difficulty: "Principiante",
            income: "$140–1,400/mes",
            desc: "Empaquete experiencias legales, de recursos humanos, de comercio electrónico o de tecnología educativa como plantillas de copiar y pegar con guías y ejemplos de antes y después.",
            deliverables: "De 20 a 50 indicaciones estructuradas + notas de escenarios + inicio rápido de 1 página",
            monetize: "Xiaohongshu, boletines informativos, aplicaciones sociales, grupos WeChat de la industria",
            channels: "Xiaohongshu, boletines informativos, aplicaciones sociales, grupos WeChat de la industria",
            steps: [
              "Profundice en una industria que conoce: 10 escenarios de alta frecuencia",
              "Validar en Simulación práctica; comparaciones de capturas de pantalla",
              "Página de ventas de 10 páginas Gamma",
              "Incluir \"actualizaciones de 3 meses\" para la retención"
            ],
            tip: "Las plantillas son puntos de partida; incluir lista de verificación de revisión humana."
          },
          {
            title: "Integración de automatización del flujo de trabajo de IA",
            category: "Automatización",
            difficulty: "Intermedio",
            income: "$700–4200/proyecto",
            desc: "Conecte herramientas dispersas: clientes potenciales de correo electrónico → hoja de cálculo → resumen de IA → Slack/Feishu → resumen semanal, menos copiar y pegar.",
            deliverables: "Diagrama de flujo + flujo de trabajo n8n/OpenClaw + alertas + runbook",
            monetize: "Implementación por complejidad de nodos; mantenimiento $110–420/mes",
            channels: "Outsourcing TI, comunidades SaaS, LinkedIn, renovaciones",
            steps: [
              "Demostración de un escenario universal (informe diario de ventas, observación de la competencia)",
              "n8n: Gmail/sheets/bucle mínimo de Slack",
              "OpenClaw para resúmenes programados",
              "Piloto de una semana antes del pago total"
            ],
            tip: "El cliente tiene credenciales; registros para auditoría y depuración."
          },
          {
            title: "Producción de vídeos cortos doblados por IA",
            category: "Creación de contenido",
            difficulty: "Principiante",
            income: "$14–110/vídeo",
            desc: "Cortometrajes de locución para creadores, empresas locales, capacitación: clonación o TTS, imágenes de IA y música de fondo; editas ritmo y subtítulos.",
            deliverables: "Vídeo vertical de los años 60, SRT, marco de portada, música de fondo libre de derechos opcional",
            monetize: "Por vídeo; 10 videos mensuales ($280–840); tarifa de instalación de clonación adicional",
            channels: "Servicios Douyin, creadores de Bilibili, productos de formación, mercados",
            steps: [
              "Una muestra completa de Fish Audio/ElevenLabs en el escaparate",
              "Plantilla de script estándar (hook-pain-solution-CTA)",
              "Kling/Runway B-roll para reducir el costo de las tomas en vivo",
              "Hoja de precios de entrega publicada en 3 días"
            ],
            tip: "Clonar sólo voces autorizadas; etiquetar el contenido de IA según las reglas de la plataforma."
          },
          {
            title: "Suscripción breve de investigación de la industria",
            category: "Servicios de conocimiento",
            difficulty: "Intermedio",
            income: "$14–70/mes por suscriptor",
            desc: "Resúmenes semanales para inversores, directores de proyectos y operaciones: lanzamientos de competidores, políticas, financiación; La IA recopila, tú seleccionas y comentas.",
            deliverables: "Subdividedor individual; asientos de equipo (5+); informes detallados personalizados ($280+)",
            monetize: "Subdividedor individual; asientos de equipo (5+); informes detallados personalizados ($280+)",
            channels: "Comunidades pagas, boletines informativos, grupos privados, OpenClaw push",
            steps: [
              "Elija un nicho (herramientas de inteligencia artificial, comercio electrónico transfronterizo); 4 números gratis",
              "Perplejidad/Metaso se reúnen; NotebookLM resumen cruzado",
              "Borrador de OpenClaw el lunes, pules el martes",
              "100 subs → precios de grupo empresarial"
            ],
            tip: "Cite todas las afirmaciones; Descargo de responsabilidad: no inversión ni asesoramiento legal."
          },
          {
            title: "Entrega rápida de la página de destino de MVP",
            category: "Servicios tecnológicos",
            difficulty: "Principiante",
            income: "$420–1,680/proyecto",
            desc: "Los emprendedores/PM obtienen una página de inicio de demostración o un MVP web liviano en 1 a 3 días, para recaudación de fondos, validación o registro beta.",
            deliverables: "Aterrizaje responsivo + captura de formulario + SEO básico + enlace de implementación",
            monetize: "Página estándar desde $420; backend simple/pago adicional; 48h punta +50%",
            channels: "Comunidades de fundadores, círculo chino de PH, referencias, grupos de desarrolladores independientes",
            steps: [
              "Bolt.new esqueleto, Cursor pulido UX",
              "2 casos de estudio de estilo (SaaS / marca de consumo)",
              "Grabación de pantalla de 15 minutos para que el cliente pueda editar la copia",
              "Grabación de pantalla de 15 minutos para que el cliente pueda editar la copia"
            ],
            tip: "El dominio y las cuentas pertenecen al cliente; prueba de formulario móvil + antes del lanzamiento."
          },
          {
            title: "Procesamiento de datos y personalización de scripts",
            category: "Servicios tecnológicos",
            difficulty: "Intermedio",
            income: "$140–2100/proyecto",
            desc: "Utilidades de Python/JS para operaciones, finanzas y marketing (limpieza de Excel, cambio de nombre de lotes, raspadores ligeros, informes automáticos) para no programadores con trabajo repetitivo.",
            deliverables: "Script ejecutable + LÉAME + un tutorial en línea",
            monetize: "Por hora o fijo; Depósito del 30% en alcance complejo",
            channels: "Plataformas independientes, comunidades de trabajo remoto, subcontratación de WeChat, referencias",
            steps: [
              "Dos demostraciones de fusión/desduplicación de Excel en cartera",
              "Entrega rápida del cursor/ayudante con comentarios.",
              "Cotización única versus mantenimiento por separado",
              "Entregar fuente; enseñar al cliente a correr: menos soporte"
            ],
            tip: "Confirmar la legalidad del raspador; No guardes los datos de tus clientes en tu nube."
          },
          {
            title: "Capacitación y coaching corporativos en IA",
            category: "Educación y formación",
            difficulty: "Intermedio",
            income: "$420–1,120/medio día; entrenamiento desde $280/mes",
            desc: "Equipos no técnicos (marketing, administración, ventas): selección de herramientas, indicaciones, escenarios de oficina; Entrenamiento opcional en WeChat de 30 días.",
            deliverables: "Taller de 2 a 4 horas + manual de escenarios + deberes + coaching opcional",
            monetize: "Contactos de recursos humanos, intermediarios de formación, boca a boca, referencias de antiguos alumnos",
            channels: "Contactos de recursos humanos, intermediarios de formación, boca a boca, referencias de antiguos alumnos",
            steps: [
              "Condense el camino de 7 días del sitio en un intensivo de medio día",
              "Diapositivas gamma; demostración en vivo 3 escenarios de roles",
              "Recopilar estudios de casos de satisfacción y eficiencia.",
              "Haga hincapié en el cumplimiento y la seguridad: no hay datos confidenciales en los modelos de nube pública."
            ],
            tip: "Haga hincapié en el cumplimiento y la seguridad: no hay datos confidenciales en los modelos de nube pública."
          },
          {
            title: "Copia del listado de comercio electrónico transfronterizo",
            category: "Creación de contenido",
            difficulty: "Principiante",
            income: "Títulos de Amazon, Shopee, Temu, viñetas, copia A+ en inglés/multilingüe con optimización de términos de búsqueda.",
            desc: "Títulos de Amazon, Shopee, Temu, viñetas, copia A+ en inglés/multilingüe con optimización de términos de búsqueda.",
            deliverables: "Título + viñetas + hoja de palabras clave + versiones ES/JA opcionales",
            monetize: "Por SKU; paquete de tienda (50+); temporada alta +30%",
            channels: "Grupos de vendedores, foros, plataformas independientes, agencias.",
            steps: [
              "3 listados de referencia en categoría familiar",
              "Perplejidad por los términos de búsqueda del mercado y la copia de la competencia.",
              "Claude polaco multilingüe; control humano tabúes culturales",
              "\"Paquete de lanzamiento de 7 días\" para pequeños vendedores"
            ],
            tip: "Sin afirmaciones falsas ni abuso de marcas registradas; Evite las categorías prohibidas."
          },
          {
            title: "Subcontratación de la producción de podcasts de IA",
            category: "Creación de contenido",
            difficulty: "Principiante",
            income: "$42–210/episodio",
            desc: "Convierta artículos extensos o notas de entrevistas en podcasts: guión de IA, música de introducción, voz en off; usted edita y guía la distribución.",
            deliverables: "15–30 min audio + notas del espectáculo + portada + guía de distribución",
            monetize: "Por episodio; descuento por temporada de 10 episodios; introducción personalizada adicional",
            channels: "Comunidades anfitrionas de podcasts, propietarios de comunidades de conocimiento, equipos de marca",
            steps: [
              "Artículo de NotebookLM → guión de diálogo",
              "Introducción a Suno; Voz de ElevenLabs/Fish Audio",
              "Una muestra completa en la plataforma de podcast",
              "Suscripción mensual de 2 episodios para retención"
            ],
            tip: "Confirmar los derechos comerciales de música y voz; final del cliente sobre opiniones."
          },
          {
            title: "Servicio de audiolibro / narración de cursos",
            category: "Creación de contenido",
            difficulty: "Principiante",
            income: "De 2 a 6 dólares por 1.000 palabras",
            desc: "Autores y formadores convierten libros electrónicos, conferencias y manuales en audio profesional: varias voces, velocidad y división de capítulos.",
            deliverables: "MP3 del capítulo + línea de tiempo + introducción/final + portada simple",
            monetize: "Por palabra/duración; paquete de libro completo; descuento a largo plazo",
            channels: "Capítulo de dominio público como muestra de voz.",
            steps: [
              "Capítulo de dominio público como muestra de voz.",
              "Preproceso ChatGPT (puntuación, heterónimos)",
              "Fish Audio para chino; ElevenLabs para inglés",
              "Contrato: rondas de revisión y plazos de entrega (~3 a 5 días/10.000 palabras)"
            ],
            tip: "Contenido protegido por derechos de autor únicamente con derechos; El clon de voz necesita consentimiento por escrito."
          },
          {
            title: "Currículum vitae y pulido de coaching para entrevistas",
            category: "Servicios de conocimiento",
            difficulty: "Principiante",
            income: "$14–70/currículum",
            desc: "Optimice los currículums EN/CN, anuncios de cartera, preguntas y respuestas de entrevistas contra JD objetivo con historias STAR.",
            deliverables: "1 o 2 versiones de currículum + carta de presentación + 10 preguntas y respuestas de entrevistas simuladas",
            monetize: "Pulido básico $14; avanzado con entrevista simulada $42–70; complemento de LinkedIn",
            channels: "Personas influyentes en la búsqueda de empleo, grupos profesionales en campus, mercados, foros",
            steps: [
              "5 casos anonimizados antes/después (con permiso)",
              "Palabras clave de empresa/función de perplejidad",
              "Claude pulido narrativo; mantener una experiencia veraz",
              "\"Revisiones de satisfacción de 7 días\" para reducir la fricción"
            ],
            tip: "Nunca fabrique credenciales; No hay resultados laborales garantizados."
          },
          {
            title: "Asistencia en la redacción de contratos y documentos legales.",
            category: "Servicios de conocimiento",
            difficulty: "Intermedio",
            income: "$42–280/documento",
            desc: "Borradores de contratos de arrendamiento, cooperación, acuerdos de confidencialidad y contratos laborales para PYMES y autónomos: cláusulas claras para revisión legal o de abogados.",
            deliverables: "Borrador de Word + notas de cláusula + lista de verificación de riesgos (no opinión legal)",
            monetize: "Contrato estándar entre 42 y 110 dólares; personalizado por complejidad",
            channels: "Grupos fundadores, referencias de contabilidad, socios de plataformas legales",
            steps: [
              "Biblioteca de 10 plantillas comunes (ideal revisadas por abogados)",
              "Borrador con descargo de responsabilidad \"requiere revisión de un abogado\"",
              "Borrador con descargo de responsabilidad \"requiere revisión de un abogado\"",
              "Bucle de referencia mutua con bufetes de abogados locales"
            ],
            tip: "No asesoramiento legal; sin litigios ni acuerdos de equidad."
          },
          {
            title: "Informe de estrategia de contenido SEO y de la competencia",
            category: "Servicios de conocimiento",
            difficulty: "Intermedio",
            income: "$110–700/informe",
            desc: "Análisis matricial de contenido, oportunidades de palabras clave, calendario de 90 días para marcas y operadores de sitios independientes.",
            deliverables: "Informe de 20 a 40 páginas + hoja de palabras clave + calendario temático de 90 días",
            monetize: "Informe estándar de la competencia desde $110; SEO profundo $280+",
            channels: "Agencias de marketing, vendedores independientes, clientes potenciales de marketing B2B",
            steps: [
              "Una muestra completa en una industria familiar.",
              "Competidor de Metaso/Perplexity y tendencias de búsqueda",
              "Manus para listas largas; percepción humana en las conclusiones",
              "20% de descuento por renovación en informes trimestrales"
            ],
            tip: "Anotar la fecha de recopilación de datos; No hay clasificaciones garantizadas."
          },
          {
            title: "Personalización del plan de estudio de preparación para el examen",
            category: "Servicios de conocimiento",
            difficulty: "Principiante",
            income: "$28–125/plan",
            desc: "Planes de estudio personalizados, tareas diarias, plantillas de errores, tarjetas didácticas de objetivos, línea de base y cronograma, con puerta de experiencia en el tema.",
            deliverables: "Plan por fases + tareas diarias + índice de recursos + cronograma de exámenes simulados",
            monetize: "Plan único desde $28; Entrenamiento de preguntas y respuestas de 4 semanas $84–125",
            channels: "Foros de exámenes, cuentas educativas, socios de formación",
            steps: [
              "Plan de referencia para un examen que conoce (inglés/CPA/certificado de enseñanza)",
              "Resumen del programa de estudios de NotebookLM y trabajos anteriores",
              "manual del plan visual gamma",
              "Esforzarse mucho 3 meses antes de la temporada de exámenes"
            ],
            tip: "No hay preguntas filtradas ni preguntas ilegales; actualizar los planes cuando cambien los programas de estudios."
          },
          {
            title: "Base de conocimientos personal del \"segundo cerebro\"",
            category: "Servicios de conocimiento",
            difficulty: "Intermedio",
            income: "$210–1,120/proyecto",
            desc: "Organice documentos, marcadores y notas dispersos en una base de conocimiento conversacional con capacidad de búsqueda para individuos o equipos pequeños.",
            deliverables: "Arquitectura KB + importación/limpieza + configuración de búsqueda/chat + capacitación",
            monetize: "Personales $210–420; precio del equipo por asiento",
            channels: "Comunidades de productividad, círculos de Notion, blogueros de PKM",
            steps: [
              "Biblioteca de demostración que muestra taxonomía y chat.",
              "Resúmenes de lotes de Notion AI; Preguntas y respuestas externas de Dify",
              "Grabación de incorporación de 1 hora",
              "Mantenimiento de contenido mensual opcional"
            ],
            tip: "Notas sensibles localmente primero; nube en cuentas propiedad del cliente."
          },
          {
            title: "Optimización de documentos y archivos README de código abierto",
            category: "Servicios tecnológicos",
            difficulty: "Principiante",
            income: "$70–420/proyecto",
            desc: "LÉAME en inglés, documentos API, guía de contribución, ejemplos para desarrolladores independientes y nuevas empresas: mejores estrellas y asociaciones.",
            deliverables: "LÉAME + CONTRIBUCIÓN + documentos API básicos + ejemplos",
            monetize: "LÉAME básico desde $70; conjunto completo de documentos $280+",
            channels: "Comunidad GitHub, foros de desarrollo, Twitter, fundaciones",
            steps: [
              "Dos ejemplos de documentos de estilo de código abierto",
              "El cursor lee el código para obtener documentos API precisos",
              "Bilingue +30%",
              "Publicación de ayuda Mostrar artículos de HN/dev después de la entrega"
            ],
            tip: "Los documentos deben realizar un seguimiento de la versión del código; sin servicios de estrellas falsas."
          },
          {
            title: "Centro de ayuda SaaS y registro de cambios",
            category: "Servicios tecnológicos",
            difficulty: "Intermedio",
            income: "$420–2100/proyecto",
            desc: "Sitio de documentos de ayuda, bot de preguntas frecuentes, proceso de registro de cambios para SaaS pequeño: menor carga de soporte, mayor resolución de autoservicio.",
            deliverables: "Estructura de ayuda + 20 a 50 artículos + Bot de preguntas frecuentes + plantilla de registro de cambios",
            monetize: "Construcción inicial + actualizaciones mensuales entre 70 y 210 dólares",
            channels: "Grupos fundadores de SaaS, Indie Hackers CN, Product Hunt",
            steps: [
              "Centro de ayuda completo sobre SaaS de demostración",
              "Dify en documentos de productos para preguntas y respuestas en la aplicación",
              "Borradores de API de cursor a partir de comentarios de código",
              "Recuento mensual de artículos del contrato"
            ],
            tip: "Documentos versionados con el producto; Las funciones principales necesitan la aprobación del cliente."
          },
          {
            title: "Actualización de IA de WordPress/sitio corporativo",
            category: "Servicios tecnológicos",
            difficulty: "Intermedio",
            income: "$280–1,400/actualización",
            desc: "Actualización del sitio corporativo heredado: copia asistida por IA, conceptos de diseño, meta SEO; usted implementa y mantiene.",
            deliverables: "Plan de actualización + copia nueva + ajustes de tema + corrección de errores de 30 días",
            monetize: "Actualización única; mantenimiento anual $170–500",
            channels: "Agencias web locales, revendedores de hosting, socios de publicidad de búsqueda",
            steps: [
              "Dos casos de actualización antes/después",
              "Bolt.nuevos bloques prototipo para aprobación del cliente",
              "Ediciones del tema del cursor; Copia SEO por lotes de ChatGPT",
              "SLA de mantenimiento: actualizaciones y tiempo de respuesta"
            ],
            tip: "ICP/dominio propiedad del cliente; copia de seguridad completa antes de la actualización."
          },
          {
            title: "Integración de marca blanca de funciones de IA",
            category: "Servicios tecnológicos",
            difficulty: "Intermedio",
            income: "$1,120–7,000/proyecto",
            desc: "Incorpore soporte inteligente, preguntas y respuestas sobre documentos o generación de contenido en una aplicación/sitio existente a través de API o Dify: la marca del cliente al frente.",
            deliverables: "Requisitos + integración de API + configuración de administrador + soporte de lanzamiento",
            monetize: "Por módulo de funciones; Costo de API pagado por el cliente o transferido",
            channels: "Subcontratistas de software, consultorías de transformación digital, ISV",
            steps: [
              "Sitio de demostración que muestra inserción",
              "API DeepSeek por costo; Dify para RAG",
              "Entregar fuente e implementar documentos",
              "Aumente las ventas de soporte anual después del primer proyecto"
            ],
            tip: "Residencia de datos y privacidad en contrato; no hay claves en su repositorio."
          },
          {
            title: "Automatización de tickets y bots posventa de comercio electrónico",
            category: "Automatización",
            difficulty: "Principiante",
            income: "$210–840/mes",
            desc: "Biblioteca de scripts + Configuración de bot + reglas de tickets + plantilla de informe semanal",
            deliverables: "Biblioteca de scripts + Configuración de bot + reglas de tickets + plantilla de informe semanal",
            monetize: "Configuración $210–420; mantenimiento $42–110/mes",
            channels: "Proveedores de servicios de mercado, grupos de vendedores, subcontratación de CS",
            steps: [
              "Coze en los canales WeCom/Feishu",
              "Coze en los canales WeCom/Feishu",
              "n8n exportar tickets a hojas",
              "Venta adicional de actualización de guión de temporada alta"
            ],
            tip: "Escalar disputas complejas a los humanos; No prometa reembolsos en nombre del cliente."
          },
          {
            title: "Reclutamiento de JD y agente de selección de currículums",
            category: "Automatización",
            difficulty: "Intermedio",
            income: "$42–168/rol",
            desc: "Redacte JD, preguntas de entrevista, resumen y pantalla de currículum del agente primero: ahorre aproximadamente un 70 % del tiempo de selección.",
            deliverables: "JD + modelo de competencias + reglas de selección + hoja resumen del candidato",
            monetize: "Por rol; paquete anual de 10 funciones; participación en los ingresos del reclutador",
            channels: "Comunidades de recursos humanos, cazatalentos, grupos de directores ejecutivos de startups",
            steps: [
              "Una muestra de rol completa (JD + hoja de pantalla)",
              "Manus lee por lotes currículums PDF en resúmenes estructurados",
              "Sesgo de revisión humana y riesgos de privacidad",
              "Manejo de datos conforme a PIPL en el contrato"
            ],
            tip: "La puntuación de IA es sólo de ayuda; la decisión de contratación queda en manos del cliente; anonimizar el almacenamiento."
          },
          {
            title: "Canal de archivo inteligente de facturas/contratos",
            category: "Automatización",
            difficulty: "Intermedio",
            income: "$560–2,520/proyecto",
            desc: "Entrada de correo electrónico/WeChat → OCR → categorizar → alertas de excepción para finanzas/administrador, menos entrada manual.",
            deliverables: "Diseño de procesos + flujo de trabajo n8n + reglas de clasificación + manual",
            monetize: "Implementación única; monitoreo $84–280/mes",
            channels: "Empresas de contabilidad, subcontratación administrativa, implementadores de software financiero",
            steps: [
              "POC en facturas + contratos",
              "Reglas de validación de extracción de campos de Claude",
              "Resumen de excepciones programado de OpenClaw para finanzas",
              "Ejecución paralela de dos semanas frente a manual antes de la transición"
            ],
            tip: "Datos financieros locales o en la nube privada del cliente, no un servicio de contabilidad completo."
          },
          {
            title: "Vigilancia de sentimiento y programación social multiplataforma",
            category: "Automatización",
            difficulty: "Intermedio",
            income: "$280–1,120/mes",
            desc: "Programación unificada, métricas multiplataforma, palabras clave de marca y monitoreo de menciones negativas con resumen diario.",
            deliverables: "Calendario de publicación + configuración de distribución automática + resumen de opinión diario + alertas",
            monetize: "Desde $280/mes; recargo por plataforma; paquete de respuesta a crisis adicional",
            channels: "Marketing de marca, agencias de relaciones públicas, equipos de operaciones de MCN",
            steps: [
              "Sentimiento diario de OpenClaw Cron hacia Feishu",
              "n8n CMS y API sociales cuando sean compatibles",
              "Grok para X menciones en tiempo real",
              "Piloto gratuito del primer mes para derechos de casos"
            ],
            tip: "Siga las reglas de automatización/API de la plataforma; Juicio humano sobre los sentimientos negativos."
          },
          {
            title: "Entrenamiento individualizado en habilidades de IA en el lugar de trabajo",
            category: "Educación y formación",
            difficulty: "Principiante",
            income: "$28–70/hora",
            desc: "De cuatro a ocho sesiones sobre tareas reales (informes semanales, presentaciones, automatización de Python) para puntos débiles individuales.",
            deliverables: "Diagnóstico previo a la llamada + 4 a 8 sesiones en vivo/de voz + revisión de tareas + lista de verificación de herramientas",
            monetize: "Cada hora; paquete de 4 $210; paquete de 8 $390",
            channels: "Aplicaciones sociales, comunidades, referencias de exalumnos, presentaciones de recursos humanos",
            steps: [
              "Tres paquetes estándar (administrador/marketing/introducción al desarrollo)",
              "Cada sesión utiliza la tarea real del cliente.",
              "Resúmenes de grabación de pantalla para revisión",
              "Graduación \"Lista de verificación de capacidad de IA\" para credibilidad"
            ],
            tip: "Sin garantías de promoción; confirmar la línea de base y los objetivos antes de la llamada."
          },
          {
            title: "Campamento de innovación en IA para jóvenes",
            category: "Educación y formación",
            difficulty: "Intermedio",
            income: "$420–2100/sesión",
            desc: "Campamentos de medio día a dos días para organizaciones de capacitación (bot de chat, arte de inteligencia artificial, página de juego simple) despiertan interés, no informática profunda.",
            deliverables: "Plan de lección + materiales en el sitio + página de presentación del estudiante + soporte del instructor",
            monetize: "Compra de instituciones; por estudiante entre 11 y 28 dólares; materiales adicionales",
            channels: "Centros de formación, palacios de la juventud, actividades escolares internacionales.",
            steps: [
              "Flujo estándar de \"proyecto entregable en 2 horas\"",
              "Bolt.nueva página web compartible sin código",
              "Módulo de dibujo creativo a mitad del viaje.",
              "Plataforma de sesión de información para padres para cerrar acuerdos"
            ],
            tip: "Protección de privacidad menor; contenido saludable; seguir la política educativa local."
          },
          {
            title: "Clases de alfabetización en IA para personas mayores (nivel avanzado pagado)",
            category: "Educación y formación",
            difficulty: "Principiante",
            income: "$7–28/persona/sesión",
            desc: "Centros comunitarios para personas mayores: chat con asistente de voz, restauración de fotografías mediante IA, concientización sobre estafas; conceptos básicos gratuitos, pago avanzado.",
            deliverables: "Clase sin conexión de 2 horas + manual en letra grande + Preguntas y respuestas de WeChat de 7 días",
            monetize: "Subvenciones comunitarias + anticipos voluntarios; patrocinio corporativo de RSE",
            channels: "Comunidades de calle, universidades de alto nivel, socios de sucursales bancarias",
            steps: [
              "Manual ilustrado paso a paso extragrande.",
              "Soporte de voz y dialecto Doubao/Qwen",
              "Prueba gratuita para el respaldo de la comunidad",
              "Avanzado: restauración de álbumes con IA y planificación de viajes"
            ],
            tip: "Ritmo lento; Enfatice que no hay transferencias ni códigos de verificación."
          },
          {
            title: "Curso para grupos pequeños del flujo de trabajo de Designer AI",
            category: "Educación y formación",
            difficulty: "Intermedio",
            income: "$210–560/cohorte",
            desc: "4 sesiones en vivo + críticas + biblioteca de sugerencias + lección de licencia comercial",
            deliverables: "4 sesiones en vivo + críticas + biblioteca de sugerencias + lección de licencia comercial",
            monetize: "Por cohorte; Crítica 1 a 1 adicional; descuento para grupos corporativos",
            steps: [
              "Programa de estudios de 4 semanas: concepto → comercial → movimiento → portafolio",
              "Casos de la industria Flux/MJ (belleza/3C)",
              "Semana 4 pulir 3 piezas del portafolio",
              "Los mejores estudiantes referidos a canales de conciertos"
            ],
            tip: "Aclarar licencia comercial; Fomentar el etiquetado del trabajo asistido por IA."
          }
        ]
      }
  });
})();
