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

// function for generating html file.
const generateHTML = (employee) => {
  return ` <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css">
    <title>Team Profile</title>
  </head>
  <body>
    <div class ="container">
      <div class="row">
        <h1>Meet the Team</h1>
      </div>
    </div>
    <div class ="container">
      <div class="row">
      </div>
    </div>
  </body>
</html>` ;
  
};

//function for  write to HTML file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(`Error: ${err}`) : console.log("Success!");
  });
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
        when: (answers) => answers.employeeType === Employee.Intern,
        validate: (response) => {
          return validation.required(response);
        },
      },
      {
        type: "input",
        message: "Enter Engineer github username",
        name: "engineerGithubUsername",
        when: (answers) => answers.employeeType === Employee.Engineer,
        validate: (response) => {
          return validation.required(response);
        },
      },
      {
        type: "confirm",
        message:"Do u have another employee to add?",
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
        writeToFile("./output/index.html", generateHTML(employee));
      }
    });
};



// initialize application
function init() {
  questions();
}

// calling function init
init();