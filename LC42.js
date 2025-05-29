//42. Trapping Rain Water

/*
Input: height = [4,2,0,3,2,5]
Output: 9
*/


var trap = function(height) {

    /*

    let max1 = 0;
    let left = [height.length];
    for(let i = 0; i < height.length; i++) { 
        if(max1 < height[i]) {
            max1 = height[i];
        }
        left[i] = max1;
    }
        
    let max2 = 0;
    
    let right = [height.length];
    for(let i = height.length-1; i >= 0; i--){
        if(max2 < height[i]) {
            max2 = height[i];
        }
        right[i] = max2;
    }
        
    let trap = 0;
    for(let i = 0; i  < height.length; i++) {
        trap += Math.min(left[i], right[i]) - height[i];
    }
    return trap;                            // done using brute force

    */

    if (!height.length) return 0;

    let n = height.length;
    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);
    let totalWater = 0;

    // Fill leftMax array
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // Fill rightMax array
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // Calculate trapped water
    for (let i = 0; i < n; i++) {
        totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return totalWater;                  // done using DP
};