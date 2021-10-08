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
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}
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
  ${answers.description}
  <br>
  ## Installation
  ${answers.installation}
  <br>
  ## Usage
  ${answers.usageInfo}
  <br>
  ## Test-Instructions
  ${answers.testInst}
  <br>
  ## Questions
  Github: ${answers.githubName}
  E-mail: ${answers.yourEmail}
  <br>
  ## Contributors
  ${answers.contributions}
  <br>
  ## License
  ${answers.licenseChoice}
  // use functions for license badge/info
`;
}

module.exports = generateMarkdown;
