//let's customise the cowsay cow
//The old-fashioned way of importing data

// const cowsay = require("cowsay"); //commonJS

//The new flashy way of importing data
//for ES6 to work we need to specify the type of app we are running in the package.json
import cowsay2 from "cowsay";
//ES6 code

console.log(
  cowsay2.say({
    text: "I am a cooooow",
    e: "0o",
    t: "U",
  })
);
