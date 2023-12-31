// Exercise 8
// ---------------
// Write an arrow function accepts an indeterminate amount of numbers as arguments and returns the sum of the squares of all the numbers.
//
// - If any element is not a number, skip it.
// - If no arguments are passed, return `undefined`

const addNumbers = (...nums) => {
  // Insert missing solution please
if (nums.length === 0){
  return undefined;
}

return nums.filter((num) => typeof num === "number").map((num) => num ** 2).reduce((sum, num) => sum + num, 0);


};

// We need to export the function in order for our unit test to have access to it.
module.exports = addNumbers;
