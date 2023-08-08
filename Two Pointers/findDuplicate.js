/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const Obj = {}
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in Obj){
            return nums[i]
        }
        Obj[nums[i]] = i
    }
};
