// Code your solutions in this file
function writeCards(ar, event) {
    let final_ar = []
    for (let i = 0; i < ar.length; i++) {
        final_ar.push(`Thank you, ${ar[i]}, for the wonderful ${event} gift!`)
    }
    return final_ar
}
function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}