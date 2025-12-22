class Solution {
  subarraySum(nums, k) {
    let totalNum = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === k) totalNum++;
      let sum = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        sum += nums[j];
        if (sum === k) totalNum++;
      }
    }

    return totalNum;
  }
}
