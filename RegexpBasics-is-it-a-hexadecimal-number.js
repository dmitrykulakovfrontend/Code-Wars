/*
  Implement String#hex_number? (in Java StringUtils.isHexNumber(String)), which should return true if given object is a hexadecimal number, false otherwise.

  Hexadecimal numbers consist of one or more digits from range 0-9 A-F (in any case), optionally prefixed by 0x.
*/

// Answer:

String.prototype.hexNumber = function() {
  console.log(this)
  return /^(0x)?[\dA-Fa-f]+$/.test(this);
};

// BigO: O(n)
