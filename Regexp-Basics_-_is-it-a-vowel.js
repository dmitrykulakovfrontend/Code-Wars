/*
  Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.


*/

// Answer:

String.prototype.vowel = function() {
  console.log(this)
  return /^[aeiou]$/.test(this.toLowerCase());
};

// BigO: O(n)
