# 前端代码规范化配置

对于一个成熟的前端项目，代码规范是非常重要的。 它不仅有助于保持代码的一致性，还能提高项目的可维护性和团队协作效率。 这里我们将讨论如何在前端项目中实施和配置代码规范工具，包括 ESLint、Prettier 和 Style lint。


## 编码约束

### ESLint

[ESLint](https://eslint.org) 是一款 JavaScript 和 TypeScript 的代码规范工具，能够帮助开发团队保持代码风格一致并减少常见错误。


#### 安装

- 通过 pnpm 安装 ESLint
    ```bash
    pnpm install --save-dev eslint @eslint/js
    ```
-  创建 ESLint 配置文件
    ```bash
    touch eslint.config.js
    ```
- 初始化 ESLint 配置
    ```js
    import  pluginJs from "@eslint/js"
    export default [
        {
            files: ["**/*.js", "**/*.jsx", "**/*.cjs", "**/*.mjs"]
        },
        {
            ignores: ["node_modules/**"],
        }
        pluginJs.configs.recommended
    ]
    ```

- 配置执行脚本
    ```bash
    "scripts": {
        "lint": "eslint . ",
        "lint:fix": "eslint . --fix"
    }
    ```

- 安装 globals 插件
    ```bash
    pnpm i globals -D
    ```
    在 eslint.config.js 中添加
    ```js
    import  pluginJs from "@eslint/js"
    import globals from "globals"

    export default [
        {
            files: ["**/*.js", "**/*.jsx", "**/*.cjs", "**/*.mjs"]
        },
        {
            languageOptions: {
                globals: globals.browser
            }
        },
        pluginJs.configs.recommended
    ]
    ```
- 安装 typescript 支持
    ```bash
    pnpm i typescript-eslint -D
    ```
- 配置 eslint.config.js
    ```js
    import  pluginJs from "@eslint/js"
    import globals from "globals"
    import tsLint from "typescript-eslint"

    export default [
        {
            files: ["**/*.js", "**/*.jsx", "**/*.cjs", "**/*.mjs", "**/*.ts", "**/*.tsx"]
        },
        {
            ignores: [
                "node_modules/**",
            ]
        },
        {
            languageOptions: {
                globals: globals.browser
            }
        },
        pluginJs.configs.recommended,
        ...tsLint.configs.recommended,
        {
            files: ["**/*.ts", "**/*.tsx"],
            rules: {}
        }
    ]
    ```
- 配置 tsconfig.json

- 安装 vue 支持
    ```bash
    pnpm i eslint-plugin-vue -D
    ```

    在 eslint.config.js 中添加
    ```js
    import  pluginJs from "@eslint/js"
    import globals from "globals"
    import tsLint from "typescript-eslint"
    import pluginVue from "eslint-plugin-vue"
    export default [
        {
            files: ["**/*.js", "**/*.jsx", "**/*.cjs", "**/*.mjs", "**/*.ts", "**/*.tsx", "**/*.vue"]
        },
        {
            ignores: [
                "node_modules/**",
            ]
        },
        {
            languageOptions: {
                globals: globals.browser
            }
        },
        pluginJs.configs.recommended,
        ...tsLint.configs.recommended,
        ...pluginVue.configs["flat/recommended"],
        {
            files: ["**/*.vue"],
            languageOptions: {
                parser: pluginVue.parser,
                parserOptions: {
                    parser: tsLint.parser,
                    sourceType: "module"
                }

            },
            rules: {
                'vue/multi-word-component-names': 'off'
            }
        }
    ]
    ```



### Prettier

- 安装
    ```bash
    pnpm install --save-dev prettier
    ```
    
- 创建 prettier.config.js
    ```bash
    touch prettier.config.js
    ```

- 配置 prettier.config.js
    ```js
    export default {
        semi: false,
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "none",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: "avoid",
        endOfLine: "lf"
    }
    ```
- 配置执行脚本
    ```bash
    "scripts": {
        "lint": "eslint . && prettier --check . ",
        "
        lint:fix": "eslint . --fix && prettier --write ."
    }
    ```

- 解决 prettier 与 eslint 冲突
    ```bash
    pnpm install --save-dev eslint-config-prettier
    ```
    在 eslint.config.js 中添加
    ```js
    import globals from "globals"
    import tsLint from "typescript-eslint"
    import pluginVue from "eslint-plugin-vue"
    import eslintPluginPrettier from "eslint-plugin-prettier"

    export default tsLint.config(
        {
            files: ["**/*.js", "**/*.jsx", "**/*.cjs", "**/*.mjs", "**/*.ts", "**/*.tsx", "**/*.vue"]
        },
        {
            ignores: [
                "node_modules/**",
            ]
        },
        {
            languageOptions: {
                globals: globals.browser
            }
        },
        pluginJs.configs.recommended,
        ...tsLint.configs.recommended,
        ...pluginVue.configs["flat/recommended"],

        {
            files: ["**/*.vue"],
            languageOptions: {
                parser: pluginVue.parser,
                parserOptions: {
                    parser: tsLint.parser,
                    sourceType: "module"
                }

            },
        },
        ...eslintPluginPrettier.configs.recommended
    )
    ```


### Stylelint

## 提交约束

### commitizen


### Commitlint

### Husky

###  Lint-staged


## 工程配置

### vs code 插件

VSCode 插件市场搜索 Prettier - Code formatter 插件安装

### vs code 配置


