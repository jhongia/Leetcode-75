/*
1657. Determine if Two Strings Are Close
Medium
Topics
Companies
Hint
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
 

Constraints:

1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function getSortedItems(word) {

    const group = {};

    for (let c of word) {
        group[c] = (group[c] || 0) + 1;
    }

    return {
        keys: Object.keys(group).sort(),
        counts: Object.values(group).sort((a, b) => a - b),
    };

}

var closeStrings = function(word1, word2) {

    if (word1.length !== word2.length) {
        return false;
    }
    
    const group1 = getSortedItems(word1);
    const group2 = getSortedItems(word2);

    for (let i = 0; i < group1.keys.length; i++) {
        if (group1.keys[i] !== group2.keys[i] || group1.counts[i] !== group2.counts[i]) {
            return false;
        }
    }

    return true;

};
// var closeStrings = function(word1, word2) {
//     let ans = false;
//     let tempWord = "";

//     if(word1.length === word2.length){
//         for(let i = 0; i < word2.length; i++){
//             //if(word1.includes(word2[i])){
//                 if(!word2.includes(word1[i])){
//                     break;
//                 }
//                 let charIdx = word1.indexOf(word2[i]);
//                 tempWord += word1[charIdx];
//                 word1 = word1.slice(0,charIdx) + word1.slice(charIdx+1,word1.length);
//             //}
//         }
//         if(tempWord === word2){
//             ans = true;
//         }
//     }

//     return ans;
// };

word1 = "abbbzcf";
word2 = "babzzcz";

console.log(closeStrings(word1, word2));

console.log("abc".indexOf("c"));