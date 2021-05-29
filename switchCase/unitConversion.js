const readline = require("prompt-sync");
const prompt=readline();

console.log("1.Feet to Inch");
console.log("2.Feet to Meter");
console.log("3.Inch to Feet");
console.log("4.Meter to Feet");
let ch = prompt("Enter choice from above (1-4) : ");

switch (parseInt(ch)) {
    case 1:
        let feets=prompt("Enter feets : ");
        let result1=feets*12;
        console.log(feets+" feets="+result1+"inches");
        break;
    case 2:
        let feet=prompt("Enter feets : ");
        let result2=feet*0.304;
        console.log(feet+" feets="+result2+"meters");
        break;
    case 3:
        let inches=prompt("Enter inches : ");
        let result3=inches/12;
        console.log(inches+" inches="+result3+"feets");
        break;    
    case 4:
        let meters=prompt("Enter meters : ");
        let result4=meters/0.304;
        console.log(meters+" meters = "+result4+"feets");
        break;        
    default:
        console.log("Ivalid choice");
        break;
}

