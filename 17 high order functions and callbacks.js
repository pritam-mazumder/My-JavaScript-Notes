/*

A higher-order function is a function that either:
    - Takes one or more functions as arguments.
    - Returns a function as its result.

Higher-order functions are useful for abstracting or enhancing behavior. 
Common examples include methods like .map(), .filter(), and .reduce().

*/

// Example 1

function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

function showResult(result) {
  console.log(result);
}

add(2, 3, function (value) {
    console.log(value);
    
});
