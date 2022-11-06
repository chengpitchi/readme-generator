// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project\'s name?',
    name: 'projectName',
  },
  {
    type: 'input',
    message: 'Please write a short description of your project',
    name: 'projectDesc',
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'installCmd',
  },
  {
    type: 'input',
    message: 'What does the user need to know about using the application?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contribute',
  },
  {
    type: 'input',
    message: 'What should the user do to test this application?',
    name: 'testCmd',
  },
  {
    type: 'input',
    message: 'What email address should the user sent to for any quesetion about the application?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'list',
    message: 'What kihd of license should your project have?',
    name: 'license',
    choices: ['None', 'MIT', 'JavaScript', 'Apache 2.0', 'Boost Software 1.0', 'Perl', 'Open Database'],
  },
  ];

inquirer
  .prompt(questions)
  .then((response) => {
      writeToFile('README.md', response); 
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readmeContent = generateMarkdown(data); 

  fs.writeFile(fileName, readmeContent, (err) =>
  err ? console.error(err) : console.log('Congratulations! Your professional README file is generated.'))    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
