/*
  Write a simple parser that will parse and run Deadfish.

  Deadfish has 4 commands, each 1 character long:

  i increments the value (initially 0)
  d decrements the value
  s squares the value
  o outputs the value into the return array
  Invalid characters should be ignored.

  parse("iiisdoso") => [8, 64]
*/

// Answer:

/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  const result: number[] = [];
  let value = 0;
  for (let char of data) {
    console.log(char);
    switch (char) {
      case "i": {
        value++;
        break;
      }
      case "d": {
        value--;
        break;
      }
      case "s": {
        value *= value;
        break;
      }
      case "o": {
        result.push(value);
        break;
      }
      default: {
        break;
      }
    }
  }
  return result;
}

// BigO: O(n)
