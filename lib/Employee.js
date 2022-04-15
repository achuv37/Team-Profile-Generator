// The employee class has three properties name,id and email.
// Three methods: getEmployeeName(), getEmployeeId(), getEmployeeEmail(),getEmployeeRole()

class Employee {
  constructor(name,id,email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getEmployeeName() {
    return this.name;
  }

  getEmployeeId() {
    return this.id;
  }

  getEmployeeEmail() {
    return this.email;
  }

  getEmployeeRole() {
    return "Employee";
  }
}

module.exports = Employee;