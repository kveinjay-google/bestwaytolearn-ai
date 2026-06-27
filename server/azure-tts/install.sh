#!/bin/bash
set -euo pipefail

INSTALL_DIR="${1:-/opt/bwtl-tts}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "→ Installing BWTL Azure TTS to $INSTALL_DIR"
mkdir -p "$INSTALL_DIR"
cp "$SCRIPT_DIR/tts_server.py" "$INSTALL_DIR/"
cp "$SCRIPT_DIR/bwtl-tts.service" /etc/systemd/system/bwtl-tts.service

if [ ! -f "$INSTALL_DIR/.env" ]; then
  cp "$SCRIPT_DIR/.env.example" "$INSTALL_DIR/.env"
  echo "⚠ Created $INSTALL_DIR/.env — edit AZURE_SPEECH_KEY and AZURE_SPEECH_REGION, then:"
  echo "  systemctl restart bwtl-tts"
fi

sed -i "s|WorkingDirectory=.*|WorkingDirectory=$INSTALL_DIR|" /etc/systemd/system/bwtl-tts.service
sed -i "s|EnvironmentFile=.*|EnvironmentFile=$INSTALL_DIR/.env|" /etc/systemd/system/bwtl-tts.service
sed -i "s|ExecStart=.*|ExecStart=/usr/bin/python3 $INSTALL_DIR/tts_server.py|" /etc/systemd/system/bwtl-tts.service

systemctl daemon-reload
systemctl enable bwtl-tts
systemctl restart bwtl-tts
systemctl --no-pager status bwtl-tts || true
echo "✓ TTS service installed. Health: curl -s http://127.0.0.1:8765/api/tts/health"