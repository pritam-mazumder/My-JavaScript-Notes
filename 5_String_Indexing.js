/*
    Indexing of a String

    The index number of any string starts from 0,
    and each character is associated to an index number
    which means
    the first character of any string corresponds at index 0,
    the second character will represent the 1st index and
    the last ‘nth’ character will be ‘n-1’ index number.
*/

// V   A   L   O   R   A   N   T
// 0   1   2   3   4   5   6   7

let str = 'Valorant';

// to find the index by character
console.log(str.indexOf('V'));

// to find the character by index
console.log(str[0]);

// to find the length of the string
console.log(str.length);

// to find the last character of the string
console.log(str[str.length-1]);