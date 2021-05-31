let i = 0;
let num = 0;
let randomNumbArr = new Array();

// generating 10 Random Numbers
for(i=0; i<10; i++) {
   num = Math.floor(Math.random()*( 999-100+1 )+ 100 );;
   console.log(num);
   randomNumbArr.push(num);
}

console.log(randomNumbArr);

// find 2nd largest and smallest number by sorting array
let sortArr = randomNumbArr.sort();
console.log(sortArr);

console.log("2nd Smallest Number in the Array: "+sortArr[1]);
console.log("2nd Largest Number in the Array: "+sortArr[8]);