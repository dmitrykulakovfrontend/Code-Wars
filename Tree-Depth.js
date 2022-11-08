/*
  Write a method that takes a nested hash (object in javascript) as input and returns that hash with added "depth" keys.
  So, for example, the following input:

  { a: 1, b: 2, c: { d: { e: 3 } } }
  would yield the following return value:

  { a: 1, b: 2, c: { d: { e: 3, depth: 2 }, depth: 1 }, depth: 0 }
  For Ruby, if the input is not a hash, then the function should return nil.
  For JavaScript, if the input is not an object (including an array), the function should return null.
*/

// Answer:

function recordDepth(tree, currentDepth = 0) {
  if (!isObject(tree)) return null;
  tree.depth = currentDepth;
  for (key in tree) {
    let node = tree[key];
    if (isObject(node)) {
      recordDepth(node, currentDepth + 1)
    }
  }
  return tree;
}

const isObject = (node) => typeof node === 'object' && !Array.isArray(node) && node !== null

// BigO: O(n)
