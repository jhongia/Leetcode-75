/*
1679. Max Number of K-Sum Pairs
Medium

Topics
Companies

Hint
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

 

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    // count = 0;

    // for(i = 0; i < nums.length; i++){
    //     for(j = 1; j < nums.length; j++){
    //         if(i !== j && nums[i] + nums[j] === k){
    //             count++;
    //             nums.splice(nums.indexOf(nums[i]), 1);
    //             nums.splice(nums.indexOf(nums[j-1]), 1);
    //             j = i;
    //         }
    //     }
    // }
    // return count;

    nums.sort((a,b) => a-b);
    let count = 0;
    let left = 0; right = nums.length - 1;
    
    while(left < right){
        const tempSum = nums[left] + nums[right];
        if(tempSum == k){
            count ++;
            left++;
            right--;
        } else if(tempSum < k){
            left++;
        } else{
            right--;
        }
    }
    return count;
};

nums = [1,2,3,4];
k = 5;

// nums = [3,1,3,4,3];
// k = 6;

// nums = [3,5,1,5];
// k = 2;

// nums = [2,2,2,3,1,1,4,1];
// k = 4;

console.log(maxOperations(nums, k));

// Time Complexity: n -> O(nlogn)
// Space Complexity: O(1);