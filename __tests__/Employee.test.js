const Employee = require("../lib/employee");

it("Can create an instance of Employee", () => {
  const testEmployee = new Employee();

  expect(typeof testEmployee).toBe("object");
});

it("Can create an instance of Employee with name", () => {
  let name = "Sarah";
  const testEmployee = new Employee(name);

  expect(testEmployee.name).toBe(name);
});

it("Can create an instance of Employee with id", () => {
  let testID = 12;
  const testEmployee = new Employee("Bingo", testID);

  expect(testEmployee.id).toBe(testID);
});

it("Can create an instance of Employee with email", () => {
  let email = "bingo@test.com";
  const testEmployee = new Employee("Bingo", 52, email);

  expect(testEmployee.email).toBe(email);
});

it("Can return name using getName() method", () => {
  let name = "Bingo";
  const testEmployee = new Employee(name);

  expect(testEmployee.getName()).toBe(name);
});

it("Can return an id using getId() method", () => {
  let id = 12;
  const testEmployee = new Employee("Bingo", id);

  expect(testEmployee.getId()).toBe(id);
});

it("Can return an email using getEmail() method", () => {
  let email = "bingo@test.com";
  const testEmployee = new Employee("Bingo", 52, email);

  expect(testEmployee.getEmail()).toBe(email);
});

it("Does the getRole() method return Employee", () => {
  const testEmployee = new Employee("Bingo", 52, "bingo@test.com");

  expect(testEmployee.getRole()).toBe("Employee");
});
