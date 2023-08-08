/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []
    nums.sort((a,b)=>a-b)
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            break
        }
        if(i > 0 && nums[i]==nums[i-1]){
            continue
        }
        let l = i+ 1
        let r = nums.length - 1
        while(l < r){
            const threeSum = nums[i]+nums[l] + nums[r]
            if(threeSum > 0){
                r -=1
            }
            else if(threeSum < 0){
                l += 1
            }
            else{
                res.push([nums[i], nums[l], nums[r]])   
                l += 1
                r -= 1
                while(nums[l]==nums[l-1] && l < r){
                    l += 1
                }         
                }
        }
    }
    return res
};
