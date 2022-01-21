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
        console.log(this.name);
        return this.name;
    };

    // Returns "Employee's" id
    getId() {
        console.log(this.id);
        return this.id;
    };

    // Returns "Employee's" email
    getEmail() {
        console.log(this.email);
        return this.email;
    };

    // Returns 'Employee'
    getRole() {
        return 'Employee';
    };

} 

module.exports = Employee;

 