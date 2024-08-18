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




//* 21. Merge Two Sorted Lists * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/
var mergeTwoLists = function(list1, list2) {
    let ans = new ListNode();
    let ptr = ans;
    while(list1 && list2){
        if(list1.val <= list2.val){
            ans.next = new ListNode(list1.val);
            list1 = list1.next;
        }
        else{
            ans.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        ans = ans.next;
    }
    while(list1){
        ans.next = new ListNode(list1.val);
        list1 = list1.next;
        ans = ans.next;
    }
    while(list2){
        ans.next = new ListNode(list2.val);
        list2 = list2.next;
        ans = ans.next;
    }
    return ptr.next;
};



//* 169. Majority Element * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
        * look up *boyer-moore* alg
        *  ^ there is a majority element (important for O(1))
*/
var majorityElement = function(nums) {
    if (nums.length === 1) return nums[0]

    const map = new Map()
    const majorityNumber = Math.ceil(nums.length / 2)

    for (let num of nums) {
        const currentNum = map.get(num)

        if (currentNum) {
            map.set(num, currentNum + 1)

            if (currentNum + 1 >= majorityNumber) return num
        } else {
            map.set(num, 1)
        }
    }
};


/* Javascript Program for Bad Character Heuristic of Boyer
Moore String Matching Algorithm */
let NO_OF_CHARS = 256;
 
// A utility function to get maximum of two integers
function max ( a, b )
{
    return ( a > b ) ? a: b;
}
 
// The preprocessing function for Boyer Moore's
// bad character heuristic
function badCharHeuristic(str, size, badChar)
{
    // Initialize all occurrences as -1
      for (let i = 0; i < NO_OF_CHARS; i++)
           badChar[i] = -1;
  
      // Fill the actual value of last occurrence
      // of a character (indices of table are ascii and values are index of occurrence)
      for (i = 0; i < size; i++)
           badChar[ str[i].charCodeAt(0) ] = i;
}
 
/* A pattern searching function that uses Bad
     Character Heuristic of Boyer Moore Algorithm */
function search(txt,pat)
{
    let m = pat.length;
      let n = txt.length;
  
      let badChar = new Array(NO_OF_CHARS);
  
      /* Fill the bad character array by calling
         the preprocessing function badCharHeuristic()
         for given pattern */
      badCharHeuristic(pat, m, badChar);
  
      let s = 0;  // s is shift of the pattern with
                  // respect to text
       // there are n-m+1 potential alignments
      while(s <= (n - m))
      {
          let j = m - 1;
  
          /* Keep reducing index j of pattern while
             characters of pattern and text are
             matching at this shift s */
          while(j >= 0 && pat[j] == txt[s + j])
              j--;
  
          /* If the pattern is present at current
             shift, then index j will become -1 after
             the above loop */
          if (j < 0)
          {
              document.write("Patterns occur at shift = " + s);
  
              /* Shift the pattern so that the next
                 character in text aligns with the last
                 occurrence of it in pattern.
                 The condition s+m < n is necessary for
                 the case when pattern occurs at the end
                 of text */
              //txt[s+m] is character after the pattern in text
              s += (s + m < n)? m-badChar[txt[s + m].charCodeAt(0)] : 1;
  
          }
  
          else
              /* Shift the pattern so that the bad character
                 in text aligns with the last occurrence of
                 it in pattern. The max function is used to
                 make sure that we get a positive shift.
                 We may get a negative shift if the last
                 occurrence  of bad character in pattern
                 is on the right side of the current
                 character. */
              s += max(1, j - badChar[txt[s + j].charCodeAt(0)]);
      }
}



//* 383. Ransom Note * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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

* IF rNote.length < mag.length or vise versa, return false
* Create a hashmap for both rNote and mag
* Iterate and compare values of rNote[i] vs. mag[i]
    * IF any of the values do not match, return false
*/
var canConstruct = function(ransomNote, magazine) {
    for (const char of magazine) {
        ransomNote = ransomNote.replace(char, "");
      }
      
      if (!ransomNote) return true;
      else return false;
};




//* 383. Ransom Note * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
    const reverseMap = {};

    if(wordArr.length != pattern.length) {
    // If there are more char's in the pattern than words in s return false.
        return false
    };

    for(let i = 0; i < pattern.length; i++ ) {
        const currPattern = pattern[i]

        if(map[currPattern] == undefined) {
        // This creates both of our maps
            map[currPattern] = wordArr[i]
            reverseMap[wordArr[i]] = currPattern

        } else {

            if(map[currPattern] != wordArr[i]) {
                return false
            }
        // Checking maps, to make sure any discovered keys value, matches the current word in the pattern.
            if(reverseMap[wordArr[i]] != currPattern) {
                return false
            }
        }
    };

    if(Object.keys(map).length != Object.keys(reverseMap).length) {
        // Checks if there are more keys to the pattern, than words in s.
        return false
    };

    return true
};



//* 13. Roman to Integer * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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




//* 58. Length of Last Word * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
// * const trim = s.trim() <=== trim can be useful, returns a str ("fly me   to   the moon")
};

// console.log(lengthOfLastWord("Hello World")) // 5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
// console.log(lengthOfLastWord('luffy is still joyboy'))// 6
// console.log(lengthOfLastWord(''))




//* 14. Longest Common Prefix * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

* Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"


* Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

* 1. iterate through the arr, and compare letters from left to right
* 2. 
*/
var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLen = pref.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (pref !== s.substring(0, prefLen)) {
            prefLen--;
            if (prefLen === 0) {
                return "";
            }
            pref = pref.substring(0, prefLen);
        }
    }

    return pref; 
};

// console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"])) // "" (There is no common prefix among the input strings.)
// console.log(longestCommonPrefix())



//* 392. Is Subsequence * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
// console.log(isSubsequence("abc", "cba")) // false


//! F*** THIS PROBLEM !\\
//* 202. Happy Number * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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



//* 205. Isomorphic Strings * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const dict = new Map();
    const hSet = new Set();

    for(let i = 0; i< s.length;i++)
    {
        const sChar = s.charAt(i);
        const tChar = t.charAt(i);
        if (!dict.has(sChar))
        {
            if(hSet.has(tChar))
            {
                return false;
            }
            dict.set(sChar, tChar);
            hSet.add(tChar);
        }
        else    //check if exists
        {
            if(tChar !== dict.get(sChar))
            {
                return false;
            }
        }
    }

    return true;
};






//* 242. Valid Anagram * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    var freq = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for (var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) {
            return false;
        }
    }
    
    return true;
};



//* 228. Summary Ranges * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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



//* 100. Same Tree * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false
 

Constraints:

The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    }
    
    if (p && q && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    
    return false;    
};



//* 637. Average of Levels in Binary Tree * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
Example 2:


Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let q = [root], ans = []
    while (q.length) {
        let qlen = q.length, row = 0
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
            row += curr.val
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        ans.push(row/qlen)
    }
    return ans
};



//* 136. Single Number * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Initialize the unique number...
    let uniqNum = 0;
    // TRaverse all elements through the loop...
    for (let idx = 0; idx < nums.length; idx++) {
        // Concept of XOR...
        uniqNum = uniqNum ^ nums[idx];
    } return uniqNum;       // Return the unique number...
};



//* 69. Sqrt(x) * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
*/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var beg = 0, end = x, ans = 0;
    
    while(beg <= end) {
        var mid = Math.floor((beg + end)/2);
        
        if(mid*mid > x) {
            end = mid - 1;
        }
         
        else { // mid*mid <= x
            ans = mid;
            beg = mid + 1;
        }
    }
    return ans;
};


//* 9. Palindrome Number * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
*/
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let reverse = 0;
    let xCopy = x;
    while (x > 0) {
        reverse = (reverse * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    return reverse === xCopy;
};


//* 1. Two Sum * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/
var twoSum = function(nums, target) {
    //select the first number and add that to the rest of the values in the array
    // IF that number == the target return those index's
    // ELSE grab the next number out of the array and continue the process 
    let solution = [];
    let index = 0;
    while (index < nums.length) {
    const currentIndex = nums[index]
        if(currentIndex + nums[index + 1] == target) {
            solution.push(index)
            solution.push(index + 1)
            return solution
        } else {
            index++
        }
    }
};


//* 20. Valid Parentheses * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/
var isValid = function(s) {
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};



//* 168. Excel Sheet Column Title * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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



//* 836. Rectangle Overlap * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/* 
An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.

Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.

 

Example 1:

Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
Output: true
Example 2:

Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
Output: false
Example 3:

Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
Output: false
 

Constraints:

rec1.length == 4
rec2.length == 4
-109 <= rec1[i], rec2[i] <= 109
rec1 and rec2 represent a valid rectangle with a non-zero area.
*/
var isRectangleOverlap = function(rec1, rec2) {
    if (rec1[2] <= rec2[0]) {
        return false;
    }
    // Check if rec1 is to the right of rec2
    if (rec1[0] >= rec2[2]) {
        return false;
    }
    // Check if rec1 is above rec2
    if (rec1[1] >= rec2[3]) {
        return false;
    }
    // Check if rec1 is below rec2
    if (rec1[3] <= rec2[1]) {
        return false;
    }
    // If none of the above conditions are true, rectangles overlap
    return true;
};