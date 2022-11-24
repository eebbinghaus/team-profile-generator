const Employee = require("./employee");

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

// let createManagerCard = () => {
//   let outer = document.createElement("div");
//   outer.className = "col";

//   let card = document.createElement("div");
//   card.className = "card";
//   card.style = "width: 18rem";

//   let headerName = document.createElement("div");
//   headerName.className = "card-header";
//   headerName.textContent = this.name;

//   let headerRole = document.createElement("div");
//   headerRole.className = "card-header";
//   headerRole.textContent = this.role;

//   let listGroup = document.createElement("ul");
//   listGroup.className = "list-group list-group-flush";

//   let listId = document.createElement("li");
//   listId.className = "list-group-item";
//   listId.textContent = this.id;

//   let listEmail = document.createElement("li");
//   listEmail.className = "list-group-item";
//   listEmail.textContent = this.email;

//   let listOfficeNumber = document.createElement("li");
//   listOfficeNumber.className = "list-group-item";
//   listOfficeNumber.textContent = this.officeNumber;

//   $("#parent").appendChild(outer);
//   outer.appendChild(card);
//   card.appendChild(headerName);
//   card.appendChild(headerRole);
//   card.appendChild(listGroup);
//   listGroup.appendChild(listId);
//   listGroup.appendChild(listEmail);
//   listGroup.appendChild(listOfficeNumber);
// };
