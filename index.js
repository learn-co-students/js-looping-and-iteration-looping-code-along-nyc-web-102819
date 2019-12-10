// Code your solutions in this file
function writeCards(array, eventName){
    let newArray = []
    for (let counter = 0; counter < array.length; counter++){
        newArray.push(`Thank you, ${array[counter]}, for the wonderful ${eventName} gift!`)
    }
    return newArray
}

// function countDown(startingNum){
//     while ( startingNum > 0); {
//         console.log(startingNum);
//         startingNum -= 1;
//     }
//     console.log(startingNum);
// }

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
        console.log( startingNumber );
        startingNumber -= 1;
    }
    console.log( startingNumber );
  }