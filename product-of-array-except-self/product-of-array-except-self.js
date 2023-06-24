/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const result = new Array(nums.length).fill(1);
  let productBefore = 1;
  let productAfter = 1;
 
  for (let i = 0; i < nums.length; i++) {
    result[i] *= productBefore;
    productBefore *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= productAfter;
    productAfter *= nums[i];
  }

  return result;
};