const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

let employee = [];

const Employee = {
  Intern: "Intern",
  Engineer: "Engineer",
  Manager: "Manager"
};

const validation = {
  required: (response) => {
    return response ? true : console.error("It is a required field");
  }
}

const questions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is manager's name?",
        validate: (response) => {
          return validation.required(response);
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is manager's employee id?",
        validate: (response) => {
          return validation.required(response);
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is manager's email?",
        validate: (response) => {
          return validation.required(response);
        },
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is manager's office number?",
        validate: (response) => {
          return validation.required(response);
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      employee.push(manager);
      console.log(employee);
    })
}

// initialize application
function init() {
  questions();
}

// calling function init
init();