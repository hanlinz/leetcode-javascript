/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 输入: 5
 * 输出:
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/pascals-triangle/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 * @param {number} numRows
 * @return {number[][]} 
 */
var generate = function(numRows) {
    let arr = new Array(numRows);
    if(numRows == 0) return arr;
    if(numRows == 1) return [[1]];
    if(numRows == 2) return [[1], [1, 1]];
    if(numRows == 3) return [[1], [1, 1], [1, 2, 1]];
    arr[0] = [1];
    arr[1] = [1, 1];
    arr[2] = [1, 2, 1];
    for(let i = 3; i < arr.length; i++) {
        arr[i] = new Array(i + 1);
        arr[i][0] = 1;
        arr[i][arr[i].length - 1] = 1;
        for(let j = 1; j < arr[i].length - 1; j++) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
    }
    return arr;
};