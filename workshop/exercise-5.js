// Exercise 5
// ---------------
// Write an arrow function that returns the character at the specified position in the
// string.

// - If str is not a string, return undefined.
// - If there is no character at the provided index, return undefined.

const getLetterAtIndex = (str, index) => {
  // Your code here
  if ( index >= str.length || typeof str !== "string") {
    return undefined
  } 
    return str.charAt(index)
  }


// We need to export the function in order for our unit test to have access to it.
module.exports = getLetterAtIndex;
