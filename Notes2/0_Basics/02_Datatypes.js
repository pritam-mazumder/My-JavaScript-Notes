"use strict" // treat all JS code as newer version

// alert(2 + 2) // we are using using nodejs, not browser



//  1. Primitive Data Types
// Primitive data types are immutable, meaning their values cannot be changed after they are created. These include:

// Number: Represents both integer and floating-point numbers.
let x = 10; // integer
let y = 3.14; // floating-point number
console.log(typeof x)
console.log(typeof y)

// String: Represents a sequence of characters.
let name = "Alice";
let greeting = 'Hello, World!';
console.log(typeof name)
console.log(typeof greeting)


// Boolean: Represents one of two values: `true` or `false`.
let isActive = true;
let isComplete = false;
console.log(typeof isActive)
console.log(typeof isActive)



// Undefined: A variable that has been declared but not assigned a value is `undefined`.
let a;
console.log(a); // undefined
console.log(typeof a)


// Null: Represents the intentional absence of any object value.
let person = null;
console.log(typeof person)


// Symbol (ES6): Represents a unique, immutable value often used as object property keys.
const uniqueSymbol = Symbol('description');
console.log(typeof uniqueSymbol)

// BigInt (ES11/ES2020): Used to represent integers larger than the `Number` type can handle (larger than `2^53 - 1`).
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber)



//  2. Non-Primitive (Reference) Data Types
// Non-primitive data types are mutable, meaning their values can be changed after creation. These include:

// Object: A collection of key-value pairs. Keys are always strings (or symbols), and values can be of any data type.
let student = {
  name: "Alice",
  age: 25,
  isActive: true
};
console.table(student)
console.log(typeof student)

// Array: A list-like collection of elements. Arrays are a type of object but with numeric indices.
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry"];

console.table(typeof numbers)
console.table(typeof fruits)


// Function: Functions are also objects in JavaScript. They are used to define reusable code blocks.
function greet(name) {
  return "Hello, " + name;
}

console.log(typeof greet)
console.log(greet("sova"))


// Key Differences Between Primitive and Reference Types:
// Immutability: Primitive types are immutable, meaning their values cannot be changed. Reference types are mutable, meaning their values can be changed.
// Assignment: When a primitive value is assigned to a new variable, a copy of the value is made. In contrast, when a reference type is assigned to a new variable, both variables point to the same object in memory.
