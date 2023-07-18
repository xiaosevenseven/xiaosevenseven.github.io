# 栈

## 定义

栈是一种遵从后进先出（LIFO）原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

在现实生活中也能发现很多栈的例子。例如，一摞书或者餐厅里叠放的盘子。

```js
// 基于对象的栈
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}
```
```js
// 基于对象的栈
class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  clear() {
    this.items = {};
    this.count = 0;
  }
}
```