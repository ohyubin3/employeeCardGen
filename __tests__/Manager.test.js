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
      expect(newManager.officeNumber).toEqual("100");
    });
  });

  describe("getName", () => {
    it("should return the name that I give, upon instantiation", () => {
      //Arrange
      //Act
      let newManager = new Manager("James", 4, "james@email.com", 100);
      // Assert
      expect(newManager.getName()).toEqual("James");
    });
  });

  describe("getId", () => {
    it("should return the Id that I give, upon instantiation", () => {
      //Arrange
      //Act
      let newManager = new Manager("James", 4, "james@email.com", 100);
      // Assert
      expect(newManager.getId()).toEqual(4);
    });
  });

  describe("getEmail", () => {
    it("should return the Email that I give, upon instantiation", () => {
      //Arrange
      //Act
      let newManager = new Manager("James", 4, "james@email.com", 100);
      // Assert
      expect(newManager.getEmail()).toEqual("james@email.com");
    });
  });

  describe("getofficeNumber", () => {
    it("should return the office number that I give, upon instantiation", () => {
      //Arrange
      //Act
      let newManager = new Manager("James", 4, "james@email.com", 100);
      // Assert
      expect(newManager.getofficeNumber()).toEqual(100);
    });
  });

  describe("getRole", () => {
    it("should return the Email that I give, upon instantiation", () => {
      //Arrange
      //Act
      let newManager = new Manager("James", 4, "james@email.com", 100);
      // Assert
      expect(newManager.getRole()).toEqual("Manager");
    });
  });
});
