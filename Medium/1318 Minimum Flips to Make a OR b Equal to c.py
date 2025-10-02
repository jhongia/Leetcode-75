'''
1318. Minimum Flips to Make a OR b Equal to c
Medium
Topics
premium lock icon
Companies
Hint
Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

 

Example 1:



Input: a = 2, b = 6, c = 5
Output: 3
Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
Example 2:

Input: a = 4, b = 2, c = 7
Output: 1
Example 3:

Input: a = 1, b = 2, c = 3
Output: 0
 

Constraints:

1 <= a <= 10^9
1 <= b <= 10^9
1 <= c <= 10^9
'''

class Solution:
    def minFlips(self, a: int, b: int, c: int) -> int:
        flips = 0
        while a > 0 or b > 0 or c > 0:
            abit = a & 1
            bbit = b & 1
            cbit = c & 1
            if cbit == 1:
                if (abit | bbit) != 1:
                    flips += 1
            else:
                if abit == 1:
                    flips += 1
                if bbit == 1:
                    flips += 1
            a >>= 1
            b >>= 1
            c >>= 1
        return flips

a = 2
b = 6
c = 5

sol = Solution()
print(sol.minFlips(a,b,c)) #3