/*
JavaScript Variables can be declared in 4 ways:

    1. Automatically
    2. var
    3. let
    4. const

*/

// Automatically
x = 5;
y = 6;
z = x + y;
console.log(z);

// var
var x = 5;
var y = 6;
var z = x + y;
console.log(z);

// let
let a = 5;
let b = 6;
let c = a + b;
console.log(c);

// PRIMITIVE  DATA TYPES

// Null
let m = null;
console.log(m);

// Numbers:
let length = 16;
let weight = 7.5;
console.log(length);
console.log(weight);

// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log(color);
console.log(lastName);

// Symbols:
let sym = Symbol("key");
console.log(sym);

// BigInt
let largeInt = BigInt("567");
console.log(largeInt);

// Booleans
let i = true;
let j = false;
console.log(i);
console.log(j);

// Undefined
let k = undefined;
console.log(k);

// NON-PRIMITIVE DATA TYPES

// Object:
const person = { firstName: "John", lastName: "Doe" };
console.log(person);

// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

// Date object:
const date = new Date("2022-03-25");
console.log(date);

console.log(typeof m);
console.log(typeof length);
console.log(typeof weight);
console.log(typeof color);
console.log(typeof lastName);
console.log(typeof sym);
console.log(typeof largeInt);
console.log(typeof i);
console.log(typeof j);
console.log(typeof k);
console.log(typeof person);
console.log(typeof cars);
console.log(typeof date);