// 28. Find the Index of the First Occurrence in a String

/*
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
*/

var strStr = function(haystack, needle) {

    // return haystack.indexOf(needle)       // using inbuilt function of js

    let i = 0

    while (i < haystack.length) {
        if (haystack[i] === needle[0]) {
            const substring = haystack.substring(i, i + needle.length)
            if (substring === needle) {
                return i
            }
        }
        i++;
    }

    return -1
};
