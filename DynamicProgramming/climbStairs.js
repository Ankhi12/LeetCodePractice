/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 1){
        return 1
    }
    let prev = 1
    let cur = 1
    for(let i = 2; i <= n; i++){
        const temp = cur
        cur = prev + cur
        prev = temp
    }
    return cur
};
