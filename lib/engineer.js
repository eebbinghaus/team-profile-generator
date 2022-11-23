const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    super(name, id, email);
    this.github = github;
  }
  getGitHub() {}
  getRole() {
    const role = "Engineer";
    return role;
    // Overridden to return "Engineer"
  }
}


