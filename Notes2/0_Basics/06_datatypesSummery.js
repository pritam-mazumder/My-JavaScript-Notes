// 1. Primitive Data Types: These are immutable and are passed by value(copies of the value are created when assigned to another variable).

// Number
let age = 30;
let price = 12.99;

// String
let name = "Alice";
let message = 'Hello, world!';

// Boolean
let isOnline = true;
let isAvailable = false;

// Undefined
let x; // undefined` (because `x` has not been assigned any value).

// Null
let user = null; // (indicating that`user` has no value).

// Symbol(Introduced in ECMAScript 6)
// Represents a unique and immutable value that can be used as a key for object properties.
let symbol = Symbol('description');

// BigInt(Introduced in ECMAScript 2020)
let bigNumber = 1234567890123456789012345678901234567890n;





// 2. Non - Primitive(Reference) Data Types: These are objects that store references to values in memory, rather than the actual value itself. When you assign one variable to another, both variables refer to the same object.

// Object
let person = {
    name: "Alice",
    age: 30,
    greet: function () { console.log("Hello!"); }
};

// Array
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry"];

// Function
function greet(name) {
    console.log("Hello, " + name);
}

// Date(Object)
let today = new Date();

// RegExp(Regular Expression)
let regex = /ab+c/;
