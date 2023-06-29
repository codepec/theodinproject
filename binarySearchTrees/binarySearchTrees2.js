//You can run scripts from the command line using the node command installed with nodejs: node binarySearchTrees2.js

// Binary Search Tree class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  isBalanced(node = this.root) {
    if (node === null) {
      return true;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    const balanceFactor = Math.abs(leftHeight - rightHeight);

    if (balanceFactor > 1) {
      return false;
    }

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  rebalance() {
    const nodes = this.inorder();
    this.root = this.buildTree(nodes);
    return this;
  }

  levelOrder(callback = null) {
    if (this.root === null) {
      return [];
    }

    const result = [];
    const queue = [];

    queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();

      if (callback) {
        callback(node);
      } else {
        result.push(node.data);
      }

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    return result;
  }

  inorder(node = this.root, callback = null) {
    if (node === null) {
      return [];
    }

    const result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (callback) {
        callback(node);
      } else {
        result.push(node.data);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(node);

    return result;
  }

  preorder(node = this.root, callback = null) {
    if (node === null) {
      return [];
    }

    const result = [];

    const traverse = (node) => {
      if (callback) {
        callback(node);
      } else {
        result.push(node.data);
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(node);

    return result;
  }

  postorder(node = this.root, callback = null) {
    if (node === null) {
      return [];
    }

    const result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      if (callback) {
        callback(node);
      } else {
        result.push(node.data);
      }
    };

    traverse(node);

    return result;
  }

  height(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  buildTree(arr) {
    if (arr.length === 0) {
      return null;
    }

    const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);
    return this.constructBalancedBST(sortedArr, 0, sortedArr.length - 1);
  }

  constructBalancedBST(arr, start, end) {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);

    node.left = this.constructBalancedBST(arr, start, mid - 1);
    node.right = this.constructBalancedBST(arr, mid + 1, end);

    return node;
  }
}

// Function to generate an array of random numbers
const generateRandomNumbers = (count, max) => {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * max);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};

// Function to print elements in level, pre, post, and in order
const printTreeElements = (tree) => {
  console.log("Level Order:");
  tree.levelOrder((node) => {
    console.log(node.data);
  });

  console.log("Preorder:");
  const preorderElements = tree.preorder();
  console.log(preorderElements);

  console.log("Postorder:");
  const postorderElements = tree.postorder();
  console.log(postorderElements);

  console.log("Inorder:");
  const inorderElements = tree.inorder();
  console.log(inorderElements);
};

// Step 1: Create a binary search tree from an array of random numbers < 100
const randomNumbers = generateRandomNumbers(10, 100);
const bst = new Tree();
randomNumbers.forEach((num) => {
  bst.insert(num);
});

// Step 2: Confirm that the tree is balanced
console.log("Is Balanced:", bst.isBalanced());

// Step 3: Print out all elements in level, pre, post, and in order
printTreeElements(bst);

// Step 4: Unbalance the tree by adding several numbers > 100
bst.insert(120);
bst.insert(130);
bst.insert(140);

// Step 5: Confirm that the tree is unbalanced
console.log("Is Balanced:", bst.isBalanced());

// Step 6: Balance the tree by calling rebalance
const balancedTree = bst.rebalance();

// Step 7: Confirm that the tree is balanced
console.log("Is Balanced:", balancedTree.isBalanced());

// Step 8: Print out all elements in level, pre, post, and in order
printTreeElements(balancedTree);
