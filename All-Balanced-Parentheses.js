/*
  Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

  Examples
  balancedParens(0) => [""]
  balancedParens(1) => ["()"]
  balancedParens(2) => ["()()","(())"]
  balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

*/

// Answer:

function balancedParens(n, result = [], string = "", left = 0, right = 0) {
  if (string.length === 2 * n) {
    result.push(string);
    return result;
  }
  if (left < n) {
    balancedParens(n, result, string + "(", left + 1, right);
  }
  if (right < left) {
    balancedParens(n, result, string + ")", left, right + 1);
  }

  return result;
}

// BigO: O(n * 2)
