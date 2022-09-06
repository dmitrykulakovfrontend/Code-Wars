/*
  Implement Length() to count the number of nodes in a linked list.

  length(null) => 0
  length(1 -> 2 -> 3 -> null) => 3
  Implement Count() to count the occurrences of an integer in a linked list.

  count(null, 1) => 0
  count(1 -> 2 -> 3 -> null, 1) => 1
  count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
*/

// Answer:

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let counter = 0;
  while (head) {
    counter++;
    head = head.next;
  }
  return counter;
}

function count(head, data) {
  // Your code goes here.
  let counter = 0;
  while (head) {
    head.data === data ? counter++ : null;
    head = head.next;
  }
  return counter;
}

// BigO: O(n)
