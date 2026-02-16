class Solution {
  /*
    == TWO POINTERS ==
    O(n) time complexity
    O(1) space complexity
   */
  removeNthFromEnd(head, n) {
    const dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;

    while (n > 0) {
      right = right.next;
      n--;
    }

    while (right !== null) {
      left = left.next;
      right = right.next;
    }

    left.next = left.next.next;
    return dummy.next;
  }
}
