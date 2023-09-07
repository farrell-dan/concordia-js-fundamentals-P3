// We import (require) the function that we want to test.
const convertToString = require("../workshop/exercise-6");

test("Exercise 6", () => {
  expect(convertToString([1, 2, 3, 4, 5])).toStrictEqual([
    "1",
    "2",
    "3",
    "4",
    "5",
  ]);
  expect(convertToString([111, 222])).toStrictEqual(["111", "222"]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
