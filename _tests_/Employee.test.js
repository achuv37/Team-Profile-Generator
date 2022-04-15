

const Employee = require("../lib/Employee.js");

describe("Employees", () => {
  const name = "John";
  const id = 12;
  const email = "john@gmail.com";
  const role = "Employee";

  const employees = new Employee(name, id, email);

  it("should return a employee name when it called", () => {
    expect(employees.getName()).toBe(name);
  });
  
  it("should return a employee Id when it called", () => {
    expect(employees.getId()).toBe(id);
  });

  it("should return a employee email when it called", () => {
    expect(employees.getEmail()).toBe(email);
  });

  it("should return a employee role when it called", () => {
    expect(employees.getRole()).toBe(role);
  });

});