// Code your solutions in this file


function writeCards(names, event){
    let solution = [];
    for (let i = 0; i < names.length; i++){
        solution.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return solution
}

// function writeCards( namesArray, event ) {
//   let thankYouCards = []
//   for ( let i = 0; i < namesArray.length; i++ ) {
//     thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
//   }
//   return thankYouCards
// }

function countDown(number){
    while (number >= 0){
        console.log(number)
        number --
    }
}
