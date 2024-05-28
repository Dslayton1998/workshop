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