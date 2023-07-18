# JavaScript

## 数据类型

| 类型      | 描述   | 对象包装器 |
| --------- | ------ | ---------- |
| Null      | 空值   | N/A        |
| Undefined | 未定义 | N/A        |
| Boolean   | 布尔值 | Boolean    |
| Number    | 数值   | Number     |
| String    | 字符串 | String     |
| Symbol    | 符号   | Symbol     |
| BigInt    | 大整数 | BigInt     |
| Object    | 对象   | Object     |

存储方式

- 基本数据类型：直接存储在栈内存中，占据空间小，大小固定。
- 引用数据类型：数据存储在堆内存中，占据空间大，大小不固定。将引用地址存储在栈内存中，通过引用地址找到堆内存中的数据。

## 数据类型检测

### typeof

返回值： 返回一个字符串，表示操作数的类型。

基本用法

```js
typeof 37 === "number";
```

| 类型         | 结果      |
| ------------ | --------- |
| Null         | object    |
| Undefined    | undefined |
| Boolean      | boolean   |
| Number       | number    |
| String       | string    |
| Symbol       | symbol    |
| BigInt       | bigint    |
| Object       | object    |
| Function     | function  |
| 其他任何对象 | object    |

### instanceof

instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

基本用法

```js
object instanceof constructor;
```



### constructor

### Object.prototype.toString.call()

### 总结

## 数据类型转换
