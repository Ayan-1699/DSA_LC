// 12. Integer to Roman

/*
num = 294
Output: "CCXCIV"
*/

var intToRoman = function(num) {
    const val = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let roman = "";
    
    for (let i = 0; i < val.length; i++) {
        while (num >= val[i].value) {
            roman += val[i].symbol; // Append the corresponding Roman numeral
            num -= val[i].value; // Subtract its value from num
        }
    }

    return roman;
};