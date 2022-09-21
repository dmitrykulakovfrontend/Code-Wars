/*
  For every good kata idea there seem to be quite a few bad ones!

  In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'.
  If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
  If there are no good ideas, as is often the case, return 'Fail!'.

  The sub arrays may not be the same length.

  The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
*/

// Answer:

function well(array){
  // create goodCounter variable
  let goodCounter = 0;
  // iterate through each element in 2d array
  for (let i = 0; i < array.length; i++) {
    let row = array[i];
    for (let j = 0; j < row.length; j++) {
      let element = row[j];
      // if element not a string skip it
      if (typeof element !== 'string') continue;
      // case insensetive check is it good
      if (element.match(/good/i)) {
        // if it is good then update goodCounter to +1
        goodCounter += 1;
      }
    } 
  }
  // depending on goodCounter value return correct string
  if (goodCounter === 0) return 'Fail!'
  if (goodCounter > 2) return 'I smell a series!'
  
  return 'Publish!'
}

// BigO: O(n2)
