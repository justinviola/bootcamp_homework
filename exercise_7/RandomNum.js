function randomNumber(min,max){
// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.loit addg(`Random value between ${min} and ${max} is ${a}`);
}


randomNumber(1,10)