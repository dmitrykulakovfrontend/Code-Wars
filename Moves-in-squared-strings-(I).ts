/*
  This kata is the first of a sequence of four about "Squared Strings".

  You are given a string of n lines, each substring being n characters long: For example:

  s = "abcd\nefgh\nijkl\nmnop"

  We will study some transformations of this square of strings.

  Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
  vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
  Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
  hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
  or printed:

  vertical mirror   |horizontal mirror   
  abcd --> dcba     |abcd --> mnop 
  efgh     hgfe     |efgh     ijkl 
  ijkl     lkji     |ijkl     efgh 
  mnop     ponm     |mnop     abcd 
  Task:
  Write these two functions
  and

  high-order function oper(fct, s) where

  fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

  Examples:
  s = "abcd\nefgh\nijkl\nmnop"
  oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
  oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
  Note:
  The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".
*/

// Answer:

export function vertMirror(str: string) {
  return str
    .split("\n")
    .map((line) => line.split("").reverse().join(""))
    .join("\n");
}
export function horMirror(str: string) {
  return str.split("\n").reverse().join("\n");
}
export function oper(fct: (s: string) => string, s: string) {
  return fct(s);
}

// BigO: O(n2)
