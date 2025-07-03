'''
994. Rotting Oranges
Medium
Topics
premium lock icon
Companies
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

Example 1:


Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
'''

from typing import List
from collections import defaultdict
from collections import deque
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        fresh = 0
        rotten = []
        minutes = 0
        rows, cols = len(grid), len(grid[0])
        for row in range(rows):
            for col in range(cols):
                if(grid[row][col] == 1):
                    fresh += 1
                elif(grid[row][col] == 2):
                    rotten.append((row,col))
        while(rotten and fresh > 0):
            minutes += 1
            curr = []
            for r,c in rotten:
                check = [(r+1,c), (r-1,c), (r,c+1), (r,c-1)]
                for i,j in check:
                    if i >= 0 and j >= 0 and i < rows and j < cols and grid[i][j] == 1:
                        grid[i][j] = 2
                        fresh -= 1
                        curr.append((i,j))
                        if(fresh == 0):
                            return minutes
            rotten = curr
        if(fresh == 0):
            return minutes
        else:
            return -1
    
grid = [[2,1,1],[1,1,0],[0,1,1]]

Run = Solution()
print(Run.orangesRotting(grid)) #4
        