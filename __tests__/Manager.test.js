const Manager = require("../lib/Manager");

// Managers will be test by this rule
describe("Employee", () => {
  // INITIALIZATION
  describe("initialization", () => {
    it("should get initialized correctly", () => {
      //Arrange
      //Act
      let newManager = new Manager("James", 4, "james@email.com", 100);

      //Assert
      expect(newManager.name).toEqual("James");
      expect(newManager.id).toEqual(4);
      expect(newManager.email).toEqual("james@email.com");
      expect(newManager.officeNumber).toEqual(100);
    });
  });

  describe("getName", () => {
    it("should return name when asked what the name is", () => {
      //Arrange
      //Act
      let newManager = new Manager("James", 4, "james@email.com", 100);
      // Assert
      expect(newManager.getName()).toEqual("James");
    });
  });

  describe("getId", () => {
    it("should return Id when asked what the Id is", () => {
      //Arrange
      //Act
      let newManager = new Manager("James", 4, "james@email.com", 100);
      // Assert
      expect(newManager.getId()).toEqual(4);
    });
  });

  describe("getEmail", () => {
    it("should return email when asked what the email is", () => {
      //Arrange
      //Act
      let newManager = new Manager("James", 4, "james@email.com", 100);
      // Assert
      expect(newManager.getEmail()).toEqual("james@email.com");
    });
  });

  describe("getofficeNumber", () => {
    it("should return office number when asked what the office number is", () => {
      //Arrange
      //Act
      let newManager = new Manager("James", 4, "james@email.com", 100);
      // Assert
      expect(newManager.getofficeNumber()).toEqual(100);
    });
  });

  describe("getRole", () => {
    it("should return Manager when asked what the role is", () => {
      //Arrange
      //Act
      let newManager = new Manager("James", 4, "james@email.com", 100);
      // Assert
      expect(newManager.getRole()).toEqual("Manager");
    });
  });
});
