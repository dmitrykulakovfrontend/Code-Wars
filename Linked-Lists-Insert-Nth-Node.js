/*
  Linked Lists - Insert Nth

  Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

  InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

  insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
  insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
  insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
*/

// Answer:

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  if (index === 0) {
    let node = new Node(data);
    node.next = head;
    return node;
  }
  let current = head;
  let currentLength = 0;
  while (current && currentLength < index - 1) {
    current = current.next;
    currentLength++;
  }
  let node = new Node(data);
  let temp = current.next;
  current.next = node;
  current.next.next = temp;
  return head;
}

// BigO: O(n)
