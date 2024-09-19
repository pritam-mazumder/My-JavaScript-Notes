// 1. Use logical operator to find whether the age of a person lies between 10 and 20?

age = 15;

if (age >= 10 && age <= 20) {
  console.log(true);
} else {
  console.log(false);
}

// 2. Demonstrate the use of switch case statements in js.

day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
  case "Tuesday":
    console.log("Today is Tuesday");
  case "Wednesday":
    console.log("Today is Wednesday");
  case "Thursday":
    console.log("Today is Thursday");
  case "Friday":
    console.log("Today is Friday");
  case "Saturday":
    console.log("Today is Saturday");
  case "Sunday":
    console.log("Today is Sunday");
  default:
    console.log("Invalid day");
}

// 3. Write a js program to find whether a number is divisible by 2 and 3

num = 19;

if (num % 2 === 0 && num % 3 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// 4. Write a js program to find whether a number is divisible by either 2 or 3.

num2 = 19;

if (num2 % 2 === 0 || num2 % 3 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// 5. Print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator.

age = 11;

console.log(age >= 18 ? "you can drive" : "you cannot drive");
