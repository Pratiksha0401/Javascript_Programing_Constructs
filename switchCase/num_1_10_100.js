const readline = require("prompt-sync");
const prompt=readline();

let num = prompt("Enter Number among 1,10,100,1000 : ");

switch (parseInt(num)) {
    case 1:
        console.log("One");
        break;
    case 10:
        console.log("Ten");
        break;    
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;    
    default:
        console.log("Invalid");
        break;
}