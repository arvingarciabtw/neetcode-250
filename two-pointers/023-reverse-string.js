class Solution {
  // == SIMPLEST ==
  reverseString(s) {
    return s.reverse();
  }

  // == TWO POINTERS ==
  reverseString(s) {
    let left = 0,
      right = s.length - 1;

    while (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }
}
