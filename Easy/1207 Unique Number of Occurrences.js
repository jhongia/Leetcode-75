/*
1207. Unique Number of Occurrences
Solved
Easy
Topics
Companies
Hint
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 

Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
*?

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let result = false;
    let nums = [];
    let vis = [];

    for(let i = 0; i < arr.length; i++){
        let sameNum = arr[i];
        if(!nums.includes(sameNum)){
            let count = 1;
            for(let j = i+1; j < arr.length; j++){
                if(arr[j] === sameNum){
                    count++;
                }
            }
            if(!vis.includes(count)){
                vis.push(count);
                result = true;
            } else{
                //result = false;
                return false;
            }
            nums.push(sameNum);
        }
    }

    return result;
};

arr = [3,5,-2,-3,-6,-6];

console.log(uniqueOccurrences(arr));