/*
334. Increasing Triplet Subsequence
Medium

Topics
Companies
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

Constraints:

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    /* Solution 1 67/84 test passed
    let ans = false;
    let numsLen = nums.length;

    if(numsLen >= 3){
        for(i = 0; i < numsLen; i++){
            let j = i+1;
            let k = i+2;
            if((nums[i] < nums[j]) && (nums[j] < nums[k])){
                ans = true;
            }
        }
    }

    return ans;
    */
    let minOne = Infinity;
    let minTwo = Infinity;
    
    for(let num of nums){
        if(num < minOne){
            minOne = num
        }
        if(num > minOne){
            minTwo = Math.min(num, minTwo);
        }
        if(num > minTwo){
            return true;
        }
    }
    return false;
};

//nums = [1,2,3,4,5];
//nums = [20,100,10,12,5,13];
//nums = [5,4,3,2,1];
//nums = [1,2,1,3];
nums = [20,100,10,12,5,13];

console.log(increasingTriplet(nums));

//console.log(nums.sort((a,b) => a-b)); => (6) [5, 10, 12, 13, 20, 100] sort increasing order