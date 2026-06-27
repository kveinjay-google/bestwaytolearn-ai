#!/usr/bin/env python3
"""将最新网站文件同步到桌面「BestWayToLearn-AI-deploy」文件夹。"""
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
BUNDLE = Path.home() / 'Desktop' / 'BestWayToLearn-AI-deploy'
SITE_ITEMS = ['index.html', 'css', 'js', 'assets']
KEEP_NAMES = {
    'deploy.py',
    'deploy-config.json',
    'deploy-config.example.json',
    '一键部署.command',
    '更新网页文件.command',
    '使用说明.txt',
    'nginx-synapse-ai.conf.template',
}

def sync_site_files():
    BUNDLE.mkdir(parents=True, exist_ok=True)
    for name in SITE_ITEMS:
        src = PUBLIC / name
        dst = BUNDLE / name
        if not src.exists():
            raise FileNotFoundError(f'缺少源文件: {src}')
        if src.is_dir():
            if dst.exists():
                shutil.rmtree(dst)
            shutil.copytree(src, dst)
        else:
            shutil.copy2(src, dst)
    print(f'✓ 网页文件已同步到: {BUNDLE}')

if __name__ == '__main__':
    sync_site_files()