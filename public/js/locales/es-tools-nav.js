/* ES overlays — tools-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('es', {
    toolsNav: {
        meta: {
          lead: "Explore herramientas de IA confiables por caso de uso y acceda a sitios oficiales. Los elementos etiquetados como \"Destacados aquí\" se incluyen en nuestra guía de aplicaciones curriculares.",
          searchPlaceholder: "__T0__ herramientas",
          featuredBadge: "Destacado aquí",
          countLabel: "{n} herramientas",
          totalLabel: "Sin herramientas coincidentes. Pruebe con otra palabra clave.",
          empty: "sitio abierto",
          openSite: "sitio abierto"
        },
        categories: {
          "对话助手": "Asistentes de chat",
          "编程开发": "Codificación y desarrollo",
          "图像创作": "Creación de imágenes",
          "视频音频": "Productividad",
          "办公效率": "Búsqueda e investigación",
          "搜索研究": "Búsqueda e investigación",
          "Agent 自动化": "Agentes y automatización",
          "设计原型": "Diseño y creación de prototipos",
          "营销写作": "Marketing y redacción",
          "本地与开源": "Código local y abierto"
        },
        tools: {
          Poe: {
            desc: "Metaasistente vinculado a Instagram/WhatsApp"
          },
          "Meta AI": {
            desc: "Metaasistente vinculado a Instagram/WhatsApp"
          },
          "Character.AI": {
            desc: "Comunidad de juegos de roles y chat personal"
          },
          "腾讯混元": {
            name: "Tencent Hunyuan",
            desc: "Tencent LLM para chat chino y creación multimodal"
          },
          "讯飞星火": {
            name: "Modelo iFlytek sólido en flujos de trabajo de voz y oficina",
            desc: "Modelo iFlytek sólido en flujos de trabajo de voz y oficina"
          },
          "天工 AI": {
            name: "IA del cielo",
            desc: "Preguntas y respuestas aumentadas por búsqueda de Kunlun y chat multimodal"
          },
          "智谱清言": {
            name: "ChatGLM",
            desc: "Chat oficial de Zhipu GLM y ecosistema de modelo abierto"
          },
          Replit: {
            desc: "Implementación de agentes de inteligencia artificial y desarrollo de pila completa en el navegador"
          },
          Lovable: {
            desc: "Lenguaje natural para aplicaciones web full-stack"
          },
          v0: {
            desc: "Generador Vercel AI UI para React / shadcn"
          },
          "Google AI Studio": {
            desc: "Área de juego y creación de prototipos de API Gemini"
          },
          "Hugging Face": {
            desc: "Modelos abiertos, demostraciones de Spaces, conjuntos de datos."
          },
          Replicate: {
            desc: "Ejecute modelos abiertos a través de API, pague por llamada"
          },
          Tabnine: {
            desc: "Finalización del código de IA empresarial, implementación privada"
          },
          "JetBrains AI": {
            desc: "Generación de juegos y arte conceptual."
          },
          "Sourcegraph Cody": {
            desc: "Asistente de codificación de IA con reconocimiento de base de código"
          },
          "Leonardo.ai": {
            desc: "Generación de juegos y arte conceptual."
          },
          Ideogram: {
            desc: "Representación de texto potente en imágenes con IA"
          },
          "Adobe Firefly": {
            desc: "Imágenes generativas de Adobe seguras para uso comercial"
          },
          "即梦 AI": {
            name: "Jimeng AI",
            desc: "Generación de imágenes ByteDance, compatible con China"
          },
          LiblibAI: {
            desc: "Centro de modelos SD chinos y generación en línea"
          },
          Civitai: {
            desc: "La comunidad de modelos SD/LoRA más grande"
          },
          Recraft: {
            desc: "Magic Studio para diseño social y marketing."
          },
          Canva: {
            desc: "Magic Studio para diseño social y marketing."
          },
          Pika: {
            desc: "Generación de videos cortos estilizados."
          },
          "Luma Dream Machine": {
            desc: "Avatares de IA y vídeo de sincronización de labios multilingüe"
          },
          HeyGen: {
            desc: "Avatares de IA y vídeo de sincronización de labios multilingüe"
          },
          Descript: {
            desc: "Editar audio/video editando texto"
          },
          Udio: {
            desc: "Música AI con voces y estilos."
          },
          "剪映 CapCut": {
            name: "corte de tapa",
            desc: "Texto a vídeo de Shengshu, indicaciones en chino"
          },
          Vidu: {
            desc: "Texto a vídeo de Shengshu, indicaciones en chino"
          },
          PixVerse: {
            desc: "Vídeo AI con plantillas y efectos."
          },
          "海螺 AI": {
            name: "Hailuo AI",
            desc: "Plataforma de voz y vídeo MiniMax"
          },
          Tome: {
            desc: "Presentaciones de diseño inteligente"
          },
          "Beautiful.ai": {
            desc: "Presentaciones de diseño inteligente"
          },
          "飞书": {
            name: "Alondra / Feishu",
            desc: "Suite ByteDance con copiloto de IA"
          },
          "WPS AI": {
            desc: "Escritura y hojas de cálculo Kingsoft WPS AI"
          },
          Grammarly: {
            desc: "Gramática, tono y claridad del inglés."
          },
          "Slack AI": {
            desc: "Resúmenes de canales e IA del flujo de trabajo"
          },
          "钉钉 AI": {
            name: "DingTalk IA",
            desc: "Colaboración empresarial con asistente de IA"
          },
          Consensus: {
            desc: "Búsqueda de artículos académicos con citas."
          },
          Elicit: {
            desc: "Revisión de literatura y extracción de artículos."
          },
          "You.com": {
            desc: "Búsqueda de IA con múltiples modelos"
          },
          Phind: {
            desc: "Búsqueda de IA centrada en el desarrollador"
          },
          "夸克 AI": {
            name: "IA de quarks",
            desc: "Búsqueda AI del navegador Alibaba Quark"
          },
          Flowise: {
            desc: "Aplicaciones visuales LLM, autohospedables"
          },
          LangChain: {
            desc: "Marco de la aplicación LLM y LangSmith"
          },
          CrewAI: {
            desc: "Marco de orquestación multiagente"
          },
          Zapier: {
            desc: "Conecte más de 7000 aplicaciones con automatización de IA"
          },
          Make: {
            desc: "Automatización visual con módulos de IA"
          },
          FastGPT: {
            desc: "Flujos de trabajo de preguntas y respuestas de base de conocimientos abiertos"
          },
          Figma: {
            desc: "Figma AI para UI, copia y prototipos"
          },
          Framer: {
            desc: "Sitios y movimiento asistidos por IA"
          },
          Uizard: {
            desc: "Boceto/captura de pantalla de prototipos de interfaz de usuario"
          },
          Motiff: {
            desc: "Herramienta de diseño de interfaz de usuario nativa de IA"
          },
          Relume: {
            desc: "Mapas de sitio y estructuras alámbricas de IA"
          },
          Jasper: {
            desc: "Copia de marketing de marca y SEO"
          },
          "Copy.ai": {
            desc: "Anuncios, correo electrónico y texto social a escala"
          },
          Writesonic: {
            desc: "Artículos y páginas de destino de SEO"
          },
          Sudowrite: {
            desc: "GUI para chat local de LLM"
          },
          Ollama: {
            desc: "GUI para chat local de LLM"
          },
          "LM Studio": {
            desc: "GUI para chat local de LLM"
          },
          ComfyUI: {
            desc: "Flujos de trabajo de difusión estable basados ​​en nodos"
          },
          "Open WebUI": {
            desc: "Interfaz de usuario de chat autohospedada para Ollama"
          },
          LocalAI: {
            desc: "Servidor API local compatible con OpenAI"
          },
          OpenRouter: {
            desc: "Enrutamiento API unificado entre proveedores de LLM"
          }
        }
      },
      strings: {
        nav: {
          toolsNav: "Explore herramientas de IA confiables por caso de uso y acceda a sitios oficiales. Los elementos etiquetados como \"Destacados aquí\" se incluyen en nuestra guía de aplicaciones curriculares.",
          aiToolsNav: "Explore herramientas de IA confiables por caso de uso y acceda a sitios oficiales. Los elementos etiquetados como \"Destacados aquí\" se incluyen en nuestra guía de aplicaciones curriculares."
        },
        aiNavPage: {
          linkDirectory: "Explorar el centro de IA (más de 100 herramientas) →"
        }
      }
  });
})();
