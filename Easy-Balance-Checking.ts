/*
  Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
  If you want to know more: http://en.wikipedia.org/wiki/DNA
  In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell);
  you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
  More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
*/

// Answer:

export function balance(book: string) {
 const formattedBook = book.replace(/[^a-z|A-Z|\d|\.|\s]/g, '');
 const linesArr = formattedBook.split('\n').filter(i => i)
 let balance = parseFloat(linesArr[0])
 let result = `Original Balance: ${balance.toFixed(2)}\r\n`
 let expenseAmount = {
  amount: 0,
  times: 0
 };
 for (let i = 1; i < linesArr.length; i++) {
   let line = linesArr[i]
   if (line.split(' ')[2] !== parseFloat(line.split(' ')[2]).toFixed(2)){
    line += '0'
   }
   let expense = parseFloat(line.split(' ')[2])
   balance -= expense;
   expenseAmount.amount += expense
   expenseAmount.times++
   result += `${line} Balance ${balance.toFixed(2)}\r\n`
 }
   result += `Total expense  ${expenseAmount.amount.toFixed(2)}\r\n`
   result += `Average expense  ${(expenseAmount.amount / expenseAmount.times).toFixed(2)}`
   return result
}

// BigO: O(n)
