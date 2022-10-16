/*
  This kata is based on the kata Implementing a Queue by fvproductions.
  However, this kata suggests implementing a queue using an array and prepending and popping values.
  Since prepending values to an array requires the entire array to be rewritten, this can be very slow for large queues.

  Task
  Implement a queue which can enqueue and dequeue values in constant (O(1)) time.
  That is, regardless of how many items are currently in a queue, adding or removing a value takes the same amount of time.

  As long as the specifications are followed, any implementation is acceptable.

  Specifications
  Queue represents a "First-in, first-out" data structure in which items can be added using the "enqueue" method, and removed using the "dequeue" method.
  For example, if 1, 2, and 3 are added in three successive calls to "enqueue," 1 will be returned on the next call to "dequeue."
  Queue's constructor takes no arguments.
  Queue contains no static methods, and 3 prototype methods: "enqueue", "dequeue", "size."
  Queue.prototype.enqueue takes one argument of any type and adds it to the queue in O(1) time.
  Queue.prototype.dequeue takes no arguments and removes and returns the first item in the Queue in O(1) time.
  If no items are in the queue, this method returns undefined.
  Queue.prototype.size returns how many items are currently held in the queue in O(1) time.
*/

// Answer:

var Node = function(data) {
  this.data = data;
  this.next = null;
}

var Queue = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

Queue.prototype.enqueue = function(item) {
  // add item to the queue
  const node = new Node(item)
  this.length++;
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
    return;
  }
  this.tail.next = node;
  this.tail = this.tail.next;
};

Queue.prototype.dequeue = function() {
  if (!this.head) {
    return undefined;
  }
  this.length--;
  let item = this.head.data;
  this.head = this.head.next;
  return item
};

Queue.prototype.size = function() {
  return this.length
};

// BigO: O(1)
