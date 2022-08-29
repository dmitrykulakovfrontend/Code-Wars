/*
  Isn't it annoying how "string".replace("find", "replace"); only replaces the first match of the find string?
  Write a function, replaceAll(input, find, replace); that will replace all matches of the given find string with the given replace string.

  The function will always be called with three strings, so don't worry about validating the arguments.

  As with the original "string".replace(find, replace), if find is an empty string, it should match in-between each character.
  Effectively inserting replace in-between each character, including the start and end of the string.
  I've given you some tests for this to make it a little clearer.
*/

// Answer:

function replaceAll(input, find, replace) {
  let output = ``;
  let length = find.length;
  console.dir({input,find,replace})
  if (length !== 0) {
    for (let i = 0; i < input.length; i++) {
      if (input.slice(i, i + length) === find) {
        output += replace;
        i += length - 1;
      } else {
        output += input[i];
      }
    }
  } else {
    output += replace;
    for (let i = 0; i < input.length; i++) {
      output += input[i];
      output += replace;
    }
  }
  return output;
}

// BigO: O(n)
