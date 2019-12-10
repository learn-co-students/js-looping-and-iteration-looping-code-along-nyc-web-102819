// Code your solutions in this file

function writeCards(nameArray, typeOfGift) {
    let array = []
    for (let i = 0; i < nameArray.length; i++) {
        array.push(`Thank you, ${nameArray[i]}, for the wonderful ${typeOfGift} gift!`);
    }
    return array;
}

function countDown(number) {
    let i = 0;
    while (number >= i) {
        console.log(number);
        number--;
    }
}