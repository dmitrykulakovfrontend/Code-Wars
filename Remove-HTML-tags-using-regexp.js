/*
  Remove HTML tags and return string without:
  <tag> and </tag>
  <tag/>
  <tag />
  html tags with attributes.
  Don't trim space, tab etc.
  You have to use regexp.

  Tests are using function:
  String.prototype.replace(your regexp, "")

  Have fun :)
*/

// Answer:

var reg = /<\/?[^<]+>/g;

// BigO: O(n)
