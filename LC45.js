// 45. Jump Game II

/*
Input: nums = [2,3,1,1,4]
Output: 2
*/


var jump = function(nums) {
    let minJump = 0;
    let last = nums.length - 1;

    if(last === 0) {
        return minJump;
    }

    while (last > 0){
        last = jumps(nums, last);
        minJump++;
    }
    return minJump;
};

function jumps(nums, n) {
    let m = 0;
    for( let i=n-1; i>=0; i--){
        if(i + nums[i] >= n) {
            m=i;
        }
    }
 return m;
} 