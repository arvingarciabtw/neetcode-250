class Solution {
  /*
    == BRUTE FORCE ==
    O(n) time complexity
    O(1) space complexity
   */
  search(nums, target) {
    for (let num of nums) {
      if (num === target) {
        return true;
      }
    }
    return false;
  }

  /*
    == BINARY SEARCH ==
    O(log n) time complexity (average case)
    O(n) time complexity (worst case)
    O(1) space complexity
   */
  search(nums, target) {
    let l = 0,
      r = nums.length - 1;

    while (l <= r) {
      const m = Math.floor(l + (r - l) / 2);

      if (nums[m] === target) {
        return true;
      }

      if (nums[l] < nums[m]) {
        // Left portion
        if (nums[l] <= target && target < nums[m]) {
          r = m - 1;
        } else {
          l = m + 1;
        }
      } else if (nums[l] > nums[m]) {
        // Right portion
        if (nums[m] < target && target <= nums[r]) {
          l = m + 1;
        } else {
          r = m - 1;
        }
      } else {
        l++;
      }
    }

    return false;
  }
}
