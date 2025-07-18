/*
392. Is Subsequence
Easy

Topics
Companies
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let answer = false;
    let idx = -1;

    if(s === ""){
        answer = true;
    }
    else{
        for(i = 0; i < s.length; i++){
            if(t.includes(s[i])){
                answer = true;
                idx = t.indexOf(s[i]);
                t = t.slice(idx+1);
                console.log(t);
            }
            else{
                return false;
            }
        }
    }
    return answer;
};

// s = "abc";
// t = "ahbgdc";

s = "";
t = "ahbgdc";

console.log(isSubsequence(s));