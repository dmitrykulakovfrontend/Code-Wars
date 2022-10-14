/*
  Write a SortedInsert() function which inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order. SortedInsert takes the head of a linked list and data used to create a node as arguments. SortedInsert() should also return the head of the list.

  sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
  sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
  sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)
*/

// Answer:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function sortedInsert(head, data) {
  if (!head) return new Node(data);
  if (head.data > data) return new Node(data, head)
  let currentNode = head;
  let nextNode = currentNode.next;
  while (currentNode.next) {
    if (nextNode.data < data) {
      if (!nextNode.next) break;
      currentNode = nextNode;
      nextNode = currentNode.next;
    } else {
      let newNode = new Node(data, nextNode);
      currentNode.next = newNode;
      return head
    }
  }
  nextNode.next = new Node(data);
  return head
}

// BigO: O(n)
