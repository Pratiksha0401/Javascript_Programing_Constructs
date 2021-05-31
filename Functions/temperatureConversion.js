const readline = require("prompt-sync");
const prompt=readline();

let degF;
let degC;

//To convert celcius into Fahrenheit
function degC_To_degF(temp1) {
   degF = (temp1 * 9/5) + 32;
   console.log(temp1+"degC = "+ degF+"degF");
}

//To convert Fahrenheit into Celcius
function degF_To_degC(temp2) {
   degC = (temp2 - 32) * 5/9;
   console.log(temp2+"degF = "+degC+"degC");
}

let choice = prompt("Enter 1.To Convert Celcius into Fahrenheit 2.Enter to Convert Fahrenheit into Celcius (1/2) : ");

switch (parseInt(choice)) {
    case 1:
        let temp1 = prompt("Enter the Temperature in Celcius: ");
        degC_To_degF(temp1);
        break;
    case 2:
        let temp2 = prompt("Enter the Temperature in Fahrenheit: ");
        degF_To_degC(temp2);
        break;
    default:
        console.log("Invalid choice!");
        break;
}
