# 用 Rspress 重搭个人博客

Rspress 适合用来构建偏技术文档形态的个人博客：路由约定清晰，Markdown 和 MDX 写作体验稳定，生产构建会输出静态文件，便于部署到 GitHub Pages。

## 项目结构

当前博客从几个目录开始：

- `docs/index.md`: 首页，用 Rspress 的 home page frontmatter 定义 hero、入口按钮和特性卡片。
- `docs/posts/`: 文章目录，每篇文章一个 Markdown 文件。
- `docs/about/`: 关于页，放个人简介、关注方向和联系方式。
- `theme/`: 主题扩展目录，用来覆盖品牌色和少量视觉细节。

## 为什么保留基础结构

个人博客最重要的是持续写作和低维护成本。相比一开始就加入复杂的标签、归档、评论和订阅，这个版本先保留稳定的导航和清晰的文章目录。后续内容增长后，再按真实需求增加 RSS、标签页或评论系统。

## 交付检查

每次改动后至少执行：

```bash
pnpm run lint
pnpm run build
```

Lint 负责发现代码和主题扩展中的明显问题，Build 负责验证 Markdown、路由和静态构建是否可用。
