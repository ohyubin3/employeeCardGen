const Employee = require("../lib/Employee");

// Employees will be test by this rule
describe("Employee", () => {
  // INITIALIZATION
  describe("initialization", () => {
    it("should get initialized correctly", () => {
      //Arrange
      //Act
      let newEmployee = new Employee("Paul", 1, "paul@email.com");

      //Assert
      expect(newEmployee.name).toEqual("Paul");
      expect(newEmployee.id).toEqual(1);
      expect(newEmployee.email).toEqual("paul@email.com");
    });
  });

  describe("getName", () => {
    it("should return the name that I give, upon instantiation", () => {
      //Arrange
      //Act
      let newEmployee = new Employee("Paul", 1, "paul@email.com");
      // Assert
      expect(newEmployee.getName()).toEqual("Paul");
    });
  });

  describe("getId", () => {
    it("should return the Id that I give, upon instantiation", () => {
      //Arrange
      //Act
      let newEmployee = new Employee("Paul", 1, "paul@email.com");
      // Assert
      expect(newEmployee.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the Email that I give, upon instantiation", () => {
      //Arrange
      //Act
      let newEmployee = new Employee("Paul", 1, "paul@email.com");
      // Assert
      expect(newEmployee.getEmail()).toEqual("paul@email.com");
    });
  });

  describe("getRole", () => {
    it("should return the Email that I give, upon instantiation", () => {
      //Arrange
      //Act
      let newEmployee = new Employee("Paul", 1, "paul@email.com");
      // Assert
      expect(newEmployee.getRole()).toEqual("Employee");
    });
  });
});
