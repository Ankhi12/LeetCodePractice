/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0){
        return 0
    }
    let prev = 0
    let prev1 = 0
    for(let i = 0; i < nums.length; i++){
        const temp = prev
        prev = Math.max(prev1+nums[i], prev)
        prev1 = temp
    }
    return prev
};
