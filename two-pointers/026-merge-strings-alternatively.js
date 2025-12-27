class Solution {
  mergeAlternately(word1, word2) {
    const count = Math.max(word1.length, word2.length);
    let str = "";

    for (let i = 0; i < count; i++) {
      if (word1[i] !== undefined) str += word1[i];
      if (word2[i] !== undefined) str += word2[i];
    }

    return str;
  }
}
