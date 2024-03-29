/**
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 
 * 说明:
 *     初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 *     你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 示例:
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 输出: [1,2,2,3,5,6]
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/merge-sorted-array
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n == 0) return;
    if(m == 0) {
        for(let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
        return;
    }
    let i = 0;
    let j = 0;
    while(j < n) {
        if(i == m) {
            for(let x = i; j < n; x++, j++){
                nums1[x] = nums2[j];
            }
            return;
        }else if(nums1[i] < nums2[j]) {
            i++;
            continue;
        } else {
            nums1.splice(i, 0, nums2[j]);
            nums1.pop();
            m++;
            i++;
            j++;
            continue;
        }
    }
    return;
};