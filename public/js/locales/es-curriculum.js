/* ES overlays — curriculum */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('es', {
    aiOverview: [
        {
          id: "what",
          icon: "🌐",
          color: "var(--accent-teal-dim)",
          tag: "01 · Starting point",
          navLabel: "Una analogía cotidiana de 30 segundos",
          title: "Cuando la gente dice \"IA\" en las noticias y en las redes sociales hoy en día, generalmente se refiere a modelos de lenguaje grande (LLM) e IA generativa (GenAI): escribes en lenguaje natural y obtienes respuestas, borradores o trabajo creativo. El primer paso para comprender la IA es separar tres cosas: el concepto técnico, la forma del producto y cómo se utiliza.",
          lead: "Inteligencia artificial (IA) es el término general para las tecnologías que permiten a las máquinas simular el comportamiento humano inteligente: encontrar patrones en los datos, comprender el lenguaje, emitir juicios y generar texto, imágenes, códigos y audio/vídeo. No es un producto único sino una colección de métodos y sistemas de ingeniería.",
          intro: "Una analogía cotidiana de 30 segundos",
          subsections: [
            {
              title: "Una analogía cotidiana de 30 segundos",
              text: "Piense en la IA moderna como un pasante que ha leído una biblioteca enorme y responde instantáneamente: excelente para organizar, redactar, generar ideas y conectar ideas, pero sin su contexto empresarial de forma predeterminada y no se garantiza que sea objetivamente correcto en todo momento. Usted establece metas, proporciona materiales y verifica resultados; La IA te acelera y amplía tu pensamiento.",
              items: [
                "Usted proporciona: objetivos de la tarea, materiales de referencia, requisitos de formato, estándares de calidad.",
                "La IA proporciona: primeros borradores, alternativas, explicaciones, desgloses estructurados.",
                "Usted verifica: verificación de hechos, juicio lógico, decisiones finales y cualquier cosa publicada externamente."
              ]
            },
            {
              title: "Tres olas de desarrollo (conozca el arco)",
              text: "La IA no explotó de la noche a la mañana: pasó por varios cambios de paradigma. Conocer la historia ayuda a explicar por qué la IA actual se centra en la conversación y la generación.",
              items: [
                "Década de 1990 a 2010 Aprendizaje estadístico: aprender patrones a partir de datos automáticamente; recomendación, control de riesgos y reconocimiento de voz aumentaron",
                "Década de 1990 a 2010 Aprendizaje estadístico: aprender patrones a partir de datos automáticamente; recomendación, control de riesgos y reconocimiento de voz aumentaron",
                "2012-presente Aprendizaje profundo: redes neuronales + computación y datos a gran escala; CV, oratoria, LLM y GenAI",
                "2022+ La IA generativa se generaliza: ChatGPT convirtió el \"lenguaje natural impulsa la salida\" en la interacción predeterminada"
              ]
            }
          ],
          points: [
            {
              label: "¿Qué entiende la gente hoy por IA?",
              text: "Principalmente sistemas de aprendizaje automático entrenados en big data, especialmente LLM (GPT, Claude, Qwen) y modelos de generación de imágenes/vídeo. Generan resultados aparentemente semánticos al \"predecir el siguiente token/píxel\"."
            },
            {
              label: "Jerarquía",
              text: "Inteligencia artificial (IA) ⊃ Aprendizaje automático (ML) ⊃ Aprendizaje profundo (DL) ⊃ Modelos de lenguajes grandes (LLM). Más a la derecha = más especializados, pero también más datos, computación e ingeniería."
            },
            {
              label: "Entrenamiento versus inferencia",
              text: "La formación consiste en \"estudiar para un examen\": ajustar los parámetros del modelo en datos masivos; costoso y lento. La inferencia es \"hacer el examen\": el modelo genera resultados cada vez que usted pregunta; esa es la etapa de uso diario."
            },
            {
              label: "INA frente a AGI",
              text: "Todos los sistemas comerciales actuales son IA estrecha (ANI): fuerte en su distribución de entrenamiento, transferencia limitada entre dominios. AGI (razonamiento y acción amplios similares a los humanos) no tiene un cronograma acordado: no trate los productos actuales como agentes omniscientes."
            },
            {
              label: "Discriminativo vs generativo",
              text: "La IA discriminatoria clasifica y juzga (detección de spam, detección de imágenes médicas, puntuación de riesgos); La IA generativa crea contenido (informes, imágenes, código, voz en off). El entusiasmo público actual es mayoritariamente generativo."
            },
            {
              label: "Multimodal",
              text: "Los modelos más nuevos manejan archivos de texto, imágenes, audio, video e incluso códigos juntos. Puede \"enviar una captura de pantalla para obtener una explicación\", \"cargar un PDF para obtener un resumen\" o \"hablar por voz\"."
            },
            {
              label: "Alucinación",
              text: "La IA puede inventar con confianza hechos, citas o números, porque optimiza lo \"fluido y plausible\", no lo \"necesariamente correcto\". Verifique siempre números, regulaciones, escenarios médicos y contractuales."
            },
            {
              label: "Los humanos se mantienen informados",
              text: "La implementación confiable es \"borradores de IA + revisiones humanas\": la IA maneja la velocidad y la cobertura; los humanos manejan la verdad, el cumplimiento y la responsabilidad final."
            }
          ],
          note: "La conferencia de Dartmouth de 1956 acuñó el término \"inteligencia artificial\". Desde \"escribir reglas\" hasta \"aprender de los datos\" y \"generar contenido\", los límites de la IA siguen ampliándose, pero el núcleo no cambia: aumenta la capacidad humana, no conlleva consecuencias automáticamente. Después de esta sección, debes explicar qué es la IA, qué entiende la gente por IA hoy en día y por qué no puedes confiar ciegamente en todos los resultados."
        },
        {
          id: "capabilities",
          icon: "⚡",
          color: "var(--accent-amber-dim)",
          tag: "02 · Capability map",
          navLabel: "¿Qué puede hacer?",
          title: "¿Qué puede hacer la IA?",
          lead: "La IA actual cubre una gran parte del trabajo de conocimiento, el trabajo creativo y el trabajo de procesos, desde escribir un correo electrónico hasta analizar un contrato, desde generar carteles hasta resumir automáticamente informes diarios. El valor no es reemplazarlo, sino comprimir el tiempo de 0 a 60% para que pueda juzgar y pulir más rápido.",
          intro: "A continuación se muestran 8 dominios de capacidad. Cada uno incluye lo que puede hacer, escenarios típicos y cómo colaborar con la IA de manera eficiente. Recuerde: la IA da borradores, usted da estándares; La IA amplía las ideas, tú tomas decisiones.",
          capabilities: [
            {
              image: "assets/capabilities/cap-writing.jpg",
              title: "Escritura y comunicación",
              desc: "Convierta ideas confusas en texto que pueda enviar, informar o publicar.",
              detail: "Excelente para expresión estructurada: correo electrónico, informes semanales, propuestas, discursos, textos de productos, publicaciones en redes sociales, traducción y pulido de tonos. La IA sobresale en \"primero el esqueleto, después la carne\".",
              examples: [
                "Amplíe 3 viñetas en un informe semanal de 500 palabras que destaque los datos y los riesgos.",
                "Reescribir documentos técnicos para clientes (conservar datos clave)",
                "Genera variantes de tono formal/casual/inglés de un mismo contenido",
                "Ofrezca audiencia, extensión, tono y datos imprescindibles: saltos en la calidad de los resultados."
              ],
              tip: "Ofrezca audiencia, extensión, tono y datos imprescindibles: saltos en la calidad de los resultados."
            },
            {
              image: "assets/capabilities/cap-coding.jpg",
              title: "Programación y depuración",
              desc: "Acelere la escritura, lectura y cambio de código de un extremo a otro.",
              detail: "Desde la finalización de una sola función hasta la refactorización de archivos cruzados, la IA puede explicar errores, generar pruebas, programar el procesamiento de datos y convertir los requisitos en prototipos ejecutables. Los no programadores también pueden obtener páginas web, pequeñas herramientas y scripts de automatización a través del lenguaje natural.",
              examples: [
                "Describir una necesidad → obtener una miniherramienta HTML/JS → verificar en el navegador",
                "Pegue registros de errores → obtenga causas probables y corrija parches",
                "Agregue pruebas unitarias y casos extremos para funciones existentes",
                "Convierta el trabajo de datos repetitivos en un script de Python comentado"
              ],
              tip: "Proporcionar contexto del proyecto, E/S esperada y restricciones de pila; al cambiar el código, pregunte \"qué cambió y cómo verificarlo\"."
            },
            {
              image: "assets/capabilities/cap-design.jpg",
              title: "Imágenes y diseño",
              desc: "Borradores visuales rápidos, exploración de estilos y recursos creativos.",
              detail: "Genere ilustraciones, carteles, paneles de estado de ánimo de productos, instrucciones de logotipos y conceptos de interfaz de usuario a partir de texto. Lo mejor para la lluvia de ideas y la dirección visual temprana, sin reemplazar un sistema de marca completo.",
              examples: [
                "3 borradores de estilo de portada para un curso (tecnología/revista/mínimo)",
                "Convierta descripciones de bocetos dibujados a mano en arte conceptual de calidad",
                "Convierta descripciones de bocetos dibujados a mano en arte conceptual de calidad",
                "Imágenes sociales por lotes con paleta y relación de aspecto consistentes"
              ],
              tip: "Especifique el tema, la composición, la iluminación, la referencia de estilo y la relación de aspecto; al iterar, diga qué conservar frente a cambiar."
            },
            {
              image: "assets/capabilities/cap-av.jpg",
              title: "Desde texto hasta audio, música y videoclips publicables.",
              desc: "Desde texto hasta audio, música y videoclips publicables.",
              detail: "Convierta el resumen del artículo en un guión de 60 segundos + voz en off",
              examples: [
                "Convierta el resumen del artículo en un guión de 60 segundos + voz en off",
                "Clona tu voz para la narración del curso (con permiso legal)",
                "Generar automáticamente subtítulos y títulos bilingües para videos existentes",
                "Generar automáticamente subtítulos y títulos bilingües para videos existentes"
              ],
              tip: "Bloquee primero la duración, la relación de aspecto, el ritmo y la audiencia; para comprobar la voz, emociones, pausas y pronunciación."
            },
            {
              image: "assets/capabilities/cap-analytics.jpg",
              title: "Convierta las avalanchas de información en conocimientos legibles y conclusiones procesables.",
              desc: "Convierta las avalanchas de información en conocimientos legibles y conclusiones procesables.",
              detail: "Ayuda con análisis de la competencia, resúmenes de tendencias, agrupación de comentarios, marcos de análisis de Excel y esquemas de análisis de encuestas. Fuerte en síntesis estructurada y generación de hipótesis; débil en estadísticas precisas no verificadas.",
              examples: [
                "Cargue 20 comentarios de usuarios → priorice los puntos débiles y las mejoras",
                "Después de largos informes, extraiga riesgos, números clave y elementos para verificar.",
                "Convierta la descripción de los datos de ventas en un marco de análisis y sugerencias de visualización",
                "Después de largos informes, extraiga riesgos, números clave y elementos para verificar."
              ],
              tip: "Proporcionar materia prima, objetivo de análisis y contexto de decisión; Solicite etiquetar \"confirmado/inferido/necesita verificación\"."
            },
            {
              image: "assets/capabilities/cap-agent.jpg",
              title: "Automatización y Agentes",
              desc: "Los agentes pueden buscar, leer/escribir archivos, ejecutar scripts, enviar notificaciones y ejecutar programas Cron. Bueno para \"resumen diario de la industria\", \"supervisar los cambios en los sitios de la competencia\" y encadenar correo electrónico + hojas de cálculo + documentos.",
              detail: "Los agentes pueden buscar, leer/escribir archivos, ejecutar scripts, enviar notificaciones y ejecutar programas Cron. Bueno para \"resumen diario de la industria\", \"supervisar los cambios en los sitios de la competencia\" y encadenar correo electrónico + hojas de cálculo + documentos.",
              examples: [
                "Todos los días laborables, a las 8:30, resuma automáticamente las noticias de la industria y envíe un resumen",
                "Mire los sitios de la competencia; generar comparación cuando aparecen actualizaciones",
                "Encadene correo electrónico + hoja de cálculo + documento en un flujo de preparación de aprobación",
                "Generar automáticamente un informe semanal a partir de una plantilla con los datos de hoy"
              ],
              tip: "Pilotar primero con un alcance pequeño; Defina puntos de control de reintento, registro y revisión humana."
            },
            {
              image: "assets/capabilities/cap-learning.jpg",
              title: "Aprendizaje y tutoría",
              desc: "Explica conceptos, te hace preguntas y planifica rutas de aprendizaje a tu ritmo.",
              detail: "Utilice la técnica de Feynman, preguntas socráticas, explicaciones en capas y revisión de respuestas incorrectas para dividir los temas difíciles en pasos digeribles. Excelente para exámenes, nuevas habilidades e incorporación rápida de dominios.",
              examples: [
                "Explique Transformer con una analogía cotidiana, luego 3 preguntas de autoevaluación",
                "Personalice un plan de introducción de Python de 7 días para su experiencia",
                "Colocar capas de papel: panorama general → método → limitaciones",
                "Genere preguntas variantes para los puntos débiles"
              ],
              tip: "Dígale a AI lo que ya sabe, su nivel objetivo y su estilo preferido (ejemplos/diagramas/ejercicios)."
            },
            {
              image: "assets/capabilities/cap-search.jpg",
              title: "Búsqueda y preguntas y respuestas",
              desc: "Respuestas estructuradas más rápidas que las listas de enlaces tradicionales.",
              detail: "La búsqueda por IA sintetiza las fuentes en resúmenes, comparaciones y rutas de citas; El documento de preguntas y respuestas busca con precisión los archivos PDF/notas cargados. Bueno para la investigación, el aprendizaje y la recopilación de información previa a la escritura.",
              examples: [
                "Investigar un enfoque tecnológico → pros/contras y escenarios adecuados",
                "Subir contrato/documento → preguntar sobre cláusulas o párrafos específicos",
                "Fusione cinco artículos de la industria en un resumen ejecutivo de una página",
                "Verifique rápidamente fuentes comunes y controversias en torno a un reclamo"
              ],
              tip: "Solicite fuentes y citas; Verifique las conclusiones clave con al menos dos fuentes independientes."
            }
          ],
          collabTips: {
            title: "Cuatro principios para una colaboración eficaz",
            items: [
              {
                label: "Dar contexto completo",
                text: "Antecedentes, objetivos, audiencia, limitaciones, contraejemplos: cuanto más específico, más utilizable será el resultado."
              },
              {
                label: "Paso a paso, ni un tiro",
                text: "Divida el trabajo complejo en esquema → borrador → revisión → final; Verifique cada paso antes de continuar."
              },
              {
                label: "Preguntar por formato y estándares",
                text: "Especifique longitud, estructura, tono y campos obligatorios; evite tonterías genéricas."
              },
              {
                label: "Los humanos juzgan al final",
                text: "Los hechos, las cifras, el cumplimiento y las publicaciones externas deben ser confirmados por personas."
              }
            ]
          },
          boundaries: {
            title: "Con qué todavía tiene problemas o necesita precaución",
            items: [
              "Datos de alta precisión en tiempo real (precios de acciones de segundo nivel, datos internos inéditos): necesitan fuentes de datos autorizadas",
              "Demostraciones matemáticas complejas y derivaciones rigurosas: pueden equivocarse; verificar los pasos clave",
              "Juicio final profesional legal/médico/financiero: la IA solo ayuda; no puede reemplazar a los profesionales autorizados",
              "Privacidad, derechos de autor, semejanza en la generación y publicación: siga las leyes y las políticas de la plataforma",
              "Memoria a largo plazo de toda su información privada: las sesiones predeterminadas no persisten; cree su propia base de conocimientos o flujo de trabajo"
            ]
          },
          note: "La IA es más potente en tareas con patrones claros, redacción rápida y variantes por lotes; más débiles en cuanto a corrección fáctica garantizada, responsabilidad legal y restricciones implícitas no declaradas. Trátelo como un acelerador, no como un piloto automático. Siguiente: elegir herramientas específicas."
        },
        {
          id: "tools",
          icon: "🧰",
          color: "rgba(167, 139, 250, 0.15)",
          tag: "03 · Tool landscape",
          navLabel: "¿Qué herramientas?",
          title: "¿Qué herramientas de IA existen?",
          lead: "No existe la \"mejor\" IA, sólo la que mejor se adapta. A continuación se muestra el mapa de herramientas principales para 2026; El módulo Herramientas de este sitio tiene una cobertura detallada de 43 aplicaciones.",
          toolGroups: [
            {
              category: "Asistentes de chat",
              emoji: "💬",
              tools: "ChatGPT, Claude, Gemini, Qwen, DeepSeek, Kimi, Doubao, Grok",
              use: "Preguntas y respuestas diarias, redacción, análisis y codificación"
            },
            {
              category: "Codificación y desarrollo",
              emoji: "👨‍💻",
              tools: "Cursor, Claude Code, Codex CLI, Grok Build, Copilot, Gemini CLI, Aider, Cline, Continuar, Zcode, Windsurf, Bolt.new, Amazon Q Developer",
              use: "Agentes de terminal, finalización de IDE, programación de pares Git, compilaciones de sitios de una sola línea"
            },
            {
              category: "Creación de imágenes",
              emoji: "🎨",
              tools: "Mitad del viaje, DALL·E 3, Difusión estable, Flujo",
              use: "Ilustración, diseño, ideación visual."
            },
            {
              category: "Productividad",
              emoji: "🎵",
              tools: "Pista, Sora, Kling AI, Suno, ElevenLabs, Fish Audio",
              use: "Generación de vídeo, música, locución y clonación."
            },
            {
              category: "Office productivity",
              emoji: "📋",
              tools: "Copiloto de Microsoft, Notion AI, Gamma",
              use: "Documentos, diapositivas, notas de reuniones, colaboración"
            },
            {
              category: "Agent automation",
              emoji: "🦞",
              tools: "OpenClaw, Dify, Coze, n8n, Manus",
              use: "Tareas programadas, orquestación del flujo de trabajo, bots, ejecución autónoma"
            },
            {
              category: "Búsqueda e investigación",
              emoji: "🔎",
              tools: "Perplejidad, Metaso AI Search, NotebookLM",
              use: "Investigación, análisis de literatura, verificación de hechos."
            }
          ],
          note: "Principiantes: comience con una IA de chat (ChatGPT o Qwen) más la herramienta más relevante para su trabajo; no instale todo a la vez."
        },
        {
          id: "impact",
          icon: "🏙️",
          color: "rgba(251, 113, 133, 0.12)",
          tag: "04 · Real-world impact",
          navLabel: "Dominios clave",
          title: "¿Dónde la IA ya está marcando la diferencia?",
          lead: "La IA ya no es un concepto de laboratorio: está remodelando la forma en que las industrias producen y cómo los usuarios experimentan los productos.",
          fields: [
            {
              icon: "🏥",
              name: "Cuidado de la salud",
              cases: "Asistencia de imágenes médicas, detección de moléculas de fármacos, resumen de notas clínicas, robots de preguntas y respuestas sobre salud"
            },
            {
              icon: "🎓",
              name: "Educación e investigación",
              cases: "Tutoría personalizada, revisión de literatura, análisis de datos de experimentos, asistencia en redacción de investigaciones."
            },
            {
              icon: "💰",
              name: "Finanzas y negocios",
              cases: "Control de fraude/riesgo, servicio al cliente inteligente, generación de informes de mercado, agregación de investigaciones"
            },
            {
              icon: "🛒",
              name: "Venta minorista y comercio electrónico",
              cases: "Sistemas de recomendación, soporte inteligente, generación de descripción de productos, búsqueda visual"
            },
            {
              icon: "🏭",
              name: "Manufactura e industria",
              cases: "Inspección de calidad, mantenimiento predictivo, optimización de la cadena de suministro, robots industriales."
            },
            {
              icon: "🎬",
              name: "Contenido y medios",
              cases: "Redacción publicitaria, edición de vídeo, presentadores virtuales, localización multilingüe."
            },
            {
              icon: "⚖️",
              name: "Legal y gubernamental",
              cases: "Revisión de contratos, búsqueda de regulaciones, preguntas y respuestas gubernamentales, asistencia en la redacción de documentos"
            },
            {
              icon: "🚗",
              name: "Transporte y movilidad",
              cases: "Asistencia al conductor, planificación de rutas, I+D de conducción autónoma, predicción del tráfico"
            }
          ],
          note: "La mayoría de las aplicaciones son \"IA especializada + datos de dominio + revisión humana\", no la IA que decide por sí sola."
        },
        {
          id: "future",
          icon: "🔭",
          color: "var(--accent-teal-dim)",
          tag: "05 · Looking ahead",
          navLabel: "Perspectivas de futuro",
          title: "¿Cómo evolucionará la IA y cambiará nuestras vidas?",
          lead: "El progreso técnico es incierto, pero estas direcciones están afectando claramente a los individuos y a la sociedad.",
          timeline: [
            {
              period: "Ahora (2024-2026)",
              items: [
                "Los modelos grandes se convierten en la interfaz predeterminada: IA conversacional en búsqueda, oficina, codificación y creación.",
                "Madurez multimodal: un modelo ve imágenes, escucha audio, genera texto/imagen/video",
                "Los agentes de IA pasan de \"responder preguntas\" a \"ejecutar tareas de forma autónoma\""
              ]
            },
            {
              period: "Corto plazo (3 a 5 años)",
              items: [
                "Asistentes personales de IA muy extendidos: recuerdan preferencias, calendario, proyectos; ayuda proactiva",
                "La IA de la industria está profundamente integrada: la educación, la atención médica y el derecho obtienen modelos y flujos de trabajo dedicados",
                "La colaboración entre humanos e IA se convierte en estándar: no utilizar la IA puede perjudicar significativamente la competitividad profesional"
              ]
            },
            {
              period: "Más lejos (aún explorando)",
              items: [
                "Inteligencia general artificial (AGI): sigue sin resolverse y cuándo",
                "IA incorporada: IA en robots que interactúan con el mundo físico",
                "Se reforman las reglas sociales: las leyes de empleo, educación, derechos de autor y privacidad siguen evolucionando"
              ]
            }
          ],
          lifeChanges: [
            {
              icon: "🏠",
              title: "vida diaria",
              text: "Recomendaciones más precisas, hogares más inteligentes, barreras lingüísticas mucho más pequeñas"
            },
            {
              icon: "💼",
              title: "como trabajamos",
              text: "Trabajo repetitivo automatizado; Los humanos se centran más en la creatividad, las decisiones, las relaciones y el gusto."
            },
            {
              icon: "🧠",
              title: "Aprendizaje y crecimiento",
              text: "Todo el mundo tiene un \"tutor en línea las 24 horas del día, los 7 días de la semana\", pero el pensamiento crítico es más importante que nunca"
            },
            {
              icon: "🌍",
              title: "Sociedad",
              text: "Acceso más equitativo a la información y nuevos desafíos: desinformación, deepfakes"
            }
          ],
          note: "En la era de la IA, las habilidades más importantes no son \"conocer una herramienta\", sino hacer buenas preguntas, juzgar la calidad, aprender continuamente y mantener un juicio humanista."
        }
      ],
      fundamentals: [
        {
          icon: "🧠",
          color: "var(--accent-teal-dim)",
          title: "Inteligencia artificial",
          abbr: "AI",
          fullEn: "Inteligencia artificial",
          content: "<p><strong>Inteligencia artificial (IA)</strong> es el conjunto de tecnologías que permiten a las máquinas simular comportamientos inteligentes: aprendizaje, razonamiento, percepción, comprensión del lenguaje, planificación y creación. Acuñado en la conferencia de Dartmouth de 1956, ha pasado por oleadas de IA simbólica, aprendizaje estadístico y aprendizaje profundo.</p>\n      <p>AI no es una técnica, sino un sistema grande que incluye <strong>ML (aprendizaje automático)</strong>, <strong>DL (aprendizaje profundo)</strong>, <strong>NLP (procesamiento del lenguaje natural)</strong>, <strong>CV (visión por computadora)</strong>, robótica y más. ChatGPT, vehículos autónomos y reconocimiento facial son aplicaciones de inteligencia artificial que utilizamos a diario.</p>\n      <p><strong>AGI (Inteligencia General Artificial)</strong>: IA que puede manejar cualquier tarea intelectual como un humano, aún no lograda; un objetivo de investigación a largo plazo.</p>\n      <div class=\"analogy\"><strong>Analogía cotidiana:</strong> La IA es la gran idea de la \"inteligencia\", como el \"transporte\": los automóviles, los trenes y los aviones son formas específicas.</div>\n      <ul class=\"key-points\"><li>\"IA\" cotidiana ≈ sistemas de aprendizaje automático basados en datos</li><li>AI ⊃ ML ⊃ DL: el alcance se reduce de izquierda a derecha</li><li>Jueces de IA discriminativos; La IA generativa crea</li></ul>"
        },
        {
          icon: "📊",
          color: "var(--accent-amber-dim)",
          title: "Aprendizaje automático",
          abbr: "ML",
          fullEn: "Aprendizaje automático",
          content: "<p><strong>Aprendizaje automático (ML)</strong> es el subcampo central de la IA: las computadoras descubren patrones a partir de datos automáticamente en lugar de que los humanos escriban cada regla si-si no. Flujo estándar: recopilar datos → ingeniería de características → entrenar modelo → evaluar → implementar inferencia.</p>\n      <p><strong>Tres paradigmas principales:</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>Aprendizaje supervisado</strong>: datos etiquetados, aprender mapeo de entrada → salida. Se utiliza para clasificación (detección de spam), regresión (precios de la vivienda).</li>\n        <li><strong>Aprendizaje no supervisado</strong>: sin etiquetas, descubre la estructura de datos. Se utiliza para agrupación (segmentos de usuarios), reducción de dimensionalidad (compresión).</li>\n        <li><strong>Aprendizaje por refuerzo (RL)</strong>: aprender políticas a través de señales de recompensa. Utilizado para juegos AI (AlphaGo), control de robots.</li>\n      </ul>\n      <div class=\"analogy\"><strong>Analogía cotidiana:</strong> La programación tradicional es \"el maestro da respuestas paso a paso\"; El aprendizaje automático consiste en \"dar a los estudiantes muchos ejercicios y ellos infieren el método\".</div>"
        },
        {
          icon: "🔬",
          color: "rgba(167, 139, 250, 0.15)",
          title: "Aprendizaje profundo",
          abbr: "DL",
          fullEn: "Aprendizaje profundo",
          content: "<p><strong>Aprendizaje profundo (DL)</strong> es una rama de ML que utiliza redes neuronales multicapa para extraer automáticamente características jerárquicas de datos sin procesar. Más capas → más conceptos abstractos aprendidos.</p>\n      <p>En 2012, <strong>AlexNet</strong> ganó ImageNet de manera decisiva, marcando la era del aprendizaje profundo. Siguieron avances en el habla (Siri), la visión (reconocimiento facial) y el lenguaje (GPT).</p>\n      <p><strong>Ingredientes clave:</strong> datos masivos + redes profundas + computación sólida (<strong>GPU, unidad de procesamiento de gráficos</strong>) = máximo rendimiento. Entrenar un modelo grande puede costar millones en computación.</p>\n      <div class=\"analogy\"><strong>Analogía cotidiana:</strong> El aprendizaje superficial es un tamiz; El aprendizaje profundo consiste en filtros apilados, cada uno de los cuales captura un tamaño de grano diferente.</div>"
        },
        {
          icon: "🔗",
          color: "var(--accent-teal-dim)",
          title: "Red neuronal",
          abbr: "NN",
          fullEn: "Red neuronal",
          content: "<p><strong>Red neuronal (NN)</strong> consta de muchos nodos \"neuronales\" que procesan información en capas. Cada capa transforma las entradas con pesos y sesgos, pasa por funciones de activación y alimenta la siguiente capa.</p>\n      <p><strong>Retropropagación (BP)</strong> es el algoritmo de entrenamiento central: compara la predicción con la verdad, ajusta los pesos capa por capa desde la salida a la entrada para reducir el error.</p>\n      <p>Arquitecturas comunes: <strong>CNN (red neuronal convolucional)</strong> destaca en imágenes; <strong>RNN (Red neuronal recurrente)</strong> maneja secuencias pero ha sido reemplazada en gran medida por Transformers.</p>\n      <div class=\"analogy\"><strong>Analogía cotidiana:</strong> Como una línea de fábrica: las materias primas (datos) pasan por etapas (capas) y se convierten en el producto terminado (predicción).</div>"
        },
        {
          icon: "⚡",
          color: "var(--accent-amber-dim)",
          title: "Arquitectura transformadora",
          abbr: "—",
          fullEn: "Arquitectura transformadora",
          content: "<p>El artículo de Google de 2017 <em>\"La atención es todo lo que necesitas\"</em> presentó la arquitectura <strong>Transformer</strong> y transformó la PNL. Su núcleo es <strong>Autoatención</strong>: al procesar cada palabra, calcula los pesos de relevancia para cada otra palabra de la oración.</p>\n      <p><strong>Ventajas principales:</strong></p>\n      <ul class=\"key-points\">\n        <li>Resuelve dependencias de largo alcance: la primera y la última palabra interactúan directamente</li>\n        <li>Altamente paralelo: entrenamiento mucho más rápido que los RNN</li>\n        <li>Se escala bien: modelos más grandes, capacidades más sólidas (leyes de escala)</li>\n      </ul>\n      <p>Todos los LLM modernos (GPT, Claude, Gemini, LLaMA) utilizan estructuras Transformer <strong>decoder</strong> o <strong>codificador-decodificador</strong>.</p>\n      <div class=\"analogy\"><strong>Analogía cotidiana:</strong> Al leer una oración, no se analiza letra por letra: se capta toda la línea y los ojos se centran en las palabras clave. Eso es atención.</div>"
        },
        {
          icon: "💬",
          color: "var(--accent-teal-dim)",
          title: "Modelo de lenguaje grande",
          abbr: "LLM",
          fullEn: "Modelo de lenguaje grande",
          content: "<p><strong>Large Language Model (LLM)</strong> es una red neuronal muy grande entrenada en texto masivo; su objetivo principal es <strong>predecir el próximo token</strong>. A través de ese simple objetivo aprende gramática, hechos, razonamiento, código, habilidad multilingüe y más.</p>\n      <p><strong>Etapas clave de la formación:</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>Preformación</strong>: texto general extenso, aprender los fundamentos del lenguaje</li>\n        <li><strong>SFT (Ajuste fino supervisado)</strong>: datos de diálogo de alta calidad, aprenda a seguir instrucciones</li>\n        <li><strong>RLHF (Aprendizaje reforzado a partir de la retroalimentación humana)</strong>: las etiquetas de preferencia humana optimizan la calidad y seguridad de las respuestas</li>\n      </ul>\n      <p><strong>Límites:</strong> las fechas límite de conocimientos, las alucinaciones, las matemáticas y la lógica aún pueden fallar. Sea crítico y verifique los hechos clave.</p>\n      <div class=\"analogy\"><strong>Analogía cotidiana:</strong> Un LLM es como un académico que lee toda la biblioteca de Internet: con fluidez y amplitud, pero puede recordar mal los detalles; Verifique información importante.</div>"
        },
        {
          icon: "🎯",
          color: "rgba(251, 113, 133, 0.12)",
          title: "IA generativa",
          abbr: "GenAI",
          fullEn: "Generative Artificial Intelligence",
          content: "<p><strong>Generative AI (GenAI)</strong> crea contenido nuevo: texto, imágenes, audio, video, código, modelos 3D. A diferencia de la <strong>AI discriminativa</strong> (clasificación, detección, predicción), el núcleo de GenAI es la \"creación\".</p>\n      <p><strong>Principales rutas técnicas:</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>Modelos autorregresivos</strong>: generar token/píxel por token; p.ej. GPT, DALL·E</li>\n        <li><strong>Modelos de difusión</strong>: eliminación de ruido de ruido a imagen; p.ej. Difusión estable, mitad del viaje</li>\n        <li><strong>GAN (Red Adversarial Generativa)</strong>: generador vs discriminador; corriente principal temprana para imágenes</li>\n      </ul>\n      Los modelos <p><strong>Multimodal</strong> como GPT-4o y Gemini entienden y generan texto, imágenes, audio y más en un solo sistema.</p>\n      <div class=\"analogy\"><strong>Analogía cotidiana:</strong> La IA discriminativa es el \"calificador\" (correcto o incorrecto); La IA generativa es el \"escritor + pintor\" (crea nuevas obras desde cero).</div>"
        },
        {
          icon: "🌐",
          color: "rgba(167, 139, 250, 0.15)",
          title: "Procesamiento del lenguaje natural",
          abbr: "NLP",
          fullEn: "Procesamiento del lenguaje natural",
          content: "<p><strong>Procesamiento del lenguaje natural (NLP)</strong> es la rama de la inteligencia artificial que permite a las computadoras comprender, generar y procesar el lenguaje humano: traducción automática, análisis de sentimientos, resúmenes, preguntas y respuestas, reconocimiento de voz y más.</p>\n      <p><strong>Evolución de la PNL:</strong></p>\n      <ul class=\"key-points\">\n        <li><strong>Era de reglas</strong>: reglas gramaticales y diccionarios escritos a mano</li>\n        <li><strong>Era estadística</strong>: probabilidad de corpus grandes (N-gramo)</li>\n        <li><strong>Era del aprendizaje profundo</strong>: incrustaciones de Word2Vec → RNN/LSTM → Transformer → LLM</li>\n      </ul>\n      <p>Hoy en día, la mayoría de las tareas de PNL están \"unificadas\" mediante LLM: un modelo con diferentes indicaciones puede traducir, resumir, clasificar y generar. Este es el <strong>paradigma unificado de PNL</strong>.</p>\n      <div class=\"analogy\"><strong>Analogía cotidiana:</strong> La PNL es el \"departamento de idiomas\" de la IA: enseña a las máquinas a leer, escribir, escuchar y hablar; el LLM es el estudiante con sobresaliente en esa clase.</div>"
        }
      ],
      fundamentalsFigcaption: "De un vistazo: la IA aprende de los datos, comprende su pregunta a través de la inferencia de Transformer/LLM y genera respuestas; Los módulos siguientes se expanden de forma predeterminada: haga clic en los títulos para contraerlos.",
      fundamentalsFigAlt: "Cómo funciona la IA: entrenamiento de datos, arquitectura Transformer, inferencia de LLM a las respuestas y jerarquía de la IA que contiene ML y DL",
      sectionHeaders: {
        "ai-overview": {
          tag: "Module 1.1 · Start here",
          title: "Descripción general de la IA",
          desc: "Antes de profundizar: qué es la IA, qué puede hacer, qué herramientas existen, qué campos está cambiando y hacia dónde se dirige."
        },
        fundamentals: {
          tag: "Module 1.2",
          title: "8 módulos fundamentales: AI → ML → DL → Transformer → LLM → GenAI → NLP.",
          desc: "8 módulos fundamentales: AI → ML → DL → Transformer → LLM → GenAI → NLP."
        },
        knowledge: {
          tag: "Module 1.3",
          title: "base de conocimientos de IA",
          desc: "100 términos comunes de IA en 9 categorías. Estudio de cartas o glosario rápido."
        },
        apps: {
          tag: "Module 2.1",
          title: "Elija las herramientas adecuadas",
          desc: "43 aplicaciones de IA convencionales por escenario, con funciones, audiencia y consejos para comenzar."
        },
        "prompt-examples": {
          tag: "Referencia de prompts",
          title: "Ejemplos de prompts por tipo de software",
          desc: "Siete categorías — chat, código, imágenes, video, oficina, agentes e investigación — con escenarios, estructura y prompts listos para copiar."
        },
        "prompt-lab": {
          tag: "Module 2.2",
          title: "laboratorio rápido",
          desc: "Un espacio de trabajo: elija un caso → editar mensaje → vista previa de respuesta → vaya a operar con herramientas reales.",
          caseLabel: "Casos de práctica",
          selectCaseBadge: "Elija un caso para comenzar",
          copyPrompt: "Copiar mensaje",
          formTitle: "Configuración rápida",
          taskLabel: "Tipo de tarea",
          roleLabel: "Role",
          rolePlaceholder: "p.ej. Gerente sénior de producto",
          contextLabel: "Fondo",
          contextPlaceholder: "Describe el escenario, la audiencia, las limitaciones...",
          outputLabel: "Salida esperada",
          outputPlaceholder: "p.ej. Un esquema del PRD de 500 palabras",
          toneLabel: "Tono y estilo",
          tones: [
            "Profesional y riguroso",
            "lenguaje sencillo",
            "Creativo y exploratorio",
            "Conciso y directo"
          ],
          generateBtn: "Generar y simular",
          simTitle: "Preguntar y responder · simulación en paralelo",
          simReset: "Restablecer simulación",
          simEmptyTitle: "Simulación no iniciada",
          simEmptyDesc: "Simulación completa · pruébalo en una herramienta real",
          guideTitle: "Simulación completa · pruébalo en una herramienta real",
          guideToolsLabel: "Herramientas recomendadas:",
          followupPlaceholder: "Seguimiento, p.e. \"hacerlo más corto\"...",
          sendBtn: "Enviar",
          simDisclaimer: "Demostración preestablecida local para comprender la estructura del mensaje. Copie las indicaciones a las herramientas recomendadas para obtener resultados reales."
        },
        "hands-on": {
          tag: "Module 3.1 · Start here",
          title: "Tutoriales de software reales",
          desc: "Plantillas de indicaciones de escenarios"
        },
        practice: {
          tag: "Module 3.2",
          title: "Plantillas de indicaciones de escenarios",
          desc: "16 escenarios de trabajo y aprendizaje con herramientas recomendadas, flujos paso a paso y plantillas de mensajes de copia con un solo clic."
        },
        monetize: {
          tag: "Monetization map",
          title: "Convierta las habilidades de IA en ingresos reales",
          desc: "30 instrucciones prácticas para obtener ingresos secundarios y trabajo independiente: elija una que se adapte a sus necesidades y comience a validar."
        },
        graduation: {
          tag: "Official graduation",
          title: "Felicitaciones: ¡aprendizaje de IA de 7 días completo!",
          desc: "Terminaste Cognición → Herramientas → Práctica → Revisión. Revise su informe y planifique los próximos 30 días.",
          learningFootprint: "Huella de aprendizaje",
          planTag: "seguir mejorando",
          planTitle: "plan de práctica de 30 días",
          planDesc: "Practica con IA al menos dos veces por semana y convierte lo aprendido en hábitos reales. Guardado automático; exportar en cualquier momento.",
          focusLegend: "Áreas de enfoque (selección múltiple)",
          exportPlan: "Copiar informe de graduación",
          copyReport: "Copiar informe de graduación",
          saved: "Guardado automáticamente"
        },
        devices: {
          tag: "Buying map",
          title: "Elija dispositivos según necesidades reales",
          desc: ""
        },
        quiz: {
          tag: "Module 4.1",
          title: "Pon a prueba tu aprendizaje",
          desc: "100 preguntas seleccionadas sobre teoría, términos, herramientas y práctica. Objetivo 80/100+."
        }
      },
      coachSections: [
        {
          id: "hero",
          msgTemplate: "{name}, ¡soy {teacher}! ¿Listo para comenzar su viaje de aprendizaje de IA?"
        },
        {
          id: "roadmap",
          msgTemplate: "{name}, este es el mapa de aprendizaje. Siga las cuatro fases en orden; estaré con usted durante todo el camino."
        },
        {
          id: "path",
          msgTemplate: "{name}, este es tu plan de aprendizaje de 7 días. Trabaje los días en orden; marca el contenido que ya conoces como dominado para omitirlo; haré un seguimiento de tu progreso."
        },
        {
          id: "descripción general de ai",
          msgTemplate: "{name}, ¡comienza con la descripción general de la IA! Comprenda qué es la IA y qué puede hacer; los principios le resultarán mucho más fáciles después de eso."
        },
        {
          id: "fundamentos",
          msgTemplate: "{name}, estos 8 fundamentos son la base para comprender cada herramienta de IA."
        },
        {
          id: "conocimiento",
          msgTemplate: "{name}, no es necesario que memorices los 100 términos a la vez; regresa en cualquier momento para buscar información."
        },
        {
          id: "aplicaciones",
          msgTemplate: "{name}, elige herramientas para tus escenarios: regístrate y prueba una; esa es la forma más rápida de empezar."
        },
        {
          id: "laboratorio rápido",
          msgTemplate: "{name}, las indicaciones son la clave para dirigir la IA; practique la escritura estructurada aquí."
        },
        {
          id: "manos a la obra",
          msgTemplate: "{name}, ¡empieza con tutoriales de software reales! Siga Cursor, Midjourney y otros; no hay nada mejor que hacerlo usted mismo."
        },
        {
          id: "practice",
          msgTemplate: "{name}, elige un escenario relacionado con tu trabajo, copia un mensaje y pruébalo de verdad."
        },
        {
          id: "quiz",
          msgTemplate: "{name}, recta final! Responda el cuestionario para validar sus 7 días: ¡lo tiene!"
        },
        {
          id: "graduation",
          msgTemplate: "{name}, ¡felicidades por graduarte! Revise su informe de aprendizaje y complete su plan de práctica de 30 días."
        },
        {
          id: "monetizar",
          msgTemplate: "{name}, ¿quieres monetizar tus habilidades? Aquí hay 30 instrucciones prácticas: elija la que mejor se adapte y comience a validar."
        },
        {
          id: "devices",
          msgTemplate: "{name}, ¡lee esto antes de comprar una PC! Haga coincidir el sistema operativo, la RAM y la GPU con su ruta de aprendizaje: evite gastar demasiado."
        }
      ],
      phaseCoachHints: {
        "phase-learn": "{name}, Fase 1: construyamos bases cognitivas: principios y terminología.",
        "phase-tools": "{name}, Fase 2: aprenda a elegir herramientas y escribir indicaciones para que la IA realmente funcione para usted.",
        "phase-practice": "{name}, Fase 3: incorporar IA en flujos de trabajo reales: ¡la práctica lo demuestra!",
        "phase-validate": "{name}, Fase 4: revisar, evaluar y consolidar: seguir mejorando."
      },
      dayCompleteMessages: {
        allComplete: "{name}, ¡los 7 días completos! Increíble: dirígete a Revisión para ver el cuestionario final 🎉",
        cognitionPhaseEnd: "{name}, ¡Día 3 terminado! Fase de cimentaciones terminada. Desplázate hasta abajo para ir a Herramientas 👏",
        toolsPhaseEnd: "{name}, ¡Fase de herramientas completada! Utilice la guía de transición en la parte inferior para ingresar a Práctica.",
        practiceDayComplete: "{name}, ¡Día de práctica terminado! Ingrese a Revisión para la prueba final: ¡corra hasta el final!",
        dayComplete: "{name}, Día {day}「{title}」¡completo! {nextHint}{teacher} está orgulloso de ti ✦",
        nextDayHint: "Mañana es el día {nextDay}「{nextTitle}」."
      },
      personalizationNamed: {
        greeting: "{name}, bienvenido a BestWayToLearn.AI",
        titleHtml: "{name}, <span class=\"hero-highlight\">dominemos AI</span> juntos",
        readyTitle: "Genial, {name}, ¡vamos!",
        readyDesc: "A partir de hoy te guiaré paso a paso usando \"{name}\".",
        readyQuote: "「{name}, la mejor manera de aprender IA es practicar con problemas reales.」",
        pathBanner: "{name}, primero vea el plan completo de 7 días y luego trabaje día a día; marca los días dominados para omitirlos; haré un seguimiento de tu progreso.",
        roadmapHeader: "{name}, __T1__ · __T2__ · __T3__.",
        phaseBannerTemplate: "{name}, {subtitle} · {days} · {descFirst}."
      }
  });
})();
