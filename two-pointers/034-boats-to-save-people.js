class Solution {
  numRescueBoats(people, limit) {
    people.sort((a, b) => a - b);
    let res = 0,
      l = 0,
      r = people.length - 1;
    while (l <= r) {
      let remain = limit - people[r--];
      res++;
      if (l <= r && remain >= people[l]) {
        l++;
      }
    }
    return res;
  }
}
