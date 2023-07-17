// # Create function:
// remember, functions are just object,
// which means they can be variables and passed onto other functions

// method 1 - function decleartion.
function sayHi(message) {
  console.log("Said..." + message);
  return "Said..." + message;
}

// hoist: notice that a function will always be hoisted,
// i.e. it will always appear at the top of the file when
// executed -> you can define it anywhere in the code.

// method 2 - function expression
const sayHi2 = function (message) {
  console.log("Said..." + message);
  return "Said..." + message;
};
// this method doesn't support hoist, thus it wont be defined
// until this line is executed. Thus any line above this line
// wont be able to reference this function.

// method 1 vs. method 2 general recommend:
// function declearation for global code
// function expression for local code

// annoymous function
const arr = [];
const anon = arr.map(function (val) {
  return val * 2;
});

// HOF = higher order function, a function that takes a function as an argument
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function math(x, y, operator) {
  return operator(x, y);
}

console.log(math(3, 2, add)); // 5
console.log(math(3, 2, subtract)); // 1

function functionWrapper(callback) {
  callback("Called by wrapper");
}

functionWrapper(sayHi);
functionWrapper((m) => console.log(m));

// another way of using HOF is to use it create a
// new function, which you can use anywhere.
function funCreator() {
  return function (message) {
    console.log("Said..." + message);
    return "Said..." + message;
  };
}

const fn = funCreator();
fn("Hi mom!");
