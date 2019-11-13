/**
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/remove-element
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//     nums.sort((a, b) => a - b);
//     if (val > nums[nums.length - 1] || val < nums[0]) {
//         return nums.length;
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (val > nums[i]) {
//             if (i < nums.length / 2) {
//                 if (val > nums[nums.length - 1 - i]) {
//                     i = nums.length - 1 - i;
//                 } else if (val == nums[nums.length - 1 - i]) {
//                     nums.splice(nums.length - i - 1, 1);
//                 } else {
//                     continue;
//                 }
//             } else {
//                 continue;
//             }
//         } else if (val == nums[i]) {
//             nums.splice(i, 1);
//             i--;
//         } else {
//             continue;
//         }
//     }
//     return nums.length;
// };
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(val == nums[i]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};