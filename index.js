const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

function generateHTML(employees) {
  const htmlTop = ` <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="../dist/style.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap"
        rel="stylesheet"
      />
      <title>Team Profile</title>
    </head>
  
    <body>
      <header
        style="text-align: center; background-color: turquoise; color: navy"
      >
        <h1>My Team</h1>
      </header>
      <main class="container">
        <div class="row justify-content-center" id="parent"> `;
  const htmlBottom = ` </div>
        </main>
    
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
          integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script src="./assets/js/app.js"></script>
      </body>
    </html>
    `;
  let cardTemplate = "";
  for (let i = 0; i < employees.length; i++) {
    let role;
    if (employees[i].getRole() === "Engineer") {
      role = employees[i].github;
    } else if (employees[i].getRole() === "Manager") {
      role = employees[i].officeNumber;
    } else {
      role = employees[i].school;
    }
    cardTemplate =
      cardTemplate +
      `\n<div class="col">
    
  <div class="card" style="width: 18rem">
    <div class="card-header">${employees[i].name}</div>
    <div class="card-header">${employees[i].getRole()}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employees[i].id}</li>
      <li class="list-group-item">Email: ${employees[i].email}</li>
      <li class="list-group-item">${role}</li>
    </ul>
  </div>
  </div>`;
  }

  const outPut = htmlTop + cardTemplate + htmlBottom;

  writeHTML();

  function writeHTML() {
    fs.writeFile("./dist/index.html", outPut, (err) =>
      err ? console.log(err) : console.log("Successfully generated index.html!")
    );
  }

  return outPut;
}

const employees = [];

const managerQuestions = [
  {
    type: "input",
    message: "What is the team managers name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team managers id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team managers email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team managers office number?",
    name: "officeNumber",
  },
];

const roleQuestion = [
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any additional team members",
    ],
    name: "role",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineer's id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub username?",
    name: "github",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the intern's id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the intern's email?",
    name: "email",
  },
  {
    type: "input",
    message: "Where did the intern go to school?",
    name: "school",
  },
];

function rolePicker() {
  inquirer.prompt(roleQuestion).then((response) => {
    if (response.role === "Engineer") {
      inquirer.prompt(engineerQuestions).then((response) => {
        employees.push(
          new Engineer(
            response.name,
            response.id,
            response.email,
            (response.github = `GitHub: ${response.github}`)
          )
        );
        rolePicker();
      });
    }
    if (response.role === "Intern") {
      inquirer.prompt(internQuestions).then((response) => {
        employees.push(
          new Intern(
            response.name,
            response.id,
            response.email,
            (response.school = `School: ${response.school}`)
          )
        );
        rolePicker();
      });
    }
    if (response.role === "I don't want to add any additional team members") {
      console.log(employees);
      generateHTML(employees);
    }
  });
}

function initialize() {
  inquirer.prompt(managerQuestions).then((response) => {
    employees.push(
      new Manager(
        response.name,
        response.id,
        response.email,
        (response.officeNumber = `Office Number: ${response.officeNumber}`)
      )
    );
    rolePicker();
  });
}

initialize();
