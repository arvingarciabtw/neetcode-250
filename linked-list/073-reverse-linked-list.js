class Solution {
  /*
    == ITERATION ==
    O(n) time complexity
    O(1) space complexity
   */
  reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    return prev;
  }
}
