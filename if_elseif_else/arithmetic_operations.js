// Importing the module
const readline = require("prompt-sync");
const prompt=readline();

let a=prompt("Enter a : ");
let b=prompt("Enter b : ");
let c=prompt("Enter c : ");
let y=0;
let ch = prompt("Enter your choice 1.a+b*c 2.c+a/b 3.a%b+c 4.a*b+c: ");

if(ch==1)
	y=a+b*c;
else if (ch==2)
	y=c+a/b;
else if(ch==3)
	y=a%b+c;
else if(ch==4)
	y=a*b+c;
else
	console.log("Invalid Choice");

console.log("result=" + y);
