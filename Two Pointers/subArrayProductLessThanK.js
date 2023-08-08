/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let subarraynum = 0
    for(let i = 0; i < nums.length; i++){
        let multiply = 1
        for(let j = i; j < nums.length; j++){
            multiply *= nums[j]
            if(multiply < k){
                subarraynum += 1
            }
            else{
                break
            }
        }
    }
    return subarraynum
};
