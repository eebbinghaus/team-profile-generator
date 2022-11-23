const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {}
  getRole() {
    const role = "Intern";
    return role;
    //Overridden to return "Intern"
  }
}
