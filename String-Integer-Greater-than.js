/*
  You are to write a function, stringIntGreaterThan that must accept arguments, each being the string representation of an positive or negative integer of any length (could contain a thousand digits, or more; also, integers will not have leading zeros).

  The function should then return true if the first argument is greater than the second argument, false if not.
*/

// Answer:

function stringIntGreaterThan(a, b) {
  if (a.includes("-") && !b.includes("-")) return false;
  if (b.includes("-") && !a.includes("-")) return true;
  if (a.includes("-") && b.includes("-")) {
    return manualCount(false, true);
  }
  return manualCount(true, false);

  function manualCount(bigger, smaller) {
    if (a.length !== b.length) return a.length > b.length ? bigger : smaller;
    for (let i = 1; i < a.length; i++) {
      if (+a[i] == +b[i]) {
        continue;
      }
      if (+a[i] > +b[i]) {
        return bigger;
      } else {
        return smaller;
      }
    }
    return false;
  }
}

// BigO: O(n)
