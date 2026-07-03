/* BestWayToLearn.AI — PWA install & service worker */
const PWA = (() => {
  let deferredPrompt = null;

  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true;
  }

  function isIosDevice() {
    const ua = window.navigator.userAgent;
    return /iPad|iPhone|iPod/i.test(ua)
      || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
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
    });

    window.addEventListener('appinstalled', () => {
      deferredPrompt = null;
      document.dispatchEvent(new CustomEvent('bwtl:pwa-installed'));
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

  function setInstallMode(field, { ios = false, android = false } = {}) {
    const btn = document.getElementById('pwa-install-btn');
    const iosGuide = document.getElementById('pwa-install-ios');
    const hint = document.getElementById('pwa-install-hint');
    if (!field) return;

    if (ios) {
      if (btn) btn.hidden = true;
      if (iosGuide) iosGuide.hidden = false;
      if (hint) hint.hidden = true;
      field.classList.remove('hidden');
      return;
    }

    if (android) {
      if (btn) btn.hidden = false;
      if (iosGuide) iosGuide.hidden = true;
      if (hint) hint.hidden = false;
      field.classList.remove('hidden');
      return;
    }

    field.classList.add('hidden');
  }

  function bindInstallButton() {
    const field = document.getElementById('pwa-install-field');
    const btn = document.getElementById('pwa-install-btn');
    if (!field || !btn) return;

    const hide = () => field.classList.add('hidden');
    const showAndroid = () => setInstallMode(field, { android: true });
    const showIos = () => setInstallMode(field, { ios: true });

    document.addEventListener('bwtl:pwa-installable', showAndroid);
    document.addEventListener('bwtl:pwa-installed', hide);
    btn.addEventListener('click', () => { PWA.promptInstall(); });

    if (isStandalone()) {
      hide();
      return;
    }

    if (isIosDevice()) {
      showIos();
      return;
    }

    if (deferredPrompt) showAndroid();
  }

  async function promptInstall() {
    if (!deferredPrompt) return false;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    return true;
  }

  function canInstall() {
    return Boolean(deferredPrompt);
  }

  function init() {
    registerServiceWorker();
    bindInstallPrompt();
    bindOfflineIndicator();
    bindInstallButton();
  }

  return { init, promptInstall, canInstall, isStandalone, isIosDevice };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => PWA.init());
} else {
  PWA.init();
}