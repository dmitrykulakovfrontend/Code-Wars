/*
  When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

  Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
  Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
  Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

  Example
  "#FF9933" --> {r: 255, g: 153, b: 51}
*/

// Answer:
function hexStringToRGB(hexString) {
  let values = hexString.splitHex().map(e => parseInt(e, 16))
  return {
    r: values[0],
    g: values[1],
    b: values[2],
  }  
}

String.prototype.splitHex = function() {
  let str = this.slice(1, this.length);
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    result.push(`${str[i]}${str[i + 1]}`);
  }
  return result;
}

// BigO: O(n)
