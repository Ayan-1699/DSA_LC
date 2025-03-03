// 88. Merge Sorted Array

/* 
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
*/

console.log("Merged sorted arrays", merge([3, 5, 6, 8, 0, 0, 0], 4, [1, 4, 7], 3));

function merge (nums1, m, nums2, n) {
    if (m==0 && n==0) {
        return nums1;
    }

    if(m==0) {
        return nums2;
    }

    if (n==0) {
        return nums1;
    }
    
    iptr = m-1;
    jptr = n-1;
    last = m+n-1;
    while(jptr>=0){
        if(iptr>=0 && nums1[iptr]>nums2[jptr]){
            nums1[last] = nums1[iptr];
            iptr--
        }
        else {
            nums1[last] = nums2[jptr]
            jptr--
        }
        last--;
    }
    return nums1;
};