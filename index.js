// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require ('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe the project.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How will the repository be used?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which licence should be used for your repository?',
        choices: ['None', 'MIT', 'APACHE_2.0', 'ISC', 'BSL_1.0', 'MPL_2.0', 'Unlicense']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about adding contributions to the repository'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm install'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be used to run tests?',
        default: 'npm test'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },

  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
    generateMarkdown(answers);
    
        fs.writeFile('README.md', generateMarkdown(answers), (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });
}

// Function call to initialize app
init();
