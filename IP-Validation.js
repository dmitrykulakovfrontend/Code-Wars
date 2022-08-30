/*
  Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
  IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

  Valid inputs examples:
  Examples of valid inputs:
  1.2.3.4
  123.45.67.89
  Invalid input examples:
  1.2.3
  1.2.3.4.5
  123.456.78.90
  123.045.067.089
  Notes:
  Leading zeros (e.g. 01.02.03.04) are considered invalid
  Inputs are guaranteed to be a single string
*/

// Answer:

function isValidIP(str) {
  let ipParts = str.split('.');
  let CorrectLength = ipParts.length === 4;
  let ContainWhitespace = str.includes(' ') || str.includes('\n');
  let Empty = ipParts.some(num => num.length === 0);
  let LeadingZeros = ipParts.some(num => num.length > 1 && num.startsWith('0'));
  let ExponentialNumber = str.includes('e');
  let CorrectValues = ipParts.every(num => num >= 0 && num <= 255 );
  
  return CorrectLength && !ContainWhitespace && !Empty && !LeadingZeros && !ExponentialNumber && CorrectValues
}

// BigO: O(n)
