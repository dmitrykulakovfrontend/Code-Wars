/*
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

// Answer:

function towerBuilder(nFloors) {
  const result = []
  let stars = 1;
  let spaces = nFloors - stars;
  for (let index = 0; index < nFloors; index++) {
    let str = '';
    for (let j = 0; j < spaces; j++) {
      str += ' '
    }
    for (let k = 0; k < stars; k++) {
      str += '*'
    }
    for (let f = 0; f < spaces; f++) {
      str += ' '
    }
    stars += 2;
    spaces -= 1;
    result.push(str);
  }
  return result;
}
