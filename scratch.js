/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).


Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.


Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

1. 3 -> 2 -> 0 -> -4
        ^-----------

2. IF pos = -1 return false 
3. head = 1st node, navigate until we reach an end (no .next)
4. tail cycles back to a node farther up the list
5. IF it does return true        
*/
var hasCycle = function(head) {
    if(head == null) {
        return false
    }

    let list = [];

    while (!list.includes(head)) {
        if(head.next == null) {
            return false
        }

        list.push(head)
        head = head.next
    }

    return true
};



// head = [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5]
// pos = -1


