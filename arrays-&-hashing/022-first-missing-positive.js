class Solution {
  firstMissingPositive(nums) {
    const newNums = nums.sort((a, b) => a - b).filter((num) => num > 0);
    let output = 1;
    for (const num of newNums) {
      if (num <= output) output = num + 1;
    }
    return output;
  }
}
