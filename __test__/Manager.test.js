const Manager = require("../lib/Manager");

test("Can set office number", () => {
  const testValue = 200;
  const manager = new Manager("Gaynelle", 1, "denen2@yhaoo.com", testValue);
  expect(manager.officeNumber).toBe(testValue);
});

test("The role is manager", () => {
  const testValue = "Manager";
  const manager = new Manager("Gaynelle", 1, "denen2@yhaoo.com", 100);
  expect(manager.getRole()).toBe(testValue);
});

test("getOffice() get office number", () => {
  const testValue = 100;
  const manager = new Manager("Gaynelle", 1, "denen2@yhaoo.com", testValue);
  expect(manager.getOfficeNumber()).toBe(testValue);
});