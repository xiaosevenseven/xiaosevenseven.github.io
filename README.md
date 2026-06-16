# Seven Blog

Seven 的个人技术博客，使用 Rspress 构建并发布到 GitHub Pages。

## 内容结构

- `docs/index.md`: 博客首页
- `docs/posts/`: 技术文章
- `docs/about/`: 关于页
- `theme/`: Rspress 主题扩展与样式
- `.github/workflows/deploy.yml`: GitHub Pages 部署流程

## 本地开发

安装依赖：

```bash
pnpm install
```

启动开发服务：

```bash
pnpm run dev
```

构建生产站点：

```bash
pnpm run build
```

预览生产构建：

```bash
pnpm run preview
```

## 质量检查

```bash
pnpm run ci
```

## CI/CD

GitHub Actions 工作流位于 `.github/workflows/deploy.yml`。

- Pull Request 到 `main`: 安装依赖并执行 `pnpm run ci`。
- Push 到 `main`: 执行质量检查，构建 `doc_build`，并发布到 GitHub Pages。
- 手动发布: 在 GitHub Actions 页面运行 `CI/CD` workflow。

首次使用前，在 GitHub 仓库设置中打开 `Settings -> Pages`，将 `Build and deployment` 的 `Source` 设置为 `GitHub Actions`。
