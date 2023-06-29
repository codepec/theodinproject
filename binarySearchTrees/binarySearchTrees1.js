//You can run scripts from the command line using the node command installed with nodejs: node binarySearchTrees1.js

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(dataArray) {
    this.root = this.buildTree(dataArray);
  }

  buildTree(dataArray) {
    // Sort the array and remove duplicates
    const sortedArray = Array.from(new Set(dataArray)).sort((a, b) => a - b);

    // Helper function to build a balanced binary tree recursively
    function buildBalancedTree(arr, start, end) {
      if (start > end) {
        return null;
      }

      // Find the middle element of the current range
      const mid = Math.floor((start + end) / 2);

      // Create a new Node with the middle element
      const node = new Node(arr[mid]);

      // Recursively build the left and right subtrees
      node.left = buildBalancedTree(arr, start, mid - 1);
      node.right = buildBalancedTree(arr, mid + 1, end);

      return node;
    }

    // Call the helper function with the sorted array and range
    return buildBalancedTree(sortedArray, 0, sortedArray.length - 1);
  }
}

// Usage example
const dataArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(dataArray);
console.log(tree.root);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// Usage example with the previously created tree
prettyPrint(tree.root);

const find = (node, value) => {
  if (node === null || node.data === value) {
    return node;
  }

  if (value < node.data) {
    return find(node.left, value);
  } else {
    return find(node.right, value);
  }
};

// Usage example
const foundNode = find(tree.root, 23);
console.log(foundNode);

const levelOrder = (node, callback = null) => {
  if (node === null) {
    return [];
  }

  const queue = [node];
  const result = [];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (callback) {
      callback(currentNode);
    } else {
      result.push(currentNode.data);
    }
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return result;
};

// Usage example
const levelOrderResult = levelOrder(tree.root);
console.log(levelOrderResult);

const inorder = (node, callback = null) => {
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
};

const preorder = (node, callback = null) => {
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
};

const postorder = (node, callback = null) => {
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
};

// Usage examples
const inorderResult = inorder(tree.root);
console.log(inorderResult);

const preorderResult = preorder(tree.root);
console.log(preorderResult);

const postorderResult = postorder(tree.root);
console.log(postorderResult);

const height = (node) => {
  if (node === null) {
    return 0;
  }

  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
};

// Usage example
const nodeHeight = height(tree.root);
console.log(nodeHeight);

const depth = (root, node) => {
  if (root === null) {
    return 0;
  }

  if (root === node) {
    return 0;
  }

  const leftDepth = depth(root.left, node);
  const rightDepth = depth(root.right, node);

  if (leftDepth === -1 && rightDepth === -1) {
    return -1;
  }

  return Math.max(leftDepth, rightDepth) + 1;
};

// Usage example
const nodeDepth = depth(tree.root, foundNode); // Assuming 'foundNode' is the node found in the 'find' function
console.log(nodeDepth);

const isBalanced = (node) => {
  if (node === null) {
    return true;
  }

  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  }

  return isBalanced(node.left) && isBalanced(node.right);
};

// Usage example
const treeBalanced = isBalanced(tree.root);
console.log(treeBalanced);

const rebalance = (tree) => {
  const nodes = inorder(tree.root);
  return new Tree(nodes);
};

// Usage example
const balancedTree = rebalance(tree);
console.log(balancedTree.root);
