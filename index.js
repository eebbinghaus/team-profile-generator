const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = ({}) => `  `;

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: "name",
}, 
{
    type: 'input',
    message: 'What is the team managers id number?',
    name: "id",
},
{
    type: 'input',
    message: 'What is the team managers email?',
    name: "email",
},
{
    type: 'input',
    message: 'What is the team managers office number?',
    name: "officeNumber",
},
{
    type: 'list',
    message: 'Which type of team member would you like to add?',
    choices: ['Engineer', "Intern", "I don't want to add any additional team members"],
    name: "member",
}

])
.then((response) => {
  const htmlPageContent = generateHTML(response);

  fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Successfully generated index.html!")
  );
});
