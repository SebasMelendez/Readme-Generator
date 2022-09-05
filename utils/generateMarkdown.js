// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    // ["MIT", "APACHE2.0", "Boost1.0", "CC01.0", "none"],
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    break
    case "APACHE2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    break
    case "Boost1.0":
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
    break
    case "CC01.0":
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]`
    break
    case "none":
      return ``
    break
    default:
      return ``
  }



}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  switch(license){
    // ["MIT", "APACHE2.0", "Boost1.0", "CC01.0", "none"],
    case "MIT":
      return `(https://opensource.org/licenses/MIT)`
    break
    case "APACHE2.0":
      return `(https://opensource.org/licenses/Apache-2.0)`
    break
    case "BNoost1.0":
      return `(https://www.boost.org/LICENSE_1_0.txt)`
    break
    case "CC01.0":
      return `(http://creativecommons.org/publicdomain/zero/1.0/)`
    break
    case "none":
      return ``
    break
    default:
      return ``
  }
}

//done at the badge function

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `
  ## License
  This project uses the following Licence:


  ${license}
  
  ${renderLicenseBadge(license)}${renderLicenseLink(license)}

    `
  }

}

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
   
${renderLicenseSection(data.license)}
  

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testing}

  ## Questions
  Contact me at:


  [My Github](https://github.com/${data.github})


  My email: ${data.email}

  Made by ${data.name}

`;
}

module.exports = generateMarkdown;
