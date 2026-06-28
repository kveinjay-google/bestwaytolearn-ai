/* DE overlays — skills-nav */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('de', {
    skillsNav: {
        meta: {
          lead: "Kuratierte GitHub-Agentenfähigkeiten mit über 1.000 Sternen – Videobearbeitung und -erstellung, E-Commerce, Xiaohongshu, Marketing, SEO und mehr. Jeder Eintrag enthält einen Installationsbefehl, kompatible Agents und einen Repo-Link.",
          searchPlaceholder: "__T0__ Fähigkeiten · __T1__ Kategorien",
          countLabel: "{n} Fähigkeiten",
          totalLabel: "{n} Fähigkeiten · {c} Kategorien",
          empty: "Keine passenden Fähigkeiten. Versuchen Sie es mit einem anderen Schlüsselwort.",
          copyCmd: "Befehl kopieren",
          openGithub: "GitHub",
          starsLabel: "{n} ★",
          agentsLabel: "Funktioniert mit"
        },
        categories: {
          "Skill 安装与合集": "Installateure und Sammlungen",
          "编程开发": "Maschinenbau",
          "前端与设计": "Frontend & Design",
          "视频剪辑与生成": "XHS & Creator Ops",
          "跨境电商与电商": "XHS & Creator Ops",
          "小红书与内容运营": "XHS & Creator Ops",
          "营销与 SEO": "Marketing & SEO",
          "内容写作": "Schreiben & Inhalt",
          "调研搜索": "Sicherheitsaudit",
          "产品运营": "Sicherheitsaudit",
          "安全审计": "Sicherheitsaudit",
          "科研学术": "Wissenschaft und Forschung",
          "浏览器自动化": "Browser-Automatisierung",
          "知识管理": "Wissensmanagement",
          "办公文档": "Office-Dokumente",
          "财务金融": "Fähigkeiten CLI"
        },
        items: {
          "skills CLI": {
            name: "Fähigkeiten CLI",
            desc: "Offener Vercel-Installer für über 68 Codierungsagenten – installieren Sie jeden GitHub-Skill über npx skills add.",
            installNote: "Installer selbst; Beispiel installiert das offizielle Skill Pack von Vercel"
          },
          "Anthropic Skills": {
            desc: "Offizielle Anthropic-Demos: Kreativ-, Entwicklungs-, Unternehmenskommunikations- und Dokumentfähigkeiten (DOCX/PDF/PPTX/XLSX).",
            installNote: "Über 1.600 installierbare Fähigkeiten mit Web-, Sicherheits-, Daten-, DevOps-, QA- und Marketingpaketen."
          },
          "Antigravity Awesome Skills": {
            desc: "Über 1.600 installierbare Fähigkeiten mit Web-, Sicherheits-, Daten-, DevOps-, QA- und Marketingpaketen.",
            installNote: "Claude Code: npx antigravity-awesome-skills --claude"
          },
          "Claude Skills 大全": {
            name: "Claude-Fähigkeitenpaket",
            desc: "337 Fähigkeiten und über 70 Befehle in den Bereichen Technik, Marketing, Produkt, Compliance und Finanzen."
          },
          "Claude Skills 大全 (营销)": {
            name: "Claude Skills Pack (Marketing)",
            desc: "337 Fähigkeiten, darunter Marketing-, Marken-, Inhalts- und Wachstumsexperimentvorlagen."
          },
          "Claude Skills 大全 (财务)": {
            name: "337 Fähigkeiten, einschließlich Finanzmodellierung, Budgetierung, Fundraising und Compliance-Berichtsvorlagen.",
            desc: "337 Fähigkeiten, einschließlich Finanzmodellierung, Budgetierung, Fundraising und Compliance-Berichtsvorlagen."
          },
          "Awesome Agent Skills": {
            desc: "Von VoltAgent kuratierter Index mit über 1.000 offiziellen und Community-Fähigkeiten.",
            installNote: "Suchen Sie zuerst mit find, dann fügen Sie npx skills <repo> hinzu"
          },
          "Agent Skills 规范": {
            name: "Spez. Agentenfähigkeiten",
            desc: "Offizieller offener Standard (agentskills.io) und Dokumente im SKILL.md-Format.",
            installNote: "Bauen Sie eine neue spezifikationskonforme Fertigkeit auf"
          },
          Superpowers: {
            desc: "Top-Agent-Entwicklungsmethodik: Brainstorming → Entwurfsüberprüfung → TDD-Plan → Subagenten-gesteuerte Ausführung.",
            installNote: "Cursor: /add-plugin Superkräfte · Codex: /plugins → Superkräfte"
          },
          OpenMontage: {
            desc: "Open-Source-Agent-Videostudio: 12 Pipelines, 52 Tools, über 500 Fähigkeiten – vom Drehbuch bis zum finalen Schnitt mit FFmpeg, Remotion, TTS und T2V.",
            installNote: "Den vollständigen Videoproduktions-Workflow finden Sie unter AGENT_GUIDE.md"
          },
          ViMax: {
            desc: "Programmatisches Video mit React – Untertitel, Bewegungen, Markeneinführungen für Wissenskurzfilme."
          },
          "Remotion Skills": {
            desc: "Programmatisches Video mit React – Untertitel, Bewegungen, Markeneinführungen für Wissenskurzfilme."
          },
          "Pika Skills": {
            desc: "Pika AI-Videogenerierung: Text-zu-Video, Bild-zu-Video und stilisierte Effekte für kreative Kurzfilme und Werbekonzepte."
          },
          "Google Gemini 视频生成": {
            name: "Verwenden Sie den Sub-Skill media_generation für Veo-Videomodelle",
            desc: "Verwenden Sie den Sub-Skill media_generation für Veo-Videomodelle",
            installNote: "Verwenden Sie den Sub-Skill media_generation für Veo-Videomodelle"
          },
          "OpenAI Codex 多媒体": {
            name: "OpenAI Codex Multimedia",
            desc: "Offizieller Codex-Fertigkeitskatalog mit Imagegen, Sora und anderen Unterfähigkeiten zur Multimedia-Generierung.",
            installNote: "Marketingfähigkeiten (Video)"
          },
          "Marketing Skills (视频)": {
            name: "Video-Unterkompetenz: Kurzvideoskripte, Anzeigenstruktur, Social-Video-Strategie und Conversion-Text.",
            desc: "Video-Unterkompetenz: Kurzvideoskripte, Anzeigenstruktur, Social-Video-Strategie und Conversion-Text."
          },
          "Social Media Skills (短视频)": {
            name: "Social-Media-Kenntnisse (kurzes Video)",
            desc: "Kurzvideoskripte, Themenplanung, Storyboard-Rhythmus und plattformübergreifende Inhaltskalender für TikTok/Reels."
          },
          "Claude SEO (电商)": {
            name: "Claude SEO (E-Commerce)",
            desc: "E-Commerce-SEO-Unterkompetenzen: Kategorieseiten, Produktschema, Hreflang und Conversion-Landingpages.",
            installNote: "Verwenden Sie nach der Installation die Unterfähigkeiten E-Commerce-SEO und Schema-Markup"
          },
          "GEO SEO Claude": {
            desc: "GEO-first SEO für KI-Suchsichtbarkeit, Markenautorität, Schema und plattformübergreifende Zitate."
          },
          "Claude SEO": {
            desc: "25 Unterkompetenzen + 18 Unteragenten: technisches SEO, internationales SEO, E-Commerce-SEO, Backlinks, Reporting."
          },
          "Marketing Skills": {
            desc: "Paket mit mehr als 35.000 Star-Marketingkompetenzen: CRO, Texterstellung, SEO, Analyse und Wachstumstechnik."
          },
          "MD2WeChat Skill": {
            desc: "Preisnachlass auf WeChat: Über 40 Themen, KI-Bilder, Batch-Veröffentlichung, Verwaltung mehrerer Konten."
          },
          Humanizer: {
            desc: "Entfernen Sie AI-Writing-Tells für Blogs, Marketing und veröffentlichte Inhalte."
          },
          "Humanizer 中文版": {
            name: "Humanizer (Chinesisch)",
            desc: "Recherchieren Sie zu jedem Thema auf Reddit, X, YouTube, HN, Polymarket und im Internet."
          },
          "Last 30 Days": {
            desc: "Recherchieren Sie zu jedem Thema auf Reddit, X, YouTube, HN, Polymarket und im Internet."
          },
          "Agent Reach": {
            desc: "Internet-Router für 13 Plattformen: XHS, Twitter, Bilibili, Reddit, GitHub, YouTube – keine API-Gebühren."
          },
          "Browser Use": {
            desc: "KI-gesteuerte Browser-Automatisierung: Durchsuchen, Ausfüllen von Formularen, Scrapen und Validieren für Betriebs- und Testzwecke."
          },
          "Finance Skills": {
            desc: "Finanzanalyse: Abrechnungen, Bewertungsmodelle, Budgets und Anlagenotizen."
          }
        },
        agents: {
          "多平台": "Multiplattform",
          "格式通用": "Universelles Format",
          "通用": "Universal",
          Cursor: "Claude Code",
          "Claude Code": "Claude Code",
          Codex: "Kodex",
          "Gemini CLI": "Gemini-CLI",
          Antigravity: "Antigravitation",
          "GitHub Copilot": "Claude.ai",
          "Claude.ai": "Claude.ai",
          v0: "v0",
          OpenClaw: "OpenClaw",
          Grok: "Grok"
        }
      },
      strings: {
        skillsNavPage: {
          tag: "Skill",
          bannerTitle: "Top-GitHub-Kenntnisse · Ein-Klick-Installation",
          bannerSubtitle: "Top-GitHub-Kenntnisse · Ein-Klick-Installation",
          title: "Top-GitHub-Kenntnisse · Ein-Klick-Installation"
        },
        search: {
          typeSkillsNav: "Top-GitHub-Kenntnisse · Ein-Klick-Installation"
        }
      }
  });
})();
