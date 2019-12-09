// Code your solutions in this file

function writeCards( names, event ) {
    let thankYouCards = []
    for ( let i = 0; i < names.length; i++) {
        thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown(integer) {
    while ( integer > 0 ) {
        console.log ( integer );
        integer -= 1;
    } 
    console.log(integer)
}