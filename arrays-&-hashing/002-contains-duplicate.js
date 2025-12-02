class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */

  // == PSEUDOCODE ==

  // Turn nums into a Set
  // If the size of Set is less than the length of nums
  // Return true
  // Return false

  // Logic above can be written in one line

  // ================

  hasDuplicate(nums) {
    return new Set(nums).size < nums.length;
  }
}
