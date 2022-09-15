/*
  Your friend Cody has to sell a lot of jam, so he applied a good 25% discount to all his merchandise.

  Trouble is that he mixed all the prices (initial and discounted), so now he needs your cool coding skills to filter out only the discounted prices.

  For example, consider this inputs:

  "15 20 60 75 80 100"
  "9 9 12 12 12 15 16 20"
  They should output:

  "15 60 75"
  "9 9 12 15"
  Every input will always have all the prices in pairs (initial and discounted) sorted from smaller to bigger.

  You might have noticed that the second sample input can be tricky already; also, try to have an eye for performances, as huge inputs could be tested too.
*/

// Answer:

 function findDiscounted(prices) {
  const arr = prices.split(' ').map(Number);
  let cache = {};
  let discounted = [];
  for (let num of arr) {
    cache[num]? cache[num]++ : cache[num] = 1;
  }
  console.log(cache)
  for (let i = arr.length - 1; i > 0; i--) {
    let initialPrice = (arr[i]);
    let discountedPrice = (initialPrice * .75);
    if (cache[discountedPrice] && cache[discountedPrice] >= 1 && cache[initialPrice] >= 1) {
      discounted.push(discountedPrice);
      cache[initialPrice] --;
      cache[discountedPrice] --;
    }
  }
  
  return discounted.reverse().join(' ');
}

// BigO: O(n)
