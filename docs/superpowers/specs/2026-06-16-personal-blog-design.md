# Personal Blog Redesign

## Goal

Transform the fresh Rspress project into a personal technical blog for Seven.

The site should be personal-brand first: the homepage introduces who Seven is,
what Seven focuses on, and what kinds of technical notes readers can expect.
Articles are still the main long-term content surface.

## Confirmed Direction

- Primary positioning: personal brand first.
- Content focus: technical writing.
- Article categories: Vue, React, engineering, AI.
- Homepage direction: personal capability showcase.
- Framework: keep Rspress and use the default theme where possible.

## Information Architecture

The navigation will contain:

- Home
- Vue
- React
- Engineering
- AI
- About

The existing Rspress template documentation will be removed. The site will
start with a small, clean content set that can be extended with Markdown files.

## Pages

### Home

The homepage should introduce Seven as a frontend developer focused on user
experience, frontend frameworks, engineering efficiency, and AI-assisted
development.

It should include:

- A hero section with Seven's identity and a short positioning statement.
- Capability tags or cards for Vue, React, Engineering, and AI.
- Category entry cards that link to each technical section.
- A latest articles area with links to starter posts.

### Category Pages

Each category page should explain what belongs in that section and link to a
starter article:

- Vue: Vue practice, component design, ecosystem notes.
- React: React patterns, hooks, architecture, performance.
- Engineering: build tools, linting, deployment, automation.
- AI: AI tools, coding workflows, prompts, productivity experiments.

### About

The About page should describe Seven, the technical stack, and the purpose of
the blog. It should stay concise and practical.

## Content

Create one starter article for each category so the blog feels complete and has
working navigation from day one.

Starter articles:

- Vue: Vue 项目实践笔记
- React: React 开发实践笔记
- Engineering: 前端工程化实践笔记
- AI: AI 辅助开发实践笔记

## Out of Scope

The first version will not include:

- Comment system
- Tag system
- Complex archive page
- Custom Rspress theme
- External CMS or dynamic data

These can be added later after the basic personal blog structure is stable.

## Verification

After implementation, run:

- `pnpm exec prettier --check .`
- `pnpm run lint`
- `pnpm run build`

Also verify the local site in the browser and confirm that the homepage,
category pages, article pages, and About page render correctly.
