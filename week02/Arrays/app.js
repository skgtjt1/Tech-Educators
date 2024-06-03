//We used node.js to run this code in the terminal
//variables to store one value

let myVariable = "value";
let mySecondVariable = "Second Value";

//arrays - a way to store more than one value

//we use square brackets, we declare arrays similar to variables

let myArray = ["value", "Second value", "Third value"];
console.log(myArray); //node.js allows running javascript in the terminal, can see the logs there

//.length property - shows how many items are in my array
console.log(myArray.length);

//.index property - a number that tells me the position of an item inside the array

console.log(myArray[0]); //shows first item in the array
console.log(myArray[1]);
console.log(myArray[myArray.length - 1]); //index of the final item in the array

//Array methods -> functions that work with arrays
//pop()
//slice()

//adding a new item to my array using the index

myArray[3] = "fourth value";
console.log(myArray);

//can use length-1 to make sure you add to the end of array and not replace items
//arrays can store different data types but we normally keep data types tidy. Maybe nested arrays tho
