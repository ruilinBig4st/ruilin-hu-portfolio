# Ruilin Hu Portfolio

A polished single-page portfolio for data analyst, data scientist, business analyst, and AI-data roles. Built with Next.js App Router, TypeScript, and Tailwind CSS.

Public website: https://ruilin-hu-portfolio.vercel.app

Source code: https://github.com/ruilinBig4st/ruilin-hu-portfolio

Vercel project: https://vercel.com/big4st/ruilin-hu-portfolio

## Run Locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Edit Content

Most personal content lives in `constants/portfolio.ts`, including navigation, experience, projects, skills, resume URL, and contact links.

Replace the resume placeholder path with a real file:

```ts
resumeUrl: "/resume/ruilin-hu-resume.pdf"
```

Add the PDF at `public/resume/ruilin-hu-resume.pdf`.

## Deploy

You can deploy directly from this folder to Vercel without GitHub. On Windows:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\deploy.ps1
```

The script checks your login, opens Vercel's login flow if needed, and runs a production deployment. Use your own Vercel account. Accept the detected Next.js settings and choose a project name such as `ruilin-hu-portfolio`. The CLI prints the public HTTPS URL after deployment. Your computer does not need to stay on. Run the same script again to publish updates.

Localhost (`127.0.0.1:3000`) is only a local preview, not a public website.

Alternatively, connect GitHub for automatic deployments:

1. Push this project to GitHub.
2. Import the repository at `https://vercel.com/new`.
3. Keep the default Next.js settings.
4. Deploy.

## Search Engines

After deployment, open `/robots.txt` and `/sitemap.xml` on the public domain. The site uses Vercel's production domain automatically. For a custom domain, set `SITE_URL` in Vercel's environment settings and redeploy.

Add the public URL as a URL-prefix property in Google Search Console. Choose HTML tag verification, set `GOOGLE_SITE_VERIFICATION` to the token in the tag's `content` attribute, and redeploy. Verify ownership, submit `sitemap.xml`, and request indexing for the homepage. Indexing and rankings are controlled by Google and are not immediate or guaranteed. Linking the website from LinkedIn helps people discover it directly.

## Included Public Files

The deployment includes the resume PDF, R visualization demo, and downloadable project archives under `public/`. `.source-materials/` and local build/dependency folders are excluded from deployment. The Mini SQL browser demo displays prepared query results; it does not run the Python SQL engine on a server.
