// We import (require) the function that we want to test.
const sum = require("../workshop/exercise-3");

test("Exercise 3", () => {
  expect(sum(3, 4)).toBe(7);
  expect(sum("bacon", 4)).toBe(undefined);
  expect(sum()).toBe(undefined);
  expect(sum(3, "bacon")).toBe(undefined);
  expect(sum(13, 14)).toBe(27);
});

// Run your test by typing yarn test fundamentals-3.3 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
