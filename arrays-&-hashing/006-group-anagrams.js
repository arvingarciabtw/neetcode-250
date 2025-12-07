class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */

  /**
    == PSEUDOCODE ==

    // Initialize hashmap
    // Iterate through strs
      // Sort the string
      // If the hashmap has the sorted string as a key
        // Push string to the array
      // Else
        // Add an entry with the sorted string as the key, array with str as the value
    // Return the output array    

    ================
  */

  groupAnagrams(strs) {
    const anagramGroups = new Map();

    for (const str of strs) {
      const sortedKey = str.split("").sort().join("");

      if (anagramGroups.has(sortedKey)) {
        anagramGroups.get(sortedKey).push(str);
      } else {
        anagramGroups.set(sortedKey, [str]);
      }
    }

    return Array.from(anagramGroups.values());
  }
}
