const VERIFY_CODE = 'ead7b58062e3106ccc6ac15b8952e0a7';

export function onRequest() {
  return new Response(VERIFY_CODE, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}