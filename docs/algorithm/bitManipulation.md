# 位元算

<!-- 打印一个表格 -->

| 符号 | 描述 |                        运算规则                        |
| :--: | :--: | :----------------------------------------------------: |
|  &   |  与  |              两个位都为 1 时，结果才为 1               |
|  \|  |  或  |              两个位都为 0 时，结果才为 0               |
|  ^   | 异或 |                两个位相同为 0，相异为 1                |
|  ~   | 取反 |                     0 变 1，1 变 0                     |
|  <<  | 左移 |       各二进位全部左移若干位，高位丢弃，低位补 0       |
|  >>  | 右移 | 各二进位全部右移若干位，对无符号数，高位补 0，有符号数 |

## 打印出现奇数次的一个数

```js
function printOddTimesNum1(arr) {
  let eor = 0;
  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i];
  }
  return eor;
}
```

```java
public static void printOddTimesNum1(int[] arr) {
  int eor = 0;
  for (int i = 0; i < arr.length; i++) {
    eor ^= arr[i];
  }
  return eor;
}
```

## 打印出现奇数次的两个数

```js
function printOddTimesNum2(arr) {
  let eor = 0;
  // 寻找出 a ^ b 的结果
  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i];
  }

  // 提取出 a 和 b 最右侧的 1
  let rightOne = eor & (~eor + 1);

  // 寻找出 a 或 b
  let onlyOne = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] & rightOne) {
      onlyOne ^= arr[i];
    }
  }
  return [onlyOne, eor ^ onlyOne];
}
```

```java
public static void printOddTimesNum2(int[] arr) {
  int eor = 0;

  // 寻找出 a ^ b
  for(int i = 0; i < arr.length; i++) {
    eor ^= arr[i];
  }

  // 寻找 a ^ b 最右侧的 1
  int rightOne = eor & (-eor);

  // 寻找出 a 或者 b
  int onlyOne = 0;
  for (int i = 0; i <arr.length; i++) {
    onlyOne ^= arr[i];
  }
  return new int[]{onlyOne, onlyOne ^ eor}
}
```
