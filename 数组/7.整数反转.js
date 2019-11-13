/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 注意:
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/reverse-integer
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x === 0) return 0;
    let str = x.toString();
    let head = '';
    if(str.charAt(0) == '-'){
        head = '-';
        str = str.slice(1)
    }
    let arr = str.split('');
    arr.reverse();
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == '0'){
            arr.splice(i, 1);
            i--;
        } else {
            break;
        }
    }
    str = arr.join('');
    let num = parseInt(head + str);
    let max = 2147483647;
    let min = -2147483648
    if( num > max || num < min) {
        num = 0
    }
    return num;
};