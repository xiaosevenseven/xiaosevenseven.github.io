# Eslint

| 工具		              |   功能   |             代表工具 |
|-------------------|:------:|-----------------:|
| ESLint            | 代码质量检查 |    提前发现潜在问题和语法错误 |
| Prettier          | 代码格式化  |    统一代码风格，避免格式争议 |
| Husky、lint-staged | 自动化校验  | 提供即时反馈，保存时自动修复问题 |


- eslint
- eslint-plugin-vue
- prettier
- @vue/eslint-config-prettier
- @vue/eslint-config-typescript
- eslint-plugin-prettier: 将 Prettier 的问题以 ESLint 错误的形式呈现。
- eslint-config-prettier: 关闭 ESLint 中与 Prettier 冲突的规则。

```
// eslint vue插件安装
pnpm add eslint eslint-plugin-vue -D
//eslint 识别ts语法
pnpm add @typescript-eslint/parser
//eslint ts默认规则补充
pnpm add @typescript-eslint/eslint-plugin -D

```