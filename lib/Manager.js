const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        // office number
        this.officeNumber = officeNumber;
    };

    // returns office number
    getOfficeNumber() {
        console.log(this.officeNumber)
        return(this.officeNumber);
    };

    // Overridden to return 'Manager':
    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;