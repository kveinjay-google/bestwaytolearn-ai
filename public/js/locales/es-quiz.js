/* ES overlays — quiz */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('es', {
    quiz: [
        {
          q: "DL⊂ML⊂AI",
          options: [
            "La IA es un subconjunto de DL",
            "AI⊃ML⊃DL",
            "DL⊂ML⊂AI",
            "DL⊂ML⊂AI"
          ],
          answer: 1,
          explain: "Inteligencia artificial ⊃ Aprendizaje automático ⊃ Aprendizaje profundo: de izquierda a derecha (AI → ML → DL), el alcance se reduce."
        },
        {
          q: "¿Cuál es el objetivo principal de formación de un LLM (Large Language Model)?",
          options: [
            "Traduciendo todos los idiomas",
            "Traduciendo todos los idiomas",
            "Traduciendo todos los idiomas",
            "Almacenamiento de cada página web"
          ],
          answer: 1,
          explain: "A través del simple objetivo de predecir el siguiente token en texto masivo, los LLM aprenden a comprender y generar idiomas."
        },
        {
          q: "¿Qué significa alucinación?",
          options: [
            "La IA se niega a responder",
            "El sistema funciona más lento.",
            "Generar contenido incorrecto con confianza",
            "Solo puede manejar contenido ficticio."
          ],
          answer: 2,
          explain: "Las alucinaciones son una limitación conocida del LLM: fluida pero objetivamente errónea. Siempre verifique la información crítica."
        },
        {
          q: "¿Cuál es la principal innovación del Transformer?",
          options: [
            "convolución CNN",
            "recurrencia de RNN",
            "recurrencia de RNN",
            "Árboles de decisión"
          ],
          answer: 1,
          explain: "La autoatención permite que el modelo atienda todas las posiciones en la secuencia de entrada a la vez: la base de GPT y otros LLM."
        },
        {
          q: "¿Qué hace RAG (Generación Aumentada de Recuperación)?",
          options: [
            "Acelerar el entrenamiento",
            "Reducir el recuento de parámetros",
            "Combina una base de conocimientos para reducir las alucinaciones",
            "Generar imágenes"
          ],
          answer: 2,
          explain: "RAG recupera primero fuentes externas y luego genera respuestas, lo que reduce en gran medida las respuestas inventadas."
        },
        {
          q: "¿Cuál es la forma más eficaz de escribir indicaciones?",
          options: [
            "Cuanto más corto, mejor",
            "Simplemente escribe \"ayúdame a escribir un artículo\".",
            "Mensajes estructurados con rol + tarea + formato + restricciones",
            "Usa muchos emojis"
          ],
          answer: 2,
          explain: "Las indicaciones estructuradas mejoran significativamente la calidad de los resultados."
        },
        {
          q: "¿Cuál de las siguientes es una aplicación GenAI (IA generativa)?",
          options: [
            "Filtrado de spam",
            "Reconocimiento facial",
            "Generación de imágenes a mitad de camino",
            "Detección de fraude"
          ],
          answer: 2,
          explain: "GenAI crea contenido nuevo; El filtrado de spam y la detección de fraude son IA discriminatorias."
        },
        {
          q: "¿Qué es una ficha?",
          options: [
            "Un nombre de usuario",
            "La unidad básica del procesamiento de textos.",
            "Una criptomoneda",
            "Un número de versión"
          ],
          answer: 1,
          explain: "Un token es la unidad más pequeña que utilizan los modelos para procesar texto; Las ventanas de contexto se miden en recuento de tokens."
        },
        {
          q: "¿En qué se diferencia un agente de IA de un chatbot normal?",
          options: [
            "es mas divertido",
            "Puede planificar de forma autónoma y llamar a herramientas para completar tareas.",
            "Sólo puede responder si/no",
            "No necesita internet"
          ],
          answer: 1,
          explain: "Los agentes pueden dividir tareas, llamar a herramientas y ejecutar operaciones de varios pasos."
        },
        {
          q: "¿Qué es RLHF y qué hace?",
          options: [
            "Un método de entrenamiento rápido",
            "Aprendizaje reforzado a partir de la retroalimentación humana: optimizar los resultados con las preferencias humanas",
            "Una técnica de generación de imágenes.",
            "RLHF hizo que ChatGPT fuera más amigable y seguro que GPT-3 sin formato."
          ],
          answer: 1,
          explain: "RLHF hizo que ChatGPT fuera más amigable y seguro que GPT-3 sin formato."
        },
        {
          q: "Acelera la inferencia",
          options: [
            "Acelera la inferencia",
            "Hace que la IA muestre su razonamiento paso a paso",
            "Reduce el uso de tokens",
            "Aumenta los parámetros del modelo."
          ],
          answer: 1,
          explain: "Las indicaciones de cadena de pensamiento hacen que el modelo muestre pasos de razonamiento, lo que mejora en gran medida la precisión en tareas lógicas complejas."
        },
        {
          q: "¿Para qué se utiliza principalmente LoRA (adaptación de bajo rango)?",
          options: [
            "Generación de imágenes",
            "Ajuste eficiente de modelos grandes",
            "Etiquetado de datos",
            "Implementación del modelo"
          ],
          answer: 1,
          explain: "LoRA entrena sólo un pequeño conjunto de parámetros adicionales para adaptarse a tareas específicas a un costo muy bajo."
        },
        {
          q: "¿Qué incluye PNL (Procesamiento del Lenguaje Natural)?",
          options: [
            "Sólo traducción automática",
            "Traducción, resúmenes, preguntas y respuestas, análisis de sentimientos y más",
            "Sólo reconocimiento de voz",
            "Sólo generación de texto"
          ],
          answer: 1,
          explain: "La PNL cubre todas las técnicas que permiten a las computadoras procesar el lenguaje humano."
        },
        {
          q: "¿Cuál es el papel principal de las GPU en la IA?",
          options: [
            "Almacenamiento de datos",
            "Computación paralela para acelerar el entrenamiento y la inferencia",
            "comunicación de red",
            "Mostrando imágenes"
          ],
          answer: 1,
          explain: "La computación paralela de GPU los convierte en hardware central para el entrenamiento y la inferencia de IA."
        },
        {
          q: "¿Cuál es la mejor manera para que los principiantes comiencen a usar la IA?",
          options: [
            "Domina todas las matemáticas primero.",
            "Pruébalo directamente con problemas reales.",
            "Sólo mira, nunca practiques.",
            "Espere hasta que la IA esté completamente madura"
          ],
          answer: 1,
          explain: "Aprender haciendo funciona mejor: pruebe tareas reales y comprenda los principios a través de la práctica."
        },
        {
          q: "¿Cuál es la principal diferencia entre AGI y la ANI implementada actualmente?",
          options: [
            "AGI sólo puede manejar el lenguaje",
            "ANI puede manejar cualquier tarea intelectual.",
            "El AGI aún no se ha alcanzado; ANI sólo realiza tareas específicas",
            "Son exactamente iguales"
          ],
          answer: 2,
          explain: "Toda la IA comercial actual es ANI (IA estrecha); La AGI (inteligencia general artificial) sigue siendo un objetivo de investigación a largo plazo."
        },
        {
          q: "¿Qué elementos debería incluir normalmente un mensaje estructurado?",
          options: [
            "Rol + tarea + contexto + formato + restricciones",
            "Rol + tarea + contexto + formato + restricciones",
            "Cuanto más corto, mejor",
            "Solo emojis"
          ],
          answer: 1,
          explain: "Ingeniería rápida del día 4 de este sitio: los cinco elementos juntos mejoran enormemente la calidad de salida y la reutilización."
        },
        {
          q: "¿Qué hace el parámetro de temperatura?",
          options: [
            "Acelera la inferencia",
            "Controla la aleatoriedad de la salida: baja = más estable, alta = más creativa",
            "Aumenta la longitud del contexto.",
            "Reduce el uso de tokens"
          ],
          answer: 1,
          explain: "Utilice una temperatura baja para el código (por ejemplo, 0,1) y una temperatura más alta para la escritura creativa (por ejemplo, 0,8)."
        },
        {
          q: "¿Qué es una ventana contextual?",
          options: [
            "Tamaño de la ventana del navegador",
            "La cantidad máxima de tokens que un modelo puede procesar a la vez",
            "Tamaño del conjunto de datos de entrenamiento",
            "Límite de llamadas API"
          ],
          answer: 1,
          explain: "El contenido más allá de la ventana de contexto se trunca u olvida; para documentos largos, elija modelos con ventanas grandes (por ejemplo, Kimi, Claude)."
        },
        {
          q: "¿Cuál es la diferencia entre aprendizaje supervisado y no supervisado?",
          options: [
            "El aprendizaje no supervisado siempre es más preciso",
            "El aprendizaje no supervisado siempre es más preciso",
            "El aprendizaje supervisado no necesita datos",
            "Ninguno de los dos se puede utilizar para la clasificación."
          ],
          answer: 0,
          explain: "Núcleo del día 2: el filtrado de spam es aprendizaje supervisado; La segmentación de clientes a menudo no está supervisada."
        },
        {
          q: "¿Para qué se utilizan principalmente los modelos de difusión?",
          options: [
            "Clasificación de texto",
            "La generación actual de imágenes y vídeos",
            "Consultas de bases de datos",
            "Enrutamiento de red"
          ],
          answer: 1,
          explain: "¿Cuál es el uso principal de las incrustaciones?"
        },
        {
          q: "¿Cuál es el uso principal de las incrustaciones?",
          options: [
            "Cifrar datos",
            "Convertir texto en vectores para búsqueda de similitud semántica",
            "Comprimir vídeo",
            "Entrenamiento de controladores de GPU"
          ],
          answer: 1,
          explain: "El contenido semánticamente similar tiene vectores más cercanos: la base de RAG y las bases de datos vectoriales."
        },
        {
          q: "¿Qué es una habilidad de IA?",
          options: [
            "Una habilidad del personaje del juego.",
            "Un paquete de capacidad modular de conocimientos de dominio y reglas de herramientas para que los agentes lo carguen",
            "Un lenguaje de programación",
            "Un modelo de GPU"
          ],
          answer: 1,
          explain: "Por ejemplo, una habilidad de cursor le enseña a la IA a manejar xlsx; Los agentes pueden cargar habilidades dinámicamente para tareas específicas."
        },
        {
          q: "¿Qué hace MCP (Protocolo de contexto modelo)?",
          options: [
            "Estandarice cómo la IA se conecta con herramientas y fuentes de datos externas",
            "Estandarice cómo la IA se conecta con herramientas y fuentes de datos externas",
            "Generar imágenes",
            "Reemplazar mensajes"
          ],
          answer: 1,
          explain: "MCP permite que la IA se conecte a GitHub, bases de datos, sistemas de archivos y otras capacidades externas a través de un protocolo."
        },
        {
          q: "¿Cuál es el flujo de trabajo correcto para crear una calculadora con Cursor Codex?",
          options: [
            "Memoriza la sintaxis HTML completa y escribe todo a mano",
            "Describir los requisitos → generar código → ejecutar pruebas → dar comentarios para solucionarlo",
            "Copie solo código de la web sin ejecutarlo",
            "Espere hasta que la IA esté completamente madura"
          ],
          answer: 1,
          explain: "El caso práctico de este sitio: \"indicar necesidades → obtener código → abrir en el navegador → iterar correcciones\" es la ruta inicial de programación de IA."
        },
        {
          q: "¿Qué significa --ar 16:9 al final de un mensaje de mitad del viaje?",
          options: [
            "Número de versión de la imagen",
            "Relación de aspecto (paisaje 16:9)",
            "Genera 16 imágenes",
            "Limitado a 9 colores"
          ],
          answer: 1,
          explain: "Parámetros comunes: --ar controla la proporción, --v controla la versión; Las indicaciones en inglés suelen funcionar mejor."
        },
        {
          q: "¿Cuál es el requisito previo clave para la clonación de voz de ElevenLabs/Fish Audio?",
          options: [
            "Utilice el discurso público de cualquier persona para uso comercial.",
            "Sube grabaciones claras de voz seca y clona solo las voces que tengas derecho a usar.",
            "No se necesita grabación",
            "Debes comprar un micrófono profesional para comenzar."
          ],
          answer: 1,
          explain: "Ambiente tranquilo, sin música de fondo, de 1 a 3 minutos de voz seca; Nunca clones las voces de otros sin autorización."
        },
        {
          q: "¿Qué capacidad de IA demuestra una tarea de noticias bursátiles programada por OpenClaw?",
          options: [
            "Solo preguntas y respuestas por chat",
            "Automatización de agentes: activadores programados, recuperación, resumen y envío de canales",
            "Reemplazo de decisiones de inversión humana",
            "Se ejecuta sin configuración"
          ],
          answer: 1,
          explain: "OpenClaw Cron permite a los agentes ejecutar tareas de investigación según un cronograma y enviar resultados; los resultados son solo como referencia; verificarlo."
        },
        {
          q: "¿Cuál es el orden correcto del método de aprendizaje de cuatro fases de este sitio?",
          options: [
            "Práctica → Cognición → Repaso → Herramientas",
            "Cognición → Herramientas → Práctica → Revisión",
            "Herramientas → Revisión → Cognición → Práctica",
            "Las herramientas por sí solas son suficientes"
          ],
          answer: 1,
          explain: "Primero cree un marco cognitivo, luego domine las herramientas y las indicaciones, practique y finalmente realice pruebas y repasos."
        },
        {
          q: "¿Cuál es el principio más sensato a la hora de elegir herramientas de IA?",
          options: [
            "Utilice sólo el más caro",
            "Elija la herramienta especializada que mejor se adapte a cada escenario, no la \"mejor\" en general",
            "Instale los 43 a la vez",
            "Utilice siempre solo el nivel gratuito"
          ],
          answer: 1,
          explain: "Selección de herramientas del día 5: el chat, la codificación, las imágenes, los agentes y la búsqueda tienen puntos fuertes; Los usuarios nacionales también deberían considerar el acceso y el soporte chino."
        },
        {
          q: "¿Cuál es un caso de uso típico para el aprendizaje por refuerzo?",
          options: [
            "Clasificación de correo electrónico",
            "AlphaGo jugando al Go",
            "Compresión de imágenes",
            "Indexación de bases de datos"
          ],
          answer: 1,
          explain: "El aprendizaje por refuerzo aprende políticas a través de señales de recompensa; AlphaGo y el control de robots son aplicaciones clásicas.",
          topic: "fundamentos"
        },
        {
          q: "¿Qué es el sobreajuste?",
          options: [
            "Muy pocos datos de entrenamiento",
            "Buen rendimiento con datos de entrenamiento pero deficiente con datos nuevos",
            "El entrenamiento es demasiado lento.",
            "Memoria GPU insuficiente"
          ],
          answer: 1,
          explain: "El sobreajuste es como \"memorizar respuestas\": recordar muestras de entrenamiento sin generalizar; utilizar más datos o regularización.",
          topic: "fundamentos"
        },
        {
          q: "¿Qué es la indicación de disparo cero?",
          options: [
            "Describe la tarea sin ejemplos.",
            "Proporciona 100 ejemplos.",
            "Sólo imágenes",
            "Debe afinar el modelo."
          ],
          answer: 0,
          explain: "Zero-shot no da ejemplos y se basa en un entrenamiento previo; las indicaciones de unos pocos disparos proporcionan algunos ejemplos.",
          topic: "laboratorio rápido"
        },
        {
          q: "¿Cuál es la ventaja de las indicaciones de pocos disparos?",
          options: [
            "Siempre más barato",
            "Algunos ejemplos alinean rápidamente el formato y el estilo de salida",
            "Sólo para código",
            "No se necesita aviso"
          ],
          answer: 1,
          explain: "Poner de 1 a 3 ejemplos de entrada y salida en el mensaje mejora enormemente la coherencia del formato.",
          topic: "laboratorio rápido"
        },
        {
          q: "¿Cuál es la principal diferencia entre ajuste fino e ingeniería rápida?",
          options: [
            "exactamente lo mismo",
            "El ajuste fino cambia los pesos del modelo; La ingeniería rápida solo cambia la entrada.",
            "La ingeniería rápida cuesta más",
            "El ajuste fino es sólo para imágenes"
          ],
          answer: 1,
          explain: "La mayoría de los usuarios pueden arreglárselas con una ingeniería rápida; el ajuste se adapta a empresas con una gran cantidad de datos etiquetados y necesidades profundas de personalización.",
          topic: "fundamentos"
        },
        {
          q: "¿Cuál es la diferencia entre IA discriminativa e IA generativa?",
          options: [
            "La IA discriminatoria crea contenido nuevo",
            "La IA discriminativa clasifica/predice; La IA generativa crea nuevo contenido.",
            "La IA generativa sólo puede clasificar",
            "No hay diferencia"
          ],
          answer: 1,
          explain: "La detección de spam es discriminativa; La escritura ChatGPT y las imágenes de Midjourney son generativas.",
          topic: "fundamentos"
        },
        {
          q: "¿Qué aprende principalmente un modelo durante el preentrenamiento?",
          options: [
            "Solo registros de chat de usuario",
            "Patrones lingüísticos y conocimiento del mundo a partir de corpus generales masivos.",
            "Sólo píxeles de imagen",
            "Cada regla escrita por humanos."
          ],
          answer: 1,
          explain: "Los modelos grandes se entrenan previamente en texto enorme primero y luego se alinean mediante ajuste fino/RLHF para el comportamiento del producto.",
          topic: "fundamentos"
        },
        {
          q: "¿Qué hace la retropropagación?",
          options: [
            "Generar imágenes",
            "Actualizar los pesos de la red neuronal según el error",
            "Conéctate a internet",
            "Comprimir modelos"
          ],
          answer: 1,
          explain: "El algoritmo central para entrenar redes neuronales: los modelos aprenden ajustando los parámetros de los errores.",
          topic: "fundamentos"
        },
        {
          q: "¿En qué es especialmente buena una CNN (red neuronal convolucional)?",
          options: [
            "Sólo texto",
            "Imágenes y datos estructurados espacialmente.",
            "Sólo audio",
            "datos tabulares"
          ],
          answer: 1,
          explain: "Las convoluciones de CNN se adaptan al reconocimiento de imágenes; Los transformadores son más comunes en PNL y tareas multimodales.",
          topic: "fundamentos"
        },
        {
          q: "¿Cuál es una aplicación típica del aprendizaje no supervisado?",
          options: [
            "Clasificación de correo electrónico etiquetado",
            "Agrupación de segmentación de clientes",
            "Predicción del precio de la vivienda (etiquetada)",
            "Reconocimiento de dígitos escritos a mano (etiquetados)"
          ],
          answer: 1,
          explain: "El aprendizaje no supervisado encuentra estructura en datos sin etiquetar; la agrupación y la reducción de dimensionalidad son tareas comunes.",
          topic: "fundamentos"
        },
        {
          q: "¿ChatGPT es más adecuado que la búsqueda web normal?",
          options: [
            "Búsqueda de códigos bursátiles exactos",
            "Diálogo de varios turnos, reescritura, lluvia de ideas y generación de borradores.",
            "Reemplazo de todos los motores de búsqueda",
            "Haciendo solo pruebas de matemáticas"
          ],
          answer: 1,
          explain: "La IA conversacional sobresale en la creación y el análisis interactivos; Los datos precisos en tiempo real todavía necesitan herramientas de búsqueda.",
          topic: "aplicaciones"
        },
        {
          q: "¿Una de las principales fortalezas de Claude es?",
          options: [
            "Sólo generación de imágenes",
            "Contexto extenso y redacción refinada: ideal para documentos extensos",
            "Sólo codificación",
            "Sin nivel gratuito"
          ],
          answer: 1,
          explain: "Claude es conocido por su contexto de ~200K y su alineación de seguridad; Los artefactos pueden obtener una vista previa del código y los documentos.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cuál es una ventaja única de Géminis?",
          options: [
            "Integración profunda con la Búsqueda de Google, Gmail, Docs y el ecosistema de Google",
            "Operación solo local",
            "Sin soporte multimodal",
            "Sin apoyo chino"
          ],
          answer: 0,
          explain: "Los usuarios del ecosistema de Google pueden utilizar Gemini sin problemas, con búsqueda en tiempo real y capacidades multimodales.",
          topic: "aplicaciones"
        },
        {
          q: "¿Para qué escenario es mejor Kimi?",
          options: [
            "Respuestas cortas por SMS",
            "Análisis de documentos muy extensos (por ejemplo, libros completos, archivos PDF de gran tamaño)",
            "modelado 3D",
            "Desarrollo de controladores de hardware"
          ],
          answer: 1,
          explain: "Kimi es conocido por su contexto muy extenso, ideal para leer literatura y digerir materiales extensos.",
          topic: "aplicaciones"
        },
        {
          q: "¿Por qué DeepSeek resulta especialmente atractivo para los desarrolladores?",
          options: [
            "Solo dibujo",
            "Modelos de código abierto + precios de API muy bajos + razonamiento sólido",
            "Debes comprar una GPU",
            "Sin soporte de código"
          ],
          answer: 1,
          explain: "DeepSeek-R1 destaca en razonamiento; El costo de API es una pequeña fracción del de GPT-4.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cuál es la principal comodidad de Qwen para los usuarios domésticos?",
          options: [
            "Debe usar una VPN",
            "Fuerte optimización china, no se necesita VPN, integración del ecosistema Tongyi",
            "solo ingles",
            "Sin API"
          ],
          answer: 1,
          explain: "La serie Qwen de Alibaba tiene una fuerte capacidad china y vínculos con Tongyi Wanxiang, Lingma y productos relacionados.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cómo funciona el copiloto de GitHub?",
          options: [
            "Reemplaza el IDE",
            "Finalización en tiempo real y codificación asistida por chat dentro de VS Code y otros IDE",
            "Sólo pitón",
            "Se confirma automáticamente con Git"
          ],
          answer: 1,
          explain: "Copilot está profundamente integrado en los editores; La finalización de línea/bloque es el uso diario de mayor frecuencia.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cuál es la principal diferencia entre Cursor y VS Code normal?",
          options: [
            "Sólo HTML",
            "Nativo de IA: indexación de proyectos completos + codificación autónoma de múltiples archivos del agente",
            "Sin terminal",
            "No hay soporte para complementos"
          ],
          answer: 1,
          explain: "¿Qué enfatiza el modo Cascada de Windsurf?",
          topic: "aplicaciones"
        },
        {
          q: "¿Qué enfatiza el modo Cascada de Windsurf?",
          options: [
            "Completar solo una línea",
            "Un agente que comprende el código base y ejecuta tareas de varios pasos.",
            "Sólo Java",
            "Debe pagar para usar"
          ],
          answer: 1,
          explain: "Cascade es la capacidad del Agente de Codeium: el mismo espacio competitivo que Cursor Agent en los IDE de IA.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cuál es el factor de forma principal de Claude Code?",
          options: [
            "Agente de terminal con base de código profunda y operaciones Git",
            "Agente de terminal con base de código profunda y operaciones Git",
            "aplicación móvil",
            "Sólo chatear"
          ],
          answer: 1,
          explain: "Claude Code apunta a flujos de trabajo de línea de comandos, adecuados para refactorizaciones complejas y largas sesiones de codificación.",
          topic: "aplicaciones"
        },
        {
          q: "¿Para quién es mejor OpenAI Codex CLI?",
          options: [
            "Hacer solo diapositivas",
            "Suscriptores de OpenAI que ejecutan un agente de codificación en una terminal o en un entorno limitado en la nube",
            "Solo estudiantes de primaria",
            "No se necesita red"
          ],
          answer: 1,
          explain: "Codex CLI es el agente de codificación de línea de comandos oficial de OpenAI, incluido con ChatGPT Plus/Pro.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cuál es la característica principal de Aider?",
          options: [
            "De código cerrado y caro",
            "Código abierto, traiga su propia clave API, integración profunda de Git con confirmación automática",
            "Sólo Java",
            "Sin edición de múltiples archivos"
          ],
          answer: 1,
          explain: "Aider es una herramienta de programación de pares de terminales; cada edición se registra automáticamente en Git: usted controla el costo.",
          topic: "aplicaciones"
        },
        {
          q: "¿Para qué es mejor Bolt.new?",
          options: [
            "desarrollo del núcleo",
            "Los no programadores crean rápidamente prototipos de aplicaciones web ejecutables en lenguaje natural",
            "Entrenando modelos grandes",
            "Operaciones de base de datos"
          ],
          answer: 1,
          explain: "Bolt genera aplicaciones de pila completa en el navegador, ideal para la validación de MVP y la creación rápida de sitios.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cuál fue el principal punto de entrada de Midjourney?",
          options: [
            "Solo línea de comando",
            "Bot de Discord (ahora también es compatible con Web)",
            "Solo complemento de Excel",
            "SMS"
          ],
          answer: 1,
          explain: "Midjourney comenzó en Discord; La web también está disponible ahora; Las indicaciones en inglés suelen funcionar mejor.",
          topic: "manos a la obra"
        },
        {
          q: "¿Cuál es la ventaja de Stable Diffusion sobre los modelos cerrados?",
          options: [
            "Solo nube",
            "Código abierto, implementación local, modelos comunitarios enriquecidos y ecosistema ControlNet",
            "Siempre la peor calidad de imagen.",
            "Sin soporte LoRA"
          ],
          answer: 1,
          explain: "SD se ejecuta localmente; LoRA/ControlNet brinda a los usuarios control total sobre la tubería de generación.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cuál es el punto culminante de Flux en la generación de imágenes?",
          options: [
            "Sólo blanco y negro",
            "Alta calidad + representación de texto precisa + uso local/API",
            "Sólo vídeo",
            "Sin versión de código abierto"
          ],
          answer: 1,
          explain: "Flux de Black Forest Labs destaca en la representación de texto y la estructura humana.",
          topic: "aplicaciones"
        },
        {
          q: "¿Para qué se utiliza principalmente Suno?",
          options: [
            "Escribir código",
            "Generando canciones completas a partir de texto (voz y acompañamiento)",
            "Hacer diapositivas",
            "Formación LLM"
          ],
          answer: 1,
          explain: "Suno es una herramienta musical de IA: describe un estilo y obtén una pista completa.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cuál es la capacidad principal de ElevenLabs?",
          options: [
            "Generación de imágenes",
            "edición de vídeo",
            "edición de vídeo",
            "motor de búsqueda"
          ],
          answer: 1,
          explain: "1 a 3 minutos de voz seca pueden clonar un tono; admite doblaje multilingüe y producción de podcasts.",
          topic: "manos a la obra"
        },
        {
          q: "¿En qué se diferencia Perplexity de la búsqueda tradicional de Google?",
          options: [
            "Respuestas directas con fuentes citadas.",
            "Respuestas directas con fuentes citadas.",
            "No puedo acceder a la web",
            "Sólo búsqueda de imágenes"
          ],
          answer: 1,
          explain: "Perplexity es un motor de búsqueda de inteligencia artificial con citas, bueno para una investigación rápida pero aún así para verificar hechos.",
          topic: "aplicaciones"
        },
        {
          q: "¿Qué es la función \"Descripción general de audio\" de NotebookLM?",
          options: [
            "Generar código",
            "Convierta los documentos cargados en audio estilo podcast de dos hosts con IA",
            "Envío automático de correo electrónico",
            "Modelos de trenes"
          ],
          answer: 1,
          explain: "NotebookLM puede convertir archivos PDF/notas en resúmenes de podcasts que se pueden escuchar, ideal para estudiar literatura.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cuál es la ventaja de Metaso AI Search para los usuarios chinos?",
          options: [
            "Debe usar una VPN",
            "Sin publicidad, con citas, académico/podcast y otros modos de búsqueda en chino",
            "solo ingles",
            "Sin nivel gratuito"
          ],
          answer: 1,
          explain: "Metaso es una búsqueda nacional de IA con una sólida experiencia en investigación china, accesible en China.",
          topic: "aplicaciones"
        },
        {
          q: "Reemplazar Photoshop",
          options: [
            "Reemplazar Photoshop",
            "Escribir, resumir y traducir notas internas y flujos de trabajo de bases de datos.",
            "Sólo chatear",
            "Sin colaboración"
          ],
          answer: 1,
          explain: "Notion AI está profundamente ligada a las notas y es adecuada para documentos de equipo y gestión del conocimiento.",
          topic: "aplicaciones"
        },
        {
          q: "¿Qué es mejor Gamma para completar rápidamente?",
          options: [
            "compilación del núcleo",
            "Generar presentaciones/documentos pulidos a partir de un esquema",
            "animación 3D",
            "Diseño de hardware"
          ],
          answer: 1,
          explain: "Ingrese un tema o esquema para obtener presentaciones con estilo de diapositivas, muy eficientes para informes de último momento.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cuál es el posicionamiento de OpenClaw?",
          options: [
            "editor de imágenes",
            "Puerta de enlace del agente AI de código abierto: Cron, Webhook, push multicanal",
            "Reproductor de música",
            "Navegador"
          ],
          answer: 1,
          explain: "OpenClaw permite a los agentes ejecutar tareas programadas y enviarlas a Telegram/Slack/Feishu y más.",
          topic: "agente"
        },
        {
          q: "¿Para qué se utiliza principalmente Dify?",
          options: [
            "edición de vídeo",
            "Creación visual de aplicaciones LLM, bases de conocimientos RAG y flujos de trabajo",
            "Minería de criptomonedas",
            "Controladores de hardware"
          ],
          answer: 1,
          explain: "Dify es una plataforma de agente/aplicación de código abierto: bots de base de conocimientos empresariales y autohospedados.",
          topic: "agente"
        },
        {
          q: "¿Cuál es el escenario central de Coze?",
          options: [
            "Entrenamiento de clústeres de GPU",
            "Creación y publicación de bots sin código en Feishu/WeChat y otras plataformas",
            "solo 3D",
            "Reemplazar el sistema operativo"
          ],
          answer: 1,
          explain: "ByteDance Coze permite a los no desarrolladores arrastrar y soltar Agent Bots, algo que comienza rápidamente en China.",
          topic: "agente"
        },
        {
          q: "¿Cuál es el valor de n8n?",
          options: [
            "Solo dibujo",
            "Conecte cientos de servicios y organice flujos de trabajo de automatización (incluidos nodos de IA)",
            "Reemplazar palabra",
            "Enviar solo correo electrónico"
          ],
          answer: 1,
          explain: "n8n es una plataforma de automatización abierta: puede integrar LLM en procesos comerciales.",
          topic: "agente"
        },
        {
          q: "¿Para qué son adecuados los agentes generales como Manus?",
          options: [
            "Tareas de varios pasos de un extremo a otro: investigación, informes, navegación web, etc.",
            "Tareas de varios pasos de un extremo a otro: investigación, informes, navegación web, etc.",
            "Reemplazar a los abogados en los tribunales",
            "No se necesita revisión humana"
          ],
          answer: 1,
          explain: "Manus enfatiza la planificación autónoma para tareas largas: los resultados aún necesitan revisión humana.",
          topic: "agente"
        },
        {
          q: "¿Qué problema central resuelve el protocolo MCP?",
          options: [
            "Acelerar las GPU",
            "Unifique la forma en que la IA se conecta con herramientas y fuentes de datos externas",
            "generar musica",
            "Reemplazar HTTP"
          ],
          answer: 1,
          explain: "Model Context Protocol permite a Claude, Cursor y otros conectarse a GitHub, bases de datos, etc. de forma estándar.",
          topic: "conocimiento"
        },
        {
          q: "¿Qué le permiten hacer las llamadas a funciones a un LLM?",
          options: [
            "Sólo chatear",
            "Elija y llame a API/funciones predefinidas según la intención",
            "Uso gratuito ilimitado",
            "No se necesita red"
          ],
          answer: 1,
          explain: "La llamada a funciones es la base para que los agentes llamen al tiempo, calculadoras, bases de datos y más.",
          topic: "conocimiento"
        },
        {
          q: "¿Cuál es el papel de una base de datos vectorial en RAG?",
          options: [
            "Modelos de trenes",
            "Almacenar incrustaciones y ejecutar recuperación de similitudes semánticas",
            "Enviar correo electrónico",
            "Renderizar páginas web"
          ],
          answer: 1,
          explain: "En caso de una pregunta de un usuario, primero recupere los fragmentos de documentos más relevantes y luego deje que el LLM genere la respuesta.",
          topic: "fundamentos"
        },
        {
          q: "¿Cuál es el enfoque más seguro al utilizar IA en archivos confidenciales de la empresa?",
          options: [
            "Sube libremente a cualquier nube pública",
            "Consultar políticas de privacidad; utilice el nivel empresarial/implementación local/desidentificación para datos confidenciales",
            "enviar a cualquiera",
            "Publicar capturas de pantalla en las redes sociales"
          ],
          answer: 1,
          explain: "Los datos confidenciales necesitan acuerdos empresariales o privatización; La capacitación interna de este sitio también enfatiza el cumplimiento de la seguridad.",
          topic: "descripción general de ai"
        },
        {
          q: "¿Qué debería hacer cuando la IA dé una respuesta objetiva?",
          options: [
            "Cítalo directamente en la publicación.",
            "Verifique las fuentes, especialmente números, fechas y nombres.",
            "Nunca confíes en ello",
            "pregunta solo una vez"
          ],
          answer: 1,
          explain: "La alucinación es un límite conocido de LLM; Incluso la perplejidad con las citas necesita una segunda comprobación de los hechos clave.",
          topic: "descripción general de ai"
        },
        {
          q: "¿Cuál es el flujo correcto para iterar mensajes?",
          options: [
            "Escribe una vez y nunca cambies.",
            "Borrador → revisar el resultado → agregar restricciones/ejemplos → intentarlo de nuevo",
            "Eliminar todos los requisitos de formato",
            "Eliminar todos los requisitos de formato"
          ],
          answer: 1,
          explain: "La ingeniería rápida es una ciencia experimental; El laboratorio rápido de este sitio es para comparar iteraciones.",
          topic: "laboratorio rápido"
        },
        {
          q: "¿Cuál es el beneficio de especificar el formato de salida en un mensaje?",
          options: [
            "Fichas de residuos",
            "Los resultados pueden ir directamente a hojas de cálculo/código/informes con menos limpieza",
            "siempre mas lento",
            "El modelo se negará."
          ],
          answer: 1,
          explain: "Solicitar JSON, tablas Markdown o listas con viñetas mejora enormemente la usabilidad.",
          topic: "laboratorio rápido"
        },
        {
          q: "¿Cuál es la forma recomendada de analizar datos de Excel con ChatGPT?",
          options: [
            "Captura de pantalla de una tabla borrosa",
            "Cargue el archivo o pegue datos estructurados y especifique métricas para calcular",
            "Sólo pregunta \"analiza esto\"",
            "No se pueden analizar datos"
          ],
          answer: 1,
          explain: "Este sitio es práctico: proporcione datos y preguntas claros; utilice el intérprete de código para gráficos cuando sea necesario.",
          topic: "manos a la obra"
        },
        {
          q: "¿Qué debe tener en cuenta al utilizar Perplexity para la investigación de la competencia?",
          options: [
            "Trate las conclusiones como consejos de inversión.",
            "Verifique las fuentes y fechas citadas; verificación cruzada de datos clave",
            "No es necesario indicar áreas de enfoque",
            "Sólo pregunte \"analizar a los competidores\""
          ],
          answer: 1,
          explain: "Práctica de este sitio: la fortaleza de Perplexity son las fuentes verificables, pero los precios, etc. aún necesitan verificación oficial del sitio.",
          topic: "manos a la obra"
        },
        {
          q: "¿Cuál es el flujo recomendado para leer artículos con NotebookLM?",
          options: [
            "Sube y nunca hagas preguntas",
            "Cargue PDF → haga preguntas detalladas → use funciones de resumen/podcast para reforzar",
            "un solo papel",
            "Reemplazar la revisión por pares del asesor"
          ],
          answer: 1,
          explain: "Después de la carga puedes chatear; La descripción general de audio es excelente para revisar puntos clave durante el viaje.",
          topic: "manos a la obra"
        },
        {
          q: "¿Qué debes tener en cuenta al generar retratos en Midjourney?",
          options: [
            "Utilice nombres de celebridades libremente",
            "Evite nombres de celebridades reales no autorizados; seguir la política de contenido de la plataforma",
            "Siempre ilegal",
            "Sólo paisajes"
          ],
          answer: 1,
          explain: "¿Cuál es el requisito previo de cumplimiento para los servicios de clonación de voz?",
          topic: "manos a la obra"
        },
        {
          q: "¿Cuál es el requisito previo de cumplimiento para los servicios de clonación de voz?",
          options: [
            "Descarga audio de influencer y úsalo",
            "Clona tu propia voz o voces únicamente con autorización escrita",
            "Cuanto más ruidoso, mejor",
            "No se necesita grabación"
          ],
          answer: 1,
          explain: "Fish Audio/ElevenLabs requieren muestras de voz secas que tengas derecho a usar.",
          topic: "manos a la obra"
        },
        {
          q: "En un trabajo cron de OpenClaw, ¿qué hace --tz \"Asia/Shanghai\"?",
          options: [
            "Establecer idioma",
            "Programe el trabajo para que se active en la zona horaria de Shanghai",
            "Cifrar mensajes",
            "Elige el modelo de IA"
          ],
          answer: 1,
          explain: "Cron necesita una zona horaria explícita; de lo contrario, es posible que las 8:30 del día laborable no coincidan con la hora local.",
          topic: "manos a la obra"
        },
        {
          q: "Al cambiar por lotes el modo oscuro en Windsurf, ¿qué debería pedirle al agente que haga primero?",
          options: [
            "Cambiar todo sin confirmación",
            "Enumere los archivos que se modificarán y luego ejecútelos después de la confirmación",
            "Eliminar el proyecto",
            "Práctica de este sitio: Primero se planifica en cascada y luego se ejecuta; es más controlable que \"cambiar todo\"."
          ],
          answer: 1,
          explain: "Práctica de este sitio: Primero se planifica en cascada y luego se ejecuta; es más controlable que \"cambiar todo\".",
          topic: "manos a la obra"
        },
        {
          q: "Al hacer rápidamente una presentación con Gamma, ¿cuál es la mejor entrada?",
          options: [
            "Blanco",
            "Esquema claro: título por diapositiva + 3 viñetas",
            "emojis aleatorios",
            "500 páginas de texto completo"
          ],
          answer: 1,
          explain: "Un esquema estructurado ayuda a Gamma a producir diapositivas lógicas y luego afinar las imágenes.",
          topic: "manos a la obra"
        },
        {
          q: "¿Qué hace ControlNet en difusión estable?",
          options: [
            "Acelerar el entrenamiento",
            "Utilice bordes/poses y otras condiciones para controlar con precisión la composición.",
            "Sólo gradación de color",
            "Reemplazar LoRA"
          ],
          answer: 1,
          explain: "ControlNet permite a los usuarios limitar la salida con bocetos, mapas de poses, etc., una extensión central del ecosistema SD.",
          topic: "conocimiento"
        },
        {
          q: "¿Para qué se utiliza comúnmente LoRA en la generación de imágenes?",
          options: [
            "Comprimir vídeo",
            "Ajuste ligero de estilos/personajes/aspectos de productos específicos",
            "Capacitar LLM",
            "Enviar correo electrónico"
          ],
          answer: 1,
          explain: "LoRA es un pequeño adaptador que puede apilar en un modelo base para obtener imágenes de marca consistentes.",
          topic: "conocimiento"
        },
        {
          q: "¿Cuál es la principal limitación actual de los modelos de vídeo clase Sora?",
          options: [
            "Reemplaza completamente la acción en vivo",
            "Los detalles físicos pueden estar equivocados; necesita evaluación humana y revisión de cumplimiento",
            "solo 1 segundo",
            "Ilimitado gratis"
          ],
          answer: 1,
          explain: "Los vídeos con IA avanzan rápidamente, pero todavía es necesario revisar la verosimilitud física, los derechos de autor y las reglas de la plataforma.",
          topic: "aplicaciones"
        },
        {
          q: "¿Para qué es mejor Microsoft Copilot en Office?",
          options: [
            "Reinstalar el sistema operativo",
            "Genere, resuma y analice datos de documentos en Word/Excel/PPT",
            "Reemplazar servidores de Outlook",
            "Solo dibujo"
          ],
          answer: 1,
          explain: "Los suscriptores de M365 pueden invocar Copilot en la barra lateral de Office para documentos cotidianos.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cuál es el principal posicionamiento de Zcode?",
          options: [
            "Reproductor de música",
            "Entorno de desarrollo Agentic impulsado por Zhipu GLM que admite tareas a largo plazo",
            "Sólo chatear",
            "solo ingles"
          ],
          answer: 1,
          explain: "Zcode se dirige a desarrolladores nacionales: soporte de escritorio/remoto y Feishu/WeChat Bot.",
          topic: "aplicaciones"
        },
        {
          q: "¿Qué atrae a los desarrolladores a Gemini CLI?",
          options: [
            "Debes comprar una GPU",
            "Uso de terminal + cuenta de Google + cuota gratuita relativamente generosa",
            "Sin operaciones de archivos",
            "Sin operaciones de archivos"
          ],
          answer: 1,
          explain: "Gemini CLI es de código abierto; la cuota de nivel gratuito es competitiva entre las herramientas CLI.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cuál es la relación entre Cline y Cursor?",
          options: [
            "exactamente lo mismo",
            "Cline es una extensión de VS Code que puede usar múltiples API, sin necesidad de cambiar de editor",
            "Cline solo dibuja",
            "Cline es un motor de búsqueda."
          ],
          answer: 1,
          explain: "Cline agrega la capacidad de Agente al Código VS existente, lo cual es bueno para los usuarios que eligen sus propios modelos.",
          topic: "aplicaciones"
        },
        {
          q: "¿Qué IDE admite Continuar.dev?",
          options: [
            "solo vim",
            "VS Code y la suite JetBrains completa",
            "Sólo navegador",
            "Solo código X"
          ],
          answer: 1,
          explain: "Continuar es un asistente abierto; Los equipos pueden compartir config.yaml para unificar la configuración del modelo.",
          topic: "aplicaciones"
        },
        {
          q: "¿Para quién es especialmente adecuado Amazon Q Developer?",
          options: [
            "Sólo ilustración",
            "Desarrollo en la nube de AWS, integración de documentos SDK y cumplimiento empresarial",
            "Sólo móvil",
            "Reemplazar hardware"
          ],
          answer: 1,
          explain: "Q Developer integra profundamente el conocimiento de AWS: complemento IDE y CLI.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cuál es el principal diferenciador de Grok?",
          options: [
            "Sin red",
            "Modos de alimentación en tiempo real X (Twitter) y DeepSearch",
            "Sólo codificación",
            "Requerido en China"
          ],
          answer: 1,
          explain: "Grok se integra con X, excelente para rastrear dinámicas sociales y de noticias en vivo.",
          topic: "aplicaciones"
        },
        {
          q: "¿Qué comodidades ofrece Doubao a los usuarios domésticos?",
          options: [
            "Debe usar una VPN",
            "Diálogo natural chino, cuota libre, integración del ecosistema Douyin/Feishu",
            "solo ingles",
            "Sin multimodal"
          ],
          answer: 1,
          explain: "Doubao es el asistente de ByteDance: gran base de usuarios nacionales y fácil acceso.",
          topic: "aplicaciones"
        },
        {
          q: "¿Qué recurso NO está integrado con ERNIE Bot?",
          options: [
            "Búsqueda de Baidu y Wenku",
            "Una base de datos privada global completamente fuera de línea",
            "Optimización de la escritura china",
            "Capacidades multimodales"
          ],
          answer: 1,
          explain: "La fortaleza de ERNIE Bot son los corpus chinos y los recursos nacionales como Baidu Search.",
          topic: "aplicaciones"
        },
        {
          q: "¿Qué genera principalmente Kling AI?",
          options: [
            "Sólo música",
            "Texto a vídeo e imagen a vídeo, acceso cómodo en China",
            "Sólo código",
            "archivos de impresión 3D"
          ],
          answer: 1,
          explain: "Kuaishou Kling lidera la generación de vídeos nacionales con cuota diaria gratuita.",
          topic: "aplicaciones"
        },
        {
          q: "Cálculo de hoja de cálculo",
          options: [
            "Cálculo de hoja de cálculo",
            "Flujos de trabajo profesionales de generación y edición de videos.",
            "Cliente de correo electrónico",
            "Controladores de hardware"
          ],
          answer: 1,
          explain: "Runway ofrece generación de video Gen-3 además de edición, mateado y otras funciones profesionales.",
          topic: "aplicaciones"
        },
        {
          q: "¿Cómo se compara Fish Audio con ElevenLabs para usuarios domésticos?",
          options: [
            "Se requiere VPN y solo en inglés",
            "Pronunciación china natural, fácil acceso, ideal para doblaje nacional",
            "No se puede clonar",
            "Fish Audio es una plataforma de voz nacional; vale la pena probarla primero en escenarios chinos."
          ],
          answer: 1,
          explain: "Fish Audio es una plataforma de voz nacional; vale la pena probarla primero en escenarios chinos.",
          topic: "aplicaciones"
        },
        {
          q: "¿Por qué \"primero la cartera y luego los precios\" al monetizar con IA?",
          options: [
            "Requisito legal",
            "Los clientes necesitan muestras entregables verificables antes de pagar",
            "Sin sentido",
            "debe ser gratis"
          ],
          answer: 1,
          explain: "La guía de monetización de este sitio: demuestre su capacidad con un caso de demostración y luego analice el precio y los paquetes.",
          topic: "monetizar"
        },
        {
          q: "Al aceptar contratos de Bot de base de conocimiento empresarial, ¿qué debería aclarar el acuerdo?",
          options: [
            "Sólo acuerdo verbal",
            "Propiedad de los datos, frecuencia de actualización, exenciones de responsabilidad y alcance del mantenimiento",
            "Revisiones gratuitas ilimitadas",
            "Garantizar el 100% de precisión"
          ],
          answer: 1,
          explain: "Las respuestas del bot deben indicar \"solo como referencia\"; Los datos y las claves pertenecen al cliente: escriba claramente el alcance del mantenimiento.",
          topic: "monetizar"
        }
      ]
  });
})();
