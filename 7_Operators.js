let a = 10;
let b = 3;


// Arithmetic Operators

console.log('a + b = ', a + b);
console.log('a - b = ', a - b);
console.log('a * b = ', a * b);
console.log('a ** b = ', a ** b);
console.log('a / b = ', a / b); // unlike other programming language like C, js will give accurate result
console.log('a % b = ', a % b);
console.log('a++ = ', a++);
console.log(a)
console.log('++a = ', ++a);
console.log(a)
console.log('b-- = ', b--);
console.log(b)
console.log('--a = ', --a);
console.log(b)


// Assignment Operators

let x = 4;

console.log('x += 2 = ', x += 2)   // same as: x = x + 2
console.log('x -= 2 = ', x -= 2)   // same as: x = x - 2
console.log('x *= 2 = ', x *= 2)   // same as: x = x * 2
console.log('x /= 2 = ', x /= 2)   // same as: x = x / 2
console.log('x %= 2 = ', x %= 2)   // same as: x = x % 2
console.log('x **= 2 = ', x **= 2)   // same as: x = x ** 2


// Comparison Operators

let i = 4;
let j = 2;
let k = '4';

console.log('i == j = ', i == j);
console.log('i != j = ', i != j);
console.log('i === j = ', i === j);
console.log('i !== j = ', i !== j);

console.log('i == k = ', i == k);
console.log('i != k = ', i != k);
console.log('i === k = ', i === k);
console.log('i !== k = ', i !== k);

console.log('i > j', i > j);
console.log('i >= j', i >= j);
console.log('i < j', i < j);
console.log('i <= j', i <= j);


// Logical Operators

// logical and
console.log(1 > 2 && 2 < 1);
console.log(1 > 2 && 2 > 1);
console.log(1 < 2 && 2 < 1);
console.log(1 < 2 && 2 > 1);

// logical or
console.log(1 > 2 || 2 < 1);
console.log(1 > 2 || 2 > 1);
console.log(1 < 2 || 2 < 1);
console.log(1 < 2 || 2 > 1);

// logical not
console.log(!true);
console.log(!false);


// Ternary Operator

/*
    The ternary operator in JavaScript is a conditional operator that allows you to write concise conditional expressions.
    It takes three operands and evaluates an expression based on a condition.
*/

let age = 20;
let ageCategory = age>=18 ? 'adult' : 'minor';

console.log(ageCategory);
