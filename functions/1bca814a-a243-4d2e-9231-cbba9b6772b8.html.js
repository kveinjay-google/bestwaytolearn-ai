const VERIFY_CONTENT = '1bca814a-a243-4d2e-9231-cbba9b6772b8';

export function onRequest() {
  return new Response(VERIFY_CONTENT, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}