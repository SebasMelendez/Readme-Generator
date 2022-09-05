// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown')



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "description",
        message:"What is the description of your project?",
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
    },
    {
        type:"input",
        name:"installation",
        message:"What are the steps to install the project?"       
    },
    {
        type:"input",
        name:"usage",
        message:"How will this project work?"
    },
    {
        type:"input",
        name:"Contribution Guidelines",
        message:"What are the contribution Guidelines?"
    },
    {
        type: "list",
        name: "license",
        message: "What licence will you be using?",
        choices: ["MIT", "Private", "none"],
    },
    {
        type:"input",
        name:"testing",
        message:"What are the test instructions?"
    },
    {
        type:"input",
        name:"github",
        message:"What is your Github Username?",
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
    },
    {
        type:"input",
        name:"email",
        message:"What is your email?"
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(),fileName),data);
}   

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(responses => {
        console.log(responses)
        return generateMarkdown(responses);
    })
    .then(fileData => {
        console.log(fileData)
    })
}

// Function call to initialize app
init();

    // "1) What is the title of your project?",
    // "2) What is the description of your project?",
    // "3) What are the Installation instructions?",
    // "4) What is the usage information?",
    // "5) What are the contribution guidelines",
    // "6) What licence will you use?",
    // "7) What are the test instructions?",
    // "8) What is your Github username?",
    // "9) What is your email?"