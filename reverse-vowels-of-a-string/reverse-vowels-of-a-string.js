/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = 'aeiou';
    const arr = [...s];

    for(let i = 0, j = arr.length - 1; i < j; i++, j--) {
        while (!vowels.includes(arr[i].toLowerCase()) && i < j) {
            i++;
        }

        while (!vowels.includes(arr[j].toLowerCase()) && i < j) {
            j--;
        }

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.join('');
};