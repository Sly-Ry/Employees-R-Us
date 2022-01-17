const Intern = require('../lib/Intern.js');

test('Creates an intern object', () => {
    const intern = new Intern('Bilbo', 1234, 'employee@email.com');
    const internId = intern.id;
    const email = intern.email;

    expect(intern.name).toBe('Bilbo');
    expect(intern.id).toBe(internId);
    expect(intern.email).toBe(email)
});

test('Can set school via contructor arguments', () => {
    const school = 'Hobbit High';
    const intern = new Intern('Bilbo', 1234, 'employee@email.com', school);
    
    expect(intern.school).toBe(school);
})

test('Can get name via getSchool()', () => {
    const school = 'Hobbit High';
    const intern = new Intern('Bilbo', 1234, 'employee@email.com', 'Hobbit High');
    
    expect(intern.getSchool()).toBe(school);
}); 

test("getRole() should return 'Intern'", () => {
    const jobTitle = 'Intern';
    const intern = new Intern('Bilbo', 1234, 'intern@email.com', 'Hobbit High');
    
    expect(intern.getRole()).toBe(jobTitle);
});