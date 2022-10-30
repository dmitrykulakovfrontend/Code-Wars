/*
  Linked Lists - Alternating Split

  Write an AlternatingSplit() function that takes one list and divides up its nodes to make two smaller lists.
  The sublists should be made from alternating elements in the original list. 
  So if the original list is a -> b -> a -> b -> a -> null then one sublist should be a -> a -> a -> null and the other should be b -> b -> null.

  var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
  alternatingSplit(list).first === 1 -> 3 -> 5 -> null
  alternatingSplit(list).second === 2 -> 4 -> null
  For simplicity, we use a Context object to store and return the state of the two linked lists.
  A Context object containing the two mutated lists should be returned by AlternatingSplit().

  If the passed in head node is null/None/nil or a single node, throw an error.
*/

// Answer:

class Cell<T> {
    next: Cell<T> | null = null;
    data: T;
    constructor(data: T) {
    this.data = data
    }
}
class Context<T> {
  first: Cell<T>;
  second: Cell<T>;
  constructor(firstCell: Cell<T>, secondCell: Cell<T>) {
    this.first = firstCell
    this.second = secondCell
  }
}

function alternatingSplit<T>(head: Cell<T> | null) {
  if (!head?.next) throw new Error('No head');
  let first = new Cell(head.data);
  let currentFirst = first;
  let second = new Cell(head.next.data);
  let currentSecond = second;
  let isSwitch = true;
  head = head.next.next;
  while (head) {
    if (isSwitch) {
      currentFirst.next = new Cell(head.data)
      currentFirst = currentFirst.next
      isSwitch = false;
    } else {
      currentSecond.next = new Cell(head.data)
      currentSecond = currentSecond.next
      isSwitch = true;
    }
    head = head.next
  }
  return new Context(first, second)
}

// BigO: O(n)
