/* BestWayToLearn.AI — Emoji → themed icon image mapping */

const ICON_BASE = 'assets/icons';

const EMOJI_ICON_SLUG = {
  '🌐': 'globe',
  '⚡': 'lightning',
  '🧰': 'toolbox',
  '🏙️': 'cityscape',
  '🔭': 'telescope',
  '💬': 'chat',
  '👨‍💻': 'coder',
  '🎨': 'palette',
  '🎵': 'music',
  '📋': 'clipboard',
  '🔎': 'search',
  '🏥': 'hospital',
  '🎓': 'graduation',
  '💰': 'finance',
  '🛒': 'shopping',
  '🏭': 'factory',
  '🎬': 'media',
  '⚖️': 'legal',
  '🚗': 'transport',
  '🏠': 'home',
  '💼': 'briefcase',
  '🧠': 'brain',
  '🌍': 'earth',
  '📊': 'chart',
  '🔬': 'microscope',
  '🔗': 'link',
  '🎯': 'target',
  '🎭': 'masks',
  '✨': 'sparkles',
  '📝': 'memo',
  '🌙': 'moon',
  '🔍': 'magnifier',
  '🏄': 'surf',
  '🖼️': 'frame',
  '🌀': 'swirl',
  '🎥': 'camera',
  '📓': 'notebook',
  '🎙️': 'microphone',
  '🐟': 'fish',
  '🦞': 'lobster',
  '🫘': 'beans',
  '𝕏': 'x-logo',
  '🌊': 'wave',
  '🎞️': 'filmstrip',
  '🪟': 'window',
  '🐛': 'bug',
  '☕': 'coffee',
  '☁️': 'wave',
  '🍎': 'home',
  '💎': 'bwtl-mark',
  '👑': 'bwtl-mark',
  '🏆': 'graduation'
};

const APP_ICON_FILES = {
  'ChatGPT': 'apps/chatgpt.png',
  'Claude': 'apps/claude.png',
  'Gemini': 'apps/gemini.png',
  '通义千问': 'apps/通义千问.png',
  '文心一言': 'apps/文心一言.png',
  'Kimi': 'apps/kimi.png',
  'DeepSeek': 'apps/deepseek.png',
  'GitHub Copilot': 'apps/github-copilot.png',
  'Cursor': 'apps/cursor.png',
  'Windsurf': 'apps/windsurf.png',
  'Claude Code': 'apps/claude-code.png',
  'Codex CLI': 'apps/codex-cli.png',
  'Grok Build': 'apps/grok-build.png',
  'Zcode': 'apps/zcode.png',
  'Gemini CLI': 'apps/gemini-cli.png',
  'Aider': 'apps/aider.png',
  'Cline': 'apps/cline.png',
  'Continue': 'apps/continue.png',
  'Amazon Q Developer': 'apps/amazon-q-developer.png',
  'Midjourney': 'apps/midjourney.png',
  'DALL·E 3': 'apps/dalle-3.png',
  'Stable Diffusion': 'apps/stable-diffusion.png',
  '可灵 AI': 'apps/可灵-ai.png',
  'Runway': 'apps/runway.png',
  'Suno': 'apps/suno.png',
  'Notion AI': 'apps/notion-ai.png',
  'Gamma': 'apps/gamma.png',
  'Perplexity': 'apps/perplexity.png',
  'NotebookLM': 'apps/notebooklm.png',
  'ElevenLabs': 'apps/elevenlabs.png',
  'Fish Audio': 'apps/fish-audio.png',
  'OpenClaw': 'apps/openclaw.png',
  'Dify': 'apps/dify.png',
  '扣子 Coze': 'apps/扣子-coze.png',
  'n8n': 'apps/n8n.png',
  'Manus': 'apps/manus.png',
  '豆包': 'apps/豆包.png',
  'Grok': 'apps/grok.png',
  'Bolt.new': 'apps/boltnew.png',
  'Flux': 'apps/flux.png',
  'Sora': 'apps/sora.png',
  'Microsoft Copilot': 'apps/microsoft-copilot.png',
  '秘塔 AI 搜索': 'apps/秘塔-ai-搜索.png'
};

const OVERVIEW_SECTION_ICON = {
  what: 'globe',
  capabilities: 'lightning',
  tools: 'toolbox',
  impact: 'cityscape',
  future: 'telescope'
};

const UI_ICONS = {
  speaker: `${ICON_BASE}/speaker.png`,
  cardsView: `${ICON_BASE}/cards-view.png`,
  book: `${ICON_BASE}/book.png`,
  chat: `${ICON_BASE}/chat.png`,
  rocket: `${ICON_BASE}/rocket.png`,
  brandStar: `${ICON_BASE}/bwtl-mark.png`,
  brandMark: `${ICON_BASE}/bwtl-mark.png`
};

function iconPathFromSlug(slug) {
  return `${ICON_BASE}/${slug}.png`;
}

function iconPathFromEmoji(emoji) {
  const slug = EMOJI_ICON_SLUG[emoji];
  return slug ? iconPathFromSlug(slug) : null;
}

function iconPathForApp(appName, emoji) {
  if (APP_ICON_FILES[appName]) return `${ICON_BASE}/${APP_ICON_FILES[appName]}`;
  return iconPathFromEmoji(emoji);
}

function renderIcon(opts = {}) {
  const {
    image,
    emoji,
    alt = '',
    className = 'theme-icon',
    size = 48,
    decorative = true
  } = opts;
  const src = image || iconPathFromEmoji(emoji);
  if (!src) {
    return emoji
      ? `<span class="${className} theme-icon-fallback" aria-hidden="${decorative}">${emoji}</span>`
      : '';
  }
  const aria = decorative ? ' aria-hidden="true"' : ` alt="${alt.replace(/"/g, '&quot;')}"`;
  return `<img class="${className}" src="${src}"${decorative ? '' : ` alt="${alt.replace(/"/g, '&quot;')}"`} width="${size}" height="${size}" loading="lazy" decoding="async"${aria}>`;
}