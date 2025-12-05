class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */

  // == PSEUDOCODE ==

  // Iterate through the array
  //-- Iterate through the array, start after the outer loop
  //---- If num in outer loop + num in inner loop matches the target
  //------ Return [i, j]

  // ================

  twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
}

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */

  // == PSEUDOCODE ==

  // Create hash map
  // Iterate through the array
  //-- Add element as key, element's index as value
  // Iterate through the array
  //-- Compute the complement of the current element (target - nums[i])
  //-- If complement exists in hash map
  //---- Return the indices of the current element and its complement
  // Return empty array

  // ================

  twoSum(nums, target) {
    const indices = {};

    for (let i = 0; i < nums.length; i++) {
      indices[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (indices[diff] !== undefined && indices[diff] !== i) {
        return [i, indices[diff]];
      }
    }

    return [];
  }
}
