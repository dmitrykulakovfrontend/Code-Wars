/*
  Given a variable n,

  If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

  If n is not an integer, return the string "NaN".

  Ex:

  dashatize(274) -> '2-7-4'
  dashatize(6815) -> '68-1-5'
*/

// Answer:

function dashatize(num) {
  if (Number.isNaN(Number(num))) return "NaN";
  num = Math.abs(num).toString().split('');
  
  let final = num.reduce((a,c) => {
    if (Number(c) % 2 !== 0) {
      return a + `-${c}-`;
    } else {
      return a + c;
    }
  } ,'')
  
  if (final[0] === '-') {
    final = final.slice(1)
  }
  if (final[final.length - 1] === '-') {
    final = final.slice(0 , final.length - 1)
  }
  
  while (final.includes('--')) {
    final = final.replace('--','-');
  }
  return final;
}

// BigO: O(n)
