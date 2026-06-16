# Personal Blog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the fresh Rspress template into Seven's personal technical blog with a brand-first homepage and Vue, React, Engineering, AI article sections.

**Architecture:** Keep Rspress default theme and use Markdown/MDX content as the main extension surface. Remove the generated documentation template, replace navigation metadata, and create a focused blog content tree under `docs/`.

**Tech Stack:** Rspress 2.0.14, Markdown, MDX, pnpm, ESLint, Prettier.

---

## File Structure

- Modify `rspress.config.ts`: keep Rspress root, title, icon, logo, add site metadata for the blog, and exclude internal Superpowers docs from generated routes.
- Modify `docs/_nav.json`: replace generated docs navigation with blog navigation.
- Replace `docs/index.md` with `docs/index.mdx`: brand-first homepage with capability cards, category links, and latest article links.
- Create `docs/about/index.md`: concise personal profile and blog purpose.
- Create `docs/vue/index.md` and `docs/vue/vue-project-practice.md`: Vue section and starter article.
- Create `docs/react/index.md` and `docs/react/react-development-practice.md`: React section and starter article.
- Create `docs/engineering/index.md` and `docs/engineering/frontend-engineering-practice.md`: Engineering section and starter article.
- Create `docs/ai/index.md` and `docs/ai/ai-assisted-development-practice.md`: AI section and starter article.
- Create section `_meta.json` files for Vue, React, Engineering, AI, and About ordering.
- Delete generated template folders `docs/guide/` and `docs/api/`.
- Modify `README.md`: describe this project as Seven's personal technical blog and document pnpm commands.
- Modify `.gitignore`: keep `.superpowers/` ignored because browser brainstorming artifacts are local only.

---

### Task 1: Confirm Template Baseline

**Files:**

- Read: `docs/_nav.json`
- Read: `docs/index.md`
- Read: `docs/guide/start/introduction.md`
- Read: `docs/api/index.mdx`

- [ ] **Step 1: Run baseline content checks**

Run:

```bash
test -f docs/guide/start/introduction.md
test -f docs/api/index.mdx
rg -n '"指南"|"API"|Rspress 文档站点' docs/_nav.json docs/index.md
```

Expected: PASS. This confirms generated Rspress template content is still present before replacement.

- [ ] **Step 2: Record current build health**

Run:

```bash
pnpm run build
```

Expected: PASS with `Rspress v2.0.14` and output under `doc_build/`.

---

### Task 2: Replace Navigation And Site Metadata

**Files:**

- Modify: `rspress.config.ts`
- Modify: `docs/_nav.json`

- [ ] **Step 1: Write the expected navigation check before implementation**

Run:

```bash
rg -n '"首页"|"Vue"|"React"|"工程化"|"AI"|"关于"' docs/_nav.json
```

Expected: FAIL or partial output because the generated navigation still points to Guide and API.

- [ ] **Step 2: Replace `rspress.config.ts` content**

Use this complete file:

```ts
import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  title: "Seven's Blog",
  description: 'Seven 的个人技术博客，记录 Vue、React、工程化与 AI 实践。',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/xiaosevenseven',
      },
    ],
  },
  route: {
    exclude: ['superpowers/**'],
  },
});
```

- [ ] **Step 3: Replace `docs/_nav.json` content**

Use this complete file:

```json
[
  {
    "text": "首页",
    "link": "/"
  },
  {
    "text": "Vue",
    "link": "/vue/"
  },
  {
    "text": "React",
    "link": "/react/"
  },
  {
    "text": "工程化",
    "link": "/engineering/"
  },
  {
    "text": "AI",
    "link": "/ai/"
  },
  {
    "text": "关于",
    "link": "/about/"
  }
]
```

- [ ] **Step 4: Verify navigation check passes**

Run:

```bash
rg -n '"首页"|"Vue"|"React"|"工程化"|"AI"|"关于"' docs/_nav.json
```

Expected: PASS with six matching navigation labels.

---

### Task 3: Build The Brand-First Homepage

**Files:**

- Delete: `docs/index.md`
- Create: `docs/index.mdx`

- [ ] **Step 1: Write the expected homepage check before implementation**

Run:

```bash
rg -n '前端开发者|Vue 项目实践笔记|React 开发实践笔记|AI 辅助开发实践笔记' docs/index.md docs/index.mdx
```

Expected: FAIL because the current homepage still describes Rspress.

- [ ] **Step 2: Delete generated Markdown homepage**

Run:

```bash
rm docs/index.md
```

Expected: `docs/index.md` is removed.

- [ ] **Step 3: Create `docs/index.mdx`**

Use this complete file:

```mdx
---
pageType: home

hero:
  name: Seven's Blog
  text: 前端开发者，关注体验与工程效率
  tagline: 记录 Vue、React、工程化和 AI 辅助开发中的实践、思考与复盘。
  actions:
    - theme: brand
      text: 阅读技术文章
      link: /vue/
    - theme: alt
      text: 了解 Seven
      link: /about/
  image:
    src: /rspress-icon.png
    alt: Seven's Blog
features:
  - title: Vue
    details: 组件设计、项目实践、生态工具与性能优化。
    icon: 🟢
    link: /vue/
  - title: React
    details: Hooks、状态管理、架构拆分与工程实践。
    icon: ⚛️
    link: /react/
  - title: 工程化
    details: 构建、规范、自动化、部署和质量保障。
    icon: 🧰
    link: /engineering/
  - title: AI
    details: AI 编程工作流、提示词、效率工具与落地经验。
    icon: 🤖
    link: /ai/
---

## 最新文章

- [Vue 项目实践笔记](/vue/vue-project-practice)
- [React 开发实践笔记](/react/react-development-practice)
- [前端工程化实践笔记](/engineering/frontend-engineering-practice)
- [AI 辅助开发实践笔记](/ai/ai-assisted-development-practice)

## 博客定位

这里会持续沉淀 Seven 在前端开发、工程效率和 AI 辅助开发中的实践经验。
内容会优先关注可复用的方法、真实项目里的取舍，以及能直接改善开发效率的工具链。
```

- [ ] **Step 4: Verify homepage check passes**

Run:

```bash
rg -n '前端开发者|Vue 项目实践笔记|React 开发实践笔记|AI 辅助开发实践笔记' docs/index.mdx
```

Expected: PASS with all four phrases.

---

### Task 4: Create Blog Sections And Starter Articles

**Files:**

- Create: `docs/vue/_meta.json`
- Create: `docs/vue/index.md`
- Create: `docs/vue/vue-project-practice.md`
- Create: `docs/react/_meta.json`
- Create: `docs/react/index.md`
- Create: `docs/react/react-development-practice.md`
- Create: `docs/engineering/_meta.json`
- Create: `docs/engineering/index.md`
- Create: `docs/engineering/frontend-engineering-practice.md`
- Create: `docs/ai/_meta.json`
- Create: `docs/ai/index.md`
- Create: `docs/ai/ai-assisted-development-practice.md`

- [ ] **Step 1: Write the expected section check before implementation**

Run:

```bash
test -f docs/react/index.md
test -f docs/engineering/frontend-engineering-practice.md
test -f docs/ai/ai-assisted-development-practice.md
```

Expected: FAIL because the new blog sections do not exist yet.

- [ ] **Step 2: Create Vue files**

Create `docs/vue/_meta.json`:

```json
["index", "vue-project-practice"]
```

Create `docs/vue/index.md`:

```md
# Vue

Vue 章节记录组件设计、项目实践、生态工具和性能优化相关内容。

## 文章

- [Vue 项目实践笔记](/vue/vue-project-practice)
```

Create `docs/vue/vue-project-practice.md`:

```md
# Vue 项目实践笔记

Vue 项目实践重点关注组件边界、状态组织、路由拆分和工程约束。

## 记录方向

- 组件如何拆分才能保持清晰职责。
- 页面状态如何在局部状态和全局状态之间取舍。
- 项目规范如何帮助团队减少重复沟通。

## 写作原则

每次记录都尽量包含背景、取舍、实现方式和验证结果。
```

- [ ] **Step 3: Create React files**

Create `docs/react/_meta.json`:

```json
["index", "react-development-practice"]
```

Create `docs/react/index.md`:

```md
# React

React 章节记录 Hooks、状态管理、组件架构、性能和团队实践。

## 文章

- [React 开发实践笔记](/react/react-development-practice)
```

Create `docs/react/react-development-practice.md`:

```md
# React 开发实践笔记

React 开发实践重点关注组件组合、状态流向、渲染性能和可维护性。

## 记录方向

- Hooks 如何封装业务逻辑。
- 组件如何通过组合减少耦合。
- 性能优化如何从数据流和渲染边界开始。

## 写作原则

每次记录都尽量说明问题来源、拆分方式、实现边界和复盘结论。
```

- [ ] **Step 4: Create Engineering files**

Create `docs/engineering/_meta.json`:

```json
["index", "frontend-engineering-practice"]
```

Create `docs/engineering/index.md`:

```md
# 工程化

工程化章节记录构建、规范、自动化、部署和质量保障相关内容。

## 文章

- [前端工程化实践笔记](/engineering/frontend-engineering-practice)
```

Create `docs/engineering/frontend-engineering-practice.md`:

```md
# 前端工程化实践笔记

前端工程化的目标是让项目更稳定、协作更清晰、发布更可控。

## 记录方向

- 构建工具如何服务项目规模。
- 代码规范如何前移质量问题。
- 自动化流程如何减少重复劳动。

## 实践原则

工程化记录优先关注能落地的约束、自动化流程和可验证收益。
```

- [ ] **Step 5: Create AI files**

Create `docs/ai/_meta.json`:

```json
["index", "ai-assisted-development-practice"]
```

Create `docs/ai/index.md`:

```md
# AI

AI 章节记录 AI 辅助开发、提示词、工具链和效率实验。

## 文章

- [AI 辅助开发实践笔记](/ai/ai-assisted-development-practice)
```

Create `docs/ai/ai-assisted-development-practice.md`:

```md
# AI 辅助开发实践笔记

AI 辅助开发的价值在于把重复劳动自动化，把复杂问题拆解得更清楚。

## 记录方向

- 如何让 AI 参与需求拆解和代码实现。
- 如何用验证命令约束 AI 输出质量。
- 如何把提示词沉淀成稳定工作流。

## 实践原则

AI 记录优先关注具体工作流、验证方式和稳定复用的方法。
```

- [ ] **Step 6: Verify section check passes**

Run:

```bash
test -f docs/vue/vue-project-practice.md
test -f docs/react/react-development-practice.md
test -f docs/engineering/frontend-engineering-practice.md
test -f docs/ai/ai-assisted-development-practice.md
```

Expected: PASS.

---

### Task 5: Create About Page And Remove Template Docs

**Files:**

- Create: `docs/about/_meta.json`
- Create: `docs/about/index.md`
- Delete: `docs/guide/`
- Delete: `docs/api/`

- [ ] **Step 1: Write the expected cleanup check before implementation**

Run:

```bash
test ! -d docs/guide
test ! -d docs/api
test -f docs/about/index.md
```

Expected: FAIL because generated template folders still exist and the About page does not exist yet.

- [ ] **Step 2: Create About files**

Create `docs/about/_meta.json`:

```json
["index"]
```

Create `docs/about/index.md`:

```md
# 关于 Seven

Seven 是一名前端开发者，关注用户体验、前端框架实践、工程效率和 AI 辅助开发。

## 技术关注

- Vue 与 React 项目实践
- 前端工程化与质量保障
- AI 工具在研发流程中的落地
- 可维护的组件、页面和项目结构

## 博客目标

这个博客用于记录真实开发中的经验、问题和复盘。内容会尽量保持清晰、可验证、可复用。
```

- [ ] **Step 3: Delete generated template docs**

Run:

```bash
rm -rf docs/guide docs/api
```

Expected: `docs/guide` and `docs/api` no longer exist.

- [ ] **Step 4: Verify cleanup check passes**

Run:

```bash
test ! -d docs/guide
test ! -d docs/api
test -f docs/about/index.md
```

Expected: PASS.

---

### Task 6: Update README And Local Ignore Rules

**Files:**

- Modify: `README.md`
- Modify: `.gitignore`

- [ ] **Step 1: Write the expected README check before implementation**

Run:

```bash
rg -n "个人技术博客|pnpm install|pnpm run dev|pnpm run build|pnpm run preview" README.md
```

Expected: FAIL or partial output because README still uses the generated template wording.

- [ ] **Step 2: Replace `README.md` content**

Use this complete file:

````md
# xiaosevenseven.github.io

Seven 的个人技术博客，使用 Rspress 构建。

## 内容方向

- Vue
- React
- 工程化
- AI

## Setup

Install the dependencies:

```bash
pnpm install
```
````

## Get started

Start the dev server:

```bash
pnpm run dev
```

Build the website for production:

```bash
pnpm run build
```

Preview the production build locally:

```bash
pnpm run preview
```

````

- [ ] **Step 3: Ensure `.superpowers/` is ignored**

Run:

```bash
rg -n '^\.superpowers/$' .gitignore
````

Expected: PASS with `.superpowers/`.

- [ ] **Step 4: Verify README check passes**

Run:

```bash
rg -n "个人技术博客|pnpm install|pnpm run dev|pnpm run build|pnpm run preview" README.md
```

Expected: PASS with all command strings present.

---

### Task 7: Format, Build, And Browser Verify

**Files:**

- Verify: all modified blog files.

- [ ] **Step 1: Run Prettier check**

Run:

```bash
pnpm exec prettier --check .
```

Expected: PASS with `All matched files use Prettier code style!`.

- [ ] **Step 2: Run ESLint**

Run:

```bash
pnpm run lint
```

Expected: PASS with no ESLint errors.

- [ ] **Step 3: Run production build**

Run:

```bash
pnpm run build
```

Expected: PASS with Rspress build output and generated HTML for `/`, `/vue/`, `/react/`, `/engineering/`, `/ai/`, and `/about/`.

- [ ] **Step 4: Verify local dev server**

Run:

```bash
curl -I http://localhost:3000/
```

Expected: HTTP status `200 OK`.

- [ ] **Step 5: Verify key routes in browser**

Open these routes in the in-app browser or reload them if already open:

```text
http://localhost:3000/
http://localhost:3000/vue/
http://localhost:3000/react/
http://localhost:3000/engineering/
http://localhost:3000/ai/
http://localhost:3000/about/
```

Expected: each route renders page content with no console errors.

---

## Self-Review

- Spec coverage: Tasks 2 and 3 implement brand-first homepage and navigation. Task 4 implements Vue, React, Engineering, and AI category pages plus starter articles. Task 5 implements About and removes generated docs. Task 7 covers verification.
- Placeholder scan: The plan contains no deferred fields or unspecified implementation steps.
- Type consistency: File names and links match across navigation, homepage links, section pages, and article files.
