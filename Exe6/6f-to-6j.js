const randomeNumber = Math.random();
let result;
const guess = 'tails';

if(randomeNumber < 0.5){
  result = 'heads';
}else {
  result = 'tails';
}

console.log(result === guess ? 'You win!' : 'You lose!');