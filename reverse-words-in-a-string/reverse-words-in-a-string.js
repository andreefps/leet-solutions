/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const stringsArray = s.trim().split(' ')
    let reversedString = []
    for (let i = stringsArray.length; i >= 0; i--) {
        if (stringsArray.length !== i) {
            reversedString[stringsArray.length - i] = stringsArray[i]
        }
    }
    return reversedString.toString()
    .replaceAll(',', ' ')
    .replaceAll(/\s{2,}/g, ' ')
    .trim()
};