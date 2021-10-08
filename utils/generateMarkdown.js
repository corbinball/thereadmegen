// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseType = `${data.licenseChoice}`;
  let theLicense = '';
  if(licenseType === 'MIT License') {
    theLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'GNU General Public License v3.0') {
    theLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`
  } else if (licenseType === 'Apache License 2.0') {
    theLicense = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseType === 'Mozilla Public License 2.0') {
    theLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else {
    licenseType = "N/A"
  };
  return theLicense;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)
  - [Contributors](#contributors)
  - [License](#license)
  
  ## Description 
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usageInfo}
  
  ## Test-Instructions
  ${data.testInst}
  
  ## Questions
  Github: ${data.githubName}
  E-mail: ${data.yourEmail}
  
  ## Contributors
  ${data.contributions}
  
  ## License
  ${renderLicenseBadge(data)}
`;
}

module.exports = generateMarkdown;
