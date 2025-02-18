# package.json

`package.json`  文件一般都在每个项目的根目录下面，定义了这个项目所需要的各种模块，以及项目的配置信息，包括名称、版本、许可证、依赖模块等元数据。格式是严格的JSON格式。

## 必须属性 

- name: 项目名称: 长度必须小于或等于 214 个字符，不能以 “.” 和“_”开头，不能包含大写字母 
- version: 项目版本号: 格式为：「主版本号. 次版本号. 修订号」

## 描述信息

- description: 描述项目包, 它是一个字符串，可以让其他开发者在 npm 的搜索中发现我们的项目包
- keywords: 项目包关键词, 用来增加项目包的曝光率的
- author: 作者
- contributors: 贡献者
```bash
"contributors": [
  "AAAA <xxxxx@xx.com> (https://juejin.cn/user/11111)",
  "BBBB <xxxxx@xx.com> (https://juejin.cn/user/22222)"
]
```
```bash
 "contributors": [
  {
   "name" : "CUGGZ0",
   "email" : "xxxxx@xx.com",
   "url" : "https://juejin.cn/user/3544481220801815"
 },
  {
   "name" : "CUGGZ1",
   "email" : "xxxxx@xx.com",
   "url" : "https://juejin.cn/user/3544481220801815"
 }
]
```
- homepage: 项目主页
- repository: 存放仓库地址

## 文件目录

- main: 指定加载的入口文件，在 browser 和 Node 环境中都可以使用。如果我们将项目发布为 npm 包，那么当使用 require 导入 npm 包时，返回的就是 main 字段所列出的文件的 module.exports 属性。如果不指定该字段，默认是项目根目录下的 index.js。如果没找到，就会报错。
- browser: 定义 npm 包在 browser 环境下的入口文件。如果 npm 包只在 web 端使用，并且严禁在 server 端使用，使用 browser 来定义入口文件。
- module: 定义 npm 包的 ESM 规范的入口文件，browser 环境和 node 环境均可使用。如果 npm 包导出的是 ESM 规范的包，使用 module 来定义入口文件。
- bin: 指定各个内部命令对应的可执行文件的位置
- files: 当把 npm 包作为依赖包安装时需要说明的文件列表。当 npm 包发布时，files 指定的文件会被推送到 npm 服务器中，如果指定的是文件夹，那么该文件夹下面所有的文件都会被提交


## 发布配置

- private: 可以防止我们意外地将私有库发布到 npm 服务器。只需要将该字段设置为 true
- preferGlobal: 表示当用户不把该模块安装为全局模块时，如果设置为 true 就会显示警告。它并不会真正的防止用户进行局部的安装，只是对用户进行提示，防止产生误解
- license: 用于指定软件的开源协议

## 第三方配置

- typings: 用来指定 TypeScript 的入口文件
- eslintConfig: eslint 的配置
- babel: babel 用来指定 Babel 的编译配置
- lint-staged: 是一个在 Git 暂存文件上运行 linters 的工具，配置后每次修改一个文件即可给所有文件执行一次 lint 检查
- gitHooks: 用来定义一个钩子，在提交（commit）之前执行 ESlint 检查。在执行 lint 命令后，会自动修复暂存区的文件
- browserslist: 来告知支持哪些浏览器及版本。Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器

## 脚本配置

- scripts: package.json 中内置的脚本入口, 通过 npm run 来执行命令。还可以结合 pre 和 post 完成前置和后续操作, 执行顺序是 predev→dev→postdev.
```bash
"scripts": {
 "dev": "node index.js",
  "predev": "node beforeIndex.js",
  "postdev": "node afterIndex.js"
}
```
- config: 用来配置 scripts 运行时的配置参数
```bash
"config": {
 "port": 3000
}
```
```js
console.log(process.env.npm_package_config_port) // 3000
```

## 依赖配置

- dependencies: 项目的生产环境中所必须的依赖包
- devDependencies: 开发阶段需要的依赖包
- bundledDependencies: 数组里可以指定一些模块，这些模块将在这个包发布时被一起打包。
- engines: 对 npm 包的版本或者 Node 版本有要求
```bash
  "engines": {
    "node": ">=8.10.3 <12.13.0",
    "npm": ">=6.9.0"
  }
```


