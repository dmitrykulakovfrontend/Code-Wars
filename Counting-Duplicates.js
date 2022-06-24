/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

// Answer:

/*
  input: string with characters and digits
  output: amount of repeating characters in string
  
  "abcde" -> 0 # no characters repeats more than once
  "aabbcde" -> 2 # 'a' and 'b'
  "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
  "indivisibility" -> 1 # 'i' occurs six times
  "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
  "aA11" -> 2 # 'a' and '1'
  "ABBA" -> 2 # 'A' and 'B' each occur twice
  
  pseudo: iterate through string, if it is first time when we meet this character put it in map with true property, if that character already in map and its value true
  then increase result variable, if its value false just skip that character because it means that we saw that already and we dont need count it.
*/

function duplicateCount(text){
  let result = 0
  let map = {};
  
  for (char of text.toLowerCase()) {
    if (map[char] === true) {
      result++;
      map[char] = false;
    }
    if (map[char] === false) {
      continue;
    }
    map[char] = true;   
  }
  
  return result;
}

// BigO: O(n)
