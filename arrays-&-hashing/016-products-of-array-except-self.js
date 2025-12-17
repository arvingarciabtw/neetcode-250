class Solution {
  /*
    == PSEUDOCODE ==

    // Initialize output array
    // Iterate through nums
      // Initialize product
      // Iterate through nums
        // If outer loop index is not equal to inner loop index 
          // Multiply num to product
      // Push final product to output array
    // Return output array

    ================
  */

  productExceptSelf(nums) {
    const output = [];

    for (let i = 0; i < nums.length; i++) {
      let product = 1;
      for (let j = 0; j < nums.length; j++) {
        if (i !== j) {
          product *= nums[j];
        }
      }
      output.push(product);
    }

    return output;
  }
}
