// 80. Remove Duplicates from Sorted Array II

/*
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
*/

console.log("removing duplicate to 2 times", removeDuplicates([1,1,1,2,2]))

function removeDuplicates(nums) {
    let k = 1;
    let c = 1;
    for (let i=1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
            c = 1;
            nums[k++] = nums[i];
        }
        else if(nums[i] === nums[i-1] && c<2){
            c++;
            nums[k++] = nums[i]
        }
    }
    return k;
};