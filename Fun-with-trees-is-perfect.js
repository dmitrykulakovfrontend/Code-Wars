/*
  A perfect binary tree is a binary tree in which all interior nodes have two children and all leaves have the same depth or same level.

  You are given a class called TreeNode. Implement the method isPerfect which determines if a given tree denoted by its root node is perfect.

  Note: TreeNode class contains helper methods for tree creation, which might be handy for your solution.
  Feel free to update those methods, but make sure you keep their signatures intact (since they are used from within test cases).
*/

// Answer:

class TreeNode {

  constructor(left = null, right = null) {
    this.left = left;
    this.right = right;
  }
  
  static depth(root) {
    let result = 0;
    while (root) {
      result += 1;
      root = root.right;
    }
    return result;
  }

  static isPerfect(root, depth = this.depth(root), level = 0) {
    if (!root) return true;
    if (!root.left && !root.right) return depth === level + 1;
    if (!root.left || !root.right) return false;
    return this.isPerfect(root.left, depth, level + 1) && this.isPerfect(root.right, depth, level + 1)
  }

  static leaf() {
    return new TreeNode();
  }
  
  static join(left, right) {
    return new TreeNode().withChildren(left, right);
  }
  
  withLeft(left) {
    this.left = left;
    return this;
  }

  withRight(right) {
    this.right = right;
    return this;
  }

  withChildren(left, right) {
    this.left = left;
    this.right = right;
    return this;
  }

  withLeftLeaf() {
    return this.withLeft(TreeNode.leaf());
  }

  withRightLeaf() {
    return this.withRight(TreeNode.leaf());
  }

  withLeaves() {
    return this.withChildren(TreeNode.leaf(), TreeNode.leaf());
  }
  
}

// BigO: O(n)
