console.log(null > 0)   // JavaScript converts null to 0 when doing arithmetic or comparisons
console.log(null == 0)  // When null is compared to 0 using ==, JavaScript does not convert null to 0. null is only loosely equal to undefined, but not to 0 or any other value.
console.log(null >= 0)  // As per the language specification, null is treated as 0 when used in numerical comparisons or operations.

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined < 0)


console.log("2" > 1)    // Implicit conversion. In this case, "2" (a string) is converted to the number 2, and the comparison becomes: 2 > 1, which is true.
console.log("02" > 1)   // "02" (a string) is converted to the number 2 (leading zeros are ignored in numeric conversion), and the comparison becomes: 2 > 1, which is true.

