# Vue


Vue 版本为 `3.5.13`;

## 目录结构

```bash
├─ packages
│  ├─ compiler-core     // 核心编译器
│  ├─ compiler-dom      // dom编译器
│  ├─ compiler-sfc      // vue单文件编译器
│  ├─ compiler-ssr      // 服务端渲染编译
│  ├─ dts-test          //测试Typescript类型以确保类型保持为预期类型
│  ├─ global.d.ts       // TypeScript声明文件
│  ├─ reactivity        // 响应式模式，可以和其它框架配合使用
│  ├─ runtime-core      // 运行时核心实例相关代码
│  ├─ runtime-dom       // 运行时dom相关API、属性、事件处理  
│  ├─ runtime-test      // 运行时测试相关代码
│  ├─ server-renderer   // 服务器渲染
│  ├─ shared            // 内部工具库，不对外暴露
│  ├─ vue               //面向公众的完整版本，包含运行时和编译器
│  └─ vue-compat        //是Vue 3的一个构建，它提供了可配置的Vue 2兼容行为。

```