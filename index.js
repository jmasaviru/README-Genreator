const inquirer = require("inquirer");
const fs = require("fs");
const readme = "README.md";
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of this Project?"
        name: "title"
    },
    {{
        type: "input",
        message: "Please provide a description of this Project: ",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions for this project? Write NONE if no instructions. ",
        name: "installation"
    },
    {
        type: "input",
        message: "How would you like your project to be used? ",
        name: "usage"
    },
    {
        type: "input",
        message: "Who are the contributors for this project? ",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are the testing instructions for this project? ",
        name: "testing"
    },
    {
        type: "checkbox",
        message: "Please select a license for this project:",
        choices: [
            "Apache",
            "MIT",
            "ISC",
            "GNU GPLv3",
        ],
        name: "license"
    },
    {
        type: "input",
        message: "What is your GitHub username? ",
        name: "gitName"
    },
    {
        type: "input",
        message: "What is your email address? ",
        name: "email"
    }


];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
