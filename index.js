const inquirer = require("inquirer");
const fs = require("fs");
const readme = "README.md";
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of this Project?",
        name: "title"
    },
    {
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
        message: "Provide instructions on how to use your project:",
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
            "Apache License 2.0",
            "Boost Software License 1.0",
            "MIT License",
            "ISC",
            "GNU GPLv3",
            "GNU AGPLv3",
            "GNU LGPLv3",
            "Mozilla Public License 2.0",
            "The Unlicense",
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
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
        return console.log(err);
      }
      else{
        return console.log("Success! Your README.md file has been generated")
      }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(userdata => writeToFile(readme, userdata));
}

// function call to initialize program
init();
