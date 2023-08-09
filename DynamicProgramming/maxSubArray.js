/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curMax = 0
    let maxTn = -Infinity
    for(let i = 0; i < nums.length; i++){
        curMax = Math.max(nums[i], curMax+nums[i])
        maxTn = Math.max(maxTn, curMax)
    }
    return maxTn
};
