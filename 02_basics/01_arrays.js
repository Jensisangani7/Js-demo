// array

const myArray = [0, 1, 2, 3, 4, 5, 6]
const myHeors = ["shaktiman", "naagraj"]

const myArray2 = new Array(1, 2, 3, 4, 5)
// console.log(myArray[1]);

// Array methods

// myArray.push(7); // add value in last
myArray.pop();      // remove value in last

// myArray.unshift(10);
// myArray.shift();


// console.log(myArray.includes(9));
// console.log(myArray.indexOf(8));

const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);

// slice, splice

console.log("A", myArray);

const myn1 = myArray.slice(1, 4);

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 4);
console.log("c ", myArray);
console.log(myn2);








