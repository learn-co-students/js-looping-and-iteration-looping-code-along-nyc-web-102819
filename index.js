// Code your solutions in this file

function writeCards(array, surprise) {
    let newarray = [];
    for (let i = 0; i < array.length ; i++) {
        newarray.push(`Thank you, ${array[i]}, for the wonderful ${surprise} gift!`);
    }
    return newarray;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num -= 1;
    }
}