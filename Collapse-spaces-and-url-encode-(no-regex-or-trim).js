/*
  We are looking to urlify some strings. Step 1 is to collapse spaces into an encoded version where " " becomes "%20".

  Just like in HTML, more than one contiguous space should be collapsed to a single encoded space. Also, we don't want any space at the beginning or end of these strings.

  eg:

  "  A    B  " -> "A%20B"
  In many scenarios, str.trim().replace(/\s+/g, '%20') would be a lovely solution, 
  but you've decided this is performance critical and you can't afford more than str.length iterations.

  Because you are unsure of the performance characteristics of your regex 
  impelementation (Does it do a replace on repeating whitespace in linear time?),
  I've truncated related methods (replace, find, match, search). Also, I've blocked String.trim for similar reasons and extra challenge (let's pretend it's 2006).
*/

// Answer:

function urlify(str) {
  let res = ''
  for (let i = 0; i < str.length;) {
    let char = str[i]
    if (char === ' ') {
      while (char === ' ') {
        i++
        char = str[i]
      }
      res += '%20'
    } else {
      res += str[i] 
      i++
    }
  }
  if (res.startsWith("%20")) res = res.slice(3)
  if (res.endsWith("%20")) res = res.slice(0,-3)
  return res
}

// BigO: O(n)
