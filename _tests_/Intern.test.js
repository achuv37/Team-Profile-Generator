const Intern = require("../lib/Intern.js");

// describe call is what gives structure to the test suite.
describe("Intern", () => {
    const name = "Tony";
    const id = 7;
    const email = "Tony@gmail.com";
    const school = "University of North Carolina";
    const role = "Intern";

    const intern = new Intern(name, id, email, school);
    
    // testing
    it("should return intern school when it called", () => {
        expect(intern.getSchool()).toBe(school);
      });

    it("should return a intern name when it called", () => {
        expect(intern.getName()).toBe(name);
      });
      
      it("should return a intern Id when it called", () => {
        expect(intern.getId()).toBe(id);
      });
    
      it("should return a intern email when it called", () => {
        expect(intern.getEmail()).toBe(email);
      });
    
})