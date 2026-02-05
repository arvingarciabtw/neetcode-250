class Solution {
  /*
    == BRUTE FORCE ==
    O(n) time complexity
    O(1) space complexity
   */
  findMin(nums) {
    return Math.min(...nums);
  }

  /*
    == BINARY SEARCH ==
    O(log n) time complexity
    O(1) space complexity
   */
  findMin(nums) {
    let l = 0;
    let r = nums.length - 1;
    let res = nums[0];

    while (l <= r) {
      if (nums[l] <= nums[r]) {
        res = Math.min(res, nums[l]);
        break;
      }

      let m = l + Math.floor((r - l) / 2);
      res = Math.min(res, nums[m]);
      if (nums[m] >= nums[l]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    return res;
  }
}
