const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML.js");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
// creating an empty array for employees.
let employee = [];

// Employee object with three properties
const Employee = {
  Intern: "Intern",
  Engineer: "Engineer",
  Manager: "Manager"
};


// validating the input.
const validation = {
    required: (response) => {
      return response ? true : console.error("It is a required field");
    }
  }

//function for  write to HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      err ? console.log(`Error: ${err}`) : console.log("Success!");
    });
  }
  
//generate questions for user
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
        promptUser();
      })
  };

  // function for adding employees
const promptUser = () => {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee are you looking for?",
          name: "menu",
          choices: [Employee.Intern, Employee.Engineer]
        },
        {
          type: "input",
          message: "Enter employee name:",
          name: "employeeName",
          validate: (response) => {
            return validation.required(response);
          },
        },
        {
          type: "input",
          message: "Enter employee Id:",
          name: "employeeId",
          validate: (response) => {
            return validation.required(response);
          },
        },
        {
          type: "input",
          message: "Enter employee Email:",
          name: "employeeEmail",
          validate: (response) => {
            return validation.required(response);
          },
        },
        {
          type: "input",
          message: "Enter intern's school:",
          name: "internSchool",
          when: (answers) => answers.menu === Employee.Intern,
          validate: (response) => {
            return validation.required(response);
          },
        },
        {
          type: "input",
          message: "Enter Engineer github username",
          name: "engineerGithubUsername",
          when: (answers) => answers.menu === Employee.Engineer,
          validate: (response) => {
            return validation.required(response);
          },
        },
        {
          type: "confirm",
          message:"Do u want to add another employee?",
          name: "repeat",
        },
      ])
      .then((answers) => {
        if (answers.menu === Employee.Intern) {
          const intern = new Intern(
            answers.employeeName,
            answers.employeeId,
            answers.employeeEmail,
            answers.internSchool
          );
          employee.push(intern);
        }
        
        if (answers.menu === Employee.Engineer) {
          const engineer = new Engineer(
            answers.employeeName,
            answers.employeeId,
            answers.employeeEmail,
            answers.engineerGithubUsername
          );
          employee.push(engineer);
        }
        if (answers.repeat === true) {
          promptUser();
        } else {
          writeToFile("./dist/index.html", generateHTML(employee));
        }
      });
  };
  // exports questions
  module.exports = questions;