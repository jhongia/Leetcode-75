'''
435. Non-overlapping Intervals
Solved
Medium
Topics
premium lock icon
Companies
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

 

Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
Example 3:

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

Constraints:

1 <= intervals.length <= 105
intervals[i].length == 2
-5 * 104 <= starti < endi <= 5 * 104
'''

from typing import List
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        count = 0
        second = 0
        change = True
        intervals.sort(key = lambda x: x[1])
        #print("intervals: ", intervals)
        for i in range(len(intervals)):
            if change:
                second = intervals[i][1]
                #print("second: ", second)
            if i+1 < len(intervals) and second > intervals[i+1][0]:
                    #print(intervals[i+1][0])
                    count += 1
                    change = False
            else:
                change = True
        return count

sol = Solution()
intervals = [[0,2],[1,3],[2,4],[3,5],[4,6]]
print(sol.eraseOverlapIntervals(intervals)) # 2