class Solution {
  /*
    == ITERATION ==
    O(n) time complexity
    O(1) space complexity
  */
  reverseBetween(head, left, right) {
    const dummy = new ListNode(0, head);
    let leftPrev = dummy,
      cur = head;

    for (let i = 0; i < left - 1; i++) {
      leftPrev = cur;
      cur = cur.next;
    }

    let prev = null;
    for (let i = 0; i < right - left + 1; i++) {
      const tmpNext = cur.next;
      cur.next = prev;
      prev = cur;
      cur = tmpNext;
    }

    leftPrev.next.next = cur;
    leftPrev.next = prev;

    return dummy.next;
  }
}
