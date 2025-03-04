// 169. Majority Element


/*
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

console.log("majority element", majorityElement([3,3,4]))

function majorityElement (nums) {
    let elem;
    let c=0;

    for (const x of nums) {
        if(c===0){
            elem = x;
            c++;
        }
        else {
            c += (elem === x) ? 1 : -1;
        }
    }
    return elem;
};