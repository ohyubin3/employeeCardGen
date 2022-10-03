const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("initialization", () => {});

  describe("getRole", () => {
    it("should return Engineer when asked what the role is", () => {});
    //Arrange
    //Act
    let newEngineer = new Engineer(
      "John",
      1,
      "John@email.com",
      "github.com/john"
    );

    //Assert
    expect(newEngineer.getRole()).toEqual("Engineer");
  });
});
