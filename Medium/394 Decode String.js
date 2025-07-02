/*
394. Decode String
Medium
Topics
Companies
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 

Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
*/

/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function(s) {
    let multiply = [];
    let tempMult = '';
    let repeatStr = [];
    let solution = '';

    for(let char of s){
        if(!isNaN(char)){
            tempMult = `${tempMult}${char}`
        } else if(char === '['){
            multiply.push(tempMult);
            tempMult = "";

            repeatStr.push(solution);
            solution = "";
        } else if(char === ']'){
            solution = repeatStr.pop() + solution.repeat(multiply.pop());
        } else {
            solution += char;
        }
    }

    return solution;
};

// var decodeString = function(s) {
//     let nums = "0123456789";
//     let out = "";

//     for(let i = 0; i < s.length; i++){
//         if(nums.includes(s[i])){
//             let tempStr = s.slice(i);
//             console.log(tempStr);
//             let openIdx = tempStr.indexOf("[");
//             let closeIdx = tempStr.indexOf("]");
//             let repeatedTimes = tempStr.slice(0,openIdx);
//             console.log(repeatedTimes);
//             let newTemp = tempStr.slice(openIdx+1,closeIdx);
//             console.log(newTemp);
//             if(nums.includes(tempStr[i+3])){
//                 let x = newTemp[i] + tempStr[i+5].repeat(tempStr[i+3]);
//                 out += x.repeat(repeatedTimes);
//                 i++;
//             } else{
//                 out += newTemp.repeat(repeatedTimes);
//             }
//             //i += newTemp.length+2;
//             i += repeatedTimes.length + newTemp.length + 1;
//         } else if(!"[]".includes(s[i])){
//             out += s[i];
//         }
//     }

//     return out;
// };

s = "3[z]2[2[y]pq4[2[jk]e1[f]]]ef";
//s = "3[a]2[bc]";
//s = "3[a2[c]]";
//s = "2[abc]3[cd]ef";

console.log(decodeString(s));