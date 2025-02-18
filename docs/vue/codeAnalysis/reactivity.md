# 响应式模式

## ref

使用 `ref` 用于创建包含基本类型（如字符串、数字、布尔值）或对象的响应式引用。`ref` 返回一个包含 `.value` 属性的对象，用于访问和修改其存储的值。

## computed

`computed` 用于创建基于响应式数据的计算属性。计算属性会缓存其结果，只有在相关的响应式依赖发生变化时才会重新计算。

## reactive

使用 `reactive` 用于将一个普通对象转换为响应式对象。它利用 `Proxy` 拦截对对象的访问和修改，实现数据的响应式更新。

## readonly

## watchEffect

## watchPostEffect

## watchSyncEffect

## watch

`watch` 用于侦听一个或多个响应式数据的变化，并在变化时执行副作用函数。`watch` 提供了更多的灵活性，适用于需要在数据变化时执行异步操作或复杂逻辑的场景。

## onWatcherCleanup