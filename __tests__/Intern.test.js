const Intern = require("../lib/Intern");

// Interns will be test by this rule
describe("Intern", () => {
  // INITIALIZATION
  describe("initialization", () => {
    it("should get initialized correctly", () => {
      //Arrange
      //Act
      let newIntern = new Intern("Sarah", 3, "sarah@email.com", "SMU");

      //Assert
      expect(newIntern.name).toEqual("Sarah");
      expect(newIntern.id).toEqual(3);
      expect(newIntern.email).toEqual("sarah@email.com");
      expect(newIntern.school).toEqual("SMU");
    });
  });

  describe("getName", () => {
    it("should return Name when asked what the name is", () => {
      //Arrange
      //Act
      let newIntern = new Intern("Sarah", 3, "sarah@email.com", "SMU");

      //Assert
      expect(newIntern.getName()).toEqual("Sarah");
    });
  });

  describe("getId", () => {
    it("should return Id when asked what the Id is", () => {
      //Arrange
      //Act
      let newIntern = new Intern("Sarah", 3, "sarah@email.com", "SMU");

      //Assert
      expect(newIntern.getId()).toEqual("3");
    });
  });

  describe("getEmail", () => {
    it("should return Email when asked what the Email is", () => {
      //Arrange
      //Act
      let newIntern = new Intern("Sarah", 3, "sarah@email.com", "SMU");

      //Assert
      expect(newIntern.getEmail()).toEqual("sarah@email.com");
    });
  });

  describe("getSchool", () => {
    it("should return school when asked what the school is", () => {
      //Arrange
      //Act
      let newIntern = new Intern("Sarah", 3, "sarah@email.com", "SMU");

      //Assert
      expect(newIntern.getGithub()).toEqual("SMU");
    });
  });

  describe("getRole", () => {
    it("should return Intern when asked what the role is", () => {
      //Arrange
      //Act
      let newIntern = new Intern("Sarah", 3, "sarah@email.com", "SMU");

      //Assert
      expect(newIntern.getRole()).toEqual("Intern");
    });
  });
});
