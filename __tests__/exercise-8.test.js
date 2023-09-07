// We import (require) the function that we want to test.
const addNumbers = require("../workshop/exercise-8");

test("Exercise 8", () => {
  expect(addNumbers(1, 2, 3, 4, 5)).toBe(55);
  expect(addNumbers(1, "bacon", 3, 4, 5)).toBe(51);
  expect(addNumbers()).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
