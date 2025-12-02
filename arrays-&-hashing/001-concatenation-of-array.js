class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */

  // == PSEUDOCODE ==

  // Declare arr
  // Iterate twice
  // Push nums to arr
  // Return arr

  // ================

  getConcatenation(nums) {
    const arr = [];

    for (let i = 0; i < 2; i++) {
      arr.push(nums);
    }

    return arr;
  }
}
