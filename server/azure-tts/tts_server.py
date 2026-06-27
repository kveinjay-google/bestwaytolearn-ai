#!/usr/bin/env python3
"""Azure Neural TTS proxy — keeps subscription key server-side."""
from __future__ import annotations

import json
import os
import re
import sys
import urllib.error
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

HOST = os.environ.get('BWTL_TTS_HOST', '127.0.0.1')
PORT = int(os.environ.get('BWTL_TTS_PORT', '8765'))
MAX_TEXT_LEN = int(os.environ.get('BWTL_TTS_MAX_CHARS', '500'))

VOICES = {
    'zh-CN': 'zh-CN-XiaoxiaoNeural',
    'zh': 'zh-CN-XiaoxiaoNeural',
    'en-US': 'en-US-JennyNeural',
    'en': 'en-US-JennyNeural',
}

ENV_PATH = Path(__file__).resolve().parent / '.env'


def load_dotenv() -> None:
    if not ENV_PATH.exists():
        return
    for line in ENV_PATH.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if not line or line.startswith('#') or '=' not in line:
            continue
        key, value = line.split('=', 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        os.environ.setdefault(key, value)


def speech_config() -> tuple[str, str] | None:
    key = os.environ.get('AZURE_SPEECH_KEY', '').strip()
    region = os.environ.get('AZURE_SPEECH_REGION', '').strip()
    if not key or not region:
        return None
    return key, region


def escape_xml(text: str) -> str:
    return (
        text.replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;')
        .replace('"', '&quot;')
        .replace("'", '&apos;')
    )


def pick_voice(locale: str) -> tuple[str, str]:
    locale = (locale or 'zh-CN').strip()
    voice = VOICES.get(locale) or VOICES.get(locale.split('-')[0], 'zh-CN-XiaoxiaoNeural')
    lang = 'en-US' if voice.startswith('en-') else 'zh-CN'
    return lang, voice


def synthesize(text: str, locale: str) -> bytes:
    cfg = speech_config()
    if not cfg:
        raise RuntimeError('Azure Speech is not configured')
    key, region = cfg
    lang, voice = pick_voice(locale)
    safe = escape_xml(text.strip())
    ssml = (
        f"<speak version='1.0' xml:lang='{lang}'>"
        f"<voice xml:lang='{lang}' name='{voice}'>"
        f"<prosody rate='-4%' pitch='0%'>{safe}</prosody>"
        f"</voice></speak>"
    )
    url = f'https://{region}.tts.speech.microsoft.com/cognitiveservices/v1'
    req = urllib.request.Request(
        url,
        data=ssml.encode('utf-8'),
        method='POST',
        headers={
            'Ocp-Apim-Subscription-Key': key,
            'Content-Type': 'application/ssml+xml',
            'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3',
            'User-Agent': 'BestWayToLearn.AI-TTS',
        },
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read()


class TtsHandler(BaseHTTPRequestHandler):
    server_version = 'BWTLTTS/1.0'

    def log_message(self, fmt: str, *args) -> None:
        sys.stderr.write('[tts] ' + (fmt % args) + '\n')

    def _cors(self) -> None:
        origin = self.headers.get('Origin', '*')
        self.send_header('Access-Control-Allow-Origin', origin or '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Vary', 'Origin')

    def _json(self, status: int, payload: dict) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self._cors()
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self) -> None:
        if self.path.rstrip('/') in ('/api/tts/health', '/health'):
            cfg = speech_config()
            self._json(200 if cfg else 503, {
                'ok': bool(cfg),
                'provider': 'azure-neural' if cfg else None,
                'region': os.environ.get('AZURE_SPEECH_REGION', '').strip() or None,
            })
            return
        self._json(404, {'ok': False, 'error': 'not_found'})

    def do_POST(self) -> None:
        if self.path.rstrip('/') not in ('/api/tts/speak', '/speak'):
            self._json(404, {'ok': False, 'error': 'not_found'})
            return
        try:
            length = int(self.headers.get('Content-Length', '0'))
            raw = self.rfile.read(length) if length else b'{}'
            data = json.loads(raw.decode('utf-8') or '{}')
        except (ValueError, UnicodeDecodeError):
            self._json(400, {'ok': False, 'error': 'invalid_json'})
            return

        text = str(data.get('text', '')).strip()
        locale = str(data.get('locale', 'zh-CN')).strip()
        if not text:
            self._json(400, {'ok': False, 'error': 'empty_text'})
            return
        if len(text) > MAX_TEXT_LEN:
            self._json(400, {'ok': False, 'error': 'text_too_long', 'max': MAX_TEXT_LEN})
            return
        if not re.search(r'[\w\u4e00-\u9fff]', text):
            self._json(400, {'ok': False, 'error': 'no_speakable_text'})
            return

        try:
            audio = synthesize(text, locale)
        except urllib.error.HTTPError as exc:
            detail = exc.read().decode('utf-8', errors='replace')[:200]
            self._json(502, {'ok': False, 'error': 'azure_http_error', 'status': exc.code, 'detail': detail})
            return
        except Exception as exc:  # noqa: BLE001
            self._json(500, {'ok': False, 'error': 'synthesis_failed', 'detail': str(exc)})
            return

        self.send_response(200)
        self.send_header('Content-Type', 'audio/mpeg')
        self.send_header('Cache-Control', 'no-store')
        self._cors()
        self.end_headers()
        self.wfile.write(audio)


def main() -> None:
    load_dotenv()
    httpd = ThreadingHTTPServer((HOST, PORT), TtsHandler)
    cfg = speech_config()
    print(f'BWTL Azure TTS listening on http://{HOST}:{PORT}')
    print('Azure configured:' if cfg else 'Azure NOT configured — set AZURE_SPEECH_KEY and AZURE_SPEECH_REGION in .env')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\nShutting down.')
        httpd.server_close()


if __name__ == '__main__':
    main()