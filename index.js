const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const employeeSlot = [];

main();

function main() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "roleToAdd",
        message: "Select the the role of an employee to add",
        choices: ["Engineer", "Manager", "Intern"],
      },
    ])
    .then((response) => {
      if (response.roleToAdd === "Engineer") {
        getEngineerInfo();
      } else if (response.roleToAdd === "Manager") {
        getManagerInfo();
      } else if (response.roleToAdd === "Intern") {
        getInternInfo();
      } else {
        AppenCard();
      }
    });
}

function getEngineerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newEmpName",
        message: "Type New Engineer's Name.",
      },
      {
        type: "input",
        name: "newEmpID",
        message: "Type New Engineer's ID.",
      },
      {
        type: "input",
        name: "newEmpEmail",
        message: "Type New Engineer's Email address.",
      },
      {
        type: "input",
        name: "newEmpGithub",
        message: "Type New Engineer's Github Name.",
      },
    ])
    .then((response) => {
      let engineer = new Engineer(
        response.newEmpName,
        response.newEmpID,
        response.newEmpEmail,
        response.newEmpGithub
      );

      employeeSlot.push(engineer);
      // insert add new member function here**
      generateEmployee();
    });
}

function getManagerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newEmpName",
        message: "Type New Manager's Name.",
      },
      {
        type: "input",
        name: "newEmpID",
        message: "Type New Manager's ID.",
      },
      {
        type: "input",
        name: "newEmpEmail",
        message: "Type New Manager's Email address.",
      },
      {
        type: "input",
        name: "newEmpOffice",
        message: "Type New Manager's Office number.",
      },
    ])
    .then((response) => {
      let manager = new Manager(
        response.newEmpName,
        response.newEmpID,
        response.newEmpEmail,
        response.newEmpOffice
      );

      employeeSlot.push(manager);
      // insert add new member function here**
      generateEmployee();
    });
}

function getInternInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newEmpName",
        message: "Type New Intern's Name.",
      },
      {
        type: "input",
        name: "newEmpID",
        message: "Type New Intern's ID.",
      },
      {
        type: "input",
        name: "newEmpEmail",
        message: "Type New Intern's Email address.",
      },
      {
        type: "input",
        name: "newEmpGithub",
        message: "Type New Intern's School.",
      },
    ])
    .then((response) => {
      let intern = new Intern(
        response.newEmpName,
        response.newEmpID,
        response.newEmpEmail,
        response.newEmpSchool
      );

      employeeSlot.push(Intern);
      // insert add new member function here**
      generateEmployee();
    });
}

function AppenCard() {
  fs.writeFile("employee_cards.html", generateHTML(employeeSlot), (err) =>
    err
      ? console.log(err)
      : console.log("employee_cards.html has been created.")
  );
}
