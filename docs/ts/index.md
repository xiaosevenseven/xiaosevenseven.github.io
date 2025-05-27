# TypeScript


## class

```ts
class Person {
  name: string;  // 公共可写属性
  readonly age: number;  // 只读属性
  private _address: string;  // 私有属性
  protected phone: string;  // 受保护属性
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  setAge(age: number) {
    this.age = age;  // 错误：不能修改只读属性
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const person = new Person("John", 30);
person.greet();
```
### class 继承

注意：如果你有一个基类，在使用任何 this. 成员之前，你需要在构造函数主体中调用 super();

```ts
class Student extends Person {
  constructor(name: string, age: number, phone: string) {
    super(name, age);
    this.phone = phone;
  }
  study() {
    console.log(`${this.name} is studying.`);
  }
}

```
### 访问器

访问器是一种特殊的方法，它们允许你定义对象属性的读取和写入方式。

注意点：

- 如果 get 存在但没有 set，则属性自动为 readonly
- 如果不指定 setter 参数的类型，则从 getter 的返回类型推断

```ts
class Person {
  private _age: number;
  constructor(age: number) {
    this._age = age;
  } 
  get age(): number {
    return this._age;
  }
  set age(age: number) {
    if (age < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = age;
  }
}
const person = new Person(30);
console.log(person.age);  // 输出：30
person.age = 35;
console.log(person.age);  // 输出：35
person.age = -1;  // 抛出错误：Age cannot be negative
```

### 索引签名

索引签名用于描述对象的索引类型和值类型。

```ts
class MyClass {
  [key: string]: number;  // 索引签名，表示键为字符串，值为数字
}
const obj = new MyClass();
obj["key1"] = 1;
obj["key2"] = 2;
console.log(obj["key1"]);  // 输出：1
console.log(obj["key2"]);  // 输出：2
```

## 类继承

### implements

`implements` 关键字用于实现接口。

```ts
interface Animal {
  name: string;
  makeSound(): void;
}
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    console.log("Woof!");
  }
}

class Cat implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  ping() {
    console.log("Meow!");
  }
}
 // 错误：Cat 类没有实现 makeSound 方法
```

类也可以实现多个接口，例如 `class C implements A, B { }`

### extends 

`extends` 关键字用于继承类。

```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class Dog extends Animal {
    constructor(name: string) {
    super(name);
    }
  makeSound() {
    console.log("Woof!");
  }
}
const dog = new Dog("Buddy");
dog.makeSound();  // 输出：Woof!
dog.getName();  // 输出：Buddy
```