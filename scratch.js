/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

* Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.


* Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.


* Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.

    * 1. split the string of the spaces, now we have an array of words.
    * 2. pop the last word out and return it.
    *   IF the last word is == a space, continue to pop()
* s = s.trim();
*/
var lengthOfLastWord = function(s) {
    const strArr = s.split(' ');
    let lastWord = strArr.pop()

    const trim = s.trim()
    console.log(trim)

    while(lastWord === '') {
        lastWord = strArr.pop()
    }

    return lastWord.length
// * const trim = s.trim() <=== trim can be useful, returns a str
};

// console.log(lengthOfLastWord("Hello World")) // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
// console.log(lengthOfLastWord('luffy is still joyboy'))// 6
// console.log(lengthOfLastWord(''))