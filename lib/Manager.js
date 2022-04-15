const Employee = require("./Employee.js");
// Employee is the parents class. 
// Manager has one extra property office number and getRole method return manager

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;