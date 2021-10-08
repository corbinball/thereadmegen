// TODO: Include packages needed for this application
//added packages
const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project titled?",
    },
    {
        type: "input",
        name: "description",
        message: "Pretty please give a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "How would a user install this sweet project?",
    },
    {
        type: "input",
        name: "useageInfo",
        message: "What is this sweet project used for?",
    },
    {
        type: "input",
        name: "contributions",
        message: "Who all contributed to this project?",
    },
    {
        type: "input",
        name: "testInst",
        message: "What are the instructions for a test?",
    },
    {
        type: "list",
        name: "licenseChoice",
        message: "Please choose the license for this project useing the Up and Down arrow keys:",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ]
    },
    {
        type: "input",
        name: "githubName",
        message: "What is your GitHub username for questions?",
    },
    {
        type: "input",
        name: "yourEmail",
        message: "What is your email for project Questions?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt (questions)
        .then((answers) => {
        console.log(answers)
        });
};

writeToFile();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
