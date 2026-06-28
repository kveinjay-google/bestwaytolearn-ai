/* ES overlays — terms */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('es', {
    termCategories: {
        "基础概念": "Modelos y Arquitectura",
        "模型与架构": "Modelos y Arquitectura",
        "训练与调优": "Agentes y habilidades",
        "提示与推理": "Indicaciones e inferencias",
        "智能体与技能": "Agentes y habilidades",
        "数据与知识": "Datos y conocimiento",
        "多模态与生成": "Multimodal y Generación",
        "工程与部署": "Ingeniería e implementación",
        "伦理与安全": "Ética y seguridad"
      },
      terms: [
        {
          def: "Buscadores, asistentes de voz, conducción autónoma.",
          example: "Buscadores, asistentes de voz, conducción autónoma."
        },
        {
          def: "Una forma para que las computadoras aprendan patrones a partir de datos automáticamente sin reglas escritas a mano para cada caso; el camino principal para construir la IA.",
          example: "Aprendizaje automático que utiliza redes neuronales multicapa para extraer automáticamente representaciones de características jerárquicas de los datos."
        },
        {
          def: "Aprendizaje automático que utiliza redes neuronales multicapa para extraer automáticamente representaciones de características jerárquicas de los datos.",
          example: "Reconocimiento facial, reconocimiento de voz, modelos de lenguaje grandes."
        },
        {
          def: "IA que puede manejar cualquier tarea intelectual que pueda realizar un humano, como lo hacen los humanos. Aún no logrado; un objetivo de investigación a largo plazo.",
          example: "Un asistente de IA polivalente que puede aprender por sí solo cualquier habilidad nueva."
        },
        {
          def: "IA que sólo puede realizar tareas específicas; el tipo de todos los sistemas de IA implementados en la actualidad.",
          example: "AlphaGo sólo juega Go; ChatGPT se encarga principalmente de tareas lingüísticas."
        },
        {
          def: "IA que crea contenido nuevo (texto, imágenes, audio, video, código); el foco es la generación más que la clasificación.",
          example: "ChatGPT para escritura, Midjourney para imágenes, Suno para música."
        },
        {
          def: "Una rama de la IA que permite a las computadoras comprender, generar y procesar el lenguaje humano.",
          example: "Traducción automática, atención al cliente inteligente, resumen de textos."
        },
        {
          def: "Tecnología que permite a las computadoras \"ver\" e interpretar imágenes y videos, incluida la detección, clasificación, segmentación y comprensión de escenas.",
          example: "Desbloqueo facial, imágenes médicas, percepción en conducción autónoma."
        },
        {
          def: "Un conjunto preciso de pasos y reglas para resolver un problema. En IA, los algoritmos son métodos para aprender a partir de datos o razonamiento.",
          example: "Descenso de gradiente, retropropagación, mecanismos de atención."
        },
        {
          def: "GPT-4 es un modelo; la Difusión Estable que descargas también es un modelo.",
          example: "GPT-4 es un modelo; la Difusión Estable que descargas también es un modelo."
        },
        {
          def: "Valores de peso que se pueden aprender dentro de un modelo. Más parámetros generalmente significan una mayor capacidad, pero un mayor costo de capacitación e inferencia.",
          example: "GPT-4 tiene ~1,8 billones de parámetros; DeepSeek-R1 tiene ~671 mil millones."
        },
        {
          def: "Una red neuronal muy grande entrenada en corpus de texto masivos; aprende a comprender y generar el lenguaje prediciendo el siguiente token.",
          example: "GPT-4, Claude, Géminis, Qwen, DeepSeek."
        },
        {
          def: "Gemma 2B, Phi-3 Mini, asistentes de voz en el dispositivo.",
          example: "Gemma 2B, Phi-3 Mini, asistentes de voz en el dispositivo."
        },
        {
          def: "La familia de grandes modelos de lenguaje de OpenAI basada en el decodificador Transformer; Pre-entrenado y luego afinado.",
          example: "GPT-3.5, GPT-4 y GPT-4o potencian ChatGPT."
        },
        {
          def: "El modelo bidireccional de comprensión del lenguaje de Google; fuerte en clasificación y control de calidad, débil en generación de formato largo.",
          example: "Clasificación de búsqueda, análisis de sentimiento, reconocimiento de entidades nombradas."
        },
        {
          def: "Una arquitectura de red neuronal introducida en 2017, centrada en la autoatención; la base de los LLM modernos.",
          example: "GPT, Claude, Gemini y LLaMA utilizan esta arquitectura."
        },
        {
          def: "Permite que un modelo se centre dinámicamente en las partes más relevantes de la entrada y capture dependencias de largo alcance.",
          example: "Alineación de larga distancia en traducción; centrarse en palabras clave mientras lee."
        },
        {
          def: "Cada elemento de una secuencia calcula la relevancia con todos los demás elementos; el componente central de Transformers.",
          example: "Comprender a qué sustantivo se refiere \"eso\"."
        },
        {
          def: "Una red neuronal diseñada para imágenes; Las capas convolucionales extraen características jerárquicas espaciales.",
          example: "Clasificación de imágenes, detección de objetos, imágenes médicas."
        },
        {
          def: "Una red para datos secuenciales con memoria; lento de entrenar, difícil de paralelizar, reemplazado en gran medida por Transformers.",
          example: "Traducción automática temprana, predicción de series temporales de acciones."
        },
        {
          def: "Un generador y un discriminador se entrenan en forma adversa para producir imágenes realistas; una técnica convencional de generación temprana de imágenes.",
          example: "Intercambio de caras, transferencia de estilo, restauración de fotografías antiguas."
        },
        {
          def: "Genera contenido claro eliminando progresivamente el ruido aleatorio; el enfoque dominante para la generación de imágenes y videos en la actualidad.",
          example: "Difusión Estable, Mitad del Viaje, DALL·E 3."
        },
        {
          def: "Un modelo computacional de neuronas interconectadas en capas; el componente básico del aprendizaje profundo.",
          example: "La estructura subyacente de todos los LLM, CNN y GAN."
        },
        {
          def: "Capacitación sobre datos generales a gran escala para desarrollar capacidades fundamentales; la primera etapa para todos los LLM.",
          example: "GPT-4 preentrenado con billones de tokens de texto."
        },
        {
          def: "Entrenar aún más un modelo previamente entrenado con datos específicos de dominio de alta calidad para que sobresalga en una tarea particular.",
          example: "Ajustar un conjunto de datos de diálogo médico para convertirlo en un asistente especializado en IA."
        },
        {
          def: "Los humanos clasifican múltiples respuestas modelo; El aprendizaje por refuerzo optimiza la calidad y la seguridad de los resultados.",
          example: "ChatGPT es más amigable y seguro que GPT-3; RLHF es clave."
        },
        {
          def: "Ajuste eficiente: entrene solo un pequeño conjunto de parámetros del adaptador de bajo rango sin cambiar los pesos originales: bajo costo y rápido.",
          example: "Agregar un estilo artístico específico a Stable Diffusion; ajuste empresarial privado."
        },
        {
          def: "Comprima las capacidades de un modelo de profesor grande en un modelo de estudiante más pequeño, manteniendo el rendimiento y reduciendo la computación.",
          example: "DeepSeek-R1 destilado en modelos de razonamiento más pequeños y más rápidos."
        },
        {
          def: "El modelo funciona excelentemente con datos de entrenamiento, pero deficiente con datos nuevos, como memorizar sin comprender.",
          example: "Recordar las respuestas del entrenamiento pero fallar en nuevas preguntas."
        },
        {
          def: "El modelo es demasiado simple para ajustarse incluso a los datos de entrenamiento; aumentar la complejidad o mejorar las funciones.",
          example: "Ajustar una línea recta a datos curvos."
        },
        {
          def: "Algoritmo de entrenamiento central para redes neuronales: calcula gradientes capa por capa desde la salida hasta la entrada y actualiza los pesos.",
          example: "Cada iteración de entrenamiento utiliza retropropagación."
        },
        {
          def: "Mide la brecha entre las predicciones y la verdad fundamental; el entrenamiento minimiza esto.",
          example: "Entropía cruzada para clasificación; error cuadrático medio para la regresión."
        },
        {
          def: "Un hiperparámetro que controla cuántos pesos se actualizan en cada paso. Demasiado alto y la formación diverge; demasiado bajo y es demasiado lento.",
          example: "Valores comunes 1e-4 a 1e-5, ajustados por tarea."
        },
        {
          def: "Actualiza los parámetros opuestos al gradiente de pérdida para que la pérdida disminuya paso a paso.",
          example: "Caminando cuesta abajo en la dirección más empinada en cada paso."
        },
        {
          def: "La unidad más pequeña de texto que procesa la IA. ~1–2 fichas por carácter chino; ~1–3 por palabra en inglés.",
          example: "La \"inteligencia artificial\" equivale a entre 2 y 4 fichas; Contexto de 128.000 ≈ ~100.000 caracteres chinos."
        },
        {
          def: "La instrucción que envías a la IA. Un buen mensaje = rol + tarea + contexto + formato + restricciones.",
          example: "\"Usted es un Primer Ministro de alto rango; escriba un PRD para el siguiente requisito...\""
        },
        {
          def: "Las técnicas y métodos para diseñar y optimizar indicaciones para obtener resultados de IA de alta calidad.",
          example: "Números máximos de tokens que el modelo puede manejar en una sola pasada; más allá de eso, el contenido se trunca u olvida."
        },
        {
          def: "Números máximos de tokens que el modelo puede manejar en una sola pasada; más allá de eso, el contenido se trunca u olvida.",
          example: "Claude 200K, Kimi 2M caracteres, GPT-4o 128K."
        },
        {
          def: "Controla la aleatoriedad de la salida. Bajo = preciso y estable; alto = creativo y variado.",
          example: "0,1 para código, 0,8 para historias."
        },
        {
          def: "Top-p=0,9 significa elegir entre tokens que cubren el 90% de probabilidad acumulada.",
          example: "Top-p=0,9 significa elegir entre tokens que cubren el 90% de probabilidad acumulada."
        },
        {
          def: "El modelo genera con confianza contenido que suena plausible pero incorrecto, una limitación conocida del LLM.",
          example: "Inventar citas en papel falsas o fechas históricas incorrectas."
        },
        {
          def: "Usar un modelo entrenado sobre nuevos insumos para producir resultados: lo opuesto a la capacitación.",
          example: "Hacer una pregunta a ChatGPT y obtener una respuesta es una inferencia."
        },
        {
          def: "El modelo completa una tarea únicamente con instrucciones, sin ejemplos.",
          example: "Diga \"traducir al inglés\" y se traducirá sin ejemplos."
        },
        {
          def: "Proporcione algunos ejemplos (1 a 5) en la indicación para que el modelo aprenda rápidamente el formato de la tarea.",
          example: "Proporcione 2 pares de entrada-salida y la IA manejará las nuevas entradas de la misma manera."
        },
        {
          def: "Haga que la IA muestre el razonamiento paso a paso; mejora enormemente la precisión en matemáticas, lógica y otras tareas complejas.",
          example: "\"Analice paso a paso: 3 personas terminan en 5 días. ¿Cuántos días para 6 personas?\""
        },
        {
          def: "Un sistema de inteligencia artificial que puede planificar de forma autónoma, solicitar herramientas y ejecutar tareas de varios pasos, evolucionando de la conversación a la acción.",
          example: "Navegue por la web, escriba e implemente código, envíe informes por correo electrónico."
        },
        {
          def: "Las habilidades del cursor enseñan a la IA a leer/escribir xlsx; Claude Guía de habilidades para el manejo de documentos; workctl Habilidades llamadas herramientas comerciales.",
          example: "Las habilidades del cursor enseñan a la IA a leer/escribir xlsx; Claude Guía de habilidades para el manejo de documentos; workctl Habilidades llamadas herramientas comerciales."
        },
        {
          def: "Un protocolo abierto de Anthropic que estandariza cómo los modelos de IA se conectan a herramientas y fuentes de datos externas.",
          example: "La IA se conecta a GitHub, bases de datos y sistemas de archivos a través de MCP."
        },
        {
          def: "El LLM selecciona e invoca funciones/API predefinidas según la intención del usuario: la base de los Agentes.",
          example: "La IA llama a una API meteorológica para la temperatura o a una calculadora para las matemáticas."
        },
        {
          def: "El modelo llama a herramientas externas (búsqueda, ejecución de código, bases de datos, etc.) para hacer lo que no puede hacer directamente.",
          example: "ChatGPT navegando por la web; Cursor ejecutando comandos de terminal."
        },
        {
          def: "Primero recupere documentos relevantes de una base de conocimientos y luego haga que la IA responda basándose en ese material, lo que reduce en gran medida las alucinaciones.",
          example: "Cargue un manual de la empresa y la IA responderá a las preguntas de los empleados."
        },
        {
          def: "Un proceso automatizado que encadena múltiples pasos de IA o llamadas de herramientas para tareas de un extremo a otro.",
          example: "Raspe una página → resumir → traducir → enviar un correo electrónico: completamente automatizado."
        },
        {
          def: "Programar y coordinar múltiples modelos, agentes o herramientas para trabajar juntos de manera lógica.",
          example: "Un agente principal asigna tareas a subagentes de redacción, búsqueda y codificación."
        },
        {
          def: "Múltiples agentes de IA colaboran en tareas complejas con funciones y comunicación distintas.",
          example: "Empresa simulada: Agente PM + Agente ingeniero + Agente QA construyendo juntos."
        },
        {
          def: "Módulos oficiales u de terceros que amplían un producto de IA con herramientas y capacidades adicionales.",
          example: "Tienda de complementos ChatGPT, conectores Claude, extensiones de navegador."
        },
        {
          def: "Un Agente que establece objetivos, planifica pasos, ejecuta acciones y se autocorrige con una mínima intervención humana.",
          example: "Modo AutoGPT, Devin, Cursor Agent que completa las tareas de codificación automáticamente."
        },
        {
          def: "Convierte texto, imágenes, etc. en vectores de alta dimensión; el contenido semánticamente similar tiene vectores más cercanos.",
          example: "Las incrustaciones de \"gato\" y \"gatito\" son muy parecidas."
        },
        {
          def: "Almacena y recupera vectores de alta dimensión con búsqueda de similitud semántica, un componente central de RAG.",
          example: "Piña, Milvus, Chroma, Weaviate."
        },
        {
          def: "Busque por significado en lugar de por concordancia de palabras clave; entiende sinónimos e intención.",
          example: "Al buscar \"fruta\" también se puede encontrar contenido de \"manzana\"."
        },
        {
          def: "Divida documentos largos en segmentos de tamaño adecuado para incrustarlos y recuperarlos, un paso clave del preprocesamiento de RAG.",
          example: "Un PDF de 100 páginas dividido en fragmentos de ~500 caracteres."
        },
        {
          def: "Conocimiento estructurado o no estructurado para la recuperación y citación de IA para mejorar la precisión de las respuestas.",
          example: "Wiki de la empresa, documentos de productos y preguntas frecuentes integradas en el soporte de IA."
        },
        {
          def: "Entrene con datos etiquetados para aprender asignaciones de entrada a salida.",
          example: "Etiquete imágenes de perros y gatos para entrenar a un clasificador."
        },
        {
          def: "Utilice datos sin etiquetar para que el modelo descubra estructuras y patrones ocultos.",
          example: "Segmentación de clientes, detección de anomalías, agrupamiento de temas."
        },
        {
          def: "Aplicar el conocimiento aprendido en una tarea a una tarea relacionada, reduciendo los datos necesarios para la nueva tarea.",
          example: "Ajuste un modelo previamente entrenado en ImageNet para imágenes médicas."
        },
        {
          def: "Agregar etiquetas o metadatos a los datos sin procesar, un requisito previo para el aprendizaje supervisado, que a menudo se realiza manualmente.",
          example: "Cuadros delimitadores de objetos en imágenes; etiquetas de sentimiento en el texto."
        },
        {
          def: "Datos organizados para entrenar o evaluar modelos de IA; La calidad afecta directamente al rendimiento.",
          example: "ImageNet (imágenes), Common Crawl (texto), SQuAD (QA)."
        },
        {
          def: "Información útil extraída de datos sin procesar de los que aprende el modelo.",
          example: "Para la predicción del precio de la vivienda: el área, la ubicación y la edad son características."
        },
        {
          def: "Un modelo de IA que maneja texto, imágenes, audio, video y otras modalidades juntas.",
          example: "GPT-4o que describe imágenes; Géminis analizando vídeo."
        },
        {
          def: "IA que genera imágenes a partir de descripciones de texto.",
          example: "Mitad del viaje, DALL·E 3, Difusión estable."
        },
        {
          def: "IA que genera vídeo a partir de texto o imágenes.",
          example: "Kling AI, Pista Gen-3, Sora."
        },
        {
          def: "Convierte texto en voz con sonido natural.",
          example: "Convierte automáticamente el habla humana en texto."
        },
        {
          def: "Convierte automáticamente el habla humana en texto.",
          example: "Dictado Siri, transcripción de reuniones, Whisper."
        },
        {
          def: "Analiza el contenido de la imagen y produce descripciones de texto o responde preguntas sobre imágenes.",
          example: "Preguntas y respuestas sobre visión GPT-4o, resolución de problemas fotográficos, informes de imágenes médicas."
        },
        {
          def: "Un modelo generativo que aprende representaciones comprimidas; Puede generar muestras o editar imágenes.",
          example: "Edición de atributos faciales, interpolación de espacio latente."
        },
        {
          def: "Un gran modelo general previamente entrenado con datos diversos y adaptable a muchas tareas posteriores.",
          example: "GPT-4, Claude y Gemini son modelos básicos."
        },
        {
          def: "Los pesos de los modelos son públicos; Gratis para descargar, implementar y modificar.",
          example: "LLaMA, DeepSeek, Mistral, Difusión Estable."
        },
        {
          def: "Disponible solo a través de API o producto; Los pesos no son públicos.",
          example: "GPT-4, Claude, Géminis Pro."
        },
        {
          def: "El modelo continúa el texto de lo que ya escribió: una capacidad central de GPT.",
          example: "IA terminando la siguiente oración en un correo electrónico; Autocompletar código."
        },
        {
          def: "Chips altamente paralelos que son hardware central para el entrenamiento y la inferencia de IA.",
          example: "NVIDIA H100 para entrenar modelos grandes; RTX 4090 ejecutando Stable Diffusion localmente."
        },
        {
          def: "El acelerador de aprendizaje automático personalizado de Google; fuerte en el ecosistema TensorFlow.",
          example: "Google Cloud TPU v5 entrenando a Géminis."
        },
        {
          def: "Permite a los desarrolladores llamar a las capacidades del modelo de IA en código e integrarlas en sus productos.",
          example: "API OpenAI, API Claude, API Qwen."
        },
        {
          def: "Reduce la precisión del peso (por ejemplo, 32 bits → 8 bits/4 bits) para reducir el tamaño y acelerar la inferencia.",
          example: "Un modelo 70B cuantificado para ejecutarse en GPU de consumo."
        },
        {
          def: "Poner en producción un modelo entrenado para que sirva de inferencia para usuarios o aplicaciones.",
          example: "Implemente un modelo optimizado en un servidor en la nube para su equipo."
        },
        {
          def: "Una instantánea del modelo guardada durante el entrenamiento para reanudar o elegir la mejor versión.",
          example: "Reanude el entrenamiento desde el último punto de control después de la interrupción."
        },
        {
          def: "Número de muestras por iteración de entrenamiento; afecta la velocidad, la memoria y la estabilidad de la convergencia.",
          example: "Con una memoria GPU de 24 GB, el tamaño del lote suele ser de 4 a 32."
        },
        {
          def: "Una pasada completa por todo el conjunto de datos de entrenamiento.",
          example: "10 épocas significan que el conjunto de datos fue visto 10 veces."
        },
        {
          def: "Ejecutar el modelo en servidores en la nube; los usuarios lo llaman a través de API de red.",
          example: "ChatGPT y Claude.ai son inferencias en la nube."
        },
        {
          def: "Ejecutar el modelo localmente en teléfonos o PC: no se necesita red, mejor privacidad y menor latencia.",
          example: "Siri en el dispositivo en iPhone; Ollama ejecuta LLaMA localmente."
        },
        {
          def: "Reduzca el tamaño del modelo y compútelo mediante cuantificación, poda, destilación, etc., para una implementación con recursos limitados.",
          example: "Tendencias injustas sistemáticas en la IA causadas por datos de entrenamiento desequilibrados."
        },
        {
          def: "Tendencias injustas sistemáticas en la IA causadas por datos de entrenamiento desequilibrados.",
          example: "Contratar IA que favorezca a un género; El reconocimiento facial es menos preciso en tonos de piel más oscuros."
        },
        {
          def: "Investigación que garantice que los objetivos y el comportamiento de la IA coincidan con los valores humanos.",
          example: "RLHF como alineación; evitando salidas dañinas."
        },
        {
          def: "Mecanismos de seguridad que limitan la salida de IA para bloquear contenido dañino, ilegal o inapropiado.",
          example: "Rechazar instrucciones para fabricar armas; Filtrar contenidos violentos."
        },
        {
          def: "Los atacantes utilizan entradas maliciosas para anular o eludir las instrucciones del sistema.",
          example: "Entrada del usuario que dice \"Ignora todas las instrucciones anteriores, ahora...\""
        },
        {
          def: "Asegúrese de que los datos del usuario no se utilicen indebidamente y que los modelos no filtren datos de entrenamiento confidenciales.",
          example: "No capacitarse directamente sobre datos reales de los clientes; Implementación local para mayor privacidad."
        },
        {
          def: "Hacer que las decisiones de IA sean comprensibles y auditables para los humanos.",
          example: "Explicando por qué AI rechazó una solicitud de préstamo."
        },
        {
          def: "Un marco para desarrollar y utilizar la IA con equidad, transparencia, seguridad y privacidad.",
          example: "Principios de IA y procesos de revisión de Google y Microsoft."
        },
        {
          def: "Detectar y filtrar automáticamente contenido dañino generado por IA o proporcionado por el usuario.",
          example: "Las indicaciones especiales superan los límites de seguridad para que el modelo genere contenido que de otro modo estaría prohibido."
        },
        {
          def: "Las indicaciones especiales superan los límites de seguridad para que el modelo genere contenido que de otro modo estaría prohibido.",
          example: "Trucos de juego de roles para provocar violaciones de políticas (deben resistirse)."
        },
        {
          def: "El modelo expone accidentalmente información confidencial o privada de los datos de entrenamiento en su salida.",
          example: "El modelo repite correos electrónicos o contraseñas reales del conjunto de entrenamiento."
        },
        {
          def: "Estabilidad ante entradas inusuales, ataques adversarios o cambios de distribución.",
          example: "Sigo dando respuestas razonables a pesar de errores tipográficos o perturbaciones maliciosas."
        }
      ]
  });
})();
