// The packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateSite = require('./utils/generateSite.js');

// generates the file
const generatePage = require('./src/page-template.js');
const Employee = require('./lib/Employee.js');

Employee.prototype.getEmployee = function(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide a valid email:',
        }]
    )
    .then((data) => { console.log(data) })
};

Employee.prototype.promptRole = function(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Pick a role:',
            choices: ['Manager', 'Engineer', 'Intern']
        }])
        .then(({ role }) => {
            if (role === 'Manager') {
                promptManager();
            }
            else if (role === 'Engineer') {
                promptEngineer();
            }
            else {
                promptIntern();
            }
        })
};

    
new Employee().getEmployee();

