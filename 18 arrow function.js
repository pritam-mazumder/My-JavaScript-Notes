/*

    Arrow functions

    - An arrow function expression has a shorter syntax compared to function expressions 
    - Does not have its own this, arguments, super, or new.target. 
    - Arrow functions are always anonymous.

 */

// Example 1
let myFunction = (a, b) => a * b;

console.log(myFunction(2, 3));

// Example 2

let hello = () => "Hello World!";

console.log(hello);

// Example 3

let arr = [1, 2, 3, 4, 5];

let doubleArr = arr.map((arr) => arr * 2);

console.log(doubleArr);
