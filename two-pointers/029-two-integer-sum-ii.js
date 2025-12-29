class Solution {
  // == SIMPLE SOLUTION (BRUTE FORCE) ==
  twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
      }
    }
  }

  // == TWO POINTERS ==
  twoSum(numbers, target) {
    let l = 0,
      r = numbers.length - 1;

    while (l < r) {
      const curSum = numbers[l] + numbers[r];

      if (curSum > target) {
        r--;
      } else if (curSum < target) {
        l++;
      } else {
        return [l + 1, r + 1];
      }
    }
    return [];
  }
}
