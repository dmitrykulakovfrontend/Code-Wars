/*
  The goal of this exercise is to convert a string to a new string
  where each character in the new string is "(" if that character appears only once in the original string,
  or ")" if that character appears more than once in the original string.
  
  Ignore capitalization when determining if a character is a duplicate.

  Examples
    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 
/*

// Answer:

/*
* given: string of unknown length
* expects: new string only of ')' and '(', '(' if character appears only once, ')' if more.
* 
* "din"      =>  "((("
* "recede"   =>  "()()()"
* "Success"  =>  ")())())"
* "(( @"     =>  "))((" 
* 
* loop through string first time and
* create object with key as character and value as times this char appears in string
* then loop through string again but this time look in object if value more than 1 add to result string ')' otherwise '(';
* 
* */

 function duplicateEncode(word){
  let map = {};
  let result = '';
  for (char of word) {
    char = char.toLowerCase();
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] += 1;
    }
  }
  for (char of word) {
    char = char.toLowerCase();
    if (map[char] > 1) {
      result += ')';
    } else {
      result += '(';
    }
  }
  return result;
}

// BigO: O(n * 2) but * 2 doesnt matter in big cases so it would be O(n) 
