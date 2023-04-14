function calculateSupply(age, amountperday)
{
    const maxAge= 80
    let amtConsumed = Math.round((80-age)*365*amountperday);
    console.log(`You will need $${amtConsumed} to last you until the ripe old
    age of ${maxAge}`)

}
calculateSupply(21,2.75)
calculateSupply(33,3.50)
calculateSupply(79,4)