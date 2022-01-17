const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Bilbo', '10', 'employee@email.com');
    const engineerId = engineer.id;
    const email = engineer.email;

    expect(engineer.name).toBe('Bilbo');
    expect(engineer.id).toBe(engineerId);
    expect(engineer.email).toBe(email)
});

test('Can set email via constructor argument', () => {
    const github = 'bilboHub';
    const engineer = new Engineer('Bilbo', 1234, 'employee@email.com', github);
    
    expect(engineer.github).toBe(github);
});

test('Can get name via getGithub()', () => {
    const github = 'bilboHub';
    const engineer = new Engineer('Bilbo', 1234, 'employee@email.com', 'bilboHub');
    
    expect(engineer.getGithub()).toBe(github);
});

test("getRole() should return 'Engineer'", () => {
    const jobTitle = 'Engineer';
    const employee = new Employee('Bilbo', 1234, 'employee@email.com', 'bilboHub');
    
    expect(employee.getRole()).toBe(jobTitle);
});
