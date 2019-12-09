function writeCards(namesArray, eventName) {
    let messageArray = [];
    for (let i = 0; i < namesArray.length; i++) {
        messageArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return messageArray;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}
