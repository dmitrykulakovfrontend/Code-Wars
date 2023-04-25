/*
  Challenge:

  Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

  Example:

  Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

// Answer:

import java.util.ArrayList;
import java.util.Collections;
public class Kata {

	public static int[] flattenAndSort(int[][] array) {		
    ArrayList<Integer> flatArr = new ArrayList<Integer>();
    for (int[] subArr : array) {
      for (int num : subArr) {
        flatArr.add(num);
      }
    }
    Collections.sort(flatArr);
    int[] result = new int[flatArr.size()];
    for (int i = 0; i < flatArr.size(); i++) {
      result[i] = flatArr.get(i);
    }
		return result;		
	}

}


// BigO: O(n2)
