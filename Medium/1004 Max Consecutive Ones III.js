/*
1004. Max Consecutive Ones III
Medium
Topics
Companies
Hint
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var longestOnes = function(nums, k) {
//     let result = 0;
//     let count = 0;
//     let flipped = 0;

//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === 1){
//             count++;
//         }
//         //else if(nums[i] === 0 && flipped < k && k > 0){
//         else if(nums[i] === 0 && flipped < k && k > 0){
//             count++;
//             flipped++;
//         }  
//         else if((flipped === k && count > 0)){
//             if(count > result){
//                 result = count;
//             }
//             count = 0;
//             flipped = 0;
//             if(nums[i+1] === 1){
//                 count++;
//                 flipped++;
//             }
//         }
//     }

//     if(count > result){
//         result = count;
//     }

//     return result;
// };

var longestOnes = function(nums, k) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++){
        let temp = 0
        let flipped = 0;
        if(nums[i] === 1){
            temp++;
        } else if(nums[i] === 0 && flipped < k){
            temp++;
            flipped++;
        }
        for(let j = i+1; j < nums.length; j++){
            if(nums[j] === 1){
                temp++;
            } else if(nums[j] === 0 && flipped < k){
                temp++;
                flipped++;
            } else if(flipped === k){
                break;
            }
        }
        if(temp > count){
            count = temp;
        }
    }
    

    return count;
};

nums = [1,1,1,0,0,0,1,1,1,1,0];
k = 2;

// nums = [0,0,1,1,1,0,0];
// k = 0;

console.log(longestOnes(nums, k));