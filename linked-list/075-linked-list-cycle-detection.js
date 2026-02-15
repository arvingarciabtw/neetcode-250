class Solution {
  /*
    == FAST AND SLOW POINTERS ==
    O(n ) time complexity
    O(1) space complexity
   */
  hasCycle(head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
        return true;
      }
    }

    return false;
  }
}
