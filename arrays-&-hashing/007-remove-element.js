class Solution {
  /**
   * @param {number[]} nums
   * @param {number} val
   * @return {number}
   */

  /**
    == PSEUDOCODE ==

    // Initialize output array
    // Iterate through nums
      // If num does not match the val
        // Push to output array
    // Replace elements in nums with elements in output array
    // Return output array's length 

    ================
  */

  removeElement(nums, val) {
    const output = [];

    for (const num of nums) {
      if (num !== val) {
        output.push(num);
      }
    }

    for (let i = 0; i < output.length; i++) {
      nums[i] = output[i];
    }

    return output.length;
  }
}
