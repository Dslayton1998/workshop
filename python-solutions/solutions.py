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