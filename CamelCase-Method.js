/*
  Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings.
  All words must have their first letter capitalized without spaces.

  For instance:

  "hello case".camelCase() => HelloCase
  "camel case word".camelCase() => CamelCaseWord
*/

// Answer:

String.prototype.camelCase=function(){
  let str = this.trim()
  if (this.length < 1) return this.trim();
  let result = `${str[0].toUpperCase()}`;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === ' ') {
      result += `${str[i + 1].toUpperCase()}`
      i++
    } else {
      result += str[i];
    }
  }
  return result
}

// BigO: O(n)
