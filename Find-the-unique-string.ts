/*
  There is an array of strings. All strings contains similar letters except one. Try to find it!

  findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
  findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
  Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

  It’s guaranteed that array contains more than 2 strings.
*/

// Answer:

export function findUniq(arr: string[]): string {
  let pattern: string = '';
  for (let i = 0; i < arr.length - 1; i++) {
    const curr = arr[i];
    const next = arr[i + 1];
    if (isSame(curr,next)) {
      pattern = curr;
      break;
    }
  }
 for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (!isSame(pattern,curr)) {
      return curr
    }
 }
 return ''
}

function isSame(str1: string, str2: string) {
  let obj = frequency(str1);
  let obj2 = frequency(str2);
  for (let key in obj) {
    if (obj[key] !== obj2[key]) return false;
  }
  for (let key in obj2) {
    if (obj[key] !== obj2[key]) return false;
  }
  return true;
}

function frequency(str: string) {
  str = str.toLowerCase().replace(/ /g, '');
  let obj: {[key:string]: boolean} = {};
  for (let char of str) {
     if (!obj[char]) {
      obj[char] = true;
     }
  }
  return obj;
}

// BigO: O(n2)
