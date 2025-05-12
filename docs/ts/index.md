# TypeScript

## 数据类型

- string 表示字符串，比如 "Hello, world"
- number 表示数字，比如 42，JavaScript 中没有 int 或者 float，所有的数字，类型都是 number
- boolean 表示布尔值，其实也就两个值： true 和 false
- any 表示任意类型，比如 `let value: any = 42;`
- Array 表示数组，比如 `number[]`、`Array<number>`
- 对象类型 Object 表示任意对象，比如 `{ name: string, age: number }`


联合类型：表示一个值可以是多种类型中的一种，比如 `let value: string | number;`


interface 和 type 的区别：
1. 类型别名本身无法添加新的属性，而接口是可以扩展的