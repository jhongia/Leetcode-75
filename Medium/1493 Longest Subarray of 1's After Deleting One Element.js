/*
1493. Longest Subarray of 1's After Deleting One Element
Medium
Topics
Companies
Hint
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

 

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    count = 0;

    if(nums.length > 1){
        for(let i = 0; i < nums.length; i++){
            let temp = 0;
            let deleted = false;
            if(nums[i] === 1){
                temp++;
            } else if(!deleted){
                deleted = true;
            }
            for(let j = i+1; j < nums.length; j++){
                if(nums[j] === 1 && j !== nums.length - 1){
                    temp++;
                } else if(nums[j] === 1 && j === nums.length - 1 && deleted){
                    temp++;
                } else if(!deleted && j !== nums.length - 1){
                    deleted = true;
                } else if(deleted){
                    break;
                }
            }
            if(temp > count){
                count = temp;
            }
        }
    }
    
    return count;
};

nums = [1,1,0,1];

console.log(longestSubarray(nums));