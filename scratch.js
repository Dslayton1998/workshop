/*
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
 

Constraints:

0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order. 
*/
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
        // Create a list of string to store the output result...
        const output = [];
        // Start traversing the array from idx = 0 till idx < sizeofarray in a while loop.
        let idx = 0;
        while(idx < nums.length) {
            // Initialize beg and last index for identifying the continuous element in the array...
            let beg, last;
            // Mark the number at current index as beginning element of the range...
            beg = nums[idx];
            // Traverse the array beggining from current index & find the last element whose difference from previous element is exactly 1, i.e. nums[idx + 1] == nums[idx] + 1...
            while(idx+1 < nums.length && nums[idx+1] == nums[idx] + 1) 
                idx++;
            // Set this element as last element of the range...
            last = nums[idx];
            // If continuous element isn't present...
            if(beg == last)
                output.push(beg + "");
            // If present...
            else
                output.push( beg + "->" + last );
            idx++;          
        }
};