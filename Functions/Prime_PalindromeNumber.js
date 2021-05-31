  
const readline = require("prompt-sync");
const prompt=readline();

let num1 = prompt("Enter the first Number : ");

let lastDgit = 0;
let reverse = 0;
let prime = 1;
let res=0;

function isPrime(num1) {
      for(let i = 2; i < num1; i++) {
            if((num1%i) == 0) {
                  prime = 0;
                  break;
            }
     }
}

function isPalindrome(num1) {
      while( num1 > 0) {
            lastDgit = num1 % 10;
            reverse = (reverse * 10) + lastDgit;
            num1 = Math.floor(num1 / 10);
      }
      console.log("Reverse of the first number: "+reverse);
}

//to check number is prime or not
if(isPrime==1) {
      console.log(num1+" is a prime Number");
}
else {
      console.log(num1+" is not a prime Number");
}

//to check number is palindrome or not along with prime 
res=isPalindrome(num1);
if(num1 == reverse) {
      if (isPrime==prime) {
            console.log("Number is Palindrome and prime also");   
      }
      else{
            console.log("Number is Palindrome and but not prime"); 
      }
}
else {
      console.log("Number is not Palindrome");
}

