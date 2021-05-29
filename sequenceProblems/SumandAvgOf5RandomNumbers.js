console.log("Five random 2 digits numbers are : ");
let randomNum1= Math.floor(Math.random()*90)+10;
console.log(randomNum1);
let randomNum2= Math.floor(Math.random()*90)+10;
console.log(randomNum2);
let randomNum3= Math.floor(Math.random()*90)+10;
console.log(randomNum3);
let randomNum4= Math.floor(Math.random()*90)+10;
console.log(randomNum4);
let randomNum5= Math.floor(Math.random()*90)+10;
console.log(randomNum5);

let sum = randomNum1 + randomNum2 + randomNum3 + randomNum4 + randomNum5;
console.log("Sum of five two digit random numbers is "+ sum);
let average = sum/5;
console.log("Average of five two digt random numbers is " + average);