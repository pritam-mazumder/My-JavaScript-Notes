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

let a = null;
let b = 234;
let c = true;
let d = BigInt(492) + BigInt(8);
let e = 'js';
let f = Symbol('java script');
let g = undefined;
let h;

console.log(a, b, c, d, e, f, g);

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);
console.log(typeof d, d);
console.log(typeof e, e);
console.log(typeof f, f);
console.log(typeof g, g);
console.log(typeof h, h);


/*
    Object (Non-data type object)

    JavaScript's objects are containers for key:values pairs called properties.

    The object data type can contain:

     - object       represents instance through which we can access members
     - array        represents group of similar values
     - date         represents regular expression
*/

const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};
console.log(car["type"]);