# Prettier

Linter 有两类规则

- 格式化规则
- 代码质量规则

## 安装

概括：
1. 在你的项目中本地安装精确版本的 Prettier。这确保项目中的每个人都获得完全相同版本的 Prettier。即使是 Prettier 的补丁版本也会导致格式略有不同，因此你不希望不同的团队成员使用不同的版本并来回格式化彼此的更改。 
2. 添加 .prettierrc 以让你的编辑器知道你正在使用 Prettier。 
3. 添加一个 .prettierignore 让你的编辑器知道哪些文件不要触及，以及能够运行 prettier --write . 来格式化整个项目（不会破坏你不想要的文件，或阻塞生成的文件）。 
4. 在 CI 中运行 prettier --check . 以确保你的项目保持格式化。 
5. 从你的编辑器运行 Prettier 以获得最佳体验。 
6. 使用 eslint-config-prettier 让 Prettier 和 ESLint 一起玩得很好。 
7. 设置预提交钩子以确保每次提交都已格式化。

### 本地安装

1. 安装依赖
    ```bash
    pnpm add --save-dev --save-exact prettier
    ```
2. 创建配置文件，添加配置文件
    ```bash
    touch .prettierrc
    ```
3. 创建 .prettierignore 文件,告诉编辑器哪些文件不需要格式化
    ```bash
    touch .prettierignore
    ```
4. 格式化所有文件
    ```bash
    pnpm exec prettier . --write  # 格式化所有文件，并保存到本地
    pnpm exec prettier . --check  # 检查是否符合规则，但不修改文件
    ```


如果你使用 ESLint，请安装 eslint-config-prettier 以使 ESLint 和 Prettier 相互配合。它会关闭所有不必要的或可能与 Prettier 冲突的 ESLint 规则。Stylelint 有一个类似的配置：stylelint-config-prettier

最后，我们拥有运行 prettier 的工具，然后通过运行 eslint --fix 立即对文件进行 lint。

- prettier-eslint 
- prettier-stylelint

如果 Prettier 输出的某些方面使 Prettier 对你完全无法使用，那么这些将很有用。然后你可以让 eslint --fix 为你解决这个问题。缺点是这些工具比只运行 Prettier 慢得多。

### Git 钩子

许多人喜欢将 Prettier 作为预提交钩子运行。这可确保你的所有提交都已格式化，而无需等待 CI 构建完成。

1. 安装依赖
    ```bash
   pnpm add --save-dev husky lint-staged
   ```
2. 配置 package.json

## 格式化规则


## 代码质量规则