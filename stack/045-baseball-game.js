class Solution {
  // == MY SOLUTION (O(n), O(n)) ==
  calPoints(operations) {
    const record = [];

    for (let i = 0; i < operations.length; i++) {
      switch (operations[i]) {
        case "+":
          record.push(record[record.length - 1] + record[record.length - 2]);
          break;
        case "D":
          record.push(record[record.length - 1] * 2);
          break;
        case "C":
          record.pop();
          break;
        default:
          record.push(+operations[i]);
          break;
      }
    }

    return record.reduce((sum, curr) => sum + curr, 0);
  }
}
