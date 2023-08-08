/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const Obj = {} // This Object is to maintain nums element and it's index, example - if array is [2,1,7] then Obj = {2:0, 1:1, 7:2}
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i] 
        if(diff in Obj){
            return [Obj[diff], i]
        }
        else{
            Obj[nums[i]] = i
        }
     }
  return []
};
