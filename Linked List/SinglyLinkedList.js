// Singly Linked List and Some common patterns to solve problems

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // Push Front (as Head)
  pushFront(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Push back (as Tail)
  pushBack(val) {
    const newNode = new Node(val);

    if (this.head == null) {
      this.head = newNode;
      return;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
  }

  showList() {
    let curr = this.head;
    const elements = [];

    while (curr) {
      elements.push(curr.val);
      curr = curr.next;
    }

    console.log(elements);
  }

  reverseList() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

const list = new SinglyLinkedList();
list.pushFront(30);
list.pushBack(40);
list.pushBack(50);
list.pushFront(20);
list.pushBack(60);
list.pushFront(10);
list.showList();
list.reverseList();
list.showList();
