class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    // == PSEUDOCODE ==

    // Sort s and t
    // No sort method for string, but array has sort method
    // Return true if s and t are equal, false otherwise

    // ================

    const sortedS = s.split("").sort().join("");
    const sortedT = t.split("").sort().join("");

    return sortedS === sortedT;
  }
}
