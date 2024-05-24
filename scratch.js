/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.  

1.index into pattern and set the first value of s into an object with pattern as key s as value
2. IF the next letter in pattern exists in the object check if the next letters value is the same
        IF NOT return false

*/

var wordPattern = function(pattern, s) {
    const wordArr = s.split(' ');
    const map = {};
    const reverseMap = {}

    for(let i = 0; i < pattern.length; i++ ) {
        const currPattern = pattern[i]
        if(map[currPattern] == undefined) {
            map[currPattern] = wordArr[i]
            reverseMap[wordArr[i]] = currPattern
        } else {
            if(map[currPattern] != wordArr[i]) {
                return false
            }

            if(reverseMap[wordArr[i]] != currPattern) {
                return false
            }

        }
    }

    // const keys = Object.keys(map)

    // for(let i = 0; i < keys.length; i++) {
    //     if(reverseMap[keys[i]] == undefined) {
    //         return false
    //     }
    // }
    return true
};

// let pattern = "abba"
// let s = "dog cat cat dog"
// console.log(wordPattern('abba', "dog cat cat dog")) //true
// console.log(wordPattern('abba', "dog cat cat fish")) //false
// console.log(wordPattern('abba', "dog dog dog dog")) // false
// console.log(wordPattern(pattern, s))



/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/