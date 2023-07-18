# 排序

## 冒泡排序

它重复的走访过要排列的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复的进行直到没有再需要交换，则表示该数列排序完成。名称的由来是因为越小的元素会经过交换慢慢“浮”到数列的顶端。

<!-- ![bubbleSort.gif](/blog/public/images/bubbleSort.gif) -->

```js
function bubbleSort(arr) {
  if (!arr || arr.length === 0) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}
function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
```

```java
public static void bubbleSort(int[] arr) {
  if (arr == null || arr.length == 0) {
    return;
  }
  for (int i = 0; i < arr.length - 1; i++) {
    for (int j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}
public static void swap(int[] arr, int i, int j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
```

## 选择排序

选择排序是将未排序的序列中第一个假定为最小的，然后再从剩余未排序序列中寻找更小的，然后把最小的放在未排列的最前面，重复上面步骤。

```js
function selectionSort(arr) {
  if (!arr || arr.length === 0) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        // 当未排序的序列中存在更小的，则将索引保存在 minIndex
        minIndex = j;
      }
    }
    if (arr[minIndex] !== arr[i]) {
      // 如果 minIndex 发生过改变，说明未排序的序列中存在更小的，则需要将未排序的第一个元素和最小的元素进行调换
      swap(arr, minIndex, i);
    }
  }
}
function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
```

```java
public static viod selectSort(int[] arr) {
  if (arr == null || arr.length === 0) {
    return ;
  }
  for (int i = 0; i < arr.length - 1; i++) {
    int minIndex = i;
    for (int j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
         minIndex = j;
      }
    }
    if (arr[minIndex] !== arr[i]) {
      swap(arr, minIndex, i);
    }
  }
}
public static void swap(int[] arr, int i, int j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
```

## 插入排序

插入排序就跟打扑克抓牌一样，每次抓新牌都会在手中已经排序好的牌从后往前比对进行插入，所以叫插入排序。

```js
function insertSort(arr) {
  if (!arr || arr.length === 0) {
    return;
  }
  for (let i = 1; i < arr.length; i++) {
    for (j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      swap(arr, j - 1, j);
    }
  }
}
function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
```

```java
public static void insertSort(int[] arr) {
  if (arr == null || arr.length == 0){
    return;
  }
  for (int i = 1; i < arr.length; i++) {
    for (int j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      swap(arr, j - 1, j)
    }
  }
}
public static void swap(int[] arr, int i, int j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
```

## 希尔排序

## 归并排序

```js
function mergeSort(arr) {
  if (!arr || arr.length < 2) {
    return;
  }
  process(arr, 0, arr.length - 1);
}

function process(arr, l, r) {
  if (l === r) {
    return;
  }
  let mid = l + ((r - l) >> 1);
  process(arr, l, mid);
  process(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

function merge(arr, l, mid, r) {
  let hlep = [];
  let p1 = l;
  let p2 = mid + 1;
  let index = 0;
  while (p1 <= mid && p2 <= r) {
    help[index++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= mid) {
    help[index++] = arr[p1++];
  }
  while (p2 <= r) {
    help[index++] = arr[p2++];
  }
  for (let i = 0; i < help.length; i++) {
    arr[l++] = help[i];
  }
}
```

### 求 arr 中的最大值

```js
function getMax(arr) {
  if (arr.length === 0) {
    return -1;
  }
  return process(arr, 0, arr.length - 1);
}
function process(arr, l, r) {
  if (l === r) {
    return arr[l];
  }
  let mind = l + ((r - l) >> 1);
  let leftMax = process(arr, l, mid);
  let rightMax = process(arr, mid + 1, right);
  return Math.max(leftMax, rightMax);
}
```

## 快速排序

## 堆排序

## 计数排序

## 桶排序

## 基数排序
