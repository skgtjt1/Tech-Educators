console.log("test");

//primitive data types
let myVariable = "Variable"; //string
let mySecondVariable = 5; //int
let myThirdVariable = false; //boolean

console.log(myVariable + mySecondVariable + myThirdVariable); // basic concatenation
console.log(`${myVariable} ${mySecondVariable} ${myThirdVariable}`); //template literal method

//typeof operator

console.log(typeof myVariable); // typeof operator tells us the data type of this variable
console.log(typeof mySecondVariable);

//mathematical operators
// + - * / % this symbol is modulo, remainder

let myNumber = 5;
let mySecondNumber = 7;

console.log(myNumber + mySecondNumber);
console.log(myNumber - mySecondNumber);
console.log(myNumber * mySecondNumber);
console.log(myNumber / mySecondNumber);

let myComparison = myNumber > mySecondNumber;
let myNextComparison = myNumber < mySecondNumber;
let myFollowingComparison = myNumber == mySecondNumber;

// == checks if the value is equal
// === checks if the value and type is equal, both return boolean values

console.log(1 == 1);
console.log(2 == 4);
console.log("1" == 1); //somehow these are considered the same value
console.log("1" === 1); //now it takes into account the type of data

//JS primitive data types workshop
console.log("Hello world!");

let number = 6;
console.log(number); // Output: 6

let mints = 12;
let chocolates = 20;
let sweets = mints + chocolates;

console.log(sweets); // Output: 32

let name = "Steve";
console.log(name); // Output: Steve

let firstName = "Justin";
let lastName = "Tosh";
let fullName = firstName + " " + lastName;

console.log(fullName); // Output: Justin Tosh

//find the length of a string with the .length property appended to the variable

let firstNameChecker = "Elizabeth";
console.log(
  `${firstNameChecker} is ${firstNameChecker.length} characters long`
);

// Booleans

let isTrue = true;
console.log(isTrue); // Output: true
let isFalse = false;
console.log(isFalse); // Output: false

// Booleans from numbers

let a = 4;
let b = 8;
let isAGreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToB = a === b;

console.log(isAGreaterThanB); // Output: false
console.log(isALessThanB); // Output: true
console.log(isAEqualToB); // Output: false

// just copied this over from the moodle but this looks like a useful method to display computed information
// using "string literals" I guess a type of template literal you can format the results of you calculation

console.log(`Is ${a} greater than ${b}?`, isAGreaterThanB); // Output: Is 1 greater than 2? false
console.log(`Is ${a} less than ${b}?`, isALessThanB); // Output: Is 1 less than 2? true
console.log(`Is ${a} equal to ${b}?`, isAEqualToB); // Output: Is 1 equal to 2? false

//My attempt:

let colour = "Blue";
let myFavNumber = 7;
let myPets = "cats";

let sentence = `My favourite colour is ${colour}. My favourite number is ${myFavNumber}. I also really like ${myPets}.`;

//my second attempt:
let costofcomputer = 740;
let bankaccount = 1500;
let priceComparison = costofcomputer > bankaccount;
let howMuchDoIneed = bankaccount - costofcomputer;

let computersentence = `i want to buy a computer costing £${costofcomputer}. I have £${bankaccount} in my account. It is currently ${priceComparison} that I can afford it. Here's the difference: £${howMuchDoIneed}.`;

console.log(sentence);
console.log(computersentence);
