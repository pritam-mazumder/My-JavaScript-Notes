// let string1 = '2';
// let string2 = '4';
//
// console.log(string1 + " " + string2);
// console.log(Number(string1)+Number(string2));

let agent = 'Sova';
let type = 'initiator';

let sentence1 = agent + " is a " + type;    // using normal approach
let sentence2 = `${agent} is a ${type}`;    // using template approach

console.log(sentence1);
console.log(sentence2);
