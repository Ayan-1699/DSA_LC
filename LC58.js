// 58. Length of Last Word

/*
Input: s = "luffy is still joyboy"
Output: 6
*/

var lengthOfLastWord = function(s) {
    let len = 0;
    for(let i = s.length - 1; i>=0; i--){
        if(len >= 1 && s[i] === ' '){
            return len;
        }
        if(s[i] !== ' '){
            len++
        }
    }
    return len;
};