/*
  In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task
  is to convert that string to either lowercase only or uppercase only based on:

  make as few changes as possible.
  if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
  For example:

  solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
  solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
  solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

// Answer:

export function solve(s: string) {
  let upperCase = 0;
  let lowerCase = 0;
  for (let char of s) {
    if (char.toLowerCase() === char) {
      lowerCase++
    } else upperCase++
  }
  return upperCase > lowerCase ? s.toUpperCase() : upperCase < lowerCase ? s.toLowerCase() : s.toLowerCase()
}

// BigO: O(n)
