const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  const name = "Mathew";
  const id = 10;
  const email = "Mathew@gmail.com";
  const role = "Engineer";
  const githubUsername = "Mathew01";
  const githubLink = `<a href ="https://github.com/${githubUsername}" target ="_blank">https://github.com/${githubUsername}</a>`;

  const engineer = new Engineer(name, id, email, githubUsername);

  it("should return a engineer name when it called", () => {
    expect(engineer.getName()).toBe(name);
  });
  
  it("should return a engineer Id when it called", () => {
    expect(engineer.getId()).toBe(id);
  });

  it("should return a engineer email when it called", () => {
    expect(engineer.getEmail()).toBe(email);
  });

  it("should return a engineer github link when it called", () => {
    expect(engineer.getGithub()).toBe(githubLink);
  });

  it("should return a engineer role when it called", () => {
    expect(engineer.getRole()).toBe(role);
  });

});

