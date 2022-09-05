// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown')

const mock = {
        name: "seb",
        title: 'Roick and roll',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        installation: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        usage: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        contribution: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        license: 'MIT',
        testing: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        github: 'SebasMelendez',
        email: 'samm1497@hotmail.com',
        languages: [ 'JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node' ]
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name ?",
        validate: devName => {
            if (devName) {
              return true;
            } else {
              console.log('You need to enter your name!');
              return false;
            }
          }
    },
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
        message:"What are the steps to install the project?",
        validate: installInput => {
            if (installInput) {
              return true;
            } else {
              console.log('You need to enter steps to install!');
              return false;
            }
          }       
    },
    {
        type:"input",
        name:"usage",
        message:"How will this project work?",
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('You need to enter usage Information');
              return false;
            }
          }
    },
    {
        type:"input",
        name:"contribution",
        message:"What are the contribution Guidelines?",
        validate: contributionInput => {
            if (contributionInput) {
              return true;
            } else {
              console.log('You need to enter Contribution Guidelines!');
              return false;
            }
          }
    },
    {
        type: "list",
        name: "license",
        message: "What licence will you be using?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "CC01.0", "none"],
    },
    {
        type:"input",
        name:"testing",
        message:"What are the test instructions?",
        validate: testingInput => {
            if (testingInput) {
              return true;
            } else {
              console.log('You need to enter testing guidelines!');
              return false;
            }
          }
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
        message:"What is your email?",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('You need to enter your email!');
              return false;
            }
          }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node',"Other"],
        validate: languagesInput => {
            if (languagesInput.length > 0) {
              return true;
            } else {
              console.log('Select at least one!');
              return false;
            }
          }
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(),"dist",fileName+ ".md"), data, err =>{
        if(err){
            console.log("error happened:", err)}
        else{
            console.log("File Written!")
        }
    });

}   

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(responses => {
        return generateMarkdown(responses);
    })
    .then(fileData => {
        writeToFile("README",fileData)
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