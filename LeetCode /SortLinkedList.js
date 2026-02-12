/* 
Given the head of a linked list, return the list after sorting it in ascending order.

Input: head = [4,2,1,3]
Output: [1,2,3,4]
*/

function ListNode(val, next = null) {
  this.val = val;
  this.next = next
}

function SortList(head) {

  if (!head || !head.next) return head;

  let slow = head, fast = head, prev = null;

  // Find the middle and end
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Split into 2
  prev.next = null

  let left = SortList(head);
  let right = SortList(slow);

  return merge(left, right);
  
}

function merge(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  current.next = l1 || l2;

  return dummy.next;
}


console.log(SortList([4, 2, 1, 3]))





















