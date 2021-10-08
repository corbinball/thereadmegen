// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  <br>
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)
  - [Contributors](#contributors)
  - [License](#license)
  <br>
  ## Description 
  ${data.description}
  <br>
  ## Installation
  ${data.installation}
  <br>
  ## Usage
  ${data.usageInfo}
  <br>
  ## Test-Instructions
  ${data.testInst}
  <br>
  ## Questions
  Github: ${data.githubName}
  E-mail: ${data.yourEmail}
  <br>
  ## Contributors
  ${data.contributions}
  <br>
  ## License
  ${data.licenseChoice}
  // use functions for license badge/info
`;
}

module.exports = generateMarkdown;
