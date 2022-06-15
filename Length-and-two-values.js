/*
  Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.
*/

// Answer:
function alternate(n, firstValue, secondValue){
  let res = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      res.push(firstValue);
    } else res.push(secondValue);
  }
  return res;
}

// BigO: O(n)
