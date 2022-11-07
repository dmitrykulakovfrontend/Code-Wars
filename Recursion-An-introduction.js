/*
  You are on a set of stairs that are numbered 0 - 100 from top to bottom.
  You are given your starting stair number, a stride width (meaning how many stairs you step down at a time) and being walking down.
  Return an array containing every stair you step on, beginning from the lowest stair. Don't step below 0, it's Lava and you'll burn/fail the Kata.
  A test is in place to check for the presence of for/while to ensure recursion is used so avoid using these terms in your solution.

  If width is 0, clearly you're not going anywhere so please return an empty array.
*/

// Answer:

function stepDown(stair, width){
  if (width <= 0) return [];
  const result = [stair];
  if (stair - width < 0) {
    return result;
  }
  return result.concat(stepDown(stair - width, width).reverse()).reverse()
}

// BigO: O(n2)
