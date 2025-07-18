import userData from "../fixtures/user-data.json";
import fieldsMyInfo from "../fixtures/fields-myinfo.json";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();
const { username, password } = userData.userSuccess;
const {
  firstName,
  lastName,
  employeeId,
  otherIdTest,
  driversLicenseNumber,
  licenseExpiryDate,
} = fieldsMyInfo.fields;

describe("Orange HRM Tests", () => {
  const selectorsList = {
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
    loginPage.loginWithAnyUser(username, password);
    dashboardPage.checkLocation();
    dashboardPage.checkDashboadGrid();
    menuPage.accessMyInfo();
    myInfoPage.fillPersonalDetails(firstName, lastName);
    myInfoPage.fillEmployeeDetails(
      firstName,
      lastName,
      employeeId,
      otherIdTest,
      driversLicenseNumber,
      licenseExpiryDate
    );
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
