/*
  Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
*/

// Answer:

 function reverseWords(str) {
  let arr = str.split(' ')
  let reverse = arr.map(word => {
      let result = ""
      for (let i = word.length - 1; i >= 0; i--) { 
      result += word[i]
      }
    return result;
  })
  return reverse.join(' ')
}

// BigO: O(n2)
