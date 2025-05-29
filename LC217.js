// 217. Contains Duplicate

/*
Input: nums = [1,2,3,1]
Output: true
*/


var containsDuplicate = function(nums) {
    let a = new Set();
    for(let i=0; i<nums.length; i++){
        if(a.has(nums[i])){
            return true;
        }
        a.add(nums[i]);
    }
    return false;
};