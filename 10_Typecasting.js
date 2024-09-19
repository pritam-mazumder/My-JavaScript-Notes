let a = 10;
// console.log(typeof a);
console.log(typeof toString(a)); // method 1
console.log(typeof a.toString()); // method 2
console.log(typeof String(a)); // method 3
console.log(typeof (a + "")); // method 4: by adding a string, like wtf?

let b = "2";

console.log(typeof b); // method 1
console.log(typeof parseInt(b)); // method 2
console.log(typeof Number(b)); // method 3
console.log(typeof +b); // method 4
console.log(typeof Number.parseInt(b)); // method 5
