/* BestWayToLearn.AI — PWA install & service worker */
const PWA = (() => {
  let deferredPrompt = null;
  let installMode = null;

  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true;
  }

  function isIosDevice() {
    const ua = window.navigator.userAgent;
    return /iPad|iPhone|iPod/i.test(ua)
      || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
  }

  function isAndroid() {
    return /Android/i.test(window.navigator.userAgent);
  }

  function isIosSafari() {
    if (!isIosDevice()) return false;
    const ua = window.navigator.userAgent;
    return /Safari/i.test(ua)
      && !/CriOS|FxiOS|EdgiOS|OPiOS|MicroMessenger|baiduboxapp|QQ\//i.test(ua);
  }

  function isMobileViewport() {
    return window.matchMedia('(max-width: 1024px)').matches;
  }

  function shouldOfferInstall() {
    if (isStandalone()) return false;
    if (isMobileViewport()) return true;
    return Boolean(deferredPrompt);
  }

  function resolveInstallMode() {
    if (isStandalone()) return null;
    if (isAndroid() && deferredPrompt) return 'android';
    if (isIosSafari()) return 'ios';
    if (isIosDevice()) return 'safari';
    if (deferredPrompt) return 'android';
    if (isMobileViewport()) return 'manual';
    return null;
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js', { scope: '/' })
        .then((reg) => {
          reg.addEventListener('updatefound', () => {
            const worker = reg.installing;
            if (!worker) return;
            worker.addEventListener('statechange', () => {
              if (worker.state === 'installed' && navigator.serviceWorker.controller) {
                document.dispatchEvent(new CustomEvent('bwtl:pwa-update'));
              }
            });
          });
        })
        .catch(() => { /* private mode or blocked */ });
    });
  }

  function bindInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      document.dispatchEvent(new CustomEvent('bwtl:pwa-installable'));
      refreshInstallUI();
    });

    window.addEventListener('appinstalled', () => {
      deferredPrompt = null;
      document.dispatchEvent(new CustomEvent('bwtl:pwa-installed'));
      refreshInstallUI();
    });
  }

  function bindOfflineIndicator() {
    const bar = document.getElementById('pwa-offline-bar');
    const setState = () => {
      const offline = !navigator.onLine;
      document.documentElement.classList.toggle('is-offline', offline);
      if (bar) bar.hidden = !offline;
    };
    window.addEventListener('online', setState);
    window.addEventListener('offline', setState);
    setState();
  }

  function setVisible(el, visible) {
    if (!el) return;
    el.classList.toggle('hidden', !visible);
  }

  function applyInstallMode(mode) {
    installMode = mode;
    ['android', 'ios', 'safari', 'manual'].forEach((name) => {
      setVisible(document.getElementById(`pwa-install-mode-${name}`), mode === name);
    });
  }

  function refreshInstallUI() {
    const offer = shouldOfferInstall();
    const mode = offer ? resolveInstallMode() : null;

    setVisible(document.getElementById('header-install-btn'), offer);
    setVisible(document.getElementById('pwa-install-settings-divider'), offer);
    setVisible(document.getElementById('pwa-install-settings-entry'), offer);

    if (!offer || !mode) {
      closeInstallSheet();
      return;
    }

    applyInstallMode(mode);
  }

  function openInstallSheet() {
    const sheet = document.getElementById('pwa-install-sheet');
    if (!sheet || !shouldOfferInstall()) return;
    refreshInstallUI();
    sheet.classList.remove('hidden');
    sheet.setAttribute('aria-hidden', 'false');
    document.body.classList.add('pwa-install-sheet-open');
    document.getElementById('pwa-install-sheet-close')?.focus();
  }

  function closeInstallSheet() {
    const sheet = document.getElementById('pwa-install-sheet');
    if (!sheet) return;
    sheet.classList.add('hidden');
    sheet.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('pwa-install-sheet-open');
  }

  function bindInstallUI() {
    const headerBtn = document.getElementById('header-install-btn');
    const settingsLink = document.getElementById('pwa-install-settings-link');
    const sheetBtn = document.getElementById('pwa-install-sheet-btn');
    const closeBtn = document.getElementById('pwa-install-sheet-close');
    const backdrop = document.getElementById('pwa-install-sheet-backdrop');

    headerBtn?.addEventListener('click', openInstallSheet);
    settingsLink?.addEventListener('click', openInstallSheet);
    closeBtn?.addEventListener('click', closeInstallSheet);
    backdrop?.addEventListener('click', closeInstallSheet);
    sheetBtn?.addEventListener('click', () => { PWA.promptInstall(); });

    document.addEventListener('bwtl:pwa-installable', refreshInstallUI);
    document.addEventListener('bwtl:pwa-installed', refreshInstallUI);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeInstallSheet();
    });

    window.addEventListener('resize', refreshInstallUI);
    refreshInstallUI();
  }

  async function promptInstall() {
    if (!deferredPrompt) {
      openInstallSheet();
      return false;
    }
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    refreshInstallUI();
    return true;
  }

  function canInstall() {
    return Boolean(deferredPrompt);
  }

  function init() {
    registerServiceWorker();
    bindInstallPrompt();
    bindOfflineIndicator();
    bindInstallUI();
  }

  return {
    init,
    promptInstall,
    canInstall,
    openInstallSheet,
    closeInstallSheet,
    isStandalone,
    isIosDevice,
    shouldOfferInstall,
    resolveInstallMode,
  };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => PWA.init());
} else {
  PWA.init();
}