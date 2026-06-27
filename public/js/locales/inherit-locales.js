(function () {
  if (typeof I18n === 'undefined') return;

  const enData = I18n.getRawBundleData('en');
  if (enData) {
    ['ko', 'ja', 'fr', 'es', 'de'].forEach(code => {
      I18n.mergeLocaleData(code, { data: enData });
    });
  }

  const zhData = I18n.getRawBundleData('zh-CN');
  if (zhData) {
    I18n.mergeLocaleData('zh-TW', { data: zhData });
  }
})();