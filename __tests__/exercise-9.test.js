// We import (require) the function that we want to test.
const uniqueElements = require("../workshop/exercise-9");

test("Exercise 9", () => {
  expect(uniqueElements([0, 1, 2, 3], [1, 3, 4, 5])).toStrictEqual([
    0,
    2,
    4,
    5,
  ]);
  expect(uniqueElements([1, 2, 3], [3, 2, 1])).toStrictEqual([]);
  expect(uniqueElements(2, "bacon")).toStrictEqual(undefined);
  expect(uniqueElements(4, ["apple"])).toStrictEqual(undefined);
  expect(uniqueElements([13], "banana")).toStrictEqual(undefined);
  expect(uniqueElements(42)).toStrictEqual(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
