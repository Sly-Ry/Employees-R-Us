// The packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const resolvePath = path.resolve(__dirname, 'path');
const joinPath = path.join(resolvePath, 'index.html');

// generates the file
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHTML = require('./src/page-template.js');

const teamMembers = [];
const idArray = [];

function startJob() {

    function promptManager() {
        console.log('Welcome to Happy Tappy Inc. Please enter Team Manager information below: ');
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Team manager name:',
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Team manager ID number:',
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Team manager email:',
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'Team manager office number:'
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
                    default:
                        finalizeTeam();
                }
            });
    };
    
    function promptEngineer() {
        console.log('Enter Engineer information below:');
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Engineer name:',
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'Engineer ID number:',
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Engineer email:',
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Engineer github username:'
            },
        ])
        .then(answers => { 
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            buildTeam();
        })
    };
    
    function promptIntern() {
        console.log('Enter Intern information below:');
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Intern name:',
            },
            {
                type: 'input',
                name: 'internId',
                message: 'Intern ID number:',
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Intern email:',
            },
            {
                type: "input",
                name: "internSchool",
                message: "Intern current school:"
            }]
        )
        .then(answers => { 
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internId);
            buildTeam();
        })
    };
    
    function finalizeTeam() {
        fs.writeFileSync(joinPath, generateHTML(teamMembers), 'utf-8');
    }

    promptManager()
}

startJob();