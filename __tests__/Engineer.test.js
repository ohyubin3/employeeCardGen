const Engineer = require("../lib/Engineer");

// Engineers will be test by this rule
describe("Engineer", () => {
  // INITIALIZATION
  describe("initialization", () => {
    it("should get initialized correctly", () => {
      //Arrange
      //Act
      let newEngineer = new Engineer("John", 2, "paul@email.com");

      //Assert
      expect(newEngineer.name).toEqual("Paul");
      expect(newEngineer.id).toEqual(2);
      expect(newEngineer.email).toEqual("paul@email.com");
    });
  });

  describe("getName", () => {
    it("should return Engineer when asked what the role is", () => {
      //Arrange
      //Act
      let newEngineer = new Engineer(
        "John",
        2,
        "John@email.com",
        "github.com/john"
      );

      //Assert
      expect(newEngineer.getName()).toEqual("John");
    });
  });

  describe("getRole", () => {
    it("should return Engineer when asked what the role is", () => {
      //Arrange
      //Act
      let newEngineer = new Engineer(
        "John",
        2,
        "John@email.com",
        "github.com/john"
      );

      //Assert
      expect(newEngineer.getRole()).toEqual("Engineer");
    });
  });
});
