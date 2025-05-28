# Vue


版本：3.5.14

文件目录结构
```
├── .github/                            GitHub 相关配置
├── .vscode/                            VS Code 配置
├── .well-known/                        用于 DNS 预获取
├── changelogs/                         更新日志    
├── packages/                           包
│   ├── compiler-core/                  编译器核心
│   ├── compiler-dom/                   DOM 渲染器
│   ├── compiler-sfc/                   SFC 编译器
│   ├── compiler-ssr/                   SSR 渲染器  
│   ├── reactivity/                     响应式系统
│   ├── runtime-core/                   运行时核心
│   ├── runtime-dom/                    DOM 运行时
│   ├── runtime-test/                   运行时测试
│   ├── server-renderer/                服务器渲染器
│   ├── shared/                         共享代码
│   ├── vue/                            核心包
│   ├── vue-compat/                     Vue 2 兼容
│   └── global.d.ts                     全局类型声明
├── packages-private/                   私有包
├── scripts/                            脚本
├── .gitignore                           Git 忽略文件
├── .node-version                       Node.js 版本
├── eslint.config.js                    ESLint 配置       
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── rollup.config.js                  
├── rollup.dts.config.js
├── tsconfig.build.json
├── tsconfig.json
├── vitest.config.ts
├── vitest.e2e.config.ts
├── vitest.unit.config.ts
└── vitest.workspace.ts
