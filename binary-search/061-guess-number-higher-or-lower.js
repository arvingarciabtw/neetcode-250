class Solution {
  /*
    == BINARY SEARCH ==
    O(log n) time complexity
    O(1) space complexity
   */
  guessNumber(n) {
    let l = 1,
      r = n;
    while (true) {
      let m = Math.floor((l + r) / 2);
      let res = guess(m);
      if (res > 0) {
        l = m + 1;
      } else if (res < 0) {
        r = m - 1;
      } else {
        return m;
      }
    }
  }
}
