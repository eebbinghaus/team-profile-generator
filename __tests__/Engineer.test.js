const Engineer = require("../lib/engineer");

it("Can create an instance of Engineer", () => {
  const testEmployee = new Engineer();

  expect(typeof testEmployee).toBe("object");
});

it("Can create an instance of Engineer with name", () => {
  let name = "Sarah";
  const testEmployee = new Engineer(name);

  expect(testEmployee.name).toBe(name);
});

it("Can create an instance of Engineer with id", () => {
  let testID = 12;
  const testEmployee = new Engineer("Bingo", testID);

  expect(testEmployee.id).toBe(testID);
});

it("Can create an instance of Engineer with email", () => {
  let email = "bingo@test.com";
  const testEmployee = new Engineer("Bingo", 52, email);

  expect(testEmployee.email).toBe(email);
});

it("Can create an instance of Engineer with a GitHub", () => {
  let testGitHub = "gittyhub";
  const testEmployee = new Engineer("Bingo", 52, "bingo@test.com", testGitHub);

  expect(testEmployee.github).toBe(testGitHub);
});

it("Does the getGitHub() method return a GitHub account", () => {
  let github = "gittyhub";
  const testEmployee = new Engineer("Bingo", 52, "bingo@test.com", "gittyhub");

  expect(testEmployee.getGitHub()).toBe(github);
});

it("Does the getRole() method return Engineer", () => {
  const testEmployee = new Engineer("Bingo", 52, "bingo@test.com", "gittyhub");

  expect(testEmployee.getRole()).toBe("🛠️ Engineer");
});
