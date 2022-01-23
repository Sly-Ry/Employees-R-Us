const Employee = require('./Employee');

// Along with Employee info, Engineer class will include:
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        // github username
        this.github = github;
    };

    // returns github.
    getGithub() {
        return this.github;
    };

    // Overridden to return 'Engineer'.
    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer;