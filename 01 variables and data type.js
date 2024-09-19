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

/*
    Primitive

     A data that is not an object and has no methods or properties.
     There are 7 primitive data types:

      - null        represents null i.e. no value at all
      - number      represents numeric values e.g. 100
      - string      represents sequence of characters e.g. "hello"
      - symbol
      - boolean     represents boolean value either false or true
      - bigint
      - undefined   represents undefined value
      - object
*/

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



/*
    Object (Non-data type object)

    JavaScript's objects are containers for key:values pairs called properties.

    The object data type can contain:

     - object       represents instance through which we can access members
     - array        represents group of similar values
     - date         represents regular expression
*/

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