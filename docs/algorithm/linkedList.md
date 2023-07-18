# 链表

## 反转链表

### 反转单向链表

原始：1 -> 2 -> 3 -> 4 -> null

反转后：null <- 1 <- 2 <- 3 <- 4

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function reverseLinkedList(head) {
  if (head == null) {
    return head;
  }
  let pre = null;
  while (head) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}
```

```java
public static class Node {
  public int value;
  public Node next;
  public Node(int data) {
    value = data;
  }
}
public static Node reverseLinkedList(Node head) {
  if (head == null) {
    return null;
  }
  Node pre = null;
  while (head != null) {
    Node next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}
```

### 反转双向链表

```js
class DoubleNode {
  constructor(value) {
    this.value = value;
    this.last = null;
    this.next = null;
  }
}
function reverseDoubleList(head) {
  let pre = null;
  while (head) {
    let next = head.next;
    head.next = pre;
    head.last = next;
    pre = head;
    head = next;
  }
  return pre;
}
```

```java
public static class DoubleNode {
  public int value;
  public DoubleNode last;
  public DoubleNode next;
  public DoubleNode(int data) {
    this.value = data;
  }
}
public static DoubleNode reverseDoubleList(DoubleNode head) {
  DoubleNode pre = null;
  while (head != null) {
    DoubleNode next = head.next;
    head.next = pre;
    head.last = next;
    pre = head;
    head = next;
  }
  return pre;
}
```

## 删除给定值

```js
function deleteGivenValue(head, num) {
  if (head === null) {
    return head;
  }
  while (head.value === num) {
    head = head.next
  }
  let cur = head;
  while (head.next !== null) {
    if (cur.next.value === num) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}
```

```java
public static Node deleteGivenValue(Node head, int num) {
  if (head == null) {
    return head;
  }
  while (head.value === num) {
    head = head.next;
  }
  let pre = head;
  while (pre.next != null) {
    if (pre.next.value == num) {
      pre.next = pre.next.next;
    } else {
      pre = pre.next;
    }
  }
  return head;
}
```