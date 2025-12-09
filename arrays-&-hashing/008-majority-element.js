class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */

  /**
    == PSEUDOCODE ==

    // Initialize hashmap
    // Iterate through nums
      // If num is not a key in hashmap
        // Add entry in hashmap, num as key and value as 1
      // Else
        // Increment the value of the key that matches
    // Iterate through hashmap
      // If value of key is greater than n / 2, return the key

    ================
  */

  majorityElement(nums) {
    const count = new Map();

    for (const num of nums) {
      if (!count.has(num)) {
        count.set(num, 1);
      } else {
        count.set(num, count.get(num) + 1);
      }
    }

    for (const [key, value] of count) {
      if (value > nums.length / 2) {
        return key;
      }
    }
  }
}
