// 27. Remove Element

/*
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: nums = [0,1,4,0,3]
*/

console.log("removing Element", removeElement([0,1,2,2,3,0,4,2], 2))

function removeElement(nums, val) {
    let newNums = []
    let index = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            newNums[index] = nums[i]
            index++; 
        }
    }
    return newNums;
};