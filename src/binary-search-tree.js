const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.roots = null;
  }
  root() {
    return this.roots;
  }
    
  add(data) {
    this.roots = addEl(this.roots, data);
    function addEl(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addEl(node.left, data);
      } else {
        node.right = addEl(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchVal(this.roots, data);
    function searchVal(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      } 
      return data < node.data ?
        searchVal(node.left, data) :
        searchVal(node.right, data);
    }
  }

  find(data) {
        return findNode(this.roots, data);
    function findNode(node, data) {
      if (!node ) {
        return null;
      }  
      if (node.data === data) {
        return node
      }
      return data < node.data ?
        findNode(node.left, data) :
        findNode(node.right, data);
      
      }
      }
        
      
    

  remove(data) {
    this.roots = removeNode(this.roots, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRightNode = node.right;
        while (minRightNode.left) {
          minRightNode = minRightNode.left;
        }
        node.data = minRightNode.data;
        node.right = removeNode(node.right, minRightNode.data);
        return node;
      }
    }
  }

  min() {
    // if (!this.roots) {
    //   return ;
    // }
    let node = this.roots;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.roots) {
      return ;
    }
    let maxNode = this.roots;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
