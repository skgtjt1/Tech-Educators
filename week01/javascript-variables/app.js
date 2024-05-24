// // console.log("Hello World");

// // declaring variables

// //Naming conventions myName --> camelcase;
// //main-container is kebabcase for CSS

// // let
// let myName = "Justin"; //We declare variables just once
// myName = "steve"; //don't need to use "let" again since the variable exists

// console.log(myName);
// // const
// const myConstName = "Justin";

// console.log(myName);

// // var
// // we DONT use var because the scope is unpredictable and can't control the value like we do with let and const

// //concatenation
// console.log(myName + myConstName);

// //template literals - replacement for concatenation backticks are important
// console.log(`${myName} ${myConstName} ` + "123");

// workshop
console.log("Hello world!");

let name = "Bob";
console.log(name); //output bob

let age = 30;
console.log(age); // Output: 30

let myPet = "Tomo";
let myOtherPet = "Yuki";

let numberPets = 5;
let numberHouses = 3;

let numberPetsAndHouses = numberPets + numberHouses;

console.log(numberPetsAndHouses);

console.log(myPet + " and " + myOtherPet + " are my pets");

[myPet, myOtherPet] = [myOtherPet, myPet]; //swaps variables in one line, I looked up this solution online

console.log(myPet + " and " + myOtherPet + " are my pets");

//console methods --> built in function
// console.dir gives more info about the element
// console.table shows info as a table
