console.log("Test");

//basic structure
// if (condition uses operators) {
//     action
// }

// let apples = 6;
// let pears = 3;

//if the condition is true the first code runs, if not the else runs
// if (apples === pears) {
//   console.log("Apples and pears are equal");
// } else {
//   console.log("Apples and pears are not equal");
// }

//change the background colour based on user input

// let colourquestion = prompt("What's your favourite colour?");

// if (colourquestion === "blue") {
//   document.body.style.backgroundColor = "blue";
// }

//conditionals workshop
// let movierating = "15";
// let age = prompt(`"The movie is rated ${movierating}, How old are you?"`);

// if (age >= movierating) {
//   alert("You can watch the movie!");
// } else if (movierating === "PG") {
//   alert("You can watch the movie!");
// } else if (movierating === "U") {
//   alert("You can watch the movie!");
// } else {
//   alert("I'm sorry, you can't watch the movie :(");
// }

//functions

// function functionName(){
// action goes here
// }

//function declaration - your function is NOT running
// function sayHello() {
//   console.log("Hello!");
// }

//invoke or call the function
// sayHello();

//functions workshop
function sayHelloTo(userName) {
  console.log("Hello " + userName + "!");
}

sayHelloTo("Bob"); // Output: Hello Bob!
sayHelloTo("Jimmy"); // Output: Hello Jimmy!
sayHelloTo("Alice"); // Output: Hello Alice!

function greet(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}

greet("Good morning", "Bob"); // Output: Good morning Bob!
greet("Buenos dias", "Alice"); // Output: Buenos dias Alice!
greet("Bonjour", "Charlie"); // Output: Bonjour Charlie!

function add(a, b) {
  return a + b;
}

let result = add(1, 5);
console.log("The result is", result); // Output: The result is 6
let anotherResult = add(2, 10);
console.log("Another result is", anotherResult); // Output: Another result is 12

function multiply(a, b) {
  return a * b;
}

let result2 = multiply(4, 5);
console.log("The result is", result2); // Output: the result is 20
let anotherResult2 = multiply(4, 10);
console.log("Another result is", anotherResult2); // Output: another result is 40

function subtract(a, b) {
  return a - b;
}

let subresult = subtract(30, 15);
console.log("The result is:", subresult); //output is 15
let subresult2 = subtract(10, 20);
console.log("The result is:", subresult2); //output is -10

function divide(a, b) {
  return a / b;
}

let divresult = divide(15, 5);
console.log("The result is:", divresult); //output is 3
let divresult2 = divide(22, 11);
console.log("The result is:", divresult2); //output is 2

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

let calcresult = calculate(5, 7, "+");
console.log("The result is:", calcresult); //output is 12
calcresult = calculate(5, 7, "*");
console.log("The result is:", calcresult); //output is 35
calcresult = calculate(5, 7, "-");
console.log("The result is:", calcresult); //output is -2
calcresult = calculate(5, 7, "/");
console.log("The result is:", calcresult); //output is 0.7
