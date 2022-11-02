/*
  Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

  Note: no empty arrays will be given.

  Examples
  [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
  [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
  [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

// Answer:

function highestRank(arr: number[]) {
  const obj: {[key: string]: number} = {}
  for (let num of arr) {
    obj[num] ? obj[num]++ : obj[num] = 1;
  }
  let biggest;
  for (let key in obj) {
    if (!biggest) {
      biggest = key;
    } else if (obj[key] > obj[biggest]) {
      biggest = key;
    } else if (obj[key] === obj[biggest]) {
      biggest = key > biggest ? key : biggest
    }
  }
  return Number(biggest)
}

// BigO: O(n)
