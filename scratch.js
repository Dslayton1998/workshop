/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.


Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.


Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.


Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
_________________________________
    *   Symbol       Value       |
    *    I             1         |
    *    V             5         |
    *    X             10        |
    *    L             50        |
    *    C             100       |
    *    D             500       |
    *    M             1000      |
_________________________________|

* 1. Create a map for all values of roman numerals
* 2. Check each rNum in s, compare to map value starting from back
    * IF the rNum == x, and the rNum to the left of x == y, add something different to the total
    * 
*/
var romanToInt = function(s) {
    let total = 0
    const map =  {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for(let i = s.length - 1; i > -1; i--){
        const rNum = s[i];
        const edgeCheck = s[i - 1];
        let currentValue = 0;

        // WHEN we reach the end
        if(edgeCheck == undefined) {
            total += map[rNum]
            break;
        }

        // I can be placed before V (5) and X (10) to make 4 and 9.
        if(rNum == 'V' && edgeCheck == 'I') {
            currentValue = 4
            i--
        } else if(rNum == 'X' && edgeCheck == 'I') {
            currentValue = 9
            i--
        // X can be placed before L (50) and C (100) to make 40 and 90.
        } else if(rNum == 'L' && edgeCheck == 'X') {
            currentValue = 40
            i--
        } else if(rNum == 'C' && edgeCheck == 'X') {
            currentValue = 90
            i--
        // C can be placed before D (500) and M (1000) to make 400 and 900.
        } else if(rNum == 'D' && edgeCheck == 'C') {
            currentValue = 400
            i--
        } else if(rNum == 'M' && edgeCheck == 'C') {
            currentValue = 900
            i--
        // It does not fall under any edgeCases and we add normally.
        } else {
            currentValue = map[rNum]
        }

        total += currentValue

    };

    return total;
};
