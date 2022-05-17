/*
  You might know some pretty large perfect squares. But what about the NEXT one?

  Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

  If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

  Examples:(Input --> Output)

  121 --> 144
  625 --> 676
  114 --> -1 since 114 is not a perfect square
/*

// Answer:

/* *
 * accepts: positive integer
 *
 * expects: positive integer of next perfect square or -1
 *
 * findNextSquare(121) // 144
 * findNextSquare(625) // 676
 * findNextSquare(319225) // 320356
 *
 * First check is the given integer is perfect square: get sqrt of that number, convert to string and if it contains dot 
 * it means that given number is not perfect square so return -1.
 * else take the result of sqrt add 1 to it and multiply by it self, this is will be the answer.
 *
 * */

 function findNextSquare(sq) {
   let num = Math.sqrt(sq); 
   if (num.toString().includes('.')) return -1;
   num += 1;
   return num * num;
 }
 
// BigO: O(1) 
