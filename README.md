# BestWayToLearn.AI

Static learning hub: four-phase AI curriculum, 7-day path, 100-term glossary, hands-on tutorials, quiz, and device guide. **No build step** — deploy the `public/` folder as-is.

## Repository layout

```
bestwaytolearn-ai/
├── .github/workflows/deploy-pages.yml   # GitHub Pages CI (optional)
├── .gitignore
├── package.json                         # Local preview (`npm run serve`)
├── README.md
├── public/                              # ← Deploy this directory
│   ├── index.html                       # Single entry point
│   ├── 404.html                         # SPA-style fallback → index.html
│   ├── .nojekyll                        # Disable Jekyll on GitHub Pages
│   ├── assets/                          # Images, icons, SVG, posters
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── app.js                       # Application logic
│       ├── data.js                      # Curriculum data (zh-CN base)
│       ├── i18n.js                      # Locale system
│       ├── icon-map.js
│       ├── terms.js
│       └── locales/                     # en / zh-CN overlays
├── scripts/                             # Dev tooling (not deployed)
│   ├── generate-icon-assets.py
│   ├── generate-apple-posters.py
│   ├── build-desktop.py
│   ├── prepare-deploy-bundle.py
│   └── export-zh-content.mjs
```

All runtime asset paths in `index.html` and JavaScript are **relative** (`assets/…`, `css/…`, `js/…`), so the site works on:

- `https://your-domain.com/`
- `https://username.github.io/repo-name/`
- Cloudflare Pages custom domains

## Local preview

### Option A — Python (no install)

```bash
cd public
python3 -m http.server 8080
# Open http://localhost:8080
```

### Option B — npm

```bash
npm run serve
# Open http://localhost:3000
```

### Option C — any static server

Serve the **`public`** directory as the web root (not the repository root).

---

## Azure Neural TTS (read-aloud)

The floating **朗读** button prefers **Azure Neural TTS** when a server-side proxy is available; otherwise it falls back to the browser’s built-in speech engine.

### Server setup (one-time)

1. Create an [Azure Speech](https://portal.azure.com) resource and copy **Key** + **Region**.
2. On the web server:

   ```bash
   scp -r server/azure-tts root@YOUR_SERVER:/opt/bwtl-tts-src
   ssh root@YOUR_SERVER
   cp /opt/bwtl-tts-src/.env.example /opt/bwtl-tts/.env   # or edit after install
   # Set AZURE_SPEECH_KEY and AZURE_SPEECH_REGION in .env
   bash /opt/bwtl-tts-src/install.sh /opt/bwtl-tts
   curl -s http://127.0.0.1:8765/api/tts/health
   ```

3. Ensure Nginx proxies `/api/tts/` → `http://127.0.0.1:8765/api/tts/` (see `scripts/nginx-with-tts.conf.template`).

4. Redeploy static files from `public/` as usual.

Voices: **zh-CN-XiaoxiaoNeural** (Chinese), **en-US-JennyNeural** (English), chosen from the site locale.

---

## Deploy to GitHub Pages

### Method 1 — GitHub Actions (recommended)

This repo includes `.github/workflows/deploy-pages.yml`. It publishes the **`public`** folder on every push to `main` (or `master`).

1. **Create a GitHub repository** and push this project:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: BestWayToLearn.AI static site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bestwaytolearn-ai.git
   git push -u origin main
   ```

2. In GitHub: **Settings → Pages**

   - **Source**: `GitHub Actions` (not “Deploy from a branch”)

3. After the workflow runs, your site is live at:

   `https://YOUR_USERNAME.github.io/bestwaytolearn-ai/`

4. **Custom domain** (optional): Settings → Pages → Custom domain → add DNS records as instructed.

### Method 2 — Deploy from branch (no Actions)

1. Push the repo to GitHub.
2. Settings → Pages → **Source**: Deploy from branch.
3. Branch: `main`, folder: **`/public`** (GitHub supports publishing a subfolder).
4. Save. GitHub serves `public/index.html` as the site root.

> If your GitHub UI only offers `/` or `/docs`, use Method 1 (Actions) instead.

### GitHub Pages notes

- `public/.nojekyll` prevents Jekyll from stripping `_`-prefixed paths.
- `public/404.html` redirects unknown paths back to `index.html` (hash-based navigation).
- Progress is stored in **browser `localStorage`** — no server required.

---

## Deploy to Cloudflare Pages

### Via dashboard (recommended)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select this repository.
3. Build settings:

   | Setting | Value |
   |---------|--------|
   | **Production branch** | `main` |
   | **Framework preset** | None |
   | **Build command** | *(leave empty)* |
   | **Build output directory** | `public` |

4. Click **Save and Deploy**. Cloudflare serves `public/index.html` at your `*.pages.dev` URL.
5. **Custom domain**: Pages project → **Custom domains** → add your domain (Cloudflare configures DNS if the zone is on Cloudflare).

### Via Wrangler CLI (optional)

```bash
npm install -g wrangler
wrangler login
wrangler pages project create bestwaytolearn-ai
wrangler pages deploy public --project-name=bestwaytolearn-ai
```

### Cloudflare notes

- No build step — upload time is typically under a minute.
- Enable **Always Use HTTPS** and **Automatic HTTPS Rewrites** in SSL/TLS if using a custom domain.
- Optional: add caching rules for `assets/**` (long cache) and `index.html` (short cache) in the dashboard.

---

## Deploy to other static hosts

Upload the contents of **`public/`** (not the whole repo) to any static host:

| Host | Publish directory |
|------|-------------------|
| Netlify | `public` (build command empty) |
| Vercel | Root Directory = `public` |
| AWS S3 + CloudFront | Sync `public/` to bucket |
| Nginx | `root /var/www/bestwaytolearn-ai/public;` |

Example Nginx snippet:

```nginx
server {
    listen 80;
    server_name learn.example.com;
    root /var/www/bestwaytolearn-ai/public;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Development scripts

From the repository root:

```bash
# Regenerate PNG UI icons → public/assets/icons/
python3 scripts/generate-icon-assets.py

# Copy public/ to Desktop deploy folder (optional)
python3 scripts/prepare-deploy-bundle.py

# Single-file HTML export to Desktop (legacy, partial bundle)
python3 scripts/build-desktop.py
```

After changing icons or posters, bump cache-busting query strings in `public/index.html` if needed (`?v=…` on script/link tags).

---

## Internationalization

- Default locale: **zh-CN** (inline + `js/locales/zh-CN.js`)
- English UI: `js/locales/en*.js` overlays via `js/i18n.js`
- Language toggle in the header; preference saved in `localStorage`

Hands-on tutorial prompts may remain in Chinese where they are meant to be copied into Chinese-first tools.

---

## License

Educational static site. Third-party app names and links are for reference only. Add your preferred `LICENSE` file before public distribution if required.

## Brand

**BestWayToLearn.AI** — Cognition → Tools → Practice → Review