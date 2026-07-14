/* ES overlays — mcp-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("es", { mcpNav: {
  "meta": {
    "lead": "Volver a la sesión informativa",
    "searchPlaceholder": "Busque nombre de MCP, categoría, cliente, caso de uso…",
    "countLabel": "{n} servers",
    "totalLabel": "{n} servers · {c} categories",
    "empty": "No hay servidores MCP coincidentes. Pruebe con otra palabra clave.",
    "copyConfig": "Copiar configuración",
    "openLink": "Detalles",
    "clientsLabel": "Clientela",
    "transportLabel": "Transporte",
    "sourceLabel": "Fuente",
    "starsLabel": "{n} ★",
    "featuresLabel": "Características"
  },
  "categories": {
    "MCP 入门": "Comenzando con MCP",
    "开发工具": "herramientas de desarrollo",
    "搜索检索": "Recuperación de búsqueda",
    "浏览器自动化": "automatización del navegador",
    "地图与位置": "Mapas y ubicaciones",
    "数据库": "base de datos",
    "知识库与文档": "Base de conocimientos y documentación",
    "内容创作": "creación de contenido",
    "办公协作": "Colaboración en la oficina",
    "金融数据": "datos financieros",
    "社交与社区": "Social y comunitario",
    "电商": "Comercio electrónico",
    "多媒体": "multimedia",
    "科研学术": "Investigación científica y académica.",
    "生活服务": "servicios de vida"
  },
  "clients": {
    "多平台": "Multiplataforma",
    "开发者": "Desarrolladores",
    "Cursor": "Cursor",
    "Claude Desktop": "Escritorio Claude",
    "Cline": "Clina",
    "Windsurf": "windsurf",
    "Codex": "Códice",
    "Raycast": "Raycast"
  },
  "transports": {
    "概念": "Concepto",
    "配置": "Configuración",
    "文档": "Documentos",
    "Registry": "Registro",
    "stdio": "stdio",
    "SSE": "ESS",
    "http": "HTTP"
  },
  "sources": {
    "official": "Disposición",
    "github": "GitHub",
    "community": "Comunidad"
  },
  "items": {
    "MCP 是什么": {
      "name": "¿Qué es MCP?",
      "desc": "MCP (Protocolo de contexto modelo) es un protocolo abierto que conecta clientes de IA y herramientas externas. El cliente llama a las herramientas proporcionadas por el Servidor a través de stdio/SSE, lo que permite al Agente buscar páginas web, leer archivos, consultar bases de datos, etc.",
      "features": [
        "estándares de protocolo abierto",
        "transporte estándar/SSE",
        "Conecte LLM con herramientas externas"
      ]
    },
    "Cursor 接入 MCP": {
      "name": "Acceso del cursor a MCP",
      "desc": "En Cursor: Configuración → MCP → Editar mcp.json, combine el fragmento JSON a continuación en el objeto mcpServers y guárdelo. Puede utilizar las herramientas correspondientes en el diálogo Agente.",
      "configNote": "Se pueden agregar varios servidores; reinicie el cursor o actualice la lista MCP después de la modificación",
      "features": [
        "Editar mcp.json",
        "Coexisten varios servidores",
        "Herramienta de llamada de diálogo de agente"
      ]
    },
    "Claude Desktop 接入 MCP": {
      "name": "Claude Acceso al escritorio MCP",
      "desc": "Edite claude_desktop_config.json (macOS: ~/Library/Application Support/Claude/), agregue la configuración del servidor en mcpServers y reinicie Claude Desktop para que surta efecto.",
      "configNote": "Para conocer la ruta del archivo de configuración de Windows, consulte el inicio rápido oficial",
      "features": [
        "claude_desktop_config.json",
        "Eres el entrenador de palabras rápido. El usuario dará un mensaje simple, envíe:\n1. Diagnóstico de problemas\n2. Versión reescrita completa de RTFC\n3. Dos entradas de prueba y puntos de salida ideales\nChino, conciso.",
        "Integración de escritorio nativo"
      ]
    },
    "MCP 官方参考实现": {
      "name": "Implementación de referencia oficial de MCP",
      "desc": "La colección oficial de servidores de referencia mantenida por Anthropic (sistema de archivos, git, fetch, memoria, postgres, etc.). Las entradas \"oficiales\" en cada categoría de esta página provienen de este repositorio.",
      "features": [
        "sistema de archivos / git / buscar",
        "memoria/postgres",
        "El mantenimiento oficial se puede bifurcar"
      ]
    },
    "MCP 协议文档": {
      "name": "Documento del protocolo MCP",
      "desc": "Especificación oficial del Model Context Protocol, descripción de la arquitectura y documentación del SDK en varios idiomas, adecuada para desarrollar un servidor MCP personalizado o solucionar problemas de acceso.",
      "features": [
        "Especificación del protocolo",
        "Descripción de la arquitectura",
        "SDK multilingüe"
      ]
    },
    "Context7": {
      "name": "Contexto7",
      "desc": "Inyecte la documentación de la biblioteca y la referencia de API más recientes en LLM para evitar ilusiones y sintaxis obsoletas, lo cual es imprescindible para escenarios de programación.",
      "features": [
        "Inyecte la última documentación de la biblioteca",
        "Consulta en tiempo real de referencia de API",
        "Reducir la ilusión del código"
      ]
    },
    "GitHub MCP": {
      "name": "MCP de GitHub",
      "desc": "Lea y escriba problemas, relaciones públicas, archivos de almacén y códigos de búsqueda, lo que permite al agente operar directamente el flujo de trabajo de GitHub.",
      "configNote": "Debes crear un token de acceso personal de GitHub y completar env",
      "features": [
        "Leer y escribir Problema / PR",
        "Buscar código del repositorio",
        "No confíe en la API en línea, use el cursor para generar la página web recortada local de Flask + rembg: arrastre y suelte para cargar imágenes, IA local para eliminar el fondo, descargue PNG transparente. Adecuado para fotografías de comercio electrónico y procesamiento de fotografías de identificación."
      ]
    },
    "Filesystem": {
      "name": "Sistema de archivos",
      "desc": "El servidor oficial del sistema de archivos lee y escribe archivos en un directorio limitado, adecuado para análisis de proyectos locales y cambios por lotes.",
      "configNote": "Reemplace /ruta/a/permitido/dir con un directorio permitido",
      "features": [
        "Limitar la lectura y escritura del directorio",
        "Análisis de archivos por lotes",
        "Se recomienda que la segmentación de la base de conocimientos de Dify sea de 500 a 800 palabras por bloque; el conjunto de prueba está preparado con 20 preguntas reales de empleados para su aceptación."
      ]
    },
    "Git": {
      "name": "git",
      "desc": "Servidor de operaciones oficial de Git: vea el estado, las diferencias, el historial de envíos y las ramas, ayude en la revisión del código y la gestión de versiones.",
      "features": [
        "vista de estado/diferencias",
        "Enviar consulta histórica",
        "información de sucursal"
      ]
    },
    "Fetch": {
      "name": "Buscar",
      "desc": "El servidor de rastreo web oficial convierte el contenido URL en Markdown legible por LLM, adecuado para leer documentos y noticias.",
      "features": [
        "URL para rebajas",
        "Extracción de texto de página web",
        "Lectura de documentos"
      ]
    },
    "Memory": {
      "name": "Memoria",
      "desc": "El servidor de memoria de gráficos de conocimiento oficial conserva entidades y relaciones entre sesiones y es adecuado para contextos de proyectos a largo plazo.",
      "features": [
        "Memoria del gráfico de conocimiento",
        "Relaciones entre entidades entre sesiones",
        "Contexto del proyecto a largo plazo"
      ]
    },
    "Sequential Thinking": {
      "name": "Pensamiento secuencial",
      "desc": "El servidor oficial de la cadena de pensamiento estructurado guía a los agentes a razonar, revisar y ramificar para explorar problemas complejos paso a paso.",
      "features": [
        "cadena de razonamiento paso a paso",
        "Revisión hipotética",
        "Rompiendo problemas complejos"
      ]
    },
    "Docker MCP": {
      "name": "Docker MCP",
      "desc": "Administre contenedores Docker, imágenes y Compose, lo que permite al Agente operar directamente entornos de contenedores locales o remotos.",
      "features": [
        "Gestión de inicio y parada de contenedores.",
        "Lista de espejos",
        "operación de composición"
      ]
    },
    "Sentry MCP": {
      "name": "MCP centinela",
      "desc": "Consulta errores, problemas y datos de rendimiento de Sentry para ayudar en la resolución de problemas en línea y el análisis de la causa raíz.",
      "features": [
        "Consulta de problema de error",
        "Seguimiento de rendimiento",
        "Solución de problemas en línea"
      ]
    },
    "Brave Search": {
      "name": "Búsqueda valiente",
      "desc": "La búsqueda web basada en la API de Brave Search proporciona al Agente capacidades de recuperación de Internet en tiempo real.",
      "configNote": "Solicite una clave API en valiente.com/search/api",
      "features": [
        "Búsqueda web en tiempo real",
        "Los nodos HTTP agregan tiempos de espera y ramas de error.",
        "Búsqueda amigable con la privacidad"
      ]
    },
    "Tavily": {
      "name": "Tavilí",
      "desc": "Costo: La memoria se reduce en un 70%, pero la implementación es complicada. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
      "features": [
        "Búsqueda optimizada para agentes",
        "resumen estructurado",
        "verificación de hechos"
      ]
    },
    "Exa Search": {
      "name": "búsqueda de exa",
      "desc": "La búsqueda semántica de redes neuronales es buena para encontrar artículos técnicos, artículos e información de empresas, y funciona bien en escenarios de investigación.",
      "features": [
        "Búsqueda neuronal semántica",
        "Búsqueda de artículos técnicos.",
        "Consulta de información de la empresa."
      ]
    },
    "Firecrawl": {
      "name": "rastreo de fuego",
      "desc": "Rastree, capture y busque páginas web, convierta el contenido del sitio a un formato compatible con LLM, adecuado para productos competitivos y recopilación de datos.",
      "features": [
        "Rastrear todo el sitio",
        "Conversión de rebajas",
        "Recopilación de datos de productos competitivos."
      ]
    },
    "Playwright MCP": {
      "name": "Dramaturgo MCP",
      "desc": "El MCP oficial de Microsoft Playwright controla Chromium para capturas de pantalla, clics, llenado de formularios y pruebas E2E.",
      "features": [
        "Automatización de cromo",
        "Capturas de pantalla y llenado de formularios.",
        "Pruebas E2E"
      ]
    },
    "Puppeteer": {
      "name": "La versión optimizada de instrucciones 32B de código abierto de Alibaba admite formatos de llamada de herramientas y contexto de 128K; La evaluación de la comunidad muestra que las capacidades chinas de razonamiento y codificación están cerca del mismo nivel que los modelos de código cerrado y son adecuadas para la implementación privatizada local.",
      "desc": "Servidor oficial de Puppeteer, automatización de Chrome sin cabeza, adecuado para capturas de pantalla de páginas web, rastreo e interacciones simples.",
      "features": [
        "Cromo sin cabeza",
        "Captura de pantalla de la página",
        "interacción DOM"
      ]
    },
    "Browserbase": {
      "name": "Base del navegador",
      "desc": "Infraestructura de navegador sin cabeza en la nube, el Agente realiza tareas complejas de páginas web en navegadores remotos sin Chrome local.",
      "features": [
        "Navegador en la nube",
        "No se requiere Chrome local",
        "Tareas web complejas"
      ]
    },
    "Google Maps": {
      "name": "mapas de google",
      "desc": "Geocodificación, planificación de rutas, búsqueda de ubicación y consultas de alrededores, adecuado para agentes de viajes y vida local.",
      "features": [
        "Geocodificación",
        "--cw Si es demasiado alto, la pose se copiará y las acciones reemplazables se reducirán.",
        "búsqueda de puntos de interés"
      ]
    },
    "OpenStreetMap": {
      "name": "Abrir mapa de calles",
      "desc": "Geocodificación y consulta de ubicación basada en OpenStreetMap, gratuita y de código abierto, adecuada para escenarios que no requieren la API de Google.",
      "features": [
        "Geocodificación gratuita",
        "Datos de mapas de código abierto",
        "No se requiere clave API"
      ]
    },
    "PostgreSQL": {
      "name": "PostgreSQL",
      "desc": "Servidor oficial de Postgres, estructura y datos de tablas de consulta de solo lectura, análisis de datos auxiliares y búsqueda de bases de datos en lenguaje natural.",
      "configNote": "Reemplace con la cadena de conexión real; Se recomiendan cuentas de solo lectura.",
      "features": [
        "Consulta SQL de solo lectura",
        "Exploración de la estructura de la tabla.",
        "Biblioteca de búsqueda de lenguaje natural"
      ]
    },
    "SQLite": {
      "name": "SQLite",
      "desc": "Servidor SQLite oficial, consulta archivos .db locales, adecuado para prototipos y análisis de datos a pequeña escala.",
      "features": [
        "Consulta .db local",
        "Análisis de datos ligero",
        "Verificación de prototipo"
      ]
    },
    "Supabase": {
      "name": "Supabase",
      "desc": "Proyecto Operación Supabase: gestión de tablas, ejecución de SQL, Edge Functions y almacenamiento, herramienta de desarrollo full stack.",
      "features": [
        "gestión de mesa",
        "Ejecución de SQL",
        "Funciones de borde"
      ]
    },
    "Notion": {
      "name": "Noción",
      "desc": "Lea y escriba páginas y bases de datos de Notion, y conecte la base de conocimientos del equipo al flujo de trabajo del Agente.",
      "features": [
        "Lectura y escritura de páginas.",
        "Consulta de base de datos",
        "Acceso a la base de conocimientos del equipo"
      ]
    },
    "Google Drive": {
      "name": "Google Drive",
      "desc": "Servidor oficial de Google Drive, busque, lea y enumere documentos en la nube y abra bibliotecas de archivos de Office.",
      "configNote": "Se requiere autorización de OAuth para la primera ejecución",
      "features": [
        "búsqueda de archivos",
        "Lectura de documentos",
        "Autorización OAuth"
      ]
    },
    "Obsidian MCP": {
      "name": "MCP de obsidiana",
      "desc": "Conéctese al repositorio local de Obsidian, busque y lea notas de Markdown y es la primera opción para escenarios de gestión de conocimiento personal.",
      "configNote": "Requiere tener instalado el complemento API REST local de Obsidian",
      "features": [
        "Búsqueda de notas locales",
        "Lectura de rebajas",
        "base de conocimiento personal"
      ]
    },
    "Figma": {
      "name": "figura",
      "desc": "Lea los borradores de nodos, estilos y comentarios del diseño de Figma, permita que el Agente comprenda la interfaz de usuario y genere el código correspondiente.",
      "features": [
        "Lectura del nodo de diseño",
        "Análisis de estilo y diseño.",
        "Asistencia de interfaz de usuario para codificar"
      ]
    },
    "Cloudflare Workers": {
      "name": "Trabajadores de Cloudflare",
      "desc": "Administre Cloudflare Workers, KV, R2 y DNS para implementar rápidamente sitios estáticos y de computación perimetral.",
      "features": [
        "Despliegue de trabajadores",
        "Almacenamiento KV/R2",
        "gestión de DNS"
      ]
    },
    "Slack": {
      "name": "Flojo",
      "desc": "Servidor oficial de Slack, envía mensajes, consulta canales e hilos e integra el Agente en la colaboración en equipo.",
      "features": [
        "Envío de mensajes del canal",
        "Consulta de hilo",
        "Trabajo en equipo"
      ]
    },
    "Linear": {
      "name": "Lineal",
      "desc": "Gestione problemas lineales, proyectos y ciclos, gestión de proyectos impulsada por agentes adecuada para equipos de productos.",
      "features": [
        "Gestión de problemas",
        "ciclo de sprint",
        "Gestión de proyectos de producto."
      ]
    },
    "Google Calendar": {
      "name": "Calendario de Google",
      "desc": "Consulta y crea eventos de Google Calendar y automatiza la programación y coordinación de reuniones.",
      "configNote": "Es necesario completar Google OAuth para la primera ejecución",
      "features": [
        "Consulta de evento",
        "Crear horario",
        "Autorización OAuth"
      ]
    },
    "Alpha Vantage": {
      "name": "ventaja alfa",
      "desc": "Consulta precios de acciones, divisas y criptomonedas de EE. UU., indicadores técnicos y datos fundamentales de la empresa.",
      "features": [
        "cotizaciones de acciones",
        "Indicadores técnicos",
        "datos fundamentales"
      ]
    },
    "Stripe": {
      "name": "Raya",
      "desc": "Consulta los clientes, las suscripciones, las facturas y los pagos de Stripe para ayudar en el análisis financiero y de facturación de SaaS.",
      "features": [
        "Clientes y Suscripciones",
        "Consulta de factura",
        "Análisis de facturación SaaS"
      ]
    },
    "Twitter/X MCP": {
      "name": "Twitter/XMCP",
      "desc": "Escriba una agenda antes de la reunión, publique puntos clave durante la reunión y utilice Notion AI para generar actas y tareas.",
      "features": [
        "Piar",
        "Búsqueda de línea de tiempo",
        "Perfil de usuario"
      ]
    },
    "Reddit": {
      "name": "Reddit",
      "desc": "Explore subreddits, busque publicaciones y comentarios, realice investigaciones comunitarias y descubra tendencias.",
      "features": [
        "Explorar subreddit",
        "Búsqueda de publicaciones",
        "investigación comunitaria"
      ]
    },
    "Shopify": {
      "name": "comprar",
      "desc": "DeepMind presenta una vista previa de la precisión de predicción mejorada de AlphaFold 4 de los sitios de unión de moléculas de fármacos, y las compañías farmacéuticas amplían la cooperación piloto.",
      "features": [
        "Gestión de productos",
        "Consulta de pedido",
        "Información del cliente"
      ]
    },
    "WooCommerce": {
      "name": "WooCommerce",
      "desc": "Administre productos, pedidos y clientes de WooCommerce, y automatice las operaciones de sitios independientes de WordPress.",
      "features": [
        "tienda de WordPress",
        "Pedidos y Clientes",
        "Gestión de productos"
      ]
    },
    "ElevenLabs": {
      "name": "oncelabs",
      "desc": "Canalización de creación de contenido de audio y video, clonación de sonido y generación de efectos de sonido, conversión de texto a voz.",
      "features": [
        "texto a voz",
        "clonación de sonido",
        "Generación de efectos de sonido."
      ]
    },
    "Replicate": {
      "name": "Reproducir exactamente",
      "desc": "Llame a modelos de imagen, video y audio en Replicate, una ventanilla única para dibujos y videos.",
      "features": [
        "Modelo de diagrama de Vincent",
        "generación de vídeo",
        "Llamada de modelo de audio"
      ]
    },
    "arXiv": {
      "name": "arXiv",
      "desc": "Busque y descargue artículos de arXiv, reseñas de literatura y seguimiento de tecnología de vanguardia.",
      "features": [
        "búsqueda de papel",
        "descargar PDF",
        "revisión de literatura"
      ]
    },
    "PubMed": {
      "name": "PubMed",
      "desc": "Busque en PubMed literatura biomédica, investigaciones clínicas y de ciencias biológicas.",
      "features": [
        "literatura biomédica",
        "búsqueda abstracta",
        "investigación clínica"
      ]
    },
    "Weather": {
      "name": "Clima",
      "desc": "El servidor oficial de consulta meteorológica, basado en la API gratuita Open-Meteo, puede obtener la previsión sin clave.",
      "features": [
        "pronóstico del tiempo",
        "Tiempo abierto gratuito",
        "No se requiere clave API"
      ]
    },
    "Time": {
      "name": "Tiempo",
      "desc": "Conversión de zona horaria y consulta de hora actual, una herramienta básica para la colaboración y programación transfronterizas.",
      "features": [
        "conversión de zona horaria",
        "hora actual",
        "Colaboración transfronteriza"
      ]
    },
    "AWS MCP": {
      "name": "AWSMCP",
      "desc": "La suite MCP oficial de AWS cubre servicios principales como Lambda, S3, DynamoDB y CloudWatch, lo que permite a los agentes operar directamente los recursos de la nube.",
      "configNote": "Es necesario configurar las credenciales de AWS (variables de entorno o ~/.aws/credentials)",
      "features": [
        "Operaciones Lambda/S3",
        "consulta de DynamoDB",
        "Registros de CloudWatch"
      ]
    },
    "Vercel MCP": {
      "name": "Vercel MCP",
      "desc": "El MCP oficial de Vercel gestiona la implementación del proyecto, las variables de entorno, los nombres de dominio y los registros de compilación, y automatiza la implementación del front-end.",
      "features": [
        "Gestión de implementación de proyectos.",
        "Configuración de variables de entorno",
        "Vista de registro de compilación"
      ]
    },
    "E2B Code Interpreter": {
      "name": "Intérprete de código E2B",
      "desc": "El entorno limitado de seguridad en la nube ejecuta código Python/JS y el Agente puede ejecutar scripts, dibujar imágenes y procesar datos sin contaminar el entorno local.",
      "features": [
        "Ejecución de espacio aislado en la nube",
        "Ejecución de Python/JS",
        "visualización de datos"
      ]
    },
    "MongoDB": {
      "name": "MongoDB",
      "desc": "MCP oficial de MongoDB, recopilación de consultas en lenguaje natural, análisis de agregación y exploración de esquemas, herramienta de análisis de datos NoSQL.",
      "features": [
        "Consulta de colección",
        "canalización de agregación",
        "Exploración de esquemas"
      ]
    },
    "Neon": {
      "name": "Neón",
      "desc": "Neon Serverless Postgres MCP administra bases de datos de sucursales, ejecuta SQL y migra, y es la primera opción para el desarrollo moderno de pila completa.",
      "features": [
        "Postgres sin servidor",
        "rama de base de datos",
        "Exportar MP4 1080p"
      ]
    },
    "Atlassian": {
      "name": "Atlassiano",
      "desc": "MCP oficial de Atlassian, lea y escriba Jira Issues, páginas de Confluence y Sprint, y automatice la colaboración del equipo de I+D.",
      "features": [
        "Edición de Jira Lectura y escritura",
        "Página de confluencia",
        "Gestión de sprints"
      ]
    },
    "21st.dev Magic": {
      "name": "21st.dev Magia",
      "desc": "La IA impulsa los componentes de la interfaz de usuario para generar MCP, genera código de componentes React/Tailwind basado en descripciones y acelera la creación de prototipos de front-end.",
      "features": [
        "Componentes de interfaz de usuario generados por IA",
        "Salida de reacción/viento de cola",
        "Aceleración del prototipo frontal"
      ]
    },
    "Kubernetes": {
      "name": "Kubernetes",
      "desc": "Administre los recursos del clúster K8: pod, implementación, servicio, registros y eventos, escenarios de DevOps y SRE.",
      "configNote": "Requiere kubectl local configurado y accesible para el clúster de destino.",
      "features": [
        "Gestión de pods/implementación",
        "Registros y eventos",
        "Consulta de recursos del clúster"
      ]
    },
    "MCP Registry": {
      "name": "Registro MCP",
      "desc": "Registro oficial de Model Context Protocol, explore, califique e instale el servidor MCP comunitario con un solo clic, lo que reduce el costo de descubrimiento de la herramienta del Agente.",
      "features": [
        "Descubrimiento y puntuación de servidores",
        "Instalación con un clic",
        "Gestión de versiones"
      ]
    },
    "Smithery": {
      "name": "herrería",
      "desc": "La plataforma de alojamiento y descubrimiento de servidores MCP busca servidores de alta calidad y genera la configuración de Cursor/Claude Desktop, compatible con conexiones SSE remotas.",
      "configNote": "Algunos servidores requieren la clave API de Smithery; consulte la documentación de smithery.ai para obtener más detalles",
      "features": [
        "Alojamiento MCP remoto",
        "Generación de configuración",
        "Selección de servidor de alta estrella"
      ]
    },
    "Pinecone": {
      "name": "Piña",
      "desc": "Base de datos vectorial MCP: consulta de índice, gestión de espacios de nombres y recuperación de RAG, adecuada para bases de conocimientos empresariales y preguntas y respuestas sobre documentos extensos.",
      "features": [
        "búsqueda vectorial",
        "Gestión del espacio de nombres",
        "Preguntas y respuestas sobre RAG"
      ]
    },
    "Qdrant": {
      "name": "Qdrant",
      "desc": "Qdrant Vector Library MCP: creación de colecciones, escritura de vectores y búsqueda semántica, autohospedado o utilizando Qdrant Cloud.",
      "features": [
        "Biblioteca vectorial autohospedada",
        "búsqueda semántica",
        "Gestión de colecciones"
      ]
    },
    "Redis": {
      "name": "Redis",
      "desc": "Operación de valor clave de Redis MCP: lectura y escritura de caché, publicación y suscripción, y consulta de estructura de datos, adecuada para el estado de la sesión y la depuración de la cola de tareas.",
      "features": [
        "Lectura y escritura en caché",
        "Pub/Sub",
        "estado de sesión"
      ]
    },
    "Prisma": {
      "name": "Refactorice las funciones de JavaScript seleccionadas al modo estricto de TypeScript:\n1. Extraiga la función pura y coloque los efectos secundarios en la capa exterior.\n2. Completar los tipos de entrada y salida, prohibir cualquier\n3. Agregue el caso de límite de cobertura de prueba única de vitest\n4. Mantenga la API externa sin cambios\nPrimero dale Plan, confirma y luego cambia el código.",
      "desc": "Prisma ORM MCP: exploración de esquemas, sugerencias de migración y generación de consultas con seguridad de tipos para acelerar el desarrollo de la capa de base de datos de proyectos full-stack.",
      "configNote": "Debe usarse en el directorio del proyecto que contiene esquema.prisma",
      "features": [
        "Exploración de esquemas",
        "Recomendaciones de migración",
        "Consultas de tipo seguro"
      ]
    },
    "ClickHouse": {
      "name": "Haga clic en casa",
      "desc": "Biblioteca de análisis ClickHouse MCP: consulta OLAP, exploración de estructuras de tablas y agregación de indicadores, adecuada para análisis de registros y datos de comportamiento.",
      "features": [
        "Análisis OLAP",
        "Agregación de registros",
        "Consulta de indicador"
      ]
    },
    "Grafana": {
      "name": "Grafana",
      "desc": "Grafana Observability MCP: consulta del panel, estado de alarma y recuperación de indicadores Loki/Prometheus para ayudar en la resolución de problemas en línea.",
      "features": [
        "Consulta del panel",
        "Estado de alarma",
        "Loki/Prometeo"
      ]
    },
    "Semgrep": {
      "name": "Semgrep",
      "desc": "MCP de escaneo de seguridad de código estático: escaneo en busca de vulnerabilidades de acuerdo con conjuntos de reglas, interpretación de resultados de SAST y sugerencias de reparación, adecuado para el control de acceso de seguridad de relaciones públicas.",
      "features": [
        "exploración SAST",
        "coincidencia de conjuntos de reglas",
        "Sugerencias para corregir vulnerabilidades"
      ]
    },
    "LangSmith": {
      "name": "LangSmith",
      "desc": "LangChain LangSmith MCP: rastrea las cadenas de llamadas del agente, evalúa conjuntos de datos y compara versiones de palabras solicitadas, adecuado para la depuración de aplicaciones LLM.",
      "features": [
        "Seguimiento de la cadena de llamadas",
        "Conjunto de datos de evaluación",
        "Comparación rápida de versiones"
      ]
    },
    "HubSpot": {
      "name": "HubSpot",
      "desc": "HubSpot CRM MCP: actualizaciones de consultas de contactos, empresas y canales de acuerdos, adecuadas para la automatización de agentes de ventas y marketing.",
      "features": [
        "Contacto CRM",
        "Canal de transacciones",
        "automatización de ventas"
      ]
    },
    "Salesforce": {
      "name": "fuerza de ventas",
      "desc": "Salesforce MCP: consultas SOQL, actualizaciones de oportunidades y clientes potenciales, CRM empresarial y escenarios de asistentes de ventas.",
      "configNote": "Se recomienda utilizar el método de conexión OAuth en el entorno de producción.",
      "features": [
        "consulta SOQL",
        "Oportunidades de liderazgo",
        "CRM empresarial"
      ]
    },
    "Zapier": {
      "name": "Zapier",
      "desc": "Zapier MCP: activa la automatización de más de 7000 aplicaciones, permite que el agente cree Zaps, consulte el historial de ejecución y pruebe acciones.",
      "features": [
        "Más de 7000 aplicaciones",
        "Crear un Zap",
        "Historial de ejecución"
      ]
    },
    "Cloudinary": {
      "name": "Nublado",
      "desc": "Cloudinary media MCP: carga de imágenes/videos, generación de URL de transformación y búsqueda en bibliotecas de recursos, adecuado para operación de contenido y materiales de comercio electrónico.",
      "features": [
        "carga de medios",
        "Transformar URL",
        "Búsqueda de biblioteca de recursos"
      ]
    },
    "DeepWiki": {
      "name": "ProfundoWiki",
      "desc": "Devin DeepWiki MCP: lea estructuras de código y documentos estilo Wiki del almacén de GitHub para comprender rápidamente proyectos de código abierto desconocidos.",
      "features": [
        "Documentación de almacén",
        "Descripción rápida de la estructura del código",
        "Comprender los proyectos de código abierto"
      ]
    },
    "Raycast": {
      "name": "Raycast",
      "desc": "Extensión Raycast MCP: llame a las herramientas MCP dentro del iniciador de macOS para ejecutar rápidamente scripts, búsquedas y operaciones del sistema.",
      "configNote": "Requiere tener instalado Raycast y habilitar la extensión MCP",
      "features": [
        "lanzador macos",
        "Extensión MCP",
        "Operación rápida del sistema"
      ]
    }
  }
} });
})();
