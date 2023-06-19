/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    const result = [];
    for (let i = 0; i < candies.length; i++) {
        (candies[i] + extraCandies >= maxCandies) ?
            result.push(true)
            :
            result.push(false);

    }
    return result;
};