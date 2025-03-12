// 135. Candy

/*
Input: ratings = [1,0,2]
Output: 5
*/


var candy = function(ratings) {
    let arr = new Array(ratings.length).fill(1);
    for (let i=1; i<ratings.length; i++){
        if(ratings[i]>ratings[i-1]){
            arr[i] = arr[i-1] + 1;
        }
    }

    for(let i=ratings.length-2; i>=0; i--){
        if(ratings[i]>ratings[i+1]){
            if(arr[i] <= arr[i+1]){
                arr[i] = arr[i+1] + 1;
            }
        }
    }
    let candies = 0;
    for(let i=0; i<arr.length; i++){
        candies += arr[i]
    }

    return candies;
};