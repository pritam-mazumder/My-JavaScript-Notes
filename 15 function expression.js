/*
    Function expression is a way to define a function and assign it to a variable. 
    This contrasts with a function declaration, where the function is defined without being assigned to a variable.
*/

// Example 1

const sum = function (x, y) {
  return x + y;
};

console.log(sum(2, 3));

const sub = (x, y) => x - y;

console.log(sub(6, 2));



// Example 2

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = function (num) {
  return num % 2 === 0;
};

const isOdd = function (num) {
  return num % 2 !== 0;
};

console.log(arr.filter(isEven));
console.log(arr.filter(isOdd));
