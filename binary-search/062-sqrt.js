class Solution {
  /*
    == BINARY SEARCH ==
    O(log n) time complexity
    O(1) space complexity
   */
  mySqrt(x) {
    let l = 0,
      r = x;
    let res = 0;

    while (l <= r) {
      const m = Math.floor(l + (r - l) / 2);
      if (m * m > x) {
        r = m - 1;
      } else if (m * m < x) {
        l = m + 1;
        res = m;
      } else {
        return m;
      }
    }

    return res;
  }
}
