function  sayHello(){
    console.log("Hello");
    return 2;
}
sayHello();
console.log(sayHello());

// function with parameter
//  IIFE - immediate invoked function expressions 


(function Hello(){
    console.log("I am Immediate invoked function Hello !");
})();

(function sum(a,b){
    return a+b;
    
})(100,100);
// console.log(sum(2,2));