/*
700. Search in a Binary Search Tree
Easy
Topics
premium lock icon
Companies
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

Example 1:


Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
Example 2:


Input: root = [4,2,7,1,3], val = 5
Output: []
 

Constraints:

The number of nodes in the tree is in the range [1, 5000].
1 <= Node.val <= 107
root is a binary search tree.
1 <= val <= 107
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
 * @param {number} val
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return null;
    if(root.val === key){
        return helper(root);
    }
    let curr = root;

    while(root){
        if(key < root.val){
            if(root.left && root.left.val === key){
                root.left = helper(root.left);
                break;
            }
            root = root.left;
        } else {
            if(root.right && root.right.val === key){
                root.right = helper(root.right);
                break;
            }
            root = root.right;
        }
    }
    return curr;
};

var helper = function(root){
    if(!root.left){
        return root.right;
    }
    if(!root.right){
        return root.left;
    }
    let curr = root;
    let left = root.left;
    let right = root.right;

    while(left.right){
        left = left.right;
    }
    left.right = right;
    return curr.left;
}

root = [4,2,7,1,3];
val = 2;

console.log(searchBST(root, val)); //[2,1,3]