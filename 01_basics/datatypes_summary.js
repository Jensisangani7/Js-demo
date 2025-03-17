// ....Primitive......

// 7 types : String, Number, Boolean, null, undefined, Symbo;,BigInt

const score = 100           //number
const scoreValue = 100.3    //number


const isLoggedIn = false    //boolean
const outsideTemp = null    //object
let userEmail;              //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigInt = 9785687245829875567982763582983756n; // bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = { 
    name: "jensi",
    ahe: 20,
}

 const myFunction = function(){
    console.log("Heloo world");
 }

// console.log(typeof(heros));      // object
// console.log(typeof(myFunction)); // function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myYoutubname = "jensisanganidotcom"

let anothername = myYoutubname
anothername = "superangal"

console.log(myYoutubname);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "jensi@google.com"

console.log(userOne.email);
console.log(userTwo.email);





