// The packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateSite = require('./utils/generateSite.js');

// generates the file
const generatePage = require('./src/page-template.js');
const Employee = require('./lib/Employee.js');

const getEmployee = function() {
    return inquirer
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
    .then(data => { 
        promptRole(data);
    })
};

const promptRole = function(){
    return inquirer
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

function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "officeNumber",
            message: "what is your office?"
        },
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add another employee?"
        }
    ]);
};


function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "gihub",
            message: "what is their github?"
        },
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add another employee?"
        }
    ])
}

function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "School",
            message: "what school do you attend?"
        },
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add another employee?"
        }
    ])
}

getEmployee();

