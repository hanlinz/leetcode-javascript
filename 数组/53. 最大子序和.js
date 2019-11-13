/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 思路
 * 这道题用动态规划的思路并不难解决，比较难的是后文提出的用分治法求解，但由于其不是最优解法，所以先不列出来
 * 动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans
 * 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
 * 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
 * 每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果
 * 时间复杂度：O(n)O(n)
 * 作者：guanpengchn
 * 链接：https://leetcode-cn.com/problems/maximum-subarray/solution/hua-jie-suan-fa-53-zui-da-zi-xu-he-by-guanpengchn/
 * 来源：力扣（LeetCode）
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * 
 * 
 * ans用来存储已经找到的当前最大和
 * sum为当前和，如果sum > 0 则表示是有效的和  可以与下一个数字加法
 * 如果 sum <= 0 则与下一个数字相加是负增长  为无效和
 * 此时直接抛弃当前计算得出的sum值  重新计算
 * 不用担心会遗漏历史的最大和  因为已经用ans存储了
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = 0;
    nums.forEach(item => {
        // if(sum + item > item)
        if(sum > 0) {
            sum += item;
        } else {
            sum = item;
        }
        ans = Math.max(ans, sum)
    })
    return ans;
};