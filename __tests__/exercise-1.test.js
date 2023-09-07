// We import (require) the function that we want to test.
const firstLetter = require("../workshop/exercise-1");

test("Exercise 1", () => {
  expect(firstLetter("max")).toBe("m");
  expect(firstLetter("")).toBe(undefined);
});

// Run your test by typing yarn test fundamentals-3.1 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
