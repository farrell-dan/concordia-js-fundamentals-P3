// We import (require) the function that we want to test.
const getLetterAtIndex = require("../workshop/exercise-5");

test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  expect(getLetterAtIndex("morty", 4)).toBe("y");
  expect(getLetterAtIndex("bacon", 10)).toBe(undefined);
  expect(getLetterAtIndex(["bacon"], 0)).toBe(undefined);
  expect(getLetterAtIndex(123456, 0)).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
