const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "Please provide the title of your project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide your project description.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide your project installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide your project usage information",
  },
  {
    type: "input",
    name: "guideline",
    message: "Please provide your project contribution guidelines.",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose your licenses.",
    choices: ["MIT", "IBM"],
  },
  {
    type: "input",
    name: "test",
    message: "Please provide your test instructions for your project.",
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your github repository address",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email",
  },
]);
