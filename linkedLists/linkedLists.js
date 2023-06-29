//You can run scripts from the command line using the node command installed with nodejs: node linkedLists.js

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;

    while (current) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let current = this.headNode;
    while (current && current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    let count = 0;
    let current = this.headNode;

    while (count < index) {
      current = current.nextNode;
      count++;
    }

    return current;
  }

  pop() {
    if (!this.headNode) {
      return null;
    }

    if (!this.headNode.nextNode) {
      const poppedNode = this.headNode;
      this.headNode = null;
      return poppedNode;
    }

    let current = this.headNode;
    let previous = null;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null;
    return current;
  }

  contains(value) {
    let current = this.headNode;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let index = 0;
    let current = this.headNode;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let result = "";
    let current = this.headNode;

    while (current) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }

    result += "null";
    return result;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
console.log(linkedList.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 20 ) -> null
console.log(linkedList.size()); // Output: 3
console.log(linkedList.head()); // Output: Node { value: 5, nextNode: Node { value: 10, nextNode: [Node] } }
console.log(linkedList.tail()); // Output: Node { value: 20, nextNode: null }
console.log(linkedList.at(1)); // Output: Node { value: 10, nextNode: Node { value: 20, nextNode: null } }
console.log(linkedList.pop()); // Output: Node { value: 20, nextNode: null }
console.log(linkedList.contains(10)); // Output: true
console.log(linkedList.contains(30)); // Output: false
console.log(linkedList.find(10)); // Output: 1
console.log(linkedList.find(30)); // Output: null
