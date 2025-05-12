# 函数

## 函数表达式

```ts
function foo(callback: (a: string) => void) {
    callback('hello');
}
```


## 构造函数

```ts
type SomeConstructor = {
    new(s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}
```

## 泛型函数

```ts
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}
// 类型推断
const s = firstElement(["a", "b", "c"]);
// 显示指定类型
const n = firstElement<number>([1, 2, 3]);
```
