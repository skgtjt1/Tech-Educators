//make the two functions you want to run in order

// sum(displayConsole, 2, 3);

// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function displayConsole(result) {
//   console.log(result);
// }

//   // randomly choose if success is true or false
//   const success = Math.random() > 0.5;
//   if (success) {
//     onSuccessCallback({
//       message: "This is the message of success",
//     });
//   } else {
//     onFailureCallback();
//   }

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function isEqualTo(a, b) {
  return a === b;
}

function notEqualTo(a, b) {
  return a !== b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

let result = myCalculatorFunction(1, 2, divide);
console.log(result); // Output: 0.5

let result2 = myCalculatorFunction(2, 3, subtract);
console.log(result2); // Output: -1

// add the two results together
let finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: -0.5
