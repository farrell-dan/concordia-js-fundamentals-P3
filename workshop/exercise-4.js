// Exercise 4
// ---------------
// Write an arrow function that expects an array of numbers as input (e.g. [1, 2, 4, 12])
// and returns the sum of the numbers.
//
// - If the array contains any values that are not a number, the function should return undefined.
// - If the array is empty, the function should return undefined.

const sum = (arr) => {
  // your code here
  let total = 0;
  if (arr.length === 0 || !arr.every((number) => typeof number === "number")){
    return undefined;
  } else arr.forEach((number) => {
    total += number;
  });
    return total
};
// We need to export the function in order for our unit test to have access to it.
module.exports = sum;
