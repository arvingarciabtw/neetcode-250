class Solution {
  /**
   * @param {string[]} strs
   * @return {string}
   */

  /*
    == PSEUDOCODE ==

    // Initialize variable for longest
    // Iterate through strs
    //-- If longest is empty, assign first string to longest
    //-- Initialize temp
    //-- Iterate through str
    //---- If character at string === character at longest
    //------ temp += str.charAt(i)
    //-- Assign temp to longest
    // Return longest

    ================
  */

  longestCommonPrefix(strs) {
    let longest;

    for (let i = 0; i < strs.length; i++) {
      if (longest === undefined) {
        longest = strs[0];
      }

      let temp = "";

      for (let j = 0; j < strs[i].length; j++) {
        if (strs[i].charAt(j) === longest.charAt(j)) {
          temp += strs[i].charAt(j);
        } else {
          break;
        }
      }

      longest = temp;
    }

    return longest;
  }
}
