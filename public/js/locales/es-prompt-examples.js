/* ES overlays — prompt-examples */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData("es", {
  "promptExampleCategories": {
    "全部": "Todo",
    "对话助手": "auditoría de seguridad",
    "编程开发": "Desarrollo de programación",
    "图像创作": "creación de imágenes",
    "视频音频": "Marketing y SEO",
    "办公效率": "Eficiencia de la oficina",
    "Agent 自动化": "Automatización de agentes",
    "搜索研究": "investigación de búsqueda"
  },
  "promptExamplesUi": {
    "countShown": "Mostrando {visible} / {total}",
    "emptyHint": "No hay ejemplos en esta categoría. Prueba con otra etiqueta.",
    "structureLabel": "estructura inmediata",
    "scenarioLabel": "cuando usar",
    "tipsLabel": "Consejos",
    "copyLabel": "Copiar mensaje",
    "frameworkHint": "Utilice Rol → Tarea → Contexto → Formato → Restricciones (RTFC). Reemplace [marcadores de posición] con sus datos."
  },
  "promptExamples": [
    {
      "id": "chatgpt-longform",
      "title": "Redacción de artículos largos estructurados (marco RTFC)",
      "scenario": "Es necesario crear cuentas/blogs/descripciones de productos públicos que puedan publicarse directamente para evitar declaraciones vacías y clichés.",
      "structure": [
        "rol rol",
        "tarea tarea",
        "Formato",
        "Restricciones"
      ],
      "prompt": "# Rol\nEres un consultor de estrategia de contenidos con 10 años de experiencia, especializado en artículos de tecnología B2B de formato largo.\n\n#tarea\nCon base en los antecedentes a continuación, escriba un artículo de divulgación científica sobre el aprendizaje de la IA para los recién llegados al lugar de trabajo.\n\n#Contexto\n- Lectores objetivo: trabajadores de oficina de entre 25 y 35 años, sin conocimientos básicos\n- Información básica: comience en 7 días, aprendizaje basado en tareas, no es necesario aprender matemáticas primero\n- Número de palabras: 1200–1500 palabras\n- Canal: cuenta oficial de WeChat\n\n#Formato\n1. 3 opciones de título (incluidos subtítulos)\n2. Texto principal: Historia inicial → 3 malentendidos comunes → Método de 7 días → Recomendaciones de herramientas → Finalizar CTA\n3. 5 hashtags\n\n#Restricciones\n- Tono: amable, específico, menos adjetivos.\n- Prohibido: \"En resumen\" y \"con el desarrollo de la IA\" y otras palabras vacías\n- 1 ejemplo ejecutable para cada argumento\n- No invente datos, marque \"por verificar\" cuando no esté seguro",
      "tips": "Primero intente con el mismo tema con instrucciones confusas y luego use esta plantilla para comparar; la diferencia es el valor de la palabra inicial. GPT-4o responde mejor a la sección Formato."
    },
    {
      "id": "claude-contract",
      "title": "Revisión de riesgos del contrato (documento largo)",
      "scenario": "Cargue el contrato en PDF, identifique las cláusulas de alto riesgo desde la perspectiva de la Parte B y proporcione sugerencias de negociación.",
      "structure": [
        "Role",
        "Tarea",
        "Estructura de salida",
        "Anotación de verificación"
      ],
      "prompt": "# Rol\nUsted es un asociado legal corporativo discreto que se especializa en adquisiciones de SaaS y revisiones de contratos de servicios de tecnología.\n\n#tarea\nRevise el texto completo del contrato que subí. Somos la Parte B (proveedor de servicios).\n\n#Salida\n## 1. Cláusulas de alto riesgo (Top 5)\nCada artículo contiene: Cita original del artículo | Nivel de riesgo (alto/medio/bajo) | Razones de riesgo | Modificaciones de redacción sugeridas\n\n## 2. Cláusulas de riesgo medio (3 cláusulas)\nMismo formato que el anterior\n\n## 3. Lista de prioridades de negociación\n| Ubicación de la cláusula | Riesgos | Negociable | Sugerencias |\n\n## 4. 3 preguntas que la Parte B debe confirmar\n\n#Restricciones\n- Las conclusiones jurídicas inciertas están marcadas como \"requiere confirmación por parte de un abogado humano\".\n- No inventes números de ley.\n- Por favor indique el número de capítulo/página al citar (si el PDF lo tiene)",
      "tips": "El contexto de Claude Long tiene ventajas obvias: cargar el contrato completo es más preciso que pegar fragmentos. No utilice cuentas públicas para contratos sensibles."
    },
    {
      "id": "kimi-annual-report",
      "title": "Resumen estructurado del informe/prospecto anual",
      "scenario": "Cargue más de 100 páginas de informes anuales en PDF para extraer rápidamente tendencias financieras, riesgos y declaraciones de gestión.",
      "structure": [
        "Tarea",
        "Alcance de los datos",
        "Esquema de salida",
        "Citación"
      ],
      "prompt": "Genere notas de análisis estructuradas basadas en el PDF del informe anual que cargué:\n\n## 1. Posicionamiento empresarial en una frase\n## 2. Tendencia de ingresos/beneficio neto en los últimos tres años (tabla, indicar unidad)\n## 3. 3 aspectos destacados + 3 riesgos en este número (sección/número de página para cada cita)\n## 4. Extractos de las declaraciones prospectivas de la administración (texto original + número de página)\n## 5. Lista de preguntas de los inversores (5 preguntas)\n\n#Reglas\n- Los números deben provenir de documentos; si falta, escriba \"no divulgado\"\n- No especular con datos financieros que no aparecen\n- La unidad de importe es coherente con el texto original (10.000 yuanes/100 millones de yuanes)",
      "tips": "Kimi es adecuado para todo el PDF; Las cifras financieras deben verificarse con el texto original, ya que la IA puede confundir fácilmente las unidades."
    },
    {
      "id": "deepseek-code-review",
      "title": "Revisión de código y sugerencias de refactorización.",
      "scenario": "Envíe el código del módulo y obtenga opiniones de revisión sobre seguridad, rendimiento y legibilidad.",
      "structure": [
        "Role",
        "bloque de código",
        "Revisar dimensiones",
        "Formato de salida"
      ],
      "prompt": "# Rol\nEres un ingeniero senior de Python centrado en la mantenibilidad y el manejo de límites.\n\n#tarea\nRevise el siguiente código y sugiera mejoras.\n\n```pitón\n[Pega tu código aquí]\n```\n\n# Revisar dimensiones\n1. **Corrección**: errores lógicos, condiciones de contorno, manejo de excepciones\n2. **Seguridad**: inyección, información sensible, permisos\n3. **Rendimiento**: cuello de botella obvio (acabo de señalarlo, no es necesario optimizarlo prematuramente)\n4. **Legibilidad**: denominación, longitud de la función, sugerencias de tipo\n\n#Salida\n- Lista de problemas (gravedad P0/P1/P2)\n- Ejemplo de código refactorizado (solo cambie las partes necesarias)\n- 2 sugerencias de casos de prueba de pytest",
      "tips": "DeepSeek es rentable y adecuado para la revisión diaria de código; es mejor adjuntar el contexto de la llamada y los registros de errores."
    },
    {
      "id": "cursor-feature",
      "title": "Modo agente: desarrollo de funciones de pila completa",
      "scenario": "Agregue un módulo funcional completo (colaboración de múltiples archivos) al proyecto existente.",
      "structure": [
        "Contexto",
        "Requisitos",
        "Criterios de aceptación",
        "Restricciones"
      ],
      "prompt": "Implemente la función \"Cambio de tema de usuario\" en el proyecto actual.\n\n## Situación actual\n- Pila de tecnología: HTML + CSS + JS nativo (una sola página)\n- Existente: encabezado, principal, diseño de pie de página\n\n## Requisitos\n1. Tema oscuro/claro, paleta de colores CSS basada en variables\n2. Cambiar el botón en el lado derecho del encabezado, la preferencia es guardar en el almacenamiento local.\n3. Sin parpadeos en la primera pantalla (lea localStorage antes de renderizar)\n4. Disponible en dispositivos móviles sin cambiar la estructura de diseño existente.\n\n## Criterios de aceptación\n- [ ] Después del cambio, el contraste de todo el texto alcanza el estándar.\n- [] Actualiza la página para mantener la selección.\n- [] Lista de archivos modificados\n- [ ] README instrucciones complementarias de uso\n\n## Restricciones\n- No se introdujeron nuevos marcos.\n- El código contiene comentarios en chino.\n- Instrucciones sobre cómo realizar la prueba localmente una vez finalizada.",
      "tips": "Cursor Agent primero permite programarlo y luego ejecutarlo; Los cambios importantes requieren instrucciones de confirmación paso a paso."
    },
    {
      "id": "copilot-comment-driven",
      "title": "Generación de funciones impulsadas por anotaciones",
      "scenario": "Utilice anotaciones de funciones claras para activar la finalización de Copilot de la lógica empresarial y las pruebas unitarias.",
      "structure": [
        "Comentario de especificación de función",
        "Ejemplos de entrada/salida",
        "Casos extremos"
      ],
      "prompt": "// Calcular el importe del descuento del pedido\n// Reglas: menos 10 por compras superiores a 100, menos 30 por compras superiores a 200, menos 80 por compras superiores a 500\n// Entrada: importe del pedido (número no negativo, unidad: yuan)\n// Salida: {original, descuento, final} son todos números, final >= 0\n// Límite: descuento de pedido de 0 yuanes = 0; la entrada negativa arroja un error\n// Ejemplo: calcDiscount(150) => { original: 150, descuento: 10, final: 140 }\nfunción calcDescuento(montodelpedido) {\n  // El copiloto completa desde aquí\n}",
      "tips": "Copilot responde de manera más estable a la anotación de cuatro elementos de \"entrada/salida/ejemplo/límite\"; los archivos de prueba se colocan en el mismo directorio."
    },
    {
      "id": "codex-cli-bugfix",
      "title": "Agente terminal: informe de errores y reparación de circuito cerrado",
      "scenario": "Calendario: los Estados miembros transpondrán sus leyes nacionales a finales de 2026",
      "structure": [
        "Registro de errores",
        "Pasos de reproducción",
        "Reparar requisitos",
        "Comando de prueba"
      ],
      "prompt": "Directorio del proyecto: ./my-api (Node.js + Express)\n\n## Pregunta\nLa ejecución de la prueba npm falla con el siguiente error:\n```\n[Pegar rastreo completo]\n```\n\n## Recurrencia\n1. instalación npm\n2. prueba npm\n\n## Requisitos\n1. Explique la causa raíz (chino)\n2. Corrija el código y mantenga el comportamiento de la API sin cambios.\n3. Complementar/actualizar pruebas para cubrir este límite\n4. Dar el comando de verificación.\n\n## Restricciones\n- No actualice las dependencias principales\n- Explicar qué archivos se cambiarán antes de la modificación.",
      "tips": "Codex CLI requiere la pila completa en lugar de la última línea; permite al Agente ejecutar comandos de prueba para verificación."
    },
    {
      "id": "bolt-prototype",
      "title": "Prototipos desplegables de generación de lenguaje natural.",
      "scenario": "Los no programadores o PM validan rápidamente ideas de productos y generan prototipos web con enlaces para compartir.",
      "structure": [
        "Visión del producto",
        "paginas",
        "Estilo",
        "Interacciones"
      ],
      "prompt": "Cree una aplicación web de una sola página \"Seguimiento del progreso del aprendizaje con IA\".\n\n## Páginas/secciones\n1. Héroe: título + resumen del camino de aprendizaje de 7 días\n2. Tarjetas de progreso: 4 fases (Aprender, Herramientas, Practicar, Repasar) con % completado\n3. Registro diario: área de texto para guardar notas (almacenamiento local)\n4. CTA de pie de página: Exportar notas como .txt\n\n## Estilo\n- Estética de tecnología oscura, acento verde azulado\n- Responsivo, móvil primero\n- Tipografía sans-serif limpia\n\n## Tecnología\n- React o vainilla: tú eliges\n- Sin backend; Solo almacenamiento local\n-Estructura lista para implementar",
      "tips": "Bolt describe la estructura de la página en inglés como más estable; itera \"objetivos de toque más grandes\" y \"colores más simples\" después de la generación."
    },
    {
      "id": "mj-product-shot",
      "title": "Imágenes de productos de comercio electrónico (palabras en inglés)",
      "scenario": "Genere imágenes de productos con escenas o fondo blanco para usar en páginas de detalles o creatividades publicitarias.",
      "structure": [
        "Sujeto",
        "Ambiente",
        "Iluminación",
        "Estilo",
        "Parámetros"
      ],
      "prompt": "foto de producto minimalista de auriculares inalámbricos en el estuche de carga,\nfondo transparente blanco puro, iluminación de softbox de estudio,\ncomposición centrada, sombra sutil debajo del producto,\nfotografía comercial ultranítida, detalle 4k,\nlimpiar espacio negativo para superposición de texto --ar 4:5 --style raw --v 6\n\nAviso negativo: texto, marca de agua, logotipo, borroso, deformado, objetos adicionales, fondo desordenado, manos",
      "tips": "Midjourney está principalmente en inglés; orden: tema → entorno → luz → estilo → --ar/--v. La composición del texto debe superponerse más adelante."
    },
    {
      "id": "dalle-article-cover",
      "title": "Imagen de portada del artículo (lenguaje natural)",
      "scenario": "Utilice DALL·E en ChatGPT para generar portadas de blogs/boletines informativos que admitan descripciones de escenas en chino.",
      "structure": [
        "Sujeto",
        "Ánimo",
        "Composición",
        "relación de aspecto"
      ],
      "prompt": "Utilice DALL·E para generar una imagen de portada de artículo:\n\nTema: Las personas en el lugar de trabajo utilizan la IA para mejorar la eficiencia (concepto abstracto, sin logotipos de marcas específicos)\nImagen: Un profesional utiliza una computadora portátil en una oficina moderna y luminosa, con un suave brillo azul verdoso en la pantalla y un patrón tenue de líneas de red neuronal en el fondo.\nEstilo: ilustración plana + ligera textura 3D, profesional, optimista, no caricaturesco\nComposición: Deje un 30% en blanco en el lado derecho para el texto del título.\nFormato: Horizontal 16:9, adecuado para imágenes de números públicos",
      "tips": "DALL·E entiende bien las escenas chinas; explica el espacio en blanco para evitar que el cuerpo principal bloquee el área del título."
    },
    {
      "id": "sd-ecommerce-white",
      "title": "Imagen del producto sobre fondo blanco (palabras positivas y negativas)",
      "scenario": "Genere por lotes imágenes principales de comercio electrónico de estilo unificado localmente/WebUI.",
      "structure": [
        "Aviso positivo",
        "mensaje negativo",
        "Configuración del muestreador"
      ],
      "prompt": "Positivo:\n(fotografía del producto: 1.3), termo inteligente, acabado blanco mate,\nfondo blanco transparente, iluminación de estudio, sombra de suelo suave,\ncentrado, enfoque nítido, estilo catálogo comercial, 8k uhd\n\nNegativo:\nbaja resolución, borroso, texto, marca de agua, logotipo, mala anatomía, dedos adicionales,\ndeformado, artefactos jpeg, desordenado, fondo colorido, gente\n\nSugerencia de configuración: Pasos 28–35, CFG 7–8, Tamaño 1024×1024 o 4:5",
      "tips": "SD utiliza sintaxis de peso (palabra clave: 1.2); La semilla fija puede unificar el estilo en lotes."
    },
    {
      "id": "kling-product-video",
      "title": "Vídeo corto de visualización del producto en pantalla vertical.",
      "scenario": "Genere entre 5 y 10 segundos de metraje envolvente del producto para Douyin/Xiaohongshu.",
      "structure": [
        "Tipo de disparo",
        "Acción del sujeto",
        "Iluminación",
        "Técnico"
      ],
      "prompt": "Pantalla vertical 9:16, un termo inteligente colocado sobre una sencilla mesa blanca.\nDisparo en órbita lentamente, el vapor se eleva ligeramente desde la boca de la taza,\nLuz natural suave, textura publicitaria comercial de alta gama, fondo limpio sin texto,\nEl producto siempre es claro y no borroso, con movimiento físico real, de 5 a 8 segundos.",
      "tips": "Ke Ling responde bien a la \"envoltura lenta\" y la \"textura de publicidad comercial\"; Los gráficos complejos se dividen en múltiples segmentos para generarlos y luego editarlos."
    },
    {
      "id": "runway-image-to-video",
      "title": "Vídeo de Tusheng: efectos de micromovimiento del producto",
      "scenario": "Convierta imágenes estáticas de productos en animaciones Hero de 4 segundos para páginas de destino o títulos de anuncios.",
      "structure": [
        "Descripción del movimiento",
        "Preservar tema",
        "Duración",
        "Calidad"
      ],
      "prompt": "Lento avance cinematográfico hacia el producto,\nprofundidad de paralaje sutil, el producto permanece nítido y sin distorsiones,\nluz de estudio suave con suave movimiento de sombra,\nsin artefactos de transformación o fusión, calidad de anuncio comercial,\n4 segundos, final compatible con bucles sin interrupciones",
      "tips": "Los vídeos gráficos deben tener pequeños movimientos; utilice la restricción \"el producto permanece afilado\" cuando los bordes del producto se deformen fácilmente."
    },
    {
      "id": "suno-bgm",
      "title": "Música de fondo de promoción de marca (música pura)",
      "scenario": "Genere una música de fondo sin letra de 30 a 60 segundos para un vídeo de lanzamiento de producto.",
      "structure": [
        "Género",
        "Ánimo",
        "Instrumentos",
        "BPM",
        "Caso de uso"
      ],
      "prompt": "Pista instrumental de tecnología corporativa optimista,\npads de sintetizador modernos y percusión ligera, optimista y limpia,\nsin voces, adecuado para video de lanzamiento de producto de IA,\n100–110 BPM, energía constante sin caídas dramáticas,\n30 a 45 segundos",
      "tips": "Suno define \"Instrumental + BPM + Escena\"; Genera un Extend de 2 pistas con un ritmo más estable."
    },
    {
      "id": "notion-meeting",
      "title": "Grabación/notas de reuniones → actas estructuradas",
      "scenario": "Organice notas sueltas de reuniones en un formato de actas que se puedan sincronizar con la gestión de proyectos.",
      "structure": [
        "Aporte",
        "Esquema de salida",
        "Asignación de propietario",
        "Normas"
      ],
      "prompt": "Organice las siguientes actas de reuniones originales en actas estructuradas:\n\n# Formato de salida\n## Información de la reunión\n- Tema, fecha, participantes.\n\n## Resoluciones clave (lista numerada)\n\n## Lista de tareas pendientes\n| Materia | Persona Responsable | Fecha límite | Prioridad |\n\n## Problemas abiertos\n\n## Sugerencias sobre temas para la próxima reunión\n\n# Reglas\n- No inventes cosas que no se hayan discutido.\n- Las tareas pendientes sin una persona responsable están marcadas como \"por designar\"\n- Si se desconoce la fecha, escriba \"por determinar\"\n\n---\n[Pegar actas de la reunión]",
      "tips": "Notion AI es adecuado para la clasificación secundaria; registrar palabras clave en tiempo real durante una reunión es más preciso que recuperarlas después."
    },
    {
      "id": "gamma-pitch",
      "title": "Esquema PPT del roadshow de 10 páginas",
      "scenario": "Ingrese un esquema comercial y genere rápidamente un primer borrador de diapositivas listas para la presentación.",
      "structure": [
        "Tema",
        "Audiencia",
        "Esquema de diapositiva",
        "estilo visual"
      ],
      "prompt": "Genere un PPT itinerante chino de 10 páginas:\n\nTema: Plataforma de aprendizaje de IA BestWayToLearn.AI\nPúblico: Líderes de formación corporativa / Formación y desarrollo de recursos humanos\n\nEstructura de la página:\n1. Portada 2. Punto débil 3. Solución 4. Demostración del producto 5. Ruta de aprendizaje\n6. Casos de clientes 7. Modelo de negocio 8. Diferenciación 9. Hitos 10. Información de contacto\n\nEstilo: estilo de tecnología oscura, de 3 a 5 viñetas por página, evite bloques grandes de texto\nDatos: primero puede utilizar el marcador de posición [X%] para marcar los datos reales que deben reemplazarse.",
      "tips": "Gamma requiere una estructura de página clara; después de la generación, reemplace los datos del marcador de posición e inserte capturas de pantalla del producto."
    },
    {
      "id": "copilot-excel",
      "title": "Análisis de datos y fórmulas de Excel.",
      "scenario": "Utilice Copilot dentro de Excel para analizar tablas de ventas y generar recomendaciones dinámicas.",
      "structure": [
        "Descripción de datos",
        "Preguntas",
        "Producción",
        "Fórmula"
      ],
      "prompt": "Tengo una tabla de datos de ventas con campos: fecha, región, SKU, cantidad, precio unitario e importe.\nPlazo: Últimos 12 meses.\n\nPor favor complete:\n1. Descripción general de las tendencias de ventas mensuales\n2. Cantidad de los 5 principales SKU y proporción\n3. Encuentre el mes con una caída anormal de las ventas y analice las posibles razones (basándose en datos, no en especulaciones)\n4. Sugerir 2 tipos de gráficos y definiciones de ejes.\n5. Dé un ejemplo de la fórmula de Excel para calcular el índice de cadena interanual.\n\nSi necesito seleccionar un rango de datos, indique qué columnas deben incluirse.",
      "tips": "Copilot selecciona el área de datos en Excel antes de hacer preguntas; preste atención al cumplimiento corporativo de datos financieros confidenciales."
    },
    {
      "id": "openclaw-cron-digest",
      "title": "Cron programó una sesión informativa para la industria",
      "scenario": "Las noticias de la industria se resumen automáticamente y se envían a Telegram/Slack las mañanas de los días laborables.",
      "structure": [
        "Cronograma",
        "Rol de agente",
        "Especificaciones de salida",
        "Canal"
      ],
      "prompt": "openclaw cron crear \"0 9 * * 1-5\" \\\n  --name \"Resumen diario de la industria de la IA\" \\\n  --tz \"Asia/Shanghái\" \\\n  --sesión aislada\\\n  --message \"Usted es un asistente de investigación de la industria. Resumen de desarrollos importantes en la industria de la IA en las últimas 24 horas:\n\n1) 3 titulares (1 oración cada uno + enlace de origen)\n2) Impacto en los desarrolladores\n3) Concéntrate hoy en 2 variables\n\nSalida en chino, dentro de 400 palabras. Cuando no haya una fuente confiable, escriba \"Aún no hay actualizaciones importantes\" y se prohibirá la fabricación.\nSe debe poder hacer clic en las cotizaciones. \"\\\n  --anunciar \\\n  --telegrama de canal \\\n  --a \"TU_CANAL_ID\"",
      "tips": "Primero, ejecute el cron de openclaw para realizar la prueba manualmente; escriba claramente la estructura de salida y prohíba la falsificación en el mensaje."
    },
    {
      "id": "coze-support-bot",
      "title": "Palabra de aviso del sistema de bot de servicio al cliente",
      "scenario": "Cree un bot de preguntas frecuentes sobre productos en Coze para unificar el tono y actualizar la estrategia.",
      "structure": [
        "Persona",
        "Alcance del conocimiento",
        "Formato de respuesta",
        "Escalada"
      ],
      "prompt": "# rol\nEres el asistente de aprendizaje oficial de \"BestWayToLearn.AI\", amigable, profesional y paciente.\n\n#Alcance del conocimiento\nÚnica respuesta: estructura del curso, ruta de aprendizaje, cuenta y progreso, problemas técnicos comunes.\nNo responda: consejos de inversión, temas médicos y legales, y temas no relacionados con productos.\n\n# Formato de respuesta\n1. Responda directamente en 1 oración primero\n2. Lista de pasos (si corresponde)\n3. Enlaces relacionados o \"Si necesita mano de obra, responda: Transferir a mano de obra\"\n\n# Restricciones\n- Cuando no esté seguro, diga \"No estoy seguro, le sugiero que se comunique con support@example.com\".\n- No inventes características ni precios.\n- Mantén tu tono conciso y evita exceder las 200 palabras.\n\n#Actualizar\nEl usuario preguntó \"Es inútil\" dos veces seguidas o involucró una disputa de pago → solicitar transferencia a orden de trabajo manual",
      "tips": "Conecte el documento de preguntas frecuentes a la base de conocimientos de Coze; el sistema indica que las palabras gestionan los límites y la base de conocimientos gestiona los hechos."
    },
    {
      "id": "dify-rag-agent",
      "title": "Base de conocimientos empresariales Preguntas y respuestas de RAG",
      "scenario": "Cree un agente de preguntas y respuestas basado en documentos internos y las respuestas deben contener fragmentos de referencia.",
      "structure": [
        "Certificación: Lanzamiento piloto voluntario de etiqueta de evaluación de terceros",
        "Reglas de recuperación",
        "Formato de cita",
        "Negativa"
      ],
      "prompt": "#Sistema\nEres el asistente de la base de conocimientos interna de la empresa. Respuestas basadas únicamente en fragmentos de documentos recuperados, sin depender de conocimientos previamente capacitados para elaborar políticas de la empresa.\n\n# Reglas de respuesta\n1. Primero dé una respuesta directa (2 a 4 oraciones)\n2. Sección \"Base\": indique el nombre del documento citado + resumen de los párrafos relevantes\n3. Si los resultados de la búsqueda no son suficientes para responder la pregunta, responda: \"Las regulaciones relevantes no se encuentran en la base de conocimientos actual. Se recomienda comunicarse con [departamento] o enviar una orden de trabajo\".\n\n# formato\n- Usar rebajas\n- Formato de cita: [Nombre del documento § Capítulo]\n- Las fechas/números involucrados deben ser consistentes con el texto original.\n\n# Prohibido\n- Especular políticas que no están escritas en la base de conocimientos.\n- Dar una conclusión final sobre legalidad/cumplimiento.",
      "tips": "Se recomienda que la segmentación de la base de conocimientos de Dify sea de 500 a 800 palabras por bloque; el conjunto de prueba está preparado con 20 preguntas reales de empleados para su aceptación."
    },
    {
      "id": "perplexity-competitor",
      "title": "Investigación de mercado y productos competitivos en una sola página",
      "scenario": "Obtenga rápidamente comparaciones de productos competitivos con referencias para discusiones internas o reuniones de selección.",
      "structure": [
        "Alcance",
        "Dimensiones de comparación",
        "Producción",
        "Reglas fuente"
      ],
      "prompt": "Investigue el mercado de \"IDE de programación de IA\" en 2026, centrándose en comparar Cursor, Windsurf y GitHub Copilot.\n\nPor favor envíe una página en chino:\n1. Descripción general del mercado (2 párrafos)\n2. Tabla comparativa: posicionamiento | precios | diferencias fundamentales | usuarios objetivo\n3. 3 sugerencias de selección (por tipo de usuario)\n4. Todas las conclusiones clave van acompañadas de números de referencia y enlaces a fuentes.\n\nReglas: El precio está sujeto al sitio web oficial; los datos sin fuentes oficiales están marcados como \"por verificar\".",
      "tips": "La ventaja de Perplexity radica en la cita; Los precios y las funciones aún deben confirmarse en el sitio web oficial."
    },
    {
      "id": "notebooklm-papers",
      "title": "Cargue más de 100 páginas de informes anuales en PDF para extraer rápidamente tendencias financieras, riesgos y declaraciones de gestión.",
      "scenario": "Cargue 3 artículos relacionados y genere una tabla comparativa y sugerencias de orden de lectura.",
      "structure": [
        "Cargar alcance",
        "Campos de comparación",
        "Recomendación",
        "Límites"
      ],
      "prompt": "(Enviar después de cargar 3 archivos PDF)\n\nCompare estos tres artículos y sus resultados:\n\n## Tabla comparativa\n| Tesis | Preguntas de investigación | Conjunto de datos | Métodos | Principales conclusiones | Limitaciones |\n\n## Similitudes y diferencias en métodos (300 palabras)\n\n## Orden de lectura sugerido para principiantes\nExplica qué artículo leer primero y por qué.\n\n## 3 preguntas de investigación para hacer\n\nReglas: Basado únicamente en los documentos cargados, los resultados experimentales que no aparezcan no se complementarán.",
      "tips": "NotebookLM es una carga de contenido de sólo lectura; para citas académicas, consulte el DOI original."
    },
    {
      "id": "metaso-academic",
      "title": "Punto de partida para la revisión de la literatura sobre el modelo académico.",
      "scenario": "Utilice el modo de búsqueda académica para localizar rápidamente artículos básicos y revisar entradas en el campo.",
      "structure": [
        "Pregunta de investigación",
        "Rango de tiempo",
        "Producción",
        "Próximos pasos"
      ],
      "prompt": "Utilice el modo de búsqueda académica:\n\nPregunta de investigación: ¿Cuáles son los métodos para evaluar la confiabilidad de modelos de lenguaje grandes en la generación de código?\nPlazo: 2023-2026\nIdioma: Se aceptan fuentes académicas tanto en chino como en inglés.\n\nPor favor envíe:\n1. 5 artículos muy citados en este campo (título, autor, año, contribución de una frase)\n2. Recomendación de 2 artículos de revisión/investigación\n3. Nombres y definiciones de 3 indicadores de evaluación comúnmente utilizados\n4. Palabras clave de búsqueda adicionales sugeridas (chino e inglés)\n\nCada artículo tiene una fuente en la que se puede hacer clic. Si no se encuentra, se indicará claramente.",
      "tips": "El modo académico de la torre secreta es adecuado para usuarios chinos; para artículos importantes, se recomienda realizar una verificación cruzada de las citas en Google Scholar."
    },
    {
      "id": "gemini-lesson-plan",
      "title": "Generación de plan de aprendizaje de IA de 7 días",
      "scenario": "Límite aplicable: adecuado para corrección de errores, pruebas y sincronización de documentos; Todavía se recomienda la refactorización manual a nivel de arquitectura.",
      "structure": [
        "Perfil",
        "Meta",
        "Restricciones",
        "Producción"
      ],
      "prompt": "# Perfil\nLos trabajadores de oficina pueden estudiar 45 minutos al día sin ningún conocimiento básico.\n\n#Objetivo\nDominalo en 7 días: Conversación básica ChatGPT + Cursor para escribir una pequeña página web.\n\n#Restricciones\n- ≤ 3 tareas por día, cada tarea se puede completar en 15 minutos\n- No se requieren matemáticas/ensayo\n- producción china\n\n#Salida\nSalida por día: Objetivos de aprendizaje | Tareas específicas | Criterios de aceptación | Tipos de enlaces de herramientas recomendados",
      "tips": "Haga que los \"criterios de aceptación\" sean específicos y evite que la IA genere una lista de tareas vaga."
    },
    {
      "id": "grok-news-brief",
      "title": "Una descripción general rápida de las publicaciones más destacadas sobre IA de la plataforma X",
      "scenario": "Un breve resumen de los temas candentes y las controversias actuales en el campo de la IA en X.",
      "structure": [
        "Alcance",
        "Tiempo",
        "Producción",
        "Neutralidad"
      ],
      "prompt": "Resumen de discusiones populares relacionadas con AI/LLM/Agent en la plataforma X en las últimas 24 horas:\n\n1. 5 temas más candentes (resumen de 2 oraciones cada uno)\n2. Comparación de 2 puntos de vista controvertidos (1 oración para cada lado)\n3. 1 sugerencia de tipo de enlace que vale la pena seguir\n\nReglas: marcar la incertidumbre; no inventes un número específico de Me gusta; producción en chino.",
      "tips": "Grok puede acceder a datos X en tiempo real; Aún así se recomienda hacer clic en el texto original para comprobarlo antes de publicarlo."
    },
    {
      "id": "doubao-study-buddy",
      "title": "Explicación del concepto + cuestionario",
      "scenario": "Al aprender un concepto nuevo, explícalo primero y luego haz 3 preguntas para consolidarlo.",
      "structure": [
        "Concepto",
        "Audiencia",
        "Enseña y luego prueba",
        "Comentario"
      ],
      "prompt": "Quiero aprender \"RAG (Generación Aumentada de Recuperación)\".\n\nPor favor:\n1. Utilice analogías para explicar los conceptos básicos (≤200 palabras)\n2. Da un ejemplo realista\n3. Haga 3 preguntas de opción múltiple (con respuestas y análisis)\n4. Si me equivoco en la respuesta, inténtalo de nuevo en un lenguaje más sencillo.\n\nTono: paciente, chino, sin jerga.",
      "tips": "Publique las respuestas a las preguntas equivocadas y deje que Doubao aborde los puntos débiles de manera específica."
    },
    {
      "id": "windsurf-cascade-refactor",
      "title": "Reconstrucción en cascada de archivos cruzados",
      "scenario": "Cambie el nombre de las API de manera uniforme y actualice las personas que llaman en proyectos de varios archivos.",
      "structure": [
        "Alcance",
        "Planifique primero",
        "Seguridad",
        "Verificación"
      ],
      "prompt": "Cambie el nombre de `fetchUserProfile` a `getUserProfile` en el repositorio actual:\n\n1. Primero enumere los documentos que se cambiarán y los riesgos.\n2. Luego realice el cambio de nombre (incluida la importación/exportación)\n3. Actualizar pruebas relacionadas y definiciones de tipos.\n4. Ejecute la prueba e informe los resultados.\n\nRestricciones: no cambiar la lógica irrelevante; Explique el rango de diferencia en cada paso.",
      "tips": "Windsurf Memory.md se puede escribir en la \"Convención de nomenclatura API de este proyecto\" para evitar explicaciones repetidas."
    },
    {
      "id": "replit-fullstack",
      "title": "Aplicación Todo de pila completa de Replit Agent",
      "scenario": "Genere e implemente una aplicación Todo con front-end y back-end separados desde cero.",
      "structure": [
        "Pila",
        "Características",
        "API",
        "Desplegar"
      ],
      "prompt": "Cree Todo API con Node.js + Express + SQLite, interfaz React:\n\nFunciones: Agregar, eliminar, modificar, verificar, estado de finalización, filtrar por fecha\nUI: simple y oscura, compatible con dispositivos móviles\n\nEntrega:\n- API REST de backend + página de inicio\n- descripción del script package.json\n- Repit pasos de implementación\n- anotación china",
      "tips": "Deje que el Agente solo genere la API primero y luego genere la interfaz después de la aceptación, para que el margen de error sea menor."
    },
    {
      "id": "claude-code-terminal",
      "title": "Solución de problemas de terminales: análisis de fallas de CI",
      "scenario": "Pegue el registro de CI, ubique la causa de la falla y proporcione un plan de relaciones públicas para solucionarlo.",
      "structure": [
        "Pegar registro",
        "Habilidades de documentos antrópicos a nivel de producción: edición DOCX, análisis de PDF, diapositivas PPTX, tablas XLSX y tienen el mismo origen que las capacidades de documentos de Claude.",
        "plan de arreglo",
        "Prueba"
      ],
      "prompt": "Aquí está el registro de fallas de GitHub Actions:\n\n```\n[Pegar registro de CI]\n```\n\nPor favor:\n1. Indique la causa raíz más probable (3 elementos en orden de probabilidad)\n2. Dar ideas para diferencias mínimas de reparación.\n3. Comando de reproducción local recomendado\n4. Si necesita cambiar la prueba, explique el motivo.\n\nNo refactorices extensamente.",
      "tips": "80 líneas antes y después del paso fallido de interceptación del registro son suficientes. Si es demasiado largo, interferirá con el juicio."
    },
    {
      "id": "flux-product-photo",
      "title": "Filmación en estudio de productos de comercio electrónico Flux",
      "scenario": "Genere imágenes de productos con fondo blanco para imágenes principales o primeros borradores de creatividades publicitarias.",
      "structure": [
        "Sujeto",
        "Iluminación",
        "Fondo",
        "Técnico"
      ],
      "prompt": "Fotografía de producto profesional, auriculares inalámbricos Bluetooth en estuche de carga, fondo blanco puro sin costuras, iluminación suave de estudio, sombra de fondo sutil, composición centrada, estilo de comercio electrónico comercial ultranítido, sin texto, sin marca de agua. --ar 1:1",
      "tips": "Los detalles del producto están sujetos a fotografías reales; Las imágenes de IA son adecuadas para la composición y la referencia de luces y sombras."
    },
    {
      "id": "ideogram-poster-text",
      "title": "Diseño del título del cartel del ideograma.",
      "scenario": "Genere carteles de eventos con títulos chinos precisos.",
      "structure": [
        "Copiar",
        "Disposición",
        "Estilo",
        "Negativo"
      ],
      "prompt": "póster del evento, texto del título exactamente: \"AI Learner Conference 2026\", subtítulo: \"Campamento práctico de 7 días\", estilo de conferencia de tecnología moderna, verde azulado y azul marino oscuro, tipografía sans-serif en negrita, diseño limpio, alta legibilidad, sin texto aleatorio adicional",
      "tips": "La representación del texto del ideograma es sólida; Aún así, revisa si hay errores tipográficos y caracteres adicionales."
    },
    {
      "id": "chatgpt-image-restyle",
      "title": "Migración de estilo de imagen ChatGPT",
      "scenario": "Sube fotos y conviértelas en estilos de ilustración/acuarela para avatares o ilustraciones.",
      "structure": [
        "Subir",
        "Objetivo de estilo",
        "mantener la identidad",
        "Producción"
      ],
      "prompt": "Convierta las fotos cargadas al estilo de ilustración vectorial plana:\n- Preservar características reconocibles de los personajes.\n-Color color: verde + azul oscuro\n- Fondo de color sólido simplificado\n- Adecuado para usar como avatar de sitio web\n- No agregues texto",
      "tips": "Paso a paso: \"Simplificar el fondo\" primero y luego \"Cambiar el estilo de la ilustración\" es más estable que hacerlo todo bien de una vez."
    },
    {
      "id": "leonardo-ip-series",
      "title": "Imágenes de la serie de personajes de Leonardo.",
      "scenario": "mantener la identidad",
      "structure": [
        "Referencia",
        "Escenas",
        "Paleta",
        "Consistencia"
      ],
      "prompt": "mascota de vector plano \"maestro robot azul\", escenas: pizarra en el aula, escritorio de lectura, aprobación, diseño de personajes consistente, paleta blanca y verde azulada, expresión amigable, sin texto, referencia de personaje habilitada",
      "tips": "Después de cargar 4 imágenes de referencia y abrir Character Reference, la coherencia mejora significativamente."
    },
    {
      "id": "capcut-script-to-video",
      "title": "Guión gráfico de CapCut AI",
      "scenario": "Divida el guión del tutorial en guiones gráficos y líneas de tiempo de subtítulos.",
      "structure": [
        "Guion",
        "Lista de tiros",
        "Duración",
        "Subtítulos"
      ],
      "prompt": "Divida el siguiente guión del tutorial de 60 segundos en un guión gráfico de CapCut:\n\n| Número de espejo | Descripción de la pantalla | Subtítulos de la narración | Duración (segundos) |\n\nGuión:\n[Pegar guión]\n\nRequisitos: 3-8 segundos por disparo; subtítulos de palabras habladas; Se recomienda un rollo B marcado.",
      "tips": "Después de la generación, use \"Imagen a película\" en CapCut o alinee manualmente la línea de tiempo."
    },
    {
      "id": "pika-extend-clip",
      "title": "Extensión y bucle de vídeo de Pika",
      "scenario": "Amplíe 3 segundos de metraje en un vídeo de fondo en bucle de 8 segundos.",
      "structure": [
        "Fuente",
        "Movimiento",
        "Bucle",
        "Calidad"
      ],
      "prompt": "extienda el video suavemente, presione sutilmente la cámara, mantenga al sujeto centrado, bucle continuo para el fondo del héroe del sitio web, iluminación cinematográfica, sin parpadeo, 8 segundos",
      "tips": "La extensión no debe ser demasiado grande; Elija una lente con pequeño movimiento para el fondo en bucle."
    },
    {
      "id": "elevenlabs-voiceover",
      "title": "Narración del tutorial de ElevenLabs",
      "scenario": "Convierta documentos tutoriales en audio de narración china natural.",
      "structure": [
        "personaje de voz",
        "ritmo",
        "Pronunciación",
        "Producción"
      ],
      "prompt": "Voz: narrador cálido y profesional en mandarín, ritmo medio, enunciación clara.\n\nLea el siguiente guión del tutorial de forma natural. Pausa de 0,5 segundos en los saltos de párrafo. Enfatice ligeramente los nombres de las herramientas.\n\n[Pegar guión]",
      "tips": "Los términos profesionales pueden ir acompañados de una línea de \"sugerencia de pronunciación\" para reducir los errores de pronunciación TTS."
    },
    {
      "id": "heygen-avatar-intro",
      "title": "Inauguración del curso Humano Digital HeyGen",
      "scenario": "Genere un vídeo de introducción al curso de 30 segundos con un ser humano digital.",
      "structure": [
        "Avatar",
        "Guion",
        "Tono",
        "llamada a la acción"
      ],
      "prompt": "Guión (años 30, mandarín):\n\nHola a todos, bienvenidos al \"Campamento práctico de herramientas de IA de 7 días\".\nSoy tu guía de estudio.\nEsta semana aprenderá: usar ChatGPT para escribir textos, usar el cursor para crear páginas web y usar la automatización para ahorrar tiempo.\nAhora, para la lección uno: ¿estás listo?\n\nTono: amigable, confiado, leve sonrisa. Sin exageraciones de ventas.",
      "tips": "El guión se controla entre 80 y 100 palabras/30 segundos; ajuste las marcas de pausa después de la vista previa."
    },
    {
      "id": "feishu-competitor-table",
      "title": "Tabla comparativa de productos competitivos de Feishu AI",
      "scenario": "Genere una tabla multidimensional compartible de comparaciones de productos competitivos a partir de viñetas.",
      "structure": [
        "balas",
        "columnas",
        "Manejo desconocido",
        "Fecha"
      ],
      "prompt": "Genere una tabla comparativa de productos competitivos (tabla Markdown) basada en los siguientes puntos:\n\nDimensiones: Función | Precio | Soporte chino | Método de implementación | Observaciones\nProductos de la competencia: Cursor, Windsurf, Copilot\n\nPuntos clave:\n[Pegar viñetas]\n\nPara información faltante, complete \"para ser verificado\"; indicar \"a partir de 2026-07\" en el encabezado",
      "tips": "Después de la generación, péguelo en la tabla multidimensional de Feishu para facilitar las actualizaciones colaborativas por parte del equipo."
    },
    {
      "id": "slack-standup",
      "title": "Pulido diario de Slack AI",
      "scenario": "Organice viñetas aproximadas en mensajes en formato stand-up de equipo.",
      "structure": [
        "Notas crudas",
        "Formato",
        "Bloqueadores",
        "Tono"
      ],
      "prompt": "Organice los siguientes registros de trabajo en mensajes de Slack Standup (chino):\n\nFormato:\n✅ Completado ayer\n🎯 El plan de hoy\n🚧 Bloqueado/necesita ayuda\n\nRegistro original:\n[Pegar notas]\n\nTono: Conciso y escaneable; no más de 150 palabras.",
      "tips": "Pegue en la barra lateral de Slack AI; Recuerde @ a la persona responsable de los artículos bloqueados."
    },
    {
      "id": "google-docs-gemini",
      "title": "Actas de reuniones de Google Docs Gemini",
      "scenario": "Genere una versión adjunta de correo electrónico de actas formales a partir de los aspectos más destacados de la reunión.",
      "structure": [
        "Asistentes",
        "Notas",
        "Decisiones",
        "Comportamiento"
      ],
      "prompt": "Generar actas formales basadas en los siguientes puntos de encuentro:\n\nParticipantes: Producto, Ingeniería, Operaciones.\n\nPuntos clave:\n[Pegar notas]\n\nSalida:\n1. Información de la reunión (hora/tema)\n2. Resumen de la discusión (3-5 viñetas)\n3. La resolución importa\n4. Lista de elementos de acción (persona responsable | tarea | DDL)\n\nNo inventes cosas que no se discutieron.",
      "tips": "Gemini en Docs puede seleccionar directamente puntos clave para generar; Los elementos de acción deben asignarse a las personas."
    },
    {
      "id": "linear-backlog-groom",
      "title": "Pila de combinación de IA lineal",
      "scenario": "Organice una lista compleja de requisitos en problemas que se puedan programar.",
      "structure": [
        "Lista de entrada",
        "deduplicación",
        "Aceptación",
        "Prioridad"
      ],
      "prompt": "Organice los siguientes requisitos en un borrador de problema lineal (matriz JSON):\n\nCampos: título, descripción, criterios de aceptación[], prioridad(P0-2), etiquetas[]\n\nLista de requisitos:\n[Pegar lista]\n\nReglas: fusionar duplicados; las descripciones incluyen historias de usuarios; Los criterios de aceptación son comprobables.",
      "tips": "Antes de importar, verifique manualmente si hay demasiados P0 para evitar la sobrecarga de Sprint."
    },
    {
      "id": "make-rss-slack",
      "title": "Hacer: RSS → Feed → Slack",
      "scenario": "Cree un canal automatizado y envíe automáticamente resúmenes de canales para nuevos artículos.",
      "structure": [
        "Desencadenar",
        "Filtrar",
        "Resumir",
        "Notificar"
      ],
      "prompt": "Eres el arquitecto de la automatización. Diseña la escena Make:\n\nActivador: RSS Nuevas entradas\nPasos: Eliminar duplicados → Resumen en chino de 80 palabras de OpenAI → Publicar en Slack #ai-news\n\nPor favor envíe:\n1. Lista de módulos\n2. Mapeo de campos clave de cada módulo\n3. Pasos de prueba\n4. Fallos comunes y solución de problemas",
      "tips": "Primero use 1 fuente RSS para realizar la prueba; el módulo OpenAI agrega la restricción \"enlace de texto original adjunto\"."
    },
    {
      "id": "n8n-release-notes",
      "title": "Infraestructura de navegador sin cabeza en la nube, el Agente realiza tareas complejas de páginas web en navegadores remotos sin Chrome local.",
      "scenario": "Se activa la versión de GitHub y se genera un borrador de publicación de actualización en chino.",
      "structure": [
        "Desencadenar",
        "Transformar",
        "Borrador",
        "Puerta de revisión"
      ],
      "prompt": "Diseño de flujo de trabajo n8n: Lanzamiento de GitHub → Extraer registro de cambios → GPT genera tweets en chino (≤280 palabras) → Escribir noción para revisión\n\nInstrucciones de configuración del nodo de salida + plantilla de texto de aviso:\n\"Escribe una publicación de actualización basada en el registro de cambios: título + 3 puntos clave + enlace, sin exagerar\"",
      "tips": "Agregue un nodo de aprobación manual antes de publicar para evitar emitir automáticamente el número de versión incorrecto."
    },
    {
      "id": "cursor-mcp-issue",
      "title": "Problema de corrección de cursor + GitHub MCP",
      "scenario": "Consulta problemas, modifica código y abre relaciones públicas en la conversación del Agente.",
      "structure": [
        "contexto de MCP",
        "ID del problema",
        "Arreglar alcance",
        "plantilla de relaciones públicas"
      ],
      "prompt": "Usando GitHub MCP:\n1. Lea la descripción y los comentarios del número 128.\n2. Analice las causas fundamentales y enumere los archivos modificados.\n3. Cree la rama fix/128 y envíe la solución mínima.\n4. Abra PR, el texto contiene: problema|solución|prueba|cerrar #128\n\nNo modifique archivos irrelevantes.",
      "tips": "Primero configure el token de GitHub en mcp.json; ejecute la prueba localmente antes de PR."
    },
    {
      "id": "zapier-lead-score",
      "title": "Puntuación de líderes de IA de Zapier",
      "scenario": "Los nuevos clientes potenciales del formulario se califican y enrutan automáticamente a diferentes canales de Slack.",
      "structure": [
        "Campos de formulario",
        "Rúbrica de puntuación",
        "Enrutamiento",
        "Revisión humana"
      ],
      "prompt": "Palabras clave de Zapier Central:\n\nCalifique los clientes potenciales del 1 al 5 según los campos del formulario:\n- presupuesto, cronograma, tamaño de la empresa, caso de uso\n\nJSON de salida: {puntuación, motivo, ruta: \"ventas\"|\"nutrición\"}\n\nReglas: motivo ≤50 palabras; puntuación = 3 cuando no está seguro.",
      "tips": "Todavía se recomienda que el departamento de ventas confirme manualmente los clientes potenciales con puntuación alta antes de copiarlos a CRM."
    },
    {
      "id": "gemini-deep-research-prompt",
      "title": "Escaneo de la industria de investigación profunda de Gemini",
      "scenario": "Sugerencias de implementación: Priorizar la realización de pruebas piloto en los dos escenarios de alta frecuencia de \"Recopilación de informes semanales\" y \"Minutos de clientes\". El ROI es el más fácil de cuantificar. Los estudiantes de IA pueden utilizar esto para actualizar su mapa de herramientas personal y su lista de obstáculos, y completar una operación práctica a pequeña escala o un intercambio interno en una semana.",
      "structure": [
        "Pregunta",
        "Alcance",
        "Secciones de salida",
        "Citación"
      ],
      "prompt": "Tema de investigación: 5 tendencias principales en la adopción empresarial de agentes de IA en 2026\n\nAlcance: 2025-2026 informes públicos, artículos, blogs de fabricantes\n\nSalida:\n1. Resumen ejecutivo (200 palabras)\n2. Cinco tendencias (cada una: descripción | evidencia | caso representativo)\n3. 3 sugerencias de acción para las PYMES\n4. Lista de referencias (título + enlace + fecha)\n\nEstá prohibido fabricar fuentes.",
      "tips": "La investigación profunda tarda entre 5 y 15 minutos; haga clic para verificar las citas antes de publicar."
    },
    {
      "id": "chatgpt-browse-factcheck",
      "title": "Verificación de datos del modo de navegación ChatGPT",
      "scenario": "Compruebe que las cifras clave y las referencias de un artículo sean precisas.",
      "structure": [
        "Lista de reclamaciones",
        "Verificar cada",
        "Veredicto",
        "Fuentes"
      ],
      "prompt": "Navegue por la página web y verifique las siguientes declaraciones (una por una):\n\n[Pegue de 3 a 5 reclamos con URL, si corresponde]\n\nCada salida:\n-Declaración original\n- Conclusión de la verificación: ✅Precisa / ⚠️Parcialmente precisa / ❌Inexacta / ❓No verificable\n- Basado en el enlace fuente\n- Redacción correcta (si es necesario)",
      "tips": "No marque más de 5 artículos a la vez; Dar prioridad a las fuentes primarias (sitios web oficiales, artículos)."
    },
    {
      "id": "metaso-industry-scan",
      "title": "Una descripción general rápida de la industria de las torres secretas (se prefieren las fuentes chinas)",
      "scenario": "Comprenda rápidamente la cadena industrial y los actores clave de una industria desconocida.",
      "structure": [
        "Industria",
        "Preguntas",
        "Producción",
        "Tipo de fuente"
      ],
      "prompt": "Industria: plataforma de aprendizaje de IA/educación en línea (dirección de IA)\n\nPor favor responda con fuente china:\n1. Tres tipos de actores en los tramos superior, medio e inferior de la cadena industrial\n2. Diferencias nacionales vs extranjeras (2 puntos cada una)\n3. 3 tendencias de modelos de negocio en 2026\n4. 3 oportunidades para nuevos participantes\n\nSe adjuntan enlaces a fuentes; se anota cualquier incertidumbre.",
      "tips": "Secret Tower es adecuado para informes de la industria china; Los ratios se pueden comprobar hasta el texto original."
    },
    {
      "id": "perplexity-source-audit",
      "title": "Auditoría de calidad de citas de perplejidad",
      "scenario": "Evalúe si las citas en las respuestas de la encuesta son autorizadas y están desactualizadas.",
      "structure": [
        "Pegar respuesta",
        "Proyecto Operación Supabase: gestión de tablas, ejecución de SQL, Edge Functions y almacenamiento, herramienta de desarrollo full stack.",
        "Reemplazar débil",
        "Resumen"
      ],
      "prompt": "Audite la calidad de las citas de las siguientes respuestas a la encuesta de Perplejidad:\n\n[Pegar respuesta]\n\nEvaluado por citación:\n- Autoridad (alta/media/baja)\n- Puntualidad (año)\n- ¿Está directamente relacionado con la conclusión?\n\nSalida:\n1. Referencias débiles que deberían eliminarse\n2. Palabras clave de búsqueda adicionales sugeridas\n3. Conclusión revisada (si hay cambios)",
      "tips": "Las conclusiones sobre precios deben basarse en la página actual del sitio web oficial, ya que las fuentes de segunda mano quedan fácilmente desactualizadas."
    },
    {
      "id": "claude-skill-author",
      "title": "Habilidad del agente de redacción de Claude (SKILL.md)",
      "scenario": "Convierta los SOP del equipo en archivos SKILL.md que cumplan con las especificaciones.",
      "structure": [
        "Entrada del POE",
        "Esquema SKILL.md",
        "Pista instrumental de tecnología corporativa optimista,\npads de sintetizador modernos y percusión ligera, optimista y limpia,\nsin voces, adecuado para video de lanzamiento de producto de IA,\n100–110 BPM, energía constante sin caídas dramáticas,\n30 a 45 segundos",
        "Validación"
      ],
      "prompt": "Convierta el siguiente SOP del equipo a la especificación de habilidades del agente SKILL.md:\n\nPOE:\n[Pegar POE]\n\nGenere el SKILL.md completo, que incluye:\n---\nnombre:\ndescripción:\n---\n\n# pasos\n# Ejemplo de entrada/salida\n# Restricciones y manejo de fallas\n\nSiga el formato de agenteskills.io; La descripción especifica cuándo activar.",
      "tips": "Después de usar `npx skills init` para generar el esqueleto, deje que Claude complete el contenido de manera más eficiente."
    }
  ]
});
})();
