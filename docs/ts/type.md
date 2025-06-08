# 类型

## 基本类型

### string

`string` 代表字符串类型。

```ts
let str: string = "123";
let str: string = String(123);
let str: string = new String("123");
```

### number

`number` 代表数字类型。

```ts
let num: number = 123;
let num: number = Number(123);
let num: number = new Number(123);
```

### boolean

`boolean` 代表布尔类型。只有 `true` 和 `false` 两种值。

```ts
let bool: boolean = true;
let bool: boolean = Boolean(true);
let bool: boolean = new Boolean(true);
```

### array

`array` 代表数组类型。

`array` 有两种写法：

1. `type[]`
2. `Array<type>`

```ts
let arr: number[] = [1, 2, 3];
let arr: Array<number> = [1, 2, 3];
```

### any

`any` 代表任意类型。 可以赋值给任意类型。

```ts
let any: any = 123;
any = "123";
any = true;
any = [1, 2, 3];
any = { name: "123" };
any.name = "234";
```

禁用 `any` 类型



- 显式 `any` 类型: 可以使用 `any` 关键字来声明变量的类型为 `any`

```ts titile="eslint.config.ts"
{
  "rules": {
    // 禁用所有的显式 any 类型
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```



- 隐式 `any` 类型: 当 `TypeScript` 无法推断出变量的类型时，默认会将其视为 `any` 类型
```json title="tsconfig.json"
{
  "compilerOptions": {
    // 禁用隐式 any 类型
    "noImplicitAny": true
  }
}
```



## 高级类型

## 面试题

