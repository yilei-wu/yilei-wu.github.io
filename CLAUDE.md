# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with VitePress, a Vue-powered static site generator. The blog is primarily in Chinese and includes features like page view tracking using Busuanzi.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run serve
```

The dev server runs on `http://localhost:5173` by default.

## Project Structure

```
docs/                           # All site content and configuration
├── .vitepress/                 # VitePress configuration directory
│   ├── config.js              # Main configuration file (nav, sidebar, theme)
│   ├── config.ts              # Empty TypeScript config (not used)
│   ├── components/            # Custom Vue components
│   │   └── PageViews.vue      # Busuanzi page view counter component
│   └── dist/                  # Build output (generated)
├── posts/                     # Blog post markdown files
│   ├── index.md              # Posts listing page
│   ├── first-post.md         # Individual blog posts
│   └── second-post.md
├── index.md                   # Homepage
└── about.md                   # About page
```

## Architecture

### Configuration

The main configuration is in `docs/.vitepress/config.js` (not config.ts, which exists but is empty). This file defines:
- Site metadata (title, description)
- Navigation menu items
- Sidebar structure for posts
- Social links
- Footer content

### Adding New Blog Posts

To add a new blog post:
1. Create a new `.md` file in `docs/posts/` directory
2. Add frontmatter if needed
3. **Manually update** `docs/.vitepress/config.js` to add the post to the sidebar:
   ```js
   sidebar: {
     '/posts/': [
       {
         text: '文章',
         items: [
           { text: '新文章标题', link: '/posts/new-post' },
           // ... existing posts
         ]
       }
     ]
   }
   ```
4. Update `docs/posts/index.md` to include the new post in the listing

### Custom Components

Vue components in `docs/.vitepress/components/` can be used directly in markdown files. Currently includes:
- `PageViews.vue`: Integrates Busuanzi analytics for tracking page views and visitor counts

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch. The workflow:
1. Installs Node.js 18 and dependencies via `npm ci`
2. Builds the site with `npm run build`
3. Deploys the `docs/.vitepress/dist` directory to GitHub Pages

No manual deployment steps are needed.

## Technical Notes

- Uses npm (not pnpm or yarn) despite pnpm config in package.json
- VitePress version: 1.0.0-alpha.28
- Vue version: 3.2.44
- Node.js version for deployment: 18
- Build output directory: `docs/.vitepress/dist`
