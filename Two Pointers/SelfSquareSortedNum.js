/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const res = new Array(nums.length).fill(0)
    let l = 0
    let r = nums.length - 1
    while(l <=r){
        const left = Math.abs(nums[l])
        const right = Math.abs(nums[r])
        if(left > right){
            res[r-l] = left * left
            l += 1
        }
        else{
            res[r-l] = right * right
            r -= 1
        }
    }
    return res
};
