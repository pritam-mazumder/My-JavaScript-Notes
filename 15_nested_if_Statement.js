let input =  +prompt('Enter your age');
let age = 18;

if (input < age) {
    console.log('you cannot drive');
} else {
    if (input === age) {
        console.log('get a licence');
    } else if (input > age) {
        console.log('you can drive');
    } else {
        console.log('no vehicle');
    }
}
