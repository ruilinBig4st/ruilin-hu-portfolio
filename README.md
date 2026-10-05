# Ruilin Hu Portfolio

A responsive professional portfolio showcasing Ruilin Hu's data analysis, interactive visualization, database projects, education, and experience. Built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion, with accessible navigation, project detail pages, interactive demos, and a downloadable resume.

[Open the live portfolio](https://ruilin-hu-portfolio.vercel.app/) | [Download the resume](https://ruilin-hu-portfolio.vercel.app/resume/ruilin-hu-resume.pdf)

Source code: https://github.com/ruilinBig4st/ruilin-hu-portfolio

## Featured Projects

- **Mini SQL Engine for Health Data Exploration:** Python implementation of CSV processing and relational operations, applied to a 253,680-row health dataset. The browser demo presents prepared query results; the full Python source and data are available as downloads. [Project overview](https://ruilin-hu-portfolio.vercel.app/projects/mini-sql-engine-health-data) | [Demo](https://ruilin-hu-portfolio.vercel.app/demos/mini-sql-engine)
- **Interactive Rental Market Visualization:** Linked map and scatter-plot exploration of 600 Sacramento-area rental listings using R, Plotly, Crosstalk, and HTML/JavaScript. The published map uses OpenStreetMap tiles without an embedded access token. [Project overview](https://ruilin-hu-portfolio.vercel.app/projects/interactive-rental-market-visualization) | [Demo](https://ruilin-hu-portfolio.vercel.app/demos/interactive-rental-market/index.html)

## Sharing

Use the live website URL in job application website fields. Use this GitHub repository URL when a platform asks for public source code. A ready-to-paste project introduction is available in [sharing-copy.md](sharing-copy.md).

## Run Locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Edit Content

Most personal content lives in `constants/portfolio.ts`, including navigation, experience, projects, skills, resume URL, and contact links.

The public resume is stored at:

```ts
resumeUrl: "/resume/ruilin-hu-resume.pdf"
```

Replace `public/resume/ruilin-hu-resume.pdf` with an updated public version when needed. Keep personal phone numbers and private information out of publicly shared files.

## Deploy

The GitHub repository is connected to the existing Vercel project `big4st/ruilin-hu-portfolio`. Pushes to `master` automatically build and deploy to https://ruilin-hu-portfolio.vercel.app/. Other branches create preview deployments.

After editing and checking your changes locally:

```bash
pnpm build
git add <changed-files>
git commit -m "Update portfolio"
git push origin master
```

Check the deployment status in https://vercel.com/big4st/ruilin-hu-portfolio. A successful production deployment updates the same website URL. Saving a local file alone does not publish it. Review staged files before committing; never upload private source materials or secrets.

Manual deployment remains available as a fallback on Windows:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\deploy.ps1
```

The script checks your login and runs a production deployment from the local folder. This can publish changes that have not been pushed to GitHub, so prefer the Git workflow above to keep source and production in sync. Your computer does not need to stay on after deployment.

Localhost (`127.0.0.1:3000`) is only a local preview, not a public website.

## Search Engines

After deployment, open `/robots.txt` and `/sitemap.xml` on the public domain. The site uses Vercel's production domain automatically. For a custom domain, set `SITE_URL` in Vercel's environment settings and redeploy.

Add the public URL as a URL-prefix property in Google Search Console. Choose HTML tag verification, set `GOOGLE_SITE_VERIFICATION` to the token in the tag's `content` attribute, and redeploy. Verify ownership, submit `sitemap.xml`, and request indexing for the homepage. Indexing and rankings are controlled by Google and are not immediate or guaranteed. Linking the website from LinkedIn helps people discover it directly.

## Included Public Files

The deployment includes the resume PDF, R visualization demo, and downloadable project archives under `public/`. `.source-materials/` and local build/dependency folders are excluded from deployment. The Mini SQL browser demo displays prepared query results; it does not run the Python SQL engine on a server.
