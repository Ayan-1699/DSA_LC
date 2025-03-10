// 274. H-Index

/*
Input: citations = [3,0,6,1,5]
Output: 3
*/

var hIndex = function(citations) {
    citations.sort((a,b) => b-a);

    let i = 0;
    while(citations[i] > i) 
    {
        i++
    }
    return i;
};


//Overall Complexity: O(nlogn)