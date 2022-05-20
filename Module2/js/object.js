// object->key value pair
let obj={
    "Name": "Monu",
    "Age":22,
    "phone no":7225893731
}
console.log(obj);
let capAmerica={
    Name: "Steve",
    Age:999,
    Friends:["Natasha","Thor","tony","bucky"],
    address:{
        city:"Queens",
        state:"Mp"
    },
    sayHi:function(){
        console.log("Hii cap");
        
    }
    
}

capAmerica.sayHi();
console.log(capAmerica["Name"]);
console.log(capAmerica["address"].city);

// Add new key to Object
capAmerica["Movies"]=['Avenger','civil war'];

console.log(capAmerica);
