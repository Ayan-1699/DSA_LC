// 121. Best Time to Buy and Sell Stock

/*
Input: prices = [7,1,5,3,6,4]
Output: 5
*/

var maxProfit = function(prices) {
    if (prices.length < 1 || prices.length > 10**5) return 0;
    let maxP = 0;
    // let left = 0;
    // let right = 1;

    // while(right < prices.length) {             // done using double pointer
    //     if(prices[right] > prices[left]){
    //         profit = prices[right] - prices[left];
    //         maxP = Math.max(profit, maxP);
    //     }
    //     else{
    //         left = right;
    //     }
    //     right++;
    // }

    let low = prices[0];
    for(let i=1; i<prices.length; i++){
        if(low > prices[i]){
            low = prices[i]
        }
        else {
           maxP = Math.max(maxP, (prices[i] - low)); 
        }
    }
    return maxP;
};