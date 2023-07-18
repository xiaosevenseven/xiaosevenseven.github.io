# 数组

## 二分查找

二分查找又称折半查找、二分搜索、折半搜索等，二分查找算法仅适用于有序序列，它只能用在升序序列或者降序序列中查找目标元素。

```js
function exist(arr, num) {
  if (!arr || arr.length === 0) {
    return false;
  }
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    if (arr[mid] > num) {
      r = mid - 1;
    } else if (arr[mid] < num) {
      l = l + 1;
    } else {
      return true;
    }
  }
  return false;
}
```

```java
public static boolean exist(int[] arr, int num) {
  if (arr = null || arr.length === 0 ) {
    return false;
  }
  int l = 0;
  int r = arr.length - 1;
  while (l <= r) {
    int mid = l + ((r - l) >> 1);
    if (arr[mid] > num) {
      r = mid - 1;
    } else if (arr[mid] < num) {
      l = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}
```

## 满足 >= value 值最左的位置

给定一个数组和一个要查找的值，则找出 >= value 数组中最左侧的位置，如不存在，则返回 -1。

```js
function nearLeft(arr, num) {
  if (!arr || arr.length === 0) {
    return -1;
  }
  let l = 0;
  let r = arr.length - 1;
  let res = -1;
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    if (arr[mid] >= num) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return res;
}
```

```java
public static int nearLeft(int[] arr, int num) {
  if (arr == null || arr.length === 0) {
    return -1;
  }
  int l = 0;
  int r = arr.length;
  int res = -1;
  while (l <= r) {
    int mid = l + ((r - l) >> 1);
    if (arr[mid] >= num) {
       res = mid;
       r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return res;
}
```

## 满足 <= value 值最左的位置

给定一个数组和一个要查找的值，如果这个值存在数组中，则找出该值数组中最右左侧的位置，如不存在，则返回 -1。

```js
function existRight(arr, num) {
  if (!arr || arr.length === 0) {
    return -1;
  }
  let l = 0;
  let r = arr.length - 1;
  let res = -1;
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    if (arr[mid] <= num) {
      res = mid;
      r = mid - 1;
    } else {
      r = mid + 1;
    }
  }
  return res;
}
```

```java
public static int existRight(int[] arr, int num) {
  if (arr == null || arr.length === 0) {
    return -1;
  }
  int l = 0;
  int r = arr.length;
  int res = -1;
  while (l <= r) {
    int mid = l + ((r - l) >> 1);
    if (arr[mid] <= num) {
       res = mid;
       r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return res;
}
```
