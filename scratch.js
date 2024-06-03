/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true


Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false


Example 3:

Input: s = "abc", t= "cba"
Output: false

 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
* 1. split the s and t  string
* 2. if 
*/
var isSubsequence = function(s, t) {
    let sPointer = 0;
    // let rightPointer = 0;

    for(let i = 0; i < t.length; i++) {
        const currLetter = t[i];
        
        if(currLetter == s[sPointer]) {
            sPointer++
        }
    }

    if(sPointer != s.length) {
        return false
    }

    return true
};

// console.log(isSubsequence("abc", "ahbgdc")) // true 
// console.log(isSubsequence("axc", "ahbgdc")) // false
console.log(isSubsequence("abc", "cba")) // false