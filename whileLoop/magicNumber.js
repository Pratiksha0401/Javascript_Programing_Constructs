const readline = require("prompt-sync");
const prompt=readline();

console.log("Think any number between 1 to 100");
let i=1;
let start=1;
let end=100;
const y=1;
const n=2;
let mid;
while (i<=end) {
    mid=Math.floor((start+end)/2);
    let choice=prompt(mid+" is the number you thought 1.Yes/2.No (1/2) : ");
    if(choice==y){
        console.log("Magic Number is "+mid);
        break;
    }
    else if (choice==2) {
        let choice1=prompt("Your number greater than or less than "+mid+" 1.greater/2.less (1/2) : ")
        if(choice1==y){
            start=mid;
        }
        else{
            end=mid;
        }
    } 
    i++;
}
