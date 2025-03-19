const name = "jency"
const repoCount = 50

// console.log(name + repoCount + " value"); // can't use

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Jensi_sangani')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-12, 9);
// console.log(anotherString);

const str = "        nothing     "
console.log(str);
console.log(str.trim());

const url = "https://jensi.com/jensi%20sangani"
console.log(url.replace('%20', '-'));
console.log(url.includes('hello'));

console.log(gameName.split('_'));















