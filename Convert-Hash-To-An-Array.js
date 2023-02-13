/*
  Convert a hash into an array. Nothing more, Nothing less.

  {name: 'Jeremy', age: 24, role: 'Software Engineer'}
  should be converted into

  [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
  Note: The output array should be sorted alphabetically by key name.

  Good Luck!
*/

// Answer:
function convertHashToArray(hash){
  const result = [];
  for (let key in hash) {
    result.push([key, hash[key]])
  }
  return result.sort((a,b) => a[0] > b[0])
}

// BigO: O(n)
