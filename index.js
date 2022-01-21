// The packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateSite = require('./utils/generateSite.js');

// generates the file
const generatePage = require('./src/page-template.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');

const idArray = [];

function promptManager() {
    console.log('Welcome to Happy Tappy Inc. Please enter employee information below: ');
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Team manager name: ',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Team manager id number: ',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Team manager email:',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Team manager office number: '
        }]
    )
    .then(answers => { 
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        buildTeam();
    })
};

function buildTeam() {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Pick a role:',
            choices: ['Engineer', 'Intern', 'None']
        }])
        .then(choice => {
            switch (choice.role) {
                case 'Engineer': 
                    promptEngineer();
                    break;
                case 'Intern': 
                    promptIntern();
                    break;
                case 'None': 
                    finalizeTeam();
            }
        });
};

function promptEngineer() {
    console.log('Welcome to Happy Tappy Inc. Please enter employee information below: ');
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Engineer name: ',
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Engineer id number: ',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Engineer email: ',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Engineer github username: '
        },
    ])
    .then(answers => { 
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, );
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        buildTeam();
    })
};
function promptManager() {
    console.log('Welcome to Happy Tappy Inc. Please enter employee information below: ');
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Team manager name: ',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Team manager id number: ',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Team manager email:',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Team manager office number: '
        }]
    )
    .then(answers => { 
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        buildTeam();
    })
};

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

promptManager();

