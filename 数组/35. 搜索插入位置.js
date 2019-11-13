/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let length = nums.length;
    if (target > nums[length - 1]) {
        return length;
    }
    if (target == nums[length - 1]) {
        return length - 1;
    }
    for (let i = 0; i < length; i++) {
        if (target > nums[i]) {
            if (target > nums[length - i - 1]) {
                i = length - i - 1;
                continue;
            } else if (target == nums[length - i - 1]) {
                return length - i - 1;
            } else {
                continue;
            }
        } else {
            return i;
        }
    }
};