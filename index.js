// Code your solutions in this file

const employeeNames = ['Ada', 'Brendan', 'Ali'];

function printBadges(namesArray) {
  for (let i = 0; i < namesArray.length; i++) {
    console.log(`Welcome ${namesArray[i]}! You are employee #${i + 1}.`) 
  }
  return namesArray
}

printBadges()

function tailsNeverFails() {
  let flip = Math.random()
  let flips = 0
  while (flip >= 0.5) {
  ++flips
  flip = Math.random()
  }
  return `You got ${flips} tails in a row!`
}

