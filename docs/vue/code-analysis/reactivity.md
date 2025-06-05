# reactivity

## reactive

`reactive` 是一个创建响应式数据的函数，它接收一个对象作为参数，返回一个响应式对象。

```ts
// 表示 泛型 T 必须是一个引用数据类型对象，
// 返回类型为 Reactive<T> 是经过响应式处理的对象类型
export function reactive<T extends object>(target: T): Reactive<T>
export function reactive(target: object) {
    // 当目标数据只读时，直接返回
  if (isReadonly(target)) {
    return target
  }
  return createReactiveObject(
    target,                         // 目标对象 
    false,                          // 非只读     
    mutableHandlers,                // 基础处理程序
    mutableCollectionHandlers,      // 集合处理程序
    reactiveMap,                    // 存储的代理映射
  )
}
```

`reactive` 函数首先检查传入的对象是否已经通过 `reactive` 函数创建过响应式对象，如果是则直接返回该对象。然后，它使用 `createReactiveObject` 函数创建一个响应式对象，并返回该对象。

```ts
// 创建响应式对象
function createReactiveObject(
  target: Target,   // 目标对象
  isReadonly: boolean,  // 是否只读
  baseHandlers: ProxyHandler<any>,  // 基础处理程序
  collectionHandlers: ProxyHandler<any>,    // 集合处理程序
  proxyMap: WeakMap<Target, any>,   // 代理映射
) {
  // 如果目标不是对象，则直接返回
  if (!isObject(target)) {
    if (__DEV__) {
      warn(
        `value cannot be made ${isReadonly ? 'readonly' : 'reactive'}: ${String(
          target,
        )}`,
      )
    }
    return target
  }
  // 如果目标已经是代理对象 并且 不是在对响应式对象创建只读代理
  // 则直接返回
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target
  }
  
  // 获取目标对象的类型
  const targetType = getTargetType(target)
  // 如果目标对象类型无效，则直接返回
  if (targetType === TargetType.INVALID) {
    return target
  }

  // 获取目标对象缓存的代理对象，如果存在则直接返回
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  // 创建代理对象
  // 如果目标对象是集合类型，则使用集合处理程序，否则使用基础处理程序
  // 并将代理对象存储到代理映射中
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers,
  )
  proxyMap.set(target, proxy)
  return proxy
}
```

整体逻辑：

1. 检查目标是否为对象，如果不是则直接返回。
2. 检查目标是否已经是代理对象，如果是则直接返回。
3. 获取目标对象的类型，如果类型无效则直接返回。
4. 获取目标对象缓存的代理对象，如果存在则直接返回。
5. 创建代理对象，根据目标对象的类型选择使用基础处理程序或集合处理程序，并将代理对象存储到代理映射中。
6. 返回代理对象

###  基础处理程序

基础处理程序是一个通用的处理程序，用于处理所有类型的目标对象。它使用 Reflect API 来实现代理对象的基本功能，包括读取属性、设置属性、删除属性、检查属性是否存在等。

#### MutableReactiveHandler




#### BaseReactiveHandler

#### readonlyHandlers

#### shallowReadonlyHandlers

#### shallowReactiveHandlers