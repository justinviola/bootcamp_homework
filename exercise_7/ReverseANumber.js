

// const reverseNumber = number => parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number)

function reverseNumber (number)
{
 let strNum= number.toString()
 let splNum = strNum.split('')
 let revNum = splNum.reverse()
 let jonNum = revNum.join('')
 console.log(parseFloat(jonNum)* Math.sign(number))
}

reverseNumber("-12345")

