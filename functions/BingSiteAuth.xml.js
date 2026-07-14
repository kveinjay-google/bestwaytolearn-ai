const VERIFY_XML = `<?xml version="1.0"?>
<users>
\t<user>52BF0088D51D8C59325757832AE122E5</user>
</users>`;

export function onRequest() {
  return new Response(VERIFY_XML, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}