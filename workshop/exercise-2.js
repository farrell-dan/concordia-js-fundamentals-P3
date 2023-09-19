// Exercise 2
// ---------------
// Write an arrow function that returns the LAST character
// of the string that is passed to it.
//
// - If it's an empty string, return `undefined`
// - If it's not a string, return `undefined`

const lastCharacter = (str) => {
  // Your code here
  if ( str === ""){
    return undefined
  } else if ( typeof str !== "string"){
    return undefined
  } else {
    return str.charAt(str.length-1)
  }
}

// We need to export the function in order for our unit test to have access to it.
module.exports = lastCharacter;
