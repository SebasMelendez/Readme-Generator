// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // switch(license){
  //   // ["MIT", "APACHE2.0", "Boost1.0", "CC01.0", "none"],
  //   case MIT:
  //     return ``
  //     break
  // }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}
  
  ### made with:
  ${"\n" + "* " + data.languages.join('\n* ')}
* Love <3


  ## Table of Contents
* [Description](#description)
* [Contents](#contents)
* [Installation](#installation)
* [Usage](#usage)
* [License](#licence)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
   
  ## License
  This project uses the following Licence:
  ${data.license}
  

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testing}

  ## Questions
  Contact me at:
  ${data.github}
  ${data.email}



  Made by ${data.name}

`;
}

module.exports = generateMarkdown;
