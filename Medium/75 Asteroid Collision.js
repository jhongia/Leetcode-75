/*
735. Asteroid Collision
Medium
Topics
Companies
Hint
We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 

Constraints:

2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    for(let i = 0; i < asteroids.length; i++){
        let curr = asteroids[i];
        let next = asteroids[i+1];
        if(Math.abs(curr) > Math.abs(next) && curr > 0 && next < 0){
            asteroids.splice(i+1,1);
            i--;
        } else if(Math.abs(curr) < Math.abs(next) && curr > 0 && next < 0){
            asteroids.splice(i,1);
            i-=2;
        } else if(Math.abs(curr) === Math.abs(next) && curr > 0 && next < 0){
            asteroids.splice(i+1,1);
            asteroids.splice(i,1);
            i-=2;
        }
    }

    return asteroids;
};

asteroids = [-2,2,-1,-2];
//asteroids = [-2,-2,1,-2];
//asteroids = [-2,-1,1,2];
//asteroids = [5,10,-5];
// asteroids = [8,-8];
// asteroids = [10,2,-5]

console.log(asteroidCollision());