/*
  Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/

// Answer:

String.prototype.isLetter = function() {
  return (/^[a-zA-Z]$/).test(this)
}

// BigO: O(n)
