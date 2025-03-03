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

// done from chatgpt   O(m+n)

function merge(nums1, m, nums2, n) {
    let temp = [];
    let i = 0, j = 0, k = 0;
    
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            temp[k++] = nums1[i++];
        } else {
            temp[k++] = nums2[j++];
        }
    }
    
    while (i < m) {
        temp[k++] = nums1[i++];
    }
    
    while (j < n) {
        temp[k++] = nums2[j++];
    }
    
    for (let x = 0; x < m + n; x++) {
        nums1[x] = temp[x];
    }

    return nums1;
}