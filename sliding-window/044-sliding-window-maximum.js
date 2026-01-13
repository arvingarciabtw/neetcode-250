class Solution {
  // == MY SOLUTION (O(n * k), O(1)) ==
  maxSlidingWindow(nums, k) {
    let l = 0;
    let output = [];

    for (let r = k - 1; r < nums.length; r++) {
      let max = nums[l];
      const window = [];
      for (let i = l; i <= r; i++) {
        window.push(nums[i]);
        max = Math.max(max, nums[i]);
      }
      output.push(max);
      l++;
    }

    return output;
  }

  // == OPTIMAL, USING A DEQUE (O(n), O(n)) ==
  maxSlidingWindow(nums, k) {
    const n = nums.length;
    const output = new Array(n - k + 1);
    const q = new Deque();
    let l = 0,
      r = 0;

    while (r < n) {
      while (q.size() && nums[q.back()] < nums[r]) {
        q.popBack();
      }
      q.pushBack(r);

      if (l > q.front()) {
        q.popFront();
      }

      if (r + 1 >= k) {
        output[l] = nums[q.front()];
        l++;
      }
      r++;
    }

    return output;
  }
}
