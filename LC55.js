// 55. Jump Game

/*
Input: nums = [2,3,1,1,4]
Output: true 
*/

var canJump = function(nums) {
    let last = nums.length - 1;
    let max = 0;
    let idx = 0;

    while (idx < nums.length) {
        max = Math.max(max, idx+nums[idx]);

        if(max >= last) {
            return true
        }

        if(max <= idx && nums[idx] === 0) {
            return false;
        }

        idx++;
    }
    return false;

};