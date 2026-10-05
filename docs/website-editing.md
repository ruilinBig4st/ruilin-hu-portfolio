# 网站编辑与发布

本地项目：你电脑中的 `self profile` 项目文件夹。

公开网站：https://ruilin-hu-portfolio.vercel.app

## 常用文件

| 想修改什么 | 修改哪个文件 |
| --- | --- |
| 姓名、个人介绍、联系方式、教育、经历、项目介绍、技能 | `constants/portfolio.ts` |
| 简历 PDF | `public/resume/ruilin-hu-resume.pdf`，用新 PDF 替换并保留文件名 |
| 颜色、字体、间距等全站样式 | `app/globals.css`、`tailwind.config.ts` |
| 某个板块的布局 | `components/` 内对应的 `*-section.tsx` |
| 项目详情页布局 | `app/projects/[slug]/page.tsx` |
| R 可视化 Demo | `public/demos/interactive-rental-market/` |
| Mini SQL 浏览器 Demo | `app/demos/mini-sql-engine/page.tsx` |
| Mini SQL 示例查询结果 | `constants/mini-sql-demo.ts` |
| 搜索引擎验证标签 | `constants/site.ts`，验证成功后也需保留 |

`constants/portfolio.ts` 是内容配置文件。`components/` 是网页各个板块，`app/` 管理页面和路由，`public/` 放可公开访问的文件。`.next/` 和 `node_modules/` 由工具生成，不需要手动编辑。

## 编辑流程

1. 在编辑器中打开本地项目，修改对应文件并保存。
2. 在项目目录的终端执行 `pnpm dev`，打开终端显示的本地网址预览。终端保持运行时会自动显示修改。
3. 检查完成后执行 `pnpm build`，确认没有错误。
4. 检查修改文件后，将需要发布的文件提交并推送到 GitHub：

```powershell
git status
git add constants/portfolio.ts
git commit -m "Update portfolio content"
git push origin master
```

`git add` 后面应写本次实际修改的文件；例如替换简历后，使用 `git add public/resume/ruilin-hu-resume.pdf`。不要上传私人材料、密码或密钥。

5. Vercel 会自动构建并发布。到 https://vercel.com/big4st/ruilin-hu-portfolio 查看部署状态，成功后同一个网站网址会显示新版内容。

## 手动发布备用方式

通常不需要再手动部署。需要直接从本地发布时，可执行：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\deploy.ps1
```

也可以在当前项目目录执行 `pnpm dlx vercel@latest --prod --scope big4st`。本地项目已连接到 Vercel 的 `big4st/ruilin-hu-portfolio`，部署会更新同一个公开网址。电脑关闭后，公开网站仍可访问。

源码仓库已连接 Vercel 自动部署，生产分支为 `master`。只保存本地文件不会更新公开网站；推送到 GitHub 后才会自动发布。其他分支用于预览。Vercel 控制台主要用于管理部署、域名和配置，并不是编辑网页正文的地方。优先使用 GitHub 自动部署，以保持线上版本和仓库一致。

如果希望由 Codex 修改，直接说明要改的内容，例如“把简历替换为这个 PDF，并发布到线上”。可以先要求只本地预览，确认后再发布。

## 搜索收录

Google Search Console：https://search.google.com/search-console

网站验证完成后，提交 `https://ruilin-hu-portfolio.vercel.app/sitemap.xml`。所有权验证、提交站点地图和申请索引不代表 Google 已经收录，索引状态需要在 Search Console 中查看。
