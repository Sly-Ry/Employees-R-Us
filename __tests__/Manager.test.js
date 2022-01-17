const Manager = require('../lib/Manager.js');

test('Create a mananger object', () => {
    const manager = new Manager('Bilbo', 1234, 'employee@email.com');
    const managerId = manager.id;
    const email = manager.email;

    expect(manager.name).toBe('Bilbo');
    expect(manager.id).toBe(managerId);
    expect(manager.email).toBe(email);
});

test('Can get officeNumber via constructor arguments', () => {
    const officeNumber = '69420';
    const manager = new Manager('Bilbo', 1234, 'employee@email.com', '69420');
    
    expect(manager.officeNumber).toBe(officeNumber);
});

test("getRole() should return 'Manager'", () => {
    const jobTitle = 'Manager';
    const manager = new Manager('Bilbo', 1234, 'employee@email.com', '69420');
    
    expect(manager.getRole()).toBe(jobTitle);
});