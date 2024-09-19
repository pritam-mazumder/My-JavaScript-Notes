// To String

let num = 123;
console.log(typeof String(num));

let bool = true;
console.log(typeof bool.toString());

let a = 10;

console.log(typeof toString(a)); // method 1
console.log(typeof a.toString()); // method 2
console.log(typeof String(a)); // method 3
console.log(typeof (a + "")); // method 4: by adding a string, like wtf?

// To Number

let b = "2";

console.log(typeof b); // method 1
console.log(typeof parseInt(b)); // method 1
console.log(typeof Number(b)); // method 2
console.log(typeof +b); // method 3
console.log(typeof Number.parseInt(b)); // method 4
