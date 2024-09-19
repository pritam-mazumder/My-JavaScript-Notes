// 1. Create a variable of type string and try to add a number to it.

let str = "Twenty-";
let num = 20;

console.log(str + num);

// 2. Use typeof operator to find the datatype of the string in last question.

console.log(typeof (str + num));

// 3. Create a const object in js. Can you change it to a number later?

const obj = {
  name: "SOva",
  role: "initiator",
};

// const obj = 4;

// 4. Try to add a new to the const object in problem 3. Were you able to do it?

obj["ult"] = "Hunter's Fury";

console.log(obj);

// 5. Write a js program to create a wide-meaning dictionary of 5 words.

const dictionary = {
    "cat": "A feline mammal with long fur, short legs, and a soft, white skin.",
    "dog": "A domestic animal with long fur, short legs, and a distinctive, white or brown skin.",
    "bird": "A warm-blooded animal that typically has feathers, ears, and a beak.",
    "elephant": "A large land mammal with trunks, four legs, and a long, slender body.",
    "fish": "A small aquatic animal with a body covered in scales and gills.",
};

console.log(dictionary);
