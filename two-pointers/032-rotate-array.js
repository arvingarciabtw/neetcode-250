class Solution {
  rotate(nums, k) {
    nums.splice(0, 0, ...nums.splice(nums.length - (k % nums.length)));
  }
}
