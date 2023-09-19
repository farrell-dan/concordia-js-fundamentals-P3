// Exercise 6
// ---------------
// Write an arrow function accepts an array of values and returns a new array of values converted to strings.

const convertToString = (arr) => {
  // Insert missing solution please
  let arr2 = arr.map((value) => String(value));
return arr2;
};

// We need to export the function in order for our unit test to have access to it.
module.exports = convertToString;
