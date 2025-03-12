// 134. Gas Station

/*
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
*/

var canCompleteCircuit = function(gas, cost) {
    let start = 0;
    let totalGas = 0;
    let currentGas = 0;

    for (let i = 0; i < gas.length; i++) {
        const fuelGain = gas[i] - cost[i];
        totalGas += fuelGain;
        currentGas += fuelGain;

        if (currentGas < 0) {
            currentGas = 0;
            start = i + 1;
        }
    }

    return totalGas < 0 ? -1 : start;
};