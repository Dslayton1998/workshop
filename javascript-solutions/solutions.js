//* 88. Merge Sorted Array *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var merge = function(nums1, m, nums2, n) {
    /*
    * nums1 and nums2 are sorted
    * nums1 has space allowed for nums2
    * m is the last location of true number in nums1
    * n is the last location for nums2
    * indexes are zeroed will need to subtract 1 form m&n
    */
    let last = m + n - 1;
    let index1 = m - 1;
    let index2 = n - 1;
    while ( index1 >= 0 && index2 >= 0 ) {
        if(nums1[index1] > nums2[index2]) {
            nums1[last] = nums1[index1]
            index1 -= 1
        } else {
            nums1[last] = nums2[index2]
            index2 -= 1
        }
        last -= 1
    }

    while ( index2 >= 0 ) {
        nums1[last] = nums2[index2]
        index2 -= 1
        last -= 1
    }
};



//* 27. Remove Element *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var removeElement = function(nums, val) {
    /*
    * return the amount of nums that are != to the given value(k)
    * order does not matter
    * all occurences of val need to be removed 
    * all nums != to value need to be at the beggining of array
    * Must be done IN-PLACE
    */

    //current num pointer/counter
    let k = 0

    // Search through array/list
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
};


//* 26. Remove Duplicates from Sorted Array * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var removeDuplicates = function(nums) {
    let l = 1

    for(let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[l] = nums[i]
            l++
        }
    }
    return l
};


//* 80. Remove Duplicates from Sorted Array II * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var removeDuplicates = function(nums) {
    // Start with a left and right pointer
    let l = nums[0]
    let r = nums[1]
    let pivot = 2

    for(let i = 2; i < nums.length; i++) {
        // is current number a duplicate?
        const curr = nums[i]
        if(curr != l || curr != r) {
            nums[pivot] = curr
            pivot++
        }
        l = r
        r = curr
    }
    return pivot
};


//* 35. Search Insert Position * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

----------------------------------------------------------------------------------------------------------------------------------------
1. check if the number is in the array, if so return index and done
2. IF not, (number > currIndex == keep going) the moment (number < currIndex, we return counter)
3. IF we reach the end and haven't found a spot, simply return the count
*/

var searchInsert = function(nums, target) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        let currNum = nums[i];

        // IF the target is in the array:
        if(currNum == target) {
            return i
        };

        // IF the target is not in the array:
        if(nums[count] < target) {
            count++
        } else {
            return count
        }
    }

    return count
};

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
// [1,3,5,6] target = 7
// count = 4

/*
left, right = 0, len(nums) - 1
        
        while left <= right:
            mid = left + (right - left) // 2
            
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        
        return left
*/


//* 28. Find the Index of the First Occurrence in a String * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

------------------------------------------------------------------------------------------------------------------
1.compare 1st char of needle to chars of haystack IF there is a match move the pointer for needle AND haystack (+1)
2. IF counter == needle.length return the starting index
3. IF counter == haystack.length return -1
*/
// // var strStr = function(haystack, needle) {
// //    let hayCounter = 0
// //    let needCounter = 0
// //    let index = 0
// //    while(index <= needCounter) {
// //    }
// //};
var strStr = function(haystack, needle) {
    const index = haystack.indexOf(needle);
    return index;
};




//* 141. Linked List Cycle * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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



//* 14. Longest Common Prefix * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

1. create a counter, and variable(zeroStr) for the first string in the arr
2. compare all the other strings to that var(zeroStr)
    * IF the letters match during comparison, create a var
    * IF one string ends save it to a var
*/
var longestCommonPrefix = function(strs) {
    let word=""; //the variable that takes every character of the first string one by one
    let words="";// the variable that stores the previous state of 'word' variable
    let i; 
    let count=0; 
    while(count != strs[0].length) // A loop to gather every character of the first string at 0th index
    {
        words=word; // stores the previous state
        word+=strs[0][count]; //adds the next character to 'word' variable's previous state
        for( i = 1 ; i < strs.length ; i++ ) 
        {
            if(strs[i][count]!==word[count]) 
            {
                // if true then revert to previous state and break
                word=words;
                break;
            }
        }
        if(word == words) //if state of 'word' remains unchanged then break
        {
            break;
        }
        count += 1; //increment to count to get the next character
    }
    return(word);
};