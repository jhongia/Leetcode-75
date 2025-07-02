/*
345. Reverse Vowels of a String
Easy

Topics
Companies
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = "aeiou";
    let sVowels = [];
    let ans = "";

    for(i = 0; i < s.length; i++){
        if(vowels.includes(s[i].toLowerCase())){
            sVowels.push(s[i]);
        }
    }

    let sVowelsLen = sVowels.length-1;

    for(i = 0; i < s.length; i++){
        if(vowels.includes(s[i].toLowerCase())){
            ans += sVowels[sVowelsLen];
            //console.log(s[i]);
            console.log(sVowels[sVowelsLen]);
            sVowelsLen--;
        } else{
            ans += s[i];
        }
    }

    return ans;
};

s = "IceCreAm";

console.log(reverseVowels(s));