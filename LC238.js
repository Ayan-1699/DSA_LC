// 238. Product of Array Except Self

/*
nums = [3,2,5,4]
Output: [40,60,24,30]
*/


var productExceptSelf = function(nums) {
    const result = [];

    let prefix = 1;

    for(let i=0; i<nums.length; i++){
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;

    for(let i=nums.length-1; i>=0; i--){
        result[i] *= suffix;
        suffix *= nums[i]
    }
    return result;
};