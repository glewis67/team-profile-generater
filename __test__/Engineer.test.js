const Engineer = require("../lib/Engineer");

test("Can set GitHUb", () => {
  const testValue = "glewis67";
  const engineer = new Engineer("Gaynelle", 1, "denen2@yahoo.com", testValue);
  expect(engineer.github).toBe(testValue);
});

test("The role type is Engineer", () =>{ 
  const testValue = "Engineer";
  const engineer  = new Engineer("Gaynelle", 1, "denen2@yahoo.com", "glewis67");
  expect(engineer.getRole()).toBe(testValue);
});

test("getGitHub gives the github username", () => {
  const testValue = "glewis67";
  const engineer = new Engineer("Gaynelle", 1, "denen2@yahoo.com", testValue);
  expect(engineer.getGithub()).toBe(testValue);
});