'''
1268. Search Suggestions System
Solved
Medium
Topics
premium lock icon
Companies
Hint
You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of searchWord is typed.

 

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Explanation: The only word "havana" will be always suggested while typing the search word.
 

Constraints:

1 <= products.length <= 1000
1 <= products[i].length <= 3000
1 <= sum(products[i].length) <= 2 * 104
All the strings of products are unique.
products[i] consists of lowercase English letters.
1 <= searchWord.length <= 1000
searchWord consists of lowercase English letters.
'''

from typing import List
class TrieNode:
    def __init__(self):
        self.children = {}
        self.products = [] 

class Solution:

    def __init__(self):
        self.root = TrieNode()
    
    def add(self, word):
        curr = self.root
        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()
            curr = curr.children[char]
            if len(curr.products) < 3:
                curr.products.append(word)
        return

    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        output = [[] for char in searchWord]
        products.sort()
        for word in products:
            self.add(word)
        curr = self.root
        for i, char in enumerate(searchWord):
            if char not in curr.children:
                break
            curr = curr.children[char]
            output[i] = curr.products
        return output

sol = Solution()
products = ["mobile","mouse","moneypot","monitor","mousepad"]
searchWord = "mouse"

print(sol.suggestedProducts(products, searchWord)) 
#[["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],
# ["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]