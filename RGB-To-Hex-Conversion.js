/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

// Answer

/*
* given: 3 integer
* expects: 6 characters string
*
*   rgb(0, 0, 0)  // '000000'
*   rgb(0, 0, -20) // '000000'
*   rgb(300,255,255) // 'FFFFFF'
*   rgb(173,255,47) //' ADFF2F'
* pseudocode: loop through arguments, check is value less than 0 or more than 255, if so then add to result string
* 00 if it less than 0, and FF if it more than 255. If result string length returned from conversion decimal to hexadecimal
* is 1 then add 0 to string begin.
*
*
* */

function rgb(...args) {
  return args.reduce((prev, current) => {
    if (current <= 0) return (prev += "00");
    if (current >= 255) return (prev += "FF");
    let result = current.toString(16).toUpperCase();
    if (result.length === 1) return prev += `0${result}`;
    return prev += result;
  }, "");
}
