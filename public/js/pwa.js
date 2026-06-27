/* BestWayToLearn.AI — PWA install & service worker */
const PWA = (() => {
  let deferredPrompt = null;

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

  function bindInstallButton() {
    const field = document.getElementById('pwa-install-field');
    const btn = document.getElementById('pwa-install-btn');
    if (!field || !btn) return;

    const show = () => {
      if (deferredPrompt) field.classList.remove('hidden');
    };
    const hide = () => field.classList.add('hidden');

    document.addEventListener('bwtl:pwa-installable', show);
    document.addEventListener('bwtl:pwa-installed', hide);
    btn.addEventListener('click', () => { PWA.promptInstall(); });

    if (deferredPrompt) show();
    if (window.matchMedia('(display-mode: standalone)').matches) hide();
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

  return { init, promptInstall, canInstall };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => PWA.init());
} else {
  PWA.init();
}