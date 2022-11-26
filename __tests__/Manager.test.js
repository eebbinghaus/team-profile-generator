const Manager = require("../lib/manager");

it("Can create an instance of Manager", () => {
  const testEmployee = new Manager();

  expect(typeof testEmployee).toBe("object");
});

it("Can create an instance of Manager with name", () => {
  let name = "Sarah";
  const testEmployee = new Manager(name);

  expect(testEmployee.name).toBe(name);
});

it("Can create an instance of Manager with id", () => {
  let testID = 12;
  const testEmployee = new Manager("Bingo", testID);

  expect(testEmployee.id).toBe(testID);
});

it("Can create an instance of Manager with email", () => {
  let email = "bingo@test.com";
  const testEmployee = new Manager("Bingo", 52, email);

  expect(testEmployee.email).toBe(email);
});

it("Can create an instance of Manager with office number", () => {
  let testOfficeNumber = 532;
  const testEmployee = new Manager(
    "Bingo",
    52,
    "bingo@test.com",
    testOfficeNumber
  );

  expect(testEmployee.officeNumber).toBe(testOfficeNumber);
});

it("Does the getRole() method return Manager", () => {
  const testEmployee = new Manager("Bingo", 52, "bingo@test.com");

  expect(testEmployee.getRole()).toBe("👔 Manager");
});
