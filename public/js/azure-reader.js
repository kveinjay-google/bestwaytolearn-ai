/* BestWayToLearn.AI — Azure Neural TTS reader (with browser fallback) */

const AzureReader = (() => {
  const HEALTH_URL = '/api/tts/health';
  const SPEAK_URL = '/api/tts/speak';
  const PROBE_TTL_MS = 5 * 60 * 1000;

  let availability = null;
  let availabilityCheckedAt = 0;
  let currentAudio = null;
  let sessionId = 0;

  function getLocale() {
    return typeof I18n !== 'undefined' && I18n.getLocale() === 'en' ? 'en-US' : 'zh-CN';
  }

  async function probe(force = false) {
    const now = Date.now();
    if (!force && availability !== null && now - availabilityCheckedAt < PROBE_TTL_MS) {
      return availability;
    }
    try {
      const res = await fetch(HEALTH_URL, {
        method: 'GET',
        cache: 'no-store',
        signal: AbortSignal.timeout(2500),
      });
      if (!res.ok) {
        availability = false;
      } else {
        const data = await res.json();
        availability = Boolean(data?.ok);
      }
    } catch {
      availability = false;
    }
    availabilityCheckedAt = now;
    return availability;
  }

  function stopPlayback() {
    sessionId += 1;
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.src = '';
      currentAudio = null;
    }
  }

  function playBlob(blob) {
    const sid = sessionId;
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      currentAudio = audio;
      audio.onended = () => {
        URL.revokeObjectURL(url);
        if (sid === sessionId) currentAudio = null;
        resolve();
      };
      audio.onerror = () => {
        URL.revokeObjectURL(url);
        if (sid === sessionId) currentAudio = null;
        reject(new Error('audio_playback_failed'));
      };
      audio.play().catch(reject);
    });
  }

  async function fetchChunk(text, locale) {
    const res = await fetch(SPEAK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
      body: JSON.stringify({ text, locale: locale || getLocale() }),
      signal: AbortSignal.timeout(35000),
    });
    if (!res.ok) {
      let detail = '';
      try {
        const err = await res.json();
        detail = err?.error || err?.detail || '';
      } catch { /* ignore */ }
      throw new Error(detail || `tts_http_${res.status}`);
    }
    return res.blob();
  }

  async function speakChunks(chunks, hooks = {}) {
    const sid = sessionId;
    const locale = hooks.locale || getLocale();
    for (let i = 0; i < chunks.length; i += 1) {
      if (sid !== sessionId) return;
      hooks.onChunkStart?.(i, chunks.length);
      const blob = await fetchChunk(chunks[i], locale);
      if (sid !== sessionId) return;
      await playBlob(blob);
      hooks.onChunkEnd?.(i, chunks.length);
    }
    if (sid === sessionId) hooks.onComplete?.();
  }

  return {
    probe,
    isAvailable: () => availability,
    stop: stopPlayback,
    speakChunks,
    getLocale,
  };
})();