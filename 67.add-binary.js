/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (38.08%)
 * Total Accepted:    279.8K
 * Total Submissions: 734.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

    if (!a || !b) {
        return a ? a : b;
    }

    let carry = 0;
    let result = "";
    let j = b.length - 1;
    let i = a.length - 1;

    while (i >= 0 || j >= 0) {
        let n1 = i < 0 ? 0 : +a[i];
        let n2 = j < 0 ? 0 : +b[j];
        sum = n1 + n2 + carry;
        if (sum >= 2) {
            carry = 1;
            result = sum % 2 + result;
        } else {
            carry = 0;
            result = sum + result;
        }
        i--; j--;
    }

    return !carry ? result : carry + result;
};

