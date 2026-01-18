class MinStack {
  /*
    == MY SOLUTION == 
    (O(n) for getMin()
    O(1) for the rest)
  */
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    let min = this.stack[0];

    for (let i = 0; i < this.stack.length; i++) {
      min = Math.min(min, this.stack[i]);
    }

    return min;
  }

  /*
    == TWO STACKS == 
    (O(1) time complexity 
    O(n) space complexity  
  */
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    val = Math.min(
      val,
      this.minStack.length === 0
        ? val
        : this.minStack[this.minStack.length - 1],
    );
    this.minStack.push(val);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
