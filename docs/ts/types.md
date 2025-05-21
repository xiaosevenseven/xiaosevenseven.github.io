# 类型

## 类型

### string

`string` 表示字符串值，如 `"Hello, world"`。

```ts
let myName: string = "Tom";
myName = "Jerry";
```

### number

`number` 表示数字值，如 `123`。

```ts
let myAge: number = 18;
myAge = 20.123;
```

### boolean

`boolean` 表示布尔值，如 `true` 或 `false`。

```ts
let isMarried: boolean = false;
isMarried = true;
```

### array

array 表示数组值，如 `[1, 2, 3]`。

```ts
let myHobbies: string[] = ["reading", "writing", "coding"];

let myHobbies: Array<string> = ["reading", "writing", "coding"];
```

### any

`any` 表示任意类型的值,可以给变量赋值任何类型，如 `"Hello, world"`、`123`、`true` 或 `[1, 2, 3]`。

```ts
let myName: any = "Tom";
myName = 18;
myName = true;
myName = ["reading", "writing", "coding"];
```

:::tip
不建议使用 `any` 类型，因为它会导致代码的可读性和可维护性降低。可以使用 `noImplicitAny` 选项来禁止使用 `any` 类型。

:::

### Object

`Object` 表示对象值，如 `{ name: "Tom", age: 18 }`。

```ts
let myInfo: { name: string; age: number } = {
  name: "Tom",
  age: 18,
};
```

可选类型

```ts
let myInfo: { name: string; age?: number } = {
  name: "Tom",
};
```

## 联合类型

联合类型表示一个值可以是多种类型之一。

```ts
let myName: string | number = "Tom";
myName = 18;
```

:::danger

只有在对联合的每个成员都有效的情况下才允许操作。

```ts
function getLength(something: string | number): number {
  return something.length;
}
function printId(id: number | string) {
  console.log(id.toUpperCase());
  `Property 'toUpperCase' does not exist on type 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'.`;
}
```

:::

## 类型别名

类型别名是一种给类型起别名的方式。

```ts
type Name = string;
type Age = number;
type Person = { name: Name; age: Age };
```

## 接口

接口（interface）是一种定义对象结构的类型。

```ts
interface Person {
  name: string;
  age: number;
}
let myInfo: Person = {
  name: "Tom",
  age: 18,
};
```

### interface 和 type 的区别

类型别名和接口非常相似，在很多情况下你可以在它们之间自由选择。interface 的几乎所有功能都在 type 中可用，主要区别在于无法重新打开类型以添加 ​​ 新属性，而接口始终可扩展。

## 类型断言

例如，如果你使用的是 document.getElementById，TypeScript 只知道这将返回某种 HTMLElement，但你可能知道你的页面将始终具有具有给定 ID 的 HTMLCanvasElement。

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

## null 和 undefined

null 和 undefined 用于表示值不存在或者未初始化的值。

```ts
let myName: string | null | undefined = "Tom";
myName = null;
myName = undefined;
```

:::tip
strictNullChecks 选项启用后，TypeScript 会对 null 和 undefined 进行更严格的类型检查，防止它们被意外赋值给其他类型的变量。

禁用 strictNullChecks 选项

```ts
let name: string;
name = "Alice"; // 正确
name = null; // 正确
name = undefined; // 正确
```

启用 strictNullChecks 选项

```ts
let name: string;
name = "Alice"; // 正确
name = null; // 错误 Type 'null' is not assignable to type 'string'
name = undefined; // 错误 Type 'undefined' is not assignable to type 'string'
```

:::

### 非空断言

非空断言是一种告诉 TypeScript 某个值不可能为 null 或 undefined 的方式。

```ts
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

## 枚举

## bigint

bigint 表示任意精度的整数。
```ts
let myAge: bigint = 18n;
```


## symbol

通过 `Symbol()` 创建一个全局唯一引用

```ts
let sym = Symbol("foo");
let sym2 = Symbol("foo");
console.log(sym === sym2); // false
```
