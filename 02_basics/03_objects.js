// singleton
// object.create  ...constrcture

// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Jensi",
    "full name": "Jensi Sangani",
    [mySym]: "mykey1",
    age: 20,
    location: "Rajkot",
    email: "jensi@google.com",
    isLoggedIn: false,
    lsatLoggeinDays: ["Monday", "Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "jensi@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "jensi@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(jsUser.greeting()); 
console.log(jsUser.greetingTwo()); 

// console.log(jsUser.greeting); 






