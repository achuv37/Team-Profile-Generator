const { describe, it, expect } = require("@jest/globals");
const Manager = require("../lib/Manager.js");
// describe call is what gives structure to the test suite.
describe("Manager", () => {
  const name = "Jackson";
  const id = 5;
  const email = "jackson@gmail.com";
  const officeNumber = 32;
  const role = "Manager";

  const manager = new Manager(name, id, email, officeNumber)
  
  //testing
  it("Should return Manager name", () => {
    expect(manager.getName()).toBe(name);
  });

  it("Should return Manager office number", () => {
    expect(manager.officeNumber).toBe(officeNumber);
  });

  it("Should return Manager id", () => {
    expect(manager.getId()).toBe(id);
  });

  it("Should return Manager email", () => {
    expect(manager.getEmail()).toBe(email);
  });

  it("Should return Manager role", () => {
    expect(manager.getRole()).toBe(role);
  });
});