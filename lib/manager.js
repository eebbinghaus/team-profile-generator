const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    const role = "Manager";
    return role;
    //Overridden to return "Manager"
  }
}
