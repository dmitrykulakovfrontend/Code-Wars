/*
  Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

  Similar to those kinda names we need to initialize the names.

  See the pattern below:

  initials('code wars') => returns C.Wars 
  initials('Barack Hussain obama') => returns B.H.Obama 
  Complete the function initials.

  Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.
*/

// Answer:

function initials(n){
  return n.replace(/(\B[a-z])|(\b(\w+)$)/g, (m,g,t) => {
    if (m.length > 1) return t[0].toUpperCase() + t.slice(1);
    return ''
  }).split(' ')
    .map(str => str.length > 1 ? str : str.toUpperCase() + '.')
    .join('')
}

// BigO: O(n)
