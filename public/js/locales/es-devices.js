/* ES overlays — devices */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('es', {
    deviceOsCompare: {
        windows: {
          title: "La más amplia compatibilidad y el ecosistema de IA local más maduro",
          tagline: "La más amplia compatibilidad y el ecosistema de IA local más maduro",
          chooseWhen: [
            "Juegas juegos AAA y quieres experimentos de IA en la misma máquina",
            "El trabajo o la escuela se ejecuta en Office, CAD o software industrial de Windows",
            "Quiere crear una computadora de escritorio y actualizar la RAM y la GPU con el tiempo",
            "Juegas juegos AAA y quieres experimentos de IA en la misma máquina",
            "Confías en la cadena de herramientas CUDA (entrenamiento, inferencia, marcos de desarrollo)"
          ],
          avoidWhen: [
            "Principalmente envías aplicaciones iOS/macOS (aún necesitas una Mac para las compilaciones finales)",
            "Dependes de aplicaciones exclusivas de Apple como Final Cut Pro o Logic Pro",
            "Priorizas el silencio, la duración de la batería y una experiencia móvil pulida"
          ],
          aiNote: "Ollama, LM Studio y Stable Diffusion WebUI tienen la mayor cantidad de tutoriales y los controladores más fluidos en Windows. Las tarjetas RTX son la elección económica para la IA local."
        },
        macos: {
          title: "macos",
          tagline: "Experiencia refinada, ecosistema Apple perfecto, memoria unificada para modelos locales más livianos",
          chooseWhen: [
            "Ya usas iPhone/iPad y quieres AirDrop, Handoff e iCloud en un solo flujo",
            "Desarrollas iOS/macOS o editas vídeo en Final Cut Pro",
            "Utiliza principalmente IA en la nube más modelos locales ligeros (por ejemplo, Ollama 7B quant)",
            "Quiere problemas mínimos para el conductor y una verdadera configuración de aprendizaje lista para usar",
            "Quiere problemas mínimos para el conductor y una verdadera configuración de aprendizaje lista para usar"
          ],
          avoidWhen: [
            "Quiere modelos locales de más de 30 mil millones o capacitación LoRA (el costo de la memoria es alto)",
            "Quiere modelos locales de más de 30 mil millones o capacitación LoRA (el costo de la memoria es alto)",
            "El presupuesto es ajustado pero necesita una alta capacidad informática (las GPU de Windows rinden más por dólar)",
            "Depende de un software profesional exclusivo para Windows"
          ],
          aiNote: "No recomendado"
        }
      },
      deviceMemoryTiers: [
        {
          level: "No recomendado",
          suitable: "La IA en la nube apenas se puede utilizar; Chrome + ChatGPT con muchas pestañas tartamudeará",
          aiUse: "La IA en la nube apenas se puede utilizar; Chrome + ChatGPT con muchas pestañas tartamudeará",
          verdict: "El límite mínimo de 2026 para el aprendizaje de la IA ya no es suficiente. Compre al menos 16 GB; no compre máquinas nuevas de 8 GB."
        },
        {
          level: "Estándar de entrada",
          suitable: "IA en la nube como camino principal, escritura en la oficina y codificación ligera",
          aiUse: "El buen comienzo para la mayoría de los estudiantes: no se necesita una GPU discreta para aproximadamente el 90 % de este sitio.",
          verdict: "El buen comienzo para la mayoría de los estudiantes: no se necesita una GPU discreta para aproximadamente el 90 % de este sitio."
        },
        {
          level: "Altamente recomendado",
          suitable: "Codificación asistida por IA, múltiples proyectos, modelos locales 7B-13B",
          aiUse: "Cursor + navegador + modelo local juntos sin esfuerzo; 13B cuantificado es viable",
          verdict: "Si se toma en serio la IA y los proyectos reales, 32 GB es la opción “sin arrepentimientos” de mayor valor."
        },
        {
          level: "Entrada profesional",
          platform: "MacBook Pro M3 Max · Estación de trabajo Windows",
          suitable: "Desarrollo intensivo, edición 4K, ~30 mil millones de modelos locales, múltiples máquinas virtuales",
          aiUse: "Inferencia cuantitativa 34B, ComfyUI + Cursor juntos, muchos servicios Docker en paralelo",
          verdict: "El punto de partida profesional. La memoria unificada de 64 GB de Mac se comporta como una computadora portátil con VRAM grande; Los escritorios de Windows pueden ampliarse posteriormente a 128 GB."
        },
        {
          level: "Estación de trabajo emblemática",
          platform: "Mac Studio M2/M3 Ultra · estación de trabajo Windows de gama alta",
          suitable: "Modelos locales de clase 70B, largo trabajo de video de IA, muchos proyectos paralelos, entornos de desarrollo de equipos pequeños",
          aiUse: "Inferencia cuantitativa de 70 mil millones, LLM multimodales, generación de imágenes/vídeo por lotes, 2 o 3 modelos de tamaño mediano a la vez",
          verdict: "El punto óptimo de memoria unificada de 128 GB de Apple (Studio Ultra). Para personas que tratan la IA como una producción, no como un juguete."
        },
        {
          level: "Creativo de primer nivel",
          platform: "Mac Studio / Mac Pro (BTO) · Estación de trabajo Threadripper",
          suitable: "Experimentos de contexto muy largos, cambio de modelo, metraje de 8K + efectos de IA, grupos de bases de conocimientos locales",
          aiUse: "70 mil millones de modelos cuantitativos más pesados ​​+ integración + flujos de trabajo SD/FLUX juntos: una máquina para un estudio completo",
          verdict: "Un presupuesto de fábrica de contenidos/ingeniero. Mac de 256 GB suele ser solo BTO; Confirme que no puede actualizar más tarde antes de realizar el pedido."
        },
        {
          level: "Especificaciones extremas",
          platform: "Configuración Mac Pro M2 Ultra max · estación de trabajo de clase servidor",
          suitable: "Laboratorios de investigación, publicación de películas, equipos de ingeniería de inteligencia artificial, implementación de LLM privada en las instalaciones",
          aiUse: "Paralelismo multiusuario/multimodelo, contexto enorme, experimentos ligeros de ajuste fino, IA en tiempo real en bibliotecas multimedia masivas",
          verdict: "Muy pocas personas necesitan esto. La mayoría de los estudiantes están bien con entre 32 y 64 GB; 512 GB son para escenarios en los que “mi escritorio es el centro de datos”."
        }
      ],
      deviceGpuTiers: [
        {
          tier: "GPU integrada/sin GPU discreta",
          forWho: "Aprendizaje, trabajo de oficina y escritura con IA solo en la nube",
          canDo: "ChatGPT, Claude, Kimi, web Midjourney, Notion AI",
          cannotDo: "Generación fluida de imágenes SD locales, inferencia de modelos 13B+, entrenamiento CUDA",
          examples: "Gráficos integrados Intel, AMD Radeon iGPU, MacBook Air M2/M3",
          verdict: "La mayoría de los cursos aquí no necesitan GPU discreta. En su lugar, gaste el dinero en 32 GB de RAM."
        },
        {
          tier: "GPU discreta de entrada",
          forWho: "Estudiantes que prueban la IA local y la generación de imágenes luminosas",
          canDo: "SD 1.5 a baja resolución, Ollama 7B quant, inferencia LoRA básica",
          cannotDo: "FLUX de máxima precisión, modelos 70B, formación a gran escala",
          examples: "RTX 3050 6GB, RTX 4050 6GB, RTX 4060 Portátil 8GB",
          verdict: "Trabajos paralelos de IA, generación de imágenes diaria, desarrollo local y depuración"
        },
        {
          tier: "GPU discreta de gama media",
          forWho: "Trabajos paralelos de IA, generación de imágenes diaria, desarrollo local y depuración",
          canDo: "SDXL, FLUX cuantificado, modelos 13B, flujos de trabajo ComfyUI, ajuste ligero",
          cannotDo: "Entrenamiento multi-GPU de precisión total 70B",
          examples: "RTX 4060 Ti 16 GB, RTX 4070 12 GB, RTX 4070 portátil",
          verdict: "El punto óptimo del valor de la IA local. La 4060 Ti de 16 GB es especialmente potente para los modelos de generación de imagen + juntos."
        },
        {
          tier: "GPU discreta de alta gama",
          forWho: "Ingenieros de inteligencia artificial, creadores pesados, capacitación a pequeña escala",
          canDo: "Inferencia cuantitativa 34B–70B, pruebas de generación de video local, entrenamiento LoRA, varios modelos en paralelo",
          cannotDo: "Gran formación comercial (aún necesita nube/clústeres A100)",
          examples: "RTX 4080 de 16 GB, RTX 4090 de 24 GB, RTX 5090",
          verdict: "Techo de IA local de una sola GPU. Sólo si el presupuesto es sólido y estás comprometido con el camino local."
        },
        {
          tier: "Memoria unificada de Apple",
          forWho: "Usuarios de Mac, trabajo móvil, modelos locales más ligeros",
          canDo: "Ollama 7B–13B (por RAM), marco MLX, IA en la nube como motor principal",
          cannotDo: "Ecosistema CUDA, herramientas optimizadas exclusivas de NVIDIA, VRAM grande y rentable",
          examples: "M3 24 GB, M3 Pro 36 GB, M3 Máx. 64 GB, Studio Ultra 128–192 GB, Mac Pro 256–512 GB",
          verdict: "36GB ≈ cómodo 13B; 64GB ≈ 34B; 128GB+ pueden alcanzar 70B cantidad. La memoria es VRAM: configúrela antes de comprar."
        }
      ],
      deviceStorageTiers: [
        {
          verdict: "Multa para uso de entrada; Algunas aplicaciones de IA dejan poco margen de maniobra; espere una limpieza frecuente."
        },
        {
          verdict: "Multa para uso de entrada; Algunas aplicaciones de IA dejan poco margen de maniobra; espere una limpieza frecuente."
        },
        {
          verdict: "Recomendación generalizada. Suficiente para entornos de desarrollo, cachés de modelos y bibliotecas de activos."
        },
        {
          verdict: "Bibliotecas de modelos locales, medios 4K, múltiples máquinas virtuales: el valor predeterminado del creador y del ingeniero."
        }
      ],
      deviceAiBoxes: {
        "dgx-spark": {
          title: "NVIDIA DGX chispa",
          budget: "aprox. $3,150–4,570",
          form: "Caja de supercomputadora de sobremesa con IA (150×150×50 mm)",
          os: "Sistema operativo NVIDIA DGX (Linux)",
          bestFor: "Ingenieros, investigadores y desarrolladores de IA que quieran agentes locales y grandes modelos sobre su escritorio.",
          tradeoff: "Arquitectura Arm y una pila relativamente cerrada: algunas herramientas x86/Windows necesitan portarse; la disponibilidad y el soporte fuera de los principales mercados varían; Después de los aumentos de precios, compare el valor con una versión DIY RTX 5090.",
          vsDiy: "frente a una estación de trabajo DIY de 128 GB: DGX Spark es más pequeña, se envía con una pila de software completa y ejecuta modelos grandes desde el primer momento; una plataforma de doble GPU Windows/Linux de construcción propia tiene más tutoriales CUDA y GPU intercambiables para realizar modificaciones a largo plazo.",
          specs: {
            chip: "GB10: Arm de 20 núcleos + GPU Blackwell, Tensor Cores de quinta generación",
            memory: "Memoria unificada LPDDR5x de 128 GB (CPU/GPU compartida)",
            storage: "NVMe M.2 de 4 TB (autocifrado)",
            aiCompute: "Hasta ~1 PFLOP (FP4); ConectaX-7 200 Gbps",
            networking: "10GbE + Wi-Fi 7; El enlace de unidad dual se escala a modelos de clase ~405B"
          },
          capabilities: {
            inference: "Unidad única: hasta ~200B parámetros",
            finetune: "Ajuste hasta ~70 mil millones de parámetros",
            agents: "Pila de agentes NIM, TensorRT y NemoClaw/OpenShell preinstalados"
          },
          reasoning: [
            "Posicionado como el “superordenador de IA más pequeño del mundo”: 1,2 kg en su escritorio, ~240 W, mucho más silencioso que una torre completa",
            "La memoria unificada de 128 GB carga todos los pesos del modelo sin el baile de descarga de las GPU de consumo",
            "La pila DGX OS + NVIDIA AI está lista en el primer arranque: omita la configuración de CUDA/controlador/contenedor",
            "Bueno para la creación de prototipos, ajustes e inferencias antes de pasar a DGX Cloud o un centro de datos."
          ],
          oemVariants: []
        },
        "gb10-oem": {
          title: "aprox. $3,150–5,000",
          budget: "aprox. $3,150–5,000",
          form: "Miniestaciones de trabajo con IA de marca",
          os: "Sistema operativo DGX o Linux personalizado por el proveedor",
          bestFor: "Equipos que quieren computación GB10 pero prefieren adquisiciones empresariales y soporte de marca",
          tradeoff: "Las configuraciones y los precios difieren ampliamente: confirme la licencia completa del software NVIDIA AI antes de realizar la compra; no necesariamente más barato que el DGX Spark propio.",
          vsDiy: "Elija esto o DGX Spark; no es necesario ambos. Si ya tiene contratos con proveedores de TI, consulte primero con los OEM; Los desarrolladores individuales suelen encontrar DGX Spark más sencillo.",
          specs: {
            chip: "Mismo superchip GB10 que DGX Spark",
            memory: "Memoria unificada de 128 GB",
            storage: "NVMe de 2 a 4 TB (varía según la marca)",
            aiCompute: "Misma clase que DGX Spark, ~1 PFLOP FP4",
            networking: "La mayoría incluye Ethernet de alta velocidad; algunos modelos ofrecen una expansión más rica"
          },
          capabilities: {
            inference: "Igual que DGX Spark, ~200B de parámetros",
            finetune: "~70B ajuste de parámetros",
            agents: "La compatibilidad con NVIDIA AI Enterprise/NIM depende del paquete del proveedor"
          },
          reasoning: [
            "ASUS Ascent GX10, HP ZGX Nano, Dell Pro Max, Lenovo, Acer Veriton GN100, GIGABYTE AI TOP ATOM, MSI y otros utilizan GB10",
            "El cálculo coincide con DGX Spark; las diferencias son refrigeración del chasis, puertos, garantía y servicios de preinstalación",
            "Los compradores empresariales pueden ejecutar adquisiciones de TI y gestión de activos estándar",
            "Es mejor cuando te has comprometido con NVIDIA CUDA y no quieres construir una sala de servidores"
          ],
          oemVariants: [
            "HP ZGX Nano",
            "HP ZGX Nano",
            "Dell Pro Max",
            "Estación de trabajo con IA de Lenovo",
            "Acer Veriton GN100",
            "ÁTOMO SUPERIOR DE IA DE GIGABYTE",
            "Escritorio MSI AI"
          ]
        },
        "ryzen-ai-halo": {
          title: "Mini PC AMD Ryzen AI Halo · 128 GB",
          budget: "aprox. $2,000–4,000",
          form: "Mini PC con IA (~193×186×77 mm)",
          os: "Windows 11 Pro/Ubuntu",
          bestFor: "Estudiantes avanzados y desarrolladores independientes que desean LLM locales de 128 GB por debajo del precio de DGX Spark",
          tradeoff: "Sin CUDA; PyTorch ROCm sigue siendo más débil que NVIDIA; La RAM está soldada; El soporte y el control de calidad de mini PC de terceros varían según la marca.",
          vsDiy: "frente a una computadora de escritorio DIY de 128 GB DDR5: las cajas Halo son más pequeñas con energía administrada; El bricolaje permite cambios de GPU y actualizaciones de RAM con más margen de maniobra en 3 a 5 años. vs DGX Spark: AMD es más barato y compatible con Windows, pero el ajuste de modelos grandes y las pilas oficiales son menos completos.",
          specs: {
            chip: "Zen 5 de 16 núcleos/32 hilos, hasta 5,1 GHz; 50 TOPS NPU",
            memory: "Memoria unificada soldada de 64/128 GB LPDDR5X 8000 MHz",
            storage: "SSD PCIe 4.0 de 2 a 4 TB; doble M.2 ampliable hasta 16 TB",
            aiCompute: "Radeon 8060S 40CU RDNA 3.5; SoC completo ~126 SUPERIORES",
            networking: "2,5GbE + Wi-Fi 7 + doble USB4"
          },
          capabilities: {
            inference: "Modelo de 128 GB: 70B quant, Qwen3 235B quant, Llama4 109B y similares",
            finetune: "LoRA ligero es factible; La gran formación todavía pertenece a la nube.",
            agents: "OpenClaw, bases de conocimiento locales, LM Studio / Ollama"
          },
          reasoning: [
            "Línea Ryzen AI Halo de AMD: Strix Halo incluye CPU, iGPU, NPU y una gran memoria en un mini chasis",
            "Las configuraciones de 128 GB, como GMKtec EVO-X2 y Geekom A9 Max, se sitúan en el nivel de ~$2000, muy por debajo de las cajas GB10",
            "Ventanas listas para usar; Ollama / LM Studio / llama.cpp se adoptan rápidamente",
            "RDNA iGPU también maneja juegos y trabajos ligeros con imágenes ComfyUI: una máquina, muchas funciones"
          ],
          oemVariants: [
            "GMKtec EVO-X2",
            "Geekom A9 Max",
            "Minisforum y otros modelos de Strix Halo"
          ]
        },
        "dual-dgx-spark": {
          title: "Clúster doble DGX Spark",
          budget: "aprox. $6,300–9,150",
          form: "Dos unidades de escritorio + interconexión de alta velocidad",
          os: "Sistema operativo NVIDIA DGX",
          bestFor: "Grupos de investigación, startups nativas de IA y casos extremos que necesitan enormes modelos locales sin nube",
          tradeoff: "El costo total se acerca al de un Mac Pro de alta gama; aún mantiene el software de clúster, lo cual es excesivo para aproximadamente el 99 % de los alumnos individuales.",
          vsDiy: "frente a un servidor 4×4090: el Spark dual es más silencioso, consume menos energía y se adapta al escritorio; Los equipos multi-GPU x86 ofrecen un mayor rendimiento de capacitación y un mercado maduro de GPU usadas.",
          specs: {
            chip: "Dos unidades GB10 conectadas a través de redes de alta velocidad ConnectX",
            memory: "Grupo de memoria unificada de 256 GB (128 GB × 2)",
            storage: "NVMe de 8 TB combinados (4 TB × 2)",
            aiCompute: "~2 PFLOP FP4 combinados",
            networking: "Enlace entre nodos ConnectX-7 de 200 Gbps"
          },
          capabilities: {
            inference: "Experimentos de ajuste fino distribuidos más grandes",
            finetune: "Experimentos de ajuste fino distribuidos más grandes",
            agents: "Paralelismo multiagente, enrutamiento de contexto muy grande"
          },
          reasoning: [
            "NVIDIA admite oficialmente la vinculación de dos unidades DGX Spark, rompiendo el límite de inferencia de ~200B de caja única",
            "Mucho más barato que una estación DGX y cubre experimentos de clase ~400B",
            "Una “sala de máquinas de escritorio” al lado de su escritorio para la validación privada de modelos grandes",
            "Cuando no está agrupado, cada cuadro puede dividir roles: uno para inferencia y otro para ajuste fino"
          ],
          oemVariants: []
        }
      },
      devicePresets: {
        "cloud-starter": {
          title: "Iniciador de aprendizaje en la nube",
          budget: "aprox. $570–860",
          form: "Ultrabook",
          os: "Windows o macOS",
          bestFor: "Completar el recorrido de 7 días de este sitio, aprendizaje diario de ChatGPT/Claude, escritura en la oficina",
          reasoning: [
            "~90 % del aprendizaje ocurre en el navegador y las aplicaciones; no se requiere computación local",
            "16 GB mantienen muchas pestañas + los clientes de IA responden",
            "Los ultrabooks son portátiles: biblioteca, cafetería, cualquier lugar",
            "Primero ahorre el presupuesto para 1 o 2 meses de suscripciones a herramientas de IA"
          ],
          tradeoff: "No es cómodo para modelos locales o generación de imágenes SD; La codificación pesada de múltiples repositorios puede resultar apretada.",
          specs: {
            gpu: "Gráficos integrados"
          }
        },
        "coding-mac": {
          title: "Codificación + ecosistema Apple",
          budget: "aprox. $1,290–2,000",
          form: "MacBook Air/Pro",
          os: "macos",
          bestFor: "Desarrollo de cursores, aprendizaje de iOS, sinergia de dispositivos Apple, IA en la nube como motor principal",
          reasoning: [
            "A partir de 24 GB puedes realizar experimentos ligeros con el Ollama 7B de forma lateral",
            "A partir de 24 GB puedes realizar experimentos ligeros con el Ollama 7B de forma lateral",
            "Handoff con iPhone/iPad hace que la investigación y las pruebas de aplicaciones sean perfectas",
            "El cómputo de GPU por dólar va por detrás de Windows al mismo precio; Las herramientas CUDA no están disponibles."
          ],
          tradeoff: "El cómputo de GPU por dólar va por detrás de Windows al mismo precio; Las herramientas CUDA no están disponibles.",
          specs: {
            ram: "Memoria unificada de 24 a 36 GB",
            gpu: "Gráficos integrados (memoria unificada)",
            storage: "512 GB–1 TB"
          }
        },
        "coding-win": {
          title: "Caballo de batalla de codificación de IA",
          budget: "aprox. $1,000–1,430",
          form: "Computadora portátil con Windows/computadora de escritorio compacta",
          os: "ventanas 11",
          bestFor: "Cursor, VS Code, Docker, desarrollo asistido por IA de múltiples repositorios",
          reasoning: [
            "32 GB es la línea \"sin arrepentimientos\" para la codificación de IA: muchos repositorios + navegador + IA juntos",
            "Windows se adapta a entornos de desarrollo empresarial y diversas herramientas CLI",
            "Las configuraciones opcionales de RTX 4050 añaden capacidad de modelo local ligero",
            "SSD de 1 TB para WSL, imágenes Docker y múltiples entornos Node/Python"
          ],
          tradeoff: "Las versiones de GPU discreta son más pesadas y caras; Los gráficos integrados limitan la IA local.",
          specs: {
            gpu: "Gráficos integrados o RTX 4050"
          }
        },
        "local-ai": {
          title: "Estación de trabajo de IA local",
          budget: "aprox. $1,710–2,570",
          form: "Computadora portátil para juegos o computadora de escritorio con Windows",
          os: "ventanas 11",
          bestFor: "Modelos locales de Ollama, generación de imágenes ComfyUI, proyectos de ingresos secundarios de IA",
          reasoning: [
            "RTX 4060 Ti 16GB es el rey del valor de la IA local en 2026: suficiente VRAM para SDXL y 13B",
            "La RAM del sistema de 32 GB deja espacio libre al cargar modelos",
            "Las computadoras de escritorio se enfrían mejor: inferencia sostenida sin limitación",
            "Más barato que Mac con un cálculo similar; Los tutoriales CUDA están en todas partes"
          ],
          tradeoff: "No portátil; mayor consumo de energía; Las configuraciones de la computadora portátil se aceleran bajo cargas prolongadas."
        },
        "creator-pro": {
          title: "Producción creativa",
          budget: "Portátil creador de MacBook Pro / Windows",
          form: "Portátil creador de MacBook Pro / Windows",
          os: "macOS/Windows",
          bestFor: "Desde 64 GB puedes ejecutar 34B quant; Studio Ultra de 128 GB alcanza ~70 mil millones de inferencia local",
          reasoning: [
            "Desde 64 GB puedes ejecutar 34B quant; Studio Ultra de 128 GB alcanza ~70 mil millones de inferencia local",
            "En Mac, configure la memoria para un horizonte de 3 años, sin actualizaciones posteriores; en Windows, elija RTX 4070+",
            "En Mac, configure la memoria para un horizonte de 3 años, sin actualizaciones posteriores; en Windows, elija RTX 4070+",
            "Convierta lo que aprenda aquí en ingresos por contenido o diseño"
          ],
          tradeoff: "Precio alto; Los principiantes deben validar la dirección en la nube antes de comprar.",
          specs: {
            ram: "Memoria unificada de 64 a 128 GB / 64 GB+",
            gpu: "Creación de valor para el escritorio"
          }
        },
        "desktop-value": {
          title: "Creación de valor para el escritorio",
          budget: "aprox. $1,140–1,710",
          form: "escritorio de bricolaje",
          os: "ventanas 11",
          bestFor: "Presupuesto ajustado pero sabor completo de IA local con espacio para actualizar más adelante",
          reasoning: [
            "Las computadoras de escritorio ofrecen la mayor cantidad de computación por dólar; GPU y RAM son actualizables",
            "RTX 4060 8GB es suficiente para los modelos básicos SD y 7B",
            "32 GB de RAM pueden crecer hasta 64 GB y prolongar su vida útil entre 3 y 5 años",
            "Ideal para el aprendizaje fijo en casa con los experimentos de ComfyUI y Ollama"
          ],
          tradeoff: "No móvil; Algunos conocimientos de montaje y mantenimiento ayudan."
        },
        "luxury-mbp": {
          title: "Móvil insignia · MacBook Pro",
          budget: "aprox. $6,430–9,710",
          form: "MacBook Pro de 16\"",
          os: "macos",
          bestFor: "Entre 34.000 y 70.000 millones de experimentos sobre la marcha, edición móvil, demostraciones mientras viaja",
          reasoning: [
            "128 GB es el límite de memoria actual para MacBook: todo tu laboratorio de IA en una bolsa",
            "M4 Max es potente de uno y varios núcleos; Cursor + Final Cut + Ollama juntos está bien",
            "Diseñado para fundadores y directores creativos que vuelan con frecuencia y trabajan en muchas ciudades.",
            "Añade Pro Display XDR en casa y se convierte en una estación de trabajo de escritorio"
          ],
          tradeoff: "Prima muy alta; Las térmicas aún están por detrás de las de escritorio: las ejecuciones largas de 70B se acelerarán.",
          specs: {
            ram: "Memoria unificada de 64 a 128 GB",
            gpu: "Gráficos integrados (memoria unificada)",
            storage: "SSD de 2 a 4 TB"
          }
        },
        "luxury-studio": {
          title: "Equipo insignia de escritorio · Mac Studio Ultra",
          budget: "Estudio Mac",
          form: "Estudio Mac",
          os: "macos",
          bestFor: "Estudio creativo personal de IA, inferencia local de 70 mil millones, escritorio silencioso de alta especificación",
          reasoning: [
            "128 GB es el “punto ideal” de Apple para la mayoría de los profesionales de la IA: 70 mil millones de unidades sin el precio de Mac Pro",
            "Chasis pequeño y casi silencioso: elegante en un escritorio frente a torres refrigeradas por agua",
            "El ecosistema MLX + Ollama está maduro para los hogares con gran cantidad de Apple",
            "Cubre ~90% de los casos de uso de IA local por mucho menos que Mac Pro"
          ],
          tradeoff: "La memoria y el almacenamiento son BTO y fijos; sin CUDA: algunas herramientas de investigación necesitan soluciones alternativas.",
          specs: {
            ram: "Memoria unificada de 128 a 192 GB",
            gpu: "Gráficos integrados (GPU de 60 núcleos)",
            storage: "SSD de 2 a 4 TB"
          }
        },
        "luxury-macpro": {
          title: "Techo de Apple · Mac Pro",
          budget: "aprox. $25,700–64,300",
          form: "Torre Mac Pro",
          os: "macos",
          bestFor: "Estudios de cine, equipos nativos de IA, grandes modelos privados, 8K multitransmisión",
          reasoning: [
            "La memoria unificada de 512 GB es única entre los dispositivos de consumo: varios modelos grandes residen a la vez",
            "Para equipos que rechazan la nube pero necesitan RAM de clase de centro de datos",
            "After Effects + ComfyUI + un asistente local 70B en rotación",
            "Símbolo de estatus dentro del ecosistema de Apple: con rendimiento real, no decoración en los estantes"
          ],
          tradeoff: "Precio extremo; M2 Ultra está una generación detrás de M4 en computación sin procesar frente a clústeres NVIDIA de precio similar.",
          specs: {
            ram: "Memoria unificada de 256 a 512 GB",
            gpu: "Gráficos integrados (GPU de 76 núcleos)",
            storage: "SSD de 4 a 8 TB"
          }
        },
        "luxury-dual-gpu": {
          title: "Bestia con doble GPU · Estación de trabajo NVIDIA",
          budget: "aprox. $11,430–25,700",
          form: "Estación de trabajo de torre completa",
          os: "Windows 11/Linux",
          bestFor: "Usuarios avanzados de CUDA, capacitación LoRA, canalizaciones múltiples de ComfyUI, ajuste fino del modelo local",
          reasoning: [
            "Doble 4090 = grupo de VRAM de 48 GB: flujos de trabajo SDXL/FLUX paralelos aproximadamente el doble por tarjeta única",
            "128 GB de RAM del sistema + VRAM grande es el techo rígido de IA local de Windows",
            "Los tutoriales de Ollama, ComfyUI y PyTorch son los más completos aquí: los favoritos de los ingenieros",
            "Cambie las GPU y amplíe la RAM más tarde: más \"modificable\" que Apple"
          ],
          tradeoff: "Ruidoso, hambriento de energía, que llena el escritorio; Los conductores y el entorno necesitan atención continua.",
          specs: {
            gpu: "2× RTX 4090 de 24 GB o 2× RTX 5090",
            storage: "RAID NVMe de 4 TB"
          }
        },
        "luxury-apple-win": {
          title: "Configuración dual · Mac + Windows",
          budget: "aprox. $21,430–40,000",
          form: "Mac Studio + torre Windows",
          os: "MacOS + Windows",
          bestFor: "Usuarios definitivos que desean la experiencia diaria de Apple y CUDA completo",
          reasoning: [
            "Mac maneja el trabajo creativo diario, la movilidad, Final Cut y la inferencia de luz MLX",
            "Windows Tower ejecuta lotes de ComfyUI, entrenamiento CUDA y juegos",
            "NAS o LAN de 10 GbE comparten modelos y medios: complementarios, no duplicados",
            "¿Cuántos estudios reales de IA alcanzan la cima: no una omni-máquina, sino una clara división del trabajo?"
          ],
          tradeoff: "Costo total más alto; cable y sincronización, mucho más allá de lo que la mayoría de la gente necesita.",
          specs: {
            ram: "128 GB + 128 GB",
            gpu: "Apple integrado + RTX 4090",
            storage: "4 TB cada uno"
          }
        }
      },
      deviceSubsections: {
        needs: {
          title: "① Comience con su caso de uso principal",
          desc: "Elija la opción más cercana a usted; los ajustes preestablecidos que coincidan a continuación se resaltarán automáticamente."
        },
        os: {
          title: "② ¿Windows o macOS?",
          desc: "Ninguno de los dos es universalmente mejor: combine con su ecosistema de software y su hoja de ruta de IA."
        },
        memory: {
          title: "③ ¿Cuánta RAM?",
          desc: "La RAM es la primera palanca para la multitarea de IA. La RAM de Windows se puede ampliar más adelante; Apple Silicon utiliza memoria unificada (RAM = VRAM). Mac Studio/Pro ofrece entre 128 y 512 GB."
        },
        gpu: {
          title: "④ ¿Qué nivel de GPU?",
          desc: "Los estudiantes que utilizan únicamente la nube pueden ignorar las GPU discretas; La generación de imágenes locales y los modelos necesitan VRAM importante."
        },
        storage: {
          title: "⑤ Capacidad de almacenamiento",
          desc: ""
        },
        aiBoxes: {
          title: "⑥ Cajas de cálculo de IA dedicadas",
          desc: ""
        },
        presets: {
          title: "⑦ Configuraciones recomendadas",
          desc: "Desde la entrada a <strong>compilaciones sin compromiso</strong>: seleccione \"Sin compromiso\" arriba para filtrar rápidamente. Cada uno explica para quién es, por qué está configurado de esta manera y las ventajas y desventajas."
        }
      },
      deviceFieldLabels: {
        chooseWhen: "Cuando elegirlo",
        avoidWhen: "Cuando saltearlo",
        aiNotePrefix: "Consejo de aprendizaje de IA:",
        commonModels: "Modelos comunes:",
        suitable: "Lo mejor para:",
        aiCapability: "Aplicaciones recomendadas",
        recommendedApps: "Aplicaciones recomendadas",
        forWho: "Lo mejor para:",
        canDo: "Puede hacer:",
        cannotDo: "Lucha/no puede:",
        examples: "Hardware de ejemplo:",
        ram: "GPU",
        gpu: "GPU",
        storage: "Almacenamiento",
        needResultPrefix: "Enfoque recomendado:",
        needResultEmpty: "ninguno todavía",
        weekN: "Semana {n}",
        focusThisWeek: "Enfócate esta semana",
        practice1: "Práctica 1",
        practice2: "Práctica 2"
      }
  });
})();
