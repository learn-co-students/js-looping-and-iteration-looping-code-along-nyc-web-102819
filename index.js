writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(ar, name) {
  const newAr = []
  for (let i = 0; i < ar.length; i++) {
    let element = `Thank you, ${ar[i]}, for the wonderful ${name} gift!`;
    newAr.push(element)
  }
  return newAr
}

function countDown(num) {
  while (num >= 0) {
    console.log(num--);
  }  
}
