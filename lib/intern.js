const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    super(name, id, email);
    this.school = school;
    name = "jon";
  }
  getSchool() {}
  getRole() {
    //Overridden to return "Intern"
  }
}
