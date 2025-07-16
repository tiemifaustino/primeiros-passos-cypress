import userData from "../fixtures/user-data.json";

describe("Orange HRM Tests", () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastName: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    toaster: ".oxd-toast-close",
  };

  it("Login - Success", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.dashboardGrid);
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.firstNameField).clear().type("FirstNameTest");
    cy.get(selectorsList.lastName).clear().type("LastNameTest");
    cy.get(selectorsList.genericField).eq(3).clear().type("Employee"); // para selecionar o elemento na posição 4 dp array
    cy.get(selectorsList.genericField).eq(4).clear().type("OtherIdTest");
    cy.get(selectorsList.genericField)
      .eq(5)
      .clear()
      .type("DriversLicenseNumberTest");
    cy.get(selectorsList.genericField).eq(6).clear().type("2025-03-10");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.genericField).eq(7).clear().type("2025-07-10");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.genericField).eq(8).clear().type("Test_FieldTest");
    cy.get(selectorsList.submitButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
    cy.get(selectorsList.toaster);
  });
});
