let arr =[1,2,3,0.1,0.2,0.3,'a','b','c',"Hello","world","",true,false];
console.log(arr);
console.log("access by index 9 ="+arr[9]);

// Array Method 
 
// Push -> add element to start
console.log("Array before push "+ arr);
arr.push("New Item");
console.log("Array After push "+ arr);

// pop -> remove element from end 
console.log("Array before pop "+ arr);
arr.pop();
console.log("Array After pop "+ arr);

console.log();
// shift-> remove element from start
console.log("Array before shift "+ arr);
arr.shift();
console.log("Array After shift "+ arr);

// unshift-> add element to start
console.log("Array before unshift "+ arr);
arr.unshift("New Added by unshift");
console.log("Array After unshift "+ arr);

// Array length 

console.log(arr.length);