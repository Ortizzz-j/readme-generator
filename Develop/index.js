// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'Title'
},
{
    type: 'input',
    message: 'Tell us about your app:',
    name: 'description'
},
{
    type: 'list',
    message: 'What license does the app have?',
    name: 'license',
    choices: ['']
}
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers)
        })

}

// Function call to initialize app
init();
