---

marp: true

---

# Fundamentals: Functions

---

Functions are a Fundamental building block of JavaScript.

Functions _encapsulate_ a particular task.

---

## Function Parameters and Arguments

---

### A parameter

is a variable in a function or method.

```js
// Example
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

sum(12, 14, 76);
```

---

### An argument

is the value given to a parameter when a function, or method, is called.

```js
// Example
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

sum(12, 14, 76);
```

---

What is the output of this function?

```js
function f() {
  console.log("hello");
}

f("bye");
```

---

⚠️⚠️ Extra arguments are ignored. ⚠️⚠️

---

### Extra arguments vs missing arguments

- Calling a function with extra arguments
  - Never useful
  - Usually an indication of a bug
- Calling a function with fewer arguments
  - Sometimes useful
  - But could also be a mistake

---

## What a function `returns`

```js
// Example
function foodItem() {
  return 'bacon';
}

console.log(foodItem());
```

---

### _Defining_ a function

This is how we have been _defining_ (and declaring) functions up-to-now

```js
function someFunc() {
  // do something...
}
```

---

There are 2 other ways to _define_ a function

```js
const someFunc = function() {
  // do something...
}
```

This will _define_ a function expression.

⚠️ **Function expressions are NOT hoisted.**

---

The third way is an arrow function

```js
const someFunc = () => {
  // do something...
}
```

This is equivalent to the previous way of _defining_ a function.

⚠️ **It is NOT hoisted either.**

---

### Optional Parentheses and Implicit Returns

Arrow functions have a couple tricks up their sleeve:

```js
// This is one way to define an arrow function:
const add5 = (number) => {
  return number + 5;
}

// This is another way:
const add10 = number => number + 10;
```

---

To keep life simpler, I recommend always using parens and the `return` keyword.

Just be aware of the shorter syntax, in case you encounter it in the wild.

---

# Which function when?

Though you can use them interchangeably, you should always prioritize arrow functions whenver possible.

⚠ Older code / libraries / packages may **require** non-arrow functions to work. ⚠

But for most cases, arrow functions are what we want to use.