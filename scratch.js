/* 
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"
 

Constraints:

1 <= columnNumber <= 231 - 1
*/
var convertToTitle = function(columnNumber) {
    const arr = [];
    while (cn > 0) {
        const remainder = (cn - 1) % 26;
        arr.push(String.fromCharCode(remainder + 65));
        cn = Math.floor((cn - 1) / 26);
    }
    return arr.reverse().join('');
};