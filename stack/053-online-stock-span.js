/*
  == BRUTE FORCE ==
  O(n^2) time complexity
  O(n) space complexity
*/
class StockSpanner {
  constructor() {
    this.arr = [];
  }

  next(price) {
    this.arr.push(price);
    let i = this.arr.length - 2;
    while (i >= 0 && this.arr[i] <= price) {
      i--;
    }
    return this.arr.length - i - 1;
  }
}

/*
  == STACK ==
  O(n) time complexity
  O(n) space complexity
*/
class StockSpanner {
  constructor() {
    this.stack = []; // pair: [price, span]
  }

  next(price) {
    let span = 1;
    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
      span += this.stack.pop()[1];
    }
    this.stack.push([price, span]);
    return span;
  }
}
