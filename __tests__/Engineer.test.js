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
    it("should return Name when asked what the name is", () => {
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

  describe("getId", () => {
    it("should return Id when asked what the Id is", () => {
      //Arrange
      //Act
      let newEngineer = new Engineer(
        "John",
        2,
        "John@email.com",
        "github.com/john"
      );

      //Assert
      expect(newEngineer.getId()).toEqual("2");
    });
  });

  describe("getEmail", () => {
    it("should return Email when asked what the Email is", () => {
      //Arrange
      //Act
      let newEngineer = new Engineer(
        "John",
        2,
        "John@email.com",
        "github.com/john"
      );

      //Assert
      expect(newEngineer.getEmail()).toEqual("John@email.com");
    });
  });

  describe("getGithub", () => {
    it("should return github address when asked what the github address is", () => {
      //Arrange
      //Act
      let newEngineer = new Engineer(
        "John",
        2,
        "John@email.com",
        "github.com/john"
      );

      //Assert
      expect(newEngineer.getGithub()).toEqual("github.com/john");
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
