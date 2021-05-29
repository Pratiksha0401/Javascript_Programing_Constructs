const readline = require("prompt-sync");
const prompt=readline();

let num = prompt("Enter Number among 1,10,100,1000 : ");
		
if(num==1)
	console.log("unit");
else if(num==10)
	console.log("Ten");
else if(num==100)
	console.log("Hundred");
else if(num==1000)
	console.log("Thousand");	
else
	console.log("Invalid Number");