# Eslint

| 工具		              |   功能   |             代表工具 |
|-------------------|:------:|-----------------:|
| ESLint            | 代码质量检查 |    提前发现潜在问题和语法错误 |
| Prettier          | 代码格式化  |    统一代码风格，避免格式争议 |
| Husky、lint-staged | 自动化校验  | 提供即时反馈，保存时自动修复问题 |


## 依赖安装

- eslint: 核心功能，提供代码质量检查。
- @eslint/js: 提供JavaScript的ESLint插件。
- globals: 提供全局变量声明，避免未定义变量的错误。
- eslint-plugin-vue: 提供Vue.js的ESLint插件。
- typescript-eslint: 提供TypeScript的ESLint插件。

## 自动化安装配置

1. 初始化项目配置
    ```bash
   pnpm create @eslint/config@latest
   ```
2. 选择配置类型
    ```bash
   ? How would you like to use ESLint? … 
    To check syntax only  # 只检查语法错误
    ❯ To check syntax and find problems  # 检查语法并发现潜在问题
   ```
3. 选择模块化方式
    ```bash
   What type of modules does your project use? … 
    ❯ JavaScript modules (import/export)
    CommonJS (require/exports)
    None of these
   ```
4. 选择框架
    ```bash
   ? Which framework does your project use? … 
    ❯ React
    Vue.js
    None of these
   ```
5. 项目中是否使用 TypeScript ?
    ```bash
   ? Does your project use TypeScript? … 
    ❯ No
    Yes
    ```
6. 代码运行环境
    ```bash
   Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
    ✔ Browser
    ✔ Node
   ```
7. 是否安装依赖
    ```bash
   The config that you've selected requires the following dependencies:

    eslint, globals, @eslint/js, typescript-eslint, eslint-plugin-vue
    ? Would you like to install them now? › No / Yes
   ```

## 配置文件

- name: 配置名称
- files: 指示配置对象应应用于的文件的通配符模式数组。如果未指定，则配置对象适用于与任何其他配置对象匹配的所有文件
- ignores: 指示应从匹配的文件中排除的文件的通配符模式数组
- languageOptions: 配置特定于语言的语言选项
  - ecmaVersion: ECMAScript版本（默认："latest"）
  - sourceType: 指定源代码的类型（默认："module"）
  - globals: 定义全局变量
  - parser: 指定解析器
  - parserOptions: 指定解析器的选项
- linterOptions: 配置特定于linter的选项
  - noInlineConfig: 指示是否允许内联配置
- processor: 指定处理器
- plugins: 包含插件名称到插件对象的名称-值映射的对象。指定 files 时，这些插件仅对匹配的文件可用。 
- rules: 包含配置规则的对象。当指定 files 或 ignores 时，这些规则配置只对匹配的文件可用。 
- settings: 一个包含名称-值对信息的对象，所有规则都应使用这些信息。

## 从零搭建 ESlint 配置

- 安装依赖
   ```bash
   pnpm i eslint @eslint/js -D
   ```
  
- 创建配置文件
    ```bash
   touch eslint.config.js
   ```

- 配置文件：配置文件需要默认导出一个数组，每一项是一个独立的配置对象
    ```js
    import pluginJs from "@eslint/js";
    export default [
        {
        files: ['*.js', '*.cjs', '*.mjs'],
            languageOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        },
        pluginJs.configs.recommended,
    ]
   ```
- 添加脚本
    ```json
   {
      "scripts": {
        "lint": "eslint . --ext .js,.mjs,.cjs,.ts,.vue",
        "lint:fix": "eslint . --ext .js,.mjs,.cjs,.ts,.vue --fix", 
      }  
   }

   ```
- 安装 globals 插件
    ```bash
   pnpm i globals -D
   ```
- 在配置对象中添加全局变量声明
    ```js
    import pluginJs from "@eslint/js";
    import globals from 'globals'
    export default [
        {
        files: ['*.js', '*.cjs', '*.mjs'],
            languageOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                globals: globals.browser
            }
        },
        pluginJs.configs.recommended,
    ]
   ```
   
- 安装 ts 插件
    ```bash
   pnpm i typescript-eslint -D
   ```
- 配置 ts 文件
    ```js
    import pluginJs from "@eslint/js";
    import globals from 'globals';
    import typescriptEslint from 'typescript-eslint';
    export default [
        {
            files: ['*.js', '*.cjs', '*.mjs', "*.jsx", '*.tsx', '*.ts', '*.cts', '*.mts'],
            languageOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                globals: globals.browser
            }
        },
        pluginJs.configs.recommended,
        ...typescriptEslint.configs.recommended,
    ]
    ```
- 安装 vue 插件
    ```bash
   pnpm i eslint-plugin-vue -D
   ```
- 配置 vue 文件
    ```js
    import pluginJs from "@eslint/js";
    import globals from 'globals';
    import typescriptEslint from 'typescript-eslint';
    import pluginVue from 'eslint-plugin-vue';

    export default [
        {
            files: ['*.js', '*.cjs', '*.mjs', "*.jsx", '*.tsx', '*.ts', '*.cts', '*.mts', '*.vue'],
            languageOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                globals: globals.browser
            }
        },
        pluginJs.configs.recommended,
        ...typescriptEslint.configs.recommended,
        ...pluginVue.configs["flat/essential"],
        {
            files: ['**/*.vue'],
            languageOptions: {
                parserOptions: {
                    parser: typescriptEslint.parser
                }
            }
        }
    ]
     ```
