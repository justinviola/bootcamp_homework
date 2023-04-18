// function isPrime(num){
//     let isPrime = '';
//     for(let i = 2; i <= Math.sqrt(num); i++){
//       if(num % i === 0){
//         isPrime = false;
//       } else {
//         isPrime = true;
//       }
//     }
//     return isPrime;
  
//   }
  
//   isPrime(11);

// function isPrime(num) {
//     let flag = true;
//     let isPrime = true;
//     if (num === 0 || num === 1) return false;
//     if (num === 2) return true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (flag) {
//         if(num % i === 0) {
//           isPrime = false;
//           flag = false;
//         }
//       }
//     }
//     return isPrime;
//   }
  
//   const numbers = [1, 7, 11, 15, 20];
//   const booleans = [false, true, true, false, false];
  
//   numbers.forEach((item, i) => {
//     if (isPrime(item) === booleans[i]) {
//       console.log("CORRECT");
//     } else {
//       console.log("WRONG");
//     }
//   })


  function isPrime(num) {
    if (num === 0 || num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;          
    }
    return  true;
  }

  console.log(isPrime(8))