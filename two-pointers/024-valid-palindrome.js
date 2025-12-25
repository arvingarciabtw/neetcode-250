class Solution {
  // == INITIAL SOLUTION ==
  isAlphaNumeric(char) {
    return (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    );
  }

  isPalindrome(s) {
    let str = "";
    for (const char of s) {
      if (this.isAlphaNumeric(char)) str += char.toLowerCase();
    }
    return str === str.split("").reverse().join("");
  }

  // == TWO POINTERS ==
  isPalindrome(s) {
    let tmp = [];

    for (const char of s) {
      if (this.isAlphaNumeric(char)) tmp.push(char.toLowerCase());
    }

    const newS = tmp.join("");
    let left = 0,
      right = newS.length - 1;

    while (left < right) {
      if (newS[left] !== newS[right]) return false;
      left++;
      right--;
    }

    return true;
  }
}
