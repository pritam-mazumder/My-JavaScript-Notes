/*
    Truthy

    A truthy value is a value that is considered true when encountered in a Boolean context.
    All values are truthy unless they are defined as falsy.
    That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.

    Falsy

    A falsy value is a value that is considered false when encountered in a Boolean context.
    e.g., false, 0, -0, 0n, "", null, undefined, and NaN.
*/

// Truthy values
console.log(1 === 1);          // true (numbers)
console.log('Hello' !== '');  // true (non-empty strings)
console.log([]);              // true (non-empty arrays)
console.log({});              // true (non-empty objects)
console.log(true);            // true (boolean true)

// Falsy values
console.log(0 === '');         // false (empty string)
console.log(undefined);        // false (undefined)
console.log(null);             // false (null)
console.log(false);            // false (boolean false)
console.log(NaN);              // false (Not-a-Number)
