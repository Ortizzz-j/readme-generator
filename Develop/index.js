// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require('path')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
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
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
},
{
    type: 'input',
    message: 'How do you install your app?',
    name: 'installation'
}, 
{
    type: 'input',
    message: 'What is your app intended to be used for?',
    name: 'usage'
},
{
    type: 'input',
    message: 'Contributing team players:',
    name: 'contributors'
},
{
    type: 'input',
    message: 'How can you run tests?',
    name: 'tests'
},
{
    type: 'input',
    message: 'What is your github profile?',
    name: 'github'
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email'
}
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }


function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            console.log(data)
            writeToFile('Readme.md', generateMarkdown({...data}))

        })

}

// Function call to initialize app
init();
