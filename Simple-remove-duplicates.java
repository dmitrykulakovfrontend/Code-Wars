/*
  Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

  Example:
  For input: [3, 4, 4, 3, 6, 3]

  remove the 3 at index 0
  remove the 4 at index 1
  remove the 3 at index 3
  Expected output: [4, 6, 3]

  More examples can be found in the test cases.

  Good luck!
*/

// Answer:

import java.util.Set;
import java.util.HashSet;
import java.util.ArrayList;
import java.util.Arrays;
class Solution{
    public static int [] solve(int [] arr){
        Set<Integer> meeted = new HashSet<Integer>();
        ArrayList<Integer> result = new ArrayList<Integer>();
        for (int i = arr.length - 1; i >= 0; i--) {
          if (meeted.contains(arr[i])) {
            continue;
          } else {
            result.add(0,arr[i]);
            meeted.add(arr[i]);
          }
        }
      return result.stream().mapToInt(Integer::intValue).toArray();
    }
}

// BigO: O(n2)
