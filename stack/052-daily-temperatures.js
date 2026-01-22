class Solution {
  // == BRUTE FORCE (O(n^2), O(1)) ==
  dailyTemperatures(temperatures) {
    const result = [];

    for (let i = 0; i < temperatures.length; i++) {
      let count = 1;
      let length = result.length;
      for (let j = i + 1; j < temperatures.length; j++) {
        if (temperatures[j] > temperatures[i]) {
          result.push(count);
          break;
        }
        count++;
      }
      if (length === result.length) {
        result.push(0);
      }
    }

    return result;
  }

  // == STACK (O(n), O(n)) ==
  dailyTemperatures(temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = []; // pair: [temp, index]

    for (let i = 0; i < temperatures.length; i++) {
      const t = temperatures[i];
      while (stack.length > 0 && t > stack[stack.length - 1][0]) {
        const [stackT, stackInd] = stack.pop();
        res[stackInd] = i - stackInd;
      }
      stack.push([t, i]);
    }
    return res;
  }
}
