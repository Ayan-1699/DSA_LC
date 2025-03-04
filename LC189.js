// 189. Rotate Array

/*
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
*/


console.log("rotated array", rotate([1,2,3,4,5,6,7], 3));

 function rotate(nums, k) {

    if(nums.length === 0)
    {
        return;
    }

    if(nums.length === 1 || k===0) {
        return nums;
    }  

    let left = [];
    let right = []; 

    for (let i=0; i<=k; i++){
        left[i] = nums[i]
    }
    for (let i=k+1; i<nums.length; i++){
        right[right.length] = nums[i]
    }

    return [...right, ...left]
};



// done using gpt as we have to modify original array


var rotate = function(nums, k) {

    k= k % nums.length;
    function reverseArr(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap elements
            start++;
            end--;
        }
    }

    reverseArr(0, nums.length-1);
    reverseArr(0, k-1);
    reverseArr(k, nums.length-1);
}