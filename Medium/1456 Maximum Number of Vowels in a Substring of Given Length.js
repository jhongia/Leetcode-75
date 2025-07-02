/*
1456. Maximum Number of Vowels in a Substring of Given Length
Medium
Topics
Companies
Hint
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// passing 100/107
var maxVowels = function(s, k) {
    count = 0;
    vowels = "aeiou";

    for(i = 0; i < s.length; i++){
        if(s[k + i-1] !== undefined){
            let word = s.slice(i, k+i);
            //console.log(word);
            let temp = 0;
            for(j = 0; j < word.length; j++){
                if(vowels.includes(word[j])){
                    temp++;
                }
            }
            if(temp > count){
                count = temp;
            }
        }
    }

    return count;
};

s = "abciiidef";
k = 3;

console.log(maxVowels(s,k));