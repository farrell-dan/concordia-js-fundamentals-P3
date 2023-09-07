// We import (require) the function that we want to test.
const lastCharacter = require("../workshop/exercise-2");

test("Exercise 2", () => {
  expect(lastCharacter("max")).toBe("x");
  expect(lastCharacter("bacon")).toBe("n");
  expect(lastCharacter(23232)).toBe(undefined);
  expect(lastCharacter("")).toBe(undefined);
  expect(lastCharacter(null)).toBe(undefined);
});

// Run your test by typing yarn test fundamentals-3.2 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
