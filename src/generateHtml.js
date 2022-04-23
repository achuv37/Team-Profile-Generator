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

// create team card
const createTeamCard = (team) => {
    let employeeType = "";
    let role;
    let icon = "";
    if(team.getRole() === Employee.Manager) {
      role = `Office Number: ${team.officeNumber}`;
      employeeType = "bg-primary text-light";
      icon = "<i class='bi bi-cup-fill'></i>";
    } else if (team.getRole() === Employee.Engineer) {
      role = `Github: ${team.getGithub()}`;
      employeeType = "bg-secondary text-light";
      icon = "<i class='bi bi-headset-vr'></i>";
    } else if (team.getRole() === Employee.Intern) {
      role = `School: ${team.getSchool()}`;
      employeeType = "bg-success text-light";
      icon = "<i class='bi bi-mortarboard-fill'></i>";
    } else {
      return ("Error");
    }
  
    return `<div class="col">
              <div class= "card">
                <div class="card-header ${employeeType}">
                  <h4 class="card-title">
                    ${icon}
                    ${team.getName().toUpperCase()}
                  </h4>
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item">
                      Role: ${team.getRole()}
                    </li>
                    <li class="list-group-item">
                      Id: ${team.getId()}
                    </li>
                    <li class="list-group-item">
                      Email: <a href="mail @: ${team.getEmail()}">${team.getEmail()}</a>
                    </li>
                    <li class="list-group-item">
                      ${role}
                    </li>
                  </ul>
                </div>
              </div>
            </div>`;
  };

  // display the team members
const displayCard = (employee) => {
    let employeeArray = [];
    employee.forEach((team) => {
      employeeArray.push(createTeamCard(team));
    });
    return employeeArray.join('');
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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">    
      <title>Team Profile</title>
    </head>
    <body>
      <div class ="container p-5">
        <div class="row bg-info p-3">
  
          <h1 class="mx-auto">Meet the Team</h1>
        </div>
      </div>
      <div class ="container m-5">
        <div class="row m-5">
          ${displayCard(employee)}
        </div>
      </div>
    </body>
  </html>` ;
    
  };

  module.exports = generateHTML;
  