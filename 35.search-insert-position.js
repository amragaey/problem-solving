/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (40.47%)
 * Total Accepted:    365.1K
 * Total Submissions: 902.2K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * 
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,3,5,6], 2
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [1,3,5,6], 7
 * Output: 4
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: [1,3,5,6], 0
 * Output: 0
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

  if (!nums.length || target < nums[0]) return 0;

  let i = 0;
  for (; i < nums.length - 1; i++) {
    if (nums[i] == target) return i;
    else if (target > nums[i] && target < nums[i + 1]) {
      return i + 1;
    }
  }

  return (nums[i] == target) ? i : i + 1;

};

// Binary Search Implementation: better time complexity => log(n)
var searchInsert = function (nums, target) {
  let len = nums.length;
  if (!len || target < nums[0]) return 0;
  if (target > nums[len - 1]) return len;

  let start = 0;
  let end = len - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target == nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end + 1;
}
