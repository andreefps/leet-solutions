/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) return '';
  const gcd = (str1len, str2len) => str2len === 0 ?
   str1len : 
   gcd(str2len, str1len % str2len)
  return str1.substring(0, gcd(str1.length, str2.length));
};