const Intern = require("../lib/intern");

it("Can create an instance of Intern", () => {
  const testEmployee = new Intern();

  expect(typeof testEmployee).toBe("object");
});

it("Can create an instance of Intern with name", () => {
  let name = "Sarah";
  const testEmployee = new Intern(name);

  expect(testEmployee.name).toBe(name);
});

it("Can create an instance of Intern with id", () => {
  let testID = 12;
  const testEmployee = new Intern("Bingo", testID);

  expect(testEmployee.id).toBe(testID);
});

it("Can create an instance of Intern with email", () => {
  let email = "bingo@test.com";
  const testEmployee = new Intern("Bingo", 52, email);

  expect(testEmployee.email).toBe(email);
});

it("Can create an instance of Intern with a school", () => {
  let testSchool = "DU";
  const testEmployee = new Intern("Bingo", 52, "bingo@test.com", testSchool);

  expect(testEmployee.school).toBe(testSchool);
});

it("Does the getSchool() method return a school", () => {
  let school = "DU";
  const testEmployee = new Intern("Bingo", 52, "bingo@test.com", "DU");

  expect(testEmployee.getSchool()).toBe(school);
});

it("Does the getRole() method return Intern", () => {
  const testEmployee = new Intern("Bingo", 52, "bingo@test.com", "DU");

  expect(testEmployee.getRole()).toBe("Intern");
});
