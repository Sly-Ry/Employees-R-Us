const Employee = require('./Employee');

// Along with Employee info, Intern class will include:
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        // school
        this.school = school;
    };

    // returns school.
    getSchool() {
        return this.school;
    };

    // Overridden to return 'Intern'.
    getRole() {
        return 'Intern';
    };
};

module.exports = Intern;