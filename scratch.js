/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1
* 1. split n, and square each digit in its sum, adding the totals to == the NEW n
* 2. repeat this process until NEW n == 1
* 3. If it ends in 1 return true
    * - ELSE return false
*/
var isHappy = function(n) {
    const checked = [];
    while (n !== 1) {
        if (checked.includes(n)) return false;
        checked.push(n);
        n = n.toString().split('').map(i => i**2).reduce((sum, i) => sum + i, 0);
    }
    return true;
};


// console.log(isHappy(19)) // true
// console.log(isHappy(2)) // false
// console.log(isHappy(7)) // true