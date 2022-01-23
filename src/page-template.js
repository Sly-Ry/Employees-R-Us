const Engineer = require("../../Employees-R-Us/lib/Engineer");
const Manager = require("../../Employees-R-Us/lib/Manager");
const Intern = require("../../Employees-R-Us/lib/Intern");
const Employee = require("../lib/Employee");

function generateEmployee(teamMembers) { 
    const employee = [];

    for (let i = 0; i < teamMembers.length; i++) {
        let teamPage =  `   
            <div class="card display-inline-block">
                <div class="card-header">
                    <h2>${teamMembers[i].getName()}</h2>
                    <h5>-${teamMembers[i].getRole()}-</h5>
                </div>
                <div class="card-body">
                    <h4>ID#: ${teamMembers[i].getId()}</h4>
                    <a href="sendto:${teamMembers[i].getEmail()}">Email: ${teamMembers[i].getEmail()}</a>`
                if (teamMembers[i].officeNumber) {
                    teamPage += `
                    <p>Office#: ${teamMembers[i].getOfficeNumber()}</p>
                </div>
            </div>`
                }
                if (teamMembers[i].github) {
                    teamPage += `
                    <p>Username: ${teamMembers[i].getGithub()}</p>
                </div>
            </div>`
                } 
                if (teamMembers[i].school) {
                    teamPage += `
                    <p>University: ${teamMembers[i].getSchool()}</p>
                </div>
            </div>`
                }
        employee.push(teamPage);
    }
    
    return employee;
};

function generateHTML(teamMembers) {
    console.log('file reached')
    // destructure page data by section
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Employees-R-Us</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">Happy Tappy Inc.</h1>
            </div>
        </header>
        <main class="container my-5">
        ${generateEmployee(teamMembers)}
        </main>
        <footer class="container text-center py-3">
            <p class="text-dark">&copy; ${new Date().getFullYear()}</p>
        </footer>
    </body>
    </html>
    `;
};

module.exports = generateHTML;