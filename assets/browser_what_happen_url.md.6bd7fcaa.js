import{_ as a,o as e,c as t,W as r}from"./chunks/framework.71c88ce2.js";const P=JSON.parse('{"title":"键入网址到网页显示，期间发生了什么？","description":"","frontmatter":{},"headers":[],"relativePath":"browser/what_happen_url.md","filePath":"browser/what_happen_url.md","lastUpdated":1689679322000}'),h={name:"browser/what_happen_url.md"},o=r('<h1 id="键入网址到网页显示-期间发生了什么" tabindex="-1">键入网址到网页显示，期间发生了什么？ <a class="header-anchor" href="#键入网址到网页显示-期间发生了什么" aria-label="Permalink to &quot;键入网址到网页显示，期间发生了什么？&quot;">​</a></h1><h2 id="解析-url" tabindex="-1">解析 URL <a class="header-anchor" href="#解析-url" aria-label="Permalink to &quot;解析 URL&quot;">​</a></h2><p>首先浏览器做的第一步工作是对 URL 进行解析，从而生成发送的 Web 服务器的请求信息。当没有路径名时，就代表访问根目录下的 index.html 文件。</p><h2 id="dns-解析" tabindex="-1">DNS 解析 <a class="header-anchor" href="#dns-解析" aria-label="Permalink to &quot;DNS 解析&quot;">​</a></h2><p>DNS 是域名解析系统，是用于实现域名和 IP 地址相互映射的一个分布式数据库，能够使用户更方便的访问互联网，而不是去记住能够被机器直接读取的 IP 数串。通过主机名，得到该主机名对应的 IP 地址的过程叫做域名解析。</p><ol><li>客户端会首先发起一个 DNS 请求，先查看本地 hosts 中有没有设置对应的 IP 地址，如果有则直接返回，如果没有则向本地 DNS 服务器发起请求。</li><li>本地域服务器收到客户端请求后，如果缓存的表格里存在</li></ol><h2 id="生成-http-请求信息" tabindex="-1">生成 HTTP 请求信息 <a class="header-anchor" href="#生成-http-请求信息" aria-label="Permalink to &quot;生成 HTTP 请求信息&quot;">​</a></h2><h2 id="建立-tcp-连接" tabindex="-1">建立 TCP 连接 <a class="header-anchor" href="#建立-tcp-连接" aria-label="Permalink to &quot;建立 TCP 连接&quot;">​</a></h2><h2 id="发送-http-请求" tabindex="-1">发送 HTTP 请求 <a class="header-anchor" href="#发送-http-请求" aria-label="Permalink to &quot;发送 HTTP 请求&quot;">​</a></h2><h2 id="服务器处理请求" tabindex="-1">服务器处理请求 <a class="header-anchor" href="#服务器处理请求" aria-label="Permalink to &quot;服务器处理请求&quot;">​</a></h2><h2 id="服务器返回-http-响应" tabindex="-1">服务器返回 HTTP 响应 <a class="header-anchor" href="#服务器返回-http-响应" aria-label="Permalink to &quot;服务器返回 HTTP 响应&quot;">​</a></h2><h2 id="浏览器解析渲染页面" tabindex="-1">浏览器解析渲染页面 <a class="header-anchor" href="#浏览器解析渲染页面" aria-label="Permalink to &quot;浏览器解析渲染页面&quot;">​</a></h2><h2 id="断开连接" tabindex="-1">断开连接 <a class="header-anchor" href="#断开连接" aria-label="Permalink to &quot;断开连接&quot;">​</a></h2><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2>',14),l=[o];function i(n,d,s,c,_,u){return e(),t("div",null,l)}const b=a(h,[["render",i]]);export{P as __pageData,b as default};