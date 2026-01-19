class Solution {
  // == MY SOLUTION (O(n), O(n)) ==
  evalRPN(tokens) {
    const stack = [];

    for (const token of tokens) {
      let op1 = stack[stack.length - 2];
      let op2 = stack[stack.length - 1];
      switch (token) {
        case "+":
          stack.pop();
          stack.pop();
          stack.push(+op1 + +op2);
          break;
        case "-":
          stack.pop();
          stack.pop();
          stack.push(+op1 - +op2);
          break;
        case "*":
          stack.pop();
          stack.pop();
          stack.push(+op1 * +op2);
          break;
        case "/":
          stack.pop();
          stack.pop();
          stack.push(Math.trunc(+op1 / +op2));
          break;
        default:
          stack.push(token);
      }
    }

    return +stack[0];
  }
}
