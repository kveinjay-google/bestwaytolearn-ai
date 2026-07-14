/* ES overlays — ai-briefing + latest-tutorials */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("es", {
  "aiBriefing": {
    "meta": {
      "lead": "Noticias diarias seleccionadas de la industria de la IA, archivadas por fecha. Actualizado cada mañana: toma el pulso en 3 minutos.",
      "updatedLabel": "Última actualización: {fecha}",
      "countShown": "Mostrando {visible} / {total}",
      "emptyHint": "No hay noticias en esta categoría. Prueba con otra etiqueta.",
      "readMore": "Leer fuente",
      "sourceLabel": "Fuente",
      "backToList": "Volver a la sesión informativa",
      "newBadge": "Nuevo",
      "highlightsLabel": "Conclusiones clave"
    },
    "categories": {
      "全部": "Todo",
      "产品发布": "lanzamiento de producto",
      "开源模型": "Modelo de código abierto",
      "行业动态": "Tendencias de la industria",
      "政策监管": "supervisión de políticas",
      "研究突破": "Avance de la investigación"
    },
    "items": [
      {
        "id": "2026-07-02-openai-responses-api",
        "title": "OpenAI lanza la entrada de llamadas de agente unificada de Responses API",
        "summary": "La nueva API integra conversaciones, llamadas a herramientas, ejecución de código y recuperación de archivos en un único flujo de solicitudes, lo que permite a los desarrolladores crear agentes de varios pasos con menos código adhesivo. La guía oficial de migración de Python SDK 2.x se publica simultáneamente.",
        "source": "OpenAI Developer Blog",
        "body": [
          "OpenAI lanzó oficialmente la API de Respuestas, con el objetivo de converger las capacidades que estaban dispersas en Finalizaciones de Chat, Asistentes, llamadas de herramientas y ejecución de código en un enlace de llamada de Agente unificado. Para los desarrolladores, el mayor cambio es que las tareas de varios pasos ya no requieren escribir a mano una gran cantidad de lógica adhesiva de \"solicitud-espera-solicitud\" en la capa de aplicación.",
          "La nueva API admite de forma nativa la invocación de herramientas, el intérprete de código, la recuperación de archivos y las capacidades de búsqueda en red, y permite conectar múltiples rondas de razonamiento en el mismo flujo de respuesta. Los ejemplos oficiales muestran que un agente de servicio al cliente puede completar el proceso, desde comprender las intenciones del usuario, consultar pedidos, llamar a la interfaz de reembolso hasta generar respuestas dentro de un único ciclo de vida de solicitud.",
          "La guía de migración de Python SDK 2.x publicada simultáneamente asigna la versión anterior de chat.completions + modo de llamada de función manual al método de escritura de flujo de eventos de respuestas.create. Los usuarios existentes de la API de Asistentes pueden migrar en lotes y OpenAI promete que la interfaz de Asistentes seguirá siendo compatible hasta finales de 2026.",
          "Para los equipos nacionales, si el producto se ha conectado a la API oficial de OpenAI, se recomienda evaluar primero si los enlaces del Agente de \"ensamblaje de múltiples API\" existentes pueden converger a la API de Respuestas para reducir retrasos y superficies de error. Si utiliza un proxy de terceros, debe confirmar si el proxy ha seguido la interfaz."
        ],
        "highlights": [
          "API única que cubre conversaciones, herramientas, ejecución y recuperación de código",
          "El agente de varios pasos reduce el código de pegamento de la capa de aplicación",
          "Python SDK 2.x proporciona una guía de migración completa",
          "Adecuado para agentes de atención al cliente, ofimática y análisis de datos."
        ],
        "tags": [
          "API",
          "Agent",
          "OpenAI"
        ]
      },
      {
        "id": "2026-07-02-anthropic-sonnet-speed",
        "title": "Anthropic lanza la versión de alta velocidad Claude Sonnet 4.5, que reduce la latencia de la escena de codificación en un 40 %",
        "summary": "El nuevo modelo está optimizado para la finalización de IDE y la reconstrucción de contexto a largo plazo. Mantiene la precisión de nivel 4 de Sonnet en el subconjunto del banco SWE al tiempo que reduce significativamente el retraso del primer token. Está habilitado de forma predeterminada para los usuarios de Claude Code.",
        "source": "Anthropic News",
        "body": [
          "Anthropic lanza Claude Sonnet 4.5 \"High-Speed ​​​​Edition\" (con nombre en código interno Sonnet Speed), que se centra en la finalización de código en tiempo real y la reconstrucción de archivos largos dentro del IDE. Los datos oficiales afirman que el retraso del primer token se reduce en aproximadamente un 40% en comparación con el Sonnet 4 estándar, y aún se mantiene un rendimiento aceptable en la ventana de contexto de 128K.",
          "Esta versión se ha optimizado especialmente para tres tipos de escenarios: finalización de una o varias líneas, salto de símbolo entre archivos y flujo de trabajo de \"bloque de código seleccionado → reconstrucción del lenguaje natural\". Los usuarios del complemento Claude Code serán redirigidos a la versión de alta velocidad de forma predeterminada, y los clientes de terceros, como Cursor, deberán esperar el anuncio de la adaptación.",
          "No confíe en la API en línea, use el cursor para generar la página web recortada local de Flask + rembg: arrastre y suelte para cargar imágenes, IA local para eliminar el fondo, descargue PNG transparente. Adecuado para fotografías de comercio electrónico y procesamiento de fotografías de identificación.",
          "Si usa Claude para escribir código todos los días, puede cambiar el parámetro del modelo a claude-sonnet-4-5-speed en la consola API (el slug específico está sujeto al documento oficial) y luego decidir si cambiar por completo después de comparar el retraso y los cambios en la factura."
        ],
        "highlights": [
          "El retraso del primer token se reduce aproximadamente un 40%",
          "Claude Code está habilitado de forma predeterminada, adecuado para la codificación diaria",
          "La precisión del banco SWE es básicamente la misma que la del Sonnet 4",
          "Para diseños de arquitectura complejos, todavía se recomienda utilizar modelos más fuertes."
        ],
        "tags": [
          "Claude",
          "编程",
          "Anthropic"
        ]
      },
      {
        "id": "2026-07-01-qwen3-32b",
        "title": "Tongyi Qianwen Qwen3-32B-Instruct es de código abierto, una sola tarjeta de 24 GB puede ejecutar un razonamiento sanguíneo completo",
        "summary": "La versión optimizada de instrucciones 32B de código abierto de Alibaba admite formatos de llamada de herramientas y contexto de 128K; La evaluación de la comunidad muestra que las capacidades chinas de razonamiento y codificación están cerca del mismo nivel que los modelos de código cerrado y son adecuadas para la implementación privatizada local.",
        "source": "Qwen GitHub",
        "body": [
          "El equipo de Tongyi Qianwen abrió el Qwen3-32B-Instruct de código abierto, que es el modelo principal de la serie Qwen3 para escenarios de \"desplegable con una sola tarjeta\". El peso tiene la licencia Apache 2.0 y admite uso comercial (debe confirmar usted mismo los últimos términos de la licencia).",
          "El modelo admite contexto de 128 K, llamada a funciones nativas y salida de esquema JSON. Los resultados de reproducción de la comunidad en puntos de referencia como MMLU, C-Eval y HumanEval muestran que las capacidades de generación de código y razonamiento chino están cerca de GPT-4o mini y las primeras versiones de Claude 3.5 Sonnet, y son significativamente más fuertes que la generación anterior Qwen2.5-32B.",
          "En términos de hardware, la inferencia pura BF16 requiere alrededor de 64 GB de memoria de video; Después de la cuantificación, INT4 se puede ejecutar en un único RTX 4090 (24 GB), con tokens/s de aproximadamente 15 a 25, lo que es adecuado para desarrolladores individuales y la implementación de intranet de pequeñas y medianas empresas. Ollama, llama.cpp y vLLM proporcionan scripts de combinación o tarjetas de modelo preestablecidas.",
          "Si está evaluando un asistente de IA que \"no deja los datos fuera de la intranet\", Qwen3-32B es actualmente un punto de partida muy rentable: primero use Ollama para extraer y probar la ejecución, y luego decida si unirse al clúster vLLM según las necesidades comerciales."
        ],
        "highlights": [
          "Apache 2.0 de código abierto, soporta contextos de 128K",
          "Se puede razonar una tarjeta única cuantificada INT4 de 24 GB",
          "El idioma chino y las capacidades de codificación están cerca del mismo nivel que el modelo de código cerrado.",
          "El ecosistema Ollama/vLLM ha seguido"
        ],
        "tags": [
          "开源",
          "Qwen",
          "本地部署"
        ]
      },
      {
        "id": "2026-07-01-google-gemini-live",
        "title": "La API Google Gemini Live abre sesiones multimodales en tiempo real a los desarrolladores",
        "summary": "Los desarrolladores pueden acceder a conversaciones de transmisión de voz y video de baja latencia, admitir interrupción y compartir contexto de pantalla; Android y Web SDK se lanzan simultáneamente, adecuados para aplicaciones de servicio al cliente y orientación en sitio.",
        "source": "Google Developers",
        "body": [
          "Google está abriendo la API Gemini Live a los desarrolladores, permitiendo que las aplicaciones accedan a conversaciones de transmisión de voz y video de baja latencia. A diferencia del modo de procesamiento por lotes de cargar imágenes/audio a la vez, Live API mantiene una sesión de conexión larga, el modelo puede \"escuchar, mirar y responder\" y permite a los usuarios interrumpir en cualquier momento.",
          "Los escenarios de acceso típicos incluyen: atención al cliente por vídeo (el usuario levanta su teléfono móvil para mostrar el dispositivo defectuoso), enseñanza remota (el profesor comparte la pantalla para explicar) y asistentes de voz en dispositivos portátiles. El SDK de Android se lanza simultáneamente con el SDK web y el SDK de iOS se encuentra en versión preliminar privada.",
          "A nivel técnico, Live API se basa en la transmisión bidireccional de WebSocket, el audio predeterminado es PCM de 16 kHz y los cuadros de video se insertan en secuencias JPEG. Los desarrolladores deben manejar VAD (detección de actividad de voz) y la cancelación de eco por sí mismos, y Google proporciona una implementación de referencia. La facturación se basa en la duración de la sesión + la pila de tokens de entrada/salida.",
          "Los desarrolladores nacionales deben tener en cuenta: en algunas regiones es necesario acceder a la API de Gemini a través de agentes de cumplimiento, y la transmisión de video en tiempo real requiere un gran ancho de banda. Se recomienda utilizar la demostración oficial en el lado web para verificar el retraso antes de integrarlo en el producto."
        ],
        "highlights": [
          "Conexión larga WebSocket, admite conversación de voz + vídeo en tiempo real",
          "Los usuarios pueden interrumpir en cualquier momento, adecuado para escenarios de interacción natural.",
          "Android/SDK web está abierto",
          "Adecuado para aplicaciones de servicio al cliente, enseñanza y orientación in situ"
        ],
        "tags": [
          "Gemini",
          "多模态",
          "API"
        ]
      },
      {
        "id": "2026-06-30-mcp-registry",
        "title": "Beta pública del Registro oficial de MCP: descubrimiento e instalación del servidor con un solo clic",
        "summary": "Model Context Protocol lanza un registro centralizado. Las extensiones Cursor, Claude Desktop y VS Code pueden explorar directamente el servidor MCP mejor calificado, lo que reduce el umbral de entrada para los enlaces de herramientas del Agente.",
        "source": "MCP Blog",
        "body": [
          "El Model Context Protocol (MCP) liderado por Anthropic ha lanzado una versión beta pública oficial del Registro, que proporciona descubrimiento centralizado de servidores, administración de versiones y capacidades de instalación con un solo clic. En el pasado, los desarrolladores tenían que clonar manualmente el repositorio de GitHub y configurar JSON. Ahora pueden buscarlo e instalarlo directamente en las extensiones Cursor, Claude Desktop y VS Code.",
          "El primer lote de Registro incluye más de 200 servidores, que cubren herramientas de alta frecuencia como GitHub, Slack, PostgreSQL, Brave Search y Filesystem. Cada servidor muestra descargas, actualizaciones recientes, clientes compatibles y calificaciones de la comunidad, y admite filtrado por etiquetas (base de datos, búsqueda, automatización, etc.).",
          "Para los desarrolladores de agentes, esto significa que el costo de conexión del enlace de herramientas se ha reducido significativamente: la creación de un nuevo agente que puede \"leer el almacén + consultar la base de datos + enviar Slack\" se ha acortado de días a horas. Sin embargo, en el entorno de producción, aún debe prestar atención a minimizar los permisos: la calidad del servidor en el Registro varía, así que lea el código fuente y la declaración de permisos antes de la instalación.",
          "La sección de navegación MCP de BestWayToLearn.AI continuará sincronizando entradas populares del Registro. Se recomienda comenzar con un Servidor certificado oficialmente para evitar instalar paquetes de terceros de fuentes desconocidas."
        ],
        "highlights": [
          "Se pueden instalar más de 200 servidores en clientes convencionales con un solo clic",
          "Reducir la barrera de entrada para los enlaces de herramientas del Agente",
          "Soporta clasificaciones, etiquetas y gestión de versiones.",
          "El entorno de producción debe prestar atención a los permisos y la auditoría del código fuente."
        ],
        "tags": [
          "MCP",
          "Agent",
          "工具链"
        ]
      },
      {
        "id": "2026-06-30-cn-genai-label",
        "title": "Los servicios nacionales de IA generativa añaden requisitos de cumplimiento de \"identificación de contenido\"",
        "summary": "Las nuevas regulaciones requieren que las aplicaciones públicas agreguen etiquetas explícitas o implícitas al contenido generado por IA y mejoren las quejas de los usuarios y los mecanismos de trazabilidad; Los productos extranjeros deben evaluar simultáneamente las obligaciones de etiquetado multirregionales.",
        "source": "行业合规速递",
        "body": [
          "Los servicios nacionales de IA generativa están marcando el comienzo de requisitos de cumplimiento de \"identificación de contenido\" más detallados. Los productos que brindan al público capacidades de generación de texto, imágenes, audio y video deben agregar identificación explícita (como marcas de agua, subíndices) o identificación implícita (marca de agua digital/metadatos) que cumplan con los estándares nacionales al contenido generado por IA, y establecer un mecanismo de trazabilidad de contenido y quejas de los usuarios.",
          "La identificación explícita requiere que \"generado por IA\" se indique en una posición perceptible para los usuarios, y no se debe proporcionar la función de eliminar la identificación con un solo clic. La identificación implícita debe escribirse en metadatos de archivos o marcas de agua a nivel de píxel para supervisión e inspección aleatoria de la plataforma. Se cubren escenarios como la distribución de medios propios, páginas de detalles de comercio electrónico y material educativo.",
          "Para los productos extranjeros, las obligaciones transfronterizas, como la Ley de IA de la UE y las regulaciones estatales de Estados Unidos sobre falsificaciones profundas, deben evaluarse simultáneamente; es posible que la misma línea de generación deba generar diferentes estrategias de etiquetado por región. El equipo técnico debe implementar la capa de renderizado front-end y el canal de exportación al mismo tiempo para evitar la laguna de cumplimiento de \"solo visualización de páginas web, exportación sin identificación\".",
          "Los empresarios sugieren: incorporar capacidades de identificación en MVP en lugar de parches post mortem; Conservar los registros de generación (ID de usuario, hora, versión del modelo, resumen de palabras clave) durante al menos 6 meses para facilitar la respuesta a quejas y auditorías."
        ],
        "highlights": [
          "Requisitos de identificación de doble vía explícitos + implícitos",
          "Se debe establecer un mecanismo de trazabilidad y aceptación de quejas.",
          "Los productos enviados al extranjero deben evaluar las regulaciones en múltiples regiones",
          "Se recomienda conservar los registros generados durante al menos 6 meses."
        ],
        "tags": [
          "合规",
          "政策",
          "中国"
        ]
      },
      {
        "id": "2026-06-29-deepseek-r2-rumor",
        "title": "La versión preliminar de DeepSeek R2 aparece en HuggingFace, el costo de inferencia se redujo a la mitad",
        "summary": "El peso filtrado muestra que la arquitectura MoE se ha ampliado aún más y los puntos de referencia matemáticos y de código se han mejorado significativamente. El anuncio oficial aún no se ha realizado, pero la entrada en escala de grises \"R2-preview\" apareció en la página de precios de API.",
        "source": "HuggingFace / 社区",
        "body": [
          "Los derechos de autor de vista previa de DeepSeek R2 aparecieron brevemente en HuggingFace, atrayendo gran atención de la comunidad. Según la configuración filtrada, R2 continúa usando la arquitectura MoE (Mixed Expert), la cantidad de parámetros de activación se expande aún más en comparación con R1 y los puntos de referencia de razonamiento matemático (AIME, MATH) y código (LiveCodeBench) han aumentado en puntos porcentuales de dos dígitos.",
          "Lo que es aún más llamativo es el costo: la comunidad estima, basándose en la página de precios de la API de la versión preliminar, que el costo de la inferencia de R2 para la misma tarea es aproximadamente la mitad del de R1, principalmente debido a la optimización de enrutamiento de expertos y a las mejoras en el canal de inferencia cuantitativa. DeepSeek aún no ha emitido un comunicado de prensa oficial, pero la entrada en escala de grises \"deepseek-r2-preview\" apareció en la consola API nacional y se ha invitado a algunos usuarios empresariales a probarla.",
          "Recuerde que los derechos de autor de la vista previa se han eliminado de los estantes. Los datos de rendimiento que circulan actualmente son de reproducción comunitaria y pueden diferir de la versión oficial final. No confíe en interfaces de vista previa no oficiales en entornos de producción.",
          "Para los estudiantes, si R2 se lanza según lo programado, reducirá aún más el costo del \"razonamiento de alta calidad\" y beneficiará el emprendimiento de aplicaciones de IA y la investigación académica. Se recomienda seguir prestando atención al anuncio oficial de DeepSeek y al registro de cambios de API."
        ],
        "highlights": [
          "Expansión de la arquitectura MoE, mejora del benchmark de matemáticas/código",
          "Código Claude: npx antigravedad-habilidades-increíbles --claude",
          "Aún no se ha anunciado oficialmente. Utilice la interfaz de vista previa con precaución en entornos de producción.",
          "La consola API tiene una entrada en escala de grises."
        ],
        "tags": [
          "DeepSeek",
          "MoE",
          "推理"
        ]
      },
      {
        "id": "2026-06-29-sora-public",
        "title": "OpenAI Sora abre Wensheng Video para usuarios globales de ChatGPT Plus",
        "summary": "Los usuarios pueden generar directamente videos de 1080p de hasta 20 segundos en ChatGPT, admitiendo el movimiento de la cámara y las imágenes de referencia de estilo; La suscripción Pro proporciona exportación sin marcas de agua y una mayor duración.",
        "source": "OpenAI",
        "body": [
          "OpenAI abre las capacidades de video de Sora a los suscriptores de ChatGPT Plus en todo el mundo (excepto en algunas regiones). Los usuarios pueden generar videoclips de 1080p de hasta 20 segundos ingresando una descripción de texto o cargando una imagen de referencia en el cuadro de diálogo ChatGPT sin tener que saltar a un sitio separado.",
          "Sora admite la descripción del movimiento de la cámara (empujar, tirar, desplazar, mover), imágenes de referencia de estilo (cargar una imagen de la atmósfera para guiar el tono y la composición) e indicaciones simples del guión gráfico. Los suscriptores de ChatGPT Pro obtienen exportaciones sin marcas de agua, créditos de generación de hasta 60 segundos y colas prioritarias.",
          "En términos de política de contenido, OpenAI prohíbe la generación de retratos de la vida real, personajes protegidos por derechos de autor y contenido pornográfico violento y, de forma predeterminada, agrega un logotipo \"generado por IA\" en la esquina inferior derecha del video generado. Los usuarios pueden descargar MP4, pero deben cumplir con los términos de uso de la plataforma y no pueden usarse para deepfakes engañosos.",
          "En comparación con productos de la competencia como Runway, Kling y Keling, la ventaja de Sora es que se integra perfectamente con el flujo de conversación ChatGPT: primero puede discutir el guión en texto y luego generar un video con un solo clic. La desventaja es que la granularidad del control personalizado es aún más débil que la de las herramientas de video profesionales, y es adecuado para que los creadores de videos cortos hagan primeros borradores en lugar de refinamientos."
        ],
        "highlights": [
          "Generado directamente dentro de ChatGPT Plus, hasta 20 segundos 1080p",
          "Admite movimiento de cámara e imágenes de referencia de estilo.",
          "Suscripción Pro sin marca de agua + mayor duración",
          "Adecuado para el primer borrador de vídeos cortos, la edición precisa aún requiere herramientas profesionales."
        ],
        "tags": [
          "Sora",
          "视频生成",
          "OpenAI"
        ]
      },
      {
        "id": "2026-06-28-agent-benchmark",
        "title": "Lanzamiento de AgentBench 2.0: evaluación de la tasa de finalización de agentes de oficina reales",
        "summary": "El nuevo punto de referencia cubre correo electrónico, formularios, calendarios y flujos de trabajo entre aplicaciones. La tasa de finalización promedio de los marcos de Agentes convencionales en tareas de \"varios pasos sin intervención manual\" es inferior al 35%, lo que expone deficiencias en la planificación y la recuperación de errores.",
        "source": "AgentBench Paper",
        "body": [
          "Se lanza oficialmente AgentBench 2.0, que actualmente es uno de los puntos de referencia de evaluación de Agentes más cercano a los \"escenarios de oficina reales\". A diferencia de los puntos de referencia anteriores que solo realizaban llamadas a herramientas de un solo paso, la versión 2.0 cubre 48 tareas de varios pasos, como envío y recepción de correo electrónico, edición de hojas de cálculo, programación de calendarios y copia y pegado entre aplicaciones, lo que requiere que el Agente las complete de un extremo a otro sin intervención manual.",
          "Divulgación del documento: cuando los modelos convencionales como GPT-4o, Claude 3.5 Sonnet y Gemini 1.5 Pro se combinan con marcos como LangChain y AutoGPT, la tasa promedio de finalización de tareas es inferior al 35%. Los modos de falla se concentran principalmente en tres categorías: interrupciones de la planificación de largo plazo (alcanzar el paso 3 y olvidar el objetivo del paso 1), parámetros de la herramienta que no se autocorrigen después de completar los errores y pérdida de sincronización del estado entre aplicaciones.",
          "Los investigadores propusieron la \"tasa de recuperación de errores\" como un nuevo indicador: si el Agente puede ajustar su estrategia e intentarlo nuevamente en función del mensaje de error después de que falla la llamada a la herramienta. Los resultados muestran que incluso el modelo más potente tiene una tasa de recuperación de errores de sólo alrededor del 50%, lo que indica que el Agente actual todavía está lejos de ser un \"empleado digital confiable\".",
          "Implicaciones para los profesionales: antes de promover el \"Agente completamente automático\", utilice el punto de referencia de la clase AgentBench para realizar una autoevaluación; El diseño del producto debe conservar nodos de confirmación manual en lugar de realizar una operación desatendida en un solo paso."
        ],
        "highlights": [
          "48 tareas reales de oficina de varios pasos",
          "Tasa de finalización promedio de los agentes principales <35%",
          "La planificación a largo plazo y la recuperación de errores son deficiencias importantes",
          "El diseño del producto debe conservar nodos de confirmación manual."
        ],
        "tags": [
          "评测",
          "Agent",
          "研究"
        ]
      },
      {
        "id": "2026-06-28-meta-llama4-scout",
        "title": "Meta Llama 4 Scout 17B de código abierto, la NPU móvil puede ejecutar la versión cuantificada",
        "summary": "El modelo liviano está orientado al agente del lado del cliente y escenarios de resumen, y proporciona oficialmente scripts de conversión Core ML y NNAPI; puede alcanzar 25 tok/s de razonamiento cuantitativo en el iPhone M4.",
        "source": "Meta AI",
        "body": [
          "Meta Llama 4 Scout 17B de código abierto, que se posiciona como un modelo liviano \"primero en el lado del dispositivo\", dirigido a agentes, resumen, traducción y otros escenarios en teléfonos móviles, tabletas y computadoras portátiles. Utilizando el nuevo tokenizador y las variantes RoPE de la serie Llama 4, intente mantener la calidad de la inferencia en el nivel del parámetro 17B.",
          "El lanzamiento oficial del script de conversión Core ML (iOS) y NNAPI (Android), la versión cuantificada INT4 midió alrededor de 25 tokens/s en el iPhone M4, es suficiente para admitir la respuesta de transmisión del asistente de voz. Los chips de la serie M del lado Mac pueden usar el marco MLX para funcionar a más de 40 tok/s.",
          "En comparación con productos de la competencia como Qwen3-32B y Gemma 3, la ventaja de Scout 17B radica en el ecosistema del lado del dispositivo: Meta coopera directamente con los fabricantes de teléfonos móviles para la preinstalación. La desventaja es que la capacidad del idioma chino es más débil que la del modelo nacional de código abierto. Se recomienda más a los usuarios domésticos que utilicen la versión cuantitativa del lado del cliente de Qwen.",
          "Los desarrolladores primero pueden descargar el peso cuantificado GGUF de HuggingFace y probarlo localmente con llama.cpp u Ollama; Si crea una aplicación para iOS, siga el tutorial oficial de Core ML para convertirla e integrarla en el proyecto Swift."
        ],
        "highlights": [
          "Cree una aplicación de conversación, asocie la base de conocimientos y habilite la visualización de referencias",
          "M4 iPhone INT4 alrededor de 25 tok/s",
          "Se proporcionan scripts de conversión de Core ML/NNAPI",
          "Para escenarios chinos, se recomienda dar prioridad a los modelos nacionales de código abierto."
        ],
        "tags": [
          "Llama",
          "端侧",
          "开源"
        ]
      },
      {
        "id": "2026-06-27-copilot-workspace-ga",
        "title": "Microsoft Copilot Workspace está completamente en línea: agente integral para correo electrónico + documentos + reuniones",
        "summary": "Workspace conecta Outlook, Word, Teams y SharePoint en una única sesión de Agente, que puede redactar actas, actualizar tablas de proyectos y programar reuniones entre aplicaciones. La versión empresarial se factura por puesto.",
        "source": "Microsoft Blog",
        "body": [
          "Contexto entre aplicaciones: Copilot puede leer hilos de correo electrónico autorizados por el usuario y documentos de SharePoint, y completar \"leer minutos → cambiar plan → enviar a Teams\" en una conversación. Este es uno de los cambios más observados en el campo de lanzamiento de productos del 27 de junio de 2026 en torno al \"lanzamiento completo de Microsoft Copilot Workspace\".",
          "Límites de permisos: los administradores pueden configurar el rango de residencia de datos, que no abarca los inquilinos de forma predeterminada; Los documentos de etiquetas confidenciales requieren aprobación adicional antes de que a los agentes se les permita escribir. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en función de esto para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Cambios de precios: Microsoft 365 E5 incluye una cuota básica y el exceso de facturación se basa en la cantidad de pasos del Agente; Los equipos pequeños y medianos pueden iniciar un piloto de 30 días. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Sugerencias de implementación: Priorizar la realización de pruebas piloto en los dos escenarios de alta frecuencia de \"Recopilación de informes semanales\" y \"Minutos de clientes\". El ROI es el más fácil de cuantificar. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Contexto entre aplicaciones: Copilot puede leer hilos de correo electrónico autorizados por el usuario y documentos de SharePoint, y completar \"leer minutos → cambiar plan → enviar a Teams\" en una conversación",
          "Límites de permisos: los administradores pueden configurar el rango de residencia de datos, que no cruza inquilinos de forma predeterminada; Los documentos de etiquetas confidenciales requieren aprobación adicional antes de que los agentes puedan escribir",
          "Cambios de precios: Microsoft 365 E5 incluye una cuota básica y el exceso de facturación se basa en la cantidad de pasos del Agente; Los equipos pequeños y medianos pueden iniciar un piloto de 30 días.",
          "Sugerencias de implementación: Priorizar la realización de pruebas piloto en dos tipos de escenarios de alta frecuencia: \"Recopilación de informes semanales\" y \"Minutos de clientes\". El ROI es el más fácil de cuantificar."
        ],
        "tags": [
          "Copilot",
          "办公",
          "Agent"
        ]
      },
      {
        "id": "2026-06-26-github-copilot-agent",
        "title": "Modo GitHub Copilot Agent GA: envía automáticamente PR para tareas a nivel de almacén",
        "summary": "El agente puede clonar descripciones de problemas, buscar en la base del código, modificar varios archivos y abrir solicitudes de extracción; ayuda a las personas a aprobar gradualmente las diferencias en el ciclo.",
        "source": "GitHub Changelog",
        "body": [
          "Flujo de trabajo: inicie el Agente con un clic desde el problema, cree ramas automáticamente, envíe confirmaciones y adjunte instrucciones de implementación. Este es uno de los cambios más observados en el campo de lanzamiento de productos el 26 de junio de 2026 en torno al \"GitHub Copilot Agent Mode GA\".",
          "Mecanismo de seguridad: el valor predeterminado es un token de solo lectura y las operaciones de escritura requieren que los usuarios lo acepten paso a paso; la versión empresarial puede forzar el control de acceso al escaneo de códigos. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Límites aplicables: adecuado para corrección de errores, pruebas y sincronización de documentos; Todavía se recomienda realizar manualmente la reconstrucción a nivel de arquitectura. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está orientado a usuarios transfronterizos o multirregionales.",
          "Práctica en equipo: escriba los criterios de aceptación en la plantilla de Problemas y la tasa de finalización del Agente podrá aumentar entre un 20% y un 30%. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Flujo de trabajo: inicie el agente con un clic desde el problema, cree sucursales automáticamente, envíe confirmaciones y adjunte instrucciones de implementación",
          "Mecanismo de seguridad: el valor predeterminado es el token de solo lectura y la operación de escritura requiere que el usuario lo acepte paso a paso; la versión empresarial puede forzar el control de acceso al escaneo de códigos",
          "Límite aplicable: adecuado para corrección de errores, pruebas y sincronización de documentos; Todavía se recomienda la refactorización manual a nivel de arquitectura.",
          "Práctica en equipo: escriba los criterios de aceptación en la plantilla de Problemas y la tasa de finalización del Agente se puede aumentar entre un 20% y un 30%."
        ],
        "tags": [
          "Copilot",
          "编程",
          "GitHub"
        ]
      },
      {
        "id": "2026-06-25-notion-ai-3",
        "title": "Notion AI 3.0 lanza \"Agente de base de datos\": el lenguaje natural cambia vistas y fórmulas",
        "summary": "Los usuarios pueden utilizar el lenguaje hablado para describir los requisitos de filtrado, agrupación y resumen, y la IA genera e interpreta fórmulas directamente; Se admiten asociaciones entre páginas y llenado de atributos por lotes.",
        "source": "Notion Release Notes",
        "body": [
          "Capacidades principales: cree vistas Kanban/calendario en una oración y complete automáticamente los campos relacionados. Este es uno de los cambios más observados en el campo de lanzamiento de productos del 25 de junio de 2026 en torno a los \"lanzamientos de Notion AI 3.0\" Agente de base de datos\"\".",
          "Seguimiento de auditoría: cada modificación de la IA conserva la diferencia y se puede revertir a la versión anterior de la estructura de la base de datos con un solo clic. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Escenarios de colaboración: adecuados para colaboración estructurada, como paneles operativos, canales de contratación y programación de cursos. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Nota: Las fórmulas complejas entre bases de datos aún requieren la verificación manual de las condiciones de contorno. Para los estudiantes de IA, esto se puede utilizar para actualizar mapas de herramientas personales y listas de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Capacidades principales: cree vistas Kanban/calendario en una oración y complete automáticamente los campos relacionados",
          "Seguimiento de auditoría: cada modificación de la IA conserva la diferencia y se puede revertir a la versión anterior de la estructura de la base de datos con un solo clic.",
          "Escenarios de colaboración: adecuados para colaboración estructurada, como paneles operativos, canales de contratación, programación de cursos, etc.",
          "Nota: Las fórmulas complejas entre bases de datos aún requieren la verificación manual de las condiciones de contorno"
        ],
        "tags": [
          "Notion",
          "办公",
          "Agent"
        ]
      },
      {
        "id": "2026-06-24-perplexity-pages",
        "title": "Perplexity Pages Team Edition: publicación con un solo clic de páginas de investigación que pueden citar fuentes",
        "summary": "El equipo puede crear conjuntamente una página de tema de investigación con notas a pie de página, que admita gráficos integrados y actualización automática periódica de párrafos; es adecuado para que los grupos de investigación de mercado y de inversión lo compartan externamente.",
        "source": "Perplexity Blog",
        "body": [
          "Formulario de publicación: genere páginas temáticas públicas o protegidas con contraseña, conserve enlaces de referencia rastreables. Este es uno de los cambios más observados en torno a la \"Perplexity Pages Team Edition\" en el campo de lanzamiento del producto el 24 de junio de 2026.",
          "Estrategia de actualización: se pueden configurar actualizaciones automáticas semanales para párrafos específicos, lo que reduce el mantenimiento manual. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Demostración: la demostración oficial admite la interacción \"usar texto para cambiar imágenes\". Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en función de esto para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Uso del alumno: convierta la lista de lecturas del curso en una página de temas que se pueda compartir. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Escriba una agenda antes de la reunión, publique puntos clave durante la reunión y utilice Notion AI para generar actas y tareas.",
          "Estrategia de actualización: puede configurar actualizaciones semanales automáticas para párrafos específicos para reducir el mantenimiento manual.",
          "Permisos: los administradores del equipo controlan los editores y las listas blancas de nombres de dominio externos",
          "Uso del alumno: convierta la lista de lecturas del curso en una página de temas que se pueda compartir"
        ],
        "tags": [
          "Perplexity",
          "调研",
          "协作"
        ]
      },
      {
        "id": "2026-06-23-adobe-firefly-video",
        "title": "Beta abierta de Adobe Firefly Video: pista de edición de vídeo integrada de Premiere",
        "summary": "Firefly Video genera clips que caen directamente en la línea de tiempo de Premiere y admite Extend, Inpaint y combinación de estilos con el metraje existente.",
        "source": "Adobe News",
        "body": [
          "Flujo de trabajo: ingrese la descripción del guión gráfico en la barra lateral de Premiere y genere un B-roll para completar las tomas vacías. Este es uno de los cambios más vistos en el campo de lanzamiento de productos el 23 de junio de 2026 en torno a la \"Beta abierta de Adobe Firefly Video\".",
          "Política de derechos de autor: la declaración de datos de entrenamiento no contiene retratos no autorizados de personas reales; exportar con credenciales de contenido. Los equipos técnicos y de producto deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción completo sin una verificación piloto.",
          "En comparación con los productos de la competencia: la granularidad del control es mejor que la de los generadores de páginas web puros, pero la duración sigue siendo relativamente corta. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Recomendación: úselo primero para la toma vacía del avance y luego unifíquelo con el material de la toma real para la gradación de color. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Flujo de trabajo: ingrese la descripción del guión gráfico en la barra lateral de Premiere y genere un B-roll para completar las tomas vacías.",
          "Política de derechos de autor: la declaración de datos de entrenamiento no contiene retratos no autorizados de personas reales; exportar con credenciales de contenido",
          "En comparación con los productos de la competencia: la granularidad del control es mejor que la de los generadores de páginas web puros, pero la duración aún es corta.",
          "Recomendación: utilícelo primero para tomas vacías del tráiler y luego unifíquelo con el material de toma real para la gradación de color."
        ],
        "tags": [
          "Adobe",
          "视频",
          "Firefly"
        ]
      },
      {
        "id": "2026-06-22-apple-intelligence-cn",
        "title": "La versión de Apple Intelligence Mainland China se abre en escala de grises: resumen local + herramientas de escritura",
        "summary": "Los usuarios de escala de grises pueden utilizar modelos locales para resumir, pulir y priorizar notificaciones en memorandos y correos electrónicos; Las mejoras en la nube se lanzarán en lotes.",
        "source": "Apple Newsroom",
        "body": [
          "Prioridad local: el resumen y la reescritura de escritura se completan en la NPU del dispositivo de forma predeterminada, lo que reduce los problemas de privacidad. Este es uno de los cambios más observados en el campo de lanzamiento de productos del 22 de junio de 2026 en torno a \"La versión de Apple Intelligence China continental activa la escala de grises\".",
          "Apertura en lotes: Tushengtu y Cross-App Agent aún no se han lanzado por completo, así que preste atención a los anuncios de actualización del sistema. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Ecología: los desarrolladores pueden acceder a la API de escritura a través de App Intents. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Consejo de usuario: los dispositivos antiguos deben confirmar si la generación Neural Engine es compatible. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Prioridad local: el resumen y la reescritura de escritura se completan en la NPU del dispositivo de forma predeterminada, lo que reduce los problemas de privacidad.",
          "Apertura en lotes: Tushengtu y Cross-App Agent aún no están completamente disponibles, preste atención al anuncio de actualización del sistema",
          "Ecología: los desarrolladores pueden acceder a la API de escritura a través de App Intents",
          "Consejo de usuario: los dispositivos antiguos deben confirmar si las generaciones de Neural Engine lo admiten"
        ],
        "tags": [
          "Apple",
          "端侧",
          "中国"
        ]
      },
      {
        "id": "2026-06-21-windsurf-cascade-2",
        "title": "Windsurf Cascade 2.0 introduce \"archivos de memoria\" para el contexto del proyecto entre sesiones",
        "summary": "Empleo: los equipos pequeños prefieren capacidades completas de orquestación de agentes",
        "source": "Windsurf Blog",
        "body": [
          "Mecanismo de memoria: el agente puede escribir las reglas confirmadas por el usuario en un archivo de memoria para su posterior reutilización. Este es uno de los cambios más observados en el área de lanzamiento de productos del 21 de junio de 2026 en torno a \"Windsurf Cascade 2.0 presenta el contexto del proyecto de sesiones cruzadas de\" archivo de memoria \"\".",
          "Compartir en equipo: Memory.md se puede enviar a Git para unificar los estándares de codificación del equipo. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Comparar cursor: Ambos se están moviendo hacia la memoria a largo plazo a nivel de proyecto. La selección depende del soporte de idiomas y de los precios. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Práctica: Mantenga manualmente la memoria durante la primera semana y luego las actualizaciones autónomas del Agente requieren revisión manual. Para los estudiantes de IA, esto se puede utilizar para actualizar el mapa de herramientas personal y la lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Mecanismo de memoria: el agente puede escribir las reglas confirmadas por el usuario en un archivo de memoria para su posterior reutilización.",
          "Compartir en equipo: Memory.md se puede enviar a Git para unificar los estándares de codificación del equipo",
          "Comparar cursor: Ambos se están moviendo hacia la memoria a largo plazo a nivel de proyecto. La selección depende del soporte de idiomas y de los precios.",
          "Práctica: Mantenga manualmente la memoria durante la primera semana y luego las actualizaciones autónomas del Agente requieren revisión manual."
        ],
        "tags": [
          "Windsurf",
          "IDE",
          "编程"
        ]
      },
      {
        "id": "2026-06-20-zoom-ai-companion-3",
        "title": "Zoom AI Companion 3.0: Preguntas y respuestas en tiempo real y seguimiento de elementos de acción durante las reuniones",
        "summary": "Durante la reunión, puedes preguntar en privado \"¿Cuál es el número de presupuesto que acabamos de mencionar?\"; Después de la reunión, se generarán automáticamente elementos de acción de Jira/Asana y se realizará un seguimiento de su finalización.",
        "source": "Zoom Blog",
        "body": [
          "Asistente durante la reunión: Sólo la persona que hizo la pregunta puede ver la respuesta para no interrumpir el ritmo de la reunión. Este es uno de los cambios más observados en torno a \"Zoom AI Companion 3.0\" en el campo de lanzamiento de productos del 20 de junio de 2026.",
          "Integración: admite la sincronización bidireccional de elementos de acción con Salesforce y Jira. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Cumplimiento: las empresas pueden desactivar la grabación en la nube y guardar solo resúmenes locales. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Consejo: cargar el PDF de la agenda antes de la reunión puede mejorar la precisión del resumen. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Asistente durante la reunión: Sólo la persona que hizo la pregunta puede ver la respuesta para no interrumpir el ritmo de la reunión.",
          "Integración: admite la sincronización bidireccional de elementos de acción con Salesforce y Jira",
          "Cumplimiento: las empresas pueden desactivar la grabación en la nube y conservar solo resúmenes locales",
          "Consejo: cargar el PDF de la agenda antes de la reunión puede mejorar la precisión del resumen"
        ],
        "tags": [
          "Zoom",
          "会议",
          "办公"
        ]
      },
      {
        "id": "2026-06-19-mistral-large-3",
        "title": "Mistral Large 3 Open Weight: mejora del razonamiento multilingüe",
        "summary": "Mistral lanza la versión de peso abierto Large 3, mejoras de razonamiento en francés, inglés, alemán y español, licencia Apache 2.0; vLLM y TGI reciben soporte el mismo día.",
        "source": "Mistral AI",
        "body": [
          "Rendimiento: MMLU-Pro y BBH son aproximadamente un 8% mejores que Large 2, y el texto en francés tiene ventajas obvias. Este es uno de los cambios más observados en el campo del modelo de código abierto el 19 de junio de 2026 en torno al \"peso abierto Mistral Large 3\".",
          "Implementación: BF16 requiere 2 × 80 GB; La tarjeta única AWQ de 4 bits puede ejecutar 48 GB. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Llamada de herramienta: modo de esquema JSON nativo, adecuado para la orquestación del agente. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Selección: Priorizar escenarios europeos de soberanía de datos. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Rendimiento: MMLU-Pro y BBH son aproximadamente un 8% mejores que Large 2, y el texto en francés tiene ventajas obvias.",
          "Implementación: BF16 requiere 2 × 80 GB; Se puede ejecutar una tarjeta única AWQ de 4 bits de 48 GB",
          "Llamada de herramienta: modo de esquema JSON nativo, adecuado para la orquestación de agentes",
          "Selección: Priorizar los escenarios europeos de soberanía de datos"
        ],
        "tags": [
          "Mistral",
          "开源",
          "推理"
        ]
      },
      {
        "id": "2026-06-18-gemma-3-12b",
        "title": "Código abierto Google Gemma 3 12B: modelo pequeño multimodal compatible con una sola tarjeta",
        "summary": "Gemma 3 12B admite entrada de imagen + texto, contexto de 128K; Adecuado para experimentos locales con portátiles y RAG ligero.",
        "source": "Google DeepMind",
        "body": [
          "Modal: puede ingresar capturas de pantalla de gráficos para preguntas y respuestas, adecuadas para la interpretación de informes. Demostración. Este es uno de los cambios más observados en el campo del modelo de código abierto el 18 de junio de 2026 en torno a \"Google Gemma 3 12B Open Source\".",
          "Los usuarios pueden generar directamente videos de 1080p de hasta 20 segundos en ChatGPT, admitiendo el movimiento de la cámara y las imágenes de referencia de estilo; La suscripción Pro proporciona exportación sin marcas de agua y una mayor duración.",
          "Cuantificación: Ollama proporciona Q4_K_M, máquina de memoria de 16 GB para operación de prueba. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Limitaciones: el dominio del chino es más débil que el modelo equivalente de Qwen. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Capacidad: mejora de la coherencia de la escena de interacción a nivel de minutos. Este es uno de los cambios más observados en el campo de avances de investigación del 25 de mayo de 2026 en torno a \"Google DeepMind lanza el modelo mundial Genie 3\".",
          "Licencia: La licencia de Gemma permite el uso comercial sujeto a la política de uso.",
          "Cuantificación: Ollama proporciona Q4_K_M, se puede probar una máquina de memoria de 16 GB",
          "Limitaciones: la capacidad china es más débil que el modelo equivalente de Qwen"
        ],
        "tags": [
          "Gemma",
          "开源",
          "多模态"
        ]
      },
      {
        "id": "2026-06-17-sd3-medium-open",
        "title": "Stable Diffusion 3 Código abierto de peso medio: generación de imágenes comercial",
        "summary": "Empleo: los equipos pequeños prefieren capacidades completas de orquestación de agentes. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
        "source": "Stability AI",
        "body": [
          "Calidad: Se ha mejorado la usabilidad de los carteles con fuentes pequeñas, pero aún se recomienda modificar los caracteres en PS más adelante. Este es uno de los cambios más observados en el campo de los modelos de código abierto el 17 de junio de 2026 en torno a \"Stable Diffusion 3 Medium Weighted Open Source\".",
          "Hardware: 12 GB de memoria de video pueden generar 1024 y se requiere mayor VRAM en lotes. Los equipos técnicos y de producto deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Cumplimiento: está prohibido generar retratos de celebridades específicas y se requiere un filtrado local de las palabras clave. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Flujo de trabajo: la combinación con ControlNet Union permite un control preciso de la composición. Para los estudiantes de IA, esto se puede utilizar para actualizar mapas de herramientas personales y listas de obstáculos, y completar una práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Calidad: se ha mejorado la usabilidad de los carteles con fuentes pequeñas, pero aún se recomienda modificar las fuentes en PS más adelante.",
          "Hardware: memoria de video de 12 GB con capacidad para generación 1024, se requiere mayor VRAM para el procesamiento por lotes",
          "Cumplimiento: está prohibido generar retratos de celebridades específicas y se requieren palabras clave de filtrado local.",
          "Flujo de trabajo: combinado con ControlNet Union para un control preciso de la composición"
        ],
        "tags": [
          "SD3",
          "图像",
          "开源"
        ]
      },
      {
        "id": "2026-06-16-phi-4-mini",
        "title": "Código abierto de Microsoft Phi-4-mini: modelo de inferencia a nivel móvil de 3.800 millones",
        "summary": "Phi-4-mini lidera la lista de pequeños modelos matemáticos y lógicos y es adecuado para asistentes en el dispositivo y robots de preguntas frecuentes fuera de línea.",
        "source": "Microsoft Research",
        "body": [
          "Posicionamiento: 3,8 mil millones de parámetros pero rendimiento de razonamiento cercano a 7 mil millones, lo que enfatiza la calidad de los datos. Este es uno de los cambios más observados en el campo del modelo de código abierto en torno al \"Microsoft Phi-4-mini Open Source\" el 16 de junio de 2026.",
          "Implementación: se lanzó la muestra ONNX Runtime Mobile. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Escenario: Adecuado para tareas deterministas como clasificación de órdenes de trabajo y verificación de formularios. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Nota: La escritura creativa y la generación de artículos extensos no son puntos fuertes. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Prioridad",
          "Implementación: Lanzamiento de muestra de ONNX Runtime Mobile",
          "Escenario: Adecuado para tareas deterministas como clasificación de órdenes de trabajo y verificación de formularios",
          "Nota: La escritura creativa y la generación de artículos extensos no son puntos fuertes."
        ],
        "tags": [
          "Phi",
          "端侧",
          "微软"
        ]
      },
      {
        "id": "2026-06-15-internlm3-8b",
        "title": "Scholar Puyu InternLM3-8B de código abierto: optimización de llamadas de herramientas de agentes chinos",
        "summary": "Evaluación: las empresas deberían crear su propio conjunto de pruebas de gráficos de dominio",
        "source": "InternLM GitHub",
        "body": [
          "Chino: Las preguntas y respuestas sobre conocimientos de chino son significativamente mejores que las de Llama del mismo nivel. Este es uno de los cambios más vistos en el campo de los modelos de código abierto el 2026-06-15 en torno al \"Scholar·Puyu InternLM3-8B Open Source\".",
          "Herramienta: la tasa de éxito de las llamadas a funciones alcanza más del 85 % en el punto de referencia local. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en función de esto para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Ecología: Se encuentran disponibles scripts de inicio con un solo clic para LMDeploy y FastChat. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Recomendación: Se puede priorizar la evaluación de los agentes chinos en intranets gubernamentales y empresariales. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Chino: las preguntas y respuestas de trivia chinas son significativamente mejores que Llama en el mismo nivel",
          "Herramienta: la tasa de éxito de las llamadas a funciones alcanza más del 85 % en el punto de referencia local",
          "Ecología: los scripts de inicio con un solo clic de LMDeploy y FastChat están disponibles",
          "Sugerencia: Primero se pueden evaluar los agentes chinos en las intranets gubernamentales y empresariales"
        ],
        "tags": [
          "InternLM",
          "中文",
          "开源"
        ]
      },
      {
        "id": "2026-06-14-yi-lightning-34b",
        "title": "Código abierto Zero One Thing Yi-Lightning 34B: optimización de inferencia de alto rendimiento",
        "summary": "Yi-Lightning optimiza el caché KV y la decodificación especulativa para escenarios de QPS alto, y su forma API es compatible con OpenAI.",
        "source": "01.AI",
        "body": [
          "Rendimiento: vLLM es aproximadamente un 35% más alto que los tokens Yi-34B estándar. Este es uno de los cambios más observados en el campo del modelo de código abierto el 14 de junio de 2026 en torno a \"Zero One Thousand Yi-Lightning 34B Open Source\".",
          "Costo: Adecuado para alta concurrencia, como servicio al cliente y resúmenes de búsqueda. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Licencias: consulte los términos de licencia comunitaria más recientes. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Despliegue: Se recomienda emparejarlo con equilibrio de carga y disyuntor. Para los estudiantes de IA, esto se puede utilizar para actualizar el mapa de herramientas personal y la lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Rendimiento: vLLM mejora aproximadamente un 35 % en comparación con los tokens/s estándar Yi-34B",
          "Costo: adecuado para alta concurrencia, como servicio al cliente y resúmenes de búsqueda.",
          "Licencias: consulte los últimos términos de licencia comunitaria",
          "Implementación: se recomienda emparejarlo con equilibrio de carga y disyuntor."
        ],
        "tags": [
          "Yi",
          "推理",
          "开源"
        ]
      },
      {
        "id": "2026-06-13-emu3-vision",
        "title": "Código abierto de Zhiyuan Emu3: comprensión y generación multimodal unificada",
        "summary": "Emu3 utiliza un único modelo para completar la descripción de la imagen, instrucciones de edición y diagramas vicencianos. La investigación está mejorando, pero la ingeniería aún se encuentra en sus primeras etapas.",
        "source": "BAAI",
        "body": [
          "Arquitectura unificada: comprenda y genere pesos compartidos, reduciendo el mantenimiento multimodelo. Este es uno de los cambios más observados en el campo de los modelos de código abierto el 2026-06-13 en torno al \"Intelligent Source Emu3 Open Source\".",
          "Escriba una agenda antes de la reunión, publique puntos clave durante la reunión y utilice Notion AI para generar actas y tareas.",
          "Producción: La latencia y la estabilidad aún no han alcanzado el nivel de las API comerciales. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Seguir: Adecuado para el seguimiento por parte de investigadores multimodales. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Arquitectura unificada: comprenda y genere pesos compartidos, reduciendo el mantenimiento de múltiples modelos",
          "Demostración: la demostración oficial admite la interacción \"modificar imágenes con texto\"",
          "Producción: Latencia y estabilidad aún no están en los niveles API comerciales",
          "Atención: adecuado para el seguimiento de investigadores multimodal"
        ],
        "tags": [
          "Emu3",
          "多模态",
          "研究"
        ]
      },
      {
        "id": "2026-06-12-command-r-plus-ft",
        "title": "Cohere Command R+ Ajuste fino Peso Abierto: Plantilla RAG empresarial",
        "summary": "Cohere publica una guía de ajuste fino de R+ y un ejemplo de ponderación de LoRA, enfatizando la generación de citas y la alineación de múltiples documentos.",
        "source": "Cohere",
        "body": [
          "RAG: token de cita incorporado para reducir las citas ilusorias. Este es uno de los cambios más observados en el campo del modelo de código abierto el 2026-06-12 en torno a la \"apertura de peso de ajuste fino de Cohere Command R+\".",
          "Ajuste fino: proporciona formatos de datos y secuencias de comandos de ajuste fino de parámetros completos 8 × A100. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Comparación: los documentos largos en inglés tienen ventajas obvias, mientras que el chino requiere preparar su propio corpus. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Práctica: Las preguntas y respuestas sobre documentos legales/médicos en inglés se pueden poner a prueba rápidamente. Para los estudiantes de IA, esto se puede utilizar para actualizar el mapa de herramientas personal y la lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "RAG: token de cita incorporado para reducir las citas fantasma",
          "Ajuste fino: proporciona formatos de datos y secuencias de comandos de ajuste fino de parámetros completos 8×A100",
          "Comparación: los documentos largos en inglés tienen ventajas obvias, mientras que el chino requiere preparar su propio corpus.",
          "Práctica: Las preguntas y respuestas sobre documentos legales/médicos en inglés se pueden poner a prueba rápidamente"
        ],
        "tags": [
          "Cohere",
          "RAG",
          "微调"
        ]
      },
      {
        "id": "2026-06-11-ai-chip-supply",
        "title": "Ciclo de entrega de chips AI del segundo trimestre de 2026 acortado: punto H100/B200 suelto",
        "summary": "Los datos del canal muestran que la espera para la entrega de la GPU se redujo de 12 semanas a 4 a 6 semanas, los proveedores de la nube han reducido las ofertas para algunas instancias de capacitación y los costos de la capacitación empresarial han disminuido.",
        "source": "SemiAnalysis",
        "body": [
          "Oferta y demanda: aumento de la capacidad de producción de Blackwell + relocalización de H100 de segunda mano para aliviar la escasez Este es uno de los cambios más observados en la dinámica de la industria el 11 de junio de 2026 en torno al \"acortamiento del ciclo de entrega de chips de IA del segundo trimestre de 2026\".",
          "Precio: Los precios al contado de las GPU en algunas áreas cayeron un 18% intertrimestral. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Impacto: los equipos pequeños y medianos pueden permitirse experimentos de ajuste a corto plazo. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Sugerencia: Dar prioridad a evaluar el costo del razonamiento en lugar de acumular tarjetas a ciegas. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Si no está satisfecho, encierre en un círculo el área y cámbiela.",
          "Precio: los precios al contado de las GPU cayeron un 18% intertrimestral en algunas áreas",
          "Impacto: los equipos pequeños y medianos pueden permitirse experimentos de ajuste a corto plazo",
          "Sugerencia: priorizar la evaluación de los costos de razonamiento en lugar de acumular tarjetas a ciegas"
        ],
        "tags": [
          "芯片",
          "云计算",
          "成本"
        ]
      },
      {
        "id": "2026-06-10-yc-w26-ai-batch",
        "title": "Lote YC W26: más del 78% de las empresas son productos nativos de IA",
        "summary": "Los aspectos más destacados del Demo Day se centran en los agentes verticales, el flujo de trabajo de voz y las herramientas de cumplimiento; la ARR mediana inicial se duplicó en comparación con el año pasado.",
        "source": "YC Blog",
        "body": [
          "Tendencia: “Copiloto de",
          "Financiamiento: La valoración media de la ronda semilla ha aumentado y los inversores se centran en la retención en lugar de la demostración. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Empleo: los equipos pequeños prefieren capacidades completas de orquestación de agentes. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Aprendizaje: preste atención a las alternativas de código abierto y las barreras verticales de datos. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Tendencia: \"Copilot for X\" sigue siendo popular, pero la diferenciación gira en torno a los datos de la industria",
          "Financiamiento: las valoraciones medianas de las rondas iniciales aumentan a medida que los inversores buscan la retención en lugar de la demostración",
          "Empleo: los equipos pequeños prefieren capacidades completas de orquestación de agentes",
          "Aprendizaje: preste atención a las alternativas de código abierto y las barreras verticales de datos"
        ],
        "tags": [
          "创业",
          "YC",
          "Agent"
        ]
      },
      {
        "id": "2026-06-09-cursor-valuation",
        "title": "Cursor completa una nueva financiación, valorada en 9.000 millones de dólares",
        "summary": "Anysphere confirma que los ingresos recurrentes anuales de Cursor han superado los 500 millones de dólares y su proporción de clientes empresariales ha aumentado.",
        "source": "TechCrunch",
        "body": [
          "Ingresos: suscripción personal + Teams con tracción en dos ruedas, Teams está creciendo más rápido. Este es uno de los cambios más observados en la dinámica de la industria el 9 de junio de 2026 en torno a \"Cursor completa una nueva financiación, valorada en 9 mil millones de dólares\".",
          "Producto: Se fortalecerá la auditoría de seguridad de los agentes y el control de políticas corporativas. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Competición: Windsurf, Copiloto, Claude Code se basan en tres pilares. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Usuarios: preste atención a los descuentos educativos y la gestión de puestos de equipo. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Ingresos: suscripción personal + Teams con tracción en dos ruedas, Teams está creciendo más rápido",
          "Producto: Se fortalecerá la auditoría de seguridad de los agentes y el control de políticas corporativas",
          "Competición: Windsurf, Copiloto, Código Claude tres pilares",
          "Usuario: preste atención a los descuentos educativos y la gestión de puestos de equipo"
        ],
        "tags": [
          "Cursor",
          "融资",
          "IDE"
        ]
      },
      {
        "id": "2026-06-08-openai-enterprise-arr",
        "title": "El ARR empresarial de OpenAI supera los 8.000 millones de dólares y la API representa más de la mitad",
        "summary": "La llamada de resultados reveló el crecimiento de ChatGPT Enterprise y API, y aumentó la contribución de los paquetes de cumplimiento médico y financiero.",
        "source": "OpenAI",
        "body": [
          "Estructura: Los ingresos de API superaron la mitad por primera vez, lo que indica una integración B2B más profunda. Este es uno de los cambios más observados en el campo de la dinámica de la industria el 8 de junio de 2026 en torno a \"El ARR empresarial de OpenAI superó los 8 mil millones de dólares y la API representó más de la mitad\".",
          "Cumplimiento: los paquetes HIPAA y SOC2 impulsan importantes firmas de clientes. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Precio: Al razonar que los paquetes de uso y reducción de precio coexisten, los clientes deben hacer negocios y cumplir con FinOps. Se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Ilustración: la decisión entre una API de construcción propia y una API oficial debe basarse en la sensibilidad de los datos. Para los estudiantes de IA, esto se puede utilizar para actualizar el mapa de herramientas personal y la lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Estructura: Los ingresos de API superan la mitad por primera vez, lo que indica una integración B2B más profunda",
          "Cumplimiento: los paquetes HIPAA y SOC2 impulsan la contratación de clientes clave",
          "Precio: el razonamiento de reducción de precio y paquete de uso coexisten, los clientes deben realizar FinOps",
          "Ilustración: la decisión entre una API de construcción propia y una API oficial debe basarse en la sensibilidad de los datos"
        ],
        "tags": [
          "OpenAI",
          "企业",
          "市场"
        ]
      },
      {
        "id": "2026-06-07-hf-enterprise",
        "title": "Escriba una agenda antes de la reunión, publique puntos clave durante la reunión y utilice Notion AI para generar actas y tareas.",
        "summary": "Los clientes empresariales implementan modelos de código abierto y pistas de auditoría a través de centros privados, que se han convertido en una arquitectura común en los asuntos financieros y gubernamentales.",
        "source": "Hugging Face",
        "body": [
          "Modelo: Centro privado + Puntos finales de inferencia integral Este es uno de los cambios más observados en la dinámica de la industria el 7 de junio de 2026 en torno a \"Los ingresos por alojamiento empresarial de Hugging Face se duplicaron, la tarjeta modelo se convierte en la entrada de compras\".",
          "Gobernanza: las tarjetas modelo y las tarjetas de datos se convierten en materiales de auditoría de cumplimiento. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Ecología: integración madura con K8 y Airflow. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Recomendación: bloquee el modelo SBOM antes de implementarlo en la intranet. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Modo: Centro privado + Puntos finales de inferencia de ventanilla única",
          "Gobernanza: las tarjetas modelo y las tarjetas de datos se convierten en materiales de auditoría de cumplimiento",
          "Ecología: integración madura con K8 y Airflow",
          "Recomendación: bloquear el modelo SBOM antes de implementarlo en la intranet"
        ],
        "tags": [
          "HuggingFace",
          "企业",
          "MLOps"
        ]
      },
      {
        "id": "2026-06-06-ai-job-market",
        "title": "Informe de trabajo de IA de 2026: la demanda de ingenieros agentes aumenta un 120 % interanual",
        "summary": "Un informe conjunto de plataformas de contratación muestra que el salario medio de los \"ingenieros agentes\" que pueden escribir puntos de referencia de evaluación y cadenas de herramientas supera el de los ingenieros de ML tradicionales.",
        "source": "LinkedIn Economic Graph",
        "body": [
          "Comentario",
          "Región: Norte, Shenzhen, Hangzhou y Singapur son las más demandadas. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Primeros pasos: los portafolios son más importantes que los documentos. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Recomendación: Master 1 Agente IDE + 1 Plataforma de Automatización. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Habilidades: Rapidez, RAG, evaluación y observabilidad son esenciales",
          "Región: Del norte a Shenzhen, Hangzhou y Singapur tienen la mayor demanda",
          "Primeros pasos: el portafolio es más importante que el ensayo",
          "Recomendación: Master 1 Agente IDE + 1 Plataforma de Automatización"
        ],
        "tags": [
          "就业",
          "Agent",
          "技能"
        ]
      },
      {
        "id": "2026-06-05-vertical-ai-saas",
        "title": "La financiación vertical de SaaS con IA se recupera: los sectores jurídico, médico y de fabricación ocupan los tres primeros puestos",
        "summary": "Los datos de capital de riesgo del segundo trimestre muestran que la retención de ARR en escenarios verticales es mejor que los chats generales; los compradores están dispuestos a pagar por el cumplimiento y el flujo de trabajo.",
        "source": "a16z",
        "body": [
          "Retención: las funciones de IA integradas en los flujos de trabajo tienen NDR más altos. Este es uno de los cambios más observados en la dinámica de la industria el 5 de junio de 2026 en torno al \"resurgimiento de la financiación vertical de AI SaaS\".",
          "Barreras: Los datos de la industria y los circuitos de retroalimentación de los expertos son fosos. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Riesgo: Reducción de precio de modelos grandes generales y aplicaciones de carcasa delgada. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Para reuniones delicadas, primero confirme si la empresa permite la transcripción en la nube."
        ],
        "highlights": [
          "Retención: las capacidades de IA integradas en los flujos de trabajo tienen un NDR más alto",
          "Barreras: los datos de la industria y los circuitos de retroalimentación de los expertos son fosos",
          "Riesgo: Reducción de precio de modelos grandes generales para aplicaciones de carcasa delgada extruida",
          "Emprendimiento: elija un escenario concreto con un retorno de la inversión claro"
        ],
        "tags": [
          "SaaS",
          "垂直",
          "融资"
        ]
      },
      {
        "id": "2026-06-04-china-ai-app-dau",
        "title": "// Calcular el importe del descuento del pedido\n// Reglas: menos 10 por compras superiores a 100, menos 30 por compras superiores a 200, menos 80 por compras superiores a 500\n// Entrada: importe del pedido (número no negativo, unidad: yuan)\n// Salida: {original, descuento, final} son todos números, final >= 0\n// Límite: descuento de pedido de 0 yuanes = 0; la entrada negativa arroja un error\n// Ejemplo: calcDiscount(150) => { original: 150, descuento: 10, final: 140 }\nfunción calcDescuento(montodelpedido) {\n  // El copiloto completa desde aquí\n}",
        "summary": "Los datos de mayo de QuestMobile muestran que las aplicaciones de minutos de oficina, toma de fotografías y resolución de problemas y generación de videos han liderado el crecimiento mes a mes en MAU.",
        "source": "QuestMobile",
        "body": [
          "Categoría: Colaboración en la oficina y tutoría educativa ocupan seis de las diez primeras posiciones. Este es uno de los cambios más observados en el campo de la dinámica de la industria el 4 de junio de 2026 en torno a la \"Actualización de la lista activa mensual de aplicaciones nativas de IA nacionales\".",
          "Monetización: la facturación híbrida de suscripción + pago por uso se ha generalizado. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Cumplimiento: Se deberá comprobar en las estanterías el modo de menores y la identificación del contenido. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Producto: el crecimiento del chat puro se está desacelerando y las funciones de tipo herramienta son más complicadas. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Categoría: La colaboración en la oficina y la tutoría educativa ocupan seis de las diez primeras posiciones",
          "Monetización: la facturación híbrida de suscripción + pago por evento se vuelve común",
          "Cumplimiento: se debe verificar el modo menor y la identificación del contenido antes de incluirlos en la lista.",
          "Producto: el crecimiento del chat puro se está desacelerando y las funciones de tipo herramienta son más pegajosas"
        ],
        "tags": [
          "中国",
          "应用",
          "数据"
        ]
      },
      {
        "id": "2026-06-03-eu-ai-act-highrisk",
        "title": "Detalles de la lista de alto riesgo de la Ley de IA de la UE Solicitud de comentarios: modelos de contratación y crédito incluidos",
        "summary": "La Comisión Europea publicó un borrador de apéndice para escenarios de IA de alto riesgo, que requiere pruebas de coherencia y canales de apelación manuales para los sistemas de selección de reclutamiento y calificación crediticia.",
        "source": "European Commission",
        "body": [
          "Alcance: Reclutamiento, calificación educativa, crédito, infraestructura crítica incluida en riesgos altos. Este es uno de los cambios más observados en el campo político y regulatorio el 3 de junio de 2026 en torno a la \"Solicitud de detalles de la lista de alto riesgo de la Ley de IA de la Unión Europea\".",
          "Obligaciones: documentos de gobernanza de datos, retención de registros, personas al tanto. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Cronograma: Los estados miembros convertirán las leyes nacionales antes de finales de 2026. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Ir al extranjero: SaaS para usuarios de la UE debe realizar una EIPD con antelación. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Alcance: Reclutamiento, calificación educativa, crédito, infraestructura crítica incluida en alto riesgo.",
          "Responsabilidades: documentos de gestión de datos, retención de registros, personas en el entorno.",
          "Calendario: los Estados miembros transpondrán sus leyes nacionales a finales de 2026",
          "Viajar al extranjero: SaaS para usuarios de la UE requiere DPIA por adelantado"
        ],
        "tags": [
          "欧盟",
          "AI Act",
          "合规"
        ]
      },
      {
        "id": "2026-06-02-us-ai-safety-eo",
        "title": "Estados Unidos actualiza la orden ejecutiva de IA: los modelos básicos deben presentar un resumen del equipo rojo",
        "summary": "La agencia federal exige que los proveedores de modelos base de hiperescala envíen al NIST un resumen de su evaluación de seguridad, incluidos los resultados de las pruebas de abuso de red y QBRN.",
        "source": "White House",
        "body": [
          "Objetivo: desarrolladores de modelos cuya potencia informática de entrenamiento supera el umbral. Este es uno de los cambios más observados en el campo político y regulatorio el 2 de junio de 2026 en torno a la \"Orden ejecutiva de IA actualizada de EE. UU.\".",
          "Contenido: informes del equipo rojo, medidas de mitigación de abuso, notificaciones de cambios de versión. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Impacto: los proveedores de API pueden exigir declaraciones de uso del cliente. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Empresas: debe solicitar el documento técnico de seguridad del modelo al realizar la compra. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Objetivo: desarrolladores de modelos cuya potencia informática de entrenamiento supera el umbral",
          "Contenido: informes del equipo rojo, medidas de mitigación de abuso, notificaciones de cambio de versión",
          "Cumplimiento: los paquetes HIPAA y SOC2 impulsan la contratación de clientes clave",
          "Capacitación: Fomentar la divulgación de inventarios de datos y el estado de las licencias."
        ],
        "tags": [
          "美国",
          "安全",
          "监管"
        ]
      },
      {
        "id": "2026-06-01-uk-ai-copyright",
        "title": "El Reino Unido publica una guía práctica de derechos de autor de IA: recomendaciones para la transparencia de los datos de capacitación",
        "summary": "La guía de la OPI recomienda que las empresas modelo divulguen las categorías de fuentes de datos de capacitación y proporcionen mejores prácticas para los mecanismos de exclusión voluntaria para los titulares de derechos.",
        "source": "UK IPO",
        "body": [
          "Capacitación: Fomentar la divulgación de listas de datos y estados de licencias. Este es uno de los cambios más observados en el campo regulatorio de políticas el 1 de junio de 2026 en torno a las \"Directrices de prácticas de derechos de autor de IA publicadas por el Reino Unido\".",
          "Productos generados: la identificación de los derechos de autor de las obras asistidas por IA sigue siendo un análisis caso por caso. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Plataforma: El anfitrión debe establecer un proceso de queja y eliminación. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Creadores: Mantener evidencia del proceso creativo ayuda a proteger los derechos. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Capacitación: Fomentar la divulgación de inventarios de datos y el estado de las licencias.",
          "Productos generados: la identificación de los derechos de autor de las obras asistidas por IA sigue siendo un análisis caso por caso",
          "Plataforma: El anfitrión debe establecer un proceso de queja y eliminación.",
          "Creadores: conservar pruebas del proceso creativo ayuda a proteger los derechos"
        ],
        "tags": [
          "英国",
          "版权",
          "AI"
        ]
      },
      {
        "id": "2026-05-31-cn-algorithm-filing",
        "title": "El registro del algoritmo de síntesis profunda nacional agrega una nueva subcategoría de \"preguntas y respuestas interactivas\"",
        "summary": "La Administración del Ciberespacio de China ha actualizado la guía de registro. Las aplicaciones interactivas de modelos grandes deben complementar la descripción de la fuente de datos de capacitación y la plantilla del informe de evaluación de seguridad.",
        "source": "CAC",
        "body": [
          "Objetivo: aplicaciones de generación de conversación para el público Este es uno de los cambios más observados en el campo de supervisión de políticas el 31 de mayo de 2026 en torno a \"la nueva subcategoría de\" preguntas y respuestas interactivas \"para el registro de algoritmos de síntesis profunda nacional\".",
          "Materiales: evaluación de seguridad, plan de identificación, plan de respuesta a emergencias. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Ciclo: Las actualizaciones de versiones importantes pueden requerir la presentación de cambios. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Recomendación: Los equipos legales y de algoritmos revisan los materiales simultáneamente. Para los estudiantes de IA, esto se puede utilizar para actualizar mapas de herramientas personales y listas de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Objetivo: Aplicaciones de generación conversacional para el público",
          "Materiales: evaluación de seguridad, plan de marcado, plan de respuesta a emergencias.",
          "Ciclo: las actualizaciones de versiones importantes pueden requerir la presentación de cambios",
          "Sugerencia: los equipos legales y de algoritmos revisan los materiales simultáneamente"
        ],
        "tags": [
          "中国",
          "备案",
          "合规"
        ]
      },
      {
        "id": "2026-05-30-sg-model-governance",
        "title": "Lanzamiento del marco de gobernanza de IA modelo 3.0 de Singapur",
        "summary": "IMDA actualiza el marco de gobernanza de la IA generativa para enfatizar la transparencia de la cadena de suministro con certificación opcional de revisiones de terceros.",
        "source": "IMDA Singapore",
        "body": [
          "Marco: cubre las responsabilidades tripartitas de desarrollo, implementación y adquisición. Este es uno de los cambios más observados en el campo de la supervisión de políticas en torno al \"Lanzamiento 3.0 del Marco de Gobernanza Modelo de IA de Singapur\" del 30 de mayo de 2026.",
          "Certificación: Se lanza el piloto voluntario de etiqueta de evaluación de terceros. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Datos: Es necesario registrar la base jurídica para la transmisión transfronteriza. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Empresa: las oficinas centrales de Asia y el Pacífico a menudo eligen Singapur como centro de cumplimiento. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Marco: que cubre las responsabilidades tripartitas de desarrollo, implementación y adquisición.",
          "Certificación: Lanzamiento piloto voluntario de etiqueta de evaluación de terceros",
          "Datos: la transmisión transfronteriza debe registrar una base jurídica",
          "Empresa: las oficinas centrales de Asia y el Pacífico a menudo eligen Singapur como centro de cumplimiento"
        ],
        "tags": [
          "新加坡",
          "治理",
          "亚太"
        ]
      },
      {
        "id": "2026-05-29-india-ai-safety",
        "title": "India establece AI Safety Alliance: piloto de monitoreo de abuso de modelos de código abierto",
        "summary": "La alianza multisectorial establecerá una plataforma de informes y una biblioteca de casos de abuso de modelos, y alentará a las nubes locales a proporcionar puertas de enlace API seguras.",
        "source": "MeitY India",
        "body": [
          "Monitoreo: enfoque en falsificación profunda y generación de scripts de fraude. Este es uno de los cambios más observados en el campo político y regulatorio el 29 de mayo de 2026 en torno al \"establecimiento de la Alianza de Seguridad de IA en la India\".",
          "Puerta de enlace: los proveedores de la nube pueden instalar opcionalmente palabras de aviso y filtrado de salida. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Código abierto: Énfasis en la colaboración comunitaria para publicar huellas dactilares de abuso. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Buscar nombre de la habilidad, industria, uso, software aplicable..."
        ],
        "highlights": [
          "Monitoreo: enfoque en deepfakes y generación de scripts de fraude",
          "Puerta de enlace: los proveedores de la nube pueden instalar opcionalmente palabras de aviso y filtrado de salida",
          "Código abierto: énfasis en la colaboración comunitaria para publicar huellas dactilares de abuso",
          "Viajar al extranjero: es necesario evaluar el filtrado localizado para el mercado indio"
        ],
        "tags": [
          "印度",
          "安全",
          "开源"
        ]
      },
      {
        "id": "2026-05-28-japan-ai-promotion",
        "title": "Implementación de la “Ley de Promoción de la IA” de Japón: prestar igual atención a la innovación y la seguridad",
        "summary": "La ley establece la Sede de la Estrategia de IA, exige orientación sobre áreas de alto riesgo y garantiza un entorno amigable para la investigación y el código abierto.",
        "source": "日本内阁府",
        "body": [
          "Gobernanza: Clasificación de riesgos basada en escenarios, sin prohibición general. Este es uno de los cambios más observados en el campo de la supervisión de políticas el 28 de mayo de 2026 en torno a la \"implementación de la\" Ley de Promoción de la IA \"de Japón\".",
          "Industria: La robótica y la manufactura reciben subsidios especiales. Los equipos de tecnología y productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Copyright: Discutir datos de capacitación en conjunto con el Ministerio de Cultura. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Empresas extranjeras: las empresas en Japón deben prestar atención a las obligaciones de los representantes locales. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Gobernanza: clasificación de riesgos basada en escenarios, sin prohibición general",
          "Industria: la robótica y la fabricación reciben subvenciones especiales",
          "Copyright: Discusión de datos de formación en colaboración con la Agencia de Asuntos Culturales.",
          "Empresas extranjeras: las empresas en Japón deben prestar atención a las obligaciones de los representantes locales"
        ],
        "tags": [
          "日本",
          "立法",
          "亚太"
        ]
      },
      {
        "id": "2026-05-27-brazil-lgpd-ai",
        "title": "Registros y eventos",
        "summary": "El borrador requiere que las decisiones automatizadas que tienen impactos legales o similares en los usuarios reciban explicaciones concisas y un portal de solicitud de revisión manual.",
        "source": "Brazil Senate",
        "body": [
          "Derecho de interpretación: Los usuarios pueden solicitar una explicación de la lógica principal y los factores que influyen. Este es uno de los cambios más observados en el campo de la supervisión de políticas el 27 de mayo de 2026 en torno al \"Proyecto de enmienda de la LGPD brasileña\".",
          "Revisión: Es necesario proporcionar canales de apelación manuales y límites de tiempo. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Sanción: Conectarse con el marco de multas de la LGPD. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Producto: Renovación prioritaria de las funciones de automatización de crédito/contratación. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Derecho de explicación: Los usuarios pueden solicitar una explicación de la lógica principal y los factores que influyen.",
          "Revisión: se debe proporcionar el canal de apelación manual y el límite de tiempo",
          "Sanciones: Alineación con el Marco de Sanciones de la LGPD",
          "Producto: Transformación de prioridad de la función de automatización de crédito/reclutamiento"
        ],
        "tags": [
          "巴西",
          "隐私",
          "LATAM"
        ]
      },
      {
        "id": "2026-05-26-o3-reasoning",
        "title": "Divulgación del artículo OpenAI o3: la cadena de razonamiento verificable mejora la precisión de la Olimpiada de matemáticas",
        "summary": "El artículo muestra que o3 alcanza el 96% en AIME 2025 con una arquitectura de búsqueda + validador y analiza casos de falla a partir de la ambigüedad de símbolos.",
        "source": "arXiv",
        "body": [
          "Método: generar múltiples cadenas de razonamiento y filtrarlas por verificador. Este es uno de los cambios más observados en torno a la \"divulgación del documento OpenAI o3\" en el campo de los avances en investigación el 26 de mayo de 2026.",
          "Costo: La alta precisión viene con una sobrecarga de tokens de 10×+. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Iluminación: \"Dibujo de modelo pequeño + verificación de modelo grande\" se puede utilizar en el entorno de producción. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Educación: Adecuado para tutorías de Olimpiadas de Matemáticas, pero debe evitar la filtración directa de preguntas. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Método: generar múltiples cadenas de inferencia y filtrarlas por el validador",
          "Completar manualmente datos y referencias",
          "Ilustración: \"Cálculo aproximado de modelo pequeño + verificación de modelo grande\" se puede utilizar en el entorno de producción",
          "Educación: Adecuado para tutorías de Olimpíadas de Matemáticas, pero debe evitar la divulgación directa de preguntas."
        ],
        "tags": [
          "o3",
          "推理",
          "数学"
        ]
      },
      {
        "id": "2026-05-25-world-model-robotics",
        "title": "Google DeepMind lanza el modelo mundial Genie 3: entrenamiento de simulación de robots",
        "summary": "Genie 3 puede generar escenas 3D interactivas a partir de una sola imagen para aumentar los datos de simulación para el aprendizaje de políticas de robots.",
        "source": "DeepMind",
        "body": [
          "Capacidad: mejora de la coherencia de la escena de interacción a nivel de minutos. Este es uno de los cambios más observados en el campo de avances de investigación del 25 de mayo de 2026 en torno a \"Google DeepMind lanza el modelo mundial Genie 3\".",
          "Aplicación: Reducir los costos reales de recolección de robots. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Un esbozo revisable de un primer borrador de propuesta.",
          "Seguimiento: El emprendimiento inteligente incorporado debería centrarse en la transferencia simulación-real. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Capacidad: coherencia mejorada de los escenarios de interacción a nivel de minutos",
          "Aplicación: Reducir el coste de la recogida de robots reales.",
          "Limitaciones: la precisión física aún no es suficiente para reemplazar los motores de alta fidelidad",
          "Seguimiento: el emprendimiento inteligente incorporado debería centrarse en la migración real-simulada"
        ],
        "tags": [
          "世界模型",
          "机器人",
          "仿真"
        ]
      },
      {
        "id": "2026-05-24-llm-memory-compress",
        "title": "El MIT propone compresión de memoria a largo plazo LLM: 1/8 de preservación del contexto, 95% de recuperación",
        "summary": "El nuevo método destila el diálogo histórico en vectores de memoria recuperables, logrando un rendimiento casi de contexto completo en LongMemEval.",
        "source": "MIT CSAIL",
        "body": [
          "Idea: resumen jerárquico + índice vectorial que reemplaza la ortografía violenta del contexto. Este es uno de los cambios más observados en el innovador campo de investigación del 24 de mayo de 2026 en torno a \"el MIT propone la compresión de la memoria a largo plazo del LLM\".",
          "Beneficios: Reduzca los costos de API de sesiones largas. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Riesgo: La pérdida de detalles en el resumen puede dar lugar a errores contractuales. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Ingeniería: se puede combinar con bibliotecas vectoriales existentes para su implementación. Para los estudiantes de IA, esto se puede utilizar para actualizar mapas de herramientas personales y listas de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Idea: resumen jerárquico + índice vectorial que reemplaza la ortografía violenta del contexto",
          "Beneficio: costos reducidos de API de sesión larga",
          "Riesgo: la falta de detalles en el resumen puede provocar errores en el contrato",
          "Ingeniería: se puede combinar con bibliotecas vectoriales existentes para su implementación."
        ],
        "tags": [
          "记忆",
          "RAG",
          "上下文"
        ]
      },
      {
        "id": "2026-05-23-mm-math-reasoning",
        "title": "Lanzamiento del punto de referencia de razonamiento matemático multimodal MM-MATH: las preguntas gráficas son la mayor deficiencia",
        "summary": "El nuevo punto de referencia incluye gráficos estadísticos y preguntas de dibujo geométrico. La precisión del modelo más sólido en las preguntas sobre gráficos es solo del 62%, lo que expone la brecha entre los símbolos visuales.",
        "source": "MM-MATH Paper",
        "body": [
          "Descubrimiento: La solidez de las preguntas de texto no es igual a la de las preguntas de gráficos. Este es uno de los cambios más observados en el campo de avances de investigación del 23 de mayo de 2026 en torno a la \"Lanzamiento MM-MATH del punto de referencia de razonamiento matemático multimodal\".",
          "Datos: se requiere un conjunto de entrenamiento emparejado de inferencia de gráficos de alta calidad. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Aplicación: Las preguntas y respuestas sobre los estados financieros deben realizarse con precaución. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Evaluación: Las empresas deben crear su propio conjunto de pruebas de gráficos de dominio. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Descubrimiento: La fortaleza en las preguntas de texto no es igual a la fortaleza en las preguntas de gráficos",
          "Datos: se necesitan gráficos de alta calidad: conjunto de entrenamiento de inferencia emparejado",
          "Solicitud: Las preguntas y respuestas sobre los estados financieros deben publicarse en línea con precaución",
          "Evaluación: las empresas deberían crear su propio conjunto de pruebas de gráficos de dominio"
        ],
        "tags": [
          "多模态",
          "数学",
          "评测"
        ]
      },
      {
        "id": "2026-05-22-alphafold-update",
        "title": "Vista previa de AlphaFold 4: predicción de la estructura del complejo proteína-ligando",
        "summary": "DeepMind presenta una vista previa de la precisión de predicción mejorada de AlphaFold 4 de los sitios de unión de moléculas de fármacos, y las compañías farmacéuticas amplían la cooperación piloto.",
        "source": "DeepMind",
        "body": [
          "Avance: correlación mejorada de la clasificación de energía libre vinculante Este es uno de los cambios más observados en torno a la \"Vista previa de AlphaFold 4\" en el campo de los avances de investigación del 22 de mayo de 2026.",
          "Abierto: Licencia académica no comercial, las empresas farmacéuticas necesitan acuerdo comercial. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar el tráfico de producción por completo sin una verificación piloto.",
          "Genere una tabla comparativa de productos competitivos (tabla Markdown) basada en los siguientes puntos:\n\nDimensiones: Función | Precio | Soporte chino | Método de implementación | Observaciones\nProductos de la competencia: Cursor, Windsurf, Copilot\n\nPuntos clave:\n[Pegar viñetas]\n\nPara información faltante, complete \"para ser verificado\"; indicar \"a partir de 2026-07\" en el encabezado",
          "Crossover: la demanda de talentos compuestos de biología + IA está aumentando. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Avance: correlación mejorada de clasificaciones vinculantes de energía libre",
          "Abierto: licencia académica no comercial, se requiere acuerdo comercial con la compañía farmacéutica",
          "Potencia de cálculo: inferencia compuesta única en minutos",
          "Crossover: Biología + IA, la demanda de talentos compuestos está aumentando"
        ],
        "tags": [
          "生物",
          "AlphaFold",
          "科研"
        ]
      },
      {
        "id": "2026-05-21-synthetic-data-train",
        "title": "Metainvestigación: los datos sintéticos de alta calidad pueden reemplazar el 40% de las anotaciones manuales",
        "summary": "El artículo muestra que los datos sintéticos generados + filtrados por el modelo de maestro son comparables a la anotación manual en tareas de clasificación y extracción, pero las preguntas de inferencia son propensas a sobreajustarse.",
        "source": "Meta AI Research",
        "body": [
          "Método: Generación de docentes → Filtrado de modelos de calidad → Aprendizaje del curso Este es uno de los cambios más observados en torno a la \"Metainvestigación\" en el campo de los avances en investigación el 21 de mayo de 2026.",
          "Aplicable a: La clasificación, NER y la conversión de formato serán los más beneficiados. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Riesgo: el razonamiento/matemáticas es propenso al colapso del modelo. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Práctica: el ajuste empresarial se puede combinar con un 30% de inicio sintético. Para los estudiantes de IA, esto se puede utilizar para actualizar el mapa de herramientas personal y la lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Método: Generación de profesores → Filtrado de modelos de calidad → Aprendizaje del curso",
          "Aplicable: La clasificación, NER y la conversión de formato se beneficiarán más",
          "Riesgo: razonamiento/matemáticas propensas al colapso del modelo",
          "Práctica: Ajuste empresarial Mezclable 30 % sintético Inicio"
        ],
        "tags": [
          "合成数据",
          "训练",
          "成本"
        ]
      },
      {
        "id": "2026-05-20-sparse-attn-2m",
        "title": "La escasa atención logra una verificación experimental de contexto de 2 millones de tokens",
        "summary": "Varios laboratorios han anunciado una arquitectura híbrida de ventana dispersa + deslizante, logrando una precisión utilizable en el experimento de preguntas y respuestas del libro de tokens de 2M.",
        "source": "arXiv",
        "body": [
          "Arquitectura: Block Sparse + Global Anchor Token Este es uno de los cambios más observados en el área de avance de la investigación del 20 de mayo de 2026 en torno a \"Sparse Attention logra una verificación experimental del contexto de 2 millones de tokens\".",
          "Costo: La memoria se reduce en un 70%, pero la implementación es complicada. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Producto: La API de la nube aún no está abierta en general. En términos de negocios y cumplimiento de 2M, se recomienda verificar simultáneamente la residencia de datos, la retención de registros y las obligaciones de notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "RAG: Los escenarios de artículos extremadamente largos pueden ser una elección entre RAG y RAG. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Arquitectura: bloque disperso + token de anclaje global",
          "Costo: la memoria se redujo en un 70 % pero la implementación es compleja",
          "Producto: La API de la nube generalmente no está abierta todavía 2M",
          "RAG: Los escenarios de texto extremadamente largos pueden ser una elección entre RAG y RAG"
        ],
        "tags": [
          "长上下文",
          "架构",
          "研究"
        ]
      },
      {
        "id": "2026-05-19-self-evolving-agents",
        "title": "El documento sobre el agente de evolución automática genera acalorados debates: la biblioteca de herramientas amplía automáticamente los experimentos con riesgo controlado",
        "summary": "El agente aprende por sí mismo nuevos scripts de herramientas en el sandbox, con una tasa de finalización de tareas de +18 %, pero también hay casos de solicitudes de red no autorizadas.",
        "source": "AgentEvo Paper",
        "body": [
          "Resultado: la herramienta de expansión automática es eficaz pero requiere un entorno limitado. Este es uno de los cambios más observados en el campo de los avances en la investigación del 19 de mayo de 2026 en torno al \"Papel de agente autoevolutivo que genera acaloradas discusiones\".",
          "Seguridad: se requieren listas blancas de red y auditoría de código. Los equipos técnicos y de productos deben evaluar los costos de integración, los cambios de permisos y los planes de reversión en consecuencia para evitar cambiar todo el tráfico de producción sin una verificación piloto.",
          "Industria: el marketing de \"autoaprendizaje\" necesita reducir las expectativas. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
          "Recomendación: Sólo se permiten juegos de herramientas registrados para la producción. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana."
        ],
        "highlights": [
          "Resultado: la herramienta de ajuste de escala automático funciona pero requiere sandboxing",
          "Seguridad: se requieren listas blancas de red y auditoría de código",
          "Industria: el marketing de \"autoaprendizaje\" debe reducir las expectativas",
          "Recomendación: la producción solo permite conjuntos de herramientas registrados"
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
      "lead": "Tutoriales prácticos diarios para las últimas herramientas y flujos de trabajo. Los casos paso a paso incluyen indicaciones para copiar.",
      "updatedLabel": "Última actualización: {fecha}",
      "countShown": "Mostrando {visible} / {total}",
      "emptyHint": "No hay tutoriales en esta categoría. Prueba con otra etiqueta.",
      "newBadge": "Nuevo",
      "illustratedBadge": "Paso a paso",
      "backToList": "Volver a tutoriales"
    },
    "categories": {
      "全部": "Todo",
      "编程开发": "Desarrollo de programación",
      "提示词": "palabra rápida",
      "图像视频": "imagen de vídeo",
      "自动化": "automatización",
      "办公效率": "Eficiencia de la oficina"
    },
    "items": [
      {
        "id": "2026-07-04-cursor-web-calculator",
        "title": "Paso a paso: utiliza IA para crear una calculadora web",
        "desc": "De cero a uno, utilice Cursor Agent para generar una calculadora HTML que se puede ejecutar haciendo doble clic. El siguiente diagrama ilustra cada paso: crear un proyecto, escribir palabras clave, verificar el código, obtener una vista previa del navegador y probar y reparar.",
        "illustratedSteps": [
          {
            "title": "Crea una nueva carpeta de proyecto vacía",
            "text": "Cree la carpeta calc-demo en el escritorio y ábrala con el cursor Archivo → Abrir carpeta. Asegúrese de que el proyecto esté vacío para que AI pueda generar un solo archivo desde cero.",
            "image": "assets/tutorials/calc-step-1-folder.svg",
            "alt": "在 Cursor 中打开空的 calc-demo 项目文件夹"
          },
          {
            "title": "Abra Composer y pegue la palabra del mensaje",
            "text": "Presione Cmd+I (Mac) o Ctrl+I (Windows) para abrir el panel Agente, pegue las palabras clave en la parte inferior del tutorial y haga clic en Generar. AI creará un único archivo index.html.",
            "image": "assets/tutorials/calc-step-2-composer.svg",
            "alt": "在 Cursor Composer 中输入计算器提示词",
            "caption": "提示词越具体，生成结果越接近预期。可先复制教程底部模板再微调。"
          },
          {
            "title": "Verifique la estructura del código generado",
            "text": "Confirme que index.html aparezca en el explorador izquierdo. Abra el archivo y compruebe si contiene estructura HTML, estilo CSS y lógica de cálculo JavaScript.",
            "image": "assets/tutorials/calc-step-3-code.svg",
            "alt": "检查 AI 生成的 index.html 代码"
          },
          {
            "title": "Calculadora de vista previa del navegador",
            "text": "Haga clic derecho en index.html → Mostrar en Finder / Mostrar en carpeta, haga doble clic para abrir en Chrome o Safari. La vista previa en vivo también se puede ampliar con Cursor Live Server.",
            "image": "assets/tutorials/calc-step-4-preview.svg",
            "alt": "在浏览器中预览网页计算器"
          },
          {
            "title": "Pruebe elemento por elemento y solicite correcciones",
            "text": "Pruebe los botones de suma, resta, multiplicación, división y borrar. Si el botón no responde o hay un error en el operador continuo, seleccione el código correspondiente y pregunte a la IA: \"El botón no responde cuando se hace clic, corríjalo\". Se necesitan entre 1 y 2 iteraciones para estabilizarse.",
            "image": "assets/tutorials/calc-step-5-test.svg",
            "alt": "测试计算器并追问 AI 修复问题"
          }
        ],
        "prompt": "Ayúdenme a crear una página web de calculadora simple y hermosa usando HTML + CSS + JavaScript:\n\nRequisitos funcionales:\n- Admite suma, resta, multiplicación, división y compensación (C)\n- La pantalla muestra la entrada y los resultados en tiempo real.\n- Prevenir errores lógicos comunes, como la presión continua de los operadores.\n-Admite entrada de teclas numéricas del teclado (bonificación opcional)\n\nRequisitos de diseño:\n- Tema oscuro, botones redondeados, ligera respuesta al pasar el mouse\n- También se puede utilizar normalmente en dispositivos móviles.\n\nRequisitos de entrega:\n- Genere un único archivo index.html, que se puede abrir directamente en el navegador haciendo doble clic en él.\n-Código más comentarios chinos.\n-Finalmente dime cómo ejecutar y probar.",
        "result": "Obtenga una calculadora web que se puede abrir haciendo doble clic, puede completar cuatro operaciones aritméticas y dominar el ciclo cerrado de programación de IA de \"Describir requisitos → Generar → Vista previa → Comentarios y reparación\".",
        "tips": "No es necesario esforzarse por lograr una interfaz de usuario perfecta la primera vez. Primero repasa la lógica y luego deja que la IA te ayude a \"cambiar el botón a un círculo y el color principal a cian\"."
      },
      {
        "id": "2026-07-04-cursor-local-matting",
        "title": "Paso a paso: use IA para crear una herramienta de recorte local",
        "desc": "No confíe en la API en línea, use el cursor para generar la página web recortada local de Flask + rembg: arrastre y suelte para cargar imágenes, IA local para eliminar el fondo, descargue PNG transparente. Adecuado para fotografías de comercio electrónico y procesamiento de fotografías de identificación.",
        "illustratedSteps": [
          {
            "title": "Crear proyecto e instalar dependencias.",
            "text": "Cree una nueva carpeta bg-remove y ábrala con el cursor. Cree un entorno virtual en la terminal e instale rembg, flask, almohada: pip instale rembg flask almohada. Al ejecutar rembg por primera vez, se descargará automáticamente el modelo local.",
            "image": "assets/tutorials/matting-step-1-setup.svg",
            "alt": "创建 bg-remove 项目并安装 Python 依赖"
          },
          {
            "title": "Describir la herramienta completa en lenguaje natural.",
            "text": "Pegue las palabras clave en la parte inferior del tutorial en Cursor Agent para generar el backend de Flask + el frontend de carga de arrastrar y soltar + la inferencia local de rembg. Se enfatiza claramente que \"las imágenes no se cargan en la nube y todas se procesan localmente\".",
            "image": "assets/tutorials/matting-step-2-prompt.svg",
            "alt": "向 Cursor 描述本地抠图工具需求",
            "caption": "若生成代码报错，把终端报错信息贴回对话，AI 会逐行修复。"
          },
          {
            "title": "Inicie el servicio y abra la página de carga.",
            "text": "El terminal ejecuta python app.py y el navegador accede a http://127.0.0.1:5000. La página debe mostrar un área de carga de arrastrar y soltar, compatible con formatos JPG/PNG.",
            "image": "assets/tutorials/matting-step-3-upload.svg",
            "alt": "打开本地抠图工具上传页面"
          },
          {
            "title": "Sube imágenes y la IA local las recortará automáticamente",
            "text": "Arrastre una imagen de una persona o producto y haga clic en \"Comenzar a cortar\". rembg infiere en la CPU/GPU local y normalmente se completa en 2 a 8 segundos. Se mostrará un registro de progreso en el terminal durante el procesamiento.",
            "image": "assets/tutorials/matting-step-4-process.svg",
            "alt": "本地 rembg 模型处理抠图"
          },
          {
            "title": "Previsualizar, comparar y descargar PNG",
            "text": "Compare la imagen original y el resultado del recorte de los lados izquierdo y derecho de la página y haga clic en \"Descargar fondo transparente PNG\" después de confirmar que está satisfecho con los bordes. El archivo se puede utilizar directamente en PPT, Figma o en la página de detalles del comercio electrónico.",
            "image": "assets/tutorials/matting-step-5-download.svg",
            "alt": "预览抠图结果并下载 PNG"
          }
        ],
        "prompt": "Ayúdenme a crear una herramienta de recorte que se ejecute localmente (Python + Flask + rembg):\n\nFunción:\n1. La página web admite arrastrar o hacer clic para cargar JPG/PNG\n2. El backend usa rembg para eliminar el fondo localmente sin cargar ninguna API de terceros.\n3. Devuelva el fondo transparente PNG y la página web mostrará la comparación de imagen/resultado original.\n4. Proporcione un botón de descarga para guardar el resultado.png\n\nEstructura del proyecto:\n- app.py (programa principal de Flask)\n- static/index.html (página de inicio, interfaz de usuario oscura y simple)\n- cargas/directorio temporal\n-requisitos.txt\n\nRequisitos:\n-Código más comentarios chinos.\n- Dar el comando de inicio y la dirección de acceso.\n- Manejar errores comunes (archivo demasiado grande, formato no compatible)",
        "result": "Una herramienta web de recorte local que se ejecuta en localhost. Arrastre y suelte para cargar y obtener un fondo PNG transparente, y todo el proceso se procesará sin conexión.",
        "tips": "El efecto del recorte vertical suele ser mejor que el de las imágenes complejas de productos para el cabello. Si los bordes son irregulares, puede preguntarle a la IA: \"Agregar parámetros de difuminado de bordes\" o cambiar al modelo isnet."
      },
      {
        "id": "2026-07-02-cursor-plan-mode",
        "title": "Utilice el modo Cursor Plan para desglosar los requisitos y generar cambios a nivel de relaciones públicas",
        "desc": "Experimente el nuevo modo Plan de Cursor: primero deje que el Agente genere el plan de implementación y la lista de archivos, y luego ejecútelo paso a paso. Es adecuado para el desarrollo de funciones a mediana y gran escala sin perder el control.",
        "steps": [
          "Abra el Cursor y presione Cmd+I en el proyecto para ingresar al Agente",
          "Requisitos de entrada: \"Agregar cambio de modo oscuro al sitio de aprendizaje, incluida la persistencia del almacenamiento local\"",
          "Seleccione el modo Plan para permitir que el Agente genere primero los pasos, los archivos involucrados y los puntos de riesgo.",
          "Después de confirmar el plan elemento por elemento, haga clic en Ejecutar y observe la vista previa de diferencias.",
          "Haga preguntas sobre el código seleccionado con el que no esté satisfecho: \"Mueva el botón de cambio al lado derecho del encabezado\"",
          "Ejecute la vista previa local y confirme que el estado se mantiene después de cambiar y actualizar el tema"
        ],
        "prompt": "Implemente el cambio de tema oscuro/claro para sitios estáticos:\n1. Utilice variables CSS para definir la combinación de colores y el tema de datos se cuelga en html\n2. Se agrega un botón de alternancia circular en el lado derecho del encabezado y el ícono usa los símbolos del sol y la luna.\n3. Elija escribir en localStorage y conservarlo después de actualizar.\n4. Primero genere el Plan: lista de archivos, pasos, riesgos potenciales y luego cambie el código después de confirmarlo.",
        "result": "Obtenga un sitio de aprendizaje intercambiable y comprenda el flujo de trabajo Planificar → Ejecutar agente.",
        "tips": "El núcleo del modo Plan es \"alinear primero y luego comenzar\", lo que puede reducir significativamente la confusión causada por la IA que cambia demasiados archivos a la vez."
      },
      {
        "id": "2026-07-02-claude-projects-briefing",
        "title": "Utilice Claude Projects para crear un espacio de trabajo de compilación automática para \"AI Industry Daily\"",
        "desc": "Coloque los enlaces de información y las plantillas de resumen en la base de conocimientos del Proyecto y pegue nuevos enlaces todos los días para generar un formato unificado de informes diarios de la industria, adecuado para compartir en las reuniones matutinas del equipo.",
        "steps": [
          "Inicie sesión en claude.ai y cree un nuevo proyecto \"AI Daily\"",
          "Escriba el formato de salida en las Instrucciones del proyecto: título, tres puntos clave, uno en profundidad y recomendaciones de acción.",
          "Cargue informes de referencia diarios de los últimos 7 días como muestras de estilo (opcional)",
          "Pegue de 5 a 8 enlaces de noticias y resúmenes de una oración en las conversaciones todos los días.",
          "Deje que Claude elimine duplicados, clasifique y genere informes diarios de Markdown",
          "Copiar al documento Notion o Feishu para su publicación."
        ],
        "prompt": "El AI Industry Daily (chino) de hoy se genera en base a los siguientes enlaces de información y resúmenes:\n\nFormato:\n## {Fecha} Noticias de IA\n### Titulares\n### Tres noticias (de 80 palabras cada una)\n### Tendencias que vale la pena seguir\n### Consejos prácticos de hoy (perspectiva del alumno)\n\nRequisitos: eliminar duplicaciones, ser objetivo, marcar las fuentes y no inventar información que no se proporciona.",
        "result": "Un documento unificado y listo para publicar con noticias diarias sobre IA.",
        "tips": "Las instrucciones del proyecto se escriben una vez y se pueden reutilizar; el enlace de origen debe pegarse con el texto original para evitar detalles incorrectos en el modelo."
      },
      {
        "id": "2026-07-01-gemini-deep-research",
        "title": "Gemini Deep Research realiza informes de investigación de productos competitivos",
        "desc": "Utilice la función de investigación en profundidad de Gemini para explorar automáticamente múltiples fuentes y generar análisis de productos competitivos con referencias, lo cual es adecuado para que los estudiantes de productos y mercados lo publiquen rápidamente.",
        "steps": [
          "Abra gemini.google.com y seleccione Investigación profunda",
          "Ingrese al tema de investigación: \"Comparación de asistentes de programación de IA de la competencia en 2026: Cursor, Windsurf, Claude Code\"",
          "Espere a que el Agente busque y lea automáticamente. Durante este período, puede agregar: \"Céntrese en comparar precios y soporte chino\"",
          "Exporte a Google Doc o cópielo a Markdown cuando finalice la investigación",
          "Verifique manualmente el precio clave y las descripciones de funciones, y elimine las referencias obsoletas",
          "Organizar las conclusiones en un memorando de decisión compartido por el equipo."
        ],
        "prompt": "Realice una investigación de productos competitivos del asistente de programación de IA 2026: Cursor, Windsurf, Claude Code, GitHub Copilot.\nDimensiones de comparación: precios, soporte IDE, capacidades del agente, experiencia china y cumplimiento empresarial.\nProducto: resumen ejecutivo, tabla comparativa, recomendaciones de selección (alumno individual/equipo pequeño).\nSe deberá anotar la fecha de la fuente de la información.",
        "result": "Informe de investigación competitivo estructurado con citas.",
        "tips": "Es normal que la investigación profunda demore entre 5 y 15 minutos; asegúrese de verificar manualmente la información volátil, como las páginas de precios, antes de publicarla."
      },
      {
        "id": "2026-07-01-n8n-ai-newsletter",
        "title": "Flujo de trabajo n8n: agregación RSS → resumen de IA → boletín informativo por correo electrónico",
        "desc": "Cree una canalización automatizada sin código para capturar RSS de blogs de IA con regularidad todos los días, utilice nodos OpenAI para generar resúmenes y enviarlos por correo electrónico.",
        "steps": [
          "Registre n8n Cloud o Docker local para iniciar n8n",
          "Cree un nuevo flujo de trabajo y agregue el activador programado (8:00 todos los días)",
          "Agregue el nodo RSS Read y complete el blog oficial RSS de OpenAI, Anthropic y Google AI",
          "El nodo de combinación fusiona entradas, el filtro elimina los GUID procesados ​​duplicados",
          "Nodo OpenAI: genera noticias chinas de 200 palabras a partir del título + resumen",
          "El nodo Gmail/SMTP se envía a sí mismo el correo electrónico \"AI Morning News\"",
          "Active el flujo de trabajo, verifique el rendimiento del correo electrónico al día siguiente y ajuste las palabras clave"
        ],
        "prompt": "Eres el editor de la industria de la IA. Genere las noticias de la mañana de hoy basándose en la siguiente entrada RSS (JSON):\n1. Seleccione las 5 noticias más importantes (cada una de ≤80 palabras, con enlace de texto original)\n2. Un comentario de tendencia sobre \"Vale la pena prestar atención a los estudiantes\" (≤120 palabras)\nTono: conciso, objetivo, chino.",
        "result": "El resumen informativo de la industria de la IA, entregado automáticamente a su bandeja de entrada todos los días.",
        "tips": "Utilice 2 canales RSS para realizar la prueba primero y luego expandirlos; preste atención a las tarifas de API y a los límites de frecuencia de envío de correo electrónico."
      },
      {
        "id": "2026-06-30-midjourney-style-ref",
        "title": "Referencia de estilo Midjourney (--sref) para ilustraciones de series",
        "desc": "Utilice una imagen de referencia para bloquear el estilo visual, genere por lotes una serie de imágenes de portada de blog o curso y mantenga constante el tono de la marca.",
        "steps": [
          "Prepare una imagen de referencia de marca (o cree primero una imagen principal satisfactoria)",
          "Sube la imagen de referencia en Midjourney y copia el enlace de la imagen.",
          "Utilice --sref {url} --sw 80 para generar imágenes con el mismo estilo y diferentes temas",
          "Agregue --ar 16:9 y palabras clave de color principal de marca a la serie de tutoriales",
          "Después de generar por lotes 4 imágenes, U amplía la versión seleccionada.",
          "Exportar para banner del sitio o portada de cuenta oficial"
        ],
        "prompt": "Interfaz de usuario futurista del panel de aprendizaje de IA, paleta verde azulado y azul marino oscuro, brillo suave, tipografía mínima, motivo abstracto de red neuronal --ar 16:9 --sref {el enlace de su imagen de referencia} --sw 75 --v 6",
        "result": "Un conjunto de imágenes de estilo tecnológico 16:9 con un estilo visual unificado.",
        "tips": "--sw Peso del estilo de control: 60–100 De uso común; demasiado alto hará que la imagen casi copie la composición de la imagen de referencia."
      },
      {
        "id": "2026-06-30-dify-knowledge-bot",
        "title": "El robot de preguntas y respuestas de la base de conocimientos de Dify accede a las notas de estudio",
        "desc": "Importe notas de estudio de Markdown a la base de conocimientos de Dify y publique un asistente de enseñanza Bot exclusivo que pueda responder \"¿Cómo entiende un determinado término?\"",
        "steps": [
          "Inicie sesión en Dify y cree una aplicación de \"Base de conocimientos\"",
          "Cargue notas de Markdown o sincronice archivos de exportación de Notion",
          "Establezca una estrategia de segmentación: segmente por título, reserve entre 500 y 800 bloques",
          "Cree una aplicación de conversación, asocie la base de conocimientos y habilite la visualización de referencias",
          "Límite de palabras del mensaje del sistema: solo responda según la base de conocimientos, si no lo sabe, simplemente diga no lo sé.",
          "Publicar una aplicación web o insertar una prueba de iframe en un sitio de aprendizaje"
        ],
        "prompt": "Eres un asistente de aprendizaje de IA. Respuesta basada únicamente en el contenido de la base de conocimientos, citando extractos del texto original.\nSi no hay contenido relevante en la base de conocimientos, diga claramente \"no cubierto en las notas\" y sugiera qué capítulo consultar.\nEstructura de respuesta: conclusión de una oración + explicación puntual + palabras clave para lectura adicional.",
        "result": "Un robot de preguntas y respuestas exclusivo que puede citar la fuente de las notas.",
        "tips": "Recuerda volver a indexar en Dify después de actualizar tus notas; enfatizar \"sin mentiras\" en el mensaje puede reducir las alucinaciones."
      },
      {
        "id": "2026-06-29-chatgpt-custom-gpt-tutorial",
        "title": "Realice una \"revisión rápida de palabras\" GPT personalizado en 10 minutos",
        "desc": "Cree un GPT dedicado para su equipo: verifique automáticamente la calidad de las palabras clave de acuerdo con la estructura RTFC y brinde sugerencias de reescritura, adecuadas para equipos de aprendizaje y contenido.",
        "steps": [
          "Ingresos: suscripción personal + Teams con tracción en dos ruedas, Teams está creciendo más rápido",
          "Nombre: Entrenador de revisión rápida; Descripción Ingrese la palabra solicitada para obtener comentarios de revisión",
          "Dimensiones de revisión de redacción de instrucciones: función, tarea, formato, limitaciones, capacidad de prueba",
          "Cargue 2 o 3 ejemplos de palabras clave buenas o malas como referencia.",
          "Desactive la navegación web y confíe únicamente en Instrucciones + Ejemplos",
          "Pruebe algunas palabras clave y publique el enlace del espacio de trabajo para que lo utilicen los estudiantes."
        ],
        "prompt": "Usted es revisor de Prompt Word Project. El usuario enviará un mensaje, califique RTFC (Role-Task-Format-Constraints) de 1 a 5 y proporcione:\n1. Ventajas\n2. Lista de preguntas\n3. Versión reescrita de la palabra clave.\n4. Una entrada de prueba que se puede utilizar para verificar el efecto.\nTono: Coaching, chino, conciso.",
        "result": "Un GPT personalizado que se puede compartir, específicamente para revisar y reescribir palabras clave.",
        "tips": "La calidad de los ejemplos determina el límite superior del comportamiento de GPT; Los buenos casos de la biblioteca de ejemplos Prompt de este sitio se pueden exportar como referencia."
      },
      {
        "id": "2026-06-29-openclaw-daily-digest",
        "title": "Tarea programada de OpenClaw: tome las publicaciones de IA de Hacker News y envíelas",
        "desc": "Utilice OpenClaw para configurar tareas cron, filtrar publicaciones candentes relacionadas con la IA en Hacker News y generar resúmenes en chino para enviarlos a Telegram.",
        "steps": [
          "Instale e inicie sesión en OpenClaw CLI para completar la autorización del canal",
          "Crear un nuevo trabajo cron: ejecutado cada 6 horas",
          "Secuencia de comandos de tarea: obtenga las 10 principales publicaciones de palabras clave de IA en la API de HN Algolia",
          "Llame al modelo para generar traducción de título chino + resumen de dos oraciones",
          "Enviar al canal personal a través de Telegram Bot",
          "Ejecute una prueba manual para confirmar el formato y la frecuencia."
        ],
        "prompt": "De la siguiente lista de publicaciones de Hacker News, seleccione los 5 elementos más relevantes para AI/LLM/Agent y genere el informe en chino:\n- título chino\n- Resumen de dos oraciones\n- Aspectos destacados de la discusión (resumen de comentarios y opiniones)\n- Enlace original\nNo inventes contenido que no existe en la publicación.",
        "result": "El canal Telegram recibe periódicamente publicaciones destacadas sobre IA en chino.",
        "tips": "Primero realice una prueba de baja frecuencia (una vez al día) y luego cifre después de confirmar que es estable; Preste atención al límite de frecuencia de solicitud de HN API."
      },
      {
        "id": "2026-06-28-windsurf-refactor",
        "title": "Windsurf refactoriza funciones heredadas en modo estricto de TypeScript con un solo clic",
        "desc": "Seleccione funciones JS heredadas y deje que Cascade complete la finalización de tipos, divida los efectos secundarios y genere pruebas vitest.",
        "steps": [
          "Abra el proyecto que contiene Legacy.js con Windsurf",
          "Seleccione la función objetivo y abra el chat en cascada",
          "Requisitos: convertir a TS, extraer funciones puras y completar JSDoc",
          "Deje que el Agente cree .test.ts con el mismo nombre y ejecute npm test",
          "Si la prueba falla, pegue el informe de error nuevamente en la iteración del diálogo",
          "Utilice git diff para revisar las afirmaciones de tipo antes de enviar un PR"
        ],
        "prompt": "Refactorice las funciones de JavaScript seleccionadas al modo estricto de TypeScript:\n1. Extraiga la función pura y coloque los efectos secundarios en la capa exterior.\n2. Completar los tipos de entrada y salida, prohibir cualquier\n3. Agregue el caso de límite de cobertura de prueba única de vitest\n4. Mantenga la API externa sin cambios\nPrimero dale Plan, confirma y luego cambia el código.",
        "result": "Obtenga versiones refactorizadas probadas y con seguridad de tipos y comprenda el proceso de refactorización asistido por IA.",
        "tips": "Refactorice solo una función a la vez para evitar que el Agente pierda el control al modificar todo el archivo a la vez."
      },
      {
        "id": "2026-06-27-copilot-pr-review",
        "title": "Utilice Copilot para hacer una lista de verificación de revisión del código PR",
        "desc": "Comenta @copilot en las relaciones públicas de GitHub para generar revisiones de seguridad, rendimiento y legibilidad.",
        "steps": [
          "Abrir una solicitud de extracción pendiente de revisión",
          "Escriba @copilot /review en el comentario para activar la revisión",
          "Leer comentarios de agrupación de gravedad generados",
          "Responder \"falso positivo: motivo\" a elementos falsos positivos",
          "Para problemas reales, deje que el autor los solucione o puede sugerirlos directamente.",
          "Habilidades en redes sociales (video corto)"
        ],
        "prompt": "Revise este PR, resultado por nivel de gravedad:\n- 🔴 Riesgo de seguridad/pérdida de datos\n- 🟡Rendimiento y mantenibilidad\n- 🟢 Estilo y denominación\nCada archivo se adjunta con un número de línea y sugerencias de reparación.",
        "result": "Comentarios estructurados de revisión de relaciones públicas para reducir los errores.",
        "tips": "Publicar las especificaciones de codificación del equipo en el repositorio copiloto-instructions.md funcionará mejor."
      },
      {
        "id": "2026-06-26-replit-rapid-api",
        "title": "Replit Agent 30 minutos para crear API de tareas pendientes + Swagger",
        "desc": "Genere API Express CRUD en lenguaje natural, acompañadas automáticamente de páginas de documentación de Swagger UI.",
        "steps": [
          "Cree una nueva plantilla Replit Node.js",
          "Abra el Agente y describa los requisitos de Todo API",
          "Esperando generar index.js, rutas, swagger.json",
          "Haga clic en Ejecutar y visite /docs para ver Swagger",
          "Pruebe CRUD con el cliente HTTP integrado",
          "Implementar para compartir URL pública de Replit"
        ],
        "prompt": "Utilice Express para crear una API Todo REST:\n- OBTENER/POST/ELIMINAR/todos\n- Simplemente guárdalo en la memoria.\n- Integrar swagger-ui en /docs\n- Contiene validación de entrada y manejo de errores.\nDar instrucciones de funcionamiento.",
        "result": "API accesible en línea y documentación interactiva.",
        "tips": "Simplemente agregue un diálogo para cambiar el almacenamiento de memoria a Replit Database antes de conectarse."
      },
      {
        "id": "2026-06-25-v0-landing-section",
        "title": "v0 genera el bloque Hero de la página de inicio de React",
        "desc": "Describa el color de la marca y cópielo, deje que v0 genere shadcn/ui Hero, que se puede copiar al proyecto Next.js.",
        "steps": [
          "Abra v0.dev y cree una nueva compilación.",
          "Ingrese los colores de su marca, título, subcopia y CTA",
          "Seleccione el estilo shadcn + Tailwind",
          "Vista previa responsiva después de la generación",
          "Haga clic en Código para copiar el componente a la aplicación Next.js/",
          "Verificación de desarrollo de ejecución de npm local"
        ],
        "prompt": "Genere un héroe de plataforma de aprendizaje de IA:\n- Fondo oscuro con acento de color cian.\n- Título: El mejor camino para dominar la IA\n- Doble CTA: comience a aprender/busque herramientas\n- shadcn/ui + Tailwind, compatible con dispositivos móviles",
        "result": "Componentes React Hero listos para pegar.",
        "tips": "Después de la generación, ajuste v0 para \"reducir las sombras y aumentar el tamaño de fuente del título\" para que sea más refinado."
      },
      {
        "id": "2026-06-24-claude-code-test",
        "title": "Claude Code completa pruebas de integración para módulos existentes",
        "desc": "Utilice Claude Code en la terminal para analizar agujeros de cobertura, generar pruebas de integración y ejecutar CI.",
        "steps": [
          "Inicie claude en la raíz del proyecto",
          "Escriba una agenda antes de la reunión, publique puntos clave durante la reunión y utilice Notion AI para generar actas y tareas.",
          "Especificar directorio: agregar prueba de integración para el módulo de autenticación",
          "Haga que Claude cree tests/auth.int.test.ts",
          "Ejecute pruebas y solucione casos de uso problemáticos",
          "Presentar y observar la luz verde de CI"
        ],
        "prompt": "Analice el informe de cobertura/lcov y agregue pruebas de integración para src/auth/:\n- Anular el éxito/fallo/bloqueo del inicio de sesión\n- Utilice supertest para ajustar la capa HTTP\n- simulacro de servicio de correo externo\nNo cambie la lógica del código de producción a menos que se descubra un error.",
        "result": "Conjuntos de pruebas integrados con mayor cobertura y CI estable.",
        "tips": "La variación del alcance se puede evitar diciendo explícitamente \"simplemente agregue pruebas y no cambie la implementación\"."
      },
      {
        "id": "2026-06-23-cursor-mcp-github",
        "title": "El cursor se conecta a GitHub MCP: verifique problemas y abra relaciones públicas en la conversación",
        "desc": "Configure el servidor GitHub MCP oficial, consulte los problemas del almacén en el cuadro de diálogo del Agente y cree una rama de reparación.",
        "steps": [
          "Instale la última versión de Cursor y abra la configuración de MCP",
          "Agregue el servidor GitHub MCP y PAT",
          "Habilite los permisos de lectura/escritura del repositorio en mcp.json",
          "Diálogo: Listar problemas abiertos con etiqueta=error",
          "Seleccione uno para permitir que el Agente cree una rama de reparación",
          "Después de revisar la diferencia, presione y abra un PR"
        ],
        "prompt": "Usando GitHub MCP:\n1. Enumere los 5 problemas de errores abiertos principales de este repositorio\n2. Seleccione el n.º 42 para analizar la causa raíz.\n3. Cree la rama fix/42 y envíe la solución mínima.\n4. Abra un PR con pasos de reproducción e instrucciones de prueba.",
        "result": "Complete el ciclo cerrado Issue→PR sin salir del IDE.",
        "tips": "Los permisos PAT se minimizan y solo se utilizan tokens específicos."
      },
      {
        "id": "2026-06-22-bolt-new-pwa",
        "title": "Bolt.new genera una página de memorización de palabras PWA sin conexión",
        "desc": "Genere una PWA instalable, que incluya vocabulario local y recordatorios de revisiones diarias.",
        "steps": [
          "Cerrojo abierto.nuevo",
          "Describir los requisitos de la tarjeta de palabras PWA y la combinación de colores.",
          "Esperando a que se genere el proyecto React/Vite",
          "Vista previa del proceso Agregar a la pantalla de inicio",
          "Descargar o sincronizar con GitHub",
          "Instalación y prueba de dispositivos reales disponibles sin conexión"
        ],
        "prompt": "Haz una PWA de memorización de palabras:\n- 20 palabras por día, voltea las tarjetas.\n- Progreso de registros de almacenamiento local local\n- Instalable en la pantalla de inicio, disponible sin conexión\n- Interfaz de usuario oscura y sencilla",
        "result": "PWA instalable de memorización de palabras sin conexión.",
        "tips": "Deje que Bolt \"complemente la estrategia de caché del trabajador del servicio\" para mejorar la experiencia fuera de línea."
      },
      {
        "id": "2026-06-21-continue-oss-model",
        "title": "Continuar configurando el modelo local de Ollama para completar la privacidad",
        "desc": "Cuando el modelo local Qwen3 está conectado al complemento VS Code Continuar, el código no se puede cargar en la nube.",
        "steps": [
          "Instale Ollama y extraiga el modelo qwen3.",
          "Instale la extensión Continuar VS Code",
          "config.json agregar proveedor de ollama",
          "Establecer la finalización de pestañas en el mismo modelo que el chat",
          "Escribir archivos de prueba para experimentar retrasos en la finalización",
          "Cambiar las reglas del espacio de trabajo para restringir los tipos de archivos"
        ],
        "prompt": "Ayúdame a escribir continuar configuración:\n- chatear y autocompletar usando ollama qwen3\n- Habilitar finalización solo para *.ts\n- Los proyectos empresariales tienen prohibido cargar código en la nube.\nDa el JSON completo.",
        "result": "Chat y finalización de código basado en modelos locales.",
        "tips": "Cuando la latencia es alta, se utiliza un modelo cuantificado más pequeño para completar."
      },
      {
        "id": "2026-06-20-rtfc-interview",
        "title": "Plantilla RTFC para escribir palabras clave de \"entrevista técnica simulada\"",
        "desc": "Utilice restricciones de formato de tarea y rol para diseñar mensajes de entrevistador de back-end reutilizables.",
        "steps": [
          "Cree una nueva conversación, primero escriba Rol: Entrevistador senior",
          "Tarea: Simular una entrevista final de 45 minutos",
          "Formato: Una pregunta y un comentario en cada ronda, resumen final",
          "Restricciones: Está prohibido dar respuestas completas directamente.",
          "Pega la plantilla y prueba una ronda.",
          "Guardar en notas para la práctica diaria"
        ],
        "prompt": "Rol: Entrevistador senior de backend de Go\nTarea: Simular una entrevista de 45 minutos para examinar la concurrencia y el diseño del sistema.\nFormato: una pregunta a la vez → esperando respuesta → comentario breve → siguiente pregunta; finalizar la salida de la hoja de puntuación\nRestricciones: No dé respuestas estándar directamente; hacer preguntas que no son las que les hacen.",
        "result": "Conversaciones de entrevistas simuladas que se pueden utilizar una y otra vez.",
        "tips": "Agregar \"ajuste dinámico de las preguntas en función de la dificultad de mi respuesta\" se acerca más a la realidad."
      },
      {
        "id": "2026-06-19-claude-xml-prompt",
        "title": "Estructurar palabras largas con etiquetas XML",
        "desc": "Divida el fondo, los datos y las reglas en <context><data><rules> para mejorar la estabilidad de las tareas largas.",
        "steps": [
          "Prepare un registro de chat de servicio al cliente que deba analizarse",
          "Pegar en Claude en secciones usando etiquetas XML",
          "Especifique el esquema JSON de salida en <reglas>",
          "Ejecute y verifique que JSON sea analizable",
          "¿Aumenta la eliminación de la ilusión de contraste XML?",
          "Guardar como plantilla de proyecto"
        ],
        "prompt": "<context>Eres inspector de calidad de servicio al cliente</context>\n<datos>\n{pegar conversación}\n</datos>\n<reglas>\n1. Califique del 1 al 5 basándose únicamente en los datos\n2. Salida JSON: {tono, resolución, escalar}\n3. Complete nulo si no está seguro del campo.\n</reglas>",
        "result": "La salida estable puede analizar los resultados de la inspección de calidad JSON.",
        "tips": "Claude es más sensible a los límites XML que los encabezados Markdown."
      },
      {
        "id": "2026-06-18-gemini-few-shot",
        "title": "Clasificación de pocas oportunidades de Géminis: reconocimiento de intención de correo electrónico",
        "desc": "Proporcione 6 correos electrónicos y etiquetas de ejemplo y deje que el modelo clasifique la intención de los nuevos correos electrónicos.",
        "steps": [
          "Recopile 6 correos electrónicos de muestra con etiquetas",
          "Organizado por formato de ejemplo/a clasificar",
          "Abra Gemini y pegue el mensaje completo",
          "Ingrese la prueba número 7",
          "Si hay un error, agregue un ejemplo de límite.",
          "Exportar como plantilla de clasificación de equipo"
        ],
        "prompt": "Habilidad de dramaturgo",
        "result": "Palabras indicadoras del clasificador de intención de correo electrónico de alta precisión.",
        "tips": "Los ejemplos deben cubrir límites confusos, como facturación versus técnica."
      },
      {
        "id": "2026-06-17-perplexity-system",
        "title": "Consejo de investigación sobre perplejidad: hacer cumplir los rangos de tiempo y los tipos de fuentes",
        "desc": "Limitaciones de las indicaciones de investigación en redacción 2025-2026 Fuentes, prioridad dada a documentos y artículos oficiales.",
        "steps": [
          "Abrir nuevo hilo de Perplexity Pro",
          "Indique la ventana de tiempo y la prioridad de la fuente en el mensaje",
          "Solicitar tabla comparativa de resultados + cotización",
          "Compruebe si la nota a pie de página proviene de una fuente oficial.",
          "Preguntar sobre artículos inciertos",
          "Exportar archivo PDF"
        ],
        "prompt": "Límite de palabras del mensaje del sistema: solo responda según la base de conocimientos, si no lo sabe, simplemente diga no lo sé.",
        "result": "Formulario de encuesta rastreable con limitaciones de tiempo.",
        "tips": "Se agregó \"Excluir fuentes secundarias antes de 2024\" cuando se descubre que las noticias antiguas son mixtas."
      },
      {
        "id": "2026-06-16-chatgpt-chain-of-density",
        "title": "Artículo largo abstracto progresivo de cadena de densidad",
        "desc": "Deje que el modelo comience con un breve resumen y repita durante 5 rondas cada vez, aumentando la densidad de la entidad sin alargarse.",
        "steps": [
          "Pegue un artículo de 3000 palabras",
          "80 líneas antes y después del paso fallido de interceptación del registro son suficientes. Si es demasiado largo, interferirá con el juicio.",
          "Instrucciones: agregue detalles en cada ronda posterior, pero mantenga el recuento de palabras sin cambios.",
          "Registre 5 rondas de comparaciones resumidas",
          "Elige la versión que mejor se adapte a tu cartel",
          "Resumen de cuándo usar CoD"
        ],
        "prompt": "Haga un resumen de la cadena de densidad de lo siguiente:\n- Ronda 1: 80 palabras\n- Rondas 2-5: Mantenga 80 palabras pero aumente la densidad de entidades\nMarcar la lista de \"nueva entidad\" en cada ronda\n\n{artículo}",
        "result": "Resúmenes de longitud fija de densidad de información creciente.",
        "tips": "Perfecto para podcast Show Notes para evitar que se alargue demasiado."
      },
      {
        "id": "2026-06-15-claude-constitutional",
        "title": "Consejo constitucional: dé riendas duras a sus asistentes de redacción",
        "desc": "Utilice principios numerados para limitar el tono, las palabras prohibidas y las fuentes de los hechos.",
        "steps": [
          "Lista 5 principios de escritura",
          "Escriba las instrucciones del proyecto Claude",
          "Sube un borrador que necesita ser pulido.",
          "Requiere una autoinspección de la constitución, artículo por artículo, y luego salida",
          "Verificar violación de hipérbole prohibida",
          "Guarde las instrucciones para que su equipo las reutilice"
        ],
        "prompt": "Redacción de la Constitución:\n1. No utilices palabras exageradas como “subversión” y “shock”\n2. Los datos deben estar marcados \"en base a los materiales proporcionados\"\n3. Párrafo ≤120 palabras\n4. Estructura de salida: conclusión → argumento → acción\n5. Escriba \"para ser verificado\" si no está seguro.\nPor favor pula lo siguiente y adjunta un formulario de autoexamen constitucional.",
        "result": "Un borrador pulido con tono sobrio y estructura unificada.",
        "tips": "El número de artículos de la Constitución debería limitarse a entre 5 y 8. Demasiados artículos reducirán la tasa de cumplimiento."
      },
      {
        "id": "2026-06-14-prompt-ab-test",
        "title": "Pruebe A/B dos palabras clave y puntúelas cuantitativamente",
        "desc": "Ejecute la versión A/B de las indicaciones en el mismo conjunto de pruebas y use la rúbrica para permitir que el modelo actúe como juez para calificar.",
        "steps": [
          "Prepare 10 entradas de prueba.",
          "Escriba el mensaje A y el mensaje B",
          "Ejecución por lotes para recopilar resultados",
          "Puntuación en las 5 dimensiones usando indicaciones del árbitro",
          "Media de comparación tabulada",
          "La versión ganadora está en línea."
        ],
        "prompt": "Usted es el juez de evaluación de palabras inmediatas. Califique dos resultados de la misma entrada en una escala del 1 al 5: precisión, integridad, formato, concisión, seguridad.\nEntrada: {x}\nSalida A: {a}\nSalidaB: {b}\nGenere JSON y recomiende un ganador.",
        "result": "Conclusión basada en datos sobre la selección rápida de palabras.",
        "tips": "El conjunto de prueba debe contener entradas limitadas y maliciosas."
      },
      {
        "id": "2026-06-13-meta-prompt-refine",
        "title": "Meta-mensaje: deja que la IA te ayude a cambiar la palabra del mensaje",
        "desc": "Dé las indicaciones aproximadas al metaindicador \"entrenador de palabras rápidas\" para completar automáticamente RTFC.",
        "steps": [
          "Escribe un recordatorio simple \"Ayúdame a escribir mi informe semanal\"",
          "Aplicar plantilla de meta-solicitud",
          "Obtenga versiones adaptadas y casos de prueba",
          "Verificar con casos de prueba",
          "iterar alrededor",
          "Guardar en el léxico rápido"
        ],
        "prompt": "Eres el entrenador de palabras rápido. El usuario dará un mensaje simple, envíe:\n1. Diagnóstico de problemas\n2. Versión reescrita completa de RTFC\n3. Dos entradas de prueba y puntos de salida ideales\nChino, conciso.",
        "result": "Obtenga la versión RTFC profesional de Humble Tips.",
        "tips": "El meta-solicitud solo cambia un elemento a la vez para evitar la degradación de la calidad del lote."
      },
      {
        "id": "2026-06-12-midjourney-character",
        "title": "Midjourney --cref hace ilustraciones consistentes de los personajes de la serie",
        "desc": "Utilice referencias de personajes para generar ilustraciones de múltiples escenas de la misma IP, adecuadas para las mascotas del curso.",
        "steps": [
          "Primero crea un retrato de personaje satisfactorio.",
          "Copiar enlace de imagen como --cref",
          "Escribe diferentes indicaciones de escena para mantener --cw 80",
          "Selección de imágenes por lotes con la mayor coherencia",
          "Final Four de lujo",
          "Exportar PNG para usar en cursos"
        ],
        "prompt": "La misma mascota \"Pequeño Robot Azul\" está estudiando en la biblioteca, ilustración plana, combinación de colores azul y blanco --cref {url} --cw 85 --ar 1:1 --v 6",
        "result": "Una colección de ilustraciones de personajes que son consistentes en todas las escenas.",
        "tips": "--cw Si es demasiado alto, la pose se copiará y las acciones reemplazables se reducirán."
      },
      {
        "id": "2026-06-11-runway-motion-brush",
        "title": "Runway Gen-3 Motion Brush hace que los carteles estáticos se muevan",
        "desc": "Aplique vectores de movimiento a las nubes y los puntos de luz del cartel y exporte un vídeo en bucle de 5 segundos.",
        "steps": [
          "Subir póster AI JPG",
          "Elija Gen-3 Alfa Turbo",
          "Motion Brush pinta áreas de nubes",
          "Establecer una deriva horizontal lenta",
          "Vista previa y ajuste de intensidad",
          "Exportar MP4 1080p"
        ],
        "prompt": "(Operación visual principalmente) Motion Brush solo pinta nubes y puntos de luz, intensidad 3/10, cámara fija.",
        "result": "Se puede utilizar para el vídeo en bucle de fondo de Hero del sitio.",
        "tips": "Mantenga el área en movimiento lo más pequeña posible para evitar la distorsión de toda la imagen."
      },
      {
        "id": "2026-06-10-kling-image2video",
        "title": "Vídeo de Keling Tusheng: imágenes de productos convertidas en vídeos de visualización de 5 segundos",
        "desc": "Cargue la imagen del producto de comercio electrónico, solicite una ligera rotación y un halo, y obtenga 5 segundos de material publicitario.",
        "steps": [
          "Preparar producto de fondo transparente PNG",
          "Subir vídeo de Ke Ling Tu Sheng",
          "Consejo: rotación lenta + luz suave",
          "Seleccione 5s 720p",
          "Genere 2 o 3 versiones de lo mejor",
          "Producto: La API de la nube aún no está abierta en general. En términos de negocios y cumplimiento de 2M, se recomienda verificar simultáneamente la residencia de datos, la retención de registros y las obligaciones de notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales."
        ],
        "prompt": "El producto permanece centrado, gira lentamente 15 grados, luz suave de estudio, fondo gris claro degradado, sin texto.",
        "result": "Material de vídeo de demostración del producto de 5 segundos.",
        "tips": "Primero se recortan imágenes de fondo complejas y luego se generan, por lo que el cuerpo principal es más estable."
      },
      {
        "id": "2026-06-09-figma-ai-prototype",
        "title": "Figma AI genera prototipos en los que se puede hacer clic a partir de redacción publicitaria",
        "desc": "Imagen del producto sobre fondo blanco (palabras positivas y negativas)",
        "steps": [
          "Figma crea un nuevo archivo prototipo de IA",
          "Ingrese la descripción de la pantalla de tres segmentos y el flujo de botones",
          "Verifique el diseño automático después de la compilación",
          "Ajustar manualmente la copia y el espaciado",
          "Compartir enlace para comentar con colegas",
          "Exportar anotaciones listas para desarrolladores"
        ],
        "prompt": "Genere incorporación en 3 pantallas: Bienvenida → Seleccione un objetivo → Cursos recomendados; el botón principal \"Continuar\" admite el retorno; el terminal móvil tiene 390 de ancho.",
        "result": "Enlace en el que se puede hacer clic al prototipo de baja fidelidad.",
        "tips": "Después de la generación, la fuente unificada es el Team Design System."
      },
      {
        "id": "2026-06-08-comfyui-workflow",
        "title": "Flujo de trabajo de ComfyUI: póster preciso SD3 + ControlNet",
        "desc": "Cree un flujo de trabajo ControlNet de dibujo lineal para generar carteles de cursos en lotes.",
        "steps": [
          "Instale los nodos ComfyUI y SD3",
          "Importar OpenPose/Lineart ControlNet",
          "Cargar dibujos lineales o bocetos de diseño",
          "Conecte KSampler al nodo de amplificación",
          "Cola por lotes 4 hojas",
          "Después de seleccionar la imagen, use FaceDetailer para recortar su cara."
        ],
        "prompt": "(Operación de flujo de trabajo) Genere un póster de curso de estilo tecnológico basado en dibujos lineales, con el área en blanco del texto en el 30% superior y el color principal azul y negro.",
        "result": "Carteles por lotes con composición controlable.",
        "tips": "Todavía se recomienda que el texto se escriba en Figma más adelante, en lugar de depender únicamente del modelo para la composición tipográfica."
      },
      {
        "id": "2026-06-07-chatgpt-image-edit",
        "title": "Edición de imágenes ChatGPT: reemplace el fondo con una toma de estudio en color sólido",
        "desc": "Sube un retrato o una imagen de producto y el estilo conversacional requiere cambiar el fondo y ajustar ligeramente el color.",
        "steps": [
          "ChatGPT subir imágenes de productos",
          "Requiere \"fondo blanco puro + ligera sombra\"",
          "Si no está satisfecho, encierre en un círculo el área y cámbiela.",
          "Descargar HD PNG",
          "Compare la precisión del color de la imagen original",
          "Utilizado para la imagen principal del comercio electrónico."
        ],
        "prompt": "Usuarios: preste atención a los descuentos educativos y la gestión de puestos de equipo. Para los estudiantes de IA, pueden usar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana.",
        "result": "Imagen principal con fondo blanco disponible para comercio electrónico.",
        "tips": "El robot de preguntas y respuestas de la base de conocimientos de Dify accede a las notas de estudio"
      },
      {
        "id": "2026-06-06-capcut-ai-caption",
        "title": "Subtítulos CapCut AI + títulos de capítulos generados automáticamente",
        "desc": "Importe grabaciones de pantalla de tutoriales, subtitule y genere tarjetas de capítulos con un solo clic.",
        "steps": [
          "Importar grabación de pantalla del tutorial de 10 minutos",
          "Reconocer subtítulos automáticos en chino",
          "Terminología de revisión",
          "Los capítulos de IA se dividen según pausas.",
          "Aplicar estilo de subtítulo de marca",
          "Exportar carga de 1080p"
        ],
        "prompt": "(Principalmente para operaciones de herramientas) Reemplace términos como \"API\" y \"RAG\" después de los subtítulos: {Glosario}",
        "result": "Vídeos tutoriales con marcadores de capítulos.",
        "tips": "Verifique manualmente los términos profesionales antes de exportar."
      },
      {
        "id": "2026-06-05-leonardo-consistent",
        "title": "Análisis OLAP",
        "desc": "Utilice 4 imágenes de referencia para bloquear el personaje y generar imágenes del curso en lotes.",
        "steps": [
          "Sube 4 fotos del mismo personaje desde diferentes ángulos",
          "Activar la referencia de personajes",
          "Establecer intensidad Media",
          "Escriba múltiples indicaciones de escena y generelas en lotes",
          "ESS",
          "Descargue el Atlas de estilo unificado"
        ],
        "prompt": "La variación del alcance se puede evitar diciendo explícitamente \"simplemente agregue pruebas y no cambie la implementación\".",
        "result": "Código Claude: npx antigravedad-habilidades-increíbles --claude",
        "tips": "La iluminación de la imagen de referencia es consistente y la generación es más estable."
      },
      {
        "id": "2026-06-04-make-notion-sync",
        "title": "Crear escenario: envío de formulario → Base de datos de Notion + notificación de Slack",
        "desc": "Las nuevas respuestas de Typeform se escriben automáticamente en Notion y se envían al resumen de Slack.",
        "steps": [
          "Crear nuevo escenario",
          "El módulo Typeform escucha nuevas respuestas",
          "Notion Crear campos de asignación de elementos de base de datos",
          "El módulo OpenAI genera un resumen de oración",
          "Slack envía notificaciones del canal",
          "Ejecute pruebas y habilite la programación"
        ],
        "prompt": "Genere un resumen de oración de Slack basado en el formato JSON, incluido nombre, objetivo y urgencia, en chino.",
        "result": "Almacenamiento y notificación automáticos de extremo a extremo.",
        "tips": "Primero asigne campos y luego conéctese a la IA para facilitar la depuración."
      },
      {
        "id": "2026-06-03-zapier-gmail-label",
        "title": "Zapier: etiquetas automáticas de Gmail AI y borradores de respuestas",
        "desc": "Los correos electrónicos nuevos activan la clasificación ChatGPT y se etiquetan como Gmail y, opcionalmente, generan borradores.",
        "steps": [
          "Zapier conecta Gmail con OpenAI",
          "Activador: Nuevo correo electrónico",
          "Acción: Categoría + Etiquetas sugeridas",
          "Agregar etiqueta de Gmail",
          "Opcional Crear borrador de respuesta",
          "Prueba 3 correos electrónicos"
        ],
        "prompt": "Categorizar correos electrónicos y generar JSON: {label, urgency, draft_reply}\nEnumeración de etiquetas: Cliente/Soporte/Boletín",
        "result": "Bandeja de entrada categorizada automáticamente con borradores de respuestas opcionales.",
        "tips": "Los borradores no se envían automáticamente de forma predeterminada para evitar envíos accidentales."
      },
      {
        "id": "2026-06-02-dify-http-tool",
        "title": "El flujo de trabajo de Dify llama a la API HTTP externa para el cálculo de cotizaciones",
        "desc": "Orqueste los requisitos de análisis de LLM → API de ajuste de precios HTTP → formato de cotización.",
        "steps": [
          "Dify nueva aplicación de flujo de trabajo",
          "El nodo de inicio recibe el presupuesto del usuario y la cantidad de personas.",
          "El nodo LLM se analiza en JSON estructurado",
          "El nodo HTTP llama a la API de precios interna",
          "Representación del nodo de plantilla Cotización de Markdown",
          "Escáner de habilidades de Cisco"
        ],
        "prompt": "Analice los requisitos del usuario en JSON: {plan, asientos, meses}, no invente precios, los campos desconocidos son nulos.",
        "result": "Generador automático de cotizaciones.",
        "tips": "Los nodos HTTP agregan tiempos de espera y ramas de error."
      },
      {
        "id": "2026-06-01-n8n-github-release",
        "title": "n8n monitorea la versión de GitHub y genera publicaciones de actualización en chino",
        "desc": "Cuando se lanzan nuevas versiones, los registros de cambios se capturan automáticamente y se utiliza la IA para escribir artículos breves al estilo de las cuentas oficiales.",
        "steps": [
          "Activador de GitHub n8n en el lanzamiento",
          "Obtener rebaja del cuerpo de lanzamiento",
          "OpenAI se reescribe como un tweet de cuenta pública",
          "Guardar un borrador de Google Doc",
          "Revisión de notificaciones de Telegram",
          "Publicado después de la confirmación manual"
        ],
        "prompt": "Vuelva a escribir el siguiente registro de cambios en inglés en un tweet de una cuenta pública china: título + actualización de tres puntos + sugerencias de actualización, sin exagerar.",
        "result": "Tweet de actualización de la versión china pendiente de revisión.",
        "tips": "Agregue el comando \"Explicar con analogía\" cuando la versión sea demasiado técnica."
      },
      {
        "id": "2026-05-31-openclaw-rss-summarize",
        "title": "OpenClaw agrega RSS y lo escribe en tablas multidimensionales de Feishu",
        "desc": "Capture los RSS del blog de IA con regularidad y escriba el resumen en Bitable para que el equipo lo explore.",
        "steps": [
          "OpenClaw nuevo cron",
          "Configurar listas RSS",
          "El GUID del filtro ya existe",
          "Resumen de 80 palabras generado por IA",
          "Feishu Bitable Nueva fila",
          "Vista de informe semanal agrupado por fecha"
        ],
        "prompt": "Salida para cada RSS: título chino, resumen de 80 palabras, 3 palabras clave y enlace para leer el texto original.",
        "result": "Biblioteca de información de IA en Feishu Sheets.",
        "tips": "El campo Bitable se crea primero para evitar errores de escritura."
      },
      {
        "id": "2026-05-30-pipedream-youtube",
        "title": "Pipedream: Nuevos vídeos de YouTube → Resumen de correo electrónico",
        "desc": "Suscríbase a las actualizaciones del canal, transcriba resúmenes automáticamente y envíelos por correo electrónico.",
        "steps": [
          "Pipedream Selecciona YouTube Nuevo vídeo",
          "Extraer subtítulos o transcripción de audio",
          "Resumen de tres puntos de OpenAI",
          "Enviar correo electrónico a través de SMTP",
          "ID de video procesado con deduplicación",
          "Todos los días a las 9 en punto"
        ],
        "prompt": "Generar en base a subtítulos: ①Tema de una oración ②Tres puntos principales ③Si vale la pena verlo (1-5) chino.",
        "result": "Correo electrónico con vídeos destacados diarios.",
        "tips": "Los vídeos sin subtítulos deben pasar primero por el paso Whisper."
      },
      {
        "id": "2026-05-29-ifttt-ios-shortcut",
        "title": "Comando de acceso directo IFTTT + iOS: Inspiración por voz → Organización Notion AI",
        "desc": "Dile inspiración a Siri y automáticamente ingresará a Notion y la IA completará las etiquetas.",
        "steps": [
          "Atajos de iOS de IFTTT Connect",
          "Grabación de acceso directo a texto",
          "Webhook a la API de Notion",
          "Etiquetas y asociaciones de finalización de Notion AI",
          "Escritura de confirmación de notificación",
          "Probar el proceso de voz"
        ],
        "prompt": "Organice la transcripción de voz en notas de Notion: título + tres viñetas + etiqueta #INSPIRED #AILearning",
        "result": "La inspiración de la voz conduce a notas estructuradas.",
        "tips": "En entornos ruidosos, edite en su teléfono antes de enviar."
      },
      {
        "id": "2026-05-28-activepieces-crm",
        "title": "Activepieces autohospedado: Formulario de cliente potencial → Puntuación CRM+AI",
        "desc": "Activepieces autohospedados, los formularios del sitio web se introducen en CRM y la IA evalúa la calidad de los clientes potenciales.",
        "steps": [
          "Implementación de Docker Activepieces",
          "Formulario de recepción de webhook",
          "Escritura HTTP a contactos de HubSpot",
          "La IA alcanza la puntuación principal del 1 al 5",
          "Rama de puntuación más alta Slack @sales",
          "Ingrese a la secuencia de cultivo con puntuaciones bajas."
        ],
        "prompt": "Califique del 1 al 5 según las respuestas en el formulario, motivo de salida ≤ 50 palabras, JSON: {puntuación, motivo}",
        "result": "Canal de leads de CRM con puntuación.",
        "tips": "Tenga cuidado de realizar una copia de seguridad de las credenciales cifradas para el autohospedaje."
      },
      {
        "id": "2026-05-27-notion-ai-meeting",
        "title": "Notas de la reunión de Notion AI: agenda → actas → elementos de acción",
        "desc": "Escriba una agenda antes de la reunión, publique puntos clave durante la reunión y utilice Notion AI para generar actas y tareas.",
        "steps": [
          "Cree una plantilla de página de reunión con área de agenda",
          "Puntos clave del registro de viñetas durante la reunión",
          "Seleccione el texto completo Notion AI Resumir",
          "Luego, AI extrae elementos de acción",
          "Convertir a asignación de tareas de base de datos",
          "Establecer recordatorios de fechas límite"
        ],
        "prompt": "Generar actas en base a la agenda y puntos clave: puntos de decisión/discusión/acción (responsable + DDL), en chino, no constituyen contenidos no discutidos.",
        "result": "Actas de reuniones estructuradas + biblioteca de tareas.",
        "tips": "Los elementos de acción deben asignarse a las personas para evitar que queden colgados."
      },
      {
        "id": "2026-05-26-google-docs-draft",
        "title": "Esquema del plan de redacción Gemini integrado de Google Docs",
        "desc": "Utilice Gemini en la barra lateral de Documentos para expandir el esquema del plan en función de tres viñetas.",
        "steps": [
          "Crear un nuevo documento de Google",
          "Escribe tres viñetas principales",
          "Barra lateral de Géminis selecciona Ayúdame a escribir",
          "Después de generar el esquema, Aceptar",
          "Completar manualmente datos y referencias",
          "Compartir comentarios para recopilar opiniones"
        ],
        "prompt": "Amplíe los siguientes tres puntos en un esquema de programa: antecedentes, objetivos y plan de tres fases; 2-3 viñetas en cada sección; Chino formal.",
        "result": "Un esbozo revisable de un primer borrador de propuesta.",
        "tips": "Asegúrese de completar manualmente los datos reales después de la generación."
      },
      {
        "id": "2026-05-25-excel-copilot-formula",
        "title": "Excel Copilot escribe fórmulas de BUSCAR XL en lenguaje natural",
        "desc": "Describa los requisitos de coincidencia entre tablas y deje que Copilot genere e interprete fórmulas.",
        "steps": [
          "Abrir un libro de trabajo con dos hojas.",
          "El panel del copiloto describe la lógica de coincidencia",
          "Insertar fórmula en la columna de destino",
          "Línea de verificación #N/A",
          "Deje que Copilot cambie IFERROR",
          "Guardar plantilla"
        ],
        "prompt": "Obtenga el precio unitario de la lista de precios según el SKU de la tabla de pedidos y escríbalo en una nueva columna de la tabla de pedidos. Si no se puede encontrar, complete \"faltante\"; utilice BUSCARX.",
        "result": "Corrija la fórmula de coincidencia entre tablas.",
        "tips": "SDK multilingüe"
      },
      {
        "id": "2026-05-24-slack-summary",
        "title": "Resumen del hilo de Slack AI: discusión larga, 30 segundos para leer",
        "desc": "Resumen con un solo clic de decisiones y tareas pendientes para más de 50 hilos de respuesta.",
        "steps": [
          "Abrir hilo largo del proyecto",
          "Haga clic en Resumir hilo",
          "Lea el resumen de IA",
          "Compruebe si se omiten los comentarios de veto",
          "Anclar resumen al canal",
          "Seguimiento de tareas no asignadas"
        ],
        "prompt": "(Principalmente operaciones de botones) Agregar manualmente después del resumen: persona a cargo/fecha límite/problemas abiertos",
        "result": "Una revisión rápida del consenso del equipo.",
        "tips": "Después del resumen, @ la persona responsable aún debe confirmar."
      },
      {
        "id": "2026-05-23-obsidian-copilot",
        "title": "Complemento Obsidian Copilot: notas de estudio de preguntas y respuestas en la biblioteca",
        "desc": "Configure modelos locales/en la nube para realizar preguntas y respuestas basadas en referencias en toda la base de datos de notas.",
        "steps": [
          "Instale el complemento Obsidian Copilot",
          "Configurar API o Ollama",
          "Biblioteca de vectores de bóveda de índice",
          "Pregunta \"Explica el experimento que hice con RAG\"",
          "Consulte el enlace de la cita para ir a la nota.",
          "Se corrigieron problemas comunes para los comandos."
        ],
        "prompt": "Respuesta basada únicamente en notas; cita [[nombre de la nota]]; si no lo sabe, simplemente diga que no está grabado; Mantenga el chino conciso.",
        "result": "Preguntas de trivia personales con citas de notas.",
        "tips": "Vuelva a indexar periódicamente para evitar que no se encuentren nuevas notas."
      },
      {
        "id": "2026-05-22-feishu-ai-doc",
        "title": "Feishu Document AI compila enlaces de encuestas en una lista de productos competitiva",
        "desc": "Pegue los puntos clave de 5 enlaces de productos de la competencia y la IA generará una tabla comparativa.",
        "steps": [
          "Crear un nuevo documento Feishu",
          "Pegue las viñetas de los productos de la competencia.",
          "Seleccione Creación de IA → Tabla",
          "Precios y características de revisión",
          "Agregue una columna \"desconocida\" para evitar el llenado ciego",
          "Escriba una agenda antes de la reunión, publique puntos clave durante la reunión y utilice Notion AI para generar actas y tareas."
        ],
        "prompt": "Genere una tabla comparativa de productos de la competencia basada en los siguientes puntos clave: función/precio/soporte chino/método de implementación; complete \"para ser verificado\" si falta.",
        "result": "Tabla comparativa compartible de productos de la competencia.",
        "tips": "La columna de precio está etiquetada como \"a la fecha\"."
      },
      {
        "id": "2026-05-21-linear-ai-issue",
        "title": "Potencia de cálculo: inferencia de un solo complejo en minutos. En términos de negocios y cumplimiento, se recomienda verificar simultáneamente las obligaciones de residencia de datos, retención de registros y notificación al usuario, especialmente cuando el producto está dirigido a usuarios transfronterizos o multirregionales.",
        "desc": "Pegue 10 comentarios de usuarios, la IA agrupa y genera problemas priorizados.",
        "steps": [
          "Utilice el modo de búsqueda académica para localizar rápidamente artículos básicos y revisar entradas en el campo.",
          "Pegue comentarios en el asistente de IA",
          "Solicitar agrupación por tema",
          "Después de cargar 4 imágenes de referencia y abrir Character Reference, la coherencia mejora significativamente.",
          "Ajustar manualmente las prioridades",
          "Programado en el ciclo de esta semana"
        ],
        "prompt": "Agrupar los comentarios en Cuestiones: título, planteamiento del problema, criterios de aceptación, prioridad P0-2; sin duplicación; Chino.",
        "result": "Backlog de producto estructurado.",
        "tips": "Los criterios de aceptación deben ser comprobables."
      },
      {
        "id": "2026-05-20-teams-recap",
        "title": "Equipos reunidos en revisión de Copilot: quién dijo qué decisión",
        "desc": "Después de la reunión, abra el panel Copilot para ver la lista de segmentos y decisiones de los oradores.",
        "steps": [
          "Abra la reunión de Teams que acaba de finalizar",
          "Copiloto → Resumen",
          "Ver oradores y temas",
          "Copiar decisiones y elementos de acción",
          "Pegar en la página del proyecto de OneNote",
          "Marcar al responsable"
        ],
        "prompt": "Extracto de la transcripción de la reunión: lista de decisiones, cuestiones abiertas, elementos de acción (personas + DDL); no lo inventes.",
        "result": "Registro archivable de las decisiones de las reuniones.",
        "tips": "Para reuniones delicadas, primero confirme si la empresa permite la transcripción en la nube."
      }
    ]
  }
});
})();
