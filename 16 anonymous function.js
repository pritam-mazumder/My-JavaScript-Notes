/*
    An anonymous function is a function that does not have a name. 
    It can be defined as a function expression and is often used in situations where you need to pass a function as an argument, return a function, or create an IIFE (Immediately Invoked Function Expression). 
*/

// Example 1

setTimeout(function () {
  console.log("This message is displayed after 2 seconds!");
}, 2000);

// Example 2

const greet = function (name) {
  console.log("Hello", name);
};

greet("Sova");
