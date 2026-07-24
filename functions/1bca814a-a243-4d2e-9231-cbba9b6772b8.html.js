const VERIFY_CONTENT = '1bca814a-a243-4d2e-9231-cbba9b6772b8';

export function onRequest() {
  return new Response(VERIFY_CONTENT, {
    status: 200,
    headers: {
      // text/plain so search engines treat this as a non-HTML token (Bing
      // Webmaster verification, not a real page). Was text/html, which made
      // Google try to index the 36-byte body and show up in GSC as
      // "Discovered, not yet indexed".
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}