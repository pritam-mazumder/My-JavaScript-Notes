// 1. Write a program to print the marks of a student in an object using for loop.
// marks = { harry: 98, rohan: 70, aakash: 7 };

marks = {
  harry: 98,
  rohan: 70,
  aakash: 7,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(Object.keys(marks)[i] + " : " + Object.values(marks)[i]);
}

// 2. Write the program in Q1 using for in loop.

for (const key in marks) {
  console.log(key + " : " + marks[key]);
}

// 3. Write a program to print "try again" until the user enters the correct number.

// let input = null;
// let correct = 4;

// while (input !== correct) {
//   input = parseInt(prompt("enter "), 10);
// }

// console.log("right");

// 4. Write a function to find mean of 5 numbers.

function mean(n1, n2, n3, n4, n5) {
  return (n1 + n2 + n3 + n4 + n5) / 5;
}

console.log(mean(1, 2, 3, 4, 5));
