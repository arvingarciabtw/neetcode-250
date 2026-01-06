class Solution {
  // == BRUTE FORCE ==
  maxProfit(prices) {
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        if (prices[i] < prices[j]) profit = Math.max(profit, prices[j] - prices[i]);
      }
    }

    return profit;
  }

  // == TWO POINTERS ==
  maxProfit(prices) {
    let profit = 0,
        l = 0,
        r = 1;

    while (r < prices.length) {
      if (prices[l] < prices[r]) profit = Math.max(profit, prices[r] - prices[l]);
      else l = r;
      r++;
    }

    return profit;
  }
}
