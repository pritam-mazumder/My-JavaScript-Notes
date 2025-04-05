let value = 3
let negValue = -value
console.log(negValue)

console.log(1 + "1")
console.log("1" + 1)
console.log("1" + 1 + 1)
console.log(1 + 1 + "1")

// if the string is at the first place, the entire live will be treated as string
// if the string is at the last place, the only the last part was treated as string and rest will do the conversion

console.log(+true)
console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

console.log(num1)



//  1. Number()

let stringValue = "456";
let numericValue = Number(stringValue);
console.log(numericValue); // Output: 456


//  2. parseInt() (for integers)

let integerString = "789";
let integerNumber = parseInt(integerString, 10);
console.log(integerNumber); // Output: 789


//  3. parseFloat() (for floating-point numbers)

let floatString = "123.67";
let floatNumber = parseFloat(floatString);
console.log(floatNumber); // Output: 123.67


//  4. Using the Unary Plus (+) Operator

let strToConvert = "543";
let convertedNum = +strToConvert;
console.log(convertedNum); // Output: 543


//  5. Math.floor() (for rounding down)

let decimalString = "987.65";
let roundedDownNumber = Math.floor(Number(decimalString));  // Rounds down
console.log(roundedDownNumber); // Output: 987
