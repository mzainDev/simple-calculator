#! /usr/bin/env node
import inquirer from "inquirer";
const answer1 = await inquirer.prompt([
  { message: "Enter First number", type: "number", name: "FirstNumber" },
  { message: "Enter second number", type: "number", name: "SecondNumber" },

  {
    message: "Select one of the operator to perform calculator",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer1.operator === "Addition") {
  console.log(answer1.FirstNumber + answer1.SecondNumber);
} else if (answer1.operator === "Multiplication") {
  console.log(answer1.FirstNumber * answer1.SecondNumber);
} else if (answer1.operator === "Subtraction") {
  console.log(answer1.FirstNumber - answer1.SecondNumber);
} else if (answer1.operator === "Division") {
  console.log(answer1.FirstNumber / answer1.SecondNumber);
} else {
  console.log("invalid");
}