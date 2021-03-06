// Employee parent class should have the following:
class Employee {
    constructor(name, id, email, role) {
        // name
        this.name = name;
        // id
        this.id = id;
        // email
        this.email = email; 
    };

    // Returns "Employee's" name
    getName() {
        return this.name;
    };

    // Returns "Employee's" id
    getId() {
        return this.id;
    };

    // Returns "Employee's" email
    getEmail() {
        return this.email;
    };

    // Returns 'Employee'
    getRole() {
        return 'Employee';
    };

} 

module.exports = Employee;

 