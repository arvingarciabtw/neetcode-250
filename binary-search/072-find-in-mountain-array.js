class Solution {
  /*
    == BINARY SEARCH ==
    O(log n) time complexity
    O(1) space complexity
   */
  findInMountainArray(target, mountainArr) {
    const length = mountainArr.length();

    // find peak
    let l = 1,
      r = length - 2,
      peak = 0;
    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      const left = mountainArr.get(m - 1);
      const mid = mountainArr.get(m);
      const right = mountainArr.get(m + 1);
      if (left < mid && mid < right) {
        l = m + 1;
      } else if (left > mid && mid > right) {
        r = m - 1;
      } else {
        peak = m;
        break;
      }
    }

    // search left portion
    l = 0;
    r = peak - 1;
    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      const val = mountainArr.get(m);
      if (val < target) {
        l = m + 1;
      } else if (val > target) {
        r = m - 1;
      } else {
        return m;
      }
    }

    // search right portion
    l = peak;
    r = length - 1;
    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      const val = mountainArr.get(m);
      if (val > target) {
        l = m + 1;
      } else if (val < target) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  }
}
