import userData from "../fixtures/user-data.json";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const { username, password } = userData.userSuccess;

describe("Orange HRM Tests", () => {
  const selectorsList = {
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastName: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    toaster: ".oxd-toast-close",
    genericDropdown: ".oxd-select-wrapper",
    genericOption: ".oxd-select-option",
  };

  it("User Info Update", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(username, password);
    dashboardPage.verifyLocation();
    dashboardPage.verifyDashboadGrid();
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.firstNameField).clear().type("FirstNameTest");
    cy.get(selectorsList.lastName).clear().type("LastNameTest");
    cy.get(selectorsList.genericField).eq(3).clear().type("Employee"); // para selecionar o elemento na posição 4 do array
    cy.get(selectorsList.genericField).eq(4).clear().type("OtherIdTest");
    cy.get(selectorsList.genericField)
      .eq(5)
      .clear()
      .type("DriversLicenseNumberTest");
    cy.get(selectorsList.genericField).eq(6).clear().type("2025-03-10");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.genericDropdown).eq(0).click();
    cy.get(selectorsList.genericOption).eq(129).click();
    cy.get(selectorsList.genericDropdown).eq(1).click();
    cy.get(selectorsList.genericOption).eq(2).click();
    cy.get(selectorsList.genericField).eq(7).clear().type("2025-07-10");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.genericField).eq(8).clear().type("Test_FieldTest");
    cy.get(selectorsList.submitButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
    cy.get(selectorsList.toaster);
  });
});
