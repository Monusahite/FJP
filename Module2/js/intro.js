// print
console.log("Hello  world");
// To delclare variables

let a=5;
let b='a';
let c="Hello World";
let d=0.5;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// loops 
// check a num a prime or not 

let k=17;
let check=false;
for(let i=2;i*i<=k;i++){
   if(k%i==0){
       check=true;
       break;
   }
}
if(check)
console.log("Not a prime");
else
console.log("prime");