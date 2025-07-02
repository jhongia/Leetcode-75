/*
1161. Maximum Level Sum of a Binary Tree
Medium
Topics
premium lock icon
Companies
Hint
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

 

Example 1:


Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
Example 2:

Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105

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
 * @return {number}
 */
var maxLevelSum = function(root) {
    if(!root) return 0;
    let maxSum = root.val;
    let maxLevel = 1;
    let currLevel = 1;

    let queue = [root];

    while(queue.length){
        let len = queue.length;
        let sum = 0;

        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            sum += node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        if(sum > maxSum){
            maxSum = sum;
            maxLevel = currLevel;
        }
        currLevel++;
    }
    return maxLevel;
};

let root = [1,7,0,7,-8,null,null];

console.log(maxLevelSum(root)); //2

/*
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Example Tree:
//      1
//     / \
//    7   0
//   / \
//  7  -8

let root = new TreeNode(1, 
              new TreeNode(7, new TreeNode(7), new TreeNode(-8)),
              new TreeNode(0)
);
*/