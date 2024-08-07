#* 88. Merge Sorted Array *#############################################################################################
def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    """
    Do not return anything, modify nums1 in-place instead.
    * both nums1 and nums2 are sorted
    * num1 has enough space for num2 
    * m is where last true number in nums1 begins (index)
    * n is the last index of nums2
    """

    # last index nums1
    # - 1 because indexes are zeroed
    last = m + n - 1

    # merge in reverse order
    while m > 0 and n > 0:
        # - 1 because indexes are zeroed
        if nums1[m - 1] > nums2[n - 1]:
            nums1[last] = nums1[m - 1]
            m -= 1
        else:
            nums1[last] = nums2[n - 1]
            n -= 1
        # decrease last index no matter what*
        last -= 1

    # fill nums1 with leftovers in nums2
    while n > 0:
        nums1[last] = nums2[n - 1]
        n, last = n - 1, last - 1



#* 27. Remove Element *#####################################################################################################
def removeElement(self, nums: List[int], val: int) -> int:
    """
    * return the amount of nums that are != to the given value(k)
    * order does not matter
    * all occurences of val need to be removed 
    * all nums != to value need to be at the beggining of array
    * Must be done IN-PLACE
    """
    # current num pointer/counter
    k = 0

    # Search through array/list
    for i in range(len(nums)):
        if nums[i] != val:
            nums[k] = nums[i]
            k += 1
    return k


#* 26. Remove Duplicates from Sorted Array *######################################################################################
def removeDuplicates(self, nums: List[int]) -> int:
    """
    * sorted in ascending order (except duplicates)
    * remove the duplicates
    * must be done in place
    * return value is how many unique values are in array
    """
    # left pointer to keep track of position in 
    l = 1

    for r in range(1, len(nums)):
        # compare the current value to the one before it
        # if they are not equal then that is a new unique value
        if nums[r] != nums[r - 1]:
            nums[l] = nums[r]
            l += 1
    return l




#* 80. Remove Duplicates from Sorted Array II *########################################################################################
def removeDuplicates(self, nums: List[int]) -> int:
    l = 0
    r = 0

    while r < len(nums):
        count = 1
        # 2nd while loop to keep track of streak of values
        while r + 1 < len(nums) and nums[r] == nums[r + 1]:
        #       ^ a guard to keep from going out of bounds
            r += 1
            count += 1

        for i in range(min(2, count)):
            # if the count is greater than 2 we only keep 2 if its 1 we get just the 1 (min)
            # for every iteration we replace at left pointer
            nums[l] = nums[r]
            l += 1
        # increament to get to next streak
        r += 1
    return l

#* 35. Search Insert Position *########################################################################################
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1
        
        return left
    

#* 28. Find the Index of the First Occurrence in a String *########################################################################################
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        for i in range(len(haystack) - len(needle) + 1):
            if haystack[i:i+len(needle)] == needle:
                return i
        return -1
    

#* 141. Linked List Cycle *########################################################################################
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        fast = head
        slow = head
        
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
            
            if fast == slow:
                return True
    
        return False
    

#* 14. Longest Common Prefix *########################################################################################
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        ans=""
        v=sorted(v)
        first=v[0]
        last=v[-1]

        for i in range( min (len (first), len(last))):
            if (first[ i ] != last[ i ]):
                return ans
            ans += first[ i ]
        return ans
    

#* 21. Merge Two Sorted Lists *########################################################################################
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        cur = dummy

        while list1 and list2:
            if list1.val > list2.val:
                cur.next = list2
                list2 = list2.next
            else:
                cur.next = list1
                list1 = list1.next
            
            cur = cur.next
        
        if list1:
            cur.next = list1
        else:
            cur.next = list2
        
        return dummy.next
    

#* 169. Majority Element *########################################################################################
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        """
        * look up *boyer-moore* alg
        *  ^ there is a majority element (important for O(1))
        """
        res = 0
        count = 0

        for n in nums:
            if count == 0:
                res = n
            count += (1 if n == res else - 1)
        return res
    

#* 383. Ransom Note *########################################################################################
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        if len(magazine)<len(ransomNote):
            return False
        for char in ransomNote:
            if char in magazine:
                magazine = magazine.replace(char,'',1)
            else:
                return False
        return True
    

#* 13. Roman to Integer *########################################################################################
class Solution:
    def romanToInt(self, s: str) -> int:
        m = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
        ans = 0
        
        for i in range(len(s)):
            if i < len(s) - 1 and m [s[ i ]] < m[s[ i + 1 ]]:
                ans -= m[s[ i ]]
            else:
                ans += m[s[ i ]]
        
        return ans