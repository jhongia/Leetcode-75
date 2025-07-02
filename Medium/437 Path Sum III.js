/*
437. Path Sum III
Medium
Topics
premium lock icon
Companies
Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

 

Example 1:


Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.
Example 2:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3
 

Constraints:

The number of nodes in the tree is in the range [0, 1000].
-109 <= Node.val <= 109
-1000 <= targetSum <= 1000
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let result = 0;
    const map = new Map();

    let dfs = function(root, targetSum, currSum, map){
        if(!root) return;
        currSum += root.val;
        if(currSum === targetSum) result++;
        if(map.has(currSum - targetSum)){
            result += map.get(currSum - targetSum);
        }
        map.set(currSum, (map.get(currSum) || 0) + 1);
        dfs(root.left, targetSum, currSum, map);
        dfs(root.right, targetSum, currSum, map);
        map.set(currSum, map.get(currSum) - 1);
    }
    dfs(root, targetSum, 0, map);

    return result;
};

let root = [10,5,-3,3,2,null,11,3,-2,null,1];
let targetSum = 8;

console.log(pathSum(root, targetSum));