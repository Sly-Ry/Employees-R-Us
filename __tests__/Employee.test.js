const Employee = require('../lib/Employee.js');

test('Creates an employee object', () => {
    const employee = new Employee('Bilbo', '10', 'email');
    const employeeId = employee.id;
    const email = employee.email;

    expect(employee.name).toBe('Bilbo');
    expect(employee.id).toBe(employeeId);
    expect(employee.email).toBe(email)
});

test('Can set name via constructor arguments', () => {
    const name = "Bilbo";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const idNumber = 1234;
    const employee = new Employee("Bilbo", idNumber);
    expect(employee.id).toBe(idNumber);
});

test("Can set email via constructor argument", () => {
    const email = "employee@email.com";
    const employee = new Employee("Bilbo", 1234, email);
    expect(employee.email).toBe(email);
});

test("Can get name via getName()", () => {
    const name = "Bilbo";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("Can get id via getId()", () => {
    const idNumber = 1234;
    const employee = new Employee("Bilbo", idNumber);
    expect(employee.id).toBe(idNumber);
});

test("Can get email via getEmail()", () => {
    const email = "employee@email.com";
    const employee = new Employee("Bilbo", 1234, email);
    expect(employee.email).toBe(email);
});

test("getRole() should return 'Employee'", () => {
    const jobTitle = "Employee";
    const employee = new Employee("Bilbo", 1234, "employee@email.com");
    expect(employee.getRole()).toBe(jobTitle);
});