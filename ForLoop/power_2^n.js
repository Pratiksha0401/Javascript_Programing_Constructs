const readline = require("prompt-sync");
const prompt=readline();

let n = prompt("Enter number : ");
let table;
console.log("Table of 2");
for(let i=1;i<=n;i++){
    table=2*i;
    console.log(table);
}