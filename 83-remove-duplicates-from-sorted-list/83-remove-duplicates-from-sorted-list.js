/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {

    let ref = head;
    
    while(ref != null && ref.next != null) {
        if(ref.val == ref.next.val) {
            ref.next = ref.next.next;
        } else {
            ref = ref.next;
        }
    }
    
    return head;
};