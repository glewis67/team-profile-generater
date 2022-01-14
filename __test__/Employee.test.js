const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can create employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });

    it("Can set employee name", () => {
        const name = "Gaynelle";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    it("Can set employee id ", () => {
        const testValue = 1;
        const employee = new Employee("Gaynelle", testValue);
        expect(employee.id).toBe(testValue);
    });

    it("Can set employee email ", () => {
        const testValue = "denen2@yahoo.com";
        const employee = new Employee("Gaynelle", 1, testValue);
        expect(employee.email).toBe(testValue);
    });
})