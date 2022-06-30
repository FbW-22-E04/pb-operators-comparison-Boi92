const apples = 20;
const oranges = 30;
const mangoes = 5;
console.log('-------------------------------------------------')
console.log('Are apples and oranges equal??')
console.log(apples == oranges)
console.log('-------------------------------------------------')
console.log('Are apples and oranges NOT equal??')
console.log(apples != oranges)
console.log('-------------------------------------------------')
console.log('Are apples greater than oranges??')
console.log(apples > oranges)
console.log('-------------------------------------------------')
console.log('Are apples less or equal to oranges??')
console.log(apples <= oranges)
console.log('-------------------------------------------------')
console.log('Are oranges greater than apples??')
console.log(oranges < apples)
console.log('-------------------------------------------------')
console.log('Are Mangoes*Apples greater than Mangoes+Oranges??')
if (apples * mangoes > (oranges + apples)){
    console.log('_100 is greater than 35 unfortunately_')
}
else{
    console.log('No ,35 is not greater than 100 lol')
}
console.log('-------------------------------------------------')
console.log('Are Apples-Mangoes greater than Oranges/Mangoes??')
if (apples - mangoes < (oranges / mangoes)){
    console.log('big F')
}
else{
    console.log('its not less but equal here')
}
console.log('-------------------------------------------------')
console.log('Are magoes apples and oranges equal??')
console.log(apples == mangoes == oranges)
console.log('-------------------------------------------------')
console.log('Are Mangoes+Apples greater than Oranges-Mangoes??')
if (apples + mangoes > (oranges - mangoes)){
    console.log('false')
}
else{
    console.log('TRUE')
}
