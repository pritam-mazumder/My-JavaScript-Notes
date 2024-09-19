/*
    Array

    It is a data structure used to store multiple values in a single variable.
    It can be defined using square brackets and
    can hold any type of data, including numbers, strings, objects, and even other arrays.
*/

let agents = ['Brimstone', 'Viper', 'Omen', 'Killjoy', 'Cypher', 'Sova', 'Sage', 'Phoenix'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let mixed = [1, 2, 3.4, 'string', null, undefined, true];


console.log(agents);
console.log(agents[0]);

for (let i = 0; i < agents.length; i++) {
    console.log(agents[i]);
}

