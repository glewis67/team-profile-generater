const Intern = require("../lib/Intern");

test("Can set school", () => {
  const testValue = "UC Berkely";
  const intern = new Intern("Gaynelle", 1, "denen2@yhaoo.com", testValue);
  expect(intern.school).toBe(testValue);
});

test("The role is intern", () => {
  const testValue = "Intern";
  const intern = new Intern("Gaynelle", 1, "denen2@yhaoo.com", "UC Berkely");
  expect(intern.getRole()).toBe(testValue);
});

test("getSchool() gets the school", () => {
  const testValue = "UC Berkely";
  const intern = new Intern("Gaynelle", 1, "denen2@yhaoo.com", testValue);
  expect(intern.getSchool()).toBe(testValue);
});