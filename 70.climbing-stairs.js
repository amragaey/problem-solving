/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (43.45%)
 * Total Accepted:    363.4K
 * Total Submissions: 834.2K
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */

function fib(x) {
    if (x == 0 || x == 1) return x == 0 ? 0 : 1;
    let pp = 0;
    let p = 1;
    let curr;
    for (let i = 2; i <= x; i++) {
        curr = pp + p;
        pp = p
        p = curr;
    }
    return curr;
}
var climbStairs = function (n) {
    return fib(n + 1);
};

