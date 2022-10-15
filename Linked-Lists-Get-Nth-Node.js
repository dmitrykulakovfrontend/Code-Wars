/*
  Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position.
  GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

  So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

  getNth(1 -> 2 -> 3 -> null, 0).data === 1
  getNth(1 -> 2 -> 3 -> null, 1).data === 2
  The index should be in the range [0..length-1]. If it is not, or if the list is empty, GetNth() should throw/raise an exception
*/

// Answer:

function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (!node) throw new Error('node does not exist');
  let currentIndex = 0;
  while(node) {
    if (currentIndex === index) {
      return node
    }
    currentIndex++
    node = node.next
  }
  throw new Error('not found')
}


// BigO: O(n)
