/*
1071. Greatest Common Divisor of Strings
Easy

Topics
Companies

Hint
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if((str1 + str2) !== (str2 + str1)){
        return "";
    }

    str1Len = str1.length;
    str2Len = str2.length;
    gcd = 0;

    if(str1Len > str2Len){
        gcd = GCD(str1Len, str2Len);;
    } else {
        gcd = GCD(str2Len, str1Len);
    }

    function GCD(num1, num2){
        if(num2 === 0){
            return num1;
        }
        return GCD(num2, num1 % num2);
    }

    return str1.substring(0, gcd);
}

// str1 = "ABCDEF";
// str2 = "ABC";

str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX";
str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX";

console.log(gcdOfStrings(str1, str2));
//console.log(45%25); //20
//console.log(25%45); //25