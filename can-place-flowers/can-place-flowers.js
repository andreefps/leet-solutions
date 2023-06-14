/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let validPositions = 0
  flowerbed.forEach((p, i) => {
    if (p === 0 &&
      flowerbed[i <= 0 ? 0 : i - 1] === 0 &&
      flowerbed[i === flowerbed.length -1 ? flowerbed.length -1 : i + 1] === 0) {
      flowerbed[i] = 1
      validPositions++
    }
  })
  return validPositions >= n
};