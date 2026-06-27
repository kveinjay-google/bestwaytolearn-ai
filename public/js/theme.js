/* BestWayToLearn.AI — Theme switcher */

const Theme = (() => {
  const STORAGE_KEY = 'bwtl-theme';
  const DEFAULT_THEME = 'neural';
  const THEMES = ['neural', 'aurora', 'sunrise', 'forest', 'ink'];
  const POSTER_BASE = 'assets/posters/poster';

  let current = DEFAULT_THEME;

  function isValid(theme) {
    return THEMES.includes(theme);
  }

  function readStored() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return isValid(saved) ? saved : DEFAULT_THEME;
    } catch {
      return DEFAULT_THEME;
    }
  }

  function syncMetaColor() {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg-deep').trim();
    if (bg) meta.setAttribute('content', bg);
  }

  function posterSrc(slot) {
    return `${POSTER_BASE}-${slot}-${current}.svg`;
  }

  function syncPosters() {
    document.querySelectorAll('[data-theme-poster]').forEach(img => {
      const slot = img.dataset.themePoster;
      if (!slot) return;
      const next = posterSrc(slot);
      if (img.getAttribute('src') !== next) img.setAttribute('src', next);
    });
  }

  function syncButtons() {
    document.querySelectorAll('.pref-theme-btn').forEach(btn => {
      const active = btn.dataset.theme === current;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  function apply(theme, { persist = true } = {}) {
    if (!isValid(theme)) theme = DEFAULT_THEME;
    current = theme;
    document.documentElement.dataset.theme = theme;
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* private mode */ }
    }
    syncMetaColor();
    syncPosters();
    syncButtons();
    window.dispatchEvent(new CustomEvent('bwtl-theme-change', { detail: { theme } }));
  }

  function setTheme(theme) {
    apply(theme);
  }

  function getTheme() {
    return current;
  }

  function getCanvasColors() {
    const style = getComputedStyle(document.documentElement);
    const rgb = (style.getPropertyValue('--canvas-rgb').trim() || '45, 212, 191');
    const opacity = parseFloat(style.getPropertyValue('--canvas-opacity')) || 0.32;
    return { rgb, opacity };
  }

  function init() {
    current = readStored();
    apply(current, { persist: false });

    document.querySelectorAll('.pref-theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.theme && btn.dataset.theme !== current) {
          setTheme(btn.dataset.theme);
        }
      });
    });
  }

  return { init, setTheme, getTheme, getCanvasColors, THEMES, DEFAULT_THEME };
})();